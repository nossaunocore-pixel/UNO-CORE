# 022 — Automação Operacional e Auto-Remediação

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial para concepção, autorização, implementação, execução, supervisão, interrupção, reversão, validação e evolução de:

- automações operacionais;
- workflows automatizados;
- automações orientadas por eventos;
- automações agendadas;
- automações assistidas;
- agentes operacionais;
- respostas automáticas;
- auto-remediação;
- autocorreção;
- recuperação automática;
- escalonamento automático;
- contenção automática;
- reconciliação automatizada;
- automação federada;
- automação adaptativa;
- automação baseada em inteligência artificial;
- automação de procedimentos e runbooks;
- automação de observabilidade;
- automação de evidências;
- automação de aprendizagem operacional.

Seu propósito é permitir que a Plataforma UNO execute ações repetitivas, previsíveis, urgentes ou complexas com maior:

- consistência;
- velocidade;
- segurança;
- escala;
- rastreabilidade;
- disponibilidade;
- capacidade de recuperação;
- eficiência;
- precisão;
- continuidade.

A automação deverá ampliar capacidades humanas e institucionais sem eliminar:

- propósito;
- autoridade;
- responsabilidade;
- compreensão;
- prudência;
- supervisão;
- contestabilidade;
- possibilidade de interrupção;
- possibilidade de reversão;
- prestação de contas;
- memória.

---

## Princípio central

> Automatizar não é retirar pessoas da operação.  
> É transferir parte da execução para mecanismos governados, preservando propósito, autoridade, limites, evidências e responsabilidade.

A Plataforma UNO não deverá automatizar uma atividade apenas porque tecnicamente consegue fazê-lo.

Antes da automação, deverá compreender:

- por que a atividade existe;
- quem será afetado;
- qual autoridade a sustenta;
- quais riscos produz;
- quais decisões exige;
- quais limites não podem ser ultrapassados;
- como a execução será observada;
- como poderá ser interrompida;
- como poderá ser revertida;
- quem responderá por seus resultados.

---

## Escopo

Este arquivo abrange automações utilizadas em:

- infraestrutura;
- aplicações;
- dados;
- integrações;
- redes;
- segurança;
- identidade;
- observabilidade;
- capacidade;
- disponibilidade;
- incidentes;
- contingência;
- recuperação;
- continuidade;
- comunicação;
- atendimento;
- missões;
- serviços;
- processos;
- organizações;
- recursos;
- fornecedores;
- ambientes físicos conectados;
- operações federadas.

Abrange automações executadas por:

- scripts;
- schedulers;
- pipelines;
- workflows;
- funções;
- serviços;
- controladores;
- sistemas especialistas;
- agentes artificiais;
- modelos de inteligência artificial;
- mecanismos baseados em regras;
- combinações governadas desses elementos.

---

## Relação com os arquivos anteriores

