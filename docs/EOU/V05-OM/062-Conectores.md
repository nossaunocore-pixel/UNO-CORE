# 062 — Conectores

## Objetivo

Definir os Conectores como componentes responsáveis por estabelecer comunicação entre a Plataforma UNO e recursos externos.

---

## Conceito

Um Conector representa uma adaptação especializada entre o modelo operacional da UNO e determinado sistema externo.

Cada conector conhece as regras, protocolos, formatos de dados e mecanismos de autenticação necessários para estabelecer comunicação segura.

O Orquestrador Mestre interage com capacidades.

Os conectores traduzem essas capacidades para tecnologias específicas.

---

## Funções

Os conectores poderão:

- enviar informações;
- receber informações;
- consultar dados;
- executar operações;
- monitorar estados;
- receber eventos;
- sincronizar registros.

---

## Independência

A substituição de um conector não deverá alterar o comportamento operacional da Plataforma.

---

## Evolução

Novos conectores poderão ser adicionados continuamente conforme surgem novas tecnologias.

---

## Princípio

Os conectores aproximam tecnologias.

O OM permanece independente delas.
