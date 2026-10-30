# Revisão de responsividade, acesso e privacidade — V7

Data: 2026-10-30  
Branch: `v7-implementation`  
Status: revisão e primeira camada transversal implementadas; validação de runtime e autorização de dados pendentes.

## 1. Escopo verificado

O ponto de entrada efetivo do produto é `src/App.tsx`, que renderiza `src/v6/V6App.tsx`. Portanto, as páginas ativas na navegação/estado do V6App são:

1. Praça UNO — `PublicSquareV6`
2. Edifício UNO — `UnoBuildingV63`
3. Biblioteca de conhecimento — `KnowledgeLibraryV63`
4. Estúdio de conteúdo — `ContentStudioV635`
5. Acervo de mídia — `MediaLibraryV636`
6. APIs e Ferramentas — `IntegrationsCenterV637`
7. Central de Agentes — `AgentsCenterV638`
8. Auditoria — `AuditCenterV639`
9. Conversas — `ConversationV6`
10. Meu Ambiente — `UserSquareV6`
11. Perfil — `ProfileV63`
12. Participação — `ParticipationV63`
13. Comunidade — `CommunityV6`
14. Vitrine Nós — `NosShowcaseV63`
15. Painel Mestre — `MasterPanelGateV7` / `MasterPanelV6`
16. Oficina — `WorkshopV6`

Há outras árvores de páginas e módulos no repositório (`src/pages`, `src/modules`, `src/mvp-v1` e páginas auxiliares antigas). Elas não são montadas pelo ponto de entrada atual. Não devem ser consideradas automaticamente cobertas pela camada V6; precisam de inventário próprio antes de serem reativadas ou ligadas à navegação.

## 2. Achados de código

- O layout ativo já possuía breakpoints, mas a responsividade estava concentrada em `src/v6/v6.css` e não constituía uma garantia uniforme para todas as páginas.
- A navegação móvel era criada a partir dos seis itens da navegação principal, mas o CSS reservava quatro colunas. Isso podia comprimir ou quebrar os itens.
- O botão de autenticação reutilizava a classe `v6-stage`, que era ocultada em telas pequenas. Assim, o acesso à conta podia desaparecer no celular.
- A autorização centralizada estava presente no Painel Mestre, mas não abrangia as outras áreas administrativas.
- A existência de autenticação não pode ser confundida com autorização para consultar ou alterar dados.
- Os painéis de integrações, agentes e auditoria contêm conteúdo declarativo/demonstrativo; não provam que as integrações, execuções ou trilhas estejam operacionais.
- O CSS global antigo usa `overflow-x: hidden`, o que pode esconder sintomas de largura excessiva. A correção deve ser validada em dispositivos reais e não apenas mascarada por clipping.

## 3. Alterações desta revisão

### 3.1 Acesso por página

Criado `src/v6/components/PageAccessGateV7.tsx` e integrado no ponto de entrada V6.

- Áreas públicas: Praça UNO, Vitrine Nós e Edifício UNO.
- Áreas autenticadas: Conversas, Meu Ambiente, Perfil, Participação e Comunidade.
- Áreas restritas a fundador/mestre: Painel Mestre, Oficina, Biblioteca, Estúdio de Conteúdo, Acervo, APIs e Ferramentas, Agentes e Auditoria.
- Para áreas privadas, a camada verifica sessão Firebase, contato verificado e claim `uno_idu`.
- Quando a claim IDU ainda não existe, a camada solicita o provisionamento ao endpoint seguro `/api/identity/session`; se o backend exigir atualização das claims, atualiza o token e revalida.
- Acesso administrativo exige claim explícita `unoFounder` ou `unoMaster`. Estar autenticado não concede papel administrativo.
- A decisão é fail-closed: erro ou ausência de provisionamento não libera a área.

**Limite essencial:** esta camada protege a navegação e a montagem da interface. Ela não substitui autorização no servidor, políticas RLS, regras Firestore, escopo por universo/instituição/território nem verificação de propriedade de cada registro. Nenhuma operação com dados sensíveis deve ser liberada apenas com base neste componente.

