# EOU-V08 — Registro de definição pendente de OPS

- Data: 2026-10-31
- Estado: **decisão do fundador pendente**
- Severidade na auditoria: P1
- Não constitui ADR aprovado nem altera o nome oficial do catálogo.

## 1. Divergência encontrada

O catálogo e o README atual nomeiam V08 como **Sistema Universal de Missões (OPS)** e dizem que o volume define o modelo universal de missões.

Entretanto, o capítulo 001 (Fundamentos e Identidade de OPS) define OPS como **Capacidade Operacional Sistêmica** e descreve o domínio responsável por preservar, operar, observar, sustentar, recuperar e evoluir as capacidades necessárias para a UNO permanecer operacionalmente utilizável.

O próprio capítulo estabelece a distinção:
- CCM/V07 pergunta o que precisa acontecer e coordena propósito/missões.
- OPS/V08 pergunta o que precisa continuar funcionando para que isso aconteça de forma confiável.

Os 33 capítulos do diretório V08-OPS tratam predominantemente de domínios e capacidades operacionais, serviços operacionais, estados e ciclo de vida, operação contínua, observabilidade, saúde, incidentes, mudanças, deploy/release, configuração, capacidade, disponibilidade, dependências, contingência, recuperação, backup, runbooks, automação, agentes operacionais, segurança, operação federada, turnos, crise, métricas, aprendizagem, resiliência e garantias.

## 2. Caminhos possíveis

**Alternativa A — Manter “Sistema Universal de Missões”:** manter o nome atual do catálogo e reespecificar o conteúdo de V08 para ser realmente o modelo/ciclo universal de missões. O conteúdo OPS atual teria de ser realocado ou refeito com preservação do histórico.

**Alternativa B — Reconhecer V08 como domínio OPS operacional:** manter o conteúdo dos 33 capítulos e corrigir o nome completo e a finalidade no catálogo/README, mediante decisão explícita do fundador. A relação com V07/CCM e V31 Fluxos precisaria ser ratificada.

**Alternativa C — Separar os domínios:** reservar V08 para um dos conceitos e criar/realocar o outro domínio em volume próprio, sem renumerar ou mover capítulos até aprovação e análise de impacto.

## 3. O que não será presumido

- Não renomear V08 por inferência.
- Não mover, apagar ou sobrescrever capítulos.
- Não declarar que a relação V07↔V08 está aprovada.
- Não tratar operações técnicas como missões institucionais sem contrato explícito.
- Não habilitar OPS, engine operacional, automações ou controles por este registro.

## 4. Decisões necessárias

O fundador deve confirmar:
- nome completo e expansão oficial de OPS;
- se V08 é o domínio de operações/capacidades operacionais ou o sistema universal de missões;
- relação formal entre V07, V08 e V31;
- destino do conteúdo atual dos 33 capítulos caso o escopo seja alterado;
- vocabulário canônico de missão, capacidade operacional, serviço operacional e fluxo.

## 5. Critérios de fechamento

Após a decisão: atualizar catálogo, README, glossário, matriz de ownership, ADR-EOU-003, dependências, diagramas e critérios de aceite. Preservar histórico Git e manter uma única fonte de verdade por conceito.

**Conclusão:** o conteúdo atual de V08 apresenta uma arquitetura OPS de operações sistêmicas, enquanto o nome atual apresenta um sistema universal de missões. A decisão é estrutural e pertence ao fundador.
