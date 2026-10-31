# UNO CORE — Plataforma UNO

> Camada universal de orquestração e governança de capacidades.  
> **Branch de trabalho:** `v7-implementation`  
> **Status:** V7 em consolidação; não declarar pronta para produção sem build, testes e evidências.

## Propósito

A Plataforma UNO conecta pessoas, organizações, serviços, conhecimento e oportunidades com integridade, segurança, rastreabilidade e autorização humana. O UNO CORE governa capacidades, agentes, integrações, missões e permissões.

## Regras essenciais do MVP

- Somente landing page e boas-vindas podem ser acessadas anonimamente.
- A entrada nos ambientes internos exige autenticação Google.
- Autenticação não é adesão paga: visitante autenticado pode usar capacidades internas gratuitas elegíveis.
- Capacidades com consumo de tokens/APIs, integração externa, contratação, qualificação ou autorização ficam condicionadas.
- Painel Mestre exige autorização explícita server-side.
- Nenhuma interface isolada concede acesso a dados ou operações.
- Estados de disponibilidade devem refletir implementação e testes reais.

## Arquitetura de identidade e dados

- **Firebase:** autenticação Google, identidade, IDU e memória interna institucional/operacional, conforme integração validada.
- **IDU:** identificador UNO independente de e-mail, Firebase UID e IDs de banco.
- **Supabase:** dados de uso/produto, conteúdo e arquivos, protegidos por RLS e políticas de ownership/escopo.
- **Backend:** valida tokens, provisiona IDU, aplica autorização e mantém segredos fora do navegador.
- O uso de JWT Firebase no Supabase depende da configuração e validação do Firebase Third-Party Auth no projeto.
- Nunca expor service-role, service account ou chaves secretas em variáveis `VITE_*`.

Consulte [Arquitetura](spec/ARCHITECTURE.md) e [Especificação Mestra](spec/MASTER_SPEC.md).

## Stripe — somente ambiente de testes

A estrutura inicial de produtos/preços foi criada e verificada na conta principal UNO-Nós S.A., em test mode. Consulte [Catálogo Stripe de teste](docs/STRIPE_TEST_CATALOG.md).

- Não realizar cobranças reais nesta fase.
- Não ativar Connect, transferências, payouts, saques ou carteira sacável.
- Não ativar Stripe Tax sem validação das obrigações e registros fiscais.
- Checkout, webhooks e concessão de acesso ainda precisam ser implementados e testados no backend.
- Segredos Stripe devem permanecer server-side, preferencialmente em chaves restritas com privilégio mínimo.

## Stack observada

- React 18
- TypeScript 5
- Vite 5
- Firebase 12
- Supabase JS 2
- Vercel AI SDK e integração Google AI

## Como executar localmente

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

As variáveis de ambiente devem ser configuradas localmente com base no `.env.example`. Não comitar segredos. O build ainda precisa ser executado após as alterações desta revisão.

## Documentação

- [Especificação Mestra V7](spec/MASTER_SPEC.md)
- [Arquitetura](spec/ARCHITECTURE.md)
- [Decisões arquiteturais](spec/DECISIONS.md)
- [Roadmap](spec/ROADMAP.md)
- [Matriz de acesso e capacidades](spec/V7_MVP_ACCESS_AND_CAPABILITIES.md)
- [Catálogo Stripe de teste](docs/STRIPE_TEST_CATALOG.md)

## Estado de entrega

A documentação e parte dos controles de frontend foram atualizados. A jornada pública landing/boas-vindas, o provisionamento server-side do IDU, a validação completa de claims, RLS, capacidades, checkout/webhooks, testes automatizados, build e validação Vercel ainda precisam de implementação ou evidência. Não considerar esta branch homologada para produção.
