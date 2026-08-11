# V08 — OPS

# 003 — Domínios e Capacidades Operacionais

## Engenharia Oficial da Plataforma UNO

---

# Introdução

O arquivo `002 — Modelo Operacional de OPS` estabeleceu a estrutura conceitual através da qual a Plataforma UNO representa sua realidade operacional.

Foram definidos elementos fundamentais como:

- Capacidade Operacional;
- Serviço Operacional;
- Componente Operacional;
- Recurso Operacional;
- Dependência;
- Estado;
- Evidência;
- Ação;
- Controle;
- Feedback;
- Grafo Operacional;
- OPS Runtime.

Entretanto...

O Modelo Operacional ainda precisa responder uma pergunta estrutural:

> Quais capacidades precisam existir para que OPS consiga cumprir sua função?

Essa pergunta conduz aos:

**Domínios e Capacidades Operacionais.**

---

# Propósito deste Arquivo

Este arquivo deverá estabelecer a arquitetura funcional de OPS.

Seu objetivo não será definir ferramentas.

Também não será definir equipes.

Nem impor uma estrutura organizacional única.

O objetivo será identificar:

> quais funções operacionais precisam existir.

E:

> como essas funções se relacionam dentro do OPS Runtime.

---

# Domínio Operacional

Um Domínio Operacional representa uma área coerente de responsabilidade funcional dentro de OPS.

Ele agrupa Capacidades Operacionais relacionadas por finalidade.

Por exemplo...

Observar sistemas é diferente de responder a Incidentes.

Responder a Incidentes é diferente de administrar capacidade.

Administrar capacidade é diferente de garantir recuperabilidade.

Essas funções se relacionam.

Mas possuem responsabilidades próprias.

---

# Invariante de Domínio Funcional

Um Domínio Operacional deverá ser definido principalmente pelo problema operacional que resolve.

Não pela ferramenta utilizada.

Não pelo nome de uma equipe.

Não pelo fornecedor.

Não pela tecnologia atual.

---

# Exemplo

Não deverá existir conceitualmente:

`DOMINIO_DATADOG`

ou:

`DOMINIO_KUBERNETES`

ou:

`DOMINIO_SERVICENOW`

Esses elementos poderão participar da implementação.

Mas não definem a função operacional.

---

# Exemplo Funcional

Poderão existir domínios como:

`OBSERVABILIDADE`

`GESTAO_DE_INCIDENTES`

`GESTAO_DE_MUDANCAS`

`CAPACIDADE_E_DESEMPENHO`

`RECUPERACAO`

Esses conceitos sobrevivem à substituição das ferramentas.

---

# Invariante de Independência Tecnológica

A arquitetura de Domínios Operacionais deverá permanecer válida mesmo quando tecnologias específicas forem substituídas.

---

# Capacidade Operacional no Contexto de OPS

No arquivo anterior...

Capacidade Operacional foi estabelecida como aquilo que a organização precisa conseguir realizar ou disponibilizar de maneira sustentada.

Dentro deste arquivo...

Esse conceito será utilizado para decompor a própria função de OPS.

Assim...

OPS também possui Capacidades Operacionais.

---

# Exemplo

Para operar adequadamente...

OPS precisa conseguir:

- descobrir o que existe;
- observar o que está acontecendo;
- determinar Estado;
- detectar desvios;
- coordenar resposta;
- executar mudanças;
- restaurar capacidades;
- operar contingências;
- compreender dependências;
- administrar capacidade;
- preservar conhecimento;
- aprender com a operação.

Cada uma dessas necessidades poderá originar uma ou mais Capacidades Operacionais.

---

# Domínio e Capacidade não são a Mesma Coisa

Um:

**Domínio Operacional**

agrupa responsabilidades relacionadas.

Uma:

**Capacidade Operacional**

representa algo que OPS precisa conseguir fazer.

---

# Exemplo

Domínio:

`OBSERVABILIDADE_OPERACIONAL`

Poderá possuir Capacidades como:

- coletar Sinais;
- armazenar telemetria;
- correlacionar Evidências;
- executar verificações sintéticas;
- observar experiência do consumidor;
- avaliar qualidade da observabilidade.

---

# Outro Exemplo

Domínio:

`RESPOSTA_A_INCIDENTES`

Poderá possuir Capacidades como:

- declarar Incidente;
- classificar Severidade;
- mobilizar responsáveis;
- coordenar resposta;
- registrar Linha do Tempo;
- escalar;
- comunicar;
- validar recuperação.

---

# Invariante de Separação Domínio ↔ Capacidade

Um Domínio organiza significado.

Uma Capacidade representa possibilidade operacional.

Essa distinção deverá permanecer clara.

---

# Capacidade não é Processo

Uma Capacidade poderá ser realizada através de diferentes processos.

Por exemplo:

`RECUPERAR_SERVICO`

é uma Capacidade.

Ela poderá ser realizada por:

- Runbook manual;
- Automação;
- controlador;
- Agente;
- procedimento de fornecedor;
- operação federada.

O processo poderá mudar.

A Capacidade permanece.

---

# Capacidade não é Ferramenta

Uma ferramenta poderá materializar várias Capacidades.

E uma mesma Capacidade poderá depender de várias ferramentas.

---

# Capacidade não é Equipe

Uma equipe poderá fornecer múltiplas Capacidades.

Uma Capacidade poderá ser compartilhada entre várias equipes.

Em ambientes federados...

Organizações diferentes poderão fornecer partes da mesma Capacidade.

---

# Invariante de Independência Organizacional

O Modelo de Capacidades deverá sobreviver a reorganizações internas.

---

# Capacidade não é Serviço Operacional

Essa distinção será particularmente importante.

Uma Capacidade representa:

> aquilo que OPS precisa conseguir realizar.

Um Serviço Operacional representa:

> uma unidade reconhecível através da qual determinada função é entregue.

---

# Exemplo

Capacidade:

`DETECTAR_DEGRADACAO`

Poderá utilizar:

- Serviço de Métricas;
- Serviço de Logs;
- Serviço de Tracing;
- Serviço de Synthetic Monitoring;
- Serviço de Correlação.

Assim...

Capacidade e Serviço se relacionam.

Mas não são equivalentes.

---

# Capacidade Composta

Algumas Capacidades poderão depender de outras Capacidades.

Por exemplo:

`RESPONDER_A_INCIDENTE`

poderá depender de:

- detectar condição;
- avaliar impacto;
- identificar responsáveis;
- executar ações;
- comunicar;
- validar recuperação.

---

# Invariante de Composição

OPS deverá permitir que Capacidades complexas sejam decompostas em Capacidades menores sem perder sua finalidade original.

---

# Capacidade Atômica

Uma Capacidade poderá ser considerada suficientemente atômica quando sua decomposição adicional não produzir valor significativo para o Modelo Operacional.

Isso não significa que ela seja tecnicamente simples.

Significa apenas que...

para o nível de arquitetura sendo representado...

ela pode ser tratada como unidade funcional.

---

# Granularidade

Capacidades excessivamente amplas produzem pouca informação.

Por exemplo:

`OPERAR_PLATAFORMA`

é verdadeiro.

Mas pouco útil.

---

# Granularidade Excessiva

No extremo oposto...

Capacidades como:

`CLICAR_BOTAO_RESTART`

ou:

`CONSULTAR_LOG_LINHA_143`

representam detalhes de procedimento.

Não arquitetura funcional.

---

# Invariante de Granularidade Útil

Uma Capacidade Operacional deverá possuir granularidade suficiente para permitir:

- ownership;
- avaliação de maturidade;
- identificação de dependências;
- análise de lacunas;
- evolução;

sem transformar o Modelo de Capacidades em catálogo de tarefas.

---

# Hierarquia de Capacidades

OPS poderá organizar Capacidades em diferentes níveis.

Conceitualmente:

`DOMINIO`

↓

`CAPACIDADE`

↓

`SUBCAPACIDADE`

↓

`MECANISMO`

---

# Exemplo

`DOMINIO = RECUPERACAO`

↓

`CAPACIDADE = RECUPERAR_SERVICO`

↓

`SUBCAPACIDADE = EXECUTAR_FAILOVER`

↓

`MECANISMO = AUTOMACAO_DE_FAILOVER_REGIONAL`

---

# Invariante de Não Confusão de Níveis

Domínio, Capacidade, Subcapacidade e mecanismo de implementação deverão permanecer conceitualmente distinguíveis.

---

# Arquitetura de Capacidades de OPS

A Engenharia Oficial deverá organizar OPS em um conjunto de Domínios Operacionais fundamentais.

A primeira estrutura será:

1. **Descoberta e Catálogo Operacional**
2. **Observabilidade e Evidência**
3. **Saúde, Estado e Atenção**
4. **Incidentes e Resposta Operacional**
5. **Problemas e Confiabilidade**
6. **Mudanças e Transições Operacionais**
7. **Configuração e Reconciliação**
8. **Capacidade, Desempenho e Saturação**
9. **Disponibilidade e Objetivos de Serviço**
10. **Dependências e Impacto**
11. **Recuperação, Contingência e Continuidade**
12. **Runbooks e Conhecimento Operacional**
13. **Automação e Controle Operacional**
14. **Operação Assistida por Agentes**
15. **Segurança Operacional**
16. **Dados, Integrações e Fluxos Operacionais**
17. **Operação Federada**
18. **Continuidade Humana e Coordenação**
19. **Operação Crítica e Crise**
20. **Inteligência e Aprendizagem Operacional**

Esses Domínios formarão uma arquitetura funcional inicial.

---

# A Lista não é uma Estrutura Organizacional

A existência de vinte Domínios não significa:

- vinte equipes;
- vinte sistemas;
- vinte departamentos;
- vinte Owners independentes.

Uma única equipe poderá atuar em vários Domínios.

Um mesmo Serviço poderá sustentar Capacidades de vários Domínios.

---

# Invariante de Arquitetura sem Organograma

A arquitetura funcional de OPS não deverá ser confundida com o organograma de quem a implementa.

---

# Domínios Também Formam um Grafo

Assim como o Modelo Operacional...

A arquitetura de Capacidades não deverá ser interpretada como uma lista isolada.

Os Domínios possuem relações.

---

# Exemplo

`OBSERVABILIDADE`

fornece Evidência para:

`SAUDE_E_ESTADO`

que poderá gerar atenção para:

`INCIDENTES`

que poderá executar ações através de:

`AUTOMACAO_E_CONTROLE`

e utilizar:

`RUNBOOKS`

para restaurar capacidades através de:

`RECUPERACAO`

Enquanto:

`APRENDIZAGEM_OPERACIONAL`

utiliza Evidências de todo esse ciclo.

---

# Grafo de Capacidades de OPS

Conceitualmente:

`DESCOBERTA E CATALOGO`

↓

`OBSERVABILIDADE`

↓

`SAUDE E ESTADO`

↓

`ATENCAO`

↓

`RESPOSTA`

↓

`RECUPERACAO`

↓

`VALIDACAO`

↓

`APRENDIZAGEM`

↓

`MELHORIA`

Entretanto...

Mudanças, Configuração, Capacidade, Segurança, Federação e Continuidade atravessam todo esse fluxo.

---

# Domínios Transversais

Alguns Domínios terão natureza fortemente transversal.

Por exemplo:

- Segurança Operacional;
- Automação;
- Agentes;
- Federação;
- Conhecimento;
- Inteligência Operacional.

Eles não deverão existir apenas no final de determinado processo.

Eles participam de múltiplas etapas.

---

# Invariante de Transversalidade

Uma Capacidade transversal não deverá ser artificialmente confinada a uma única etapa do Ciclo Operacional.

---

# Domínio 1 — Descoberta e Catálogo Operacional

OPS precisa saber:

> O que existe?

Esse é o primeiro problema.

Não é possível operar conscientemente aquilo que não pode ser identificado.

---

# Propósito do Domínio

O Domínio de Descoberta e Catálogo deverá manter compreensão suficiente sobre:

- Capacidades;
- Serviços;
- Componentes;
- Owners;
- Providers;
- Consumers;
- dependências;
- criticidade;
- ciclo de vida.

---

# Capacidades Fundamentais do Domínio

Poderão incluir:

- descobrir ativos operacionais;
- registrar Serviços;
- identificar Capacidades;
- associar ownership;
- manter metadados;
- acompanhar ciclo de vida;
- detectar elementos órfãos;
- detectar informação obsoleta;
- relacionar Serviços e Capacidades.

---

# Descoberta

A Descoberta poderá ocorrer de maneira:

- manual;
- automática;
- declarativa;
- inferida;
- federada.

---

# Descoberta Manual

Uma equipe registra determinado Serviço.

---

# Descoberta Automatizada

OPS detecta componentes através de:

- runtime;
- infraestrutura;
- cloud;
- rede;
- deploy;
- telemetria.

---

# Descoberta Declarativa

A existência de um Serviço é declarada como código ou configuração.

---

# Descoberta Inferida

Um Agente poderá identificar:

> este componente parece representar dependência não registrada.

---

# Descoberta Federada

Outra organização poderá publicar informação sobre Capacidade ou Serviço que fornece.

---

# Invariante de Proveniência da Descoberta

Informação descoberta deverá preservar, quando relevante, como foi obtida.

---

# Catálogo Operacional

O Catálogo Operacional representa visão organizada dos elementos reconhecidos por OPS.

Ele poderá conter:

- identidade;
- função;
- Owner;
- Provider;
- Consumers;
- Criticidade;
- dependências;
- Estado;
- documentação;
- Runbooks;
- objetivos;
- contingências.

---

# Catálogo não é Inventário Passivo

Um catálogo que apenas acumula registros...

Mas não acompanha a realidade...

perde valor operacional.

---

# Invariante de Catálogo Vivo

Informações operacionais relevantes deverão possuir mecanismos adequados de atualização, validação ou expiração.

---

# Registro Órfão

Um elemento poderá existir sem Owner conhecido.

Essa condição deverá tornar-se visível.

---

# Serviço Fantasma