### 3.2 Responsividade e acessibilidade transversal

- A navegação móvel agora apresenta quatro destinos principais (Praça, Conversas, Meu Ambiente e Comunidade), em quatro colunas reais.
- O botão de conta recebeu classe própria e permanece visível em telas pequenas.
- Foram adicionadas regras transversais de largura mínima, quebra de conteúdo, mídia fluida, foco visível, toque, diálogos com rolagem móvel e redução de movimento.
- Os painéis de Agentes, Integrações e Auditoria receberam regras de adaptação para colunas, filtros, controles e modais.
- A aparência visual final continua provisória e deve aguardar a referência oficial do fundador.

## 4. Matriz inicial de acesso

| Área | Visitante | Pessoa autenticada com IDU | Fundador/Mestre |
|---|---:|---:|---:|
| Praça UNO | leitura pública | acesso | acesso |
| Edifício UNO | leitura pública | acesso | acesso |
| Vitrine Nós | leitura pública | acesso | acesso |
| Conversas | bloqueado | acesso | acesso |
| Meu Ambiente / Perfil | bloqueado | próprio ambiente | acesso conforme necessidade e auditoria |
| Participação / Comunidade | bloqueado nesta etapa | acesso conforme escopo | acesso conforme função |
| Biblioteca / Conteúdo / Acervo | bloqueado | bloqueado | acesso |
| APIs / Ferramentas / Agentes / Auditoria | bloqueado | bloqueado | acesso |
| Oficina / Painel Mestre | bloqueado | bloqueado | acesso |

Esta é uma matriz de navegação inicial, não uma autorização definitiva para cada ação. Antes de dados reais, cada módulo deve definir permissões separadas de visualizar, criar, editar, moderar, exportar, administrar e excluir.

## 5. Caminho recomendado de conformidade com a LGPD

A implementação deve observar a Lei nº 13.709/2018 (LGPD) e regulamentação aplicável. A classificação de controlador, operador e encarregado deve ser feita conforme as atividades e decisões reais de cada entidade, não apenas pelo nome institucional.

Requisitos antes de operar dados reais:

1. Inventário de dados por finalidade, titular, origem, categoria, destino, base legal, retenção e compartilhamento.
2. Minimização: não coletar dados “por precaução”; pedir somente o necessário para a finalidade informada.
3. Bases legais por finalidade: consentimento não deve ser usado como justificativa universal. Documentar a hipótese legal apropriada e sua necessidade.
4. Dados sensíveis: separar e restringir especialmente saúde, biometria, origem racial/étnica, religião, opinião política, filiação sindical, vida sexual e dados genéticos; não inferir categorias sensíveis para segmentação sem avaliação jurídica específica.
5. Crianças e adolescentes: fluxo próprio, melhor interesse, controles de idade e representação legal quando aplicável; não presumir que o fluxo de adulto é suficiente.
6. Direitos dos titulares: canal e processo para confirmação, acesso, correção, anonimização, bloqueio, eliminação, portabilidade quando aplicável, informação sobre compartilhamentos e revisão de decisões automatizadas nos termos legais.
7. Retenção e descarte: prazos definidos por categoria, bloqueio legal e eliminação segura; evitar retenção indefinida.
8. Transparência: avisos claros sobre finalidade, compartilhamentos, automação/IA, gravação de áudio, localização e publicação comunitária.
9. Segurança: menor privilégio, isolamento por pessoa/universo/instituição/território, criptografia, gestão de segredos, logs sem conteúdo pessoal desnecessário, resposta a incidentes e revisão periódica de permissões.
10. Terceiros e transferência internacional: contratos, instruções, suboperadores, localização/transferência e mecanismos legais aplicáveis, especialmente para Firebase, Supabase, Vercel, provedores de IA e pagamentos.
11. Avaliação de impacto: preparar RIPD quando o tratamento puder gerar alto risco, em especial pela escala, sensibilidade, vulnerabilidade dos titulares, perfilamento ou decisões automatizadas.
12. Governança: definir responsáveis por aprovação, moderação, exportação, exclusão, resposta a incidentes e revisão humana.

