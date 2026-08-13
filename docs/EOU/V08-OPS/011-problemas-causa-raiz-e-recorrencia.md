# 011 — Problemas, Causa Raiz e Recorrência

## V08 — OPS  
## Engenharia Oficial da Plataforma UNO

---

# Propósito

Este documento define o modelo oficial de **Problemas, Causa Raiz e Recorrência** do domínio OPS da Plataforma UNO.

Seu objetivo é estabelecer como a Plataforma deverá transformar:

- Incidentes;
- Near Misses;
- degradações recorrentes;
- fragilidades conhecidas;
- padrões operacionais;
- Evidências históricas;

em compreensão estrutural capaz de reduzir:

- recorrência;
- impacto futuro;
- incerteza;
- fragilidade;
- dependência de resposta emergencial.

Este documento deverá responder:

> O que é um Problema?

> Quando um Incidente deve produzir investigação estrutural?

> Como distinguir Incidente de Problema?

> Como representar causa sem simplificar sistemas complexos?

> Como reconhecer recorrência?

> Como tratar causa desconhecida?

> Como transformar aprendizado em redução real de risco?

> Como impedir que a organização resolva repetidamente os mesmos Incidentes sem eliminar suas condições estruturais?

---

# Continuidade com 010

O arquivo `010-incidentes-e-coordenacao-de-resposta.md` estabeleceu como OPS coordena uma situação operacional ativa.

Ele respondeu principalmente:

> O que está acontecendo?

> Qual é o impacto?

> Quem está coordenando?

> Como mitigamos?

> Como recuperamos?

> Como encerramos?

O `011` começa quando uma pergunta diferente passa a importar:

> Por que essa condição aconteceu?

E, principalmente:

> Por que ela ainda pode acontecer novamente?

---

# Incidente e Problema

Incidente e Problema representam objetos diferentes.

---

# Incidente

O Incidente representa uma situação operacional que exige resposta coordenada.

Seu objetivo principal é:

`RESTAURAR OPERACAO`

---

# Problema

O Problema representa uma condição estrutural, conhecida ou suspeita, capaz de:

- causar Incidentes;
- aumentar risco;
- ampliar impacto;
- dificultar recuperação;
- produzir recorrência.

Seu objetivo principal é:

`REDUZIR RISCO E RECORRENCIA`

---

# Invariante Incidente ≠ Problema

OPS não deverá utilizar Incidente e Problema como sinônimos.

---

# Relação Conceitual

Um modelo simplificado poderá ser:

`INCIDENTE`

> Algo está acontecendo agora.

`PROBLEMA`

> Existe uma condição que explica ou favorece isso acontecer.

---

# Exemplo

Incidente:

> Serviço de Identidade ficou indisponível por 23 minutos.

Problema:

> O Serviço de Identidade possui dependência única de um Provider sem failover funcional validado.

---

# Outro Exemplo

Incidente:

> Banco atingiu limite de conexões.

Problema:

> O modelo de conexão permite crescimento não limitado por consumidor e não possui proteção adequada contra saturação.

---

# Invariante de Perspectiva Estrutural

O Problema deverá representar algo mais durável do que a ocorrência individual.

---

# Problema sem Incidente

Um Problema poderá existir antes de qualquer Incidente conhecido.

---

# Exemplo

Uma revisão identifica:

`BACKUP_NAO_TESTADO`

Nenhuma recuperação falhou ainda.

Mesmo assim...

existe uma condição estrutural relevante.

---

# Invariante de Problema Preventivo

OPS não deverá exigir dano consumado para reconhecer fragilidade estrutural.

---

# Problema após Near Miss

Um Near Miss também poderá revelar Problema.

---

# Exemplo

A redundância quase falhou durante manutenção...

mas um Operador interveio antes do impacto.

Não houve Incidente significativo.

Entretanto...

a condição poderá justificar investigação estrutural.

---

# Invariante de Aprendizado sem Impacto

A ausência de dano não deverá impedir tratamento de uma fragilidade conhecida.

---

# Incidente sem Problema Formal

Nem todo Incidente deverá obrigatoriamente gerar um Problem Record.

---

# Exemplos

Poderão existir:

- falha isolada;
- condição externa excepcional;
- ocorrência de baixo impacto;
- causa simples já corrigida;
- situação sem valor proporcional de investigação adicional.

---

# Invariante de Formalização Proporcional

Problem Management deverá concentrar esforço onde existe valor real de redução de risco.

---

# Um Problema Pode Gerar Muitos Incidentes

Essa é uma das relações mais importantes deste domínio.

---

# Exemplo

`PROBLEMA P-001`

> Timeout inadequado entre Serviço A e Provider B.

Pode estar relacionado a:

`INCIDENTE I-104`

`INCIDENTE I-127`

`INCIDENTE I-193`

---

# Invariante de Relação 1:N

OPS deverá permitir relacionar múltiplos Incidentes ao mesmo Problema estrutural.

---

# Um Incidente Pode Revelar Muitos Problemas

O inverso também é possível.

---

# Exemplo

Um único Incidente pode revelar:

- falta de redundância;
- Alerta inadequado;
- Runbook incorreto;
- rollback inseguro;
- ownership ambíguo.

---

# Invariante de Relação N:N

A relação entre Incidentes e Problemas não deverá ser limitada artificialmente a um único vínculo.

---

# Problem Record

Um **Problem Record** representa o objeto persistente utilizado para acompanhar uma condição estrutural.

---

# Identidade

Todo Problema deverá possuir identidade própria.

Conceitualmente:

`ProblemID`

---

# Propriedades Fundamentais

Um Problem Record poderá possuir:

- `ProblemID`;
- título;
- descrição;
- Estado;
- prioridade;
- risco;
- Criticidade;
- escopo;
- Owner;
- data de identificação;
- origem;
- Incidentes relacionados;
- Near Misses relacionados;
- Serviços relacionados;
- Capacidades relacionadas;
- Missões relacionadas;
- Evidências;
- hipóteses causais;
- causa conhecida;
- fatores contribuintes;
- Known Error;
- Workarounds;
- ações estruturais;
- Mudanças relacionadas;
- recorrência;
- histórico;
- Proveniência.

---

# Invariante de Identidade Persistente

O Problema deverá preservar identidade durante sua investigação e tratamento...

Mesmo quando a compreensão causal evoluir.

---

# Título do Problema

O título deverá representar a condição estrutural conhecida...

Sem afirmar causalidade não demonstrada.

---

# Título Prematuro

Exemplo inadequado:

> Bug no banco causa falhas de autenticação.

quando isso ainda é apenas hipótese.

---

# Título Mais Adequado

> Recorrência de falhas de autenticação associadas à saturação de conexões.

---

# Invariante de Título Epistemicamente Seguro

O título não deverá transformar hipótese em fato.

---

# Descrição do Problema

A descrição poderá responder:

- qual condição foi observada;
- onde aparece;
- quais Incidentes estão relacionados;
- qual risco representa;
- o que sabemos;
- o que ainda não sabemos.

---

# Estado do Problema

Um modelo conceitual poderá incluir:

`IDENTIFICADO`

↓

`EM_TRIAGEM`

↓

`EM_INVESTIGACAO`

↓

`CAUSA_CONHECIDA`

↓

`TRATAMENTO_DEFINIDO`

↓

`EM_TRATAMENTO`

↓

`MITIGADO`

↓

`RESOLVIDO`

↓

`ENCERRADO`

---

# Identificado

Existe Evidência suficiente de que uma condição estrutural merece acompanhamento.

---

# Em Triagem

OPS avalia:

- relevância;
- risco;
- recorrência;
- prioridade;
- ownership;
- necessidade de investigação.

---

# Em Investigação

A organização busca compreender:

- mecanismo;
- causalidade;
- fatores;
- extensão;
- risco.

---

# Causa Conhecida

Existe compreensão causal suficiente para orientar tratamento.

Isso não significa necessariamente que o Problema esteja corrigido.

---

# Tratamento Definido

Existe estratégia aceita para reduzir ou eliminar o risco.

---

# Em Tratamento

Ações estruturais estão sendo executadas.

---

# Mitigado

O risco foi reduzido...

Mas a condição poderá continuar existindo.

---

# Resolvido

A condição estrutural foi eliminada ou reduzida ao nível aceito segundo critérios definidos.

---

# Encerrado

A investigação e o acompanhamento foram concluídos...

Com memória e decisões preservadas.

---

# Invariante de Lifecycle Explícito

OPS deverá distinguir:

> identificamos,

> compreendemos,

> sabemos tratar,

> estamos tratando,

> reduzimos o risco,

> resolvemos.

---

# Causa Conhecida não é Resolução

Descobrir a causa não corrige o sistema.

---

# Exemplo

`CAUSA_CONHECIDA`

> Limite de conexões é compartilhado entre workloads sem isolamento.

O sistema continua vulnerável.

---

# Invariante Conhecimento ≠ Tratamento

Problem Management deverá distinguir descoberta de correção.

---

# Mitigação do Problema

Um Problema poderá ser mitigado sem ser eliminado.

---

# Exemplo

Problema:

> Provider único.

Mitigação:

> Procedimento manual de contingência validado.

A fragilidade estrutural continua...

mas o risco de impacto pode ter diminuído.

---

# Invariante de Mitigação Estrutural

Redução de risco deverá poder ser representada mesmo quando a condição permanece.

---

# Problema Resolvido

A resolução deverá depender de critérios explícitos.

---

# Exemplo

Problema:

> Falha recorrente por saturação de conexão.

Critérios:

- isolamento por consumidor implementado;
- limites definidos;
- proteção contra saturação ativa;
- teste de carga validado;
- recorrência não observada dentro da janela definida.

---

# Invariante de Resolução Evidenciada

Um Problem Record não deverá ser resolvido apenas porque uma Mudança foi implantada.

---

# Owner do Problema

Todo Problema relevante deverá possuir responsabilidade.

---

# Problem Owner

O Owner deverá garantir que a condição:

- seja compreendida;
- permaneça visível;
- seja priorizada;
- possua estratégia;
- seja acompanhada até decisão adequada.

---

# Invariante de Ownership Estrutural

A ausência de urgência de Incidente não deverá permitir que Problemas relevantes se tornem órfãos.

---

# Owner não Precisa Executar Tudo

O Problem Owner poderá coordenar trabalho realizado por:

- equipes técnicas;
- arquitetos;
- Operadores;
- Agentes;
- fornecedores;
- organizações federadas.

---

# Origem do Problema

Um Problema poderá ser identificado a partir de:

- Incidente;
- Postmortem;
- Near Miss;
- análise de tendência;
- Observabilidade;
- auditoria;
- revisão arquitetural;
- Change Management;
- Provider;
- Agente;
- pessoa.

---

# Invariante de Origem Aberta

Problem Management não deverá depender exclusivamente de Incidentes encerrados.

---

# Problem Detection

A identificação de Problemas poderá ocorrer de forma:

- reativa;
- proativa.

---

# Problem Management Reativo

Começa após uma ou mais ocorrências.

---

# Exemplo

Três Incidentes apresentam o mesmo padrão de falha.

---

# Problem Management Proativo

Busca fragilidades antes de impacto significativo.

---

# Exemplos

- tendência de saturação;
- dependência sem redundância;
- certificado próximo de expirar;
- backup nunca restaurado;
- limite de capacidade aproximando-se;
- padrão de erro crescente.

---

# Invariante de Capacidade Preventiva

Uma operação madura deverá ser capaz de descobrir Problemas antes que usuários descubram suas consequências.

---

# Sinais de Problema

Uma condição poderá merecer investigação quando houver:

- Incidentes repetidos;
- Alertas recorrentes;
- Workarounds frequentes;
- crescimento de erro;
- capacidade degradando;
- falhas semelhantes;
- dependência frágil;
- dívida operacional;
- comportamento desconhecido.

---

# Recorrência

**Recorrência** representa repetição significativa de uma condição ou padrão operacional.

---

# Recorrência não é Apenas Igualdade Exata

Dois Incidentes não precisam ser idênticos para possuir a mesma condição estrutural.

---

# Exemplo

Incidente A:

> Timeout no checkout.

Incidente B:

> Timeout no login.

Incidente C:

> Timeout em consulta.

Todos poderão compartilhar:

`DEPENDENCIA_PROVIDER_X`

ou:

`POOL_COMPARTILHADO_SATURADO`

---

# Invariante de Recorrência Semântica

OPS deverá poder reconhecer padrões além de correspondência textual ou igualdade de códigos de erro.

---

# Assinatura de Recorrência

Um Problema poderá possuir uma espécie de assinatura operacional.

---

# Elementos da Assinatura

Poderão incluir:

- Serviços;
- Dependências;
- sintomas;
- Eventos;
- Alertas;
- métricas;
- Mudanças;
- horário;
- carga;
- topologia;
- sequência temporal.

---

# Invariante de Assinatura Evolutiva

A assinatura deverá poder melhorar conforme novos Incidentes forem relacionados.

---

# Recorrência Confirmada

Existe Evidência suficiente de repetição do mesmo mecanismo ou condição.

---

# Recorrência Suspeita

Existe similaridade relevante...

Mas causalidade comum ainda não foi confirmada.

---

# Invariante de Similaridade ≠ Mesma Causa

Incidentes semelhantes deverão poder ser agrupados para investigação...

Sem serem declarados automaticamente como manifestações do mesmo Problema.

---

# Cluster de Incidentes

OPS poderá agrupar Incidentes semelhantes para análise.

---

# Exemplo

`CLUSTER`

- I-102;
- I-118;
- I-144;
- I-151.

Similaridade:

`TIMEOUT + PROVIDER_X + PICO_DE_CARGA`

---

# Agente de Correlação

Um Agente poderá identificar:

> Esses quatro Incidentes possuem padrão operacional semelhante.

---

# Invariante de Correlação Assistida

A correlação produzida por Agente deverá ser tratada como Evidência analítica...

Não como causalidade confirmada.

---

# Frequência

A recorrência poderá considerar:

- número de ocorrências;
- intervalo;
- tendência;
- sazonalidade.

---

# Exemplo

`1 INCIDENTE / 6 MESES`

pode possuir significado diferente de:

`4 INCIDENTES / 7 DIAS`

---

# Invariante de Frequência Contextual

A importância da recorrência deverá considerar Criticidade e impacto...

Não apenas contagem.

---

# Recorrência de Baixa Frequência e Alto Impacto

Uma falha que ocorre uma vez por ano...

mas interrompe Missão crítica...

pode justificar prioridade elevada.

---

# Recorrência de Alta Frequência e Baixo Impacto

Pequenas falhas repetidas podem gerar:

- fadiga;
- custo;
- perda de confiança;
- carga operacional.

---

# Invariante de Risco Acumulado

Múltiplos impactos pequenos poderão formar Problema estrutural relevante.

---

# Taxa de Recorrência

Poderá existir métrica conceitual:

`RECURRENCE_RATE`

---

# Janela de Observação

Toda interpretação de recorrência deverá possuir contexto temporal.

---

# Exemplo

`5 OCORRENCIAS / 30 DIAS`

é diferente de:

`5 OCORRENCIAS / 5 ANOS`

---

# Invariante de Recorrência com Janela

Contagens sem intervalo temporal não deverão ser tratadas como medida suficiente.

---

# Recorrência após Correção

Uma condição que reaparece depois de considerada resolvida merece atenção especial.

---

# Reopen

Um Problem Record poderá ser reaberto.

---

# Invariante de Reabertura

A recorrência posterior deverá poder reabrir Problema preservando toda a história anterior.

---

# Correção Ineficaz

Se o mesmo mecanismo reaparece...

a ação anterior pode ter sido insuficiente.

---

# Diagnóstico Incorreto

Se a condição reaparece de forma diferente...

talvez a causa anterior estivesse errada ou incompleta.

---

# Invariante de Recorrência como Teste da Teoria

A realidade futura deverá poder desafiar conclusões anteriores.

---

# Causa

Uma **Causa** representa uma condição ou mecanismo que participa da produção de determinado resultado.

---

# Causa não é Culpa

A pergunta:

> O que causou isso?

não deverá ser interpretada automaticamente como:

> Quem é culpado?

---

# Invariante de Causalidade Não Personalizada

A investigação deverá buscar mecanismo antes de atribuição pessoal.

---

# Trigger não é Necessariamente Causa Estrutural

Um Trigger inicia uma sequência.

Mas a fragilidade poderá existir anteriormente.

---

# Exemplo

`DEPLOY`

aciona falha.

Entretanto...

o Problema pode ser:

`COMPATIBILIDADE_NAO_VALIDADA`

ou:

`AUSENCIA_DE_CANARY`

ou:

`ROLLBACK_INSEGURO`

---

# Invariante Trigger ≠ Problema

OPS deverá evitar concluir que o último Evento antes da falha é automaticamente sua causa estrutural.

---

# Causa Imediata

Representa mecanismo próximo do efeito.

---

# Exemplo

> Processo terminou por falta de memória.

---

# Causa Estrutural

Pode representar condição que permitiu o mecanismo.

---

# Exemplo

> Workload não possui limite adequado e compete por memória com Serviço crítico.

---

# Fator Contribuinte

Não precisa ser suficiente para produzir o Incidente sozinho.

Mas pode:

- aumentar probabilidade;
- aumentar impacto;
- atrasar detecção;
- dificultar recuperação.

---

# Exemplo

A causa técnica produz falha.

Mas ausência de Alerta adequado transforma cinco minutos de degradação em quarenta minutos de impacto.

---

# Invariante de Fatores Contribuintes

Problem Management deverá preservar fatores que alteram consequência...

