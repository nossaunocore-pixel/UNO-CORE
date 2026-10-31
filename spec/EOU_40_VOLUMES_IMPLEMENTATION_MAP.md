# Mapa dos 40 volumes EOU para implementação — V7

- Data: 2026-10-31
- Base documental: branch `main`, catálogo `docs/EOU/CATALOGO.md`
- Base técnica: branch `v7-implementation`
- Finalidade: ligar cada volume ao código, estado e próximo pacote de implementação.
- Regra: referências a telas demonstrativas não significam persistência ou operação real.

## Estados usados

- **Documentado:** capítulos substantivos existem.
- **README-base:** existe finalidade/escopo, mas ainda não especificação implementável.
- **Parcial/código:** há contratos ou código relacionados, mas falta integração/teste.
- **Demonstrativo:** UI existe, sem backend/persistência comprovados.
- **Conflito:** nomenclatura ou fronteira precisa de decisão.
- **Não iniciado:** não foi localizada implementação dedicada.

## Mapa volume por volume

| Volume | Domínio do catálogo de 40 | Base/código encontrado | Estado e próxima entrega |
|---|---|---|---|
| V01 | Constituição Técnica | `docs/EOU/V01-Constituicao-Tecnica`; `spec/MASTER_SPEC.md` | Documentado; mapear cada garantia a testes de arquitetura e segurança. |
| V02 | Arquitetura Oficial | `docs/EOU/V02-Arquitetura-Oficial`; `spec/ARCHITECTURE.md`; `core/kernel` | Documentado/parcial; contratos de módulos, eventos, dados e confiança. |
| V03 | MUE | `docs/EOU/V03-MUE`; `src/modules/EntidadesView.tsx` | Documentado/demonstrativo; consolidar entidade, relações, ciclo de vida e IDU. |
| V04 | EVA | `docs/EOU/V04-EVA`; `core/capabilities`, `core/memory`, `core/brain` | Documentado/parcial; modelo de valor, aprendizagem e evidências operacionais. |
| V05 | Oficina Mestre (catálogo 40) | `docs/EOU/V05-OM`; `src/v6/pages/WorkshopV6.tsx` | Conflito com V05 legado “Ordem de Missão”; delimitar Oficina, ciclo de criação e aprovação. |
| V06 | Centro de Operações (catálogo 40) | `docs/EOU/V06-CO`; `src/modules/CentroView.tsx` | Conflito com V06 legado “Conhecimento Organizacional”; confirmar nomenclatura e continuidade da série de 8. |
| V07 | CCM | `docs/EOU/V07-CCM`; `core/agents`, `core/engine`, `core/governance` | Documentado/parcial; missões, agentes, delegação, supervisão e autorização humana. |
| V08 | OPS | `docs/EOU/V08-OPS`; `core/engine`, `core/governance` | Documentado/parcial; operações, estados, observabilidade, incidentes e reversão. |
| V09 | Catálogo Universal de Capacidades | `docs/EOU/V09-Catalogo-de-Capacidades/README.md`; `core/capabilities`, `src/modules/CapacidadesView.tsx` | README-base/parcial; schema de capacidade, custo, limites, dependências e estados. |
| V10 | Catálogo Universal de Agentes | `docs/EOU/V10-Catalogo-de-Agentes/README.md`; `core/agents`, `agentsRegistry.ts`, `AgentsCenterV638.tsx` | README-base/parcial; contrato de agente, identidade, escopo, ferramentas, memória e auditoria. |
| V11 | Catálogo Universal de Ferramentas | `docs/EOU/V11-Catalogo-de-Ferramentas/README.md`; `src/modules/FerramentasView.tsx`, `IntegrationsCenterV637.tsx` | README-base/demonstrativo; ferramenta, adaptador, permissões, segredo, custo e teste. |
| V12 | Catálogo Universal de Provedores | `docs/EOU/V12-Catalogo-de-Provedores/README.md`; `core/integrations`, `integrationsRegistry.ts` | README-base/parcial; provedor, contrato, região, SLA, preço, disponibilidade e fallback. |
| V13 | Banco de Dados Mestre | `docs/EOU/V13-Banco-de-Dados-Mestre/README.md`; `src/services`, `supabase/migrations`, Firebase | README-base/parcial; modelo canônico, IDU, ownership, migrations, RLS, retenção e backup. |
| V14 | APIs e Gateways | `docs/EOU/V14-APIs-e-Gateways/README.md`; `api/`, `server/firebaseAdmin.ts` | README-base/parcial; contratos versionados, autenticação, rate limits, erros, idempotência e gateway IA. |
| V15 | Integrações | `docs/EOU/V15-Integracoes/README.md`; `core/integrations`, `IntegrationsCenterV637.tsx` | README-base/parcial; ciclo de conexão, consentimento, escopo, saúde, desconexão e contingência. |
| V16 | Segurança e Auditoria | `docs/EOU/V16-Seguranca-e-Auditoria/README.md`; `spec/SECURITY_GOVERNANCE_V7.md`, `AuditCenterV639.tsx` | README-base/parcial; ameaça, política, evidência, trilha, resposta a incidente e testes negativos. |
| V17 | Governança | `docs/EOU/V17-Governanca/README.md`; `core/governance`, `MasterPanelV6.tsx` | README-base/parcial; RBAC/ABAC, delegação, alçadas, aprovação, revogação e auditoria. |
| V18 | Marketplace | `docs/EOU/V18-Marketplace/README.md`; `MarketplaceView.tsx`, `ServicosExternosView.tsx`, `NosShowcaseV63.tsx`, `src/domain/catalog.ts` | README-base/demonstrativo; catálogo de produtos/serviços próprios e terceiros, contratação e responsabilidade. |
| V19 | Industrial | `docs/EOU/V19-Industrial/README.md` | README-base/não iniciado; delimitar indústria, produção, manutenção, logística e integrações OT. |
| V20 | Infraestrutura Comunitária | `docs/EOU/V20-Infraestrutura-Comunitaria/README.md`; `CommunityV6.tsx`, `ParticipationV63.tsx` | README-base/demonstrativo; recursos compartilhados, território, gestão, participação e transparência. |
| V21 | Educação e Capacitação | `docs/EOU/V21-Educacao-e-Capacitacao/README.md` | README-base/não iniciado; instituições, cursos, matrículas, trilhas, certificados e serviços ativos. |
| V22 | Saúde | `docs/EOU/V22-Saude/README.md`; `src/modules/SaudeView.tsx` | README-base/demonstrativo; escopo preventivo, dados sensíveis, consentimento e limites regulatórios. |
| V23 | Habitação | `docs/EOU/V23-Habitacao/README.md`; `src/modules/HabitacionalView.tsx` | README-base/demonstrativo; moradia, imóveis, famílias, ofertas e serviços associados. |
| V24 | Empregabilidade | `docs/EOU/V24-Empregabilidade/README.md`; `src/modules/UsuariosView.tsx`, perfil | README-base/demonstrativo; ofícios, habilidades, oportunidades, profissionais, negócios e renda. |
| V25 | Financeiro | `docs/EOU/V25-Financeiro/README.md`; `docs/STRIPE_TEST_CATALOG.md` | README-base/teste; ledger, tarifas, carteira, Stripe, Connect, conciliação, tributos e controles. |
| V26 | Identidade Digital | `docs/EOU/V26-Identidade-Digital/README.md`; `api/identity/session.ts`, `server/firebaseAdmin.ts` | README-base/parcial; IDU, provedores, credenciais, recuperação, claims e ciclo de vida. |
| V27 | Usuários e Perfis | `docs/EOU/V27-Usuarios-e-Perfis/README.md`; `ProfileV63.tsx`, `UserSquareV6.tsx`, `src/domain/panels.ts` | README-base/demonstrativo; perfil pessoal, casa, preferências, consentimentos e escopos. |
| V28 | Entidades | `docs/EOU/V28-Entidades/README.md`; `src/modules/EntidadesView.tsx` | README-base/demonstrativo; definir fronteira em relação ao MUE V03 e catálogo aplicado de tipos. |
| V29 | Projetos | `docs/EOU/V29-Projetos/README.md`; `src/modules/ProjetosView.tsx` | README-base/demonstrativo; ciclo de projeto, responsável, recursos, orçamento, metas e resultado. |
| V30 | Eventos | `docs/EOU/V30-Eventos/README.md`; componentes Comunidade/Participação | README-base/não iniciado; eventos/festivais, organizador, agenda, inscrição, ingresso e publicação em Lazer. |
| V31 | Fluxos | `docs/EOU/V31-Fluxos/README.md`; `core/engine`, `src/modules/ExecucoesView.tsx` | README-base/parcial; estados, transições, contratos, compensação, idempotência e histórico. |
| V32 | Automações | `docs/EOU/V32-Automacoes/README.md`; `core/engine` | README-base/não iniciado; gatilhos, agenda, condições, permissões, aprovação e pausa segura. |
| V33 | Motor Cognitivo | `docs/EOU/V33-Motor-Cognitivo/README.md`; `core/brain`, `api/chat.ts`, `api/public/chat.ts` | README-base/parcial; contexto, memória, seleção de modelo, custos, avaliação e guardrails. |
| V34 | UNO CORE | `docs/EOU/V34-UNO-CORE/README.md`; `core/kernel`, `src/v6/V6App.tsx` | README-base/parcial; composição do kernel, módulos, contratos e bootstrapping. |
| V35 | Roadmap Oficial | `docs/EOU/V35-Roadmap-Oficial/README.md`; `spec/ROADMAP.md` | README-base/parcial; marcos, dependências, critérios de saída e evidências. |
| V36 | ADR | `docs/EOU/V36-ADR/README.md`; `spec/DECISIONS.md`, `spec/ADR` | README-base/parcial; ciclo de decisão, status, precedência, revisão e supersessão. |
| V37 | Glossário Oficial | `docs/EOU/V37-Glossario-Oficial/README.md` | README-base; criar glossário versionado e reconciliar termos/acrônimos. |
| V38 | Padrões de Engenharia | `docs/EOU/V38-Padroes-de-Engenharia/README.md`; `spec/ENGINEERING/guidelines.md`, CI | README-base/parcial; qualidade, revisão, testes, segurança, observabilidade e release. |
| V39 | Documentação Jurídica | `docs/EOU/V39-Documentacao-Juridica/README.md`; requisitos em `MASTER_SPEC.md` | README-base/não iniciado; contratos, privacidade, termos, CDC, LGPD e revisão profissional. |
| V40 | Documentação Institucional | `docs/EOU/V40-Documentacao-Institucional/README.md`; `MASTER_SPEC.md` | README-base/não iniciado; missão, identidade, governança, estrutura e atos institucionais validados. |