## 6. Bloqueios técnicos ainda abertos

- O segredo Firebase Admin ainda precisa ser configurado no ambiente Vercel por canal seguro.
- `UNO_FOUNDER_UID` precisa ser definido somente após autenticação e confirmação segura do UID correto.
- Provedores Firebase e integração Third-Party Auth do Supabase ainda precisam de validação no Console.
- O esquema Supabase atual usa UUID e FKs para `auth.users`; a migração para IDU/string e políticas RLS baseadas nas claims Firebase ainda requer desenho, revisão e aprovação.
- `/api/chat` valida autenticação e IDU, mas não há ainda uma matriz de autorização de domínio para APIs de pessoa, comunidade, instituições, marketplace, serviços, moderação e operações administrativas.
- Firestore Rules versionadas ainda precisam ser testadas no Emulator Suite e publicadas somente após aprovação.
- Rate limiting, quotas, auditoria real, gestão de consentimento, retenção, exportação e exclusão de dados ainda precisam ser implementados.
- Testes automatizados de acesso positivo/negativo, escopo multiuniverso e isolamento entre titulares ainda não foram executados.
- A cobertura visual precisa de testes em larguras de 320, 360, 390, 430, 768, 1024 e desktop, incluindo zoom, teclado, leitor de tela e conteúdo longo.

## 7. Critério de conclusão

Uma página só será marcada como revisada quando:
- a hierarquia de conteúdo estiver validada em celular, tablet e desktop;
- não houver overflow horizontal involuntário;
- todos os controles forem acessíveis por teclado e tiverem nomes/estados compreensíveis;
- a matriz de acesso estiver documentada e testada;
- APIs e banco validarem o mesmo escopo no servidor;
- os testes negativos provarem que usuário sem permissão não lê, altera, exporta nem enumera dados de terceiros;
- dados pessoais e sensíveis tiverem finalidade, base legal, retenção e direitos dos titulares definidos.

**Estado desta entrega:** primeira camada transversal de navegação, responsividade e acessibilidade adicionada ao código. Não declarar conformidade LGPD, autorização ponta a ponta ou revisão visual integral concluída até os bloqueios e testes acima serem resolvidos.


## 8. Resultado do build/Preview — 2026-10-30

- Vercel Preview READY no commit `b29273c665a3b55e217442965eac0e91c3cf86d8` (deployment `dpl_BzRom3dnSgLZt5kNLAxkuyj3vYbv`).
- Vercel Preview READY também no commit `48d040bbc3188c54b11466344327b9d5ccd0c243` (deployment `dpl_3DarYTfWkvfKpiEui4zwnrEbWpFM`). O HEAD posterior `cb1f51188b569e6ae0efa6c62950e4b0ab021ae3` preserva a mesma árvore de arquivos do commit READY.
- O pipeline executou `tsc && vite build`; 1.518 módulos foram transformados e o deployment concluiu.
- Aviso não bloqueante: bundle JS de 770,89 kB acima do limite de 500 kB; recomenda-se code-splitting/dynamic import.
- READY comprova build/deploy, não validação visual em aparelhos, runtime Firebase Admin, chamadas autenticadas nem autorização dos dados.
- O Preview está sujeito à proteção SSO da Vercel. Produção não foi promovida.


## 9. Integridade dos dados demonstrativos — 2026-10-30

- Meu Ambiente deixou de exibir o nome fixo de uma pessoa e passou a usar o nome de exibição da conta autenticada, com fallback neutro. Contagens, vínculos familiares, solicitações, adesão e permissões fictícias foram substituídos por estados explícitos de integração pendente.
- Comunidade deixou de apresentar nome de grupo, volume de votos, contagens de atualizações e publicações simuladas como se fossem atividade real. Os exemplos agora estão identificados como demonstrativos; publicar, apoiar, comentar, buscar e anexar permanecem indisponíveis até consentimento, moderação e persistência serem conectados.
- Perfil Vivo deixou de exibir nome pessoal hard-coded; rótulos de privacidade agora indicam que os controles são previstos, não já operacionais.
- Essas correções reduzem risco de apresentar dados inventados como fatos, especialmente em telas de perfil e participação comunitária.


