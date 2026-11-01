# Inventário estrutural e primeira leitura dos fundamentos V01–V08

- Data: 2026-10-31
- Estado: primeira passagem estrutural; não representa aprovação arquitetural.
- Escopo: contagem de capítulos, leitura dos READMEs e leitura integral dos capítulos de V01/V02, mais amostras direcionadas dos demais volumes.
- Limite: os 522 capítulos não foram todos lidos integralmente nesta passagem. A contagem e os sinais temáticos abaixo são inventário estrutural; a auditoria semântica completa será feita por lotes.

## 1. Contagem de capítulos

| Volume | Nome no catálogo atual | Capítulos numerados | Observação inicial |
|---|---|---:|---|
| V01 | Constituição Técnica | 7 | Base normativa curta; autoridade e precedência precisam de governança explícita |
| V02 | Arquitetura Oficial | 7 | Base arquitetural de alto nível; faltam diagramas, contratos e arquitetura de referência verificável |
| V03 | Modelo Universal de Entidades (MUE) | 157 | Modelo conceitual amplo; sobrepõe identidade, permissões, persistência e governança com domínios especializados |
| V04 | EVA — expansão pendente | 145 | Conteúdo majoritariamente de aprendizagem/cognição; três expansões documentadas para EVA |
| V05 | Oficina Mestre | 100 | Capítulos são do antigo Orquestrador Mestre, não da Oficina Mestre atual |
| V06 | Centro de Operações | 52 | Capítulos são do antigo domínio organizacional, não do Centro de Operações atual |
| V07 | Central de Coordenação de Missões | 21 | Conteúdo sobre coordenação de missões, painéis, operadores e emergência; claims de estrutura institucional precisam de evidência |
| V08 | Sistema Universal de Missões (OPS) | 33 | Conteúdo descreve capacidade operacional sistêmica, não claramente sistema universal de missões |
| **Total** |  | **522** |  |

## 2. Achados por volume

### V01 — Constituição Técnica
A leitura dos sete capítulos confirma caráter normativo amplo. V01 estabelece que prevalece em conflitos técnicos, mas não tipa a precedência por natureza do documento. O capítulo de governança exige estudo, proposta, ADR e aprovação, sem definir claramente aprovadores por categoria. O ADR-EOU-002 registra proposta de precedência tipada, não aprovada. Não altera a regra textual vigente.

### V02 — Arquitetura Oficial
Os sete capítulos cobrem visão geral, camadas, componentes, comunicação, modularidade e escalabilidade em nível introdutório. Ainda não definem C4, limites de confiança, deployment/runtime, contratos entre camadas, ownership de dados, topologia de integração, requisitos não funcionais mensuráveis ou diagramas verificáveis. O volume precisa de aprofundamento antes de ser referência suficiente para implementação.

### V03 — MUE
O volume possui 157 capítulos. A definição central é universal, mas os capítulos de identidade, permissões, persistência e governança ampliam o escopo para áreas que hoje têm domínios especializados (V13, V16, V17, V26, V27 e V28). O objetivo da harmonização não é apagar conceitos do MUE, mas distinguir semântica universal de implementação, autoridade e políticas concretas. ADR-EOU-001 e ADR-EOU-002 continuam propostas não aprovadas.

### V04 — EVA
O volume possui 145 capítulos numerados; títulos incluem aprendizagem, conhecimento, memória, assistentes, contexto, cognição, agentes, capacidades, curadoria e evolução. Foram encontradas três expansões:
1. Enciclopédia Visual Adaptativa — catálogo atual;
2. Ecossistema de Valor e Aprendizagem — README de V04;
3. Engenharia da Vida e da Inteligência — capítulo legado V06-CO/001.
O registro de decisão pendente foi atualizado. Nenhuma expansão foi escolhida.

