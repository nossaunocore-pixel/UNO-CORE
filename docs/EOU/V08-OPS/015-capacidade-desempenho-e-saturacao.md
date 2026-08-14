# 015 — Capacidade, Desempenho e Saturação

## Engenharia Oficial V08 — OPS

---

# Propósito

Este documento estabelece a Engenharia Oficial de:

- capacidade operacional;
- desempenho;
- utilização;
- saturação;
- throughput;
- latência;
- filas;
- concorrência;
- headroom;
- reservas;
- limites;
- quotas;
- gargalos;
- capacidade disponível;
- capacidade comprometida;
- capacidade efetiva;
- capacidade degradada;
- planejamento de capacidade;
- previsão;
- elasticidade;
- escalabilidade;
- throttling;
- backpressure;
- overload;
- shedding;
- proteção contra colapso;
- performance baselines;
- performance budgets;
- capacity risk;
- capacidade por Missão;
- capacidade por Serviço;
- capacidade compartilhada;
- capacidade de Dependências;
- capacidade de Provider.

Seu objetivo é responder:

> Quanto a Plataforma consegue suportar agora?

> Quanto ainda pode crescer antes de atingir condição insegura?

> Onde estão os gargalos?

> O desempenho atual é normal?

> A latência está degradando por saturação?

> Quanto da capacidade está reservada?

> Quanto está comprometida?

> O sistema consegue absorver pico?

> O que acontece quando a demanda supera a capacidade disponível?

> Como proteger a Plataforma de overload?

> Quando devemos escalar?

> Quando devemos limitar?

> Quando devemos degradar?

> Como prever capacidade futura?

> Como Capacity Management se conecta a Missões, Releases, Configuração, Incidentes, Agentes e Automações?

---

# Princípio Central

Capacidade não é apenas:

> quantos recursos existem?

Capacidade é:

> quanto trabalho útil o sistema consegue sustentar dentro de condições aceitáveis?

---

# Consequência

Dois sistemas com a mesma quantidade de CPU...

podem possuir capacidades operacionais completamente diferentes.

---

# Invariante Fundamental

OPS deverá distinguir:

`RESOURCE CAPACITY`

`SERVICE CAPACITY`

`EFFECTIVE CAPACITY`

---

# Resource Capacity

**Resource Capacity** representa recursos técnicos disponíveis.

---

# Exemplos

- CPU;
- memória;
- storage;
- IOPS;
- banda;
- conexões;
- threads;
- workers;
- GPUs;
- slots;
- shards.

---

# Invariante Resource Capacity ≠ Service Capacity

Possuir recursos não significa que o Serviço consegue transformá-los linearmente em trabalho útil.

---

# Service Capacity

**Service Capacity** representa volume de trabalho que um Serviço consegue sustentar dentro de critérios operacionais definidos.

---

# Exemplos

- requests/s;
- jobs/min;
- eventos/s;
- sessões simultâneas;
- inferências/s;
- transações/min.

---

# Invariante de Capacidade por Serviço

A capacidade deverá ser expressa em unidade relacionada ao trabalho realizado quando possível.

---

# Effective Capacity

**Effective Capacity** representa capacidade realmente utilizável no contexto atual.

---

# Pode Ser Menor que a Capacidade Teórica

Por causa de:

- redundância;
- failover reserve;
- manutenção;
- degradação;
- dependências;
- limites;
- quotas;
- políticas;
- Missões;
- segurança.

---

# Exemplo

Capacidade física:

`1000 req/s`

Reserva de segurança:

`200 req/s`

Dependência limitada:

`700 req/s`

Capacidade efetiva:

`700 req/s`

---

# Invariante de Capacidade Efetiva

OPS deverá considerar o menor limite relevante do caminho operacional.

---

# Capacity Ceiling

Um sistema poderá possuir limite superior conhecido ou estimado.

---

# Exemplo

`MAX_STABLE_THROUGHPUT = 12.000 req/s`

---

# Invariante de Limite Contextual

O ceiling poderá variar conforme:

- payload;
- mix de tráfego;
- região;
- versão;
- configuração;
- Dependências.

---

# Capacity não é Constante

A capacidade poderá variar no tempo.

---

# Exemplos

- cache quente versus frio;
- dependência degradada;
- noisy neighbor;
- manutenção;
- versão nova;
- mudança de schema;
- temperatura;
- hardware.

---

# Invariante de Capacidade Dinâmica

OPS não deverá tratar capacity como número fixo e permanente.

---

# Demand

**Demand** representa quantidade de trabalho solicitada à Plataforma.

---

# Exemplos

- requests;
- eventos;
- jobs;
- sessões;
- bytes;
- inferências;
- conexões.

---

# Invariante Demand ≠ Load

Demand representa o que é solicitado.

Load representa o trabalho que efetivamente entra ou permanece no sistema.

---

# Offered Load

Quantidade de trabalho oferecida ao sistema.

---

# Accepted Load

Quantidade aceita.

---

# Completed Load

Quantidade concluída com sucesso.

---

# Invariante de Funil de Carga

OPS deverá distinguir:

`OFFERED`

`ACCEPTED`

`COMPLETED`

quando rejeição, throttling ou falha forem relevantes.

---

# Throughput

**Throughput** representa quantidade de trabalho concluído por unidade de tempo.

---

# Exemplo

`8.000 requests/s`

---

# Invariante Throughput ≠ Demand

Throughput pode estabilizar mesmo enquanto Demand continua subindo.

---

# Exemplo

Demand:

`15.000 req/s`

Throughput:

`10.000 req/s`

Backlog cresce.

---

# Invariante de Saturação Oculta

Throughput estável não deverá ser interpretado automaticamente como Saúde.

---

# Latency

**Latency** representa tempo necessário para concluir determinada operação.

---

# Poderá Ser Medida Como

- média;
- mediana;
- p95;
- p99;
- máximo;
- distribuição.

---

# Invariante de Distribuição de Latência

Média isolada poderá esconder degradação significativa na cauda.

---

# Tail Latency

Usuários mais lentos poderão sofrer muito antes da média parecer ruim.

---

# Exemplo

`AVG = 100ms`

`P99 = 4s`

---

# Invariante de Tail Awareness

Serviços sensíveis deverão considerar percentis compatíveis com experiência real.

---

# Response Time

Poderá incluir múltiplas componentes.

---

# Exemplo

`QUEUE TIME`

+

`PROCESSING TIME`

+

`DEPENDENCY TIME`

↓

`TOTAL LATENCY`

---

# Invariante de Latência Composta

OPS deverá poder decompor latência quando necessário para localizar gargalo.

---

# Service Time

Tempo efetivo de processamento.

---

# Queue Time

Tempo aguardando recurso.

---

# Invariante Queue Time como Sinal de Saturação

Aumento de espera poderá indicar falta de capacidade antes da falha aberta.

---

# Utilization

**Utilization** representa fração da capacidade de um recurso atualmente utilizada.

---

# Exemplo

`CPU = 70%`

---

# Invariante Utilization ≠ Saturation

Um recurso pode estar altamente utilizado sem estar saturado.

Outro pode saturar antes de 100%.

---

# Exemplo

Thread pool:

`ACTIVE = 100 / 100`

Saturado.

CPU:

`45%`

---

# Invariante de Recurso Limitante

A capacidade do Serviço deverá ser entendida pelo gargalo dominante...

Não pelo recurso mais visível.

---

# Saturation

**Saturation** representa condição em que a demanda por determinado recurso ou capacidade se aproxima ou ultrapassa a capacidade de atendimento sustentável.

---

# Sinais Possíveis

- filas crescentes;
- rejeições;
- timeout;
- backlog;
- threads esgotadas;
- conexões esgotadas;
- throttling;
- swap;
- GC excessivo;
- lock contention.

---

# Invariante de Saturação Multissinal

OPS deverá reconhecer saturação por comportamento...

Não apenas por `CPU = 100%`.

---

# Saturation Point

Ponto a partir do qual aumentar Demand deixa de produzir crescimento saudável de Throughput.

---

# Exemplo Conceitual

Antes:

`DEMAND ↑`

↓

`THROUGHPUT ↑`

Depois:

`DEMAND ↑`

↓

`THROUGHPUT ≈ CONSTANT`

↓

`LATENCY ↑`

↓

`ERRORS ↑`

---

# Invariante de Saturation Curve

Capacidade deverá ser compreendida pela relação entre Demand, Throughput, Latency e Errors.

---

# Knee Point

A curva poderá possuir ponto em que latência começa a crescer rapidamente.

---

# Invariante de Operação Antes do Colapso

A capacidade segura poderá ser menor que o máximo throughput tecnicamente possível.

---

# Maximum Throughput

Representa pico técnico observado.

---

# Sustainable Throughput

Representa carga que pode ser mantida dentro de critérios aceitáveis.

---

# Invariante Max ≠ Sustainable

Capacidade operacional deverá privilegiar nível sustentável.

---

# Headroom

**Headroom** representa capacidade restante antes de limite relevante.

---

# Exemplo

Capacidade sustentável:

`10.000 req/s`

Carga atual:

`7.000 req/s`

Headroom bruto:

`3.000 req/s`

---

# Headroom Percentual

`30%`

---

# Invariante de Headroom Contextual

Headroom deverá considerar:

- picos;
- falhas;
- redundância;
- autoscaling delay;
- Missões;
- variabilidade.

---

# Raw Headroom

Diferença matemática simples.

---

# Safe Headroom

Margem considerada segura depois de reservas e risco.

---

# Invariante Raw ≠ Safe Headroom

A capacidade aparentemente livre poderá não estar operacionalmente disponível.

---

# Reserved Capacity

Parte da capacidade poderá ser reservada.

---

# Exemplos

- failover;
- Missão;
- tenant crítico;
- recuperação;
- burst;
- manutenção.

---

# Invariante de Reserva

Capacidade reservada deverá ser distinguida de capacidade livre.

---

# Committed Capacity

Capacidade poderá já estar prometida para uso futuro.

---

# Exemplo

Missão começa em 30 minutos e exige:

`20%`

---

# Invariante de Compromisso Futuro

Planejamento deverá considerar demanda ainda não presente mas já comprometida.

---

# Available Capacity

Conceitualmente:

`TOTAL CAPACITY`

-

`CURRENT LOAD`

-

`RESERVES`

-

`COMMITMENTS`

↓

`AVAILABLE CAPACITY`

---

# Invariante de Fórmula Não Universal

A composição exata dependerá do domínio...

mas capacidade disponível não deverá ignorar compromissos conhecidos.

---

# Capacity Margin

Pode representar distância até condição insegura.

---

# Invariante de Margem

Margem deverá considerar o recurso ou capacidade realmente limitante.

---

# Bottleneck

Um **Bottleneck** representa elemento que limita Throughput ou aumenta Latency.

---

# Exemplos

- CPU;
- banco;
- lock;
- network;
- Provider;
- fila;
- storage;
- thread pool.

---

# Invariante de Gargalo Dinâmico

Remover um bottleneck pode apenas deslocar o limite para outro componente.

---

# Bottleneck Shift

Exemplo:

CPU era limite.

Depois de otimização...

banco torna-se limite.

---

# Invariante de Capacidade Sistêmica

Capacity Management deverá analisar o caminho completo.

---

# Critical Resource

Um recurso poderá ser crítico para determinado workload.

---

# Invariante de Criticidade por Carga

O recurso limitante poderá mudar conforme tipo de tráfego.

---

# Workload Mix

Diferentes operações consomem recursos diferentes.

---

# Exemplo

`READ`

é barato.

`REPORT_GENERATION`

é caro.

---

# Invariante de Mix

Capacidade em requests/s sem conhecer mix poderá ser enganosa.

---

# Weighted Demand

Uma implementação poderá ponderar operações por custo.

---

# Exemplo

`READ = 1 UNIT`

`WRITE = 3 UNITS`

`REPORT = 20 UNITS`

---

# Invariante de Unidade de Capacidade

A Engenharia Oficial não deverá impor uma unidade única...

mas deverá permitir modelos compatíveis com custo real.

---

# Concurrency

**Concurrency** representa quantidade de operações simultaneamente em execução ou espera ativa.

---

# Invariante de Concorrência

Aumentar concurrency pode elevar Throughput...

até que contenção passe a degradar o sistema.

---

# Concurrency Limit

Um Serviço poderá limitar operações simultâneas.

---

# Exemplo

`MAX_CONCURRENCY = 200`

---

# Invariante de Limite como Proteção

Limites de concorrência poderão proteger Dependências e o próprio Serviço.

---

# Queue

Quando demanda excede concorrência imediata...

trabalho poderá esperar.

---

# Invariante de Fila

Fila transforma overload instantâneo em atraso...

mas não cria capacidade.

---

# Queue Depth

Quantidade de trabalho aguardando.

---

# Invariante de Queue Depth como Estado

Backlog crescente poderá representar dívida operacional em tempo real.

---

# Queue Age

Tempo do item mais antigo ou distribuição de idade.

---

# Invariante de Idade da Fila

Tamanho da fila isolado poderá ser insuficiente.

---

# Exemplo

Fila com:

`1000 itens`

pode ser saudável se processada em segundos.

Fila com:

`10 itens`

pode ser crítica se cada item espera horas.

---

# Queue Growth Rate

A taxa de crescimento pode indicar incapacidade de acompanhar Demand.

---

# Invariante de Derivada Operacional

Tendência poderá ser mais informativa que valor instantâneo.

---

# Backlog

**Backlog** representa trabalho aceito e ainda não concluído.

---

# Invariante de Backlog

Backlog deverá ser considerado carga futura já comprometida.

---

# Backlog Drain Time

Tempo estimado para esvaziar backlog.

---

# Conceitualmente

`BACKLOG / EXCESS_PROCESSING_CAPACITY`

---

# Invariante de Drain Time

Uma fila estável poderá ainda representar recuperação muito lenta.

---

# Capacity Debt

Backlog elevado poderá ser entendido como dívida de capacidade temporária.

---

# Invariante de Dívida Operacional

Depois do pico...

o sistema pode continuar degradado enquanto paga trabalho acumulado.

---

# Burst

Demand poderá crescer rapidamente por período curto.

---

# Burst Capacity

Capacidade de absorver pico temporário sem violar critérios críticos.

---

# Invariante de Burst ≠ Sustained Capacity

Capacidade de pico não deverá ser confundida com capacidade sustentável.

---

# Buffer

Buffers poderão absorver burst.

---

# Exemplos

- queue;
- cache;
- memory buffer;
- storage.

---

# Invariante de Buffer

Buffer compra tempo...

Não elimina necessidade de processar trabalho.

---

# Buffer Exhaustion

Quando buffer enche...

o sistema poderá:

- rejeitar;
- bloquear;
- descartar;
- degradar.

---

# Invariante de Comportamento no Limite

A consequência de buffer cheio deverá ser conhecida.

---

# Backpressure

**Backpressure** representa mecanismo para comunicar ou impor que produtores reduzam ritmo quando consumidores não conseguem acompanhar.

---

# Exemplos

- bloquear producer;
- reduzir rate;
- diminuir prefetch;
- retornar sinal de overload;
- limitar janela.

---

# Invariante de Backpressure

A pressão deverá ser propagada na direção da origem quando possível...

em vez de acumular indefinidamente no ponto saturado.

---

# Backpressure Local

Um Serviço limita próprio intake.

---

# Backpressure Transitiva

O sinal pode atravessar múltiplas camadas.

---

# Invariante de Backpressure Sistêmica

Sistemas em cadeia deverão evitar que cada camada continue produzindo trabalho para Dependência já saturada.

---

# Throttling

**Throttling** limita taxa de trabalho aceita ou executada.

---

# Exemplos

`100 req/s`

`10 jobs/s`

---

# Invariante Throttling ≠ Failure

Limitar pode ser mecanismo de Saúde.

---

# Rate Limit

Poderá existir por:

- usuário;
- tenant;
- organização;
- Serviço;
- região;
- endpoint.

---

# Invariante de Escopo do Limite

O escopo deverá refletir objetivo de proteção ou fairness.

---

# Global Rate Limit

Protege capacidade agregada.

---

# Per-Tenant Limit

Evita que um tenant consuma toda a capacidade.

---

# Invariante de Fairness

Capacidade compartilhada poderá exigir políticas explícitas de distribuição.

---

# Quota

**Quota** representa quantidade permitida em determinado período ou dimensão.

---

# Exemplo

`1M requests/day`

---

# Invariante Quota ≠ Rate Limit

Quota limita volume acumulado.

Rate limit limita velocidade.

---

# Concurrency Quota

Pode limitar simultaneidade.

---

# Storage Quota

Pode limitar uso persistente.

---

# Invariante de Quotas Multidimensionais

Capacidade poderá ser governada por múltiplos limites simultaneamente.

---

# Load Shedding

**Load Shedding** representa rejeição deliberada de trabalho para preservar Saúde do sistema.

---

# Princípio

Quando não é possível atender tudo...

é melhor falhar de forma controlada do que colapsar indiscriminadamente.

---

# Invariante de Shedding

A rejeição deverá proteger capacidade mais crítica.

---

# Shed Priority

Trabalho poderá possuir prioridade.

---

# Exemplo

`CRITICAL`

`NORMAL`

`BEST_EFFORT`

---

# Invariante de Priorização

Em overload...

a Plataforma poderá preservar trabalho de maior valor operacional ou missional.

---

# Mission-Aware Shedding

CCM poderá informar prioridade de Missão.

---

# Exemplo

Durante saturação:

tráfego de Missão crítica continua.

tarefas não essenciais são reduzidas.

---

# Invariante OPS ↔ CCM

CCM poderá fornecer prioridade e consequência...

OPS governa mecanismo de proteção de capacidade.

---

# Degraded Mode

O Serviço poderá reduzir funcionalidade para preservar capacidade.

---

# Exemplos

- resposta simplificada;
- cache;
- menor precisão;
- processamento assíncrono;
- desativar função cara.

---

# Invariante de Degradação Controlada

Reduzir qualidade ou função poderá ser preferível à indisponibilidade completa quando permitido pelo domínio.

---

# Graceful Degradation

O sistema preserva funções essenciais.

---

# Invariante de Essencialidade

A Plataforma deverá saber quais capacidades são:

- essenciais;
- degradáveis;
- adiáveis;
- descartáveis.

---

# Overload

**Overload** representa condição em que Demand excede capacidade sustentável.

---

# Sinais

- queue growth;
- latency growth;
- timeouts;
- errors;
- rejection;
- resource exhaustion.

---

# Invariante de Overload

Overload deverá ser tratado como condição sistêmica...

Não apenas como métrica de recurso.

---

# Overload Collapse

Em alguns sistemas...

mais Demand reduz Throughput útil.

---

# Motivos

- retries;
- contention;
- context switching;
- GC;
- lock storms;
- timeout cascades.

---

# Invariante de Colapso Não Linear

Depois de certo ponto...

adicionar trabalho pode reduzir capacidade efetiva.

---

# Retry Amplification

Falhas provocam retries.

Retries aumentam Demand.

Demand adicional provoca mais falhas.

---

# Modelo

`OVERLOAD`

↓

`TIMEOUT`

↓

`RETRY`

↓

`MORE LOAD`

↓

`MORE OVERLOAD`

---

# Invariante de Feedback Positivo

Capacity Management deverá considerar loops que amplificam saturação.

---

# Retry Budget

A Plataforma poderá limitar retries adicionais.

---

# Invariante de Retry como Consumidor de Capacidade

Retry deverá ser contabilizado como carga real.

---

# Circuit Breaker

Uma Dependência degradada poderá ser temporariamente isolada.

---

# Invariante de Proteção de Capacidade

Circuit breakers podem preservar threads, conexões e tempo de processamento.

---

# Capacity Protection

Conjunto de mecanismos poderá incluir:

- rate limits;
- concurrency limits;
- queues;
- backpressure;
- shedding;
- circuit breakers;
- timeouts;
- retries controlados.

---

# Invariante de Proteção em Camadas

Nenhum mecanismo isolado deverá ser presumido suficiente para todos os tipos de overload.

---

# Performance

**Performance** representa comportamento temporal e de eficiência da Plataforma sob determinada carga e contexto.

---

# Dimensões

Podem incluir:

- latency;
- throughput;
- resource efficiency;
- queue time;
- completion time.

---

# Invariante Performance ≠ Capacity

Um sistema pode ser rápido em carga baixa...

e possuir capacidade ruim em carga alta.

---

# Performance Baseline

Um baseline poderá representar comportamento normal.

---

# Exemplos

`P95 = 180ms`

sob:

`5.000 req/s`

---

# Invariante de Baseline Condicionado

Performance deverá ser comparada sob contexto de carga compatível.

---

# Performance Regression

Uma versão ou configuração poderá piorar eficiência.

---

# Exemplo

Antes:

`5000 req/s @ 60% CPU`

Depois:

`5000 req/s @ 85% CPU`

---

# Invariante de Regressão de Eficiência

Latência igual não significa performance igual se consumo de capacidade aumentou.

---

# Capacity Efficiency

Pode representar trabalho útil por unidade de recurso.

---

# Exemplos

`requests / CPU-second`

`jobs / GB-memory`

---

# Invariante de Eficiência

Melhoria de eficiência poderá aumentar Effective Capacity sem adicionar infraestrutura.

---

# Performance Budget

Uma Capacidade poderá possuir orçamento.

---

# Exemplos

`P95 < 300ms`

`CPU_PER_REQUEST < X`

`QUEUE_TIME < Y`

---

# Invariante de Budget

Performance budgets deverão indicar fronteiras aceitáveis antes de saturação grave.

---

# Capacity Budget

Uma organização poderá reservar margens.

---

# Exemplo

> operar normalmente abaixo de 70% da capacidade sustentável.

---

# Invariante de Budget Contextual

