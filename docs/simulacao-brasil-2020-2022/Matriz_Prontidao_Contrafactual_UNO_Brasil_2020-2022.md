# MATRIZ DE PRONTIDÃO CONTRAFACTUAL — BRASIL 2020–2022 E UNO CORE

- Série: Simulação histórica contrafactual Brasil 2020–2022
- Documento: etapa seguinte à comparação arquitetural
- Data de referência técnica: 31/10/2026
- Natureza: matriz de prontidão, lacunas e evidências; não é estimativa de impacto
- Referências: EOU vigente de 40 volumes, comparação arquitetural e documentação V7 consultada
- Status: versão 0.1 — estrutura analítica inicial, sujeita a validação por domínio e território

## 1. Objetivo

Esta matriz transforma a comparação entre necessidades brasileiras de 2020–2022 e a arquitetura UNO em um instrumento verificável de prontidão. Ela responde, para cada domínio:

1. A necessidade histórica está documentada?
2. Existe correspondência na Engenharia Oficial UNO (EOU)?
3. O que a documentação permite afirmar sobre o estado V7?
4. Que parceiro, recurso, autorização ou salvaguarda externa seria necessário?
5. Que evidência demonstraria operação real e resultado?

A matriz não afirma que a UNO esteve disponível no Brasil entre 2020 e 2022. O contrafactual de referência continua sendo uma hipótese de engenharia disponível desde janeiro de 2020, mas com adoção gradual, implantação territorial e capacidade operacional limitadas por condições reais. A matriz atual avalia a prontidão documental/técnica conhecida em 31/10/2026, para orientar uma simulação disciplinada.

## 2. Escala de maturidade e regra de leitura

A escala abaixo deve ser aplicada separadamente a cada domínio, sem somar níveis diferentes em uma nota única:

| Nível | Classificação | Critério mínimo de evidência |
|---|---|---|
| 0 | Inexistente | Não há requisito, componente ou processo identificado de forma suficiente |
| 1 | Conceitual | Há intenção, descrição ou correspondência arquitetural, mas sem fluxo verificável |
| 2 | Demonstrável | Existe interface, protótipo, fluxo parcial ou demonstração reproduzível, sem operação integral |
| 3 | Operacional com parceiro | Fluxo executado com usuário real e parceiro identificado, com consentimento, responsável e evidência de atendimento |
| 4 | Operacional validado | Operação repetida, controles testados, indicadores auditáveis, avaliação de qualidade e evidência de resultado |

**Regra essencial:** um volume EOU ou uma tela não comprova implementação. Um cadastro, clique, encaminhamento ou pagamento iniciado não comprova atendimento concluído. O nível 3 exige execução com parceiro; o nível 4 exige repetição, controles e evidência independente ou auditável.

Quando a documentação disponível não permite classificar com segurança, registrar **ND — não demonstrado**, em vez de presumir nível. A existência de um desenho de domínio pode ser marcada como cobertura arquitetural, mas não como prontidão operacional.

## 3. Matriz inicial por domínio

A classificação V7 abaixo é conservadora e se limita ao estado descrito na comparação arquitetural e na documentação técnica consultada. Não substitui testes no ambiente implantado.

