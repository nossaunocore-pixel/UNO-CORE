# Auditoria cruzada da EOU — 40 volumes

- Data: 2026-10-31
- Revisão: 0.1.0
- Escopo: leitura cruzada dos 40 volumes, usando especificações técnicas 0.3.0 de V09–V40 e READMEs-base de V01–V08.
- Estado: relatório de auditoria documental; achados e recomendações não são decisões arquiteturais aprovadas.
- Branch: `eou-v09-v17-deepening-2026-10-31`
- PR: #2 — Draft
- Segurança da mudança: documental; não altera migrations, Firebase, Supabase, Stripe, Vercel ou produção.

## 1. Parecer executivo

A coleção apresenta uma arquitetura conceitualmente coerente em vários eixos: identidade separada de autorização; entidade separada de perfil; catálogo separado de habilitação; fluxo separado de automação; marketplace separado de ledger financeiro; e documentação jurídica separada de governança institucional.

Entretanto, a auditoria encontrou conflitos de nomenclatura e autoridade nos fundamentos, lacunas de definição nos volumes V01–V08, fronteiras transversais ainda propostas (não ratificadas) e falta de um mapa canônico de ownership/fonte de verdade por entidade. Portanto, a EOU está **documentalmente aprofundada, mas ainda não está pronta para ser congelada como baseline arquitetural nem usada como autorização de implementação integral**.

A leitura dos V01–V08 foi feita sobre seus READMEs-base; os capítulos completos desses volumes não foram objeto desta auditoria. Os V09–V40 foram lidos por suas especificações complementares 0.3.0, incluindo o ADR-EOU-001 e o catálogo.

## 2. Escala de severidade

- **P0 — bloqueador crítico:** risco de autoridade, identidade, segurança ou integridade que impede aprovação/implementação do fluxo afetado.
- **P1 — alto:** conflito ou decisão transversal que precisa ser resolvida antes de congelar contratos, schemas ou ativar o domínio.
- **P2 — moderado:** melhoria ou definição necessária antes de operação ampla; pode avançar em documentação sem bloquear todo o conjunto.
- **P3 — editorial:** correção de clareza, referência ou consistência.

A severidade é do risco documental/arquitetural, não uma afirmação de incidente em produção.

## 3. Achados transversais

### AUD-01 — V04 possui expansão de sigla conflitante
**Severidade: P1 | Volumes: V04, V33, V34, V37**

O catálogo nomeia V04 como “EVA — Enciclopédia Visual Adaptativa”, enquanto o README de V04 apresenta EVA como “Ecossistema de Valor e Aprendizagem” e descreve aprendizagem, memória e inteligência. São conceitos materialmente diferentes. Não escolher um significado por inferência. Registrar decisão editorial explícita e atualizar catálogo, README, referências e glossário de forma coordenada.

### AUD-02 — V06 está em conflito com a nomenclatura oficial
**Severidade: P1 | Volumes: V06, V37, V38, V40**

O identificador/pasta e catálogo atual designam V06 como **Centro de Operações (CO)**, conforme nomenclatura confirmada pelo fundador em 31/10/2026. O README ainda se intitula “Conhecimento Organizacional” e descreve arquitetura cognitiva/institucional, inclusive narrativa de Instituição Curadora e constituição formal da NÓS S.A. O título antigo deve permanecer somente como referência histórica da série anterior, não como nome concorrente do V06 atual. O conteúdo legado precisa ser preservado como histórico e separado do escopo atual do Centro de Operações. Afirmações sobre constituição, poderes, curadoria e personalidade jurídica precisam apontar para evidência formal V39/V40; não podem ser tratadas como fato jurídico apenas por constarem em documento técnico.

### AUD-03 — Precedência entre V01 e V03 não está suficientemente tipada
**Severidade: P1 | Volumes: V01, V02, V03, V34, V36**

V01 declara precedência constitucional quando documentos técnicos entram em conflito; V03 se declara fundamento conceitual permanente e referência para os demais volumes. É necessário distinguir: princípios institucionais/engenharia, conceitos do MUE, arquitetura de solução e contratos de domínio. Recomenda-se uma regra de precedência por tipo de decisão, em vez de uma hierarquia textual genérica que possa fazer V01 e V03 parecerem concorrentes.

