# 025 — Operação de Dados, Integrações e Fluxos

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial para concepção, produção, coleta, recepção, validação, classificação, transformação, armazenamento, movimentação, compartilhamento, utilização, observação, reconciliação, preservação, recuperação, arquivamento e eliminação de:

- dados;
- informações;
- registros;
- eventos;
- mensagens;
- documentos;
- evidências;
- estados;
- integrações;
- APIs;
- filas;
- streams;
- pipelines;
- sincronizações;
- fluxos operacionais;
- contratos de dados;
- produtos de dados;
- relações semânticas;
- conhecimento derivado.

Seu propósito é permitir que a Plataforma UNO opere informações de maneira:

- legítima;
- contextual;
- segura;
- íntegra;
- disponível;
- rastreável;
- interoperável;
- recuperável;
- responsável;
- compreensível;
- evolutiva.

---

## Princípio central

> Dados não são a realidade.  
> São representações parciais da realidade, produzidas em determinado contexto, por determinada fonte, com determinada finalidade e sob determinadas limitações.

A Plataforma UNO deverá utilizar dados para ampliar compreensão, coordenação e capacidade de servir, sem reduzir pessoas, organizações, comunidades e missões a registros isolados.

---

## Regra fundamental

> Nenhum dado deverá circular sem finalidade, contexto, proveniência, responsabilidade e destino reconhecíveis.

A existência técnica de um dado não concederá automaticamente autoridade para:

- acessá-lo;
- copiá-lo;
- integrá-lo;
- compartilhá-lo;
- armazená-lo;
- correlacioná-lo;
- transformá-lo;
- utilizá-lo em decisão;
- utilizá-lo em treinamento;
- mantê-lo indefinidamente.

---

## Escopo

Este documento aplica-se a dados e fluxos utilizados por:

- pessoas;
- organizações;
- agentes;
- automações;
- serviços;
- painéis;
- aplicativos;
- APIs;
- bancos de dados;
- arquivos;
- dispositivos;
- sensores;
- parceiros;
- fornecedores;
- instituições públicas;
- ambientes federados;
- sistemas de inteligência artificial;
- processos de aprendizagem;
- missões da Plataforma UNO.

---

## Relações fundamentais

Este arquivo deverá operar em harmonia com:

- configuração e estado operacional;
- capacidade e saturação;
- disponibilidade e confiabilidade;
- dependências e impacto;
- contingência;
- backup;
- continuidade;
- procedimentos;
- automação;
- agentes;
- segurança;
- governança;
- memória;
- conhecimento;
- aprendizagem.

---

## Estrutura deste arquivo

Este arquivo será desenvolvido em seis lotes:

1. **Fundamentos, natureza, classificação, proveniência, qualidade e responsabilidade;**
2. **Arquiteturas de dados, armazenamento, bancos, eventos, mensagens, pipelines e estados;**
3. **Integrações, APIs, contratos, interoperabilidade, sincronização e federação;**
4. **Operação, observabilidade, incidentes, reconciliação, recuperação e continuidade dos fluxos;**
5. **Governança, segurança, privacidade, conformidade, retenção, evidências e ciclo de vida;**
6. **Testes, métricas, maturidade, aprendizagem, garantias e modelo integrado.**

---

# Lote 1 — Fundamentos, Natureza, Classificação, Proveniência, Qualidade e Responsabilidade

## 1. Dado

Dado é uma representação registrada de:

- fato;
- evento;
- atributo;
- estado;
- relação;
- decisão;
- observação;
- medição;
- declaração;
- resultado;
- hipótese;
- inferência.

---

## 2. Dado não é fato

Um dado poderá representar um fato sem ser, por si só, prova definitiva de sua verdade.

Deverão ser considerados:

- fonte;
- método;
- contexto;
- momento;
- integridade;
- interpretação;
- limitações;
- possibilidade de erro.

---

## 3. Informação

Informação é dado organizado e contextualizado de modo a adquirir significado para determinada finalidade.

---

## 4. Conhecimento

Conhecimento é informação compreendida, relacionada e aplicável a decisões ou ações.

A existência de informação não garantirá compreensão.

---

## 5. Evidência

Evidência é informação capaz de apoiar a demonstração de:

- fato;
- estado;
- ação;
- decisão;
- autorização;
- relação;
- resultado;
- responsabilidade.

---

## 6. Registro

Registro é representação persistente de acontecimento, estado, decisão ou ação que deverá permanecer consultável segundo política definida.

---

## 7. Documento

Documento é uma unidade organizada de informação que poderá conter:

- texto;
- imagem;
- áudio;
- vídeo;
- assinatura;
- metadados;
- relações;
- versões;
- evidências.

---

## 8. Evento

Evento representa uma mudança significativa ocorrida ou observada em determinado momento.

---

## 9. Mensagem

Mensagem é uma unidade de comunicação entre participantes, sistemas, agentes ou organizações.

Poderá representar:

- informação;
- solicitação;
- comando;
- resposta;
- recomendação;
- confirmação;
- erro;
- alerta;
- contestação.

---

## 10. Estado

Estado é a representação das condições conhecidas de uma entidade em determinado momento.

---

## 11. Fluxo

Fluxo é o movimento organizado de dados, mensagens, eventos, decisões e estados entre etapas ou participantes.

---

## 12. Integração

Integração é a relação operacional que permite troca ou coordenação entre capacidades distintas.

Não deverá ser reduzida à simples conexão técnica.

---

## 13. Pipeline

Pipeline é uma sequência de etapas que recebe, valida, transforma, move, enriquece ou disponibiliza dados.

---

## 14. Stream

Stream é fluxo contínuo ou quase contínuo de eventos e dados ao longo do tempo.

---

## 15. Lote de dados

Lote é conjunto processado como unidade operacional delimitada.

Deverá possuir:

- identidade;
- origem;
- período;
- conteúdo;
- estado;
- resultado;
- evidência.

---

## 16. Produto de dados

Produto de dados é capacidade organizada para disponibilizar dados com:

- finalidade;
- contrato;
- qualidade;
- proprietário;
- usuários;
- suporte;
- segurança;
- ciclo de vida.

---

## 17. Domínio de dados

Domínio é o contexto institucional ou operacional responsável pelo significado e pela governança de determinado conjunto de dados.

---

## 18. Entidade

Entidade é aquilo que poderá ser representado e identificado, como:

- pessoa;
- organização;
- agente;
- missão;
- serviço;
- território;
- recurso;
- evento;
- contrato;
- capacidade.

---

## 19. Atributo

Atributo representa uma propriedade associada a uma entidade.

Seu significado deverá ser definido no domínio aplicável.

---

## 20. Relação

Relação representa vínculo entre entidades.

Deverá indicar, quando necessário:

- tipo;
- origem;
- direção;
- validade;
- autoridade;
- contexto;
- temporalidade.

---

## 21. Identificador

O identificador deverá permitir distinguir uma entidade dentro do escopo necessário.

Não deverá expor informação pessoal ou sensível sem necessidade.

---

## 22. Identidade e dado

Dados sobre uma identidade não constituem a identidade completa da pessoa, organização ou agente representado.

---

## 23. Dado pessoal

Dado pessoal é informação relacionada a pessoa identificada ou identificável, conforme legislação aplicável.

---

## 24. Dado pessoal sensível

Dados sensíveis deverão receber proteção reforçada, especialmente quando relacionados a:

- saúde;
- biometria;
- genética;
- origem racial ou étnica;
- religião;
- opinião política;
- filiação;
- vida sexual.

---

## 25. Dados de crianças e adolescentes

O tratamento deverá observar:

- melhor interesse;
- finalidade;
- necessidade;
- proteção;
- transparência adequada;
- segurança;
- legislação;
- participação responsável.

---

## 26. Dado organizacional

Representa informações relativas a:

- estrutura;
- operação;
- recursos;
- contratos;
- pessoas vinculadas;
- capacidades;
- decisões;
- resultados;
- riscos.

---

## 27. Dado comunitário

Representa condições, necessidades, recursos ou relações de uma comunidade.

Não deverá ser utilizado para:

- estigmatização;
- discriminação;
- manipulação;
- vigilância indevida;
- exposição territorial.

---

## 28. Dado público

Dado público deverá possuir definição e fundamento claros.

Estar acessível publicamente não eliminará:

- finalidade;
- contexto;
- direitos;
- qualidade;
- responsabilidade;
- restrições de reutilização.

---

## 29. Dado interno

É destinado à operação interna e não deverá ser divulgado sem autorização.

---

## 30. Dado restrito

Exige controle de acesso reforçado devido a seu impacto ou obrigação.

---

## 31. Dado confidencial

Sua exposição poderá causar dano a:

- pessoas;
- organizações;
- missões;
- contratos;
- segurança;
- confiança;
- direitos.

---

## 32. Dado crítico

A perda, alteração, indisponibilidade ou exposição poderá comprometer função essencial, direito ou continuidade institucional.

---

## 33. Dado estruturado

Segue modelo formal como:

- tabela;
- esquema;
- campo;
- registro;
- chave;
- relação.

---

## 34. Dado semiestruturado

Possui estrutura parcial, como:

- JSON;
- XML;
- evento;
- mensagem;
- documento com metadados.

---

## 35. Dado não estruturado

Poderá incluir:

- texto livre;
- imagem;
- áudio;
- vídeo;
- documento;
- conversa.

A ausência de estrutura técnica não elimina necessidade de classificação e proteção.

---

## 36. Metadado

Metadado descreve características de outro dado.

Poderá indicar:

- origem;
- tipo;
- momento;
- formato;
- proprietário;
- classificação;
- versão;
- qualidade;
- retenção.

---

## 37. Metadado sensível

Metadados também poderão revelar:

- comportamento;
- localização;
- relacionamento;
- rotina;
- identidade;
- intenção;
- padrão operacional.

---

## 38. Dado primário

É coletado diretamente da fonte ou do fenômeno observado.

---

## 39. Dado secundário

É obtido de fonte que já realizou coleta, organização ou transformação.

---

## 40. Dado derivado

É produzido por:

- cálculo;
- combinação;
- transformação;
- inferência;
- agregação;
- classificação;
- análise;
- modelo.

---

## 41. Inferência

Inferência é conclusão produzida a partir de dados e regras ou modelos.

Deverá permanecer distinguível de observação direta.

---

## 42. Hipótese

Hipótese é explicação possível ainda não confirmada.

Não deverá ser registrada como fato.

---

## 43. Dado declarado

É informado por pessoa, organização, agente ou sistema.

A declaração deverá manter vínculo com sua origem.

---

## 44. Dado observado

É obtido por observação, sensor, sistema ou operador.

A observação poderá possuir limitações e erros.

---

## 45. Dado calculado

Resulta de fórmula ou processamento conhecido.

Deverá preservar:

- entradas;
- método;
- versão;
- momento;
- resultado;
- responsável.

---

## 46. Dado gerado por inteligência artificial

Deverá indicar:

- agente ou modelo;
- versão;
- contexto;
- instrução;
- fontes;
- momento;
- natureza gerada;
- limitações.

Conteúdo gerado não deverá ser presumido verdadeiro.

---

## 47. Dado sintético

É criado artificialmente para representar padrões ou cenários.

Deverá ser identificado como sintético e não confundido com registro de pessoa ou evento real.

---

## 48. Dado de simulação

Todo dado que represente operação fictícia deverá ser identificado como:

**SIMULAÇÃO**

Não deverá alimentar decisões reais sem validação e autorização.

---

## 49. Dado histórico

Representa estado ou acontecimento passado.

Não deverá ser sobrescrito silenciosamente por estado atual.

---

## 50. Dado atual

Representa a condição conhecida em determinado momento.

Deverá possuir referência temporal.

---

## 51. Dado projetado

Representa estimativa ou previsão futura.

Deverá indicar:

- método;
- horizonte;
- premissas;
- confiança;
- limitações;
- versão.

---

## 52. Dado operacional

É utilizado para apoiar ou registrar execução cotidiana.

---

## 53. Dado analítico

É preparado para:

- análise;
- comparação;
- tendência;
- planejamento;
- avaliação;
- decisão.

---

## 54. Dado transacional

Representa operação com mudança de estado que exige:

- integridade;
- consistência;
- identidade;
- temporalidade;
- evidência;
- reconciliação.

---

## 55. Dado mestre

Representa entidades fundamentais compartilhadas entre processos, como:

- pessoas;
- organizações;
- serviços;
- territórios;
- capacidades;
- recursos.

---

## 56. Dado de referência

Define valores ou categorias utilizados para padronização.

---

## 57. Dado de configuração

Representa parâmetros que determinam comportamento de sistemas, agentes, automações e serviços.

---

## 58. Dado de telemetria

Representa sinais sobre:

- estado;
- desempenho;
- disponibilidade;
- erro;
- uso;
- segurança;
- capacidade;
- comportamento.

---

## 59. Dado de auditoria

Deverá apoiar reconstrução independente de ações, decisões, acessos e resultados.

---

## 60. Dado de memória

Preserva contexto e continuidade entre interações, missões e períodos.

---

## 61. Dado de conhecimento

Representa conteúdo organizado para compreensão e aplicação.

---

## 62. Classificação de dados

A classificação deverá determinar requisitos de:

- acesso;
- proteção;
- armazenamento;
- compartilhamento;
- retenção;
- transporte;
- eliminação;
- continuidade.

---

## 63. Critérios de classificação

Deverão considerar:

- natureza;
- finalidade;
- pessoas afetadas;
- obrigação;
- impacto;
- sensibilidade;
- criticidade;
- território;
- contrato;
- possibilidade de reidentificação.

---

## 64. Rótulo de classificação

O rótulo deverá ser:

- compreensível;
- persistente;
- interoperável;
- revisável;
- aplicável por pessoas e sistemas.

---

## 65. Classificação automática

Poderá apoiar escala, mas não deverá ser a única autoridade em casos de alto impacto ou ambiguidade.

---

## 66. Classificação humana

Pessoas deverão possuir orientação e competência para classificar dados adequadamente.

---

## 67. Reclassificação

Mudanças deverão registrar:

- classificação anterior;
- nova classificação;
- motivo;
- autoridade;
- momento;
- impacto;
- sistemas afetados.

---

## 68. Classificação herdada

Dados derivados deverão herdar proteção compatível com suas fontes e com o novo risco produzido pela combinação.

---

## 69. Agregação de dados

A reunião de dados não sensíveis poderá produzir conjunto sensível.

A classificação deverá considerar o resultado agregado.

---

## 70. Correlação de dados

Relacionar conjuntos poderá revelar informações não presentes isoladamente.

Essa capacidade deverá ser governada.

---

## 71. Desclassificação

A redução de proteção deverá exigir evidência de que obrigações, riscos e impactos foram adequadamente reavaliados.

---

## 72. Proprietário dos dados

Todo conjunto relevante deverá possuir proprietário institucional responsável por:

- significado;
- finalidade;
- classificação;
- qualidade;
- acesso;
- compartilhamento;
- retenção;
- ciclo de vida.

---

## 73. Custodiante dos dados

O custodiante implementará proteção e disponibilidade em nome do proprietário.

---

## 74. Produtor de dados

O produtor gera ou registra dados.

Deverá cumprir o contrato definido quanto a:

- formato;
- significado;
- qualidade;
- temporalidade;
- proveniência;
- segurança.

---

## 75. Consumidor de dados

O consumidor utiliza dados para determinada finalidade.

Não deverá ampliar silenciosamente sua utilização.

---

## 76. Curador de dados

O curador deverá preservar:

- significado;
- coerência;
- qualidade;
- documentação;
- taxonomia;
- relação com a Engenharia Oficial;
- evolução semântica.

---

## 77. Administrador de dados

Poderá operar infraestrutura e acessos sem possuir autoridade sobre significado e finalidade.

---

## 78. Responsável pela privacidade

Deverá apoiar a análise de:

- finalidade;
- base legítima;
- direitos;
- risco;
- retenção;
- compartilhamento;
- impacto.

---

## 79. Responsável pela segurança

Deverá apoiar:

- classificação;
- controles;
- risco;
- incidentes;
- monitoramento;
- resposta;
- continuidade.

---

## 80. Responsabilidade compartilhada

A responsabilidade deverá distinguir:

- quem produz;
- quem define;
- quem armazena;
- quem transforma;
- quem compartilha;
- quem consome;
- quem decide;
- quem audita.

---

## 81. Dado órfão

Dados sem proprietário, finalidade ou ciclo de vida reconhecidos deverão ser:

- identificados;
- classificados;
- isolados quando necessário;
- destinados;
- eliminados quando legítimo.

---

## 82. Fonte de dados

A fonte é a origem técnica, humana ou institucional da informação.

---

## 83. Fonte autoritativa

É reconhecida como referência oficial para determinado atributo ou domínio.

Essa autoridade deverá possuir escopo definido.

---

## 84. Múltiplas fontes autoritativas

Poderão existir fontes legítimas para contextos diferentes.

A arquitetura deverá evitar presumir que uma delas domina todos os usos.

---

## 85. Fonte externa

Deverá ser avaliada quanto a:

- identidade;
- autoridade;
- qualidade;
- atualidade;
- contrato;
- disponibilidade;
- segurança;
- continuidade;
- interesse.

---

## 86. Fonte humana

Informações fornecidas por pessoas deverão preservar:

- autoria;
- contexto;
- momento;
- possibilidade de correção;
- distinção entre fato e percepção.

---

## 87. Fonte de agente

Dados produzidos por agente deverão indicar:

- identidade;
- versão;
- fontes utilizadas;
- método;
- confiança;
- limitações;
- supervisão.

---

## 88. Proveniência

Proveniência é a capacidade de reconhecer a história do dado desde sua origem.

---

## 89. Elementos da proveniência

Deverão incluir, quando aplicável:

- origem;
- produtor;
- momento;
- método;
- finalidade;
- versão;
- transformações;
- movimentações;
- decisões;
- sistemas;
- responsáveis.

---

## 90. Linhagem de dados

A linhagem deverá permitir compreender como o dado percorreu:

- fontes;
- etapas;
- transformações;
- integrações;
- armazenamentos;
- produtos;
- relatórios;
- decisões.

---

## 91. Linhagem técnica

Representa componentes, campos, pipelines, tabelas, arquivos e transformações.

---

## 92. Linhagem semântica

Representa mudanças de significado, classificação, interpretação e finalidade.

---

## 93. Linhagem institucional

Representa organizações, autoridades, responsabilidades e contratos relacionados ao dado.

---

## 94. Linhagem de decisão

Deverá relacionar dados e evidências às decisões que influenciaram.

---

## 95. Ruptura de linhagem

A ausência de proveniência deverá reduzir:

- confiança;
- autonomia;
- reutilização;
- capacidade de auditoria;
- aplicabilidade.

---

## 96. Proveniência falsificada

Indícios de origem adulterada deverão gerar:

- isolamento;
- verificação;
- investigação;
- comunicação;
- correção;
- preservação de evidências.

---

## 97. Catálogo de dados

A Plataforma UNO deverá manter catálogo para localizar:

- conjunto;
- proprietário;
- domínio;
- descrição;
- classificação;
- fonte;
- qualidade;
- contrato;
- acesso;
- retenção;
- dependências;
- estado.

---

## 98. Dicionário de dados

Deverá definir:

- campo;
- significado;
- tipo;
- unidade;
- valores;
- obrigatoriedade;
- origem;
- regra;
- restrição;
- exemplo.

---

## 99. Glossário institucional

Deverá preservar definições oficiais utilizadas entre organizações, agentes, painéis e documentos.

---

## 100. Ontologia

A ontologia deverá organizar entidades, conceitos e relações do ecossistema UNO.

---

## 101. Taxonomia

A taxonomia deverá classificar conteúdos de maneira:

- compreensível;
- consistente;
- versionada;
- governada;
- extensível;
- interoperável.

---

## 102. Semântica

Semântica é o significado atribuído ao dado.

Dois campos tecnicamente iguais poderão representar conceitos diferentes.

---

## 103. Ambiguidade semântica

Quando um termo possuir múltiplos significados, o contexto deverá ser explicitado.

---

## 104. Unidade de medida

Valores deverão indicar:

- unidade;
- precisão;
- escala;
- método;
- conversão;
- tolerância;
- contexto.

---

## 105. Formato temporal

Datas e horários deverão indicar:

- referência;
- fuso;
- precisão;
- origem;
- validade;
- sequência;
- tratamento de horário de verão quando aplicável.

---

## 106. Localização

Dados territoriais deverão indicar:

- referência geográfica;
- precisão;
- momento;
- finalidade;
- sensibilidade;
- possibilidade de erro.

---

## 107. Versionamento semântico

Mudanças de significado deverão possuir versão e processo de migração.

---

## 108. Compatibilidade

A compatibilidade deverá ser avaliada antes de consumidores utilizarem nova versão.

---

## 109. Qualidade de dados

Qualidade é a adequação do dado para determinada finalidade.

Não existe qualidade absoluta independente do uso.

---

## 110. Dimensões de qualidade

Poderão incluir:

- exatidão;
- completude;
- consistência;
- atualidade;
- validade;
- unicidade;
- integridade;
- acessibilidade;
- representatividade;
- rastreabilidade.

---

## 111. Exatidão

Representa a proximidade entre o dado e a realidade que busca representar.

---

## 112. Precisão

Representa o nível de detalhe ou resolução.

Maior precisão numérica não garantirá maior exatidão.

---

## 113. Completude

Avalia se os elementos necessários estão presentes.

Ausência deverá ser distinguida de valor zero, falso ou inexistente.

---

## 114. Consistência

Avalia se dados relacionados mantêm compatibilidade entre sistemas, tempos e representações.

---

## 115. Atualidade

Avalia se o dado está suficientemente atualizado para a finalidade.

---

## 116. Validade

Avalia aderência a regras, formatos, domínios e restrições.

---

## 117. Unicidade

Avalia duplicidades indevidas.

Duas representações semelhantes não deverão ser fundidas sem evidência.

---

## 118. Integridade referencial

Relações deverão apontar para entidades válidas ou indicar explicitamente ausência e histórico.

---

## 119. Representatividade

Avalia se os dados refletem adequadamente as pessoas, territórios, situações ou eventos relevantes.

---

## 120. Qualidade contextual

Um dado poderá ser correto, mas inadequado para determinada decisão por:

- finalidade;
- tempo;
- território;
- população;
- escala;
- método;
- autoridade.

---

## 121. Perfil de qualidade

Cada produto ou conjunto deverá declarar requisitos mínimos por dimensão.

---

## 122. Regra de qualidade

A regra deverá indicar:

- objeto;
- condição;
- finalidade;
- severidade;
- responsável;
- tratamento;
- evidência.

---

## 123. Validação na entrada

Dados deverão ser validados o mais próximo possível da origem.

---

## 124. Validação estrutural

Deverá verificar:

- tipo;
- formato;
- tamanho;
- obrigatoriedade;
- domínio;
- codificação;
- esquema.

---

## 125. Validação semântica

Deverá verificar se o significado é coerente com:

- contexto;
- entidade;
- relação;
- estado;
- regra;
- missão.

---

## 126. Validação cruzada

Poderá comparar fontes independentes para identificar:

- conflito;
- erro;
- fraude;
- atraso;
- divergência;
- duplicidade.

---

## 127. Validação humana

Deverá ser utilizada quando o contexto, impacto ou ambiguidade exigirem julgamento qualificado.

---

## 128. Validação assistida por agente

Agentes poderão localizar padrões e anomalias, mas não deverão corrigir silenciosamente dados de alto impacto.

---

## 129. Dado inválido

Deverá possuir tratamento como:

- rejeição;
- isolamento;
- correção;
- solicitação de complemento;
- uso limitado;
- registro;
- escalonamento.

---

## 130. Quarentena

Dados suspeitos deverão ser separados para impedir propagação ou utilização indevida.

---

## 131. Dado incompleto

A ausência deverá ser representada explicitamente.

O sistema não deverá inventar valor para satisfazer estrutura.

---

## 132. Dado conflitante

Fontes divergentes deverão permanecer visíveis até reconciliação legítima.

