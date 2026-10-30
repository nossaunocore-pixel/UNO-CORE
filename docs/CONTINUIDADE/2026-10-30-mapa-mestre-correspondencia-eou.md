# Mapa Mestre de Correspondência da Engenharia Oficial (EOU)

**Data:** 30/10/2026  
**Repositório:** `nossaunocore-pixel/UNO-CORE`  
**Branch:** `main`  
**Natureza:** documento de reconciliação e rastreabilidade; não altera nem substitui documentos canônicos.

## 1. Objetivo e regra de leitura

Este mapa relaciona a estrutura atual da EOU, as séries fundacionais mencionadas no acervo histórico, as oito imagens recuperadas e os documentos existentes nos volumes V04–V08. Seu propósito é permitir que a engenharia seja lida como um sistema coerente sem apagar divergências de nomenclatura, proveniência ou versão.

Este documento **não declara equivalência automática** entre documentos que compartilham siglas ou temas. Toda correspondência recebe um grau explícito:

- **Direta:** número/título ou conteúdo distintivo coincide de forma verificável.
- **Temática forte:** conteúdo e função convergem, mas não há prova de identidade textual ou de versão.
- **Parcial:** há elementos comuns, mas faltam fontes para concluir a relação.
- **Não comprovada:** hipótese ainda sem evidência suficiente.

## 2. Fontes e proveniência

### Fontes documentais consultadas

1. [Índice geral da EOU](../EOU/README.md) — apresenta a coleção atual de 40 volumes, o fluxo de evolução e a relação com o MMK.
2. [Catálogo da EOU](../EOU/CATALOGO.md) — índice complementar da coleção.
3. [EOU V04 — EVA](../EOU/V04-EVA/README.md).
4. [EOU V05 — OM](../EOU/V05-OM/README.md).
5. [EOU V06 — CO](../EOU/V06-CO/README.md).
6. [EOU V07 — CCM](../EOU/V07-CCM/README.md).
7. [EOU V08 — OPS](../EOU/V08-OPS/README.md).
8. [Acervo histórico das oito imagens](2026-10-30-acervo-historico-oito-imagens-v6.md).
9. [Reconciliação preliminar V06-CO e imagens](2026-10-30-reconciliacao-preliminar-v06-co-imagens.md).
10. [Comparação ampliada EOU V04–V08 e imagens](2026-10-30-comparacao-ampliada-eou-v04-v08-imagens.md).
11. [ADR-0002 — Identificação das séries documentais](../ADR/0002-identificacao-das-series-documentais.md).

### Limite de proveniência histórica

O fundador informou que a V6 original integral se perdeu. As oito imagens são evidência histórica parcial recuperada, não a recuperação integral da V6. As correspondências abaixo não devem ser apresentadas como prova de que os arquivos atuais são cópias da versão perdida.

## 3. Duas estruturas que precisam permanecer distinguíveis

### 3.1 Coleção EOU atualmente documentada

O índice geral atual organiza a EOU em **40 volumes de domínio**, com a seguinte sequência fundacional/estrutural declarada no próprio índice:

| Volume | Identificação publicada no índice geral atual |
|---|---|
| V01 | Constituição Técnica da UNO |
| V02 | Arquitetura Oficial da UNO |
| V03 | Modelo Universal de Entidades (MUE) |
| V04 | EVA — Enciclopédia Visual Adaptativa |
| V05 | OM — Oficina Mestre |
| V06 | CO — Centro de Operações |
| V07 | CCM — Central de Coordenação de Missões |
| V08 | OPS — Sistema Universal de Missões |
| V09–V12 | Catálogos universais: capacidades, agentes, ferramentas e provedores |
| V13–V17 | Banco de Dados Mestre, APIs e Gateways, Integrações, Segurança e Auditoria, Governança |
| V18–V25 | Marketplace, Industrial, Infraestrutura Comunitária, Educação e Capacitação, Saúde, Habitação, Empregabilidade e Financeiro |
| V26–V32 | Identidade Digital, Usuários e Perfis, Entidades, Projetos, Eventos, Fluxos e Automações |
| V33–V34 | Motor Cognitivo e UNO CORE |
| V35–V38 | Roadmap Oficial, ADR, Glossário Oficial e Padrões de Engenharia |
| V39–V40 | Documentação Jurídica e Documentação Institucional |

A tabela resume o índice geral; não afirma que todos os volumes estejam concluídos, aprovados ou implementados.

### 3.2 Série fundacional histórica registrada nas imagens

As imagens recuperadas usam identificações e formulações que não coincidem integralmente com os nomes publicados no índice atual. Entre elas estão V04 — EVA descrita como “Engenharia da Vida e da Inteligência”, V07 — CCM, V06 — Conhecimento Organizacional e a Carta Fundadora da Nós S.A.