### AUD-04 — Fronteira MUE × Entidades ainda depende de decisão
**Severidade: P1 | Volumes: V03, V13, V26, V27, V28, V36**

V28 propõe aplicar a taxonomia UNO, titularidade, representação e verificação; V03 deve manter o meta-modelo universal. ADR-EOU-001 registra a separação, mas está explicitamente **proposto e não aprovado**. Não congelar schemas de entidades nem migrations com base nesse ADR antes da ratificação e da definição do ownership físico em V13.

### AUD-05 — Identidade, usuário, perfil, entidade e autorização precisam de contrato canônico
**Severidade: P1 | Volumes: V13, V16, V17, V26, V27, V28**

A separação conceitual está bem descrita, mas faltam decisões finais sobre emissor do IDU, unicidade/resolução de duplicidade, vínculo de contas externas, fonte de verdade de cada registro, recuperação, MFA, representação, retenção e modelo físico. Firebase Auth autentica; Supabase atende dados de aplicação/navegação pública; IDU é chave canônica de domínio; nenhum desses fatos concede autorização automaticamente. O mapa entidade → owner → fonte de verdade → escritores/leitores → retenção precisa ser aprovado antes de migrations.

### AUD-06 — Autoridade, alçadas e estado de ADR não estão formalmente fechados
**Severidade: P1 | Volumes: V01, V05, V06, V07, V08, V16, V17, V36, V40**

V17 descreve corretamente a governança por grants, contexto e autorização server-side, mas a matriz de alçadas está marcada como proposta. V36 define ciclo de ADR, mas os aprovadores por categoria e a relação entre autoridade do fundador, revisão técnica, revisão jurídica e executor ainda precisam de decisão. Oficina Mestre pode elaborar/versionar rascunhos; não deve autoaprovar ou ativar mudança crítica. Painéis são superfícies, não fontes autônomas de autoridade.

### AUD-07 — V05–V08 e V31–V33 precisam de mapa operacional sem sobreposição
**Severidade: P1 | Volumes: V05, V06, V07, V08, V10, V11, V17, V31, V32, V33**

Fronteiras propostas para validação:
- V05 Oficina Mestre: criar, editar, testar, versionar e preparar artefatos; não é runtime de missão.
- V06 Centro de Operações: observar e administrar a operação autorizada; não cria autoridade ou processos por si.
- V07 CCM: coordenar missões, responsáveis, recursos e acompanhamento.
- V08 OPS: modelo/ciclo universal de missão e seu registro operacional.
- V31 Fluxos: máquina de estados de processos de domínio.
- V32 Automações: gatilhos/agendas que iniciam ou retomam fluxos; não é agente nem permissão.
- V33 Motor Cognitivo: interpretação, planejamento e roteamento; não é executor soberano.
Essas fronteiras são uma proposta de auditoria, não uma decisão ratificada. Criar matriz de chamadas e ownership antes de contratos de runtime.

### AUD-08 — V14 APIs × V15 Integrações precisam de inventário unificado
**Severidade: P1 | Volumes: V11–V17, V31–V33**

As especificações distinguem endpoint/API de relação de integração, mas a operação precisa de um catálogo único de contratos com owner, finalidade, audiência, escopos, dados, ambiente, efeitos, quotas, idempotência, webhooks e responsável por desligamento. Evitar que V14 e V15 mantenham inventários divergentes ou que um webhook seja tratado como autorização.

### AUD-09 — Marketplace e financeiro possuem boa separação conceitual, mas gates legais/operacionais são bloqueadores
**Severidade: P1 | Volumes: V12, V15, V18, V25, V27, V28, V39**

V18 é responsável por oferta/pedido/contratação; V25 é fonte de verdade financeira e conciliação; V12 avalia provedor; V15 controla a integração. Antes de checkout, split, comissão, doação, carteira, saque ou payout, definir papel jurídico real da UNO em cada fluxo, titularidade dos fundos, Connect/onboarding, KYC quando aplicável, reembolso, chargeback, tributação, reconciliação e aprovações. Nenhuma taxa ou percentual histórico é decisão vigente por estar em documento de visão.

