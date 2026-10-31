# Mapa dos 40 volumes EOU para implementação — V7

- Data: 2026-10-31
- Base documental: branch `main`, catálogo `docs/EOU/CATALOGO.md`
- Base técnica: branch `v7-implementation`
- Finalidade: ligar cada volume ao código, estado e próximo pacote de implementação.
- Regra: referências a telas demonstrativas não significam persistência ou operação real.

## Estados usados

- **Documentado:** capítulos substantivos existem.
- **Especificação inicial 0.2.0:** README expandido com estrutura técnica de domínio; requer revisão, capítulos especializados, contratos, diagramas, testes e aprovação.
- **Parcial/código:** há contratos ou código relacionados, mas falta integração/teste.
- **Demonstrativo:** UI existe, sem backend/persistência comprovados.
- **Histórico reconciliado:** a nomenclatura oficial atual foi confirmada pelo fundador; nomes anteriores permanecem apenas como referências históricas.
- **Não iniciado:** não foi localizada implementação dedicada.

## Estado documental atualizado em 31/10/2026

Os volumes V09–V40 tiveram seus README.md expandidos na branch `main` para especificações técnicas iniciais 0.2.0. O mapa abaixo ainda descreve a maturidade de código/integração; a nova documentação não converte telas demonstrativas em operações reais nem significa aprovação final. A decomposição em capítulos, diagramas, schemas e testes permanece como próxima etapa.

## Mapa volume por volume

