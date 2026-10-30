# Matriz inicial de rastreabilidade — V7 MVP

**Data:** 30 de outubro de 2026  
**Repositório:** `nossaunocore-pixel/UNO-CORE`  
**Branch de código auditado:** `v7-implementation`  
**Branch documental:** `main`  
**Status:** versão inicial baseada em inspeção estática; pendente de validação pelo Antigravity em ambiente executável.

## Como interpretar os estados

- **Documentado:** existe fonte textual identificável.
- **Codificado:** há componente, rota ou serviço no código.
- **Integrado:** o fluxo liga interface, backend e serviço externo.
- **Testado:** há evidência de execução de teste válido.
- **Liberado:** aprovado e disponível no ambiente indicado.

A presença de código não significa integração, teste ou liberação. Quando não há evidência, o estado é **não confirmado**, e não uma afirmação absoluta de inexistência em outros branches ou serviços externos.

## Matriz

| Requisito / decisão | Fonte ou evidência encontrada | Documentação | Código | Integração / teste | Lacuna e próximo passo |
|---|---|---|---|---|---|
| V7 como primeira versão pública oficial | Decisão do fundador em conversas; nota de auditoria | Registrado | Não é funcionalidade isolada | Não confirmado | Consolidar como escopo e critério de release |
| V8 como evolução participativa da Comunidade UNO 1 | Decisão do fundador | Registrado | Não aplicável nesta etapa | Não aplicável | Manter backlog e pontos de extensão, sem antecipar deliberações |
| Visitante pode conhecer e conversar | `ConversationV6.tsx` usa `signInAnonymously`; `PageAccessGateV7.tsx`, `PublicSquareV6.tsx`, `api/chat.ts` | Parcial | Sessão anônima, interface e endpoint codificados | Habilitação no projeto e teste real não confirmados | Testar provedor Anonymous, quotas, retenção/limpeza e separar navegação Supabase do token técnico Firebase para chat |
| Login Google | `AuthControlV7.tsx` usa GoogleAuthProvider e popup | Parcial | Codificado | Configuração real e teste não confirmados | Testar domínios autorizados, provedor, sessão, logout e retorno |
| Login/cadastro por e-mail | `AuthControlV7.tsx` | Parcial | Codificado | E-mail verificado no código; teste externo não confirmado | Validar fluxos de confirmação, recuperação e bloqueios |
| Perfis visitante, usuário e parceiro | Decisão de produto em memória e histórico | Parcial | Não foi encontrada modelagem completa de parceiro na inspeção selecionada | Não confirmado | Especificar papéis, permissões, consentimentos e transições |
| IDU universal | `api/identity/session.ts`, `server/firebaseAdmin.ts`, `spec/FOUNDER_IDENTITY_BOOTSTRAP_V7.md` | Parcial | Provisionamento server-side codificado | Configuração/execução não confirmadas | Testar idempotência, conflitos, claims, revogação e auditoria |
| Painel Mestre restrito | `MasterPanelGateV7.tsx`, `PageAccessGateV7.tsx`, endpoint de identidade | Parcial | Gate por claims codificado | Emissão manual de `unoMaster` e revogação não confirmadas | Criar procedimento auditável de concessão e revogação |
| Comunidade social | `CommunityV6.tsx` | Parcial | Página informativa codificada | Feed persistente, mídia, comentários e moderação não confirmados | Separar apresentação de funcionalidades sociais reais; especificar dados e APIs |
| Participação | `ParticipationV63.tsx` | Parcial | Cartões informativos codificados | Propostas, consultas, votos e atas reais não confirmados | Preservar etiquetas demonstrativas; especificar elegibilidade, quórum, integridade e auditoria |
| Praça UNO | `PublicSquareV6.tsx` | Parcial | Navegação e apresentação codificadas | Dados dinâmicos e ações reais não confirmados | Testar responsividade, acessibilidade, saídas de diálogos e sobreposições visuais |
| Vitrine comercial | `NosShowcaseV63` referenciada em `V6App.tsx` | Parcial | Tela referenciada | Catálogo transacional, checkout e pedidos não confirmados | Definir o que é apresentação e o que será comércio ativo no MVP |
| Agenda inteligente | Decisão de escopo em histórico | Não localizada nesta inspeção | Não localizada por rota/arquivo na árvore | Não confirmado | Criar especificação mínima, modelo de eventos, permissões e integração |
| Habilidades e capacidades pessoais | Decisão de escopo em histórico; EOU V09/V21 | Parcial no catálogo geral | Fluxo de ativação não localizado por rota/arquivo | Não confirmado | Definir cadastro, consentimento, verificação e relação com UNO RH |
| UNO RH / empregabilidade | EOU-V24 README introdutório e decisão do fundador | Inicial | Não localizado módulo dedicado na árvore consultada | Não confirmado | Elaborar especificação operacional mínima e backlog por etapa |
| Lives e convidados | Decisão de escopo em histórico | Parcial no conceito | Fluxo real não localizado na árvore consultada | Não confirmado | Definir se MVP terá transmissão própria, embed ou apenas agenda/registro |
| Universos do ecossistema | Catálogo EOU V18–V34 e contexto do fundador | Parcial | Apresentação distribuída; lista canônica de 18 não localizada | Não confirmado | Recuperar lista oficial antes de fixar navegação ou catálogo |
| Supabase para dados públicos/visitante | `src/services/supabase.ts` | Parcial | Cliente Supabase codificado | Projeto, RLS, Third-Party Auth e migrations não confirmados | Inventariar schema e migrations; testar RLS por perfil |
| Firebase para autenticação e memória interna | `src/services/firebase.ts`, `server/firebaseAdmin.ts`, regras Firestore | Parcial | SDK e Admin SDK codificados | Configuração real e regras implantadas não confirmadas | Confirmar projeto, credenciais, regras ativas e testes |
| Stripe / pioneiros / Connect | Decisões de produto em histórico; não há evidência de rota Stripe na árvore examinada | Não localizado no branch de código consultado | Não localizado | Não confirmado | Tratar em trilha separada; configurar ambiente de testes antes de declarar integração |
| Responsividade e acessibilidade | Design/UI docs introdutórios e componentes React | Parcial | CSS e componentes existem | Testes em dispositivos e leitores não confirmados | Executar matriz mobile/desktop, teclado, foco e leitores de tela |
| Vercel preview e produção | Branch de código possui estrutura Vite e endpoints `api/` | Parcial | Configuração específica de deploy não localizada (`vercel.json` ausente no caminho consultado) | Deploy não verificado | Conferir projeto Vercel, comandos, variáveis e URLs; testar preview e produção |
| Testes automatizados | Não foi identificada pasta de testes nem script `test` no package.json consultado | Não localizado | Não confirmado | Não executado | Criar testes unitários, integração, regras e E2E antes do release |