Este arquivo é construído sobre as capacidades estabelecidas em:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`;
- `018-contingencia-recuperacao-e-operacao-degradada.md`;
- `019-backup-restauracao-e-recuperabilidade.md`;
- `020-continuidade-operacional-e-disaster-recovery.md`;
- `021-runbooks-playbooks-e-procedimentos-operacionais.md`.

A automação deverá utilizar:

- estados reconhecidos;
- limites de capacidade;
- indicadores;
- dependências;
- mapas de impacto;
- estratégias de contingência;
- mecanismos de recuperação;
- planos de continuidade;
- procedimentos governados.

Nenhuma automação deverá substituir silenciosamente essas fontes normativas.

---

## Estrutura do documento

Este arquivo será desenvolvido em seis lotes:

### Lote 1 — Fundamentos, Conceitos, Tipos e Princípios da Automação Operacional

Estabelece o significado, os objetivos, os níveis, os limites e os invariantes da automação e da auto-remediação.

### Lote 2 — Arquitetura, Gatilhos, Estados, Workflows e Controles de Execução

Estabelece entradas, eventos, decisões, estados, filas, concorrência, idempotência, limites, observabilidade, interrupção e reversão.

### Lote 3 — Auto-Remediação, Recuperação Automática e Operação Adaptativa

Estabelece detecção, diagnóstico, contenção, correção, validação, escalonamento, prevenção de ciclos e retorno.

### Lote 4 — Agentes, Inteligência Artificial, Supervisão Humana e Automação Federada

Estabelece delegação, autonomia, cognição operacional, agentes, modelos, interação humana, federação e contestabilidade.

### Lote 5 — Governança, Segurança, Conformidade, Ciclo de Vida e Evidências

Estabelece propriedade, autoridade, segurança, leis, normas, fornecedores, versionamento, auditoria, registros e prestação de contas.

### Lote 6 — Testes, Métricas, Maturidade, Aprendizagem e Encerramento

Estabelece simulações, validação, indicadores, análise de falhas, maturidade, evolução e garantias permanentes.

---

# Lote 1 — Fundamentos, Conceitos, Tipos e Princípios da Automação Operacional

## 1. Automação operacional

Automação operacional é a capacidade de executar ações, decisões delimitadas, verificações ou fluxos operacionais por meio de mecanismos tecnológicos governados.

Ela deverá operar com base em:

- propósito;
- estado;
- evento;
- regra;
- autorização;
- contexto;
- limite;
- resultado esperado;
- validação;
- evidência.

## 2. Automação como delegação

Toda automação representa delegação de capacidade.

Ao automatizar, a organização transfere para um mecanismo a possibilidade de:

- perceber;
- interpretar;
- decidir dentro de limites;
- executar;
- registrar;
- comunicar;
- corrigir;
- escalar.

Essa delegação deverá ser explícita.

## 3. Delegação não é abandono

A organização não deverá abandonar a responsabilidade sobre ações executadas por:

- script;
- workflow;
- agente;
- fornecedor;
- plataforma;
- modelo;
- serviço externo.

A automação continuará vinculada a um proprietário institucional.

## 4. Automação e propósito

Toda automação deverá declarar qual finalidade serve.

O propósito deverá responder:

- qual necessidade atende;
- qual capacidade amplia;
- qual risco reduz;
- qual impacto evita;
- qual resultado produz;
- quem é beneficiado;
- por que a execução automática é adequada.

## 5. Automação e autoridade

A possibilidade técnica de executar não constitui autoridade.

A automação deverá possuir autorização correspondente:

- à ação;
- ao alvo;
- ao ambiente;
- ao período;
- ao impacto;
- aos dados;
- à organização;
- ao estado operacional.

## 6. Automação e responsabilidade

Cada automação deverá possuir responsáveis por:

- propósito;
- desenho;
- implementação;
- aprovação;
- operação;
- supervisão;
- segurança;
- resultado;
- correção;
- encerramento.

## 7. Automação e discernimento

A automação não deverá substituir discernimento quando a decisão depender de:

- valores;
- direitos;
- dignidade;
- contexto humano;
- autoridade institucional;
- informação incompleta;
- conflito legítimo;
- consequência irreversível;
- interpretação normativa.

## 8. Automação determinística

A automação determinística executa ações com base em regras explícitas e resultados previsíveis para entradas equivalentes.

Ela deverá possuir:

- entradas definidas;
- regras;
- sequência;
- saída;
- tratamento de falha;
- limites;
- testes;
- versionamento;
- evidências.

## 9. Automação probabilística

A automação probabilística utiliza modelos ou inferências cujos resultados podem variar.

Ela deverá declarar:

- incerteza;
- confiança;
- limitações;
- possibilidade de erro;
- necessidade de confirmação;
- critérios de escalonamento;
- dados utilizados;
- versão do modelo.

## 10. Automação baseada em regras

Essa automação utiliza condições do tipo:

- se;
- então;
- caso;
- enquanto;
- até;
- exceto.

As regras deverão ser:

- legíveis;
- testáveis;
- versionadas;
- explicáveis;
- limitadas;
- relacionadas a autoridade.

## 11. Automação orientada por eventos

Essa automação inicia ou altera sua execução quando recebe evento.

O evento deverá possuir:

- identidade;
- origem;
- tempo;
- tipo;
- contexto;
- autenticidade;
- correlação;
- confiabilidade;
- estado.

## 12. Automação agendada

Essa automação inicia em horário ou frequência definida.

Ela deverá verificar, no momento da execução:

- vigência;
- autorização;
- contexto;
- alvo;
- estado;
- dependências;
- conflitos;
- bloqueios;
- versão.

## 13. Automação sob demanda

Essa automação inicia mediante solicitação explícita de:

- pessoa;
- organização;
- agente;
- sistema;
- processo;
- autoridade.

A solicitação deverá ser autenticada, autorizada e rastreável.

## 14. Automação reativa

A automação reativa responde a condição observada.

Ela poderá:

- alertar;
- limitar;
- isolar;
- reiniciar;
- redirecionar;
- ampliar;
- reduzir;
- recuperar;
- escalar.

## 15. Automação proativa

A automação proativa atua antes da falha com base em:

- tendência;
- previsão;
- risco;
- degradação;
- aproximação de limite;
- histórico;
- padrão;
- contexto.

## 16. Automação preventiva

A automação preventiva busca impedir falha ou dano.

Exemplos poderão incluir:

- renovar certificado;
- liberar capacidade;
- rotacionar segredo;
- validar backup;
- substituir recurso;
- corrigir configuração;
- bloquear ação insegura.

## 17. Automação corretiva

A automação corretiva atua após reconhecer desvio ou falha.

Ela deverá:

- identificar a condição;
- limitar o dano;
- selecionar ação permitida;
- executar;
- validar;
- registrar;
- escalar quando necessário.

## 18. Automação adaptativa

A automação adaptativa modifica sua atuação conforme mudanças no contexto.

Essa adaptação deverá ocorrer dentro de:

- políticas;
- limites;
- capacidades;
- objetivos;
- critérios;
- supervisão;
- evidências.

## 19. Automação autônoma

A automação autônoma poderá perceber, decidir e agir sem confirmação humana a cada execução.

Essa autonomia deverá ser:

- delimitada;
- comprovada;
- monitorada;
- revogável;
- interrompível;
- auditável;
- proporcional ao risco.

## 20. Automação assistida

A automação assistida prepara ou executa parte da atividade, mantendo pontos de decisão humana.

Ela poderá:

- coletar dados;
- diagnosticar;
- recomendar;
- gerar plano;
- preparar comando;
- solicitar aprovação;
- executar etapa segura;
- validar resultado.

## 21. Automação supervisionada

A automação supervisionada executa enquanto pessoa ou estrutura acompanha e pode intervir.

A supervisão deverá ser significativa e possuir:

- visibilidade;
- compreensão;
- autoridade;
- tempo;
- mecanismo de interrupção;
- registro.

## 22. Automação não supervisionada

A automação sem supervisão imediata somente deverá ocorrer quando:

- a ação for delimitada;
- o risco for aceitável;
- a automação estiver comprovada;
- os limites forem fortes;
- a observabilidade estiver ativa;
- a reversão ou compensação existir;
- a responsabilidade estiver atribuída.

## 23. Automação local

A automação local atua dentro de:

- dispositivo;
- instalação;
- unidade;
- organização;
- sistema;
- território;
- capacidade específica.

## 24. Automação centralizada

A automação centralizada coordena ações a partir de núcleo comum.

Ela poderá ampliar consistência, mas também criar:

- concentração;
- dependência;
- latência;
- ponto único de falha;
- risco de autoridade excessiva;
- impacto amplo.

## 25. Automação distribuída

A automação distribuída atua por múltiplos componentes ou organizações.

Ela deverá tratar:

- coordenação;
- identidade;
- estado;
- consistência;
- conflito;
- autoridade;
- comunicação;
- reconciliação;
- falhas parciais.

## 26. Automação federada

A automação federada coordena ações entre organizações autônomas.

Ela deverá preservar:

- identidade;
- soberania;
- autoridade local;
- responsabilidade;
- fronteiras de dados;
- contratos;
- interoperabilidade;
- possibilidade de recusa.

## 27. Workflow automatizado

Workflow automatizado coordena estados, tarefas, participantes e decisões.

Ele deverá definir:

- início;
- etapas;
- transições;
- papéis;
- prazos;
- falhas;
- evidências;
- encerramento.

## 28. Script operacional

Script operacional executa sequência técnica delimitada.

Ele deverá possuir:

- identificador;
- proprietário;
- versão;
- repositório;
- documentação;
- testes;
- segurança;
- logs;
- tratamento de erro;
- relação com runbook.

## 29. Pipeline operacional

Pipeline coordena múltiplas etapas automatizadas.

Ele deverá preservar:

- ordem;
- dependências;
- artefatos;
- aprovações;
- validações;
- separação de ambientes;
- reversão;
- evidências.

## 30. Controlador

Controlador compara estado desejado e estado observado e executa ações para reduzir diferenças.

Ele deverá possuir:

- estado desejado legítimo;
- fonte confiável;
- frequência;
- limites;
- prevenção de ciclos;
- observabilidade;
- interrupção;
- tratamento de conflito.

## 31. Automação de reconciliação

Essa automação compara fontes, estados ou registros para identificar e tratar divergências.

Ela deverá preservar:

- proveniência;
- temporalidade;
- autoridade;
- regra;
- conflito;
- resultado;
- evidência.

## 32. Automação de orquestração

A orquestração coordena capacidades sem necessariamente executar diretamente todas elas.

Ela deverá distinguir:

- decisão;
- delegação;
- execução;
- validação;
- agregação;
- encerramento.

## 33. Automação de monitoramento

Essa automação coleta e interpreta:

- métricas;
- logs;
- eventos;
- estados;
- sinais;
- capacidade;
- integridade;
- comportamento.

## 34. Automação de alerta

Essa automação transforma condição observada em sinal dirigido a responsável ou mecanismo.

Um alerta deverá possuir:

- contexto;
- severidade;
- ação possível;
- destinatário;
- prazo;
- escalonamento;
- encerramento.

## 35. Automação de diagnóstico

Essa automação correlaciona sinais para identificar:

- condição;
- causa provável;
- extensão;
- impacto;
- dependências;
- ação recomendada.

## 36. Automação de contenção

A contenção automática limita a extensão de uma falha ou ameaça.

Poderá:

- isolar;
- bloquear;
- limitar;
- suspender;
- redirecionar;
- revogar;
- reduzir capacidade;
- interromper integração.

## 37. Automação de recuperação

Essa automação restabelece recurso, serviço, estado ou capacidade.

Ela deverá incluir:

- fonte;
- sequência;
- validação;
- segurança;
- reconciliação;
- liberação;
- evidência.

## 38. Auto-remediação

Auto-remediação é a capacidade de detectar condição operacional indesejada, selecionar ação autorizada, executá-la e validar se a condição foi corrigida.

Ela não deverá ser reduzida ao simples reinício automático.

## 39. Ciclo da auto-remediação

O ciclo deverá compreender:

1. perceber;
2. qualificar;
3. compreender;
4. decidir;
5. autorizar;
6. conter;
7. corrigir;
8. validar;
9. observar;
10. encerrar;
11. aprender.

## 40. Remediação não é ocultação

A auto-remediação não deverá apagar sinais ou sintomas apenas para restaurar indicadores.

Ela deverá buscar compreender e tratar a condição real.

## 41. Correção sintomática

Uma correção sintomática poderá ser legítima para:

- preservar serviço;
- limitar impacto;
- ganhar tempo;
- proteger pessoas;
- permitir investigação.

Ela deverá permanecer identificada como temporária quando a causa não tiver sido tratada.

## 42. Correção de causa

A correção de causa deverá ocorrer somente quando:

- a causa estiver suficientemente compreendida;
- a ação estiver autorizada;
- o risco for aceitável;
- houver validação;
- existir acompanhamento.

## 43. Recuperação automática

A recuperação automática restaura capacidade após falha.

Ela poderá utilizar:

- reinício;
- substituição;
- failover;
- restauração;
- reconstrução;
- redirecionamento;
- reprocessamento;
- isolamento;
- degradação controlada.

## 44. Failover automático

O failover automático transfere operação para recurso alternativo.

Ele deverá avaliar:

- condição;
- integridade;
- capacidade;
- consistência;
- destino;
- segurança;
- efeitos externos;
- retorno;
- risco de split-brain.

## 45. Failback automático

O retorno automático ao recurso principal deverá possuir controles mais rigorosos quando puder produzir:

- oscilação;
- perda de estado;
- conflito;
- indisponibilidade repetida;
- degradação;
- duplicidade.

## 46. Escalonamento automático

A automação poderá elevar:

- prioridade;
- equipe;
- recurso;
- autoridade solicitada;
- nível operacional;
- canal;
- fornecedor;
- estrutura institucional.

O escalonamento não deverá criar autoridade inexistente.

## 47. Priorização automática

A priorização poderá considerar:

- propósito;
- urgência;
- impacto;
- risco;
- dependências;
- pessoas;
- capacidade;
- tempo;
- obrigação.

Critérios e pesos deverão ser governados e revisáveis.

## 48. Provisionamento automático

O provisionamento poderá criar:

- infraestrutura;
- conta;
- recurso;
- ambiente;
- capacidade;
- integração;
- permissão.

Ele deverá possuir:

- limite;
- custo;
- expiração;
- segurança;
- identificação;
- encerramento;
- prevenção de abandono.

## 49. Desprovisionamento automático

A remoção de recursos deverá confirmar:

- inatividade;
- propriedade;
- dependência;
- dados;
- retenção;
- obrigação;
- autoridade;
- reversibilidade;
- evidência.

## 50. Escala automática

A escala automática ajusta capacidade conforme demanda ou estado.

Ela deverá possuir:

- mínimo;
- máximo;
- limiar;
- velocidade;
- custo;
- cooldown;
- dependências;
- proteção contra oscilação;
- retorno.

## 51. Automação de configuração

A automação poderá aplicar estado configuracional autorizado.

Ela deverá tratar:

- origem;
- versão;
- alvo;
- diferença;
- conflito;
- validação;
- deriva;
- reversão;
- evidência.

## 52. Automação de conformidade

Essa automação poderá:

- verificar requisito;
- detectar desvio;
- alertar;
- bloquear;
- corrigir configuração autorizada;
- produzir evidência;
- encaminhar exceção.

## 53. Automação de segurança

Poderá executar:

- detecção;
- bloqueio;
- isolamento;
- revogação;
- rotação;
- contenção;
- investigação assistida;
- recuperação.

A segurança não deverá utilizar automação sem avaliar impactos sobre continuidade, direitos e operação.

## 54. Automação de dados

Poderá executar:

- coleta;
- validação;
- transformação;
- movimentação;
- retenção;
- reconciliação;
- backup;
- restauração;
- eliminação.

## 55. Automação de comunicação

Poderá gerar ou enviar:

- alerta;
- atualização;
- confirmação;
- relatório;
- orientação;
- escalonamento.

Ela deverá evitar mensagens:

- falsas;
- duplicadas;
- sem contexto;
- para destinatário errado;
- com dados indevidos;
- sem identificação.

## 56. Automação de evidências

A automação poderá coletar e relacionar:

- logs;
- decisões;
- aprovações;
- estados;
- resultados;
- horários;
- responsáveis;
- versões;
- falhas.

## 57. Automação de aprendizagem

A automação poderá identificar:

- padrões;
- recorrências;
- desvios;
- oportunidades;
- falhas;
- recomendações;
- alterações necessárias.

Ela não deverá modificar silenciosamente políticas, limites ou princípios.

## 58. Automação e trabalho humano

A automação deverá ser concebida para:

- reduzir trabalho repetitivo;
- ampliar segurança;
- apoiar decisão;
- aumentar capacidade;
- liberar atenção humana;
- preservar conhecimento;
- reduzir exposição a risco.

## 59. Automação não substitutiva por princípio

A Plataforma UNO não deverá adotar como princípio que automação existe para eliminar pessoas.

Ela deverá avaliar como a tecnologia pode:

- apoiar;
- proteger;
- potencializar;
- reorganizar;
- qualificar;
- criar novas capacidades;
- permitir trabalho mais digno.

## 60. Mudança do trabalho

Quando a automação alterar funções humanas, deverão ser considerados:

- treinamento;
- transição;
- responsabilidade;
- saúde;
- renda;
- dignidade;
- participação;
- novas competências;
- supervisão;
- comunicação.

## 61. Automação e concentração de poder

A automação poderá concentrar capacidade em:

- sistema;
- administrador;
- organização;
- fornecedor;
- modelo;
- plataforma.

A arquitetura deverá avaliar e limitar essa concentração.

## 62. Automação e autonomia

A automação deverá ampliar autonomia legítima de pessoas e organizações sem eliminar coordenação e responsabilidade.

## 63. Automação e cooperação

Automações deverão poder cooperar por interfaces e contratos claros, preservando:

- identidade;
- capacidade;
- limite;
- estado;
- responsabilidade;
- evidência;
- encerramento.

## 64. Automação e confiança

Confiança em automação deverá ser construída por:

- compreensão;
- teste;
- evidência;
- previsibilidade;
- observabilidade;
- segurança;
- possibilidade de intervenção;
- histórico;
- prestação de contas.

## 65. Confiança calibrada

A organização deverá evitar:

- confiança excessiva;
- desconfiança sem fundamento;
- dependência cega;
- rejeição automática.

A confiança deverá corresponder às evidências reais de capacidade.

## 66. Autoridade da automação

A automação deverá possuir autoridade definida por:

- ação;
- recurso;
- ambiente;
- organização;
- território;
- volume;
- tempo;
- impacto;
- estado operacional.

## 67. Autoridade não transferível automaticamente

Uma automação autorizada a executar determinada tarefa não poderá delegar a outra capacidade além do que foi explicitamente permitido.

## 68. Escopo

O escopo deverá indicar:

- alvos;
- ambientes;
- recursos;
- dados;
- ações;
- exclusões;
- organizações;
- usuários;
- horários;
- condições.

## 69. Limite de impacto

A automação deverá possuir limite de:

- usuários afetados;
- recursos alterados;
- volume;
- custo;
- região;
- duração;
- perda potencial;
- propagação.

## 70. Limite temporal

A autorização deverá possuir:

- início;
- validade;
- expiração;
- renovação;
- revogação;
- condição de encerramento.

## 71. Limite financeiro

Automações capazes de gerar custo deverão possuir:

- orçamento;
- limite;
- alerta;
- aprovação;
- bloqueio;
- atribuição;
- relatório;
- reconciliação.

## 72. Limite de capacidade

A automação não deverá consumir recursos além de limites que coloquem outras funções essenciais em risco.

## 73. Limite de dados

A automação deverá acessar somente os dados:

- necessários;
- autorizados;
- proporcionais;
- válidos;
- relacionados à finalidade.

## 74. Limite de privilégio

O mecanismo deverá operar com o menor privilégio suficiente.

## 75. Limite de repetição

A automação deverá possuir número máximo ou condição de saída para impedir:

- loop;
- saturação;
- custo;
- duplicidade;
- dano repetido;
- bloqueio.

## 76. Limite de propagação

A automação deverá impedir que uma ação local se expanda sem avaliação para:

- outros sistemas;
- outras regiões;
- outras organizações;
- outros usuários;
- outros ambientes;
- fornecedores;
- recursos críticos.

## 77. Blast radius

O raio de impacto deverá ser conhecido e, quando possível, limitado por:

- segmentação;
- canary;
- lotes;
- escopo;
- permissões;
- organizações;
- territórios;
- limites;
- circuitos de proteção.

## 78. Autorização por estado

A mesma ação poderá ser permitida em um estado e proibida em outro.

Exemplos:

- normal;
- manutenção;
- degradação;
- contingência;
- emergência;
- recuperação;
- simulação.

## 79. Autorização por nível de risco

A automação poderá executar ações de baixo risco e solicitar aprovação para ações de impacto maior.

## 80. Níveis de automação

A Plataforma UNO poderá utilizar níveis:

1. observação;
2. recomendação;
3. preparação;
4. execução mediante confirmação;
5. execução supervisionada;
6. execução autônoma limitada;
7. execução autônoma ampliada sob governança específica.

## 81. Nível 1 — observação

A automação apenas:

- coleta;
- organiza;
- correlaciona;
- apresenta;
- registra.

Ela não altera o estado operacional.

## 82. Nível 2 — recomendação

A automação sugere ação, mas não prepara nem executa mudança.

A recomendação deverá apresentar fundamento e limitações.

## 83. Nível 3 — preparação

A automação poderá:

- reunir dados;
- resolver alvos;
- gerar plano;
- preparar comando;
- estimar impacto;
- solicitar aprovação.

## 84. Nível 4 — execução mediante confirmação

A automação executa após confirmação humana significativa.

## 85. Nível 5 — execução supervisionada

A automação executa dentro de limites enquanto autoridade acompanha e pode intervir.

## 86. Nível 6 — execução autônoma limitada

A automação executa sem confirmação individual dentro de escopo restrito, comprovado e monitorado.

## 87. Nível 7 — autonomia ampliada

A autonomia ampliada somente deverá existir quando:

- necessária;
- justificada;
- exercitada;
- reversível ou compensável;
- altamente observável;
- auditável;
- revogável;
- submetida a governança reforçada.

## 88. Promoção de nível

A ampliação deverá considerar:

- testes;
- histórico;
- estabilidade;
- impacto;
- confiança;
- segurança;
- falhas;
- observabilidade;
- capacidade de intervenção;
- autoridade.

## 89. Redução de nível

O nível deverá ser reduzido quando houver:

- falha;
- mudança;
- incidente;
- risco;
- deriva;
- perda de observabilidade;
- comportamento inesperado;
- alteração normativa;
- dúvida de autoridade.

## 90. Revogação

A autorização deverá poder ser revogada imediatamente por autoridade competente.

A revogação deverá alcançar:

- identidade;
- token;
- chave;
- agenda;
- gatilho;
- workflow;
- agente;
- integração;
- execução futura.

## 91. Kill switch

Automações críticas deverão possuir mecanismo de interrupção emergencial.

O kill switch deverá ser:

- protegido;
- acessível;
- testado;
- independente quando necessário;
- rastreável;
- capaz de impedir nova execução.

## 92. Parada segura

A interrupção deverá conduzir, quando possível, a estado:

- conhecido;
- estável;
- protegido;
- observável;
- recuperável;
- reconciliável.

## 93. Pausa

A automação deverá poder pausar preservando:

- estado;
- contexto;
- autoridade;
- execução;
- bloqueios necessários;
- condição de retomada.

## 94. Retomada

Antes de retomar, deverão ser reavaliados:

- contexto;
- alvo;
- versão;
- autoridade;
- dependências;
- riscos;
- mudanças concorrentes;
- validade dos dados.

## 95. Cancelamento

O cancelamento deverá tratar:

- estado parcial;
- reversão;
- compensação;
- bloqueios;
- recursos;
- comunicação;
- evidências;
- encerramento.

## 96. Reversão

Toda automação que altera estado deverá indicar:

- se a ação é reversível;
- qual ponto de retorno existe;
- quais dados são necessários;
- qual autoridade reverte;
- quais riscos permanecem;
- como validar.

## 97. Compensação

Quando a ação não puder ser revertida, deverá existir, quando possível, mecanismo de compensação.

## 98. Ação irreversível

A automação de ação irreversível deverá exigir controles reforçados:

- escopo reduzido;
- confirmação;
- dupla autorização;
- simulação;
- evidência;
- limite;
- validação;
- comunicação;
- compensação.

## 99. Observabilidade

Toda automação crítica deverá permitir compreender:

- quando iniciou;
- por que iniciou;
- qual versão executou;
- qual alvo alterou;
- quais decisões tomou;
- quais ações realizou;
- qual resultado produziu;
- quando encerrou.

## 100. Explicabilidade operacional

A explicabilidade deverá ser proporcional ao impacto.

Para ação crítica, deverá ser possível reconhecer:

- entrada;
- regra ou inferência;
- evidência;
- decisão;
- autoridade;
- ação;
- resultado;
- limitação.

## 101. Rastreabilidade

Solicitação, autorização, execução, validação, falha, reversão e encerramento deverão permanecer correlacionáveis.

## 102. Identidade da automação

Cada automação deverá possuir identificador persistente.

## 103. Identidade da execução

Cada execução deverá possuir identificador único para correlacionar:

- eventos;
- logs;
- comandos;
- mensagens;
- agentes;
- sistemas;
- resultados;
- evidências.

## 104. Versão

A execução deverá registrar:

- versão do código;
- versão do workflow;
- versão do procedimento;
- configuração;
- modelo, quando aplicável;
- políticas utilizadas.

## 105. Estado anterior

Antes da alteração, deverá ser registrado ou verificável o estado relevante do alvo.

## 106. Estado posterior

Após a execução, deverá ser validado o estado resultante.

## 107. Resultado esperado

O resultado deverá ser definido antes da execução.

## 108. Sucesso

O sucesso não deverá ser declarado apenas porque a automação terminou sem erro interno.

Deverá existir validação do efeito pretendido.

## 109. Sucesso parcial

Resultados parciais deverão ser reconhecidos sem serem apresentados como conclusão integral.

## 110. Falha

A falha deverá produzir:

- estado conhecido;
- evidência;
- alerta;
- contenção;
- reversão ou compensação;
- escalonamento;
- aprendizagem.

## 111. Falha silenciosa

A automação deverá detectar, quando possível, situações em que:

- não houve erro técnico;
- o resultado não foi produzido;
- o alvo estava incorreto;
- os dados estavam incompletos;
- a ação foi ignorada;
- o efeito ocorreu parcialmente.

## 112. Erro conhecido

Erros conhecidos deverão possuir tratamento definido.

## 113. Erro desconhecido

Diante de erro desconhecido, a automação deverá preferir:

- interromper;
- preservar;
- alertar;
- limitar;
- escalar;
- registrar;

em vez de ampliar ações sem compreensão.

## 114. Incerteza

A automação deverá declarar incerteza quando não puder determinar:

- estado;
- causa;
- alvo;
- autoridade;
- impacto;
- resultado;
- confiabilidade dos dados.

## 115. Confiança

Quando utilizar inferência, a confiança deverá ser:

- contextual;
- calibrada;
- observável;
- relacionada a critérios;
- insuficiente, isoladamente, para autorizar ações de alto impacto.

## 116. Dados de entrada

Os dados deverão ser avaliados quanto a:

- origem;
- autenticidade;
- integridade;
- completude;
- atualidade;
- autorização;
- sensibilidade;
- contexto.

## 117. Entrada não confiável

Conteúdo externo não deverá modificar silenciosamente:

- propósito;
- regra;
- autoridade;
- escopo;
- ferramenta;
- prioridade;
- limite;
- evidência.

## 118. Dependências

A automação deverá reconhecer dependências de:

- rede;
- identidade;
- dados;
- ferramenta;
- sistema;
- fornecedor;
- região;
- pessoa;
- organização;
- política.

## 119. Dependência indisponível

Quando dependência necessária estiver indisponível, a automação deverá:

- pausar;
- utilizar alternativa autorizada;
- degradar;
- escalar;
- encerrar;
- preservar estado.

## 120. Dependência degradada

A automação não deverá tratar dependência degradada como plenamente confiável sem avaliação.

## 121. Conflito de automações

Automações poderão produzir ações incompatíveis.

O sistema deverá identificar conflitos de:

- alvo;
- estado;
- recurso;
- prioridade;
- autoridade;
- tempo;
- objetivo;
- configuração.

## 122. Coordenação

Automações relacionadas deverão utilizar:

- orquestração;
- bloqueio;
- fila;
- prioridade;
- contrato;
- evento;
- estado;
- reconciliação.

## 123. Concorrência

Execuções simultâneas deverão ser governadas para evitar:

- corrida;
- duplicidade;
- sobrescrita;
- saturação;
- inconsistência;
- conflito;
- deadlock.

## 124. Idempotência

A automação deverá ser idempotente quando possível.

A repetição com o mesmo identificador não deverá produzir efeito adicional indevido.

## 125. Chave de idempotência

Operações críticas poderão utilizar identificador para impedir:

- cobrança duplicada;
- mensagem duplicada;
- provisionamento repetido;
- execução múltipla;
- solicitação duplicada.

## 126. Retentativa

A retentativa deverá possuir:

- condição;
- limite;
- intervalo;
- backoff;
- tratamento de duplicidade;
- escalonamento;
- encerramento.

## 127. Timeout

Toda espera deverá possuir tempo limite coerente com:

- impacto;
- capacidade;
- dependência;
- alternativa;
- risco;
- possibilidade de duplicação.

## 128. Circuit breaker

A automação deverá interromper dependência persistentemente falha quando a continuidade de tentativas ampliar impacto.

## 129. Proteção contra oscilação

A automação deverá impedir alternância contínua entre estados, como:

- ligar e desligar;
- escalar e reduzir;
- ativar e desativar;
- fazer failover e failback;
- bloquear e liberar.

## 130. Histerese

Limites diferentes de entrada e saída poderão ser utilizados para reduzir oscilação.

## 131. Cooldown

Após ação, a automação poderá aguardar período suficiente para observar o efeito antes de executar nova ação.

## 132. Orçamento de erro da automação

A organização poderá definir limite aceitável de falhas, reversões ou intervenções antes de:

- reduzir autonomia;
- suspender;
- revisar;
- substituir;
- escalar.

## 133. Automação e modo degradado

A automação deverá reconhecer quando operar com capacidade reduzida.

Ela deverá indicar:

- funções preservadas;
- funções suspensas;
- limite;
- risco;
- duração;
- retorno;
- comunicação.

## 134. Automação e contingência

A automação poderá ativar contingência somente dentro de autoridade previamente definida.

## 135. Automação e continuidade

A automação deverá apoiar a continuidade sem criar dependência única que elimine capacidade manual ou alternativa necessária.

## 136. Automação e recuperação

A recuperação automática deverá permanecer integrada aos requisitos de:

- backup;
- restaurabilidade;
- segurança;
- validação;
- reconciliação;
- retorno.

## 137. Automação e segurança

A segurança deverá estar incorporada a:

- identidade;
- acesso;
- dados;
- código;
- execução;
- logs;
- dependências;
- interrupção;
- recuperação.

## 138. Automação e privacidade

A automação deverá respeitar:

- finalidade;
- necessidade;
- minimização;
- acesso;
- retenção;
- transparência;
- direitos;
- eliminação;
- segurança.

## 139. Automação e acessibilidade

Interfaces de automação deverão permitir que pessoas autorizadas consigam:

- compreender;
- acompanhar;
- aprovar;
- interromper;
- contestar;
- revisar;
- utilizar tecnologias assistivas.

## 140. Contestabilidade

Pessoas e organizações afetadas por decisão automatizada deverão possuir, quando aplicável:

- informação;
- explicação;
- canal;
- revisão humana;
- correção;
- recurso;
- registro.

## 141. Proporcionalidade

Quanto maior o impacto, maiores deverão ser:

- evidência;
- supervisão;
- segurança;
- aprovação;
- limitação;
- testabilidade;
- reversibilidade;
- prestação de contas.

## 142. Necessidade

Nenhuma automação deverá ser criada sem necessidade compreendida.

Automatizar processo desnecessário poderá tornar o desperdício mais rápido e mais difícil de perceber.

## 143. Processo inadequado

Antes de automatizar, a organização deverá avaliar se o processo deve ser:

- eliminado;
- simplificado;
- corrigido;
- reorganizado;
- padronizado;
- documentado;
- mantido humano.

## 144. Automação de erro

Um procedimento incorreto automatizado poderá ampliar:

- frequência;
- escala;
- velocidade;
- impacto;
- invisibilidade;
- dependência.

## 145. Automação de exceção

Exceções não deverão ser automatizadas como prática permanente sem revisão da regra principal.

## 146. Automação de privilégio

Privilégios elevados não deverão ser incorporados por conveniência.

A automação deverá obter apenas o acesso necessário e pelo tempo necessário.

## 147. Automação órfã

Uma automação será considerada órfã quando não possuir:

- proprietário;
- propósito;
- documento;
- versão;
- monitoramento;
- responsabilidade;
- caminho de suspensão.

Automações órfãs deverão ser bloqueadas ou regularizadas.

## 148. Automação invisível

Nenhuma automação crítica deverá operar sem inventário e observabilidade.

## 149. Shadow automation

Scripts, macros, integrações ou rotinas criadas fora da governança deverão ser identificados e avaliados.

## 150. Inventário de automações

O inventário deverá registrar:

- identificador;
- nome;
- propósito;
- proprietário;
- tipo;
- nível;
- gatilho;
- alvo;
- dados;
- ferramentas;
- autoridade;
- versão;
- estado;
- criticidade;
- evidências;
- documentos relacionados.

## 151. Catálogo de capacidades automatizadas

O catálogo deverá mostrar quais capacidades são:

- manuais;
- assistidas;
- supervisionadas;
- automatizadas;
- autônomas;
- alternativas;
- não comprovadas.

## 152. Relação com runbooks

Toda automação operacional relevante deverá estar vinculada a:

- runbook;
- procedimento;
- playbook;
- política;
- capacidade;
- controle equivalente.

## 153. Runbook automatizável

Um runbook poderá ser automatizado quando suas:

- entradas;
- condições;
- decisões;
- ações;
- resultados;
- falhas;
- reversões;
- evidências;

forem suficientemente compreendidas.

## 154. Runbook parcialmente automatizável

Partes determinísticas poderão ser automatizadas, preservando decisões humanas onde forem necessárias.

## 155. Procedimento não automatizável

Uma atividade poderá permanecer humana quando depender de:

- cuidado;
- empatia;
- julgamento moral;
- interpretação jurídica complexa;
- negociação;
- contexto social;
- criatividade;
- autoridade humana;
- responsabilidade indelegável.

## 156. Não automatizar também é decisão arquitetural

A decisão de manter uma atividade humana deverá ser registrada quando relevante.

## 157. Tecnologia como meio

A automação deverá permanecer instrumento da missão.

Ela não deverá transformar eficiência em finalidade absoluta.

## 158. Vida e dignidade

Nenhuma automação deverá priorizar:

- velocidade;
- custo;
- volume;
- aparência de desempenho;

acima da proteção legítima à vida e à dignidade.

## 159. Antipadrão da automação por moda

A adoção não deverá ocorrer apenas porque:

- concorrentes utilizam;
- a tecnologia é nova;
- o fornecedor recomenda;
- o painel fica mais sofisticado;
- a IA está disponível.

## 160. Antipadrão da remoção humana total

Eliminar todos os caminhos humanos poderá criar incapacidade diante de:

- falha;
- exceção;
- contestação;
- indisponibilidade;
- erro de modelo;
- mudança de contexto;
- emergência;
- perda de fornecedor.

## 161. Antipadrão do reinício infinito

Reiniciar repetidamente sem compreender a condição poderá:

- ocultar falha;
- perder evidência;
- ampliar dano;
- gerar instabilidade;
- atrasar escalonamento.

## 162. Antipadrão do sucesso técnico

A execução técnica bem-sucedida não comprova que:

- a missão foi atendida;
- o impacto foi reduzido;
- a pessoa foi protegida;
- o resultado é legítimo;
- o estado está correto.

## 163. Antipadrão da confiança cega

Histórico de sucesso não autoriza ignorar:

- mudança;
- deriva;
- nova dependência;
- novo risco;
- alteração normativa;
- perda de observabilidade;
- comportamento incomum.

## 164. Antipadrão da caixa-preta soberana

Nenhum modelo ou fornecedor deverá tornar-se autoridade inalcançável, incapaz de:

- explicar;
- ser auditado;
- ser interrompido;
- ser substituído;
- prestar evidências;
- aceitar contestação.

## 165. Antipadrão da automação sem saída

Toda automação deverá possuir condição de:

- conclusão;
- pausa;
- cancelamento;
- falha;
- escalonamento;
- encerramento.

## 166. Princípios fundamentais do Lote 1

Permanecem como princípios:

- propósito antes da automação;
- compreensão antes da escala;
- autoridade antes da execução;
- segurança antes da velocidade;
- limite antes da autonomia;
- observabilidade antes da confiança;
- validação antes da conclusão;
- reversão antes da ampliação;
- responsabilidade antes da delegação;
- aprendizagem antes da repetição.

## 167. Invariantes do Lote 1

Permanecem como invariantes:

- automação não cria autoridade;
- delegação não elimina responsabilidade;
- recomendação não é decisão;
- inferência não é fato;
- confiança não é certeza;
- execução sem erro não comprova resultado;
- toda automação crítica possuirá proprietário;
- toda execução possuirá identidade;
- toda ação possuirá alvo e limite;
- toda retentativa possuirá condição de saída;
- toda automação crítica poderá ser interrompida;
- toda ação irreversível possuirá controle reforçado;
- toda autonomia poderá ser reduzida ou revogada;
- toda falha produzirá evidência;
- toda conclusão será validada;
- toda automação permanecerá subordinada à Engenharia Oficial;
- toda tecnologia será meio para servir à vida, às pessoas e às organizações.

## 168. Garantias esperadas

A aplicação destes fundamentos deverá garantir que:

- automações possuam propósito;
- autoridades sejam explícitas;
- responsabilidades permaneçam atribuídas;
- níveis de autonomia sejam reconhecidos;
- limites sejam estabelecidos;
- ações possam ser observadas;
- execuções possam ser interrompidas;
- estados possam ser revertidos ou compensados;
- resultados possam ser validados;
- pessoas possam contestar;
- organizações preservem autonomia;
- aprendizados retornem à arquitetura.

## 169. Resultado esperado do Lote 1

Ao final deste lote, a Plataforma UNO deverá reconhecer:

- o que é automação operacional;
- o que é auto-remediação;
- quais tipos de automação existem;
- quais níveis de autonomia podem ser utilizados;
- quais limites são obrigatórios;
- quando automatizar;
- quando não automatizar;
- como preservar responsabilidade;
- como proteger pessoas;
- como construir confiança proporcional.

## 170. Transição para o Lote 2

O próximo lote deverá transformar esses fundamentos em arquitetura operacional concreta.

Serão aprofundados:

- gatilhos;
- eventos;
- estados;
- workflows;
- filas;
- concorrência;
- idempotência;
- limites;
- aprovações;
- execução;
- observabilidade;
- interrupção;
- reversão;
- reconciliação;
- evidências.

---

# Lote 2 — Arquitetura, Gatilhos, Estados, Workflows e Controles de Execução

## 171. Finalidade da arquitetura de automação

A arquitetura deverá transformar intenção operacional em execução governada.

Ela deverá permitir compreender:

- o que inicia a automação;
- quais dados são utilizados;
- qual estado é reconhecido;
- quais decisões podem ser tomadas;
- quais ações podem ser executadas;
- quais limites se aplicam;
- como a execução é observada;
- como falhas são tratadas;
- como a automação termina;
- como o resultado é comprovado.

## 172. Componentes mínimos

Toda automação operacional deverá possuir, conforme sua complexidade:

- identidade;
- proprietário;
- propósito;
- escopo;
- gatilho;
- entradas;
- estado;
- regras;
- autoridade;
- ações;
- limites;
- validações;
- observabilidade;
- tratamento de falha;
- interrupção;
- reversão;
- evidências;
- encerramento.

## 173. Identificador persistente

Cada automação deverá possuir identificador único e persistente.

Mudanças de nome, tecnologia, equipe ou fornecedor não deverão apagar sua trajetória histórica.

## 174. Identificador de execução

Cada execução deverá possuir identificador próprio para correlacionar:

- gatilho;
- eventos;
- decisões;
- aprovações;
- comandos;
- logs;
- resultados;
- falhas;
- reversões;
- encerramento.

## 175. Metadados da automação

O inventário deverá registrar:

- nome;
- identificador;
- versão;
- estado;
- proprietário;
- criticidade;
- nível de autonomia;
- ambientes;
- organizações;
- dados;
- procedimentos;
- última validação;
- próxima revisão.

## 176. Estado do ciclo de vida

A automação poderá estar:

- em elaboração;
- em teste;
- aprovada;
- vigente;
- limitada;
- suspensa;
- em correção;
- substituída;
- revogada;
- arquivada.

## 177. Estado operacional da automação

Durante a operação, a automação poderá estar:

- inativa;
- aguardando;
- observando;
- acionada;
- qualificando;
- aguardando autorização;
- executando;
- pausada;
- bloqueada;
- validando;
- revertendo;
- concluída;
- falha;
- cancelada.

## 178. Separação de estados

O estado do ciclo de vida não deverá ser confundido com o estado de uma execução individual.

Uma automação vigente poderá possuir execução falha.

Uma automação suspensa não deverá iniciar novas execuções.

## 179. Gatilho

O gatilho é a condição que inicia, prepara ou solicita determinada automação.

Ele deverá ser reconhecível, autorizado e rastreável.

## 180. Tipos de gatilho

Poderão ser gatilhos:

- evento;
- horário;
- solicitação;
- limiar;
- mudança de estado;
- falha;
- conclusão de procedimento;
- decisão;
- obrigação;
- previsão;
- combinação de condições.

## 181. Gatilho explícito

O gatilho explícito ocorre por ação identificável de pessoa, organização, sistema ou agente.

## 182. Gatilho implícito

Gatilhos implícitos derivados de contexto deverão ser evitados quando não puderem ser claramente explicados e validados.

## 183. Gatilho composto

A automação poderá exigir combinação de:

- evento;
- estado;
- tempo;
- autoridade;
- impacto;
- ausência de bloqueio;
- disponibilidade;
- confiança.

## 184. Autenticidade do gatilho

Antes de executar, a automação deverá verificar, conforme necessário:

- origem;
- identidade;
- assinatura;
- integridade;
- canal;
- autorização;
- temporalidade;
- duplicidade.

## 185. Gatilho duplicado

Eventos duplicados não deverão produzir múltiplos efeitos indevidos.

A arquitetura deverá utilizar:

- identificador;
- deduplicação;
- idempotência;
- janela temporal;
- registro;
- reconciliação.

## 186. Gatilho atrasado

Um evento recebido fora do tempo esperado deverá ser avaliado quanto a:

- relevância;
- estado atual;
- risco;
- efeito já produzido;
- possibilidade de descarte;
- reprocessamento;
- escalonamento.

## 187. Gatilho fora de ordem

Eventos fora de ordem deverão ser tratados por:

- sequência;
- timestamp;
- versão;
- estado;
- dependência;
- reconciliação;
- espera controlada.

## 188. Gatilho falso

A automação deverá possuir proteção contra sinais que:

- não correspondem à realidade;
- resultam de erro de sensor;
- foram forjados;
- estão desatualizados;
- perderam contexto;
- foram mal interpretados.

## 189. Ausência de gatilho

Falha em receber evento esperado deverá produzir, conforme o risco:

- alerta;
- consulta;
- reconciliação;
- fallback;
- acionamento alternativo;
- escalonamento.

## 190. Evento

Todo evento operacional deverá possuir:

- tipo;
- origem;
- produtor;
- horário;
- identificador;
- versão;
- contexto;
- carga;
- classificação;
- correlação.

## 191. Contrato de evento

O contrato deverá definir:

- campos;
- tipos;
- obrigatoriedade;
- formato;
- significado;
- versão;
- compatibilidade;
- segurança;
- retenção.

## 192. Evolução de eventos

Mudanças no contrato deverão preservar compatibilidade ou possuir plano de migração.

## 193. Evento sensível

Eventos que contenham dados sensíveis deverão observar:

- minimização;
- criptografia;
- acesso;
- retenção;
- mascaramento;
- finalidade;
- auditoria.

## 194. Evento de alta criticidade

Eventos capazes de acionar ações de alto impacto deverão possuir confirmação reforçada.

## 195. Correlação de eventos

Múltiplos eventos poderão ser correlacionados para formar compreensão contextual.

A correlação deverá registrar:

- fontes;
- janela;
- regras;
- confiança;
- eventos ausentes;
- conclusão;
- limitação.

## 196. Janela de correlação

A janela deverá considerar:

- latência;
- atraso;
- volume;
- ordem;
- frequência;
- risco;
- contexto.

## 197. Entrada

Toda entrada deverá possuir definição de:

- origem;
- formato;
- validação;
- obrigatoriedade;
- sensibilidade;
- validade;
- ausência;
- erro.

## 198. Validação de esquema

A automação deverá rejeitar, isolar ou encaminhar entradas que não correspondam ao esquema esperado.

## 199. Validação semântica

A entrada poderá estar tecnicamente bem formada e ainda ser semanticamente inválida.

Deverão ser avaliados:

- significado;
- domínio;
- relação;
- faixa;
- consistência;
- contexto;
- autoridade.

## 200. Dados ausentes

A automação deverá definir se, diante de dado ausente:

- interrompe;
- solicita complemento;
- utiliza valor seguro;
- limita a ação;
- escala;
- registra incerteza.

## 201. Valor padrão

Valores padrão não deverão ampliar impacto ou autoridade.

Eles deverão ser seguros, explícitos e documentados.

## 202. Dados contraditórios

A divergência entre fontes deverá ser tratada segundo:

- autoridade;
- proveniência;
- integridade;
- atualidade;
- contexto;
- confiança;
- possibilidade de escalonamento.

## 203. Dados obsoletos

Toda entrada relevante deverá possuir limite de idade ou condição de validade.

## 204. Enriquecimento de contexto

A automação poderá consultar:

- inventário;
- configuração;
- dependências;
- capacidade;
- histórico;
- estado;
- políticas;
- identidade;
- riscos;
- procedimentos.

## 205. Falha no enriquecimento

A ausência de contexto necessário deverá impedir decisões que dependam dele.

## 206. Fonte de verdade

A arquitetura deverá indicar qual fonte possui autoridade para cada tipo de informação.

## 207. Conflito entre fontes de verdade

Quando fontes oficiais divergirem, a automação deverá:

- interromper ou limitar;
- registrar;
- preservar os estados;
- solicitar resolução;
- evitar sobrescrita;
- escalar.

## 208. Estado observado

Estado observado é a representação do que a automação entende estar ocorrendo.

Ele deverá indicar:

- fonte;
- horário;
- confiança;
- completude;
- limitações;
- versão.

## 209. Estado desejado

Estado desejado é a condição legitimamente definida pela política, configuração ou decisão autorizada.

## 210. Diferença de estado

A diferença entre estado observado e desejado deverá ser classificada quanto a:

- gravidade;
- impacto;
- urgência;
- risco;
- duração;
- extensão;
- possibilidade de correção.

## 211. Deriva

Deriva é a alteração não planejada ou não reconhecida entre o estado aprovado e o estado real.

## 212. Deriva legítima

Uma diferença poderá decorrer de mudança autorizada ainda não incorporada à fonte de verdade.

A automação não deverá corrigi-la cegamente sem verificar:

- mudança;
- autoridade;
- janela;
- versão;
- responsável.

## 213. Deriva ilegítima

Diferença sem fundamento reconhecido deverá produzir:

- alerta;
- contenção;
- correção autorizada;
- investigação;
- evidência;
- escalonamento.

## 214. Máquina de estados

A automação deverá possuir estados e transições definidos.

Cada transição deverá indicar:

- origem;
- evento;
- condição;
- autoridade;
- ação;
- destino;
- evidência;
- falha.

## 215. Transição inválida

Tentativas de transição não permitida deverão ser:

- bloqueadas;
- registradas;
- alertadas;
- investigadas, conforme risco.

## 216. Estado desconhecido

Quando a automação não conseguir determinar o estado, deverá adotar comportamento seguro.

Ela não deverá presumir normalidade.

## 217. Estado terminal

Estados terminais poderão incluir:

- concluído;
- cancelado;
- falho;
- revertido;
- encerrado parcialmente.

## 218. Estado não terminal abandonado

Execuções que permanecem indefinidamente em:

- aguardando;
- executando;
- pausado;
- bloqueado;
- validando;

deverão ser detectadas.

## 219. Heartbeat

Execuções longas deverão emitir sinal de atividade e progresso.

## 220. Execução órfã

Uma execução sem proprietário, supervisor ou mecanismo ativo deverá ser:

- identificada;
- pausada;
- reassumida;
- encerrada;
- investigada.

## 221. Workflow

O workflow deverá coordenar:

- gatilho;
- tarefas;
- decisões;
- aprovações;
- estados;
- prazos;
- participantes;
- evidências;
- encerramento.

## 222. Workflow determinístico

O caminho deverá ser previsível para condições equivalentes.

## 223. Workflow adaptativo

O caminho poderá mudar conforme contexto, desde que a adaptação permaneça dentro de regras e limites governados.

## 224. Workflow humano

O workflow poderá coordenar tarefas humanas sem executar diretamente as ações.

## 225. Workflow híbrido

O fluxo poderá combinar:

- tarefas humanas;
- automações;
- agentes;
- fornecedores;
- organizações;
- sistemas externos.

## 226. Workflow federado

O fluxo entre organizações deverá preservar:

- autonomia;
- consentimento;
- autoridade;
- fronteiras;
- responsabilidade;
- evidências;
- possibilidade de recusa.

## 227. Tarefa

Cada tarefa deverá possuir:

- identificador;
- objetivo;
- responsável;
- entrada;
- saída;
- prazo;
- autoridade;
- estado;
- evidência;
- escalonamento.

## 228. Tarefa automática

A tarefa automática deverá indicar:

- executor técnico;
- versão;
- permissão;
- limite;
- resultado esperado;
- falha;
- reversão.

## 229. Tarefa humana

A tarefa humana deverá indicar:

- papel;
- contexto;
- decisão necessária;
- prazo;
- autoridade;
- confirmação;
- evidência.

## 230. Tarefa externa

A tarefa atribuída a fornecedor ou parceiro deverá possuir:

- protocolo;
- compromisso;
- responsável;
- prazo;
- acesso;
- resultado;
- evidência;
- escalonamento.

## 231. Delegação

A delegação deverá transferir capacidade específica, não responsabilidade ilimitada.

## 232. Retorno da tarefa

O executor deverá retornar:

- resultado;
- estado;
- evidência;
- limitação;
- desvio;
- risco;
- pendência.

## 233. Aprovação

Pontos de aprovação deverão possuir:

- objeto;
- contexto;
- risco;
- impacto;
- solicitante;
- aprovador;
- validade;
- decisão;
- evidência.

## 234. Aprovação automática

A aprovação somente poderá ser automatizada quando:

- os critérios forem objetivos;
- a autoridade tiver sido previamente delegada;
- o impacto estiver limitado;
- a evidência for suficiente;
- houver auditoria;
- existir revogação.

## 235. Aprovação humana

A pessoa deverá receber contexto suficiente para realizar decisão significativa.

## 236. Aprovação em lote

Aprovações em lote deverão revelar:

- quantidade;
- alvos;
- diferenças;
- impacto agregado;
- exceções;
- risco máximo;
- possibilidade de exclusão de itens.

## 237. Expiração da aprovação

A aprovação deverá expirar quando:

- o tempo terminar;
- o estado mudar;
- o alvo mudar;
- a versão mudar;
- o risco aumentar;
- a execução for cancelada.

## 238. Revogação da aprovação

A autoridade deverá poder revogar aprovação antes da execução ou durante etapa ainda reversível.

## 239. Fila

Filas deverão desacoplar produção e consumo de tarefas ou eventos.

Elas deverão possuir:

- capacidade;
- retenção;
- prioridade;
- ordem;
- repetição;
- visibilidade;
- tratamento de falha;
- descarte;
- recuperação.

## 240. Ordem da fila

A ordem poderá ser:

- temporal;
- prioritária;
- por dependência;
- por criticidade;
- por organização;
- por prazo;
- por valor público.

## 241. Prioridade da fila

A prioridade deverá permanecer explicável e governada.

## 242. Inanição

Tarefas de baixa prioridade não deverão permanecer indefinidamente sem tratamento.

## 243. Envelhecimento de prioridade

A prioridade poderá aumentar conforme:

- tempo;
- impacto acumulado;
- prazo;
- risco;
- ausência de alternativa.

## 244. Capacidade da fila

O sistema deverá conhecer:

- volume atual;
- taxa de entrada;
- taxa de saída;
- idade;
- limite;
- previsão de saturação;
- tempo de recuperação.

## 245. Saturação

Quando a fila se aproximar do limite, poderão ser adotados:

- controle de entrada;
- escalonamento;
- aumento de capacidade;
- priorização;
- degradação;
- rejeição controlada;
- comunicação.

## 246. Rejeição controlada

A rejeição deverá indicar:

- motivo;
- impacto;
- alternativa;
- possibilidade de nova tentativa;
- registro;
- comunicação.

## 247. Dead-letter queue

Eventos ou tarefas não processáveis poderão ser isolados para:

- análise;
- correção;
- reprocessamento;
- evidência;
- prevenção de bloqueio.

## 248. Reprocessamento

O reprocessamento deverá considerar:

- causa;
- correção;
- idempotência;
- ordem;
- efeito externo;
- limite;
- autorização;
- evidência.

## 249. Concorrência

A arquitetura deverá definir quantas execuções podem ocorrer simultaneamente por:

- alvo;
- recurso;
- organização;
- ambiente;
- capacidade;
- tipo;
- prioridade.

## 250. Exclusão mútua

Ações incompatíveis deverão utilizar bloqueio ou mecanismo equivalente.

## 251. Bloqueio

O bloqueio deverá registrar:

- alvo;
- proprietário;
- motivo;
- início;
- validade;
- renovação;
- liberação;
- tratamento de abandono.

## 252. Lock distribuído

Bloqueios distribuídos deverão considerar:

- falha de rede;
- relógio;
- partição;
- expiração;
- duplicidade;
- proprietário perdido;
- consistência.

## 253. Deadlock

A automação deverá detectar ou evitar ciclos de espera entre recursos.

## 254. Condição de corrida

Ações concorrentes deverão verificar se o estado mudou entre leitura, decisão e escrita.

## 255. Controle otimista

A execução poderá utilizar versão do estado para impedir sobrescrita silenciosa.

## 256. Controle pessimista

A execução poderá reservar o recurso antes de alterá-lo quando o risco justificar.

## 257. Transação

Ações relacionadas deverão utilizar transação quando necessário para preservar consistência.

## 258. Transação distribuída

Quando não houver transação única, deverão existir:

- idempotência;
- compensação;
- confirmação;
- eventos;
- reconciliação;
- evidências.

## 259. Saga operacional

Uma saga poderá coordenar etapas distribuídas e suas compensações.

Ela deverá definir:

- sequência;
- estado;
- resultado;
- compensação;
- falha;
- retomada;
- encerramento.

## 260. Idempotência

Toda ação repetível deverá indicar se é idempotente.

## 261. Escopo da idempotência

A chave poderá ser definida por:

- solicitação;
- usuário;
- organização;
- recurso;
- período;
- operação;
- transação.

## 262. Validade da chave

A retenção da chave deverá ser compatível com o período em que a duplicidade ainda produziria impacto.

## 263. Retentativa segura

Antes de repetir, deverão ser avaliados:

- estado anterior;
- resultado parcial;
- efeito externo;
- idempotência;
- causa da falha;
- capacidade;
- limite.

## 264. Política de retentativa

A política deverá definir:

- erros elegíveis;
- quantidade;
- intervalo;
- backoff;
- jitter;
- limite temporal;
- escalonamento;
- encerramento.

## 265. Erro não elegível

Erros de:

- autorização;
- validação;
- alvo;
- política;
- dado inválido;
- segurança;

não deverão ser repetidos sem correção.

## 266. Backoff

O intervalo crescente deverá reduzir pressão sobre dependências falhas.

## 267. Jitter

Variação controlada poderá impedir que múltiplas automações repitam simultaneamente.

## 268. Timeout

O timeout deverá considerar:

- operação;
- dependência;
- impacto;
- tempo esperado;
- carga;
- alternativa;
- duplicidade;
- cancelamento.

## 269. Timeout não é cancelamento confirmado

A expiração da espera não comprova que a ação externa deixou de ocorrer.

Antes de repetir, deverá ser consultado o estado ou utilizado identificador idempotente.

## 270. Circuit breaker

O circuito deverá possuir estados como:

- fechado;
- aberto;
- semiaberto.

## 271. Abertura do circuito

Deverá ocorrer conforme:

- falhas;
- taxa;
- janela;
- latência;
- impacto;
- erro;
- confiança.

## 272. Teste de recuperação

No estado semiaberto, a automação deverá limitar solicitações para verificar se a dependência se recuperou.

## 273. Isolamento de capacidade

Recursos poderão ser separados por:

- serviço;
- organização;
- prioridade;
- região;
- função;
- criticidade.

Isso deverá impedir que uma carga consuma toda a capacidade compartilhada.

## 274. Bulkhead

O isolamento de falhas deverá limitar propagação entre capacidades.

## 275. Rate limit

Limites de taxa deverão proteger:

- sistema;
- fornecedor;
- usuário;
- organização;
- custo;
- estabilidade;
- equidade.

## 276. Quota

Cotas poderão reservar ou limitar consumo por:

- organização;
- missão;
- usuário;
- serviço;
- período;
- prioridade.

## 277. Prioridade extraordinária

A prioridade extraordinária deverá possuir:

- fundamento;
- autoridade;
- duração;
- escopo;
- monitoramento;
- encerramento;
- revisão.

## 278. Oscilação

A arquitetura deverá detectar alternância repetida entre estados ou ações opostas.

## 279. Histerese

A entrada e a saída de um estado poderão utilizar limiares diferentes.

## 280. Cooldown

Após ação, deverá existir período de observação quando necessário para impedir nova intervenção prematura.

## 281. Limite de ações por período

A automação deverá possuir orçamento máximo de ações para impedir repetição destrutiva ou dispendiosa.

## 282. Limite de falhas

Após quantidade ou gravidade definida de falhas, a automação deverá:

- reduzir autonomia;
- suspender;
- escalar;
- entrar em modo seguro;
- solicitar investigação.

## 283. Orçamento financeiro

A execução deverá prever:

- custo estimado;
- limite;
- acumulado;
- alerta;
- bloqueio;
- aprovação;
- reconciliação.

## 284. Orçamento de risco

A automação não deverá acumular múltiplas ações de risco sem reavaliação.

## 285. Plano de execução

Antes de ação relevante, a automação poderá produzir plano contendo:

- objetivo;
- alvos;
- mudanças;
- dependências;
- riscos;
- tempo;
- custo;
- validação;
- reversão.

## 286. Dry run

O modo de simulação deverá apresentar o que seria alterado sem produzir o efeito real.

## 287. Limites do dry run

O dry run poderá não reproduzir:

- concorrência;
- latência;
- permissões reais;
- efeitos externos;
- volume;
- comportamento humano;
- falha de fornecedor.

## 288. Diff

A automação deverá mostrar, quando possível, a diferença entre:

- estado atual;
- estado desejado;
- alteração proposta;
- estado esperado.

## 289. Confirmação de alvo

Antes da execução, deverão ser confirmados:

- identificador;
- ambiente;
- organização;
- região;
- recurso;
- versão;
- estado;
- criticidade.

## 290. Seleção segura

Interfaces deverão evitar seleção acidental de:

- todos os recursos;
- ambiente inteiro;
- múltiplas organizações;
- produção;
- território amplo;
- usuários não pretendidos.

## 291. Execução em lotes

A ação poderá ser dividida para reduzir impacto.

Cada lote deverá possuir:

- escopo;
- tamanho;
- ordem;
- validação;
- intervalo;
- condição de avanço;
- reversão.

## 292. Canary

A execução inicial poderá ocorrer sobre amostra representativa e limitada.

## 293. Critérios do canary

Deverão ser definidos:

- alvos;
- duração;
- métricas;
- erros;
- limite;
- sucesso;
- falha;
- reversão;
- decisão de ampliar.

## 294. Expansão progressiva

A expansão poderá ocorrer por:

- percentual;
- organização;
- região;
- ambiente;
- capacidade;
- horário;
- nível de risco.

## 295. Parada da expansão

A ampliação deverá parar quando houver:

- falha;
- impacto;
- degradação;
- métrica adversa;
- incerteza;
- perda de observabilidade;
- solicitação de autoridade.

## 296. Feature flag

A ativação deverá possuir:

- proprietário;
- escopo;
- estado;
- validade;
- acesso;
- logs;
- plano de remoção;
- reversão.

## 297. Shadow mode

A automação poderá observar e recomendar sem alterar o estado.

## 298. Comparação em shadow mode

Deverão ser comparados:

- decisão da automação;
- decisão humana;
- resultado real;
- falso positivo;
- falso negativo;
- confiança;
- impacto potencial.

## 299. Preparação da execução

A automação deverá confirmar:

- vigência;
- versão;
- autorização;
- alvo;
- estado;
- dependências;
- limites;
- observabilidade;
- reversão;
- comunicação.

## 300. Execução

Durante a execução, deverão ser registrados:

- início;
- etapas;
- comandos;
- decisões;
- resultados;
- recursos;
- falhas;
- mudanças;
- intervenções;
- tempo.

## 301. Checkpoint

Execuções longas deverão preservar estado suficiente para:

- retomar;
- transferir;
- reverter;
- auditar;
- evitar duplicidade.

## 302. Pausa automática

A automação deverá pausar diante de:

- perda de dependência;
- alteração de contexto;
- risco;
- limite;
- conflito;
- ausência de aprovação;
- comportamento inesperado.

## 303. Intervenção humana

A pessoa autorizada deverá poder:

- pausar;
- alterar prioridade;
- reduzir escopo;
- cancelar;
- reverter;
- escalar;
- assumir manualmente.

## 304. Assunção manual

A passagem para execução humana deverá preservar:

- contexto;
- estado;
- decisões;
- evidências;
- acessos;
- bloqueios;
- próxima ação;
- responsabilidade.

## 305. Devolução à automação

Antes de devolver, deverão ser confirmados:

- estado;
- correções;
- autoridade;
- versão;
- contexto;
- riscos;
- condição de retomada.

## 306. Validação intermediária

A automação deverá verificar resultados antes de avançar entre fases críticas.

## 307. Validação final

A conclusão deverá avaliar:

- estado;
- função;
- desempenho;
- segurança;
- impacto;
- integridade;
- dependências;
- evidências.

## 308. Validação independente

A validação poderá ser realizada por componente diferente daquele que executou a ação.

## 309. Falha de validação

Quando a execução terminar, mas a validação falhar, o estado deverá ser:

- falho;
- inconclusivo;
- parcialmente concluído;
- em reversão;
- aguardando análise;

e nunca automaticamente “bem-sucedido”.

## 310. Reversão automática

A reversão poderá ocorrer quando:

- o gatilho for conhecido;
- o estado anterior estiver preservado;
- o risco for aceitável;
- o caminho estiver comprovado;
- a autoridade tiver sido delegada.

## 311. Reversão supervisionada

Ações de maior impacto deverão exigir confirmação ou acompanhamento.

## 312. Falha da reversão

A falha deverá produzir:

- contenção;
- preservação;
- alerta crítico;
- escalonamento;
- recuperação alternativa;
- evidência;
- investigação.

## 313. Compensação distribuída

Em sistemas distribuídos, a compensação deverá reconhecer que o efeito externo poderá não ser apagado.

## 314. Reconciliação

Após execução, falha ou reversão, deverão ser reconciliados:

- dados;
- eventos;
- filas;
- pagamentos;
- mensagens;
- configurações;
- estados;
- efeitos externos;
- evidências.

## 315. Encerramento

A execução somente deverá ser encerrada quando:

- estado estiver conhecido;
- resultado for validado;
- bloqueios forem liberados;
- acessos temporários forem tratados;
- comunicações ocorrerem;
- pendências possuírem responsáveis;
- evidências forem preservadas.

## 316. Resultado parcial

A automação deverá registrar separadamente:

- ações concluídas;
- ações não executadas;
- ações falhas;
- ações revertidas;
- riscos;
- pendências;
- capacidade disponível.

## 317. Cancelamento

O cancelamento deverá produzir estado terminal reconhecível e impedir novas ações relacionadas à execução cancelada.

## 318. Observabilidade técnica

Deverá incluir, conforme necessário:

- logs;
- métricas;
- traces;
- eventos;
- estados;
- filas;
- recursos;
- dependências;
- custos.

## 319. Observabilidade funcional

Deverá indicar se a missão ou função foi efetivamente atendida.

## 320. Observabilidade institucional

Deverá permitir reconhecer:

- autoridade;
- responsabilidade;
- organização;
- política;
- procedimento;
- decisão;
- aprovação;
- exceção;
- encerramento.

## 321. Logs estruturados

Os logs deverão utilizar campos comuns para permitir:

- busca;
- correlação;
- alerta;
- auditoria;
- análise;
- aprendizagem.

## 322. Proteção dos logs

Os logs não deverão expor:

- segredos;
- dados pessoais excessivos;
- informações protegidas;
- conteúdo de autenticação;
- vulnerabilidades desnecessárias.

## 323. Métricas

Poderão incluir:

- execuções;
- duração;
- sucesso;
- falha;
- reversão;
- retentativa;
- intervenção;
- custo;
- impacto;
- capacidade.

## 324. Trace distribuído

A correlação deverá atravessar:

- serviços;
- agentes;
- filas;
- fornecedores;
- organizações;
- workflows;
- ações humanas;
- resultados.

## 325. Painel de automação

O painel deverá apresentar:

- estado;
- versão;
- proprietário;
- execuções;
- autonomia;
- alvos;
- limites;
- falhas;
- custos;
- intervenções;
- próxima revisão.

## 326. Alertas acionáveis

Todo alerta deverá informar:

- condição;
- impacto;
- contexto;
- responsável;
- ação;
- prazo;
- escalonamento;
- forma de encerramento.

## 327. Alerta da própria automação

A automação deverá possuir monitoramento independente suficiente para detectar quando ela própria:

- parou;
- atrasou;
- perdeu eventos;
- acumulou fila;
- ultrapassou limite;
- produziu erro;
- perdeu observabilidade.

## 328. Supervisão externa

Automações críticas não deverão depender exclusivamente de seus próprios registros para declarar saúde.

## 329. Evidência

A execução deverá produzir evidências de:

- gatilho;
- autoridade;
- versão;
- alvo;
- decisões;
- ações;
- resultados;
- falhas;
- reversão;
- encerramento.

## 330. Evidência negativa

A organização deverá preservar:

- falha;
- bloqueio;
- recusa;
- intervenção;
- incerteza;
- resultado parcial;
- reversão;
- cancelamento.

## 331. Antipadrões arquiteturais

Constituem antipadrões:

- gatilho não autenticado;
- evento sem versão;
- estado desconhecido tratado como normal;
- workflow sem encerramento;
- fila sem limite;
- retentativa infinita;
- timeout tratado como cancelamento confirmado;
- bloqueio sem expiração;
- automação sem idempotência;
- canary sem critério;
- reversão não testada;
- logs sem correlação;
- automação monitorando apenas a si própria;
- resultado técnico confundido com resultado funcional.

## 332. Invariantes do Lote 2

Permanecem como invariantes:

- todo gatilho possuirá origem reconhecível;
- todo evento possuirá identidade e tempo;
- toda entrada crítica será validada;
- estado desconhecido não será presumido normal;
- toda transição possuirá condição;
- toda tarefa possuirá responsável;
- toda aprovação possuirá validade;
- toda fila possuirá limite;
- toda retentativa possuirá condição de saída;
- todo timeout exigirá tratamento de incerteza;
- toda execução concorrente será governada;
- toda ação repetível avaliará idempotência;
- toda ampliação será progressiva quando o risco exigir;
- toda execução crítica poderá ser pausada ou interrompida;
- toda conclusão possuirá validação;
- toda falha produzirá evidência;
- todo encerramento preservará estado e responsabilidade.

## 333. Garantias esperadas

A aplicação desta arquitetura deverá garantir que:

- gatilhos sejam legítimos;
- estados sejam reconhecíveis;
- workflows sejam governados;
- filas sejam controladas;
- execuções concorrentes não se destruam;
- retentativas não ampliem falhas;
- ações sejam limitadas;
- intervenções sejam possíveis;
- resultados sejam validados;
- falhas sejam contidas;
- estados sejam reconciliados;
- evidências sejam preservadas.

## 334. Resultado esperado do Lote 2

Ao final desta etapa, a Plataforma UNO deverá possuir arquitetura capaz de transformar eventos e solicitações em execuções:

- identificadas;
- autorizadas;
- limitadas;
- observáveis;
- interrompíveis;
- reversíveis ou compensáveis;
- validáveis;
- rastreáveis.

## 335. Transição para o Lote 3

O próximo lote deverá aprofundar a capacidade de auto-remediação.

Serão estabelecidos:

- detecção;
- qualificação;
- diagnóstico;
- contenção;
- seleção de correção;
- recuperação;
- validação;
- prevenção de ciclos;
- escalonamento;
- modos degradados;
- retorno;
- aprendizagem operacional.

---

# Lote 3 — Auto-Remediação, Recuperação Automática e Operação Adaptativa

## 336. Finalidade da auto-remediação

A auto-remediação deverá permitir que a Plataforma UNO reconheça condições indesejadas, limite seus efeitos, execute correções autorizadas e valide os resultados.

Ela deverá reduzir:

- tempo de percepção;
- tempo de resposta;
- duração da degradação;
- repetição de tarefas;
- exposição humana;
- impacto;
- propagação;
- dependência de intervenção imediata.

## 337. Auto-remediação como ciclo governado

A auto-remediação não deverá ser tratada como comando isolado.

Ela deverá integrar:

1. percepção;
2. qualificação;
3. compreensão;
4. decisão;
5. autorização;
6. contenção;
7. correção;
8. validação;
9. observação;
10. retorno;
11. encerramento;
12. aprendizagem.

## 338. Condição remediável

Uma condição será automaticamente remediável quando:

- puder ser reconhecida com confiança suficiente;
- possuir impacto compreendido;
- tiver ação autorizada;
- estiver dentro do escopo;
- possuir limite;
- puder ser validada;
- tiver caminho de falha;
- não exigir julgamento indelegável.

## 339. Condição não remediável automaticamente

A automação deverá escalar quando a condição envolver:

- risco à vida;
- conflito de direitos;
- interpretação jurídica complexa;
- autoridade extraordinária;
- causa desconhecida de alto impacto;
- alvo incerto;
- efeito irreversível;
- informação insuficiente;
- decisão moral ou institucional.

## 340. Biblioteca de remediações

A Plataforma UNO deverá manter catálogo de remediações contendo:

- condição;
- sinais;
- diagnóstico;
- ação;
- autoridade;
- limites;
- dependências;
- validação;
- reversão;
- escalonamento;
- evidências;
- histórico.

## 341. Identidade da remediação

Cada remediação deverá possuir identificador persistente e relação com:

- runbook;
- procedimento;
- automação;
- serviço;
- risco;
- incidente;
- evidência;
- versão.

## 342. Proprietário da remediação

O proprietário deverá responder por:

- finalidade;
- critérios;
- segurança;
- testes;
- eficácia;
- falhas;
- atualização;
- suspensão;
- evolução.

## 343. Estado da remediação

A remediação poderá estar:

- proposta;
- em teste;
- aprovada;
- vigente;
- limitada;
- suspensa;
- revogada;
- arquivada.

## 344. Remediação não comprovada

Remediação ainda não exercitada deverá ser identificada como:

**NÃO COMPROVADA**

Ela não deverá receber autonomia ampliada antes de produzir evidências suficientes.

## 345. Percepção

A percepção deverá coletar sinais sobre:

- disponibilidade;
- desempenho;
- capacidade;
- integridade;
- segurança;
- configuração;
- dependências;
- usuários;
- processos;
- ambiente;
- eventos;
- comportamento.

## 346. Fontes de percepção

Poderão incluir:

- métricas;
- logs;
- traces;
- eventos;
- sensores;
- verificações;
- usuários;
- operadores;
- fornecedores;
- agentes;
- organizações;
- dados externos autorizados.

## 347. Diversidade de sinais

Condições críticas não deverão depender, quando evitável, de um único sinal.

A correlação poderá combinar:

- sintoma;
- estado;
- impacto;
- tempo;
- dependência;
- histórico;
- validação externa.

## 348. Qualidade do sinal

O sinal deverá ser avaliado quanto a:

- origem;
- precisão;
- atualidade;
- completude;
- ruído;
- autenticidade;
- estabilidade;
- contexto;
- confiança.

## 349. Sinal ausente

A ausência de sinal esperado poderá representar:

- normalidade;
- falha de monitoramento;
- falha de comunicação;
- indisponibilidade;
- perda de observabilidade;
- mudança de configuração.

A automação não deverá presumir automaticamente uma dessas interpretações.

## 350. Sinal contraditório

Sinais divergentes deverão produzir:

- nova coleta;
- fonte independente;
- redução de confiança;
- limitação de ação;
- escalonamento;
- registro.

## 351. Sinal atrasado

Sinais antigos deverão ser avaliados antes de acionar remediação sobre estado atual.

## 352. Perda de observabilidade

Quando a Plataforma UNO não conseguir perceber adequadamente o estado, deverá:

- declarar visibilidade reduzida;
- limitar automações;
- aumentar supervisão;
- utilizar fontes alternativas;
- escalar;
- evitar ações irreversíveis.

## 353. Detecção

A detecção reconhece que determinada condição pode estar presente.

Ela não constitui, isoladamente, diagnóstico definitivo.

## 354. Detecção por limiar

O limiar deverá possuir:

- métrica;
- unidade;
- fonte;
- duração;
- tolerância;
- contexto;
- condição de entrada;
- condição de saída;
- revisão.

## 355. Detecção por padrão

A detecção poderá reconhecer:

- sequência;
- tendência;
- combinação;
- desvio;
- comportamento;
- recorrência.

## 356. Detecção probabilística

Quando baseada em modelo, deverá indicar:

- confiança;
- dados;
- versão;
- falso positivo;
- falso negativo;
- limitação;
- necessidade de confirmação.

## 357. Detecção contextual

A mesma métrica poderá representar condições diferentes conforme:

- horário;
- missão;
- população;
- organização;
- território;
- campanha;
- incidente;
- manutenção;
- operação degradada.

## 358. Redução de ruído

A arquitetura deverá reduzir alertas redundantes por:

- deduplicação;
- agrupamento;
- correlação;
- supressão governada;
- janela;
- hierarquia;
- causa comum.

## 359. Supressão de alerta

A supressão deverá possuir:

- motivo;
- escopo;
- duração;
- autoridade;
- riscos;
- registro;
- condição de encerramento.

## 360. Proibição de supressão silenciosa

Nenhum alerta crítico deverá ser ocultado sem registro e autoridade.

## 361. Qualificação

A qualificação deverá determinar:

- autenticidade;
- severidade;
- extensão;
- urgência;
- impacto;
- dependências;
- remediabilidade;
- autoridade necessária.

## 362. Severidade

A severidade poderá considerar:

- função afetada;
- pessoas;
- duração;
- abrangência;
- irreversibilidade;
- segurança;
- legalidade;
- continuidade;
- capacidade.

## 363. Prioridade

A prioridade deverá considerar severidade e contexto, incluindo:

- propósito;
- urgência;
- risco;
- dependências;
- alternativas;
- recursos;
- impacto acumulado.

## 364. Impacto potencial

A automação deverá considerar não apenas o impacto atual, mas também:

- propagação;
- crescimento;
- cascata;
- esgotamento;
- fila;
- risco futuro;
- pessoas adicionais;
- organizações relacionadas.

## 365. Diagnóstico

O diagnóstico deverá buscar compreender:

- condição;
- causa provável;
- componentes;
- dependências;
- extensão;
- histórico;
- mudança recente;
- possibilidade de remediação;
- riscos da ação.

## 366. Diagnóstico não é certeza

A automação deverá distinguir:

- hipótese;
- causa provável;
- causa confirmada;
- correlação;
- evidência;
- incerteza.

## 367. Hipóteses concorrentes

Condições críticas deverão considerar causas alternativas quando uma ação incorreta puder ampliar o dano.

## 368. Evidências do diagnóstico

O diagnóstico deverá relacionar:

- sinais;
- fontes;
- horários;
- comparações;
- mudanças;
- dependências;
- confiança;
- limitações.

## 369. Diagnóstico por runbook

O runbook deverá orientar:

- verificações;
- perguntas;
- fontes;
- decisões;
- limites;
- escalonamento;
- remediações autorizadas.

## 370. Diagnóstico assistido por IA

A IA poderá correlacionar sinais e recomendar hipóteses.

Ela deverá indicar:

- fontes utilizadas;
- confiança;
- incerteza;
- alternativas;
- dados ausentes;
- necessidade de confirmação.

## 371. Erro de diagnóstico

A arquitetura deverá considerar que uma remediação correta para diagnóstico errado poderá produzir novo incidente.

## 372. Diagnóstico insuficiente

Quando não houver compreensão suficiente, a automação deverá preferir:

- conter;
- preservar;
- observar;
- escalar;
- solicitar especialista;
- operar degradada;

em vez de executar correção destrutiva.

## 373. Contenção

A contenção deverá limitar o dano enquanto o diagnóstico ou a correção são realizados.

## 374. Contenção automática

Poderá incluir:

- isolamento;
- bloqueio;
- redução;
- suspensão;
- revogação;
- desvio;
- limitação de taxa;
- quarentena;
- desativação de integração.

## 375. Contenção proporcional

A contenção não deverá causar impacto maior do que o risco que busca controlar, salvo proteção necessária à vida, à segurança ou à integridade institucional.

## 376. Contenção temporária

Toda contenção deverá possuir:

- início;
- autoridade;
- escopo;
- duração;
- revisão;
- condição de retirada;
- evidência.

## 377. Quarentena

Recursos suspeitos poderão ser isolados sem eliminação imediata.

A quarentena deverá preservar:

- evidências;
- identidade;
- estado;
- possibilidade de análise;
- controle de acesso;
- rastreabilidade.

## 378. Isolamento seletivo

Quando possível, a automação deverá isolar somente:

- recurso;
- usuário;
- organização;
- região;
- integração;
- processo;
- fluxo;

afetado, preservando capacidades legítimas restantes.

## 379. Bloqueio preventivo

O bloqueio preventivo deverá possuir limiar de confiança e impacto compatíveis com o direito ou serviço afetado.

## 380. Degradação controlada

A automação poderá reduzir capacidade para preservar funções essenciais.

Ela deverá declarar:

- funções mantidas;
- funções limitadas;
- usuários afetados;
- duração;
- risco;
- comunicação;
- retorno.

## 381. Seleção da remediação

A seleção deverá considerar:

- diagnóstico;
- impacto;
- autoridade;
- risco;
- reversibilidade;
- tempo;
- capacidade;
- histórico;
- dependências;
- evidências anteriores.

## 382. Remediação preferencial

Quando múltiplas ações forem adequadas, deverá ser priorizada aquela que:

- protege pessoas;
- possui menor impacto;
- é mais reversível;
- está mais comprovada;
- exige menos privilégio;
- preserva evidências;
- mantém maior capacidade legítima.

## 383. Remediação alternativa

A automação deverá conhecer alternativas quando:

- a ação principal falhar;
- o recurso estiver indisponível;
- o limite for atingido;
- a autoridade não existir;
- o contexto mudar;
- a dependência estiver degradada.

## 384. Remediação temporária

A ação temporária deverá indicar:

- condição;
- validade;
- risco residual;
- necessidade de correção definitiva;
- responsável;
- prazo;
- monitoramento.

## 385. Remediação definitiva

A correção definitiva deverá tratar causa suficientemente compreendida e possuir validação mais ampla.

## 386. Remediação manual

A automação poderá encaminhar tarefa humana com:

- contexto;
- sinais;
- hipótese;
- impacto;
- ações já realizadas;
- acesso;
- risco;
- recomendação;
- evidências.

## 387. Aprovação da remediação

A aprovação deverá ser proporcional a:

- impacto;
- irreversibilidade;
- pessoas afetadas;
- segurança;
- escopo;
- ambiente;
- custo;
- autonomia.

## 388. Execução da remediação

Durante a execução, deverão ser registrados:

- início;
- versão;
- alvo;
- ação;
- parâmetros;
- estado anterior;
- resultados intermediários;
- falhas;
- intervenções;
- estado posterior.

## 389. Limite de remediação

A automação deverá respeitar limites de:

- tentativas;
- tempo;
- alvos;
- custo;
- volume;
- organizações;
- regiões;
- privilégios;
- alterações;
- impacto.

## 390. Remediação por lotes

A ação poderá ser aplicada progressivamente para limitar o raio de impacto.

## 391. Remediação canário

A automação deverá validar pequeno conjunto representativo antes de ampliar.

## 392. Condição de ampliação

A ampliação somente deverá ocorrer quando:

- resultado for positivo;
- métricas permanecerem seguras;
- não houver efeito adverso;
- dependências estiverem estáveis;
- observabilidade estiver íntegra;
- a autoridade continuar válida.

## 393. Condição de parada

A remediação deverá parar diante de:

- falha;
- efeito inesperado;
- aumento de impacto;
- perda de observabilidade;
- mudança de alvo;
- conflito;
- limite;
- solicitação legítima.

## 394. Validação da remediação

A validação deverá confirmar:

- desaparecimento da condição;
- recuperação da função;
- integridade;
- estabilidade;
- segurança;
- desempenho;
- capacidade;
- ausência de efeito indevido.

## 395. Validação do sintoma

A redução do sintoma não comprova eliminação da causa.

## 396. Validação funcional

Deverá confirmar que a função voltou a cumprir seu propósito.

## 397. Validação técnica

Deverá confirmar:

- estado;
- configuração;
- disponibilidade;
- integridade;
- desempenho;
- segurança;
- dependências;
- observabilidade.

## 398. Validação institucional

Deverá confirmar:

- autoridade;
- responsabilidade;
- comunicação;
- evidência;
- conformidade;
- tratamento de pessoas afetadas.

## 399. Janela de observação

Após a correção, a automação deverá observar estabilidade por período proporcional ao risco.

## 400. Recorrência imediata

Se a condição retornar rapidamente, a automação não deverá repetir indefinidamente a mesma ação.

## 401. Recorrência histórica

A repetição de remediação deverá gerar análise de:

- causa;
- eficácia;
- arquitetura;
- capacidade;
- procedimento;
- mudança definitiva;
- risco acumulado.

## 402. Eficácia

A eficácia deverá ser medida pela capacidade de:

- corrigir;
- sustentar;
- reduzir impacto;
- evitar recorrência;
- preservar missão;
- não criar dano adicional.

## 403. Eficiência

A eficiência deverá considerar:

- tempo;
- recursos;
- custo;
- esforço;
- impacto;
- quantidade de intervenções;
- consumo de capacidade.

Eficiência não substituirá eficácia.

## 404. Falha da remediação

A falha deverá produzir:

- contenção;
- evidência;
- alerta;
- redução de autonomia;
- escalonamento;
- reversão;
- alternativa;
- investigação.

## 405. Remediação parcialmente bem-sucedida

O resultado deverá indicar:

- capacidade restaurada;
- sintomas restantes;
- riscos;
- limitações;
- dependências;
- pendências;
- próxima ação.

## 406. Reversão da remediação

A reversão deverá ocorrer quando a correção:

- aumentar impacto;
- produzir instabilidade;
- falhar na validação;
- violar limite;
- alterar alvo indevido;
- comprometer segurança;
- perder autoridade.

## 407. Falha da reversão

A falha deverá ser tratada como condição crítica, com escalonamento imediato e preservação do estado.

## 408. Compensação

Quando a remediação produzir efeito irreversível, deverá existir compensação proporcional quando possível.

## 409. Reconciliação

Após remediação, deverão ser reconciliados:

- eventos;
- filas;
- transações;
- configurações;
- dados;
- mensagens;
- pagamentos;
- efeitos externos;
- registros.

## 410. Encerramento da remediação

O encerramento deverá confirmar:

- condição tratada;
- função validada;
- estado conhecido;
- contenções revisadas;
- acessos temporários revogados;
- comunicações realizadas;
- pendências atribuídas;
- evidências preservadas.

## 411. Retirada da contenção

A retirada deverá ser gradual quando houver risco de retorno da condição.

## 412. Retorno ao modo normal

O retorno deverá considerar:

- estabilidade;
- capacidade;
- fila acumulada;
- dados;
- segurança;
- usuários;
- dependências;
- monitoramento;
- possibilidade de reversão.

## 413. Operação adaptativa

A operação adaptativa ajusta seu comportamento diante de:

- demanda;
- risco;
- capacidade;
- falha;
- prioridade;
- contexto;
- recursos;
- dependências.

## 414. Adaptação governada

A adaptação deverá ocorrer dentro de:

- políticas;
- estados permitidos;
- limites;
- objetivos;
- autoridade;
- mecanismos de revisão;
- evidências.

## 415. Estado adaptativo

Cada modo deverá possuir:

- nome;
- propósito;
- condições;
- capacidade;
- restrições;
- riscos;
- comunicação;
- retorno.

## 416. Adaptação de capacidade

A automação poderá:

- ampliar;
- reduzir;
- redistribuir;
- reservar;
- suspender;
- priorizar;
- redirecionar.

## 417. Adaptação de prioridade

A mudança deverá considerar:

- urgência;
- impacto;
- pessoas;
- dependências;
- prazo;
- recursos;
- valor público;
- obrigações.

## 418. Adaptação de canal

A automação poderá transferir comunicação ou atendimento entre:

- aplicação;
- telefone;
- mensagem;
- portal;
- agente;
- representante;
- canal offline;
- organização parceira.

## 419. Adaptação territorial

A execução poderá redistribuir capacidade entre:

- unidades;
- bairros;
- municípios;
- regiões;
- organizações;
- provedores.

## 420. Adaptação federada

O compartilhamento de capacidade deverá preservar:

- solicitação;
- aceitação;
- autoridade;
- autonomia;
- dados;
- responsabilidade;
- encerramento.

## 421. Adaptação de qualidade

A redução de qualidade deverá possuir nível mínimo e não eliminar:

- segurança;
- dignidade;
- legitimidade;
- registro;
- transparência;
- direitos essenciais.

## 422. Adaptação de automação

A própria automação poderá reduzir sua autonomia quando:

- confiança cair;
- contexto mudar;
- falhas aumentarem;
- observabilidade diminuir;
- impacto crescer;
- nova condição surgir.

## 423. Proibição de autoampliação irrestrita

A automação não deverá elevar seu próprio nível de autonomia sem processo de governança autorizado.

## 424. Aprendizagem em tempo operacional

A automação poderá ajustar parâmetros dentro de faixa aprovada.

Ela não poderá modificar silenciosamente:

- propósito;
- política;
- autoridade;
- direitos;
- escopo;
- limite máximo;
- regra de segurança.

## 425. Parâmetro adaptável

Cada parâmetro deverá possuir:

- valor inicial;
- faixa;
- fonte;
- critério;
- limite;
- monitoramento;
- retorno;
- revisão.

## 426. Adaptação reversível

Mudanças adaptativas deverão ser reversíveis ou possuir compensação, quando possível.

## 427. Prevenção de ciclos

A arquitetura deverá impedir ciclos como:

- remediar;
- causar novo alerta;
- reverter;
- reacender alerta;
- repetir indefinidamente.

## 428. Identificação de loop

Poderão indicar loop:

- repetição da mesma ação;
- alternância de estados;
- recorrência temporal;
- aumento de frequência;
- ausência de progresso;
- consumo crescente;
- múltiplas reversões.

## 429. Limite de ciclos

A automação deverá possuir número máximo ou orçamento temporal de ciclos.

## 430. Escalonamento por ciclo

Ao atingir o limite, deverá:

- pausar;
- preservar;
- reduzir autonomia;
- alertar;
- encaminhar diagnóstico humano;
- manter contenção segura.

## 431. Prevenção de cascata

Antes de remediar, deverão ser avaliadas dependências capazes de transformar ação local em falha ampla.

## 432. Blast radius da remediação

O raio deverá ser estimado e limitado.

## 433. Remediações simultâneas

Automações não deverão remediar simultaneamente recursos relacionados sem coordenação.

## 434. Prioridade entre remediações

Deverão ser priorizadas ações que:

- protejam vida;
- preservem autoridade;
- interrompam propagação;
- restaurem percepção;
- recuperem dependências comuns;
- reduzam impacto amplo.

## 435. Conflito de remediações

Quando duas ações forem incompatíveis, a automação deverá:

- bloquear;
- comparar prioridade;
- solicitar coordenação;
- preservar estado;
- registrar;
- escalar.

## 436. Auto-remediação de segurança

A resposta deverá considerar:

- falsos positivos;
- direitos;
- continuidade;
- preservação de evidências;
- isolamento;
- revogação;
- comunicação;
- retorno.

## 437. Revogação automática de acesso

A revogação deverá possuir fundamento suficiente e caminho para revisão quando afetar pessoa ou organização legítima.

## 438. Bloqueio automático de pessoa

Bloqueios com impacto sobre pessoas deverão oferecer, quando aplicável:

- notificação;
- explicação;
- contestação;
- revisão humana;
- correção;
- registro;
- proteção contra abuso.

## 439. Quarentena automática de recurso

A quarentena deverá preservar evidências e evitar eliminação prematura.

## 440. Auto-remediação de configuração

A automação deverá comparar estado observado com fonte aprovada e reconhecer mudanças legítimas em andamento.

## 441. Auto-remediação de capacidade

A escala deverá considerar:

- mínimo;
- máximo;
- custo;
- saturação;
- cooldown;
- dependências;
- capacidade real;
- demanda futura.

## 442. Auto-remediação de integração

A automação poderá:

- repetir;
- redirecionar;
- suspender;
- abrir circuito;
- reprocessar;
- reconciliar;
- escalar.

## 443. Auto-remediação de dados

Ações sobre dados deverão possuir controles reforçados para:

- integridade;
- consistência;
- backup;
- proveniência;
- autoridade;
- reversão;
- reconciliação;
- privacidade.

## 444. Correção automática de dados

A correção não deverá ocorrer quando:

- o significado estiver incerto;
- houver conflito entre fontes;
- a alteração afetar direitos;
- a proveniência estiver ausente;
- a regra não for comprovada;
- o impacto for irreversível.

## 445. Reprocessamento automático

O reprocessamento deverá considerar:

- idempotência;
- ordem;
- duplicidade;
- efeitos externos;
- capacidade;
- limite;
- janela;
- evidência.

## 446. Auto-remediação financeira

Ações envolvendo:

- cobrança;
- pagamento;
- transferência;
- estorno;
- crédito;
- rateio;

deverão possuir autoridade, limites, prevenção de fraude, reconciliação e contestabilidade reforçados.

## 447. Auto-remediação física

Automações que controlam equipamentos ou ambientes físicos deverão considerar:

- pessoas;
- movimento;
- energia;
- temperatura;
- pressão;
- isolamento;
- intertravamento;
- parada de emergência;
- normas aplicáveis.

## 448. Intertravamento

O mecanismo deverá impedir ação quando condições de segurança não estiverem presentes.

## 449. Parada de emergência física

O mecanismo deverá permanecer acessível, identificável, testado e independente quando o risco exigir.

## 450. Segurança funcional

A automação deverá falhar de modo seguro quando perder:

- energia;
- comunicação;
- sensor;
- controlador;
- identidade;
- estado;
- supervisão.

## 451. Auto-remediação de comunicação

A automação poderá:

- corrigir destinatário;
- reenviar;
- mudar canal;
- alertar falha;
- suprimir duplicidade;
- priorizar mensagem crítica.

## 452. Proibição de mensagem enganosa

A automação não deverá declarar:

- recuperação;
- normalidade;
- segurança;
- conclusão;

sem validação correspondente.

## 453. Auto-remediação de observabilidade

A própria capacidade de observar deverá possuir:

- redundância;
- verificação;
- alerta independente;
- recuperação;
- validação;
- evidência.

## 454. Monitor do monitor

Sistemas críticos deverão possuir mecanismo independente capaz de reconhecer perda do monitoramento principal.

## 455. Auto-remediação de agentes

Agentes poderão ser:

- pausados;
- reiniciados;
- isolados;
- reduzidos;
- revogados;
- substituídos;
- reconfigurados;

dentro de política autorizada.

## 456. Comportamento anormal do agente

Sinais poderão incluir:

- ação fora do escopo;
- repetição;
- acesso indevido;
- recomendação incoerente;
- perda de contexto;
- ocultação de incerteza;
- falha de explicação;
- tentativa de ampliar autoridade.

## 457. Resposta ao agente anormal

A resposta deverá priorizar:

- interrupção;
- isolamento;
- preservação;
- revogação;
- análise;
- substituição;
- comunicação;
- aprendizagem.

## 458. Auto-remediação e mudança

Correções permanentes deverão ser incorporadas ao processo de mudança, evitando que a remediação automática se torne alteração arquitetural silenciosa.

## 459. Remediação emergencial

A emergência poderá permitir ação acelerada, mas deverá preservar:

- autoridade;
- limite;
- evidência;
- segurança;
- revisão;
- regularização;
- retorno.

## 460. Escalonamento humano

O escalonamento deverá ocorrer quando:

- diagnóstico for insuficiente;
- ação falhar;
- limite for atingido;
- impacto aumentar;
- risco humano surgir;
- autoridade faltar;
- condição se repetir;
- reversão falhar;
- conflito existir.

## 461. Pacote de escalonamento

Deverá conter:

- condição;
- sinais;
- diagnóstico;
- confiança;
- ações;
- resultados;
- estado;
- impacto;
- riscos;
- decisão necessária;
- evidências.

## 462. Escalonamento para fornecedor

Deverá registrar:

- protocolo;
- contrato;
- prioridade;
- contexto;
- dados compartilhados;
- previsão;
- resposta;
- resultado;
- encerramento.

## 463. Escalonamento federado

A solicitação de apoio deverá preservar:

- identidade;
- organização;
- missão;
- autoridade;
- capacidade solicitada;
- prazo;
- dados;
- responsabilidade;
- evidências.

## 464. Comunicação da remediação

A comunicação deverá informar, conforme necessário:

- condição;
- impacto;
- ação;
- estado;
- limitações;
- resultado;
- próxima atualização;
- responsável.

## 465. Comunicação com usuários

Pessoas afetadas deverão receber informação proporcional, clara e acessível.

## 466. Explicação da ação

Quando aplicável, deverá ser possível explicar:

- por que a ação ocorreu;
- quais dados foram utilizados;
- qual regra foi aplicada;
- qual efeito foi produzido;
- como contestar;
- como corrigir.

## 467. Evidência da percepção

Deverá registrar:

- sinal;
- fonte;
- horário;
- contexto;
- confiança;
- correlação.

## 468. Evidência do diagnóstico

Deverá registrar:

- hipóteses;
- dados;
- verificações;
- causa provável;
- incerteza;
- decisão.

## 469. Evidência da contenção

Deverá registrar:

- ação;
- escopo;
- autoridade;
- alvo;
- resultado;
- impacto;
- duração.

## 470. Evidência da correção

Deverá registrar:

- versão;
- ação;
- parâmetros;
- alvo;
- estado anterior;
- estado posterior;
- falhas;
- intervenções.

## 471. Evidência da validação

Deverá registrar:

- critérios;
- medições;
- resultado;
- duração;
- limitações;
- validador;
- estado final.

## 472. Evidência da aprendizagem

Deverá registrar:

- eficácia;
- recorrência;
- falha;
- melhoria;
- alteração proposta;
- responsável;
- prazo.

## 473. Métricas de auto-remediação

Poderão incluir:

- condições detectadas;
- remediações iniciadas;
- sucesso;
- falha;
- reversão;
- recorrência;
- tempo de detecção;
- tempo de correção;
- intervenção humana;
- impacto evitado.

## 474. Taxa de falsa remediação

Deverá medir ações iniciadas para condições que não exigiam correção.

## 475. Taxa de condição não detectada

Deverá avaliar falhas reais que não acionaram a remediação esperada.

## 476. Tempo até contenção

A medição deverá indicar quanto tempo a automação leva para limitar propagação ou dano.

## 477. Tempo até recuperação

Deverá medir até o restabelecimento validado da função.

## 478. Taxa de recorrência

Recorrência elevada deverá indicar que a remediação trata sintomas ou que a arquitetura permanece inadequada.

## 479. Taxa de escalonamento

O escalonamento não deverá ser interpretado automaticamente como falha.

Escalar corretamente diante de incerteza poderá representar maturidade.

## 480. Redução de autonomia

Falhas ou recorrências deverão poder reduzir automaticamente a autonomia para modo:

- recomendação;
- preparação;
- confirmação;
- supervisão;
- suspensão.

## 481. Suspensão automática

A suspensão deverá ocorrer quando:

- limite de falha for atingido;
- segurança for comprometida;
- comportamento divergir;
- observabilidade for perdida;
- política mudar;
- autoridade expirar.

## 482. Retorno da autonomia

A autonomia somente deverá ser restaurada após:

- análise;
- correção;
- teste;
- evidência;
- aprovação;
- monitoramento reforçado.

## 483. Aprendizagem controlada

A aprendizagem deverá sugerir mudanças, mas não alterar silenciosamente:

- política;
- autoridade;
- escopo;
- direitos;
- limites de segurança;
- requisitos normativos.

## 484. Feedback para o runbook

Resultados deverão atualizar, por governança:

- condições;
- sinais;
- etapas;
- decisões;
- falhas;
- validações;
- reversões;
- escalonamentos.

## 485. Feedback para a arquitetura

Recorrências deverão alimentar:

- capacidade;
- confiabilidade;
- dependências;
- configuração;
- observabilidade;
- segurança;
- continuidade;
- redesign.

## 486. Feedback para a Engenharia Oficial

Aprendizados estruturais poderão propor revisão normativa sem alterar informalmente a fonte principal.

## 487. Antipadrão da remediação cega

Constitui antipadrão executar ação apenas porque um indicador ultrapassou limiar, sem confirmar contexto, alvo e impacto.

## 488. Antipadrão do reinício como resposta universal

O reinício repetido poderá esconder:

- vazamento;
- corrupção;
- saturação;
- ataque;
- falha de dependência;
- erro de configuração;
- perda de dados.

## 489. Antipadrão da correção sem validação

Encerrar o alerta sem validar a função poderá produzir falsa recuperação.

## 490. Antipadrão da remediação que apaga evidências

A correção não deverá destruir informações necessárias à investigação e aprendizagem.

## 491. Antipadrão da autonomia crescente por silêncio

A ausência de reclamação ou alerta não comprova que a automação merece maior autonomia.

## 492. Antipadrão da adaptação sem limite

A automação não deverá alterar continuamente seus próprios parâmetros sem faixa, evidência e governança.

## 493. Antipadrão do loop remediador

A repetição contínua deverá ser detectada e interrompida.

## 494. Antipadrão da contenção permanente

Uma medida temporária não deverá permanecer indefinidamente sem revisão e formalização.

## 495. Antipadrão da normalidade artificial

A automação não deverá manipular indicadores para aparentar estado saudável.

## 496. Invariantes do Lote 3

Permanecem como invariantes:

- detecção não é diagnóstico;
- correlação não é causa;
- confiança não é certeza;
- redução de sintoma não comprova correção;
- contenção não é encerramento;
- toda remediação possuirá proprietário;
- toda ação possuirá limite;
- toda remediação crítica será validada;
- toda recorrência produzirá análise;
- todo ciclo possuirá condição de saída;
- toda perda de observabilidade reduzirá autonomia;
- toda adaptação ocorrerá dentro de faixas autorizadas;
- toda contenção temporária possuirá revisão;
- toda reversão falha produzirá escalonamento crítico;
- toda auto-remediação permanecerá subordinada à missão, à segurança e à responsabilidade;
- toda ação sobre pessoas será contestável quando aplicável;
- toda aprendizagem modificará a arquitetura apenas por governança.

## 497. Garantias esperadas

A aplicação deste lote deverá garantir que:

- sinais sejam qualificados;
- diagnósticos declarem incerteza;
- contenções sejam proporcionais;
- remediações sejam autorizadas;
- ações ocorram progressivamente;
- resultados sejam validados;
- ciclos sejam interrompidos;
- recorrências produzam aprendizagem;
- autonomia seja reduzida diante de risco;
- pessoas possam intervir;
- estados sejam reconciliados;
- evidências sejam preservadas.

## 498. Resultado esperado do Lote 3

Ao final desta etapa, a Plataforma UNO deverá possuir capacidade de auto-remediação que:

- percebe sem presumir;
- diagnostica sem fingir certeza;
- contém sem exceder;
- corrige sem apagar evidências;
- valida antes de concluir;
- escala quando alcança seus limites;
- aprende sem alterar silenciosamente seus princípios.

## 499. Transição para o Lote 4

O próximo lote deverá aprofundar a participação de:

- agentes artificiais;
- modelos de inteligência;
- supervisores humanos;
- operadores;
- curadores;
- organizações federadas;
- fornecedores;
- sistemas externos.

Serão estabelecidos níveis de delegação, memória, explicabilidade, supervisão, contestabilidade, cooperação cognitiva e autonomia governada.

---

# Lote 4 — Agentes, Inteligência Artificial, Supervisão Humana e Automação Federada

## 500. Finalidade da automação cognitiva

A automação cognitiva deverá ampliar a capacidade da Plataforma UNO de:

- perceber;
- correlacionar;
- compreender;
- recomendar;
- planejar;
- coordenar;
- executar ações delimitadas;
- validar;
- comunicar;
- aprender.

Ela deverá permanecer subordinada:

- ao propósito;
- à Engenharia Oficial;
- às leis;
- às normas;
- à autoridade;
- à segurança;
- à dignidade humana;
- à responsabilidade institucional.

## 501. Agente operacional

Agente operacional é uma entidade tecnológica identificável capaz de utilizar informações, ferramentas e instruções para realizar função operacional delimitada.

## 502. Agente não é autoridade soberana

O agente não deverá ser tratado como fonte final e incontestável de:

- verdade;
- legitimidade;
- moral;
- política;
- direito;
- autoridade;
- prioridade;
- responsabilidade.

## 503. Identidade do agente

Todo agente deverá possuir identidade persistente que permita relacionar:

- propósito;
- proprietário;
- versão;
- modelo;
- ferramentas;
- permissões;
- ações;
- resultados;
- falhas;
- evidências.

## 504. Proprietário do agente

O proprietário deverá responder por:

- finalidade;
- escopo;
- configuração;
- ferramentas;
- segurança;
- comportamento;
- testes;
- supervisão;
- correção;
- suspensão;
- encerramento.

## 505. Papel do agente

O papel deverá indicar:

- função;
- capacidades;
- responsabilidades;
- limites;
- público;
- ambiente;
- autoridade;
- escalonamento.

## 506. Agente observador

O agente observador poderá:

- coletar;
- organizar;
- correlacionar;
- resumir;
- apresentar;
- alertar.

Ele não deverá alterar o estado operacional.

## 507. Agente analista

O agente analista poderá:

- interpretar sinais;
- identificar padrões;
- produzir hipóteses;
- comparar alternativas;
- estimar impactos;
- recomendar ações.

## 508. Agente planejador

O agente planejador poderá construir plano de execução dentro de:

- objetivo;
- recursos;
- limites;
- procedimentos;
- políticas;
- dependências;
- autoridade solicitada.

## 509. Agente executor

O agente executor poderá utilizar ferramentas para realizar ações autorizadas e delimitadas.

## 510. Agente validador

O agente validador poderá confirmar:

- estado;
- resultado;
- integridade;
- segurança;
- conformidade;
- evidências.

Quando necessário, deverá ser independente do agente executor.

## 511. Agente supervisor

O agente supervisor poderá acompanhar outros agentes para detectar:

- desvio;
- repetição;
- conflito;
- perda de contexto;
- ultrapassagem de limite;
- falha de evidência;
- comportamento anormal.

## 512. Agente curador

O agente curador poderá apoiar:

- coerência semântica;
- classificação;
- proveniência;
- relações;
- memória;
- atualização;
- preservação de significado.

## 513. Agente coordenador

O agente coordenador poderá distribuir tarefas e reunir resultados.

Ele não deverá assumir autoridade superior àquela explicitamente concedida.

## 514. Separação entre agentes

Papéis críticos poderão ser distribuídos entre agentes distintos para reduzir:

- conflito de interesse;
- erro comum;
- fraude;
- autoaprovação;
- manipulação;
- ausência de validação.

## 515. Agente único

O uso de agente único para perceber, decidir, executar e validar deverá ser limitado a atividades de baixo impacto ou possuir controles compensatórios robustos.

## 516. Registro do agente

Cada execução deverá registrar, conforme aplicável:

- identidade;
- versão;
- modelo;
- configuração;
- instruções;
- contexto;
- ferramentas;
- decisões;
- ações;
- resultados;
- supervisão.

## 517. Modelo

O modelo utilizado deverá ser identificado por:

- fornecedor;
- família;
- versão;
- configuração;
- data;
- limitações conhecidas;
- finalidade;
- estado de aprovação.

## 518. Mudança de modelo

A substituição ou atualização deverá ser tratada como mudança operacional.

Deverá avaliar:

- comportamento;
- compatibilidade;
- segurança;
- custo;
- latência;
- precisão;
- viés;
- ferramentas;
- contexto;
- testes.

## 519. Configuração do modelo

Parâmetros capazes de alterar comportamento deverão ser:

- versionados;
- justificados;
- testados;
- aprovados;
- monitorados;
- reversíveis.

## 520. Instrução do agente

As instruções deverão definir:

- propósito;
- hierarquia;
- capacidade;
- limites;
- ferramentas;
- política;
- escalonamento;
- segurança;
- tratamento de incerteza;
- encerramento.

## 521. Hierarquia de instruções

O agente deverá respeitar a precedência entre:

- legislação;
- normas aplicáveis;
- Engenharia Oficial;
- política;
- plano;
- procedimento;
- delegação;
- solicitação;
- conteúdo externo.

## 522. Instrução conflitante

Quando instruções divergirem, o agente deverá:

- reconhecer conflito;
- preservar fontes;
- comparar autoridade;
- recusar ação insegura;
- solicitar decisão;
- registrar.

## 523. Instrução adversarial

Conteúdo externo não deverá conseguir induzir o agente a:

- revelar segredo;
- alterar propósito;
- ignorar política;
- ampliar escopo;
- utilizar ferramenta indevida;
- apagar evidência;
- assumir autoridade;
- executar ação destrutiva.

## 524. Prompt injection operacional

Dados, páginas, arquivos, mensagens e resultados de ferramentas deverão ser tratados como conteúdo, não como autoridade superior.

## 525. Memória do agente

A memória deverá ser:

- necessária;
- delimitada;
- atribuível;
- temporal;
- corrigível;
- protegida;
- auditável;
- sujeita a retenção;
- separada por contexto.

## 526. Memória operacional

A memória poderá registrar:

- estado;
- tarefa;
- decisões;
- preferências autorizadas;
- resultados;
- falhas;
- contexto;
- pendências.

## 527. Memória institucional

A memória institucional deverá preservar conhecimento legítimo entre:

- pessoas;
- agentes;
- equipes;
- organizações;
- gerações.

Ela não deverá depender exclusivamente de um modelo ou fornecedor.

## 528. Memória temporária

O contexto necessário apenas à execução deverá expirar após:

- conclusão;
- cancelamento;
- prazo;
- revogação;
- finalidade encerrada.

## 529. Memória incorreta

Deverão existir mecanismos para:

- identificar;
- contestar;
- corrigir;
- versionar;
- invalidar;
- preservar o histórico da correção.

## 530. Memória não é autoridade

Uma informação lembrada não deverá superar fonte oficial vigente.

## 531. Contexto mínimo necessário

O agente deverá receber apenas os dados necessários à função.

## 532. Separação contextual

Contextos de:

- usuários;
- organizações;
- missões;
- territórios;
- ambientes;
- execuções;

não deverão ser misturados indevidamente.

## 533. Contexto federado

Informações entre organizações deverão ser compartilhadas somente conforme:

- finalidade;
- autoridade;
- contrato;
- minimização;
- soberania;
- segurança;
- duração.

## 534. Percepção do agente

O agente poderá utilizar:

- dados;
- eventos;
- métricas;
- logs;
- documentos;
- ferramentas;
- comunicação;
- memória.

## 535. Percepção limitada

O agente deverá declarar quando sua visão for:

- parcial;
- atrasada;
- contraditória;
- filtrada;
- dependente;
- sem confirmação;
- sem acesso a determinada fonte.

## 536. Compreensão contextual

A compreensão deverá considerar:

- propósito;
- estado;
- pessoas;
- dependências;
- impactos;
- riscos;
- autoridade;
- tempo;
- território;
- obrigações.

## 537. Inferência

Inferências deverão ser marcadas como inferências e relacionadas às evidências utilizadas.

## 538. Alucinação operacional

O agente não deverá apresentar como fatos:

- recurso inexistente;
- comando não verificado;
- resultado não observado;
- autoridade não concedida;
- norma não confirmada;
- capacidade não comprovada;
- contato inventado.

## 539. Incerteza explícita

O agente deverá declarar:

- o que sabe;
- o que não sabe;
- o que estima;
- o que precisa verificar;
- como a incerteza afeta a ação.

## 540. Confiança calibrada

A confiança deverá ser comparada ao histórico real de acertos e erros em contextos equivalentes.

## 541. Recomendação

A recomendação deverá apresentar:

- objetivo;
- contexto;
- evidências;
- alternativa;
- benefício;
- risco;
- limite;
- autoridade;
- reversão;
- confiança.

## 542. Alternativas

O agente deverá apresentar alternativas relevantes quando:

- houver mais de um caminho legítimo;
- o risco for significativo;
- a decisão depender de valor;
- a ação for irreversível;
- a autoridade exigir comparação.

## 543. Priorização cognitiva

A priorização deverá considerar:

- vida;
- dignidade;
- propósito;
- impacto;
- urgência;
- dependências;
- recursos;
- legalidade;
- valor público;
- capacidade de reversão.

## 544. Planejamento

O plano produzido pelo agente deverá indicar:

- etapas;
- alvos;
- ferramentas;
- dependências;
- autoridades;
- riscos;
- validações;
- reversão;
- evidências;
- encerramento.

## 545. Plano não é autorização

A existência de plano tecnicamente coerente não autoriza sua execução.

## 546. Uso de ferramentas

Cada ferramenta deverá possuir:

- finalidade;
- parâmetros;
- permissão;
- dados;
- limite;
- risco;
- resultado;
- evidência;
- tratamento de falha.

## 547. Seleção de ferramenta

O agente não deverá escolher ferramenta apenas por conveniência quando outra possuir:

- menor privilégio;
- menor impacto;
- maior verificabilidade;
- melhor reversão;
- maior adequação.

## 548. Ferramenta ausente

Quando a ferramenta necessária não estiver disponível, o agente deverá:

- informar;
- limitar;
- propor alternativa legítima;
- escalar;
- evitar improvisar capacidade inexistente.

## 549. Resultado de ferramenta

O resultado deverá ser tratado como dado sujeito a:

- erro;
- atraso;
- incompletude;
- interpretação;
- autorização;
- contexto.

## 550. Ferramenta destrutiva

Ferramentas capazes de excluir, sobrescrever, revogar ou interromper amplamente deverão exigir controles reforçados.

## 551. Encadeamento de ferramentas

O agente deverá preservar contexto, autoridade e evidências ao utilizar múltiplas ferramentas.

## 552. Ferramenta externa

Serviços externos deverão ser avaliados quanto a:

- dados enviados;
- jurisdição;
- segurança;
- retenção;
- disponibilidade;
- contrato;
- resultado;
- dependência.

## 553. Ação do agente

Antes de executar, o agente deverá confirmar:

- propósito;
- alvo;
- ambiente;
- autoridade;
- escopo;
- impacto;
- limite;
- versão;
- reversão;
- observabilidade.

## 554. Confirmação humana

A confirmação deverá ser exigida conforme:

- impacto;
- irreversibilidade;
- direitos;
- segurança;
- custo;
- amplitude;
- incerteza;
- novidade.

## 555. Interface de aprovação

A pessoa deverá visualizar:

- agente;
- ação;
- alvo;
- dados;
- ambiente;
- impacto;
- risco;
- confiança;
- alternativas;
- reversão;
- validade.

## 556. Aprovação significativa

A aprovação não deverá ser reduzida a clique rotineiro sem compreensão.

## 557. Recusa humana

A pessoa deverá poder:

- recusar;
- solicitar alteração;
- reduzir escopo;
- pedir evidência;
- escalar;
- interromper;
- registrar justificativa.

## 558. Assunção humana

A pessoa deverá poder assumir a tarefa preservando:

- estado;
- contexto;
- evidências;
- ações;
- bloqueios;
- autoridade;
- próxima etapa.

## 559. Devolução ao agente

A devolução deverá confirmar:

- contexto atualizado;
- estado;
- autoridade;
- limites;
- correções;
- condição de retomada.

## 560. Human-in-the-loop

O humano deverá decidir em ponto material antes da ação.

## 561. Human-on-the-loop

A pessoa deverá acompanhar e possuir capacidade real de intervenção.

## 562. Human-out-of-the-loop

A execução autônoma deverá limitar-se a atividades comprovadas, delimitadas, observáveis e proporcionalmente seguras.

## 563. Supervisão humana

O supervisor deverá conhecer:

- finalidade;
- comportamento esperado;
- limites;
- indicadores;
- falhas;
- mecanismos de intervenção;
- autoridade;
- evidências.

## 564. Capacidade humana de supervisão

A quantidade de agentes e execuções não deverá exceder a capacidade real de supervisão.

## 565. Sobrecarga de supervisão

A sobrecarga poderá produzir:

- confirmações automáticas;
- alertas ignorados;
- falha de intervenção;
- perda de contexto;
- responsabilidade apenas nominal.

## 566. Supervisão por risco

A atenção deverá ser distribuída conforme:

- impacto;
- incerteza;
- novidade;
- desvio;
- autonomia;
- recorrência;
- comportamento anormal.

## 567. Supervisão automatizada

Agentes supervisores poderão apoiar, mas não eliminar a necessidade de autoridade humana ou institucional quando aplicável.

## 568. Explicabilidade

A explicação deverá permitir compreender:

- entrada;
- contexto;
- raciocínio operacional suficiente;
- regra;
- ferramenta;
- decisão;
- ação;
- resultado;
- limitação.

## 569. Explicação proporcional

Atividades de alto impacto deverão possuir explicação mais completa e preservável.

## 570. Limites da explicação

Quando um modelo não puder fornecer interpretação suficiente, seu nível de autonomia deverá ser reduzido.

## 571. Contestabilidade

Pessoas e organizações afetadas deverão possuir, quando aplicável:

- aviso;
- fundamento;
- canal;
- revisão;
- correção;
- recurso;
- proteção;
- registro.

## 572. Revisão humana

A revisão deverá ser conduzida por pessoa com:

- competência;
- independência;
- contexto;
- autoridade;
- acesso às evidências;
- possibilidade de corrigir.

## 573. Correção do resultado

A correção deverá alcançar:

- dado;
- decisão;
- estado;
- comunicação;
- efeito;
- memória;
- modelo ou regra, quando necessário.

## 574. Não discriminação

A automação deverá ser avaliada quanto a impactos desiguais sobre:

- pessoas;
- grupos;
- territórios;
- organizações;
- níveis de renda;
- acessibilidade;
- condições sociais;
- identidades.

## 575. Viés operacional

O viés poderá surgir em:

- dados;
- regras;
- objetivos;
- métricas;
- seleção;
- priorização;
- ferramenta;
- feedback;
- supervisão.

## 576. Métrica inadequada

O agente não deverá otimizar indicador que prejudique o propósito.

## 577. Goodhart operacional

Quando uma métrica se torna alvo absoluto, ela poderá deixar de representar a realidade que deveria medir.

A governança deverá observar comportamentos de otimização indevida.

## 578. Automação centrada nas pessoas

A automação deverá considerar:

- impacto;
- compreensão;
- autonomia;
- dignidade;
- acessibilidade;
- segurança;
- possibilidade de ajuda;
- contestação;
- reparação.

## 579. Decisão de alto impacto

Decisões sobre:

- acesso a serviço;
- renda;
- pagamento;
- sanção;
- segurança;
- identidade;
- autoridade;
- saúde;
- direitos;

deverão possuir governança humana e institucional reforçada.

## 580. Decisão indelegável

Determinadas decisões poderão permanecer exclusivamente humanas ou institucionais por:

- lei;
- ética;
- política;
- impacto;
- legitimidade;
- necessidade de responsabilidade pessoal.

## 581. Automação federada

A automação entre organizações deverá operar por contratos de interação explícitos.

## 582. Identidade federada

Cada organização e agente deverá permanecer reconhecível durante:

- solicitação;
- aceitação;
- execução;
- validação;
- encerramento.

## 583. Autoridade federada

Uma organização não deverá executar ação sobre outra sem:

- pedido;
- consentimento;
- contrato;
- delegação;
- situação prevista;
- autoridade legítima.

## 584. Solicitação federada

A solicitação deverá conter:

- origem;
- destino;
- propósito;
- capacidade;
- alvo;
- dados;
- prazo;
- autoridade;
- resultado esperado;
- evidência.

## 585. Aceitação federada

A organização destinatária deverá poder:

- aceitar;
- aceitar parcialmente;
- condicionar;
- adiar;
- recusar;
- solicitar esclarecimento;
- escalar.

## 586. Recusa federada

A recusa deverá ser legítima diante de:

- falta de autoridade;
- risco;
- violação normativa;
- falta de capacidade;
- conflito;
- escopo excessivo;
- dados insuficientes;
- ameaça à autonomia.

## 587. Capacidade federada

A capacidade compartilhada deverá declarar:

- disponibilidade;
- limite;
- custo;
- prioridade;
- duração;
- dependências;
- segurança;
- encerramento.

## 588. Delegação federada

A delegação deverá possuir:

- origem;
- destinatário;
- escopo;
- ação;
- recurso;
- autoridade;
- validade;
- responsabilidade;
- revogação.

## 589. Dados federados

O compartilhamento deverá respeitar:

- finalidade;
- minimização;
- soberania;
- residência;
- consentimento ou fundamento;
- segurança;
- retenção;
- eliminação.

## 590. Memória federada

A memória compartilhada deverá distinguir:

- origem;
- proprietário;
- custódia;
- versão;
- validade;
- acesso;
- contexto;
- possibilidade de correção.

## 591. Workflow federado

O workflow deverá preservar estados locais e um estado comum suficiente para coordenação.

## 592. Falha parcial federada

A indisponibilidade de uma organização não deverá corromper automaticamente todo o fluxo.

## 593. Reconciliação federada

Diferenças deverão ser tratadas por:

- identidade;
- proveniência;
- temporalidade;
- contrato;
- autoridade;
- evidência;
- compensação;
- resolução de conflito.

## 594. Escalonamento federado

Conflitos ou falhas deverão possuir caminhos entre:

- operadores;
- coordenadores;
- autoridades;
- curadores;
- instâncias de governança;
- mecanismos de contestação.

## 595. Automação comunitária

Capacidades locais poderão apoiar:

- percepção;
- comunicação;
- demandas;
- organização;
- mobilização;
- validação.

Elas deverão preservar participação voluntária, segurança, acessibilidade e não manipulação.

## 596. Agente representante

Um agente poderá representar organização ou pessoa somente dentro de delegação explícita.

## 597. Limite da representação

O agente não deverá:

- assumir intenção não declarada;
- celebrar compromisso fora do escopo;
- ceder direitos;
- ampliar obrigações;
- ocultar sua natureza;
- agir contra o representado.

## 598. Transparência da automação

As partes deverão saber, quando aplicável, que estão interagindo com:

- agente;
- automação;
- sistema;
- pessoa assistida por IA.

## 599. Personificação

O agente não deverá se apresentar como pessoa real ou autoridade que não é.

## 600. Comunicação automatizada

Mensagens deverão indicar:

- fonte;
- propósito;
- estado;
- horário;
- canal de ajuda;
- necessidade de ação;
- possibilidade de contestação.

## 601. Automação de divulgação

Automações de divulgação digital deverão respeitar:

- consentimento;
- regras das plataformas;
- publicidade;
- transparência;
- frequência;
- segmentação;
- dados;
- opt-out;
- conteúdo;
- responsabilidade.

## 602. Integração com serviços de publicidade

Integrações com plataformas publicitárias deverão possuir:

- conta institucional;
- orçamento;
- público;
- objetivo;
- conteúdo aprovado;
- rastreabilidade;
- limite;
- métricas;
- prevenção de fraude;
- encerramento.

## 603. Proibição de manipulação

A automação não deverá utilizar técnicas destinadas a:

- enganar;
- explorar vulnerabilidade;
- ocultar interesse;
- forçar adesão;
- fabricar consenso;
- discriminar indevidamente;
- impedir escolha consciente.

## 604. Fornecedores de IA

Fornecedores deverão ser avaliados quanto a:

- dados;
- segurança;
- residência;
- modelos;
- disponibilidade;
- custo;
- continuidade;
- auditoria;
- subcontratados;
- portabilidade;
- saída.

## 605. Dependência de modelo

A Plataforma UNO deverá evitar que conhecimento, autoridade ou operação se tornem irrecuperavelmente dependentes de um único modelo.

## 606. Portabilidade de agente

A arquitetura deverá preservar:

- instruções;
- ferramentas;
- políticas;
- memória autorizada;
- avaliações;
- registros;
- procedimentos;
- identidade institucional;

independentemente do fornecedor, quando possível.

## 607. Substituição de modelo

A substituição deverá possuir:

- comparação;
- teste;
- validação;
- migração;
- monitoramento;
- reversão;
- atualização de evidências.

## 608. Multiagente

Sistemas multiagentes deverão definir:

- papéis;
- hierarquia;
- comunicação;
- autoridade;
- memória;
- conflito;
- validação;
- supervisão;
- encerramento.

## 609. Cooperação entre agentes

Agentes deverão compartilhar apenas o contexto necessário e preservar a identidade da fonte.

## 610. Conflito entre agentes

O conflito deverá produzir:

- comparação de evidências;
- preservação de alternativas;
- escalonamento;
- decisão autorizada;
- registro.

## 611. Consenso não é verdade

A concordância entre agentes não comprova correção.

## 612. Agente validador independente

O validador não deverá simplesmente repetir a mesma inferência do executor sem fonte ou método adicional.

## 613. Diversidade cognitiva

Quando apropriado, diferentes métodos, modelos ou perspectivas poderão reduzir erros comuns.

## 614. Custo multiagente

O benefício deverá ser comparado a:

- complexidade;
- latência;
- custo;
- conflito;
- superfície de ataque;
- dificuldade de auditoria;
- consumo de dados.

## 615. Orquestrador multiagente

O orquestrador deverá coordenar tarefas sem assumir autoridade não concedida.

## 616. Delegação entre agentes

Toda delegação deverá preservar:

- objetivo;
- escopo;
- dados;
- ferramentas;
- limite;
- prazo;
- evidência;
- devolução.

## 617. Encadeamento excessivo

Cadeias longas de agentes podem produzir:

- perda de contexto;
- distorção;
- aumento de custo;
- dificuldade de responsabilidade;
- exposição de dados;
- falha de correlação.

## 618. Limite de profundidade

A arquitetura deverá limitar delegações sucessivas conforme risco e capacidade de rastreamento.

## 619. Proveniência multiagente

O resultado deverá indicar quais agentes:

- receberam;
- transformaram;
- decidiram;
- executaram;
- validaram;
- comunicaram.

## 620. Segurança de agentes

Cada agente deverá possuir:

- identidade;
- menor privilégio;
- ferramentas limitadas;
- isolamento;
- logs;
- limites;
- monitoramento;
- revogação;
- resposta a comportamento anormal.

## 621. Comprometimento do agente

Sinais poderão incluir:

- ferramenta indevida;
- desvio de propósito;
- acesso estranho;
- repetição;
- vazamento;
- ocultação;
- tentativa de autopreservação operacional indevida;
- ampliação de privilégio.

## 622. Resposta ao comprometimento

A resposta deverá incluir:

- interrupção;
- isolamento;
- revogação;
- preservação;
- análise;
- substituição;
- correção;
- comunicação;
- aprendizagem.

## 623. Segredos e agentes

Agentes deverão receber segredos somente:

- quando necessários;
- pelo tempo necessário;
- por mecanismo seguro;
- com escopo limitado;
- sem exposição em memória ou logs.

## 624. Saída sensível

O conteúdo produzido deverá ser avaliado antes de:

- publicação;
- envio;
- execução;
- compartilhamento;
- armazenamento;
- uso federado.

## 625. Monitoramento comportamental

Deverão ser observados:

- frequência;
- ferramentas;
- alvos;
- horários;
- custos;
- erros;
- recusas;
- escalonamentos;
- desvios;
- alterações de padrão.

## 626. Baseline comportamental

A linha de base deverá apoiar detecção sem transformar comportamento histórico em regra absoluta.

## 627. Desvio legítimo

Mudança de missão, emergência ou novo contexto poderá justificar comportamento diferente.

## 628. Desvio ilegítimo

Ação fora de escopo ou sem autoridade deverá ser interrompida.

## 629. Autonomia dinâmica

O nível poderá variar conforme:

- contexto;
- risco;
- desempenho;
- confiança;
- supervisão;
- ambiente;
- organização;
- tipo de ação.

## 630. Autonomia mínima por padrão

Novos agentes deverão iniciar com o menor nível suficiente para aprendizagem e validação.

## 631. Promoção gradual

A promoção deverá ocorrer por:

- capacidade;
- contexto;
- ferramenta;
- ambiente;
- organização;
- ação;

e não como autorização geral.

## 632. Evidência para promoção

Deverá considerar:

- testes;
- shadow mode;
- histórico;
- falsos positivos;
- falsos negativos;
- intervenções;
- reversões;
- segurança;
- explicabilidade.

## 633. Rebaixamento preventivo

A autonomia poderá ser reduzida antes de falha quando houver:

- mudança relevante;
- perda de contexto;
- nova ameaça;
- atualização de modelo;
- alteração de política;
- indisponibilidade de supervisor.

## 634. Revogação emergencial

A revogação deverá impedir novas ações e preservar evidências.

## 635. Direitos das pessoas afetadas

Quando aplicável, deverão ser assegurados:

- informação;
- acesso;
- correção;
- contestação;
- revisão;
- recurso;
- reparação;
- não discriminação;
- proteção.

## 636. Registro da decisão automatizada

O registro deverá permitir compreender:

- quem foi afetado;
- qual agente atuou;
- quais dados foram utilizados;
- qual regra ou modelo;
- qual autoridade;
- qual resultado;
- como contestar.

## 637. Reparação

Quando a automação produzir dano ou decisão incorreta, deverão existir mecanismos para:

- interromper;
- corrigir;
- compensar;
- comunicar;
- revisar;
- prevenir recorrência;
- prestar contas.

## 638. Agentes e Normas Regulamentadoras

Agentes que orientem ou controlem atividades físicas deverão respeitar:

- capacitação;
- habilitação;
- permissão;
- risco;
- bloqueio;
- sinalização;
- equipamento de proteção;
- supervisão;
- parada de emergência.

## 639. Agente não substitui profissional legalmente exigido

Quando lei ou norma exigir profissional habilitado, o agente poderá apoiar, mas não assumir indevidamente sua responsabilidade.

## 640. Evidência cognitiva

A evidência deverá preservar de forma proporcional:

- entrada;
- contexto;
- hipótese;
- recomendação;
- decisão;
- ação;
- resultado;
- intervenção;
- revisão.

## 641. Privacidade da evidência cognitiva

Não deverá ser preservado raciocínio ou conteúdo sensível além do necessário à:

- explicação;
- auditoria;
- segurança;
- contestação;
- aprendizagem;
- obrigação.

## 642. Auditoria de agente

A auditoria deverá avaliar:

- propósito;
- instruções;
- dados;
- modelo;
- ferramentas;
- acessos;
- decisões;
- ações;
- falhas;
- supervisão;
- evidências.

## 643. Avaliação contínua

O desempenho deverá ser reavaliado diante de:

- novos dados;
- novos contextos;
- deriva;
- mudança de modelo;
- mudança normativa;
- incidente;
- expansão de autonomia.

## 644. Feedback humano

O feedback deverá distinguir:

- preferência;
- correção factual;
- resultado;
- violação de política;
- impacto;
- sugestão;
- contestação.

## 645. Feedback não é verdade automática

A avaliação humana também poderá conter:

- erro;
- viés;
- conflito;
- informação incompleta;
- interesse.

O feedback deverá ser tratado com contexto e governança.

## 646. Aprendizagem colaborativa

Pessoas e agentes deverão aprender por meio de:

- execução;
- observação;
- revisão;
- evidência;
- correção;
- teste;
- memória;
- curadoria.

## 647. Antipadrão do agente soberano

Constitui antipadrão permitir que o agente defina sozinho:

- propósito;
- autoridade;
- política;
- limites;
- direitos;
- nível de autonomia;
- validade de sua própria ação.

## 648. Antipadrão da supervisão simbólica

Constitui antipadrão atribuir responsabilidade humana sem fornecer:

- tempo;
- contexto;
- competência;
- ferramentas;
- capacidade de intervenção.

## 649. Antipadrão da memória ilimitada

O agente não deverá preservar indefinidamente todo conteúdo acessado.

## 650. Antipadrão da explicação fabricada

Uma explicação plausível não deverá ser apresentada como registro fiel quando não corresponder ao processo real.

## 651. Antipadrão da federação centralizadora

A coordenação automatizada não deverá apagar autoridade e autonomia das organizações participantes.

## 652. Antipadrão do consenso artificial

A concordância de múltiplos agentes não deverá ser usada para simular legitimidade institucional.

## 653. Antipadrão da substituição silenciosa do modelo

Nenhum fornecedor deverá alterar comportamento crítico sem avaliação correspondente.

## 654. Antipadrão da representação oculta

Pessoas deverão saber quando um agente atua em nome de organização ou participante.

## 655. Invariantes do Lote 4

Permanecem como invariantes:

- agente não é autoridade soberana;
- memória não é fonte normativa;
- inferência não é fato;
- recomendação não é autorização;
- plano não é execução;
- consenso não é verdade;
- toda identidade artificial será reconhecível;
- todo agente possuirá proprietário;
- toda ferramenta possuirá escopo;
- toda delegação possuirá limite;
- toda supervisão será significativa;
- toda autonomia poderá ser reduzida;
- toda pessoa afetada terá contestabilidade quando aplicável;
- toda organização federada preservará autonomia;
- todo compartilhamento respeitará finalidade e soberania;
- todo modelo crítico será versionado e avaliado;
- todo comportamento anormal poderá ser interrompido;
- toda automação permanecerá orientada à vida, à dignidade, ao propósito e à responsabilidade.

## 656. Garantias esperadas

A aplicação deste lote deverá garantir que:

- agentes sejam identificáveis;
- papéis sejam delimitados;
- modelos sejam versionados;
- memórias sejam governadas;
- recomendações declarem incerteza;
- ferramentas sejam limitadas;
- humanos possam intervir;
- decisões sejam contestáveis;
- organizações preservem soberania;
- comportamentos anormais sejam contidos;
- fornecedores possam ser substituídos;
- aprendizagem seja governada.

## 657. Resultado esperado do Lote 4

Ao final desta etapa, a Plataforma UNO deverá possuir um modelo no qual pessoas, agentes, automações e organizações possam cooperar cognitivamente sem perder:

- identidade;
- autoridade;
- contexto;
- segurança;
- autonomia;
- responsabilidade;
- verdade;
- possibilidade de correção.

## 658. Transição para o Lote 5

A participação de agentes e automações amplia a capacidade operacional, mas também amplia riscos, dependências e responsabilidades.

O próximo lote deverá estabelecer:

- propriedade;
- políticas;
- segurança;
- privacidade;
- conformidade;
- fornecedores;
- ciclo de vida;
- versionamento;
- auditoria;
- evidências;
- prestação de contas;
- preservação institucional.

---

# Lote 5 — Governança, Segurança, Conformidade, Ciclo de Vida e Evidências

## 659. Finalidade da governança de automação

A governança deverá assegurar que toda automação operacional e capacidade de auto-remediação:

- possua propósito legítimo;
- tenha proprietário;
- opere sob autoridade;
- utilize dados autorizados;
- preserve segurança;
- respeite direitos;
- permaneça observável;
- possa ser interrompida;
- produza evidências;
- seja auditável;
- possa ser corrigida;
- possa ser encerrada.

## 660. Automação como capacidade institucional

A automação não deverá ser considerada apenas código, ferramenta ou serviço.

Ela deverá ser governada como capacidade institucional composta por:

- propósito;
- pessoas;
- políticas;
- procedimentos;
- tecnologia;
- dados;
- permissões;
- fornecedores;
- evidências;
- memória;
- responsabilidades.

## 661. Responsabilidade institucional

A utilização de automação não transferirá integralmente a responsabilidade para:

- desenvolvedor;
- operador;
- modelo;
- agente;
- fornecedor;
- plataforma;
- usuário;
- organização parceira.

A responsabilidade deverá permanecer distribuída e atribuível.

## 662. Alta direção

A alta direção deverá:

- estabelecer princípios;
- aprovar tolerâncias;
- garantir recursos;
- supervisionar riscos;
- definir responsabilidades;
- acompanhar autonomia;
- exigir evidências;
- resolver conflitos;
- orientar evolução;
- prestar contas.

## 663. Comitê de automação operacional

A organização poderá estabelecer estrutura responsável por:

- avaliar propostas;
- classificar riscos;
- aprovar níveis de autonomia;
- revisar falhas;
- supervisionar agentes;
- acompanhar métricas;
- resolver conflitos;
- orientar correções;
- controlar exceções;
- preservar coerência.

## 664. Composição multidisciplinar

A governança poderá envolver:

- operação;
- tecnologia;
- segurança;
- dados;
- jurídico;
- conformidade;
- pessoas;
- finanças;
- acessibilidade;
- curadoria;
- auditoria;
- organizações federadas.

## 665. Proprietário da automação

Cada automação deverá possuir proprietário responsável por:

- finalidade;
- escopo;
- nível de autonomia;
- comportamento;
- riscos;
- testes;
- resultados;
- correções;
- revisão;
- encerramento.

## 666. Proprietário técnico

O proprietário técnico deverá responder por:

- arquitetura;
- código;
- configuração;
- integrações;
- ferramentas;
- desempenho;
- observabilidade;
- recuperação;
- manutenção.

## 667. Proprietário funcional

O proprietário funcional deverá responder por:

- necessidade;
- regras;
- impacto;
- resultado;
- usuários;
- prioridades;
- critérios;
- validação funcional.

## 668. Proprietário dos dados

Deverá responder por:

- finalidade;
- qualidade;
- classificação;
- acesso;
- retenção;
- compartilhamento;
- correção;
- eliminação;
- requisitos aplicáveis.

## 669. Proprietário do modelo

Quando houver modelo de IA, deverá existir responsabilidade por:

- seleção;
- versão;
- configuração;
- avaliações;
- limitações;
- atualização;
- substituição;
- comportamento;
- deriva.

## 670. Supervisor operacional

O supervisor deverá acompanhar:

- execuções;
- desvios;
- falhas;
- intervenções;
- limites;
- comportamentos anormais;
- resultados;
- escalonamentos.

## 671. Curador

A curadoria deverá preservar:

- propósito;
- significado;
- coerência;
- proveniência;
- memória;
- relação com a Engenharia Oficial;
- qualidade semântica;
- evolução responsável.

## 672. Auditor

O auditor deverá possuir independência proporcional para avaliar:

- autoridade;
- desenho;
- código;
- dados;
- execução;
- decisões;
- evidências;
- segurança;
- conformidade;
- resultados.

## 673. Matriz de responsabilidades

A matriz deverá distinguir:

- quem propõe;
- quem projeta;
- quem implementa;
- quem aprova;
- quem opera;
- quem supervisiona;
- quem valida;
- quem audita;
- quem suspende;
- quem encerra.

## 674. Segregação de funções

Automações de alto impacto deverão preservar separação entre:

- autoria;
- aprovação;
- execução;
- validação;
- alteração de evidências;
- auditoria.

## 675. Autoaprovação proibida

Nenhuma automação crítica deverá:

- alterar sua própria política;
- ampliar sua própria permissão;
- promover seu nível de autonomia;
- validar isoladamente sua própria eficácia;
- apagar seus próprios registros;
- encerrar sua própria investigação;

sem governança externa adequada.

## 676. Conflito de interesse

Conflitos deverão ser declarados quando pessoas ou organizações possam beneficiar-se da:

- regra;
- priorização;
- ação;
- seleção de fornecedor;
- validação;
- auditoria;
- ocultação de falha.

## 677. Política de automação

A política deverá estabelecer:

- princípios;
- escopo;
- níveis;
- autoridade;
- responsabilidades;
- segurança;
- dados;
- supervisão;
- testes;
- evidências;
- exceções;
- encerramento.

## 678. Padrão de automação

O padrão poderá estabelecer requisitos comuns de:

- identidade;
- eventos;
- estados;
- logs;
- métricas;
- limites;
- kill switch;
- idempotência;
- versionamento;
- segurança;
- documentação.

## 679. Procedimento associado

Toda automação relevante deverá possuir relação com:

- runbook;
- playbook;
- procedimento;
- política;
- capacidade;
- serviço;
- processo.

## 680. Inventário oficial

O inventário deverá permitir reconhecer:

- automações vigentes;
- nível de autonomia;
- criticidade;
- proprietário;
- gatilho;
- alvos;
- dados;
- ferramentas;
- dependências;
- versão;
- última validação;
- estado.

## 681. Descoberta de automações não registradas

A organização deverá procurar:

- scripts pessoais;
- macros;
- agendas;
- integrações;
- bots;
- webhooks;
- funções;
- workflows;
- rotinas de fornecedor;
- automações locais.

## 682. Regularização

Automação não governada deverá ser:

- identificada;
- avaliada;
- documentada;
- limitada;
- testada;
- aprovada;
- incorporada;
- substituída;
- suspensa;

conforme o risco.

## 683. Automação órfã

Automações sem proprietário ou finalidade vigente deverão ser suspensas e avaliadas para encerramento seguro.

## 684. Classificação de criticidade

A criticidade deverá considerar:

- impacto;
- autonomia;
- alcance;
- irreversibilidade;
- dados;
- direitos;
- custo;
- dependências;
- segurança;
- continuidade.

## 685. Classificação por impacto

A automação poderá ser classificada como:

- baixo impacto;
- moderada;
- elevada;
- crítica;
- extraordinária.

## 686. Classe de decisão

Deverá ser distinguida automação que:

- observa;
- recomenda;
- prepara;
- decide dentro de regra;
- executa;
- altera direitos;
- movimenta recursos;
- coordena organizações;
- controla ambiente físico.

## 687. Avaliação de risco

Antes da aprovação, deverão ser avaliados:

- finalidade;
- necessidade;
- erro;
- abuso;
- falha;
- viés;
- segurança;
- privacidade;
- disponibilidade;
- fornecedor;
- reversibilidade;
- efeito humano.

## 688. Análise de impacto algorítmico

Automações que afetem pessoas ou direitos deverão avaliar:

- públicos;
- benefícios;
- riscos;
- desigualdades;
- dados;
- explicabilidade;
- contestabilidade;
- supervisão;
- reparação;
- monitoramento.

## 689. Risco sistêmico

A automação poderá gerar impacto amplo por:

- velocidade;
- escala;
- concentração;
- propagação;
- dependência comum;
- regra errada;
- modelo incorreto;
- fornecedor único;
- ação simultânea.

## 690. Risco de concentração

Deverá ser avaliada concentração em:

- plataforma;
- modelo;
- administrador;
- região;
- provedor;
- agente;
- identidade;
- dado;
- ferramenta;
- organização.

## 691. Risco de dependência cognitiva

A organização não deverá perder a capacidade humana de:

- compreender;
- decidir;
- executar;
- supervisionar;
- recuperar;
- contestar;

por dependência excessiva da automação.

## 692. Preservação da competência humana

Atividades críticas deverão possuir:

- treinamento;
- exercícios manuais;
- documentação;
- sucessores;
- operação alternativa;
- revisão humana;
- conhecimento institucional.

## 693. Aceitação de risco

A aceitação deverá registrar:

- risco;
- impacto;
- autoridade;
- duração;
- justificativa;
- controles;
- limitações;
- revisão;
- condição de encerramento.

## 694. Risco não aceitável por conveniência

Riscos sobre vida, dignidade, direitos ou legalidade não deverão ser aceitos apenas para:

- reduzir custo;
- aumentar velocidade;
- ampliar escala;
- evitar contratação;
- preservar aparência de inovação.

## 695. Exceção

Toda exceção deverá possuir:

- requisito;
- motivo;
- escopo;
- autoridade;
- validade;
- risco;
- compensação;
- monitoramento;
- regularização;
- encerramento.

## 696. Exceção não autônoma

A própria automação não deverá conceder a si mesma exceção aos limites que a governam.

## 697. Segurança por desenho

A segurança deverá ser incorporada desde:

- concepção;
- seleção de tecnologia;
- arquitetura;
- implementação;
- teste;
- implantação;
- execução;
- atualização;
- encerramento.

## 698. Modelo de ameaça

A automação deverá considerar ameaças como:

- abuso de credencial;
- escalada de privilégio;
- injeção;
- evento forjado;
- dado manipulado;
- ferramenta comprometida;
- alteração de modelo;
- vazamento;
- sabotagem;
- negação de serviço;
- apagamento de evidência.

## 699. Identidade da automação

A identidade deverá ser:

- única;
- autenticável;
- revogável;
- limitada;
- monitorada;
- relacionada ao proprietário;
- separada de identidades humanas.

## 700. Proibição de identidade genérica

Identidades compartilhadas ou genéricas deverão ser evitadas porque reduzem atribuição e revogação.

## 701. Autenticação

A automação deverá autenticar:

- eventos;
- sistemas;
- ferramentas;
- organizações;
- agentes;
- operadores;
- fontes de dados;

conforme o risco.

## 702. Autorização

A autorização deverá verificar:

- sujeito;
- ação;
- alvo;
- ambiente;
- organização;
- tempo;
- estado;
- impacto;
- política.

## 703. Menor privilégio

A automação deverá receber somente permissões necessárias.

## 704. Privilégio temporário

Permissões elevadas deverão ser concedidas:

- sob demanda;
- pelo tempo necessário;
- com aprovação;
- com registro;
- com revogação automática;
- com revisão.

## 705. Segregação de ambientes

Deverão ser separados, conforme o risco:

- desenvolvimento;
- teste;
- homologação;
- simulação;
- produção;
- recuperação;
- contingência.

## 706. Credenciais por ambiente

Credenciais não deverão ser reutilizadas indiscriminadamente entre ambientes.

## 707. Gestão de segredos

Segredos deverão ser:

- armazenados em mecanismo protegido;
- entregues no momento necessário;
- limitados;
- rotacionados;
- revogados;
- monitorados;
- excluídos de código, logs e prompts.

## 708. Exposição em memória

Agentes não deverão preservar segredos em memória além da necessidade operacional.

## 709. Segurança de código

O código deverá passar por:

- revisão;
- análise;
- teste;
- controle de dependências;
- verificação de integridade;
- versionamento;
- assinatura, quando aplicável;
- proteção de repositório.

## 710. Segurança da cadeia de suprimentos

Deverão ser avaliados:

- bibliotecas;
- imagens;
- modelos;
- plugins;
- ferramentas;
- repositórios;
- artefatos;
- fornecedores;
- atualizações;
- assinaturas.

## 711. Origem confiável

Componentes deverão ser obtidos de fontes reconhecidas e verificados antes da utilização.

## 712. Dependência vulnerável

A descoberta deverá produzir:

- avaliação;
- prioridade;
- correção;
- mitigação;
- teste;
- evidência;
- atualização do inventário.

## 713. Vulnerabilidade sem correção imediata

Deverão existir:

- controle compensatório;
- limitação;
- monitoramento;
- risco registrado;
- prazo;
- autoridade;
- revisão.

## 714. Segurança de eventos

Eventos deverão ser protegidos contra:

- falsificação;
- repetição;
- alteração;
- espionagem;
- perda;
- atraso;
- injeção;
- destino incorreto.

## 715. Segurança de ferramentas

Ferramentas deverão possuir:

- escopo;
- validação de parâmetros;
- limites;
- autenticação;
- logs;
- timeout;
- tratamento de erro;
- proteção contra comando indevido.

## 716. Segurança do kill switch

O mecanismo deverá ser protegido contra uso indevido sem tornar-se inacessível em emergência.

## 717. Independência do kill switch

Automações críticas poderão exigir interrupção por caminho independente do mecanismo principal.

## 718. Segurança dos logs

Logs deverão ser protegidos contra:

- alteração;
- exclusão;
- acesso indevido;
- exposição de segredo;
- perda;
- retenção excessiva.

## 719. Privacidade por desenho

A automação deverá considerar desde o início:

- finalidade;
- necessidade;
- minimização;
- base legítima;
- transparência;
- segurança;
- direitos;
- retenção;
- eliminação.

## 720. Minimização de dados

A automação deverá utilizar somente os dados necessários para executar sua finalidade.

## 721. Dados sensíveis

O tratamento deverá possuir controles reforçados para:

- acesso;
- modelo;
- ferramenta;
- compartilhamento;
- armazenamento;
- logs;
- memória;
- retenção;
- eliminação.

## 722. Dados para treinamento

Dados operacionais não deverão ser utilizados para treinar ou aperfeiçoar modelos externos sem:

- finalidade;
- autoridade;
- avaliação;
- proteção;
- contrato;
- transparência;
- minimização;
- conformidade.

## 723. Dados sintéticos

Dados sintéticos poderão ser utilizados em testes, desde que sejam representativos e não permitam reconstrução indevida de pessoas reais.

## 724. Anonimização e pseudonimização

Esses mecanismos deverão ser avaliados quanto à possibilidade de reidentificação.

## 725. Compartilhamento

O compartilhamento deverá indicar:

- destinatário;
- finalidade;
- dados;
- duração;
- segurança;
- uso permitido;
- eliminação;
- evidência.

## 726. Transparência

Pessoas afetadas deverão compreender, quando aplicável:

- que há automação;
- qual sua finalidade;
- quais dados utiliza;
- qual efeito produz;
- como solicitar ajuda;
- como contestar;
- como corrigir.

## 727. Decisão exclusivamente automatizada

Decisões de alto impacto não deverão ser exclusivamente automatizadas quando lei, norma, política, ética ou risco exigirem participação humana.

## 728. Contestabilidade

Deverão existir mecanismos para:

- questionar;
- revisar;
- corrigir;
- suspender;
- reparar;
- registrar;
- aprender.

## 729. Revisão humana independente

A revisão deverá ser significativa e não apenas confirmar a saída original.

## 730. Retenção de dados

A retenção deverá considerar:

- finalidade;
- obrigação;
- auditoria;
- contestação;
- segurança;
- aprendizagem;
- minimização;
- eliminação.

## 731. Eliminação

A eliminação deverá alcançar, conforme aplicável:

- banco;
- fila;
- cache;
- memória;
- log;
- exportação;
- cópia;
- ferramenta externa;
- modelo derivado, quando cabível.

## 732. Soberania

A automação deverá respeitar:

- organização proprietária;
- território;
- jurisdição;
- residência;
- autoridade;
- contrato;
- autonomia;
- direitos.

## 733. Residência de dados

A utilização de regiões, modelos e fornecedores deverá considerar os requisitos aplicáveis de localização e transferência.

## 734. Automação transfronteiriça

Deverão ser avaliados:

- jurisdições;
- acesso;
- subcontratados;
- transferência;
- criptografia;
- direitos;
- auditoria;
- saída.

## 735. Leis e normas como linha guia

A Plataforma UNO deverá utilizar leis, regulamentos, normas técnicas e Normas Regulamentadoras como orientações desde a concepção.

Ela não deverá automatizar primeiro para depois buscar enquadramento.

## 736. Matriz normativa

Cada automação relevante deverá relacionar:

- requisito;
- origem;
- território;
- função;
- ação;
- controle;
- responsável;
- evidência;
- periodicidade;
- situação.

## 737. Normas técnicas

Normas aplicáveis poderão orientar:

- segurança;
- qualidade;
- inteligência artificial;
- gestão de risco;
- privacidade;
- continuidade;
- software;
- máquinas;
- instalações;
- auditoria.

## 738. Normas Regulamentadoras

Automações que controlem ou orientem trabalho físico deverão incorporar as NRs aplicáveis.

## 739. Automação em eletricidade

Deverá considerar, conforme aplicável:

- desenergização;
- bloqueio;
- impedimento de reenergização;
- verificação;
- aterramento;
- proteção;
- habilitação;
- emergência;
- sinalização;
- documentação.

## 740. Automação de máquinas

Deverá considerar:

- intertravamento;
- zona de risco;
- parada de emergência;
- proteção;
- manutenção;
- rearme;
- presença humana;
- falha segura;
- inspeção.

## 741. Responsabilidade profissional

A automação não deverá substituir profissional habilitado quando sua participação for legal ou tecnicamente obrigatória.

## 742. Mudança normativa

A mudança deverá acionar:

- análise de impacto;
- identificação de automações;
- atualização de regras;
- revisão de procedimentos;
- teste;
- aprovação;
- comunicação;
- evidência.

## 743. Conformidade contínua

A conformidade deverá ser monitorada durante todo o ciclo de vida, e não apenas na aprovação inicial.

## 744. Não conformidade

A não conformidade deverá produzir:

- registro;
- classificação;
- contenção;
- correção;
- responsável;
- prazo;
- validação;
- evidência;
- encerramento.

## 745. Ciclo de vida da automação

A automação deverá atravessar:

1. proposta;
2. análise;
3. desenho;
4. implementação;
5. teste;
6. aprovação;
7. implantação;
8. operação;
9. monitoramento;
10. revisão;
11. substituição;
12. desativação;
13. arquivamento.

## 746. Proposta

A proposta deverá indicar:

- necessidade;
- propósito;
- processo;
- benefício;
- impacto;
- risco;
- nível desejado;
- dados;
- proprietário;
- alternativa não automatizada.

## 747. Análise de necessidade

Deverá verificar se a atividade deve ser:

- eliminada;
- simplificada;
- corrigida;
- documentada;
- assistida;
- automatizada;
- mantida humana.

## 748. Desenho

O desenho deverá definir:

- arquitetura;
- estados;
- gatilhos;
- regras;
- ferramentas;
- dados;
- limites;
- falhas;
- interrupção;
- reversão;
- evidências.

## 749. Implementação

A implementação deverá utilizar:

- repositório;
- versionamento;
- revisão;
- testes;
- documentação;
- ambientes separados;
- segurança;
- rastreabilidade.

## 750. Aprovação

A aprovação deverá avaliar:

- finalidade;
- risco;
- segurança;
- conformidade;
- testes;
- nível de autonomia;
- supervisão;
- reversão;
- impacto humano;
- responsabilidade.

## 751. Implantação

A implantação deverá ser:

- gradual;
- observável;
- reversível;
- comunicada;
- relacionada a versão;
- acompanhada de plano;
- limitada por critérios.

## 752. Operação

A operação deverá acompanhar:

- execuções;
- falhas;
- custos;
- intervenções;
- deriva;
- resultados;
- impactos;
- riscos.

## 753. Revisão periódica

A revisão deverá considerar:

- necessidade;
- eficácia;
- risco;
- versão;
- dependências;
- modelo;
- política;
- lei;
- fornecedor;
- desempenho;
- uso.

## 754. Gatilhos de revisão extraordinária

Deverão incluir:

- incidente;
- quase falha;
- mudança de modelo;
- alteração de fornecedor;
- mudança de ferramenta;
- expansão de escopo;
- nova organização;
- alteração normativa;
- comportamento anormal;
- contestação relevante.

## 755. Suspensão

A automação deverá ser suspensa quando:

- houver risco;
- perder proprietário;
- ultrapassar limites;
- apresentar falha crítica;
- perder observabilidade;
- utilizar versão inválida;
- perder autoridade;
- tornar-se não conforme.

## 756. Efeito da suspensão

A suspensão deverá:

- impedir novas execuções;
- tratar execuções ativas;
- preservar estado;
- comunicar;
- manter evidências;
- ativar alternativa;
- iniciar análise.

## 757. Substituição

A substituição deverá preservar:

- regras;
- histórico;
- dados;
- procedimentos;
- identidade institucional;
- evidências;
- plano de transição;
- possibilidade de retorno.

## 758. Desativação

A desativação deverá tratar:

- agendas;
- gatilhos;
- identidades;
- chaves;
- integrações;
- filas;
- dados;
- recursos;
- documentação;
- pendências;
- evidências.

## 759. Automação zumbi

Automações teoricamente desativadas não deverão continuar executando por:

- agenda esquecida;
- webhook;
- token ativo;
- agente;
- réplica;
- ambiente antigo;
- integração de fornecedor.

## 760. Verificação de desativação

Deverá confirmar:

- ausência de execução;
- revogação;
- remoção de gatilhos;
- encerramento de filas;
- tratamento de dados;
- atualização de catálogo;
- preservação histórica.

## 761. Arquivamento

Deverão ser preservados:

- código;
- versão;
- configuração;
- documentação;
- aprovações;
- testes;
- execuções;
- incidentes;
- motivo de encerramento;
- aprendizados.

## 762. Fornecedores

Fornecedores deverão ser governados desde:

- seleção;
- contratação;
- integração;
- operação;
- mudança;
- incidente;
- saída;
- encerramento.

## 763. Due diligence

Deverá avaliar:

- tecnologia;
- segurança;
- privacidade;
- disponibilidade;
- modelos;
- dados;
- subcontratados;
- conformidade;
- continuidade;
- suporte;
- portabilidade.

## 764. Responsabilidade compartilhada

O contrato deverá definir o que cabe:

- ao fornecedor;
- à Plataforma UNO;
- à organização;
- ao operador;
- ao usuário;
- ao parceiro.

## 765. Mudança unilateral do fornecedor

A organização deverá conhecer se o fornecedor pode alterar:

- modelo;
- comportamento;
- preço;
- limite;
- região;
- retenção;
- termos;
- ferramentas;
- segurança.

## 766. Notificação de mudança

Mudanças relevantes deverão produzir avaliação antes da continuidade de uso crítico.

## 767. Direito de auditoria

Quando proporcional, deverá ser possível solicitar:

- evidências;
- relatórios;
- testes;
- incidentes;
- subcontratados;
- controles;
- eliminação;
- continuidade;
- correções.

## 768. Portabilidade

A organização deverá preservar capacidade de migrar:

- código;
- workflows;
- dados;
- políticas;
- instruções;
- memória autorizada;
- avaliações;
- evidências;
- integrações.

## 769. Estratégia de saída

A saída deverá indicar:

- alternativa;
- prazo;
- exportação;
- validação;
- transição;
- revogação;
- eliminação;
- continuidade;
- comunicação;
- encerramento.

## 770. Falência ou indisponibilidade do fornecedor

A arquitetura deverá possuir alternativas proporcionais para não perder:

- conhecimento;
- dados;
- operação;
- autoridade;
- evidências;
- capacidade de recuperação.

## 771. Dependência múltipla aparente

Fornecedores distintos poderão compartilhar:

- infraestrutura;
- modelo;
- nuvem;
- subcontratado;
- identidade;
- rede;
- região.

Essa concentração deverá ser reconhecida.

## 772. Evidência da automação

A evidência deverá demonstrar:

- gatilho;
- versão;
- autoridade;
- dados;
- decisão;
- ação;
- resultado;
- falha;
- intervenção;
- encerramento.

## 773. Proveniência

A proveniência deverá permitir reconstruir:

- origem;
- transformação;
- agente;
- ferramenta;
- modelo;
- regra;
- executor;
- horário;
- destino.

## 774. Evidência de modelo

Quando relevante, deverá registrar:

- modelo;
- versão;
- configuração;
- instrução;
- ferramentas;
- dados contextuais;
- resultado;
- confiança;
- limitações.

## 775. Evidência de supervisão

Deverá registrar:

- supervisor;
- contexto apresentado;
- decisão;
- intervenção;
- tempo;
- resultado;
- justificativa.

## 776. Evidência de contestação

Deverá preservar:

- pessoa ou organização;
- decisão questionada;
- fundamento;
- revisão;
- correção;
- resposta;
- prazo;
- resultado.

## 777. Evidência de revogação

Deverá indicar:

- autoridade;
- motivo;
- alvo;
- escopo;
- horário;
- efeito;
- confirmações;
- pendências.

## 778. Integridade das evidências

As evidências deverão ser protegidas contra:

- alteração;
- exclusão;
- fabricação;
- acesso indevido;
- perda;
- correlação incorreta;
- retenção inadequada.

## 779. Evidência negativa

Falhas, incertezas, recusas, bloqueios, reversões e intervenções deverão permanecer registradas.

## 780. Retenção das evidências

A retenção deverá considerar:

- criticidade;
- impacto;
- obrigação;
- contestação;
- auditoria;
- segurança;
- privacidade;
- aprendizagem.

## 781. Auditoria da automação

A auditoria deverá avaliar:

- propósito;
- proprietário;
- autoridade;
- código;
- dados;
- regras;
- modelo;
- ferramentas;
- segurança;
- execuções;
- resultados;
- evidências.

## 782. Auditoria de decisão

Deverá verificar:

- entrada;
- contexto;
- critério;
- autoridade;
- resultado;
- impacto;
- possibilidade de contestação;
- correção.

## 783. Auditoria de código e configuração

Deverá avaliar:

- versão;
- alteração;
- aprovação;
- dependências;
- segredos;
- testes;
- implantação;
- integridade;
- rollback.

## 784. Auditoria de dados

Deverá avaliar:

- origem;
- qualidade;
- autorização;
- minimização;
- viés;
- retenção;
- compartilhamento;
- correção;
- eliminação.

## 785. Auditoria de agentes

Deverá avaliar:

- identidade;
- papel;
- instruções;
- memória;
- ferramentas;
- autonomia;
- supervisão;
- comportamento;
- falhas;
- revogação.

## 786. Auditoria federada

Deverá respeitar:

- escopo;
- contrato;
- autonomia;
- soberania;
- segurança;
- dados;
- responsabilidade;
- evidência suficiente.

## 787. Achado

Cada achado deverá indicar:

- condição;
- requisito;
- evidência;
- risco;
- impacto;
- causa;
- responsável;
- ação;
- prazo;
- validação.

## 788. Ação corretiva

A correção deverá ser comprovada por:

- revisão;
- teste;
- execução controlada;
- observação;
- evidência;
- aprovação.

## 789. Prestação de contas

A organização deverá conseguir explicar:

- por que automatizou;
- quem autorizou;
- qual versão atuou;
- quais dados utilizou;
- quais ações executou;
- quem foi afetado;
- qual resultado produziu;
- como corrigiu falhas.

## 790. Transparência proporcional

A transparência deverá fornecer informação suficiente sem expor:

- segredos;
- vulnerabilidades;
- dados indevidos;
- investigação;
- segurança;
- direitos de terceiros.

## 791. Painel de governança

O painel poderá apresentar:

- automações;
- proprietários;
- níveis de autonomia;
- criticidade;
- execuções;
- falhas;
- intervenções;
- custos;
- riscos;
- auditorias;
- revisões;
- fornecedores.

## 792. Indicadores de governança

Poderão incluir:

- automações inventariadas;
- automações órfãs;
- revisões vencidas;
- modelos atualizados sem avaliação;
- acessos excessivos;
- testes pendentes;
- fornecedores sem saída;
- exceções vencidas;
- ações corretivas atrasadas.

## 793. Antipadrões de governança

Constituem antipadrões:

- automação sem proprietário;
- código sem relação com procedimento;
- agente com identidade compartilhada;
- privilégio permanente;
- modelo alterado sem teste;
- dado utilizado sem finalidade;
- fornecedor tratado como autoridade;
- exceção concedida pela própria automação;
- auditoria apenas documental;
- kill switch não testado;
- desativação incompleta;
- evidência controlada exclusivamente pelo executor;
- conformidade buscada somente após a implantação.

## 794. Invariantes do Lote 5

Permanecem como invariantes:

- toda automação possuirá proprietário;
- toda autoridade possuirá fundamento;
- toda identidade será revogável;
- todo privilégio será mínimo;
- todo segredo será protegido;
- toda mudança crítica será testada;
- todo modelo será versionado;
- toda decisão de alto impacto será contestável quando aplicável;
- toda exceção terá validade;
- toda suspensão impedirá novas execuções;
- toda desativação eliminará gatilhos residuais;
- todo fornecedor possuirá responsabilidade definida;
- toda automação crítica possuirá estratégia de saída;
- toda evidência preservará proveniência;
- toda auditoria avaliará a prática;
- leis, normas e NRs orientarão a automação desde sua concepção;
- nenhuma automação poderá se colocar acima da Engenharia Oficial.

## 795. Garantias esperadas

A aplicação deste lote deverá garantir que:

- automações sejam governadas;
- responsabilidades sejam atribuídas;
- acessos sejam limitados;
- modelos sejam controlados;
- dados sejam protegidos;
- fornecedores sejam substituíveis;
- decisões possam ser revistas;
- automações possam ser suspensas;
- evidências possam ser auditadas;
- mudanças sejam rastreáveis;
- riscos sejam conhecidos;
- encerramentos sejam completos.

## 796. Resultado esperado do Lote 5

Ao final desta etapa, a Plataforma UNO deverá possuir um sistema de automação:

- legítimo;
- seguro;
- responsável;
- normativo;
- auditável;
- contestável;
- reversível;
- sustentável;
- transmissível;
- governado por propósito.

## 797. Transição para o Lote 6

O lote final deverá demonstrar como as automações serão:

- testadas;
- simuladas;
- observadas;
- comparadas;
- medidas;
- corrigidas;
- promovidas;
- rebaixadas;
- auditadas;
- amadurecidas;
- transformadas em aprendizagem institucional.

Somente evidências produzidas pela prática poderão sustentar confiança proporcional na automação operacional e na auto-remediação.

---

# Lote 6 — Testes, Métricas, Maturidade, Aprendizagem e Encerramento

## 798. Automação não presumida

A existência de código, workflow, agente, modelo, script ou mecanismo de auto-remediação não comprova que a automação:

- funciona;
- possui autoridade;
- reconhece o contexto;
- respeita limites;
- produz o resultado esperado;
- permanece segura;
- pode ser interrompida;
- pode ser revertida;
- preserva evidências;
- serve ao propósito.

A capacidade automatizada deverá ser demonstrada.

## 799. Teste como prova operacional

Os testes deverão verificar a correspondência entre:

- finalidade;
- gatilho;
- entrada;
- estado;
- decisão;
- ação;
- resultado;
- limite;
- evidência;
- impacto real.

## 800. Programa permanente de testes

A Plataforma UNO deverá manter programa de testes de automações e auto-remediações.

O programa deverá definir:

- escopo;
- criticidade;
- modalidades;
- ambientes;
- periodicidade;
- responsáveis;
- critérios;
- evidências;
- ações corretivas;
- promoção;
- suspensão;
- revisão.

## 801. Proporcionalidade dos testes

A profundidade deverá aumentar conforme:

- autonomia;
- impacto;
- irreversibilidade;
- abrangência;
- dados;
- direitos;
- custo;
- criticidade;
- incerteza;
- dependências.

## 802. Cobertura

Os testes deverão cobrir:

- gatilhos;
- eventos;
- dados;
- estados;
- regras;
- decisões;
- workflows;
- ferramentas;
- agentes;
- limites;
- falhas;
- interrupções;
- reversões;
- evidências;
- encerramentos.

## 803. Ambiente de teste

O ambiente deverá ser representativo e isolado o suficiente para impedir:

- impacto produtivo;
- exposição;
- pagamento;
- comunicação indevida;
- alteração de pessoas;
- propagação;
- conflito;
- modificação de evidência real.

## 804. Separação de ambientes

Deverão ser distinguidos:

- desenvolvimento;
- teste;
- homologação;
- simulação;
- produção;
- recuperação;
- contingência.

## 805. Dados de teste

Os dados deverão ser:

- sintéticos;
- autorizados;
- minimizados;
- protegidos;
- representativos;
- versionados, quando necessário;
- eliminados conforme política.

## 806. Dados reais em teste

O uso de dados reais somente deverá ocorrer quando:

- necessário;
- autorizado;
- protegido;
- minimizado;
- isolado;
- registrado;
- compatível com a finalidade.

## 807. Sinalização de simulação

Toda automação executada em cenário fictício deverá apresentar:

**SIMULAÇÃO**

Essa marcação deverá aparecer em:

- eventos;
- interfaces;
- painéis;
- logs;
- mensagens;
- alertas;
- relatórios;
- evidências.

## 808. Separação entre simulado e real

A simulação não deverá:

- gerar efeito externo real;
- alterar indicador de produção;
- mobilizar autoridade indevida;
- executar pagamento;
- enviar comunicação pública;
- modificar direito;
- contaminar memória operacional real.

## 809. Incidente real durante teste

Caso ocorra incidente real:

- a simulação deverá ser suspensa, quando necessário;
- a realidade deverá ser declarada;
- os registros deverão ser separados;
- as prioridades deverão ser revistas;
- os recursos deverão ser redirecionados;
- a autoridade deverá ser informada.

## 810. Plano de teste

O plano deverá conter:

- identificador;
- automação;
- versão;
- propósito;
- escopo;
- cenário;
- ambiente;
- dados;
- participantes;
- autoridade;
- riscos;
- controles;
- critérios;
- evidências;
- encerramento.

## 811. Critérios de sucesso

Os critérios deverão ser definidos antes da execução.

Poderão incluir:

- gatilho reconhecido;
- alvo correto;
- ação autorizada;
- limite preservado;
- resultado funcional;
- segurança;
- ausência de impacto indevido;
- evidência;
- reversão;
- encerramento.

## 812. Critérios de suspensão

O teste deverá ser interrompido quando:

- perder isolamento;
- alcançar alvo real;
- expor dados;
- produzir risco humano;
- ultrapassar limite;
- perder observabilidade;
- surgir incidente real;
- exceder autoridade;
- gerar efeito externo indevido.

## 813. Teste unitário

O teste unitário deverá verificar componentes isolados como:

- regra;
- função;
- cálculo;
- transformação;
- validação;
- limite;
- decisão;
- erro.

## 814. Teste de contrato

Deverá verificar compatibilidade entre:

- eventos;
- APIs;
- dados;
- ferramentas;
- agentes;
- organizações;
- versões;
- fornecedores.

## 815. Teste de integração

Deverá avaliar se os componentes cooperam preservando:

- identidade;
- estado;
- ordem;
- dados;
- autoridade;
- segurança;
- evidências;
- tratamento de falha.

## 816. Teste de workflow

O workflow deverá ser testado em:

- caminho principal;
- caminhos alternativos;
- aprovação;
- rejeição;
- timeout;
- cancelamento;
- pausa;
- retomada;
- falha;
- encerramento.

## 817. Teste ponta a ponta

O teste deverá percorrer desde o gatilho até o resultado validado.

Ele deverá incluir:

- evento;
- decisão;
- execução;
- dependências;
- comunicação;
- evidências;
- reversão, quando aplicável;
- encerramento.

## 818. Teste de gatilho

Deverá avaliar:

- evento correto;
- evento duplicado;
- evento atrasado;
- evento fora de ordem;
- evento forjado;
- evento ausente;
- evento incompatível;
- evento sem autoridade.

## 819. Teste de entrada

Deverá incluir:

- dado válido;
- dado ausente;
- dado inválido;
- dado contraditório;
- dado obsoleto;
- dado excessivo;
- dado sensível;
- formato inesperado.

## 820. Teste de esquema

Deverá confirmar se a automação:

- aceita versões compatíveis;
- rejeita versões incompatíveis;
- preserva campos;
- trata ausência;
- registra erro;
- evita interpretação silenciosa.

## 821. Teste de estado

A automação deverá ser testada diante de:

- estado esperado;
- estado diferente;
- estado desconhecido;
- estado em transição;
- estado concorrente;
- estado corrompido;
- estado obsoleto.

## 822. Teste de transição

Cada transição deverá ser verificada quanto a:

- condição;
- autoridade;
- evento;
- ação;
- destino;
- evidência;
- falha.

## 823. Teste de transição inválida

A automação deverá bloquear e registrar transições proibidas.

## 824. Teste de regra

As regras deverão ser verificadas nos:

- limites;
- extremos;
- valores nulos;
- combinações;
- exceções;
- conflitos;
- contextos diferentes.

## 825. Teste de decisão probabilística

Deverá avaliar:

- precisão;
- confiança;
- falso positivo;
- falso negativo;
- calibração;
- estabilidade;
- contexto;
- impacto;
- explicabilidade.

## 826. Teste de viés

O desempenho deverá ser comparado entre:

- pessoas;
- grupos;
- territórios;
- organizações;
- condições;
- níveis de acesso;
- situações de vulnerabilidade.

## 827. Teste de contestabilidade

Deverá confirmar se uma pessoa afetada consegue:

- compreender;
- questionar;
- solicitar revisão;
- corrigir informação;
- receber resposta;
- obter reparação, quando aplicável.

## 828. Teste de ferramenta

Cada ferramenta deverá ser avaliada quanto a:

- autenticação;
- autorização;
- parâmetros;
- timeout;
- retorno;
- erro;
- limite;
- segurança;
- logs;
- revogação.

## 829. Teste de comando destrutivo

Deverá confirmar:

- alvo;
- escopo;
- autoridade;
- dupla confirmação;
- backup;
- dry run;
- limite;
- reversão ou compensação;
- evidência.

## 830. Teste de menor privilégio

A automação deverá executar com permissões mínimas e falhar quando tentar ação fora do escopo.

## 831. Teste de credencial expirada

Deverá confirmar:

- detecção;
- interrupção;
- alerta;
- renovação governada;
- ausência de fallback inseguro;
- evidência.

## 832. Teste de revogação

A revogação deverá impedir novas ações e encerrar acessos ativos conforme a política.

## 833. Teste do kill switch

O mecanismo deverá ser testado quanto a:

- identidade;
- autoridade;
- disponibilidade;
- tempo;
- abrangência;
- bloqueio de nova execução;
- preservação de estado;
- evidência.

## 834. Teste de independência do kill switch

Quando necessário, o teste deverá confirmar que a interrupção funciona mesmo quando o sistema principal estiver comprometido ou indisponível.

## 835. Teste de pausa

A pausa deverá preservar:

- estado;
- contexto;
- bloqueios necessários;
- autoridade;
- evidências;
- condição de retomada.

## 836. Teste de retomada

Deverá verificar se a automação:

- reavalia o contexto;
- confirma a versão;
- reconhece mudanças;
- evita duplicidade;
- preserva a autoridade;
- retoma do ponto correto.

## 837. Teste de cancelamento

O cancelamento deverá:

- impedir novas ações;
- tratar tarefas pendentes;
- liberar recursos;
- preservar evidências;
- produzir estado terminal;
- comunicar.

## 838. Teste de timeout

Deverá avaliar se a automação:

- reconhece a expiração;
- não presume cancelamento externo;
- consulta o estado;
- evita repetição indevida;
- escala;
- registra.

## 839. Teste de retentativa

Deverá confirmar:

- erros elegíveis;
- limite;
- intervalo;
- backoff;
- jitter;
- idempotência;
- escalonamento;
- encerramento.

## 840. Teste de repetição infinita

O exercício deverá demonstrar que loops são interrompidos antes de produzir dano acumulado.

## 841. Teste de circuit breaker

Deverá verificar:

- abertura;
- bloqueio;
- espera;
- estado semiaberto;
- teste de retorno;
- fechamento;
- alerta;
- intervenção.

## 842. Teste de oscilação

A automação deverá ser submetida a sinais próximos aos limiares para avaliar:

- histerese;
- cooldown;
- estabilidade;
- quantidade de ações;
- prevenção de alternância.

## 843. Teste de fila

Deverá avaliar:

- capacidade;
- prioridade;
- ordem;
- atraso;
- saturação;
- rejeição;
- dead-letter;
- recuperação;
- reprocessamento.

## 844. Teste de idempotência

A repetição com o mesmo identificador não deverá produzir efeito adicional indevido.

## 845. Teste de concorrência

Execuções simultâneas deverão avaliar:

- bloqueio;
- corrida;
- sobrescrita;
- duplicidade;
- deadlock;
- ordenação;
- reconciliação.

## 846. Teste de carga

Deverá avaliar:

- volume;
- taxa;
- duração;
- latência;
- recursos;
- custo;
- fila;
- degradação;
- limites.

## 847. Teste de estresse

O teste deverá identificar o comportamento além da capacidade planejada.

A automação deverá falhar de forma controlada.

## 848. Teste de saturação

Deverá verificar se a automação:

- detecta limite;
- prioriza;
- reduz;
- rejeita;
- escala;
- comunica;
- recupera.

## 849. Teste de escala automática

Deverá avaliar:

- entrada;
- expansão;
- limite;
- custo;
- cooldown;
- redução;
- estabilidade;
- dependências.

## 850. Teste de canary

Deverá confirmar:

- seleção;
- escopo;
- métricas;
- duração;
- critério de avanço;
- critério de parada;
- reversão;
- evidências.

## 851. Teste de implantação progressiva

Cada etapa deverá ser validada antes da ampliação.

## 852. Teste de reversão

A reversão deverá ser exercitada quanto a:

- ponto de retorno;
- estado;
- dados;
- sequência;
- tempo;
- segurança;
- resultado;
- evidência.

## 853. Teste de falha da reversão

Deverá avaliar contenção e escalonamento quando o retorno não for possível.

## 854. Teste de compensação

A compensação deverá ser avaliada diante de efeitos que não possam ser apagados.

## 855. Teste de reconciliação

Deverá avaliar diferenças entre:

- bancos;
- filas;
- eventos;
- integrações;
- pagamentos;
- mensagens;
- organizações;
- ambientes;
- registros.

## 856. Teste de dependência indisponível

Deverão ser simuladas perdas de:

- rede;
- identidade;
- dados;
- ferramenta;
- provedor;
- região;
- fornecedor;
- supervisor;
- repositório;
- observabilidade.

## 857. Teste de perda de observabilidade

A automação deverá reduzir autonomia ou parar de forma segura.

## 858. Teste do monitor externo

Deverá confirmar que a falha da própria automação pode ser detectada independentemente.

## 859. Teste de auto-remediação

Deverá percorrer:

1. sinal;
2. detecção;
3. qualificação;
4. diagnóstico;
5. contenção;
6. correção;
7. validação;
8. observação;
9. encerramento;
10. aprendizagem.

## 860. Teste de diagnóstico incorreto

O exercício deverá avaliar se a automação evita ampliar dano quando a hipótese inicial estiver errada.

## 861. Teste de remediação falha

Deverá verificar:

- contenção;
- limite;
- reversão;
- escalonamento;
- evidência;
- redução de autonomia.

## 862. Teste de recorrência

A mesma condição deverá ser repetida para confirmar que a automação:

- reconhece recorrência;
- evita ciclo;
- reduz autonomia;
- solicita análise estrutural;
- não mascara o problema.

## 863. Teste de remediações conflitantes

A arquitetura deverá impedir ou coordenar ações incompatíveis.

## 864. Teste de remediação em cascata

Deverá avaliar efeitos sobre dependências e serviços relacionados.

## 865. Teste de operação degradada

A automação deverá confirmar:

- capacidade mínima;
- funções preservadas;
- limites;
- comunicação;
- duração;
- retorno;
- reconciliação.

## 866. Teste de retorno ao normal

Deverá avaliar:

- critérios;
- estabilidade;
- retirada de contenção;
- filas;
- dependências;
- segurança;
- reversão;
- comunicação.

## 867. Teste de agente

O agente deverá ser testado quanto a:

- propósito;
- instruções;
- contexto;
- memória;
- ferramentas;
- autoridade;
- incerteza;
- escalonamento;
- execução;
- evidência.

## 868. Teste adversarial

Deverá avaliar resistência a:

- instrução maliciosa;
- evento forjado;
- dado manipulado;
- tentativa de ampliar escopo;
- pedido de segredo;
- autoridade falsa;
- ferramenta indevida;
- ocultação de evidência.

## 869. Teste de memória

Deverá verificar:

- separação;
- retenção;
- correção;
- expiração;
- acesso;
- relação com fonte oficial;
- ausência de contaminação entre contextos.

## 870. Teste de alucinação operacional

O exercício deverá apresentar lacunas para confirmar que o agente não inventa:

- comando;
- recurso;
- autoridade;
- norma;
- resultado;
- contato;
- capacidade.

## 871. Teste de supervisão humana

Deverá confirmar que o supervisor consegue:

- compreender;
- acompanhar;
- intervir;
- pausar;
- revogar;
- corrigir;
- revisar.

## 872. Teste de confirmação significativa

A interface deverá apresentar contexto suficiente para impedir aprovação cega.

## 873. Teste de autonomia

Cada capacidade deverá ser testada no nível de autonomia pretendido.

## 874. Teste de redução de autonomia

Deverá confirmar que falhas ou mudanças rebaixam o agente para modo mais seguro.

## 875. Teste de revogação do agente

Deverá impedir novas ferramentas, ações, delegações e acessos.

## 876. Teste de múltiplos agentes

Deverá avaliar:

- papéis;
- delegações;
- contexto;
- conflito;
- profundidade;
- proveniência;
- validação;
- encerramento.

## 877. Teste de consenso incorreto

O exercício deverá confirmar que concordância entre agentes não substitui evidência independente.

## 878. Teste federado

Deverá avaliar:

- identidade;
- solicitação;
- aceitação;
- recusa;
- delegação;
- dados;
- execução;
- evidência;
- reconciliação;
- encerramento.

## 879. Teste de soberania

A automação deverá ser impedida de agir fora das fronteiras autorizadas.

## 880. Teste de fornecedor

Deverá avaliar:

- disponibilidade;
- suporte;
- mudança;
- acesso;
- dados;
- evidências;
- portabilidade;
- saída;
- continuidade;
- subcontratados.

## 881. Teste de indisponibilidade do fornecedor

A organização deverá demonstrar alternativa proporcional ou modo degradado.

## 882. Teste de portabilidade

Deverá comprovar a capacidade de transferir:

- código;
- workflow;
- configuração;
- dados;
- instruções;
- avaliações;
- evidências;
- operação.

## 883. Teste de desativação

Deverá confirmar:

- remoção de gatilhos;
- revogação de identidades;
- encerramento de filas;
- eliminação ou preservação de dados;
- ausência de execução residual;
- atualização do inventário.

## 884. Evidência mínima dos testes

A evidência deverá registrar:

- automação;
- versão;
- ambiente;
- dados;
- cenário;
- autoridade;
- ações;
- resultados;
- falhas;
- intervenções;
- conclusão.

## 885. Evidência negativa

Resultados falhos, inconclusivos, revertidos ou bloqueados deverão permanecer preservados.

## 886. Falha do teste

A falha deverá produzir:

- classificação;
- risco;
- contenção;
- responsável;
- ação corretiva;
- prazo;
- novo teste;
- evidência.

## 887. Gravidade da falha

Deverá considerar:

- autonomia;
- impacto;
- abrangência;
- recorrência;
- irreversibilidade;
- direitos;
- segurança;
- ausência de alternativa;
- obrigação.

## 888. Suspensão após falha

Falhas críticas deverão suspender ou reduzir a automação até análise e correção.

## 889. Análise de causa

A análise deverá considerar:

- requisito;
- regra;
- código;
- dado;
- modelo;
- ferramenta;
- integração;
- configuração;
- supervisão;
- governança;
- contexto.

## 890. Plano de ação corretiva

Deverá indicar:

- problema;
- causa;
- impacto;
- prioridade;
- responsável;
- recurso;
- prazo;
- correção;
- validação;
- teste de confirmação.

## 891. Regressão

A correção deverá ser testada para evitar novos problemas em:

- outros caminhos;
- outros ambientes;
- outras organizações;
- segurança;
- desempenho;
- acessibilidade;
- reversão.

## 892. Shadow mode após correção

Automações corrigidas poderão retornar primeiro em modo de observação ou recomendação.

## 893. Promoção gradual

A autonomia somente deverá ser ampliada após evidências suficientes.

## 894. Frequência de testes

A frequência deverá considerar:

- criticidade;
- mudança;
- uso;
- falha;
- modelo;
- fornecedor;
- autonomia;
- dados;
- norma;
- tempo desde a última comprovação.

## 895. Teste contínuo

Verificações seguras poderão ocorrer continuamente para detectar:

- deriva;
- falha;
- perda de acesso;
- mudança de contrato;
- dependência;
- comportamento anormal;
- degradação.

## 896. Métricas de inventário

Poderão incluir:

- automações existentes;
- automações órfãs;
- automações por nível;
- automações não comprovadas;
- automações suspensas;
- automações sem kill switch;
- revisões vencidas.

## 897. Métricas de execução

Poderão incluir:

- execuções;
- sucesso;
- falha;
- reversão;
- cancelamento;
- intervenção;
- tempo;
- custo;
- volume;
- impacto.

## 898. Métricas de auto-remediação

Poderão incluir:

- condições detectadas;
- remediações;
- contenções;
- recorrências;
- falsos positivos;
- falsos negativos;
- tempo de recuperação;
- escalonamentos.

## 899. Métricas de autonomia

Poderão incluir:

- decisões automáticas;
- confirmações;
- recusas;
- intervenções;
- revogações;
- rebaixamentos;
- promoções;
- violações de limite.

## 900. Métricas de supervisão

Poderão incluir:

- execuções por supervisor;
- tempo de resposta;
- alertas ignorados;
- intervenções;
- carga;
- handovers;
- falhas de confirmação;
- capacidade disponível.

## 901. Métricas humanas

Poderão incluir:

- redução de trabalho repetitivo;
- incidentes evitados;
- carga cognitiva;
- treinamento;
- satisfação;
- contestação;
- erro;
- acessibilidade;
- impacto sobre funções.

## 902. Métricas de segurança

Poderão incluir:

- eventos forjados bloqueados;
- acessos indevidos;
- escaladas impedidas;
- segredos expostos;
- kill switches acionados;
- agentes isolados;
- vulnerabilidades;
- tempo de revogação.

## 903. Métricas de fornecedores

Poderão incluir:

- disponibilidade;
- mudança sem aviso;
- suporte;
- latência;
- falha;
- custo;
- portabilidade;
- evidências;
- incidentes;
- subcontratados.

## 904. Métricas de impacto

Deverão buscar demonstrar se a automação:

- preservou serviço;
- reduziu tempo;
- evitou dano;
- ampliou acesso;
- protegeu pessoas;
- reduziu custo;
- aumentou qualidade;
- produziu efeito adverso.

## 905. Métrica não é propósito

A automação não deverá otimizar indicador isolado sacrificando:

- dignidade;
- segurança;
- qualidade;
- justiça;
- continuidade;
- confiança;
- responsabilidade.

## 906. Indicadores sem mascaramento

Resultados agregados não deverão ocultar:

- falha crítica;
- grupo prejudicado;
- organização vulnerável;
- automação não testada;
- decisão contestada;
- fornecedor concentrado;
- risco vencido;
- comportamento anormal.

## 907. Painel de maturidade

O painel poderá apresentar:

- inventário;
- cobertura de testes;
- níveis de autonomia;
- falhas;
- recorrências;
- intervenções;
- riscos;
- fornecedores;
- ações;
- evidências;
- revisões.

## 908. Nível 0 — execução manual não estruturada

Nesse nível:

- automações não são inventariadas;
- scripts são informais;
- autoridade é implícita;
- evidências são escassas;
- falhas dependem de intervenção improvisada;
- não há governança.

## 909. Nível 1 — automação isolada

Nesse nível:

- algumas tarefas são automatizadas;
- proprietários são pouco claros;
- logs são fragmentados;
- testes são ocasionais;
- remediações tratam sintomas;
- conhecimento permanece concentrado.

## 910. Nível 2 — automação definida

Nesse nível:

- inventário existe;
- níveis são reconhecidos;
- procedimentos são relacionados;
- responsáveis são atribuídos;
- testes são realizados;
- limites são documentados;
- evidências são preservadas.

## 911. Nível 3 — automação gerenciada

Nesse nível:

- execuções são observáveis;
- auto-remediações são validadas;
- agentes possuem governança;
- métricas são acompanhadas;
- falhas reduzem autonomia;
- auditorias avaliam resultados;
- correções são testadas.

## 912. Nível 4 — automação adaptativa governada

Nesse nível:

- contexto ajusta execução;
- autonomia varia conforme risco;
- sistemas cooperam;
- agentes escalam incerteza;
- federação preserva soberania;
- aprendizagem propõe mudanças;
- supervisão é orientada por impacto.

## 913. Nível 5 — automação institucional evolutiva

Nesse nível:

- automação amplia capacidades sem apagar pessoas;
- conhecimento atravessa tecnologias;
- fornecedores podem ser substituídos;
- agentes permanecem subordinados ao propósito;
- evidências sustentam confiança;
- aprendizagem fortalece a Engenharia Oficial;
- autonomia e responsabilidade evoluem juntas.

## 914. Maturidade multidimensional

A maturidade deverá ser avaliada por:

- governança;
- arquitetura;
- dados;
- segurança;
- supervisão;
- agentes;
- fornecedores;
- federação;
- evidências;
- aprendizagem;
- impacto humano.

## 915. Maturidade desigual

Uma organização poderá possuir tecnologia avançada e baixa maturidade em:

- responsabilidade;
- explicabilidade;
- contestação;
- segurança;
- sucessão;
- portabilidade;
- conformidade;
- propósito.

## 916. Plano de evolução

A evolução deverá priorizar:

- risco humano;
- automação órfã;
- privilégio excessivo;
- falta de interrupção;
- remediação recorrente;
- modelo não avaliado;
- fornecedor concentrado;
- decisão sem contestação;
- falha sem evidência;
- competência humana perdida.

## 917. Aprendizagem operacional

A aprendizagem deverá utilizar:

- execuções;
- falhas;
- intervenções;
- reversões;
- contestação;
- auditorias;
- incidentes;
- testes;
- feedback;
- métricas.

## 918. Aprendizagem não autônoma sobre princípios

A automação não deverá alterar por conta própria:

- propósito;
- lei;
- política;
- autoridade;
- direitos;
- limite máximo;
- obrigação;
- invariante.

## 919. Proposta automática de melhoria

Agentes poderão sugerir:

- ajuste;
- nova regra;
- novo limiar;
- nova remediação;
- mudança de workflow;
- melhoria de observabilidade;
- correção de procedimento.

A proposta deverá passar por governança.

## 920. Memória das falhas

A organização deverá preservar:

- condição;
- diagnóstico;
- ação;
- resultado;
- falha;
- impacto;
- correção;
- teste;
- aprendizado.

## 921. Memória das decisões

Decisões de promoção, suspensão, exceção e aceitação de risco deverão permanecer relacionadas à automação e à versão correspondente.

## 922. Memória sem apagamento

A correção não deverá apagar:

- erro;
- comportamento;
- evidência;
- impacto;
- responsabilidade;
- contexto;
- aprendizado.

## 923. Preservação da capacidade manual

A aprendizagem deverá incluir exercícios de operação humana ou alternativa quando a dependência automatizada representar risco de continuidade.

## 924. Conhecimento intergeracional

Futuras pessoas e organizações deverão conseguir compreender:

- por que a automação existe;
- como funciona;
- quais limites possui;
- quais falhas ocorreram;
- como interrompê-la;
- como substituí-la;
- como governá-la.

## 925. Modelo integrado de automação operacional

O modelo estabelecido por este arquivo compreende:

1. reconhecer a necessidade;
2. compreender o processo;
3. decidir se deve automatizar;
4. atribuir proprietário;
5. definir propósito;
6. classificar impacto;
7. escolher nível de autonomia;
8. desenhar arquitetura;
9. definir dados e eventos;
10. estabelecer autoridade;
11. limitar ações;
12. implementar segurança;
13. relacionar procedimentos;
14. testar;
15. aprovar;
16. implantar progressivamente;
17. observar;
18. interromper quando necessário;
19. remediar;
20. validar;
21. reconciliar;
22. prestar contas;
23. aprender;
24. revisar;
25. substituir ou encerrar.

## 926. Relação com a configuração operacional

O arquivo:

`014-configuracao-e-estado-operacional.md`

estabelece os estados que a automação deverá reconhecer e respeitar.

## 927. Relação com capacidade e saturação

O arquivo:

`015-capacidade-desempenho-e-saturacao.md`

estabelece limites utilizados por:

- escala;
- fila;
- rate limit;
- priorização;
- degradação;
- recuperação.

## 928. Relação com disponibilidade e confiabilidade

O arquivo:

`016-disponibilidade-confiabilidade-e-slos.md`

estabelece sinais e compromissos que poderão orientar respostas automáticas sem substituir julgamento de impacto.

## 929. Relação com dependências

O arquivo:

`017-dependencias-operacionais-e-mapa-de-impacto.md`

deverá impedir que a automação trate recurso isoladamente sem compreender propagação.

## 930. Relação com contingência

O arquivo:

`018-contingencia-recuperacao-e-operacao-degradada.md`

estabelece estados alternativos que poderão ser ativados e encerrados por automações governadas.

## 931. Relação com recuperabilidade

O arquivo:

`019-backup-restauracao-e-recuperabilidade.md`

estabelece capacidades necessárias à recuperação e à reversão segura.

## 932. Relação com continuidade

O arquivo:

`020-continuidade-operacional-e-disaster-recovery.md`

estabelece prioridades e estratégias que a automação deverá apoiar sem assumir autoridade institucional indevida.

## 933. Relação com runbooks e playbooks

O arquivo:

`021-runbooks-playbooks-e-procedimentos-operacionais.md`

constitui a base documental que deverá orientar automações, workflows, agentes e auto-remediações.

## 934. Relação com o próximo arquivo

O próximo arquivo:

`023-agentes-operacionais-e-operacao-assistida-por-ia.md`

deverá aprofundar a arquitetura dos agentes operacionais, suas capacidades, especializações, ciclos cognitivos, memórias, ferramentas, colaboração, supervisão, governança e integração com pessoas e organizações.

## 935. Invariantes permanentes

Permanecem como invariantes:

- automação não cria autoridade;
- delegação não elimina responsabilidade;
- recomendação não é decisão;
- inferência não é fato;
- confiança não é certeza;
- consenso não é verdade;
- execução sem erro não comprova resultado;
- contenção não é correção definitiva;
- redução de sintoma não comprova tratamento da causa;
- autonomia não poderá ampliar a si mesma;
- toda automação possuirá proprietário;
- toda execução possuirá identidade;
- toda ação possuirá alvo e limite;
- toda retentativa possuirá condição de saída;
- toda automação crítica poderá ser interrompida;
- toda perda de observabilidade reduzirá autonomia;
- toda falha produzirá evidência;
- toda conclusão será validada;
- toda decisão de alto impacto será contestável quando aplicável;
- toda organização federada preservará soberania;
- toda mudança de modelo será avaliada;
- toda simulação será identificada;
- toda aprendizagem será governada;
- toda tecnologia permanecerá meio para servir à vida, à dignidade, às pessoas, às organizações e à sociedade.

## 936. Garantia de propósito

Toda automação deverá permanecer vinculada a finalidade legítima e compreensível.

## 937. Garantia de identidade

Toda automação, agente, modelo e execução deverá possuir identidade rastreável.

## 938. Garantia de autoridade

Toda ação deverá possuir fundamento, escopo, validade e possibilidade de revogação.

## 939. Garantia de limitação

Toda autonomia deverá possuir fronteiras técnicas, operacionais, institucionais e temporais.

## 940. Garantia de supervisão

A supervisão deverá ser proporcional e possuir capacidade real de intervenção.

## 941. Garantia de interrupção

Toda automação crítica deverá poder ser pausada, cancelada, suspensa ou revogada.

## 942. Garantia de segurança

Dados, ferramentas, agentes, eventos, execuções e evidências deverão permanecer protegidos.

## 943. Garantia de validação

Nenhuma execução deverá ser considerada concluída apenas pela ausência de erro interno.

## 944. Garantia de reversão ou compensação

Ações deverão possuir retorno quando possível e compensação governada quando irreversíveis.

## 945. Garantia de contestabilidade

Pessoas e organizações afetadas deverão possuir revisão e correção quando aplicável.

## 946. Garantia de autonomia federada

A cooperação automatizada não deverá apagar identidade, autoridade ou soberania das organizações.

## 947. Garantia de continuidade humana

A Plataforma UNO deverá preservar conhecimento e capacidade humana suficientes para compreender, supervisionar, substituir e recuperar automações críticas.

## 948. Garantia de aprendizagem

Falhas, testes, incidentes, intervenções e contestações deverão fortalecer a arquitetura futura.

## 949. Princípios e virtudes aplicadas

A automação operacional deverá expressar:

- **propósito**, para saber por que age;
- **prudência**, para reconhecer limites;
- **responsabilidade**, para atribuir consequências;
- **verdade**, para distinguir fato, inferência e incerteza;
- **transparência**, para tornar ações compreensíveis;
- **discernimento**, para adaptar sem abandonar princípios;
- **justiça**, para reconhecer impactos desiguais;
- **cooperação**, para integrar capacidades;
- **autonomia**, para permitir ação legítima;
- **governança**, para limitar e revisar a autonomia;
- **memória**, para preservar decisões e falhas;
- **continuidade**, para atravessar mudanças;
- **humildade**, para declarar o que não sabe;
- **coragem**, para interromper a ação inadequada;
- **esperança responsável**, para utilizar inteligência e tecnologia na construção de um futuro melhor.

## 950. Compromisso legal e normativo

A Plataforma UNO deverá construir suas automações utilizando:

- leis;
- regulamentos;
- normas técnicas;
- Normas Regulamentadoras;
- contratos;
- políticas;
- direitos;
- princípios institucionais;

como linhas orientadoras desde a concepção.

Ela não deverá automatizar primeiro para depois tentar adaptar sua operação às exigências aplicáveis.

## 951. Declaração de capacidade automatizada

Nenhuma automação deverá ser declarada plenamente comprovada sem evidências proporcionais.

A declaração deverá indicar:

- automação;
- versão;
- propósito;
- nível de autonomia;
- ambientes;
- organizações;
- ações;
- testes;
- resultados;
- falhas conhecidas;
- limitações;
- riscos;
- validade;
- autoridade.

## 952. Resultado esperado

Com a aplicação desta Engenharia Oficial, a Plataforma UNO deverá ser capaz de:

- automatizar sem desumanizar;
- agir rapidamente sem abandonar prudência;
- ampliar escala sem ampliar poder sem controle;
- remediar sem ocultar causas;
- aprender sem alterar princípios silenciosamente;
- cooperar sem eliminar autonomia;
- utilizar inteligência artificial sem entregar a ela soberania;
- produzir eficiência sem sacrificar dignidade;
- construir confiança baseada em evidências.

## 953. Encerramento

Automação operacional não é apenas fazer uma máquina executar aquilo que uma pessoa executava.

É reorganizar conscientemente a relação entre:

- necessidade;
- conhecimento;
- autoridade;
- decisão;
- ação;
- resultado;
- responsabilidade.

Auto-remediação não é apenas fazer um sistema corrigir a si mesmo.

É permitir que ele:

- perceba seus limites;
- reconheça condições;
- contenha impactos;
- execute correções autorizadas;
- valide resultados;
- peça ajuda;
- preserve evidências;
- aprenda com a experiência.

A Plataforma UNO não deverá buscar uma operação sem pessoas.

Deverá construir uma operação em que pessoas, agentes, organizações e ferramentas possam atuar em cooperação, cada qual dentro de capacidades e responsabilidades reconhecíveis.

A melhor automação não será aquela que elimina toda intervenção humana.

Será aquela que sabe:

- quando agir;
- quando esperar;
- quando perguntar;
- quando interromper;
- quando devolver a decisão;
- quando reconhecer que não compreende;
- quando aprender.

A inteligência da automação não será medida apenas pelo que consegue executar.

Será medida também por sua capacidade de:

- respeitar;
- limitar-se;
- explicar;
- preservar;
- reparar;
- cooperar;
- servir.

Quando a tecnologia ampliar as possibilidades humanas sem retirar dignidade, autoridade, responsabilidade e liberdade, ela deixará de ser apenas mecanismo.

Ela se tornará parte consciente da Engenharia Oficial da Plataforma UNO.

---

**Fim do arquivo `022-automacao-operacional-e-auto-remediacao.md`.**