**Regra provisória:** tratar “série fundacional histórica” e “volumes numerados da coleção EOU atual” como eixos de catalogação distintos até que o fundador valide a relação. Não renumerar nem renomear arquivos para forçar equivalência.

## 4. Mapa de componentes e responsabilidades

A sequência abaixo é uma **síntese funcional proposta a partir dos documentos**, não uma declaração de que exista um único fluxo de software já implementado.

| Componente | Função documental recuperável | Relações principais | Estado documental | Estado de implementação |
|---|---|---|---|---|
| MUE | Modelo/representação universal das entidades e relações da realidade | Base semântica para EVA, OM, CO, CCM e OPS | Volume V03 identificado no índice; nomenclatura histórica exige glossário | Não avaliado neste mapa |
| EVA | Aprendizagem, conhecimento, memória, contexto, compreensão e evolução da inteligência | Usa a realidade representada pelo MUE; apoia pessoas, agentes, organizações e comunidades | V04 documentado; expansão do acrônimo divergente | Não avaliado neste mapa |
| OM | Coordenação/orquestração de pessoas, agentes, capacidades, serviços, processos e recursos; há também definição de Oficina Mestre como ambiente de engenharia | Articula governança e execução entre componentes | Ambiguidade material entre Orquestrador Mestre e Oficina Mestre | Não avaliado neste mapa |
| CO | Conhecimento e arquitetura organizacional/institucional; catálogo organizacional; centro de operações aparecem em fontes diferentes | Propósito, governança, memória, curadoria, stewardship e continuidade | V06 tem divergência de expansão/escopo | Não avaliado neste mapa |
| CCM | Coordenação de missões, contexto, prioridade, decisão, recursos e escalonamento | Converte necessidades/eventos em missões coordenadas e decisões rastreáveis | V07 documentado; quatro imagens têm correspondência direta com capítulos atuais | Não avaliado neste mapa |
| OPS | Sustentação e capacidade operacional: observar, operar, recuperar, aprender e evoluir | Executa/sustenta capacidades acionadas no ciclo de missão coordenado pela CCM | V08 documentado; imagem 6 tem relação complementar temática | Não avaliado neste mapa |
| Nós S.A. | Instituição curadora que preserva, fortalece, desenvolve e transmite a EOU e a Plataforma UNO | Stewardship, curadoria, continuidade e proteção do legado | Carta Fundadora presente no V06-CO; correspondência forte com imagem 7 | Não avaliado neste mapa |

### 4.1 Encadeamento funcional proposto

1. **MUE — realidade representada:** identifica entidades, atributos e relações.
2. **EVA — compreensão e aprendizagem:** transforma informação em conhecimento, capacidade e evolução.
3. **CO — continuidade organizacional:** organiza propósito, estrutura, governança, memória, curadoria e responsabilidades.
4. **OM — orquestração governada:** coordena capacidades, pessoas, agentes, serviços, processos e recursos, respeitando autoridade e escopo.
5. **CCM — coordenação de missões:** contextualiza necessidades, prioriza, decide, distribui e acompanha missões.
6. **OPS — sustentação operacional:** mantém capacidades observáveis, seguras, recuperáveis e sustentáveis; incorpora aprendizagem operacional.
7. **Nós S.A. — curadoria institucional:** preserva a integridade e a continuidade da Engenharia Oficial e da Plataforma UNO.

A ordem acima é explicativa, não uma sequência rígida de execução. Governança, segurança, autorização humana, rastreabilidade e responsabilidade atravessam todos os componentes.

## 5. Reconciliação das oito imagens históricas

| Imagem | Identificação/conteúdo recuperado | Correspondência atual | Grau | Observação |
|---|---|---|---|---|
| 1 | V04 — EVA; “Engenharia da Vida e da Inteligência”; MUE, OM, UNO e sete núcleos cognitivos | EOU V04 — EVA; EOU V03 — MUE; EOU V05 — OM | Temática forte | O README atual expande EVA como “Ecossistema de Valor e Aprendizagem”; a expansão histórica diverge. Não escolher uma versão por inferência. |
| 2 | Catálogo de Capacidades — Plataforma UNO | EOU V09 — Catálogo Universal de Capacidades | Temática forte | Confirmar se a imagem é uma versão anterior, uma apresentação ou um documento independente do V09. |
| 3 | Documento 014 — Priorização e Escalonamento de Missões | EOU V07-CCM, capítulo 014 | Direta | Número e título correspondem; confirmar versão textual com o acervo completo. |
| 4 | Documento 010 — Tomada de Decisão Consciente | EOU V07-CCM, capítulo 010 | Direta | Número e título correspondem; a imagem é evidência histórica, não prova de identidade de versão. |
| 5 | V07 — CCM 020 — Modelo Operacional Integrado do CCM | EOU V07-CCM, capítulo 020 | Direta | Número e título correspondem; texto atual aprofunda o ciclo operacional. |
| 6 | Documento 017 — Missões Críticas e Operações de Emergência | EOU V07-CCM, capítulo 017; relação complementar com EOU V08-OPS, capítulo 028 | Direta + complementar | O capítulo 017 corresponde diretamente; OPS complementa a sustentação de operações críticas e recuperação. |
| 7 | Nós S.A. — Carta Fundadora | EOU V06-CO, capítulo 051 — Carta Fundadora da Nós S.A. | Temática forte | Estrutura e missão coincidem; não declarar identidade textual sem cotejo integral de versões. |
| 8 | EOU Volume 06 — Conhecimento Organizacional, arquitetura cognitiva e institucional; declaração da EOU | EOU V06-CO, especialmente README e capítulos 048–052 | Temática forte | O volume atual contém a sequência Stewardship, Curadoria, Instituição Curadora, Carta Fundadora e Declaração da EOU. Não prova recuperação da V6 perdida. |