Percentuais universais não deverão ser impostos pela Engenharia Oficial.

---

# Capacity Risk

Risco de capacidade poderá considerar:

- load atual;
- headroom;
- burst;
- crescimento;
- failover;
- dependências;
- Missões;
- tempo para escalar.

---

# Invariante de Risco Multidimensional

`CPU = 50%`

não deverá produzir conclusão isolada de baixo risco.

---

# Time to Exhaustion

OPS poderá estimar quanto tempo falta até limite.

---

# Exemplo

Backlog cresce:

`+1000/min`

Buffer restante:

`20.000`

↓

`TTE ≈ 20 min`

---

# Invariante de Tempo até Saturação

Previsão temporal poderá ser mais acionável que percentual instantâneo.

---

# Capacity Forecast

A Plataforma poderá projetar Demand futura.

---

# Fontes

- tendência;
- sazonalidade;
- campanhas;
- Missões;
- crescimento;
- eventos conhecidos.

---

# Invariante de Forecast com Incerteza

Previsão deverá possuir faixa de confiança quando apropriado.

---

# Forecast Error

Previsões irão errar.

---

# Invariante de Planejamento Robusto

Capacity Planning deverá considerar incerteza...

Não apenas valor central previsto.

---

# Capacity Planning

**Capacity Planning** representa decisão antecipada sobre recursos e margem necessários para atender demanda esperada.

---

# Horizonte

Pode ser:

- minutos;
- horas;
- dias;
- meses;
- anos.

---

# Invariante de Múltiplos Horizontes

Planejamento operacional e planejamento estrutural são problemas diferentes.

---

# Short-Term Capacity

Pode utilizar:

- autoscaling;
- throttling;
- shedding;
- rerouting.

---

# Long-Term Capacity

Pode exigir:

- nova infraestrutura;
- arquitetura;
- Provider;
- contrato;
- região;
- redesign.

---

# Invariante de Estratégia por Horizonte

A solução deverá corresponder ao tempo disponível.

---

# Scaling

Capacidade poderá ser aumentada.

---

# Vertical Scaling

Aumenta recursos de uma unidade.

---

# Horizontal Scaling

Aumenta quantidade de unidades.

---

# Invariante de Scaling Não Linear

Dobrar recursos não deverá ser presumido como dobrar capacidade.

---

# Scalability

**Scalability** representa capacidade de aumentar throughput ou população por meio de recursos adicionais ou arquitetura apropriada.

---

# Invariante Capacity ≠ Scalability

Ter capacidade hoje não significa conseguir crescer facilmente amanhã.

---

# Scaling Efficiency

Poderá medir quanto recurso adicional produz quanto ganho.

---

# Exemplo

`+100% CPU`

produz:

`+30% throughput`

---

# Invariante de Diminishing Returns

Escala poderá sofrer retornos decrescentes.

---

# Scale-Out Limit

Pode existir limite arquitetural.

---

# Exemplos

- banco central;
- lock global;
- partição única;
- Provider limit.

---

# Invariante de Gargalo Não Escalável

Adicionar workers não resolve dependência serial.

---

# Elasticity

**Elasticity** representa capacidade de ajustar recursos conforme Demand muda.

---

# Invariante Scalability ≠ Elasticity

Um sistema pode escalar manualmente...

mas não responder automaticamente à variação.

---

# Auto-Scaling

Recursos poderão aumentar ou diminuir automaticamente.

---

# Sinais de Escala

Podem incluir:

- CPU;
- queue depth;
- requests;
- latency;
- custom metrics.

---

# Invariante de Sinal Adequado

O indicador de autoscaling deverá possuir relação causal suficiente com necessidade de capacidade.

---

# CPU-Based Autoscaling

Pode funcionar para workload CPU-bound.

---

# Limite

Pode falhar para:

- I/O-bound;
- queue-bound;
- connection-bound.

---

# Invariante de Sinal por Gargalo

Autoscaling deverá responder ao recurso realmente limitante.

---

# Scale-Up Delay

Adicionar capacidade leva tempo.

---

# Pode Incluir

- provisioning;
- scheduling;
- startup;
- warmup;
- cache fill.

---

# Invariante de Delay de Elasticidade

A Plataforma deverá considerar tempo entre decisão e capacidade efetiva.

---

# Pre-Scaling

Capacidade poderá ser adicionada antes de Demand chegar.

---

# Exemplos

- lançamento;
- campanha;
- Missão;
- evento.

---

# Invariante de Previsão Acionável

Contexto conhecido deverá poder antecipar scaling.

---

# Warm Capacity

Recursos já iniciados e prontos.

---

# Cold Capacity

Recursos ainda precisam ser provisionados.

---

# Invariante Warm ≠ Theoretical Capacity

Capacidade potencial não deverá ser confundida com capacidade imediatamente utilizável.

---

# Scale-Down

Reduz recursos quando Demand cai.

---

# Risco

Reduzir cedo demais diminui headroom.

---

# Invariante de Scale-Down Conservador

A redução deverá considerar:

- variabilidade;
- backlog;
- Missões;
- tempo para reescalar.

---

# Hysteresis

Limiares diferentes poderão evitar oscilação.

---

# Cooldown

Pode impedir mudanças rápidas demais.

---

# Invariante de Estabilidade de Elasticidade

Autoscaling deverá evitar flapping e competição destrutiva com outros controladores.

---

# Capacity by Mission

Uma Missão poderá possuir necessidade de capacidade.

---

# Exemplo

`MISSION M-91`

necessita:

`3000 req/s RESERVED`

---

# Invariante de Reserva Missional

Capacidade necessária para Missão deverá poder ser planejada antes do consumo quando conhecida.

---

# Mission Capacity Window

A reserva poderá possuir:

- início;
- fim;
- escopo;
- prioridade.

---

# Invariante de Lifecycle de Reserva

Capacidade reservada não deverá permanecer indisponível indefinidamente após a Missão.

---

# Mission Burst

Uma Missão poderá produzir pico abrupto.

---

# Invariante de Missão como Fonte de Demand

CCM deverá poder informar Demand previsto à OPS.

---

# Capacity by Tenant

Tenants poderão possuir necessidades e limites diferentes.

---

# Invariante de Fairness Multi-Tenant

Um tenant não deverá consumir capacidade compartilhada de forma incompatível com política institucional.

---

# Noisy Neighbor

Um consumidor poderá degradar os demais.

---

# Invariante de Isolamento de Capacidade

OPS deverá possuir mecanismos para detectar e limitar interferência quando arquitetura permitir.

---

# Capacity Pool

Capacidade poderá ser compartilhada.

---

# Exemplos

- cluster;
- banco;
- Provider;
- GPU pool;
- worker pool.

---

# Invariante de Pool Compartilhado

Capacidade atribuída individualmente não deverá exceder realidade agregada.

---

# Oversubscription

A organização poderá prometer mais capacidade lógica que capacidade física...

esperando que todos não usem simultaneamente.

---

# Invariante de Oversubscription Governada

Oversubscription deverá considerar correlação de demanda e risco de pico simultâneo.

---

# Correlated Demand

Consumidores podem aumentar carga ao mesmo tempo.

---

# Exemplo

evento global.

---

# Invariante de Correlação

Capacidade compartilhada não deverá assumir independência entre cargas quando houver evidência de correlação.

---

# Dependency Capacity

Um Serviço depende da capacidade de outros.

---

# Exemplo

API suporta:

`10.000 req/s`

Banco suporta:

`6.000 req/s`

---

# Effective Service Capacity

fica limitada a aproximadamente:

`6.000 req/s`

---

# Invariante de Capacity Graph

A capacidade de um Serviço deverá considerar limites transitivos de Dependências.

---

# Provider Capacity

Providers externos poderão impor:

- quotas;
- rate limits;
- concurrency;
- regional limits;
- burst limits.

---

# Invariante de Limite Externo

Capacidade local não deverá ignorar restrições de Provider.

---

# Unknown Provider Capacity

Alguns Providers podem não publicar limite real.

---

# Invariante de Incerteza Externa

OPS deverá diferenciar capacidade conhecida de capacidade inferida.

---

# Provider Throttling

Pode aparecer como:

- 429;
- latency;
- errors;
- queueing.

---

# Invariante de Saturação Externa

Saturação do Provider deverá poder ser distinguida de saturação local quando Evidência permitir.

---

# Capacity Dependency Chain

Conceitualmente:

`USER DEMAND`

↓

`SERVICE A`

↓

`SERVICE B`

↓

`DATABASE`

↓

`PROVIDER`

---

# Invariante de Menor Limite

A capacidade end-to-end poderá ser governada pelo elo mais restritivo.

---

# Capacity Envelope

Uma Capacidade poderá possuir envelope operacional.

---

# Poderá Incluir

- sustainable load;
- burst load;
- max concurrency;
- headroom;
- queue limit;
- recovery margin.

---

# Invariante de Envelope

OPS deverá poder representar condições seguras de operação além de um único número máximo.

---

# Capacity State

Um Serviço poderá possuir Estado agregado.

---

# Exemplo

`HEALTHY`

`PRESSURED`

`SATURATED`

`OVERLOADED`

`RECOVERING`

---

# Invariante de Estado de Capacidade

A semântica deverá ser derivada de Sinais relevantes.

---

# Pressured State

Ainda opera...

mas headroom está reduzido.

---

# Saturated State

Algum recurso ou capacidade atinge limite relevante.

---

# Overloaded State

Demand excede capacidade sustentável e degrada comportamento.

---

# Recovering State

Demand caiu...

mas backlog ou efeitos residuais permanecem.

---

# Invariante de Recuperação Pós-Saturação

Fim do pico não significa retorno instantâneo à Saúde.

---

# Capacity Event

Transições de Estado poderão produzir Eventos.

---

# Exemplos

`CAPACITY_PRESSURE_DETECTED`

`SATURATION_ENTERED`

`OVERLOAD_ENTERED`

`CAPACITY_RECOVERED`

---

# Invariante Capacity ↔ Events

Eventos de capacidade deverão alimentar Gestão de Atenção quando impacto justificar.

---

# Capacity Alert

Alertas poderão considerar:

- headroom;
- TTE;
- queue growth;
- saturation;
- forecast.

---

# Invariante de Alerta Antecipatório

Capacity Management deverá poder alertar antes da indisponibilidade aberta.

---

# Exemplo

> Headroom restante: 8%.  
> Crescimento atual projeta saturação em 17 minutos.

---

# Invariante de Ação Antes do Limite

O melhor Alerta de capacidade poderá ocorrer quando o sistema ainda está tecnicamente saudável.

---

# Relação com 008

O `008` fornece Sinais de Saúde.

O `015` interpreta parte desses Sinais em termos de:

- capacidade;
- saturação;
- margem;
- overload.

---

# Invariante 008 ↔ 015

Capacity State deverá consumir Health Signals...

sem substituir o modelo de Saúde.

---

# Relação com 014

O `014` define Effective State.

Configurações como:

- concurrency;
- retries;
- quotas;
- limits;
- autoscaling;

alteram diretamente capacidade.

---

# Invariante 014 ↔ 015

Capacity Management deverá interpretar a configuração que realmente está efetiva...

Não apenas o valor desejado.

---

# Relação com 013

Deploy e Release poderão alterar performance e capacidade.

---

# Exemplo

Nova versão:

`CPU/request +30%`

---

# Consequência

Effective Capacity diminui.

---

# Invariante Release ↔ Capacity

Rollouts deverão poder observar regressões de eficiência e headroom.

---

# Relação com 012

Mudanças de capacidade poderão ser Changes.

---

# Exemplos

- aumentar cluster;
- alterar concurrency;
- adicionar região;
- trocar Provider.

---

# Invariante Change ↔ Capacity

O risco deverá considerar capacidade durante a transição...

Não apenas o Estado final.

---

# Próxima Dimensão

Com Resource Capacity, Service Capacity, Effective Capacity, Demand, Load, Throughput, Latency, Utilization, Saturation, Headroom, reservas, gargalos, concurrency, queues, backlog, burst, backpressure, throttling, quotas, load shedding, overload, performance, baselines, Capacity Risk, forecast, scaling, scalability, elasticity, autoscaling, capacidade por Missão, tenant, pools e Dependências estabelecidos...

o próximo lote deverá aprofundar:

- modelagem de capacidade;
- Little's Law;
- relação concurrency ↔ throughput ↔ latency;
- queueing;
- utilization curves;
- nonlinear saturation;
- service demand;
- performance profiling;
- bottleneck analysis;
- critical path;
- resource attribution;
- multi-resource saturation;
- CPU;
- memória;
- storage;
- network;
- connections;
- threads;
- database pools;
- GPU;
- accelerator capacity;
- cache;
- hit rate;
- miss penalty;
- capacity testing;
- load testing;
- stress testing;
- soak testing;
- spike testing;
- breakpoint testing;
- performance regression testing;
- capacity baselines;
- benchmark governance.

---

# Modelagem de Capacidade

Capacidade operacional não deverá depender apenas de observação empírica.

Quando apropriado...

OPS poderá utilizar modelos para compreender relações entre:

- Demand;
- Throughput;
- Latency;
- Concurrency;
- Queueing;
- Utilization;
- Saturation.

---

# Invariante de Modelo

Um modelo deverá representar aproximação útil da realidade...

Não substituir Evidência operacional.

---

# Capacity Model

Um **Capacity Model** representa relação entre carga, recursos e comportamento esperado.

---

# Poderá Responder

> Quanto throughput esperamos com esta quantidade de recursos?

> Quanto concurrency é necessário?

> Qual recurso saturará primeiro?

> Quanto headroom existe?

> Qual será a consequência de duplicar Demand?

---

# Invariante de Modelo Contextual

Capacity Models deverão declarar contexto relevante.

---

# Exemplos de Contexto

- versão;
- hardware;
- região;
- workload mix;
- configuração;
- Provider;
- tamanho de payload;
- cache state.

---

# Little's Law

Para sistemas estáveis...

uma relação fundamental poderá ser representada como:

`L = λ × W`

onde:

`L = quantidade média de trabalho no sistema`

`λ = taxa média de chegada ou conclusão`

`W = tempo médio no sistema`

---

# Aplicação Operacional

Conceitualmente:

`CONCURRENCY ≈ THROUGHPUT × LATENCY`

---

# Exemplo

Throughput:

`1000 req/s`

Latency média:

`0.2s`

Concurrency aproximada:

`200`

---

# Invariante de Little's Law

A relação deverá ser utilizada respeitando suas premissas...

especialmente estabilidade do sistema e médias compatíveis.

---

# Sistema Instável

Se Demand excede capacidade por período prolongado...

fila cresce continuamente.

---

# Consequência

Médias observadas durante crescimento ilimitado poderão perder utilidade para modelagem estacionária.

---

# Invariante de Estabilidade

OPS deverá distinguir sistema estável de sistema acumulando backlog.

---

# Concurrency e Throughput

Aumentar concurrency poderá aumentar throughput quando existem recursos ociosos ou espera de I/O.

---

# Mas

Depois de determinado ponto...

mais concurrency poderá aumentar:

- contenção;
- context switching;
- memória;
- locks;
- queueing;
- pressão em Dependências.

---

# Invariante de Concurrency Não Monotônica

Mais concorrência não significa necessariamente mais throughput.

---

# Concurrency Sweet Spot

Poderá existir faixa operacional em que throughput é elevado sem latência ou contenção excessiva.

---

# Invariante de Faixa Operacional

OPS deverá preferir envelope estável...

Não apenas ponto máximo observado.

---

# Latency Amplification

Pequenos aumentos de service time podem produzir grandes aumentos de response time quando utilização está alta.

---

# Invariante de Sensibilidade Próxima à Saturação

Quanto menor o headroom...

maior poderá ser a sensibilidade do sistema a pequenas variações.

---

# Queueing

Filas surgem quando trabalho chega mais rapidamente do que pode ser atendido imediatamente.

---

# Invariante de Queueing

Mesmo antes de perda de throughput...

queueing poderá aumentar significativamente latency.

---

# Queueing Delay

Conceitualmente:

`RESPONSE TIME`

=

`QUEUE TIME`

+

`SERVICE TIME`

---

# Invariante de Espera

Aumento de response time deverá poder ser decomposto entre espera e processamento quando arquitetura permitir.

---

# Arrival Rate

Taxa de chegada de trabalho.

---

# Service Rate

Taxa de atendimento possível.

---

# Utilization Conceitual

Em um modelo simples:

`ρ = λ / μ`

onde:

`λ = arrival rate`

`μ = service capacity`

---

# Invariante de Utilization Model

A fórmula simples não deverá ser aplicada cegamente a sistemas:

- paralelos;
- distribuídos;
- batch;
- multi-resource;
- com prioridades.

---

# Quando `ρ` se Aproxima de 1

Pequena variabilidade poderá produzir grandes filas.

---

# Invariante de Margem para Variabilidade

Operar continuamente próximo do limite teórico poderá ser incompatível com latência previsível.

---

# Variability

Mesmo quando média de Demand está abaixo da capacidade...

rajadas podem formar filas.

---

# Fontes de Variabilidade

- arrival pattern;
- payload;
- service time;
- cache misses;
- GC;
- locks;
- Dependências;
- network.

---

# Invariante de Variabilidade

Capacity Planning não deverá utilizar apenas médias quando caudas forem operacionalmente relevantes.

---

# Utilization Curve

OPS poderá observar relação entre utilização e desempenho.

---

# Exemplo Conceitual

`UTILIZATION ↑`

↓

`QUEUEING ↑`

↓

`LATENCY ↑`

---

# Invariante de Curva Empírica

A relação real deverá ser medida para workloads relevantes quando necessário.

---

# Nonlinear Saturation

Saturação frequentemente é não linear.

---

# Exemplo

De:

`40% → 60%`

pouca diferença.

De:

`80% → 90%`

latência cresce fortemente.

---

# Invariante de Não Linearidade

Percentuais iguais de crescimento não deverão ser presumidos como possuindo consequências iguais.

---

# Saturation Knee Detection

OPS poderá identificar empiricamente região onde performance começa a deteriorar rapidamente.

---

# Invariante de Knee como Referência

O knee point poderá orientar safe operating envelope...

mas deverá ser reavaliado quando contexto mudar.

---

# Service Demand

**Service Demand** representa quantidade de tempo de determinado recurso necessária por unidade de trabalho.

---

# Exemplo

Uma requisição utiliza em média:

`4ms CPU`

---

# Conceitualmente

Com:

`8 CPU cores`

o teto teórico aproximado, ignorando outros limites, seria relacionado à quantidade total de CPU-time disponível.

---

# Invariante de Service Demand

Modelos por recurso deverão considerar custo por unidade de trabalho.

---

# Resource Demand

Uma operação poderá consumir simultaneamente:

- CPU;
- memória;
- I/O;
- network;
- database;
- accelerator.

---

# Invariante de Demanda Multidimensional

Capacidade não deverá ser reduzida a uma única dimensão quando múltiplos recursos limitarem comportamento.

---

# Multi-Resource Saturation

Um workload poderá aproximar vários limites simultaneamente.

---

# Exemplo

`CPU = 85%`

`DB CONNECTIONS = 95%`

`NETWORK = 80%`

---

# Invariante de Saturação Composta

OPS deverá considerar interação entre recursos.

---

# Dominant Bottleneck

Em determinado momento...

um recurso poderá dominar o limite.

---

# Secondary Bottleneck

Outro recurso poderá tornar-se limitante logo após o primeiro ser ampliado.

---

# Invariante de Gargalos Encadeados

Capacity Analysis deverá procurar limites seguintes...

Não apenas o gargalo atual.

---

# Bottleneck Analysis

A análise poderá seguir:

`DEMAND`

↓

`ENTRY POINT`

↓

`QUEUE`

↓

`PROCESSING`

↓

`DEPENDENCIES`

↓

`STORAGE / PROVIDER`

↓

`RESPONSE`

---

# Invariante de Caminho Completo

O gargalo poderá existir fora do componente onde a latência é percebida.

---

# Critical Path

O **Critical Path** representa sequência de operações que determina tempo mínimo necessário para conclusão.

---

# Invariante de Critical Path

Otimizar trabalho fora do caminho crítico poderá não melhorar latência end-to-end.

---

# Parallel Work

Operações poderão ocorrer em paralelo.

---

# Exemplo

`CALL A = 100ms`

`CALL B = 200ms`

executadas paralelamente.

O tempo combinado não é necessariamente:

`300ms`

---

# Invariante de Topologia Temporal

Capacity e Performance Models deverão considerar paralelismo e dependências reais.

---

# Fan-Out

Uma requisição poderá gerar várias chamadas downstream.

---

# Exemplo

`1 REQUEST`

↓

`20 DOWNSTREAM CALLS`

---

# Invariante de Amplificação

Demand no edge não deverá ser confundida com Demand interna.

---

# Load Amplification Factor

Uma operação poderá possuir fator de amplificação.

---

# Exemplo

`1 USER REQUEST`

gera:

`8 DATABASE QUERIES`

---

# Invariante de Capacidade Transitiva

Capacity Planning deverá considerar trabalho derivado.

---

# Fan-Out Tail Amplification

Quando uma requisição depende de muitos downstreams...

a chance de pelo menos um ser lento aumenta.

---

# Invariante de Cauda Distribuída

Fan-out poderá amplificar tail latency mesmo quando cada Dependência isoladamente parece saudável.

---

# Resource Attribution

OPS poderá atribuir consumo a:

- Serviço;
- tenant;
- endpoint;
- operação;
- Missão;
- Provider;
- workload class.

---

# Invariante de Atribuição

Consumo agregado poderá ser insuficiente para explicar pressão de capacidade.

---

# Cost per Operation

Uma operação poderá possuir custo estimado.

---

# Exemplos

`CPU_MS_PER_REQUEST`

`DB_QUERIES_PER_TRANSACTION`

