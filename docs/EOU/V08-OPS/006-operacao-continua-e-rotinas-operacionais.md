# 006 — Observabilidade, Sinais e Telemetria

Com o modelo de Estado estabelecido...

OPS passa a possuir linguagem suficiente para responder:

> Como um objeto está?

> Como deveria estar?

> O que sabemos sobre sua condição?

> Com qual confiança?

> Em qual escopo?

> Desde quando?

Mas existe uma questão anterior a todas essas respostas:

> Como a UNO percebe aquilo que está acontecendo?

Essa é a responsabilidade da **Observabilidade**.

---

# Propósito

Este documento estabelece a Engenharia Oficial para:

- Observabilidade;
- Sinais;
- Telemetria;
- métricas;
- logs;
- traces;
- Eventos observacionais;
- probes;
- heartbeats;
- sensores;
- sinais sintéticos;
- experiência de Consumer;
- sinais de Provider;
- qualidade de telemetria;
- Proveniência;
- contexto;
- correlação;
- cardinalidade;
- retenção;
- sampling;
- ingestão;
- processamento;
- enriquecimento;
- armazenamento;
- consulta;
- Federação;
- telemetria offline;
- Edge;
- agentes observacionais;
- detecção;
- derivação;
- SLO;
- SLIs;
- Error Budgets;
- observabilidade da própria observabilidade.

---

# Princípio Fundamental

Observabilidade não é:

> possuir dashboards.

Observabilidade é a capacidade de produzir Evidência suficiente para compreender a condição e o comportamento de um sistema.

---

# Outro Princípio Fundamental

Telemetria não é Estado.

Telemetria fornece Evidência...

a partir da qual Assertions e Estados poderão ser produzidos.

---

# Fluxo Conceitual

    REALIDADE OPERACIONAL
        ↓
    SINAIS
        ↓
    TELEMETRIA
        ↓
    EVIDÊNCIA
        ↓
    ASSERTIONS
        ↓
    ESTADO
        ↓
    CONTEXTO
        ↓
    DECISÃO
        ↓
    AÇÃO

---

# Invariante Sinal ≠ Estado

Um sinal individual não deverá ser transformado automaticamente em conclusão operacional sem semântica suficiente.

---

# Exemplo

    CPU = 95%

não significa necessariamente:

    SERVICE = DEGRADED

---

# Por quê

Pode representar:

- carga normal;
- processamento batch;
- saturação;
- comportamento esperado;
- erro de sensor;
- escala insuficiente;
- otimização eficiente.

---

# Contexto é Necessário

Para interpretar:

    CPU = 95%

OPS poderá precisar conhecer:

- duração;
- baseline;
- workload;
- capacidade;
- SLO;
- fila;
- latência;
- erros;
- throttling;
- impacto em Consumer.

---

# Invariante de Interpretação Contextual

Sinais deverão ser interpretados no contexto da função operacional que representam.

---

# Observabilidade como Capacidade

Observabilidade deverá ser tratada como uma Capacidade operacional da UNO.

---

# Ela Permite

- detectar;
- compreender;
- explicar;
- comparar;
- correlacionar;
- reconstruir;
- prever;
- verificar.

---

# Detectar

> Algo mudou?

---

# Compreender

> O que mudou?

---

# Explicar

> Quais Evidências sustentam essa interpretação?

---

# Comparar

> Isso é diferente do comportamento esperado?

---

# Correlacionar

> Quais outros fenômenos ocorreram no mesmo contexto?

---

# Reconstruir

> O que estava acontecendo naquele momento?

---

# Prever

> Para onde o comportamento parece estar caminhando?

---

# Verificar

> A ação executada produziu o resultado esperado?

---

# Invariante de Observabilidade Orientada à Pergunta

A arquitetura observacional deverá ser desenhada para responder perguntas operacionais...

não apenas para acumular dados.

---

# Observabilidade não é Monitoramento

Monitoramento responde principalmente:

> alguma condição conhecida ultrapassou um limite conhecido?

Observabilidade possui escopo mais amplo:

> conseguimos investigar inclusive comportamentos que não foram antecipados?

---

# Invariante Monitoramento ⊂ Observabilidade

Monitoramento deverá ser tratado como parte da Observabilidade...

não como seu sinônimo completo.

---

# Monitoramento

Poderá utilizar:

- thresholds;
- regras;
- checks;
- Alertas;
- dashboards.

---

# Observabilidade

Também deverá permitir:

- exploração;
- investigação;
- correlação;
- perguntas novas;
- reconstrução histórica;
- análise multidimensional.

---

# Observabilidade não é Telemetria

Telemetria é o conjunto de dados produzidos e transportados sobre comportamento operacional.

Observabilidade é uma propriedade da capacidade de compreender o sistema utilizando Evidências.

---

# Invariante Telemetria ≠ Observabilidade

Uma Plataforma poderá produzir enorme volume de telemetria...

e ainda possuir baixa observabilidade.

---

# Exemplo

Ter:

    50 TB/day OF LOGS

não significa conseguir responder:

> por que Consumer X não conseguiu concluir uma transação?

---

# Telemetria sem Contexto

Pode gerar:

- custo;
- ruído;
- cardinalidade;
- armazenamento;
- dificuldade investigativa.

---

# Invariante de Valor Informacional

Volume de dados não deverá ser utilizado como medida primária de qualidade observacional.

---

# Observabilidade e o Modelo de Estado

O arquivo `005-estados-operacionais-e-ciclo-de-vida.md` estabeleceu:

    DESIRED_STATE
    OBSERVED_STATE
    EFFECTIVE_STATE

Observabilidade alimenta principalmente a capacidade de construir:

    OBSERVED_STATE

e apoiar:

    EFFECTIVE_STATE

---

# Relação

    TELEMETRY
        ↓
    EVIDENCE
        ↓
    STATE_ASSERTION
        ↓
    OBSERVED_STATE
        ↓
    EFFECTIVE_STATE

---

# Invariante de Fronteira

O sistema de Observabilidade poderá produzir Evidência e Assertions...

mas a interpretação oficial de Estado deverá continuar respeitando o modelo definido em `005`.

---

# Observabilidade e Desired State

Desired State também poderá ser observado como contexto.

---

# Exemplo

Uma métrica mostra:

    INSTANCE_COUNT = 3

Enquanto configuração desejada indica:

    DESIRED_INSTANCE_COUNT = 5

---

# Resultado

A Observabilidade fornece Evidência da divergência.

---

# Mas...

ela não deverá alterar Desired State por conta própria apenas porque detectou diferença.

---

# Invariante Observação ≠ Autoridade

Perceber divergência não concede autoridade para modificá-la.

---

# Observabilidade e Verificação

Depois de uma ação...

a Observabilidade deverá ajudar a responder:

> o Estado esperado realmente foi alcançado?

---

# Exemplo

OPS executa:

    FAILOVER_TO_REGION_B

Comando retorna:

    SUCCESS

---

# Isso não Basta

A Observabilidade deverá verificar, conforme necessário:

    TRAFFIC_ON_REGION_B = TRUE
    SERVICE_HEALTH = HEALTHY
    ERROR_RATE = ACCEPTABLE
    DATA_LAG = ACCEPTABLE

---

# Invariante de Closed Loop

Automação operacional relevante deverá possuir mecanismo observacional capaz de verificar resultado.

---

# O Ciclo Operacional

    OBSERVE
        ↓
    INTERPRET
        ↓
    DECIDE
        ↓
    ACT
        ↓
    OBSERVE AGAIN

---

# Invariante de Feedback

A UNO deverá tratar Observabilidade como parte do loop de controle...

não apenas como ferramenta de diagnóstico posterior.

---

# Sinal

Um **Sinal** representa manifestação observável de algum comportamento ou condição.

---

# Exemplos

- temperatura;
- latência;
- erro;
- uso de CPU;
- fila;
- resposta HTTP;
- perda de pacote;
- mudança de configuração;
- ausência de heartbeat;
- reclamação de Consumer;
- declaração de Provider.

---

# Signal Record

Conceitualmente poderá possuir:

    SIGNAL_ID
    SOURCE
    OBJECT
    SIGNAL_TYPE
    VALUE
    UNIT
    OBSERVED_AT
    SCOPE
    QUALITY
    PROVENANCE

---

# Invariante de Sinal Identificável

Quando necessário...

deverá ser possível saber:

> qual objeto produziu ou originou o sinal?

---

# Sinal Bruto

Um sinal poderá surgir como:

    RAW_SIGNAL

---

# Exemplo

    TEMPERATURE = 87.3 C

---

# Sinal Enriquecido

Depois de receber contexto:

    ASSET = EDGE_NODE_12
    LOCATION = FACILITY_A
    SENSOR = TEMP_SENSOR_3
    OBSERVED_AT = ...
    CALIBRATION_STATUS = VALID

---

# Invariante de Enriquecimento sem Alteração do Fato

Adicionar contexto não deverá silenciosamente modificar o valor observado original.

---

# Raw Evidence

Quando relevante...

a UNO poderá preservar referência ao dado original.

---

# Exemplo

    RAW_VALUE = 87.3
    NORMALIZED_VALUE = 360.45K

---

# Invariante de Normalização Rastreável

Transformações de unidade ou formato deverão ser reconstruíveis quando consequência justificar.

---

# Signal Type

Sinais poderão ser classificados por natureza.

---

# Exemplos

    METRIC

    LOG

    TRACE

    EVENT

    PROBE

    HEARTBEAT

    SENSOR

    SYNTHETIC

    CONSUMER_OBSERVATION

    PROVIDER_DECLARATION

    HUMAN_OBSERVATION

    AGENT_OBSERVATION

---

# Invariante de Taxonomia Extensível

A Engenharia Oficial deverá reconhecer categorias canônicas...

sem impedir novos tipos de Sinal.

---

# Métrica

Uma **Métrica** representa uma medição quantitativa associada a determinado contexto.

---

# Exemplos

    request_count

    error_count

    latency

    cpu_usage

    memory_usage

    queue_depth

    active_sessions

    temperature

    battery_level

---

# Metric Sample

Poderá possuir:

    METRIC_NAME
    VALUE
    UNIT
    TIMESTAMP
    DIMENSIONS

---

# Exemplo

    metric = request_latency
    value = 240
    unit = ms
    service = payment
    region = br-south

---

# Invariante de Unidade

Métricas físicas ou quantitativas deverão possuir unidade conhecida quando ela for necessária para interpretação.

---

# Métrica sem Unidade

Algumas métricas poderão ser adimensionais.

---

# Exemplos

    ratio
    count
    percentage

---

# Mas...

a semântica ainda deverá ser conhecida.

---

# Invariante de Semântica da Métrica

O nome sozinho não deverá ser considerado definição suficiente.

---

# Exemplo Ruim

    utilization = 80

Perguntas:

- 80 quê?
- porcentagem?
- razão?
- qual recurso?
- qual janela?
- máximo ou média?

---

# Metric Definition

Poderá conter:

    NAME
    DESCRIPTION
    UNIT
    TYPE
    SOURCE
    DIMENSIONS
    EXPECTED_RANGE
    COLLECTION_METHOD

---

# Invariante de Métrica Descobrível

Métricas operacionais importantes deverão possuir significado descobrível por humanos e Agentes.

---

# Tipos Conceituais de Métrica

A implementação poderá distinguir:

    COUNTER
    GAUGE
    HISTOGRAM
    DISTRIBUTION
    RATE
    SUMMARY

---

# Counter

Representa valor acumulativo.

---

# Exemplo

    requests_total

---

# Gauge

Representa valor que pode subir ou descer.

---

# Exemplo

    queue_depth

---

# Histogram / Distribution

Representa distribuição de valores.

---

# Exemplo

    request_latency

---

# Invariante de Tipo Compatível

A forma de agregação deverá respeitar o tipo semântico da métrica.

---

# Anti-Padrão

Calcular média direta de counters cumulativos sem transformação apropriada.

---

# Taxa

Uma taxa deverá possuir intervalo ou base temporal.

---

# Exemplo

    120 requests / second

---

# Invariante de Janela

Uma taxa sem janela temporal suficiente poderá ser ambígua.

---

# Latência

Latência não deverá ser representada apenas por média quando distribuição for operacionalmente relevante.

---

# Exemplo

    AVG = 120ms

pode esconder:

    P99 = 8s

---

# Invariante de Distribuição

Para fenômenos com cauda operacionalmente importante...

a Plataforma deverá permitir representação adequada da distribuição.

---

# Percentis

Poderão incluir:

    P50
    P90
    P95
    P99

---

# Mas...

percentis agregados também possuem limitações matemáticas.

---

# Invariante de Agregação Estatística Correta

A Engenharia Oficial deverá evitar operações matematicamente inválidas sobre estatísticas agregadas.

---

# Métricas de Saturação

Poderão indicar proximidade de limite.

---

# Exemplos

    CPU
    MEMORY
    CONNECTION_POOL
    THREAD_POOL
    DISK
    QUEUE
    BANDWIDTH

---

# Mas...

uso elevado não significa necessariamente saturação funcional.

---

# Invariante Saturação ↔ Impacto

A interpretação deverá considerar se o recurso está limitando função relevante.

---

# Métricas de Erro

Poderão representar:

    ERROR_COUNT
    ERROR_RATE
    FAILURE_RATIO

---

# Invariante de Denominador

Taxas de erro deverão possuir denominador semanticamente correto.

---

# Exemplo

    100 ERRORS

não diz muito sem saber se ocorreram em:

    110 REQUESTS

ou:

    100,000,000 REQUESTS

---

# Métricas de Tráfego

Poderão representar:

- requests;
- eventos;
- mensagens;
- bytes;
- sessões;
- operações.

---

# Invariante de Tráfego Contextual

Ausência de tráfego pode significar:

- falha;
- horário ocioso;
- Consumer ausente;
- rota alterada;
- manutenção.

---

# Métricas de Capacidade

Poderão responder:

> quanto podemos suportar?

---

# Exemplos

    CURRENT_LOAD
    MAX_SAFE_LOAD
    HEADROOM
    QUEUE_CAPACITY

---

# Headroom

Representa margem restante antes de determinado limite operacional.

---

# Exemplo

    CURRENT_LOAD = 8,000
    SAFE_CAPACITY = 10,000
    HEADROOM = 20%

---

# Invariante de Capacidade não Estática

Capacidade poderá variar conforme:

- dependências;
- região;
- configuração;
- Provider;
- modo;
- workload.

---

# Métricas de Disponibilidade

Disponibilidade não deverá ser inferida apenas de:

    PROCESS_RUNNING = TRUE

---

# Poderá exigir

- função acessível;
- resposta correta;
- dependências;
- Consumer path.

---

# Invariante de Disponibilidade Funcional

A medição deverá refletir função prometida quando possível.

---

# Métricas de Correção

Um sistema pode responder rapidamente...

mas produzir resultado errado.

---

# Exemplo

    HTTP_200 = TRUE
    RESULT_VALID = FALSE

---

# Invariante de Correção

Observabilidade de Serviços críticos deverá considerar correção funcional quando tecnicamente possível e proporcional.

---

# Métricas de Freshness

Algumas funções dependem de dados recentes.

---

# Exemplo

    LAST_DATA_UPDATE_AGE = 4h

O Serviço pode responder normalmente...

mas fornecer informação obsoleta.

---

# Invariante de Freshness Funcional

Disponibilidade técnica não deverá ocultar obsolescência de dados quando Freshness fizer parte da função.

---

# Métricas de Dependência

Um Serviço poderá observar:

    DEPENDENCY_LATENCY
    DEPENDENCY_ERRORS
    DEPENDENCY_AVAILABILITY

---

# Invariante de Dependência Identificada

Quando possível...

telemetria de dependência deverá preservar identidade do objeto relacionado.

---

# Golden Signals

Uma implementação poderá utilizar conjuntos conhecidos de sinais operacionais.

Por exemplo:

- latência;
- tráfego;
- erros;
- saturação.

---

# Mas...

a Engenharia Oficial não deverá limitar Observabilidade a um conjunto fixo.

---

# Invariante de Sinais Orientados à Função

Os sinais necessários deverão derivar daquilo que precisa ser compreendido sobre o Serviço.

---

# RED

Alguns Serviços poderão utilizar:

    RATE
    ERRORS
    DURATION

---

# USE

Recursos poderão utilizar:

    UTILIZATION
    SATURATION
    ERRORS

---

# Invariante de Framework como Ferramenta

RED, USE e outros modelos deverão ser tratados como heurísticas úteis...

não como ontologia universal da UNO.

---

# Logs

Um **Log** representa registro contextual de ocorrência produzido por sistema, componente, operador ou mecanismo observacional.

---

# Log Record

Poderá conter:

    TIMESTAMP
    SOURCE
    SEVERITY
    MESSAGE
    EVENT_TYPE
    OBJECT_ID
    TRACE_ID
    CORRELATION_ID
    ATTRIBUTES

---

# Invariante de Log Estruturável

Quando logs forem utilizados para automação ou correlação...

campos importantes deverão possuir estrutura interpretável por máquina.

---

# Texto Livre Continua Útil

Logs humanos poderão conter narrativa.

---

# Mas...

não deverão depender exclusivamente de parsing frágil quando campos forem operacionalmente críticos.

---

# Exemplo

Em vez de apenas:

    "payment failed for customer"

poderá existir:

    EVENT_TYPE = PAYMENT_FAILED
    SERVICE = payment
    ERROR_CLASS = PROVIDER_TIMEOUT
    CORRELATION_ID = ...

---

# Invariante de Estrutura sem Perder Contexto

Estruturação deverá facilitar interpretação...

sem eliminar detalhes necessários para investigação.

---

# Severity de Log

Poderá existir:

    DEBUG
    INFO
    WARN
    ERROR
    FATAL

---

# Mas...

severity do log não é severidade de Incidente.

---

# Invariante Log Severity ≠ Incident Severity

Um único `ERROR` não deverá abrir automaticamente Incidente crítico sem contexto.

---

# Logs não São Eventos Canônicos por Padrão

Uma linha de log pode registrar ocorrência...

mas isso não significa que seja Evento de domínio oficial.

---

# Invariante Log ≠ Domain Event

Quando determinada ocorrência possuir importância arquitetural...

ela poderá ser promovida a Evento estruturado próprio.

---

# Logs e Dados Sensíveis

Logs podem acidentalmente conter:

- credenciais;
- tokens;
- PII;
- segredos;
- conteúdo confidencial.

---

# Invariante de Minimização

A Plataforma deverá evitar registrar dados sensíveis sem necessidade operacional legítima.

---

# Redaction

Poderá existir processo de:

    REDACTION
    MASKING
    TOKENIZATION

---

# Invariante de Proteção antes da Disseminação

Sempre que possível...

dados sensíveis deverão ser tratados antes de serem replicados para múltiplos sistemas observacionais.

---

# Logs Imutáveis?

Nem todo log precisa possuir imutabilidade absoluta.

---

# Mas...

Evidências críticas poderão exigir controles maiores de integridade.

---

# Invariante de Integridade Proporcional

A proteção contra alteração deverá acompanhar valor probatório e consequência.

---

# Traces

Um **Trace** representa trajetória de uma operação através de múltiplos componentes ou Serviços.

---

# Exemplo

    CONSUMER
        ↓
    API_GATEWAY
        ↓
    ORDER_SERVICE
        ↓
    PAYMENT_SERVICE
        ↓
    PROVIDER

---

# Trace

Permite perguntar:

> por onde esta operação passou?

> onde gastou tempo?

> onde falhou?

---

# Span

Cada etapa poderá ser representada como:

    SPAN

---

# Span Record

Poderá possuir:

    TRACE_ID
    SPAN_ID
    PARENT_SPAN_ID
    SERVICE
    OPERATION
    START_TIME
    END_TIME
    STATUS
    ATTRIBUTES

---

# Invariante de Causalidade Estrutural

Relações parent-child em Trace poderão representar estrutura de execução...

mas não deverão ser extrapoladas automaticamente para causalidade institucional mais ampla.

---

# Trace Context

O contexto poderá atravessar fronteiras entre Serviços.

---

# Invariante de Propagação Controlada

Atributos propagados deverão ser limitados ao necessário.

---

# Por quê

Context propagation sem disciplina pode espalhar:

- PII;
- segredos;
- identificadores excessivos;
- cardinalidade.

---

# Distributed Trace

Em sistemas distribuídos...

uma operação poderá atravessar:

- processos;
- regiões;
- organizações;
- Providers.

---

# Invariante de Trace Parcial

A ausência de Span de sistema externo não deverá invalidar o restante do Trace.

---

# External Boundary

Poderá existir:

    TRACE_BOUNDARY = EXTERNAL_PROVIDER

---

# Federação de Trace

Organizações poderão compartilhar contexto limitado.

---

# Invariante de Federação Observacional

A Federação deverá respeitar:

- confiança;
- privacidade;
- classificação;
- contrato;
- minimização.

---

# Trace Sampling

Nem toda operação precisa ser armazenada integralmente.

---

# Sampling

Poderá reduzir:

- custo;
- volume;
- processamento.

---

# Mas...

sampling pode remover justamente eventos raros.

---

# Invariante de Sampling Consciente

A política de sampling deverá considerar valor investigativo e Criticidade.

---

# Head Sampling

Decisão ocorre no início.

---

# Tail Sampling

Decisão ocorre após observar resultado.

---

# Exemplo

Uma política poderá preservar:

    100% OF ERRORS

e amostrar:

    HEALTHY_REQUESTS

---

# Invariante de Sampling Explicável

Ausência de Trace deverá poder ser distinguida, quando relevante, entre:

- não ocorreu;
- não foi instrumentado;
- foi descartado por sampling;
- foi perdido.

---

# Eventos Observacionais

Um Evento observacional representa ocorrência significativa detectada através da Observabilidade.

---

# Exemplos

    CONFIG_CHANGED
    INSTANCE_RESTARTED
    PROVIDER_STATUS_CHANGED
    HEARTBEAT_MISSED
    CAPACITY_THRESHOLD_CROSSED

---

# Invariante Evento Observacional ≠ Incidente

Eventos são fatos ou observações.

Incidentes são interpretações operacionais governadas sobre impacto ou interrupção.

---

# Event Record

Poderá conter:

    EVENT_ID
    EVENT_TYPE
    OBJECT_ID
    OCCURRED_AT
    OBSERVED_AT
    SOURCE
    ATTRIBUTES
    EVIDENCE

---

# OCCURRED_AT

Quando a ocorrência aconteceu.

---

# OBSERVED_AT

Quando foi observada.

---

# RECEIVED_AT

Quando chegou ao sistema.

---

# Invariante Temporal Triplo

Quando necessário...

OPS deverá distinguir:

    OCCURRED_AT
    OBSERVED_AT
    RECEIVED_AT

---

# Probes

Um **Probe** representa mecanismo ativo de teste.

---

# Exemplos

- HTTP check;
- DNS query;
- login sintético;
- transação sintética;
- teste de rota;
- consulta a Provider.

---

# Invariante de Probe Funcional

Quanto mais crítico o Serviço...

mais valioso poderá ser testar função real em vez de apenas processo ou porta.

---

# Liveness Probe

Pergunta:

> o processo está vivo?

---

# Readiness Probe

Pergunta:

> ele está pronto para receber trabalho?

---

# Functional Probe

Pergunta:

> a função relevante realmente funciona?

---

# Consumer-Path Probe

Pergunta:

> a função funciona a partir da perspectiva do Consumer?

---

# Invariante de Probe Tipado

Resultados de diferentes tipos de Probe não deverão ser tratados como equivalentes.

---

# Exemplo

    LIVENESS = HEALTHY
    READINESS = HEALTHY
    CONSUMER_PATH = UNAVAILABLE

Isso é possível.

---

# Synthetic Transaction

Uma transação sintética poderá executar caminho funcional controlado.

---

# Exemplo

    LOGIN
        ↓
    SEARCH
        ↓
    CHECKOUT_TEST
        ↓
    VALIDATE_RESULT

---

# Invariante de Sintético Seguro

Testes sintéticos deverão evitar produzir efeitos reais indesejados.

---

# Estratégias

Poderão incluir:

- tenant de teste;
- dados sintéticos;
- transação reversível;
- ambiente controlado.

---

# Heartbeat

Um **Heartbeat** representa sinal periódico de presença ou atividade.

---

# Exemplo

    NODE_12
    HEARTBEAT_EVERY = 30s

---

# Heartbeat Missing

Ausência de heartbeat poderá ser Evidência de problema.

---

# Mas...

não prova necessariamente que o objeto falhou.

---

# Pode Significar

- objeto falhou;
- rede falhou;
- collector falhou;
- fila atrasou;
- relógio divergiu.

---

# Invariante de Ausência como Evidência Indireta

A falta de um sinal esperado deverá ser interpretada como ausência observada...

não automaticamente como causa conhecida.

---

# Expected Signal

Para detectar ausência...

a Plataforma precisa saber que um sinal era esperado.

---

# Invariante Fundamental

Sem expectativa definida...

silêncio é ambíguo.

---

# Expected Signal Policy

Poderá conter:

    SOURCE
    EXPECTED_INTERVAL
    MAX_SILENCE
    SCOPE
    CRITICALITY

---

# Exemplo

    EXPECTED_INTERVAL = 30s
    MAX_SILENCE = 90s

---

# Signal Gap

Quando expectativa é violada:

    SIGNAL_GAP

---

# Invariante de Signal Gap Evidenciável

A Plataforma deverá registrar:

- último sinal;
- duração do silêncio;
- expectativa;
- fonte.

---

# Sensores

Em sistemas físicos, Edge ou IoT...

Observabilidade poderá depender de sensores.

---

# Exemplos

- temperatura;
- pressão;
- vibração;
- corrente;
- tensão;
- posição;
- umidade;
- GPS.

---

# Sensor não é Realidade Perfeita

Sensores podem:

- descalibrar;
- falhar;
- saturar;
- produzir ruído;
- ficar offline.

---

# Invariante de Sensor como Fonte

O valor do sensor deverá ser tratado como Evidência produzida por uma fonte observacional.

---

# Sensor Health

O próprio sensor poderá possuir:

    HEALTH_STATE

---

# Calibration

Poderá existir:

    CALIBRATION_STATUS
    CALIBRATED_AT
    CALIBRATION_EXPIRES_AT

---

# Invariante de Qualidade Metrológica

Quando a medição sustentar decisão relevante...

a condição do instrumento deverá fazer parte da avaliação de confiança.

---

# Consumer Observation

O Consumer é uma fonte observacional importante.

---

# Exemplos

- erro percebido;
- latência;
- falha funcional;
- timeout;
- resultado incorreto.

---

# Invariante de Perspectiva Externa

Um Serviço não deverá ser considerado plenamente compreendido apenas por telemetria interna quando experiência do Consumer for relevante.

---

# Real User Monitoring

Quando aplicável...

poderá observar experiência real.

---

# Mas...

deverá respeitar:

- privacidade;
- consentimento;
- minimização;
- classificação.

---

# Invariante de Observabilidade sem Vigilância Indevida

Necessidade operacional não deverá ser utilizada como justificativa genérica para coleta ilimitada de comportamento humano.

---

# Provider Signals

Providers externos poderão fornecer:

- status;
- métricas;
- Eventos;
- manutenção;
- incidentes;
- quotas.

---

# Invariante de Provider como Fonte Parcial

A declaração do Provider deverá ser preservada como Evidência...

não automaticamente como verdade total da experiência local.

---

# Exemplo

    PROVIDER = HEALTHY
    LOCAL_CONSUMER_PATH = DEGRADED

As duas afirmações podem coexistir.

---

# Human Observation

Operadores também podem produzir Evidência.

---

# Exemplo

    OPERATOR_OBSERVATION =
    "Transactions failing only for region B."

---

# Invariante de Evidência Humana

Observações humanas relevantes deverão poder ser registradas com:

- autor;
- tempo;
- escopo;
- contexto.

---

# Agent Observation

Agentes poderão produzir:

- correlação;
- classificação;
- inferência;
- resumo;
- anomalia.

---

# Mas...

deverão permanecer distinguíveis de sinais brutos.

---

# Invariante Agente ≠ Sensor Primário por Padrão

Uma conclusão de Agente não deverá ser apresentada como se fosse medição original quando ela deriva de outras Evidências.

---

# Exemplo

    RAW_SIGNAL = latency samples
        ↓
    AGENT_ANALYSIS
        ↓
    ASSERTION = unusual latency pattern

---

# Proveniência Observacional

Toda cadeia importante deverá preservar origem.

---

# Fluxo

    SOURCE
        ↓
    SIGNAL
        ↓
    TRANSFORMATION
        ↓
    TELEMETRY
        ↓
    EVIDENCE
        ↓
    ASSERTION

---

# Invariante de Cadeia

Quanto maior a consequência da decisão...

maior deverá ser a capacidade de reconstruir essa cadeia.

---

# Próxima Dimensão

Com os fundamentos de Observabilidade e as principais classes de Sinais estabelecidos...

o próximo lote deverá aprofundar:

- modelo unificado de Telemetria;
- envelopes;
- identidade;
- timestamps;
- atributos;
- Resource Context;
- Service Context;
- Consumer Context;
- Correlation IDs;
- Trace Context;
- schema;
- normalização;
- unidades;
- qualidade;
- Proveniência;
- cardinalidade;
- dimensionalidade;
- enriquecimento;
- transformação;
- pipelines;
- collectors;
- gateways;
- ingestão;
- buffering;
- backpressure;
- perda;
- duplicação;
- ordenação;
- idempotência;
- Edge e operação offline.

---

# Modelo Unificado de Telemetria

Com as principais classes de Sinais estabelecidas...

OPS precisa definir como esses Sinais poderão circular pela Plataforma de maneira:

- compreensível;
- correlacionável;
- auditável;
- interoperável;
- extensível.

Isso exige um:

**Modelo Unificado de Telemetria.**

---

# Propósito

O Modelo Unificado de Telemetria deverá permitir que diferentes fontes produzam informação observacional sem obrigar toda a Plataforma a depender de formatos incompatíveis entre si.

---

# Invariante de Envelope Comum

Métricas, Logs, Traces, Eventos, Probes, Heartbeats e outros Sinais poderão possuir conteúdos diferentes...

mas deverão poder compartilhar um conjunto mínimo de contexto operacional.

---

# Telemetry Envelope

Conceitualmente...

uma unidade de Telemetria poderá possuir:

    TELEMETRY_ID
    TELEMETRY_TYPE
    SOURCE
    OBJECT_ID
    OBSERVED_AT
    RECEIVED_AT
    SCOPE
    ATTRIBUTES
    PROVENANCE
    QUALITY

---

# TELEMETRY_ID

Representa identidade da unidade de Telemetria quando necessário.

---

# TELEMETRY_TYPE

Poderá indicar:

    METRIC
    LOG
    TRACE
    EVENT
    PROBE
    HEARTBEAT
    SENSOR
    SYNTHETIC
    HUMAN_OBSERVATION
    AGENT_OBSERVATION

---

# SOURCE

Representa quem ou o que originou a Telemetria.

---

# OBJECT_ID

Representa objeto ao qual a Telemetria se refere.

---

# Invariante de Referência Operacional

Sempre que possível...

a Telemetria deverá apontar para identidades reconhecíveis do Grafo Operacional.

---

# Exemplo

Em vez de:

    service = "payment-api-prod-01"

poderá existir relação com:

    SERVICE_ID = service://uno/payment/core

e:

    INSTANCE_ID = instance://...

---

# Invariante Nome ≠ Identidade

Labels humanos poderão mudar...

mas identidades canônicas deverão permanecer quando a continuidade exigir.

---

# OBSERVED_AT

Indica quando o fenômeno foi observado.

---

# RECEIVED_AT

Indica quando a Plataforma recebeu o dado.

---

# Invariante Temporal

A Telemetria deverá preservar diferença entre ocorrência, observação e ingestão quando essas diferenças forem operacionalmente relevantes.

---

# Scope

Uma unidade de Telemetria poderá possuir escopo.

---

# Exemplos

    GLOBAL
    REGION
    TENANT
    CONSUMER
    INTERFACE
    VERSION
    INSTANCE

---

# Invariante de Escopo

Telemetria não deverá ser generalizada além do contexto que ela realmente representa.

---

# Resource Context

A Telemetria poderá carregar contexto de Recurso.

---

# Exemplos

    HOST
    CONTAINER
    VM
    DEVICE
    REGION
    ZONE
    CLUSTER

---

# Service Context

Poderá carregar:

    SERVICE_ID
    SERVICE_VERSION
    SERVICE_INSTANCE
    DEPLOYMENT_ENVIRONMENT

---

# Consumer Context

Quando apropriado:

    CONSUMER_ID
    TENANT_ID
    CLIENT_CLASS

---

# Invariante de Minimização de Contexto

Contexto deverá ser suficiente para investigação...

sem coletar informação sensível ou de alta cardinalidade sem necessidade.

