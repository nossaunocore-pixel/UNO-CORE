# Catálogo da Engenharia Oficial da UNO (EOU)

> A Engenharia Oficial da UNO (EOU) constitui a coleção de referência técnica da Plataforma UNO.

---

# Apresentação

A EOU reúne os documentos responsáveis por definir a arquitetura, os modelos, os padrões, os processos e a evolução da Plataforma UNO.

Cada volume representa um domínio específico da engenharia e pode evoluir independentemente, preservando compatibilidade com os demais documentos da coleção.

---

# Estrutura da Coleção

## Parte I — Fundamentos

| Volume | Documento |
|---------|-----------|
| EOU-V01 | Constituição Técnica da UNO |
| EOU-V02 | Arquitetura Oficial da UNO |
| EOU-V03 | Modelo Universal de Entidades (MUE) |
| EOU-V04 | EVA — Enciclopédia Visual Adaptativa |
| EOU-V05 | Oficina Mestre (OM) |
| EOU-V06 | Centro de Operações (CO) |
| EOU-V07 | Central de Coordenação de Missões (CCM) |
| EOU-V08 | Sistema Universal de Missões (OPS) |

---

## Parte II — Catálogos Universais

| Volume | Documento |
|---------|-----------|
| EOU-V09 | [Catálogo Universal de Capacidades](V09-Catalogo-de-Capacidades/README.md) |
| EOU-V10 | [Catálogo Universal de Agentes](V10-Catalogo-de-Agentes/README.md) |
| EOU-V11 | [Catálogo Universal de Ferramentas](V11-Catalogo-de-Ferramentas/README.md) |
| EOU-V12 | [Catálogo Universal de Provedores](V12-Catalogo-de-Provedores/README.md) |

---

## Parte III — Plataforma

| Volume | Documento |
|---------|-----------|
| EOU-V13 | [Banco de Dados Mestre](V13-Banco-de-Dados-Mestre/README.md) |
| EOU-V14 | [APIs e Gateways](V14-APIs-e-Gateways/README.md) |
| EOU-V15 | [Integrações](V15-Integracoes/README.md) |
| EOU-V16 | [Segurança e Auditoria](V16-Seguranca-e-Auditoria/README.md) |
| EOU-V17 | [Governança](V17-Governanca/README.md) |

---

## Parte IV — Domínios

| Volume | Documento |
|---------|-----------|
| EOU-V18 | [Marketplace](V18-Marketplace/README.md) |
| EOU-V19 | [Industrial](V19-Industrial/README.md) |
| EOU-V20 | [Infraestrutura Comunitária](V20-Infraestrutura-Comunitaria/README.md) |
| EOU-V21 | [Educação e Capacitação](V21-Educacao-e-Capacitacao/README.md) |
| EOU-V22 | [Saúde](V22-Saude/README.md) |
| EOU-V23 | [Habitação](V23-Habitacao/README.md) |
| EOU-V24 | [Empregabilidade](V24-Empregabilidade/README.md) |
| EOU-V25 | [Financeiro](V25-Financeiro/README.md) |

---

## Parte V — Identidade e Operação

| Volume | Documento |
|---------|-----------|
| EOU-V26 | [Identidade Digital](V26-Identidade-Digital/README.md) |
| EOU-V27 | [Usuários e Perfis](V27-Usuarios-e-Perfis/README.md) |
| EOU-V28 | [Entidades](V28-Entidades/README.md) |
| EOU-V29 | [Projetos](V29-Projetos/README.md) |
| EOU-V30 | [Eventos](V30-Eventos/README.md) |
| EOU-V31 | [Fluxos](V31-Fluxos/README.md) |
| EOU-V32 | [Automações](V32-Automacoes/README.md) |

---

## Parte VI — Inteligência

| Volume | Documento |
|---------|-----------|
| EOU-V33 | [Motor Cognitivo](V33-Motor-Cognitivo/README.md) |
| EOU-V34 | [UNO CORE](V34-UNO-CORE/README.md) |

---

## Parte VII — Engenharia