| Volume | Domínio do catálogo de 40 | Base/código encontrado | Estado e próxima entrega |
|---|---|---|---|
| V01 | Constituição Técnica | `docs/EOU/V01-Constituicao-Tecnica`; `spec/MASTER_SPEC.md` | Documentado; mapear cada garantia a testes de arquitetura e segurança. |
| V02 | Arquitetura Oficial | `docs/EOU/V02-Arquitetura-Oficial`; `spec/ARCHITECTURE.md`; `core/kernel` | Documentado/parcial; contratos de módulos, eventos, dados e confiança. |
| V03 | MUE | `docs/EOU/V03-MUE`; `src/modules/EntidadesView.tsx` | Documentado/demonstrativo; consolidar entidade, relações, ciclo de vida e IDU. |
| V04 | EVA | `docs/EOU/V04-EVA`; `core/capabilities`, `core/memory`, `core/brain` | Documentado/parcial; modelo de valor, aprendizagem e evidências operacionais. |
| V05 | Oficina Mestre | `docs/EOU/V05-OM`; `src/v6/pages/WorkshopV6.tsx`, `src/v6/components/WorkshopStudioV7.tsx`, `api/workshop/*` | Nomenclatura oficial confirmada; “Ordem de Missão” é referência histórica da série documental anterior. Delimitar Oficina, ciclo de criação e aprovação. |
| V06 | Centro de Operações | `docs/EOU/V06-CO`; `src/modules/CentroView.tsx` | Nomenclatura oficial confirmada; “Conhecimento Organizacional” é referência histórica da série documental anterior. Manter o domínio operacional do Centro de Operações. |
| V07 | CCM | `docs/EOU/V07-CCM`; `core/agents`, `core/engine`, `core/governance` | Documentado/parcial; missões, agentes, delegação, supervisão e autorização humana. |
| V08 | OPS | `docs/EOU/V08-OPS`; `core/engine`, `core/governance` | Documentado/parcial; operações, estados, observabilidade, incidentes e reversão. |
| V09 | Catálogo Universal de Capacidades | `docs/EOU/V09-Catalogo-de-Capacidades/README.md`; `core/capabilities`, `src/modules/CapacidadesView.tsx` | Especificação inicial 0.2.0 (rascunho técnico); schema de capacidade, custo, limites, dependências e estados. |
| V10 | Catálogo Universal de Agentes | `docs/EOU/V10-Catalogo-de-Agentes/README.md`; `core/agents`, `agentsRegistry.ts`, `AgentsCenterV638.tsx` | Especificação inicial 0.2.0 (rascunho técnico); contrato de agente, identidade, escopo, ferramentas, memória e auditoria. |
| V11 | Catálogo Universal de Ferramentas | `docs/EOU/V11-Catalogo-de-Ferramentas/README.md`; `src/modules/FerramentasView.tsx`, `IntegrationsCenterV637.tsx` | Especificação inicial 0.2.0 (rascunho técnico); ferramenta, adaptador, permissões, segredo, custo e teste. |
| V12 | Catálogo Universal de Provedores | `docs/EOU/V12-Catalogo-de-Provedores/README.md`; `core/integrations`, `integrationsRegistry.ts` | Especificação inicial 0.2.0 (rascunho técnico); provedor, contrato, região, SLA, preço, disponibilidade e fallback. |
| V13 | Banco de Dados Mestre | `docs/EOU/V13-Banco-de-Dados-Mestre/README.md`; `src/services`, `supabase/migrations`, Firebase | Especificação inicial 0.2.0 (rascunho técnico); modelo canônico, IDU, ownership, migrations, RLS, retenção e backup. |
| V14 | APIs e Gateways | `docs/EOU/V14-APIs-e-Gateways/README.md`; `api/`, `server/firebaseAdmin.ts` | Especificação inicial 0.2.0 (rascunho técnico); contratos versionados, autenticação, rate limits, erros, idempotência e gateway IA. |
| V15 | Integrações | `docs/EOU/V15-Integracoes/README.md`; `core/integrations`, `IntegrationsCenterV637.tsx` | Especificação inicial 0.2.0 (rascunho técnico); ciclo de conexão, consentimento, escopo, saúde, desconexão e contingência. |
| V16 | Segurança e Auditoria | `docs/EOU/V16-Seguranca-e-Auditoria/README.md`; `spec/SECURITY_GOVERNANCE_V7.md`, `AuditCenterV639.tsx` | Especificação inicial 0.2.0 (rascunho técnico); ameaça, política, evidência, trilha, resposta a incidente e testes negativos. |
| V17 | Governança | `docs/EOU/V17-Governanca/README.md`; `core/governance`, `MasterPanelV6.tsx`, `server/panelAuthorization.ts`, `api/admin/panel-access.ts`, `api/identity/panel-access.ts` | Especificação inicial 0.2.0 (rascunho técnico); RBAC/ABAC, delegação, alçadas, aprovação, revogação e auditoria. |
| V18 | Marketplace | `docs/EOU/V18-Marketplace/README.md`; `MarketplaceView.tsx`, `ServicosExternosView.tsx`, `NosShowcaseV63.tsx`, `src/domain/catalog.ts`, `src/services/publicContent.ts` | Especificação inicial 0.2.0 (rascunho técnico); catálogo de produtos/serviços próprios e terceiros, contratação e responsabilidade. |
| V19 | Industrial | `docs/EOU/V19-Industrial/README.md` | Especificação inicial 0.2.0 (rascunho técnico); delimitar indústria, produção, manutenção, logística e integrações OT. |
| V20 | Infraestrutura Comunitária | `docs/EOU/V20-Infraestrutura-Comunitaria/README.md`; `CommunityV6.tsx`, `ParticipationV63.tsx`, `src/domain/publicContent.ts`, `supabase/migrations/20261031173000_public_content_read_models.sql` | Especificação inicial 0.2.0 (rascunho técnico); recursos compartilhados, território, gestão, participação e transparência. |
| V21 | Educação e Capacitação | `docs/EOU/V21-Educacao-e-Capacitacao/README.md` | Especificação inicial 0.2.0 (rascunho técnico); instituições, cursos, matrículas, trilhas, certificados e serviços ativos. |
| V22 | Saúde | `docs/EOU/V22-Saude/README.md`; `src/modules/SaudeView.tsx` | Especificação inicial 0.2.0 (rascunho técnico); escopo preventivo, dados sensíveis, consentimento e limites regulatórios. |
| V23 | Habitação | `docs/EOU/V23-Habitacao/README.md`; `src/modules/HabitacionalView.tsx`, `src/v6/pages/HouseV7.tsx` | Especificação inicial 0.2.0 (rascunho técnico); moradia, imóveis, famílias, ofertas e serviços associados. |
| V24 | Empregabilidade | `docs/EOU/V24-Empregabilidade/README.md`; `src/modules/UsuariosView.tsx`, `src/v6/pages/EmploymentIncomeV7.tsx`, perfil | Especificação inicial 0.2.0 (rascunho técnico); ofícios, habilidades, oportunidades, profissionais, negócios e renda. |
| V25 | Financeiro | `docs/EOU/V25-Financeiro/README.md`; `docs/STRIPE_TEST_CATALOG.md`, `src/domain/panels.ts`, `src/v6/pages/WalletV7.tsx` | Especificação inicial 0.2.0 (rascunho técnico); ledger, tarifas, carteira, Stripe, Connect, conciliação, tributos e controles. |
| V26 | Identidade Digital | `docs/EOU/V26-Identidade-Digital/README.md`; `api/identity/session.ts`, `server/firebaseAdmin.ts` | Especificação inicial 0.2.0 (rascunho técnico); IDU, provedores, credenciais, recuperação, claims e ciclo de vida. |
| V27 | Usuários e Perfis | `docs/EOU/V27-Usuarios-e-Perfis/README.md`; `ProfileV63.tsx`, `UserSquareV6.tsx`, `src/domain/panels.ts` | Especificação inicial 0.2.0 (rascunho técnico); perfil pessoal, casa, preferências, consentimentos e escopos. |
| V28 | Entidades | `docs/EOU/V28-Entidades/README.md`; `src/modules/EntidadesView.tsx` | Especificação inicial 0.2.0 (rascunho técnico); definir fronteira em relação ao MUE V03 e catálogo aplicado de tipos. |
| V29 | Projetos | `docs/EOU/V29-Projetos/README.md`; `src/modules/ProjetosView.tsx` | Especificação inicial 0.2.0 (rascunho técnico); ciclo de projeto, responsável, recursos, orçamento, metas e resultado. |
| V30 | Eventos | `docs/EOU/V30-Eventos/README.md`; `src/v6/pages/LeisureV7.tsx`, `src/domain/publicContent.ts` | Especificação inicial 0.2.0 (rascunho técnico); eventos/festivais, organizador, agenda, inscrição, ingresso e publicação em Lazer. |
| V31 | Fluxos | `docs/EOU/V31-Fluxos/README.md`; `core/engine`, `src/modules/ExecucoesView.tsx` | Especificação inicial 0.2.0 (rascunho técnico); estados, transições, contratos, compensação, idempotência e histórico. |
| V32 | Automações | `docs/EOU/V32-Automacoes/README.md`; `core/engine` | Especificação inicial 0.2.0 (rascunho técnico); gatilhos, agenda, condições, permissões, aprovação e pausa segura. |
| V33 | Motor Cognitivo | `docs/EOU/V33-Motor-Cognitivo/README.md`; `core/brain`, `api/chat.ts`, `api/public/chat.ts` | Especificação inicial 0.2.0 (rascunho técnico); contexto, memória, seleção de modelo, custos, avaliação e guardrails. |
| V34 | UNO CORE | `docs/EOU/V34-UNO-CORE/README.md`; `core/kernel`, `src/v6/V6App.tsx` | Especificação inicial 0.2.0 (rascunho técnico); composição do kernel, módulos, contratos e bootstrapping. |
| V35 | Roadmap Oficial | `docs/EOU/V35-Roadmap-Oficial/README.md`; `spec/ROADMAP.md` | Especificação inicial 0.2.0 (rascunho técnico); marcos, dependências, critérios de saída e evidências. |
| V36 | ADR | `docs/EOU/V36-ADR/README.md`; `spec/DECISIONS.md`, `spec/ADR/ADR-0013-public-visitor-supabase-navigation.md` | Especificação inicial 0.2.0 (rascunho técnico); ciclo de decisão, status, precedência, revisão e supersessão. |
| V37 | Glossário Oficial | `docs/EOU/V37-Glossario-Oficial/README.md` | Especificação inicial 0.2.0 (rascunho técnico); criar glossário versionado e reconciliar termos/acrônimos. |
| V38 | Padrões de Engenharia | `docs/EOU/V38-Padroes-de-Engenharia/README.md`; `spec/ENGINEERING/guidelines.md`, `.github/workflows/ci.yml`, `tests/domain-contracts.test.mjs` | Especificação inicial 0.2.0 (rascunho técnico); qualidade, revisão, testes, segurança, observabilidade e release. |
| V39 | Documentação Jurídica | `docs/EOU/V39-Documentacao-Juridica/README.md`; requisitos em `MASTER_SPEC.md` | Especificação inicial 0.2.0 (rascunho técnico); contratos, privacidade, termos, CDC, LGPD e revisão profissional. |
| V40 | Documentação Institucional | `docs/EOU/V40-Documentacao-Institucional/README.md`; `MASTER_SPEC.md` | Especificação inicial 0.2.0 (rascunho técnico); missão, identidade, governança, estrutura e atos institucionais validados. |