## Decisões de fronteira recomendadas para evitar duplicação

- **V03 x V28:** V03 deve ser o meta-modelo universal (identidade, atributos, relações e ciclo de vida); V28 deve ser o catálogo aplicado de tipos de entidade e suas especializações no ecossistema. Confirmar na revisão editorial.
- **V18 x V12/V15:** V18 define oferta, descoberta e contratação; V12 define provedores; V15 define conectores e integração técnica.
- **V25 x V18:** V25 define ledger, contas, tarifas e liquidação; V18 descreve experiência de compra/contratação.
- **V30 x V18:** V30 define eventos e festivais em Lazer; V18 define produtos e serviços contratáveis. Ingresso pode ser um item de oferta, mas o evento continua sendo entidade do V30.
- **V05/V06:** não consolidar numeração ou renomear até decisão do fundador; preservar a série legada e o catálogo expandido sem sobrescrever arquivos.

## Estrutura-base obrigatória de cada volume

Usar `spec/VOLUME_SPEC_TEMPLATE.md`. Cada volume precisa declarar finalidade, escopo, entidades, regras, estados, permissões, APIs/eventos, dados, segurança, auditoria, dependências, custos, testes, critérios de aceite, decisões e lacunas. Volumes evolutivos devem manter catálogo versionado de agentes, ferramentas, provedores, produtos e serviços.

## Ordem sugerida para implementação

1. V01–V08: reconciliar nomenclatura e transformar princípios em invariantes/testes.
2. V09–V17: capacidades, agentes, ferramentas, provedores, banco, APIs, integrações, segurança e governança — fundação do Orquestrador Mestre/Oficina.
3. V26–V28: identidade, perfis e entidades — base de ownership e acesso.
4. V18, V21, V24, V25, V30: marketplace, educação, emprego/renda, financeiro e eventos.
5. V20, V22, V23, V29, V31–V34: domínios e motor cognitivo/UNO CORE.
6. V35–V40: roadmap, ADR, glossário, padrões, jurídico e institucional como camadas de controle contínuo.

Esta ordem é de dependência técnica; não altera a numeração nem aprova os conflitos V05/V06.