Mesmo quando não são a causa primária.

---

# Condição Latente

Uma fragilidade pode permanecer invisível durante meses.

---

# Exemplo

Failover configurado...

mas nunca testado.

A fragilidade somente aparece quando o primário falha.

---

# Invariante de Condição Latente

Ausência de ocorrência anterior não deverá ser interpretada como prova de segurança.

---

# Root Cause

O termo **Root Cause** poderá ser utilizado quando útil.

Entretanto...

a Engenharia Oficial não deverá pressupor que todo Problema possui uma única raiz.

---

# Sistemas Complexos

Em sistemas complexos...

falhas podem surgir da combinação de condições individualmente toleráveis.

---

# Exemplo

Nenhum fator isolado seria suficiente:

`CARGA_ELEVADA`

+

`CACHE_DEGRADADO`

+

`AUTOSCALING_LENTO`

+

`TIMEOUT_AGRESSIVO`

↓

`INCIDENTE`

---

# Invariante de Causalidade Composta

OPS deverá poder representar múltiplos fatores causais simultaneamente.

---

# Cadeia Causal

Uma investigação poderá construir:

`CONDICAO A`

↓

`MECANISMO B`

↓

`EFEITO C`

↓

`PROPAGACAO D`

↓

`IMPACTO E`

---

# Grafo Causal

Em situações mais complexas...

uma árvore ou grafo poderá representar melhor a realidade.

---

# Exemplo Conceitual

`DEPLOY`

↘

`CONFIGURACAO`

→ `SATURACAO`

→ `TIMEOUT`

→ `FALHA FUNCIONAL`

↗

`CARGA`

Enquanto:

`ALERTA_INADEQUADO`

↓

`AUMENTO_DA_DURACAO_DO_IMPACTO`

---

# Invariante de Causalidade Representável

O modelo não deverá obrigar causalidade complexa a caber em um único campo textual chamado `root_cause`.

---

# Causalidade e Evidência

Uma afirmação causal deverá possuir suporte.

---

# Exemplo

Hipótese:

> Deploy X causou a falha.

Evidências:

- falha iniciou após deploy;
- rollback reduziu erro;
- reprodução em ambiente controlado;
- diferença de configuração identificada.

---

# Invariante de Causa Sustentada por Evidência

Correlação temporal isolada não deverá ser tratada automaticamente como causalidade.

---

# Correlação

Dois Eventos podem ocorrer juntos.

Isso não significa necessariamente que um causou o outro.

---

# Invariante Correlação ≠ Causalidade

OPS deverá preservar essa distinção explicitamente.

---

# Contrafactual

Uma pergunta útil poderá ser:

> Se essa condição não existisse, o Incidente ainda teria ocorrido?

---

# Invariante de Raciocínio Contrafactual

Quando apropriado...

a investigação poderá utilizar contrafactuais para avaliar força causal.

---

# Reproduzibilidade

Alguns Problemas poderão ser reproduzidos.

---

# Reprodução Controlada

Pode fortalecer causalidade.

---

# Limite

Nem todo Problema poderá ou deverá ser reproduzido em produção.

---

# Invariante de Investigação Segura

A busca por causa não deverá criar risco desproporcional para a operação.

---

# Hipótese Causal

Antes de existir causa conhecida...

o Problema poderá possuir hipóteses.

---

# Exemplo

`H1`

> Vazamento de memória.

`H2`

> Crescimento legítimo de carga.

`H3`

> Regressão após versão 8.4.

---

# Estado da Hipótese

Poderá ser:

- proposta;
- em teste;
- fortalecida;
- enfraquecida;
- rejeitada;
- confirmada.

---

# Invariante de Hipótese Persistente

A investigação deverá preservar o que foi considerado e por que foi descartado.

---

# Hipótese Rejeitada

Conhecimento negativo também possui valor.

---

# Exemplo

> Não é saturação de CPU.

Isso poderá evitar repetição de investigação futura.

---

# Invariante de Conhecimento Negativo

OPS deverá poder preservar conclusões relevantes sobre aquilo que não explica o Problema.

---

# Causa Desconhecida

Um Problema poderá permanecer sem causa conhecida.

---

# Estado Legítimo

`CAUSA = DESCONHECIDA`

não representa necessariamente falha de processo.

---

# Invariante de Honestidade Causal

A organização não deverá inventar explicações apenas para fechar Problem Records.

---

# Problema sem Causa, mas com Mitigação

Mesmo sem compreender completamente o mecanismo...

poderá ser possível reduzir risco.

---

# Exemplo

Causa exata desconhecida.

Mas:

> Reinício preventivo a cada 24 horas elimina crescimento acumulado observado.

Isso é um Workaround.

Não é resolução causal.

---

# Invariante Workaround ≠ Causa

A eficácia de uma mitigação não prova automaticamente a teoria causal utilizada para justificá-la.

---

# Known Error

Um **Known Error** representa um Problema cuja condição e comportamento são suficientemente compreendidos para orientar resposta conhecida.

---

# Known Error não Significa Corrigido

Pode significar:

> Sabemos o que acontece.

> Sabemos reconhecer.

> Sabemos contornar.

Mas a correção estrutural ainda não existe.

---

# Exemplo

`KNOWN ERROR`

> Após aproximadamente 72 horas de carga contínua, componente X apresenta crescimento de memória.

Workaround:

> Reiniciar instância de forma coordenada antes do limite crítico.

---

# Invariante Known Error ≠ Resolved Problem

Conhecimento operacional deverá ser distinguido de eliminação da fragilidade.

---

# Known Error Database

OPS poderá manter memória estruturada de Known Errors.

---

# Conteúdo

Poderá incluir:

- sintomas;
- assinatura;
- causa conhecida;
- Workaround;
- risco;
- Serviços;
- versão afetada;
- ações de recuperação.

---

# Invariante de Conhecimento Operacional Recuperável

Durante novo Incidente...

Known Errors relevantes deverão poder ser encontrados rapidamente.

---

# Eva e Known Errors

Durante Incidente...

um Operador poderá perguntar:

> Já vimos esse padrão antes?

Eva poderá responder:

> Existem dois Known Errors com sintomas semelhantes.  
> O mais próximo envolve saturação do pool após aumento de carga.

---

# Invariante de Similaridade sem Conclusão Automática

Eva deverá apresentar precedentes...

Sem afirmar que o Incidente atual possui a mesma causa sem Evidência suficiente.

---

# Agentes na Investigação de Problemas

Agentes poderão apoiar:

- correlação histórica;
- clustering;
- comparação de Timeline;
- análise de Mudanças;
- análise de Dependências;
- busca de padrões;
- geração de hipóteses;
- recuperação de Known Errors.

---

# Agente Causal

Um Agente poderá construir hipóteses como:

> 78% dos Incidentes desse cluster ocorreram após condição X.

Isso poderá orientar investigação.

---

# Invariante de Estatística ≠ Causa

Frequência de associação não deverá ser apresentada como prova causal.

---

# Agente Contraditório

Um Agente poderá buscar Evidência contra a hipótese dominante.

---

# Exemplo

Hipótese dominante:

> Provider X é a causa.

Agente:

> Existem três ocorrências com o mesmo sintoma em períodos nos quais Provider X estava saudável.

---

# Invariante de Investigação Antifrágil

A Plataforma deverá favorecer mecanismos que desafiem explicações excessivamente simples.

---

# Problem Priority

A prioridade de um Problema deverá refletir risco futuro...

Não apenas impacto do último Incidente.

---

# Dimensões

Poderão incluir:

- frequência;
- impacto;
- Criticidade;
- probabilidade;
- detectabilidade;
- capacidade de mitigação;
- custo acumulado;
- Missões;
- exposição futura.

---

# Exemplo

Problema A:

`1 INCIDENTE SEV-1 / ANO`

Problema B:

`20 INCIDENTES SEV-3 / MES`

Ambos poderão justificar prioridade elevada por razões diferentes.

---

# Invariante de Prioridade Estrutural

Problem Management deverá considerar risco agregado e futuro.

---

# Risk Score

Uma implementação poderá calcular indicador.

Conceitualmente:

`RISK = PROBABILIDADE × IMPACTO`

Mas a Engenharia Oficial não deverá reduzir risco exclusivamente a uma multiplicação simples.

---

# Invariante de Risco Contextual

Fatores qualitativos poderão alterar prioridade mesmo quando métricas numéricas parecem semelhantes.

---

# Missão e Prioridade do Problema

Um Problema poderá afetar Capacidade crítica para Missão futura.

Mesmo sem Incidente recente...

isso poderá justificar prioridade.

---

# Relação com CCM

CCM poderá informar:

> Essa fragilidade ameaça uma Missão crítica prevista para amanhã.

OPS poderá elevar prioridade do Problema.

---

# Invariante OPS ↔ CCM

Prioridade estrutural deverá poder incorporar consequência missional futura.

---

# Problem Backlog

Problemas poderão formar um backlog operacional.

---

# Risco do Backlog

Sem Governança...

o backlog poderá tornar-se depósito de fragilidades nunca tratadas.

---

# Invariante de Backlog Vivo

Problem Records deverão permanecer:

- priorizados;
- revisados;
- atribuídos;
- encerrados quando irrelevantes;
- escalados quando risco aumentar.

---

# Aging

A idade de um Problema poderá ser relevante.

---

# Problema Antigo não é Automaticamente Mais Prioritário

Entretanto...

um Problema crítico aberto por longo período pode indicar exposição persistente.

---

# Invariante de Aging Contextual

Tempo aberto deverá ser interpretado junto com risco e atividade.

---

# Problema Dormente

Uma condição pode não produzir ocorrência por longo período.

---

# Invariante de Ausência de Incidente ≠ Ausência de Problema

A falta de recorrência recente não prova eliminação da fragilidade.

---

# Critério de Obsolescência

Um Problema poderá deixar de ser relevante quando:

- Serviço foi aposentado;
- arquitetura mudou;
- Dependência foi removida;
- condição tornou-se impossível.

---

# Invariante de Encerramento por Obsolescência

Problemas obsoletos deverão poder ser encerrados com justificativa...

Sem serem falsamente marcados como corrigidos.

---

# Próxima Dimensão

Com Problem Record, relação Incidente ↔ Problema, lifecycle, recorrência, causalidade, Known Errors, investigação assistida e prioridade estrutural estabelecidos...

o próximo lote deverá aprofundar:

- técnicas de análise causal;
- Five Whys;
- Fault Tree;
- causal graphs;
- análise temporal;
- comparação entre Incidentes;
- análise de Mudanças;
- análise de Dependências;
- fatores humanos;
- fatores organizacionais;
- fatores arquiteturais;
- blast radius;
- condições latentes;
- causalidade probabilística;
- força de Evidência;
- confiança causal;
- experimentação;
- reprodução;
- testes de hipótese;
- investigação segura;
- preservação de Evidências;
- Known Error lifecycle;
- Workarounds;
- ligação com Runbooks;
- ligação com Incidentes futuros.

---

# Técnicas de Análise Causal

Problem Management precisa transformar suspeitas em compreensão sustentada por Evidência.

Para isso...

OPS deverá permitir diferentes técnicas de investigação.

Nenhuma técnica deverá ser tratada como universal.

A escolha dependerá de:

- natureza do Problema;
- complexidade;
- Evidência disponível;
- risco;
- capacidade de reprodução;
- número de componentes;
- comportamento temporal.

---

# Invariante de Técnica Proporcional

A investigação deverá utilizar o método adequado ao Problema...

Em vez de forçar todos os Problemas ao mesmo modelo analítico.

---

# Five Whys

**Five Whys** poderá ser utilizado para explorar sequências causais relativamente simples.

---

# Exemplo

> Por que o Serviço ficou indisponível?

Porque o processo terminou.

> Por que o processo terminou?

Porque excedeu memória disponível.

> Por que excedeu memória?

Porque o consumo cresceu continuamente.

> Por que o consumo cresceu?

Porque objetos não estavam sendo liberados.

> Por que isso não foi detectado antes?

Porque não existia monitoramento adequado de crescimento de heap.

---

# Valor do Five Whys

A técnica ajuda a evitar respostas superficiais como:

> O processo caiu.

---

# Limite do Five Whys

O método pode induzir falsa linearidade.

Sistemas complexos frequentemente possuem:

- múltiplas causas;
- condições simultâneas;
- feedback loops;
- dependências;
- fatores organizacionais.

---

# Invariante de Five Whys Não Dogmático

A quantidade de perguntas não deverá ser fixa...

E a técnica não deverá obrigar uma única cadeia causal.

---

# Ramificação dos Whys

Uma resposta poderá possuir múltiplos caminhos.

---

# Exemplo

> Por que o failover falhou?

Porque:

- configuração estava incorreta;
- teste periódico não ocorreu;
- documentação estava desatualizada.

Cada ramo poderá exigir investigação própria.

---

# Invariante de Causalidade Ramificada

A investigação deverá permitir que uma pergunta produza múltiplos fatores relevantes.

---

# Fault Tree Analysis

Uma **Fault Tree** poderá representar combinações de condições necessárias ou suficientes para produzir determinado resultado.

---

# Evento Topo

Exemplo:

`AUTENTICACAO_INDISPONIVEL`

---

# Ramos

Poderão incluir:

`SERVICO_IDENTIDADE_FALHOU`

OU:

`DEPENDENCIA_EXTERNA_FALHOU`

OU:

`REDE_INDISPONIVEL`

---

# Condições Compostas

Um ramo poderá exigir:

`REGIAO_PRIMARIA_FALHOU`

E:

`FAILOVER_NAO_FUNCIONOU`

---

# Operadores Conceituais

`AND`

significa:

> múltiplas condições precisam coexistir.

`OR`

significa:

> qualquer uma das condições poderá produzir o efeito.

---

# Invariante de Estrutura Lógica

OPS deverá conseguir representar quando um resultado depende de combinação de condições...

Em vez de uma única causa isolada.

---

# Fault Tree e Evidência

Cada ramo poderá possuir:

- Evidência favorável;
- Evidência contrária;
- confiança;
- Estado de investigação.

---

# Invariante de Árvore Investigável

A Fault Tree não deverá ser apenas diagrama estático.

Ela poderá funcionar como estrutura viva de investigação.

---

# Grafo Causal

Problemas mais complexos poderão exigir um **Grafo Causal**.

---

# Nó

Um nó poderá representar:

- Evento;
- condição;
- decisão;
- Mudança;
- comportamento;
- estado arquitetural.

---

# Relação

Uma aresta poderá representar:

- causa;
- contribuição;
- amplificação;
- bloqueio;
- propagação;
- proteção.

---

# Exemplo Conceitual

`DEPLOY`

↓

`CONFIGURACAO_INCORRETA`

↓

`CACHE_MISS`

↓

`CARGA_DATABASE`

↓

`LATENCIA`

↓

`TIMEOUT`

↓

`FALHA_FUNCIONAL`

Enquanto:

`AUTOSCALING_LENTO`

↓

`AMPLIFICA LATENCIA`

E:

`ALERTA_TARDIO`

↓

`AMPLIFICA DURACAO`

---

# Invariante de Causalidade Não Linear

OPS deverá permitir que múltiplos caminhos interajam na produção do impacto.

---

# Fatores Protetores no Grafo

Nem toda relação causal aumenta risco.

Algumas reduzem consequência.

---

# Exemplo

`CIRCUIT_BREAKER`

↓

`LIMITA_PROPAGACAO`

---

# Invariante de Causalidade com Proteções

A análise deverá representar mecanismos que interromperam ou reduziram propagação.

---

# Análise Temporal

A ordem dos acontecimentos poderá revelar relações importantes.

---

# Perguntas Temporais

> O que aconteceu antes do primeiro sintoma?

> O que mudou imediatamente antes?

> Qual condição já existia?

> Quando o impacto começou?

> Quando cada Dependência degradou?

---

# Invariante de Ordem Temporal

Uma causa deverá ser temporalmente compatível com o efeito que pretende explicar.

---

# Correlação Temporal

Se dois Eventos acontecem próximos...

isso pode fortalecer uma hipótese.

Mas não é prova suficiente.

---

# Invariante de Proximidade Temporal ≠ Causalidade

OPS deverá combinar temporalidade com outras Evidências.

---

# Timeline Comparativa

Múltiplos Incidentes poderão ser alinhados temporalmente.

---

# Exemplo

`I-101`

`T+00 DEPLOY`

`T+08 LATENCIA`

`T+11 TIMEOUT`

`T+15 INCIDENTE`

---

`I-118`

`T+00 DEPLOY`

`T+07 LATENCIA`

`T+10 TIMEOUT`

`T+14 INCIDENTE`

---

# Padrão Temporal

A repetição da sequência poderá fortalecer uma hipótese estrutural.

---

# Invariante de Padrão Temporal Recorrente

OPS deverá poder comparar Incidentes pela forma como evoluem...

Não apenas pelos sintomas finais.

---

# Sequence Signature

Um Problema poderá possuir assinatura sequencial.

Exemplo:

`MUDANCA`

↓

`AUMENTO_DE_MEMORIA`

↓

`GC_PRESSURE`

↓

`LATENCIA`

↓

`TIMEOUT`

---

# Invariante de Assinatura Temporal

A ordem dos sintomas poderá fazer parte da identidade operacional de um Known Error.

---

# Análise de Mudanças

Mudanças são candidatas frequentes durante investigação.

Mas:

> aconteceu depois do deploy

não significa automaticamente:

> foi causado pelo deploy.

---

# Change Correlation

OPS poderá correlacionar:

- deploys;
- configuração;
- feature flags;
- infraestrutura;
- permissões;
- versões;
- políticas.

