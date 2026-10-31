# Auditoria de prontidão para implementação — UNO CORE

- **Data:** 2026-10-31
- **Branch de trabalho:** `v7-implementation`
- **PR existente:** #1, draft, de `v7-implementation` para `v7-foundation`
- **Objetivo:** registrar o que foi inspecionado, o que foi preparado e o que ainda depende de configuração/decisão do fundador.
- **Regra:** não confundir documentação, código presente, build, integração, teste e liberação.

## 1. Resultado executivo

A V7 não começa do zero. A branch contém aplicação React/Vite, V6 preservada, APIs server-side, serviços Firebase/Supabase, componentes de identidade, agentes, integrações, Oficina, painéis e bibliotecas demonstrativas.

A aplicação ainda monta `V6App`; a integração integral dos módulos e a persistência de várias telas não estão concluídas. O Vercel possuía um deployment Preview `READY` para o commit anterior à rodada atual, mas os novos commits precisam de novo build/inspeção. O projeto Vercel observado estava com `live=false`, proteção SSO habilitada e deployment sem target Production. Portanto, não foi comprovada publicação pública em produção.

## 2. Repositório e EOU

- Branch `v7-implementation`: 180 arquivos após os primeiros preparativos desta rodada; contém código V7/V6 e documentação técnica.
- Branch `main`: 603 arquivos na inspeção; contém a coleção `docs/EOU` com catálogo de 40 volumes.
- EOU-V01 a V08 têm documentação extensa, capítulos e material histórico.
- EOU-V09 a V40 têm, no inventário atual, essencialmente README de finalidade e estado “Em desenvolvimento”; ainda não são especificações completas implementáveis.
- `EOU/volumes/INDEX.md` descreve uma coleção legada de 8 volumes e declara uma data de conclusão, enquanto `docs/EOU/CATALOGO.md` descreve a coleção expandida de 40.
- Há conflitos de nomenclatura que não devem ser resolvidos por suposição:
  - V05/OM: o índice legado chama “Ordem de Missão”; o catálogo expandido chama “Oficina Mestre”. O mesmo acrônimo OM está sendo usado para conceitos distintos.
  - V06: o índice legado chama “Conhecimento Organizacional”; o catálogo expandido usa V06-CO, “Centro de Operações”. Não há arquivo `EOU/volumes/volume-06-...` correspondente na série legada.
  - V03 (MUE) e V28 (Entidades) precisam de fronteira documental explícita para evitar duplicação.
- O mapa de implementação e as pendências estão em `spec/EOU_40_VOLUMES_IMPLEMENTATION_MAP.md`.

## 3. Código V7 observado

### Já existente antes desta rodada
- Shell da aplicação e componentes V6/V7.
- `api/identity/session.ts` e `server/firebaseAdmin.ts`.
- `api/chat.ts` com Gemini 2.5 Flash e validação Firebase.
- Catálogos declarativos de agentes, conteúdo, mídia e integrações.
- Componentes de Oficina, Painel Mestre, Comunidade, Participação, Vitrine e Perfil.
- Clientes Firebase e Supabase.
- Domínios `core/kernel`, `core/governance`, `core/capabilities`, `core/agents`, `core/integrations`, `core/engine`, `core/brain`, `core/memory` e `core/documentation`.

### Preparado nesta rodada na branch
- CI com Node 24, `npm ci` e `npm run build`.
- Contratos TypeScript para produtos/serviços próprios e de terceiros, estados de catálogo e ativações em `src/domain/catalog.ts`.
- Diretório de painéis e escopos em `src/domain/panels.ts`.
- Mapa das áreas de experiência em `src/domain/experiences.ts`.
- Cliente Supabase público independente de Firebase em `src/services/supabasePublic.ts`.
- Allowlist pública inicial na `PageAccessGateV7`.
- Conversa de visitante migrada do Firebase Anonymous para Supabase Anonymous Auth.
- Novo endpoint `/api/public/chat`, separado do endpoint privado.
- Endpoint privado `/api/chat` agora exige Google verificado e IDU.
- Limite global diário de Conversa pública fail-closed: requer `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT` aprovado e configurado pelo fundador.
- Migrações versionadas preparadas para IDU texto e quota pública. Não foram aplicadas ao projeto Supabase.

## 4. Supabase — estado observado

Projeto UNO CORE: ativo e saudável, região `us-east-1`.

- Sete tabelas públicas observadas: `profiles`, `user_roles`, `consent_documents`, `consents`, `conversations`, `messages`, `admin_audit_logs`.
- Todas apresentavam zero linhas na consulta de 2026-10-31.
- Uma migration registrada no projeto: `20261029115212`.
- Nenhuma Edge Function listada.
- RLS habilitado nas tabelas observadas.
- Políticas existentes usam `auth.uid()`; as colunas de propriedade são UUID e algumas FKs apontam para `auth.users`.
- O JWT Firebase usa subject/UID Firebase, enquanto a arquitetura UNO requer IDU independente. O schema atual precisa de adaptação para usar `uno_idu` textual e não presumir que Firebase UID seja UUID.
- Security Advisor: proteção contra senhas vazadas desabilitada; `admin_audit_logs` com RLS e sem política explícita (nega acesso por padrão, mas gera aviso informativo).
- Performance Advisor listou sete índices ainda não utilizados; com tabelas vazias, isso não é evidência de índice desnecessário.
- Nenhuma alteração foi executada diretamente no banco.