---

# Operational Context

Poderá incluir:

    INCIDENT_ID
    CHANGE_ID
    MISSION_ID
    RUNBOOK_ID
    TRANSITION_ID

---

# Invariante de Correlação Contextual

Objetos operacionais relacionados deverão poder compartilhar identificadores quando isso melhorar rastreabilidade.

---

# Correlation ID

Um:

    CORRELATION_ID

poderá relacionar múltiplas unidades de Telemetria associadas à mesma operação ou contexto.

---

# Exemplo

    REQUEST
        ↓
    SERVICE_A_LOG
        ↓
    SERVICE_B_LOG
        ↓
    PROVIDER_EVENT

Todos podem compartilhar:

    CORRELATION_ID = C-8271

---

# Invariante de Correlation ID sem Significado Exagerado

Compartilhar Correlation ID indica relação operacional...

não necessariamente causalidade completa.

---

# Trace Context

Operações distribuídas poderão propagar:

    TRACE_ID
    SPAN_ID

---

# Invariante de Trace Context Limitado

Trace Context deverá conter apenas informação necessária à correlação distribuída.

---

# Baggage

Algumas implementações permitem propagação de atributos adicionais.

---

# Risco

Baggage pode produzir:

- vazamento de dados;
- cardinalidade;
- overhead;
- inconsistência.

---

# Invariante de Baggage Governado

A propagação de contexto adicional deverá possuir política explícita.

---

# Schema

Telemetria estruturada poderá possuir:

    SCHEMA_ID
    SCHEMA_VERSION

---

# Invariante de Schema Versionável

Mudanças de estrutura deverão poder evoluir sem quebrar Consumers.

---

# Backward Compatibility

Uma nova versão poderá preservar campos anteriores.

---

# Breaking Schema Change

Mudanças incompatíveis deverão possuir estratégia de migração.

---

# Invariante de Contrato de Telemetria

Telemetria utilizada por automação crítica deverá ser tratada como contrato operacional.

---

# Semantic Convention

A UNO poderá adotar convenções para nomes e atributos.

---

# Exemplos

    service.name
    service.instance.id
    deployment.environment
    cloud.region
    consumer.id

---

# Invariante de Convenção sem Aprisionamento

Convenções deverão favorecer interoperabilidade...

sem impedir extensões necessárias.

---

# Normalização

Diferentes fontes podem produzir o mesmo conceito em formatos diferentes.

---

# Exemplo

Fonte A:

    latency = 0.4s

Fonte B:

    latency = 400ms

---

# Normalized Representation

Poderá converter ambos para:

    400 ms

---

# Invariante de Normalização Rastreável

O valor original deverá poder ser preservado ou referenciado quando necessário.

---

# Unidade Canônica

A Plataforma poderá definir unidades preferidas para determinadas grandezas.

---

# Exemplos

    duration → milliseconds
    storage → bytes
    rate → units/second

---

# Invariante de Unidade Declarada

A conversão deverá ser explícita e semanticamente correta.

---

# Escala

Algumas métricas podem utilizar:

    0-1

ou:

    0-100%

---

# Invariante de Escala Conhecida

O significado da escala deverá ser documentado.

---

# Enriquecimento

Collectors ou Pipelines poderão adicionar contexto.

---

# Exemplos

Adicionar:

    SERVICE_ID
    OWNER
    REGION
    CRITICALITY

---

# Invariante de Enriquecimento com Proveniência

A Plataforma deverá conseguir distinguir:

- atributo produzido na origem;
- atributo adicionado posteriormente.

---

# Source Attribute

Poderá ser marcado como:

    ORIGIN = SOURCE

---

# Enriched Attribute

Poderá possuir:

    ORIGIN = ENRICHMENT_PIPELINE

---

# Invariante de Não Falsificação de Origem

Atributos enriquecidos não deverão ser apresentados como se tivessem sido emitidos pela fonte original.

---

# Transformação

Pipelines poderão:

- normalizar;
- filtrar;
- agregar;
- redigir;
- enriquecer;
- rotear.

---

# Transformation Record

Poderá conter:

    TRANSFORMATION_ID
    PIPELINE
    VERSION
    APPLIED_AT

---

# Invariante de Transformação Reproduzível

Quando a transformação alterar informação crítica...

deverá ser possível compreender qual regra foi aplicada.

---

# Filtering

Nem todo dado precisa seguir para todos os destinos.

---

# Motivos

- custo;
- privacidade;
- relevância;
- cardinalidade;
- retenção.

---

# Invariante de Filtro Consciente

Descartar Telemetria deverá ser decisão explícita quando puder afetar investigação ou Evidência.

---

# Sampling

Sampling é forma específica de redução de volume.

---

# Exemplo

    KEEP 1% OF SUCCESSFUL_REQUESTS
    KEEP 100% OF ERRORS

---

# Invariante de Sampling Registrável

A política vigente deverá ser conhecida quando ausência de dados puder ser interpretada incorretamente.

---

# Dynamic Sampling

A taxa de sampling poderá aumentar durante Incidente.

---

# Exemplo

    NORMAL = 1%
    INCIDENT = 50%

---

# Invariante de Sampling Adaptativo Governado

Mudanças automáticas de sampling deverão possuir limites de custo e capacidade.

---

# Cardinalidade

Cardinalidade representa quantidade de combinações distintas de dimensões.

---

# Exemplo

Métrica:

    request_count

com dimensão:

    user_id

pode produzir milhões de séries.

---

# Invariante de Cardinalidade Controlada

Identificadores altamente únicos não deverão ser utilizados como dimensão de métrica sem necessidade clara.

---

# High Cardinality Attributes

Exemplos:

    request_id
    trace_id
    user_id
    document_id

---

# Podem ser úteis em Logs ou Traces

Mas perigosos em métricas agregadas.

---

# Invariante de Tipo de Telemetria Apropriado

A mesma informação poderá pertencer a um tipo de Telemetria...

e ser inadequada em outro.

---

# Dimensionalidade

Métricas precisam de dimensões suficientes para análise.

---

# Pouca Dimensionalidade

Pode impedir responder:

> qual região está afetada?

---

# Dimensionalidade Excessiva

Pode explodir custo e complexidade.

---

# Invariante de Dimensionalidade Útil

A escolha de dimensões deverá ser orientada às perguntas operacionais necessárias.

---

# Cardinality Budget

Uma Plataforma poderá definir:

    CARDINALITY_BUDGET

---

# Exemplo

Por Serviço:

    MAX_SERIES = 100000

---

# Invariante de Budget sem Perda Cega

Limites deverão orientar instrumentação...

não simplesmente descartar dados críticos depois da explosão.

---

# Label Explosion

Uma implementação pode gerar dimensões dinamicamente.

---

# Exemplo

    error_message

como label.

---

# Problema

Cada mensagem diferente cria nova série.

---

# Invariante de Campos Livres

Texto livre deverá ser evitado como dimensão de cardinalidade alta.

---

# Telemetry Quality

Telemetria também possui qualidade.

---

# Dimensões Possíveis

    COMPLETENESS
    FRESHNESS
    ACCURACY
    CONSISTENCY
    TIMELINESS
    COVERAGE

---

# Completeness

Os dados esperados estão chegando?

---

# Freshness

Eles são recentes?

---

# Accuracy

A medição parece representar corretamente o fenômeno?

---

# Consistency

Diferentes fontes são coerentes?

---

# Timeliness

O dado chegou a tempo de ser útil?

---

# Coverage

Qual parte do objeto está sendo observada?

---

# Invariante de Qualidade da Telemetria

Estado derivado de Telemetria deverá considerar qualidade das fontes quando necessário.

---

# Telemetry Quality Record

Poderá possuir:

    SOURCE
    QUALITY_DIMENSION
    VALUE
    OBSERVED_AT

---

# Missing Data

Ausência de dado poderá ser:

- esperada;
- falha;
- sampling;
- perda;
- silêncio legítimo.

---

# Invariante de Missing Data Contextual

A ausência deverá ser interpretada conforme expectativa.

---

# Duplicate Telemetry

Pipelines distribuídos podem entregar dado duplicado.

---

# Exemplo

O mesmo Evento chega duas vezes.

---

# Idempotency Key

Poderá existir:

    TELEMETRY_ID

ou:

    EVENT_ID

para deduplicação.

---

# Invariante de Duplicação Possível

Consumers de Telemetria não deverão assumir entrega exatamente uma vez sem garantia real.

---

# At-Least-Once

Alguns pipelines poderão entregar:

    AT_LEAST_ONCE

---

# At-Most-Once

Outros:

    AT_MOST_ONCE

---

# Exactly-Once

Pode ser caro ou não necessário.

---

# Invariante de Semântica de Entrega Conhecida

A interpretação downstream deverá considerar garantia real do transporte.

---

# Ordering

Telemetria pode chegar fora de ordem.

---

# Invariante de Ordenação

Consumers não deverão depender de ordem de ingestão como se fosse ordem real de ocorrência.

---

# Sequence

Quando fonte fornecer:

    SEQUENCE_NUMBER

a reconstrução poderá melhorar.

---

# Mas...

sequência pode ser válida apenas dentro de uma fonte.

---

# Invariante de Escopo da Sequência

Sequence Number não deverá ser tratado como relógio global.

---

# Buffering

Collectors poderão manter buffer temporário.

---

# Objetivos

- sobreviver à falha de rede;
- reduzir perda;
- desacoplar produtor de destino.

---

# Buffer Limit

Entretanto...

buffers são finitos.

---

# Invariante de Capacidade de Buffer Observável

A Plataforma deverá conseguir observar:

    BUFFER_USAGE

---

# Saturação de Buffer

Poderá produzir:

    TELEMETRY_AT_RISK

---

# Backpressure

Quando downstream não consegue acompanhar...

o pipeline poderá aplicar backpressure.

---

# Invariante de Backpressure

A estratégia deverá considerar se é melhor:

- desacelerar;
- descartar;
- amostrar;
- armazenar localmente.

---

# Telemetry Drop

Quando dados forem descartados...

a própria perda deverá ser observável quando possível.

---

# Exemplo

    DROPPED_RECORDS = 18234

---

# Invariante de Perda Visível

Um pipeline não deverá aparentar completude quando sabe que descartou informação.

---

# Drop Reason

Poderá conter:

    BUFFER_FULL
    RATE_LIMIT
    INVALID_SCHEMA
    POLICY_FILTER
    SAMPLING
    STORAGE_FAILURE

---

# Invariante de Motivo de Perda

Diferentes tipos de perda possuem consequências diferentes.

---

# Collector

Um:

**Collector**

recebe ou coleta Telemetria.

---

# Tipos

- local;
- sidecar;
- daemon;
- central;
- Edge;
- federado.

---

# Invariante de Collector como Componente Operacional

Collectors deverão possuir:

- identidade;
- Estado;
- Saúde;
- observabilidade.

---

# Collector Failure

Se o Collector falhar...

o Serviço observado pode continuar saudável.

---

# Resultado

    SERVICE_STATE = UNKNOWN

ou:

    OBSERVABILITY_HEALTH = DEGRADED

---

# Invariante de Observador ≠ Observado

A falha do mecanismo de coleta não deverá ser confundida automaticamente com falha do Serviço.

---

# Gateway de Telemetria

Uma camada poderá receber dados de múltiplas fontes.

---

# Funções

- autenticar;
- normalizar;
- filtrar;
- rotear;
- aplicar política.

---

# Invariante de Gateway não Absoluto

Falha de um Gateway central não deverá necessariamente eliminar toda capacidade observacional se arquitetura permitir caminhos locais.

---

# Telemetry Pipeline

O fluxo poderá ser:

    SOURCE
        ↓
    COLLECTOR
        ↓
    PROCESSOR
        ↓
    GATEWAY
        ↓
    STORAGE
        ↓
    QUERY / ANALYSIS

---

# Invariante de Pipeline Observável

Cada estágio deverá poder reportar sua própria Saúde.

---

# Pipeline Lag

Poderá existir:

    INGESTION_LAG
    PROCESSING_LAG
    EXPORT_LAG

---

# Invariante de Latência da Observabilidade

Telemetria atrasada reduz valor operacional mesmo que não seja perdida.

---

# Pipeline Availability

A Plataforma poderá possuir:

    OBSERVABILITY_PIPELINE_HEALTH

---

# Invariante de Saúde Meta-Observacional

A qualidade do conhecimento operacional depende da saúde do pipeline que o produz.

---

# Edge Telemetry

Em Edge...

conectividade pode ser intermitente.

---

# Local Collection

O Edge poderá armazenar Telemetria localmente.

---

# Store-and-Forward

Quando conectividade retornar...

os dados poderão ser enviados.

---

# Invariante de Tempo Original

Telemetria armazenada offline deverá preservar:

    ORIGINAL_OBSERVED_AT

---

# Evitar

substituir pelo momento de upload.

---

# Offline Buffer

Poderá ter:

    MAX_STORAGE
    RETENTION
    PRIORITY

---

# Invariante de Prioridade Offline

Se armazenamento for limitado...

dados críticos poderão possuir prioridade maior de retenção.

---

# Exemplo

Manter:

- incidentes;
- falhas;
- eventos críticos;

antes de:

- debug detalhado.

---

# Invariante de Política de Descarte Edge

A perda sob restrição deverá ser governada.

---

# Reconnection Upload

Após reconexão...

o Edge poderá enviar backlog.

---

# Risco

Isso pode gerar:

    INGESTION_SPIKE

---

# Invariante de Recuperação sem Sobrecarga

A sincronização após reconexão deverá considerar capacidade do pipeline central.

---

# Backfill

Telemetria histórica poderá ser inserida posteriormente.

---

# Invariante de Backfill Distinguível

Backfill não deverá ser confundido com dado produzido em tempo real.

---

# Backfill Metadata

Poderá existir:

    INGESTION_MODE = BACKFILL

---

# Federated Telemetry

Organizações poderão compartilhar Telemetria.

---

# Mas...

não precisarão compartilhar tudo.

---

# Federated Telemetry Contract

Poderá definir:

    SIGNAL_TYPES
    SCHEMA
    FREQUENCY
    RETENTION
    CLASSIFICATION
    AUTHORIZATION
    QUALITY_EXPECTATION

---

# Invariante de Contrato Observacional Federado

Compartilhamento deverá possuir semântica e limites conhecidos.

---

# Redaction Federada

Antes de atravessar fronteira...

dados poderão ser:

- reduzidos;
- pseudonimizados;
- agregados;
- mascarados.

---

# Invariante de Minimização Federada

A coordenação não deverá exigir exposição de Telemetria interna desnecessária.

---

# Telemetry Classification

Dados observacionais poderão possuir classificação.

---

# Exemplos

    PUBLIC
    INTERNAL
    RESTRICTED
    CONFIDENTIAL

---

# Invariante de Classificação

O pipeline deverá respeitar restrições de movimentação e retenção.

---

# Data Residency

Algumas Telemetrias poderão precisar permanecer em determinada jurisdição.

---

# Invariante de Residência

Observabilidade não deverá ignorar requisitos de localização de dados.

---

# Telemetry Encryption

Dados poderão exigir proteção:

    IN_TRANSIT
    AT_REST

---

# Invariante de Segurança Proporcional

Proteção deverá acompanhar sensibilidade e risco.

---

# Telemetry Access

Nem todos os operadores precisarão ver todos os dados.

---

# Invariante de Least Privilege Observacional

Acesso à Observabilidade também deverá respeitar autoridade.

---

# Query Access

Uma pessoa poderá consultar métricas agregadas...

sem acessar logs com dados sensíveis.

---

# Invariante de Visibilidade por Tipo

Permissão poderá variar por:

- fonte;
- Serviço;
- tenant;
- campo;
- classificação.

---

# Telemetry Retention

Tipos diferentes poderão possuir retenções diferentes.

---

# Exemplo

    METRICS = 13 MONTHS
    LOGS = 90 DAYS
    TRACES = 30 DAYS
    CRITICAL_EVENTS = 7 YEARS

---

# Invariante de Retenção Contextual

Retenção deverá considerar:

- custo;
- investigação;
- compliance;
- contratos;
- valor histórico.

---

# Tiered Storage

Dados recentes poderão permanecer em armazenamento rápido.

Dados antigos...

em armazenamento mais econômico.

---

# Invariante de Recuperabilidade

Mover dados para camada fria não deverá torná-los irrecuperáveis quando retenção promete disponibilidade.

---

# Telemetry Compression

Compressão poderá reduzir custo.

---

# Invariante de Compressão Semântica

Transformações não deverão alterar significado da medição.

---

# Aggregation

Dados detalhados poderão ser agregados.

---

# Exemplo

De:

    1-second samples

para:

    1-minute aggregates

---

# Invariante Raw ↔ Aggregate

Agregado deverá ser distinguível do dado bruto.

---

# Downsampling

Histórico antigo poderá ter menor resolução.

---

# Invariante de Resolução Temporal

Queries históricas deverão conhecer granularidade disponível.

---

# Telemetry Cost

Observabilidade possui custo.

---

# Pode Consumir

- CPU;
- rede;
- armazenamento;
- licenças;
- operação.

---

# Invariante de Custo Observacional

A Plataforma deverá buscar equilíbrio entre:

    INFORMATION_VALUE

e:

    COLLECTION_COST

---

# Telemetry Budget

Poderá existir:

    TELEMETRY_BUDGET

---

# Mas...

cortar custo cegamente pode reduzir detectabilidade.

---

# Invariante de Otimização Orientada ao Risco

Reduções de Telemetria deverão considerar Criticidade e valor investigativo.

---

# Observability Debt

Um Serviço pode possuir lacunas conhecidas de instrumentação.

---

# Exemplos

- sem tracing;
- sem Consumer probe;
- logs não estruturados;
- métricas incompletas.

---

# Poderá existir:

    OBSERVABILITY_DEBT

---

# Invariante de Dívida Visível

Lacunas observacionais críticas deverão poder ser registradas e priorizadas.

---

# Telemetry Contract por Serviço

Cada Serviço poderá declarar quais Sinais precisa produzir.

---

# Exemplo

    REQUIRED_METRICS
    REQUIRED_LOG_EVENTS
    REQUIRED_PROBES
    REQUIRED_TRACE_COVERAGE

---

# Invariante de Observabilidade por Design

Serviços não deverão depender exclusivamente de instrumentação adicionada depois do primeiro Incidente.

---

# Instrumentation

Instrumentação é o mecanismo que produz Telemetria.

---

# Pode ser:

    MANUAL
    AUTOMATIC
    AGENT_BASED
    INFRASTRUCTURE_LEVEL

---

# Invariante Instrumentação ≠ Observabilidade

Ter biblioteca instrumentada não garante que as perguntas operacionais relevantes possam ser respondidas.

---

# Auto-Instrumentation

Poderá acelerar cobertura.

---

# Mas...

pode não compreender semântica de negócio.

---

# Invariante de Auto-Instrumentação Limitada

Instrumentação automática deverá ser complementada por Sinais funcionais quando necessário.

---

# Domain Telemetry

Algumas métricas precisam representar função do Serviço.

---

# Exemplos

    ORDERS_COMPLETED
    PAYMENTS_CONFIRMED
    DOCUMENTS_VALIDATED
    MESSAGES_DELIVERED

---

# Invariante de Telemetria Funcional

Observabilidade madura deverá incluir sinais da função entregue...

não apenas sinais de infraestrutura.

---

# Business Signal

Um sinal funcional poderá ser relevante para operação...

sem transformar OPS em sistema de BI.

---

# Invariante OPS ↔ Analytics

A Observabilidade operacional deverá focar aquilo que ajuda a compreender entrega e risco operacional.

---

# Correlation across Telemetry Types

Uma investigação poderá correlacionar:

    METRIC_SPIKE
    +
    TRACE_LATENCY
    +
    ERROR_LOG
    +
    CHANGE_EVENT

---

# Invariante de Correlação Multimodal

A Plataforma deverá favorecer navegação entre tipos de Telemetria.

---

# Exemplos

De uma métrica...

abrir traces relacionados.

De um Trace...

ver logs do mesmo Span.

De um Evento...

ver mudança associada.

---

# Invariante de Contexto Compartilhado

Correlação deverá utilizar identidades e tempos consistentes quando possível.

---

# Telemetry Query Model

OPS poderá permitir consultas por:

- objeto;
- tempo;
- escopo;
- Consumer;
- tipo de sinal;
- correlação;
- Evento.

---

# Exemplo

> mostre erros do Serviço X na região B entre 14:00 e 14:10 relacionados ao Change Y.

---

# Invariante de Consulta Contextual

A arquitetura de Telemetria deverá permitir perguntas compostas sem exigir conhecimento de cada backend específico.

---

# Abstraction Layer

A UNO poderá fornecer camada conceitual acima de múltiplos stores.

---

# Invariante de Backend Substituível

O modelo de Observabilidade não deverá depender permanentemente de uma ferramenta única.

---

# Telemetry Federation across Tools

Métricas podem estar em um backend.

Logs em outro.

Traces em outro.

---

# Invariante de Experiência Integrada

A Plataforma deverá buscar correlação lógica mesmo quando armazenamento físico for distribuído.

---

# Próxima Dimensão

Com o modelo unificado de Telemetria, pipelines, qualidade, cardinalidade, Edge e Federação estabelecidos...

o próximo lote deverá aprofundar:

- SLIs;
- SLOs;
- indicadores de disponibilidade;
- latência;
- throughput;
- qualidade;
- Freshness;
- durabilidade;
- Consumer experience;
- SLO windows;
- rolling windows;
- calendar windows;
- Error Budget;
- burn rate;
- multi-window alerting;
- objetivos por Consumer;
- objetivos por Missão;
- dependências;
- SLO composto;
- SLO federado;
- objetivos internos versus contratos externos.

---

# SLIs, SLOs e Error Budgets

Com o modelo unificado de Telemetria estabelecido...

OPS passa a possuir matéria-prima suficiente para medir aquilo que realmente importa para a entrega de um Serviço.

Mas medir tudo...

não significa medir o que importa.

Por isso...

a Observabilidade deverá distinguir:

- sinais disponíveis;
- indicadores relevantes;
- objetivos operacionais;
- compromissos externos.

---

# SLI

Um:

**Service Level Indicator**

representa indicador utilizado para medir alguma propriedade relevante da entrega de um Serviço.

---

# Pergunta Fundamental

> Qual medida representa adequadamente esta propriedade operacional?

---

# Exemplos

Um SLI poderá medir:

    AVAILABILITY
    LATENCY
    ERROR_RATE
    THROUGHPUT
    FRESHNESS
    DURABILITY
    CORRECTNESS
    COMPLETION_RATE

---

# Invariante de SLI Funcional

Um SLI deverá medir propriedade significativa da função entregue...

não apenas aquilo que é fácil de coletar.

---

# Exemplo Fraco

    PROCESS_UP = TRUE

---

# Exemplo Melhor

    SUCCESSFUL_VALID_REQUESTS
    -------------------------
    TOTAL_VALID_REQUESTS

---

# Por quê

O Consumer não depende da existência do processo.

Depende da função.

---

# Invariante de Consumer-Relevance

Quando possível...

SLIs deverão aproximar-se da experiência real do Consumer.

---

# SLI Record

Poderá conter:

    SLI_ID
    SERVICE_ID
    PROPERTY
    DEFINITION
    DATA_SOURCE
    NUMERATOR
    DENOMINATOR
    UNIT
    SCOPE
    WINDOW
    EXCLUSIONS
    VERSION

---

# Definição

Um SLI deverá possuir semântica explícita.

---

# Exemplo

    AVAILABILITY_SLI

pode ser definido como:

    SUCCESSFUL_ELIGIBLE_REQUESTS
    ----------------------------
    TOTAL_ELIGIBLE_REQUESTS

---

# Invariante de Denominador

O denominador deverá refletir população relevante.

---

# Exemplo

Se requisições inválidas forem responsabilidade do Consumer...

talvez não devam contar como indisponibilidade do Serviço.

---

# Mas...

essa exclusão deverá ser formal.

---

# Invariante de Exclusões Governadas

A Plataforma não deverá excluir falhas apenas para melhorar artificialmente o indicador.

---

# Good Event

Alguns SLIs poderão ser definidos como proporção de eventos bons.

---

# Exemplo

Uma requisição é boa quando:

    RESPONSE_SUCCESS = TRUE
    AND
    LATENCY <= 500ms

---

# Good Event Definition

Poderá existir:

    GOOD_EVENT_CRITERIA

---

# Invariante de Bom Evento Explicitável

O critério deverá ser estável e versionável.

---

# Bad Event

Também poderá existir:

    BAD_EVENT_CRITERIA

---

# Exemplo

    TIMEOUT
    ERROR_5XX
    INVALID_RESULT

---

# Invariante de Classificação Determinística quando Possível

A categorização de eventos deverá ser reproduzível.

---

# SLI de Disponibilidade

Disponibilidade responde:

> a função esteve utilizável quando foi necessária?

---

# Request-Based Availability

Poderá medir proporção de requisições bem-sucedidas.

---

# Time-Based Availability

Poderá medir proporção de tempo dentro de condição aceitável.

---

# Invariante de Modelo Adequado

A escolha entre request-based e time-based deverá refletir natureza do Serviço.

---

# Exemplo

Serviço transacional de alta demanda:

    REQUEST_BASED

pode ser mais representativo.

---

# Outro Exemplo

Sistema com uso raro mas essencial:

    TIME_BASED

pode ser mais apropriado.

---

# Invariante de Uso Real

A ausência de requisições não deverá automaticamente significar disponibilidade perfeita.

---

# Synthetic Availability

Quando tráfego real for insuficiente...

probes sintéticos poderão complementar medição.

---

# Invariante Sintético ≠ Real

A medição sintética deverá permanecer distinguível da experiência real de Consumer.

---

# SLI de Latência

Latência representa tempo necessário para completar determinada função.

---

# Invariante de Distribuição

Latência deverá preferir distribuições ou percentis quando média esconder comportamento relevante.

---

# Exemplo

    P50 = 120ms
    P95 = 400ms
    P99 = 3.8s

---

# Latency Good Event

Uma operação poderá ser considerada boa se:

    LATENCY <= THRESHOLD

---

# Exemplo

    LATENCY <= 500ms

---

# Invariante de Threshold Contextual

O limite deverá refletir necessidade funcional ou contrato.

---

# Latência por Consumer

Diferentes Consumers podem possuir expectativas distintas.

---

# Exemplo

    STANDARD = 1s
    PREMIUM = 300ms

---

# Invariante de SLI Escopado

Um SLI poderá possuir escopo por:

- Consumer;
- Oferta;
- região;
- interface;
- operação.

---

# SLI de Error Rate

Poderá medir:

    ERRORS
    ------
    TOTAL_OPERATIONS

---

# Invariante de Taxonomia de Erro

Nem todo erro deverá possuir o mesmo significado.

---

# Exemplo

Erros podem ser:

    CLIENT_ERROR
    SERVICE_ERROR
    DEPENDENCY_ERROR
    POLICY_REJECTION
    TIMEOUT

---

# Invariante de Erro Atribuível

Quando necessário...

a métrica deverá diferenciar falha do Serviço de comportamento esperado de rejeição.

---

# SLI de Throughput

Throughput representa volume de trabalho processado por unidade de tempo.

---

# Exemplo

    TRANSACTIONS_PER_SECOND

---

# Mas...

alto throughput sozinho não significa qualidade.

---

# Invariante de Throughput com Qualidade

Volume deverá ser interpretado junto de:

- erro;
- latência;
- capacidade;
- backlog.

---

# SLI de Freshness

Para funções dependentes de dados atualizados...

Freshness pode ser propriedade central.

---

# Exemplo

    CURRENT_TIME - LAST_VALID_DATA_TIMESTAMP

---

# Good Freshness

    DATA_AGE <= 5m

---

# Invariante de Freshness Funcional

Um Serviço tecnicamente disponível poderá violar seu objetivo se fornecer dados antigos demais.

---

# SLI de Durabilidade

Durabilidade responde:

> informação aceita pelo Serviço permaneceu preservada conforme expectativa?

---

# Exemplos

    DATA_LOSS_EVENTS
    SUCCESSFULLY_DURABLE_WRITES
    RESTORABLE_OBJECT_RATIO

---

# Invariante de Durabilidade Evidenciável

A ausência de perda observada não deverá ser tratada automaticamente como prova absoluta de durabilidade.

---

# Testes de Restore

Poderão fornecer Evidência complementar.

---

# SLI de Correção

Alguns Serviços precisam medir:

> o resultado produzido está correto?

---

# Exemplos

- classificação correta;
- cálculo válido;
- documento íntegro;
- transação consistente.

---

# Invariante de Correção Amostrada

Quando validação integral for inviável...

a Plataforma poderá utilizar amostragem ou verificações independentes.

---

# SLI de Completion

Workflows poderão medir:

    COMPLETED_SUCCESSFULLY
    ----------------------
    STARTED_ELIGIBLE

---

# Invariante de Jornada Completa

Para algumas funções...

medir cada componente isoladamente não será suficiente.

---

# Journey SLI

Uma jornada poderá atravessar múltiplos Serviços.

---

# Exemplo

    LOGIN
        ↓
    SEARCH
        ↓
    PURCHASE
        ↓
    CONFIRMATION

---

# Invariante de SLI End-to-End

Quando a promessa ao Consumer for jornada completa...

o indicador deverá poder refletir essa jornada.

---

# SLO

Um:

**Service Level Objective**

representa objetivo definido para um ou mais SLIs.

---

# Pergunta Fundamental

> Qual nível de desempenho ou confiabilidade pretendemos sustentar?

---

# Exemplo

    99.95% OF ELIGIBLE_REQUESTS
    SHALL BE SUCCESSFUL
    OVER 30 DAYS

---

# Estrutura Conceitual

Poderá conter:

    SLO_ID
    SERVICE_ID
    SLI_ID
    TARGET
    WINDOW
    SCOPE
    EFFECTIVE_FROM
    EFFECTIVE_TO
    OWNER
    POLICY

---

# Invariante SLI ↔ SLO

SLI mede.

SLO estabelece objetivo.

---

# Exemplo

    SLI = AVAILABILITY

    SLO = 99.9%

---

# Invariante de Objetivo Mensurável

Um SLO deverá ser mensurável através de Telemetria suficientemente confiável.

---

# Anti-Padrão

Definir:

    SLO = "ALWAYS FAST"

---

# Problema

Não existe critério mensurável.

---

# SLO Window

Todo SLO deverá possuir janela temporal.

---

# Exemplos

    7 DAYS
    28 DAYS
    30 DAYS
    CALENDAR_MONTH

---

# Invariante de Janela Explícita

    99.9%

sem janela...

é incompleto.

---

# Rolling Window

Uma janela móvel acompanha período imediatamente anterior.

---

# Exemplo

    LAST_30_DAYS

---

# Calendar Window

Uma janela pode seguir calendário.

---

# Exemplo

    CALENDAR_MONTH

---

# Invariante Rolling ↔ Calendar

Essas duas formas possuem comportamentos diferentes e deverão permanecer distinguíveis.

---

# Exemplo

Uma falha no último dia do mês pode:

- desaparecer rapidamente da janela de calendário no mês seguinte;
- permanecer por 30 dias numa rolling window.

---

# SLO Target

Poderá ser:

    >= 99.9%

ou:

    <= 500ms FOR 95% OF REQUESTS

---

# Multi-Objective SLO

Um Serviço poderá possuir vários objetivos.

---

# Exemplo

    AVAILABILITY >= 99.95%
    LATENCY_P95 <= 300ms
    FRESHNESS <= 5m

---

# Invariante de Objetivos Independentes

Cumprir disponibilidade não deverá compensar automaticamente violação de Freshness.

---

# SLO Profile

Diferentes classes de Consumer poderão possuir objetivos distintos.

---

# Exemplo

    STANDARD
    CRITICAL
    MISSION_CRITICAL

---

# Invariante de Perfil Escopado

O perfil deverá estar associado ao contrato correto.

---

# SLO Interno

A organização poderá estabelecer objetivo interno mais rigoroso que compromisso externo.

---

# Exemplo

Externo:

    99.9%

Interno:

    99.95%

---

# Invariante de Margem Operacional

Objetivos internos poderão fornecer margem antes de violar contrato externo.

---

# External SLA

Um SLA poderá formalizar compromisso contratual.

---

# Distinção

    SLI = INDICADOR

    SLO = OBJETIVO

    SLA = COMPROMISSO CONTRATUAL

---

# Invariante SLO ≠ SLA

Nem todo SLO deverá possuir consequência comercial.

---

# Exemplo

Serviço interno pode possuir SLO sem SLA.

---

# SLA Pode Incluir

- objetivo;
- penalidade;
- suporte;
- horário;
- exclusões;
- obrigação.

---

# Invariante de Contrato Externo Separado

A camada operacional deverá sustentar compromissos externos...