---

## 133. Dado duplicado

A deduplicação deverá preservar:

- origem;
- histórico;
- vínculos;
- evidências;
- possibilidade de desfazer a fusão.

---

## 134. Dado desatualizado

Deverá ser marcado, atualizado ou restringido conforme impacto.

---

## 135. Dado corrompido

A corrupção deverá gerar:

- detecção;
- isolamento;
- identificação de alcance;
- recuperação;
- reconciliação;
- investigação;
- evidência.

---

## 136. Correção de dados

A correção deverá registrar:

- valor anterior;
- novo valor;
- motivo;
- fonte;
- responsável;
- momento;
- sistemas afetados.

---

## 137. Correção não destrutiva

Registros históricos relevantes não deverão ser apagados silenciosamente.

---

## 138. Enriquecimento

O enriquecimento adiciona contexto ou atributos provenientes de outras fontes.

Deverá preservar:

- finalidade;
- proveniência;
- classificação;
- qualidade;
- compatibilidade;
- direitos.

---

## 139. Transformação

Toda transformação deverá declarar:

- entradas;
- regra;
- versão;
- saída;
- perda;
- responsável;
- evidência;
- possibilidade de reprodução.

---

## 140. Normalização

Padroniza formato ou representação sem alterar o significado pretendido.

---

## 141. Padronização

Define convenções comuns para permitir consistência e interoperabilidade.

---

## 142. Agregação

Combina dados em representação resumida.

Deverá considerar perda de contexto e possibilidade de reidentificação.

---

## 143. Desagregação

Quando necessária, deverá evitar inferir detalhes inexistentes no dado agregado.

---

## 144. Filtragem

Deverá preservar critério e registrar quais elementos foram incluídos ou excluídos quando isso afetar decisão.

---

## 145. Conversão

Mudanças de formato, unidade ou codificação deverão ser verificadas para evitar perda ou distorção.

---

## 146. Anonimização

Deverá considerar risco real de reidentificação por combinação com outros conjuntos.

---

## 147. Pseudonimização

Deverá proteger a relação entre pseudônimo e identidade, permitindo reversão somente quando autorizada.

---

## 148. Mascaramento

Deverá ocultar partes desnecessárias conforme usuário, função, ambiente ou finalidade.

---

## 149. Tokenização

Deverá substituir valores sensíveis por referências controladas quando adequado.

---

## 150. Síntese por inteligência artificial

Resumos produzidos por agentes deverão preservar:

- fontes;
- fatos;
- divergências;
- incertezas;
- decisões;
- pendências;
- contexto;
- limitações.

---

## 151. Alucinação de dados

Ocorre quando sistema produz informação inexistente ou não sustentada e a apresenta como dado real.

Deverá ser tratada como risco operacional.

---

## 152. Preenchimento inferencial

Inferências utilizadas para completar lacunas deverão ser marcadas e não confundidas com dados fornecidos ou observados.

---

## 153. Qualidade na origem

A organização deverá melhorar processos que produzem dados ruins, e não depender apenas de correções posteriores.

---

## 154. Qualidade compartilhada

Produtores e consumidores deverão compartilhar responsabilidade pela identificação e pelo tratamento de problemas.

---

## 155. Acordo de qualidade

Poderá estabelecer:

- dimensões;
- limites;
- métodos;
- frequência;
- responsáveis;
- tratamento;
- escalonamento;
- evidências.

---

## 156. Incidente de qualidade

Problemas de dados deverão ser tratados como incidentes quando puderem afetar:

- direitos;
- decisões;
- segurança;
- finanças;
- continuidade;
- confiança;
- missões;
- pessoas.

---

## 157. Impacto da qualidade

A análise deverá localizar:

- consumidores;
- relatórios;
- decisões;
- agentes;
- automações;
- organizações;
- pessoas;
- resultados afetados.

---

## 158. Observabilidade de qualidade

Deverá acompanhar:

- falhas;
- tendências;
- quebras;
- atraso;
- volume;
- esquema;
- anomalias;
- reconciliações;
- correções.

---

## 159. Perfilamento de dados

O perfilamento poderá identificar padrões, distribuições, ausências e anomalias.

Deverá respeitar finalidade e privacidade.

---

## 160. Indicador de qualidade

Indicadores deverão representar adequação real ao uso e não apenas conformidade estrutural.

---

## 161. Limite de qualidade

Ao ultrapassar limite, a operação deverá:

- alertar;
- restringir consumo;
- colocar em quarentena;
- reduzir autonomia;
- interromper pipeline;
- acionar responsável;
- reconciliar.

---

## 162. Selo de qualidade

Sinais visuais poderão indicar:

- validado;
- provisório;
- incompleto;
- contestado;
- desatualizado;
- sintético;
- simulado;
- em investigação.

---

## 163. Confiança no dado

A confiança deverá ser derivada de:

- proveniência;
- qualidade;
- integridade;
- atualidade;
- validação;
- autoridade;
- contexto;
- histórico.

---

## 164. Confiança não é verdade absoluta

Dados altamente confiáveis ainda poderão possuir erro ou limitação.

---

## 165. Dado contestado

Quando pessoa ou organização contestar informação, o estado deverá ser preservado e encaminhado para revisão.

---

## 166. Direito de correção

A arquitetura deverá permitir corrigir dados pessoais ou institucionais conforme direitos e obrigações aplicáveis.

---

## 167. Propagação da correção

Correções deverão alcançar:

- sistemas derivados;
- caches;
- relatórios;
- agentes;
- integrações;
- parceiros;
- decisões ainda revisáveis.

---

## 168. Responsabilidade por decisão baseada em dados

A organização não deverá atribuir ao dado a responsabilidade por decisão humana, automática ou institucional.

---

## 169. Dados e autonomia

A disponibilidade de mais dados não deverá ampliar automaticamente a autoridade de agentes, sistemas ou pessoas.

---

## 170. Dados e dignidade

Nenhum perfil, pontuação ou previsão deverá representar a totalidade de uma pessoa.

---

## 171. Dados e proporcionalidade

A coleta e utilização deverão ser proporcionais à finalidade e ao impacto.

---

## 172. Dados e transparência

Pessoas e organizações deverão compreender, quando aplicável:

- quais dados existem;
- por que são utilizados;
- de onde vieram;
- com quem circulam;
- por quanto tempo permanecem;
- como corrigir;
- quem responde.

---

## 173. Dados e memória

A memória deverá preservar continuidade sem transformar toda interação em retenção permanente.

---

## 174. Dados e aprendizagem

Dados poderão apoiar aprendizagem institucional, mas não deverão ser reutilizados silenciosamente para finalidade incompatível.

---

## 175. Invariante de representação

O dado deverá permanecer reconhecido como representação contextual e parcial da realidade.

---

## 176. Invariante de finalidade

Nenhum dado deverá ser coletado, integrado ou utilizado sem finalidade legítima e reconhecível.

---

## 177. Invariante de proveniência

Dados relevantes deverão possuir origem, história e transformações rastreáveis.

---

## 178. Invariante de classificação

A proteção deverá acompanhar sensibilidade, criticidade, obrigação e impacto.

---

## 179. Invariante de responsabilidade

Todo conjunto relevante deverá possuir proprietário, produtores, custodiante e consumidores reconhecíveis.

---

## 180. Invariante de qualidade

A qualidade deverá ser avaliada em relação à finalidade e ao contexto de uso.

---

## 181. Invariante de verdade

Observação, declaração, inferência, hipótese, síntese, dado sintético e simulação deverão permanecer distinguíveis.

---

## 182. Invariante de correção

Correções deverão preservar histórico, motivo, autoria, momento e propagação.

---

## 183. Invariante de dignidade

Pessoas não deverão ser reduzidas a perfis, pontuações, previsões ou categorias automatizadas.

---

## 184. Invariante de contestação

Dados capazes de afetar pessoas deverão possuir mecanismos proporcionais de consulta, correção e revisão.

---

## 185. Invariante de continuidade

Dados essenciais deverão possuir disponibilidade, integridade, memória e recuperabilidade proporcionais à missão.

---

## 186. Resultado do primeiro lote

Com este lote, a Engenharia Oficial estabelece que a operação de dados deverá:

- distinguir dado, informação, conhecimento e evidência;
- reconhecer diferentes naturezas de dados;
- classificar;
- atribuir responsabilidades;
- preservar proveniência;
- organizar semântica;
- avaliar qualidade;
- validar;
- corrigir;
- impedir propagação de erro;
- proteger dignidade;
- sustentar decisões responsáveis;
- preservar continuidade.

O próximo lote aprofundará:

- arquiteturas de dados;
- bancos;
- armazenamento;
- arquivos;
- eventos;
- mensagens;
- streams;
- filas;
- pipelines;
- processamento;
- transações;
- estados;
- movimentação;
- observabilidade estrutural.

---

# Lote 2 — Arquiteturas, Armazenamento, Bancos, Eventos, Mensagens, Pipelines e Estados

## 187. Arquitetura de dados

A arquitetura de dados organiza:

- fontes;
- modelos;
- armazenamentos;
- fluxos;
- transformações;
- integrações;
- produtos;
- consumidores;
- controles;
- responsabilidades;
- ciclos de vida.

Deverá ser orientada pelo propósito da operação, e não apenas pelas tecnologias disponíveis.

---

## 188. Princípios arquiteturais

A arquitetura deverá buscar:

- clareza;
- modularidade;
- interoperabilidade;
- segurança;
- rastreabilidade;
- recuperabilidade;
- portabilidade;
- escalabilidade;
- responsabilidade;
- evolução governada.

---

## 189. Arquitetura como representação

Diagramas e modelos deverão representar o estado real ou declarar explicitamente quando representam estado:

- proposto;
- planejado;
- experimental;
- simulado;
- descontinuado;
- histórico.

---

## 190. Arquitetura lógica

A arquitetura lógica deverá demonstrar:

- entidades;
- relações;
- domínios;
- produtos;
- eventos;
- contratos;
- consumidores;
- regras;
- fluxos.

---

## 191. Arquitetura física

Deverá demonstrar:

- bancos;
- arquivos;
- filas;
- streams;
- serviços;
- regiões;
- ambientes;
- redes;
- fornecedores;
- backups;
- réplicas.

---

## 192. Arquitetura institucional

Deverá demonstrar:

- proprietários;
- organizações;
- autoridades;
- responsabilidades;
- contratos;
- fronteiras;
- obrigações;
- custódias.

---

## 193. Arquitetura temporal

Deverá representar como dados, eventos e estados mudam ao longo do tempo.

---

## 194. Arquitetura centralizada

A centralização poderá facilitar:

- consistência;
- administração;
- consulta;
- auditoria;
- padronização.

Também poderá aumentar:

- concentração;
- impacto de falha;
- dependência;
- risco de acesso;
- perda de autonomia.

---

## 195. Arquitetura distribuída

Poderá ampliar:

- disponibilidade;
- autonomia local;
- escalabilidade;
- proximidade;
- resiliência.

Exigirá tratamento de:

- consistência;
- sincronização;
- conflitos;
- identidade;
- autoridade;
- observabilidade;
- responsabilidade.

---

## 196. Arquitetura federada

Domínios autônomos poderão compartilhar dados e contratos sem transferir toda a realidade para repositório central.

---

## 197. Arquitetura híbrida

A Plataforma UNO poderá combinar componentes:

- locais;
- centrais;
- federados;
- em nuvem;
- em borda;
- temporários;
- históricos.

---

## 198. Arquitetura orientada a domínio

Cada domínio deverá responder pelo significado e pela qualidade de seus dados.

A descentralização técnica não deverá eliminar padrões institucionais comuns.

---

## 199. Arquitetura orientada a eventos

Mudanças relevantes poderão ser comunicadas por eventos, permitindo que consumidores reajam sem dependência direta do produtor.

---

## 200. Arquitetura orientada a serviços

Serviços deverão expor capacidades e contratos compreensíveis, preservando limites de domínio.

---

## 201. Arquitetura de produtos de dados

Produtos deverão possuir:

- propósito;
- proprietário;
- contrato;
- usuários;
- qualidade;
- suporte;
- segurança;
- documentação;
- observabilidade;
- ciclo de vida.

---

## 202. Fonte única de verdade

A expressão deverá indicar uma fonte autoritativa para determinado conceito e escopo.

Não deverá significar que toda a realidade precisa existir em um único banco.

---

## 203. Fonte autoritativa distribuída

Diferentes domínios poderão ser autoridades sobre atributos distintos da mesma entidade.

---

## 204. Cópia de dados

Toda cópia deverá possuir:

- finalidade;
- origem;
- responsável;
- sincronização;
- classificação;
- retenção;
- atualização;
- destinação.

---

## 205. Cópia descontrolada

Cópias não governadas poderão produzir:

- exposição;
- inconsistência;
- dado desatualizado;
- retenção excessiva;
- perda de proveniência;
- dificuldade de correção.

---

## 206. Armazenamento

Armazenamento é a capacidade de preservar dados por determinado período e finalidade.

---

## 207. Critérios de armazenamento

A escolha deverá considerar:

- estrutura;
- volume;
- velocidade;
- acesso;
- consistência;
- retenção;
- segurança;
- custo;
- disponibilidade;
- recuperabilidade;
- portabilidade.

---

## 208. Banco relacional

Será adequado quando houver necessidade de:

- esquema;
- relações;
- integridade;
- transações;
- consistência;
- consultas estruturadas.

---

## 209. Banco documental

Poderá ser adequado para documentos ou estruturas flexíveis, preservando validação, versão e semântica.

---

## 210. Banco chave-valor

Poderá apoiar acessos rápidos por chave, mas não deverá ocultar significado, ciclo de vida e responsabilidade.

---

## 211. Banco de séries temporais

Deverá representar medições ao longo do tempo com:

- origem;
- unidade;
- precisão;
- frequência;
- retenção;
- agregação;
- qualidade.

---

## 212. Banco de grafos

Poderá representar relações entre:

- pessoas;
- organizações;
- capacidades;
- missões;
- recursos;
- dependências;
- eventos.

O acesso deverá considerar o risco de inferências sensíveis.

---

## 213. Banco vetorial

Poderá armazenar representações destinadas a busca por similaridade.

Deverá preservar relação com:

- fonte;
- versão;
- contexto;
- classificação;
- permissões;
- atualização;
- eliminação.

---

## 214. Data warehouse

Poderá consolidar dados estruturados para análise institucional.

Deverá preservar:

- linhagem;
- histórico;
- qualidade;
- classificação;
- acesso;
- temporalidade.

---

## 215. Data lake

Poderá armazenar dados em formatos diversos.

Não deverá se transformar em depósito sem proprietário, finalidade, catálogo ou retenção.

---

## 216. Lakehouse

Poderá combinar flexibilidade e governança, desde que contratos, qualidade e responsabilidades permaneçam explícitos.

---

## 217. Armazenamento de objetos

Arquivos e objetos deverão possuir:

- identificação;
- classificação;
- metadados;
- integridade;
- versão;
- acesso;
- retenção;
- ciclo de vida.

---

## 218. Sistema de arquivos

Deverá proteger:

- caminhos;
- permissões;
- nomes;
- integridade;
- concorrência;
- versões;
- backup;
- eliminação.

---

## 219. Planilha

Planilhas poderão apoiar operações limitadas, mas deverão ser governadas quanto a:

- autoria;
- fórmula;
- versão;
- acesso;
- validação;
- cópias;
- dependência humana;
- continuidade.

---

## 220. Documento como base operacional

Documentos utilizados como fontes deverão possuir:

- identidade;
- versão;
- proprietário;
- validade;
- classificação;
- acesso;
- histórico;
- estado.

---

## 221. Repositório documental

Deverá permitir:

- organização;
- busca;
- versão;
- permissão;
- retenção;
- auditoria;
- restauração;
- compartilhamento governado.

---

## 222. Índice

Índices deverão ser tratados como representações derivadas.

A eliminação ou correção do dado original deverá alcançar os índices relacionados.

---

## 223. Cache

Cache é cópia temporária utilizada para desempenho ou continuidade.

Deverá possuir:

- validade;
- invalidação;
- classificação;
- limite;
- segurança;
- comportamento diante de falha.

---

## 224. Cache desatualizado

O uso de dado antigo deverá ser explicitamente permitido apenas quando compatível com a finalidade.

---

## 225. Replicação

A replicação mantém cópias em diferentes componentes ou locais.

Deverá considerar:

- atraso;
- consistência;
- segurança;
- falha;
- ordem;
- conflito;
- recuperação;
- custo.

---

## 226. Réplica de leitura

Deverá indicar quando poderá apresentar estado atrasado em relação à fonte principal.

---

## 227. Replicação síncrona

Confirma a operação conforme política somente depois da atualização das réplicas exigidas.

Poderá aumentar consistência e latência.

---

## 228. Replicação assíncrona

Permite atraso entre cópias e exige tratamento de:

- perda;
- ordem;
- repetição;
- divergência;
- leitura desatualizada.

---

## 229. Particionamento

Dados poderão ser divididos por:

- entidade;
- território;
- tempo;
- organização;
- chave;
- carga;
- sensibilidade.

A divisão não deverá romper integridade, direitos ou rastreabilidade.

---

## 230. Fragmentação

Distribuir partes de um conjunto poderá reduzir exposição, mas aumentará complexidade de reconstrução e continuidade.

---

## 231. Região de armazenamento

A localização deverá considerar:

- legislação;
- latência;
- disponibilidade;
- soberania;
- desastre;
- custo;
- fornecedor;
- transferência;
- suporte.

---

## 232. Armazenamento local

Deverá considerar:

- acesso físico;
- energia;
- conectividade;
- dispositivo;
- backup;
- sincronização;
- perda;
- manutenção.

---

## 233. Armazenamento em nuvem

Deverá considerar:

- responsabilidade compartilhada;
- região;
- acesso;
- criptografia;
- disponibilidade;
- exportação;
- dependência;
- encerramento.

---

## 234. Armazenamento offline

Poderá proteger contra determinadas ameaças e apoiar continuidade.

Deverá possuir procedimento de:

- criação;
- atualização;
- guarda;
- teste;
- acesso;
- recuperação;
- descarte.

---

## 235. Criptografia em repouso

Deverá proteger dados armazenados conforme classificação e risco, com gestão adequada de chaves.

---

## 236. Gestão de chaves

Deverá incluir:

- geração;
- distribuição;
- uso;
- armazenamento;
- rotação;
- revogação;
- recuperação;
- destruição.

---

## 237. Integridade do armazenamento

Deverão existir mecanismos capazes de detectar:

- corrupção;
- alteração;
- perda;
- truncamento;
- substituição;
- inconsistência.

---

## 238. Capacidade de armazenamento

Deverá ser planejada conforme:

- crescimento;
- retenção;
- cópias;
- índices;
- logs;
- backups;
- picos;
- contingência;
- custo.

---

## 239. Saturação de armazenamento

Ao se aproximar de limites, deverão ser acionados:

- alertas;
- expansão;
- redução governada;
- arquivamento;
- priorização;
- bloqueio seguro;
- contingência.

---

## 240. Falha por armazenamento cheio

Sistemas não deverão corromper dados ou declarar sucesso quando a gravação não puder ser concluída.

---

## 241. Ciclo de vida do armazenamento

Deverá definir:

- criação;
- uso;
- expansão;
- manutenção;
- migração;
- arquivamento;
- desativação;
- eliminação;
- comprovação.

---

## 242. Migração de armazenamento

Deverá preservar:

- integridade;
- completude;
- ordem;
- classificação;
- permissões;
- histórico;
- evidências;
- possibilidade de retorno.

---

## 243. Banco de dados

Todo banco deverá possuir:

- identidade;
- proprietário;
- finalidade;
- esquema;
- classificação;
- acesso;
- backup;
- observabilidade;
- continuidade;
- ciclo de vida.

---

## 244. Esquema

O esquema deverá definir estrutura, tipos, relações, restrições e significado operacional.

---

## 245. Evolução de esquema

Mudanças deverão ser:

- versionadas;
- compatíveis ou migradas;
- testadas;
- comunicadas;
- observadas;
- reversíveis quando possível.

---

## 246. Mudança incompatível

Deverá possuir plano para:

- consumidores;
- migração;
- transição;
- dados históricos;
- comunicação;
- encerramento da versão anterior.

---

## 247. Restrição de banco

Restrições deverão proteger integridade, mas não substituir validações de negócio e contexto.

---

## 248. Chave primária

Deverá garantir identidade do registro dentro do escopo definido.

---

## 249. Chave estrangeira

Deverá preservar relações válidas ou representar explicitamente estados históricos e exceções permitidas.

---

## 250. Transação

Transação é unidade de alteração que deverá preservar propriedades definidas de consistência.

---

## 251. Atomicidade

A transação deverá ser concluída integralmente ou não produzir estado parcial indevido.

---

## 252. Consistência transacional

Cada transação deverá levar o sistema de um estado válido a outro estado válido conforme regras conhecidas.

---

## 253. Isolamento transacional

Operações simultâneas não deverão interferir de maneira incompatível com os requisitos da missão.

---

## 254. Durabilidade

Uma operação confirmada deverá permanecer registrada conforme o nível de garantia estabelecido.

---

## 255. Transação distribuída

Quando atravessar serviços, deverá considerar:

- falha parcial;
- tempo;
- coordenação;
- compensação;
- repetição;
- evidência;
- reconciliação.

---

## 256. Saga

Uma saga organiza sequência de transações locais com ações compensatórias.

Deverá registrar:

- etapas;
- estados;
- dependências;
- compensações;
- falhas;
- resultado final.

---

## 257. Compensação

A compensação não apaga a ação anterior.

Deverá preservar história e efeitos que não puderam ser revertidos.

---

## 258. Concorrência

A arquitetura deverá controlar alterações simultâneas sobre o mesmo estado.

---

## 259. Bloqueio pessimista

Impede concorrência durante determinada operação.

Deverá possuir limite, proprietário e recuperação diante de falha.

---

## 260. Controle otimista

Permite concorrência e detecta conflito por versão ou condição antes da confirmação.

---

## 261. Deadlock

Bloqueios circulares deverão possuir mecanismos de:

- detecção;
- interrupção;
- repetição;
- evidência;
- prevenção;
- acompanhamento.

---

## 262. Estado parcial

A operação deverá reconhecer quando parte das alterações foi realizada.

Não deverá declarar conclusão integral.

---

## 263. Confirmação de gravação

O produtor deverá distinguir:

- solicitação recebida;
- validação concluída;
- gravação iniciada;
- gravação confirmada;
- replicação concluída;
- resultado verificado.

---

## 264. Falsa confirmação

A afirmação de sucesso sem estado persistido e verificável deverá ser tratada como falha grave.

---

## 265. Estado operacional

O estado deverá representar condições atuais ou históricas de uma entidade.

---

## 266. Máquina de estados

Deverá definir:

- estados;
- transições;
- eventos;
- pré-condições;
- autoridade;
- efeitos;
- estados finais;
- exceções.

---

## 267. Transição válida

Somente deverá ocorrer quando:

- origem for conhecida;
- condição for atendida;
- autoridade existir;
- evento for válido;
- resultado puder ser registrado.

---

## 268. Transição inválida

Deverá ser rejeitada ou encaminhada para tratamento de exceção.

---

## 269. Estado desconhecido

Quando não for possível determinar o estado, o sistema deverá representá-lo como desconhecido, e não inventar condição padrão.

---

## 270. Estado pendente

Deverá representar operação iniciada, mas ainda não confirmada.

---

## 271. Estado contestado

Deverá indicar divergência legítima sobre o valor, resultado ou condição registrada.

---

## 272. Estado degradado

Representa operação com capacidade, qualidade ou contexto reduzidos.

---

## 273. Estado terminal

Estados finais deverão declarar se permitem:

- reabertura;
- correção;
- compensação;
- recurso;
- arquivamento;
- nova missão relacionada.

---

## 274. Histórico de estado

Mudanças deverão preservar:

- estado anterior;
- novo estado;
- evento;
- autoridade;
- momento;
- razão;
- evidência.

---

## 275. Event sourcing

