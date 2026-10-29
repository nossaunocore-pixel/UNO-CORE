# V7 Foundation — linha de base da auditoria

**Data da revisão:** 2026-10-29  
**Branch:** `v7-foundation`  
**Status:** auditoria inicial; não é aprovação para produção.

## Escopo verificado nesta leitura
Arquivos consultados na branch `v7-foundation`:
- `package.json`
- `src/App.tsx`
- `src/v6/V6App.tsx`
- `src/v6/pages/MasterPanelV6.tsx`
- `api/chat.ts`
- `spec/SECURITY_GOVERNANCE_V7.md`
- `spec/FOUNDER_IDENTITY_BOOTSTRAP_V7.md`

## Constatações verificadas

### 1. Aplicação ainda carrega a experiência V6
`src/App.tsx` retorna `<V6App />`. A navegação em `src/v6/V6App.tsx` apresenta o rótulo “V6 · ambiente de desenvolvimento”. Isso não impede reutilização de componentes, mas demonstra que a experiência ainda não foi consolidada/renomeada como lançamento V7.

### 2. Painel Mestre é atualmente demonstrativo
Em `src/v6/pages/MasterPanelV6.tsx`:
- métricas como usuários, adesões, demandas e votações são valores fixos;
- nomes/percentuais de uso de ferramentas são fixos;
- a submissão do formulário apenas limpa o comando;
- a interface declara “Execução real bloqueada até autorização”;
- o componente não demonstra verificação de identidade/autorização.

Conclusão: classificar como **demonstrativo / não funcional para operação real** até integração e testes. Não apresentar métricas fixas como dados reais.

### 3. Navegação não mostra controle de acesso
`src/v6/V6App.tsx` permite alternar para o Painel Mestre pelo estado local de navegação. Nesta camada não há uma verificação visível de autenticação ou de papel. Isso não prova que inexista controle em todas as camadas, mas é um bloqueador a verificar e corrigir. A autorização deve existir no servidor e nos dados, não apenas na interface.

### 4. Endpoint de chat exige revisão de segurança
`api/chat.ts` aceita POST, valida JSON e limita a mensagem a 4.000 caracteres, o histórico a 12 itens e a saída a 300 tokens; chama `google('gemini-2.5-flash')`.
Nesta leitura não foi identificado controle explícito de autenticação, autorização ou rate limiting. Antes do lançamento, verificar se o endpoint pode ser chamado publicamente e implementar controles proporcionais para impedir abuso e custos inesperados. Não afirmar que há exposição confirmada sem testar a configuração implantada.

### 5. Dependências declaradas
O `package.json` inclui React, Vite, Firebase, Supabase JS e AI SDK/Google. A presença das dependências não comprova que autenticação, persistência ou integrações estejam implementadas. A busca inicial por padrões comuns de inicialização Firebase/Supabase não encontrou resultados; continuar a busca usando nomes alternativos e inspecionando a árvore do projeto.

### 6. Governança documentada, mas ainda não comprovada em execução
Os documentos de governança e bootstrap definem corretamente a necessidade de:
- claims concedidas server-side;
- CPF não usado como senha ou prova de autenticação;
- acesso negado por padrão;
- testes positivos e negativos;
- não publicar regras do Firestore sem mapear coleções e validar o alvo.

Essas regras são especificações, não prova de implementação. O rascunho Firestore não deve ser publicado até verificar as regras atuais no projeto Firebase correto e testar os fluxos necessários.

## Bloqueadores de lançamento prioritários
1. Mapear todos os arquivos e localizar inicialização Firebase/Supabase, autenticação e persistência reais.
2. Verificar se todas as rotas/painéis privados e endpoints exigem autenticação e autorização server-side.
3. Substituir métricas e estados simulados por dados reais ou rotular claramente como demonstração fora do escopo operacional.
4. Definir e testar o esquema de dados e as regras por coleção.
5. Testar o endpoint de IA para autenticação, rate limiting, validação de histórico, limites de custo e tratamento de falhas.
6. Executar build/testes e validar Preview; manter produção intacta.
7. Usar a foto do Orquestrador Mestre como referência visual quando disponível, sem tratá-la como especificação funcional completa.

## Política de execução
- Não promover deployment para produção nesta fase.
- Não publicar regras Firebase nesta fase.
- Não incluir segredos, tokens, CPF ou outros dados pessoais neste documento.
- Registrar evidências e critérios de aceite para cada correção.


## Atualização da auditoria — 2026-10-29 (segunda leitura)

### 7. Serviço Firebase encontrado; inicialização não comprova conexão real
Arquivo: `src/services/firebase.ts`.

- O serviço usa valores de fallback demonstrativos (`demo-nos-sa-uno-key`, projeto `nos-sa-uno` e outros valores de exemplo) quando variáveis de ambiente não existem.
- `isRealFirebaseConnected` passa a `true` apenas porque `VITE_FIREBASE_API_KEY` existe; isso não comprova que o projeto, Auth, Firestore, permissões ou credenciais estejam corretos.
- O fallback pode inicializar o SDK apontando para uma configuração fictícia. A interface deve identificar configuração ausente/inválida sem alegar conexão operacional.
- A variável de API key do Firebase é configuração cliente, não segredo de autorização. A segurança depende de Auth, regras e validação server-side.

**Ação:** validar as variáveis do Preview, confirmar o project ID autorizado, testar login e operações de Firestore em ambiente de teste; remover fallback que simula conexão real antes do lançamento.