sem fundir contrato jurídico com definição técnica.

---

# SLO por Consumer

Um Serviço compartilhado poderá possuir objetivos distintos.

---

# Exemplo

    CONSUMER_A = 99.9%
    CONSUMER_B = 99.99%

---

# Invariante de Medição Escopada

A Plataforma deverá conseguir medir cada compromisso no escopo correto.

---

# SLO por Região

Também poderá existir:

    REGION_A
    REGION_B

---

# SLO Global

Um objetivo global poderá coexistir.

---

# Invariante de Agregação SLO

Cumprimento global não deverá apagar violação localizada quando contrato exige escopo regional.

---

# SLO por Missão

Uma Missão crítica poderá exigir temporariamente objetivo operacional distinto.

---

# Exemplo

Durante Missão:

    AVAILABILITY_TARGET = 99.99%
    CAPACITY_RESERVE = HIGH

---

# Mas...

isso deverá ser governado.

---

# Invariante de Objetivo Missional

Uma Missão poderá alterar prioridade ou objetivo operacional...

sem redefinir permanentemente contrato-base do Serviço.

---

# Mission Overlay

Poderá existir:

    MISSION_SLO_OVERLAY

---

# Invariante de Overlay Temporal

O objetivo extraordinário deverá possuir validade.

---

# SLO Composto

Um Serviço composto depende de vários Serviços.

---

# Pergunta

Como determinar objetivo do composto?

---

# Não Basta

somar ou tirar média dos SLOs individuais.

---

# Exemplo

Serviço A:

    99.9%

Serviço B:

    99.9%

Se ambos forem necessários em série...

a disponibilidade composta poderá ser inferior.

---

# Invariante de Composição Matemática Correta

A derivação deverá considerar arquitetura e independência real das falhas.

---

# Dependências em Série

Todas são necessárias.

---

# Dependências Paralelas

Qualquer uma pode fornecer a função.

---

# Invariante de Topologia

A composição de SLO deverá considerar:

- série;
- paralelo;
- fallback;
- quorum;
- compartilhamento de Failure Domain.

---

# SLO de Dependência

Um Serviço poderá exigir de Provider:

    DEPENDENCY_SLO

---

# Exemplo

    PROVIDER_AVAILABILITY >= 99.99%

---

# Mas...

o SLO do Provider não é automaticamente o SLO do Consumer.

---

# Invariante de Margem entre Camadas

Um Serviço poderá precisar de dependências mais confiáveis do que seu próprio compromisso...

especialmente quando várias dependências se combinam.

---

# SLO Federado

Em Federação...

uma organização poderá consumir Serviço externo com objetivo declarado.

---

# Federated SLO Record

Poderá incluir:

    SOURCE_ORG
    SERVICE
    SLI_DEFINITION
    TARGET
    WINDOW
    SCOPE
    EVIDENCE_ACCESS

---

# Invariante de Definição Compartilhada

Duas organizações não deverão assumir que:

    99.9%

significa a mesma coisa se seus SLIs e exclusões forem diferentes.

---

# SLO Semântico Federado

A Federação deverá compartilhar:

- indicador;
- denominador;
- janela;
- exclusões;
- escopo.

---

# Invariante de SLO Interpretável

Um número isolado não deverá ser suficiente para interoperabilidade contratual.

---

# Error Budget

Quando SLO permite alguma quantidade de falha...

essa margem poderá ser representada por:

**Error Budget.**

---

# Exemplo

SLO:

    99.9%

Permite aproximadamente:

    0.1%

de eventos não bons dentro da janela.

---

# Invariante de Error Budget Derivado

Error Budget deverá derivar de definição do SLO...

não ser número independente sem relação.

---

# Error Budget Conceitual

    ALLOWED_BAD
    =
    TOTAL_ELIGIBLE
    -
    REQUIRED_GOOD

---

# Para Time-Based SLO

Pode ser representado em duração.

---

# Exemplo

30 dias possuem aproximadamente:

    43,200 minutos

Com:

    99.9%

o orçamento teórico é aproximadamente:

    43.2 minutos

---

# Mas...

o cálculo exato deverá considerar definição e janela real.

---

# Invariante de Cálculo Consistente

A Plataforma deverá utilizar o mesmo modelo de elegibilidade do SLI para calcular Error Budget.

---

# Consumo de Error Budget

Falhas consomem orçamento.

---

# Exemplo

    ERROR_BUDGET_REMAINING = 65%

---

# Invariante de Budget Temporal

O valor depende da janela.

---

# Budget Burn

Representa velocidade de consumo.

---

# Burn Rate

Conceitualmente:

> quão rápido o orçamento está sendo consumido em relação ao ritmo sustentável?

---

# Exemplo

    BURN_RATE = 1

indica consumo aproximadamente compatível com gastar orçamento ao longo de toda janela.

---

# Burn Rate Elevado

    BURN_RATE = 10

indica consumo muito mais rápido.

---

# Invariante de Burn Rate Contextual

A interpretação deverá considerar janela curta e longa.

---

# Multi-Window Burn Rate

A Plataforma poderá observar simultaneamente:

    SHORT_WINDOW
    LONG_WINDOW

---

# Exemplo

    5m
    1h

ou:

    1h
    6h

---

# Propósito

Distinguir:

- falha intensa recente;
- degradação persistente.

---

# Invariante de Alerta Baseado em Consumo

Alertas de SLO poderão considerar Burn Rate em vez de thresholds isolados.

---

# Exemplo Conceitual

Uma taxa de erro de:

    2%

pode ser crítica para SLO de:

    99.99%

e pouco relevante para outro objetivo.

---

# Invariante de Alerta Contextual ao Objetivo

O mesmo sinal deverá possuir significado diferente conforme Error Budget disponível.

---

# Error Budget Policy

A organização poderá definir ações conforme consumo.

---

# Exemplo

    BUDGET > 75%
    NORMAL_CHANGE_POLICY

    BUDGET 25%-75%
    ELEVATED_REVIEW

    BUDGET < 25%
    CHANGE_RESTRICTION

    BUDGET EXHAUSTED
    RELIABILITY_PRIORITY

---

# Invariante de Budget como Instrumento de Governança

Error Budget poderá orientar decisões...

mas não deverá substituir julgamento contextual.

---

# Budget Exhaustion

Quando orçamento acaba:

    ERROR_BUDGET_REMAINING = 0

---

# Isso não Significa Automaticamente

    SERVICE = UNAVAILABLE

---

# Pode Significar

O Serviço violou ou está prestes a violar seu objetivo dentro da janela.

---

# Invariante SLO State ≠ Service Health

Um Serviço poderá estar saudável agora...

mas já ter violado SLO mensal.

---

# Exemplo

    HEALTH_STATE = SAUDAVEL
    SLO_STATE = VIOLATED

---

# Outro Exemplo

    HEALTH_STATE = DEGRADADO
    SLO_STATE = COMPLIANT

porque a degradação foi breve.

---

# Invariante de Presente ↔ Histórico

Health descreve condição atual.

SLO Compliance descreve desempenho ao longo da janela.

---

# SLO State

Poderá ser:

    COMPLIANT
    AT_RISK
    VIOLATED
    UNKNOWN

---

# Invariante de Unknown

Se Telemetria suficiente não existir...

OPS deverá poder declarar:

    SLO_STATE = UNKNOWN

---

# Não Assumir Compliance

Ausência de medição não deverá significar:

    COMPLIANT

---

# Error Budget e Mudança

A política de Change poderá consultar orçamento.

---

# Exemplo

Se Budget está saudável...

maior espaço para inovação.

Se Budget está esgotado...

priorizar confiabilidade.

---

# Invariante de Equilíbrio Evolução ↔ Confiabilidade

Error Budget poderá ajudar a equilibrar velocidade de mudança e estabilidade.

---

# Mas...

não deverá ser utilizado como licença para causar falhas deliberadamente.

---

# Invariante de Budget não como Meta de Gastar

Orçamento disponível não significa:

> devemos consumi-lo.

---

# Budget por Consumer

Diferentes Consumers poderão possuir orçamentos distintos.

---

# Invariante de Isolamento de SLO

Falhas de um tenant não deverão necessariamente consumir orçamento de outro se contratos forem independentes.

---

# SLO e Multi-Tenancy

Um SLI global pode esconder impacto concentrado.

---

# Exemplo

99.99% global...

mas Consumer crítico possui:

    90%

---

# Invariante de Fairness Observacional

SLIs agregados deverão ser complementados por escopos capazes de revelar impacto concentrado quando necessário.

---

# SLO de Capacidade

Alguns objetivos poderão representar capacidade.

---

# Exemplo

    HEADROOM >= 30%

---

# Mas...

isso pode ser melhor tratado como objetivo operacional interno...

não necessariamente SLO de Consumer.

---

# Invariante de Terminologia Funcional

Nem todo threshold operacional deverá ser chamado de SLO.

---

# Operational Objective

Poderá existir categoria mais ampla:

    OPERATIONAL_OBJECTIVE

---

# SLO deverá ser reservado...

quando fizer sentido representar nível de Serviço mensurável.

---

# SLO de Recovery

Algumas propriedades de recuperação podem possuir objetivos.

---

# Exemplos

    RTO <= 2h
    RPO <= 5m

---

# Mas...

RTO e RPO possuem semântica própria e serão aprofundados em Recuperação e Continuidade.

---

# Invariante de Especialização sem Duplicação

O V08 deverá reutilizar esses conceitos...

sem redefini-los de forma concorrente em arquivos posteriores.

---

# SLO de Observabilidade

A própria Observabilidade poderá possuir objetivos.

---

# Exemplos

    TELEMETRY_INGESTION_LAG <= 30s
    CRITICAL_SIGNAL_COVERAGE >= 99%

---

# Invariante de Meta-Observabilidade

A capacidade de medir Serviços também deverá possuir objetivos de qualidade.

---

# SLO de Detecção

Poderá existir objetivo como:

    DETECT_CRITICAL_FAILURE_WITHIN = 2m

---

# Mas...

isso pode ser classificado como objetivo operacional específico de Observabilidade.

---

# Invariante de Medição do Detector

A qualidade do mecanismo de detecção deverá poder ser avaliada.

---

# False Positive

Um Alerta pode ocorrer sem condição real relevante.

---

# False Negative

Uma condição real pode ocorrer sem detecção.

---

# Invariante de Qualidade de Detecção

Observabilidade madura deverá considerar:

- sensibilidade;
- precisão;
- cobertura;
- ruído.

---

# SLI de Observability Coverage

Poderá representar:

> qual proporção de Serviços críticos possui sinais mínimos necessários?

---

# Exemplo

    SERVICES_WITH_REQUIRED_OBSERVABILITY
    ------------------------------------
    TOTAL_CRITICAL_SERVICES

---

# Invariante de Cobertura sem Falsa Segurança

Ter instrumentação registrada não prova que ela funciona.

---

# Probe de Observabilidade

Poderá verificar o próprio pipeline.

---

# SLO e Estado

O cálculo de SLO poderá produzir Assertions.

---

# Exemplo

    ASSERTION_TYPE = DERIVED
    SLO_STATE = AT_RISK

---

# Invariante de SLO como Evidência Derivada

Compliance deverá apontar para:

- SLI;
- janela;
- dados;
- política.

---

# SLO e Agentes

Agentes poderão:

- sugerir SLIs;
- detectar objetivos mal definidos;
- identificar sinais insuficientes;
- explicar Budget Burn;
- comparar Consumers.

---

# Mas...

não deverão alterar objetivos críticos sem autoridade.

---

# Invariante de SLO Governado

    AGENT_RECOMMENDATION ≠ SLO_CHANGE

---

# SLO Design

Definir SLO poderá envolver:

- Owner;
- OPS;
- Consumer;
- Produto;
- Engenharia;
- contrato.

---

# Invariante de Objetivo Negociado

SLO deverá representar equilíbrio entre:

- necessidade;
- custo;
- arquitetura;
- Criticidade;
- capacidade.

---

# SLO Irreal

Um objetivo pode ser tecnicamente impossível ou economicamente desproporcional.

---

# Exemplo

    100.000% AVAILABILITY

---

# Invariante de Objetivo Realizável

SLO deverá considerar realidade física e arquitetural.

---

# 100% como Anti-Padrão

Buscar 100% absoluto pode:

- impedir mudanças;
- aumentar custo desproporcional;
- ainda não garantir ausência total de falha.

---

# Invariante de Margem Reconhecida

Quando apropriado...

a Engenharia deverá definir explicitamente tolerância.

---

# SLO e Custo

Maior confiabilidade geralmente exige mais:

- redundância;
- capacidade;
- operação;
- Providers;
- testes.

---

# Invariante de Objetivo Econômico

O nível de Serviço deverá ser compatível com valor e Criticidade.

---

# SLO e Dependência

Um Serviço pode não conseguir cumprir objetivo superior ao que sua arquitetura permite.

---

# Exemplo

Provider único com:

    99.9%

dificulta prometer:

    99.99%

sem mecanismos adicionais.

---

# Invariante de Promessa Sustentável

Objetivos deverão possuir suporte arquitetural plausível.

---

# SLO e Readiness

Antes de ativação...

um Serviço Candidato poderá demonstrar capacidade de medir e cumprir SLO.

---

# Readiness Gate

Poderá exigir:

    SLI_DEFINED = TRUE
    TELEMETRY_AVAILABLE = TRUE
    TARGET_VALIDATED = TRUE

---

# Invariante de SLO Operável

Um objetivo não deverá existir apenas em documento...

sem mecanismo de medição.

---

# SLO e Depreciação

Serviços depreciados poderão manter compromissos para Consumers existentes.

---

# Invariante de Lifecycle ↔ Compromisso

Depreciação não encerra automaticamente SLO vigente.

---

# SLO e Descontinuação

Durante retirada...

o objetivo poderá mudar conforme contrato e plano.

---

# Mas...

qualquer mudança deverá ser explícita.

---

# Invariante de Não Redução Silenciosa

A Plataforma não deverá reduzir objetivo apenas porque o Serviço está sendo retirado.

---

# SLO e Federação

A organização consumidora poderá medir seu próprio SLI...

mesmo quando Provider publica outro.

---

# Exemplo

Provider:

    AVAILABILITY = 99.99%

UNO Consumer Path:

    AVAILABILITY = 99.5%

---

# Invariante de Perspectivas Federadas

Ambos deverão poder coexistir com Proveniência e escopo.

---

# Federated Dispute

Uma divergência de SLA poderá exigir:

- Evidence Bundle;
- período;
- definição;
- escopo.

---

# Invariante de Auditabilidade Contratual

Compromissos externos deverão possuir Evidência suficiente para resolução de disputa quando aplicável.

---

# SLO Evidence Bundle

Poderá conter:

    SLO_DEFINITION
    SLI_DEFINITION
    WINDOW
    RAW_REFERENCES
    AGGREGATES
    EXCLUSIONS
    RESULT
    POLICY_VERSION

---

# Invariante de Reprodutibilidade

Quando necessário...

deverá ser possível recalcular resultado histórico.

---

# SLO Versioning

Objetivos poderão mudar.

---

# Exemplo

    SLO_V1 = 99.9%
    SLO_V2 = 99.95%

---

# Invariante de Vigência Temporal

Medição histórica deverá utilizar objetivo vigente naquele período.

---

# Não Aplicar Objetivo Atual ao Passado

A menos que a análise seja explicitamente contrafactual.

---

# Invariante de Temporalidade do Contrato

SLO deverá possuir:

    EFFECTIVE_FROM
    EFFECTIVE_TO

---

# Service Level Profile

Um Serviço poderá agrupar:

- SLIs;
- SLOs;
- Error Budgets;
- scopes.

---

# Poderá existir:

    SERVICE_LEVEL_PROFILE

---

# Exemplo

    PROFILE = MISSION_CRITICAL

    AVAILABILITY = 99.99%
    LATENCY_P95 = 250ms
    RECOVERY_TARGET = 15m

---

# Invariante de Perfil sem Ocultar Componentes

O perfil deverá ser projeção conveniente...

não substituir definições individuais.

---

# SLO Dashboard

Interfaces poderão mostrar:

    CURRENT_COMPLIANCE
    ERROR_BUDGET_REMAINING
    BURN_RATE
    TREND

---

# Mas...

o dashboard não deverá ser fonte canônica única.

---

# Invariante Dashboard ≠ Evidence Store

Visualização é projeção.

A Evidência deverá permanecer acessível em camada apropriada.

---

# Alerting from SLO

Alertas poderão considerar:

- Budget Burn;
- risco de violação;
- violação confirmada.

---

# Exemplo

    FAST_BURN_ALERT

    SLOW_BURN_ALERT

---

# Invariante de Alertas Diferenciados

Uma falha intensa e uma degradação lenta poderão exigir respostas distintas.

---

# Alertas de Fast Burn

Podem exigir ação imediata.

---

# Slow Burn

Pode indicar problema estrutural.

---

# Invariante de Burn como Tendência

O Alert deverá informar consumo do orçamento...

não apenas valor bruto do sinal.

---

# SLO e Capacity Planning

Tendências de SLO podem revelar necessidade de capacidade.

---

# Exemplo

Latência piora apenas durante pico.

---

# Pode indicar:

    CAPACITY_GAP

---

# Invariante de SLO como Sinal de Planejamento

Violação recorrente deverá alimentar Planejamento de Capacidade e Problem Management.

---

# SLO e Service Factory

Uma necessidade nova pode incluir objetivo explícito.

---

# Exemplo

Consumer solicita:

> preciso de Serviço com 99.99% de disponibilidade e operação offline por 8 horas.

---

# Isso Influencia Design

- redundância;
- armazenamento;
- Provider;
- Edge;
- custo.

---

# Invariante de Objetivo desde o Design

SLOs críticos deverão influenciar arquitetura...

não ser adicionados apenas após implementação.

---

# Relação Conceitual

    CONSUMER_NEED
        ↓
    SERVICE_REQUIREMENT
        ↓
    SLI
        ↓
    SLO
        ↓
    ARCHITECTURE
        ↓
    TELEMETRY
        ↓
    EVIDENCE
        ↓
    COMPLIANCE

---

# Invariante de Ciclo Fechado

Um objetivo deverá conectar necessidade, arquitetura, medição e operação.

---

# Próxima Dimensão

Com SLIs, SLOs e Error Budgets estabelecidos...

o próximo lote deverá aprofundar:

- detecção;
- thresholds;
- baselines;
- anomalias;
- sazonalidade;
- detecção estática;
- dinâmica;
- contextual;
- multi-signal;
- correlação;
- deduplicação;
- supressão;
- Alertas;
- sintomas versus causas;
- Alert fatigue;
- roteamento;
- severidade;
- prioridade;
- enriquecimento;
- Evidence Bundle;
- relação entre Signal, Detection, Alert e Incident.

---

# Detecção, Thresholds, Anomalias e Alertas

Com SLIs, SLOs e Error Budgets estabelecidos...

OPS precisa transformar Telemetria em percepção operacional útil.

Isso exige responder:

> Quando um Sinal merece atenção?

Nem toda mudança representa problema.

Nem todo problema deve gerar Alerta.

Nem todo Alerta deve virar Incidente.

Por isso...

a Engenharia Oficial deverá separar:

    SIGNAL
    DETECTION
    ALERT
    INCIDENT

---

# Princípio Fundamental

Um Sinal é uma observação.

Uma Detecção é uma interpretação de que determinada condição merece atenção.

Um Alerta é uma comunicação operacional dessa detecção.

Um Incidente é um objeto governado relacionado a impacto, interrupção ou risco operacional relevante.

---

# Invariante Signal ≠ Alert

A existência de Telemetria não deverá gerar Alertas automaticamente.

---

# Invariante Alert ≠ Incident

Um Alerta poderá:

- ser verdadeiro;
- ser falso;
- ser duplicado;
- ser transitório;
- não possuir impacto.

---

# Fluxo Conceitual

    SIGNAL
        ↓
    DETECTION RULE / MODEL
        ↓
    DETECTION
        ↓
    ENRICHMENT
        ↓
    ALERT
        ↓
    TRIAGE
        ↓
    INCIDENT
        ↓
    RESPONSE

---

# Detecção

Uma:

**Detection**

representa conclusão operacional de que determinado padrão ou condição foi identificado.

---

# Detection Record

Poderá conter:

    DETECTION_ID
    DETECTION_TYPE
    OBJECT_ID
    RULE_ID
    RULE_VERSION
    DETECTED_AT
    SCOPE
    SEVERITY
    CONFIDENCE
    EVIDENCE
    STATUS

---

# Detection Type

Poderá incluir:

    THRESHOLD
    ANOMALY
    ABSENCE
    CORRELATION
    SLO_BURN
    PATTERN
    POLICY_VIOLATION
    STATE_DIVERGENCE

---

# Invariante de Detecção Explicável

Uma Detecção deverá poder responder:

> o que foi detectado?

> com base em quais Sinais?

> por qual regra ou modelo?

---

# Detecção Estática

Uma regra estática utiliza valor conhecido.

---

# Exemplo

    CPU_USAGE > 90%

---

# Outro Exemplo

    ERROR_RATE > 5%

---

# Invariante de Threshold Contextual

Thresholds deverão possuir significado operacional...

não serem escolhidos apenas por tradição.

---

# Threshold Absoluto

Exemplo:

    TEMPERATURE > 80C

---

# Threshold Relativo

Exemplo:

    ERROR_RATE > 3x BASELINE

---

# Threshold Percentual

Exemplo:

    QUEUE_USAGE > 85%

---

# Threshold por Duração

Exemplo:

    LATENCY_P95 > 500ms
    FOR 5m

---

# Invariante de Duração

Uma violação instantânea poderá possuir significado diferente de uma condição persistente.

---

# Consecutive Breach

Uma regra poderá exigir:

    3 CONSECUTIVE FAILURES

---

# Invariante de Sensibilidade Controlada

A regra deverá equilibrar:

- velocidade de detecção;
- ruído;
- falsos positivos.

---

# Recovery Threshold

A condição para encerrar Detecção poderá ser diferente da condição de abertura.

---

# Exemplo

Abrir:

    CPU > 90%
    FOR 5m

Encerrar:

    CPU < 75%
    FOR 10m

---

# Invariante de Histerese

Entrada e saída poderão utilizar thresholds diferentes para reduzir flapping.

---

# Baseline

Um:

**Baseline**

representa comportamento esperado ou histórico de referência.

---

# Exemplo

Tráfego normal:

    1000-1500 requests/min

durante determinado horário.

---

# Invariante de Baseline Contextual

Baseline poderá depender de:

- hora;
- dia;
- região;
- Consumer;
- sazonalidade;
- evento.

---

# Baseline Estático

Pode ser definido manualmente.

---

# Baseline Dinâmico

Pode ser aprendido a partir de histórico.

---

# Invariante de Baseline Atualizável

Mudanças legítimas de comportamento deverão poder atualizar referência.

---

# Baseline Drift

Se o baseline acompanhar qualquer mudança automaticamente...

ele pode normalizar falha.

---

# Exemplo

Latência degrada lentamente durante semanas.

Um baseline totalmente adaptativo pode passar a considerar isso normal.

---

# Invariante de Baseline sem Amnésia

Modelos adaptativos deverão preservar referência suficiente para detectar deterioração progressiva.

---

# Sazonalidade

O comportamento pode variar periodicamente.

---

# Exemplos

- horário comercial;
- fim de mês;
- campanhas;
- feriados;
- ciclos industriais.

---

# Invariante de Sazonalidade

Detecção dinâmica deverá evitar classificar comportamento esperado recorrente como anomalia.

---

# Anomalia

Uma:

**Anomaly**

representa comportamento significativamente diferente do esperado segundo determinado modelo.

---

# Importante

Anomalia não significa necessariamente problema.

---

# Exemplo

Tráfego sobe 10x.

Pode ser:

- ataque;
- campanha bem-sucedida;
- evento legítimo;
- erro de instrumentação.

---

# Invariante Anomalia ≠ Falha

Anomaly Detection deverá produzir Evidência...

não conclusão automática de Incidente.

---

# Anomaly Record

Poderá conter:

    ANOMALY_ID
    OBJECT_ID
    SIGNAL
    BASELINE
    DEVIATION
    DETECTED_AT
    MODEL
    MODEL_VERSION
    CONFIDENCE

---

# Detecção Univariada

Analisa um Sinal.

---

# Exemplo

    LATENCY unusually high

---

# Detecção Multivariada

Analisa combinação.

---

# Exemplo

    CPU normal
    LATENCY high
    NETWORK_RETRANSMISSION high

---

# Invariante de Contexto Multissinal

Alguns problemas somente deverão ser detectados adequadamente pela combinação de Sinais.

---

# Multi-Signal Detection

Poderá combinar:

    ERROR_RATE
    LATENCY
    QUEUE_DEPTH
    DEPENDENCY_HEALTH

---

# Exemplo

    ERROR_RATE ↑
    LATENCY ↑
    QUEUE_DEPTH ↑

pode produzir Detecção de:

    SERVICE_DEGRADATION_PATTERN

---

# Invariante de Correlação sem Causalidade

Combinação de Sinais poderá fortalecer Detecção...

sem provar causa.

---

# Absence Detection

A ausência de Sinal esperado também poderá gerar Detecção.

---

# Exemplo

    HEARTBEAT_MISSING > 90s

---

# Invariante de Expectativa Prévia

Absence Detection somente deverá existir quando houver expectativa conhecida de sinal.

---

# Deadman Detection

Pode verificar que determinada atividade periódica continua ocorrendo.

---

# Exemplo

    BACKUP_JOB_COMPLETED
    EVERY 24h

---

# Se não ocorrer:

    BACKUP_MISSING

---

# Invariante de Falha Silenciosa Detectável

OPS deverá buscar detectar ausência de processos que deveriam produzir Evidência.

---

# Change-Aware Detection

Uma Detecção poderá considerar Mudanças recentes.

---

# Exemplo

Após deploy...

latência sobe.

---

# Detecção poderá enriquecer:

    RECENT_CHANGE = CHANGE-442

---

# Mas...

não deverá declarar:

    ROOT_CAUSE = CHANGE-442

sem Evidência suficiente.

---

# Invariante Mudança ≠ Causa

Mudanças recentes deverão ser contexto investigativo...

não culpa automática.

---

# Dependency-Aware Detection

Uma Detecção poderá considerar Estado de dependências.

---

# Exemplo

    SERVICE_A errors
    +
    DATABASE_B degraded

---

# Resultado

    POSSIBLE_DEPENDENCY_IMPACT

---

# Invariante de Hipótese Explícita

Quando a relação causal ainda não estiver confirmada...

o resultado deverá permanecer hipótese.

---

# SLO-Based Detection

Error Budget Burn poderá produzir Detecções mais alinhadas ao impacto de confiabilidade.

---

# Exemplo

    FAST_BURN_DETECTED

---

# Invariante de SLO-Aware Alerting

Para Serviços com SLO...

a Detecção deverá poder considerar objetivos em vez de thresholds isolados.

---

# Alert

Um:

**Alert**

representa uma comunicação de atenção operacional criada a partir de uma Detecção.

---

# Alert Record

Poderá conter:

    ALERT_ID
    DETECTION_ID
    OBJECT_ID
    CREATED_AT
    SEVERITY
    PRIORITY
    STATUS
    OWNER
    ROUTING
    EVIDENCE
    CORRELATION_KEY

---

# Invariante de Alert com Origem

Todo Alerta relevante deverá possuir relação com sua Detecção ou Evidência de origem.

---

# Alert Status

Poderá incluir:

    OPEN
    ACKNOWLEDGED
    INVESTIGATING
    RESOLVED
    SUPPRESSED
    EXPIRED

---

# Invariante Alert Status ≠ Service State

Resolver Alerta não significa necessariamente que Serviço recuperou.

---

# Exemplo

Um Alerta pode ser fechado como:

    FALSE_POSITIVE

enquanto o Serviço nunca esteve degradado.

---

# Alert Severity

Severidade poderá representar gravidade potencial da condição.

---

# Exemplos

    INFO
    WARNING
    HIGH
    CRITICAL

---

# Mas...

a taxonomia deverá ser definida localmente.

---

# Invariante de Severidade Semântica

Os níveis deverão possuir critérios...

não apenas cores.

---

# Alert Priority

Prioridade poderá representar ordem de resposta.

---

# Severidade e Prioridade podem Divergir

Um problema severo sem Consumer ativo...

pode possuir prioridade diferente de degradação moderada afetando Missão crítica.

---

# Invariante Severity ≠ Priority

Gravidade da condição e urgência de resposta deverão permanecer separadas quando necessário.

---

# Criticidade do Objeto

A mesma Detecção pode gerar Alertas diferentes.

---

# Exemplo

    DISK_USAGE = 95%

em:

    EXPERIMENTAL_SERVICE

pode gerar:

    WARNING

---

# Em Serviço crítico:

    CRITICAL

---

# Invariante de Contexto do Objeto

Alerting deverá considerar Criticidade e função.

---

# Consumer Impact

Um Alerta também poderá considerar Consumer real afetado.

---

# Exemplo

    ERROR_RATE = 10%

mas somente em:

    TENANT_X

---

# Invariante de Escopo do Alerta

O Alerta deverá preservar escopo da condição.

---

# Alert Routing

Depois de criado...

um Alerta precisa chegar ao responsável adequado.

---

# Routing Pode Considerar

- Owner;
- domínio;
- horário;
- Criticidade;
- região;
- Serviço;
- Provider;
- Missão.

---

# Invariante de Ownership Roteável

Objetos críticos deverão possuir informação suficiente para encaminhar Alertas.

---

# Escalation Policy

Se não houver resposta...

o Alerta poderá escalar.

---

# Exemplo

    T0 = PRIMARY_ON_CALL
    T+10m = SECONDARY
    T+20m = OPS_LEAD

---

# Invariante de Escalonamento Temporal

Políticas deverão possuir critérios claros.

---

# Acknowledgement

Um operador poderá reconhecer:

    ACKNOWLEDGED

---

# Mas...

isso não resolve a condição.

---

# Invariante Acknowledge ≠ Resolve

Reconhecer um Alerta significa:

> alguém assumiu atenção.

Não:

> o problema acabou.

---

# Alert Ownership Transfer

Durante investigação...

o responsável pode mudar.

---

# Invariante de Responsabilidade Atual

A Plataforma deverá conseguir identificar quem possui responsabilidade operacional atual pelo Alerta.

---

# Alert Enrichment

Antes do roteamento...

o Alerta poderá receber contexto.

---

# Exemplos

    SERVICE_OWNER
    CURRENT_STATE
    RECENT_CHANGES
    DEPENDENCIES
    SLO_STATUS
    RUNBOOK
    DASHBOARD
    TRACE_EXAMPLES

---

# Invariante de Enriquecimento Útil

O objetivo deverá ser reduzir tempo de compreensão...

não adicionar dados irrelevantes.

---

# Evidence Bundle

Um Alerta poderá conter:

**Alert Evidence Bundle**

---

# Poderá incluir

- Sinais;
- snapshots;
- métricas;
- logs;
- traces;
- mudanças;
- dependências;
- Consumer impact.

---

# Invariante de Evidence Bundle Temporal

A Evidência deverá representar contexto próximo ao momento da Detecção.

---

# Alert Correlation

Vários Alertas podem representar o mesmo fenômeno.

---

# Exemplo

    DATABASE_LATENCY
    API_ERRORS
    QUEUE_GROWTH
    CHECKOUT_FAILURE

---

# Podem ser correlacionados a:

    COMMON_OPERATIONAL_EVENT

---

# Invariante de Correlação sem Perda

Agrupar Alertas não deverá apagar os sinais constituintes.

---

# Alert Deduplication

O mesmo detector pode gerar repetidamente a mesma condição.

---

# Deduplication Key

Poderá incluir:

    OBJECT
    DETECTION_TYPE
    SCOPE

---

# Invariante de Deduplicação Contextual

Alertas semanticamente diferentes não deverão ser fundidos apenas porque possuem texto parecido.

---

# Alert Grouping

Múltiplos objetos podem sofrer mesmo problema.

---

# Exemplo

50 instâncias falham pelo mesmo Provider.

---

# Em vez de 50 notificações...

poderá existir um grupo.

---

# Invariante de Agrupamento sem Ocultar Blast Radius

O grupo deverá preservar quantidade e identidade dos afetados.

---

# Alert Suppression

Alguns Alertas poderão ser suprimidos.

---

# Motivos

- manutenção;
- incidente já conhecido;
- dependência upstream falha;
- duplicação.

---

# Invariante de Supressão Explicável

Alertas suprimidos não deverão desaparecer sem registro quando relevantes.

---

# Suppression Record

Poderá conter:

    REASON
    START
    END
    AUTHORITY
    SCOPE

---

# Maintenance Suppression

Durante manutenção...

Alertas esperados podem ser silenciados.

---

# Mas...

