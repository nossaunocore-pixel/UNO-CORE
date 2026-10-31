# V7 — Política de Acesso e Matriz de Capacidades do MVP

**Data:** 31/10/2026  
**Status:** decisão aprovada; matriz de implementação a validar.

## 1. Jornada de entrada

1. Pessoa acessa landing page, boas-vindas e áreas públicas sem conta Google/Firebase.
2. A navegação pública usa Supabase com chave publishable/anon e políticas RLS de leitura.
3. A Conversa pública cria uma sessão anônima no Supabase Auth, com cotas e limite global diário aprovado; não cria Perfil UNO, IDU ou adesão.
4. Para acessar perfil, casa, emprego e renda, carteira, serviços ativos, publicar, comentar, votar ou realizar ações pessoais, a pessoa inicia autenticação Google.
5. Backend valida o token Google e provisiona/recupera IDU; a pessoa entra como visitante autenticado, sem assinatura automática.
6. Capacidades internas gratuitas podem ser usadas quando estiverem implementadas e seguras.
7. Capacidades que geram consumo, dependem de terceiros, contrato, qualificação ou autorização permanecem condicionadas.

## 2. Matriz de perfis

| Perfil | Identidade | Capacidades gratuitas internas | Consumo/API | Externas/restritas |
|---|---|---|---|---|
| Visitante anônimo | Supabase público; sessão anônima Supabase apenas para Conversa | Leitura das rotas públicas; Conversa pública com cotas e limite global aprovado | Somente Conversa pública limitada, após CAPTCHA e orçamento configurados | Não; sem perfil, carteira, escrita, voto, contratação ou painéis |
| Visitante autenticado | Google + IDU | Sim, conforme catálogo e limites | Não, salvo autorização/adesão aplicável | Não, salvo autorização explícita e requisito atendido |
| Usuário aderido | Google + IDU + adesão válida | Sim | Conforme plano, limites e consentimento | Conforme contrato, qualificação e autorização |
| Parceiro | Google + IDU + vínculo verificado | Sim | Conforme escopo e acordo | Conforme escopo, contrato e autorização |
| Equipe/operador | Google + IDU + atribuição administrativa | Conforme função | Conforme escopo | Somente quando delegado e autorizado |
| Fundador/mestre delegado | Google + IDU + claim server-side | Conforme função | Conforme escopo | Conforme política; ações sensíveis podem exigir confirmação humana |

A autenticação não concede automaticamente plano, vínculo de parceiro, poderes administrativos ou direitos financeiros.

## 3. Classes de capacidade

- `free_internal`: sem API externa e sem custo variável por uso. Pode ser oferecida a visitante autenticado, sujeita a limites e segurança.
- `consumption`: tokens, IA, API, processamento ou serviço com custo variável. Exige política de elegibilidade, limites e informação prévia.
- `external`: comunicação/consulta/transação com órgão, empresa ou sistema externo. Exige integração válida, finalidade, consentimento e autorização.
- `restricted`: depende de função, qualificação, vínculo, aprovação ou fundamento legal.

Uma capacidade pode carregar mais de uma classe. O catálogo deve negar por padrão quando faltarem metadados ou autorização.

## 4. Matriz funcional inicial

| Universo/capacidade | Classe pretendida | Visitante autenticado | Condição para liberar |
|---|---|---|---|
| Perfil básico e preferências | Gratuita interna | Sim | IDU, controles de privacidade |
| Navegação pelos universos | Gratuita interna | Leitura pública: sim via Supabase; áreas pessoais: não | Conteúdo público com RLS; áreas pessoais exigem Google + IDU |
| Conversa interna sem API paga | Gratuita interna | Conforme motor interno implementado | Motor local/interno funcional, limites e aviso |
| Conversa pública com IA/API externa | Consumo | Sim, somente modo público limitado | Sessão anônima Supabase, quota por usuário, limite global diário aprovado, CAPTCHA/Turnstile, orçamento, conteúdo público e endpoint separado |
| Feed, publicações e comentários | Gratuita interna | Leitura pública: sim; escrita: não | Persistência, RLS, moderação; escrita exige Google + IDU e controles de abuso |
| Mensagens entre usuários | Gratuita interna | Sim | RLS, bloqueio/denúncia e proteção contra abuso |
| Propostas e votação interna | Gratuita interna | Leitura pública: sim; envio/voto: conforme elegibilidade | Regras de elegibilidade, identidade, integridade e auditoria |
| Vitrine, eventos e catálogo público de serviços | Gratuita interna | Sim, leitura pública via Supabase | Dados corretos, origem própria/terceiro, status transparente e RLS |
| Contratação/compra/pedido | Externa/consumo/restrita | Não por padrão | Parceiros, pagamentos, termos e integrações validados |
| Serviços de órgãos externos | Externa/restrita | Não por padrão | Convênio/API, consentimento e autorização |
| Pagamentos, carteira, saques e repasses | Consumo/restrita | Não | Formalização, Stripe live, validação jurídica/financeira |
| Painel Mestre e credenciais | Restrita | Não | Claim server-side e autorização por escopo |

