# Pacote de continuidade de implementação V7 — 31/10/2026

**Branch:** `v7-implementation`  
**Pull Request:** #1, manter Draft até checklist de aceite  
**Base preservada:** V6  
**Ambiente:** Preview/Teste; nenhuma promoção para produção autorizada.

## 1. O que já foi preparado nesta rodada

- CI GitHub Actions com Node 24, regeneração controlada do lockfile da branch V7, instalação limpa e build.
- Contratos de domínio:
  - `src/domain/catalog.ts`: produtos/serviços UNO e de terceiros, responsabilidade, estados e validação de publicação.
  - `src/domain/panels.ts`: Painel Mestre, Administrativo, Coordenação Geral, Jurídico, Contábil/Financeiro, Financeiro da Plataforma/Stripe e Atendimento escalonado.
  - `src/domain/experiences.ts`: Perfil, Casa, Emprego e Renda, Instituições, Comunidade, Participação, Lazer, Vitrine, Serviços e Serviços Ativos.
- Camada pública Supabase-only:
  - `src/services/supabasePublic.ts` independente de Firebase.
  - allowlist de rotas públicas em `PageAccessGateV7`.
  - Conversa visitante usa sessão anônima Supabase, não Firebase Anonymous.
  - `api/public/chat.ts` separado da rota privada.
  - `api/chat.ts` exige Google verificado e IDU.
  - limite por visitante e limite global diário fail-closed.
- Migrações preparadas:
  - `20261031170000_firebase_idu_text_identity.sql`
  - `20261031171000_public_chat_rate_limits.sql`
  - `20261031172000_public_chat_global_cap.sql`
- ADR-0013 e matriz de acesso atualizadas.
- Mapa dos 40 volumes e template implementável criados.

## 2. Ordem de execução para Antigravity

1. Fazer checkout de `v7-implementation`; não sobrescrever V6 nem aplicar merge em main.
2. Aguardar CI e Vercel Preview; corrigir todo erro de TypeScript/build antes de avançar.
3. Confirmar o lockfile sincronizado pelo CI e revisar dependências.
4. Verificar variáveis Vercel por ambiente, sem imprimir valores:
   - `FIREBASE_SERVICE_ACCOUNT_JSON` — ausente na auditoria; inserir como secret server-side após confirmação.
   - `UNO_FOUNDER_UID` — ausente; preencher somente com UID Firebase confirmado pelo fundador.
   - `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT` — ausente; não escolher valor por conta própria. Endpoint público permanece desabilitado enquanto vazio.
   - `SUPABASE_SERVICE_ROLE_KEY` — já existe server-side; nunca usar prefixo `VITE_`.
5. No Supabase de teste, confirmar projeto Firebase `uno-core-a9125` e configurar Third-Party Auth antes de aplicar a migration de IDU.
6. Habilitar Anonymous Sign-Ins e CAPTCHA/Turnstile no Supabase Auth. Definir retenção e limpeza de contas anônimas.
7. Revisar as três migrations em ambiente de teste, conferir preflight/zero rows, aplicar uma por vez e testar RLS com visitante anônimo, usuário Google e tentativa de acesso cruzado. Não aplicar no projeto de produção sem aprovação.
8. Criar tabelas públicas com SELECT estritamente limitado a conteúdo publicado para Comunidade, Instituições, Eventos, Participação, Vitrine e Serviços. Escrita deve ser backend-only ou identidade autorizada.
9. Implementar persistência e APIs dos ambientes, sem confundir Vitrine (descoberta), Serviços (contratável) e Serviços Ativos (contratado/aderido/matriculado/habilitado).
10. Implementar autorização server-side dos painéis; os diretórios TypeScript são metadados, não concessões de acesso.
11. Completar Oficina com versionamento, diff, revisão, aprovação, rollback e trilha de auditoria.
12. Executar testes unitários, integração, RLS, E2E, acessibilidade e responsividade; anexar evidências ao PR.
13. Manter PR #1 Draft até todos os critérios serem cumpridos. Não promover produção nem remover SSO sem autorização expressa.

## 3. Regras de produto obrigatórias

