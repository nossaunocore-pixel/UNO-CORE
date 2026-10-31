# EOU-V04 — Registro de definição pendente da EVA

- Data: 2026-10-31
- Estado: **decisão do fundador pendente**
- Severidade na auditoria cruzada: P1
- Não constitui ADR aprovado nem escolhe uma das definições.

## Divergência encontrada

Há duas definições incompatíveis para a sigla EVA:

1. O catálogo EOU apresenta V04 como **EVA — Enciclopédia Visual Adaptativa**.
2. O README existente em `V04-EVA/README.md` define EVA como **Ecossistema de Valor e Aprendizagem**, descrevendo aprendizagem, conhecimento, memória, contexto e evolução da inteligência.

As duas definições apontam para escopos distintos. A primeira sugere um sistema de representação/experiência visual adaptativa; a segunda, um fundamento de aprendizagem e inteligência organizacional.

## O que não será presumido

- Não será escolhida uma expansão por inferência.
- Não será apagado nem reescrito o README atual antes da decisão.
- Não será presumido que uma das definições substitui a outra.
- Não serão criados contratos, schemas ou dependências de implementação para V04 enquanto a finalidade não estiver definida.
- O número V04 permanece reservado; o conflito é semântico e de escopo, não motivo para renumerar volumes.

## Caminhos possíveis para decisão

**Alternativa A — Enciclopédia Visual Adaptativa:** manter o nome do catálogo e revisar o README para definir finalidade, usuários, fontes de dados, adaptação visual, acessibilidade, representação e limites. A dimensão de aprendizagem/inteligência seria transferida para o volume apropriado, caso o fundador confirme.

**Alternativa B — Ecossistema de Valor e Aprendizagem:** manter a definição atual do README e corrigir o catálogo. Nesse caso, será necessário especificar o domínio de aprendizagem, memória, conhecimento, contexto, proveniência e relação com V33/V34, evitando sobreposição.

**Alternativa C — Separar os dois conceitos:** manter um deles como V04 e propor que o outro seja alocado em outro volume ou subdomínio. Qualquer renumeração, transferência ou criação de volume exige aprovação explícita e revisão das referências.

## Requisitos para fechar a decisão

O fundador deve confirmar:
- nome completo e expansão oficial de EVA;
- finalidade principal do V04;
- quais responsabilidades pertencem a V04 e quais pertencem a V33, V34 ou outros volumes;
- se o conteúdo atual do README será mantido, adaptado ou transferido;
- quais referências históricas devem ser preservadas.

Após a decisão, atualizar de forma coordenada catálogo, README, glossário, matriz de ownership, dependências, ADRs e critérios de aceite.

## Estado de segurança

Até a decisão, V04 deve ser tratado como domínio com definição pendente. Nenhum comportamento de produção, API, schema, permissão ou agente deve ser inferido deste registro.


## Evidência adicional encontrada no legado de V06

A inspeção do capítulo `V06-CO/001-Proposito-do-CO.md` encontrou uma terceira expansão histórica: **“Engenharia da Vida e da Inteligência (EVA)”**. O mesmo capítulo define CO como **“Catálogo Organizacional”**, uma quarta forma de identificar o escopo legado do volume V06, distinta do título “Conhecimento Organizacional” usado no README histórico e do nome atual “Centro de Operações”.

O diretório V04 contém **145 capítulos numerados**. Seus títulos cobrem compreensão, aprendizagem, conhecimento, memória, assistentes, contexto, cognição, agentes, capacidades, curadoria e evolução do conhecimento. Essa estrutura é evidência de que o conteúdo atual de V04 se desenvolveu majoritariamente como ecossistema de aprendizagem/cognição; não prova que essa seja a expansão que o fundador deseja oficializar e não elimina a alternativa “Enciclopédia Visual Adaptativa”.

Assim, a decisão pendente passa a comparar pelo menos três usos documentados da sigla EVA:

1. **Enciclopédia Visual Adaptativa** — nome registrado no catálogo atual.
2. **Ecossistema de Valor e Aprendizagem** — expansão do README atual de V04.
3. **Engenharia da Vida e da Inteligência** — expansão encontrada em capítulo legado de V06.

Não consolidar, fundir ou renomear essas definições sem confirmação explícita do fundador. A leitura do restante dos 145 capítulos e o mapeamento do legado de V06 ainda podem revelar outras ocorrências ou nuances.