`GPU_MS_PER_INFERENCE`

---

# Invariante de Custo Unitário

Mudanças no custo por operação poderão antecipar regressão de capacidade antes do crescimento de Demand.

---

# Resource Efficiency Regression

Exemplo:

Antes:

`10 CPU-ms / request`

Depois:

`14 CPU-ms / request`

---

# Consequência

Com o mesmo hardware...

capacidade potencial diminui.

---

# Invariante de Eficiência como Capacidade

Regressão de eficiência deverá ser tratada como possível regressão de capacidade.

---

# Performance Profiling

**Profiling** busca compreender onde recursos e tempo são consumidos.

---

# Poderá Analisar

- CPU;
- memória;
- allocations;
- locks;
- I/O;
- queries;
- calls;
- GPU kernels.

---

# Invariante de Profiling

Profiling deverá ser utilizado como Evidência de consumo...

Não como substituto da observação end-to-end.

---

# CPU Capacity

CPU poderá limitar workloads computacionais.

---

# Sinais

- utilization;
- run queue;
- throttling;
- steal;
- context switching.

---

# Invariante CPU ≠ Percentual Isolado

`CPU 100%` possui significado diferente conforme:

- cores;
- quotas;
- throttling;
- workload;
- scheduler.

---

# CPU Throttling

Containers ou workloads poderão atingir quota antes da máquina física saturar.

---

# Invariante de Limite Hierárquico

Capacidade deverá considerar limites impostos por camada.

---

# CPU Run Queue

Trabalho aguardando CPU poderá indicar pressão.

---

# Invariante de Fila de CPU

Utilization elevada combinada com espera crescente pode indicar saturação mais claramente que utilização isolada.

---

# Context Switching

Concurrency excessiva poderá aumentar overhead.

---

# Invariante de CPU Útil

Tempo consumido pelo sistema não significa necessariamente trabalho útil.

---

# Memory Capacity

Memória possui comportamento diferente de CPU.

---

# Pressão de Memória

Pode aparecer como:

- allocation failure;
- paging;
- swap;
- reclaim;
- GC;
- OOM.

---

# Invariante de Memória

Memória livre baixa não deverá ser interpretada isoladamente como problema...

especialmente quando caches utilizam memória deliberadamente.

---

# Working Set

Representa conjunto de memória efetivamente necessário para workload ativo.

---

# Invariante de Working Set

Capacidade de memória deverá considerar working set e comportamento sob pressão.

---

# Memory Leak

Consumo poderá crescer com o tempo.

---

# Invariante de Tendência de Memória

Capacidade deverá considerar velocidade de crescimento...

Não apenas uso instantâneo.

---

# Time to OOM

OPS poderá estimar tempo até exaustão.

---

# Invariante de Exaustão Progressiva

Recursos acumulativos deverão possuir análise temporal quando possível.

---

# Garbage Collection

GC poderá consumir CPU e introduzir pausas.

---

# Invariante de GC como Capacidade

Pressão de memória poderá degradar throughput e latency antes de OOM.

---

# Storage Capacity

Storage possui pelo menos duas dimensões distintas:

- espaço;
- performance.

---

# Invariante Space ≠ I/O Capacity

Ter espaço livre não significa possuir IOPS ou throughput suficiente.

---

# Storage Space

Capacidade persistente disponível.

---

# Storage Growth Rate

Taxa de crescimento.

---

# Time to Full

Estimativa de tempo até exaustão.

---

# Invariante de Storage Forecast

Discos deverão poder gerar atenção antes de atingir 100%.

---

# IOPS

Operações de I/O por segundo.

---

# Storage Throughput

Volume transferido por tempo.

---

# I/O Latency

Tempo de resposta do armazenamento.

---

# Invariante de Perfil de I/O

Capacidade dependerá de:

- tamanho das operações;
- leitura versus escrita;
- sequencial versus aleatório;
- concorrência.

---

# Network Capacity

Rede poderá possuir limites de:

- bandwidth;
- packets/s;
- connections;
- NAT;
- egress;
- ingress.

---

# Invariante de Rede Multidimensional

Bandwidth livre não elimina saturação de packets ou conexões.

---

# Network Latency

Pode aumentar por:

- congestion;
- routing;
- distance;
- retransmission;
- queueing.

---

# Invariante de Rede End-to-End

Problema percebido em Serviço poderá originar-se no caminho de rede.

---

# Connection Capacity

Sistemas frequentemente possuem limites de conexão.

---

# Exemplos

- sockets;
- file descriptors;
- database connections;
- Provider connections.

---

# Invariante de Conexões

CPU baixa não significa headroom se pools de conexão estiverem esgotados.

---

# Connection Pool

Um pool limita concorrência downstream.

---

# Exemplo

`POOL_SIZE = 100`

---

# Invariante de Pool como Queue Boundary

Quando o pool esgota...

trabalho poderá começar a esperar antes mesmo de atingir a Dependência.

---

# Pool Wait Time

Tempo aguardando conexão.

---

# Invariante de Wait Time

Espera por pool poderá ser indicador direto de pressão de capacidade.

---

# Thread Capacity

Threads ou workers poderão limitar execução.

---

# Thread Pool Saturation

Todos os workers ficam ocupados.

---

# Consequência

Novas operações entram em fila.

---

# Invariante de Worker Saturation

CPU ociosa poderá coexistir com thread pool saturado quando workers aguardam I/O.

---

# Lock Contention

Operações poderão competir por recurso serializado.

---

# Invariante de Serialização Oculta

Um lock pode limitar throughput mesmo com recursos físicos abundantes.

---

# Database Capacity

Banco poderá ser limitado por:

- CPU;
- memory;
- connections;
- IOPS;
- locks;
- transactions;
- query efficiency;
- replication.

---

# Invariante de Database Capacity

“Banco saudável” não deverá ser inferido de uma única métrica.

---

# Query Cost

Queries diferentes possuem custos diferentes.

---

# Invariante de Workload SQL

Requests/s da aplicação poderão esconder mudança significativa no mix de queries.

---

# Slow Query

Uma query lenta pode:

- ocupar conexão;
- manter lock;
- consumir CPU;
- aumentar fila.

---

# Invariante de Efeito Multiplicador

Uma pequena classe de operações caras poderá reduzir capacidade global.

---

# Database Connection Pool

O pool da aplicação e a capacidade do banco deverão ser considerados juntos.

---

# Exemplo

100 instâncias × 100 conexões:

`10.000 CONNECTIONS`

---

# Invariante de Configuração Agregada

Limite seguro por instância deverá considerar população total.

---

# Connection Storm

Scale-out pode gerar explosão de conexões.

---

# Invariante Scaling ↔ Dependency

Adicionar capacidade upstream poderá saturar Dependência downstream.

---

# Cache Capacity

Cache poderá reduzir consumo de recursos downstream.

---

# Hit Rate

Proporção de requisições atendidas pelo cache.

---

# Miss Rate

Proporção que precisa buscar origem.

---

# Invariante de Hit Rate

Pequena queda no hit rate poderá gerar grande aumento de Demand downstream.

---

# Exemplo

`HIT RATE = 99%`

↓

`1% MISS`

Se cair para:

`95%`

↓

misses aumentam aproximadamente 5 vezes.

---

# Invariante de Amplificação por Cache

Capacity Planning deverá considerar comportamento sob redução de hit rate.

---

# Miss Penalty

Custo adicional de um cache miss.

---

# Invariante de Cache Efetivo

Hit rate elevado só é valioso quando miss penalty é relevante para o workload.

---

# Cache Warmup

Após restart ou failover...

cache poderá estar frio.

---

# Invariante de Cold Cache

Capacidade imediatamente após recuperação poderá ser menor que capacidade em steady state.

---

# Cache Stampede

Muitos consumers podem solicitar simultaneamente o mesmo dado ausente.

---

# Invariante Anti-Stampede

A arquitetura poderá precisar limitar trabalho duplicado durante miss massivo.

---

# GPU Capacity

Workloads de IA poderão possuir limites próprios.

---

# Dimensões Possíveis

- GPU utilization;
- VRAM;
- memory bandwidth;
- compute;
- batch size;
- queue depth;
- model residency.

---

# Invariante de Accelerator Capacity

Capacidade de aceleradores não deverá ser reduzida a percentual de utilização.

---

# GPU Memory

Um modelo poderá ocupar parte significativa da VRAM independentemente do throughput atual.

---

# Invariante de Residency

Capacidade disponível deverá considerar recursos reservados por modelos carregados.

---

# Batch Size

Batching poderá aumentar eficiência.

---

# Mas

pode aumentar:

- latency;
- queue time;
- memory.

---

# Invariante Throughput ↔ Latency em Batching

O tamanho de batch deverá equilibrar eficiência e experiência.

---

# Dynamic Batching

A Plataforma poderá aguardar brevemente para agrupar trabalho.

---

# Invariante de Janela de Batching

A espera introduzida deverá permanecer dentro do budget de latency.

---

# Model Capacity

Modelos diferentes podem possuir custos muito diferentes.

---

# Exemplos

- parâmetros;
- context window;
- precision;
- architecture;
- output length.

---

# Invariante de Capacidade por Modelo

“Uma GPU” não deverá ser tratada como unidade uniforme de capacidade de IA.

---

# Token Throughput

Para inferência textual...

capacidade poderá considerar:

- input tokens/s;
- output tokens/s;
- requests/s;
- concurrent sequences.

---

# Invariante de Unidade de Inferência

Requests/s isolado poderá ser inadequado quando tamanho das requisições variar fortemente.

---

# Context Length

Contextos maiores poderão consumir mais:

- memória;
- compute;
- tempo.

---

# Invariante de Custo por Contexto

Capacity Planning de IA deverá considerar distribuição real de tamanho de contexto.

---

# Output Length

Gerações longas podem manter recursos ocupados por mais tempo.

---

# Invariante de Ocupação Temporal

A capacidade deverá considerar duração das sequências...

Não apenas quantidade iniciada.

---

# Accelerator Pool

GPUs ou outros aceleradores poderão formar pool compartilhado.

---

# Invariante de Pool Heterogêneo

Hardware diferente poderá possuir capacidade diferente dentro do mesmo pool.

---

# Placement

O scheduler poderá decidir onde executar workload.

---

# Invariante de Placement

Capacidade física livre poderá ser inutilizável se não satisfizer requisitos do workload.

---

# Fragmentation

Recursos livres podem estar distribuídos de forma que nenhum nó consiga atender uma alocação grande.

---

# Exemplo

4 GPUs livres...

mas uma em cada host.

Workload exige:

`4 GPUs NO MESMO HOST`

---

# Invariante de Fragmentação de Capacidade

Capacidade agregada não deverá ser confundida com capacidade alocável.

---

# Capacity Testing

Modelos deverão ser validados por experimentos quando possível.

---

# Load Testing

**Load Testing** verifica comportamento sob carga esperada.

---

# Objetivos

- validar latency;
- throughput;
- utilization;
- headroom.

---

# Invariante de Load Test Representativo

A carga deverá representar workload suficientemente realista.

---

# Stress Testing

Aumenta carga além do esperado para observar limites.

---

# Objetivo

Descobrir:

- saturation point;
- bottleneck;
- failure mode;
- recovery behavior.

---

# Invariante de Stress Test

O objetivo não é apenas quebrar o sistema...

É compreender como ele quebra.

---

# Breakpoint Testing

Busca identificar ponto em que critérios deixam de ser atendidos.

---

# Exemplo

`P95 > 500ms`

em:

`12.500 req/s`

---

# Invariante de Breakpoint

O limite deverá ser associado ao critério violado.

---

# Spike Testing

Aplica crescimento abrupto de Demand.

---

# Objetivo

Avaliar:

- burst absorption;
- autoscaling;
- queues;
- shedding;
- recovery.

---

# Invariante de Spike

Capacidade para steady state não garante resistência a transientes.

---

# Soak Testing

Mantém carga por período prolongado.

---

# Objetivos

Detectar:

- memory leaks;
- resource leaks;
- fragmentation;
- thermal effects;
- gradual degradation.

---

# Invariante de Duração

Algumas falhas de capacidade só aparecem com tempo.

---

# Endurance Testing

Poderá avaliar comportamento prolongado sob carga representativa.

---

# Invariante Soak ≈ Endurance

A terminologia poderá variar...

mas o objetivo operacional deverá permanecer claro.

---

# Volume Testing

Avalia comportamento com grande volume de dados.

---

# Exemplos

- banco grande;
- fila grande;
- milhões de objetos;
- histórico extenso.

---

# Invariante Data Volume ≠ Request Load

Um sistema pode suportar tráfego alto com dataset pequeno...

e degradar quando o volume persistente cresce.

---

# Scalability Testing

Avalia ganho obtido ao adicionar recursos.

---

# Exemplo

`4 workers → 4000 req/s`

`8 workers → 7000 req/s`

`16 workers → 9000 req/s`

---

# Invariante de Scaling Curve

A relação entre recursos e capacidade deverá poder revelar diminishing returns.

---

# Failover Capacity Testing

A Plataforma deverá poder testar capacidade após perda de parte da infraestrutura.

---

# Exemplo

`REGION A OFFLINE`

↓

`REGION B + C`

absorvem carga.

---

# Invariante N-1 Capacity

Quando a arquitetura promete tolerância a perda de componente...

capacidade remanescente deverá ser considerada.

---

# N+1

Capacidade adicional poderá existir para perda de uma unidade.

---

# N+2

Poderá suportar duas perdas conforme arquitetura.

---

# Invariante de Redundância Real

Redundância de componentes sem capacidade remanescente suficiente não representa failover saudável.

---

# Chaos + Capacity

Experimentos de falha poderão ser combinados com carga.

---

# Exemplo

> O que acontece se perdermos 30% dos workers durante pico?

---

# Invariante de Capacidade sob Falha

Capacidade nominal deverá ser distinguida de capacidade em cenário degradado.

---

# Performance Regression Testing

Uma nova versão poderá ser comparada com baseline.

---

# Dimensões

- latency;
- throughput;
- CPU/request;
- memory/request;
- queries/request;
- GPU/token.

---

# Invariante de Regressão Multidimensional

Uma otimização em latency poderá piorar custo de recurso.

---

# Performance Baseline Version

Baselines deverão possuir contexto.

---

# Exemplo

`BASELINE V22`

para:

`SERVICE A`

`CONFIG C18`

`WORKLOAD PROFILE W4`

---

# Invariante de Baseline Versionado

Comparações deverão evitar misturar contextos incompatíveis.

---

# Benchmark

Um benchmark representa teste padronizado para comparação.

---

# Invariante Benchmark ≠ Production Capacity

Benchmark poderá ajudar comparação...

mas não deverá ser tratado automaticamente como capacidade real de produção.

---

# Synthetic Benchmark

Utiliza workload artificial controlado.

---

# Production-Like Benchmark

Busca aproximar comportamento real.

---

# Invariante de Fidelidade

Quanto maior a decisão operacional...

maior deverá ser a preocupação com representatividade do benchmark.

---

# Benchmark Governance

Benchmarks utilizados para decisões importantes deverão possuir:

- definição;
- versão;
- dataset;
- configuração;
- ambiente;
- metodologia.

---

# Invariante de Reprodutibilidade

Resultados relevantes deverão poder ser reproduzidos ou suficientemente explicados.

---

# Benchmark Drift

O benchmark pode deixar de representar produção.

---

# Exemplos

- workload mudou;
- payload cresceu;
- arquitetura mudou;
- cache mudou;
- hardware mudou.

---

# Invariante de Benchmark Vivo

Benchmarks deverão evoluir quando deixarem de representar o sistema real.

---

# Capacity Test Environment

Ambiente de teste poderá diferir de produção.

---

# Invariante de Correção de Escala

Resultados de ambiente menor deverão ser extrapolados com cautela.

---

# Shared Test Environment

Outros workloads podem interferir.

---

# Invariante de Ruído Experimental

Resultados deverão considerar variabilidade do ambiente de teste.

---

# Warmup Period

Testes poderão exigir aquecimento.

---

# Motivos

- caches;
- JIT;
- connections;
- model loading;
- pools.

---

# Invariante de Warmup

Medições de steady state não deverão ser contaminadas por inicialização quando o objetivo não for medir startup.

---

# Cold-Start Test

Em outros casos...

startup é justamente o objeto do teste.

---

# Invariante de Cenário Declarado

Cold e warm performance deverão permanecer distinguíveis.

---

# Test Ramp

Carga poderá aumentar progressivamente.

---

# Exemplo

`1000`

↓

`2000`

↓

`4000`

↓

`8000 req/s`

---

# Invariante de Ramp

O teste deverá permitir observar transições entre regimes de capacidade.

---

# Test Plateau

A carga poderá permanecer estável para observar comportamento.

---

# Invariante de Plateau

Tempo suficiente deverá ser dado para revelar efeitos relevantes.

---

# Test Abort Criteria

Um teste poderá ser interrompido quando atingir condição insegura.

---

# Exemplos

- error rate;
- resource exhaustion;
- data risk;
- Provider impact.

---

# Invariante de Experimento Seguro

Capacity Testing não deverá causar dano desnecessário ao ambiente ou Dependências.

---

# Test Isolation

Testes poderão precisar evitar tráfego real.

---

# Invariante de Fronteira Experimental

A Plataforma deverá conhecer quais sistemas podem ser impactados pelo teste.

---

# Provider Load Testing

Providers externos poderão proibir ou limitar testes de carga.

---

# Invariante de Contrato Externo

Capacity Testing deverá respeitar limites e acordos de Dependências externas.

---

# Test Data

Workload poderá depender de distribuição dos dados.

---

# Exemplos

- objetos pequenos versus grandes;
- hot keys;
- skew;
- cardinalidade;
- histórico.

---

# Invariante de Dados Representativos

Carga realista exige mais que quantidade correta de requests.

---

# Traffic Replay

Tráfego histórico poderá ser utilizado para testes.

---

# Invariante de Replay Seguro

Dados sensíveis e efeitos colaterais deverão ser controlados.

---

# Shadow Traffic

Cópia de tráfego poderá ser enviada para ambiente paralelo.

---

# Invariante de Shadow

O tráfego duplicado não deverá produzir efeitos externos indevidos.

---

# Performance Test Result

Um resultado deverá possuir contexto suficiente.

---

# Poderá Incluir

- workload;
- versão;
- configuração;
- ambiente;
- duração;
- throughput;
- latency;
- utilization;
- errors;
- saturation point.

---

# Invariante de Resultado Interpretável

Um número sem contexto não deverá tornar-se capacidade oficial.

---

# Capacity Evidence

Capacity Models poderão utilizar Evidências de:

- produção;
- testes;
- benchmarks;
- incidentes;
- Providers;
- histórico.

---

# Invariante de Proveniência de Capacidade

OPS deverá poder saber de onde uma estimativa de capacidade veio.

---

# Observed Capacity

Capacidade inferida de comportamento real.

---

# Tested Capacity

Capacidade demonstrada em teste.

---

# Theoretical Capacity

Capacidade derivada de modelo.

---

# Contractual Capacity

Capacidade prometida por Provider ou contrato.

---

# Invariante de Classes de Evidência

Essas capacidades não deverão ser tratadas como equivalentes.

---

# Capacity Confidence

Uma estimativa poderá possuir confiança.

---

# Exemplo

`CAPACITY = 10K–12K req/s`

`CONFIDENCE = HIGH`

---

# Invariante de Incerteza Explícita

Quando o limite não for conhecido com precisão...

OPS deverá representar incerteza em vez de fabricar exatidão.

---

# Capacity Assumption

Modelos poderão depender de hipóteses.

---

# Exemplos

> cache hit rate permanecerá acima de 95%.

> Provider continuará suportando 5K req/s.

> workload mix permanecerá estável.

---

# Invariante de Hipóteses Recuperáveis

Premissas relevantes deverão poder ser identificadas.

---

# Assumption Violation

Quando uma hipótese deixa de ser verdadeira...

a capacidade estimada poderá perder validade.

---

# Invariante de Validade Condicional

Capacity Estimates deverão poder ser invalidadas por mudança de contexto.

---

# Capacity Recalibration

Modelos poderão ser atualizados com novas Evidências.

---

# Exemplo

Teste previa:

`12K req/s`

Produção demonstra degradação em:

`9K req/s`

---

# Invariante de Evidência Superior

O modelo deverá aprender com realidade observada.

---

# Capacity Knowledge

Com o tempo...

OPS poderá acumular conhecimento sobre:

- saturation points;
- scaling curves;
- bottlenecks;
- workload costs;
- failover capacity;
- recovery behavior.

---

# Invariante de Memória de Capacidade

Experimentos e Incidentes deverão poder melhorar futuras decisões de capacidade.

---

# Próxima Dimensão

Com modelagem de capacidade, Little's Law, concurrency, queueing, nonlinear saturation, Service Demand, Critical Path, fan-out, Resource Attribution, CPU, memória, storage, network, connections, threads, database capacity, cache, GPU, accelerator capacity, Capacity Testing, Load Testing, Stress Testing, Spike Testing, Soak Testing, Scalability Testing, Failover Capacity Testing, benchmarks, Capacity Evidence e Confidence estabelecidos...

o próximo lote deverá aprofundar:

- capacity planning;
- demand forecasting;
- sazonalidade;
- tendência;
- growth rate;
- peak modeling;
- percentile demand;
- burst modeling;
- scenario planning;
- what-if analysis;
- reservas;
- contingency capacity;
- failover reserve;
- disaster capacity;
- regional capacity;
- multi-region;
- placement;
- bin packing;
- fragmentation;
- allocation;
- reservations;
- commitments;
- quotas;
- fairness;
- priority;
- admission control;
- capacity arbitration;
- Mission capacity;
- capacity conflicts;
- Provider capacity planning;
- procurement lead time;
- long-term planning;
- cost versus headroom;
- overprovisioning;
- underprovisioning;
- rightsizing;
- capacity economics.