“Pretendida” não significa já implementada. O estado real de cada capacidade deve ser publicado no catálogo e na interface.

## 5. Dados e privacidade

- Cada registro pessoal deve ter finalidade e proprietário/escopo.
- Conversas e interações associadas ao IDU devem ter aviso de tratamento, controles de acesso, retenção e exclusão.
- A conta Google não autoriza coleta irrestrita nem compartilhamento indiscriminado.
- Não usar e-mail como identificador universal; não expor Firebase UID/IDU em URLs públicas.
- RLS deve impedir leitura/escrita cruzada; operações administrativas exigem trilha de auditoria.
- Definir política de moderação, denúncia, bloqueio e resposta a abuso antes de abrir recursos sociais em produção.

## 6. Critérios de aceite

1. Visitante anônimo acessa somente a allowlist pública via Supabase, inclusive por URL direta.
2. Visitante anônimo não acessa dados pessoais, áreas privadas, escrita, votação, contratação ou painéis.
3. A única autenticação pessoal oferecida no MVP é Google; sessão anônima Supabase é exclusiva da camada pública/Conversa.
4. Google autenticado sem IDU válido não acessa dados pessoais internos.
5. Visitante autenticado acessa apenas capacidades gratuitas elegíveis.
5. Capacidades de consumo, externas e restritas negam por padrão sem elegibilidade.
6. Alterar estado no frontend não altera permissões no servidor.
7. RLS e endpoints impedem acesso a dados de outro IDU.
8. Logout encerra a sessão e bloqueia rotas internas.
9. Status de capacidade reflete teste real, não apenas presença de UI.

## 7. Pendências técnicas explícitas

- Confirmar configuração Google OAuth e provedores ativos no Firebase.
- Implementar/validar `/api/identity/session` e emissão confiável de `uno_idu`.
- Configurar Firebase Third-Party Auth no Supabase.
- Auditar schema, grants, RLS, views, Storage e políticas de retenção.
- Implementar catálogo de capacidades e enforcement server-side.
- Criar testes unitários, integração e E2E para todos os perfis.
- Separar landing e boas-vindas da aplicação interna; atualmente o app V6/V7 observado inicia em `praca`, portanto a jornada pública completa ainda precisa ser implementada.


## 8. Regra de precedência — ADR-0013

A allowlist pública inicial é: `praca`, `edificio` (leitura pública), `nos`/Vitrine, `comunidade` (leitura), `participacao` (consultas/resultados), `conversa`, Lazer/Eventos e catálogo público de Serviços. A rota técnica pode compartilhar telas, mas dados e ações continuam separados por finalidade.

A sessão anônima Supabase não é IDU e não deve ser tratada como perfil permanente. O endpoint `/api/public/chat` só responde sobre informações públicas, exige JWT Supabase anônimo válido, limite por usuário e variável `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT`. Se o limite global não estiver configurado, o endpoint falha fechado.

Antes de produção, habilitar Anonymous Sign-Ins, CAPTCHA/Turnstile, limite diário global aprovado pelo fundador, política de limpeza de contas anônimas, tabelas públicas com RLS e testes de negação. A especificação de precedência é `spec/ADR/ADR-0013-public-visitor-supabase-navigation.md`.
