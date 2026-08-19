# 028 — Operação Crítica, Crise e Modos Extraordinários

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial para reconhecer, declarar, coordenar, executar, limitar, supervisionar e encerrar operações críticas, crises e modos extraordinários na Plataforma UNO.

Seu objetivo será assegurar que, diante de condições excepcionais, a organização consiga ampliar sua capacidade de resposta sem perder:

- propósito;
- consciência;
- dignidade;
- legitimidade;
- responsabilidade;
- proporcionalidade;
- segurança;
- governança;
- rastreabilidade;
- continuidade;
- memória;
- capacidade de retornar à normalidade.

Este documento deverá orientar operações diante de:

- risco à vida;
- ameaça à saúde;
- comprometimento de segurança;
- desastre;
- indisponibilidade ampla;
- falha sistêmica;
- ataque;
- fraude;
- perda de infraestrutura;
- saturação extrema;
- ruptura de fornecedores;
- crise institucional;
- crise territorial;
- conflito entre organizações;
- emergência social;
- evento ambiental;
- comprometimento de dados;
- interrupção de serviços essenciais;
- perda de autoridade operacional;
- necessidade de mobilização extraordinária.

---

## Princípio central

> Quanto mais extraordinária for a situação, maior deverá ser a capacidade institucional de preservar propósito, limites, responsabilidade, evidências e dignidade.

A urgência poderá modificar a forma de operar.

Ela não deverá eliminar:

- princípios;
- direitos;
- responsabilidade;
- autoridade legítima;
- prestação de contas;
- proteção das pessoas;
- memória;
- necessidade de encerramento.

---

## Regra fundamental

Nenhuma emergência, crise ou modo extraordinário deverá tornar-se autorização genérica para:

- poder ilimitado;
- vigilância indiscriminada;
- ocultação de decisões;
- supressão permanente de direitos;
- destruição de evidências;
- eliminação de controles;
- jornadas humanas indefinidas;
- concentração irreversível de autoridade;
- automação sem supervisão;
- uso de dados sem finalidade;
- permanência de exceções após a necessidade.

---

## Relação com os arquivos anteriores

Este arquivo integra e aprofunda fundamentos estabelecidos em:

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
- `027-turnos-escalas-handover-e-continuidade-humana.md`.

---

## Estrutura de aprofundamento

Este arquivo será desenvolvido em seis lotes:

1. fundamentos, criticidade, emergência, crise, desastre e modos extraordinários;
2. detecção, reconhecimento, classificação, declaração, ativação e escalonamento;
3. comando, governança, autoridade, decisão, coordenação e comunicação de crise;
4. execução extraordinária, mobilização, segurança, continuidade e proteção humana;
5. recuperação, retorno à normalidade, encerramento, responsabilização e aprendizagem;
6. modelo integrado, invariantes, garantias, implementação, maturidade e conclusão.

---

# Lote 1 — Fundamentos, Criticidade, Emergência, Crise, Desastre e Modos Extraordinários

## 1. Propósito deste lote

Este lote estabelece a linguagem, os conceitos, os estados e os princípios fundamentais necessários para distinguir:

- anormalidade;
- incidente;
- operação crítica;
- contingência;
- emergência;
- crise;
- desastre;
- calamidade;
- colapso;
- modo extraordinário.

## 2. Realidade antes da classificação

A Plataforma UNO deverá compreender a realidade antes de aplicar uma classificação.

A classificação deverá apoiar a resposta, e não forçar acontecimentos complexos a categorias inadequadas.

## 3. Evento

Evento será qualquer ocorrência observável capaz de alterar o estado de:

- pessoa;
- organização;
- território;
- serviço;
- recurso;
- capacidade;
- sistema;
- Missão;
- ambiente;
- comunidade.

## 4. Evento esperado

Um evento poderá ser esperado quando fizer parte da variação conhecida da operação.

## 5. Evento inesperado

Um evento será inesperado quando:

- não tiver sido previsto;
- ocorrer fora do padrão;
- produzir efeitos incomuns;
- surgir por combinação não antecipada;
- ultrapassar hipóteses de planejamento.

## 6. Evento adverso

Evento adverso será aquele capaz de produzir prejuízo, dano, interrupção, risco ou degradação.

## 7. Evento crítico

Um evento será crítico quando puder afetar significativamente:

- vida;
- saúde;
- segurança;
- dignidade;
- direitos;
- serviço essencial;
- meio ambiente;
- território;
- patrimônio;
- continuidade institucional;
- confiança pública.

## 8. Sinal

Sinal será uma indicação de que determinada condição poderá estar ocorrendo.

Um sinal não deverá ser confundido automaticamente com fato confirmado.

## 9. Alerta

Alerta será a comunicação de que um sinal, condição ou evento exige atenção.

## 10. Alarme

Alarme será uma indicação de que ação imediata ou quase imediata poderá ser necessária.

## 11. Anomalia

Anomalia será o desvio em relação ao comportamento esperado.

Ela poderá indicar:

- erro;
- fraude;
- falha;
- mudança legítima;
- ataque;
- saturação;
- evento externo;
- transformação do contexto.

## 12. Ocorrência

Ocorrência será um evento ou conjunto de eventos que receberá acompanhamento operacional.

## 13. Incidente

Incidente será uma ocorrência que comprometa ou ameace:

- operação;
- segurança;
- qualidade;
- dados;
- recursos;
- pessoas;
- serviços;
- compromissos.

## 14. Incidente menor

Um incidente poderá ser menor quando:

- possuir impacto limitado;
- estiver contido;
- puder ser tratado por capacidade ordinária;
- não ameaçar continuidade relevante;
- não exigir autoridade extraordinária.

## 15. Incidente significativo

Será significativo quando exigir:

- coordenação ampliada;
- especialista;
- comunicação;
- contingência;
- acompanhamento institucional;
- recuperação estruturada.

## 16. Incidente maior

Será maior quando:

- atravessar organizações;
- afetar serviço crítico;
- ameaçar muitas pessoas;
- ultrapassar a equipe ordinária;
- exigir mobilização relevante;
- produzir consequências prolongadas.

## 17. Incidente não é automaticamente crise

Um incidente grave poderá ser tratado sem crise institucional quando existirem:

- capacidade;
- autoridade;
- procedimentos;
- recursos;
- coordenação;
- confiança;
- continuidade suficiente.

## 18. Operação crítica

Operação crítica será aquela em que falhas poderão produzir consequências graves ou irreversíveis.

## 19. Criticidade intrínseca

Algumas operações serão críticas por sua própria natureza, como aquelas relacionadas a:

- vida;
- saúde;
- segurança;
- energia;
- água;
- comunicações;
- identidade;
- finanças essenciais;
- infraestrutura;
- resposta emergencial.

## 20. Criticidade contextual

Uma operação ordinária poderá tornar-se crítica em determinado contexto.

Isso poderá ocorrer por:

- perda de alternativa;
- aumento de demanda;
- falha de dependência;
- território isolado;
- evento simultâneo;
- redução de capacidade;
- mudança normativa;
- população vulnerável.

## 21. Criticidade temporal

A criticidade poderá variar ao longo do tempo.

Uma interrupção tolerável por minutos poderá tornar-se crítica quando prolongada.

## 22. Criticidade territorial

A mesma falha poderá possuir efeitos diferentes conforme:

- população;
- infraestrutura;
- clima;
- acesso;
- alternativas;
- geografia;
- vulnerabilidade;
- capacidade local.

## 23. Criticidade humana

A criticidade deverá considerar não apenas número de afetados, mas:

- vulnerabilidade;
- dependência;
- exposição;
- capacidade de proteção;
- possibilidade de reparação;
- dignidade;
- direitos.

## 24. Serviço crítico

Serviço crítico será aquele cuja indisponibilidade poderá comprometer funções essenciais.

## 25. Recurso crítico

Recurso crítico será aquele cuja falta afete capacidade indispensável.

## 26. Dependência crítica

Dependência crítica será aquela cuja falha poderá interromper ou degradar significativamente uma operação.

## 27. Pessoa-chave em crise

Uma pessoa poderá tornar-se crítica quando concentrar conhecimento, autoridade ou competência essencial.

Essa condição deverá ser tratada como risco.

## 28. Autoridade crítica

Uma autoridade será crítica quando determinadas decisões não puderem ser legitimamente tomadas sem sua participação ou substituição formal.

## 29. Dado crítico

Dado crítico será aquele necessário para:

- proteger pessoas;
- compreender o evento;
- decidir;
- executar;
- recuperar;
- comprovar;
- prestar contas.

## 30. Tempo crítico

Tempo crítico será o intervalo dentro do qual uma ação deverá ocorrer para evitar aumento relevante do dano.

## 31. Operação ordinária

A operação ordinária utilizará:

- autoridades regulares;
- processos estabelecidos;
- escalas normais;
- capacidades planejadas;
- controles permanentes;
- níveis comuns de supervisão.

## 32. Desvio operacional

Um desvio ocorrerá quando a operação real afastar-se do comportamento esperado.

## 33. Contingência

Contingência será a utilização planejada de meios alternativos diante da indisponibilidade ou inadequação do modo normal.

## 34. Contingência não é crise

Uma contingência bem preparada poderá preservar o serviço sem produzir crise.

## 35. Operação degradada

Operação degradada será a preservação deliberada de funções essenciais com redução de:

- capacidade;
- qualidade;
- cobertura;
- desempenho;
- automação;
- funcionalidades;
- conveniência.

## 36. Emergência

Emergência será a condição que exige resposta rápida para proteger vida, saúde, segurança, direitos, ambiente ou continuidade essencial.

## 37. Emergência declarada

A emergência declarada será reconhecida formalmente por autoridade competente.

## 38. Emergência percebida

A pessoa poderá perceber uma emergência antes de sua declaração formal.

Ela deverá poder iniciar medidas imediatas previstas para proteção.

## 39. Emergência súbita

Poderá surgir sem aviso suficiente, exigindo reação imediata.

## 40. Emergência progressiva

Poderá desenvolver-se gradualmente por:

- deterioração;
- saturação;
- acúmulo de falhas;
- agravamento ambiental;
- conflito;
- perda de recursos;
- enfraquecimento institucional.

## 41. Emergência localizada

Será localizada quando seus efeitos estiverem contidos em:

- unidade;
- equipe;
- serviço;
- instalação;
- comunidade;
- território delimitado.

## 42. Emergência distribuída

Será distribuída quando afetar simultaneamente múltiplos pontos ou organizações.

## 43. Emergência prolongada

Será prolongada quando atravessar múltiplos turnos, exigir substituições e consumir reservas.

## 44. Emergência complexa

Será complexa quando combinar dimensões:

- humanas;
- tecnológicas;
- territoriais;
- ambientais;
- econômicas;
- jurídicas;
- institucionais;
- comunicacionais.

## 45. Emergência social

Poderá envolver:

- desabrigo;
- fome;
- violência;
- deslocamento;
- exclusão;
- ruptura comunitária;
- ausência de serviços;
- vulnerabilidade ampliada.

## 46. Emergência ambiental

Poderá envolver:

- enchente;
- incêndio;
- contaminação;
- deslizamento;
- seca;
- tempestade;
- perda de recursos naturais;
- evento climático extremo.

## 47. Emergência tecnológica

Poderá envolver:

- falha sistêmica;
- interrupção de infraestrutura;
- comprometimento de dados;
- ataque;
- indisponibilidade de comunicação;
- automação descontrolada;
- erro de integração.

## 48. Emergência sanitária

Poderá envolver:

- surto;
- epidemia;
- exposição;
- contaminação;
- falha assistencial;
- saturação de atendimento;
- risco coletivo à saúde.

## 49. Emergência institucional

Poderá envolver perda ou conflito de:

- autoridade;
- legitimidade;
- liderança;
- governança;
- capacidade decisória;
- confiança;
- continuidade jurídica.

## 50. Emergência financeira

Poderá ocorrer quando a ausência, indisponibilidade ou desvio de recursos ameaçar operações essenciais.

## 51. Emergência de segurança

Poderá envolver ameaça:

- física;
- digital;
- informacional;
- patrimonial;
- institucional;
- territorial;
- pessoal.

## 52. Crise

Crise será uma condição em que a capacidade ordinária de compreender, decidir, coordenar ou agir se torna insuficiente diante da gravidade, incerteza ou velocidade do contexto.

## 53. Crise como ruptura de equilíbrio

A crise ocorrerá quando houver desequilíbrio relevante entre:

- demanda e capacidade;
- risco e proteção;
- informação e incerteza;
- autoridade e necessidade;
- recursos e impacto;
- expectativa e realidade.

## 54. Crise operacional

Afetará a capacidade de executar e sustentar serviços.

## 55. Crise institucional

Afetará:

- legitimidade;
- autoridade;
- governança;
- confiança;
- identidade;
- coerência;
- capacidade de decidir.

## 56. Crise de confiança

Ocorrerá quando pessoas ou organizações deixarem de acreditar na:

- verdade;
- competência;
- integridade;
- responsabilidade;
- comunicação;
- capacidade de reparação da instituição.

## 57. Crise reputacional

Poderá surgir quando fatos, percepções ou comunicações afetarem profundamente a confiança pública.

## 58. Crise de liderança

Poderá ocorrer diante de:

- vacância;
- conflito;
- incapacidade;
- abuso;
- falta de legitimidade;
- comunicação contraditória;
- decisão paralisada.

## 59. Crise de coordenação

Ocorrerá quando as partes não conseguirem alinhar:

- contexto;
- prioridades;
- decisões;
- recursos;
- responsabilidades;
- comunicação;
- execução.

## 60. Crise de informação

Poderá ocorrer quando:

- dados forem insuficientes;
- fontes divergirem;
- sistemas falharem;
- desinformação se espalhar;
- informações críticas forem ocultadas;
- ninguém conseguir estabelecer quadro confiável.

## 61. Crise de capacidade

Ocorrerá quando a demanda ultrapassar de forma relevante e persistente as capacidades disponíveis.

## 62. Crise de continuidade

Ocorrerá quando não houver meios suficientes para preservar serviços ou resultados essenciais.

## 63. Crise ética

Poderá ocorrer quando as escolhas disponíveis envolverem conflitos graves de valores, direitos, deveres ou consequências.

## 64. Crise jurídica

Poderá ocorrer quando:

- competências forem contestadas;
- normas entrarem em conflito;
- decisões forem suspensas;
- autoridades divergirem;
- operação perder fundamento;
- obrigações se tornarem incompatíveis.

## 65. Crise federada

Será federada quando atravessar múltiplas organizações autônomas.

## 66. Crise sistêmica

Será sistêmica quando afetar relações fundamentais do ecossistema e puder propagar-se amplamente.

## 67. Crise simultânea

Múltiplas crises poderão ocorrer ao mesmo tempo.

A arquitetura deverá impedir que a atenção total a uma delas torne as demais invisíveis.

## 68. Crise em cascata

Uma crise poderá desencadear outras por meio de dependências.

## 69. Crise silenciosa

Algumas crises poderão desenvolver-se sem sinais visíveis ao público, como:

- perda de conhecimento;
- deterioração financeira;
- corrupção de dados;
- fadiga institucional;
- concentração de poder;
- falhas de governança.

## 70. Crise reconhecida tardiamente

O reconhecimento tardio poderá ampliar:

- dano;
- custo;
- perda de confiança;
- dificuldade de recuperação;
- número de afetados;
- necessidade de autoridade extraordinária.

## 71. Crise não declarada

A ausência de declaração formal não elimina a realidade da crise.

## 72. Crise declarada

A declaração deverá reconhecer formalmente que a resposta ordinária é insuficiente ou inadequada.

## 73. Crise e percepção pública

A percepção pública poderá diferir da classificação interna.

A comunicação deverá reconhecer preocupações legítimas sem criar pânico ou falsa tranquilidade.

## 74. Desastre

Desastre será uma ruptura grave capaz de causar perdas humanas, materiais, ambientais, econômicas ou institucionais superiores à capacidade ordinária de resposta local.

## 75. Desastre natural

Será relacionado predominantemente a fenômenos ambientais, sem ignorar fatores humanos de vulnerabilidade e preparação.

## 76. Desastre tecnológico

Poderá resultar de:

- falha industrial;
- interrupção ampla;
- comprometimento de infraestrutura;
- acidente;
- ataque;
- erro sistêmico;
- automação inadequada.

## 77. Desastre humano

Poderá resultar de ação, omissão, conflito, violência, negligência ou falha institucional.

## 78. Desastre composto

Poderá combinar eventos naturais, tecnológicos, sociais e institucionais.

## 79. Desastre territorial

Afetará determinado território, podendo exigir apoio externo e coordenação entre organizações.

## 80. Desastre distribuído

Poderá afetar simultaneamente territórios não contíguos.

## 81. Desastre de longa duração

Poderá exigir meses ou anos de resposta, recuperação e reconstrução.

## 82. Calamidade

Calamidade será uma condição excepcional reconhecida por autoridade competente, segundo os fundamentos jurídicos aplicáveis.

## 83. Estado de calamidade e sistema interno

A Plataforma UNO deverá distinguir declarações oficiais externas de seus próprios estados operacionais.

## 84. Colapso

Colapso será a perda ampla da capacidade de uma estrutura cumprir sua função essencial.

## 85. Colapso parcial

Poderá atingir apenas:

- serviço;
- território;
- organização;
- cadeia;
- infraestrutura;
- capacidade;
- autoridade.

## 86. Colapso sistêmico

Ocorrerá quando múltiplas funções essenciais deixarem de sustentar umas às outras.

## 87. Evitar linguagem inflacionada

Termos como “crise”, “desastre” e “colapso” não deverão ser utilizados para qualquer desvio ordinário.

## 88. Gravidade da linguagem

A classificação deverá orientar comportamento, autoridade, recursos, comunicação e prestação de contas.

## 89. Modo operacional

Modo operacional será uma configuração governada que altera como a organização percebe, decide, coordena e executa.

## 90. Modo normal

O modo normal utilizará processos, autoridades e capacidades ordinários.

## 91. Modo de atenção

Será ativado quando sinais exigirem observação ampliada sem alterar profundamente a operação.

## 92. Modo de alerta

Será ativado quando houver probabilidade relevante de impacto e necessidade de preparação.

## 93. Modo de prontidão

Preparará capacidades e pessoas para possível mobilização.

## 94. Modo de contingência

Utilizará meios alternativos para preservar a continuidade.

## 95. Modo degradado

Preservará funções essenciais com capacidade ou qualidade reduzida.

## 96. Modo de emergência

Permitirá resposta rápida dentro de autoridade extraordinária limitada.

## 97. Modo de crise

Estabelecerá coordenação, governança e ciclos de decisão ampliados.

## 98. Modo de desastre

Mobilizará resposta interorganizacional e territorial proporcional à ruptura existente.

## 99. Modo de recuperação

Coordenará restauração, reconstrução, reparação e retorno.

## 100. Modo de transição

Permitirá passagem controlada entre estados extraordinários e normais.

## 101. Modo extraordinário

Modo extraordinário será qualquer configuração temporária que altere significativamente:

- autoridade;
- prioridades;
- processos;
- controles;
- recursos;
- escalas;
- acessos;
- comunicação;
- supervisão.

## 102. Extraordinário não significa sem regra

O modo extraordinário deverá possuir regras ainda mais claras sobre:

- ativação;
- autoridade;
- limites;
- evidências;
- duração;
- revisão;
- encerramento.

## 103. Temporalidade da exceção

Toda exceção deverá possuir início, validade e condição de encerramento.

## 104. Escopo da exceção

A exceção deverá limitar-se a:

- operação;
- território;
- organização;
- recurso;
- período;
- finalidade;
- ação necessária.

## 105. Proporcionalidade

A intensidade das medidas deverá corresponder à gravidade e à necessidade.

## 106. Necessidade

Uma medida extraordinária somente deverá ser utilizada quando meios ordinários forem insuficientes, inadequados ou lentos diante do risco.

## 107. Adequação

A medida deverá ser capaz de contribuir de forma razoável para o resultado pretendido.

## 108. Menor restrição legítima

Entre alternativas adequadas, deverá ser escolhida aquela que preserve mais direitos, autonomia e continuidade sem comprometer a proteção necessária.

## 109. Reversibilidade

Medidas extraordinárias deverão ser reversíveis sempre que possível.

## 110. Revisão periódica

A permanência da medida deverá ser reavaliada em intervalos compatíveis com a velocidade da situação.

## 111. Encerramento automático

Quando possível, autoridades e acessos extraordinários deverão expirar automaticamente.

## 112. Renovação explícita

A continuidade além do período inicial deverá exigir nova justificativa e autoridade.

## 113. Normalização da exceção

Será considerada falha grave permitir que controles extraordinários se tornem permanentes sem análise e legitimação apropriadas.

## 114. Dívida extraordinária

Atalhos, permissões, processos manuais e controles temporários deverão ser registrados como dívida a ser tratada.

## 115. Princípio da vida

A proteção da vida deverá orientar a priorização.

## 116. Princípio da dignidade

Pessoas afetadas não deverão ser tratadas como obstáculos, números ou objetos de controle.

## 117. Princípio da verdade

A organização deverá comunicar o que sabe, o que não sabe e o que está fazendo para compreender.

## 118. Princípio da prudência

A resposta deverá equilibrar velocidade, incerteza, proteção, reversibilidade e consequências.

## 119. Princípio da responsabilidade

Toda decisão extraordinária deverá possuir responsável identificável.

## 120. Princípio da legitimidade

A autoridade deverá derivar de fundamento reconhecido, não apenas de capacidade técnica ou acesso privilegiado.

## 121. Princípio da continuidade

A resposta deverá preservar funções essenciais durante e após a crise.

## 122. Princípio da subsidiariedade

A decisão deverá permanecer no nível mais próximo capaz de agir com legitimidade.

## 123. Princípio da solidariedade

Organizações com capacidade deverão apoiar aquelas ultrapassadas pelo contexto.

## 124. Princípio da não exploração

A crise não deverá ser utilizada para obter vantagem indevida sobre pessoas, comunidades ou organizações.

## 125. Princípio da transparência proporcional

A organização deverá comunicar o necessário sem expor dados, vulnerabilidades ou operações de forma irresponsável.

## 126. Princípio da rastreabilidade