Um Serviço poderá permanecer registrado...

Mesmo depois de sua retirada.

---

# Serviço Invisível

Um Serviço poderá estar operando...

Mas não existir no Catálogo.

---

# Invariante de Divergência Catálogo ↔ Runtime

Diferenças relevantes entre aquilo que está registrado e aquilo que está efetivamente operando deverão poder ser detectadas.

---

# Criticidade Operacional

O Catálogo poderá associar Criticidade às Capacidades e Serviços.

A Criticidade poderá considerar:

- Missões dependentes;
- impacto institucional;
- substituibilidade;
- recuperação;
- dados envolvidos;
- segurança;
- dependências.

---

# Criticidade não é Popularidade

Um Serviço pouco utilizado poderá ser extremamente crítico.

Um Serviço muito utilizado poderá possuir alternativas suficientes para reduzir sua criticidade estrutural.

---

# Invariante de Criticidade Contextual

A Criticidade deverá refletir consequência operacional...

Não apenas volume de uso.

---

# Ownership Operacional no Catálogo

Cada Capacidade relevante deverá possuir responsabilidade compreensível.

Poderão existir:

- Owner primário;
- Owner substituto;
- equipe responsável;
- Provider;
- escalonamento.

---

# Ownership Dinâmico

Durante Incidente...

a coordenação temporária poderá mudar.

Entretanto...

isso não elimina Ownership estrutural.

---

# Invariante de Ownership Persistente

Responsabilidade temporária de resposta não deverá apagar responsabilidade permanente sobre a Capacidade.

---

# Qualidade do Catálogo

O próprio Catálogo possui qualidade operacional.

Essa qualidade poderá considerar:

- cobertura;
- atualidade;
- completude;
- consistência;
- ownership;
- relações;
- confiabilidade.

---

# Capacidade de Detectar Lacunas

OPS deverá conseguir identificar condições como:

- Serviço sem Owner;
- Serviço sem dependências conhecidas;
- Serviço crítico sem Runbook;
- Capacidade sem contingência;
- registro sem atualização;
- componente sem Serviço relacionado.

---

# Catálogo como Base do Grafo Operacional

O Catálogo deverá fornecer parte significativa da estrutura necessária para formar o Grafo Operacional.

Entretanto...

não será necessariamente sua única fonte.

---

# Grafo Declarado e Grafo Observado

OPS poderá possuir:

**Grafo Declarado**

aquilo que a organização acredita existir.

E:

**Grafo Observado**

aquilo que Evidências indicam estar acontecendo.

---

# Exemplo

O Catálogo declara:

`SERVICO_A → DATABASE_A`

Mas tracing revela:

`SERVICO_A → API_B`

Essa relação poderá indicar Dependência não registrada.

---

# Invariante de Aprendizagem Topológica

O Grafo Operacional deverá poder evoluir quando a operação produzir Evidências confiáveis sobre novas relações.

---

# Domínio 2 — Observabilidade e Evidência

Depois de saber o que existe...

OPS precisa responder:

> O que está acontecendo?

Esse é o propósito do segundo Domínio.

---

# Propósito do Domínio

Observabilidade e Evidência deverá fornecer informação suficiente para compreender comportamento operacional.

---

# Capacidades Fundamentais

Poderão incluir:

- coletar métricas;
- coletar logs;
- coletar traces;
- receber Eventos;
- executar healthchecks;
- realizar verificações sintéticas;
- observar experiência do consumidor;
- preservar Evidência;
- consultar Evidência;
- correlacionar sinais;
- avaliar qualidade da própria observabilidade.

---

# Telemetria

Telemetria representa informação produzida por sistemas sobre seu comportamento.

Poderá incluir:

- métricas;
- logs;
- traces;
- Eventos;
- profiles;
- auditoria.

---

# Telemetria não é Observabilidade Completa

Possuir muitos dados não significa compreender o sistema.

Observabilidade exige capacidade de transformar sinais em compreensão operacional.

---

# Invariante de Evidência Utilizável

A coleta de dados deverá estar relacionada à capacidade de responder perguntas operacionais relevantes.

---

# Observabilidade Orientada à Capacidade

OPS não deverá observar apenas infraestrutura.

Também deverá conseguir relacionar Evidência a:

- Serviço;
- Capacidade;
- Consumer;
- Missão;
- Dependência.

---

# Exemplo

Não basta saber:

`CPU = 95%`

Também será necessário, quando possível, compreender:

> Qual Serviço utiliza esse recurso?

> Qual Capacidade depende dele?

> Existe impacto?

---

# Observabilidade Interna e Externa

A Evidência poderá vir de dentro do sistema.

Ou da perspectiva de quem o utiliza.

Ambas poderão ser necessárias.

---

# Observação da Jornada

Uma Capacidade poderá exigir verificação de uma jornada completa.

Por exemplo:

`AUTENTICAR`

↓

`CONSULTAR`

↓

`PROCESSAR`

↓

`CONFIRMAR`

Cada componente isoladamente poderá parecer saudável...

Enquanto a jornada completa falha.

---

# Invariante de Observabilidade Funcional

Capacidades críticas deverão possuir, quando tecnicamente possível, Evidência sobre sua função...

Não apenas sobre seus componentes.

---

# Qualidade da Evidência

Evidência poderá possuir propriedades como:

- atualidade;
- completude;
- precisão;
- Proveniência;
- confiança;
- cobertura.

---

# Evidência Ausente

A ausência de Evidência poderá ser operacionalmente relevante.

---

# Exemplo

Se um Serviço normalmente envia heartbeat a cada 30 segundos...

E nenhum heartbeat chega durante cinco minutos...

O silêncio torna-se Evidência.

---

# Invariante de Silêncio Observável

Quando ausência de sinal possuir significado operacional...

Ela deverá poder ser detectada.

---

# Observabilidade da Observabilidade

O próprio sistema de observação poderá falhar.

OPS deverá observar:

- collectors;
- pipelines;
- armazenamento;
- processamento;
- atraso;
- perda;
- cobertura.

---

# Invariante de Observabilidade Reflexiva

Capacidades críticas de observação deverão possuir mecanismos suficientes para detectar degradação da própria observabilidade.

---

# Evidência e Custo

Coletar tudo indefinidamente poderá ser:

- caro;
- desnecessário;
- inseguro;
- operacionalmente impraticável.

OPS deverá equilibrar:

- valor;
- retenção;
- granularidade;
- custo;
- privacidade;
- segurança.

---

# Invariante de Evidência Proporcional

A profundidade da Evidência deverá ser proporcional à necessidade operacional e ao risco.

---

# Próxima Dimensão

Com os conceitos de Domínio e Capacidade estabelecidos...

E com os dois primeiros Domínios aprofundados...

o próximo lote deverá continuar a arquitetura funcional através de:

- Saúde, Estado e Atenção;
- Incidentes e Resposta Operacional;
- Problemas e Confiabilidade;
- relações entre esses Domínios;
- capacidades mínimas;
- fronteiras;
- invariantes;
- fluxo de Evidência até resposta.

---

# Domínio 3 — Saúde, Estado e Atenção

Depois de descobrir o que existe...

E obter Evidência sobre aquilo que está acontecendo...

OPS precisa transformar observações em compreensão operacional.

A pergunta deixa de ser apenas:

> Quais sinais estamos recebendo?

E passa a ser:

> O que esses sinais significam para a condição da Capacidade?

Esse é o propósito do Domínio de:

**Saúde, Estado e Atenção.**

---

# Propósito do Domínio

Este Domínio deverá transformar Evidências operacionais em representações compreensíveis de:

- saúde;
- Estado;
- degradação;
- risco;
- desvio;
- atenção necessária.

---

# Capacidades Fundamentais

Poderão incluir:

- avaliar Estado Operacional;
- calcular saúde;
- detectar desvios;
- identificar degradação;
- identificar perda de margem;
- avaliar risco operacional;
- sintetizar múltiplas dimensões;
- detectar divergência;
- avaliar confiança;
- gerar Alertas;
- correlacionar Alertas;
- priorizar atenção;
- suprimir ruído;
- reconhecer normalização.

---

# Saúde Operacional

Saúde Operacional representa avaliação sobre a capacidade de determinado elemento cumprir sua função dentro das condições esperadas.

Ela não deverá ser inferida apenas a partir da existência do processo.

Um processo pode estar executando...

Mas incapaz de cumprir sua função.

---

# Saúde Funcional

A pergunta principal deverá ser:

> Esta Capacidade consegue realizar aquilo para que existe?

---

# Exemplo

Um Serviço de autenticação poderá possuir:

`CPU = NORMAL`

`MEMORIA = NORMAL`

`PROCESSOS = ATIVOS`

Mas:

`90% DAS AUTENTICACOES = FALHA`

Nesse caso...

A infraestrutura poderá parecer saudável.

A Capacidade não está.

---

# Invariante de Saúde Orientada à Função

OPS deverá priorizar a capacidade funcional sobre a simples vitalidade técnica dos componentes.

---

# Dimensões de Saúde

A Saúde Operacional poderá considerar dimensões como:

- disponibilidade;
- desempenho;
- capacidade;
- qualidade;
- integridade;
- dependências;
- redundância;
- segurança;
- recuperabilidade.

---

# Saúde Multidimensional

Uma Capacidade poderá estar saudável em algumas dimensões...

E degradada em outras.

Por exemplo:

`DISPONIBILIDADE = SAUDAVEL`

`DESEMPENHO = SAUDAVEL`

`REDUNDANCIA = DEGRADADA`

`RECUPERABILIDADE = DESCONHECIDA`

---

# Invariante de Não Redução Prematura

OPS não deverá reduzir múltiplas dimensões a um único Estado antes que a finalidade da síntese seja conhecida.

---

# Estado Sintético

Quando necessário...

OPS poderá produzir uma síntese.

Por exemplo:

`ESTADO_GERAL = EM_RISCO`

Mas essa síntese deverá permitir aprofundamento.

---

# Estado e Confiança

Toda conclusão poderá possuir determinado grau de confiança.

Por exemplo:

`ESTADO = DEGRADADO`

`CONFIANCA = ALTA`

Ou:

`ESTADO = PROVAVELMENTE_DEGRADADO`

`CONFIANCA = BAIXA`

---

# Invariante de Confiança Explícita

Quando a incerteza puder alterar uma decisão...

Ela deverá tornar-se visível.

---

# Estado Desconhecido

Se não houver Evidência suficiente...

A condição poderá ser:

`DESCONHECIDA`

Esse Estado não representa falha.

Representa ausência de conhecimento operacional suficiente.

---

# Desconhecido como Risco

Para uma Capacidade de baixa criticidade...

Estado desconhecido poderá ser tolerável temporariamente.

Para uma Capacidade crítica...

não saber sua condição poderá representar risco significativo.

---

# Invariante de Criticidade do Desconhecimento

O significado operacional de `DESCONHECIDO` deverá considerar Criticidade.

---

# Estado Obsoleto

Uma avaliação poderá ter sido válida...

Mas envelhecido além da janela aceitável.

Nesse caso:

`ESTADO = OBSOLETO`

ou representação equivalente.

---

# Estado Divergente

Quando fontes relevantes discordarem...

OPS poderá representar:

`ESTADO = DIVERGENTE`

Até que exista Reconciliação suficiente.

---

# Degradação

Uma Degradação ocorre quando determinada Capacidade continua existindo...

Mas sua habilidade de cumprir a função encontra-se reduzida.

---

# Degradação Funcional

Uma funcionalidade deixa de operar.

---

# Degradação de Desempenho

A função continua...

Mas com resposta inadequada.

---

# Degradação de Capacidade

O sistema suporta menos carga do que deveria.

---

# Degradação de Redundância

A função permanece disponível...

Mas alternativas foram perdidas.

---

# Degradação de Recuperabilidade

A operação continua...

Mas mecanismos de recuperação estão comprometidos.

---

# Degradação de Observabilidade

A função talvez continue saudável...

Mas OPS perdeu capacidade de compreendê-la.

---

# Invariante de Degradação Ampla

OPS deverá reconhecer que degradação não significa apenas indisponibilidade.

---

# Perda de Margem

Uma Capacidade poderá permanecer funcional enquanto se aproxima de seus limites.

Por exemplo:

`STORAGE = 92%`

`CONEXOES = 88%`

`REDUNDANCIA = 1 DE 2`

A função ainda existe.

Mas sua margem diminuiu.

---

# Invariante de Margem Operacional

OPS deverá possuir capacidade de perceber redução significativa de margem antes da falha quando possível.

---

# Risco Operacional

Risco representa possibilidade de perda futura de capacidade combinada com sua consequência potencial.

---

# Risco Observado

Existe Evidência concreta de fragilidade.

---

# Risco Inferido

Uma combinação de sinais indica aumento de probabilidade.

---

# Risco Estrutural

A própria arquitetura possui fragilidade conhecida.

Por exemplo:

um SPOF.

---

# Risco Temporal

Uma condição se aproxima de prazo crítico.

Por exemplo:

certificado prestes a expirar.

---

# Invariante de Separação Risco ↔ Falha

Risco deverá permanecer distinguível de falha já materializada.

---

# Atenção Operacional

Nem toda condição relevante exige intervenção imediata.

OPS deverá transformar condições em demanda de atenção de maneira proporcional.

---

# Níveis de Atenção

Conceitualmente...

Uma condição poderá ser:

`INFORMATIVA`

`OBSERVAR`

`INVESTIGAR`

`AGIR`

`ESCALAR`

---

# Invariante de Atenção Proporcional

A intensidade da atenção deverá acompanhar impacto, risco, urgência e Criticidade.

---

# Alerta

Um Alerta representa mecanismo utilizado para direcionar atenção para determinada condição.

---

# Alerta Acionável

Quando um Alerta exige ação humana...

Ele deverá fornecer contexto suficiente para permitir início de resposta.

---

# Alerta não Acionável

Algumas notificações poderão ser apenas informativas.

Elas não deverão competir desnecessariamente com Alertas que exigem ação.

