# 021 — Runbooks, Playbooks e Procedimentos Operacionais

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial para criação, governança, execução, validação e evolução de:

- runbooks;
- playbooks;
- procedimentos operacionais;
- procedimentos operacionais padrão;
- instruções de trabalho;
- listas de verificação;
- cartões de ação;
- árvores de decisão;
- roteiros de diagnóstico;
- procedimentos de contingência;
- procedimentos de recuperação;
- procedimentos manuais;
- procedimentos assistidos por agentes;
- procedimentos automatizados;
- registros de execução;
- evidências operacionais.

Seu propósito é transformar princípios, políticas, arquiteturas, planos e decisões da Plataforma UNO em conhecimento operacional:

- compreensível;
- acionável;
- seguro;
- contextual;
- atribuível;
- verificável;
- repetível;
- adaptável;
- acessível;
- transmissível;
- governado;
- capaz de produzir aprendizagem.

A Plataforma UNO deverá permitir que pessoas, organizações e agentes autorizados executem ações sem perder:

- propósito;
- contexto;
- autoridade;
- responsabilidade;
- prudência;
- segurança;
- memória;
- rastreabilidade;
- capacidade de interromper;
- capacidade de aprender.

---

## Princípio central

> Um procedimento não existe apenas para dizer o que fazer.  
> Existe para permitir que a ação correta seja executada, pela autoridade correta, no contexto correto, com limites, evidências e responsabilidade.

A Engenharia Oficial deverá impedir que documentos operacionais se transformem em:

- sequências cegas;
- autorizações implícitas;
- automações sem limites;
- substitutos do discernimento;
- registros sem contexto;
- conhecimentos inacessíveis;
- dependências de uma única pessoa;
- justificativas para ações ilegítimas.

---

## Escopo

Este arquivo abrange procedimentos utilizados por:

- operadores;
- colaboradores;
- especialistas;
- equipes técnicas;
- equipes administrativas;
- equipes de campo;
- coordenadores;
- gestores;
- diretores;
- curadores;
- organizações;
- parceiros;
- fornecedores;
- agentes artificiais;
- automações;
- estruturas federadas;
- centros de coordenação;
- equipes de continuidade;
- equipes de segurança;
- equipes de recuperação;
- usuários autorizados.

Ele se aplica a ações:

- ordinárias;
- recorrentes;
- extraordinárias;
- emergenciais;
- manuais;
- semiautomatizadas;
- automatizadas;
- locais;
- remotas;
- federadas;
- técnicas;
- humanas;
- institucionais.

---

## Relação com os arquivos anteriores

