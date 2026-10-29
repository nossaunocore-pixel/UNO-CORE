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