## Achados técnicos transversais

1. `src/App.tsx` ainda renderiza `V6App`. A V7 precisa ser definida como evolução deliberada dessa base, com inventário de componentes preservados, substituídos e novos.
2. O serviço Supabase lança erro durante a importação se URL/chave não estiverem disponíveis. Avaliar inicialização controlada e estados de indisponibilidade para não impedir conteúdo público.
3. `PageAccessGateV7` libera visualmente algumas rotas públicas sem consulta direta ao Supabase. Isso não pode ser confundido com autorização de dados: consultas e operações devem depender de RLS/backend, conforme a arquitetura aprovada.
4. `api/chat.ts` exige Firebase ID token. `ConversationV6.tsx` cria sessão anônima via `signInAnonymously`; falta verificar habilitação do provedor no projeto e testar retenção/limpeza. A navegação e dados públicos devem continuar sob autorização Supabase/RLS, separada da sessão técnica do chat.
5. `firestore.rules.v7-draft` é explicitamente um rascunho e não deve ser publicado sem testes.
6. `src/mvp-v1/UnoMvpApp.tsx` contém reconhecimento local demonstrativo de fundador. Não pode ser usado como controle de acesso de produção.
7. `ParticipationV63.tsx` identifica estados demonstrativos e pendentes. Essas declarações devem continuar explícitas até que exista operação real.
8. A inspeção foi estática. Nenhuma compilação, suíte de testes, teste de navegador, conexão real com Firebase/Supabase/Stripe ou deploy foi executado nesta auditoria.

## Critérios mínimos para fechar cada linha

Uma linha só pode mudar para **integrado** quando houver evidência de fluxo completo entre interface, endpoint/serviço, persistência e autorização. Só pode mudar para **testado** quando houver execução registrada de testes positivos e negativos relevantes. Só pode mudar para **liberado** quando o ambiente alvo tiver sido verificado e os critérios de aceite aprovados.

## Prioridade de execução sugerida

1. Escolher branch-base oficial de implementação V7 após comparar commits e divergências.
2. Fechar autenticação visitante, IDU, papéis e gates de acesso.
3. Fechar Supabase/RLS e Firebase/Admin SDK/regras.
4. Consolidar navegação e experiência responsiva para visitante, usuário e parceiro.
5. Fechar os fluxos essenciais de Conversa, Comunidade, Participação, Vitrine, agenda e habilidades.
6. Especificar e integrar UNO RH no nível mínimo aprovado para o MVP.
7. Definir escopo real de lives e mídia sem prometer infraestrutura ainda inexistente.
8. Executar testes automatizados e E2E, depois validar preview e produção.
9. Preparar backlog V8 sem antecipar decisões comunitárias.


## Atualização de auditoria — sessão de visitante

A inspeção posterior de `ConversationV6.tsx` confirmou o uso de Firebase Anonymous Auth para o chat público. A matriz foi corrigida: a lacuna não é mais “ausência de criação de sessão no código”, mas sim habilitação e teste do provedor no projeto, além da política de retenção e limpeza. O uso de Firebase para token técnico do chat deve ser mantido separado da decisão de que a navegação e os dados públicos de visitantes dependem do Supabase.


## Relação entre acervo histórico e rastreabilidade V7

As transcrições das oito imagens e a comparação EOU V04–V08 estão registradas em:
- `docs/CONTINUIDADE/2026-10-30-acervo-historico-oito-imagens-v6.md`;
- `docs/CONTINUIDADE/2026-10-30-reconciliacao-preliminar-v06-co-imagens.md`;
- `docs/CONTINUIDADE/2026-10-30-comparacao-ampliada-eou-v04-v08-imagens.md`.

Essas fontes elevam o estado de vários requisitos para **documentado** e esclarecem a arquitetura conceitual, mas não alteram automaticamente as colunas de código, integração, teste ou liberação. Uma capacidade descrita em EOU ou em imagem histórica só poderá ser marcada como codificada/integrada/testada/liberada após evidência técnica correspondente na branch e no ambiente da V7.

As correspondências diretas dos capítulos CCM 010, 014, 017 e 020 são referências documentais para requisitos e critérios de aceite futuros; não são evidência de que as mesmas capacidades estejam implementadas no MVP.