---

# Janela de Mudança

A investigação poderá observar Mudanças realizadas dentro de determinado período antes da ocorrência.

---

# Invariante de Janela Contextual

A janela deverá considerar comportamento do sistema.

Alguns efeitos são imediatos.

Outros aparecem horas ou dias depois.

---

# Mudança Direta

Uma Mudança pode alterar exatamente o componente afetado.

---

# Mudança Indireta

Uma Mudança em Serviço A pode aumentar carga em Serviço B...

que então degrada Serviço C.

---

# Invariante de Propagação de Mudança

A investigação não deverá limitar correlação apenas ao componente onde o sintoma apareceu.

---

# Mudança Ausente

Se o mesmo Problema ocorreu sem determinada Mudança...

isso enfraquece a hipótese de causalidade exclusiva.

---

# Invariante de Evidência Contraditória

OPS deverá procurar ocorrências que desafiem correlações aparentemente óbvias.

---

# Rollback como Experimento Causal

Quando seguro...

rollback poderá produzir Evidência.

---

# Exemplo

`DEPLOY`

↓

erro aumenta.

`ROLLBACK`

↓

erro diminui.

Isso fortalece a hipótese.

---

# Limite

Ainda poderão existir variáveis simultâneas.

---

# Invariante de Rollback ≠ Prova Absoluta

A reversão bem-sucedida deverá aumentar confiança...

Sem obrigatoriamente encerrar investigação.

---

# Análise de Dependências

Problemas frequentemente atravessam fronteiras de Serviço.

---

# Dependency Graph

OPS poderá utilizar o Grafo de Dependências para perguntar:

> Quais componentes podem produzir esse sintoma?

---

# Upstream

Uma Dependência anterior poderá gerar falha observada localmente.

---

# Downstream

Uma falha local poderá produzir impacto em múltiplos consumidores.

---

# Invariante de Investigação Topológica

A investigação deverá considerar posição do componente dentro do sistema...

Não apenas seu Estado isolado.

---

# Dependência Compartilhada

Incidentes aparentemente independentes poderão possuir um ponto comum.

---

# Exemplo

`SERVICO_A`

`SERVICO_B`

`SERVICO_C`

↓

todos dependem de:

`IDENTIDADE_X`

---

# Invariante de Common Dependency

OPS deverá poder detectar Dependências compartilhadas como candidatas a Problema sistêmico.

---

# Dependência Transitiva

A relação poderá não ser direta.

---

# Exemplo

`A → B → C → PROVIDER_X`

A equipe de A talvez nem saiba inicialmente que depende do Provider X.

---

# Invariante de Dependência Transitiva

A investigação deverá poder atravessar múltiplos níveis do Grafo quando necessário.

---

# Blast Radius

O **Blast Radius** representa o alcance potencial ou real de uma falha.

---

# Perguntas

> Quantos Serviços podem ser afetados?

> Quantas Capacidades?

> Quantas Missões?

> Quantas organizações?

---

# Invariante de Blast Radius como Propriedade Estrutural

Um Problema deverá poder ser priorizado pelo impacto potencial...

Mesmo quando o último Incidente teve alcance pequeno.

---

# Fragilidade Oculta

Um Incidente pode ter sido pequeno apenas porque ocorreu em período de baixa carga.

---

# Invariante de Impacto Observado ≠ Impacto Potencial

Problem Management deverá considerar condições futuras plausíveis.

---

# Fatores Arquiteturais

A investigação poderá identificar fatores como:

- Single Point of Failure;
- acoplamento excessivo;
- ausência de isolamento;
- compartilhamento de recursos;
- dependência circular;
- baixa margem;
- recuperação complexa.

---

# Invariante de Arquitetura como Participante Causal

Arquitetura não deverá ser tratada apenas como cenário passivo.

Ela influencia como falhas surgem e se propagam.

---

# Single Point of Failure

Um componente pode funcionar perfeitamente durante anos...

e ainda representar Problema estrutural.

---

# Invariante de Risco sem Falha Prévia

A ausência de histórico negativo não elimina risco arquitetural conhecido.

---

# Coupling

Acoplamento poderá transformar falha local em impacto sistêmico.

---

# Isolation Boundary

Fronteiras de isolamento poderão limitar propagação.

---

# Invariante de Isolamento como Controle de Risco

Problem Management deverá considerar não apenas como impedir falha...

Mas como impedir que uma falha inevitável se torne sistêmica.

---

# Fatores Humanos

Pessoas fazem parte do sistema operacional.

---

# Fator Humano não é Sinônimo de Erro Humano

A análise poderá considerar:

- carga cognitiva;
- fadiga;
- treinamento;
- interface;
- informação disponível;
- pressão temporal;
- ambiguidade;
- handoff.

---

# Exemplo

Operador selecionou região incorreta.

Perguntas úteis:

> As regiões possuíam nomes visualmente semelhantes?

> A interface mostrava impacto?

> Existia confirmação?

> O Runbook era claro?

---

# Invariante de Contexto Humano

A investigação deverá compreender as condições nas quais decisões humanas ocorreram.

---

# Human Error

A expressão poderá descrever o evento proximal.

Mas raramente deverá encerrar a investigação.

---

# Invariante de Erro Humano como Início da Pergunta

Quando a conclusão for:

> erro humano,

OPS deverá perguntar:

> quais propriedades do sistema permitiram que esse erro produzisse consequência?

---

# Automação e Fator Humano

Automação pode reduzir erro...

ou criar novos modos de falha.

---

# Automation Bias

Uma pessoa poderá confiar excessivamente em recomendação automatizada.

---

# Invariante de Autoridade Cognitiva

A interface deverá evitar apresentar inferências automatizadas com aparência de certeza maior do que possuem.

---

# Fatores Organizacionais

Problemas também podem surgir de estruturas institucionais.

---

# Exemplos

- ownership fragmentado;
- incentivos conflitantes;
- ausência de manutenção;
- prioridades concorrentes;
- falta de capacidade;
- dependência de conhecimento individual.

---

# Invariante de Organização como Parte do Sistema

Problem Management deverá poder reconhecer condições organizacionais relevantes sem transformar análise em julgamento genérico de pessoas.

---

# Ownership Fragmentado

Uma Dependência crítica pode atravessar três equipes...

sem Owner sistêmico.

---

# Invariante de Lacuna de Ownership

A ausência de responsabilidade estrutural poderá ser tratada como fator contribuinte.

---

# Pressão de Entrega

Uma organização poderá continuamente adiar trabalho de Resiliência.

---

# Invariante de Incentivo Causal

Quando prioridades institucionais contribuem para risco...

essa relação deverá poder ser registrada.

---

# Condições Latentes

Uma **Condição Latente** existe antes da ocorrência...

mas permanece sem produzir impacto até combinação específica.

---

# Exemplos

- backup inválido;
- permissão excessiva;
- failover não testado;
- limite inadequado;
- certificado sem renovação automática.

---

# Invariante de Latência Estrutural

Problem Management deverá buscar fragilidades que permanecem silenciosas em operação normal.

---

# Swiss Cheese Model

Quando útil...

OPS poderá interpretar falha como alinhamento de múltiplas proteções incompletas.

---

# Exemplo

`ERRO_DE_CONFIGURACAO`

atravessa:

`CODE_REVIEW`

↓

`TESTE`

↓

`CANARY`

↓

`MONITORAMENTO`

↓

produz impacto.

---

# Invariante de Defesa em Profundidade

A investigação deverá perguntar não apenas:

> O que falhou?

Mas:

> Quais barreiras deveriam ter impedido ou limitado essa falha?

---

# Controle Preventivo

Busca impedir ocorrência.

---

# Controle Detectivo

Busca perceber cedo.

---

# Controle Mitigador

Busca reduzir consequência.

---

# Controle de Recuperação

Busca restaurar rapidamente.

---

# Invariante de Camadas de Controle

A robustez não deverá depender de uma única barreira perfeita.

---

# Falha de Controle

Um Problem Record poderá relacionar controles que:

- não existiam;
- falharam;
- estavam desabilitados;
- foram insuficientes.

---

# Controle que Funcionou

Também deverá registrar proteções eficazes.

---

# Invariante de Análise de Barreiras

Compreender quais controles funcionaram poderá ser tão importante quanto compreender quais falharam.

---

# Causalidade Probabilística

Algumas condições não produzem falha sempre.

Elas apenas aumentam probabilidade.

---

# Exemplo

Alta carga não causa necessariamente indisponibilidade.

Mas aumenta probabilidade quando combinada com baixa margem.

---

# Invariante de Causalidade Probabilística

OPS deverá poder representar relações que aumentam risco sem determinar resultado em todas as ocorrências.

---

# Probabilidade Condicional

Conceitualmente:

`P(FALHA | CONDICAO_X)`

pode ser maior do que:

`P(FALHA)`

---

# Limite Estatístico

Dados operacionais podem ser escassos.

---

# Invariante de Humildade Estatística

A Plataforma não deverá apresentar precisão probabilística não sustentada por amostra adequada.

---

# Força de Evidência

Evidências poderão possuir pesos diferentes.

---

# Evidência Fraca

Exemplo:

> A Mudança ocorreu antes da falha.

---

# Evidência Moderada

> A mesma sequência ocorreu em quatro Incidentes.

---

# Evidência Forte

> A falha foi reproduzida controladamente e desapareceu quando a condição foi removida.

---

# Invariante de Evidência Graduada

A investigação deverá poder representar diferentes níveis de sustentação.

---

# Confiança Causal

Uma hipótese poderá possuir confiança:

`BAIXA`

`MEDIA`

`ALTA`

ou outra escala governada.

---

# Invariante de Confiança Explicável

Quando uma confiança for apresentada...

deverá ser possível compreender quais Evidências a sustentam.

---

# Confiança não é Verdade

`CONFIANCA = ALTA`

não significa:

`FATO ABSOLUTO`

---

# Invariante de Revisabilidade Causal

Conclusões deverão poder ser revisadas diante de nova Evidência.

---

# Teste de Hipótese

Uma investigação deverá perguntar:

> Que observação aumentaria nossa confiança?

> Que observação reduziria nossa confiança?

---

# Invariante de Hipótese Testável

Quando possível...

hipóteses deverão produzir previsões observáveis.

---

# Exemplo

Hipótese:

> O vazamento ocorre apenas na versão 8.4.

Previsão:

> Versão 8.3 sob mesma carga não deverá apresentar crescimento equivalente.

---

# Experimento

Uma equipe poderá criar teste controlado.

---

# Variável

Idealmente...

alterar uma condição relevante por vez.

---

# Invariante de Experimento Seguro

O valor da investigação não deverá justificar risco operacional desproporcional.

---

# Ambiente de Reprodução

Poderá utilizar:

- desenvolvimento;
- teste;
- staging;
- laboratório;
- simulação.

---

# Reprodução Parcial

Mesmo quando o Incidente completo não pode ser reproduzido...

um mecanismo específico poderá ser.

---

# Invariante de Reprodução Graduada

A ausência de reprodução integral não deverá invalidar automaticamente outras Evidências.

---

# Teste em Produção

Algumas hipóteses somente podem ser avaliadas em ambiente real.

---

# Invariante de Produção Governada

Experimentos em produção deverão respeitar:

- risco;
- autoridade;
- observabilidade;
- reversibilidade;
- blast radius.

---

# Canary Investigation

Uma alteração poderá ser aplicada a pequena parcela para testar hipótese.

---

# Invariante de Investigação Progressiva

Quando possível...

OPS deverá favorecer experimentação com exposição limitada.

---

# Simulação

Algumas condições poderão ser simuladas.

---

# Exemplos

- perda de região;
- indisponibilidade de Provider;
- saturação;
- latência;
- falha de Dependência.

---

# Invariante de Simulação como Evidência

Simulações poderão fortalecer ou enfraquecer teorias...

Mas deverão permanecer distinguíveis de ocorrências reais.

---

# Chaos Engineering

Técnicas de injeção controlada de falhas poderão revelar Problemas antes de Incidentes.

---

# Invariante de Falha Deliberada Governada

Chaos Engineering deverá possuir:

- hipótese;
- escopo;
- limites;
- abort criteria;
- observabilidade;
- autoridade.

---

# Investigação Segura

A busca por conhecimento não deverá comprometer a operação.

---

# Risco da Investigação

Ações investigativas podem:

- aumentar carga;
- destruir Estado;
- alterar comportamento;
- apagar Evidência;
- provocar nova falha.

---

# Invariante de Investigação como Mudança Operacional

Investigações capazes de alterar significativamente o sistema deverão ser tratadas com controles proporcionais.

---

# Preservação de Evidências

Antes de ações destrutivas...

poderá ser necessário preservar:

- logs;
- snapshots;
- memória;
- dumps;
- traces;
- configuração;
- topologia;
- versões.

---

# Invariante de Evidência Antes da Mutação

Quando a investigação depender de Estado volátil...

OPS deverá considerar preservação antes de modificar o ambiente.

---

# Proveniência da Evidência

Toda Evidência relevante deverá poder registrar:

- origem;
- momento;
- coletor;
- método;
- contexto.

---

# Invariante de Evidência Rastreável

Conclusões importantes deverão poder ser relacionadas às Evidências utilizadas.

---

# Evidência Derivada

Um Agente poderá produzir análise a partir de dados brutos.

---

# Exemplo

> 92% das ocorrências de timeout foram precedidas por aumento de conexões.

Isso é Evidência derivada.

---

# Invariante de Derivação Transparente

A Plataforma deverá permitir chegar da síntese aos dados que a sustentam quando autorizado.

---

# Known Error Lifecycle

Um Problema poderá evoluir para Known Error quando comportamento estiver suficientemente compreendido.

---

# Estado Conceitual

`PROBLEMA`

↓

`INVESTIGACAO`

↓

`COMPORTAMENTO_CONHECIDO`

↓

`KNOWN_ERROR`

---

# Critérios de Known Error

Poderão incluir:

- sintomas reconhecíveis;
- escopo conhecido;
- causa conhecida ou mecanismo suficientemente compreendido;
- Workaround conhecido;
- resposta operacional conhecida.

---

# Invariante de Known Error Útil

O objetivo do Known Error deverá ser melhorar reconhecimento e resposta futura.

---

# Known Error sem Root Cause Completa

Em alguns casos...

poderá existir conhecimento suficiente para resposta previsível...

mesmo sem explicação causal total.

---

# Invariante de Conhecimento Operacional Suficiente

Known Error deverá refletir capacidade prática de reconhecimento e tratamento...

Não obrigatoriamente compreensão científica completa.

---

# Workaround

Um Workaround poderá reduzir impacto enquanto o Problema permanece aberto.

---

# Propriedades

Poderá possuir:

- descrição;
- condições de uso;
- risco;
- passos;
- validação;
- autoridade;
- limitações.

---

# Invariante de Workaround Governado

Um Workaround não deverá ser apenas conhecimento informal na memória de uma pessoa.

---

# Workaround Validado

Sempre que possível...

deverá existir Evidência de que funciona.

---

# Workaround Não Validado

Poderá existir como:

`EXPERIMENTAL`

---

# Invariante de Confiança do Workaround

OPS deverá distinguir procedimento comprovado de tentativa plausível.

---

# Workaround Perigoso

Alguns contornos podem restaurar função...

mas aumentar outro risco.

---

# Exemplo

Desabilitar validação para permitir processamento.

---

# Invariante de Risco do Workaround

A disponibilidade de um contorno não deverá ocultar seu custo ou risco.

---

# Workaround e Runbook

Um Known Error poderá apontar para Runbook específico.

---

# Exemplo

`KNOWN_ERROR KE-018`

↓

`RUNBOOK RB-044`

> Reinício coordenado do componente X.

---

# Invariante Known Error ↔ Runbook

Conhecimento de Problema deverá poder transformar-se em resposta operacional executável.

---

# Eva Durante Novo Incidente

Quando surgir um novo Incidente...

Eva poderá correlacionar sintomas com Known Errors.

---

# Exemplo

> Os sintomas atuais são semelhantes ao Known Error KE-018.  
> Há correspondência em três sinais, mas a versão atual do componente é diferente.

---

# Invariante de Similaridade Explicada

Eva deverá indicar:

- por que encontrou similaridade;
- quais diferenças existem;
- qual o nível de confiança.

---

# Sugestão de Workaround

Eva poderá dizer:

> Existe um Workaround validado para KE-018.

Mas deverá preservar:

- requisitos;
- risco;
- autoridade.

---

# Invariante de Recomendação Governada

A existência de precedente não deverá autorizar automaticamente execução.

---

# Agente e Known Error

Agentes poderão monitorar Incidentes novos e sugerir relações.

---

# Exemplo

`INCIDENTE I-208`

↓

`POSSIVEL_MATCH = KE-018`

---

# Confirmação

Dependendo da Governança...

a relação poderá exigir confirmação humana.

---

# Invariante de Associação Revisável

Uma relação entre Incidente e Known Error deverá poder ser corrigida posteriormente.

---

# Match Incorreto

Se um Incidente inicialmente associado revelar causa diferente...

o vínculo deverá poder ser removido sem apagar histórico da hipótese.

---

# Invariante de História da Investigação

OPS deverá preservar como a compreensão evoluiu.

---

# Problema como Memória entre Incidentes

Existe uma propriedade central.

O Incidente termina.

O Problema permanece.

---

# Exemplo

`INCIDENTE 1`

↓

aprendizado parcial

↓

`PROBLEMA P-10`

↓

`INCIDENTE 2`

↓

nova Evidência

↓

