# Implementação V7 — base funcional e pendências de liberação

**Branch:** `v7-implementation`  
**Base:** `v7-foundation`  
**Estado:** implementação inicial versionada; Preview ainda precisa ser compilada e validada.  
**Produção:** não promovida.  
**Referência visual:** aguardando envio e aprovação do fundador antes do acabamento visual final.

## Objetivo operacional

Preparar a UNO CORE para o ciclo real pessoa → necessidade → compreensão → direcionamento → ação → acompanhamento → resultado → melhoria coletiva. O escopo aprovado da V7 não deve ser reduzido silenciosamente; a implementação será integrada por dependências, com evidências de funcionamento.

## Entregas desta etapa

- Firebase client sem credenciais demonstrativas ou fallback que simule conexão.
- Autenticação Firebase por e-mail/senha e Google na interface atual, com confirmação de e-mail no cadastro.
- Cliente Supabase configurado para enviar o Firebase ID token como access token.
- Compatibilidade temporária com `VITE_SUPABASE_ANON_KEY` enquanto o projeto Vercel ainda não possui `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Endpoint server-side para validar o Firebase ID token, criar vínculo interno estável e atribuir claim `unoIdu` somente pelo Admin SDK.
- Endpoint de conversa protegido por Firebase ID token e claim `unoIdu`.
- Regras Firestore no repositório atualizadas para negar acesso direto do cliente às coleções, exceto leitura do próprio perfil legado.
- Segredos de Admin SDK e UID fundador documentados apenas como nomes de variáveis; nenhum valor secreto foi adicionado ao Git.

## Dependências externas ainda não liberadas

1. Configurar `FIREBASE_SERVICE_ACCOUNT_JSON` como variável sensível server-side no Vercel Preview. Não inserir no Git nem em variáveis `VITE_`.
2. Confirmar a conta Firebase do fundador e somente então configurar `UNO_FOUNDER_UID`. Não atribuir privilégios por e-mail, CPF ou campo de perfil.
3. Habilitar e verificar os provedores Email/Password e Google no Firebase Authentication.
4. Habilitar a integração Firebase Third-Party Auth no projeto Supabase.
5. Resolver a compatibilidade do esquema Supabase: tabelas atuais usam UUID/FKs para `auth.users`; Firebase UID é string e o Supabase documenta que `auth.uid()` falha para subjects não UUID. É necessária migração revisada para IDs textuais/IDU e políticas RLS baseadas em claims confiáveis antes de habilitar acesso de dados.
6. Criar rate limiting e quotas por identidade para o gateway de IA antes de abrir acesso público.
7. Implementar persistência real de conversas, consentimentos, solicitações, encaminhamentos, catálogo de serviços, marketplace, instituições, governança e trilhas de auditoria com critérios de aceite e testes ponta a ponta.
8. Validar regras Firestore no Emulator Suite e somente depois planejar publicação controlada no projeto Firebase.

## Limites desta entrega

- Não houve alteração remota no Firebase nem no Supabase.
- O arquivo `firestore.rules` é apenas código versionado; não foi publicado no Firebase.
- Nenhuma migração SQL foi aplicada.
- Nenhuma conta, usuário, UID, IDU ou papel de fundador foi criado manualmente.
- Nenhum segredo foi lido, copiado ou alterado.
- Nenhum pagamento real foi habilitado.
- Não houve promoção para produção.
- A interface mantém o estilo atual apenas como base funcional provisória; não é o acabamento visual aprovado.

## Critério de pronto para referência visual

A referência visual poderá ser incorporada quando:
- os fluxos funcionais e os contratos de dados estiverem estáveis;
- os estados de carregamento, vazio, erro, sucesso, permissão negada e aguardando aprovação estiverem definidos;
- a navegação funcional estiver validada em desktop e mobile;
- o fundador liberar a referência visual.

## Próxima sequência técnica

1. Validar build Preview e corrigir erros de compilação.
2. Completar o fluxo de identidade e autorização e provar testes positivos/negativos.
3. Preparar migração Supabase e revisão RLS, sem aplicar em produção até aprovação.
4. Integrar persistência e módulos de domínio conforme escopo V7 aprovado.
5. Executar testes ponta a ponta e registrar evidências.
6. Aguardar referência visual para acabamento final.
7. Submeter Preview para liberação humana; não promover automaticamente para produção.
