# ADR-EOU-003 — Fronteiras entre Oficina, Operações, Missões, Fluxos e Cognição

- Estado: **proposta para decisão do fundador e revisão técnica**
- Data: 2026-10-31
- Relacionados: EOU V05, V06, V07, V08, V10, V11, V16, V17, V31, V32, V33, V36
- Não aprovado: não autoriza runtime, autonomia, ativação ou execução operacional.

## 1. Contexto

Os volumes V05–V08 representam capacidades centrais de engenharia e operação. V31–V33 especificam processos, automações e raciocínio. Sem contratos de fronteira, pode haver duplicidade entre ferramentas de autoria, observação operacional, coordenação de missões, ciclo de missão, workflow, scheduler e motor cognitivo.

## 2. Divisão de responsabilidade proposta

| Volume | Responsabilidade primária proposta | Não deve assumir |
|---|---|---|
| V05 — Oficina Mestre | Criar, editar, testar, versionar e preparar artefatos e mudanças | Aprovar/ativar por conta própria; executar missão em produção |
| V06 — Centro de Operações | Observar, acompanhar e administrar operações já autorizadas; apoiar resposta operacional | Criar autoridade, grants, missões ou políticas; substituir V07/V08 |
| V07 — Central de Coordenação de Missões | Coordenar missão, responsáveis, recursos, dependências, acompanhamento e encerramento | Ser motor genérico de workflow ou scheduler |
| V08 — Sistema Universal de Missões | Definir o modelo/ciclo universal de missão, estados e registros de resultado | Ser ferramenta de autoria, painel de operações ou motor cognitivo |
| V31 — Fluxos | Definir processo versionado, instâncias, tarefas, estados, transições, aprovações e efeitos | Escolher autonomamente quando iniciar; conceder permissão |
| V32 — Automações | Gerir gatilhos/agendas, limites e disparos que iniciam/retomam fluxos V31 | Ser agente, fluxo de domínio ou autoridade de acesso |
| V33 — Motor Cognitivo | Interpretar, recuperar contexto autorizado, planejar, selecionar modelos/ferramentas e avaliar saídas | Ser identidade, autoridade, scheduler, executor soberano ou fonte de grants |

## 3. Relação de colaboração proposta

1. V05 prepara e versiona a definição de um artefato; revisão e aprovação são etapas separadas.
2. V17 determina grants, alçadas e autorizações; V16 registra controles e evidências.
3. V07 organiza a missão e seus participantes/recursos segundo o modelo de V08.
4. V08 mantém o ciclo e os registros universais da missão; os processos detalhados podem ser implementados por fluxos V31.
5. V32 dispara ou retoma uma instância V31 somente com gatilho, versão, limites e autorização válidos.
6. V33 pode apoiar interpretação e planejamento, mas qualquer chamada de ferramenta ou efeito depende de V11, V17 e do contrato do fluxo.
7. V06 acompanha estados e incidentes operacionais, sem assumir a titularidade dos registros transacionais de cada domínio.

## 4. Contratos e dados que precisam ser definidos

- Identificador canônico de missão e sua relação com FlowInstance.
- Quando uma missão contém um ou mais fluxos, e como fluxo pode existir sem missão.
- Ownership de estado, eventos, tarefas, prazos, resultados e incidentes.
- Estados universais mínimos de missão versus estados específicos de domínio.
- Papéis de solicitante, coordenador, executor, aprovador, observador e auditor.
- Modelo de recurso/reserva, dependência, cancelamento, pausa, retomada e encerramento.
- Eventos e contratos idempotentes entre V07, V08, V31 e V32.
- Interface de observabilidade e comandos autorizados do V06.
- Artefatos e versões publicados pela V05 e aprovadores segundo V17.
- Limites de uso de V33 e confirmação humana por classe de efeito.

## 5. Regras de segurança propostas

- Planejamento cognitivo não é autorização nem execução.
- Definição de fluxo/automação não concede grant.
- V32 revalida autorização e condições no momento do disparo e da execução.
- Mudança de definição cria versão; instâncias em curso não migram silenciosamente.
- Operações com efeitos externos usam idempotência, reconciliação e compensação explícita.
- Revogação bloqueia novas ações e aciona contenção para execuções em curso conforme risco.
- Centro de Operações não pode criar ou ampliar poderes por interface.
- Ações financeiras, jurídicas, administrativas, públicas ou irreversíveis exigem aprovação humana conforme política do domínio.

## 6. Alternativas consideradas

- **Um único volume de missão/workflow:** simplifica a visão inicial, mas mistura coordenação, ciclo de missão, processo e disparo.
- **V07 como motor de workflow e scheduler:** rejeitada nesta proposta porque sobrecarrega coordenação e duplica V31/V32.
- **V33 como agente executor universal:** rejeitada porque mistura raciocínio com autoridade e runtime.
- **Separação por responsabilidades acima:** recomendada para validação, sem declarar qualquer componente implementado.

## 7. Decisões necessárias

O fundador e revisão técnica devem confirmar:
- a divisão de responsabilidades por volume;
- a relação entre missão V08 e instância de fluxo V31;
- os limites de comando do Centro de Operações V06;
- o papel da Oficina Mestre V05 no ciclo de aprovação/publicação;
- a política de autonomia/confirmacão humana do V33;
- a matriz de alçadas V17 aplicável.

## 8. Critérios de aceite

- decisão explícita do fundador;
- diagramas de contexto, sequência e estados para missão/fluxo;
- ownership de entidades e eventos definido em V13;
- contratos de API/eventos versionados em V14/V15;
- grants e alçadas definidos em V17;
- testes de duplicidade, concorrência, revogação, idempotência, efeitos incertos e kill switch;
- CI documental e de código no SHA exato.

## 9. Estado de implementação

Nenhum runtime, scheduler, engine, agente, ferramenta ou comando operacional é habilitado por este ADR. Todos os itens acima permanecem proposta documental até ratificação e implementação verificável.
