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