---

# Capacity Planning

Capacidade sustentável hoje...

não garante capacidade suficiente amanhã.

Por isso...

OPS deverá possuir mecanismos para antecipar crescimento, picos, falhas e compromissos futuros.

Essa capacidade poderá ser compreendida como:

**Capacity Planning.**

---

# Objetivo

Responder:

> Quanto Demand esperamos?

> Quando esperamos?

> Em qual escopo?

> Qual capacidade será necessária?

> Quanto headroom devemos manter?

> Qual reserva precisamos para falhas?

> Quanto tempo leva para adicionar capacidade?

> Qual será o custo de operar com margem suficiente?

---

# Invariante de Capacity Planning

Planejamento deverá considerar tanto o crescimento esperado quanto a incerteza sobre esse crescimento.

---

# Demand Forecasting

**Demand Forecasting** representa estimativa de carga futura.

---

# Fontes Possíveis

- histórico;
- sazonalidade;
- tendência;
- crescimento;
- lançamentos;
- campanhas;
- contratos;
- Missões;
- comportamento de usuários;
- eventos externos conhecidos.

---

# Invariante de Forecast Multissinal

A previsão não deverá depender exclusivamente de extrapolação histórica quando eventos conhecidos alterarem o futuro.

---

# Historical Demand

O histórico poderá revelar padrões.

---

# Exemplos

- horário;
- dia da semana;
- mês;
- temporada;
- fechamento;
- ciclos institucionais.

---

# Invariante de Histórico Contextual

Comportamento passado deverá informar...

sem ser tratado como garantia do futuro.

---

# Trend

Uma série poderá possuir crescimento ou queda estruturais.

---

# Exemplo

Demand cresce:

`+8% / mês`

---

# Invariante de Tendência

OPS deverá distinguir tendência de flutuação temporária.

---

# Growth Rate

Poderá ser medida em:

- percentual;
- volume absoluto;
- usuários;
- transações;
- dados;
- tokens;
- conexões.

---

# Invariante de Crescimento por Unidade Relevante

A métrica deverá refletir o recurso ou workload que realmente pressiona capacidade.

---

# Compound Growth

Crescimento percentual composto pode acelerar necessidade de capacidade.

---

# Exemplo

`+10% / mês`

não significa:

`+120% / ano`

por soma simples.

---

# Invariante de Crescimento Composto

Horizontes longos deverão considerar natureza acumulativa quando aplicável.

---

# Seasonality

Demand poderá repetir padrões periódicos.

---

# Exemplos

- horário comercial;
- fim do mês;
- feriados;
- temporada;
- eventos anuais.

---

# Invariante de Sazonalidade

Planejamento deverá considerar ciclos relevantes...

Não apenas média anual.

---

# Multi-Seasonality

Um sistema poderá possuir simultaneamente:

- ciclo diário;
- semanal;
- mensal;
- anual.

---

# Invariante de Padrões Sobrepostos

Forecast deverá considerar múltiplas frequências quando isso melhorar capacidade de decisão.

---

# Peak Demand

A capacidade frequentemente precisa ser dimensionada para picos...

Não para média.

---

# Peak-to-Average Ratio

Poderá representar:

`PEAK / AVERAGE`

---

# Invariante de Pico

Média baixa não deverá produzir falsa sensação de margem quando picos são altos.

---

# Percentile Demand

OPS poderá planejar com percentis de Demand.

---

# Exemplos

`P95 DEMAND`

`P99 DEMAND`

---

# Invariante de Percentil Contextual

O percentil escolhido deverá refletir tolerância a risco e capacidade de proteção contra excedentes.

---

# Extreme Peak

Eventos raros podem ultrapassar histórico comum.

---

# Invariante de Cauda de Demand

Capacity Planning deverá decidir conscientemente se pretende:

- absorver;
- degradar;
- limitar;
- rejeitar;

eventos extremos.

---

# Burst Modeling

Um pico curto pode exigir estratégia diferente de carga sustentada.

---

# Dimensões

Poderão incluir:

- amplitude;
- duração;
- frequência;
- velocidade de crescimento.

---

# Invariante de Forma do Pico

Dois picos com o mesmo volume máximo poderão possuir impactos diferentes conforme duração e ramp rate.

---

# Ramp Rate

Velocidade com que Demand cresce.

---

# Exemplo

`2K → 10K req/s`

em:

`10 segundos`

---

# Invariante de Ramp Rate

Elasticidade deverá considerar quão rápido capacidade consegue reagir.

---

# Demand Shock

Um crescimento abrupto pode ocorrer sem aviso.

---

# Exemplos

- viralidade;
- falha de concorrente;
- evento externo;
- recuperação após outage;
- retry storm.

---

# Invariante de Choque

Capacity Planning deverá possuir estratégia para cenários não previstos exatamente.

---

# Scenario Planning

OPS poderá modelar cenários alternativos.

---

# Exemplos

`BASE`

`HIGH GROWTH`

`FAILOVER`

`MISSION PEAK`

`PROVIDER DEGRADATION`

---

# Invariante de Cenários

Planejamento deverá evitar depender de um único futuro.

---

# What-If Analysis

Perguntas poderão incluir:

> E se Demand dobrar?

> E se perdermos uma região?

> E se o Provider reduzir quota?

> E se uma nova Release consumir 20% mais CPU?

---

# Invariante de What-If

Modelos deverão poder apoiar decisões antes da condição ocorrer.

---

# Sensitivity Analysis

OPS poderá verificar quais variáveis mais alteram capacidade.

---

# Exemplo

Capacidade depende fortemente de:

`CACHE_HIT_RATE`

---

# Invariante de Sensibilidade

As premissas mais influentes deverão receber maior atenção de observabilidade e validação.

---

# Confidence Interval

Forecast poderá possuir intervalo.

---

# Exemplo

Demand em 30 dias:

`12K–16K req/s`

---

# Invariante de Intervalo

Planejamento deverá considerar incerteza...

Não apenas ponto central.

---

# Forecast Confidence

Poderá ser:

`HIGH`

`MEDIUM`

`LOW`

---

# Invariante de Confiança

Baixa confiança poderá justificar maior margem ou opções de contingência.

---

# Forecast Horizon

Horizontes diferentes exigem técnicas diferentes.

---

# Minutos

Pode apoiar:

- pre-scaling;
- autoscaling;
- throttling.

---

# Dias

Pode apoiar:

- reservas;
- alocação;
- agendamento.

---

# Meses

Pode apoiar:

- procurement;
- contratos;
- arquitetura.

---

# Invariante de Horizonte

Quanto maior o lead time de aquisição...

mais cedo a necessidade deverá ser identificada.

---

# Capacity Lead Time

Tempo necessário para tornar capacidade adicional realmente utilizável.

---

# Poderá Incluir

- aprovação;
- compra;
- contratação;
- provisionamento;
- instalação;
- configuração;
- validação;
- warmup.

---

# Invariante de Lead Time Completo

Ter orçamento não significa ter capacidade disponível imediatamente.

---

# Procurement Lead Time

Infraestrutura física ou contratos poderão levar semanas ou meses.

---

# Invariante de Planejamento Antecipado

Dependências de longo lead time deverão possuir forecast compatível.

---

# Cloud Capacity

Infraestrutura elástica pode parecer instantânea.

---

# Limites

Podem existir:

- quotas;
- regional shortages;
- GPU scarcity;
- account limits;
- provisioning time.

---

# Invariante de Elasticidade Não Infinita

Cloud não deverá ser tratado como capacidade ilimitada e instantânea.

---

# Provider Capacity Reservation

Um Provider poderá oferecer reserva contratual.

---

# Invariante de Reserva Externa

Reserva deverá ser distinguida de capacidade apenas teoricamente disponível.

---

# Capacity Reservation

Capacidade poderá ser reservada antecipadamente.

---

# Tipos

- operacional;
- missional;
- failover;
- segurança;
- contrato;
- manutenção.

---

# Invariante de Reserva Identificável

OPS deverá saber:

> Quanto está reservado?

> Para quê?

> Por quanto tempo?

---

# Reserve Release

Quando a necessidade termina...

a capacidade poderá voltar ao pool.

---

# Invariante de Lifecycle de Reserva

Reservas temporárias deverão possuir condição de liberação.

---

# Failover Reserve

Parte da capacidade poderá ser mantida para absorver falha.

---

# Exemplo

Duas regiões.

Cada uma opera normalmente em:

`50%`

para conseguir absorver perda da outra.

---

# Invariante de Reserva de Failover

Capacidade usada para redundância não deverá ser tratada como headroom livre.

---

# N-1 Planning

A Plataforma poderá planejar para perda de uma unidade relevante.

---

# Exemplos

- host;
- rack;
- zone;
- region;
- Provider.

---

# Invariante de Unidade N-1

A unidade de falha deverá refletir arquitetura real.

---

# N-2 Planning

Alguns contextos poderão exigir perda simultânea de duas unidades.

---

# Invariante de Redundância Proporcional

A Engenharia Oficial não deverá impor N+1 ou N+2 universalmente.

---

# Disaster Capacity

Cenários de desastre poderão possuir capacidade diferente de steady state.

---

# Exemplo

Ambiente secundário suporta:

`60% NORMAL LOAD`

---

# Consequência

Durante desastre...

será necessário:

- shedding;
- prioridade;
- degraded mode.

---

# Invariante de DR Capacity Conhecida

Disaster Recovery não deverá presumir capacidade equivalente quando ela não existe.

---

# Capacity under Failure

Capacidade em condição degradada deverá ser modelada.

---

# Exemplos

- menos réplicas;
- sem cache;
- sem região;
- sem Provider;
- sem accelerator pool.

---

# Invariante de Capacidade Degradada

Planejamento deverá considerar capacidade quando mecanismos de Resiliência estão sendo usados.

---

# Regional Capacity

Cada região poderá possuir capacidade própria.

---

# Invariante de Região

Capacidade global não deverá esconder saturação regional.

---

# Regional Headroom

Uma região poderá estar:

`80%`

enquanto outra está:

`30%`

---

# Invariante de Distribuição

Headroom agregado poderá ser inutilizável se tráfego não puder ser movido.

---

# Transferable Capacity

Capacidade só é realmente compartilhável quando trabalho pode ser deslocado.

---

# Invariante de Mobilidade de Carga

OPS deverá distinguir:

`AVAILABLE SOMEWHERE`

de:

`AVAILABLE WHERE NEEDED`

---

# Multi-Region Capacity

Capacidade poderá ser coordenada entre regiões.

---

# Estratégias

- active-active;
- active-passive;
- primary-secondary;
- regional affinity.

---

# Invariante de Topologia de Capacidade

A arquitetura de tráfego deverá determinar quanto headroom global é efetivamente utilizável.

---

# Cross-Region Shift

Tráfego pode ser redistribuído.

---

# Limites

- latency;
- data residency;
- capacity;
- cost;
- contracts;
- Missões.

---

# Invariante de Shift Contextual

Mover carga não deverá ser presumido como gratuito ou sempre possível.

---

# Placement

Recursos e workloads precisam ser colocados em locais compatíveis.

---

# Constraints

Podem incluir:

- região;
- zone;
- hardware;
- accelerator;
- compliance;
- affinity;
- anti-affinity.

---

# Invariante de Capacidade Alocável

Capacidade total deverá ser distinguida de capacidade que satisfaz constraints específicas.

---

# Bin Packing

Schedulers poderão tentar encaixar workloads nos recursos disponíveis.

---

# Invariante de Packing

Uso eficiente de recursos poderá competir com resiliência e headroom.

---

# Dense Packing

Concentra workloads.

---

# Benefício

Maior eficiência.

---

# Risco

Maior blast radius e menor espaço para movimentação.

---

# Invariante Eficiência ↔ Resiliência

Maximizar utilização não deverá automaticamente ser objetivo de Capacity Management.

---

# Fragmentation

Capacidade livre poderá existir em pedaços não utilizáveis.

---

# Exemplo

Cluster possui:

`100 GB FREE`

Mas nenhum nó possui:

`32 GB CONTIGUOUS`

necessários para workload.

---

# Invariante de Fragmentação

Capacidade agregada deverá considerar forma dos recursos.

---

# GPU Fragmentation

Pode ocorrer por:

- quantidade;
- memória;
- tipo;
- topology;
- placement.

---

# Invariante de Accelerator Placement

Planejamento de accelerator capacity deverá considerar capacidade realmente schedulable.

---

# Allocation

Capacidade poderá ser atribuída a consumidores.

---

# Exemplos

- tenant;
- equipe;
- Serviço;
- Missão;
- workload.

---

# Invariante de Allocation

Alocação lógica não deverá exceder capacidade física sem política consciente de oversubscription.

---

# Reservation

Garante ou protege determinado volume.

---

# Commitment

Representa capacidade prometida...

mesmo que ainda não esteja em uso.

---

# Invariante Reservation ≠ Commitment

Uma promessa poderá existir sem recurso fisicamente isolado.

---

# Capacity Commitment Risk

Múltiplos compromissos poderão convergir para mesma janela.

---

# Invariante de Conflito Futuro

OPS deverá considerar sobreposição temporal de compromissos.

---

# Reservation Calendar

A Plataforma poderá visualizar reservas futuras.

---

# Poderá Mostrar

- início;
- fim;
- capacidade;
- região;
- Missão;
- consumidor.

---

# Invariante de Calendário de Capacidade

Planejamento deverá considerar o futuro já comprometido.

---

# Capacity Conflict

Duas necessidades poderão competir por recurso insuficiente.

---

# Exemplo

Missão A exige:

`40 GPUs`

Missão B exige:

`30 GPUs`

Pool disponível:

`50 GPUs`

---

# Invariante de Conflito Explícito

OPS deverá detectar incompatibilidade antes do início quando possível.

---

# Capacity Arbitration

Quando capacidade é insuficiente...

será necessária decisão de distribuição.

---

# Poderá Considerar

- prioridade;
- Criticidade;
- Missão;
- contrato;
- fairness;
- impacto.

---

# Invariante de Arbitragem Governada

A última requisição ou consumidor mais agressivo não deverá vencer implicitamente.

---

# Priority Class

Workloads poderão possuir classes.

---

# Exemplos

`CRITICAL`

`HIGH`

`STANDARD`

`BEST_EFFORT`

---

# Invariante de Prioridade com Semântica

A classe deverá possuir consequência operacional definida.

---

# Preemption

Trabalho de menor prioridade poderá ser interrompido para liberar capacidade.

---

# Invariante de Preemption

A interrupção deverá considerar:

- Estado;
- side effects;
- recuperação;
- custo.

---

# Non-Preemptible Workload

Alguns workloads não poderão ser interrompidos com segurança.

---

# Invariante de Interrupção Conhecida

Capacity Arbitration deverá saber o que pode realmente ser deslocado ou interrompido.

---

# Admission Control

**Admission Control** decide se novo trabalho pode entrar.

---

# Pergunta

> Existe capacidade suficiente para aceitar esta operação sem comprometer o sistema?

---

# Invariante de Admission Control

Rejeitar antes de entrar poderá ser mais seguro que aceitar trabalho impossível de concluir.

---

# Admission Criteria

Podem incluir:

- queue depth;
- concurrency;
- headroom;
- priority;
- tenant quota;
- Missão;
- dependency health.

---

# Invariante de Admissão Contextual

Critérios deverão refletir capacidade end-to-end.

---

# Admission Reservation

Uma operação longa poderá reservar capacidade antes de começar.

---

# Invariante de Reserva Prévia

Aceitar trabalho sem recursos necessários poderá criar backlog impossível de cumprir.

---

# Capacity Token

Um modelo poderá utilizar tokens representando capacidade disponível.

---

# Invariante de Token Abstrato

A unidade deverá manter relação suficiente com custo operacional real.

---

# Fairness

Capacidade compartilhada poderá exigir distribuição justa.

---

# Fairness não Significa Igualdade

Consumidores podem possuir prioridades ou contratos diferentes.

---

# Invariante de Fairness por Política

Distribuição deverá seguir critérios explícitos.

---

# Weighted Fairness

Consumidores poderão possuir pesos.

---

# Exemplo

Tenant A:

`WEIGHT = 2`

Tenant B:

`WEIGHT = 1`

---

# Invariante de Peso Explicável

Peso deverá representar política compreensível.

---

# Starvation

Consumidor de baixa prioridade pode nunca receber capacidade.

---

# Invariante Anti-Starvation

Quando o domínio exigir...

a política deverá reservar progresso mínimo.

---

# Capacity by Mission

CCM poderá originar compromissos de capacidade.

---

# Mission Capacity Request

Poderá incluir:

- workload;
- volume;
- janela;
- região;
- prioridade;
- tolerância à degradação.

---

# Invariante de Pedido Missional Estruturado

OPS deverá receber contexto suficiente para avaliar viabilidade.

---

# Mission Capacity Feasibility

Antes da Missão...

OPS poderá responder:

`SUPPORTED`

`SUPPORTED_WITH_RISK`

`PARTIALLY_SUPPORTED`

`NOT_SUPPORTED`

---

# Invariante de Honestidade de Capacidade

A Plataforma não deverá confirmar capacidade que não consegue sustentar com Evidência suficiente.

---

# Capacity Shortfall

Pode existir diferença entre necessidade e disponibilidade.

---

# Exemplo

Demand prevista:

`15K req/s`

Capacidade segura:

`12K req/s`

Shortfall:

`3K req/s`

---

# Invariante de Deficit Explícito

Déficit conhecido deverá ser visível antes de virar Incidente.

---

# Mitigation Options

Podem incluir:

- scale;
- optimize;
- reserve;
- shift;
- throttle;
- shed;
- degrade;
- renegotiate.

---

# Invariante de Alternativas

Capacity Planning deverá considerar múltiplas estratégias...

Não apenas adicionar infraestrutura.

---

# Provider Capacity Planning

Dependências externas também exigem planejamento.

---

# Elementos

Podem incluir:

- quotas;
- contracted throughput;
- concurrency;
- regions;
- burst;
- escalation process.

---

# Invariante de Provider Capacity

OPS deverá conhecer limites contratuais e observados quando eles governarem capacidade local.

---

# Provider Quota Increase

Aumento poderá possuir lead time.

---

# Invariante de Quota Antecipada

Elasticidade local não resolve limite externo que demora dias para ser ampliado.

---

# Provider Capacity Uncertainty

A capacidade real do Provider pode não ser totalmente conhecida.

---

# Invariante de Dependência Incerta

Planejamento deverá incluir contingência quando a capacidade externa não possuir garantia forte.

---

# Multi-Provider Capacity

Carga poderá ser distribuída entre múltiplos Providers.

---

# Benefícios

- resiliência;
- escala;
- negociação;
- regionalização.

---

# Limites

- compatibilidade;
- custo;
- qualidade;
- capacidade desigual;
- operação.

---

# Invariante de Capacidade Multi-Provider

A soma nominal de Providers não deverá ser tratada como capacidade fungível automaticamente.

---

# Provider Failover Capacity

Provider secundário deverá possuir margem para absorver failover se essa for a estratégia.

---

# Invariante de Failover Contratual

Fallback não deverá existir apenas como endpoint alternativo.

---

# Long-Term Capacity Planning

Horizontes longos poderão considerar:

- crescimento institucional;
- novas regiões;
- novos produtos;
- mudança de arquitetura;
- novas Missões;
- novos modelos.

---

# Invariante de Planejamento Estrutural

Capacity Management deverá alimentar decisões arquiteturais antes de limites tornarem-se urgentes.

---

# Capacity Expansion Trigger

A organização poderá definir condições para iniciar expansão.

---

# Exemplo

> Se forecast P95 exceder 70% da capacidade segura dentro do procurement lead time...

iniciar expansão.

---

# Invariante de Trigger Temporal

A decisão deverá considerar quando a capacidade chegará...

Não apenas quando o limite será ultrapassado.

---

# Capacity Review Horizon

Capacidade poderá ser revisada periodicamente conforme:

- volatilidade;
- Criticidade;
- lead time.

---

# Invariante de Revisão Proporcional

Serviços estáveis e elásticos podem exigir cadência diferente de recursos escassos e lentos de adquirir.

---

# Overprovisioning

Manter capacidade acima da demanda atual.

---

# Benefícios

- headroom;
- resiliência;
- burst;
- simplicidade.

---

# Custos

- dinheiro;
- energia;
- recursos ociosos.

---

# Invariante de Overprovisioning

Capacidade ociosa poderá ser decisão racional de risco.

---

# Underprovisioning

Capacidade abaixo da necessidade segura.

---

# Consequências

- latency;
- backlog;
- throttling;
- Incidentes.

---

# Invariante de Subdimensionamento

Eficiência econômica não deverá ser obtida às custas de exposição operacional não aceita.

---

# Rightsizing

Busca aproximar recursos das necessidades reais.

---

# Invariante Rightsizing ≠ Maximum Utilization

Rightsizing deverá preservar margem adequada.

---

# Rightsizing Opportunity

Recursos excessivos poderão ser reduzidos.

---

# Mas

deverão considerar:

- picos;
- failover;
- Missões;
- scaling delay.

---

# Invariante de Contexto de Rightsizing

Uso médio baixo não é prova suficiente de excesso.

---

# Capacity Economics

Capacidade possui custo.

---

# Dimensões

Podem incluir:

- infraestrutura;
- energia;
- licenças;
- Provider;
- equipe;
- oportunidade.

---

# Invariante de Custo como Dimensão

OPS deverá considerar custo...

sem transformar Capacity Management exclusivamente em otimização financeira.

---

# Cost per Capacity Unit

Poderá estimar custo de determinada capacidade.

---

# Exemplo

`COST / 1K REQUESTS`

---

