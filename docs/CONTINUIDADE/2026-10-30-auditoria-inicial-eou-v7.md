# Auditoria inicial da Engenharia Oficial e preparação V7

**Data da auditoria:** 30 de outubro de 2026  
**Repositório:** `nossaunocore-pixel/UNO-CORE`  
**Branch examinada:** `main`  
**Natureza:** diagnóstico documental inicial; não representa aprovação de mudanças canônicas.

## 1. Objetivo

Iniciar a revisão e expansão da documentação da UNO CORE para preparar a implementação da V7 pelo Antigravity, preservando a engenharia existente, sua história e as decisões do fundador.

A V7 é a primeira versão pública oficial. A V8 será a evolução participativa, incorporando deliberações e aprendizados da Comunidade UNO 1. Portanto, esta auditoria separa:

- **Decisão consolidada:** orientação expressamente definida pelo fundador ou registrada em fonte institucional existente.
- **Proposta técnica:** recomendação de engenharia que ainda precisa de validação quando alterar arquitetura ou comportamento do produto.
- **Reserva V8:** matéria que deve permanecer aberta à participação e deliberação comunitária.

## 2. Escopo efetivamente verificado nesta etapa

Foram consultados no branch `main`:

- `README.md`
- `GOVERNANCE.md`
- `CONTRIBUTING.md`
- `docs/EOU/README.md`
- `docs/EOU/CATALOGO.md`
- `docs/EOU/CHANGELOG.md`
- `EOU/volumes/INDEX.md`
- Volumes fundacionais 1, 2, 3, 4, 5, 7 e 8, conforme caminhos existentes.

A árvore do repositório já havia sido enumerada: aproximadamente 650 entradas, com 40 diretórios de domínio sob `docs/EOU/` e uma coleção extensa de documentos, especialmente em `docs/EOU/V03-MUE`. A leitura integral de todos os documentos ainda não foi concluída; esta nota não deve ser interpretada como auditoria integral da EOU.

## 3. Achados confirmados

### 3.1 Volume 6 ausente no caminho canônico anunciado

O `README.md` raiz e `EOU/volumes/INDEX.md` anunciam o Volume 6 — Conhecimento Organizacional — no caminho:

`EOU/volumes/volume-06-conhecimento-organizacional.md`

A consulta desse caminho no branch examinado retornou **404 / NOT_FOUND**. O índice, portanto, aponta para um arquivo que não está disponível nesse local.

**Tratamento:** não criar automaticamente um novo Volume 6 nem reconstruir seu texto como se fosse original. Primeiro será feita busca ampliada na árvore, em nomes alternativos, histórico e documentos relacionados. Se não houver fonte recuperável, será elaborado um documento de recomposição claramente identificado como reconstrução técnica, sujeito à validação do fundador, preservando o registro da lacuna.

### 3.2 Nomenclatura divergente entre os conjuntos fundacional e de domínio

O `EOU/volumes/INDEX.md` e o `README.md` raiz descrevem os oito volumes fundacionais como:

1. Constituição Técnica
2. Arquitetura Oficial
3. Modelo Universal de Entidades (MUE)
4. Ecossistema de Valor e Aprendizagem (EVA)
5. Ordem de Missão (OM)
6. Conhecimento Organizacional
7. Ciclo de Confiança e Manutenção (CCM)
8. Operações, Princípios e Soberania (OPS)

Já `docs/EOU/README.md` e `docs/EOU/CATALOGO.md` usam para os volumes EOU-V04 a EOU-V08:

- V04 — EVA / Enciclopédia Visual Adaptativa
- V05 — OM / Oficina Mestre
- V06 — CO / Centro de Operações
- V07 — CCM / Central de Coordenação de Missões
- V08 — OPS / Sistema Universal de Missões

Há colisão de siglas e títulos para o mesmo número de volume. Não é seguro presumir que sejam equivalentes. A relação entre os oito volumes fundacionais e os 40 volumes de domínio precisa ser formalizada como duas camadas documentais distintas, com identificadores inequívocos.

**Tratamento:** propor uma convenção de identificação que não renumere nem reescreva silenciosamente documentos históricos. Registrar a decisão em ADR antes de alterar os catálogos canônicos.

### 3.3 Coleção de 40 domínios

O catálogo EOU lista 40 domínios, de Constituição Técnica até Documentação Institucional. A árvore examinada contém os diretórios V01–V40 em `docs/EOU/`.

A existência de diretório não comprova completude, qualidade, aprovação ou implementação. Cada domínio ainda precisa ser inventariado por arquivos, propósito, dependências, estado documental e relação com a V7.

### 3.4 Changelog insuficiente para rastreabilidade

