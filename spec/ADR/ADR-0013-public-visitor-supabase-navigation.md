# ADR-0013 — Navegação pública de visitantes pela camada Supabase

- **Data:** 2026-10-31
- **Status:** aprovado como direção de produto pelo fundador; implementação e validação pendentes
- **Relacionados:** ADR-0006, ADR-0007, ADR-0008, ADR-0010, ADR-0012
- **Escopo:** experiência pública, navegação de visitantes e Conversa pública

## Contexto

A UNO precisa permitir que uma pessoa conheça a comunidade, os ambientes e as informações públicas sem exigir conta Google ou adesão. A experiência pública não deve depender de Firebase. A camada Supabase é a fonte de dados de uso e conteúdo público, com acesso anônimo controlado por RLS.

## Decisão

1. A navegação pública de visitantes depende do Supabase e não exige autenticação Firebase, Google ou provisionamento de IDU.
2. A allowlist pública inicial compreende: Praça, Instituições (visualização pública), Vitrine, Comunidade (leitura pública), Participação (consultas/resultados públicos), Lazer/Eventos, Serviços (catálogo público) e Conversa.
3. A leitura pública usa cliente Supabase com chave publishable/anon. O cliente público não recebe service-role nem token Firebase.
4. A Conversa pública usa sessão anônima do Supabase Auth e endpoint próprio. Não cria Perfil UNO, IDU, adesão ou vínculo institucional.
5. O endpoint público valida a sessão anônima no servidor, aplica cotas de uso e limita respostas a informações públicas. Mensagens de visitante não podem consultar dados privados nem acionar operações internas.
6. Ações que criam conteúdo, comentam, votam, contratam, compram, ativam serviços ou acessam dados pessoais exigem a identidade e a autorização correspondentes. A leitura pública não concede permissão de escrita.
7. Perfil, Casa, Emprego e Renda, Serviços Ativos, carteira, dados pessoais e todos os painéis continuam protegidos por autenticação Google, IDU e autorização server-side.
8. A publicação em produção depende de habilitar Anonymous Sign-Ins no Supabase Auth, CAPTCHA/Turnstile, limites, política de retenção/limpeza de contas anônimas, RLS pública revisada e testes negativos.

## Relação com ADR-0007

Este ADR substitui **somente** a afirmação de ADR-0007 de que landing e boas-vindas seriam as únicas experiências anônimas. Google continua sendo o método de autenticação para identidade pessoal e ambientes protegidos. A navegação pública passa a ter uma camada Supabase independente.

## Consequências técnicas

- Rotas públicas devem estar em allowlist explícita e não carregar gates Firebase.
- O cliente Supabase público é separado do cliente Supabase que recebe JWT Firebase.
- Tabelas públicas terão políticas SELECT específicas para conteúdo publicado; escrita permanece restrita a backend ou identidades autorizadas.
- A Conversa visitante possui endpoint e rate limit próprios; o endpoint autenticado exige Google verificado e IDU.
- A sessão anônima Supabase não é uma identidade permanente: se o usuário limpar os dados do navegador ou trocar de dispositivo, a sessão anônima não poderá ser recuperada automaticamente.
- Usuários anônimos podem permanecer em Auth até uma rotina de limpeza aprovada. Não ativar em produção sem proteção contra abuso e retenção definida.

## Critérios de aceite

- Visitante sem Firebase consegue abrir e navegar nas rotas públicas.
- Visitante não consegue abrir perfil, casa, emprego e renda, carteira, serviços ativos ou painéis.
- Visitante não consegue escrever em conteúdo comunitário ou participar de ações restritas sem identidade/eligibilidade.
- Conversa pública funciona somente com JWT anônimo Supabase válido e quota aprovada.
- Endpoint autenticado recusa tokens sem Google verificado e IDU.
- Nenhuma chave secreta ou service-role é enviada ao navegador.
- RLS impede acesso público a dados pessoais e institucionais privados.
- Build, testes e evidência de Preview aprovados antes de liberar a experiência.

## Estado da implementação

Cliente Supabase público, allowlist de rotas, endpoint público e migração de quota foram preparados na branch `v7-implementation`. A configuração Anonymous Sign-Ins/CAPTCHA no Dashboard, a aplicação das migrações e os testes reais ainda estão pendentes. Este ADR não declara o fluxo pronto para produção.