O estado poderá ser reconstruído a partir de eventos persistidos.

Exigirá:

- ordenação;
- identidade;
- imutabilidade proporcional;
- versão;
- projeção;
- correção;
- replay seguro.

---

## 276. Projeção

Projeções transformam eventos em visões de consulta.

Deverão possuir:

- versão;
- fonte;
- estado;
- atraso;
- reconstrução;
- validação.

---

## 277. Snapshot

Snapshots poderão reduzir o custo de reconstrução.

Deverão preservar relação com os eventos e indicar o ponto temporal representado.

---

## 278. Replay

A reprodução de eventos deverá impedir efeitos externos duplicados ou não autorizados.

---

## 279. Evento operacional

Todo evento deverá possuir contrato compreensível por produtores e consumidores.

---

## 280. Identidade do evento

Deverá permitir detectar:

- duplicidade;
- correlação;
- ordem;
- origem;
- processamento;
- reenvio;
- auditoria.

---

## 281. Tipo de evento

Deverá representar mudança ocorrida, e não instrução ambígua.

Exemplo conceitual:

- “pagamento confirmado” representa fato registrado;
- “confirmar pagamento” representa comando ou solicitação.

---

## 282. Evento de domínio

Representa mudança relevante dentro de determinado domínio institucional.

---

## 283. Evento técnico

Representa condição de infraestrutura, aplicação ou fluxo.

Não deverá substituir evento de negócio quando o significado institucional for necessário.

---

## 284. Evento imutável

Um evento registrado não deverá ser alterado silenciosamente.

Correções deverão ocorrer por novo evento relacionado.

---

## 285. Evento tardio

Deverá ser processado conforme política de:

- janela;
- ordenação;
- estado atual;
- reconciliação;
- correção histórica;
- impacto.

---

## 286. Evento fora de ordem

A arquitetura deverá reconhecer que eventos poderão chegar em sequência diferente da ocorrência.

---

## 287. Evento duplicado

Consumidores deverão possuir mecanismos de idempotência ou deduplicação.

---

## 288. Evento perdido

Deverão existir mecanismos de:

- detecção;
- repetição;
- reconciliação;
- recuperação;
- alerta;
- compensação.

---

## 289. Evento inválido

Deverá ser isolado, registrado e encaminhado para tratamento.

---

## 290. Evento venenoso

Um evento que falha repetidamente não deverá bloquear todo o fluxo.

Deverá ser movido para área de análise controlada.

---

## 291. Mensageria

A mensageria deverá desacoplar participantes sem eliminar contratos, responsabilidade e observabilidade.

---

## 292. Produtor

O produtor deverá garantir:

- evento válido;
- identidade;
- contrato;
- classificação;
- contexto;
- evidência de publicação.

---

## 293. Consumidor

O consumidor deverá:

- autenticar origem;
- validar contrato;
- respeitar finalidade;
- processar com idempotência;
- registrar resultado;
- tratar falhas.

---

## 294. Broker

O intermediador deverá possuir:

- identidade;
- disponibilidade;
- persistência;
- acesso;
- limite;
- observabilidade;
- continuidade;
- suporte.

---

## 295. Tópico

Deverá possuir:

- finalidade;
- produtores autorizados;
- consumidores autorizados;
- contrato;
- retenção;
- classificação;
- proprietário.

---

## 296. Fila

A fila organiza entrega de mensagens para processamento.

Deverá possuir política de:

- ordem;
- repetição;
- visibilidade;
- retenção;
- falha;
- descarte;
- escalonamento.

---

## 297. Confirmação de mensagem

O consumidor deverá confirmar somente após condição definida de processamento.

---

## 298. Entrega pelo menos uma vez

Poderá produzir duplicidades e exigirá consumidores idempotentes.

---

## 299. Entrega no máximo uma vez

Poderá perder mensagens e somente será adequada quando a perda for aceitável.

---

## 300. Exatamente uma vez

Deverá ser tratada como garantia limitada ao escopo técnico definido, não como propriedade universal de toda a operação distribuída.

---

## 301. Fila de mensagens mortas

Mensagens não processáveis deverão ser preservadas para:

- análise;
- correção;
- repetição;
- reconciliação;
- aprendizagem.

---

## 302. Retentativa

Deverá considerar:

- tipo de falha;
- intervalo;
- limite;
- idempotência;
- saturação;
- prioridade;
- impacto;
- escalonamento.

---

## 303. Backoff

O intervalo progressivo deverá reduzir pressão sobre dependências em falha.

---

## 304. Circuit breaker

Deverá interromper chamadas quando a dependência apresentar falha persistente.

---

## 305. Timeout

Toda operação remota deverá possuir limite temporal e tratamento de resultado incerto.

---

## 306. Resultado incerto

Quando não for possível saber se a operação ocorreu, o sistema deverá reconciliar antes de repetir ação de impacto.

---

## 307. Stream de eventos

Deverá permitir processamento contínuo com:

- identidade;
- ordenação;
- partição;
- retenção;
- checkpoint;
- replay;
- escala;
- observabilidade.

---

## 308. Partição do stream

A chave de partição deverá preservar a ordem necessária dentro do escopo correto.

---

## 309. Offset

O consumidor deverá registrar o ponto processado de maneira segura e recuperável.

---

## 310. Checkpoint

Deverá permitir retomada sem perda ou duplicação indevida.

---

## 311. Janela temporal

Processamentos poderão agrupar eventos por:

- tempo fixo;
- sessão;
- atividade;
- condição;
- atraso permitido.

---

## 312. Watermark

Poderá representar o avanço temporal esperado e orientar tratamento de eventos tardios.

---

## 313. Processamento em lote

Deverá possuir:

- entrada;
- versão;
- período;
- estado;
- etapas;
- saída;
- validação;
- evidência;
- recuperação.

---

## 314. Processamento em tempo real

Deverá ser utilizado quando o valor ou o risco justificar a complexidade de resposta imediata.

---

## 315. Tempo quase real

Poderá oferecer equilíbrio entre:

- latência;
- custo;
- qualidade;
- consistência;
- complexidade;
- recuperação.

---

## 316. Pipeline de dados

O pipeline deverá ser tratado como capacidade operacional com:

- identidade;
- proprietário;
- finalidade;
- fontes;
- etapas;
- contratos;
- controles;
- observabilidade;
- ciclo de vida.

---

## 317. Etapa do pipeline

Cada etapa deverá possuir:

- entrada;
- transformação;
- saída;
- versão;
- estado;
- erro;
- evidência;
- responsável.

---

## 318. Orquestração de pipeline

A orquestração deverá coordenar:

- dependências;
- sequência;
- repetição;
- estados;
- limites;
- falhas;
- recuperação;
- notificações.

---

## 319. Coreografia de dados

Etapas poderão reagir a eventos sem coordenador central.

Exigirão contratos, observabilidade e reconciliação.

---

## 320. Pipeline idempotente

Reexecutar uma etapa não deverá produzir duplicidade ou corrupção indevida.

---

## 321. Pipeline incremental

Deverá processar somente mudanças relevantes, preservando:

- marcadores;
- ordem;
- correções;
- exclusões;
- histórico;
- retomada.

---

## 322. Carga completa

A reconstrução total deverá possuir capacidade, tempo, isolamento e validação adequados.

---

## 323. Extração

A extração deverá respeitar:

- finalidade;
- autoridade;
- contrato;
- classificação;
- volume;
- janela;
- impacto na fonte.

---

## 324. Transformação

Deverá ser reproduzível e versionada.

---

## 325. Carga

A gravação no destino deverá validar:

- esquema;
- integridade;
- duplicidade;
- volume;
- estado;
- confirmação;
- reconciliação.

---

## 326. ETL

A transformação ocorre antes da carga principal no destino.

Deverá preservar dados brutos quando necessário e legítimo.

---

## 327. ELT

A transformação ocorre depois da carga.

Deverá proteger o acesso ao conteúdo bruto e impedir uso não governado.

---

## 328. Pipeline reversível

Quando possível, mudanças deverão poder ser desfeitas ou compensadas com histórico preservado.

---

## 329. Pipeline em falha

Ao falhar, deverá:

- interromper propagação inadequada;
- preservar entradas;
- registrar etapa;
- alertar;
- permitir retomada;
- impedir falsa conclusão;
- reconciliar saídas parciais.

---

## 330. Quarentena de fluxo

Dados suspeitos deverão ser separados antes de alcançar consumidores e decisões.

---

## 331. Reprocessamento

Deverá possuir:

- motivo;
- escopo;
- versão;
- impacto;
- idempotência;
- janela;
- aprovação;
- validação;
- comunicação.

---

## 332. Backfill

O preenchimento histórico deverá considerar:

- fonte;
- período;
- ordem;
- volume;
- consumidores;
- efeitos;
- duplicidade;
- qualidade.

---

## 333. Correção retroativa

Alterações históricas deverão indicar quais relatórios, decisões e produtos poderão ser afetados.

---

## 334. Reconstrução de produto

Deverá ser possível reconstruir produtos críticos a partir de fontes e transformações preservadas, quando tecnicamente e institucionalmente requerido.

---

## 335. Arquivo intermediário

Artefatos temporários deverão possuir:

- finalidade;
- classificação;
- acesso;
- duração;
- limpeza;
- responsável;
- proteção.

---

## 336. Área temporária

Não deverá se transformar em armazenamento permanente não governado.

---

## 337. Dados em trânsito

A movimentação deverá proteger:

- identidade;
- integridade;
- confidencialidade;
- origem;
- destino;
- temporalidade;
- resistência à repetição.

---

## 338. Canal de dados

Deverá possuir:

- protocolo;
- autenticação;
- autorização;
- criptografia quando necessária;
- limite;
- observabilidade;
- continuidade.

---

## 339. Compressão

Deverá preservar integridade e evitar formatos incompatíveis com segurança, inspeção e recuperação.

---

## 340. Fragmentação de transferência

Partes deverão poder ser:

- identificadas;
- ordenadas;
- validadas;
- recompostas;
- detectadas quando ausentes.

---

## 341. Transferência em massa

Deverá possuir controles para:

- volume;
- janela;
- impacto;
- destinatário;
- proteção;
- confirmação;
- interrupção;
- retomada.

---

## 342. Exportação

Toda exportação deverá registrar:

- solicitante;
- finalidade;
- conteúdo;
- classificação;
- destinatário;
- momento;
- autorização;
- proteção;
- destinação.

---

## 343. Importação

Deverá validar:

- origem;
- formato;
- conteúdo;
- segurança;
- duplicidade;
- qualidade;
- classificação;
- contrato;
- impacto.

---

## 344. Sincronização

A sincronização deverá definir:

- direção;
- fonte;
- destino;
- frequência;
- autoridade;
- conflito;
- exclusão;
- retomada;
- evidência.

---

## 345. Sincronização unidirecional

Uma fonte deverá ser reconhecida como autoridade para o fluxo definido.

---

## 346. Sincronização bidirecional

Exigirá regras explícitas para:

- conflito;
- ordem;
- exclusão;
- duplicidade;
- autoridade;
- estado offline;
- reconciliação.

---

## 347. Sincronização offline

Deverá preservar alterações locais com:

- identidade;
- momento;
- versão;
- contexto;
- ordem;
- conflito;
- retomada segura.

---

## 348. Conflito de sincronização

Não deverá ser resolvido apenas pelo último valor quando essa escolha puder apagar autoridade, contexto ou história relevante.

---

## 349. Exclusão sincronizada

A exclusão deverá distinguir:

- remoção lógica;
- remoção física;
- revogação;
- expiração;
- obrigação de retenção;
- propagação;
- restauração.

---

## 350. Tombstone

Um marcador de exclusão poderá impedir que dado removido reapareça durante sincronização.

---

## 351. Consistência

A arquitetura deverá definir o nível de consistência necessário para cada capacidade.

---

## 352. Consistência forte

Leituras deverão refletir a última alteração confirmada dentro do escopo garantido.

---

## 353. Consistência eventual

Cópias poderão convergir depois de determinado tempo.

A interface e os consumidores deverão compreender essa possibilidade.

---

## 354. Leitura monotônica

Uma sessão não deverá observar estado mais antigo depois de já ter observado estado mais recente, quando essa garantia for necessária.

---

## 355. Escrita monotônica

Alterações de uma identidade deverão ser aplicadas em ordem compatível quando exigido.

---

## 356. Leitura após escrita

O produtor deverá conseguir observar sua alteração conforme garantia definida.

---

## 357. Disponibilidade e consistência

Em sistemas distribuídos, escolhas deverão ser feitas segundo a missão e os efeitos de estados divergentes.

---

## 358. Reconciliação estrutural

Deverá comparar:

- registros;
- contagens;
- versões;
- chaves;
- totais;
- relações;
- estados;
- eventos.

---

## 359. Reconciliação semântica

Deverá verificar se registros tecnicamente equivalentes possuem o mesmo significado.

---

## 360. Observabilidade estrutural

A arquitetura deverá observar:

- volume;
- velocidade;
- latência;
- atraso;
- esquema;
- falha;
- duplicidade;
- qualidade;
- capacidade;
- dependências.

---

## 361. Métrica de fluxo

Poderá incluir:

- entradas;
- saídas;
- taxa;
- fila;
- tempo;
- erro;
- repetição;
- descarte;
- atraso;
- custo.

---

## 362. Data freshness

Deverá indicar quanto tempo se passou desde a última atualização válida.

---

## 363. Data latency

Deverá indicar o tempo entre ocorrência, captura, processamento e disponibilização.

---

## 364. Volume esperado

Mudanças inesperadas de volume poderão indicar:

- falha;
- duplicidade;
- perda;
- fraude;
- evento legítimo;
- mudança de comportamento.

---

## 365. Quebra de esquema

Deverá produzir:

- detecção;
- bloqueio ou adaptação governada;
- alerta;
- análise de impacto;
- comunicação;
- correção;
- evidência.

---

## 366. Quebra de contrato

O consumidor não deverá receber silenciosamente dado incompatível com o contrato aprovado.

---

## 367. Estado do pipeline

Poderá incluir:

- preparado;
- executando;
- aguardando;
- concluído;
- parcial;
- falhou;
- interrompido;
- degradado;
- em recuperação;
- desativado.

---

## 368. Saúde do fluxo

Deverá considerar:

- disponibilidade;
- qualidade;
- latência;
- capacidade;
- segurança;
- integridade;
- dependências;
- recuperação.

---

## 369. Saturação do fluxo

Ao atingir limites, deverão existir mecanismos de:

- controle de entrada;
- priorização;
- fila;
- escalonamento;
- descarte governado;
- expansão;
- operação degradada.

---

## 370. Backpressure

O consumidor deverá poder sinalizar incapacidade temporária para impedir saturação descontrolada.

---

## 371. Descarte de dados

Nenhum descarte deverá ocorrer silenciosamente quando puder afetar:

- missão;
- direito;
- decisão;
- evidência;
- finanças;
- continuidade.

---

## 372. Priorização do fluxo

Dados poderão ser priorizados conforme:

- criticidade;
- urgência;
- missão;
- impacto;
- temporalidade;
- dependência;
- obrigação.

---

## 373. Fluxo crítico

Deverá possuir:

- redundância adequada;
- observabilidade;
- alerta;
- recuperação;
- procedimento;
- testes;
- proprietário;
- objetivos de serviço.

---

## 374. Fluxo degradado

Deverá informar:

- limitações;
- atraso;
- perda possível;
- qualidade;
- fontes indisponíveis;
- impacto;
- comportamento esperado.

---

## 375. Fluxo interrompido

A interrupção deverá preservar:

- entradas;
- estado;
- checkpoints;
- evidências;
- ações pendentes;
- possibilidade de retomada.

---

## 376. Retomada do fluxo

Deverá verificar:

- estado;
- versão;
- dependências;
- autoridade;
- integridade;
- duplicidade;
- eventos pendentes;
- consumidores;
- capacidade.

---

## 377. Invariante de arquitetura

A arquitetura deverá representar fontes, estados, fluxos, responsabilidades e fronteiras reais.

---

## 378. Invariante de armazenamento

Todo armazenamento deverá possuir finalidade, proprietário, classificação, proteção, capacidade e ciclo de vida.

---

## 379. Invariante de transação

A confirmação deverá corresponder a estado persistido e verificável dentro da garantia declarada.

---

## 380. Invariante de evento

Eventos deverão possuir identidade, origem, temporalidade, contrato e tratamento de repetição.

---

## 381. Invariante de mensagem

Informação, comando, recomendação, confirmação e erro deverão permanecer distinguíveis.

---

## 382. Invariante de pipeline

Cada etapa deverá possuir entrada, transformação, saída, versão, estado, evidência e responsável.

---

## 383. Invariante de reprocessamento

Reexecutar fluxo não deverá produzir duplicidade, corrupção ou efeitos externos não autorizados.

---

## 384. Invariante de sincronização

Conflitos não deverão ser resolvidos apagando silenciosamente história, autoridade ou contexto.

---

## 385. Invariante de consistência

O nível de consistência deverá ser declarado e compatível com o impacto da capacidade.

---

## 386. Invariante de observabilidade

Fluxos críticos deverão tornar visíveis atraso, qualidade, falha, capacidade, descarte, dependências e recuperação.

---

## 387. Invariante de continuidade

Dados e fluxos essenciais deverão poder ser preservados, reconstruídos, reconciliados e retomados.

---

## 388. Resultado do segundo lote

Com este lote, a Engenharia Oficial estabelece que a arquitetura de dados deverá:

- organizar domínios;
- escolher armazenamentos adequados;
- preservar estados e transações;
- governar eventos e mensagens;
- controlar filas e streams;
- tornar pipelines rastreáveis;
- permitir reprocessamento seguro;
- sincronizar sem apagar conflitos;
- declarar garantias de consistência;
- observar saúde e saturação;
- preservar retomada e continuidade.

O próximo lote aprofundará:

- integrações;
- APIs;
- contratos;
- interoperabilidade;
- conectores;
- webhooks;
- federação;
- compartilhamento;
- tradução semântica;
- sincronização entre organizações;
- fronteiras de autoridade, dados e responsabilidade.

---

# Lote 3 — Integrações, APIs, Contratos, Interoperabilidade, Sincronização e Federação

## 389. Integração operacional

Integração operacional é a relação governada que permite que sistemas, agentes, serviços, pessoas ou organizações compartilhem:

- dados;
- eventos;
- mensagens;
- estados;
- comandos;
- evidências;
- capacidades;
- resultados.

A existência de conexão técnica não será suficiente para caracterizar integração institucionalmente válida.

---

## 390. Finalidade da integração

Toda integração deverá possuir finalidade legítima e declarada.

Deverá ser possível responder:

- por que existe;
- quem participa;
- quais dados circulam;
- quais capacidades são acionadas;
- quem responde;
- quais riscos produz;
- como poderá ser interrompida;
- como será encerrada.

---

## 391. Integração como contrato

A integração deverá ser tratada como contrato entre participantes.

Esse contrato poderá possuir dimensões:

- técnicas;
- semânticas;
- operacionais;
- institucionais;
- jurídicas;
- financeiras;
- de segurança;
- de continuidade.

---

## 392. Integração não é centralização

Integrar não significa transferir todos os dados ou todas as capacidades para um único centro.

A integração deverá preservar, quando necessário:

- autonomia;
- contexto local;
- responsabilidade;
- autoridade;
- privacidade;
- continuidade;
- direito de desconexão.

---

## 393. Integração direta

Na integração direta, um participante comunica-se especificamente com outro.

Deverá considerar:

- dependência;
- acoplamento;
- versão;
- disponibilidade;
- segurança;
- continuidade;
- substituição.

---

## 394. Integração por intermediário

Um componente poderá mediar comunicação entre participantes.

O intermediário deverá possuir:

- identidade;
- proprietário;
- finalidade;
- contratos;
- disponibilidade;
- observabilidade;
- segurança;
- continuidade.

---

## 395. Integração síncrona

O solicitante aguarda uma resposta durante a operação.

Deverá possuir:

- tempo limite;
- tratamento de falha;
- resultado incerto;
- repetição segura;
- limite;
- circuito de proteção.

---

## 396. Integração assíncrona

O solicitante envia mensagem ou evento e não depende de resposta imediata.

Exigirá:

- identidade;
- persistência;
- correlação;
- confirmação;
- estado;
- repetição;
- reconciliação.

---

## 397. Integração orientada a eventos

Participantes reagem a mudanças publicadas por produtores.

O evento deverá representar fato ou estado conhecido, e não instrução oculta.

---

## 398. Integração por arquivo

Arquivos poderão ser utilizados quando compatíveis com:

- frequência;
- volume;
- segurança;
- formato;
- rastreabilidade;
- latência;
- recuperação.

---

## 399. Integração por banco compartilhado

Deverá ser evitada quando produzir acoplamento, autoridade ambígua ou alterações sem contrato.

Quando necessária, deverá possuir:

- escopo;
- acesso;
- proprietário;
- esquema;
- regras;
- auditoria;
- segregação;
- continuidade.

---

## 400. Integração por API

A API deverá expor capacidade limitada por contrato conhecido e versionado.

---

## 401. Integração por webhook

O webhook deverá ser tratado como entrega de evento ou notificação, com proteção contra:

- falsificação;
- repetição;
- atraso;
- duplicidade;
- saturação;
- indisponibilidade.

---

## 402. Integração por fila

Deverá organizar mensagens e permitir desacoplamento temporal entre participantes.

---

## 403. Integração por stream

Deverá apoiar fluxos contínuos com:

- partição;
- ordenação;
- retenção;
- replay;
- checkpoint;
- escala;
- observabilidade.

---

## 404. Integração humana

Pessoas também realizam integrações ao:

- copiar;
- interpretar;
- validar;
- encaminhar;
- confirmar;
- reconciliar;
- registrar informações.

Essas atividades deverão ser reconhecidas e governadas.

---

## 405. Integração assistida por agente

Agentes poderão:

- traduzir formatos;
- organizar contexto;
- localizar capacidades;
- preparar solicitações;
- validar respostas;
- acompanhar fluxos;
- reconhecer conflitos.

Não deverão ampliar silenciosamente finalidade ou autoridade.

---

## 406. Catálogo de integrações

A Plataforma UNO deverá manter catálogo com:

- identidade;
- finalidade;
- proprietário;
- participantes;
- contrato;
- dados;
- classificação;
- protocolo;
- autenticação;
- dependências;
- estado;
- ciclo de vida.

---

## 407. Identidade da integração

Cada integração deverá possuir identificador persistente e reconhecível em:

- configurações;
- registros;
- eventos;
- alertas;
- incidentes;
- contratos;
- painéis;
- auditorias.

---

## 408. Proprietário da integração

O proprietário deverá responder por:

- finalidade;
- contrato;
- segurança;
- qualidade;
- disponibilidade;
- mudanças;
- suporte;
- continuidade;
- encerramento.

---

## 409. Participante produtor

O produtor deverá garantir que aquilo que publica:

- possui finalidade;
- respeita contrato;
- possui proveniência;
- está classificado;
- utiliza versão válida;
- possui qualidade conhecida.

---

## 410. Participante consumidor

O consumidor deverá:

- utilizar somente para finalidade autorizada;
- validar contrato;
- proteger os dados;
- tratar falhas;
- registrar resultados;
- respeitar retenção;
- comunicar incidentes.

---

## 411. Responsabilidade compartilhada da integração

Deverá ser possível identificar quem responde por:

- origem;
- transporte;
- transformação;
- entrega;
- consumo;
- decisão;
- evidência;
- recuperação;
- reparação.

---

## 412. Fronteira da integração

Toda integração deverá reconhecer a passagem entre:

- sistemas;
- ambientes;
- domínios;
- organizações;
- jurisdições;
- autoridades;
- classificações;
- responsabilidades.

---

## 413. Fronteira de confiança

Dados e comandos recebidos deverão ser validados mesmo quando originados de participante confiável.

---

## 414. Fronteira semântica

A integração deverá reconhecer diferenças de significado entre os domínios.

---

## 415. Fronteira operacional

Participantes poderão possuir diferentes:

- horários;
- capacidades;
- prioridades;
- estados;
- procedimentos;
- objetivos de serviço;
- modelos de falha.

---

## 416. Fronteira institucional

A passagem poderá alterar:

- autoridade;
- responsabilidade;
- finalidade;
- base legítima;
- política;
- retenção;
- obrigação;
- prestação de contas.

---

## 417. Contrato de integração

O contrato deverá declarar:

- finalidade;
- participantes;
- dados;
- capacidades;
- formatos;
- segurança;
- qualidade;
- disponibilidade;
- erros;
- mudanças;
- encerramento.

---

## 418. Contrato técnico

Deverá definir:

- protocolo;
- endpoint;
- método;
- esquema;
- tipo;
- autenticação;
- códigos de resposta;
- limites;
- timeout;
- versão.

---

## 419. Contrato semântico

Deverá definir:

- entidades;
- atributos;
- significado;
- unidades;
- temporalidade;
- enumerações;
- relações;
- valores ausentes;
- estados;
- regras.

---

## 420. Contrato operacional

Deverá definir:

- suporte;
- horários;
- capacidade;
- prioridade;
- recuperação;
- escalonamento;
- incidentes;
- comunicação;
- manutenção;
- continuidade.

---

## 421. Contrato institucional

Deverá definir:

- autoridade;
- responsabilidades;
- finalidade;
- direitos;
- governança;
- auditoria;
- reparação;
- encerramento;
- resolução de conflito.

---

## 422. Contrato de qualidade

Deverá estabelecer:

- dimensões;
- limites;
- medição;
- frequência;
- evidências;
- tratamento de falhas;
- responsáveis;
- escalonamento.

---

## 423. Contrato de segurança

Deverá estabelecer:

- identidades;
- acessos;
- classificação;
- criptografia;
- registros;
- incidentes;
- vulnerabilidades;
- evidências;
- obrigações;
- revogação.

---

## 424. Contrato de privacidade

Deverá indicar:

- finalidade;
- categorias;
- titulares;
- base legítima;
- compartilhamento;
- retenção;
- direitos;
- transferência;
- eliminação;
- responsabilidades.

---

## 425. Contrato de continuidade

Deverá definir:

- objetivos;
- dependências;
- contingência;
- recuperação;
- canais alternativos;
- testes;
- saída;
- preservação de dados.

---

## 426. Contrato executável

Partes do contrato poderão ser verificadas ou aplicadas tecnicamente.

A execução técnica não substituirá o significado institucional do contrato.

---

## 427. Contrato legível por pessoas

A documentação deverá permitir que operadores, responsáveis e auditores compreendam o comportamento da integração.

---

## 428. Descoberta de contrato

Consumidores deverão conseguir localizar a versão aplicável e sua documentação.

---

## 429. Versionamento de contrato

Cada versão deverá indicar:

- mudanças;
- compatibilidade;
- data;
- responsáveis;
- consumidores afetados;
- transição;
- encerramento da versão anterior.

---

## 430. Mudança compatível

Deverá preservar consumidores existentes dentro da garantia declarada.

---

## 431. Mudança incompatível

Exigirá:

- nova versão;
- comunicação;
- migração;
- período de transição;
- teste;
- observação;
- encerramento governado.

---

## 432. Depreciação

A versão deverá ser marcada como em descontinuação antes de sua retirada, salvo emergência de segurança.

---

## 433. Encerramento de versão

Deverá confirmar:

- consumidores migrados;
- tráfego encerrado;
- credenciais revogadas;
- dados tratados;
- dependências atualizadas;
- evidências preservadas.

---

## 434. Contrato violado

A quebra deverá gerar:

- detecção;
- registro;
- bloqueio ou degradação;
- comunicação;
- análise de impacto;
- correção;
- reconciliação.

---

## 435. API

A API é uma interface programática que expõe dados ou capacidades sob contrato.

---

## 436. API interna

Mesmo quando restrita à organização, deverá possuir:

- identidade;
- autenticação;
- autorização;
- documentação;
- versão;
- registros;
- proprietário.

---

## 437. API externa

Exigirá proteção reforçada de:

- perímetro;
- identidade;
- limite;
- abuso;
- dados;
- disponibilidade;
- contrato;
- suporte.

---

## 438. API pública

Acesso público não significará ausência de:

- limites;
- termos;
- autenticação quando necessária;
- segurança;
- observabilidade;
- versionamento;
- responsabilidade.

---

## 439. API de parceiro

Deverá operar sob contrato organizacional e permitir revogação da relação.

---

## 440. API de administração

Deverá possuir:

- autenticação reforçada;
- menor privilégio;
- rede controlada;
- registros;
- aprovação quando necessária;
- monitoramento;
- acesso temporário.

---

## 441. Endpoint

Cada endpoint deverá possuir:

- finalidade;
- método;
- parâmetros;
- autorização;
- classificação;
- resultado;
- erros;
- limites;
- proprietário.

---

## 442. Método de API

Métodos deverão corresponder semanticamente à operação e aos efeitos produzidos.

---

## 443. Parâmetro

Deverá possuir:

- nome;
- tipo;
- significado;
- obrigatoriedade;
- limite;
- formato;
- validação;
- exemplo;
- classificação.

---

## 444. Validação de entrada

Toda entrada deverá ser tratada como não confiável até validação.

---

## 445. Validação de saída

A resposta deverá impedir exposição de:

- campos desnecessários;
- dados de outro contexto;
- segredos;
- estrutura interna;
- informações não autorizadas.

---

## 446. Erro de API

A resposta de erro deverá ser útil sem revelar detalhes que facilitem exploração ou exposição.

---

## 447. Código de resposta

Deverá refletir de forma coerente:

- sucesso;
- aceitação;
- ausência;
- conflito;
- falta de autoridade;
- limitação;
- falha;
- indisponibilidade.

---

## 448. Idempotência de API

Operações de alteração deverão utilizar mecanismos capazes de impedir efeitos repetidos indevidos.

---

## 449. Chave de idempotência

Deverá possuir:

- escopo;
- identidade;
- validade;
- relação com a operação;
- armazenamento;
- resultado anterior;
- tratamento de conflito.

---

## 450. Paginação

Consultas extensas deverão utilizar paginação segura e consistente.

---

## 451. Filtro

Filtros deverão ser validados para impedir:

- acesso indevido;
- consulta excessiva;
- injeção;
- inferência;
- saturação;
- exposição.

---

## 452. Ordenação

A ordenação deverá possuir critérios determinísticos quando a consistência entre páginas for necessária.

---

## 453. Limite de requisição

Deverá proteger:

- capacidade;
- custo;
- disponibilidade;
- equidade;
- segurança;
- fornecedores;
- consumidores.

---

## 454. Quota

Quotas poderão ser definidas por:

- identidade;
- organização;
- plano;
- missão;
- capacidade;
- período;
- risco;
- contrato.

---

## 455. Rate limiting adaptativo

O limite poderá ser ajustado conforme:

- comportamento;
- risco;
- saturação;
- criticidade;
- prioridade;
- estado extraordinário.

---

## 456. Timeout da API

O consumidor deverá conhecer o tempo máximo esperado e tratar resultado incerto.

---

## 457. Repetição de chamada

Somente deverá ocorrer quando:

- o erro for transitório;
- a operação for idempotente;
- o limite não tiver sido atingido;
- a repetição não ampliar dano.

---

## 458. Circuit breaker da integração

Deverá interromper chamadas quando uma dependência demonstrar falha persistente.

---

## 459. Bulkhead

Capacidades deverão ser isoladas para impedir que saturação de uma integração consuma todos os recursos.

---

## 460. Gateway de API

O gateway poderá centralizar:

- autenticação;
- autorização;
- limite;
- roteamento;
- registros;
- versão;
- proteção;
- observabilidade.

Não deverá se tornar ponto único sem continuidade.

---

## 461. Adaptador

O adaptador traduz contrato externo para modelo interno.

Deverá preservar significado e evidenciar perdas ou aproximações.

---

## 462. Conector

O conector deverá possuir:

- identidade;
- fornecedor;
- versão;
- permissões;
- dados;
- configuração;
- observabilidade;
- suporte;
- ciclo de vida.

---

## 463. Conector gerenciado

Mesmo quando fornecido por terceiro, deverá permanecer no inventário e sob governança institucional.

---

## 464. Webhook

O receptor deverá validar:

- origem;
- assinatura;
- momento;
- repetição;
- esquema;
- classificação;
- finalidade;
- autorização.

---

## 465. Assinatura de webhook

A validação deverá utilizar segredo ou mecanismo criptográfico protegido e rotacionável.

---

## 466. Replay de webhook

Mensagens antigas não deverão ser aceitas como novas sem política explícita de reprocessamento.

---

## 467. Entrega de webhook

O produtor deverá definir:

- tentativas;
- intervalo;
- timeout;
- expiração;
- confirmação;
- evidências;
- falha permanente.

---

## 468. Endpoint indisponível

Mensagens deverão ser retidas, redirecionadas ou encerradas conforme criticidade, contrato e retenção.

---

## 469. Integração por arquivo

O contrato deverá definir:

- nome;
- formato;
- esquema;
- codificação;
- compactação;
- proteção;
- local;
- frequência;
- confirmação;
- destinação.

---

## 470. Manifesto de arquivo

Transferências relevantes deverão possuir manifesto com:

- identificação;
- conteúdo esperado;
- quantidade;
- tamanho;
- integridade;
- origem;
- destino;
- momento;
- classificação.

---

## 471. Arquivo incompleto

Não deverá ser processado como completo sem validação.

---

## 472. Arquivo duplicado

Deverá ser detectado por identidade, conteúdo, período ou operação relacionada.

---

## 473. Arquivo corrompido

Deverá ser isolado e não propagado aos consumidores.

---

## 474. Transferência segura

Deverá proteger:

- autenticação;
- confidencialidade;
- integridade;
- origem;
- destino;
- retomada;
- evidência;
- descarte.

---

## 475. Interoperabilidade

Interoperabilidade é a capacidade de participantes cooperarem preservando:

- significado;
- identidade;
- contexto;
- autoridade;
- segurança;
- qualidade;
- responsabilidade;
- continuidade.

---

## 476. Interoperabilidade técnica

Deverá alinhar:

- protocolos;
- formatos;
- esquemas;
- versões;
- canais;
- autenticação;
- erros;
- limites.

---

## 477. Interoperabilidade semântica

Deverá assegurar compreensão compatível das entidades, atributos, eventos e estados.

---

## 478. Interoperabilidade operacional

Deverá alinhar:

- processos;
- tempos;
- prioridades;
- suporte;
- escalonamento;
- incidentes;
- continuidade;
- critérios de conclusão.

---

## 479. Interoperabilidade institucional

Deverá alinhar:

- autoridade;
- responsabilidade;
- finalidade;
- governança;
- contratos;
- direitos;
- prestação de contas.

---

## 480. Interoperabilidade jurídica

Deverá identificar diferenças de:

- jurisdição;
- obrigação;
- base legítima;
- retenção;
- transferência;
- direito;
- responsabilidade.

---

## 481. Padrão comum

Padrões deverão reduzir ambiguidade e custo de integração sem eliminar necessidades legítimas dos domínios.

---

## 482. Padrão aberto

Deverá ser preferido quando ampliar:

- portabilidade;
- transparência;
- interoperabilidade;
- independência;
- participação;
- continuidade.

---

## 483. Padrão proprietário

Poderá ser utilizado quando justificado, considerando:

- dependência;
- licença;
- acesso;
- suporte;
- mudança;
- exportação;
- encerramento.

---

## 484. Modelo canônico

Um modelo comum poderá facilitar integração entre múltiplos participantes.

Não deverá apagar diferenças semânticas relevantes.

---

## 485. Tradução para modelo canônico

Cada transformação deverá preservar:

- origem;
- significado;
- perda;
- regra;
- versão;
- evidência;
- reversibilidade quando possível.

---

## 486. Mapeamento

O mapeamento deverá relacionar campos e conceitos entre contratos.

---

## 487. Mapeamento ambíguo

Deverá ser resolvido por curadoria ou permanecer explicitamente não mapeado.

---

## 488. Perda semântica

Quando a tradução reduzir detalhe ou significado, a perda deverá ser registrada e comunicada aos consumidores.

---

## 489. Enriquecimento federado

A combinação com dados externos deverá respeitar:

- finalidade;
- contrato;
- proveniência;
- classificação;
- privacidade;
- qualidade;
- retenção.

---

## 490. Federação de dados

Federação permite consultar ou utilizar dados distribuídos sem transferir integralmente sua custódia.

---

## 491. Autonomia do domínio

Cada domínio deverá manter autoridade sobre:

- significado;
- qualidade;
- acesso;
- retenção;
- correção;
- disponibilidade;
- ciclo de vida.

---

## 492. Catálogo federado

Deverá permitir localizar produtos e contratos sem expor dados além do necessário.

---

## 493. Consulta federada

Deverá respeitar políticas de cada fonte durante:

- autenticação;
- autorização;
- execução;
- combinação;
- resposta;
- registro;
- retenção.

---

## 494. Resultado federado

O resultado deverá preservar:

- fontes;
- temporalidade;
- qualidade;
- limitações;
- classificação;
- regras de uso.

---

## 495. Federação de identidade

Deverá permitir reconhecer participantes entre organizações sem aceitar automaticamente toda autoridade de origem.

---

## 496. Federação de eventos

Eventos entre organizações deverão possuir:

- identidade;
- contrato;
- origem;
- contexto;
- temporalidade;
- classificação;
- responsabilidade;
- retenção.

---

## 497. Federação de produtos de dados

Cada produto deverá declarar condições de:

- descoberta;
- acesso;
- qualidade;
- suporte;
- uso;
- compartilhamento;
- encerramento.

---

## 498. Contrato federativo

Deverá definir:

- participantes;
- finalidade;
- dados;
- responsabilidades;
- segurança;
- privacidade;
- qualidade;
- incidentes;
- continuidade;
- saída.

---

## 499. Soberania de dados

Organizações e territórios poderão possuir obrigações e autoridades próprias sobre determinados dados.

A soberania deverá ser tratada com:

- legalidade;
- contrato;
- arquitetura;
- localização;
- controle;
- transparência.

---

## 500. Residência de dados

Deverá indicar onde dados são:

- armazenados;
- processados;
- copiados;
- recuperados;
- acessados;
- transferidos.

---

## 501. Transferência internacional

Deverá considerar:

- legislação;
- mecanismo legítimo;
- contrato;
- proteção;
- direitos;
- fornecedor;
- subcontratação;
- evidências.

---

## 502. Minimização federada

Quando possível, deverá ser compartilhado:

- atributo necessário;
- confirmação;
- prova;
- resultado;
- referência;
- agregado;

em vez do conjunto completo.

---

## 503. Computação próxima ao dado

O processamento poderá ocorrer no domínio de origem para reduzir movimentação e exposição.

---

## 504. Prova verificável

Poderá demonstrar determinada condição sem revelar dados desnecessários.

---

## 505. Compartilhamento

Toda operação deverá indicar:

- remetente;
- destinatário;
- finalidade;
- conteúdo;
- autoridade;
- proteção;
- retenção;
- responsabilidade.

---

## 506. Compartilhamento humano

Pessoas deverão possuir interfaces capazes de mostrar:

- o que será compartilhado;
- com quem;
- por quê;
- por quanto tempo;
- com qual consequência;
- como revogar quando aplicável.

---

## 507. Compartilhamento automatizado

Deverá ser governado por política executável, registros e revisão.

---

## 508. Compartilhamento por agente

Agentes não deverão decidir isoladamente ampliar circulação de dados sensíveis ou de alto impacto.

---

## 509. Consentimento

Quando aplicável, deverá ser:

- livre;
- informado;
- específico;
- verificável;
- acessível;
- revogável.

---

## 510. Base legítima diferente do consentimento

Quando houver outro fundamento, a organização ainda deverá preservar finalidade, transparência, necessidade, segurança e direitos.

---

## 511. Uso secundário

Uma finalidade nova deverá ser avaliada antes da reutilização.

---

## 512. Compatibilidade de finalidade

A análise deverá considerar:

- relação;
- contexto;
- expectativa;
- natureza dos dados;
- impacto;
- salvaguardas;
- obrigação;
- direitos.

---

## 513. Proibição de reutilização silenciosa

Dados coletados para serviço, atendimento ou segurança não deverão alimentar finalidade comercial, perfilamento ou treinamento sem avaliação legítima.

---

## 514. Compartilhamento público

A publicação deverá considerar:

- anonimização;
- contexto;
- risco de reidentificação;
- qualidade;
- licença;
- atualização;
- correção;
- impacto comunitário.

---

## 515. Dados abertos

Deverão possuir:

- finalidade pública;
- formato;
- metadados;
- qualidade;
- licença;
- atualização;
- canal de correção;
- proteção contra exposição indevida.

---

## 516. Marketplace de dados

A Plataforma UNO não deverá transformar dados pessoais e comunitários em mercadoria sem legitimidade, transparência, governança e proteção dos interesses afetados.

---

## 517. Integração financeira

Deverá possuir controles reforçados de:

- identidade;
- autorização;
- idempotência;
- valor;
- reconciliação;
- antifraude;
- evidência;
- reversão;
- continuidade.

---

## 518. Integração governamental

Deverá respeitar:

- competência;
- finalidade pública;
- identidade;
- contrato;
- proteção de dados;
- acessibilidade;
- disponibilidade;
- controle social;
- prestação de contas.

---

## 519. Integração de saúde

Deverá proteger:

- sigilo;
- integridade;
- identidade;
- temporalidade;
- contexto clínico;
- autoridade profissional;
- continuidade;
- consentimentos e bases aplicáveis.

---

## 520. Integração educacional

Deverá proteger:

- estudantes;
- responsáveis;
- avaliações;
- histórico;
- acessibilidade;
- finalidade pedagógica;
- instituições;
- direitos.

---

## 521. Integração laboral

Deverá respeitar:

- finalidade;
- privacidade;
- direitos;
- jornada;
- segurança;
- transparência;
- contestação;
- responsabilidades.

---

## 522. Integração comunitária

Deverá preservar autonomia local e impedir estigmatização, vigilância e exploração de vulnerabilidades.

---

## 523. Integração publicitária

Deverá distinguir claramente:

- conteúdo institucional;
- publicidade;
- recomendação;
- segmentação;
- patrocínio;
- comunicação de serviço.

---

## 524. Ferramentas publicitárias externas

Integrações com serviços como redes de anúncios deverão considerar:

- rastreamento;
- consentimento;
- políticas;
- perfilamento;
- dados;
- contratos;
- dependência;
- transparência;
- defesa do consumidor.

---

## 525. Sincronização entre organizações

Deverá definir:

- autoridade por campo;
- direção;
- frequência;
- conflito;
- correção;
- exclusão;
- temporalidade;
- responsabilidade;
- evidência.

---

## 526. Autoridade por atributo

Uma organização poderá ser fonte autoritativa de determinado atributo sem ser autoridade sobre toda a entidade.

---

## 527. Conflito de autoridade

Quando fontes legítimas divergirem, a arquitetura deverá:

- preservar versões;
- reconhecer contextos;
- solicitar revisão;
- impedir atualização destrutiva;
- registrar decisão;
- comunicar consumidores.

---

## 528. Regra do último valor

A política “último valor vence” somente deverá ser utilizada quando o tempo for critério legítimo e suficiente.

---

## 529. Regra de prioridade de fonte

Deverá possuir justificativa e escopo claros.

---

## 530. Reconciliação federada

Deverá comparar:

- fontes;
- versões;
- momentos;
- autoridades;
- contratos;
- estados;
- evidências;
- impactos.

---

## 531. Correção federada

A correção deverá propagar-se aos participantes autorizados sem apagar histórico relevante.

---

## 532. Exclusão federada

Deverá considerar:

- obrigações;
- retenções;
- backups;
- caches;
- índices;
- derivações;
- confirmações;
- sistemas desconectados.

---

## 533. Sincronização após desconexão

O retorno deverá verificar:

- identidade;
- intervalo;
- eventos acumulados;
- versões;
- conflitos;
- exclusões;
- capacidade;
- segurança.

---

## 534. Reentrada de participante

Deverá ocorrer somente após validação de:

- contrato;
- estado;
- credenciais;
- políticas;
- compatibilidade;
- integridade;
- eventos pendentes.

---

## 535. Desconexão segura

A integração deverá poder ser interrompida sem:

- perder evidências;
- corromper dados;
- abandonar transações;
- apagar responsabilidade;
- impedir continuidade essencial;
- manter credenciais ativas.

---

## 536. Encerramento da integração

Deverá incluir:

- interrupção de novas trocas;
- tratamento de mensagens pendentes;
- revogação;
- destino dos dados;
- atualização do catálogo;
- preservação de evidências;
- comunicação;
- confirmação.

---

## 537. Portabilidade

A arquitetura deverá reduzir dependência por meio de:

- contratos claros;
- padrões;
- exportação;
- documentação;
- testes;
- adaptadores;
- versionamento;
- estratégia de saída.

---

## 538. Interoperabilidade com legado

Sistemas antigos deverão ser integrados por mecanismos que contenham:

- formatos frágeis;
- autenticação limitada;
- indisponibilidade;
- semântica incompleta;
- dependência;
- risco;
- falta de observabilidade.

---

## 539. Camada anticorrupção

Adaptadores poderão impedir que modelos externos ou legados contaminem diretamente o significado interno do domínio.

---

## 540. Integração temporária

Deverá possuir:

- missão;
- duração;
- dados;
- autoridade;
- credenciais;
- suporte;
- encerramento automático;
- destinação.

---

## 541. Integração experimental

Deverá operar em escopo controlado, com dados e efeitos limitados.

Toda representação fictícia deverá ser marcada como:

**SIMULAÇÃO**

---

## 542. Integração crítica

Deverá possuir:

- proprietário;
- redundância adequada;
- observabilidade;
- objetivos de serviço;
- contingência;
- recuperação;
- testes;
- contrato;
- suporte;
- estratégia de saída.

---

## 543. Disponibilidade da integração

Deverá ser medida pela capacidade real de cumprir sua finalidade, não apenas pela resposta do endpoint.

---

## 544. Latência da integração

Deverá considerar:

- solicitação;
- transporte;
- processamento;
- resposta;
- confirmação;
- disponibilização ao consumidor.

---

## 545. Capacidade da integração

Deverá ser planejada conforme:

- volume;
- taxa;
- pico;
- tamanho;
- concorrência;
- prioridade;
- crescimento;
- contingência.

---

## 546. Saturação da integração

Deverá acionar:

- limite;
- fila;
- backpressure;
- priorização;
- escalonamento;
- degradação;
- expansão;
- comunicação.

---

## 547. Estado degradado

A integração deverá informar:

- limitações;
- atraso;
- qualidade;
- dados indisponíveis;
- operações suspensas;
- risco;
- alternativa;
- previsão de revisão.

---

## 548. Falha parcial

Deverá ser reconhecida quando apenas parte dos dados, participantes ou capacidades permanecer disponível.

---

## 549. Falsa disponibilidade

Uma integração que responde, mas entrega dados inválidos, incompletos ou desatualizados, não deverá ser considerada saudável.

---

## 550. Observabilidade da integração

Deverá permitir compreender:

- chamadas;
- mensagens;
- eventos;
- erros;
- tempo;
- volume;
- qualidade;
- versão;
- participantes;
- dependências;
- estado.

---

## 551. Rastreamento distribuído

Deverá utilizar identificadores de correlação para reconstruir fluxos entre sistemas e organizações.

---

## 552. Registro de contrato

Cada troca relevante deverá indicar a versão do contrato aplicada.

---

## 553. Registro de consentimento ou fundamento

Quando necessário, a operação deverá conseguir demonstrar a autoridade para o compartilhamento.

---

## 554. Incidente de integração

Poderá envolver:

- indisponibilidade;
- vazamento;
- duplicidade;
- corrupção;
- quebra de contrato;
- atraso;
- acesso indevido;
- propagação de erro;
- conflito;
- perda de mensagem.