### V05 — Oficina Mestre
O volume possui 100 capítulos herdados de um V05 anterior denominado Orquestrador Mestre (OM). O capítulo 001 define OM como núcleo operacional que recebe intenções, valida autoridades, planeja, coordena recursos e acompanha execuções. O capítulo 100 descreve transição para UNO CORE. O V05 atual é Oficina Mestre, conforme nomenclatura confirmada pelo fundador. Criado inventário legado; capítulos não foram movidos nem apagados. A sigla OM fica ambígua e precisa de vocabulário canônico.

### V06 — Centro de Operações
O volume possui 52 capítulos legados. O README anterior usava “Conhecimento Organizacional”; o capítulo 001 usa “Catálogo Organizacional”; o nome atual confirmado é Centro de Operações. Os capítulos 001–049 tratam de organização, autoridade, governança, inteligência, aprendizagem, stewardship e curadoria. Os capítulos 050–052 tratam de Instituição Curadora, Carta Fundadora da NÓS S.A. e Declaração da Engenharia Oficial. Criado inventário legado; os 52 capítulos permanecem preservados e não são especificação vigente do Centro de Operações. Os textos 050–052 exigem validação de evidências formais em V39/V40.

### V07 — Central de Coordenação de Missões
Os 21 capítulos estão tematicamente ligados a missões, coordenação, Painéis Mestres, operadores/curadores, agentes, decisão, execução, avaliação, aprendizagem, priorização, continuidade e emergências. A leitura do capítulo “Sala do Cérebro” contém desenho institucional com 24 diretores e CEO; isso deve ser tratado como proposta conceitual até validação em V17/V39/V40, não como estrutura formal vigente. O capítulo de Painéis Mestres precisa respeitar os grants e a reserva do Painel Mestre definidos em V17. A fronteira V07↔V08↔V31 está proposta no ADR-EOU-003, não aprovada.

### V08 — OPS
Os 33 capítulos descrevem capacidade operacional sistêmica: serviços, capacidade, estados, saúde, observabilidade, incidentes, mudanças, deploy, recuperação, backup, runbooks, automação, agentes operacionais, operação federada e garantias. O capítulo 001 diz explicitamente que OPS significa Capacidade Operacional Sistêmica e distingue OPS de CCM. Isso conflita com o nome atual “Sistema Universal de Missões”. Criado registro de decisão pendente; não renomear nem mover arquivos até decisão do fundador.

## 3. Registros e inventários criados

- V04: DECISAO-PENDENTE-EVA.md.
- V05: INVENTARIO-LEGADO-100-CAPITULOS.md.
- V06: INVENTARIO-LEGADO-52-CAPITULOS.md.
- V08: DECISAO-PENDENTE-ESCOPO-OPS.md.
- ADR-EOU-001: fronteiras MUE/identidade/perfil/entidades — proposta não aprovada.
- ADR-EOU-002: precedência documental tipada — proposta não aprovada.
- ADR-EOU-003: fronteiras Oficina/Operações/Missões/Fluxos/Cognição — proposta não aprovada.

## 4. Próximas etapas de auditoria

1. Ler e classificar integralmente os 100 capítulos legados de V05 e 52 de V06, preservando os originais.
2. Ler V03 e V04 por lotes e mapear duplicidade semântica, principalmente identidade, memória, aprendizagem, cognição, agentes, capacidades, governança e evolução.
3. Fechar a decisão de escopo V08 e a expansão EVA com o fundador.
4. Revisar V07 contra V17: Painel Mestre, Sala do Cérebro, autoridade, composição institucional e escalonamento de emergência.
5. Aprofundar V02 com arquitetura de referência, diagramas C4, contratos, limites de confiança, dados e requisitos não funcionais.
6. Produzir matriz capítulo → conceito → volume proprietário → referências → evidência → estado → destino.
7. Só após ratificação, preparar realocação documental, schemas, APIs e diagramas implementáveis.

**Conclusão:** os oito volumes fundamentais não estão em maturidade uniforme. V01/V02 são curtos e introdutórios; V03/V04 são extensos e conceituais; V05/V06 guardam legados de volumes anteriores; V07 é coordenação de missões; V08 contém arquitetura OPS com nome divergente. A coleção precisa de harmonização sem perda histórica e sem aprovação automática de conteúdo legado.
