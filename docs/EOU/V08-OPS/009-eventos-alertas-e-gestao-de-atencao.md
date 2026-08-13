# V08 — OPS

# 009 — Eventos, Alertas e Gestão de Atenção

## Engenharia Oficial da Plataforma UNO

---

# Introdução

Uma operação pode perceber corretamente que algo mudou...

E ainda assim falhar.

Pode possuir Sinais.

Pode possuir Evidências.

Pode reconhecer degradação.

Pode calcular Saúde.

Pode até compreender que determinada condição exige atenção.

Mas permanece uma pergunta fundamental:

> Como essa necessidade de atenção se transforma em resposta operacional?

Essa é a responsabilidade deste arquivo.

O `008 — Saúde Operacional e Gestão de Sinais` estabeleceu a transformação:

`REALIDADE`

↓

`SINAIS`

↓

`EVIDENCIAS`

↓

`SAUDE`

↓

`NECESSIDADE DE ATENCAO`

O presente documento começa exatamente nesse ponto.

---

# Da Percepção para a Mobilização

Perceber não é mobilizar.

Uma condição poderá ser conhecida pela Plataforma...

Sem que nenhuma pessoa precise ser interrompida.

Outra poderá exigir acompanhamento.

Outra poderá exigir ação imediata.

Outra poderá exigir coordenação entre múltiplas equipes.

Outra poderá ser resolvida automaticamente antes mesmo de alcançar um Operador.

Assim...

OPS deverá possuir mecanismos capazes de transformar condições operacionais em atenção organizada.

---

# O Espaço de Atenção Operacional

A Plataforma UNO deverá compreender a atenção como um espaço operacional próprio.

Nesse espaço poderão existir:

- Eventos;
- condições;
- Alertas;
- notificações;
- reconhecimentos;
- responsáveis;
- escalonamentos;
- ações;
- resoluções;
- Incidentes.

Esses objetos estão relacionados...

Mas não deverão ser confundidos.

---

# Invariante de Separação Operacional

OPS deverá preservar distinção suficiente entre:

`EVENTO`

`SINAL`

`CONDICAO`

`ALERTA`

`NOTIFICACAO`

`INCIDENTE`

`ACAO`

Cada um representa responsabilidade diferente.

---

# O Evento Operacional

Um Evento Operacional representa uma ocorrência relevante dentro da realidade operacional.

Ele responde principalmente:

> O que aconteceu?

---

# Exemplos de Eventos

`SERVICO_INICIADO`

`DEPLOY_CONCLUIDO`

`FAILOVER_EXECUTADO`

`BACKUP_FINALIZADO`

`CERTIFICADO_RENOVADO`

`DEPENDENCIA_INDISPONIVEL`

`OPERADOR_ASSUMIU_PLANTAO`

`CONFIGURACAO_ALTERADA`

---

# Evento não é Necessariamente Problema

Um Evento poderá representar:

- mudança;
- transição;
- conclusão;
- início;
- recuperação;
- falha;
- ação humana;
- ação automática;
- acontecimento externo.

Portanto...

Evento não deverá ser tratado automaticamente como anomalia.

---

# Invariante de Neutralidade do Evento

A existência de um Evento não deverá implicar, por si só, degradação ou necessidade de atenção.

---

# Evento e Sinal

Um Evento poderá produzir Sinais.

Um Sinal poderá indicar que determinado Evento ocorreu.

Mas os conceitos permanecem diferentes.

---

# Exemplo

Evento:

`DEPLOY_REALIZADO`

Sinais posteriores:

`LATENCIA +80%`

`ERRO +12%`

`SATURACAO CRESCENTE`

O deploy representa um acontecimento.

As métricas representam observações.

A correlação entre ambos poderá formar uma hipótese operacional.

---

# Invariante Evento ↔ Evidência

OPS deverá preservar a diferença entre aquilo que ocorreu e as Evidências utilizadas para interpretar suas consequências.

---

# Evento Esperado

Alguns Eventos fazem parte do comportamento normal.

Por exemplo:

`JOB_DIARIO_INICIADO`

---

# Evento Inesperado

Outros poderão não fazer parte da expectativa atual.

Por exemplo:

`FAILOVER_NAO_PLANEJADO`

---

# Ausência de Evento Esperado

Também poderá existir significado operacional quando um Evento esperado não acontece.

Por exemplo:

Esperado:

`BACKUP_CONCLUIDO`

até:

`03:00`

Observado:

`EVENTO AUSENTE`

Nesse caso...

a ausência poderá originar uma condição operacional.

---

# Invariante de Expectativa de Evento

OPS deverá poder interpretar tanto a ocorrência quanto a ausência de Eventos quando existir expectativa operacional conhecida.

---

# Evento Composto

Uma ocorrência operacional poderá ser derivada da combinação de múltiplas Evidências.

Por exemplo:

`DEGRADACAO_DE_SERVICO_DETECTADA`

poderá ser produzida a partir de:

`LATENCIA`

+

`ERROS`

+

`HEALTHCHECK`

+

`RELATOS DE CONSUMIDORES`

---

# Evento Derivado

Quando um Evento for inferido ou calculado...

Sua Proveniência deverá permanecer acessível.

---

# Invariante de Proveniência do Evento

OPS deverá conseguir distinguir Eventos:

- observados diretamente;
- declarados;
- recebidos externamente;
- calculados;
- inferidos.

---

# Anatomia Conceitual de um Evento

Um Evento poderá possuir:

- identidade;
- tipo;
- origem;
- elemento relacionado;
- momento de ocorrência;
- momento de recebimento;
- escopo;
- Severidade quando aplicável;
- Proveniência;
- Evidências;
- contexto;
- correlação.

---

# Identidade do Evento

Eventos relevantes deverão possuir identidade suficiente para permitir:

- deduplicação;
- correlação;
- atualização;
- rastreamento;
- referência.

---

# Temporalidade do Evento

Um Evento poderá possuir diferentes momentos.

Por exemplo:

`OCORREU_EM`

`EMITIDO_EM`

`RECEBIDO_EM`

`PROCESSADO_EM`

Essas diferenças poderão ser importantes em sistemas distribuídos.

---

# Invariante de Temporalidade Preservada

OPS deverá evitar reconstruir incorretamente uma Linha do Tempo apenas pela ordem em que Eventos foram recebidos.

---

# Escopo do Evento

Todo Evento relevante deverá possuir contexto suficiente para responder:

> Onde isso aconteceu?

O escopo poderá representar:

- recurso;
- componente;
- Serviço;
- Capacidade;
- região;
- organização;
- consumidor;
- Missão;
- ambiente.

---

# Evento sem Contexto

Um Evento como:

`TIMEOUT`

possui pouco valor isoladamente.

Mas:

`TIMEOUT`

em:

`SERVICO_DE_IDENTIDADE`

na:

`REGIAO_B`

afetando:

`ORGANIZACAO_X`

durante:

`MISSAO_CRITICA`

possui significado muito diferente.

---

# Invariante de Contextualização do Evento

Eventos operacionalmente relevantes deverão poder ser relacionados ao Grafo Operacional.

---

# Evento Interno

Produzido por elemento pertencente à própria Plataforma ou organização.

---

# Evento Externo

Produzido por:

- Provider;
- organização federada;
- sistema parceiro;
- fonte externa.

---

# Evento Humano

Produzido por ação ou declaração humana.

Exemplo:

`OPERADOR_DECLAROU_CONTINGENCIA`

---

# Evento de Agente

Produzido por Agente.

Exemplo:

`AGENTE_IDENTIFICOU_PADRAO_ANOMALO`

---

# Invariante de Origem Epistemológica

Eventos produzidos por inferência cognitiva não deverão ser apresentados como fatos observados sem distinção adequada.

---

# Evento de Mudança

Mudanças operacionais deverão poder produzir Eventos.

Por exemplo:

`DEPLOY`

`CONFIG_CHANGE`

`FEATURE_FLAG_CHANGED`

`ROTA_ALTERADA`

`ESCALA_MODIFICADA`

---

# Mudança como Contexto Operacional

Quando uma degradação começa após determinada Mudança...

OPS poderá elevar a relevância dessa relação.

Entretanto...

não deverá declarar causalidade automaticamente.

---

# Invariante de Mudança não Causal

Proximidade temporal entre Mudança e degradação deverá produzir contexto investigativo...

Não conclusão causal automática.

---

# Evento de Recuperação

Recuperações também são Eventos.

Exemplo:

`DEPENDENCIA_RECUPERADA`

`FAILOVER_CONCLUIDO`

`SERVICO_ESTABILIZADO`

---

# Recuperação não é Encerramento Automático

Um Evento de recuperação poderá contribuir para resolver determinada condição.

Mas OPS poderá exigir:

- estabilidade;
- Evidência funcional;
- janela de observação;
- confirmação.

---

# Invariante de Recuperação Evidenciada

Um Evento positivo isolado não deverá necessariamente encerrar atenção operacional.

---

# Do Evento à Condição

Eventos poderão contribuir para formar uma:

**Condição Operacional.**

Uma Condição responde:

> O que essa realidade significa operacionalmente neste momento?

---

# Exemplo

Eventos:

`REPLICA_A_INDISPONIVEL`

`FAILOVER_EXECUTADO`

`REPLICA_B_ASSUMIU`

Condição:

`FUNCAO = DISPONIVEL`

`REDUNDANCIA = REDUZIDA`

---

# Outro Exemplo

Evento:

`CERTIFICADO_EXPIRA_EM_24H`

Condição:

`SAUDE_ATUAL = SAUDAVEL`

`RISCO_TEMPORAL = ALTO`

---

# Invariante Evento ↔ Condição

OPS não deverá exigir relação um-para-um entre Evento e Condição.

Múltiplos Eventos poderão sustentar uma Condição.

Um Evento poderá participar de múltiplas interpretações.

---

# Da Condição ao Alerta

Uma Condição torna-se candidata a Alerta quando existe necessidade suficiente de atenção.

O Alerta responde:

> Alguém ou alguma capacidade de resposta precisa prestar atenção nisso?

---

# O Alerta Operacional

Um Alerta representa uma solicitação estruturada de atenção produzida a partir de uma condição operacional relevante.

---

# Invariante de Intencionalidade do Alerta

Um Alerta deverá existir porque existe alguma razão operacional para direcionar atenção.

Não apenas porque um Sinal mudou.

---

# Alerta não é Evento

Evento:

> Algo aconteceu.

Alerta:

> Isso merece atenção.

---

# Alerta não é Notificação

Alerta representa o objeto operacional.

Notificação representa uma forma de comunicar esse objeto.

---

# Exemplo

Um único Alerta:

`SERVICO_DE_PAGAMENTO_DEGRADADO`

poderá produzir:

- mensagem para Operador;
- atualização em interface;
- push;
- chamada para sistema externo;
- escalonamento posterior.

Essas comunicações não deverão ser tratadas como Alertas independentes.

---

# Invariante Alerta ↔ Notificação

A multiplicação de canais não deverá multiplicar artificialmente a identidade da condição operacional.

---

# Alerta não é Incidente

Um Alerta poderá:

- ser reconhecido;
- ser investigado;
- ser resolvido automaticamente;
- ser considerado falso positivo;
- permanecer apenas como atenção;
- originar Incidente.

---

# Invariante de Escalada Semântica

OPS não deverá transformar automaticamente todo Alerta em Incidente.

---

# Por que o Alerta Existe

Um Alerta poderá existir porque determinada condição:

- exige ação;
- exige investigação;
- exige acompanhamento;
- ameaça margem;
- possui risco temporal;
- apresenta impacto;
- apresenta incerteza relevante;
- não foi resolvida automaticamente.

---

# Alerta Acionável

Um Alerta Acionável representa condição para a qual existe expectativa concreta de resposta.

---

# Pergunta de Acionabilidade

Antes de utilizar canal interruptivo...

OPS deverá buscar responder:

> O que esperamos que o destinatário faça?

---

# Invariante de Acionabilidade

Alertas interruptivos deverão possuir expectativa operacional razoavelmente clara.

---

# Alerta Informativo

Algumas condições poderão merecer visibilidade...

Sem exigir interrupção.

Por exemplo:

`REDUNDANCIA_REDUZIDA`

em Capacidade secundária durante horário de baixa utilização.

Isso poderá permanecer:

`ATENCAO`

sem gerar paging imediato.

---

# Informação não Deve Fingir Urgência

Se nenhuma ação imediata é necessária...

OPS deverá evitar utilizar mecanismos que comuniquem urgência artificial.

---

# Invariante de Proporcionalidade do Canal

A intensidade da comunicação deverá ser proporcional à necessidade real de resposta.

---

# Ciclo de Vida do Alerta

Um Alerta não deverá ser tratado como mensagem descartável.

Ele possui ciclo de vida.

Conceitualmente:

`DETECTADO`

↓

`ABERTO`

↓

`ROTEADO`

↓

`NOTIFICADO`

↓

`RECONHECIDO`

↓

`EM_TRATAMENTO`

↓

`MITIGADO`

↓

`RESOLVIDO`

Nem todos os Alertas precisarão passar por todas essas etapas.

---

# Estado Detectado

A condição foi identificada.

---

# Estado Aberto

O objeto Alerta foi criado e permanece ativo.

---

# Estado Roteado

Foi determinada a responsabilidade inicial.

---

# Estado Notificado

Uma ou mais comunicações foram enviadas.

---

# Estado Reconhecido

Um responsável indicou que assumiu atenção.

---

# Estado em Tratamento

Existe resposta ativa em andamento.

---

# Estado Mitigado

O impacto ou risco foi reduzido...

Mas a condição poderá não estar completamente resolvida.

---

# Estado Resolvido

A condição que justificava o Alerta deixou de exigir atenção ativa.

---

# Invariante de Estado Semântico

Os Estados do Alerta deverão representar significado operacional...

Não apenas etapas de interface.

---

# Reconhecimento

Reconhecer um Alerta significa:

> A atenção foi recebida e alguém ou alguma capacidade assumiu responsabilidade por avaliá-la.

---

# Reconhecimento não é Resolução

`ACKNOWLEDGED`

não significa:

`RESOLVED`

---

# Invariante de ACK

Reconhecimento deverá reduzir incerteza sobre ownership...

Não apagar a condição.

---

# Quem Pode Reconhecer

Dependendo da política...

um Alerta poderá ser reconhecido por:

- Operador;
- equipe;
- Agente;
- Automação;
- sistema federado.

---

# Reconhecimento Automático

Uma Automação poderá assumir determinado Alerta quando possuir responsabilidade explícita de resposta.

---

# Invariante de Ownership Real

OPS não deverá marcar um Alerta como adequadamente reconhecido apenas porque algum processo técnico o recebeu.

Reconhecimento deverá representar responsabilidade efetiva.

---

# Ownership do Alerta

Todo Alerta relevante deverá possuir caminho para determinar:

> Quem é responsável por responder agora?

Essa responsabilidade poderá ser temporária.

---

# Owner Estrutural

Representa quem possui responsabilidade permanente sobre o Serviço ou Capacidade.

---

# Owner Operacional

Representa quem está responsável pela resposta naquele momento.

---

# Invariante de Separação de Ownership

Ownership estrutural e ownership temporário de resposta deverão poder ser diferentes.

---

# Exemplo

O Serviço pertence à:

`EQUIPE_A`

Mas durante um Incidente...

o Alerta poderá estar sob responsabilidade operacional de:

`INCIDENT_COMMANDER`

ou:

`EQUIPE_DE_CONTINGENCIA`

---

# Alerta Órfão

Um Alerta relevante poderá tornar-se órfão quando:

- não existe Owner;
- roteamento falha;
- ninguém reconhece;
- responsabilidade é ambígua;
- organização destinatária está indisponível.

---

# Invariante de Não Orfandade