A urgência não deverá impedir registro suficiente de decisões e ações.

## 127. Princípio da prestação de contas

Autoridades extraordinárias deverão prestar contas após e, quando possível, durante seu exercício.

## 128. Princípio da memória

A crise deverá produzir memória suficiente para compreensão, reparação e aprendizagem.

## 129. Princípio da recuperação humana

A recuperação deverá incluir pessoas, equipes, comunidades e confiança, não apenas sistemas.

## 130. Princípio da evolução

A experiência deverá fortalecer a capacidade futura de perceber, responder e proteger.

## 131. Direitos em crise

Direitos poderão estar sujeitos a medidas legítimas previstas em lei, mas não deverão ser ignorados ou eliminados por conveniência.

## 132. Grupos vulneráveis

A resposta deverá identificar impactos diferentes sobre:

- crianças;
- idosos;
- pessoas com deficiência;
- pessoas doentes;
- pessoas em situação de rua;
- comunidades isoladas;
- grupos discriminados;
- pessoas sem acesso digital;
- trabalhadores expostos.

## 133. Acessibilidade em crise

Alertas, orientações, serviços e canais deverão ser acessíveis.

## 134. Linguagem simples

A comunicação pública deverá evitar termos técnicos incompreensíveis quando a população precisar agir.

## 135. Múltiplos canais

A comunicação deverá considerar:

- aplicativo;
- telefone;
- mensagem;
- rádio;
- presencial;
- sirene;
- televisão;
- internet;
- redes comunitárias;
- autoridades locais.

## 136. Falha de conectividade

Planos deverão considerar que meios digitais poderão estar indisponíveis.

## 137. Participação comunitária

Comunidades deverão ser reconhecidas como fontes de:

- percepção;
- conhecimento territorial;
- recursos;
- comunicação;
- cuidado;
- recuperação;
- legitimidade.

## 138. Lideranças comunitárias

Lideranças locais poderão apoiar a resposta, mas sua representação deverá ser legítima e contextual.

## 139. Conhecimento territorial

Planos gerais deverão ser adaptados à realidade do território.

## 140. Não discriminação na resposta

A prioridade não deverá ser influenciada ilegitimamente por:

- riqueza;
- influência;
- proximidade;
- origem;
- raça;
- religião;
- gênero;
- posição política;
- acesso tecnológico.

## 141. Triagem em crise

Quando não houver capacidade para atender simultaneamente a todos, a triagem deverá utilizar critérios:

- éticos;
- transparentes;
- técnicos;
- proporcionais;
- revisáveis;
- protegidos contra discriminação.

## 142. Escassez

A escassez deverá ser declarada quando os recursos disponíveis não forem suficientes para todas as necessidades relevantes.

## 143. Racionamento

O racionamento deverá possuir:

- fundamento;
- critérios;
- autoridade;
- duração;
- comunicação;
- revisão;
- proteção de vulneráveis;
- prestação de contas.

## 144. Priorização crítica

A priorização deverá considerar:

- vida;
- urgência;
- impacto;
- vulnerabilidade;
- irreversibilidade;
- dependências;
- continuidade;
- capacidade de benefício;
- equidade.

## 145. Escassez não fabricada

A organização deverá investigar se a escassez resulta de:

- retenção;
- fraude;
- concentração;
- planejamento deficiente;
- falha logística;
- manipulação;
- dependência evitável.

## 146. Conflito de prioridades

Quando prioridades legítimas competirem, a decisão deverá registrar:

- alternativas;
- critérios;
- consequências;
- responsáveis;
- revisão possível.

## 147. Decisão trágica

Algumas situações poderão não possuir alternativa sem dano.

A instituição deverá preservar:

- humanidade;
- transparência;
- apoio;
- responsabilidade;
- registro;
- reparação possível;
- aprendizagem.

## 148. Incerteza

A crise poderá exigir ação antes de existir certeza completa.

## 149. Hipóteses operacionais

Hipóteses deverão ser registradas com:

- fundamento;
- confiança;
- risco;
- condição de validação;
- responsável;
- prazo de revisão.

## 150. Precaução

Quando houver risco de dano grave ou irreversível, a ausência de certeza não deverá impedir medidas proporcionais de proteção.

## 151. Evitar paralisia

A prudência não deverá ser confundida com incapacidade de decidir.

## 152. Evitar impulsividade

A urgência não deverá justificar ação sem propósito, autoridade ou avaliação mínima de consequência.

## 153. Informação incompleta

A organização deverá distinguir:

- confirmado;
- provável;
- possível;
- não verificado;
- contraditório;
- desconhecido;
- descartado.

## 154. Boato

Boatos deverão ser monitorados quando puderem afetar comportamento, confiança ou segurança.

## 155. Desinformação

Conteúdo falso ou enganoso deverá ser tratado por meio de:

- verificação;
- comunicação;
- correção;
- transparência;
- coordenação;
- proteção contra manipulação.

## 156. Informação sensível

A crise não eliminará a necessidade de proteger:

- dados pessoais;
- segredos legítimos;
- investigações;
- infraestrutura crítica;
- rotas protegidas;
- pessoas em risco.

## 157. Evidência em crise

Registros deverão ser preservados mesmo quando processos ordinários precisarem ser simplificados.

## 158. Registro mínimo extraordinário

Toda ação extraordinária deverá registrar, no mínimo:

- quem;
- quando;
- o quê;
- por quê;
- com qual autoridade;
- sobre qual objeto;
- com qual resultado.

## 159. Reconstrução posterior

Quando não for possível registrar em tempo real, a operação deverá reconstruir os fatos assim que houver segurança e capacidade.

## 160. Simulação

Todo exercício, cenário, dado ou comunicação fictícia deverá ser identificado claramente como:

**SIMULAÇÃO**

## 161. Separação entre exercício e realidade

Ambientes, canais, identidades e registros de simulação deverão evitar confusão com uma crise real.

## 162. Interrupção da simulação

Uma emergência real deverá encerrar ou suspender imediatamente o exercício quando houver risco de confusão ou consumo indevido de capacidade.

## 163. Objetivo dos exercícios

Simulações deverão testar:

- percepção;
- classificação;
- autoridade;
- coordenação;
- comunicação;
- execução;
- handover;
- recuperação;
- encerramento.

## 164. Segurança psicológica nos exercícios

Participantes deverão saber que o cenário é fictício e possuir apoio proporcional à intensidade.

## 165. Não manipulação pelo medo

Simulações e comunicações não deverão utilizar medo de forma irresponsável para induzir obediência ou adesão.

## 166. Invariante da excepcionalidade

Todo modo extraordinário deverá permanecer limitado à necessidade que o justificou.

## 167. Invariante da temporalidade

Toda autoridade, permissão e medida extraordinária deverá possuir duração e revisão.

## 168. Invariante da responsabilidade

Toda decisão de crise deverá possuir autoria institucional reconhecível.

## 169. Invariante da dignidade

Nenhuma emergência deverá apagar a condição humana das pessoas afetadas ou mobilizadas.

## 170. Invariante da verdade

A organização não deverá ocultar gravidade nem fabricar segurança inexistente.

## 171. Invariante da continuidade futura

A resposta atual não deverá consumir de modo irresponsável toda a capacidade necessária às fases seguintes.

## 172. Invariante do retorno

Todo modo extraordinário deverá possuir condições para redução, transição e encerramento.

## 173. Invariante da não apropriação

Nenhuma organização ou liderança deverá utilizar a crise para concentrar permanentemente poderes, dados, recursos ou oportunidades.

## 174. Preparação para o Lote 2

Os próximos controles deverão aprofundar:

- detecção;
- reconhecimento;
- classificação;
- declaração;
- ativação;
- escalonamento;
- critérios;
- estados;
- gatilhos;
- revisão.

## 175. Resultado do Lote 1

Ao final desta camada, a Plataforma UNO deverá ser capaz de distinguir:

- evento;
- sinal;
- alerta;
- anomalia;
- incidente;
- contingência;
- emergência;
- crise;
- desastre;
- calamidade;
- colapso;
- modo extraordinário.

A organização deverá compreender que a crise não começa no momento em que alguém pronuncia essa palavra.

Ela começa quando a realidade ultrapassa, ameaça ultrapassar ou desorganiza a capacidade ordinária de:

- perceber;
- compreender;
- decidir;
- coordenar;
- executar;
- proteger;
- continuar.

Reconhecer corretamente essa mudança será o primeiro ato de responsabilidade extraordinária.

---

# Lote 2 — Detecção, Reconhecimento, Classificação, Declaração, Ativação e Escalonamento

## 176. Propósito deste lote

Este lote estabelece como a Plataforma UNO deverá:

- perceber sinais;
- integrar informações;
- reconhecer condições críticas;
- classificar gravidade;
- declarar estados;
- ativar modos extraordinários;
- mobilizar capacidades;
- escalonar decisões;
- revisar continuamente a situação.

## 177. Percepção crítica

A percepção crítica será a capacidade de identificar mudanças capazes de ameaçar pessoas, operações, organizações ou territórios.

## 178. Percepção distribuída

Sinais poderão ser percebidos por:

- pessoas;
- equipes;
- comunidades;
- organizações;
- agentes;
- sensores;
- sistemas;
- auditorias;
- parceiros;
- autoridades;
- meios públicos.

## 179. Nenhuma fonte isolada como verdade absoluta

Cada fonte poderá possuir:

- alcance;
- precisão;
- atraso;
- viés;
- contexto;
- limitações;
- possibilidade de comprometimento.

## 180. Sinais humanos

Pessoas poderão perceber:

- comportamento incomum;
- ruído;
- cheiro;
- falha;
- mudança social;
- ameaça;
- sofrimento;
- risco territorial;
- conflito;
- perda de confiança.

## 181. Sinais técnicos

Sistemas poderão indicar:

- indisponibilidade;
- erro;
- saturação;
- latência;
- perda de integridade;
- acesso indevido;
- alteração de configuração;
- falha de dependência;
- comportamento anômalo.

## 182. Sinais institucionais

Poderão incluir:

- ausência de autoridade;
- decisão contraditória;
- conflito de competência;
- descumprimento;
- comunicação divergente;
- perda de legitimidade;
- fraude;
- ruptura contratual.

## 183. Sinais territoriais

Poderão incluir:

- isolamento;
- interrupção de transporte;
- enchente;
- incêndio;
- violência;
- falta de energia;
- falha de comunicação;
- deslocamento populacional;
- escassez.

## 184. Sinais sociais

Poderão incluir:

- aumento de solicitações;
- desinformação;
- pânico;
- conflito;
- protesto;
- desabrigo;
- fome;
- violência;
- ruptura comunitária.

## 185. Sinais humanos da operação

As equipes poderão apresentar:

- fadiga;
- saturação;
- erros repetidos;
- ausência;
- incapacidade de decidir;
- perda de coordenação;
- conflito;
- abandono de registros;
- pedidos de ajuda.

## 186. Sinal fraco

Um sinal fraco poderá parecer insuficiente isoladamente, mas adquirir relevância quando relacionado a outros.

## 187. Combinação de sinais

A Plataforma UNO deverá correlacionar sinais para reconhecer padrões emergentes.

## 188. Sinal persistente

A repetição de um desvio deverá aumentar a atenção, mesmo quando cada ocorrência isolada possuir baixo impacto.

## 189. Sinal silencioso

Alguns sinais poderão aparecer apenas em:

- mudanças de comportamento;
- pequenos atrasos;
- perda gradual de qualidade;
- aumento de exceções;
- redução de transparência;
- concentração de autoridade;
- desgaste humano.

## 190. Ausência de sinal

A ausência de telemetria poderá significar:

- normalidade;
- falha de observação;
- perda de comunicação;
- comprometimento;
- desligamento;
- ocultação.

## 191. Integridade da percepção

A operação deverá avaliar se os mecanismos de percepção estão funcionando antes de concluir que não existe problema.

## 192. Cobertura de detecção

Cada risco crítico deverá possuir fontes capazes de perceber sua manifestação.

## 193. Lacuna de detecção

Toda condição crítica sem mecanismo de percepção suficiente deverá ser registrada como lacuna.

## 194. Tempo de detecção

A operação deverá definir quanto tempo poderá decorrer entre o início de determinada condição e sua identificação.

## 195. Sensibilidade

A sensibilidade deverá ser suficiente para reconhecer eventos relevantes sem produzir quantidade insustentável de falsos alertas.

## 196. Especificidade

Os controles deverão distinguir, quando possível, eventos críticos de variações legítimas.

## 197. Falso positivo

Um falso positivo ocorrerá quando um alerta indicar condição que não se confirma.

## 198. Falso negativo

Um falso negativo ocorrerá quando uma condição relevante não for detectada.

## 199. Custo do falso positivo

Poderá incluir:

- mobilização desnecessária;
- fadiga;
- interrupção;
- perda de confiança;
- custo;
- dessensibilização.

## 200. Custo do falso negativo

Poderá incluir:

- atraso;
- dano;
- propagação;
- perda de evidência;
- aumento da crise;
- impossibilidade de recuperação.

## 201. Calibração contextual

A detecção deverá ser calibrada segundo:

- criticidade;
- território;
- horário;
- estado;
- capacidade;
- população afetada;
- histórico;
- tolerância ao risco.

## 202. Limiar

Um limiar deverá indicar quando determinado sinal exige:

- observação;
- verificação;
- alerta;
- ação;
- escalonamento;
- declaração.

## 203. Limiar estático

Poderá ser utilizado quando houver limite fixo tecnicamente ou normativamente definido.

## 204. Limiar dinâmico

Poderá adaptar-se ao comportamento e ao contexto.

Sua lógica deverá permanecer explicável e governada.

## 205. Limiar composto

Poderá combinar:

- quantidade;
- duração;
- velocidade;
- impacto;
- dependências;
- localização;
- vulnerabilidade;
- confiança da evidência.

## 206. Limiar humano

Pessoas deverão poder escalonar uma situação antes que o limite automatizado seja alcançado.

## 207. Automação não bloqueia percepção humana

O fato de um painel apresentar estado normal não deverá invalidar alerta fundamentado de uma pessoa ou comunidade.

## 208. Direito de alertar

Qualquer participante deverá possuir canal para comunicar risco relevante.

## 209. Alerta de boa-fé

O alerta de boa-fé deverá ser recebido e analisado sem retaliação indevida.

## 210. Alerta anônimo

Quando necessário, poderão existir meios de alerta protegido ou anônimo, preservando capacidade de verificação.

## 211. Origem do alerta

Todo alerta deverá registrar, conforme autorização:

- fonte;
- horário;
- canal;
- localização;
- descrição;
- evidências;
- confiança;
- urgência.

## 212. Triagem inicial

A triagem deverá verificar:

- o que ocorreu;
- quem poderá estar em risco;
- onde;
- quando;
- qual impacto;
- qual evidência;
- qual ação imediata;
- quem deve ser informado.

## 213. Triagem não encerra investigação

A classificação inicial deverá permanecer revisável.

## 214. Triagem humana

Eventos de grande impacto deverão possuir análise humana responsável, ainda que a detecção seja automatizada.

## 215. Triagem automatizada

A automação poderá:

- correlacionar;
- classificar;
- deduplicar;
- enriquecer;
- priorizar;
- encaminhar;
- recomendar.

## 216. Limites da triagem automatizada

A automação não deverá encerrar silenciosamente alertas críticos apenas por baixa pontuação.

## 217. Deduplicação

Alertas sobre o mesmo evento deverão ser relacionados sem apagar fontes independentes.

## 218. Correlação

A correlação deverá preservar o vínculo entre sinais, hipóteses e evento principal.

## 219. Enriquecimento

O alerta poderá receber dados sobre:

- território;
- serviço;
- dependências;
- organizações;
- pessoas afetadas;
- histórico;
- procedimentos;
- autoridades;
- recursos.

## 220. Validação inicial

A validação deverá buscar confirmar se a condição:

- existe;
- permanece;
- possui impacto;
- está contida;
- está se ampliando;
- exige ação.

## 221. Validação não deve atrasar proteção

Quando houver risco grave, medidas preventivas proporcionais poderão ser iniciadas antes da confirmação completa.

## 222. Princípio da precaução operacional

A ausência de certeza não deverá impedir ação reversível destinada a evitar dano grave.

## 223. Fonte primária

Fonte primária será aquela que observou ou registrou diretamente a condição.

## 224. Fonte secundária

Fonte secundária reproduzirá, interpretará ou agregará informação de outra origem.

## 225. Confiança da fonte

A confiança deverá considerar:

- histórico;
- proximidade;
- método;
- integridade;
- competência;
- interesse;
- independência;
- confirmação.

## 226. Fonte comprometida

Uma fonte anteriormente confiável poderá estar indisponível, equivocada ou comprometida.

## 227. Evidência convergente

Múltiplas fontes independentes poderão aumentar a confiança sobre a condição.

## 228. Evidência divergente

Divergências deverão ser preservadas e investigadas.

## 229. Hipótese operacional

A hipótese deverá orientar verificação sem ser apresentada como verdade estabelecida.

## 230. Quadro situacional inicial

O quadro deverá registrar:

- evento;
- território;
- tempo;
- afetados;
- serviços;
- impactos;
- evidências;
- hipóteses;
- riscos;
- ações;
- responsáveis.

## 231. Reconhecimento

Reconhecimento será a conclusão de que existe condição suficientemente relevante para receber tratamento coordenado.

## 232. Reconhecimento local

Poderá ser realizado por equipe ou organização competente dentro de seu domínio.

## 233. Reconhecimento federado

Será necessário quando a condição atravessar organizações, territórios ou responsabilidades.

## 234. Reconhecimento automático limitado

Sistemas poderão reconhecer estados pré-definidos, mas deverão possuir supervisão proporcional ao impacto.

## 235. Reconhecimento comunitário

Comunidades poderão reconhecer situações antes das estruturas formais.

A operação deverá saber escutá-las e validar sem desconsideração automática.

## 236. Reconhecimento tardio

Atrasos deverão ser analisados para identificar falhas de:

- detecção;
- cultura;
- comunicação;
- autoridade;
- incentivo;
- confiança;
- escalonamento;
- tecnologia.

## 237. Negação institucional

Será risco grave quando evidências forem ignoradas para preservar:

- reputação;
- resultado financeiro;
- autoridade;
- aparência de normalidade;
- interesse particular.

## 238. Minimização indevida

Reduzir artificialmente a gravidade poderá impedir mobilização e ampliar dano.

## 239. Alarmismo indevido

Aumentar artificialmente a gravidade poderá produzir:

- pânico;
- mobilização excessiva;
- fadiga;
- perda de confiança;
- uso indevido de autoridade;
- desperdício de recursos.

## 240. Classificação

A classificação deverá traduzir a realidade em categorias capazes de orientar ação.

## 241. Dimensões da classificação

Deverão ser consideradas:

- impacto;
- urgência;
- abrangência;
- duração;
- velocidade;
- complexidade;
- reversibilidade;
- incerteza;
- capacidade;
- dependências;
- vulnerabilidade;
- confiança.

## 242. Impacto humano

Deverá considerar:

- vidas ameaçadas;
- pessoas feridas;
- saúde;
- deslocamento;
- vulnerabilidade;
- dignidade;
- sofrimento;
- perda de acesso.

## 243. Impacto operacional

Deverá considerar:

- serviços;
- capacidade;
- qualidade;
- filas;
- equipes;
- dependências;
- recuperação;
- compromissos.

## 244. Impacto territorial

Deverá considerar:

- área;
- população;
- acesso;
- infraestrutura;
- ambiente;
- serviços locais;
- comunicação;
- isolamento.

## 245. Impacto institucional

Deverá considerar:

- autoridade;
- legitimidade;
- confiança;
- contratos;
- governança;
- conformidade;
- continuidade jurídica.

## 246. Impacto informacional

Deverá considerar:

- perda;
- exposição;
- corrupção;
- indisponibilidade;
- desinformação;
- ausência de contexto;
- comprometimento de evidências.

## 247. Impacto financeiro

Deverá considerar:

- perdas;
- liquidez;
- fraude;
- custos;
- continuidade;
- pagamentos;
- reservas;
- obrigações.

## 248. Impacto ambiental

Deverá considerar:

- dano;
- contaminação;
- alcance;
- duração;
- reversibilidade;
- biodiversidade;
- recursos naturais;
- comunidades dependentes.

## 249. Urgência

A urgência deverá expressar quanto tempo existe antes que a ausência de ação aumente significativamente o dano.

## 250. Abrangência

A abrangência poderá ser:

- individual;
- local;
- organizacional;
- territorial;
- regional;
- nacional;
- federada;
- sistêmica.

## 251. Duração estimada

A duração deverá considerar:

- evento;
- resposta;
- estabilização;
- recuperação;
- efeitos residuais;
- reconstrução.

## 252. Velocidade de propagação

A velocidade deverá indicar quão rapidamente a condição atravessa:

- pessoas;
- sistemas;
- organizações;
- territórios;
- dependências;
- canais informacionais.

## 253. Complexidade

A complexidade aumentará quando houver:

- múltiplas causas;
- muitas organizações;
- informações contraditórias;
- autoridades diferentes;
- dependências ocultas;
- efeitos não lineares;
- objetivos conflitantes.

## 254. Reversibilidade

A classificação deverá considerar se decisões e danos poderão ser revertidos.

## 255. Incerteza

A incerteza deverá ser registrada como componente da criticidade.

## 256. Capacidade disponível

Um mesmo evento poderá receber classificação diferente conforme a capacidade real de resposta.

## 257. Vulnerabilidade dos afetados

A classificação deverá reconhecer que impactos semelhantes podem ser mais graves para grupos com menor capacidade de proteção e recuperação.

## 258. Dependências críticas

O risco de propagação deverá ampliar a classificação quando funções essenciais dependerem do elemento afetado.

## 259. Confiança situacional

A classificação deverá indicar o nível de confiança nas informações atuais.

## 260. Matriz de severidade

A Plataforma UNO poderá utilizar níveis como:

- nível 0 — informativo;
- nível 1 — atenção;
- nível 2 — alerta;
- nível 3 — incidente significativo;
- nível 4 — emergência;
- nível 5 — crise;
- nível 6 — desastre ou colapso sistêmico.

## 261. Nível 0 — Informativo

