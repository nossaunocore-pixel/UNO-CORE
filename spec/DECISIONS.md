# DECISIONS.md — Registro de Decisões de Arquitetura UNO CORE

**Última revisão:** 31 de outubro de 2026

| ADR ID | Data | Título | Status | Resumo |
|---|---|---|---|---|
| ADR-0001 | 2026-07-27 | Estrutura modular `/core` e `/spec` | Aprovado | Separação entre Kernel, especificações, governança e interface. |
| ADR-0002 | 2026-07-27 | Persistência desacoplada | Revisado | A arquitetura anterior tratava Supabase como memória principal. A direção atual separa Firebase (identidade/memória interna) e Supabase (dados de uso/produto), pendente validação técnica. |
| ADR-0003 | 2026-07-27 | Interface responsiva do Centro de Operações | Aprovado | Interface modular; preservar V6 e evoluir sem regressões. |
| ADR-0004 | 2026-07-27 | Orquestração por capacidades | Aprovado | Capacidades declarativas, auditáveis, versionáveis e governadas. |
| ADR-0005 | 2026-07-27 | Gateway de IA server-side | Aprovado como requisito | Segredos de IA somente server-side. A existência/implantação do gateway deve ser verificada antes de declarar integração pronta. |
| ADR-0006 | 2026-07-27 | Chaves publishable do Supabase | Aprovado | Frontend utiliza somente chave publishable/anon legada; nunca service-role. |
| ADR-0007 | 2026-10-31 | Google obrigatório para acesso interno | Aprovado | Apenas landing e boas-vindas são anônimas. Todas as rotas internas exigem Google OAuth, IDU provisionado e autorização server-side. E-mail/senha não é alternativa no MVP. |
| ADR-0008 | 2026-10-31 | Visitante autenticado sem adesão paga | Aprovado | Autenticação não é assinatura. Visitantes podem usar funções internas gratuitas elegíveis, quando implementadas e seguras. |
| ADR-0009 | 2026-10-31 | Classificação de capacidades por custo e dependência | Aprovado | Classes gratuita interna, consumo, externa e restrita; pode haver classificação combinada. Negar por padrão quando faltar política. |
| ADR-0010 | 2026-10-31 | Firebase + Supabase + IDU | Aprovado como direção arquitetural | Firebase para autenticação/identidade/memória interna; Supabase para dados de uso e produto; IDU como identificador UNO independente. Integração Third-Party Auth, RLS e provisionamento ainda precisam de prova. |
| ADR-0011 | 2026-10-31 | Simulação e transparência pré-ativação | Aprovado | Operações financeiras/comerciais dependentes de formalização permanecem em teste/simulação; não cobrar nem repassar valores reais sem liberação. |
| ADR-0012 | 2026-10-31 | Segurança e evidência antes de status “pronto” | Aprovado | UI/documentação não comprovam execução. Status “disponível e testado” exige build, testes e evidências. |

## ADR-0007 — Google obrigatório para acesso interno

**Contexto:** a experiência pública deve permitir conhecer a proposta sem exigir conta, mas a plataforma precisa associar conversas e atividades a uma identidade e proteger os ambientes internos.

**Decisão:** landing page e boas-vindas são as únicas experiências anônimas. O CTA “Conheça o UNO” inicia autenticação Google. Todas as rotas internas exigem sessão válida e IDU provisionado. O frontend não oferece login por e-mail/senha como alternativa. Autenticação não significa adesão paga nem acesso a recursos restritos.

**Consequências:** revisar Firebase Auth providers, fluxos OAuth, endpoint de identidade, rotas e testes E2E. O backend e RLS devem aplicar as mesmas regras.

## ADR-0008 — Visitante autenticado

**Decisão:** visitantes autenticados podem usar recursos internos gratuitos que não gerem consumo variável externo, não acionem serviços externos e não exijam contrato, qualificação ou autorização especial. A liberação depende da implementação e dos controles de segurança.

## ADR-0009 — Classificação de capacidades

**Decisão:** cada capacidade declara uma ou mais classes: gratuita interna, consumo, externa e restrita. Custos, limites, pré-requisitos, consentimento e aprovação humana são metadados obrigatórios. “Sem custo adicional ao usuário” não significa custo zero para a organização.

## ADR-0010 — Dados e identidade

**Decisão:** Firebase, Supabase e IDU têm responsabilidades distintas. O IDU é provisionado server-side. A integração do JWT Firebase com Supabase depende de configuração Third-Party Auth e RLS verificadas. Não migrar dados nem alterar schema sem inspeção e testes.

## ADR-0011 — Modo Simulação

**Decisão:** produtos e fluxos financeiros podem ser preparados no ambiente de teste, sem cobranças reais. A interface deve distinguir simulação de operação real e informar condições e estado de regularização.

## ADR-0012 — Evidência

**Decisão:** nenhuma capacidade recebe status “disponível e testado” somente por existir código, tela ou documentação. É necessária evidência reproduzível de build, testes e execução no ambiente declarado.