Alertas críticos deverão possuir mecanismos capazes de detectar ausência de responsabilidade efetiva.

---

# Roteamento

Roteamento representa a decisão:

> Para onde essa atenção deve ir?

---

# Dimensões de Roteamento

OPS poderá considerar:

- Ownership;
- especialidade;
- Serviço;
- Capacidade;
- região;
- organização;
- horário;
- plantão;
- Criticidade;
- Missão;
- tipo de condição.

---

# Invariante de Roteamento Contextual

O destino de um Alerta deverá ser determinado pelo contexto operacional...

Não apenas por endereço fixo.

---

# Roteamento por Ownership

O Owner do elemento poderá ser o destino inicial.

---

# Roteamento por Plantão

Fora do horário normal...

a responsabilidade poderá pertencer ao Operador de plantão.

---

# Roteamento por Especialidade

Uma condição de:

`DATABASE`

poderá exigir especialista diferente de:

`NETWORK`

---

# Roteamento por Federação

Em uma operação federada...

o elemento afetado poderá pertencer a outra organização.

---

# Invariante de Responsabilidade Federada

OPS deverá conseguir encaminhar atenção através de fronteiras organizacionais sem perder:

- origem;
- contexto;
- Criticidade;
- Evidências;
- responsabilidade.

---

# Roteamento por Missão

Uma condição poderá exigir compartilhamento com CCM quando ameaçar Capacidade necessária para Missão relevante.

---

# OPS não Transfere sua Responsabilidade ao CCM

Compartilhar impacto potencial com CCM não significa que CCM se torna Owner técnico do problema.

---

# Invariante OPS ↔ CCM

OPS deverá encaminhar ao CCM contexto operacional necessário para interpretação missional...

Preservando responsabilidade operacional sobre a condição técnica.

---

# Menor Audiência Suficiente

Enviar um Alerta para todos pode parecer seguro.

Mas cria:

- ruído;
- duplicação;
- ambiguidade;
- difusão de responsabilidade.

---

# Invariante de Audiência

OPS deverá favorecer a menor audiência capaz de responder adequadamente...

Expandindo-a quando impacto ou incerteza justificarem.

---

# Severidade

Severidade representa a intensidade ou magnitude da condição operacional.

---

# Prioridade

Prioridade representa a importância de responder à condição em determinado contexto.

---

# Urgência

Urgência representa quanto tempo a resposta pode esperar.

---

# Impacto

Impacto representa quanto da função está ou poderá estar comprometida.

---

# Criticidade

Criticidade representa a importância estrutural da Capacidade, Serviço ou Missão relacionada.

---

# Esses Conceitos não São Sinônimos

Uma condição poderá possuir:

`SEVERIDADE_TECNICA = ALTA`

`IMPACTO = BAIXO`

`URGENCIA = BAIXA`

porque está isolada.

Outra poderá possuir:

`SEVERIDADE_TECNICA = MODERADA`

`IMPACTO = ALTO`

`URGENCIA = CRITICA`

porque afeta uma função essencial.

---

# Invariante de Prioridade Contextual

A prioridade do Alerta deverá refletir consequência operacional...

Não apenas intensidade técnica.

---

# Modelo Conceitual de Prioridade

Conceitualmente:

`IMPACTO`

+

`URGENCIA`

+

`CRITICIDADE`

+

`CONFIANCA`

+

`MARGEM`

+

`CONTEXTO`

↓

`PRIORIDADE DE ATENCAO`

---

# Prioridade não é Fórmula Universal

Diferentes domínios poderão possuir políticas diferentes.

O importante será preservar significado.

---

# Níveis de Prioridade

OPS poderá utilizar níveis como:

`INFORMATIVO`

`ATENCAO`

`ACIONAVEL`

`URGENTE`

`CRITICO`

A nomenclatura específica poderá variar.

---

# Invariante de Semântica da Prioridade

Todo nível deverá possuir expectativa operacional compreensível.

---

# Prioridade Dinâmica

Um Alerta poderá mudar de prioridade ao longo do tempo.

---

# Exemplo

Inicialmente:

`REDUNDANCIA = REDUZIDA`

`PRIORIDADE = ATENCAO`

Depois:

`SEGUNDA REPLICA = DEGRADADA`

`PRIORIDADE = URGENTE`

Depois:

`FUNCAO = INDISPONIVEL`

`PRIORIDADE = CRITICA`

---

# Invariante de Reavaliação

A prioridade deverá poder acompanhar mudanças em:

- impacto;
- margem;
- Evidência;
- contexto;
- tempo;
- resposta.

---

# Prioridade por Envelhecimento

Uma condição aparentemente pequena poderá tornar-se mais relevante se permanecer sem resolução.

---

# Exemplo

`BACKUP ATRASADO 10 MIN`

poderá ser:

`ATENCAO`

Mas:

`BACKUP AUSENTE POR 48H`

poderá representar risco muito maior.

---

# Invariante de Temporalidade da Atenção

A passagem do tempo poderá alterar a prioridade mesmo sem novo Sinal técnico.

---

# Prioridade por Aproximação de Consequência

Um certificado poderá estar válido.

Mas sua expiração aproxima-se.

Conceitualmente:

`SAUDE = SAUDAVEL`

`TEMPO_PARA_EXPIRACAO = 72H`

↓

`ATENCAO`

Depois:

`TEMPO_PARA_EXPIRACAO = 6H`

↓

`URGENTE`

---

# Alerta Prospectivo

Nem todo Alerta deverá representar dano atual.

Alguns deverão representar risco futuro suficientemente relevante para exigir ação antecipada.

---

# Invariante de Atenção Antecipatória

OPS deverá poder mobilizar resposta antes da perda funcional quando existirem Evidências suficientes de risco.

---

# Alerta Baseado em Saúde

Uma mudança de Saúde poderá originar Alerta.

---

# Alerta Baseado em Risco

Uma condição futura poderá originar Alerta mesmo com Saúde atual adequada.

---

# Alerta Baseado em Ausência

A falta de Evento ou Sinal esperado poderá originar Alerta.

---

# Alerta Baseado em Mudança

Uma Mudança de alto risco poderá exigir acompanhamento.

---

# Alerta Baseado em Incerteza

Uma Capacidade crítica em:

`DESCONHECIDO`

poderá justificar atenção.

---

# Invariante de Múltiplas Origens de Atenção

OPS não deverá reduzir Alertas a simples cruzamento de Thresholds.

---

# Condição de Abertura

Um Alerta deverá possuir critérios suficientes para determinar quando nasce.

---

# Condição de Permanência

Também deverá possuir interpretação sobre quando continua ativo.

---

# Condição de Resolução

E deverá existir fundamento para determinar quando deixa de exigir atenção.

---

# Invariante de Ciclo Completo

Uma política de Alerta não deverá definir apenas como abrir...

Mas também como manter, atualizar e resolver.

---

# Alerta Stateful

Um Alerta deverá poder representar condição persistente ao longo do tempo.

---

# Por que Isso Importa

Sem Estado...

uma condição contínua poderá produzir:

`ALERTA_1`

`ALERTA_2`

`ALERTA_3`

`ALERTA_4`

...

mesmo representando exatamente o mesmo problema.

---

# Invariante de Continuidade

Uma condição contínua deverá poder permanecer como um único contexto operacional atualizado.

---

# Atualização do Alerta

Novas Evidências poderão alterar:

- prioridade;
- impacto;
- escopo;
- hipótese;
- responsável;
- previsão;
- ação recomendada.

Sem necessariamente criar novo Alerta.

---

# Timeline do Alerta

O Alerta poderá possuir Linha do Tempo.

Por exemplo:

`10:03 — ABERTO`

`10:04 — NOTIFICADO`

`10:06 — RECONHECIDO`

`10:09 — PRIORIDADE AUMENTADA`

`10:12 — MITIGACAO INICIADA`

`10:18 — IMPACTO REDUZIDO`

`10:31 — RESOLVIDO`

---

# Invariante de História da Atenção

Alertas relevantes deverão preservar acontecimentos suficientes para reconstruir como a atenção foi administrada.

---

# Notificação

Uma Notificação representa entrega de informação sobre um Alerta ou Evento a determinado destinatário ou superfície.

---

# Notificação não Cria Necessariamente Atenção Nova

O mesmo Alerta poderá gerar várias Notificações.

---

# Canais de Notificação

Poderão incluir:

- interface UNO;
- conversa com Eva;
- dispositivo móvel;
- sistema corporativo;
- canal de equipe;
- integração externa;
- mecanismos de paging;
- canais federados.

---

# Invariante de Canal Abstrato

A semântica do Alerta não deverá depender exclusivamente de um canal específico.

---

# Canal Pode Falhar

Uma mensagem enviada não significa necessariamente:

> A pessoa recebeu.

E recebida não significa:

> A pessoa compreendeu.

E compreendida não significa:

> A pessoa assumiu responsabilidade.

---

# Cadeia de Atenção

Conceitualmente:

`ALERTA`

↓

`ROTEAMENTO`

↓

`NOTIFICACAO`

↓

`ENTREGA`

↓

`RECONHECIMENTO`

↓

`RESPONSABILIDADE`

↓

`RESPOSTA`

---

# Invariante de Não Confusão da Entrega

OPS não deverá tratar entrega técnica da Notificação como confirmação de resposta humana.

---

# Entrega

A infraestrutura poderá confirmar:

`NOTIFICACAO_ENTREGUE`

---

# Leitura

Quando tecnicamente disponível:

`NOTIFICACAO_VISUALIZADA`

---

# Reconhecimento

Representa:

`RESPONSABILIDADE_ASSUMIDA`

Esses Estados possuem significados diferentes.

---

# Falha de Notificação

Uma Notificação poderá falhar devido a:

- canal indisponível;
- endereço inválido;
- dispositivo offline;
- integração degradada;
- permissão;
- limite de envio.

---

# Invariante de Saúde do Canal

Canais críticos de atenção deverão possuir Saúde observável proporcional à sua importância.

---

# Canal Único como Risco

Uma operação crítica dependente de um único mecanismo de notificação poderá possuir fragilidade sistêmica.

---

# Redundância de Atenção

Para condições críticas...

OPS poderá utilizar múltiplos caminhos de comunicação.

---

# Invariante de Redundância Proporcional

A redundância de canais deverá acompanhar a Criticidade da necessidade de atenção.

---

# Escalonamento

Escalonamento representa aumento estruturado da atenção quando a resposta atual não é suficiente.

---

# Motivos de Escalonamento

Um Alerta poderá escalar porque:

- ninguém reconheceu;
- impacto aumentou;
- tempo passou;
- mitigação falhou;
- prioridade aumentou;
- Owner está indisponível;
- escopo expandiu;
- Missão crítica foi afetada.

---

# Invariante de Escalonamento por Necessidade

Escalonar deverá responder a insuficiência de atenção ou aumento de consequência...

Não apenas a cronômetro cego.

---

# Escalonamento Temporal

Exemplo:

`T0`

↓

Operador primário.

`+5 MIN`

↓

Operador secundário.

`+15 MIN`

↓

Coordenação operacional.

`+30 MIN`

↓

Liderança apropriada.

A política dependerá da Criticidade.

---

# Escalonamento por Impacto

Uma condição poderá escalar imediatamente se o impacto crescer.

---

# Escalonamento por Falha de Resposta

Uma tentativa de mitigação malsucedida poderá elevar prioridade.

---

# Escalonamento Organizacional

Uma condição poderá atravessar:

`EQUIPE`

↓

`DOMINIO`

↓

`ORGANIZACAO`

↓

`FEDERACAO`

quando necessário.

---

# Invariante de Escalonamento com Contexto

Cada escalonamento deverá preservar contexto suficiente para evitar que o novo destinatário precise reconstruir toda a situação.

---

# Escalonamento não Deve Reiniciar a Investigação

A atenção poderá mudar de responsável...

Mas a Evidência acumulada deverá acompanhar o contexto.

---

# Invariante de Continuidade Cognitiva

Transferência de responsabilidade não deverá destruir memória operacional da condição.

---

# Handover do Alerta

Responsabilidade poderá ser transferida explicitamente.

---

# Exemplo

`OPERADOR_A`

↓

`OPERADOR_B`

O Handover deverá preservar:

- condição atual;
- ações realizadas;
- hipóteses;
- pendências;
- risco;
- próximos passos.

---

# Invariante de Handover

Transferir atenção deverá significar transferir contexto suficiente para continuar a resposta.

---

# Resolução

Resolver um Alerta significa que a condição deixou de justificar atenção ativa segundo os critérios aplicáveis.

---

# Resolução Automática

Poderá ocorrer quando Evidências demonstram recuperação suficiente.

---

# Resolução Manual

Um Operador autorizado poderá declarar resolução.

---

# Resolução por Expiração

Alguns Alertas informativos ou temporais poderão deixar de ser relevantes após determinada condição.

---

# Invariante de Resolução Fundamentada

Um Alerta não deverá desaparecer apenas porque sua Notificação envelheceu.

---

# Resolvido não Significa Esquecido

A condição poderá permanecer disponível para:

- histórico;
- análise;
- auditoria;
- aprendizado;
- correlação futura.

---

# Invariante de Persistência Institucional

Encerrar atenção ativa não deverá necessariamente eliminar memória operacional.

---

# Reabertura

Uma condição poderá retornar após resolução.

---

# Mesmo Alerta ou Novo Alerta?

A resposta dependerá de:

- intervalo;
- causa;
- continuidade;
- política;
- contexto.

---

# Invariante de Recorrência Identificável

OPS deverá permitir distinguir:

- continuidade;
- reabertura;
- recorrência;
- nova condição independente.

---

# Recorrência

Alertas repetidos sobre a mesma condição poderão revelar problema estrutural.

---

# Exemplo

`QUEUE_SATURATION`

ocorre:

`17 vezes em 30 dias`

Mesmo que cada ocorrência tenha sido resolvida...

o padrão poderá justificar melhoria permanente.

---

# Invariante de Aprendizagem por Recorrência

A resolução individual não deverá impedir percepção de padrões repetitivos.

---

# Da Atenção para a Resposta

O objetivo do Alerta não é produzir Notificação.

É produzir resposta adequada.

---

# Resposta Humana

Um Operador investiga ou age.

---

# Resposta Automatizada

Uma Automação executa ação conhecida.

---

# Resposta Cognitiva

Um Agente analisa Evidências, propõe hipótese ou recomenda ação.

---

# Resposta Coordenada

Múltiplos atores precisam trabalhar juntos.

Nesse ponto...

a condição poderá exigir Incidente.

---

# Invariante de Resposta Proporcional

OPS deverá favorecer o menor mecanismo de resposta capaz de controlar adequadamente a condição.

---

# Nem Todo Alerta Precisa de Humano

Se uma condição possuir Auto-Remediação:

- autorizada;
- segura;
- observável;
- confiável;

OPS poderá tentar resposta automática.

---

# Exemplo

`WORKER_TRAVADO`

↓

Automação reinicia instância.

↓

Healthcheck funcional confirma recuperação.

↓

Alerta resolvido.

↓

Evento preservado para histórico.

---

# Invariante de Automação sem Invisibilidade

Uma condição resolvida automaticamente deverá continuar disponível como Evidência operacional quando relevante.

---

# Falha da Automação

Se a Auto-Remediação falhar...

o contexto deverá ser enriquecido.

Por exemplo:

`CONDICAO = PERSISTENTE`

`AUTO_REMEDIACAO = FALHOU`

`TENTATIVAS = 2`

`PRIORIDADE = AUMENTADA`

---

# Invariante de Escalada após Falha Automática

A falha de uma resposta automática poderá representar nova Evidência sobre gravidade ou complexidade da condição.

---

# Limite entre Alerta e Incidente

Existe um ponto em que atenção individual deixa de ser suficiente.

A condição passa a exigir:

- coordenação;
- papéis;
- comunicação estruturada;
- múltiplas frentes;
- decisão;
- acompanhamento formal.

Nesse momento...

poderá surgir um:

**Incidente.**

---

# Alerta Pode Originar Incidente

Mas a relação não precisa ser:

`1 ALERTA = 1 INCIDENTE`

Um Incidente poderá reunir:

- múltiplos Alertas;
- múltiplos Eventos;
- múltiplos Serviços;
- múltiplas Evidências.

---

# Invariante Alerta ↔ Incidente

Alertas representam necessidades de atenção.

Incidentes representam contextos de coordenação de resposta.

---

# Promoção para Incidente

A criação de Incidente poderá considerar:

- impacto;
- duração;
- complexidade;
- Criticidade;
- número de atores;
- necessidade de coordenação;
- risco de propagação;
- necessidade de comunicação institucional.

---

# Incidente sem Alerta Prévio

Também poderá existir.

Por exemplo...

um Operador ou consumidor identifica impacto grave antes dos mecanismos automáticos.

---

# Invariante de Entrada Humana

OPS deverá permitir declaração de Incidente mesmo quando nenhum Alerta automático tenha sido produzido.

---

# Fronteira com o Arquivo 010

Este arquivo deverá estabelecer como atenção é materializada e administrada.

O arquivo:

`010-incidentes-e-coordenacao-de-resposta.md`

deverá aprofundar o momento em que essa atenção exige coordenação formal.

---

# Formulação Integrada Inicial

Assim...

o modelo estabelecido até aqui poderá ser representado como:

`REALIDADE OPERACIONAL`

↓

`EVENTOS E SINAIS`

↓

`EVIDENCIAS`

↓

`CONDICAO`

↓

`SAUDE / RISCO`

↓

`NECESSIDADE DE ATENCAO`

↓

`ALERTA`

↓

`ROTEAMENTO`

↓

`NOTIFICACAO`

↓

`RECONHECIMENTO`

↓

`RESPOSTA`

↓

`RESOLUCAO`

ou:

`INCIDENTE`

quando coordenação ampliada for necessária.

---

# Princípio Inicial da Gestão de Atenção

O objetivo de OPS não deverá ser fazer com que toda anomalia seja percebida por uma pessoa.

Deverá ser garantir que:

> Toda condição que realmente exige atenção encontre a capacidade adequada de resposta, no tempo necessário, com contexto suficiente para agir.

---

# Próxima Dimensão

Com Evento, Alerta, Notificação, Ownership, Prioridade, Roteamento, Escalonamento e ciclo de vida estabelecidos...

o próximo lote deverá aprofundar:

- políticas de Alerta;
- regras de abertura e resolução;
- deduplicação;
- agrupamento;
- correlação;
- Alert Storms;
- supressão;
- silenciamento;
- janelas de manutenção;
- rate limiting;
- canais;
- políticas de entrega;
- escalas de plantão;
- escalonamento avançado;
- acknowledgements;
- timeout de responsabilidade;
- qualidade e eficácia dos Alertas;
- fadiga operacional;
- SLOs da própria Gestão de Atenção.

---

# Políticas de Alerta

Um Alerta não deverá existir apenas porque determinada Regra foi tecnicamente configurada.

Ele deverá existir dentro de uma Política de Atenção compreensível.

Essa Política deverá responder:

> Quando devemos abrir atenção?

> Quando devemos mantê-la?

> Quando devemos aumentá-la?

> Quando devemos reduzi-la?

> Quando devemos encerrá-la?

> Quem deve recebê-la?

> Por qual canal?

> Com qual contexto?

---

# Política de Alerta

Uma Política de Alerta representa o conjunto de critérios que transforma uma Condição Operacional em atenção administrável.

Ela poderá incluir:

- condição de abertura;
- condição de permanência;
- condição de atualização;
- condição de escalonamento;
- condição de supressão;
- condição de resolução;
- roteamento;
- canais;
- prioridade;
- ownership;
- temporização.

---

# Invariante de Política Completa

Uma Política de Alerta não deverá definir apenas como abrir atenção.

Deverá também definir como essa atenção evolui e termina.

---

# Condição de Abertura

A Condição de Abertura representa o conjunto mínimo de critérios necessários para criar um Alerta.

---

# Abertura Imediata

Algumas condições poderão abrir atenção imediatamente.

Exemplo:

`AUTENTICACAO = INDISPONIVEL`

em Serviço crítico.

---

# Abertura após Persistência

Outras poderão exigir permanência.

Exemplo:

`LATENCIA > LIMITE`

por:

`5 MINUTOS`

---

# Abertura por Tendência

Uma condição poderá abrir atenção antes de ultrapassar limite.

Exemplo:

`DISCO = 78%`

mas:

`CRESCIMENTO = 4% POR HORA`

---

# Abertura por Ausência

Poderá ocorrer quando algo esperado não acontece.

Exemplo:

`BACKUP_CONCLUIDO`

não recebido até:

`03:30`

---

# Abertura por Composição

Múltiplas Evidências poderão ser necessárias.

Exemplo:

`LATENCIA ALTA`

+

`ERROS ELEVADOS`

+

`SERVICO CRITICO`

↓

`ALERTA`

---

# Invariante de Abertura Explicável

OPS deverá permitir compreender quais critérios provocaram a abertura do Alerta.

---

# Condição de Permanência

Depois de aberto...

um Alerta deverá permanecer enquanto sua condição operacional continuar relevante.

---

# Permanência por Estado

O Alerta permanece enquanto:

`SAUDE != SAUDAVEL`

---

# Permanência por Risco

A Saúde pode retornar ao normal...

Mas o risco pode continuar.

Exemplo:

certificado renovado parcialmente.

---

# Permanência por Validação

A condição técnica pode parecer resolvida...

Mas OPS ainda aguarda confirmação funcional.

---

# Invariante de Permanência Fundamentada

Um Alerta não deverá permanecer apenas por inércia da ferramenta.

---

# Condição de Atualização

O Alerta deverá poder absorver novas Evidências.

---

# Atualização sem Nova Identidade

Quando a condição continuar sendo a mesma...

OPS deverá favorecer atualização do contexto existente.

---

# Exemplo

Inicialmente:

`IMPACTO = 1 REGIAO`

Depois:

`IMPACTO = 3 REGIOES`

O Alerta pode continuar o mesmo...

Com escopo ampliado.

---

# Invariante de Continuidade Contextual

Uma condição contínua deverá preservar identidade suficiente para evitar fragmentação da atenção.

---

# Condição de Resolução

A Política deverá estabelecer quando a atenção deixa de ser necessária.

---

# Resolução por Recuperação

A função retorna à condição adequada.

---

# Resolução por Mitigação Permanente

O risco que justificava o Alerta foi eliminado.

---

# Resolução por Mudança de Contexto

Uma condição pode deixar de ser relevante porque:

- Serviço foi retirado;
- Missão terminou;
- manutenção encerrou;
- exposição desapareceu.

---

# Invariante de Resolução com Evidência

OPS deverá evitar resolver Alertas sem fundamento suficiente.

---

# Resolução e Estabilidade

A Política poderá exigir janela de estabilidade.

Exemplo:

`ERROS < 1%`

por:

`15 MINUTOS`

antes de resolver.

---

# Invariante de Recuperação Sustentada

O primeiro Sinal positivo não deverá necessariamente encerrar atenção.

---

# Auto-Resolução

Alguns Alertas poderão resolver automaticamente.

Isso poderá ocorrer quando:

- Estado retorna ao normal;
- condição temporal deixa de existir;
- Auto-Remediação é confirmada.

---

# Auto-Resolução não é Silêncio

A resolução automática deverá permanecer registrada quando relevante.

---

# Invariante de Resolução Observável

OPS deverá preservar:

- quando resolveu;
- por qual Evidência;
- se houve ação;
- se houve intervenção humana.

---

# Alertas Sticky

Alguns Alertas poderão permanecer abertos mesmo após recuperação automática.

Isso poderá ser desejável quando:

- recorrência é frequente;
- impacto foi alto;
- investigação é necessária;
- recuperação ainda não está confiável.

---

# Invariante de Persistência Proporcional

A decisão de manter um Alerta após recuperação deverá possuir motivo operacional.

---

# Deduplicação de Alertas

A mesma condição poderá ser detectada repetidamente.

Sem deduplicação...

OPS poderá criar múltiplos objetos para a mesma necessidade de atenção.

---

# Identidade de Correlação

OPS poderá utilizar uma chave conceitual de correlação baseada em:

- tipo;
- elemento;
- escopo;
- condição;
- janela temporal;
- causa provável.

---

# Exemplo

Eventos:

`API_TIMEOUT_1`

`API_TIMEOUT_2`

`API_TIMEOUT_3`

podem alimentar:

`ALERTA = API_X_DEGRADADA`

em vez de três Alertas independentes.

---

# Invariante de Deduplicação Semântica

A deduplicação deverá considerar significado operacional...

Não apenas igualdade de texto.

---

# Deduplicação por Origem

Sinais repetidos do mesmo componente poderão formar um único Alerta.

---

# Deduplicação por Topologia

Alertas de múltiplos Serviços poderão compartilhar uma Dependência comum.

---

# Deduplicação por Incidente

Quando um Incidente já está aberto...

novos Alertas relacionados poderão ser anexados ao contexto existente.

---

# Invariante de Não Perda de Escopo

Deduplicar não deverá ocultar expansão relevante do impacto.

---

# Agrupamento

Alguns Alertas deverão permanecer distintos...

Mas poderão ser apresentados como grupo.

---

# Grupo de Alertas

Um Grupo poderá representar:

- mesma região;
- mesmo Provider;
- mesma Mudança;
- mesma Capacidade;
- mesma janela temporal.

---

# Diferença entre Deduplicar e Agrupar

Deduplicar significa:

> Estes objetos representam essencialmente a mesma condição.

Agrupar significa:

> Estes objetos são diferentes, mas possuem contexto comum.

---

# Invariante de Separação Deduplicação ↔ Agrupamento

OPS deverá preservar essa diferença.

---

# Correlação de Alertas

Alertas poderão possuir relações.

Por exemplo:

`ALERTA_A`

`CAUSADO_POR?`

`ALERTA_B`

ou:

`ALERTA_A`

`RELACIONADO_A`

`ALERTA_B`

---

# Relação Causal Não Confirmada

A relação poderá ser expressa como hipótese.

---

# Invariante de Causalidade Graduada

OPS deverá permitir graus de confiança em relações causais.

---

# Root Alert

Um Alerta poderá ser considerado provável origem de vários sintomas.

---

# Symptom Alert

Outro poderá representar consequência observada.

---

# Exemplo

`ROOT`

`DATABASE_CONNECTION_POOL_EXHAUSTED`

Relacionados:

`API_LATENCY_HIGH`

`JOB_FAILURE`

`QUEUE_BACKLOG`

---

# Invariante de Root Alert Revisável

A classificação como origem provável deverá poder mudar diante de novas Evidências.

---

# Alert Storm

Uma condição ampla poderá gerar grande volume de Alertas em curto período.

---

# Causas de Alert Storm

Podem incluir:

- falha comum;
- dependência compartilhada;
- regra mal configurada;
- retry storm;
- perda de observabilidade;
- mudança em larga escala.

---

# Efeito do Alert Storm

Pode produzir:

- sobrecarga humana;
- saturação de canais;
- atraso de resposta;
- perda de contexto;
- escalonamento excessivo.

---

# Invariante de Proteção contra Tempestade

OPS deverá possuir mecanismos para evitar que o volume de Alertas comprometa a resposta à condição principal.

---

# Storm Control

Poderá incluir:

- deduplicação;
- agrupamento;
- rate limiting;
- supressão contextual;
- roteamento prioritário;
- compressão.

---

# Rate Limiting

O sistema poderá limitar a quantidade de Notificações em determinado período.

---

# Rate Limit não Deve Ocultar Escalada

Mesmo com limite...

uma condição que aumenta de impacto deverá poder romper a compressão quando necessário.

---

# Invariante de Prioridade sobre Volume

Informação crítica deverá possuir caminho para superar mecanismos de redução de ruído.

---

# Supressão

Supressão representa impedir que determinado Alerta gere nova atenção sob condição conhecida.

---

# Supressão por Causa Raiz

Se uma Dependência já está reconhecidamente indisponível...

Alertas de sintomas poderão ser suprimidos do canal interruptivo.

---

# Supressão por Incidente

Alertas relacionados a Incidente ativo poderão ser anexados ao contexto.

---

# Supressão por Mudança

Durante atividade conhecida...

determinadas condições poderão ser esperadas.

---

# Supressão por Dependência de Canal

Uma notificação poderá ser suprimida em canal secundário quando canal primário já possui confirmação de ownership.

---

# Invariante de Supressão Temporária

Supressões deverão possuir:

- motivo;
- escopo;
- autoridade;
- duração.

---

# Supressão Não Remove Evidência

O Alerta poderá continuar existindo.

Apenas sua capacidade de interromper é alterada.

---

# Invariante de Evidência Preservada

Redução de atenção não deverá destruir contexto histórico.

---

# Silenciamento

Silenciamento representa decisão explícita de não notificar determinada condição por período ou contexto.

---

# Motivos Legítimos

Podem incluir:

- manutenção;
- teste;
- condição conhecida;
- ambiente não crítico;
- atividade planejada.

---

# Silenciamento não é Correção

Silenciar um Alerta ruim não resolve sua Política.

---

# Invariante de Não Uso do Silêncio como Dívida Permanente

Alertas frequentemente silenciados deverão ser candidatos a revisão.

---

# Expiração do Silenciamento

Todo silenciamento temporário deverá possuir:

- fim temporal;
- fim por Evento;
- ou condição de revalidação.

---

# Janela de Manutenção

Uma Janela de Manutenção representa período em que determinadas Mudanças e comportamentos são esperados.

---

# Manutenção não Desliga OPS

Mesmo durante manutenção...

a operação deverá continuar observando:

- impacto real;
- desvios do esperado;
- condições de segurança;
- possibilidade de rollback.

---

# Invariante de Manutenção Observada

OPS não deverá ficar cego justamente durante Mudanças de maior risco.

---

# Impacto Esperado

Uma manutenção poderá declarar:

`INSTANCIA_A = INDISPONIVEL`

como esperado.

Mas não:

`TODAS_AS_REGIOES = INDISPONIVEIS`

---

# Invariante de Limite da Manutenção

A Política deverá distinguir impacto planejado de impacto inesperado.

---

# Maintenance Suppression

Alertas esperados poderão ser silenciados seletivamente.

---

# Sinais Fora do Perfil

Condições não previstas deverão continuar capazes de gerar atenção.

---

# Invariante de Janela não Absoluta

Uma Janela de Manutenção não deverá justificar supressão indiscriminada.

---

# Políticas de Canal

Nem todo Alerta deverá utilizar o mesmo canal.

---

# Canal Passivo

Exemplo:

Painel.

Adequado para:

- informação;
- acompanhamento;
- baixa urgência.

---

# Canal Assíncrono

Exemplo:

mensagem.

Adequado para:

- ação não imediata;
- contexto rico.

---

# Canal Interruptivo

Exemplo:

paging.

Adequado para:

- urgência;
- impacto crítico;
- responsabilidade imediata.

---

# Invariante de Canal Proporcional

A intensidade do canal deverá acompanhar a necessidade operacional.

---

# Canal Redundante

Condições críticas poderão utilizar múltiplos meios.

---

# Canal Escalonado

Uma Política poderá começar em canal menos intrusivo...

E aumentar intensidade se não houver resposta.

---

# Exemplo

`T0`

Painel + mensagem.

`+10 MIN sem ACK`

Paging.

`+20 MIN`

Canal secundário.

---

# Invariante de Escalada de Canal

