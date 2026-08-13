# V08 — OPS

# 008 — Saúde Operacional e Gestão de Sinais

## Engenharia Oficial da Plataforma UNO

---

# Introdução

Operar exige perceber.

Mas perceber não significa apenas coletar dados.

Uma Plataforma poderá produzir milhões de métricas, logs, Eventos, traces, verificações e notificações...

E ainda assim não conseguir responder a uma pergunta aparentemente simples:

> Está tudo funcionando como deveria?

Essa pergunta representa um dos problemas centrais de OPS.

A realidade operacional é complexa.

Componentes apresentam sinais diferentes.

Serviços dependem de múltiplos elementos.

Capacidades podem continuar funcionando mesmo quando parte de sua infraestrutura está degradada.

Uma dependência pode estar saudável tecnicamente...

Mas incapaz de cumprir a função necessária para determinado consumidor.

Por isso...

OPS deverá transformar sinais distribuídos em uma compreensão operacional suficientemente confiável.

Essa compreensão será denominada:

**Saúde Operacional.**

---

# O que é Saúde Operacional

Saúde Operacional representa a avaliação da capacidade de determinado elemento continuar cumprindo sua função dentro das condições esperadas.

Ela não deverá representar apenas:

> O sistema está ligado?

Deverá ajudar a responder:

> Ele está funcionando?

> Está funcionando corretamente?

> Está funcionando dentro dos limites esperados?

> Possui margem suficiente?

> Continua capaz de sustentar seus consumidores?

> Existem sinais de degradação?

> Existem riscos relevantes?

> Temos Evidência suficiente para confiar nessa avaliação?

---

# Saúde é Relacional

Nenhum elemento deverá ser considerado saudável apenas por existir ou responder tecnicamente.

A Saúde deverá ser compreendida em relação a:

* função;
* expectativa;
* consumidor;
* contexto;
* tempo;
* dependências.

---

# Exemplo

Um banco poderá responder normalmente às verificações internas.

Entretanto...

As consultas necessárias para determinado Serviço apresentam latência excessiva.

Do ponto de vista do banco:

`PROCESSO = ATIVO`

Do ponto de vista do Serviço:

`DEPENDENCIA = DEGRADADA`

Do ponto de vista da Capacidade:

`FUNCAO = COMPROMETIDA`

Assim...

Saúde não deverá ser tratada como propriedade absoluta.

---

# Invariante de Saúde Orientada à Função

A avaliação de Saúde Operacional deverá considerar a capacidade real de cumprir a função esperada.

---

# Saúde não é Disponibilidade

Um Serviço poderá estar disponível...

Mas degradado.

Por exemplo:

`DISPONIBILIDADE = 100%`

`LATENCIA = 4.8s`

`ERROS = 0.3%`

`SATURACAO = 96%`

O Serviço responde.

Entretanto...

Sua Saúde poderá não ser considerada adequada.

---

# Saúde não é Ausência de Incidente

Um Serviço poderá não possuir Incidente declarado...

E ainda apresentar:

* perda de redundância;
* saturação crescente;
* Drift;
* dependência em risco;
* Evidência insuficiente.

Assim...

`SEM_INCIDENTE`

não significa:

`SAUDAVEL`

---

# Saúde não é Ausência de Alerta

Um sistema de observabilidade poderá falhar.

Alertas poderão estar mal configurados.

Sinais poderão deixar de chegar.

Portanto...

A ausência de Alerta não deverá ser utilizada isoladamente como Evidência de Saúde.

---

# Invariante de Não Inferência pelo Silêncio

OPS não deverá concluir que determinada Capacidade está saudável apenas porque nenhum problema foi reportado.

---

# Saúde como Síntese

A Saúde Operacional será uma síntese produzida a partir de múltiplas Evidências.

Conceitualmente:

`SINAIS`

*

`EXPECTATIVAS`

*

`CONTEXTO`

*

`DEPENDENCIAS`

*

`TEMPO`

↓

`AVALIACAO DE SAUDE`

---

# A Síntese não Deve Apagar Evidência

Uma interface poderá apresentar:

`SAUDAVEL`

Mas OPS deverá preservar caminho para responder:

> Por que consideramos isso saudável?

---

# Invariante de Saúde Explicável

Avaliações relevantes de Saúde deverão possuir fundamento suficientemente compreensível.

---

# Domínios de Saúde

Uma Capacidade ou Serviço poderá possuir múltiplas dimensões de Saúde simultaneamente.

OPS poderá considerar, entre outras:

* disponibilidade;
* desempenho;
* capacidade;
* saturação;
* erro;
* integridade;
* dependências;
* redundância;
* recuperabilidade;
* segurança operacional;
* observabilidade.

---

# Saúde Multidimensional

Considere:

`DISPONIBILIDADE = SAUDAVEL`

`DESEMPENHO = SAUDAVEL`

`CAPACIDADE = EM_RISCO`

`REDUNDANCIA = DEGRADADA`

`RECUPERABILIDADE = DESCONHECIDA`

Uma síntese simples poderá dizer:

`SAUDE = DEGRADADA`

Entretanto...

As dimensões deverão permanecer acessíveis.

---

# Invariante de Não Perda Dimensional

A síntese de Saúde não deverá eliminar informações necessárias para diagnóstico e decisão.

---

# Saúde da Disponibilidade

Representa se determinada função pode ser acessada ou utilizada quando necessária.

---

# Saúde do Desempenho

Representa se a função está sendo entregue dentro de níveis aceitáveis de tempo e eficiência.

---

# Saúde da Capacidade

Representa se existem recursos suficientes para sustentar demanda atual e esperada.

---

# Saúde da Saturação

Representa proximidade de limites capazes de comprometer operação.

---

# Saúde de Integridade

Representa se o resultado produzido permanece correto e consistente.

Um sistema poderá responder rapidamente...

Mas produzir resultado incorreto.

Nesse caso...

A Saúde deverá refletir comprometimento.

---

# Saúde de Dependências

Representa a condição dos elementos necessários para sustentar determinada função.

---

# Saúde de Redundância

Representa a disponibilidade real de caminhos alternativos.

---

# Saúde de Recuperabilidade

Representa confiança de que determinada Capacidade poderá ser restaurada caso falhe.

---

# Saúde de Observabilidade

Representa a condição dos próprios mecanismos utilizados para compreender a operação.

---

# Invariante de Observabilidade Reflexiva

OPS deverá ser capaz de observar, em nível proporcional, a saúde de seus próprios mecanismos de observação.

---

# Meta-Saúde

Essa propriedade poderá ser compreendida como:

**Meta-Saúde Operacional**

Ou seja:

> Quão saudável é nossa capacidade de saber se estamos saudáveis?

---

# Exemplo de Meta-Saúde

Um Serviço parece normal.

Entretanto:

`METRICAS = SEM ATUALIZACAO`

`TRACES = INDISPONIVEIS`

`HEALTHCHECK_EXTERNO = FALHANDO`

Nesse caso...

OPS não deverá apresentar alta confiança em:

`SERVICO = SAUDAVEL`

---

# Saúde e Confiança

Toda avaliação de Saúde poderá possuir um nível de confiança.

Por exemplo:

`SAUDE = SAUDAVEL`

`CONFIANCA = ALTA`

Ou:

`SAUDE = PROVAVELMENTE_SAUDAVEL`

`CONFIANCA = BAIXA`

---

# Invariante de Confiança Explícita

Quando a qualidade da Evidência for insuficiente...

A incerteza deverá permanecer visível.

---

# Saúde e Frescor

A Evidência que sustenta uma avaliação possui idade.

Por isso...

a Saúde deverá considerar o frescor dos sinais utilizados.

---

# Exemplo

`HEALTHCHECK`

última atualização:

`4 segundos`

poderá ser adequado.

Entretanto:

`HEALTHCHECK`

última atualização:

`4 horas`

talvez não permita concluir Saúde atual.

---

# Invariante de Saúde Temporal

Nenhuma avaliação operacional deverá ser considerada indefinidamente válida sem Evidência atualizada compatível com a dinâmica do elemento observado.

---

# Janela de Saúde

OPS poderá definir uma:

**Janela de Saúde**

Ela representa o período de Evidências considerado suficiente para avaliar determinada condição.

---

# Janela Contextual

Uma API em tempo real poderá utilizar segundos ou minutos.

Um processo diário poderá utilizar horas.

Um processo mensal poderá possuir janela ainda maior.

---

# Invariante de Janela Proporcional

A temporalidade da Saúde deverá acompanhar o comportamento esperado da Capacidade.

---

# Estado de Saúde

OPS poderá utilizar Estados sintéticos como:

`SAUDAVEL`

`ATENCAO`

`DEGRADADO`

`CRITICO`

`INDISPONIVEL`

`DESCONHECIDO`

Entretanto...

Esses Estados não deverão ser tratados como classificação universal rígida.

---

# Semântica antes da Cor

Verde.

Amarelo.

Laranja.

Vermelho.

Cinza.

Essas cores poderão ser utilizadas em interfaces.

Mas não deverão substituir significado.

---

# Invariante de Semântica do Estado

Todo Estado de Saúde deverá possuir interpretação operacional compreensível independentemente de sua representação visual.

---

# Saudável

Uma condição poderá ser considerada Saudável quando existe Evidência suficiente de que a função está sendo cumprida dentro dos limites operacionais esperados.

---

# Atenção

Uma condição poderá entrar em Atenção quando existem sinais de aproximação de limite, perda de margem ou comportamento incomum...

Sem degradação funcional significativa confirmada.

---

# Degradado

Uma condição poderá ser considerada Degradada quando parte relevante da função ou de suas propriedades operacionais estiver comprometida.

---

# Crítico

Uma condição poderá ser considerada Crítica quando existe risco elevado de perda significativa ou impacto já relevante que exige resposta prioritária.

---

# Indisponível

Uma condição poderá ser considerada Indisponível quando a função necessária não puder ser realizada dentro das condições mínimas aceitáveis.

---

# Desconhecido

Uma condição será Desconhecida quando não houver Evidência suficiente para produzir avaliação confiável.

---

# Invariante de Desconhecido como Estado de Primeira Classe

`DESCONHECIDO`

não deverá ser tratado como erro de interface.

Ele representa informação operacional legítima.

---

# Saúde Composta

Um Serviço poderá possuir Saúde derivada de múltiplos elementos.

Por exemplo:

`SERVICO_A`

depende de:

`API_A`

`DATABASE_A`

`QUEUE_A`

`PROVIDER_X`

A Saúde do Serviço não deverá ser necessariamente a média matemática da Saúde desses elementos.

---

# Dependência Obrigatória

Se uma dependência obrigatória estiver indisponível...

A função poderá ficar indisponível.

---

# Dependência Opcional

Se uma dependência opcional estiver degradada...

A função principal poderá continuar saudável.

---

# Dependência Alternativa

Se o caminho principal falhar...

Mas alternativa assumir adequadamente...

A Capacidade poderá continuar funcional.

---

# Invariante de Saúde Topológica

A avaliação de Saúde deverá considerar a semântica das dependências...

Não apenas seus Estados isolados.

---

# Saúde do Serviço e Saúde da Capacidade

Uma Capacidade poderá utilizar vários Serviços.

Assim...

um Serviço degradado não implica necessariamente Capacidade degradada.

---

# Exemplo

`CAPACIDADE = ENVIAR_COMUNICACAO`

Serviços:

`EMAIL = INDISPONIVEL`

`SMS = SAUDAVEL`

`PUSH = SAUDAVEL`

Se a função necessária puder ser cumprida por SMS ou push...

A Capacidade poderá permanecer:

`DISPONIVEL`

Mas talvez com:

`REDUNDANCIA = REDUZIDA`

---

# Invariante de Saúde Funcional da Capacidade

A Saúde de uma Capacidade deverá refletir a possibilidade real de cumprir sua função...

E não simplesmente a soma dos Estados de seus Serviços.

---

# Saúde Local e Saúde Global

Um Serviço distribuído poderá possuir Estados diferentes por escopo.

Por exemplo:

`REGIAO_A = SAUDAVEL`

`REGIAO_B = DEGRADADA`