### AUD-10 — Domínios regulados exigem gates específicos antes de qualquer operação
**Severidade: P1 | Volumes: V19, V21, V22, V23, V24, V25, V30, V39**

As salvaguardas de fronteira estão bem declaradas: V19 não controla OT/SCADA; V21 não credencia nem emite certificado por conta própria; V22 não diagnostica/prescreve nem mantém prontuário; V23 não presume corretagem ou titularidade; V24 não presume vínculo nem agência de emprego; V25 não presume custódia; V30 não presume licenças/segurança. Antes de cada fluxo real, exigir responsável habilitado, fonte verificável, contrato, análise jurídica/setorial, privacidade e teste específico.

### AUD-11 — V39 e V40 precisam de trilha de evidência recíproca
**Severidade: P1 | Volumes: V17, V34, V36, V39, V40**

V39 organiza avaliação e documentos jurídicos; V40 registra identidade, atos, autoridade, história e comunicação institucional. V40 não formaliza poderes; V39 não decide missão/autoridade por si só. Todo ato, nome jurídico, delegação, parceria, porta-voz ou compromisso público deve apontar para evidência formal e versão. Separar claramente visão, decisão interna, ato formalizado, compromisso público e resultado observado.

### AUD-12 — Roadmap deve manter evidência ligada ao SHA exato
**Severidade: P1 | Volumes: V35, V36, V38**

V35 diferencia documentação, código, CI, Preview, produção e adoção. Tornar obrigatório que cada release registre SHA exato, workflow/CI daquele SHA, artefato, ambiente, smoke test, migration, aprovação e responsável. CI de commit anterior não valida HEAD posterior. O estado atual da branch de auditoria não possui workflow run associado confirmado no registro consultado.

### AUD-13 — Catálogo EOU contém trecho com escapes literais
**Severidade: P2 | Volumes: V37, V38**

No fim de `docs/EOU/CATALOGO.md`, a atualização aparece como texto com sequências literais `\\n` em vez de quebras de linha Markdown. Corrigir editorialmente e revisar a afirmação de que a seção se chama “V09–V17” quando o conteúdo atualizado cobre V09–V40.

### AUD-14 — V01–V08 têm maturidade documental desigual
**Severidade: P1 | Volumes: V01–V08**

A leitura dos READMEs mostra V01/V02/V05/V07/V08 ainda em desenvolvimento, V03 consolidado, V04 em construção e V06 com conteúdo legado desalinhado. V01–V08 não têm nesta auditoria o mesmo nível de especificação complementar que V09–V40. Não considerar a coleção de 40 volumes uniformemente especificada até aprofundar os oito fundamentos e alinhar os capítulos existentes.

## 4. Matriz de ownership e fronteiras — versão de auditoria

A matriz abaixo registra o domínio primário recomendado e as dependências principais. “Owner” significa responsabilidade documental/funcional proposta; não designa automaticamente uma pessoa ou equipe.