# Invariante de Unidade Econômica

A unidade deverá manter relação com trabalho útil.

---

# Marginal Capacity Cost

O próximo incremento de capacidade poderá custar diferente do anterior.

---

# Exemplo

Primeiros 80% usam infraestrutura existente.

Últimos 20% exigem nova região.

---

# Invariante de Custo Não Linear

Capacidade adicional poderá possuir degraus econômicos.

---

# Cost versus Headroom

Mais headroom geralmente aumenta custo.

Menos headroom aumenta risco.

---

# Invariante de Trade-Off Explícito

A decisão deverá refletir tolerância institucional a:

- custo;
- risco;
- performance;
- recuperação.

---

# Capacity Waste

Recursos poderão permanecer alocados sem necessidade.

---

# Exemplos

- instâncias esquecidas;
- reservas vencidas;
- storage órfão;
- GPU ociosa.

---

# Invariante de Waste

Capacidade inutilizada deverá poder ser identificada sem assumir automaticamente que toda ociosidade é desperdício.

---

# Strategic Idle Capacity

Alguma ociosidade existe deliberadamente para:

- failover;
- burst;
- Missão;
- recovery.

---

# Invariante Idle ≠ Waste

Capacidade ociosa com propósito deverá permanecer distinguível de desperdício.

---

# Shared Capacity Economics

Pools compartilhados podem aumentar eficiência.

---

# Risco

Maior compartilhamento pode aumentar:

- interferência;
- correlação;
- blast radius.

---

# Invariante de Eficiência Compartilhada

Economia de escala deverá ser equilibrada com isolamento operacional.

---

# Capacity Value

Capacidade não deve ser avaliada apenas pelo quanto custa...

mas pelo valor operacional que protege.

---

# Exemplo

20% de headroom adicional pode parecer caro...

até ser necessário durante failover.

---

# Invariante de Valor da Margem

Headroom deverá ser interpretado como capacidade de absorver incerteza.

---

# Capacity Decision

Uma decisão poderá combinar:

`DEMAND FORECAST`

+

`SAFE CAPACITY`

+

`RESERVES`

+

`FAILOVER`

+

`LEAD TIME`

+

`COST`

+

`MISSION CONTEXT`

↓

`CAPACITY PLAN`

---

# Invariante de Plano Fundamentado

Cada plano deverá ser relacionável a hipóteses e Evidências relevantes.

---

# Capacity Plan

Poderá conter:

- horizonte;
- Demand prevista;
- capacidade atual;
- shortfall;
- reservas;
- ações;
- custos;
- riscos;
- dependências;
- confidence.

---

# Invariante de Capacity Plan

O plano deverá poder mudar quando premissas mudarem.

---

# Dynamic Capacity Plan

Forecast e realidade poderão atualizar plano continuamente.

---

# Exemplo

Demand real:

`+25% ABOVE FORECAST`

↓

expansão antecipada.

---

# Invariante de Planejamento Adaptativo

Capacity Planning não deverá ser exercício anual estático.

---

# Capacity Intelligence

Com histórico suficiente...

Agentes poderão comparar:

- forecast;
- demanda real;
- headroom;
- custos;
- Incidentes;
- reservas.

---

# Exemplo

> O modelo subestima picos de segunda-feira em aproximadamente 18%.

---

# Invariante de Forecast Learning

Erros sistemáticos deverão alterar modelos futuros.

---

# Capacity Recommendation

Agente poderá recomendar:

> Adicionar 20% de capacidade antes da Missão M-91.

---

# Invariante de Recomendação Explicável

A recomendação deverá indicar:

- forecast;
- headroom;
- lead time;
- risco.

---

# Capacity Conflict Detection

Agentes poderão detectar:

> Duas Missões possuem reservas incompatíveis na mesma GPU Fleet.

---

# Invariante de Conflito Antecipado

A Plataforma deverá favorecer resolução antes da janela operacional.

---

# Eva e Capacity Planning

Eva poderá responder:

> Temos capacidade para a próxima semana?

---

# Resposta Possível

> Sob o forecast atual, sim.  
> O pico previsto usa aproximadamente 72% da capacidade segura.  
> Entretanto, a confiança é moderada porque o lançamento previsto não possui histórico comparável.

---

# Invariante de Resposta sem Falsa Precisão

Eva deverá representar incerteza quando o futuro não for conhecido com confiança.

---

# Outra Pergunta

> E se perdermos a Região Sul durante o pico?

Eva poderá apresentar cenário:

`NORMAL = SUPPORTED`

`N-1 = CAPACITY SHORTFALL 12%`

---

# Invariante de What-If Conversacional

Eva deverá utilizar Capacity Models e Estado oficial...

Não improvisar números sem Evidência.

---

# Próxima Dimensão

Com Capacity Planning, Demand Forecasting, sazonalidade, Peak Modeling, Scenario Planning, What-If, reservas, Failover Capacity, Disaster Capacity, Regional Capacity, Placement, Fragmentation, Allocation, Capacity Commitments, Arbitration, Priority, Admission Control, Fairness, Mission Capacity, Provider Capacity Planning, long-term planning, Rightsizing e Capacity Economics estabelecidos...

o próximo lote deverá aprofundar:

- capacidade em tempo real;
- autoscaling avançado;
- predictive scaling;
- reactive scaling;
- target tracking;
- queue-based scaling;
- concurrency-based scaling;
- custom scaling;
- scale-to-zero;
- warm pools;
- vertical autoscaling;
- horizontal autoscaling;
- multi-dimensional scaling;
- scaling conflicts;
- autoscaling loops;
- oscillation;
- hysteresis;
- cooldown;
- stabilization windows;
- cascading scaling;
- dependency-aware scaling;
- coordinated scaling;
- scaling limits;
- quota exhaustion;
- capacity emergency;
- emergency scaling;
- overload control;
- load shedding;
- admission control dinâmico;
- degraded modes;
- recovery from overload;
- backlog recovery;
- post-saturation stabilization;
- Eva;
- Agentes;
- Automações.

---

# Capacidade em Tempo Real

Planejamento antecipa necessidade.

Operação em tempo real responde ao que está acontecendo agora.

Por isso...

OPS deverá possuir mecanismos para adaptar capacidade continuamente diante de:

- crescimento;
- picos;
- falhas;
- backlog;
- variação de custo;
- mudança de workload;
- Missões;
- Dependências degradadas.

---

# Invariante de Capacidade em Tempo Real

A Plataforma deverá distinguir:

`PLANNED CAPACITY`

de:

`CURRENTLY EFFECTIVE CAPACITY`

---

# Effective Capacity Now

A capacidade disponível neste instante poderá ser menor que a planejada.

---

# Motivos

- falha;
- throttling;
- warmup;
- quota;
- Provider;
- autoscaling delay;
- manutenção;
- saturation.

---

# Invariante de Capacidade Atual

Decisões operacionais deverão utilizar Estado efetivo atual...

Não apenas inventário nominal.

---

# Autoscaling

**Autoscaling** representa ajuste automático de recursos com base em sinais operacionais.

---

# Objetivo

Manter equilíbrio entre:

- capacidade;
- performance;
- custo;
- headroom.

---

# Invariante de Autoscaling

Autoscaling deverá possuir:

- sinal;
- objetivo;
- limites;
- cooldown;
- observabilidade;
- authority.

---

# Reactive Scaling

Escala ocorre depois que pressão é observada.

---

# Exemplo

`CPU > 70%`

↓

`ADD REPLICAS`

---

# Invariante de Reactive Scaling

A resposta deverá ser rápida o suficiente em relação à velocidade de crescimento da Demand.

---

# Limite

Reactive Scaling sempre possui atraso.

---

# Pipeline Temporal

`DEMAND ↑`

↓

`sinal detectado`

↓

`decisão`

↓

`provisionamento`

↓

`startup`

↓

`warmup`

↓

`effective capacity ↑`

---

# Invariante de Delay Total

Capacity Control deverá considerar toda a latência entre detecção e capacidade efetiva.

---

# Predictive Scaling

Capacidade poderá ser adicionada antes da pressão.

---

# Fontes

- forecast;
- sazonalidade;
- Missão;
- evento conhecido;
- calendário;
- padrão histórico.

---

# Exemplo

Às 08:45...

preparar capacidade para pico das 09:00.

---

# Invariante de Predictive Scaling

Previsão deverá complementar...

Não substituir observação atual.

---

# Forecast Miss

Se o pico não acontecer...

capacidade pode permanecer ociosa.

---

# Invariante de Custo da Antecipação

Predictive Scaling deverá equilibrar risco de subdimensionamento com custo de excesso temporário.

---

# Hybrid Scaling

Poderá combinar:

`PREDICTIVE`

+

`REACTIVE`

---

# Invariante de Controle Híbrido

A previsão poderá preparar base...

e sinais reais corrigirem diferenças.

---

# Target Tracking

Um controlador poderá tentar manter métrica próxima de alvo.

---

# Exemplo

`CPU TARGET = 60%`

---

# Invariante de Target Tracking

O target deverá possuir relação adequada com headroom e performance.

---

# Target Too High

Pode reduzir margem.

---

# Target Too Low

Pode produzir custo excessivo.

---

# Invariante de Target Contextual

A Engenharia Oficial não deverá impor percentual universal.

---

# Queue-Based Scaling

A escala poderá responder ao backlog.

---

# Exemplo

`QUEUE_DEPTH > 10K`

↓

`ADD WORKERS`

---

# Invariante de Queue Scaling

Queue depth deverá ser interpretada junto com:

- arrival rate;
- service rate;
- age;
- drain time.

---

# Queue Age Scaling

Pode responder ao tempo de espera.

---

# Exemplo

`OLDEST_MESSAGE > 30s`

↓

`SCALE OUT`

---

# Invariante de User-Relevant Scaling

Quando latency do backlog for o problema real...

idade poderá ser melhor sinal que quantidade.

---

# Backlog-Based Desired Capacity

Conceitualmente:

capacidade necessária poderá considerar:

`CURRENT ARRIVAL RATE`

+

`BACKLOG DRAIN TARGET`

---

# Exemplo

Deseja-se eliminar backlog em 10 minutos.

---

# Invariante de Recovery Capacity

Escalar apenas para acompanhar Demand nova pode deixar backlog acumulado indefinidamente.

---

# Concurrency-Based Scaling

Escala poderá responder à concorrência ativa.

---

# Exemplo

`ACTIVE_REQUESTS / INSTANCE`

---

# Invariante de Concurrency Signal

Concorrência poderá ser bom proxy quando custo por requisição for relativamente estável.

---

# Custom Scaling Signal

A Plataforma poderá usar métrica específica.

---

# Exemplos

- tokens/s;
- jobs pending;
- GPU queue;
- active sessions;
- DB wait time.

---

# Invariante de Sinal Específico

O melhor scaling signal poderá ser um indicador de demanda útil...

Não um recurso genérico.

---

# Multi-Signal Scaling

Vários sinais poderão contribuir.

---

# Exemplo

Escalar se:

`QUEUE ↑`

e:

`LATENCY ↑`

e:

`AVAILABLE_CAPACITY ↓`

---

# Invariante de Combinação

Múltiplos sinais poderão reduzir falso acionamento...

mas também aumentar complexidade de controle.

---

# Horizontal Autoscaling

Aumenta ou reduz número de unidades.

---

# Invariante de HPA

Horizontal scaling deverá considerar limites de Dependências downstream.

---

# Vertical Autoscaling

Aumenta ou reduz recursos por unidade.

---

# Exemplos

- CPU;
- memória;
- accelerator size.

---

# Invariante de VPA

Vertical scaling poderá exigir restart ou rescheduling.

---

# Horizontal versus Vertical

A estratégia poderá combinar ambos.

---

# Invariante de Coordenação

Dois controladores não deverão competir sem política.

---

# Multi-Dimensional Scaling

A capacidade poderá depender de:

- replicas;
- CPU per replica;
- concurrency;
- batch size.

---

# Invariante de Espaço Multidimensional

A melhor ação nem sempre será apenas:

> adicionar instâncias.

---

# Scale-to-Zero

Workloads sem demanda poderão chegar a:

`0`

instâncias.

---

# Benefício

Redução de custo.

---

# Risco

Cold start.

---

# Invariante de Scale-to-Zero

A estratégia deverá ser utilizada apenas onde startup latency for compatível com o domínio.

---

# Cold Start

Tempo necessário para tornar workload operacional.

---

# Pode Incluir

- scheduling;
- startup;
- model loading;
- cache warmup;
- connection establishment.

---

# Invariante de Startup como Capacidade

Capacidade inexistente durante cold start deverá ser considerada no SLO.

---

# Warm Pool

Recursos poderão permanecer parcialmente preparados.

---

# Exemplos

- instâncias paradas;
- modelos pré-carregados;
- nós reservados.

---

# Invariante de Warm Pool

Warm capacity deverá possuir custo e readiness observáveis.

---

# Warm Pool Exhaustion

Pico maior que pool exige capacidade fria.

---

# Invariante de Camadas de Elasticidade

OPS deverá saber quanto consegue escalar:

- imediatamente;
- rapidamente;
- lentamente.

---

# Scaling Tier

Conceitualmente:

`HOT CAPACITY`

`WARM CAPACITY`

`COLD CAPACITY`

---

# Invariante de Disponibilidade Temporal

Capacidade deverá possuir dimensão de tempo até uso.

---

# Min Capacity

Autoscaler poderá possuir piso.

---

# Objetivos

- reduzir cold start;
- preservar failover;
- garantir baseline.

---

# Invariante de Piso

Min capacity poderá representar necessidade operacional...

Não desperdício automático.

---

# Max Capacity

Autoscaler poderá possuir teto.

---

# Motivos

- custo;
- quota;
- safety;
- downstream limit;
- contrato.

---

# Invariante de Limite Superior

`MAX_REPLICAS` deverá refletir capacidade sistêmica segura...

Não apenas limite local.

---

# Scaling Limit Reached

Quando o autoscaler quer escalar mas não pode...

isso deverá ser visível.

---

# Exemplo

`DESIRED = 50`

`MAX = 30`

---

# Invariante de Saturação por Limite

Atingir max capacity deverá produzir Estado operacional distinto.

---

# Quota Exhaustion

A Plataforma poderá possuir recursos...

mas quota impedir criação.

---

# Exemplos

- CPU quota;
- GPU quota;
- instance limit;
- IP limit.

---

# Invariante Capacity ≠ Quota

Capacidade física disponível não garante capacidade autorizada.

---

# Quota Headroom

OPS poderá monitorar margem de quota.

---

# Exemplo

`GPU QUOTA = 100`

`ALLOCATED = 96`

---

# Invariante de Quota Antecipatória

Quota deverá poder gerar atenção antes de impedir scaling.

---

# Scaling Conflict

Dois controladores poderão agir sobre mesma capacidade.

---

# Exemplo

Autoscaler:

`SCALE UP`

Rightsizer:

`SCALE DOWN`

---

# Invariante de Arbitration entre Controladores

A Plataforma deverá possuir precedência ou coordenação clara.

---

# Controller Ownership

Cada dimensão poderá possuir Owner.

---

# Invariante de Ownership de Controle

Dois controladores não deverão modificar mesma variável sem protocolo.

---

# Cascading Scaling

Escalar upstream pode aumentar pressão downstream.

---

# Exemplo

API:

`+100% replicas`

↓

mais chamadas ao banco.

---

# Invariante de Scaling Transitivo

Capacity Automation deverá considerar consequências no Grafo.

---

# Dependency-Aware Scaling

Antes de escalar...

OPS poderá verificar se Dependência suporta carga adicional.

---

# Exemplo

`DB HEADROOM = 5%`

↓

não aumentar intake irrestritamente.

---

# Invariante de Scaling End-to-End

Adicionar capacidade local não deverá aumentar overload global.

---

# Coordinated Scaling

Vários componentes poderão escalar juntos.

---

# Exemplo

`API`

+

`WORKERS`

+

`DB READ REPLICAS`

---

# Invariante de Coordenação

Scaling composto deverá respeitar ordem e readiness.

---

# Scaling Wave

A capacidade poderá aumentar por etapas.

---

# Invariante de Wave

Cada expansão poderá ser observada antes da próxima.

---

# Capacity Controller

Um controlador poderá combinar:

- forecast;
- demand;
- health;
- headroom;
- limits;
- cost;
- mission context.

---

# Invariante de Controlador Explicável

Uma ação automática deverá poder explicar:

> por que escalou?

---

# Scaling Decision Record

Poderá preservar:

- signal;
- threshold;
- before;
- after;
- reason;
- controller;
- timestamp.

---

# Invariante de Proveniência da Escala

Mudanças autônomas de capacidade deverão permanecer rastreáveis.

---

# Oscillation

Um sistema pode alternar repetidamente:

`SCALE UP`

↓

`SCALE DOWN`

↓

`SCALE UP`

---

# Invariante Anti-Oscillation

Controladores deverão possuir mecanismos de estabilidade.

---

# Hysteresis

O threshold para subir poderá ser diferente do threshold para descer.

---

# Exemplo

Scale up:

`CPU > 70%`

Scale down:

`CPU < 40%`

---

# Invariante de Zona Morta

Diferença entre thresholds pode evitar flapping.

---

# Cooldown

Após scaling...

o controlador aguarda.

---

# Invariante de Cooldown

O sistema deverá permitir que capacidade nova produza efeito antes de nova decisão quando necessário.

---

# Stabilization Window

Um autoscaler poderá considerar histórico recente antes de reduzir capacidade.

---

# Invariante de Scale-Down Estável

Picos curtos de ociosidade não deverão necessariamente provocar redução imediata.

---

# Delayed Metrics

Métricas podem chegar atrasadas.

---

# Invariante de Feedback Defasado

Controladores deverão considerar delay do sinal para evitar reação a Estado antigo.

---

# Measurement Noise

Sinais possuem ruído.

---

# Invariante de Filtragem

Smoothing poderá ser utilizado...

sem esconder mudança rápida crítica.

---

# Scaling Overshoot

O controlador pode adicionar capacidade demais.

---

# Scaling Undershoot

Pode adicionar capacidade insuficiente.

---

# Invariante de Calibração

Histórico deverá melhorar magnitude das ações.

---

# Scaling Step

Pode ser:

- fixo;
- proporcional;
- baseado em modelo.

---

# Invariante de Magnitude

A quantidade adicionada deverá acompanhar diferença entre Demand e capacity target.

---

# Emergency Scaling

Durante pressão severa...

a Plataforma poderá expandir capacidade rapidamente.

---

# Exemplos

- elevar max replicas;
- solicitar quota;
- ativar região;
- usar Provider secundário.

---

# Invariante de Escala Emergencial

Urgência não deverá eliminar:

- Proveniência;
- custo;
- limites;
- reversão.

---

# Emergency Capacity

Poderá existir capacidade normalmente inativa.

---

# Exemplos

- reserved nodes;
- burst quota;
- secondary region;
- standby fleet.

---

# Invariante de Reserva Emergencial

Capacidade de emergência deverá ser testada e observável.

---

# Capacity Emergency State

Poderá ser:

`PRESSURED`

`CRITICAL`

`EMERGENCY`

---

# Invariante de Emergência de Capacidade

Estados deverão possuir ações pré-definidas quando possível.

---

# Overload Control

Quando scaling não é suficiente ou rápido o bastante...

OPS deverá controlar Demand.

---

# Invariante de Dupla Estratégia

Capacity Management deverá poder agir tanto sobre:

`SUPPLY`

quanto sobre:

`DEMAND`

---

# Supply-Side Actions

- scale;
- reroute;
- activate reserve;
- optimize.

---

# Demand-Side Actions

- throttle;
- reject;
- defer;
- shed;
- degrade.

---

# Invariante de Equilíbrio

Adicionar capacidade não deverá ser a única resposta possível.

---

# Dynamic Admission Control

O sistema poderá ajustar entrada conforme headroom.

---

# Exemplo

`HEADROOM > 30%`

↓

aceitação normal.

`HEADROOM < 10%`

↓

reduzir best-effort.

---

# Invariante de Admission Adaptativo

Critérios de entrada poderão responder ao Estado atual.

---

# Priority Admission

Workloads críticos continuam...

outros são limitados.

---

# Invariante de Priorização sob Pressão

A decisão deverá seguir política institucional ou missional.

---

# Load Shedding Dinâmico

O percentual rejeitado poderá aumentar conforme overload.

---

# Exemplo

`PRESSURED = 0% SHED`

`SATURATED = 10% SHED`

`OVERLOADED = 40% SHED`

---

# Invariante de Shedding Proporcional

A rejeição deverá crescer de forma controlada conforme risco.

---

# Selective Shedding

Poderá priorizar:

- endpoints caros;
- best-effort;
- background;
- baixa prioridade.

---

# Invariante de Custo de Workload

Nem todo request deverá ter o mesmo valor ou custo durante overload.

---

# Brownout

Uma funcionalidade não essencial poderá ser desativada temporariamente.

---

# Exemplos

- recomendações;
- enriquecimento;
- analytics;
- detalhes caros.

---

# Invariante de Brownout

O sistema poderá reduzir trabalho opcional para preservar core capability.

---

# Feature Degradation

A qualidade poderá ser reduzida.

---

# Exemplo

Modelo grande:

↓

modelo menor.

---

# Invariante de Degradação Deliberada

A redução de qualidade deverá permanecer explícita quando relevante ao usuário ou Missão.

---

# Async Deferral

Trabalho poderá ser adiado.

---

# Exemplo

processar depois:

- relatórios;
- indexação;
- analytics.

---

# Invariante de Deferral

Adiar cria backlog futuro...

e deverá possuir plano de recuperação.

---

# Request Coalescing

Trabalho duplicado poderá ser combinado.

---

# Exemplo

100 requests solicitam mesmo dado.

Uma operação é executada.