`REGIAO_C = SAUDAVEL`

A Saúde global deverá preservar essa diferença.

---

# Invariante de Escopo

Toda avaliação relevante de Saúde deverá possuir escopo suficientemente claro.

---

# Saúde por Consumidor

A mesma Capacidade poderá possuir condições diferentes para consumidores distintos.

Por exemplo:

`ORGANIZACAO_A = SAUDAVEL`

`ORGANIZACAO_B = DEGRADADA`

Isso poderá ocorrer devido a:

* rota;
* permissão;
* região;
* integração;
* configuração.

---

# Invariante da Perspectiva do Consumidor

Quando a experiência operacional variar por consumidor...

OPS deverá poder representar essa diferença.

---

# O Sinal Operacional

A matéria-prima da avaliação de Saúde será o:

**Sinal Operacional.**

Um Sinal representa informação capaz de contribuir para compreender determinada propriedade da realidade operacional.

---

# Fontes de Sinais

Sinais poderão surgir de:

* métricas;
* logs;
* traces;
* Eventos;
* healthchecks;
* transações sintéticas;
* auditoria;
* sistemas externos;
* fornecedores;
* usuários;
* Operadores;
* Agentes;
* Automações.

---

# Sinal Técnico

Exemplo:

`CPU = 91%`

---

# Sinal Funcional

Exemplo:

`PAGAMENTO_DE_TESTE = FALHOU`

---

# Sinal Humano

Exemplo:

> Operador relata comportamento anômalo no Serviço.

---

# Sinal do Consumidor

Exemplo:

> Usuários não conseguem concluir determinada ação.

---

# Sinal Externo

Exemplo:

> Provider informa degradação regional.

---

# Sinal Inferido

Um Agente poderá inferir:

> padrão atual é compatível com saturação progressiva.

Essa inferência também poderá participar do contexto operacional...

Mas deverá preservar sua Proveniência.

---

# Invariante de Proveniência do Sinal

OPS deverá conseguir distinguir suficientemente:

* o que foi medido;
* o que foi reportado;
* o que foi calculado;
* o que foi inferido.

---

# Sinal não é Verdade Absoluta

Sensores falham.

Métricas podem estar erradas.

Logs podem desaparecer.

Usuários podem interpretar incorretamente uma situação.

Agentes podem inferir errado.

Por isso...

todo Sinal deverá ser tratado como Evidência com propriedades.

---

# Propriedades de um Sinal

Um Sinal poderá possuir:

* origem;
* tipo;
* valor;
* unidade;
* escopo;
* timestamp;
* frequência;
* confiança;
* qualidade;
* Proveniência.

---

# Qualidade do Sinal

Um Sinal poderá ser:

* íntegro;
* incompleto;
* atrasado;
* duplicado;
* contraditório;
* ausente;
* corrompido.

---

# Invariante de Qualidade de Sinal

OPS deverá evitar tratar toda Evidência recebida como igualmente confiável.

---

# Sinal Ausente

A ausência de determinado Sinal também poderá ser informação.

Por exemplo:

um heartbeat esperado a cada 10 segundos deixa de chegar.

---

# Ausência Esperada

Nem toda ausência representa falha.

Um processo que executa uma vez por dia não deverá ser considerado indisponível por permanecer silencioso durante horas.

---

# Invariante de Ausência Contextual

A ausência de Sinal deverá ser interpretada em relação à expectativa de emissão.

---

# Heartbeat

Um Heartbeat representa Sinal periódico utilizado para indicar presença ou atividade.

---

# Heartbeat não Prova Saúde Completa

Um processo poderá emitir heartbeat...

Mas estar incapaz de cumprir sua função.

---

# Invariante de Heartbeat Limitado

Heartbeat deverá ser tratado como Evidência de uma propriedade específica...

Não como prova universal de Saúde.

---

# Healthcheck

Um Healthcheck representa verificação ativa de determinada condição.

---

# Healthcheck Superficial

Pergunta:

> O processo responde?

---

# Healthcheck Funcional

Pergunta:

> A função necessária pode ser realizada?

---

# Healthcheck de Dependência

Pergunta:

> As dependências necessárias estão utilizáveis?

---

# Healthcheck Profundo

Poderá validar múltiplas partes da cadeia.

Entretanto...

Quanto mais profundo...

Maior poderá ser:

* custo;
* latência;
* impacto;
* risco de falso positivo ou falso negativo.

---

# Invariante de Healthcheck Proporcional

Healthchecks deverão possuir profundidade compatível com a propriedade que pretendem verificar.

---

# Sinal Direto

Mede diretamente determinada propriedade.

Por exemplo:

`ERROS_HTTP_5XX`

---

# Sinal Indireto

Permite inferir determinada condição.

Por exemplo:

`FILA_CRESCENDO`

poderá sugerir incapacidade de processamento.

---

# Sinal Antecipatório

Alguns sinais aparecem antes da degradação.

Exemplo:

`DISCO = 85%`

`CRESCIMENTO = 2% POR HORA`

Ainda não existe falha.

Mas existe trajetória de risco.

---

# Sinal Reativo

Surge depois que a degradação começou.

Exemplo:

`ERRO = 40%`

---

# Invariante de Gestão Antecipatória

OPS deverá utilizar, quando possível, sinais capazes de revelar deterioração antes da perda funcional.

---

# Sinais Leading e Lagging

Sinais antecipatórios poderão ser tratados como:

**Leading Signals**

Sinais que confirmam consequência já materializada poderão ser tratados como:

**Lagging Signals**

---

# Exemplo

Leading:

`SATURACAO_CRESCENTE`

Lagging:

`REQUISICOES_FALHANDO`

---

# Gestão de Sinais

Coletar Sinais não será suficiente.

OPS deverá gerenciá-los.

Gestão de Sinais envolve:

* aquisição;
* normalização;
* contextualização;
* qualificação;
* correlação;
* agregação;
* redução de ruído;
* interpretação;
* retenção.

---

# Invariante de Sinal com Contexto

Um Sinal sem relação com algum elemento operacional possui valor limitado.

Quando apropriado...

OPS deverá conseguir responder:

> Este Sinal pertence a quê?

---

# Associação ao Grafo Operacional

Um Sinal poderá estar relacionado a:

`RECURSO`

`COMPONENTE`

`SERVICO`

`CAPACIDADE`

`DEPENDENCIA`

`CONSUMIDOR`

---

# Exemplo

`CPU = 97%`

isoladamente diz pouco.

Mas:

`CPU = 97%`

em:

`WORKER_27`

que sustenta:

`SERVICO_DE_NOTIFICACAO`

que sustenta:

`CAPACIDADE_DE_COMUNICACAO`

utilizada por:

`MISSAO_CRITICA_X`

possui significado operacional muito maior.

---

# Invariante de Contextualização Topológica

O valor operacional de um Sinal deverá poder aumentar através de sua relação com o Grafo Operacional.

---

# Sinal Bruto

É a informação próxima da origem.

---

# Sinal Normalizado

É transformado para representação compreensível e comparável.

---

# Sinal Enriquecido

Recebe contexto adicional.

Por exemplo:

* Owner;
* Serviço;
* Criticidade;
* região;
* Missões dependentes.

---

# Sinal Correlacionado

É relacionado a outros sinais que podem representar a mesma condição.

---

# Sinal Interpretado

Participa da produção de uma conclusão operacional.

---

# Pipeline Conceitual de Sinais

Conceitualmente:

`ORIGEM`

↓

`SINAL BRUTO`

↓

`NORMALIZACAO`

↓

`CONTEXTUALIZACAO`

↓

`QUALIFICACAO`

↓

`CORRELACAO`

↓

`INTERPRETACAO`

↓

`SAUDE OPERACIONAL`

---

# Pipeline não Deve Ser Rígido

Algumas fontes poderão produzir informação já contextualizada.

Outras poderão produzir diretamente Eventos ou Estados.

O modelo representa responsabilidades...

Não uma implementação obrigatória.

---

# Cardinalidade de Sinais

Sistemas modernos poderão produzir volumes enormes de telemetria.

OPS não deverá tentar transformar cada Sinal em demanda operacional.

---

# Invariante de Compressão Cognitiva

A quantidade de informação apresentada a humanos deverá ser muito menor do que a quantidade de Sinais processados pela plataforma.

---

# Redução de Ruído

A Gestão de Sinais deverá identificar:

* duplicações;
* flutuações irrelevantes;
* eventos repetitivos;
* sinais sem ação possível;
* condições já conhecidas.

---

# Ruído Operacional

Ruído representa informação que consome atenção sem melhorar proporcionalmente a capacidade de compreender ou agir.

---

# Invariante de Valor da Atenção

A atenção humana deverá ser tratada como Recurso Operacional limitado.

---

# Relação Sinal → Saúde → Atenção

Nem todo Sinal altera Saúde.

Nem toda alteração de Saúde exige atenção humana.

Nem toda atenção humana exige Incidente.

Conceitualmente:

`SINAL`

↓

`INTERPRETACAO`

↓

`SAUDE`

↓

`NECESSIDADE DE ATENCAO`

↓

`ALERTA / ACAO / INCIDENTE`

---

# Separação Fundamental

OPS deverá preservar distinção entre:

**observar**

**interpretar**

**chamar atenção**

**agir**

Essa separação permitirá reduzir reatividade desnecessária.

---

# Saúde como Contrato entre Observação e Operação

A Saúde Operacional funciona como uma camada intermediária.

Ela transforma grandes quantidades de Sinais em uma representação operacional utilizável.

---

# Formulação Inicial

Assim...

a primeira formulação deste arquivo poderá ser expressa como:

`REALIDADE OPERACIONAL`

↓

`SINAIS`

↓

`EVIDENCIAS`

↓

`INTERPRETACAO`

↓

`SAUDE OPERACIONAL`

↓

`CONTEXTO PARA DECISAO`

---

# Próxima Dimensão

Com Saúde Operacional, suas dimensões e a natureza dos Sinais estabelecidas...

o próximo lote deverá aprofundar:

* modelos de avaliação de Saúde;
* regras de Saúde;
* thresholds;
* baselines;
* comportamento esperado;
* anomalias;
* tendências;
* janelas temporais;
* histerese;
* flapping;
* confiança;
* qualidade e ausência de Sinais;
* composição de Saúde;
* propagação de Saúde pelo Grafo Operacional.

---

# Modelos de Avaliação de Saúde

A Saúde Operacional não deverá depender exclusivamente de uma única métrica.

Também não deverá ser determinada apenas por regras fixas aplicadas indiscriminadamente a todos os Serviços.

Diferentes Capacidades possuem:

- comportamentos distintos;
- ritmos distintos;
- riscos distintos;
- consumidores distintos;
- tolerâncias distintas.

Por isso...

OPS deverá permitir diferentes modelos de avaliação de Saúde.

---

# Regra de Saúde

Uma Regra de Saúde representa uma condição utilizada para interpretar Evidências operacionais.

Exemplo:

`ERRO_HTTP_5XX > 5%`

durante:

`5 MINUTOS`

poderá contribuir para:

`SAUDE = DEGRADADA`

---

# Regra não é Estado

A Regra representa lógica de avaliação.

O Estado representa conclusão operacional produzida a partir do conjunto de Evidências e contexto.

---

# Invariante de Regra Explicável

Quando uma Regra contribuir significativamente para alteração de Saúde...

OPS deverá permitir compreender:

> Qual condição foi satisfeita?

> Quais Sinais participaram?

> Durante quanto tempo?

---

# Threshold Operacional

Um Threshold representa limite utilizado para interpretar determinado Sinal.

Exemplo:

`CPU > 90%`

---

# Threshold Estático

Permanece constante até ser explicitamente alterado.

Exemplo:

`USO_DE_DISCO > 85%`

---

# Threshold Dinâmico

Poderá variar conforme:

- horário;
- carga;
- contexto;
- histórico;
- tipo de consumidor;
- modo operacional.

---

# Exemplo

Durante operação normal:

`LATENCIA_P95 < 300ms`

Durante contingência:

`LATENCIA_P95 < 800ms`

A expectativa muda porque o contexto operacional mudou.

---

# Invariante de Threshold Contextual

