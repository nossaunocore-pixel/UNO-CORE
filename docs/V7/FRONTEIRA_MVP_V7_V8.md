# Fronteira de escopo — MVP V7 e expansão V8

**Data:** 2026-11-01  
**Repositório:** `nossaunocore-pixel/UNO-CORE`  
**Branch de referência:** `v7-implementation`  
**Status:** consolidação documental do escopo informado pelo fundador; não é certificação de implementação nem autorização de produção.

## 1. Objetivo

Concluir o MVP V7 com o conjunto de capacidades já definido para a primeira experiência pública/piloto da UNO CORE. A V7 não deve absorver a expansão operacional dos serviços. A expansão e a ativação desses serviços ficam reservadas ao V8, com especificação, validação e autorização próprias.

**V8 aqui significa a próxima versão/deploy do produto. Não significa o Volume 08 da Engenharia Oficial (EOU).** Versões do produto e volumes EOU são séries diferentes.

## 2. Escopo que permanece no MVP V7

### 2.1 Praça UNO e apresentação pública
- Praça UNO como porta de entrada e apresentação clara das dimensões social, comercial e institucional.
- Edifício UNO com propósito, princípios e visão institucional pública, sem expor documentos internos, ferramentas administrativas ou dados reservados.
- Vitrine comercial como apresentação e descoberta de ofertas, produtos, profissionais e serviços; informar origem (UNO ou terceiro), responsável, fornecedor, condições e estado real.
- Comunidade como dimensão social e territorial.
- Instituições, Lazer/Eventos, Participação pública e catálogo público de Serviços podem ser conhecidos em modo de leitura, conforme a allowlist do ADR-0013.
- Não apresentar contagens, publicações, contratos, parceiros, serviços ou resultados fictícios como reais.

### 2.2 Visitantes e identidade
- A navegação pública e a leitura de conteúdo público dependem somente do Supabase e de políticas RLS apropriadas; não exigem Firebase, Google ou IDU.
- A Conversa pública permite atendimento a visitantes sem adesão e usa sessão anônima Supabase, endpoint público separado, limites de uso e contexto público.
- A Conversa pública não cria Perfil UNO, IDU, adesão ou vínculo institucional.
- Para identidade pessoal e ambientes privados, o método aprovado no MVP é Google com e-mail verificado e IDU provisionado no servidor. E-mail/senha não é método alternativo de acesso pessoal do MVP.
- Perfil, dados pessoais, escrita e áreas privadas exigem autenticação, IDU, autorização server-side e controles de banco correspondentes.

### 2.3 Comunidade e funções sociais nativas
- Permanecem no escopo do MVP as funções sociais que podem ser construídas com recursos próprios da plataforma, sem depender de APIs de redes sociais de terceiros.
- Isso pode incluir feed, publicações próprias, reações, comentários/respostas, conexões, itens salvos, denúncia e bloqueio, conforme os requisitos já registrados.
- “Sem API externa” não significa “sem backend”: sincronização entre participantes exige persistência própria, RLS, autorização, moderação, privacidade e testes.
- Enquanto esses controles não estiverem implementados e testados, a interface deve apresentar apenas leitura pública ou estados honestos de preparação; nunca simular interações como reais.

### 2.4 Navegação dos universos e ambientes
- A apresentação dos 18 universos é requisito de escopo do MVP: devem ser reconhecíveis e navegáveis como mapa/índice, mesmo quando alguns domínios estejam apenas informativos, em preparação ou bloqueados.
- A apresentação de um universo não significa que seus serviços, integrações ou operações estejam ativos.
- **Lacuna documental a resolver:** os arquivos consultados na branch atual não contêm a lista oficial completa dos 18 universos. `src/v6/content/unoRegistry.ts` registra 10 itens em `squareModules`, e `src/domain/experiences.ts` registra 10 áreas de experiência, que não devem ser confundidas automaticamente com os 18 universos. Não inventar os oito nomes ausentes nem marcar a apresentação dos 18 como concluída até recuperar a lista oficial.

### 2.5 Governança e experiência essencial
- Preservar o Orquestrador Mestre como camada central de coordenação e governança, sem autoridade irrestrita para agentes, APIs, ferramentas ou módulos.
- Painel Mestre, Painel de Participação e demais painéis devem respeitar identidade, escopo, menor privilégio e autorização no servidor.
- Oficina pode preparar e versionar rascunhos e registrar auditoria; criação/edição não equivale a aprovação, ativação ou publicação.
- Responsividade, acessibilidade e saída previsível são requisitos transversais: diálogos e sobreposições devem oferecer Fechar/Sair; Android Voltar deve fechar primeiro a sobreposição superior; Escape deve funcionar quando aplicável; alterações não salvas não podem ser descartadas silenciosamente.