---

## 555. Detecção de incidente

Deverá considerar sinais de:

- volume anormal;
- falha;
- latência;
- mudança de esquema;
- origem desconhecida;
- credencial inválida;
- dado inconsistente;
- repetição;
- ausência de eventos.

---

## 556. Contenção da integração

Poderá incluir:

- suspensão;
- bloqueio;
- limite;
- isolamento;
- revogação;
- quarentena;
- redirecionamento;
- operação manual.

---

## 557. Recuperação da integração

Deverá verificar:

- identidade;
- contrato;
- credenciais;
- mensagens pendentes;
- duplicidades;
- ordem;
- estado;
- qualidade;
- consumidores;
- evidências.

---

## 558. Reparação de integração

Quando dados ou decisões forem afetados, deverão ser identificados:

- registros;
- consumidores;
- pessoas;
- organizações;
- resultados;
- correções;
- comunicações;
- responsabilidades.

---

## 559. Auditoria de integração

Deverá avaliar:

- finalidade;
- contrato;
- acesso;
- dados;
- segurança;
- qualidade;
- incidentes;
- retenção;
- continuidade;
- encerramento.

---

## 560. Invariante de integração

Nenhuma conexão deverá operar sem finalidade, proprietário, contrato, identidade, segurança e ciclo de vida.

---

## 561. Invariante de contrato

Mudanças não deverão alterar silenciosamente significado, obrigação, autoridade ou comportamento.

---

## 562. Invariante de API

Toda API deverá possuir autenticação, autorização, validação, limites, versão, observabilidade e tratamento de falhas proporcionais.

---

## 563. Invariante de fronteira

Toda passagem entre domínios deverá reconhecer mudanças de contexto, autoridade, responsabilidade, política e risco.

---

## 564. Invariante de interoperabilidade

A troca técnica deverá preservar significado, identidade, temporalidade, qualidade e responsabilidade.

---

## 565. Invariante de federação

Compartilhar capacidades não deverá eliminar autonomia local, proteção dos dados ou direito de desconexão.

---

## 566. Invariante de compartilhamento

Dados deverão circular somente com finalidade, autoridade, minimização, proteção, retenção e destino conhecidos.

---

## 567. Invariante de sincronização

Conflitos deverão preservar história, fontes, autoridade e possibilidade de revisão.

---

## 568. Invariante de correção federada

Correções deverão alcançar derivações e participantes legítimos sem apagar evidências.

---

## 569. Invariante de encerramento

Integrações desativadas não deverão conservar credenciais, fluxos ou cópias sem finalidade reconhecida.

---

## 570. Invariante de continuidade

Integrações críticas deverão possuir contingência, recuperação, portabilidade e estratégia de saída proporcionais.

---

## 571. Resultado do terceiro lote

Com este lote, a Engenharia Oficial estabelece que integrações e fluxos deverão:

- nascer de finalidade legítima;
- operar por contratos;
- reconhecer fronteiras;
- preservar semântica;
- proteger APIs e conectores;
- governar compartilhamento;
- sustentar federação sem centralização;
- sincronizar com autoridade;
- reconciliar conflitos;
- observar estado e qualidade;
- conter incidentes;
- recuperar mensagens e relações;
- permitir desconexão e encerramento seguros.

O próximo lote aprofundará:

- operação cotidiana dos dados;
- observabilidade;
- controle de capacidade;
- incidentes;
- falhas;
- reconciliação;
- recuperação;
- reprocessamento;
- correção;
- continuidade;
- resposta operacional dos fluxos.

---

# Lote 4 — Operação, Observabilidade, Incidentes, Reconciliação, Recuperação e Continuidade dos Fluxos

## 572. Operação de dados

A operação de dados é a capacidade institucional de manter fontes, armazenamentos, transformações, integrações, produtos e fluxos funcionando de maneira:

- íntegra;
- disponível;
- segura;
- rastreável;
- compreensível;
- recuperável;
- adequada à finalidade.

---

## 573. Operação não é apenas movimentação

Operar dados significa preservar:

- significado;
- contexto;
- qualidade;
- temporalidade;
- autoridade;
- classificação;
- responsabilidade;
- continuidade;
- direitos.

---

## 574. Missão operacional do dado

Todo fluxo relevante deverá estar associado a missão ou finalidade reconhecível.

A operação deverá conhecer:

- quem necessita do dado;
- por que necessita;
- quando necessita;
- com qual qualidade;
- com qual autoridade;
- qual consequência existe se falhar.

---

## 575. Estado operacional do conjunto

Um conjunto ou produto de dados poderá estar:

- proposto;
- em construção;
- em teste;
- aprovado;
- disponível;
- degradado;
- atrasado;
- contestado;
- em quarentena;
- comprometido;
- suspenso;
- arquivado;
- desativado.

---

## 576. Estado operacional do fluxo

O fluxo poderá estar:

- preparado;
- aguardando;
- executando;
- concluído;
- parcial;
- falhou;
- interrompido;
- saturado;
- degradado;
- em recuperação;
- desativado.

---

## 577. Operador de dados

O operador deverá compreender:

- finalidade;
- fontes;
- etapas;
- dependências;
- controles;
- limites;
- alertas;
- procedimentos;
- formas de intervenção;
- responsabilidades.

---

## 578. Equipe de operação

Poderá envolver:

- proprietários;
- engenheiros;
- analistas;
- operadores;
- curadores;
- segurança;
- privacidade;
- agentes;
- fornecedores;
- organizações participantes.

---

## 579. Separação de responsabilidades

Deverão permanecer distinguíveis:

- definição;
- produção;
- custódia;
- transformação;
- aprovação;
- consumo;
- auditoria;
- investigação.

---

## 580. Rotina operacional

A rotina poderá incluir:

- verificação;
- acompanhamento;
- tratamento de alertas;
- correção;
- reconciliação;
- atualização;
- revisão de capacidade;
- comunicação;
- documentação;
- aprendizagem.

---

## 581. Calendário operacional

Operações agendadas deverão possuir:

- frequência;
- janela;
- dependências;
- responsáveis;
- exceções;
- feriados;
- contingência;
- prazo;
- confirmação.

---

## 582. Janela de processamento

A janela deverá considerar:

- volume;
- capacidade;
- dependências;
- concorrência;
- prazo;
- impacto;
- manutenção;
- recuperação.

---

## 583. Fechamento operacional

Processos periódicos deverão possuir critérios para determinar:

- dados recebidos;
- dados ausentes;
- validações;
- pendências;
- correções;
- resultado;
- evidências;
- reabertura.

---

## 584. Abertura de período

Deverá validar:

- configurações;
- contratos;
- calendários;
- fontes;
- destinos;
- capacidade;
- responsáveis;
- estado anterior.

---

## 585. Encerramento de período

Não deverá ocorrer quando existirem divergências relevantes não representadas ou dados críticos ainda não reconciliados.

---

## 586. Reabertura

Deverá possuir:

- motivo;
- autoridade;
- escopo;
- impacto;
- comunicação;
- versão;
- evidência;
- novo encerramento.

---

## 587. Operação assistida por agente

Agentes poderão apoiar:

- monitoramento;
- triagem;
- investigação;
- geração de consultas;
- validação;
- reconciliação;
- documentação;
- recomendação;
- acompanhamento.

---

## 588. Limites do agente de dados

O agente não deverá:

- corrigir silenciosamente dado de alto impacto;
- ampliar acesso;
- alterar proveniência;
- apagar divergência;
- inventar valor ausente;
- declarar qualidade não verificada;
- compartilhar sem autoridade;
- encerrar incidente sem evidência.

---

## 589. Automação operacional

Automações poderão:

- coletar;
- validar;
- transformar;
- mover;
- reconciliar;
- alertar;
- recuperar;
- arquivar;
- eliminar;

dentro de políticas, limites e evidências.

---

## 590. Execução manual

Operações manuais deverão possuir controles de:

- identidade;
- procedimento;
- validação;
- revisão;
- registro;
- segregação;
- confirmação;
- continuidade.

---

## 591. Dependência de planilha

Planilhas críticas deverão ser identificadas e tratadas quanto a:

- autoria;
- fórmula;
- versão;
- cópia;
- acesso;
- backup;
- erro;
- continuidade;
- substituição.

---

## 592. Observabilidade de dados

É a capacidade de compreender a saúde dos dados e fluxos a partir de:

- métricas;
- eventos;
- registros;
- perfis;
- contratos;
- dependências;
- estados;
- evidências.

---

## 593. Dimensões observáveis

Deverão incluir:

- disponibilidade;
- atualidade;
- volume;
- esquema;
- qualidade;
- integridade;
- linhagem;
- segurança;
- capacidade;
- custo;
- consumo.

---

## 594. Disponibilidade do dado

Deverá indicar se o consumidor consegue acessar dado utilizável dentro da finalidade e do prazo esperado.

---

## 595. Atualidade do dado

Deverá representar o tempo desde a última atualização válida e confirmada.

---

## 596. Latência de ponta a ponta

Deverá medir o tempo entre:

- ocorrência;
- captura;
- publicação;
- processamento;
- transformação;
- disponibilização;
- consumo.

---

## 597. Volume

Mudanças deverão ser analisadas quanto a:

- crescimento;
- queda;
- duplicidade;
- perda;
- evento legítimo;
- falha de origem;
- saturação;
- fraude.

---

## 598. Distribuição

Mudanças na distribuição dos valores poderão indicar:

- alteração real;
- viés;
- quebra;
- transformação incorreta;
- mudança de população;
- fraude;
- deriva.

---

## 599. Esquema observado

O estado real deverá ser comparado com o contrato aprovado.

---

## 600. Quebra de esquema

Deverá gerar:

- detecção;
- classificação;
- bloqueio ou adaptação governada;
- análise de consumidores;
- comunicação;
- correção;
- evidência.

---

## 601. Quebra semântica

O formato poderá permanecer igual enquanto o significado muda.

Esse tipo de quebra deverá ser tratado como incidente relevante.

---

## 602. Linhagem observável

Deverá permitir localizar:

- origem;
- transformações;
- destinos;
- consumidores;
- relatórios;
- decisões;
- agentes;
- cópias.

---

## 603. Dependência observável

A falha de fonte, pipeline, integração ou armazenamento deverá ser relacionada aos produtos e missões afetados.

---

## 604. Cobertura de observabilidade

A organização deverá conhecer quais conjuntos e fluxos:

- são observados;
- são parcialmente observados;
- possuem atraso;
- não possuem telemetria;
- dependem de verificação manual.

---

## 605. Ponto cego

Deverá possuir:

- identificação;
- risco;
- responsável;
- controle compensatório;
- prazo;
- revisão;
- impacto potencial.

---

## 606. Telemetria do fluxo

Poderá incluir:

- taxa;
- volume;
- fila;
- latência;
- erro;
- repetição;
- descarte;
- checkpoint;
- qualidade;
- custo.

---

## 607. Registro operacional

Deverá permitir reconstruir:

- execução;
- etapa;
- entrada;
- saída;
- versão;
- responsável;
- erro;
- repetição;
- resultado;
- confirmação.

---

## 608. Correlação operacional

Missões e transações deverão utilizar identificadores que atravessem serviços, filas, pipelines e organizações.

---

## 609. Painel de dados

Deverá mostrar, conforme público:

- produtos;
- fluxos;
- saúde;
- qualidade;
- atrasos;
- incidentes;
- dependências;
- responsáveis;
- mudanças;
- riscos.

---

## 610. Painel do proprietário

Deverá permitir compreender:

- finalidade;
- consumidores;
- qualidade;
- acessos;
- custos;
- retenção;
- incidentes;
- evolução;
- decisões necessárias.

---

## 611. Painel do operador

Deverá apresentar:

- execuções;
- filas;
- falhas;
- alertas;
- etapas;
- capacidade;
- reprocessamentos;
- pendências;
- procedimentos.

---

## 612. Painel do consumidor

Deverá informar:

- versão;
- atualidade;
- qualidade;
- limitações;
- estado;
- fonte;
- contrato;
- canais de suporte;
- incidentes relevantes.

---

## 613. Alerta de dados

O alerta deverá indicar:

- o que ocorreu;
- conjunto ou fluxo;
- criticidade;
- impacto;
- consumidores;
- evidências;
- ação esperada;
- responsável;
- prazo.

---

## 614. Alerta de qualidade

Poderá ser acionado por:

- completude;
- validade;
- duplicidade;
- inconsistência;
- desatualização;
- quebra de distribuição;
- falta de proveniência;
- contestação.

---

## 615. Alerta de fluxo

Poderá indicar:

- atraso;
- falha;
- saturação;
- fila crescente;
- descarte;
- timeout;
- dependência indisponível;
- checkpoint parado.

---

## 616. Alerta de segurança

Poderá indicar:

- acesso anômalo;
- exportação;
- origem desconhecida;
- alteração;
- vazamento;
- envenenamento;
- uso incompatível;
- credencial comprometida.

---

## 617. Prioridade do alerta

Deverá considerar:

- impacto humano;
- criticidade;
- decisões afetadas;
- propagação;
- urgência;
- temporalidade;
- capacidade de correção;
- obrigações.

---

## 618. Fadiga de alertas

Alertas deverão ser agrupados, priorizados e tornados acionáveis para não ultrapassar a capacidade da equipe.

---

## 619. Triagem

A triagem deverá determinar:

- legitimidade;
- alcance;
- origem;
- consumidores;
- impacto;
- urgência;
- necessidade de contenção;
- necessidade de escalonamento.

---

## 620. Triagem automatizada

Poderá reunir contexto e sugerir prioridade.

Não deverá descartar isoladamente incidentes capazes de afetar direitos, segurança ou recursos relevantes.

---

## 621. Caso operacional de dados

Alertas relacionados deverão poder ser agrupados em caso com:

- identidade;
- proprietário;
- estado;
- conjuntos;
- fluxos;
- consumidores;
- evidências;
- ações;
- decisões;
- histórico.

---

## 622. Incidente de dados

Incidente é evento que compromete ou ameaça comprometer:

- qualidade;
- integridade;
- confidencialidade;
- disponibilidade;
- proveniência;
- finalidade;
- temporalidade;
- responsabilidade;
- direitos;
- continuidade.

---

## 623. Incidente de qualidade

Ocorre quando dados inadequados alcançam ou poderão alcançar uso relevante.

---

## 624. Incidente de integridade

Ocorre quando dados são:

- alterados;
- corrompidos;
- substituídos;
- truncados;
- duplicados;
- relacionados incorretamente.

---

## 625. Incidente de confidencialidade

Ocorre quando informação é acessada, utilizada ou divulgada sem autoridade legítima.

---

## 626. Incidente de disponibilidade

Ocorre quando dados necessários não estão acessíveis dentro da condição exigida.

---

## 627. Incidente de proveniência

Ocorre quando a origem, a história ou a transformação não pode ser demonstrada adequadamente.

---

## 628. Incidente semântico

Ocorre quando participantes utilizam o mesmo dado com significados incompatíveis.

---

## 629. Incidente de temporalidade

Ocorre quando dados:

- atrasados;
- fora de ordem;
- expirados;
- históricos;
- futuros;
- não sincronizados;

são utilizados de forma inadequada.

---

## 630. Incidente de integração

Poderá envolver:

- contrato quebrado;
- mensagem perdida;
- duplicidade;
- acesso indevido;
- falha parcial;
- atraso;
- incompatibilidade;
- propagação de erro.

---

## 631. Incidente de pipeline

Poderá envolver:

- etapa falha;
- transformação incorreta;
- reprocessamento indevido;
- perda;
- duplicidade;
- estado parcial;
- código alterado;
- configuração inadequada.

---

## 632. Incidente de sincronização

Poderá gerar:

- conflito;
- sobrescrita;
- ressurgimento de dado excluído;
- perda de atualização;
- divergência entre organizações;
- estado impossível.

---

## 633. Incidente de inteligência artificial

Poderá ocorrer quando dados forem:

- inventados;
- classificados incorretamente;
- vazados;
- utilizados fora da finalidade;
- gravados indevidamente na memória;
- transformados sem evidência;
- utilizados em falsa execução.

---

## 634. Incidente federado

Ocorre quando o impacto atravessa organizações, contratos, territórios ou autoridades.

---

## 635. Quase incidente

Uma falha contida antes do uso ou impacto deverá ser registrada quando revelar risco relevante.

---

## 636. Severidade

Deverá considerar:

- pessoas afetadas;
- decisões;
- recursos;
- direitos;
- segurança;
- propagação;
- duração;
- criticidade;
- reversibilidade;
- obrigações.

---

## 637. Incidente crítico

Poderá envolver:

- risco à vida;
- direitos fundamentais;
- fraude ampla;
- perda irreversível;
- dados sensíveis;
- decisões em escala;
- função essencial;
- propagação sistêmica.

---

## 638. Declaração do incidente

Deverá registrar:

- identificador;
- momento;
- responsável;
- severidade;
- dados;
- fluxos;
- consumidores;
- impacto;
- ações iniciais;
- comunicação.

---

## 639. Missão de resposta

A resposta deverá possuir:

- propósito;
- comando;
- participantes;
- autoridade;
- estado;
- prioridades;
- recursos;
- evidências;
- encerramento.

---

## 640. Objetivos da resposta

Deverá buscar:

1. impedir uso indevido;
2. conter propagação;
3. proteger pessoas;
4. preservar evidências;
5. localizar alcance;
6. corrigir;
7. reconciliar;
8. recuperar;
9. comunicar;
10. aprender.

---

## 641. Contenção do dado

Poderá incluir:

- quarentena;
- bloqueio;
- restrição;
- suspensão de consumo;
- congelamento;
- isolamento;
- retirada de produto;
- interrupção de fluxo.

---

## 642. Contenção do pipeline

Poderá:

- pausar etapas;
- impedir novas entradas;
- preservar fila;
- desativar saída;
- trocar versão;
- redirecionar;
- ativar modo manual.

---

## 643. Contenção da integração

Poderá:

- revogar credencial;
- bloquear participante;
- restringir campos;
- suspender endpoint;
- limitar taxa;
- reter mensagens;
- desconectar organização.

---

## 644. Contenção de agente

O agente deverá perder acesso a dados ou ferramentas quando houver suspeita de:

- vazamento;
- uso incompatível;
- memória contaminada;
- transformação incorreta;
- autoridade indevida.

---

## 645. Propagação de contenção

Consumidores deverão ser informados quando dados precisam deixar de ser utilizados.

---

## 646. Identificação de alcance

A investigação deverá localizar:

- fontes;
- registros;
- campos;
- períodos;
- versões;
- transformações;
- cópias;
- consumidores;
- decisões;
- pessoas;
- organizações.

---

## 647. Linhagem de impacto

A linhagem deverá permitir seguir o dado comprometido até produtos, relatórios, agentes, automações e decisões.

---

## 648. Investigação

Deverá distinguir:

- fato;
- hipótese;
- inferência;
- evidência;
- causa;
- impacto;
- responsabilidade;
- limitação.

---

## 649. Preservação de evidência

Deverão ser preservados:

- dados originais;
- eventos;
- logs;
- versões;
- código;
- configuração;
- consultas;
- mensagens;
- decisões;
- correções.

---

## 650. Cópia de investigação

A análise deverá ocorrer sobre cópia protegida quando necessário para preservar o original.

---

## 651. Linha do tempo

Deverá registrar:

- produção;
- alteração;
- processamento;
- publicação;
- consumo;
- detecção;
- contenção;
- correção;
- recuperação.

---

## 652. Causa imediata

É a condição diretamente relacionada à falha observada.

---

## 653. Causa sistêmica

Poderá envolver:

- arquitetura;
- contrato;
- governança;
- incentivo;
- treinamento;
- dependência;
- controle;
- capacidade;
- comunicação;
- fornecedor.

---

## 654. Correção

A correção deverá preservar:

- valor anterior;
- novo valor;
- origem;
- método;
- responsável;
- momento;
- justificativa;
- sistemas afetados.

---

## 655. Correção em massa

Deverá possuir:

- escopo;
- regra;
- versão;
- teste;
- aprovação;
- amostra;
- reversão;
- evidência;
- validação.

---

## 656. Reprocessamento corretivo

Deverá utilizar versão aprovada e impedir duplicidade ou efeitos externos indevidos.

---

## 657. Backfill corretivo

Deverá indicar quais períodos e consumidores serão alterados.

---

## 658. Correção em fonte

Sempre que possível, a causa na origem deverá ser tratada para impedir nova propagação.

---

## 659. Correção no consumidor

Poderá ser necessária quando resultados derivados já tiverem sido persistidos ou utilizados.

---

## 660. Propagação da correção

Deverá alcançar:

- réplicas;
- caches;
- índices;
- produtos;
- relatórios;
- agentes;
- organizações;
- decisões revisáveis.

---

## 661. Confirmação de correção

Cada consumidor deverá poder confirmar recebimento e aplicação quando o impacto justificar.

---

## 662. Reconciliação

Reconciliação é a comparação entre fontes, estados, registros ou resultados para localizar e tratar divergências.

---

## 663. Reconciliação transacional

Deverá comparar:

- intenção;
- autorização;
- execução;
- registro;
- confirmação;
- estado real;
- resultado.

---

## 664. Reconciliação financeira

Deverá comparar:

- pagamento;
- cobrança;
- saldo;
- carteira;
- rateio;
- estorno;
- registro contábil;
- confirmação externa.

---

## 665. Reconciliação de identidade

Deverá tratar:

- duplicidade;
- fusão indevida;
- vínculo;
- papel;
- autoridade;
- histórico;
- conflito entre fontes.

---

## 666. Reconciliação de eventos

Deverá identificar:

- perda;
- duplicidade;
- ordem;
- atraso;
- conflito;
- lacuna;
- processamento;
- resultado.

---

## 667. Reconciliação entre organizações

Deverá preservar autoridade, contrato, contexto e responsabilidade de cada participante.

---

## 668. Regra de reconciliação

Deverá indicar:

- objetos comparados;
- frequência;
- tolerância;
- autoridade;
- tratamento;
- responsável;
- evidência;
- escalonamento.

---

## 669. Tolerância

Diferenças poderão ser aceitas somente quando:

- previstas;
- justificadas;
- limitadas;
- monitoradas;
- compatíveis com a finalidade.

---

## 670. Divergência não resolvida

Deverá permanecer explícita e impedir decisões que exijam certeza inexistente.

---

## 671. Ajuste compensatório

Poderá corrigir efeito sem apagar o registro original.

---

## 672. Fechamento da reconciliação

Deverá ocorrer quando:

- diferenças forem explicadas;
- correções aplicadas;
- pendências atribuídas;
- evidências preservadas;
- resultados comunicados.

---

## 673. Recuperação de dados

Recuperação é a capacidade de restaurar dados, estados, produtos e fluxos após falha ou incidente.

---

## 674. Fonte de recuperação

Poderá incluir:

- backup;
- réplica;
- evento;
- arquivo;
- fonte externa;
- registro físico;
- reconstrução;
- consumidor autorizado.

---

## 675. Ponto confiável

A recuperação deverá selecionar ponto cuja:

- integridade;
- temporalidade;
- proveniência;
- classificação;
- compatibilidade;
- ausência de contaminação;

tenham sido verificadas.

---

## 676. Recuperação não é apenas restauração

Também deverá tratar:

- contexto;
- contratos;
- acessos;
- configurações;
- dependências;
- consumidores;
- reconciliação;
- comunicação.

---

## 677. Restauração

Deverá preservar:

- completude;
- ordem;
- relações;
- permissões;
- classificação;
- histórico;
- evidências.

---

## 678. Reconstrução por eventos

Poderá reconstituir estado quando eventos íntegros e transformações compatíveis estiverem disponíveis.

---

## 679. Reconstrução por fonte

Poderá recolher novamente dados quando a fonte continuar disponível e autorizada.

---

## 680. Recuperação parcial

Deverá indicar claramente:

- dados disponíveis;
- dados ausentes;
- período;
- qualidade;
- limitações;
- impacto;
- próximos passos.

---

## 681. Perda de dados