somente dentro do escopo previsto.

---

# Invariante de Manutenção sem Cegueira

Alertas inesperados ou fora do escopo deverão continuar detectáveis.

---

# Dependency Suppression

Se upstream está claramente indisponível...

Alertas downstream poderão ser agrupados ou suprimidos.

---

# Risco

Suppressão excessiva pode esconder falha independente downstream.

---

# Invariante de Suppression Conservadora

A Plataforma deverá evitar silenciar Evidência que possa representar problema adicional.

---

# Alert Inhibition

Um Alerta pode impedir notificação de outro relacionado.

---

# Exemplo

    HOST_DOWN

pode inibir:

    PROCESS_DOWN

no mesmo host.

---

# Invariante de Relação Estrutural

Inibição deverá ser baseada em topologia ou regra conhecida.

---

# Alert Fatigue

Volume excessivo de Alertas reduz capacidade humana de responder.

---

# Pode ocorrer por:

- thresholds ruins;
- duplicação;
- flapping;
- sinais sem impacto;
- roteamento amplo.

---

# Invariante de Alertas Acionáveis

Um Alerta deverá existir porque alguém pode fazer algo útil com ele.

---

# Anti-Padrão

Alertar sobre qualquer métrica que ultrapasse qualquer limite.

---

# Actionability

Um bom Alerta deverá ajudar a responder:

> O que está acontecendo?

> Quem é afetado?

> Qual o risco?

> O que devo verificar?

---

# Invariante de Actionability Proporcional

Nem todo Alerta precisa conter Runbook completo...

mas deverá possuir contexto suficiente para seu público.

---

# Symptom Alert

Um Alerta pode representar sintoma.

---

# Exemplo

    HIGH_LATENCY

---

# Cause Alert

Outro pode representar causa confirmada.

---

# Exemplo

    DATABASE_STORAGE_EXHAUSTED

---

# Invariante Sintoma ≠ Causa

Alertas de sintoma não deverão ser rotulados como causa sem Evidência.

---

# Root Cause Candidate

A Plataforma poderá produzir:

    POSSIBLE_ROOT_CAUSE

---

# Invariante de Candidato Explícito

Hipóteses deverão permanecer distinguíveis de causa confirmada.

---

# Causal Graph Analysis

Agentes poderão utilizar Grafo e Timeline para sugerir causas.

---

# Exemplo

    STORAGE_LATENCY
        ↓
    DATABASE_TIMEOUTS
        ↓
    API_ERRORS

---

# Invariante de Raciocínio Causal Evidenciável

A sugestão deverá mostrar caminho utilizado.

---

# False Positive

Detecção indica problema...

mas condição relevante não existia.

---

# False Positive Record

Poderá ser utilizado para melhorar detector.

---

# Invariante de Feedback do Detector

Classificações humanas ou posteriores poderão alimentar melhoria.

---

# False Negative

Falha ocorreu...

mas nenhuma Detecção foi produzida.

---

# Isso Pode Ser Mais Grave

Porque demonstra lacuna observacional.

---

# Invariante de Incidente sem Alerta

Após Incidente detectado por outro meio...

OPS deverá poder avaliar:

> por que não alertamos?

---

# Detection Coverage Gap

Poderá surgir:

    OBSERVABILITY_GAP

---

# Invariante de Falha de Detecção como Dívida

Lacunas relevantes deverão alimentar melhoria operacional.

---

# Detector Precision

Poderá medir:

> qual proporção de Detecções representou condição real útil?

---

# Detector Recall

Poderá medir:

> qual proporção das condições relevantes foi detectada?

---

# Invariante de Qualidade do Detector

O sistema de Detecção também deverá possuir métricas de qualidade.

---

# Detector Health

Um detector pode falhar.

---

# Exemplos

- consulta quebrada;
- ausência de dados;
- regra inválida;
- modelo indisponível.

---

# Invariante Detector Observável

OPS deverá conseguir detectar quando seu mecanismo de Detecção não está funcionando.

---

# Silent Detector Failure

Esse é um dos modos mais perigosos.

Nenhum Alerta aparece...

porque o detector morreu.

---

# Invariante de Watch the Watcher

Detetores críticos deverão possuir mecanismo de supervisão.

---

# Heartbeat do Detector

Poderá emitir:

    DETECTOR_HEARTBEAT

---

# Ou sinal de execução:

    LAST_EVALUATION_AT

---

# Invariante de Execução Verificável

Ausência de Alertas não deverá ser única Evidência de que tudo está bem.

---

# Alert Storm

Uma falha pode gerar milhares de Alertas.

---

# Proteções

Poderão incluir:

- deduplicação;
- grouping;
- rate limiting;
- suppression.

---

# Invariante de Proteção sem Perda de Severidade

Reduzir volume de notificação não deverá reduzir compreensão do Blast Radius.

---

# Notification Rate Limit

O canal humano poderá ter limite.

---

# Mas...

o backend poderá continuar registrando Eventos.

---

# Invariante Notificação ≠ Registro

Limitar notificações não deverá apagar ocorrências.

---

# Escalation Storm

Muitos Alertas podem escalar simultaneamente para mesma pessoa.

---

# Invariante de Carga Humana

OPS deverá considerar capacidade de resposta humana como recurso finito.

---

# Alert Queue

Poderá existir fila priorizada.

---

# Invariante de Priorização

Alertas críticos deverão poder superar Alertas informativos.

---

# Alert Prioritization Context

Poderá considerar:

    SEVERITY
    CRITICALITY
    MISSION_IMPACT
    SLO_BURN
    NUMBER_OF_CONSUMERS
    DURATION

---

# Invariante de Prioridade Explicável

O operador deverá poder entender por que determinado Alerta foi priorizado.

---

# Alert Expiration

Alguns Alertas perdem utilidade depois de certo tempo.

---

# Exemplo

Um pico de 10 segundos já encerrado.

---

# Pode ser registrado como Evento...

sem permanecer ativo como Alerta.

---

# Invariante de Alert Lifecycle

Alertas deverão poder encerrar quando condição deixou de exigir atenção.

---

# Auto-Resolve

Um Alerta poderá resolver automaticamente se condição normalizar.

---

# Mas...

para condições críticas...

pode ser necessário período de estabilidade.

---

# Invariante de Auto-Resolve com Histerese

Uma única amostra saudável não deverá necessariamente fechar Alerta.

---

# Alert Reopen

Se condição retornar...

o Alerta poderá:

- reabrir;
- gerar novo Alerta.

---

# Invariante de Identidade Temporal

A estratégia deverá preservar diferença entre:

- mesma condição contínua;
- recorrência nova.

---

# Flapping Alert

Uma condição recorrente pode ficar:

    OPEN
    RESOLVED
    OPEN
    RESOLVED

---

# Invariante de Flapping Visível

OPS deverá detectar quando o próprio Alerta está oscilando.

---

# Cooldown

Pode impedir notificações repetidas por curto período.

---

# Invariante de Cooldown sem Cegueira

Eventos críticos novos deverão poder romper cooldown quando necessário.

---

# Alert Escalation to Incident

Nem todo Alerta vira Incidente.

---

# Incident Creation Criteria

Poderão considerar:

- impacto confirmado;
- duração;
- severidade;
- Consumer;
- Missão;
- SLO;
- risco.

---

# Exemplo

    ALERT = DATABASE_LATENCY_HIGH

Pode não virar Incidente.

---

# Mas

    PAYMENT_FAILURE_RATE = 40%
    CONSUMERS_AFFECTED = HIGH

pode justificar:

    INCIDENT

---

# Invariante de Incident Gate

A criação de Incidente deverá possuir critérios ou decisão contextual.

---

# Automatic Incident Creation

Alguns casos poderão ser automatizados.

---

# Exemplo

    CRITICAL_SERVICE_UNAVAILABLE
    FOR > 2m

---

# Invariante de Automação Governada

A política automática deverá possuir:

- escopo;
- critérios;
- autoridade.

---

# Manual Incident Declaration

Operador poderá declarar Incidente mesmo sem Alerta.

---

# Exemplo

Consumer relata falha grave antes da Telemetria detectar.

---

# Invariante de Entrada Humana

OPS não deverá exigir Alerta prévio para reconhecer Incidente real.

---

# External Incident Signal

Provider poderá declarar Incidente.

---

# Isso Pode Gerar

    ALERT

ou:

    RISK_STATE

antes de impacto local.

---

# Invariante Provider Incident ≠ Local Incident

A falha externa deverá ser contextualizada antes de assumir impacto local confirmado.

---

# Detection Enrichment by Service Catalog

O Catálogo poderá fornecer:

    OWNER
    CRITICALITY
    RUNBOOK
    DEPENDENCIES
    CONSUMERS

---

# Invariante Catálogo ↔ Alerting

Alerting deverá utilizar contexto do Catálogo sem transformar o Catálogo em motor observacional.

---

# Detection Enrichment by State Model

O arquivo `005` poderá fornecer:

    CURRENT_EFFECTIVE_STATE
    MODE
    RISK
    LIFECYCLE

---

# Exemplo

Se Serviço está:

    LIFECYCLE = EXPERIMENTAL

a política pode ser diferente.

---

# Invariante de Estado Contextual

Detecção e roteamento poderão considerar Lifecycle sem confundi-lo com Health.

---

# Alert and Maintenance

Se:

    MODE = MAINTENANCE

a regra pode alterar comportamento.

---

# Mas...

apenas para Detecções esperadas.

---

# Invariante de Maintenance-Aware Detection

Manutenção não deverá desativar Observabilidade inteira.

---

# Detection by Agent

Agentes poderão detectar padrões complexos.

---

# Agent Detection

Poderá conter:

    MODEL_ID
    MODEL_VERSION
    INPUT_SIGNALS
    CONFIDENCE
    EXPLANATION

---

# Invariante de Detecção Cognitiva Rastreável

Alertas gerados por Agentes deverão preservar origem e Evidência.

---

# Deterministic Detection

Regras determinísticas continuam importantes.

---

# Exemplo

    FREE_DISK < 1%

---

# Invariante de Complementaridade

A UNO deverá permitir coexistência de:

- regras determinísticas;
- estatística;
- ML;
- Agentes.

---

# Hybrid Detection

Uma regra pode combinar:

    STATIC_THRESHOLD
        +
    ANOMALY_SCORE
        +
    SERVICE_CRITICALITY

---

# Invariante de Modelo Composto Explicável

Quanto mais complexo o detector...

maior deverá ser a necessidade de explicar seu resultado quando consequência for relevante.

---

# Detection Confidence

Uma Detecção poderá carregar:

    CONFIDENCE

---

# Exemplo

    ANOMALY_CONFIDENCE = MEDIUM

---

# Mas...

se threshold determinístico foi violado...

Confidence pode possuir outra semântica.

---

# Invariante de Confidence Tipada

A confiança deverá indicar no que exatamente existe incerteza.

---

# Detection Severity versus Confidence

Um Evento pode ser:

    HIGH_SEVERITY
    LOW_CONFIDENCE

---

# Exemplo

Possível corrupção de dados.

---

# Invariante de Baixa Confiança em Alto Impacto

Condições de alto potencial de dano poderão justificar investigação mesmo com confiança incompleta.

---

# Detection Suppression by Confidence

Nem toda baixa confiança deverá gerar notificação.

---

# A política poderá:

- registrar;
- observar;
- correlacionar;
- alertar apenas após confirmação.

---

# Invariante de Escalonamento Progressivo

A resposta poderá aumentar conforme Evidências se acumulam.

---

# Detection Lifecycle

Uma Detecção poderá passar por:

    CANDIDATE
    CONFIRMED
    CLEARED

---

# Mas...

não deverá necessariamente utilizar Lifecycle global de Serviço.

---

# Invariante de State Model Tipado

Detecções possuem seu próprio modelo.

---

# Alert Evidence Snapshot

Ao criar um Alerta...

poderá ser útil capturar contexto.

---

# Exemplo

    CPU = 97%
    LATENCY = 1.2s
    ERROR_RATE = 8%
    QUEUE = 80k

---

# Invariante de Evidência no Tempo

O contexto original deverá permanecer disponível mesmo que sinais normalizem depois.

---

# Investigation Links

Um Alerta poderá apontar para:

- traces;
- logs;
- dashboards;
- Runbooks;
- mudanças;
- dependências.

---

# Invariante de Navegação

O operador deverá conseguir transitar do Alerta para Evidência sem reconstruir manualmente todo contexto.

---

# Alert as Operational Work Object

Alertas importantes poderão ser tratados como objetos operacionais.

---

# Isso permite:

- ownership;
- status;
- comentários;
- Timeline;
- escalonamento.

---

# Mas...

não deverão substituir Incident Management.

---

# Invariante Alert ↔ Incident

Alert é atenção.

Incident é coordenação de resposta a impacto relevante.

---

# Alert Metrics

A organização poderá medir:

    ALERT_VOLUME
    FALSE_POSITIVE_RATE
    ACK_TIME
    RESOLUTION_TIME
    DUPLICATE_RATE
    ESCALATION_RATE

---

# Invariante de Métricas sem Incentivo Ruim

Reduzir Alert Volume não deverá ser objetivo se isso diminuir cobertura crítica.

---

# Alert Quality

Uma avaliação madura poderá perguntar:

> Este Alerta levou a uma ação útil?

---

# Actionable Alert Ratio

Poderá medir proporção de Alertas que exigiram ação legítima.

---

# Invariante de Qualidade sobre Quantidade

Menos Alertas melhores poderão ser preferíveis a grande volume de sinais humanos.

---

# Detection Review

Regras poderão ser revisadas após:

- Incidente;
- falso positivo;
- falso negativo;
- mudança arquitetural.

---

# Invariante de Detector Evolutivo

Detectores não deverão ser considerados configurações permanentes imutáveis.

---

# Rule Versioning

Uma regra poderá possuir:

    RULE_VERSION

---

# Invariante de Histórico de Regra

Investigações históricas deverão poder identificar qual regra gerou determinado Alerta.

---

# Rule Deployment

Uma nova regra também é uma Mudança.

---

# Pode causar:

- Alert storm;
- perda de cobertura;
- custos maiores.

---

# Invariante de Governança de Detecção

Regras críticas deverão possuir ciclo de mudança compatível com seu impacto.

---

# Shadow Detection

Nova regra poderá operar inicialmente sem notificação.

---

# Exemplo

    MODE = SHADOW

---

# Objetivo

Comparar resultado sem afetar operação humana.

---

# Invariante de Validação do Detector

Detectores novos poderão ser testados antes de tornarem-se acionáveis.

---

# Canary Detection Rule

Uma regra poderá ser ativada para pequeno escopo.

---

# Invariante de Rollout Progressivo

Alterações importantes de Alerting poderão ser introduzidas gradualmente.

---

# Detection as a Service

A UNO poderá materializar capacidades de Detecção como Serviços.

---

# Exemplos

    ANOMALY_DETECTION_SERVICE
    SLO_BURN_DETECTION_SERVICE
    SIGNAL_CORRELATION_SERVICE

---

# Invariante de Serviço Observável

Os próprios Serviços de Detecção deverão possuir:

- Saúde;
- SLO;
- Telemetria;
- fallback.

---

# Failure of Detection Service

Se detector central falhar...

a Plataforma poderá perder capacidade de perceber Incidentes.

---

# Resultado

    OBSERVABILITY_HEALTH = CRITICAL

---

# Invariante de Detecção como Dependência Crítica

Serviços de Observabilidade deverão ser incluídos no Grafo Operacional.

---

# Federação de Alertas

Uma organização poderá compartilhar Alertas ou Detecções com outra.

---

# Exemplo

Provider envia:

    SERVICE_DEGRADATION_ALERT

---

# Invariante de Proveniência Federada

A organização receptora deverá saber:

    SOURCE_ORG
    SOURCE_ALERT_ID
    CREATED_AT
    SCOPE

---

# Alert Federado não Deve Ser Recriado como Fato Local

Pode ser registrado como:

    EXTERNAL_ALERT

---

# A UNO poderá gerar Detecção local:

    LOCAL_IMPACT_POSSIBLE

---

# Invariante de Perspectivas Federadas

Alerta externo e impacto local deverão permanecer objetos distinguíveis.

---

# Alert Privacy

Alertas podem conter dados sensíveis.

---

# Invariante de Minimização

Notificações humanas deverão evitar expor:

- PII;
- segredos;
- detalhes confidenciais;

sem necessidade.

---

# Notification Channels

Alertas poderão ser enviados para:

- aplicação;
- paging;
- chat;
- email;
- sistema federado.

---

# Invariante Canal ≠ Registro Canônico

A notificação é projeção.

O Alert Record deverá permanecer em sistema apropriado.

---

# Delivery Failure

Uma notificação pode falhar.

---

# Exemplo

Paging indisponível.

---

# Invariante de Entrega Observável

OPS deverá conseguir detectar falha no caminho de notificação crítica.

---

# Notification Receipt

Alguns canais poderão fornecer confirmação.

---

# Invariante de Confirmação Distinguível

    NOTIFICATION_SENT

não significa:

    HUMAN_NOTIFIED

---

# E:

    HUMAN_NOTIFIED

não significa:

    ACKNOWLEDGED

---

# Invariante de Etapas de Comunicação

O caminho de entrega deverá ser representável quando criticidade justificar.

---

# Alerting durante Partição

Uma região isolada poderá não alcançar sistema central.

---

# Local Alerting

Poderá existir:

    EDGE_ALERTING

---

# Invariante de Continuidade Local

Capacidades críticas poderão manter Detecção e resposta local quando desconectadas.

---

# Deferred Alert Synchronization

Depois da reconexão...

Alertas históricos poderão ser sincronizados.

---

# Invariante de Tempo Original

A sincronização deverá preservar quando o Alerta foi realmente criado.

---

# Alert Conflict

Duas regiões podem abrir Alertas diferentes sobre mesmo fenômeno.

---

# Reconciliação

Poderá agrupá-los depois.

---

# Invariante de Não Apagamento

A consolidação não deverá destruir Proveniência local.

---

# Detecção como Ponte para o Próximo Domínio

Com Sinais transformados em Detecções e Alertas...

OPS começa a chegar ao ponto em que a organização precisa responder operacionalmente.

---

# Relação Conceitual

    TELEMETRY
        ↓
    DETECTION
        ↓
    ALERT
        ↓
    TRIAGE
        ↓
    INCIDENT
        ↓
    RESPONSE
        ↓
    RECOVERY

---

# Invariante de Fronteira

Observabilidade deverá detectar e informar.

Incident Management deverá coordenar resposta quando condição atingir critérios apropriados.

---

# Próxima Dimensão

Com Detecção, Anomalias e Alertas estabelecidos...

o próximo lote deverá aprofundar:

- correlação de Telemetria;
- logs, metrics, traces e Events em conjunto;
- contexto de execução;
- causality candidates;
- Timeline;
- exemplars;
- trace-to-metric;
- metric-to-trace;
- log-to-trace;
- service dependency discovery;
- topology inference;
- exemplars;
- investigação exploratória;
- observabilidade orientada a perguntas;
- query federation;
- troubleshooting;
- Evidence Graph;
- reconstrução operacional.

---

# Correlação de Telemetria e Reconstrução Operacional

Com Detecção, Anomalias e Alertas estabelecidos...

OPS precisa aprofundar uma capacidade essencial:

> conectar sinais separados até formar contexto operacional compreensível.

Uma métrica isolada pode mostrar aumento de latência.

Um Log pode registrar timeout.

Um Trace pode revelar atraso em uma Dependência.

Um Evento pode registrar uma Mudança recente.

Um Consumer pode reportar falha funcional.

Separadamente...

cada Sinal possui valor limitado.

Correlacionados...

podem formar uma explicação operacional muito mais forte.

---

# Princípio Fundamental

Correlação não deverá significar simplesmente:

> aconteceu ao mesmo tempo.

Ela deverá considerar:

- tempo;
- identidade;
- escopo;
- causalidade potencial;
- topologia;
- contexto;
- Proveniência.

---

# Invariante de Correlação sem Causalidade Automática

Sinais correlacionados deverão permanecer distinguíveis de relações causais confirmadas.

---

# Correlação Multimodal

OPS deverá poder relacionar:

    METRICS
    LOGS
    TRACES
    EVENTS
    ALERTS
    STATE_ASSERTIONS

---

# Exemplo

    LATENCY_P95 ↑
        +
    DATABASE_TIMEOUT_LOGS
        +
    TRACE_SPANS SLOW
        +
    DATABASE_PROVIDER_EVENT

---

# Resultado

Pode surgir hipótese:

    POSSIBLE_DATABASE_IMPACT

---

# Invariante de Hipótese Explícita

A conclusão deverá permanecer:

    CANDIDATE

até que Evidência suficiente permita afirmação mais forte.

---

# Correlation Context

Uma correlação poderá utilizar:

    OBJECT_ID
    SERVICE_ID
    TRACE_ID
    CORRELATION_ID
    INCIDENT_ID
    CHANGE_ID
    REGION
    TENANT
    TIME_WINDOW

---

# Invariante de Contexto Comum

Quanto mais contextos compartilhados...

maior poderá ser a força da relação.

---

# Temporal Correlation

Dois Sinais podem ocorrer dentro de mesma janela.

---

# Exemplo

    CHANGE_COMPLETED = 14:00
    ERROR_RATE_INCREASE = 14:03

---

# Isso pode justificar:

    TEMPORAL_CORRELATION = TRUE

---

# Mas...

não:

    CHANGE_CAUSED_FAILURE = TRUE

---

# Invariante Temporal

Proximidade no tempo deverá ser tratada como Evidência contextual...

não prova de causa.

---

# Correlation Window

Poderá existir:

    WINDOW_BEFORE
    WINDOW_AFTER

---

# Exemplo

    -30m
    +10m

ao redor de determinada Detecção.

---

# Invariante de Janela Adequada

A janela deverá refletir dinâmica real do fenômeno.

---

# Correlation by Identity

Sinais compartilhando:

    SERVICE_ID

podem ser agrupados.

---

# Correlation by Trace

Sinais compartilhando:

    TRACE_ID

podem representar mesma operação distribuída.

---

# Correlation by Consumer

Também poderá existir:

    CONSUMER_ID

---

# Invariante de Escopo de Correlação

Correlação deverá preservar diferença entre:

- mesmo Serviço;
- mesma operação;
- mesmo Consumer;
- mesmo Incidente.

---

# Correlation by Dependency

O Grafo Operacional poderá ajudar.

---

# Exemplo

    SERVICE_A = DEGRADED
    SERVICE_B = DEGRADED
    SERVICE_C = DEGRADED

Todos dependem de:

    PROVIDER_X

---

# Pode surgir:

    COMMON_DEPENDENCY_CANDIDATE = PROVIDER_X

---

# Invariante de Dependência Comum

Compartilhar Dependência aumenta plausibilidade...

sem confirmar causa.

---

# Common Failure Domain Correlation

Objetos afetados podem compartilhar:

    REGION
    ZONE
    NETWORK
    IDENTITY_PROVIDER
    STORAGE

---

# Invariante de Domínio Compartilhado

OPS deverá ser capaz de detectar concentração de sintomas em mesmo Failure Domain.

---

# Correlação por Mudança

Uma investigação poderá perguntar:

> quais Mudanças ocorreram antes desta degradação?

---

# Change Correlation

Poderá incluir:

    DEPLOY
    CONFIG_CHANGE
    ROUTE_CHANGE
    POLICY_CHANGE
    PROVIDER_CHANGE

---

# Invariante Change Correlation ≠ Blame

A Mudança deverá ser considerada candidata contextual...

não causa presumida.

---

# Correlação por Versão

Uma falha pode afetar somente:

    VERSION_3.2

---

# Exemplo

    VERSION_3.1 = HEALTHY
    VERSION_3.2 = DEGRADED

---

# Invariante de Version Context

Telemetria deverá permitir identificar regressões específicas quando necessário.

---

# Correlação por Região

Exemplo:

    REGION_A = HEALTHY
    REGION_B = DEGRADED

---

# Resultado

Pode indicar:

    REGIONAL_EVENT

---

# Invariante de Regionalização

A Plataforma deverá evitar transformar condição regional em falha global sem Evidência.

---

# Correlação por Tenant

Um problema pode afetar somente determinado tenant.

---

# Exemplo

    TENANT_A = HEALTHY
    TENANT_B = UNAVAILABLE

---

# Invariante de Isolamento de Tenant

A análise deverá preservar escopo para evitar conclusões globais incorretas.

---

# Correlação por Jornada

Uma jornada pode atravessar vários Serviços.

---

# Exemplo

    LOGIN
        ↓
    SEARCH
        ↓
    CHECKOUT
        ↓
    PAYMENT

---

# Journey Correlation

Pode permitir descobrir:

> em qual etapa a jornada deixou de funcionar?

---

# Invariante de Jornada End-to-End

A Observabilidade deverá conseguir investigar função completa quando a promessa ao Consumer atravessar múltiplos Serviços.

---

# Metrics to Traces

Uma métrica agregada poderá apontar para Traces representativos.

---

# Exemplo

    LATENCY_P99 = 4s

Um exemplar poderá apontar para:

    TRACE_ID = T-882

---

# Exemplar

Um:

**Exemplar**

representa exemplo concreto relacionado a uma medição agregada.

---

# Invariante de Exemplar Representativo

Um Exemplar ajuda investigação...

mas não representa automaticamente todos os casos da distribuição.

---

# Trace to Metrics

A partir de um Trace...

o operador poderá consultar métricas do Serviço no mesmo período.

---

# Exemplo

    TRACE_TIME = 14:03

Mostrar:

    ERROR_RATE
    LATENCY_P95
    QUEUE_DEPTH

para janela correspondente.

---

# Invariante de Navegação Temporal

A correlação deverá preservar contexto de tempo.

---

# Logs to Traces

Um Log poderá possuir:

    TRACE_ID
    SPAN_ID

---

# Isso permite navegar:

    LOG
        ↓
    TRACE
        ↓
    SERVICE_PATH

---

# Invariante de Correlação Estruturada

Identificadores compartilhados deverão ser preferidos a heurísticas de parsing quando possível.

---

# Metrics to Logs

Uma anomalia de métrica poderá abrir Logs no mesmo:

    SERVICE
    REGION
    TIME_WINDOW

---

# Invariante de Pesquisa Orientada ao Contexto

A Plataforma deverá reduzir necessidade de reconstrução manual de filtros.

---

# Event to Trace

Uma Mudança poderá estar relacionada a Traces posteriores.

---

# Exemplo

    DEPLOY_EVENT
        ↓
    NEW_VERSION_TRACES

---

# Invariante de Mudança Observável

Implementações deverão facilitar comparação entre comportamento antes e depois de Mudança.

---

# Before / After Analysis

Poderá comparar:

    BASELINE_BEFORE
    BASELINE_AFTER

---

# Exemplos

    LATENCY
    ERROR_RATE
    THROUGHPUT

---

# Invariante de Janela Comparável

As janelas comparadas deverão possuir contexto suficientemente semelhante.

---

# Evidence Graph

Em maturidade elevada...

a correlação poderá ser representada como:

**Evidence Graph**

---

# Evidence Graph

Pode conectar:

    SIGNAL
    METRIC
    LOG
    TRACE
    EVENT
    ASSERTION
    STATE
    ALERT
    CHANGE
    DEPENDENCY

---

# Exemplo

    ALERT
        ↓ supported_by
    DETECTION
        ↓ derived_from
    ERROR_RATE_METRIC
        ↓ correlated_with
    TRACE_SET
        ↓ contains
    DATABASE_TIMEOUT_SPAN
        ↓ depends_on
    DATABASE_SERVICE

---

# Invariante de Relações Tipadas

As arestas do Evidence Graph deverão possuir significado.

---

# Exemplos

    SUPPORTED_BY
    DERIVED_FROM
    CORRELATED_WITH
    OBSERVED_BY
    CAUSED_BY
    POSSIBLY_CAUSED_BY

---

# Invariante de Causalidade Tipada

A Plataforma deverá distinguir:

    CAUSED_BY

de:

    POSSIBLY_CAUSED_BY

---

# Evidence Graph e Proveniência

Cada nó poderá preservar:

    SOURCE
    TIME
    SCOPE
    CONFIDENCE

---

# Invariante de Linhagem

A explicação não deverá perder origem conforme Evidências são agregadas.

---

# Causality Candidate

OPS poderá produzir:

    CAUSALITY_CANDIDATE

---

# Estrutura

Poderá conter:

    SOURCE_OBJECT
    TARGET_EFFECT
    EVIDENCE
    TEMPORAL_RELATION
    DEPENDENCY_RELATION
    CONFIDENCE

---

# Invariante de Candidato

Um candidato causal não deverá ser apresentado como Root Cause confirmada.

---

# Root Cause

A designação de causa raiz deverá exigir nível de Evidência compatível com contexto.

---

# Root Cause não Precisa Ser Única

Sistemas complexos podem possuir:

- múltiplas causas;
- fatores contribuintes;
- condições latentes.

---

# Invariante de Causalidade Não Simplista

OPS deverá evitar obrigar todo Incidente a possuir exatamente uma causa única.

---

# Contributing Factor

Poderá existir:

    CONTRIBUTING_FACTOR

---

# Exemplo

    LOW_CAPACITY_HEADROOM
    +
    RETRY_STORM
    +
    PROVIDER_LATENCY

---

# Invariante Root Cause ↔ Contributor

Fator contribuinte deverá permanecer distinto de causa principal quando essa distinção for útil.

---

# Symptom Chain

Uma falha poderá produzir cadeia de sintomas.

---

# Exemplo

    DATABASE_LATENCY
        ↓
    API_TIMEOUT
        ↓
    RETRY
        ↓
    QUEUE_GROWTH
        ↓
    MEMORY_PRESSURE
        ↓
    SERVICE_DEGRADATION

---

# Invariante de Cadeia Temporal

A ordem deverá ser sustentada por Evidência temporal suficiente.

---

# Cascading Failure Reconstruction

A Timeline poderá mostrar evolução de cascata.

---

# Exemplo

    14:00 PROVIDER_LATENCY
    14:02 API_TIMEOUTS
    14:04 RETRIES_INCREASE
    14:06 QUEUE_GROWTH
    14:08 SERVICE_UNAVAILABLE

---

# Invariante de Reconstrução sem Certeza Falsa

A Timeline pode mostrar progressão...

sem provar todos os mecanismos causais.

---

# Investigation Timeline

Durante troubleshooting...

OPS poderá criar Timeline investigativa.

---

# Poderá conter:

    EVENTS
    STATE_CHANGES
    ALERTS
    CHANGES
    HUMAN_NOTES
    AGENT_INFERENCES

---

# Invariante de Fonte Diferenciada

Notas humanas, Events e inferências deverão permanecer distinguíveis.

---

# Investigation Context

Uma investigação poderá possuir:

    INVESTIGATION_ID

---

# Isso Permite

- compartilhar contexto;
- registrar hipóteses;
- relacionar Evidências;
- evitar trabalho duplicado.

---

# Invariante Investigation ≠ Incident

Uma investigação pode existir antes de Incidente formal.

---

# Hypothesis

Durante análise...

poderá existir:

    HYPOTHESIS

---

# Exemplo

> A degradação pode estar relacionada ao novo Provider de DNS.

---

# Hypothesis Status

Poderá ser:

    OPEN
    SUPPORTED
    REJECTED
    CONFIRMED

---

# Invariante de Hipótese Preservada

Hipóteses rejeitadas poderão continuar registradas quando úteis para histórico investigativo.

---

# Why

Isso evita repetir caminhos já descartados.

---

# Evidence for Hypothesis

Poderá incluir:

    SUPPORTING_EVIDENCE
    CONTRADICTING_EVIDENCE

---

# Invariante de Evidência Contrária

OPS deverá permitir registrar Evidência que enfraquece uma hipótese...

não apenas dados que a confirmam.

---

# Investigação Exploratória

Observabilidade madura deverá permitir perguntas não previstas.

---

# Exemplo

> Quais Consumers começaram a falhar primeiro?

---

# Outro

> A degradação ocorre apenas em chamadas que passam pelo Provider X?

---

# Outro

> Qual versão está associada aos Traces lentos?

---

# Invariante de Observabilidade Exploratória

A Plataforma não deverá exigir que toda pergunta tenha sido pré-programada como dashboard ou Alerta.

---

# Query Federation

Telemetria poderá estar distribuída em múltiplos backends.

---

# Uma Consulta Pode Precisar Combinar

    METRICS_STORE
    LOG_STORE
    TRACE_STORE
    EVENT_STORE

---

# Invariante de Federação de Consulta

A arquitetura deverá permitir investigação integrada sem exigir unificação física obrigatória de todos os dados.

---

# Query Abstraction

A UNO poderá possuir camada que traduza perguntas conceituais.

---

# Exemplo

    FIND_ERRORS(
        service = SERVICE_A,
        time = T,
        region = REGION_B
    )