| Volume | Responsabilidade primária | Fronteira / fonte de verdade principal | Dependências-chave | Situação da auditoria |
|---|---|---|---|---|
| V01 | Constituição técnica e princípios permanentes | Princípios e precedência por tipo de decisão | V02–V40 | P1: aprofundar e tipar precedência |
| V02 | Arquitetura oficial e camadas | Arquitetura sistêmica; não substitui contratos de domínio | V01, V03–V40 | P1: README-base insuficiente |
| V03 | Meta-modelo universal MUE | Conceitos universais; não catálogo de tipos UNO nem schema físico | V13, V26–V28 | P1: ADR de fronteira pendente |
| V04 | Fundamento EVA | Aprendizagem/conhecimento ou experiência visual — expansão da sigla precisa ser decidida | V33, V34, V37 | P1: conflito de definição |
| V05 | Oficina Mestre | Criação/versionamento/testes de artefatos; sem autoridade de ativação | V06, V09–V17, V31–V38 | P1: separar de runtime |
| V06 | Centro de Operações | Observabilidade e administração operacional autorizada | V05, V07, V08, V16–V17 | P1: README ainda descreve conteúdo histórico |
| V07 | Central de Coordenação de Missões | Coordenação de missão e recursos | V08, V09–V17, V31–V33 | P1: contrato detalhado ausente nesta leitura |
| V08 | Sistema Universal de Missões | Modelo/ciclo de missão e registros | V07, V17, V31–V33 | P1: contrato detalhado ausente nesta leitura |
| V09 | Catálogo de Capacidades | Aptidão/elegibilidade; não concede permissão | V10, V11, V17, V28 | Coerente; taxonomia/risco pendentes |
| V10 | Catálogo de Agentes | Identidade técnica, versão, execução e grants do agente | V11, V16, V17, V33 | Coerente; autonomia precisa ratificação |
| V11 | Catálogo de Ferramentas | Contrato invocável; presença não autoriza uso | V14, V15, V17, V31–V33 | Coerente; classes de efeito pendentes |
| V12 | Catálogo de Provedores | Avaliação por produto/serviço/finalidade | V13–V16, V25, V33 | Coerente; scorecard/limites pendentes |
| V13 | Banco de Dados Mestre | Ownership, persistência e fontes de verdade | V03, V16–V17, V26–V28 | P1: mapa físico e retenção pendentes |
| V14 | APIs e Gateways | Contratos de endpoints e gateway | V11–V17, V31–V33 | P1: inventário integrado necessário |
| V15 | Integrações | Relação, fluxo de dados e ciclo de vida de integração | V11–V14, V16–V18, V25 | P1: alinhar catálogo com V14 |
| V16 | Segurança e Auditoria | Controles transversais, classificação e incidentes | Todos | P1: baseline/retention/pentest pendentes |
| V17 | Governança | Grants, alçadas, segregação e autorização server-side | V01, V05–V16, V26, V36 | P1: alçadas ainda propostas |
| V18 | Marketplace | Oferta, pedido, contratação e disputa | V12–V17, V25, V28, V31, V39 | P1: papel jurídico e checkout pendentes |
| V19 | Industrial | Coordenação informacional industrial | V12–V18, V20, V24, V28, V31 | Salvaguarda OT clara; caso piloto pendente |
| V20 | Infraestrutura Comunitária | Necessidades/ativos/indicadores territoriais com proveniência | V13, V16–V18, V28–V31 | Coerente; território/fontes pendentes |
| V21 | Educação e Capacitação | Ofertas, matrícula e aprendizagem com instituição emissora como autoridade | V18, V20, V24, V27–V31 | Salvaguarda de credenciamento clara |
| V22 | Saúde | Diretório/encaminhamento; atos clínicos fora do escopo | V13, V15–V18, V26–V28, V31 | P1: responsável e revisão clínica pendentes |
| V23 | Habitação | Informação/ofertas/encaminhamentos; sem presumir corretagem | V13, V16–V18, V20, V27–V29 | Salvaguarda clara; escopo piloto pendente |
| V24 | Empregabilidade | Capacidades, oportunidades e relações de trabalho | V09, V13, V16–V18, V21, V25–V29 | P1: papéis e revisão trabalhista pendentes |
| V25 | Financeiro | Ledger, pagamentos, reconciliação e referências de payout | V13–V18, V26–V28, V39 | P1: modelo legal/contábil pendente |
| V26 | Identidade Digital | IDU, vínculos externos, autenticadores e sessões | V13, V16–V17, V27–V28 | P1: emissor/política IDU pendentes |
| V27 | Usuários e Perfis | Conta de uso, perfil, preferências e participação | V13, V16–V17, V26, V28 | P1: atributos e políticas pendentes |
| V28 | Entidades | Tipos UNO, titularidade, representação e relações | V03, V13, V16–V17, V26–V27 | P1: fronteira MUE/ADR pendente |
| V29 | Projetos | Ciclo, baseline, orçamento referenciado e prestação de contas | V17–V20, V25, V28, V31–V32 | Coerente; templates/alçadas pendentes |
| V30 | Eventos | Evento, edição, inscrição, ingresso e presença | V18, V20–V21, V25, V28, V31 | Coerente; risco/licenças por categoria |
| V31 | Fluxos | Definição versionada, instância, tarefa e máquina de estados | V05–V17, V29–V33 | P1: engine/DSL e relação V07/V08 pendentes |
| V32 | Automações | Gatilho, agenda e disparo de fluxo | V05, V09–V17, V29–V33 | Coerente; scheduler/kill switch pendentes |
| V33 | Motor Cognitivo | Contexto, planejamento, roteamento e avaliação | V09–V17, V26, V31–V34 | Coerente; políticas/modelos pendentes |
| V34 | UNO CORE | Integração da arquitetura e ciclo de valor territorial | Todos | Coerente como integrador; não é dono dos domínios |
| V35 | Roadmap Oficial | Priorização, gates e evidência de releases/resultados | V17, V29, V31, V34, V36, V38–V40 | P1: CI/sha obrigatório |
| V36 | ADR | Registro de decisão arquitetural e supersessão | V01–V02, V13, V16–V17, V34–V38 | P1: aprovadores/alçadas pendentes |
| V37 | Glossário Oficial | Vocabulário, IDs conceituais e aliases | Todos | P2: completar e ratificar termos |
| V38 | Padrões de Engenharia | Baselines verificáveis de código, segurança, testes e release | Todos | P1: baseline e gates ainda pendentes |
| V39 | Documentação Jurídica | Obrigações, contratos, avaliações e revisão profissional | V13, V15–V18, V21–V30, V34–V40 | P1: assessoria/mapeamento real pendentes |
| V40 | Documentação Institucional | Identidade, atos, autoridades, história e comunicação oficial | V01, V17, V34–V39 | P1: evidência formal e status institucional |