## 3. Fronteira explícita: catálogo no V7, ativação no V8

No V7:
- apresentar e organizar o catálogo público de produtos/serviços;
- informar fornecedor, responsável, origem, condições, preço quando validado e estado;
- permitir descoberta, leitura e encaminhamento informativo;
- manter `Serviços Ativos` como área estrutural/estado vazio ou consulta somente a ativações que tenham sido efetivamente confirmadas por processo autorizado;
- não iniciar contratação, matrícula, reserva, pedido, pagamento, repasse ou habilitação operacional real.

No V8:
- expandir e ativar serviços e fluxos operacionais;
- habilitar onboarding e vínculos de fornecedores/parceiros;
- implementar contratação, reservas, matrículas, pedidos, elegibilidade, execução e acompanhamento;
- ativar integrações externas, serviços institucionais, logística/mobilidade e capacidades reguladas somente com requisitos, contratos, licenças, segurança e autorização adequados;
- habilitar pagamentos, Stripe Connect, transferências, payouts, carteira sacável, reembolsos e ledger somente após validação jurídica, contábil, financeira e técnica e aprovação expressa.

A reserva dessas funções para V8 não impede que o V7 apresente a visão, o catálogo e o estado futuro de forma transparente. Impede apenas que a apresentação seja confundida com serviço operacional ativo.

## 4. O que não pode ser usado como prova de conclusão

- Uma tela, rota, tipo TypeScript ou README não prova persistência ou operação.
- Um item no catálogo não prova fornecedor contratado ou serviço habilitado.
- Uma migration versionada não prova que foi aplicada.
- Um Preview READY não prova autenticação, RLS, fluxo ponta a ponta ou produção pública.
- Um shell de painel não prova que suas operações estejam implementadas.
- Uma função local não prova sincronização multiusuário.

Cada capacidade deve ser classificada como: **implementada e testada**, **parcial**, **somente interface/demonstração**, **aguardando integração/autorização**, **reservada ao V8** ou **não verificada**, com evidência correspondente.

## 5. Estado observado na revisão documental de 2026-11-01

- `src/App.tsx` ainda monta `V6App`; a integração completa da arquitetura V7 não está concluída.
- `src/v6/content/unoRegistry.ts` contém 10 `squareModules`, não a lista oficial de 18 universos.
- `src/domain/experiences.ts` contém 10 áreas de experiência; não é o registro dos 18 universos.
- `PageAccessGateV7` declara rotas públicas, mas a proteção de dados e ações depende também de APIs e RLS.
- A Conversa pública no código usa sessão anônima Supabase e endpoint separado; sua operação depende de configuração e validação do ambiente, quotas e CAPTCHA/Turnstile.
- A branch `v7-implementation` tem PR #1 aberto e em Draft; não foi mesclado.
- A cabeça observada da branch é `f23ef3d3704e5e44b1691e1da302b561526a59b7`. O status combinado consultado apresentou falha no check Vercel por limite de deployments gratuitos; isso não demonstra, por si só, falha do código.
- As cinco migrations descritas no pacote V7 permanecem preparadas, não aplicadas, conforme o registro documental consultado.
- Não foi comprovada promoção para produção.

## 6. Critério de fechamento do V7

O V7 só pode ser marcado como MVP fechado quando:
1. O escopo acima estiver refletido de forma coerente na navegação e nas especificações.
2. A lista oficial dos 18 universos for recuperada e apresentada sem invenções.
3. Os fluxos públicos Supabase, Conversa de visitante, autenticação Google/IDU e áreas privadas forem testados.
4. As funções sociais nativas incluídas no MVP tiverem persistência, autorização, privacidade, moderação e testes; ou estiverem explicitamente identificadas como não liberadas, sem falsa promessa.
5. Os painéis e o Orquestrador respeitarem os limites de autorização e não apresentarem operações fictícias.
6. Responsividade, acessibilidade e regra universal de saída forem testadas em desktop e dispositivos móveis.
7. Build, testes, Preview e evidências forem verificados na cabeça atual da branch.
8. O PR e o pacote de implementação estiverem revisados, mantendo produção intacta até autorização expressa.

## 7. Regra de transição para V8

Ao fechar o V7, congelar a versão aprovada, registrar commits, testes, evidências e pendências. As capacidades reservadas ao V8 devem ser planejadas em backlog próprio, sem serem ativadas por consequência automática do deploy do MVP.

**Princípio de separação:** V7 apresenta, conecta, orienta e valida o núcleo essencial; V8 expande e ativa serviços e operações conforme capacidade, autorização e validação.