Limites deverão ser interpretados dentro do contexto operacional ao qual pertencem.

---

# Threshold não é Verdade Universal

Um valor de CPU de 95% poderá representar:

- saturação perigosa;
- utilização eficiente;
- comportamento temporário esperado.

Tudo dependerá da função e da arquitetura.

---

# Threshold de Atenção

Poderá indicar aproximação de condição inadequada.

---

# Threshold Crítico

Poderá indicar comprometimento relevante ou risco elevado.

---

# Múltiplos Limites

Uma mesma propriedade poderá possuir:

`NORMAL`

↓

`ATENCAO`

↓

`DEGRADADO`

↓

`CRITICO`

Isso permite interpretação gradual.

---

# Invariante de Gradualidade

Quando apropriado...

OPS deverá evitar transformar pequenas variações em mudanças abruptas de interpretação.

---

# Baseline Operacional

Um Baseline representa referência de comportamento considerado esperado para determinado contexto.

---

# Baseline Histórico

Poderá ser construído a partir do comportamento anterior.

---

# Baseline Definido

Poderá ser estabelecido explicitamente pela Engenharia ou pelo Owner.

---

# Baseline Dinâmico

Poderá adaptar-se ao comportamento observado ao longo do tempo.

---

# Exemplo

Um Serviço normalmente processa:

`2.000 req/min`

às 03:00.

E:

`40.000 req/min`

às 14:00.

Um Threshold único poderá ser inadequado.

Um Baseline temporal poderá representar melhor a realidade.

---

# Invariante de Baseline Contextual

Baselines deverão considerar padrões relevantes como:

- horário;
- dia;
- região;
- sazonalidade;
- tipo de operação.

---

# Baseline não Deve Aprender Falha como Normalidade

Existe um risco importante.

Se determinado sistema permanecer degradado durante muito tempo...

Um modelo adaptativo poderá começar a considerar a degradação como comportamento normal.

---

# Normalização Algorítmica do Desvio

Essa condição ocorre quando o mecanismo de aprendizagem absorve comportamento inadequado como novo padrão sem decisão consciente.

---

# Invariante de Proteção do Baseline

Baselines adaptativos deverão possuir mecanismos que reduzam o risco de incorporar degradações persistentes como normalidade legítima.

---

# Comportamento Esperado

Nem toda expectativa poderá ser representada por número.

Exemplos:

- determinada fila deve esvaziar;
- determinado job deve executar uma vez por dia;
- determinado backup deve terminar antes de certo horário;
- determinada região deve permanecer redundante;
- determinada transação deve completar uma sequência.

---

# Invariante de Saúde Comportamental

OPS deverá permitir avaliar comportamentos...

Não apenas valores numéricos.

---

# Sinal de Presença

Determinado Evento deve acontecer.

---

# Sinal de Ausência

Determinado Evento não aconteceu quando deveria.

---

# Sinal de Sequência

Eventos devem ocorrer em determinada ordem.

---

# Sinal de Duração

Uma atividade não deverá permanecer em determinado Estado por tempo excessivo.

---

# Exemplo

`JOB_INICIADO`

deverá ser seguido por:

`JOB_CONCLUIDO`

dentro de:

`30 MINUTOS`

Caso contrário...

poderá existir condição anômala.

---

# Anomalia Operacional

Uma Anomalia representa comportamento significativamente diferente do esperado.

---

# Anomalia não é Falha

Uma mudança incomum poderá ser legítima.

Por exemplo:

um evento institucional poderá multiplicar a demanda por dez.

O comportamento é anômalo historicamente...

Mas esperado contextualmente.

---

# Invariante de Anomalia Contextual

OPS não deverá transformar automaticamente comportamento incomum em degradação.

---

# Detecção de Anomalia

Poderá utilizar:

- regras;
- estatística;
- histórico;
- modelos;
- comparação entre pares;
- Agentes.

---

# Anomalia Univariada

Um único Sinal apresenta comportamento incomum.

---

# Anomalia Multivariada

A combinação de múltiplos Sinais torna-se incomum.

Por exemplo:

`CPU = NORMAL`

`MEMORIA = NORMAL`

`LATENCIA = ALTA`

`THROUGHPUT = BAIXO`

Isoladamente...

os primeiros sinais parecem normais.

Em conjunto...

podem indicar comportamento relevante.

---

# Invariante de Interpretação Multissinal

OPS deverá permitir que múltiplas Evidências contribuam conjuntamente para uma avaliação.

---

# Anomalia Topológica

O comportamento de um elemento poderá ser considerado anômalo em comparação com elementos equivalentes.

---

# Exemplo

Dez instâncias executam o mesmo Serviço.

Nove apresentam:

`LATENCIA = 120ms`

Uma apresenta:

`LATENCIA = 900ms`

Essa diferença poderá revelar degradação localizada.

---

# Peer Comparison

OPS poderá comparar elementos funcionalmente equivalentes.

---

# Invariante de Comparabilidade

Comparações deverão ocorrer entre elementos suficientemente equivalentes para evitar conclusões enganosas.

---

# Tendência Operacional

Um valor atual poderá estar dentro do limite...

Mas sua trajetória indicar risco.

---

# Exemplo

`DISCO`

10:00 → 62%

11:00 → 68%

12:00 → 74%

13:00 → 80%

Ainda não ocorreu saturação.

Entretanto...

A tendência poderá justificar:

`ATENCAO`

---

# Invariante de Tendência

OPS deverá poder considerar direção e velocidade de mudança...

Não apenas valor instantâneo.

---

# Derivada Operacional

Conceitualmente...

OPS poderá observar:

> Quanto determinado Sinal está mudando?

---

# Aceleração Operacional

Também poderá ser relevante:

> A velocidade dessa mudança está aumentando?

---

# Exemplo

Uma fila cresce:

`+100 itens/min`

Depois:

`+500 itens/min`

Depois:

`+2.000 itens/min`

A condição está se deteriorando de forma acelerada.

---

# Invariante de Trajetória

Quando apropriado...

A avaliação de Saúde deverá considerar a trajetória provável da condição atual.

---

# Saúde Preditiva

OPS poderá produzir avaliações antecipatórias.

Por exemplo:

`SAUDE_ATUAL = SAUDAVEL`

`RISCO_DE_SATURACAO_EM_40_MIN = ALTO`

---

# Predição não é Estado Observado

Uma previsão deverá permanecer distinguível da realidade confirmada.

---

# Invariante de Separação Observado ↔ Previsto

OPS deverá indicar claramente quando determinada conclusão representa:

- observação;
- inferência;
- previsão.

---

# Horizonte de Predição

Toda previsão deverá possuir horizonte temporal.

Por exemplo:

`RISCO NAS PROXIMAS 2 HORAS`

é diferente de:

`RISCO NOS PROXIMOS 30 DIAS`

---

# Confiança Preditiva

Uma previsão também deverá possuir confiança proporcional à qualidade do modelo e das Evidências.

---

# Janela Temporal de Avaliação

Uma condição raramente deverá ser interpretada apenas a partir de um instante.

OPS poderá utilizar janelas temporais.

---

# Janela Deslizante

Por exemplo:

avaliar os últimos:

`5 MINUTOS`

continuamente.

---

# Janela Fixa

Por exemplo:

avaliar:

`00:00 → 01:00`

---

# Janela Acumulada

Poderá considerar comportamento acumulado ao longo de determinado período.

---

# Invariante de Janela Adequada

A janela deverá ser compatível com a dinâmica do fenômeno observado.

---

# Valor Instantâneo

Pode ser útil para detectar eventos abruptos.

---

# Média

Pode reduzir ruído.

---

# Percentil

Pode representar experiência de parcelas da população.

---

# Máximo

Pode revelar extremos.

---

# Contagem

Pode representar frequência.

---

# Taxa

Pode representar velocidade de ocorrência.

---

# Invariante de Agregação Sem Ocultação

A agregação não deverá esconder condições relevantes.

---

# Exemplo

Latência média:

`100ms`

parece excelente.

Entretanto:

`p99 = 8s`

Uma parcela dos consumidores pode estar sofrendo degradação grave.

---

# Percentis

OPS poderá utilizar:

- p50;
- p90;
- p95;
- p99;

quando apropriado.

---

# Invariante de Perspectiva Distribucional

Para fenômenos com grande variação...

Uma única média poderá ser Evidência insuficiente.

---

# Persistência

Uma condição poderá precisar permanecer por determinado tempo antes de alterar Saúde.

---

# Exemplo

`CPU > 90%`

por:

`3 segundos`

talvez seja normal.

Mas:

`CPU > 90%`

por:

`20 minutos`

poderá representar saturação.

---

# Invariante de Persistência

OPS deverá distinguir picos transitórios de condições persistentes quando isso for operacionalmente relevante.

---

# Debounce Operacional

Mudanças rápidas poderão ser filtradas antes de produzir alteração de Estado.

---

# Histerese

Um mecanismo de Histerese utiliza condições diferentes para entrar e sair de determinado Estado.

---

# Exemplo

Entrar em Degradação:

`CPU > 90% por 5 min`

Sair de Degradação:

`CPU < 75% por 10 min`

---

# Por que Histerese

Sem ela...

um valor próximo ao limite poderá fazer o Estado alternar continuamente.

---

# Flapping

Flapping ocorre quando determinado elemento muda repetidamente entre Estados.

Por exemplo:

`SAUDAVEL`

↓

`DEGRADADO`

↓

`SAUDAVEL`

↓

`DEGRADADO`

↓

`SAUDAVEL`

---

# Flapping como Condição Operacional

O próprio Flapping poderá ser tratado como sinal de instabilidade.

---

# Invariante de Estabilidade de Estado

OPS deverá evitar que pequenas oscilações produzam alterações excessivas de Estado e atenção.

---

# Detecção de Flapping

Poderá considerar:

- número de transições;
- intervalo;
- duração;
- amplitude.

---

# Estado Instável

Um Serviço poderá ser representado como:

`INSTAVEL`

mesmo quando seu estado instantâneo naquele segundo seja saudável.

---

# Invariante de Memória Temporal

A avaliação atual poderá considerar comportamento recente...

Não apenas o último Sinal recebido.

---

# Recuperação Sustentada

Depois de uma degradação...

OPS poderá exigir período saudável antes de declarar recuperação completa.

---

# Exemplo

`ERRO < 1%`

por:

`15 MINUTOS`

antes de:

`DEGRADADO → SAUDAVEL`

---

# Invariante de Recuperação Estável

O primeiro Sinal positivo não deverá necessariamente encerrar uma condição degradada.

---

# Qualidade da Evidência

A Saúde dependerá não apenas do conteúdo dos Sinais...

Mas também de sua qualidade.

---

# Dimensões de Qualidade

OPS poderá considerar:

- completude;
- atualidade;
- consistência;
- integridade;
- Proveniência;
- cobertura;
- confiabilidade.

---

# Completude

Existem Sinais suficientes?

---

# Atualidade

Os Sinais são recentes?

---

# Consistência

As fontes concordam?

---

# Integridade

A informação parece ter sido preservada corretamente?

---

# Cobertura

Estamos observando partes suficientes da função?

---

# Proveniência

Sabemos de onde veio?

---

# Invariante de Qualidade da Evidência

Uma avaliação de Saúde deverá reduzir sua confiança quando a qualidade das Evidências diminuir significativamente.

---

# Score de Confiança

OPS poderá utilizar representação de confiança.

Por exemplo:

`CONFIANCA = 0.92`

ou:

`ALTA`

`MEDIA`

`BAIXA`

A representação específica poderá variar.

---

# Confiança não Deve Ser Cosmética

Um número preciso como:

`93.7%`

não possui valor se não houver fundamento suficiente para essa precisão.

---

# Invariante de Não Falsa Precisão

A granularidade da confiança deverá ser compatível com a capacidade real de estimá-la.

---

# Ausência de Sinais

A ausência poderá alterar a Saúde da própria observabilidade.

---

# Exemplo

Esperado:

`1 SINAL / 10s`

Observado:

`0 SINAIS / 3min`

Isso poderá produzir:

`OBSERVABILIDADE = DEGRADADA`

---

# Mas o Serviço Pode Continuar Funcionando

