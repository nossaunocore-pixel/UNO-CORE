# 029 — Métricas, KPIs e Inteligência Operacional

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial para transformar sinais, eventos, dados, evidências, resultados e experiências operacionais em métricas, indicadores, KPIs e inteligência capaz de fortalecer:

- percepção;
- compreensão;
- decisão;
- coordenação;
- execução;
- avaliação;
- prestação de contas;
- aprendizagem;
- adaptação;
- evolução.

A Plataforma UNO deverá medir para compreender e servir melhor.

Ela não deverá medir para:

- vigiar indiscriminadamente;
- reduzir pessoas a números;
- fabricar desempenho;
- ocultar contexto;
- punir automaticamente;
- manipular comportamento;
- criar competição destrutiva;
- substituir julgamento responsável;
- produzir aparência de controle;
- justificar decisões previamente desejadas.

---

## Princípio central

> Uma métrica somente será legítima quando seu significado, sua finalidade, sua origem, suas limitações e suas consequências forem compreensíveis.

A inteligência operacional deverá transformar dados em compreensão sem perder:

- contexto;
- propósito;
- proveniência;
- incerteza;
- responsabilidade;
- dignidade;
- temporalidade;
- possibilidade de contestação.

---

## Regra fundamental

Nenhuma decisão de impacto relevante deverá apoiar-se exclusivamente em um indicador isolado.

Toda interpretação deverá considerar:

- propósito;
- contexto;
- fonte;
- qualidade;
- população;
- território;
- período;
- método;
- limitações;
- efeitos;
- possíveis distorções;
- evidências complementares.

---

## Relação com os arquivos anteriores