### Migrações preparadas, não aplicadas
1. `supabase/migrations/20261031170000_firebase_idu_text_identity.sql` — troca referências de propriedade UUID por IDU textual, atualiza RLS e restringe escrita por coluna. Contém preflight que aborta se tabelas afetadas não estiverem vazias.
2. `supabase/migrations/20261031171000_public_chat_rate_limits.sql` — schema privado e quota por usuário anônimo.
3. `supabase/migrations/20261031172000_public_chat_global_cap.sql` — limite global diário configurável e fail-closed.

**Não aplicar** até confirmar o Firebase Project ID `uno-core-a9125`, integração Third-Party Auth, estado das tabelas e teste de RLS. As migrations são artefatos de preparação, não prova de compatibilidade validada.

### Configurações pendentes no Dashboard Supabase
- Habilitar Anonymous Sign-Ins para a Conversa pública.
- Configurar CAPTCHA/Cloudflare Turnstile antes de abrir criação de sessões anônimas.
- Ativar proteção contra senhas vazadas para autenticação com senha, se esse método permanecer habilitado no projeto.
- Definir retenção e limpeza de usuários anônimos.
- Revisar exposição/grants do Data API: a partir de 2026-10-30, tabelas novas não são automaticamente expostas; qualquer tabela pública futura deve receber grants explícitos e RLS adequada.
- Aplicar migrations e executar testes positivos/negativos somente após revisão.

## 5. Vercel — estado observado

Projeto `uno-core`, framework Vite, Node 24.x.
- Deployment Preview anterior: `READY`, branch `v7-implementation`.
- Projeto observado com `live=false`, SSO protection habilitada e deployment sem target Production.
- Variáveis públicas Firebase/Supabase e segredos server-side de IA/Supabase estavam cadastrados por nome. Nenhum valor secreto foi lido/descriptografado.
- `STRIPE_SECRET_KEY` e `VITE_STRIPE_PUBLISHABLE_KEY` estavam somente em Preview/Development; não foi observada configuração para Production.
- Não foram encontrados, na listagem de variáveis, `FIREBASE_SERVICE_ACCOUNT_JSON`, `UNO_FOUNDER_UID` ou `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT`.
- A variável `SUPABASE_SERVICE_ROLE_KEY` existe e é server-side; não deve ser exposta com prefixo VITE.
- Não foi alterada nenhuma variável, domínio, proteção SSO ou target de produção.

## 6. Firebase e identidade

A base de código exige Firebase Admin para provisionar IDU e verificar sessões privadas. O exemplo de ambiente documenta `FIREBASE_SERVICE_ACCOUNT_JSON` e `UNO_FOUNDER_UID`, mas esses nomes não apareceram na listagem de variáveis Vercel observada. Sem a service account, o endpoint de identidade não pode ser considerado operacional. Sem UID confirmado, o bootstrap de fundador não pode ser concluído com segurança.

A configuração Firebase Console, provedores ativos, claims e regras publicadas precisam ser verificadas pelo responsável da conta. O repositório não prova que arquivos locais de regras estejam publicados.

## 7. Stripe e operação financeira

Há catálogo documental de teste e chaves de teste em Preview/Development, mas isso não comprova checkout funcional, webhook, Connect, conciliação, repasse ou produção. Nenhuma cobrança, transferência ou alteração de modo foi executada. A implementação financeira permanece em ambiente de teste até validação jurídica, contábil, Stripe e autorização do fundador.

## 8. Itens que podem continuar sem decisão do fundador

- Completar o mapa dos 40 volumes e produzir backlog por volume.
- Completar especificações-base dos volumes sem inventar decisões.
- Expandir testes automatizados e validação de build/Preview.
- Completar contratos de domínio de painéis, produtos, serviços e áreas de experiência.
- Preparar tabelas públicas com RLS, após fechar o modelo de dados e os critérios de publicação.
- Implementar persistência e contratos backend para Comunidade, Participação, Eventos, Vitrine e Serviços.
- Completar a Oficina com versionamento, diff, revisão, aprovação, rollback e trilha de auditoria.
- Implementar RBAC/escopos no servidor para cada painel; as definições de UI não bastam.

## 9. Bloqueios que dependem do fundador ou de configuração de conta

1. **EOU V05/V06:** confirmar nomenclatura e relação entre a série legada de 8 volumes e a coleção atual de 40.
2. **Orçamento público de IA:** escolher `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT` (máximo global de respostas públicas por dia). O endpoint permanece desabilitado se vazio.
3. **Supabase Auth:** habilitar Anonymous Sign-Ins e CAPTCHA/Turnstile no Dashboard; revisar retenção/limpeza de usuários anônimos.
4. **Firebase:** disponibilizar/configurar service account e confirmar UID da conta fundadora, sem enviar segredos pelo chat.
5. **Produção Vercel:** decidir quando remover SSO protection e autorizar target Production; não executar automaticamente.
6. **Schema IDU:** confirmar que o Firebase project ID continua `uno-core-a9125` e que o fluxo Third-Party Auth será ativado no Supabase antes de aplicar migration.

## 10. Critério de conclusão

Só marcar cada item como implementado, integrado, testado ou liberado depois de obter evidência correspondente. Preview READY não significa produção pública. Uma migration preparada não significa schema atualizado. Uma tela de painel não significa autorização server-side. O pacote de implementação deve continuar reversível e sem sobrescrever a V6.