Assim...

OPS poderá representar:

`SERVICO = DESCONHECIDO`

`OBSERVABILIDADE = DEGRADADA`

em vez de:

`SERVICO = INDISPONIVEL`

---

# Invariante de Separação Serviço ↔ Observabilidade

A falha em observar um Serviço não deverá ser automaticamente confundida com falha do próprio Serviço.

---

# Falha Conjunta

Entretanto...

Se a telemetria desaparece ao mesmo tempo em que healthchecks externos falham...

A confiança em indisponibilidade poderá aumentar.

---

# Evidências Independentes

Múltiplas fontes independentes poderão aumentar confiança.

---

# Invariante de Independência de Evidência

Dez Sinais derivados da mesma origem não equivalem necessariamente a dez confirmações independentes.

---

# Exemplo

Métrica.

Dashboard.

Alerta.

Relatório.

Todos derivados da mesma série temporal.

Esses quatro artefatos representam essencialmente uma única origem observacional.

---

# Evidência Corroborativa

Quando fontes independentes apontam para a mesma condição...

OPS poderá aumentar confiança.

---

# Evidência Contraditória

Quando fontes independentes discordam...

A confiança deverá ser reavaliada.

---

# Exemplo

Monitoramento interno:

`SAUDAVEL`

Monitoramento externo:

`INDISPONIVEL`

Relatos de usuários:

`FALHA`

Nesse cenário...

a perspectiva interna provavelmente não representa toda a realidade.

---

# Invariante de Contradição Visível

Evidências conflitantes relevantes não deverão ser silenciosamente descartadas.

---

# Composição de Saúde

A Saúde de um elemento poderá depender de várias dimensões.

---

# Composição por Regra

Exemplo:

Se:

`DISPONIBILIDADE = INDISPONIVEL`

Então:

`SAUDE_GLOBAL = INDISPONIVEL`

---

# Composição por Peso

Algumas dimensões poderão possuir pesos diferentes.

---

# Composição por Função

A regra poderá depender da função que precisa sobreviver.

---

# Composição por Perfil

Um mesmo Serviço poderá possuir diferentes perfis de Saúde.

Por exemplo:

`PERFIL_NORMAL`

`PERFIL_CONTINGENCIA`

`PERFIL_MISSAO_CRITICA`

---

# Invariante de Composição Explicável

A síntese de Saúde deverá permitir compreender quais dimensões determinaram seu resultado.

---

# Worst-of

Uma estratégia simples poderá utilizar o pior Estado entre dimensões críticas.

---

# Limitação do Worst-of

Se uma funcionalidade secundária estiver degradada...

ela não deverá necessariamente tornar toda a Capacidade crítica.

---

# Quorum de Saúde

Algumas Capacidades distribuídas poderão depender de quantidade mínima de elementos saudáveis.

---

# Exemplo

Cinco nós.

Três são necessários.

Estado:

`3/5 SAUDAVEIS`

A função ainda existe...

Mas a margem diminuiu.

---

# Invariante de Quorum

Quando uma Capacidade depender de quorum...

A avaliação deverá considerar tanto:

- função atual;
- margem restante.

---

# Propagação de Saúde

Estados poderão propagar-se através do Grafo Operacional.

---

# Propagação não é Cópia

Se:

`DATABASE = DEGRADADO`

não significa automaticamente:

`SERVICO = DEGRADADO`

O Serviço poderá possuir:

- cache;
- réplica;
- caminho alternativo;
- tolerância.

---

# Função de Propagação

Cada relação poderá possuir semântica sobre como a Saúde de uma dependência influencia seu consumidor.

---

# Dependência Obrigatória

Falha poderá propagar diretamente.

---

# Dependência Redundante

Falha de uma alternativa poderá reduzir margem sem afetar função.

---

# Dependência Opcional

Falha poderá afetar apenas propriedade secundária.

---

# Dependência Condicional

Impacto poderá existir apenas em determinado contexto.

---

# Invariante de Propagação Semântica

A Saúde deverá propagar-se segundo significado da relação...

Não simplesmente segundo topologia.

---

# Propagação Ascendente

`RECURSO`

↓

`COMPONENTE`

↓

`SERVICO`

↓

`CAPACIDADE`

↓

`MISSAO`

Permite compreender impacto potencial.

---

# Propagação Descendente

`CAPACIDADE DEGRADADA`

↓

`SERVICOS NECESSARIOS`

↓

`COMPONENTES`

↓

`RECURSOS`

Permite investigar possíveis origens.

---

# Propagação Lateral

Elementos que compartilham dependência poderão apresentar padrões semelhantes.

---

# Correlação por Topologia

Se múltiplos Serviços degradam simultaneamente...

OPS poderá procurar dependências compartilhadas.

---

# Invariante de Contexto Topológico

O Grafo Operacional deverá funcionar como uma das principais fontes de contexto para interpretação de Saúde.

---

# Saúde de Dependência Externa

Quando Provider externo estiver degradado...

OPS poderá receber Estado informado pelo próprio Provider.

Mas também deverá considerar sua própria experiência.

---

# Exemplo

Provider declara:

`OPERACIONAL`

Entretanto...

as chamadas da UNO apresentam:

`70% DE ERRO`

Para a UNO...

a dependência poderá estar:

`DEGRADADA`

---

# Invariante de Saúde Localmente Verificada

Quando possível...

OPS deverá avaliar dependências críticas também pela perspectiva de sua própria utilização.

---

# Saúde de Missão

OPS não deverá determinar sozinho o sucesso de uma Missão.

Entretanto...

Poderá informar ao CCM:

`CAPACIDADE_A = SAUDAVEL`

`CAPACIDADE_B = DEGRADADA`

`CAPACIDADE_C = INDISPONIVEL`

---

# CCM Interpreta Impacto Missional

CCM poderá então compreender:

> A Missão ainda consegue cumprir seu objetivo?

Essa separação preserva a fronteira:

**OPS avalia possibilidade operacional.**

**CCM avalia consequência sobre propósito.**

---

# Invariante OPS ↔ CCM

A Saúde Operacional deverá fornecer ao CCM contexto suficiente sem assumir responsabilidade pela interpretação institucional da Missão.

---

# Saúde como Fluxo Vivo

A Saúde não deverá ser tratada como registro atualizado ocasionalmente.

Ela poderá mudar continuamente conforme:

- Sinais chegam;
- dependências mudam;
- ações acontecem;
- contexto muda;
- Evidências envelhecem.

---

# Avaliação Incremental

OPS poderá recalcular apenas partes afetadas do Grafo.

---

# Exemplo

Uma Dependência muda de:

`SAUDAVEL`

para:

`DEGRADADA`

OPS poderá avaliar:

- Serviços dependentes;
- Capacidades relacionadas;
- Missões potencialmente expostas.

---

# Invariante de Propagação Proporcional

Uma mudança local não deverá obrigatoriamente exigir reavaliação completa de todo o ecossistema quando relações permitem limitar o escopo.

---

# Saúde e Mudança de Contexto

O próprio contexto poderá alterar a interpretação sem mudança no Sinal.

---

# Exemplo

Capacidade disponível:

`1000 req/s`

Carga atual:

`600 req/s`

Saúde:

`SAUDAVEL`

Uma Missão crítica é ativada e exige:

`700 req/s adicionais`

A infraestrutura não mudou.

Mas a suficiência operacional mudou.

---

# Invariante de Saúde Contextual Dinâmica

Saúde poderá mudar porque a necessidade mudou...

Mesmo quando a infraestrutura permaneceu igual.

---

# Saúde e Reserva

Capacidade reservada deverá participar da avaliação.

---

# Exemplo

Capacidade total:

`1000`

Uso:

`700`

Reserva crítica:

`250`

Capacidade efetivamente livre:

`50`

Uma leitura superficial poderia dizer:

`30% LIVRE`

Mas operacionalmente...

A margem disponível é muito menor.

---

# Invariante de Margem Real

A avaliação de Saúde de Capacidade deverá considerar compromissos e reservas relevantes.

---

# Da Saúde para Atenção

Depois de produzir uma avaliação...

OPS deverá decidir se essa condição merece atenção.

Essa transição não deverá ser automática em todos os casos.

---

# Exemplo

`REDUNDANCIA = REDUZIDA`

poderá produzir:

`SAUDE = ATENCAO`

Mas talvez não exija despertar um Operador às 03:00.

---

# Outro Exemplo

`AUTENTICACAO = INDISPONIVEL`

poderá exigir resposta imediata.

---

# Invariante de Separação Saúde ↔ Urgência

Uma condição operacional e a urgência de resposta são dimensões relacionadas...

Mas distintas.

---

# Estado de Saúde

responde:

> Como está?

---

# Prioridade de Atenção

responde:

> Quanto precisamos nos importar agora?

---

# Ação Recomendada

responde:

> O que deveríamos fazer?

---

# Separação Conceitual

Assim...

OPS deverá preservar:

`SAUDE`

≠

`PRIORIDADE`

≠

`ACAO`

---

# Por que Essa Separação Importa

Sem ela...

Toda degradação vira Alerta.

Todo Alerta vira urgência.

Toda urgência vira interrupção humana.

E a operação perde capacidade de distinguir aquilo que realmente exige intervenção.

---

# Fórmula Conceitual Expandida

A avaliação poderá ser compreendida como:

`SINAIS`

+

`QUALIDADE`

+

`BASELINE`

+

`EXPECTATIVA`

+

`JANELA TEMPORAL`

+

`TOPOLOGIA`

+

`CONTEXTO`

↓

`SAUDE`

+

`CONFIANCA`

+

`TENDENCIA`

↓

`CONTEXTO DE ATENCAO`

---

# Próxima Dimensão

Com regras, Thresholds, Baselines, anomalias, tendências, confiança, composição e propagação de Saúde estabelecidos...

o próximo lote deverá aprofundar:

- gestão do ciclo de vida dos Sinais;
- aquisição e ingestão;
- normalização;
- deduplicação;
- enriquecimento;
- correlação;
- cardinalidade;
- retenção;
- perda e atraso de telemetria;
- tempestades de Sinais;
- backpressure;
- qualidade da instrumentação;
- cobertura observacional;
- sinais dourados;
- sinais sintéticos;
- sinais humanos;
- governança da telemetria.

---

# Ciclo de Vida dos Sinais Operacionais

A Gestão de Sinais não deverá ser tratada apenas como coleta.

Um Sinal nasce.

É produzido.

Transmitido.

Recebido.

Normalizado.

Contextualizado.

Correlacionado.

Interpretado.

Retido.

E eventualmente expira.

Esse ciclo deverá ser compreendido porque falhas em qualquer etapa podem alterar a percepção operacional.

---

# Origem do Sinal

Todo Sinal deverá possuir uma origem suficientemente compreensível.

Essa origem poderá ser:

- aplicação;
- componente;
- Serviço;
- fornecedor;
- Operador;
- Agente;
- Automação;
- sistema externo.

---

# Invariante de Origem

Sinais críticos não deverão perder silenciosamente sua Proveniência.

---

# Produção do Sinal

Um Sinal poderá ser produzido:

- continuamente;
- periodicamente;
- por Evento;
- sob demanda;
- por verificação ativa.

---

# Frequência de Emissão

A frequência deverá ser proporcional à dinâmica daquilo que está sendo observado.

---

# Invariante de Frequência Adequada

OPS deverá evitar tanto:

- baixa frequência incapaz de detectar mudanças importantes;

quanto:

- frequência excessiva sem valor proporcional.

---

# Aquisição

Aquisição representa o processo pelo qual OPS recebe determinado Sinal.

---

# Push

A origem envia o Sinal.

---

# Pull

OPS consulta a origem.

---

# Streaming

O Sinal chega continuamente através de fluxo.

---

# Polling

OPS verifica periodicamente determinada condição.

---

# Invariante de Estratégia Compatível

O mecanismo de aquisição deverá ser compatível com:

- latência necessária;
- custo;
- criticidade;
- volume;
- confiabilidade.

---

# Ingestão

Depois de adquirido...

o Sinal entra na infraestrutura operacional.

---

# Falha de Ingestão

Um Sinal poderá existir na origem...