A perda deverá ser avaliada quanto a:

- quantidade;
- período;
- entidades;
- missões;
- decisões;
- evidências;
- pessoas;
- obrigações;
- possibilidade de reconstrução.

---

## 682. Objetivo de ponto de recuperação

Deverá indicar a perda temporal máxima aceitável para o conjunto ou fluxo.

---

## 683. Objetivo de tempo de recuperação

Deverá indicar o tempo esperado para restabelecer capacidade utilizável.

---

## 684. Recuperação segura

Dados não deverão retornar carregando:

- corrupção;
- acesso indevido;
- classificação incorreta;
- contaminação;
- esquema incompatível;
- credencial exposta;
- evento duplicado conhecido.

---

## 685. Validação após restauração

Deverá verificar:

- integridade;
- completude;
- consistência;
- qualidade;
- permissões;
- contratos;
- atualidade;
- consumidores;
- evidências.

---

## 686. Retorno progressivo

Produtos e fluxos poderão ser reativados gradualmente para limitar risco.

---

## 687. Operação canário

Um grupo limitado de consumidores poderá validar o retorno antes da expansão.

---

## 688. Reabertura de consumo

Consumidores deverão ser informados sobre:

- estado;
- período recuperado;
- correções;
- limitações;
- reconciliação;
- risco residual.

---

## 689. Falha de recuperação

Deverá produzir:

- interrupção;
- preservação do estado;
- nova análise;
- alternativa;
- comunicação;
- revisão do plano;
- evidência.

---

## 690. Continuidade dos dados

Continuidade é a capacidade de preservar acesso, significado, integridade e responsabilidade durante interrupções e mudanças.

---

## 691. Dados essenciais

Conjuntos essenciais deverão ser identificados conforme sua relação com:

- vida;
- direitos;
- missão;
- segurança;
- finanças;
- comunicação;
- recuperação;
- autoridade.

---

## 692. Fluxos essenciais

Deverão possuir:

- prioridade;
- objetivos;
- capacidade;
- dependências;
- contingência;
- recuperação;
- testes;
- responsáveis.

---

## 693. Operação degradada de dados

Poderá utilizar:

- informação parcial;
- cache autorizado;
- processo manual;
- fonte alternativa;
- atualização reduzida;
- priorização;
- consulta limitada.

As limitações deverão ser comunicadas.

---

## 694. Fonte alternativa

Deverá ser avaliada quanto a:

- autoridade;
- qualidade;
- temporalidade;
- compatibilidade;
- segurança;
- continuidade;
- encerramento.

---

## 695. Processo manual de contingência

Deverá possuir:

- formulário;
- identidade;
- validação;
- controle de versão;
- armazenamento;
- reconciliação;
- digitalização posterior;
- evidência.

---

## 696. Registro durante desconexão

Dados produzidos offline deverão preservar:

- identidade;
- momento;
- contexto;
- versão;
- ordem;
- integridade;
- autoridade;
- sincronização futura.

---

## 697. Retorno da contingência

Deverá reconciliar:

- registros locais;
- estado central;
- duplicidades;
- conflitos;
- eventos;
- decisões;
- exclusões;
- pendências.

---

## 698. Continuidade sem fornecedor

Capacidades críticas deverão prever como preservar dados e fluxos diante do encerramento ou da indisponibilidade de fornecedor.

---

## 699. Continuidade federada

Cada organização deverá conhecer:

- dados sob sua custódia;
- fluxos compartilhados;
- responsabilidades;
- contingências;
- canais;
- condições de desconexão;
- formas de reintegração.

---

## 700. Continuidade sem agentes

A operação deverá preservar procedimentos e capacidade humana suficientes para funções essenciais quando agentes de IA estiverem indisponíveis.

---

## 701. Backup operacional

Backups deverão ser relacionados a conjuntos, configurações, contratos, esquemas e metadados necessários à recuperação.

---

## 702. Teste de recuperação

A existência de backup somente será considerada útil quando a restauração e a reconciliação forem testadas.

---

## 703. Arquivamento

Dados retirados da operação ativa deverão permanecer:

- localizáveis;
- compreensíveis;
- protegidos;
- vinculados à proveniência;
- acessíveis conforme autoridade;
- elimináveis conforme política.

---

## 704. Formato durável

O arquivamento deverá evitar dependência desnecessária de formato, software ou fornecedor sem estratégia de leitura futura.

---

## 705. Preservação semântica

Além dos dados, deverão ser preservados:

- esquema;
- dicionário;
- unidade;
- regras;
- contratos;
- contexto;
- versões;
- relações.

---

## 706. Continuidade da evidência

Registros necessários a auditoria, contestação e responsabilidade deverão permanecer íntegros durante migrações e recuperações.

---

## 707. Comunicação de incidente de dados

Deverá informar, conforme público:

- o que ocorreu;
- quais dados;
- qual período;
- quais impactos;
- quais ações;
- o que evitar;
- como corrigir;
- quando haverá atualização.

---

## 708. Comunicação ao consumidor

Consumidores deverão ser avisados sobre:

- indisponibilidade;
- atraso;
- degradação;
- correção;
- reprocessamento;
- quebra de contrato;
- retorno;
- risco residual.

---

## 709. Comunicação à pessoa afetada

Quando aplicável, deverá ser:

- clara;
- acessível;
- verdadeira;
- tempestiva;
- orientada à proteção;
- acompanhada de canal de ajuda e contestação.

---

## 710. Comunicação federada

Participantes deverão coordenar mensagens para evitar contradição, ocultação, exposição e perda de confiança.

---

## 711. Encerramento do incidente

Somente deverá ocorrer quando houver tratamento suficiente de:

- contenção;
- causa;
- correção;
- reconciliação;
- recuperação;
- consumidores;
- pessoas afetadas;
- evidências;
- pendências;
- aprendizagem.

---

## 712. Incidente encerrado com pendência

Pendências deverão possuir:

- proprietário;
- prazo;
- impacto;
- acompanhamento;
- escalonamento;
- critério de conclusão.

---

## 713. Revisão pós-incidente

Deverá avaliar:

- origem;
- detecção;
- propagação;
- impacto;
- decisões;
- correções;
- recuperação;
- comunicação;
- reparação;
- melhorias.

---

## 714. Memória do incidente

Deverá preservar:

- fatos;
- hipóteses;
- dados afetados;
- consumidores;
- decisões;
- correções;
- responsabilidades;
- aprendizados;
- ações.

---

## 715. Aprendizagem operacional

A experiência deverá atualizar:

- contratos;
- regras;
- testes;
- procedimentos;
- modelos;
- observabilidade;
- capacidade;
- contingência;
- governança.

---

## 716. Melhoria acompanhada

Toda melhoria deverá possuir:

- descrição;
- proprietário;
- prioridade;
- prazo;
- critério;
- evidência;
- validação;
- resultado observado.

---

## 717. Invariante de operação

Todo produto e fluxo relevante deverá possuir estado, proprietário, suporte, observabilidade e ciclo operacional.

---

## 718. Invariante de observabilidade

Fluxos críticos deverão tornar visíveis qualidade, atraso, volume, falha, descarte, dependência e capacidade.

---

## 719. Invariante de incidente

Problemas de dados deverão ser tratados como incidentes quando puderem afetar pessoas, direitos, decisões, recursos ou continuidade.

---

## 720. Invariante de contenção

Dados suspeitos não deverão continuar alimentando decisões, agentes e automações sem avaliação legítima.

---

## 721. Invariante de correção

Toda correção deverá preservar valor anterior, motivo, autoria, momento, origem e propagação.

---

## 722. Invariante de reconciliação

Divergências não resolvidas deverão permanecer visíveis e limitar decisões que exijam certeza inexistente.

---

## 723. Invariante de recuperação

Dados restaurados deverão ter integridade, proveniência, classificação, permissões e compatibilidade verificadas.

---

## 724. Invariante de continuidade

Dados e fluxos essenciais deverão possuir alternativas, recuperação, testes e responsáveis proporcionais.

---

## 725. Invariante de operação degradada

Limitações de qualidade, atualidade, completude e autoridade deverão ser comunicadas aos consumidores.

---

## 726. Invariante de evidência

A resposta, a correção, o reprocessamento e a recuperação deverão produzir evidências verificáveis.

---

## 727. Invariante de aprendizagem

Incidentes recorrentes deverão produzir revisão de causa, controle, governança, recursos e responsabilidade.

---

## 728. Resultado do quarto lote

Com este lote, a Engenharia Oficial estabelece que a operação de dados deverá:

- manter estado reconhecível;
- observar produtos e fluxos;
- controlar qualidade e capacidade;
- detectar incidentes;
- localizar alcance por linhagem;
- conter propagação;
- corrigir sem apagar história;
- reconciliar divergências;
- recuperar com segurança;
- operar de forma degradada;
- preservar continuidade humana e federada;
- comunicar impactos;
- transformar falhas em aprendizagem verificável.

O próximo lote aprofundará:

- governança;
- segurança;
- privacidade;
- conformidade;
- acesso;
- retenção;
- eliminação;
- evidências;
- auditoria;
- fornecedores;
- ciclo de vida;
- responsabilidades institucionais dos dados e fluxos.

---

# Lote 5 — Governança, Segurança, Privacidade, Conformidade, Evidências e Ciclo de Vida

## 729. Governança de dados

Governança de dados é o conjunto de princípios, autoridades, papéis, políticas, contratos, processos e evidências que orienta:

- produção;
- classificação;
- qualidade;
- acesso;
- compartilhamento;
- transformação;
- retenção;
- correção;
- arquivamento;
- eliminação;
- responsabilidade.

---

## 730. Finalidade da governança

A governança deverá permitir que os dados sirvam à missão sem produzir:

- uso indevido;
- perda de contexto;
- ausência de responsabilidade;
- concentração ilegítima;
- violação de direitos;
- dependência excessiva;
- fragilidade operacional;
- retenção sem propósito.

---

## 731. Governança antes da coleta

Antes da coleta deverão ser definidos:

- finalidade;
- responsável;
- categorias;
- necessidade;
- autoridade;
- proteção;
- qualidade;
- retenção;
- compartilhamento;
- destino.

---

## 732. Governança proporcional

O rigor deverá aumentar conforme:

- sensibilidade;
- criticidade;
- escala;
- impacto;
- número de pessoas;
- irreversibilidade;
- uso em decisão;
- compartilhamento;
- vulnerabilidade dos afetados.

---

## 733. Estrutura de governança

Poderá incluir:

- direção;
- proprietário de domínio;
- proprietário do produto;
- curador;
- custodiante;
- segurança;
- privacidade;
- jurídico;
- auditoria;
- operadores;
- representantes das pessoas afetadas.

---

## 734. Conselho de dados

Poderá deliberar sobre:

- padrões;
- conflitos;
- compartilhamento;
- qualidade;
- riscos;
- retenção;
- novos usos;
- incidentes;
- investimentos;
- evolução arquitetural.

---

## 735. Independência da governança

A governança não deverá ser subordinada exclusivamente a interesses de:

- receita;
- velocidade;
- expansão;
- publicidade;
- vigilância;
- redução de custos;
- concentração;
- conveniência técnica.

---

## 736. Política de dados

Deverá estabelecer:

- princípios;
- responsabilidades;
- classificação;
- acesso;
- qualidade;
- compartilhamento;
- retenção;
- segurança;
- direitos;
- incidentes;
- ciclo de vida.

---

## 737. Norma de dados

Normas internas deverão traduzir políticas em requisitos aplicáveis a:

- domínios;
- produtos;
- integrações;
- bancos;
- agentes;
- relatórios;
- fornecedores;
- ambientes.

---

## 738. Procedimento de dados

Deverá orientar atividades como:

- coleta;
- correção;
- exportação;
- restauração;
- reconciliação;
- eliminação;
- resposta a incidentes;
- atendimento de direitos.

---

## 739. Catálogo governado

O catálogo deverá ser fonte institucional para localizar:

- conjuntos;
- produtos;
- contratos;
- proprietários;
- classificações;
- qualidade;
- acessos;
- retenções;
- estados;
- dependências.

---

## 740. Registro de decisão de dados

Decisões relevantes deverão indicar:

- objeto;
- contexto;
- autoridade;
- alternativas;
- riscos;
- fundamento;
- momento;
- responsável;
- efeitos;
- revisão.

---

## 741. Exceção de governança

A exceção deverá possuir:

- solicitante;
- justificativa;
- escopo;
- risco;
- autoridade;
- prazo;
- controle compensatório;
- acompanhamento;
- encerramento.

---

## 742. Exceção não permanente

Exceções repetidas ou renovadas deverão produzir revisão da política, do processo ou da arquitetura.

---

## 743. Conflito entre domínios

Quando domínios divergirem sobre significado, autoridade ou uso, deverão:

- preservar posições;
- reunir evidências;
- avaliar impacto;
- mediar;
- escalar;
- registrar decisão;
- comunicar consumidores.

---

## 744. Segurança dos dados

A segurança deverá proteger:

- confidencialidade;
- integridade;
- disponibilidade;
- autenticidade;
- proveniência;
- temporalidade;
- evidências;
- continuidade.

---

## 745. Segurança por concepção

A proteção deverá ser incorporada desde:

- coleta;
- modelagem;
- contrato;
- armazenamento;
- integração;
- consumo;
- arquivamento;
- eliminação.

---

## 746. Defesa em profundidade

A segurança deverá combinar:

- identidade;
- autenticação;
- autorização;
- criptografia;
- isolamento;
- validação;
- monitoramento;
- backup;
- resposta;
- recuperação.

---

## 747. Menor acesso

Identidades deverão acessar apenas os dados necessários à sua missão.

---

## 748. Menor detalhe

Quando suficiente, o consumidor deverá receber:

- agregado;
- atributo;
- confirmação;
- prova;
- recorte;
- resultado;

em vez do conjunto completo.

---

## 749. Menor duração

O acesso deverá permanecer válido somente durante o período necessário.

---

## 750. Controle por finalidade

A autorização deverá considerar não apenas quem acessa, mas por que e em qual missão.

---

## 751. Controle por atributo

Poderá considerar:

- papel;
- organização;
- território;
- classificação;
- vínculo;
- finalidade;
- ambiente;
- horário;
- risco.

---

## 752. Controle por linha

O acesso poderá ser limitado a registros relacionados à identidade, organização, território ou missão autorizada.

---

## 753. Controle por coluna

Campos sensíveis poderão ser ocultados ou restringidos independentemente do restante do registro.

---

## 754. Mascaramento dinâmico

A apresentação deverá variar conforme:

- papel;
- finalidade;
- ambiente;
- canal;
- risco;
- autoridade.

---

## 755. Acesso privilegiado

Acessos administrativos deverão possuir:

- identidade individual;
- autenticação reforçada;
- justificativa;
- temporalidade;
- monitoramento;
- registros;
- revisão.

---

## 756. Acesso de agente

Agentes deverão possuir acessos próprios, limitados por:

- capacidade;
- missão;
- conjunto;
- operação;
- finalidade;
- tempo;
- organização.

---

## 757. Acesso de fornecedor

Deverá ser:

- contratual;
- individual;
- necessário;
- limitado;
- temporário;
- monitorado;
- revogável;
- auditável.

---

## 758. Acesso emergencial

Deverá possuir:

- fundamento;
- autoridade;
- escopo;
- alerta;
- duração;
- evidência;
- revisão posterior;
- revogação.

---

## 759. Revisão de acesso

Deverá ocorrer:

- periodicamente;
- após mudança de função;
- após encerramento de missão;
- após incidente;
- após mudança de contrato;
- após inatividade;
- após reclassificação.

---

## 760. Conta órfã

Contas ou credenciais sem proprietário deverão ser suspensas e investigadas.

---

## 761. Segregação de funções

Deverão ser separadas, quando necessário:

- concessão e uso;
- produção e aprovação;
- correção e auditoria;
- exportação e autorização;
- eliminação e validação;
- investigação e julgamento.

---

## 762. Criptografia

Deverá ser utilizada conforme:

- classificação;
- ameaça;
- armazenamento;
- transmissão;
- fornecedor;
- obrigação;
- impacto.

---

## 763. Gestão de chaves

Deverá garantir:

- geração;
- custódia;
- uso;
- rotação;
- revogação;
- recuperação;
- separação;
- destruição.

---

## 764. Tokenização

Poderá reduzir exposição de identificadores e valores sensíveis.

---

## 765. Pseudonimização

Deverá separar identidade direta dos dados utilizados, preservando controle da relação.

---

## 766. Anonimização

Deverá ser avaliada quanto ao risco de reidentificação por:

- combinação;
- localização;
- raridade;
- tempo;
- contexto;
- fonte externa;
- inferência.

---

## 767. Monitoramento de acesso

Deverá observar:

- identidade;
- conjunto;
- operação;
- volume;
- horário;
- finalidade;
- exportação;
- comportamento;
- resultado.

---

## 768. Exfiltração

A arquitetura deverá detectar ou limitar:

- exportação incomum;
- consultas extensas;
- cópias;
- compartilhamento externo;
- canal oculto;
- uso de ferramenta indevida;
- resposta excessiva.

---

## 769. Envenenamento

Dados deliberadamente manipulados poderão comprometer:

- decisões;
- modelos;
- memória;
- relatórios;
- automações;
- agentes;
- confiança.

---

## 770. Proteção contra envenenamento

Deverá utilizar:

- proveniência;
- validação;
- segregação;
- amostragem;
- fontes independentes;
- detecção de anomalia;
- quarentena;
- revisão.

---

## 771. Privacidade

Privacidade é a proteção da autonomia e dos direitos das pessoas diante do tratamento de dados.

---

## 772. Privacidade por concepção

Deverá orientar arquitetura, interfaces, fluxos, contratos e ciclos de vida desde sua origem.

---

## 773. Finalidade

Todo tratamento deverá possuir propósito legítimo, específico e compreensível.

---

## 774. Adequação

O tratamento deverá ser compatível com a finalidade informada e com o contexto da relação.

---

## 775. Necessidade

Somente deverão ser tratados dados necessários ao resultado legítimo.

---

## 776. Livre acesso

Quando aplicável, pessoas deverão possuir meios de conhecer o tratamento realizado.

---

## 777. Qualidade dos dados pessoais

Deverão existir meios de:

- consultar;
- atualizar;
- corrigir;
- complementar;
- contestar;
- contextualizar.

---

## 778. Transparência

Deverá informar, quando aplicável:

- quais dados;
- para qual finalidade;
- por qual fundamento;
- com quem;
- por quanto tempo;
- sob responsabilidade de quem;
- quais direitos existem.

---

## 779. Segurança e prevenção

Controles deverão reduzir:

- acesso indevido;
- perda;
- alteração;
- discriminação;
- uso incompatível;
- exposição;
- dano.

---

## 780. Não discriminação

Dados não deverão ser tratados para fins discriminatórios ilícitos ou abusivos.

---

## 781. Responsabilização

A organização deverá demonstrar medidas capazes de cumprir os princípios e proteger as pessoas.

---

## 782. Base legítima

O tratamento deverá possuir fundamento aplicável e documentado.

Agentes não deverão criar autonomamente justificativa jurídica para uso não autorizado.

---

## 783. Consentimento

Quando utilizado, deverá ser:

- livre;
- informado;
- inequívoco;
- específico;
- verificável;
- revogável quando aplicável;
- acessível.

---

## 784. Consentimento granular

Finalidades diferentes deverão permitir escolhas separadas quando necessário.

---

## 785. Consentimento não manipulado

Interfaces não deverão utilizar:

- pressão;
- ocultação;
- cores enganosas;
- escolha pré-marcada indevida;
- dificuldade artificial;
- perda desproporcional de acesso.

---

## 786. Revogação

A revogação deverá produzir efeitos nos sistemas, agentes, integrações e fluxos dependentes daquele fundamento.

---

## 787. Titular dos dados

A pessoa deverá ser reconhecida como sujeito de direitos, não como proprietária absoluta de todos os registros institucionais relacionados a ela.

---

## 788. Direito de confirmação

Deverá ser possível informar se existe tratamento relacionado à pessoa, conforme limites aplicáveis.

---

## 789. Direito de acesso

O acesso deverá ser:

- seguro;
- compreensível;
- contextualizado;
- compatível com direitos de terceiros;
- fornecido dentro dos requisitos aplicáveis.

---

## 790. Direito de correção

A correção deverá alcançar derivações e consumidores legítimos quando necessário.

---

## 791. Direito de anonimização, bloqueio ou eliminação

Deverá ser atendido quando aplicável, considerando obrigações de retenção e limitações técnicas legítimas.

---

## 792. Direito de portabilidade

A disponibilização deverá utilizar formato:

- estruturado;
- interoperável;
- seguro;
- compreensível;
- verificável.

---

## 793. Informação sobre compartilhamento

Deverá ser possível identificar categorias ou participantes relevantes conforme obrigação e finalidade.

---

## 794. Direito de oposição

A pessoa deverá possuir canal para se opor a tratamentos quando juridicamente aplicável.

---

## 795. Revisão de decisão automatizada

A arquitetura deverá permitir identificar dados, critérios, agentes e responsabilidades relacionados à decisão.

---

## 796. Atendimento de direitos

O processo deverá possuir:

- canal;
- autenticação proporcional;
- protocolo;
- responsável;
- prazo;
- busca;
- decisão;
- resposta;
- evidência;
- recurso.

---

## 797. Autenticação do solicitante

A proteção contra fraude não deverá criar barreira desproporcional ao exercício do direito.

---

## 798. Direitos de terceiros

O atendimento deverá preservar informações de outras pessoas e segredos legítimos.

---

## 799. Crianças e adolescentes

O tratamento deverá priorizar o melhor interesse e proteção reforçada.

---

## 800. Pessoa vulnerável

Deverá receber comunicação e assistência compatíveis com sua capacidade e condição.

---

## 801. Perfilamento

A criação de perfis deverá considerar:

- finalidade;
- dados;
- inferências;
- qualidade;
- impacto;
- retenção;
- explicação;
- contestação;
- não discriminação.

---

## 802. Pontuação

Pontuações capazes de afetar oportunidades ou direitos deverão possuir:

- critérios;
- finalidade;
- dados;
- qualidade;
- contexto;
- explicação;
- revisão;
- validade;
- governança.

---

## 803. Inferência sensível

Não deverá ser produzida apenas porque tecnicamente possível.

---

## 804. Vigilância

Coleta contínua deverá possuir necessidade, autoridade e proporcionalidade reforçadas.

---

## 805. Dados de localização

Deverão considerar o risco de revelar:

- rotina;
- residência;
- trabalho;
- saúde;
- religião;
- relacionamento;
- vulnerabilidade;
- deslocamento.

---

## 806. Dados biométricos

Deverão possuir proteção reforçada, finalidade específica e plano para comprometimento, considerando que não podem ser simplesmente substituídos como uma senha.

---

## 807. Dados de saúde

Deverão preservar:

- sigilo;
- contexto;
- autoridade profissional;
- integridade;
- acesso;
- continuidade;
- direitos;
- segurança.

---

## 808. Dados financeiros

Deverão possuir controles de:

- identidade;
- autorização;
- segregação;
- antifraude;
- reconciliação;
- evidência;
- retenção;
- reparação.

---

## 809. Dados trabalhistas

Deverão respeitar:

- finalidade;
- transparência;
- dignidade;
- privacidade;
- não discriminação;
- direito de defesa;
- legislação;
- segurança.

---

## 810. Dados educacionais

Deverão proteger estudantes e preservar finalidade pedagógica, histórico, acesso e correção.

---

## 811. Dados comunitários

Não deverão ser utilizados para classificar comunidades como inferiores, perigosas, incapazes ou indesejáveis.

---

## 812. Privacidade federada

Cada participante deverá compreender suas responsabilidades sobre:

- coleta;
- compartilhamento;
- armazenamento;
- atendimento de direitos;
- incidentes;
- retenção;
- eliminação.

---

## 813. Transferência entre organizações

Deverá reconhecer:

- papel de cada parte;
- finalidade;
- contrato;
- segurança;
- responsabilidade;
- direitos;
- jurisdição;
- encerramento.