---

# Backend

poderá ser substituído.

---

# Invariante de Semântica acima da Ferramenta

A pergunta operacional deverá sobreviver à troca de backend.

---

# Searchability

Logs e Events deverão ser pesquisáveis por campos relevantes.

---

# Trace Search

Poderá buscar:

- Serviço;
- duração;
- erro;
- atributo;
- Consumer.

---

# Invariante de Consulta por Identidade

Identificadores canônicos deverão facilitar busca transversal.

---

# Search Cardinality

Consultas com campos altamente variáveis podem ser caras.

---

# Invariante de Custo de Investigação

A arquitetura deverá equilibrar flexibilidade investigativa e sustentabilidade.

---

# Precomputed Views

Perguntas frequentes poderão possuir:

    MATERIALIZED_VIEW

---

# Exemplos

    TOP_ERRORS
    SERVICE_HEALTH_SUMMARY
    DEPENDENCY_LATENCY

---

# Invariante de View ≠ Fonte Bruta

Visões pré-computadas deverão permanecer derivadas de Evidência identificável.

---

# Troubleshooting Workflow

Uma investigação poderá seguir:

    DEFINE_SCOPE
        ↓
    CHECK_STATE
        ↓
    CHECK_RECENT_CHANGES
        ↓
    CHECK_DEPENDENCIES
        ↓
    INSPECT_SIGNALS
        ↓
    FORM_HYPOTHESIS
        ↓
    TEST_HYPOTHESIS
        ↓
    ACT

---

# Invariante de Workflow não Rigidez

Essa sequência poderá orientar...

mas não deverá impedir caminhos exploratórios.

---

# Starting from Consumer

Uma investigação madura poderá começar pela experiência externa.

---

# Exemplo

    CONSUMER_FAILURE
        ↓
    TRACE
        ↓
    SERVICE
        ↓
    DEPENDENCY

---

# Invariante de Outside-In Observability

OPS deverá ser capaz de investigar do Consumer para dentro.

---

# Starting from Infrastructure

Também poderá começar de:

    RESOURCE_ANOMALY

e subir até:

    SERVICE
    CAPABILITY
    CONSUMER

---

# Invariante de Inside-Out Observability

A arquitetura deverá permitir investigação em ambas as direções.

---

# Dependency Discovery

Observabilidade poderá ajudar a descobrir Dependências não catalogadas.

---

# Exemplo

Traces mostram repetidamente:

    SERVICE_A → SERVICE_B

Mas Catálogo não possui relação.

---

# Resultado

Pode surgir:

    DEPENDENCY_CANDIDATE

---

# Invariante de Descoberta ≠ Registro Automático

A relação observada deverá ser proposta...

não necessariamente adicionada como verdade canônica sem validação.

---

# Topology Inference

Padrões de comunicação poderão sugerir:

- Service Graph;
- chamadas;
- frequência;
- dependências.

---

# Invariante de Topologia Inferida

Topologia inferida deverá possuir:

    ASSERTION_TYPE = INFERRED

ou equivalente.

---

# Shadow Dependency

Uma Dependência real não documentada poderá ser detectada.

---

# Invariante de Shadow Dependency

OPS deverá conseguir transformar descoberta observacional em melhoria do Catálogo.

---

# Dynamic Dependency

Algumas Dependências existem apenas em determinado contexto.

---

# Exemplo

    SERVICE_A → PROVIDER_B

somente durante:

    CONTINGENCY

---

# Invariante de Topologia Temporal

Observabilidade deverá poder distinguir relação ativa em determinado período.

---

# Trace-Based Service Map

Um mapa poderá ser gerado a partir de Traces.

---

# Mas...

não necessariamente representa todas as Dependências.

---

# Por quê

Pode faltar:

- tráfego raro;
- funções offline;
- jobs;
- chamadas não instrumentadas.

---

# Invariante de Cobertura do Mapa

Mapas derivados de Telemetria deverão indicar limitações observacionais quando relevantes.

---

# Metrics-Based Dependency Inference

Correlação de comportamento também poderá sugerir Dependência.

---

# Exemplo

Erro em A sempre acompanha latência em B.

---

# Isso não Basta para Confirmar Relação

---

# Invariante Correlação Estatística ≠ Dependência Arquitetural

A relação deverá continuar inferencial até validação apropriada.

---

# Log Pattern Mining

Agentes poderão identificar padrões em Logs.

---

# Exemplos

- nova classe de erro;
- sequência recorrente;
- assinatura de falha.

---

# Invariante de Pattern Mining

Padrões detectados deverão apontar para amostras representativas.

---

# Trace Pattern Mining

Agentes poderão descobrir:

- caminhos lentos;
- fan-out excessivo;
- dependências inesperadas.

---

# Invariante de Inferência Rastreável

A conclusão deverá possuir Traces ou agregados de origem.

---

# Metric Pattern Mining

Pode revelar:

- periodicidade;
- regressão;
- saturação progressiva;
- correlação.

---

# Invariante de Padrão Temporal

Modelos deverão considerar sazonalidade e mudança de baseline.

---

# Exemplars as Evidence Bridge

Exemplars podem conectar agregado e caso concreto.

---

# Exemplo

    ERROR_RATE = 8%

com Exemplars:

    TRACE_1
    TRACE_2
    TRACE_3

---

# Invariante de Amostra sem Generalização

Três Traces ilustram...

mas não substituem análise estatística do conjunto.

---

# Evidence Sampling

Investigações podem utilizar subconjunto.

---

# Invariante de Sampling Declarado

Conclusões baseadas em amostra deverão reconhecer cobertura quando necessário.

---

# Reconstruction of Consumer Journey

A Plataforma poderá reconstruir uma jornada específica.

---

# Exemplo

    REQUEST_ID
        ↓
    EDGE
        ↓
    API
        ↓
    AUTH
        ↓
    PAYMENT
        ↓
    PROVIDER

---

# Invariante de Jornada com Privacidade

A rastreabilidade não deverá exigir exposição indevida da identidade do usuário.

---

# Pseudonymous Correlation

Poderá utilizar:

    SESSION_CORRELATION_ID

sem armazenar PII desnecessária.

---

# Invariante de Minimização

Correlação e privacidade deverão coexistir.

---

# Investigation Data Access

Nem todo investigador poderá acessar toda Evidência.

---

# Exemplo

Operador vê:

    ERROR_CLASS
    TRACE_PATH

Mas não:

    SENSITIVE_PAYLOAD

---

# Invariante de Least Privilege Investigativo

Troubleshooting não deverá suspender controles de acesso por padrão.

---

# Break-Glass Access

Em situação crítica...

poderá existir acesso excepcional.

---

# Mas...

deverá possuir:

    REASON
    AUTHORITY
    DURATION
    AUDIT

---

# Invariante de Acesso Extraordinário Governado

Observabilidade não deverá tornar-se caminho lateral para dados restritos.

---

# Evidence Export

Investigações poderão exportar Evidência.

---

# Exemplo

Para:

- auditoria;
- Provider;
- Jurídico;
- pós-mortem.

---

# Invariante de Exportação Governada

A exportação deverá respeitar classificação e Proveniência.

---

# Evidence Bundle de Investigação

Poderá conter:

    INVESTIGATION_ID
    TIME_WINDOW
    OBJECTS
    ALERTS
    SIGNALS
    TRACES
    LOGS
    EVENTS
    HYPOTHESES
    CONCLUSIONS

---

# Invariante de Bundle sem Confundir Fato e Análise

O pacote deverá distinguir:

- Evidência;
- hipótese;
- conclusão.

---

# Reconstruction Confidence

Uma reconstrução poderá possuir:

    CONFIDENCE

---

# Exemplo

    HIGH

quando Timeline está bem suportada.

---

# Ou:

    LOW

quando dados estão incompletos.

---

# Invariante de Investigação Honesta

A ausência de dados deverá reduzir certeza...

não ser preenchida por narrativa conveniente.

---

# Gap in Evidence

Uma investigação poderá registrar:

    EVIDENCE_GAP

---

# Exemplos

    TRACE_MISSING
    LOG_RETENTION_EXPIRED
    PROVIDER_DATA_UNAVAILABLE

---

# Invariante de Lacuna Visível

Ausência de Evidência deverá fazer parte da conclusão.

---

# Evidence Gap como Improvement Input

Uma lacuna poderá gerar:

    OBSERVABILITY_GAP

---

# Isso Pode Alimentar

- Change;
- Service Factory;
- instrumentação;
- novo Probe.

---

# Invariante de Investigação como Feedback

Toda investigação relevante deverá poder melhorar observabilidade futura.

---

# Automatic Correlation

A UNO poderá correlacionar sinais automaticamente.

---

# Exemplo

    12 ALERTS
        ↓
    1 CORRELATED_EVENT

---

# Invariante de Correlação Automatizada Reversível

O operador deverá poder inspecionar os elementos agrupados.

---

# Correlation Confidence

Poderá existir:

    CORRELATION_CONFIDENCE

---

# Invariante de Agrupamento Incerto

Sinais agrupados por modelo probabilístico não deverão parecer relação confirmada.

---

# Agent Investigation

Agentes poderão:

- navegar Telemetria;
- construir Timeline;
- formular hipóteses;
- sugerir causa;
- localizar mudanças;
- comparar baseline.

---

# Agent Investigation Record

Poderá preservar:

    AGENT_ID
    MODEL_VERSION
    QUERY_HISTORY
    EVIDENCE_USED
    HYPOTHESES
    OUTPUT

---

# Invariante de Investigação Cognitiva Auditável

Conclusões de Agentes relevantes deverão ser rastreáveis até Evidência consultada.

---

# Agente não Deve Preencher Lacunas como Fato

Se não houver Log...

não deverá dizer:

> o Serviço reiniciou.

Pode dizer:

> há sinais compatíveis com reinicialização, mas não existe confirmação direta.

---

# Invariante de Linguagem Epistêmica

A forma da resposta deverá refletir qualidade da Evidência.

---

# Human + Agent Investigation

Uma investigação poderá ser colaborativa.

---

# Humano

pode adicionar:

- conhecimento contextual;
- hipótese;
- observação.

---

# Agente

pode:

- buscar;
- correlacionar;
- sintetizar.

---

# Invariante de Colaboração com Proveniência

Contribuições humanas e de Agentes deverão permanecer identificáveis.

---

# Observability Query as Capability

A capacidade de perguntar sobre Telemetria poderá tornar-se Serviço.

---

# Possível Serviço

    OBSERVABILITY_QUERY_SERVICE

---

# Poderá responder:

> mostre comportamento do Serviço antes da falha.

> encontre Traces anormais.

> compare regiões.

---

# Invariante de Query Service Governado

O Serviço deverá respeitar controles de acesso dos dados subjacentes.

---

# Query Result Provenance

Resultados poderão indicar:

    DATA_SOURCES
    TIME_WINDOW
    QUERY
    SAMPLING

---

# Invariante de Resultado Reprodutível

Quando necessário...

uma análise deverá poder ser refeita.

---

# Query Federation Failure

Se um backend estiver indisponível...

o resultado poderá ser parcial.

---

# Exemplo

    METRICS = AVAILABLE
    LOGS = UNAVAILABLE
    TRACES = AVAILABLE

---

# Resultado

    QUERY_COMPLETENESS = PARTIAL

---

# Invariante de Resultado Parcial Explícito

A Plataforma não deverá apresentar resposta incompleta como investigação integral.

---

# Search Timeout

Uma consulta pode atingir timeout.

---

# Invariante de Timeout sem Falsa Ausência

Falhar ao encontrar Evidência por timeout não deverá ser interpretado como:

> Evidência não existe.

---

# Observability Evidence Graph and State

O Evidence Graph poderá alimentar:

    STATE_ASSERTION

---

# Exemplo

    CONSUMER_FAILURE
        +
    TRACE_TIMEOUT
        +
    DEPENDENCY_DEGRADATION

podem apoiar:

    SERVICE_HEALTH = DEGRADED

---

# Invariante de Fronteira com 005

Observabilidade fornece Evidência.

O Modelo de Estado continua governando a conclusão.

---

# Correlação e Incident Management

Quando impacto é significativo...

o Evidence Graph poderá ser associado ao:

    INCIDENT

---

# Invariante de Continuidade de Contexto

A investigação iniciada em Alert não deverá perder Evidências ao evoluir para Incidente.

---

# Alert → Incident Promotion

Poderá preservar:

    ALERT_IDS
    DETECTIONS
    EVIDENCE_BUNDLE
    TIMELINE

---

# Invariante de Linhagem Operacional

Cada estágio deverá preservar contexto produzido anteriormente.

---

# Correlação e Problem Management

Após recuperação...

padrões recorrentes poderão indicar:

    PROBLEM

---

# Exemplo

Cinco Incidentes diferentes possuem mesma assinatura.

---

# Invariante de Recorrência Detectável

Observabilidade histórica deverá permitir identificar padrões entre Incidentes.

---

# Signature

Poderá existir:

    FAILURE_SIGNATURE

---

# Exemplos

- conjunto de Logs;
- sequência de Estados;
- padrão de métricas.

---

# Invariante de Assinatura como Heurística

Uma assinatura semelhante não prova causa idêntica.

---

# Correlação e Change Management

Mudanças poderão ser avaliadas por comportamento antes/depois.

---

# Change Verification

Poderá utilizar:

    PRE_CHANGE_BASELINE
    POST_CHANGE_BEHAVIOR

---

# Invariante de Mudança Verificada

Observabilidade deverá apoiar confirmação de que uma Mudança produziu efeito esperado.

---

# Correlação e Capacity Planning

Padrões históricos poderão revelar:

    SATURATION_PATTERN

---

# Isso Pode Alimentar

    CAPACITY_PLAN

---

# Invariante de Observabilidade como Entrada de Planejamento

Telemetria deverá servir não apenas para reação...

mas também para evolução operacional.

---

# Correlação e Service Factory

Uma assinatura recorrente poderá revelar ausência estrutural.

---

# Exemplo

Todos os Incidentes exigem failover manual.

---

# Pode surgir:

    SERVICE_GAP = AUTOMATED_FAILOVER_COORDINATION

---

# Invariante de Observabilidade como Fonte de Inovação

A análise de Evidência deverá poder gerar Opportunities para novos Serviços.

---

# Reconstrução Operacional

O objetivo mais profundo desta camada será permitir responder:

> o que aconteceu?

---

# E, quando possível:

> em qual ordem?

> em qual escopo?

> quais objetos participaram?

> quais hipóteses são sustentadas?

> o que ainda não sabemos?

---

# Invariante de Reconstrução sem Narrativa Artificial

Uma reconstrução deverá ser tão completa quanto a Evidência permite...

e não mais completa do que ela permite.

---

# Operational Reconstruction Record

Poderá conter:

    RECONSTRUCTION_ID
    SUBJECT
    TIME_WINDOW
    TIMELINE
    EVIDENCE
    CONFIRMED_FACTS
    HYPOTHESES
    UNKNOWNS
    CONFIDENCE

---

# Confirmed Facts

Poderão ser separados de:

    INFERENCES

---

# Invariante de Fato ↔ Inferência

A distinção deverá permanecer visível.

---

# Unknowns

Uma reconstrução madura também deverá registrar:

> o que ainda não conseguimos explicar?

---

# Invariante de Unknown como Resultado Válido

Uma investigação não deverá ser obrigada a inventar resposta completa.

---

# Próxima Dimensão

Com correlação, Evidence Graph, investigação e reconstrução operacional estabelecidos...

o próximo lote deverá aprofundar:

- observabilidade em sistemas distribuídos;
- propagação de contexto;
- boundaries;
- microservices;
- async messaging;
- queues;
- Event-driven systems;
- batch;
- workflows;
- serverless;
- Edge;
- IoT;
- physical systems;
- external Providers;
- black-box Services;
- synthetic monitoring;
- telemetry under partitions;
- delayed signals;
- disconnected operation;
- observabilidade federada entre organizações.

---

# Observabilidade em Sistemas Distribuídos

À medida que a Plataforma UNO cresce...

a Observabilidade deixa de acompanhar apenas processos isolados.

Ela passa a acompanhar sistemas:

- distribuídos;
- assíncronos;
- federados;
- parcialmente conectados;
- compostos por múltiplos Providers;
- com fronteiras organizacionais.

Nesse contexto...

a pergunta:

> O que aconteceu?

torna-se mais difícil.

Porque uma única operação poderá atravessar:

- Serviços;
- filas;
- Eventos;
- regiões;
- dispositivos;
- organizações;
- sistemas externos.

---

# Princípio Fundamental

Em sistemas distribuídos...

não deverá ser presumido que existe:

- um único relógio;
- uma única ordem;
- uma única fonte;
- uma única visão global;
- uma única fronteira operacional.

---

# Invariante de Observabilidade Distribuída

A arquitetura deverá preservar contexto suficiente para reconstruir comportamento mesmo quando a execução atravessar múltiplos componentes.

---

# Propagação de Contexto

Uma operação distribuída poderá transportar contexto observacional.

---

# Exemplos

    TRACE_ID
    CORRELATION_ID
    REQUEST_ID
    OPERATION_ID

---

# Invariante de Context Propagation

O contexto deverá ser propagado apenas quando:

- útil;
- autorizado;
- seguro.

---

# Propagação Excessiva

Pode causar:

- vazamento de dados;
- overhead;
- cardinalidade;
- acoplamento.

---

# Invariante de Minimização Distribuída

A Plataforma deverá transportar apenas o contexto necessário à correlação pretendida.

---

# Microservices

Em arquitetura de microservices...

uma única jornada pode produzir dezenas ou centenas de interações.

---

# Exemplo

    CLIENT
        ↓
    API_GATEWAY
        ↓
    AUTH
        ↓
    ORDER
        ↓
    INVENTORY
        ↓
    PAYMENT
        ↓
    PROVIDER

---

# Desafio

Uma falha no final da cadeia poderá se manifestar como:

- timeout;
- erro;
- retry;
- saturação;
- fila.

---

# Invariante de Visão End-to-End

A Observabilidade deverá permitir seguir a operação através das fronteiras relevantes.

---

# Service Boundary

Cada Serviço deverá possuir identidade observacional clara.

---

# Exemplo

    SERVICE_ID
    SERVICE_VERSION
    INSTANCE_ID

---

# Invariante de Boundary Observável

A transição de uma operação de um Serviço para outro deverá ser detectável quando isso for necessário para investigação.

---

# Comunicação Síncrona

Chamadas síncronas permitem relação temporal relativamente direta.

---

# Exemplo

    SERVICE_A
        ↓ HTTP
    SERVICE_B

---

# Span Parent-Child

Pode representar:

    A_SPAN
        ↓
    B_SPAN

---

# Invariante de Relação Síncrona

A duração downstream poderá ser atribuída ao caminho de execução...

sem assumir automaticamente responsabilidade causal total.

---

# Comunicação Assíncrona

Em sistemas orientados a Eventos...

o produtor e o Consumer podem não executar simultaneamente.

---

# Exemplo

    PRODUCER
        ↓
    QUEUE
        ↓
    CONSUMER

---

# Desafio

O Trace pode atravessar:

- minutos;
- horas;
- dias.

---

# Invariante de Contexto Assíncrono

A correlação deverá sobreviver à ausência de simultaneidade.

---

# Message Context

Uma mensagem poderá carregar:

    MESSAGE_ID
    CORRELATION_ID
    CAUSATION_ID
    TRACE_CONTEXT

---

# Message ID

Identifica a mensagem.

---

# Correlation ID

Relaciona mensagens e ações da mesma operação lógica.

---

# Causation ID

Pode indicar qual Evento originou outro.

---

# Invariante Correlation ↔ Causation

Relacionar e causar deverão permanecer conceitos distintos.

---

# Event-Driven Systems

Eventos podem produzir novos Eventos.

---

# Exemplo

    ORDER_CREATED
        ↓
    PAYMENT_REQUESTED
        ↓
    PAYMENT_CONFIRMED
        ↓
    ORDER_COMPLETED

---

# Event Lineage

A Observabilidade poderá reconstruir:

    EVENT_A
        ↓ caused
    EVENT_B
        ↓ caused
    EVENT_C

---

# Invariante de Linhagem de Evento

Quando a cadeia causal for conhecida...

ela deverá ser preservável.

---

# Fan-Out

Um Evento poderá gerar múltiplos Consumers.

---

# Exemplo

    ORDER_CREATED
        ↓
    BILLING
    NOTIFICATION
    ANALYTICS

---

# Invariante de Fan-Out

A Observabilidade deverá permitir distinguir:

- um Evento;
- múltiplos processamentos derivados.

---

# Fan-In

Vários Eventos podem ser necessários para continuar workflow.

---

# Exemplo

    PAYMENT_CONFIRMED
    INVENTORY_RESERVED
    FRAUD_APPROVED
        ↓
    ORDER_RELEASED

---

# Invariante de Fan-In

A falta de uma entrada deverá ser detectável como parte do Estado do workflow.

---

# Queue Observability

Filas são componentes operacionais importantes.

---

# Sinais

Poderão incluir:

    QUEUE_DEPTH
    OLDEST_MESSAGE_AGE
    INGESTION_RATE
    PROCESSING_RATE
    RETRY_RATE
    DLQ_DEPTH

---

# Invariante de Queue Age

Quantidade de mensagens sozinha não deverá ser suficiente.

Uma fila grande pode estar saudável se throughput acompanhar.

---

# Oldest Message Age

Pode revelar backlog real.

---

# Invariante de Backlog Funcional

A Saúde da fila deverá considerar tempo de processamento necessário à função.

---

# Dead Letter Queue

Mensagens que não puderam ser processadas poderão ir para:

    DLQ

---

# Invariante de DLQ Observável

A existência de DLQ deverá possuir:

- volume;
- idade;
- razão;
- ownership.

---

# Retry Queue

Retries podem mascarar falhas.

---

# Exemplo

Consumer responde com sucesso eventual...

mas após 25 retries.

---

# Invariante de Sucesso Degradado

Resultado final bem-sucedido não deverá necessariamente ocultar esforço excessivo ou risco operacional.

---

# Duplicate Messages

Sistemas assíncronos podem entregar duplicatas.

---

# Invariante de Duplicação Observável

A Observabilidade deverá permitir distinguir:

- mensagens recebidas;
- mensagens processadas;
- duplicatas descartadas.

---

# Message Lag

Poderá existir:

    PRODUCED_AT
    CONSUMED_AT

---

# Lag

    CONSUMED_AT - PRODUCED_AT

---

# Invariante de Latência Assíncrona

A latência do workflow deverá considerar tempo em fila...

não apenas tempo de processamento do Consumer.

---

# Eventual Consistency

Sistemas distribuídos podem convergir depois.

---

# Exemplo

    WRITE_ACCEPTED
    READ_REPLICA_STALE

---

# Invariante de Consistência Contextual

Observabilidade deverá conseguir representar quando um resultado está tecnicamente disponível...

mas ainda não convergiu.

---

# Replication Lag

Poderá existir:

    REPLICATION_LAG

---

# Invariante de Lag como Propriedade Funcional

Quando Freshness for importante...

replication lag deverá influenciar Health ou Risk.

---

# Batch Processing

Sistemas batch possuem dinâmica diferente de request-response.

---

# Exemplos

    STARTED_AT
    COMPLETED_AT
    RECORDS_PROCESSED
    FAILED_RECORDS
    CHECKPOINT

---

# Invariante de Batch Completion

Um batch não deverá ser considerado saudável apenas porque iniciou.

---

# Batch Deadline

Poderá possuir:

    EXPECTED_COMPLETION

---

# Exemplo

Job diário precisa terminar antes:

    06:00

---

# Invariante de Prazo Funcional

Um job ainda executando pode já estar operacionalmente degradado se não houver tempo suficiente para cumprir deadline.

---

# Partial Batch Failure

Parte dos registros pode falhar.

---

# Exemplo

    TOTAL = 1,000,000
    SUCCESS = 999,000
    FAILED = 1,000

---

# Invariante de Parcialidade

A Observabilidade deverá permitir medir qualidade parcial do processamento.

---

# Checkpoint

Long-running jobs podem registrar progresso.

---

# Invariante de Progresso Real

A Plataforma deverá evitar percentuais fictícios quando não houver base real de cálculo.

---

# Workflow Observability

Workflows podem durar muito tempo.

---

# Exemplo

    REQUESTED
        ↓
    APPROVED
        ↓
    EXECUTING
        ↓
    WAITING_EXTERNAL
        ↓
    COMPLETED

---

# Workflow State

Deverá possuir Telemetria própria.

---

# Invariante de Workflow como Objeto

Workflows operacionais relevantes deverão ser observáveis como unidades...

não apenas através dos Serviços que os executam.

---

# Stuck Workflow

Um workflow pode permanecer:

    WAITING

por tempo excessivo.

---

# Invariante de Stuck Detection

A Observabilidade deverá considerar tempo esperado por estágio.

---

# Serverless

Funções serverless podem existir por milissegundos.

---

# Desafio

Não há necessariamente instância persistente.

---

# Sinais Relevantes

Podem incluir:

    INVOCATIONS
    ERRORS
    COLD_STARTS
    DURATION
    THROTTLING
    CONCURRENCY

---

# Invariante de Identidade Lógica

A Observabilidade deverá preservar identidade do Serviço ou função...

mesmo quando instâncias são efêmeras.

---

# Ephemeral Infrastructure

Containers e workloads podem nascer e morrer rapidamente.

---

# Invariante de Telemetria Pós-Vida

A destruição da instância não deverá apagar imediatamente Evidência necessária para investigação.

---

# Instance Identity

Poderá possuir:

    INSTANCE_ID

---

# Mas...

o Serviço deverá continuar identificável acima da instância.

---

# Invariante Serviço ↔ Instância

Telemetria de instância deverá poder ser agregada à identidade do Serviço sem perder granularidade quando necessária.

---

# Autoscaling

O número de instâncias pode variar.

---

# Exemplo

    10 → 100 → 10

---

# Invariante de Escala como Contexto

Mudança de quantidade de instâncias deverá ser considerada ao interpretar:

- CPU;
- throughput;
- erro;
- custo.

---

# Cold Starts

Podem afetar latência.

---

# Invariante de Causa Técnica como Contexto

A Observabilidade deverá permitir correlacionar cold starts com experiência do Consumer.

---

# Edge Systems

Edge possui:

- conectividade intermitente;
- recursos limitados;
- operação local;
- sincronização tardia.

---

# Invariante de Observabilidade Local

O Edge deverá poder manter visão operacional mínima mesmo sem conexão central quando necessário.

---

# Edge Observability Store

Poderá armazenar:

    LOCAL_METRICS
    LOCAL_EVENTS
    LOCAL_ALERTS

---

# Invariante de Retenção Edge

A prioridade deverá considerar armazenamento restrito.

---

# Critical First

Poderá preservar primeiro:

- falhas;
- mudanças;
- Alertas;
- transições críticas.

---

# Invariante de Política de Prioridade

A perda de Telemetria no Edge deverá seguir política conhecida.

---

# IoT

Dispositivos podem possuir:

- bateria;
- conectividade;
- sensor;
- firmware.

---

# Device Telemetry

Poderá incluir:

    BATTERY
    SIGNAL_STRENGTH
    FIRMWARE_VERSION
    SENSOR_HEALTH
    LAST_CONTACT

---

# Invariante de Estado do Dispositivo

O fato de dispositivo estar sem contato não deverá ser interpretado automaticamente como desligado.

---

# Physical Systems

Sistemas físicos podem possuir dinâmica diferente de software.

---

# Exemplos

- temperatura;
- velocidade;
- pressão;
- posição.

---

# Invariante de Sensor + Atuador

Observabilidade deverá permitir correlacionar:

    COMMAND
        ↓
    PHYSICAL_RESPONSE

---

# Exemplo

Comando:

    OPEN_VALVE

Sensor:

    VALVE_POSITION = CLOSED

---

# Resultado

Pode indicar divergência entre:

    DESIRED_STATE
    OBSERVED_STATE

---

# Invariante de Feedback Físico

Quando possível...

ações físicas críticas deverão possuir observação independente de execução do comando.

---

# Sensor Latency

Medições físicas podem possuir atraso.

---

# Invariante de Dinâmica Física

Thresholds deverão considerar velocidade real de mudança do fenômeno observado.

---

# Sensor Noise

Ruído pode provocar falsos Alertas.

---

# Filtros

Poderão utilizar:

- média móvel;
- mediana;
- debounce.

---

# Invariante de Filtragem sem Ocultação

Filtros deverão reduzir ruído...

sem mascarar eventos reais relevantes.

---

# Sensor Fusion

Múltiplos sensores podem medir mesma propriedade.

---

# Invariante de Fusão com Confidence

A síntese deverá considerar:

- calibração;
- qualidade;
- independência.

---

# External Providers

Providers podem funcionar como black box.

---

# A UNO talvez não possua:

- logs internos;
- traces internos;
- infraestrutura.

---

# Observabilidade Externa

Ainda poderá utilizar:

- synthetic probes;
- API status;
- Consumer telemetry;
- SLA data.

---

# Invariante de Black-Box Observability

A ausência de acesso interno não deverá impedir medição da função externa.

---

# Black-Box SLI

Pode perguntar:

> Do ponto de vista da UNO, a função está sendo entregue?

---

# White-Box Telemetry

Quando Provider compartilha dados internos...

eles poderão complementar.

---

# Invariante Black Box ↔ White Box

Telemetria interna do Provider e observação externa deverão permanecer perspectivas distintas.

---

# External Status Page

Um Provider pode publicar:

    OPERATIONAL

---

# Mas...

a UNO pode observar:

    TIMEOUT

---

# Invariante de Status Externo não Absoluto

A declaração pública do Provider não deverá sobrepor automaticamente experiência local.

---

# Provider Telemetry Contract

Poderá definir:

    AVAILABLE_SIGNALS
    FREQUENCY
    LATENCY
    QUALITY
    SCOPE

---

# Invariante de Expectativa Federada

A UNO deverá saber o que pode esperar do Provider.

---

# Missing Provider Telemetry

A ausência pode indicar:

- API indisponível;
- contrato limitado;
- atraso;
- falha do Provider.

---

# Invariante de Ausência Contextual

Silêncio externo deverá ser interpretado conforme contrato observacional.

---

# Synthetic Monitoring of External Services

A UNO poderá testar função externamente.

---

# Exemplo

    DNS_RESOLUTION
    AUTH
    REQUEST
    RESPONSE_VALIDATION

---

# Invariante de Probe Externo

Synthetic Monitoring deverá medir caminho próximo do real Consumer quando possível.

---

# Multi-Vantage Probes

Probes podem executar de várias regiões.

---

# Exemplo

    REGION_A = HEALTHY
    REGION_B = UNAVAILABLE

---

# Invariante de Vantage Point

A localização do Probe deverá fazer parte do contexto.

---

# Network Observability

Problemas podem existir entre objetos saudáveis.

---

# Sinais

Poderão incluir:

    LATENCY
    LOSS
    JITTER
    RETRANSMISSION
    DNS
    ROUTE

---

# Invariante de Caminho de Rede

Disponibilidade dos endpoints não prova Saúde do caminho entre eles.

---

# Path Observability

Quando possível...

poderá identificar:

    SOURCE
    DESTINATION
    PATH

---

# Invariante de Topologia de Rede Contextual

Rotas podem mudar dinamicamente.

---

# DNS Observability

DNS pode ser Dependência crítica.

---

# Exemplos

    RESOLUTION_LATENCY
    FAILURE_RATE
    TTL
    ANSWER

---

# Invariante de Nome ≠ Disponibilidade

Um Serviço pode estar saudável...

mas inacessível por falha de resolução.

---

# Async Provider Callback

Alguns Providers respondem depois via callback.

---

# Exemplo

    REQUEST_SENT
        ↓
    PROVIDER_PROCESSING
        ↓
    CALLBACK_RECEIVED

---

# Invariante de Operação Distribuída Longa

O Trace lógico deverá poder atravessar esse intervalo.

---

# Correlation Token

Poderá relacionar:

    REQUEST
    CALLBACK

---

# Invariante de Correlação sem Expor Segredo

Tokens de correlação não deverão transportar informação sensível desnecessária.

---

# Webhooks

Webhooks podem falhar por:

- destino;
- rede;
- assinatura;
- retry.

---

# Sinais

Poderão incluir:

    DELIVERY_ATTEMPT
    DELIVERY_RESULT
    RETRY_COUNT

---

# Invariante de Entrega Observable

O produtor deverá conseguir distinguir:

    EVENT_CREATED

de:

    EVENT_DELIVERED

---

# Event Broker

Um broker também é componente observável.

---

# Métricas

Poderão incluir:

    PARTITION_LAG
    CONSUMER_LAG
    LEADER_STATE
    REPLICATION_HEALTH

---

# Invariante de Broker como Dependência

A Saúde do broker deverá participar do Grafo Operacional.

