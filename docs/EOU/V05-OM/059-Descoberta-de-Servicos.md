# 059 — Descoberta de Serviços

## Objetivo

Definir como o Orquestrador Mestre localiza automaticamente os serviços necessários para cada operação.

---

## Conceito

A Descoberta de Serviços representa a capacidade do OM de identificar quais serviços melhor atendem determinada intenção.

A escolha não deverá considerar apenas disponibilidade.

Também deverão ser analisados:

- contexto;
- desempenho;
- confiança;
- custo;
- proximidade;
- compatibilidade;
- políticas do domínio.

---

## Processo

Sempre que uma operação exigir determinado serviço, o OM deverá:

- identificar a necessidade;
- consultar o catálogo;
- comparar alternativas;
- validar requisitos;
- selecionar a melhor opção;
- monitorar sua execução.

---

## Redundância

Sempre que possível, o OM deverá conhecer serviços equivalentes para garantir continuidade operacional.

---

## Princípio

Encontrar o melhor serviço é parte da própria operação.
