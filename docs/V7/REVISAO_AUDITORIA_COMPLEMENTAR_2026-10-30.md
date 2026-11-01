# Revisão complementar da auditoria V7 — branch de implementação

**Data:** 30 de outubro de 2026  
**Branch:** `v7-implementation`  
**Pull Request:** #1 — aberto, Draft, mergeable; não mesclado.  
**Escopo:** leitura estática de documentação, árvore e arquivos selecionados. Não houve alteração de código nesta revisão.

## 1. Posição da branch

A comparação GitHub `v7-foundation...v7-implementation` informa:

- `v7-implementation` está 57 commits à frente e 0 atrás de `v7-foundation`.
- As mudanças abrangem autenticação, endpoint de identidade, chat, gates de acesso, experiência pública, responsividade, regras Firestore e documentação V7.
- O PR #1 está aberto como Draft. A branch não deve ser mesclada nem promovida automaticamente com base apenas em build Preview.

O ponto de entrada `src/App.tsx` ainda renderiza `V6App`. A implementação V7 é uma evolução da base V6; a versão do branch não deve ser confundida com uma aplicação reescrita ou com MVP concluído.

## 2. Documentos V7 já existentes

Foram localizados no branch:

- `docs/V7/IMPLEMENTACAO_BASE_V7.md`
- `docs/V7/PACOTE_PREPARACAO_ANTIGRAVITY.md`
- `docs/V7/REDE_SOCIAL_E_SAIDA_UNIVERSAL.md`
- `docs/V7/REVISAO_RESPONSIVIDADE_ACESSO_LGPD.md`

Esses documentos já definem limites de responsabilidade entre trabalho de código e ações do Antigravity, arquitetura Supabase/Firebase, rede social, regra universal de saída, responsividade, privacidade e critérios de aceite. Devem ser tratados como base existente e revisados incrementalmente, não substituídos por uma especificação paralela.

## 3. Correções e reconciliações identificadas

### 3.1 Conversa pública e IDU

A descrição antiga em `IMPLEMENTACAO_BASE_V7.md` diz que o endpoint de conversa exige claim `uno_idu`. O código atual de `api/chat.ts` aceita sessão Firebase válida sem IDU para chat público, classifica essa sessão como visitante e aplica quota server-side. Sessões autenticadas com IDU seguem o fluxo de participante.

Atualizar a documentação para separar:
- chat público com Firebase Anonymous Auth, sem IDU;
- identidade de participante autenticado com IDU;
- navegação pública e leitura de dados, que não podem depender do Firebase.

### 3.2 Navegação pública versus sessão técnica do chat

O documento `REDE_SOCIAL_E_SAIDA_UNIVERSAL.md` estabelece que navegação pública/visitante depende somente do Supabase e que Firebase não pode ser pré-requisito para abrir páginas públicas. O código de `ConversationV6.tsx` cria sessão anônima Firebase especificamente para obter token e acessar `/api/chat`.

Não confundir as duas coisas:
- Praça, Vitrine, Comunidade e dados públicos devem carregar via Supabase/RLS sem exigir Firebase.
- A conversa com IA, na implementação atual, depende de Firebase Anonymous Auth, Firebase Admin, Firestore para quota e provedor Google GenAI.
- Essa dependência deve ser apresentada como requisito técnico específico da conversa, não como dependência de toda navegação pública.
- Se a decisão final for que nem a conversa visitante pode depender de Firebase antes da etapa de produção, será necessária uma alternativa arquitetural explicitamente aprovada. Não alterar silenciosamente o fluxo.

### 3.3 Retenção e limpeza

O código salva mensagens em `sessionStorage` e oferece limpeza local. O usuário anônimo Firebase pode persistir no Authentication; limpar a conversa não apaga a conta anônima nem a quota Firestore. A quota grava `expiresAt`, mas TTL não foi verificado.

Pendências:
- definir retenção e limpeza de contas anônimas;
- habilitar/verificar TTL da coleção de quotas;
- explicar separadamente limpar conversa, encerrar sessão e eliminar dados retidos;
- verificar Firebase App Check e limites adicionais contra criação abusiva de sessões.