A intensidade deverá poder aumentar quando a atenção inicial não for suficiente.

---

# Políticas de Entrega

Notificações também deverão possuir política.

---

# Entrega Best Effort

Pode ser suficiente para informações não críticas.

---

# Entrega Confirmada

Poderá exigir confirmação técnica do canal.

---

# Entrega com ACK

Poderá exigir reconhecimento de responsabilidade.

---

# Invariante de Garantia de Entrega Proporcional

Quanto maior a Criticidade...

Maior poderá ser a necessidade de confirmação da cadeia de atenção.

---

# Tentativas de Entrega

Se uma Notificação falhar...

o sistema poderá tentar novamente.

---

# Retry de Notificação

Retries deverão considerar:

- canal;
- urgência;
- duplicação;
- fadiga;
- timeout.

---

# Invariante de Retry sem Spam

Repetir uma Notificação não deverá transformar falha de entrega em tempestade de mensagens.

---

# Fallback de Canal

Se determinado canal estiver indisponível...

OPS poderá utilizar alternativa.

---

# Exemplo

`CANAL_PRIMARIO = INDISPONIVEL`

↓

`CANAL_SECUNDARIO`

---

# Invariante de Continuidade da Atenção

Condições críticas não deverão depender de um único caminho de entrega quando risco justificar redundância.

---

# Saúde do Sistema de Alertas

A própria Gestão de Atenção deverá possuir Saúde.

---

# Meta-Alertas

OPS poderá detectar:

- canal indisponível;
- fila de notificações crescendo;
- atraso de entrega;
- falha de roteamento;
- plantão sem responsável;
- taxa anormal de Alertas.

---

# Invariante de Auto-Observação da Atenção

O mecanismo responsável por chamar atenção também deverá ser observável.

---

# Plantão

Algumas Capacidades poderão exigir disponibilidade humana fora de horários regulares.

---

# Escala de Plantão

A Escala define quem assume responsabilidade em determinado período.

---

# Invariante de Plantão Determinável

Quando uma Política depender de plantão...

OPS deverá conseguir determinar quem está responsável naquele momento.

---

# Ausência de Plantonista

Uma escala mal definida poderá produzir Alerta órfão.

---

# Invariante de Cobertura de Plantão

Capacidades críticas deverão evitar períodos não planejados sem responsabilidade disponível.

---

# Handover de Plantão

A troca de plantão representa mudança de responsabilidade.

---

# Contexto de Handover

Poderá incluir:

- Alertas ativos;
- Incidentes;
- condições degradadas;
- mudanças em andamento;
- riscos;
- silenciamentos;
- pendências.

---

# Invariante de Continuidade entre Turnos

A atenção operacional não deverá reiniciar a cada mudança de pessoa.

---

# Escalonamento Avançado

Nem todo escalonamento deverá seguir apenas tempo.

---

# Escalonamento por Falha de ACK

Ninguém assumiu responsabilidade.

---

# Escalonamento por Falha de Mitigação

A resposta inicial não funcionou.

---

# Escalonamento por Expansão

O escopo aumentou.

---

# Escalonamento por Missão

Uma Missão crítica tornou-se afetada.

---

# Escalonamento por Incerteza

A condição permanece desconhecida em domínio crítico.

---

# Escalonamento por Saturação Humana

A equipe responsável já está sobrecarregada.

---

# Invariante de Escalonamento Multidimensional

OPS deverá permitir que diferentes propriedades aumentem o nível de resposta.

---

# Timeout de Responsabilidade

Um Alerta reconhecido poderá permanecer sem progresso.

---

# ACK sem Ação

Alguém reconhece...

Mas nada acontece.

---

# Invariante de ACK não Estagnante

O reconhecimento não deverá impedir escalonamento quando a condição permanece sem tratamento adequado.

---

# Timeout de Progresso

A Política poderá observar:

> Houve alguma evolução desde o último momento relevante?

---

# Exemplo

Alerta crítico:

`ACK = 10:00`

Sem atualização até:

`10:20`

A Política poderá escalar.

---

# Invariante de Não Estagnação

Condições relevantes deverão possuir mecanismo para detectar ausência de progresso.

---

# Snooze

Um responsável poderá adiar temporariamente nova interrupção.

---

# Snooze não é Resolução

A condição continua ativa.

---

# Invariante de Snooze Governado

Adiar atenção deverá possuir:

- motivo;
- duração;
- responsável.

---

# Re-notificação

Ao fim do Snooze...

o Alerta poderá retornar.

---

# Qualidade do Alerta

Uma Política de Alerta deverá ser avaliada pelo comportamento real.

---

# Alerta Bom

Idealmente:

- detecta condição relevante;
- chega ao responsável adequado;
- possui contexto;
- gera ação útil;
- não interrompe excessivamente.

---

# Alerta Ruim

Pode ser:

- ruidoso;
- tardio;
- impreciso;
- sem contexto;
- não acionável;
- enviado a destinatário errado.

---

# Falso Positivo

Alerta indica necessidade de atenção...

Mas nenhuma condição relevante existe.

---

# Falso Negativo

Condição relevante existe...

Mas nenhum Alerta é produzido.

---

# Invariante de Equilíbrio

OPS deverá buscar reduzir ambos sem presumir que pode eliminá-los completamente.

---

# Precisão de Alerta

Conceitualmente:

> Quantos Alertas realmente representavam condições úteis?

---

# Cobertura de Alerta

Conceitualmente:

> Quantas condições importantes foram detectadas?

---

# Invariante de Precisão e Cobertura

A qualidade não deverá ser avaliada apenas pela quantidade de Alertas.

---

# Tempo de Detecção

Quanto tempo entre início da condição e reconhecimento pelo sistema?

---

# Tempo de Roteamento

Quanto tempo até chegar ao destinatário adequado?

---

# Tempo de ACK

Quanto tempo até responsabilidade ser assumida?

---

# Tempo até Ação

Quanto tempo até resposta começar?

---

# Invariante de Métricas da Cadeia de Atenção

OPS deverá poder avaliar diferentes partes do caminho entre condição e resposta.

---

# MTTD

Poderá representar:

**Mean Time to Detect**

---

# MTTA

Poderá representar:

**Mean Time to Acknowledge**

---

# Limitação das Médias

Médias poderão ocultar extremos.

---

# Invariante de Distribuição

Para operações críticas...

OPS poderá considerar percentis e casos extremos.

---

# Fadiga Operacional

A qualidade da Gestão de Atenção deverá considerar efeito sobre pessoas.

---

# Sinais de Fadiga

Podem incluir:

- alto volume de paging;
- ACK cada vez mais lento;
- Alertas ignorados;
- silenciamentos frequentes;
- intervenção noturna excessiva;
- múltiplas escaladas.

---

# Invariante de Fadiga como Sinal de Sistema

Fadiga não deverá ser tratada apenas como problema individual.

Ela poderá revelar falha na arquitetura de atenção.

---

# Orçamento de Paging

Uma equipe poderá acompanhar volume de interrupções críticas.

---

# Invariante de Sustentabilidade Humana

Uma operação madura não deverá depender de pessoas permanentemente interrompidas para permanecer funcional.

---

# Alerta como Custo

Cada Alerta interruptivo possui custo cognitivo.

Por isso...

criar nova Política deverá justificar esse custo.

---

# Pergunta Constitucional do Alerta

Antes de criar paging...

OPS deverá perguntar:

> Existe uma ação humana que precisa acontecer agora?

Se a resposta for:

> Não.

Talvez não deva existir paging.

---

# Automação antes da Interrupção

Quando uma condição é:

- previsível;
- repetitiva;
- segura de corrigir;
- facilmente verificável;

OPS poderá considerar Auto-Remediação.

---

# Invariante de Automação Candidata

Alertas frequentes com resposta mecânica deverão ser candidatos a Automação ou redesign.

---

# Alerta sem Aprendizado

Se o mesmo Alerta acorda pessoas todas as semanas...

e nada estrutural muda...

existe dívida operacional.

---

# Invariante de Recorrência Acionável

Recorrência deverá poder originar:

- Problema;
- melhoria;
- Automação;
- Mudança.

---

# SLO da Gestão de Atenção

A própria capacidade de atenção poderá possuir objetivos.

---

# Exemplos Conceituais

- Alertas críticos devem ser roteados em até determinado tempo;
- paging deve possuir taxa máxima de falha de entrega;
- Alertas críticos não reconhecidos devem escalar;
- percentual de Alertas acionáveis deve permanecer acima de determinado nível.

---

# Invariante de SLO não Cosmético

Objetivos da Gestão de Atenção deverão representar capacidade real de resposta...

Não apenas métricas fáceis de melhorar.

---

# Disponibilidade do Sistema de Alertas

Se a infraestrutura de paging estiver indisponível...

a capacidade de resposta poderá estar comprometida.

---

# Invariante de Criticidade Reflexiva

A Criticidade do sistema de Alertas deverá refletir as Capacidades que dependem dele.

---

# Testes de Alertas

Políticas críticas poderão ser testadas.

---

# Teste de Roteamento

Verificar se o responsável correto recebe.

---

# Teste de Escalonamento

Verificar se ausência de ACK produz próxima etapa.

---

# Teste de Fallback

Verificar canal alternativo.

---

# Teste de Conteúdo

Verificar se o contexto apresentado é suficiente.

---

# Invariante de Política Testável

Políticas críticas deverão favorecer mecanismos capazes de demonstrar que a cadeia de atenção funciona.

---

# Game Day de Atenção

OPS poderá executar exercícios controlados.

Exemplo:

simular um Alerta crítico e verificar:

- roteamento;
- entrega;
- ACK;
- escalonamento;
- handover.

---

# Invariante de Capacidade Demonstrada

Uma Política de Escalonamento não deverá ser considerada confiável apenas porque está configurada.

---

# Operação Federada da Atenção

Uma condição poderá precisar atravessar organizações.

---

# Federação de Alertas

Uma organização poderá enviar a outra:

- Estado;
- prioridade;
- impacto;
- Evidências;
- contexto;
- responsabilidade esperada.

---

# Invariante de Semântica Federada

Prioridades e Estados compartilhados deverão possuir significado suficientemente compatível entre participantes.

---

# Ack Federado

A organização destinatária poderá reconhecer responsabilidade.

---

# Escalonamento Federado

Se não houver resposta...

o Alerta poderá seguir política contratual.

---

# Invariante de Responsabilidade entre Organizações

Dependências federadas críticas deverão possuir caminho compreensível para atenção e escalonamento.

---

# Atenção de Agentes

Nem toda atenção deverá ser humana.

---

# Agent Queue

Agentes poderão possuir filas próprias de atenção para:

- investigar;
- correlacionar;
- validar;
- executar Runbooks.

---

# Invariante de Separação de Filas

A Plataforma poderá diferenciar aquilo que exige:

- atenção humana;
- atenção de Agente;
- Automação;
- apenas registro.

---

# Escada de Atenção

Conceitualmente:

`REGISTRO`

↓

`OBSERVACAO AUTOMATICA`

↓

`AGENTE`

↓

`OPERADOR`

↓

`COORDENACAO`

↓

`GOVERNANCA / CCM`

Essa escada não deverá ser interpretada como sequência obrigatória.

---

# Invariante de Menor Atenção Suficiente

A Plataforma deverá utilizar o nível menos intrusivo capaz de responder adequadamente.

---

# Eva como Superfície de Atenção

Eva poderá apresentar atenção de maneira adaptada ao participante.

---

# Para Usuário Comum

Eva poderá dizer:

> O serviço necessário está temporariamente indisponível. Já existe atendimento operacional em andamento.

---

# Para Operador

Eva poderá apresentar:

> Serviço X crítico, indisponível há 6 minutos.  
> Dependência Y degradada.  
> Alerta reconhecido por equipe Z.  
> Failover em andamento.

---

# Para Liderança

Eva poderá sintetizar:

> Três Capacidades críticas estão afetadas. Duas Missões possuem risco imediato. Recuperação estimada em 25 minutos.

---

# Invariante de Atenção por Papel

A mesma condição deverá poder ser apresentada com profundidade compatível com responsabilidade e necessidade.

---

# Próxima Dimensão

Com Políticas de Alerta, deduplicação, agrupamento, supressão, canais, plantão, escalonamento e qualidade estabelecidos...

o próximo lote deverá aprofundar:

- desenho de notificações;
- conteúdo mínimo;
- enriquecimento;
- contexto situacional;
- linhas do tempo;
- links entre Evidência e ação;
- UX da atenção;
- interfaces conversacionais;
- prioridade visual;
- quiet hours;
- atenção pessoal versus institucional;
- preferências sem perda de responsabilidade;
- gestão de múltiplos Alertas simultâneos;
- triagem;
- filas operacionais;
- congestionamento de atenção;
- coordenação entre humanos, Agentes e Automações.

---

# Desenho de Notificações e Contexto Situacional

Uma Notificação não deverá ser tratada apenas como uma mensagem.

Ela representa uma projeção contextual de uma condição operacional para determinado destinatário.

Por isso...

a qualidade da Notificação influencia diretamente:

- tempo de compreensão;
- tempo de resposta;
- risco de erro;
- qualidade da decisão;
- carga cognitiva.

---

# Invariante de Notificação com Propósito

Toda Notificação relevante deverá responder a uma necessidade concreta de atenção.

---

# Conteúdo Mínimo

Uma Notificação acionável deverá procurar informar, quando apropriado:

- o que aconteceu;
- onde;
- desde quando;
- qual impacto;
- qual prioridade;
- quem responde;
- qual ação é esperada.

---

# Exemplo Mínimo

`SERVICO_X DEGRADADO`

`INICIO = 10:14`

`IMPACTO = 18% DAS TRANSACOES`

`PRIORIDADE = URGENTE`

`OWNER = EQUIPE_A`

`ACAO = INVESTIGAR`

---

# Invariante de Contexto Suficiente

A Notificação deverá reduzir a necessidade de reconstrução manual antes da primeira ação relevante.

---

# Notificação Enriquecida

Uma Notificação poderá incluir também:

- Evidências principais;
- mudança recente;
- dependências;
- consumidores afetados;
- Missões relacionadas;
- Runbook;
- hipótese atual;
- estimativa;
- ação recomendada.

---

# Enriquecimento Proporcional

Mais contexto não é sempre melhor.

Uma Notificação excessivamente longa poderá atrasar a compreensão.

---

# Invariante de Compressão Contextual

A Notificação deverá apresentar primeiro aquilo que é necessário para decidir...

Permitindo aprofundamento sob demanda.

---

# Camadas de Informação

Uma experiência madura poderá apresentar:

**Camada 1 — Síntese**

> Serviço crítico degradado.

**Camada 2 — Impacto**

> 3 Capacidades afetadas, 2 Missões em risco.

**Camada 3 — Evidências**

> Latência +240%, erro 18%, Provider Y degradado.

**Camada 4 — Diagnóstico**

> Hipótese atual: saturação da dependência Y.

**Camada 5 — Histórico**

> Mudança Z realizada 11 minutos antes.

---

# Invariante de Profundidade Progressiva

OPS deverá permitir navegação da síntese até a Evidência sem obrigar todos os destinatários a consumir o mesmo nível de detalhe.

---

# Título Operacional

O título de um Alerta deverá comunicar a condição principal.

---

# Título Ruim

`ERROR 500 ABOVE THRESHOLD`

---

# Título Melhor

`Serviço de Identidade degradado`

---

# Título Contextual

`Serviço de Identidade degradado na Região Sul`

---

# Invariante de Linguagem Operacional

Títulos deverão favorecer significado operacional...

Não apenas sintaxe da ferramenta que gerou o Sinal.

---

# Corpo da Notificação

O corpo poderá responder:

> O que sabemos?

> O que ainda não sabemos?

> O que está sendo feito?

> O que precisa acontecer agora?

---