O evento deverá ser registrado e observado sem mobilização especial.

## 262. Nível 1 — Atenção

Haverá sinais que justificam observação ampliada e preparação inicial.

## 263. Nível 2 — Alerta

Existirá probabilidade relevante de impacto, exigindo prontidão e verificação.

## 264. Nível 3 — Incidente significativo

A capacidade ordinária será mobilizada de forma coordenada, podendo utilizar contingência.

## 265. Nível 4 — Emergência

A resposta deverá ser rápida, priorizada e poderá utilizar autoridade extraordinária limitada.

## 266. Nível 5 — Crise

A capacidade ordinária será insuficiente ou desorganizada, exigindo governança ampliada e coordenação institucional.

## 267. Nível 6 — Desastre ou colapso

Haverá ruptura ampla, necessidade de cooperação extraordinária e reconstrução prolongada.

## 268. Níveis não substituem contexto

A numeração deverá apoiar a compreensão sem reduzir a realidade a uma pontuação.

## 269. Classificação por domínio

Um evento poderá ser:

- nível 4 em segurança;
- nível 3 em operação;
- nível 2 em comunicação;
- nível 1 em finanças.

## 270. Classificação geral

A classificação geral deverá considerar as dimensões mais relevantes sem ocultar diferenças internas.

## 271. Classificação inicial

A primeira classificação poderá ser provisória.

## 272. Reclassificação

O nível deverá aumentar ou diminuir quando:

- novas evidências surgirem;
- impacto mudar;
- capacidade for mobilizada;
- propagação for contida;
- recuperação avançar;
- risco aumentar.

## 273. Reclassificação registrada

Toda mudança deverá indicar:

- nível anterior;
- nível atual;
- motivo;
- autoridade;
- evidências;
- consequências;
- horário.

## 274. Subclassificação proibida por conveniência

O nível não deverá ser reduzido apenas para evitar:

- comunicação;
- mobilização;
- auditoria;
- custos;
- obrigação;
- impacto reputacional.

## 275. Superclassificação proibida por interesse

O nível não deverá ser ampliado para justificar:

- concentração de poder;
- contratação indevida;
- vigilância;
- suspensão desnecessária;
- obtenção de recurso;
- benefício político.

## 276. Declaração

Declaração será o ato formal que reconhece determinado estado operacional extraordinário.

## 277. Finalidade da declaração

A declaração deverá:

- estabelecer realidade comum;
- ativar governança;
- mobilizar capacidades;
- definir autoridade;
- orientar comunicação;
- permitir controles;
- iniciar temporalidade;
- produzir prestação de contas.

## 278. Autoridade declaradora

Cada modo deverá possuir autoridade competente para declará-lo.

## 279. Autoridade substituta

Deverá existir substituto quando a autoridade primária estiver:

- indisponível;
- impedida;
- comprometida;
- afetada;
- em conflito;
- sem comunicação.

## 280. Declaração local

Poderá ser realizada por autoridade local dentro de seu território ou domínio.

## 281. Declaração federada

Deverá envolver coordenação entre organizações quando os efeitos e responsabilidades forem compartilhados.

## 282. Declaração institucional

Modos que alterem poderes, contratos, direitos ou governança deverão possuir fundamento institucional adequado.

## 283. Declaração técnica

Uma equipe técnica poderá reconhecer condição operacional, mas não deverá assumir autoridade institucional que não possui.

## 284. Declaração automática limitada

A automação poderá ativar proteções técnicas previamente autorizadas.

Não deverá declarar crise institucional por conta própria.

## 285. Conteúdo mínimo da declaração

A declaração deverá informar:

- condição;
- classificação;
- território;
- organizações;
- início;
- propósito;
- autoridade;
- responsáveis;
- medidas;
- limites;
- próxima revisão.

## 286. Objeto afetado

Deverão ser identificados:

- pessoas;
- serviços;
- organizações;
- territórios;
- sistemas;
- recursos;
- dependências;
- contratos.

## 287. Fundamento

A declaração deverá indicar:

- fatos;
- sinais;
- evidências;
- normas;
- políticas;
- contratos;
- autoridade;
- incertezas.

## 288. Objetivos iniciais

Os objetivos deverão ser claros e limitados, como:

- proteger vidas;
- conter propagação;
- estabilizar serviço;
- preservar evidências;
- mobilizar apoio;
- restaurar comunicação.

## 289. Medidas autorizadas

A declaração deverá especificar quais medidas extraordinárias poderão ser utilizadas.

## 290. Medidas proibidas

Quando necessário, deverá explicitar ações que permanecem vedadas.

## 291. Duração inicial

A declaração deverá possuir período inicial ou momento obrigatório de revisão.

## 292. Condições de renovação

A renovação deverá depender de:

- necessidade;
- evidências;
- autoridade;
- avaliação;
- limites;
- comunicação.

## 293. Condições de redução

Deverão ser definidos sinais que permitam diminuir o nível.

## 294. Condições de encerramento

A declaração deverá antecipar o que permitirá retornar a modo inferior ou normal.

## 295. Comunicação da declaração

Deverá alcançar:

- equipes;
- organizações;
- autoridades;
- parceiros;
- pessoas afetadas;
- público quando necessário.

## 296. Confirmação interna

Funções críticas deverão confirmar recebimento e compreensão.

## 297. Ativação

Ativação será o processo de colocar em funcionamento as capacidades previstas para o modo declarado.

## 298. Ativação não é apenas comunicação

Ela deverá produzir mudanças reais em:

- comando;
- equipes;
- prioridades;
- recursos;
- acessos;
- escalas;
- canais;
- procedimentos;
- registros.

## 299. Plano de ativação

Cada modo deverá possuir plano contendo:

- gatilho;
- autoridade;
- ações;
- responsáveis;
- recursos;
- comunicação;
- tempos;
- verificações;
- contingências.

## 300. Ativação parcial

Poderá ocorrer em:

- território;
- serviço;
- organização;
- componente;
- equipe;
- período delimitado.

## 301. Ativação progressiva

A resposta poderá crescer por etapas conforme o contexto.

## 302. Ativação imediata

Medidas automáticas de proteção poderão ser executadas imediatamente quando previamente autorizadas.

## 303. Ativação manual

Deverá ser utilizada quando o contexto exigir julgamento e confirmação.

## 304. Ativação assistida

A automação poderá preparar ações para confirmação por autoridade.

## 305. Checklist de ativação

Deverá verificar:

- declaração;
- comando;
- equipe;
- canais;
- escalas;
- recursos;
- acessos;
- procedimentos;
- comunicação;
- revisão.

## 306. Falha de ativação

Deverá ser tratada quando uma capacidade prevista:

- não responder;
- estiver indisponível;
- não possuir pessoas;
- não possuir acesso;
- estiver desatualizada;
- não compreender o comando;
- não conseguir mobilizar-se.

## 307. Capacidade declarada e não disponível

A divergência deverá ser registrada como risco e produzir alternativa.

## 308. Confirmação da ativação

Cada capacidade deverá informar:

- estado;
- prontidão;
- responsável;
- tempo;
- limitações;
- necessidades;
- próximos passos.

## 309. Quadro de ativação

A coordenação deverá acompanhar:

- solicitado;
- confirmado;
- mobilizando;
- operacional;
- limitado;
- indisponível;
- substituído.

## 310. Escalonamento

Escalonamento será o encaminhamento da situação para nível superior ou capacidade adicional quando o nível atual for insuficiente.

## 311. Escalonamento não é fracasso

Reconhecer limites e pedir ajuda será comportamento esperado de uma organização consciente.

## 312. Escalonamento funcional

Encaminhará a situação a competência especializada.

## 313. Escalonamento hierárquico

Encaminhará decisão a autoridade superior.

## 314. Escalonamento territorial

Mobilizará capacidade de outro território.

## 315. Escalonamento federado

Mobilizará outra organização ou estrutura compartilhada.

## 316. Escalonamento institucional

Buscará decisão de governança, curadoria, jurídico ou direção.

## 317. Escalonamento público

Poderá envolver autoridades estatais, defesa civil, segurança, saúde ou outras instituições competentes.

## 318. Critérios de escalonamento

Deverão incluir:

- risco crescente;
- capacidade insuficiente;
- ausência de competência;
- conflito de autoridade;
- dependência externa;
- impacto ampliado;
- duração;
- saturação;
- perda de controle.

## 319. Escalonamento antecipado

Deverá ocorrer antes do colapso da capacidade local.

## 320. Escalonamento tardio

Atrasos deverão ser analisados para compreender:

- medo;
- cultura;
- incentivo;
- reputação;
- desconhecimento;
- falta de canal;
- conflito;
- ausência de autoridade.

## 321. Escada de escalonamento

A escada poderá incluir:

1. operador;
2. líder de turno;
3. especialista;
4. coordenação;
5. direção;
6. organização federada;
7. autoridade externa;
8. estrutura extraordinária.

## 322. Salto de nível

Poderá ocorrer quando o risco exigir resposta mais rápida do que a sequência ordinária.

## 323. Escalonamento paralelo

Uma situação poderá ser encaminhada simultaneamente a:

- segurança;
- jurídico;
- comunicação;
- operação;
- liderança;
- autoridades;
- apoio humano.

## 324. Escalonamento sem abandono

Quem escalona continuará responsável por preservar a situação até transferência ou orientação clara.

## 325. Aceite do escalonamento

O nível receptor deverá confirmar:

- recebimento;
- compreensão;
- autoridade;
- capacidade;
- ação;
- prazo;
- responsável.

## 326. Recusa do escalonamento

A recusa deverá ser fundamentada e indicar alternativa quando possível.

## 327. Escalonamento sem resposta

A ausência de resposta deverá ativar caminho alternativo.

## 328. Tempo de escalonamento

Cada nível deverá possuir prazo compatível com a criticidade.

## 329. Registro do escalonamento

Deverá conter:

- origem;
- destino;
- motivo;
- horário;
- contexto;
- resposta;
- decisão;
- transferência;
- resultado.

## 330. Desescalonamento

Desescalonamento será a redução consciente do nível de resposta.

## 331. Desescalonamento não é encerramento

A operação poderá permanecer em alerta, contingência ou recuperação após deixar o modo de crise.

## 332. Critérios de desescalonamento

Deverão considerar:

- contenção;
- estabilidade;
- capacidade;
- redução do impacto;
- recuperação;
- disponibilidade;
- confiança;
- riscos residuais.

## 333. Desescalonamento prematuro

Poderá produzir:

- retorno da crise;
- perda de cobertura;
- interrupção;
- ocultação de risco;
- desgaste adicional;
- perda de confiança.

## 334. Desescalonamento tardio

Poderá prolongar:

- poderes excepcionais;
- custos;
- mobilizações;
- restrições;
- fadiga;
- indisponibilidade de recursos.

## 335. Autoridade de desescalonamento

Deverá ser claramente definida e possuir evidências suficientes.

## 336. Revisão situacional

A situação deverá ser revisada em ciclos.

## 337. Frequência da revisão

A frequência deverá considerar:

- velocidade;
- gravidade;
- incerteza;
- capacidade;
- propagação;
- decisões;
- impacto.

## 338. Conteúdo da revisão

Deverá responder:

- o que mudou;
- o que permanece;
- o que foi confirmado;
- o que está contido;
- o que piorou;
- quais recursos existem;
- qual decisão é necessária;
- quando revisar novamente.

## 339. Reclassificação contínua

O nível não deverá permanecer fixo quando a realidade mudar.

## 340. Quadro situacional comum

Organizações participantes deverão compartilhar compreensão mínima comum sobre:

- evento;
- classificação;
- território;
- impacto;
- comando;
- prioridades;
- capacidades;
- riscos;
- decisões.

## 341. Divergência de classificação

Quando organizações classificarem de forma diferente, deverão alinhar:

- critérios;
- evidências;
- responsabilidades;
- impactos;
- medidas;
- comunicação.

## 342. Maior proteção provisória

Enquanto a divergência não for resolvida, poderá ser adotada proteção provisória proporcional ao maior risco plausível.

## 343. Auditoria da declaração

Deverá verificar:

- fundamento;
- autoridade;
- necessidade;
- proporcionalidade;
- escopo;
- duração;
- comunicação;
- revisão;
- encerramento.

## 344. Evidência da ativação

Deverá ser possível comprovar quais capacidades realmente foram mobilizadas.

## 345. Evidência do escalonamento

A operação deverá demonstrar quando pediu ajuda, quem recebeu e como respondeu.

## 346. Invariante da percepção plural

Nenhum mecanismo único deverá possuir poder exclusivo de tornar uma crise visível ou invisível.

## 347. Invariante da classificação honesta

A gravidade não deverá ser manipulada por conveniência, interesse ou medo reputacional.

## 348. Invariante da declaração legítima

Todo estado extraordinário deverá possuir autoridade, fundamento, escopo e temporalidade.

## 349. Invariante do escalonamento responsável

Toda pessoa ou organização deverá poder reconhecer seus limites e solicitar apoio sem abandonar sua responsabilidade.

## 350. Resultado do Lote 2

Ao final desta camada, a Plataforma UNO deverá ser capaz de:

- perceber sinais;
- receber alertas;
- correlacionar fontes;
- validar condições;
- registrar hipóteses;
- classificar gravidade;
- declarar modos;
- ativar capacidades;
- confirmar mobilização;
- escalonar;
- reclassificar;
- desescalonar;
- auditar decisões.

A organização não deverá esperar a certeza absoluta para proteger.

Também não deverá utilizar a incerteza para justificar poder ilimitado.

Ela deverá construir consciência progressiva, agir de forma proporcional e revisar continuamente se a resposta ainda corresponde à realidade.

---

# Lote 3 — Comando, Governança, Autoridade, Decisão, Coordenação e Comunicação de Crise

## 351. Propósito deste lote

Este lote estabelece como a Plataforma UNO deverá organizar, durante crises e modos extraordinários:

- comando;
- governança;
- autoridade;
- deliberação;
- decisão;
- coordenação;
- comunicação;
- prestação de contas;
- supervisão;
- preservação do propósito.

## 352. Coordenação extraordinária

A coordenação extraordinária deverá integrar capacidades que, em condições normais, permanecem distribuídas entre:

- equipes;
- unidades;
- organizações;
- territórios;
- fornecedores;
- agentes;
- autoridades;
- comunidades.

## 353. Unidade de propósito

A resposta deverá possuir propósito comum compreensível por todos os participantes.

## 354. Propósito antes da atividade

A mobilização não deverá ser organizada apenas por listas de tarefas.

Cada atividade deverá estar vinculada a objetivos como:

- proteger vidas;
- conter dano;
- preservar serviço;
- restaurar comunicação;
- apoiar vulneráveis;
- recuperar capacidade;
- preservar evidências;
- reconstruir confiança.

## 355. Governança de crise

Governança de crise será o conjunto de estruturas que definem:

- quem decide;
- com qual autoridade;
- sobre qual escopo;
- com quais informações;
- durante quanto tempo;
- sob quais controles;
- com qual prestação de contas.

## 356. Governança não suspensa

A crise poderá simplificar processos, mas não deverá eliminar governança.

## 357. Estrutura extraordinária

A estrutura deverá ser ativada somente quando a operação ordinária não conseguir coordenar adequadamente a situação.

## 358. Estrutura modular

A governança poderá ampliar-se ou reduzir-se conforme:

- gravidade;
- território;
- duração;
- organizações;
- capacidades;
- riscos;
- necessidades.

## 359. Comando de crise

O comando será responsável por preservar direção, coerência e coordenação da resposta.

## 360. Comando não é propriedade da crise

A pessoa ou organização que exerce comando não se tornará proprietária:

- dos recursos;
- das organizações;
- dos dados;
- das pessoas;
- da narrativa;
- das decisões futuras;
- dos resultados coletivos.

## 361. Comando estratégico

Deverá orientar:

- propósito;
- prioridades;
- relações institucionais;
- recursos extraordinários;
- riscos sistêmicos;
- comunicação pública;
- continuidade futura.

## 362. Comando tático

Deverá converter a direção estratégica em:

- objetivos operacionais;
- coordenação;
- distribuição de capacidades;
- prioridades;
- períodos de atuação;
- escalonamentos.

## 363. Comando operacional

Deverá coordenar a execução concreta de atividades no território, serviço, sistema ou unidade afetada.

## 364. Separação entre níveis

A estrutura deverá evitar que uma única pessoa concentre, sem controle:

- estratégia;
- decisão;
- execução;
- validação;
- comunicação;
- auditoria.

## 365. Integração entre níveis

Estratégia, tática e operação deverão compartilhar contexto suficiente para evitar decisões incompatíveis.

## 366. Comando local

A autoridade local deverá coordenar o que estiver dentro de sua competência e capacidade.

## 367. Comando federado

Quando várias organizações participarem, deverá existir coordenação comum sem apagar autoridades próprias.

## 368. Comando unificado

O comando unificado poderá reunir autoridades de organizações diferentes em uma estrutura de decisão coordenada.

## 369. Comando unificado não é fusão

Cada organização deverá permanecer responsável por suas competências, pessoas e obrigações.

## 370. Comando apoiado

Uma organização poderá manter comando local recebendo apoio técnico, logístico ou institucional externo.

## 371. Comando transferido

A transferência somente deverá ocorrer quando:

- houver fundamento;
- a capacidade local for insuficiente;
- a autoridade competente aceitar;
- o escopo estiver definido;
- o handover for realizado;
- a comunicação ocorrer.

## 372. Comando temporário

Toda transferência extraordinária deverá possuir prazo, revisão e condição de retorno.

## 373. Posto de comando

O posto de comando será o ambiente físico ou digital em que a coordenação integra:

- contexto;
- decisões;
- recursos;
- equipes;
- comunicação;
- registros;
- riscos;
- resultados.

## 374. Posto físico

Deverá considerar:

- segurança;
- acesso;
- energia;
- comunicação;
- ergonomia;
- redundância;
- privacidade;
- continuidade.

## 375. Posto virtual

Deverá possuir:

- autenticação;
- autorização;
- canais;
- registros;
- disponibilidade;
- redundância;
- segregação;
- contingência;
- suporte.

## 376. Posto alternativo

Operações críticas deverão possuir local ou meio alternativo de coordenação.

## 377. Sala de situação

A sala de situação deverá reunir visão integrada da crise.

## 378. Sala do Cérebro em crise

A Sala do Cérebro poderá apoiar deliberações complexas reunindo:

- operadores;
- dirigentes;
- especialistas;
- curadores;
- representantes;
- inteligências artificiais;
- organizações;
- conhecimento territorial.

## 379. Limites da Sala do Cérebro

Ela não substituirá:

- autoridade legal;
- decisão formal;
- competência profissional;
- participação obrigatória;
- responsabilidade;
- devido processo.

## 380. Funções essenciais do comando

A estrutura deverá assegurar funções de:

- direção;
- operação;
- planejamento;
- logística;
- comunicação;
- segurança;
- informação;
- finanças;
- continuidade;
- apoio humano;
- registro.

## 381. Função de direção

Deverá definir propósito, prioridades e limites.

## 382. Função de operação

Deverá coordenar ações destinadas a proteger, conter, estabilizar e recuperar.

## 383. Função de planejamento

Deverá transformar contexto em:

- cenários;
- objetivos;
- planos;
- projeções;
- necessidades;
- alternativas;
- próximos ciclos.

## 384. Função de logística

Deverá mobilizar:

- pessoas;
- materiais;
- equipamentos;
- transporte;
- instalações;
- alimentação;
- comunicação;
- reservas.

## 385. Função de comunicação

Deverá coordenar mensagens:

- internas;
- interorganizacionais;
- públicas;
- comunitárias;
- técnicas;
- institucionais.

## 386. Função de segurança

Deverá proteger:

- pessoas;
- instalações;
- sistemas;
- dados;
- recursos;
- evidências;
- territórios;
- legitimidade.

## 387. Função de informação

Deverá integrar:

- sinais;
- dados;
- evidências;
- mapas;
- eventos;
- hipóteses;
- decisões;
- estados;
- memória.

## 388. Função financeira

Deverá acompanhar:

- autorizações;
- gastos;
- reservas;
- contratações;
- pagamentos;
- doações;
- custos;
- prestação de contas.

## 389. Função de continuidade

Deverá preservar:

- serviços essenciais;
- equipes futuras;
- substitutos;
- reservas;
- recuperação;
- retorno à normalidade.

## 390. Função de apoio humano

Deverá acompanhar:

- escalas;
- fadiga;
- alimentação;
- descanso;
- saúde;
- segurança;
- apoio psicossocial;
- substituições;
- famílias quando aplicável.

## 391. Função de registro

Deverá preservar:

- decisões;
- ações;
- autoridades;
- evidências;
- recursos;
- comunicações;
- mudanças;
- handovers.

## 392. Acúmulo de funções

Em estruturas pequenas, funções poderão ser acumuladas quando:

- houver competência;
- o risco permitir;
- conflitos forem tratados;
- controles compensatórios existirem;
- a carga for suportável.

## 393. Expansão da estrutura

O comando deverá ampliar funções quando a complexidade ultrapassar a capacidade atual.

## 394. Redução da estrutura

Funções extraordinárias deverão ser desmobilizadas quando deixarem de ser necessárias.

## 395. Autoridade extraordinária

Autoridade extraordinária será a competência temporária para praticar atos além do fluxo ordinário dentro de limites declarados.

## 396. Origem da autoridade

A autoridade deverá derivar de:

- lei;
- estatuto;
- contrato;
- política;
- mandato;
- delegação;
- decisão competente;
- plano previamente aprovado.

## 397. Autoridade técnica

A competência técnica permitirá orientar dentro do domínio profissional.

Ela não criará automaticamente autoridade institucional ou política.

## 398. Autoridade operacional

Permitirá coordenar execução dentro do escopo atribuído.

## 399. Autoridade institucional

Permitirá comprometer a organização dentro de sua competência.

## 400. Autoridade territorial

Deverá respeitar competências e responsabilidades existentes no território.

## 401. Autoridade federada

Surgirá do acordo legítimo entre organizações participantes.

## 402. Autoridade emergencial automática

Algumas ações protetivas poderão ser previamente autorizadas para execução imediata quando determinado gatilho ocorrer.