`docs/EOU/CHANGELOG.md` contém apenas três entradas genéricas (versões 0.1 a 0.3), sem datas, arquivos afetados, responsáveis, motivação ou relação com commits.

**Tratamento:** propor um padrão de changelog rastreável, mantendo as entradas históricas e acrescentando novos registros sem apagar o histórico.

### 3.5 Governança documental versus execução de produto

O README raiz e `GOVERNANCE.md` contêm declarações amplas de soberania popular, transparência e governança. Para a V7, será necessário distinguir os princípios institucionais daquilo que já está implementado como mecanismo técnico. Não se deve apresentar uma votação, conselho, auditoria ou poder comunitário como operacional apenas porque aparece descrito em texto.

**Tratamento:** cada capacidade terá estado próprio: especificada, documentada, codificada, integrada, testada e liberada. A documentação de produto explicará quais mecanismos existem na V7, quais dependem de operação humana e quais ficam para deliberação/evolução na V8.

## 4. Diretrizes de trabalho confirmadas

1. V7 é a primeira versão pública oficial da UNO CORE.
2. V8 é a evolução participativa após a Comunidade UNO 1, sem antecipar suas deliberações na V7.
3. Preservar documentos originais, histórico e decisões canônicas.
4. Separar decisões do fundador, propostas técnicas e assuntos reservados à comunidade.
5. Não declarar funcionalidade pronta sem evidência de código, integração e teste.
6. Preparar a implementação para Antigravity com instruções executáveis, dependências, critérios de aceite e verificações.
7. Não realizar mudanças em bancos, autenticação, Stripe, variáveis de ambiente ou produção durante uma auditoria documental sem autorização específica.

## 5. Próximas etapas da auditoria

- [ ] Pesquisar o Volume 6 por nomes alternativos, conteúdo e histórico; determinar se está ausente, renomeado ou arquivado.
- [ ] Ler os oito volumes fundacionais completos e verificar referências cruzadas.
- [ ] Inventariar os 40 domínios EOU, começando por README, índice, capítulos e estado documental.
- [ ] Recuperar a definição canônica de Zelo e os documentos relacionados antes de propor qualquer expansão.
- [ ] Mapear UNO RH, Painel Mestre, Orquestrador Mestre, MUE, identidade/IDU, Comunidade, Participação, Vitrine, Praça UNO e os universos do ecossistema.
- [ ] Construir matriz de rastreabilidade: requisito → fonte/decisão → documento → componente/código → dependência → estado → lacuna → teste.
- [ ] Consolidar escopo V7, backlog V8, critérios de aceite e roteiro de implantação Antigravity.
- [ ] Atualizar catálogos e READMEs somente após reconciliar nomenclaturas e referências.

## 6. Limites desta nota

Esta é uma **auditoria inicial parcial**. Não certifica a completude da EOU, não valida juridicamente os modelos operacionais, não atesta o estado do código da V7 e não comprova deploy, integração ou funcionamento em produção.

Nenhum arquivo canônico foi alterado nesta etapa. Esta nota é um registro de diagnóstico e continuidade.


## 7. Resultado da varredura integral da árvore EOU (30/10/2026)

A árvore Git foi consultada de forma recursiva e retornou **651 entradas, sem truncamento**. A contagem de arquivos por diretório EOU mostrou uma diferença material entre os oito primeiros domínios e os demais:

| Diretório | Arquivos | Situação observada |
|---|---:|---|
| V01 — Constituição Técnica | 8 | README + capítulos |
| V02 — Arquitetura Oficial | 8 | README + capítulos |
| V03 — MUE | 158 | README + documentação extensa |
| V04 — EVA | 146 | README + documentação extensa |
| V05 — OM | 101 | README + documentação extensa |
| V06 — CO | 53 | README + documentação extensa |
| V07 — CCM | 22 | README + documentação |
| V08 — OPS | 34 | README + documentação |
| V09 a V40 | 1 arquivo por diretório | Somente README em cada diretório |

**Atenção à numeração:** o diretório `docs/EOU/V06-CO` existe e contém 53 arquivos; ele pertence à série de domínios EOU e não substitui o arquivo fundacional `EOU/volumes/volume-06-conhecimento-organizacional.md`, que permanece ausente no caminho anunciado. Essa distinção precisa constar nos índices para evitar confusão.

O dado de 1 README nos diretórios V09–V40 significa que esses 32 domínios estão, no snapshot consultado, em estado de estrutura inicial/descrição introdutória. Não significa que suas funções estejam codificadas ou prontas. A documentação detalhada desses domínios ainda precisa ser produzida e revisada conforme prioridade e dependências da V7.

## 8. Busca ampliada por Volume 6, Zelo e MMK