---

## 814. Transferência internacional

Deverá possuir mecanismo legítimo e salvaguardas compatíveis com a legislação aplicável.

---

## 815. Avaliação de impacto

Tratamentos de maior risco deverão avaliar:

- finalidade;
- necessidade;
- proporcionalidade;
- pessoas;
- riscos;
- direitos;
- controles;
- risco residual;
- responsáveis;
- revisão.

---

## 816. Privacidade e segurança

A segurança deverá proteger o tratamento legítimo.

Não deverá ser utilizada para justificar tratamento excessivo.

---

## 817. Conformidade

A conformidade deverá demonstrar aderência a:

- legislação;
- regulamentos;
- normas;
- contratos;
- políticas;
- decisões;
- compromissos;
- procedimentos.

---

## 818. Conformidade por concepção

Requisitos deverão orientar modelos, campos, fluxos, integrações, produtos e retenções desde o início.

---

## 819. Inventário de obrigações

Deverá relacionar obrigações por:

- conjunto;
- domínio;
- território;
- atividade;
- pessoa;
- contrato;
- organização;
- finalidade.

---

## 820. Hierarquia normativa

A arquitetura deverá distinguir:

- Constituição;
- leis;
- regulamentos;
- decisões aplicáveis;
- normas técnicas;
- contratos;
- políticas;
- procedimentos;
- recomendações.

---

## 821. Mudança normativa

Deverá gerar:

- identificação;
- análise;
- impacto;
- adequação;
- teste;
- comunicação;
- implantação;
- evidência;
- revisão.

---

## 822. Norma técnica

Poderá orientar:

- qualidade;
- segurança;
- privacidade;
- interoperabilidade;
- metadados;
- continuidade;
- gestão;
- auditoria;
- arquivos;
- evidências.

---

## 823. Normas Regulamentadoras e dados

Quando dados orientarem atividades laborais ou segurança do trabalho, deverão preservar:

- qualificação;
- análise de risco;
- autorização;
- procedimento;
- registro;
- temporalidade;
- responsabilidade técnica;
- NRs aplicáveis.

---

## 824. Evidência de conformidade

Deverá demonstrar:

- requisito;
- controle;
- responsável;
- teste;
- resultado;
- período;
- escopo;
- exceção;
- correção.

---

## 825. Não conformidade

Deverá produzir:

- registro;
- classificação;
- contenção quando necessária;
- correção;
- responsável;
- prazo;
- validação;
- escalonamento.

---

## 826. Retenção

Retenção define por quanto tempo o dado deverá permanecer.

---

## 827. Critérios de retenção

Deverão considerar:

- finalidade;
- obrigação;
- contrato;
- contestação;
- auditoria;
- investigação;
- continuidade;
- valor histórico;
- risco;
- minimização.

---

## 828. Tabela de temporalidade

Deverá indicar:

- categoria;
- início da contagem;
- período ativo;
- arquivamento;
- eliminação;
- exceções;
- responsável;
- fundamento.

---

## 829. Retenção ativa

Dados permanecem disponíveis à operação cotidiana.

---

## 830. Retenção arquivada

Dados deixam a operação cotidiana, mas permanecem preservados por finalidade legítima.

---

## 831. Retenção suspensa

A eliminação poderá ser interrompida por:

- investigação;
- obrigação;
- litígio;
- auditoria;
- preservação legal;
- contestação.

---

## 832. Retenção excessiva

Dados mantidos além da necessidade aumentam:

- exposição;
- custo;
- complexidade;
- risco;
- responsabilidade;
- dificuldade de atendimento de direitos.

---

## 833. Retenção insuficiente

A eliminação prematura poderá comprometer:

- memória;
- evidência;
- contestação;
- auditoria;
- recuperação;
- obrigação;
- continuidade.

---

## 834. Expiração

O vencimento deverá acionar:

- revisão;
- arquivamento;
- anonimização;
- eliminação;
- renovação fundamentada;
- suspensão legítima.

---

## 835. Eliminação

A eliminação deverá ser:

- autorizada;
- segura;
- rastreável;
- proporcional;
- compatível com obrigações;
- propagada quando necessária;
- verificável.

---

## 836. Eliminação lógica

Remove o dado da operação comum, mas poderá manter representação técnica temporária ou protegida.

---

## 837. Eliminação física

Busca remover a representação dos meios de armazenamento dentro das garantias técnicas aplicáveis.

---

## 838. Criptografia como eliminação

A destruição de chaves poderá tornar dados inacessíveis quando a arquitetura e as obrigações permitirem.

---

## 839. Eliminação em backup

Deverá considerar:

- ciclos;
- restauração;
- reintrodução;
- marcação;
- expiração;
- obrigação;
- viabilidade técnica;
- proteção.

---

## 840. Eliminação federada

Deverá alcançar participantes e derivações conforme contrato, finalidade e obrigação.

---

## 841. Eliminação em modelos

Quando dados tiverem sido utilizados em treinamento ou ajuste, deverá ser avaliada a possibilidade e a obrigação de:

- remover;
- reprocessar;
- substituir;
- restringir;
- documentar limitações;
- impedir uso futuro.

---

## 842. Certificado de eliminação

Poderá demonstrar:

- escopo;
- método;
- momento;
- responsável;
- sistemas;
- exceções;
- confirmação.

---

## 843. Arquivamento

Deverá preservar dados de forma:

- íntegra;
- compreensível;
- localizável;
- protegida;
- durável;
- relacionada à proveniência;
- acessível conforme autoridade.

---

## 844. Memória institucional

Nem todo dado retido será memória institucional.

A curadoria deverá selecionar aquilo que preserva:

- decisões;
- razões;
- resultados;
- aprendizados;
- identidade;
- continuidade;
- responsabilidade.

---

## 845. Evidência

Dados utilizados para provar ação, decisão, estado ou responsabilidade deverão possuir proteção reforçada.

---

## 846. Cadeia de custódia

Deverá registrar:

- origem;
- coleta;
- acesso;
- transferência;
- transformação;
- armazenamento;
- análise;
- destinação;
- responsáveis.

---

## 847. Imutabilidade proporcional

Evidências críticas deverão ser protegidas contra alteração e exclusão indevidas.

---

## 848. Assinatura

Assinaturas poderão demonstrar:

- autoria;
- integridade;
- identidade;
- momento;
- aprovação;
- não repúdio quando aplicável.

---

## 849. Carimbo temporal

Deverá relacionar o registro a referência temporal confiável.

---

## 850. Reprodutibilidade

Transformações relevantes deverão poder ser reproduzidas a partir de:

- entradas;
- código;
- regras;
- versões;
- configurações;
- ambiente;
- parâmetros.

---

## 851. Evidência produzida por agente

Deverá preservar:

- identidade do agente;
- modelo;
- versão;
- fontes;
- ferramentas;
- contexto;
- resultado;
- limitações;
- supervisão.

---

## 852. Auditoria de dados

Deverá avaliar:

- finalidade;
- proprietários;
- classificação;
- qualidade;
- acessos;
- compartilhamentos;
- retenções;
- incidentes;
- evidências;
- ciclo de vida.

---

## 853. Auditoria técnica

Poderá avaliar:

- esquema;
- configuração;
- pipelines;
- bancos;
- integrações;
- registros;
- criptografia;
- backups;
- acessos;
- alterações.

---

## 854. Auditoria semântica

Deverá avaliar:

- definições;
- mapeamentos;
- contratos;
- transformações;
- perdas de significado;
- uso de inferências;
- compatibilidade.

---

## 855. Auditoria institucional

Deverá avaliar:

- autoridade;
- responsabilidade;
- decisões;
- contratos;
- direitos;
- governança;
- fornecedores;
- prestação de contas.

---

## 856. Auditoria independente

Domínios de alto impacto poderão exigir avaliação externa ou funcionalmente independente.

---

## 857. Registro de auditoria

Deverá ser protegido contra alteração pelo próprio componente auditado.

---

## 858. Prestação de contas

Deverá explicar:

- quais dados;
- por quê;
- de onde;
- como;
- com quem;
- por quanto tempo;
- com quais efeitos;
- sob responsabilidade de quem.

---

## 859. Transparência pública

Produtos de impacto público poderão publicar informações sobre:

- finalidade;
- fontes;
- metodologia;
- qualidade;
- limitações;
- atualização;
- governança;
- contestação.

---

## 860. Segredo legítimo

Transparência não exigirá exposição de:

- dados pessoais;
- credenciais;
- vulnerabilidades;
- segredos contratuais;
- informações protegidas.

O segredo não deverá ocultar dano ou uso ilegítimo.

---

## 861. Fornecedor de dados

Deverá ser avaliado quanto a:

- origem;
- autoridade;
- qualidade;
- legalidade;
- continuidade;
- segurança;
- atualização;
- correção;
- encerramento.

---

## 862. Contrato com fornecedor

Deverá abordar:

- finalidade;
- dados;
- qualidade;
- direitos;
- segurança;
- incidentes;
- subcontratação;
- auditoria;
- continuidade;
- eliminação;
- saída.

---

## 863. Dados comprados

A aquisição não concederá automaticamente legitimidade para qualquer uso.

Deverão ser avaliados:

- origem;
- consentimentos ou fundamentos;
- direitos;
- qualidade;
- vieses;
- finalidade;
- restrições;
- impacto.

---

## 864. Dados recebidos gratuitamente

A gratuidade não eliminará obrigações de qualidade, segurança, finalidade e responsabilidade.

---

## 865. Dados públicos de terceiros

O uso deverá considerar contexto, licença, atualização, reidentificação e impacto.

---

## 866. Subfornecedor

A cadeia deverá ser conhecida quando puder afetar:

- custódia;
- localização;
- segurança;
- qualidade;
- continuidade;
- direitos;
- eliminação.

---

## 867. Incidente de fornecedor

Deverá possuir processo contratual de:

- notificação;
- evidência;
- contenção;
- cooperação;
- recuperação;
- comunicação;
- reparação;
- aprendizagem.

---

## 868. Portabilidade de fornecedor

A Plataforma UNO deverá conseguir:

- exportar;
- compreender;
- validar;
- migrar;
- reconciliar;
- preservar histórico;
- encerrar acesso.

---

## 869. Estratégia de saída

Deverá existir antes de a dependência se tornar crítica.

---

## 870. Ciclo de vida dos dados

Deverá incluir:

- necessidade;
- definição;
- coleta;
- validação;
- uso;
- transformação;
- compartilhamento;
- manutenção;
- arquivamento;
- eliminação;
- memória.

---

## 871. Necessidade

A criação de um novo dado deverá começar pela pergunta:

> Qual necessidade legítima exige que esta representação exista?

---

## 872. Definição

Antes da coleta, deverão ser definidos significado, formato, proprietário, finalidade e ciclo de vida.

---

## 873. Coleta

Deverá respeitar:

- autoridade;
- transparência;
- necessidade;
- qualidade;
- segurança;
- contexto;
- acessibilidade.

---

## 874. Utilização

Deverá permanecer compatível com a finalidade e com o estado de qualidade conhecido.

---

## 875. Manutenção

Deverá incluir:

- atualização;
- correção;
- reconciliação;
- reclassificação;
- revisão de acesso;
- revisão de retenção;
- documentação.

---

## 876. Mudança de finalidade

Deverá gerar nova avaliação de legitimidade, risco, transparência, contrato, arquitetura e direitos.

---

## 877. Desativação do produto

Deverá tratar:

- consumidores;
- dados;
- contratos;
- integrações;
- registros;
- retenção;
- portabilidade;
- comunicação;
- evidências.

---

## 878. Fim da finalidade

Quando a finalidade terminar, deverá ser decidido se o dado será:

- eliminado;
- anonimizado;
- arquivado;
- preservado por obrigação;
- incorporado à memória institucional legítima.

---

## 879. Invariante de governança

Nenhum conjunto relevante deverá existir sem finalidade, proprietário, classificação, qualidade, acesso, retenção e destino.

---

## 880. Invariante de segurança

Dados deverão ser protegidos durante todo o ciclo de vida, inclusive em cópias, índices, backups e ambientes temporários.

---

## 881. Invariante de menor acesso

Identidades, agentes e fornecedores deverão receber somente o dado, o detalhe, a duração e a autoridade necessários.

---

## 882. Invariante de privacidade

Dados pessoais deverão ser tratados com finalidade, adequação, necessidade, transparência, segurança, prevenção e responsabilização.

---

## 883. Invariante de não discriminação

Perfis, inferências e pontuações não deverão produzir tratamento ilícito, abusivo ou injustificado.

---

## 884. Invariante de conformidade

Leis, regulamentos, normas e contratos deverão orientar a arquitetura desde sua origem.

---

## 885. Invariante de retenção

Nenhum dado deverá permanecer indefinidamente sem fundamento, proprietário e revisão.

---

## 886. Invariante de eliminação

A eliminação deverá ser propagada, verificável e compatível com obrigações e direitos.

---

## 887. Invariante de evidência

Dados utilizados para responsabilidade, auditoria ou contestação deverão possuir integridade, temporalidade e cadeia de custódia adequadas.

---

## 888. Invariante de fornecedor

A contratação não deverá apagar a responsabilidade institucional nem impedir portabilidade e encerramento.

---

## 889. Invariante de ciclo de vida

Todo dado e produto deverá poder ser criado, atualizado, corrigido, arquivado, desativado e eliminado de maneira governada.

---

## 890. Resultado do quinto lote

Com este lote, a Engenharia Oficial estabelece que a governança de dados deverá:

- preceder a coleta;
- atribuir autoridade e responsabilidade;
- proteger acessos;
- incorporar segurança e privacidade;
- atender direitos;
- impedir discriminação;
- governar retenção e eliminação;
- preservar evidências;
- permitir auditoria;
- controlar fornecedores;
- sustentar portabilidade;
- governar todo o ciclo de vida;
- manter leis e normativas como linhas-guia da arquitetura.

O lote final aprofundará:

- testes;
- simulações;
- métricas;
- objetivos de serviço;
- maturidade;
- aprendizagem;
- evolução;
- garantias fundamentais;
- modelo integrado;
- relações com os demais arquivos;
- encerramento oficial.

---

# Lote 6 — Testes, Métricas, Maturidade, Aprendizagem, Garantias e Modelo Integrado

## 891. Testes da operação de dados

Dados, integrações e fluxos deverão ser testados antes de receberem responsabilidade operacional.

Os testes deverão demonstrar:

- estrutura;
- significado;
- qualidade;
- segurança;
- desempenho;
- continuidade;
- interoperabilidade;
- recuperabilidade;
- rastreabilidade;
- conformidade.

---

## 892. Teste não é amostra favorável

Um conjunto ou fluxo não deverá ser considerado validado apenas porque funcionou com:

- pequeno volume;
- dados ideais;
- única fonte;
- ausência de concorrência;
- ambiente controlado;
- caminho de sucesso;
- consumidor conhecido.

---

## 893. Plano de testes

Deverá definir:

- objetivo;
- escopo;
- ambiente;
- dados;
- contratos;
- cenários;
- riscos;
- responsáveis;
- critérios;
- evidências;
- tratamento de falhas.

---

## 894. Ambiente de teste

Deverá ser:

- identificado;
- isolado;
- representativo;
- observável;
- restaurável;
- protegido;
- compatível com os riscos.

---

## 895. Dados de teste

Deverão ser:

- suficientes;
- diversos;
- representativos;
- protegidos;
- classificados;
- documentados;
- compatíveis com a finalidade.

---

## 896. Uso de dados reais em teste

Somente deverá ocorrer quando:

- necessário;
- autorizado;
- protegido;
- minimizado;
- rastreável;
- compatível com obrigações;
- removido ao final conforme política.

---

## 897. Dados sintéticos em teste

Deverão ser identificados e avaliados quanto a:

- realismo;
- cobertura;
- vieses;
- diversidade;
- limitações;
- risco de semelhança com pessoas reais.

---

## 898. Simulação

Cenários fictícios deverão ser explicitamente identificados como:

**SIMULAÇÃO**

Dados simulados não deverão alcançar produtos, usuários ou decisões reais sem validação e autorização.

---

## 899. Caso de teste

Cada caso deverá indicar:

- entrada;
- fonte;
- contexto;
- contrato;
- estado inicial;
- transformação;
- resultado esperado;
- comportamento proibido;
- evidência;
- critério de aprovação.

---

## 900. Teste de esquema

Deverá verificar:

- campos;
- tipos;
- obrigatoriedade;
- relações;
- restrições;
- formatos;
- enumerações;
- compatibilidade;
- versão.

---

## 901. Teste semântico

Deverá comprovar que o significado é preservado entre:

- fonte;
- transformação;
- contrato;
- armazenamento;
- integração;
- consumidor;
- relatório;
- decisão.

---

## 902. Teste de qualidade

Deverá avaliar:

- exatidão;
- completude;
- consistência;
- atualidade;
- validade;
- unicidade;
- integridade;
- representatividade;
- rastreabilidade.

---

## 903. Teste de proveniência

Deverá verificar se é possível reconstruir:

- origem;
- produtor;
- momento;
- método;
- transformações;
- versões;
- movimentações;
- consumidores;
- decisões.

---

## 904. Teste de classificação

Deverá confirmar se rótulos e controles acompanham dados durante:

- coleta;
- cópia;
- transformação;
- integração;
- exportação;
- arquivamento;
- eliminação.

---

## 905. Teste de acesso

Deverá verificar se pessoas, agentes, serviços e fornecedores acessam apenas dados compatíveis com:

- identidade;
- papel;
- finalidade;
- missão;
- organização;
- território;
- temporalidade;
- autoridade.

---

## 906. Teste de menor privilégio

Deverá localizar:

- acesso excessivo;
- acesso antigo;
- conta órfã;
- privilégio permanente;
- exportação desnecessária;
- autorização ampla;
- delegação indevida.

---

## 907. Teste de isolamento

Deverá verificar separação entre:

- pessoas;
- organizações;
- missões;
- ambientes;
- classificações;
- agentes;
- fornecedores;
- territórios.

---

## 908. Teste de armazenamento

Deverá avaliar:

- gravação;
- leitura;
- integridade;
- capacidade;
- saturação;
- acesso;
- criptografia;
- backup;
- recuperação;
- ciclo de vida.

---

## 909. Teste transacional

Deverá avaliar:

- atomicidade;
- consistência;
- isolamento;
- durabilidade;
- concorrência;
- falha parcial;
- compensação;
- confirmação.

---

## 910. Teste de concorrência

Deverá simular alterações simultâneas capazes de produzir:

- sobrescrita;
- duplicidade;
- deadlock;
- estado impossível;
- perda de atualização;
- ordem inadequada.

---

## 911. Teste de idempotência

A repetição deverá demonstrar que não produz:

- cobrança duplicada;
- registro duplicado;
- evento repetido indevido;
- alteração sucessiva;
- mensagem excessiva;
- efeito externo adicional.

---

## 912. Teste de evento

Deverá verificar:

- identidade;
- origem;
- contrato;
- ordem;
- atraso;
- duplicidade;
- perda;
- replay;
- retenção;
- consumidor.

---

## 913. Teste de mensagem

Deverá considerar:

- entrega;
- confirmação;
- retentativa;
- expiração;
- fila de falha;
- evento venenoso;
- saturação;
- rastreabilidade.

---

## 914. Teste de stream

Deverá verificar:

- partição;
- offset;
- checkpoint;
- janela;
- eventos tardios;
- replay;
- escala;
- retomada;
- estado.

---

## 915. Teste de pipeline

Deverá avaliar:

- fontes;
- etapas;
- dependências;
- versões;
- transformações;
- falhas;
- estados parciais;
- reprocessamento;
- saída;
- evidências.

---

## 916. Teste de transformação

Deverá comprovar:

- regra;
- versão;
- resultado;
- precisão;
- perda;
- arredondamento;
- unidade;
- reprodutibilidade;
- impacto.

---

## 917. Teste de integração

Deverá avaliar:

- identidade;
- autenticação;
- autorização;
- contrato;
- versão;
- timeout;
- repetição;
- limite;
- falha;
- encerramento.

---

## 918. Teste de API

Deverá verificar:

- endpoints;
- métodos;
- parâmetros;
- respostas;
- erros;
- idempotência;
- paginação;
- filtros;
- quotas;
- exposição.

---

## 919. Teste de webhook

Deverá verificar:

- assinatura;
- origem;
- repetição;
- atraso;
- esquema;
- confirmação;
- indisponibilidade;
- retentativa;
- expiração.

---

## 920. Teste de arquivo

Deverá avaliar:

- manifesto;
- formato;
- integridade;
- completude;
- duplicidade;
- codificação;
- proteção;
- confirmação;
- destinação.

---

## 921. Teste de sincronização

Deverá considerar:

- direção;
- atraso;
- conflito;
- exclusão;
- duplicidade;
- estado offline;
- retomada;
- autoridade por atributo;
- reconciliação.

---

## 922. Teste federado

Deverá avaliar:

- descoberta;
- identidade;
- contrato;
- política local;
- autoridade;
- qualidade;
- compartilhamento;
- desconexão;
- reentrada;
- encerramento.

---

## 923. Teste de compatibilidade

Consumidores deverão ser avaliados diante de versões:

- atual;
- anterior;
- futura quando conhecida;
- incompatível;
- degradada;
- parcialmente disponível.

---

## 924. Teste de quebra de contrato

Deverá demonstrar se a operação consegue:

- detectar;
- bloquear;
- limitar;
- alertar;
- identificar consumidores;
- corrigir;
- reconciliar;
- recuperar.

---

## 925. Teste de capacidade

Deverá avaliar:

- volume;
- taxa;
- concorrência;
- tamanho;
- fila;
- latência;
- crescimento;
- custo;
- limite.

---

## 926. Teste de saturação

Deverá observar comportamento quando:

- armazenamento enche;
- fila cresce;
- consumidor atrasa;
- API limita;
- memória se esgota;
- fornecedor reduz capacidade;
- rede degrada.

---

## 927. Teste de backpressure

Deverá verificar se consumidores conseguem limitar entradas sem causar perda, corrupção ou cascata.

---

## 928. Teste de degradação

Deverá simular perda de:

- fonte;
- banco;
- fila;
- integração;
- fornecedor;
- agente;
- região;
- rede;
- supervisão;
- catálogo.

---

## 929. Teste de operação offline

Deverá avaliar:

- registros locais;
- identidade;
- temporalidade;
- conflitos;
- segurança;
- armazenamento;
- retomada;
- sincronização.

---

## 930. Teste de contingência

Deverá verificar:

- ativação;
- fonte alternativa;
- processo manual;
- comunicação;
- qualidade reduzida;
- autoridade;
- reconciliação;
- retorno.

---

## 931. Teste de backup

Deverá avaliar:

- escopo;
- integridade;
- acesso;
- isolamento;
- retenção;
- criptografia;
- catálogo;
- disponibilidade.

---

## 932. Teste de restauração

Deverá demonstrar recuperação de:

- dados;
- esquema;
- configuração;
- metadados;
- contratos;
- permissões;
- linhagem;
- índices;
- estados.

---

## 933. Teste de recuperabilidade

Deverá comprovar que os dados restaurados são utilizáveis, consistentes e compatíveis com a missão.

---

## 934. Teste de reconciliação

Deverá avaliar:

- registros ausentes;
- duplicidade;
- diferença;
- autoridade;
- tolerância;
- ajuste;
- evidência;
- encerramento.

---

## 935. Teste de correção

Deverá demonstrar:

- preservação do histórico;
- propagação;
- atualização de derivados;
- comunicação;
- validação;
- possibilidade de contestação.

---

## 936. Teste de eliminação

Deverá verificar:

- autorização;
- escopo;
- propagação;
- backups;
- caches;
- índices;
- federação;
- evidência;
- ausência de ressurgimento.

---

## 937. Teste de retenção

Deverá verificar se dados são:

- mantidos pelo período correto;
- arquivados;
- suspensos legitimamente;
- eliminados;
- revisados;
- protegidos durante todo o ciclo.

---

## 938. Teste de privacidade