`PROBLEMA P-10 ATUALIZADO`

↓

`INCIDENTE 3`

↓

causa confirmada

---

# Invariante de Memória Causal Persistente

Problem Management deverá conectar aprendizado através do tempo.

---

# Investigação Incremental

Não será necessário descobrir tudo em uma única ocorrência.

Cada novo Evento poderá aumentar compreensão.

---

# Invariante de Conhecimento Acumulativo

A investigação deverá poder evoluir por múltiplos Incidentes sem perder Evidências anteriores.

---

# Problema e Resposta Futura

Mesmo antes da resolução estrutural...

o conhecimento adquirido deverá reduzir:

- tempo de detecção;
- tempo de diagnóstico;
- tempo de mitigação;
- impacto.

---

# Invariante de Valor Antes da Correção

Problem Management deverá gerar valor operacional mesmo enquanto a correção definitiva ainda não existe.

---

# Próxima Dimensão

Com técnicas de análise causal, Fault Trees, Grafos Causais, análise temporal, Mudanças, Dependências, fatores humanos, organizacionais e arquiteturais, causalidade probabilística, força de Evidência, experimentação, preservação, Known Errors e Workarounds estabelecidos...

o próximo lote deverá aprofundar:

- tratamento estrutural;
- estratégias de correção;
- eliminação de causa;
- redução de probabilidade;
- redução de impacto;
- defesa em profundidade;
- ações corretivas;
- ações preventivas;
- ações detectivas;
- ações mitigadoras;
- priorização de ações;
- custo versus risco;
- aceitação de risco;
- dívida operacional;
- relação com Change Management;
- validação de correção;
- regressão;
- recorrência pós-correção;
- critérios de resolução;
- critérios de encerramento;
- revisão periódica de Problemas;
- backlog;
- aging;
- tendência;
- governança de Problem Management.

---

# Tratamento Estrutural de Problemas

Compreender um Problema é apenas parte do trabalho.

A etapa seguinte deverá responder:

> O que precisa mudar para reduzir de forma real a probabilidade, o impacto ou a recorrência dessa condição?

O tratamento estrutural deverá buscar transformar conhecimento causal em mudança operacional sustentável.

---

# Estratégias de Tratamento

Um Problema poderá ser tratado por diferentes estratégias.

Entre elas:

- eliminar causa;
- reduzir probabilidade;
- reduzir impacto;
- aumentar detectabilidade;
- aumentar capacidade de recuperação;
- adicionar isolamento;
- aumentar margem;
- melhorar procedimento;
- aceitar risco conscientemente.

---

# Invariante de Tratamento Multidimensional

Problem Management não deverá pressupor que toda solução precisa eliminar completamente a causa.

Em alguns casos...

reduzir impacto ou probabilidade poderá ser a estratégia mais racional.

---

# Eliminação de Causa

Representa remover a condição que participa diretamente da produção do Problema.

---

# Exemplo

Problema:

> Vazamento de memória em componente X.

Tratamento:

> Corrigir o mecanismo de retenção de objetos.

---

# Invariante de Eliminação Evidenciada

A causa deverá ser considerada eliminada apenas quando existir Evidência suficiente de que a condição deixou de produzir o comportamento esperado.

---

# Redução de Probabilidade

Quando eliminação completa não é possível...

poderá ser viável reduzir chance de ocorrência.

---

# Exemplos

- aumentar margem;
- reduzir carga;
- melhorar validação;
- adicionar canary;
- limitar concorrência;
- alterar timeout;
- distribuir tráfego.

---

# Invariante de Probabilidade Reduzida

Uma ação preventiva deverá possuir relação compreensível com o mecanismo de risco que pretende reduzir.

---

# Redução de Impacto

Algumas falhas poderão continuar possíveis...

Mas sua consequência poderá ser drasticamente limitada.

---

# Exemplos

- circuit breaker;
- isolamento;
- fallback;
- redundância;
- degradação controlada;
- load shedding.

---

# Invariante de Impacto Controlado

Problem Management deverá reconhecer redução de consequência como melhoria estrutural válida.

---

# Aumento de Detectabilidade

Uma condição pode não ser fácil de eliminar...

Mas pode ser percebida muito antes.

---

# Exemplos

- novo Sinal;
- healthcheck funcional;
- Alerta antecipatório;
- detecção de tendência;
- correlação de Eventos.

---

# Invariante de Detecção como Controle

Detectar mais cedo poderá reduzir duração e impacto mesmo sem alterar causalidade primária.

---

# Aumento de Recuperabilidade

Uma organização poderá reduzir risco melhorando capacidade de recuperação.

---

# Exemplos

- failover;
- restore testado;
- Runbook;
- snapshot;
- redundância;
- Automação de recuperação.

---

# Invariante de Recuperabilidade como Tratamento

Problem Management deverá considerar capacidade de recuperação como parte da redução de risco.

---

# Defesa em Profundidade

Um Problema poderá ser tratado por múltiplas camadas.

---

# Exemplo

Problema:

> Mudança incorreta pode provocar indisponibilidade ampla.

Controles:

`VALIDACAO`

+

`CANARY`

+

`AUTO_ROLLBACK`

+

`ALERTA`

+

`FAILOVER`

---

# Invariante de Defesa em Profundidade

OPS deverá evitar depender de um único controle perfeito quando múltiplas camadas puderem reduzir risco sistêmico.

---

# Controle Preventivo

Busca impedir ocorrência.

---

# Controle Detectivo

Busca perceber cedo.

---

# Controle Mitigador

Busca reduzir consequência.

---

# Controle de Recuperação

Busca restaurar operação.

---

# Invariante de Cobertura de Controles

Uma estratégia madura poderá combinar diferentes tipos de controle.

---

# Ação Corretiva

Uma **Corrective Action** busca alterar a condição estrutural diretamente relacionada ao Problema.

---

# Exemplo

`CORRIGIR_MEMORY_LEAK`

---

# Ação Preventiva

Busca impedir condições semelhantes futuras.

---

# Exemplo

`ADICIONAR_TESTE_DE_LONGA_DURACAO`

---

# Ação Detectiva

Busca aumentar visibilidade.

---

# Exemplo

`MONITORAR_HEAP_GROWTH`

---

# Ação Mitigadora

Busca reduzir impacto.

---

# Exemplo

`ADICIONAR_CIRCUIT_BREAKER`

---

# Ação de Recuperação

Busca reduzir tempo de restauração.

---

# Exemplo

`AUTOMATIZAR_FAILOVER`

---

# Invariante de Tipo de Ação Explícito

OPS deverá permitir compreender qual dimensão de risco cada ação pretende alterar.

---

# Action Item Estrutural

Uma ação de tratamento poderá possuir:

- identidade;
- descrição;
- Owner;
- prioridade;
- Estado;
- prazo;
- risco tratado;
- Evidências;
- Mudança relacionada;
- validação esperada.

---

# Invariante de Ação com Resultado Esperado

Uma ação estrutural deverá declarar, quando possível:

> O que esperamos que mude depois dela?

---

# Exemplo

Ação:

`ADICIONAR_ISOLAMENTO_POR_CONSUMIDOR`

Resultado esperado:

> Saturação de um consumidor não deverá comprometer os demais.

---

# Invariante de Melhoria Testável

Ações deverão favorecer critérios que permitam verificar se o risco realmente foi reduzido.

---

# Priorização de Ações

Um Problema poderá gerar muitas ações possíveis.

Nem todas deverão ser executadas imediatamente.

---

# Critérios de Prioridade

Poderão incluir:

- risco reduzido;
- Criticidade;
- impacto potencial;
- recorrência;
- custo;
- esforço;
- reversibilidade;
- alcance;
- dependências;
- Missões futuras.

---

# Invariante de Priorização por Risco

Ações não deverão ser priorizadas apenas por facilidade de implementação.

---

# Quick Win

Uma ação de baixo custo e alto benefício poderá ser priorizada rapidamente.

---

# Ação Estrutural Profunda

Pode exigir:

- redesign;
- migração;
- mudança arquitetural;
- substituição de Provider.

---

# Invariante de Horizonte Múltiplo

Um Problema poderá possuir ações:

- imediatas;
- intermediárias;
- estruturais de longo prazo.

---

# Plano de Tratamento

Conceitualmente:

`CURTO PRAZO`

> reduzir risco agora.

`MEDIO PRAZO`

> remover fragilidade operacional.

`LONGO PRAZO`

> alterar arquitetura estrutural.

---

# Invariante de Tratamento em Camadas Temporais

A ausência de correção definitiva imediata não deverá impedir mitigação progressiva.

---

# Custo versus Risco

Toda ação possui custo.

---

# Custo de Correção

Pode incluir:

- desenvolvimento;
- tempo;
- indisponibilidade planejada;
- migração;
- treinamento;
- complexidade.

---

# Custo de Não Corrigir

Pode incluir:

- recorrência;
- impacto futuro;
- fadiga;
- perda de confiança;
- risco missional;
- custo financeiro.

---

# Invariante de Decisão Econômica Estrutural

Problem Management deverá permitir comparar custo de intervenção com exposição de risco.

---

# Risco Residual

Após tratamento...

algum risco poderá permanecer.

---

# Exemplo

Antes:

`RISK = ALTO`

Depois de redundância adicional:

`RISK = BAIXO`

A causa original pode não ter sido eliminada completamente.

---

# Invariante de Risco Residual Explícito

Resolver um Problema não deverá implicar automaticamente risco zero.

---

# Aceitação de Risco

Uma organização poderá decidir conscientemente manter determinada exposição.

---

# Motivos

Podem incluir:

- custo desproporcional;
- baixa probabilidade;
- baixa consequência;
- Serviço em descontinuação;
- mitigação suficiente.

---

# Invariante de Aceitação Explícita

Risco aceito deverá possuir:

- autoridade;
- justificativa;
- escopo;
- momento;
- condição de revisão.

---

# Aceitação não é Esquecimento

O Problem Record poderá permanecer:

`RISK_ACCEPTED`

---

# Invariante de Risco Revisável

Mudanças de contexto poderão exigir reavaliar uma aceitação anterior.

---

# Exemplo

Uma fragilidade antes aceitável...

pode deixar de ser aceitável quando uma Missão crítica passa a depender da Capacidade.

---

# Relação com CCM

CCM poderá alterar contexto de risco.

---

# Invariante de Reavaliação Missional

Mudança de prioridade institucional deverá poder reabrir decisões de risco estrutural.

---

# Dívida Operacional

Problemas conhecidos e não tratados formam uma forma de dívida operacional.

---

# Operational Debt

Poderá incluir:

- workaround permanente;
- dependência frágil;
- manualidade excessiva;
- Alerta ruim;
- recuperação não testada;
- arquitetura provisória.

---

# Invariante de Dívida Visível

Fragilidades conhecidas não deverão desaparecer apenas porque não estão produzindo Incidente neste momento.

---

# Dívida com Juros

Algumas fragilidades acumulam custo.

---

# Exemplo

Workaround manual exige 2 horas por semana.

Com o tempo...

o custo operacional pode superar o custo de correção.

---

# Invariante de Custo Acumulado

OPS deverá poder considerar esforço recorrente produzido por dívida estrutural.

---

# Debt Register

Um backlog de Problemas poderá funcionar como registro de dívida operacional.

---

# Invariante de Backlog Priorizável

A existência de muitos Problemas não deverá impedir compreensão dos riscos mais relevantes.

---

# Problem Backlog

O backlog poderá ser organizado por:

- prioridade;
- risco;
- aging;
- recorrência;
- Capacidade;
- Missão;
- Owner.

---

# Invariante de Backlog não Cronológico

Problemas antigos não deverão automaticamente aparecer acima de Problemas mais críticos apenas por idade.

---

# Aging do Problema

A idade poderá indicar exposição prolongada.

---

# Aging sem Movimento

Um Problema crítico aberto por longo período...

sem mudança de Estado...

pode representar risco de Governança.

---

# Invariante de Estagnação Estrutural

OPS deverá poder identificar Problemas relevantes sem progresso.

---

# Escalonamento de Problema

Um Problem Record poderá escalar quando:

- risco cresce;
- recorrência aumenta;
- ação está bloqueada;
- prazo crítico se aproxima;
- Missão futura depende dele;
- Owner não responde.

---

# Invariante de Escalonamento por Exposição

Problem Management deverá possuir mecanismo para impedir que fragilidades críticas permaneçam indefinidamente sem decisão.

---

# Relação com Change Management

A maioria das correções estruturais exige Mudança.

---

# Problema → Mudança

Conceitualmente:

`PROBLEMA`

↓

`TRATAMENTO DEFINIDO`

↓

`CHANGE`

↓

`IMPLEMENTACAO`

↓

`VALIDACAO`

---

# Invariante Problem ↔ Change

Problem Management deverá definir o que precisa mudar.

Change Management deverá governar como a mudança será realizada.

---

# Problema não Executa Mudança

O Problem Record não deverá substituir:

- planejamento;
- aprovação;
- rollout;
- rollback;
- validação operacional.

---

# Invariante de Separação de Responsabilidades

Investigação causal e execução de Mudança deverão permanecer conectadas...

Mas não fundidas.

---

# Mudança Emergencial

Durante Incidente...

uma correção estrutural poderá ser aplicada rapidamente.

---

# Invariante de Emergência não Apaga Problema

A correção emergencial deverá poder retornar ao Problem Record para validação posterior.

---

# Mudança Relacionada

Um Problema poderá possuir várias Mudanças.

---

# Exemplo

`P-010`

↓

`CHG-200 — ADICIONAR ALERTA`

`CHG-205 — AUMENTAR REDUNDANCIA`

`CHG-220 — REDESIGN DE CONEXOES`

---

# Invariante de Tratamento Multimudança

A resolução estrutural poderá exigir várias intervenções ao longo do tempo.

---

# Estado da Mudança ≠ Estado do Problema

Uma Mudança concluída não significa automaticamente Problema resolvido.

---

# Invariante de Independência de Lifecycle

Problem Record deverá permanecer aberto até existir Evidência de redução suficiente do risco.

---

# Validação da Correção

Depois da implementação...

a organização deverá perguntar:

> A condição realmente foi eliminada ou reduzida?

---

# Validação Técnica

Pode incluir:

- teste;
- reprodução;
- carga;
- observação de métrica.

---

# Validação Funcional

Pode incluir:

- jornada;
- transação;
- capacidade.

---

# Validação de Resiliência

Pode incluir:

- failover;
- chaos test;
- perda simulada;
- recuperação.

---

# Invariante de Validação Multicamadas

A correção deverá ser validada na dimensão compatível com o Problema.

---

# Critério de Sucesso

Uma ação poderá declarar previamente:

`EXPECTED_OUTCOME`

---

# Exemplo

Antes:

`ERROR_RATE = 8%`

Sob cenário X.

Depois da correção:

`ERROR_RATE < 1%`

sob mesmo cenário.

---

# Invariante de Critério Prévio

Sempre que possível...

o sucesso deverá ser definido antes da validação.

---

# Regression Test

Uma correção poderá ganhar teste que previne retorno.

---

# Invariante de Aprendizado Automatizado

Quando viável...

Problemas resolvidos deverão produzir controles que impedem ou detectam regressão automaticamente.

---

# Teste Permanente

Um cenário descoberto durante Incidente poderá virar:

- unit test;
- integration test;
- load test;
- chaos test;
- healthcheck.

---

# Invariante de Memória Executável

O aprendizado poderá ser incorporado ao sistema como mecanismo automático de validação.

---

# Recorrência Pós-Correção

Se o padrão retorna...

existem algumas possibilidades.

---

# Correção Incompleta

A causa foi parcialmente tratada.

---

# Nova Causa

O mesmo sintoma possui outro mecanismo.

---

# Regressão

A fragilidade eliminada foi reintroduzida.

---

# Diagnóstico Incorreto

A teoria causal estava errada.

---

# Invariante de Recorrência como Feedback

A recorrência deverá reabrir investigação sem proteger conclusões anteriores de revisão.

---

# Problem Reopen

Um Problema resolvido poderá voltar para:

`EM_INVESTIGACAO`

ou:

`EM_TRATAMENTO`

---

# Invariante de História Preservada na Reabertura

A reabertura deverá manter:

- causa anterior;
- correção anterior;
- Evidências;
- validações;
- nova ocorrência.

---

# Regressão

Uma **Regression** representa retorno de comportamento anteriormente corrigido.

---

# Invariante de Regressão Distinguível

OPS deverá poder distinguir regressão de recorrência por mecanismo diferente.

---

# Critérios de Resolução do Problema

Um Problem Record poderá ser considerado resolvido quando:

- condição estrutural foi eliminada;
- ou risco foi reduzido ao nível aceito;
- ações necessárias foram implementadas;
- Evidências confirmam resultado;
- recorrência esperada foi controlada.

---

# Invariante de Resolução por Risco

Resolver não precisa significar:

> nunca mais poderá existir falha.

Deverá significar:

> a condição foi tratada segundo critérios e risco residual aceito.

---

# Resolução por Eliminação

A causa foi removida.

---

# Resolução por Redução de Risco

A fragilidade permanece...

Mas exposição foi reduzida ao nível aceito.

---

# Resolução por Obsolescência

A condição tornou-se impossível ou irrelevante.

---

# Resolução por Aceitação

A organização decide formalmente aceitar risco.

---

# Invariante de Motivo de Resolução

O motivo deverá permanecer explícito.

---

# Encerramento do Problem Record

Depois de Resolvido...

o Problema poderá ser Encerrado quando:

