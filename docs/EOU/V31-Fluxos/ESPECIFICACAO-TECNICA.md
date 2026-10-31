# EOU-V31 — Especificação técnica de Fluxos

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; não declara engine de workflow plenamente operacional
- Dependências: V05–V08, V10, V11, V13–V17, V29, V30, V32, V33, V36

## 1. Fronteira
Fluxo é definição versionada de processo e sua máquina de estados. Instância é uma execução concreta. Tarefa é unidade atribuída. Automação V32 decide quando iniciar/retomar; agente V10 pode executar tarefas autorizadas; V07 coordena missões; V08 registra operação; V17 governa permissões. Nenhum componente pode alterar alçadas por conveniência.

## 2. Modelo lógico
FlowDefinition(id, domain, version, schema_ref, owner, state, policy_ref).
FlowNode(id, definition_version, node_type, input_schema, output_schema, timeout, effect_class).
FlowTransition(id, from_node, to_node, condition_ref, guard_ref, compensation_ref).
FlowInstance(id, definition_id, version, business_ref, requester, state, correlation_id, created_at, deadline).
FlowTask(id, instance_id, node_id, assignee, state, attempt, due_at, result_ref).
FlowApproval(id, instance_id, action, approver, decision, scope, evidence_ref, decided_at).
FlowEffect(id, instance_id, effect_type, idempotency_key, state, external_ref, reconciliation_state).
FlowEvent(id, instance_id, sequence, event_type, actor, timestamp, payload_ref).
FlowCheckpoint(id, instance_id, node_id, state_ref, created_at).
FlowIncident(id, instance_id, severity, containment, resolution_ref).

## 3. Definição e publicação
Fluxo define objetivo, gatilho permitido, entradas/saídas tipadas, nós, transições, guardas, autorização, limites, timeout, compensação, tratamento de erro, observabilidade e critérios de aceite. Publicação exige versionamento imutável, revisão técnica/segurança conforme risco, testes e aprovação humana. Instâncias existentes permanecem presas à versão iniciada, salvo migração explícita testada.

## 4. Máquina de execução
Instância avança por eventos sequenciais; transição verifica estado atual, versão, guarda, autorização e pré-condições. Atualização concorrente usa controle otimista/lock para impedir dupla transição. Eventos repetidos são deduplicados por ID e idempotency key. Resultado externo incerto é classificado como desconhecido/aguardando reconciliação, não sucesso nem falha presumida.

## 5. Efeitos e compensação
Separar ação local transacional de efeito externo. Retry apenas para erro transitório e operação idempotente. Compensação é ação de negócio explícita, não rollback mágico; exige permissão e registro. Pagamento, publicação, envio de mensagem e alteração de acesso precisam de confirmação/controle do domínio. Nunca repetir cobrança sem consultar estado no provedor.

## 6. Autorizações e intervenção
Cada nó declara ator, finalidade, recurso, escopo e classe de efeito. Grants são consultados no servidor no momento da ação. Aprovações são ligadas à versão, instância, ação e dados relevantes; mudança material invalida aprovação anterior. Segregação de solicitante/aprovador/executor é aplicada conforme política V17. Revogação interrompe próximas ações e aciona contenção para tarefas em curso.

## 7. Resiliência e observabilidade
Persistir checkpoints e outbox transacional; fila com entrega pelo menos uma vez e consumidores idempotentes; timeout, heartbeat, retry limitado, dead-letter e replay controlado. Replay não repete efeitos já confirmados. Métricas: duração por etapa, backlog, falha, timeout, compensação, estado incerto, custo e bloqueios de autorização. Correlation ID atravessa serviços.

## 8. Segurança e dados
Schemas limitam entrada/saída; conteúdo externo é dado não confiável; segredos são referências; logs minimizam payload. Isolar instâncias por tenant/entidade e validar ownership. Ferramentas são allowlist. Definição de fluxo não pode conceder escopos ao executor.

## 9. Testes e aceite
Testar transição inválida, concorrência, evento duplicado, worker interrompido, timeout, retry, efeito incerto, compensação, grant revogado, aprovação vencida, versão alterada, dead-letter, replay e isolamento. Aceite requer engine/persistência, versionamento, outbox, idempotência, observabilidade, autorização, recuperação e testes ponta a ponta.

## 10. Pendências
Escolher engine/DSL, modelo de persistência, garantias de fila, política de migração de instâncias, matriz de efeitos/compensação, SLA por domínio e operação de replay.