### 3.4 Supabase e RLS

O cliente Supabase usa Firebase ID token via Third-Party Auth, mas a documentação já registra incompatibilidade potencial entre o esquema atual com UUID/FKs para `auth.users` e subjects Firebase não UUID. A migração para IDU/string e políticas RLS precisa ser desenhada, revisada e testada antes de habilitar operações reais.

A presença de `src/services/supabase.ts` não comprova schema, migration, RLS ou acesso seguro configurados. A árvore examinada não apresentou diretório `supabase/migrations`.

### 3.5 Papéis e Painel Mestre

O gate usa claims `unoFounder` e `unoMaster`. O endpoint de bootstrap reconhece o fundador por `UNO_FOUNDER_UID` server-side, mas não foi localizado neste exame um fluxo administrativo completo para conceder, auditar, expirar e revogar `unoMaster`.

A autorização deve seguir identidade + papel + escopo + ação + finalidade. O gate React não substitui autorização por registro no backend e RLS/Firestore.

### 3.6 Funções de produto ainda sem evidência de integração

Na árvore do branch consultada, não foram identificados módulos dedicados por nome para agenda inteligente, ativação de habilidades, UNO RH, lives/transmissão ou Stripe. Isso não prova ausência de toda lógica em componentes genéricos, mas não há evidência suficiente para marcá-los como integrados.

As páginas de Comunidade e Participação ainda apresentam parte relevante do conteúdo como visão, demonstração ou construção. O pacote social prevê feed e interações, mas exige persistência, moderação, privacidade, RLS e testes antes de declarar rede social operacional.

## 4. Limites operacionais preservados

- Não alterar projeto Firebase, Supabase, Stripe, Vercel ou produção nesta etapa.
- Não inserir segredos ou valores de ambiente no Git.
- Não publicar `firestore.rules.v7-draft` sem Emulator Suite e revisão de esquema.
- Não declarar conformidade LGPD; a revisão documental é uma preparação, não parecer jurídico.
- Não declarar MVP concluído por haver componentes ou Preview READY.
- Manter PR #1 Draft até fechar critérios de aceite e obter liberação humana.
- A referência visual oficial continua sendo dependência para acabamento final, conforme documentação V7 existente.

## 5. Sequência recomendada para Antigravity

1. Confirmar a branch de referência e o commit exato que será implantado no Preview.
2. Configurar apenas o necessário para validar Firebase Auth, Firebase Admin e Supabase em Preview, sem tocar produção.
3. Validar a navegação pública sem sessão Firebase e confirmar que dados públicos vêm do Supabase/RLS.
4. Validar separadamente a conversa pública com sessão anônima Firebase, quotas, retenção e respostas 401/429/503.
5. Validar Google login, provisionamento IDU, claims, Painel Mestre e revogação com testes positivos e negativos.
6. Resolver o modelo Supabase, migrações e RLS antes de conectar persistência social ou dados privados.
7. Implementar por prioridade o escopo restante da V7: perfil, Comunidade/Participação persistentes, Vitrine, agenda, habilidades e UNO RH, conforme requisitos aprovados.
8. Registrar cada requisito como especificado, documentado, codificado, integrado, testado e liberado.
9. Incorporar a referência visual oficial e executar testes reais em mobile/desktop, inclusive regra universal de saída.
10. Submeter PR para revisão humana. Não promover produção sem liberação expressa.

## 6. Relação com a auditoria documental em main

A auditoria geral e a matriz inicial de rastreabilidade foram registradas em `docs/CONTINUIDADE/` na branch `main`. Como essa branch contém o catálogo documental e não o código V7, esta revisão permanece nesta branch técnica até que o fundador/fluxo de integração decida como consolidar os registros entre branches.

**Conclusão:** existe uma base V7 relevante e já parcialmente validada por builds Preview anteriores, mas ainda há bloqueios de configuração externa, dados/RLS, testes ponta a ponta, funcionalidades de produto e acabamento visual. O estado correto permanece: preparação em andamento; produção não liberada.