Mas não chegar ao sistema de observabilidade.

Nesse caso...

a realidade e a percepção se separam.

---

# Invariante de Observabilidade da Ingestão

Canais críticos de ingestão deverão possuir mecanismos de Saúde próprios.

---

# Perda de Telemetria

Quando Sinais esperados não chegam...

OPS deverá conseguir distinguir, quando possível:

- ausência real de Evento;
- falha da origem;
- falha de transporte;
- falha de ingestão;
- falha de processamento.

---

# Invariante de Não Confusão da Ausência

OPS não deverá assumir automaticamente que:

`SEM SINAL`

significa:

`SEM PROBLEMA`

ou:

`SERVICO INDISPONIVEL`

---

# Atraso de Telemetria

Um Sinal poderá chegar atrasado.

---

# Exemplo

Evento ocorreu:

`10:00:00`

Foi recebido:

`10:07:18`

Se OPS utilizar apenas o momento de recebimento...

poderá reconstruir incorretamente a Linha do Tempo.

---

# Invariante de Temporalidade do Sinal

Quando relevante...

OPS deverá preservar diferença entre:

- tempo de ocorrência;
- tempo de emissão;
- tempo de recebimento;
- tempo de processamento.

---

# Telemetria Fora de Ordem

Sinais distribuídos poderão chegar em sequência diferente da ocorrência real.

---

# Invariante de Ordenação Cautelosa

OPS não deverá inferir causalidade apenas pela ordem de chegada.

---

# Duplicação

Sinais poderão ser entregues mais de uma vez.

---

# Duplicação Legítima

Duas fontes independentes poderão produzir Evidências parecidas.

---

# Duplicação Técnica

O mesmo Evento poderá ser retransmitido.

---

# Deduplicação

OPS deverá possuir mecanismos para reduzir duplicação quando ela não acrescentar informação.

---

# Invariante de Deduplicação Segura

Deduplicar não deverá remover Evidências realmente independentes.

---

# Identidade do Sinal

Alguns Sinais ou Eventos poderão possuir identificadores capazes de auxiliar deduplicação.

---

# Normalização

Fontes diferentes poderão utilizar formatos distintos.

Por exemplo:

`latency_ms = 800`

ou:

`latency_seconds = 0.8`

OPS poderá normalizar essas representações.

---

# Invariante de Unidade

Valores comparados deverão possuir unidades compatíveis.

---

# Erro de Unidade

Uma falha de normalização poderá transformar:

`500ms`

em:

`500s`

Esse tipo de erro poderá produzir decisões operacionais graves.

---

# Garantia de Conversão Rastreável

Transformações relevantes deverão preservar informação suficiente sobre a origem e conversão.

---

# Normalização Semântica

Não basta converter formato.

Também poderá ser necessário alinhar significado.

---

# Exemplo

Um Provider utiliza:

`healthy`

Outro:

`available`

Esses Estados não deverão ser considerados equivalentes automaticamente sem mapeamento semântico.

---

# Invariante de Não Equivalência Automática

Valores parecidos não deverão ser fundidos sem compreensão de significado.

---

# Enriquecimento

Depois da normalização...

um Sinal poderá receber contexto adicional.

---

# Exemplos de Enriquecimento

Adicionar:

- Serviço;
- Capacidade;
- Owner;
- Criticidade;
- região;
- organização;
- versão;
- mudança recente;
- Missão relacionada.

---

# Invariante de Enriquecimento sem Falsificação

Contexto adicionado deverá ser derivado de relações confiáveis.

OPS não deverá anexar causalidade ou responsabilidade sem fundamento.

---

# Correlação

Múltiplos Sinais poderão ser agrupados por contexto.

---

# Correlação Temporal

Sinais ocorreram em intervalo semelhante.

---

# Correlação Topológica

Sinais pertencem a elementos relacionados no Grafo Operacional.

---

# Correlação Causal

Existe Evidência de relação de causa e efeito.

---

# Correlação Semântica

Sinais descrevem a mesma condição sob perspectivas diferentes.

---

# Invariante de Correlação não Causal

Correlação deverá permanecer distinta de causalidade até existir Evidência suficiente.

---

# Evento Composto

Vários Sinais poderão formar um Evento Operacional composto.

---

# Exemplo

`LATENCIA ALTA`

+

`ERRO ALTO`

+

`FILA CRESCENDO`

+

`DEPENDENCIA LENTA`

↓

`DEGRADACAO DO SERVICO DE PROCESSAMENTO`

---

# Invariante de Síntese Rastreável

Uma síntese deverá permitir aprofundamento até os Sinais que a sustentam.

---

# Agregação

Sinais de grande volume poderão ser agregados.

---

# Agregação Temporal

Exemplo:

milhares de requisições em um minuto se tornam:

`ERRO = 4.3%`

---

# Agregação Espacial

Exemplo:

mil instâncias se tornam:

`REGIAO_A = 97% SAUDAVEL`

---

# Agregação por Consumidor

Exemplo:

`TENANT_X = 22% DE ERRO`

---

# Invariante de Agregação com Dimensão

OPS deverá preservar dimensões necessárias para investigação.

---

# Over-Aggregation

Agregação excessiva poderá esconder problemas localizados.

---

# Exemplo

Taxa global:

`ERRO = 1%`

Mas:

`ORGANIZACAO_B = 85% DE ERRO`

A visão global parecerá saudável.

---

# Invariante de Não Diluição

Problemas relevantes de subgrupos não deverão desaparecer em médias globais quando impacto justificar visibilidade.

---

# Cardinalidade

Sinais poderão possuir muitas combinações de atributos.

Exemplo:

- usuário;
- endpoint;
- região;
- versão;
- organização;
- modelo.

Isso pode produzir cardinalidade enorme.

---

# Cardinalidade como Risco Operacional

Cardinalidade excessiva poderá gerar:

- custo;
- latência;
- dificuldade de consulta;
- indisponibilidade da observabilidade.

---

# Invariante de Cardinalidade Governada

Instrumentação deverá equilibrar riqueza de contexto e sustentabilidade operacional.

---

# Dimensões de Alto Valor

OPS deverá favorecer atributos que ajudam a responder perguntas operacionais reais.

---

# Dimensões de Baixo Valor

Informação detalhada que nunca participa de diagnóstico poderá representar custo sem benefício.

---

# Princípio da Telemetria com Propósito

Não deverá existir telemetria apenas porque é tecnicamente possível coletá-la.

---

# Retenção

Sinais não precisarão permanecer disponíveis indefinidamente.

---

# Retenção Quente

Dados recentes disponíveis para investigação rápida.

---

# Retenção Morna

Dados históricos acessíveis com maior custo ou latência.

---

# Retenção Fria

Dados arquivados para:

- auditoria;
- análise;
- obrigação;
- aprendizagem.

---

# Invariante de Retenção Proporcional

A duração de retenção deverá considerar:

- valor operacional;
- custo;
- privacidade;
- segurança;
- legislação;
- necessidade histórica.

---

# Retenção não é Memória Institucional

Telemetria bruta poderá expirar.

Mas acontecimentos relevantes poderão permanecer como memória operacional estruturada.

---

# Exemplo

Milhões de logs de um incidente podem ser removidos após retenção.

Entretanto...

a instituição poderá preservar:

- Linha do Tempo;
- causa;
- impacto;
- decisão;
- aprendizado.

---

# Invariante de Separação Telemetria ↔ Memória

A expiração de Sinais brutos não deverá necessariamente eliminar conhecimento institucional derivado.

---

# Tempestade de Sinais

Durante falhas...

o volume de telemetria poderá aumentar drasticamente.

---

# Telemetry Storm

Uma falha pode produzir:

- logs em massa;
- retries;
- Eventos;
- Alertas;
- traces adicionais.

Isso poderá sobrecarregar justamente a infraestrutura utilizada para compreender a falha.

---

# Invariante de Resiliência da Telemetria

A infraestrutura de Sinais críticos deverá considerar comportamento durante condições extraordinárias.

---

# Backpressure

Quando o consumidor de Sinais não consegue acompanhar a produção...

poderá ocorrer Backpressure.

---

# Estratégias

Poderão incluir:

- buffering;
- filas;
- sampling;
- priorização;
- descarte controlado.

---

# Invariante de Descarte Consciente

Quando perda de Sinais for inevitável...

OPS deverá favorecer descarte baseado em prioridade e preservar informação crítica quando possível.

---

# Sampling

Sampling representa análise ou armazenamento de apenas parte dos Sinais.

---

# Sampling Aleatório

Seleciona amostra distribuída.

---

# Sampling por Regra

Preserva determinados tipos.

---

# Sampling Adaptativo

Aumenta ou reduz amostragem conforme contexto.

---

# Tail Sampling

Poderá preservar transações com:

- erro;
- alta latência;
- comportamento anômalo.

---

# Invariante de Sampling não Cego

Amostragem não deverá remover sistematicamente exatamente as condições mais importantes.

---

# Compressão

Sinais repetitivos poderão ser comprimidos.

---

# Exemplo

Em vez de registrar:

`ERRO X`

10.000 vezes...

OPS poderá manter:

`ERRO X ocorreu 10.000 vezes entre 14:00 e 14:05`

quando essa representação for suficiente.

---

# Invariante de Compressão Sem Perda Essencial

A redução de volume deverá preservar informação necessária para compreender impacto e padrão.

---

# Qualidade da Instrumentação

Sinais são tão úteis quanto a instrumentação que os produz.

---

# Instrumentação Incompleta

Um Serviço poderá não emitir informação suficiente sobre partes críticas.

---

# Instrumentação Excessiva

Também poderá gerar ruído e custo.

---

# Invariante de Instrumentação Orientada a Perguntas

A instrumentação deverá permitir responder perguntas operacionais importantes.

---

# Perguntas Fundamentais de Instrumentação

Para uma Capacidade relevante...

OPS deverá buscar responder:

> Está disponível?

> Está rápida o suficiente?

> Está produzindo resultado correto?

> Está perto do limite?

> De que está dependendo?

> O consumidor está conseguindo utilizar?

---

# Cobertura Observacional

Cobertura representa quanto da realidade relevante pode ser observada.

---

# Cobertura de Componentes

Quantos elementos técnicos possuem Sinais adequados?

---

# Cobertura de Serviço

A função entregue pode ser observada?

---

# Cobertura de Consumidor

A experiência real pode ser observada?

---

# Cobertura de Dependência

É possível perceber condições de elementos externos críticos?

---

# Invariante de Cobertura Proporcional

Quanto maior a criticidade...

Maior deverá ser a cobertura necessária.

---

# Lacuna de Observabilidade

Uma Lacuna ocorre quando propriedade relevante não possui Evidência suficiente.

---

# Exemplo

A organização sabe que o Serviço está lento...

Mas não possui traces capazes de localizar onde a latência ocorre.

---

# Dívida de Observabilidade

Lacunas persistentes poderão constituir:

**Dívida de Observabilidade**

---

# Invariante de Dívida Visível

Lacunas relevantes deverão poder originar melhoria.

---

# Sinais Dourados

OPS poderá utilizar conjuntos resumidos de Sinais capazes de oferecer visão inicial rápida.

Um modelo comum poderá incluir:

- latência;
- tráfego;
- erros;
- saturação.

---

# Golden Signals

Esses sinais poderão ser úteis como ponto de partida.

Entretanto...

não deverão ser tratados como conjunto universal suficiente.

---

# Invariante de Golden Signals Contextuais

Cada Serviço poderá precisar de Sinais adicionais conforme sua função.

---

# Sinal de Latência

Quanto tempo determinada operação leva.

---

# Sinal de Tráfego

Quanto trabalho está sendo realizado.

---

# Sinal de Erro

Quanto trabalho está falhando.

---

# Sinal de Saturação

Quanto de determinado recurso ou limite está sendo consumido.

---

# Sinais Funcionais

Além dos sinais técnicos...

OPS deverá observar propriedades diretamente ligadas à função.

---

# Exemplo

Em Serviço de pagamento:

`TRANSACOES_APROVADAS`

`TRANSACOES_RECUSADAS`

`TEMPO_DE_CONFIRMAR_PAGAMENTO`

