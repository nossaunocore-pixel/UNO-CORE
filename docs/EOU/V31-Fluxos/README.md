# EOU-V31 — Fluxos

- Versão documental: 0.2.0
- Estado: rascunho técnico; contratos transversais parciais
- Relacionados: V05 Oficina Mestre, V06 Centro de Operações, V07 CCM, V08 OPS, V10 Agentes, V14 APIs, V17 Governança, V29 Projetos, V32 Automações

## 1. Finalidade
Definir o modelo universal de processos e fluxos executáveis no UNO, com estados, transições, atores, condições, aprovações, efeitos, compensações e evidências.

## 2. Estrutura de um fluxo
Cada fluxo declara `flow_id`, versão, domínio, objetivo, gatilho, solicitante, participantes, pré-condições, entradas, estados, transições, regras, permissões, efeitos, eventos, prazo, timeout, custo, tratamento de falha, compensação, critérios de sucesso e responsável.

## 3. Máquina de estados
Estados explícitos; transições permitidas e negadas; validação no servidor; transições atômicas quando possível. Estados sugeridos: criado, aguardando, em análise, aprovado, em execução, concluído, falho, cancelado, suspenso e compensado. Cada domínio deve definir seu conjunto concreto.

## 4. Autorização
Cada etapa verifica identidade, papel, escopo, titularidade, consentimento e alçada. Fluxos críticos exigem aprovação humana. Um agente não pode aprovar sua própria solicitação quando houver segregação exigida.

## 5. Confiabilidade
Idempotência, correlação, timeout, retry limitado, compensação, deduplicação e recuperação após falha. Não tratar retry como rollback. Efeitos externos não transacionais exigem reconciliação e estado de resultado incerto.

## 6. Orquestração
O Orquestrador Mestre pode coordenar fluxos e agentes, mas não ultrapassa políticas. V07 CCM trata coordenação/missões; V08 OPS trata execução operacional/observabilidade; V32 trata disparos e automações programadas. V31 define o contrato comum.

## 7. Auditoria
Registrar início, transição, ator, regra aplicada, aprovação, saída, erro, compensação e encerramento. Correlation ID liga eventos sem expor dados sensíveis.

## 8. Testes e aceite
Cobrir transições inválidas, concorrência, repetição, timeout, falha parcial, compensação, revogação de acesso, aprovação ausente e recuperação. Cada fluxo deve ter testes de caminho feliz e negativo.

## 9. Estado e lacunas
Há motor e páginas de execução no código, mas o mapa classifica parte como parcial. Ainda é necessário inventário de fluxos, schema canônico, persistência, scheduler, fila, compensações e observabilidade ponta a ponta.

## 10. Pendências
Definir DSL/formato, engine, persistência de estado, política de retry, versionamento, eventos e governança de publicação de fluxos.

## 11. Histórico
0.2.0 — contrato conceitual e técnico inicial; 2026-10-31.