### 5.1 Capítulos CCM com correspondência direta

- `docs/EOU/V07-CCM/010-tomada-de-decisao-consciente.md`
- `docs/EOU/V07-CCM/014-priorizacao-e-escalonamento-de-missoes.md`
- capítulo 017 — Missões Críticas e Operações de Emergência
- `docs/EOU/V07-CCM/020-modelo-operacional-integrado-do-ccm.md`

Os nomes exatos de arquivo devem ser preservados como publicados. A comparação ampliada já registra o cotejo de conteúdo e as ressalvas de proveniência.

## 6. Divergências de nomenclatura que exigem validação do fundador

### 6.1 EVA

- Índice geral EOU: “Enciclopédia Visual Adaptativa”.
- README do volume V04: “Ecossistema de Valor e Aprendizagem”.
- Imagem histórica 1: “Engenharia da Vida e da Inteligência”.

As três formulações não são equivalentes por definição. Podem refletir versões, camadas ou usos diferentes. **Decisão pendente:** estabelecer nome institucional, expansão da sigla e eventual relação entre os conceitos.

### 6.2 OM

- Índice geral EOU e README V05: “Oficina Mestre”, ambiente de engenharia e desenvolvimento.
- Capítulo 001 do V05, conforme auditoria documental anterior: “Orquestrador Mestre”, núcleo que coordena pessoas, agentes, capacidades, serviços, dispositivos, ambientes, processos e recursos.
- Imagem histórica 1: OM descrita funcionalmente como camada de orquestração.

**Hipótese a validar:** Oficina Mestre e Orquestrador Mestre podem ser conceitos distintos que compartilham a sigla, ou pode ter ocorrido uma mudança de nomenclatura. Não fazer substituição global nem fundir responsabilidades antes da decisão.

### 6.3 CO

- Índice geral EOU: “Centro de Operações”.
- README V06: “Conhecimento Organizacional — Arquitetura Cognitiva e Institucional”.
- Capítulo 001 do V06, conforme auditoria documental anterior: “Catálogo Organizacional”.
- Imagem 8: “Conhecimento Organizacional”.

**Decisão pendente:** identificar se são conceitos distintos, versões históricas ou erro de indexação. Preservar os três registros até reconciliação.

### 6.4 MUE

O índice geral usa “Modelo Universal de Entidades”. Em outros contextos de trabalho, a sigla também foi usada para “Moderador Universal de Entidades”. Não presumir que sejam a mesma entidade. Recomenda-se manter os dois usos identificados por contexto e encaminhar a expansão oficial ao glossário e à validação do fundador.

### 6.5 OPS

- Índice geral e README V08: “Sistema Universal de Missões”.
- Capítulo 001 V08, conforme auditoria documental anterior: “Capacidade Operacional Sistêmica”.

As definições podem apontar para escopo de sistema e capacidade interna, mas isso ainda precisa ser confirmado. Registrar como divergência de escopo, não como erro automaticamente.

## 7. Catálogos, domínios e relações de apoio

A coleção EOU atual declara volumes específicos para capacidades, agentes, ferramentas e provedores (V09–V12), plataforma (V13–V17), ecossistema (V18–V25), identidade/operação (V26–V32), inteligência (V33–V34), engenharia (V35–V38) e institucional/jurídico (V39–V40).

Esses domínios não devem ser confundidos com os componentes fundacionais MUE, EVA, OM, CO, CCM e OPS. A relação correta é de **fundamento e especialização**: os volumes de domínio documentam como os fundamentos se aplicam a áreas específicas.