---

# Invariante de Deduplicação

Reduzir trabalho redundante poderá aumentar capacidade efetiva.

---

# Cache-First Degradation

Durante overload...

o sistema poderá privilegiar respostas cacheadas.

---

# Invariante de Staleness Governado

Uso de dados mais antigos deverá respeitar tolerância de freshness.

---

# Recovery from Overload

Quando Demand cai...

o sistema ainda pode não estar recuperado.

---

# Motivos

- backlog;
- cache frio;
- resource leak;
- retries;
- degraded dependencies.

---

# Invariante de Recovery Separado

Fim do overload não deverá significar automaticamente:

`RECOVERED`

---

# Backlog Recovery

Depois da pressão...

o sistema precisa pagar dívida acumulada.

---

# Recovery Capacity

Poderá reservar capacidade extra para esvaziar backlog.

---

# Invariante de Recovery Headroom

Se o sistema opera exatamente na nova Demand...

o backlog pode nunca diminuir.

---

# Backlog Drain Strategy

Poderá escolher:

- acelerar;
- priorizar;
- descartar trabalho expirado;
- reduzir ingestão.

---

# Invariante de Validade do Backlog

Nem todo trabalho acumulado continua valioso.

---

# Expired Work

Itens antigos poderão perder relevância.

---

# Exemplo

Notificação deveria ser enviada em 5 minutos.

Após 2 dias...

pode não fazer sentido.

---

# Invariante de Cleanup de Backlog

Capacity Recovery deverá poder eliminar trabalho expirado quando permitido pelo domínio.

---

# Recovery Ramp

Capacidade poderá voltar gradualmente.

---

# Risco

Restaurar intake total imediatamente pode causar novo overload.

---

# Invariante de Recuperação Progressiva

O sistema deverá poder sair da proteção de forma controlada.

---

# Post-Saturation Stabilization

Após recuperar...

OPS poderá observar janela de estabilização.

---

# Objetivos

- confirmar backlog;
- verificar latency;
- reduzir emergency capacity;
- remover overrides;
- validar Dependências.

---

# Invariante de Estabilização Pós-Saturação

A normalização deverá ser explícita.

---

# Emergency Capacity Cleanup

Recursos temporários poderão ser removidos.

---

# Invariante de Cleanup

Escala emergencial não deverá tornar-se custo permanente por esquecimento.

---

# Temporary Quota Increase

Quota emergencial poderá precisar voltar.

---

# Invariante de Lifecycle de Exceção

Aumento temporário deverá possuir Owner e condição de encerramento.

---

# Capacity Incident

Saturação poderá gerar Incident.

---

# Fluxo

`CAPACITY PRESSURE`

↓

`OVERLOAD`

↓

`IMPACT`

↓

`INCIDENT`

---

# Invariante Capacity ↔ Incident

A causa operacional deverá permanecer relacionada a:

- bottleneck;
- Demand;
- capacity shortfall;
- controls.

---

# Capacity-Induced Incident

Poderá incluir:

- resource exhaustion;
- queue collapse;
- Provider throttling;
- failover shortfall.

---

# Invariante de Evidência

A classificação deverá ser sustentada por Sinais e contexto.

---

# Incident Capacity Actions

Durante resposta...

podem ocorrer:

- scale;
- throttle;
- shed;
- reroute;
- defer;
- disable expensive feature.

---

# Invariante de Mudanças Governadas

Ações emergenciais continuam sendo Mudanças operacionais.

---

# Capacity Recovery Review

Depois...

OPS poderá perguntar:

> Por que o sistema saturou?

> Forecast falhou?

> Scaling foi lento?

> Max capacity estava baixo?

> Dependência limitou?

> Shedding ocorreu tarde?

---

# Invariante de Aprendizado Pós-Saturação

Incidentes de capacidade deverão recalibrar:

- models;
- thresholds;
- reserves;
- scaling;
- limits.

---

# Autoscaling Intelligence

Histórico poderá mostrar padrões.

---

# Exemplo

> O autoscaler reage em média 4 minutos tarde para este workload.

---

# Invariante de Aprendizado do Controlador

O comportamento do autoscaler deverá ser mensurável e melhorável.

---

# Scaling Effectiveness

Uma ação de scale deverá ser avaliada.

---

# Pergunta

> Adicionar recursos realmente aumentou capacidade?

---

# Exemplo

`+50% replicas`

↓

`+5% throughput`

---

# Invariante de Scaling Ineficaz

A Plataforma deverá detectar quando scaling está atacando recurso errado.

---

# Scaling Efficiency

Pode relacionar:

`CAPACITY GAIN / RESOURCE GAIN`

---

# Invariante de Retorno

Scaling curves deverão alimentar decisões futuras.

---

# Autoscaling Failure

O controlador pode falhar por:

- métrica ausente;
- quota;
- scheduler;
- Provider;
- configuração;
- bug.

---

# Invariante de Falha do Controlador

Autoscaling deverá possuir Saúde própria.

---

# Autoscaler Health

Poderá indicar:

`HEALTHY`

`DEGRADED`

`BLOCKED`

`FAILED`

---

# Invariante de Controle Observável

A ausência de escala não deverá ser interpretada como ausência de necessidade quando o controlador está falho.

---

# Manual Scaling

Operador poderá ajustar capacidade.

---

# Invariante de Human Override

Intervenção manual deverá coexistir com autoscaling sem guerra de controle.

---

# Autoscaling Hold

Um Operador poderá suspender controlador.

---

# Invariante de Hold

A suspensão deverá possuir:

- motivo;
- Owner;
- início;
- expiração ou condição de saída.

---

# Fixed Capacity Mode

Durante atividade específica...

o sistema poderá manter capacidade fixa.

---

# Invariante de Modo Explícito

Controladores desativados deverão permanecer visíveis como risco ou decisão.

---

# Agent-Assisted Scaling

Agente poderá recomendar:

> Aumentar GPU pool em 12 unidades.

---

# Poderá Considerar

- forecast;
- queue;
- Missão;
- cost;
- Provider;
- historical scaling efficiency.

---

# Invariante de Recomendação Explicada

O Agente deverá mostrar fatores que sustentam ação.

---

# Autonomous Scaling Agent

Um Agente poderá executar dentro de envelope.

---

# Exemplo

Permitido:

`+/- 20% capacity`

---

# Invariante de Envelope de Capacity

Autonomia deverá possuir:

- máximo;
- mínimo;
- rate;
- cost budget;
- blast radius;
- allowed resources.

---

# Capacity Action Budget

Agentes poderão possuir limites de custo.

---

# Exemplo

`MAX EXTRA COST = X / HOUR`

---

# Invariante de Orçamento

Autonomia operacional deverá respeitar limites econômicos quando definidos.

---

# Capacity Safety Envelope

Conceitualmente:

`MIN SAFE CAPACITY`

+

`MAX AUTHORIZED CAPACITY`

+

`DEPENDENCY LIMITS`

+

`COST BUDGET`

+

`MISSION RESERVES`

↓

`AUTONOMOUS SCALING RANGE`

---

# Invariante de Envelope Dinâmico

Limites poderão mudar conforme contexto.

---

# Mission-Aware Autoscaling

CCM poderá informar necessidade futura ou atual.

---

# Exemplo

`MISSION STARTS IN 10 MIN`

↓

`PRE-SCALE`

---

# Invariante de Pre-Scaling Missional

Contexto conhecido deverá poder antecipar capacidade.

---

# Mission Priority under Overload

Durante pressão...

CCM poderá informar quais workloads possuem maior importância.

---

# Invariante de Prioridade sem Execução Direta

CCM informa prioridade.

OPS aplica mecanismo.

---

# Eva e Capacidade em Tempo Real

Eva poderá responder:

> Por que estamos escalando?

---

# Resposta Possível

> O backlog cresce 8% por minuto, a latência p95 ultrapassou o baseline em 32% e o headroom do pool caiu para 9%. O autoscaler adicionou seis workers.

---

# Invariante de Explicabilidade Operacional

Eva deverá decompor:

- sinal;
- decisão;
- ação;
- resultado esperado.

---

# Pergunta

> Ainda estamos saturados?

Eva poderá responder:

> A Demand caiu, mas o backlog ainda levará cerca de 18 minutos para drenar no throughput atual.

---

# Invariante de Recovery Awareness

Eva deverá distinguir fim da pressão de fim da recuperação.

---

# Pergunta

> Podemos remover a capacidade emergencial?

Eva poderá considerar:

- backlog;
- forecast;
- headroom;
- Missões;
- warm capacity;
- scaling delay.

---

# Invariante de Normalização Fundamentada

Redução de recursos deverá basear-se em Evidência atual.

---

# Capacity Automation

Automações poderão executar:

- scale;
- pre-scale;
- throttle;
- shed;
- reserve;
- release reserve;
- shift traffic;
- drain backlog.

---

# Invariante de Automação de Capacity

A ação deverá respeitar:

- policies;
- authority;
- dependencies;
- cost;
- Mission context;
- limits.

---

# Capacity Control Loop

Conceitualmente:

`OBSERVE DEMAND`

↓

`ESTIMATE CAPACITY STATE`

↓

`COMPARE WITH TARGET`

↓

`DECIDE`

↓

`SCALE / LIMIT / SHED`

↓

`OBSERVE RESULT`

↓

`ADJUST`

---

# Invariante de Closed-Loop Capacity Control

Automação somente deverá ser considerada completa quando verifica efeito da própria ação.

---

# Control Loop Failure

A ação pode não produzir resultado esperado.

---

# Exemplo

Scale out ocorre...

mas Throughput não aumenta.

---

# Invariante de Adaptação

O controlador deverá poder abandonar estratégia ineficaz e escalar atenção.

---

# Capacity State Machine

Um modelo poderá utilizar:

`NORMAL`

↓

`PRESSURED`

↓

`SATURATED`

↓

`OVERLOADED`

↓

`RECOVERING`

↓

`NORMAL`

---

# Transições Também Podem Recuar

`PRESSURED`

↓

`NORMAL`

sem chegar a overload.

---

# Invariante de Estado Operacional

A Plataforma deverá evitar tratar capacity como simples booleano:

`ENOUGH / NOT ENOUGH`

---

# Próxima Dimensão

Com capacity em tempo real, Reactive e Predictive Scaling, Target Tracking, Queue-Based e Concurrency-Based Scaling, Horizontal e Vertical Autoscaling, Scale-to-Zero, Warm Pools, scaling limits, quota exhaustion, controller conflicts, dependency-aware scaling, emergency capacity, dynamic admission control, Load Shedding, degraded modes, overload recovery, backlog recovery, Capacity Incidents, Eva, Agentes e Automações estabelecidos...

o próximo lote deverá aprofundar:

- performance engineering contínua;
- performance SLOs;
- latency budgets;
- capacity SLOs;
- saturation budgets;
- headroom targets;
- error budgets relacionados a capacidade;
- efficiency budgets;
- cost-performance;
- performance regressions;
- release capacity gates;
- configuration capacity gates;
- performance profiles;
- workload classes;
- noisy neighbor detection;
- capacity anomaly detection;
- predictive saturation;
- time-to-exhaustion;
- capacity risk scoring;
- capacity intelligence;
- historical similarity;
- benchmarking contínuo;
- capacity review;
- post-capacity review;
- métricas;
- maturidade operacional;
- invariantes fundamentais;
- garantias mínimas;
- anti-padrões;
- modelo integrado;
- filosofia;
- Princípio Final;
- conclusão do arquivo;
- transição para `016`.

---

# Performance Engineering Contínua

Capacidade não deverá ser tratada apenas como atividade reativa.

Desempenho e capacidade deverão poder ser continuamente:

- observados;
- comparados;
- testados;
- previstos;
- recalibrados.

---

# Invariante de Performance Contínua

OPS deverá tratar performance como propriedade operacional viva...

Não como benchmark produzido uma única vez.

---

# Performance SLO

Uma Capacidade ou Serviço poderá possuir objetivos de desempenho.

---

# Exemplos

`P95 < 300ms`

`P99 < 800ms`

`QUEUE_WAIT < 100ms`

---

# Invariante de Performance SLO

O objetivo deverá refletir experiência ou necessidade operacional relevante.

---

# Latency Budget

Uma operação poderá possuir orçamento total de latência.

---

# Exemplo

`END-TO-END BUDGET = 500ms`

---

# Budget Allocation

O tempo poderá ser distribuído entre:

- aplicação;
- database;
- Provider;
- network;
- queue;
- processamento.

---

# Invariante de Budget Distribuído

Soma das expectativas downstream deverá caber no budget end-to-end.

---

# Budget Consumption

OPS poderá observar quanto do budget está sendo consumido.

---

# Exemplo

`BUDGET = 500ms`

`CURRENT P95 = 420ms`

---

# Invariante de Margem Temporal

Cumprir SLO com pouca margem deverá ser distinguido de operar confortavelmente abaixo do limite.

---

# Latency Headroom

Pode representar diferença entre:

`SLO`

e:

`OBSERVED LATENCY`

---

# Invariante de Headroom de Performance

Performance também deverá possuir margem...

Não apenas capacity de recurso.

---

# Capacity SLO

Uma Capacidade poderá possuir objetivo de margem.

---

# Exemplos

> Manter capacidade suficiente para absorver N-1.

> Manter headroom para pico previsto.

---

# Invariante de Capacity SLO

O objetivo deverá representar propriedade operacional significativa...

Não percentual arbitrário.

---

# Saturation Budget

A organização poderá definir tolerância à proximidade de saturação.

---

# Exemplo

> Não permanecer em Estado `PRESSURED` por mais de X tempo sem ação.

---

# Invariante de Saturation Budget

Tempo sob pressão pode ser tão importante quanto intensidade.

---

# Headroom Target

Um Serviço poderá possuir target de margem.

---

# Poderá Variar Conforme

- Criticidade;
- elasticity delay;
- workload volatility;
- failover requirements;
- Missões.

---

# Invariante de Headroom Não Universal

A mesma margem não deverá ser aplicada a todos os Serviços.

---

# Error Budget e Capacidade

Falhas relacionadas à saturação poderão consumir Error Budget.

---

# Exemplo

Overload provoca:

- timeout;
- error;
- dropped work.

---

# Invariante Capacity ↔ Reliability

Capacity shortfall que degrada SLO deverá ser tratado como problema de confiabilidade...

Não apenas como custo ou infraestrutura.

---

# Capacity Error Budget Burn

A Plataforma poderá observar quanto do erro permitido foi produzido por capacidade.

---

# Invariante de Causalidade

A atribuição deverá depender de Evidência suficiente...

Não apenas correlação com uso elevado.

---

# Efficiency Budget

Uma Release ou Serviço poderá possuir limite de eficiência.

---

# Exemplos

`CPU / REQUEST`

`MEMORY / SESSION`

`GPU / TOKEN`

---

# Invariante de Eficiência como Guardrail

Regressão de eficiência poderá ser bloqueada antes de causar saturação em produção.

---

# Cost-Performance Budget

Uma solução poderá ser avaliada simultaneamente por:

- performance;
- capacidade;
- custo.

---

# Exemplo

Nova versão:

`LATENCY -10%`

mas:

`COST +80%`

---

# Invariante de Trade-Off Multidimensional

Melhoria de performance não deverá ser considerada automaticamente benéfica sem contexto.

---

# Performance Profile

Um workload poderá possuir perfil conhecido.

---

# Poderá Incluir

- throughput;
- latency;
- resource demand;
- concurrency;
- cache behavior;
- dependency usage.

---

# Invariante de Perfil Versionado

Performance Profile deverá estar associado a:

- versão;
- configuração;
- workload;
- ambiente.

---

# Workload Class

Diferentes classes poderão possuir perfis distintos.

---

# Exemplos

`INTERACTIVE`

`BATCH`

`STREAMING`

`BACKGROUND`

`MISSION_CRITICAL`

---

# Invariante de Classe de Workload

Capacity Management deverá evitar misturar workloads com comportamentos incompatíveis em uma única média.

---

# Interactive Workload

Geralmente sensível a latency.

---

# Batch Workload

Pode priorizar throughput.

---

# Streaming Workload

Pode depender de:

- sustained throughput;
- lag;
- ordering.

---

# Invariante de Objetivo por Classe

A noção de boa performance deverá depender do tipo de workload.

---

# Workload Priority

Uma classe poderá possuir prioridade operacional.

---

# Invariante de Performance sob Prioridade

Durante pressão...

a Plataforma poderá preservar objetivos diferentes entre classes.

---

# Noisy Neighbor Detection

Em capacidade compartilhada...

um consumidor poderá aumentar uso e degradar os demais.

---

# Sinais

Podem incluir:

- consumo desproporcional;
- queueing;
- latency impact;
- cache pollution;
- connection exhaustion.

---

# Invariante de Noisy Neighbor

OPS deverá poder distinguir pressão agregada de interferência causada por consumidor específico.

---

# Resource Dominance

Um tenant ou workload poderá dominar recurso.

---

# Exemplo

Tenant A:

`70% DATABASE CPU`

---

# Invariante de Atribuição de Dominância

Ação de fairness deverá depender de consumo observado e política aplicável.

---

# Capacity Anomaly Detection

A Plataforma poderá detectar comportamento incomum.

---

# Exemplos

- CPU/request aumentou;
- queue cresce fora de padrão;
- throughput caiu sem Demand cair;
- memória cresce de forma atípica.

---

# Invariante de Anomalia ≠ Incidente

Comportamento incomum deverá gerar investigação proporcional...

Não conclusão automática de falha.

---

# Performance Anomaly

Pode existir regressão sem saturação.

---

# Exemplo

`P95 +40%`

com:

`CPU = NORMAL`

---

# Invariante de Performance Independente de Saturação

Nem toda degradação de latência possui origem em capacidade insuficiente.

---

# Predictive Saturation

OPS poderá estimar aproximação de limite antes de atingi-lo.

---

# Entradas Possíveis

- growth rate;
- headroom;
- forecast;
- scaling delay;
- quota;
- backlog;
- capacity trend.

---

# Invariante de Saturação Antecipada

A previsão deverá permitir ação antes do limite quando confidence for suficiente.

---

# Time-to-Exhaustion

Poderá existir para diferentes recursos.

---

# Exemplos

`STORAGE TTE`

`GPU QUOTA TTE`

`QUEUE BUFFER TTE`

`CAPACITY TTE`

---

# Invariante de TTE Multidimensional

O menor horizonte relevante poderá determinar prioridade operacional.

---

# TTE Confidence

Uma estimativa poderá possuir confiança.

---

# Invariante de Tendência Não Linear

Extrapolação linear não deverá ser usada cegamente quando growth ou saturation forem não lineares.

---

# Capacity Risk Scoring

Uma Capacidade poderá possuir risco agregado.

---

# Entradas Possíveis

- headroom;
- TTE;
- forecast;
- failover margin;
- dependency limits;
- scaling delay;
- Missões;
- volatility;
- confidence.

---

# Invariante de Risk Score Explicável

A Plataforma deverá explicar por que determinada capacidade foi classificada como arriscada.

---

# Exemplo

`CAPACITY RISK = HIGH`

porque:

- headroom = 6%;
- GPU quota = 98%;
- scaling lead time = 45 min;
- Missão começa em 20 min.

---

# Invariante de Risco Contextual

O mesmo headroom poderá representar risco diferente conforme tempo de resposta disponível.

---

# Capacity Risk ≠ Saturation

Um Serviço ainda pode estar saudável...

mas possuir risco elevado de saturação próxima.

---

# Invariante de Antecipação

OPS deverá distinguir:

`CURRENT STATE`

de:

`FORWARD RISK`

---

# Capacity Intelligence

Com histórico suficiente...

OPS poderá construir inteligência sobre comportamento de capacidade.

---

# Perguntas

> Onde normalmente saturamos primeiro?

> Quais Releases reduzem headroom?

> Quais Missões produzem maior burst?

> Qual scaling strategy funciona melhor?

---

# Invariante de Inteligência de Capacidade

Histórico deverá melhorar previsão e decisão futura.

---

# Historical Similarity

Um Agente poderá recuperar situações semelhantes.

---

# Exemplo

> Esta combinação de Demand e cache hit rate apareceu em três Incidentes anteriores.

---

# Invariante de Precedente sem Determinismo

Situação semelhante deverá informar decisão...

Não prová-la.

---

# Capacity Pattern

Padrões poderão ser reconhecidos.

---

# Exemplos

- saturation after cache flush;
- GPU queue surge after Mission start;
- database connection storm after scale-out;
- backlog growth after Provider throttle.

---

# Invariante de Padrão Executável

Conhecimento recorrente deverá poder virar:

- Alerta;
- guardrail;
- scaling rule;
- runbook;
- policy.

---

# Capacity Anti-Pattern Memory

A Plataforma poderá preservar decisões que repetidamente produzem problema.

---

# Exemplo

> Escalar apenas API durante pressão de banco piora overload.

---

# Invariante de Memória Negativa

Capacity Intelligence deverá aprender também o que não funciona.

---

# Continuous Benchmarking

Benchmarks relevantes poderão ser executados regularmente.

---

# Objetivo

Detectar:

- performance drift;
- regressões;
- mudanças de hardware;
- mudança de eficiência.

---

# Invariante de Benchmark Contínuo

Resultado sintético deverá continuar sendo comparado com produção para validar representatividade.

---

# Production Performance Baseline

A produção poderá formar baseline contínuo.

---

# Invariante de Baseline Adaptativo

Mudanças legítimas de workload deverão atualizar baseline...

sem normalizar regressão silenciosamente.

---

# Baseline Contamination

Se uma degradação persiste por semanas...

um sistema ingênuo pode passar a tratá-la como normal.

---

# Invariante de Memória do Estado Saudável

Baselines adaptativos deverão preservar referência de comportamento previamente aceito.

---