---

# Exemplo

Em Serviço de comunicação:

`MENSAGENS_ENVIADAS`

`MENSAGENS_ENTREGUES`

`MENSAGENS_REJEITADAS`

---

# Invariante de Sinal Funcional

Capacidades críticas deverão possuir pelo menos alguma Evidência sobre a função que realmente entregam.

---

# Sinais Sintéticos

OPS poderá executar ações artificiais para verificar comportamento.

---

# Synthetic Monitoring

Exemplo:

um robô realiza periodicamente uma jornada completa.

---

# Vantagem

Permite detectar falhas mesmo quando não existem usuários ativos naquele momento.

---

# Limitação

A jornada sintética pode não representar toda a experiência real.

---

# Invariante de Complementaridade Sintética

Sinais sintéticos deverão complementar...

Não necessariamente substituir...

Evidência real de consumidores.

---

# Real User Monitoring

A experiência real dos consumidores poderá produzir Sinais.

---

# Invariante de Privacidade

A observação de usuários deverá respeitar:

- finalidade;
- minimização;
- segurança;
- legislação;
- consentimento quando aplicável.

---

# Sinais Humanos

Pessoas também percebem condições operacionais.

---

# Exemplo

Um Operador identifica:

> O comportamento está estranho, apesar dos indicadores estarem normais.

Essa observação poderá possuir valor.

---

# Invariante de Não Exclusão Humana

OPS não deverá ignorar automaticamente observações humanas apenas porque ainda não existe Sinal automatizado correspondente.

---

# Relato de Consumidor

Usuários poderão perceber problemas antes da telemetria.

---

# Exemplo

Vários consumidores dizem:

> Não conseguimos concluir a operação.

Esse padrão deverá poder tornar-se Sinal Operacional.

---

# Invariante de Voz do Consumidor

Relatos consistentes de consumidores deverão poder participar da avaliação de Saúde.

---

# Sinais de Agentes

Agentes poderão produzir Sinais derivados.

---

# Exemplo

Um Agente identifica:

> Esta combinação de métricas se parece com incidente anterior.

Isso poderá ajudar.

Mas deverá permanecer:

`INFERENCIA`

---

# Invariante de Sinal Cognitivo

Sinais produzidos por Agentes deverão possuir Proveniência e distinção epistemológica adequadas.

---

# Governança da Telemetria

A coleta de Sinais possui implicações.

Ela pode revelar:

- comportamento;
- identidade;
- dados;
- operações sensíveis;
- segredos.

Por isso...

telemetria também deverá ser governada.

---

# Classificação de Sinais

Alguns Sinais poderão ser:

- públicos;
- internos;
- confidenciais;
- restritos.

---

# Invariante de Acesso Proporcional

Acesso à telemetria deverá respeitar sensibilidade e função.

---

# Segredos em Logs

Logs não deverão conter, sem necessidade legítima:

- senhas;
- tokens;
- chaves;
- dados sensíveis.

---

# Invariante de Higiene de Telemetria

Instrumentação deverá evitar exposição indevida de informação sensível.

---

# Redação e Mascaramento

Informações sensíveis poderão ser:

- removidas;
- mascaradas;
- tokenizadas;
- agregadas.

---

# Telemetria e Federação

Em operações federadas...

cada organização poderá possuir seus próprios Sinais.

---

# Compartilhamento Mínimo

Uma organização talvez não precise compartilhar logs completos.

Poderá fornecer:

- Estado;
- indicadores;
- Eventos;
- Evidências necessárias.

---

# Invariante de Compartilhamento Proporcional

Federação deverá compartilhar contexto suficiente para coordenação sem exigir exposição indiscriminada da operação interna.

---

# Qualidade do Pipeline de Sinais

A Saúde do pipeline poderá ser avaliada através de propriedades como:

- atraso;
- perda;
- duplicação;
- backlog;
- erro de processamento;
- cobertura.

---

# Meta-Sinais

O próprio sistema de Sinais produz Sinais sobre si mesmo.

Por exemplo:

`INGESTION_LAG`

`DROPPED_EVENTS`

`QUEUE_DEPTH`

`PROCESSING_ERRORS`

---

# Invariante de Meta-Observação

Pipelines críticos de observabilidade deverão possuir Meta-Sinais suficientes para demonstrar sua própria confiabilidade.

---

# Saúde da Gestão de Sinais

OPS deverá conseguir responder:

> Estamos recebendo Sinais suficientes?

> Eles estão chegando no tempo correto?

> Estamos perdendo informação?

> Nossa observabilidade está saturando?

> A instrumentação continua válida?

---

# Sinal Vencido

Um Sinal poderá continuar armazenado...

Mas deixar de ser operacionalmente atual.

---

# Invariante de Expiração Semântica

OPS deverá distinguir retenção física de validade operacional.

---

# Exemplo

Um Estado:

`SAUDAVEL`

registrado ontem...

continua existindo no banco.

Mas não representa Saúde atual.

---

# Relação entre Ciclo de Vida e Saúde

Assim...

a qualidade da avaliação de Saúde depende de toda a cadeia:

`ORIGEM`

↓

`INSTRUMENTACAO`

↓

`TRANSPORTE`

↓

`INGESTAO`

↓

`PROCESSAMENTO`

↓

`CONTEXTUALIZACAO`

↓

`CORRELACAO`

↓

`INTERPRETACAO`

↓

`SAUDE`

Qualquer degradação nessa cadeia poderá reduzir confiança.

---

# Invariante de Cadeia Observacional

OPS deverá reconhecer que uma conclusão operacional pode ser tão confiável quanto o caminho que trouxe suas Evidências.

---

# Gestão de Sinais como Capacidade de OPS

A Gestão de Sinais deverá possuir:

- Owner;
- Saúde;
- capacidade;
- limites;
- contingência;
- procedimentos.

Ou seja...

ela própria também pertence ao OPS Runtime.

---

# Recursividade Operacional

Essa propriedade é importante.

OPS observa Serviços.

Mas os sistemas usados para observar Serviços...

também são Serviços.

---

# Invariante de Recursividade Controlada

A operação deverá possuir profundidade suficiente para observar suas capacidades críticas de observação sem exigir regressão infinita.

---

# Confiança Operacional da Observabilidade

No fim...

OPS deverá conseguir afirmar não apenas:

> O Serviço parece saudável.

Mas também:

> Temos boa razão para confiar nessa avaliação.

Essa segunda frase representa maturidade observacional.

---

# Próxima Dimensão

Com o Ciclo de Vida dos Sinais, aquisição, ingestão, qualidade, cardinalidade, retenção, cobertura e Governança estabelecidos...

o próximo lote deverá aprofundar:

- correlação de Sinais em escala;
- redução de ruído;
- agrupamento;
- causalidade;
- detecção de padrões;
- supressão;
- manutenção;
- silenciamento;
- flapping;
- tempestades de Alertas;
- deduplicação cognitiva;
- gestão de atenção;
- passagem de Saúde para Alerta;
- acionabilidade;
- prioridade operacional dos sinais.

---

# Modelo Integrado de Saúde Operacional

A Saúde Operacional deverá funcionar como uma camada de interpretação entre a realidade observada e a decisão operacional.

Ela não deverá ser apenas um campo.

Não deverá ser apenas uma cor.

Não deverá ser apenas um cálculo.

Deverá representar uma conclusão operacional contextualizada.

Essa conclusão deverá considerar, quando apropriado:

* função;
* Estado;
* Evidências;
* qualidade dos Sinais;
* dependências;
* consumidor;
* Criticidade;
* margem;
* tendência;
* tempo;
* confiança.

---

# Hierarquia de Interpretação

Conceitualmente...

OPS poderá organizar a interpretação da realidade em diferentes níveis.

`REALIDADE`

↓

`SINAIS`

↓

`EVIDENCIAS`

↓

`CONDICOES`

↓

`DIMENSOES DE SAUDE`

↓

`SAUDE SINTETICA`

↓

`RISCO E IMPACTO`

↓

`NECESSIDADE DE ATENCAO`

Essa hierarquia representa níveis de compressão semântica.

---

# Realidade

A realidade representa aquilo que efetivamente está acontecendo.

OPS nunca terá acesso perfeito a ela.

Terá apenas Evidências.

---

# Sinais

Os Sinais representam observações sobre partes da realidade.

---

# Evidências

Sinais ganham significado quando possuem:

* contexto;
* Proveniência;
* temporalidade;
* qualidade.

---

# Condição Operacional

Uma Condição representa interpretação local.

Por exemplo:

`LATENCIA ACIMA DO ESPERADO`

`REDUNDANCIA REDUZIDA`

`BACKUP ATRASADO`

`CAPACIDADE PROXIMA DO LIMITE`

---

# Dimensão de Saúde

As Condições podem alterar dimensões como:

* desempenho;
* disponibilidade;
* capacidade;
* recuperabilidade;
* integridade.

---

# Saúde Sintética

As dimensões podem ser resumidas em Estado mais simples para coordenação.

---

# Risco e Impacto

A mesma Saúde poderá possuir consequências diferentes dependendo de:

* Criticidade;
* consumidor;
* Missão;
* tempo;
* margem.

---

# Atenção

Somente depois dessas interpretações deverá ser avaliada a necessidade de interromper ou mobilizar alguém.

---

# Invariante de Camadas de Interpretação

OPS deverá preservar distinção suficiente entre aquilo que foi observado e aquilo que foi concluído.

---

# Saúde como Objeto Operacional

Uma Avaliação de Saúde poderá ser tratada conceitualmente como objeto contendo:

* elemento avaliado;
* Estado;
* dimensões;
* escopo;
* momento;
* Evidências;
* confiança;
* tendência;
* impacto conhecido;
* condição de validade.

---

# Exemplo Conceitual

`ELEMENTO = SERVICO_DE_IDENTIDADE`

`SAUDE = DEGRADADA`

`DISPONIBILIDADE = SAUDAVEL`

`LATENCIA = DEGRADADA`

`CAPACIDADE = ATENCAO`

`REDUNDANCIA = REDUZIDA`

`CONFIANCA = ALTA`

`TENDENCIA = PIORANDO`

`FRESCOR = 8s`

Essa representação possui valor muito maior do que apenas:

`AMARELO`

---

# Invariante de Estado Rico

Quando a decisão exigir...

OPS deverá permitir aprofundar o Estado Sintético em suas propriedades constituintes.

---

# Hierarquia de Evidência

Nem toda Evidência deverá possuir o mesmo peso.

---

# Evidência Direta Funcional

Demonstra diretamente se a função pode ser utilizada.

Exemplo:

uma transação sintética completa falhou.

---

# Evidência Direta Técnica

Demonstra propriedade técnica específica.

Exemplo:

processo deixou de responder.

---

# Evidência Indireta

Sugere condição.

Exemplo:

a fila está crescendo.

---

# Evidência Humana

Uma pessoa relata comportamento observado.

---

# Evidência Cognitiva

Um Agente identifica padrão provável.

---

# Invariante de Peso Contextual

A relevância de cada Evidência deverá depender da pergunta operacional que está sendo respondida.

---

# Exemplo

Para responder:

> O usuário consegue concluir a jornada?

Uma transação funcional externa poderá possuir maior valor do que uso de CPU.

Para responder:

> O componente está perto de saturação?

A métrica interna poderá ser mais relevante.

---

# Saúde Primária e Saúde Derivada

Uma avaliação poderá ser:

**Primária**

quando produzida diretamente sobre o elemento observado.

Ou:

**Derivada**

quando calculada a partir de outros elementos.

---

# Exemplo

`DATABASE_A = DEGRADADA`

pode ser Saúde Primária.

`SERVICO_A = EM_RISCO`

pode ser derivada da dependência com o banco.

---

# Invariante de Proveniência da Saúde Derivada

OPS deverá permitir compreender quais Estados contribuíram para uma Saúde derivada.

---

# Saúde Calculada e Saúde Declarada

A Saúde poderá ser produzida automaticamente.

Também poderá ser declarada por autoridade operacional.

---

# Exemplo

OPS calcula:

`SAUDE = SAUDAVEL`

Mas durante determinada atividade o Incident Commander declara:

`SAUDE OPERACIONAL = DEGRADADA`

porque existe impacto conhecido não capturado pela instrumentação.

---

# Invariante de Declaração com Proveniência

Uma declaração humana não deverá apagar silenciosamente o Estado calculado.

Ambas as perspectivas poderão ser preservadas.

---

# Override de Saúde

Em determinadas situações...

um Operador autorizado poderá realizar Override da síntese automática.

---

# Exemplo

Automação:

`SAUDAVEL`

Operador:

`DEGRADADO — ERRO FUNCIONAL NAO OBSERVADO PELA TELEMETRIA`

---

# Invariante de Override Rastreável

Overrides relevantes deverão possuir:

* autor;
* motivo;
* momento;
* duração;
* Evidência quando disponível.

---

# Override Temporário

A declaração poderá expirar ou exigir revalidação.

---

# Invariante de Não Override Permanente por Esquecimento

Um Override não deverá permanecer indefinidamente sem revisão quando representar condição temporária.

---

# Saúde e Estado Desejado

A avaliação de Saúde deverá considerar a relação entre:

`ESTADO OBSERVADO`

e:

`CONDICAO OPERACIONAL ESPERADA`

---

# Estado Diferente mas Saudável

Nem toda diferença representa degradação.

Por exemplo...

autoscaling modifica quantidade de instâncias.

O Estado mudou.

A função continua adequada.

---

# Estado Igual mas Degradado

Também poderá ocorrer o inverso.

A configuração permanece igual.

Mas a demanda aumentou e tornou capacidade insuficiente.

---

# Invariante de Saúde não Reduzida a Drift

Drift e Saúde deverão permanecer conceitos relacionados, mas distintos.

---

# Saúde e Criticidade

Criticidade não deverá alterar o fato observado.

Entretanto...

poderá alterar:

* profundidade da avaliação;
* frequência de observação;
* tolerância;
* urgência.

---

# Exemplo

A perda de uma réplica em Serviço secundário poderá gerar:

`ATENCAO`

A mesma perda em Serviço crítico sem outra margem poderá gerar:

`CRITICO`

---

# Invariante de Interpretação Proporcional à Criticidade

A mesma condição técnica poderá possuir significado operacional diferente conforme o papel da Capacidade.

---

# Saúde e Risco

Saúde representa condição atual.

Risco representa possibilidade de consequência futura.

Esses conceitos deverão permanecer separados.

---

# Exemplo

`SAUDE = SAUDAVEL`

`RISCO = ALTO`

poderá ocorrer quando:

* certificado expirará em breve;
* capacidade está próxima do limite;
* redundância foi perdida;
* backup não foi validado.

---

# Invariante de Separação Saúde ↔ Risco

Um Serviço saudável poderá estar em risco.

Um Serviço degradado poderá possuir risco de propagação baixo.

---

# Saúde e Resiliência

Uma Capacidade poderá estar funcional...

Mas possuir baixa capacidade de sobreviver à próxima falha.

---

# Saúde de Resiliência

OPS poderá considerar propriedades como:

* redundância;
* reserva;
* contingência;
* recoverability;
* diversidade de dependência.

---

# Invariante de Próxima Falha

A Saúde Operacional madura deverá considerar, quando relevante:

> Se outro elemento falhar agora, conseguimos continuar?

---

# Saúde da Recuperabilidade

Essa dimensão possui característica particular.

Ela não pode ser demonstrada apenas pelo comportamento atual.

---

# Evidências de Recuperabilidade

Poderão incluir:

* restore testado;
* failover validado;
* Runbook exercitado;
* contingência disponível;
* responsáveis preparados.

---

# Invariante de Recuperabilidade Demonstrada

Uma Capacidade crítica não deverá receber alta confiança de recuperação apenas porque possui um plano documentado.

---

# Saúde da Operação Humana

A própria capacidade humana poderá possuir Saúde.

---

# Sinais Humanos

Poderão incluir:

* cobertura de plantão;
* carga;
* fadiga;
* quantidade de incidentes simultâneos;
* especialistas disponíveis;
* handover pendente.

---

# Exemplo

Sistemas:

`SAUDAVEIS`

Equipe:

`SOBRECARGA CRITICA`

A operação sistêmica poderá estar:

`EM_RISCO`

---

# Invariante de Saúde Sociotécnica

OPS deverá reconhecer que a capacidade operacional resulta da combinação entre tecnologia, pessoas e instituições.

---

# Saúde de Fornecedor

Providers externos poderão possuir Saúde observada sob duas perspectivas.

---

# Saúde Declarada pelo Provider

O fornecedor informa sua condição.

---

# Saúde Percebida pela UNO

A UNO observa o comportamento real da dependência.

---

# Invariante de Dupla Perspectiva

Quando possível...

OPS deverá preservar diferença entre:

`STATUS DO PROVIDER`

e:

`EXPERIENCIA DA UNO`

---

# Saúde Federada

Em ambiente multi-organização...

cada participante poderá fornecer avaliações sobre suas próprias Capacidades.

---

# Estado Compartilhado

A Federação poderá compartilhar:

* Estado;
* impacto;
* confiança;
* momento;
* previsão de recuperação.

---

# Invariante de Saúde Federada com Proveniência

Estados recebidos de outra organização deverão preservar origem e temporalidade suficientes.

---

# Saúde e Continuidade

A Saúde atual deverá poder influenciar decisões de continuidade.

---

# Exemplo

Uma Capacidade está:

`DEGRADADA`

mas:

`ESTAVEL`

e:

`CONTINGENCIA DISPONIVEL`

Outra está:

`SAUDAVEL`

mas:

`SEM REDUNDANCIA`

`BACKUP NAO VALIDADO`

`SATURACAO CRESCENTE`

A segunda poderá possuir risco sistêmico maior.

---

# Invariante de Visão além do Presente

OPS deverá evitar tratar Saúde apenas como fotografia instantânea.

---

# Saúde como Vetor

Conceitualmente...

uma avaliação madura poderá ser compreendida como:

`CONDICAO ATUAL`

*

`MARGEM`

*

`TENDENCIA`

*

`RECUPERABILIDADE`

*

`CONFIANCA`

Essa composição revela mais do que um Estado único.

---

# Invariantes Fundamentais de Saúde Operacional

A Engenharia Oficial estabelece as seguintes propriedades fundamentais.

---

# Invariante 1 — Saúde Deve Ser Funcional

A Saúde deverá refletir capacidade de cumprir função.

---

# Invariante 2 — Saúde Deve Ser Evidenciável

Uma conclusão relevante deverá possuir fundamento.

---

# Invariante 3 — Saúde Deve Possuir Temporalidade

Avaliações envelhecem.

---

# Invariante 4 — Desconhecido é Estado Válido

Falta de Evidência não deverá ser convertida em saúde presumida.

---

# Invariante 5 — Saúde é Multidimensional

Um único rótulo não deverá eliminar dimensões relevantes.

---

# Invariante 6 — Saúde é Contextual

Consumidor, função e modo operacional influenciam interpretação.

---

# Invariante 7 — Saúde e Disponibilidade não São Sinônimos

Um Serviço disponível poderá estar degradado.

---

# Invariante 8 — Saúde e Risco não São Sinônimos

Um Serviço saudável poderá estar em risco.

---

# Invariante 9 — Saúde e Prioridade não São Sinônimos

A condição e a urgência de intervenção deverão permanecer distintas.

---

# Invariante 10 — Saúde de Dependência Deve Propagar Semanticamente

Não deverá existir cópia cega de Estado.

---

# Invariante 11 — Saúde Deve Considerar Margem

Perda de redundância ou reserva também importa.

---

# Invariante 12 — Saúde da Observabilidade Deve Ser Conhecível

A confiança na avaliação depende da qualidade da percepção.

---

# Invariante 13 — Sinais Devem Preservar Proveniência

Medido, reportado, calculado e inferido deverão permanecer distinguíveis.

---

# Invariante 14 — Sinais Devem Possuir Qualidade Avaliável

Atraso, ausência e contradição deverão poder reduzir confiança.

---

# Invariante 15 — Silêncio não Prova Saúde

Ausência de problema observado poderá refletir ausência de observação.

---

# Invariante 16 — Threshold não Substitui Contexto

Limite numérico não deverá ser tratado como interpretação universal.

---

# Invariante 17 — Baseline não Deve Normalizar Degradação Inconscientemente

Aprendizagem operacional precisa preservar referência de qualidade.

---

# Invariante 18 — Anomalia não é Falha

Comportamento incomum exige interpretação.

---

# Invariante 19 — Tendência Pode Ser Mais Importante que Valor Instantâneo

Trajetória também é Evidência.

---

# Invariante 20 — Predição Deve Permanecer Distinta de Observação

Risco futuro não deverá ser apresentado como falha atual.

---

# Invariante 21 — Estado Deve Possuir Estabilidade Adequada

Flapping excessivo reduz valor operacional.

---

# Invariante 22 — Recuperação Deve Ser Sustentada

O primeiro Sinal positivo não necessariamente demonstra normalização.

---

# Invariante 23 — Evidências Independentes Possuem Valor Diferente de Derivações da Mesma Fonte

Correlação de fontes deverá considerar independência.

---

# Invariante 24 — Agregação não Deve Esconder Impacto Relevante

Problemas localizados poderão precisar permanecer visíveis.

---

# Invariante 25 — Sinal Deve Possuir Relação com o Grafo

Contexto topológico aumenta utilidade operacional.

---

# Invariante 26 — Telemetria Também Possui Limites

Volume, custo, cardinalidade e retenção deverão ser sustentáveis.

---

# Invariante 27 — Telemetria não é Memória Institucional

Sinais podem expirar sem apagar aprendizado.

---

# Invariante 28 — Atenção Humana é Finita

A Gestão de Sinais deverá proteger capacidade cognitiva dos Operadores.

---

# Invariante 29 — Sinal não é Alerta

Observar e interromper são decisões distintas.

---

# Invariante 30 — Alerta não é Incidente

A necessidade de atenção não determina automaticamente necessidade de coordenação formal.

---

# Invariante 31 — Redução de Ruído não Deve Produzir Cegueira

Supressão e deduplicação deverão preservar cobertura relevante.

---

# Invariante 32 — Supressão Deve Ser Rastreável

A organização deverá saber quando deixou deliberadamente de gerar atenção.

---

# Invariante 33 — Silenciamentos Temporários Devem Expirar

Exceções não deverão tornar-se cegueira permanente.

---

# Invariante 34 — Atenção Deve Ser Acionável

Interrupções humanas deverão possuir propósito operacional.

---

# Invariante 35 — Roteamento Deve Respeitar Responsabilidade

Informação correta para pessoa errada continua sendo falha de coordenação.

---

# Invariante 36 — Auto-Remediação não Deve Apagar Evidência

Automação bem-sucedida continua fazendo parte da história operacional.

---

# Invariante 37 — Feedback Deve Melhorar a Gestão de Sinais

Alertas ruins deverão poder produzir ajuste.

---

# Invariante 38 — Saúde Deve Navegar entre Síntese e Evidência

A interface deverá permitir aprofundamento quando necessário.

---

# Invariante 39 — Saúde do Consumidor Importa

Perspectiva interna não deverá dominar automaticamente a avaliação.

---

# Invariante 40 — Saúde Operacional Deve Permanecer Separada do Sucesso Missional

OPS informa possibilidade.

CCM interpreta propósito.

---

# Garantias Mínimas de Saúde Operacional

Uma implementação adequada deverá possuir mecanismos suficientes para garantir:

* avaliação de Saúde;
* Evidência;
* temporalidade;
* Proveniência;
* Estado desconhecido;
* contextualização;
* confiança;
* dimensão funcional;
* gestão de Sinais;
* controle de ruído;
* atenção proporcional.

---

# Garantia de Estado Explicável

Deverá ser possível compreender por que determinada Saúde foi atribuída.

---

# Garantia de Frescor

Deverá ser possível perceber quando uma avaliação não possui Evidência recente suficiente.

---

# Garantia de Qualidade Observacional

Deverá existir mecanismo para perceber degradação da própria observabilidade.

---

# Garantia de Contextualização