## 5. Mapa de fontes de verdade — regra proposta

Esta regra deriva dos contratos atuais e precisa ser ratificada no ADR e em V13:

- Identidade de pessoa/IDU e vínculos externos: V26, persistidos conforme ownership V13.
- Conta de uso, perfil, preferências e consentimentos: V27.
- Tipos de entidades, relações, titularidade e representação: V28, sob meta-modelo V03.
- Grants, papéis operacionais, alçadas e decisões de autorização: V17.
- Políticas e evidências de segurança/auditoria: V16.
- Conteúdo de domínio e estado transacional: volume de domínio correspondente; persistência governada por V13.
- Ledger, eventos financeiros e conciliação: V25; V18/V29/V30 mantêm referências e snapshots necessários.
- Definição/instância de processo: V31; gatilhos/execuções de agenda: V32.
- Execuções de agentes e ferramentas: V10/V11 com autorização V17 e observabilidade V16.
- Decisões arquiteturais: V36; prioridade/marcos: V35; termos: V37; padrões: V38.
- Atos e obrigações formais: V39/V40 conforme natureza e autoridade; documentos técnicos não substituem atos assinados.
- Firebase, Supabase e Vercel são componentes de infraestrutura, não donos automáticos de todo o domínio. Cada conjunto precisa de fonte de verdade explícita.

## 6. Matriz de dependências — leitura de risco

1. **Identidade e autorização:** V03 → V13 → V26/V27/V28 → V17 → V14/V15. Bloqueio de schema e migrations até ADR-EOU-001 e ownership.
2. **Segurança e operação:** V16/V17 são transversais; todos os fluxos sensíveis precisam de negação por padrão, decisão server-side, revogação e evidência.
3. **Agentes e execução:** V09/V10/V11/V12 → V14/V15 → V31/V32 → V33, sempre subordinados a V17 e auditados por V16.
4. **Missões e workflows:** V05–V08 e V31–V33 precisam de contratos de responsabilidade, não apenas listas de dependências.
5. **Comercial/financeiro:** V18/V24/V29/V30 → V25 → V12/V15/V39; nenhuma transação sem estado confirmado e conciliação.
6. **Domínios territoriais:** V20 fornece proveniência e contexto; V21–V24 e V19 publicam somente dados e capacidades validados.
7. **Governança e instituição:** V17/V36/V39/V40 devem manter cadeia de autoridade, aprovação, formalização e comunicação.

