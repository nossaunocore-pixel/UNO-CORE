# Governança de acesso e segurança — V7

**Status:** especificação e regras candidatas para revisão; ainda não publicadas no Firebase.
**Escopo:** autenticação, autorização dos painéis, dados e agentes da UNO CORE.
**Regra de implantação:** nunca aplicar regras ao Firebase nem promover a produção automaticamente a partir deste documento.

## 1. Hierarquia de autorização

- **Fundador:** identidade verificada e papel de governança concedido fora do cliente. Pode acessar o Painel Mestre e conceder/revogar autorizações.
- **Painel Mestre:** acesso exclusivo ao fundador por padrão. Acesso delegado só por concessão manual explícita do fundador, com escopo e possibilidade de revogação. Uma autorização administrativa comum não concede acesso ao Painel Mestre.
- **Painel Administrativo Mestre:** acesso somente a pessoas explicitamente autorizadas. Permissões administrativas devem ser granulares; esse painel não herda ferramentas criativas do Painel Mestre.
- **Usuário comum:** acesso aos próprios dados e funções comuns; nunca pode atribuir a si mesmo papéis, permissões, saldos, propriedade ou privilégios.
- **Agentes:** identidades não humanas com permissões próprias e escopo mínimo. Agentes não recebem acesso irrestrito ao banco nem privilégios humanos por padrão.

## 2. Requisitos obrigatórios

1. Autenticação real com Firebase Authentication antes de habilitar áreas privadas.
2. Papéis/claims administrativos concedidos apenas por um processo confiável server-side com Firebase Admin SDK. Nunca confiar em campos enviados pelo navegador, documentos de perfil ou estado React para decidir permissões.
3. Não codificar UID, e-mail, senha, token ou segredo do fundador no repositório.
4. O primeiro fundador deve ser provisionado por um procedimento controlado e documentado, usando uma identidade Firebase verificada e acesso administrativo seguro. Não existe bootstrap seguro por autoinscrição pública.
5. Cada endpoint server-side também deve validar autenticação e autorização. Regras Firestore não protegem automaticamente APIs externas.
6. Perfil próprio não pode permitir alteração de papel, permissões, saldo, dados de auditoria ou identidade.
7. Transações, pagamentos, recompensas, permissões e registros de auditoria críticos devem ser escritos por servidor confiável; clientes não podem criar transações arbitrárias.
8. Aplicar menor privilégio, validação de esquema/tipos, limites contra abuso, auditoria de concessões/revogações e testes negativos.
9. Segredos ficam apenas em ambiente server-side. Nunca usar prefixo VITE_ em segredos.
10. O estado visual do painel não é controle de acesso: rotas, APIs e banco precisam validar a permissão.

## 3. Claims sugeridas

Claims são atribuídas exclusivamente pelo Firebase Admin SDK:
- `unoFounder: true`: papel fundador; requisito para conceder/revogar privilégios.
- `unoMaster: true`: acesso ao Painel Mestre, somente quando explicitamente concedido pelo fundador.
- `unoAdmin: true`: acesso ao Painel Administrativo Mestre, sujeito a permissões granulares verificadas pelo servidor.
- Claims ausentes significam acesso negado. Uma claim não deve ser concedida pelo próprio usuário.

A política de acesso ao Painel Mestre deve exigir `unoFounder == true` OU `unoMaster == true`; a atribuição de `unoMaster` é reservada ao fundador e deve ser auditada. O painel administrativo não deve implicar acesso ao Painel Mestre.

## 4. Situação identificada no repositório

O arquivo histórico `firestore.rules` permite leitura pública de alertas, escrita de alertas/módulos por qualquer autenticado e leitura/criação ampla de transações. O documento de usuário também permite ao titular escrever todo o próprio documento. Essas regras são permissivas demais para a governança desejada.

Não foi encontrado `firebase.json` nem `.firebaserc` na raiz da branch durante a inspeção. Portanto, não é possível afirmar que o arquivo histórico esteja publicado no Firebase Console. As regras candidatas neste branch não são automaticamente regras ativas do projeto.

## 5. Plano de implementação V7

1. Confirmar projeto Firebase, provedores de autenticação e identidade inicial do fundador sem compartilhar segredos.
2. Implementar fluxo de autenticação e uma camada central de autorização no servidor.
3. Construir UI dos painéis condicionada às permissões, mantendo a validação server-side como autoridade.
4. Definir esquema e propriedade de cada coleção antes de conceder acesso por coleção.
5. Testar casos permitidos e negados com Firebase Emulator Suite; incluir testes para usuário comum, administrador delegado, fundador e agente.
6. Revisar e aprovar regras candidatas; só então planejar publicação controlada no Firebase.
7. Validar Preview da V7 antes de qualquer promoção para produção.

## 6. Critérios mínimos de aceite

- Usuário não autenticado não lê nem escreve dados privados.
- Usuário comum não consegue abrir o Painel Mestre ou Painel Administrativo Mestre, nem chamando APIs diretamente.
- Usuário não consegue conceder papel a si próprio, alterar claims ou modificar saldo/transações.
- Administrador delegado não consegue promover outro administrador, salvo permissão explicitamente delegada pelo fundador.
- Acesso delegado ao Painel Mestre só existe após concessão manual auditada pelo fundador e pode ser revogado.
- Falha de autenticação/autorização resulta em negação por padrão.


## 7. Camada pública de visitantes — ADR-0013

A navegação pública da UNO é separada da identidade Firebase. As rotas públicas usam somente o cliente Supabase publishable/anon, com políticas RLS específicas para leitura de conteúdo publicado. Nenhum token Firebase, IDU ou service-role é necessário para ler conteúdo público.

A allowlist pública inicial inclui Praça, Instituições (somente conteúdo público), Vitrine, Comunidade (leitura), Participação (consultas/resultados), Lazer/Eventos, catálogo público de Serviços e Conversa. Ações de escrita, comentários, votos, contratação, carteira, serviços ativos, Perfil, Casa, Emprego e Renda e painéis exigem identidade/autorização adequadas.

A Conversa de visitante cria uma sessão anônima Supabase Auth. O endpoint `/api/public/chat` valida o JWT com Supabase Auth, exige `is_anonymous = true`, limita o conteúdo ao contexto público e aplica quota por usuário e limite global diário. O endpoint privado `/api/chat` exige Google verificado e IDU; não aceita mais sessões anônimas Firebase.

### Condições antes da liberação pública

- Habilitar Anonymous Sign-Ins no Supabase Auth.
- Configurar CAPTCHA/Cloudflare Turnstile para mitigar criação abusiva de contas anônimas.
- Definir e inserir `PUBLIC_CHAT_GLOBAL_DAILY_LIMIT` após aprovação do fundador; endpoint falha fechado se a variável estiver ausente.
- Aplicar e validar as migrações versionadas, sem alterar banco diretamente.
- Configurar RLS de leitura pública em cada tabela de conteúdo; não liberar SELECT genérico em tabelas pessoais.
- Definir retenção/limpeza de usuários anônimos e dados de quota.
- Testar rotas públicas, privadas, escrita, quotas, sessão inválida e tentativas de acessar dados internos.

O código e as migrações preparados não significam que essas configurações estejam ativas no projeto Supabase. A regra de precedência está em `spec/ADR/ADR-0013-public-visitor-supabase-navigation.md`.