# Capacity Review

A organização poderá revisar capacidade de Serviços relevantes.

---

# Perguntas

> Temos headroom suficiente?

> O forecast continua válido?

> Failover capacity está preservada?

> Alguma quota se aproxima do limite?

> Existe dívida de backlog?

> Alguma Missão futura cria conflito?

---

# Invariante de Review Proporcional

A cadência deverá considerar:

- Criticidade;
- volatility;
- lead time;
- scarcity.

---

# Continuous Capacity Review

Em sistemas dinâmicos...

a revisão poderá ser automatizada continuamente.

---

# Invariante de Automação sem Cerimônia

Maturidade não deverá significar criar reuniões para toda análise de capacidade.

---

# Post-Capacity Review

Uma saturação ou expansão relevante poderá gerar revisão posterior.

---

# Objetivos

Perguntar:

> O modelo estava correto?

> O scaling reagiu corretamente?

> A reserva foi suficiente?

> O bottleneck era o esperado?

> O recovery foi rápido?

---

# Invariante de Revisão Orientada a Modelo

A experiência deverá alterar Capacity Models quando necessário.

---

# Post-Scaling Review

Uma ação de expansão poderá ser analisada.

---

# Exemplo

Planejado:

`+30% CAPACITY`

Observado:

`+12% THROUGHPUT`

---

# Invariante de Scaling Validado

Adicionar recursos deverá produzir Evidência de ganho real.

---

# Capacity Metrics

OPS poderá acompanhar métricas estruturais.

---

# Headroom

Margem atual.

---

# Safe Headroom

Margem após reservas e compromissos.

---

# Saturation Frequency

Frequência de entrada em Estado saturado.

---

# Saturation Duration

Tempo acumulado sob saturação.

---

# Overload Frequency

Frequência de overload.

---

# Time-to-Exhaustion

Horizonte previsto até limite.

---

# Capacity Forecast Error

Diferença entre Demand prevista e observada.

---

# Scaling Reaction Time

Tempo entre pressão e decisão.

---

# Capacity Activation Time

Tempo entre decisão e recurso realmente utilizável.

---

# Scaling Effectiveness

Ganho observado após ação.

---

# Backlog Drain Time

Tempo até normalização do backlog.

---

# Load Shedding Rate

Percentual de Demand deliberadamente rejeitada.

---

# Capacity-Induced Incident Rate

Incidentes relacionados a capacity shortfall.

---

# Failover Capacity Margin

Capacidade restante sob cenário degradado.

---

# Quota Headroom

Margem antes de limite administrativo ou contratual.

---

# Invariante de Métricas como Sistema

Nenhuma métrica isolada deverá definir maturidade de capacidade.

---

# Goodhart em Capacity Management

Se a organização premiar:

> maior utilização possível,

equipes poderão reduzir headroom abaixo de nível seguro.

---

# Outro Exemplo

Meta:

> zero throttling.

Pode incentivar aceitar carga até colapso.

---

# Invariante de Métrica sem Incentivo Perverso

Capacity Management deverá favorecer Saúde e previsibilidade...

Não aparência de eficiência.

---

# Capacity Efficiency

Eficiência poderá considerar trabalho útil por recurso.

---

# Invariante de Eficiência Saudável

Eficiência máxima não deverá superar necessidade de resiliência e headroom.

---

# Capacity Debt

Déficits persistentes poderão formar dívida.

---

# Exemplos

- backlog estrutural;
- quota constantemente no limite;
- dependência saturada;
- scaling ceiling insuficiente;
- infraestrutura sem failover margin.

---

# Invariante de Dívida de Capacidade

Pressão recorrente não deverá ser normalizada como comportamento esperado.

---

# Temporary Capacity Debt

Após evento excepcional...

a Plataforma poderá aceitar condição temporária.

---

# Invariante de Dívida com Lifecycle

Exposição temporária deverá possuir plano ou condição de normalização.

---

# Capacity Exception

Uma organização poderá aceitar menor headroom por período.

---

# Exemplo

Durante migração:

`SAFE_HEADROOM = BELOW TARGET`

---

# Invariante de Exceção Explícita

A redução consciente de margem deverá possuir:

- motivo;
- Owner;
- duração;
- risco.

---

# Capacity Governance

Capacidade possui implicações:

- operacionais;
- econômicas;
- missionais.

---

# Perguntas de Governança

> Quem pode reservar?

> Quem pode aumentar limite?

> Quem pode consumir reserva de failover?

> Quem pode priorizar um tenant?

> Quem pode elevar custo emergencial?

---

# Invariante de Autoridade de Capacity

Ações de alto impacto deverão possuir autoridade proporcional.

---

# Reservation Authority

Nem todo consumidor deverá poder reservar capacidade crítica.

---

# Invariante de Reserva Governada

A reserva deverá refletir prioridade legítima e disponibilidade real.

---

# Capacity Override

Um Operador poderá ultrapassar limite normal.

---

# Exemplo

`MAX_GPU_POOL = 100`

temporariamente:

`120`

---

# Invariante de Override de Capacity

Exceção deverá permanecer:

- auditável;
- temporária;
- contextual.

---

# Capacity Policy

Policies poderão definir:

- min headroom;
- max utilization;
- reservation rules;
- scaling bounds;
- priority;
- shedding order.

---

# Invariante de Policy Adaptativa

Política deverá poder variar por workload e Criticidade.

---

# Policy as Code para Capacity

Exemplo conceitual:

`IF SAFE_HEADROOM < 10%`

↓

`BLOCK NON_ESSENTIAL_BATCH`

---

# Outro Exemplo

`IF MISSION_CRITICAL = TRUE`

e:

`FORECAST > SAFE_CAPACITY`

↓

`PRE_SCALE`

---

# Invariante de Policy Explicável

A regra deverá possuir justificativa operacional.

---

# Capacity Autonomy

Agentes poderão possuir autoridade para:

- scale;
- reserve;
- throttle;
- shift;
- shed;

dentro de envelope.

---

# Invariante de Autonomia Graduada

Recomendar capacidade e modificar capacidade são autoridades diferentes.

---

# Capacity Agent — Observer

Apenas analisa.

---

# Capacity Agent — Recommender

Propõe ação.

---

# Capacity Agent — Executor

Age dentro de limites.

---

# Capacity Agent — Adaptive

Pode escolher entre:

- scale;
- throttle;
- reroute;
- defer.

---

# Invariante de Envelope de Decisão

Quanto maior o repertório de ações...

mais importante a Governança do envelope.

---

# Capacity Kill Switch

Autonomia de Capacity poderá ser interrompida.

---

# Invariante de Contenção

Controladores com capacidade de aumentar custo ou alterar disponibilidade deverão poder ser contidos.

---

# Capacity Human Override

Humano autorizado poderá alterar decisão automática.

---

# Invariante de Precedência

A interação entre humano e controlador deverá evitar guerra de escala.

---

# Capacity Maturity

A maturidade poderá evoluir por estágios.

---

# Maturidade Reativa

Capacidade é aumentada depois de Incidente.

---

# Maturidade Observável

Headroom, queues, saturation e bottlenecks tornam-se visíveis.

---

# Maturidade Testada

Load tests e stress tests definem limites conhecidos.

---

# Maturidade Planejada

Forecast e lead time orientam expansão.

---

# Maturidade Resiliente

Failover capacity e reservas são conscientemente protegidas.

---

# Maturidade Elástica

Autoscaling responde a Demand.

---

# Maturidade Coordenada

Scaling considera Dependências e capacity graph.

---

# Maturidade Econômica

Rightsizing e custo são equilibrados com headroom.

---

# Maturidade Missional

CCM informa reservas e prioridades futuras.

---

# Maturidade Adaptativa

Histórico recalibra:

- forecast;
- limits;
- targets;
- scaling.

---

# Maturidade Cognitiva

Agentes identificam:

- risco;
- patterns;
- bottlenecks;
- capacity conflicts;
- saturation futura.

---

# Maturidade Autônoma

A Plataforma adapta supply e Demand dentro de envelopes seguros.

---

# Maturidade Federada

Capacidade local, Providers e organizações coordenam recursos sem perder autonomia.

---

# Maturidade Institucional

A Plataforma consegue responder continuamente:

> Quanto conseguimos suportar?

> Quanto estamos consumindo?

> Qual é o recurso limitante?

> Quanto headroom realmente existe?

> Quanto está reservado?

> Quanto já está comprometido?

> Qual é nossa capacidade em N-1?

> Quanto tempo até saturar?

> Quanto tempo levamos para escalar?

> Qual será o próximo bottleneck?

> O autoscaler está funcionando?

> Estamos criando backlog?

> Quanto tempo para recuperar?

> Temos capacidade para a próxima Missão?

> Qual é o custo da margem atual?

---

# Invariante de Maturidade Real

Maturidade de Capacity Management deverá aparecer como:

- menor surpresa;
- menor saturação inesperada;
- maior previsibilidade;
- recuperação mais rápida;
- headroom consciente;
- capacidade de absorver falhas;
- crescimento sustentável.

Não como:

- utilização máxima;
- quantidade de servidores;
- quantidade de dashboards.

---

# Invariantes Fundamentais de Capacidade, Desempenho e Saturação

A Engenharia Oficial estabelece propriedades que deverão permanecer válidas independentemente:

- da infraestrutura;
- do Provider;
- do workload;
- da arquitetura;
- do nível de elasticidade;
- do modelo econômico.

---

# Invariante 1 — Resource Capacity não é Service Capacity

Recurso técnico disponível não determina sozinho throughput útil.

---

# Invariante 2 — Service Capacity não é Effective Capacity

Dependências, reservas e contexto podem reduzir capacidade utilizável.

---

# Invariante 3 — Maximum Capacity não é Sustainable Capacity

Pico técnico não deverá ser tratado como envelope operacional seguro.

---

# Invariante 4 — Capacity é Contextual

Versão, workload, cache, configuração e Dependências alteram limites.

---

# Invariante 5 — Demand não é Throughput

Trabalho solicitado poderá exceder trabalho concluído.

---

# Invariante 6 — Throughput Estável não Prova Saúde

Fila pode crescer enquanto throughput permanece constante.

---

# Invariante 7 — Latency Deve Ser Interpretada como Distribuição

Média poderá esconder cauda degradada.

---

# Invariante 8 — Queue Time e Service Time Devem Ser Distinguíveis

A espera pode revelar saturação antes do processamento degradar.

---

# Invariante 9 — Utilization não é Saturation

Recursos podem saturar antes de 100% ou operar saudavelmente em utilização alta.

---

# Invariante 10 — Saturation é Comportamento Sistêmico

CPU alta não é definição universal de saturação.

---

# Invariante 11 — Saturation Pode Ser Não Linear

Pequena variação próxima ao limite pode produzir grande degradação.

---

# Invariante 12 — Safe Headroom não é Raw Headroom

Reservas, commitments e falhas deverão ser considerados.

---

# Invariante 13 — Capacidade Reservada não é Capacidade Livre

Recursos protegidos para finalidade específica não deverão ser consumidos implicitamente.

---

# Invariante 14 — Backlog é Carga Futura Já Aceita

Trabalho acumulado permanece compromisso operacional.

---

# Invariante 15 — Buffer Compra Tempo, não Capacidade

Fila ou cache não elimina o trabalho que precisa ser realizado.

---

# Invariante 16 — Burst Capacity não é Sustained Capacity

Pico suportado por segundos não deverá definir capacidade permanente.

---

# Invariante 17 — Backpressure Deve Conter Produção quando Possível

Trabalho não deverá acumular indefinidamente em consumidor saturado.

---

# Invariante 18 — Throttling Pode Ser Saúde

Limitar entrada poderá prevenir colapso.

---

# Invariante 19 — Quota não é Rate Limit

Volume e velocidade são dimensões diferentes.

---

# Invariante 20 — Load Shedding Pode Ser Necessário

Falha controlada poderá preservar funções mais importantes.

---

# Invariante 21 — Overload Pode Reduzir Throughput Útil

Mais carga poderá produzir menos trabalho concluído.

---

# Invariante 22 — Retry Consome Capacidade

Retries deverão ser contabilizados como Demand real.

---

# Invariante 23 — Performance não é Capacity

Um sistema rápido sob baixa carga poderá saturar cedo.

---

# Invariante 24 — Regressão de Eficiência é Regressão de Capacidade

Mais recurso por operação reduz headroom mesmo com latency estável.

---

# Invariante 25 — Bottleneck é Dinâmico

Remover um limite pode revelar outro.

---

# Invariante 26 — Capacity é End-to-End

O elo mais restritivo do caminho poderá governar capacidade total.

---

# Invariante 27 — Fan-Out Amplifica Demand Interna

Uma request externa poderá produzir múltiplas operações internas.

---

# Invariante 28 — Fan-Out Pode Amplificar Tail Latency

Quanto mais Dependências críticas...

maior a exposição à cauda.

---

# Invariante 29 — Workload Mix Importa

Requests/s sem distribuição de custo poderá ser métrica enganosa.

---

# Invariante 30 — Concurrency não Deve Crescer Indefinidamente

Contenção poderá fazer throughput piorar.

---

# Invariante 31 — CPU não é Percentual Isolado

Quotas, throttling e scheduler alteram significado.

---

# Invariante 32 — Memória Livre Baixa não é Falha Universal

Caches e working set deverão ser considerados.

---

# Invariante 33 — Storage Space não é Storage Performance

Espaço, IOPS e latency são dimensões distintas.

---

# Invariante 34 — Network Capacity é Multidimensional

Bandwidth, connections e packets podem possuir limites diferentes.

---

# Invariante 35 — Connection Pools Criam Fronteiras de Capacidade

Espera pode surgir antes do recurso downstream saturar.

---

# Invariante 36 — Scale-Out Pode Saturar Dependência

Adicionar replicas upstream não cria capacidade downstream.

---

# Invariante 37 — Cache Hit Rate Pode Amplificar Capacity

Pequena queda de hit rate pode aumentar drasticamente Demand downstream.

---

# Invariante 38 — Cold State Pode Ter Capacity Menor

Warmup e cache frio deverão ser considerados.

---

# Invariante 39 — Accelerator Capacity não é Homogênea

GPU type, memory e workload alteram capacidade real.

---

# Invariante 40 — Capacity Agregada não é Capacity Alocável

Fragmentação e placement podem impedir uso.

---

# Invariante 41 — Load Testing Deve Ser Representativo

Carga artificial mal desenhada não prova capacidade de produção.

---

# Invariante 42 — Stress Testing Deve Estudar Falha

O objetivo não é apenas encontrar o ponto de quebra.

---

# Invariante 43 — Soak Testing Deve Considerar Tempo

Alguns limites aparecem apenas após operação prolongada.

---

# Invariante 44 — Failover Capacity Deve Ser Testada

Redundância sem margem para absorver carga não é resiliência suficiente.

---

# Invariante 45 — Benchmark não é Production Capacity

Resultados sintéticos deverão permanecer contextualizados.

---

# Invariante 46 — Capacity Evidence Possui Classes Diferentes

Theoretical, tested, observed e contractual capacity não são equivalentes.

---

# Invariante 47 — Estimativas Devem Possuir Incerteza

Precisão falsa deverá ser evitada.

---

# Invariante 48 — Assumptions Devem Ser Recuperáveis

Uma Capacity Estimate depende de condições.

---

# Invariante 49 — Forecast Deve Aprender com Erros

Desvios sistemáticos deverão recalibrar modelos.

---

# Invariante 50 — Planejamento Deve Considerar Peak, não Apenas Average

A média poderá esconder necessidade real.

---

# Invariante 51 — Ramp Rate Importa

Demanda pode crescer mais rápido do que elasticidade consegue reagir.

---

# Invariante 52 — Capacity Planning Deve Considerar Múltiplos Cenários

Um único forecast não é futuro garantido.

---

# Invariante 53 — Procurement Lead Time Faz Parte da Capacity

Recurso futuro não existe operacionalmente até tornar-se utilizável.

---

# Invariante 54 — Cloud não é Capacidade Infinita

Quota, scarcity e provisioning continuam existindo.

---

# Invariante 55 — Failover Reserve não é Headroom Livre

Capacidade de resiliência deverá permanecer protegida.

---

# Invariante 56 — DR Capacity Deve Ser Conhecida

Ambiente de recuperação poderá não suportar carga normal completa.

---

# Invariante 57 — Capacidade Global não Elimina Saturação Regional

Carga só pode utilizar capacidade que consegue alcançar.

---

# Invariante 58 — Available Somewhere não é Available Where Needed

Mobilidade de carga possui constraints.

---

# Invariante 59 — Dense Packing Compete com Resiliência

Eficiência máxima poderá aumentar blast radius.

---

# Invariante 60 — Allocation Deve Considerar Oversubscription

Capacidade lógica prometida poderá exceder capacidade física apenas de forma governada.

---

# Invariante 61 — Commitments Futuros Consomem Margem Futura

Demanda ainda não ativa pode já estar reservada.

---

# Invariante 62 — Capacity Conflicts Devem Ser Detectáveis

Reservas incompatíveis não deverão aparecer apenas na hora da execução.

---

# Invariante 63 — Arbitration Deve Ser Governada

Quem consome capacidade escassa deverá ser decidido por política explícita.

---

# Invariante 64 — Admission Control Pode Proteger Saúde

Recusar cedo poderá ser superior a aceitar trabalho impossível de concluir.

---

# Invariante 65 — Fairness não é Igualdade

Prioridade e contrato poderão justificar distribuições diferentes.

---

# Invariante 66 — Rightsizing não é Maximum Utilization

Reduzir custo não deverá eliminar margem necessária.

---

# Invariante 67 — Idle Capacity não é Sempre Waste

Reserva de failover ou burst possui propósito operacional.

---

# Invariante 68 — Autoscaling Possui Delay

A decisão não cria capacidade instantaneamente.

---

# Invariante 69 — Predictive Scaling não Substitui Feedback

Forecast pode errar.

---

# Invariante 70 — Scaling Signal Deve Representar Gargalo

CPU pode ser sinal errado para workload I/O-bound.

---

# Invariante 71 — Queue-Based Scaling Deve Considerar Drain Time

Quantidade isolada de backlog pode enganar.

---

# Invariante 72 — Scale-to-Zero Possui Custo de Cold Start

Não deverá ser utilizado onde startup latency for incompatível.

---

# Invariante 73 — Max Capacity Deve Considerar Dependências

O teto local não poderá ignorar downstream.

---

# Invariante 74 — Quota Pode Bloquear Elasticidade

Recursos físicos disponíveis não significam recursos provisionáveis.

---

# Invariante 75 — Controladores Devem Possuir Ownership

Autoscalers concorrentes não deverão lutar pela mesma variável.

---

# Invariante 76 — Scaling Pode Ser Transitivo

Aumentar capacity upstream pode deslocar saturation downstream.

---

# Invariante 77 — Autoscaling Deve Evitar Oscillation

Hysteresis e stabilization podem ser necessários.

---

# Invariante 78 — Delayed Metrics Podem Desestabilizar Controle

A ação deverá considerar feedback defasado.

---

# Invariante 79 — Emergency Scaling Continua Sendo Mudança Operacional

Urgência não elimina Proveniência.

---

# Invariante 80 — Capacity Management Deve Controlar Supply e Demand

Escalar não é única ação disponível.

---

# Invariante 81 — Dynamic Admission Deve Considerar Estado Atual

Políticas poderão ficar mais restritivas sob pressão.

---

# Invariante 82 — Degraded Mode Pode Preservar Core Capability

Reduzir função pode ser melhor que perder todo o Serviço.

---

# Invariante 83 — Fim do Pico não é Fim da Recuperação

Backlog e efeitos residuais podem permanecer.

---

# Invariante 84 — Recovery Precisa de Headroom

Sem capacidade excedente...

backlog não drena.

---

# Invariante 85 — Trabalho Expirado Pode Ser Descartável

Backlog deverá considerar valor temporal.

---

# Invariante 86 — Capacity Incidents Devem Recalibrar Modelos

Saturações reais são Evidência de capacidade.

---

# Invariante 87 — Scaling Deve Ser Avaliado pelo Resultado

Mais recursos sem ganho de throughput indica estratégia ineficaz.

---

# Invariante 88 — Autoscaler Possui Saúde Própria

Falha do controlador não significa ausência de necessidade.

---

# Invariante 89 — Human Override Deve Coordenar com Automação

Operador e controlador não deverão entrar em guerra de escala.

---

# Invariante 90 — Performance SLO e Capacity State São Relacionados, não Iguais

Um Serviço pode cumprir SLO e ainda estar perto de saturação.

---

# Invariante 91 — Capacity Risk Pode Ser Alto antes da Saturação

TTE, scaling delay e Missão podem antecipar exposição.

---

# Invariante 92 — Capacity Intelligence Deve Utilizar Histórico

Padrões recorrentes deverão melhorar decisões futuras.

---

# Invariante 93 — Baselines Não Devem Normalizar Regressão

Degradação persistente não deverá tornar-se novo normal sem decisão.

---

# Invariante 94 — Capacity Debt Deve Permanecer Visível

Pressão estrutural recorrente não deverá ser aceita silenciosamente.

---

# Invariante 95 — Exceções de Headroom Devem Possuir Lifecycle

Margem reduzida temporariamente precisa de normalização.

---

# Invariante 96 — Capacity Authority Deve Ser Explícita

Reservar, escalar e consumir contingência são atos de autoridade.

---

# Invariante 97 — CCM Informa Prioridade, OPS Governa Capacity

Contexto missional não deverá eliminar fronteiras de responsabilidade.

---

# Invariante 98 — Autonomia Deve Possuir Envelope de Capacidade

Agentes não deverão poder aumentar custo ou blast radius indefinidamente.

---

# Invariante 99 — Capacity Control Deve Ser Closed-Loop

