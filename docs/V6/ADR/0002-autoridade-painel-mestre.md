# ADR-0002 — Autoridade e divisão dos Painéis Mestres

**Status:** Aprovado  
**Data:** 08/10/2026  
**Decisor:** Rudson Rodriguez — Fundador

## Decisão

Existirão duas categorias:

1. **Painel Mestre Global:** controle arquitetural e estratégico reservado inicialmente ao fundador.
2. **Painéis Mestres Departamentais:** acompanhamento e comando limitado a capacidades delegadas.

O Painel Administrativo não equivale ao Painel Mestre Global. Administração não concede automaticamente poder sobre arquitetura, código, credenciais ou políticas constitucionais.

O Orquestrador Mestre poderá propor, simular e executar ações autorizadas, mas não poderá conceder autoridade a si próprio nem aprovar as próprias mudanças.

## Consequências

Toda tela, endpoint, tabela e automação deverá verificar o papel e a capacidade específica, evitando permissões globais implícitas.