## 7. Plano de correção priorizado

### Fase A — antes de congelar a arquitetura (P1)
1. Ratificar o significado e nome oficial de V04/EVA.
2. Harmonizar V06 para Centro de Operações, preservando Conhecimento Organizacional como material histórico, sem perda do original.
3. Ratificar ADR-EOU-001 ou substituí-lo por decisão explícita.
4. Aprovar a precedência tipada V01/V03/V02.
5. Formalizar fronteiras V05–V08 × V31–V33.
6. Fechar mapa de ownership/fonte de verdade e política de IDU em V13/V26/V27/V28.
7. Definir alçadas V17 e aprovadores do ciclo ADR V36.
8. Validar evidências jurídicas/institucionais de V39/V40 e claims públicos.
9. Corrigir V14/V15 para um inventário integrado de APIs, webhooks e integrações.
10. Estabelecer gates de domínio para V18/V19/V21–V25/V30.

### Fase B — antes de implementação ampla (P1/P2)
1. Aprofundar V01–V08 com contratos, modelos, fluxos, segurança, testes e critérios de aceite.
2. Criar diagramas C4/contexto, componentes, sequência e dependências, versionados junto aos contratos.
3. Criar schemas canônicos/OpenAPI e eventos versionados, somente após decisões P1.
4. Definir estratégia de retenção, backup/restore, RPO/RTO, classificação e resposta a incidentes.
5. Completar glossário e owners por termo.
6. Estabelecer CI de documentação: links, IDs, nomenclatura, status de ADR, dependências circulares e evidência de SHA.

### Fase C — gates de implementação e liberação
1. Migrations em branch e ambiente isolado; nunca aplicar diretamente por este relatório.
2. Testes positivos e negativos de autorização, RLS, IDOR, isolamento e revogação.
3. Testes ponta a ponta de integrações e reconciliação em sandbox.
4. CI aprovado no SHA exato, Preview e smoke test; revisão de segurança e privacidade.
5. Produção somente após aprovação explícita do fundador e dos responsáveis profissionais aplicáveis.

## 8. Critérios de aceite da auditoria

A auditoria cruzada só poderá ser considerada encerrada quando:
- V01–V40 tiverem dono documental/funcional e fronteiras aprovadas;
- conflitos P1 estiverem resolvidos por decisões registradas;
- ADR-EOU-001 estiver ratificado ou substituído;
- V13 possuir mapa de ownership e fonte de verdade por entidade/conjunto;
- V05–V08 e V31–V33 tiverem contratos sem sobreposição;
- V14/V15 compartilharem inventário consistente;
- V17/V36 possuírem alçadas e aprovadores definidos;
- V39/V40 apontarem evidências formais para atos e compromissos;
- dependências não apresentarem ciclos não justificados;
- CI documental e de código passar no SHA exato da revisão;
- o fundador aprovar formalmente o baseline.

## 9. Estado de execução desta revisão

- [x] READMEs-base V01–V08 consultados.
- [x] Especificações técnicas 0.3.0 V09–V40 consultadas.
- [x] ADR-EOU-001 consultado e mantido como proposta.
- [x] Catálogo EOU consultado.
- [x] Matriz inicial de ownership/fonte de verdade elaborada.
- [x] Achados classificados e plano de correção priorizado.
- [ ] Decisões P1 ratificadas pelo fundador.
- [ ] ADRs de fronteira aceitos.
- [ ] Diagramas e schemas canônicos produzidos.
- [ ] CI confirmado no HEAD desta branch.
- [ ] Revisão profissional jurídica/contábil/setorial concluída.
- [ ] Aprovação final do fundador.

**Conclusão:** a arquitetura tem uma boa base de separação de responsabilidades, mas há pendências P1 reais antes de consolidar a baseline. O documento é uma auditoria de coerência documental, não certificação de segurança, conformidade, completude ou prontidão operacional.