- A árvore completa não contém arquivo cujo caminho indique `volume-06-conhecimento-organizacional.md`, nem outro caminho com nome equivalente a Conhecimento Organizacional.
- A consulta ao histórico GitHub filtrada pelo caminho exato do Volume 6 retornou lista vazia de commits. Isso não prova inexistência em cópias externas, mas não há histórico desse caminho disponível no repositório examinado.
- A árvore contém apenas uma ocorrência de caminho com o termo `Zelo`: o registro de continuidade `docs/CONTINUIDADE/2026-10-30-varredura-eou-zelo-e-diretrizes.md`. As buscas de conteúdo no índice de código para “Zelo”, “MMK”, “Mapa Mestre do Conhecimento”, “UNO RH”, “Painel Mestre”, “Comunidade UNO 1” e “V7 MVP” não retornaram resultados.
- Não foi encontrado caminho de arquivo nomeado MMK ou Mapa Mestre.

**Interpretação responsável:** o fundador afirma que Zelo e o MMK pertencem à engenharia oficial ou a documentos anteriores. A auditoria deste repositório não localizou suas fontes canônicas no snapshot atual. Isso é uma lacuna de recuperação documental, não autorização para inventar definições nem prova de que tais documentos nunca existiram. Manter a nota de continuidade como referência de contexto e solicitar/recuperar fonte canônica em histórico, outro repositório ou material de origem antes de consolidar a especificação.

## 9. Consequência para o plano de expansão

A prioridade documental recomendada passa a ser:

1. **Resolver a arquitetura de numeração e nomenclatura**: distinguir os oito volumes fundacionais da série de 40 domínios EOU e corrigir referências quebradas por meio de ADR, sem renumeração silenciosa.
2. **Preservar a documentação densa existente** nos domínios V01–V08; não substituir os 522 arquivos desses diretórios por resumos ou novos textos redundantes.
3. **Expandir seletivamente V09–V40** conforme dependências e escopo real do MVP, iniciando pelos domínios de arquitetura, segurança, governança, identidade, usuários/perfis, fluxos, marketplace, empregabilidade, financeiro e institucional.
4. **Recuperar Zelo e MMK** por fonte verificável antes de tratá-los como especificação fechada.
5. **Construir a matriz de rastreabilidade** e registrar o status real de cada requisito, documento e componente.

A expansão deve privilegiar documentos operacionais e verificáveis: escopo, atores, casos de uso, dados, permissões, fluxos, contratos, falhas, logs, critérios de aceite e testes. README introdutório, isoladamente, não equivale a engenharia pronta para implementação.


## 10. Auditoria inicial dos branches de implementação V7

A consulta de branches retornou, entre outros, `main`, `v7-foundation` e `v7-implementation`. A árvore de `main` examinada nesta auditoria contém documentação, agentes, banco-de-dados e scripts, mas não contém `src/`, `package.json`, testes, configuração Vite ou configuração Vercel. O código de aplicação está em branches separadas.

Árvores consultadas:

- `v7-foundation`: 195 entradas.
- `v7-implementation`: 208 entradas.
- `local-mvp-v1`: 131 entradas.

### 10.1 Entrada atual da aplicação

Nos branches `v7-foundation` e `v7-implementation`, `src/App.tsx` importa e renderiza `V6App`. Portanto, o ponto de entrada ainda utiliza a aplicação-base V6, embora existam componentes e telas com sufixo V7/V63. Isso não invalida o trabalho existente, mas significa que a denominação do branch não prova que a V7 final esteja concluída ou que todo o escopo do MVP esteja integrado.

O `src/v6/V6App.tsx` de `v7-implementation` reúne navegação para Praça UNO, Institucional, Vitrine, Conversa, Meu Ambiente, Comunidade, Painel Mestre e Oficina, além de telas de Participação, Perfil, conteúdo, mídia, integrações, agentes e auditoria. A presença de rotas e componentes não prova que seus fluxos de dados e operações estejam conectados.

### 10.2 Autenticação e controle de acesso

No branch `v7-implementation` foram localizados:

- `AuthControlV7.tsx`: login e cadastro por e-mail/senha e Google, confirmação de e-mail e saída de sessão.
- `PageAccessGateV7.tsx`: estados de verificação, login, confirmação, provisionamento, permissão e bloqueio; tenta provisionar `uno_idu` via `/api/identity/session`.
- `MasterPanelGateV7.tsx`: verifica claims `unoFounder` ou `unoMaster` para permitir acesso ao Painel Mestre.

A lógica é um avanço documental e de código, mas precisa de validação de ponta a ponta: emissão segura das claims no servidor, endpoint de provisionamento, revogação, regras de banco e testes negativos. A interface não deve ser considerada uma fronteira de segurança isolada.