- Painel Mestre: fundador administra arquitetura, orquestra e conversa com Orquestrador Mestre.
- Painel Administrativo: operação administrativa geral.
- Coordenação Geral: painel executivo, metas, indicadores, riscos e prioridades.
- Jurídico: contratos, conformidade e obrigações.
- Contábil e Financeiro: contabilidade, orçamento, receitas/despesas e conciliação.
- Painel Contábil e Financeiro: contabilidade, orçamento, conciliação e gestão operacional Stripe em subárea própria, sem poderes irrestritos de movimentação.
- Atendimento: níveis operador, especialista, supervisor e gestor geral, com escopo e escalonamento.
- Produtos/serviços podem ser próprios UNO ou de terceiros; titular, fornecedor, prestador, vendedor, responsabilidade e termos precisam estar explícitos.
- Instituições mantêm regras próprias. Oferta integrada pode ser descoberta na Vitrine; contratação/matrícula acontece em Serviços; após confirmação, aparece em Serviços Ativos.
- Lazer concentra eventos, festivais e experiências espontâneas/promovidas; não substitui o catálogo de serviços contratáveis.
- Oficina cria itens novos e edita, modifica, melhora e amplia os existentes; criação não significa ativação automática.
- Público navega por Supabase. Dados pessoais, escrita, carteira, serviços ativos e painéis exigem identidade e autorização.

## 4. Decisões/ações que pertencem ao fundador

- Definir `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT` (máximo global de respostas públicas por dia).
- Confirmar nomenclatura e continuidade dos volumes legados V05/V06 versus catálogo expandido de 40.
- Fornecer/confirmar com segurança o UID Firebase do fundador e autorizar a inclusão do secret service account.
- Autorizar aplicação de migrations no ambiente correspondente e, futuramente, publicação/produção.
- Configurações de conta que exigem proprietário: Anonymous Sign-Ins, CAPTCHA/Turnstile, proteções de autenticação e produção Vercel.

## 5. Referências

- `spec/IMPLEMENTATION_READINESS_2026-10-31.md`
- `spec/EOU_40_VOLUMES_IMPLEMENTATION_MAP.md`
- `spec/VOLUME_SPEC_TEMPLATE.md`
- `spec/ADR/ADR-0013-public-visitor-supabase-navigation.md`
- `spec/ROADMAP.md`


## 6. Rotas e painéis acrescentados

- Rotas públicas com leitura Supabase: Instituições, Vitrine, Lazer/Eventos, Serviços, Comunidade e Participação pública.
- Rotas pessoais protegidas: Casa, Emprego e Renda, Carteira e Serviços Ativos.
- Painéis: Administrativo, Coordenação Geral, Jurídico, Contábil e Financeiro (com área Stripe) e Atendimento.
- O Painel Mestre lista os painéis e apresenta a interface de atribuição de escopos somente ao fundador.
- `/api/admin/panel-access` atribui/revoga escopos depois de confirmar UID fundador, Google verificado e IDU do destinatário.
- `/api/identity/panel-access` valida escopo no token e registro ativo no Firestore antes de liberar uma rota.
- Shells dos painéis são somente estruturais. Não possuem operações de dinheiro, dados jurídicos, filas reais ou ações administrativas até APIs específicas e testes.
- `supabase/migrations/20261031173000_public_content_read_models.sql` cria read models públicos para Instituições, Catálogo, Comunidade, Eventos e Participação, com SELECT público apenas de conteúdo publicado e escrita restrita ao backend. Não aplicada.


## 7. Oficina funcional — rascunhos e versionamento

- `WorkshopStudioV7` substitui os controles demonstrativos inertes por um editor real de rascunhos.
- Criar/editar/clone/submit: `api/workshop/assets.ts` e `api/workshop/asset.ts`.
- Serviço server-side: `server/supabaseAdmin.ts`.
- Autorização: `requirePanelScope(..., 'uno.panel.master.access')`.
- Persistência: `workshop_assets`, `workshop_asset_versions`, `workshop_audit_events`.
- RPCs transacionais: create, update, submit for review e clone.
- A edição só ocorre em status draft. Itens em revisão/aprovados/ativos devem gerar nova cópia de trabalho.
- Não existe endpoint de aprovação/ativação nesta etapa. Não implementar publicação automática nem permitir que a Oficina altere produção sem fluxo de teste, evidência e autorização humana.
- Migration: `supabase/migrations/20261031174000_workshop_asset_versioning.sql`, não aplicada.