- Evidências estão preservadas;
- decisão final está registrada;
- Known Error foi atualizado ou retirado;
- Workarounds foram revisados;
- ações residuais foram capturadas.

---

# Invariante de Encerramento sem Órfãos

O fechamento não deverá fazer desaparecer trabalho residual necessário.

---

# Known Error após Resolução

Um Known Error poderá deixar de ser aplicável.

---

# Estado

`RETIRED`

ou equivalente.

---

# Invariante de Conhecimento Desativado

Conhecimento obsoleto não deverá continuar sendo recomendado durante novos Incidentes.

---

# Workaround após Resolução

Um Workaround temporário poderá ser removido.

---

# Invariante de Remoção de Contingência

A resolução estrutural deverá incluir revisão de mecanismos temporários para evitar complexidade residual desnecessária.

---

# Problemas Nunca Resolvidos

Alguns Problem Records poderão permanecer abertos por longo período.

---

# Razões

Podem incluir:

- impossibilidade técnica;
- custo;
- dependência externa;
- legado;
- prioridade inferior.

---

# Invariante de Problema Long-Lived

Problemas de longa duração deverão possuir:

- risco conhecido;
- Owner;
- mitigação;
- revisão periódica.

---

# Revisão Periódica

Problemas ativos deverão poder ser revistos.

---

# Perguntas

> O risco mudou?

> Houve novas ocorrências?

> A prioridade ainda faz sentido?

> O Workaround continua válido?

> A solução planejada continua apropriada?

---

# Invariante de Revisão de Contexto

Problem Management deverá reconhecer que a realidade muda mesmo quando o Problem Record permanece igual.

---

# Tendência de Problemas

A organização poderá observar:

- número de Problemas;
- risco total;
- aging;
- recorrência;
- backlog;
- taxa de resolução.

---

# Invariante de Tendência com Significado

Métricas deverão ajudar a compreender exposição estrutural...

Não incentivar fechamento superficial de registros.

---

# Taxa de Problemas Resolvidos

Isoladamente...

pode ser enganosa.

---

# Goodhart em Problem Management

Se a equipe for medida apenas por:

> quantidade de Problemas fechados,

poderá surgir incentivo para:

- resolver Problemas pequenos;
- evitar registrar Problemas difíceis;
- aceitar risco silenciosamente.

---

# Invariante de Métrica sem Distorção

Problem Management deverá priorizar redução real de risco...

Não produção de números favoráveis.

---

# Risk Burn-Down

Uma métrica mais útil poderá observar:

> Quanto risco estrutural estamos reduzindo?

---

# Invariante de Risco sobre Contagem

Dez Problemas pequenos encerrados podem ser menos relevantes do que um único Problema crítico tratado.

---

# Recurrence Burn-Down

Também poderá observar:

> As ocorrências repetidas estão diminuindo?

---

# Invariante de Resultado Operacional

O sucesso de Problem Management deverá aparecer no comportamento futuro da operação.

---

# Governança de Problem Management

Problem Management possui impacto sobre:

- risco;
- arquitetura;
- investimento;
- prioridade;
- dívida.

Por isso...

deverá possuir Governança.

---

# Autoridade de Priorização

Dependendo da Criticidade...

poderá envolver:

- Owner;
- liderança técnica;
- OPS;
- CCM;
- Governança.

---

# Invariante de Autoridade Proporcional

Decisões sobre risco estrutural significativo deverão possuir autoridade compatível.

---

# Aceitação de Risco Elevado

Um Operador individual talvez não deva poder aceitar sozinho um risco institucional crítico.

---

# Invariante de Aceitação Governada

Quanto maior o risco residual...

maior deverá ser a autoridade necessária para aceitá-lo.

---

# Separação de Funções

Quando necessário...

quem propõe uma aceitação poderá ser diferente de quem aprova.

---

# Invariante de Revisão Independente

Decisões de alto impacto poderão exigir revisão adicional.

---

# Problem Review Board

Algumas organizações poderão utilizar fórum periódico para:

- priorizar;
- revisar;
- aceitar risco;
- desbloquear;
- acompanhar ações.

---

# Invariante de Governança sem Burocracia Obrigatória

A Engenharia Oficial deverá definir capacidades...

Não impor uma cerimônia específica a todas as organizações.

---

# Governança Federada

Problemas poderão atravessar organizações.

---

# Exemplo

Problema está em Provider A...

Mas risco principal existe para Organização B.

---

# Invariante de Problema Federado

Cada organização poderá manter seu próprio Problem Record...

Preservando correlação entre eles.

---

# Ownership Federado

A condição estrutural pode estar fora do controle direto da organização consumidora.

---

# Invariante de Risco Mesmo sem Controle

A ausência de autoridade sobre a causa não elimina responsabilidade de administrar exposição local.

---

# Exemplo

Provider não corrige falha.

A UNO poderá:

- adicionar redundância;
- criar fallback;
- reduzir dependência;
- aceitar risco.

---

# Invariante de Tratamento Local de Causa Externa

Problem Management deverá buscar reduzir risco mesmo quando a causa pertence a terceiro.

---

# Supplier Problem

Um fornecedor poderá possuir sua própria investigação.

---

# Evidência Externa

OPS poderá receber:

- RCA;
- timeline;
- fix;
- recomendação.

---

# Invariante de RCA Externo como Fonte

A conclusão de fornecedor deverá preservar Proveniência...

E poderá ser avaliada contra Evidências locais.

---

# Problema Interno Relacionado

Mesmo quando fornecedor possui causa...

a UNO poderá identificar Problema próprio:

> Dependência crítica sem alternativa.

---

# Invariante de Dupla Responsabilidade

A causa externa não deverá impedir análise de por que a Plataforma estava vulnerável àquela causa.

---

# Eva em Problem Management

Eva poderá permitir consultas naturais.

---

# Exemplos

> Quais Problemas críticos ainda estão abertos?

> Qual fragilidade mais gerou Incidentes este trimestre?

> Existe algum Known Error relacionado a esta Capacidade?

> Por que ainda não corrigimos o Problema P-018?

---

# Invariante de Explicabilidade Estrutural

Eva deverá conseguir navegar de:

`PROBLEMA`

para:

- Incidentes;
- Evidências;
- causa;
- ações;
- risco;
- decisão.

---

# Eva e Priorização

Poderá sintetizar:

> P-018 possui risco alto, três Incidentes em 30 dias e nenhuma correção estrutural em andamento.

---

# Invariante de Síntese sem Decisão Arbitrária

Eva poderá apoiar priorização...

Mas decisões institucionais deverão continuar respeitando autoridade.

---

# Agentes em Problem Management

Agentes poderão acompanhar backlog continuamente.

---

# Agente de Recorrência

Pode detectar novos Incidentes semelhantes.

---

# Agente de Aging

Pode identificar Problemas críticos estagnados.

---

# Agente de Evidência

Pode buscar novos dados que fortalecem ou enfraquecem hipótese.

---

# Agente de Validação

Pode verificar se correção produziu resultado esperado.

---

# Invariante de Agente como Guardião de Loop

Agentes poderão ajudar a impedir que Problemas sejam esquecidos após o fim do Incidente.

---

# Automação de Reabertura

Uma recorrência futura poderá reabrir Problem Record automaticamente quando critérios forem fortes.

---

# Invariante de Reabertura Governada

Automação deverá preservar confiança e permitir correção de associação.

---

# Modelo de Tratamento Estrutural

Conceitualmente:

`PROBLEMA`

↓

`RISCO`

↓

`HIPOTESE CAUSAL`

↓

`EVIDENCIA`

↓

`CAUSA / FATORES`

↓

`ESTRATEGIA`

↓

`ACOES`

↓

`MUDANCAS`

↓

`VALIDACAO`

↓

`RISCO RESIDUAL`

↓

`RESOLUCAO / ACEITACAO`

↓

`OBSERVACAO DE RECORRENCIA`

---

# Invariante de Loop Completo

Problem Management não deverá terminar na descoberta da causa...

Nem na implantação da correção.

Deverá chegar até validação do comportamento futuro.

---

# Próxima Dimensão

Com tratamento estrutural, defesa em profundidade, ações corretivas e preventivas, custo versus risco, dívida operacional, Change Management, validação, regressão, resolução e Governança estabelecidos...

o próximo lote deverá aprofundar:

- memória de Problemas;
- histórico causal;
- biblioteca de padrões;
- taxonomia de causas;
- padrões recorrentes;
- análise agregada;
- tendências sistêmicas;
- top Problems;
- concentração de risco;
- correlação entre Problemas;
- Problemas sistêmicos;
- Problemas de plataforma;
- risco transversal;
- aprendizado interorganizacional;
- feedback para Arquitetura;
- Observabilidade;
- Alertas;
- Runbooks;
- Capacity;
- Resiliência;
- CCM;
- agentes cognitivos;
- métricas de eficácia de Problem Management;
- maturidade institucional.

---

# Memória Estrutural de Problemas

Um Problema não deverá existir apenas enquanto alguém se lembra dele.

Sua investigação...

suas Evidências...

suas conclusões...

suas correções...

e suas recorrências...

deverão formar memória operacional persistente.

---

# Problema como Unidade de Memória

O Problem Record representa mais do que um item de backlog.

Ele poderá funcionar como ponto de convergência entre:

- Incidentes;
- Near Misses;
- Evidências;
- hipóteses;
- causas;
- fatores contribuintes;
- Known Errors;
- Workarounds;
- Mudanças;
- decisões;
- validações;
- recorrências.

---

# Invariante de Memória Estrutural

A compreensão acumulada sobre uma fragilidade deverá sobreviver aos Incidentes individuais que a revelaram.

---

# Histórico Causal

A compreensão causal poderá mudar ao longo do tempo.

---

# Exemplo

Momento 1:

`HIPOTESE = PROVIDER_X`

Momento 2:

`HIPOTESE = SATURACAO_LOCAL`

Momento 3:

`CAUSA_CONFIRMADA = POOL_COMPARTILHADO`

---

# Invariante de História Epistêmica

OPS deverá preservar como a compreensão evoluiu...

Não apenas a conclusão mais recente.

---

# Valor da História Causal

Ela permite responder:

> O que acreditávamos inicialmente?

> Quais Evidências mudaram nossa compreensão?

> Quais hipóteses foram descartadas?

> Por que a conclusão atual é considerada mais forte?

---

# Invariante de Conclusão Explicável

Uma causa conhecida deverá poder ser relacionada ao caminho investigativo que levou até ela.

---

# Versão da Conclusão Causal

Conclusões relevantes poderão possuir versão.

---

# Exemplo

`CAUSAL_MODEL_V1`

↓

`CAUSAL_MODEL_V2`

---

# Invariante de Causalidade Revisável

Nova Evidência deverá poder modificar o modelo causal sem apagar o conhecimento anterior.

---

# Biblioteca de Padrões

Problemas resolvidos e Known Errors poderão formar uma biblioteca de padrões operacionais.

---

# Pattern Library

Poderá conter padrões como:

- saturação;
- cascading failure;
- retry storm;
- thundering herd;
- memory leak;
- dependency amplification;
- split brain;
- resource starvation;
- configuration drift;
- silent failure.

---

# Invariante de Padrão como Conhecimento Reutilizável

A Plataforma deverá conseguir aprender uma estrutura de falha sem depender apenas do nome específico do Serviço onde ela ocorreu.

---

# Exemplo

Um retry storm observado em:

`SERVICO_A`

poderá ajudar investigação futura em:

`SERVICO_Z`

mesmo sem relação direta entre os dois.

---

# Invariante de Generalização Controlada

OPS deverá poder generalizar padrões...

Sem assumir que contextos diferentes possuem automaticamente a mesma causa.

---

# Taxonomia de Causas

Uma taxonomia poderá ajudar a compreender concentração de fragilidades.

---

# Categorias Possíveis

Poderão incluir:

- software;
- configuração;
- infraestrutura;
- capacidade;
- Dependência;
- arquitetura;
- processo;
- observabilidade;
- Automação;
- fator humano;
- fator organizacional;
- fornecedor;
- segurança;
- dados.

---

# Invariante de Taxonomia Não Redutiva

A classificação deverá auxiliar análise...

Sem obrigar um Problema complexo a possuir apenas uma categoria.

---

# Causa Primária e Fatores

Um Problema poderá possuir:

`CAUSA_PRIMARIA`

e múltiplos:

`FATORES_CONTRIBUINTES`

---

# Limite da Causa Primária

Nem todo Problema deverá possuir uma.

---

# Invariante de Taxonomia Compatível com Complexidade

A necessidade de produzir relatórios agregados não deverá simplificar artificialmente causalidade.

---

# Taxonomia Evolutiva

Novas categorias poderão surgir conforme a Plataforma aprende.

---

# Invariante de Vocabulário Adaptável

OPS deverá permitir evolução controlada da linguagem utilizada para descrever Problemas.

---

# Padrões Recorrentes

Uma organização poderá descobrir que muitos Problemas compartilham propriedades.

---

# Exemplo

`P-010`

`P-018`

`P-027`

`P-044`

Todos possuem:

`SHARED_RESOURCE_WITHOUT_ISOLATION`

---

# Meta-Problema

Quando múltiplos Problemas compartilham uma condição estrutural superior...

poderá existir um **Problema Sistêmico**.

---

# Exemplo

Problemas locais:

- saturação de banco;
- saturação de cache;
- saturação de fila.

Condição superior:

> A Plataforma não possui padrão consistente de isolamento e quotas entre workloads.

---

# Invariante de Problema Sistêmico

OPS deverá poder elevar a investigação acima do componente individual quando a Evidência indicar fragilidade transversal.

---

# Problema de Plataforma

Um Problema poderá afetar múltiplos produtos, Serviços ou organizações.

---

# Exemplos

- identidade;
- observabilidade;
- rede;
- plataforma de deploy;
- secrets;
- armazenamento;
- mensageria.

---

# Invariante de Escopo Transversal

Problemas compartilhados deverão poder possuir ownership e tratamento compatíveis com seu alcance.

---

# Problema Local

Afeta contexto restrito.

---

# Problema Sistêmico

Reflete propriedade repetida em múltiplos contextos.

---

# Invariante Local ↔ Sistêmico

OPS deverá permitir relacionar Problemas locais a Problemas estruturais superiores.

---

# Relação entre Problemas

Problem Records poderão possuir relações.

---

# Exemplos

`CAUSES`

`CONTRIBUTES_TO`

`DUPLICATES`

`RELATED_TO`

`BLOCKED_BY`

`SUPERSEDES`

`CHILD_OF`

---

# Invariante de Grafo de Problemas

O backlog não deverá ser limitado a uma lista plana quando relações estruturais forem relevantes.

---

# Problema Duplicado

Duas equipes poderão descobrir a mesma fragilidade independentemente.

---

# Merge de Problemas

Os registros poderão ser fundidos.

---

# Invariante de Merge com Proveniência

A consolidação não deverá apagar:

- origem;
- Evidências;
- Incidentes;
- decisões;
- ownership anterior.

---

# Problemas Relacionados mas Distintos

Dois Problemas poderão compartilhar sintomas...

sem serem duplicados.

---

# Invariante de Similaridade sem Colapso

A Plataforma deverá permitir associação sem obrigar fusão prematura.

---

# Análise Agregada

Problem Management deverá permitir perguntas acima do registro individual.

---

# Exemplos

> Quais causas mais produzem Incidentes?

> Onde existe maior risco estrutural?

> Quais Problemas estão envelhecendo?

> Quais Known Errors mais reaparecem?

> Quais correções reduziram recorrência?

---

# Invariante de Visão Sistêmica

OPS deverá conseguir observar a saúde estrutural da operação através do conjunto de Problemas.

---

# Top Problems

A organização poderá manter uma visão dos Problemas de maior relevância.

---

# Critérios

Poderão considerar:

- risco;
- recorrência;
- impacto;
- aging;
- custo;
- Missões;
- blast radius.

---

# Invariante de Top Problems Dinâmico

A lista deverá refletir exposição atual...

Não reputação histórica do Problema.

---

# Concentração de Risco

Muitos Problemas poderão depender da mesma condição.

---

# Exemplo

`PROVIDER_X`

relacionado a:

- P-12;
- P-19;
- P-31;
- P-44.

Isso poderá indicar concentração estrutural.

---

# Invariante de Concentração Detectável

OPS deverá conseguir identificar quando muitos riscos convergem para:

- Provider;
- Serviço;
- equipe;
- arquitetura;
- região;
- tecnologia.

---

# Risco Transversal

Um único fator poderá atravessar muitas Capacidades.

---

# Exemplo

`IDENTIDADE`

pode afetar:

- acesso;
- pagamentos;
- administração;
- automações;
- integrações.

---

# Invariante de Risco Transversal

A prioridade deverá considerar propagação potencial entre domínios.

---

# Análise de Tendência

A organização poderá observar evolução ao longo do tempo.

---

# Exemplos

- Problemas por mês;
- novos Problemas;
- resoluções;
- recorrências;
- aging;
- risco residual;
- Known Errors ativos.

---

# Invariante de Tendência Interpretável

Mudança de volume deverá ser analisada junto com mudanças de comportamento organizacional.

---

# Mais Problemas Pode Ser Bom

Uma organização que melhora detecção preventiva poderá registrar mais Problemas...

enquanto reduz Incidentes.

---

# Invariante de Volume sem Julgamento Simplista

Aumento de Problem Records não deverá ser interpretado automaticamente como piora operacional.

---

# Menos Problemas Pode Ser Ruim

Pode significar:

- baixa observabilidade;
- subnotificação;
- falta de investigação;
- backlog oculto.

---

# Invariante de Métrica Contextual

