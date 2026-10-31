# EOU-V32 — Especificação técnica de Automações

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; não habilita scheduler ou automações de produção
- Dependências: V05, V09–V17, V29–V31, V33, V36

## 1. Fronteira e modelo
Automação é uma política versionada de disparo/agenda que inicia ou retoma um fluxo V31 sob limites definidos. Não é um agente, não é uma permissão e não é o próprio processo.

Automation(id, owner, purpose, lifecycle_state, current_version).
AutomationVersion(id, automation_id, trigger_type, trigger_config, timezone, flow_definition_ref, input_schema, concurrency_limit, rate_limit, budget_ref, active_window, stop_condition, retry_policy, version).
AutomationGrant(id, automation_id, principal, scopes, resource_filter, validity, granted_by, revoked_at).
AutomationSchedule(id, version, next_run_at, timezone, schedule_state, lease_ref).
AutomationRun(id, version, trigger_event_id, flow_instance_id, state, attempt, started_at, finished_at, cost, correlation_id).
AutomationSuppression(id, version, reason, policy_ref, timestamp).
AutomationIncident(id, run_id, severity, containment, resolution_ref).

## 2. Gatilhos
Tempo/cron, evento de domínio, condição avaliada, solicitação manual e dependência de fluxo. Cada gatilho tem schema e origem confiável. Evento externo exige assinatura/validação; condição usa fonte declarada e janela de avaliação. Prevenir autoacionamento recursivo e loops por grafo de dependência.

## 3. Calendário e execução
Persistir timezone IANA e regra de calendário; tratar horário de verão, datas inexistentes/duplicadas, mudança de fuso e janela de silêncio. Scheduler cria ocorrência com chave determinística; lock/lease evita dois workers executarem a mesma ocorrência. Atraso e missed run seguem política explícita: descartar, executar uma vez ou recuperar janela limitada.

## 4. Autorização e limites
Cada execução revalida grant, consentimento, finalidade, ownership, estado do fluxo e políticas. Limites: frequência, concorrência, duração, tamanho de lote, custo/orçamento e número de tentativas. Falta de configuração obrigatória bloqueia execução. Alteração de escopo, destino, gatilho ou fluxo requer nova versão e aprovação humana. Kill switch global e por automação.

## 5. Idempotência e falhas
Chave idempotente combina automação, versão e ocorrência/gatilho. Retry apenas para falha transitória e operação segura; backoff com jitter e limite. Dead-letter exige triagem; replay revalida autorização e não repete efeitos confirmados. Estado desconhecido exige reconciliação. Falha repetida pausa automação conforme política.

## 6. Segurança e observabilidade
Isolar credenciais por ambiente; segredos somente via referência segura. Registrar gatilho, decisão de autorização, versão, execução, fluxo associado, custo, duração, supressões, tentativas e resultado. Alertar sobre loops, picos, custo, backlog, falhas e execução fora da janela. Conteúdo de evento não pode sobrescrever política ou prompt de sistema.

## 7. Ciclo de vida
Rascunho → revisão → sandbox → aprovado → habilitado → pausado/suspenso → desativado. Habilitação exige owner, propósito, escopos, limites, teste, plano de parada e aprovador. Edição material cria nova versão; rollback restaura configuração anterior sem apagar histórico. Automação pausada não inicia novas execuções; execuções ativas seguem política de contenção.

## 8. Testes e aceite
Testar cron/fuso/horário de verão, evento falso/replay, duplicidade, concorrência, lock expirado, missed run, loop, limite de custo, grant revogado, consentimento ausente, kill switch, retry, dead-letter, replay e shutdown. Aceite requer scheduler confiável, fila, locks, idempotência, limites, auditoria, kill switch e sandbox testado.

## 9. Pendências
Escolher scheduler/fila, garantias de entrega, política de missed runs, orçamento e alertas, alçadas de ativação, política de execução fora de janela, kill switch e observabilidade.