---

# Invariante de Separação de Atenção

Informação, aviso e demanda de intervenção não deverão possuir necessariamente o mesmo canal ou prioridade.

---

# Deduplicação

Múltiplos Alertas podem representar o mesmo problema.

OPS deverá possuir capacidade de reduzir duplicação.

---

# Correlação de Alertas

Alertas relacionados poderão ser agrupados por:

- Serviço;
- Dependência;
- tempo;
- causa provável;
- topologia;
- mudança recente.

---

# Exemplo

Em vez de apresentar:

`DATABASE CONNECTION ERROR`

`API ERROR RATE HIGH`

`CHECKOUT FAILURE`

`PAYMENT TIMEOUT`

OPS poderá identificar contexto comum:

`DATABASE PRINCIPAL DEGRADADA`

com múltiplos impactos relacionados.

---

# Invariante de Preservação de Evidência na Correlação

Correlacionar não deverá significar apagar sinais originais.

A síntese deverá preservar caminho para Evidências constituintes.

---

# Supressão

Alguns Alertas poderão ser temporariamente suprimidos.

Por exemplo:

durante manutenção planejada.

---

# Supressão não é Ignorar

A condição ainda existe.

Apenas sua necessidade de atenção poderá mudar.

---

# Invariante de Supressão Contextual

Supressões relevantes deverão possuir:

- motivo;
- escopo;
- duração;
- responsável ou regra.

---

# Silenciamento Perigoso

Um Alerta crítico não deverá permanecer silencenciado indefinidamente por esquecimento.

---

# Expiração de Supressão

Supressões temporárias deverão expirar.

---

# Gestão da Atenção

Atenção humana deverá ser tratada como Recurso Operacional escasso.

OPS deverá evitar:

- ruído;
- duplicação;
- escalonamento desnecessário;
- interrupções constantes.

---

# Invariante de Economia da Atenção

A qualidade de um sistema de Alertas deverá ser medida também pela quantidade de atenção útil que produz...

Não pelo volume de notificações.

---

# Domínio 4 — Incidentes e Resposta Operacional

Quando uma condição exige coordenação para preservar ou restaurar Capacidade...

OPS entra no Domínio de:

**Incidentes e Resposta Operacional.**

---

# Propósito do Domínio

Este Domínio deverá fornecer capacidade para transformar uma condição operacional relevante em resposta coordenada.

---

# Capacidades Fundamentais

Poderão incluir:

- declarar Incidente;
- classificar Severidade;
- avaliar impacto;
- mobilizar responsáveis;
- estabelecer comando;
- coordenar investigação;
- executar mitigação;
- ativar contingência;
- escalar;
- comunicar;
- registrar Linha do Tempo;
- validar recuperação;
- estabilizar;
- encerrar resposta.

---

# Declaração de Incidente

Um Incidente poderá ser declarado a partir de:

- Alerta;
- observação humana;
- Consumer;
- Agente;
- fornecedor;
- Missão;
- correlação de Evidências.

---

# Invariante de Múltiplas Portas de Entrada

OPS não deverá depender exclusivamente de Alertas automatizados para reconhecer Incidentes.

---

# Declaração Manual

Um Operador poderá perceber:

> algo está errado.

Mesmo antes de existir diagnóstico preciso.

Essa declaração deverá ser possível.

---

# Declaração Automatizada

Condições suficientemente determinísticas poderão gerar Incidente automaticamente.

---

# Declaração Assistida

Um Agente poderá recomendar:

> Estas Evidências indicam um único Incidente de alta probabilidade.

---

# Incidente como Contexto Compartilhado

O Incidente deverá funcionar como objeto de coordenação.

Ele poderá relacionar:

- Capacidade afetada;
- Serviços;
- impacto;
- Severidade;
- responsáveis;
- Evidências;
- ações;
- decisões;
- Linha do Tempo;
- comunicação.

---

# Invariante de Unidade de Coordenação

Quando múltiplos sinais representarem a mesma condição...

OPS deverá favorecer contexto operacional compartilhado em vez de respostas fragmentadas.

---

# Avaliação de Impacto

A primeira compreensão deverá buscar responder:

> O que está sendo afetado?

> Quem está sendo afetado?

> Quais Capacidades foram reduzidas?

> Quais Missões podem estar em risco?

---

# Impacto Conhecido

Existe Evidência confirmada.

---

# Impacto Potencial

O Grafo Operacional indica possibilidade de propagação.

---

# Invariante de Separação Impacto Real ↔ Potencial

OPS deverá distinguir aquilo que já foi observado daquilo que ainda representa possibilidade.

---

# Severidade Inicial

A Severidade poderá ser determinada inicialmente com informação incompleta.

Ela deverá poder mudar conforme Evidências surgem.

---

# Invariante de Severidade Dinâmica

A classificação inicial de um Incidente não deverá tornar-se imutável.

---

# Mobilização

Depois da declaração...

OPS deverá conseguir localizar:

- Owner;
- Operadores;
- especialistas;
- Provider;
- escalonamento.

---

# Invariante de Mobilização

Capacidades críticas deverão possuir caminhos conhecidos para mobilizar responsabilidade adequada.

---

# Coordenação da Resposta

Durante Incidente...

Poderão existir atividades simultâneas:

- diagnóstico;
- mitigação;
- comunicação;
- investigação;
- contingência;
- recuperação.

A coordenação deverá reduzir conflito entre essas atividades.

---

# Objetivo Inicial

O objetivo inicial nem sempre será:

> encontrar causa raiz.

Frequentemente será:

> reduzir impacto.

---

# Invariante de Continuidade Primeiro

Quando seguro e apropriado...

OPS deverá priorizar preservação ou restauração da Capacidade antes da investigação completa.

---

# Mitigação

Mitigação reduz impacto.

---

# Exemplo

Desabilitar funcionalidade secundária para preservar função principal.

---

# Contenção

Contenção reduz propagação.

---

# Exemplo

Isolar um Consumer que está saturando recurso compartilhado.

---

# Recuperação

Recuperação restaura função.

---

# Exemplo

Realizar failover para região saudável.

---

# Correção

Correção trata condição responsável.

---

# Exemplo

Corrigir configuração inválida.

---

# As Quatro Ações não são Equivalentes

Uma mitigação pode não corrigir.

Uma contenção pode não recuperar.

Uma recuperação pode não remover causa.

Uma correção pode não restaurar automaticamente a operação.

---

# Invariante de Semântica da Resposta

OPS deverá preservar diferença entre:

- conter;
- mitigar;
- corrigir;
- recuperar.

---

# Linha do Tempo do Incidente

A resposta deverá preservar sequência suficiente de:

- sinais;
- Eventos;
- declarações;
- decisões;
- ações;
- mudanças de Estado;
- comunicações.

---

# Invariante de Memória durante Crise

A urgência não deverá destruir completamente a capacidade de reconstrução posterior.

---

# Comunicação Operacional

Incidentes relevantes poderão exigir comunicação para:

- Consumers;
- Owners;
- CCM;
- Governança;
- organizações federadas;
- fornecedores.

---

# Comunicação não é Diagnóstico

OPS poderá comunicar:

> Serviço indisponível. Investigação em andamento.

Sem inventar causa.

---

# Invariante de Comunicação Evidenciável

Comunicação operacional deverá distinguir:

- fato;
- impacto conhecido;
- hipótese;
- previsão.

---

# Atualização de Incidente

Durante Incidentes prolongados...

A ausência de nova causa não significa ausência de informação.

Uma atualização poderá informar:

- Estado atual;
- ações em andamento;
- impacto;
- próximo marco.

---

# Escalonamento

Quando a resposta local não for suficiente...

OPS deverá escalar.

---

# Escalonamento por Severidade

Impacto aumentou.

---

# Escalonamento por Tempo

A recuperação não aconteceu dentro da expectativa.

---

# Escalonamento por Especialidade

Conhecimento adicional é necessário.

---

# Escalonamento por Autoridade

Uma decisão ultrapassa permissão do time atual.

---

# Escalonamento Institucional

O impacto exige decisão de CCM ou Governança.

---

# Invariante de Escalonamento Multidimensional

Escalonamento não deverá depender apenas da passagem do tempo.

---

# Recuperação

Depois de determinada intervenção...

OPS deverá verificar:

> A função realmente voltou?

---

# Validação Técnica

Componentes respondem.

---

# Validação Funcional

A função pode ser executada.

---

# Validação Externa

O Consumer consegue utilizar.

---

# Invariante de Recuperação Validada

O encerramento da resposta deverá considerar Evidência da condição resultante.

---

# Estabilização

Depois da recuperação...

Poderá existir período de observação reforçada.

---

# Encerramento

Um Incidente poderá ser encerrado quando:

- impacto estiver controlado;
- Capacidade estiver suficientemente restaurada;
- condição estiver estável;
- trabalhos posteriores estiverem identificados.

---

# Invariante de Encerramento sem Esquecimento

Encerrar Incidente não deverá eliminar:

- Problemas;
- ações corretivas;
- riscos;
- aprendizagem.

---

# Domínio 5 — Problemas e Confiabilidade

Incidentes tratam manifestações operacionais.

Mas algumas manifestações possuem causas persistentes.

Outras se repetem.

Outras ainda revelam fragilidades que ainda não produziram Incidente.

Essas condições pertencem ao Domínio de:

**Problemas e Confiabilidade.**

---

# Propósito do Domínio

Este Domínio deverá reduzir recorrência e fragilidade estrutural.

Sua pergunta principal será:

> O que precisa mudar para que a operação futura seja mais confiável?

---

# Capacidades Fundamentais

Poderão incluir:

- registrar Problemas;
- investigar recorrência;
- analisar causa;
- identificar fatores contribuintes;
- detectar padrões;
- administrar Known Errors;
- priorizar correções estruturais;
- acompanhar dívida operacional;
- validar eficácia de correções;
- produzir aprendizagem.

---

# Problema

Um Problema representa condição subjacente capaz de produzir:

- Incidente;
- degradação;
- risco;
- recorrência;
- fragilidade.

---

# Problema sem Incidente

OPS poderá identificar um Problema antes que exista falha.

Por exemplo:

`SERVICO_CRITICO POSSUI SPOF`

Nenhum Incidente ocorreu.

Mas existe fragilidade conhecida.

---

# Invariante de Prevenção

OPS não deverá depender da ocorrência de Incidente para reconhecer toda fragilidade relevante.

---

# Problema Recorrente

Incidentes aparentemente pequenos podem revelar padrão.

Por exemplo:

cinco interrupções de dois minutos.

Individualmente...

podem parecer pouco relevantes.

Coletivamente...

indicam baixa confiabilidade.

---

# Invariante de Visão Longitudinal

OPS deverá possuir capacidade de identificar padrões que não são visíveis em um único Evento.

---

# Causa Raiz

A investigação poderá buscar Causa Raiz.

Entretanto...

sistemas complexos nem sempre possuem uma única causa.

---

# Fatores Contribuintes

Um Incidente poderá surgir da combinação entre:

- mudança;
- configuração;
- carga;
- dependência;
- ausência de proteção;
- procedimento;
- decisão.

---

# Invariante de Não Simplificação Causal

OPS deverá evitar transformar sistemas complexos em narrativas artificiais de causa única quando Evidências indicarem múltiplos fatores.

---

# Causa Técnica

Uma condição técnica contribuiu.

---

# Causa Processual

Um procedimento permitiu ou ampliou a condição.

---

# Causa Organizacional

Estrutura de responsabilidade contribuiu.

---

# Causa Humana

Uma ação humana participou da cadeia.

Entretanto...

OPS deverá evitar utilizar:

`ERRO HUMANO`

como explicação final quando o sistema permitiu que uma ação previsível produzisse impacto desproporcional.

---

# Invariante de Análise Sistêmica

A investigação deverá perguntar não apenas:

> Quem executou?

Mas:

> Por que o sistema permitiu que isso produzisse esse resultado?

---

# Known Error

Uma causa conhecida poderá permanecer temporariamente sem correção definitiva.

Nesse caso...

OPS poderá registrar um:

**Known Error**

junto com:

- sintomas;
- impacto;
- workaround;
- mitigação;
- risco;
- correção planejada.

---

# Workaround

Um Workaround permite restaurar ou preservar operação sem eliminar a causa.

---

# Invariante de Workaround não Permanente por Inércia

Workarounds relevantes deverão permanecer associados ao Problema que ainda existe.

---

# Dívida Operacional

Fragilidades conhecidas que permanecem abertas poderão formar:

**Dívida Operacional.**

---

# Exemplos

- Runbook desatualizado;
- dependência sem redundância;
- Alerta ruidoso;
- recuperação manual;
- componente obsoleto;
- capacidade insuficiente;
- configuração divergente.

---

# Dívida não é Apenas Técnica

Também poderá ser:

- humana;
- processual;
- institucional;
- documental.

---

# Invariante de Dívida Visível

Dívida capaz de afetar continuidade deverá permanecer visível até ser:

- resolvida;
- aceita;
- substituída;
- tornada irrelevante.

---

# Correção Estrutural

Uma ação corretiva deverá modificar condição capaz de produzir recorrência.

---

# Correção não é Garantia

Depois da mudança...

OPS deverá verificar se o comportamento realmente melhorou.

---

# Invariante de Eficácia

A conclusão:

> problema resolvido

deverá possuir Evidência proporcional à importância do Problema.

---

# Confiabilidade

Confiabilidade representa capacidade de uma função continuar cumprindo expectativas ao longo do tempo.

Ela não deverá ser medida apenas pela ausência de Incidentes graves.

---

# Pequenas Falhas Frequentes

Uma Capacidade poderá nunca sofrer grande interrupção...

Mas falhar pequenas vezes todos os dias.

Isso também representa baixa confiabilidade.

---

# Confiabilidade e Recuperação

Uma Capacidade que falha...

Mas recupera rapidamente...

possui perfil diferente de outra que falha raramente...

Mas leva muitas horas para retornar.