Indicadores deverão ser interpretados como sinais...

Não como verdade isolada.

---

# Problem Discovery Rate

Poderá medir descoberta de novas fragilidades.

---

# Problem Resolution Rate

Poderá medir tratamento concluído.

---

# Recurrence Rate

Poderá medir retorno de padrões conhecidos.

---

# Known Error Hit Rate

Poderá medir quantos Incidentes encontram precedente útil.

---

# Invariante de Known Error Hit Rate

Uma taxa alta poderá significar boa memória...

ou excesso de Problemas não corrigidos.

A interpretação deverá considerar contexto.

---

# Time to Identify Problem

Poderá medir tempo entre primeiras ocorrências e reconhecimento de condição estrutural.

---

# Invariante de Descoberta Estrutural

Uma organização madura deverá reduzir o tempo necessário para perceber que Incidentes aparentemente isolados compartilham um padrão.

---

# Time to Known Cause

Pode medir:

`PROBLEM_IDENTIFIED`

até:

`CAUSE_KNOWN`

---

# Limite

Alguns Problemas complexos legitimamente exigirão investigação longa.

---

# Invariante de Velocidade sem Falsa Certeza

Reduzir tempo de investigação não deverá incentivar declaração prematura de causa.

---

# Time to Risk Reduction

Pode medir:

`PROBLEM_IDENTIFIED`

até:

`RISK_REDUCED`

---

# Invariante de Resultado sobre Conhecimento

Em muitos contextos...

reduzir risco poderá ser mais importante do que chegar rapidamente a uma explicação completa.

---

# Time to Structural Resolution

Pode medir tempo até tratamento estrutural suficiente.

---

# Problem Aging Distribution

Poderá observar:

- mediana;
- percentis;
- cauda;
- Problemas críticos antigos.

---

# Invariante de Cauda do Backlog

Poucos Problemas críticos muito antigos poderão representar mais risco do que grande quantidade de Problemas recentes de baixa prioridade.

---

# Recorrência Evitada

Uma dimensão interessante poderá ser:

> Quantas ocorrências esperadas deixaram de acontecer após tratamento?

---

# Limite Contrafactual

Isso nem sempre poderá ser medido diretamente.

---

# Invariante de Humildade de Impacto

OPS não deverá inventar benefício quantitativo quando o contrafactual não puder ser sustentado.

---

# Eficácia de Workaround

Poderá ser observada através de:

- sucesso;
- tempo de aplicação;
- redução de impacto;
- efeitos colaterais.

---

# Invariante de Workaround Observável

Workarounds recorrentes deverão produzir Evidência sobre sua eficácia real.

---

# Eficácia de Correção

Uma correção poderá ser avaliada por:

- ausência de recorrência;
- teste;
- redução de Sinais;
- redução de impacto;
- aumento de margem.

---

# Invariante de Correção com Observação Posterior

A validação imediata não deverá ser a única Evidência quando o Problema depende de comportamento de longo prazo.

---

# Janela de Confirmação

Algumas correções poderão exigir período de observação.

---

# Exemplo

Problema ocorria aproximadamente:

`1 VEZ / SEMANA`

Após correção...

uma janela de poucas horas não demonstra ausência de recorrência.

---

# Invariante de Janela Compatível

A duração da validação deverá considerar frequência histórica da condição.

---

# Feedback para Arquitetura

Problem Management poderá revelar padrões arquiteturais frágeis.

---

# Exemplos

- SPOFs;
- acoplamento;
- ausência de isolamento;
- dependência excessiva;
- recuperação difícil.

---

# Invariante de Feedback Arquitetural

Problemas recorrentes deverão poder alterar padrões e decisões arquiteturais futuras.

---

# Architectural Finding

Um conjunto de Problemas poderá gerar achado arquitetural.

---

# Exemplo

> Serviços críticos estão compartilhando recursos sem quotas consistentes.

---

# Invariante de Aprendizado além do Fix Local

A organização deverá poder corrigir o padrão...

Não apenas cada manifestação individual.

---

# Feedback para Observabilidade

Problemas poderão revelar:

- Sinais ausentes;
- baixa cardinalidade;
- falta de contexto;
- healthchecks insuficientes.

---

# Invariante de Observabilidade Aprendente

A investigação estrutural deverá poder melhorar a capacidade futura de compreender comportamento.

---

# Feedback para Alertas

Recorrências poderão indicar:

- threshold inadequado;
- Alerta tardio;
- ausência de correlação;
- ruído.

---

# Invariante de Alertas Aprendentes

Known Errors deverão poder melhorar reconhecimento e roteamento de ocorrências futuras.

---

# Feedback para Runbooks

Workarounds comprovados poderão transformar-se em procedimentos.

---

# Invariante de Conhecimento Executável

Aprendizado causal deverá poder produzir resposta operacional reutilizável.

---

# Feedback para Capacity Management

Problemas poderão revelar:

- crescimento;
- baixa margem;
- limite oculto;
- comportamento não linear.

---

# Invariante de Capacidade Aprendente

Ocorrências reais deverão poder recalibrar modelos de capacidade.

---

# Feedback para Resiliência

Problemas poderão revelar falhas em:

- redundância;
- failover;
- backup;
- restore;
- isolamento;
- contingência.

---

# Invariante de Resiliência Aprendente

Fragilidades descobertas deverão poder alterar desenho e testes de continuidade.

---

# Feedback para Change Management

Problemas poderão mostrar padrões como:

- Mudanças grandes demais;
- baixa validação;
- rollback difícil;
- configuração divergente.

---

# Invariante de Mudança Aprendente

A experiência causal deverá poder alterar como Mudanças futuras são governadas.

---

# Feedback para Segurança

Alguns Problemas poderão revelar:

- excesso de privilégio;
- ausência de segregação;
- configuração insegura;
- cadeia de confiança frágil.

---

# Invariante de Fronteira Operacional ↔ Segurança

Quando uma fragilidade possuir implicação de segurança...

OPS deverá permitir encaminhamento ao domínio apropriado sem perder contexto operacional.

---

# Feedback para CCM

Problem Management poderá informar:

> Existe risco estrutural relevante para determinada Missão.

---

# Exemplo

> A Missão M-44 depende de uma Capacidade com Problem Record crítico ainda não tratado.

---

# Invariante de Risco Estrutural Missional

CCM deverá poder incorporar exposição operacional conhecida ao planejamento.

---

# Feedback do CCM

CCM poderá informar:

- Missões futuras;
- janelas críticas;
- dependências prioritárias;
- tolerância de risco.

---

# Invariante de Priorização Bidirecional

OPS informa fragilidade.

CCM informa consequência.

A prioridade emerge da combinação.

---

# Aprendizado Interorganizacional

Problemas poderão produzir lições úteis além da organização onde foram descobertos.

---

# Exemplo

Organização A identifica:

> Retry sem jitter amplifica falha de Provider.

Organização B utiliza o aprendizado preventivamente.

---

# Invariante de Aprendizado Federável

Conhecimento estrutural deverá poder ser compartilhado respeitando:

- confidencialidade;
- contexto;
- Proveniência;
- autoridade.

---

# Pattern Bulletin

Uma organização poderá compartilhar padrão sem expor detalhes internos.

---

# Exemplo

> Dependências síncronas com retry agressivo podem amplificar indisponibilidade durante degradação parcial.

---

# Invariante de Abstração Compartilhável

A Plataforma deverá permitir transformar experiência local em conhecimento generalizável quando apropriado.

---

# Known Error Federado

Uma organização poderá compartilhar Known Error com parceiros.

---

# Limite

O Workaround de uma organização pode não ser seguro em outra.

---

# Invariante de Contexto Federado

Conhecimento compartilhado deverá preservar condições de aplicabilidade.

---

# Problema de Ecossistema

Uma condição poderá existir entre organizações...

e não dentro de apenas uma.

---

# Exemplo

Protocolos de retry incompatíveis entre consumidor e Provider.

---

# Invariante de Causalidade Interorganizacional

Problem Management deverá poder representar causas emergentes da interação entre sistemas autônomos.

---

# Agentes Cognitivos

Agentes poderão analisar o conjunto de Problem Records.

---

# Agente de Padrões

Poderá perguntar:

> Quais Problemas compartilham estrutura causal?

---

# Agente de Concentração

Poderá identificar:

> 34% do risco estrutural crítico depende de Provider X.

---

# Agente de Recorrência

Poderá detectar:

> Este novo Incidente se parece com três ocorrências associadas ao P-018.

---

# Agente de Contradição

Poderá encontrar:

> A causa declarada para P-022 não explica duas ocorrências posteriores.

---

# Agente de Dívida

Poderá destacar:

> Cinco Known Errors críticos dependem de Workarounds manuais há mais de seis meses.

---

# Invariante de Agente como Amplificador de Memória

Agentes deverão ajudar a organização a perceber relações que seriam difíceis de manter cognitivamente em escala.

---

# Agente não é Autoridade Causal

Mesmo com alta similaridade...

um Agente não deverá transformar automaticamente correlação em fato.

---

# Invariante de Autoridade Epistêmica

Conclusões automatizadas deverão possuir status compatível com Evidência e Governança.

---

# Memória Vetorial e Semântica

A Plataforma poderá utilizar mecanismos de recuperação semântica para localizar Problemas semelhantes.

---

# Exemplo

Consulta:

> falha intermitente depois de aumento de tráfego.

Poderá recuperar Problemas mesmo sem essas palavras exatas.

---

# Invariante de Busca Semântica com Proveniência

Resultados semânticos deverão apontar para registros e Evidências originais.

---

# Similaridade Multidimensional

A similaridade poderá considerar:

- texto;
- métricas;
- sequência;
- topologia;
- Mudanças;
- sintomas;
- dependências.

---

# Invariante de Similaridade Explicável

Quando possível...

a Plataforma deverá indicar por que dois Problemas foram considerados semelhantes.

---

# Knowledge Graph Operacional

Problemas poderão integrar um Grafo de Conhecimento contendo:

`INCIDENTES`

`PROBLEMAS`

`SERVICOS`

`CAPACIDADES`

`DEPENDENCIAS`

`MUDANCAS`

`RUNBOOKS`

`KNOWN_ERRORS`

`MISSOES`

---

# Invariante de Conhecimento Conectado

A memória estrutural deverá preservar relações...

Não apenas documentos isolados.

---

# Exemplo de Navegação

`PROBLEMA P-018`

↓

causou:

`INCIDENTES I-120, I-133, I-201`

↓

afetou:

`CAPACIDADE C-08`

↓

suporta:

`MISSAO M-04`

↓

foi tratado por:

`CHANGE CHG-099`

↓

validado por:

`TESTE T-18`

---

# Invariante de Navegação Bidirecional

Quando autorizado...

deverá ser possível navegar entre essas relações em ambas as direções.

---

# Memória Institucional versus Memória Individual

Conhecimento crítico não deverá existir apenas como:

> "Pergunta para aquela pessoa, ela sabe."

---

# Invariante de Despersonalização do Conhecimento

A Plataforma deverá transformar conhecimento operacional relevante em capacidade institucional recuperável.

---

# Conhecimento Tácito

Nem todo conhecimento poderá ser formalizado completamente.

---

# Invariante de Captura Progressiva

OPS deverá permitir que experiência humana seja gradualmente transformada em:

- Evidência;
- padrão;
- Known Error;
- Runbook;
- política.

---

# Especialista Continua Importante

Memória institucional não elimina expertise humana.

Ela reduz dependência exclusiva dela.

---

# Invariante de Expertise Amplificada

A Plataforma deverá permitir que conhecimento de especialistas aumente capacidade coletiva.

---

# Métricas de Eficácia de Problem Management

O sucesso não deverá ser medido apenas por quantidade de Problem Records.

---

# Dimensões Possíveis

Poderão incluir:

- redução de recorrência;
- redução de risco;
- redução de impacto;
- aumento de detecção preventiva;
- velocidade de reconhecimento de padrões;
- eficácia de correções;
- eficácia de Workarounds;
- redução de dívida crítica.

---

# Invariante de Métrica Orientada a Resultado

Problem Management deverá ser avaliado pelo comportamento operacional que ajuda a melhorar.

---

# Preventive Detection Ratio

Poderá observar proporção de Problemas descobertos antes de Incidente significativo.

---

# Invariante de Prevenção como Maturidade

Quanto mais fragilidades relevantes forem descobertas antes de impacto...

maior poderá ser a maturidade preventiva.

---

# Recurrence Reduction

Poderá observar redução de ocorrências após tratamento.

---

# Structural Risk Reduction

Poderá observar mudança agregada de exposição.

---

# Known Error Reuse

Poderá observar quantas respostas futuras foram aceleradas por conhecimento existente.

---

# Invariante de Reuso com Interpretação

Reuso elevado pode representar memória eficaz...

mas também backlog estrutural não resolvido.

---

# Correction Effectiveness

Poderá medir proporção de correções que:

- passaram validação;
- não apresentaram regressão;
- reduziram recorrência.

---

# Invariante de Correção não Binária

Eficácia poderá ser parcial.

Uma ação pode reduzir frequência sem eliminar completamente o Problema.

---

# Problem Escape Rate

Conceitualmente...

poderá observar quantos Problemas conhecidos voltaram a produzir Incidentes significativos antes de tratamento adequado.

---

# Invariante de Escape como Sinal de Exposição

Known Error crítico que continua causando Incidentes deverá permanecer visível como risco ativo.

---

# Debt Reduction

Poderá observar redução de:

- Workarounds permanentes;
- Known Errors críticos;
- Problemas antigos;
- dependências frágeis.

---

# Invariante de Dívida como Exposição

Dívida operacional deverá ser interpretada pelo risco que representa...

Não apenas por volume.

---

# Maturidade de Problem Management

A maturidade poderá evoluir por estágios.

---

# Maturidade Reativa

Problemas são investigados apenas após Incidentes graves.

---

# Maturidade Registrada

Problem Records existem...

mas funcionam principalmente como backlog.

---

# Maturidade Causal

A organização preserva:

- hipóteses;
- Evidências;
- fatores;
- causa;
- confiança.

---

# Maturidade de Known Error

Conhecimento de Problemas acelera resposta futura.

---

# Maturidade Estrutural

Correções são priorizadas por risco...

e validadas após implementação.

---

# Maturidade Preventiva

Fragilidades são descobertas antes de Incidentes relevantes.

---

# Maturidade Sistêmica

Padrões entre Problemas alteram:

- arquitetura;
- capacidade;
- observabilidade;
- Governança.

---

# Maturidade Cognitiva

Agentes auxiliam:

- correlação;
- causalidade;
- recuperação de memória;
- detecção de padrões.

---

# Maturidade Federada

Aprendizado atravessa organizações respeitando autonomia e Proveniência.

---

# Maturidade Adaptativa

A Plataforma consegue aprender continuamente com:

`INCIDENTES`

+

`PROBLEMAS`

+

`MUDANCAS`

+

`RESULTADOS`

e alterar seu próprio comportamento operacional.

---

# Invariante de Maturidade Real

Maturidade não deverá ser medida pela quantidade de processos ou documentos.

Deverá aparecer como:

- menos recorrência evitável;
- menor exposição;
- diagnóstico mais rápido;
- melhor recuperação;
- aprendizado reutilizável.

---

# Modelo de Memória e Aprendizado Estrutural

Conceitualmente:

`INCIDENTES`

↓

`PROBLEMAS`

↓

`EVIDENCIAS`

↓

`MODELOS CAUSAIS`

↓

`KNOWN ERRORS`

↓

`TRATAMENTOS`

↓

`MUDANCAS`

↓

`VALIDACOES`

↓

`PADROES`

↓

`MEMORIA INSTITUCIONAL`

↓

`PREVENCAO`

---

# Invariante de Loop de Conhecimento

Cada ocorrência deverá poder tornar a Plataforma melhor preparada para a próxima.

---

# Próxima Dimensão

Com memória estrutural, taxonomia, padrões, Problemas sistêmicos, análise agregada, tendências, feedback multidomínio, aprendizado federado, Agentes Cognitivos, Knowledge Graph e métricas de eficácia estabelecidos...

o próximo lote deverá consolidar:

- invariantes fundamentais de Problem Management;
- garantias mínimas;
- anti-padrões;
- critérios finais de maturidade;
- modelo integrado;
- fronteira final com Incident Management;
- relação com Change Management;
- relação com Observabilidade;
- relação com Runbooks;
- relação com Capacity e Resiliência;
- relação com CCM;
- relação com Eva;
- filosofia de Problem Management;
- Princípio Final;
- conclusão do arquivo;
- transição para `012`.

---

# Invariantes Fundamentais de Problem Management

A Engenharia Oficial estabelece propriedades que deverão permanecer válidas independentemente:

- da organização;
- da tecnologia;
- da ferramenta;
- do tamanho da operação;
- do método específico de investigação.

Essas propriedades formam os Invariantes Fundamentais deste arquivo.

---

# Invariante 1 — Problema não é Incidente

Incidente coordena uma ocorrência ativa.

Problema trata uma condição estrutural.

---

# Invariante 2 — Restaurar não é Resolver o Problema

A recuperação operacional poderá terminar muito antes da eliminação da fragilidade.

---

# Invariante 3 — Problema Pode Existir sem Incidente

Fragilidade conhecida não precisa produzir dano antes de ser reconhecida.

---

# Invariante 4 — Near Miss Pode Revelar Problema

Ausência de impacto não elimina valor de investigação.

---

# Invariante 5 — Nem Todo Incidente Exige Problem Record

A formalização deverá ser proporcional ao risco e ao valor esperado da investigação.