## Decisões de fronteira recomendadas para evitar duplicação

- **V03 x V28:** V03 deve ser o meta-modelo universal (identidade, atributos, relações e ciclo de vida); V28 deve ser o catálogo aplicado de tipos de entidade e suas especializações no ecossistema. Confirmar na revisão editorial.
- **V18 x V12/V15:** V18 define oferta, descoberta e contratação; V12 define provedores; V15 define conectores e integração técnica.
- **V25 x V18:** V25 define ledger, contas, tarifas e liquidação; V18 descreve experiência de compra/contratação.
- **V30 x V18:** V30 define eventos e festivais em Lazer; V18 define produtos e serviços contratáveis. Ingresso pode ser um item de oferta, mas o evento continua sendo entidade do V30.
- **V05/V06 — nomenclatura harmonizada:** por decisão do fundador em 31/10/2026, a coleção EOU de 40 volumes mantém V05 — Oficina Mestre e V06 — Centro de Operações. “Ordem de Missão” e “Conhecimento Organizacional” permanecem apenas como nomes históricos encontrados na documentação legada de oito volumes. Não renomear código, IDs estáveis, diretórios ou estrutura já preparada para reproduzir a nomenclatura antiga. Harmonizar títulos, índices, mapas e referências documentais com o catálogo oficial de 40 volumes. Preservar os documentos históricos sem apagá-los nem reescrever seu conteúdo substantivo.