OPS deverá compreender ambos.

---

# Invariante de Confiabilidade Multidimensional

A avaliação de confiabilidade poderá considerar:

- frequência de falha;
- duração;
- impacto;
- recuperação;
- recorrência;
- previsibilidade.

---

# Relação entre os Cinco Primeiros Domínios

Os Domínios estabelecidos até aqui formam um fluxo fundamental.

---

# Fluxo Conceitual

`DESCOBERTA`

responde:

> O que existe?

↓

`OBSERVABILIDADE`

responde:

> O que está acontecendo?

↓

`SAUDE E ESTADO`

responde:

> O que isso significa?

↓

`INCIDENTES E RESPOSTA`

responde:

> O que precisamos fazer agora?

↓

`PROBLEMAS E CONFIABILIDADE`

responde:

> O que precisamos mudar para reduzir recorrência?

---

# Loop de Retorno

O fluxo não termina em Problemas.

A aprendizagem poderá alterar:

- Catálogo;
- observabilidade;
- Alertas;
- Runbooks;
- arquitetura;
- Automação;
- capacidade.

Assim...

o resultado retorna aos Domínios anteriores.

---

# Exemplo Integrado

Um Serviço é descoberto e registrado.

↓

Observabilidade coleta Evidência.

↓

A saúde indica perda de redundância.

↓

A condição gera atenção.

↓

A dependência restante falha.

↓

Um Incidente é declarado.

↓

OPS ativa contingência.

↓

A Capacidade é recuperada.

↓

A investigação identifica SPOF oculto.

↓

Um Problema é registrado.

↓

A arquitetura é corrigida.

↓

O Catálogo e o Grafo são atualizados.

↓

A observabilidade passa a verificar redundância.

↓

OPS tornou-se mais capaz do que antes do Incidente.

---

# Invariante de Aprendizagem entre Domínios

O resultado de um Domínio deverá poder modificar capacidades de outros Domínios quando Evidência justificar.

---

# Fronteira entre Saúde e Incidente

Nem toda degradação será Incidente.

O Domínio de Saúde poderá manter uma condição sob observação.

O Domínio de Incidentes entra quando existe necessidade de resposta coordenada.

---

# Fronteira entre Incidente e Problema

Incidente busca restaurar.

Problema busca reduzir recorrência.

Essas atividades podem coexistir...

Mas não deverão ser confundidas.

---

# Fronteira entre Observabilidade e Saúde

Observabilidade fornece Evidência.

Saúde interpreta a condição.

Essa separação permitirá trocar mecanismos de telemetria sem alterar necessariamente a semântica do Estado.

---

# Invariante de Fronteiras Funcionais

Domínios deverão possuir fronteiras suficientemente claras para preservar significado...

Sem impedir cooperação.

---

# Próxima Dimensão

Com os cinco primeiros Domínios estabelecidos...

O próximo lote deverá avançar para as capacidades que modificam diretamente o OPS Runtime:

- Mudanças e Transições Operacionais;
- Configuração e Reconciliação;
- Capacidade, Desempenho e Saturação;
- Disponibilidade e Objetivos de Serviço;
- relação entre mudança, Estado Desejado, capacidade real e confiabilidade.

---

# Domínio 10 — Dependências e Impacto

Nenhuma Capacidade relevante deverá ser presumida isolada.

Ela depende de alguma combinação entre:

- Serviços;
- Componentes;
- Recursos;
- pessoas;
- organizações;
- dados;
- fornecedores;
- redes;
- credenciais;
- contratos;
- capacidades externas.

Por esse motivo...

OPS precisa compreender não apenas aquilo que opera...

Mas também aquilo de que depende.

Esse é o propósito do Domínio de:

**Dependências e Impacto.**

---

# Propósito do Domínio

Este Domínio deverá permitir que OPS responda:

> De que esta Capacidade depende?

> O que depende dela?

> Quais dependências são críticas?

> Onde existem alternativas?

> Qual falha pode se propagar?

> Qual é o possível Raio de Impacto?

---

# Capacidades Fundamentais

Poderão incluir:

- descobrir dependências;
- registrar dependências;
- classificar dependências;
- identificar dependências compartilhadas;
- detectar SPOFs;
- compreender dependências externas;
- compreender dependências humanas;
- navegar impacto;
- calcular Blast Radius;
- identificar alternativas;
- avaliar prontidão de redundância;
- preservar topologia histórica.

---

# Dependência como Relação Operacional

Uma Dependência representa relação em que a condição de um elemento pode influenciar a capacidade de outro cumprir sua função.

---

# Tipos de Dependência

OPS poderá reconhecer dependências como:

- obrigatórias;
- opcionais;
- alternativas;
- condicionais;
- externas;
- humanas;
- institucionais;
- tecnológicas.

Essas categorias poderão coexistir.

---

# Dependência Obrigatória

A função não pode ser cumprida sem ela.

---

# Dependência Opcional

Parte da função pode ser perdida...

Mas a Capacidade principal permanece.

---

# Dependência Alternativa

Existe outro caminho capaz de fornecer a mesma função.

---

# Dependência Condicional

Só é necessária em determinada situação.

---

# Dependência Externa

Está fora do controle direto da organização.

---

# Dependência Humana

Requer pessoa, função ou equipe.

---

# Dependência Institucional

Pode exigir:

- contrato;
- autorização;
- licença;
- aprovação;
- organização parceira.

---

# Invariante de Dependência Multidimensional

OPS deverá evitar reduzir topologia operacional apenas a relações entre sistemas computacionais.

---

# Dependência Compartilhada

Múltiplos Serviços poderão depender do mesmo elemento.

Essa condição poderá produzir falha comum.

---

# Exemplo

`SERVICO_A`

e:

`SERVICO_B`

parecem independentes.

Entretanto...

ambos dependem de:

`IDENTITY_PROVIDER_X`

Se esse Provider falhar...

os dois podem falhar simultaneamente.

---

# Invariante de Redundância Real

Alternativas que compartilham a mesma dependência crítica não deverão ser tratadas automaticamente como redundância independente.

---

# Ponto Único de Falha

Um:

**Single Point of Failure — SPOF**

representa elemento cuja perda elimina determinada função sem alternativa adequada.

---

# SPOF Técnico

Um banco único.

---

# SPOF Humano

Uma única pessoa sabe recuperar.

---

# SPOF Institucional

Apenas uma organização possui autorização necessária.

---

# SPOF de Fornecedor

Toda a operação depende de um único Provider externo.

---

# Invariante de SPOF Conhecível

SPOFs relevantes deverão poder ser identificados e avaliados.

---

# Grafo de Dependências

OPS deverá representar dependências como parte do Grafo Operacional.

---

# Navegação Descendente

Partindo de uma Capacidade:

`CAPACIDADE`

↓

`SERVICOS`

↓

`COMPONENTES`

↓

`RECURSOS`

Essa navegação responde:

> O que sustenta esta função?

---

# Navegação Ascendente

Partindo de um elemento degradado:

`RECURSO`

↓

`COMPONENTE`

↓

`SERVICO`

↓

`CAPACIDADE`

↓

`MISSAO`

Essa navegação responde:

> O que poderá ser afetado?

---

# Invariante de Navegação Bidirecional

OPS deverá conseguir analisar dependências nos dois sentidos quando necessário.

---

# Raio de Impacto

O conjunto de elementos potencialmente afetados por uma falha poderá formar o:

**Raio de Impacto Operacional.**

---

# Impacto Direto

O elemento depende imediatamente da falha.

---

# Impacto Indireto

A falha se propaga através de múltiplos níveis.

---

# Impacto Potencial

A topologia indica risco...

Mas o efeito ainda não foi observado.

---

# Impacto Confirmado

Existe Evidência de consequência real.

---

# Invariante de Separação Impacto Potencial ↔ Confirmado

OPS deverá distinguir previsão de impacto de impacto efetivamente observado.

---

# Dependência Desconhecida

Uma das condições mais perigosas ocorre quando a organização descobre uma dependência apenas durante a falha.

---

# Shadow Dependency

Poderá existir dependência real não registrada.

---

# Detecção por Evidência

Tracing.

Logs.

Eventos.

Fluxos de rede.

Observações de incidentes.

Poderão revelar dependências desconhecidas.

---

# Invariante de Aprendizagem Topológica

A topologia deverá poder ser corrigida quando a operação produzir Evidência confiável.

---

# Dependência Temporal

Algumas dependências poderão existir apenas em determinados momentos.

Por exemplo:

durante fechamento mensal.

Durante contingência.

Durante manutenção.

---

# Invariante de Topologia Temporal

Quando necessário...

OPS deverá preservar contexto suficiente para compreender quais dependências existiam em determinado momento.

---

# Domínio 11 — Recuperação, Contingência e Continuidade

Falhas acontecerão.

Capacidades degradarão.

Fornecedores ficarão indisponíveis.

Regiões poderão falhar.

Pessoas poderão não estar disponíveis.

Por esse motivo...

OPS deverá possuir capacidade de continuar ou restaurar função.

Esse é o propósito do Domínio de:

**Recuperação, Contingência e Continuidade.**

---

# Propósito do Domínio

Este Domínio deverá permitir que OPS responda:

> Como continuamos quando a condição normal falha?

> Como restauramos a Capacidade?

> Qual função mínima precisa sobreviver?

> Quais alternativas existem?

> Quanto tempo conseguimos permanecer degradados?

---

# Capacidades Fundamentais

Poderão incluir:

- definir estratégias de recuperação;
- identificar função mínima;
- ativar contingência;
- executar failover;
- executar failback;
- operar em Modo Degradado;
- restaurar Serviço;
- validar recuperação;
- coordenar continuidade;
- testar contingência;
- avaliar prontidão;
- recompor margem após crise.

---

# Recuperação

Recuperação representa restauração de Capacidade Operacional suficiente.

---

# Recuperação Técnica

O componente voltou.

---

# Recuperação Funcional

A função voltou.

---

# Recuperação Operacional

O Consumer consegue utilizar a função.

---

# Recuperação Institucional

Responsabilidade, observabilidade e capacidade de operar também estão restauradas.

---

# Invariante de Recuperação Multinível

OPS deverá evitar declarar recuperação completa apenas com base em um único nível técnico.

---

# Contingência

Uma Contingência representa caminho alternativo para preservar função.

---

# Contingência Técnica

Região secundária.

---

# Contingência de Provider

Fornecedor alternativo.

---

# Contingência Manual

Substituir Temporariamente Automação por procedimento humano.

---

# Contingência Humana

Transferir operação para outra equipe.

---

# Contingência Institucional

Modificar responsabilidade ou processo para continuar.

---

# Invariante de Contingência Preparada

Uma Contingência relevante deverá possuir preparação proporcional à Criticidade.

---

# Contingência não Testada

Um plano não testado representa hipótese.

---

# Invariante de Evidência de Prontidão

Quanto maior a Criticidade...

Maior deverá ser a necessidade de Evidência de que a Contingência funciona.

---

# Failover

Failover transfere função para alternativa.

---

# Failback

Failback retorna operação ao caminho principal ou preferido.

---

# Invariante de Failback Consciente

Retornar ao caminho original também deverá ser tratado como Mudança Operacional relevante quando impacto justificar.

---

# Modo Degradado

Uma Capacidade poderá preservar função mínima através de comportamento reduzido.

---

# Exemplo

Desabilitar:

- relatórios;
- recomendações;
- processamento não essencial.

Preservar:

- autenticação;
- transação crítica;
- comunicação emergencial.

---

# Invariante de Função Mínima

Capacidades críticas deverão identificar, quando apropriado:

> Qual função precisa sobreviver mesmo sob degradação severa?

---

# Continuidade Operacional

Continuidade representa a capacidade de preservar função suficiente através de perturbações.

Ela poderá depender de:

- arquitetura;
- pessoas;
- processos;
- contingências;
- fornecedores;
- dados;
- comunicação.

---

# Continuidade não é apenas Disaster Recovery

DR representa parte importante.

Mas continuidade possui escopo mais amplo.

---

# Operação Prolongada em Contingência

Uma alternativa poderá funcionar...

Mas não indefinidamente.

Ela poderá possuir:

- menor capacidade;
- maior custo;
- maior risco;
- menor funcionalidade.

---

# Invariante de Horizonte de Contingência

OPS deverá compreender, quando relevante, por quanto tempo uma condição alternativa pode ser sustentada.

---

# Recuperação da Margem

Depois de uma crise...

A função poderá voltar.

Mas:

- redundância pode estar reduzida;
- backups podem precisar ser refeitos;
- pessoas podem estar exaustas;
- capacidade reserva pode ter sido consumida.

---

# Invariante de Pós-Recuperação

Restaurar Serviço não deverá encerrar automaticamente o trabalho de reconstrução da resiliência.

---

# Domínio 12 — Runbooks e Conhecimento Operacional

Operar depende de conhecimento.

Saber que um Serviço está degradado é diferente de saber como agir.

Saber como agir é diferente de conseguir transferir esse conhecimento.

Por esse motivo...

OPS precisa preservar conhecimento operacional.

Esse é o propósito do Domínio de:

**Runbooks e Conhecimento Operacional.**

---

# Propósito do Domínio

Este Domínio deverá permitir que conhecimento necessário à operação permaneça:

- acessível;
- atual;
- executável;
- transferível;
- verificável.

---

# Capacidades Fundamentais

Poderão incluir:

- criar Runbooks;
- criar Playbooks;
- organizar procedimentos;
- relacionar conhecimento a Serviços;
- versionar documentação;
- validar procedimentos;
- identificar conteúdo obsoleto;
- capturar conhecimento tácito;
- apoiar handover;
- recuperar precedentes;
- transformar conhecimento em Automação.

---

# Runbook

Um Runbook representa procedimento operacional voltado a uma condição ou atividade relativamente conhecida.

---

# Exemplos

- reiniciar Serviço;
- executar failover;
- restaurar backup;
- renovar certificado;
- coletar diagnóstico;
- ampliar capacidade.