---

# Invariante 6 — Um Problema Pode Produzir Muitos Incidentes

A memória estrutural deverá atravessar ocorrências individuais.

---

# Invariante 7 — Um Incidente Pode Revelar Muitos Problemas

Falhas complexas poderão expor múltiplas fragilidades independentes.

---

# Invariante 8 — Relação Incidente ↔ Problema Deve Ser N:N

O modelo não deverá impor causalidade artificialmente simples.

---

# Invariante 9 — Identidade do Problema Deve Permanecer Estável

A evolução da investigação não deverá criar automaticamente novo Problem Record.

---

# Invariante 10 — Estado Deve Ser Explícito

OPS deverá distinguir:

- identificação;
- triagem;
- investigação;
- causa conhecida;
- tratamento;
- mitigação;
- resolução;
- encerramento.

---

# Invariante 11 — Causa Conhecida não é Resolução

Conhecer o mecanismo não significa eliminá-lo.

---

# Invariante 12 — Mitigação não é Eliminação

Reduzir risco poderá ser suficiente temporariamente...

Sem representar correção estrutural.

---

# Invariante 13 — Resolução Deve Possuir Evidência

Implantar uma Mudança não deverá fechar automaticamente o Problema.

---

# Invariante 14 — Problemas Devem Possuir Ownership

Fragilidades relevantes não deverão tornar-se órfãs após o fim do Incidente.

---

# Invariante 15 — Problem Management Deve Ser Reativo e Proativo

A Plataforma deverá aprender após falhas...

E buscar fragilidades antes delas.

---

# Invariante 16 — Recorrência não Exige Igualdade Exata

Padrões semanticamente semelhantes poderão compartilhar condição estrutural.

---

# Invariante 17 — Similaridade não é Mesma Causa

Correlação deverá orientar investigação...

Não determinar causalidade automaticamente.

---

# Invariante 18 — Recorrência Deve Possuir Contexto Temporal

Contagem sem janela de observação é insuficiente.

---

# Invariante 19 — Frequência não Substitui Risco

Uma ocorrência rara poderá justificar prioridade elevada quando consequência potencial for crítica.

---

# Invariante 20 — Recorrência Pós-Correção Deve Desafiar a Teoria

A realidade futura deverá poder reabrir conclusões anteriores.

---

# Invariante 21 — Causa não é Culpa

A investigação deverá buscar mecanismos e condições.

---

# Invariante 22 — Trigger não é Necessariamente Causa

O último Evento antes do impacto não deverá ser automaticamente declarado Root Cause.

---

# Invariante 23 — Causalidade Pode Ser Composta

Múltiplas condições poderão participar simultaneamente do resultado.

---

# Invariante 24 — Fatores Contribuintes Devem Ser Preservados

Elementos que aumentam probabilidade, impacto ou duração também importam.

---

# Invariante 25 — Condições Latentes São Problemas Legítimos

Uma fragilidade poderá existir por longo período sem produzir ocorrência observável.

---

# Invariante 26 — Root Cause Única não Deve Ser Obrigatória

Sistemas complexos poderão exigir cadeias, árvores ou grafos causais.

---

# Invariante 27 — Correlação não é Causalidade

Associação temporal ou estatística isolada não deverá ser apresentada como prova.

---

# Invariante 28 — Causa Deve Ser Sustentada por Evidência

Conclusões relevantes deverão possuir suporte recuperável.

---

# Invariante 29 — Hipóteses Devem Ser Revisáveis

Nova Evidência poderá fortalecer, enfraquecer ou rejeitar explicações.

---

# Invariante 30 — Conhecimento Negativo Deve Ser Preservado

Saber o que não explica o Problema também possui valor.

---

# Invariante 31 — Causa Desconhecida é Estado Legítimo

A organização não deverá fabricar explicação para completar documentação.

---

# Invariante 32 — Workaround não Prova Causa

Uma mitigação eficaz não demonstra automaticamente por que o Problema existe.

---

# Invariante 33 — Known Error não é Problema Resolvido

Conhecimento operacional e eliminação estrutural são estados diferentes.

---

# Invariante 34 — Known Errors Devem Ser Recuperáveis

Precedentes úteis deverão poder acelerar resposta futura.

---

# Invariante 35 — Conhecimento Operacional Pode Preceder Compreensão Causal Completa

Um comportamento poderá ser suficientemente conhecido para resposta segura mesmo antes de sua explicação total.

---

# Invariante 36 — Técnicas de Investigação Devem Ser Proporcionais

Five Whys, Fault Trees, Grafos Causais e outras técnicas deverão ser escolhidos conforme o Problema.

---

# Invariante 37 — Five Whys não Deve Impor Linearidade

A investigação deverá poder ramificar.

---

# Invariante 38 — Ordem Temporal Deve Ser Compatível com Causalidade

Uma condição não poderá explicar um efeito ocorrido antes dela.

---

# Invariante 39 — Mudança Anterior não é Automaticamente Causa

Deploys e configurações deverão ser tratados como candidatos investigativos.

---

# Invariante 40 — Dependências Transitivas Devem Ser Investigáveis

A causa poderá existir vários níveis distante do componente onde o sintoma apareceu.

---

# Invariante 41 — Blast Radius Potencial Importa

O impacto observado no último Incidente não deverá limitar avaliação do risco estrutural.

---

# Invariante 42 — Arquitetura Participa da Causalidade

Acoplamento, isolamento, redundância e margem influenciam propagação e consequência.

---

# Invariante 43 — Erro Humano não Deve Encerrar Investigação

A análise deverá compreender o contexto no qual a ação humana ocorreu.

---

# Invariante 44 — Organização Também Faz Parte do Sistema

Ownership, incentivos, capacidade e prioridades poderão contribuir para risco.

---

# Invariante 45 — Barreiras que Funcionaram Também Devem Ser Estudadas

Aprendizado inclui compreender o que impediu consequência maior.

---

# Invariante 46 — Causalidade Pode Ser Probabilística

Algumas condições aumentam chance de falha sem determinar resultado.

---

# Invariante 47 — Confiança Causal Deve Ser Explicável

Uma classificação de confiança deverá possuir Evidências associadas.

---

# Invariante 48 — Confiança não é Verdade Absoluta

Mesmo conclusões fortes deverão permanecer revisáveis.

---

# Invariante 49 — Hipóteses Devem Ser Testáveis Quando Possível

A investigação deverá procurar observações capazes de confirmar ou contradizer teorias.

---

# Invariante 50 — Investigação Deve Ser Segura

A busca por conhecimento não deverá criar risco desproporcional.

---

# Invariante 51 — Evidência Volátil Deve Poder Ser Preservada

Ações destrutivas não deverão apagar informação necessária à investigação sem decisão consciente.

---

# Invariante 52 — Evidência Deve Possuir Proveniência

Origem, momento e contexto deverão ser recuperáveis quando relevantes.

---

# Invariante 53 — Tratamento Pode Atuar em Diferentes Dimensões

A solução poderá:

- eliminar causa;
- reduzir probabilidade;
- reduzir impacto;
- melhorar detecção;
- melhorar recuperação.

---

# Invariante 54 — Defesa em Profundidade é Tratamento Válido

Múltiplos controles imperfeitos poderão produzir proteção estrutural robusta.

---

# Invariante 55 — Ações Estruturais Devem Possuir Resultado Esperado

Sempre que possível...

deverá existir forma de verificar se a ação produziu melhoria.

---

# Invariante 56 — Correção Definitiva Pode Ser Progressiva

Mitigação imediata e redesign futuro poderão coexistir.

---

# Invariante 57 — Custo de Corrigir Deve Ser Comparado ao Custo de Não Corrigir

Decisões estruturais deverão considerar exposição futura.

---

# Invariante 58 — Risco Residual Deve Permanecer Visível

Nenhuma correção deverá implicar automaticamente risco zero.

---

# Invariante 59 — Aceitação de Risco Deve Ser Explícita

Risco conhecido não deverá desaparecer por inércia.

---

# Invariante 60 — Aceitação de Risco Deve Ser Revisável

Mudanças de Missão, Criticidade ou contexto poderão alterar decisão anterior.

---

# Invariante 61 — Dívida Operacional Deve Permanecer Visível

Workarounds e fragilidades conhecidas deverão continuar representados enquanto relevantes.

---

# Invariante 62 — Backlog Deve Ser Priorizado por Risco

Ordem cronológica isolada não deverá determinar tratamento.

---

# Invariante 63 — Estagnação Deve Ser Detectável

Problemas críticos sem progresso deverão poder provocar escalonamento.

---

# Invariante 64 — Problem Management e Change Management Devem Permanecer Distintos

O Problema define o que precisa mudar.

A Mudança governa como a intervenção será executada.

---

# Invariante 65 — Mudança Concluída não é Problema Resolvido

A implementação deverá ser seguida de validação.

---

# Invariante 66 — Correções Devem Ser Validadas

A realidade operacional deverá confirmar redução suficiente do risco.

---

# Invariante 67 — Janela de Validação Deve Ser Compatível com a Recorrência

Problemas raros poderão exigir observação prolongada.

---

# Invariante 68 — Regressão Deve Ser Distinguível de Nova Causa

O mesmo sintoma poderá reaparecer por mecanismos diferentes.

---

# Invariante 69 — Reabertura Deve Preservar História

Nova ocorrência não deverá apagar investigação e tratamento anteriores.

---

# Invariante 70 — Resolução Pode Ocorrer por Diferentes Motivos

Entre eles:

- eliminação;
- redução de risco;
- obsolescência;
- aceitação formal.

---

# Invariante 71 — Encerramento não Deve Criar Trabalho Órfão

Ações residuais deverão possuir destino explícito.

---

# Invariante 72 — Known Errors Obsoletos Devem Ser Retirados

Conhecimento antigo não deverá orientar respostas futuras incorretamente.

---

# Invariante 73 — Workarounds Temporários Devem Ser Revisados

Contingência não deverá tornar-se arquitetura permanente por esquecimento.

---

# Invariante 74 — Problemas Long-Lived Precisam de Governança

Risco, Owner, mitigação e revisão deverão permanecer ativos.

---

# Invariante 75 — Problemas Locais Podem Revelar Problema Sistêmico

A Plataforma deverá aprender acima do componente individual.

---

# Invariante 76 — Relações entre Problemas Devem Ser Representáveis

Duplicidade, contribuição, dependência e hierarquia não deverão ser perdidas.

---

# Invariante 77 — Merge Deve Preservar Proveniência

Consolidação não deverá apagar a história dos registros originais.

---

# Invariante 78 — Taxonomia não Deve Simplificar Causalidade

Classificação deverá servir à análise...

Não substituir explicação.

---

# Invariante 79 — Memória Causal Deve Ser Institucional

Conhecimento estrutural relevante não deverá depender exclusivamente de pessoas específicas.

---

# Invariante 80 — Conhecimento Deve Poder Ser Generalizado com Cuidado

Padrões aprendidos em um contexto poderão ajudar outros...

Sem determinar conclusões automaticamente.

---

# Invariante 81 — Métricas Devem Medir Resultado, não Produção de Registros

Quantidade de Problem Records fechados não representa necessariamente redução de risco.

---

# Invariante 82 — Mais Problemas Identificados Pode Representar Maior Maturidade

Detecção preventiva poderá aumentar registros enquanto reduz Incidentes.

---

# Invariante 83 — Menos Problemas não Significa Automaticamente Operação Melhor

Baixa descoberta poderá indicar invisibilidade.

---

# Invariante 84 — Agentes Devem Amplificar Memória, não Substituir Evidência

Inferências automatizadas deverão permanecer rastreáveis e revisáveis.

---

# Invariante 85 — Similaridade Automatizada Deve Ser Explicável

A Plataforma deverá indicar por que registros foram considerados relacionados quando possível.

---

# Invariante 86 — Conhecimento Federado Deve Preservar Contexto

Um padrão válido em uma organização não deverá ser aplicado cegamente em outra.

---

# Invariante 87 — Causa Externa não Elimina Fragilidade Interna

Falha de Provider deverá provocar também a pergunta:

> Por que estávamos expostos a ela?

---

# Invariante 88 — Problem Management Deve Retroalimentar Outros Domínios

Aprendizado deverá poder alterar:

- Arquitetura;
- Observabilidade;
- Alertas;
- Capacity;
- Resiliência;
- Runbooks;
- Change Management;
- Governança.

---

# Invariante 89 — Aprendizado Deve Alterar o Futuro

Conhecimento que nunca muda decisão, arquitetura ou comportamento operacional permanece incompleto.

---

# Invariante 90 — A Realidade Deve Poder Refutar a Plataforma

Novos Incidentes deverão poder demonstrar que uma conclusão anterior estava errada.

---

# Garantias Mínimas de Problem Management

Uma implementação adequada deverá oferecer garantias suficientes para transformar ocorrências isoladas em aprendizado estrutural.

---

# Garantia de Identidade

Todo Problema formal deverá possuir identidade persistente.

---

# Garantia de Ownership

Problemas relevantes deverão possuir responsabilidade explícita.

---

# Garantia de Estado

A evolução entre investigação, tratamento, resolução e encerramento deverá ser representável.

---

# Garantia de Relação com Incidentes

Incidentes e Near Misses deverão poder ser relacionados aos Problemas correspondentes.

---

# Garantia de Recorrência

A Plataforma deverá conseguir reconhecer e registrar repetição relevante.

---

# Garantia de Hipótese

Explicações ainda não confirmadas deverão poder existir sem serem tratadas como fatos.

---

# Garantia de Evidência

Conclusões relevantes deverão possuir suporte recuperável.

---

# Garantia de Causalidade Complexa

Múltiplas causas e fatores contribuintes deverão poder coexistir.

---

# Garantia de Causa Desconhecida

A ausência de conclusão causal deverá ser representável honestamente.

---

# Garantia de Known Error

Comportamentos conhecidos deverão poder ser reutilizados em resposta futura.

---

# Garantia de Workaround

Contornos relevantes deverão possuir contexto, risco e validade.

---

# Garantia de Tratamento

Problemas deverão poder produzir ações estruturais rastreáveis.

---

# Garantia de Change Linkage

Mudanças utilizadas para tratamento deverão permanecer relacionadas ao Problema.

---

# Garantia de Validação

A implementação de uma correção não deverá ser suficiente sem verificação do resultado.

---

# Garantia de Risco Residual

A exposição remanescente deverá poder ser registrada.

---

# Garantia de Aceitação de Risco

Decisões conscientes de não corrigir deverão possuir autoridade e justificativa.

---

# Garantia de Reabertura

Recorrência futura deverá poder reabrir investigação preservando memória.

---

# Garantia de Memória

Problemas resolvidos deverão continuar recuperáveis para aprendizado autorizado.

---

# Garantia de Análise Agregada

A organização deverá conseguir compreender padrões acima do Problem Record individual.

---

# Garantia de Feedback

Aprendizado estrutural deverá poder retornar aos sistemas que produzem e operam a Plataforma.

---

# Anti-Padrões de Problem Management

A Engenharia Oficial deverá reconhecer comportamentos que produzem aparência de investigação sem redução real de risco.

---

# Anti-Padrão — Incidente Renomeado como Problema

O Problem Record apenas repete a descrição da ocorrência...

Sem representar condição estrutural.

---

# Anti-Padrão — Root Cause Obrigatória

Todo registro precisa possuir uma única causa...

Mesmo quando a Evidência não sustenta isso.

---

# Anti-Padrão — Cinco Porquês Cerimonial

A equipe escreve exatamente cinco respostas...

Independentemente da estrutura real do Problema.

---

# Anti-Padrão — Último Deploy é a Causa

Proximidade temporal substitui investigação.

---

# Anti-Padrão — Erro Humano

A análise termina em:

> alguém clicou errado.

Sem perguntar por que o sistema permitiu consequência relevante.

---

# Anti-Padrão — Culpa Disfarçada de RCA

A investigação busca pessoa responsável...

Em vez de compreender mecanismo.

---

# Anti-Padrão — Causa sem Evidência

Uma narrativa plausível transforma-se em fato institucional.

---

# Anti-Padrão — Hipótese Favorita

A equipe coleta apenas Evidências que confirmam sua primeira explicação.

---

# Anti-Padrão — Diagrama Bonito, Investigação Vazia

Existe árvore causal sofisticada...

Mas os relacionamentos não possuem Evidência.

---

# Anti-Padrão — Known Error Eterno

A organização aprende a conviver com a fragilidade...

E abandona qualquer discussão sobre risco estrutural.

---

# Anti-Padrão — Workaround Virou Arquitetura

Uma contingência temporária permanece por anos sem decisão consciente.

---

# Anti-Padrão — Correção sem Validação

A Mudança foi implantada...

Então o Problema é fechado.

---

# Anti-Padrão — Ausência de Recorrência Imediata

O Problema semanal é declarado resolvido após duas horas de observação.

---

# Anti-Padrão — Backlog Cemitério

Centenas de Problemas existem...

Mas ninguém sabe quais realmente importam.

---

# Anti-Padrão — Aging como Prioridade Absoluta

O Problema mais antigo sempre vence...

Mesmo quando outro representa risco crítico.

---

# Anti-Padrão — Fechar para Melhorar Métrica

Problem Records são encerrados para reduzir backlog reportado.

---

# Anti-Padrão — Aceitação de Risco por Silêncio

Nada é feito...

e a ausência de decisão é tratada como aceitação.

---

# Anti-Padrão — Provider é o Problema

A organização encerra investigação porque a falha ocorreu externamente...

Sem analisar sua própria exposição.

---

