# ADR-0003 — Separação inicial dos domínios de dados

**Status:** Aprovado como direção arquitetural; schemas sujeitos a revisão  
**Data:** 08/10/2026  
**Decisor:** Rudson Rodriguez — Fundador

## Decisão

- Supabase armazenará prioritariamente dados estruturados de usuários e suas relações.
- Firebase/Google Cloud armazenará prioritariamente autenticação, operação interna, estados de agentes, auditoria e evidências.
- GitHub armazenará engenharia, documentação e código.
- Vercel hospedará aplicação e funções compatíveis, sem tornar-se fonte mestre de dados.

## Limites

A divisão não autoriza duplicação indiscriminada. Cada entidade terá fonte mestre definida. Segredos permanecem em mecanismos server-side apropriados e não em tabelas ou documentos comuns.

## Consequências

Antes da implementação serão definidos identificadores compartilhados, contratos de sincronização, política de retenção e responsável por cada classe de dado.