## 403. Limites da autoridade automática

Ela deverá possuir:

- gatilho;
- ação;
- escopo;
- duração;
- registro;
- responsável;
- reversão;
- revisão.

## 404. Delegação extraordinária

A delegação deverá informar:

- delegante;
- delegado;
- propósito;
- poderes;
- restrições;
- validade;
- prestação de contas;
- revogação.

## 405. Subdelegação

Somente será permitida quando prevista e necessária.

## 406. Autoridade presumida proibida

A pessoa com maior acesso técnico, conhecimento ou influência não deverá assumir comando sem fundamento.

## 407. Usurpação de autoridade

A atuação deliberada além da autoridade deverá ser detectada, contida, registrada e responsabilizada.

## 408. Conflito de autoridade

Poderá ocorrer quando:

- organizações divergirem;
- mandatos sobrepuserem-se;
- normas forem interpretadas de modo distinto;
- lideranças emitirem ordens incompatíveis;
- competências territoriais entrarem em tensão.

## 409. Resolução provisória

Enquanto o conflito for tratado, deverão ser preservadas medidas mínimas necessárias à proteção.

## 410. Mediação institucional

A mediação deverá buscar coordenação sem apagar competências legítimas.

## 411. Autoridade para interrupção

Deverá estar definido quem pode suspender:

- serviço;
- sistema;
- processo;
- operação;
- acesso;
- automação;
- atividade física;
- comunicação.

## 412. Interrupção por qualquer pessoa

Diante de risco grave e imediato, qualquer pessoa deverá poder iniciar proteção e solicitar suspensão, conforme os procedimentos aplicáveis.

## 413. Autoridade para retomada

A retomada deverá exigir confirmação de que as condições necessárias foram restauradas.

## 414. Registro de autoridade

Toda decisão deverá indicar a cadeia de autoridade que a sustenta.

## 415. Expiração de autoridade

Poderes temporários deverão expirar ao final da necessidade, prazo ou mandato.

## 416. Revogação

A autoridade poderá ser revogada quando:

- o contexto mudar;
- houver abuso;
- surgir impedimento;
- a pessoa estiver indisponível;
- o mandato terminar;
- a estrutura for reduzida.

## 417. Prestação de contas da autoridade

Quem exerceu poder extraordinário deverá explicar:

- o que decidiu;
- por que;
- com quais dados;
- dentro de qual limite;
- com quais consequências;
- quais revisões ocorreram.

## 418. Decisão de crise

A decisão deverá integrar:

- propósito;
- contexto;
- evidências;
- incerteza;
- alternativas;
- risco;
- capacidade;
- tempo;
- autoridade;
- consequências.

## 419. Decisão rápida

A velocidade deverá ser compatível com o tempo crítico sem eliminar verificações essenciais.

## 420. Decisão deliberada

Quando houver tempo, decisões de alto impacto deverão integrar perspectivas relevantes antes da execução.

## 421. Ciclos decisórios

A resposta deverá operar por ciclos de:

1. perceber;
2. compreender;
3. priorizar;
4. decidir;
5. executar;
6. observar;
7. adaptar;
8. registrar.

## 422. Decisão provisória

Poderá ser adotada por prazo curto enquanto novas informações são obtidas.

## 423. Decisão condicional

Poderá depender de condições monitoradas e ser automaticamente revisada quando elas mudarem.

## 424. Decisão reversível

Deverá ser preferida sob elevada incerteza quando conseguir proteger adequadamente.

## 425. Decisão irreversível

Deverá exigir maior fundamento, autoridade, revisão e registro.

## 426. Decisão distribuída

Equipes locais poderão decidir dentro de limites quando a centralização aumentar o risco ou a latência.

## 427. Decisão centralizada

Poderá ser necessária para preservar coerência, evitar conflito ou distribuir recursos escassos.

## 428. Centralização mínima necessária

A crise não deverá centralizar decisões que podem permanecer legitimamente locais.

## 429. Decisão assistida por IA

A IA poderá apoiar:

- síntese;
- comparação;
- projeção;
- detecção de padrões;
- recuperação de memória;
- simulação;
- recomendação.

## 430. Responsabilidade pela decisão assistida

A recomendação não substituirá a decisão da autoridade responsável.

## 431. Dados da recomendação

Deverão ser conhecidos, conforme o risco:

- fontes;
- atualidade;
- cobertura;
- limitações;
- hipóteses;
- confiança;
- modelo;
- versão.

## 432. Simulação decisória

Resultados fictícios utilizados para analisar alternativas deverão ser marcados como:

**SIMULAÇÃO**

## 433. Divergência entre pessoa e agente

A divergência deverá ser registrada quando relevante.

A pessoa não deverá seguir ou rejeitar automaticamente a recomendação sem análise proporcional.

## 434. Decisão ética

Quando houver conflito grave de valores, deverão participar competências adequadas de:

- ética;
- jurídico;
- operação;
- comunidade;
- área técnica;
- governança.

## 435. Decisão sobre escassez

Deverá utilizar critérios previamente definidos sempre que possível.

## 436. Decisão sobre pessoas

Medidas que afetem liberdade, privacidade, acesso, trabalho ou segurança deverão possuir proteção ampliada.

## 437. Decisão sob pressão pública

A atenção pública não deverá substituir evidências, propósito ou competência.

## 438. Decisão sob pressão política

Interesses políticos não deverão eliminar responsabilidade técnica, jurídica e humana.

## 439. Decisão sob pressão econômica

Custos deverão ser considerados, mas não deverão prevalecer automaticamente sobre vida, direitos e segurança.

## 440. Registro decisório mínimo

Toda decisão relevante deverá registrar:

- identidade;
- autoridade;
- horário;
- contexto;
- alternativas;
- fundamento;
- resultado;
- validade;
- consequências;
- revisão.

## 441. Dissenso

A divergência fundamentada deverá poder ser registrada.

## 442. Opinião minoritária

Perspectivas minoritárias não deverão ser apagadas quando indicarem risco ou alternativa relevante.

## 443. Impedimento

Quem possuir conflito de interesse deverá declarar e afastar-se quando necessário.

## 444. Decisão sem quórum ordinário

Quando a urgência impedir o quórum normal, deverá existir regra extraordinária previamente estabelecida.

## 445. Ratificação posterior

Decisões extraordinárias poderão exigir revisão e ratificação quando a condição permitir.

## 446. Falta de ratificação

A ausência de ratificação não apagará efeitos já produzidos, mas deverá iniciar avaliação de responsabilidade, correção e reparação.

## 447. Quadro de decisões

A sala de situação deverá apresentar:

- decisões vigentes;
- decisões pendentes;
- responsáveis;
- validade;
- dependências;
- consequências;
- revisões.

## 448. Ordem contraditória

Ordens incompatíveis deverão ser suspensas e encaminhadas à autoridade adequada.

## 449. Ordem ilegítima

Nenhuma pessoa deverá cumprir ordem manifestamente incompatível com:

- lei;
- segurança;
- dignidade;
- direitos;
- autoridade;
- princípios permanentes.

## 450. Contestação de ordem

Deverá existir canal rápido e protegido para questionamento.

## 451. Comunicação operacional

Deverá transmitir informações necessárias para ação coordenada.

## 452. Comunicação institucional

Deverá alinhar organizações, autoridades, parceiros e estruturas de governança.

## 453. Comunicação pública

Deverá orientar, informar, proteger e preservar confiança.

## 454. Comunicação comunitária

Deverá adaptar linguagem, canal e conteúdo ao território e às necessidades locais.

## 455. Comunicação interna

As equipes deverão compreender:

- estado;
- objetivos;
- prioridades;
- autoridade;
- riscos;
- procedimentos;
- próximos ciclos.

## 456. Porta-voz

Todo porta-voz deverá possuir:

- mandato;
- contexto;
- acesso a informações atualizadas;
- limites;
- apoio;
- responsabilidade;
- substituto.

## 457. Porta-voz técnico

Poderá explicar aspectos técnicos sem assumir decisões institucionais que não lhe pertencem.

## 458. Porta-voz institucional

Deverá comunicar compromissos e decisões da organização dentro de seu mandato.

## 459. Múltiplos porta-vozes

Quando necessários, deverão compartilhar fatos e linguagem coerentes.

## 460. Fonte oficial

A operação deverá estabelecer canal oficial de atualização.

## 461. Canal oficial não exclusivo

A organização deverá monitorar outros canais para detectar:

- dúvidas;
- boatos;
- necessidades;
- falhas;
- percepções;
- desinformação.

## 462. Primeiro comunicado

Deverá reconhecer:

- o que ocorreu;
- o que está sendo feito;
- quem poderá ser afetado;
- quais medidas tomar;
- quando haverá atualização.

## 463. Comunicação antes da certeza completa

A organização poderá comunicar incerteza sem especular.

## 464. Fato, hipótese e decisão

As mensagens deverão distinguir claramente:

- fato confirmado;
- hipótese;
- análise;
- recomendação;
- decisão;
- orientação.

## 465. Comunicação de risco

Deverá ser clara sobre:

- natureza;
- localização;
- afetados;
- probabilidade;
- consequências;
- proteção;
- duração;
- fontes.

## 466. Comunicação de ação

Deverá informar exatamente:

- quem deve agir;
- o que fazer;
- quando;
- onde;
- como;
- qual alternativa existe;
- onde obter ajuda.

## 467. Comunicação acessível

Deverá considerar:

- linguagem simples;
- tradução;
- Libras;
- legenda;
- áudio;
- contraste;
- leitura por tela;
- canais não digitais;
- apoio presencial.

## 468. Comunicação para crianças

Quando aplicável, deverá utilizar linguagem apropriada e proteção contra exposição desnecessária.

## 469. Comunicação para pessoas vulneráveis

Deverá reconhecer barreiras de acesso, mobilidade, compreensão e proteção.

## 470. Comunicação com trabalhadores

Deverá informar:

- riscos;
- escalas;
- proteções;
- autoridade;
- procedimentos;
- direitos;
- canais de apoio;
- mudanças.

## 471. Comunicação com familiares

Quando apropriado, deverá existir canal para informar familiares de pessoas mobilizadas ou afetadas.

## 472. Comunicação entre organizações

Deverá utilizar formato comum para:

- situação;
- impacto;
- necessidades;
- capacidades;
- decisões;
- responsáveis;
- próximos passos.

## 473. Comunicação com autoridades

Deverá respeitar competências, prazos, evidências e canais oficiais.

## 474. Comunicação com imprensa

Deverá preservar:

- verdade;
- privacidade;
- segurança;
- coerência;
- direitos;
- investigação;
- responsabilidade.

## 475. Entrevistas

A pessoa entrevistada deverá conhecer:

- mandato;
- fatos;
- limites;
- mensagens principais;
- incertezas;
- canais de atualização.

## 476. Redes sociais

Deverão ser utilizadas para:

- alertar;
- orientar;
- atualizar;
- corrigir;
- escutar;
- encaminhar.

## 477. Redes sociais não como única fonte

A resposta não deverá depender exclusivamente de plataformas comerciais.

## 478. Desinformação coordenada

A organização deverá reconhecer campanhas capazes de:

- produzir pânico;
- desacreditar autoridades;
- induzir comportamento inseguro;
- ocultar riscos;
- dividir comunidades;
- manipular recursos.

## 479. Correção pública

Informações falsas relevantes deverão ser corrigidas com:

- clareza;
- evidência;
- linguagem acessível;
- repetição proporcional;
- atualização;
- canal confiável.

## 480. Correção de erro próprio

A organização deverá corrigir publicamente informações incorretas que tenha divulgado.

## 481. Silêncio institucional

A ausência de informação poderá produzir boatos e perda de confiança.

## 482. Frequência de atualização

Deverá ser definida segundo:

- velocidade;
- risco;
- necessidade pública;
- mudanças;
- capacidade;
- canais.

## 483. Atualização sem novidade

Quando não houver mudança, a organização poderá confirmar que:

- a resposta continua;
- o estado permanece;
- a investigação prossegue;
- a próxima atualização ocorrerá em momento definido.

## 484. Mensagens pré-aprovadas

Modelos poderão acelerar comunicação, mas deverão ser adaptados ao contexto real.

## 485. Automação de comunicação

A automação poderá distribuir mensagens aprovadas por múltiplos canais.

## 486. Limites da automação comunicacional

Agentes não deverão:

- inventar fatos;
- assumir compromissos;
- divulgar dados protegidos;
- alterar orientações;
- declarar encerramento;
- responder temas sensíveis sem mandato.

## 487. Identificação da comunicação automatizada

Quando relevante, deverá ser claro que a interação ocorre com sistema automatizado ou agente.

## 488. Comunicação bidirecional

A organização deverá receber:

- dúvidas;
- pedidos;
- confirmações;
- alertas;
- necessidades;
- feedback territorial.

## 489. Capacidade de resposta

Abrir canais sem capacidade de responder poderá ampliar frustração e risco.

## 490. Priorização das mensagens recebidas

Solicitações deverão ser triadas por:

- risco;
- urgência;
- vulnerabilidade;
- território;
- impacto;
- necessidade.

## 491. Registro comunicacional

Mensagens relevantes deverão preservar:

- conteúdo;
- origem;
- destinatário;
- horário;
- canal;
- aprovação;
- versão;
- correções.

## 492. Mapa de partes interessadas

A comunicação deverá identificar:

- afetados;
- responsáveis;
- autoridades;
- parceiros;
- trabalhadores;
- comunidades;
- fornecedores;
- público;
- imprensa.

## 493. Necessidades informacionais diferentes

Cada parte deverá receber informação compatível com sua capacidade e responsabilidade de agir.

## 494. Confidencialidade

Informações restritas deverão permanecer protegidas durante a crise.

## 495. Classificação emergencial da informação

O aumento da urgência não eliminará classificações, mas poderá permitir compartilhamento controlado quando necessário à proteção.

## 496. Compartilhamento de necessidade vital

Dados poderão ser compartilhados para proteger vida dentro de fundamento, escopo e registro adequados.

## 497. Privacidade das vítimas

Identidades e condições não deverão ser divulgadas sem necessidade, autoridade ou consentimento aplicável.

## 498. Imagens de crise

Imagens deverão ser tratadas com respeito, evitando:

- exposição;
- humilhação;
- sensacionalismo;
- identificação indevida;
- revitimização;
- uso comercial incompatível.

## 499. Comunicação de números

Números deverão indicar:

- fonte;
- período;
- confirmação;
- atualização;
- incerteza;
- possível revisão.

## 500. Comunicação de mortes e feridos

Deverá respeitar protocolos, autoridades, familiares e dignidade.

## 501. Comunicação de responsabilidade

A organização não deverá atribuir culpa antes de investigação suficiente.

## 502. Pedido público de ajuda

Deverá declarar:

- necessidade;
- forma de apoio;
- critérios;
- local;
- responsável;
- segurança;
- prazo;
- prestação de contas.

## 503. Doações

A comunicação deverá evitar coleta descoordenada de itens e recursos não necessários.

## 504. Comunicação de encerramento

Somente deverá ocorrer quando houver autoridade e evidência suficientes.

## 505. Encerramento não apaga acompanhamento

A mensagem deverá informar riscos residuais, canais e próximos passos.

## 506. Handover de comando

A troca de liderança deverá transferir:

- autoridade;
- propósito;
- estado;
- decisões;
- recursos;
- relações;
- riscos;
- comunicações;
- pendências;
- próximos ciclos.

## 507. Comunicação da troca de comando

Todos os participantes relevantes deverão saber:

- quem encerrou;
- quem assumiu;
- quando;
- com qual autoridade;
- por quais canais.

## 508. Registro do comando

Deverá existir histórico de:

- titulares;
- períodos;
- decisões;
- delegações;
- transferências;
- revogações;
- prestações de contas.

## 509. Continuidade do comando

A crise não deverá ficar sem autoridade reconhecível durante trocas, deslocamentos ou indisponibilidades.

## 510. Linha de sucessão

O comando deverá possuir sucessores preparados.

## 511. Incapacidade do comandante

Deverá existir mecanismo para substituição quando a pessoa:

- adoecer;
- estiver exausta;
- perder comunicação;
- possuir impedimento;
- agir abusivamente;
- perder legitimidade;
- ficar indisponível.

## 512. Supervisão do comando

Autoridades extraordinárias deverão permanecer sujeitas a:

- limites;
- revisão;
- auditoria;
- colegiados;
- normas;
- contestação;
- prestação de contas.

## 513. Conselho de crise

Poderá apoiar decisões de grande impacto, integrando competências diversas.

## 514. Conselho não paralisa a resposta

A governança deverá definir quais decisões podem ser imediatas e quais exigem deliberação ampliada.

## 515. Curadoria durante a crise

A curadoria deverá ajudar a preservar:

- princípios;
- significado;
- coerência;
- memória;
- limites;
- visão de futuro.

## 516. Jurídico durante a crise

Deverá apoiar decisões sem utilizar incerteza jurídica como justificativa automática para paralisia.

## 517. Auditoria em tempo real

Quando possível, controles deverão acompanhar:

- gastos;
- acessos;
- decisões;
- contratos;
- recursos;
- medidas extraordinárias.

## 518. Registro preservado

Nenhuma liderança deverá poder apagar unilateralmente os registros de sua própria atuação.

## 519. Invariante do comando legítimo

Toda estrutura de comando deverá possuir propósito, autoridade, escopo, duração e supervisão.

## 520. Invariante da decisão atribuível

Toda decisão relevante deverá permanecer vinculada à autoridade que a tomou.

## 521. Invariante da comunicação verdadeira

A comunicação não deverá ocultar, fabricar ou distorcer conscientemente informações relevantes.

## 522. Invariante da coordenação plural

A unidade da resposta não deverá apagar competências, responsabilidades e perspectivas legítimas.

## 523. Invariante da sucessão de comando

Toda liderança extraordinária deverá possuir substituição e transferência previstas.

## 524. Preparação para o Lote 4

Os próximos controles deverão aprofundar:

- execução;
- mobilização;
- logística;
- segurança;
- continuidade;
- proteção humana;
- agentes;
- recursos;
- operação prolongada.

## 525. Resultado do Lote 3

Ao final desta camada, a Plataforma UNO deverá ser capaz de:

- constituir comando;
- distribuir funções;
- atribuir autoridade;
- resolver conflitos;
- tomar decisões;
- preservar dissenso;
- coordenar organizações;
- comunicar riscos;
- orientar pessoas;
- corrigir informações;
- transferir comando;
- supervisionar poderes extraordinários.

A crise não deverá ser enfrentada pela pessoa que fala mais alto, possui maior acesso técnico ou concentra mais recursos.

Ela deverá ser coordenada por uma estrutura legítima capaz de unir:

- verdade;
- competência;
- autoridade;
- responsabilidade;
- prudência;
- comunicação;
- memória;
- propósito.

---

# Lote 4 — Execução Extraordinária, Mobilização, Logística, Segurança, Continuidade e Proteção Humana

## 526. Propósito deste lote

Este lote estabelece como a Plataforma UNO deverá executar ações durante emergências, crises, desastres e modos extraordinários, preservando:

- coordenação;
- segurança;
- capacidade;
- continuidade;
- proteção humana;
- recursos;
- evidências;
- limites;
- responsabilidade;
- possibilidade de recuperação.

## 527. Execução extraordinária

Execução extraordinária será aquela realizada sob condições em que o modelo ordinário:

- não responde com velocidade suficiente;
- não possui capacidade adequada;
- perdeu parte de suas dependências;
- exige autoridade temporariamente ampliada;
- precisa priorizar funções essenciais;
- opera sob risco elevado.

## 528. Extraordinário não significa improvisado

A execução deverá utilizar:

- planos;
- procedimentos;
- competências;
- contratos;
- recursos;
- autoridades;
- controles;
- contingências;
- registros.

## 529. Improvisação governada

Quando a realidade exigir adaptação não prevista, a ação deverá preservar:

- propósito;
- segurança;
- autoridade;
- proporcionalidade;
- reversibilidade;
- registro;
- revisão;
- responsabilidade.

## 530. Objetivos operacionais

Cada ciclo de execução deverá possuir objetivos:

- específicos;
- compreensíveis;
- priorizados;
- atribuídos;
- temporais;
- avaliáveis;
- compatíveis com a capacidade.

## 531. Período operacional

A operação poderá ser organizada em períodos delimitados.

Cada período deverá definir:

- comando;
- objetivos;
- equipes;
- recursos;
- riscos;
- ações;
- comunicação;
- handover;
- revisão.

## 532. Plano de ação de crise

O plano deverá converter decisões em:

- tarefas;
- responsáveis;
- recursos;
- prazos;
- dependências;
- controles;
- evidências;
- critérios de conclusão.

## 533. Plano adaptativo

O plano deverá ser atualizado à medida que a realidade mudar.

## 534. Versão do plano

Toda versão deverá indicar:

- período;
- autoridade;
- alterações;
- responsáveis;
- validade;
- motivo;
- plano substituído.

## 535. Ação autorizada

Toda ação deverá possuir fundamento dentro do modo operacional vigente.

## 536. Ação protetiva imediata

Pessoas poderão iniciar ação prevista para impedir dano grave e imediato antes de receber ordem específica, quando previamente autorizadas.

## 537. Ação fora do plano

Deverá ser registrada quando necessária para:

- proteger;
- adaptar;
- responder;
- contornar;
- estabilizar;
- preservar continuidade.

## 538. Ação incompatível

A ação deverá ser interrompida quando contrariar:

- propósito;
- autoridade;
- segurança;
- norma;
- decisão vigente;
- direitos;
- condições reais.

## 539. Ordem operacional

A ordem deverá informar:

- emissor;
- destinatário;
- ação;
- motivo;
- prioridade;
- local;
- prazo;
- limites;
- confirmação esperada.

## 540. Validação da ordem

Antes de executar, a equipe deverá verificar:

- autenticidade;
- autoridade;
- clareza;
- competência;
- segurança;
- recursos;
- compatibilidade;
- estado atual.

## 541. Ordem ambígua

A equipe deverá solicitar esclarecimento quando a ambiguidade puder produzir dano.

## 542. Ordem conflitante

Ordens incompatíveis deverão ser encaminhadas à autoridade competente.

## 543. Ordem impossível

A impossibilidade deverá ser comunicada com:

- motivo;
- capacidade disponível;
- risco;
- alternativa;
- necessidade de apoio.

## 544. Ordem insegura

A pessoa deverá poder recusar ou interromper ordem que produza risco grave e indevido.

## 545. Confirmação da execução

A equipe deverá registrar:

- início;
- estado;
- resultado;
- desvio;
- evidência;
- dificuldade;
- encerramento;
- necessidade adicional.

## 546. Verificação do resultado

Concluir a atividade não significará automaticamente alcançar o resultado pretendido.

## 547. Efeito não esperado

Consequências imprevistas deverão ser comunicadas e incorporadas ao quadro situacional.

## 548. Coordenação simultânea

Múltiplas ações deverão ser relacionadas para evitar:

- conflito;
- duplicidade;
- interferência;
- competição por recurso;
- risco cruzado;
- descontinuidade.

## 549. Sincronização

A execução deverá estabelecer pontos de sincronização quando uma ação depender da conclusão ou estado de outra.

## 550. Desacoplamento

Quando possível, ações deverão ser estruturadas para continuar mesmo que outra parte esteja temporariamente indisponível.

## 551. Dependência crítica durante a execução

A indisponibilidade de dependência deverá acionar:

- contingência;
- substituição;
- operação degradada;
- replanejamento;
- escalonamento;
- interrupção.

## 552. Mobilização extraordinária

Mobilização será o processo de reunir pessoas, organizações, capacidades e recursos além do regime ordinário.

## 553. Ordem de mobilização

A mobilização deverá informar:

- situação;
- propósito;
- capacidade necessária;
- território;
- período;
- autoridade;
- riscos;
- canal;
- ponto de apresentação.

## 554. Mobilização progressiva

A organização deverá mobilizar capacidade de acordo com a necessidade, preservando reservas para fases posteriores.

## 555. Mobilização total

Somente deverá ocorrer quando a gravidade e a abrangência justificarem o consumo amplo de reservas.

## 556. Mobilização local

Deverá priorizar capacidades próximas quando possuírem condições suficientes de resposta.

## 557. Mobilização federada

Poderá integrar recursos de múltiplas organizações.

## 558. Mobilização pública

Poderá envolver estruturas estatais e serviços públicos competentes.

## 559. Mobilização privada

Poderá envolver empresas, prestadores e fornecedores sob contratos ou requisições legítimas.

## 560. Mobilização comunitária

Comunidades poderão contribuir com:

- percepção;
- comunicação;
- abrigo;
- conhecimento;
- cuidado;
- distribuição;
- orientação;
- apoio.

## 561. Mobilização voluntária

Voluntários deverão ser recebidos por processo governado.

## 562. Centro de recepção

O centro deverá realizar:

- identificação;
- triagem;
- registro;
- orientação;
- qualificação;
- atribuição;
- equipamento;
- supervisão;
- desmobilização.

## 563. Voluntário não é recurso irrestrito

A disposição para ajudar não eliminará:

- direitos;
- limites;
- segurança;
- competência;
- supervisão;
- responsabilidade da organização.

## 564. Mobilização de especialistas

Deverá considerar:

- competência;
- disponibilidade;
- deslocamento;
- jornada;
- autoridade;
- comunicação;
- substituição;
- duração.

## 565. Mobilização de liderança

Autoridades adicionais deverão ser convocadas quando o nível atual não puder decidir legitimamente.

## 566. Mobilização de agentes

Agentes de IA poderão ser ativados para:

- busca;
- síntese;
- tradução;
- triagem;
- correlação;
- registro;
- monitoramento;
- apoio à comunicação;
- recomendação.

## 567. Identidade do agente mobilizado

Todo agente deverá possuir:

- organização responsável;
- finalidade;
- versão;
- permissões;
- ferramentas;
- responsável humano;
- duração;
- registros.

## 568. Permissões extraordinárias de agentes

Permissões ampliadas deverão possuir:

- escopo;
- justificativa;
- autoridade;
- prazo;
- monitoramento;
- limite;
- revogação;
- revisão.

## 569. Agente não assume responsabilidade fictícia

A responsabilidade permanecerá com pessoas e instituições competentes.

## 570. Falha do agente

A operação deverá continuar por meio de:

- pessoa;
- outro agente;
- procedimento manual;
- sistema alternativo;
- operação degradada;
- suspensão segura.

## 571. Mobilização logística

A logística deverá transformar recursos disponíveis em capacidade utilizável no local e momento necessários.

## 572. Mapa de necessidades

Deverá indicar:

- item;
- quantidade;
- localização;
- prioridade;
- destinatário;
- prazo;
- responsável;
- estado.

## 573. Inventário extraordinário

A operação deverá conhecer:

- o que existe;
- onde;
- em qual condição;
- sob qual custódia;
- quem pode autorizar;
- como transportar;
- quando repor.

## 574. Recursos essenciais

Poderão incluir:

- água;
- alimentos;
- medicamentos;
- energia;
- combustível;
- comunicação;
- equipamentos;
- transporte;
- abrigo;
- materiais;
- dados;
- recursos financeiros.

## 575. Reserva estratégica

A reserva deverá ser utilizada segundo critérios capazes de preservar fases futuras da resposta.

## 576. Consumo de reserva

Deverá registrar:

- recurso;
- quantidade;
- finalidade;
- autoridade;
- destino;
- saldo;
- necessidade de reposição.

## 577. Escassez logística

A escassez deverá ser declarada antes que o recurso se esgote completamente.

## 578. Priorização logística

Deverá considerar:

- vida;
- vulnerabilidade;
- dependência;
- urgência;
- continuidade;
- distância;
- capacidade de benefício;
- alternativas.

## 579. Distribuição justa

Recursos não deverão ser desviados por:

- influência;
- proximidade;
- poder econômico;
- interesse político;
- discriminação;
- corrupção;
- captura organizacional.

## 580. Cadeia de custódia de recursos

A transferência deverá registrar:

- origem;
- destino;
- quantidade;
- estado;
- horário;
- responsável;
- confirmação;
- divergência.

## 581. Doações

Deverão ser:

- solicitadas conforme necessidade;
- recebidas;
- classificadas;
- inspecionadas;
- armazenadas;
- distribuídas;
- registradas;
- prestadas em contas.

## 582. Doação inadequada

Itens sem utilidade, segurança ou condição não deverão consumir capacidade crítica indevidamente.

## 583. Contratação emergencial

Deverá possuir:

- necessidade;
- autoridade;
- fornecedor;
- preço;
- escopo;
- prazo;
- entrega;
- controle;
- prestação de contas.

## 584. Dispensa não é ausência de controle

A simplificação de contratação não autorizará:

- fraude;
- superfaturamento;
- conflito oculto;
- favorecimento;
- ausência de evidência;
- desvio de finalidade.

## 585. Conflito de interesse emergencial

Deverá ser declarado e tratado mesmo sob pressão temporal.

## 586. Recursos financeiros extraordinários

Deverão possuir:

- origem;
- carteira;
- limite;
- autoridade;
- finalidade;
- registros;
- conciliação;
- auditoria;
- encerramento.

## 587. Adiantamento

Adiantamentos deverão possuir responsável, finalidade, comprovação e tratamento de saldo.

## 588. Pagamento emergencial

Deverá preservar meios suficientes de verificação e evitar duplicidade ou fraude.

## 589. Infraestrutura crítica

A operação deverá proteger:

- energia;
- comunicação;
- água;
- transporte;
- instalações;
- processamento;
- armazenamento;
- identidade;
- segurança;
- canais de comando.

## 590. Infraestrutura alternativa

Planos deverão prever alternativas para indisponibilidade da infraestrutura principal.

## 591. Energia de contingência

Deverá possuir:

- capacidade;
- combustível;
- autonomia;
- manutenção;
- prioridade;
- testes;
- operador;
- segurança.

## 592. Comunicação de contingência

Poderá utilizar:

- rádio;
- telefonia alternativa;
- mensageiros;
- redes locais;
- satélite;
- pontos físicos;
- comunicação comunitária.

## 593. Transporte extraordinário

Deverá considerar:

- rotas;
- riscos;
- combustível;
- condutores;
- manutenção;
- capacidade;
- prioridade;
- retorno;
- contingência.

## 594. Abrigos e instalações temporárias

Deverão preservar:

- segurança;
- dignidade;
- acessibilidade;
- higiene;
- privacidade;
- separações necessárias;
- proteção de vulneráveis;
- registros;
- apoio.

## 595. Operação remota

Poderá preservar coordenação quando locais físicos estiverem inacessíveis.

## 596. Operação distribuída

Equipes poderão atuar em diferentes pontos, exigindo contexto comum e autoridade clara.

## 597. Operação desconectada

Durante perda de comunicação, equipes locais poderão atuar dentro de mandatos previamente definidos.

## 598. Autoridade offline

Deverá possuir:

- ações permitidas;
- limites;
- duração;
- prioridade;
- registros locais;
- condições de interrupção;
- reconciliação posterior.

## 599. Reconciliação após reconexão

Deverá tratar:

- ações;
- decisões;
- estados;
- duplicidades;
- conflitos;
- recursos;
- evidências;
- autoridade.

## 600. Segurança extraordinária

O aumento do risco poderá exigir controles adicionais sem eliminar os controles fundamentais.

## 601. Segurança física

Deverá proteger:

- pessoas;
- instalações;
- rotas;
- recursos;
- áreas restritas;
- evidências;
- postos de comando.

## 602. Segurança digital

Deverá proteger:

- identidades;
- acessos;
- sistemas;
- dados;
- redes;
- agentes;
- comunicações;
- backups.

## 603. Segurança informacional

Deverá impedir:

- vazamento;
- manipulação;
- destruição;
- uso indevido;
- desinformação;
- perda de proveniência.

## 604. Segurança institucional

Deverá proteger:

- autoridade;
- legitimidade;
- decisões;
- contratos;
- registros;
- governança;
- continuidade.

## 605. Controle de acesso extraordinário

Acesso ampliado deverá permanecer:

- individual;
- temporário;
- limitado;
- monitorado;
- justificável;
- revogável;
- auditável.

## 606. Conta compartilhada proibida

A urgência não deverá justificar uso ordinário de contas genéricas sem atribuição.

## 607. Acesso de emergência

Deverá registrar:

- pessoa;
- motivo;
- objeto;
- horário;
- ações;
- encerramento;
- revisão.

## 608. Quebra controlada de acesso

Mecanismos excepcionais deverão ser protegidos, testados e monitorados.

## 609. Revogação pós-uso

Acesso extraordinário deverá ser encerrado imediatamente quando deixar de ser necessário.

## 610. Segurança das equipes

Pessoas mobilizadas deverão receber:

- riscos;
- equipamentos;
- orientação;
- canais;
- liderança;
- critérios de interrupção;
- apoio;
- rota de saída.

## 611. Briefing de segurança

Antes da atuação, deverá apresentar:

- perigo;
- risco;
- controle;
- função;
- comunicação;
- emergência;
- ponto de encontro;
- interrupção.

## 612. Mudança de risco

Novos perigos deverão ser comunicados durante a execução.

## 613. Check-in de equipes

Equipes em campo deverão confirmar seu estado em intervalos proporcionais ao risco.

## 614. Perda de contato

A ausência de check-in deverá iniciar:

- tentativa;
- canal alternativo;
- verificação;
- apoio;
- resgate quando necessário;
- escalonamento.

## 615. Evacuação

Planos deverão definir:

- gatilho;
- autoridade;
- rotas;
- pontos;
- prioridades;
- acessibilidade;
- comunicação;
- verificação;
- retorno.

## 616. Abrigo no local

Quando evacuar for mais perigoso, deverá existir orientação para proteção no próprio local.

## 617. Confinamento ou isolamento

Medidas deverão possuir fundamento, proporcionalidade, apoio, duração e proteção de direitos.

## 618. Proteção de trabalhadores

A crise não deverá eliminar:

- equipamentos;
- pausas;
- jornada;
- alimentação;
- descanso;
- saúde;
- direito de comunicar risco;
- proteção contra retaliação.

## 619. Jornada extraordinária

Deverá ser limitada, registrada, compensada e acompanhada.

## 620. Equipe de substituição

Deverá ser mobilizada antes da exaustão da equipe atual.

## 621. Reserva humana

Parte da capacidade deverá permanecer protegida para períodos posteriores.

## 622. Fadiga de crise

Deverá ser acompanhada por:

- jornada;
- sono;
- carga;
- exposição;
- decisões;
- acionamentos;
- estado da equipe;
- autodeclaração.

## 623. Retirada preventiva

Pessoas poderão ser substituídas antes da ocorrência de erro ou colapso.

## 624. Apoio psicossocial

Deverá estar disponível quando a operação envolver:

- sofrimento;
- mortes;
- violência;
- vulnerabilidade;
- decisões trágicas;
- exposição prolongada;
- pressão pública.

## 625. Pessoas afetadas e operadores

A resposta deverá proteger tanto quem recebe atendimento quanto quem sustenta a operação.

## 626. Proteção de crianças

As ações deverão considerar:

- segurança;
- reunificação familiar;
- linguagem;
- acompanhamento;
- privacidade;
- melhor interesse;
- proteção contra exploração.

## 627. Proteção de idosos

Deverá considerar:

- mobilidade;
- medicamentos;
- comunicação;
- apoio;
- dependência;
- isolamento;
- continuidade de cuidados.

## 628. Proteção de pessoas com deficiência

Deverá incluir:

- acessibilidade;
- tecnologia assistiva;
- comunicação;
- transporte;
- acompanhante;
- equipamentos;
- autonomia;
- cuidado individualizado.

## 629. Proteção de pessoas doentes

A continuidade de tratamentos e medicamentos essenciais deverá integrar a resposta.

## 630. Proteção de pessoas em situação de rua

A resposta deverá considerar acesso, documentação, abrigo, comunicação, saúde, segurança e dignidade.

## 631. Proteção contra violência

Abrigos, filas, deslocamentos e distribuição de recursos deverão possuir medidas de prevenção e resposta.

## 632. Proteção de dados de vulneráveis

Informações sensíveis não deverão ser expostas em listas, painéis ou comunicações públicas.

## 633. Reunificação familiar

A operação deverá possuir processo seguro para localizar e reunir familiares.

## 634. Registro de pessoas afetadas

Deverá respeitar:

- finalidade;
- minimização;
- qualidade;
- segurança;
- acesso;
- atualização;
- retenção;
- direitos.

## 635. Identificação sem exclusão

A ausência de documento não deverá impedir proteção emergencial quando houver outros meios legítimos de reconhecimento.

## 636. Continuidade de serviços essenciais

A operação deverá priorizar:

- vida;
- saúde;
- segurança;
- água;
- alimento;
- abrigo;
- energia;
- comunicação;
- identidade;
- proteção social;
- serviços públicos essenciais.

## 637. Capacidade mínima do serviço

Cada serviço deverá definir o que precisa permanecer funcionando no modo extraordinário.

## 638. Funções dispensáveis temporariamente

Funcionalidades não essenciais poderão ser suspensas para liberar capacidade.

## 639. Operação manual

Procedimentos manuais poderão substituir automação quando necessário.

## 640. Risco do manual

Deverão ser considerados:

- erro;
- duplicidade;
- atraso;
- perda de registro;
- fraude;
- falta de escala;
- reconciliação posterior.

## 641. Operação degradada declarada

Usuários e organizações deverão compreender:

- limitações;
- riscos;
- funcionalidades indisponíveis;
- alternativas;
- previsão;
- canais.

## 642. Priorização de Missões

Missões deverão ser reavaliadas conforme a crise.

## 643. Missões preservadas

Deverão permanecer aquelas relacionadas a:

- proteção;
- resposta;
- continuidade;
- recuperação;
- obrigações críticas;
- vulneráveis.

## 644. Missões suspensas

A suspensão deverá registrar:

- motivo;
- impacto;
- responsável;
- recursos liberados;
- pendências;
- condição de retomada.

## 645. Missões extraordinárias

Novas Missões poderão ser constituídas rapidamente com escopo e autoridade limitados.

## 646. Recursos compartilhados

Organizações deverão coordenar recursos escassos para evitar:

- duplicidade;
- retenção;
- disputa;
- desperdício;
- concentração;
- falta de rastreabilidade.

## 647. Requisição de apoio

Deverá informar:

- necessidade;
- quantidade;
- território;
- urgência;
- destinatário;
- duração;
- autoridade;
- responsável.

## 648. Oferta de apoio

Deverá declarar:

- capacidade;
- estado;
- limites;
- tempo;
- custo;
- transporte;
- operador;
- condições.

## 649. Aceitação do apoio

Deverá produzir compromisso e integração ao comando.

## 650. Ajuda não coordenada

A ajuda espontânea deverá ser recebida sem comprometer:

- segurança;
- logística;
- prioridade;
- capacidade de coordenação;
- espaço;
- rastreabilidade.

## 651. Gestão de filas críticas

Filas deverão ser organizadas segundo:

- urgência;
- vulnerabilidade;
- risco;
- tempo;
- capacidade;
- equidade;
- informação aos afetados.

## 652. Senhas e prioridades

Os mecanismos deverão impedir manipulação e preservar atendimento de pessoas sem acesso digital.

## 653. Capacidade da espera

A operação deverá fornecer condições seguras para pessoas que aguardam.

## 654. Comunicação na fila

Deverá informar:

- estado;
- tempo estimado;
- prioridade;
- alternativas;
- documentos necessários;
- apoio disponível.

## 655. Continuidade de dados

Dados necessários à resposta deverão permanecer:

- disponíveis;
- íntegros;
- atualizados;
- protegidos;
- compreensíveis;
- recuperáveis.

## 656. Dados mínimos de crise

A Plataforma UNO deverá identificar o conjunto mínimo necessário para operar quando sistemas completos estiverem indisponíveis.

## 657. Cópia de emergência

Registros críticos deverão possuir cópias acessíveis por autoridades designadas.

## 658. Processamento local

Territórios poderão operar com dados locais durante desconexão.

## 659. Sincronização posterior

Deverá preservar:

- ordem;
- proveniência;
- conflitos;
- autoridade;
- integridade;
- duplicidades;
- decisões.

## 660. Continuidade de identidade

Pessoas e organizações deverão poder ser reconhecidas mesmo durante falha do provedor principal.

## 661. Credenciais de contingência

Deverão ser:

- limitadas;
- protegidas;
- temporárias;
- atribuíveis;
- revogáveis;
- testadas.

## 662. Preservação de evidências

A operação deverá proteger evidências contra:

- perda;
- alteração;
- contaminação;
- destruição;
- acesso;
- exposição;
- mistura;
- quebra de custódia.

## 663. Prioridade de evidência e proteção

A coleta não deverá colocar pessoas em risco desproporcional.

## 664. Registro audiovisual

Deverá respeitar:

- segurança;
- dignidade;
- privacidade;
- finalidade;
- cadeia de custódia;
- retenção.

## 665. Drones e sensores

O uso deverá possuir:

- finalidade;
- autoridade;
- território;
- segurança;
- privacidade;
- operador;
- duração;
- tratamento de dados.

## 666. Monitoramento extraordinário

A ampliação temporária de monitoramento deverá possuir:

- necessidade;
- escopo;
- prazo;
- dados;
- responsáveis;
- limites;
- encerramento;
- eliminação ou retenção legítima.

## 667. Vigilância permanente proibida

Medidas introduzidas durante a crise não deverão permanecer por conveniência sem nova legitimação.

## 668. Continuidade financeira

A resposta deverá preservar:

- pagamentos essenciais;
- remunerações;
- fornecedores críticos;
- auxílios;
- recursos de campo;
- controles;
- conciliação.

## 669. Fraude durante crise

A operação deverá observar riscos de:

- fornecedor falso;
- doação fraudulenta;
- identidade indevida;
- desvio;
- cobrança abusiva;
- informação manipulada;
- duplicidade.

## 670. Proteção contra exploração econômica

Preços, contratos e distribuição deverão ser acompanhados quando houver risco de aproveitamento abusivo da escassez.

## 671. Comunicação operacional contínua

As equipes deverão receber atualizações sobre:

- contexto;
- riscos;
- prioridades;
- recursos;
- mudanças;
- decisões;
- próximos ciclos.

## 672. Handover entre períodos

A operação prolongada deverá possuir passagem estruturada entre equipes e comandos.

## 673. Conteúdo do handover de crise

Deverá incluir:

- quadro situacional;
- classificação;
- decisões;
- ações;
- recursos;
- afetados;
- riscos;
- comunicações;
- pendências;
- autoridade;
- objetivos seguintes.

## 674. Sobreposição de equipes

Deverá ser suficiente para transferir contexto sem produzir jornada excessiva.

## 675. Mudança de comando durante execução

A troca deverá ser comunicada antes que novas ordens sejam emitidas pelo sucessor.

## 676. Registro de campo

Quando ferramentas oficiais estiverem indisponíveis, equipes deverão utilizar formato alternativo previamente definido.

## 677. Reconstrução posterior

As ações realizadas deverão ser incorporadas à memória oficial.

## 678. Indicadores de execução extraordinária

Poderão acompanhar:

- pessoas protegidas;
- serviços preservados;
- capacidade mobilizada;
- recursos distribuídos;
- tempo;
- cobertura;
- riscos;
- incidentes;
- fadiga;
- continuidade.

## 679. Indicadores não substituem humanidade

Resultados numéricos não deverão ocultar sofrimento, exclusão ou impacto desigual.

## 680. Monitoramento de consequências

Toda ação deverá ser observada para identificar efeitos:

- desejados;
- adversos;
- indiretos;
- territoriais;
- humanos;
- institucionais;
- futuros.

## 681. Correção em curso

A resposta deverá poder alterar rapidamente ações que estejam produzindo dano.

## 682. Interrupção da ação ineficaz

Atividades que consomem recursos sem contribuir para o propósito deverão ser revistas ou encerradas.

## 683. Escalonamento de execução

Quando uma equipe não conseguir cumprir, deverá solicitar:

- reforço;
- substituição;
- recurso;
- especialista;
- autoridade;
- redução de escopo.

## 684. Desmobilização progressiva

Recursos deverão ser liberados conforme a necessidade diminuir.

## 685. Prioridade da desmobilização humana