## Estrutura-base obrigatória de cada volume

Usar `spec/VOLUME_SPEC_TEMPLATE.md`. Cada volume precisa declarar finalidade, escopo, entidades, regras, estados, permissões, APIs/eventos, dados, segurança, auditoria, dependências, custos, testes, critérios de aceite, decisões e lacunas. Volumes evolutivos devem manter catálogo versionado de agentes, ferramentas, provedores, produtos e serviços.

## Ordem sugerida para implementação

1. V01–V08: reconciliar nomenclatura e transformar princípios em invariantes/testes.
2. V09–V17: capacidades, agentes, ferramentas, provedores, banco, APIs, integrações, segurança e governança — fundação do Orquestrador Mestre/Oficina.
3. V26–V28: identidade, perfis e entidades — base de ownership e acesso.
4. V18, V21, V24, V25, V30: marketplace, educação, emprego/renda, financeiro e eventos.
5. V20, V22, V23, V29, V31–V34: domínios e motor cognitivo/UNO CORE.
6. V35–V40: roadmap, ADR, glossário, padrões, jurídico e institucional como camadas de controle contínuo.

Esta ordem é de dependência técnica; não altera a numeração. A nomenclatura V05/V06 está harmonizada conforme decisão do fundador.


## Registro de código transversal

- `src/domain/volumes.ts` contém o registro máquina-legível dos 40 volumes, seus estados documentais e as pendências V05/V06.
- `src/domain/panels.ts` define os painéis com acesso padrão negado; Stripe é subárea do Painel Contábil e Financeiro.
- `src/domain/experiences.ts` define as áreas Perfil, Casa, Emprego e Renda, Instituições, Comunidade, Participação, Lazer, Vitrine, Serviços e Serviços Ativos.
- `WorkshopStudioV7` e as APIs de Oficina criam, editam, versionam, clonam e submetem rascunhos; não aprovam nem ativam.
- `src/services/publicContent.ts` é a camada de leitura pública Supabase; as tabelas correspondentes só estarão disponíveis após aplicação da migration de read models.