---

# Playbook

Um Playbook poderá representar orientação mais ampla para situações que exigem decisão contextual.

---

# Exemplo

`PLAYBOOK_INCIDENTE_DE_LATENCIA`

poderá orientar:

- verificar Consumer;
- analisar dependências;
- revisar mudanças;
- avaliar saturação;
- aplicar mitigação.

Sem obrigatoriamente definir uma única sequência rígida.

---

# Procedimento

Um Procedimento poderá representar atividade operacional formalizada.

---

# Invariante de Conhecimento Proporcional

Nem toda atividade precisa de Runbook detalhado.

Mas atividades críticas ou recorrentes deverão possuir conhecimento suficiente para continuidade.

---

# Runbook não é Verdade Eterna

A arquitetura muda.

O procedimento pode envelhecer.

---

# Invariante de Conhecimento Versionado

Conhecimento operacional relevante deverá possuir mecanismos de atualização e, quando necessário, versionamento.

---

# Runbook Executável

Alguns Runbooks poderão ser parcialmente ou totalmente automatizados.

---

# Runbook Humano

O Operador executa passos.

---

# Runbook Assistido

Um Agente guia ou prepara ações.

---

# Runbook Automatizado

Um mecanismo executa passos dentro de política.

---

# Invariante de Mesma Semântica

Automatizar um Runbook não deverá eliminar seu propósito, limites ou Evidências necessárias.

---

# Conhecimento Tácito

Parte do conhecimento poderá existir apenas na experiência de especialistas.

OPS deverá reduzir dependência exclusiva dessa condição.

---

# Invariante de Transferibilidade

Conhecimento necessário para recuperar Capacidades críticas deverá ser transferível.

---

# Validação de Runbook

Um Runbook pode parecer correto...

Mas conter passos que já não funcionam.

---

# Invariante de Procedimento Validável

Runbooks críticos deverão possuir mecanismos adequados de revisão ou teste.

---

# Conhecimento como Grafo

Documentação também poderá possuir relações.

Um Serviço aponta para:

- Runbook;
- Owner;
- incidentes anteriores;
- arquitetura;
- contingência;
- riscos.

---

# Invariante de Conhecimento Contextual

Conhecimento operacional deverá ser recuperável a partir do contexto em que será utilizado.

---

# Domínio 13 — Automação e Controle Operacional

A operação contém trabalho repetitivo.

Também contém respostas que podem ser executadas de forma previsível.

OPS deverá utilizar Automação para reduzir Toil, velocidade de resposta e variabilidade.

Esse é o propósito do Domínio de:

**Automação e Controle Operacional.**

---

# Propósito do Domínio

Este Domínio deverá permitir que ações operacionais previsíveis sejam executadas por mecanismos governados.

---

# Capacidades Fundamentais

Poderão incluir:

- executar rotinas automáticas;
- reconciliar Estado;
- executar Auto-Remediação;
- realizar escalonamento automático;
- aplicar limites;
- executar failover;
- coletar Evidência;
- validar resultado;
- interromper Automação;
- observar Automação;
- administrar autonomia.

---

# Automação Operacional

Uma Automação poderá agir em resposta a:

- tempo;
- Evento;
- Estado;
- Alerta;
- política;
- Comando;
- condição preditiva.

---

# Invariante de Gatilho Compreensível

Uma Automação relevante deverá permitir compreender:

> Por que ela foi executada?

---

# Auto-Remediação

Auto-Remediação representa detecção de condição seguida de resposta automática.

---

# Exemplo

`HEALTHCHECK FALHOU`

↓

`ISOLAR INSTANCIA`

↓

`CRIAR NOVA INSTANCIA`

↓

`VALIDAR SAUDE`

---

# Invariante de Loop Fechado

Auto-Remediação deverá possuir feedback suficiente para verificar resultado.

---

# Automação sem Feedback

Executar correção e assumir sucesso representa Loop Aberto.

---

# Invariante de Validação Automatizada

Quando possível...

A Automação deverá validar a condição resultante.

---

# Guardrails

Automação deverá possuir limites como:

- escopo;
- rate limit;
- quantidade máxima de ações;
- recursos permitidos;
- duração;
- autoridade.

---

# Invariante de Contenção da Automação

Uma falha na Automação não deverá possuir Blast Radius ilimitado por padrão.

---

# Kill Switch

Algumas Automações críticas poderão possuir mecanismo de interrupção.

---

# Invariante de Interrupção

Quando risco justificar...

OPS deverá conseguir parar comportamento automatizado inadequado.

---

# Automação Idempotente

Quando possível...

ações repetíveis deverão possuir semântica segura.

---

# Retry Automatizado

Retries deverão possuir:

- limite;
- backoff;
- condição de saída;
- consideração de idempotência.

---

# Invariante de Não Amplificação

A Automação não deverá transformar falha pequena em falha maior através de reação descontrolada.

---

# Reconciliação Automatizada

Controladores poderão comparar:

`DESEJADO`

e:

`OBSERVADO`

e agir para reduzir diferença.

---

# Invariante de Controle Governado

A capacidade de reconciliar Estado automaticamente deverá respeitar autoridade e contexto.

---

# Múltiplos Controladores

Autoscaler.

Reconciliador.

Scheduler.

Auto-Remediação.

Todos poderão agir sobre recursos relacionados.

---

# Invariante de Interferência Conhecível

OPS deverá considerar o risco de controladores competirem entre si.

---

# Toil

Trabalho manual frequente e repetitivo deverá ser candidato à Automação.

---

# Automação não é Objetivo em Si

Uma tarefa rara, arriscada e altamente contextual poderá continuar manual.

---

# Invariante de Automação por Valor

OPS deverá automatizar quando benefício, previsibilidade e segurança justificarem.

---

# Domínio 14 — Operação Assistida por Agentes

Automações tradicionais executam regras.

Agentes poderão interpretar contexto.

Correlacionar Evidências.

Buscar conhecimento.

Gerar hipóteses.

Recomendar ações.

E, dentro de limites, executar.

Esse é o propósito do Domínio de:

**Operação Assistida por Agentes.**

---

# Propósito do Domínio

Este Domínio deverá incorporar capacidades cognitivas à operação sem perder:

- Evidência;
- autoridade;
- responsabilidade;
- rastreabilidade;
- segurança.

---

# Capacidades Fundamentais

Poderão incluir:

- sintetizar Estado;
- correlacionar Sinais;
- buscar precedentes;
- gerar hipóteses;
- recomendar diagnóstico;
- propor mitigação;
- executar Runbooks governados;
- validar resultados;
- produzir resumos;
- apoiar handover;
- detectar padrões.

---

# Agente Observador

Analisa Evidências sem executar.

---

# Agente Analista

Correlaciona e produz hipóteses.

---

# Agente Recomendador

Sugere ações.

---

# Agente Executor

Executa ações dentro de Envelope de Autonomia.

---

# Agente Verificador

Avalia resultado de ações.

---

# Invariante de Função Cognitiva

Todo Agente Operacional deverá possuir função compreensível.

---

# Evidência e Inferência

O Agente poderá dizer:

**Evidência**

`erro aumentou 40% após deploy`

**Hipótese**

`a nova versão pode ter introduzido regressão`

Essas duas afirmações não deverão ser confundidas.

---

# Invariante de Separação Cognitiva

Inferência de Agente deverá permanecer distinguível da Evidência observada.

---

# Autonomia do Agente

Um Agente poderá:

- observar;
- recomendar;
- preparar;
- executar.

Conforme autoridade.

---

# Invariante de Envelope de Autonomia

A capacidade cognitiva não deverá criar autoridade automática.

---

# Agente como Interface de Conhecimento

Um Agente poderá recuperar:

- Runbooks;
- histórico;
- topologia;
- incidentes;
- mudanças recentes.

Isso poderá reduzir tempo de diagnóstico.

---

# Invariante de Recuperação com Contexto

Conhecimento recuperado deverá respeitar:

- Serviço;
- versão;
- organização;
- tempo;
- permissão.

---

# Agente e Operação Crítica

Em situações críticas...

Agentes poderão aumentar velocidade.

Mas confiança excessiva também poderá ampliar risco.

---

# Invariante de Supervisão Proporcional

Quanto maior o impacto potencial...

Maior deverá ser o nível de controle sobre execução cognitiva.

---

# Relação entre os Domínios 10, 11, 12, 13 e 14

Esses Domínios formam a infraestrutura de continuidade e resposta avançada de OPS.

---

# Dependências e Impacto

responde:

> O que pode ser afetado?

---

# Recuperação e Contingência

responde:

> Como continuamos ou restauramos?

---

# Conhecimento Operacional

responde:

> Como sabemos o que fazer?

---

# Automação

responde:

> O que pode ser executado de maneira previsível sem intervenção manual constante?

---

# Agentes

respondem:

> Como ampliar compreensão e execução em contextos que exigem interpretação?

---

# Fluxo Integrado

`FALHA`

↓

`TOPOLOGIA`

↓

`IMPACTO`

↓

`CONHECIMENTO`

↓

`DECISAO`

↓

`AUTOMACAO / HUMANO / AGENTE`

↓

`RECUPERACAO`

↓

`VALIDACAO`

---

# Invariante de Continuidade Integrada

OPS deverá preservar relação entre compreensão, conhecimento e execução durante falhas.

---

# Próxima Dimensão

Com Dependências, Recuperação, Conhecimento, Automação e Agentes estabelecidos...

o próximo lote deverá aprofundar os Domínios que conectam OPS aos limites institucionais e ao ecossistema distribuído:

- Segurança Operacional;
- Dados, Integrações e Fluxos Operacionais;
- Operação Federada;
- Continuidade Humana e Coordenação;
- Operação Crítica e Crise.

---

# Domínio 15 — Segurança Operacional

A operação precisa ser rápida.

Mas também precisa permanecer legítima.

Uma resposta emergencial não deverá transformar-se em justificativa para:

- ignorar identidade;
- ampliar privilégios sem limite;
- expor dados;
- executar ações sem rastreabilidade;
- manter exceções indefinidamente.

Por esse motivo...

OPS deverá possuir um Domínio específico de:

**Segurança Operacional.**

---

# Propósito do Domínio

Este Domínio deverá permitir que a operação continue funcionando dentro de controles adequados de:

- identidade;
- autenticação;
- autorização;
- integridade;
- confidencialidade;
- segregação;
- auditoria;
- resposta segura.

---

# Segurança e OPS

Segurança e OPS possuem responsabilidades diferentes.

Segurança protege propriedades como:

- identidade;
- autorização;
- confidencialidade;
- integridade;
- proteção contra abuso.

OPS utiliza essas propriedades para manter Capacidades operáveis.

---

# Invariante de Cooperação OPS ↔ Segurança

OPS não deverá redefinir unilateralmente políticas fundamentais de Segurança.

Segurança não deverá ignorar necessidades legítimas de continuidade operacional.

---

# Capacidades Fundamentais

Poderão incluir:

- autenticar Operadores;
- autorizar ações;
- validar escopo;
- administrar acessos emergenciais;
- preservar auditoria;
- detectar violações operacionais;
- revogar privilégios;
- proteger Evidências;
- coordenar resposta conjunta;
- controlar exceções;
- preservar segregação de funções.

---

# Identidade Operacional

Toda ação relevante deverá possuir identidade suficientemente compreensível.

Essa identidade poderá pertencer a:

- pessoa;
- equipe;
- Serviço;
- Automação;
- Agente;
- organização.

---

# Invariante de Identidade da Ação

Ações críticas não deverão existir como alterações anônimas do OPS Runtime.

---

# Autenticação

Autenticação responde:

> Quem ou o que está tentando agir?

---

# Autorização

Autorização responde:

> Essa identidade pode executar esta ação neste contexto?

---

# Invariante de Separação Autenticação ↔ Autorização

Possuir identidade válida não deverá significar permissão universal.

---

# Menor Privilégio

OPS deverá favorecer:

> conceder apenas a autoridade necessária para a função operacional.

---

# Privilégio Permanente

Algumas funções poderão exigir acesso contínuo.

---

# Privilégio Temporário

Outras poderão receber acesso apenas durante:

- manutenção;
- Incidente;
- contingência;
- migração.

---

# Invariante de Expiração

Privilégios temporários deverão possuir mecanismo de encerramento.

---

# Acesso Emergencial

Durante situação crítica...

o acesso normal poderá ser insuficiente.

Nesse caso...

poderá existir:

**Acesso Emergencial**

ou:

**Break Glass**.

---

# Garantias do Acesso Emergencial

Quando utilizado...

deverá possuir, conforme criticidade:

- identidade;
- justificativa;
- escopo;
- duração;
- auditoria;
- revisão.

---

# Invariante de Não Normalização da Emergência

Acesso extraordinário não deverá tornar-se acesso cotidiano por conveniência.

---

# Segregação de Funções

Algumas ações poderão exigir separação entre:

- solicitar;
- aprovar;
- executar;
- validar.

---

# Invariante de Separação Proporcional

Quanto maior a irreversibilidade ou impacto...

maior poderá ser a necessidade de independência entre funções.

---

# Integridade da Evidência

Logs, auditorias e registros operacionais poderão ser necessários para reconstrução.

Eles não deverão ser alterados silenciosamente por quem executa determinada ação quando criticidade exigir independência.

---

# Invariante de Evidência Protegida

Evidências críticas deverão possuir proteção proporcional contra alteração ou eliminação indevida.

---

# Segurança durante Incidente

Uma resposta rápida poderá exigir:

- novos acessos;
- isolamento;
- bloqueio;
- revogação;
- mudança de política.

Essas ações deverão continuar governadas.

---

# Incidente Operacional com Dimensão de Segurança

Uma falha técnica poderá possuir consequência de Segurança.

Por exemplo:

uma configuração incorreta expõe informação.

---

# Incidente de Segurança com Dimensão Operacional

Um ataque poderá causar:

- indisponibilidade;
- degradação;
- perda de capacidade.

---