Este arquivo operacionaliza capacidades estabelecidas em:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`;
- `018-contingencia-recuperacao-e-operacao-degradada.md`;
- `019-backup-restauracao-e-recuperabilidade.md`;
- `020-continuidade-operacional-e-disaster-recovery.md`.

Esses arquivos estabelecem:

- estados;
- capacidades;
- limites;
- compromissos;
- dependências;
- contingências;
- recuperabilidade;
- continuidade;
- governança.

O presente arquivo deverá transformar essas determinações em instrumentos concretos de execução.

---

## Estrutura do documento

Este arquivo será desenvolvido em seis lotes:

### Lote 1 — Fundamentos, Tipos e Princípios dos Documentos Operacionais

Estabelece conceitos, diferenças, objetivos, propriedades, responsabilidades e invariantes.

### Lote 2 — Estrutura, Conteúdo e Arquitetura dos Procedimentos

Estabelece os componentes obrigatórios, a organização textual, os metadados, os fluxos, as decisões, as validações e os registros.

### Lote 3 — Execução Humana, Assistida e Automatizada

Estabelece autoridade, execução, interação humano-agente, automação, segurança, interrupção, reversão e supervisão.

### Lote 4 — Ciclo de Vida, Versionamento, Publicação e Integração Operacional

Estabelece criação, revisão, aprovação, distribuição, descoberta, atualização, substituição, arquivamento e integração com ferramentas.

### Lote 5 — Governança, Segurança, Conformidade, Federação e Evidências

Estabelece controles, responsabilidades, leis, normas, fornecedores, auditoria, autonomia federada e preservação de evidências.

### Lote 6 — Testes, Métricas, Maturidade, Aprendizagem e Encerramento

Estabelece exercícios, validação, indicadores, análise de falhas, evolução, garantias e o modelo integrado.

---

# Lote 1 — Fundamentos, Tipos e Princípios dos Documentos Operacionais

## 1. Conhecimento operacional

Conhecimento operacional é o conjunto de informações, critérios, experiências, instruções, decisões e limites necessários para executar uma atividade de forma consciente.

Ele deverá permitir compreender:

- por que agir;
- quando agir;
- quem pode agir;
- o que fazer;
- o que não fazer;
- quais recursos utilizar;
- quais riscos existem;
- como validar;
- quando interromper;
- como registrar;
- como retornar;
- como aprender.

## 2. Conhecimento executável

Conhecimento executável é aquele estruturado de forma suficientemente clara para orientar uma ação real.

Ele não deverá ser confundido com código executável.

Um documento poderá ser executável por:

- pessoa;
- equipe;
- agente artificial;
- automação;
- combinação governada desses participantes.

## 3. Documento operacional

Documento operacional é qualquer artefato autorizado que oriente, limite, registre ou valide a execução de uma atividade.

Poderá assumir a forma de:

- texto;
- fluxo;
- formulário;
- checklist;
- roteiro;
- interface;
- comando;
- script governado;
- automação;
- painel;
- modelo;
- cartão de ação;
- conjunto integrado desses elementos.

## 4. Procedimento operacional

Procedimento operacional é uma sequência governada de ações destinada a produzir resultado definido em determinado contexto.

Ele deverá estabelecer:

- propósito;
- escopo;
- autoridade;
- condições;
- entradas;
- ações;
- decisões;
- controles;
- validações;
- saídas;
- registros;
- exceções;
- encerramento.

## 5. Procedimento Operacional Padrão

O Procedimento Operacional Padrão, ou POP, estabelece a forma aprovada para executar atividade recorrente que exige consistência.

O POP deverá ser utilizado quando:

- a atividade se repete;
- a variação precisa ser controlada;
- há requisitos de segurança;
- existe obrigação normativa;
- o resultado precisa ser comparável;
- o treinamento precisa ser uniforme;
- a execução deverá produzir evidências.

## 6. Padrão não significa rigidez absoluta

O padrão deverá estabelecer a forma preferencial e os limites aceitáveis.

Ele não deverá obrigar a repetição cega quando:

- o contexto mudou;
- uma premissa deixou de existir;
- surgiu risco não previsto;
- o procedimento tornou-se inseguro;
- a autoridade necessária está ausente;
- a realidade exige escalonamento.

## 7. Instrução de trabalho

A instrução de trabalho descreve como realizar tarefa específica dentro de processo ou procedimento maior.

Ela poderá detalhar:

- operação de equipamento;
- uso de ferramenta;
- preenchimento de campo;
- execução de comando;
- inspeção;
- montagem;
- configuração;
- verificação;
- registro.

## 8. Runbook

Runbook é um documento operacional voltado à execução de atividade técnica ou operacional definida.

Ele deverá permitir que o executor:

- reconheça a condição;
- reúna requisitos;
- execute ações;
- verifique resultados;
- trate desvios;
- produza evidências;
- encerre ou escale.

## 9. Runbook determinístico

Um runbook será predominantemente determinístico quando suas ações puderem seguir sequência previsível diante de condições conhecidas.

Exemplos poderão incluir:

- reiniciar serviço;
- rotacionar certificado;
- restaurar componente;
- ampliar capacidade;
- executar verificação;
- aplicar configuração aprovada.

## 10. Runbook adaptativo

Um runbook será adaptativo quando exigir decisões condicionais conforme:

- estado;
- impacto;
- risco;
- resultado intermediário;
- dependência;
- capacidade;
- contexto;
- autoridade.

O documento deverá explicitar os pontos em que o discernimento é necessário.

## 11. Playbook

Playbook é um conjunto coordenado de orientações, decisões, papéis, procedimentos e alternativas destinado a tratar cenário mais amplo ou variável.

Ele deverá organizar:

- percepção;
- compreensão;
- decisão;
- coordenação;
- execução;
- comunicação;
- acompanhamento;
- adaptação;
- encerramento;
- aprendizagem.

## 12. Diferença entre runbook e playbook

O runbook orienta, em geral, a execução de ação ou capacidade específica.

O playbook coordena, em geral, múltiplas ações, papéis e caminhos diante de um cenário.

Um playbook poderá acionar diversos runbooks.

Um runbook poderá ser utilizado por diferentes playbooks.

## 13. Plano

Plano estabelece objetivos, estratégias, responsabilidades e condições para enfrentar situação ou alcançar resultado.

O plano define o que deverá ser preservado ou realizado.

O playbook organiza como coordenar a resposta.

O runbook detalha como executar capacidades específicas.

## 14. Política

Política estabelece:

- princípios;
- obrigações;
- limites;
- responsabilidades;
- critérios;
- regras permanentes.

Procedimentos e runbooks deverão implementar políticas sem contradizê-las.

## 15. Padrão técnico

Padrão técnico define requisitos ou características comuns que soluções e execuções deverão observar.

Ele poderá estabelecer:

- formato;
- protocolo;
- configuração;
- nomenclatura;
- segurança;
- qualidade;
- interoperabilidade;
- evidência.

## 16. Diretriz

Diretriz orienta decisões quando diferentes formas de execução podem ser legítimas.

Ela deverá indicar:

- objetivo;
- princípios;
- fatores;
- prioridades;
- limites;
- resultados esperados.

## 17. Checklist

Checklist é uma lista estruturada de verificações ou ações destinada a reduzir esquecimentos e confirmar condições.

Ela não deverá substituir:

- competência;
- compreensão;
- autorização;
- validação;
- julgamento contextual.

## 18. Checklist de preparação

Poderá confirmar:

- autoridade;
- recursos;
- acessos;
- dados;
- ambiente;
- segurança;
- comunicação;
- condições iniciais;
- plano de reversão;
- responsáveis.

## 19. Checklist de execução

Poderá acompanhar:

- etapas realizadas;
- decisões;
- resultados intermediários;
- desvios;
- validações;
- evidências;
- responsáveis;
- horários.

## 20. Checklist de encerramento

Poderá confirmar:

- resultado;
- estabilidade;
- registros;
- comunicação;
- revogação de acessos;
- limpeza;
- retorno;
- pendências;
- aprendizagem;
- encerramento formal.

## 21. Cartão de ação

Cartão de ação é uma orientação curta para resposta imediata de determinado papel.

Ele deverá conter somente o necessário para:

- reconhecer responsabilidade;
- iniciar com segurança;
- acessar o procedimento completo;
- comunicar;
- escalar;
- registrar.

## 22. Árvore de decisão

Árvore de decisão apresenta caminhos condicionais baseados em critérios observáveis.

Ela deverá indicar:

- pergunta;
- evidência necessária;
- opções;
- consequência;
- autoridade;
- próximo passo;
- condição de encerramento.

## 23. Roteiro de diagnóstico

O roteiro de diagnóstico orienta a coleta e interpretação de sinais para reconhecer:

- estado;
- causa provável;
- extensão;
- impacto;
- dependências;
- risco;
- ação adequada.

## 24. Procedimento de emergência

Procedimento de emergência orienta ações imediatas diante de risco elevado.

Ele deverá priorizar:

- vida;
- segurança;
- isolamento;
- comunicação;
- autoridade;
- preservação de evidências;
- contenção;
- escalonamento.

## 25. Procedimento de contingência

Procedimento de contingência orienta a adoção de forma alternativa de operação quando a forma ordinária estiver indisponível ou inadequada.

Ele deverá definir:

- condição de ativação;
- capacidade;
- limitações;
- duração;
- riscos;
- registros;
- reconciliação;
- retorno.

## 26. Procedimento de recuperação

Procedimento de recuperação orienta a reconstrução ou restauração de recurso, serviço, estado ou capacidade.

Ele deverá incluir:

- seleção da fonte;
- preparação;
- execução;
- segurança;
- validação;
- reconciliação;
- liberação;
- evidência.

## 27. Procedimento de reversão

Procedimento de reversão estabelece como retornar ao estado anterior ou seguro quando uma alteração não produzir resultado aceitável.

Ele deverá indicar:

- gatilho;
- autoridade;
- estado de referência;
- ações;
- limites;
- validação;
- comunicação;
- registro.

## 28. Procedimento de retorno

Procedimento de retorno orienta a transição de estado alternativo para estado ordinário ou novo estado permanente.

Ele deverá tratar:

- condições;
- autoridade;
- sequência;
- dados;
- acessos;
- comunicação;
- reconciliação;
- monitoramento;
- reversão;
- encerramento.

## 29. Procedimento manual

Procedimento manual é executado predominantemente por pessoas.

Ele deverá considerar:

- carga cognitiva;
- linguagem;
- capacidade;
- fadiga;
- acessibilidade;
- treinamento;
- erros;
- supervisão;
- registros;
- segurança.

## 30. Procedimento assistido

Procedimento assistido combina ação humana com recomendações ou execuções parciais de ferramentas e agentes.

Ele deverá distinguir:

- o que a ferramenta percebe;
- o que recomenda;
- o que executa;
- o que exige confirmação;
- quem responde pela decisão;
- como interromper.

## 31. Procedimento automatizado

Procedimento automatizado é executado predominantemente por sistema, script, workflow ou agente autorizado.

Ele deverá possuir:

- identidade;
- escopo;
- gatilho;
- entradas;
- permissões;
- limites;
- validações;
- registros;
- tratamento de falha;
- interrupção;
- reversão;
- supervisão.

## 32. Procedimento híbrido

O procedimento híbrido distribui ações entre pessoas, agentes e automações.

A distribuição deverá preservar:

- autoridade;
- contexto;
- responsabilidade;
- rastreabilidade;
- segurança;
- possibilidade de intervenção;
- clareza de transição.

## 33. Procedimento local

Procedimento local atende contexto específico de:

- organização;
- unidade;
- território;
- serviço;
- equipe;
- equipamento;
- legislação;
- infraestrutura.

Ele deverá permanecer coerente com os princípios e requisitos superiores.

## 34. Procedimento federado

Procedimento federado coordena ações entre organizações autônomas.

Ele deverá definir:

- identidades;
- autoridades;
- responsabilidades;
- compartilhamento;
- interfaces;
- dados;
- segurança;
- conflitos;
- encerramento;
- prestação de contas.

## 35. Procedimento externo

Procedimentos executados por fornecedores ou parceiros deverão ser relacionados aos requisitos da Plataforma UNO.

A organização deverá conhecer:

- escopo;
- responsável;
- evidências;
- tempos;
- segurança;
- limites;
- dependências;
- escalonamento;
- validação;
- saída.

## 36. Hierarquia dos documentos operacionais

A hierarquia deverá refletir relações como:

1. princípios;
2. constituição e Engenharia Oficial;
3. políticas;
4. padrões;
5. planos;
6. playbooks;
7. procedimentos e runbooks;
8. instruções de trabalho;
9. checklists;
10. registros e evidências.

Documentos inferiores não poderão contrariar documentos superiores.

## 37. Complementaridade

Os documentos deverão se complementar sem duplicação desnecessária.

Um documento deverá referenciar outro quando o conteúdo já possuir fonte oficial apropriada.

## 38. Fonte única de instrução vigente

Para cada atividade governada deverá existir referência reconhecível da versão vigente.

Cópias distribuídas não deverão criar múltiplas verdades operacionais conflitantes.

## 39. Propósito do procedimento

Todo procedimento deverá declarar por que existe.

O propósito deverá relacionar a atividade a:

- missão;
- serviço;
- capacidade;
- proteção;
- obrigação;
- resultado;
- risco evitado;
- valor produzido.

## 40. Resultado esperado

O documento deverá indicar o estado ou resultado esperado.

O resultado deverá ser:

- observável;
- validável;
- proporcional;
- compreensível;
- compatível com a autoridade;
- coerente com o propósito.

## 41. Escopo operacional

O escopo deverá indicar:

- o que está incluído;
- o que está excluído;
- onde se aplica;
- para quais sistemas;
- para quais organizações;
- para quais estados;
- para quais pessoas;
- sob quais condições.

## 42. Condição de entrada

O procedimento somente deverá ser iniciado quando as condições mínimas estiverem presentes.

Poderão incluir:

- evento reconhecido;
- estado confirmado;
- autoridade disponível;
- recursos;
- segurança;
- janela;
- dependências;
- plano de reversão;
- comunicação.

## 43. Condição de não execução

O documento deverá indicar quando não executar.

Exemplos:

- ambiente comprometido;
- risco às pessoas;
- ausência de autoridade;
- dados inconsistentes;
- versão incompatível;
- dependência indisponível;
- escopo não correspondente;
- mudança em andamento;
- falta de evidência.

## 44. Gatilho

O gatilho poderá ser:

- solicitação;
- evento;
- alerta;
- horário;
- limiar;
- decisão;
- falha;
- mudança de estado;
- obrigação;
- resultado de outro procedimento.

## 45. Gatilho não é autoridade

O acontecimento do gatilho não autoriza automaticamente toda ação posterior.

O procedimento deverá distinguir:

- detecção;
- recomendação;
- autorização;
- execução;
- validação.

## 46. Entrada

As entradas poderão incluir:

- dados;
- solicitações;
- eventos;
- documentos;
- credenciais;
- recursos;
- configurações;
- decisões;
- autorizações;
- evidências.

## 47. Qualidade das entradas

O executor deverá verificar, conforme necessário:

- origem;
- integridade;
- completude;
- atualidade;
- autenticidade;
- formato;
- contexto;
- autorização;
- sensibilidade.

## 48. Pré-requisito

Pré-requisitos deverão ser declarados de forma explícita.

Poderão abranger:

- conhecimento;
- treinamento;
- certificação;
- equipamento;
- acesso;
- ambiente;
- backup;
- janela;
- comunicação;
- equipe.

## 49. Dependência

O documento deverá indicar as dependências que podem:

- impedir execução;
- alterar a sequência;
- mudar o risco;
- exigir coordenação;
- produzir impacto;
- limitar reversão;
- afetar validação.

## 50. Papel

Cada papel deverá possuir:

- responsabilidade;
- autoridade;
- competência;
- entrada;
- ação;
- saída;
- escalonamento;
- substituto;
- evidência.

## 51. Executor

O executor deverá possuir:

- identidade;
- competência;
- acesso;
- autoridade correspondente;
- conhecimento do procedimento;
- capacidade de interromper;
- responsabilidade pelos registros.

## 52. Aprovador

O aprovador deverá avaliar:

- necessidade;
- escopo;
- risco;
- impacto;
- horário;
- dependências;
- reversão;
- autoridade;
- evidências preparatórias.

## 53. Validador

O validador deverá confirmar se o resultado:

- foi alcançado;
- permanece seguro;
- corresponde ao propósito;
- não produziu impacto indevido;
- pode ser liberado;
- possui evidência suficiente.

## 54. Observador

Quando necessário, o observador deverá acompanhar:

- execução;
- desvios;
- tempos;
- segurança;
- comunicação;
- resultados;
- evidências.

## 55. Segregação de funções

Atividades críticas poderão exigir separação entre:

- solicitação;
- aprovação;
- execução;
- validação;
- auditoria.

## 56. Autoridade explícita

Todo procedimento deverá indicar qual autoridade é necessária.

A autoridade poderá decorrer de:

- função;
- ordem;
- política;
- plano ativado;
- delegação;
- contrato;
- lei;
- evento previamente autorizado.

## 57. Autoridade contextual

Uma pessoa poderá ter autoridade em determinado:

- sistema;
- território;
- organização;
- horário;
- cenário;
- nível de impacto;
- estado operacional.

A autoridade não deverá ser generalizada além desse contexto.

## 58. Limite de autoridade

O procedimento deverá indicar ações que o executor não pode realizar sem novo escalonamento.

## 59. Responsabilidade

A execução deverá permanecer atribuível mesmo quando:

- a atividade for automatizada;
- houver urgência;
- a equipe estiver reduzida;
- um fornecedor atuar;
- uma organização parceira apoiar;
- um agente recomendar.

## 60. Competência

A autorização não substitui a competência.

A competência poderá exigir:

- formação;
- certificação;
- treinamento;
- experiência;
- acompanhamento;
- prática;
- avaliação;
- atualização.

## 61. Execução por pessoa em treinamento

A pessoa em treinamento somente deverá executar atividade crítica quando houver:

- autorização;
- supervisão;
- limites;
- ambiente adequado;
- possibilidade de intervenção;
- registro;
- responsabilidade definida.

## 62. Linguagem operacional

A linguagem deverá ser:

- clara;
- direta;
- precisa;
- consistente;
- contextual;
- compreensível ao público autorizado;
- livre de ambiguidade evitável.

## 63. Verbo de ação

Etapas deverão utilizar verbos que indiquem ações observáveis, como:

- verificar;
- comparar;
- registrar;
- selecionar;
- autorizar;
- executar;
- interromper;
- validar;
- comunicar;
- encerrar.

## 64. Termos padronizados

Termos críticos deverão possuir significado comum.

O documento deverá evitar alternar palavras diferentes para o mesmo:

- estado;
- papel;
- recurso;
- sistema;
- ação;
- resultado;
- prioridade;
- autoridade.

## 65. Identificadores precisos

Sistemas, serviços, ambientes, organizações e recursos deverão ser identificados de maneira que reduza risco de atuar sobre alvo incorreto.

## 66. Distinção entre exemplo e instrução

Exemplos deverão ser claramente identificados.

Nenhum executor ou agente deverá interpretar valor ilustrativo como dado real de produção.

## 67. Distinção entre recomendação e ordem

O documento deverá utilizar linguagem que diferencie:

- informação;
- recomendação;
- solicitação;
- autorização;
- ordem;
- proibição;
- condição.

## 68. Distinção entre etapa obrigatória e opcional

Cada etapa deverá indicar se é:

- obrigatória;
- condicional;
- recomendada;
- opcional;
- proibida em determinada condição.

## 69. Sequência

A sequência deverá refletir:

- dependências;
- segurança;
- preparação;
- execução;
- validação;
- comunicação;
- encerramento.

## 70. Paralelismo

Ações poderão ocorrer em paralelo quando:

- não houver conflito;
- as dependências permitirem;
- a autoridade estiver clara;
- os estados puderem ser reconciliados;
- a comunicação for suficiente.

## 71. Ponto de sincronização

Ações paralelas deverão possuir pontos de sincronização antes de etapas dependentes.

O procedimento deverá indicar:

- resultados esperados;
- responsáveis;
- tempo;
- falhas;
- decisão de prosseguir.

## 72. Ponto de decisão

Todo ponto de decisão deverá indicar:

- pergunta;
- dados;
- critérios;
- alternativas;
- autoridade;
- registro;
- consequência.

## 73. Critério mensurável

Quando possível, critérios deverão utilizar:

- valores;
- estados;
- tempos;
- percentuais;
- limites;
- condições;
- evidências;
- classes.

## 74. Critério contextual

Quando a decisão não puder ser reduzida a valor fixo, o documento deverá apresentar fatores que orientem o julgamento.

## 75. Regra de parada

Todo procedimento crítico deverá estabelecer quando interromper.

A interrupção poderá ocorrer diante de:

- risco;
- resultado inesperado;
- perda de comunicação;
- ausência de autoridade;
- falha de validação;
- mudança de escopo;
- impacto não previsto;
- condição insegura;
- comprometimento.

## 76. Parada segura

Quando possível, a interrupção deverá conduzir o sistema, a atividade ou o ambiente a estado seguro e conhecido.

## 77. Escalonamento

O procedimento deverá indicar:

- condição;
- destinatário;
- canal;
- informações;
- prioridade;
- tempo;
- alternativa;
- registro.

## 78. Ausência de resposta

Quando a autoridade ou o especialista não responder, o documento deverá indicar:

- tempo de espera;
- substituto;
- próximo nível;
- ação segura permitida;
- ação proibida;
- registro.

## 79. Tratamento de desvio

Desvio é qualquer diferença relevante entre:

- condição prevista;
- ação esperada;
- resultado observado.

O desvio deverá ser:

- reconhecido;
- registrado;
- avaliado;
- corrigido;
- escalonado;
- transformado em aprendizado.

## 80. Exceção operacional

A exceção deverá possuir:

- motivo;
- autoridade;
- escopo;
- risco;
- controle compensatório;
- duração;
- registro;
- revisão;
- encerramento.

## 81. Proibição de improvisação invisível

Adaptações poderão ser necessárias, mas não deverão ocorrer sem:

- consciência;
- autoridade;
- registro;
- avaliação;
- validação;
- revisão posterior.

## 82. Validação intermediária

Etapas críticas deverão possuir validação antes que a execução avance.

A validação poderá confirmar:

- alvo correto;
- estado esperado;
- integridade;
- segurança;
- capacidade;
- autorização;
- resultado parcial.

## 83. Validação final

A conclusão somente deverá ocorrer quando:

- resultado estiver presente;
- critérios forem atendidos;
- riscos forem conhecidos;
- registros estiverem completos;
- partes forem comunicadas;
- pendências forem atribuídas;
- acessos extraordinários forem tratados.

## 84. Resultado parcial

Quando o resultado for parcial, o documento deverá permitir classificá-lo sem declarar sucesso completo.

## 85. Falha

A falha deverá possuir caminho para:

- preservar estado;
- impedir dano adicional;
- registrar;
- comunicar;
- reverter;
- escalar;
- investigar;
- corrigir;
- repetir.

## 86. Saída

A saída poderá ser:

- estado;
- serviço;
- configuração;
- registro;
- decisão;
- artefato;
- comunicação;
- evidência;
- ação encaminhada;
- procedimento acionado.

## 87. Evidência de execução

Cada ação relevante deverá produzir evidência proporcional, como:

- log;
- horário;
- responsável;
- comando;
- resultado;
- aprovação;
- captura;
- registro;
- medição;
- assinatura;
- identificador.

## 88. Registro mínimo

O registro deverá permitir compreender:

- quem;
- o quê;
- quando;
- onde;
- por quê;
- sob qual autoridade;
- com qual resultado;
- com qual desvio;
- com qual evidência.

## 89. Registro automático

Registros automáticos deverão ser validados quanto a:

- integridade;
- temporalidade;
- identidade;
- completude;
- retenção;
- acesso;
- correlação;
- proteção.

## 90. Registro manual

Registros manuais deverão possuir:

- formato;
- identificador;
- autoria;
- horário;
- proteção;
- armazenamento;
- posterior incorporação;
- validação.

## 91. Temporalidade

Os registros deverão utilizar referências temporais coerentes.

Quando diferentes sistemas utilizarem relógios distintos, o procedimento deverá considerar:

- sincronização;
- fuso;
- precisão;
- fonte;
- divergência;
- ordenação.

## 92. Estado anterior e posterior

Mudanças relevantes deverão registrar:

- estado inicial;
- ação;
- estado final;
- diferença;
- resultado;
- possibilidade de reversão.

## 93. Reversibilidade

O procedimento deverá classificar a ação como:

- reversível;
- parcialmente reversível;
- compensável;
- irreversível;
- de reversibilidade desconhecida.

## 94. Ação irreversível

Ações irreversíveis deverão exigir controles reforçados, como:

- confirmação;
- dupla autorização;
- simulação;
- backup;
- janela;
- revisão;
- evidência;
- comunicação.

## 95. Segurança por desenho

A segurança deverá estar integrada ao procedimento desde sua criação.

Não deverá ser acrescentada apenas depois que a sequência estiver definida.

## 96. Saúde e segurança

Procedimentos que envolvam pessoas, instalações, eletricidade, máquinas, altura, substâncias, transporte ou outros riscos deverão incorporar:

- requisitos legais;
- Normas Regulamentadoras;
- capacitação;
- equipamentos de proteção;
- isolamento;
- sinalização;
- supervisão;
- emergência;
- interrupção segura.

## 97. Acessibilidade operacional

Os documentos deverão considerar pessoas com diferentes necessidades de:

- visão;
- audição;
- mobilidade;
- compreensão;
- linguagem;
- tecnologia assistiva;
- acesso digital;
- apoio humano.

## 98. Carga cognitiva

Documentos utilizados sob pressão deverão reduzir:

- ambiguidade;
- excesso de texto;
- navegação desnecessária;
- memorização;
- decisões não estruturadas;
- alternância de ferramentas;
- informação irrelevante.

## 99. Camadas de leitura

Um documento poderá possuir:

1. identificação e propósito;
2. ações imediatas;
3. sequência principal;
4. decisões e exceções;
5. detalhes técnicos;
6. referências;
7. evidências e histórico.

Essa organização permitirá leitura compatível com a urgência e a necessidade.

## 100. Informação no ponto de uso

A instrução deverá estar disponível onde a ação ocorre.

O executor não deverá depender de busca extensa durante situação crítica.

## 101. Conhecimento tácito

Conhecimento mantido apenas na experiência de determinadas pessoas deverá ser identificado como risco.

A organização deverá buscar transformá-lo em:

- documentação;
- treinamento;
- exemplo;
- critério;
- simulação;
- memória;
- procedimento;
- registro de decisão.

## 102. Conhecimento não totalmente documentável

Nem todo discernimento poderá ser convertido em sequência fixa.

Nesses casos, o documento deverá preservar:

- princípios;
- fatores;
- perguntas;
- limites;
- autoridades;
- exemplos;
- escalonamento;
- evidência.

## 103. Procedimento e discernimento

O procedimento deverá ampliar o discernimento do executor, não suprimi-lo.

O executor deverá compreender quando:

- seguir;
- pausar;
- validar;
- adaptar;
- escalar;
- interromper;
- recusar.

## 104. Direito e dever de interrupção

Pessoas e agentes autorizados deverão poder interromper execução quando identificarem:

- risco à vida;
- ilegalidade;
- ausência de autoridade;
- alvo incorreto;
- condição insegura;
- impacto desproporcional;
- comprometimento;
- falha crítica.

## 105. Recusa responsável

O executor deverá poder recusar ordem manifestamente incompatível com:

- lei;
- norma;
- segurança;
- dignidade;
- autoridade;
- escopo;
- princípios permanentes.

A recusa deverá ser registrada e escalonada.

## 106. Automação não legitimadora

A existência de automação não transforma uma ação em legítima.

Toda execução automatizada deverá permanecer subordinada a:

- política;
- autoridade;
- contexto;
- segurança;
- responsabilidade;
- supervisão;
- auditoria.

## 107. Procedimento como memória

O documento deverá preservar não apenas instruções, mas também conhecimento sobre:

- razão;
- risco;
- decisão;
- dependência;
- exceção;
- limite;
- resultado;
- aprendizado.

## 108. Procedimento como contrato operacional

O procedimento estabelece expectativa comum entre:

- solicitante;
- aprovador;
- executor;
- validador;
- usuário;
- organização;
- fornecedor;
- auditor.

Ele deverá tornar responsabilidades e resultados compreensíveis.

## 109. Procedimento como interface

O documento poderá ser apresentado por interface que:

- exibe etapas;
- coleta dados;
- verifica condições;
- solicita aprovação;
- executa automações;
- registra evidências;
- bloqueia ações;
- orienta escalonamento.

## 110. Imagens conceituais como referência de interface

As imagens conceituais da Engenharia Oficial poderão inspirar:

- painéis;
- navegação;
- distribuição de capacidades;
- ícones;
- fluxos;
- estados;
- relações;
- hierarquia de informação.

Os ícones utilizados conceitualmente poderão tornar-se elementos de navegação quando houver:

- consistência;
- acessibilidade;
- significado;
- documentação;
- validação com usuários.

## 111. Interface não substitui conteúdo normativo

A representação visual deverá permanecer vinculada ao documento oficial.

Alterações estéticas não poderão modificar silenciosamente:

- significado;
- autoridade;
- sequência;
- limite;
- responsabilidade;
- critério.

## 112. Múltiplas representações

O mesmo procedimento poderá possuir:

- versão textual;
- checklist;
- fluxo visual;
- interface;
- modo assistido;
- automação;
- versão offline;
- versão acessível.

Todas deverão derivar da mesma referência governada.

## 113. Coerência entre representações

Mudanças na fonte oficial deverão gerar revisão das representações derivadas.

A organização deverá impedir que:

- checklist;
- tela;
- script;
- treinamento;
- cópia offline;

permaneçam operando com instrução obsoleta.

## 114. Procedimento orientado por estado

A próxima ação deverá depender do estado real, e não apenas da posição nominal na sequência.

O executor deverá verificar:

- estado anterior;
- resultado;
- dependência;
- risco;
- autorização;
- condição de avanço.

## 115. Procedimento orientado por evento

Eventos poderão iniciar, suspender, redirecionar ou encerrar procedimentos.

Cada evento deverá possuir:

- identidade;
- origem;
- tempo;
- confiabilidade;
- contexto;
- consequência;
- registro.

## 116. Procedimento orientado por missão

Quando diferentes caminhos forem possíveis, deverá ser escolhido aquele que melhor preserve:

- propósito;
- vida;
- dignidade;
- segurança;
- responsabilidade;
- continuidade;
- valor público.

## 117. Procedimento orientado por evidências

Decisões e transições deverão utilizar evidências proporcionais.

Na ausência de evidência suficiente, o procedimento deverá orientar:

- coleta;
- espera;
- contenção;
- escalonamento;
- hipótese conservadora;
- interrupção.

## 118. Procedimento orientado por risco

A profundidade dos controles deverá acompanhar:

- impacto;
- probabilidade;
- irreversibilidade;
- extensão;
- sensibilidade;
- autoridade;
- incerteza.

## 119. Procedimento orientado por pessoas

A execução deverá considerar:

- quem será afetado;
- quem executa;
- quem decide;
- quem precisa compreender;
- quem possui menos alternativas;
- quem poderá sofrer dano;
- quem deverá ser comunicado.

## 120. Qualidade operacional

A qualidade de um documento deverá ser avaliada por sua capacidade de:

- orientar corretamente;
- reduzir risco;
- preservar contexto;
- produzir resultado;
- apoiar decisão;
- registrar evidências;
- permitir sucessão;
- favorecer aprendizagem.

## 121. Documento longo não é necessariamente profundo

A profundidade deverá resultar de:

- contexto;
- critérios;
- dependências;
- limites;
- decisões;
- validações;
- evidências;
- exceções;
- relações.

O volume textual, isoladamente, não garante qualidade.

## 122. Documento curto não é necessariamente superficial

Uma instrução curta poderá ser suficiente quando:

- o escopo for limitado;
- os pré-requisitos forem conhecidos;
- o risco for baixo;
- a ação for simples;
- as referências estiverem acessíveis;
- o resultado for observável.

## 123. Adequação da profundidade

A profundidade deverá ser proporcional:

- à criticidade;
- à complexidade;
- à variabilidade;
- ao risco;
- à frequência;
- à competência do público;
- à automação;
- às obrigações;
- à irreversibilidade.

## 124. Antipadrão da receita cega

Constitui antipadrão apresentar somente comandos ou etapas sem explicar:

- alvo;
- condição;
- autoridade;
- risco;
- validação;
- falha;
- reversão;
- evidência.

## 125. Antipadrão da dependência pessoal

Constitui antipadrão um procedimento que somente funciona quando determinada pessoa:

- interpreta;
- lembra;
- autoriza informalmente;
- conhece senha;
- reconhece ambiente;
- corrige erros;
- sabe o próximo passo.

## 126. Antipadrão da documentação decorativa

Constitui antipadrão criar documentação apenas para:

- cumprir auditoria;
- preencher requisito;
- aparentar maturidade;
- registrar intenção;
- justificar ferramenta.

## 127. Antipadrão do documento inacessível

Um procedimento falha quando não pode ser acessado:

- no ambiente;
- no horário;
- pelo papel autorizado;
- durante indisponibilidade;
- sem o sistema afetado;
- por pessoa com necessidade de acessibilidade.

## 128. Antipadrão da autoridade implícita

Nenhuma instrução deverá presumir que o leitor possui autorização apenas porque conseguiu acessar o documento.

## 129. Antipadrão da validação ausente

Executar etapas sem confirmar resultado poderá transformar falha silenciosa em declaração falsa de sucesso.

## 130. Antipadrão da automação opaca

Automação sem:

- identidade;
- logs;
- limites;
- explicação;
- supervisão;
- interrupção;
- reversão;

não deverá executar atividades críticas.

## 131. Antipadrão da cópia desatualizada

Cópias locais, impressas, exportadas ou incorporadas em ferramentas deverão possuir controle de versão e atualização.

## 132. Antipadrão da normalidade presumida

O procedimento não deverá presumir que:

- rede;
- energia;
- identidade;
- comunicação;
- fornecedor;
- equipe;
- dados;
- instalação;

estarão sempre disponíveis.

## 133. Antipadrão da exceção informal

Desvios repetidos não deverão permanecer como conhecimento informal.

Eles deverão gerar:

- análise;
- correção;
- atualização;
- treinamento;
- mudança da arquitetura;
- formalização legítima.

## 134. Princípios fundamentais do Lote 1

Permanecem como princípios:

- propósito antes da etapa;
- contexto antes da execução;
- autoridade antes da ação;
- segurança antes da velocidade;
- evidência antes da conclusão;
- validação antes da liberação;
- responsabilidade antes da automação;
- reconciliação antes do encerramento;
- aprendizagem antes da repetição;
- acessibilidade antes da dependência;
- estado real antes da sequência nominal;
- vida e dignidade antes da conveniência.

## 135. Invariantes do Lote 1

Permanecem como invariantes:

- procedimento não concede autoridade por si só;
- acesso ao documento não autoriza execução;
- automação não elimina responsabilidade;
- checklist não substitui competência;
- padrão não obriga ação insegura;
- executor deverá poder interromper;
- toda ação crítica deverá ser atribuível;
- toda decisão material deverá possuir contexto;
- toda etapa irreversível deverá possuir controle reforçado;
- todo desvio relevante deverá ser registrado;
- todo resultado deverá ser validado;
- toda exceção deverá ser temporária;
- toda execução deverá produzir evidência proporcional;
- toda representação deverá permanecer coerente com a fonte oficial;
- toda cópia deverá possuir versão reconhecível;
- todo procedimento crítico deverá possuir caminho de falha, escalonamento e encerramento;
- toda ação deverá permanecer subordinada à lei, às normas e aos princípios permanentes.

## 136. Garantias esperadas

A aplicação destes fundamentos deverá garantir que:

- documentos possuam propósito;
- tipos documentais sejam distinguidos;
- responsabilidades sejam reconhecidas;
- autoridades sejam explicitadas;
- condições de entrada sejam verificadas;
- condições de parada sejam conhecidas;
- ações sejam validáveis;
- desvios sejam tratáveis;
- registros sejam preservados;
- automações sejam governadas;
- pessoas possam compreender e interromper;
- o conhecimento possa atravessar mudanças.

## 137. Resultado esperado do Lote 1

Ao final deste lote, a Plataforma UNO deverá reconhecer:

- o que é um documento operacional;
- quando utilizar runbook;
- quando utilizar playbook;
- quando utilizar procedimento;
- como distinguir política, plano e instrução;
- quais propriedades tornam o conhecimento acionável;
- quais limites preservam responsabilidade;
- quais riscos precisam ser evitados;
- quais garantias deverão acompanhar a execução.

## 138. Transição para o Lote 2

O próximo lote deverá transformar esses fundamentos em uma arquitetura documental completa.

Ele estabelecerá:

- identificação;
- metadados;
- estrutura;
- seções obrigatórias;
- pré-requisitos;
- entradas;
- papéis;
- fluxos;
- comandos;
- decisões;
- validações;
- falhas;
- reversões;
- saídas;
- evidências;
- referências;
- formatos;
- modelos;
- critérios de qualidade.

O objetivo será permitir que cada documento operacional da Plataforma UNO possua profundidade suficiente para orientar a realidade sem se tornar confuso, rígido ou desconectado do propósito.

---

# Lote 2 — Estrutura, Conteúdo e Arquitetura dos Procedimentos

## 139. Finalidade da arquitetura documental

A arquitetura documental deverá assegurar que runbooks, playbooks e procedimentos possuam estrutura:

- reconhecível;
- coerente;
- navegável;
- validável;
- acessível;
- integrável;
- automatizável quando apropriado;
- compreensível por pessoas e agentes autorizados.

A padronização deverá reduzir ambiguidade sem eliminar a adaptação necessária ao contexto.

## 140. Estrutura proporcional

Nem todo documento precisará possuir a mesma extensão.

A estrutura deverá variar conforme:

- tipo;
- criticidade;
- complexidade;
- frequência;
- risco;
- público;
- automação;
- obrigação;
- irreversibilidade;
- quantidade de decisões.

## 141. Conteúdo mínimo universal

Todo documento operacional deverá apresentar, no mínimo:

- identificação;
- propósito;
- escopo;
- proprietário;
- público autorizado;
- condição de utilização;
- ações ou orientações;
- resultado esperado;
- forma de validação;
- registro;
- versão.

## 142. Conteúdo reforçado para atividade crítica

Atividades críticas deverão acrescentar:

- autoridade;
- classificação;
- riscos;
- pré-requisitos;
- dependências;
- segregação;
- condições de parada;
- escalonamento;
- reversão;
- segurança;
- comunicação;
- evidências;
- aprovação;
- teste;
- revisão.

## 143. Cabeçalho documental

O cabeçalho deverá permitir reconhecer imediatamente:

- título;
- identificador;
- tipo documental;
- versão;
- estado;
- proprietário;
- classificação;
- data de vigência;
- próxima revisão;
- sistema ou função relacionada.

## 144. Identificador único

Cada documento deverá possuir identificador único e persistente.

O identificador não deverá ser reutilizado para conteúdo sem continuidade semântica com o documento original.

## 145. Convenção de identificação

A convenção poderá conter:

- domínio;
- organização;
- tipo;
- função;
- sequência;
- versão;
- território;
- ambiente.

Ela deverá ser:

- documentada;
- estável;
- compreensível;
- pesquisável;
- livre de colisões.

## 146. Título

O título deverá indicar com clareza:

- ação;
- objeto;
- contexto;
- finalidade, quando necessária.

Títulos genéricos como “Procedimento de sistema” ou “Correção de erro” deverão ser evitados.

## 147. Tipo documental

O tipo deverá ser explicitado como:

- política;
- plano;
- playbook;
- runbook;
- procedimento;
- POP;
- instrução de trabalho;
- checklist;
- cartão de ação;
- árvore de decisão;
- roteiro de diagnóstico.

## 148. Estado documental

O documento deverá possuir estado controlado, como:

- rascunho;
- em revisão;
- aprovado;
- vigente;
- suspenso;
- em correção;
- substituído;
- arquivado;
- revogado.

## 149. Proibição de uso do rascunho como vigente

Documentos em rascunho não deverão orientar produção como referência oficial, salvo exercício ou teste explicitamente autorizado.

## 150. Estado não comprovado

Documento aprovado, mas ainda não testado, deverá apresentar indicação:

**NÃO COMPROVADO**

Essa indicação somente deverá ser removida após evidência proporcional de execução bem-sucedida.

## 151. Classificação de criticidade

O documento poderá ser classificado como:

- baixo impacto;
- moderado;
- elevado;
- crítico;
- emergencial.

A classificação deverá orientar:

- aprovação;
- teste;
- revisão;
- acesso;
- evidência;
- supervisão;
- automação.

## 152. Classificação da informação

O documento deverá indicar se seu conteúdo é:

- público;
- interno;
- restrito;
- confidencial;
- altamente sensível;
- sujeito a proteção específica.

## 153. Proprietário

O proprietário deverá ser identificado por função institucional, além do nome da pessoa atualmente responsável.

Isso permitirá continuidade diante de mudanças de pessoal.

## 154. Autor

O autor poderá ser diferente do proprietário.

A autoria deverá registrar quem produziu ou alterou o conteúdo, sem transferir automaticamente a responsabilidade pela aprovação.

## 155. Revisores

Revisores deverão ser selecionados conforme o conteúdo, podendo incluir:

- operação;
- tecnologia;
- segurança;
- jurídico;
- conformidade;
- pessoas;
- dados;
- acessibilidade;
- fornecedor;
- organização federada;
- especialista técnico.

## 156. Aprovador

O aprovador deverá possuir autoridade correspondente:

- ao risco;
- ao impacto;
- ao escopo;
- à organização;
- ao ambiente;
- à obrigação.

## 157. Data de vigência

A data de vigência deverá indicar quando o documento passa a constituir referência oficial.

## 158. Data de revisão

A próxima revisão deverá considerar:

- criticidade;
- frequência de mudança;
- histórico;
- tecnologia;
- obrigação;
- dependências;
- risco.

## 159. Vigência condicionada

A vigência poderá depender de:

- aprovação;
- treinamento;
- teste;
- implantação;
- comunicação;
- disponibilidade de recursos;
- substituição de versão anterior.

## 160. Resumo executivo

Documentos extensos deverão apresentar resumo contendo:

- finalidade;
- condição de uso;
- resultado;
- riscos principais;
- responsáveis;
- tempo estimado;
- ação inicial.

## 161. Propósito

O propósito deverá responder:

> Por que este documento existe e qual capacidade ele protege ou produz?

## 162. Objetivo

O objetivo deverá indicar o resultado específico pretendido.

Exemplos:

- recuperar serviço;
- verificar integridade;
- operar manualmente;
- responder a evento;
- restaurar configuração;
- ampliar capacidade;
- conter risco;
- retornar à normalidade.

## 163. Escopo positivo

O escopo deverá declarar:

- organizações abrangidas;
- ambientes;
- sistemas;
- serviços;
- funções;
- equipamentos;
- territórios;
- situações;
- públicos autorizados.

## 164. Exclusões

O documento deverá indicar quando não se aplica.

As exclusões evitam que procedimento legítimo em um contexto seja utilizado de forma perigosa em outro.

## 165. Público

O público deverá indicar quem pode:

- consultar;
- executar;
- aprovar;
- validar;
- auditar;
- treinar;
- automatizar;
- modificar.

## 166. Conhecimentos requeridos

O documento deverá indicar conhecimentos necessários, como:

- operação;
- arquitetura;
- segurança;
- ferramenta;
- legislação;
- equipamento;
- processo;
- contexto institucional.

## 167. Capacitação obrigatória

Quando aplicável, deverão ser exigidos:

- curso;
- certificação;
- autorização;
- treinamento prático;
- exame;
- acompanhamento;
- reciclagem;
- aptidão;
- registro.

## 168. Equipamentos de proteção

Procedimentos com risco físico deverão identificar:

- equipamentos de proteção individual;
- proteção coletiva;
- inspeção;
- validade;
- forma de uso;
- limitações;
- descarte;
- substituição.

## 169. Requisitos legais e normativos

O documento deverá relacionar leis, normas técnicas, Normas Regulamentadoras, contratos e políticas aplicáveis.

A referência deverá indicar como o requisito influencia a execução.

## 170. Definições

Termos críticos, siglas, estados e papéis deverão ser definidos quando não forem universalmente compreendidos pelo público autorizado.

## 171. Referências

O documento poderá referenciar:

- Engenharia Oficial;
- política;
- plano;
- arquitetura;
- manual;
- contrato;
- norma;
- inventário;
- catálogo;
- outro procedimento;
- evidência;
- decisão.

## 172. Referência estável

Referências deverão utilizar identificadores persistentes, evitando depender apenas de:

- nome informal;
- endereço temporário;
- mensagem;
- memória;
- localização pessoal.

## 173. Dependência documental

Quando o documento depender de outro, deverá indicar:

- documento;
- versão mínima;
- relação;
- momento de consulta;
- efeito da indisponibilidade;
- alternativa.

## 174. Pré-condições

As pré-condições deverão ser verificáveis.

Poderão incluir:

- estado operacional;
- autorização;
- janela;
- capacidade;
- backup;
- conectividade;
- equipe;
- equipamento;
- ambiente;
- comunicação;
- ausência de bloqueio.

## 175. Lista de preparação

A preparação deverá confirmar:

- alvo;
- ambiente;
- autoridade;
- responsáveis;
- dependências;
- recursos;
- segurança;
- reversão;
- evidências;
- comunicação;
- horários.

## 176. Identificação do alvo

Antes da ação, deverão ser confirmados:

- nome;
- identificador;
- ambiente;
- organização;
- localização;
- versão;
- proprietário;
- estado;
- dependências;
- criticidade.

## 177. Confirmação de ambiente

O documento deverá impedir confusão entre:

- desenvolvimento;
- teste;
- homologação;
- simulação;
- produção;
- recuperação;
- contingência;
- ambiente federado.

## 178. Sinalização de simulação

Quando executado como teste, o documento deverá exibir:

**SIMULAÇÃO**

Essa marcação deverá alcançar interfaces, registros, comunicações, alertas e evidências correspondentes.

## 179. Avaliação inicial de risco

Antes da execução, deverão ser avaliados:

- impacto;
- irreversibilidade;
- pessoas afetadas;
- segurança;
- dados;
- dependências;
- capacidade;
- janela;
- conflito;
- estado real.

## 180. Janela operacional

Quando necessária, a janela deverá estabelecer:

- início;
- fim;
- tolerância;
- período de bloqueio;
- comunicação;
- capacidade;
- contingência;
- autoridade para extensão;
- retorno.

## 181. Mudanças concorrentes

O procedimento deverá verificar se existem:

- mudanças em andamento;
- implantações;
- manutenções;
- incidentes;
- recuperações;
- testes;
- acessos conflitantes;
- automações concorrentes.

## 182. Bloqueio de execução

O documento deverá declarar bloqueios como:

- incidente crítico ativo;
- ambiente inconsistente;
- backup ausente;
- equipe insuficiente;
- autoridade indisponível;
- conflito de mudança;
- risco físico;
- alerta de segurança;
- dependência degradada.

## 183. Recursos necessários

Deverão ser relacionados:

- pessoas;
- ferramentas;
- equipamentos;
- acessos;
- dados;
- documentos;
- instalações;
- comunicação;
- tempo;
- recursos financeiros;
- fornecedores.

## 184. Capacidade dos recursos

A existência do recurso não comprova suficiência.

Deverão ser avaliados:

- volume;
- desempenho;
- duração;
- disponibilidade;
- validade;
- compatibilidade;
- localização;
- segurança.

## 185. Entradas

Cada entrada deverá indicar:

- nome;
- origem;
- formato;
- obrigatoriedade;
- validação;
- sensibilidade;
- responsável;
- condição de ausência.

## 186. Dados ausentes

Quando uma entrada estiver ausente, o documento deverá indicar se:

- a execução deve parar;
- pode continuar com limitação;
- exige autorização;
- pode utilizar fonte alternativa;
- requer hipótese;
- deverá escalar.

## 187. Dados inconsistentes

Dados conflitantes deverão ser tratados por critérios de:

- proveniência;
- autoridade;
- temporalidade;
- integridade;
- completude;
- evidência;
- impacto.

## 188. Resultado esperado inicial

Antes da sequência, o documento deverá apresentar o que deverá existir ao final.

Isso permitirá que o executor compreenda a intenção antes de realizar as etapas.

## 189. Visão geral do fluxo

Documentos complexos deverão apresentar visão geral com:

- início;
- fases;
- decisões;
- caminhos;
- validação;
- encerramento.

## 190. Fases

O procedimento poderá ser dividido em:

1. preparação;
2. autorização;
3. execução;
4. validação;
5. comunicação;
6. estabilização;
7. encerramento;
8. aprendizagem.

## 191. Numeração de etapas

Etapas deverão possuir identificadores estáveis.

Mudanças de numeração não deverão apagar a capacidade de relacionar:

- registros;
- falhas;
- evidências;
- treinamentos;
- automações;
- versões anteriores.

## 192. Etapa atômica

Uma etapa deverá representar ação suficientemente delimitada para permitir:

- execução;
- confirmação;
- atribuição;
- registro;
- falha;
- repetição controlada.

## 193. Etapa composta

Quando uma etapa reunir múltiplas ações, deverá conter subetapas ou referência a instrução específica.

## 194. Estrutura da etapa

Cada etapa crítica poderá conter:

- identificador;
- responsável;
- ação;
- alvo;
- entrada;
- ferramenta;
- tempo;
- resultado esperado;
- validação;
- evidência;
- falha;
- próximo passo.

## 195. Ação

A ação deverá utilizar verbo direto e evitar instruções como:

- “tomar providências”;
- “resolver problema”;
- “verificar tudo”;
- “ajustar conforme necessário”;

sem critérios adicionais.

## 196. Justificativa operacional

Quando a razão da etapa não for evidente, deverá ser explicada para evitar:

- supressão indevida;
- execução mecânica;
- adaptação incorreta;
- interpretação incompatível.

## 197. Alvo

O alvo deverá ser identificado com precisão suficiente para impedir ação sobre:

- ambiente errado;
- sistema errado;
- organização errada;
- conta errada;
- equipamento errado;
- conjunto de dados errado;
- pessoa errada.

## 198. Ferramenta

A ferramenta deverá ser identificada por:

- nome;
- finalidade;
- versão ou requisito;
- acesso;
- alternativa;
- limitação;
- origem confiável.

## 199. Comando

Comandos deverão ser apresentados de modo:

- copiável;
- legível;
- seguro;
- contextual;
- livre de valores reais sensíveis;
- acompanhado de explicação;
- acompanhado de resultado esperado.

## 200. Parâmetros

Cada parâmetro deverá indicar:

- significado;
- tipo;
- obrigatoriedade;
- origem;
- formato;
- exemplo;
- limite;
- sensibilidade.

## 201. Variáveis

Variáveis deverão possuir nomes que evitem confusão com opções do sistema ou valores de ambiente amplamente utilizados.

Valores deverão ser confirmados antes da execução.

## 202. Segredos

Senhas, tokens, chaves e credenciais não deverão ser incorporados diretamente ao documento.

O procedimento deverá indicar:

- mecanismo de obtenção;
- autoridade;
- custódia;
- validade;
- proteção;
- revogação;
- registro de acesso.

## 203. Valor ilustrativo

Valores ilustrativos deverão ser marcados de modo inequívoco, como:

- `<AMBIENTE>`;
- `<IDENTIFICADOR>`;
- `<REGIÃO>`;
- `<DATA>`;
- `<RECURSO>`.

## 204. Comando destrutivo

Comandos capazes de:

- excluir;
- sobrescrever;
- formatar;
- revogar;
- interromper;
- migrar;
- alterar amplamente;
- tornar dados irrecuperáveis;

deverão possuir controles reforçados.

## 205. Confirmação antes da ação destrutiva

Antes da execução, deverão ser confirmados:

- alvo resolvido;
- escopo;
- backup;
- autoridade;
- impacto;
- reversão;
- dependências;
- comunicação;
- janela;
- validação posterior.

## 206. Proibição de alvo amplo não resolvido

Procedimentos não deverão orientar ações destrutivas sobre:

- raiz;
- diretório principal;
- ambiente inteiro;
- conjunto global;
- variável não validada;
- curinga amplo;
- destino implícito;

sem controles extraordinários e autoridade correspondente.

## 207. Pré-visualização

Quando possível, a ação crítica deverá permitir:

- modo de simulação;
- dry run;
- consulta;
- plano;
- diff;
- amostra;
- validação de alvo;
- estimativa de impacto.

## 208. Resultado esperado da etapa

Cada etapa deverá indicar:

- mensagem;
- estado;
- valor;
- arquivo;
- registro;
- evento;
- alteração;
- ausência de erro;
- evidência correspondente.

## 209. Resultado inesperado

O documento deverá indicar como reconhecer:

- erro;
- saída vazia;
- resultado parcial;
- divergência;
- atraso;
- estado incompatível;
- impacto colateral;
- perda de comunicação.

## 210. Decisão condicional

A condição deverá seguir formato compreensível:

- se a condição estiver presente, executar ação;
- se estiver ausente, seguir caminho alternativo;
- se não puder ser determinada, interromper ou escalar.

## 211. Critério de decisão

O critério deverá indicar:

- evidência;
- limite;
- fonte;
- autoridade;
- tolerância;
- tratamento da incerteza.

## 212. Matriz de decisão

Cenários complexos poderão utilizar matriz relacionando:

- condição;
- impacto;
- urgência;
- risco;
- capacidade;
- alternativa;
- decisão;
- autoridade.

## 213. Conflito de critérios

Quando critérios apontarem para decisões diferentes, o documento deverá indicar:

- prioridade;
- autoridade;
- escalonamento;
- registro;
- decisão conservadora permitida.

## 214. Temporizador

Etapas dependentes de tempo deverão indicar:

- início;
- duração esperada;
- limite;
- intervalo de verificação;
- ação após exceder;
- forma de registro.

## 215. Espera ativa

A espera deverá possuir propósito e observação.

O procedimento não deverá depender de pausas arbitrárias sem verificar o estado correspondente.

## 216. Repetição

A repetição deverá possuir:

- condição;
- limite;
- intervalo;
- variação;
- registro;
- escalonamento;
- tratamento após esgotamento.

## 217. Retentativa

Retentativas automáticas ou manuais deverão evitar:

- sobrecarga;
- duplicidade;
- bloqueio;
- propagação;
- custo excessivo;
- efeito externo repetido.

## 218. Idempotência

A etapa deverá indicar se pode ser repetida com segurança.

Quando não for idempotente, deverão existir controles para impedir duplicação.

## 219. Ação paralela

Ações paralelas deverão indicar:

- responsáveis;
- dependências;
- recursos compartilhados;
- ponto de sincronização;
- conflito;
- cancelamento;
- resultado combinado.

## 220. Comunicação durante a execução

O documento deverá indicar:

- quem comunicar;
- o quê;
- quando;
- por qual canal;
- com qual classificação;
- quem aprova;
- como registrar.

## 221. Modelo de mensagem

Mensagens preparadas deverão conter campos para:

- evento;
- impacto;
- ação;
- estado;
- orientação;
- horário;
- responsável;
- próxima atualização.

## 222. Comunicação automatizada

Mensagens automáticas deverão ser:

- autorizadas;
- contextualizadas;
- identificáveis;
- interrompíveis;
- protegidas contra duplicação;
- registradas;
- corrigíveis.

## 223. Escalonamento operacional

O escalonamento deverá indicar:

- condição;
- nível;
- destinatário;
- canal;
- prioridade;
- informações mínimas;
- tempo de resposta;
- substituto;
- próxima ação.

## 224. Pacote de escalonamento

O pacote deverá conter:

- situação;
- impacto;
- ações realizadas;
- resultados;
- evidências;
- riscos;
- decisão necessária;
- prazo;
- recomendação, quando autorizada.

## 225. Condição de parada

O procedimento deverá listar condições que exigem interrupção imediata ou controlada.

## 226. Estado seguro

A parada deverá conduzir, quando possível, a estado em que:

- pessoas estejam protegidas;
- dados não sejam corrompidos;
- propagação seja contida;
- autoridade seja preservada;
- evidências permaneçam disponíveis;
- recuperação seja possível.

## 227. Cancelamento

O cancelamento deverá definir:

- autoridade;
- motivo;
- ações pendentes;
- estado;
- reversão;
- comunicação;
- registro;
- encerramento.

## 228. Reversão

O plano de reversão deverá declarar:

- ponto de retorno;
- dados necessários;
- sequência;
- responsáveis;
- tempo;
- riscos;
- validação;
- comunicação;
- condição de abandono.

## 229. Compensação

Quando a ação não puder ser desfeita, poderá ser necessária ação compensatória.

A compensação deverá possuir:

- autoridade;
- propósito;
- impacto;
- proporcionalidade;
- registro;
- validação;
- comunicação.

## 230. Recuperação de falha

A seção de falha deverá indicar:

- erro;
- impacto;
- preservação;
- diagnóstico;
- tentativa permitida;
- reversão;
- escalonamento;
- evidência;
- próximo procedimento.

## 231. Tabela de erros conhecidos

Poderá relacionar:

- código;
- mensagem;
- causa provável;
- impacto;
- verificação;
- ação;
- limite;
- escalonamento.

## 232. Erro desconhecido

Diante de erro não documentado, o executor não deverá improvisar ação destrutiva.

Deverá:

- preservar estado;
- registrar;
- limitar impacto;
- consultar responsável;
- escalar;
- atualizar o documento posteriormente.

## 233. Validação técnica

Poderá incluir:

- integridade;
- disponibilidade;
- desempenho;
- capacidade;
- configuração;
- logs;
- métricas;
- segurança;
- dependências;
- compatibilidade.

## 234. Validação funcional

Deverá confirmar que a função:

- recebe entradas;
- executa regras;
- produz saídas;
- atende usuários;
- registra ações;
- preserva significado;
- cumpre o propósito.

## 235. Validação institucional

Deverá confirmar:

- autoridade;
- responsabilidade;
- legitimidade;
- obrigação;
- comunicação;
- evidência;
- coerência com a Engenharia Oficial.

## 236. Validação humana

Quando aplicável, pessoas autorizadas deverão avaliar:

- usabilidade;
- resultado;
- adequação;
- impacto;
- acessibilidade;
- segurança;
- qualidade percebida.

## 237. Critério de sucesso

O sucesso deverá ser definido por condições verificáveis.

“Executado sem erro” não será suficiente quando o resultado não tiver sido confirmado.

## 238. Sucesso parcial

O procedimento deverá permitir registrar:

- resultado alcançado;
- resultado ausente;
- limitação;
- risco;
- ação pendente;
- capacidade disponível.

## 239. Critério de falha

A falha deverá ser declarada quando:

- resultado obrigatório não for atingido;
- tempo for excedido;
- segurança for comprometida;
- validação for inconclusiva;
- impacto não previsto ocorrer;
- evidência for insuficiente.

## 240. Critério de encerramento

O procedimento somente deverá ser encerrado quando:

- execução terminar;
- resultado for validado;
- comunicação ocorrer;
- registros forem preservados;
- acessos temporários forem tratados;
- pendências possuírem responsáveis;
- estado estiver conhecido.

## 241. Pendências

Cada pendência deverá possuir:

- descrição;
- impacto;
- responsável;
- prazo;
- prioridade;
- dependência;
- forma de validação.

## 242. Registro de execução

O registro deverá relacionar:

- procedimento;
- versão;
- executor;
- aprovador;
- validador;
- início;
- fim;
- alvo;
- etapas;
- decisões;
- desvios;
- resultado;
- evidências.

## 243. Identificador da execução

Cada execução relevante deverá possuir identificador único para correlacionar:

- logs;
- mensagens;
- tarefas;
- mudanças;
- incidentes;
- aprovações;
- evidências;
- resultados.

## 244. Diário de execução

Atividades extensas poderão manter diário cronológico com:

- horário;
- ação;
- responsável;
- resultado;
- decisão;
- desvio;
- comunicação;
- próximo passo.

## 245. Preservação de evidências

As evidências deverão ser preservadas conforme:

- criticidade;
- sensibilidade;
- obrigação;
- risco;
- necessidade de auditoria;
- aprendizagem;
- responsabilidade.

## 246. Evidência suficiente

A evidência deverá permitir a terceiro competente compreender:

- o que foi executado;
- por quem;
- sob qual autoridade;
- em qual alvo;
- com qual resultado;
- com quais desvios;
- com qual validação.

## 247. Evidência negativa

Falhas, recusas, interrupções e resultados inconclusivos deverão ser preservados.

## 248. Anexos

Anexos poderão conter:

- diagramas;
- formulários;
- modelos;
- tabelas;
- comandos;
- capturas;
- mapas;
- contatos;
- exemplos;
- registros.

## 249. Modelos

Modelos deverão possuir:

- versão;
- campos;
- instruções;
- validações;
- classificação;
- proprietário;
- exemplo claramente identificado.

## 250. Fluxo visual

O fluxo deverá representar decisões e estados sem ocultar:

- autoridade;
- exceção;
- escalonamento;
- falha;
- encerramento.

## 251. Ícones

Ícones deverão possuir significado consistente e não depender somente de cor.

Deverão incluir:

- rótulo;
- contraste;
- descrição;
- acessibilidade;
- uso padronizado.

## 252. Cores

Cores poderão indicar:

- normalidade;
- atenção;
- risco;
- bloqueio;
- sucesso;
- simulação;
- pendência.

A informação deverá continuar compreensível sem depender exclusivamente da cor.

## 253. Interface interativa

Uma interface poderá:

- apresentar etapa atual;
- validar campos;
- restringir acesso;
- solicitar aprovação;
- executar ação;
- registrar resultado;
- oferecer ajuda;
- escalar;
- interromper;
- gerar evidência.

## 254. Navegação por ícones conceituais

Os ícones presentes nas imagens conceituais da Plataforma UNO poderão orientar a navegação entre capacidades, desde que:

- possuam significado documentado;
- sejam consistentes;
- tenham rótulos;
- sejam acessíveis;
- correspondam à arquitetura real;
- não induzam ação não autorizada.

## 255. Visualização de estado

A interface deverá distinguir:

- não iniciado;
- aguardando;
- autorizado;
- em execução;
- pausado;
- bloqueado;
- falho;
- revertendo;
- concluído;
- concluído parcialmente.

## 256. Visualização de autoridade

A interface deverá permitir reconhecer:

- quem solicitou;
- quem aprovou;
- quem executa;
- quem valida;
- quem pode interromper;
- quem deve ser comunicado.

## 257. Visualização de contexto

O executor deverá visualizar:

- ambiente;
- organização;
- alvo;
- estado;
- criticidade;
- risco;
- impacto;
- procedimento;
- versão;
- execução relacionada.

## 258. Formato legível por máquinas

Partes estruturadas poderão utilizar formatos que permitam:

- validação;
- busca;
- integração;
- automação;
- geração de interface;
- auditoria;
- comparação;
- versionamento.

## 259. Esquema documental

O esquema poderá definir campos obrigatórios e tipos para:

- metadados;
- entradas;
- etapas;
- papéis;
- decisões;
- evidências;
- resultados;
- versões;
- referências.

## 260. Fonte textual e representação estruturada

A organização deverá definir qual representação constitui fonte oficial quando existirem:

- Markdown;
- banco de dados;
- interface;
- workflow;
- código;
- documento exportado.

Mudanças deverão permanecer sincronizadas e rastreáveis.

## 261. Documentos como código

Procedimentos poderão ser mantidos como código ou texto versionado quando isso ampliar:

- revisão;
- rastreabilidade;
- validação;
- integração;
- automação;
- colaboração;
- recuperação.

## 262. Revisão de mudanças

Alterações deverão apresentar:

- diferença;
- justificativa;
- impacto;
- riscos;
- documentos relacionados;
- automações afetadas;
- necessidade de teste;
- aprovação.

## 263. Links

Links deverão ser:

- legítimos;
- persistentes;
- acessíveis;
- seguros;
- identificados;
- revisados.

## 264. Conteúdo incorporado

Conteúdo crítico não deverá depender exclusivamente de página externa que possa:

- mudar;
- desaparecer;
- exigir acesso indisponível;
- apresentar versão incompatível;
- violar soberania.

## 265. Versão offline

Procedimentos essenciais deverão possuir representação utilizável durante indisponibilidade dos repositórios principais.

## 266. Impressão

Versões impressas deverão apresentar:

- identificador;
- versão;
- data;
- classificação;
- condição de cópia controlada ou não controlada;
- forma de verificar atualização.

## 267. Cópia não controlada

Uma cópia não controlada deverá indicar que sua vigência precisa ser confirmada antes da execução.

## 268. Tradução

Traduções deverão preservar:

- significado;
- autoridade;
- termos;
- riscos;
- condições;
- proibições;
- critérios.

## 269. Versão acessível

O documento poderá possuir versões adaptadas para:

- leitor de tela;
- alto contraste;
- linguagem simplificada;
- áudio;
- impressão ampliada;
- navegação por teclado;
- dispositivos móveis.

## 270. Tempo estimado

O documento deverá indicar, quando aplicável:

- tempo de preparação;
- tempo de execução;
- tempo de validação;
- tempo de reversão;
- tempo de estabilização;
- variabilidade esperada.

## 271. Capacidade operacional

Procedimentos que processam demandas deverão indicar:

- volume;
- concorrência;
- limite;
- fila;
- saturação;
- escalonamento;
- modo degradado.

## 272. Interrupção prolongada

Procedimentos extensos deverão prever:

- troca de turno;
- handover;
- preservação de estado;
- descanso;
- continuidade do registro;
- transferência de autoridade;
- retomada.

## 273. Handover

A transferência deverá registrar:

- situação;
- ações;
- estado;
- decisões;
- riscos;
- pendências;
- acessos;
- próxima etapa;
- responsável anterior;
- responsável sucessor.

## 274. Exemplo de arquitetura mínima de runbook

Um runbook poderá seguir:

1. identificação;
2. propósito;
3. escopo;
4. pré-requisitos;
5. autoridade;
6. preparação;
7. execução;
8. validação;
9. falhas;
10. reversão;
11. comunicação;
12. encerramento;
13. evidências;
14. referências.

## 275. Exemplo de arquitetura mínima de playbook

Um playbook poderá seguir:

1. cenário;
2. objetivos;
3. papéis;
4. níveis;
5. percepção;
6. avaliação;
7. decisões;
8. capacidades;
9. runbooks relacionados;
10. comunicação;
11. acompanhamento;
12. adaptação;
13. retorno;
14. encerramento;
15. aprendizagem.

## 276. Exemplo de arquitetura mínima de POP

Um POP poderá seguir:

1. identificação;
2. finalidade;
3. campo de aplicação;
4. responsabilidades;
5. materiais;
6. segurança;
7. sequência;
8. controles;
9. resultados;
10. registros;
11. desvios;
12. referências.

## 277. Exemplo de arquitetura mínima de checklist

Um checklist poderá conter:

- contexto;
- executor;
- data;
- itens;
- resultado;
- não conformidade;
- ação;
- validação;
- assinatura;
- evidência.

## 278. Modelo não é conteúdo pronto

O uso de modelo não deverá permitir preenchimento mecânico sem análise da realidade.

Cada campo deverá ser compreendido, validado e adaptado ao contexto legítimo.

## 279. Critérios de qualidade estrutural

A estrutura deverá ser avaliada quanto a:

- completude;
- clareza;
- coerência;
- navegabilidade;
- precisão;
- acessibilidade;
- segurança;
- rastreabilidade;
- executabilidade;
- manutenção.

## 280. Revisão por executor

Pessoas que realizam a atividade deverão revisar o documento para identificar:

- etapas irreais;
- informação ausente;
- termos inadequados;
- dependências;
- riscos;
- tempos;
- ferramentas;
- desvios comuns.

## 281. Revisão por sucessor

Pessoa que não participou da criação deverá verificar se consegue compreender e executar o documento dentro de sua competência.

## 282. Revisão semântica

Curadores e responsáveis deverão verificar se o documento preserva:

- significado;
- propósito;
- princípios;
- relações;
- autoridade;
- responsabilidade.

## 283. Revisão técnica

Especialistas deverão validar:

- comandos;
- ferramentas;
- versões;
- arquitetura;
- dependências;
- resultados;
- reversão;
- segurança técnica.

## 284. Revisão de segurança

A segurança deverá avaliar:

- acessos;
- segredos;
- privilégios;
- dados;
- comandos;
- evidências;
- exposição;
- reversão;
- emergência.

## 285. Revisão jurídica e normativa

Quando aplicável, deverá verificar:

- competência;
- obrigação;
- direito;
- prazo;
- registro;
- privacidade;
- saúde e segurança;
- responsabilidade;
- comunicação;
- retenção.

## 286. Revisão de acessibilidade

A revisão deverá verificar se o público autorizado consegue:

- localizar;
- ler;
- compreender;
- navegar;
- executar;
- registrar;
- solicitar ajuda;
- interromper.

## 287. Antipadrões estruturais

Constituem antipadrões:

- cabeçalho sem versão;
- título genérico;
- escopo implícito;
- autoridade ausente;
- parâmetros não explicados;
- segredos incorporados;
- comandos destrutivos sem controle;
- validação vaga;
- falha sem caminho;
- reversão presumida;
- links frágeis;
- cópias sem controle;
- imagens sem acessibilidade;
- automação desconectada da fonte oficial.

## 288. Invariantes do Lote 2

Permanecem como invariantes:

- todo documento possuirá identidade persistente;
- toda versão possuirá estado;
- todo procedimento possuirá propósito;
- todo escopo indicará limites;
- toda execução crítica verificará o alvo;
- todo comando crítico explicará parâmetros;
- nenhum segredo será incorporado diretamente;
- toda ação destrutiva possuirá controle reforçado;
- todo caminho possuirá tratamento de falha;
- toda conclusão possuirá validação;
- toda execução relevante possuirá identificador;
- toda evidência possuirá contexto;
- toda interface derivará de fonte governada;
- toda cópia indicará sua versão;
- toda mudança avaliará representações e automações derivadas;
- toda instrução permanecerá subordinada à autoridade e à segurança.

## 289. Garantias esperadas

A aplicação desta arquitetura deverá garantir que os documentos sejam:

- identificáveis;
- localizáveis;
- compreensíveis;
- executáveis;
- seguros;
- validáveis;
- rastreáveis;
- reversíveis quando possível;
- acessíveis;
- integráveis;
- atualizáveis;
- transmissíveis.

## 290. Resultado esperado do Lote 2

Ao final desta etapa, a Plataforma UNO deverá possuir modelo capaz de transformar qualquer atividade governada em documento operacional com:

- contexto;
- estrutura;
- autoridade;
- sequência;
- decisão;
- controle;
- evidência;
- encerramento;
- memória.

## 291. Transição para o Lote 3

A estrutura documental define como a ação deverá ser representada.

O próximo lote estabelecerá como essa ação será executada por:

- pessoas;
- equipes;
- agentes artificiais;
- automações;
- sistemas;
- estruturas híbridas.

Serão aprofundados:

- autoridade de execução;
- confirmação humana;
- delegação;
- supervisão;
- automação;
- agentes;
- interrupção;
- reversão;
- segurança;
- idempotência;
- concorrência;
- responsabilidade;
- prestação de contas.

---

# Lote 3 — Execução Humana, Assistida e Automatizada

## 292. Finalidade da execução governada

A execução governada deverá transformar documentos operacionais em ações reais sem perder:

- propósito;
- contexto;
- autoridade;
- responsabilidade;
- segurança;
- rastreabilidade;
- possibilidade de intervenção;
- capacidade de aprendizagem.

A Plataforma UNO deverá reconhecer que uma mesma ação poderá ser executada por:

- pessoa;
- equipe;
- agente artificial;
- automação determinística;
- fornecedor;
- organização federada;
- combinação desses participantes.

## 293. Execução como mudança de estado

Toda execução deverá ser compreendida como tentativa de transformar um estado inicial em estado final desejado.

Ela deverá reconhecer:

- estado anterior;
- ação;
- transições;
- resultados intermediários;
- estado final;
- efeitos colaterais;
- evidências;
- possibilidade de reversão.

## 294. Execução consciente

A execução consciente exige que o executor possa reconhecer:

- o que está fazendo;
- por que está fazendo;
- sobre qual alvo;
- sob qual autoridade;
- com qual risco;
- qual resultado espera;
- quando deverá parar;
- como deverá registrar.

## 295. Execução humana

Na execução humana, a pessoa realiza diretamente as ações descritas pelo documento.

O procedimento deverá considerar:

- competência;
- experiência;
- percepção;
- fadiga;
- pressão;
- acessibilidade;
- comunicação;
- supervisão;
- possibilidade de erro;
- direito de interrupção.

## 296. Execução em equipe

Quando várias pessoas participarem, deverão ser definidos:

- papéis;
- responsável principal;
- autoridade;
- canais;
- sequência;
- paralelismo;
- pontos de sincronização;
- confirmação;
- handover;
- encerramento.

## 297. Executor principal

O executor principal deverá manter visão da execução como conjunto.

Ele deverá:

- confirmar condições;
- coordenar etapas;
- verificar resultados;
- registrar decisões;
- tratar desvios;
- solicitar ajuda;
- interromper quando necessário;
- conduzir o encerramento.

## 298. Executor auxiliar

O executor auxiliar deverá atuar dentro do escopo atribuído e comunicar:

- início;
- progresso;
- resultado;
- desvio;
- risco;
- impedimento;
- conclusão.

## 299. Dupla verificação

Atividades críticas poderão exigir duas pessoas para confirmar:

- alvo;
- comando;
- parâmetro;
- autorização;
- resultado;
- reversão;
- encerramento.

## 300. Verificação independente

A segunda pessoa deverá realizar análise real, e não apenas confirmar mecanicamente a decisão da primeira.

## 301. Comunicação de circuito fechado

Ordens e confirmações críticas deverão utilizar comunicação em circuito fechado:

1. a instrução é emitida;
2. o receptor repete ou confirma sua compreensão;
3. o emissor valida a confirmação;
4. a ação é executada;
5. o resultado é comunicado.

## 302. Pressão operacional

Sob pressão, o procedimento deverá reduzir:

- decisões simultâneas;
- linguagem ambígua;
- passos ocultos;
- troca excessiva de ferramentas;
- dependência de memória;
- comandos extensos;
- interrupções desnecessárias.

## 303. Fadiga

O executor deverá poder declarar fadiga, incapacidade temporária ou perda de atenção.

A organização deverá possuir mecanismos de:

- substituição;
- pausa;
- rodízio;
- supervisão;
- redução de carga;
- handover;
- apoio.

## 304. Sobrecarga cognitiva

Sinais de sobrecarga poderão incluir:

- repetição de erro;
- perda de sequência;
- esquecimento;
- dificuldade de decisão;
- comunicação incompleta;
- leitura incorreta;
- execução automática sem validação.

## 305. Viés de confirmação

O executor poderá interpretar sinais buscando confirmar hipótese inicial.

O procedimento deverá estimular:

- evidência alternativa;
- verificação independente;
- hipótese concorrente;
- revisão;
- escalonamento;
- interrupção.

## 306. Viés de autoridade

A presença de ordem superior não elimina a necessidade de verificar:

- legitimidade;
- escopo;
- segurança;
- alvo;
- contexto;
- impacto;
- possibilidade de execução.

## 307. Normalização do desvio

Desvios repetidos não deverão ser considerados seguros apenas porque ainda não causaram dano conhecido.

Eles deverão gerar:

- registro;
- análise;
- correção;
- atualização;
- mudança de arquitetura;
- treinamento.

## 308. Competência atual

A competência deverá ser confirmada conforme:

- atividade;
- risco;
- ferramenta;
- versão;
- contexto;
- tempo desde o último treinamento;
- experiência;
- autorização.

## 309. Execução supervisionada

A supervisão deverá estabelecer:

- supervisor;
- executor;
- limites;
- ponto de intervenção;
- comunicação;
- responsabilidade;
- registro;
- resultado.

## 310. Supervisão remota

A supervisão remota deverá confirmar:

- identidade;
- canal;
- visibilidade;
- acesso às evidências;
- capacidade de interromper;
- comunicação alternativa;
- registro.

## 311. Execução em campo

Procedimentos de campo deverão considerar:

- localização;
- clima;
- iluminação;
- energia;
- equipamento;
- comunicação;
- acesso;
- equipe;
- população próxima;
- riscos físicos;
- emergência.

## 312. Confirmação do local

Antes da ação em campo, deverão ser confirmados:

- endereço;
- instalação;
- equipamento;
- circuito;
- máquina;
- área;
- organização;
- autorização;
- isolamento;
- responsável local.

## 313. Execução remota

A execução remota deverá possuir controles para:

- identificar o alvo;
- confirmar ambiente;
- proteger acesso;
- registrar sessão;
- limitar privilégio;
- impedir conflito;
- manter comunicação;
- interromper;
- encerrar acesso.

## 314. Sessão privilegiada

Sessões privilegiadas deverão ser:

- autorizadas;
- temporárias;
- identificadas;
- monitoradas;
- registradas;
- encerradas;
- revisadas.

## 315. Execução assistida

Na execução assistida, ferramenta ou agente poderá:

- apresentar etapas;
- preencher dados;
- verificar condições;
- recomendar caminhos;
- gerar comandos;
- executar ações limitadas;
- coletar evidências;
- alertar;
- bloquear.

## 316. Limites da assistência

A ferramenta deverá distinguir claramente:

- informação;
- recomendação;
- previsão;
- decisão;
- execução;
- resultado confirmado;
- incerteza.

## 317. Recomendação de agente

Uma recomendação deverá indicar, quando possível:

- contexto utilizado;
- evidências;
- hipótese;
- risco;
- confiança;
- alternativas;
- limitações;
- autoridade necessária.

## 318. Recomendação não é autorização

Nenhuma recomendação produzida por agente deverá ser tratada automaticamente como autorização institucional.

## 319. Confirmação humana significativa

A confirmação humana deverá envolver compreensão suficiente de:

- ação;
- alvo;
- impacto;
- risco;
- resultado;
- reversão.

Clicar em “confirmar” sem contexto não constitui supervisão significativa.

## 320. Fadiga de confirmação

Excesso de confirmações poderá levar à aprovação automática.

Confirmações deverão ser utilizadas nos pontos em que realmente protegem:

- autoridade;
- segurança;
- irreversibilidade;
- impacto;
- mudança de escopo.

## 321. Interface de confirmação

A interface deverá apresentar antes da aprovação:

- procedimento;
- versão;
- ação;
- alvo;
- ambiente;
- impacto;
- risco;
- solicitante;
- evidências;
- reversão;
- prazo.

## 322. Aprovação em múltiplos níveis

Ações de maior impacto poderão exigir:

- aprovação técnica;
- aprovação funcional;
- aprovação de segurança;
- aprovação institucional;
- aprovação financeira;
- autorização de autoridade pública, quando aplicável.

## 323. Aprovação condicional

A aprovação poderá estabelecer:

- limite;
- janela;
- volume;
- ambiente;
- responsáveis;
- controles;
- condição;
- validade;
- forma de encerramento.

## 324. Expiração da aprovação

Autorizações deverão expirar quando:

- o prazo terminar;
- o contexto mudar;
- o alvo mudar;
- o risco aumentar;
- a execução for cancelada;
- o procedimento mudar;
- a autoridade revogar.

## 325. Delegação a agente

A delegação deverá definir:

- identidade do agente;
- propósito;
- capacidade;
- escopo;
- dados;
- ferramentas;
- ações;
- limites;
- supervisão;
- duração;
- revogação.

## 326. Agente especializado

Um agente especializado deverá atuar sobre domínio delimitado e conhecido.

Ele não deverá ampliar sozinho:

- escopo;
- permissões;
- objetivos;
- destinatários;
- duração;
- recursos;
- autoridade.

## 327. Identidade do agente

Cada agente deverá possuir identidade persistente para correlacionar:

- solicitações;
- decisões;
- ações;
- ferramentas;
- resultados;
- falhas;
- evidências;
- versões;
- supervisores.

## 328. Versão do agente

A execução deverá registrar, quando relevante:

- modelo;
- versão;
- configuração;
- instruções;
- ferramentas;
- políticas;
- memória utilizada;
- data.

## 329. Contexto do agente

O agente deverá receber apenas o contexto:

- necessário;
- legítimo;
- atualizado;
- autorizado;
- verificável;
- proporcional.

## 330. Contexto incompleto

Quando o agente reconhecer ausência de contexto necessário, deverá:

- solicitar informação;
- limitar recomendação;
- declarar incerteza;
- interromper;
- escalar.

## 331. Contexto contraditório

Diante de instruções ou dados conflitantes, o agente deverá:

- identificar conflito;
- preservar fontes;
- comparar autoridade;
- solicitar decisão;
- evitar ação irreversível;
- registrar.

## 332. Hierarquia de instruções

A execução deverá respeitar a hierarquia entre:

- lei;
- normas aplicáveis;
- Engenharia Oficial;
- política;
- plano;
- procedimento;
- autorização;
- solicitação;
- recomendação.

Instrução inferior não poderá contrariar requisito superior.

## 333. Instrução maliciosa

Agentes e operadores deverão reconhecer tentativas de:

- ampliar escopo;
- revelar segredo;
- desativar segurança;
- alterar evidência;
- executar comando indevido;
- ignorar autoridade;
- mudar propósito;
- contornar controle.

## 334. Entrada não confiável

Conteúdo proveniente de:

- usuário;
- arquivo;
- mensagem;
- página;
- integração;
- fornecedor;
- modelo;
- agente;

deverá ser tratado conforme sua confiabilidade e autoridade.

## 335. Automação determinística

Automação determinística executa regras predefinidas a partir de entradas e condições conhecidas.

Ela deverá possuir:

- especificação;
- testes;
- versionamento;
- logs;
- limites;
- tratamento de falha;
- proprietário;
- reversão.

## 336. Automação probabilística

Automação probabilística utiliza modelos ou métodos cujos resultados podem variar.

Ela deverá possuir controles adicionais para:

- confiança;
- explicação;
- validação;
- limite;
- supervisão;
- comparação;
- erro;
- viés;
- revisão.

## 337. Automação orientada por evento

Eventos automáticos deverão ser validados quanto a:

- origem;
- autenticidade;
- duplicidade;
- temporalidade;
- ordem;
- contexto;
- escopo;
- autorização.

## 338. Automação agendada

A execução agendada deverá verificar, no momento da execução:

- validade da autorização;
- estado;
- janela;
- dependências;
- conflito;
- versão;
- alvo;
- bloqueios.

## 339. Automação recorrente

A recorrência deverá possuir:

- frequência;
- proprietário;
- condição;
- limite;
- monitoramento;
- tratamento de falha;
- suspensão;
- revisão;
- encerramento.

## 340. Automação acionada por limiar

O limiar deverá possuir:

- definição;
- fonte;
- cálculo;
- tolerância;
- contexto;
- tratamento de ruído;
- escalonamento;
- revisão.

## 341. Automação acionada por IA

A decisão de iniciar automação a partir de inferência deverá considerar:

- confiança;
- impacto;
- reversibilidade;
- autoridade;
- confirmação humana;
- evidências;
- possibilidade de falso positivo;
- possibilidade de falso negativo.

## 342. Workflow

Workflow deverá representar:

- estados;
- participantes;
- transições;
- decisões;
- permissões;
- prazos;
- evidências;
- falhas;
- encerramento.

## 343. Estado do workflow

Cada execução deverá possuir estado inequívoco, como:

- criado;
- aguardando dados;
- aguardando aprovação;
- autorizado;
- em execução;
- pausado;
- bloqueado;
- falho;
- revertendo;
- concluído;
- cancelado.

## 344. Transição de estado

Toda transição relevante deverá registrar:

- estado anterior;
- evento;
- responsável;
- autoridade;
- horário;
- estado posterior;
- evidência.

## 345. Máquina de estados governada

A máquina de estados não deverá permitir transição que ignore:

- pré-condição;
- autorização;
- validação;
- segurança;
- dependência;
- encerramento obrigatório.

## 346. Orquestração

A orquestração deverá coordenar:

- pessoas;
- agentes;
- sistemas;
- serviços;
- filas;
- ferramentas;
- aprovações;
- registros;
- resultados.

## 347. Orquestrador

O orquestrador deverá possuir autoridade limitada à coordenação prevista.

Ele não deverá tornar-se proprietário implícito de todas as decisões executadas.

## 348. Delegação operacional

Toda tarefa delegada deverá conter:

- objetivo;
- alvo;
- entrada;
- limite;
- prazo;
- autoridade;
- resultado esperado;
- evidência;
- condição de devolução.

## 349. Devolução da tarefa

O delegado deverá devolver:

- estado;
- resultado;
- evidência;
- desvio;
- risco;
- pendência;
- recomendação, quando autorizada.

## 350. Encadeamento de procedimentos

Um procedimento poderá acionar outro quando:

- a condição estiver presente;
- o escopo for compatível;
- a autoridade for mantida;
- o contexto for transferido;
- o resultado for correlacionado;
- a execução permanecer rastreável.

## 351. Transferência de contexto

Ao encadear procedimentos, deverão ser transferidos:

- identificador;
- alvo;
- ambiente;
- estado;
- autoridade;
- dados;
- risco;
- evidências;
- decisões;
- limites.

## 352. Transferência mínima

Somente o contexto necessário deverá ser transferido, respeitando:

- privacidade;
- segurança;
- autonomia;
- segregação;
- soberania;
- finalidade.

## 353. Concorrência

Execuções concorrentes poderão disputar:

- recurso;
- dado;
- configuração;
- autoridade;
- capacidade;
- janela;
- atenção;
- fornecedor.

## 354. Controle de concorrência

Poderão ser utilizados:

- bloqueios;
- filas;
- prioridades;
- versões;
- transações;
- reservas;
- coordenação;
- detecção de conflito;
- reconciliação.

## 355. Bloqueio operacional

O bloqueio deverá possuir:

- proprietário;
- motivo;
- início;
- alvo;
- duração;
- renovação;
- expiração;
- liberação;
- tratamento de abandono.

## 356. Bloqueio abandonado

Bloqueios sem proprietário ativo deverão ser detectados e tratados de forma governada.

Sua remoção deverá possuir autoridade e evidência.

## 357. Condição de corrida

Procedimentos e automações deverão ser avaliados quanto a mudanças simultâneas que possam produzir resultado inconsistente.

## 358. Controle de versão do estado

A execução poderá verificar se o estado permaneceu inalterado desde a leitura até a alteração.

Se houver mudança, deverá:

- reavaliar;
- interromper;
- atualizar;
- reconciliar;
- escalar.

## 359. Transação

Quando possível, ações relacionadas deverão ser agrupadas de forma a preservar consistência.

## 360. Transação distribuída

Quando não houver transação única entre sistemas, deverão existir estratégias de:

- idempotência;
- compensação;
- eventos;
- confirmação;
- reconciliação;
- repetição;
- rastreabilidade.

## 361. Idempotência operacional

Uma ação idempotente deverá produzir resultado equivalente quando repetida com a mesma intenção e identificador.

## 362. Chave de idempotência

Operações críticas poderão utilizar identificador único para impedir:

- pagamento duplicado;
- solicitação duplicada;
- mensagem repetida;
- provisionamento repetido;
- execução múltipla.

## 363. Limite de repetição

Toda retentativa deverá possuir limite baseado em:

- impacto;
- capacidade;
- erro;
- custo;
- tempo;
- segurança;
- probabilidade de recuperação.

## 364. Backoff

Retentativas automáticas poderão aumentar o intervalo para evitar:

- saturação;
- conflito;
- bloqueio;
- propagação;
- custo excessivo;
- agravamento da falha.

## 365. Circuit breaker

A automação poderá interromper chamadas quando reconhecer falha persistente.

O mecanismo deverá definir:

- limiar;
- janela;
- estado;
- período;
- teste de retorno;
- alerta;
- intervenção.

## 366. Timeout

Toda dependência externa deverá possuir tempo limite coerente com:

- função;
- impacto;
- experiência;
- capacidade;
- alternativa;
- risco de duplicação.

## 367. Cancelamento cooperativo

Pessoas, agentes e sistemas deverão responder a solicitação legítima de cancelamento preservando, quando possível:

- estado seguro;
- evidência;
- comunicação;
- reversão;
- resultado parcial.

## 368. Kill switch

Automações críticas deverão possuir mecanismo de interrupção emergencial.

O mecanismo deverá ser:

- protegido;
- acessível à autoridade;
- testado;
- registrado;
- independente quando necessário;
- capaz de impedir nova execução.

## 369. Pausa

A pausa deverá preservar:

- estado;
- tarefa;
- contexto;
- bloqueios necessários;
- autoridade;
- tempo;
- condição de retomada.

## 370. Retomada

Antes de retomar, deverão ser verificadas novamente:

- condições;
- versão;
- alvo;
- contexto;
- autorização;
- dependências;
- risco;
- mudanças concorrentes.

## 371. Execução longa

Execuções longas deverão possuir:

- checkpoints;
- progresso;
- heartbeat;
- logs;
- renovação de autorização;
- limite;
- pausa;
- retomada;
- handover;
- cancelamento.

## 372. Checkpoint

O checkpoint deverá registrar estado suficiente para:

- compreender progresso;
- retomar;
- reverter;
- transferir;
- auditar;
- evitar repetição indevida.

## 373. Heartbeat

Processos longos deverão emitir sinal de atividade.

A ausência do sinal deverá produzir:

- alerta;
- verificação;
- pausa;
- recuperação;
- escalonamento;
- encerramento controlado.

## 374. Execução órfã

Uma execução será órfã quando continuar sem responsável, supervisor ou coordenação reconhecível.

Ela deverá ser detectada e:

- pausada;
- reassumida;
- encerrada;
- investigada;
- registrada.

## 375. Handover humano

A transferência entre pessoas deverá registrar:

- execução;
- versão;
- estado;
- ações;
- resultados;
- decisões;
- riscos;
- pendências;
- acessos;
- próxima etapa;
- autoridade.

## 376. Handover entre agentes

A transferência entre agentes deverá preservar:

- propósito;
- contexto mínimo;
- autoridade;
- restrições;
- evidências;
- estado;
- resultado esperado;
- supervisão.

## 377. Handover humano-agente

A interface deverá deixar claro:

- quem detém a tarefa;
- quem decide;
- quem executa;
- o que está pendente;
- quando há devolução;
- qual confirmação é necessária.

## 378. Estado de espera humana

Quando aguardar pessoa, o sistema deverá indicar:

- decisão necessária;
- responsável;
- prazo;
- impacto;
- alternativas;
- escalonamento;
- estado seguro durante a espera.

## 379. Estado de espera externa

Quando depender de fornecedor ou organização, deverão ser registrados:

- protocolo;
- responsável;
- previsão;
- compromisso;
- escalonamento;
- atualização;
- alternativa.

## 380. Observabilidade da execução

Toda execução crítica deverá produzir visibilidade sobre:

- início;
- estado;
- progresso;
- ações;
- decisões;
- falhas;
- recursos;
- impacto;
- encerramento.

## 381. Logs

Os logs deverão registrar eventos suficientes sem expor indevidamente:

- segredos;
- dados pessoais;
- conteúdo sensível;
- chaves;
- credenciais;
- informações protegidas.

## 382. Métricas

Poderão ser medidas:

- duração;
- sucesso;
- falha;
- repetição;
- espera;
- intervenção;
- reversão;
- volume;
- capacidade;
- custo;
- impacto.

## 383. Rastreamento distribuído

Execuções entre sistemas poderão utilizar identificador comum para relacionar:

- solicitação;
- serviços;
- agentes;
- filas;
- resultados;
- erros;
- evidências.

## 384. Painel de execução

O painel deverá permitir reconhecer:

- o que está ocorrendo;
- por quê;
- onde;
- quem é responsável;
- qual procedimento;
- qual versão;
- qual estado;
- quais riscos;
- qual próxima ação.

## 385. Alerta

Alertas deverão possuir:

- condição;
- severidade;
- contexto;
- ação esperada;
- responsável;
- prazo;
- escalonamento;
- forma de encerramento.

## 386. Alerta sem ação

Alertas que não possuem resposta possível deverão ser revistos para evitar:

- fadiga;
- ruído;
- perda de confiança;
- ocultação de sinais importantes.

## 387. Automação de resposta

A resposta automática deverá ser proporcional à confiança, ao impacto e à reversibilidade.

## 388. Auto-remediação

A auto-remediação somente deverá ocorrer quando:

- a condição for suficientemente reconhecível;
- a ação for autorizada;
- o escopo for limitado;
- o risco for aceitável;
- a execução for observável;
- houver tratamento de falha;
- existir interrupção;
- existir reversão ou compensação.

## 389. Auto-remediação em cascata

A automação não deverá executar sucessivas remediações sem avaliar se:

- a causa mudou;
- o impacto aumentou;
- a ação anterior falhou;
- o contexto permanece válido;
- há risco de ciclo;
- é necessário escalonamento humano.

## 390. Loop operacional

Ciclos de automação deverão possuir:

- condição de saída;
- limite;
- duração;
- alerta;
- supervisão;
- tratamento de repetição;
- registro.

## 391. Automação sobre pessoas

Ações automatizadas com impacto sobre pessoas deverão possuir controles reforçados.

Poderão incluir:

- notificação;
- classificação;
- priorização;
- acesso;
- suspensão;
- atribuição;
- encaminhamento;
- avaliação.

## 392. Decisão de alto impacto

Decisões que afetem direitos, dignidade, renda, acesso, segurança ou autoridade não deverão ser delegadas integralmente a automação sem governança e revisão compatíveis.

## 393. Explicabilidade operacional

Para ações críticas, deverá ser possível compreender:

- entrada;
- regra ou fundamento;
- decisão;
- ferramenta;
- executor;
- resultado;
- limite;
- evidência.

## 394. Contestabilidade

Pessoas afetadas deverão possuir, quando aplicável:

- informação;
- canal de contestação;
- revisão humana;
- correção;
- recurso;
- registro;
- proteção contra retaliação.

## 395. Viés

Sistemas e procedimentos deverão ser avaliados quanto a efeitos desiguais sobre:

- pessoas;
- grupos;
- territórios;
- organizações;
- condições sociais;
- níveis de acesso;
- necessidades de acessibilidade.

## 396. Supervisão contínua

A supervisão deverá acompanhar:

- comportamento;
- desvios;
- resultados;
- impactos;
- falhas;
- limites;
- necessidade de intervenção;
- mudanças de contexto.

## 397. Supervisão por amostragem

Quando a revisão integral não for viável, a amostra deverá considerar:

- criticidade;
- risco;
- novidade;
- exceção;
- volume;
- agente;
- organização;
- histórico;
- resultado incomum.

## 398. Execução em sandbox

Atividades novas, críticas ou probabilísticas poderão ser executadas primeiro em ambiente isolado.

O sandbox deverá evitar:

- efeitos reais;
- exposição;
- propagação;
- comunicação externa;
- alteração de produção;
- uso de dados indevidos.

## 399. Dados de teste

Dados utilizados em testes deverão ser:

- sintéticos;
- anonimizados;
- autorizados;
- minimizados;
- protegidos;
- eliminados conforme política.

## 400. Promoção para produção

A passagem da execução testada para produção deverá exigir:

- resultado;
- evidência;
- revisão;
- segurança;
- aprovação;
- versão;
- plano de reversão;
- monitoramento;
- comunicação.

## 401. Canary

A execução poderá ser liberada para escopo reduzido antes da ampliação.

Deverão ser definidos:

- população;
- volume;
- duração;
- métricas;
- limites;
- falha;
- reversão;
- decisão de avançar.

## 402. Execução progressiva

A ampliação poderá ocorrer por:

- usuários;
- organizações;
- regiões;
- recursos;
- serviços;
- volumes;
- horários;
- níveis de risco.

## 403. Feature flag operacional

Mecanismos de ativação gradual deverão possuir:

- proprietário;
- escopo;
- estado;
- autoridade;
- auditoria;
- expiração;
- segurança;
- plano de remoção.

## 404. Shadow mode

Uma automação poderá observar e recomendar sem executar.

Esse modo deverá permitir comparar:

- recomendação;
- decisão humana;
- resultado;
- erro;
- confiança;
- impacto potencial.

## 405. Human-in-the-loop

O humano deverá participar de ponto decisório significativo.

Deverá possuir:

- contexto;
- tempo;
- competência;
- autoridade;
- alternativa;
- possibilidade de recusa;
- evidência.

## 406. Human-on-the-loop

Na supervisão sobre automação, a pessoa deverá conseguir:

- acompanhar;
- compreender;
- pausar;
- interromper;
- corrigir;
- limitar;
- revisar.

## 407. Human-out-of-the-loop

A execução sem supervisão humana imediata somente deverá ocorrer quando:

- o risco for compatível;
- a ação for delimitada;
- a automação for comprovada;
- os limites forem fortes;
- a observabilidade existir;
- houver interrupção posterior;
- a responsabilidade estiver atribuída.

## 408. Níveis de autonomia

A Plataforma UNO poderá classificar:

1. recomendação;
2. preparação;
3. execução mediante confirmação;
4. execução com supervisão;
5. execução autônoma limitada;
6. execução autônoma ampliada sob governança específica.

## 409. Autonomia não cumulativa automática

O sucesso em uma atividade não deverá ampliar automaticamente a autonomia do agente para outras atividades.

## 410. Promoção de autonomia

A ampliação deverá considerar:

- evidências;
- histórico;
- impacto;
- estabilidade;
- compreensão;
- segurança;
- capacidade de interrupção;
- auditoria;
- autoridade.

## 411. Redução de autonomia

A autonomia deverá ser reduzida quando houver:

- falha;
- mudança de contexto;
- comportamento inesperado;
- risco;
- incidente;
- alteração normativa;
- perda de observabilidade;
- dúvida de autoridade.

## 412. Quarentena

Agentes, scripts, ferramentas ou procedimentos suspeitos deverão poder ser colocados em quarentena.

A quarentena deverá impedir:

- nova execução;
- acesso;
- propagação;
- alteração de evidências;
- interação externa.

## 413. Revogação

A revogação deverá alcançar:

- identidade;
- token;
- chave;
- permissão;
- agenda;
- gatilho;
- workflow;
- integração;
- sessão;
- delegação.

## 414. Execução por fornecedor

A atividade do fornecedor deverá permanecer relacionada a:

- contrato;
- identidade;
- autoridade;
- escopo;
- janela;
- acesso;
- supervisão;
- evidência;
- resultado;
- encerramento.

## 415. Acesso de fornecedor

O acesso deverá ser:

- solicitado;
- aprovado;
- temporário;
- limitado;
- monitorado;
- revogado;
- revisado.

## 416. Execução federada

A execução entre organizações deverá preservar:

- autonomia;
- identidade;
- fronteiras;
- autoridade;
- dados;
- responsabilidades;
- registros;
- encerramento.

## 417. Solicitação federada

A solicitação deverá conter:

- organização de origem;
- organização destinatária;
- missão;
- escopo;
- capacidade;
- autoridade;
- dados;
- prazo;
- resultado;
- evidência.

## 418. Aceitação federada

A organização destinatária deverá poder:

- aceitar;
- aceitar parcialmente;
- condicionar;
- recusar;
- solicitar informação;
- escalar.

## 419. Recusa federada legítima

A recusa deverá ser possível quando a solicitação:

- exceder autoridade;
- ameaçar segurança;
- violar lei;
- comprometer autonomia;
- exceder capacidade;
- carecer de contexto;
- produzir impacto desproporcional.

## 420. Prestação de contas federada

As organizações deverão registrar:

- solicitação;
- decisão;
- execução;
- recursos;
- resultado;
- impacto;
- pendências;
- encerramento.

## 421. Execução offline

A execução sem conectividade deverá preservar:

- identidade;
- autoridade;
- procedimento;
- registros;
- tempo;
- dados mínimos;
- segurança;
- reconciliação;
- sincronização posterior.

## 422. Credencial offline

Credenciais offline deverão possuir:

- escopo;
- validade;
- proteção;
- revogação possível;
- registro;
- limite;
- reconciliação posterior.

## 423. Registro offline

O registro deverá receber identificador que permita incorporação posterior sem duplicidade.

## 424. Sincronização posterior

A sincronização deverá tratar:

- conflito;
- ordem;
- duplicidade;
- identidade;
- temporalidade;
- integridade;
- rejeição;
- compensação;
- evidência.

## 425. Execução em emergência

A urgência poderá alterar:

- sequência;
- autoridade;
- canal;
- profundidade;
- recurso;
- tempo.

Não deverá eliminar:

- proteção à vida;
- legitimidade;
- responsabilidade;
- registro mínimo;
- segurança essencial;
- revisão posterior.

## 426. Procedimento emergencial abreviado

O modo abreviado deverá conter:

- condição;
- autoridade;
- ações imediatas;
- limites;
- comunicação;
- registro;
- caminho para procedimento completo;
- encerramento.

## 427. Regularização posterior

Ações emergenciais deverão ser regularizadas por:

- registro;
- revisão;
- reconciliação;
- revogação de acessos;
- validação;
- prestação de contas;
- correção.

## 428. Execução recusada

A recusa deverá registrar:

- solicitação;
- motivo;
- risco;
- fundamento;
- responsável;
- autoridade comunicada;
- alternativa;
- escalonamento.

## 429. Execução interrompida

A interrupção deverá registrar:

- etapa;
- estado;
- motivo;
- impacto;
- evidências;
- ações de segurança;
- responsável;
- condição de retomada.

## 430. Execução falha

A falha deverá gerar:

- preservação;
- comunicação;
- diagnóstico;
- reversão ou compensação;
- escalonamento;
- investigação;
- ação corretiva;
- aprendizagem.

## 431. Execução concluída parcialmente

O encerramento parcial deverá indicar:

- resultados obtidos;
- resultados pendentes;
- capacidade disponível;
- riscos;
- responsáveis;
- prazo;
- próxima ação.

## 432. Execução concluída

A conclusão deverá confirmar:

- objetivo;
- resultado;
- validação;
- comunicação;
- evidências;
- encerramento de acessos;
- liberação de bloqueios;
- pendências;
- estabilidade.

## 433. Assinatura da execução

Execuções críticas poderão exigir assinatura ou confirmação atribuível de:

- executor;
- aprovador;
- validador;
- proprietário;
- autoridade de encerramento.

## 434. Não repúdio

Mecanismos de evidência deverão reduzir a possibilidade de negar indevidamente ação realizada ou autorização concedida.

## 435. Privacidade da execução

Registros deverão preservar o necessário sem expor:

- dados pessoais excessivos;
- segredos;
- informações protegidas;
- conteúdo não relacionado;
- comunicações particulares.

## 436. Retenção

A retenção deverá considerar:

- obrigação;
- criticidade;
- auditoria;
- investigação;
- aprendizagem;
- privacidade;
- custo;
- eliminação.

## 437. Aprendizagem durante a execução

A execução deverá permitir registrar:

- dúvida;
- atalho;
- desvio;
- dependência;
- erro documental;
- oportunidade;
- melhoria;
- conhecimento tácito.

## 438. Feedback do executor

O executor deverá possuir canal para indicar:

- etapa confusa;
- resultado inadequado;
- ferramenta incompatível;
- tempo irreal;
- risco;
- dependência ausente;
- melhoria.

## 439. Feedback do afetado

Pessoas ou organizações afetadas poderão contribuir com informações sobre:

- resultado;
- impacto;
- qualidade;
- acessibilidade;
- comunicação;
- efeito inesperado;
- necessidade de correção.

## 440. Antipadrões de execução

Constituem antipadrões:

- execução sem identidade;
- confirmação humana simbólica;
- automação sem limite;
- agente ampliando o próprio escopo;
- retentativa infinita;
- comando destrutivo sem validação;
- execução órfã;
- handover sem contexto;
- acesso de fornecedor permanente;
- emergência utilizada para ignorar responsabilidade;
- sucesso declarado sem validação;
- falha ocultada;
- autonomia ampliada sem evidência;
- registro contendo segredos.

## 441. Invariantes do Lote 3

Permanecem como invariantes:

- toda execução possuirá identidade;
- toda ação possuirá alvo reconhecível;
- toda autoridade possuirá escopo;
- toda automação possuirá proprietário;
- toda delegação possuirá limite;
- toda execução crítica poderá ser interrompida;
- toda retentativa possuirá limite;
- toda ação não idempotente possuirá proteção contra duplicidade;
- toda execução longa possuirá acompanhamento;
- toda transferência preservará contexto suficiente;
- todo agente permanecerá subordinado à Engenharia Oficial;
- toda confirmação humana deverá ser significativa;
- toda autonomia poderá ser reduzida ou revogada;
- toda execução emergencial será regularizada;
- toda falha produzirá evidência;
- toda conclusão será validada;
- responsabilidade não será transferida integralmente à ferramenta.

## 442. Garantias esperadas

A aplicação deste lote deverá garantir que:

- pessoas executem com contexto;
- equipes coordenem responsabilidades;
- agentes atuem sob limites;
- automações sejam observáveis;
- ações concorrentes sejam controladas;
- falhas possam ser interrompidas;
- estados possam ser retomados;
- acessos possam ser revogados;
- execuções federadas preservem autonomia;
- resultados possam ser validados;
- decisões possam ser auditadas;
- aprendizados possam retornar aos documentos.

## 443. Resultado esperado do Lote 3

Ao final desta etapa, a Plataforma UNO deverá possuir modelo de execução capaz de integrar:

- conhecimento;
- pessoas;
- agentes;
- ferramentas;
- automações;
- autoridade;
- segurança;
- observabilidade;
- evidência;
- aprendizagem.

## 444. Transição para o Lote 4

A execução somente permanecerá confiável quando os documentos, workflows, interfaces e automações forem mantidos durante todo o seu ciclo de vida.

O próximo lote deverá estabelecer:

- criação;
- autoria;
- revisão;
- aprovação;
- versionamento;
- publicação;
- distribuição;
- descoberta;
- treinamento;
- integração;
- atualização;
- substituição;
- arquivamento;
- recuperação;
- preservação histórica.

---

# Lote 4 — Ciclo de Vida, Versionamento, Publicação e Integração Operacional

## 445. Finalidade do ciclo de vida

O ciclo de vida deverá assegurar que cada runbook, playbook, procedimento, instrução, checklist, workflow, interface ou automação:

- nasça de necessidade legítima;
- possua proprietário;
- seja construído com conhecimento suficiente;
- seja revisado;
- seja aprovado;
- seja publicado;
- permaneça acessível;
- acompanhe a realidade;
- seja testado;
- seja corrigido;
- seja substituído;
- preserve sua memória.

## 446. Estados do ciclo de vida

O documento poderá atravessar:

1. proposto;
2. em elaboração;
3. em revisão;
4. em validação;
5. aprovado;
6. vigente;
7. suspenso;
8. em correção;
9. substituído;
10. revogado;
11. arquivado.

## 447. Estado proposto

Nesse estado deverá existir, no mínimo:

- necessidade;
- solicitante;
- propósito;
- escopo inicial;
- risco;
- proprietário proposto;
- prioridade;
- relação com documentos existentes.

## 448. Estado em elaboração

Nesse estado, o conteúdo poderá ser alterado livremente pelos responsáveis autorizados.

Ele não deverá ser utilizado como instrução oficial de produção.

## 449. Estado em revisão

O documento deverá estar suficientemente completo para avaliação por:

- especialistas;
- operadores;
- segurança;
- conformidade;
- proprietários;
- partes afetadas, quando aplicável.

## 450. Estado em validação

A validação deverá verificar se o documento é:

- correto;
- executável;
- seguro;
- compreensível;
- acessível;
- coerente;
- rastreável;
- compatível com as ferramentas;
- adequado ao propósito.

## 451. Estado aprovado

A aprovação confirma que o documento está autorizado para preparação de publicação ou uso conforme suas condições.

A aprovação não comprova que ele funciona na prática.

## 452. Estado vigente

O estado vigente deverá indicar que o documento:

- está publicado;
- possui autoridade;
- está dentro da validade;
- é a referência oficial para seu escopo;
- atende às condições estabelecidas.

## 453. Estado vigente não comprovado

Quando aprovado, mas ainda sem exercício suficiente, deverá permanecer marcado:

**NÃO COMPROVADO**

## 454. Estado suspenso

Um documento deverá ser suspenso quando:

- houver risco;
- estiver incorreto;
- estiver desatualizado;
- depender de recurso indisponível;
- tiver produzido falha relevante;
- estiver sob investigação;
- perder autoridade;
- conflitar com requisito superior.

## 455. Efeito da suspensão

A suspensão deverá:

- impedir uso ordinário;
- informar responsáveis;
- bloquear automações relacionadas, quando necessário;
- apresentar alternativa;
- preservar evidências;
- iniciar correção;
- indicar autoridade.

## 456. Estado em correção

Durante a correção, a versão vigente anterior poderá permanecer:

- ativa;
- limitada;
- suspensa;
- substituída por contingência.

A decisão deverá ser explícita.

## 457. Estado substituído

O documento será substituído quando nova versão ou novo documento assumir legitimamente seu escopo.

A versão anterior deverá apontar para a referência vigente.

## 458. Estado revogado

A revogação indica que o documento não deverá mais ser utilizado.

Ela deverá informar:

- motivo;
- autoridade;
- data;
- impacto;
- alternativa;
- tratamento de cópias;
- automações afetadas.

## 459. Estado arquivado

O arquivamento preserva o documento para:

- memória;
- auditoria;
- investigação;
- reconstrução histórica;
- aprendizagem;
- obrigação.

O documento arquivado não deverá ser apresentado como vigente.

## 460. Gatilhos para criação

Um novo documento poderá ser necessário diante de:

- nova função;
- atividade recorrente;
- risco;
- incidente;
- auditoria;
- obrigação;
- dependência;
- tecnologia;
- fornecedor;
- conhecimento tácito;
- dificuldade de sucessão;
- estratégia de continuidade;
- automação.

## 461. Solicitação de criação

A solicitação deverá indicar:

- problema;
- atividade;
- finalidade;
- público;
- criticidade;
- urgência;
- riscos;
- documentos relacionados;
- proprietário proposto;
- benefício esperado.

## 462. Triagem da solicitação

A triagem deverá verificar se:

- já existe documento correspondente;
- o documento existente precisa ser atualizado;
- o conteúdo pertence a política, plano ou procedimento;
- a demanda pode ser atendida por instrução menor;
- o escopo possui proprietário;
- a prioridade é legítima.

## 463. Proibição de duplicidade não governada

Documentos não deverão ser criados separadamente quando representam a mesma atividade sem justificativa de contexto.

A duplicidade poderá produzir:

- conflito;
- divergência;
- execução incorreta;
- manutenção excessiva;
- versões incompatíveis;
- perda de confiança.

## 464. Variação legítima

Variações poderão existir por:

- organização;
- território;
- legislação;
- ambiente;
- tecnologia;
- equipamento;
- idioma;
- acessibilidade;
- fornecedor;
- risco.

A relação com a fonte comum deverá permanecer explícita.

## 465. Documento-base

Um documento-base poderá estabelecer elementos permanentes e comuns.

Variações locais deverão declarar:

- o que herdam;
- o que alteram;
- por que alteram;
- quem aprovou;
- onde se aplicam;
- como permanecem atualizadas.

## 466. Autoria colaborativa

A elaboração poderá envolver:

- proprietários;
- operadores;
- especialistas;
- curadores;
- segurança;
- jurídico;
- fornecedores;
- agentes;
- usuários;
- organizações federadas.

## 467. Autoridade da autoria

Contribuir com conteúdo não concede autoridade para aprová-lo ou publicá-lo.

## 468. Coleta de conhecimento

A criação deverá utilizar:

- observação;
- entrevista;
- execução acompanhada;
- incidentes;
- registros;
- documentação;
- arquitetura;
- normas;
- contratos;
- testes;
- experiência de usuários.

## 469. Captura de conhecimento tácito

A captura deverá buscar compreender:

- decisões habituais;
- sinais;
- exceções;
- atalhos;
- riscos;
- erros comuns;
- dependências;
- critérios não documentados;
- formas de recuperação.

## 470. Validação com a realidade

O documento deverá ser comparado à operação real.

Não deverá reproduzir apenas:

- fluxo ideal;
- organograma formal;
- comportamento esperado;
- arquitetura desatualizada;
- descrição de fornecedor.

## 471. Uso de agentes na autoria

Agentes poderão apoiar:

- estruturação;
- revisão;
- comparação;
- identificação de lacunas;
- tradução;
- padronização;
- geração de exemplos;
- análise de consistência.

## 472. Limites dos agentes na autoria

Conteúdo produzido por agente deverá ser validado por responsáveis competentes antes de adquirir autoridade.

O agente não deverá inventar:

- comandos;
- permissões;
- obrigações;
- contatos;
- versões;
- resultados;
- capacidades;
- normas aplicáveis.

## 473. Proveniência do conteúdo

A autoria deverá preservar, quando relevante:

- fonte;
- responsável;
- documento;
- experiência;
- evidência;
- data;
- contexto;
- transformação realizada.

## 474. Rascunho controlado

O rascunho deverá possuir identificação para evitar sua confusão com a versão vigente.

## 475. Ambiente de elaboração

A elaboração deverá utilizar ambiente que permita:

- colaboração;
- versionamento;
- comentários;
- comparação;
- aprovação;
- controle de acesso;
- recuperação;
- preservação.

## 476. Ramificação

Quando documentos forem mantidos como código, mudanças poderão ocorrer em ramificações isoladas.

A ramificação deverá permitir:

- revisão;
- teste;
- comparação;
- integração;
- rejeição;
- preservação de histórico.

## 477. Mudança proposta

Toda proposta deverá indicar:

- conteúdo alterado;
- motivo;
- risco;
- impacto;
- documentos derivados;
- automações;
- treinamento;
- necessidade de teste;
- plano de entrada em vigor.

## 478. Diff

A revisão deverá permitir visualizar claramente:

- adição;
- remoção;
- alteração;
- movimentação;
- mudança de autoridade;
- mudança de risco;
- mudança de comando;
- mudança de resultado.

## 479. Mudança semântica

Alterações pequenas em texto poderão produzir grande mudança de significado.

A revisão deverá destacar mudanças em:

- obrigação;
- proibição;
- autoridade;
- limite;
- gatilho;
- condição;
- alvo;
- resultado;
- responsabilidade.

## 480. Mudança editorial

Correções de:

- ortografia;
- formatação;
- clareza;
- organização;
- acessibilidade;

poderão seguir fluxo simplificado quando não alterarem significado.

## 481. Mudança operacional

Alterações em:

- sequência;
- comando;
- ferramenta;
- papel;
- condição;
- validação;
- reversão;
- integração;

deverão ser avaliadas operacionalmente.

## 482. Mudança crítica

Mudanças capazes de afetar:

- vida;
- segurança;
- direitos;
- autoridade;
- dados;
- produção;
- continuidade;
- finanças;
- obrigação;

deverão possuir revisão e teste reforçados.

## 483. Revisão por pares

A revisão deverá verificar:

- precisão;
- coerência;
- completude;
- risco;
- executabilidade;
- referências;
- evidências;
- impacto;
- manutenção.

## 484. Revisão operacional

Pessoas que executam a atividade deverão avaliar se o documento corresponde à realidade do trabalho.

## 485. Revisão por sucessor

Pessoa competente que não participou da elaboração deverá avaliar se consegue compreender e utilizar o documento.

## 486. Revisão técnica

A revisão deverá confirmar:

- ferramentas;
- comandos;
- parâmetros;
- versões;
- arquitetura;
- dependências;
- resultados;
- reversão;
- compatibilidade.

## 487. Revisão de segurança

Deverá avaliar:

- privilégios;
- segredos;
- dados;
- exposição;
- autenticação;
- evidências;
- reversão;
- comandos destrutivos;
- fornecedores;
- automações.

## 488. Revisão normativa

Deverá avaliar:

- leis;
- regulamentos;
- normas técnicas;
- Normas Regulamentadoras;
- contratos;
- políticas;
- prazos;
- registros;
- responsabilidades.

## 489. Revisão de acessibilidade

Deverá verificar:

- linguagem;
- navegação;
- contraste;
- leitores de tela;
- uso de cor;
- dispositivo;
- tamanho;
- apoio;
- alternativa offline.

## 490. Revisão semântica

A revisão deverá assegurar coerência entre:

- propósito;
- conceitos;
- papéis;
- estados;
- decisões;
- resultados;
- princípios;
- arquitetura.

## 491. Revisão de integração

Deverão ser avaliadas relações com:

- sistemas;
- workflows;
- painéis;
- checklists;
- agentes;
- scripts;
- formulários;
- catálogos;
- alertas;
- planos.

## 492. Comentários de revisão

Comentários deverão possuir:

- autor;
- localização;
- questão;
- fundamento;
- prioridade;
- resposta;
- decisão;
- estado.

## 493. Conflito de revisão

Quando revisores divergirem, o conflito deverá ser resolvido por:

- evidência;
- teste;
- autoridade;
- análise de risco;
- princípio superior;
- registro da decisão.

## 494. Aprovação

A aprovação deverá confirmar:

- propósito;
- escopo;
- autoridade;
- risco;
- conteúdo;
- recursos;
- conformidade;
- entrada em vigor;
- necessidade de teste;
- comunicação.

## 495. Assinatura de aprovação

A aprovação deverá ser atribuível a:

- pessoa;
- função;
- organização;
- data;
- versão;
- escopo;
- condições.

## 496. Aprovação condicional

A aprovação poderá exigir antes da vigência:

- correção;
- treinamento;
- teste;
- implantação;
- criação de recurso;
- atualização de sistema;
- comunicação;
- aceitação de risco.

## 497. Reprovação

A reprovação deverá indicar:

- motivo;
- requisito;
- risco;
- correção necessária;
- responsável;
- possibilidade de nova submissão.

## 498. Publicação

A publicação deverá tornar a versão oficial disponível ao público autorizado.

Ela deverá confirmar:

- integridade;
- localização;
- acesso;
- índice;
- metadados;
- vigência;
- versão;
- classificação;
- referências.

## 499. Repositório oficial

A organização deverá possuir repositório reconhecido como fonte oficial.

O repositório deverá oferecer:

- busca;
- versionamento;
- controle de acesso;
- disponibilidade;
- backup;
- auditoria;
- links persistentes;
- preservação.

## 500. Repositório distribuído

Quando existirem múltiplas plataformas, deverá ser definido:

- fonte principal;
- forma de sincronização;
- prioridade;
- tratamento de conflito;
- responsabilidade;
- latência;
- recuperação.

## 501. Catálogo operacional

O catálogo deverá permitir localizar documentos por:

- função;
- serviço;
- capacidade;
- sistema;
- evento;
- organização;
- território;
- papel;
- criticidade;
- estado;
- palavra-chave.

## 502. Taxonomia

A taxonomia deverá possuir categorias compreensíveis e estáveis.

Ela deverá acompanhar a arquitetura real da Plataforma UNO.

## 503. Metadados para descoberta

Poderão incluir:

- título;
- descrição;
- tipo;
- domínio;
- proprietário;
- público;
- gatilhos;
- sistemas;
- eventos;
- riscos;
- palavras-chave;
- documentos relacionados.

## 504. Busca por situação

O executor deverá poder pesquisar por perguntas como:

- qual serviço falhou;
- qual alerta ocorreu;
- qual estado foi reconhecido;
- qual equipamento está sendo operado;
- qual resultado é necessário;
- qual risco está presente.

## 505. Busca semântica

A busca semântica poderá apoiar a descoberta, mas deverá:

- indicar a fonte;
- preservar a versão;
- distinguir documentos vigentes;
- evitar apresentar rascunhos como oficiais;
- respeitar acesso;
- permitir confirmação.

## 506. Recomendação de procedimento

Agentes poderão recomendar documentos conforme o contexto.

A recomendação deverá indicar:

- documento;
- versão;
- escopo;
- correspondência;
- limitações;
- autoridade necessária;
- alternativas.

## 507. Recomendação não autoriza execução

A localização automática do procedimento não confirma:

- contexto;
- alvo;
- autoridade;
- competência;
- segurança;
- condição de entrada.

## 508. Página inicial do documento

A apresentação deverá permitir reconhecer rapidamente:

- finalidade;
- estado;
- versão;
- risco;
- autoridade;
- tempo;
- pré-requisitos;
- ação inicial;
- contato.

## 509. QR Code ou identificador físico

Equipamentos, instalações e painéis poderão possuir código que direcione ao procedimento correspondente.

O vínculo deverá:

- ser seguro;
- apontar para referência vigente;
- respeitar acesso;
- funcionar em dispositivo adequado;
- possuir alternativa.

## 510. Integração com painéis

Painéis operacionais poderão oferecer acesso contextual aos procedimentos associados a:

- alerta;
- serviço;
- incidente;
- recurso;
- missão;
- estado;
- capacidade.

## 511. Integração com o catálogo de capacidades

Cada capacidade deverá relacionar:

- procedimentos;
- responsáveis;
- ferramentas;
- evidências;
- treinamentos;
- automações;
- dependências;
- indicadores.

## 512. Integração com alertas

Alertas deverão indicar:

- condição;
- impacto;
- responsável;
- procedimento recomendado;
- versão;
- prioridade;
- ação segura inicial.

## 513. Integração com incidentes

O registro do incidente deverá relacionar:

- procedimentos utilizados;
- versões;
- decisões;
- desvios;
- resultados;
- evidências;
- correções necessárias.

## 514. Integração com mudanças

Toda mudança técnica ou operacional deverá avaliar quais documentos precisam ser:

- criados;
- alterados;
- testados;
- suspensos;
- substituídos;
- comunicados.

## 515. Integração com configuração

Mudanças de configuração deverão atualizar:

- parâmetros;
- alvos;
- versões;
- dependências;
- validações;
- reversões;
- exemplos;
- automações.

## 516. Integração com inventário

O inventário deverá relacionar cada recurso aos documentos necessários para:

- operar;
- manter;
- diagnosticar;
- recuperar;
- substituir;
- desativar.

## 517. Integração com identidade e acesso

Papéis definidos no documento deverão corresponder a:

- grupos;
- permissões;
- contas;
- delegações;
- ambientes;
- acessos emergenciais.

## 518. Integração com workflow

O workflow deverá derivar de versão reconhecida do procedimento.

A relação deverá permitir saber:

- qual versão gerou o fluxo;
- quais etapas foram automatizadas;
- quais decisões permanecem humanas;
- quais campos são obrigatórios;
- quais evidências são produzidas.

## 519. Integração com scripts

Scripts deverão possuir:

- identificador;
- proprietário;
- versão;
- origem;
- revisão;
- testes;
- documentação;
- relação com o procedimento;
- assinatura ou integridade verificável.

## 520. Proibição de script órfão

Script operacional não deverá permanecer em uso sem:

- proprietário;
- finalidade;
- documentação;
- versão;
- repositório;
- segurança;
- tratamento de falha;
- evidência.

## 521. Integração com agentes

O agente deverá utilizar:

- versão vigente;
- conteúdo autorizado;
- escopo;
- ferramentas;
- limites;
- critérios;
- regras de escalonamento;
- condições de interrupção.

## 522. Atualização do contexto do agente

Mudanças documentais deverão atualizar o contexto operacional dos agentes antes que eles continuem executando atividades relacionadas.

## 523. Prevenção de conhecimento obsoleto

O agente não deverá utilizar versão antiga quando:

- a nova estiver vigente;
- a versão anterior estiver suspensa;
- o procedimento tiver sido revogado;
- o contexto tiver mudado.

## 524. Integração com treinamento

Mudanças relevantes deverão produzir avaliação sobre:

- necessidade de treinamento;
- público;
- conteúdo;
- prática;
- prazo;
- validação;
- evidência;
- reciclagem.

## 525. Publicação acompanhada de treinamento

Documentos críticos não deverão entrar em vigor antes que os executores necessários estejam preparados, salvo condição emergencial formalmente autorizada.

## 526. Comunicação da mudança

A comunicação deverá informar:

- documento;
- versão;
- mudança;
- motivo;
- impacto;
- público;
- vigência;
- treinamento;
- versão substituída;
- contato.

## 527. Confirmação de ciência

Quando necessário, deverá existir confirmação de que o público:

- recebeu;
- acessou;
- compreendeu;
- treinou;
- reconheceu a vigência.

## 528. Ciência não é competência

Confirmar leitura não comprova capacidade de execução.

Atividades críticas deverão exigir demonstração prática proporcional.

## 529. Entrada em vigor

A entrada em vigor deverá ocorrer somente quando:

- aprovação estiver concluída;
- conteúdo estiver publicado;
- recursos estiverem disponíveis;
- treinamento necessário ocorrer;
- integrações forem atualizadas;
- cópias obsoletas forem tratadas;
- testes mínimos forem realizados.

## 530. Implantação gradual

Mudanças poderão ser implantadas por:

- equipe;
- organização;
- território;
- sistema;
- ambiente;
- volume;
- horário;
- criticidade.

## 531. Período de transição

Quando duas versões precisarem coexistir temporariamente, deverá estar claro:

- onde cada uma se aplica;
- até quando;
- quem utiliza;
- como os registros serão distinguidos;
- como ocorrerá o encerramento da anterior.

## 532. Versão principal

O versionamento deverá distinguir mudanças:

- incompatíveis ou maiores;
- funcionais;
- corretivas;
- editoriais.

A convenção deverá ser documentada.

## 533. Versão maior

Deverá ser considerada quando houver mudança relevante em:

- propósito;
- escopo;
- autoridade;
- fluxo;
- ferramenta;
- risco;
- resultado;
- compatibilidade;
- arquitetura.

## 534. Versão menor

Poderá representar ampliação compatível, como:

- novo caminho;
- nova validação;
- novo exemplo;
- melhoria de segurança;
- integração adicional.

## 535. Correção

Poderá corrigir:

- erro textual;
- referência;
- formatação;
- clareza;
- informação pontual;
- falha que não altera a arquitetura principal.

## 536. Identificação temporal

Além da versão, o documento deverá registrar:

- data de criação;
- aprovação;
- vigência;
- substituição;
- revisão;
- arquivamento.

## 537. Histórico de mudanças

O histórico deverá indicar:

- versão;
- data;
- autor;
- alteração;
- justificativa;
- aprovação;
- impacto;
- teste.

## 538. Rastreabilidade da versão executada

Cada execução deverá registrar exatamente qual versão foi utilizada.

## 539. Compatibilidade de versões

O documento deverá indicar compatibilidade com:

- sistema;
- ferramenta;
- equipamento;
- dados;
- arquitetura;
- ambiente;
- organização;
- contrato.

## 540. Versão incompatível

Quando a versão não corresponder ao ambiente, a execução deverá ser bloqueada ou escalonada.

## 541. Deriva documental

Deriva documental ocorre quando o documento deixa de representar a operação real.

Ela poderá decorrer de:

- mudança não registrada;
- ferramenta atualizada;
- atalho informal;
- integração alterada;
- fornecedor modificado;
- equipe reorganizada;
- norma atualizada.

## 542. Detecção de deriva

A deriva poderá ser detectada por:

- feedback;
- incidente;
- teste;
- auditoria;
- comparação;
- telemetria;
- mudança;
- agente;
- revisão periódica.

## 543. Deriva entre documento e automação

Deverá ser verificado se:

- o workflow executa etapas diferentes;
- o script utiliza parâmetros diferentes;
- a interface omite controle;
- o agente segue instrução antiga;
- o painel aponta para versão incorreta.

## 544. Suspensão por deriva crítica

Quando a divergência produzir risco elevado, documento ou automação deverá ser suspenso até:

- análise;
- correção;
- validação;
- aprovação;
- republicação.

## 545. Revisão periódica

A periodicidade deverá considerar:

- criticidade;
- mudança;
- frequência;
- risco;
- obrigação;
- histórico;
- tecnologia;
- fornecedor;
- resultado de testes.

## 546. Revisão orientada por evento

Deverá ocorrer quando houver:

- incidente;
- falha;
- quase falha;
- mudança;
- nova ameaça;
- auditoria;
- alteração normativa;
- troca de responsável;
- nova automação;
- desvio recorrente.

## 547. Revalidação

Mesmo sem mudança textual, o documento poderá exigir revalidação para confirmar que:

- continua correto;
- continua executável;
- os contatos permanecem válidos;
- as ferramentas existem;
- os acessos funcionam;
- os tempos permanecem realistas;
- os riscos não mudaram.

## 548. Recertificação de competência

Mudanças relevantes poderão exigir nova avaliação de executores.

## 549. Expiração

Documentos poderão expirar quando não forem revisados dentro do prazo definido.

A expiração deverá produzir:

- alerta;
- bloqueio ou limitação proporcional;
- responsável;
- análise;
- renovação;
- substituição;
- aceitação de risco.

## 550. Documento vencido em emergência

Se somente documento vencido estiver disponível, seu uso deverá exigir:

- avaliação;
- autoridade;
- confirmação do contexto;
- limitação;
- registro;
- revisão posterior.

## 551. Substituição

A substituição deverá relacionar:

- versão anterior;
- nova versão;
- vigência;
- diferenças;
- impacto;
- transição;
- treinamento;
- cópias;
- automações;
- registros.

## 552. Revogação imediata

Poderá ocorrer diante de:

- risco grave;
- ilegalidade;
- vulnerabilidade;
- erro crítico;
- perda de autoridade;
- orientação superior;
- comprometimento.

## 553. Propagação da revogação

A revogação deverá alcançar:

- repositório;
- catálogo;
- interfaces;
- agentes;
- workflows;
- scripts;
- checklists;
- cópias offline;
- treinamentos;
- fornecedores.

## 554. Tratamento de cópias obsoletas

Cópias obsoletas deverão ser:

- recolhidas;
- marcadas;
- bloqueadas;
- substituídas;
- arquivadas;
- destruídas com segurança, conforme o caso.

## 555. Arquivamento histórico

O arquivo deverá preservar:

- conteúdo;
- metadados;
- aprovação;
- histórico;
- período de vigência;
- relações;
- execuções;
- incidentes;
- testes;
- motivo de substituição.

## 556. Preservação sem exposição

Documentos arquivados deverão permanecer protegidos conforme sua sensibilidade.

## 557. Recuperação documental

O repositório deverá possuir mecanismos de:

- backup;
- restauração;
- integridade;
- versionamento;
- redundância;
- acesso emergencial;
- reconstrução de índice;
- validação.

## 558. Continuidade do repositório

Procedimentos críticos deverão permanecer acessíveis mesmo diante de:

- perda de identidade;
- perda de nuvem;
- perda de rede;
- perda de instalação;
- perda de dispositivo;
- indisponibilidade de fornecedor.

## 559. Pacote offline

O pacote poderá conter:

- documentos essenciais;
- contatos;
- cartões;
- formulários;
- mapas;
- chaves de referência;
- instruções de acesso;
- data;
- versão;
- classificação.

## 560. Atualização do pacote offline

A atualização deverá ser:

- periódica;
- registrada;
- verificada;
- distribuída;
- confirmada;
- acompanhada de descarte da versão anterior.

## 561. Preservação do formato

Formatos utilizados deverão considerar:

- longevidade;
- legibilidade;
- portabilidade;
- acessibilidade;
- integridade;
- disponibilidade de ferramentas;
- independência de fornecedor.

## 562. Migração de formato

Quando necessário, documentos deverão ser migrados sem perder:

- conteúdo;
- estrutura;
- versão;
- assinatura;
- metadados;
- histórico;
- relações;
- evidências.

## 563. Integração com memória institucional

A memória deverá relacionar:

- documento;
- decisões;
- incidentes;
- execuções;
- falhas;
- correções;
- responsáveis;
- mudanças;
- aprendizados.

## 564. Marcador cronológico de continuidade

Ao final de períodos relevantes de trabalho, poderá ser mantido marcador cronológico contendo:

- data;
- estado;
- arquivos concluídos;
- decisões;
- contexto;
- pendências;
- próximo ponto de retomada.

Esse registro deverá reduzir perda de contexto entre conversas, equipes, ferramentas e gerações.

## 565. Fonte normativa principal

A Engenharia Oficial deverá permanecer como o livro da verdade normativo do repositório.

Documentos operacionais deverão indicar sua relação com:

- volume;
- arquivo;
- seção;
- princípio;
- requisito;
- garantia correspondente.

## 566. Alteração derivada da Engenharia Oficial

Quando a Engenharia Oficial mudar, deverão ser identificados:

- documentos afetados;
- workflows;
- scripts;
- interfaces;
- agentes;
- treinamentos;
- contratos;
- evidências;
- prazos de adequação.

## 567. Retroalimentação da Engenharia Oficial

Aprendizados operacionais poderão propor alteração da Engenharia Oficial.

A mudança deverá seguir governança própria e não ocorrer silenciosamente por adaptação local.

## 568. Integração com repositório de código

Quando procedimentos estiverem relacionados a software, deverão ser vinculados a:

- código;
- versão;
- release;
- configuração;
- implantação;
- testes;
- incidentes;
- proprietário.

## 569. Integração com CI/CD

Pipelines poderão verificar:

- presença de procedimento;
- versão;
- links;
- esquema;
- comandos;
- testes;
- aprovação;
- documentação de reversão;
- atualização de catálogo.

## 570. Validação automática de documentos

Poderão ser verificadas automaticamente:

- seções obrigatórias;
- identificadores;
- links;
- estados;
- metadados;
- referências;
- versão;
- datas;
- proprietários;
- marcações de risco.

## 571. Limites da validação automática

A validação automática não comprova:

- correção semântica;
- legitimidade;
- adequação ao contexto;
- segurança completa;
- executabilidade humana;
- conformidade integral;
- qualidade do julgamento.

## 572. Teste da publicação

Após a publicação, deverá ser verificado se:

- o documento pode ser encontrado;
- o acesso funciona;
- a versão está correta;
- as referências abrem;
- as interfaces atualizaram;
- os agentes receberam a versão;
- as cópias obsoletas foram tratadas.

## 573. Indicadores do ciclo de vida

Poderão ser acompanhados:

- documentos por estado;
- documentos vencidos;
- tempo de aprovação;
- revisões pendentes;
- cópias desatualizadas;
- procedimentos não comprovados;
- automações divergentes;
- proprietários ausentes;
- treinamentos pendentes;
- links inválidos.

## 574. Responsabilidade pela integração

Cada integração deverá possuir responsável por manter coerência entre:

- documento;
- ferramenta;
- sistema;
- interface;
- agente;
- automação;
- catálogo.

## 575. Antipadrões do ciclo de vida

Constituem antipadrões:

- documento vigente sem proprietário;
- rascunho utilizado em produção;
- versão sem histórico;
- publicação sem comunicação;
- mudança sem teste;
- cópia offline esquecida;
- agente utilizando versão revogada;
- script sem relação documental;
- documento vencido tratado como normal;
- revogação que não alcança automações;
- treinamento limitado à confirmação de leitura;
- arquivo histórico sem contexto;
- alteração local silenciosa da Engenharia Oficial.

## 576. Invariantes do Lote 4

Permanecem como invariantes:

- todo documento possuirá estado;
- todo estado possuirá significado;
- todo documento vigente possuirá proprietário;
- todo rascunho será distinguível da versão oficial;
- toda mudança relevante será revisada;
- toda aprovação será atribuível;
- toda publicação será verificável;
- toda execução registrará a versão utilizada;
- toda cópia indicará sua condição;
- toda automação derivará de fonte governada;
- toda revogação alcançará representações derivadas;
- todo documento crítico possuirá forma de acesso alternativo;
- toda versão substituída preservará memória;
- toda mudança da Engenharia Oficial avaliará efeitos operacionais;
- toda aprendizagem local poderá retornar à arquitetura sem alterá-la informalmente.

## 577. Garantias esperadas

A aplicação deste lote deverá garantir que:

- documentos nasçam de necessidades reais;
- autores e proprietários sejam reconhecidos;
- mudanças possam ser comparadas;
- revisões sejam multidisciplinares;
- aprovações sejam legítimas;
- versões sejam localizáveis;
- publicações sejam acessíveis;
- interfaces permaneçam sincronizadas;
- agentes utilizem conteúdo vigente;
- cópias obsoletas sejam tratadas;
- a memória seja preservada;
- o conhecimento atravesse indisponibilidades e gerações.

## 578. Resultado esperado do Lote 4

Ao final desta etapa, a Plataforma UNO deverá possuir um sistema documental vivo, no qual cada documento possa ser:

- criado;
- revisado;
- aprovado;
- publicado;
- encontrado;
- executado;
- atualizado;
- suspenso;
- substituído;
- recuperado;
- auditado;
- lembrado.

## 579. Transição para o Lote 5

O ciclo de vida organiza a permanência e a evolução do conhecimento operacional.

O próximo lote deverá estabelecer as estruturas que assegurarão:

- governança;
- responsabilidade;
- segurança;
- privacidade;
- conformidade;
- validade jurídica;
- federação;
- fornecedores;
- soberania;
- auditoria;
- evidências;
- prestação de contas.

---

# Lote 5 — Governança, Segurança, Conformidade, Federação e Evidências

## 580. Finalidade da governança operacional

A governança deverá assegurar que runbooks, playbooks, procedimentos, checklists, workflows, scripts, agentes e automações:

- possuam propósito legítimo;
- sejam coerentes com a Engenharia Oficial;
- tenham proprietários;
- utilizem autoridade adequada;
- preservem segurança;
- cumpram obrigações;
- produzam evidências;
- possam ser auditados;
- sejam corrigidos;
- atravessem mudanças institucionais.

## 581. Conhecimento operacional como ativo institucional

O conhecimento necessário à operação não deverá ser tratado como propriedade informal de:

- pessoa;
- equipe;
- fornecedor;
- ferramenta;
- plataforma;
- agente;
- diretoria circunstancial.

Ele deverá constituir ativo preservado pela organização.

## 582. Conhecimento e responsabilidade

Documentar uma atividade não transfere automaticamente sua responsabilidade ao documento.

A responsabilidade continuará distribuída entre:

- proprietário;
- aprovador;
- executor;
- validador;
- supervisor;
- organização;
- fornecedor;
- autoridade competente.

## 583. Estrutura de governança

A governança poderá envolver:

- alta direção;
- conselho;
- comitê operacional;
- proprietários de serviços;
- proprietários de procedimentos;
- segurança;
- jurídico;
- conformidade;
- curadores;
- operadores;
- auditoria;
- organizações federadas.

## 584. Alta direção

A alta direção deverá:

- aprovar princípios;
- garantir recursos;
- resolver conflitos;
- definir tolerâncias;
- acompanhar riscos;
- exigir evidências;
- preservar sucessão;
- orientar evolução;
- prestar contas.

## 585. Comitê de documentação operacional

O comitê poderá:

- estabelecer padrões;
- revisar criticidade;
- resolver conflitos;
- acompanhar documentos vencidos;
- avaliar automações;
- priorizar correções;
- supervisionar integração;
- orientar treinamento;
- preservar coerência.

## 586. Proprietário do documento

O proprietário deverá responder por:

- propósito;
- conteúdo;
- atualização;
- testes;
- publicação;
- integração;
- riscos;
- treinamento;
- substituição;
- memória.

## 587. Proprietário da atividade

O proprietário da atividade poderá ser diferente do proprietário do documento.

Ele deverá validar se o documento representa:

- realidade;
- necessidade;
- capacidade;
- resultados;
- limites;
- responsabilidades.

## 588. Curadoria

A curadoria deverá preservar:

- significado;
- coerência;
- qualidade;
- proveniência;
- memória;
- relações;
- alinhamento com princípios;
- continuidade entre versões.

## 589. Operação

Os operadores deverão contribuir com:

- experiência;
- desvios;
- tempos;
- riscos;
- dependências;
- resultados;
- limitações;
- oportunidades de melhoria.

## 590. Segurança

A segurança deverá avaliar:

- acessos;
- comandos;
- ferramentas;
- segredos;
- dados;
- automações;
- agentes;
- fornecedores;
- evidências;
- recuperação.

## 591. Jurídico e conformidade

Essas funções deverão apoiar:

- interpretação;
- aplicabilidade;
- obrigações;
- autoridade;
- contratos;
- privacidade;
- retenção;
- comunicação;
- auditoria;
- prestação de contas.

## 592. Auditoria

A auditoria deverá possuir independência proporcional para avaliar:

- desenho;
- vigência;
- execução;
- evidências;
- exceções;
- falhas;
- correções;
- acessos;
- automações;
- conformidade.

## 593. Matriz de responsabilidades

Cada documento crítico deverá relacionar:

- quem é responsável;
- quem aprova;
- quem executa;
- quem valida;
- quem consulta;
- quem deve ser informado;
- quem substitui;
- quem audita.

## 594. Responsabilidade compartilhada

Quando várias organizações ou fornecedores participarem, deverão ser definidas fronteiras entre:

- decisão;
- acesso;
- execução;
- validação;
- dados;
- segurança;
- comunicação;
- evidência;
- correção;
- encerramento.

## 595. Proibição da responsabilidade difusa

Expressões como “a equipe”, “o sistema” ou “o fornecedor” não deverão substituir a identificação de papéis atribuíveis quando houver decisão ou ação material.

## 596. Autoridade documental

O documento deverá indicar qual estrutura concede legitimidade à sua execução.

Poderão ser referências:

- lei;
- norma;
- política;
- contrato;
- plano ativado;
- delegação;
- ordem legítima;
- função;
- autorização específica.

## 597. Autoridade sobre o documento

Deverá ser distinguida a autoridade para:

- criar;
- revisar;
- aprovar;
- publicar;
- executar;
- suspender;
- revogar;
- arquivar;
- alterar automações relacionadas.

## 598. Segregação de funções

Documentos de alto impacto deverão preservar separação entre:

- autoria;
- aprovação;
- execução;
- validação;
- auditoria;
- custódia de evidências.

## 599. Segregação proporcional

Atividades simples e de baixo risco poderão utilizar estrutura reduzida.

A proporcionalidade não deverá eliminar:

- identidade;
- autoridade;
- registro;
- validação;
- responsabilidade.

## 600. Exceção à segregação

Quando uma emergência impedir a segregação normal, deverão existir controles compensatórios, como:

- dupla revisão posterior;
- limitação de escopo;
- gravação;
- registro reforçado;
- monitoramento;
- expiração;
- auditoria.

## 601. Conflito de interesse

Pessoas ou organizações deverão declarar conflitos capazes de afetar:

- autoria;
- aprovação;
- execução;
- seleção de fornecedor;
- validação;
- auditoria;
- decisão de risco.

## 602. Risco operacional documental

O risco deverá considerar falhas como:

- instrução incorreta;
- versão obsoleta;
- comando perigoso;
- acesso excessivo;
- autoridade ausente;
- validação insuficiente;
- dependência oculta;
- automação divergente;
- cópia não controlada;
- treinamento inadequado.

## 603. Registro de risco

Cada risco relevante deverá possuir:

- descrição;
- causa;
- impacto;
- probabilidade;
- controle;
- proprietário;
- situação;
- prazo;
- evidência;
- risco residual.

## 604. Aceitação de risco

A aceitação deverá ser realizada por autoridade competente.

Ela deverá indicar:

- risco;
- documento;
- atividade;
- partes afetadas;
- duração;
- justificativa;
- controles compensatórios;
- revisão;
- condição de encerramento.

## 605. Risco sobre pessoas

Riscos que envolvam:

- vida;
- saúde;
- segurança;
- dignidade;
- direitos;
- renda;
- acesso;
- discriminação;

deverão receber governança reforçada.

## 606. Exceção documental

A exceção deverá registrar:

- requisito;
- motivo;
- contexto;
- autoridade;
- escopo;
- validade;
- risco;
- compensação;
- evidência;
- regularização.

## 607. Exceção recorrente

Exceções recorrentes deverão produzir:

- revisão do procedimento;
- revisão da arquitetura;
- capacitação;
- mudança de recurso;
- formalização legítima;
- eliminação da prática inadequada.

## 608. Segurança por desenho

A segurança deverá ser incorporada desde:

- concepção;
- autoria;
- revisão;
- publicação;
- execução;
- integração;
- arquivamento;
- eliminação.

## 609. Classificação de segurança

O documento deverá ser classificado segundo:

- sensibilidade;
- impacto;
- exposição;
- dados;
- comandos;
- arquitetura;
- credenciais relacionadas;
- obrigações.

## 610. Controle de acesso

O acesso deverá seguir:

- necessidade;
- menor privilégio;
- função;
- organização;
- território;
- estado;
- validade;
- monitoramento;
- revisão.

## 611. Acesso à leitura

Mesmo a leitura poderá exigir restrição quando o documento revelar:

- vulnerabilidade;
- arquitetura;
- mecanismo emergencial;
- contato sensível;
- localização;
- método de acesso;
- procedimento destrutivo;
- informação protegida.

## 612. Acesso à execução

Poder consultar não significa poder executar.

A interface deverá distinguir:

- visualizar;
- simular;
- solicitar;
- aprovar;
- executar;
- validar;
- auditar;
- editar.

## 613. Acesso à edição

A alteração deverá exigir:

- identidade;
- permissão;
- justificativa;
- revisão;
- versionamento;
- aprovação;
- evidência.

## 614. Acesso emergencial

O acesso emergencial deverá ser:

- autorizado;
- temporário;
- limitado;
- monitorado;
- registrado;
- revisado;
- revogado;
- relacionado ao evento.

## 615. Revisão de acesso

A revisão deverá confirmar:

- necessidade;
- função;
- organização;
- competência;
- validade;
- uso;
- conflitos;
- desligamentos;
- mudanças de responsabilidade.

## 616. Desligamento de pessoas

O desligamento deverá acionar:

- revogação de acesso;
- transferência de propriedade;
- handover;
- recuperação de dispositivos;
- rotação de segredos;
- preservação de registros;
- atualização de contatos.

## 617. Mudança de função

A mudança deverá revisar:

- permissões;
- documentos atribuídos;
- responsabilidades;
- treinamentos;
- aprovações;
- substitutos;
- delegações;
- acessos emergenciais.

## 618. Segredos

Documentos não deverão armazenar diretamente:

- senhas;
- tokens;
- chaves privadas;
- códigos de recuperação;
- credenciais;
- segredos comerciais desnecessários.

## 619. Referência a segredos

O documento deverá indicar mecanismo governado para:

- solicitar;
- obter;
- utilizar;
- rotacionar;
- revogar;
- registrar;
- recuperar.

## 620. Exposição em evidências

Logs, capturas, vídeos, comandos e relatórios deverão ser revisados para impedir exposição indevida de:

- segredos;
- dados pessoais;
- conteúdo protegido;
- informações de autenticação;
- vulnerabilidades.

## 621. Integridade documental

A organização deverá conseguir detectar alteração não autorizada.

Poderão ser utilizados:

- controle de versão;
- assinatura;
- hash;
- revisão;
- aprovação;
- histórico;
- registro de publicação.

## 622. Autenticidade

O executor deverá conseguir verificar que o documento:

- pertence à organização;
- foi aprovado;
- permanece vigente;
- não foi adulterado;
- corresponde à fonte oficial.

## 623. Disponibilidade

Documentos críticos deverão permanecer disponíveis durante:

- incidente;
- perda de rede;
- perda de identidade;
- perda de instalação;
- perda de fornecedor;
- recuperação;
- operação degradada.

## 624. Confidencialidade

A proteção deverá impedir acesso indevido sem bloquear o acesso legítimo no momento necessário.

## 625. Segurança do repositório

O repositório deverá possuir:

- autenticação;
- autorização;
- versionamento;
- logs;
- backup;
- recuperação;
- proteção contra exclusão;
- monitoramento;
- segregação;
- continuidade.

## 626. Segurança das cópias offline

Cópias offline deverão possuir:

- custódia;
- criptografia, quando necessária;
- inventário;
- versão;
- localização;
- acesso;
- atualização;
- descarte seguro.

## 627. Segurança dos scripts

Scripts relacionados deverão passar por:

- revisão;
- teste;
- análise de dependências;
- validação de origem;
- controle de integridade;
- assinatura, quando aplicável;
- limitação de privilégio;
- monitoramento.

## 628. Dependência de software

Ferramentas e bibliotecas utilizadas deverão ser avaliadas quanto a:

- origem;
- versão;
- vulnerabilidade;
- manutenção;
- licença;
- compatibilidade;
- integridade;
- substituição.

## 629. Código malicioso

Documentos, anexos e ferramentas deverão ser protegidos contra conteúdo que possa:

- executar ação oculta;
- capturar credencial;
- alterar alvo;
- manipular agente;
- exfiltrar dados;
- modificar evidência;
- ampliar privilégio.

## 630. Instrução adversarial

Agentes deverão tratar documentos externos, mensagens e dados como conteúdo potencialmente não confiável.

Nenhum conteúdo incorporado deverá alterar silenciosamente:

- propósito;
- política;
- autoridade;
- escopo;
- segurança;
- prioridade.

## 631. Segurança semântica

Mudanças de linguagem deverão ser avaliadas para impedir que pequenas alterações modifiquem:

- obrigação;
- proibição;
- autoridade;
- responsabilidade;
- limite;
- critério;
- resultado.

## 632. Privacidade

A criação e execução deverão observar:

- finalidade;
- necessidade;
- minimização;
- transparência;
- segurança;
- acesso;
- retenção;
- direitos;
- eliminação.

## 633. Dados pessoais no procedimento

O documento não deverá incorporar dados pessoais reais quando puder utilizar:

- campo;
- variável;
- exemplo sintético;
- referência protegida;
- identificador pseudonimizado.

## 634. Dados pessoais na execução

Somente os dados necessários deverão ser coletados e registrados.

## 635. Dados sensíveis

Procedimentos que tratem dados sensíveis deverão possuir controles reforçados para:

- acesso;
- propósito;
- compartilhamento;
- evidência;
- armazenamento;
- retenção;
- eliminação;
- comunicação de incidente.

## 636. Direito de acesso e correção

Quando aplicável, os registros deverão permitir atender direitos legítimos sem comprometer:

- segurança;
- investigação;
- obrigação;
- direitos de terceiros;
- integridade da evidência.

## 637. Retenção documental

A retenção deverá considerar:

- validade operacional;
- obrigação;
- auditoria;
- investigação;
- memória;
- segurança;
- privacidade;
- custo;
- valor histórico.

## 638. Retenção de execuções

Os registros de execução deverão possuir períodos proporcionais a:

- criticidade;
- impacto;
- obrigação;
- irreversibilidade;
- necessidade de reconciliação;
- aprendizagem;
- responsabilidade.

## 639. Suspensão de eliminação

A eliminação deverá ser suspensa quando houver:

- investigação;
- litígio;
- auditoria;
- incidente;
- obrigação;
- preservação histórica autorizada.

## 640. Eliminação segura

A eliminação deverá tratar:

- repositório;
- cache;
- cópia;
- dispositivo;
- exportação;
- backup, conforme política;
- índice;
- acesso;
- evidência de descarte.

## 641. Leis e normas como linha guia

A Plataforma UNO deverá utilizar leis, regulamentos, normas técnicas e Normas Regulamentadoras como caminhos orientadores desde a concepção dos procedimentos.

Ela não deverá criar a ação primeiro para tentar enquadrá-la depois.

## 642. Matriz normativa

Cada documento aplicável deverá relacionar:

- requisito;
- origem;
- território;
- organização;
- atividade;
- papel;
- controle;
- evidência;
- revisão;
- situação.

## 643. Conformidade contextual

Um requisito poderá variar conforme:

- país;
- estado;
- município;
- setor;
- atividade;
- equipamento;
- público;
- organização;
- contrato;
- ambiente.

## 644. Hierarquia normativa

Conflitos deverão considerar a hierarquia entre:

- lei;
- regulamento;
- norma obrigatória;
- contrato;
- política;
- plano;
- procedimento;
- instrução local.

## 645. Norma técnica

Normas técnicas poderão orientar:

- segurança;
- qualidade;
- interoperabilidade;
- continuidade;
- documentação;
- testes;
- equipamentos;
- instalações;
- dados;
- auditoria.

## 646. Normas Regulamentadoras

Procedimentos de trabalho deverão identificar as NRs aplicáveis antes da definição da execução.

Deverão ser considerados, conforme a atividade:

- riscos;
- capacitação;
- prontuário;
- permissão;
- equipamentos;
- sinalização;
- bloqueio;
- ergonomia;
- emergência;
- supervisão;
- registros.

## 647. Permissão de trabalho

Atividades que exijam permissão deverão indicar:

- emissor;
- executor;
- local;
- risco;
- isolamento;
- validade;
- condição;
- encerramento;
- assinatura;
- evidência.

## 648. Análise Preliminar de Risco

Quando aplicável, a APR deverá identificar:

- atividade;
- perigo;
- risco;
- consequência;
- controle;
- responsável;
- condição de parada;
- emergência;
- aprovação.

## 649. Bloqueio e etiquetagem

Procedimentos envolvendo energia ou movimento perigoso deverão estabelecer, quando aplicável:

- identificação;
- isolamento;
- bloqueio;
- etiquetagem;
- verificação de ausência;
- custódia;
- liberação;
- retorno;
- registro.

## 650. Responsabilidade profissional

Atividades regulamentadas deverão ser executadas, supervisionadas ou aprovadas por profissionais com competência legal correspondente.

## 651. Evidência de capacitação

O documento deverá indicar como confirmar:

- treinamento;
- certificação;
- habilitação;
- autorização;
- validade;
- reciclagem;
- aptidão.

## 652. Mudança legal ou normativa

A mudança deverá acionar:

- identificação de documentos afetados;
- análise;
- correção;
- aprovação;
- treinamento;
- atualização de automações;
- comunicação;
- teste;
- evidência.

## 653. Não conformidade

A não conformidade deverá registrar:

- requisito;
- condição;
- evidência;
- impacto;
- causa;
- responsável;
- ação;
- prazo;
- validação;
- encerramento.

## 654. Conformidade não presumida

A existência de seção normativa não comprova que o procedimento:

- atende ao requisito;
- é executado;
- produz evidência;
- permanece atualizado;
- é eficaz.

## 655. Fornecedores

Procedimentos fornecidos ou executados por terceiros deverão ser avaliados quanto a:

- propósito;
- compatibilidade;
- segurança;
- autoridade;
- dados;
- evidências;
- atualização;
- suporte;
- propriedade;
- saída.

## 656. Documento do fornecedor

A documentação externa deverá indicar:

- fonte;
- versão;
- validade;
- contrato;
- escopo;
- limitações;
- relação com documento interno;
- responsabilidade de atualização.

## 657. Procedimento interno complementar

Quando a documentação do fornecedor não cobrir governança institucional, deverá existir complemento interno para:

- autorização;
- acesso;
- validação;
- comunicação;
- evidência;
- escalonamento;
- retorno;
- responsabilidade.

## 658. Mudança do fornecedor

Alterações deverão ser avaliadas quanto a:

- comandos;
- interfaces;
- versões;
- responsabilidades;
- segurança;
- integrações;
- treinamento;
- continuidade;
- compatibilidade.

## 659. Dependência de conhecimento do fornecedor

A organização deverá reduzir dependência exclusiva de conhecimento externo por meio de:

- documentação;
- transferência;
- treinamento;
- acompanhamento;
- direitos contratuais;
- alternativa;
- estratégia de saída.

## 660. Evidências do fornecedor

A execução deverá produzir evidência suficiente para que a organização compreenda:

- ação;
- responsável;
- alvo;
- horário;
- resultado;
- impacto;
- acesso;
- encerramento.

## 661. Responsabilidade contratual

O contrato deverá definir:

- propriedade documental;
- atualização;
- acesso;
- confidencialidade;
- segurança;
- execução;
- evidências;
- auditoria;
- continuidade;
- saída.

## 662. Subcontratados

A participação de subcontratados deverá ser conhecida quando afetar:

- acesso;
- dados;
- execução;
- evidência;
- segurança;
- território;
- responsabilidade.

## 663. Portabilidade

A organização deverá conseguir preservar procedimentos necessários quando:

- encerrar fornecedor;
- migrar ferramenta;
- mudar plataforma;
- internalizar atividade;
- federar capacidade;
- reconstruir operação.

## 664. Federação

Documentos federados deverão preservar:

- princípios comuns;
- autonomia local;
- identidade;
- responsabilidade;
- soberania;
- interoperabilidade;
- segurança;
- memória.

## 665. Documento federal

Um documento federal poderá definir:

- propriedades mínimas;
- interfaces;
- eventos;
- responsabilidades;
- evidências;
- critérios;
- limites;
- garantias comuns.

## 666. Extensão local

A organização poderá adaptar:

- linguagem;
- ferramenta;
- canal;
- papel;
- sequência;
- norma territorial;
- recurso;
- integração.

Ela deverá preservar os invariantes superiores.

## 667. Registro da extensão

A extensão deverá indicar:

- fonte;
- versão;
- alteração;
- motivo;
- território;
- autoridade;
- teste;
- validade;
- responsável.

## 668. Conflito federado

Quando documentos de organizações divergirem, deverão ser comparados:

- autoridade;
- território;
- finalidade;
- contrato;
- segurança;
- dados;
- risco;
- princípio superior;
- efeito sobre terceiros.

## 669. Resolução do conflito

A resolução deverá ser:

- registrada;
- atribuída;
- comunicada;
- temporalmente delimitada;
- incorporada aos documentos;
- revisada;
- exercitada, quando necessário.

## 670. Execução entre organizações

O procedimento deverá distinguir:

- solicitante;
- autorizador;
- executor;
- proprietário do recurso;
- proprietário dos dados;
- validador;
- responsável por evidências;
- responsável por encerramento.

## 671. Soberania organizacional

Nenhuma organização deverá alterar recurso de outra sem:

- solicitação legítima;
- autoridade;
- escopo;
- segurança;
- registro;
- responsabilidade;
- possibilidade de contestação.

## 672. Soberania de dados

Dados deverão permanecer sujeitos às regras de:

- propriedade;
- custódia;
- território;
- finalidade;
- acesso;
- compartilhamento;
- retenção;
- eliminação.

## 673. Interoperabilidade documental

Documentos relacionados deverão utilizar conceitos comuns para:

- estados;
- eventos;
- identidades;
- prioridades;
- evidências;
- resultados;
- falhas;
- encerramento.

## 674. Tradução federada

Traduções deverão preservar significado e não criar divergência de autoridade entre versões linguísticas.

## 675. Evidência operacional

Evidência operacional é o registro capaz de demonstrar que determinada ação, decisão, validação ou transição ocorreu.

## 676. Propriedades da evidência

A evidência deverá ser, conforme necessário:

- autêntica;
- íntegra;
- atribuível;
- temporal;
- contextual;
- completa;
- acessível;
- protegida;
- verificável;
- preservada.

## 677. Proveniência

A proveniência deverá permitir reconhecer:

- origem;
- produtor;
- ferramenta;
- execução;
- versão;
- transformação;
- custódia;
- contexto.

## 678. Cadeia de custódia

Quando necessária, deverá registrar:

- coleta;
- responsável;
- horário;
- local;
- transferência;
- acesso;
- armazenamento;
- alteração;
- destino;
- encerramento.

## 679. Evidência primária

Evidência primária poderá ser produzida diretamente pela ação, como:

- log;
- assinatura;
- medição;
- evento;
- registro transacional;
- arquivo;
- estado.

## 680. Evidência secundária

Evidência secundária poderá apoiar interpretação, como:

- relatório;
- captura;
- ata;
- testemunho;
- resumo;
- correlação;
- análise.

## 681. Evidência humana

Registros humanos deverão possuir:

- autoria;
- tempo;
- contexto;
- descrição;
- relação com a execução;
- confirmação, quando necessária.

## 682. Evidência automática

Registros automáticos deverão ser avaliados quanto a:

- confiabilidade do sistema;
- relógio;
- identidade;
- integridade;
- completude;
- configuração;
- retenção.

## 683. Evidência de decisão

Deverá registrar:

- pergunta;
- contexto;
- informações;
- alternativas;
- decisão;
- autoridade;
- justificativa;
- horário;
- consequência.

## 684. Evidência de autorização

Deverá indicar:

- autorizador;
- escopo;
- alvo;
- ação;
- limite;
- validade;
- condição;
- registro.

## 685. Evidência de execução

Deverá indicar:

- executor;
- procedimento;
- versão;
- alvo;
- ações;
- horários;
- resultados;
- desvios;
- encerramento.

## 686. Evidência de validação

Deverá indicar:

- critério;
- método;
- validador;
- resultado;
- limitações;
- aceitação;
- pendências.

## 687. Evidência de falha

Deverá preservar:

- estado;
- erro;
- impacto;
- etapa;
- responsável;
- ações;
- comunicação;
- reversão;
- escalonamento.

## 688. Evidência de reversão

Deverá indicar:

- gatilho;
- autoridade;
- estado anterior;
- ações;
- resultado;
- validação;
- riscos;
- pendências.

## 689. Evidência de encerramento

Deverá confirmar:

- resultado;
- estabilidade;
- acessos;
- bloqueios;
- comunicação;
- pendências;
- responsáveis;
- aprovação;
- horário.

## 690. Integridade temporal

Os registros deverão permitir reconstruir a ordem dos acontecimentos.

Divergências de relógio deverão ser reconhecidas e documentadas.

## 691. Correlação

Identificadores deverão permitir correlacionar:

- solicitação;
- aprovação;
- execução;
- logs;
- mensagens;
- agentes;
- sistemas;
- falhas;
- evidências;
- encerramento.

## 692. Preservação de contexto

Uma evidência isolada não deverá ser apresentada como prova completa quando depender de contexto adicional.

## 693. Evidência suficiente

A suficiência deverá considerar:

- impacto;
- criticidade;
- obrigação;
- contestabilidade;
- irreversibilidade;
- risco;
- auditoria;
- necessidade de aprendizagem.

## 694. Evidência excessiva

A coleta não deverá ser excessiva a ponto de:

- violar privacidade;
- expor segredos;
- aumentar risco;
- criar custo sem finalidade;
- dificultar análise;
- reduzir capacidade operacional.

## 695. Repositório de evidências

O repositório deverá possuir:

- controle de acesso;
- integridade;
- retenção;
- busca;
- correlação;
- backup;
- recuperação;
- auditoria;
- proteção contra alteração;
- eliminação governada.

## 696. Separação entre documento e evidência

O documento orienta a ação.

A evidência registra o que efetivamente ocorreu.

A execução não deverá alterar silenciosamente o documento para fazê-lo corresponder ao resultado.

## 697. Evidência de simulação

Exercícios deverão permanecer identificados como:

**SIMULAÇÃO**

Seus registros não deverão ser confundidos com eventos ou execuções reais.

## 698. Prestação de contas

A organização deverá conseguir demonstrar:

- por que o procedimento existe;
- quem o aprovou;
- quem o executou;
- qual versão foi utilizada;
- qual resultado ocorreu;
- quais desvios surgiram;
- quais correções foram realizadas.

## 699. Auditoria documental

A auditoria deverá avaliar:

- inventário;
- proprietário;
- vigência;
- versão;
- revisão;
- aprovação;
- publicação;
- acesso;
- integração;
- arquivamento.

## 700. Auditoria de execução

Deverá avaliar:

- identidade;
- autoridade;
- alvo;
- sequência;
- decisão;
- falha;
- validação;
- evidência;
- encerramento.

## 701. Auditoria de automação

Deverá avaliar:

- código;
- agente;
- versão;
- gatilho;
- permissão;
- limite;
- supervisão;
- interrupção;
- logs;
- resultado;
- regressão.

## 702. Auditoria federada

A auditoria entre organizações deverá respeitar:

- contrato;
- autonomia;
- dados;
- segurança;
- escopo;
- confidencialidade;
- responsabilidade;
- evidência suficiente.

## 703. Achado

Cada achado deverá relacionar:

- condição;
- requisito;
- evidência;
- risco;
- impacto;
- causa;
- recomendação;
- responsável;
- prazo.

## 704. Ação corretiva

A correção deverá ser validada por:

- revisão;
- teste;
- execução controlada;
- evidência;
- aprovação;
- atualização de representações derivadas.

## 705. Antipadrões de governança

Constituem antipadrões:

- documento sem proprietário;
- responsabilidade difusa;
- aprovação sem competência;
- acesso de leitura tratado como autorização;
- segredo no procedimento;
- cópia offline desprotegida;
- conformidade apenas declarada;
- norma consultada somente após o desenho;
- fornecedor como única fonte de conhecimento;
- evidência sem contexto;
- automação sem auditoria;
- extensão local que elimina invariante;
- retenção ilimitada sem finalidade;
- auditoria limitada à existência do arquivo.

## 706. Invariantes do Lote 5

Permanecem como invariantes:

- conhecimento operacional será ativo institucional;
- toda responsabilidade será atribuível;
- toda autoridade possuirá fundamento;
- toda segregação será proporcional ao risco;
- todo acesso emergencial será temporário;
- nenhum segredo será incorporado diretamente ao procedimento;
- toda versão vigente será autêntica e íntegra;
- leis, normas e NRs orientarão o desenho desde o início;
- fornecedor não eliminará responsabilidade interna;
- federação preservará autonomia e soberania;
- toda execução crítica produzirá evidência;
- toda evidência preservará contexto;
- toda retenção possuirá finalidade;
- toda eliminação será governada;
- toda auditoria avaliará prática, não apenas documentação;
- toda correção será validada;
- toda simulação permanecerá distinguível da realidade.

## 707. Garantias esperadas

A aplicação deste lote deverá garantir que:

- documentos possuam governança;
- acessos sejam proporcionais;
- alterações sejam autênticas;
- segredos permaneçam protegidos;
- leis e normas estejam integradas;
- fornecedores sejam governados;
- organizações cooperem com autonomia;
- execuções sejam demonstráveis;
- evidências sejam preservadas;
- desvios possam ser auditados;
- responsabilidades atravessem mudanças;
- o conhecimento permaneça institucional.

## 708. Resultado esperado do Lote 5

Ao final desta etapa, a Plataforma UNO deverá possuir um sistema no qual procedimentos e execuções sejam:

- legítimos;
- seguros;
- normativos;
- federáveis;
- rastreáveis;
- auditáveis;
- contestáveis;
- preserváveis;
- transmissíveis;
- responsáveis.

## 709. Transição para o Lote 6

A governança estabelece legitimidade e controle.

O lote final deverá demonstrar como a Plataforma UNO irá:

- testar documentos;
- exercitar pessoas;
- validar automações;
- medir resultados;
- reconhecer falhas;
- corrigir desvios;
- avaliar maturidade;
- preservar aprendizagem;
- consolidar invariantes;
- encerrar o modelo integrado de runbooks, playbooks e procedimentos operacionais.

---

# Lote 6 — Testes, Métricas, Maturidade, Aprendizagem e Encerramento

## 710. Procedimento não presumido

A existência de um documento aprovado não comprova que ele:

- está correto;
- corresponde à realidade;
- pode ser encontrado;
- pode ser compreendido;
- pode ser executado;
- produz o resultado;
- permanece seguro;
- permite reversão;
- gera evidências;
- atravessa mudanças de pessoas.

A capacidade operacional deverá ser demonstrada.

## 711. Teste como prova operacional

O teste deverá verificar a correspondência entre:

- instrução;
- realidade;
- executor;
- ferramenta;
- autoridade;
- resultado;
- evidência;
- propósito.

## 712. Programa permanente de testes

A Plataforma UNO deverá manter programa de testes para documentos operacionais.

O programa deverá definir:

- escopo;
- criticidade;
- modalidades;
- periodicidade;
- responsáveis;
- ambientes;
- critérios;
- evidências;
- ações corretivas;
- repetição;
- aprendizagem.

## 713. Proporcionalidade dos testes

A profundidade e a frequência deverão considerar:

- impacto;
- risco;
- irreversibilidade;
- frequência de execução;
- complexidade;
- mudança;
- automação;
- histórico;
- obrigação;
- quantidade de pessoas afetadas.

## 714. Cobertura

O programa deverá cobrir, ao longo do tempo:

- runbooks;
- playbooks;
- POPs;
- instruções;
- checklists;
- workflows;
- scripts;
- agentes;
- interfaces;
- procedimentos manuais;
- procedimentos federados;
- procedimentos emergenciais.

## 715. Teste documental

O teste documental deverá verificar:

- identificação;
- versão;
- estado;
- proprietário;
- aprovação;
- estrutura;
- referências;
- vigência;
- acesso;
- classificação;
- histórico.

## 716. Teste de completude

A completude deverá avaliar se o documento possui informações suficientes sobre:

- propósito;
- escopo;
- autoridade;
- condições;
- entradas;
- ações;
- decisões;
- falhas;
- validação;
- reversão;
- evidências;
- encerramento.

## 717. Teste de coerência

O teste deverá verificar se:

- o propósito corresponde ao resultado;
- a sequência respeita dependências;
- os papéis possuem autoridade;
- as entradas produzem as saídas;
- os critérios não se contradizem;
- a reversão corresponde à mudança;
- o encerramento corresponde à validação.

## 718. Teste de conformidade

Deverá verificar aderência a:

- Engenharia Oficial;
- política;
- arquitetura;
- contrato;
- lei;
- regulamento;
- norma técnica;
- Norma Regulamentadora;
- requisito territorial;
- obrigação institucional.

## 719. Teste de referência

As referências deverão ser verificadas quanto a:

- existência;
- acesso;
- versão;
- vigência;
- autenticidade;
- compatibilidade;
- estabilidade;
- relação com o procedimento.

## 720. Teste de links

Links deverão ser testados periodicamente.

O teste deverá detectar:

- destino inexistente;
- redirecionamento indevido;
- acesso incorreto;
- versão obsoleta;
- conteúdo alterado;
- dependência externa indisponível.

## 721. Teste de descoberta

Pessoas autorizadas deverão conseguir localizar o documento a partir de:

- atividade;
- serviço;
- alerta;
- sistema;
- função;
- evento;
- equipamento;
- resultado desejado.

## 722. Teste de acesso

O teste deverá confirmar:

- acesso legítimo;
- bloqueio indevido;
- proteção contra acesso não autorizado;
- funcionamento do acesso emergencial;
- disponibilidade offline;
- acessibilidade por dispositivo adequado.

## 723. Teste de leitura

O documento deverá ser avaliado quanto a:

- clareza;
- sequência;
- termos;
- instruções;
- decisões;
- alertas;
- riscos;
- resultados;
- navegação.

## 724. Teste por sucessor

Pessoa competente que não participou da autoria deverá utilizar o documento para compreender ou executar a atividade.

Esse teste deverá revelar dependências de conhecimento pessoal.

## 725. Teste por operador habitual

O operador habitual deverá verificar se o documento representa a prática real sem normalizar desvios inseguros.

## 726. Teste por público novo

Quando apropriado, pessoa recém-capacitada deverá utilizar o documento sob supervisão para avaliar:

- compreensibilidade;
- treinamento necessário;
- ambiguidades;
- dependências;
- carga cognitiva;
- possibilidade de erro.

## 727. Walkthrough

O walkthrough deverá percorrer cada etapa perguntando:

- o que é necessário;
- quem executa;
- qual autoridade;
- qual resultado;
- como validar;
- o que pode falhar;
- como interromper;
- como registrar.

## 728. Teste de mesa

O teste de mesa deverá apresentar cenário para que os participantes decidam quais:

- playbooks;
- runbooks;
- procedimentos;
- papéis;
- escalonamentos;
- comunicações;
- evidências;

seriam utilizados.

## 729. Execução controlada

A execução controlada deverá utilizar ambiente e escopo que limitem riscos enquanto permitem observar o comportamento real.

## 730. Teste em sandbox

O sandbox deverá evitar:

- alteração produtiva;
- exposição de dados;
- efeito financeiro;
- comunicação externa;
- impacto sobre pessoas;
- propagação;
- conflito com operação real.

## 731. Dados de teste

Os dados deverão ser:

- sintéticos;
- minimizados;
- autorizados;
- protegidos;
- representativos;
- eliminados conforme política.

## 732. Teste em produção controlada

Quando o teste em ambiente isolado não for suficiente, poderá ocorrer execução limitada em produção.

Ela deverá possuir:

- autoridade;
- janela;
- escopo;
- monitoramento;
- comunicação;
- reversão;
- critérios de suspensão;
- evidências;
- responsabilidade.

## 733. Sinalização de simulação

Todo teste ou exercício que represente situação fictícia deverá utilizar marcação inequívoca:

**SIMULAÇÃO**

A marcação deverá aparecer em:

- interface;
- painel;
- comunicação;
- alerta;
- registro;
- ordem;
- relatório;
- evidência.

## 734. Separação entre real e simulado

A organização deverá impedir que resultados simulados:

- acionem resposta real indevida;
- alterem indicadores reais;
- produzam pagamento;
- mobilizem autoridade externa;
- modifiquem produção;
- confundam usuários;
- contaminem memória institucional.

## 735. Incidente real durante teste

Se ocorrer incidente real:

- o teste poderá ser suspenso;
- a condição real deverá ser declarada;
- os registros deverão ser separados;
- recursos deverão ser redirecionados;
- as prioridades deverão ser reavaliadas;
- a autoridade deverá ser informada.

## 736. Teste de preparação

Deverá verificar se:

- alvo é reconhecido;
- ambiente é confirmado;
- autoridade está presente;
- acessos funcionam;
- recursos existem;
- backup está disponível;
- comunicação está pronta;
- plano de reversão é viável.

## 737. Teste de sequência

O teste deverá avaliar se as etapas:

- estão na ordem correta;
- podem ocorrer em paralelo;
- possuem sincronização;
- respeitam dependências;
- evitam conflito;
- produzem os estados esperados.

## 738. Teste de decisão

Os pontos de decisão deverão ser avaliados quanto a:

- dados disponíveis;
- critérios;
- alternativas;
- autoridade;
- tratamento de incerteza;
- registro;
- consequência.

## 739. Teste de parada

A organização deverá demonstrar que pessoas e sistemas conseguem interromper a execução diante de condição prevista.

## 740. Teste do kill switch

O mecanismo de interrupção emergencial deverá ser testado de forma segura para confirmar:

- autoridade;
- acesso;
- tempo;
- abrangência;
- bloqueio de nova execução;
- registro;
- possibilidade de recuperação.

## 741. Teste de pausa e retomada

Deverá confirmar se:

- o estado é preservado;
- o contexto permanece disponível;
- a autorização continua válida;
- mudanças são reconhecidas;
- a retomada não duplica efeitos;
- o resultado permanece rastreável.

## 742. Teste de cancelamento

O cancelamento deverá demonstrar:

- interrupção segura;
- preservação;
- comunicação;
- liberação de bloqueios;
- revogação;
- registro;
- encerramento.

## 743. Teste de reversão

A reversão deverá ser testada quanto a:

- ponto de retorno;
- disponibilidade dos dados;
- sequência;
- tempo;
- integridade;
- dependências;
- resultado;
- validação;
- riscos residuais.

## 744. Teste de compensação

Quando a ação for irreversível, deverá ser testado o mecanismo capaz de compensar efeitos de forma legítima e rastreável.

## 745. Teste de falha conhecida

Erros conhecidos deverão ser provocados em ambiente controlado para confirmar:

- detecção;
- mensagem;
- preservação;
- resposta;
- escalonamento;
- reversão;
- evidência.

## 746. Teste de falha desconhecida

O exercício poderá apresentar condição não documentada para avaliar se o executor:

- interrompe;
- preserva;
- comunica;
- evita improvisação perigosa;
- escala;
- registra;
- aprende.

## 747. Teste de indisponibilidade de dependência

O procedimento deverá ser avaliado diante da perda de:

- rede;
- energia;
- identidade;
- dado;
- ferramenta;
- fornecedor;
- especialista;
- repositório;
- comunicação;
- instalação.

## 748. Teste offline

Procedimentos críticos deverão ser testados sem acesso aos repositórios principais, quando esse cenário for relevante.

## 749. Teste de credencial emergencial

Deverá confirmar:

- disponibilidade;
- custódia;
- validade;
- escopo;
- monitoramento;
- registro;
- revogação;
- sucessão.

## 750. Teste de handover

A transferência deverá ser exercitada entre:

- pessoas;
- turnos;
- equipes;
- agentes;
- organizações;
- fornecedores.

## 751. Critérios do handover

O sucessor deverá receber conhecimento suficiente para reconhecer:

- propósito;
- estado;
- ações;
- decisões;
- riscos;
- acessos;
- pendências;
- próxima etapa;
- autoridade.

## 752. Teste de execução concorrente

Deverá avaliar:

- bloqueios;
- filas;
- versões;
- conflitos;
- idempotência;
- recursos compartilhados;
- reconciliação;
- encerramento.

## 753. Teste de idempotência

A repetição deverá comprovar que o mesmo identificador não produz efeito indevido adicional.

## 754. Teste de retentativa

Deverá avaliar:

- limite;
- intervalo;
- backoff;
- duplicidade;
- saturação;
- escalonamento;
- encerramento.

## 755. Teste de timeout

Deverá confirmar que a espera excessiva:

- é detectada;
- não bloqueia indefinidamente;
- produz estado conhecido;
- aciona alternativa;
- registra;
- escala.

## 756. Teste de circuito de proteção

O circuit breaker deverá ser testado quanto a:

- abertura;
- bloqueio;
- espera;
- teste de retorno;
- fechamento;
- alerta;
- intervenção.

## 757. Teste de workflow

O workflow deverá ser comparado ao documento para verificar:

- estados;
- transições;
- papéis;
- aprovações;
- limites;
- falhas;
- evidências;
- encerramento.

## 758. Teste de script

O script deverá ser testado quanto a:

- entrada;
- saída;
- parâmetros;
- erro;
- alvo;
- privilégio;
- logs;
- reversão;
- compatibilidade;
- segurança.

## 759. Teste de interface

A interface deverá ser avaliada quanto a:

- contexto;
- alvo;
- versão;
- autoridade;
- acessibilidade;
- confirmação;
- erro;
- navegação;
- interrupção;
- evidência.

## 760. Teste de agente artificial

O agente deverá ser avaliado quanto a:

- compreensão do propósito;
- respeito ao escopo;
- uso da versão vigente;
- tratamento de incerteza;
- proteção de dados;
- autoridade;
- recomendação;
- execução;
- escalonamento;
- interrupção.

## 761. Teste adversarial do agente

O exercício deverá avaliar resistência a tentativas de:

- ampliar escopo;
- revelar segredo;
- ignorar política;
- alterar alvo;
- executar comando indevido;
- ocultar evidência;
- aceitar autoridade falsa;
- seguir instrução maliciosa.

## 762. Teste de autonomia

Cada nível de autonomia deverá ser avaliado separadamente.

O sucesso em recomendação não comprova capacidade de execução autônoma.

## 763. Teste de supervisão humana

A supervisão deverá demonstrar que a pessoa consegue:

- compreender;
- acompanhar;
- intervir;
- interromper;
- corrigir;
- revogar;
- revisar.

## 764. Teste de confirmação significativa

O teste deverá avaliar se o aprovador recebe contexto suficiente ou apenas confirma mecanicamente.

## 765. Teste federado

Procedimentos entre organizações deverão avaliar:

- solicitação;
- identidade;
- autoridade;
- aceitação;
- dados;
- execução;
- evidência;
- autonomia;
- conflito;
- encerramento.

## 766. Teste de fornecedor

Deverá avaliar:

- contato;
- acesso;
- suporte;
- procedimento;
- evidência;
- tempo;
- responsabilidade;
- escalonamento;
- saída;
- revogação.

## 767. Teste de conformidade

Deverá comprovar se as etapas operacionalizam efetivamente os requisitos legais, normativos e contratuais.

## 768. Teste de saúde e segurança

Deverá avaliar:

- riscos;
- isolamento;
- equipamentos;
- capacitação;
- supervisão;
- comunicação;
- emergência;
- interrupção;
- retorno.

## 769. Teste de acessibilidade

Pessoas com diferentes necessidades deverão conseguir:

- localizar;
- perceber;
- compreender;
- navegar;
- executar;
- registrar;
- solicitar ajuda;
- interromper.

## 770. Plano de teste

O plano deverá conter:

- identificador;
- objetivo;
- escopo;
- documento;
- versão;
- ambiente;
- participantes;
- autoridade;
- dados;
- riscos;
- controles;
- critérios;
- evidências;
- encerramento.

## 771. Critério de sucesso

O sucesso deverá ser definido antes do teste.

Ele poderá incluir:

- conclusão;
- resultado;
- tempo;
- segurança;
- autoridade;
- ausência de impacto indevido;
- validação;
- evidência;
- reversão.

## 772. Critério de suspensão

O teste deverá ser suspenso quando:

- houver risco real;
- ocorrer perda de isolamento;
- surgir incidente real;
- dados forem expostos;
- autoridade for perdida;
- efeitos externos ocorrerem;
- pessoas estiverem em risco;
- o escopo for excedido.

## 773. Observação

Observadores deverão registrar:

- comportamento;
- tempos;
- dúvidas;
- desvios;
- dificuldades;
- improvisações;
- falhas;
- acertos;
- dependências;
- sugestões.

## 774. Evidência do teste

Deverá registrar:

- procedimento;
- versão;
- cenário;
- executor;
- autoridade;
- ações;
- resultados;
- falhas;
- tempos;
- validação;
- conclusão.

## 775. Teste bem-sucedido

O sucesso deverá indicar exatamente:

- o que foi comprovado;
- sob quais condições;
- em qual escopo;
- com quais limitações;
- até quando a evidência permanece aplicável.

## 776. Sucesso parcial

O resultado parcial deverá indicar critérios:

- atendidos;
- não atendidos;
- inconclusivos;
- não testados;
- bloqueados.

## 777. Falha de teste

A falha deverá ser tratada como descoberta de risco, e não apagada para preservar aparência de maturidade.

## 778. Classificação da falha

A falha poderá envolver:

- documento;
- conhecimento;
- treinamento;
- autoridade;
- acesso;
- ferramenta;
- automação;
- integração;
- segurança;
- evidência;
- arquitetura;
- governança.

## 779. Gravidade

A gravidade deverá considerar:

- impacto;
- criticidade;
- irreversibilidade;
- abrangência;
- obrigação;
- ausência de alternativa;
- recorrência;
- risco humano;
- risco institucional.

## 780. Ação imediata

Uma falha crítica poderá exigir:

- suspensão do documento;
- bloqueio da automação;
- revogação de acesso;
- orientação provisória;
- comunicação;
- correção emergencial;
- escalonamento;
- aceitação formal de risco.

## 781. Análise de causa

A análise deverá considerar:

- conteúdo;
- arquitetura;
- interface;
- treinamento;
- ferramenta;
- carga;
- cultura;
- recurso;
- fornecedor;
- decisão;
- contexto;
- norma.

## 782. Plano de ação

Cada ação deverá possuir:

- problema;
- causa;
- risco;
- responsável;
- prioridade;
- recurso;
- prazo;
- validação;
- teste;
- encerramento.

## 783. Correção documental

A correção poderá alterar:

- linguagem;
- sequência;
- critério;
- papel;
- comando;
- referência;
- falha;
- validação;
- reversão;
- evidência.

## 784. Correção operacional

Poderá exigir mudança em:

- ferramenta;
- acesso;
- capacidade;
- equipe;
- arquitetura;
- fornecedor;
- treinamento;
- ambiente;
- supervisão.

## 785. Correção de automação

Deverá avaliar:

- código;
- modelo;
- instrução;
- gatilho;
- permissão;
- dados;
- limite;
- observabilidade;
- reversão;
- integração.

## 786. Teste de confirmação

A ação corretiva somente deverá ser encerrada quando nova evidência demonstrar que a falha foi tratada.

## 787. Regressão

A correção deverá ser avaliada para confirmar que não prejudicou:

- outro caminho;
- outra organização;
- segurança;
- desempenho;
- acessibilidade;
- integração;
- reversão;
- evidência.

## 788. Frequência de teste

A frequência deverá considerar:

- criticidade;
- mudança;
- uso;
- histórico;
- risco;
- validade;
- fornecedor;
- tecnologia;
- norma;
- tempo desde a última comprovação.

## 789. Teste após mudança

Mudanças relevantes deverão exigir teste antes ou imediatamente após a entrada em vigor, conforme risco e estratégia de implantação.

## 790. Amostragem

Quando não for possível testar todas as execuções, a amostra deverá considerar:

- criticidade;
- exceção;
- agente;
- executor;
- organização;
- território;
- horário;
- resultado incomum;
- versão nova;
- fornecedor.

## 791. Cobertura acumulada

O programa deverá demonstrar quais documentos, caminhos, falhas e papéis foram testados ao longo do tempo.

## 792. Indicadores de inventário

Poderão incluir:

- quantidade de documentos;
- distribuição por tipo;
- documentos sem proprietário;
- documentos vencidos;
- documentos suspensos;
- documentos não comprovados;
- documentos sem teste.

## 793. Indicadores de uso

Poderão incluir:

- execuções;
- usuários;
- organizações;
- frequência;
- caminhos utilizados;
- documentos não utilizados;
- buscas sem resultado;
- acessos offline;
- recomendações de agentes.

## 794. Indicadores de execução

Poderão incluir:

- sucesso;
- sucesso parcial;
- falha;
- duração;
- pausa;
- reversão;
- escalonamento;
- intervenção humana;
- retentativa;
- cancelamento.

## 795. Indicadores de qualidade documental

Poderão incluir:

- ambiguidades;
- etapas ausentes;
- links quebrados;
- comandos inválidos;
- referências obsoletas;
- divergências com automação;
- feedbacks;
- correções;
- tempo de atualização.

## 796. Indicadores de segurança

Poderão incluir:

- acessos indevidos;
- credenciais expostas;
- privilégios excessivos;
- automações interrompidas;
- comandos bloqueados;
- revogações atrasadas;
- falhas de segregação;
- eventos adversariais.

## 797. Indicadores humanos

Poderão incluir:

- carga cognitiva;
- tempo de compreensão;
- erros;
- pedidos de ajuda;
- fadiga;
- recusas responsáveis;
- handovers;
- treinamentos;
- acessibilidade.

## 798. Indicadores de agentes

Poderão incluir:

- recomendações aceitas;
- recomendações rejeitadas;
- escalonamentos;
- execuções interrompidas;
- violações de limite;
- incertezas declaradas;
- uso de versão obsoleta;
- necessidade de correção humana.

## 799. Indicadores federados

Poderão incluir:

- solicitações;
- aceitações;
- recusas;
- conflitos;
- tempos;
- capacidades compartilhadas;
- evidências;
- divergências documentais;
- encerramentos.

## 800. Indicadores sem mascaramento

Resultados agregados não deverão ocultar:

- procedimento crítico não testado;
- documento sem sucessor;
- automação sem kill switch;
- fornecedor sem evidência;
- falha recorrente;
- risco vencido;
- versão obsoleta em uso;
- pessoa ou organização afetada de forma desproporcional.

## 801. Painel operacional documental

O painel poderá apresentar:

- documentos vigentes;
- criticidade;
- proprietários;
- uso;
- versões;
- testes;
- falhas;
- ações;
- treinamentos;
- automações;
- agentes;
- próxima revisão.

## 802. Nível 0 — conhecimento informal

Nesse nível:

- procedimentos não existem;
- conhecimento está nas pessoas;
- execuções não são padronizadas;
- autoridade é informal;
- evidências são escassas;
- falhas produzem improvisação;
- sucessão é frágil.

## 803. Nível 1 — documentação reativa

Nesse nível:

- alguns documentos existem;
- registros surgem após incidentes;
- versões são pouco controladas;
- documentos dependem de especialistas;
- testes são ocasionais;
- integração é limitada.

## 804. Nível 2 — documentação definida

Nesse nível:

- tipos são reconhecidos;
- modelos são utilizados;
- proprietários são atribuídos;
- revisões ocorrem;
- versões são controladas;
- procedimentos críticos começam a ser testados;
- evidências são preservadas.

## 805. Nível 3 — execução gerenciada

Nesse nível:

- documentos integram a operação;
- workflows são rastreáveis;
- automações são governadas;
- sucessores são treinados;
- métricas são acompanhadas;
- falhas geram ações;
- auditorias avaliam execuções reais.

## 806. Nível 4 — execução adaptativa

Nesse nível:

- telemetria identifica deriva;
- agentes apoiam descoberta;
- procedimentos se adaptam ao contexto dentro de limites;
- feedback retorna rapidamente;
- federação preserva autonomia;
- testes contínuos fortalecem a arquitetura.

## 807. Nível 5 — conhecimento operacional institucional

Nesse nível:

- conhecimento atravessa gerações;
- documentos preservam propósito;
- pessoas e agentes colaboram;
- autoridade permanece legítima;
- execução produz memória;
- aprendizagem transforma arquitetura;
- a operação evolui sem perder identidade.

## 808. Maturidade multidimensional

A maturidade deverá ser avaliada por dimensões:

- governança;
- conteúdo;
- pessoas;
- tecnologia;
- segurança;
- conformidade;
- acessibilidade;
- automação;
- federação;
- evidência;
- aprendizagem.

## 809. Maturidade não uniforme

Diferentes capacidades poderão apresentar níveis distintos.

A classificação global não deverá ocultar fragilidade em atividade crítica.

## 810. Plano de evolução

A evolução deverá priorizar:

- risco humano;
- atividade crítica;
- ausência de procedimento;
- conhecimento concentrado;
- automação opaca;
- falta de reversão;
- documento vencido;
- divergência;
- não conformidade;
- falha recorrente.

## 811. Aprendizagem da execução

Cada execução poderá gerar:

- correção;
- exemplo;
- alerta;
- novo caminho;
- nova condição;
- novo risco;
- mudança de treinamento;
- revisão de autoridade;
- melhoria de interface.

## 812. Aprendizagem sem alteração silenciosa

O executor não deverá modificar informalmente a fonte oficial apenas porque encontrou caminho melhor.

A melhoria deverá seguir:

- registro;
- proposta;
- revisão;
- teste;
- aprovação;
- publicação.

## 813. Memória de versões

Versões anteriores deverão permitir compreender:

- como se operava;
- por que mudou;
- qual falha ocorreu;
- qual decisão foi tomada;
- quais riscos foram reconhecidos;
- como a capacidade evoluiu.

## 814. Memória de decisões

Decisões relevantes deverão permanecer relacionadas:

- ao documento;
- à versão;
- ao contexto;
- à autoridade;
- ao resultado;
- à aprendizagem.

## 815. Conhecimento intergeracional

A documentação deverá permitir que futuras pessoas compreendam não apenas a sequência, mas também:

- propósito;
- princípios;
- riscos;
- limites;
- escolhas;
- compromissos;
- responsabilidades.

## 816. Modelo integrado de documentos operacionais

O modelo estabelecido por este arquivo compreende:

1. reconhecer a necessidade;
2. identificar o tipo documental;
3. atribuir proprietário;
4. compreender o contexto;
5. incorporar leis e normas;
6. estruturar o conteúdo;
7. definir autoridade;
8. estabelecer condições;
9. descrever ações e decisões;
10. tratar falhas;
11. definir reversão;
12. validar resultados;
13. produzir evidências;
14. revisar;
15. aprovar;
16. publicar;
17. integrar;
18. treinar;
19. executar;
20. observar;
21. testar;
22. corrigir;
23. substituir;
24. preservar memória;
25. evoluir.

## 817. Relação entre os tipos

A política determina princípios e limites.

O plano organiza objetivos e estratégias.

O playbook coordena respostas a cenários.

O runbook orienta capacidade operacional específica.

O POP padroniza atividade recorrente.

A instrução detalha tarefa.

O checklist confirma condições.

O workflow coordena estados e participantes.

A evidência demonstra o que ocorreu.

## 818. Relação com a configuração operacional

O arquivo:

`014-configuracao-e-estado-operacional.md`

estabelece o reconhecimento dos estados.

Os procedimentos deverão verificar o estado real antes de agir.

## 819. Relação com capacidade e saturação

O arquivo:

`015-capacidade-desempenho-e-saturacao.md`

estabelece limites de capacidade.

Os procedimentos deverão reconhecer volume, concorrência, tempo, filas, saturação e degradação.

## 820. Relação com disponibilidade e confiabilidade

O arquivo:

`016-disponibilidade-confiabilidade-e-slos.md`

estabelece compromissos de serviço.

Runbooks deverão orientar percepção, resposta e recuperação sem substituir a governança desses compromissos.

## 821. Relação com dependências e impacto

O arquivo:

`017-dependencias-operacionais-e-mapa-de-impacto.md`

estabelece relações entre capacidades.

Procedimentos deverão explicitar dependências, efeitos e ordem de execução.

## 822. Relação com contingência

O arquivo:

`018-contingencia-recuperacao-e-operacao-degradada.md`

estabelece modos alternativos.

Procedimentos deverão permitir ativar, operar, reconciliar e encerrar esses modos.

## 823. Relação com backup e recuperabilidade

O arquivo:

`019-backup-restauracao-e-recuperabilidade.md`

estabelece preservação e restauração.

Runbooks deverão transformar essas capacidades em ações seguras, testáveis e evidenciáveis.

## 824. Relação com continuidade e DR

O arquivo:

`020-continuidade-operacional-e-disaster-recovery.md`

estabelece planos, estratégias e coordenação.

Playbooks e runbooks deverão tornar essas estratégias executáveis.

## 825. Relação com o próximo arquivo

O próximo arquivo:

`022-automacao-operacional-e-auto-remediacao.md`

deverá aprofundar como procedimentos, runbooks, workflows e agentes poderão ser transformados em automações operacionais governadas.

Ele deverá preservar os limites estabelecidos neste arquivo para:

- autoridade;
- segurança;
- observabilidade;
- interrupção;
- reversão;
- responsabilidade;
- evidência;
- aprendizagem.

## 826. Invariantes permanentes

Permanecem como invariantes:

- procedimento não concede autoridade por si só;
- acesso não significa autorização;
- checklist não substitui competência;
- padrão não obriga ação insegura;
- automação não elimina responsabilidade;
- agente não amplia o próprio escopo;
- toda execução crítica possuirá identidade;
- toda ação possuirá alvo reconhecível;
- toda ação destrutiva possuirá controle reforçado;
- toda retentativa possuirá limite;
- toda execução longa possuirá acompanhamento;
- toda falha produzirá evidência;
- toda conclusão exigirá validação;
- toda exceção será temporária;
- toda simulação será identificada;
- toda versão será rastreável;
- toda revogação alcançará representações derivadas;
- toda adaptação local preservará invariantes superiores;
- toda aprendizagem seguirá governança;
- leis, normas e NRs orientarão o desenho desde o início;
- vida, dignidade, propósito e responsabilidade precederão conveniência e velocidade.

## 827. Garantia de identidade

Todo documento e toda execução deverão possuir identidade persistente.

## 828. Garantia de propósito

Toda ação deverá permanecer relacionada a uma finalidade legítima.

## 829. Garantia de autoridade

Toda execução deverá possuir autoridade reconhecível, proporcional e limitada.

## 830. Garantia de competência

Atividades críticas deverão ser executadas ou supervisionadas por pessoas e agentes adequadamente capacitados.

## 831. Garantia de contexto

O executor deverá reconhecer ambiente, alvo, estado, impacto e risco.

## 832. Garantia de segurança

Toda execução deverá possuir meios de prevenir, interromper, limitar e tratar danos.

## 833. Garantia de validação

Nenhum resultado deverá ser considerado concluído sem critério e evidência correspondentes.

## 834. Garantia de reversibilidade

Ações reversíveis deverão possuir caminho de retorno, e ações irreversíveis deverão possuir controle e compensação proporcionais.

## 835. Garantia de rastreabilidade

Decisões, autorizações, ações, resultados, falhas e encerramentos deverão permanecer correlacionáveis.

## 836. Garantia de acessibilidade

O público autorizado deverá conseguir localizar, compreender e utilizar o documento dentro de suas necessidades legítimas.

## 837. Garantia de continuidade

O conhecimento operacional deverá permanecer acessível diante de mudanças de pessoas, ferramentas, organizações e ambientes.

## 838. Garantia de aprendizagem

Toda falha, execução e exercício relevante deverá fortalecer a capacidade futura.

## 839. Princípios e virtudes aplicadas

Os documentos operacionais deverão expressar:

- **propósito**, para que a ação saiba por que existe;
- **prudência**, para reconhecer risco antes de agir;
- **responsabilidade**, para atribuir decisões;
- **verdade**, para registrar o que realmente ocorreu;
- **clareza**, para reduzir ambiguidade;
- **discernimento**, para adaptar-se sem abandonar princípios;
- **cooperação**, para coordenar pessoas e agentes;
- **autonomia**, para permitir ação dentro de limites;
- **governança**, para orientar e revisar a autonomia;
- **memória**, para preservar conhecimento;
- **continuidade**, para atravessar mudanças;
- **humildade**, para reconhecer incerteza;
- **coragem**, para interromper ação inadequada;
- **justiça**, para considerar os impactos sobre pessoas;
- **esperança responsável**, para transformar aprendizagem em evolução.

## 840. Compromisso normativo

A Plataforma UNO deverá construir seus documentos utilizando leis, regulamentos, normas técnicas, Normas Regulamentadoras, contratos e políticas como linhas orientadoras desde o início.

Ela não deverá:

- improvisar primeiro;
- documentar depois;
- procurar enquadramento somente ao final;
- tratar conformidade como ornamentação;
- utilizar urgência para apagar responsabilidade.

## 841. Declaração de capacidade operacional

Nenhum procedimento deverá ser declarado plenamente comprovado sem evidência proporcional.

A declaração deverá indicar:

- documento;
- versão;
- atividade;
- executor;
- ambiente;
- cenário;
- teste;
- resultado;
- limitações;
- riscos;
- validade;
- autoridade.

## 842. Resultado esperado

Com a aplicação desta Engenharia Oficial, a Plataforma UNO deverá ser capaz de:

- transformar princípios em ações;
- transformar planos em coordenação;
- transformar conhecimento em capacidade;
- transformar execução em evidência;
- transformar falha em aprendizagem;
- transformar experiência em memória;
- transformar automação em serviço governado;
- transformar sucessão em continuidade.

## 843. Encerramento

Um runbook não deverá ser apenas uma lista de comandos.

Um playbook não deverá ser apenas uma coleção de respostas.

Um procedimento não deverá ser apenas uma obrigação documental.

Cada um deverá constituir uma ponte entre:

- compreensão;
- decisão;
- autoridade;
- ação;
- resultado;
- memória.

A Plataforma UNO deverá permitir que pessoas e agentes saibam:

- quando agir;
- como agir;
- até onde agir;
- quando parar;
- quando pedir ajuda;
- como comprovar;
- como aprender.

O conhecimento operacional não deverá permanecer aprisionado na memória de poucas pessoas.

Também não deverá ser entregue cegamente a ferramentas ou automações.

Ele deverá tornar-se patrimônio institucional vivo, capaz de atravessar:

- turnos;
- equipes;
- tecnologias;
- fornecedores;
- organizações;
- crises;
- gerações.

A melhor execução não será apenas a mais rápida.

Será aquela que produzir o resultado necessário sem abandonar:

- vida;
- dignidade;
- propósito;
- autoridade;
- segurança;
- responsabilidade;
- verdade;
- capacidade de reparar.

Quando uma ação puder ser repetida com consciência, validada com evidência, interrompida diante do risco, ensinada a um sucessor e melhorada pela experiência, ela deixará de ser apenas uma prática individual.

Ela passará a constituir Engenharia Oficial.

---

**Fim do arquivo `021-runbooks-playbooks-e-procedimentos-operacionais.md`.**