Pessoas mais expostas, fatigadas ou mobilizadas há mais tempo deverão receber atenção prioritária.

## 686. Devolução de recursos

Deverá registrar:

- item;
- condição;
- origem;
- destino;
- responsável;
- manutenção;
- perda;
- dano.

## 687. Encerramento de permissões

Acessos e autoridades extraordinárias deverão ser revogados durante a desmobilização.

## 688. Pendências transferidas

Atividades que permanecerem deverão ser transferidas ao modo de recuperação ou operação ordinária.

## 689. Invariante da execução autorizada

Toda ação extraordinária deverá permanecer dentro de autoridade e finalidade reconhecíveis.

## 690. Invariante da mobilização proporcional

A capacidade mobilizada deverá corresponder à necessidade, preservando reservas futuras.

## 691. Invariante da proteção humana

Nenhuma resposta deverá tratar trabalhadores, voluntários ou afetados como recursos descartáveis.

## 692. Invariante da segurança por camadas

A perda de um controle não deverá eliminar todas as proteções.

## 693. Invariante da continuidade essencial

Funções indispensáveis deverão possuir alternativas, reservas ou modo degradado.

## 694. Invariante da custódia

Recursos, dados e evidências deverão atravessar transferências com responsáveis identificáveis.

## 695. Invariante da limitação tecnológica

Agentes, sensores e automações não deverão receber poderes extraordinários sem governança e supervisão.

## 696. Invariante da reversibilidade

Medidas excepcionais deverão permitir retorno seguro sempre que possível.

## 697. Invariante da prestação de contas

Gastos, mobilizações, acessos e decisões deverão produzir evidências proporcionais.

## 698. Invariante da capacidade futura

A resposta atual deverá preservar pessoas, recursos e estruturas necessários à recuperação.

## 699. Preparação para o Lote 5

Os próximos controles deverão aprofundar:

- estabilização;
- recuperação;
- reconstrução;
- transição;
- retorno à normalidade;
- encerramento;
- reparação;
- responsabilização;
- aprendizagem.

## 700. Resultado do Lote 4

Ao final desta camada, a Plataforma UNO deverá ser capaz de:

- transformar decisões em ações;
- mobilizar pessoas;
- integrar agentes;
- organizar logística;
- distribuir recursos;
- operar desconectada;
- proteger equipes;
- preservar serviços;
- atuar de forma degradada;
- manter evidências;
- alternar turnos;
- desmobilizar;
- preservar a capacidade futura.

Uma resposta extraordinária não será medida apenas pela força que consegue mobilizar.

Ela será medida pela capacidade de empregar essa força com:

- precisão;
- legitimidade;
- segurança;
- justiça;
- humanidade;
- rastreabilidade;
- consciência;
- possibilidade de retorno.

---

# Lote 5 — Estabilização, Recuperação, Retorno à Normalidade, Encerramento, Reparação e Aprendizagem

## 701. Propósito deste lote

Este lote estabelece como a Plataforma UNO deverá conduzir a transição entre:

- resposta extraordinária;
- estabilização;
- recuperação;
- reconstrução;
- retorno controlado;
- encerramento;
- responsabilização;
- aprendizagem;
- evolução.

## 702. Crise não termina quando o evento para

Mesmo após a interrupção da causa imediata, poderão permanecer:

- danos;
- riscos;
- pessoas afetadas;
- serviços degradados;
- dados inconsistentes;
- recursos comprometidos;
- fadiga;
- conflitos;
- obrigações;
- perda de confiança.

## 703. Estabilização

Estabilização será o estado em que a propagação ou deterioração principal foi contida, embora a normalidade ainda não tenha sido restaurada.

## 704. Critérios de estabilização

Deverão considerar:

- risco imediato reduzido;
- propagação contida;
- comando funcional;
- comunicação disponível;
- serviços essenciais preservados;
- capacidade suficiente;
- recursos controlados;
- afetados protegidos.

## 705. Estabilidade não presumida

A ausência temporária de novos alertas não comprovará estabilidade.

## 706. Estabilidade observada

O estado deverá permanecer sob observação durante período compatível com:

- causa;
- impacto;
- velocidade;
- dependências;
- risco de recorrência;
- capacidade de detecção.

## 707. Estabilização parcial

Partes da operação poderão estar estáveis enquanto outras permanecem críticas.

## 708. Estabilização territorial

Territórios diferentes poderão avançar em ritmos distintos.

## 709. Estabilização técnica

Sistemas e infraestruturas poderão voltar a responder sem que pessoas, processos e organizações tenham se recuperado.

## 710. Estabilização humana

Deverá considerar:

- segurança;
- atendimento;
- abrigo;
- alimentação;
- saúde;
- descanso;
- comunicação;
- reunificação;
- apoio psicossocial.

## 711. Estabilização institucional

Deverá restaurar capacidade suficiente de:

- autoridade;
- decisão;
- governança;
- coordenação;
- prestação de contas;
- comunicação;
- confiança.

## 712. Estabilização informacional

Deverá restabelecer:

- fontes;
- integridade;
- comunicação;
- contexto;
- registros;
- evidências;
- quadro situacional confiável.

## 713. Transição da resposta para recuperação

A transição deverá ser formalmente reconhecida.

Ela deverá informar:

- estado;
- autoridade;
- objetivos;
- equipes;
- recursos;
- riscos;
- pendências;
- modo seguinte;
- revisão.

## 714. Recuperação

Recuperação será o processo de restaurar capacidades, serviços, pessoas, organizações, territórios e confiança após a ruptura.

## 715. Recuperação não é simples reinicialização

Restabelecer tecnicamente um serviço não comprovará que:

- dados estão corretos;
- pessoas estão protegidas;
- processos funcionam;
- autoridade foi restaurada;
- dependências estão disponíveis;
- confiança retornou;
- causas foram tratadas.

## 716. Dimensões da recuperação

A recuperação deverá integrar dimensões:

- humana;
- operacional;
- tecnológica;
- informacional;
- institucional;
- financeira;
- territorial;
- ambiental;
- jurídica;
- social.

## 717. Recuperação humana

Deverá tratar:

- saúde;
- descanso;
- assistência;
- segurança;
- perdas;
- deslocamentos;
- vínculos;
- trabalho;
- apoio;
- participação.

## 718. Recuperação operacional

Deverá restaurar:

- capacidade;
- processos;
- equipes;
- serviços;
- recursos;
- procedimentos;
- cobertura;
- coordenação.

## 719. Recuperação tecnológica

Deverá restaurar:

- infraestrutura;
- sistemas;
- redes;
- identidades;
- integrações;
- automações;
- observabilidade;
- segurança.

## 720. Recuperação informacional

Deverá restaurar:

- dados;
- registros;
- contexto;
- proveniência;
- qualidade;
- integridade;
- disponibilidade;
- memória.

## 721. Recuperação institucional

Deverá restaurar:

- autoridade legítima;
- governança;
- contratos;
- responsabilidades;
- comunicação;
- confiança;
- prestação de contas.

## 722. Recuperação financeira

Deverá compreender:

- custos;
- reservas;
- pagamentos;
- remunerações;
- reparações;
- obrigações;
- financiamentos;
- sustentabilidade.

## 723. Recuperação territorial

Deverá considerar:

- acesso;
- infraestrutura;
- moradia;
- serviços;
- mobilidade;
- comunidades;
- ambiente;
- economia local.

## 724. Recuperação ambiental

Deverá incluir:

- contenção;
- descontaminação;
- restauração;
- monitoramento;
- compensação;
- prevenção;
- acompanhamento prolongado.

## 725. Recuperação jurídica

Deverá tratar:

- contratos;
- autorizações;
- direitos;
- responsabilidades;
- investigações;
- obrigações;
- disputas;
- medidas extraordinárias.

## 726. Recuperação social

Deverá apoiar:

- confiança;
- relações;
- participação;
- proteção;
- oportunidades;
- acesso;
- reconstrução comunitária.

## 727. Objetivos de recuperação

Cada dimensão deverá possuir:

- estado desejado;
- responsável;
- prioridade;
- prazo;
- recursos;
- dependências;
- evidências;
- critérios de conclusão.

## 728. Priorização da recuperação

Deverá considerar:

- vida;
- segurança;
- vulnerabilidade;
- serviços essenciais;
- dependências;
- impacto;
- tempo;
- reversibilidade;
- equidade;
- sustentabilidade.

## 729. Ordem de recuperação

A ordem deverá preservar relações de dependência.

Não deverá restaurar uma função sem as condições necessárias para operá-la com segurança.

## 730. Caminho crítico da recuperação

Deverão ser identificadas atividades cuja demora atrase todo o processo.

## 731. Recuperação paralela

Dimensões independentes poderão avançar simultaneamente.

## 732. Recuperação incompatível

Ações que disputem recursos ou produzam interferência deverão ser coordenadas.

## 733. Capacidade de recuperação

A capacidade deverá considerar:

- pessoas;
- especialistas;
- fornecedores;
- recursos;
- dados;
- infraestrutura;
- autoridade;
- orçamento;
- tempo;
- território.

## 734. Equipe de recuperação

Poderá ser diferente da equipe de resposta.

Ela deverá possuir competências para:

- restaurar;
- validar;
- reconstruir;
- documentar;
- reparar;
- aprender;
- comunicar.

## 735. Transição entre equipes

A equipe de resposta deverá realizar handover para a equipe de recuperação.

## 736. Conteúdo do handover de recuperação

Deverá incluir:

- causa conhecida;
- estado;
- medidas temporárias;
- recursos;
- riscos;
- danos;
- decisões;
- evidências;
- pendências;
- compromissos;
- afetados.

## 737. Medidas temporárias

Soluções emergenciais deverão ser catalogadas.

## 738. Validade da medida temporária

Cada solução deverá possuir:

- responsável;
- início;
- risco;
- limite;
- manutenção;
- condição de substituição;
- prazo;
- encerramento.

## 739. Fragilidade temporária

A recuperação deverá reconhecer que soluções provisórias podem possuir menor:

- segurança;
- capacidade;
- desempenho;
- suporte;
- durabilidade;
- observabilidade.

## 740. Dívida de crise

Atalhos e improvisações deverão ser registrados como dívida de crise.

## 741. Tipos de dívida de crise

Poderão existir dívidas:

- técnicas;
- operacionais;
- humanas;
- documentais;
- financeiras;
- contratuais;
- normativas;
- informacionais;
- de segurança;
- de confiança.

## 742. Plano de tratamento da dívida

Cada dívida deverá possuir:

- descrição;
- causa;
- risco;
- responsável;
- prioridade;
- prazo;
- ação;
- evidência;
- estado.

## 743. Dívida não esquecida

A redução da atenção pública não deverá apagar as pendências da recuperação.

## 744. Reconstrução

Reconstrução será a criação ou restauração de estruturas capazes de funcionar após perdas significativas.

## 745. Reconstrução não é reprodução automática

A organização deverá avaliar se reconstruir exatamente como antes reproduzirá as vulnerabilidades anteriores.

## 746. Reconstruir melhor

A reconstrução deverá buscar:

- segurança;
- resiliência;
- acessibilidade;
- sustentabilidade;
- redundância;
- capacidade;
- simplicidade;
- aprendizagem;
- justiça.

## 747. Participação na reconstrução

Pessoas e comunidades afetadas deverão participar de decisões que alterem suas condições futuras.

## 748. Reconstrução territorial

Deverá respeitar:

- cultura;
- ambiente;
- riscos;
- infraestrutura;
- mobilidade;
- economia;
- história;
- direitos;
- planejamento.

## 749. Reconstrução institucional

Poderá exigir revisão de:

- liderança;
- governança;
- políticas;
- contratos;
- responsabilidades;
- controles;
- cultura;
- transparência.

## 750. Reconstrução da confiança

A confiança poderá exigir:

- reconhecimento;
- verdade;
- explicação;
- participação;
- responsabilização;
- reparação;
- mudança;
- acompanhamento;
- tempo.

## 751. Recuperação de reputação

A reputação não deverá ser tratada apenas como problema de comunicação.

Ela deverá ser recuperada por comportamento institucional verificável.

## 752. Comunicação da recuperação

Deverá informar:

- o que foi restaurado;
- o que permanece limitado;
- riscos;
- medidas temporárias;
- próximos passos;
- canais;
- responsabilidades.

## 753. Expectativas realistas

Prazos deverão ser comunicados com honestidade, indicando incerteza e dependências.

## 754. Atualização contínua

A recuperação prolongada deverá possuir calendário de informações.

## 755. Comunicação de atraso

Atrasos deverão ser explicados e acompanhados de nova previsão ou alternativa.

## 756. Retorno à normalidade

O retorno será a transição governada do modo extraordinário para uma configuração ordinária sustentável.

## 757. Normalidade não presumida

A vontade de encerrar a crise não comprovará que as condições normais foram restauradas.

## 758. Nova normalidade operacional

A operação poderá retornar a configuração diferente da anterior quando o contexto tiver mudado legitimamente.

## 759. Normalidade não como permanência da exceção

Medidas extraordinárias não deverão ser renomeadas como normais para evitar sua revogação.

## 760. Critérios de retorno

Deverão verificar:

- risco;
- capacidade;
- cobertura;
- dados;
- segurança;
- autoridade;
- serviços;
- pessoas;
- fornecedores;
- comunicação;
- continuidade.

## 761. Retorno técnico

Sistemas deverão ser validados antes de receber carga completa.

## 762. Retorno operacional

Processos e equipes deverão demonstrar capacidade de executar de forma sustentável.

## 763. Retorno humano

As pessoas deverão possuir:

- descanso;
- cobertura;
- apoio;
- competência;
- segurança;
- jornada adequada;
- condições de retomada.

## 764. Retorno institucional

Autoridades ordinárias deverão ser restabelecidas.

## 765. Retorno dos controles

Controles reduzidos durante a crise deverão ser restaurados.

## 766. Retorno de políticas

Políticas temporariamente alteradas deverão ser:

- restauradas;
- substituídas legitimamente;
- revisadas;
- encerradas.

## 767. Retorno de acessos

Permissões extraordinárias deverão ser removidas ou reavaliadas.

## 768. Retorno de recursos

Recursos mobilizados deverão ser devolvidos, reparados, repostos ou formalmente transferidos.

## 769. Retorno de equipes

Equipes temporárias deverão realizar handover antes da desmobilização.

## 770. Retorno de fornecedores

Contratações extraordinárias deverão ser encerradas, convertidas ou revisadas conscientemente.

## 771. Retorno dos dados

Cópias, exportações e registros temporários deverão receber tratamento de:

- integração;
- retenção;
- proteção;
- eliminação;
- custódia;
- auditoria.

## 772. Retorno gradual

O volume deverá ser ampliado progressivamente quando houver risco de nova saturação.

## 773. Critérios de avanço

Cada etapa deverá depender de indicadores e evidências.

## 774. Critérios de recuo

A operação deverá retornar a modo de proteção quando sinais demonstrarem instabilidade.

## 775. Período de observação

Após a retomada, deverá existir monitoramento reforçado.

## 776. Recorrência

A repetição da condição deverá ser tratada como nova ocorrência relacionada ao histórico anterior.

## 777. Encerramento do modo extraordinário

O encerramento deverá ser formalmente declarado.

## 778. Autoridade de encerramento

Deverá possuir competência para revogar ou finalizar o estado declarado.

## 779. Conteúdo do encerramento

Deverá informar:

- modo encerrado;
- horário;
- autoridade;
- fundamento;
- estado atual;
- riscos residuais;
- medidas mantidas;
- pendências;
- próximos passos.

## 780. Encerramento parcial

Poderá ocorrer por:

- território;
- serviço;
- organização;
- função;
- medida;
- período.

## 781. Encerramento progressivo

Diferentes estruturas poderão ser desmobilizadas em momentos distintos.

## 782. Encerramento prematuro

Poderá produzir:

- recorrência;
- exposição;
- perda de cobertura;
- abandono;
- aumento de dano;
- perda de confiança.

## 783. Encerramento tardio

Poderá prolongar:

- restrições;
- custos;
- poderes;
- vigilância;
- jornadas;
- mobilização;
- incerteza.

## 784. Encerramento das autoridades extraordinárias

Delegações, mandatos e acessos deverão ser revogados ou expirados.

## 785. Encerramento dos canais extraordinários

Canais temporários deverão:

- informar encerramento;
- orientar novos contatos;
- preservar registros;
- proteger dados;
- ser desativados.

## 786. Encerramento financeiro

Deverá incluir:

- conciliação;
- pagamentos;
- saldos;
- devoluções;
- comprovações;
- auditorias;
- obrigações remanescentes.

## 787. Encerramento contratual

Contratos emergenciais deverão ser concluídos com:

- entrega;
- aceite;
- pendência;
- pagamento;
- responsabilidade;
- dados;
- recursos;
- documentação.

## 788. Encerramento logístico

Deverá tratar:

- inventário;
- devolução;
- manutenção;
- perdas;
- danos;
- armazenamento;
- descarte;
- reposição.

## 789. Encerramento humano

Deverá assegurar:

- desmobilização;
- descanso;
- apoio;
- reconhecimento;
- remuneração;
- comunicação;
- acompanhamento;
- retorno seguro.

## 790. Encerramento de voluntariado

Voluntários deverão receber:

- confirmação;
- devolução de recursos;
- orientação;
- apoio;
- reconhecimento;
- canais;
- encerramento de acessos.

## 791. Encerramento informacional

Deverá consolidar:

- registros;
- evidências;
- versões;
- dados;
- decisões;
- comunicações;
- classificações;
- custódia.

## 792. Encerramento da simulação

Exercícios deverão possuir encerramento explícito marcado como:

**FIM DA SIMULAÇÃO**

Isso deverá impedir que mensagens, alertas ou estados fictícios permaneçam interpretados como reais.

## 793. Pendências pós-encerramento

A crise poderá ser encerrada com ações ainda abertas.

Elas deverão migrar para:

- recuperação;
- operação ordinária;
- projeto;
- investigação;
- reparação;
- auditoria;
- melhoria.

## 794. Responsável pelas pendências

Cada pendência deverá possuir:

- titular;
- prazo;
- prioridade;
- recursos;
- estado;
- revisão;
- critério de conclusão.

## 795. Memória da crise

A memória deverá preservar:

- origem;
- sinais;
- classificação;
- declarações;
- decisões;
- ações;
- recursos;
- comunicações;
- impactos;
- recuperação;
- encerramento.

## 796. Linha do tempo

A reconstrução temporal deverá relacionar:

- evento;
- percepção;
- alerta;
- reconhecimento;
- decisão;
- execução;
- mudança;
- resultado;
- transição.

## 797. Registro cronológico de continuidade

Ao final de cada ciclo deverá existir marcador contendo:

- estado;
- decisões;
- responsáveis;
- mudanças;
- riscos;
- pendências;
- próximos passos;
- ponto de retomada.

## 798. Preservação de evidências

Evidências deverão permanecer sob cadeia de custódia adequada durante recuperação e investigação.

## 799. Investigação

A investigação deverá buscar compreender:

- o que ocorreu;
- como;
- por que;
- quais condições contribuíram;
- quais controles falharam;
- quais consequências surgiram;
- como evitar recorrência.

## 800. Investigação não reduzida à culpa

A busca prematura por culpado poderá ocultar fatores sistêmicos.

## 801. Responsabilidade individual

Condutas individuais deverão ser analisadas segundo:

- autoridade;
- competência;
- intenção;
- informação;
- condição;
- escolha;
- pressão;
- consequências;
- regras aplicáveis.

## 802. Responsabilidade organizacional

Deverá considerar:

- planejamento;
- cultura;
- recursos;
- governança;
- treinamento;
- controles;
- incentivos;
- supervisão;
- resposta.

## 803. Responsabilidade federada

Deverá analisar relações e dependências entre organizações.

## 804. Responsabilidade do fornecedor

Contratos não deverão impedir avaliação de falhas relacionadas ao fornecimento.

## 805. Responsabilidade algorítmica

Quando automações ou agentes participarem, deverão ser analisados:

- modelo;
- dados;
- versão;
- configuração;
- permissões;
- supervisão;
- decisão;
- responsáveis institucionais.

## 806. Causa imediata

Será o evento diretamente relacionado à falha observada.

## 807. Causa contribuinte

Será uma condição que aumentou a probabilidade ou o impacto.

## 808. Causa sistêmica

Será uma característica estrutural que permitiu ou ampliou a falha.

## 809. Causa latente

Poderá permanecer oculta por longo período até combinar-se com outros fatores.

## 810. Fator humano

Não deverá ser utilizado como explicação genérica.

Deverão ser analisados:

- carga;
- fadiga;
- interface;
- treinamento;
- contexto;
- comunicação;
- autoridade;
- pressão;
- cultura;
- ferramentas.

## 811. Falha de governança

Poderá envolver:

- ausência de decisão;
- conflito de autoridade;
- ocultação;
- supervisão insuficiente;
- incentivo inadequado;
- falta de prestação de contas.

## 812. Falha de detecção

Deverá analisar:

- cobertura;
- sinais;
- limiares;
- fontes;
- alertas;
- interpretação;
- cultura;
- tempo;
- resposta.

## 813. Falha de comunicação

Deverá analisar:

- canal;
- linguagem;
- destinatário;
- tempo;
- confirmação;
- acessibilidade;
- autoridade;
- coerência.

## 814. Falha de continuidade

Deverá analisar:

- alternativas;
- reservas;
- substitutos;
- recuperação;
- dependências;
- testes;
- documentação.

## 815. Falha de aprendizagem

Ocorrerá quando condição conhecida repetir-se porque aprendizados anteriores não foram aplicados.

## 816. Cultura justa

A investigação deverá equilibrar:

- verdade;
- responsabilidade;
- aprendizagem;
- proporcionalidade;
- proteção;
- devido processo;
- reparação.

## 817. Independência da investigação

Eventos graves poderão exigir participação independente.

## 818. Escopo da investigação

Deverá ser definido sem impedir expansão quando novas evidências surgirem.

## 819. Contraditório

Pessoas e organizações afetadas pelas conclusões deverão possuir oportunidade de apresentar informações e contestar.

## 820. Relatório

O relatório deverá distinguir:

- fatos;
- evidências;
- hipóteses;
- análises;
- conclusões;
- limitações;
- recomendações.