## 10. Modelo de autorização recomendado para a UNO

A autorização final deve combinar **identidade + papel + escopo + ação + finalidade + estado de consentimento/base legal**. Papel sozinho nunca deve liberar todo o banco.

### Papéis e limites propostos

| Papel | Escopo mínimo | Permissões típicas | Limites obrigatórios |
|---|---|---|---|
| Visitante | Conteúdo público | Ler páginas públicas e informações institucionais | Sem dados pessoais não públicos, publicar ou consultar áreas privadas |
| Pessoa | Própria identidade/conta | Ver e corrigir dados próprios, gerir preferências e solicitações | Sem acesso a dados de terceiros ou áreas administrativas |
| Participante | Grupos/comunidades aos quais aderiu | Participar de discussões, consultas e atividades autorizadas | Sem acesso a perfis privados, grupos não associados ou dados internos |
| Moderador | Comunidade/grupo designado | Tratar denúncias, ocultar conteúdo e aplicar regras locais | Sem acesso amplo a dados sensíveis, pagamentos ou identidade civil não necessária |
| Responsável familiar | Vínculos familiares expressamente confirmados | Administrar apenas dados e autorizações dentro do vínculo legalmente válido | Não presumir representação de adultos; menores exigem fluxo próprio e melhor interesse |
| Coordenador institucional | Instituição/unidade designada | Gerir atividades, equipe e registros da própria instituição | Sem cruzar dados de outras instituições ou acessar todo o universo |
| Supervisor | Função/território designado | Acompanhar indicadores e casos encaminhados dentro da atribuição | Preferir dados agregados; acesso individual excepcional, justificado e auditado |
| Operações | Tarefas operacionais designadas | Executar etapas autorizadas e registrar evidências | Acesso mínimo, dados mascarados quando possível, sem conceder privilégios |
| Auditor | Escopo de auditoria aprovado | Consultar trilhas e evidências necessárias | Preferência por leitura; sem editar registros auditados ou consultar conteúdo irrelevante |
| Administrador técnico | Configuração técnica delimitada | Gerir recursos, integrações e disponibilidade | Não equivale a autorização para ler conteúdo privado dos usuários |
| Fundador/Mestre | Governança da plataforma | Definir políticas, delegar papéis e aprovar exceções | Não deve ser acesso irrestrito automático a todos os dados pessoais; exceções exigem finalidade, justificativa, tempo limitado e trilha |

### Escopo hierárquico

A permissão deve ser limitada ao cruzamento entre papel e vínculo comprovado: pessoa → casa/família → grupo → comunidade → unidade/instituição → território → universo. Pertencer a um escopo não concede automaticamente acesso a outro. Vínculos, delegações e consentimentos precisam ser revogáveis e auditáveis.

### Ações separadas

Definir permissões distintas para listar, visualizar, criar, editar, moderar, aprovar, executar, exportar, compartilhar, excluir e administrar permissões. Exportação em massa, leitura de dados sensíveis, pagamentos, decisões de alto impacto e ações externas devem exigir justificativa e, quando adequado, dupla aprovação humana.

### Regras de governança

- Negar por padrão; conceder somente o mínimo necessário e pelo menor prazo necessário.
- Nunca confiar em papel enviado pelo cliente; resolver permissões no backend a partir de claims/associações persistidas e validadas.
- Separar quem solicita, aprova e executa ações críticas.
- Não permitir autoelevação de privilégio; mudanças de papel exigem autoridade delegante e log imutável.
- Registrar ator, papel efetivo, escopo, ação, finalidade, objeto, resultado, data, versão da política e aprovador, sem duplicar conteúdo pessoal no log.
- Usar acesso emergencial temporário (“break-glass”) somente com justificativa, expiração e revisão posterior.
- Aplicar filtros por titular e escopo antes de retornar resultados; impedir enumeração de IDs e inferência de dados por contagens pequenas.