Exemplos de relações a rastrear na próxima rodada:
- V09 Catálogo de Capacidades ↔ EVA, OM, CCM e OPS.
- V10 Catálogo de Agentes e V11 Ferramentas ↔ OM e governança.
- V13 Banco de Dados Mestre, V26 Identidade Digital, V27 Usuários e Perfis e V28 Entidades ↔ MUE e identidade.
- V16 Segurança e Auditoria e V17 Governança ↔ todos os componentes.
- V18 Marketplace, V24 Empregabilidade e V25 Financeiro ↔ domínios operacionais e comerciais da UNO.
- V31 Fluxos e V32 Automações ↔ OM, CCM e OPS.
- V35 Roadmap, V36 ADR, V37 Glossário e V38 Padrões ↔ governança documental e evolução da EOU.
- V39 Jurídico e V40 Institucional ↔ CO e Nós S.A.

Estas relações são um roteiro de rastreabilidade; não constituem declaração de que cada integração já esteja implementada.

## 8. Estados: documentação não é implementação

Para todas as linhas deste mapa, manter estados separados:

| Estado | Significado |
|---|---|
| Especificado | Há definição suficientemente clara do requisito ou comportamento. |
| Documentado | Existe fonte documental identificável e rastreável. |
| Codificado | Há código-fonte correspondente, identificado por caminho e versão. |
| Integrado | O código está conectado aos serviços, dados e fluxos necessários. |
| Testado | Há evidência reproduzível de testes relevantes aprovados. |
| Liberado | Há evidência de autorização e implantação no ambiente indicado. |

**Regra:** não converter “documentado” em “codificado”, “integrado”, “testado” ou “liberado” por inferência. Este mapa é documental; não executou build, testes, deploy nem alterações em bancos ou serviços.

## 9. Classificação de autoridade das afirmações

### 9.1 Decisões e declarações do fundador já registradas

- V7 é a primeira versão pública oficial da UNO CORE; V8 é a evolução participativa e não deve antecipar decisões da comunidade.
- A V6 original integral se perdeu; as oito imagens são recuperação parcial.
- O nome institucional é **Nós S.A.**; “Nósu S.A.” é erro de transcrição. A grafia histórica “NÓS S.A.” pode ser preservada em documentos históricos.
- Preservar originais e histórico; não sobrescrever fontes canônicas sem necessidade e rastreabilidade.
- A documentação deve orientar a implementação, sem deixar o Antigravity adivinhar o produto.

### 9.2 Sínteses e propostas técnicas deste mapa

- A cadeia funcional MUE → EVA → CO → OM → CCM → OPS → Nós S.A. é uma síntese para explicar responsabilidades e relações; não é decisão formal de nomenclatura nem prova de implementação.
- Separar série fundacional histórica e coleção EOU de 40 volumes até validação.
- Manter glossário de siglas com aliases, contexto, fonte, versão, status e autoridade de validação.
- Usar os estados especificado/documentado/codificado/integrado/testado/liberado como campos independentes.

### 9.3 Reservado à validação do fundador ou a deliberação futura

- Expansões oficiais de EVA, OM, CO, MUE e OPS.
- Relação exata entre a série fundacional histórica e os volumes numerados atuais.
- Eventual consolidação de nomes, siglas e escopos no índice e no glossário.
- Qualquer decisão de V8 que deva ser submetida à Comunidade UNO 1.

## 10. Preservação e próximos passos

1. Não renomear, mover ou apagar documentos originais dos volumes V01–V40.
2. Receber e comparar a transcrição ampliada das imagens que o fundador trouxer do Gemini, mantendo cada transcrição identificada por origem.
3. Fazer cotejo integral da imagem 7 com o capítulo 051 da Carta Fundadora, registrando diferenças textuais e versões.
4. Localizar a fonte canônica de Zelo; a diretriz de continuidade não substitui a fonte canônica.
5. Revisar os índices, catálogos e glossário para mapear aliases e colisões de siglas sem resolver unilateralmente.
6. Cruzar cada capacidade documentada com o código V7 e registrar caminho, branch, evidência, testes e estado de liberação.
7. Atualizar a matriz de rastreabilidade V7 após a conclusão do cruzamento documental e de código.
8. Manter o PR #1 em Draft e não promover branches nem alterar produção sem autorização específica.

## 11. Conclusão

A documentação atual permite reconstruir uma arquitetura conceitual consistente entre representação da realidade, aprendizagem, organização, orquestração, coordenação de missões, capacidade operacional e curadoria institucional. O que ainda impede uma consolidação canônica não é ausência de conteúdo, mas colisão de nomenclaturas, proveniência histórica incompleta e falta de uma tabela oficial de correspondência entre séries.

Este mapa estabelece essa tabela como instrumento de trabalho, preservando as incertezas em vez de escondê-las. A próxima consolidação deve ser feita com validação explícita do fundador e evidências de código separadas das evidências documentais.
