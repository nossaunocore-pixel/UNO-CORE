# 07 — Ciclo de Vida das Entidades

## Objetivo

Toda entidade existente na Plataforma UNO percorre um ciclo de vida.

Compreender esse ciclo permite acompanhar sua evolução, preservar seu histórico e manter a consistência das informações ao longo do tempo.

O Modelo Universal define um ciclo de vida comum para todas as entidades, permitindo especializações conforme cada domínio.

---

## Conceito

Uma entidade não é estática.

Ela nasce, evolui, estabelece relacionamentos, modifica atributos, assume novos papéis e eventualmente encerra sua participação ativa no ecossistema.

O ciclo de vida representa essa evolução.

---

## Estados Fundamentais

Toda entidade poderá percorrer os seguintes estados:

- Planejada
- Em criação
- Ativa
- Em evolução
- Suspensa
- Arquivada
- Encerrada

Nem todas as entidades obrigatoriamente passarão por todos os estados.

---

## Transições

Mudanças de estado deverão obedecer regras definidas pela Engenharia Oficial.

Cada transição deverá gerar registro histórico contendo:

- data;
- responsável;
- motivo;
- contexto;
- alterações realizadas.

---

## Permanência da Identidade

Mesmo quando uma entidade for encerrada ou arquivada, sua identidade deverá permanecer preservada para fins históricos, auditoria e rastreabilidade.

---

## Evolução

O ciclo de vida poderá ser especializado por cada categoria de entidade, preservando sempre os princípios definidos neste capítulo.