**Estado atual:** a implementação de código cobre apenas a barreira de navegação por autenticação/IDU e claims founder/master. Os papéis e escopos acima são a política de referência para a camada backend futura; não estão ainda implementados nem testados em banco/API.


## 11. Validação após as correções de conteúdo — 2026-10-30

- Vercel Preview READY no commit `abb81ebeed75207252572adacab18e6468e81050` (deployment `dpl_EXMS5Hmr4JJ8J6ttWkBqKNnMG2m7`). Esse commit inclui as alterações de acesso, CSS, Meu Ambiente sem métricas fictícias, Comunidade com conteúdo demonstrativo explícito e Perfil sem nome hard-coded.
- URL Preview: https://uno-core-3eocf42zs-rudson-cleber-rodriguez-s-projects.vercel.app (sujeita ao SSO do projeto Vercel).
- O pipeline executou `tsc && vite build`; 1.518 módulos transformados. Bundle JavaScript 771,72 kB (gzip 205,17 kB), acima do limite de 500 kB recomendado; code-splitting pendente.
- O HEAD documental posterior `d3b03281eb16518d8c3d9d0e20204dc18c0d1c46` adiciona a política proposta de papéis e escopos; seu deployment separado estava BUILDING na última consulta. Não houve alteração de código nesse commit.
- Nenhum teste visual real em dispositivos, runtime autenticado Firebase Admin, RLS, autorização de dados ou fluxo ponta a ponta foi comprovado por este build.


## 12. Fallback global para árvores legadas — 2026-10-30

- Adicionada em `src/index.css` uma base global para todos os pontos de entrada/páginas: largura mínima e fluida, mídias e controles limitados ao container, prevenção de conteúdo longo quebrar o layout, tabelas com rolagem móvel, foco visível, alvos de toque e redução de movimento.
- Isso oferece um piso responsivo também às árvores antigas (`src/pages`, `src/modules`, `src/mvp-v1`) caso sejam ativadas no futuro.
- A base global não substitui revisão individual de hierarquia, grids, formulários, navegação e acessibilidade de cada página legada. Essas árvores continuam fora da navegação ativa e devem passar por validação página a página antes de serem ligadas.
- O commit de código com o fallback global é `b01cea29a4c2bc7cbada9748e9e0e67284ccad5c`. O deployment documental posterior `2dda1151244a55783e65fb5f5c81768294283dff`, que contém a mesma árvore de código, executou `tsc && vite build` e transformou 1.518 módulos; o estado final Vercel ainda aparecia BUILDING na última consulta.


## 13. Referências legais oficiais consultadas — 2026-10-30

A revisão jurídica futura deve usar a redação consolidada vigente, não apenas o texto original de 2018:

- Lei nº 13.709/2018 (LGPD), texto atualizado da Câmara dos Deputados: https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html
- Resolução CD/ANPD nº 19/2024 — Regulamento de Transferência Internacional de Dados e cláusulas-padrão contratuais: https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-19-de-23-de-agosto-de-2024

Pontos da redação consolidada relevantes para o desenho: princípios e necessidade/finalidade (art. 6º); hipóteses legais (arts. 7º e 11); crianças e adolescentes (art. 14); término/eliminação (arts. 15–16); direitos dos titulares e revisão de decisões automatizadas (arts. 18–20); transferências internacionais (arts. 33–36); registro das operações e RIPD (arts. 37–38); controlador/operador/encarregado (arts. 39–41); segurança e incidentes (arts. 46–49); governança e programa de privacidade (art. 50).

A Lei nº 15.352/2026 alterou, entre outros pontos, a redação do conceito de encarregado no art. 5º, VIII, conforme indicado na redação consolidada consultada. A aplicabilidade concreta de cada regra, bases legais, papel de cada entidade e mecanismo de transferência exige análise jurídica dos fluxos reais e dos contratos dos fornecedores.