---

# Consumer Lag

Um Consumer pode estar:

    RUNNING

mas atrasado.

---

# Invariante de Disponibilidade ≠ Atualidade

Processar mensagens com atraso extremo poderá representar degradação funcional.

---

# Distributed Locks

Locks distribuídos podem afetar workflows.

---

# Sinais

Poderão incluir:

    LOCK_HELD
    LOCK_AGE
    WAITERS

---

# Invariante de Lock Stale

Um lock antigo demais poderá indicar:

    STUCK_OPERATION

---

# Leader Election

Sistemas podem eleger líder.

---

# Observabilidade poderá registrar:

    CURRENT_LEADER
    TERM
    ELECTION_COUNT

---

# Invariante de Election Churn

Muitas eleições em curto período poderão indicar instabilidade.

---

# Consensus Systems

Implementações podem utilizar consenso formal.

---

# Observabilidade poderá medir:

    QUORUM_HEALTH
    COMMIT_LATENCY
    REPLICATION_LAG

---

# Invariante de Estado Derivado do Protocolo

A Engenharia Oficial não deverá exigir algoritmo específico...

mas deverá permitir representar condição relevante do mecanismo utilizado.

---

# Distributed Cache

Caches podem introduzir Freshness.

---

# Sinais

    HIT_RATE
    MISS_RATE
    EVICTIONS
    STALE_READS

---

# Invariante de Cache Health

Hit Rate alto não significa necessariamente correção.

---

# Cache Poisoning / Wrong Data

A função pode responder rapidamente com dado incorreto.

---

# Invariante de Qualidade além de Performance

Observabilidade deverá considerar integridade quando aplicável.

---

# Database Observability

Bases poderão possuir sinais como:

    QUERY_LATENCY
    CONNECTIONS
    LOCKS
    REPLICATION_LAG
    STORAGE
    ERROR_RATE

---

# Invariante de Métricas Internas + Funcionais

A Saúde da base deverá ser interpretada também pela capacidade de sustentar Serviços dependentes.

---

# Storage Systems

Podem possuir:

    CAPACITY
    IOPS
    LATENCY
    DURABILITY
    REPLICATION

---

# Invariante de Capacidade Antecipada

Storage próximo de exaustão deverá poder gerar risco antes da falha.

---

# Data Pipeline

Pipelines de dados podem possuir múltiplas etapas.

---

# Exemplo

    SOURCE
        ↓
    INGEST
        ↓
    TRANSFORM
        ↓
    STORE
        ↓
    SERVE

---

# Invariante de Freshness End-to-End

O dado final poderá estar atrasado mesmo se cada etapa individual parecer ativa.

---

# End-to-End Data Freshness

Poderá medir:

    CURRENT_TIME - SOURCE_EVENT_TIME

---

# Invariante de Freshness Real

O timestamp de ingestão final não deverá substituir origem do dado.

---

# Distributed Telemetry under Partition

Quando a rede se divide...

cada parte poderá manter Telemetria local.

---

# Exemplo

    REGION_A VIEW
    REGION_B VIEW

---

# Invariante de Perspectivas Locais

Nenhuma região deverá alegar visão global completa sem Evidência.

---

# Local Alerting

Cada partição poderá continuar detectando condições.

---

# Depois da Reconexão

Alertas podem ser sincronizados.

---

# Invariante de Timeline Pós-Partição

O histórico deverá preservar tempos originais e Proveniência.

---

# Conflicting Telemetry

Partições podem produzir observações diferentes.

---

# Exemplo

Region A:

    SERVICE = HEALTHY

Region B:

    SERVICE = DEGRADED

---

# Invariante de Conflito Escopado

Ambos podem ser verdadeiros em seus respectivos escopos.

---

# Delayed Signals

A Telemetria pode chegar muito tarde.

---

# Invariante de Atualização Histórica

Sinais tardios deverão enriquecer passado...

sem necessariamente alterar presente.

---

# Out-of-Order Distributed Traces

Spans podem chegar fora de ordem.

---

# Invariante de Reconstrução por Timestamp e Relação

A montagem de Trace não deverá depender apenas da ordem de ingestão.

---

# Missing Span

Um Trace poderá estar incompleto.

---

# Exemplo

    A
    ↓
    ?
    ↓
    C

---

# Invariante de Trace Parcial

A Plataforma deverá reconhecer:

    TRACE_COMPLETENESS = PARTIAL

quando aplicável.

---

# Broken Context Propagation

Um Serviço pode não propagar Trace Context.

---

# Resultado

O Trace parece interrompido.

---

# Invariante de Gap de Instrumentação

A ausência de propagação deverá poder ser identificada como lacuna observacional.

---

# Observability Boundary

Nem toda fronteira permitirá Trace completo.

---

# Exemplos

- terceiro;
- sistema legado;
- organização federada.

---

# Boundary Record

Poderá indicar:

    OBSERVABILITY_BOUNDARY

---

# Invariante de Boundary Explícito

A ausência de detalhe além da fronteira não deverá ser tratada automaticamente como perda acidental.

---

# Federated Observability

Organizações poderão compartilhar:

- Estado;
- Alertas;
- SLIs;
- Eventos;
- Telemetria limitada.

---

# Federated Observability Contract

Poderá definir:

    SHARED_SIGNALS
    GRANULARITY
    FREQUENCY
    CLASSIFICATION
    RETENTION
    AUTHORITY
    REDACTION

---

# Invariante de Federação sem Centralização Obrigatória

Cada organização poderá manter sua própria infraestrutura observacional.

---

# Shared Service State

A organização origem poderá publicar:

    SERVICE_STATE

---

# Organização Consumidora

poderá calcular:

    LOCAL_EXPERIENCE_STATE

---

# Invariante de Dupla Perspectiva

Estado federado e experiência local deverão coexistir.

---

# Federated Correlation ID

Uma operação entre organizações poderá utilizar identificador compartilhado.

---

# Mas...

o identificador deverá ser desenhado para não expor contexto interno indevido.

---

# Invariante de Correlação Federada Minimizada

A Federação deverá compartilhar apenas o necessário.

---

# Cross-Organization Trace

Em alguns contratos...

poderá existir Trace parcial atravessando fronteiras.

---

# Exemplo

    ORG_A_SPAN
        ↓
    FEDERATION_BOUNDARY
        ↓
    ORG_B_SPAN

---

# Invariante de Controle Organizacional

Cada organização deverá decidir quais atributos pode exportar.

---

# Federated Telemetry Delay

Organização externa pode compartilhar Estado com atraso.

---

# Exemplo

    OBSERVED_AT = 10:00
    RECEIVED_AT = 10:08

---

# Invariante de Freshness Federada

OPS deverá considerar latência de compartilhamento na Confidence.

---

# Federated Data Quality

Uma fonte externa poderá possuir:

    QUALITY_PROFILE

---

# Exemplos

    UPDATE_FREQUENCY
    EXPECTED_DELAY
    COVERAGE

---

# Invariante de Qualidade Contratual

A qualidade da Telemetria federada deverá fazer parte do contrato operacional quando necessária.

---

# Observability of Human Processes

Nem toda Dependência é software.

---

# Exemplos

- aprovação manual;
- inspeção;
- contato com Provider;
- despacho físico.

---

# Sinais Humanos

Poderão incluir:

    TASK_ASSIGNED
    TASK_ACKNOWLEDGED
    TASK_COMPLETED

---

# Invariante de Processo Humano Observável

Processos humanos críticos deverão possuir Evidência operacional suficiente sem exigir vigilância excessiva.

---

# Manual Step Delay

Uma etapa manual pode se tornar gargalo.

---

# Invariante de Human Latency

A latência humana deverá poder ser representada quando ela fizer parte da entrega operacional.

---

# Observability of Agents

Agentes também são participantes distribuídos.

---

# Agent Telemetry

Poderá incluir:

    AGENT_ID
    TASK
    START
    END
    TOOL_CALLS
    RESULT
    CONFIDENCE
    POLICY_DECISIONS

---

# Invariante de Agente Observável

A ação de um Agente deverá produzir contexto suficiente para reconstrução quando consequência justificar.

---

# Agent-to-Agent Interaction

Agentes podem delegar.

---

# Exemplo

    AGENT_A
        ↓
    AGENT_B
        ↓
    SERVICE

---

# Invariante de Linhagem Cognitiva

Delegação deverá preservar cadeia de responsabilidade e Proveniência quando relevante.

---

# Agent Failure

Um Agente pode:

- timeout;
- produzir erro;
- interpretar incorretamente;
- perder contexto.

---

# Invariante de Falha Cognitiva Representável

A Observabilidade deverá permitir distinguir falha de Agente de falha do Serviço que ele tentou operar.

---

# Agent Confidence Telemetry

Confidence pode ser emitida.

---

# Mas...

não deverá ser confundida com medição objetiva.

---

# Invariante de Confidence Cognitiva Tipada

A semântica da confiança deverá ser preservada.

---

# Observability across Physical + Digital

Uma Missão pode atravessar:

    SENSOR
        ↓
    EDGE
        ↓
    CLOUD
        ↓
    HUMAN
        ↓
    PHYSICAL_ACTION

---

# Invariante de Cadeia Ciberfísica

A UNO deverá conseguir correlacionar os diferentes domínios quando o resultado operacional depender da cadeia completa.

---

# Digital Command vs Physical Outcome

Exemplo:

    COMMAND_SENT = TRUE

não significa:

    PHYSICAL_ACTION_COMPLETED = TRUE

---

# Invariante de Resultado Observável

Quando possível...

a conclusão deverá depender de Evidência do efeito real.

---

# Observability as Distributed Knowledge

Em sistemas grandes...

nenhum componente possui necessariamente visão completa.

---

# Cada Fonte Possui Perspectiva

    LOCAL_VIEW

---

# A UNO poderá construir:

    SYNTHESIZED_VIEW

---

# Mas...

essa síntese deverá preservar:

- origem;
- atraso;
- escopo;
- confiança.

---

# Invariante de Conhecimento Distribuído

A visão global deverá ser tratada como composição de perspectivas...

não como conhecimento instantâneo absoluto.

---

# Próxima Dimensão

Com a Observabilidade em sistemas distribuídos, assíncronos, Edge, físicos e federados estabelecida...

o próximo lote deverá aprofundar:

- retenção e gestão de Telemetria;
- hot, warm e cold storage;
- índices;
- custo;
- compactação;
- downsampling;
- arquivamento;
- Evidence preservation;
- imutabilidade;
- legal hold;
- privacidade;
- minimização;
- redaction;
- acesso;
- multi-tenancy;
- segregação;
- auditoria;
- destruição;
- políticas por Criticidade;
- relação entre Telemetria, Evidência e memória operacional.

---

# Retenção, Memória Operacional e Governança da Telemetria

Com a Observabilidade distribuída estabelecida...

OPS precisa aprofundar outra responsabilidade essencial:

> Por quanto tempo a Telemetria deve existir?

A resposta não poderá ser:

> para sempre.

Nem:

> o mínimo possível.

Telemetria possui valor...

mas também possui:

- custo;
- sensibilidade;
- volume;
- risco;
- obrigação;
- valor histórico.

Por isso...

a UNO deverá tratar retenção como decisão arquitetural e de Governança.

---

# Princípio Fundamental

Nem toda Telemetria possui o mesmo valor ao longo do tempo.

Um Trace detalhado pode ser extremamente útil por alguns dias.

Uma Evidência crítica de Incidente pode precisar existir por anos.

Uma métrica agregada pode continuar útil muito depois do dado bruto.

---

# Invariante de Retenção Contextual

A retenção deverá considerar:

- tipo de Telemetria;
- Criticidade;
- investigação;
- auditoria;
- contrato;
- compliance;
- custo;
- privacidade;
- memória operacional.

---

# Retention Policy

Uma política poderá definir:

    TELEMETRY_TYPE
    HOT_RETENTION
    WARM_RETENTION
    COLD_RETENTION
    ARCHIVAL_POLICY
    DELETION_POLICY

---

# Hot Storage

Representa camada de acesso rápido.

---

# Pode ser utilizada para:

- operação atual;
- troubleshooting;
- Detecção;
- Alerting;
- queries frequentes.

---

# Exemplo

    HOT_RETENTION = 7 DAYS

---

# Warm Storage

Pode preservar dados para:

- investigação recente;
- comparação;
- análise histórica.

---

# Exemplo

    WARM_RETENTION = 90 DAYS

---

# Cold Storage

Pode preservar dados de acesso raro.

---

# Exemplos

- auditoria;
- investigação antiga;
- análise histórica;
- obrigação contratual.

---

# Invariante de Camadas

A mudança de camada não deverá alterar o significado do dado.

---

# Storage Tier

Poderá existir:

    HOT
    WARM
    COLD
    ARCHIVE

---

# Invariante de Recuperabilidade

Se a política declara que determinado dado está retido...

ele deverá poder ser recuperado dentro das condições prometidas.

---

# Retrieval Time

Dados frios podem possuir maior tempo de recuperação.

---

# Exemplo

    HOT = seconds
    COLD = hours

---

# Invariante de Expectativa de Recuperação

OPS deverá saber se determinada Evidência histórica está imediatamente disponível ou precisa ser restaurada.

---

# Retenção por Tipo

Uma política poderá definir:

    METRICS
    LOGS
    TRACES
    EVENTS

com períodos diferentes.

---

# Exemplo

    METRICS_RAW = 30d
    METRICS_AGGREGATED = 2y
    LOGS = 90d
    TRACES = 14d
    CRITICAL_EVENTS = 7y

---

# Invariante de Política Tipada

A retenção deverá refletir valor informacional de cada classe.

---

# Retenção por Criticidade

Serviços críticos poderão exigir maior memória.

---

# Exemplo

    CRITICAL_SERVICE_LOGS = 1y

enquanto:

    EXPERIMENTAL_SERVICE_LOGS = 14d

---

# Invariante de Criticidade sem Acúmulo Ilimitado

Maior Criticidade pode justificar retenção maior...

mas não elimina necessidade de minimização.

---

# Retenção por Tenant

Em multi-tenancy...

políticas poderão variar.

---

# Exemplo

    TENANT_A = 30d
    TENANT_B = 1y

---

# Invariante de Isolamento de Retenção

A política de um tenant não deverá alterar silenciosamente a de outro.

---

# Retenção por Jurisdição

Alguns dados podem possuir exigências territoriais ou temporais específicas.

---

# Invariante de Política Jurídica Separada

OPS deverá aplicar a política definida...

sem inferir por conta própria obrigações legais não registradas.

---

# Retenção por Contrato

Um Provider ou Consumer pode possuir exigência específica.

---

# Exemplo

    SLA_EVIDENCE_RETENTION = 24 MONTHS

---

# Invariante de Retenção Contratual

Compromissos externos deverão ser representados explicitamente.

---

# Retenção por Valor Investigativo

Alguns dados raros possuem alto valor.

---

# Exemplo

    SECURITY_CRITICAL_EVENT

pode ser mantido por período maior.

---

# Invariante de Evento Crítico

Eventos de alta consequência poderão possuir política especial.

---

# Downsampling

Métricas históricas poderão perder resolução progressivamente.

---

# Exemplo

Primeiros sete dias:

    10s RESOLUTION

Depois:

    1m

Depois de um ano:

    1h

---

# Invariante de Resolução Conhecida

Queries históricas deverão saber a granularidade disponível.

---

# Downsampling não Deve Inventar Precisão

Se o histórico possui pontos horários...

a interface não deverá aparentar detalhe por minuto.

---

# Invariante de Honestidade Temporal

A resolução da apresentação deverá respeitar a resolução do dado.

---

# Aggregation

Dados brutos poderão ser convertidos em agregados.

---

# Exemplos

    COUNT
    MIN
    MAX
    AVERAGE
    PERCENTILE
    DISTRIBUTION

---

# Invariante de Agregação Matemática Correta

A compactação deverá respeitar semântica do dado.

---

# Raw Data

O dado original poderá ser descartado após período definido.

---

# Aggregate Data

Pode permanecer.

---

# Invariante Raw ↔ Aggregate

Um agregado não deverá ser tratado como substituto perfeito do dado bruto.

---

# Exemplars Preservation

Mesmo após agregação...

alguns Exemplars poderão ser preservados.

---

# Exemplo

Traces representativos de:

- falhas críticas;
- caudas de latência;
- eventos raros.

---

# Invariante de Exemplar Histórico

Amostras preservadas deverão possuir relação clara com o agregado original.

---

# Trace Retention

Traces possuem grande volume.

---

# Estratégias

Poderão incluir:

- sampling;
- tail sampling;
- retenção diferenciada;
- preservação de erros.

---

# Invariante de Trace Crítico

Traces associados a Incidentes ou Evidências relevantes poderão receber retenção ampliada.

---

# Log Retention

Logs podem possuir níveis.

---

# Exemplo

    DEBUG = 7d
    INFO = 30d
    ERROR = 180d

---

# Mas...

severity não deverá ser única base.

---

# Invariante de Conteúdo Relevante

Um Log `INFO` pode possuir valor investigativo maior que um `ERROR`.

---

# Event Retention

Eventos estruturados críticos poderão possuir memória longa.

---

# Por quê

Eventos normalmente possuem:

- significado;
- identidade;
- temporalidade;
- contexto.

---

# Invariante de Evento como Memória

Eventos de domínio ou operação podem formar parte da memória institucional.

---

# Telemetry Archive

Dados poderão ser arquivados.

---

# Archive Record

Poderá conter:

    ARCHIVE_ID
    DATA_CLASS
    TIME_RANGE
    STORAGE_LOCATION
    RETENTION_UNTIL
    INTEGRITY

---

# Invariante de Arquivo Rastreável

A Plataforma deverá saber onde determinado histórico foi arquivado.

---

# Compression

Arquivos poderão ser comprimidos.

---

# Invariante de Compressão Reversível

Quando o dado precisar ser recuperado...

a compressão não deverá inviabilizar sua leitura.

---

# Evidence Preservation

Nem toda Telemetria precisa ser tratada como Evidência formal.

---

# Mas...

alguns dados poderão ser promovidos para:

    EVIDENCE

---

# Exemplo

Durante Incidente crítico...

um subconjunto de:

- logs;
- traces;
- métricas;
- Events;

pode formar um:

    EVIDENCE_BUNDLE

---

# Invariante Telemetria ↔ Evidência

Telemetria é potencial matéria-prima.

Evidência representa dado preservado e contextualizado para sustentar determinada afirmação ou análise.

---

# Evidence Promotion

Poderá existir processo:

    TELEMETRY
        ↓
    SELECT
        ↓
    CONTEXTUALIZE
        ↓
    PRESERVE
        ↓
    EVIDENCE

---

# Invariante de Promoção Rastreável

A Evidência deverá manter referência à origem.

---

# Evidence Bundle

Poderá conter:

    BUNDLE_ID
    SUBJECT
    TIME_RANGE
    SOURCE_REFS
    CREATED_AT
    CREATED_BY
    INTEGRITY
    CLASSIFICATION

---

# Invariante de Bundle Imutável quando Necessário

Alguns pacotes poderão exigir proteção contra alteração.

---

# Imutabilidade

Imutabilidade não deverá ser aplicada universalmente.

---

# Pode ser útil para:

- auditoria;
- Incidente;
- segurança;
- PI;
- contrato.

---

# Invariante de Imutabilidade Proporcional

O custo e rigidez da imutabilidade deverão acompanhar valor probatório.

---

# WORM Storage

Uma implementação poderá utilizar:

    WRITE_ONCE_READ_MANY

---

# Mas...

a Engenharia Oficial não deverá exigir tecnologia específica.

---

# Invariante de Tecnologia Aberta

A semântica de preservação é obrigatória...

o mecanismo é substituível.

---

# Hash de Integridade

Poderá existir:

    CONTENT_HASH

---

# Assinatura

Em alguns contextos:

    DIGITAL_SIGNATURE

---

# Invariante de Integridade ≠ Autenticidade Total

Um hash demonstra integridade relativa ao conteúdo conhecido...

não necessariamente identidade da fonte.

---

# Trusted Source

Autenticidade poderá depender de:

- identidade;
- assinatura;
- cadeia de confiança.

---

# Invariante de Proveniência Criptográfica Contextual

Mecanismos fortes poderão ser utilizados quando consequência justificar.

---

# Legal Hold

Alguns dados poderão receber instrução de preservação excepcional.

---

# Conceitualmente:

    RETENTION_OVERRIDE = HOLD

---

# Invariante de Hold Governado

Um Hold deverá possuir:

    AUTHORITY
    REASON
    SCOPE
    STARTED_AT

---

# Hold não Deverá Ser Permanente por Acidente

Quando aplicável...

deverá existir revisão ou condição de término.

---

# Invariante de Exceção Revisável

Políticas excepcionais deverão possuir Governança.

---

# Deletion Policy

Ao final da retenção...

dados poderão ser destruídos.

---

# Invariante de Destruição Controlada

A expiração não deverá causar destruição quando existir Hold válido.

---

# Deletion Record

Poderá existir:

    DATA_CLASS
    TIME_RANGE
    DELETED_AT
    POLICY
    EXECUTED_BY

---

# Invariante de Destruição Evidenciável

Quando necessário...

deverá ser possível demonstrar que determinada política de eliminação foi executada.

---

# Secure Deletion

Alguns dados poderão exigir mecanismo apropriado de destruição.

---

# Invariante de Tecnologia Contextual

A Engenharia Oficial não deverá presumir que apagar índice é equivalente a destruir dado físico.

---

# Backups

Dados apagados do sistema primário podem permanecer em backup.

---

# Invariante de Retenção em Cópias

A política deverá considerar réplicas e backups quando necessário.

---

# Backup Retention

Poderá possuir política própria.

---

# Invariante de Não Contradição

A política de backup não deverá transformar retenção de 30 dias em retenção prática indefinida sem intenção explícita.

---

# Privacy

Telemetria pode conter dados pessoais.

---

# Invariante de Minimização

A Plataforma deverá coletar apenas aquilo que possui valor operacional legítimo.

---

# Data Minimization

Poderá envolver:

- remover;
- agregar;
- pseudonimizar;
- tokenizar.

---

# Invariante de Finalidade

Dados coletados para Observabilidade não deverão ser reutilizados silenciosamente para finalidade incompatível.

---

# PII Detection

Pipelines poderão detectar campos sensíveis.

---

# Exemplo

    EMAIL
    PHONE
    DOCUMENT_ID
    IP_ADDRESS

---

# Invariante de Classificação Automatizada Assistida

Detecção automática poderá ajudar...

mas não deverá ser considerada perfeita.

---

# Redaction

Poderá remover parte do dado.

---

# Exemplo

    token=abc123

vira:

    token=[REDACTED]

---

# Invariante de Redaction antes da Replicação

Sempre que possível...

dados sensíveis deverão ser tratados próximo à origem.

---

# Masking

Pode preservar formato parcial.

---

# Exemplo

    123456789

vira:

    ******789

---

# Tokenization

Pode substituir valor por token.

---

# Invariante de Técnica Contextual

Redaction, masking e tokenization possuem propriedades diferentes...

e deverão ser utilizadas conforme necessidade.

---

# Secret Leakage

Logs podem conter:

- API keys;
- passwords;
- access tokens;
- private keys.

---

# Invariante de Segredo Nunca Intencional

Credenciais não deverão ser tratadas como Telemetria legítima.

---

# Secret Scanner

Poderá existir detecção preventiva.

---

# Invariante de Resposta a Vazamento

Quando segredo for observado...

a ação poderá incluir:

- remover;
- revogar;
- rotacionar;
- investigar.

---

# Telemetry Classification

Uma unidade poderá possuir:

    DATA_CLASSIFICATION

---

# Exemplos

    PUBLIC
    INTERNAL
    RESTRICTED
    CONFIDENTIAL

---

# Invariante de Classificação Herdável

Alguns atributos poderão elevar classificação de todo registro.

---

# Exemplo

Um Log normalmente interno...

passa a conter dado confidencial.

---

# Resultado

    CLASSIFICATION = CONFIDENTIAL

---

# Invariante de Classificação pelo Conteúdo

A classificação não deverá depender apenas do tipo de Telemetria.

---

# Access Control

Acesso deverá respeitar:

- identidade;
- papel;
- necessidade;
- escopo;
- classificação.

---

# Invariante de Least Privilege

Operadores deverão receber acesso suficiente para operar...

não necessariamente acesso irrestrito.

---

# Attribute-Level Access

Alguns campos podem ser ocultos.

---

# Exemplo

Operador vê:

    ERROR_TYPE
    LATENCY

mas não:

    CUSTOMER_PAYLOAD

---

# Invariante de Visibilidade Granular

A Plataforma deverá permitir restrição proporcional quando tecnicamente necessária.

---

# Tenant Isolation

Telemetria multi-tenant deverá preservar separação.

---

# Invariante de Não Vazamento Cross-Tenant

Um Consumer não deverá acessar dados observacionais de outro sem autoridade.

---

# Shared Infrastructure Metrics

Algumas métricas são compartilhadas.

---

# Exemplo

    HOST_CPU

---

# Mas...

atribuir uso por tenant pode exigir modelo separado.

---

# Invariante de Agregado Compartilhado

Métricas comuns deverão ser expostas de forma que não revelem informação indevida.

---

# Query Authorization

Cada consulta poderá ser autorizada.

---

# Exemplo

    USER
        ↓
    QUERY
        ↓
    POLICY
        ↓
    ALLOWED_SCOPE

---

# Invariante de Consulta Governada

A camada de Observabilidade não deverá ignorar controles só porque o backend permite acesso.

---

# Break-Glass

Acesso extraordinário poderá ser permitido.

---

# Deverá possuir:

    REASON
    APPROVER
    START
    END
    AUDIT

---

# Invariante de Acesso Emergencial Temporal

Break-glass não deverá tornar-se privilégio permanente.

---

# Audit of Observability Access

Consultas a dados sensíveis poderão ser auditadas.

---

# Audit Record

Poderá conter:

    ACTOR
    QUERY
    DATA_SCOPE
    TIME
    PURPOSE

---

# Invariante de Auditabilidade Proporcional

Nem toda consulta precisa de auditoria detalhada...

mas acessos sensíveis poderão exigir.

---

# Query Privacy

Uma query também pode revelar interesse sensível.

---

# Exemplo

Buscar repetidamente determinado Consumer.

---

# Invariante de Meta-Dado Sensível

A própria atividade de consulta poderá precisar de proteção.

---

# Multi-Tenant Storage

Os dados poderão ser:

- fisicamente separados;
- logicamente separados.

---

# Invariante de Isolamento sem Prescrição

A Engenharia Oficial define a propriedade...

não uma única arquitetura física.

---

# Data Residency

Telemetria de determinados tenants pode precisar permanecer em região específica.

---

# Invariante de Roteamento por Residência

Pipelines deverão respeitar política de localização.

---

# Cross-Region Replication

Replicar dados pode violar residência.

---

# Invariante de Replicação Governada

Redundância observacional deverá respeitar limites de dados.

---

# Encryption

Telemetria sensível poderá ser protegida:

    IN_TRANSIT
    AT_REST

---

# Key Management

Chaves também são objetos operacionais.

---

# Invariante de Criptografia Operável

Criptografia que impede troubleshooting legítimo pode exigir desenho de acesso controlado.

---

# Memory of Operations

A retenção também sustenta memória organizacional.

---

# Exemplos

Histórico permite responder:

> este padrão já ocorreu?

> qual foi a última vez?

> como recuperamos?

> o problema é recorrente?

---

# Invariante de Memória como Capacidade

Observabilidade histórica deverá alimentar:

- Incident Management;
- Problem Management;
- Capacity Planning;
- Service Improvement.

---

# Operational Memory

Poderá combinar:

    TELEMETRY
    EVENTS
    INCIDENTS
    CHANGES
    STATE_HISTORY
    RUNBOOKS

---

# Invariante Telemetria não é Toda a Memória

Dados observacionais são uma parte da memória...

não substituem conhecimento documentado e decisões.

---

# Long-Term Trends

Métricas agregadas poderão revelar:

- crescimento;
- sazonalidade;
- deterioração.

---

# Invariante de Tendência Histórica

Downsampling deverá preservar sinais suficientes para planejamento quando esse for objetivo.

---

# Forensic Preservation

Alguns Incidentes poderão exigir preservação detalhada imediata.

---

# Forensic Snapshot

Poderá capturar:

    LOGS
    MEMORY_METADATA
    NETWORK_EVENTS
    CONFIGURATION
    STATE
    TIMELINE

---

# Invariante de Coleta Forense Governada

Coleta ampliada deverá respeitar:

- autoridade;
- privacidade;
- integridade.

---

# Evidence Freeze

Durante investigação...

determinados dados poderão ser protegidos contra expiração automática.

---

# Invariante de Freeze Escopado

A preservação deverá abranger apenas o necessário.

---

# Telemetry Integrity Monitoring

A própria Telemetria pode ser alterada ou perdida.

---

# Indicadores

Poderão incluir:

    RECORD_COUNT
    HASH_CHECK
    REPLICATION_STATUS
    MISSING_SEGMENTS

---

# Invariante de Integridade Observável

Sistemas de Evidência crítica deverão poder detectar corrupção quando necessário.

---

# Storage Corruption

Um store pode possuir dados incompletos.

---

# Invariante de Store Health

Saúde do armazenamento de Observabilidade deverá ser monitorada.

---

# Index Failure

Os dados podem existir...

mas não serem pesquisáveis.

---

# Resultado

    DATA_AVAILABLE = TRUE
    QUERYABILITY = DEGRADED

---

# Invariante de Acessibilidade ≠ Existência

Ter dados armazenados não significa conseguir utilizá-los operacionalmente.

---

# Retention Failure

Uma política pode não ser executada.

---

# Exemplos

- dados apagados cedo demais;
- dados mantidos demais;
- Hold ignorado.

---

# Invariante de Compliance Operacional

A execução de políticas de retenção também deverá ser observável.

---

# Retention Job Health

Poderá possuir:

    LAST_RUN
    DELETED_COUNT
    FAILED_COUNT

---

# Invariante de Automação Administrativa Observável

Jobs de retenção não deverão operar como caixas-pretas.

---

# Cost of Retention

Memória custa.

---

# Custos

Podem incluir:

    STORAGE
    INDEXING
    REPLICATION
    EGRESS
    QUERY

---

# Invariante de Custo Visível

A UNO deverá conseguir compreender custo de retenção por:

- Serviço;
- tenant;
- tipo de Telemetria.

---

# Cost Allocation

Poderá existir:

    OBSERVABILITY_COST

---

# Invariante de Chargeback Opcional

Medir custo não implica necessariamente cobrar Consumer.

---

# Optimization

A Plataforma poderá ajustar:

- sampling;
- retenção;
- tiering;
- indexação.

---

# Invariante de Otimização sem Perder Garantias

Redução de custo não deverá violar:

- Evidência necessária;
- SLO;
- contrato;
- investigação.

---

# Indexing Strategy

Nem todo campo precisa ser indexado.

---

# Invariante de Índice Orientado à Pergunta

Campos de busca deverão refletir investigações reais.

---

# Full-Text Search

Pode ser útil em Logs.

---

# Structured Search

Pode ser mais confiável para campos canônicos.

---

# Invariante de Busca Híbrida

A Plataforma poderá combinar texto e estrutura.

---

# Schema Evolution in Archive

Dados antigos podem utilizar schema anterior.

---

# Invariante de Leitura Histórica

Ferramentas de consulta deverão conseguir interpretar versões antigas ou preservar conversores apropriados.

---

# Archive Migration

Um backend poderá ser substituído.

---

# Invariante de Portabilidade

Trocar ferramenta não deverá exigir perder memória histórica valiosa.

---

# Export Format

Poderão existir formatos portáveis.

---

# Invariante de Vendor Independence

A memória operacional não deverá ficar irrecuperavelmente presa a um único Provider.

---

# Federated Retention

Organizações diferentes podem manter cópias diferentes.

---

# Exemplo

Org A:

    30d

Org B:

    1y

---

# Invariante de Política por Organização

Cada parte deverá conhecer responsabilidade sobre retenção de seus dados.

---

# Shared Evidence

Um Evidence Bundle federado pode possuir referências em múltiplas organizações.

---

# Invariante de Evidência Distribuída

A Plataforma deverá poder preservar Proveniência mesmo sem centralizar todos os bytes.

---

# Reference Preservation

Um bundle poderá apontar:

    SOURCE_ORG
    RESOURCE_ID
    HASH

---

# Invariante de Referência Resolúvel

Uma referência histórica deverá indicar quando o recurso original deixou de existir.

---

# Missing Historical Evidence

Dados podem expirar antes de investigação.

---

# Resultado

    EVIDENCE_UNAVAILABLE_DUE_TO_RETENTION

---

# Invariante de Ausência Explicada

A Plataforma deverá distinguir:

- nunca existiu;
- foi perdido;
- foi expirado por política;
- está inacessível.

---

# Retention Gap

Incidentes podem revelar que retenção era curta demais.

---

# Isso Pode Gerar:

    OBSERVABILITY_GAP

---

# Invariante de Feedback de Retenção

Políticas deverão poder evoluir com aprendizado operacional.

---

# Over-Retention

Também pode existir retenção excessiva.

---

# Consequências

- custo;
- risco;
- privacidade;
- exposição.

---

# Invariante de Dívida de Retenção

Manter dados sem propósito deverá poder ser tratado como dívida operacional.

---

# Telemetry Lifecycle

A própria Telemetria poderá possuir Lifecycle.

---

# Exemplo

    CREATED
        ↓
    INGESTED
        ↓
    HOT
        ↓
    WARM
        ↓
    COLD
        ↓
    EXPIRED
        ↓
    DELETED

---

# Invariante de Lifecycle Tipado

Esse Lifecycle pertence à Telemetria...

não deverá ser confundido com Lifecycle de Serviço.

---

# Evidence Lifecycle

Evidência formal poderá possuir:

    CREATED
    PRESERVED
    HELD
    RELEASED
    ARCHIVED

---

# Invariante de Evidência Independente

A Evidência poderá sobreviver muito além da Telemetria operacional original.

---

# Telemetry Lineage

Transformações podem produzir múltiplas versões.

---

# Exemplo

    RAW_LOG
        ↓ redaction
    SANITIZED_LOG
        ↓ aggregation
    ERROR_SUMMARY

---

# Invariante de Linhagem de Transformação

A Plataforma deverá saber de onde um agregado veio quando necessário.

---

# Data Provenance

Poderá conter:

    SOURCE
    INGESTED_BY
    TRANSFORMED_BY
    STORED_AT

---

# Invariante de Proveniência End-to-End

A cadeia de manipulação deverá ser preservável proporcionalmente à importância.

---

# Retention by Evidence Value

Durante Incidente...

uma regra poderá elevar retenção de dados relacionados.

---

# Exemplo

    NORMAL_TRACE_RETENTION = 14d
    INCIDENT_TRACE_RETENTION = 1y

---

# Invariante de Promoção Temporal

A elevação deverá ocorrer antes da expiração do dado original.

---

# Automated Evidence Capture

Ao declarar Incidente...

a Plataforma poderá congelar janela:

    T-30m
    T+2h

---

# Invariante de Janela de Evidência

A captura automática deverá ser configurada conforme tipo de Incidente.

---

# Pre-Incident Data

Dados anteriores ao Incidente são frequentemente essenciais.

---

# Invariante de Buffer Histórico

Retenção curta demais poderá impedir compreender causa anterior à Detecção.

---

# Circular Buffer

Sistemas limitados poderão manter janela móvel local.

---

# Exemplo

    LAST_30_MINUTES

---

# Em Evento Crítico

o buffer pode ser congelado.

---

# Invariante de Edge Forensics

Dispositivos limitados poderão preservar contexto pré-falha através de buffers circulares.

---

# Observability Memory Index

Em maturidade elevada...

a UNO poderá indexar memória operacional por:

    SERVICE
    INCIDENT
    CHANGE
    TIME
    FAILURE_SIGNATURE

---

# Invariante de Memória Navegável

Histórico deverá ser encontrável...

não apenas armazenado.

---

# Semantic Search over Operational Memory

Agentes poderão buscar:

> tivemos algo parecido?

---

# Poderão encontrar:

- Incidentes;
- Traces;
- padrões;
- mudanças.

---

# Invariante de Busca Cognitiva com Proveniência

Resultados semânticos deverão apontar para fontes reais.

---

# Observability Memory and Agents

Agentes poderão utilizar memória para:

- comparar;
- explicar;
- sugerir;
- detectar recorrência.

---

# Mas...

não deverão transformar similaridade em identidade causal.

---

# Invariante de Analogia Prudente

> parece semelhante

não significa:

> é o mesmo problema.

---

# Operational Memory as Institutional Asset

A memória observacional pode tornar-se ativo valioso.

---

# Ela permite:

- reduzir tempo de investigação;
- aprender padrões;
- melhorar arquitetura;
- treinar automações.

---

# Invariante de Memória Governada

Valor estratégico não elimina obrigações de:

- privacidade;
- retenção;
- Segurança.

---

# Próxima Dimensão

Com retenção, memória, Evidência, privacidade e Governança da Telemetria estabelecidas...

o próximo lote deverá aprofundar:

- observabilidade da própria plataforma de Observabilidade;
- self-monitoring;
- pipeline SLOs;
- ingestion lag;
- drop rate;
- collector health;
- query health;
- storage health;
- detection health;
- coverage;
- blind spots;
- observability readiness;
- observability maturity;
- observability debt;
- testing da instrumentação;
- synthetic validation;
- chaos de Observabilidade;
- continuidade da percepção operacional;
- failover da própria Observabilidade.

---

# Observabilidade da Própria Observabilidade

Uma Plataforma que depende de Observabilidade para compreender seu Estado...

também precisa compreender o Estado da própria Observabilidade.

Se a Telemetria parar de chegar...

se Collectors falharem...

se o pipeline atrasar...

se consultas deixarem de funcionar...

a UNO poderá perder a capacidade de perceber sua própria realidade operacional.

Por isso...

a Observabilidade deverá ser:

**auto-observável.**

---

# Princípio Fundamental

A ausência de Alertas não deverá ser interpretada automaticamente como:

> tudo está bem.

Pode significar:

> o sistema responsável por detectar problemas falhou.

---

# Invariante de Meta-Observabilidade

A Plataforma deverá observar:

- Collectors;
- Pipelines;
- Gateways;
- Stores;
- Query Engines;
- Detectors;
- Alerting;
- Federation Links.

---

# Cadeia da Observabilidade

Conceitualmente:

    SOURCE
        ↓
    COLLECTOR
        ↓
    INGESTION
        ↓
    PROCESSING
        ↓
    STORAGE
        ↓
    QUERY
        ↓
    DETECTION
        ↓
    ALERTING

Cada estágio poderá falhar independentemente.

---

# Invariante de Falha Localizável

OPS deverá conseguir determinar em qual estágio a percepção operacional foi degradada.

---

# Observability Health

A capacidade de Observabilidade poderá possuir:

    HEALTH_STATE

---

# Exemplos

    SAUDAVEL
    DEGRADADO
    CRITICO
    INDISPONIVEL
    DESCONHECIDO

---

# Invariante de Reuso Semântico

A Saúde da Observabilidade deverá utilizar o Modelo de Estado oficial estabelecido em `005`.

---

# Collector Health

Collectors poderão possuir sinais como:

    RUNNING
    EXPORT_ERRORS
    QUEUE_DEPTH
    BUFFER_USAGE
    LAST_SUCCESSFUL_EXPORT

---

# Invariante de Collector Observável

Um Collector não deverá depender apenas de si mesmo para declarar Saúde.

---

# External Check

Quando necessário...

outro mecanismo poderá verificar:

    COLLECTOR_HEARTBEAT

---

# Invariante de Autoatestação Limitada

A fonte observada não deverá ser sempre a única fonte de sua própria condição.

---

# Collector Coverage

A Plataforma poderá perguntar:

> quais objetos deveriam estar enviando Telemetria através deste Collector?

---

# Coverage Gap

Se 100 Serviços eram esperados...

mas apenas 70 aparecem:

    COVERAGE = 70%

---

# Invariante de Cobertura Esperada

A Observabilidade deverá possuir noção de:

    EXPECTED_SOURCES

quando necessário.

---

# Source Inventory

Poderá derivar do Catálogo.

---

# Exemplo

    CRITICAL_SERVICES_EXPECTED = 42
    CRITICAL_SERVICES_REPORTING = 40

---

# Resultado

    OBSERVABILITY_COVERAGE_GAP = 2

---

# Invariante Catálogo ↔ Cobertura

O Catálogo poderá informar o que deveria ser observável.

O pipeline informa o que realmente está sendo observado.

---

# Missing Instrumentation

Um Serviço pode estar ativo...

mas sem Telemetria necessária.

---

# Resultado

    OBSERVABILITY_READINESS = INSUFFICIENT

---

# Invariante de Serviço Ativo sem Cegueira

Um Serviço crítico não deverá ser considerado plenamente operacionalmente pronto se não puder ser observado de maneira suficiente.

---

# Ingestion Health

A ingestão poderá possuir:

    RECORDS_RECEIVED
    RECORDS_REJECTED
    INGESTION_RATE
    INGESTION_ERRORS
    INGESTION_LAG

---

# Ingestion Lag

Representa diferença entre:

    OBSERVED_AT

e:

    INGESTED_AT

quando aplicável.

---

# Invariante de Lag Observável

A Plataforma deverá saber quando a Telemetria está chegando tarde demais para uso operacional.

---

# Example

    EXPECTED_LAG < 30s
    CURRENT_LAG = 8m

---

# Resultado

    INGESTION_HEALTH = CRITICO

---

# Invariante de Dado Presente mas Inútil

Telemetria pode existir...

mas chegar tarde demais para sustentar Detecção em tempo hábil.

---

# Processing Health

Processadores poderão possuir:

    PROCESSING_RATE
    PROCESSING_LAG
    ERROR_COUNT
    RETRY_COUNT
    BACKLOG

---

# Invariante de Backlog Meta-Observacional

Uma fila de Telemetria crescente deverá ser tratada como risco à percepção operacional.

---

# Processing Delay

Pode afetar:

- State Assertions;
- Detectors;
- Alertas;
- SLOs.

---

# Invariante de Propagação do Lag

Atraso de Observabilidade deverá poder influenciar Confidence do Estado derivado.

---

# Export Health

Dados podem ser coletados...

mas falhar ao chegar ao destino.

---

# Exemplo

    COLLECTOR = HEALTHY
    EXPORTER = UNAVAILABLE

---

# Resultado

    PIPELINE_HEALTH = DEGRADED

ou:

    CRITICAL

conforme arquitetura.

---

# Invariante de Estágio Independente

Saúde do Collector não deverá ocultar falha downstream.

---

# Storage Health

O armazenamento observacional poderá possuir:

    WRITE_SUCCESS
    READ_SUCCESS
    CAPACITY
    LATENCY
    REPLICATION
    INTEGRITY

---

# Invariante de Store Funcional

A Saúde deverá considerar:

> conseguimos gravar?

e:

> conseguimos consultar?

---

# Write-Only Failure

É possível gravar...

mas não conseguir ler.

---

# Read-Only Failure

Também pode ocorrer o inverso.

---

# Invariante de Dimensões Independentes

    WRITE_HEALTH
    READ_HEALTH

poderão ser avaliadas separadamente.

---

# Storage Capacity

A Telemetria também pode saturar armazenamento.

---

# Exemplo

    STORAGE_USAGE = 95%

---

# Invariante de Capacidade Antecipada

A Observabilidade deverá detectar risco antes da exaustão.

---

# Index Health

Dados podem existir...

mas o índice estar degradado.

---

# Resultado

    QUERY_HEALTH = DEGRADED

---

# Invariante Existência ≠ Consultabilidade

A memória observacional só é operacionalmente útil se puder ser recuperada quando necessária.

---

# Query Health

O sistema de consulta poderá medir:

    QUERY_LATENCY
    QUERY_ERRORS
    TIMEOUT_RATE
    PARTIAL_RESULTS

---

# Invariante de Consulta como Serviço

A capacidade de investigação deverá possuir Saúde própria.

---

# Query Completeness

Uma consulta pode retornar apenas parte dos backends.

---

# Exemplo

    METRICS = AVAILABLE
    LOGS = UNAVAILABLE
    TRACES = AVAILABLE

---

# Resultado

    QUERY_COMPLETENESS = PARTIAL

---

# Invariante de Resultado Parcial

A interface deverá deixar claro quando a resposta observacional está incompleta.

---

# Detection Health

Detectores poderão possuir:

    LAST_EVALUATION
    RULE_ERRORS
    DATA_AVAILABLE
    EXECUTION_LATENCY

---

# Invariante de Detector Vivo

Cada detector crítico deverá possuir Evidência de que continua sendo avaliado.

---

# Silent Failure

O detector deixa de executar...

e nenhum erro é apresentado.

---

# Invariante de Watcher Heartbeat

Detectores críticos deverão possuir mecanismo de confirmação periódica.

---

# Rule Evaluation Lag

Uma regra pode estar ativa...

mas avaliar dados com atraso.

---

# Exemplo

    EVALUATION_DELAY = 15m

---

# Invariante de Detecção Tardia

Um detector que identifica Incidente 15 minutos depois pode estar tecnicamente funcionando...

mas operacionalmente inadequado.

---

# Alerting Health

Depois da Detecção...

o Alerta precisa ser produzido.

---

# Sinais

Poderão incluir:

    ALERTS_CREATED
    ALERT_CREATION_FAILURE
    ALERT_QUEUE_DEPTH

---

# Invariante Detection ≠ Alert Delivery

Uma Detecção pode existir sem que a notificação chegue ao humano.

---

# Notification Health

Poderá medir:

    DELIVERY_SUCCESS
    DELIVERY_LATENCY
    ACKNOWLEDGEMENT_PATH

---

# Invariante de Comunicação Observável

O caminho entre Alerta e responsável também faz parte da operação.

---

# Paging Failure

Exemplo:

    INCIDENT_DETECTED = TRUE
    PAGE_DELIVERY = FAILED

---

# Isso Pode Representar

    RESPONSE_PATH = CRITICAL

---

# Invariante de Falha da Notificação como Risco

A incapacidade de alcançar operador deverá poder gerar caminho alternativo.

---

# Secondary Channel

Poderá existir:

    PRIMARY_CHANNEL
    FALLBACK_CHANNEL

---

# Invariante de Comunicação Redundante

Serviços críticos de Alerting poderão possuir mais de um caminho.

---

# Alert Delivery SLO

Pode existir objetivo como:

    CRITICAL_ALERT_DELIVERY <= 30s

---

# Invariante de Meta-SLO

A própria capacidade de Alerting poderá possuir SLO.

---

# Observability SLO

A Observabilidade poderá possuir objetivos formais.

---

# Exemplos

    CRITICAL_TELEMETRY_INGESTION <= 30s
    ALERT_DELIVERY <= 30s
    QUERY_AVAILABILITY >= 99.9%

---

# Invariante de Objetivo Próprio

A capacidade observacional não deverá ser tratada como infraestrutura sem compromisso.

---

# Observability SLI

Poderão incluir:

    INGESTION_SUCCESS_RATE
    INGESTION_LAG
    SOURCE_COVERAGE
    QUERY_SUCCESS_RATE
    DETECTION_DELAY
    ALERT_DELIVERY_RATE

---

# Invariante de SLI Funcional da Observabilidade

Os indicadores deverão representar capacidade de perceber e investigar...

não apenas CPU dos servidores de Telemetria.

---

# Time to Detect

Poderá existir:

    TIME_TO_DETECT

---

# Mede

Tempo entre:

    CONDITION_OCCURRED

e:

    DETECTION_CREATED

---

# Invariante de Marco Conhecido

Quando tempo exato do início for incerto...

a métrica deverá reconhecer intervalo de incerteza.

---

# Time to Observe

Também poderá existir:

    TIME_TO_OBSERVE

---

# Diferença

Um Sinal pode ser observado antes de ser interpretado como problema.

---

# Invariante de Etapas

    OCCURRENCE
        ↓
    OBSERVATION
        ↓
    DETECTION
        ↓
    ALERT

deverão permanecer distinguíveis.

---

# Detection Coverage

Pode responder:

> quais tipos de falha relevantes possuem detector?

---

# Invariante de Cobertura não apenas Quantitativa

Possuir 1000 regras não significa cobertura maior se todas medirem o mesmo fenômeno.

---

# Failure Mode Coverage

Poderá relacionar:

    FAILURE_MODE
        ↓
    SIGNAL
        ↓
    DETECTOR

---

# Invariante de Cobertura por Failure Mode

Serviços críticos deverão mapear falhas relevantes para meios de detecção quando possível.

---

# Blind Spot

Um:

**Blind Spot**

representa área relevante da operação que não pode ser observada adequadamente.

---

# Exemplos

- Provider sem Telemetria;
- Serviço legado sem Trace;
- região sem probe;
- workflow manual sem status.

---

# Blind Spot Record

Poderá conter:

    BLIND_SPOT_ID
    OBJECT
    SCOPE
    MISSING_SIGNAL
    RISK
    DISCOVERED_AT
    OWNER

---

# Invariante de Cegueira Visível

A Plataforma deverá saber onde não consegue ver.

---

# Unknown Unknown

Nem todos os Blind Spots serão conhecidos.

---

# Mas...

Incidentes poderão revelá-los.

---

# Invariante de Aprendizado

Falhas não detectadas deverão alimentar descoberta de novos Blind Spots.

---

# Observability Gap

Pode representar lacuna de instrumentação ou cobertura.

---

# Exemplo

    CRITICAL_USER_JOURNEY
    NO_SYNTHETIC_TEST

---

# Invariante Gap ↔ Improvement

Lacunas deverão poder gerar:

- Change;
- dívida;
- Service Opportunity.

---

# Observability Readiness

Antes de um Serviço tornar-se `ATIVO`...

poderá ser necessário provar Observability Readiness.

---

# Pode incluir:

    METRICS_AVAILABLE
    LOGS_AVAILABLE
    REQUIRED_EVENTS_AVAILABLE
    PROBES_AVAILABLE
    OWNERSHIP_DEFINED
    ALERT_ROUTING_DEFINED
    RETENTION_DEFINED

---

# Invariante de Readiness Proporcional

Serviços experimentais poderão possuir exigência menor.

Serviços críticos...

maior.

---

# Observability Readiness Profile

Poderá existir:

    BASIC
    STANDARD
    CRITICAL
    MISSION_CRITICAL

---

# Invariante de Perfil sem Checklist Cego

Os requisitos deverão acompanhar risco real.

---

# Instrumentation Test

A instrumentação poderá ser testada.

---

# Exemplo

Gerar Evento conhecido:

    TEST_EVENT

e verificar:

    COLLECTED
    INGESTED
    QUERYABLE

---

# Invariante de Telemetria Verificável

Configurar instrumentação não significa que o dado realmente chega ao destino.

---

# End-to-End Observability Test

Poderá testar:

    SOURCE
        ↓
    COLLECTION
        ↓
    INGESTION
        ↓
    STORAGE
        ↓
    QUERY
        ↓
    DETECTION
        ↓
    ALERT

---

# Invariante de Teste da Cadeia Completa

Para caminhos críticos...

a validação deverá incluir mais do que o primeiro estágio.

---

# Synthetic Validation

Uma transação artificial poderá confirmar Observabilidade.

---

# Exemplo

Gerar requisição sintética conhecida.

Depois verificar:

- Metric;
- Log;
- Trace;
- Detection.

---

# Invariante de Validação Controlada

Testes não deverão produzir Incidente real ou ruído humano indevido.

---

# Test Alert

Um Alert de teste poderá ser explicitamente marcado:

    TEST = TRUE

---

# Invariante de Teste Distinguível

Alertas sintéticos não deverão contaminar métricas de Incidente real.

---

# Observability Chaos

A UNO poderá testar sua percepção operacional removendo componentes observacionais.

---

# Exemplos

- desligar Collector;
- bloquear export;
- atrasar ingestão;
- remover backend.

---

# Objetivo

Responder:

> perceberíamos que ficamos cegos?

---

# Invariante de Chaos Governado

Testes deverão possuir:

- escopo;
- autoridade;
- rollback;
- limites.

---

# Blindness Injection

Um exercício poderá simular perda de Telemetria.

---

# Esperado

A Plataforma deveria detectar:

    OBSERVABILITY_DEGRADED

---

# Invariante de Falha da Observabilidade Detectável

Um sistema maduro deverá conseguir perceber que deixou de perceber.

---

# Continuity of Observability

A Observabilidade também precisa de Continuidade.

---

# Pode possuir:

- redundância;
- múltiplos Collectors;
- storage replication;
- fallback query;
- local alerting.

---

# Invariante de Continuidade Proporcional

A arquitetura observacional deverá possuir resiliência compatível com a Criticidade dos Serviços que depende dela.

---

# Observability Failure Domain

Múltiplos componentes de Observabilidade podem compartilhar mesmo Failure Domain.

---

# Exemplo

Logs, Metrics e Alerting dependem da mesma região.

---

# Invariante de Concentração Observacional

A Plataforma deverá identificar quando uma única falha pode eliminar múltiplas formas de percepção.

---

# Out-of-Band Observability

Algumas capacidades críticas poderão possuir canal observacional independente do caminho principal.

---

# Exemplo

Management Network.

---

# Invariante de Caminho Independente

A perda da rede de produção não deverá necessariamente eliminar toda capacidade de diagnóstico.

---

# Out-of-Band Alerting

Também poderá existir canal alternativo.

---

# Invariante de Independência Real

O caminho alternativo deverá evitar compartilhar a mesma causa provável de falha.

---

# Local Observability

Regiões ou Edge poderão manter:

    LOCAL_METRICS
    LOCAL_ALERTS
    LOCAL_DASHBOARD

---

# Invariante de Operação durante Partição

A perda do plano central não deverá necessariamente eliminar visibilidade local.

---

# Central Observability Failure

O sistema central pode falhar.

---

# Resultado

Cada região ainda pode operar localmente.

---

# Invariante de Centralização não Absoluta

Quando a arquitetura exigir resiliência...

o componente central não deverá ser ponto único de cegueira.

---

# State during Observability Failure

Um Serviço pode continuar:

    HEALTH_STATE = SAUDAVEL

localmente...

enquanto visão central está:

    UNKNOWN

---

# Invariante de Perspectivas

A Plataforma deverá preservar diferença entre:

    LOCAL_KNOWLEDGE

e:

    GLOBAL_KNOWLEDGE

---

# Federated Observability Continuity

Organizações poderão observar umas às outras através de contratos limitados.

---

# Exemplo

Se Org A perde seu sistema interno...

Org B ainda pode observar endpoint externo.

---

# Invariante de Evidência Externa Complementar

Sinais federados poderão ajudar...

sem substituir autoridade local sobre toda topologia.

---

# Cross-Validation

A UNO poderá comparar:

    INTERNAL_METRICS
    EXTERNAL_SYNTHETIC_PROBE

---

# Se divergirem...

pode indicar:

- problema de rede;
- observabilidade interna;
- caminho externo.

---

# Invariante de Vantage Points Independentes

Múltiplos pontos de observação poderão aumentar detectabilidade.

---

# Observability Maturity

A maturidade poderá evoluir em estágios.

---

# Nível 1 — Instrumentação Básica

Existem:

- Logs;
- métricas fundamentais.

---

# Nível 2 — Monitoramento

Existem:

- dashboards;
- thresholds;
- Alertas.

---

# Nível 3 — Correlação

Logs, Metrics, Traces e Events podem ser relacionados.

---

# Nível 4 — State-Aware Observability

Telemetria alimenta State Assertions e Effective State.

---

# Nível 5 — SLO-Aware Observability

A Detecção considera SLO e Error Budget.

---

# Nível 6 — Federated Observability

Múltiplas organizações compartilham sinais governados.

---

# Nível 7 — Predictive Observability

Modelos identificam tendências e risco futuro.

---

# Nível 8 — Adaptive Observability

A coleta e análise podem adaptar-se conforme contexto.

---

# Invariante de Maturidade Progressiva

A UNO deverá permitir evolução...

sem exigir estágio máximo desde o início.

---

# Observability Debt

Dívidas poderão possuir:

    DEBT_ID
    OBJECT
    GAP
    RISK
    OWNER
    TARGET

---

# Exemplos

    NO_TRACE
    NO_CONSUMER_PROBE
    LOGS_UNSTRUCTURED
    NO_FAILURE_MODE_COVERAGE

---

# Invariante de Dívida Priorizável

Observability Debt deverá competir por prioridade segundo risco...

não apenas estética técnica.

---

# Technical Debt vs Observability Debt

Um Serviço pode ser tecnicamente antigo...

mas bem observável.

Outro moderno...

mas operacionalmente opaco.

---

# Invariante de Dívidas Distintas

Observability Debt deverá permanecer categoria própria.

---

# Observability Score

Uma implementação poderá calcular score.

---

# Mas...

um único número possui risco.

---

# Exemplo

    OBSERVABILITY_SCORE = 92

pode ocultar ausência de probe crítico.

---

# Invariante de Score não Absoluto

Scores poderão resumir...

mas não substituir requisitos individuais.

---

# Required Capabilities Matrix

Poderá avaliar:

    METRICS
    LOGS
    TRACES
    PROBES
    ALERTING
    RETENTION
    OWNERSHIP

---

# Invariante de Gate Crítico

A ausência de requisito obrigatório não deverá ser compensada por outros itens apenas para elevar score.

---

# Observability Certification

No futuro...

Serviços poderão possuir certificação.

---

# Exemplo

    UNO_OBSERVABILITY_READY

---

# Critérios

Poderão incluir:

- cobertura;
- retenção;
- probes;
- SLO;
- Alerting;
- Evidence.

---

# Invariante de Certificação Evidenciável

A certificação deverá possuir:

- critérios;
- versão;
- validade;
- Evidências.

---

# Certification Expiration

Se instrumentação mudar...

poderá ser necessário reavaliar.

---

# Invariante de Certificação não Permanente

Readiness pode envelhecer.

---

# Observability Regression

Uma Mudança pode reduzir cobertura.

---

# Exemplo

Nova versão remove Trace Context.

---

# Resultado

    OBSERVABILITY_REGRESSION

---

# Invariante de Regressão Detectável

A Plataforma deverá identificar perda de instrumentação após Mudança quando possível.

---

# Deployment Gate

Uma versão poderá exigir:

    OBSERVABILITY_CHECK = PASSED

antes de rollout completo.

---

# Invariante de Observabilidade como Parte de Change

Instrumentação deverá ser tratada como parte do comportamento operacional da implementação.

---

# Observability Contract Test

Uma nova implementação poderá ser testada contra:

    REQUIRED_TELEMETRY_CONTRACT

---

# Exemplos

Deve emitir:

    REQUEST_COUNT
    ERROR_COUNT
    LATENCY
    REQUIRED_EVENTS

---

# Invariante de Contrato Verificável

A ausência de Telemetria obrigatória deverá falhar Readiness quando apropriado.

---

# Self-Test

A plataforma observacional poderá executar testes periódicos.

---

# Exemplo

    EMIT_TEST_SIGNAL
        ↓
    VERIFY_INGESTION
        ↓
    VERIFY_QUERY
        ↓
    VERIFY_DETECTION

---

# Invariante de Auto-Teste sem Autoengano

O teste deverá utilizar caminho representativo...

não atalho interno que ignore etapas críticas.

---

# Observability Failover

Um backend pode possuir secundário.

---

# Exemplo

    PRIMARY_METRIC_STORE
        ↓ failure
    SECONDARY_METRIC_STORE

---

# Invariante de Failover Verificado

A troca deverá ser confirmada por consulta real.

---

# Dual Write

Telemetria crítica poderá ser enviada a dois destinos.

---

# Risco

- custo;
- inconsistência;
- duplicação.

---

# Invariante de Redundância Consciente

Duplicar dados deverá possuir finalidade explícita.

---

# Buffered Failover

Collectors poderão armazenar localmente até destino retornar.

---

# Invariante de Capacidade do Buffer

O tempo de sobrevivência offline deverá ser conhecido.

---

# Observability RTO

A própria plataforma poderá possuir:

    RTO

---

# Observability RPO

Também:

    RPO

quando perda de Telemetria histórica for relevante.

---

# Invariante de Recuperação Própria

A Observabilidade deverá participar da Engenharia de Continuidade como qualquer Serviço crítico.

---

# Prioridade de Recuperação

Durante crise...

pode ser necessário recuperar Observabilidade antes de outros Serviços.

---

# Mas...

isso depende da Missão.

---

# Invariante de Prioridade Contextual

A importância da Observabilidade deverá ser projetada conforme dependências reais.

---

# Minimal Observability Mode

Durante falha severa...

a UNO poderá operar com conjunto mínimo.

---

# Pode preservar:

    CRITICAL_EVENTS
    BASIC_METRICS
    LOCAL_ALERTING
    HUMAN_REPORTING

---

# Invariante de Degradação Controlada

A perda de capacidades avançadas não deverá necessariamente eliminar percepção operacional mínima.

---

# Emergency Observability Mode

Pode reduzir:

- sampling;
- dados de baixa prioridade;
- consultas não essenciais.

---

# Para preservar:

- Sinais críticos;
- Alerting;
- Incidentes.

---

# Invariante de Prioridade Observacional

Durante sobrecarga...

a Plataforma deverá poder priorizar Telemetria crítica.

---

# Load Shedding de Telemetria

O pipeline pode precisar descartar dados.

---

# Política

Poderá priorizar:

    CRITICAL_EVENTS
    ERRORS
    SLO_SIGNALS

sobre:

    DEBUG_LOGS

---

# Invariante de Descarte Governado

Load shedding deverá preservar sinais essenciais quando possível.

---

# Observability Backpressure

Produtores não deverão ser derrubados pelo sistema de Telemetria.

---

# Invariante de Não Causar Falha

A Observabilidade não deverá se tornar causa relevante de indisponibilidade do Serviço observado.

---

# Instrumentation Overhead

Coleta possui custo de:

- CPU;
- memória;
- rede;
- latência.

---

# Invariante de Overhead Medido

Instrumentação crítica deverá possuir impacto conhecido quando relevante.

---

# Self-Observability Cost

O próprio monitoramento da Observabilidade também possui custo.

---

# Invariante de Recursão Controlada

A meta-observabilidade deverá ser suficiente...

sem criar regressão infinita de observadores observando observadores.

---

# Trusted Minimal Signals

A Plataforma poderá estabelecer pequeno conjunto de sinais fundamentais.

---

# Exemplos

    SOURCE_HEARTBEAT
    INGESTION_LAG
    DROP_RATE
    QUERY_AVAILABILITY
    ALERT_DELIVERY

---

# Invariante de Base Observacional

Esses sinais poderão formar núcleo mínimo para determinar Saúde da capacidade de Observabilidade.

---

# Blind Spot Registry

A UNO poderá manter registro de Blind Spots conhecidos.

---

# Poderá responder:

> onde nossa visão é parcial?

> quais Serviços críticos não possuem Consumer probe?

> quais Providers são black box?

---

# Invariante de Cegueira como Conhecimento

Saber onde não se vê é parte da Observabilidade madura.

---

# Observability Risk

Blind Spots poderão alimentar:

    RISK_STATE

---

# Exemplo

    SERVICE_HEALTH = SAUDAVEL
    OBSERVABILITY_RISK = HIGH

---

# Invariante de Saúde ≠ Observabilidade

Um Serviço pode estar funcionando...

mas ser difícil demais provar isso.

---

# Observability Improvement Loop

Conceitualmente:

    INCIDENT
        ↓
    EVIDENCE_GAP
        ↓
    OBSERVABILITY_GAP
        ↓
    IMPROVEMENT
        ↓
    NEW_SIGNAL
        ↓
    BETTER_DETECTION

---

# Invariante de Aprendizado Contínuo

Cada falha relevante deverá poder melhorar capacidade de percepção futura.

---

# Observability as a Product of Engineering

A instrumentação não deverá ser pensada apenas por OPS.

---

# Engenharia de Serviço

deverá considerar:

- Sinais;
- Eventos;
- traces;
- SLO;
- probes.

---

# Invariante de Responsabilidade Compartilhada

Observabilidade é responsabilidade transversal...

mesmo quando OPS opera a plataforma observacional.

---

# Observability and Service Factory

A Service Factory poderá gerar baseline observacional automaticamente.

---

# Exemplo

Novo Serviço recebe:

    DEFAULT_METRICS
    LOG_SCHEMA
    TRACE_CONTEXT
    HEALTH_PROBE
    ALERT_TEMPLATE

---

# Invariante de Factory sem Padronização Cega

Defaults poderão acelerar...

mas deverão ser adaptados à função real.

---

# Observability Blueprint

Poderá existir:

    OBSERVABILITY_BLUEPRINT

---

# Tipos

    STANDARD_SERVICE
    EVENT_DRIVEN_SERVICE
    EDGE_SERVICE
    MISSION_CRITICAL_SERVICE

---

# Invariante de Blueprint Adaptável

O Blueprint deverá orientar...

não substituir design observacional.

---

# Observability Capability Package

No futuro...

a UNO poderá empacotar:

- collectors;
- dashboards;
- SLO engine;
- alerting;
- retention;
- federation.

---

# Invariante de Capability Package Operável

O pacote deverá incluir meios de observar o próprio pacote.

---

# Meta-Princípio

A Observabilidade madura precisa responder duas perguntas simultaneamente:

> O sistema está bem?

e:

> Podemos confiar na nossa capacidade de saber se ele está bem?

---

# Invariante de Confiança na Percepção

A condição operacional publicada deverá considerar qualidade da capacidade observacional que a sustenta.

---

# Próxima Dimensão

Com a meta-observabilidade, Readiness, maturidade, continuidade e Blind Spots estabelecidos...

o próximo lote deverá consolidar:

- invariantes finais da Observabilidade;
- garantias mínimas;
- anti-padrões;
- instrumentação mínima;
- Observabilidade mínima viável;
- maturidade avançada;
- Observabilidade federada;
- Observabilidade orientada por Agentes;
- relação final com Estado;
- Catálogo;
- Incidentes;
- Mudanças;
- Continuidade;
- CCM;
- Governança;
- Princípio Final;
- conclusão;
- transição para o próximo arquivo do V08.

---

# Invariantes Finais da Observabilidade

Com:

- Sinais;
- Telemetria;
- Metrics;
- Logs;
- Traces;
- Events;
- Probes;
- Heartbeats;
- SLIs;
- SLOs;
- Error Budgets;
- Detecção;
- Alertas;
- Correlação;
- Evidence Graph;
- sistemas distribuídos;
- retenção;
- memória;
- meta-observabilidade;

estabelecidos...

o arquivo `006-observabilidade-sinais-e-telemetria.md` precisa consolidar as propriedades que deverão permanecer verdadeiras em qualquer implementação da Plataforma UNO.

---

# Invariante 1 — Observabilidade não é Dashboard

Dashboards são projeções.

Observabilidade representa capacidade de compreender a operação.

---

# Invariante 2 — Telemetria não é Estado

Telemetria produz Evidência.

O Modelo de Estado interpreta essa Evidência.

---

# Invariante 3 — Sinal não é Alerta

Um Sinal representa observação.

Um Alerta representa comunicação de uma Detecção.

---

# Invariante 4 — Alerta não é Incidente

Nem toda Detecção produz impacto operacional suficiente para constituir Incidente.

---

# Invariante 5 — Log não é Evento Canônico por Padrão

Um registro textual poderá documentar ocorrência...

sem possuir automaticamente a semântica de Evento operacional oficial.

---

# Invariante 6 — Processo Vivo não Significa Serviço Saudável

    PROCESS_RUNNING = TRUE

não deverá equivaler a:

    SERVICE_HEALTH = SAUDAVEL

---

# Invariante 7 — Resposta HTTP Bem-Sucedida não Prova Correção Funcional

    HTTP_200

não deverá significar automaticamente:

    FUNCTION_CORRECT = TRUE

---

# Invariante 8 — Volume de Telemetria não é Qualidade de Observabilidade

Mais dados não significam necessariamente maior capacidade de compreensão.

---

# Invariante 9 — Sinais Devem Possuir Contexto

Quando necessário...

a Telemetria deverá preservar:

- objeto;
- escopo;
- tempo;
- fonte.

---

# Invariante 10 — Nome não é Identidade

Labels humanos e nomes de infraestrutura não deverão substituir identidade canônica quando continuidade operacional exigir.

---

# Invariante 11 — Unidade Deve Ser Conhecida

Métricas quantitativas deverão possuir unidade ou semântica suficientemente definida.

---

# Invariante 12 — Escala Deve Ser Conhecida

    80

não deverá ser interpretado sem saber se representa:

- valor absoluto;
- percentual;
- ratio;
- índice.

---

# Invariante 13 — Agregação Deve Respeitar Tipo da Métrica

Counters, Gauges e distribuições não deverão ser combinados por operações matematicamente inadequadas.

---

# Invariante 14 — Média não Substitui Distribuição

Fenômenos de cauda deverão poder ser analisados além de médias.

---

# Invariante 15 — Error Count sem Denominador Pode Ser Enganoso

Taxas deverão possuir população de referência.

---

# Invariante 16 — Tráfego Ausente não Significa Falha Automaticamente

A interpretação deverá considerar expectativa real.

---

# Invariante 17 — Ausência de Sinal Exige Expectativa de Sinal

Silêncio somente deverá tornar-se Evidência quando havia algo esperado.

---

# Invariante 18 — Heartbeat Ausente não Prova Causa

Pode indicar:

- falha do objeto;
- rede;
- Collector;
- pipeline.

---

# Invariante 19 — Sensor é Fonte de Evidência

Sensores podem:

- falhar;
- descalibrar;
- produzir ruído.

---

# Invariante 20 — Consumer é Fonte Observacional de Primeira Classe

A experiência externa deverá poder complementar Telemetria interna.

---

# Invariante 21 — Provider não é Fonte Absoluta

Estado declarado por Provider poderá divergir de experiência local legítima.

---

# Invariante 22 — Agente não é Sinal Bruto

Inferência cognitiva deverá permanecer distinguível da medição original.

---

# Invariante 23 — Proveniência Deve Ser Preservada

Transformações relevantes de Telemetria deverão manter relação com a origem.

---

# Invariante 24 — Enriquecimento não Reescreve Origem

Atributo adicionado downstream não deverá parecer emitido pela fonte original.

---

# Invariante 25 — Sampling Deve Ser Conhecido

Ausência de Trace poderá resultar de sampling...

e não de ausência da operação.

---

# Invariante 26 — Telemetria Pode Ser Duplicada

Consumers não deverão assumir exatamente uma entrega sem garantia real.

---

# Invariante 27 — Telemetria Pode Chegar Fora de Ordem

A ordem de ingestão não deverá ser tratada automaticamente como ordem de ocorrência.

---

# Invariante 28 — Telemetria Pode Chegar Atrasada

Late Evidence poderá melhorar reconstrução histórica...

sem redefinir presente de forma indevida.

---

# Invariante 29 — Perda de Telemetria Deve Ser Observável

Quando possível...

o pipeline deverá informar que descartou dados.

---

# Invariante 30 — Pipeline Lag Reduz Valor Operacional

Dado atrasado pode continuar correto...

mas já não ser útil para Detecção em tempo hábil.

---

# Invariante 31 — Collector Falho não Significa Serviço Falho

Observador e observado deverão permanecer distintos.

---

# Invariante 32 — Query Falha não Significa Evidência Ausente

A incapacidade de buscar dado não prova que o dado nunca existiu.

---

# Invariante 33 — Dado Armazenado não Significa Dado Consultável

Existência e acessibilidade deverão permanecer propriedades distintas.

---

# Invariante 34 — Cardinalidade Deve Ser Controlada

Dimensões altamente únicas deverão ser utilizadas apenas onde apropriado.

---

# Invariante 35 — Dimensionalidade Deve Servir Perguntas Operacionais

Poucas dimensões criam cegueira.

Dimensões demais criam custo e complexidade.

---

# Invariante 36 — Observabilidade Deve Incluir Função

Telemetria de infraestrutura não deverá ser a única visão de Serviços críticos.

---

# Invariante 37 — Auto-Instrumentação não Substitui Semântica Funcional

Instrumentação automática poderá fornecer base...

mas não conhece necessariamente o contrato do Serviço.

---

# Invariante 38 — Trace Parcial Continua Sendo Evidência

A ausência de um Span não invalida automaticamente toda a trajetória observada.

---

# Invariante 39 — Trace Context não Deve Transportar Dados Sensíveis sem Necessidade

Propagação distribuída deverá ser minimizada.

---

# Invariante 40 — Correlation ID não Prova Causalidade

Ele demonstra relação contextual.

---

# Invariante 41 — Causation ID Deve Representar Relação Real

Quando utilizado...

deverá possuir semântica distinta de simples correlação.

---

# Invariante 42 — Correlação Temporal não é Causalidade

Eventos próximos no tempo podem ou não possuir relação causal.

---

# Invariante 43 — Change Recente não é Root Cause Automática

Mudanças são candidatas investigativas...

não culpados por padrão.

---

# Invariante 44 — Anomalia não é Falha

Comportamento diferente do esperado poderá ser legítimo.

---

# Invariante 45 — Threshold Deve Possuir Contexto

Limites arbitrários geram ruído e falsa segurança.

---

# Invariante 46 — Baseline Pode Envelhecer

Referências deverão evoluir sem normalizar degradação silenciosamente.

---

# Invariante 47 — Sazonalidade Deve Ser Considerada

Comportamento esperado periódico não deverá virar falso Alerta.

---

# Invariante 48 — Detector Também Pode Falhar

A ausência de Detecção poderá representar falha no próprio detector.

---

# Invariante 49 — Alerting Também Pode Falhar

Detecção criada não significa que responsável recebeu notificação.

---

# Invariante 50 — Notificação Enviada não Significa Pessoa Notificada

E:

    HUMAN_NOTIFIED

não significa:

    ACKNOWLEDGED

---

# Invariante 51 — Acknowledge não Significa Resolução

Reconhecer atenção não prova recuperação.

---

# Invariante 52 — Alert Severity não é Incident Severity

A severidade final poderá considerar impacto e contexto adicionais.

---

# Invariante 53 — Severidade não é Prioridade

Urgência e gravidade poderão divergir.

---

# Invariante 54 — Supressão não Deve Apagar Evidência

Alertas silenciados poderão continuar registrados.

---

# Invariante 55 — Manutenção não Desliga Observabilidade

Ela altera interpretação de condições esperadas...

não elimina percepção.

---

# Invariante 56 — Deduplicação não Deve Fundir Condições Diferentes

Similaridade textual não é identidade operacional.

---

# Invariante 57 — Agrupamento não Deve Ocultar Blast Radius

Reduzir ruído de notificação não deverá esconder quantos objetos estão afetados.

---

# Invariante 58 — Alertas Devem Buscar Actionability

Notificar humanos sem possibilidade de ação útil gera Alert Fatigue.

---

# Invariante 59 — Falso Positivo Deve Alimentar Melhoria

Detecção incorreta é sinal sobre qualidade do detector.

---

# Invariante 60 — Falso Negativo Deve Alimentar Melhoria

Incidente não detectado revela Blind Spot.

---

# Invariante 61 — SLI Mede uma Propriedade Definida

Não deverá existir como nome genérico sem definição.

---

# Invariante 62 — SLO é Diferente de SLI

Indicador e objetivo deverão permanecer separados.

---

# Invariante 63 — SLO é Diferente de SLA

Objetivo operacional e compromisso contratual são objetos distintos.

---

# Invariante 64 — SLO Precisa de Janela

    99.9%

sem período...

é incompleto.

---

# Invariante 65 — Exclusões de SLO Devem Ser Governadas

Falhas não deverão ser removidas de cálculo apenas para melhorar número.

---

# Invariante 66 — SLO Compliance não é Health State

Um Serviço pode estar saudável agora...

e ter violado o objetivo mensal.

---

# Invariante 67 — Error Budget não é Permissão para Falhar

A existência de margem não transforma falha em meta.

---

# Invariante 68 — Burn Rate Deve Ser Interpretado em Janela

Consumo rápido e consumo persistente representam condições diferentes.

---

# Invariante 69 — Objetivo Deve Ser Sustentável Arquiteturalmente

A UNO não deverá prometer nível que a arquitetura não consegue plausivelmente sustentar.

---

# Invariante 70 — SLO Externo Deve Possuir Definição Compartilhada

Números iguais com denominadores diferentes não são compromissos equivalentes.

---

# Invariante 71 — Estado Externo e Estado Local Podem Divergir

Especialmente em Federação e Providers black-box.

---

# Invariante 72 — Black-Box Service Continua Observável Externamente

A falta de acesso interno não elimina necessidade de medir função.

---

# Invariante 73 — Synthetic Monitoring não é Experiência Real

Probes sintéticos complementam...

não substituem completamente o Consumer.

---

# Invariante 74 — Vantage Point Importa

Um Probe saudável em uma região não prova acesso saudável de todas as regiões.

---

# Invariante 75 — Sistemas Assíncronos Exigem Observação de Fila e Lag

Processo ativo não prova atualização em tempo adequado.

---

# Invariante 76 — Message Delivery não é Processing Success

Entrega ao broker e conclusão do Consumer são etapas distintas.

---

# Invariante 77 — Retry Pode Ocultar Degradação

Sucesso eventual após muitas tentativas continua sendo sinal operacional importante.

---

# Invariante 78 — Batch Iniciado não Significa Batch Bem-Sucedido

Completion e deadline deverão ser considerados.

---

# Invariante 79 — Workflow é Objeto Observável

Processos longos não deverão desaparecer dentro de logs de componentes individuais.

---

# Invariante 80 — Recursos Efêmeros não Eliminam Necessidade de Memória

A instância pode desaparecer...

mas sua Evidência precisa sobreviver conforme política.

---

# Invariante 81 — Offline não Significa Invisível Localmente

Edge poderá manter Telemetria e Alerting local.

---

# Invariante 82 — Upload Posterior Deve Preservar Tempo Original

Backfill não deverá parecer Telemetria em tempo real.

---

# Invariante 83 — Partição Cria Perspectivas Locais

Nenhuma parte deverá afirmar visão global sem base suficiente.

---

# Invariante 84 — Reconexão não Significa Reconstrução Completa

Sinais podem precisar ser sincronizados e reconciliados.

---

# Invariante 85 — Evidência Pode Possuir Retenção Diferente da Telemetria

Dados promovidos para Evidence Bundle poderão sobreviver ao dado operacional bruto.

---

# Invariante 86 — Retenção não Deve Ser Infinita por Padrão

Memória possui custo e risco.

---

# Invariante 87 — Expiração não Deve Ignorar Hold Válido

Políticas extraordinárias de preservação deverão prevalecer quando autorizadas.

---

# Invariante 88 — Delete no Store Primário não Significa Destruição Completa

Backups, réplicas e arquivos deverão ser considerados quando necessário.

---

# Invariante 89 — Observabilidade não Justifica Coleta Ilimitada

Privacidade e minimização continuam válidas.

---

# Invariante 90 — Segredos não São Telemetria

Credenciais deverão ser removidas e tratadas como incidente de Segurança quando vazadas.

---

# Invariante 91 — Acesso à Observabilidade Deve Ser Governado

Logs e Traces podem possuir dados mais sensíveis do que o Serviço principal expõe.

---

# Invariante 92 — Multi-Tenancy Deve Preservar Isolamento Observacional

Consumers não deverão enxergar Telemetria indevida de outros Consumers.

---

# Invariante 93 — Federação não Exige Compartilhamento Total

Organizações poderão compartilhar apenas a abstração necessária.

---

# Invariante 94 — Telemetria Federada Deve Preservar Origem

A organização receptora não deverá reescrever o dado externo como observação local.

---

# Invariante 95 — Observabilidade Também Possui Failure Domains

Centralização excessiva pode criar ponto único de cegueira.

---

# Invariante 96 — A Plataforma Deve Detectar quando Ficou Cega

Perda de cobertura deverá produzir Estado observacional degradado quando possível.

---

# Invariante 97 — Blind Spots Devem Poder Ser Registrados

Conhecer limites da própria percepção é uma capacidade operacional.

---

# Invariante 98 — Observability Readiness Deve Ser Proporcional

Serviços críticos deverão possuir profundidade observacional compatível com sua consequência.

---

# Invariante 99 — Instrumentação Também Precisa Ser Testada

Código presente não prova Telemetria utilizável.

---

# Invariante 100 — Observabilidade não Deve Derrubar o Sistema Observado

O overhead de instrumentação deverá possuir limites.

---

# Garantias Mínimas da Observabilidade

Uma implementação legítima de OPS deverá fornecer algumas Garantias mínimas.

---

# Garantia de Identidade

Telemetria relevante deverá possuir fonte e objeto suficientemente identificáveis.

---

# Garantia de Tempo

Deverá existir timestamp adequado ao tipo de Sinal.

---

# Garantia de Escopo

Sinais localizados deverão preservar seu contexto.

---

# Garantia de Proveniência

Deverá ser possível compreender origem dos dados críticos.

---

# Garantia de Qualidade

Freshness, cobertura ou limitações deverão ser representáveis quando relevantes.

---

# Garantia de Consulta

Telemetria retida deverá ser recuperável conforme expectativa operacional.

---

# Garantia de Detecção

Condições conhecidas críticas deverão possuir caminho de detecção compatível com risco quando possível.

---

# Garantia de Alerting

Detecções acionáveis deverão possuir caminho até responsável adequado.

---

# Garantia de Evidência

Incidentes críticos deverão poder preservar contexto observacional suficiente.

---

# Garantia de Privacidade

Coleta deverá respeitar minimização e classificação.

---

# Garantia de Segurança

Acesso e transporte deverão possuir proteção proporcional.

---

# Garantia de Isolamento

Telemetria multi-tenant deverá preservar fronteiras.

---

# Garantia de Retenção

Políticas definidas deverão ser executáveis e observáveis.

---

# Garantia de Federação

Dados externos deverão preservar origem e escopo.

---

# Garantia de Meta-Observabilidade

A saúde dos principais componentes observacionais deverá ser conhecida.

---

# Garantia de Continuidade

A perda parcial da plataforma observacional deverá possuir estratégia compatível com Criticidade.

---

# Garantia de Evolução

Schemas, instrumentos e Detectores deverão poder evoluir sem destruir memória histórica desnecessariamente.

---

# Anti-Padrões da Observabilidade

A Engenharia Oficial deverá reconhecer práticas que produzem aparência de controle...

mas criam cegueira operacional.

---

# Anti-Padrão — Dashboard como Observabilidade

Existem muitos painéis...

mas não é possível investigar pergunta nova.

---

# Anti-Padrão — Logar Tudo

A organização registra cada detalhe...

sem estratégia de:

- busca;
- retenção;
- classificação;
- custo.

---

# Anti-Padrão — Semântica no Nome

A métrica chama:

    success

mas ninguém sabe exatamente o que conta como sucesso.

---

# Anti-Padrão — Métrica sem Unidade

    latency = 500

Sem saber se são:

- ms;
- µs;
- s.

---

# Anti-Padrão — Média de Latência Única

A média parece saudável...

enquanto parte dos Consumers enfrenta cauda extrema.

---

# Anti-Padrão — CPU como Saúde do Serviço

CPU baixa...

logo Serviço é considerado saudável.

---

# Anti-Padrão — Processo Up = Função Up

O processo responde...

mas a jornada real falha.

---

# Anti-Padrão — Alertar em Todo Threshold

Toda mudança gera notificação.

O humano deixa de confiar nos Alertas.

---

# Anti-Padrão — Alert sem Owner

O sistema detecta corretamente...

mas ninguém é responsável por responder.

---

# Anti-Padrão — Owner Genérico

Todos os Alertas vão para:

    ops-team

sem roteamento real.

---

# Anti-Padrão — Alert sem Evidência

Mensagem:

> Something is wrong.

Sem:

- objeto;
- tempo;
- sinal;
- escopo.

---

# Anti-Padrão — Suppression Permanente

Um Alerta é silenciado durante manutenção...

e nunca mais reativado.

---

# Anti-Padrão — Detector Morto Silenciosamente

A ausência de Alertas é interpretada como estabilidade.

---

# Anti-Padrão — Status Page como Verdade Absoluta

Provider diz:

    ALL SYSTEMS OPERATIONAL

e OPS ignora falhas locais.

---

# Anti-Padrão — Trace Context com PII

Dados pessoais atravessam toda a arquitetura apenas para facilitar debug.

---

# Anti-Padrão — User ID como Label de Métrica

A cardinalidade explode.

---

# Anti-Padrão — Sampling sem Conhecimento

A organização tenta investigar falha...

sem saber que 99% dos Traces foram descartados.

---

# Anti-Padrão — Logs como Banco de Domínio

Informação operacional essencial existe apenas em texto livre.

---

# Anti-Padrão — Retenção Infinita por Medo

Tudo é armazenado para sempre.

---

# Anti-Padrão — Retenção Curta demais por Custo

Incidente ocorre...

mas os dados necessários expiraram ontem.

---

# Anti-Padrão — Break-Glass Permanente

Acesso emergencial vira conta administrativa normal.

---

# Anti-Padrão — Redaction depois da Replicação

Segredo já foi copiado para cinco sistemas antes de ser mascarado.

---

# Anti-Padrão — Agente como Fonte sem Evidência

IA afirma causa raiz sem mostrar quais Sinais foram utilizados.

---

# Anti-Padrão — Correlação vira Causalidade

Dois gráficos sobem juntos...

logo um é declarado causa do outro.

---

# Anti-Padrão — Tudo Centralizado

Uma região perde conectividade...

e a organização perde Observabilidade exatamente quando mais precisa dela.

---

# Anti-Padrão — Observabilidade sem Observabilidade

Collectors, Alerting e Stores não possuem Sinais próprios.

---

# Anti-Padrão — SLO sem SLI Operável

O documento promete:

    99.99%

mas ninguém consegue medir.

---

# Anti-Padrão — SLO Manipulado por Exclusões

Toda falha importante é declarada:

    NOT_ELIGIBLE

---

# Anti-Padrão — 100% como SLO Universal

A promessa não possui análise de custo, risco ou arquitetura.

---

# Anti-Padrão — Error Budget como Licença para Instabilidade

A organização interpreta margem como obrigação de gastá-la.

---

# Anti-Padrão — Telemetria sem Consumer

Métricas internas parecem perfeitas...

enquanto usuário não consegue completar função.

---

# Observabilidade Mínima Viável

Uma implementação inicial da UNO não precisará possuir toda a arquitetura avançada deste arquivo.

---

# Minimum Viable Observability

Para Serviço operacional comum...

poderá começar com:

    SERVICE_ID
    BASIC_METRICS
    STRUCTURED_ERROR_LOGS
    HEALTH_PROBE
    CRITICAL_EVENTS
    ALERT_ROUTING
    RETENTION_POLICY

---

# Para Serviço Crítico

Poderá adicionar:

    CONSUMER_PATH_PROBE
    SLI
    SLO
    ERROR_BUDGET
    TRACE
    DEPENDENCY_SIGNALS
    EVIDENCE_CAPTURE

---

# Invariante de MVP Correto

A implementação mínima deverá preservar semântica correta...

mesmo sem todas as capacidades avançadas.

---

# Instrumentação Mínima por Serviço

Todo Serviço relevante deverá conseguir responder, proporcionalmente à Criticidade:

> Existe tráfego?

> Está falhando?

> Quanto demora?

> Qual função está sendo entregue?

> De quais Dependências depende?

> Conseguimos saber quando algo mudou?

---

# Invariante de Instrumentação Orientada à Operação

A lista exata de Sinais poderá variar...

mas as perguntas essenciais deverão permanecer respondíveis.

---

# Maturidade da Observabilidade

A evolução poderá ocorrer progressivamente.

---

# Estágio 1 — Logs Básicos

É possível olhar manualmente o que aconteceu.

---

# Estágio 2 — Métricas e Dashboards

Existe visão quantitativa.

---

# Estágio 3 — Alerting

Condições conhecidas produzem atenção.

---

# Estágio 4 — Tracing e Correlação

É possível investigar através de Serviços.

---

# Estágio 5 — SLO

A observação está ligada à promessa operacional.

---

# Estágio 6 — State-Aware

Telemetria alimenta Modelo de Estado.

---

# Estágio 7 — Federado

A Observabilidade atravessa organizações com Governança.

---

# Estágio 8 — Preditivo

A Plataforma identifica risco antes da falha.

---

# Estágio 9 — Adaptativo

A coleta e análise ajustam-se conforme contexto operacional.

---

# Estágio 10 — Cognitivo

Agentes conseguem investigar, correlacionar e explicar mantendo Proveniência e limites de autoridade.

---

# Invariante de Maturidade sem Pressa

A Plataforma deverá consolidar fundamentos antes de depender de capacidades cognitivas avançadas.

---

# Observabilidade Federada Avançada

Em maturidade elevada...

a UNO poderá compartilhar entre organizações:

- State Assertions;
- SLIs;
- Alertas;
- Eventos;
- Evidence Bundles;
- Telemetria selecionada.

---

# Mas...

cada organização poderá continuar possuindo sua própria realidade observacional.

---

# Invariante de Federação sem Verdade Central Obrigatória

Federação deverá permitir coordenação...

não exigir homogeneização absoluta.

---

# Observabilidade Orientada por Agentes

Agentes poderão utilizar Telemetria para responder:

> O que mudou?

> O que parece anormal?

> O que é semelhante a Incidentes anteriores?

> Quais Dependências são candidatas?

> Quais Evidências faltam?

---

# Invariante de Agente Investigativo

O Agente deverá possuir acesso apenas à Telemetria autorizada.

---

# Agent Query Plan

Uma investigação poderá gerar plano:

    CHECK_STATE
    CHECK_SLO
    CHECK_RECENT_CHANGES
    CHECK_DEPENDENCIES
    INSPECT_TRACES
    FORM_HYPOTHESIS

---

# Invariante de Plano Cognitivo sem Autoridade Implícita

Investigar não significa poder executar mudanças.

---

# Agent-Generated Detection

Um Agente poderá produzir:

    DETECTION

---

# Deverá preservar:

    INPUTS
    MODEL
    VERSION
    CONFIDENCE
    EXPLANATION

---

# Invariante de Evidência Cognitiva

A conclusão deverá apontar para Evidência real.

---

# Agent-Generated Query

Um Agente poderá buscar dinamicamente sinais relevantes.

---

# Invariante de Limite de Consulta

A exploração deverá respeitar:

- custo;
- privacidade;
- classificação.

---

# Adaptive Telemetry

Em situações específicas...

a UNO poderá aumentar temporariamente nível de instrumentação.

---

# Exemplo

Durante Investigação:

    TRACE_SAMPLING = 50%

em vez de:

    1%

---

# Invariante de Aumento Temporário

A instrumentação ampliada deverá possuir:

- início;
- escopo;
- custo;
- condição de retorno.

---

# Dynamic Log Level

Pode mudar:

    INFO → DEBUG

temporariamente.

---

# Invariante de Debug Governado

Aumento de Log poderá elevar risco de:

- custo;
- PII;
- volume.

---

# Observability Controller

Uma capacidade futura poderá ajustar coleta automaticamente conforme:

- risco;
- Incidente;
- SLO Burn;
- Criticidade.

---

# Invariante de Controle Adaptativo

A automação deverá operar dentro de orçamento e políticas.

---

# Relação Final com Estado

O arquivo `005` responde:

> Qual é a condição operacional?

O `006` responde:

> Quais Sinais e Evidências permitem conhecer essa condição?

---

# Relação Conceitual

    TELEMETRY
        ↓
    EVIDENCE
        ↓
    ASSERTION
        ↓
    STATE

---

# Invariante de Fronteira com 005

Observabilidade não deverá redefinir o Modelo de Estado.

---

# Relação Final com o Catálogo

O Catálogo fornece:

- identidade;
- Owner;
- Criticidade;
- dependências;
- SLO profile.

Observabilidade fornece:

- Sinais;
- comportamento;
- Evidência.

---

# Invariante Catálogo ↔ Telemetria

A Telemetria deverá poder relacionar-se aos objetos do Catálogo.

---

# Relação Final com Incident Management

Observabilidade produz:

    SIGNAL
    DETECTION
    ALERT

Incident Management coordena:

    IMPACT
    RESPONSE
    RECOVERY

---

# Invariante de Fronteira

Observabilidade detecta.

Incident Management governa a resposta ao Incidente.

---

# Relação Final com Change Management

Mudanças deverão produzir Eventos observáveis.

---

# Observabilidade poderá responder:

> o comportamento mudou depois da Change?

---

# Invariante de Change Verificável

A conclusão da Change deverá poder utilizar Evidência pós-execução.

---

# Relação Final com Continuidade

Recuperação depende de saber:

> o sistema voltou?

---

# Observabilidade fornece:

- verificação;
- SLI;
- State Assertions;
- estabilidade.

---

# Invariante de Recuperação Evidenciada

Continuidade não deverá declarar recuperação apenas porque comando foi executado.

---

# Relação Final com Problem Management

Histórico observacional ajuda descobrir:

- recorrência;
- padrões;
- fatores comuns.

---

# Invariante de Memória para Aprendizado

Telemetria deverá alimentar melhoria estrutural quando apropriado.

---

# Relação Final com Capacity Management

Métricas históricas permitem analisar:

- crescimento;
- saturação;
- headroom;
- sazonalidade.

---

# Invariante de Planejamento Baseado em Evidência

Capacidade futura deverá utilizar Telemetria como uma das fontes principais.

---

# Relação Final com Segurança

Observabilidade poderá detectar:

- comportamento anômalo;
- falhas;
- acessos;
- alterações.

Mas seus próprios dados também precisam ser protegidos.

---

# Invariante de Observabilidade como Superfície Sensível

Logs, Traces e Events poderão conter informação de alto valor para atacante.

---

# Relação Final com Federação

A Federação poderá compartilhar percepção operacional suficiente para coordenação.

---

# Invariante de Visibilidade Federada Proporcional

Compartilhar o necessário...

não tudo o que existe.

---

# Relação Final com CCM

OPS poderá fornecer para CCM:

- condição;
- SLO;
- tendência;
- Blast Radius;
- Evidência.

CCM poderá interpretar:

- risco de Missão;
- prioridade;
- consequência institucional.

---

# Invariante OPS ↔ CCM

Observabilidade fornece percepção operacional...

não decisão institucional.

---

# Relação Final com Service Factory

Novos Serviços deverão nascer com estratégia observacional proporcional.

---

# Invariante de Observabilidade by Design

Observabilidade deverá fazer parte do design...

não ser apenas reparo posterior.

---

# Relação Final com PI

Novos métodos de:

- correlação;
- Detecção;
- sensor fusion;
- análise;
- otimização;

poderão gerar Criações.

---

# Invariante de Separação Jurídica

A existência de inovação operacional não deverá significar automaticamente patenteabilidade.

---

# Observabilidade como Sistema Nervoso de OPS

Se o Catálogo representa o mapa...

e o Modelo de Estado representa a linguagem da condição...

a Observabilidade representa:

**o sistema sensorial de OPS.**

Ela permite que a Plataforma perceba:

- mudança;
- falha;
- risco;
- comportamento;
- recuperação.

---

# Mas...

um sistema sensorial sem interpretação produz apenas ruído.

---

# Por isso

Observabilidade deverá permanecer conectada a:

    IDENTIDADE
    +
    ESTADO
    +
    TEMPO
    +
    CONTEXTO
    +
    EVIDÊNCIA
    +
    DECISÃO

---

# Princípio Final

A Observabilidade da Plataforma UNO deverá permitir que a organização compreenda sua operação através de Sinais confiáveis, contextualizados, temporais e rastreáveis.

Ela deverá ser capaz de responder:

> O que está acontecendo?

> Onde?

> Desde quando?

> Quem está percebendo?

> Qual função está sendo afetada?

> Quais Evidências sustentam essa interpretação?

> O que mudou?

> O que ainda não sabemos?

E deverá fazer isso...

sem confundir:

- dado com verdade;
- correlação com causa;
- Alerta com Incidente;
- observação com autoridade.

---

# Conclusão

O arquivo `006-observabilidade-sinais-e-telemetria.md` estabelece a arquitetura oficial de percepção operacional da UNO.

Foram definidos:

- Observabilidade;
- Monitoramento;
- Sinais;
- Telemetria;
- modelo unificado;
- Metrics;
- Logs;
- Traces;
- Events;
- Probes;
- Heartbeats;
- Sensors;
- Consumer Observations;
- Provider Signals;
- SLIs;
- SLOs;
- Error Budgets;
- Detecções;
- Alertas;
- correlação;
- Evidence Graph;
- investigação;
- reconstrução;
- sistemas distribuídos;
- Edge;
- Federação;
- retenção;
- memória;
- privacidade;
- Blind Spots;
- Readiness;
- meta-observabilidade;
- continuidade da própria Observabilidade.

---

# O Resultado

A UNO passa a possuir capacidade de transformar:

    REALIDADE OPERACIONAL

em:

    SINAIS

depois em:

    TELEMETRIA

depois em:

    EVIDÊNCIA

e finalmente em:

    COMPREENSÃO OPERACIONAL

---

# Encerramento do Arquivo 006

Com este documento...

OPS passa a possuir percepção.

Agora...

quando essa percepção revelar:

- interrupção;
- degradação;
- impacto;
- risco relevante;

será necessário coordenar uma resposta operacional.

Isso exige outra disciplina.

Será necessário definir:

- o que constitui Incidente;
- como um Incidente nasce;
- como é classificado;
- como impacto é determinado;
- como prioridade é calculada;
- quem assume comando;
- como comunicação funciona;
- como mitigação e recuperação são coordenadas;
- como Evidência é preservada;
- como o Incidente é encerrado;
- como aprendizado retorna à operação.

Essa será a responsabilidade do próximo arquivo da sequência de OPS:

**007 — Gestão de Incidentes e Resposta Operacional.**

---

**Fim do arquivo `006-observabilidade-sinais-e-telemetria.md`.**