# Invariante de Coordenação Conjunta

OPS e Segurança deverão conseguir operar sobre o mesmo contexto quando um Evento atravessar os dois domínios.

---

# Domínio 16 — Dados, Integrações e Fluxos Operacionais

A Plataforma UNO depende de informação em movimento.

Dados são:

- produzidos;
- armazenados;
- transformados;
- transmitidos;
- sincronizados;
- consumidos.

Integrações conectam fronteiras.

Fluxos coordenam transformação.

Quando essas estruturas falham...

uma aplicação poderá parecer saudável...

enquanto a Capacidade institucional deixa de existir.

Esse é o propósito do Domínio de:

**Dados, Integrações e Fluxos Operacionais.**

---

# Propósito do Domínio

Este Domínio deverá permitir operar a continuidade funcional de:

- dados;
- pipelines;
- integrações;
- filas;
- contratos;
- sincronizações;
- Fluxos.

---

# Capacidades Fundamentais

Poderão incluir:

- observar pipelines;
- acompanhar backlog;
- monitorar qualidade operacional de dados;
- detectar atraso;
- detectar falha de integração;
- reconciliar Estados;
- reprocessar;
- executar replay;
- administrar Dead Letter Queues;
- validar contratos;
- recuperar sincronização;
- acompanhar dependências externas.

---

# Operação de Dados

Dados também possuem propriedades operacionais.

Por exemplo:

- disponibilidade;
- integridade;
- frescor;
- completude;
- consistência.

---

# Dado Disponível mas Inútil

Uma tabela pode estar acessível...

Mas desatualizada há horas.

Tecnicamente:

disponível.

Operacionalmente:

talvez inadequada.

---

# Invariante de Frescor

Quando o tempo for parte do valor de um dado...

OPS deverá conseguir perceber atraso relevante.

---

# Integridade

Um pipeline poderá terminar sem erro...

Mas produzir informação incorreta.

---

# Invariante de Resultado além da Execução

Sucesso técnico de processamento não deverá ser tratado automaticamente como qualidade operacional do resultado.

---

# Pipeline Operacional

Um Pipeline poderá possuir Estados como:

- aguardando;
- processando;
- atrasado;
- bloqueado;
- falhou;
- concluído;
- parcialmente concluído.

---

# Backlog

Filas acumuladas poderão indicar:

- aumento de demanda;
- redução de processamento;
- falha downstream;
- saturação.

---

# Invariante de Backlog Contextual

O tamanho absoluto de uma fila não deverá ser interpretado sem considerar:

- taxa de entrada;
- taxa de saída;
- idade;
- prioridade.

---

# Integração Operacional

Uma Integração poderá depender de:

- autenticação;
- contrato;
- rede;
- Provider;
- quotas;
- formato;
- semântica.

---

# Invariante de Integração além da Conectividade

Uma conexão bem-sucedida não garante interoperabilidade operacional.

---

# Contrato de Integração

Mudanças de:

- schema;
- API;
- versão;
- semântica;

poderão quebrar Consumidores.

---

# Invariante de Compatibilidade Observável

OPS deverá conseguir identificar falhas produzidas por incompatibilidade de contrato quando possível.

---

# Retry em Integrações

Retries poderão ajudar a absorver falhas transitórias.

Mas também poderão criar:

- duplicação;
- tempestade;
- saturação.

---

# Invariante de Reprocessamento Seguro

Replays e retries deverão considerar idempotência e efeitos colaterais.

---

# Dead Letter Queue

Mensagens que não puderam ser processadas poderão ser isoladas.

Entretanto...

colocar em DLQ não resolve o problema.

---

# Invariante de Pendência Visível

Itens não processados deverão permanecer visíveis até possuírem destino adequado.

---

# Replay

Depois da correção...

Eventos poderão ser reprocessados.

---

# Invariante de Ordem e Causalidade

Quando sequência for relevante...

OPS deverá preservar cuidado com ordem, duplicação e dependências durante replay.

---

# Sincronização

Sistemas distribuídos poderão divergir temporariamente.

---

# Reconciliação de Dados

Depois...

Estados poderão precisar ser comparados e corrigidos.

---

# Invariante de Reconciliação Evidenciável

Correções de divergência relevantes deverão possuir Proveniência.

---

# Domínio 17 — Operação Federada

A Plataforma UNO deverá operar através de fronteiras organizacionais.

Uma Capacidade poderá depender de:

- outra empresa;
- outro órgão;
- parceiro;
- fornecedor;
- organização federada.

Nenhuma dessas partes deverá necessariamente abrir toda sua operação interna.

Mas a coordenação compartilhada ainda precisa funcionar.

Esse é o propósito do Domínio de:

**Operação Federada.**

---

# Propósito do Domínio

Este Domínio deverá permitir cooperação operacional entre organizações preservando:

- autonomia;
- responsabilidade;
- contratos;
- Proveniência;
- segurança;
- continuidade.

---

# Capacidades Fundamentais

Poderão incluir:

- publicar Estado federado;
- consumir Estado externo;
- compartilhar Incidentes;
- escalar entre organizações;
- preservar contratos;
- sincronizar Eventos;
- operar durante desconexão;
- reconciliar após reconexão;
- compartilhar contingências;
- coordenar mudanças interorganizacionais.

---

# Autonomia Local

Cada organização poderá possuir:

- ferramentas próprias;
- processos próprios;
- equipes próprias;
- políticas próprias.

---

# Invariante de Não Uniformização Obrigatória

A Federação não deverá exigir que todos utilizem a mesma implementação.

---

# Contrato Operacional Federado

O que deverá existir é compreensão suficiente sobre compromissos compartilhados.

Por exemplo:

- Capacidade fornecida;
- horário;
- limites;
- SLO;
- escalonamento;
- contingência;
- Estado.

---

# Invariante de Compromisso Observável

Uma organização que fornece Capacidade relevante deverá permitir visibilidade suficiente sobre sua habilidade de cumprir o compromisso.

---

# Estado Federado

Uma organização poderá publicar:

`SERVICO_X = DEGRADADO`

Esse Estado poderá ser consumido por outras partes.

---

# Estado Local e Estado Compartilhado

A organização poderá possuir detalhes internos mais profundos.

Mas compartilhar apenas aquilo necessário à coordenação.

---

# Invariante de Mínimo Suficiente

Federação deverá preservar contexto suficiente sem exigir exposição desnecessária.

---

# Escalonamento Federado

Uma falha poderá exigir contato entre organizações.

---

# Caminho de Escalonamento

Deverá ser possível compreender:

- quem contatar;
- quando;
- com qual contexto;
- sob qual contrato.

---

# Invariante de Escalonamento Interorganizacional

Dependências federadas críticas não deverão depender exclusivamente de relacionamento informal entre pessoas específicas.

---

# Mudança Federada

Uma organização poderá realizar Mudança capaz de afetar outra.

---

# Invariante de Coordenação de Mudança Compartilhada

Mudanças com impacto interorganizacional relevante deverão possuir coordenação suficiente.

---

# Desconexão

Uma organização poderá temporariamente perder conexão com o ecossistema.

---

# Operação Autônoma

Quando necessário...

deverá conseguir manter funções locais compatíveis com sua responsabilidade.

---

# Invariante de Continuidade durante Partição

Capacidades críticas federadas deverão considerar comportamento durante perda temporária de conectividade quando risco justificar.

---

# Reconexão

Depois...

Estados poderão divergir.

---

# Invariante de Reconciliação Federada

A reconexão não deverá apagar silenciosamente decisões ou Eventos legítimos ocorridos durante a partição.

---

# Domínio 18 — Continuidade Humana e Coordenação

OPS depende de tecnologia.

Mas também depende de pessoas.

Pessoas possuem:

- horários;
- limites;
- especialidades;
- fadiga;
- memória;
- disponibilidade.

Uma arquitetura operacional madura deverá considerar essas propriedades.

Esse é o propósito do Domínio de:

**Continuidade Humana e Coordenação.**

---

# Propósito do Domínio

Este Domínio deverá permitir que responsabilidade e conhecimento atravessem:

- turnos;
- plantões;
- férias;
- indisponibilidade;
- mudanças de equipe;
- transições organizacionais.

---

# Capacidades Fundamentais

Poderão incluir:

- administrar plantões;
- identificar disponibilidade;
- realizar handover;
- preservar contexto;
- escalar responsabilidades;
- substituir Operadores;
- distribuir carga;
- detectar dependência de especialista;
- preservar continuidade de conhecimento;
- acompanhar fadiga operacional.

---

# Escala Operacional

Algumas Capacidades poderão exigir cobertura:

- horário comercial;
- estendida;
- 24x7;
- sob demanda.

---

# Invariante de Cobertura Compatível

A cobertura humana deverá ser compatível com a Criticidade e o compromisso operacional da Capacidade.

---

# On-Call

Um regime de plantão poderá garantir resposta fora do horário normal.

---

# On-Call não é Disponibilidade Infinita

Uma pessoa de plantão continua possuindo limites.

---

# Invariante de Sustentabilidade do Plantão

Cobertura crítica não deverá depender permanentemente de carga humana incompatível com continuidade.

---

# Handover

Quando responsabilidade muda de turno...

o contexto deverá atravessar.

---

# Pacote de Handover

Poderá incluir:

- Incidentes ativos;
- mudanças em andamento;
- degradações;
- riscos;
- contingências;
- ações pendentes.

---

# Invariante de Continuidade de Turno

Troca de pessoa não deverá reiniciar compreensão operacional.

---

# Especialista Único

Uma Capacidade poderá depender de conhecimento concentrado.

---

# Invariante de Risco Humano

Dependência crítica de uma única pessoa deverá poder ser percebida como fragilidade operacional.

---

# Fadiga

Incidentes prolongados reduzem qualidade de decisão.

---

# Rotação durante Crise

Uma resposta longa poderá exigir substituição coordenada.

---

# Invariante de Continuidade com Descanso

OPS deverá permitir que pessoas sejam substituídas sem perda intolerável de contexto.

---

# Saturação Humana

Uma equipe pode receber mais trabalho do que consegue tratar adequadamente.

---

# Invariante de Capacidade Humana Finita

OPS deverá reconhecer que atenção e capacidade cognitiva também possuem limites.

---

# Domínio 19 — Operação Crítica e Crise

Algumas condições ultrapassam a rotina normal de OPS.

Múltiplos Serviços falham.

Capacidade é severamente reduzida.

A segurança institucional é ameaçada.

Missões críticas entram em risco.

Organizações diferentes precisam agir conjuntamente.

Nessas condições...

o próprio regime operacional poderá precisar mudar.

Esse é o propósito do Domínio de:

**Operação Crítica e Crise.**

---

# Propósito do Domínio

Este Domínio deverá permitir transição controlada entre:

**Operação Normal**

e:

**Operação Extraordinária.**

---

# Capacidades Fundamentais

Poderão incluir:

- declarar crise;
- estabelecer comando extraordinário;
- alterar prioridades;
- mobilizar capacidade;
- ativar contingências amplas;
- reservar recursos;
- ampliar escalonamento;
- aplicar Freeze;
- coordenar múltiplas organizações;
- operar em Modo Degradado;
- preservar comunicação;
- retornar à normalidade.

---

# Crise não é apenas Incidente Grande

Uma Crise poderá envolver mudança de regime institucional.

Por exemplo:

- múltiplas Capacidades críticas;
- necessidade de autoridade extraordinária;
- impacto sistêmico;
- coordenação executiva;
- operação prolongada.

---

# Invariante de Distinção Incidente ↔ Crise

Nem todo Incidente severo deverá automaticamente transformar-se em Crise institucional.

---

# Declaração de Crise

A declaração poderá depender de:

- impacto;
- abrangência;
- risco;
- duração;
- Missões;
- segurança;
- necessidade de coordenação extraordinária.

---

# Comando Extraordinário

Durante crise...

a estrutura de decisão poderá ser temporariamente modificada.

---

# Invariante de Autoridade Emergencial Governada

Poderes extraordinários deverão possuir:

- motivo;
- escopo;
- autoridade;
- duração;
- condição de encerramento.

---

# Priorização Extraordinária

Recursos poderão ser redirecionados.

---

# Exemplo

Serviços secundários podem ser reduzidos para preservar função crítica.

---

# Invariante de Prioridade Institucional

OPS deverá receber do CCM ou Governança contexto suficiente sobre quais funções institucionais precisam ser preservadas primeiro quando essa decisão ultrapassar critérios puramente técnicos.

---

# Reserva de Capacidade

Recursos poderão ser protegidos para:

- Missões críticas;
- comunicação;
- recuperação;
- Segurança;
- observabilidade.

---

# Invariante de Reserva de Controle

A própria capacidade de observar e coordenar não deverá ser consumida completamente pela crise quando puder ser preservada.

---

# Freeze de Crise

Mudanças não essenciais poderão ser suspensas.

---

# Mudança Emergencial

Correções necessárias continuarão possíveis.

---

# Invariante de Exceção Controlada

A crise poderá acelerar decisões.

Não deverá eliminar toda rastreabilidade.

---

# Modo Degradado Sistêmico

A Plataforma poderá escolher preservar um núcleo mínimo.

---

# Núcleo Operacional Mínimo

Poderá incluir:

- identidade;
- comunicação;
- Missões críticas;
- registros essenciais;
- Segurança;
- capacidade de coordenação;
- recuperação.

---

# Invariante de Função Essencial Sistêmica

OPS deverá possuir compreensão sobre quais Capacidades precisam sobreviver para que a própria operação continue coordenável.

---

# Crise Prolongada

Uma crise poderá durar:

- horas;
- dias;
- períodos ainda maiores.

Nesse caso...

a estrutura emergencial precisará tornar-se sustentável.

---

# Invariante de Sustentabilidade de Crise

Operação extraordinária prolongada deverá considerar:

- turnos;
- descanso;
- estoque;
- capacidade;
- comunicação;
- substituição;
- conhecimento.

---

# Retorno à Normalidade