| Volume | Documento |
|---------|-----------|
| EOU-V35 | [Roadmap Oficial](V35-Roadmap-Oficial/README.md) |
| EOU-V36 | [Registros de Decisões Arquiteturais (ADR)](V36-ADR/README.md) |
| EOU-V37 | [Glossário Oficial](V37-Glossario-Oficial/README.md) |
| EOU-V38 | [Padrões de Engenharia](V38-Padroes-de-Engenharia/README.md) |

---

## Parte VIII — Institucional

| Volume | Documento |
|---------|-----------|
| EOU-V39 | [Documentação Jurídica](V39-Documentacao-Juridica/README.md) |
| EOU-V40 | [Documentação Institucional](V40-Documentacao-Institucional/README.md) |

---

# Estado documental da coleção

> Em 31/10/2026, os volumes V09–V40 receberam especificações iniciais 0.2.0. Os volumes V09–V40 agora possuem artefatos complementares de aprofundamento técnico 0.3.0, em branch de revisão, com contratos de domínio, modelos lógicos, fluxos, controles, testes e decisões abertas. A nova camada não substitui os README iniciais nem representa aprovação final ou implementação integral.

# Organização da Coleção

Cada volume da Engenharia Oficial possui estrutura própria, composta por:

- README.md com especificação inicial estruturada
- Capítulos especializados por domínio (a desenvolver)
- Diagramas e modelos de dados
- Anexos, contratos e referências
- Histórico de evolução e decisões

---

# Princípio da Engenharia

A Engenharia Oficial precede toda implementação.

Nenhuma decisão estrutural deverá existir sem documentação correspondente na EOU.

---

# Evolução

A coleção EOU possui caráter evolutivo.

Novas versões poderão ampliar os volumes existentes preservando sua compatibilidade histórica e arquitetural.
\n\n## Aprofundamento técnico V09–V17 (31/10/2026)\n\nCada volume V09–V40 possui um arquivo ESPECIFICACAO-TECNICA.md complementar, revisão documental 0.3.0. Os documentos estão na branch `eou-v09-v17-deepening-2026-10-31` para revisão; a branch main permanece inalterada.\n

### Fronteira entre V26, V27 e V28

V26 trata identidade e autenticação; V27 trata a experiência/conta do usuário, perfil, preferências e participação; V28 trata entidades de domínio, tipos, titularidade, representação e relações. O IDU identifica a pessoa no ecossistema, mas não substitui UID do provedor, perfil, entidade ou autorização. Esta separação é proposta técnica a validar por ADR.

### Fronteira entre V29–V32

V29 governa o ciclo de projetos e prestação de contas; V30 governa eventos, edições, inscrições e acesso; V31 define processos e máquinas de estado; V32 define gatilhos e agenda para iniciar fluxos. V31 não é scheduler, e V32 não é autorização nem substitui os fluxos de domínio.

### Fronteira entre V33 e V34

V33 define raciocínio, roteamento cognitivo, contexto, avaliação e uso controlado de ferramentas. V34 integra a arquitetura completa da UNO CORE, suas camadas, governança, rollout e maturidade. V33 é subsistema; V34 é visão integradora e não substitui os contratos dos demais volumes.

### Fronteira entre V35–V38

V35 organiza prioridades e marcos; V36 registra decisões arquiteturais e seu estado; V37 governa o vocabulário; V38 estabelece padrões verificáveis de engenharia. Roadmap não substitui decisão, glossário não altera contratos por si só e padrão só é considerado cumprido com evidência.

### Fronteira entre V39 e V40

V39 organiza obrigações, documentos e avaliações jurídicas sob revisão profissional. V40 organiza identidade, atos, governança, história, programas e comunicação institucional. V40 não substitui atos jurídicos; V39 não define sozinho a missão ou a autoridade institucional.

### Fronteira entre V18–V25

V18 governa descoberta e contratação de ofertas; V19 trata coordenação informacional industrial, sem controle OT; V20 organiza recursos e necessidades comunitárias; V21 conecta aprendizagem; V22 limita-se a informação/encaminhamento sem atos clínicos; V23 trata informação habitacional sem presumir titularidade ou corretagem; V24 conecta trabalho e renda sem presumir vínculo; V25 governa ledger e pagamentos sob revisão jurídica/contábil. Esses domínios reutilizam identidade, entidades, fluxos e governança transversais.