Deverá avaliar:

- finalidade;
- minimização;
- acesso;
- transparência;
- direitos;
- perfilamento;
- compartilhamento;
- retenção;
- eliminação;
- incidentes.

---

## 939. Teste de atendimento de direitos

Deverá comprovar capacidade de:

- localizar dados;
- autenticar solicitante;
- corrigir;
- exportar;
- bloquear;
- eliminar;
- informar;
- registrar resposta.

---

## 940. Teste de segurança

Deverá avaliar:

- acesso indevido;
- exfiltração;
- alteração;
- envenenamento;
- abuso de API;
- credencial comprometida;
- vazamento em logs;
- propagação federada.

---

## 941. Teste de agentes

Deverá verificar se agentes:

- respeitam finalidade;
- acessam somente o necessário;
- não inventam dados;
- preservam proveniência;
- reconhecem incerteza;
- não compartilham indevidamente;
- permitem supervisão;
- produzem evidências.

---

## 942. Teste de falsa execução

O agente não deverá afirmar que:

- gravou;
- corrigiu;
- eliminou;
- compartilhou;
- sincronizou;
- restaurou;
- reconciliou;

sem confirmação verificável.

---

## 943. Teste de modelo analítico

Deverá avaliar:

- dados;
- premissas;
- vieses;
- precisão;
- explicação;
- deriva;
- grupos afetados;
- limitações;
- aplicabilidade.

---

## 944. Teste de decisão baseada em dados

Deverá reconstruir:

- fontes;
- qualidade;
- contexto;
- critérios;
- autoridade;
- alternativas;
- decisão;
- resultado;
- contestação.

---

## 945. Teste de fornecedor

Deverá avaliar:

- acesso;
- suporte;
- portabilidade;
- incidente;
- recuperação;
- evidências;
- retenção;
- eliminação;
- encerramento;
- subcontratação.

---

## 946. Teste adversarial

Deverá buscar formas de:

- quebrar contratos;
- falsificar origem;
- alterar dados;
- ampliar acesso;
- reidentificar;
- envenenar modelos;
- duplicar transações;
- ocultar falhas;
- impedir recuperação.

---

## 947. Evidência de teste

Deverá registrar:

- versão;
- ambiente;
- dados;
- execução;
- resultado;
- falhas;
- responsável;
- momento;
- critérios;
- aprovação.

---

## 948. Critério de aprovação

Deverá considerar:

- qualidade;
- segurança;
- desempenho;
- interoperabilidade;
- continuidade;
- conformidade;
- direitos;
- risco residual;
- capacidade de recuperação.

---

## 949. Aprovação condicional

Poderá limitar:

- volume;
- consumidores;
- dados;
- território;
- duração;
- integração;
- autonomia;
- ambiente;
- fornecedor.

---

## 950. Avaliação contínua

Mudanças de dados, contexto, fonte, esquema, modelo, fornecedor ou consumidor deverão poder acionar nova avaliação.

---

## 951. Métricas da operação de dados

Métricas deverão apoiar compreensão e decisão sem reduzir qualidade e responsabilidade a um único indicador.

---

## 952. Volume

Deverá indicar:

- entradas;
- saídas;
- armazenamento;
- crescimento;
- variação;
- duplicidade;
- descarte;
- distribuição por domínio.

---

## 953. Velocidade

Deverá observar taxas de:

- produção;
- ingestão;
- processamento;
- entrega;
- consumo;
- atualização;
- correção.

---

## 954. Variedade

Deverá considerar formatos, fontes, estruturas, semânticas, classificações e contextos.

---

## 955. Veracidade

Deverá representar confiança baseada em:

- proveniência;
- qualidade;
- validação;
- integridade;
- autoridade;
- contexto;
- atualidade.

---

## 956. Valor

Deverá considerar se os dados contribuem para:

- missão;
- compreensão;
- decisão;
- serviço;
- aprendizagem;
- continuidade;
- valor público.

---

## 957. Métrica de qualidade

Deverá acompanhar dimensões por produto, finalidade, consumidor e período.

---

## 958. Taxa de completude

Não deverá incentivar preenchimento artificial de campos desconhecidos.

---

## 959. Taxa de validade

Deverá distinguir conformidade estrutural de correção semântica.

---

## 960. Taxa de duplicidade

Deverá considerar duplicidades legítimas, versões e representações contextuais.

---

## 961. Taxa de inconsistência

Deverá localizar domínios, fontes, campos, períodos e consumidores afetados.

---

## 962. Atualidade

Deverá indicar se o dado está dentro da janela exigida pela finalidade.

---

## 963. Latência

Deverá ser medida por etapa e ponta a ponta.

---

## 964. Disponibilidade

Deverá representar acesso a dado utilizável, e não apenas resposta do armazenamento.

---

## 965. Confiabilidade

Deverá considerar entrega correta e consistente ao longo do tempo.

---

## 966. Taxa de falha

Deverá distinguir:

- fonte;
- transformação;
- armazenamento;
- integração;
- contrato;
- consumidor;
- fornecedor.

---

## 967. Taxa de repetição

Poderá revelar instabilidade, timeout, falta de idempotência ou dependência degradada.

---

## 968. Taxa de descarte

Todo descarte deverá ser classificado e explicado.

---

## 969. Fila acumulada

Deverá indicar risco de atraso, saturação e perda de temporalidade.

---

## 970. Tempo de recuperação

Deverá considerar desde a detecção até a disponibilização validada e reconciliada.

---

## 971. Ponto de recuperação

Deverá demonstrar a perda temporal real observada em testes e incidentes.

---

## 972. Taxa de reconciliação

Deverá considerar:

- divergências;
- tempo;
- correções;
- pendências;
- recorrência;
- consumidores.

---

## 973. Taxa de correção

Deverá distinguir:

- erro de origem;
- transformação;
- consumo;
- identidade;
- inferência;
- contestação procedente.

---

## 974. Métrica de linhagem

Deverá indicar a proporção de produtos e campos com proveniência reconstruível.

---

## 975. Métrica de contrato

Deverá acompanhar:

- versões;
- violações;
- consumidores incompatíveis;
- depreciações;
- migrações;
- quebras;
- encerramentos.

---

## 976. Métrica de acesso

Poderá incluir:

- acessos;
- privilégios;
- exportações;
- revisões;
- revogações;
- anomalias;
- contas órfãs;
- fornecedores.

---

## 977. Métrica de privacidade

Poderá acompanhar:

- finalidades;
- solicitações;
- compartilhamentos;
- retenções;
- eliminações;
- incidentes;
- perfilamentos;
- avaliações de impacto.

---

## 978. Métrica de segurança

Deverá considerar:

- acessos indevidos;
- alterações;
- exfiltrações;
- envenenamentos;
- vulnerabilidades;
- tempo de contenção;
- recorrência.

---

## 979. Métrica federada

Deverá avaliar:

- participantes;
- contratos;
- conflitos;
- sincronizações;
- correções;
- desconexões;
- incidentes;
- portabilidade;
- reentrada.

---

## 980. Métrica de custo

Deverá considerar:

- armazenamento;
- movimentação;
- processamento;
- consulta;
- fornecedor;
- suporte;
- recuperação;
- desperdício;
- dados sem uso.

---

## 981. Custo sem valor

Dados mantidos sem finalidade, consumidor ou obrigação deverão ser revisados.

---

## 982. Métrica de uso

A ausência de uso não deverá produzir eliminação automática sem avaliação de obrigação, memória e continuidade.

---

## 983. Métrica de aprendizagem

Deverá acompanhar:

- incidentes;
- lições;
- ações;
- melhorias;
- contratos atualizados;
- testes;
- recorrências;
- resultados observados.

---

## 984. Objetivo de nível de dados

Poderá definir compromissos de:

- qualidade;
- atualidade;
- disponibilidade;
- latência;
- recuperação;
- suporte;
- segurança;
- correção.

---

## 985. Indicador de nível de dados

Deverá medir o desempenho real em relação ao objetivo.

---

## 986. Orçamento de erro de dados

Deverá indicar tolerância operacional sem transformar direitos, segurança e integridade crítica em margem de conveniência.

---

## 987. Painel institucional

Deverá permitir compreender:

- produtos;
- riscos;
- qualidade;
- custos;
- incidentes;
- direitos;
- fornecedores;
- continuidade;
- decisões necessárias.

---

## 988. Painel operacional

Deverá apresentar:

- fluxos;
- estados;
- filas;
- falhas;
- contratos;
- capacidade;
- alertas;
- reprocessamentos;
- responsáveis;
- procedimentos.

---

## 989. Painel do usuário

Deverá mostrar somente informações necessárias e compreensíveis sobre:

- origem;
- atualização;
- estado;
- limitações;
- uso;
- correção;
- compartilhamento;
- direitos.

---

## 990. Métrica manipulada

Indicadores não deverão ser melhorados por:

- descartar silenciosamente;
- preencher valores;
- ocultar divergências;
- reclassificar incidentes;
- excluir casos;
- reduzir cobertura;
- impedir contestação.

---

## 991. Maturidade da operação de dados

Maturidade é a capacidade de produzir, utilizar, compartilhar, recuperar e eliminar dados com compreensão e responsabilidade.

---

## 992. Nível 0 — dados desconhecidos

Neste nível:

- não há inventário;
- fontes são incertas;
- cópias proliferam;
- responsabilidades são ausentes;
- qualidade é desconhecida;
- retenção é indefinida.

---

## 993. Nível 1 — operação reativa

Neste nível:

- fluxos são corrigidos após falha;
- planilhas e processos manuais dominam;
- integração é pontual;
- linhagem é limitada;
- recuperação é improvisada.

---

## 994. Nível 2 — dados definidos

Neste nível existem:

- proprietários;
- modelos;
- catálogos iniciais;
- contratos;
- classificações;
- controles;
- procedimentos;
- backups.

---

## 995. Nível 3 — dados gerenciados

Neste nível:

- qualidade é medida;
- fluxos são observados;
- acessos são revisados;
- incidentes são tratados;
- integrações são versionadas;
- retenções são aplicadas;
- recuperação é testada.

---

## 996. Nível 4 — dados adaptativos

Neste nível:

- contratos são verificáveis;
- qualidade limita automações;
- fluxos se recuperam sob governança;
- federação preserva autonomia;
- agentes auxiliam operação;
- riscos são antecipados.

---

## 997. Nível 5 — ecossistema consciente de dados

Neste nível:

- dados servem ao propósito;
- semântica é compartilhada;
- direitos são incorporados;
- inteligência coletiva preserva contexto;
- memória é governada;
- aprendizagem transforma arquitetura;
- responsabilidade atravessa a federação.

---

## 998. Maturidade não é centralização

Uma arquitetura madura poderá manter dados distribuídos quando isso preservar contexto, autonomia, segurança e continuidade.

---

## 999. Maturidade não é volume

Possuir mais dados não significa compreender melhor a realidade.

---

## 1000. Progressão de maturidade

Deverá exigir:

- propósito;
- proprietários;
- qualidade;
- segurança;
- interoperabilidade;
- continuidade;
- direitos;
- evidências;
- aprendizagem;
- resultados.

---

## 1001. Regressão de maturidade

Poderá ocorrer por:

- expansão;
- fornecedor;
- dívida;
- rotatividade;
- perda de conhecimento;
- mudança sem governança;
- incidentes;
- cópias;
- cultura de ocultação.

---

## 1002. Aprendizagem operacional de dados

A aprendizagem deverá transformar:

- falha;
- incidente;
- contestação;
- auditoria;
- teste;
- mudança;
- uso;
- resultado;
- experiência;

em melhoria verificável.

---

## 1003. Ciclo de aprendizagem

Deverá incluir:

1. observar;
2. registrar;
3. compreender;
4. localizar causa;
5. propor melhoria;
6. avaliar impacto;
7. testar;
8. aprovar;
9. implantar;
10. verificar;
11. incorporar.

---

## 1004. Aprendizagem não automática

Dados observados não deverão alterar silenciosamente:

- modelos;
- contratos;
- políticas;
- classificações;
- decisões;
- autoridade;
- agentes em produção.

---

## 1005. Feedback do consumidor

Deverá permitir comunicar:

- erro;
- ausência;
- atraso;
- ambiguidade;
- dificuldade;
- quebra de contrato;
- necessidade;
- sugestão.

---

## 1006. Feedback da pessoa afetada

Deverá ser considerado na avaliação de qualidade, contexto, justiça e impacto.

---

## 1007. Memória de correções

Deverá preservar padrões de erro e solução sem rotular permanentemente pessoas ou organizações.

---

## 1008. Evolução de esquema

Deverá ocorrer com versionamento, compatibilidade, migração, comunicação e evidência.

---

## 1009. Evolução semântica

Mudanças de significado deverão atualizar:

- glossário;
- contratos;
- mapeamentos;
- produtos;
- documentação;
- testes;
- consumidores.

---

## 1010. Evolução de integração

Deverá preservar interoperabilidade, continuidade e estratégia de retorno.

---

## 1011. Evolução de produto

Novas finalidades, dados ou consumidores deverão passar por governança proporcional.

---

## 1012. Auto-observação de fluxos

Automações e agentes poderão reconhecer:

- atraso;
- anomalia;
- quebra;
- saturação;
- perda;
- desvio;
- necessidade de intervenção.

---

## 1013. Auto-remediação de dados

Poderá corrigir automaticamente apenas quando:

- regra for conhecida;
- autoridade existir;
- impacto for limitado;
- histórico for preservado;
- resultado for validado;
- reversão ou compensação existir.

---

## 1014. Garantias fundamentais

A Plataforma UNO deverá sustentar garantias independentes de tecnologia, fornecedor, formato ou escala.

---

## 1015. Garantia de finalidade

Nenhum dado deverá existir ou circular sem finalidade legítima e reconhecível.

---

## 1016. Garantia de representação

O dado deverá permanecer reconhecido como representação parcial e contextual da realidade.

---

## 1017. Garantia de identidade

Entidades, registros, eventos, produtos, fluxos e integrações deverão possuir identidade reconhecível.

---

## 1018. Garantia de proveniência

Origem, transformações, movimentações e consumidores relevantes deverão permanecer rastreáveis.

---

## 1019. Garantia de semântica

O significado deverá ser preservado ou a perda deverá ser explicitada.

---

## 1020. Garantia de qualidade

A adequação deverá ser avaliada conforme finalidade, contexto e impacto.

---

## 1021. Garantia de autoridade

Nenhum acesso, compartilhamento, correção ou eliminação deverá ocorrer sem autoridade legítima.

---

## 1022. Garantia de menor acesso

Somente os dados, detalhes, períodos e capacidades necessários deverão ser disponibilizados.

---

## 1023. Garantia de segurança

Dados deverão ser protegidos durante coleta, uso, trânsito, armazenamento, backup, arquivamento e eliminação.

---

## 1024. Garantia de privacidade

Dados pessoais deverão ser tratados com finalidade, necessidade, transparência, proteção e responsabilização.

---

## 1025. Garantia de não discriminação

Dados, perfis, inferências e modelos não deverão produzir tratamento ilícito ou abusivo.

---

## 1026. Garantia de temporalidade

Dados deverão indicar momento, validade, atualização, período e relação histórica.

---

## 1027. Garantia de correção

Correções deverão preservar histórico e alcançar derivações legítimas.

---

## 1028. Garantia de contestação

Pessoas e organizações afetadas deverão possuir mecanismos proporcionais de revisão e correção.

---

## 1029. Garantia de interoperabilidade

Trocas deverão preservar significado, identidade, qualidade, contexto, segurança e responsabilidade.

---

## 1030. Garantia de federação

A cooperação não deverá eliminar autonomia, autoridade local, fronteiras ou direito de desconexão.

---

## 1031. Garantia de evidência

Ações e decisões relevantes deverão produzir registros íntegros, temporais e correlacionáveis.

---

## 1032. Garantia de recuperação

Dados essenciais deverão poder ser restaurados, reconstruídos, validados e reconciliados.

---

## 1033. Garantia de continuidade

Fluxos essenciais deverão possuir alternativas, objetivos, responsáveis, testes e procedimentos.

---

## 1034. Garantia de retenção

Nenhum dado deverá permanecer ou ser eliminado sem fundamento e ciclo de vida definidos.

---

## 1035. Garantia de portabilidade

Fornecedores, formatos e integrações não deverão impedir saída, migração e continuidade legítimas.

---

## 1036. Garantia de aprendizagem governada

Experiências poderão melhorar a arquitetura sem alterar silenciosamente verdade, finalidade, autoridade ou direitos.

---

## 1037. Modelo integrado da operação de dados

O modelo deverá integrar:

- necessidade;
- finalidade;
- definição;
- produção;
- validação;
- classificação;
- armazenamento;
- transformação;
- integração;
- consumo;
- observação;
- correção;
- retenção;
- aprendizagem.

---

## 1038. Fluxo integrado

O fluxo institucional deverá seguir:

1. reconhecer a necessidade;
2. declarar a finalidade;
3. definir o significado;
4. atribuir responsabilidade;
5. classificar;
6. coletar;
7. validar;
8. registrar proveniência;
9. armazenar;
10. transformar;
11. integrar;
12. consumir;
13. observar;
14. corrigir;
15. reconciliar;
16. preservar;
17. eliminar;
18. aprender.

---

## 1039. Necessidade antes da coleta

A Plataforma UNO não deverá coletar primeiro para procurar utilidade depois.

---

## 1040. Significado antes do formato

A tecnologia escolhida não deverá determinar silenciosamente o significado institucional.

---

## 1041. Qualidade antes da decisão

Dados inadequados deverão reduzir confiança, autonomia e impacto permitido.

---

## 1042. Autoridade antes do compartilhamento

A capacidade técnica de transferir não constitui legitimidade para compartilhar.

---

## 1043. Evidência antes da confirmação

Nenhum fluxo deverá declarar sucesso sem resultado persistido e verificável.

---

## 1044. Reconciliação antes do encerramento

Divergências relevantes deverão ser tratadas ou explicitamente atribuídas.

---

## 1045. Reparação antes do esquecimento

Erros que afetaram pessoas e decisões deverão ser corrigidos antes da simples eliminação do registro problemático.

---

## 1046. Aprendizagem antes da repetição

Falhas conhecidas deverão produzir mudança acompanhada.

---

## 1047. Relação com o arquivo 014

Configurações, esquemas, contratos e estados dos fluxos deverão permanecer versionados e reconhecíveis.

---

## 1048. Relação com o arquivo 015

Capacidade, desempenho e saturação deverão considerar volume, velocidade, armazenamento, filas e consumidores.

---

## 1049. Relação com o arquivo 016

Disponibilidade e confiabilidade deverão ser definidas por produto e fluxo de dados.

---

## 1050. Relação com o arquivo 017

Fontes, bancos, pipelines, integrações, fornecedores e consumidores deverão integrar o mapa de dependências e impacto.

---

## 1051. Relação com o arquivo 018

A operação degradada deverá preservar dados essenciais, comunicar limitações e permitir reconciliação posterior.

---

## 1052. Relação com o arquivo 019

Backups deverão preservar dados, esquemas, metadados, contratos, configurações e recuperabilidade.

---

## 1053. Relação com o arquivo 020

Continuidade deverá preservar acesso, significado, integridade, autoridade e memória.

---

## 1054. Relação com o arquivo 021

Procedimentos deverão orientar correção, reconciliação, recuperação, exportação, retenção e eliminação.

---

## 1055. Relação com o arquivo 022

Automações deverão operar dados dentro de contratos, políticas, evidências e limites.

---

## 1056. Relação com o arquivo 023

Agentes deverão utilizar somente dados necessários, preservar proveniência e reconhecer incerteza.

---

## 1057. Relação com o arquivo 024

A segurança deverá proteger identidades, fluxos, dados, evidências, integrações e continuidade.

---

## 1058. Relação com a EVA

A EVA deverá transformar dados em compreensão, memória, adaptação e aprendizagem sem confundir representação com realidade.

---

## 1059. Relação com o OM

O OM poderá coordenar fluxos sem concentrar toda a informação, autoridade ou responsabilidade.

---

## 1060. Relação com o CCM

O CCM utilizará dados para perceber, compreender, priorizar, decidir, executar, avaliar e aprender em torno das missões.

---

## 1061. Relação com a NÓS S.A.

A NÓS S.A., como instituição curadora, deverá preservar:

- semântica;
- princípios;
- memória;
- governança;
- continuidade;
- responsabilidade;
- evolução dos dados.

---

## 1062. Relação com Nosso Zelo

Nosso Zelo deverá permitir que pessoas:

- compreendam dados utilizados;
- protejam sua identidade;
- acompanhem solicitações;
- corrijam informações;
- controlem compartilhamentos aplicáveis;
- contestem resultados;
- recebam atendimento.

---

## 1063. O que a operação de dados jamais deverá fazer

Jamais deverá:

- coletar sem propósito;
- ocultar origem;
- inventar fato;
- apagar divergência;
- compartilhar sem autoridade;
- manter indefinidamente por conveniência;
- reduzir pessoas a pontuações;
- corrigir sem histórico;
- confirmar sem evidência;
- utilizar simulação como realidade;
- transformar dado em poder sem responsabilidade.

---

## 1064. Princípios permanentes

A operação deverá permanecer orientada por:

- vida;
- dignidade;
- verdade;
- propósito;
- prudência;
- justiça;
- responsabilidade;
- legitimidade;
- transparência;
- cooperação;
- continuidade;
- aprendizagem.

---

## 1065. Virtudes aplicadas

As virtudes serão expressas como:

- honestidade para preservar a verdade;
- prudência para reconhecer limitações;
- justiça para avaliar impactos;
- temperança para limitar coleta;
- humildade para admitir desconhecimento;
- cuidado para proteger pessoas;
- cooperação para compartilhar com responsabilidade;
- perseverança para reconciliar;
- responsabilidade para responder pelos usos;
- sabedoria para transformar informação em serviço.

---

## 1066. Declaração de capacidade operacional

A Plataforma UNO estará preparada para operar dados quando conseguir demonstrar:

- por que existem;
- o que representam;
- de onde vieram;
- quem responde;
- com qual qualidade;
- quem pode utilizá-los;
- por onde circulam;
- como são protegidos;
- como são corrigidos;
- como são recuperados;
- quando serão eliminados;
- como pessoas poderão contestar.

---

## 1067. Resultado esperado

A aplicação deste documento deverá produzir dados e fluxos:

- contextualizados;
- íntegros;
- classificados;
- responsáveis;
- interoperáveis;
- seguros;
- recuperáveis;
- contestáveis;
- úteis;
- orientados ao propósito.

---

## 1068. Encerramento

A Plataforma UNO não deverá buscar acumular a maior quantidade possível de dados.

Deverá buscar compreender o necessário para servir melhor.

Um dado somente terá valor institucional quando puder ser relacionado a:

- uma necessidade;
- uma finalidade;
- uma fonte;
- um contexto;
- uma responsabilidade;
- uma decisão;
- um resultado;
- uma possibilidade de correção;
- um ciclo de vida.

A inteligência da Plataforma UNO não surgirá da simples concentração de registros.

Surgirá da capacidade de distinguir:

- realidade e representação;
- fato e inferência;
- memória e vigilância;
- conhecimento e acúmulo;
- compartilhamento e exposição;
- integração e centralização;
- aprendizagem e reutilização indevida.

A melhor arquitetura de dados não será aquela que faz toda informação chegar a todos.

Será aquela que permite que a informação necessária chegue às pessoas, organizações, agentes e missões legítimas:

- no momento adequado;
- com o significado correto;
- com qualidade conhecida;
- com proteção proporcional;
- com responsabilidade;
- com possibilidade de revisão;
- sem retirar dignidade e autonomia.

Quando os dados puderem circular sem perder origem, significado, contexto, segurança, responsabilidade e propósito, eles deixarão de ser registros fragmentados.

Tornar-se-ão memória viva, conhecimento aplicável e consciência informacional da Engenharia Oficial da Plataforma UNO.

---

**Fim do arquivo `025-operacao-de-dados-integracoes-e-fluxos.md`.**