# Anti-Padrão — Postmortem sem Problem Management

O Incidente produz um documento excelente...

Que nunca se transforma em acompanhamento estrutural.

---

# Anti-Padrão — Action Item sem Problema

Ações ficam espalhadas entre tickets...

Sem relação com o risco que deveriam reduzir.

---

# Anti-Padrão — Problema sem Owner

Todos concordam que a fragilidade existe...

Mas ninguém responde por sua evolução.

---

# Anti-Padrão — RCA como Documento Final

A investigação termina quando o relatório é publicado.

---

# Anti-Padrão — Métrica como Verdade

Indicadores de recorrência e resolução substituem interpretação operacional.

---

# Anti-Padrão — Agente como Oráculo

Uma inferência automatizada é apresentada como causa confirmada sem Evidência suficiente.

---

# Anti-Padrão — Biblioteca sem Contexto

Um Known Error antigo é aplicado a um novo Incidente apenas porque os sintomas parecem semelhantes.

---

# Anti-Padrão — Corrigir Cada Incidente Separadamente

A organização resolve manifestações repetidas...

Sem reconhecer o padrão sistêmico comum.

---

# Anti-Padrão — Aprendizado Local Permanente

Cada equipe aprende isoladamente a mesma lição.

---

# Anti-Padrão — Heroísmo como Controle

A fragilidade permanece aceitável porque:

> aquela pessoa sabe resolver rápido.

---

# Critérios Finais de Maturidade

A maturidade de Problem Management deverá refletir capacidade de transformar experiência operacional em redução estrutural de risco.

---

# Maturidade Reativa

Problemas aparecem apenas depois de Incidentes relevantes.

---

# Maturidade Registrada

Existe Problem Record e ownership.

---

# Maturidade Investigativa

Hipóteses, Evidências e fatores são preservados.

---

# Maturidade Causal

A organização consegue representar mecanismos complexos sem falsa simplificação.

---

# Maturidade de Known Error

Conhecimento acumulado acelera reconhecimento e mitigação.

---

# Maturidade de Tratamento

Problemas produzem ações estruturais priorizadas.

---

# Maturidade de Validação

Correções precisam demonstrar resultado.

---

# Maturidade Preventiva

Fragilidades são descobertas antes de impacto relevante.

---

# Maturidade Sistêmica

Problemas locais revelam padrões de Plataforma.

---

# Maturidade de Memória

Aprendizado permanece recuperável através do tempo.

---

# Maturidade Cognitiva

Agentes ajudam a detectar:

- recorrência;
- similaridade;
- concentração;
- contradições;
- dívida.

---

# Maturidade Federada

Conhecimento atravessa fronteiras organizacionais preservando contexto.

---

# Maturidade Adaptativa

A Plataforma altera continuamente:

- arquitetura;
- controles;
- observabilidade;
- capacidade;
- procedimentos;

com base em Evidência operacional acumulada.

---

# Maturidade Institucional

A organização consegue responder continuamente:

> Quais fragilidades conhecemos?

> Quais estão produzindo recorrência?

> Quais representam maior risco?

> O que sabemos sobre suas causas?

> O que ainda não sabemos?

> Quais Workarounds existem?

> O que estamos fazendo para reduzir exposição?

> As correções realmente funcionaram?

> Quais padrões aparecem entre Problemas diferentes?

> O que precisamos mudar estruturalmente?

---

# Modelo Integrado de Problem Management

O modelo completo poderá ser representado conceitualmente como:

`SINAL / EVENTO / INCIDENTE / NEAR MISS`

↓

`PADRAO / FRAGILIDADE`

↓

`PROBLEMA`

↓

`TRIAGEM`

↓

`RISCO + PRIORIDADE + OWNERSHIP`

↓

`HIPOTESES`

↓

`EVIDENCIAS`

↓

`ANALISE CAUSAL`

↓

`CAUSAS + FATORES`

↓

`KNOWN ERROR / WORKAROUND`

↓

`ESTRATEGIA DE TRATAMENTO`

↓

`ACOES`

↓

`MUDANCAS`

↓

`VALIDACAO`

↓

`RISCO RESIDUAL`

↓

`RESOLUCAO / ACEITACAO`

↓

`OBSERVACAO`

↓

`RECORRENCIA OU CONFIRMACAO`

↓

`MEMORIA`

↓

`PADROES SISTEMICOS`

↓

`PREVENCAO`

---

# Loop de Recorrência

Se a condição reaparecer:

`NOVO INCIDENTE`

↓

`MATCH COM PROBLEMA`

↓

`NOVA EVIDENCIA`

↓

`REAVALIACAO CAUSAL`

↓

`REABERTURA / NOVO TRATAMENTO`

---

# Invariante do Loop Aberto

Nenhuma conclusão deverá tornar-se imune à Evidência futura.

---

# Fronteira Final com 010 — Incidentes e Coordenação de Resposta

O arquivo `010` responde principalmente:

> Como coordenamos a ocorrência atual?

O `011` responde:

> Como reduzimos a chance de precisar coordenar novamente a mesma condição?

---

# Relação Temporal

Durante Incidente:

`RESTORE FIRST`

Depois e entre Incidentes:

`UNDERSTAND + REDUCE RISK`

---

# Invariante 010 ↔ 011

Incident Response e Problem Management deverão permanecer conectados...

Sem serem confundidos.

---

# 010 Fornece ao 011

- Timeline;
- Evidências;
- decisões;
- impacto;
- ações;
- hipóteses;
- Postmortem;
- Incidentes relacionados.

---

# 011 Devolve ao 010

- Known Errors;
- Workarounds;
- padrões;
- precedentes;
- assinaturas;
- hipóteses históricas.

---

# Invariante de Loop Incidente ↔ Problema

Cada Incidente poderá aumentar conhecimento estrutural...

E esse conhecimento deverá melhorar resposta aos Incidentes seguintes.

---

# Relação com 012 — Mudanças Operacionais e Controle de Risco

O Problem Record responde:

> O que precisa mudar e por quê?

O Change Management responderá:

> Como mudaremos isso de forma controlada?

---

# Fronteira 011 ↔ 012

`PROBLEMA`

↓

define necessidade

↓

`MUDANCA`

↓

executa intervenção

↓

`PROBLEMA`

↓

valida resultado

---

# Invariante Problem ↔ Change

A necessidade de correção não deverá eliminar Governança de Mudança.

---

# Relação com Observabilidade

Observabilidade fornece Evidência para investigação.

Problem Management devolve:

- novos Sinais;
- novas relações;
- novos contextos;
- novos requisitos de visibilidade.

---

# Invariante de Loop Observabilidade ↔ Problema

O sistema utilizado para compreender falhas deverá aprender com as falhas que não conseguiu compreender bem.

---

# Relação com 009 — Eventos, Alertas e Gestão de Atenção

Problemas poderão revelar:

- Alertas tardios;
- ruído;
- ausência de detecção;
- correlação insuficiente.

---

# Invariante Problema ↔ Alerta

Recorrência conhecida deverá poder melhorar detecção futura.

---

# Relação com 021 — Runbooks, Playbooks e Procedimentos Operacionais

Known Errors e Workarounds poderão produzir Runbooks.

---

# Invariante Problema ↔ Runbook

Conhecimento repetível deverá poder tornar-se procedimento operacional seguro.

---

# Relação com Capacity Management

Problemas poderão revelar:

- saturação;
- baixa margem;
- crescimento;
- limites;
- contention.

---

# Invariante Problema ↔ Capacity

Capacidade deverá aprender com limites revelados em produção.

---

# Relação com Resiliência

Problemas poderão revelar:

- SPOFs;
- failover inválido;
- recuperação lenta;
- isolamento insuficiente.

---

# Invariante Problema ↔ Resiliência

A realidade operacional deverá poder alterar o desenho de tolerância a falhas.

---

# Relação com Automação Operacional

Known Errors poderão permitir Automação de:

- reconhecimento;
- diagnóstico;
- mitigação;
- validação.

---

# Invariante de Automação Baseada em Conhecimento

Automação deverá operar sobre conhecimento suficientemente confiável e governado.

---

# Relação com Agentes Operacionais

Agentes poderão:

- encontrar padrões;
- recuperar precedentes;
- comparar Incidentes;
- desafiar hipóteses;
- acompanhar backlog;
- validar resultados.

---

# Invariante de Agente Investigativo

Agentes deverão ampliar capacidade cognitiva...

Sem substituir Proveniência, Evidência ou autoridade.

---

# Relação com CCM

OPS poderá informar:

> Existe uma fragilidade estrutural conhecida.

CCM poderá responder:

> Essa fragilidade ameaça uma Missão prioritária.

---

# Invariante OPS ↔ CCM

Risco técnico e consequência missional deverão poder ser combinados sem fundir os dois domínios.

---

# Relação com Eva

Eva poderá transformar a memória estrutural em interação acessível.

---

# Para um Operador

> Já vimos isso antes?

---

# Para um Especialista

> Quais Evidências sustentam a causa atual?

---

# Para um Problem Owner

> Quais ações estão bloqueadas?

---

# Para Liderança

> Qual Problema representa maior exposição agora?

---

# Para CCM

> Quais fragilidades ameaçam a Missão planejada?

---

# Invariante de Interface por Contexto

Eva deverá apresentar profundidade compatível com:

- necessidade;
- responsabilidade;
- autoridade.

---

# Eva não é a Memória do Problema

A memória deverá existir independentemente da interface conversacional.

---

# Invariante de Independência

Problem Management deverá sobreviver à indisponibilidade de Eva.

---

# Eva como Navegação de Causalidade

Uma conversa poderá evoluir:

> Por que esse Incidente aconteceu?

↓

> Quais Evidências sustentam isso?

↓

> Já aconteceu antes?

↓

> Qual Workaround existe?

↓

> Por que ainda não corrigimos?

↓

> Qual risco permanece?

---

# Invariante de Compressão Reversível

Eva poderá sintetizar causalidade...

Mas deverá permitir aprofundamento até registros e Evidências quando autorizado.

---

# Filosofia de Problem Management

Problem Management começa onde a urgência termina.

Durante um Incidente...

a pergunta dominante é:

> Como restauramos?

Depois...

uma organização madura precisa perguntar:

> O que essa ocorrência revelou sobre o sistema?

---

# Problema não é Falha Administrativa

Registrar um Problema não significa admitir incompetência.

Significa reconhecer que existe algo estrutural digno de compreensão.

---

# Invariante de Cultura Investigativa

A organização deverá favorecer descoberta de fragilidades...

Em vez de recompensar sua invisibilidade.

---

# A Ausência de Incidentes não Prova Saúde

Um sistema pode permanecer funcionando enquanto acumula:

- fragilidade;
- dívida;
- baixa margem;
- dependências não testadas.

---

# Invariante de Saúde além da Ausência de Falha

OPS deverá buscar Evidência positiva de Resiliência...

Não apenas silêncio operacional.

---

# Problem Management como Memória entre Emergências

Existe uma diferença fundamental.

Incident Response trabalha sob pressão temporal.

Problem Management trabalha contra o esquecimento.

---

# Invariante de Continuidade Cognitiva

A organização não deverá reaprender do zero a mesma fragilidade a cada Incidente.

---

# Causalidade como Modelo, não História Bonita

Uma explicação causal deverá ajudar a prever:

> Em quais condições isso poderá acontecer novamente?

> O que mudaria essa probabilidade?

> Quais controles limitariam o impacto?

---

# Invariante de Causalidade Operacionalmente Útil

Uma boa explicação deverá melhorar decisão futura.

---

# A Melhor Root Cause Pode Ser uma Pergunta Melhor

Em sistemas complexos...

perguntar:

> Qual foi a causa raiz?

poderá ser menos útil do que perguntar:

> Quais condições tornaram esse resultado possível?

---

# Invariante de Investigação sem Reducionismo

OPS deverá buscar explicações suficientemente profundas...

Sem exigir uma falsa origem única.

---

# Correção não é Aprendizado Completo

Uma equipe poderá corrigir o componente...

e ainda perder a oportunidade de aprender o padrão.

---

# Exemplo

Corrigir:

`POOL DO SERVICO A`

é útil.

Aprender:

`RECURSOS COMPARTILHADOS PRECISAM DE ISOLAMENTO`

pode proteger toda a Plataforma.

---

# Invariante de Generalização do Aprendizado

Sempre que apropriado...

a organização deverá perguntar:

> Onde mais essa condição pode existir?

---

# Problema como Sensor de Arquitetura

Problem Records revelam onde o sistema real diverge de suas intenções.

---

# Exemplos

Arquitetura diz:

> Temos redundância.

Problema revela:

> O failover não funciona sob carga.

Arquitetura diz:

> Serviços são independentes.

Problema revela:

> Todos dependem da mesma quota compartilhada.

---

# Invariante de Realidade sobre Modelo

Evidência operacional deverá poder corrigir a arquitetura documentada.

---

# Problem Management como Redução de Surpresa

Nem toda falha poderá ser eliminada.

Mas uma organização poderá reduzir:

- falhas desconhecidas;
- respostas improvisadas;
- recorrências evitáveis;
- impacto inesperado.

---

# Invariante de Surpresa Reduzível

Conhecimento acumulado deverá tornar comportamentos futuros mais compreensíveis e administráveis.

---

# Da Reação para a Antecipação

A evolução desejada é:

`FALHOU`

↓

`ENTENDEMOS`

↓

`CORRIGIMOS`

↓

`RECONHECEMOS PADROES`

↓

`ENCONTRAMOS ANTES`

↓

`PREVENIMOS`

---

# Invariante de Evolução Preventiva

Problem Management maduro deverá deslocar parte do aprendizado de depois do impacto para antes dele.

---

# Princípio Final

Problemas, Causa Raiz e Recorrência representam a capacidade permanente da Plataforma UNO de transformar experiência operacional em compreensão estrutural e redução de risco.

Um Problem Record deverá permitir que a organização responda:

> Qual fragilidade existe?

> Como sabemos que ela existe?

> Quais Incidentes estão relacionados?

> Isso já aconteceu antes?

> Qual é o padrão?

> O que sabemos sobre a causa?

> O que ainda é hipótese?

> Quais fatores aumentam probabilidade ou impacto?

> Existe Known Error?

> Existe Workaround?

> Qual risco permanece?

> O que precisa mudar?

> Quem responde pelo tratamento?

> A correção realmente funcionou?

> A condição reapareceu?

> Onde mais esse padrão pode existir?

---

# Conclusão

A Engenharia Oficial estabelece Problemas, Causa Raiz e Recorrência como capacidade central de OPS.

Quando Incidentes terminam...

Problemas preservam suas perguntas.

Quando sintomas se repetem...

recorrência revela padrões.

Quando explicações competem...

Evidências disciplinam causalidade.

Quando causas são conhecidas...

tratamentos reduzem exposição.

Quando causas permanecem desconhecidas...

Workarounds e controles ainda podem reduzir risco.

Quando correções são implementadas...

validação verifica resultado.

Quando padrões atravessam componentes...

a organização aprende sistemicamente.

Quando o conhecimento persiste...

Incidentes futuros deixam de começar do zero.

---

OPS deverá permitir que Problemas sejam:

- identificados;
- relacionados;
- priorizados;
- investigados;
- explicados sem falsa certeza;
- tratados proporcionalmente;
- relacionados a Known Errors;
- mitigados por Workarounds;
- corrigidos por Mudanças governadas;
- validados;
- reabertos quando necessário;
- transformados em memória institucional.

---

Onde houver recorrência...

Deverá existir a possibilidade de reconhecer padrão.

Onde houver padrão...

Deverá existir investigação.

Onde houver hipótese...

Deverá existir Evidência.

Onde houver causa...

Deverá existir explicabilidade.

Onde houver fragilidade...

Deverá existir risco.

Onde houver risco...

Deverá existir decisão.

Onde houver tratamento...

Deverá existir validação.

Onde houver correção...

Deverá existir observação.

Onde houver recorrência posterior...

Deverá existir revisão.

Onde houver aprendizado local...

Deverá existir possibilidade de generalização.

E onde a Plataforma UNO conseguir transformar Incidentes, Near Misses, fragilidades, recorrências e Evidências em conhecimento capaz de alterar o comportamento futuro do sistema...

Existirá **Problem Management**.

---

# Encerramento do Arquivo 011

Com este documento...

o V08 estabelece:

- Problema;
- Problem Record;
- lifecycle;
- ownership;
- recorrência;
- assinatura de recorrência;
- clusters;
- causalidade;
- hipóteses;
- Root Cause;
- fatores contribuintes;
- condições latentes;
- Five Whys;
- Fault Trees;
- Grafos Causais;
- análise temporal;
- análise de Mudanças;
- análise de Dependências;
- fatores humanos;
- fatores organizacionais;
- fatores arquiteturais;
- força de Evidência;
- confiança causal;
- experimentação;
- Known Errors;
- Workarounds;
- tratamento estrutural;
- ações corretivas e preventivas;
- risco residual;
- aceitação de risco;
- dívida operacional;
- validação;
- regressão;
- reabertura;
- memória causal;
- padrões sistêmicos;
- análise agregada;
- aprendizado federado;
- Agentes Cognitivos;
- maturidade de Problem Management.

A partir daqui...

o Volume deverá sair da pergunta:

> O que precisamos compreender e tratar estruturalmente?

E avançar para:

> Como alteramos a operação de forma controlada sem introduzir risco desnecessário?

Essa será a responsabilidade de:

**012 — Mudanças Operacionais e Controle de Risco.**

---

**Fim do arquivo `011-problemas-causa-raiz-e-recorrencia.md`.**