### 10.3 Firebase e Supabase

No branch `v7-implementation`:

- O serviço Firebase só inicializa Auth/Firestore quando as seis variáveis públicas de configuração estão preenchidas; sem elas, autenticação fica indisponível.
- O serviço Supabase exige URL e chave publicável (aceita também variável legada anon key); se faltarem, lança erro durante a inicialização do módulo.
- O serviço Supabase tenta usar o ID token Firebase como access token e comenta que a integração Third-Party Auth do Firebase deve estar habilitada no Supabase antes de liberar operações protegidas por RLS.

**Pontos de validação antes do lançamento:**

1. Confirmar se a arquitetura de identidade Firebase → Supabase Third-Party Auth está realmente configurada e testada no projeto Supabase.
2. Confirmar que o acesso público/visitante e suas consultas são autorizados pelo Supabase/RLS e que nenhum dado privado é entregue por simples ocultação de interface.
3. Confirmar comportamento de degradação quando Supabase não estiver configurado ou indisponível, sem travar telas públicas necessárias.
4. Testar separação de dados, permissões, sessão, revogação e acesso por perfil.
5. Verificar se o endpoint `/api/identity/session` existe no branch implantado e se valida o token no servidor.

### 10.4 Conteúdo público e Participação

A tela de Comunidade consultada apresenta explicitamente sua natureza de proposta social e avisa que não representa serviços públicos oficiais, projetos em execução nem resultados reais. A tela de Participação diferencia debates, consultas, votações, assembleias e fundos; vários itens estão rotulados como “em construção”, “modo demonstrativo”, “aguardando regulamento” ou “aguardando constituição”.

Essa sinalização é adequada e deve ser preservada até que existam serviços reais, regras aprovadas, consentimento, registros e testes. Não converter cartões demonstrativos em alegações de funcionalidade ativa.

### 10.5 Risco de código legado demonstrativo

O branch `v7-implementation` também contém `src/mvp-v1/UnoMvpApp.tsx`, no qual o estado local `isFounder` pode liberar visualmente o Painel Mestre por uma ação de demonstração. Esse fluxo não deve ser utilizado como autorização real nem confundido com o gate baseado em claims. Deve permanecer isolado como demonstração ou ser removido da composição de produção após revisão.

### 10.6 Limites da auditoria de código

Nesta etapa foram lidos arquivos selecionados por GitHub; não foi executado `npm install`, `tsc`, `vite build`, testes automatizados, testes de navegador, integração Supabase/Firebase, nem deploy. Também não foi validado o conteúdo de variáveis de ambiente ou segredos. Portanto, nenhum branch foi certificado como compilável, seguro ou pronto para produção.

## 11. Próxima sequência de trabalho técnico

1. Comparar integralmente `v7-foundation` e `v7-implementation`, identificar commits, arquivos exclusivos, divergências e branch de referência para Antigravity.
2. Verificar presença e implementação real de `/api/identity/session`, emissão de claims e regras de acesso.
3. Inventariar rotas e telas V7 versus a lista de requisitos do MVP (visitante, usuário, parceiro; Vitrine, Comunidade, Participação, Praça UNO, Conversa, perfil, Painel Mestre).
4. Verificar fluxos de mídia/lives, agenda, habilidades, serviços e UNO RH, classificando cada um como tela demonstrativa, fluxo local, integração real ou ausente.
5. Definir testes de acesso anônimo, visitante, usuário, parceiro, fundador e pessoa manualmente autorizada.
6. Registrar os critérios de aceite e o branch de implementação escolhido antes de consolidar instruções finais para Antigravity.


## 12. Verificação complementar dos endpoints e regras de segurança V7

A inspeção adicional do branch `v7-implementation` confirmou a existência de:

- `api/identity/session.ts`
- `server/firebaseAdmin.ts`
- `api/chat.ts`
- `firestore.rules`
- `firestore.rules.v7-draft`
- `spec/FOUNDER_IDENTITY_BOOTSTRAP_V7.md`

### 12.1 Provisionamento do IDU

O endpoint `POST /api/identity/session` valida o Firebase ID token no servidor por Firebase Admin SDK, exige e-mail verificado ou telefone, cria ou recupera um vínculo em `uno_identity_links/{firebaseUid}` e emite a claim `uno_idu`. O reconhecimento do fundador depende de `UNO_FOUNDER_UID` configurado no ambiente server-side. A configuração exige `FIREBASE_SERVICE_ACCOUNT_JSON`; sem ela, o endpoint retorna indisponibilidade de provisionamento.