# Incerteza na Notificação

Uma Notificação deverá preservar incerteza.

---

# Exemplo

Em vez de:

> O banco causou a falha.

Se ainda não confirmado:

> O banco é a principal hipótese no momento.

---

# Invariante de Não Falsa Certeza

A urgência da comunicação não deverá justificar transformar hipótese em fato.

---

# Evidência Principal

A Notificação poderá apresentar somente as Evidências mais relevantes.

---

# Evidências Secundárias

Outras poderão permanecer acessíveis sob demanda.

---

# Invariante de Evidência Prioritária

OPS deverá favorecer Evidências que ajudam o destinatário a compreender e agir.

---

# Linha do Tempo Resumida

Para condições relevantes...

uma Notificação ou superfície operacional poderá apresentar marcos.

Exemplo:

`10:14 — Degradação detectada`

`10:16 — Alerta aberto`

`10:18 — Equipe A reconheceu`

`10:22 — Failover iniciado`

---

# Linha do Tempo Completa

Detalhes adicionais poderão permanecer acessíveis para investigação.

---

# Invariante de Temporalidade da Atenção

A experiência deverá permitir compreender não apenas o Estado atual...

Mas como a condição chegou até ele.

---

# Ação Recomendada

Um Alerta poderá indicar próxima ação.

Por exemplo:

`VERIFICAR DEPENDENCIA Y`

ou:

`EXECUTAR RUNBOOK 14`

---

# Recomendação não é Comando

A ação sugerida deverá permanecer distinguível de ação autorizada automaticamente.

---

# Invariante de Recomendação Clara

OPS deverá indicar quando algo é:

- recomendação;
- ação disponível;
- ação obrigatória;
- ação já em execução.

---

# Ação Inline

Interfaces poderão permitir executar ações diretamente a partir do Alerta.

Por exemplo:

- reconhecer;
- escalar;
- iniciar Runbook;
- abrir Incidente;
- ativar contingência.

---

# Invariante de Autoridade na Ação Inline

Uma ação disponível na interface deverá respeitar:

- identidade;
- função;
- permissão;
- Criticidade;
- contexto.

---

# Ação de Alto Impacto

Algumas ações não deverão ser executadas com um único clique sem contexto adicional.

---

# Confirmação

Poderá ser exigida quando:

- ação é irreversível;
- impacto é amplo;
- segurança é relevante;
- risco é alto.

---

# Invariante de Fricção Proporcional

A interface deverá reduzir fricção em ações seguras...

E aumentar proteção em ações de alto impacto.

---

# UX da Atenção

A experiência de atenção deverá preservar uma hierarquia clara.

---

# O que Deve Estar no Topo

Idealmente:

- condição;
- impacto;
- urgência;
- ownership;
- próxima ação.

---

# O que Pode Estar Abaixo

- detalhes técnicos;
- histórico;
- correlações;
- hipóteses;
- telemetria extensa.

---

# Invariante de Hierarquia Cognitiva

A interface deverá favorecer decisão rápida sem perder profundidade investigativa.

---

# Prioridade Visual

Estados diferentes poderão possuir representação visual diferente.

Por exemplo:

- cor;
- posição;
- ícone;
- densidade;
- animação.

---

# Cor não é Prioridade

Assim como estabelecido no `008`...

a semântica deverá existir independentemente da representação visual.

---

# Invariante de Acessibilidade Semântica

A compreensão da prioridade não deverá depender exclusivamente de cor.

---

# Som e Vibração

Canais interruptivos poderão utilizar:

- som;
- vibração;
- repetição.

---

# Invariante de Intensidade Proporcional

Mecanismos sensoriais intrusivos deverão acompanhar urgência real.

---

# Quiet Hours

Alguns participantes poderão possuir períodos de menor interrupção.

---

# Quiet Hours não Significam Ausência de Responsabilidade

Se determinada pessoa estiver de plantão...

uma condição crítica poderá ultrapassar Quiet Hours.

---

# Invariante de Quiet Hours Governados

Preferências pessoais não deverão anular responsabilidades operacionais formalmente assumidas.

---

# Atenção Pessoal

Refere-se àquilo que determinada pessoa precisa saber ou fazer.

---

# Atenção Institucional

Refere-se àquilo que a organização precisa garantir que seja tratado...

independentemente de quem esteja disponível.

---

# Invariante de Separação Pessoa ↔ Responsabilidade

A ausência de uma pessoa não deverá fazer desaparecer uma obrigação operacional.

---

# Preferências de Notificação

Um participante poderá preferir:

- canal A;
- canal B;
- agrupamento;
- resumo;
- idioma;
- nível de detalhe.

---

# Limite das Preferências

Essas preferências poderão ser respeitadas enquanto não comprometerem responsabilidade operacional.

---

# Invariante de Preferência Subordinada à Criticidade

Condições críticas poderão utilizar canais mandatórios mesmo quando não forem preferidos pelo destinatário.

---

# Perfil de Atenção

A Plataforma poderá manter contexto sobre como apresentar informação a diferentes papéis.

---

# Perfil de Operador

Mais detalhe técnico.

---

# Perfil de Liderança

Mais impacto e risco.

---

# Perfil de Usuário

Mais significado funcional e expectativa de resolução.

---

# Perfil de Agente

Mais estrutura formal e Evidências processáveis.

---

# Invariante de Apresentação por Papel

A mesma condição poderá possuir diferentes representações...

Sem alterar sua realidade operacional.

---

# Eva como Interface de Atenção

Eva poderá funcionar como uma das principais superfícies de entrega e interpretação de atenção.

---

# Eva para Operadores

Poderá dizer:

> Tenho um Alerta urgente no Serviço de Identidade.  
> A degradação começou há 7 minutos.  
> A hipótese principal é saturação da Dependência Y.  
> Quer ver as Evidências ou iniciar o Runbook?

---

# Eva para Liderança

Poderá dizer:

> Há uma degradação crítica afetando duas Capacidades e três Missões. A resposta já está em andamento.

---

# Eva para Usuário

Poderá dizer:

> O serviço necessário está temporariamente instável. A equipe já está atuando e eu continuo acompanhando para você.

---

# Invariante de Tradução Contextual

Eva deverá simplificar a linguagem sem apagar:

- impacto;
- incerteza;
- responsabilidade;
- condição relevante.

---

# Conversa como Canal de Atenção

O usuário poderá perguntar:

> Tem alguma coisa que precisa da minha atenção?

Eva poderá reunir:

- Alertas;
- aprovações;
- riscos;
- decisões;
- pendências.

---

# Invariante de Atenção Conversacional

A conversa deverá funcionar como projeção da realidade de atenção...

Não como sistema paralelo desconectado.

---

# Inbox Operacional

OPS poderá possuir uma superfície equivalente a uma:

**Caixa de Atenção Operacional.**

---

# Função da Inbox

Reunir:

- Alertas ativos;
- ações pendentes;
- escalonamentos;
- aprovações;
- condições sob acompanhamento.

---

# Inbox não é Fila Única

O conteúdo poderá ser ordenado por:

- prioridade;
- ownership;
- prazo;
- Criticidade;
- Missão;
- risco.

---

# Invariante de Ordenação por Relevância

A ordenação não deverá depender apenas de horário de chegada.

---

# Triagem

Quando múltiplas condições surgirem simultaneamente...

OPS deverá realizar Triagem.

---

# Perguntas de Triagem

> Qual possui maior impacto?

> Qual possui menor margem?

> Qual pode propagar?

> Qual precisa de resposta agora?

> Qual pode esperar?

> Qual já está sendo tratada?

---

# Invariante de Triagem Contextual

A prioridade deverá ser continuamente reavaliada conforme novas condições aparecem.

---

# Triagem Humana

Um Operador poderá reorganizar prioridades.

---

# Triagem Automatizada

Regras poderão classificar condições previsíveis.

---

# Triagem por Agente

Agentes poderão recomendar:

- agrupamento;
- prioridade;
- possível causa comum;
- sequência de investigação.

---

# Invariante de Triagem Auditável

Decisões relevantes de reclassificação deverão possuir contexto suficiente.

---

# Filas Operacionais

A atenção poderá ser organizada em diferentes filas.

---

# Fila de Observação

Condições que precisam ser acompanhadas...

Mas não exigem ação imediata.

---

# Fila Acionável

Demandas que precisam de resposta.

---

# Fila Urgente

Condições que exigem tratamento rápido.

---

# Fila de Agentes

Atividades que podem ser investigadas ou tratadas cognitivamente.

---

# Fila Automatizada

Condições elegíveis para Auto-Remediação.

---

# Invariante de Fila por Natureza da Resposta

OPS deverá evitar misturar indiscriminadamente tipos de trabalho que exigem mecanismos de resposta diferentes.

---

# Congestionamento de Atenção

Pode ocorrer quando a demanda de atenção excede a capacidade disponível.

---

# Sintomas

- backlog crescente;
- ACK lento;
- Alertas vencidos;
- escalonamentos frequentes;
- múltiplas condições sem Owner.

---

# Invariante de Congestionamento Observável

A própria Fila de Atenção deverá possuir Saúde.

---

# Capacidade de Atenção

A Plataforma poderá estimar:

- pessoas disponíveis;
- Agentes disponíveis;
- Automações disponíveis;
- carga atual;
- número de condições ativas.

---

# Invariante de Atenção como Capacidade

OPS deverá tratar capacidade de responder como Recurso Operacional finito.

---

# Saturação da Atenção

Uma equipe poderá estar:

`CAPACIDADE_DE_RESPOSTA = 100% UTILIZADA`

Nesse caso...

novas condições poderão precisar de:

- redistribuição;
- escalonamento;
- apoio federado;
- Automação;
- priorização mais agressiva.

---

# Invariante de Saturação Humana

OPS não deverá continuar roteando indefinidamente novos Alertas para uma equipe já comprovadamente saturada sem reavaliar capacidade.

---

# Load Balancing de Atenção

Demandas poderão ser distribuídas entre:

- pessoas;
- equipes;
- Agentes;
- organizações.

---

# Limite do Load Balancing

Nem toda condição pode ser enviada para qualquer pessoa.

Especialidade e autoridade continuam importantes.

---

# Invariante de Distribuição Competente

Carga deverá ser distribuída apenas entre participantes capazes e autorizados.

---

# Coordenação entre Humanos, Agentes e Automações

A Gestão de Atenção deverá permitir divisão dinâmica de trabalho.

---

# Automação

Pode tratar ações previsíveis.

---

# Agente

Pode reduzir incerteza e preparar contexto.

---

# Humano

Pode exercer julgamento, autoridade e responsabilidade.

---

# Modelo Híbrido

Conceitualmente:

`ALERTA`

↓

`AUTOMACAO TENTA CORRECAO`

↓

se falhar:

`AGENTE ANALISA`

↓

se persistir ou exigir autoridade:

`OPERADOR`

↓

se impacto ampliar:

`COORDENACAO`

---

# Invariante de Escada de Resposta

OPS deverá permitir progressão entre mecanismos de resposta sem perder contexto.

---

# Transferência Automação → Agente

A Automação deverá fornecer:

- ação tentada;
- resultado;
- Evidências;
- Estado atual.

---

# Transferência Agente → Humano

O Agente deverá fornecer:

- síntese;
- hipóteses;
- Evidências;
- ações recomendadas;
- incertezas.

---

# Transferência Humano → Coordenação

Deverá preservar:

- impacto;
- histórico;
- ações;
- decisões;
- risco;
- próximos passos.

---

# Invariante de Passagem de Contexto

Cada transição de atenção deverá preservar compreensão suficiente para continuidade.

---

# Condições Simultâneas

Um mesmo Operador poderá receber múltiplos Alertas relacionados.

---

# Contexto Compartilhado

A interface poderá indicar:

> Estes cinco Alertas provavelmente pertencem à mesma condição.

---

# Invariante de Redução de Fragmentação

OPS deverá evitar que a mesma realidade seja apresentada como múltiplas tarefas cognitivamente independentes quando puder ser coordenada como um único contexto.

---

# Condições Independentes

Também deverá evitar agrupar aquilo que exige respostas separadas.

---

# Invariante de Não Fusão Indevida

Compressão cognitiva não deverá eliminar diferenças operacionais relevantes.

---

# Atenção e Missões

Quando uma condição ameaçar Missão...

o contexto poderá ser enriquecido com:

- Missão;
- prioridade missional;
- prazo;
- impacto potencial.

---

# Exemplo

`SERVICO_X = DEGRADADO`

isoladamente:

`PRIORIDADE = ATENCAO`

Mas:

`MISSAO_CRITICA_Y DEPENDE DE SERVICO_X`

poderá elevar:

`PRIORIDADE = URGENTE`

---

# Invariante de Contexto Missional

A importância de uma condição poderá mudar conforme as Missões que dependem dela.

---

# Atenção Bidirecional CCM ↔ OPS

CCM poderá informar:

> Esta Missão tornou-se crítica.

OPS poderá então reavaliar Alertas relacionados.

OPS poderá informar:

> A Capacidade necessária está degradada.

CCM poderá reavaliar Missão.

---

# Invariante de Reavaliação Cruzada

Mudanças relevantes em Missão ou operação deverão poder atualizar o contexto do outro domínio.

---

# Atenção Institucional Persistente

Uma condição pode atravessar:

- turnos;
- equipes;
- regiões;
- organizações.

Por isso...

a atenção não deverá depender da memória de uma pessoa.

---

# Invariante de Persistência da Atenção

Uma condição ativa deverá permanecer representável até resolução, mesmo quando os participantes mudarem.

---

# Quiet Handover

Em trocas de turno...

Alertas de baixa prioridade poderão ser agrupados em resumo.

---

# Critical Handover

Alertas críticos deverão ser transferidos explicitamente.

---

# Invariante de Handover Proporcional

A profundidade da Passagem de Contexto deverá acompanhar a Criticidade.

---

# Resumo de Turno

OPS poderá produzir síntese como:

`3 ALERTAS ATIVOS`

`1 URGENTE`

`2 EM OBSERVACAO`

`1 INCIDENTE EM CURSO`

`2 SILENCIAMENTOS EXPIRANDO`

---

# Agente como Scribe de Atenção

Agentes poderão manter resumo vivo da situação.

---

# Invariante de Scribe sem Autoridade Implícita

Registrar e sintetizar não deverá conceder automaticamente autoridade sobre decisões.

---

# Atenção e Privacidade

Notificações poderão conter informação sensível.

---

# Invariante de Minimização

Cada destinatário deverá receber apenas contexto compatível com sua função e necessidade.

---

# Dados Sensíveis em Alertas

Deverão ser evitados quando não necessários.

---

# Atenção Federada e Confidencialidade

Uma organização poderá precisar informar:

> Serviço degradado.

Sem compartilhar:

- logs internos;
- dados de usuários;
- detalhes confidenciais.

---

# Invariante de Divulgação Proporcional

Cooperação operacional não deverá exigir exposição excessiva.

---

# Preferência versus Segurança

Um Operador poderá preferir receber resumo.

Mas durante condição crítica...

detalhes adicionais poderão ser necessários.

---

# Invariante de Necessidade Operacional

Preferências de apresentação deverão permanecer subordinadas à segurança e à responsabilidade.

---

# Atenção e Acessibilidade

Interfaces deverão considerar diferentes necessidades de acesso.

---

# Invariante de Multimodalidade

Condições importantes deverão poder ser compreendidas sem depender de um único meio sensorial quando apropriado.

---

# Falha de UX como Falha Operacional

Um Alerta tecnicamente correto...

Mas impossível de interpretar rapidamente...

pode contribuir para atraso de resposta.

---

# Invariante de Operabilidade da Interface

As superfícies de atenção fazem parte da própria capacidade operacional de OPS.

---

# Teste de Notificação

Uma Política crítica poderá ser avaliada perguntando:

> A pessoa certa recebeu?

> Entendeu?

> Sabia o que fazer?

> Conseguiu agir?

---

# Invariante de Eficácia End-to-End

A Gestão de Atenção deverá ser avaliada pelo resultado da cadeia completa...

Não apenas pelo envio técnico.

---

# Métrica de Entrega

`NOTIFICACAO_ENVIADA`

é útil.

Mas não suficiente.

---

# Métrica de Responsabilidade

`ACK`

também é útil.

Mas ainda não demonstra resposta efetiva.

---

# Métrica de Ação

Poderá medir tempo até primeira ação relevante.

---

# Métrica de Resultado

Poderá avaliar se a atenção produziu:

- mitigação;
- recuperação;
- escalonamento adequado.

---

# Invariante de Resultado da Atenção

O objetivo da Gestão de Atenção é alterar positivamente a capacidade de resposta...

Não maximizar quantidade de interações.

---

# Loop de Experiência de Atenção

Conceitualmente:

`CONDICAO`

↓

`ALERTA`

↓

`NOTIFICACAO`

↓

`COMPREENSÃO`

↓

`RESPONSABILIDADE`

↓

`ACAO`

↓

`RESULTADO`

↓

`FEEDBACK`

↓

`MELHORIA DA POLITICA`

---

# Próxima Dimensão

Com UX, notificações, Triagem, filas, capacidade de atenção e coordenação Humano–Agente–Automação estabelecidas...

o próximo lote deverá aprofundar:

- memória da atenção;
- histórico e auditoria;
- correlação com Mudanças;
- correlação com Incidentes;
- recorrência;
- qualidade de políticas;
- revisão periódica;
- ownership de regras;
- lifecycle de regras de Alerta;
- detecção de regras obsoletas;
- testes;
- simulações;
- métricas de eficácia;
- indicadores de fadiga;
- governança da atenção;
- invariantes fundamentais do arquivo;
- garantias mínimas;
- anti-padrões;
- critérios de maturidade.

---

# Memória da Atenção Operacional

A Gestão de Atenção não termina quando um Alerta é resolvido.

Cada ciclo de atenção produz informação sobre:

- o comportamento do sistema;
- a qualidade da observação;
- a qualidade da Política;
- a capacidade de resposta;
- a adequação do roteamento;
- a carga humana;
- a eficiência das Automações;
- a utilidade dos Agentes.

Essa informação deverá poder retornar à operação.

---

# Histórico do Alerta

Um Alerta relevante poderá preservar:

- condição inicial;
- Evidências principais;
- prioridade;
- mudanças de prioridade;
- roteamentos;
- notificações;
- ACKs;
- ações;
- escalonamentos;
- resolução;
- resultado.

---

# Invariante de História Suficiente

A Plataforma deverá preservar contexto suficiente para compreender como determinada necessidade de atenção foi tratada.

---

# Histórico não é Telemetria Bruta

O histórico do Alerta não deverá exigir retenção indefinida de todo Sinal produzido.

Ele deverá preservar aquilo que possui valor operacional durável.

---

# Exemplo

Durante um Alerta...

podem existir milhões de logs.

Depois...

a memória relevante poderá preservar:

- início;
- impacto;
- hipótese;
- ação;
- escalonamento;
- resolução;
- aprendizado.

---

# Invariante de Compressão Histórica

A redução de detalhe não deverá eliminar informação necessária para auditoria, aprendizado ou análise.

---

# Linha do Tempo da Atenção

A Linha do Tempo poderá registrar marcos como:

`10:03 — CONDICAO DETECTADA`

`10:04 — ALERTA ABERTO`

`10:05 — NOTIFICACAO ENVIADA`

`10:07 — ACK`

`10:11 — PRIMEIRA ACAO`

`10:18 — ESCALONAMENTO`

`10:26 — MITIGACAO`

`10:39 — RESOLUCAO`

---

# Invariante de Temporalidade

A Plataforma deverá conseguir distinguir atraso de:

- detecção;
- entrega;
- reconhecimento;
- resposta;
- resolução.

---

# Auditoria da Atenção

Algumas condições poderão exigir rastreabilidade elevada.

Por exemplo:

- Alertas críticos;
- decisões de supressão;
- silenciamentos;
- Overrides;
- escalonamentos;
- uso de canais extraordinários.

---

# Invariante de Auditabilidade

Ações relevantes sobre a Gestão de Atenção deverão possuir Proveniência proporcional ao impacto.

---

# Quem Silenciou?

OPS deverá conseguir responder, quando relevante:

> Quem silenciou este Alerta?

> Por quê?

> Por quanto tempo?

---

# Quem Alterou a Prioridade?

Uma mudança manual poderá possuir:

- autor;
- justificativa;
- momento.

---

# Quem Alterou a Política?

A própria Regra de Alerta também deverá possuir histórico de mudança.

---

# Invariante de Mudança da Política

Alterações relevantes em Políticas de Atenção deverão possuir Proveniência e versão.

---

# Correlação com Mudanças Operacionais

O histórico de Alertas deverá poder ser relacionado a Mudanças.

---

# Pergunta Fundamental

> O comportamento dos Alertas mudou depois desta alteração?

---

# Exemplo

Nova versão implantada.

Depois:

- Alertas dobraram;
- latência aumentou;
- falso positivo cresceu.

Essa relação poderá revelar regressão.

---

# Invariante de Relação Temporal com Mudanças

OPS deverá conseguir correlacionar alterações de Política, configuração ou Serviço com mudanças relevantes no comportamento da atenção.

---

# Correlação com Incidentes

Alertas poderão participar de Incidentes.

---

# Alertas Antecessores

Alguns Alertas surgem antes da declaração formal de Incidente.

---

# Alertas Durante Incidente

Podem fornecer Evidência adicional.

---

# Alertas Pós-Incidente

Podem revelar recorrência ou recuperação incompleta.

---

# Invariante de Associação Alerta ↔ Incidente

OPS deverá permitir relacionar Alertas ao contexto de Incidente sem perder sua identidade própria.

---

# Alertas que Não Viraram Incidente

Também possuem valor.

Eles poderão revelar:

- prevenção bem-sucedida;
- Auto-Remediação;
- risco controlado;
- condição recorrente.

---

# Recorrência de Alertas

Uma mesma classe de Alerta pode reaparecer.

---

# Padrão de Recorrência

Exemplo:

`ALERTA_X`

ocorre:

- toda segunda-feira;
- após deploy;
- em determinada região;
- sob determinada carga.

---

# Invariante de Recorrência Detectável

OPS deverá permitir identificar padrões temporais e contextuais de repetição.

---

# Recorrência como Sinal de Problema

Um Alerta pode ser resolvido rapidamente todas as vezes...

E ainda representar falha estrutural.

---

# Exemplo

`WORKER_TRAVADO`

Auto-Remediação resolve em 30 segundos.

Mas acontece 40 vezes por semana.

Isso não deverá ser considerado sucesso operacional completo.

---

# Invariante de Não Confusão entre Recuperação e Saúde Estrutural

Resolver rapidamente uma condição recorrente não elimina a necessidade de compreender sua causa.

---

# Relação com 011 — Problemas, Causa Raiz e Recorrência

Alertas recorrentes poderão originar:

- Problema;
- investigação;
- Mudança;
- Automação;
- redesign.

---

# Qualidade das Políticas

Uma Política de Alerta também deverá possuir Saúde.

---

# Política Saudável

Idealmente:

- detecta condição relevante;
- possui bom contexto;
- gera pouca fadiga;
- chega ao responsável correto;
- produz resposta útil.

---

# Política Degradada

Poderá apresentar:

- falso positivo elevado;
- falso negativo;
- excesso de notificações;
- baixa acionabilidade;
- roteamento incorreto;
- silenciamento frequente.

---

# Invariante de Política Observável

Políticas críticas deverão possuir indicadores sobre seu próprio comportamento.

---

# Owner da Política

Toda Política relevante deverá possuir responsabilidade compreensível.

---

# Owner do Serviço não Precisa Ser Owner da Política

Uma equipe de plataforma poderá manter parte da lógica de Alerta.

Entretanto...

a responsabilidade sobre o significado operacional deverá permanecer clara.

---

# Invariante de Ownership de Regra

Regras críticas não deverão permanecer órfãs.

---

# Ciclo de Vida da Política de Alerta

Uma Política também possui ciclo.

Conceitualmente:

`PROPOSTA`

↓

`DEFINIDA`

↓

`TESTADA`

↓

`ATIVA`

↓

`AVALIADA`

↓

`AJUSTADA`

↓

`DEPRECIADA`

↓

`REMOVIDA`

---

# Política Proposta

Existe necessidade percebida de atenção.

---

# Política Definida

Critérios são formalizados.

---

# Política Testada

Seu comportamento é verificado antes ou durante ativação controlada.

---

# Política Ativa

Passa a produzir atenção real.

---

# Política Avaliada

Seu comportamento real é analisado.

---

# Política Ajustada

Thresholds, roteamento ou contexto são modificados.

---

# Política Depreciada

Deixa de ser recomendada para novas condições.

---

# Política Removida

Não participa mais da operação.

---

# Invariante de Lifecycle da Política

Políticas de Atenção não deverão ser tratadas como configuração eterna.

---

# Regra Obsoleta

Uma Política poderá tornar-se obsoleta porque:

- Serviço mudou;
- arquitetura mudou;
- métrica deixou de existir;
- Owner mudou;
- risco mudou;
- processo foi automatizado.

---

# Invariante de Detecção de Obsolescência

OPS deverá possuir mecanismos para identificar regras que deixaram de representar a realidade.

---

# Alertas Nunca Disparados

Uma Regra que nunca dispara poderá ser:

- desnecessária;
- incorreta;
- importante mas rara.

Não deverá ser removida automaticamente sem análise.

---

# Alertas Sempre Disparados

Uma Regra quase permanentemente ativa também pode indicar:

- Threshold ruim;
- degradação persistente;
- métrica inadequada.

---

# Invariante de Extremos da Política

Comportamentos extremos deverão provocar revisão.

---

# Revisão Periódica

Políticas relevantes poderão ser revisadas em intervalos definidos.

---

# Perguntas de Revisão

> Este Alerta ainda representa risco real?

> Ainda chega ao responsável correto?

> O contexto é suficiente?

> A ação esperada ainda existe?

> Pode ser automatizado?

> Pode ser removido?

---

# Invariante de Revisão Proporcional

Quanto maior a Criticidade...

Maior poderá ser a necessidade de revisão estruturada.

---

# Testes de Política

Uma Política poderá ser testada em múltiplos níveis.

---

# Teste de Condição

Verificar se abre quando deveria.

---

# Teste de Não Condição

Verificar se não abre quando não deveria.

---

# Teste de Resolução

Verificar se encerra adequadamente.

---

# Teste de Roteamento

Verificar destinatário.

---

# Teste de Escalonamento

Verificar progressão.

---

# Teste de Conteúdo

Verificar contexto.

---

# Teste de Canal

Verificar entrega.

---

# Invariante de Testabilidade

Políticas críticas deverão favorecer validação antes de depender delas em situação real.

---

# Simulações

OPS poderá executar simulações de condições operacionais.

---

# Simulação Técnica

Gerar Sinal controlado.

---

# Simulação de Alerta

Abrir Alerta de teste.

---

# Simulação de Escalonamento

Verificar toda cadeia.

---

# Simulação Humano-Agente

Testar Passagem de Contexto entre:

- Automação;
- Agente;
- Operador.

---

# Invariante de Simulação Segura

Testes não deverão produzir consequências reais indevidas.

---

# Game Days

A Plataforma poderá realizar exercícios periódicos.

---

# Objetivos

Validar:

- Política;
- plantão;
- canais;
- escalonamento;
- Handover;
- capacidade de resposta.

---

# Invariante de Capacidade Demonstrada

A existência de configuração não deverá ser confundida com capacidade operacional demonstrada.

---

# Métricas de Eficácia da Atenção

A Gestão de Atenção poderá possuir indicadores próprios.

---

# Volume de Alertas

Quantos Alertas surgem.

---

# Volume Interruptivo

Quantos exigem paging ou interrupção humana.

---

# Taxa de Acionabilidade

Quantos produziram ação útil.

---

# Taxa de Falso Positivo

Quantos não representavam condição relevante.

---

# Taxa de Auto-Remediação

Quantos foram resolvidos sem humano.

---

# Tempo até ACK

Quanto tempo para responsabilidade ser assumida.

---

# Tempo até Primeira Ação

Quanto tempo até resposta efetiva começar.

---

# Tempo até Escalonamento

Quanto tempo até ampliar atenção quando necessário.

---

# Taxa de Escalonamento

Quantos Alertas exigem nível superior.

---

# Taxa de Reabertura

Quantos retornam após resolução.

---

# Taxa de Recorrência

Quantos reaparecem repetidamente.

---

# Invariante de Métrica com Significado

Indicadores deverão ser usados para melhorar capacidade de resposta...

Não para pressionar pessoas a otimizar números isolados.

---

# Goodhart Operacional

Quando uma métrica se torna alvo rígido...

pode deixar de representar qualidade.

---

# Exemplo

Se a equipe for avaliada apenas por:

`MTTA BAIXO`

Operadores poderão reconhecer Alertas imediatamente...

Mesmo sem realmente assumir contexto.

---

# Invariante de Não Otimização Cega

Métricas de atenção deverão ser interpretadas em conjunto com qualidade e resultado.

---

# Indicadores de Fadiga

OPS poderá observar:

- paging por pessoa;
- paging fora de horário;
- volume noturno;
- ACK tardio;
- Alertas ignorados;
- silenciamentos;
- turnos excessivos.

---

# Fadiga Acumulada

O impacto humano poderá ocorrer ao longo de semanas...

Não apenas durante um turno.

---

# Invariante de Temporalidade da Fadiga

A sustentabilidade humana deverá ser observada em múltiplos horizontes.

---

# Concentração de Atenção

Uma única pessoa poderá receber parcela excessiva das interrupções.

---

# Invariante de Distribuição Sustentável

OPS deverá conseguir perceber concentração operacional excessiva quando relevante.

---

# Bus Factor de Atenção

Se apenas uma pessoa recebe e compreende determinado tipo de Alerta...

existe dependência humana.

---

# Invariante de Continuidade Humana

Capacidades críticas deverão evitar depender de uma única pessoa para interpretar e responder.

---

# Governança da Atenção

A Gestão de Atenção possui impacto institucional.

Ela decide:

- quem é interrompido;
- quando;
- com que intensidade;
- com qual informação;
- com qual expectativa de resposta.

Por isso...

deverá possuir Governança.

---

# Autoridade para Criar Alertas

Nem toda pessoa ou sistema deverá poder criar paging crítico arbitrariamente.

---

# Invariante de Autoridade de Política

A criação ou alteração de Políticas críticas deverá possuir autorização adequada.

---

# Autoridade para Silenciar

Silenciar atenção crítica também deverá exigir responsabilidade.

---

# Autoridade para Reclassificar

Alterar prioridade poderá modificar resposta institucional.

---

# Invariante de Controle de Mudanças na Atenção

Alterações relevantes deverão seguir Governança proporcional ao impacto.

---

# Separação de Funções

Quando necessário...

poderá existir distinção entre quem:

- cria Regra;
- aprova;
- opera;
- revisa.

---

# Invariante de Separação Proporcional

Quanto maior o impacto potencial da Política...

Maior poderá ser a necessidade de revisão independente.

---

# Políticas Globais

Algumas regras poderão valer para toda a Plataforma.

---

# Políticas Locais

Outras poderão pertencer a:

- Serviço;
- organização;
- região;
- equipe.

---

# Invariante de Escopo da Política

Toda Política deverá possuir escopo suficientemente claro.

---

# Herança de Política

Uma política local poderá herdar princípios globais.

