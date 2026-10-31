# EOU-V32 — Automações

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico; automações de produção não declaradas habilitadas
- Relacionados: V05 Oficina Mestre, V09 Capacidades, V10 Agentes, V11 Ferramentas, V14 APIs, V16 Segurança, V17 Governança, V31 Fluxos

## 1. Finalidade
Definir como tarefas recorrentes ou condicionais podem ser disparadas e executadas com segurança, previsibilidade, autorização, observabilidade e possibilidade de pausa.

## 2. Diferença entre fluxo e automação
V31 define o processo e suas transições. V32 define gatilhos, agenda, condições e política para iniciar ou repetir um fluxo. Automação não é autorização: cada execução revalida permissões, escopo e contexto.

## 3. Registro
Cada automação possui ID estável, nome, finalidade, proprietário, versão, gatilho (tempo, evento, condição ou solicitação), calendário/fuso, parâmetros, fluxo chamado, identidade executora, escopos, limite de execuções, orçamento, janela de atividade, política de retry, timeout, critério de parada, responsável e estado.

## 4. Ciclo de vida
Rascunho → revisão → teste → aprovação → habilitada → pausada → desativada. Ativação exige autorização humana, evidência de teste, limites e plano de interrupção. Mudança de gatilho, escopo ou destino exige nova revisão.

## 5. Segurança e controle
- Negar execução se escopo, consentimento ou pré-condição não estiverem válidos.
- Limitar frequência, concorrência, orçamento e duração.
- Impedir loops, tempestades de eventos e autoacionamento recursivo.
- Exigir confirmação para efeitos externos irreversíveis ou financeiros.
- Disponibilizar kill switch e suspensão por falha.
- Registrar cada execução e motivo de bloqueio.

## 6. Confiabilidade
Deduplicação, idempotência, locks, backoff, dead-letter, compensação e recuperação. Agendamentos devem tratar fuso, horário de verão, mudanças de calendário e execução perdida. Repetição não deve gerar cobrança ou publicação duplicada.

## 7. Dados e privacidade
Automação só acessa dados mínimos do fluxo e respeita retenção, consentimento e políticas de domínio. Logs não devem incluir segredos ou payloads sensíveis desnecessários.

## 8. Testes e aceite
Testar gatilhos, fuso, duplicidade, concorrência, loop, falha parcial, revogação, pausa, kill switch, custo, limite global e retomada. Testes em sandbox antes de produção.

## 9. Estado e pendências
Há referências a motor de execução e Oficina, mas não há comprovação de scheduler/engine de automação completo. Definir tecnologia, persistência, filas, cron, política de aprovação e monitoramento.

## 10. Histórico
0.2.0 — contrato inicial de automações; 2026-10-31.
