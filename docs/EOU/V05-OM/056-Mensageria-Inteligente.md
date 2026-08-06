# 056 — Mensageria Inteligente

## Objetivo

Definir o sistema oficial de Mensageria Inteligente utilizado pela Plataforma UNO.

---

## Conceito

Mensageria Inteligente representa o mecanismo utilizado pelo OM para distribuir informações entre componentes do ecossistema.

Diferentemente de um sistema tradicional de mensagens, a Mensageria Inteligente compreende contexto, prioridade e destino antes de encaminhar qualquer informação.

Ela decide:

- quem precisa receber;
- quando receber;
- como receber;
- se realmente precisa receber.

---

## Tipos de Mensagem

Entre as mensagens poderão existir:

- comandos;
- solicitações;
- notificações;
- eventos;
- confirmações;
- respostas;
- alertas;
- sincronizações.

---

## Prioridades

As mensagens poderão possuir níveis diferentes de prioridade.

Por exemplo:

- crítica;
- alta;
- normal;
- baixa;
- informativa.

O OM deverá organizar automaticamente sua distribuição.

---

## Persistência

Mensagens importantes deverão permanecer disponíveis até sua conclusão ou confirmação.

---

## Princípio

A mensagem certa deve chegar à entidade certa no momento certo.