---

# Override Local

Poderá existir adaptação local.

---

# Invariante de Override Governado

Adaptações não deverão eliminar silenciosamente garantias obrigatórias.

---

# Operação Federada da Governança de Atenção

Organizações participantes poderão possuir políticas próprias.

Entretanto...

dependências compartilhadas poderão exigir contratos mínimos.

---

# Contrato Federado de Atenção

Poderá definir:

- níveis de prioridade;
- tempos esperados;
- canais;
- escalonamento;
- informações mínimas.

---

# Invariante de Interoperabilidade de Atenção

Organizações diferentes deverão conseguir interpretar suficientemente as necessidades de atenção compartilhadas.

---

# Evento de Política

Mudanças na própria Gestão de Atenção poderão produzir Eventos.

Exemplo:

`POLITICA_X_ATUALIZADA`

`SILENCIAMENTO_ATIVADO`

`ESCALA_DE_PLANTAO_ALTERADA`

---

# Invariante de Auto-Referência Governada

A Gestão de Atenção deverá conseguir observar mudanças em sua própria configuração.

---

# Invariantes Fundamentais de Eventos, Alertas e Gestão de Atenção

A Engenharia Oficial estabelece os seguintes Invariantes.

---

# Invariante 1 — Evento não é Alerta

Um acontecimento não deverá ser confundido automaticamente com necessidade de atenção.

---

# Invariante 2 — Alerta não é Notificação

A comunicação não deverá substituir a identidade do Alerta.

---

# Invariante 3 — Alerta não é Incidente

Atenção e coordenação formal são níveis distintos.

---

# Invariante 4 — Todo Alerta Deve Possuir Razão Operacional

Alertas não deverão existir apenas porque uma ferramenta pode gerá-los.

---

# Invariante 5 — Alertas Interruptivos Devem Ser Acionáveis

Interromper alguém deverá possuir expectativa razoável de ação.

---

# Invariante 6 — Prioridade Deve Ser Contextual

Intensidade técnica isolada não determina urgência institucional.

---

# Invariante 7 — O Alerta Deve Possuir Estado

Uma condição persistente não deverá gerar objetos independentes indefinidamente.

---

# Invariante 8 — ACK não é Resolução

Assumir responsabilidade não elimina a condição.

---

# Invariante 9 — Entrega não é ACK

Canal tecnicamente bem-sucedido não demonstra ownership.

---

# Invariante 10 — Owner Estrutural e Owner de Resposta Podem Diferir

A responsabilidade temporária deverá permanecer compreensível.

---

# Invariante 11 — Alertas Críticos não Devem Permanecer Órfãos

Ausência de Owner efetivo deverá ser detectável.

---

# Invariante 12 — Roteamento Deve Respeitar Competência e Autoridade

Enviar para alguém disponível, mas incapaz, não resolve atenção.

---

# Invariante 13 — Menor Audiência Suficiente

Broadcast indiscriminado não deverá substituir roteamento.

---

# Invariante 14 — Escalonamento Deve Preservar Contexto

Subir de nível não deverá reiniciar investigação.

---

# Invariante 15 — Silenciamento Deve Expirar

Exceções não deverão tornar-se cegueira permanente.

---

# Invariante 16 — Supressão não Deve Apagar Evidência

Redução de ruído não significa destruição de história.

---

# Invariante 17 — Deduplicação não Deve Esconder Expansão de Impacto

Compressão semântica deverá preservar mudanças relevantes.

---

# Invariante 18 — Alert Storm não Pode Derrubar a Capacidade de Resposta

Atenção deverá permanecer resiliente durante falhas amplas.

---

# Invariante 19 — Canal Também Possui Saúde

A infraestrutura de entrega deverá ser observável.

---

# Invariante 20 — Quiet Hours não Eliminam Responsabilidade

Responsabilidades formais poderão ultrapassar preferências pessoais.

---

# Invariante 21 — Atenção Institucional Deve Sobreviver à Ausência de Pessoas

A obrigação não deverá desaparecer quando participante fica offline.

---

# Invariante 22 — Preferência não Deve Superar Criticidade

Personalização deverá respeitar responsabilidade.

---

# Invariante 23 — Automação não Deve Apagar História

Auto-Remediação bem-sucedida continua sendo Evento operacional.

---

# Invariante 24 — Agentes Devem Reduzir Carga Cognitiva

Agentes não deverão apenas aumentar volume de mensagens.

---

# Invariante 25 — Hipótese Deve Permanecer Hipótese

IA ou humano não deverá transformar inferência em causa confirmada sem Evidência.

---

# Invariante 26 — Handover Deve Preservar Contexto

Troca de responsável não deverá reiniciar compreensão.

---

# Invariante 27 — Políticas Também Possuem Lifecycle

Regras não são permanentes por padrão.

---

# Invariante 28 — Políticas Críticas Devem Possuir Owner

Configuração sem responsabilidade representa risco.

---

# Invariante 29 — Políticas Devem Poder Ser Testadas

Configuração não demonstra funcionamento.

---

# Invariante 30 — Recorrência Deve Ser Percebida

Resolver ocorrências individuais não deverá ocultar fragilidade estrutural.

---

# Invariante 31 — Métricas não Devem Criar Comportamento Artificial

A otimização da equipe não deverá ser reduzida a um único indicador.

---

# Invariante 32 — Fadiga é Propriedade Sistêmica

Sobrecarga humana deverá ser tratada como sinal operacional.

---

# Invariante 33 — Atenção Deve Ser Governada

Quem pode interromper, silenciar ou escalar deverá possuir autoridade apropriada.

---

# Invariante 34 — Políticas Federadas Devem Preservar Semântica Suficiente

Organizações distintas deverão conseguir cooperar na resposta.

---

# Invariante 35 — A Atenção Deve Permanecer Auditável

Mudanças críticas na cadeia de resposta deverão possuir Proveniência.

---

# Garantias Mínimas da Gestão de Atenção

Uma implementação adequada deverá garantir, conforme criticidade:

- identidade de Alertas;
- Estado;
- prioridade;
- ownership;
- roteamento;
- entrega;
- reconhecimento;
- escalonamento;
- resolução;
- histórico;
- Proveniência.

---

# Garantia de Roteamento

Uma condição relevante deverá possuir caminho para chegar à capacidade de resposta adequada.

---

# Garantia de Não Orfandade

Alertas críticos deverão possuir mecanismo de escalonamento quando nenhum responsável assumir atenção.

---

# Garantia de Continuidade

Alertas deverão sobreviver a:

- troca de turno;
- mudança de Operador;
- falha de canal;
- mudança de organização.

---

# Garantia de Canal Alternativo

Quando Criticidade exigir...

deverá existir caminho alternativo de comunicação.

---

# Garantia de Contexto

O responsável deverá receber informação suficiente para iniciar resposta.

---

# Garantia de Memória

A resolução não deverá apagar história necessária.

---

# Garantia de Revisão

Políticas críticas deverão poder ser avaliadas e modificadas.

---

# Garantia de Sustentabilidade

A atenção humana deverá permanecer compatível com capacidade real de resposta.

---

# Garantia de Interoperabilidade

Alertas federados deverão preservar significado suficiente entre organizações.

---

# Anti-Padrões da Gestão de Atenção

A Engenharia Oficial deverá reconhecer condições de baixa maturidade.

---

# Anti-Padrão — Alerta é Log com Push

Qualquer mensagem técnica vira interrupção.

---

# Anti-Padrão — Tudo é Crítico

Se tudo possui prioridade máxima...

Nada possui prioridade real.

---

# Anti-Padrão — Broadcast para Todos

A responsabilidade torna-se difusa.

---

# Anti-Padrão — ACK Automático Vazio

Um sistema marca como reconhecido...

Mas nenhum responsável assumiu atenção.

---

# Anti-Padrão — Página sem Ação

O Operador é acordado...

Mas não existe nada que possa fazer.

---

# Anti-Padrão — Silenciar até Sumir

Alertas ruins são silenciados em vez de corrigidos.

---

# Anti-Padrão — Paging como Dashboard

Um canal interruptivo é utilizado para informação contínua.

---

# Anti-Padrão — Plantão Fantasma

Existe escala formal...

Mas ninguém realmente consegue responder.

---

# Anti-Padrão — Escalonamento sem Contexto

Cada novo participante pergunta:

> O que aconteceu?

---

# Anti-Padrão — Resolver ao Fechar Ticket

A ferramenta fecha...

Mas a condição continua.

---

# Anti-Padrão — Notificar não é Coordenar

A organização presume que enviar mensagem equivale a resposta.

---

# Anti-Padrão — Política sem Owner

Ninguém sabe quem deve corrigir uma Regra ruim.

---

# Anti-Padrão — Alerta Imortal

A Política continua existindo anos depois de o Serviço ter mudado.

---

# Anti-Padrão — Falso Positivo Normalizado

Operadores aprendem a ignorar determinado paging.

---

# Anti-Padrão — Heroísmo de Plantão

Uma pessoa sustenta continuamente toda a capacidade de resposta.

---

# Anti-Padrão — IA como Pager Universal

Agentes geram grandes volumes de “insights” sem necessidade de ação.

---

# Anti-Padrão — Métrica de ACK como Meta Absoluta

A equipe aprende a clicar antes de compreender.

---

# Critérios de Maturidade

A maturidade da Gestão de Atenção poderá evoluir progressivamente.

---

# Maturidade Reativa

Problemas são percebidos principalmente por reclamações.

---

# Maturidade Notificadora

Sinais geram Alertas...

Mas com alto ruído.

---

# Maturidade Roteada

Alertas chegam a responsáveis identificáveis.

---

# Maturidade Acionável

A maioria das interrupções possui ação clara.

---

# Maturidade Contextual

Alertas incluem:

- impacto;
- dependências;
- Evidências;
- histórico.

---

# Maturidade Correlacionada

Alertas relacionados são agrupados.

---

# Maturidade Automatizada

Condições previsíveis podem ser tratadas automaticamente.

---

# Maturidade Cognitiva

Agentes reduzem ruído e preparam contexto.

---

# Maturidade Sustentável

Paging e plantão permanecem compatíveis com saúde humana.

---

# Maturidade Adaptativa

Políticas aprendem com:

- falsos positivos;
- recorrência;
- comportamento real;
- mudanças arquiteturais.

---

# Maturidade Federada

Múltiplas organizações conseguem compartilhar e assumir atenção preservando responsabilidade.

---

# Maturidade Institucional

A Plataforma consegue responder continuamente:

> Existe algo que precisa de atenção?

> Quem está cuidando?

> Qual é a prioridade?

> O que já foi feito?

> A resposta está funcionando?

> Precisamos escalar?

---

# Próxima Dimensão

Com memória, Governança, lifecycle de Políticas, testes, métricas, fadiga, Invariantes e Garantias estabelecidos...

o próximo lote deverá consolidar o arquivo `009` através de:

- modelo integrado da cadeia de atenção;
- relação final com `008`;
- relação com `010`;
- relação com CCM;
- relação com Eva;
- relação com Agentes e Automações;
- filosofia permanente;
- Princípio Final;
- conclusão do arquivo;
- transição para `010-incidentes-e-coordenacao-de-resposta.md`.

---

# Modelo Integrado da Cadeia de Atenção

A Gestão de Atenção deverá ser compreendida como uma cadeia completa.

Não basta detectar.

Não basta alertar.

Não basta notificar.

Não basta receber ACK.

Não basta executar uma ação.

O valor operacional existe quando a cadeia consegue transformar uma condição relevante em resposta adequada.

Conceitualmente:

`REALIDADE`

↓

`EVENTO / SINAL`

↓

`EVIDENCIA`

↓

`CONDICAO`

↓

`SAUDE / RISCO`

↓

`NECESSIDADE DE ATENCAO`

↓

`ALERTA`

↓

`PRIORIDADE`

↓

`ROTEAMENTO`

↓

`NOTIFICACAO`

↓

`ENTREGA`

↓

`RECONHECIMENTO`

↓

`RESPONSABILIDADE`

↓

`RESPOSTA`

↓

`RESULTADO`

↓

`RESOLUCAO / INCIDENTE`

↓

`MEMORIA`

↓

`APRENDIZAGEM`

---

# A Cadeia não Deve Possuir Pontos Cegos

Cada transição representa uma possibilidade de falha.

A condição pode ser detectada...

Mas o Alerta pode não ser criado.

O Alerta pode ser criado...

Mas roteado para o lugar errado.

A Notificação pode ser enviada...

Mas nunca recebida.

Pode ser recebida...

Mas nunca reconhecida.

Pode ser reconhecida...

Mas nenhuma ação acontecer.

Pode haver ação...

Mas sem resultado.

Por isso...

OPS deverá observar a cadeia inteira.

---

# Invariante de Atenção End-to-End

A eficácia da Gestão de Atenção deverá ser avaliada pela capacidade de levar uma condição relevante até resposta adequada.

---

# Falha de Detecção

A condição existe...

Mas nenhum Evento ou Sinal suficiente é produzido.

Essa falha pertence principalmente ao domínio de Observabilidade e Saúde.

---

# Falha de Classificação

A condição é percebida...

Mas não é considerada relevante.

---

# Falha de Abertura

A condição merece atenção...

Mas nenhum Alerta é criado.

---

# Falha de Roteamento

O Alerta existe...

Mas chega ao responsável errado.

---

# Falha de Entrega

O canal não consegue transmitir a Notificação.

---

# Falha de Reconhecimento

A comunicação chega...

Mas ninguém assume responsabilidade.

---

# Falha de Resposta

Responsabilidade foi assumida...

Mas nenhuma ação adequada ocorre.

---

# Falha de Resultado

Uma ação é executada...

Mas a condição continua.

---

# Falha de Encerramento

A condição foi resolvida...

Mas o Alerta permanece ativo.

---

# Falha de Memória

Tudo foi resolvido...

Mas a organização não aprende nada.

---

# Invariante de Falhas Distinguíveis

OPS deverá permitir distinguir em qual ponto a cadeia de atenção falhou.

---

# Saúde da Cadeia de Atenção

A própria cadeia poderá possuir Estado.

Por exemplo:

`DETECCAO = SAUDAVEL`

`ROTEAMENTO = SAUDAVEL`

`ENTREGA = DEGRADADA`

`ACK = SAUDAVEL`

`RESPOSTA = EM_RISCO`

---

# Invariante de Saúde Reflexiva

A Gestão de Atenção deverá poder observar sua própria capacidade de produzir resposta.

---

# Relação Final com 008 — Saúde Operacional e Gestão de Sinais

O arquivo `008` responde principalmente:

> O que a realidade operacional está dizendo?

> Qual é a condição?

> Quão saudável está?

> Existe risco?

> Temos confiança nessa avaliação?

O arquivo `009` responde:

> Essa condição merece atenção?

> Quem deve recebê-la?

> Como essa atenção será administrada?

---

# Fronteira 008 ↔ 009

Conceitualmente:

`008`

`SINAL → EVIDENCIA → SAUDE → RISCO`

↓

`009`

`ATENCAO → ALERTA → ROTEAMENTO → RESPOSTA`

---

# Invariante de Fronteira com Saúde

O arquivo `009` não deverá redefinir como Saúde é calculada.

Deverá utilizar a Saúde como uma das principais entradas para decisão de atenção.

---

# Saúde Pode Existir sem Alerta

Uma Capacidade poderá estar:

`DEGRADADA`

sem exigir interrupção imediata.

---

# Alerta Pode Existir sem Saúde Degradada

Uma condição futura poderá exigir atenção.

Por exemplo:

`CERTIFICADO EXPIRA EM 6H`

Saúde atual:

`SAUDAVEL`

Atenção:

`URGENTE`

---

# Invariante Saúde ↔ Atenção

A Saúde descreve condição.

A Atenção descreve necessidade de resposta.