## 821. Transparência do relatório

A divulgação deverá equilibrar:

- interesse público;
- privacidade;
- segurança;
- investigação;
- direitos;
- aprendizagem;
- obrigação legal.

## 822. Reparação

A reparação deverá buscar reduzir ou compensar danos produzidos.

## 823. Formas de reparação

Poderão incluir:

- restauração;
- restituição;
- indenização;
- assistência;
- correção;
- reconhecimento;
- desculpa;
- garantia;
- mudança;
- acompanhamento.

## 824. Reparação humana

Deverá considerar necessidades reais das pessoas e comunidades afetadas.

## 825. Reparação ambiental

Deverá buscar restaurar condições e acompanhar efeitos de longo prazo.

## 826. Reparação institucional

Poderá exigir:

- mudança de liderança;
- revisão de governança;
- transparência;
- controle;
- participação;
- restituição de confiança.

## 827. Reparação não substitui prevenção

Compensar não deverá ser tratado como autorização para repetir dano evitável.

## 828. Prestação de contas

A organização deverá apresentar:

- decisões;
- recursos;
- resultados;
- impactos;
- falhas;
- correções;
- reparações;
- pendências.

## 829. Prestação financeira

Deverá demonstrar:

- entradas;
- gastos;
- contratos;
- pagamentos;
- doações;
- saldos;
- perdas;
- devoluções.

## 830. Prestação operacional

Deverá demonstrar:

- capacidades mobilizadas;
- ações;
- resultados;
- desvios;
- tempos;
- continuidade;
- recuperação.

## 831. Prestação humana

Deverá considerar:

- pessoas mobilizadas;
- jornadas;
- proteção;
- incidentes;
- apoio;
- descanso;
- efeitos;
- recuperação.

## 832. Prestação pública

Quando houver interesse público, as informações deverão ser disponibilizadas de forma acessível.

## 833. Sanção

Sanções deverão possuir:

- fundamento;
- autoridade;
- proporcionalidade;
- evidência;
- contraditório;
- finalidade;
- revisão;
- registro.

## 834. Sanção não como aprendizagem suficiente

A punição isolada poderá não corrigir causas estruturais.

## 835. Ação corretiva

Deverá reduzir a causa ou condição que permitiu a falha.

## 836. Ação preventiva

Deverá reduzir risco semelhante antes que nova ocorrência aconteça.

## 837. Plano de ação pós-crise

Deverá conter:

- ação;
- responsável;
- prazo;
- prioridade;
- recurso;
- evidência;
- validação;
- estado.

## 838. Acompanhamento

Ações não deverão ser consideradas concluídas apenas porque foram propostas.

## 839. Verificação de eficácia

A organização deverá demonstrar se a mudança realmente reduziu o risco.

## 840. Reabertura

Uma ação poderá ser reaberta quando:

- for ineficaz;
- estiver incompleta;
- o contexto mudar;
- a recorrência ocorrer;
- a evidência for insuficiente.

## 841. Aprendizagem de crise

A experiência deverá transformar-se em:

- conhecimento;
- procedimento;
- capacidade;
- treinamento;
- controle;
- arquitetura;
- cultura;
- preparação.

## 842. Lição identificada

Uma observação somente será lição identificada até que seja analisada e formalizada.

## 843. Lição aprendida

Somente será considerada aprendida quando produzir mudança aplicada e verificada.

## 844. Lição local

Deverá preservar o contexto em que surgiu.

## 845. Lição federada

Deverá ser compartilhada quando puder fortalecer outras organizações.

## 846. Alerta de aprendizagem

Lições urgentes poderão ser comunicadas antes do relatório final.

## 847. Proteção de informação no aprendizado

O compartilhamento deverá respeitar:

- privacidade;
- segurança;
- sigilo;
- direitos;
- investigação;
- propriedade intelectual.

## 848. Atualização de runbooks

Procedimentos deverão ser revisados conforme as evidências.

## 849. Atualização de escalas

A experiência poderá demonstrar necessidade de:

- mais pessoas;
- competências;
- reservas;
- sobreposição;
- turnos;
- apoio;
- descanso.

## 850. Atualização de capacidades

Poderá incluir:

- novas ferramentas;
- fornecedores;
- especialistas;
- redundâncias;
- estoques;
- integrações;
- treinamentos.

## 851. Atualização de governança

Poderá alterar:

- autoridade;
- delegação;
- quórum;
- comunicação;
- comando;
- supervisão;
- prestação de contas.

## 852. Atualização de detecção

Deverá melhorar:

- sinais;
- limiares;
- fontes;
- alertas;
- correlação;
- escalonamento;
- cobertura.

## 853. Atualização de comunicação

Deverá considerar:

- linguagem;
- canais;
- acessibilidade;
- frequência;
- porta-vozes;
- correções;
- escuta.

## 854. Atualização de continuidade

Deverá tratar dependências, substitutos, reservas, modos degradados e recuperação.

## 855. Exercícios posteriores

A organização deverá testar se as mudanças funcionam.

Todo cenário fictício deverá ser marcado como:

**SIMULAÇÃO**

## 856. Revisão pós-implementação

Após período adequado, deverá avaliar:

- eficácia;
- efeitos adversos;
- adesão;
- custo;
- sustentabilidade;
- necessidade de ajuste.

## 857. Memória institucional permanente

A crise deverá permanecer como parte contextualizada da história, sem ser apagada nem explorada indevidamente.

## 858. Legado da crise

O legado desejado deverá ser:

- maior proteção;
- melhor capacidade;
- mais consciência;
- mais confiança;
- mais cooperação;
- menos vulnerabilidade;
- instituições fortalecidas.

## 859. Trauma institucional

A organização deverá reconhecer que eventos graves podem alterar cultura, comportamento e confiança por longo período.

## 860. Superação não é esquecimento

Recuperar-se não exigirá apagar perdas, responsabilidades ou aprendizados.

## 861. Reconhecimento das pessoas

Contribuições deverão ser reconhecidas sem glorificar:

- exposição;
- exaustão;
- violação de jornada;
- ausência de proteção;
- improvisação permanente.

## 862. Memoriais e registros públicos

Quando apropriado, poderão preservar a memória das pessoas e comunidades afetadas com dignidade e participação.

## 863. Preparação para recorrência

A recuperação deverá considerar que o evento pode repetir-se.

## 864. Reserva recomposta

Recursos consumidos deverão ser repostos conforme a criticidade.

## 865. Capacidade reconstruída

Equipes e estruturas deverão ser requalificadas antes de nova mobilização crítica.

## 866. Confiança reconstruída

A confiança deverá ser demonstrada por comportamento consistente ao longo do tempo.

## 867. Invariante do encerramento formal

Nenhum modo extraordinário deverá permanecer ativo por esquecimento.

## 868. Invariante da revogação

Poderes, acessos e medidas extraordinárias deverão ser encerrados quando a necessidade terminar.

## 869. Invariante da reparação

Danos produzidos deverão ser reconhecidos e tratados dentro das responsabilidades aplicáveis.

## 870. Invariante da memória verdadeira

O encerramento não deverá apagar decisões, falhas, dissensos, impactos ou responsabilidades.

## 871. Invariante da aprendizagem aplicada

Uma lição somente será considerada aprendida quando modificar e fortalecer a operação.

## 872. Invariante da reconstrução consciente

A organização não deverá reconstruir automaticamente as mesmas vulnerabilidades que permitiram a crise.

## 873. Invariante da recuperação humana

A operação não será considerada recuperada enquanto pessoas e equipes permanecerem abandonadas aos efeitos da resposta.

## 874. Preparação para o Lote 6

O próximo lote consolidará:

- modelo integrado;
- objetos;
- estados;
- fluxos;
- invariantes;
- garantias;
- implementação;
- maturidade;
- testes;
- encerramento oficial.

## 875. Resultado do Lote 5

Ao final desta camada, a Plataforma UNO deverá ser capaz de:

- reconhecer estabilização;
- transferir resposta para recuperação;
- restaurar capacidades;
- reconstruir conscientemente;
- retornar gradualmente;
- encerrar modos;
- revogar poderes;
- preservar evidências;
- investigar;
- reparar;
- prestar contas;
- aprender;
- testar melhorias.

Uma crise não estará verdadeiramente encerrada quando os alertas cessarem ou a atenção pública desaparecer.

Ela estará encerrada quando a organização tiver conseguido:

- proteger;
- estabilizar;
- recuperar;
- reparar;
- explicar;
- aprender;
- revogar a exceção;
- preservar a memória;
- fortalecer sua capacidade futura.

---

# Lote 6 — Modelo Integrado, Invariantes, Garantias, Implementação, Maturidade e Conclusão

## 876. Propósito deste lote

Este lote consolida a Engenharia Oficial de operação crítica, crise e modos extraordinários em um modelo integrado capaz de orientar:

- arquitetura;
- implementação;
- governança;
- operação;
- supervisão;
- auditoria;
- recuperação;
- aprendizagem;
- evolução.

## 877. Modelo integrado de crise

O modelo deverá relacionar:

- realidade;
- sinais;
- eventos;
- criticidade;
- classificação;
- declaração;
- modo operacional;
- autoridade;
- comando;
- decisão;
- execução;
- recursos;
- pessoas;
- comunicação;
- recuperação;
- memória.

## 878. Crise como ciclo institucional

A crise deverá ser compreendida como ciclo composto por:

1. preparação;
2. percepção;
3. reconhecimento;
4. classificação;
5. declaração;
6. ativação;
7. coordenação;
8. execução;
9. estabilização;
10. recuperação;
11. transição;
12. encerramento;
13. reparação;
14. aprendizagem;
15. evolução.

## 879. Preparação antes do evento

A capacidade extraordinária deverá ser construída antes que sua utilização seja necessária.

## 880. Percepção

A organização deverá possuir meios plurais de observar mudanças relevantes.

## 881. Reconhecimento

Sinais deverão ser transformados em consciência situacional.

## 882. Classificação

A gravidade deverá ser traduzida em nível e contexto capazes de orientar ação.

## 883. Declaração

O estado extraordinário deverá ser formalizado por autoridade competente.

## 884. Ativação

Capacidades, equipes, recursos, autoridades e canais deverão ser efetivamente mobilizados.

## 885. Coordenação

As partes deverão compartilhar propósito, contexto, prioridades e responsabilidades.

## 886. Execução

A decisão deverá transformar-se em ação proporcional, segura e rastreável.

## 887. Estabilização

A propagação ou deterioração deverá ser contida.

## 888. Recuperação

Capacidades, pessoas, serviços, dados e confiança deverão ser restaurados.

## 889. Transição

A operação deverá reduzir progressivamente as estruturas extraordinárias.

## 890. Encerramento

Modos, poderes, acessos e medidas deverão ser formalmente finalizados.

## 891. Reparação

Danos e responsabilidades deverão ser reconhecidos e tratados.

## 892. Aprendizagem

A experiência deverá alterar a capacidade futura da organização.

## 893. Evolução

A arquitetura deverá incorporar mudanças verificadas sem abandonar seus princípios.

## 894. Camadas do modelo

O modelo deverá integrar as camadas:

- ética;
- institucional;
- normativa;
- territorial;
- humana;
- operacional;
- tecnológica;
- informacional;
- comunicacional;
- financeira;
- temporal;
- federada;
- histórica.

## 895. Camada ética

A camada ética deverá preservar:

- vida;
- dignidade;
- justiça;
- verdade;
- prudência;
- responsabilidade;
- solidariedade;
- proporcionalidade.

## 896. Camada institucional

Deverá definir:

- organizações;
- autoridades;
- mandatos;
- responsabilidades;
- governança;
- comandos;
- supervisão;
- prestação de contas.

## 897. Camada normativa

Deverá relacionar:

- leis;
- normas;
- regulamentos;
- contratos;
- políticas;
- procedimentos;
- princípios;
- exceções legítimas.

## 898. Camada territorial

Deverá representar:

- áreas afetadas;
- jurisdições;
- comunidades;
- infraestrutura;
- acesso;
- recursos;
- vulnerabilidades;
- riscos ambientais.

## 899. Camada humana

Deverá proteger:

- pessoas afetadas;
- trabalhadores;
- voluntários;
- lideranças;
- especialistas;
- comunidades;
- grupos vulneráveis;
- gerações futuras.

## 900. Camada operacional

Deverá organizar:

- objetivos;
- prioridades;
- equipes;
- ações;
- recursos;
- períodos;
- handovers;
- resultados.

## 901. Camada tecnológica

Deverá sustentar:

- percepção;
- comunicação;
- processamento;
- automação;
- agentes;
- infraestrutura;
- segurança;
- recuperação.

## 902. Camada informacional

Deverá preservar:

- dados;
- contexto;
- evidências;
- hipóteses;
- decisões;
- registros;
- integridade;
- memória.

## 903. Camada comunicacional

Deverá coordenar informações:

- internas;
- públicas;
- técnicas;
- comunitárias;
- institucionais;
- interorganizacionais.

## 904. Camada financeira

Deverá controlar:

- reservas;
- gastos;
- contratações;
- doações;
- pagamentos;
- reparações;
- auditoria;
- prestação de contas.

## 905. Camada temporal

Deverá controlar:

- início;
- duração;
- validade;
- revisão;
- turnos;
- transições;
- expiração;
- encerramento.

## 906. Camada federada

Deverá coordenar organizações autônomas sem apagar competências e responsabilidades.

## 907. Camada histórica

Deverá preservar a verdade da crise para investigação, reparação, aprendizagem e continuidade institucional.

## 908. Objetos fundamentais

A implementação deverá representar explicitamente:

- sinal;
- alerta;
- evento;
- ocorrência;
- incidente;
- crise;
- classificação;
- declaração;
- modo;
- autoridade;
- comando;
- decisão;
- ação;
- recurso;
- comunicação;
- evidência;
- impacto;
- recuperação;
- encerramento;
- aprendizado.

## 909. Objeto sinal

O sinal deverá possuir:

- origem;
- tipo;
- horário;
- localização;
- valor;
- contexto;
- confiança;
- estado;
- relacionamento.

## 910. Objeto alerta

O alerta deverá possuir:

- prioridade;
- destinatário;
- condição;
- ação esperada;
- prazo;
- confirmação;
- escalonamento;
- encerramento.

## 911. Objeto evento

O evento deverá registrar:

- natureza;
- origem;
- momento;
- território;
- objetos afetados;
- evidências;
- relações;
- estado.

## 912. Objeto ocorrência

A ocorrência deverá reunir eventos relacionados sob acompanhamento operacional.

## 913. Objeto incidente

O incidente deverá possuir:

- impacto;
- gravidade;
- responsável;
- serviço;
- ações;
- evidências;
- comunicação;
- recuperação.

## 914. Objeto crise

A crise deverá integrar:

- identidade;
- origem;
- classificação;
- declaração;
- território;
- organizações;
- comando;
- objetivos;
- impactos;
- decisões;
- recuperação;
- encerramento.

## 915. Objeto classificação

Deverá registrar:

- nível;
- dimensões;
- critérios;
- evidências;
- confiança;
- autoridade;
- validade;
- histórico.

## 916. Objeto declaração

Deverá conter:

- autoridade;
- fundamento;
- modo;
- escopo;
- território;
- início;
- duração;
- medidas;
- limites;
- revisão;
- encerramento.

## 917. Objeto modo operacional

Deverá definir:

- estado;
- regras;
- autoridades;
- capacidades;
- controles;
- prioridades;
- acessos;
- condições de transição.

## 918. Objeto autoridade extraordinária

Deverá possuir:

- titular;
- origem;
- escopo;
- poderes;
- restrições;
- início;
- expiração;
- supervisão;
- revogação.

## 919. Objeto comando

Deverá registrar:

- estrutura;
- titular;
- níveis;
- funções;
- organizações;
- localização;
- canais;
- sucessão;
- período.

## 920. Objeto decisão

Deverá preservar:

- autoridade;
- contexto;
- alternativas;
- evidências;
- incerteza;
- escolha;
- validade;
- consequências;
- revisão.

## 921. Objeto ação

Deverá registrar:

- responsável;
- ordem;
- objetivo;
- início;
- fim;
- recurso;
- estado;
- resultado;
- evidência;
- desvio.

## 922. Objeto recurso extraordinário

Deverá possuir:

- titularidade;
- custódia;
- quantidade;
- localização;
- estado;
- alocação;
- consumo;
- devolução;
- prestação de contas.

## 923. Objeto comunicação

Deverá registrar:

- emissor;
- destinatários;
- conteúdo;
- tipo;
- versão;
- canal;
- horário;
- aprovação;
- correção.

## 924. Objeto evidência

Deverá preservar:

- origem;
- integridade;
- cadeia de custódia;
- classificação;
- acesso;
- relação;
- retenção;
- contestação.

## 925. Objeto impacto

Deverá registrar:

- dimensão;
- afetados;
- magnitude;
- duração;
- território;
- reversibilidade;
- evidência;
- atualização.

## 926. Objeto recuperação

Deverá possuir:

- dimensão;
- objetivo;
- estado inicial;
- estado desejado;
- ações;
- recursos;
- responsável;
- critério de conclusão.

## 927. Objeto encerramento

Deverá registrar:

- autoridade;
- momento;
- fundamento;
- estado;
- poderes revogados;
- riscos residuais;
- pendências;
- comunicação.

## 928. Objeto aprendizado

Deverá relacionar:

- experiência;
- evidência;
- análise;
- recomendação;
- mudança;
- responsável;
- validação;
- eficácia.

## 929. Relações fundamentais

A implementação deverá preservar relações como:

- sinal indica evento;
- alerta comunica risco;
- evento origina ocorrência;
- ocorrência pode tornar-se incidente;
- incidentes podem compor crise;
- classificação orienta declaração;
- declaração ativa modo;
- modo constitui autoridade;
- autoridade forma comando;
- comando toma decisão;
- decisão autoriza ação;
- ação utiliza recurso;
- ação produz resultado e evidência;
- impacto orienta recuperação;
- recuperação permite encerramento;
- encerramento produz aprendizagem.

## 930. Relações temporais

Todas as relações extraordinárias deverão possuir início, validade, revisão e término.

## 931. Estado atual não apaga histórico

A mudança de classificação ou modo deverá preservar os estados anteriores.

## 932. Estados do sinal

Um sinal poderá estar:

- recebido;
- em validação;
- confirmado;
- relacionado;
- descartado;
- escalonado;
- encerrado.

## 933. Estados do alerta

Um alerta poderá estar:

- criado;
- enviado;
- entregue;
- reconhecido;
- em tratamento;
- escalonado;
- resolvido;
- encerrado.

## 934. Estados da ocorrência

Uma ocorrência poderá estar:

- registrada;
- em triagem;
- em investigação;
- classificada;
- contida;
- monitorada;
- recuperando;
- encerrada.

## 935. Estados da crise

Uma crise poderá estar:

- emergente;
- reconhecida;
- declarada;
- ativa;
- escalada;
- estabilizando;
- estabilizada;
- recuperando;
- transitando;
- encerrada.

## 936. Estados do modo

O modo poderá estar:

- planejado;
- disponível;
- solicitado;
- autorizado;
- ativando;
- ativo;
- limitado;
- reduzindo;
- encerrado.

## 937. Estados do comando

O comando poderá estar:

- nomeado;
- preparando;
- ativo;
- transferindo;
- substituído;
- desmobilizando;
- encerrado.

## 938. Estados da decisão

Uma decisão poderá estar:

- proposta;
- deliberando;
- aprovada;
- rejeitada;
- vigente;
- executada;
- revisada;
- substituída;
- revogada;
- expirada.

## 939. Estados da ação

Uma ação poderá estar:

- planejada;
- autorizada;
- mobilizando;
- executando;
- limitada;
- bloqueada;
- interrompida;
- concluída;
- falha;
- cancelada.

## 940. Estados da recuperação

A recuperação poderá estar:

- avaliada;
- planejada;
- priorizada;
- em execução;
- limitada;
- validando;
- concluída;
- reaberta.

## 941. Estados do encerramento

O encerramento poderá estar:

- proposto;
- em validação;
- autorizado;
- comunicado;
- executado;
- verificado;
- concluído.

## 942. Transição governada

Cada mudança de estado deverá possuir:

- gatilho;
- autoridade;
- condição;
- ação;
- evidência;
- comunicação;
- consequência;
- reversão quando aplicável.

## 943. Fluxo de percepção

Deverá integrar:

1. observar;
2. registrar;
3. correlacionar;
4. verificar;
5. classificar;
6. encaminhar.

## 944. Fluxo de declaração

Deverá integrar:

1. compreender;
2. fundamentar;
3. identificar autoridade;
4. delimitar escopo;
5. definir medidas;
6. estabelecer duração;
7. declarar;
8. comunicar.

## 945. Fluxo de ativação

Deverá integrar:

1. constituir comando;
2. mobilizar equipes;
3. liberar recursos;
4. ativar canais;
5. ajustar acessos;
6. confirmar capacidades;
7. iniciar ciclos;
8. acompanhar.

## 946. Fluxo de execução

Deverá integrar:

1. priorizar;
2. planejar;
3. autorizar;
4. executar;
5. verificar;
6. adaptar;
7. registrar;
8. transferir.

## 947. Fluxo de recuperação

Deverá integrar:

1. estabilizar;
2. avaliar danos;
3. priorizar;
4. restaurar;
5. reconstruir;
6. validar;
7. transicionar;
8. monitorar.

## 948. Fluxo de encerramento

Deverá integrar:

1. verificar critérios;
2. consultar responsáveis;
3. autorizar;
4. revogar poderes;
5. desmobilizar;
6. comunicar;
7. transferir pendências;
8. registrar.

## 949. Fluxo de aprendizagem

Deverá integrar:

1. preservar evidências;
2. reconstruir fatos;
3. analisar;
4. responsabilizar;
5. reparar;
6. recomendar;
7. implementar;
8. testar;
9. verificar eficácia;
10. incorporar à memória.

## 950. Invariante da vida

A proteção da vida deverá permanecer prioridade fundamental.

## 951. Invariante da dignidade

Nenhuma crise deverá transformar pessoas em objetos de controle, exposição ou descarte.

## 952. Invariante da verdade