| Domínio / necessidade histórica | Referência EOU | Cobertura arquitetural | Estado V7 documentado | Nível de prontidão comprovado | Dependências externas principais |
|---|---|---|---|---|---|
| Pobreza, assistência e acesso a benefícios | V20, V27, V28, V31, V34 | Parcial/forte para mapear necessidades, orientar e encaminhar; não cria renda ou benefício | Não há fluxo completo de assistência e resolução comprovado | 1 — conceitual, sujeito a validação | CRAS/serviços públicos, organizações sociais, critérios oficiais, recursos e proteção de dados |
| Segurança alimentar e doações | V18, V20, V25, V28, V31 | Forte para catálogo, conexão, destinação e rastreabilidade pretendidos | Financeiro e marketplace ainda sem operação de produção validada; doações exigem fluxo e prestação de contas | 1 — conceitual; demonstrações parciais não equivalem a operação | Bancos de alimentos, cozinhas, doadores, logística, armazenamento, vigilância sanitária e prestação de contas |
| Trabalho, renda e formalização | V18, V21, V24, V25, V27, V31 | Forte para descoberta de competências, oportunidades, agenda e encaminhamento | Catálogo público parcial; motor completo de vagas, contratação, folha e pagamento não comprovado | 1 — conceitual/parcial | Empregadores, profissionais, qualificação, contratos, regras trabalhistas, pagamento e verificação de entrega |
| Educação e capacitação | V21, V27, V28, V31, V32 | Forte para descoberta, orientação, conexão e acompanhamento propostos | Matrícula, acompanhamento e certificação operacional não comprovados | 1 — conceitual | Escolas, educadores, conteúdo, conectividade, dispositivos, acessibilidade, certificadores e proteção de menores |
| Conectividade e inclusão digital | V13, V16, V20, V26, V27, V34 | Parcial: pode organizar diagnóstico, orientação e pontos de acesso; não fornece rede ou dispositivo por si | Autenticação e integração de identidade não estão integralmente validadas | 1 — conceitual | Telecom, equipamentos, espaços comunitários, acessibilidade, alfabetização digital e segurança |
| Saúde e acesso a cuidados | V16, V20, V22, V26, V27, V28, V31 | Forte para informação e coordenação não clínica; não substitui diagnóstico, prontuário ou serviço de saúde | Ambiente demonstrativo; operação clínica e integração validada não comprovadas | 1 — conceitual/demonstrativo | SUS e prestadores habilitados, profissionais, regulação, protocolos, consentimento, LGPD e segurança clínica |
| Habitação e infraestrutura básica | V20, V23, V28, V29, V31 | Parcial para registrar demanda, território, projeto e encaminhamento | Execução de obras, gestão de projetos e comprovação de entrega não demonstradas | 1 — conceitual | Prefeitura, concessionárias, engenharia, licenças, orçamento, obras, defesa civil e fiscalização |
| Saneamento e meio ambiente | V19, V20, V28, V29, V31 | Parcial para mapear ocorrências, mobilizar e acompanhar projetos | Fluxo operacional com concessionárias/órgãos e evidência de intervenção não demonstrado | 1 — conceitual | Órgãos ambientais, saneamento, concessionárias, dados geográficos, licenças, obras e monitoramento |
| Segurança e proteção comunitária | V16, V17, V20, V26, V27, V28, V31 | Parcial para informação, prevenção comunitária e encaminhamento seguro; não exerce polícia nem emergência | Protocolos operacionais e integração segura com serviços competentes não comprovados | 1 — conceitual | Serviços de emergência, rede de proteção, autoridades competentes, protocolos de risco, segurança e privacidade |
| Economia local e pequenos negócios | V18, V19, V24, V25, V27, V28, V31 | Forte para vitrine, descoberta, conexão comercial e reputação pretendidas | Catálogo público parcial; checkout, contratação e fulfillment incompletos; Stripe sem produção validada | 1 — conceitual/parcial | Comerciantes, consumidores, logística, pagamentos, antifraude, tributos, atendimento e resolução de disputas |
| Participação, memória de pautas e manifestação | V17, V20, V28, V30, V31, V34, V40 | Forte como desenho de escuta, organização, deliberação e encaminhamento | Comunidade em leitura; submissão e votação não habilitadas; painel de participação requer validação | 1 — conceitual/parcial | Moderação, proteção de dados, acessibilidade, pluralidade, regras de contestação e interlocutores institucionais |
| Governança, identidade, memória e auditoria transversal | V01, V02, V03, V13, V16, V17, V26, V27, V28, V33, V34 | Forte como princípio arquitetural de controle, escopo, rastreabilidade e autorização humana | Firebase/Supabase, IDU, claims, controles server-side e integrações ainda não integralmente validados | 1 — conceitual com componentes preparados; operação integral ND | Testes de segurança, política de acesso, gestão de consentimento, retenção, auditoria, resposta a incidentes e validação independente |

### Observações de classificação

- A classificação 1 não significa ausência de trabalho técnico; significa que a documentação disponível não comprova o conjunto mínimo de operação real com parceiro.
- Quando há interface ou fluxo parcial, isso pode justificar nível 2 para aquele componente específico após demonstração reproduzível. Não eleva automaticamente o domínio inteiro.
- Nenhum domínio desta matriz recebe nível 3 ou 4 com base apenas na documentação consultada.
- Os níveis devem ser reavaliados com evidências de ambiente, logs, testes, contratos, protocolos, usuários e entregas reais.
- O estado “demonstrativo” de Saúde não deve ser confundido com prestação de serviço clínico.

## 4. Matriz temporal: o que pode e o que não pode ser afirmado em 2020, 2021 e 2022

A disponibilidade contrafactual da arquitetura é mantida como hipótese do estudo, não como fato histórico. A evolução anual deve ser reconstruída em três camadas:

| Ano | Contexto histórico a reconstruir | Hipótese de disponibilidade UNO | Evidência necessária para estimar contribuição |
|---|---|---|---|
| 2020 | Choque inicial da pandemia, fechamento de escolas, perda de renda, restrições de circulação, emergência alimentar e pressão sobre saúde | Engenharia hipoteticamente disponível; adoção inicial não presumida | Territórios piloto, população elegível, canais acessíveis, parceiros ativos, serviços ofertados, protocolos de crise e capacidade de entrega |
| 2021 | Persistência da crise, agravamento da pobreza e insegurança alimentar, vacinação, retomada desigual e pressão sobre trabalho | Continuidade com expansão condicionada à confiança, recursos e capacidade | Retenção de usuários, ampliação territorial, oferta de parceiros, tempo de resposta, entregas e contratações confirmadas |
| 2022 | Reabertura mais ampla, recuperação desigual, inflação e reorganização de serviços e negócios | Maturação possível apenas onde houve operação anterior e condições sustentáveis | Repetição dos serviços, resultados adicionais, custos por resultado, sobrevivência de parceiros e comparação com territórios/grupos semelhantes |

Não se atribui uma nota anual de prontidão a 2020, 2021 ou 2022 sem reconstruir cronologia, disponibilidade de parceiros e capacidade de execução. “A arquitetura existia no cenário” não significa “a população foi atendida”.

## 5. Unidade territorial e granularidade dos dados

O balanço nacional serve para contextualizar o problema, mas não é suficiente para calcular capacidade de atendimento. A próxima modelagem deverá trabalhar, quando houver dados comparáveis, em camadas:

1. Brasil e macrorregião: contexto e desigualdades amplas.
2. Unidade da Federação: diferenças de políticas, infraestrutura e indicadores.
3. Município: capacidade institucional, rede de serviços, oferta de parceiros e indicadores locais.
4. Bairro/território piloto: demanda observada, distância, acessibilidade, rede comunitária, capacidade diária e acompanhamento de casos.

A seleção de bairro não deve ser feita somente pela maior vulnerabilidade estatística. Deve considerar também segurança, conectividade, presença de organizações confiáveis, serviços públicos, capacidade logística, diversidade de usuários e possibilidade de avaliação ética. O território piloto deve ser escolhido com critérios publicados e justificativa documentada.

Não extrapolar taxas nacionais para bairros nem usar médias estaduais como se descrevessem cada comunidade. Quando não houver dado local, registrar a lacuna.

## 6. Portões de evidência para elevar o nível de prontidão

Cada domínio deverá passar pelos seguintes portões antes de receber classificação superior:

- **G0 — Especificação:** finalidade, público, escopo, limites, responsável e requisitos documentados.
- **G1 — Segurança e legalidade:** base legal, minimização de dados, consentimento quando aplicável, acessibilidade, controles de acesso, retenção, moderação e resposta a incidentes definidos.
- **G2 — Fluxo reproduzível:** testes documentados do início ao fim, incluindo erros, cancelamento, contestação e saída segura.
- **G3 — Parceiro e capacidade:** parceiro identificado, competência confirmada, disponibilidade, critérios de elegibilidade, SLA ou prazo acordado e capacidade de atendimento.
- **G4 — Operação real:** usuários reais, consentimento, registro de encaminhamento, execução e confirmação pelo destinatário/beneficiário.
- **G5 — Validação:** repetição, indicadores de qualidade, auditoria, custos, reclamações, correções e avaliação de adicionalidade.

Um domínio só pode ser considerado operacional com parceiro após G0–G4. O nível operacional validado exige G5. Para saúde, assistência, educação, pagamentos e proteção, os requisitos específicos de cada setor são adicionais e não podem ser substituídos por um checklist genérico.

## 7. Indicadores mínimos por etapa do ciclo UNO

O ciclo de valor a medir permanece:

**Perceber → compreender → autorizar → conectar → executar → confirmar → aprender.**

| Etapa | Evidência mínima | Indicador possível |
|---|---|---|
| Perceber | Demanda registrada com data, território e origem | Demandas únicas válidas; cobertura territorial; taxa de abandono |
| Compreender | Triagem, categoria, urgência e informação confirmada | Tempo de triagem; proporção de registros completos; correções |
| Autorizar | Consentimento, escopo e destinatário definidos | Taxa de autorização; revogações; acessos indevidos |
| Conectar | Encaminhamento aceito por prestador/parceiro | Encaminhamentos aceitos; tempo até aceite; recusas justificadas |
| Executar | Serviço, entrega, aula, entrevista, consulta ou transação realizada | Execuções concluídas; prazo; qualidade; custo |
| Confirmar | Confirmação independente ou evidência adequada | Taxa de confirmação; divergências; reclamações |
| Aprender | Revisão e correção com trilha auditável | Tempo de correção; reincidência; melhoria por ciclo |

Não confundir usuários cadastrados com pessoas atendidas, solicitações com soluções, encaminhamentos com execução, volume financeiro com renda adicional, nem manifestações com consenso.

## 8. Dados necessários para a próxima fase quantitativa

Antes de projetar cenários numéricos, montar um inventário com os seguintes campos:

| Grupo | Campos a obter |
|---|---|
| Território | Município, bairro, população de referência, densidade, distâncias e áreas de cobertura |
| Necessidade | Tipo, urgência, público elegível, fonte, data, evidência e situação |
| Oferta | Parceiro, serviço, capacidade mensal, horários, critérios, cobertura e custo |
| Adoção | Pessoas alcançáveis, acesso digital/presencial, ativação, retenção e consentimento |
| Conversão | Triagem, encaminhamento, aceite, agendamento, execução e confirmação |
| Resultado | Mudança observada, baseline, prazo, adicionalidade e grupo de comparação |
| Custo | Implantação, equipe, tecnologia, suporte, operação, parceiro, logística e auditoria |
| Risco | Dados sensíveis, fraude, exclusão, erro de triagem, conflito, segurança e mitigação |

Os parâmetros ainda desconhecidos devem permanecer como variáveis, não receber números intuitivos. Cenários baixo, central e alto só serão calculados depois que cada parâmetro tiver fonte, intervalo justificável ou hipótese claramente rotulada.

## 9. Desenho de avaliação e atribuição

Para estimar contribuição adicional da UNO, a avaliação deve comparar resultados observados com um contrafactual plausível. A depender do território e da ética da intervenção, poderão ser considerados implantação escalonada, comparação com territórios semelhantes, séries temporais interrompidas ou desenho quase-experimental. Nenhum método deve negar serviço essencial a alguém apenas para formar grupo de controle.

A avaliação deve registrar:
- o que teria ocorrido sem a UNO, com base em evidência e método explícito;
- serviços e políticas já existentes no território;
- mudanças externas, como vacinação, transferências, reabertura, inflação e novas políticas;
- seleção dos participantes e diferenças entre quem adere e quem não adere;
- resultados negativos, efeitos não pretendidos e deslocamento de demanda;
- intervalos de incerteza e limites de generalização.

A UNO pode contribuir para reduzir perdas entre necessidade, informação, responsável, encaminhamento e resultado. Não se deve atribuir à plataforma a totalidade de uma mudança social que dependeu de políticas, recursos, profissionais, organizações e decisões externas.

## 10. Lacunas e decisões ainda abertas

1. Selecionar território piloto por critérios públicos, com dados municipais e de bairro.
2. Validar cada domínio V7 no ambiente real, sem inferir operação a partir de README ou interface.
3. Identificar parceiros concretos, capacidade, escopo, autorização e prazos.
4. Definir fluxos de consentimento, proteção de dados, acessibilidade, moderação e contestação.
5. Harmonizar a nomenclatura documental EOU-V06: o catálogo vigente nomeia Centro de Operações (CO), enquanto um README histórico consultado ainda apresenta Conhecimento Organizacional. Preservar o catálogo como referência e tratar a divergência como pendência de revisão, sem renomeação automática.
6. Separar claramente memória institucional, dados operacionais, dados pessoais e registros de auditoria.
7. Definir como a documentação será disponibilizada no futuro Painel UNO, com fonte, versão, data de corte e histórico de revisão.
8. Estabelecer processo de reprodução independente da análise, incluindo roteiro de perguntas, fontes e critérios.

## 11. Conclusão desta etapa

A matriz mostra que a arquitetura EOU oferece cobertura conceitual relevante para várias necessidades observadas no Brasil entre 2020 e 2022. Entretanto, a documentação V7 disponível não comprova operação integral com parceiros em nenhum dos domínios avaliados nesta primeira versão. Essa distinção não diminui a arquitetura: define honestamente o trabalho que falta para convertê-la em capacidade real.

O estudo avança, portanto, da pergunta “a UNO contempla esse problema?” para perguntas mais exigentes: “qual fluxo funciona?”, “quem executa?”, “com que capacidade?”, “sob quais garantias?”, “qual resultado foi confirmado?” e “quanto desse resultado é adicional?”.

A próxima etapa será territorial: selecionar e documentar um território de referência, construir o inventário municipal/bairro de necessidades e serviços, validar o estado V7 por testes e parceiros e só então modelar cenários quantitativos de adoção, custo e resultado.

## 12. Referências internas

- [Simulação Consolidada — Brasil 2020–2022](Simulacao_Consolidada_2020-2022.md)
- [Comparação Arquitetural — UNO CORE e as Necessidades do Brasil (2020–2022)](Comparacao_Arquitetura_UNO_vs_Brasil_2020-2022.md)
- [Catálogo oficial da Engenharia — coleção EOU de 40 volumes](../../EOU/CATALOGO.md)

**Nota de integridade:** este documento é uma matriz de análise e planejamento. Não certifica a plataforma, não comprova resultados históricos causados pela UNO e não substitui auditoria técnica, jurídica, setorial ou avaliação independente.