A especificação `spec/FOUNDER_IDENTITY_BOOTSTRAP_V7.md` determina que a claim de fundador seja concedida exclusivamente por processo confiável, que a autorização mestre seja manual e auditável e que o bootstrap seja testado antes de qualquer alteração no Firebase Console. Essas salvaguardas devem ser preservadas.

### 12.2 Regras Firestore

O arquivo `firestore.rules` usa negação por padrão: bloqueia leitura/escrita em `uno_identity_links`, permite apenas leitura própria em `usuarios/{firebaseUid}` e nega escritas do cliente. O arquivo `firestore.rules.v7-draft` declara expressamente que é rascunho e não deve ser publicado sem testes e revisão do esquema.

**Não publicar o rascunho como regra definitiva sem matriz de permissões, testes de segurança e revisão das coleções efetivamente usadas.** Também é necessário reconciliar o modelo de dados descrito na documentação com as regras restritivas atualmente existentes.

### 12.3 Chat público/visitante

O endpoint `api/chat.ts` exige um Firebase ID token para processar qualquer mensagem. Quando o token não contém `uno_idu`, classifica a sessão como visitante e aplica limites de 5 mensagens por minuto e 30 por dia por UID, persistidos em `uno_public_chat_limits`. O prompt do sistema orienta a não revelar dados internos e a não afirmar execução de serviços que estejam apenas em demonstração.

O componente `AuthControlV7.tsx` examinado apresenta cadastro/login por e-mail e login Google, mas não mostra criação de sessão anônima. O endpoint de bootstrap de IDU, por sua vez, exige contato verificado. Assim, **a origem e o ciclo de vida do Firebase ID token de visitante ainda precisam ser encontrados e testados**. Sem uma sessão Firebase válida, a conversa pública receberá 401, mesmo que a tela esteja visualmente acessível.

### 12.4 Pendências objetivas para o Antigravity

- [ ] Identificar onde a sessão de visitante é criada, renovada e encerrada; se não existir, especificar e implementar fluxo explícito de sessão anônima ou alternativa aprovada.
- [ ] Testar visitante sem IDU, usuário autenticado com IDU, usuário sem contato verificado e usuário sem sessão.
- [ ] Testar a criação de IDU idempotente e o tratamento de conflito de vínculo.
- [ ] Verificar que apenas `UNO_FOUNDER_UID` no servidor concede `unoFounder`; não aceitar claims fornecidas pelo cliente.
- [ ] Definir como `unoMaster` será concedida manualmente, registrada, revisada e revogada.
- [ ] Verificar expiração, atualização e revogação de tokens e autorização em cada endpoint.
- [ ] Executar testes das regras Firestore em Emulator Suite antes de qualquer publicação.
- [ ] Confirmar Third-Party Auth Firebase no Supabase e testar RLS para visitante e perfis autenticados.

Estes arquivos demonstram que há implementação de segurança em andamento, mas não comprovam que os serviços estejam configurados no projeto Firebase/Supabase nem que os fluxos estejam aprovados em produção.


## 13. Correção após inspeção do fluxo de Conversa

A inspeção posterior de `src/v6/pages/ConversationV6.tsx` localizou o mecanismo de sessão anônima que não aparecia em `AuthControlV7.tsx`:

- A tela observa o estado Firebase Auth e chama `signInAnonymously(firebaseAuth)` quando não existe usuário.
- A conversa usa o Firebase ID token dessa sessão para chamar `POST /api/chat`.
- Para uma sessão com contato verificado, tenta primeiro provisionar o IDU em `/api/identity/session`; para visitante anônimo ou sem contato verificado, não exige esse provisionamento.
- A própria tela informa que a identidade anônima pode permanecer no Firebase até que uma política de limpeza seja configurada.

Assim, a lacuna anterior sobre a origem do token de visitante foi **resolvida em nível de código**: há criação explícita de sessão anônima no componente de Conversa. Permanecem pendentes a habilitação do provedor Anonymous no projeto Firebase, teste real da sessão, limites, retenção e limpeza.

### 13.1 Separação de responsabilidades a reconciliar

A decisão de produto registrada pelo fundador é que a navegação de visitante depende do Supabase. O código atual usa Firebase Anonymous Auth para obter o token que protege o endpoint de Conversa e o rate limit server-side. Isso pode ser compatível se as responsabilidades forem separadas:

- **Supabase:** fonte de autorização e acesso aos dados públicos/visitante e navegação pública, com RLS.
- **Firebase Anonymous Auth:** sessão técnica temporária usada apenas para identificar e limitar chamadas do chat, se essa dependência for mantida e aprovada.
- **Firebase Auth verificado + IDU:** identidade de pessoa aderida/autenticada para áreas e operações que exigem perfil.