Sinais relevantes deverão poder ser relacionados aos elementos do OPS Runtime.

---

# Garantia de Propagação

A Saúde deverá poder informar elementos dependentes sem assumir impacto inexistente.

---

# Garantia de Redução de Ruído

OPS deverá possuir meios de evitar interrupções humanas desnecessárias.

---

# Garantia de Atenção

Condições relevantes deverão possuir caminho para chegar ao responsável adequado.

---

# Garantia de Escalonamento

A ausência de resposta a condição crítica deverá poder produzir aumento de atenção.

---

# Garantia de Aprendizagem

O comportamento real dos Alertas deverá poder melhorar regras futuras.

---

# Anti-Padrões de Saúde Operacional

A Engenharia Oficial deverá reconhecer algumas condições especialmente perigosas.

---

# Anti-Padrão — Tudo Verde

Toda a Plataforma aparece saudável independentemente da qualidade das Evidências.

---

# Anti-Padrão — Verde por Silêncio

Ausência de Sinais é interpretada como normalidade.

---

# Anti-Padrão — Dashboard de CPU

A Saúde de Serviços é reduzida à utilização de infraestrutura.

---

# Anti-Padrão — Threshold Universal

O mesmo limite é aplicado a todos os contextos.

---

# Anti-Padrão — Alerta por Métrica

Toda métrica que cruza Threshold gera interrupção.

---

# Anti-Padrão — Média Esconde Dor

Valores globais ocultam degradação de segmentos importantes.

---

# Anti-Padrão — Baseline Aprende Falha

Uma degradação persistente é incorporada automaticamente como comportamento esperado.

---

# Anti-Padrão — Flapping Aceito

Estados mudam repetidamente sem tratamento da instabilidade.

---

# Anti-Padrão — Saúde sem Consumidor

Componentes parecem normais enquanto usuários não conseguem utilizar a função.

---

# Anti-Padrão — Provider Disse que Está Verde

OPS ignora Evidência própria porque o fornecedor declarou operação normal.

---

# Anti-Padrão — Telemetria Infinita

Tudo é coletado indefinidamente sem propósito operacional.

---

# Anti-Padrão — Cardinalidade Explosiva

A observabilidade degrada por excesso de dimensões.

---

# Anti-Padrão — Alert Storm

Uma única falha produz centenas de interrupções humanas.

---

# Anti-Padrão — Silêncio Permanente

Um Alerta ruim é silenciado indefinidamente em vez de corrigido.

---

# Anti-Padrão — ACK como Solução

Reconhecer um Alerta é tratado como resolução.

---

# Anti-Padrão — Dashboard sem Proveniência

Ninguém sabe de onde veio determinado Estado.

---

# Anti-Padrão — IA Declara Verdade

Inferência de Agente é apresentada como condição confirmada sem Evidência adequada.

---

# Critérios de Maturidade de Saúde Operacional

A maturidade poderá evoluir em diferentes níveis.

---

# Maturidade Instrumentada

A organização possui Sinais básicos.

---

# Maturidade Monitorada

Thresholds e verificações detectam condições conhecidas.

---

# Maturidade Contextual

Sinais estão relacionados a:

* Serviços;
* Owners;
* dependências;
* consumidores.

---

# Maturidade Funcional

A Saúde considera experiência real da função.

---

# Maturidade Correlacionada

Múltiplos Sinais formam contextos coerentes.

---

# Maturidade Preditiva

Tendências permitem antecipar riscos.

---

# Maturidade Cognitiva

Agentes auxiliam interpretação e redução de ruído.

---

# Maturidade Adaptativa

Regras e modelos melhoram a partir do comportamento operacional sem normalizar silenciosamente falhas.

---

# Maturidade Sistêmica

A Saúde pode ser compreendida através de:

* recursos;
* componentes;
* Serviços;
* Capacidades;
* organizações;
* Missões.

---

# Relação com 007 — Observabilidade Operacional

O arquivo `007` estabelece como a realidade pode ser observada.

O `008` estabelece como essas observações participam da construção de Saúde.

Conceitualmente:

`007 = COMO ENXERGAMOS`

`008 = COMO INTERPRETAMOS A CONDICAO`

---

# Relação com 009 — Eventos, Alertas e Gestão de Atenção

O arquivo `008` estabelece quando determinada condição possui significado operacional suficiente para justificar atenção.

O `009` aprofundará como:

* Eventos;
* Alertas;
* notificações;
* canais;
* escalonamentos;

materializam essa atenção.

---

# Relação com 010 — Incidentes

Quando a condição ultrapassar determinados limites...

um Alerta ou conjunto de Evidências poderá originar Incidente.

---

# Relação com 015 — Capacidade, Desempenho e Saturação

As dimensões de:

* capacidade;
* margem;
* tendência;
* saturação;

serão aprofundadas naquele arquivo.

---

# Relação com 016 — Disponibilidade, Confiabilidade e SLOs

Expectativas utilizadas na avaliação de Saúde serão aprofundadas através de:

* SLI;
* SLO;
* disponibilidade;
* confiabilidade.

---

# Relação com 017 — Dependências e Mapa de Impacto

A propagação semântica da Saúde depende do Grafo Operacional.

---

# Relação com 018 — Contingência e Recuperação

A Saúde deverá representar quando a operação:

* degrada;
* entra em contingência;
* recupera;
* estabiliza.

---

# Relação com 022 — Auto-Remediação

Uma condição de Saúde poderá iniciar respostas automáticas.

---

# Relação com 023 — Agentes Operacionais

Agentes poderão:

* correlacionar;
* resumir;
* detectar anomalias;
* recomendar;
* prever.

Mas deverão preservar Incerteza e Proveniência.

---

# Relação OPS ↔ CCM

A Saúde Operacional deverá fornecer contexto ao CCM.

Por exemplo:

`CAPACIDADE = DEGRADADA`

`CAPACIDADE LIVRE = 20%`

`REDUNDANCIA = AUSENTE`

`PREVISAO DE RECUPERACAO = 25 MIN`

O CCM poderá utilizar esse contexto para decidir sobre Missões.

---

# Invariante de Não Inversão

OPS não deverá concluir sozinho:

> A Missão deve ser cancelada.

Poderá informar:

> A capacidade necessária está indisponível e não existe contingência disponível.

A decisão missional pertence ao domínio apropriado.

---

# Relação com Eva

Eva poderá transformar a complexidade da Saúde Operacional em linguagem apropriada ao usuário.

---

# Exemplo Interno

OPS poderá possuir:

`SERVICO_X = DEGRADADO`

`DEPENDENCIA_Y = CRITICA`

`ETA = 20 MIN`

`CONFIANCA = ALTA`

---

# Exemplo para Usuário

Eva poderá apresentar:

> O serviço que precisamos está temporariamente instável. Já existe recuperação em andamento e a estimativa atual é de aproximadamente 20 minutos.

O usuário não precisa interpretar o Grafo Operacional.

---

# Invariante de Síntese sem Falsificação

A simplificação apresentada por Eva deverá preservar significado suficiente e não transformar incerteza em certeza.

---

# Eva e Profundidade

Um Operador poderá pedir:

> Por quê?

Eva poderá aprofundar.

---

# Conversa como Superfície de Saúde

A Saúde Operacional poderá ser consultada naturalmente.

Por exemplo:

> Como está a capacidade de comunicação agora?

> Existe algum risco?

> O que mudou desde ontem?

> Qual Serviço está afetando esta Missão?

---

# Invariante de Explicabilidade Conversacional

A interface conversacional deverá possuir acesso ao contexto necessário para explicar Estados relevantes.

---

# Agentes como Analistas de Saúde

Agentes poderão operar continuamente sobre a Saúde.

---

# Funções Possíveis

* correlação;
* classificação;
* análise de tendência;
* detecção de lacuna;
* recuperação de precedente;
* sugestão de hipótese;
* recomendação de investigação.

---

# Agente não Substitui Evidência

Uma explicação cognitiva deverá permanecer sustentada pela realidade observável.

---

# Filosofia da Saúde Operacional

A Engenharia Oficial compreende que o objetivo da observabilidade não é produzir dados.

É produzir consciência operacional suficiente.

A organização não precisa saber tudo sobre todos os componentes a todo momento.

Precisa saber o suficiente para compreender:

* se suas capacidades funcionam;
* se continuam confiáveis;
* se estão perdendo margem;
* se estão se aproximando de falha;
* se consegue confiar na própria percepção.

---

# Saúde como Capacidade de Honestidade

Existe uma propriedade profunda nesse modelo.

Uma operação madura precisa conseguir dizer:

> Estamos saudáveis.

Quando possui Evidência.

> Estamos degradados.

Quando existe comprometimento.

> Estamos em risco.

Quando a função ainda existe, mas a margem diminuiu.

> Não sabemos.

Quando a observabilidade não permite conclusão.

---

# O Valor do Desconhecido

Declarar:

`DESCONHECIDO`

poderá parecer menos confortável do que mostrar verde.

Entretanto...

é muito mais seguro do que transmitir confiança falsa.

---

# Saúde não é Otimismo

OPS não deverá tentar produzir uma representação tranquilizadora da realidade.

Deverá produzir uma representação útil.

---

# Saúde não é Pessimismo

Também não deverá transformar toda imperfeição em crise.

Uma operação real possui variação.

O objetivo é distinguir variação tolerável de condição operacionalmente relevante.

---

# Saúde é Julgamento Estruturado

A Saúde Operacional deverá combinar:

* medição;
* contexto;
* semântica;
* temporalidade;
* topologia;
* confiança.

Assim...

o sistema consegue transformar ruído em significado.

---

# Princípio Final

A Saúde Operacional representa a capacidade permanente de OPS de transformar Sinais distribuídos sobre a realidade em compreensão confiável sobre a condição das Capacidades da Plataforma UNO.

Ela deverá permitir responder:

> Está funcionando?

> Está funcionando bem o suficiente?

> Para quem?

> Por quanto tempo podemos continuar?

> Qual margem ainda existe?

> Estamos piorando?

> Conseguimos recuperar?

> Temos Evidência suficiente para confiar nessa conclusão?

---

# Conclusão

A Engenharia Oficial estabelece a Saúde Operacional e a Gestão de Sinais como fundamentos permanentes da capacidade de OPS de permanecer conectado à realidade.

Sinais deverão ser:

* produzidos;
* adquiridos;
* normalizados;
* contextualizados;
* qualificados;
* correlacionados;
* interpretados.

Entretanto...

o objetivo não será acumular telemetria.

Será transformar Evidência em compreensão.

---

Saúde deverá permanecer:

* funcional;
* contextual;
* temporal;
* multidimensional;
* explicável;
* topológica;
* proporcional à Evidência.

A Gestão de Sinais deverá proteger:

* qualidade;
* Proveniência;
* cobertura;
* sustentabilidade;
* atenção humana.

---

Onde houver operação...

Existirão Sinais.

Onde houver Sinais...

Existirá necessidade de interpretação.

Onde houver interpretação...

Existirá incerteza.

Onde houver incerteza...

Existirá necessidade de confiança explícita.

Onde houver múltiplas dependências...

Existirá necessidade de compreender propagação.

Onde houver milhões de Sinais...

Existirá necessidade de compressão cognitiva.

E onde a Plataforma UNO conseguir transformar toda essa realidade distribuída em uma compreensão suficientemente simples para decidir e suficientemente profunda para investigar...

Existirá Saúde Operacional.

---

# Encerramento do Arquivo 008

Com este documento...

o V08 estabelece:

* Saúde Operacional;
* dimensões de Saúde;
* Meta-Saúde;
* confiança;
* frescor;
* Sinais;
* qualidade;
* Baselines;
* Thresholds;
* anomalias;
* tendências;
* propagação;
* Gestão de Sinais;
* redução de ruído;
* Gestão de Atenção.

O próximo arquivo deverá aprofundar aquilo que acontece quando determinada condição precisa efetivamente entrar no espaço de atenção operacional.

Essa será a responsabilidade de:

**009 — Eventos, Alertas e Gestão de Atenção.**

---

**Fim do arquivo `008-saude-operacional-e-gestao-de-sinais.md`.**