A organização deverá distinguir fatos, hipóteses, incertezas, decisões e simulações.

## 953. Invariante da legitimidade

Todo poder extraordinário deverá possuir fundamento reconhecível.

## 954. Invariante da responsabilidade

Toda decisão e ação deverá possuir responsável atribuível.

## 955. Invariante da autoridade delimitada

Nenhuma autoridade extraordinária deverá ser ilimitada em objeto, território, ação ou tempo.

## 956. Invariante da temporalidade

Toda exceção deverá possuir início, revisão, expiração e encerramento.

## 957. Invariante da proporcionalidade

A intensidade da resposta deverá corresponder ao risco e à necessidade.

## 958. Invariante da necessidade

Uma medida extraordinária somente deverá ser utilizada enquanto os meios menos restritivos forem insuficientes.

## 959. Invariante da reversibilidade

Decisões deverão preservar possibilidade de retorno quando o contexto permitir.

## 960. Invariante da subsidiariedade

A autoridade deverá permanecer no nível mais próximo que possa atuar com legitimidade e capacidade.

## 961. Invariante da solidariedade

Organizações com capacidade deverão apoiar aquelas ultrapassadas pela realidade.

## 962. Invariante da não exploração

A crise não deverá ser utilizada para obter vantagem ilegítima.

## 963. Invariante da não discriminação

Proteção, atendimento e recursos deverão ser distribuídos por critérios legítimos.

## 964. Invariante da acessibilidade

Informações e serviços críticos deverão permanecer acessíveis a pessoas com diferentes condições.

## 965. Invariante da continuidade

Funções essenciais deverão possuir formas de preservação, substituição ou degradação controlada.

## 966. Invariante da capacidade futura

A resposta presente não deverá destruir os recursos humanos e materiais necessários à recuperação.

## 967. Invariante da segurança

A urgência não deverá eliminar proteções essenciais.

## 968. Invariante da evidência

A simplificação dos processos não deverá apagar a rastreabilidade mínima.

## 969. Invariante da memória

O encerramento não deverá apagar a história da crise.

## 970. Invariante da prestação de contas

Poderes e recursos extraordinários deverão ser explicados e auditados.

## 971. Invariante da revogação

Acessos, mandatos, medidas e estruturas extraordinárias deverão terminar com a necessidade.

## 972. Invariante da reparação

Danos e violações deverão ser tratados dentro das responsabilidades aplicáveis.

## 973. Invariante da aprendizagem aplicada

Toda crise relevante deverá produzir fortalecimento verificável.

## 974. Invariante da supervisão de agentes

Agentes não deverão receber autoridade ilimitada em razão da urgência.

## 975. Invariante da proteção humana

Trabalhadores, voluntários, especialistas e lideranças deverão possuir jornada, segurança, descanso e apoio.

## 976. Garantias estruturais

Deverão incluir:

- níveis;
- modos;
- linhas de sucessão;
- comandos;
- funções;
- contratos;
- reservas;
- redundâncias;
- canais alternativos;
- planos.

## 977. Garantias institucionais

Deverão incluir:

- autoridade;
- limites;
- supervisão;
- colegiados;
- contestação;
- prestação de contas;
- auditoria;
- revogação.

## 978. Garantias operacionais

Deverão incluir:

- procedimentos;
- checklists;
- escalonamento;
- comunicação;
- handover;
- contingência;
- verificação;
- recuperação.

## 979. Garantias humanas

Deverão incluir:

- segurança;
- descanso;
- proteção;
- acessibilidade;
- apoio;
- não retaliação;
- substituição;
- recuperação.

## 980. Garantias informacionais

Deverão preservar:

- fontes;
- classificação;
- proveniência;
- integridade;
- contexto;
- retenção;
- custódia;
- disponibilidade.

## 981. Garantias tecnológicas

Deverão incluir:

- redundância;
- isolamento;
- reversão;
- monitoramento;
- controle de acesso;
- backup;
- recuperação;
- operação manual.

## 982. Garantias comunicacionais

Deverão incluir:

- fonte oficial;
- múltiplos canais;
- acessibilidade;
- atualização;
- correção;
- escuta;
- registro;
- linguagem clara.

## 983. Garantias financeiras

Deverão incluir:

- limites;
- autorizações;
- segregação;
- comprovantes;
- conciliação;
- auditoria;
- devolução;
- transparência.

## 984. Garantias federadas

Deverão preservar autonomia e responsabilidade entre organizações participantes.

## 985. Garantias temporais

Deverão impedir que medidas extraordinárias permaneçam indefinidamente.

## 986. Conformidade por design

Modos extraordinários deverão nascer relacionados às normas, competências e obrigações aplicáveis.

## 987. Catálogo de modos

A Plataforma UNO deverá manter catálogo contendo:

- modo;
- finalidade;
- gatilhos;
- autoridade;
- medidas;
- limites;
- duração;
- controles;
- transições;
- encerramento.

## 988. Catálogo de autoridades

Deverá indicar quem pode:

- declarar;
- ativar;
- decidir;
- interromper;
- ampliar;
- reduzir;
- encerrar;
- auditar.

## 989. Catálogo de capacidades extraordinárias

Deverá registrar:

- capacidade;
- titular;
- prontidão;
- tempo;
- território;
- limite;
- operador;
- substituto;
- dependências.

## 990. Catálogo de recursos de crise

Deverá manter estado de:

- reservas;
- equipamentos;
- instalações;
- equipes;
- especialistas;
- fornecedores;
- canais;
- recursos financeiros.

## 991. Implementação progressiva

A implementação poderá seguir:

1. conceitos e estados;
2. sinais e alertas;
3. classificação;
4. declaração;
5. modos;
6. comando;
7. decisão;
8. execução;
9. comunicação;
10. recuperação;
11. encerramento;
12. aprendizagem.

## 992. Primeira etapa — conceitos

A organização deverá adotar linguagem comum.

## 993. Segunda etapa — percepção

Deverá estruturar fontes, sinais, alertas e lacunas.

## 994. Terceira etapa — classificação

Deverá estabelecer critérios e autoridades.

## 995. Quarta etapa — declaração

Deverá formalizar escopo, duração, medidas e revisão.

## 996. Quinta etapa — modos

Deverá traduzir declarações em configurações operacionais.

## 997. Sexta etapa — comando

Deverá constituir funções, autoridade, sucessão e supervisão.

## 998. Sétima etapa — decisão

Deverá preservar contexto, atribuição, alternativas e validade.

## 999. Oitava etapa — execução

Deverá coordenar ações, pessoas, agentes e recursos.

## 1000. Nona etapa — comunicação

Deverá integrar canais, públicos, mensagens, acessibilidade e correção.

## 1001. Décima etapa — recuperação

Deverá restaurar pessoas, capacidades, serviços e confiança.

## 1002. Décima primeira etapa — encerramento

Deverá revogar poderes, desmobilizar e transferir pendências.

## 1003. Décima segunda etapa — aprendizagem

Deverá transformar experiência em capacidade futura.

## 1004. Fundação antes da automação

A organização deverá definir autoridade, responsabilidade, limites e modos antes de automatizar decisões extraordinárias.

## 1005. Automação permitida

Poderá apoiar:

- detecção;
- correlação;
- alerta;
- proteção técnica;
- mobilização;
- registro;
- síntese;
- comunicação aprovada;
- recuperação.

## 1006. Automação condicionada

Ações de impacto elevado deverão exigir confirmação, salvo proteção previamente autorizada e estritamente limitada.

## 1007. Automação proibida

Agentes não deverão autonomamente:

- declarar crise institucional;
- suspender direitos;
- mobilizar recursos humanos ilimitados;
- divulgar informações sensíveis;
- assumir comando;
- eliminar evidências;
- encerrar prestação de contas.

## 1008. Botão de interrupção

Deverá existir mecanismo para interromper automações extraordinárias.

## 1009. Retorno ao controle humano

O handover deverá fornecer contexto suficiente para a pessoa compreender e assumir.

## 1010. Interface de situação

O painel deverá apresentar:

- classificação;
- modo;
- território;
- comando;
- objetivos;
- ações;
- recursos;
- impactos;
- riscos;
- decisões;
- recuperação.

## 1011. Interface de comando

Deverá permitir:

- atribuir funções;
- definir períodos;
- aprovar decisões;
- mobilizar;
- acompanhar;
- comunicar;
- transferir;
- encerrar.

## 1012. Interface de campo

Deverá ser adequada a:

- mobilidade;
- baixa conectividade;
- urgência;
- acessibilidade;
- segurança;
- registro rápido;
- sincronização.

## 1013. Interface pública

Deverá oferecer:

- estado;
- orientação;
- locais;
- canais;
- atualizações;
- acessibilidade;
- correções;
- encerramento.

## 1014. Interface de auditoria

Deverá permitir reconstruir:

- declarações;
- autoridades;
- decisões;
- gastos;
- acessos;
- ações;
- evidências;
- encerramento.

## 1015. Fonte da verdade da crise

A operação deverá possuir referência oficial do estado vigente.

## 1016. Fonte alternativa

Deverá existir meio alternativo durante indisponibilidade do sistema principal.

## 1017. Controle de versão

Planos, mapas, mensagens e decisões deverão possuir versão e validade.

## 1018. Alerta de informação vencida

Painéis deverão indicar quando dados estiverem desatualizados.

## 1019. Teste de detecção

Deverá validar se os sinais alcançam responsáveis dentro do tempo necessário.

## 1020. Teste de classificação

Deverá verificar coerência, contexto, autoridade e reclassificação.

## 1021. Teste de declaração

Deverá validar escopo, comunicação, duração, limites e revisão.

## 1022. Teste de ativação

Deverá comprovar que capacidades declaradas realmente respondem.

## 1023. Teste de comando

Deverá validar funções, autoridade, sucessão, comunicação e handover.

## 1024. Teste de decisão

Deverá verificar atribuição, evidências, alternativas, validade e contestação.

## 1025. Teste de comunicação

Deverá incluir:

- canais;
- acessibilidade;
- confirmação;
- correção;
- indisponibilidade digital;
- públicos diferentes.

## 1026. Teste de mobilização

Deverá validar pessoas, recursos, logística, tempos e reservas.

## 1027. Teste de operação prolongada

Deverá atravessar múltiplos períodos e substituições.

## 1028. Teste de recuperação

Deverá restaurar capacidades dentro dos critérios definidos.

## 1029. Teste de encerramento

Deverá comprovar revogação de:

- modos;
- poderes;
- acessos;
- canais;
- contratos;
- mobilizações.

## 1030. Teste de retorno da recorrência

Deverá verificar se a organização reconhece e reage à reativação do risco.

## 1031. Identificação de simulação

Todo exercício fictício deverá utilizar claramente:

**SIMULAÇÃO**

## 1032. Separação dos ambientes de exercício

Deverão ser evitadas ações reais produzidas acidentalmente por simulações.

## 1033. Critérios de interrupção do exercício

Uma simulação deverá ser encerrada quando:

- surgir crise real;
- houver risco;
- participantes precisarem de apoio;
- recursos reais forem comprometidos;
- ocorrer confusão pública.

## 1034. Avaliação do exercício

Deverá analisar:

- percepção;
- autoridade;
- decisão;
- execução;
- comunicação;
- pessoas;
- recursos;
- recuperação;
- encerramento.

## 1035. Maturidade de crise

A maturidade deverá representar capacidade crescente de preservar propósito e humanidade sob condições extraordinárias.

## 1036. Nível 0 — Reação improvisada

Neste nível:

- crises são reconhecidas tardiamente;
- autoridades são ambíguas;
- ações dependem de pessoas-chave;
- registros são incompletos;
- encerramento não é formal.

## 1037. Nível 1 — Resposta básica

Neste nível:

- conceitos existem;
- responsáveis são reconhecidos;
- primeiros planos foram criados;
- comunicação é organizada;
- resposta ainda é predominantemente reativa.

## 1038. Nível 2 — Modos governados

Neste nível:

- classificações;
- declarações;
- modos;
- autoridades;
- escalonamentos;
- controles;
- encerramentos;

são formalizados.

## 1039. Nível 3 — Coordenação integrada

Neste nível:

- organizações cooperam;
- comando é estruturado;
- dados são integrados;
- recursos são mobilizados;
- turnos são sustentáveis;
- comunicação é acessível.

## 1040. Nível 4 — Resiliência extraordinária

Neste nível:

- crises prolongadas são sustentadas;
- reservas existem;
- substituições funcionam;
- recuperação é testada;
- poderes são revogados;
- reparações são acompanhadas.

## 1041. Nível 5 — Consciência adaptativa de crise

Neste nível:

- sinais fracos são percebidos;
- riscos são antecipados;
- decisões adaptam-se;
- comunidades participam;
- aprendizagem modifica arquitetura;
- a organização evolui sem normalizar exceções.

## 1042. Maturidade não significa invulnerabilidade

Mesmo organizações maduras poderão enfrentar situações superiores à sua capacidade.

## 1043. Maturidade significa reconhecer limites

A organização deverá pedir ajuda antes do colapso.

## 1044. Avaliação de maturidade

Deverá ser:

- contextual;
- baseada em evidências;
- participativa;
- periódica;
- contestável;
- orientada à melhoria.

## 1045. Regressão de maturidade

A perda de pessoas, recursos, confiança, governança ou memória poderá reduzir a capacidade de crise.

## 1046. Requalificação

A organização deverá testar novamente capacidades após mudanças relevantes.

## 1047. Critérios de aceitação do arquivo

A implementação deverá demonstrar:

- linguagem comum;
- percepção plural;
- classificação;
- declaração legítima;
- modos;
- comando;
- autoridade;
- decisões;
- execução;
- proteção humana;
- recuperação;
- encerramento;
- aprendizagem.

## 1048. Critério de legitimidade

Nenhum modo extraordinário será aceitável sem fundamento e autoridade.

## 1049. Critério de proporcionalidade

Nenhuma medida deverá ultrapassar o necessário para responder ao risco.

## 1050. Critério de temporalidade

Nenhuma exceção deverá permanecer sem revisão e encerramento.

## 1051. Critério de humanidade

Nenhuma resposta será plenamente correta se proteger sistemas enquanto abandona pessoas.

## 1052. Critério de continuidade

A resposta deverá preservar capacidade para as fases seguintes.

## 1053. Critério de verdade

A organização deverá comunicar gravidade, incerteza, limitações e correções.

## 1054. Critério de responsabilidade

Decisões, ações, recursos e poderes deverão permanecer atribuíveis.

## 1055. Critério de reparação

Danos deverão ser reconhecidos e tratados.

## 1056. Critério de aprendizagem

A crise deverá produzir melhorias aplicadas e testadas.

## 1057. Critério de retorno

A organização deverá conseguir desativar o extraordinário e restabelecer governança ordinária.

## 1058. O que este modelo não é

Este modelo não será:

- justificativa de centralização;
- manual de autoritarismo;
- licença para vigilância;
- permissão para abandonar direitos;
- substituto de autoridades públicas;
- instrumento de exploração da crise;
- coleção de planos sem testes;
- automação de poder.

## 1059. O que este modelo deverá ser

Ele deverá ser uma arquitetura para preservar consciência, coordenação e humanidade quando a realidade ultrapassar a operação comum.

## 1060. Relação com configuração operacional

Os modos extraordinários deverão ser configurações explícitas e verificáveis.

## 1061. Relação com capacidade e saturação

A declaração deverá considerar a diferença entre demanda e capacidade real.

## 1062. Relação com disponibilidade

Serviços críticos deverão possuir requisitos adequados para diferentes modos.

## 1063. Relação com dependências

A análise deverá compreender propagação e impacto em cascata.

## 1064. Relação com contingência

A contingência deverá impedir que falhas se transformem desnecessariamente em crises.

## 1065. Relação com backup

Registros e dados deverão permanecer recuperáveis.

## 1066. Relação com continuidade

A crise deverá preservar funções essenciais e preparar recuperação.

## 1067. Relação com runbooks e playbooks

Procedimentos deverão orientar sem impedir adaptação consciente.

## 1068. Relação com automação

A automação deverá proteger e ampliar capacidade dentro de limites.

## 1069. Relação com agentes

Agentes deverão apoiar compreensão, registro, coordenação e aprendizagem sob supervisão.

## 1070. Relação com segurança

A crise deverá integrar segurança física, digital, informacional, humana e institucional.

## 1071. Relação com dados

O modo extraordinário deverá preservar finalidade, minimização, integridade e direitos.

## 1072. Relação com operação federada

Organizações deverão cooperar sem apagar autonomia e responsabilidade.

## 1073. Relação com continuidade humana

A resposta deverá atravessar turnos sem depender de exaustão ou heroísmo permanente.

## 1074. Relação com o CCM

A Central de Coordenação de Missões deverá integrar crises como Missões críticas governadas.

## 1075. Relação com o OM

O Orquestrador Mestre deverá coordenar capacidades extraordinárias sem assumir autoridade institucional autônoma.

## 1076. Relação com a EVA

A EVA deverá contribuir com:

- compreensão;
- prudência;
- cooperação;
- memória;
- comunicação;
- adaptação;
- aprendizagem.

## 1077. Relação com a Engenharia Oficial

A Engenharia Oficial permanecerá como limite normativo mesmo quando procedimentos ordinários forem reduzidos.

## 1078. Declaração sobre crise

A crise será uma prova da capacidade institucional de permanecer fiel ao propósito quando a pressão incentiva o abandono dos princípios.

## 1079. Declaração sobre autoridade

Autoridade extraordinária deverá existir para servir à necessidade e deverá desaparecer quando a necessidade terminar.

## 1080. Declaração sobre velocidade

Responder rápido será importante.

Responder rápido na direção errada poderá ampliar a crise.

## 1081. Declaração sobre incerteza

Não saber tudo não impedirá agir.

Exigirá agir com prudência, transparência e capacidade de correção.

## 1082. Declaração sobre pessoas

Pessoas afetadas não serão apenas destinatárias da resposta.

Elas poderão ser:

- fontes de percepção;
- participantes;
- agentes de proteção;
- conhecedoras do território;
- avaliadoras;
- construtoras da recuperação.

## 1083. Declaração sobre tecnologia

Tecnologia deverá ampliar percepção e capacidade sem transformar a exceção em vigilância permanente.

## 1084. Declaração sobre agentes

Agentes poderão operar em velocidade e escala superiores às humanas.

Por isso, deverão possuir limites ainda mais claros em condições extraordinárias.

## 1085. Declaração sobre comunicação

A comunicação deverá reduzir incerteza sem fabricar certezas.

## 1086. Declaração sobre recuperação

Recuperar não será apenas voltar a funcionar.

Será compreender, reparar e reconstruir melhor.

## 1087. Declaração sobre memória

A memória da crise deverá preservar a verdade necessária para que futuras gerações não precisem reaprender pelo mesmo sofrimento.

## 1088. Compromisso com a vida

Toda prioridade deverá começar pela proteção da vida e das condições que a sustentam.

## 1089. Compromisso com a dignidade

Nem a urgência, nem o medo, nem a escassez deverão eliminar o reconhecimento da dignidade humana.

## 1090. Compromisso com a verdade

A organização deverá reconhecer erros, incertezas, limitações e responsabilidades.

## 1091. Compromisso com a justiça

Recursos, atenção, riscos e reparações deverão ser distribuídos por critérios legítimos.

## 1092. Compromisso com a liberdade

Restrições necessárias deverão permanecer proporcionais, temporárias e sujeitas a revisão.

## 1093. Compromisso com a responsabilidade

Toda pessoa e organização deverá responder pelo poder e pelos recursos que recebeu.

## 1094. Compromisso com a continuidade

A resposta deverá preservar aquilo que as pessoas continuarão necessitando depois que a atenção imediata terminar.

## 1095. Compromisso com o futuro

A crise não deverá consumir de forma irresponsável as capacidades das próximas etapas e gerações.

## 1096. Síntese arquitetural

Uma operação extraordinária consciente deverá:

- perceber cedo;
- reconhecer honestamente;
- classificar com contexto;
- declarar legitimamente;
- mobilizar proporcionalmente;
- comandar com responsabilidade;
- comunicar com verdade;
- executar com segurança;
- proteger pessoas;
- recuperar capacidades;
- revogar exceções;
- reparar danos;
- aprender profundamente.

## 1097. Forma extraordinária, princípios permanentes

A forma de operar poderá mudar.

Poderão mudar:

- comandos;
- escalas;
- prioridades;
- processos;
- acessos;
- recursos;
- canais;
- capacidades;
- contratos temporários.

## 1098. O que deverá permanecer

Deverão permanecer:

- vida;
- dignidade;
- propósito;
- verdade;
- responsabilidade;
- autoridade legítima;
- evidência;
- memória;
- continuidade;
- possibilidade de retorno.

## 1099. Resultado integrado do arquivo

Ao final da implementação, a Plataforma UNO deverá ser capaz de responder:

- o que está acontecendo;
- qual é a gravidade;
- quem declarou;
- qual modo está ativo;
- quem comanda;
- quais poderes existem;
- quais limites permanecem;
- quais capacidades foram mobilizadas;
- quem está sendo afetado;
- quais ações estão em curso;
- como ocorrerá a recuperação;
- quando a exceção terminará;
- como a organização prestará contas.

## 1100. Declaração final

A Plataforma UNO não deverá ser reconhecida apenas por aquilo que consegue realizar quando tudo funciona.

Sua verdadeira maturidade será demonstrada quando:

- informações forem incompletas;
- recursos forem escassos;
- pessoas estiverem sob pressão;
- organizações divergirem;
- sistemas falharem;
- riscos crescerem;
- decisões precisarem ser rápidas;
- a sociedade exigir respostas.

Nesses momentos, a UNO deverá ampliar sua capacidade sem abandonar sua consciência.

Deverá agir com firmeza sem transformar firmeza em abuso.

Deverá agir com velocidade sem transformar velocidade em imprudência.

Deverá exercer autoridade sem transformar autoridade em propriedade.

Deverá usar tecnologia sem transformar proteção em vigilância permanente.

Deverá reconhecer a excepcionalidade sem permitir que a exceção destrua a regra.

A crise poderá mudar a forma.

O propósito deverá permanecer.

---

**Fim do arquivo `028-operacao-critica-crise-e-modos-extraordinarios.md`.**