Essa separação é uma proposta de reconciliação técnica, não uma decisão nova do fundador. O Antigravity deve validar se o código implementa de fato esse limite; o gate visual atual não substitui RLS nem autorização no servidor.

### 13.2 Retenção e limpeza de sessão

A conversa persiste o histórico no `sessionStorage` do navegador e o botão “Limpar” remove esse histórico local. Isso não equivale a apagar a identidade anônima do Firebase nem os registros de quota no Firestore. O endpoint grava `expiresAt` nos documentos de quota, mas a configuração de TTL do Firestore não foi verificada.

Critérios pendentes:
- [ ] Definir política de retenção para identidades anônimas Firebase.
- [ ] Definir e verificar TTL para documentos de quota, se aplicável.
- [ ] Explicar ao visitante a diferença entre limpar conversa local, encerrar sessão e remover dados retidos.
- [ ] Testar renovação, persistência entre recargas, expiração e encerramento da sessão anônima.


## 14. Documentação V7 já existente na branch técnica

A revisão do branch `v7-implementation` confirmou que já existem quatro documentos específicos de preparação V7:

- `docs/V7/IMPLEMENTACAO_BASE_V7.md`
- `docs/V7/PACOTE_PREPARACAO_ANTIGRAVITY.md`
- `docs/V7/REDE_SOCIAL_E_SAIDA_UNIVERSAL.md`
- `docs/V7/REVISAO_RESPONSIVIDADE_ACESSO_LGPD.md`

Foi criado nessa mesma branch o documento complementar:

- `docs/V7/REVISAO_AUDITORIA_COMPLEMENTAR_2026-10-30.md`

Esse registro consolida a auditoria de código e reconcilia pontos de documentação desatualizados, especialmente o chat público sem IDU, a sessão anônima Firebase exclusiva da conversa, a navegação pública sob Supabase/RLS, retenção de sessão, migração RLS, claims administrativas e funcionalidades ainda sem evidência de integração.

A branch `v7-implementation` está 57 commits à frente de `v7-foundation`, e o PR #1 está aberto em Draft, sem merge. Não foi feita mesclagem entre branches nesta ação. Os documentos V7 permanecem na branch técnica; esta auditoria e a matriz geral permanecem em `main`, até que a estratégia de consolidação seja deliberada.


## 15. Reavaliação do Volume 6 e dos Painéis Mestres — nova fonte localizada

Uma leitura mais aprofundada dos READMEs e capítulos identificou uma fonte que altera a interpretação inicial sobre o Volume 6:

- O caminho fundacional anunciado `EOU/volumes/volume-06-conhecimento-organizacional.md` continua ausente e não há commits históricos para esse caminho.
- Entretanto, existe `docs/EOU/V06-CO/` com 53 arquivos. Seu `README.md` tem o título **“EOU-V06 — Conhecimento Organizacional”** e descreve arquitetura cognitiva e institucional, preservação de conhecimento, inteligência coletiva, governança, stewardship e curadoria.
- Ao mesmo tempo, `docs/EOU/README.md` e `docs/EOU/CATALOGO.md` chamam EOU-V06 de **Centro de Operações (CO)**.
- A árvore `docs/EOU/V06-CO` é nomeada CO, mas seu README afirma Conhecimento Organizacional. Portanto, a documentação apresenta uma colisão de identidade: o número V06 e o nome CO estão associados a um README que descreve Conhecimento Organizacional.

**Correção da conclusão:** não é correto dizer que não há material de Conhecimento Organizacional no repositório. Há um conjunto extenso e potencialmente relacionado em `docs/EOU/V06-CO/`. O que permanece ausente é o arquivo fundacional no caminho anunciado e uma declaração canônica inequívoca de que o conteúdo de `V06-CO` substitui, complementa ou apenas se relaciona ao Volume 6 fundacional. Não mover, renomear ou duplicar esses 53 arquivos antes de registrar a relação por ADR.

### 15.1 Painéis Mestres — distinção conceitual necessária

O capítulo `docs/EOU/V07-CCM/003-paineis-mestres.md` descreve Painéis Mestres como interfaces operacionais de capacidades específicas, integradas ao CCM, com operadores humanos, agentes, missões, histórico e escalonamento. O texto cita como exemplos painéis de zeladoria, saúde, educação, segurança, infraestrutura, prefeitura e hospital.

Isso não deve ser confundido automaticamente com o **Painel Mestre do fundador** existente no produto V7. A implementação do fundador é uma área administrativa privilegiada, enquanto o conceito EOU descreve uma família de painéis operacionais por capacidade. A arquitetura V7 deverá distinguir:
- Painel Mestre do fundador / governança e configuração global;
- painéis administrativos e de coordenação, quando autorizados;
- Painéis Mestres operacionais por domínio, equipe ou capacidade;
- escopos, permissões, responsabilidades e trilhas de auditoria de cada painel.

