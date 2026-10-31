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