### 8. Divergência entre variável de ambiente do Supabase e configuração já registrada
Arquivo: `src/services/supabase.ts`.

- O código lê `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`.
- A configuração de ambiente previamente inventariada tinha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`, sem confirmação de `VITE_SUPABASE_PUBLISHABLE_KEY`.
- O módulo lança erro durante a inicialização se URL ou chave esperada estiver ausente.

**Status:** divergência confirmada entre o nome esperado pelo código e o inventário de variáveis conhecido; ainda é necessário verificar as variáveis efetivas no Preview e se este módulo é importado no caminho ativo.

**Ação:** escolher um nome canônico compatível com a configuração real, alinhar código e ambientes Preview/Production sem ler ou registrar valores secretos; testar a inicialização e as políticas RLS.

### 9. Tela alternativa de Painel do Fundador contém afirmações de autorização estáticas
Arquivo: `src/pages/p01/PainelMestreFundador.tsx`.

- A tela apresenta estados fixos como “Acesso Mestre Autorizado”, regras “Aprovado” e “4 Operacionais”, sem mostrar consulta verificável a autenticação, claims ou serviços.
- A árvore do repositório contém essa tela, mas a entrada atual `src/App.tsx` carrega `V6App`; não foi comprovado que essa tela alternativa esteja ativa.

**Ação:** localizar todos os pontos de entrada e importações. Qualquer painel ligado à aplicação deve derivar permissões de identidade validada no servidor e exibir estados reais ou rótulos explícitos de demonstração.

### 10. Aplicação de entrada ainda seleciona V6
- `src/main.tsx` monta `App`.
- `src/App.tsx` retorna `V6App`.
- `src/v6/V6App.tsx` permite navegar para “Painel Mestre” por estado local e mostra “V6 · ambiente de desenvolvimento”.
- O repositório também contém `src/mvp-v1/UnoMvpApp.tsx` e telas `src/pages/p01/`, mas a presença dos arquivos não comprova que integrem a aplicação ativa.

**Ação:** fazer um mapa de entrada/importações e uma matriz de funcionalidades existentes versus funcionalidades V7 exigidas antes de substituir a experiência principal.

### 11. Estado de Preview verificado após a auditoria inicial
Consulta Vercel de 2026-10-29: deployment do projeto `uno-core`, branch `v7-foundation`, commit `875d991f3126c49abc997b1f41796a9310355283`, estado `READY`. Os deploys são Previews (`target: null`); o deployment de produção listado continua no commit anterior da V6. Isso confirma estado do deployment, não aprovação funcional ou de segurança.

## Próxima sequência de trabalho
1. Mapear todos os arquivos de entrada e identificar quais telas/serviços são realmente importados.
2. Revisar o uso de `src/services/firebase.ts`, `src/services/supabase.ts` e `src/services/db.ts`; confirmar variáveis por nome, sem expor valores.
3. Verificar autenticação, claims e proteção do Painel Mestre em todas as rotas/ações, não apenas na interface.
4. Revisar `api/chat.ts` para autenticação, limitação de uso e custo.
5. Corrigir o código diretamente na branch `v7-foundation`, rodar build e validar o Preview.
6. Manter produção intacta; não publicar regras Firestore nem enviar o comando final ao Antigravity antes da revisão e dos testes.


### 12. Telas da experiência ativa exibem dados/identidade fixos
Arquivos: `src/v6/pages/UserSquareV6.tsx`, `src/v6/pages/MasterPanelV6.tsx`.

- O ambiente do usuário contém saudação fixa “Olá, Rudson”, “Identidade verificada”, “Plano cidadão • ativo” e contagens de vínculos/solicitações sem consulta visível a uma sessão autenticada ou banco.
- O Painel Mestre apresenta métricas fixas (1.248 usuários, 184 adesões, etc.), percentuais fixos de uso das ferramentas e estados de relatório predefinidos.
- O formulário do Painel Mestre apenas limpa o comando ao enviar; não executa uma operação real.
- `src/v6/V6App.tsx` permite abrir o Painel Mestre por navegação local, sem verificação de sessão ou papel visível nesse caminho.
- `src/v6/pages/ConversationV6.tsx` chama `POST /api/chat` sem enviar token de autenticação no pedido; o histórico da conversa é guardado em `sessionStorage`, não é memória permanente no servidor.

**Conclusão:** a interface ativa contém elementos de apresentação que podem ser confundidos com estado operacional real. Isso deve ser corrigido ou rotulado claramente antes do lançamento. Não usar nomes pessoais fixos nem afirmar identidade verificada sem consulta a uma identidade autenticada.

### 13. Critérios de correção para a próxima revisão
- Dados pessoais e status devem derivar da sessão autenticada e do banco real; se não houver sessão, mostrar estado não autenticado.
- Métricas devem vir de fontes persistidas e timestamps verificáveis ou aparecer como “dados demonstrativos”.
- A navegação para o Painel Mestre deve negar acesso por padrão; servidor e banco devem impor autorização independentemente da UI.
- O endpoint de conversa precisa validar token Firebase/Supabase (decisão arquitetural pendente), impor rate limit/limite de custo e validar tamanho/formato do histórico.
- Não apresentar o armazenamento de sessão da conversa como memória persistente; consentimento e política de retenção precisam ser implementados separadamente.