O mesmo capítulo cita “Painel Mestre da Zeladoria”, mas não constitui, por si só, a definição canônica do módulo Zelo. Preservar a nomenclatura e recuperar a definição própria de Zelo antes de criar especificação.

### 15.2 Relação com os oito volumes fundacionais

A coleção atual contém ao menos três séries que precisam ser distinguidas: os oito arquivos fundacionais sob `EOU/volumes/`, os 40 diretórios EOU sob `docs/EOU/V01–V40` e os capítulos extensos dentro de alguns desses diretórios. Os nomes e números não estão alinhados de forma inequívoca. A futura ADR deverá estabelecer identificadores sem colisão, referências cruzadas e regra de precedência documental sem apagar o histórico.


## 16. Evidência do fundador — identificação e conclusão do Volume 06

O fundador forneceu a transcrição da imagem oficial da Engenharia Oficial — Plataforma UNO, Volume 06. A imagem identifica o tema como **Conhecimento Organizacional — Arquitetura Cognitiva e Institucional**, declara o ciclo 06 concluído e traz o lema “Um ciclo completo. Um fundamento eterno.”, com data de 06 de agosto de 2026.

A transcrição também registra:
- Engenharia Oficial declarada;
- Nós S.A. fundada;
- missão definida;
- futuro em construção;
- elementos de governança, curadoria, stewardship, instituição curadora, inteligência e conhecimento organizacional;
- valor público e valor compartilhado;
- pilares conhecer, compreender, preservar, evoluir e transformar;
- propósito de que organizações sirvam melhor à sociedade e cada geração seja melhor que a anterior.

### 16.1 Correção do diagnóstico anterior

O Volume 06 **não deve ser tratado como fundamento inexistente ou não concluído**. A evidência do fundador confirma seu título, tema e estado declarado como concluído. O diretório docs/EOU/V06-CO/ possui README com o título “Conhecimento Organizacional”, coerente com a imagem. A inconsistência está na indexação: os catálogos gerais apresentam EOU-V06 como Centro de Operações (CO), e o arquivo autônomo citado no índice fundacional não está no caminho esperado.

A próxima tarefa é comparar o conteúdo completo dos 53 arquivos de V06-CO com a identificação visual e com os demais documentos fundacionais, e corrigir os índices de forma rastreável após validação. Não renomear nem mover arquivos neste momento.

### 16.2 Registro de termos a preservar

A transcrição contém o elemento “Nósu, S.A. Fundadora”. Essa grafia foi preservada literalmente no registro de evidência. Não normalizar para “Nós S.A.” nem assumir que se trata de erro tipográfico sem confirmação do fundador.

O ADR-0002 foi atualizado com esta evidência e permanece **Proposto — aguardando validação do fundador**, pois a identificação do Volume 06 está esclarecida, mas a convenção global para diferenciar volumes fundacionais e domínios EOU ainda exige mapeamento e aprovação.


## 16. Acervo histórico recuperado — oito imagens da V6

Em 30 de outubro de 2026, o fundador forneceu transcrição detalhada de oito imagens históricas recuperadas. O registro completo está em [Acervo histórico — transcrição das oito imagens](2026-10-30-acervo-historico-oito-imagens-v6.md).

As imagens registram, entre outros conteúdos: V04-EVA — Engenharia da Vida e da Inteligência; Catálogo de Capacidades da Plataforma UNO; priorização e escalonamento de missões; tomada de decisão consciente; modelo operacional integrado do CCM; missões críticas e operações de emergência; Carta Fundadora da Nós S.A.; e Volume 06 — Conhecimento Organizacional, com ciclo declarado concluído e data de 06 de agosto de 2026.

**Correção sobre a V6:** o fundador esclareceu que a V6 se perdeu e que as imagens são recuperações parciais. Não declarar a V6 integralmente recuperada. O diretório atual docs/EOU/V06-CO/ contém 53 arquivos e README intitulado Conhecimento Organizacional — Arquitetura Cognitiva e Institucional; isso comprova a existência dessa documentação no repositório, não que ela seja a V6 integral original.

**Correção institucional:** o fundador confirmou que o nome oficial é **Nós S.A.**. A expressão “Nósu S.A. Fundadora” que apareceu na transcrição inicial da imagem 8 é erro de leitura/transcrição e não deve ser propagada como denominação.

**Implicação para a auditoria:** as imagens acrescentam evidências sobre MUE, OM, EVA, CCM, OPS, governança, decisão, memória, capacidades e Carta Fundadora. A correspondência entre os números/títulos das imagens, os oito volumes fundacionais e os 40 diretórios de domínio EOU permanece pendente de mapeamento. Não renumerar nem mover documentos nesta etapa.