---

# Relação Final com 010 — Incidentes e Coordenação de Resposta

O `009` administra atenção.

O `010` administrará coordenação formal de resposta.

---

# Limite Conceitual

Enquanto uma condição puder ser tratada por um responsável ou mecanismo operacional simples...

poderá permanecer como Alerta.

Quando exigir:

- múltiplos participantes;
- coordenação;
- liderança;
- comunicação estruturada;
- decisões de maior impacto;
- contexto persistente;

poderá tornar-se Incidente.

---

# Invariante de Promoção Proporcional

OPS não deverá criar Incidente apenas por formalidade.

A coordenação deverá surgir quando a complexidade da resposta justificar.

---

# Incidente Pode Nascer de Muitos Alertas

Um único Incidente poderá reunir:

- dezenas de Eventos;
- muitos Alertas;
- vários Serviços;
- diversas organizações.

---

# Alerta Pode Permanecer Dentro de Incidente

A criação de Incidente não deverá apagar Alertas existentes.

Eles poderão continuar fornecendo:

- Evidências;
- Estado;
- histórico;
- mudanças.

---

# Invariante de Preservação de Objetos

A promoção para Incidente deverá integrar contextos...

Não destruir objetos operacionais já existentes.

---

# Relação com CCM

CCM coordena Missões.

OPS coordena atenção operacional sobre Capacidades e Serviços.

---

# Atenção Missional

Uma condição operacional poderá adquirir prioridade superior quando impactar Missão crítica.

---

# Exemplo

Inicialmente:

`SERVICO_X = DEGRADADO`

`ATENCAO = MODERADA`

Depois:

CCM informa:

`MISSAO_Y = CRITICA`

`MISSAO_Y DEPENDE_DE SERVICO_X`

OPS poderá reavaliar:

`ATENCAO = URGENTE`

---

# Invariante de Contexto Missional

OPS deverá permitir que contexto do CCM influencie prioridade operacional quando houver relação real de dependência.

---

# OPS não Decide o Valor da Missão

CCM deverá continuar responsável por:

- prioridade institucional;
- importância;
- compromisso;
- impacto estratégico.

OPS utilizará esse contexto para ajustar resposta operacional.

---

# Atenção Operacional para o CCM

OPS poderá informar:

> A Capacidade necessária para a Missão está degradada.

> Existe risco de indisponibilidade nos próximos 20 minutos.

> A redundância foi perdida.

> Existe Contingência disponível.

---

# Invariante de Informação sem Inversão

OPS deverá informar condição e risco...

Sem assumir decisão missional que pertence ao CCM.

---

# CCM Pode Gerar Necessidade de Atenção em OPS

Uma Missão poderá criar necessidade extraordinária.

Por exemplo:

> Esta Missão exigirá três vezes a capacidade atual nas próximas duas horas.

OPS poderá gerar atenção preventiva para:

- expansão;
- reserva;
- validação;
- acompanhamento.

---

# Invariante de Atenção Preventiva por Missão

A atenção operacional poderá surgir não apenas de falhas...

Mas de necessidades futuras conhecidas.

---

# Relação com Eva

Eva poderá funcionar como uma das superfícies naturais da Gestão de Atenção.

---

# Eva não é o Sistema de Alertas

Atenção deverá continuar existindo mesmo que a interface conversacional esteja indisponível.

Eva representa uma projeção e mediação da cadeia.

---

# Invariante de Independência da Interface

A indisponibilidade de Eva não deverá eliminar Alertas, ownership ou escalonamento.

---

# Eva como Tradutora

Ela poderá converter linguagem operacional em linguagem adequada ao destinatário.

---

# Exemplo Técnico

`ALERTA CRITICO`

`SERVICO_DE_IDENTIDADE`

`P95 = 4.2s`

`ERROR_RATE = 18%`

`DEPENDENCIA_Y = DEGRADADA`

---

# Para Operador

Eva poderá dizer:

> O Serviço de Identidade está criticamente degradado. A latência e os erros aumentaram, e a Dependência Y é a principal hipótese no momento.

---

# Para Liderança

> A autenticação está degradada e já afeta funções críticas. A resposta operacional está em andamento.

---

# Para Usuário

> O acesso está temporariamente instável. A recuperação já está sendo tratada.

---

# Invariante de Síntese Adequada

A forma de comunicar poderá mudar.

O significado essencial não.

---

# Eva como Inbox Conversacional

Um participante poderá perguntar:

> O que precisa da minha atenção agora?

Eva poderá responder a partir da Fila de Atenção.

---

# Exemplo

> Você tem três itens relevantes:
>
> Um Alerta urgente no Serviço X.
>
> Uma aprovação operacional pendente.
>
> E uma condição de risco que precisa ser revisada até o fim do turno.

---

# Invariante de Priorização Conversacional

A ordem apresentada deverá refletir prioridade operacional...

Não simplesmente ordem cronológica.

---

# Eva e Ação

Um participante autorizado poderá responder:

> Reconhece o primeiro.

Ou:

> Me mostra as Evidências.

Ou:

> Escala isso para a equipe de banco.

---

# Invariante de Ação Conversacional Governada

A linguagem natural não deverá contornar:

- autorização;
- confirmação;
- limites;
- rastreabilidade.

---

# Relação com Agentes

Agentes poderão participar profundamente da Gestão de Atenção.

---

# Agente Observador

Pode acompanhar filas e condições.

---

# Agente Correlacionador

Pode reduzir muitos Sinais a poucos contextos.

---

# Agente Triador

Pode sugerir prioridade e roteamento.

---

# Agente Investigador

Pode coletar Evidências adicionais.

---

# Agente Scribe

Pode manter Linha do Tempo.

---

# Agente Recomendador

Pode sugerir próxima ação.

---

# Agente Executor

Pode agir dentro de autoridade permitida.

---

# Invariante de Função Cognitiva Explícita

O papel exercido por cada Agente deverá permanecer compreensível.

---

# Agente não Deve Criar Atenção Infinita

Um Agente que produz continuamente recomendações pouco úteis representa nova fonte de ruído.

---

# Invariante de Utilidade Cognitiva

Agentes deverão ser avaliados também pela quantidade de carga cognitiva que reduzem ou aumentam.

---

# Confiança da Recomendação

Um Agente poderá dizer:

`HIPOTESE = SATURACAO`

`CONFIANCA = 0.82`

---

# Invariante de Incerteza Cognitiva

A recomendação deverá preservar grau apropriado de confiança.

---

# Agente e Autoridade

Um Agente poderá ter autoridade para:

- reconhecer;
- coletar diagnóstico;
- executar ação reversível;
- abrir Incidente.

Outro poderá apenas recomendar.

---

# Invariante de Autonomia Proporcional

A autonomia deverá acompanhar:

- impacto;
- reversibilidade;
- histórico;
- confiabilidade;
- Criticidade.

---

# Relação com Automações

Automações deverão cuidar preferencialmente de respostas previsíveis.

---

# Auto-Remediação

Uma condição conhecida poderá ser tratada automaticamente.

---

# Auto-Acknowledgement

Somente deverá ocorrer quando a Automação realmente assumir responsabilidade por tratar a condição.

---

# Invariante de ACK Automatizado Real

A Plataforma não deverá utilizar ACK automático apenas para melhorar métrica de reconhecimento.

---

# Automação como Primeira Linha

Algumas condições poderão seguir:

`ALERTA`

↓

`AUTOMACAO`

↓

`VALIDACAO`

↓

`RESOLVIDO`

Sem interromper humano.

---

# Automação como Preparação

Outra poderá:

- coletar logs;
- abrir contexto;
- verificar dependências;
- preparar Runbook;

antes de envolver Operador.

---

# Invariante de Preparação Automatizada

Automação deverá reduzir tempo até ação sem alterar Evidências ou Estado de maneira insegura.

---

# Falha da Automação como Novo Evento

Quando a resposta automática falhar...

isso deverá produzir nova Evidência.

---

# Exemplo

`AUTO_REMEDIACAO_FALHOU`

↓

`PRIORIDADE +1`

↓

`ROTEAMENTO HUMANO`

---

# Invariante de Falha Visível

Uma Automação silenciosamente falha não deverá produzir falsa sensação de tratamento.

---

# Modelo Integrado Humano–Agente–Automação

A Gestão de Atenção deverá favorecer uma relação complementar.

---

# Automação

É forte em:

- repetição;
- velocidade;
- consistência.

---

# Agentes

São fortes em:

- correlação;
- síntese;
- recuperação de contexto;
- análise.

---

# Humanos

São fundamentais para:

- julgamento;
- legitimidade;
- responsabilidade;
- exceção;
- decisão de alto impacto.

---

# Fórmula Conceitual

`ATENCAO`

↓

`AUTOMATIZAR O PREVISIVEL`

↓

`COGNITIVAR O COMPLEXO`

↓

`ESCALAR O QUE EXIGE JULGAMENTO`

---

# Invariante de Complementaridade

OPS não deverá utilizar humanos para trabalho mecânico quando Automação segura puder fazê-lo...

Nem utilizar Automação cega para decisões que exigem julgamento.

---

# Filosofia da Gestão de Atenção

A Engenharia Oficial compreende que atenção é uma das capacidades mais escassas da operação.

Sistemas conseguem produzir Sinais em escala praticamente ilimitada.

Pessoas não conseguem consumir atenção em escala ilimitada.

Agentes também possuem limites:

- contexto;
- qualidade;
- custo;
- autoridade.

Por isso...

o problema fundamental não é produzir mais visibilidade.

É produzir significado suficiente para mobilizar a resposta adequada.

---

# Atenção não é Ruído Amplificado

Uma operação imatura transforma cada Sinal em interrupção.

Uma operação madura transforma milhões de Sinais em poucos contextos acionáveis.

---

# Atenção como Compressão Institucional

Existe uma propriedade profunda nesse modelo.

Quando centenas de Eventos são correlacionados...

Quando dezenas de Alertas são agrupados...

Quando a topologia explica impacto...

Quando um Agente sintetiza Evidências...

Quando Eva apresenta apenas o necessário...

A Plataforma está realizando:

**Compressão Cognitiva Institucional.**

---

# Compressão não é Ocultação

Ela deverá reduzir complexidade aparente...

Sem destruir a possibilidade de aprofundamento.

---

# Invariante de Complexidade Reversível

Toda simplificação relevante deverá permitir navegar de volta ao contexto necessário.

---

# Atenção como Responsabilidade

Um Alerta não é apenas:

> Algo aconteceu.

Ele representa:

> Algo precisa ser cuidado.

Por isso...

o verdadeiro destino da atenção não é uma caixa de entrada.

É uma responsabilidade.

---

# Invariante de Atenção Responsável

Toda condição crítica deverá possuir caminho até uma responsabilidade efetivamente assumida.

---

# Atenção como Continuidade

Pessoas mudam.

Turnos mudam.

Organizações mudam.

Canais mudam.

Ferramentas mudam.

Mas uma condição ainda não resolvida deverá continuar existindo como obrigação operacional.

---

# Invariante de Continuidade da Obrigação

A troca de participante não deverá transformar uma condição ativa em condição esquecida.

---

# Atenção sem Heroísmo

Uma operação madura não deverá depender de alguém:

> perceber por acaso.

> lembrar de verificar.

> estar acordado.

> conhecer a pessoa certa.

A Gestão de Atenção deverá transformar necessidade em processo institucional.

---

# Invariante de Não Dependência de Sorte

Condições críticas deverão possuir mecanismos suficientes para alcançar resposta independentemente de coincidências pessoais.

---

# Atenção e Silêncio

O silêncio também precisa possuir significado.

Quando nenhuma atenção é apresentada...

a organização deverá possuir confiança razoável de que:

- não existem condições relevantes conhecidas;
- ou elas estão sendo tratadas adequadamente;
- ou a própria percepção está explicitamente degradada.

---

# Invariante de Silêncio Confiável

Um Painel vazio não deverá significar simplesmente:

> Nenhum Alerta foi gerado.

Deverá permitir distinguir ausência de problema de ausência de percepção.

---

# Atenção e Confiança

A Plataforma deverá poder responder:

> Estamos confiantes de que as condições críticas encontrarão resposta?

Essa é uma propriedade de Saúde da própria Gestão de Atenção.

---

# Garantia de Atenção Crítica

Para condições de Criticidade elevada...

OPS deverá buscar garantir:

- detecção suficiente;
- criação de Alerta;
- roteamento;
- entrega;
- ownership;
- escalonamento;
- continuidade.

---

# Isso não Significa Garantia de Resolução

A Plataforma poderá garantir a cadeia de atenção...

Mas não necessariamente que qualquer condição possa ser resolvida.

---

# Invariante de Honestidade da Garantia

OPS deverá distinguir:

> Garantimos que alguém será mobilizado.

de:

> Garantimos que o problema será resolvido.

---

# Princípio Final

Eventos, Alertas e Gestão de Atenção representam a capacidade permanente de OPS de transformar acontecimentos relevantes em responsabilidade operacional no tempo adequado.

Eventos respondem:

> O que aconteceu?

Saúde responde:

> O que isso significa para a condição operacional?

Atenção responde:

> Isso precisa ser cuidado agora?

Alertas respondem:

> Qual necessidade de atenção precisa ser administrada?

Roteamento responde:

> Quem deve cuidar?

Escalonamento responde:

> O nível atual de atenção é suficiente?

Incidentes respondem:

> Precisamos coordenar uma resposta mais ampla?

---

# Conclusão

A Engenharia Oficial estabelece Eventos, Alertas e Gestão de Atenção como fundamentos da capacidade da Plataforma UNO de não apenas perceber sua realidade...

Mas mobilizar resposta sobre ela.

Um Evento deverá possuir significado.

Um Alerta deverá possuir propósito.

Uma Notificação deverá possuir destinatário.

Um destinatário deverá possuir contexto.

Uma responsabilidade deverá possuir continuidade.

Uma resposta deverá possuir feedback.

E uma resolução deverá possuir memória.

---

OPS deverá impedir que a organização seja inundada pela própria observabilidade.

Deverá reduzir:

- ruído;
- duplicação;
- falsas urgências;
- difusão de responsabilidade.

E fortalecer:

- relevância;
- contexto;
- ownership;
- escalonamento;
- continuidade;
- aprendizagem.

---

Uma operação madura não é aquela que produz mais Alertas.

É aquela em que menos condições importantes conseguem permanecer sem resposta.

---

Onde houver acontecimento...

Poderá existir Evento.

Onde houver condição relevante...

Poderá existir necessidade de atenção.

Onde houver atenção...

Deverá existir responsabilidade.

Onde houver responsabilidade insuficiente...

Deverá existir escalonamento.

Onde houver múltiplos atores...

Poderá existir Incidente.

Onde houver resolução...

Deverá existir aprendizado.

E onde a Plataforma UNO conseguir transformar uma realidade operacional imensa em poucas responsabilidades claras, acionáveis e continuamente acompanhadas...

Existirá Gestão de Atenção.

---

# Encerramento do Arquivo 009

Com este documento...

o V08 estabelece:

- Eventos Operacionais;
- Alertas;
- Notificações;
- Políticas de Atenção;
- prioridade;
- roteamento;
- canais;
- reconhecimento;
- ownership;
- escalonamento;
- triagem;
- filas;
- silenciamento;
- supressão;
- lifecycle de Políticas;
- memória;
- qualidade;
- Governança;
- participação de Eva;
- participação de Agentes;
- participação de Automações.

A partir daqui...

o Volume deverá aprofundar o momento em que uma condição deixa de ser apenas uma necessidade de atenção...

e passa a exigir coordenação formal de resposta.

Essa será a responsabilidade de:

**010 — Incidentes e Coordenação de Resposta.**

---

**Fim do arquivo `009-eventos-alertas-e-gestao-de-atencao.md`.**