Este arquivo integra os fundamentos estabelecidos em:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`;
- `018-contingencia-recuperacao-e-operacao-degradada.md`;
- `019-backup-restauracao-e-recuperabilidade.md`;
- `020-continuidade-operacional-e-disaster-recovery.md`;
- `021-runbooks-playbooks-e-procedimentos-operacionais.md`;
- `022-automacao-operacional-e-auto-remediacao.md`;
- `023-agentes-operacionais-e-operacao-assistida-por-ia.md`;
- `024-seguranca-na-operacao-e-resposta-operacional.md`;
- `025-operacao-de-dados-integracoes-e-fluxos.md`;
- `026-operacao-federada-e-multi-organizacao.md`;
- `027-turnos-escalas-handover-e-continuidade-humana.md`;
- `028-operacao-critica-crise-e-modos-extraordinarios.md`.

---

## Estrutura de aprofundamento

Este arquivo será desenvolvido em seis lotes:

1. fundamentos, linguagem, propósito, objetos de medição, métricas e indicadores;
2. KPIs, objetivos, metas, SLIs, SLOs, desempenho, capacidade e resultados;
3. instrumentação, coleta, qualidade, proveniência, agregação e arquitetura analítica;
4. painéis, alertas, análise, correlação, previsão e inteligência operacional;
5. governança, ética, privacidade, auditoria, incentivos, decisões e aprendizagem;
6. modelo integrado, invariantes, garantias, implementação, maturidade e conclusão.

---

# Lote 1 — Fundamentos, Linguagem, Propósito, Objetos de Medição, Métricas e Indicadores

## 1. Propósito deste lote

Este lote estabelece a linguagem necessária para distinguir:

- realidade;
- fato;
- observação;
- sinal;
- evento;
- dado;
- medida;
- métrica;
- indicador;
- KPI;
- meta;
- resultado;
- inteligência operacional.

## 2. Realidade antes da medição

A realidade continuará existindo mesmo quando a Plataforma UNO não conseguir medi-la.

A ausência de dados poderá significar:

- ausência do fenômeno;
- ausência de coleta;
- falha de instrumentação;
- exclusão de pessoas;
- perda de comunicação;
- erro;
- atraso;
- invisibilidade institucional.

## 3. Medição como aproximação

Toda medição será uma representação limitada de parte da realidade.

Nenhuma métrica deverá ser confundida com a totalidade do fenômeno representado.

## 4. Propósito da medição

Antes de criar uma métrica, deverá ser possível responder:

- por que medir;
- o que compreender;
- quem utilizará;
- qual decisão apoiará;
- qual risco acompanhará;
- qual comportamento poderá induzir;
- qual custo produzirá;
- quando deixará de ser necessária.

## 5. Medir para perceber

Medições deverão permitir reconhecer:

- mudanças;
- desvios;
- tendências;
- riscos;
- oportunidades;
- necessidades;
- impactos;
- resultados.

## 6. Medir para compreender

A medição deverá ajudar a relacionar:

- causas;
- condições;
- contextos;
- comportamentos;
- dependências;
- consequências;
- limitações.

## 7. Medir para decidir

O indicador deverá apoiar decisões específicas e responsáveis.

## 8. Medir para coordenar

Métricas compartilhadas poderão criar entendimento comum entre:

- pessoas;
- equipes;
- organizações;
- territórios;
- autoridades;
- agentes.

## 9. Medir para executar

A operação deverá utilizar sinais para ajustar:

- prioridade;
- capacidade;
- recursos;
- escala;
- fluxo;
- serviço;
- resposta;
- recuperação.

## 10. Medir para prestar contas

A medição deverá demonstrar:

- compromissos;
- recursos;
- ações;
- resultados;
- impactos;
- falhas;
- correções;
- continuidade.

## 11. Medir para aprender

Experiências deverão produzir evidências capazes de melhorar a capacidade futura.

## 12. Medir para proteger

Indicadores poderão antecipar riscos sobre:

- pessoas;
- serviços;
- dados;
- territórios;
- organizações;
- infraestrutura;
- confiança.

## 13. Medição ilegítima

Será ilegítima quando:

- não possuir finalidade;
- coletar além do necessário;
- ocultar método;
- produzir discriminação;
- violar direitos;
- manipular decisões;
- fabricar resultado;
- vigiar sem necessidade;
- permanecer após o propósito.

## 14. Custo da medição

Toda medição poderá consumir:

- tempo;
- atenção;
- armazenamento;
- processamento;
- energia;
- dinheiro;
- trabalho;
- privacidade;
- complexidade;
- confiança.

## 15. Valor da medição

O benefício esperado deverá justificar seu custo e seus riscos.

## 16. Objeto de medição

Objeto de medição será aquilo sobre o qual se pretende produzir compreensão.

Poderá ser:

- pessoa;
- equipe;
- organização;
- serviço;
- capacidade;
- recurso;
- processo;
- Missão;
- território;
- decisão;
- risco;
- evento;
- resultado;
- impacto.

## 17. Objeto identificado

Todo objeto deverá possuir identidade ou delimitação suficiente para evitar mistura indevida.

## 18. Objeto composto

Um objeto poderá ser formado por múltiplos componentes.

A métrica deverá declarar se representa:

- componente;
- conjunto;
- cadeia;
- resultado integrado;
- população;
- amostra.

## 19. Objeto mutável

A alteração de composição deverá ser considerada na interpretação histórica.

## 20. População

População será o conjunto completo de elementos sobre o qual se deseja compreender determinado fenômeno.

## 21. Amostra

Amostra será um subconjunto utilizado para inferir características da população.

## 22. Representatividade

A amostra deverá ser avaliada quanto à capacidade de representar:

- grupos;
- territórios;
- períodos;
- condições;
- comportamentos;
- exceções.

## 23. Viés de seleção

Poderá ocorrer quando determinados elementos possuírem maior ou menor probabilidade de aparecer nos dados.

## 24. População invisível

Pessoas sem acesso, registro ou conectividade poderão não aparecer nas métricas, mesmo necessitando do serviço.

## 25. Unidade de análise

A unidade de análise deverá indicar se a métrica representa:

- pessoa;
- atendimento;
- evento;
- período;
- território;
- organização;
- transação;
- serviço;
- Missão.

## 26. Unidade de medida

A unidade deverá ser explícita, como:

- segundos;
- minutos;
- horas;
- pessoas;
- eventos;
- reais;
- porcentagem;
- bytes;
- quilômetros;
- solicitações;
- pontos.

## 27. Dimensão

Dimensão será um atributo usado para segmentar ou contextualizar uma medida.

Poderá incluir:

- tempo;
- território;
- organização;
- serviço;
- canal;
- categoria;
- estado;
- prioridade;
- população.

## 28. Dimensão protegida

Dimensões relacionadas a características pessoais sensíveis deverão possuir finalidade e proteção reforçadas.

## 29. Granularidade

Granularidade será o nível de detalhe da medição.

## 30. Granularidade temporal

Poderá representar:

- instante;
- minuto;
- hora;
- turno;
- dia;
- semana;
- mês;
- ciclo;
- ano.

## 31. Granularidade territorial

Poderá representar:

- local;
- unidade;
- bairro;
- município;
- região;
- estado;
- país;
- federação.

## 32. Granularidade organizacional

Poderá representar:

- pessoa;
- equipe;
- unidade;
- organização;
- rede;
- ecossistema.

## 33. Granularidade e privacidade

Quanto maior o detalhe, maior poderá ser o risco de identificar pessoas ou situações sensíveis.

## 34. Granularidade e utilidade

Dados excessivamente agregados poderão ocultar:

- desigualdades;
- riscos;
- exceções;
- falhas locais;
- grupos vulneráveis.

## 35. Equilíbrio de granularidade

A escolha deverá equilibrar:

- finalidade;
- utilidade;
- privacidade;
- custo;
- segurança;
- compreensão;
- capacidade de ação.

## 36. Observação

Observação será o registro de uma característica ou acontecimento percebido.

## 37. Observação direta

Será produzida por contato imediato com o fenômeno.

## 38. Observação indireta

Será produzida por meio de:

- sensor;
- sistema;
- relato;
- documento;
- inferência;
- agregação;
- indicador.

## 39. Fato observado

Deverá ser distinguido de interpretação, estimativa e conclusão.

## 40. Sinal

Sinal será uma manifestação capaz de indicar estado ou mudança.

## 41. Evento

Evento será uma ocorrência delimitada no tempo.

## 42. Estado

Estado será a condição atribuída a um objeto em determinado momento.

## 43. Dado

Dado será uma representação registrada de observação, evento, estado, declaração, cálculo ou inferência.

## 44. Dado bruto

Será aquele ainda não submetido a transformações analíticas relevantes.

## 45. Dado tratado

Será resultado de:

- limpeza;
- padronização;
- enriquecimento;
- correção;
- classificação;
- transformação;
- agregação.

## 46. Dado derivado

Será calculado a partir de outros dados.

## 47. Dado declarado

Será fornecido por pessoa ou organização.

## 48. Dado observado

Será produzido por observação, sensor ou sistema.

## 49. Dado inferido

Será estimado por regra, análise, algoritmo ou modelo.

## 50. Dado estimado

Será uma aproximação utilizada quando a medida exata não estiver disponível.

## 51. Dado sintético

Será produzido artificialmente para:

- teste;
- treinamento;
- simulação;
- proteção;
- experimentação.

## 52. Identificação de dado sintético

Dados e cenários fictícios deverão ser marcados como:

**SIMULAÇÃO**

## 53. Dado ausente

A ausência deverá ser distinguida entre:

- não coletado;
- indisponível;
- não aplicável;
- desconhecido;
- perdido;
- protegido;
- recusado;
- aguardando.

## 54. Zero não é ausência

O valor zero representa uma observação.

Ele não deverá substituir campo ausente.

## 55. Valor nulo

O valor nulo deverá possuir significado definido e não ser utilizado ambiguamente.

## 56. Medida

Medida será o valor obtido pela observação ou cálculo de uma propriedade.

## 57. Medida direta

Será obtida diretamente do objeto ou fenômeno.

## 58. Medida indireta

Será calculada por meio de variável relacionada.

## 59. Medida absoluta

Representará quantidade sem normalização por outro valor.

## 60. Medida relativa

Representará relação, proporção, taxa ou comparação.

## 61. Contagem

Contagem será o número de ocorrências de determinado tipo.

## 62. Soma

A soma agregará valores compatíveis.

## 63. Média

A média aritmética poderá representar tendência central, mas poderá ser distorcida por valores extremos.

## 64. Mediana

A mediana poderá representar melhor o comportamento típico em distribuições assimétricas.

## 65. Moda

A moda indicará o valor ou categoria mais frequente.

## 66. Percentil

O percentil deverá demonstrar a distribuição de valores além da média.

## 67. Mínimo

O valor mínimo poderá indicar melhor caso, erro, exceção ou ausência de cobertura.

## 68. Máximo

O máximo poderá indicar pior caso, pico, erro ou evento extremo.

## 69. Amplitude

A amplitude mostrará a diferença entre extremos.

## 70. Variância

A variância ajudará a compreender dispersão.

## 71. Desvio padrão

Deverá ser utilizado apenas quando sua interpretação fizer sentido para o fenômeno.

## 72. Distribuição

A distribuição deverá ser observada quando valores agregados ocultarem comportamentos diferentes.

## 73. Taxa

Taxa relacionará ocorrências a uma base e período.

## 74. Razão

Razão comparará duas quantidades.

## 75. Proporção

Proporção representará uma parte em relação ao conjunto.

## 76. Percentual

Todo percentual deverá indicar claramente seu denominador.

## 77. Denominador

O denominador deverá permanecer íntegro, compreensível e compatível com a pergunta.

## 78. Mudança de denominador

Alterações deverão ser registradas porque podem criar falsa tendência.

## 79. Métrica

Métrica será uma medida definida, calculada e interpretada segundo finalidade conhecida.

## 80. Métrica simples

Poderá derivar de uma única medida.

## 81. Métrica composta

Poderá combinar múltiplas medidas.

## 82. Métrica técnica

Poderá representar:

- latência;
- disponibilidade;
- erro;
- capacidade;
- consumo;
- saturação;
- recuperação.

## 83. Métrica operacional

Poderá representar:

- fila;
- tempo;
- execução;
- volume;
- cobertura;
- produtividade;
- retrabalho;
- qualidade.

## 84. Métrica humana

Poderá representar condições coletivas de:

- jornada;
- cobertura;
- fadiga;
- segurança;
- treinamento;
- participação;
- continuidade.

## 85. Métrica institucional

Poderá representar:

- decisões;
- conformidade;
- autoridade;
- contratos;
- transparência;
- prestação de contas;
- participação.

## 86. Métrica territorial

Poderá representar:

- cobertura;
- acesso;
- necessidade;
- infraestrutura;
- risco;
- impacto;
- desigualdade;
- capacidade local.

## 87. Métrica financeira

Poderá representar:

- custo;
- receita;
- orçamento;
- consumo;
- saldo;
- reserva;
- retorno;
- reparação.

## 88. Métrica ambiental

Poderá representar:

- consumo;
- emissão;
- resíduos;
- contaminação;
- recuperação;
- preservação;
- impacto.

## 89. Métrica de segurança

Poderá representar:

- incidentes;
- exposições;
- vulnerabilidades;
- tempo de resposta;
- controle;
- recorrência;
- risco residual.

## 90. Métrica de confiança

Deverá ser composta por evidências contextuais, não por uma pontuação absoluta e permanente.

## 91. Métrica de cooperação

Poderá considerar:

- compromissos;
- apoio;
- resposta;
- handovers;
- conflitos;
- compartilhamento;
- continuidade;
- aprendizagem.

## 92. Métrica de qualidade

Deverá relacionar o resultado aos requisitos e necessidades legítimas.

## 93. Métrica de efetividade

Deverá demonstrar se a ação produziu o efeito desejado.

## 94. Métrica de eficiência

Deverá relacionar resultado e recursos consumidos.

## 95. Eficiência sem efetividade

Uma atividade poderá ser rápida e barata sem resolver a necessidade.

## 96. Efetividade sem sustentabilidade

Uma solução poderá produzir resultado imediato consumindo capacidade futura de modo inadequado.

## 97. Métrica de equidade

Deverá revelar diferenças de:

- acesso;
- qualidade;
- tempo;
- resultado;
- cobertura;
- impacto;
- recurso;
- participação.

## 98. Métrica de acessibilidade

Poderá avaliar se pessoas com diferentes condições conseguem utilizar os serviços.

## 99. Métrica de continuidade

Poderá representar:

- disponibilidade;
- substituição;
- recuperação;
- capacidade mínima;
- perda;
- duração;
- recorrência.

## 100. Métrica de aprendizagem

Deverá medir transformação aplicada, e não apenas quantidade de relatórios ou treinamentos.

## 101. Métrica de resultado

Deverá representar a transformação produzida.

## 102. Métrica de atividade

Representará o que foi realizado.

## 103. Atividade não é resultado

Quantidade de atendimentos não comprovará que a necessidade foi resolvida.

## 104. Métrica de saída

Representará produtos imediatos da operação.

## 105. Métrica de efeito

Representará mudanças posteriores relacionadas à saída.

## 106. Métrica de impacto

Representará transformações relevantes de maior alcance ou duração.

## 107. Atribuição de impacto

A organização deverá evitar atribuir exclusivamente a si resultados influenciados por múltiplos fatores.

## 108. Indicador

Indicador será uma métrica interpretada para sinalizar estado, tendência, risco, desempenho ou resultado.

## 109. Indicador descritivo

Demonstrará o que aconteceu ou está acontecendo.

## 110. Indicador diagnóstico

Ajudará a compreender por que algo ocorreu.

## 111. Indicador preditivo

Estimará o que poderá ocorrer.

## 112. Indicador prescritivo

Apoiará a escolha de ações possíveis.

## 113. Indicador antecedente

Poderá antecipar mudanças futuras.

## 114. Indicador consequente

Demonstrará resultado após o acontecimento.

## 115. Indicador de entrada

Representará recursos e condições disponibilizadas.

## 116. Indicador de processo

Representará como a operação é executada.

## 117. Indicador de saída

Representará entregas produzidas.

## 118. Indicador de resultado

Representará mudanças alcançadas.

## 119. Indicador de impacto

Representará efeitos amplos ou prolongados.

## 120. Indicador de risco

Sinalizará probabilidade, exposição, impacto ou fragilidade.

## 121. Indicador de controle

Demonstrará se uma medida de proteção está presente e funcionando.

## 122. Indicador de conformidade

Demonstrará atendimento a requisitos aplicáveis.

## 123. Indicador de saúde operacional

Representará capacidade de continuar operando de forma sustentável.

## 124. Indicador de alerta

Deverá possuir limite e ação associada.

## 125. Indicador sentinela

Deverá revelar evento raro ou grave que exige investigação imediata.

## 126. Indicador composto

Combinará várias métricas sob regra explícita.

## 127. Peso

Cada componente deverá possuir peso justificado.

## 128. Pontuação

Pontuações deverão preservar acesso aos componentes originais e às limitações.

## 129. Índice

Um índice deverá possuir metodologia estável, versionada e verificável.

## 130. Semáforo

Representações por cores deverão possuir:

- critérios;
- significado;
- acessibilidade;
- valor textual;
- histórico;
- tratamento de transição.

## 131. Cor não como único meio

Estados não deverão ser comunicados apenas por cor.

## 132. Tendência

Tendência será o comportamento observado ao longo do tempo.

## 133. Tendência não é causalidade

A variação conjunta de valores não comprovará que um causa o outro.

## 134. Correlação

A correlação deverá ser tratada como relação estatística que exige interpretação.

## 135. Causalidade

Afirmações causais deverão possuir evidência e método suficientes.

## 136. Linha de base

A linha de base será a referência utilizada para avaliar mudança.

## 137. Linha de base contextual

Deverá corresponder a período e condição comparáveis.

## 138. Linha de base mutável

Mudanças estruturais poderão exigir nova referência sem apagar o histórico anterior.

## 139. Benchmark

Benchmark será referência externa ou interna utilizada para comparação.

## 140. Comparação legítima

Somente deverá ocorrer entre objetos suficientemente comparáveis.

## 141. Comparação contextual

Deverá considerar:

- território;
- população;
- capacidade;
- risco;
- recursos;
- maturidade;
- demanda;
- obrigações.

## 142. Ranking

Rankings deverão ser evitados quando simplificarem realidades diferentes e induzirem competição destrutiva.

## 143. Meta

Meta será um estado ou valor desejado dentro de período definido.

## 144. Meta orientada ao propósito

A meta deverá possuir relação clara com a transformação pretendida.

## 145. Meta absoluta

Estabelecerá valor fixo.

## 146. Meta relativa

Estabelecerá mudança em relação a uma referência.

## 147. Meta mínima

Definirá limite inferior aceitável.

## 148. Meta máxima

Definirá limite superior que não deverá ser ultrapassado.

## 149. Faixa-alvo

Poderá ser mais adequada do que um único valor.

## 150. Meta aspiracional

Poderá orientar evolução sem ser confundida com compromisso operacional obrigatório.

## 151. Meta contratual

Deverá possuir regra, responsabilidade e consequência claramente definidas.

## 152. Meta normativa

Deverá representar requisito legal, regulatório ou institucional aplicável.

## 153. Meta adaptativa

Poderá ser revisada conforme contexto, mantendo histórico e autoridade.

## 154. Meta impossível

Metas incompatíveis com capacidade e realidade poderão incentivar:

- manipulação;
- ocultação;
- sobrecarga;
- exclusão;
- redução de qualidade;
- fraude;
- abandono do propósito.

## 155. Meta fácil demais

Poderá criar aparência de desempenho sem transformação relevante.

## 156. Meta conflitante

A organização deverá identificar conflitos entre metas, como:

- velocidade e qualidade;
- custo e reserva;
- volume e profundidade;
- automação e supervisão;
- crescimento e sustentabilidade.

## 157. Meta sem consequência compreendida

Antes de aprová-la, deverá ser analisado qual comportamento poderá incentivar.

## 158. Lei de Goodhart

Quando uma medida se transforma em alvo rígido, poderá deixar de representar adequadamente o fenômeno original.

## 159. Gaming

Gaming será a manipulação de comportamento, seleção, classificação ou dados para aparentar cumprimento.

## 160. Manipulação do numerador

Poderá ocorrer por exclusão, recategorização ou alteração das ocorrências contadas.

## 161. Manipulação do denominador

Poderá ocorrer pela alteração indevida da população de referência.

## 162. Seleção de casos

Recusar situações complexas para melhorar indicadores deverá ser tratado como desvio grave.

## 163. Deslocamento de problema

Transferir a demanda para outra equipe ou organização não representará resolução.

## 164. Atraso de registro

Adiar registros para alterar resultados de período deverá ser detectado.

## 165. Indicador perverso

Será aquele que incentiva comportamento contrário ao propósito ou aos princípios.

## 166. Revisão do indicador

Indicadores deverão ser suspensos ou modificados quando produzirem consequências negativas relevantes.

## 167. Catálogo de métricas

A Plataforma UNO deverá manter catálogo contendo:

- nome;
- finalidade;
- objeto;
- definição;
- fórmula;
- unidade;
- fonte;
- frequência;
- dimensões;
- responsável;
- limitações;
- versão.

## 168. Identidade da métrica

Cada métrica deverá possuir identificador persistente.

## 169. Nome compreensível

O nome deverá comunicar o fenômeno representado sem ambiguidade desnecessária.

## 170. Definição operacional

Deverá explicar exatamente como a métrica é produzida.

## 171. Responsável pela métrica

Toda métrica deverá possuir responsável por:

- significado;
- qualidade;
- revisão;
- documentação;
- comunicação;
- encerramento.

## 172. Usuários da métrica

Deverão ser identificadas as pessoas, equipes, organizações ou agentes que utilizarão o resultado.

## 173. Decisões apoiadas

O catálogo deverá indicar quais decisões a métrica pode e não pode sustentar.

## 174. Invariante do significado

Nenhuma métrica deverá ser utilizada fora de seu significado, contexto e finalidade sem nova análise.

## 175. Resultado do Lote 1

Ao final desta camada, a Plataforma UNO deverá ser capaz de distinguir e relacionar:

- realidade;
- objeto;
- população;
- amostra;
- observação;
- sinal;
- evento;
- dado;
- medida;
- métrica;
- indicador;
- meta;
- atividade;
- resultado;
- impacto.

A inteligência operacional não começará quando um painel for aberto.

Ela começará quando a organização souber:

- por que está medindo;
- o que a medida representa;
- o que ela não representa;
- de onde veio;
- quem será afetado;
- qual decisão poderá apoiar;
- quando deverá ser contestada;
- quando deverá deixar de existir.

---

# Lote 2 — KPIs, Objetivos, Metas, SLIs, SLOs, Desempenho, Capacidade e Resultados

## 176. Da métrica ao compromisso operacional

Uma métrica descreve algum aspecto observável da realidade.

Um indicador interpreta essa medição em determinado contexto.

Um KPI destaca aquilo que é decisivo para o desempenho, a continuidade, o propósito ou a responsabilidade institucional.

A transformação de uma métrica em KPI exige justificativa explícita. Nem tudo o que pode ser medido merece ocupar a atenção prioritária da organização.

## 177. Definição de KPI

KPI — Key Performance Indicator — é um indicador considerado fundamental para avaliar se uma capacidade, serviço, processo, Missão ou organização está alcançando o desempenho necessário.

Todo KPI deverá possuir:

- propósito;
- objeto de medição;
- fórmula;
- fonte;
- responsável;
- periodicidade;
- unidade;
- contexto;
- meta ou faixa esperada;
- limites de interpretação;
- consequência decisória.

## 178. Métrica não é automaticamente KPI

Uma métrica torna-se KPI quando sua variação influencia uma decisão relevante.

Consequentemente:

- toda KPI é uma métrica ou deriva de métricas;
- nem toda métrica é um indicador;
- nem todo indicador é uma KPI;
- nem toda KPI deve permanecer prioritária para sempre.

A classificação dependerá da realidade operacional e do propósito institucional.

## 179. Criticidade de uma KPI

A criticidade de uma KPI será determinada pela relação entre o indicador e:

- segurança;
- continuidade;
- capacidade;
- qualidade;
- cumprimento de obrigações;
- impacto social;
- risco institucional;
- sustentabilidade;
- confiança;
- realização de propósito.

Indicadores críticos deverão receber maior rigor de coleta, validação, monitoramento e resposta.

## 180. KPIs estratégicas

KPIs estratégicas demonstram se a organização avança na direção de seu propósito e de seus compromissos permanentes.

Podem acompanhar:

- valor público gerado;
- impacto institucional;
- alcance de objetivos;
- sustentabilidade;
- confiança do ecossistema;
- evolução de capacidades;
- resiliência organizacional;
- cumprimento de compromissos de longo prazo.

Não deverão ser reduzidas a resultados financeiros.

## 181. KPIs táticas

KPIs táticas conectam objetivos estratégicos a capacidades, programas, serviços e Missões coordenadas.

Elas ajudam a compreender:

- se os recursos estão adequadamente distribuídos;
- se as capacidades suportam os objetivos;
- se os riscos estão sendo reduzidos;
- se os resultados intermediários estão sendo alcançados;
- se mudanças operacionais produzem os efeitos esperados.

## 182. KPIs operacionais

KPIs operacionais acompanham o funcionamento cotidiano de serviços, processos, fluxos, agentes, integrações e infraestruturas.

Podem observar:

- disponibilidade;
- latência;
- vazão;
- filas;
- falhas;
- saturação;
- incidentes;
- tempo de recuperação;
- qualidade;
- retrabalho;
- cumprimento de procedimentos.

Seu uso não deverá eliminar a interpretação contextual.

## 183. KPIs institucionais

KPIs institucionais verificam se a operação preserva legitimidade, responsabilidade, governança e coerência com a Engenharia Oficial.

Incluem indicadores relacionados a:

- conformidade;
- rastreabilidade;
- prestação de contas;
- exercício de autoridade;
- proteção de direitos;
- transparência;
- participação;
- integridade;
- continuidade institucional.

## 184. KPIs humanas

KPIs humanas acompanham as condições nas quais pessoas trabalham, decidem, colaboram e recebem os efeitos da operação.

Podem compreender:

- carga de trabalho;
- fadiga;
- segurança;
- bem-estar;
- desenvolvimento;
- autonomia responsável;
- qualidade do handover;
- capacidade de concentração;
- exposição a riscos;
- inclusão e acessibilidade.

Pessoas não deverão ser reduzidas a unidades de produtividade.

## 185. KPIs de ecossistema

KPIs de ecossistema avaliam relações entre organizações, comunidades, serviços, agentes e infraestruturas interdependentes.

Elas poderão observar:

- cooperação;
- interoperabilidade;
- confiança;
- compartilhamento de capacidades;
- concentração de dependências;
- riscos sistêmicos;
- distribuição de benefícios;
- continuidade entre fronteiras;
- valor coletivo produzido.

## 186. KPI sem decisão vinculada

Uma KPI sem decisão vinculada tende a tornar-se decoração de painel.

Cada KPI deverá declarar:

- quem a observa;
- quando deve ser analisada;
- qual decisão pode ser influenciada;
- quais limites acionam investigação;
- quais limites autorizam resposta;
- quem responde pela ação;
- como a decisão será registrada.

## 187. Dono da KPI

Toda KPI deverá possuir uma responsabilidade claramente atribuída.

O responsável pela KPI não será necessariamente responsável por executar todo o trabalho relacionado a ela.

Sua função será garantir:

- definição correta;
- integridade semântica;
- atualização;
- interpretação;
- tratamento de desvios;
- comunicação;
- revisão;
- preservação histórica.

## 188. Curadoria das KPIs

A curadoria impedirá que o catálogo de KPIs se transforme em acúmulo indiscriminado de números.

A curadoria deverá:

- eliminar duplicidades;
- identificar contradições;
- preservar definições;
- revisar utilidade;
- controlar versões;
- documentar mudanças;
- retirar indicadores obsoletos;
- manter relações com objetivos e decisões.

## 189. Público de uma KPI

A mesma KPI poderá exigir diferentes formas de apresentação conforme seu público.

Entre os públicos possíveis estão:

- operadores;
- especialistas;
- coordenadores;
- gestores;
- diretores;
- curadores;
- auditores;
- organizações parceiras;
- autoridades;
- comunidades;
- cidadãos.

A visualização poderá mudar, mas o significado da KPI deverá permanecer coerente.

## 190. Cadência de acompanhamento

Cada KPI deverá possuir uma cadência compatível com a velocidade da realidade que representa.

A cadência poderá ser:

- contínua;
- em tempo real;
- por evento;
- horária;
- diária;
- semanal;
- mensal;
- trimestral;
- anual;
- por ciclo de Missão.

Atualização frequente não significa necessariamente maior utilidade.

## 191. Janela de observação

A interpretação de uma KPI dependerá da janela temporal utilizada.

Uma mesma realidade poderá parecer:

- estável em uma janela longa;
- crítica em uma janela curta;
- sazonal em uma comparação anual;
- anormal em relação ao comportamento recente.

Toda visualização deverá informar claramente a janela observada.

## 192. Objetivos operacionais

Objetivos operacionais descrevem condições que a operação pretende alcançar, preservar ou recuperar.

Um objetivo bem definido deverá indicar:

- resultado pretendido;
- contexto;
- população ou serviço alcançado;
- horizonte temporal;
- restrições;
- responsabilidades;
- critérios de verificação.

O objetivo precede a seleção das KPIs.

## 193. Objetivos antes dos indicadores

A Plataforma UNO não deverá escolher indicadores apenas porque os dados estão disponíveis.

A sequência correta será:

1. compreender a necessidade;
2. declarar o propósito;
3. estabelecer o objetivo;
4. identificar o resultado esperado;
5. selecionar as evidências;
6. definir métricas e indicadores;
7. estabelecer decisões relacionadas.

## 194. Objetivos qualitativos

Nem todo objetivo poderá ser adequadamente representado por um único número.

Objetivos como confiança, dignidade, cooperação, legitimidade e maturidade institucional exigirão:

- múltiplas evidências;
- avaliações qualitativas;
- participação humana;
- contexto histórico;
- interpretação responsável;
- documentação de limites.

## 195. Resultados-chave

Resultados-chave poderão ser utilizados para tornar verificável o progresso de um objetivo.

Eles deverão:

- representar mudança relevante;
- ser mensuráveis ou verificáveis;
- possuir prazo;
- evitar confusão com tarefas;
- preservar conexão com o propósito;
- admitir revisão diante de mudança legítima de contexto.

## 196. Limites do uso de OKRs

A Plataforma UNO poderá empregar conceitos de objetivos e resultados-chave, mas não deverá transformar qualquer estrutura gerencial em verdade universal.

OKRs não substituirão:

- obrigações legais;
- responsabilidades permanentes;
- níveis mínimos de segurança;
- SLAs;
- SLOs;
- deveres institucionais;
- compromissos éticos;
- continuidade operacional.

## 197. Meta não é propósito

A meta representa uma referência operacional de desempenho.

O propósito explica por que o resultado importa.

Uma organização poderá atingir uma meta e ainda assim falhar em seu propósito caso:

- produza efeitos adversos;
- transfira custos indevidos;
- manipule medições;
- prejudique pessoas;
- enfraqueça a continuidade;
- viole princípios;
- destrua capacidades futuras.

## 198. Natureza das metas

Metas poderão ser:

- mínimas;
- máximas;
- exatas;
- progressivas;
- proporcionais;
- temporárias;
- condicionais;
- adaptativas;
- comparativas;
- orientadas por faixa.

A natureza da meta deverá ser compatível com o fenômeno observado.

## 199. Metas mínimas

Uma meta mínima estabelece o menor desempenho aceitável.

Ela poderá ser aplicada a:

- disponibilidade;
- cobertura;
- qualidade;
- segurança;
- conclusão;
- confiabilidade;
- capacidade de resposta;
- preservação de evidências.

Atingir a meta mínima não significa que não haja espaço para evolução.

## 200. Metas máximas

Metas máximas estabelecem limites que não deverão ser ultrapassados.

Podem abranger:

- latência;
- exposição a risco;
- tempo de indisponibilidade;
- volume de erros;
- filas;
- saturação;
- retrabalho;
- tempo de recuperação;
- carga de trabalho;
- custo por resultado.

## 201. Metas por faixa

Fenômenos complexos frequentemente serão melhor governados por faixas do que por valores absolutos.

Uma faixa poderá indicar:

- condição saudável;
- atenção;
- degradação;
- criticidade;
- emergência;
- recuperação.

As transições entre faixas deverão possuir critérios explícitos.

## 202. Meta nominal e tolerância

Uma meta nominal representa o desempenho desejado.

A tolerância define a variação aceitável antes que o desvio exija resposta.

Toda tolerância deverá considerar:

- variabilidade natural;
- erro de medição;
- criticidade;
- capacidade de resposta;
- consequências;
- sazonalidade;
- custo de intervenção.

## 203. Limiares operacionais

Limiares são valores que acionam mudança de atenção, investigação ou resposta.

Eles poderão ser:

- informativos;
- preventivos;
- corretivos;
- críticos;
- emergenciais;
- regulatórios.

O cruzamento de um limiar não deverá produzir automação irreversível sem governança apropriada.

## 204. Histerese operacional

Para evitar alternância excessiva entre estados, a arquitetura poderá utilizar histerese.

O limiar para entrar em condição degradada poderá ser diferente do limiar necessário para retornar ao estado normal.

Isso reduz:

- oscilações;
- alertas repetitivos;
- respostas prematuras;
- instabilidade automatizada;
- desgaste operacional.

## 205. Metas estáticas

Metas estáticas permanecem constantes durante determinado período.

Elas são úteis quando:

- existe obrigação normativa;
- o limite representa condição de segurança;
- a estabilidade facilita governança;
- mudanças frequentes prejudicariam a interpretação;
- o compromisso institucional deve permanecer invariável.

## 206. Metas adaptativas

Metas adaptativas poderão variar segundo contexto, maturidade, demanda, risco ou capacidade.

Entretanto, a adaptação deverá ser:

- autorizada;
- transparente;
- rastreável;
- limitada;
- justificável;
- reversível;
- auditável.

Meta adaptativa não significa meta manipulável.

## 207. Metas condicionais

Uma meta poderá depender do estado operacional.

Por exemplo:

- em estado normal, aplicar o nível integral;
- em operação degradada, preservar funções essenciais;
- em contingência, priorizar segurança e continuidade;
- em recuperação, admitir desempenho progressivo;
- em emergência, preservar vidas e legitimidade.

## 208. Metas compartilhadas

Quando diferentes organizações contribuem para o mesmo resultado, poderão existir metas compartilhadas.

Essas metas deverão esclarecer:

- contribuição de cada parte;
- dependências;
- autoridade;
- dados compartilhados;
- critérios de atribuição;
- riscos comuns;
- forma de prestação de contas.

## 209. Metas conflitantes

Metas podem entrar em conflito.

Exemplos:

- velocidade versus segurança;
- redução de custos versus resiliência;
- automação versus supervisão;
- produtividade versus qualidade;
- disponibilidade versus manutenção;
- centralização versus autonomia.

Conflitos deverão ser reconhecidos e governados, não ocultados por médias.

## 210. Indicadores de equilíbrio

Indicadores de equilíbrio ajudam a verificar se a melhoria de uma dimensão prejudica outra.

Toda meta relevante poderá ser acompanhada de indicadores que protejam:

- qualidade;
- segurança;
- dignidade;
- continuidade;
- sustentabilidade;
- confiança;
- capacidade futura.

## 211. Leading indicators

Indicadores antecedentes buscam revelar condições que podem influenciar resultados futuros.

Exemplos:

- crescimento de filas;
- aumento de saturação;
- queda de cobertura;
- elevação de erros transitórios;
- fadiga de equipes;
- aumento de dependências frágeis;
- redução de capacidade reserva.

Eles apoiam prevenção, mas não garantem previsão perfeita.

## 212. Lagging indicators

Indicadores consequentes registram resultados já produzidos.

Exemplos:

- indisponibilidade ocorrida;
- incidentes concluídos;
- perdas confirmadas;
- resultados entregues;
- violações identificadas;
- tempo efetivo de recuperação;
- impacto observado.

São fundamentais para aprendizagem e prestação de contas.

## 213. Combinação entre indicadores antecedentes e consequentes

A inteligência operacional deverá combinar indicadores antecedentes e consequentes.

Somente indicadores antecedentes podem gerar excesso de previsões.

Somente indicadores consequentes tornam a operação permanentemente reativa.

A combinação permite:

- antecipar;
- confirmar;
- aprender;
- recalibrar;
- responsabilizar;
- evoluir.

## 214. SLI

SLI — Service Level Indicator — é uma medida que representa algum aspecto do nível de serviço efetivamente entregue.

Um SLI poderá medir:

- disponibilidade;
- sucesso de requisições;
- latência;
- integridade;
- atualidade;
- completude;
- durabilidade;
- tempo de resposta;
- qualidade percebida.

## 215. SLO

SLO — Service Level Objective — estabelece o nível de serviço que a organização pretende alcançar ou preservar.

Um SLO deverá declarar:

- SLI associado;
- população observada;
- janela de medição;
- objetivo;
- tolerância;
- exclusões legítimas;
- método de cálculo;
- consequência operacional.

## 216. SLA

SLA — Service Level Agreement — representa um compromisso formal entre partes.

Poderá estabelecer:

- níveis de serviço;
- responsabilidades;
- prazos;
- compensações;
- exceções;
- mecanismos de verificação;
- canais de comunicação;
- tratamento de descumprimento.

Nem todo SLO será um SLA, e nem todo SLA expressará toda a realidade operacional.

## 217. Relação entre SLI, SLO e SLA

A relação fundamental será:

- o SLI mede;
- o SLO orienta;
- o SLA formaliza compromissos entre partes.

A arquitetura deverá impedir que essas três entidades sejam tratadas como sinônimos.

## 218. SLO interno

SLOs internos poderão ser mais exigentes que compromissos externos.

Essa margem permite:

- detectar degradação antes do descumprimento;
- preservar capacidade de reação;
- apoiar manutenção;
- reduzir riscos;
- proteger a experiência;
- melhorar a confiabilidade.

## 219. SLO de disponibilidade

Um SLO de disponibilidade deverá definir o que significa “disponível”.

Não bastará verificar se um processo responde.

Será necessário considerar:

- funcionalidade;
- acessibilidade;
- integridade;
- dependências;
- desempenho aceitável;
- capacidade de concluir a finalidade;
- população efetivamente atendida.

## 220. SLO de latência

A latência deverá ser medida conforme a experiência real do consumidor do serviço.

A medição poderá considerar:

- tempo de início;
- tempo de processamento;
- tempo de espera;
- tempo de integração;
- tempo de resposta total;
- percentis;
- região;
- tipo de solicitação;
- canal utilizado.

## 221. SLO de qualidade

Um SLO de qualidade poderá observar:

- exatidão;
- completude;
- coerência;
- conformidade;
- resolução;
- ausência de defeitos;
- taxa de retrabalho;
- satisfação fundamentada;
- adequação ao propósito.

## 222. SLO de dados

Serviços de dados poderão possuir SLOs relacionados a:

- atualidade;
- integridade;
- disponibilidade;
- completude;
- consistência;
- precisão;
- rastreabilidade;
- durabilidade;
- tempo de propagação;
- recuperabilidade.

## 223. SLO de processo humano

Processos humanos também poderão possuir objetivos de nível de serviço.

Contudo, eles deverão respeitar:

- capacidade real;
- complexidade;
- jornada de trabalho;
- segurança;
- dignidade;
- necessidade de julgamento;
- variação legítima;
- condições excepcionais.

SLO humano não deverá converter pessoas em componentes mecânicos.

## 224. Orçamento de erro

O orçamento de erro representa a parcela de falha tolerada dentro de determinado objetivo de serviço.

Ele permite equilibrar:

- confiabilidade;
- inovação;
- velocidade de mudança;
- manutenção;
- risco;
- evolução.

O orçamento não autoriza falhas deliberadas nem descumprimento de deveres.

## 225. Consumo do orçamento de erro

O consumo deverá ser acompanhado ao longo da janela definida.

A aceleração do consumo poderá indicar:

- degradação emergente;
- mudança arriscada;
- dependência instável;
- insuficiência de capacidade;
- erro sistêmico;
- necessidade de contenção.

## 226. Políticas vinculadas ao orçamento de erro

A organização poderá estabelecer políticas como:

- reduzir mudanças quando o consumo acelerar;
- interromper liberações não essenciais;
- priorizar confiabilidade;
- ampliar observabilidade;
- executar revisão técnica;
- mobilizar capacidades;
- revisar o SLO quando houver mudança legítima de contexto.

## 227. Orçamento de erro e criticidade

Serviços críticos poderão exigir orçamento de erro extremamente restrito.

Em determinadas funções, especialmente aquelas relacionadas a vidas, segurança, direitos ou obrigações legais, a tolerância deverá ser definida segundo risco e responsabilidade, não segundo conveniência operacional.

## 228. Janelas de SLO

SLOs poderão utilizar janelas:

- móveis;
- fixas;
- acumuladas;
- por calendário;
- por ciclo;
- por evento;
- por Missão.

A escolha da janela altera o significado do resultado e deverá ser registrada.

## 229. Exclusões de medição

Exclusões somente serão legítimas quando:

- previamente definidas;
- justificadas;
- transparentes;
- rastreáveis;
- revisáveis;
- não utilizadas para ocultar falhas.

Manutenções, eventos externos ou condições excepcionais não deverão ser excluídos automaticamente.

## 230. Manutenção planejada

A manutenção planejada poderá possuir tratamento específico, mas continuará relevante para a experiência do ecossistema.

A arquitetura deverá distinguir:

- indisponibilidade planejada;
- indisponibilidade não planejada;
- impacto evitado;
- impacto efetivo;
- comunicação realizada;
- alternativas oferecidas.

## 231. Desempenho

Desempenho expressa a capacidade de produzir resultados dentro de condições, recursos e tempos definidos.

Ele deverá ser avaliado em múltiplas dimensões:

- velocidade;
- qualidade;
- eficiência;
- efetividade;
- confiabilidade;
- segurança;
- sustentabilidade;
- impacto.

## 232. Desempenho técnico e valor real

Alto desempenho técnico não garante valor real.

Um serviço poderá responder rapidamente e ainda:

- entregar informação incorreta;
- produzir decisão inadequada;
- excluir pessoas;
- gerar retrabalho;
- violar regras;
- falhar no propósito.

A avaliação deverá conectar desempenho técnico ao resultado alcançado.

## 233. Eficiência

Eficiência representa a relação entre recursos empregados e entregas produzidas.

Pode considerar:

- tempo;
- energia;
- processamento;
- trabalho;
- custo;
- infraestrutura;
- capacidade;
- atenção humana.

Eficiência não deverá ser maximizada sacrificando resiliência ou qualidade.

## 234. Eficácia

Eficácia verifica se o resultado pretendido foi alcançado.

Uma operação poderá ser eficiente sem ser eficaz quando executa rapidamente atividades que não resolvem a necessidade existente.

## 235. Efetividade

Efetividade considera se o resultado produziu transformação relevante na realidade.

Ela ultrapassa a entrega imediata e pergunta:

- a necessidade foi reduzida?
- o problema foi resolvido?
- a condição melhorou?
- o benefício permaneceu?
- efeitos adversos foram evitados?
- o propósito foi atendido?

## 236. Economicidade

Economicidade avalia a aquisição e utilização responsável de recursos.

Não deverá ser confundida com simples redução de custos.

Uma decisão será economicamente inadequada se economizar no presente e provocar:

- indisponibilidade;
- dependência excessiva;
- risco;
- perda de conhecimento;
- baixa recuperabilidade;
- custos futuros superiores.

## 237. Produtividade

Produtividade relaciona produção e recursos empregados.

Sua interpretação deverá considerar:

- qualidade;
- complexidade;
- contexto;
- retrabalho;
- segurança;
- sustentabilidade;
- impacto;
- capacidade humana.

Mais produção não significa necessariamente melhor operação.

## 238. Produtividade aparente

A produtividade poderá parecer aumentar quando:

- verificações são omitidas;
- tarefas complexas são evitadas;
- riscos são transferidos;
- qualidade diminui;
- trabalho oculto cresce;
- débitos operacionais são acumulados;
- pessoas trabalham além de limites seguros.

Indicadores de equilíbrio deverão revelar essas distorções.

## 239. Vazão

Vazão representa a quantidade de unidades processadas em determinado período.

Ela poderá ser medida por:

- solicitações;
- eventos;
- Missões;
- registros;
- transações;
- decisões;
- entregas;
- casos concluídos.

A unidade e o período deverão ser informados.

## 240. Tempo de ciclo

Tempo de ciclo representa o período necessário para que uma unidade percorra determinado fluxo.

Deverá ser possível decompor o tempo total em:

- espera;
- análise;
- execução;
- validação;
- integração;
- aprovação;
- correção;
- encerramento.

## 241. Lead time

Lead time representa o intervalo entre a manifestação de uma necessidade e a entrega do resultado correspondente.

Ele poderá ser maior que o tempo de execução, pois incorpora filas, dependências, espera e coordenação.

## 242. Tempo de espera

O tempo de espera revela capacidade indisponível, prioridade, dependências ou coordenação insuficiente.

Deverá ser analisado separadamente do tempo de trabalho efetivo.

## 243. Filas operacionais

Filas deverão possuir indicadores sobre:

- tamanho;
- idade;
- entrada;
- saída;
- prioridade;
- distribuição;
- abandono;
- reclassificação;
- itens bloqueados;
- tempo estimado de processamento.

## 244. Backlog

Backlog representa trabalho reconhecido e ainda não concluído.

Nem todo backlog é negativo.

Ele se torna preocupante quando:

- cresce sem controle;
- envelhece;
- oculta riscos;
- excede a capacidade;
- impede prioridades;
- acumula dependências;
- perde relevância sem revisão.

## 245. Idade do backlog

A idade dos itens poderá revelar problemas que o volume total não mostra.

Um backlog estável pode conter itens antigos, críticos ou sistematicamente negligenciados.

A análise deverá combinar volume, idade, prioridade, impacto e bloqueios.

## 246. Taxa de chegada

A taxa de chegada representa a quantidade de novas demandas recebidas por unidade de tempo.

Ela deverá ser comparada à capacidade de processamento para identificar:

- crescimento de filas;
- equilíbrio;
- recuperação;
- saturação;
- necessidade de escalonamento;
- mudança estrutural da demanda.

## 247. Taxa de serviço

A taxa de serviço representa a velocidade com que demandas são processadas.

Ela deverá considerar:

- capacidade disponível;
- complexidade;
- variação;
- interrupções;
- dependências;
- qualidade;
- retrabalho;
- limites humanos.

## 248. Lei de Little

Quando aplicável e respeitadas suas condições, a relação entre volume em fluxo, taxa de conclusão e tempo médio poderá apoiar o entendimento de filas.

A Engenharia Oficial deverá registrar pressupostos e não utilizar modelos matemáticos fora das condições em que mantêm validade.

## 249. Utilização

Utilização representa a parcela da capacidade empregada em determinado período.

Utilização elevada não significa necessariamente eficiência.

Uma operação continuamente próxima de cem por cento tende a perder:

- capacidade de absorção;
- flexibilidade;
- recuperação;
- manutenção;
- aprendizagem;
- resposta a eventos inesperados.

## 250. Saturação

Saturação ocorre quando a demanda se aproxima ou ultrapassa a capacidade efetiva.

Seus sinais podem incluir:

- crescimento de filas;
- aumento de latência;
- erros;
- rejeições;
- fadiga;
- degradação;
- retrabalho;
- perda de qualidade;
- indisponibilidade parcial.

## 251. Capacidade nominal

Capacidade nominal representa o potencial teórico sob condições especificadas.

Ela não deverá ser confundida com capacidade efetivamente disponível.

## 252. Capacidade efetiva

Capacidade efetiva considera:

- manutenção;
- perdas;
- dependências;
- competências;
- disponibilidade humana;
- restrições;
- variabilidade;
- qualidade;
- condições reais.

É a referência mais adequada para o planejamento operacional.

## 253. Capacidade utilizável

Nem toda capacidade efetiva deverá ser continuamente comprometida.

Parte deverá permanecer utilizável para:

- picos;
- contingências;
- recuperação;
- manutenção;
- treinamento;
- incidentes;
- mudanças;
- eventos inesperados.

## 254. Capacidade reserva

Capacidade reserva é um mecanismo de resiliência.

Sua existência poderá parecer ociosidade em análises superficiais, mas representa proteção contra:

- variação;
- falha;
- crescimento abrupto;
- crise;
- perda de componentes;
- indisponibilidade de pessoas;
- necessidade de recuperação.

## 255. Headroom

Headroom representa a margem disponível antes que a capacidade alcance níveis de risco.

Deverá ser calculado por componente, serviço, equipe, região ou fluxo, conforme o contexto.

## 256. Capacidade em rajada

Alguns recursos poderão suportar carga elevada durante períodos limitados.

A medição deverá distinguir:

- capacidade sustentável;
- capacidade de pico;
- duração tolerável;
- tempo de recuperação;
- efeitos acumulados;
- riscos.

## 257. Capacidade humana

Capacidade humana não será determinada somente pelo número de pessoas.

Ela dependerá de:

- competências;
- experiência;
- descanso;
- coordenação;
- ferramentas;
- clareza;
- contexto;
- apoio;
- segurança;
- distribuição de responsabilidades.

## 258. Capacidade cognitiva

A operação deverá reconhecer atenção, memória de trabalho e julgamento como recursos finitos.

Indicadores poderão observar:

- número de interrupções;
- alternância de contexto;
- volume de alertas;
- decisões simultâneas;
- complexidade;
- carga informacional;
- necessidade de escalonamento.

## 259. Saturação humana

Saturação humana poderá manifestar-se por:

- erros;
- atrasos;
- omissões;
- comunicação incompleta;
- queda de qualidade;
- fadiga;
- redução de discernimento;
- dependência excessiva de automação;
- adoecimento.

Não deverá ser tratada como falha moral individual.

## 260. Saturação institucional

Uma instituição poderá estar saturada quando sua capacidade de compreender, decidir, coordenar e aprender se torna inferior à complexidade que enfrenta.

Indicadores deverão considerar:

- acúmulo de decisões;
- demora em governança;
- conflitos não resolvidos;
- ausência de responsáveis;
- sobreposição de normas;
- perda de memória;
- dependências críticas;
- incapacidade de adaptação.

## 261. Planejamento de capacidade

O planejamento deverá combinar:

- demanda histórica;
- projeções;
- sazonalidade;
- objetivos;
- riscos;
- crescimento;
- manutenção;
- contingência;
- dependências;
- capacidade reserva.

Nenhuma projeção deverá ser tratada como certeza.

## 262. Previsão de demanda

A previsão poderá utilizar modelos estatísticos, simulações e inteligência artificial.

Toda previsão deverá declarar:

- horizonte;
- dados utilizados;
- hipóteses;
- intervalo de incerteza;
- condições de validade;
- responsável;
- limitações;
- data da última revisão.

## 263. Cenários de capacidade

O planejamento deverá considerar múltiplos cenários:

- esperado;
- conservador;
- crescimento acelerado;
- degradação;
- perda de dependência;
- crise;
- contingência;
- recuperação.

## 264. Testes de capacidade

Testes poderão verificar:

- carga;
- estresse;
- duração;
- picos;
- recuperação;
- escalabilidade;
- degradação;
- limites;
- comportamento de dependências.

Testes não deverão comprometer serviços reais sem autorização e proteção adequadas.

## 265. Indicadores de confiabilidade

Confiabilidade poderá ser observada por:

- frequência de falhas;
- estabilidade;
- taxa de sucesso;
- tempo entre falhas;
- recorrência;
- consistência;
- previsibilidade;
- capacidade de recuperação.

## 266. MTBF

MTBF — Mean Time Between Failures — poderá apoiar a compreensão do tempo médio entre falhas reparáveis.

Não deverá ser utilizado isoladamente, pois médias podem ocultar:

- agrupamentos de falhas;
- diferenças entre componentes;
- condições operacionais;
- caudas extremas;
- mudanças de versão.

## 267. MTTF

MTTF — Mean Time To Failure — poderá representar o tempo esperado até a falha de componentes não reparáveis ou de contextos específicos.

Sua aplicação deverá respeitar o tipo de ativo e o modelo de confiabilidade utilizado.

## 268. MTTR

MTTR poderá significar diferentes conceitos, como tempo médio para reparar, recuperar ou restaurar.

A organização deverá evitar ambiguidade e declarar explicitamente qual definição utiliza.

## 269. Tempo para detectar

O tempo para detectar representa o intervalo entre o início de uma condição relevante e seu reconhecimento operacional.

A medição deverá considerar quando o evento realmente começou, sempre que essa informação puder ser reconstruída.

## 270. Tempo para reconhecer

Reconhecer não é apenas detectar um sinal.

É compreender que existe uma condição que exige atenção, responsabilidade ou mudança operacional.

## 271. Tempo para responder

O tempo para responder representa o intervalo até o início de uma ação apropriada.

Uma resposta rápida, porém incorreta, não deverá ser classificada como bom desempenho.

## 272. Tempo para conter

O tempo para conter mede quanto a operação leva para limitar a propagação ou o impacto de uma condição adversa.

## 273. Tempo para recuperar

O tempo para recuperar representa o período necessário para restabelecer funções ou resultados definidos.

A recuperação deverá ser medida em relação ao estado requerido, não apenas ao retorno técnico de componentes.

## 274. Tempo para restaurar plenamente

A restauração plena pode ocorrer depois da recuperação inicial.

Ela poderá exigir:

- recomposição de dados;
- eliminação de inconsistências;
- retorno de integrações;
- redução de backlog;
- validação;
- comunicação;
- normalização de capacidade.

## 275. Tempo para aprender

O encerramento técnico não conclui o ciclo operacional.

Também deverá ser observado o tempo necessário para:

- revisar;
- compreender;
- registrar;
- compartilhar;
- corrigir;
- incorporar aprendizados;
- verificar eficácia das mudanças.

## 276. Taxa de falhas

A taxa de falhas deverá possuir denominador adequado.

O número absoluto de falhas poderá crescer porque o uso aumentou, sem que a confiabilidade proporcional tenha piorado.

## 277. Taxa de sucesso

A taxa de sucesso deverá definir o que constitui sucesso.

Uma operação tecnicamente concluída poderá não representar sucesso se:

- o resultado estiver incorreto;
- o usuário não conseguir utilizá-lo;
- houver violação;
- o propósito não for atendido;
- ocorrer retrabalho posterior.

## 278. Erros transitórios

Erros transitórios poderão desaparecer sem intervenção, mas ainda indicar:

- instabilidade;
- dependência degradada;
- saturação;
- perda de conectividade;
- risco emergente.

Sua invisibilidade em agregações poderá comprometer a prevenção.

## 279. Erros permanentes

Erros permanentes persistem até que haja mudança, reparo ou correção.

Eles deverão ser associados a:

- causa;
- escopo;
- impacto;
- responsável;
- tratamento;
- evidência;
- prazo;
- validação.

## 280. Taxa de recorrência

A recorrência demonstra a proporção de problemas que retornam depois de aparentemente resolvidos.

Ela é um indicador importante da qualidade de:

- diagnóstico;
- correção;
- prevenção;
- aprendizagem;
- mudança arquitetural;
- eliminação de causas.

## 281. Taxa de retrabalho

Retrabalho representa esforço repetido para corrigir, completar ou refazer uma entrega.

Sua medição deverá diferenciar:

- correção necessária;
- evolução legítima;
- mudança de requisito;
- falha de comunicação;
- defeito;
- validação inadequada;
- dependência externa.

## 282. Qualidade na origem

Indicadores de qualidade na origem avaliam se dados, decisões e entregas são produzidos corretamente desde seu primeiro ponto de criação.

O objetivo não será culpar a origem, mas reduzir propagação de defeitos.

## 283. First-time-right

A taxa de conclusão correta na primeira tentativa poderá ser útil, desde que não incentive:

- demora excessiva;
- ocultação de tentativas;
- rejeição de casos complexos;
- redução de aprendizagem;
- manipulação da definição de conclusão.

## 284. Taxa de abandono

A taxa de abandono deverá distinguir:

- desistência voluntária;
- incapacidade de acesso;
- tempo excessivo;
- falha técnica;
- perda de necessidade;
- resolução por outro canal;
- exclusão involuntária.

## 285. Demanda reprimida

Nem toda ausência de solicitação significa ausência de necessidade.

A demanda poderá estar reprimida por:

- desconhecimento;
- barreiras;
- inacessibilidade;
- falta de confiança;
- custo;
- distância;
- linguagem;
- dificuldade tecnológica;
- medo;
- ausência de canal.

## 286. Cobertura

Cobertura representa a parcela da população, território, serviço ou necessidade alcançada.

Ela deverá ser acompanhada por indicadores de qualidade e efetividade.

## 287. Alcance

Alcance mede quem ou o que foi atingido por uma ação.

Alcance não garante:

- acesso efetivo;
- compreensão;
- utilização;
- benefício;
- transformação;
- continuidade.

## 288. Acesso

Indicadores de acesso deverão considerar:

- disponibilidade do canal;
- acessibilidade;
- elegibilidade;
- idioma;
- conectividade;
- tempo;
- custo;
- capacidade de uso;
- barreiras institucionais.

## 289. Equidade operacional

A média geral poderá ocultar desigualdades.

As KPIs deverão permitir, quando legítimo e protegido, compreender diferenças entre:

- territórios;
- grupos;
- canais;
- organizações;
- condições socioeconômicas;
- necessidades específicas;
- níveis de acessibilidade.

## 290. Proteção contra discriminação métrica

A segmentação de indicadores não deverá produzir discriminação ou exposição indevida.

Seu uso deverá respeitar:

- finalidade;
- necessidade;
- proporcionalidade;
- privacidade;
- segurança;
- governança;
- proteção de direitos.

## 291. Qualidade percebida

A percepção de qualidade é relevante, mas não substitui medições técnicas, normativas ou de resultado.

Ela deverá ser tratada como uma dimensão complementar.

## 292. Satisfação

Satisfação poderá ser influenciada por expectativa, contexto, comunicação e resultado.

A arquitetura deverá evitar interpretar satisfação elevada como prova isolada de:

- legalidade;
- segurança;
- efetividade;
- equidade;
- qualidade técnica.

## 293. Confiança

Confiança poderá ser observada por múltiplos sinais:

- continuidade de uso;
- disposição para colaborar;
- transparência percebida;
- previsibilidade;
- cumprimento de compromissos;
- tratamento de falhas;
- proteção de dados;
- legitimidade.

## 294. Reclamações

O volume de reclamações deverá ser contextualizado.

Mais reclamações podem significar pior qualidade, mas também podem refletir:

- melhor acesso ao canal;
- maior confiança em registrar problemas;
- crescimento de utilização;
- maior transparência;
- mudança de população atendida.

## 295. Resolução de reclamações

A qualidade da resolução deverá considerar:

- tempo;
- correção;
- escuta;
- reparação;
- comunicação;
- recorrência;
- satisfação fundamentada;
- aprendizado incorporado.

## 296. Indicadores de segurança

Indicadores de segurança deverão combinar:

- eventos;
- quase eventos;
- vulnerabilidades;
- exposições;
- controles;
- tempo de resposta;
- impacto;
- recorrência;
- aprendizagem;
- cultura de reporte.

## 297. Quase incidentes

Quase incidentes são eventos que poderiam ter produzido impacto, mas não o produziram por intervenção, acaso ou condição favorável.

Sua análise oferece aprendizagem sem que seja necessário esperar pelo dano.

## 298. Cultura de segurança

Poucos registros de incidentes não significam necessariamente alta segurança.

Podem indicar:

- medo;
- subnotificação;
- ausência de canais;
- falta de detecção;
- normalização de desvios;
- baixa maturidade.

## 299. Indicadores de conformidade

Conformidade deverá ser avaliada além da existência formal de políticas.

Indicadores poderão verificar:

- aplicação;
- efetividade;
- evidências;
- exceções;
- revisões;
- correções;
- treinamento;
- aderência;
- resultados.

## 300. Conformidade não é finalidade absoluta

A conformidade é essencial, mas o cumprimento formal de regras não substitui responsabilidade perante a realidade.

Quando normas forem insuficientes, conflitantes ou desatualizadas, a situação deverá ser encaminhada à governança competente.

## 301. Indicadores de risco

Indicadores de risco poderão acompanhar:

- probabilidade;
- impacto;
- exposição;
- velocidade;
- proximidade;
- detectabilidade;
- interdependência;
- capacidade de resposta;
- risco residual.

## 302. KRIs

KRIs — Key Risk Indicators — destacam sinais fundamentais de exposição ou evolução de riscos.

Eles deverão ser relacionados às KPIs para que desempenho e risco não sejam analisados separadamente.

## 303. Desempenho ajustado ao risco

Resultados semelhantes podem possuir qualidades muito diferentes quando obtidos com níveis distintos de risco.

A avaliação deverá considerar:

- resultado;
- risco assumido;
- controles;
- impacto potencial;
- sustentabilidade;
- reversibilidade;
- legitimidade.

## 304. Indicadores de controle

Indicadores de controle verificam se mecanismos preventivos, detectivos e corretivos estão presentes e funcionando.

A simples existência de um controle não comprova sua eficácia.

## 305. Efetividade de controles

A efetividade poderá ser avaliada por:

- cobertura;
- taxa de detecção;
- prevenção;
- falsos positivos;
- falsos negativos;
- tempo de resposta;
- resistência a falhas;
- evidências;
- resultados.

## 306. Indicadores de governança

A governança poderá ser acompanhada por indicadores sobre:

- decisões;
- tempos;
- participação;
- conflitos;
- exceções;
- prestação de contas;
- revisões;
- autoridade;
- cumprimento;
- transparência.

## 307. Indicadores de responsabilidade

Responsabilidade deverá permanecer atribuível.

Indicadores poderão observar:

- decisões sem responsável;
- ações sem autorização;
- aprovações pendentes;
- exceções sem justificativa;
- evidências incompletas;
- transferências indevidas de responsabilidade.

## 308. Indicadores de rastreabilidade

A rastreabilidade poderá ser medida pela capacidade de reconstruir:

- origem;
- transformação;
- decisão;
- execução;
- responsável;
- evidência;
- resultado;
- mudança;
- aprendizado.

## 309. Indicadores de transparência

Transparência não será medida apenas pelo volume de informações publicadas.

Também deverá considerar:

- compreensão;
- atualidade;
- acessibilidade;
- contexto;
- completude;
- utilidade;
- proteção de informações sensíveis;
- capacidade de contestação.

## 310. Indicadores de autonomia

Autonomia operacional poderá ser observada por:

- decisões resolvidas no nível adequado;
- escalonamentos evitáveis;
- dependências de autorização;
- capacidade local;
- qualidade das decisões;
- respeito aos limites;
- prestação de contas.

## 311. Autonomia responsável

A autonomia será saudável quando acompanhada de:

- competência;
- autoridade legítima;
- limites;
- evidências;
- supervisão proporcional;
- possibilidade de revisão;
- responsabilidade atribuível.

## 312. Indicadores de cooperação

A cooperação poderá ser observada por:

- compartilhamento de contexto;
- apoio entre equipes;
- capacidade federada;
- resolução conjunta;
- tempo de coordenação;
- conflitos solucionados;
- confiança;
- continuidade entre fronteiras.

## 313. Indicadores de interoperabilidade

Interoperabilidade deverá compreender:

- conectividade;
- compatibilidade;
- semântica;
- segurança;
- governança;
- continuidade;
- qualidade;
- capacidade de substituição;
- resolução de falhas.

## 314. Indicadores de dependência

Dependências poderão ser acompanhadas por:

- criticidade;
- concentração;
- disponibilidade;
- substituibilidade;
- tempo de recuperação;
- fragilidade;
- propagação de impacto;
- responsabilidade;
- conhecimento disponível.

## 315. Indicadores de concentração

A concentração excessiva poderá existir em:

- fornecedores;
- tecnologias;
- pessoas;
- regiões;
- dados;
- decisões;
- conhecimento;
- infraestrutura;
- canais.

Sua medição apoiará resiliência e continuidade.

## 316. Indicadores de sustentabilidade

Sustentabilidade operacional poderá considerar:

- consumo de energia;
- materiais;
- emissões;
- desperdícios;
- longevidade;
- reparabilidade;
- capacidade humana;
- custo total;
- impacto territorial;
- continuidade intergeracional.

## 317. Custo total de operação

O custo total deverá incluir:

- aquisição;
- implantação;
- operação;
- integração;
- treinamento;
- manutenção;
- segurança;
- indisponibilidade;
- recuperação;
- substituição;
- encerramento.

## 318. Custo da indisponibilidade

O custo de indisponibilidade poderá envolver:

- perdas financeiras;
- interrupção de serviços;
- impacto humano;
- risco;
- retrabalho;
- perda de confiança;
- descumprimento;
- dano institucional;
- atraso de Missões.

## 319. Custo da baixa qualidade

A baixa qualidade produz custos visíveis e ocultos.

Entre eles:

- correções;
- repetição;
- suporte;
- incidentes;
- decisões erradas;
- abandono;
- perda de confiança;
- danos;
- oportunidades perdidas.

## 320. Custo de oportunidade

Ao dedicar recursos a uma prioridade, outras possibilidades podem deixar de ser atendidas.

A inteligência operacional deverá tornar visíveis os principais custos de oportunidade, sem presumir que possam ser calculados com precisão absoluta.

## 321. Valor produzido

Valor poderá ser:

- público;
- social;
- humano;
- institucional;
- operacional;
- econômico;
- ambiental;
- cognitivo;
- compartilhado.

Nenhuma dimensão isolada deverá representar todo o valor da Plataforma UNO.

## 322. Valor público

Valor público expressa benefícios legítimos produzidos para pessoas, comunidades, organizações e sociedade.

Sua avaliação deverá considerar:

- utilidade;
- equidade;
- confiança;
- legitimidade;
- sustentabilidade;
- alcance;
- transformação;
- continuidade.

## 323. Valor compartilhado

Valor compartilhado ocorre quando o resultado fortalece simultaneamente diferentes participantes do ecossistema sem depender da exploração indevida de uma parte.

## 324. Entregas

Entregas são produtos, serviços, decisões, ações ou capacidades disponibilizadas.

Elas demonstram o que foi produzido, mas não necessariamente o efeito gerado.

## 325. Resultados

Resultados representam mudanças diretamente associadas às entregas.

A relação entre entrega e resultado deverá ser sustentada por evidências, não apenas presumida.

## 326. Impactos

Impactos são transformações mais amplas, duradouras ou sistêmicas.

Sua atribuição costuma ser mais complexa porque diferentes fatores contribuem para o resultado observado.

## 327. Atribuição

Atribuição busca compreender quanto do resultado pode ser relacionado a determinada ação, capacidade ou programa.

Ela deverá evitar declarações causais sem sustentação adequada.

## 328. Contribuição

Quando a atribuição direta não for possível, a organização poderá avaliar sua contribuição para determinado resultado.

A análise deverá considerar:

- contexto;
- outros participantes;
- hipóteses;
- evidências;
- caminhos de influência;
- limitações.

## 329. Teoria de mudança

Uma teoria de mudança poderá conectar:

- necessidade;
- recursos;
- capacidades;
- ações;
- entregas;
- resultados;
- impactos;
- pressupostos;
- riscos;
- evidências.

Ela deverá permanecer revisável diante da realidade.

## 330. Cadeia de valor operacional

A cadeia de valor permitirá relacionar o funcionamento interno aos benefícios externos.

Isso impedirá que indicadores internos sejam tratados como fins em si mesmos.

## 331. Painéis balanceados

Painéis deverão combinar dimensões complementares.

Um painel operacional poderá reunir:

- resultado;
- qualidade;
- capacidade;
- confiabilidade;
- risco;
- segurança;
- pessoas;
- custo;
- sustentabilidade;
- aprendizagem.

## 332. Equilíbrio entre quantidade e compreensão

Um painel com excesso de indicadores pode reduzir a capacidade de compreender.

A seleção deverá priorizar:

- relevância;
- clareza;
- ação;
- contexto;
- confiança;
- equilíbrio;
- capacidade cognitiva do público.

## 333. KPI composta

Uma KPI composta reúne múltiplas medidas em um índice.

Ela somente deverá ser utilizada quando:

- a composição possuir fundamento;
- os pesos forem justificáveis;
- a fórmula for transparente;
- as dimensões originais permanecerem acessíveis;
- os limites forem documentados.

## 334. Risco dos índices únicos

Um índice único poderá ocultar deterioração grave em uma dimensão compensada por melhoria em outra.

Indicadores críticos não deverão desaparecer dentro de médias ou pontuações agregadas.

## 335. Normalização

A normalização permite comparar medidas com escalas diferentes.

Entretanto, poderá alterar a percepção dos resultados e deverá ser:

- documentada;
- justificável;
- reproduzível;
- versionada;
- reversível.

## 336. Ponderação

Pesos expressam escolhas de valor e prioridade.

Eles não são neutros.

Toda ponderação deverá possuir:

- justificativa;
- autoridade;
- transparência;
- revisão;
- análise de sensibilidade.

## 337. Análise de sensibilidade

A análise de sensibilidade verifica como mudanças em pressupostos, pesos, limiares ou dados alteram o resultado.

Ela ajuda a identificar indicadores frágeis ou excessivamente dependentes de escolhas arbitrárias.

## 338. Semáforos operacionais

Cores poderão apoiar interpretação rápida, desde que:

- não sejam o único meio de comunicação;
- possuam legenda;
- respeitem acessibilidade;
- representem critérios explícitos;
- não ocultem incerteza;
- permitam acesso aos dados subjacentes.

## 339. Estado verde

Estado verde deverá significar que o indicador se encontra dentro das condições esperadas.

Não significará ausência absoluta de risco ou necessidade de atenção.

## 340. Estado amarelo

Estado amarelo poderá indicar:

- tendência adversa;
- aproximação de limite;
- incerteza;
- degradação inicial;
- necessidade de observação;
- ação preventiva.

## 341. Estado vermelho

Estado vermelho deverá indicar uma condição que exige resposta, escalonamento ou decisão.

Seu uso excessivo reduz significado e pode gerar fadiga.

## 342. Estado desconhecido

A ausência de dados ou confiança insuficiente deverá possuir representação própria.

“Desconhecido” não deverá ser apresentado como “normal”.

## 343. Confiança da KPI

Toda KPI relevante poderá possuir uma avaliação de confiança baseada em:

- qualidade da fonte;
- completude;
- atualidade;
- estabilidade da fórmula;
- cobertura;
- validação;
- incerteza;
- consistência.

## 344. KPI provisória

Uma KPI poderá ser classificada como provisória quando ainda estiver em validação.

Ela deverá ser identificada para impedir que decisões irreversíveis sejam fundamentadas em uma medição imatura.

## 345. Revisão das KPIs

KPIs deverão ser revisadas quando houver:

- mudança de objetivo;
- mudança de contexto;
- nova obrigação;
- alteração de processo;
- evolução tecnológica;
- manipulação;
- perda de utilidade;
- mudança de comportamento;
- descoberta de erro.

## 346. Retirada de uma KPI

A retirada deverá preservar:

- histórico;
- justificativa;
- data;
- responsável;
- substituição, quando existente;
- impactos sobre séries;
- painéis afetados;
- decisões relacionadas.

## 347. KPIs e comportamento

Pessoas e sistemas adaptam-se ao que é medido.

Por isso, toda KPI deverá ser avaliada quanto aos comportamentos que pode incentivar, inclusive aqueles não pretendidos.

## 348. Proteção contra gaming

A arquitetura deverá reduzir manipulação por meio de:

- múltiplas evidências;
- auditoria;
- indicadores de equilíbrio;
- revisão de denominadores;
- rastreabilidade;
- segmentação;
- comparação histórica;
- canais de contestação;
- análise humana.

## 349. Princípio do desempenho responsável

O melhor desempenho não será o maior número isolado.

Será aquele que:

- alcança o propósito;
- respeita princípios;
- preserva pessoas;
- mantém qualidade;
- controla riscos;
- utiliza recursos com responsabilidade;
- fortalece capacidades;
- sustenta continuidade;
- produz valor legítimo.

## 350. Síntese do segundo lote

A inteligência operacional da Plataforma UNO deverá transformar medições em compromissos compreensíveis, responsáveis e acionáveis.

KPIs, objetivos, metas, SLIs, SLOs e SLAs não existirão como elementos decorativos. Eles formarão uma linguagem comum para compreender:

- o que precisa ser alcançado;
- qual nível de serviço deve ser preservado;
- quais limites não podem ser ultrapassados;
- onde a capacidade se aproxima da saturação;
- quais resultados estão sendo produzidos;
- quais riscos acompanham o desempenho;
- quem deverá compreender, decidir e agir.

A operação não será considerada saudável apenas porque produz mais, responde mais rápido ou reduz custos.

Ela será saudável quando conseguir realizar seu propósito com qualidade, confiabilidade, segurança, legitimidade, sustentabilidade e respeito às pessoas.

---

# Lote 3 — Observabilidade, Telemetria, Eventos, Logs, Rastreamento, Correlação, Alertas e Consciência Situacional

## 351. Da medição à observabilidade

A medição informa valores conhecidos.

A observabilidade permite compreender o estado interno de uma capacidade, serviço ou operação a partir das evidências que ela produz.

Uma operação observável deverá permitir responder:

- o que está acontecendo;
- onde está acontecendo;
- desde quando;
- com quem;
- em qual contexto;
- por qual motivo provável;
- com quais consequências;
- quais ações já foram realizadas.

## 352. Observabilidade como capacidade institucional

Observabilidade não será apenas uma propriedade técnica.

A Plataforma UNO deverá observar:

- sistemas;
- serviços;
- processos;
- Missões;
- dados;
- integrações;
- organizações;
- agentes;
- decisões;
- recursos;
- riscos;
- resultados.

A observabilidade integrará percepção, compreensão e responsabilidade.

## 353. Objetivo da observabilidade

A observabilidade existirá para ampliar a capacidade de:

- perceber mudanças;
- reconhecer degradações;
- investigar causas;
- compreender impactos;
- coordenar respostas;
- verificar resultados;
- preservar evidências;
- aprender com a operação.

Ela não existirá para vigiar pessoas indiscriminadamente.

## 354. Observabilidade e propósito

Nenhum mecanismo de observabilidade deverá ser implantado sem finalidade legítima.

Toda coleta deverá possuir relação demonstrável com:

- segurança;
- continuidade;
- qualidade;
- responsabilidade;
- desempenho;
- conformidade;
- aprendizagem;
- valor público;
- proteção de pessoas.

## 355. Observabilidade proporcional

A profundidade da observação deverá ser proporcional:

- à criticidade;
- ao risco;
- ao impacto;
- à complexidade;
- à obrigação;
- à necessidade de investigação;
- à sensibilidade das informações;
- à capacidade de governança.

Quanto maior a observação, maior deverá ser a responsabilidade sobre seu uso.

## 356. Pilares clássicos da observabilidade

A arquitetura técnica poderá organizar a observabilidade em:

- métricas;
- logs;
- rastros;
- eventos;
- perfis;
- estados;
- evidências contextuais.

Esses elementos deverão ser correlacionáveis.

## 357. Telemetria

Telemetria é a coleta, transmissão e tratamento de informações sobre o comportamento de componentes e operações.

Ela poderá incluir:

- medições;
- eventos;
- estados;
- erros;
- tempos;
- consumo;
- dependências;
- versões;
- localização lógica;
- identificadores de correlação.

## 358. Telemetria não é compreensão

Telemetria produz sinais.

Compreensão exige:

- contexto;
- interpretação;
- relação;
- histórico;
- conhecimento;
- julgamento;
- validação;
- responsabilidade.

A Plataforma UNO não deverá confundir grande volume de telemetria com consciência operacional.

## 359. Telemetria útil

Uma telemetria será útil quando contribuir para:

- uma pergunta;
- uma decisão;
- uma investigação;
- uma obrigação;
- uma resposta;
- uma aprendizagem;
- uma evidência;
- uma previsão responsável.

Dados sem finalidade geram custo e ruído.

## 360. Telemetria mínima necessária

A arquitetura deverá aplicar o princípio da telemetria mínima necessária.

Deverá coletar dados suficientes para compreender e governar a operação, evitando:

- excesso;
- duplicidade;
- invasão;
- armazenamento desnecessário;
- exposição;
- custos sem valor;
- complexidade sem propósito.

## 361. Origem da telemetria

Toda telemetria deverá possuir origem identificável.

A origem poderá ser:

- aplicação;
- dispositivo;
- serviço;
- organização;
- agente;
- operador;
- integração;
- processo;
- banco de dados;
- ambiente;
- Missão;
- capacidade.

## 362. Proveniência

A proveniência deverá permitir compreender:

- quem produziu;
- onde produziu;
- quando produziu;
- por qual mecanismo;
- sob qual versão;
- com qual autoridade;
- por quais transformações passou;
- em qual contexto foi utilizada.

## 363. Identidade da fonte

A fonte deverá possuir identidade verificável.

Isso evita que sinais:

- anônimos;
- falsificados;
- duplicados;
- desatualizados;
- incompatíveis;
- fora de contexto

sejam interpretados como evidências confiáveis.

## 364. Confiança na fonte

A confiança na fonte poderá considerar:

- autenticação;
- integridade;
- histórico;
- estabilidade;
- cobertura;
- precisão;
- atualidade;
- método de produção;
- validação independente.

## 365. Instrumentação

Instrumentação é a incorporação de mecanismos que tornam a operação observável.

Ela poderá ocorrer em:

- código;
- infraestrutura;
- processos;
- formulários;
- procedimentos;
- integrações;
- dispositivos;
- fluxos humanos;
- decisões;
- painéis.

## 366. Instrumentação desde o desenho

A observabilidade deverá ser projetada desde a concepção das capacidades.

Não deverá ser acrescentada apenas depois de uma falha.

Toda nova capacidade deverá declarar:

- o que precisa ser observado;
- quais sinais serão produzidos;
- como serão correlacionados;
- quem poderá acessá-los;
- por quanto tempo serão preservados;
- quais decisões apoiarão.

## 367. Instrumentação automática

A instrumentação automática poderá acelerar a cobertura, especialmente em componentes padronizados.

Entretanto, deverá ser validada quanto a:

- volume;
- sensibilidade;
- exatidão;
- custo;
- compatibilidade;
- segurança;
- utilidade.

## 368. Instrumentação manual

Determinadas realidades exigirão registros humanos.

A instrumentação manual poderá captar:

- julgamento;
- contexto;
- exceções;
- percepção;
- impacto;
- decisão;
- justificativa;
- condição territorial;
- informação não digitalizada.

## 369. Instrumentação híbrida

A combinação entre instrumentos automáticos e registros humanos permitirá ampliar a compreensão.

A arquitetura deverá preservar a distinção entre:

- fato automaticamente observado;
- declaração humana;
- inferência;
- hipótese;
- decisão;
- confirmação posterior.

## 370. Schema de telemetria

Toda telemetria estruturada deverá possuir schema definido.

O schema poderá declarar:

- campos;
- tipos;
- unidades;
- obrigatoriedade;
- semântica;
- versão;
- sensibilidade;
- validações;
- compatibilidade;
- retenção.

## 371. Semântica dos sinais

O significado dos sinais deverá permanecer estável ou possuir mudança versionada.

Um campo chamado “sucesso” não poderá mudar silenciosamente de significado.

## 372. Unidades de medida

As unidades deverão ser explícitas.

A arquitetura deverá impedir confusão entre:

- segundos e milissegundos;
- bytes e megabytes;
- valores absolutos e percentuais;
- moeda corrente e valores normalizados;
- contagem acumulada e taxa;
- hora local e tempo universal.

## 373. Tempo na observabilidade

O tempo é uma dimensão estrutural da observabilidade.

Todo registro relevante deverá considerar:

- instante do evento;
- instante da detecção;
- instante do registro;
- instante do recebimento;
- instante do processamento;
- instante da decisão;
- instante da resposta.

## 374. Relógios e sincronização

Relógios divergentes prejudicam a reconstrução de eventos.

A arquitetura deverá possuir mecanismos para:

- sincronizar;
- identificar desvios;
- registrar fonte temporal;
- normalizar fusos;
- preservar horário original;
- reconhecer incerteza temporal.

## 375. Tempo do evento

O tempo do evento representa quando o fato ocorreu na origem.

Ele poderá diferir do momento em que o evento foi recebido ou processado.

## 376. Tempo de ingestão

O tempo de ingestão representa quando a Plataforma UNO recebeu a evidência.

A diferença entre tempo do evento e ingestão poderá revelar:

- atraso;
- desconexão;
- fila;
- falha de transmissão;
- processamento em lote;
- reenvio;
- indisponibilidade.

## 377. Tempo de processamento

O tempo de processamento registra quando a informação foi interpretada, agregada ou transformada.

Ele deverá permanecer distinguível do tempo original do acontecimento.

## 378. Eventos fora de ordem

Eventos poderão chegar fora da sequência em que ocorreram.

A arquitetura deverá prever:

- ordenação parcial;
- janelas de atraso;
- marcação de eventos tardios;
- correções;
- reprocessamento;
- preservação da sequência original.

## 379. Eventos atrasados

Um evento atrasado não deverá ser descartado automaticamente.

Ele poderá alterar:

- métricas;
- investigações;
- estados;
- conclusões;
- responsabilidades;
- aprendizado histórico.

## 380. Eventos duplicados

Eventos duplicados deverão ser reconhecidos por:

- identificadores;
- chaves de idempotência;
- origem;
- conteúdo;
- tempo;
- sequência;
- contexto.

A deduplicação deverá preservar evidências sobre o fato de que a duplicidade ocorreu.

## 381. Ausência de sinal

Ausência de sinal poderá significar:

- normalidade;
- falta de evento;
- falha de coleta;
- indisponibilidade da fonte;
- perda de comunicação;
- atraso;
- ausência de cobertura;
- erro de configuração.

Nunca deverá ser interpretada automaticamente como saúde.

## 382. Heartbeats

Heartbeats são sinais periódicos que demonstram presença ou funcionamento de uma fonte.

Sua ausência poderá indicar falha, mas deverá considerar:

- intervalo esperado;
- tolerância;
- rede;
- manutenção;
- suspensão planejada;
- atraso;
- estado operacional.

## 383. Métricas de infraestrutura

A infraestrutura poderá produzir métricas como:

- processamento;
- memória;
- armazenamento;
- rede;
- energia;
- temperatura;
- filas;
- disponibilidade;
- erros;
- utilização;
- saturação.

## 384. Métricas de aplicação

Aplicações poderão produzir métricas sobre:

- requisições;
- latência;
- erros;
- transações;
- sessões;
- recursos;
- dependências;
- tarefas;
- resultados;
- estados internos.

## 385. Métricas de serviço

Métricas de serviço deverão aproximar a observação técnica da experiência efetivamente entregue.

Elas poderão medir:

- sucesso;
- disponibilidade funcional;
- tempo de resposta;
- qualidade;
- completude;
- acessibilidade;
- continuidade;
- resultado.

## 386. Métricas de negócio e Missão

A Plataforma UNO poderá observar:

- necessidades recebidas;
- Missões abertas;
- prioridades;
- recursos mobilizados;
- decisões;
- ações;
- resultados;
- benefícios;
- impactos;
- aprendizados.

## 387. Métricas institucionais

Métricas institucionais poderão acompanhar:

- decisões legítimas;
- responsabilidades;
- cumprimento de políticas;
- exceções;
- auditorias;
- revisões;
- participação;
- transparência;
- continuidade de autoridade.

## 388. Métricas humanas

Métricas humanas deverão ser cuidadosamente governadas.

Poderão apoiar a compreensão de:

- carga;
- fadiga;
- segurança;
- cobertura;
- desenvolvimento;
- cooperação;
- necessidade de apoio;
- continuidade humana.

Não poderão sustentar vigilância abusiva.

## 389. Logs

Logs são registros de acontecimentos produzidos por sistemas, processos, pessoas ou dispositivos.

Eles deverão ajudar a reconstruir:

- comportamento;
- sequência;
- contexto;
- mudança;
- decisão;
- erro;
- resposta;
- resultado.

## 390. Logs estruturados

Logs estruturados deverão utilizar campos definidos em vez de depender exclusivamente de texto livre.

Podem incluir:

- timestamp;
- nível;
- origem;
- serviço;
- versão;
- evento;
- correlação;
- ator;
- ação;
- resultado;
- contexto;
- erro.

## 391. Logs não estruturados

Logs não estruturados poderão permanecer necessários em determinados contextos.

A arquitetura deverá:

- limitar seu uso;
- preservar contexto;
- apoiar busca;
- evitar dados sensíveis;
- definir retenção;
- permitir posterior interpretação.

## 392. Níveis de log

Os níveis poderão incluir:

- trace;
- debug;
- information;
- notice;
- warning;
- error;
- critical;
- emergency.

As definições deverão ser padronizadas para evitar uso inconsistente.

## 393. Log de depuração

Logs de depuração poderão conter grande detalhamento.

Deverão ser:

- temporários quando possível;
- protegidos;
- limitados;
- desativados em condições inadequadas;
- revisados para evitar exposição de segredos e dados pessoais.

## 394. Log informativo

Um log informativo deverá registrar acontecimentos relevantes para a compreensão normal da operação.

Não deverá ser utilizado para registrar toda instrução interna sem valor operacional.

## 395. Log de advertência

Advertências deverão representar condições incomuns que ainda não constituem falha, mas podem exigir atenção.

Uso excessivo transforma advertências em ruído.

## 396. Log de erro

Logs de erro deverão informar:

- operação afetada;
- contexto;
- componente;
- causa conhecida;
- código;
- consequência;
- possibilidade de repetição;
- correlação;
- tratamento realizado.

## 397. Logs críticos

Logs críticos representam falhas graves capazes de comprometer:

- segurança;
- continuidade;
- integridade;
- responsabilidade;
- funções essenciais;
- múltiplos serviços;
- pessoas ou organizações.

## 398. Mensagens de erro compreensíveis

Mensagens deverão ser úteis para o público que as recebe.

A arquitetura poderá produzir níveis diferentes de explicação para:

- usuário;
- operador;
- especialista;
- auditor;
- desenvolvedor;
- gestor.

## 399. Códigos de erro

Códigos deverão ser:

- únicos no escopo;
- documentados;
- estáveis;
- pesquisáveis;
- correlacionáveis;
- associados a ações recomendadas;
- versionados quando necessário.

## 400. Stack traces

Rastros de pilha poderão apoiar diagnóstico técnico, mas não deverão ser expostos indiscriminadamente.

Eles podem revelar:

- estrutura interna;
- caminhos;
- bibliotecas;
- dados;
- vulnerabilidades;
- informações sensíveis.

## 401. Logs de auditoria

Logs de auditoria deverão registrar ações relevantes para responsabilidade e governança.

Podem incluir:

- autenticação;
- acesso;
- decisão;
- autorização;
- mudança;
- exclusão;
- exportação;
- delegação;
- configuração;
- exceção;
- uso de privilégios.

## 402. Imutabilidade dos registros de auditoria

Registros de auditoria deverão possuir proteção contra alteração ou exclusão não autorizada.

A arquitetura poderá utilizar:

- controles de acesso;
- assinaturas;
- encadeamento;
- armazenamento protegido;
- cópias independentes;
- verificação de integridade;
- retenção regulamentada.

## 403. Integridade de logs

A integridade deverá permitir detectar:

- alteração;
- remoção;
- inserção;
- truncamento;
- reordenação indevida;
- perda;
- corrupção.

## 404. Confidencialidade de logs

Logs podem conter informações sensíveis.

Seu acesso deverá observar:

- necessidade;
- função;
- finalidade;
- classificação;
- autorização;
- registro de acesso;
- retenção;
- descarte seguro.

## 405. Segredos em logs

A arquitetura deverá impedir o registro de:

- senhas;
- chaves privadas;
- tokens;
- credenciais;
- segredos de integração;
- dados financeiros completos;
- conteúdo protegido sem necessidade.

## 406. Dados pessoais em logs

Dados pessoais somente poderão ser registrados quando necessários, proporcionais e autorizados.

Sempre que possível, deverão ser utilizados:

- identificadores pseudonimizados;
- mascaramento;
- redução;
- agregação;
- referências indiretas;
- controles de acesso.

## 407. Retenção de logs

A retenção deverá considerar:

- finalidade;
- obrigação legal;
- auditoria;
- segurança;
- investigação;
- custo;
- privacidade;
- aprendizagem;
- prescrição;
- descarte.

## 408. Rotação de logs

A rotação deverá impedir crescimento indefinido.

Ela deverá preservar:

- continuidade;
- integridade;
- indexação;
- compressão;
- transferência;
- retenção;
- capacidade de pesquisa.

## 409. Centralização de logs

A centralização facilita correlação e investigação.

Entretanto, também concentra:

- dados;
- risco;
- dependência;
- custo;
- acesso privilegiado;
- potencial de vigilância.

Deverá possuir governança proporcional.

## 410. Federação de logs

Em ambientes federados, os registros poderão permanecer sob responsabilidade de diferentes organizações.

A Plataforma UNO deverá definir:

- contratos;
- formatos;
- consultas;
- responsabilidades;
- tempos;
- evidências mínimas;
- proteção;
- limites de compartilhamento.

## 411. Rastreamento distribuído

O rastreamento distribuído permite acompanhar uma operação através de múltiplos componentes e organizações.

Ele deverá revelar:

- origem;
- percurso;
- dependências;
- tempos;
- erros;
- transformações;
- resultado;
- fronteiras atravessadas.

## 412. Trace

Um trace representa o percurso completo ou parcial de uma operação correlacionada.

Ele poderá atravessar:

- interface;
- API;
- serviço;
- fila;
- agente;
- banco de dados;
- organização;
- integração externa;
- processo humano.

## 413. Span

Um span representa uma etapa dentro de um trace.

Deverá possuir:

- início;
- fim;
- duração;
- operação;
- estado;
- origem;
- dependência;
- atributos;
- eventos;
- relação parental.

## 414. Trace ID

O identificador de trace deverá permitir correlacionar etapas sem expor informações indevidas.

Ele deverá ser:

- único;
- propagável;
- pesquisável;
- protegido;
- preservado entre fronteiras autorizadas.

## 415. Correlation ID

O identificador de correlação poderá reunir registros pertencentes ao mesmo:

- evento;
- caso;
- processo;
- incidente;
- usuário;
- Missão;
- decisão;
- fluxo;
- resultado.

## 416. Causalidade e correlação

A correlação entre eventos não prova causalidade.

A arquitetura deverá distinguir:

- associação temporal;
- dependência conhecida;
- hipótese causal;
- causa confirmada;
- fator contribuinte;
- coincidência.

## 417. Propagação de contexto

O contexto deverá acompanhar a operação através de fronteiras técnicas e organizacionais.

Poderá incluir:

- Missão;
- prioridade;
- propósito;
- classificação;
- identidade;
- autorização;
- correlação;
- restrições;
- prazo;
- sensibilidade.

## 418. Limites da propagação

Nem todo contexto poderá atravessar todas as fronteiras.

A propagação deverá respeitar:

- privacidade;
- sigilo;
- necessidade;
- autoridade;
- minimização;
- contratos;
- finalidade;
- segurança.

## 419. Sampling de traces

Registrar todos os rastros poderá ser inviável.

A amostragem poderá ser:

- probabilística;
- baseada em taxa;
- orientada por erro;
- orientada por latência;
- orientada por risco;
- adaptativa;
- determinada após o evento.

## 420. Preservação de rastros críticos

Rastros relacionados a:

- falhas;
- segurança;
- decisões críticas;
- operações extraordinárias;
- violações;
- impacto elevado;
- obrigações legais

deverão receber prioridade de preservação.

## 421. Profiling

Profiling ajuda a compreender como recursos são consumidos durante a execução.

Poderá observar:

- processamento;
- memória;
- espera;
- bloqueios;
- chamadas;
- alocações;
- concorrência;
- gargalos.

## 422. Profiling contínuo

O profiling contínuo poderá revelar degradações que não aparecem em amostras isoladas.

Deverá ser governado quanto a:

- custo;
- segurança;
- privacidade;
- impacto;
- retenção;
- acesso.

## 423. Eventos

Evento é o registro de que algo relevante ocorreu.

Poderá representar:

- mudança;
- decisão;
- solicitação;
- falha;
- conclusão;
- transição;
- alerta;
- observação;
- comando;
- resposta.

## 424. Evento não é estado

Um evento informa uma ocorrência.

O estado representa uma condição em determinado momento.

O estado poderá ser reconstruído a partir de eventos, desde que:

- os eventos estejam completos;
- a ordem seja compreendida;
- as regras de transição sejam conhecidas;
- correções sejam preservadas.

## 425. Eventos de domínio

Eventos de domínio representam acontecimentos significativos para a realidade institucional ou operacional.

Exemplos:

- Missão criada;
- prioridade alterada;
- recurso mobilizado;
- decisão registrada;
- contingência ativada;
- serviço restaurado;
- resultado confirmado.

## 426. Eventos técnicos

Eventos técnicos descrevem acontecimentos internos de componentes.

Exemplos:

- processo iniciado;
- conexão perdida;
- fila saturada;
- implantação concluída;
- cache invalidado;
- réplica indisponível;
- tarefa rejeitada.

## 427. Eventos humanos

Eventos humanos poderão registrar:

- análise;
- validação;
- aprovação;
- contestação;
- escalonamento;
- intervenção;
- comunicação;
- handover;
- aprendizado.

## 428. Eventos externos

Eventos externos poderão vir de:

- organizações;
- governos;
- parceiros;
- sensores;
- comunidades;
- serviços públicos;
- fornecedores;
- ambiente;
- território.

Sua confiança deverá ser avaliada.

## 429. Contratos de eventos

Todo evento compartilhado deverá possuir contrato que defina:

- nome;
- significado;
- campos;
- origem;
- versão;
- segurança;
- ordenação;
- idempotência;
- retenção;
- responsabilidade.

## 430. Versionamento de eventos

Mudanças no evento deverão preservar compatibilidade ou possuir estratégia de migração.

Consumidores não poderão ser quebrados silenciosamente.

## 431. Event sourcing

A arquitetura poderá utilizar armazenamento orientado a eventos quando isso contribuir para:

- rastreabilidade;
- reconstrução;
- auditoria;
- temporalidade;
- aprendizagem;
- reversibilidade.

Sua adoção deverá considerar complexidade e necessidade real.

## 432. Estado derivado

Estados derivados deverão indicar:

- eventos utilizados;
- regra;
- versão;
- momento do cálculo;
- correções;
- confiança;
- possibilidade de reconstrução.

## 433. Correção de eventos

Um evento histórico não deverá ser apagado apenas porque contém informação incorreta.

A correção poderá ocorrer por novo evento que:

- reconheça o erro;
- declare o valor correto;
- preserve autoria;
- registre motivo;
- mantenha rastreabilidade.

## 434. Fluxos de eventos

Fluxos deverão possuir governança sobre:

- origem;
- produtores;
- consumidores;
- capacidade;
- retenção;
- reprocessamento;
- falhas;
- segurança;
- evolução;
- encerramento.

## 435. Processamento em tempo real

Tempo real deverá ser definido conforme a necessidade.

Poderá significar:

- milissegundos;
- segundos;
- minutos;
- antes de determinada decisão;
- dentro de uma janela operacional.

## 436. Processamento em lote

Processamento em lote continuará adequado quando:

- não houver urgência;
- o custo precisar ser reduzido;
- a consolidação for necessária;
- o volume favorecer agregação;
- a análise depender de períodos completos.

## 437. Arquitetura Lambda e alternativas

A Plataforma UNO poderá combinar processamento em fluxo e lote, mas deverá evitar duplicação desnecessária de lógicas.

A escolha arquitetural deverá considerar:

- consistência;
- simplicidade;
- latência;
- custo;
- reprocessamento;
- governança;
- capacidade de manutenção.

## 438. Correlação de sinais

A correlação deverá reunir sinais provenientes de:

- métricas;
- logs;
- traces;
- eventos;
- estados;
- decisões;
- mudanças;
- dependências;
- relatos humanos.

## 439. Correlação temporal

Eventos próximos no tempo podem estar relacionados, mas a proximidade não comprova causa.

A correlação temporal deverá ser combinada com conhecimento arquitetural e operacional.

## 440. Correlação por topologia

A topologia de dependências ajuda a compreender como sinais se propagam.

Uma falha em componente compartilhado poderá explicar alertas simultâneos em diferentes serviços.

## 441. Correlação por Missão

Sinais técnicos e institucionais deverão poder ser associados à Missão afetada.

Isso permitirá compreender impacto além do componente.

## 442. Correlação por organização

A operação federada deverá identificar quais organizações:

- produzem;
- consomem;
- dependem;
- decidem;
- executam;
- sofrem impacto;
- respondem pela recuperação.

## 443. Correlação por população afetada

Quando legítimo, deverá ser possível compreender quais pessoas, grupos, territórios ou serviços estão sendo afetados.

Essa análise deverá preservar direitos e privacidade.

## 444. Enriquecimento de eventos

Eventos poderão ser enriquecidos com:

- topologia;
- criticidade;
- proprietário;
- Missão;
- risco;
- localização;
- versão;
- histórico;
- contexto;
- procedimentos relacionados.

## 445. Enriquecimento controlado

O enriquecimento deverá evitar:

- combinação excessiva de dados;
- exposição;
- inferências inadequadas;
- perda da origem;
- confusão entre fato e dado derivado.

## 446. Alertas

Alerta é uma comunicação de que uma condição requer atenção, investigação ou ação.

Todo alerta deverá representar uma necessidade operacional real.

## 447. Alerta não é evento

Um evento registra que algo aconteceu.

Um alerta comunica que determinado evento, estado ou padrão merece atenção.

Nem todo evento deverá gerar alerta.

## 448. Alerta acionável

Um alerta será acionável quando informar:

- o que ocorreu;
- onde;
- impacto provável;
- prioridade;
- evidências;
- responsável;
- ação inicial;
- procedimento;
- forma de confirmação.

## 449. Alerta sem ação

Alertas que não permitem resposta conhecida deverão ser revistos.

Eles poderão ser convertidos em:

- informação de painel;
- registro para análise;
- indicador de tendência;
- item de investigação;
- hipótese a validar.

## 450. Severidade

A severidade deverá representar a magnitude real ou potencial do impacto.

Poderá considerar:

- pessoas;
- serviços;
- território;
- dados;
- segurança;
- continuidade;
- obrigações;
- reputação;
- capacidade de propagação.

## 451. Prioridade do alerta

Prioridade deverá considerar não apenas severidade, mas também:

- urgência;
- tempo disponível;
- capacidade de resposta;
- dependências;
- reversibilidade;
- risco de propagação;
- compromisso institucional.

## 452. Severidade não é prioridade

Uma condição severa, mas estável e contida, poderá ter prioridade diferente de uma condição inicialmente moderada que se propaga rapidamente.

## 453. Níveis de alerta

Os níveis poderão ser definidos como:

- informativo;
- atenção;
- advertência;
- alto;
- crítico;
- emergência.

Cada nível deverá possuir critérios e respostas associados.

## 454. Limiar estático

Um alerta por limiar estático ocorre quando um valor ultrapassa referência fixa.

É simples e compreensível, mas poderá falhar diante de:

- sazonalidade;
- tendências;
- perfis diferentes;
- mudanças de escala;
- variações contextuais.

## 455. Limiar dinâmico

Limiares dinâmicos poderão adaptar-se ao comportamento esperado.

Sua utilização deverá preservar:

- explicabilidade;
- limites máximos;
- histórico;
- versão;
- supervisão;
- proteção contra normalização de degradações.

## 456. Alertas por tendência

Um alerta poderá ser acionado antes do limite absoluto quando a tendência indicar aproximação rápida de condição crítica.

## 457. Alertas por taxa de mudança

Mudanças abruptas podem ser relevantes mesmo quando o valor permanece dentro da faixa nominal.

A taxa de mudança deverá ser considerada em fenômenos sensíveis.

## 458. Alertas por ausência

A ausência de:

- heartbeat;
- evento esperado;
- atualização;
- confirmação;
- entrega;
- resposta;
- evidência

poderá gerar alerta quando ultrapassar a tolerância definida.

## 459. Alertas compostos

Um alerta composto poderá exigir combinação de sinais.

Exemplo:

- aumento de latência;
- crescimento de erros;
- saturação de fila;
- impacto em serviço crítico.

Isso reduz respostas a sinais isolados sem relevância.

## 460. Alertas contextuais

A mesma métrica poderá possuir interpretações diferentes segundo:

- horário;
- região;
- Missão;
- criticidade;
- estado operacional;
- manutenção;
- evento;
- capacidade disponível.

## 461. Alertas baseados em risco

Alertas baseados em risco deverão combinar probabilidade, impacto, velocidade e capacidade de resposta.

## 462. Alertas preditivos

Modelos poderão indicar probabilidade de falha futura.

Esses alertas deverão informar:

- confiança;
- horizonte;
- fatores;
- limitações;
- taxa histórica de acerto;
- consequência de falso positivo;
- consequência de falso negativo.

## 463. Falso positivo

Falso positivo ocorre quando o alerta indica uma condição que não exige a resposta presumida.

Seu excesso produz:

- fadiga;
- perda de confiança;
- desperdício;
- interrupção;
- risco de ignorar alertas reais.

## 464. Falso negativo

Falso negativo ocorre quando uma condição relevante não é alertada.

Poderá resultar de:

- baixa cobertura;
- limiar inadequado;
- falha de coleta;
- modelo incompleto;
- ausência de contexto;
- supressão indevida;
- mudança não reconhecida.

## 465. Precisão dos alertas

A precisão deverá avaliar quantos alertas emitidos eram relevantes.

Entretanto, alta precisão poderá ser alcançada às custas de baixa cobertura.

## 466. Revocação dos alertas

A revocação deverá avaliar quantas condições relevantes foram efetivamente detectadas.

Precisão e revocação deverão ser analisadas conjuntamente.

## 467. Fadiga de alertas

Fadiga ocorre quando o volume, repetição ou baixa qualidade dos alertas reduz a capacidade de resposta.

Seus sinais incluem:

- silenciamento indiscriminado;
- respostas atrasadas;
- alertas ignorados;
- escalonamento automático excessivo;
- perda de confiança.

## 468. Orçamento de alertas

Equipes e operadores possuem capacidade limitada de atenção.

A arquitetura poderá estabelecer orçamento de alertas para controlar:

- volume;
- frequência;
- interrupção;
- escalonamento;
- criticidade;
- tempo necessário de resposta.

## 469. Deduplicação de alertas

Alertas originados pela mesma condição deverão ser agrupados quando apropriado.

A deduplicação deverá preservar:

- fontes;
- quantidade;
- duração;
- evolução;
- serviços afetados;
- evidências.

## 470. Agrupamento de alertas

Alertas poderão ser agrupados por:

- causa provável;
- dependência;
- Missão;
- organização;
- território;
- janela temporal;
- incidente;
- mudança;
- impacto.

## 471. Supressão de alertas

A supressão poderá ser aplicada quando:

- existe manutenção autorizada;
- outro alerta representa a causa principal;
- a condição é conhecida;
- a resposta já está em curso;
- o sinal é repetitivo sem informação nova.

## 472. Governança da supressão

Toda supressão deverá possuir:

- responsável;
- justificativa;
- início;
- término;
- escopo;
- condições;
- registro;
- possibilidade de revisão.

Supressões permanentes deverão ser evitadas.

## 473. Silenciamento temporário

O silenciamento deverá expirar automaticamente.

A arquitetura deverá alertar quando o período terminar ou quando o contexto mudar.

## 474. Roteamento de alertas

O alerta deverá chegar ao nível capaz de agir.

O roteamento poderá considerar:

- serviço;
- horário;
- escala;
- território;
- organização;
- competência;
- autoridade;
- severidade;
- idioma;
- acessibilidade.

## 475. Escalonamento de alertas

O alerta deverá ser escalonado quando:

- não for reconhecido;
- a resposta não iniciar;
- o impacto crescer;
- a capacidade for insuficiente;
- houver dependência crítica;
- o limite de autoridade for alcançado;
- a condição se tornar extraordinária.

## 476. Reconhecimento do alerta

Reconhecer um alerta significa assumir que ele foi recebido e está sob responsabilidade de alguém.

Não significa que a condição foi resolvida.

## 477. Responsável primário

Cada alerta acionável deverá possuir um responsável primário claramente identificável.

A responsabilidade poderá ser transferida, mas a transferência deverá ser aceita e registrada.

## 478. Responsável secundário

Um responsável secundário deverá existir quando:

- o primário estiver indisponível;
- o tempo de resposta expirar;
- a condição exigir apoio;
- houver risco elevado;
- a operação for crítica.

## 479. Runbooks vinculados

Alertas deverão, quando possível, indicar:

- runbook;
- playbook;
- procedimento;
- contatos;
- dependências;
- ações seguras;
- critérios de escalonamento;
- limites de automação.

## 480. Alertas e automação

A automação poderá:

- coletar contexto;
- confirmar sinais;
- executar diagnóstico;
- abrir incidente;
- notificar;
- aplicar contenção reversível;
- recomendar ações.

A execução autônoma deverá respeitar autoridade, risco e governança.

## 481. Alertas auto-remediáveis

Um alerta poderá iniciar auto-remediação quando:

- a causa for conhecida;
- a ação for segura;
- o escopo for limitado;
- houver teste;
- a ação for reversível;
- existirem evidências;
- os limites estiverem definidos;
- houver monitoramento posterior.

## 482. Validação após remediação

O encerramento do alerta somente deverá ocorrer após verificar:

- recuperação;
- estabilidade;
- ausência de efeitos adversos;
- retorno dos indicadores;
- preservação de dados;
- continuidade;
- registro da ação.

## 483. Alertas persistentes

Alertas persistentes deverão mudar de tratamento.

A simples repetição não resolve a condição.

Eles poderão exigir:

- investigação estrutural;
- revisão arquitetural;
- aumento de capacidade;
- correção de dependência;
- mudança de processo;
- decisão institucional.

## 484. Alertas flapping

Flapping ocorre quando o alerta alterna repetidamente entre ativo e resolvido.

Poderá indicar:

- limiar inadequado;
- instabilidade;
- falta de histerese;
- dependência intermitente;
- remediação incompleta.

## 485. Encerramento do alerta

Um alerta deverá ser encerrado quando:

- a condição não existir;
- o estado estiver validado;
- a responsabilidade estiver registrada;
- as evidências forem preservadas;
- os impactos forem compreendidos;
- ações futuras forem encaminhadas.

## 486. Painéis operacionais

Painéis operacionais deverão apresentar informação necessária à compreensão e à ação.

Não deverão ser coleções indiscriminadas de gráficos.

## 487. Painel Mestre

O Painel Mestre deverá oferecer visão integrada de:

- Missões;
- serviços;
- capacidade;
- incidentes;
- riscos;
- dependências;
- prioridades;
- organizações;
- resultados;
- estados operacionais.

## 488. Painéis por papel

A arquitetura poderá oferecer painéis para:

- usuário;
- operador;
- coordenador;
- especialista;
- gestor;
- diretor;
- curador;
- auditor;
- organização parceira;
- comunidade.

## 489. Painéis por contexto

Painéis poderão adaptar-se conforme:

- território;
- horário;
- estado operacional;
- Missão;
- responsabilidade;
- nível de autoridade;
- perfil;
- necessidades de acessibilidade.

## 490. Painel como instrumento de decisão

Todo elemento principal de um painel deverá apoiar:

- percepção;
- compreensão;
- decisão;
- ação;
- acompanhamento;
- prestação de contas.

## 491. Visão geral e aprofundamento

O painel deverá permitir:

- visão sistêmica;
- identificação de anomalia;
- navegação por dependências;
- detalhamento;
- acesso à evidência;
- reconstrução temporal;
- compreensão do impacto.

## 492. Drill-down

O aprofundamento deverá preservar contexto.

Ao navegar de uma visão agregada para detalhes, o usuário deverá saber:

- de onde veio;
- qual filtro está ativo;
- qual período observa;
- quais dados foram excluídos;
- qual unidade está sendo analisada.

## 493. Drill-through

O painel poderá permitir navegação até:

- logs;
- traces;
- eventos;
- decisões;
- incidentes;
- runbooks;
- evidências;
- histórico;
- responsabilidades.

## 494. Filtros

Filtros deverão ser visíveis e compreensíveis.

Um painel não deverá apresentar resultados filtrados como se representassem a totalidade.

## 495. Comparações

Comparações poderão considerar:

- período anterior;
- linha de base;
- meta;
- SLO;
- região;
- população;
- organização;
- serviço;
- cenário;
- capacidade semelhante.

## 496. Contexto visual

Gráficos deverão indicar:

- título;
- unidade;
- período;
- fonte;
- atualização;
- confiança;
- meta;
- limiar;
- anotações;
- condições extraordinárias.

## 497. Anotações operacionais

Eventos relevantes deverão poder ser anotados na linha temporal.

Exemplos:

- implantação;
- incidente;
- manutenção;
- mudança de política;
- campanha;
- feriado;
- crise;
- alteração de capacidade;
- correção de dados.

## 498. Acessibilidade dos painéis

Painéis deverão respeitar:

- contraste;
- navegação por teclado;
- leitores de tela;
- textos alternativos;
- linguagem clara;
- símbolos além de cores;
- escalabilidade;
- diferentes dispositivos.

## 499. Painéis públicos

Painéis públicos deverão equilibrar:

- transparência;
- utilidade;
- privacidade;
- segurança;
- compreensão;
- atualização;
- contexto;
- prevenção de interpretações indevidas.

## 500. Painéis institucionais

Painéis institucionais poderão apresentar:

- compromissos;
- desempenho;
- resultados;
- riscos;
- governança;
- conformidade;
- continuidade;
- prestação de contas;
- evolução.

## 501. Sala do cérebro

A Sala do Cérebro será o ambiente de deliberação para situações que exigem compreensão profunda, coordenação ou decisão crítica.

Ela deverá reunir:

- sinais;
- contexto;
- hipóteses;
- impactos;
- alternativas;
- responsabilidades;
- princípios;
- evidências;
- decisões;
- acompanhamento.

## 502. Consciência situacional

Consciência situacional é a capacidade de:

1. perceber elementos relevantes;
2. compreender seu significado;
3. projetar possíveis evoluções;
4. decidir de forma responsável;
5. acompanhar os efeitos da ação.

## 503. Percepção situacional

A percepção deverá identificar:

- eventos;
- mudanças;
- sinais;
- atores;
- recursos;
- dependências;
- riscos;
- restrições;
- oportunidades.

## 504. Compreensão situacional

Compreender exige relacionar sinais ao contexto e ao propósito.

A compreensão deverá distinguir:

- fato;
- interpretação;
- hipótese;
- previsão;
- decisão;
- resultado.

## 505. Projeção situacional

A projeção deverá explorar futuros plausíveis.

Ela poderá considerar:

- tendência;
- propagação;
- cenários;
- capacidade;
- risco;
- comportamento de dependências;
- efeitos das alternativas.

## 506. Consciência compartilhada

Em operações coordenadas, a consciência deverá ser compartilhada entre participantes autorizados.

Isso exige:

- linguagem comum;
- atualização;
- contexto;
- comunicação;
- confiança;
- responsabilidades;
- proteção de informações.

## 507. Quadro operacional comum

O quadro operacional comum deverá apresentar uma representação coerente da situação para diferentes participantes.

Ele não exige que todos vejam exatamente os mesmos dados, mas que trabalhem sobre uma realidade compatível.

## 508. Divergência de percepção

Diferentes participantes podem interpretar a mesma situação de maneiras distintas.

A arquitetura deverá permitir:

- registrar divergências;
- comparar evidências;
- explicitar hipóteses;
- solicitar validação;
- preservar posições;
- decidir com responsabilidade.

## 509. Incerteza

A incerteza deverá ser representada, não ocultada.

Poderá decorrer de:

- dados incompletos;
- fontes divergentes;
- atraso;
- ausência de cobertura;
- modelo limitado;
- contexto desconhecido;
- comportamento emergente.

## 510. Níveis de confiança

Informações e interpretações poderão receber níveis de confiança como:

- confirmado;
- altamente provável;
- provável;
- possível;
- incerto;
- não verificado;
- contraditório.

## 511. Hipóteses operacionais

Hipóteses deverão ser registradas com:

- evidências favoráveis;
- evidências contrárias;
- responsável;
- confiança;
- teste possível;
- impacto se estiver errada;
- prazo de revisão.

## 512. Diagnóstico

Diagnóstico é o processo de compreender causas, mecanismos e condições associadas a um comportamento.

Não deverá ser confundido com a primeira explicação disponível.

## 513. Causa imediata

A causa imediata é o mecanismo diretamente associado ao acontecimento.

Ela poderá não representar a causa estrutural.

## 514. Causa raiz

A busca por causa raiz deverá evitar a ideia de que todo problema possui uma única origem.

Sistemas complexos frequentemente falham por combinação de:

- condições;
- decisões;
- dependências;
- lacunas;
- variações;
- eventos;
- defesas insuficientes.

## 515. Fatores contribuintes

Fatores contribuintes deverão ser reconhecidos mesmo quando não forem suficientes, isoladamente, para produzir o evento.

## 516. Análise de mudança

Mudanças recentes deverão ser correlacionadas com alterações de comportamento.

Podem incluir:

- código;
- configuração;
- política;
- equipe;
- infraestrutura;
- fornecedor;
- integração;
- capacidade;
- regra;
- processo.

## 517. Detecção de anomalias

Anomalia é um comportamento diferente do esperado.

Ela não representa automaticamente falha.

Poderá indicar:

- oportunidade;
- mudança legítima;
- crescimento;
- sazonalidade;
- erro;
- ataque;
- degradação;
- dado incorreto.

## 518. Linha de base dinâmica

A linha de base dinâmica poderá evoluir com a realidade, desde que não normalize silenciosamente degradações persistentes.

## 519. Anomalias multivariadas

Algumas anomalias somente serão visíveis na relação entre múltiplas variáveis.

A arquitetura poderá analisar combinações de:

- carga;
- latência;
- erros;
- capacidade;
- território;
- horário;
- versão;
- dependências;
- comportamento humano.

## 520. Inteligência artificial na observabilidade

A IA poderá apoiar:

- correlação;
- sumarização;
- detecção de padrões;
- classificação;
- previsão;
- investigação;
- recomendação;
- construção de narrativas operacionais.

## 521. Limites da IA na observabilidade

A IA não deverá:

- inventar evidências;
- ocultar incerteza;
- substituir autoridade humana indevidamente;
- acessar dados sem permissão;
- executar ações além de sua delegação;
- transformar correlação em causalidade;
- encerrar incidentes sem validação.

## 522. Explicabilidade das recomendações

Recomendações produzidas por IA deverão informar:

- dados considerados;
- sinais principais;
- hipótese;
- confiança;
- alternativas;
- riscos;
- limites;
- ações sugeridas.

## 523. Memória observacional

A Plataforma UNO deverá preservar memória suficiente para comparar:

- estados;
- eventos;
- mudanças;
- decisões;
- respostas;
- resultados;
- aprendizados;
- recorrências.

## 524. Observabilidade como aprendizagem

A observabilidade deverá alimentar:

- revisão de incidentes;
- melhoria de runbooks;
- evolução de modelos;
- planejamento de capacidade;
- revisão de SLOs;
- treinamento;
- prevenção;
- adaptação institucional.

## 525. Síntese do terceiro lote

A observabilidade da Plataforma UNO deverá transformar sinais dispersos em consciência situacional responsável.

Métricas, logs, traces, eventos, estados, alertas, painéis e relatos humanos formarão uma estrutura integrada capaz de permitir que a operação:

- perceba a realidade;
- reconheça mudanças;
- identifique impactos;
- reconstrua acontecimentos;
- coordene respostas;
- preserve responsabilidades;
- aprenda com a experiência;
- evolua sem perder sua identidade.

A observabilidade não será medida pela quantidade de dados coletados, mas pela capacidade de compreender e agir com precisão, proporcionalidade, legitimidade e propósito.

---

# Lote 4 — Análise Operacional, Inteligência, Diagnóstico, Previsão, Cenários, Recomendações e Apoio à Decisão

## 526. Da observabilidade à inteligência operacional

A observabilidade permite perceber o que acontece.

A inteligência operacional transforma sinais, dados, evidências e contexto em compreensão útil para decidir e agir.

Ela deverá conectar:

- realidade;
- propósito;
- conhecimento;
- análise;
- alternativas;
- decisão;
- execução;
- resultado;
- aprendizagem.

## 527. Definição de inteligência operacional

Inteligência operacional é a capacidade institucional de compreender continuamente a operação e orientar respostas proporcionais às condições existentes.

Ela deverá permitir:

- reconhecer situações;
- identificar padrões;
- explicar comportamentos;
- antecipar riscos;
- comparar alternativas;
- recomendar ações;
- acompanhar consequências;
- revisar entendimentos.

## 528. Inteligência não é acumulação de dados

A quantidade de dados disponível não define o nível de inteligência de uma organização.

Uma organização poderá possuir grandes bases e ainda ser incapaz de:

- responder perguntas;
- reconhecer riscos;
- explicar resultados;
- coordenar ações;
- aprender;
- preservar continuidade.

## 529. Inteligência orientada ao propósito

Toda análise deverá estar conectada a uma necessidade legítima.

A pergunta fundamental será:

> Que compreensão precisamos construir para servir melhor à vida, às pessoas, às organizações e à sociedade?

## 530. Objetos da inteligência operacional

A inteligência operacional poderá compreender:

- Missões;
- serviços;
- capacidades;
- recursos;
- filas;
- processos;
- eventos;
- riscos;
- dependências;
- organizações;
- pessoas;
- territórios;
- resultados;
- impactos.

## 531. Ciclo da inteligência operacional

O ciclo deverá incluir:

1. formular a necessidade;
2. reunir evidências;
3. validar dados;
4. analisar;
5. construir hipóteses;
6. comparar alternativas;
7. recomendar;
8. decidir;
9. acompanhar;
10. aprender.

## 532. Necessidade de inteligência

Toda produção de inteligência deverá começar por uma pergunta, decisão ou risco claramente identificado.

Produzir análises sem necessidade definida pode gerar:

- desperdício;
- distração;
- exposição;
- conclusões irrelevantes;
- excesso de relatórios;
- falsa sensação de controle.

## 533. Requisitos de inteligência

Um requisito de inteligência deverá declarar:

- pergunta;
- propósito;
- destinatário;
- prazo;
- criticidade;
- fontes possíveis;
- nível de confiança necessário;
- restrições;
- decisão apoiada.

## 534. Perguntas operacionais

Perguntas operacionais poderão buscar compreender:

- o que está acontecendo;
- onde;
- quando;
- com quem;
- por que;
- com qual impacto;
- o que poderá acontecer;
- quais ações são possíveis;
- qual resposta é mais adequada.

## 535. Perguntas descritivas

Perguntas descritivas procuram representar a realidade observada.

Exemplos:

- quantas Missões estão ativas?
- qual é o tamanho das filas?
- quais serviços estão degradados?
- quais territórios apresentam maior demanda?
- quais recursos estão disponíveis?

## 536. Perguntas diagnósticas

Perguntas diagnósticas procuram compreender fatores associados aos resultados.

Exemplos:

- por que a latência aumentou?
- por que determinada região possui menor cobertura?
- quais dependências contribuíram para a interrupção?
- por que o backlog envelheceu?

## 537. Perguntas preditivas

Perguntas preditivas procuram estimar o que poderá ocorrer.

Exemplos:

- qual demanda é esperada?
- quais capacidades podem saturar?
- onde o risco tende a crescer?
- qual probabilidade de descumprimento de SLO?

## 538. Perguntas prescritivas

Perguntas prescritivas buscam identificar alternativas de ação.

Exemplos:

- onde alocar recursos?
- quando escalar?
- quais Missões priorizar?
- qual contingência ativar?
- qual mudança reduz melhor o risco?

## 539. Perguntas avaliativas

Perguntas avaliativas examinam se uma intervenção produziu os resultados esperados.

Elas poderão investigar:

- eficácia;
- efetividade;
- impacto;
- custo;
- equidade;
- sustentabilidade;
- efeitos adversos;
- continuidade.

## 540. Perguntas normativas

Perguntas normativas verificam se a operação permanece compatível com:

- leis;
- normas;
- NRs;
- contratos;
- políticas;
- princípios;
- responsabilidades;
- compromissos;
- direitos.

## 541. Formulação correta da pergunta

Uma pergunta mal formulada pode conduzir a análise precisa de um problema irrelevante.

Antes da análise, deverá ser verificado:

- qual decisão depende da resposta;
- qual realidade está sendo considerada;
- quais conceitos precisam ser definidos;
- quais limites existem;
- quem será afetado.

## 542. Escopo analítico

Toda análise deverá definir:

- população;
- período;
- território;
- serviço;
- organização;
- versão;
- estado operacional;
- exclusões;
- granularidade;
- hipóteses.

## 543. Unidade de análise

A unidade de análise poderá ser:

- pessoa;
- organização;
- Missão;
- evento;
- serviço;
- transação;
- território;
- período;
- capacidade;
- decisão;
- incidente;
- resultado.

A escolha deverá corresponder à pergunta.

## 544. População analítica

A população representa o conjunto sobre o qual se pretende compreender ou concluir algo.

Ela deverá ser distinguida da parcela efetivamente observada.

## 545. Amostra

Uma amostra deverá ser avaliada quanto a:

- tamanho;
- seleção;
- cobertura;
- representatividade;
- perdas;
- vieses;
- qualidade;
- finalidade.

## 546. Amostragem probabilística

A amostragem probabilística poderá apoiar inferências quando cada elemento possuir probabilidade conhecida de seleção.

Seu uso dependerá da disponibilidade de uma população adequadamente definida.

## 547. Amostragem não probabilística

Amostras por conveniência, disponibilidade, adesão ou julgamento podem ser úteis, mas suas limitações deverão ser explicitadas.

## 548. Viés de seleção

O viés de seleção ocorre quando os elementos observados diferem sistematicamente daqueles não observados.

Ele poderá aparecer quando:

- somente usuários ativos respondem;
- apenas casos concluídos são analisados;
- territórios conectados são mais visíveis;
- grupos vulneráveis possuem menor acesso;
- falhas silenciosas não geram registros.

## 549. Viés de sobrevivência

O viés de sobrevivência ocorre quando a análise considera apenas elementos que permaneceram visíveis ou bem-sucedidos.

Casos que abandonaram, falharam ou desapareceram também deverão ser investigados.

## 550. Viés de medição

O viés de medição surge quando o instrumento representa de forma sistematicamente distorcida o fenômeno observado.

## 551. Viés de resposta

Respostas humanas poderão ser influenciadas por:

- medo;
- expectativa;
- desejo de agradar;
- linguagem;
- contexto;
- autoridade;
- anonimato;
- lembrança;
- formato da pergunta.

## 552. Viés de automação

Pessoas podem aceitar recomendações automáticas por presumirem que sistemas são mais objetivos.

A Plataforma UNO deverá preservar:

- contestação;
- verificação;
- explicação;
- julgamento;
- responsabilidade humana.

## 553. Viés histórico

Dados históricos podem reproduzir desigualdades, exclusões ou decisões anteriores inadequadas.

O fato de um padrão existir no passado não significa que deva orientar o futuro.

## 554. Viés de disponibilidade

Eventos recentes, visíveis ou emocionalmente marcantes poderão receber peso excessivo.

A memória institucional deverá permitir comparação com séries mais amplas.

## 555. Viés de confirmação

Analistas poderão buscar evidências favoráveis à hipótese inicial.

A arquitetura deverá incentivar:

- hipóteses alternativas;
- evidências contrárias;
- revisão independente;
- testes;
- debate;
- contestação.

## 556. Viés de agregação

Resultados agregados podem ocultar comportamentos importantes em grupos, territórios ou períodos específicos.

## 557. Paradoxo de Simpson

Relações observadas em grupos separados podem desaparecer ou inverter-se quando os dados são agregados.

Por isso, comparações deverão considerar composição, segmentação e fatores de confusão.

## 558. Qualidade antes da análise

Nenhum método sofisticado compensará dados inadequados sem tornar explícita a incerteza produzida.

Antes da análise, deverão ser avaliados:

- completude;
- precisão;
- coerência;
- atualidade;
- proveniência;
- integridade;
- cobertura;
- compatibilidade.

## 559. Preparação dos dados

A preparação poderá incluir:

- seleção;
- limpeza;
- padronização;
- validação;
- integração;
- enriquecimento;
- anonimização;
- transformação;
- documentação.

## 560. Dados ausentes

Dados ausentes deverão ser classificados conforme sua possível origem.

A ausência poderá ser:

- aleatória;
- relacionada a outras variáveis;
- relacionada ao próprio valor ausente;
- causada por falha operacional;
- causada por exclusão estrutural.

## 561. Imputação

A imputação substitui valores ausentes por estimativas.

Ela somente deverá ser utilizada quando:

- houver fundamento;
- o método for documentado;
- a incerteza permanecer visível;
- o dado imputado puder ser distinguido do observado;
- o impacto for avaliado.

## 562. Outliers

Outliers são observações distantes do comportamento predominante.

Eles poderão representar:

- erro;
- fraude;
- evento raro;
- condição crítica;
- oportunidade;
- mudança real;
- população diferente.

Não deverão ser removidos automaticamente.

## 563. Normalização de dados

A normalização poderá facilitar comparação, mas deverá preservar acesso aos valores originais.

## 564. Padronização

A padronização poderá transformar variáveis segundo média e dispersão ou segundo regras institucionais.

O método deverá ser compatível com a distribuição e a finalidade.

## 565. Transformações

Transformações como logaritmos, escalas, índices e suavizações deverão ser documentadas.

A apresentação não poderá ocultar o comportamento original.

## 566. Segmentação

A segmentação divide a população em grupos relevantes para análise.

Ela poderá utilizar:

- território;
- serviço;
- organização;
- canal;
- perfil operacional;
- criticidade;
- período;
- capacidade;
- estado;
- necessidade.

## 567. Segmentação responsável

A segmentação deverá possuir finalidade legítima e proteção adequada.

Não poderá ser utilizada para:

- discriminar;
- excluir;
- explorar vulnerabilidades;
- restringir direitos sem base;
- expor grupos;
- criar estigmas.

## 568. Coortes

Coortes agrupam elementos que compartilham determinado marco inicial.

Podem apoiar análises de:

- entrada;
- adoção;
- permanência;
- evolução;
- recuperação;
- comportamento após mudança;
- resultados ao longo do tempo.

## 569. Análise longitudinal

A análise longitudinal acompanha os mesmos elementos ou populações ao longo do tempo.

Ela ajuda a compreender evolução, trajetória e persistência.

## 570. Análise transversal

A análise transversal observa determinada realidade em um período ou instante definido.

Ela permite comparação, mas possui limites para explicar evolução e causalidade.

## 571. Séries temporais

Séries temporais organizam observações segundo o tempo.

Sua análise poderá identificar:

- tendência;
- sazonalidade;
- ciclos;
- rupturas;
- anomalias;
- dependências;
- defasagens;
- volatilidade.

## 572. Tendência

Tendência representa movimento persistente ao longo do tempo.

Ela não deverá ser confundida com oscilações temporárias.

## 573. Sazonalidade

Sazonalidade corresponde a padrões recorrentes associados a:

- horários;
- dias;
- meses;
- estações;
- calendários;
- eventos;
- ciclos institucionais;
- comportamentos sociais.

## 574. Ciclos

Ciclos poderão ocorrer sem periodicidade fixa e refletir transformações econômicas, sociais, operacionais ou institucionais.

## 575. Ruído

Ruído é a variação que não pode ser explicada pelo modelo utilizado.

A redução do ruído não deverá apagar sinais raros relevantes.

## 576. Suavização

Técnicas de suavização poderão facilitar a observação de tendências.

A série original deverá permanecer disponível para evitar ocultação de picos e eventos críticos.

## 577. Médias móveis

Médias móveis reduzem variações de curto prazo, mas introduzem atraso e podem diminuir a visibilidade de mudanças abruptas.

## 578. Ruptura estrutural

Uma ruptura estrutural ocorre quando o comportamento da série muda de forma significativa.

Pode ser causada por:

- nova política;
- tecnologia;
- crise;
- expansão;
- mudança de população;
- alteração de medição;
- reorganização;
- evento externo.

## 579. Comparabilidade histórica

Uma série somente será comparável ao longo do tempo quando mudanças de:

- fórmula;
- fonte;
- cobertura;
- unidade;
- processo;
- versão;
- população;
- contexto

forem conhecidas e tratadas.

## 580. Análise descritiva

A análise descritiva resume os dados observados.

Poderá utilizar:

- contagens;
- proporções;
- distribuições;
- médias;
- medianas;
- percentis;
- dispersões;
- taxas;
- visualizações.

## 581. Distribuição

A distribuição revela como os valores se organizam.

Ela poderá demonstrar informações invisíveis em uma média, como:

- assimetria;
- multimodalidade;
- extremos;
- concentração;
- lacunas;
- subpopulações.

## 582. Variância e desvio

Medidas de dispersão ajudam a compreender estabilidade e previsibilidade.

Dois serviços podem possuir a mesma média e comportamentos operacionais completamente diferentes.

## 583. Intervalos de confiança

Intervalos de confiança expressam a incerteza associada a estimativas sob determinados pressupostos.

Não deverão ser interpretados como garantia absoluta.

## 584. Significância estatística

Significância estatística não significa automaticamente importância operacional, social ou institucional.

Um efeito pequeno poderá ser estatisticamente detectável e ainda não justificar intervenção.

## 585. Relevância prática

A relevância prática deverá considerar:

- magnitude;
- impacto;
- custo;
- risco;
- alcance;
- reversibilidade;
- propósito;
- consequências humanas.

## 586. Tamanho de efeito

O tamanho de efeito ajuda a compreender a magnitude de uma diferença ou associação.

Ele deverá acompanhar testes estatísticos quando apropriado.

## 587. Poder estatístico

O poder estatístico representa a capacidade de detectar efeitos existentes sob determinados pressupostos.

Baixo poder aumenta o risco de conclusões equivocadas por ausência de evidência.

## 588. Correlação

Correlação indica associação entre variáveis.

Ela deverá ser interpretada com atenção a:

- causalidade;
- fatores de confusão;
- não linearidade;
- defasagem temporal;
- tamanho da amostra;
- viés;
- comportamento de subgrupos.

## 589. Correlação espúria

Duas variáveis podem parecer relacionadas por coincidência, tendência comum ou influência de terceiro fator.

A correlação deverá produzir hipótese, não sentença causal automática.

## 590. Defasagem

Uma causa poderá produzir efeito somente após determinado intervalo.

A análise deverá considerar defasagens compatíveis com o fenômeno.

## 591. Autocorrelação

Observações próximas no tempo podem depender umas das outras.

Ignorar autocorrelação poderá produzir estimativas de confiança inadequadas.

## 592. Regressão

Modelos de regressão poderão estimar relações entre variáveis.

Eles deverão declarar:

- variável de interesse;
- fatores incluídos;
- pressupostos;
- período;
- população;
- incerteza;
- qualidade do ajuste;
- limitações.

## 593. Regressão não prova causalidade

Mesmo modelos bem ajustados não demonstram causalidade por si mesmos.

## 594. Multicolinearidade

Variáveis fortemente relacionadas entre si podem dificultar a interpretação dos efeitos individuais.

## 595. Modelos lineares

Modelos lineares são úteis quando suas simplificações representam adequadamente o problema.

Sua interpretabilidade poderá ser preferível a métodos mais complexos.

## 596. Relações não lineares

Muitos fenômenos operacionais possuem:

- limites;
- saturação;
- aceleração;
- pontos de ruptura;
- retornos decrescentes;
- interações.

Modelos deverão refletir essas possibilidades quando necessário.

## 597. Modelos explicativos

Modelos explicativos buscam compreender relações e fatores.

Eles deverão priorizar clareza, coerência e sustentação.

## 598. Modelos preditivos

Modelos preditivos buscam estimar resultados futuros ou desconhecidos.

Boa previsão não significa que o modelo explique corretamente o mecanismo causal.

## 599. Modelos prescritivos

Modelos prescritivos recomendam ações ou alocações.

Por influenciarem decisões, exigirão maior governança sobre:

- objetivos;
- restrições;
- valores;
- riscos;
- autoridade;
- contestação;
- responsabilidade.

## 600. Modelos normativos

Modelos normativos avaliam a operação diante de regras, limites e compromissos.

Eles deverão incorporar a legislação e as normas aplicáveis desde sua concepção.

## 601. Validação de modelos

A validação deverá verificar:

- adequação;
- generalização;
- estabilidade;
- erros;
- vieses;
- desempenho em subgrupos;
- sensibilidade;
- utilidade operacional;
- comportamento em condições adversas.

## 602. Dados de treinamento e teste

Dados utilizados para treinamento não deverão ser confundidos com dados independentes de validação.

A separação deverá prevenir estimativas excessivamente otimistas.

## 603. Validação temporal

Modelos destinados ao futuro deverão ser avaliados respeitando a ordem temporal.

Dados futuros não poderão contaminar o treinamento do passado.

## 604. Validação externa

Quando possível, modelos deverão ser avaliados em contextos, territórios ou populações diferentes daqueles utilizados em seu desenvolvimento.

## 605. Generalização

Generalização representa a capacidade de manter utilidade fora dos dados conhecidos.

Ela não deverá ser presumida diante de mudança de contexto.

## 606. Overfitting

Overfitting ocorre quando o modelo aprende particularidades dos dados de treinamento e perde capacidade de funcionar em novas situações.

## 607. Underfitting

Underfitting ocorre quando o modelo é simples demais para representar padrões relevantes.

## 608. Drift de dados

Drift de dados ocorre quando a distribuição das entradas muda.

Poderá resultar de:

- crescimento;
- mudança de comportamento;
- nova população;
- tecnologia;
- crise;
- sazonalidade;
- alteração de fonte.

## 609. Drift conceitual

Drift conceitual ocorre quando a relação entre entradas e resultados muda.

O que indicava risco anteriormente pode deixar de indicar.

## 610. Monitoramento de modelos

Todo modelo operacional relevante deverá possuir monitoramento sobre:

- entradas;
- saídas;
- confiança;
- erros;
- drift;
- desempenho;
- vieses;
- uso;
- decisões influenciadas;
- incidentes.

## 611. Registro do modelo

O registro deverá incluir:

- finalidade;
- proprietário;
- versão;
- dados;
- método;
- métricas;
- limitações;
- autorizações;
- dependências;
- histórico;
- estado operacional.

## 612. Linhagem do modelo

A linhagem deverá permitir reconstruir:

- qual versão foi utilizada;
- quais dados a alimentaram;
- quais parâmetros estavam ativos;
- qual recomendação produziu;
- qual decisão foi tomada;
- qual resultado ocorreu.

## 613. Explicabilidade

A explicabilidade deverá ser proporcional ao impacto da decisão.

Quanto maior o risco, maior deverá ser a capacidade de compreender:

- fatores;
- lógica;
- limites;
- incerteza;
- alternativas;
- consequências.

## 614. Interpretabilidade local

A interpretação local explica por que determinado resultado foi produzido para um caso específico.

## 615. Interpretabilidade global

A interpretação global busca compreender o comportamento geral do modelo.

Ambas poderão ser necessárias.

## 616. Calibração

Um modelo probabilístico estará calibrado quando probabilidades previstas corresponderem adequadamente às frequências observadas.

## 617. Discriminação

A discriminação representa a capacidade de distinguir casos com diferentes resultados.

Um modelo pode discriminar bem e estar mal calibrado.

## 618. Matriz de confusão

A matriz de confusão deverá permitir analisar:

- verdadeiros positivos;
- verdadeiros negativos;
- falsos positivos;
- falsos negativos.

A importância de cada erro dependerá do contexto.

## 619. Custos assimétricos de erro

Falsos positivos e falsos negativos podem possuir consequências muito diferentes.

Os limiares deverão refletir:

- segurança;
- direitos;
- recursos;
- urgência;
- reversibilidade;
- impacto;
- capacidade de revisão.

## 620. Incerteza do modelo

A saída deverá distinguir:

- previsão;
- probabilidade;
- confiança;
- intervalo;
- cenário;
- hipótese;
- desconhecimento.

## 621. Abstenção do modelo

Um modelo deverá poder declarar que não possui confiança suficiente para recomendar.

A abstenção é preferível à falsa certeza.

## 622. Human in the loop

Decisões com necessidade de julgamento humano deverão manter participação humana efetiva.

A pessoa deverá possuir:

- informação;
- tempo;
- autoridade;
- capacidade de discordar;
- acesso à evidência;
- responsabilidade clara.

## 623. Human on the loop

Em automações supervisionadas, pessoas poderão acompanhar e intervir quando necessário.

A supervisão não deverá ser meramente simbólica.

## 624. Human in command

A autoridade humana competente deverá permanecer capaz de:

- definir objetivos;
- limitar modelos;
- suspender automações;
- revisar decisões;
- corrigir resultados;
- responsabilizar;
- redefinir políticas.

## 625. Contestabilidade

Pessoas e organizações afetadas deverão possuir, conforme aplicável:

- informação;
- canal;
- prazo;
- explicação;
- revisão humana;
- correção;
- recurso;
- registro da contestação.

## 626. Análise causal

A análise causal busca compreender se uma intervenção ou condição produz determinado efeito.

Ela deverá diferenciar:

- associação;
- previsão;
- mecanismo;
- contribuição;
- causalidade.

## 627. Contrafactual

A pergunta causal envolve comparar o resultado observado com aquilo que teria ocorrido sem determinada intervenção.

Como ambos não podem ser observados simultaneamente no mesmo caso, métodos e pressupostos serão necessários.

## 628. Experimentos controlados

Experimentos controlados poderão apoiar inferências causais quando forem:

- éticos;
- legítimos;
- seguros;
- autorizados;
- metodologicamente adequados;
- compatíveis com direitos.

## 629. Randomização

A randomização poderá reduzir fatores de confusão, mas não elimina:

- problemas de implementação;
- perda de participantes;
- efeitos indiretos;
- limitações de generalização;
- questões éticas.

## 630. Testes A/B

Testes A/B poderão ser utilizados em interfaces, processos e comunicações quando não expuserem pessoas a riscos indevidos.

Deverão possuir:

- hipótese;
- critérios;
- duração;
- população;
- proteção;
- métrica principal;
- indicadores de equilíbrio;
- regra de encerramento.

## 631. Limites éticos da experimentação

Não será aceitável experimentar deliberadamente condições que possam:

- ferir direitos;
- comprometer segurança;
- negar serviço essencial;
- explorar vulnerabilidade;
- manipular pessoas;
- ocultar riscos.

## 632. Quase-experimentos

Quando experimentos não forem possíveis, desenhos quase-experimentais poderão apoiar avaliação.

As limitações deverão permanecer explícitas.

## 633. Diferenças em diferenças

O método poderá comparar mudanças entre grupos ao longo do tempo, desde que pressupostos como tendências paralelas sejam avaliados.

## 634. Pareamento

Técnicas de pareamento buscam construir grupos comparáveis.

Elas não controlam automaticamente fatores não observados.

## 635. Regressão descontínua

Desenhos baseados em limiares poderão apoiar inferência causal quando a atribuição depender claramente de um corte.

## 636. Controle sintético

Métodos de controle sintético poderão construir uma referência comparativa a partir de múltiplas unidades.

Sua qualidade dependerá da compatibilidade e dos dados disponíveis.

## 637. Triangulação

A triangulação combina métodos, fontes e perspectivas.

Uma conclusão será mais robusta quando apoiada por:

- dados quantitativos;
- evidências qualitativas;
- registros operacionais;
- conhecimento local;
- comparação;
- validação independente.

## 638. Análise qualitativa

A análise qualitativa poderá compreender:

- experiências;
- significados;
- contextos;
- decisões;
- relações;
- barreiras;
- percepções;
- consequências não mensuradas.

## 639. Entrevistas

Entrevistas deverão possuir:

- finalidade;
- roteiro adequado;
- consentimento quando necessário;
- proteção;
- registro;
- método de análise;
- respeito às pessoas.

## 640. Grupos de escuta

Grupos de escuta poderão reunir perspectivas de comunidades, operadores, especialistas e organizações.

Não deverão ser tratados como representação estatística de toda a população sem fundamento.

## 641. Observação de campo

A observação de campo poderá revelar diferenças entre o processo formalmente descrito e a operação real.

## 642. Conhecimento territorial

O conhecimento local deverá ser reconhecido como fonte relevante para interpretar indicadores e desenhar respostas.

## 643. Conhecimento especializado

Especialistas poderão contribuir para:

- formular hipóteses;
- validar métodos;
- interpretar exceções;
- reconhecer riscos;
- construir cenários;
- revisar recomendações.

## 644. Inteligência coletiva

A Plataforma UNO deverá combinar inteligências humanas e artificiais sem reduzir uma à outra.

A inteligência coletiva poderá reunir:

- operadores;
- comunidades;
- especialistas;
- gestores;
- curadores;
- agentes;
- organizações;
- sistemas analíticos.

## 645. Delphi e consenso estruturado

Métodos de consulta estruturada poderão apoiar a construção de consenso, especialmente quando os dados forem insuficientes.

Consenso não deverá ser confundido com verdade.

## 646. Divergência produtiva

Divergências deverão ser preservadas quando representarem:

- evidências diferentes;
- valores em tensão;
- incerteza;
- perspectivas legítimas;
- riscos não resolvidos.

## 647. Revisão por pares

Análises relevantes deverão poder ser revisadas por pessoas com competência e independência adequadas.

## 648. Reprodutibilidade

Uma análise deverá ser reproduzível a partir de:

- dados autorizados;
- código;
- parâmetros;
- versões;
- transformações;
- pressupostos;
- ambiente;
- documentação.

## 649. Replicabilidade

A replicabilidade busca verificar se resultados semelhantes aparecem em novos dados ou contextos comparáveis.

## 650. Caderno analítico

Cada análise relevante poderá possuir caderno contendo:

- pergunta;
- contexto;
- fontes;
- preparação;
- métodos;
- resultados;
- limitações;
- decisões;
- revisões;
- responsáveis.

## 651. Código analítico

Código utilizado em análises deverá receber:

- versionamento;
- testes;
- revisão;
- documentação;
- controle de acesso;
- verificação de dependências;
- rastreabilidade.

## 652. Consultas analíticas

Consultas deverão ser preservadas quando sustentarem indicadores, relatórios ou decisões relevantes.

## 653. Ambientes analíticos

Ambientes deverão controlar:

- versões;
- bibliotecas;
- permissões;
- recursos;
- dados;
- isolamento;
- reprodutibilidade;
- descarte.

## 654. Sandbox analítico

Análises exploratórias deverão ocorrer em ambientes controlados antes de influenciar a operação real.

## 655. Análise exploratória

A análise exploratória busca descobrir padrões, relações e perguntas.

Seus resultados deverão ser tratados como hipóteses até validação apropriada.

## 656. Análise confirmatória

A análise confirmatória testa hipóteses e critérios previamente definidos.

A distinção reduz interpretações oportunistas.

## 657. Prerregistro

Quando apropriado, hipóteses, métricas e métodos poderão ser registrados antes da análise.

Isso reduz mudanças orientadas pelo resultado desejado.

## 658. P-hacking e escolhas oportunistas

A arquitetura deverá evitar a repetição indiscriminada de testes até encontrar resultados aparentemente favoráveis.

## 659. HARKing

Hipóteses formuladas depois de conhecidos os resultados não deverão ser apresentadas como se tivessem sido definidas anteriormente.

## 660. Resultados negativos

A ausência de efeito esperado também produz conhecimento.

Resultados negativos deverão ser preservados para evitar repetição de tentativas inadequadas.

## 661. Cenários

Cenários são representações estruturadas de futuros plausíveis.

Eles não são previsões absolutas.

## 662. Cenário de referência

O cenário de referência representa a evolução esperada caso as condições principais permaneçam semelhantes.

## 663. Cenário otimista

O cenário otimista deverá considerar condições favoráveis plausíveis, sem transformar desejo em estimativa.

## 664. Cenário adverso

O cenário adverso deverá explorar deteriorações plausíveis e suas consequências.

## 665. Cenário extremo

Cenários extremos ajudam a testar limites, contingências e continuidade.

Deverão considerar eventos raros de alto impacto.

## 666. Cenários combinados

Crises podem resultar da combinação de:

- falha técnica;
- ausência humana;
- ataque;
- evento territorial;
- dependência externa;
- desinformação;
- escassez;
- pressão institucional.

## 667. Hipóteses de cenário

Cada cenário deverá declarar:

- premissas;
- fatores;
- gatilhos;
- horizonte;
- incertezas;
- impactos;
- capacidades necessárias;
- sinais antecedentes.

## 668. Indicadores de transição

Indicadores de transição ajudam a reconhecer quando a realidade começa a se aproximar de determinado cenário.

## 669. Simulações

Simulações poderão testar:

- capacidade;
- propagação;
- filas;
- dependências;
- contingências;
- decisões;
- recursos;
- recuperação;
- comportamento coletivo.

## 670. Identificação de simulações

Todo conteúdo produzido em ambiente de simulação deverá ser claramente identificado como:

**SIMULAÇÃO**

Isso impedirá confusão com acontecimentos, decisões ou operações reais.

## 671. Modelos de simulação

A arquitetura poderá empregar:

- eventos discretos;
- dinâmica de sistemas;
- agentes;
- Monte Carlo;
- redes;
- filas;
- jogos de decisão;
- gêmeos digitais.

## 672. Simulação de Monte Carlo

Simulações de Monte Carlo poderão explorar diferentes combinações de incerteza.

Os resultados deverão ser apresentados como distribuições, não como futuro garantido.

## 673. Simulação baseada em agentes

Modelos baseados em agentes poderão representar comportamentos, interações e efeitos emergentes.

As regras dos agentes deverão ser documentadas e validadas.

## 674. Gêmeo operacional

Um gêmeo operacional poderá representar serviços, capacidades, estados e dependências para apoiar análise e simulação.

Ele nunca será confundido com a totalidade da realidade.

## 675. Validação da simulação

Simulações deverão ser avaliadas quanto a:

- coerência;
- aderência histórica;
- sensibilidade;
- pressupostos;
- estabilidade;
- utilidade;
- limitações.

## 676. Exercícios de mesa

Exercícios de mesa poderão reunir participantes para analisar cenários e testar decisões sem executar ações reais.

## 677. Jogos de crise

Jogos de crise deverão testar:

- comunicação;
- autoridade;
- escalonamento;
- coordenação;
- continuidade;
- tomada de decisão;
- recuperação;
- aprendizagem.

## 678. Red team analítico

Equipes ou participantes poderão desafiar hipóteses, modelos e recomendações para identificar:

- fragilidades;
- vieses;
- cenários esquecidos;
- efeitos adversos;
- formas de manipulação;
- riscos sistêmicos.

## 679. Previsão

Previsão é uma estimativa sobre um estado futuro.

Toda previsão deverá declarar:

- horizonte;
- probabilidade;
- intervalo;
- confiança;
- premissas;
- fonte;
- versão;
- validade.

## 680. Horizonte de previsão

A confiabilidade tende a diminuir conforme o horizonte aumenta.

Horizontes poderão ser:

- imediato;
- curto;
- médio;
- longo;
- geracional.

## 681. Previsão pontual

Uma previsão pontual apresenta um valor esperado, mas deverá ser acompanhada de incerteza.

## 682. Previsão probabilística

Previsões probabilísticas apresentam diferentes resultados possíveis e suas probabilidades estimadas.

## 683. Intervalos de previsão

Intervalos de previsão representam a faixa na qual uma observação futura poderá ocorrer segundo o modelo e seus pressupostos.

## 684. Previsão hierárquica

Previsões poderão ser produzidas por:

- território;
- organização;
- serviço;
- categoria;
- período.

Os diferentes níveis deverão manter coerência quando agregados.

## 685. Combinação de previsões

A combinação de métodos poderá reduzir dependência de um único modelo.

Os pesos e critérios deverão ser documentados.

## 686. Julgamento na previsão

Conhecimento humano poderá ajustar previsões diante de informações não representadas nos dados.

Todo ajuste deverá possuir:

- autor;
- motivo;
- evidência;
- impacto;
- data;
- possibilidade de avaliação posterior.

## 687. Avaliação da previsão

Previsões deverão ser comparadas aos resultados observados.

A avaliação poderá considerar:

- erro absoluto;
- erro percentual;
- viés;
- calibração;
- cobertura;
- desempenho por horizonte;
- desempenho por grupo.

## 688. Previsões autocumpridas

Uma previsão pode alterar o comportamento e contribuir para sua própria realização.

Esse efeito deverá ser reconhecido, especialmente em:

- demanda;
- risco;
- confiança;
- mercado;
- mobilização;
- priorização.

## 689. Previsões autodestrutivas

Uma previsão poderá evitar o resultado previsto quando induz resposta preventiva.

Nesse caso, a ausência do evento não prova que a previsão era inútil.

## 690. Recomendação operacional

Uma recomendação deverá conectar:

- situação;
- objetivo;
- evidências;
- alternativas;
- restrições;
- riscos;
- ação sugerida;
- resultado esperado;
- acompanhamento.

## 691. Recomendação não é decisão

A recomendação apoia a escolha.

A decisão exige autoridade e responsabilidade.

Nenhum sistema deverá registrar uma recomendação automática como decisão humana sem manifestação legítima.

## 692. Alternativas

Toda recomendação relevante deverá apresentar, quando possível:

- alternativa principal;
- alternativas secundárias;
- opção de não agir;
- consequências;
- custos;
- riscos;
- reversibilidade;
- condições de sucesso.

## 693. Critérios de decisão

Os critérios poderão incluir:

- propósito;
- legalidade;
- segurança;
- impacto;
- urgência;
- custo;
- capacidade;
- equidade;
- sustentabilidade;
- confiança;
- continuidade.

## 694. Análise multicritério

Quando múltiplos critérios estiverem em tensão, métodos multicritério poderão apoiar a comparação.

Pesos e prioridades deverão ser transparentes e legitimamente definidos.

## 695. Restrições invioláveis

Certos limites não poderão ser compensados por ganhos em outras dimensões.

Entre eles poderão estar:

- dignidade;
- direitos;
- segurança mínima;
- legalidade;
- integridade;
- autoridade legítima;
- proteção da vida.

## 696. Reversibilidade

Alternativas reversíveis poderão ser preferidas quando houver grande incerteza.

A decisão deverá declarar:

- como reverter;
- até quando;
- qual custo;
- quais evidências indicam reversão;
- quem possui autoridade.

## 697. Valor da informação

Antes de buscar mais dados, deverá ser avaliado se a nova informação poderá alterar a decisão.

Coletas adicionais que não influenciem escolhas podem apenas atrasar a resposta.

## 698. Decisão sob incerteza

A ausência de certeza não elimina a necessidade de decidir.

A decisão deverá registrar:

- o que é conhecido;
- o que é desconhecido;
- hipóteses;
- riscos;
- alternativas;
- precauções;
- responsável;
- revisão prevista.

## 699. Acompanhamento da decisão

Toda decisão relevante deverá possuir indicadores para verificar:

- execução;
- efeitos;
- desvios;
- consequências adversas;
- necessidade de adaptação;
- resultado;
- aprendizado.

## 700. Síntese do quarto lote

A inteligência operacional da Plataforma UNO deverá transformar dados, sinais, conhecimento e experiência em compreensão responsável.

Ela combinará:

- análises descritivas;
- diagnósticos;
- inferências;
- previsões;
- cenários;
- simulações;
- conhecimento humano;
- inteligência artificial;
- princípios;
- normas;
- responsabilidade.

Nenhum modelo será tratado como a própria realidade.

Nenhuma previsão será apresentada como destino inevitável.

Nenhuma recomendação será confundida com decisão.

A inteligência operacional existirá para ampliar o discernimento institucional, permitindo que pessoas, organizações e agentes compreendam melhor a realidade, avaliem alternativas e decidam com propósito, proporcionalidade, legitimidade e consciência das consequências.

---

# Lote 5 — Governança de Métricas, Catálogo, Qualidade, Auditoria, Relatórios, Prestação de Contas e Evolução Analítica

## 701. Da inteligência à governança

A capacidade de medir, analisar, prever e recomendar somente será legítima quando submetida a governança.

A governança deverá assegurar que a inteligência operacional seja:

- orientada ao propósito;
- tecnicamente confiável;
- juridicamente adequada;
- eticamente responsável;
- institucionalmente legítima;
- humanamente compreensível;
- continuamente revisada.

## 702. Governança de métricas

A governança de métricas estabelece responsabilidades, critérios e controles para o ciclo de vida das medições.

Ela deverá abranger:

- proposição;
- definição;
- aprovação;
- implementação;
- uso;
- revisão;
- substituição;
- retirada;
- preservação histórica.

## 703. Autoridade sobre métricas

Nenhuma pessoa, sistema, agente ou organização poderá alterar unilateralmente uma métrica institucional fora dos limites de sua autoridade.

A alteração poderá envolver:

- fórmula;
- fonte;
- unidade;
- população;
- janela;
- meta;
- limiar;
- classificação;
- interpretação;
- visualização.

## 704. Responsabilidade distribuída

A governança não significará concentração de todas as decisões em uma única estrutura.

Responsabilidades poderão ser distribuídas entre:

- produtores;
- proprietários;
- curadores;
- consumidores;
- especialistas;
- operadores;
- auditores;
- instâncias de governança;
- organizações federadas.

## 705. Proprietário da métrica

O proprietário deverá responder pela relevância institucional da métrica.

Suas responsabilidades poderão incluir:

- justificar sua existência;
- definir seu propósito;
- relacioná-la a objetivos;
- aprovar mudanças;
- garantir interpretação;
- coordenar revisões;
- responder por seu uso.

## 706. Custodiante técnico

O custodiante técnico deverá garantir:

- implementação;
- disponibilidade;
- integridade;
- processamento;
- desempenho;
- segurança;
- versionamento;
- recuperação;
- observabilidade.

## 707. Curador semântico

O curador semântico deverá preservar:

- definição;
- nomenclatura;
- unidade;
- relações;
- contexto;
- compatibilidade;
- documentação;
- qualidade conceitual.

## 708. Produtor de dados

O produtor é responsável por gerar ou disponibilizar dados segundo contratos definidos.

Ele deverá informar:

- origem;
- método;
- atualização;
- limitações;
- qualidade;
- mudanças;
- falhas conhecidas;
- condições de uso.

## 709. Consumidor de métricas

O consumidor deverá utilizar a métrica conforme:

- finalidade;
- contexto;
- nível de confiança;
- restrições;
- atualização;
- escopo;
- interpretação autorizada.

## 710. Conselho de métricas

A Plataforma UNO poderá estabelecer conselho responsável por métricas críticas, com participação proporcional de:

- operação;
- tecnologia;
- dados;
- governança;
- jurídico;
- segurança;
- áreas finalísticas;
- comunidades afetadas;
- especialistas;
- curadoria institucional.

## 711. Competências do conselho

O conselho poderá:

- aprovar KPIs críticas;
- resolver conflitos;
- revisar metas;
- validar índices compostos;
- avaliar efeitos adversos;
- autorizar mudanças semânticas;
- determinar retirada;
- proteger coerência arquitetural.

## 712. Política de métricas

A política deverá estabelecer:

- princípios;
- papéis;
- classificações;
- padrões;
- qualidade mínima;
- segurança;
- revisão;
- auditoria;
- transparência;
- contestação;
- retenção.

## 713. Padrão de definição

Toda métrica deverá possuir definição padronizada contendo, no mínimo:

- nome;
- descrição;
- propósito;
- fórmula;
- unidade;
- fonte;
- frequência;
- proprietário;
- escopo;
- limitações;
- versão;
- data de vigência.

## 714. Nome canônico

Cada métrica deverá possuir nome canônico único no domínio correspondente.

Apelidos e traduções poderão existir, mas deverão apontar para a mesma identidade semântica.

## 715. Identificador persistente

Métricas relevantes deverão possuir identificador persistente, independente de mudanças de nome ou localização.

## 716. Descrição funcional

A descrição deverá explicar, em linguagem compreensível:

- o que a métrica representa;
- por que existe;
- como deve ser interpretada;
- o que não representa;
- quais decisões apoia.

## 717. Fórmula formal

A fórmula deverá declarar:

- operadores;
- numerador;
- denominador;
- filtros;
- agregações;
- tratamento de ausências;
- arredondamento;
- janela;
- unidade;
- exceções.

## 718. Fórmula executável

Quando possível, a definição formal deverá ser acompanhada de implementação executável e versionada.

A documentação e o cálculo real deverão permanecer coerentes.

## 719. Fonte oficial

A fonte oficial deverá ser identificada para evitar múltiplas versões conflitantes da mesma métrica.

## 720. Fontes alternativas

Fontes alternativas poderão apoiar contingência ou validação.

Elas deverão possuir:

- prioridade;
- compatibilidade;
- método de reconciliação;
- diferença conhecida;
- condições de ativação.

## 721. Frequência de atualização

A frequência deverá representar a necessidade real.

Uma métrica poderá ser atualizada:

- por evento;
- continuamente;
- em micro-lotes;
- diariamente;
- por fechamento;
- por ciclo;
- sob demanda.

## 722. Latência da métrica

A latência mede quanto tempo decorre entre o acontecimento e a disponibilização da medição.

A interface deverá distinguir o tempo da realidade do tempo da atualização.

## 723. Frescor dos dados

O frescor deverá indicar quão recente é a informação em relação à expectativa de atualização.

## 724. Métrica vencida

Uma métrica deverá ser marcada como vencida quando ultrapassar sua tolerância de atualização.

Não deverá continuar sendo exibida como se representasse o estado presente.

## 725. Escopo da métrica

O escopo deverá declarar:

- serviços;
- organizações;
- regiões;
- populações;
- versões;
- ambientes;
- períodos;
- condições incluídas;
- exclusões.

## 726. Dimensões autorizadas

As dimensões disponíveis para segmentação deverão ser documentadas e protegidas conforme sensibilidade e finalidade.

## 727. Granularidade mínima

A granularidade deverá equilibrar:

- compreensão;
- custo;
- privacidade;
- segurança;
- risco de identificação;
- necessidade operacional;
- capacidade analítica.

## 728. Agregação oficial

A métrica deverá declarar como valores elementares são agregados.

A soma, média, mediana, máximo, mínimo ou percentil produzem interpretações diferentes.

## 729. Hierarquias de agregação

Hierarquias poderão organizar:

- pessoa;
- equipe;
- serviço;
- organização;
- território;
- cidade;
- estado;
- país;
- ecossistema.

As agregações deverão respeitar compatibilidade e autoridade.

## 730. Catálogo de métricas

O catálogo será a fonte oficial para descoberta, compreensão e governança das métricas.

Ele deverá permitir localizar:

- métricas;
- indicadores;
- KPIs;
- KRIs;
- SLIs;
- SLOs;
- metas;
- relações;
- proprietários;
- fontes.

## 731. Catálogo como memória institucional

O catálogo preservará não apenas definições vigentes, mas também:

- versões anteriores;
- justificativas;
- decisões;
- mudanças;
- substituições;
- incidentes;
- aprendizados;
- interpretações históricas.

## 732. Pesquisa no catálogo

O catálogo deverá permitir pesquisa por:

- nome;
- conceito;
- domínio;
- objetivo;
- responsável;
- fonte;
- serviço;
- Missão;
- organização;
- classificação;
- status.

## 733. Relações no catálogo

O catálogo deverá representar relações entre:

- objetivo e KPI;
- KPI e métrica;
- métrica e fonte;
- SLI e SLO;
- risco e KRI;
- serviço e indicador;
- decisão e evidência;
- painel e conjunto de métricas.

## 734. Linhagem da métrica

A linhagem deverá mostrar o percurso desde a origem até o consumo.

Poderá incluir:

- sistema produtor;
- extração;
- transformação;
- validação;
- agregação;
- armazenamento;
- publicação;
- painel;
- relatório;
- decisão.

## 735. Grafo de métricas

As relações poderão formar um grafo que permita compreender dependências semânticas e técnicas.

Uma mudança em uma fonte deverá revelar quais:

- métricas;
- painéis;
- relatórios;
- modelos;
- decisões;
- organizações

podem ser afetados.

## 736. Status da métrica

Uma métrica poderá possuir status como:

- proposta;
- experimental;
- homologada;
- vigente;
- degradada;
- suspensa;
- obsoleta;
- substituída;
- encerrada.

## 737. Métrica experimental

Uma métrica experimental poderá ser utilizada para aprendizagem, mas deverá ser identificada e limitada quanto a decisões críticas.

## 738. Homologação

A homologação deverá confirmar:

- definição;
- fonte;
- cálculo;
- qualidade;
- segurança;
- responsabilidade;
- interpretação;
- utilidade;
- conformidade;
- documentação.

## 739. Vigência

Toda definição deverá informar:

- início de vigência;
- versão;
- autoridade aprovadora;
- condições;
- data de revisão;
- substituições relacionadas.

## 740. Descontinuação

A descontinuação deverá ser planejada para evitar:

- perda de séries;
- quebra de relatórios;
- decisões sem referência;
- incompatibilidade;
- apagamento histórico;
- consumidores desconhecidos.

## 741. Compatibilidade semântica

Duas versões serão semanticamente compatíveis quando preservarem significado suficiente para comparação legítima.

## 742. Mudança incompatível

Mudanças de:

- população;
- fórmula;
- denominador;
- fonte;
- unidade;
- regra de exclusão;
- interpretação

poderão tornar séries incomparáveis.

## 743. Ponte entre versões

Quando possível, deverá ser criada uma ponte que permita:

- recalcular períodos anteriores;
- manter séries paralelas;
- documentar ruptura;
- estimar diferenças;
- comunicar limitações.

## 744. Registro de mudança

Toda mudança deverá registrar:

- o que mudou;
- por que;
- quem decidiu;
- quando;
- impacto;
- consumidores afetados;
- estratégia de transição;
- possibilidade de reversão.

## 745. Qualidade de dados

Qualidade é a adequação dos dados ao uso pretendido.

Ela não será atributo absoluto e deverá ser avaliada no contexto da decisão.

## 746. Dimensões da qualidade

A qualidade poderá compreender:

- completude;
- precisão;
- consistência;
- atualidade;
- validade;
- unicidade;
- integridade;
- cobertura;
- rastreabilidade;
- acessibilidade controlada.

## 747. Completude

Completude representa a presença dos dados necessários.

Ela deverá diferenciar:

- campo obrigatório ausente;
- informação não aplicável;
- valor desconhecido;
- dado ainda não recebido;
- dado não coletado;
- dado removido legitimamente.

## 748. Precisão

Precisão representa o grau de proximidade entre o dado registrado e a realidade que pretende representar.

## 749. Exatidão e precisão

Uma medição pode ser consistente sem estar correta.

A arquitetura deverá distinguir repetibilidade de aderência à realidade.

## 750. Consistência

Consistência avalia se dados relacionados permanecem compatíveis entre:

- sistemas;
- períodos;
- fontes;
- registros;
- regras;
- agregações;
- organizações.

## 751. Validade

Validade verifica se o dado atende ao formato, domínio e regra esperados.

Um dado formalmente válido ainda poderá estar semanticamente incorreto.

## 752. Unicidade

Unicidade verifica se a mesma entidade ou evento não está indevidamente representado múltiplas vezes.

## 753. Integridade referencial

Relações entre registros deverão permanecer válidas e rastreáveis.

## 754. Cobertura

Cobertura avalia a parcela da realidade que o sistema consegue observar.

Baixa cobertura deverá limitar inferências e comparações.

## 755. Atualidade

Atualidade verifica se a informação continua adequada à realidade presente.

## 756. Pontualidade

Pontualidade verifica se a informação foi entregue dentro do prazo necessário ao uso.

## 757. Confiabilidade

Confiabilidade combina evidências sobre:

- origem;
- qualidade;
- estabilidade;
- integridade;
- validação;
- continuidade;
- histórico;
- governança.

## 758. Regras de qualidade

Regras poderão verificar:

- tipos;
- intervalos;
- relações;
- duplicidades;
- padrões;
- sequências;
- consistência temporal;
- obrigatoriedade;
- compatibilidade semântica.

## 759. Qualidade na entrada

Erros deverão ser detectados o mais próximo possível de sua origem.

Isso reduz propagação, retrabalho e conclusões inadequadas.

## 760. Qualidade durante a transformação

Cada transformação deverá preservar ou declarar mudanças em:

- significado;
- precisão;
- granularidade;
- cobertura;
- unidade;
- confiança;
- sensibilidade.

## 761. Qualidade na saída

Produtos analíticos deverão ser validados antes de orientar decisões.

## 762. Score de qualidade

Pontuações compostas de qualidade poderão ser utilizadas, mas as dimensões individuais deverão permanecer visíveis.

Uma média não deverá ocultar falha crítica.

## 763. Limites de qualidade

Cada uso poderá exigir nível diferente de qualidade.

Dados adequados para exploração podem ser inadequados para:

- decisão automatizada;
- obrigação legal;
- prestação de contas;
- resposta emergencial;
- avaliação individual.

## 764. Incidente de dados

Um incidente de dados poderá envolver:

- perda;
- corrupção;
- atraso;
- duplicidade;
- vazamento;
- alteração indevida;
- indisponibilidade;
- erro semântico;
- cálculo incorreto;
- uso incompatível.

## 765. Impacto do incidente de dados

O impacto deverá considerar:

- métricas afetadas;
- decisões;
- relatórios;
- pessoas;
- organizações;
- períodos;
- modelos;
- obrigações;
- confiança.

## 766. Quarentena de dados

Dados suspeitos poderão ser colocados em quarentena até validação.

A quarentena deverá impedir propagação sem destruir a evidência original.

## 767. Correção de dados

A correção deverá preservar:

- valor anterior;
- valor novo;
- motivo;
- autor;
- horário;
- origem;
- impacto;
- reprocessamento;
- comunicação.

## 768. Reprocessamento

Quando uma correção afetar derivados, deverá ser possível identificar e reprocessar:

- métricas;
- painéis;
- relatórios;
- modelos;
- decisões pendentes;
- séries históricas.

## 769. Comunicação de erro

Erros relevantes deverão ser comunicados aos consumidores afetados.

A comunicação deverá explicar:

- problema;
- período;
- impacto;
- correção;
- limitações;
- providências;
- responsável.

## 770. Auditoria de métricas

A auditoria deverá verificar se a métrica:

- corresponde à definição;
- utiliza fontes autorizadas;
- calcula corretamente;
- preserva linhagem;
- aplica controles;
- informa limitações;
- sustenta seu uso.

## 771. Auditoria técnica

A auditoria técnica poderá revisar:

- código;
- consultas;
- pipelines;
- configurações;
- permissões;
- logs;
- versões;
- testes;
- infraestrutura.

## 772. Auditoria semântica

A auditoria semântica verificará se o cálculo representa corretamente o conceito declarado.

## 773. Auditoria institucional

A auditoria institucional verificará se o uso da métrica respeita:

- propósito;
- autoridade;
- políticas;
- normas;
- responsabilidades;
- direitos;
- compromissos.

## 774. Auditoria independente

Métricas críticas poderão exigir avaliação por parte suficientemente independente de sua produção e uso.

## 775. Evidências de auditoria

Evidências poderão incluir:

- definições;
- aprovações;
- código;
- amostras;
- resultados;
- logs;
- testes;
- versões;
- comunicações;
- decisões.

## 776. Trilha de auditoria

A trilha deverá permitir reconstruir o ciclo completo da métrica sem depender exclusivamente da memória de indivíduos.

## 777. Plano de auditoria

O plano deverá priorizar métricas conforme:

- criticidade;
- risco;
- impacto;
- complexidade;
- mudança;
- histórico de falhas;
- obrigação;
- volume de decisões.

## 778. Frequência de auditoria

A frequência poderá ser:

- contínua;
- periódica;
- por mudança;
- por incidente;
- por solicitação;
- por obrigação;
- por risco.

## 779. Achados

Achados deverão ser classificados por:

- natureza;
- criticidade;
- escopo;
- impacto;
- causa;
- prazo;
- responsável;
- risco residual.

## 780. Plano de correção

O plano deverá indicar:

- ação;
- responsável;
- prioridade;
- prazo;
- dependências;
- evidências esperadas;
- verificação;
- critério de encerramento.

## 781. Auditoria não punitiva por padrão

A auditoria deverá priorizar:

- proteção;
- correção;
- aprendizagem;
- fortalecimento;
- prevenção;
- responsabilidade sistêmica.

Isso não elimina responsabilização diante de dolo, fraude ou negligência comprovada.

## 782. Fraude métrica

Fraude métrica ocorre quando há manipulação intencional de:

- dados;
- fórmulas;
- exclusões;
- metas;
- períodos;
- classificações;
- apresentações;
- interpretações

para produzir conclusão enganosa.

## 783. Sinais de manipulação

Sinais poderão incluir:

- mudanças próximas ao fechamento;
- exclusões sem justificativa;
- valores excessivamente regulares;
- rupturas inexplicadas;
- divergência entre fontes;
- concentração de ajustes;
- metas sempre atingidas por margem mínima.

## 784. Segregação de funções

Sempre que proporcional, deverão ser separadas as funções de:

- produzir;
- aprovar;
- alterar;
- publicar;
- auditar;
- utilizar para recompensa;
- corrigir.

## 785. Conflito de interesses

Conflitos deverão ser declarados quando a pessoa ou organização responsável pela métrica também for diretamente beneficiada por seu resultado.

## 786. Incentivos vinculados a KPIs

Remuneração, reconhecimento ou sanção baseados em KPIs exigirão proteção especial contra:

- gaming;
- simplificação;
- competição destrutiva;
- ocultação;
- transferência de risco;
- prejuízo à qualidade;
- discriminação.

## 787. Avaliação multidimensional

Nenhuma pessoa, equipe ou organização deverá ser avaliada exclusivamente por uma única KPI.

## 788. Direito ao contexto

Avaliações deverão permitir registrar:

- condições;
- restrições;
- dependências;
- eventos extraordinários;
- decisões recebidas;
- recursos disponíveis;
- riscos assumidos;
- contribuições qualitativas.

## 789. Relatórios operacionais

Relatórios deverão transformar dados em narrativa estruturada para compreensão e decisão.

## 790. Relatório não é depósito de gráficos

Todo relatório deverá responder:

- qual realidade foi analisada;
- o que foi observado;
- por que importa;
- quais limitações existem;
- quais decisões são necessárias;
- quais ações estão em curso.

## 791. Tipos de relatório

Poderão existir relatórios:

- operacionais;
- executivos;
- estratégicos;
- institucionais;
- técnicos;
- públicos;
- regulatórios;
- de auditoria;
- de incidente;
- de aprendizagem.

## 792. Relatório operacional diário

O relatório diário poderá apresentar:

- estado;
- eventos;
- desvios;
- incidentes;
- capacidade;
- filas;
- riscos;
- ações;
- pendências;
- handover.

## 793. Relatório semanal

O relatório semanal poderá destacar:

- tendências;
- recorrências;
- resultados;
- mudanças;
- riscos emergentes;
- consumo de capacidade;
- qualidade;
- aprendizados;
- prioridades seguintes.

## 794. Relatório mensal

O relatório mensal poderá consolidar:

- KPIs;
- SLOs;
- custos;
- resultados;
- confiabilidade;
- segurança;
- conformidade;
- pessoas;
- evolução;
- decisões necessárias.

## 795. Relatório de Missão

Cada Missão poderá possuir relatório sobre:

- necessidade;
- propósito;
- contexto;
- recursos;
- decisões;
- execução;
- resultados;
- impactos;
- aprendizagem;
- continuidade.

## 796. Relatório de exceção

O relatório de exceção deverá destacar situações fora das condições esperadas.

Ele não deverá substituir a visão normal da operação.

## 797. Relatório regulatório

Relatórios regulatórios deverão seguir:

- formato;
- conteúdo;
- prazo;
- evidência;
- autoridade;
- retenção;
- assinatura;
- canal

exigidos pela norma aplicável.

## 798. Relatório público

Relatórios públicos deverão ser compreensíveis e úteis sem expor:

- dados pessoais;
- segredos;
- vulnerabilidades;
- investigações protegidas;
- informações sem contexto.

## 799. Relatório executivo

O relatório executivo deverá sintetizar:

- situação;
- impacto;
- riscos;
- resultados;
- decisões;
- recursos;
- tendências;
- recomendações.

A síntese não deverá apagar incertezas críticas.

## 800. Relatório técnico

O relatório técnico deverá permitir análise aprofundada por profissionais competentes.

Poderá incluir:

- métodos;
- arquitetura;
- dados;
- cálculos;
- testes;
- erros;
- evidências;
- limitações;
- código relacionado.

## 801. Relatório narrativo

Narrativas operacionais deverão conectar eventos e indicadores de forma rastreável.

Nenhuma narrativa poderá apresentar inferência como fato confirmado.

## 802. Geração automática de relatórios

A automação poderá:

- reunir dados;
- calcular indicadores;
- produzir rascunhos;
- destacar desvios;
- comparar períodos;
- sugerir explicações;
- formatar documentos.

## 803. Revisão humana de relatórios

Relatórios de impacto relevante deverão possuir revisão humana antes de publicação ou decisão, especialmente quando contiverem:

- interpretações;
- atribuições;
- recomendações;
- dados sensíveis;
- conclusões causais;
- avaliações de pessoas.

## 804. IA na geração de narrativas

A IA poderá apoiar a tradução de métricas em linguagem compreensível.

Ela deverá:

- citar evidências;
- marcar incerteza;
- evitar invenções;
- preservar unidades;
- respeitar permissões;
- diferenciar fato e hipótese;
- permitir revisão.

## 805. Relatório vivo

Um relatório vivo poderá atualizar-se continuamente, preservando:

- versões;
- fechamentos;
- mudanças;
- responsáveis;
- estado dos dados;
- momento da consulta.

## 806. Fechamento de período

O fechamento deverá estabelecer uma versão estável das métricas para prestação de contas.

Correções posteriores deverão ser registradas como revisões.

## 807. Dados preliminares

Dados preliminares deverão ser marcados para evitar interpretação como resultado final.

## 808. Dados consolidados

Dados consolidados deverão atender aos critérios de validação e fechamento definidos.

## 809. Revisão de resultados publicados

Quando resultados publicados forem corrigidos, deverá haver comunicação clara sobre:

- versão anterior;
- correção;
- motivo;
- impacto;
- nova interpretação;
- data;
- responsável.

## 810. Prestação de contas

Prestação de contas significa explicar:

- o que foi feito;
- por quem;
- com qual autoridade;
- com quais recursos;
- por qual motivo;
- com quais resultados;
- com quais consequências.

## 811. Accountability

Responsabilidade institucional deverá integrar:

- atribuição;
- evidência;
- explicação;
- possibilidade de revisão;
- correção;
- consequência;
- aprendizagem.

## 812. Transparência ativa

A Plataforma UNO deverá disponibilizar proativamente informações relevantes quando houver obrigação, interesse público ou compromisso institucional.

## 813. Transparência sob demanda

Solicitações de informação deverão ser tratadas conforme:

- legitimidade;
- prazo;
- competência;
- classificação;
- privacidade;
- segurança;
- legislação aplicável.

## 814. Transparência proporcional

Transparência não significa exposição irrestrita.

Ela deverá equilibrar:

- interesse público;
- direito à informação;
- privacidade;
- segurança;
- proteção de terceiros;
- sigilo legítimo;
- integridade das operações.

## 815. Explicação de indicadores ao público

Indicadores públicos deverão apresentar:

- definição;
- fonte;
- período;
- método;
- limitações;
- atualidade;
- forma de contato;
- possibilidade de correção.

## 816. Dados abertos

Dados poderão ser publicados de forma aberta quando:

- houver finalidade legítima;
- não houver restrição;
- a privacidade estiver protegida;
- a documentação estiver disponível;
- a qualidade for adequada;
- o risco for avaliado.

## 817. Risco de reidentificação

Mesmo dados aparentemente anonimizados podem permitir reidentificação quando combinados com outras fontes.

A publicação deverá considerar esse risco.

## 818. Privacidade diferencial e outras proteções

Métodos de proteção estatística poderão ser aplicados quando adequados.

Seu uso deverá equilibrar:

- privacidade;
- utilidade;
- transparência;
- precisão;
- risco;
- compreensão.

## 819. Supressão estatística

Valores poderão ser suprimidos quando grupos pequenos ou combinações permitirem identificação indevida.

## 820. Contestação de métricas

Pessoas e organizações deverão poder contestar métricas que:

- estejam incorretas;
- usem dados inadequados;
- produzam avaliação injusta;
- estejam fora de contexto;
- violem regras;
- afetem direitos;
- apresentem interpretações enganosas.

## 821. Canal de contestação

O canal deverá registrar:

- contestante;
- métrica;
- motivo;
- evidência;
- impacto alegado;
- prazo;
- responsável pela análise;
- decisão;
- correção.

## 822. Revisão independente da contestação

Quando a métrica afetar direitos, recursos, acesso ou reputação, a revisão deverá possuir independência proporcional.

## 823. Métrica corrigível

A arquitetura deverá permitir correção sem apagar o histórico de que o erro ocorreu.

## 824. Direito de resposta

Quando uma métrica pública produzir avaliação indevida de pessoa ou organização, poderá ser necessário garantir resposta, contextualização e correção.

## 825. Ética da mensuração

Medir é escolher o que torna visível.

Toda escolha de mensuração também pode tornar outras realidades invisíveis.

## 826. Dignidade

Nenhuma métrica deverá reduzir a dignidade de pessoas ao tratá-las apenas como:

- custo;
- risco;
- produção;
- problema;
- número;
- objeto de vigilância;
- variável de otimização.

## 827. Finalidade legítima

Toda medição de pessoas deverá responder a uma finalidade legítima, necessária e proporcional.

## 828. Minimização

Somente deverão ser coletados dados necessários ao propósito declarado.

## 829. Não discriminação

Métricas e modelos deverão ser avaliados quanto a impactos desiguais e discriminação direta ou indireta.

## 830. Equidade

Equidade não significa apresentar o mesmo tratamento em situações materialmente diferentes.

Indicadores deverão permitir compreender necessidades específicas sem criar estigmas.

## 831. Acessibilidade

Pessoas com diferentes capacidades deverão conseguir:

- compreender;
- acessar;
- contestar;
- utilizar;
- contribuir;
- receber explicações.

## 832. Autonomia informacional

Pessoas deverão conhecer, conforme aplicável:

- quais dados são utilizados;
- por qual finalidade;
- com quem são compartilhados;
- por quanto tempo;
- quais decisões influenciam;
- quais direitos possuem.

## 833. Consentimento

Quando o consentimento for a base apropriada, deverá ser:

- livre;
- informado;
- específico;
- inequívoco;
- revogável;
- registrável.

Consentimento não deverá ser utilizado para legitimar relações coercitivas.

## 834. Base legal e normativa

O tratamento de dados e a produção de indicadores deverão observar as bases legais, normas, regulamentações e obrigações aplicáveis.

## 835. Legislação desde o desenho

A Plataforma UNO não deverá construir mecanismos para depois tentar enquadrá-los juridicamente.

Leis, normas técnicas, NRs, regulamentos e direitos deverão orientar:

- requisitos;
- limites;
- fluxos;
- responsabilidades;
- evidências;
- controles;
- interfaces.

## 836. Avaliação de impacto

Métricas, modelos ou painéis de alto impacto deverão passar por avaliação que considere:

- finalidade;
- necessidade;
- proporcionalidade;
- riscos;
- grupos afetados;
- segurança;
- direitos;
- vieses;
- mitigação;
- supervisão.

## 837. Impacto algorítmico

Sistemas analíticos e algoritmos deverão ser avaliados quanto a:

- decisões influenciadas;
- autonomia;
- opacidade;
- discriminação;
- escala;
- reversibilidade;
- contestação;
- dependência;
- responsabilidade.

## 838. Classificação de risco analítico

Produtos analíticos poderão ser classificados como:

- baixo risco;
- moderado;
- elevado;
- crítico;
- proibido em determinado contexto.

## 839. Uso proibido

A governança deverá proibir usos incompatíveis com:

- dignidade;
- direitos;
- legalidade;
- finalidade;
- segurança;
- ética;
- princípios permanentes da UNO.

## 840. Segurança analítica

Ambientes analíticos deverão proteger:

- dados;
- modelos;
- consultas;
- relatórios;
- credenciais;
- resultados;
- evidências;
- propriedade intelectual;
- informações institucionais.

## 841. Controle de acesso

O acesso deverá seguir:

- menor privilégio;
- necessidade de saber;
- segregação;
- temporalidade;
- revisão;
- rastreabilidade;
- revogação.

## 842. Acesso emergencial

Acesso extraordinário deverá ser:

- justificado;
- temporário;
- monitorado;
- registrado;
- revisado;
- revogado ao final da necessidade.

## 843. Ambientes separados

Deverão existir separações adequadas entre:

- desenvolvimento;
- experimentação;
- homologação;
- produção;
- auditoria;
- simulação;
- dados sensíveis.

## 844. Mascaramento de dados

Dados poderão ser mascarados para reduzir exposição em ambientes que não exigem valores reais.

## 845. Dados sintéticos

Dados sintéticos poderão apoiar:

- testes;
- desenvolvimento;
- treinamento;
- demonstrações;
- simulações.

Eles deverão ser identificados e avaliados quanto à capacidade de representar condições relevantes.

## 846. Exportação de métricas

Exportações deverão possuir:

- autorização;
- finalidade;
- formato;
- classificação;
- rastreabilidade;
- prazo;
- proteção;
- descarte.

## 847. Compartilhamento entre organizações

O compartilhamento deverá ser governado por contratos que estabeleçam:

- propósito;
- campos;
- responsabilidades;
- segurança;
- qualidade;
- temporalidade;
- correção;
- auditoria;
- encerramento.

## 848. Métricas federadas

Organizações poderão produzir métricas localmente e compartilhar apenas agregações necessárias.

Isso poderá preservar:

- autonomia;
- privacidade;
- soberania;
- eficiência;
- limites institucionais.

## 849. Padronização federada

Para permitir comparação, deverão ser padronizados:

- conceitos;
- unidades;
- fórmulas;
- períodos;
- classificações;
- qualidade;
- metadados;
- versões.

## 850. Comparabilidade entre organizações

Comparações deverão considerar diferenças de:

- contexto;
- porte;
- população;
- recursos;
- complexidade;
- obrigações;
- maturidade;
- território;
- risco.

## 851. Ranking

Rankings deverão ser evitados quando simplificarem realidades complexas ou incentivarem comportamentos prejudiciais.

Quando utilizados, deverão possuir:

- finalidade;
- método;
- contexto;
- limites;
- direito de contestação;
- indicadores de equilíbrio.

## 852. Benchmarking

Benchmarking deverá servir à aprendizagem, não à humilhação ou competição destrutiva.

## 853. Comunidades de prática

Pessoas e organizações poderão compartilhar:

- definições;
- experiências;
- erros;
- boas práticas;
- modelos;
- métodos;
- padrões;
- aprendizados.

## 854. Alfabetização de dados

A Plataforma UNO deverá desenvolver capacidade para que diferentes públicos compreendam:

- métricas;
- gráficos;
- incerteza;
- comparações;
- riscos;
- limitações;
- causalidade;
- decisões apoiadas por dados.

## 855. Formação de operadores

Operadores deverão ser capacitados para:

- interpretar painéis;
- reconhecer dados vencidos;
- validar alertas;
- registrar contexto;
- questionar resultados;
- preservar evidências;
- comunicar incertezas.

## 856. Formação de gestores

Gestores deverão compreender:

- limitações das KPIs;
- efeitos de incentivos;
- riscos de metas;
- diferenças entre correlação e causalidade;
- qualidade;
- incerteza;
- responsabilidade decisória.

## 857. Formação de diretores

Diretores deverão ser capazes de avaliar:

- equilíbrio institucional;
- resultados;
- risco;
- sustentabilidade;
- impactos;
- governança;
- coerência com o propósito;
- consequências de longo prazo.

## 858. Formação de curadores

Curadores deverão proteger:

- significado;
- princípios;
- continuidade;
- memória;
- coerência;
- legitimidade;
- evolução responsável.

## 859. Linguagem clara

A comunicação de métricas deverá evitar complexidade desnecessária.

Termos técnicos poderão ser utilizados quando necessários, acompanhados de explicação adequada ao público.

## 860. Glossário

O glossário institucional deverá definir conceitos como:

- métrica;
- indicador;
- KPI;
- KRI;
- SLI;
- SLO;
- SLA;
- meta;
- resultado;
- impacto;
- confiança;
- risco.

## 861. Coerência terminológica

O mesmo termo não deverá possuir significados conflitantes entre volumes, serviços ou organizações sem diferenciação explícita.

## 862. Revisão periódica da governança

A governança deverá ser revisada diante de:

- evolução da plataforma;
- mudanças legais;
- novas tecnologias;
- incidentes;
- expansão;
- federação;
- novos riscos;
- aprendizados.

## 863. Maturidade da mensuração

A maturidade poderá evoluir de:

1. medições isoladas;
2. definições padronizadas;
3. indicadores governados;
4. inteligência integrada;
5. previsão responsável;
6. aprendizagem institucional;
7. adaptação consciente.

## 864. Maturidade não é quantidade

Uma organização não será madura por possuir milhares de métricas.

Será madura quando conseguir:

- selecionar;
- compreender;
- confiar;
- decidir;
- corrigir;
- aprender;
- preservar propósito.

## 865. Dívida métrica

Dívida métrica surge quando existem:

- indicadores sem dono;
- fórmulas duplicadas;
- fontes frágeis;
- painéis abandonados;
- séries incompatíveis;
- metas obsoletas;
- documentação ausente;
- alertas inúteis.

## 866. Gestão da dívida métrica

A dívida deverá ser:

- identificada;
- classificada;
- priorizada;
- corrigida;
- acompanhada;
- prevenida.

## 867. Custo da mensuração

Toda métrica possui custo de:

- coleta;
- transmissão;
- armazenamento;
- processamento;
- validação;
- proteção;
- interpretação;
- manutenção;
- auditoria.

## 868. Retorno da mensuração

Uma métrica deverá justificar seu custo por sua contribuição para:

- compreensão;
- segurança;
- qualidade;
- decisão;
- continuidade;
- conformidade;
- aprendizagem;
- valor.

## 869. Métrica sem uso

Métricas não utilizadas deverão ser investigadas.

Elas poderão ser:

- retiradas;
- simplificadas;
- agregadas;
- preservadas apenas historicamente;
- substituídas;
- reativadas sob condição.

## 870. Painel sem público

Todo painel deverá possuir público e propósito definidos.

Painéis sem uso conhecido deverão ser revisados.

## 871. Relatório sem decisão

Relatórios repetidamente produzidos sem gerar compreensão ou ação deverão ser redesenhados ou encerrados.

## 872. Aprendizagem da governança

Incidentes, auditorias, contestações e erros deverão alimentar a evolução das políticas de métricas.

## 873. Memória da mensuração

A Plataforma UNO deverá preservar a história de como aprendeu a medir.

Essa memória incluirá:

- conceitos anteriores;
- erros;
- correções;
- conflitos;
- decisões;
- mudanças;
- resultados;
- motivos de evolução.

## 874. Princípio da mensuração governada

Nenhuma métrica será considerada legítima apenas porque pode ser calculada.

Ela deverá possuir:

- propósito;
- responsabilidade;
- significado;
- qualidade;
- proporcionalidade;
- proteção;
- possibilidade de revisão;
- utilidade para o ecossistema.

## 875. Síntese do quinto lote

A governança de métricas impedirá que a Plataforma UNO seja conduzida por números sem significado, análises sem responsabilidade ou painéis sem propósito.

O catálogo, a linhagem, a qualidade, a auditoria, os relatórios e a prestação de contas formarão uma estrutura permanente para garantir que toda medição relevante possa ser:

- compreendida;
- verificada;
- contestada;
- corrigida;
- contextualizada;
- protegida;
- relacionada a decisões;
- preservada na memória institucional.

A Plataforma UNO não utilizará métricas para substituir a realidade.

Utilizará métricas para servir à compreensão da realidade, reconhecendo que medir também é exercer responsabilidade sobre aquilo que se torna visível, aquilo que permanece oculto e aquilo que poderá orientar decisões capazes de transformar vidas, organizações e comunidades.

---

# Lote 6 — Modelo Integrado de Inteligência Operacional, Implementação, Invariantes, Garantias e Encerramento

## 876. Propósito do modelo integrado

O modelo integrado de métricas, KPIs e inteligência operacional deverá permitir que a Plataforma UNO compreenda sua própria operação sem perder de vista:

- realidade;
- propósito;
- responsabilidade;
- pessoas;
- organizações;
- contexto;
- continuidade;
- valor público;
- aprendizagem.

## 877. Inteligência como sistema vivo

A inteligência operacional não será um módulo isolado.

Ela emergirá da cooperação entre:

- percepção;
- memória;
- conhecimento;
- análise;
- governança;
- decisão;
- execução;
- avaliação;
- aprendizagem.

## 878. Estrutura do modelo

O modelo integrado será constituído por:

1. objetos observados;
2. sinais e evidências;
3. métricas;
4. indicadores;
5. KPIs e KRIs;
6. metas e níveis de serviço;
7. análises;
8. decisões;
9. ações;
10. resultados e aprendizados.

## 879. Realidade como origem

Toda inteligência deverá começar na realidade e retornar a ela.

A Plataforma UNO não poderá operar somente sobre representações internas sem verificar continuamente se elas continuam correspondendo ao mundo que pretende compreender.

## 880. Necessidades como referência

Necessidades reconhecidas deverão orientar:

- Missões;
- prioridades;
- capacidades;
- métricas;
- decisões;
- recursos;
- resultados;
- avaliações.

## 881. Missões como unidade de transformação

Missões serão unidades vivas de transformação.

Cada Missão deverá possuir inteligência suficiente para compreender:

- necessidade de origem;
- propósito;
- contexto;
- prioridade;
- recursos;
- riscos;
- execução;
- resultado;
- impacto;
- continuidade.

## 882. Capacidades como meios

Capacidades não serão avaliadas apenas por existirem.

Elas deverão ser avaliadas por sua aptidão para:

- atender necessidades;
- sustentar Missões;
- produzir resultados;
- preservar segurança;
- adaptar-se;
- recuperar-se;
- evoluir.

## 883. Serviços como compromissos

Cada serviço deverá declarar:

- quem serve;
- qual necessidade atende;
- qual valor entrega;
- qual nível preserva;
- quais dependências possui;
- como será medido;
- quem responde por ele.

## 884. Processos como fluxos observáveis

Processos deverão produzir evidências suficientes para compreender:

- entrada;
- transformação;
- decisão;
- espera;
- execução;
- controle;
- saída;
- resultado;
- exceção.

## 885. Recursos como capacidades finitas

Recursos financeiros, técnicos, materiais, cognitivos e humanos deverão ser observados como capacidades finitas que exigem distribuição responsável.

## 886. Organizações como organismos

Cada organização possuirá:

- identidade;
- propósito;
- capacidades;
- responsabilidades;
- limites;
- memória;
- relações;
- métricas;
- autonomia;
- necessidade de evolução.

## 887. Pessoas como sujeitos

Pessoas serão reconhecidas como sujeitos de direitos, escolhas, capacidades, experiências e propósitos.

Não serão tratadas apenas como:

- usuários;
- mão de obra;
- registros;
- custos;
- riscos;
- fontes de dados.

## 888. Territórios como contextos vivos

Territórios deverão ser compreendidos por suas:

- pessoas;
- relações;
- recursos;
- organizações;
- infraestrutura;
- história;
- necessidades;
- riscos;
- oportunidades;
- cultura.

## 889. Ecossistema como totalidade relacional

O ecossistema UNO será compreendido pelas relações entre suas partes.

Nenhuma KPI isolada poderá representar sua totalidade.

## 890. Camada de percepção

A camada de percepção deverá captar:

- sinais;
- eventos;
- solicitações;
- estados;
- relatos;
- evidências;
- mudanças;
- riscos;
- oportunidades.

## 891. Camada de integração

A integração deverá correlacionar informações entre:

- serviços;
- organizações;
- agentes;
- Missões;
- territórios;
- processos;
- decisões;
- períodos;
- dependências.

## 892. Camada de significado

A camada de significado deverá relacionar dados a:

- conceitos;
- propósitos;
- contextos;
- identidades;
- responsabilidades;
- regras;
- consequências.

## 893. Camada analítica

A camada analítica deverá produzir:

- descrições;
- diagnósticos;
- previsões;
- cenários;
- avaliações;
- recomendações;
- explicações;
- incertezas.

## 894. Camada decisória

A camada decisória deverá reunir:

- evidências;
- princípios;
- objetivos;
- critérios;
- alternativas;
- riscos;
- autoridade;
- responsabilidade;
- revisão.

## 895. Camada de execução

A execução deverá transformar decisões legítimas em ações:

- coordenadas;
- rastreáveis;
- proporcionais;
- seguras;
- monitoradas;
- reversíveis quando necessário.

## 896. Camada de resultado

A camada de resultado deverá verificar:

- entregas;
- efeitos;
- impactos;
- custos;
- consequências;
- qualidade;
- continuidade;
- valor produzido.

## 897. Camada de aprendizagem

A aprendizagem deverá transformar experiência em:

- conhecimento;
- padrões;
- correções;
- novas capacidades;
- políticas;
- procedimentos;
- memória;
- maturidade.

## 898. Fluxo integrado

O fluxo fundamental será:

**realidade → percepção → compreensão → decisão → ação → resultado → avaliação → aprendizagem → nova capacidade de percepção.**

## 899. Retroalimentação

Cada resultado deverá retroalimentar o sistema.

A retroalimentação poderá:

- confirmar;
- corrigir;
- recalibrar;
- prevenir;
- adaptar;
- fortalecer;
- interromper;
- substituir.

## 900. Retroalimentação positiva

Retroalimentações positivas amplificam comportamentos.

Deverão ser monitoradas para evitar:

- crescimento descontrolado;
- concentração;
- saturação;
- propagação de erro;
- desigualdade;
- instabilidade.

## 901. Retroalimentação negativa

Retroalimentações negativas ajudam a estabilizar a operação.

Entretanto, controles excessivos podem impedir:

- adaptação;
- autonomia;
- inovação;
- aprendizagem;
- resposta rápida.

## 902. Equilíbrio dinâmico

A estabilidade operacional não será imobilidade.

Será a capacidade de mudar preservando:

- identidade;
- propósito;
- responsabilidade;
- continuidade;
- legitimidade.

## 903. Saúde operacional

A saúde operacional deverá ser compreendida por múltiplas dimensões:

- propósito;
- desempenho;
- capacidade;
- qualidade;
- confiabilidade;
- segurança;
- governança;
- pessoas;
- sustentabilidade;
- aprendizagem.

## 904. Índice de saúde operacional

Um índice de saúde poderá apoiar síntese, desde que não substitua as dimensões que o compõem.

Condições críticas não poderão ser compensadas por resultados positivos em dimensões menos importantes.

## 905. Estado operacional normal

No estado normal:

- serviços cumprem seus objetivos;
- riscos permanecem controlados;
- capacidades possuem margem;
- dependências estão disponíveis;
- responsabilidades estão claras;
- aprendizagem continua ativa.

## 906. Estado de atenção

O estado de atenção deverá indicar tendências ou condições que exigem observação e prevenção.

## 907. Estado degradado

O estado degradado será reconhecido quando parte da capacidade ou qualidade estiver reduzida, ainda que funções essenciais permaneçam operacionais.

## 908. Estado de contingência

A contingência será ativada quando a operação normal não puder continuar adequadamente e capacidades alternativas precisarem ser mobilizadas.

## 909. Estado crítico

O estado crítico deverá indicar risco elevado a:

- pessoas;
- serviços essenciais;
- segurança;
- dados;
- continuidade;
- legitimidade;
- múltiplas organizações.

## 910. Estado emergencial

O estado emergencial permitirá medidas extraordinárias, temporárias e proporcionais, com:

- autoridade definida;
- escopo;
- temporalidade;
- rastreabilidade;
- revisão;
- prestação de contas.

## 911. Estado de recuperação

A recuperação deverá possuir métricas próprias sobre:

- funções restauradas;
- estabilidade;
- dados reconciliados;
- backlog;
- dependências;
- capacidade;
- riscos residuais;
- comunicação.

## 912. Retorno ao estado normal

O retorno deverá ser validado por evidências.

Não bastará desativar o alerta ou reiniciar componentes.

## 913. Modelo operacional comum

Todas as capacidades deverão compartilhar uma linguagem mínima sobre:

- estado;
- prioridade;
- risco;
- responsabilidade;
- evidência;
- resultado;
- continuidade;
- aprendizagem.

## 914. Contrato de observabilidade

Toda capacidade deverá declarar um contrato de observabilidade contendo:

- sinais;
- métricas;
- logs;
- eventos;
- rastros;
- alertas;
- retenção;
- responsabilidades;
- limitações.

## 915. Contrato de desempenho

O contrato de desempenho deverá estabelecer:

- objetivo;
- indicadores;
- metas;
- tolerâncias;
- capacidade;
- qualidade;
- riscos;
- critérios de revisão.

## 916. Contrato de responsabilidade

O contrato de responsabilidade deverá declarar:

- quem observa;
- quem interpreta;
- quem recomenda;
- quem decide;
- quem executa;
- quem valida;
- quem presta contas.

## 917. Contrato de aprendizagem

Toda operação relevante deverá definir como experiências serão:

- registradas;
- analisadas;
- compartilhadas;
- incorporadas;
- verificadas;
- preservadas.

## 918. Arquitetura mínima de métricas

A implementação inicial deverá possuir, no mínimo:

- catálogo;
- identificadores;
- definições;
- proprietários;
- fontes;
- fórmulas;
- séries;
- qualidade;
- painéis;
- alertas;
- auditoria.

## 919. Registro oficial de KPIs

As KPIs oficiais deverão permanecer em registro versionado e homologado.

Nenhum painel local poderá redefinir silenciosamente seu significado.

## 920. Registro oficial de SLOs

O registro de SLOs deverá relacionar:

- serviço;
- SLI;
- objetivo;
- janela;
- orçamento de erro;
- proprietário;
- política;
- histórico;
- estado.

## 921. Registro oficial de alertas

Cada regra de alerta deverá possuir:

- identificador;
- condição;
- severidade;
- prioridade;
- destinatário;
- ação;
- runbook;
- responsável;
- histórico;
- data de revisão.

## 922. Registro oficial de modelos

Modelos analíticos e de IA deverão possuir inventário com:

- finalidade;
- risco;
- proprietário;
- versão;
- dados;
- desempenho;
- limitações;
- decisões influenciadas;
- estado de aprovação.

## 923. Registro oficial de relatórios

Relatórios recorrentes deverão possuir:

- finalidade;
- público;
- frequência;
- fontes;
- responsável;
- revisão;
- retenção;
- decisões relacionadas.

## 924. Identidade dos objetos operacionais

Serviços, capacidades, Missões, recursos, organizações e indicadores deverão possuir identidades persistentes que permitam correlação ao longo do tempo.

## 925. Taxonomia operacional

A taxonomia deverá organizar conceitos sem impedir evolução.

Ela poderá compreender:

- domínios;
- capacidades;
- serviços;
- processos;
- eventos;
- estados;
- resultados;
- riscos;
- indicadores.

## 926. Ontologia operacional

A ontologia poderá representar significados e relações entre entidades.

Ela deverá permitir que pessoas e agentes compreendam, por exemplo, que:

- uma Missão utiliza capacidades;
- capacidades dependem de recursos;
- recursos pertencem ou são custodiados por organizações;
- resultados atendem necessidades;
- indicadores observam essas relações.

## 927. Grafo operacional

O grafo operacional deverá permitir navegação entre:

- necessidades;
- Missões;
- capacidades;
- recursos;
- decisões;
- pessoas;
- organizações;
- serviços;
- resultados;
- métricas.

## 928. Grafo de impacto

O grafo de impacto deverá ajudar a compreender:

- propagação;
- dependências;
- populações afetadas;
- serviços relacionados;
- alternativas;
- capacidades de recuperação.

## 929. Grafo de responsabilidade

O grafo de responsabilidade deverá demonstrar:

- autoridade;
- delegação;
- execução;
- validação;
- supervisão;
- prestação de contas;
- substituição;
- escalonamento.

## 930. Grafo de evidências

O grafo de evidências deverá conectar:

- fato;
- fonte;
- observação;
- análise;
- recomendação;
- decisão;
- ação;
- resultado;
- aprendizado.

## 931. Sala do Cérebro integrada

A Sala do Cérebro deverá reunir inteligência operacional sem substituir autoridades legítimas.

Ela apoiará:

- deliberação;
- cenários;
- coordenação;
- decisão crítica;
- avaliação;
- aprendizagem.

## 932. Painel Zero

O Painel Zero deverá apresentar visão institucional de alto nível sobre:

- saúde;
- Missões;
- riscos;
- capacidades;
- incidentes;
- resultados;
- continuidade;
- confiança;
- evolução.

## 933. Painéis Mestres

Cada domínio poderá possuir Painel Mestre conectado ao modelo comum.

## 934. Painéis pessoais

Usuários poderão possuir painéis adequados às suas necessidades, permissões e relações com o ecossistema.

## 935. Painéis organizacionais

Organizações deverão acompanhar:

- Missões;
- capacidades;
- recursos;
- resultados;
- compromissos;
- riscos;
- responsabilidades;
- cooperações.

## 936. Painéis territoriais

Painéis territoriais poderão apresentar:

- necessidades;
- serviços;
- oportunidades;
- capacidades;
- investimentos;
- riscos;
- resultados;
- participação comunitária.

## 937. Interface espacial

A cidade conceitual da UNO poderá tornar os ambientes navegáveis e observáveis.

Cada espaço visual poderá representar:

- setor;
- serviço;
- organização;
- comunidade;
- capacidade;
- Missão;
- painel;
- oportunidade.

## 938. Ícones como linguagem operacional

Os ícones conceituais deverão possuir correspondência consistente entre:

- imagens;
- painéis;
- menus;
- alertas;
- mapas;
- relatórios;
- navegação.

## 939. Identidade visual e estado

Cores, luzes, movimentos e símbolos poderão representar estados operacionais, respeitando:

- acessibilidade;
- consistência;
- sobriedade;
- clareza;
- segurança;
- contexto.

## 940. Ambiente adaptativo

A interface poderá adaptar informações conforme:

- papel;
- localidade;
- horário;
- Missão;
- necessidades;
- preferências;
- acessibilidade;
- estado operacional.

## 941. Meu Bairro

O ambiente “Meu Bairro” poderá apresentar:

- serviços próximos;
- necessidades;
- Missões locais;
- organizações;
- profissionais;
- oportunidades;
- alertas;
- resultados;
- participação.

## 942. Métricas territoriais de bairro

As métricas do bairro poderão observar:

- cobertura;
- acesso;
- serviços;
- segurança;
- zeladoria;
- saúde;
- educação;
- emprego;
- infraestrutura;
- participação.

## 943. Proteção contra estigmatização territorial

Indicadores territoriais não deverão transformar bairros ou comunidades em rótulos permanentes de risco, pobreza, violência ou incapacidade.

## 944. Comparação territorial responsável

Comparações deverão considerar diferenças de:

- população;
- recursos;
- história;
- infraestrutura;
- oportunidades;
- necessidades;
- cobertura;
- contexto.

## 945. Inteligência para a distribuição de recursos

A Plataforma UNO poderá apoiar a distribuição de recursos considerando:

- necessidade;
- urgência;
- impacto;
- equidade;
- capacidade;
- dependências;
- sustentabilidade;
- participação;
- restrições legais.

## 946. Rateio transparente

Qualquer rateio deverá possuir:

- fórmula;
- critérios;
- dados;
- pesos;
- limites;
- autoridade;
- revisão;
- contestação;
- auditoria.

## 947. Métricas para colaboradores

A avaliação de colaboradores deverá considerar:

- qualidade;
- responsabilidade;
- segurança;
- cooperação;
- aprendizagem;
- confiabilidade;
- impacto;
- contexto.

## 948. Classes de colaboradores

Classes poderão refletir:

- competências;
- responsabilidades;
- certificações;
- experiências;
- atividades;
- riscos;
- autoridade;
- disponibilidade.

Não deverão representar hierarquia de dignidade.

## 949. Métricas para parceiros

Parceiros poderão ser avaliados por:

- cumprimento;
- qualidade;
- transparência;
- segurança;
- continuidade;
- cooperação;
- impacto;
- alinhamento institucional.

## 950. Métricas para fornecedores

Fornecedores deverão ser avaliados considerando:

- desempenho;
- custo total;
- dependência;
- segurança;
- conformidade;
- sustentabilidade;
- recuperabilidade;
- capacidade de substituição.

## 951. Métricas para organizações federadas

Organizações participantes deverão preservar autonomia e prestar contas sobre compromissos compartilhados.

## 952. Métricas para agentes de IA

Agentes deverão ser avaliados por:

- correção;
- utilidade;
- segurança;
- rastreabilidade;
- cumprimento de limites;
- transparência;
- taxa de abstenção adequada;
- impacto de erros;
- necessidade de intervenção humana.

## 953. Métricas para automações

Automações deverão possuir indicadores sobre:

- sucesso;
- falha;
- reversão;
- tempo;
- impacto;
- exceções;
- intervenções;
- segurança;
- benefício produzido.

## 954. Métricas para operadores humanos

Operadores não deverão ser avaliados somente por velocidade ou volume.

A avaliação deverá incluir:

- discernimento;
- segurança;
- responsabilidade;
- qualidade;
- cooperação;
- registro;
- aprendizagem;
- preservação de propósito.

## 955. Métricas para diretores

A avaliação de diretores deverá observar:

- decisões;
- coerência;
- prestação de contas;
- desenvolvimento institucional;
- proteção de princípios;
- resultados sustentáveis;
- escuta;
- gestão de riscos;
- sucessão;
- confiança.

## 956. Critérios para seleção de diretores

Os critérios poderão considerar:

- integridade;
- competência;
- serviço;
- compromisso;
- visão sistêmica;
- responsabilidade;
- cooperação;
- capacidade de aprender;
- legitimidade;
- ausência de conflitos incompatíveis.

## 957. Métricas e ingresso societário

Indicadores poderão apoiar processos de ingresso como sócio, acionista ou parceiro, mas não deverão produzir inclusão automática sem:

- critérios jurídicos;
- análise;
- governança;
- direitos;
- deveres;
- decisão legítima;
- documentação.

## 958. Métricas financeiras

As métricas financeiras deverão acompanhar:

- receitas;
- custos;
- reservas;
- fluxos;
- compromissos;
- sustentabilidade;
- inadimplência;
- investimentos;
- distribuição;
- riscos.

## 959. Métricas de assinaturas

O acompanhamento poderá considerar:

- adesão;
- permanência;
- cancelamento;
- acessibilidade;
- inadimplência;
- utilização;
- valor percebido;
- custo de atendimento;
- impacto.

## 960. Usuário gratuito e assinante

As métricas deverão distinguir modalidades sem transformar pessoas não pagantes em cidadãos de menor valor.

## 961. Acesso gratuito

O acesso gratuito deverá possuir indicadores sobre:

- cobertura;
- utilidade;
- inclusão;
- capacidade;
- sustentabilidade;
- transição voluntária;
- benefícios produzidos.

## 962. Assinatura

A assinatura deverá ser avaliada por sua capacidade de:

- sustentar serviços;
- preservar acesso;
- financiar capacidades;
- gerar valor;
- manter confiança;
- respeitar liberdade de escolha.

## 963. Publicidade e AdSense

Integrações publicitárias deverão observar:

- consentimento;
- privacidade;
- adequação;
- transparência;
- segurança;
- experiência;
- proteção de públicos vulneráveis;
- legislação.

## 964. Métricas de divulgação

A divulgação poderá acompanhar:

- alcance;
- compreensão;
- engajamento;
- conversão;
- custo;
- permanência;
- confiança;
- impacto social.

## 965. Conversão responsável

A Plataforma UNO não deverá otimizar conversão por meio de:

- manipulação;
- medo;
- urgência artificial;
- desinformação;
- padrões obscuros;
- exploração de vulnerabilidade.

## 966. Métricas de participação

A participação poderá ser observada por:

- diversidade;
- continuidade;
- qualidade;
- contribuição;
- escuta;
- representação;
- resposta institucional;
- impacto nas decisões.

## 967. Votação e métricas

Resultados de votação deverão informar:

- elegibilidade;
- participação;
- quórum;
- distribuição;
- abstenções;
- regras;
- integridade;
- contexto;
- efeitos.

## 968. Voto não substitui princípios

Uma maioria não poderá legitimar violação de:

- direitos;
- dignidade;
- legalidade;
- segurança;
- compromissos permanentes;
- proteção de minorias.

## 969. Métricas de confiança comunitária

A confiança poderá ser acompanhada por:

- permanência;
- participação;
- cooperação;
- recomendações;
- contestações resolvidas;
- transparência percebida;
- cumprimento de compromissos;
- tratamento de falhas.

## 970. Métricas de zeladoria

A zeladoria poderá observar:

- necessidades reconhecidas;
- tempo de resposta;
- qualidade;
- recorrência;
- cobertura;
- participação;
- custo;
- satisfação fundamentada;
- impacto territorial.

## 971. Métricas de saúde

Indicadores de saúde deverão ser definidos por profissionais e autoridades competentes, respeitando:

- sigilo;
- ética;
- segurança;
- evidência científica;
- legislação;
- equidade;
- proteção de pessoas.

## 972. Métricas de educação

A educação deverá ser avaliada por:

- acesso;
- permanência;
- aprendizagem;
- inclusão;
- aplicabilidade;
- desenvolvimento;
- qualidade;
- continuidade;
- oportunidades geradas.

## 973. Métricas de emprego e renda

A inteligência poderá observar:

- oportunidades;
- inserção;
- permanência;
- renda;
- formalização;
- desenvolvimento;
- segurança;
- equidade;
- mobilidade;
- impacto local.

## 974. Métricas de segurança comunitária

A segurança deverá combinar:

- prevenção;
- percepção;
- eventos;
- resposta;
- proteção;
- confiança;
- integração;
- direitos;
- aprendizagem.

## 975. Métricas de marketplace

O marketplace poderá observar:

- oferta;
- demanda;
- qualidade;
- confiança;
- cumprimento;
- disputas;
- distribuição territorial;
- inclusão;
- valor local;
- segurança.

## 976. Métricas do Catálogo Nacional de Serviços

Cada serviço catalogado deverá possuir:

- disponibilidade;
- cobertura;
- acesso;
- organização responsável;
- qualidade;
- custo;
- requisitos;
- integrações;
- resultados;
- atualização.

## 977. Métricas de acessibilidade aos serviços

Deverá ser possível compreender se o serviço pode ser acessado por:

- interface direta;
- representante UNO;
- organização parceira;
- atendimento presencial;
- canal assistido;
- tecnologia acessível.

## 978. Métricas de integração pública

Integrações com serviços públicos deverão acompanhar:

- disponibilidade;
- segurança;
- conformidade;
- tempo;
- cobertura;
- falhas;
- responsabilidades;
- continuidade;
- benefício público.

## 979. Métricas do piloto

O piloto deverá priorizar métricas que validem:

- necessidade;
- adesão;
- uso;
- confiança;
- valor;
- capacidade;
- estabilidade;
- segurança;
- aprendizagem;
- viabilidade.

## 980. Marco de 100 participantes

O marco de 100 participantes deverá servir à validação inicial de:

- entrevistas;
- cadastro;
- identidade;
- navegação;
- serviços;
- Missões;
- painéis;
- suporte;
- aprendizado.

## 981. Marco de 1.000 participantes

O marco de 1.000 participantes poderá ampliar a análise sobre:

- escala;
- segmentação;
- participação;
- formação de lideranças;
- seleção de diretores;
- capacidade;
- sustentabilidade;
- governança.

## 982. Marco de 10.000 participantes

O marco de 10.000 participantes deverá verificar:

- continuidade;
- estabilidade;
- federação;
- economia operacional;
- segurança;
- confiança;
- qualidade;
- expansão;
- legitimidade;
- capacidade institucional.

## 983. Métricas de expansão

A expansão deverá considerar:

- prontidão;
- capacidade;
- demanda;
- parceiros;
- recursos;
- contexto local;
- governança;
- riscos;
- continuidade;
- aprendizagem transferível.

## 984. Expansão não é apenas crescimento

Crescer sem preservar qualidade, propósito e governança representa fragilização, não evolução.

## 985. Métricas da UNO ALFA

A UNO ALFA deverá possuir conjunto reduzido e essencial de indicadores.

A prioridade será aprender se o núcleo consegue:

- reconhecer pessoas;
- compreender necessidades;
- criar Missões;
- coordenar capacidades;
- registrar decisões;
- acompanhar resultados;
- preservar memória.

## 986. Métricas mínimas da ALFA

O conjunto inicial poderá incluir:

- cadastros válidos;
- necessidades registradas;
- Missões criadas;
- tempo de atendimento;
- conclusão;
- erros;
- disponibilidade;
- intervenções humanas;
- satisfação fundamentada;
- aprendizados.

## 987. Instrumentação da ALFA

Toda funcionalidade da ALFA deverá nascer com instrumentação suficiente para:

- diagnóstico;
- segurança;
- uso;
- resultado;
- melhoria;
- auditoria;
- suporte.

## 988. Evitar instrumentação prematura excessiva

A ALFA não deverá ser sobrecarregada com milhares de métricas sem uso.

O núcleo deverá começar com medições essenciais e evoluir conforme evidências.

## 989. Hipóteses da ALFA

Cada funcionalidade deverá declarar:

- hipótese;
- necessidade;
- usuário;
- valor esperado;
- métrica;
- critério de validação;
- risco;
- aprendizado.

## 990. Experimentos da ALFA

Todo experimento deverá ser identificado como:

**SIMULAÇÃO** ou **EXPERIMENTO CONTROLADO**, conforme sua natureza.

## 991. Critérios de sucesso da ALFA

O sucesso não será medido apenas por crescimento de usuários.

Deverá considerar:

- valor real;
- confiança;
- segurança;
- compreensão;
- continuidade;
- capacidade de aprender;
- aderência aos princípios;
- sustentabilidade.

## 992. Critérios de interrupção

Uma funcionalidade deverá ser interrompida quando:

- produzir risco indevido;
- violar princípios;
- não demonstrar valor;
- ultrapassar capacidade;
- gerar dano;
- não puder ser governada;
- comprometer a arquitetura.

## 993. Métricas para desenvolvimento

O desenvolvimento poderá acompanhar:

- mudanças;
- defeitos;
- revisão;
- testes;
- implantação;
- recuperação;
- segurança;
- dívida;
- documentação;
- valor entregue.

## 994. Frequência de implantação

A frequência de implantação deverá ser analisada junto à qualidade e confiabilidade.

## 995. Lead time de mudança

O lead time deverá mostrar quanto tempo uma mudança leva desde sua concepção até disponibilização segura.

## 996. Taxa de falha de mudança

A taxa deverá medir mudanças que resultam em:

- incidente;
- reversão;
- correção urgente;
- degradação;
- descumprimento;
- impacto não previsto.

## 997. Tempo de restauração após mudança

A operação deverá medir sua capacidade de recuperar-se quando uma mudança produz falha.

## 998. Tamanho de mudança

Mudanças menores tendem a ser mais compreensíveis e reversíveis.

Entretanto, a arquitetura não deverá fragmentar artificialmente transformações inseparáveis.

## 999. Dívida técnica

A dívida técnica deverá ser observada por seus efeitos sobre:

- velocidade;
- qualidade;
- segurança;
- manutenção;
- confiabilidade;
- evolução;
- capacidade cognitiva.

## 1000. Dívida operacional

A dívida operacional poderá incluir:

- procedimentos desatualizados;
- alertas inúteis;
- dependências frágeis;
- automações incompletas;
- acessos acumulados;
- documentação ausente;
- trabalho manual repetitivo.

## 1001. Dívida institucional

A dívida institucional surgirá quando existirem:

- responsabilidades indefinidas;
- decisões não registradas;
- políticas contraditórias;
- exceções permanentes;
- memória fragmentada;
- autoridade informal;
- obrigações não tratadas.

## 1002. Backlog de evolução

O backlog deverá relacionar necessidades técnicas, operacionais, humanas e institucionais.

## 1003. Priorização do backlog

A priorização deverá considerar:

- propósito;
- valor;
- risco;
- urgência;
- dependências;
- capacidade;
- custo de atraso;
- aprendizagem;
- obrigação;
- equidade.

## 1004. Custo de atraso

O custo de atraso poderá envolver:

- valor não produzido;
- risco crescente;
- oportunidade perdida;
- sofrimento prolongado;
- dependência;
- retrabalho;
- descumprimento;
- perda de confiança.

## 1005. Métricas de fluxo de desenvolvimento

O fluxo poderá observar:

- trabalho em andamento;
- tempo;
- bloqueios;
- filas;
- conclusão;
- retrabalho;
- qualidade;
- aprendizagem.

## 1006. Limites de trabalho em andamento

Limites poderão reduzir:

- dispersão;
- alternância;
- filas;
- atrasos;
- sobrecarga;
- perda de qualidade.

## 1007. Métricas de documentação

A documentação deverá ser avaliada por:

- cobertura;
- atualidade;
- clareza;
- utilização;
- rastreabilidade;
- coerência;
- responsáveis;
- acessibilidade.

## 1008. Engenharia Oficial como fonte normativa

A Engenharia Oficial da UNO deverá permanecer como referência principal para:

- princípios;
- arquitetura;
- decisões;
- capacidades;
- responsabilidades;
- limites;
- evolução.

## 1009. Coerência com a Engenharia Oficial

Métricas, códigos, agentes, interfaces e processos deverão poder demonstrar sua relação com a Engenharia Oficial.

## 1010. Divergência da Engenharia Oficial

Quando a implementação divergir da Engenharia Oficial, deverá haver:

- identificação;
- justificativa;
- risco;
- responsável;
- decisão;
- prazo;
- correção ou atualização normativa.

## 1011. Métricas de coerência arquitetural

A coerência poderá ser avaliada por:

- aderência;
- contratos preservados;
- dependências autorizadas;
- padrões;
- invariantes;
- documentação;
- testes;
- decisões registradas.

## 1012. Conformidade como código

Regras poderão ser automatizadas quando forem formalizáveis.

Contudo, o código não substituirá interpretação jurídica ou institucional quando necessária.

## 1013. Métricas de segurança por desenho

A segurança deverá acompanhar:

- identidade;
- acesso;
- privilégios;
- vulnerabilidades;
- incidentes;
- correções;
- segredos;
- dados;
- dependências;
- recuperação.

## 1014. Métricas de privacidade por desenho

A privacidade deverá observar:

- minimização;
- finalidade;
- consentimento quando aplicável;
- acessos;
- compartilhamentos;
- retenção;
- exclusão;
- incidentes;
- solicitações de titulares.

## 1015. Métricas de resiliência

A resiliência poderá ser avaliada por:

- absorção;
- adaptação;
- continuidade;
- recuperação;
- aprendizagem;
- redundância;
- diversidade;
- capacidade reserva;
- substituibilidade.

## 1016. Métricas de continuidade

A continuidade deverá acompanhar:

- funções essenciais;
- RTO;
- RPO;
- dependências;
- pessoas;
- locais;
- dados;
- comunicações;
- testes;
- recuperação.

## 1017. Métricas de recuperabilidade

Recuperabilidade deverá observar se a operação consegue restaurar:

- dados;
- serviços;
- capacidades;
- identidades;
- decisões;
- evidências;
- contexto;
- confiança.

## 1018. Métricas de backup

Backups deverão ser medidos por:

- conclusão;
- integridade;
- cobertura;
- retenção;
- isolamento;
- criptografia;
- restauração testada;
- tempo;
- falhas.

## 1019. Métricas de contingência

A contingência deverá acompanhar:

- prontidão;
- ativação;
- tempo;
- capacidade alternativa;
- qualidade degradada;
- riscos;
- comunicação;
- retorno.

## 1020. Métricas de runbooks

Runbooks deverão ser avaliados por:

- existência;
- atualização;
- utilização;
- clareza;
- sucesso;
- tempo;
- erros;
- feedback;
- automação possível.

## 1021. Métricas de auto-remediação

A auto-remediação deverá observar:

- detecção;
- execução;
- sucesso;
- reversão;
- reincidência;
- impacto;
- segurança;
- intervenção humana;
- aprendizado.

## 1022. Métricas de agentes operacionais

Agentes deverão produzir evidências sobre:

- identidade;
- versão;
- instrução;
- contexto;
- ação;
- ferramenta utilizada;
- resultado;
- erro;
- supervisão;
- custo.

## 1023. Métricas de operação federada

A federação deverá acompanhar:

- interoperabilidade;
- cumprimento;
- confiança;
- disponibilidade;
- resolução de conflitos;
- compartilhamento;
- autonomia;
- continuidade entre organizações.

## 1024. Métricas de handover

O handover deverá ser avaliado por:

- completude;
- contexto;
- pendências;
- riscos;
- reconhecimento;
- tempo;
- perda de informação;
- incidentes associados.

## 1025. Métricas de crise

Durante crises, métricas deverão priorizar:

- vidas;
- segurança;
- necessidades;
- capacidade;
- recursos;
- propagação;
- decisões;
- comunicação;
- continuidade;
- recuperação.

## 1026. Métricas durante operação extraordinária

Metas ordinárias poderão ser temporariamente substituídas por objetivos de preservação.

Toda alteração deverá ser:

- autorizada;
- temporária;
- registrada;
- proporcional;
- revisada;
- encerrada.

## 1027. Aprendizagem após crise

Após a crise, a avaliação deverá compreender:

- o que ocorreu;
- o que funcionou;
- o que falhou;
- quais capacidades faltaram;
- quais decisões foram tomadas;
- quais mudanças serão necessárias.

## 1028. Métricas de aprendizagem

A aprendizagem poderá ser observada por:

- lições registradas;
- mudanças implementadas;
- recorrência reduzida;
- conhecimento compartilhado;
- procedimentos atualizados;
- competências desenvolvidas;
- eficácia verificada.

## 1029. Aprendizagem não é quantidade de lições

Uma lição somente será incorporada quando produzir mudança verificável na capacidade futura.

## 1030. Métricas de maturidade

A maturidade deverá ser avaliada pela capacidade de:

- compreender;
- decidir;
- executar;
- governar;
- recuperar;
- aprender;
- evoluir;
- transmitir.

## 1031. Maturidade contextual

Uma organização poderá possuir diferentes níveis de maturidade em diferentes capacidades.

Pontuações gerais não deverão ocultar fragilidades críticas.

## 1032. Roadmap de implementação

A implementação poderá avançar em fases:

1. fundamentos;
2. catálogo;
3. coleta;
4. qualidade;
5. painéis;
6. alertas;
7. análises;
8. inteligência;
9. automação;
10. evolução.

## 1033. Fase de fundamentos

A fase inicial deverá definir:

- linguagem;
- princípios;
- papéis;
- objetos;
- métricas essenciais;
- arquitetura;
- segurança;
- governança.

## 1034. Fase de catálogo

O catálogo deverá começar pelas métricas essenciais da UNO ALFA e evoluir de forma controlada.

## 1035. Fase de coleta

A coleta deverá priorizar sinais necessários para:

- saúde;
- segurança;
- uso;
- resultado;
- diagnóstico;
- aprendizagem.

## 1036. Fase de qualidade

Antes de expandir análises, deverão ser implementados:

- contratos;
- validações;
- linhagem;
- incidentes;
- correções;
- níveis de confiança.

## 1037. Fase de painéis

Os primeiros painéis deverão responder perguntas reais de usuários e operadores.

## 1038. Fase de alertas

Alertas deverão começar por condições críticas e claramente acionáveis.

## 1039. Fase analítica

Análises deverão evoluir de:

- descritivas;
- diagnósticas;
- avaliativas;
- preditivas;
- prescritivas.

## 1040. Fase de inteligência artificial

A IA deverá ser incorporada após existirem:

- dados governados;
- objetivos;
- limites;
- evidências;
- supervisão;
- avaliação;
- capacidade de interrupção.

## 1041. Fase de automação decisória

Automação decisória somente poderá ocorrer em contextos:

- autorizados;
- limitados;
- testados;
- reversíveis;
- observáveis;
- auditáveis;
- compatíveis com o risco.

## 1042. Fase de federação

A federação deverá preservar:

- identidade;
- autonomia;
- contratos;
- semântica;
- segurança;
- responsabilidade;
- continuidade.

## 1043. Priorização da implementação

A prioridade deverá considerar:

- risco;
- valor;
- dependência;
- necessidade;
- viabilidade;
- capacidade;
- aprendizagem;
- compromisso legal.

## 1044. Produto mínimo de inteligência

O produto mínimo não será um painel cheio de gráficos.

Será um sistema capaz de responder, com confiança suficiente:

- quem precisa de atenção;
- qual Missão está em risco;
- qual capacidade está faltando;
- quem pode agir;
- qual resultado ocorreu;
- o que aprendemos.

## 1045. Critérios de prontidão

Uma capacidade estará pronta para uso quando possuir:

- propósito;
- proprietário;
- contratos;
- métricas;
- segurança;
- testes;
- suporte;
- recuperação;
- documentação;
- governança.

## 1046. Critérios de prontidão analítica

Uma análise estará pronta quando possuir:

- pergunta;
- dados adequados;
- método;
- validação;
- limitações;
- revisão;
- público;
- decisão relacionada;
- rastreabilidade.

## 1047. Critérios de prontidão de uma KPI

Uma KPI estará pronta quando:

- seu propósito estiver claro;
- sua fórmula estiver validada;
- sua fonte for confiável;
- houver proprietário;
- a decisão estiver vinculada;
- os riscos de incentivo forem avaliados;
- a interpretação estiver documentada.

## 1048. Critérios de prontidão de um modelo

Um modelo estará pronto quando possuir:

- finalidade;
- validação;
- monitoramento;
- explicação;
- segurança;
- avaliação de impacto;
- autoridade;
- supervisão;
- reversibilidade;
- plano de retirada.

## 1049. Testes de métricas

As métricas deverão possuir testes sobre:

- fórmula;
- fonte;
- tipo;
- faixa;
- unidade;
- duplicidade;
- agregação;
- atualização;
- compatibilidade;
- resultado conhecido.

## 1050. Testes de contratos

Contratos de dados e eventos deverão ser testados entre produtores e consumidores.

## 1051. Testes de painéis

Painéis deverão ser testados quanto a:

- correção;
- acessibilidade;
- compreensão;
- filtros;
- desempenho;
- atualização;
- permissões;
- interpretação.

## 1052. Testes de alertas

Alertas deverão ser testados para verificar:

- acionamento;
- roteamento;
- conteúdo;
- reconhecimento;
- escalonamento;
- runbook;
- encerramento;
- falsos positivos.

## 1053. Testes de cenários

A arquitetura deverá testar condições como:

- perda de fonte;
- atraso;
- dado incorreto;
- dependência indisponível;
- mudança semântica;
- pico;
- falha de modelo;
- acesso indevido.

## 1054. Testes de restauração analítica

A Plataforma UNO deverá conseguir restaurar:

- catálogos;
- séries;
- painéis;
- modelos;
- relatórios;
- linhagens;
- registros de auditoria.

## 1055. Testes de continuidade da inteligência

Durante contingências, deverá permanecer possível compreender:

- estado;
- Missões críticas;
- recursos;
- decisões;
- ações;
- resultados;
- responsabilidades.

## 1056. Operação manual de emergência

Quando os sistemas analíticos estiverem indisponíveis, procedimentos manuais deverão preservar informações essenciais.

## 1057. Reconciliação posterior

Registros produzidos durante operação manual deverão ser reconciliados quando os sistemas retornarem.

## 1058. Segurança por padrão

Toda implementação deverá iniciar com:

- acesso restrito;
- coleta mínima;
- registro;
- criptografia quando aplicável;
- segregação;
- revisão;
- retenção definida.

## 1059. Transparência por padrão

As definições, limitações e responsabilidades das métricas deverão ser visíveis aos públicos autorizados.

## 1060. Contestabilidade por padrão

Mecanismos de contestação deverão ser previstos antes que indicadores influenciem direitos ou oportunidades.

## 1061. Observabilidade por padrão

Toda capacidade deverá produzir sinais suficientes para demonstrar seu comportamento e seus resultados.

## 1062. Recuperabilidade por padrão

Métricas, modelos e decisões deverão possuir mecanismos de restauração e reconstrução.

## 1063. Evolução por padrão

A arquitetura deverá permitir mudança sem destruir:

- identidade;
- significado;
- histórico;
- responsabilidade;
- continuidade.

## 1064. Invariante da identidade

Todo objeto relevante deverá permanecer identificável através de mudanças.

## 1065. Invariante da proveniência

Toda evidência relevante deverá possuir origem rastreável.

## 1066. Invariante da temporalidade

Toda medição deverá preservar o tempo necessário à sua correta interpretação.

## 1067. Invariante do propósito

Nenhuma métrica deverá existir sem finalidade legítima e compreensível.

## 1068. Invariante da responsabilidade

Toda KPI, análise, recomendação, decisão e ação deverá possuir responsabilidade atribuível.

## 1069. Invariante da evidência

Decisões relevantes deverão permanecer conectadas às evidências que as sustentaram.

## 1070. Invariante da distinção semântica

A arquitetura deverá preservar distinções entre:

- dado;
- métrica;
- indicador;
- KPI;
- hipótese;
- previsão;
- recomendação;
- decisão;
- resultado.

## 1071. Invariante da qualidade

A qualidade e as limitações deverão acompanhar o dado e a métrica durante todo o ciclo.

## 1072. Invariante da incerteza

A incerteza não poderá ser removida apenas para simplificar uma apresentação.

## 1073. Invariante da não manipulação

Nenhuma métrica poderá ser alterada com a finalidade de produzir aparência enganosa de desempenho.

## 1074. Invariante da não discriminação

Nenhum indicador poderá legitimar discriminação incompatível com direitos, dignidade e finalidade.

## 1075. Invariante da proporcionalidade

A coleta, análise, intervenção e exposição deverão ser proporcionais à necessidade e ao risco.

## 1076. Invariante da minimização

Somente deverão ser coletados e preservados os dados necessários.

## 1077. Invariante da segurança

Métricas e inteligência operacional deverão permanecer protegidas contra acesso, alteração, perda e uso indevido.

## 1078. Invariante da legitimidade

Toda autoridade exercida sobre métricas, metas e decisões deverá possuir fundamento reconhecível.

## 1079. Invariante da autonomia governada

Pessoas, agentes e organizações poderão atuar autonomamente dentro de limites explícitos e verificáveis.

## 1080. Invariante da reversibilidade

Ações automatizadas de impacto relevante deverão ser reversíveis quando a natureza da operação permitir.

## 1081. Invariante da contestação

Resultados de alto impacto deverão poder ser questionados, revisados e corrigidos.

## 1082. Invariante da memória

Mudanças não deverão apagar o histórico necessário à compreensão institucional.

## 1083. Invariante da continuidade

A inteligência necessária às funções essenciais deverá permanecer disponível em condições adversas.

## 1084. Invariante da aprendizagem

Experiências relevantes deverão gerar conhecimento e fortalecer capacidades futuras.

## 1085. Invariante da primazia humana

Tecnologia, métricas e inteligência existirão para servir à vida.

Nenhuma otimização poderá transformar pessoas em meios descartáveis para alcançar indicadores.

## 1086. Garantia estrutural

Garantias estruturais deverão proteger a arquitetura pelo desenho de:

- identidades;
- contratos;
- schemas;
- separações;
- dependências;
- redundâncias;
- limites.

## 1087. Garantia operacional

Garantias operacionais deverão proteger a execução por meio de:

- procedimentos;
- monitoramento;
- alertas;
- revisões;
- validações;
- escalonamentos;
- recuperação.

## 1088. Garantia cognitiva

Garantias cognitivas deverão proteger a interpretação por meio de:

- linguagem;
- contexto;
- qualidade;
- explicabilidade;
- incerteza;
- revisão humana;
- diversidade de perspectivas.

## 1089. Garantia institucional

Garantias institucionais deverão preservar:

- autoridade;
- legalidade;
- governança;
- responsabilidade;
- prestação de contas;
- direitos;
- princípios permanentes.

## 1090. Garantia temporal

Garantias temporais deverão preservar:

- histórico;
- sequência;
- vigência;
- retenção;
- continuidade;
- comparabilidade;
- memória.

## 1091. Garantia de resiliência

Garantias de resiliência deverão preservar:

- capacidade reserva;
- substituição;
- degradação segura;
- contingência;
- recuperação;
- adaptação;
- aprendizado.

## 1092. Garantia federada

Garantias federadas deverão permitir cooperação sem apagar:

- identidade;
- soberania;
- responsabilidade;
- limites;
- contratos;
- contexto;
- confiança.

## 1093. Garantia evolutiva

A Plataforma UNO poderá mudar métodos, tecnologias, interfaces e escalas.

Não poderá destruir silenciosamente:

- propósito;
- identidade;
- responsabilidade;
- evidência;
- memória;
- legitimidade;
- dignidade.

## 1094. O que a inteligência operacional não será

A inteligência operacional não será:

- vigilância indiscriminada;
- coleção de dashboards;
- competição de números;
- justificativa automática;
- substituição de responsabilidade;
- previsão tratada como verdade;
- instrumento de manipulação;
- poder sem prestação de contas.

## 1095. O que as métricas não poderão fazer

Métricas não poderão:

- definir sozinhas o valor de uma pessoa;
- substituir julgamento onde ele é necessário;
- transformar maioria em legitimidade absoluta;
- apagar contexto;
- esconder incerteza;
- justificar violação de princípios;
- determinar o futuro como inevitável.

## 1096. Princípio da verdade operacional

A verdade operacional deverá ser buscada pela convergência entre:

- realidade observada;
- evidências;
- contexto;
- conhecimento;
- interpretação;
- contestação;
- validação;
- memória.

Nenhuma fonte isolada possuirá autoridade absoluta sobre a realidade.

## 1097. Princípio da consciência operacional

Uma organização consciente não mede tudo.

Ela reconhece aquilo que precisa compreender para:

- servir;
- proteger;
- decidir;
- cooperar;
- corrigir;
- aprender;
- evoluir.

## 1098. Princípio do valor público

A inteligência operacional deverá ampliar a capacidade de produzir valor legítimo para:

- pessoas;
- comunidades;
- organizações;
- instituições;
- sociedade;
- futuras gerações.

## 1099. Declaração final do arquivo

A Plataforma UNO deverá ser capaz de perceber sua operação, compreender seu significado, reconhecer seus limites e aprender com suas consequências.

Sua inteligência não será medida apenas pela precisão de seus modelos, pela quantidade de seus dados ou pela beleza de seus painéis.

Será medida por sua capacidade de:

- reconhecer a realidade sem manipulá-la;
- transformar dados em conhecimento responsável;
- transformar conhecimento em decisão legítima;
- transformar decisão em ação coordenada;
- transformar ação em valor;
- transformar experiência em aprendizagem;
- transformar aprendizagem em evolução consciente.

## 1100. Encerramento

Este arquivo estabelece a Engenharia Oficial de métricas, KPIs e inteligência operacional da Plataforma UNO.

A partir dele, toda medição deverá possuir significado.

Todo indicador deverá possuir contexto.

Toda KPI deverá possuir responsabilidade.

Toda meta deverá preservar o propósito.

Todo modelo deverá reconhecer seus limites.

Toda recomendação deverá permanecer distinta da decisão.

Toda decisão deverá manter-se ligada às evidências, aos princípios e às consequências que ajudou a produzir.

A UNO não observará pessoas para controlá-las.

Observará a realidade para compreender como servi-las melhor.

Não medirá apenas aquilo que é fácil contar.

Buscará compreender aquilo que verdadeiramente importa.

Não utilizará inteligência para concentrar poder.

Utilizará inteligência para ampliar consciência, cooperação, responsabilidade, continuidade e capacidade coletiva de transformação.

**Porque uma organização consciente não é aquela que sabe tudo.**

**É aquela que reconhece o que sabe, o que ainda não sabe, o que precisa compreender e a responsabilidade que assume quando decide agir.**

---

**Fim do arquivo `029-metricas-kpis-e-inteligencia-operacional.md`.**