## 17. Reconciliação preliminar do EOU-V06-CO

Foi consultada a árvore Git recursiva e confirmada a existência de **53 arquivos** em `docs/EOU/V06-CO/`: README e 52 capítulos numerados de 001 a 052. Os títulos e introduções dos 52 capítulos foram inventariados. O conjunto aborda organização, pessoas, equipes, responsabilidades, processos, fluxos, orquestração, decisão, governança, inteligência, memória, aprendizagem, evolução, valor público, Stewardship, Curadoria, Instituição Curadora, Carta Fundadora e Declaração da Engenharia Oficial.

A reconciliação preliminar está registrada em [Reconciliação preliminar — imagens recuperadas e EOU-V06-CO](2026-10-30-reconciliacao-preliminar-v06-co-imagens.md). O relatório identifica divergências internas de nomenclatura: README como Conhecimento Organizacional; capítulo 001 como Catálogo Organizacional; catálogos gerais como Centro de Operações. Também identifica que os capítulos 050–052 cobrem Instituição Curadora, Carta Fundadora da NÓS S.A. e Declaração da Engenharia Oficial.

**Conclusão:** o conjunto V06-CO existente apresenta correspondência temática substancial com as imagens recuperadas, mas não há evidência suficiente para afirmar que seja a V6 integral original. A declaração do fundador de que a V6 se perdeu permanece válida. Não houve renomeação, movimentação ou exclusão dos 53 arquivos.


## 18. Comparação ampliada dos volumes EOU V04–V08 com as imagens recuperadas

A comparação documental ampliada foi registrada em [Comparação ampliada EOU V04–V08 e imagens recuperadas](2026-10-30-comparacao-ampliada-eou-v04-v08-imagens.md). Foram confirmadas as contagens: V04-EVA 146 arquivos/145 capítulos; V05-OM 101/100; V06-CO 53/52; V07-CCM 22/21; V08-OPS 34/33.

**Correspondências diretas:** as imagens 3, 4, 5 e 6 correspondem por número e título aos capítulos V07-CCM 014 (Priorização e Escalonamento), 010 (Tomada de Decisão Consciente), 020 (Modelo Operacional Integrado) e 017 (Missões Críticas e Operações de Emergência). Os conteúdos atuais desenvolvem os temas das imagens com maior profundidade.

**V04-EVA:** os sete núcleos cognitivos da imagem 1 encontram correspondência temática na coleção atual de 145 capítulos. Contudo, a imagem expande EVA como “Engenharia da Vida e da Inteligência”, enquanto o README atual define “Ecossistema de Valor e Aprendizagem”. Não normalizar sem validação.

**V05-OM:** há divergência interna material: README chama OM de “Oficina Mestre”; capítulo 001 define “Orquestrador Mestre”; a imagem 1 descreve OM como camada que orquestra recursos e operações. Separar os conceitos antes de qualquer renomeação.

**V08-OPS:** a documentação atual complementa V07-CCM: CCM coordena missões, contexto, prioridade e decisão; OPS sustenta, observa, recupera e evolui as capacidades operacionais. O capítulo 028 de OPS amplia a doutrina de crise/emergência, sem substituir o CCM.

**V06-CO:** a correspondência temática com a imagem 8 permanece forte, sobretudo nos capítulos de governança, memória, aprendizagem, Stewardship, Curadoria, Instituição Curadora e Carta Fundadora. A V6 integral continua perdida conforme declaração do fundador; os arquivos atuais não comprovam sua recuperação integral.

Nenhum arquivo canônico foi renomeado ou movido. Nenhum código, banco, configuração ou ambiente de produção foi alterado.


## 19. Carta Fundadora e recuperação de Zelo

A comparação da imagem 7 com `docs/EOU/V06-CO/051-Carta-Fundadora-da-NOS-SA.md` encontrou correspondência estrutural e textual forte: missão, propósito, princípios, forma de atuar e seção “Aquilo que Jamais Faremos” aparecem no documento atual. A imagem é compatível com síntese visual da Carta, mas não foi declarada edição textual idêntica. Nome institucional correto confirmado pelo fundador: **Nós S.A.**.

A busca por nomes de arquivo localizou `docs/CONTINUIDADE/2026-10-30-varredura-eou-zelo-e-diretrizes.md`. Esse registro reafirma que **Zelo** já pertence à engenharia e não deve ser criado como sigla ou módulo independente. A definição canônica original ainda precisa ser localizada; o documento encontrado é diretriz de continuidade, não substituto da fonte canônica. Preservar a orientação: cuidado e auxílio, nunca vigilância ou controle.