Encerrar a Crise não significa simplesmente declarar:

`NORMAL`.

---

# Transição de Retorno

Será necessário:

- remover acessos extraordinários;
- encerrar contingências;
- recompor capacidade;
- restaurar mudanças normais;
- devolver responsabilidades;
- revalidar Estado.

---

# Invariante de Reversão do Regime Extraordinário

Mecanismos emergenciais não deverão permanecer ativos silenciosamente depois da crise.

---

# Pós-Crise

Depois...

poderão existir:

- Problemas;
- ações corretivas;
- recuperação de reservas;
- revisão;
- aprendizagem;
- Mudanças arquiteturais.

---

# Relação entre os Domínios 15 a 19

Esses Domínios protegem OPS quando a operação atravessa fronteiras de:

- autoridade;
- dados;
- organizações;
- pessoas;
- regimes extraordinários.

---

# Segurança Operacional

responde:

> Podemos agir legitimamente e com proteção suficiente?

---

# Dados, Integrações e Fluxos

responde:

> A informação e seus movimentos continuam operáveis?

---

# Operação Federada

responde:

> Conseguimos continuar coordenando através de organizações diferentes?

---

# Continuidade Humana

responde:

> Responsabilidade e conhecimento conseguem atravessar pessoas e turnos?

---

# Operação Crítica e Crise

responde:

> Como o regime operacional muda quando a rotina já não é suficiente?

---

# Domínio 20 — Inteligência e Aprendizagem Operacional

Todos os Domínios anteriores produzem experiência.

Sinais.

Estados.

Incidentes.

Mudanças.

Falhas.

Recuperações.

Decisões.

Resultados.

Se essa experiência não modificar a operação futura...

OPS apenas reage.

Não amadurece.

Por esse motivo...

a arquitetura funcional deverá possuir um último Domínio transversal:

**Inteligência e Aprendizagem Operacional.**

---

# Propósito do Domínio

Este Domínio deverá transformar experiência operacional em:

- compreensão;
- padrões;
- indicadores;
- prevenção;
- melhoria;
- adaptação.

---

# Capacidades Fundamentais

Poderão incluir:

- consolidar métricas;
- analisar tendências;
- detectar recorrência;
- avaliar desempenho operacional;
- recuperar precedentes;
- gerar insights;
- identificar dívida;
- avaliar eficácia de mudanças;
- avaliar confiabilidade;
- produzir recomendações;
- alimentar Roadmap;
- atualizar padrões;
- apoiar adaptação.

---

# Dado Operacional não é Aprendizado

Acumular milhões de logs...

não significa aprender.

---

# Informação

Dados organizados produzem informação.

---

# Compreensão

Relações e contexto produzem compreensão.

---

# Aprendizado

Compreensão altera comportamento futuro.

---

# Invariante de Aprendizagem Aplicável

Um aprendizado somente produzirá valor operacional quando puder influenciar:

- decisão;
- arquitetura;
- processo;
- Runbook;
- Automação;
- capacidade;
- Governança.

---

# Métricas de OPS

OPS poderá avaliar propriedades como:

- tempo de detecção;
- tempo de resposta;
- tempo de recuperação;
- frequência de Incidente;
- recorrência;
- consumo de Error Budget;
- Toil;
- sucesso de Mudanças;
- cobertura de Runbooks;
- saúde de contingências.

---

# Métrica não é Objetivo

Medir algo não significa necessariamente que deve ser maximizado ou minimizado isoladamente.

---

# Invariante de Métrica Contextual

Indicadores deverão ser interpretados junto com a função operacional que representam.

---

# Tendência

Um valor isolado pode parecer normal.

Uma tendência pode revelar deterioração.

---

# Inteligência Longitudinal

OPS deverá conseguir analisar comportamento ao longo do tempo.

---

# Recorrência

Incidentes semelhantes poderão indicar:

- causa comum;
- Fragilidade;
- dívida;
- padrão de demanda.

---

# Precedentes

Um Incidente atual poderá possuir semelhança com Evento anterior.

---

# Invariante de Memória Reutilizável

Conhecimento de experiências anteriores deverá poder retornar quando contexto semelhante surgir.

---

# Aprendizagem Humana

Equipes aprendem através de:

- revisão;
- experiência;
- treinamento;
- documentação.

---

# Aprendizagem Automatizada

Sistemas poderão ajustar:

- thresholds;
- previsões;
- correlações;
- capacidade.

---

# Aprendizagem Cognitiva

Agentes poderão recuperar e relacionar precedentes.

---

# Invariante de Aprendizagem Governada

O fato de um padrão ter sido observado não deverá permitir mudança irrestrita da operação sem validação adequada.

---

# Melhoria Contínua

Aprendizados poderão originar:

- alteração de configuração;
- novo Alerta;
- novo Runbook;
- nova Automação;
- nova redundância;
- Projeto;
- ADR;
- Missão;
- atualização de padrão.

---

# Loop de Aprendizagem Operacional

Conceitualmente:

`EXPERIENCIA`

↓

`EVIDENCIA`

↓

`ANALISE`

↓

`APRENDIZADO`

↓

`MUDANCA`

↓

`VALIDACAO`

↓

`NOVA EXPERIENCIA`

---

# Invariante de Fechamento do Loop

A operação não deverá considerar melhoria concluída apenas porque uma ação foi planejada.

Seu efeito deverá retornar como Evidência.

---

# A Arquitetura Funcional Completa de OPS

Com os vinte Domínios estabelecidos...

OPS passa a possuir uma arquitetura funcional capaz de cobrir o Ciclo Operacional completo.

---

# Domínios Fundamentais

1. **Descoberta e Catálogo Operacional**

2. **Observabilidade e Evidência**

3. **Saúde, Estado e Atenção**

4. **Incidentes e Resposta Operacional**

5. **Problemas e Confiabilidade**

6. **Mudanças e Transições Operacionais**

7. **Configuração e Reconciliação**

8. **Capacidade, Desempenho e Saturação**

9. **Disponibilidade e Objetivos de Serviço**

10. **Dependências e Impacto**

11. **Recuperação, Contingência e Continuidade**

12. **Runbooks e Conhecimento Operacional**

13. **Automação e Controle Operacional**

14. **Operação Assistida por Agentes**

15. **Segurança Operacional**

16. **Dados, Integrações e Fluxos Operacionais**

17. **Operação Federada**

18. **Continuidade Humana e Coordenação**

19. **Operação Crítica e Crise**

20. **Inteligência e Aprendizagem Operacional**

---

# Os Vinte Domínios não são Silos

Eles deverão cooperar continuamente.

Um mesmo Evento poderá atravessar vários Domínios.

---

# Exemplo Integrado

Um Provider externo começa a degradar.

↓

**Observabilidade** percebe aumento de latência.

↓

**Saúde** classifica Serviço como degradado.

↓

**Dependências** identifica Capacidades afetadas.

↓

**Incidentes** coordena resposta.

↓

**Federação** aciona organização parceira.

↓

**Conhecimento** recupera Playbook.

↓

**Agente** correlaciona com Incidente anterior.

↓

**Automação** prepara failover.

↓

**Segurança** valida autoridade.

↓

**Recuperação** ativa Provider alternativo.

↓

**Capacidade** verifica Headroom da alternativa.

↓

**SLO** confirma restauração do comportamento esperado.

↓

**Aprendizagem** identifica dependência excessiva do Provider original.

↓

Uma Mudança estrutural é planejada.

---

# Capacidade Operacional Integrada

Essa sequência demonstra que maturidade não nasce de um único Domínio.

Nasce da composição.

---

# Invariante de Composição Funcional

Nenhum Domínio deverá assumir que consegue preservar sozinho toda a operação.

---

# Próxima Dimensão

Com os vinte Domínios Operacionais estabelecidos...

o próximo lote deverá consolidar o arquivo através de:

- mapa integrado de Capacidades;
- Capacidades nucleares e transversais;
- capacidade mínima de OPS;
- Criticidade das próprias Capacidades de OPS;
- maturidade por Domínio;
- análise de lacunas;
- ownership de Capacidades;
- relação Domínio → Serviço → implementação;
- princípios finais;
- filosofia;
- conclusão;
- transição para `004-servicos-operacionais-e-catalogo-de-servicos.md`.

---

# Mapa Integrado de Capacidades de OPS

Os vinte Domínios Operacionais estabelecidos neste arquivo não deverão ser compreendidos apenas como uma taxonomia.

Eles formam uma arquitetura de capacidades interdependentes.

OPS somente alcança maturidade quando essas capacidades conseguem cooperar como um sistema.

---

# Três Camadas Funcionais de OPS

A arquitetura de Capacidades poderá ser compreendida em três grandes camadas.

---

# Camada 1 — Percepção e Compreensão

Essa camada permite responder:

> O que existe?

> O que está acontecendo?

> O que isso significa?

Ela inclui principalmente:

- Descoberta e Catálogo;
- Observabilidade e Evidência;
- Saúde, Estado e Atenção;
- Dependências e Impacto;
- Inteligência Operacional.

---

# Camada 2 — Ação e Continuidade

Essa camada permite responder:

> O que precisamos fazer?

> Como restauramos?

> Como mudamos?

Ela inclui principalmente:

- Incidentes e Resposta;
- Mudanças;
- Configuração e Reconciliação;
- Recuperação e Contingência;
- Automação;
- Operação Assistida por Agentes;
- Operação Crítica.

---

# Camada 3 — Sustentação e Evolução

Essa camada permite responder:

> Como continuamos operando ao longo do tempo?

> Como evitamos repetir fragilidades?

Ela inclui principalmente:

- Capacidade e Desempenho;
- Disponibilidade e Objetivos;
- Problemas e Confiabilidade;
- Conhecimento Operacional;
- Segurança Operacional;
- Continuidade Humana;
- Federação;
- Aprendizagem Operacional.

---

# As Camadas Também se Sobrepõem

Essas divisões não deverão ser tratadas como fronteiras rígidas.

Por exemplo...

Segurança participa de percepção e ação.

Aprendizagem participa de sustentação e mudança.

Automação participa de observação e resposta.

Federação atravessa todos os níveis.

---

# Invariante de Composição entre Camadas

OPS deverá permitir que percepção, ação e aprendizagem permaneçam conectadas.

Um sistema que percebe mas não age é incompleto.

Um sistema que age mas não observa é perigoso.

Um sistema que observa e age mas não aprende permanece reativo.

---

# Capacidades Nucleares de OPS

Algumas Capacidades deverão ser consideradas nucleares porque sustentam praticamente toda a operação.

Entre elas:

- identificar aquilo que está sendo operado;
- determinar Estado;
- produzir Evidência;
- identificar responsabilidade;
- compreender dependências;
- executar ações;
- validar resultado;
- recuperar capacidade;
- preservar memória operacional.

---

# Invariante de Núcleo Operacional

OPS não deverá depender de capacidades sofisticadas para preservar seu núcleo mínimo.

Mesmo em condição degradada...

deverá buscar manter:

- identificação;
- Estado;
- responsabilidade;
- comunicação;
- ação;
- recuperação.

---

# Capacidades Transversais

Algumas Capacidades atravessam praticamente todos os Domínios.

---

# Identidade

Sem identidade...

OPS não consegue afirmar:

> Qual Serviço?

> Qual Componente?

> Qual Operador?

> Qual Automação?

---

# Temporalidade

Sem tempo...

OPS não consegue compreender:

- sequência;
- duração;
- frescor;
- recorrência.

---

# Proveniência

Sem origem...

OPS não consegue distinguir:

- quem declarou;
- quem executou;
- quem mudou;
- qual Evidência sustenta a conclusão.

---

# Autoridade

Sem autoridade...

OPS não consegue distinguir:

- capacidade técnica;
- permissão institucional.

---

# Evidência

Sem Evidência...

OPS passa a operar com suposições.

---

# Feedback

Sem Feedback...

ações deixam de formar Loops de Controle.

---

# Invariante de Capacidades Transversais

Identidade, tempo, Proveniência, autoridade, Evidência e Feedback deverão acompanhar Capacidades operacionais críticas quando necessário.

---

# Capacidade Mínima de OPS

Em condição extraordinariamente degradada...

OPS poderá perder:

- dashboards avançados;
- correlação cognitiva;
- automações;
- previsões;
- interfaces sofisticadas.

Entretanto...

a Plataforma deverá buscar preservar um conjunto mínimo de Capacidades.

---

# Núcleo Mínimo de Continuidade

Esse núcleo poderá incluir:

- saber quais Capacidades críticas existem;
- saber quais estão afetadas;
- identificar responsáveis;
- receber ou produzir comunicação;
- executar ações mínimas de controle;
- registrar decisões essenciais;
- validar recuperação;
- preservar contexto suficiente.

---

# Invariante de Continuidade de OPS

OPS deverá possuir caminho para operar de forma reduzida quando suas próprias capacidades avançadas estiverem indisponíveis.

---

# OPS Também Possui Dependências

OPS não está fora do sistema.

Ele também depende de:

- observabilidade;
- identidade;
- comunicação;
- armazenamento;
- pessoas;
- ferramentas;
- fornecedores.

---

# Invariante de Autorreflexividade Operacional

As próprias Capacidades de OPS deverão poder ser tratadas como Capacidades Operacionais.

---

# Exemplo

O Serviço de Observabilidade pode falhar.

Nesse caso...

OPS deverá conseguir representar:

`CAPACIDADE_DE_OBSERVACAO = DEGRADADA`

---

# Outro Exemplo

O sistema de incidentes pode ficar indisponível.

A resposta operacional ainda precisa continuar.

---

# Invariante de Não Dependência Circular Cega

Capacidades críticas de OPS deverão evitar dependências circulares que tornem sua própria falha impossível de operar.

---

# Criticidade das Capacidades de OPS

As próprias Capacidades de OPS poderão possuir Criticidade.

---

# Exemplo

A capacidade de:

`GERAR RELATORIO HISTORICO`

pode possuir Criticidade moderada.

Enquanto:

`DETECTAR FALHA DE SERVICO CRITICO`

pode possuir Criticidade alta.

---

# Invariante de Autocriticidade

OPS deverá aplicar princípios de Criticidade também sobre suas próprias funções.

---

# Prioridade entre Capacidades de OPS

Durante Crise...

poderá ser necessário preservar primeiro:

- comunicação;
- observabilidade essencial;
- controle;
- identidade;
- registro mínimo.

Enquanto funções secundárias poderão ser reduzidas.

---

# Maturidade por Domínio

OPS não amadurecerá de forma uniforme.

Uma organização poderá possuir:

- Observabilidade avançada;
- Runbooks fracos;
- excelente Automação;
- baixa maturidade federada.

---

# Invariante de Maturidade Multidimensional

A maturidade de OPS deverá ser avaliada por Domínio e Capacidade...

Não apenas através de um único indicador global.

---

# Escala de Maturidade Conceitual

Uma Capacidade poderá ser avaliada em níveis como:

**Nível 0 — Ausente**

A Capacidade não existe de forma reconhecida.

**Nível 1 — Ad Hoc**

Existe através de conhecimento informal.

**Nível 2 — Repetível**

Existem práticas e procedimentos reconhecíveis.

**Nível 3 — Estruturado**

A Capacidade possui ownership, processo e Evidência.

**Nível 4 — Automatizado**

Parte significativa da execução é automatizada com controle.

**Nível 5 — Adaptativo**

A Capacidade utiliza Feedback para melhorar seu próprio comportamento.

---

# Invariante de Maturidade como Capacidade Real

Uma Capacidade não deverá receber nível de maturidade apenas porque documentação afirma que ela existe.

Deverá possuir Evidência compatível.

---

# Maturidade não Precisa Chegar ao Nível Máximo

Nem toda Capacidade precisa ser adaptativa.

Para algumas funções...

um procedimento humano estruturado poderá ser suficiente.

---

# Invariante de Maturidade Proporcional

O nível desejado deverá acompanhar:

- Criticidade;
- frequência;
- risco;
- custo;
- necessidade de escala.

---

# Análise de Lacunas

Com Domínios e Capacidades formalizados...

OPS poderá realizar:

**Análise de Lacunas Operacionais.**

---

# Perguntas da Análise

> Esta Capacidade existe?

> Quem a fornece?

> Qual sua maturidade?

> Ela atende a Criticidade necessária?

> Existem dependências inadequadas?

> Onde existe dívida?

---

# Tipos de Lacuna

Uma lacuna poderá ser:

- Capacidade ausente;
- ownership ausente;
- tecnologia insuficiente;
- processo inexistente;
- conhecimento insuficiente;
- Automação inadequada;
- resiliência insuficiente;
- cobertura humana inadequada.

---

# Invariante de Lacuna como Risco Operacional

Uma Capacidade necessária mas ausente deverá poder ser reconhecida como risco...

Mesmo antes de produzir Incidente.

---

# Heatmap de Capacidades

OPS poderá futuramente apresentar um mapa como:

`DOMINIO`

×

`CAPACIDADE`

×

`CRITICIDADE`

×

`MATURIDADE`

×

`RISCO`

Isso poderá permitir visão sistêmica da operação.

---

# Exemplo Conceitual

`RECUPERACAO`

`RESTORE_DE_DADOS`

Criticidade:

`ALTA`

Maturidade:

`AD_HOC`

Risco:

`CRITICO`

Essa condição deverá tornar-se visível.

---

# Ownership de Capacidades

Cada Capacidade relevante deverá possuir Owner ou responsabilidade equivalente.

---

# Owner do Domínio

Um Domínio poderá possuir responsabilidade arquitetural mais ampla.

---

# Owner da Capacidade

Uma Capacidade poderá possuir responsabilidade específica.

---

# Provider da Capacidade

Outra equipe ou organização poderá fornecer a implementação.

---

# Invariante de Separação Owner ↔ Provider

Quem responde pela necessidade operacional não precisa ser a mesma parte que fornece a tecnologia.

---

# Exemplo

A Plataforma UNO precisa de:

`CAPACIDADE_DE_ALERTAMENTO`

Owner:

`OPS`

Provider:

`SERVICO_EXTERNO_X`

OPS continua responsável por garantir que a necessidade esteja atendida...

Mesmo quando não opera o fornecedor diretamente.

---

# Responsabilidade Federada

Em Federação...

uma Capacidade poderá possuir:

- Owner institucional;
- Provider externo;
- Operador local;
- consumidor compartilhado.

---

# Invariante de Responsabilidade Composta

OPS deverá representar responsabilidades distribuídas sem reduzi-las artificialmente a uma única parte.

---

# Domínio → Capacidade → Serviço → Implementação

Uma das relações mais importantes deste arquivo será:

`DOMINIO`

↓

`CAPACIDADE`

↓

`SERVICO OPERACIONAL`

↓

`IMPLEMENTACAO`

---

# Exemplo

`DOMINIO`

Observabilidade.

↓

`CAPACIDADE`

Coletar Métricas.

↓

`SERVICO`

Serviço de Métricas.

↓

`IMPLEMENTACAO`

Prometheus, OpenTelemetry, Provider X ou tecnologia futura.

---

# Invariante de Substituibilidade

A implementação poderá mudar...

sem exigir que o Domínio ou a Capacidade mudem de identidade.

---

# Um Serviço Pode Atender Múltiplas Capacidades

Por exemplo...

um mesmo Serviço de Observabilidade poderá sustentar:

- detecção;
- investigação;
- auditoria;
- capacidade.

---

# Uma Capacidade Pode Utilizar Múltiplos Serviços

Por exemplo...

`DETECTAR_DEGRADACAO`

poderá combinar:

- métricas;
- logs;
- synthetic monitoring;
- experiência do Consumer.

---

# Invariante de Relação Muitos-para-Muitos

OPS deverá evitar modelar Capacidades e Serviços como relação rígida um-para-um.

---

# Capacidade Interna e Capacidade Consumida

OPS poderá fornecer algumas Capacidades diretamente.

Outras poderá consumir.

---

# Capacidade Interna

A própria organização opera.

---

# Capacidade Externa

Um Provider fornece.

---

# Capacidade Federada

Outra organização fornece dentro de contrato compartilhado.

---

# Capacidade Híbrida

Partes são internas e externas.

---

# Invariante de Origem Transparente

A forma de fornecimento deverá ser compreensível quando afetar:

- responsabilidade;
- risco;
- recuperação;
- segurança.

---

# Dependência entre Capacidades

Uma Capacidade de OPS poderá depender de outra.

---

# Exemplo

`AUTO_REMEDIACAO`

depende de:

- Observabilidade;
- Estado;
- Autoridade;
- Automação;
- Validação.

---

# Outro Exemplo

`GESTAO_DE_INCIDENTES`

depende de:

- Descoberta;
- ownership;
- comunicação;
- Evidência;
- escalonamento.

---

# Invariante de Dependências de Capacidade

OPS deverá poder compreender quando a ausência de uma Capacidade impede ou degrada outra.

---

# Cascata de Maturidade

Uma Capacidade sofisticada poderá não gerar valor se Capacidades fundamentais estiverem imaturas.

---

# Exemplo

Um Agente avançado de diagnóstico pode existir.

Mas se:

- o Catálogo está errado;
- a telemetria é incompleta;
- ownership não existe;

suas recomendações terão base frágil.

---

# Invariante de Fundamentos antes da Sofisticação

OPS deverá evitar utilizar automação ou cognição avançada como substituto para fundamentos operacionais ausentes.

---

# Desenvolvimento de Capacidade

Uma lacuna poderá originar iniciativa para criar ou amadurecer determinada Capacidade.

---

# Ciclo de Desenvolvimento

Conceitualmente:

`LACUNA`

↓

`NECESSIDADE`

↓

`CAPACIDADE DESEJADA`

↓

`SERVICOS NECESSARIOS`

↓

`IMPLEMENTACAO`

↓

`VALIDACAO`

↓

`OPERACAO`

↓

`AVALIACAO`

---

# Invariante de Capacidade antes da Ferramenta

Antes de selecionar tecnologia...

a organização deverá buscar compreender:

> Qual Capacidade estamos tentando construir?

---

# Ferramenta sem Capacidade Definida

Uma organização poderá adquirir uma plataforma sofisticada...

sem saber qual problema operacional pretende resolver.

Essa condição deverá ser evitada.

---

# Princípio da Arquitetura Funcional

A Engenharia Oficial estabelece:

> ferramentas deverão servir Capacidades.

> Capacidades deverão servir Domínios.

> Domínios deverão servir a continuidade operacional da Plataforma UNO.

---

# Arquitetura de Capacidades como Contrato

Os vinte Domínios representam um contrato funcional sobre aquilo que OPS precisa conseguir fazer.

Uma implementação poderá distribuir essas responsabilidades de maneiras diferentes.

Entretanto...

As necessidades não desaparecem porque uma organização decidiu não nomeá-las.

---

# Capacidade Ausente Continua Sendo Necessidade

Se ninguém possui função de Recuperação...

a necessidade de recuperar continua existindo.

Se ninguém possui Gestão de Dependências...

as dependências continuam existindo.

Se ninguém possui Handover...

turnos continuam terminando.

---

# Invariante de Realidade Funcional

A ausência de estrutura organizacional não elimina a necessidade operacional correspondente.

---

# Filosofia dos Domínios de OPS

A Engenharia Oficial compreende que operar sistemas complexos exige mais do que reagir a falhas.

Exige um conjunto permanente de faculdades.

Perceber.

Compreender.

Avaliar.

Decidir.

Agir.

Recuperar.

Aprender.

Preservar conhecimento.

Administrar capacidade.

Proteger limites.

Coordenar pessoas.

Cooperar entre organizações.

---

# OPS como Composição de Faculdades

Cada Domínio representa uma faculdade operacional.

Nenhuma delas define OPS sozinha.

OPS emerge da composição.

---

# Observabilidade sem Recuperação é Contemplação

A organização sabe que falhou...

Mas não consegue restaurar.

---

# Recuperação sem Observabilidade é Adivinhação

A organização possui procedimentos...

Mas não sabe quando nem onde utilizá-los.

---

# Automação sem Governança é Risco Acelerado

A organização consegue agir rapidamente...

Mas sem limites suficientes.

---

# Conhecimento sem Atualização é Memória Morta

A documentação existe...

Mas descreve um sistema que já não existe.

---

# Capacidade sem Ownership é Fragilidade

A função existe...

Até o dia em que ninguém sabe quem precisa cuidar dela.

---

# Aprendizagem sem Mudança é Arquivo

A organização sabe por que falhou...

Mas continua operando da mesma maneira.

---

# Princípio Final

Os Domínios e Capacidades Operacionais representam as faculdades permanentes necessárias para que OPS consiga sustentar a realidade operacional da Plataforma UNO.

Domínios organizam responsabilidades.

Capacidades representam possibilidades.

Serviços materializam essas possibilidades.

Implementações fornecem mecanismos concretos.

A tecnologia poderá mudar.

A organização poderá mudar.

Os fornecedores poderão mudar.

Mas a necessidade de:

- descobrir;
- observar;
- compreender;
- proteger;
- operar;
- recuperar;
- aprender;

permanece.

---

# Conclusão

A Engenharia Oficial estabelece vinte Domínios Operacionais fundamentais para OPS:

1. Descoberta e Catálogo Operacional;
2. Observabilidade e Evidência;
3. Saúde, Estado e Atenção;
4. Incidentes e Resposta Operacional;
5. Problemas e Confiabilidade;
6. Mudanças e Transições Operacionais;
7. Configuração e Reconciliação;
8. Capacidade, Desempenho e Saturação;
9. Disponibilidade e Objetivos de Serviço;
10. Dependências e Impacto;
11. Recuperação, Contingência e Continuidade;
12. Runbooks e Conhecimento Operacional;
13. Automação e Controle Operacional;
14. Operação Assistida por Agentes;
15. Segurança Operacional;
16. Dados, Integrações e Fluxos Operacionais;
17. Operação Federada;
18. Continuidade Humana e Coordenação;
19. Operação Crítica e Crise;
20. Inteligência e Aprendizagem Operacional.

---

Esses Domínios não deverão formar vinte silos.

Deverão formar um sistema.

A Evidência atravessa Domínios.

O Estado atravessa Domínios.

A autoridade atravessa Domínios.

A responsabilidade atravessa Domínios.

O conhecimento atravessa Domínios.

A aprendizagem atravessa todos eles.

---

Onde existir uma Capacidade necessária...

Existirá necessidade de responsabilidade.

Onde existir responsabilidade...

Existirá necessidade de Estado.

Onde existir Estado...

Existirá necessidade de Evidência.

Onde existir Evidência...

Existirá possibilidade de compreensão.

Onde existir compreensão...

Existirá possibilidade de ação.

Onde existir ação...

Existirá necessidade de validação.

Onde existir falha...

Existirá necessidade de recuperação.

Onde existir experiência...

Existirá possibilidade de aprendizagem.

E onde essas faculdades conseguirem operar como uma arquitetura integrada...

OPS deixará de ser um conjunto de ferramentas e equipes isoladas.

Passará a funcionar como uma capacidade operacional sistêmica da Plataforma UNO.

---

# Encerramento do Arquivo 003

Com este documento...

O V08 estabelece a arquitetura funcional de OPS.

Foram definidos:

- conceito de Domínio Operacional;
- conceito de Capacidade Operacional;
- vinte Domínios fundamentais;
- Capacidades nucleares;
- Capacidades transversais;
- maturidade;
- análise de lacunas;
- ownership;
- relação entre Domínio, Capacidade, Serviço e implementação.

O próximo passo será aprofundar o elemento através do qual muitas dessas Capacidades são entregues e consumidas.

Essa será a responsabilidade de:

**004 — Serviços Operacionais e Catálogo de Serviços.**

---

**Fim do arquivo `003-dominios-e-capacidades-operacionais.md`.**