A ação deverá ser seguida por observação do resultado.

---

# Invariante 100 — Capacity Deve Ser Avaliada pelo Trabalho Útil Sustentável

Quantidade de infraestrutura não é finalidade.

A finalidade é sustentar comportamento operacional aceitável.

---

# Garantias Mínimas de Capacidade, Desempenho e Saturação

Uma implementação adequada deverá fornecer garantias suficientes para compreender limites e agir antes que pressão se transforme em colapso.

---

# Garantia de Demand Visibility

OPS deverá poder compreender carga relevante.

---

# Garantia de Throughput

Trabalho concluído deverá poder ser distinguido do trabalho solicitado.

---

# Garantia de Latency

Performance temporal deverá possuir observabilidade compatível com o domínio.

---

# Garantia de Saturation Signals

Recursos limitantes deverão possuir Sinais suficientes quando possível.

---

# Garantia de Headroom

A margem deverá poder ser estimada.

---

# Garantia de Reservations

Capacidade reservada deverá permanecer distinguível da livre.

---

# Garantia de Bottleneck Analysis

OPS deverá possuir meios para localizar recursos limitantes.

---

# Garantia de Queue Visibility

Backlog, idade e crescimento deverão poder ser observados quando relevantes.

---

# Garantia de Capacity Protection

A Plataforma deverá poder limitar overload por mecanismos apropriados.

---

# Garantia de Forecast

Demand futura relevante deverá poder ser estimada quando dados permitirem.

---

# Garantia de Failover Capacity

A capacidade remanescente em cenários prometidos de falha deverá ser conhecida.

---

# Garantia de Provider Limits

Quotas e limites externos deverão poder ser considerados.

---

# Garantia de Capacity Testing

Limites importantes deverão poder ser testados ou demonstrados por Evidência suficiente.

---

# Garantia de Capacity Confidence

Estimativas deverão poder representar incerteza.

---

# Garantia de Scaling

Capacidade deverá poder ser ajustada quando arquitetura oferecer elasticidade.

---

# Garantia de Scaling Limits

A Plataforma deverá saber quando scaling está bloqueado.

---

# Garantia de Admission Control

Novo trabalho deverá poder ser limitado quando necessário para preservar Saúde.

---

# Garantia de Recovery

A operação deverá possuir estratégia para sair de overload.

---

# Garantia de Capacity Memory

Incidentes, testes e ações deverão alimentar modelos futuros.

---

# Garantia de Mission Capacity

Demand missional conhecida deverá poder participar de planejamento.

---

# Garantia de Capacity Explainability

Eva, Operadores e Agentes deverão poder compreender por que determinada decisão de capacidade foi tomada.

---

# Anti-Padrões de Capacidade, Desempenho e Saturação

A Engenharia Oficial deverá reconhecer práticas que criam aparência de eficiência enquanto acumulam risco.

---

# Anti-Padrão — CPU é Capacidade

Um único recurso é tratado como representação universal.

---

# Anti-Padrão — 100% é o Limite

O sistema só age quando recurso chega ao máximo.

---

# Anti-Padrão — Throughput Estável = Tudo Bem

O backlog cresce silenciosamente.

---

# Anti-Padrão — Média de Latência

Tail latency desaparece da análise.

---

# Anti-Padrão — Fila Infinita

O sistema aceita trabalho indefinidamente para evitar rejeição.

---

# Anti-Padrão — Buffer como Solução de Capacity

O problema é apenas adiado.

---

# Anti-Padrão — Retry sem Budget

Falha amplifica overload.

---

# Anti-Padrão — Autoscale Só por CPU

Workload real é limitado por outra dimensão.

---

# Anti-Padrão — Escalar Upstream sem Ver Downstream

Mais replicas causam colapso do banco.

---

# Anti-Padrão — Max Replicas Arbitrário

O teto existe sem relação com capacity real.

---

# Anti-Padrão — Cloud é Infinita

Quota é descoberta no pico.

---

# Anti-Padrão — Failover sem Capacity

Região secundária existe...

mas não suporta tráfego.

---

# Anti-Padrão — Benchmark como Produção

Número sintético vira promessa operacional.

---

# Anti-Padrão — Load Test com Workload Irreal

Resultado excelente não corresponde a tráfego real.

---

# Anti-Padrão — Stress Test sem Recovery

Descobre-se como quebrar...

mas não como voltar.

---

# Anti-Padrão — Média para Capacity Planning

Picos são ignorados.

---

# Anti-Padrão — Rightsizing pela Média

Headroom e failover são removidos.

---

# Anti-Padrão — Idle = Waste

Reserva de resiliência é eliminada para melhorar eficiência aparente.

---

# Anti-Padrão — Reserva sem Expiração

Capacidade fica presa indefinidamente.

---

# Anti-Padrão — Oversubscription Invisível

Todos acreditam possuir mais capacidade do que realmente existe.

---

# Anti-Padrão — Admission Control Só Depois do Colapso

O sistema aceita trabalho que sabe não conseguir concluir.

---

# Anti-Padrão — Fairness por Quem Chega Primeiro

Workload agressivo domina recursos compartilhados.

---

# Anti-Padrão — Capacity Planning Anual

Forecast muda...

mas plano permanece congelado.

---

# Anti-Padrão — Forecast como Verdade

Intervalo de incerteza desaparece.

---

# Anti-Padrão — Scaling sem Cooldown

Controlador oscila continuamente.

---

# Anti-Padrão — Predictive Scaling sem Feedback

Erro de forecast mantém recursos errados.

---

# Anti-Padrão — Capacity Emergency Permanente

Recursos emergenciais tornam-se baseline sem revisão.

---

# Anti-Padrão — Shedding como Fracasso

A organização prefere colapso global a rejeição controlada.

---

# Anti-Padrão — Degraded Mode Nunca Testado

Fallback existe apenas no desenho.

---

# Anti-Padrão — Fim do Pico = Recovery

Recursos são reduzidos enquanto backlog ainda cresce.

---

# Anti-Padrão — Baseline Absorve Regressão

Performance piora lentamente e o sistema aprende que isso é normal.

---

# Anti-Padrão — Agente Escala sem Limite Econômico

Autonomia resolve performance criando custo indefinido.

---

# Modelo Integrado de Capacidade

Conceitualmente:

`DEMAND`

↓

`WORKLOAD PROFILE`

↓

`RESOURCE DEMAND`

↓

`CAPACITY GRAPH`

↓

`EFFECTIVE CAPACITY`

↓

`HEADROOM`

↓

`FORECAST`

↓

`RISK`

↓

`PLAN / RESERVE`

↓

`OBSERVE`

↓

`SCALE / THROTTLE / SHED / DEGRADE`

↓

`VALIDATE`

↓

`RECOVER`

↓

`LEARN`

↓

`RECALIBRATE CAPACITY MODEL`

---

# Loop de Overload

`DEMAND > SAFE CAPACITY`

↓

`PRESSURE`

↓

`QUEUE / LATENCY`

↓

`SATURATION`

↓

`SCALE`

ou:

`THROTTLE`

ou:

`SHED`

ou:

`DEGRADE`

↓

`STABILIZE`

↓

`DRAIN BACKLOG`

↓

`RECOVER`

↓

`REVIEW`

↓

`IMPROVE`

---

# Relação Final com 014 — Configuração e Estado Operacional

O `014` responde:

> Qual configuração está efetivamente governando a operação?

O `015` responde:

> Que capacidade e performance esse Estado efetivo produz?

---

# Fronteira 014 ↔ 015

`EFFECTIVE CONFIGURATION`

↓

`RESOURCE BEHAVIOR`

↓

`SERVICE CAPACITY`

↓

`PERFORMANCE`

---

# Invariante Configuration ↔ Capacity

Alterar configuração poderá alterar capacidade sem adicionar ou remover infraestrutura.

---

# Relação Final com 013 — Deploy, Release e Transições Operacionais

Uma Release poderá alterar:

- resource demand;
- latency;
- throughput;
- cache behavior;
- scaling efficiency.

---

# Invariante Release ↔ Capacity

Performance regression deverá poder ser tratada como Release regression.

---

# Release Capacity Gate

Uma Release poderá exigir:

- headroom;
- efficiency;
- latency;
- saturation;

dentro de limites aceitos.

---

# Invariante de Capacity Gate

Uma Release tecnicamente funcional poderá ser bloqueada se reduzir margem a condição insegura.

---

# Relação com 012 — Mudanças Operacionais e Controle de Risco

Aumentar ou reduzir capacity poderá ser Change.

---

# Invariante Capacity Change

A intervenção deverá considerar:

- risco;
- transição;
- custo;
- reversibilidade;
- Dependências.

---

# Relação com 011 — Problemas, Causa Raiz e Recorrência

Saturação recorrente poderá indicar Problema estrutural.

---

# Exemplo

Toda segunda-feira:

`DATABASE SATURATION`

---

# Invariante Capacity ↔ Problem

Pressão recorrente não deverá ser tratada apenas como série de Incidentes independentes.

---

# Relação com 010 — Incidentes e Coordenação de Resposta

Capacity shortfall poderá produzir Major Incident.

---

# Durante Resposta

OPS poderá:

- scale;
- shed;
- reroute;
- throttle;
- degrade.

---

# Invariante Incident ↔ Capacity

A resposta deverá preservar Evidência sobre Demand, bottleneck e decisões.

---

# Relação com 009 — Eventos, Alertas e Gestão de Atenção

Capacity poderá produzir Eventos antes do impacto.

---

# Exemplos

`HEADROOM_LOW`

`TTE_CRITICAL`

`QUOTA_NEAR_LIMIT`

`BACKLOG_GROWING`

---

# Invariante de Atenção Antecipatória

O sistema deverá favorecer atenção antes da indisponibilidade quando possível.

---

# Relação com 008 — Saúde Operacional e Gestão de Sinais

Capacity State utiliza Sinais de:

- latency;
- queues;
- resources;
- errors;
- throughput.

---

# Invariante Health ↔ Capacity

Saturação deverá contribuir para Saúde...

sem reduzir Health exclusivamente a capacidade.

---

# Relação com Resiliência

Resiliência depende de capacity disponível após falha.

---

# Invariante Capacity ↔ Resilience

Redundância sem headroom de failover deverá ser considerada incompleta.

---

# Relação com Runbooks

Runbooks poderão orientar:

- emergency scaling;
- throttling;
- shedding;
- backlog drain;
- quota escalation.

---

# Invariante Capacity ↔ Runbook

Procedimentos deverão usar Estado atual...

Não números fixos descontextualizados.

---

# Relação com CCM

CCM poderá informar:

- Missões futuras;
- prioridade;
- Demand prevista;
- janelas críticas.

---

# Invariante CCM ↔ Capacity

CCM declara necessidade e valor missional.

OPS determina viabilidade, recursos e mecanismos.

---

# Relação com Eva

Eva poderá responder:

> Temos capacidade?

Mas a resposta madura raramente será apenas:

> Sim.

---

# Exemplo

> Temos capacidade para a carga atual e 24% de safe headroom.  
> Em N-1, entretanto, a margem cai para 6%.  
> Há uma Missão iniciando em 40 minutos que consumirá parte dessa reserva.

---

# Invariante de Resposta Multicontexto

Eva deverá evitar transformar capacity em booleano simples.

---

# Pergunta

> Onde está o gargalo?

Eva poderá responder:

> A API ainda possui CPU disponível, mas o pool de conexões do banco está em 97% e o tempo de espera já aumentou 4 vezes.

---

# Invariante de Diagnóstico End-to-End

Eva deverá buscar bottleneck real...

Não métrica mais óbvia.

---

# Pergunta

> Quanto tempo temos?

Eva poderá responder:

> Mantido o crescimento atual, o pool deve atingir o limite em aproximadamente 23 minutos, com confiança moderada.

---

# Invariante de Incerteza Conversacional

Estimativas deverão preservar confidence.

---

# Eva não é o Capacity Controller

Ela poderá:

- explicar;
- sintetizar;
- recomendar;
- solicitar ação autorizada.

Mas os mecanismos de scaling e proteção deverão existir independentemente da interface conversacional.

---

# Invariante de Independência

Falha de Eva não deverá remover capacidade de:

- scale;
- throttle;
- shed;
- recover.

---

# Relação com Agentes

Agentes poderão:

- prever saturation;
- analisar bottleneck;
- calibrar forecast;
- recomendar scaling;
- detectar capacity conflicts;
- ajustar dentro de envelope.

---

# Invariante de Agente de Capacity

Inferência deverá permanecer distinta de Evidência e autoridade.

---

# Relação com Automações

Automações poderão executar:

- scaling;
- reservations;
- pre-scaling;
- load shedding;
- throttling;
- recovery.

---

# Invariante de Automação

Toda ação deverá operar dentro de:

- limits;
- policies;
- safety envelopes;
- cost budgets;
- Mission context.

---

# Filosofia de Capacidade, Desempenho e Saturação

Capacidade não é possuir recurso.

É possuir **margem útil para continuar operando quando o mundo deixa de se comportar como a média.**

---

# O Sistema Saudável Ainda Pode Estar em Risco

Um Serviço pode estar:

`HEALTHY NOW`

e:

`SATURATION IN 15 MIN`

---

# Invariante de Saúde Prospectiva

OPS deverá olhar não apenas para Estado atual...

mas para direção do Estado.

---

# Headroom é Capacidade de Absorver Incerteza

Margem não é desperdício por definição.

É proteção contra:

- variabilidade;
- crescimento;
- falha;
- burst;
- previsão errada.

---

# Invariante de Valor do Headroom

Capacidade ociosa com propósito poderá representar resiliência comprada.

---

# Saturação é Processo, não Instante

Antes do colapso...

geralmente aparecem:

- menor margem;
- filas;
- latency;
- retries;
- rejection.

---

# Invariante de Detecção Precoce

A maturidade deverá deslocar reação do colapso para os sinais anteriores a ele.

---

# Performance e Capacity São Acopladas

Quando latency aumenta...

concurrency pode aumentar.

Quando concurrency aumenta...

uso de recursos pode aumentar.

Quando uso aumenta...

saturação pode aumentar.

---

# Loop Conceitual

`LATENCY ↑`

↓

`IN-FLIGHT WORK ↑`

↓

`RESOURCE PRESSURE ↑`

↓

`LATENCY ↑`

---

# Invariante de Feedback

Capacity Management deverá considerar ciclos que amplificam degradação.

---

# Escalar não é Sempre Solução

Adicionar recurso ao componente errado poderá:

- não resolver;
- aumentar custo;
- piorar Dependência.

---

# Invariante de Ação Causal

Capacity Automation deverá buscar o gargalo...

Não apenas executar scaling padrão.

---

# Limitar Também é Operar

Throttling, admission control e shedding podem parecer redução de Serviço.

Mas em overload...

podem ser exatamente o que preserva o Serviço.

---

# Invariante de Falha Controlada

A Plataforma deverá preferir degradação compreensível a colapso indiscriminado quando o domínio permitir.

---

# Capacity como Interface entre Presente e Futuro

O presente responde:

> Quanto temos agora?

O futuro pergunta:

> Quanto precisaremos quando a próxima condição chegar?

---

# Invariante de Continuidade Temporal

Capacity Management deverá conectar:

- observação;
- forecast;
- planejamento;
- execução;
- aprendizado.

---

# Capacidade como Conhecimento Institucional

Depois de tempo suficiente...

a Plataforma deverá aprender:

> Onde saturamos?

> Como saturamos?

> Quanto tempo temos?

> O que funciona para recuperar?

> Qual margem realmente precisamos?

---

# Invariante de Aprendizado Operacional

A capacidade futura deverá ser governada pela experiência passada sem tornar o sistema prisioneiro dela.

---

# Princípio Final

Capacidade, Desempenho e Saturação representam a capacidade permanente da Plataforma UNO de compreender quanto trabalho útil consegue sustentar, quanto risco existe na margem restante, como responder ao crescimento e como preservar operação quando Demand ultrapassa o esperado.

A Plataforma deverá conseguir responder:

> Qual é a Demand atual?

> Qual é o Throughput?

> Qual é a Latency?

> Onde existe Queueing?

> Qual recurso está limitando?

> Qual é a capacidade sustentável?

> Quanto headroom existe?

> Quanto está reservado?

> Quanto já está comprometido?

> Qual capacidade permanece em N-1?

> Qual é o próximo bottleneck?

> Quanto tempo até saturar?

> Quanto tempo levamos para adicionar capacidade?

> O autoscaler consegue reagir?

> Existe quota suficiente?

> Precisamos escalar?

> Precisamos limitar Demand?

> Qual trabalho pode ser degradado?

> O backlog está crescendo?

> Quanto tempo para recuperá-lo?

> Temos capacidade para a próxima Missão?

> Qual é a confiança desta estimativa?

> O que aprendemos com a última saturação?

---

# Conclusão

A Engenharia Oficial estabelece Capacidade, Desempenho e Saturação como capacidade central de OPS.

Quando existe Demand...

Throughput revela quanto trabalho é concluído.

Quando trabalho começa a esperar...

Queueing revela pressão.

Quando margem diminui...

Headroom revela exposição.

Quando um recurso limita o sistema...

Bottleneck Analysis localiza restrição.

Quando Demand futura é conhecida...

Capacity Planning antecipa necessidade.

Quando Demand muda rapidamente...

Elasticity adapta recursos.

Quando scaling não basta...

Admission Control, Throttling e Load Shedding protegem a Plataforma.

Quando overload ocorre...

Recovery restaura margem e drena dívida acumulada.

Quando uma Missão futura exige recursos...

CCM fornece contexto para reserva e planejamento.

Quando modelos erram...

produção, testes e Incidentes recalibram conhecimento.

Quando Agentes e Automações operam capacidade...

Safety Envelopes limitam custo, escopo e risco.

---

OPS deverá permitir que Capacidade seja:

- medida;
- modelada;
- testada;
- prevista;
- reservada;
- alocada;
- escalada;
- limitada;
- protegida;
- degradada;
- recuperada;
- explicada;
- aprendida.

---

Onde houver Demand...

Deverá existir compreensão de carga.

Onde houver Throughput...

Deverá existir contexto de latency e backlog.

Onde houver recurso...

Deverá existir compreensão de capacidade útil.

Onde houver limite...

Deverá existir headroom.

Onde houver fila...

Deverá existir compreensão de idade e crescimento.

Onde houver pico...

Deverá existir estratégia de burst.

Onde houver failover...

Deverá existir capacidade remanescente.

Onde houver forecast...

Deverá existir incerteza.

Onde houver scaling...

Deverá existir validação de resultado.

Onde houver overload...

Deverá existir proteção.

Onde houver recovery...

Deverá existir margem para recuperar.

Onde houver Missão...

Deverá existir viabilidade de capacidade.

Onde houver autonomia...

Deverá existir envelope.

Onde houver histórico...

Deverá existir aprendizado.

E onde a Plataforma UNO conseguir sustentar crescimento, absorver variação, antecipar saturação e degradar de forma controlada antes de transformar pressão em colapso...

Existirá **Capacity & Performance Engineering Operacional**.

---

# Encerramento do Arquivo 015

Com este documento...

o V08 estabelece:

- Resource Capacity;
- Service Capacity;
- Effective Capacity;
- Demand;
- Offered Load;
- Accepted Load;
- Completed Load;
- Throughput;
- Latency;
- Tail Latency;
- Queue Time;
- Utilization;
- Saturation;
- Saturation Point;
- Knee Point;
- Sustainable Throughput;
- Headroom;
- Safe Headroom;
- Reserved Capacity;
- Committed Capacity;
- Bottlenecks;
- Workload Mix;
- Concurrency;
- Queues;
- Backlog;
- Backlog Drain Time;
- Burst Capacity;
- Backpressure;
- Throttling;
- Rate Limits;
- Quotas;
- Load Shedding;
- Degraded Mode;
- Overload;
- Retry Amplification;
- Performance Baselines;
- Capacity Efficiency;
- Performance Budgets;
- Capacity Risk;
- Capacity Forecast;
- Capacity Planning;
- Scaling;
- Scalability;
- Elasticity;
- Autoscaling;
- Little's Law;
- Queueing Models;
- Service Demand;
- Critical Path;
- Resource Attribution;
- CPU Capacity;
- Memory Capacity;
- Storage Capacity;
- Network Capacity;
- Connection Capacity;
- Database Capacity;
- Cache Capacity;
- GPU Capacity;
- Accelerator Capacity;
- Capacity Testing;
- Load Testing;
- Stress Testing;
- Spike Testing;
- Soak Testing;
- Breakpoint Testing;
- Scalability Testing;
- Failover Capacity Testing;
- Capacity Evidence;
- Capacity Confidence;
- Scenario Planning;
- Failover Reserve;
- Disaster Capacity;
- Regional Capacity;
- Placement;
- Fragmentation;
- Allocation;
- Capacity Arbitration;
- Admission Control;
- Fairness;
- Mission Capacity;
- Provider Capacity;
- Rightsizing;
- Capacity Economics;
- Reactive Scaling;
- Predictive Scaling;
- Target Tracking;
- Queue-Based Scaling;
- Scale-to-Zero;
- Warm Pools;
- Dependency-Aware Scaling;
- Emergency Capacity;
- Dynamic Admission Control;
- Backlog Recovery;
- Performance SLOs;
- Capacity SLOs;
- Predictive Saturation;
- Capacity Intelligence;
- Capacity Governance;
- Capacity Autonomy;
- maturidade de Capacity Management.

A partir daqui...

o V08 deverá sair da pergunta:

> Quanto trabalho útil a Plataforma consegue sustentar, quanto risco existe na margem restante e como reagimos antes da saturação virar colapso?

E avançar para a próxima capacidade operacional da sequência.

---

**Fim do arquivo `015-capacidade-desempenho-e-saturacao.md`.**
