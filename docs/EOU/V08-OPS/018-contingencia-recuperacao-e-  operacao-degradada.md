# 018 — Contingência, Recuperação e Operação Degradada

## Engenharia Oficial da Plataforma UNO  
### Volume 08 — OPS  
### Operações, Continuidade e Consciência Operacional

---

## Declaração de abertura

Toda operação real está sujeita a falhas, perdas, indisponibilidades, restrições, sobrecargas, interrupções, mudanças inesperadas e condições nas quais o funcionamento normal já não pode ser integralmente preservado.

A maturidade operacional da Plataforma UNO não será medida apenas por sua capacidade de funcionar quando todas as condições forem favoráveis.

Ela será medida, sobretudo, por sua capacidade de:

- reconhecer que a condição normal foi comprometida;
- compreender o que ainda permanece disponível;
- preservar pessoas, propósito, identidade e responsabilidades;
- impedir que uma falha localizada se transforme em colapso sistêmico;
- adaptar sua forma de operar sem abandonar seus princípios;
- manter funções essenciais sob capacidade reduzida;
- recuperar capacidades de forma segura, ordenada e verificável;
- aprender com a ocorrência;
- retornar à normalidade sem apagar o que aconteceu.

Este documento estabelece a Engenharia Oficial de contingência, recuperação e operação degradada da Plataforma UNO.

---

## Propósito

Este arquivo define os fundamentos, estruturas, estados, critérios, responsabilidades, decisões, fluxos e garantias através dos quais a UNO deverá responder quando uma capacidade, recurso, serviço, integração, organização, pessoa, agente, infraestrutura ou condição ambiental deixar de sustentar a operação conforme esperado.

Seu propósito é assegurar que nenhuma degradação relevante seja tratada como simples ausência de funcionamento.

Toda degradação deverá ser:

- percebida;
- contextualizada;
- classificada;
- comunicada;
- contida;
- acompanhada;
- compensada quando possível;
- recuperada de forma controlada;
- registrada;
- avaliada;
- convertida em aprendizado institucional.

---

## Tese fundamental

> A contingência não começa quando tudo falha.  
> Ela começa quando a operação reconhece que já não pode continuar da mesma maneira com segurança, legitimidade e responsabilidade.

Operação degradada não significa operação abandonada.

Significa uma condição deliberadamente reconhecida na qual a Plataforma UNO continua exercendo somente aquilo que ainda pode realizar com segurança, clareza, proporcionalidade e propósito.

Recuperar não significa apenas religar componentes.

Recuperar significa restabelecer, de forma verificável:

- identidade;
- contexto;
- integridade;
- autoridade;
- capacidade;
- segurança;
- continuidade;
- confiança;
- coerência institucional.

---

## Princípio central

> Quando a forma normal de operar deixa de ser sustentável, a UNO deverá preservar primeiro aquilo que não pode ser perdido e reorganizar, ao redor disso, tudo aquilo que ainda pode ser realizado.

A ordem de preservação deverá considerar, no mínimo:

1. vida e integridade das pessoas;
2. dignidade, liberdade e direitos;
3. segurança;
4. legitimidade e autoridade;
5. identidade institucional;
6. propósito da Missão;
7. continuidade das funções essenciais;
8. integridade dos dados e evidências;
9. responsabilidade e rastreabilidade;
10. capacidade de recuperação;
11. confiança do ecossistema;
12. aprendizado institucional.

---

## Relação com os arquivos anteriores

Este documento sucede e operacionaliza fundamentos estabelecidos em:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`.

O arquivo 014 permite reconhecer a configuração e o estado da operação.

O arquivo 015 permite compreender capacidade, desempenho, utilização, limites e saturação.

O arquivo 016 estabelece disponibilidade, confiabilidade e compromissos de nível de serviço.

O arquivo 017 torna visíveis as dependências e os caminhos pelos quais impactos podem se propagar.

O arquivo 018 reúne esses conhecimentos para responder à seguinte questão:

> O que a UNO deverá fazer quando a operação normal não puder mais ser integralmente sustentada, mas ainda existir responsabilidade, necessidade e propósito a preservar?

---

## Distinções fundamentais

Este documento diferencia:

- falha;
- degradação;
- indisponibilidade;
- interrupção;
- incidente;
- contingência;
- emergência;
- crise;
- desastre;
- operação degradada;
- recuperação;
- restauração;
- retorno controlado;
- normalização;
- reconstrução;
- aprendizado pós-ocorrência.

Essas condições não são equivalentes.

Cada uma produz:

- diferentes níveis de atenção;
- diferentes autoridades;
- diferentes decisões;
- diferentes limites;
- diferentes mecanismos de proteção;
- diferentes obrigações de comunicação;
- diferentes critérios de recuperação;
- diferentes evidências de encerramento.

---

## Escopo arquitetural

A Engenharia de contingência deverá abranger degradações que afetem:

- pessoas;
- equipes;
- operadores;
- agentes;
- organizações;
- Missões;
- capacidades;
- serviços;
- processos;
- automações;
- integrações;
- APIs;
- dados;
- conhecimento;
- identidade;
- autenticação;
- autorização;
- comunicação;
- infraestrutura;
- energia;
- conectividade;
- fornecedores;
- territórios;
- instalações físicas;
- recursos financeiros;
- instrumentos jurídicos;
- condições ambientais;
- segurança;
- governança;
- confiança institucional.

Uma contingência poderá ser:

- técnica;
- operacional;
- humana;
- organizacional;
- institucional;
- territorial;
- ambiental;
- econômica;
- jurídica;
- regulatória;
- informacional;
- cognitiva;
- reputacional;
- federativa;
- híbrida.

---

## Objetivos arquiteturais

A arquitetura definida neste documento deverá permitir que a UNO:

1. reconheça degradações antes do colapso;
2. determine o alcance real do impacto;
3. identifique capacidades essenciais e preserváveis;
4. estabeleça modos operacionais alternativos;
5. reduza funcionalidades com consciência;
6. impeça ações inseguras ou ilegítimas;
7. preserve contexto, memória e evidências;
8. redistribua responsabilidades quando necessário;
9. substitua dependências quando houver alternativas válidas;
10. permita operação manual quando a automação não for confiável;
11. permita operação local quando a coordenação central estiver indisponível;
12. mantenha comunicação proporcional ao impacto;
13. proteja pessoas durante toda a ocorrência;
14. determine critérios claros de recuperação;
15. impeça retornos prematuros à normalidade;
16. registre perdas, decisões e adaptações;
17. revise suas próprias estratégias;
18. fortaleça continuamente sua resiliência.

---

## Garantia fundamental

Nenhuma condição de urgência deverá autorizar automaticamente:

- supressão de direitos;
- eliminação de rastreabilidade;
- concentração ilimitada de autoridade;
- execução sem responsabilidade;
- ocultação de impactos;
- abandono de pessoas;
- destruição de evidências;
- flexibilização indefinida de segurança;
- manutenção permanente de poderes extraordinários;
- retorno à normalidade sem validação.

A contingência poderá alterar temporariamente a forma de operar.

Não poderá eliminar a identidade, o propósito, a responsabilidade e a legitimidade que sustentam a operação.

---

## Estrutura de aprofundamento

Este arquivo será desenvolvido nos seguintes lotes:

### Lote 1 — Fundamentos da contingência e da operação degradada

Estabelecerá:

- conceitos fundamentais;
- natureza da degradação;
- relação entre normalidade, exceção e continuidade;
- princípios de preservação;
- limites da adaptação;
- condições de ativação.

### Lote 2 — Estados, níveis e classificação das contingências

Definirá:

- estados operacionais;
- níveis de degradação;
- escalas de impacto;
- criticidade;
- alcance;
- duração;
- reversibilidade;
- previsibilidade;
- critérios de classificação.

### Lote 3 — Modos de operação degradada

Estabelecerá:

- redução controlada de capacidade;
- funcionalidade mínima;
- modos locais;
- modos manuais;
- modos isolados;
- modos seguros;
- modos federados;
- substituições temporárias;
- restrições operacionais.

### Lote 4 — Ativação, coordenação e autoridade de contingência

Definirá:

- detecção;
- declaração;
- autoridade;
- papéis;
- comunicação;
- mobilização;
- escalonamento;
- coordenação;
- governança extraordinária;
- prestação de contas.

### Lote 5 — Recuperação, restauração e retorno controlado

Estabelecerá:

- prioridades de recuperação;
- sequenciamento;
- dependências;
- validação;
- testes;
- recomposição de estado;
- retorno progressivo;
- critérios de normalização;
- impedimentos ao retorno.

### Lote 6 — Memória, aprendizado e evolução da resiliência

Definirá:

- registro da ocorrência;
- preservação de evidências;
- análise posterior;
- responsabilidades;
- correções;
- melhoria dos planos;
- exercícios;
- simulações;
- aprendizado institucional;
- encerramento oficial do arquivo.

---

## Resultado esperado

Ao final deste documento, a Plataforma UNO deverá possuir uma arquitetura capaz de continuar servindo mesmo quando sua condição normal tiver sido comprometida.

Não pela tentativa de fingir que nada mudou.

Mas pela capacidade de reconhecer a realidade, reduzir com consciência, preservar o essencial, recuperar com segurança e aprender com aquilo que aconteceu.

> A UNO não demonstrará sua maturidade apenas quando operar plenamente.  
> Demonstrará sua maturidade quando souber o que preservar, o que interromper, como continuar e quando retornar.

---

## Lote 1 — Fundamentos da Contingência e da Operação Degradada

---

## 1. A contingência como capacidade institucional

Contingência é a capacidade institucional de reconhecer que a forma normal de operar foi comprometida e reorganizar conscientemente a operação para preservar aquilo que continua sendo essencial, legítimo e possível.

Ela não constitui apenas um plano armazenado para utilização futura.

Ela é uma capacidade viva composta por:

- percepção;
- preparação;
- decisão;
- autoridade;
- coordenação;
- adaptação;
- comunicação;
- execução;
- proteção;
- recuperação;
- memória;
- aprendizado.

Uma instituição não possui contingência apenas porque escreveu procedimentos.

Ela possui contingência quando consegue:

- detectar que algo mudou;
- compreender suficientemente a mudança;
- reconhecer seus próprios limites;
- identificar o que está ameaçado;
- escolher o que deve ser preservado;
- interromper o que se tornou inseguro;
- continuar o que ainda pode ser realizado;
- mobilizar as capacidades adequadas;
- recuperar-se sem produzir novos danos;
- demonstrar por que tomou cada decisão.

A contingência será, portanto, uma capacidade operacional, cognitiva, organizacional e institucional da Plataforma UNO.

---

## 2. A normalidade operacional

A operação normal corresponde ao estado em que a UNO consegue cumprir seus propósitos e compromissos dentro das condições previstas de:

- capacidade;
- disponibilidade;
- desempenho;
- segurança;
- confiabilidade;
- autoridade;
- conformidade;
- governança;
- rastreabilidade;
- continuidade;
- qualidade;
- responsabilidade.

Normalidade não significa ausência absoluta de falhas.

Uma operação poderá continuar normal mesmo contendo:

- pequenas variações;
- falhas toleradas;
- atrasos dentro dos limites;
- indisponibilidades previstas;
- manutenções programadas;
- reduções não significativas;
- oscilações absorvidas por redundância;
- correções automáticas bem-sucedidas.

O que caracteriza a normalidade não é a perfeição.

É a capacidade de absorver variações sem comprometer as propriedades fundamentais da operação.

A normalidade termina quando a operação já não consegue preservar, dentro das condições estabelecidas, uma ou mais propriedades necessárias à execução legítima de suas responsabilidades.

---

## 3. A ruptura da normalidade

A ruptura da normalidade poderá ocorrer de maneira:

- súbita;
- progressiva;
- intermitente;
- silenciosa;
- acumulativa;
- localizada;
- distribuída;
- previsível;
- inesperada;
- reversível;
- irreversível.

Uma ruptura súbita poderá resultar de:

- falha de infraestrutura;
- interrupção de energia;
- perda de conectividade;
- indisponibilidade de serviço crítico;
- acidente;
- ataque;
- desastre ambiental;
- perda abrupta de uma capacidade.

Uma ruptura progressiva poderá resultar de:

- saturação;
- degradação de desempenho;
- esgotamento de recursos;
- crescimento de filas;
- perda gradual de qualidade;
- redução de equipes;
- deterioração de dependências;
- acúmulo de falhas não corrigidas.

Uma ruptura silenciosa poderá existir quando a operação aparenta continuar funcionando, mas já perdeu:

- confiabilidade;
- integridade;
- segurança;
- legitimidade;
- rastreabilidade;
- atualidade;
- consistência;
- capacidade real de cumprir seu propósito.

A ruptura silenciosa é especialmente perigosa porque permite que decisões e ações continuem sendo produzidas sob uma falsa percepção de normalidade.

---

## 4. Falha não é contingência

A falha é um acontecimento ou estado no qual algo deixa de cumprir uma função esperada.

A contingência é a resposta organizada à falha, à ameaça de falha ou à impossibilidade de manter a operação normal.

Uma falha poderá ser:

- absorvida automaticamente;
- corrigida localmente;
- tolerada temporariamente;
- compensada por redundância;
- contida sem ativar contingência;
- suficientemente relevante para exigir contingência.

Portanto:

> Nem toda falha ativa uma contingência, mas toda contingência deverá reconhecer quais falhas, ameaças ou limitações justificaram sua ativação.

A ausência dessa distinção produz dois extremos perigosos:

- ativar estruturas extraordinárias para qualquer pequena anomalia;
- tratar degradações graves como falhas rotineiras.

A UNO deverá evitar ambos.

---

## 5. Degradação operacional

Degradação operacional é a redução parcial, progressiva ou localizada da capacidade da operação de cumprir suas funções conforme os parâmetros estabelecidos.

Ela poderá afetar:

- velocidade;
- volume;
- precisão;
- cobertura;
- disponibilidade;
- confiança;
- segurança;
- qualidade;
- integridade;
- autonomia;
- coordenação;
- capacidade de recuperação.

A degradação poderá existir mesmo quando o serviço permanece tecnicamente disponível.

Um serviço poderá responder, mas:

- responder lentamente;
- responder de forma incompleta;
- apresentar dados desatualizados;
- produzir resultados inconsistentes;
- depender de intervenção excessiva;
- operar sem evidência suficiente;
- consumir recursos além do sustentável;
- não atender a todos os públicos;
- perder funções de segurança;
- deixar de cumprir requisitos normativos.

A disponibilidade isolada não será prova de saúde operacional.

---

## 6. Operação degradada

Operação degradada é um modo deliberadamente reconhecido de funcionamento no qual uma ou mais capacidades operam abaixo de sua condição normal, sob limites, controles, prioridades e garantias específicas.

Ela deverá ser:

- explicitamente declarada;
- contextualizada;
- delimitada;
- autorizada;
- monitorada;
- comunicada;
- revisada;
- temporária;
- reversível quando possível;
- encerrada formalmente.

A operação degradada não poderá ser uma situação informal na qual todos sabem que algo está errado, mas nenhuma responsabilidade é assumida.

Ela deverá informar claramente:

- o que foi degradado;
- por que foi degradado;
- desde quando;
- em qual território ou escopo;
- quem foi afetado;
- quais funções permanecem disponíveis;
- quais funções foram reduzidas;
- quais funções foram suspensas;
- quais riscos foram aceitos;
- quem autorizou a condição;
- quais medidas compensatórias foram adotadas;
- qual é o próximo momento de revisão;
- quais são os critérios de recuperação.

---

## 7. Operar degradado não é operar irresponsavelmente

Uma condição adversa não autoriza a UNO a realizar ações sem segurança, evidência, competência ou legitimidade.

A operação degradada deverá reduzir sua ambição antes de reduzir suas garantias essenciais.

Quando não for possível sustentar simultaneamente todas as funções, a UNO deverá:

1. preservar as funções essenciais;
2. reduzir as funções secundárias;
3. suspender as funções inseguras;
4. comunicar as limitações;
5. mobilizar capacidades adicionais;
6. revisar continuamente a situação.

A operação degradada não deverá simular normalidade.

Ela deverá tornar suas limitações visíveis aos responsáveis e, quando pertinente, às pessoas afetadas.

> É preferível oferecer uma capacidade reduzida, verdadeira e segura do que manter uma aparência de integralidade sustentada por incerteza, improvisação e risco oculto.

---

## 8. Indisponibilidade

Indisponibilidade é a condição na qual uma capacidade, recurso ou serviço não pode ser utilizado conforme necessário.

Ela poderá ser:

- total;
- parcial;
- intermitente;
- programada;
- não programada;
- local;
- regional;
- nacional;
- sistêmica;
- funcional;
- técnica;
- institucional.

Uma capacidade poderá estar tecnicamente disponível e institucionalmente indisponível.

Isso ocorrerá quando, embora o recurso exista, faltarem:

- autorização;
- habilitação;
- segurança;
- dados confiáveis;
- operador competente;
- base jurídica;
- condição ambiental adequada;
- legitimidade;
- supervisão necessária;
- recursos complementares indispensáveis.

A avaliação de disponibilidade deverá considerar a capacidade de uso legítimo, e não apenas a existência técnica do componente.

---

## 9. Interrupção

Interrupção é a cessação temporária ou definitiva de uma atividade, fluxo, capacidade, serviço ou operação.

Ela poderá ser:

- involuntária;
- preventiva;
- protetiva;
- programada;
- emergencial;
- seletiva;
- integral.

Interromper poderá ser uma decisão responsável.

Quando a continuidade produzir risco maior do que a suspensão, a UNO deverá interromper.

São exemplos:

- impedir execução baseada em dados corrompidos;
- suspender uma automação que perdeu seus controles;
- bloquear uma integração comprometida;
- interromper uma atividade física sem proteção adequada;
- suspender decisões quando a autoridade não puder ser confirmada;
- impedir movimentações financeiras sem rastreabilidade;
- interromper atendimento que possa causar dano.

A continuidade não será um valor absoluto.

Ela deverá existir a serviço da vida, do propósito, da segurança e da legitimidade.

---

## 10. Incidente

Incidente é um acontecimento ou conjunto de acontecimentos que reduz, ameaça ou interrompe propriedades relevantes da operação.

Um incidente poderá:

- permanecer localizado;
- gerar degradação;
- ativar contingência;
- evoluir para emergência;
- produzir crise;
- contribuir para desastre.

O incidente descreve o acontecimento operacional.

A contingência descreve a capacidade organizada de responder a ele.

A emergência descreve a necessidade de resposta extraordinária e temporalmente sensível.

A crise descreve a condição na qual decisões, confiança, coordenação ou continuidade institucional estão significativamente ameaçadas.

O desastre descreve uma ruptura de grande magnitude que excede capacidades ordinárias e exige recuperação ampliada ou reconstrução.

Esses conceitos deverão permanecer relacionados, mas não confundidos.

---

## 11. Emergência

Emergência é uma condição na qual a demora, a omissão ou a resposta inadequada poderá ampliar significativamente danos a:

- pessoas;
- comunidades;
- operações;
- organizações;
- territórios;
- patrimônio;
- dados;
- direitos;
- meio ambiente;
- continuidade institucional.

A emergência exige prioridade, mas não elimina a responsabilidade.

A urgência deverá modificar:

- a velocidade da resposta;
- a mobilização de capacidades;
- a frequência de revisão;
- o nível de coordenação;
- a proximidade da supervisão.

Ela não deverá eliminar:

- legitimidade;
- proporcionalidade;
- rastreabilidade;
- prestação de contas;
- proteção das pessoas;
- preservação de evidências.

---

## 12. Crise

Crise é uma condição na qual a continuidade, a confiança, a coordenação, a legitimidade ou a capacidade decisória da instituição ficam sob ameaça significativa.

Uma crise poderá ser produzida por uma falha técnica, mas não será necessariamente técnica.

Ela poderá envolver:

- perda de confiança pública;
- conflito de autoridade;
- desinformação;
- ruptura entre organizações;
- incapacidade de coordenação;
- ameaça regulatória;
- insuficiência financeira;
- perda de liderança;
- conflito social;
- falha de comunicação;
- evento territorial grave;
- exposição de vulnerabilidades institucionais.

A crise exige compreensão ampliada.

Recuperar servidores poderá não recuperar confiança.

Restabelecer comunicação poderá não recuperar legitimidade.

Retomar serviços poderá não restaurar cooperação.

A resposta à crise deverá abranger a realidade técnica, humana, organizacional e institucional.

---

## 13. Desastre

Desastre é uma ruptura severa que produz impacto amplo e excede, total ou parcialmente, a capacidade normal de resposta e recuperação do contexto afetado.

Um desastre poderá exigir:

- ativação de estruturas extraordinárias;
- mobilização interorganizacional;
- apoio externo;
- operação territorial descentralizada;
- reconstrução de capacidades;
- redefinição de prioridades;
- recuperação prolongada;
- proteção especial de populações;
- coordenação com autoridades públicas;
- revisão profunda da arquitetura.

O desastre não deverá ser definido apenas pela dimensão do evento.

Ele deverá considerar a relação entre:

- magnitude do impacto;
- vulnerabilidade do contexto;
- capacidade disponível;
- tempo de resposta;
- dependências afetadas;
- possibilidade de recuperação.

O mesmo evento poderá ser absorvido por uma organização preparada e tornar-se desastroso para outra sem capacidade equivalente.

---

## 14. Contingência preventiva e contingência reativa

A contingência preventiva é ativada diante de uma ameaça relevante antes que a ruptura principal tenha ocorrido.

Poderá ser justificada por:

- previsão meteorológica;
- sinais de saturação;
- deterioração de infraestrutura;
- ameaça de segurança;
- anúncio de indisponibilidade;
- risco territorial;
- redução iminente de equipe;
- alteração normativa;
- dependência em estado crítico;
- tendência de falha.

A contingência reativa é ativada após a materialização da degradação, falha ou interrupção.

A UNO deverá privilegiar a antecipação sempre que houver evidência suficiente.

Contudo, não deverá paralisar preventivamente a operação com base apenas em especulação não fundamentada.

Toda ativação preventiva deverá registrar:

- evidências;
- incertezas;
- cenários considerados;
- custo da antecipação;
- custo potencial da omissão;
- autoridade responsável;
- critérios de revisão.

---

## 15. O princípio da preservação essencial

Diante da impossibilidade de preservar tudo, a UNO deverá reconhecer aquilo que não poderá ser perdido sem descaracterizar a operação ou produzir dano inaceitável.

São objetos fundamentais de preservação:

### 15.1 Vida e integridade

Nenhuma continuidade operacional justificará exposição desproporcional de pessoas a risco físico, psicológico, social ou institucional.

### 15.2 Dignidade

Pessoas afetadas não deverão ser reduzidas a números, cargas, filas, recursos ou obstáculos operacionais.

### 15.3 Identidade

A UNO deverá continuar capaz de reconhecer:

- quem está agindo;
- em nome de quem;
- com qual autoridade;
- sobre qual objeto;
- dentro de qual contexto.

### 15.4 Propósito

A operação degradada não poderá continuar atividades que perderam relação compreensível com o propósito que as legitima.

### 15.5 Responsabilidade

Toda decisão relevante deverá permanecer atribuível a pessoas, papéis, agentes ou instâncias identificáveis.

### 15.6 Evidência

A contingência não poderá apagar registros necessários à compreensão, auditoria, correção ou responsabilização.

### 15.7 Memória

O estado anterior, as mudanças realizadas e os efeitos observados deverão ser preservados.

### 15.8 Segurança

A redução de capacidade não deverá produzir exposição ilimitada a ameaças.

### 15.9 Continuidade essencial

Funções indispensáveis deverão receber prioridade sobre conveniências e funcionalidades secundárias.

### 15.10 Capacidade de recuperação

Nenhuma adaptação temporária deverá destruir desnecessariamente a possibilidade de restaurar ou reconstruir a operação.

---

## 16. O princípio da redução consciente

Quando a capacidade disponível for menor do que a demanda, a UNO deverá reduzir conscientemente seu escopo.

A redução poderá ocorrer por:

- território;
- horário;
- público;
- volume;
- funcionalidade;
- prioridade;
- canal;
- nível de serviço;
- complexidade;
- dependência;
- risco;
- modalidade de atendimento.

Toda redução deverá ser baseada em critérios explícitos.

Não poderá resultar de:

- favorecimento oculto;
- discriminação;
- influência indevida;
- conveniência particular;
- ausência de coragem para declarar limites;
- decisão automatizada inexplicável.

A redução deverá preservar equidade proporcional.

Isso não significa oferecer exatamente o mesmo a todos.

Significa distribuir atenção e capacidade segundo:

- necessidade;
- urgência;
- impacto;
- vulnerabilidade;
- finalidade;
- risco;
- responsabilidade;
- disponibilidade real.

---

## 17. O princípio da funcionalidade mínima segura

Toda capacidade crítica deverá possuir uma definição de funcionalidade mínima segura.

Essa definição deverá informar:

- o menor conjunto de funções que ainda produz valor legítimo;
- os controles que não poderão ser removidos;
- os dados mínimos necessários;
- as autoridades mínimas exigidas;
- os operadores indispensáveis;
- os limites de volume;
- as condições ambientais;
- os recursos essenciais;
- as dependências obrigatórias;
- os critérios de suspensão total.

A funcionalidade mínima segura não será simplesmente uma versão menor do serviço normal.

Ela será um modo arquitetural próprio, concebido para condições adversas.

Se uma capacidade não puder cumprir sua função mínima com segurança, deverá ser suspensa.

---

## 18. O princípio da falha segura

Quando uma capacidade perder contexto, controle ou confiança suficiente, seu comportamento padrão deverá reduzir o risco.

Dependendo da natureza da capacidade, falhar com segurança poderá significar:

- interromper;
- negar;
- congelar;
- preservar o último estado confiável;
- solicitar confirmação;
- transferir para operação manual;
- isolar;
- reduzir permissões;
- limitar volume;
- retornar a uma configuração conhecida;
- escalar para autoridade competente.

Nem toda capacidade deverá falhar fechada.

Em alguns contextos, impedir toda ação poderá causar dano maior.

Por isso, cada capacidade deverá definir previamente:

- como falha;
- para qual estado retorna;
- quais funções preserva;
- quais bloqueia;
- quem é informado;
- quem poderá reativá-la.

---

## 19. O princípio da degradação progressiva

Sempre que possível, a operação não deverá passar diretamente da normalidade para a indisponibilidade total.

Ela deverá possuir níveis intermediários que permitam:

- reduzir carga;
- limitar recursos;
- suspender funções não essenciais;
- desativar integrações problemáticas;
- priorizar Missões críticas;
- migrar para processos simplificados;
- ativar redundâncias;
- transferir responsabilidade;
- operar localmente;
- preservar a função central.

A degradação progressiva deverá ser planejada.

Sem planejamento, a redução tende a ocorrer de forma caótica, desigual e invisível.

---

## 20. O princípio da reversibilidade

Medidas de contingência deverão ser reversíveis sempre que possível.

Toda alteração temporária deverá registrar:

- estado anterior;
- alteração executada;
- responsável;
- justificativa;
- duração prevista;
- dependências;
- efeitos esperados;
- condições de reversão;
- riscos de retorno.

Alterações irreversíveis somente poderão ocorrer quando:

- forem indispensáveis;
- não existir alternativa proporcional;
- o dano da omissão for maior;
- houver autoridade suficiente;
- as consequências forem compreendidas;
- as evidências forem preservadas.

A urgência não deverá transformar decisões temporárias em mudanças permanentes sem governança.

---

## 21. O princípio da temporalidade

Toda contingência deverá possuir:

- momento de início;
- estado atual;
- prazo ou condição de revisão;
- critérios de permanência;
- critérios de escalonamento;
- critérios de redução;
- critérios de encerramento.

Poderes, permissões e exceções concedidos para responder a uma contingência deverão expirar automaticamente ou exigir renovação explícita.

Nenhuma condição extraordinária deverá tornar-se normal apenas porque permaneceu ativa por tempo suficiente.

---

## 22. O princípio da autoridade limitada

A contingência poderá exigir decisões rápidas e concentração temporária de coordenação.

Entretanto, autoridade extraordinária deverá ser:

- necessária;
- proporcional;
- específica;
- temporária;
- registrada;
- supervisionada;
- revisável;
- revogável.

A autoridade concedida deverá indicar:

- quem pode exercê-la;
- sobre qual escopo;
- para qual finalidade;
- durante qual período;
- dentro de quais limites;
- sob qual prestação de contas.

A contingência não deverá ser utilizada para consolidar poder desconectado do propósito que justificou sua ativação.

---

## 23. O princípio da autonomia responsável

Uma unidade local poderá precisar continuar operando quando estiver desconectada da coordenação central.

Essa autonomia deverá ser prevista antes da ruptura.

A operação local deverá conhecer:

- seus limites;
- suas responsabilidades;
- suas prioridades;
- seus recursos;
- suas proibições;
- seus critérios de escalonamento;
- os registros que deverá preservar;
- como reconciliar suas decisões após a reconexão.

Autonomia em contingência não significa independência absoluta.

Significa capacidade de agir dentro de limites legítimos quando a coordenação superior não estiver disponível.

---

## 24. O princípio da comunicação verdadeira

Toda comunicação de contingência deverá buscar:

- clareza;
- precisão;
- temporalidade;
- utilidade;
- proporcionalidade;
- acessibilidade;
- honestidade sobre incertezas.

A UNO não deverá:

- esconder degradações relevantes;
- declarar normalidade inexistente;
- prometer prazos sem fundamento;
- minimizar riscos para preservar aparência;
- divulgar informações sensíveis indevidamente;
- produzir pânico por falta de contextualização.

Uma comunicação adequada deverá distinguir:

- fatos confirmados;
- hipóteses;
- impactos observados;
- impactos potenciais;
- ações em andamento;
- limitações atuais;
- próxima atualização prevista.

---

## 25. O princípio da proteção contra improvisação destrutiva

Contingências exigem adaptação, mas adaptação não poderá significar ausência de método.

Improvisações poderão ser aceitas quando:

- forem necessárias;
- não houver procedimento suficiente;
- forem proporcionais;
- tiverem responsável identificado;
- forem registradas;
- forem monitoradas;
- puderem ser interrompidas;
- forem posteriormente avaliadas.

A improvisação não deverá:

- eliminar controles essenciais;
- esconder riscos;
- criar dependências permanentes não reconhecidas;
- comprometer recuperação futura;
- produzir autoridade sem limite;
- apagar evidências.

Toda improvisação operacional relevante deverá ser convertida em aprendizado.

---

## 26. Condições de ativação

Uma contingência poderá ser ativada quando houver evidência de que:

- uma função essencial está indisponível;
- a capacidade disponível é insuficiente;
- um limite de segurança foi ultrapassado;
- a confiabilidade deixou de ser aceitável;
- uma dependência crítica foi perdida;
- existe risco relevante de propagação;
- o contexto normal não pode ser confirmado;
- a autoridade ou identidade tornou-se incerta;
- a operação normal poderá causar dano;
- a recuperação exige coordenação especial;
- múltiplos incidentes passaram a interagir;
- o impacto excedeu a autonomia local;
- uma ameaça iminente exige preparação.

A ativação não deverá depender exclusivamente de um indicador técnico.

Ela poderá resultar da combinação de:

- sinais técnicos;
- informações humanas;
- eventos externos;
- percepção territorial;
- análise institucional;
- alertas de parceiros;
- observações de usuários;
- inferências de agentes;
- determinações de autoridade competente.

---

## 27. Evidência mínima para ativação

A ativação deverá possuir evidência suficiente para justificar a mudança de modo operacional.

Contudo, em situações de alto risco, não será necessário aguardar certeza absoluta.

A decisão deverá considerar:

- probabilidade;
- impacto potencial;
- reversibilidade;
- urgência;
- custo de ativar;
- custo de não ativar;
- qualidade da evidência;
- capacidade de monitoramento.

Quanto maior o impacto potencial e menor a reversibilidade do dano, menor poderá ser o grau de certeza exigido para adotar medidas preventivas proporcionais.

A incerteza deverá ser registrada, não escondida.

---

## 28. Ativação automática e ativação humana

Algumas contingências poderão ser ativadas automaticamente quando condições objetivas forem satisfeitas.

Exemplos:

- saturação acima de limite definido;
- perda simultânea de redundâncias;
- falha de autenticação em escala;
- indisponibilidade de dependência crítica;
- risco de integridade de dados;
- detecção de comportamento malicioso;
- perda de comunicação entre unidades.

A ativação automática deverá:

- utilizar critérios conhecidos;
- possuir escopo limitado;
- produzir registro;
- informar responsáveis;
- permitir revisão humana;
- evitar ampliações indefinidas;
- retornar a estado seguro quando houver incerteza.

Contingências com consequências institucionais amplas deverão exigir confirmação ou supervisão humana compatível com sua gravidade.

---

## 29. Condições de não ativação

A contingência não deverá ser ativada apenas por:

- desconforto operacional;
- variação prevista;
- falha absorvida por redundância;
- indicador isolado sem relevância contextual;
- conveniência administrativa;
- tentativa de evitar compromisso ordinário;
- desejo de ampliar autoridade;
- justificativa para reduzir direitos;
- intenção de ocultar deficiência estrutural.

A não ativação também deverá ser uma decisão consciente quando sinais relevantes estiverem presentes.

Ignorar uma ameaça sem avaliação não será equivalente a decidir que a contingência não é necessária.

---

## 30. O limiar entre manutenção e contingência

A manutenção atua para preservar ou restaurar capacidades dentro da operação ordinária.

A contingência atua quando:

- a manutenção não é suficiente;
- o tempo de recuperação ordinário é incompatível com o impacto;
- múltiplas capacidades foram afetadas;
- a operação precisa mudar de modo;
- decisões de prioridade tornaram-se necessárias;
- riscos exigem coordenação ampliada;
- a continuidade essencial está ameaçada.

Uma manutenção poderá ocorrer dentro de uma contingência.

Porém, a contingência não deverá ser reduzida à atividade técnica de reparo.

Ela coordena a realidade operacional enquanto o reparo ocorre.

---

## 31. O limiar entre contingência e crise

Uma contingência poderá permanecer operacionalmente controlada.

Ela evoluirá para crise quando ameaçar significativamente:

- confiança;
- legitimidade;
- governança;
- capacidade decisória;
- cooperação;
- continuidade institucional;
- segurança coletiva;
- coordenação entre organizações.

A crise poderá existir mesmo depois de o componente técnico ter sido recuperado.

Por isso, o encerramento técnico não será necessariamente o encerramento institucional.

---

## 32. O que deverá ser conhecido antes da contingência

Toda capacidade relevante deverá declarar previamente:

- sua função essencial;
- seu responsável;
- seus usuários;
- suas dependências;
- seus limites;
- seus riscos;
- sua funcionalidade mínima segura;
- seus modos degradados;
- suas alternativas;
- seu comportamento de falha;
- seus dados essenciais;
- seu tempo tolerável de indisponibilidade;
- sua prioridade de recuperação;
- seus critérios de retorno;
- suas obrigações de comunicação.

Uma contingência não deverá começar pela descoberta completa daquilo que a operação deveria ter conhecido anteriormente.

Contudo, quando esse conhecimento estiver ausente, a própria ausência deverá ser tratada como risco e registrada para correção.

---

## 33. Preparação permanente

A preparação para contingência deverá incluir:

- inventários atualizados;
- mapas de dependência;
- responsáveis identificados;
- canais alternativos;
- contatos de emergência;
- recursos de reserva;
- procedimentos acessíveis;
- permissões previamente definidas;
- ambientes de recuperação;
- cópias de segurança;
- exercícios;
- simulações;
- testes de restauração;
- capacitação humana;
- revisão normativa;
- validação de fornecedores;
- aprendizagem acumulada.

Planos não testados serão tratados como hipóteses.

Capacidades de recuperação somente serão consideradas confiáveis quando houver evidência de que podem ser executadas nas condições previstas.

---

## 34. Dimensão humana da contingência

Pessoas não deverão ser tratadas apenas como recursos operacionais.

Uma contingência poderá produzir:

- fadiga;
- medo;
- confusão;
- pressão;
- conflito;
- sobrecarga;
- perda de atenção;
- sofrimento;
- decisões precipitadas;
- redução da capacidade cognitiva.

A arquitetura deverá prever:

- limites de jornada;
- alternância de equipes;
- apoio;
- comunicação clara;
- redução de carga;
- supervisão;
- pausas;
- substituição;
- proteção psicológica;
- acolhimento;
- registro de responsabilidades sem perseguição.

A operação não deverá preservar sistemas destruindo as pessoas que os sustentam.

---

## 35. Dimensão normativa e regulatória

A contingência não suspenderá automaticamente leis, normas, regulamentos, contratos, NRs ou obrigações institucionais.

Cada modo degradado deverá identificar:

- requisitos que permanecem integralmente aplicáveis;
- requisitos que admitem procedimentos excepcionais;
- autoridades competentes;
- deveres de notificação;
- prazos extraordinários;
- registros obrigatórios;
- limites de atuação;
- condições de encerramento.

Quando uma obrigação não puder ser cumprida, a impossibilidade deverá ser:

- reconhecida;
- justificada;
- comunicada à instância competente;
- mitigada;
- registrada;
- corrigida assim que possível.

A UNO deverá utilizar as normas como parte da engenharia da resposta, e não tentar enquadrar posteriormente uma operação improvisada.

---

## 36. Dimensão federativa e interorganizacional

Uma contingência poderá atravessar fronteiras entre:

- equipes;
- organizações;
- municípios;
- estados;
- serviços;
- fornecedores;
- parceiros;
- instituições públicas;
- comunidades.

A resposta deverá respeitar:

- autonomia legítima;
- competências;
- contratos;
- jurisdições;
- responsabilidades;
- regras de compartilhamento;
- proteção de dados;
- autoridade territorial;
- coordenação institucional.

Cooperação não significará apropriação de autoridade.

Integração não significará centralização absoluta.

Cada participante deverá saber:

- o que deve fazer;
- o que pode fazer;
- o que não pode fazer;
- a quem informar;
- quais evidências preservar;
- quando devolver a coordenação.

---

## 37. Invariantes da contingência

Independentemente da gravidade, deverão permanecer preservados:

1. a vida precede a conveniência;
2. a dignidade precede a eficiência;
3. o propósito precede a continuidade vazia;
4. a segurança precede a velocidade;
5. a legitimidade precede a concentração de poder;
6. a responsabilidade permanece atribuível;
7. a autoridade permanece limitada;
8. a evidência permanece preservada;
9. a memória não é apagada pela restauração;
10. a autonomia permanece governada;
11. a comunicação não oculta limitações relevantes;
12. a urgência não elimina proporcionalidade;
13. a operação degradada permanece temporária;
14. exceções possuem escopo e validade;
15. o retorno exige verificação;
16. toda contingência produz aprendizado.

---

## 38. Garantias fundamentais do Lote 1

A arquitetura de contingência deverá garantir que:

- nenhuma degradação relevante permaneça indefinidamente informal;
- nenhuma operação degradada seja confundida com normalidade;
- nenhuma continuidade seja mantida à custa de risco inaceitável;
- nenhuma suspensão ocorra sem finalidade compreensível;
- nenhuma autoridade extraordinária permaneça sem limite;
- nenhuma adaptação elimine desnecessariamente a recuperação;
- nenhuma pessoa seja abandonada por incapacidade operacional;
- nenhuma decisão automatizada crítica permaneça sem possibilidade de revisão;
- nenhuma contingência seja encerrada apenas porque os alertas cessaram;
- nenhuma ocorrência termine sem memória e avaliação.

---

## 39. Princípios consolidados

A Engenharia Oficial de contingência da UNO reconhece que:

1. contingência é capacidade, não apenas documento;
2. normalidade é condição verificável, não aparência;
3. disponibilidade não prova integridade;
4. falha não é sinônimo de contingência;
5. degradação deve ser percebida antes do colapso;
6. operação degradada deve ser declarada;
7. reduzir conscientemente é melhor do que prometer falsamente;
8. interromper pode ser uma forma de proteger;
9. urgência não elimina governança;
10. autonomia exige limites;
11. autoridade extraordinária deve expirar;
12. funcionalidade mínima deve ser previamente conhecida;
13. falhas devem conduzir a estados seguros;
14. medidas temporárias devem ser reversíveis;
15. pessoas não são recursos descartáveis;
16. leis e normas continuam orientando a operação;
17. comunicação deve distinguir fato, hipótese e incerteza;
18. recuperação não se limita ao reparo técnico;
19. retorno à normalidade exige validação;
20. toda contingência deverá fortalecer a capacidade futura da instituição.

---

## 40. Transição para o próximo lote

Os fundamentos estabelecidos neste lote definem por que a contingência existe, o que deve preservar e quais limites não poderá ultrapassar.

O próximo lote estabelecerá como a Plataforma UNO deverá representar e classificar:

- estados operacionais;
- níveis de degradação;
- intensidade;
- alcance;
- duração;
- criticidade;
- reversibilidade;
- previsibilidade;
- propagação;
- capacidade residual.

Essa classificação permitirá que diferentes ocorrências recebam respostas proporcionais, comparáveis e governáveis.

---

## Lote 2 — Estados, Níveis e Classificação das Contingências

---

## 41. A necessidade de representar o estado operacional

Uma contingência somente poderá ser coordenada adequadamente quando a condição da operação puder ser representada de forma:

- compreensível;
- comparável;
- atualizável;
- rastreável;
- proporcional;
- orientada à decisão.

Expressões genéricas como:

- “está instável”;
- “está lento”;
- “está com problema”;
- “parece crítico”;
- “está quase parando”;

não serão suficientes para sustentar decisões relevantes.

A UNO deverá converter sinais, observações, eventos e evidências em uma representação operacional capaz de responder:

- o que está acontecendo;
- onde está acontecendo;
- desde quando;
- quais capacidades foram afetadas;
- qual é a intensidade;
- qual é o alcance;
- quem está exposto;
- o que ainda funciona;
- por quanto tempo a condição poderá ser sustentada;
- qual é a tendência;
- quais ações são necessárias;
- qual autoridade deverá ser mobilizada.

Classificar não significa reduzir a realidade a um número.

Significa organizar a compreensão sem esconder a complexidade.

---

## 42. Estado observado, estado declarado e estado real

A arquitetura deverá distinguir três representações fundamentais.

### 42.1 Estado observado

É o estado inferido a partir dos sinais disponíveis.

Poderá ser construído por:

- telemetria;
- sensores;
- registros;
- relatos humanos;
- indicadores;
- eventos;
- agentes;
- auditorias;
- informações externas;
- comparação histórica.

O estado observado está condicionado à qualidade e à cobertura das evidências.

### 42.2 Estado declarado

É o estado formalmente reconhecido pela autoridade responsável.

A declaração produz efeitos operacionais, como:

- mudança de prioridade;
- ativação de equipes;
- restrição de funcionalidades;
- comunicação aos afetados;
- mobilização de recursos;
- alteração temporária de autoridade;
- início de procedimentos de recuperação.

### 42.3 Estado real

É a condição efetivamente existente na operação.

O estado real poderá divergir do observado e do declarado.

Poderá haver:

- degradação real ainda não detectada;
- normalidade recuperada ainda não validada;
- declaração excessiva;
- declaração insuficiente;
- dados atrasados;
- impacto oculto;
- falsa percepção de estabilidade.

A UNO deverá tratar divergências entre esses estados como risco operacional.

> Declarar normalidade não produz normalidade.  
> Declarar contingência não define sozinho a extensão da contingência.

---

## 43. Estados operacionais fundamentais

A Plataforma UNO deverá reconhecer, no mínimo, os seguintes estados.

### 43.1 Estado Normal

A operação funciona dentro dos limites estabelecidos de capacidade, disponibilidade, segurança, confiabilidade e governança.

Nesse estado:

- compromissos estão sendo atendidos;
- dependências essenciais estão disponíveis;
- riscos permanecem dentro dos limites;
- variações são absorvidas;
- não há necessidade de medidas extraordinárias.

### 43.2 Estado de Atenção

Existem sinais relevantes de alteração, ameaça ou deterioração, mas a operação normal ainda pode ser sustentada.

Nesse estado:

- a vigilância é ampliada;
- sinais são correlacionados;
- responsáveis são informados;
- recursos preventivos podem ser preparados;
- ainda não existe necessidade de reduzir formalmente a operação.

### 43.3 Estado de Alerta

Há evidência consistente de que uma ou mais propriedades operacionais estão ameaçadas ou parcialmente comprometidas.

Nesse estado:

- a análise de impacto é aprofundada;
- dependências críticas são verificadas;
- alternativas são preparadas;
- equipes podem ser mobilizadas;
- restrições preventivas podem ser aplicadas;
- a ativação de contingência torna-se provável.

### 43.4 Estado de Contingência

A operação normal não pode mais ser integralmente preservada e medidas coordenadas passam a ser necessárias.

Nesse estado:

- a contingência é formalmente declarada;
- prioridades são reorganizadas;
- modos alternativos podem ser ativados;
- recursos são redistribuídos;
- limitações tornam-se explícitas;
- recuperação e contenção passam a ser coordenadas.

### 43.5 Estado de Operação Degradada

A operação continua parcialmente, dentro de limites extraordinários e previamente reconhecidos.

Nesse estado:

- funções essenciais são priorizadas;
- funções secundárias podem ser reduzidas;
- determinadas ações podem exigir confirmação adicional;
- níveis de serviço são temporariamente alterados;
- controles compensatórios são aplicados;
- a condição é monitorada continuamente.

### 43.6 Estado de Operação Mínima

A UNO preserva apenas o conjunto mínimo de capacidades necessárias para proteger pessoas, propósito, identidade, comunicação, segurança, evidências e recuperação.

Nesse estado:

- a capacidade residual é severamente limitada;
- ações são altamente priorizadas;
- processos simplificados podem substituir fluxos normais;
- a supervisão é ampliada;
- atividades não essenciais são suspensas.

### 43.7 Estado Seguro

A operação ativa somente as funções necessárias para impedir ampliação de danos e preservar a possibilidade de recuperação.

O estado seguro poderá envolver:

- bloqueio de execução;
- isolamento;
- retenção de dados;
- congelamento de alterações;
- manutenção de comunicação mínima;
- preservação de registros;
- desligamento controlado.

Estado seguro não significa necessariamente disponibilidade para o usuário.

Significa ausência de exposição inaceitável produzida pela própria operação.

### 43.8 Estado de Interrupção

Uma ou mais capacidades deixam de operar.

A interrupção poderá ser:

- seletiva;
- parcial;
- territorial;
- funcional;
- integral;
- preventiva;
- emergencial.

### 43.9 Estado de Recuperação

As capacidades afetadas estão sendo restauradas, reconstruídas, substituídas ou reconciliadas.

Nesse estado:

- mudanças são controladas;
- dependências são revalidadas;
- dados são reconciliados;
- funções retornam progressivamente;
- riscos de regressão permanecem monitorados.

### 43.10 Estado de Validação

A capacidade aparentemente recuperada é submetida a verificações antes de ser novamente considerada normal.

Nesse estado, deverão ser avaliados:

- integridade;
- funcionalidade;
- segurança;
- desempenho;
- confiabilidade;
- consistência;
- rastreabilidade;
- sincronização;
- impacto residual.

### 43.11 Estado de Normalização

A operação retorna progressivamente aos parâmetros ordinários.

Normalização não significa encerramento automático.

Ainda poderão existir:

- pendências;
- monitoramento ampliado;
- usuários afetados;
- dados em reconciliação;
- recursos temporários;
- riscos residuais;
- ações corretivas.

### 43.12 Estado de Encerramento

A contingência é formalmente encerrada depois que:

- a operação foi suficientemente estabilizada;
- os riscos residuais foram aceitos;
- as responsabilidades foram registradas;
- as evidências foram preservadas;
- as pendências receberam destinação;
- a análise posterior foi iniciada.

---

## 44. Estados não necessariamente lineares

Os estados operacionais não deverão ser interpretados como sequência obrigatoriamente linear.

Uma operação poderá:

- retornar de Alerta para Normal;
- avançar de Atenção diretamente para Contingência;
- sair de Recuperação e retornar à Operação Degradada;
- permanecer em Operação Mínima enquanto outra unidade normaliza;
- entrar novamente em Interrupção durante a validação;
- operar com estados diferentes em capacidades distintas.

A arquitetura deverá representar simultaneamente:

- estado global;
- estado por organização;
- estado por território;
- estado por Missão;
- estado por serviço;
- estado por capacidade;
- estado por dependência;
- estado por público afetado.

Um estado global não deverá apagar diferenças locais.

---

## 45. Estado global e estados locais

A UNO poderá permanecer globalmente operacional enquanto uma região estiver em contingência.

Da mesma forma, uma organização poderá permanecer normal enquanto uma capacidade federada estiver degradada.

A representação deverá evitar dois erros:

### 45.1 Generalização excessiva

Uma falha localizada não deverá fazer todo o ecossistema parecer indisponível.

### 45.2 Minimização excessiva

A normalidade global não deverá ocultar o sofrimento ou a interrupção real de uma população, território ou organização.

O estado global deverá ser composto a partir dos estados locais, mas não deverá substituí-los.

---

## 46. Níveis de severidade

Cada contingência deverá possuir um nível de severidade.

A severidade expressará a combinação entre:

- impacto;
- urgência;
- risco;
- alcance;
- capacidade residual;
- reversibilidade;
- tendência;
- dependências;
- vulnerabilidade dos afetados.

A UNO deverá adotar, no mínimo, cinco níveis.

### Nível 0 — Condição normal

Não existe contingência ativa.

Há funcionamento dentro dos limites previstos.

### Nível 1 — Degradação leve

Características:

- impacto limitado;
- capacidade essencial preservada;
- baixo risco de propagação;
- correção possível por meios ordinários;
- pouca ou nenhuma alteração percebida pelo usuário;
- autonomia local suficiente.

Resposta esperada:

- monitorar;
- registrar;
- corrigir;
- verificar tendência;
- informar responsáveis locais.

### Nível 2 — Degradação relevante

Características:

- redução perceptível de qualidade ou capacidade;
- comprometimento de funções secundárias;
- necessidade de priorização;
- possibilidade de propagação;
- dependência relevante afetada;
- necessidade de coordenação ampliada.

Resposta esperada:

- declarar contingência no escopo afetado;
- aplicar modo degradado;
- mobilizar capacidades;
- comunicar afetados;
- preparar alternativas;
- estabelecer revisão frequente.

### Nível 3 — Contingência crítica

Características:

- função essencial ameaçada ou parcialmente indisponível;
- impacto significativo sobre pessoas ou Missões;
- capacidade local insuficiente;
- múltiplas dependências afetadas;
- risco elevado de ampliação;
- necessidade de autoridade extraordinária limitada.

Resposta esperada:

- ativar coordenação tática ou institucional;
- mobilizar especialistas;
- reduzir escopo operacional;
- preservar funcionalidade mínima;
- estabelecer comunicação contínua;
- iniciar recuperação prioritária.

### Nível 4 — Emergência sistêmica

Características:

- múltiplas funções essenciais comprometidas;
- impacto territorial, organizacional ou institucional amplo;
- capacidade residual severamente reduzida;
- risco relevante à vida, à segurança, à legitimidade ou à continuidade;
- necessidade de cooperação externa;
- decisões de alta consequência.

Resposta esperada:

- ativar governança extraordinária;
- priorizar proteção de pessoas;
- operar em modo mínimo ou seguro;
- coordenar múltiplas organizações;
- mobilizar recursos extraordinários;
- manter prestação de contas intensificada.

### Nível 5 — Ruptura ou desastre

Características:

- perda extensa de capacidades;
- interrupção prolongada;
- insuficiência das estruturas ordinárias e extraordinárias;
- danos amplos;
- dependências fundamentais indisponíveis;
- necessidade de reconstrução;
- recuperação de longo prazo.

Resposta esperada:

- preservar vida, identidade, evidência e comunicação;
- solicitar apoio externo;
- ativar reconstrução;
- estabelecer coordenação interinstitucional;
- redefinir prioridades;
- preparar recuperação prolongada;
- preservar continuidade institucional mínima.

---

## 47. Severidade não é apenas volume

Uma ocorrência que afeta poucas pessoas poderá possuir severidade elevada quando envolver:

- risco à vida;
- população vulnerável;
- direito fundamental;
- dano irreversível;
- perda de identidade;
- decisão ilegítima;
- exposição de dados sensíveis;
- atividade crítica;
- ausência de alternativa;
- possibilidade de propagação grave.

Uma ocorrência de grande volume poderá possuir severidade moderada quando:

- o impacto for pequeno;
- houver redundância;
- existir alternativa segura;
- a recuperação for rápida;
- a função afetada não for essencial.

A severidade deverá considerar significado, e não somente quantidade.

---

## 48. Criticidade

Criticidade representa a importância da capacidade afetada para a preservação do propósito e das funções essenciais.

Uma capacidade poderá ser classificada como:

### 48.1 Não essencial

Sua indisponibilidade não compromete diretamente funções fundamentais durante o horizonte analisado.

### 48.2 Relevante

Sua perda reduz qualidade, eficiência, cobertura ou capacidade de coordenação.

### 48.3 Essencial

Sua indisponibilidade compromete funções necessárias à continuidade de uma Missão, serviço ou organização.

### 48.4 Crítica

Sua perda poderá produzir dano grave, interrupção ampla, risco significativo ou incapacidade de preservar propriedades fundamentais.

### 48.5 Vital

Sua indisponibilidade ameaça diretamente:

- vida;
- integridade;
- segurança;
- identidade;
- legitimidade;
- continuidade institucional;
- capacidade de recuperação.

A criticidade deverá ser contextual.

Uma capacidade não será necessariamente crítica em todos os momentos, territórios ou Missões.

---

## 49. Alcance

O alcance identifica a extensão espacial, funcional, organizacional ou populacional da contingência.

Poderá ser:

- individual;
- familiar;
- comunitário;
- local;
- municipal;
- regional;
- estadual;
- nacional;
- federado;
- ecossistêmico;
- transnacional.

Também poderá ser classificado por:

- organização;
- equipe;
- unidade;
- serviço;
- capacidade;
- integração;
- público;
- território;
- cadeia de fornecimento;
- domínio institucional.

A classificação de alcance deverá evitar que a mesma ocorrência seja contada como múltiplas contingências sem relação.

Também deverá evitar que impactos diferentes sejam artificialmente agrupados.

---

## 50. Intensidade

Intensidade representa o grau de perda ou comprometimento da capacidade.

Poderá ser classificada como:

- imperceptível;
- leve;
- moderada;
- elevada;
- severa;
- total.

A intensidade poderá considerar:

- percentual de capacidade perdida;
- aumento de latência;
- redução de cobertura;
- perda de precisão;
- indisponibilidade de funções;
- aumento de risco;
- necessidade de intervenção;
- deterioração de confiança.

A intensidade não deverá ser medida por uma única variável quando a capacidade possuir múltiplas dimensões.

---

## 51. Capacidade residual

Capacidade residual é aquilo que ainda permanece utilizável durante a degradação.

Deverá ser representada em termos de:

- volume suportável;
- funcionalidades disponíveis;
- territórios atendidos;
- públicos alcançados;
- canais operacionais;
- equipes disponíveis;
- recursos restantes;
- autonomia temporal;
- confiabilidade residual;
- segurança preservada.

Conhecer apenas o que foi perdido não será suficiente.

A contingência precisa compreender o que ainda pode ser realizado.

A capacidade residual orientará:

- priorização;
- redução de escopo;
- distribuição de recursos;
- comunicação;
- estimativa de sustentação;
- ativação de alternativas.

---

## 52. Duração

A contingência deverá ser classificada quanto à duração:

- momentânea;
- curta;
- intermediária;
- prolongada;
- indeterminada;
- permanente.

A duração poderá ser:

- observada;
- estimada;
- contratualmente prevista;
- tecnicamente calculada;
- desconhecida.

Toda estimativa deverá indicar:

- base utilizada;
- nível de confiança;
- dependências;
- possibilidade de revisão;
- próximo momento de atualização.

Uma contingência de baixa intensidade poderá tornar-se crítica pela duração.

---

## 53. Temporalidade do impacto

O impacto poderá ser:

### 53.1 Imediato

Manifesta-se no momento da ocorrência.

### 53.2 Retardado

Surge depois de determinado intervalo.

### 53.3 Acumulativo

Cresce à medida que a condição persiste.

### 53.4 Recorrente

Retorna periodicamente.

### 53.5 Residual

Permanece mesmo após a recuperação principal.

### 53.6 Geracional ou institucional

Produz efeitos de longa duração sobre memória, confiança, patrimônio, pessoas ou organizações.

A classificação temporal deverá orientar o acompanhamento posterior.

---

## 54. Previsibilidade

Uma contingência poderá ser:

- prevista;
- previsível;
- parcialmente previsível;
- emergente;
- inesperada;
- desconhecida.

### Prevista

O evento, seu período ou seu efeito era conhecido.

### Previsível

Havia sinais suficientes para antecipá-lo.

### Parcialmente previsível

A possibilidade era conhecida, mas alcance ou intensidade eram incertos.

### Emergente

Resultou da interação de fatores que isoladamente não indicavam ruptura.

### Inesperada

Não havia evidência razoável disponível para antecipação.

### Desconhecida

A origem ainda não foi compreendida.

A classificação de previsibilidade deverá apoiar aprendizado e responsabilização sem pressupor culpa automática.

---

## 55. Reversibilidade

Uma condição poderá ser:

- plenamente reversível;
- reversível com custo;
- parcialmente reversível;
- reversível dentro de janela temporal;
- irreversível.

A reversibilidade deverá considerar:

- dados;
- infraestrutura;
- pessoas;
- confiança;
- direitos;
- ambiente;
- contratos;
- memória;
- capacidade institucional.

Uma restauração técnica poderá ser plenamente reversível enquanto o dano humano ou reputacional permanece.

A UNO deverá representar essas dimensões separadamente.

---

## 56. Velocidade de propagação

A contingência poderá propagar-se de forma:

- instantânea;
- rápida;
- gradual;
- lenta;
- intermitente;
- desconhecida.

A velocidade deverá ser comparada com:

- tempo de detecção;
- tempo de decisão;
- tempo de mobilização;
- tempo de contenção;
- tempo de recuperação.

Quando a propagação for mais rápida do que a resposta, a arquitetura deverá privilegiar:

- isolamento automático;
- limites preventivos;
- redundância;
- autonomia local;
- falha segura;
- comunicação imediata.

---

## 57. Direção e forma de propagação

A propagação poderá ocorrer:

- de uma dependência para seus consumidores;
- de uma unidade local para estruturas superiores;
- de uma decisão central para unidades locais;
- entre organizações;
- entre territórios;
- entre dados, serviços e decisões;
- entre o mundo digital e o físico;
- entre percepção, confiança e comportamento.

A forma poderá ser:

- linear;
- ramificada;
- circular;
- em cascata;
- recursiva;
- convergente;
- sistêmica.

Ciclos de dependência poderão amplificar degradações.

A classificação deverá indicar os caminhos prováveis e observados do impacto.

---

## 58. Origem

A origem poderá ser classificada como:

- interna;
- externa;
- compartilhada;
- federada;
- territorial;
- ambiental;
- humana;
- tecnológica;
- organizacional;
- institucional;
- regulatória;
- econômica;
- híbrida;
- desconhecida.

Origem não deverá ser confundida com responsabilidade.

Uma ocorrência poderá ter origem externa e ser agravada por fragilidade interna.

Também poderá ter origem interna e produzir impactos fora da organização.

---

## 59. Natureza da contingência

A contingência poderá possuir uma ou múltiplas naturezas.

### 59.1 Técnica

Relacionada a hardware, software, rede, infraestrutura ou integração.

### 59.2 Operacional

Relacionada à execução, coordenação, capacidade ou fluxo de trabalho.

### 59.3 Humana

Relacionada à indisponibilidade, fadiga, erro, conflito, insuficiência ou proteção de pessoas.

### 59.4 Cognitiva

Relacionada à perda de compreensão, contexto, conhecimento, discernimento ou qualidade decisória.

### 59.5 Informacional

Relacionada à ausência, corrupção, inconsistência, atraso ou excesso de informação.

### 59.6 Organizacional

Relacionada à estrutura, papéis, recursos ou coordenação de uma organização.

### 59.7 Institucional

Relacionada à legitimidade, governança, confiança, autoridade ou continuidade institucional.

### 59.8 Jurídica e regulatória

Relacionada à impossibilidade, incerteza ou mudança nas condições legais de operação.

### 59.9 Econômica e financeira

Relacionada a recursos, liquidez, pagamentos, contratos ou sustentabilidade econômica.

### 59.10 Física e territorial

Relacionada a instalações, acessos, transporte, energia, território ou presença física.

### 59.11 Ambiental

Relacionada a clima, desastre natural, contaminação ou condição ecológica.

### 59.12 Segurança

Relacionada a ameaça, ataque, fraude, exposição, violência ou comprometimento de proteção.

### 59.13 Reputacional

Relacionada à perda de confiança, credibilidade ou legitimidade percebida.

### 59.14 Federativa

Relacionada à ruptura de coordenação entre organizações ou níveis territoriais.

### 59.15 Híbrida

Combina duas ou mais naturezas de forma inseparável.

---

## 60. Conhecimento sobre a causa

A causa poderá estar:

- confirmada;
- altamente provável;
- provável;
- suspeita;
- contestada;
- desconhecida;
- composta por múltiplos fatores.

A ausência de causa confirmada não deverá impedir medidas de proteção.

Entretanto, hipóteses não deverão ser comunicadas como fatos.

Cada hipótese deverá registrar:

- evidências favoráveis;
- evidências contrárias;
- nível de confiança;
- responsável pela análise;
- consequência operacional;
- próximo passo de verificação.

---

## 61. Controlabilidade

Uma contingência poderá ser:

- diretamente controlável;
- parcialmente controlável;
- influenciável;
- dependente de terceiros;
- externamente controlada;
- fora de controle conhecido.

A classificação deverá identificar:

- quais variáveis podem ser alteradas;
- quais apenas podem ser observadas;
- quais exigem cooperação;
- quais não podem ser modificadas;
- quais medidas reduzem exposição.

Reconhecer falta de controle não significa abandonar responsabilidade.

Significa mudar o foco de controle da causa para:

- proteção;
- adaptação;
- comunicação;
- redução de impacto;
- recuperação;
- preparação.

---

## 62. Substituibilidade

A capacidade afetada poderá ser:

- diretamente substituível;
- substituível com redução;
- substituível por processo manual;
- substituível por outra organização;
- substituível por tempo limitado;
- insubstituível.

A substituição deverá considerar:

- equivalência;
- segurança;
- competência;
- autoridade;
- custo;
- capacidade;
- prazo;
- compatibilidade;
- evidência;
- reversibilidade.

Uma alternativa disponível não será automaticamente adequada.

---

## 63. Vulnerabilidade dos afetados

A severidade deverá considerar a condição de quem recebe o impacto.

Poderão existir vulnerabilidades:

- físicas;
- econômicas;
- sociais;
- territoriais;
- digitais;
- informacionais;
- cognitivas;
- etárias;
- institucionais;
- circunstanciais.

A mesma indisponibilidade poderá produzir consequências radicalmente diferentes para públicos distintos.

A classificação deverá impedir que médias gerais ocultem impactos desproporcionais.

---

## 64. Densidade de dependências

Uma contingência poderá afetar uma capacidade:

- isolada;
- pouco conectada;
- moderadamente conectada;
- altamente conectada;
- estruturalmente central.

Quanto maior a densidade e a centralidade da dependência, maior a possibilidade de propagação.

A classificação deverá utilizar o mapa de impacto estabelecido no arquivo 017.

---

## 65. Concentração e ponto único de falha

A contingência deverá indicar se a capacidade afetada constitui:

- ponto único de falha;
- concentração de autoridade;
- concentração de dados;
- concentração de conhecimento;
- concentração de infraestrutura;
- concentração territorial;
- concentração de fornecedor;
- concentração financeira.

A perda de uma capacidade concentrada poderá exigir resposta superior ao impacto inicialmente observado.

---

## 66. Confiabilidade da classificação

Toda classificação deverá possuir nível de confiança:

- confirmado;
- alto;
- moderado;
- baixo;
- insuficiente.

O nível deverá considerar:

- quantidade de evidências;
- qualidade;
- atualidade;
- independência das fontes;
- coerência;
- cobertura;
- possibilidade de manipulação;
- concordância entre observações.

Decisões poderão ser tomadas com baixa confiança quando o risco justificar ação preventiva.

Nesse caso, deverão ser mais:

- reversíveis;
- limitadas;
- monitoradas;
- revisadas.

---

## 67. Atualidade da classificação

Toda classificação deverá registrar:

- momento da observação;
- momento da análise;
- momento da declaração;
- validade;
- próxima revisão;
- eventos que exigem atualização imediata.

Uma classificação correta no passado poderá tornar-se perigosa quando utilizada fora de sua validade.

---

## 68. Perfil mínimo de uma contingência

Toda contingência formal deverá possuir, no mínimo:

- identificador único;
- título;
- descrição;
- estado;
- nível de severidade;
- criticidade;
- alcance;
- intensidade;
- capacidade residual;
- natureza;
- origem conhecida ou presumida;
- causa conhecida ou presumida;
- início observado;
- início declarado;
- duração estimada;
- tendência;
- velocidade de propagação;
- reversibilidade;
- controlabilidade;
- substituibilidade;
- dependências afetadas;
- públicos afetados;
- responsáveis;
- autoridade declaradora;
- nível de confiança;
- próxima revisão;
- ações em andamento;
- critérios de escalonamento;
- critérios de recuperação;
- evidências relacionadas.

---

## 69. Tendência operacional

A contingência deverá ser classificada quanto à tendência:

- melhorando;
- estável;
- oscilando;
- deteriorando;
- acelerando;
- desconhecida.

A tendência deverá resultar de comparação entre estados ao longo do tempo.

Um estado severo em melhoria poderá exigir resposta diferente de um estado moderado que se deteriora rapidamente.

---

## 70. Matriz de classificação

A classificação não deverá depender de uma soma cega de pontos.

Entretanto, uma matriz poderá apoiar consistência.

| Dimensão | Pergunta central |
|---|---|
| Criticidade | O que é ameaçado se esta capacidade falhar? |
| Intensidade | Quanto da capacidade foi perdido? |
| Alcance | Quem, onde e quantos foram afetados? |
| Urgência | Quanto tempo existe antes do agravamento? |
| Duração | Por quanto tempo a condição poderá persistir? |
| Propagação | O impacto pode alcançar outras capacidades? |
| Capacidade residual | O que ainda pode operar com segurança? |
| Reversibilidade | O dano pode ser desfeito? |
| Vulnerabilidade | Quem receberá o impacto mais grave? |
| Controlabilidade | Quanto da condição pode ser alterado? |
| Substituibilidade | Existe alternativa legítima? |
| Confiança | Quanto se sabe sobre a situação? |

A matriz deverá apoiar o discernimento, não substituí-lo.

---

## 71. Reclassificação

Toda contingência deverá ser reclassificada quando ocorrer:

- ampliação ou redução de impacto;
- mudança de tendência;
- nova evidência;
- perda de dependência;
- recuperação parcial;
- alteração territorial;
- mudança de público afetado;
- superação de limite temporal;
- falha de medida compensatória;
- surgimento de risco adicional;
- mudança normativa;
- alteração de autoridade.

A reclassificação deverá registrar:

- estado anterior;
- estado novo;
- justificativa;
- responsável;
- evidências;
- efeitos produzidos.

---

## 72. Escalonamento e desescalonamento

Escalonar significa elevar o nível de resposta porque a condição excedeu ou poderá exceder a capacidade atual.

Desescalonar significa reduzir o nível de resposta porque:

- o impacto diminuiu;
- a capacidade foi restaurada;
- a propagação foi contida;
- riscos foram reduzidos;
- a coordenação extraordinária deixou de ser necessária.

Desescalonar não significa encerrar.

A contingência poderá continuar ativa em nível menor.

O desescalonamento deverá ser tão consciente quanto o escalonamento.

---

## 73. Conflitos de classificação

Diferentes pessoas, agentes ou organizações poderão classificar a mesma ocorrência de maneiras distintas.

O conflito deverá ser resolvido por:

- comparação de evidências;
- explicitação de critérios;
- consideração das perspectivas locais;
- análise de vulnerabilidades;
- autoridade competente;
- registro da divergência;
- adoção preventiva do nível mais protetivo quando o risco justificar.

A decisão final não deverá apagar opiniões técnicas divergentes relevantes.

---

## 74. Classificação assistida por inteligência artificial

Agentes de IA poderão apoiar:

- correlação de sinais;
- detecção de padrões;
- comparação histórica;
- estimativa de propagação;
- identificação de dependências;
- sugestão de severidade;
- previsão de capacidade residual;
- elaboração de cenários;
- acompanhamento de tendência.

A IA não deverá:

- declarar sozinha contingências institucionais de alta consequência;
- esconder incertezas;
- substituir autoridade legítima;
- produzir classificação sem evidência acessível;
- reduzir pessoas a pontuações;
- manter decisões sem revisão.

Toda recomendação deverá apresentar:

- fundamentos;
- evidências;
- confiança;
- limitações;
- alternativas;
- consequências previstas.

---

## 75. Visibilidade proporcional

Nem toda informação deverá ser apresentada da mesma forma a todos.

A classificação deverá produzir visões adequadas para:

- público;
- usuários afetados;
- operadores;
- coordenadores;
- especialistas;
- curadores;
- organizações parceiras;
- autoridades;
- auditoria.

A proporcionalidade não deverá ser usada para ocultar informação necessária.

Informações sensíveis deverão ser protegidas sem eliminar transparência sobre:

- existência da contingência;
- impacto;
- limitações;
- medidas adotadas;
- direitos dos afetados;
- expectativa de atualização.

---

## 76. Antipadrões de classificação

A UNO deverá evitar:

### 76.1 Classificação por conveniência

Reduzir severidade para evitar comunicação, responsabilidade ou mobilização.

### 76.2 Classificação por medo

Elevar severidade sem evidência suficiente apenas para transferir responsabilidade.

### 76.3 Classificação estática

Manter o mesmo nível apesar da mudança do contexto.

### 76.4 Classificação centralista

Ignorar evidências locais porque o estado global parece normal.

### 76.5 Classificação exclusivamente técnica

Desconsiderar impactos humanos, jurídicos, territoriais e institucionais.

### 76.6 Classificação exclusivamente quantitativa

Ignorar significado, vulnerabilidade e irreversibilidade.

### 76.7 Classificação opaca

Produzir nível sem explicar critérios e evidências.

### 76.8 Classificação automática irrevogável

Permitir que um algoritmo determine consequências sem revisão.

### 76.9 Normalidade presumida

Tratar ausência de dados como prova de ausência de problema.

### 76.10 Encerramento por silêncio

Considerar a contingência resolvida apenas porque deixaram de chegar alertas.

---

## 77. Invariantes da classificação

Toda classificação deverá preservar:

1. contexto;
2. temporalidade;
3. evidência;
4. atribuição;
5. proporcionalidade;
6. revisabilidade;
7. distinção entre fato e hipótese;
8. visibilidade dos impactos humanos;
9. representação da capacidade residual;
10. possibilidade de divergência fundamentada;
11. rastreabilidade das mudanças;
12. vínculo com ações operacionais.

---

## 78. Garantias do Lote 2

A Plataforma UNO deverá garantir que:

- todo estado declarado possua responsável;
- todo nível possua critérios;
- toda severidade possa ser revisada;
- toda classificação possua validade temporal;
- todo impacto local relevante permaneça visível;
- toda incerteza seja registrada;
- toda reclassificação preserve o histórico;
- todo escalonamento produza efeitos definidos;
- todo desescalonamento seja validado;
- nenhuma pontuação substitua o discernimento;
- nenhuma normalidade seja presumida pela ausência de sinais;
- nenhuma recuperação seja declarada apenas pelo retorno técnico.

---

## 79. Princípios consolidados

A Engenharia Oficial reconhece que:

1. estado observado não é necessariamente estado real;
2. estado declarado produz responsabilidade;
3. estados podem coexistir em diferentes escopos;
4. a severidade depende de significado, não apenas de volume;
5. criticidade é contextual;
6. duração pode transformar degradação leve em contingência grave;
7. capacidade residual orienta continuidade;
8. vulnerabilidade altera a avaliação de impacto;
9. origem não é sinônimo de responsabilidade;
10. causa desconhecida não impede proteção;
11. classificação precisa possuir confiança e validade;
12. tendência pode ser mais importante do que fotografia isolada;
13. escalonamento deve reconhecer limites;
14. desescalonamento não significa encerramento;
15. divergências fundamentadas devem ser preservadas;
16. inteligência artificial apoia, mas não monopoliza o julgamento;
17. todo estado precisa orientar uma resposta;
18. toda resposta precisa permanecer rastreável.

---

## 80. Transição para o próximo lote

Os estados e classificações definidos neste lote permitem reconhecer a gravidade, o alcance, a tendência e a capacidade residual de uma contingência.

O próximo lote estabelecerá os modos concretos através dos quais a UNO poderá continuar operando sob condições adversas.

Serão definidos:

- redução controlada;
- funcionalidade mínima;
- modo seguro;
- modo manual;
- modo local;
- modo isolado;
- modo federado;
- substituição temporária;
- operação por filas;
- restrição de funcionalidades;
- priorização de Missões;
- reconciliação posterior.

A classificação informa a condição.

O modo degradado determina como agir dentro dela.

---

## Lote 3 — Modos de Operação Degradada

---

## 81. O modo operacional como resposta arquitetural

Um modo operacional é uma configuração deliberada da operação que determina:

- quais capacidades permanecerão ativas;
- quais capacidades serão reduzidas;
- quais capacidades serão substituídas;
- quais capacidades serão suspensas;
- quais prioridades serão aplicadas;
- quais autoridades poderão agir;
- quais controles permanecerão obrigatórios;
- quais controles compensatórios serão ativados;
- quais limites não poderão ser ultrapassados;
- como a recuperação deverá ocorrer.

A classificação estabelecida no lote anterior descreve a condição da contingência.

O modo operacional define como a UNO deverá funcionar dentro dessa condição.

> Reconhecer a degradação sem alterar conscientemente a forma de operar permite que a falha continue comandando a organização.

A UNO deverá responder à realidade por meio de modos previamente concebidos, contextualmente selecionados e continuamente avaliados.

---

## 82. Propriedades de todo modo degradado

Todo modo degradado deverá possuir:

- identificador;
- nome;
- propósito;
- escopo;
- condição de ativação;
- autoridade ativadora;
- capacidades preservadas;
- capacidades reduzidas;
- capacidades suspensas;
- dependências obrigatórias;
- dependências alternativas;
- capacidade residual esperada;
- limites operacionais;
- riscos conhecidos;
- controles compensatórios;
- duração máxima ou condição de revisão;
- critérios de escalonamento;
- critérios de recuperação;
- critérios de encerramento;
- plano de reconciliação;
- responsáveis;
- evidências produzidas.

Um modo degradado não deverá ser apenas uma descrição abstrata.

Ele deverá ser executável, observável e verificável.

---

## 83. Seleção do modo operacional

A seleção deverá considerar:

- natureza da contingência;
- severidade;
- criticidade;
- alcance;
- capacidade residual;
- dependências disponíveis;
- urgência;
- duração estimada;
- público afetado;
- vulnerabilidades;
- autoridade presente;
- recursos disponíveis;
- restrições normativas;
- possibilidade de substituição;
- capacidade de recuperação.

O mesmo modo não será adequado a todas as contingências.

Uma indisponibilidade de conectividade poderá exigir operação local.

Uma perda de confiabilidade de dados poderá exigir congelamento e validação.

Uma saturação poderá exigir priorização e redução de carga.

Uma ameaça de segurança poderá exigir isolamento.

Uma perda de automação poderá exigir operação manual.

---

## 84. Composição de modos

Uma contingência poderá exigir mais de um modo simultaneamente.

Exemplo:

- uma unidade territorial opera localmente;
- determinada capacidade passa ao modo manual;
- integrações externas são isoladas;
- Missões não essenciais entram em espera;
- a comunicação permanece em modo mínimo;
- a recuperação ocorre em ambiente separado.

A composição deverá verificar compatibilidade.

Dois modos não poderão ser combinados quando:

- produzirem autoridades conflitantes;
- exigirem estados incompatíveis;
- comprometerem as mesmas dependências;
- criarem risco superior ao tolerado;
- impedirem reconciliação;
- violarem requisitos normativos.

Toda composição deverá possuir uma visão consolidada dos efeitos.

---

## 85. Modo de redução controlada

O modo de redução controlada mantém a operação ativa com capacidade, cobertura ou funcionalidade reduzidas.

Poderá reduzir:

- volume processado;
- quantidade de usuários simultâneos;
- horários de atendimento;
- territórios atendidos;
- canais disponíveis;
- frequência de atualização;
- profundidade de análise;
- funcionalidades secundárias;
- personalizações;
- integrações não essenciais;
- relatórios não prioritários.

A redução deverá preservar:

- segurança;
- identidade;
- autoridade;
- rastreabilidade;
- integridade;
- comunicação;
- finalidade essencial.

O modo deverá informar claramente:

- o que permanece disponível;
- o que foi reduzido;
- quem será afetado;
- qual é a expectativa de atendimento;
- quando ocorrerá nova revisão.

---

## 86. Redução por funcionalidade

A redução por funcionalidade suspende recursos complementares para preservar o núcleo do serviço.

Exemplos:

- manter solicitações, mas suspender personalizações;
- preservar acompanhamento, mas reduzir relatórios avançados;
- manter comunicação crítica, mas suspender notificações promocionais;
- preservar registros, mas adiar análises não urgentes;
- manter operações essenciais, mas suspender experimentos;
- preservar autenticação, mas restringir alterações cadastrais complexas.

A redução por funcionalidade deverá respeitar dependências ocultas.

Uma função aparentemente secundária poderá sustentar:

- segurança;
- auditoria;
- consentimento;
- acessibilidade;
- prestação de contas;
- recuperação.

Nenhuma função deverá ser suspensa apenas por aparência de baixa importância.

---

## 87. Redução por capacidade

A redução por capacidade limita o volume ou a velocidade da operação para impedir saturação e colapso.

Poderá aplicar:

- limites de requisição;
- filas;
- cotas;
- controle de concorrência;
- redução de frequência;
- processamento em lotes;
- janelas de atendimento;
- limitação territorial;
- limitação por prioridade;
- distribuição entre recursos alternativos.

Os limites deverão ser:

- explícitos;
- mensuráveis;
- monitorados;
- temporários;
- revisáveis;
- equitativos.

Quando necessário, usuários deverão receber informação sobre:

- posição na fila;
- prioridade aplicada;
- prazo estimado;
- alternativas disponíveis;
- motivo da restrição.

---

## 88. Modo de funcionalidade mínima segura

O modo de funcionalidade mínima segura preserva apenas as funções indispensáveis para que uma capacidade continue produzindo valor legítimo sem gerar risco inaceitável.

Deverá manter, conforme o contexto:

- identificação;
- autenticação;
- autorização;
- registro;
- recebimento de solicitações críticas;
- comunicação essencial;
- proteção de dados;
- confirmação de execução;
- encaminhamento;
- preservação de evidências;
- possibilidade de recuperação.

Deverá suspender:

- funcionalidades de conveniência;
- automações não verificáveis;
- decisões de alta consequência sem evidência suficiente;
- integrações instáveis;
- operações que ultrapassem a capacidade residual;
- ações irreversíveis desnecessárias.

A funcionalidade mínima segura deverá ser definida antes da contingência sempre que possível.

---

## 89. Modo seguro

O modo seguro reduz a operação ao estado que oferece menor risco aceitável diante da perda de confiança, contexto ou controle.

Poderá envolver:

- bloqueio de novas execuções;
- preservação de sessões existentes;
- congelamento de alterações;
- isolamento de componentes;
- revogação de permissões temporárias;
- redução de privilégios;
- interrupção de integrações;
- preservação do último estado confiável;
- coleta ampliada de evidências;
- comunicação de indisponibilidade.

O modo seguro deverá ser ativado quando continuar operando puder:

- ampliar danos;
- corromper dados;
- comprometer direitos;
- executar decisões ilegítimas;
- destruir evidências;
- impedir recuperação;
- expor pessoas;
- propagar falhas.

---

## 90. Modo somente leitura

O modo somente leitura permite consulta, mas impede criação, alteração ou exclusão de dados.

Será adequado quando:

- a leitura permanece confiável;
- a escrita oferece risco;
- existe incerteza sobre consistência;
- bancos de dados estão em recuperação;
- autoridade para alteração não pode ser validada;
- é necessário preservar evidências;
- alterações precisam ser temporariamente congeladas.

O modo deverá informar:

- atualidade dos dados;
- instante da última sincronização;
- possibilidade de desatualização;
- limitações;
- previsão de revisão.

Somente leitura não deverá ser utilizado quando os próprios dados consultados forem inseguros, corrompidos ou inadequados para decisão.

---

## 91. Modo de congelamento

O modo de congelamento preserva determinado estado e impede modificações até que a condição seja compreendida ou controlada.

Poderá ser aplicado a:

- configurações;
- cadastros;
- permissões;
- modelos;
- políticas;
- dados;
- decisões;
- contratos;
- versões;
- implantações.

Todo congelamento deverá registrar:

- objeto congelado;
- versão;
- motivo;
- autoridade;
- início;
- exceções permitidas;
- prazo de revisão;
- condição de liberação.

O congelamento deverá preservar acesso às informações necessárias à resposta.

---

## 92. Modo manual

O modo manual transfere atividades normalmente automatizadas para execução ou validação humana.

Será utilizado quando:

- a automação estiver indisponível;
- resultados automáticos forem incertos;
- integrações estiverem comprometidas;
- decisões exigirem discernimento ampliado;
- a operação automática puder causar dano;
- existir capacidade humana suficiente e habilitada.

A transferência deverá indicar:

- quais decisões se tornaram manuais;
- quais operadores estão habilitados;
- quais volumes podem ser sustentados;
- quais formulários ou registros serão utilizados;
- quais controles substituem os automáticos;
- como ocorrerá a reconciliação posterior.

Modo manual não significa ausência de controle.

Ele deverá ampliar:

- instrução;
- registro;
- dupla verificação quando necessária;
- supervisão;
- limitação de volume;
- separação de funções;
- rastreabilidade.

---

## 93. Limites do modo manual

A operação manual poderá possuir menor:

- velocidade;
- escala;
- consistência;
- disponibilidade;
- capacidade de correlação;
- tolerância à fadiga.

A UNO deverá reconhecer esses limites.

Não deverá transferir para pessoas um volume impossível apenas porque a automação falhou.

Deverá reduzir:

- demanda;
- escopo;
- complexidade;
- frequência;
- número de decisões simultâneas.

A saúde e a capacidade cognitiva das pessoas deverão ser monitoradas.

---

## 94. Modo assistido

No modo assistido, pessoas continuam responsáveis pela decisão ou execução, enquanto sistemas e agentes fornecem:

- contexto;
- recomendações;
- alertas;
- simulações;
- verificação;
- comparação;
- registro;
- documentação.

Esse modo será adequado quando a automação integral não for confiável, mas capacidades cognitivas auxiliares ainda puderem ser utilizadas.

A recomendação de um agente deverá permanecer:

- identificada;
- explicável;
- revisável;
- separada da decisão;
- vinculada às evidências disponíveis.

---

## 95. Modo sem inteligência artificial

A UNO deverá possuir capacidade de operar sem modelos de IA quando:

- modelos estiverem indisponíveis;
- resultados estiverem comprometidos;
- fornecedores estiverem inacessíveis;
- custos excederem limites;
- houver suspeita de manipulação;
- contexto não puder ser protegido;
- o uso deixar de ser legítimo.

Nesse modo, deverão permanecer disponíveis, conforme possível:

- regras determinísticas;
- procedimentos;
- formulários;
- pesquisa estruturada;
- conhecimento institucional;
- operadores humanos;
- filas;
- registros;
- canais de escalonamento.

A ausência de IA não deverá significar ausência de operação.

---

## 96. Modo local

O modo local permite que uma unidade territorial, organizacional ou operacional continue funcionando sem dependência contínua da coordenação central.

Deverá possuir:

- identidade local verificável;
- autoridade previamente delimitada;
- dados mínimos disponíveis;
- regras locais;
- recursos próprios;
- capacidade de registro;
- prioridades;
- limites de atuação;
- mecanismos de reconciliação.

O modo local poderá ser ativado por:

- perda de conectividade;
- indisponibilidade central;
- isolamento territorial;
- latência excessiva;
- emergência regional;
- necessidade de resposta imediata.

A unidade local deverá registrar tudo que não puder transmitir no momento.

---

## 97. Modo desconectado

O modo desconectado é uma forma específica de operação local sem comunicação ativa com componentes externos indispensáveis ao modo normal.

Ele deverá definir:

- duração máxima tolerada;
- dados armazenados localmente;
- operações permitidas;
- operações proibidas;
- prevenção de duplicidade;
- controle de sequência;
- validade de credenciais;
- expiração de permissões;
- armazenamento seguro;
- reconciliação posterior.

Decisões que exijam informação global atualizada deverão ser:

- adiadas;
- limitadas;
- escalonadas;
- executadas somente sob regra excepcional explícita.

---

## 98. Modo isolado

O modo isolado separa uma capacidade, organização, território ou ambiente para impedir propagação de falhas ou ameaças.

O isolamento poderá ser:

- lógico;
- físico;
- informacional;
- organizacional;
- territorial;
- temporário.

Poderá envolver:

- bloqueio de integrações;
- segmentação de rede;
- suspensão de sincronização;
- separação de filas;
- restrição de credenciais;
- limitação de compartilhamento;
- operação em ambiente independente.

O isolamento deverá preservar canais controlados para:

- comunicação;
- supervisão;
- evidências;
- coordenação;
- recuperação.

---

## 99. Modo federado de contingência

O modo federado permite que múltiplas organizações ou unidades coordenem respostas sem perder completamente suas autonomias e responsabilidades.

Deverá estabelecer:

- propósito compartilhado;
- autoridade de cada participante;
- coordenação comum;
- dados compartilháveis;
- responsabilidades;
- limites;
- canais;
- regras de decisão;
- critérios de entrada e saída;
- prestação de contas;
- encerramento.

A federação deverá permitir cooperação sem:

- apropriação indevida;
- centralização ilimitada;
- diluição de responsabilidade;
- transferência informal de autoridade;
- uso incompatível de dados.

---

## 100. Modo de substituição temporária

Uma capacidade indisponível poderá ser temporariamente substituída por:

- outro serviço;
- outra equipe;
- outra organização;
- processo manual;
- canal alternativo;
- fornecedor secundário;
- recurso territorial;
- infraestrutura reserva;
- versão simplificada.

A substituição deverá ser validada quanto a:

- equivalência funcional;
- segurança;
- capacidade;
- autoridade;
- conformidade;
- proteção de dados;
- rastreabilidade;
- prazo;
- custo;
- reversibilidade.

A substituição não deverá ser apresentada como equivalente quando oferecer qualidade, cobertura ou garantia inferior.

---

## 101. Modo de redundância

No modo de redundância, uma capacidade secundária assume parcial ou integralmente a função da capacidade principal.

A redundância poderá ser:

- ativa;
- passiva;
- quente;
- morna;
- fria;
- local;
- regional;
- organizacional;
- tecnológica;
- humana.

A transição deverá verificar:

- estado da redundância;
- atualidade dos dados;
- compatibilidade;
- capacidade;
- segurança;
- consistência;
- conectividade;
- autoridade;
- possibilidade de retorno.

Uma redundância não testada não deverá ser considerada garantia.

---

## 102. Modo por filas e priorização

Quando a demanda superar a capacidade residual, a operação deverá organizar o atendimento por filas governadas.

A priorização poderá considerar:

- risco à vida;
- urgência;
- vulnerabilidade;
- impacto;
- propósito;
- prazo;
- dependências;
- possibilidade de dano;
- ordem de chegada;
- compromissos institucionais;
- recursos necessários.

A fila deverá ser:

- observável;
- auditável;
- revisável;
- protegida contra manipulação;
- acessível aos responsáveis;
- comunicável aos afetados.

Prioridade não deverá ser comprada informalmente nem determinada por influência indevida.

---

## 103. Modo de processamento em lotes

Atividades normalmente processadas em tempo real poderão ser acumuladas e processadas em lotes quando:

- conectividade for limitada;
- capacidade computacional estiver reduzida;
- integrações estiverem intermitentes;
- validação humana for necessária;
- processamento imediato não for essencial.

O modo deverá definir:

- tamanho dos lotes;
- frequência;
- ordem;
- prioridade;
- validação;
- prevenção de duplicidade;
- tratamento de falhas;
- reconciliação.

A mudança de tempo real para lote deverá ser comunicada quando afetar expectativas ou direitos.

---

## 104. Modo alternativo de comunicação

Quando os canais principais estiverem indisponíveis, a UNO poderá utilizar:

- SMS;
- voz;
- rádio;
- comunicação presencial;
- mensageria alternativa;
- correio eletrônico;
- páginas estáticas;
- avisos territoriais;
- organizações parceiras;
- representantes locais.

Cada canal deverá possuir regras sobre:

- conteúdo permitido;
- identidade;
- autenticidade;
- privacidade;
- alcance;
- confirmação;
- registro;
- atualização.

Mensagens críticas deverão ser verificáveis para reduzir fraude e desinformação.

---

## 105. Modo territorial

O modo territorial organiza a operação conforme condições específicas de um local.

Poderá considerar:

- acesso físico;
- energia;
- conectividade;
- transporte;
- segurança;
- clima;
- infraestrutura;
- disponibilidade de pessoas;
- instituições presentes;
- vulnerabilidades locais.

A coordenação central deverá evitar impor procedimentos impossíveis ao território.

A realidade local deverá orientar a adaptação sem eliminar princípios comuns.

---

## 106. Modo de operação física

Atividades físicas em contingência deverão observar:

- leis;
- normas técnicas;
- NRs aplicáveis;
- habilitações;
- riscos;
- equipamentos;
- condições ambientais;
- supervisão;
- limites de jornada;
- comunicação;
- responsabilidade.

A emergência não autorizará pessoa não habilitada a executar atividade para a qual não possui competência legal ou técnica, salvo condições expressamente previstas pela legislação e pela autoridade competente.

Quando os requisitos mínimos não puderem ser preservados, a atividade deverá ser suspensa ou transferida.

---

## 107. Modo de proteção de dados

Quando a confidencialidade, integridade ou disponibilidade dos dados estiver ameaçada, poderão ser aplicados:

- bloqueio de escrita;
- restrição de leitura;
- isolamento de bases;
- rotação de credenciais;
- suspensão de exportações;
- limitação de compartilhamento;
- cópia protegida;
- preservação forense;
- validação adicional;
- processamento local.

A proteção deverá considerar simultaneamente:

- privacidade;
- continuidade;
- necessidade de acesso;
- preservação de evidências;
- recuperação.

---

## 108. Modo de identidade restrita

Quando houver incerteza sobre identidade, autenticação ou autorização, a UNO poderá:

- exigir autenticação reforçada;
- reduzir privilégios;
- bloquear ações sensíveis;
- expirar sessões;
- restringir novos acessos;
- utilizar validação humana;
- limitar atuação ao contexto local;
- preservar somente operações essenciais.

A incapacidade de confirmar identidade deverá impedir ações de alta consequência.

Contudo, mecanismos de contingência deverão evitar abandono de pessoas que perderam temporariamente acesso aos meios digitais de identificação.

---

## 109. Modo de autoridade restrita

Quando a cadeia normal de autoridade estiver indisponível ou contestada, a UNO deverá operar com:

- competências mínimas;
- decisões reversíveis;
- escopo reduzido;
- dupla validação quando possível;
- registro ampliado;
- prazo curto;
- escalonamento obrigatório.

Nenhuma pessoa, agente ou organização deverá presumir autoridade ilimitada pela ausência de seu superior ou coordenador.

---

## 110. Modo de conservação de recursos

Quando recursos estiverem escassos, poderão ser conservados:

- energia;
- processamento;
- armazenamento;
- banda;
- combustível;
- materiais;
- recursos financeiros;
- horas humanas;
- capacidade de especialistas.

A conservação deverá priorizar:

1. proteção de pessoas;
2. comunicação essencial;
3. identidade e segurança;
4. Missões críticas;
5. preservação de dados;
6. recuperação;
7. funções complementares.

O consumo deverá permanecer rastreável.

---

## 111. Modo de execução adiada

Atividades não urgentes poderão ser adiadas quando sua execução:

- disputar recursos críticos;
- aumentar risco;
- dificultar recuperação;
- depender de contexto indisponível;
- criar alterações difíceis de reconciliar.

Toda ação adiada deverá possuir:

- registro;
- justificativa;
- prioridade;
- responsável;
- condição de retomada;
- prazo de revisão.

Adiar não poderá significar esquecer.

---

## 112. Modo de cancelamento controlado

Determinadas atividades poderão precisar ser canceladas definitivamente.

O cancelamento deverá avaliar:

- compromissos assumidos;
- pessoas afetadas;
- custos;
- dados;
- recursos reservados;
- obrigações legais;
- comunicação;
- compensações;
- memória.

Toda Missão cancelada deverá possuir encerramento compreensível e não simplesmente desaparecer da operação.

---

## 113. Modo de recuperação paralela

A recuperação poderá ocorrer em ambiente separado da operação degradada.

Esse modo permite:

- restaurar dados;
- validar versões;
- testar integrações;
- comparar estados;
- verificar segurança;
- simular retorno;
- impedir impacto sobre a operação residual.

O ambiente de recuperação deverá possuir:

- isolamento;
- controle de acesso;
- dados adequadamente protegidos;
- registros;
- critérios de promoção;
- possibilidade de descarte seguro.

---

## 114. Modo de reconstrução

Quando a restauração direta não for possível, a capacidade deverá ser reconstruída.

A reconstrução poderá exigir:

- nova infraestrutura;
- nova configuração;
- recomposição de dados;
- substituição de fornecedores;
- redistribuição de responsabilidades;
- revisão de arquitetura;
- revalidação normativa;
- recertificação;
- reativação progressiva.

Reconstruir não significa reproduzir automaticamente a vulnerabilidade anterior.

A nova capacidade deverá incorporar o aprendizado disponível.

---

## 115. Controles compensatórios

Quando um controle normal estiver indisponível, um controle compensatório poderá reduzir o risco.

Exemplos:

- revisão humana substituindo validação automática;
- dupla assinatura substituindo fluxo indisponível;
- limite de valor substituindo análise completa;
- operação local substituindo integração central;
- registro físico substituindo sistema indisponível;
- isolamento substituindo monitoramento integral.

O controle compensatório deverá ser:

- adequado;
- proporcional;
- documentado;
- temporário;
- testado quando possível;
- removido após normalização.

Ele não deverá ser tratado como equivalente permanente sem avaliação formal.

---

## 116. Operação degradada por perfil

Diferentes perfis poderão receber experiências distintas.

### Usuários

Deverão visualizar:

- disponibilidade real;
- limitações;
- alternativas;
- prazos;
- direitos;
- canais de apoio.

### Operadores

Deverão visualizar:

- estado;
- prioridades;
- procedimentos;
- limites;
- filas;
- escalonamentos.

### Coordenadores

Deverão visualizar:

- impacto consolidado;
- capacidade residual;
- dependências;
- recursos;
- decisões;
- tendências.

### Curadores e autoridades

Deverão visualizar:

- legitimidade;
- riscos;
- exceções;
- conformidade;
- evidências;
- efeitos institucionais.

A interface deverá preservar uma linguagem visual coerente entre essas perspectivas.

---

## 117. Transição entre modos

Toda transição deverá ser tratada como operação crítica.

A mudança deverá registrar:

- modo anterior;
- novo modo;
- motivo;
- autoridade;
- horário;
- escopo;
- ações automáticas;
- ações manuais;
- impactos esperados;
- confirmação de ativação;
- falhas de transição.

A operação deverá verificar se o novo modo realmente entrou em funcionamento.

Declarar a mudança sem validar sua execução poderá produzir falsa segurança.

---

## 118. Retorno do modo degradado

O retorno não deverá ocorrer de uma única vez quando a complexidade ou o risco exigirem progressão.

Poderá seguir:

1. restauração técnica;
2. validação isolada;
3. ativação limitada;
4. observação;
5. ampliação gradual;
6. reconciliação;
7. normalização;
8. encerramento.

Durante o retorno, a UNO deverá estar preparada para:

- interromper;
- reverter;
- retornar ao modo anterior;
- isolar novamente;
- preservar evidências.

---

## 119. Reconciliação posterior

Modos locais, manuais, desconectados ou alternativos poderão produzir estados divergentes.

A reconciliação deverá identificar:

- registros duplicados;
- conflitos;
- diferenças temporais;
- decisões incompatíveis;
- dados ausentes;
- operações não confirmadas;
- alterações concorrentes;
- responsabilidades;
- efeitos produzidos.

Conflitos não deverão ser resolvidos apenas pelo último registro recebido.

A resolução deverá considerar:

- autoridade;
- temporalidade;
- propósito;
- evidência;
- impacto;
- direitos;
- dependências.

---

## 120. Antipadrões de operação degradada

A UNO deverá evitar:

### 120.1 Degradação invisível

Continuar operando com capacidade reduzida sem informar responsáveis ou afetados.

### 120.2 Modo permanente

Manter indefinidamente uma configuração extraordinária.

### 120.3 Automação sem confiança

Continuar execução automática quando contexto ou controles foram perdidos.

### 120.4 Transferência indiscriminada para pessoas

Sobrecarregar operadores para compensar falhas tecnológicas.

### 120.5 Centralização reflexa

Retirar toda autonomia local durante perda de coordenação.

### 120.6 Autonomia sem limite

Permitir que unidades desconectadas assumam competências indefinidas.

### 120.7 Redução sem prioridade

Atender por acaso, influência ou conveniência.

### 120.8 Substituição falsa

Apresentar alternativa inferior como equivalente integral.

### 120.9 Reconexão sem reconciliação

Restabelecer comunicação e ignorar estados produzidos durante o isolamento.

### 120.10 Retorno prematuro

Declarar normalidade antes de validar segurança, integridade e capacidade.

---

## 121. Invariantes dos modos degradados

Todo modo deverá preservar:

1. identidade verificável;
2. propósito compreensível;
3. responsabilidade atribuível;
4. autoridade limitada;
5. segurança proporcional;
6. evidência suficiente;
7. comunicação verdadeira;
8. temporalidade;
9. possibilidade de revisão;
10. capacidade de recuperação;
11. proteção das pessoas;
12. reconciliação posterior.

---

## 122. Garantias do Lote 3

A Plataforma UNO deverá garantir que:

- toda capacidade crítica possua ao menos um modo seguro;
- toda operação degradada seja explicitamente identificada;
- toda redução possua critério;
- todo modo manual possua limite de carga;
- todo modo local possua fronteiras de autoridade;
- todo modo desconectado possua reconciliação;
- toda substituição seja validada;
- toda redundância seja testada;
- toda fila seja auditável;
- toda transição seja confirmada;
- todo controle compensatório seja temporário;
- todo retorno possa ser interrompido ou revertido;
- nenhuma continuidade aparente esconda risco inaceitável.

---

## 123. Princípios consolidados

A Engenharia Oficial reconhece que:

1. o modo operacional deverá responder ao estado real;
2. redução consciente preserva continuidade legítima;
3. funcionalidade mínima precisa ser segura;
4. disponibilidade parcial deve permanecer visível;
5. modo manual exige controle ampliado;
6. pessoas não absorvem capacidade ilimitada;
7. operação local exige limites e memória;
8. isolamento deve impedir propagação sem eliminar coordenação;
9. federação preserva autonomia e responsabilidade;
10. substituição exige equivalência declarada;
11. redundância precisa ser comprovada;
12. filas devem distribuir atenção com justiça;
13. contingência física continua subordinada às normas aplicáveis;
14. dados e identidade exigem modos próprios de proteção;
15. controles compensatórios não se tornam permanentes por costume;
16. reconexão exige reconciliação;
17. retorno deve ser progressivo e verificável;
18. a forma pode mudar, mas o propósito permanece.

---

## 124. Transição para o próximo lote

Os modos definidos neste lote estabelecem como a UNO poderá continuar operando sob capacidade reduzida, dependências comprometidas ou condições extraordinárias.

O próximo lote definirá como esses modos serão:

- detectados;
- recomendados;
- declarados;
- autorizados;
- coordenados;
- comunicados;
- supervisionados;
- escalonados;
- revogados.

Também estabelecerá:

- papéis;
- responsabilidades;
- cadeia de autoridade;
- governança extraordinária;
- limites de decisão;
- prestação de contas;
- coordenação entre pessoas, agentes, organizações e territórios.

A operação degradada define a forma de continuar.

A coordenação de contingência determina quem poderá ativá-la, conduzi-la e encerrá-la legitimamente.

---

## Lote 4 — Ativação, Coordenação e Autoridade de Contingência

---

## 125. A contingência como ação coordenada

Uma contingência não será efetivamente ativada apenas porque um alerta foi produzido ou porque uma falha foi identificada.

A ativação deverá transformar percepção em ação coordenada.

Ela deverá estabelecer:

- o que foi reconhecido;
- qual estado foi declarado;
- qual escopo foi afetado;
- quais modos operacionais serão aplicados;
- quem assume cada responsabilidade;
- quais autoridades foram mobilizadas;
- quais limites passam a vigorar;
- quais recursos serão utilizados;
- quem deverá ser informado;
- quando a condição será reavaliada.

Sem coordenação, diferentes partes da operação poderão:

- reagir em direções incompatíveis;
- disputar recursos;
- duplicar ações;
- deixar responsabilidades descobertas;
- produzir informações conflitantes;
- ampliar o impacto;
- impedir a recuperação.

> A contingência não deverá substituir a ordem pela pressa.  
> Deverá produzir uma ordem adequada à realidade extraordinária.

---

## 126. O ciclo de ativação

O ciclo de ativação deverá compreender:

1. percepção;
2. registro;
3. verificação inicial;
4. classificação provisória;
5. contenção imediata;
6. notificação;
7. recomendação;
8. declaração;
9. mobilização;
10. coordenação;
11. acompanhamento;
12. reclassificação;
13. recuperação;
14. normalização;
15. encerramento.

Essas etapas poderão ocorrer simultaneamente quando a urgência exigir.

A velocidade não deverá eliminar o registro mínimo necessário para preservar responsabilidade e continuidade.

---

## 127. Percepção

A contingência poderá ser percebida por:

- usuário;
- operador;
- agente;
- sensor;
- sistema de monitoramento;
- organização;
- parceiro;
- fornecedor;
- autoridade;
- auditoria;
- comunidade;
- fonte pública confiável.

Toda pessoa ou componente autorizado deverá possuir meios para comunicar sinais relevantes.

A arquitetura não deverá depender exclusivamente de observabilidade técnica.

Muitos impactos surgirão primeiro como:

- relato;
- reclamação;
- ausência;
- mudança de comportamento;
- dificuldade territorial;
- percepção humana;
- inconsistência institucional.

---

## 128. Registro inicial

O primeiro registro deverá capturar, quando possível:

- data e hora;
- origem da informação;
- local;
- capacidade afetada;
- descrição do sinal;
- pessoas ou organizações envolvidas;
- evidências disponíveis;
- impacto percebido;
- urgência;
- ações já realizadas;
- contato do responsável pelo relato.

O registro inicial não exigirá conhecimento completo da ocorrência.

Deverá permitir que a investigação comece sem transformar hipóteses em fatos.

---

## 129. Verificação inicial

A verificação inicial deverá buscar responder:

- o sinal é autêntico?
- ainda está ocorrendo?
- possui impacto real?
- o impacto está crescendo?
- existe risco imediato?
- há necessidade de contenção?
- outras capacidades foram afetadas?
- quem possui competência para avaliar?
- qual é o nível mínimo de resposta necessário?

A verificação não deverá atrasar medidas protetivas reversíveis quando houver risco elevado.

---

## 130. Classificação provisória

Quando as informações forem insuficientes, a ocorrência poderá receber classificação provisória.

Ela deverá indicar:

- estado estimado;
- nível preliminar;
- confiança;
- hipóteses;
- lacunas;
- próxima revisão;
- medidas preventivas.

A classificação provisória deverá ser atualizada à medida que novas evidências forem obtidas.

---

## 131. Contenção imediata

Antes da declaração formal completa, poderão ser executadas medidas de contenção quando necessárias para:

- proteger pessoas;
- impedir propagação;
- preservar evidências;
- interromper ação insegura;
- limitar acesso;
- isolar dependência;
- reduzir carga;
- conservar recursos;
- manter comunicação.

Toda contenção deverá ser:

- proporcional;
- limitada;
- registrada;
- comunicada ao responsável;
- revisada assim que possível.

---

## 132. Recomendação de ativação

A recomendação deverá apresentar:

- evidências;
- classificação;
- impacto;
- capacidade residual;
- riscos;
- tendência;
- modos sugeridos;
- recursos necessários;
- consequências da ativação;
- consequências da não ativação;
- autoridade competente;
- urgência da decisão.

Agentes de IA poderão elaborar recomendações, mas deverão expor:

- fundamentos;
- incertezas;
- fontes;
- limitações;
- alternativas.

---

## 133. Declaração formal

A declaração formal transforma a contingência em estado institucional reconhecido.

Ela deverá conter:

- identificador;
- título;
- escopo;
- nível;
- estado;
- justificativa;
- autoridade declaradora;
- horário de vigência;
- modos ativados;
- responsáveis;
- limites;
- públicos afetados;
- canais de comunicação;
- próxima revisão;
- critérios de escalonamento;
- condições de encerramento.

A declaração deverá ser suficientemente clara para orientar ação.

---

## 134. Autoridade para declarar

A autoridade declaradora deverá ser definida conforme:

- natureza;
- severidade;
- alcance;
- território;
- capacidade;
- organização;
- impacto institucional.

Poderão declarar contingências, dentro de suas competências:

- responsáveis por capacidades;
- coordenadores operacionais;
- responsáveis territoriais;
- gestores de Missão;
- estruturas de governança;
- autoridades institucionais;
- autoridades públicas competentes.

Quanto maior o alcance e a consequência, maior deverá ser o nível de legitimidade e supervisão.

---

## 135. Declaração automática

Contingências estritamente técnicas e de escopo limitado poderão ser declaradas automaticamente quando:

- critérios objetivos forem satisfeitos;
- o modo ativado for previamente autorizado;
- as ações forem reversíveis;
- os limites forem claros;
- responsáveis forem informados;
- existir revisão humana posterior.

A declaração automática não deverá conceder autoridade institucional ampla.

---

## 136. Declaração presumida por emergência

Quando não for possível alcançar a autoridade ordinária e houver risco grave ou imediato, uma pessoa ou unidade habilitada poderá ativar medidas emergenciais mínimas.

Essa ativação deverá:

- preservar vida e segurança;
- limitar-se ao indispensável;
- evitar decisões irreversíveis;
- registrar ações;
- buscar ratificação;
- expirar em prazo curto;
- transferir a coordenação assim que possível.

A ausência da autoridade superior não criará autoridade ilimitada.

---

## 137. Ratificação

Declarações automáticas, locais ou emergenciais poderão exigir ratificação.

A ratificação deverá verificar:

- legitimidade;
- necessidade;
- proporcionalidade;
- escopo;
- medidas adotadas;
- riscos;
- continuidade;
- autoridade.

A ratificação poderá:

- confirmar;
- alterar;
- ampliar;
- reduzir;
- revogar;
- substituir a declaração.

A falta de ratificação dentro do prazo deverá produzir estado seguro ou encerramento controlado, conforme o contexto.

---

## 138. Papéis fundamentais

A resposta poderá mobilizar os seguintes papéis.

### 138.1 Relator

Registra sinais e apresenta evidências iniciais.

### 138.2 Observador

Acompanha o contexto e identifica mudanças relevantes.

### 138.3 Analista

Interpreta evidências, dependências, impacto e tendência.

### 138.4 Responsável pela capacidade

Responde pelo componente, serviço ou função afetada.

### 138.5 Coordenador de contingência

Integra ações, pessoas, recursos, decisões e comunicação.

### 138.6 Operador

Executa procedimentos e ações autorizadas.

### 138.7 Especialista

Fornece conhecimento técnico, jurídico, territorial, humano ou institucional.

### 138.8 Curador

Protege significado, coerência, memória e alinhamento com a Engenharia Oficial.

### 138.9 Responsável de segurança

Avalia riscos e medidas de proteção.

### 138.10 Responsável de comunicação

Coordena informações para públicos internos e externos.

### 138.11 Autoridade decisória

Autoriza decisões dentro de competência formal.

### 138.12 Auditor ou observador independente

Verifica rastreabilidade, limites e conformidade.

Uma pessoa poderá exercer múltiplos papéis em contingências pequenas, desde que os conflitos sejam reconhecidos.

---

## 139. Coordenador de contingência

O coordenador deverá:

- manter visão integrada;
- confirmar prioridades;
- distribuir responsabilidades;
- evitar duplicidade;
- remover impedimentos;
- acompanhar capacidade;
- preservar comunicação;
- solicitar escalonamento;
- registrar decisões;
- preparar transições;
- coordenar recuperação.

O coordenador não deverá necessariamente executar todas as ações.

Sua função principal será preservar coerência entre elas.

---

## 140. Autoridade e competência

Autoridade é o poder legítimo de decidir ou autorizar.

Competência é a capacidade técnica, legal ou institucional para compreender e executar.

Uma pessoa poderá possuir autoridade sem competência técnica específica.

Outra poderá possuir competência sem autoridade decisória.

A resposta deverá combinar ambas.

Decisões técnicas deverão receber participação competente.

Decisões institucionais deverão possuir autoridade legítima.

---

## 141. Matriz de responsabilidade

Cada ação relevante deverá indicar:

- quem recomenda;
- quem decide;
- quem executa;
- quem valida;
- quem acompanha;
- quem deve ser informado;
- quem responde pelo resultado.

A matriz deverá ser adaptada à contingência sem eliminar atribuição.

Expressões como “a equipe decidiu” não serão suficientes para decisões de alta consequência sem identificação da instância responsável.

---

## 142. Delegação emergencial

A delegação emergencial deverá especificar:

- delegante;
- delegado;
- competência transferida;
- finalidade;
- escopo;
- início;
- término;
- limites;
- decisões proibidas;
- obrigação de registro;
- condição de revogação.

A delegação não transfere automaticamente toda a responsabilidade institucional do delegante.

Também não poderá ultrapassar competência que o próprio delegante não possua.

---

## 143. Substituição de responsáveis

Quando um responsável estiver indisponível, a arquitetura deverá possuir ordem de substituição.

A sucessão poderá considerar:

- função;
- habilitação;
- disponibilidade;
- ausência de conflito;
- contexto;
- proximidade operacional;
- autoridade formal.

A substituição deverá ser registrada e comunicada.

---

## 144. Separação de funções

Mesmo durante contingência, determinadas funções deverão permanecer separadas quando sua concentração produzir risco.

Exemplos:

- recomendar e aprovar movimentação financeira;
- executar e auditar;
- alterar permissão e validar a alteração;
- restaurar dados e confirmar integridade;
- declarar normalidade e avaliar independentemente o retorno;
- investigar e apagar evidências.

Quando a separação normal não for possível, deverão ser adotados controles compensatórios.

---

## 145. Sala de coordenação

Contingências relevantes deverão possuir um espaço de coordenação físico ou digital.

Esse espaço deverá consolidar:

- estado;
- linha do tempo;
- impacto;
- dependências;
- decisões;
- responsáveis;
- ações;
- recursos;
- comunicações;
- riscos;
- pendências;
- recuperação.

A Sala do Cérebro ou estrutura equivalente poderá apoiar contingências institucionais de maior complexidade.

Ela não deverá concentrar decisões que pertencem legitimamente a autoridades territoriais ou especializadas.

---

## 146. Quadro operacional comum

Todos os responsáveis deverão compartilhar uma representação suficientemente coerente da ocorrência.

O quadro comum deverá apresentar:

- o que se sabe;
- o que não se sabe;
- o que mudou;
- qual é o estado atual;
- qual é a tendência;
- o que está sendo feito;
- o que precisa ser decidido;
- quem está responsável;
- quando ocorrerá a próxima atualização.

O quadro deverá registrar horário de atualização para impedir uso de informação vencida.

---

## 147. Linha do tempo oficial

Toda contingência deverá possuir uma linha do tempo que registre:

- sinais iniciais;
- detecção;
- confirmação;
- classificação;
- declaração;
- medidas;
- decisões;
- comunicações;
- escalonamentos;
- recuperações;
- regressões;
- normalização;
- encerramento.

A linha do tempo deverá distinguir:

- momento do fato;
- momento da descoberta;
- momento do registro;
- momento da decisão;
- momento da execução.

Esses momentos poderão ser diferentes.

---

## 148. Ciclo de coordenação

A coordenação deverá funcionar em ciclos sucessivos:

1. perceber;
2. compreender;
3. priorizar;
4. decidir;
5. executar;
6. verificar;
7. aprender;
8. atualizar.

A duração de cada ciclo dependerá da velocidade da contingência.

Poderá ser:

- contínua;
- a cada poucos minutos;
- horária;
- diária;
- semanal;
- orientada por eventos.

A frequência deverá ser suficiente para acompanhar a mudança sem sobrecarregar a operação.

---

## 149. Reuniões de contingência

Reuniões deverão possuir:

- objetivo;
- duração;
- participantes necessários;
- estado atualizado;
- decisões pendentes;
- responsáveis;
- prazos;
- registro.

Reuniões não deverão substituir execução.

Também não deverão ser usadas apenas para distribuir culpa ou produzir aparência de controle.

---

## 150. Priorização durante contingência

A prioridade deverá considerar:

1. vida;
2. integridade;
3. segurança;
4. dignidade;
5. proteção de direitos;
6. contenção;
7. comunicação;
8. funções vitais;
9. Missões críticas;
10. preservação de dados;
11. recuperação;
12. normalização.

A ordem poderá ser adaptada ao contexto, desde que a justificativa permaneça compreensível.

---

## 151. Mobilização de recursos

A mobilização deverá identificar:

- recurso necessário;
- quantidade;
- localização;
- responsável;
- prazo;
- origem;
- custo;
- condição de uso;
- condição de devolução;
- substituição possível.

Recursos poderão incluir:

- pessoas;
- conhecimento;
- infraestrutura;
- equipamentos;
- dados;
- canais;
- energia;
- transporte;
- recursos financeiros;
- autoridade;
- capacidade de parceiros.

A mobilização deverá evitar esgotar uma área para preservar outra sem avaliar o impacto transferido.

---

## 152. Reserva operacional

Capacidades críticas deverão possuir reservas proporcionais.

A reserva poderá ser:

- técnica;
- humana;
- financeira;
- material;
- territorial;
- informacional;
- organizacional.

A utilização deverá ser:

- autorizada;
- registrada;
- acompanhada;
- recomposta depois da contingência.

Reserva não deverá ser consumida rotineiramente até deixar de existir quando necessária.

---

## 153. Escalonamento funcional

O escalonamento funcional ocorre quando a capacidade necessária não está disponível no nível atual.

Poderá mobilizar:

- especialista;
- equipe adicional;
- fornecedor;
- organização parceira;
- infraestrutura superior;
- autoridade técnica.

---

## 154. Escalonamento hierárquico

O escalonamento hierárquico ocorre quando a decisão excede:

- autoridade;
- risco tolerável;
- orçamento;
- território;
- impacto;
- competência institucional.

O escalonamento não deverá retirar automaticamente a coordenação de quem conhece a realidade local.

A instância superior deverá ampliar capacidade e legitimidade sem apagar contexto.

---

## 155. Escalonamento territorial

Ocorrerá quando:

- o impacto ultrapassar uma unidade;
- múltiplos territórios forem afetados;
- recursos locais forem insuficientes;
- coordenação regional ou nacional for necessária;
- existirem consequências interjurisdicionais.

A expansão deverá preservar representação dos territórios afetados.

---

## 156. Escalonamento institucional

Ocorrerá quando a contingência ameaçar:

- legitimidade;
- continuidade;
- confiança;
- conformidade;
- direitos;
- compromisso público;
- sustentabilidade da instituição.

Poderá exigir participação de:

- governança;
- curadoria;
- jurídico;
- segurança;
- comunicação institucional;
- auditoria;
- autoridades públicas competentes.

---

## 157. Critérios de escalonamento

O escalonamento poderá ser acionado por:

- aumento de severidade;
- perda de capacidade residual;
- propagação;
- duração superior ao tolerado;
- falha das medidas;
- indisponibilidade de responsável;
- impacto sobre população vulnerável;
- necessidade de competência ausente;
- conflito de autoridade;
- risco de dano irreversível;
- obrigação legal;
- insuficiência de recursos.

---

## 158. Desescalonamento

O desescalonamento deverá ocorrer quando:

- a propagação foi contida;
- o impacto diminuiu;
- capacidades foram restauradas;
- autoridade extraordinária deixou de ser necessária;
- a coordenação pode retornar ao nível adequado;
- riscos residuais estão controlados.

O desescalonamento deverá devolver:

- autonomia;
- recursos;
- autoridade;
- responsabilidades;
- rotinas.

A devolução deverá ser formalmente registrada.

---

## 159. Governança extraordinária

Contingências críticas poderão exigir governança extraordinária.

Ela poderá:

- acelerar decisões;
- convocar estruturas especiais;
- ampliar coordenação;
- mobilizar reservas;
- estabelecer prioridades temporárias;
- autorizar exceções previstas.

Ela não poderá:

- suspender indefinidamente direitos;
- criar autoridade sem limite;
- eliminar auditoria;
- apagar divergências;
- alterar permanentemente a instituição sem processo adequado;
- concentrar benefícios particulares;
- utilizar emergência como justificativa genérica.

---

## 160. Exceções operacionais

Toda exceção deverá registrar:

- regra ordinária;
- exceção concedida;
- justificativa;
- responsável;
- beneficiários e afetados;
- riscos;
- controles;
- validade;
- revisão;
- encerramento.

Exceções deverão ser específicas.

Não poderão ser redigidas de forma tão ampla que autorizem qualquer ação.

---

## 161. Autoridade de agentes

Agentes poderão receber autoridade operacional limitada para:

- detectar;
- registrar;
- alertar;
- recomendar;
- aplicar contenções reversíveis;
- reduzir carga;
- isolar componentes previamente definidos;
- coletar evidências;
- executar procedimentos autorizados.

Agentes não deverão, isoladamente:

- assumir autoridade institucional ampla;
- suspender direitos;
- movimentar recursos extraordinários sem limite;
- declarar encerramento de contingência crítica;
- modificar princípios;
- apagar registros;
- impedir revisão humana.

---

## 162. Supervisão de automações

Automações de contingência deverão possuir:

- proprietário;
- versão;
- escopo;
- critérios;
- limites;
- logs;
- testes;
- mecanismo de interrupção;
- revisão;
- comportamento seguro.

Toda automação deverá ser observada quanto ao risco de:

- loops;
- propagação;
- sobrecorreção;
- bloqueio excessivo;
- consumo de recursos;
- decisões baseadas em dados incorretos.

---

## 163. Intervenção humana

Operadores autorizados deverão poder:

- pausar;
- limitar;
- reverter;
- substituir;
- escalonar;
- desativar automações.

A intervenção deverá ser registrada.

A possibilidade de intervenção não deverá depender exclusivamente do mesmo componente que está em falha.

---

## 164. Coordenação com terceiros

Quando parceiros ou fornecedores participarem da resposta, deverão ser estabelecidos:

- ponto de contato;
- responsabilidade;
- autoridade;
- dados compartilhados;
- nível de serviço;
- obrigações;
- limites;
- evidências;
- comunicação;
- encerramento.

A UNO não deverá terceirizar sua responsabilidade institucional apenas porque uma capacidade é fornecida externamente.

---

## 165. Coordenação com autoridades públicas

Quando a contingência envolver competência pública, risco coletivo, emergência, segurança, saúde, defesa civil ou obrigação regulatória, a UNO deverá cooperar com as autoridades competentes.

Essa cooperação deverá respeitar:

- legislação;
- jurisdição;
- proteção de dados;
- deveres de notificação;
- cadeia de comando;
- limites institucionais;
- direitos das pessoas;
- preservação de evidências.

A Plataforma UNO deverá servir como capacidade de coordenação e apoio, não como substituta ilegítima da autoridade pública.

---

## 166. Comunicação interna

A comunicação interna deverá informar:

- estado;
- impacto;
- prioridade;
- instruções;
- responsáveis;
- canais;
- proibições;
- próxima atualização.

Mensagens internas deverão ser coerentes para impedir ações contraditórias.

---

## 167. Comunicação aos afetados

Pessoas afetadas deverão saber, conforme aplicável:

- o que ocorreu;
- como foram afetadas;
- o que permanece disponível;
- o que foi suspenso;
- quais alternativas existem;
- o que devem fazer;
- onde buscar ajuda;
- quando receberão nova atualização;
- quais direitos possuem.

A comunicação deverá ser acessível a diferentes públicos e condições.

---

## 168. Comunicação pública

A comunicação pública deverá equilibrar:

- transparência;
- segurança;
- privacidade;
- precisão;
- prevenção de pânico;
- combate à desinformação;
- dever de prestar contas.

Ela deverá distinguir claramente:

- informação confirmada;
- avaliação provisória;
- hipótese;
- decisão;
- orientação;
- previsão.

---

## 169. Fonte oficial

Cada contingência relevante deverá possuir fonte oficial identificável.

A fonte deverá concentrar:

- estado atual;
- histórico de atualizações;
- orientações;
- canais;
- correções;
- encerramento.

A existência de fonte oficial não elimina comunicação descentralizada.

Ela fornece referência comum para reduzir conflito e fraude.

---

## 170. Cadência de atualização

A declaração deverá definir a frequência de atualização.

Mesmo quando não houver mudança, poderá ser necessário informar:

- que a contingência continua;
- que não existem novas evidências;
- que as ações permanecem em andamento;
- quando ocorrerá a próxima atualização.

Silêncio prolongado não deverá ser interpretado como normalização.

---

## 171. Correção pública

Informações incorretas deverão ser corrigidas de forma:

- rápida;
- visível;
- rastreável;
- respeitosa;
- vinculada à informação anterior.

Correções não deverão apagar o histórico relevante.

---

## 172. Registro decisório

Toda decisão relevante deverá registrar:

- contexto;
- alternativas;
- evidências;
- recomendação;
- decisão;
- responsável;
- justificativa;
- riscos aceitos;
- prazo;
- revisão;
- resultado esperado.

Decisões sob pressão poderão possuir registro inicial simplificado, complementado posteriormente.

---

## 173. Decisão sob incerteza

Quando a certeza não for possível, a decisão deverá considerar:

- impacto potencial;
- reversibilidade;
- urgência;
- probabilidade;
- custo da ação;
- custo da omissão;
- capacidade de monitoramento;
- possibilidade de correção.

Quanto maior a incerteza, mais importante será:

- limitar escopo;
- preservar reversibilidade;
- ampliar observação;
- revisar rapidamente;
- comunicar hipóteses.

---

## 174. Dissenso e contestação

Pessoas e especialistas deverão poder registrar objeções fundamentadas.

O dissenso deverá ser preservado quando envolver:

- risco;
- legalidade;
- segurança;
- ética;
- impacto humano;
- evidência contrária.

A autoridade poderá decidir de forma diferente, mas deverá reconhecer e justificar a decisão.

---

## 175. Conflito de interesses

Participantes deverão declarar conflitos que possam afetar:

- priorização;
- contratação;
- alocação de recursos;
- comunicação;
- investigação;
- encerramento.

Quando possível, decisões deverão ser transferidas ou supervisionadas por instância sem conflito.

---

## 176. Prestação de contas durante a contingência

A prestação de contas não deverá ocorrer apenas depois.

Durante a resposta, deverão permanecer visíveis:

- autoridade;
- decisões;
- recursos;
- exceções;
- riscos;
- resultados;
- pendências.

A intensidade da prestação de contas deverá crescer com a autoridade extraordinária exercida.

---

## 177. Proteção contra culpabilização prematura

A busca por responsabilidade não deverá interromper a proteção e recuperação.

Durante a resposta, a prioridade será:

- conter;
- proteger;
- compreender;
- recuperar;
- preservar evidências.

A análise de responsabilidade deverá ocorrer com método, contraditório e contexto.

Isso não impede afastamento preventivo quando necessário para proteger pessoas ou evidências.

---

## 178. Troca de turno e continuidade humana

Toda mudança de equipe deverá possuir passagem formal contendo:

- estado;
- decisões;
- riscos;
- pendências;
- responsáveis;
- próximos eventos;
- limites;
- canais;
- documentação.

A contingência não deverá depender da memória individual de quem encerra o turno.

---

## 179. Encerramento da autoridade extraordinária

Toda autoridade extraordinária deverá ser encerrada quando:

- a necessidade desaparecer;
- o escopo for reduzido;
- a competência retornar ao nível ordinário;
- o prazo expirar;
- a contingência for encerrada.

O encerramento deverá:

- revogar permissões;
- devolver responsabilidades;
- fechar exceções;
- registrar ações;
- preservar evidências;
- comunicar participantes.

---

## 180. Antipadrões de coordenação

A UNO deverá evitar:

### 180.1 Comando sem contexto

Decisões centralizadas que ignoram a realidade local.

### 180.2 Coordenação sem autoridade

Responsáveis aparentes sem competência para decidir.

### 180.3 Autoridade sem competência

Decisões técnicas tomadas sem conhecimento adequado.

### 180.4 Reunião permanente

Excesso de comunicação sem execução.

### 180.5 Escalonamento como abandono

Transferir o problema e deixar de colaborar.

### 180.6 Exceção sem validade

Criar permissões extraordinárias permanentes.

### 180.7 Automação soberana

Permitir que agentes controlem a contingência sem supervisão.

### 180.8 Comunicação fragmentada

Divulgar versões incompatíveis sem fonte comum.

### 180.9 Ocultação defensiva

Minimizar impacto para proteger imagem institucional.

### 180.10 Encerramento unilateral

Declarar normalidade sem validação dos afetados e responsáveis.

---

## 181. Invariantes de coordenação

Toda coordenação deverá preservar:

1. propósito;
2. competência;
3. legitimidade;
4. atribuição;
5. proporcionalidade;
6. temporalidade;
7. evidência;
8. comunicação;
9. supervisão;
10. contestabilidade;
11. continuidade;
12. devolução de autoridade.

---

## 182. Garantias do Lote 4

A Plataforma UNO deverá garantir que:

- todo sinal relevante possa ser registrado;
- toda declaração possua autoridade identificada;
- toda ativação produza efeitos claros;
- toda contenção emergencial seja revisada;
- toda delegação possua prazo e limites;
- toda decisão crítica possua responsável;
- toda automação possa ser interrompida;
- todo escalonamento preserve contexto;
- toda comunicação possua fonte;
- toda exceção seja temporária;
- todo dissenso relevante permaneça registrado;
- toda troca de turno preserve continuidade;
- toda autoridade extraordinária seja devolvida;
- nenhuma contingência seja coordenada por poder sem responsabilidade.

---

## 183. Princípios consolidados

A Engenharia Oficial reconhece que:

1. detecção precisa produzir ação compreensível;
2. contenção poderá preceder certeza absoluta;
3. declaração formal cria responsabilidade;
4. autoridade deverá acompanhar competência;
5. coordenação integra sem centralizar tudo;
6. escalonar não significa abandonar;
7. autonomia local deverá permanecer representada;
8. agentes poderão agir apenas dentro de limites;
9. comunicação é parte da operação;
10. incerteza deverá ser explicitada;
11. dissenso fundamentado fortalece decisões;
12. recursos extraordinários exigem prestação de contas;
13. a passagem de turno preserva memória;
14. exceções deverão expirar;
15. o fim da emergência exige devolução de autoridade;
16. nenhuma urgência legitima poder ilimitado.

---

## 184. Transição para o próximo lote

Com a ativação, os papéis, a autoridade e a coordenação estabelecidos, a UNO poderá conduzir a contingência de forma legítima e rastreável.

O próximo lote definirá a recuperação.

Serão estabelecidos:

- objetivos de recuperação;
- prioridades;
- sequenciamento;
- restauração;
- reconstrução;
- validação;
- reconciliação;
- retorno progressivo;
- tratamento de riscos residuais;
- critérios de normalização;
- impedimentos ao retorno;
- encerramento técnico e operacional.

Ativar a contingência permite responder à ruptura.

Recuperar significa reconstruir condições suficientes para que a operação volte a cumprir seu propósito com segurança, integridade e confiança.

---

## Lote 5 — Recuperação, Restauração e Retorno Controlado

---

## 185. A natureza da recuperação

Recuperação é o processo através do qual a Plataforma UNO restabelece capacidades, relações, estados, garantias e condições suficientes para voltar a cumprir seu propósito depois de uma degradação, interrupção, contingência, emergência, crise ou desastre.

Recuperar não significa apenas:

- reiniciar;
- religar;
- reinstalar;
- reconectar;
- reabrir;
- substituir um componente;
- silenciar alertas.

Uma capacidade somente será considerada recuperada quando puder demonstrar, dentro do escopo aplicável:

- identidade;
- integridade;
- funcionalidade;
- segurança;
- autoridade;
- consistência;
- capacidade;
- confiabilidade;
- rastreabilidade;
- conformidade;
- continuidade;
- possibilidade de acompanhamento.

> O retorno aparente de uma função não comprova a recuperação da operação que dependia dela.

---

## 186. Recuperação como processo multidimensional

A recuperação deverá considerar simultaneamente as dimensões:

- técnica;
- operacional;
- informacional;
- humana;
- cognitiva;
- organizacional;
- institucional;
- jurídica;
- regulatória;
- econômica;
- territorial;
- reputacional;
- ambiental.

Uma recuperação poderá estar:

- tecnicamente concluída;
- operacionalmente parcial;
- institucionalmente pendente;
- humanamente incompleta;
- juridicamente condicionada.

Essas dimensões deverão permanecer visíveis.

---

## 187. Restauração, recuperação, reconstrução e normalização

### 187.1 Restauração

É o restabelecimento de um componente, estado, dado, serviço ou capacidade previamente existente.

### 187.2 Recuperação

É o restabelecimento das condições necessárias para que a operação volte a produzir resultados legítimos e sustentáveis.

### 187.3 Reconstrução

É a criação ou recomposição de uma capacidade quando o estado anterior não pode, não deve ou não é conveniente ser restaurado diretamente.

### 187.4 Normalização

É o retorno progressivo às condições ordinárias de operação, governança, autoridade e nível de serviço.

Esses processos poderão ocorrer em sequência ou simultaneamente.

Restaurar um servidor não recupera automaticamente uma Missão.

Recuperar uma Missão não normaliza automaticamente toda a organização.

---

## 188. Objetivos de recuperação

Cada capacidade deverá declarar objetivos de recuperação compatíveis com sua criticidade.

Os objetivos deverão considerar:

- tempo máximo tolerável de interrupção;
- perda máxima tolerável de dados;
- capacidade mínima necessária;
- sequência de restauração;
- dependências;
- recursos;
- critérios de validação;
- risco residual aceitável.

Os objetivos não deverão ser definidos apenas por conveniência técnica.

Deverão refletir:

- necessidades humanas;
- compromissos;
- direitos;
- normas;
- contratos;
- Missões;
- impactos territoriais;
- valor público.

---

## 189. Tempo objetivo de recuperação

O tempo objetivo de recuperação representa o período dentro do qual uma capacidade deverá ser restaurada ou substituída após uma interrupção.

Ele deverá ser definido considerando:

- criticidade;
- impacto;
- alternativas;
- capacidade residual;
- custo;
- complexidade;
- dependências;
- obrigações legais;
- vulnerabilidade dos afetados.

O objetivo deverá ser realista, testado e sustentado por capacidade concreta.

Um prazo declarado sem meios para cumpri-lo será apenas expectativa, não garantia.

---

## 190. Ponto objetivo de recuperação

O ponto objetivo de recuperação define o limite tolerável de perda temporal de dados ou estado.

Poderá determinar, por exemplo, que a recuperação aceite:

- nenhuma perda;
- segundos;
- minutos;
- horas;
- um ciclo operacional;
- um período previamente acordado.

Essa definição deverá considerar:

- natureza dos dados;
- irreversibilidade;
- impacto sobre pessoas;
- valor probatório;
- obrigações legais;
- capacidade de reconstrução;
- custo da perda;
- possibilidade de reconciliação.

Nem todo dado terá o mesmo objetivo.

---

## 191. Tempo máximo tolerável de interrupção

O tempo máximo tolerável de interrupção representa o limite após o qual a ausência da capacidade produz consequência inaceitável.

Quando esse limite se aproximar, a UNO deverá:

- escalar;
- ativar alternativa;
- reduzir escopo;
- mobilizar recursos;
- comunicar;
- rever prioridades;
- considerar reconstrução.

O tempo máximo tolerável poderá ser menor do que o prazo técnico previsto para reparo.

Nessa situação, deverá existir modo alternativo.

---

## 192. Unidade mínima de recuperação

A unidade mínima de recuperação é o menor conjunto coerente que poderá ser restaurado sem produzir uma operação incompleta ou enganosa.

Ela poderá incluir:

- serviço;
- dados;
- identidade;
- regras;
- permissões;
- integrações;
- registros;
- operadores;
- procedimentos;
- comunicação.

Restaurar componentes isolados sem suas relações poderá produzir funcionamento aparente e resultados inválidos.

---

## 193. Prioridade de recuperação

A prioridade deverá considerar:

1. proteção de pessoas;
2. contenção de danos;
3. identidade e autoridade;
4. comunicação essencial;
5. segurança;
6. evidências;
7. dados essenciais;
8. funções vitais;
9. Missões críticas;
10. dependências estruturais;
11. funções de apoio;
12. funções complementares.

A prioridade não deverá ser determinada apenas por:

- facilidade;
- visibilidade;
- pressão política;
- influência econômica;
- ordem de solicitação;
- preferência técnica.

---

## 194. Dependências de recuperação

Uma capacidade poderá depender de outras para ser recuperada.

O plano deverá identificar:

- predecessoras;
- sucessoras;
- dependências circulares;
- recursos compartilhados;
- pontos únicos de falha;
- capacidades substitutas;
- dependências externas;
- dependências humanas;
- dependências normativas.

O mapa estabelecido no arquivo 017 deverá orientar o sequenciamento.

---

## 195. Grafo de recuperação

A recuperação deverá ser representada como conjunto de relações e não apenas como lista linear.

O grafo deverá indicar:

- o que precisa retornar primeiro;
- o que pode ocorrer em paralelo;
- o que depende de validação;
- o que está bloqueado;
- onde existem conflitos;
- quais recursos são disputados;
- quais caminhos alternativos existem.

Quando uma dependência não puder ser restaurada, o grafo deverá permitir selecionar uma rota alternativa.

---

## 196. Plano de recuperação

Todo plano deverá conter:

- escopo;
- objetivos;
- responsáveis;
- dependências;
- recursos;
- sequência;
- procedimentos;
- ambientes;
- fontes de restauração;
- critérios de validação;
- comunicação;
- riscos;
- reversão;
- reconciliação;
- encerramento.

O plano deverá possuir versão, validade e responsável por manutenção.

---

## 197. Estratégias de recuperação

A recuperação poderá utilizar:

- reparo;
- reinicialização controlada;
- restauração de cópia;
- reversão de versão;
- substituição;
- redundância;
- reconstrução;
- migração;
- reexecução;
- recomposição manual;
- reconciliação;
- operação alternativa;
- cooperação federada.

A estratégia deverá ser escolhida conforme:

- tempo;
- risco;
- integridade;
- custo;
- capacidade;
- reversibilidade;
- confiança;
- impacto.

---

## 198. Reparo

O reparo busca corrigir a capacidade existente.

Antes de realizá-lo, deverão ser preservados:

- estado;
- evidências;
- registros;
- configuração;
- dados;
- versão;
- contexto.

O reparo não deverá destruir informações necessárias à análise da ocorrência.

---

## 199. Reinicialização controlada

Reiniciar poderá resolver falhas transitórias, mas não deverá ser utilizado como resposta automática sem compreensão mínima.

A reinicialização deverá avaliar:

- perda de estado;
- interrupção adicional;
- dependências;
- sessões;
- dados pendentes;
- possibilidade de repetição;
- evidências;
- retorno seguro.

Reinicializações repetidas sem investigação poderão ocultar degradação progressiva.

---

## 200. Reversão

A reversão retorna uma capacidade a um estado anterior conhecido.

Ela deverá verificar:

- confiabilidade do estado anterior;
- compatibilidade;
- alterações posteriores;
- dados produzidos;
- dependências;
- vulnerabilidades conhecidas;
- possibilidade de perda.

A versão anterior não será automaticamente segura apenas por ter funcionado no passado.

---

## 201. Restauração por cópia de segurança

A restauração deverá confirmar:

- origem;
- data;
- integridade;
- completude;
- proteção;
- compatibilidade;
- cadeia de custódia;
- presença de comprometimento;
- capacidade de leitura;
- possibilidade de reconciliação.

Uma cópia existente não será considerada recuperável até ser testada.

A restauração não deverá sobrescrever a única evidência disponível sem preservação prévia.

---

## 202. Reconstrução a partir de eventos

Quando a arquitetura preservar eventos confiáveis, o estado poderá ser reconstruído mediante reprocessamento.

Esse processo deverá considerar:

- ordem;
- idempotência;
- duplicidade;
- lacunas;
- temporalidade;
- versões;
- dependências;
- efeitos externos;
- validação.

A reconstrução deverá demonstrar que o estado resultante corresponde suficientemente à realidade institucional.

---

## 203. Recomposição manual

Quando registros automáticos forem insuficientes, a recomposição poderá utilizar:

- documentos;
- registros físicos;
- relatos;
- comunicações;
- evidências externas;
- confirmações;
- fontes institucionais;
- auditoria.

Toda recomposição manual deverá indicar:

- fonte;
- responsável;
- grau de confiança;
- divergências;
- limitações;
- validação.

---

## 204. Reconstrução

A reconstrução será necessária quando:

- o estado anterior não puder ser recuperado;
- a arquitetura anterior for insegura;
- a infraestrutura tiver sido destruída;
- a capacidade tiver perdido legitimidade;
- dependências antigas não estiverem mais disponíveis;
- a restauração reproduzir vulnerabilidade inaceitável.

A reconstrução deverá preservar propósito e invariantes, ainda que a forma seja alterada.

---

## 205. Ambiente de recuperação

A recuperação deverá ocorrer, quando possível, em ambiente separado e controlado.

Esse ambiente deverá possuir:

- isolamento;
- acesso limitado;
- recursos suficientes;
- registro;
- proteção de dados;
- ferramentas validadas;
- capacidade de teste;
- possibilidade de descarte;
- controle de versões.

O ambiente não deverá introduzir novas dependências sem registro.

---

## 206. Fonte confiável de recuperação

Toda recuperação deverá identificar sua fonte confiável.

A fonte poderá ser:

- cópia de segurança;
- réplica;
- versão assinada;
- repositório;
- registro institucional;
- imagem de sistema;
- documentação oficial;
- infraestrutura reserva;
- provedor secundário.

A confiança deverá ser verificada, não presumida.

---

## 207. Preservação forense

Quando houver suspeita de:

- ataque;
- fraude;
- manipulação;
- violação;
- erro grave;
- responsabilidade jurídica;
- comprometimento institucional;

a recuperação deverá preservar evidências forenses.

Poderão ser preservados:

- imagens;
- logs;
- dispositivos;
- estados;
- comunicações;
- credenciais;
- versões;
- registros temporais;
- cadeia de custódia.

A urgência de restaurar não deverá eliminar a capacidade de compreender o acontecimento.

---

## 208. Recuperação de identidade

A capacidade recuperada deverá provar:

- o que é;
- qual versão possui;
- quem a controla;
- quais credenciais utiliza;
- quais permissões foram restauradas;
- qual autoridade a reconhece.

Credenciais potencialmente comprometidas não deverão ser reutilizadas apenas para acelerar o retorno.

---

## 209. Recuperação de autoridade

Após contingências que alteraram papéis ou delegações, a UNO deverá:

- revisar permissões;
- revogar acessos extraordinários;
- restabelecer competências ordinárias;
- confirmar responsáveis;
- registrar transferências;
- eliminar autoridades expiradas.

Uma operação tecnicamente recuperada poderá continuar institucionalmente vulnerável se poderes extraordinários permanecerem ativos.

---

## 210. Recuperação de dados

A recuperação deverá verificar:

- completude;
- integridade;
- consistência;
- atualidade;
- proveniência;
- confidencialidade;
- disponibilidade;
- rastreabilidade;
- compatibilidade semântica.

Dados recuperados deverão ser classificados como:

- confirmados;
- reconciliados;
- provisórios;
- incompletos;
- suspeitos;
- indisponíveis.

---

## 211. Reconciliação de dados

Quando diferentes modos operacionais produzirem registros separados, a reconciliação deverá identificar:

- duplicidades;
- conflitos;
- lacunas;
- divergências temporais;
- alterações concorrentes;
- efeitos externos;
- decisões dependentes;
- registros não confirmados.

A resolução deverá considerar:

- autoridade da fonte;
- ordem real dos fatos;
- propósito;
- evidência;
- impacto;
- direitos;
- consistência global.

---

## 212. Idempotência

Operações reexecutadas durante recuperação não deverão produzir efeitos duplicados indevidos.

A arquitetura deverá buscar idempotência para:

- pagamentos;
- notificações;
- registros;
- solicitações;
- encaminhamentos;
- execução de Missões;
- atualizações;
- provisionamento.

Quando não houver idempotência, deverá existir controle explícito de repetição.

---

## 213. Recuperação de processos em andamento

A UNO deverá classificar processos interrompidos como:

- concluídos;
- parcialmente concluídos;
- pendentes;
- falhos;
- cancelados;
- desconhecidos;
- passíveis de reexecução;
- dependentes de confirmação.

Nenhum processo deverá ser reexecutado automaticamente quando puder produzir:

- duplicidade;
- pagamento repetido;
- obrigação adicional;
- dano;
- conflito;
- perda de direitos.

---

## 214. Recuperação das Missões

Uma Missão afetada deverá ser reavaliada quanto a:

- propósito;
- necessidade atual;
- contexto;
- responsáveis;
- recursos;
- prazo;
- riscos;
- resultados parciais;
- dependências;
- continuidade.

A recuperação poderá determinar:

- retomada;
- replanejamento;
- redução;
- transferência;
- suspensão;
- encerramento;
- criação de nova Missão.

Nem toda Missão deverá ser retomada exatamente do ponto em que parou.

---

## 215. Recuperação humana

Pessoas que participaram da contingência poderão necessitar de:

- descanso;
- substituição;
- apoio;
- acompanhamento;
- esclarecimento;
- proteção;
- reconhecimento;
- capacitação;
- reintegração.

O retorno técnico não deverá exigir que equipes continuem operando sob fadiga acumulada.

A recuperação humana deverá fazer parte do plano.

---

## 216. Recuperação organizacional

A organização deverá recompor:

- papéis;
- turnos;
- capacidade;
- comunicação;
- processos;
- recursos;
- confiança interna;
- prioridades;
- responsabilidades.

Estruturas temporárias deverão ser encerradas ou formalmente avaliadas antes de qualquer permanência.

---

## 217. Recuperação institucional

A recuperação institucional poderá exigir:

- prestação de contas;
- comunicação pública;
- correção de decisões;
- reparação;
- revisão de governança;
- recomposição de confiança;
- cooperação com autoridades;
- atualização de normas;
- reconhecimento de falhas.

A instituição não deverá declarar-se recuperada enquanto impactos relevantes sobre pessoas e confiança permanecerem ignorados.

---

## 218. Recuperação territorial

Territórios afetados poderão recuperar-se em ritmos diferentes.

A UNO deverá representar:

- capacidades locais;
- acesso;
- infraestrutura;
- populações;
- recursos;
- instituições;
- riscos;
- dependências.

A normalização global não deverá apagar territórios ainda degradados.

---

## 219. Validação técnica

A validação deverá comprovar:

- inicialização correta;
- conectividade;
- integridade;
- desempenho;
- capacidade;
- segurança;
- compatibilidade;
- estabilidade;
- observabilidade;
- recuperação de erros.

Testes deverão incluir condições normais e limites relevantes.

---

## 220. Validação funcional

A capacidade deverá provar que realiza a função para a qual existe.

A validação deverá utilizar:

- cenários reais ou representativos;
- entradas válidas;
- entradas inválidas;
- exceções;
- limites;
- resultados esperados;
- participação de operadores;
- confirmação de usuários quando pertinente.

---

## 221. Validação de segurança

Antes do retorno, deverão ser verificadas:

- identidades;
- credenciais;
- permissões;
- segmentação;
- vulnerabilidades;
- logs;
- integridade;
- configurações;
- segredos;
- acessos temporários.

A recuperação não deverá reintroduzir uma ameaça ainda ativa.

---

## 222. Validação normativa

A capacidade recuperada deverá respeitar:

- legislação;
- regulamentação;
- normas técnicas;
- NRs aplicáveis;
- contratos;
- políticas;
- consentimentos;
- obrigações de registro.

Uma solução temporária não deverá tornar-se operação normal sem validação normativa completa.

---

## 223. Validação operacional

Operadores deverão confirmar que:

- procedimentos são executáveis;
- informações estão disponíveis;
- filas estão coerentes;
- recursos são suficientes;
- comunicação está funcionando;
- responsabilidades estão claras;
- escalonamentos estão disponíveis;
- carga pode ser sustentada.

---

## 224. Validação independente

Capacidades críticas deverão, quando possível, ser validadas por pessoa ou instância diferente de quem realizou a recuperação.

A validação independente reduz:

- viés;
- omissão;
- pressa;
- conflito de interesses;
- falsa percepção de sucesso.

---

## 225. Critérios de aceitação

Cada recuperação deverá possuir critérios objetivos e contextuais de aceitação.

Poderão incluir:

- testes concluídos;
- dados reconciliados;
- riscos controlados;
- capacidade mínima comprovada;
- dependências disponíveis;
- permissões revisadas;
- usuários informados;
- monitoramento ativo;
- plano de reversão pronto;
- responsáveis presentes.

---

## 226. Risco residual

Risco residual é o risco que permanece depois das medidas de recuperação.

Ele deverá ser:

- identificado;
- avaliado;
- comunicado;
- atribuído;
- aceito por autoridade competente;
- monitorado;
- tratado posteriormente.

A ausência de risco zero não impede retorno.

Mas o risco residual não poderá ser ocultado para acelerar a normalização.

---

## 227. Aceitação de risco

A aceitação deverá registrar:

- risco;
- impacto;
- probabilidade;
- afetados;
- controles existentes;
- duração;
- responsável;
- justificativa;
- plano de tratamento;
- revisão.

Pessoas sem autoridade ou sem conhecimento suficiente não deverão aceitar riscos em nome de toda a instituição.

---

## 228. Retorno progressivo

O retorno deverá ocorrer em etapas quando a complexidade justificar.

Poderá seguir:

### Etapa 1 — Recuperação isolada

A capacidade é restaurada sem usuários ou dependências externas.

### Etapa 2 — Validação controlada

São executados testes e verificações.

### Etapa 3 — Ativação limitada

Um pequeno escopo é habilitado.

### Etapa 4 — Observação intensiva

Resultados, falhas e desempenho são acompanhados.

### Etapa 5 — Ampliação progressiva

Usuários, territórios ou volumes são aumentados.

### Etapa 6 — Reconciliação

Estados produzidos durante a contingência são integrados.

### Etapa 7 — Normalização

Limites extraordinários são removidos gradualmente.

### Etapa 8 — Encerramento

A contingência é formalmente finalizada.

---

## 229. Grupos de retorno

A ativação limitada poderá utilizar:

- equipe interna;
- ambiente piloto;
- território selecionado;
- usuários voluntários;
- pequena amostra;
- organização parceira;
- capacidade não crítica.

A seleção deverá evitar expor populações vulneráveis a testes inadequados.

---

## 230. Monitoramento reforçado

Durante o retorno, deverão ser acompanhados:

- disponibilidade;
- erros;
- desempenho;
- segurança;
- integridade;
- filas;
- satisfação;
- impacto;
- comportamento das dependências;
- sinais de regressão.

A ausência de alertas técnicos não substituirá observação humana e institucional.

---

## 231. Critérios de pausa

O retorno deverá ser pausado quando houver:

- regressão;
- erro inesperado;
- inconsistência;
- risco crescente;
- perda de confiança;
- saturação;
- falha de dependência;
- resultado incompatível;
- incapacidade de monitoramento.

Pausar o retorno não será considerado fracasso.

Será exercício de responsabilidade.

---

## 232. Critérios de reversão

O retorno deverá ser revertido quando:

- a segurança for comprometida;
- dados forem corrompidos;
- impactos se propagarem;
- critérios de aceitação deixarem de ser atendidos;
- a capacidade residual cair abaixo do mínimo;
- a autoridade determinar;
- o plano de recuperação falhar.

A reversão deverá retornar ao último estado seguro conhecido.

---

## 233. Impedimentos ao retorno

A UNO não deverá retornar à normalidade quando:

- a causa ativa permanecer sem contenção;
- dados essenciais forem inconfiáveis;
- dependências críticas não tiverem sido validadas;
- identidade ou autoridade estiverem incertas;
- riscos residuais excederem limites;
- monitoramento estiver indisponível;
- operadores não estiverem preparados;
- obrigações normativas não forem atendidas;
- públicos afetados não tiverem canais adequados;
- a capacidade de reversão for inexistente em contexto crítico.

---

## 234. Normalização operacional

A normalização deverá remover progressivamente:

- filas extraordinárias;
- limites temporários;
- canais alternativos;
- controles compensatórios;
- modos manuais;
- restrições;
- recursos de reserva;
- coordenações especiais.

Cada remoção deverá ser validada.

---

## 235. Normalização da autoridade

A normalização deverá:

- revogar delegações;
- devolver competências;
- encerrar salas extraordinárias;
- remover acessos temporários;
- restaurar separação de funções;
- atualizar responsáveis;
- registrar transições.

Nenhuma autoridade extraordinária deverá permanecer ativa por esquecimento.

---

## 236. Normalização da comunicação

A comunicação deverá informar:

- o que foi recuperado;
- o que ainda permanece limitado;
- riscos residuais;
- pendências;
- direitos;
- canais;
- próximos passos.

A mensagem “serviço normalizado” somente deverá ser utilizada quando o escopo comunicado realmente estiver normalizado.

---

## 237. Encerramento técnico e encerramento institucional

### Encerramento técnico

Ocorre quando as capacidades técnicas foram restauradas e validadas.

### Encerramento operacional

Ocorre quando fluxos, equipes, recursos e Missões retornaram a condição sustentável.

### Encerramento institucional

Ocorre quando autoridade, responsabilidade, comunicação, obrigações e confiança receberam tratamento suficiente.

Esses encerramentos poderão ocorrer em momentos diferentes.

---

## 238. Pendências pós-recuperação

Pendências deverão ser convertidas em:

- ações corretivas;
- Missões;
- riscos registrados;
- melhorias;
- investigações;
- reparações;
- revisões normativas;
- desenvolvimento de capacidades.

Nenhuma pendência relevante deverá desaparecer com o encerramento.

---

## 239. Dívida de contingência

Soluções temporárias poderão produzir dívida:

- técnica;
- operacional;
- humana;
- normativa;
- financeira;
- organizacional;
- institucional.

Essa dívida deverá ser:

- identificada;
- quantificada quando possível;
- priorizada;
- atribuída;
- acompanhada;
- eliminada.

A solução temporária não deverá tornar-se arquitetura permanente sem avaliação.

---

## 240. Antipadrões de recuperação

A UNO deverá evitar:

### 240.1 Reiniciar e declarar resolvido

Confundir desaparecimento do sintoma com recuperação.

### 240.2 Restaurar sem preservar evidências

Destruir a capacidade de compreender a ocorrência.

### 240.3 Recuperar por facilidade

Priorizar componentes simples enquanto funções essenciais permanecem indisponíveis.

### 240.4 Restaurar vulnerabilidades

Reconstruir exatamente a condição que produziu a falha.

### 240.5 Reconciliar pelo último registro

Ignorar autoridade, temporalidade e contexto.

### 240.6 Testar em populações vulneráveis

Transferir riscos de recuperação para quem possui menor capacidade de proteção.

### 240.7 Retornar sem reversão

Ampliar operação sem poder voltar ao estado seguro.

### 240.8 Normalizar autoridade por esquecimento

Manter poderes extraordinários ativos.

### 240.9 Ocultar risco residual

Declarar recuperação integral apesar de limitações conhecidas.

### 240.10 Encerrar sem tratar pessoas

Considerar a operação recuperada enquanto equipes e afetados permanecem desassistidos.

---

## 241. Invariantes da recuperação

Toda recuperação deverá preservar:

1. evidência;
2. identidade;
3. integridade;
4. autoridade;
5. segurança;
6. rastreabilidade;
7. reversibilidade;
8. validação;
9. comunicação;
10. responsabilidade;
11. memória;
12. aprendizado.

---

## 242. Garantias do Lote 5

A Plataforma UNO deverá garantir que:

- toda capacidade crítica possua objetivo de recuperação;
- toda recuperação respeite dependências;
- toda fonte de restauração seja validada;
- toda recomposição preserve proveniência;
- toda reexecução evite duplicidade;
- toda Missão interrompida seja reavaliada;
- toda recuperação humana seja considerada;
- toda capacidade recuperada seja testada;
- todo retorno crítico possua validação independente;
- todo risco residual possua responsável;
- toda normalização revogue exceções;
- toda pendência gere tratamento;
- nenhum retorno seja declarado apenas pelo desaparecimento de alertas.

---

## 243. Princípios consolidados

A Engenharia Oficial reconhece que:

1. restauração técnica não é recuperação integral;
2. recuperação deverá refletir criticidade e propósito;
3. dependências determinam sequenciamento;
4. cópia não testada não é garantia;
5. evidências deverão preceder alterações destrutivas;
6. reconstruir poderá ser melhor do que restaurar;
7. dados recuperados precisam de proveniência;
8. processos interrompidos exigem classificação;
9. pessoas também precisam ser recuperadas;
10. território e organização podem recuperar-se em ritmos diferentes;
11. validação deverá abranger função, segurança e conformidade;
12. risco residual deverá permanecer visível;
13. retorno deverá ser gradual;
14. reversão deverá permanecer possível;
15. normalização inclui devolver autoridade;
16. contingência encerrada ainda poderá produzir trabalho;
17. solução temporária gera dívida quando não é retirada;
18. recuperar é restabelecer confiança suficiente para servir novamente.

---

## 244. Transição para o próximo lote

A recuperação e o retorno controlado estabelecidos neste lote permitem restaurar capacidades sem confundir funcionamento aparente com normalidade legítima.

O próximo lote concluirá este arquivo estabelecendo:

- memória da contingência;
- preservação institucional;
- análise pós-ocorrência;
- aprendizagem;
- responsabilização;
- reparação;
- exercícios;
- simulações;
- revisão dos planos;
- evolução da resiliência;
- indicadores;
- garantias finais;
- encerramento oficial do arquivo 018.

A recuperação devolve capacidade à operação.

O aprendizado transforma a contingência em inteligência para que a instituição não precise enfrentar o mesmo futuro com a mesma fragilidade.

---

## Lote 6 — Memória, Aprendizado e Evolução da Resiliência

---

## 245. A contingência como fonte de conhecimento

Toda contingência revela propriedades da operação que nem sempre podem ser plenamente conhecidas durante condições normais.

Ela torna visíveis:

- dependências ocultas;
- limites reais;
- capacidades superestimadas;
- capacidades subestimadas;
- fragilidades;
- concentrações;
- comportamentos emergentes;
- lacunas de autoridade;
- insuficiências de comunicação;
- vulnerabilidades humanas;
- inadequações procedimentais;
- forças institucionais;
- formas espontâneas de cooperação.

A ocorrência não deverá ser lembrada apenas como interrupção.

Ela deverá ser transformada em conhecimento capaz de fortalecer:

- prevenção;
- percepção;
- decisão;
- preparação;
- resposta;
- recuperação;
- governança;
- confiança;
- continuidade.

> Uma instituição que retorna à operação sem aprender retorna à mesma fragilidade.

---

## 246. Memória da contingência

A memória da contingência é o conjunto estruturado de registros necessários para compreender:

- o que aconteceu;
- como foi percebido;
- como evoluiu;
- quem foi afetado;
- quais decisões foram tomadas;
- quais ações foram executadas;
- quais resultados foram produzidos;
- como ocorreu a recuperação;
- o que deverá mudar.

A memória deverá ser:

- íntegra;
- temporal;
- contextual;
- atribuível;
- acessível conforme autoridade;
- protegida;
- preservada;
- pesquisável;
- vinculada às evidências.

Ela não deverá depender exclusivamente da memória pessoal dos participantes.

---

## 247. Registro oficial da ocorrência

Cada contingência deverá possuir um registro oficial contendo, no mínimo:

- identificador;
- título;
- estado;
- severidade;
- escopo;
- início observado;
- início declarado;
- término técnico;
- término operacional;
- término institucional;
- origem;
- causa conhecida ou presumida;
- capacidades afetadas;
- dependências;
- pessoas e organizações afetadas;
- responsáveis;
- autoridades;
- decisões;
- ações;
- comunicações;
- recursos utilizados;
- recuperação;
- riscos residuais;
- pendências;
- aprendizados;
- recomendações.

O registro deverá manter versões e histórico de alterações.

---

## 248. Linha do tempo consolidada

A linha do tempo final deverá reunir:

- sinais anteriores;
- alertas;
- detecção;
- confirmação;
- ativação;
- escalonamentos;
- mudanças de estado;
- modos degradados;
- decisões;
- falhas;
- contenções;
- comunicações;
- restaurações;
- regressões;
- validações;
- normalização;
- encerramento.

Ela deverá distinguir:

- quando algo aconteceu;
- quando foi percebido;
- quando foi compreendido;
- quando foi comunicado;
- quando recebeu resposta.

As diferenças entre esses momentos deverão ser analisadas.

---

## 249. Preservação das evidências

As evidências deverão ser preservadas conforme:

- relevância;
- sensibilidade;
- finalidade;
- obrigação legal;
- valor institucional;
- necessidade de auditoria;
- necessidade de aprendizado.

Poderão incluir:

- logs;
- métricas;
- eventos;
- mensagens;
- gravações autorizadas;
- imagens;
- documentos;
- versões;
- configurações;
- decisões;
- entrevistas;
- registros físicos;
- dados territoriais;
- artefatos técnicos;
- relatórios de terceiros.

A preservação deverá respeitar:

- privacidade;
- proteção de dados;
- sigilo;
- cadeia de custódia;
- controle de acesso;
- retenção;
- descarte seguro.

---

## 250. Cadeia de custódia

Quando uma evidência puder sustentar:

- investigação;
- responsabilização;
- reparação;
- obrigação regulatória;
- processo jurídico;
- decisão institucional;

deverá existir cadeia de custódia.

Ela deverá registrar:

- origem;
- responsável pela coleta;
- data e hora;
- método;
- integridade;
- armazenamento;
- acessos;
- transferências;
- utilização;
- descarte.

A ausência de cadeia de custódia poderá reduzir a confiabilidade da evidência.

---

## 251. Memória técnica e memória humana

A memória técnica registra:

- estados;
- sinais;
- configurações;
- eventos;
- erros;
- comandos;
- alterações;
- resultados.

A memória humana registra:

- percepções;
- dificuldades;
- incertezas;
- decisões;
- pressões;
- improvisações;
- efeitos;
- necessidades.

As duas deverão ser preservadas.

Logs poderão mostrar que uma ação ocorreu.

Somente o relato contextual poderá explicar por que ela foi necessária ou como afetou as pessoas.

---

## 252. Memória organizacional

A memória organizacional deverá registrar:

- atuação das equipes;
- distribuição de responsabilidades;
- capacidade mobilizada;
- conflitos;
- cooperação;
- lacunas;
- passagens de turno;
- decisões de gestão;
- efeitos sobre a organização.

Ela deverá apoiar a evolução de:

- papéis;
- estruturas;
- treinamentos;
- recursos;
- governança;
- procedimentos.

---

## 253. Memória institucional

A memória institucional deverá preservar:

- valores aplicados;
- princípios ameaçados;
- decisões extraordinárias;
- autoridades exercidas;
- direitos afetados;
- obrigações;
- compromissos;
- comunicação pública;
- confiança;
- reparações.

Ela permitirá compreender se a instituição permaneceu coerente com seu propósito durante a adversidade.

---

## 254. Análise pós-ocorrência

Toda contingência relevante deverá passar por análise pós-ocorrência.

A análise deverá buscar:

- compreender;
- aprender;
- corrigir;
- fortalecer;
- reparar.

Ela não deverá começar pela busca de culpados.

Também não deverá excluir a possibilidade de responsabilização quando houver:

- negligência;
- violação;
- fraude;
- omissão;
- abuso;
- descumprimento consciente;
- ocultação.

Compreender causas e atribuir responsabilidades são processos relacionados, mas não idênticos.

---

## 255. Condições para iniciar a análise

A análise deverá começar quando:

- a situação estiver suficientemente estabilizada;
- evidências essenciais estiverem preservadas;
- participantes puderem contribuir;
- riscos imediatos estiverem controlados;
- o processo não comprometer a recuperação.

Em contingências prolongadas, análises parciais poderão ocorrer antes do encerramento.

---

## 256. Participantes da análise

A análise poderá incluir:

- operadores;
- coordenadores;
- especialistas;
- responsáveis pelas capacidades;
- curadores;
- agentes;
- organizações parceiras;
- representantes territoriais;
- usuários afetados;
- segurança;
- jurídico;
- auditoria;
- autoridade institucional.

A composição deverá representar diferentes perspectivas.

A análise não deverá ser conduzida somente por quem projetou ou operou a capacidade afetada.

---

## 257. Perguntas fundamentais

A análise deverá responder:

1. O que deveria acontecer?
2. O que realmente aconteceu?
3. Qual foi a primeira divergência relevante?
4. Como a ocorrência foi percebida?
5. Quais sinais existiam anteriormente?
6. Por que esses sinais foram ou não compreendidos?
7. Quais dependências contribuíram?
8. Quais controles funcionaram?
9. Quais controles falharam?
10. Quais decisões ajudaram?
11. Quais decisões ampliaram o impacto?
12. Quais improvisações foram necessárias?
13. Quem foi afetado?
14. Como as pessoas foram protegidas?
15. Como ocorreu a recuperação?
16. O que permaneceu pendente?
17. O que deverá mudar?
18. Como comprovar que a mudança foi implementada?

---

## 258. Causa imediata

A causa imediata é o acontecimento diretamente associado à manifestação da falha.

Exemplos:

- componente interrompido;
- configuração incorreta;
- recurso esgotado;
- comando executado;
- dependência indisponível;
- ausência de operador;
- ruptura de comunicação.

A causa imediata não deverá encerrar a análise.

---

## 259. Causas contribuintes

Causas contribuintes são condições que permitiram, agravaram ou prolongaram a ocorrência.

Poderão incluir:

- ausência de redundância;
- documentação insuficiente;
- alerta ignorado;
- capacitação inadequada;
- dependência não mapeada;
- autoridade confusa;
- pressão excessiva;
- recurso insuficiente;
- manutenção adiada;
- norma desatualizada;
- comunicação fragmentada;
- teste inexistente.

---

## 260. Causa sistêmica

A causa sistêmica corresponde a propriedades mais profundas da arquitetura ou da instituição.

Poderá estar relacionada a:

- incentivos;
- governança;
- cultura;
- concentração;
- financiamento;
- planejamento;
- desenho;
- crescimento;
- distribuição de responsabilidade;
- ausência de aprendizado;
- tolerância repetida a desvios.

A análise deverá evitar a conclusão simplista de “erro humano” quando o sistema:

- tornou o erro provável;
- não permitiu sua detecção;
- não conteve seus efeitos;
- exigiu comportamento insustentável;
- não forneceu recursos adequados.

---

## 261. Análise de barreiras

A UNO deverá identificar:

- quais barreiras deveriam impedir a ocorrência;
- quais deveriam detectá-la;
- quais deveriam conter sua propagação;
- quais deveriam preservar a recuperação;
- quais funcionaram;
- quais falharam;
- quais não existiam.

Barreiras poderão ser:

- técnicas;
- humanas;
- procedimentais;
- organizacionais;
- institucionais;
- normativas;
- territoriais.

---

## 262. Análise de decisões

Cada decisão relevante deverá ser avaliada conforme o contexto disponível naquele momento.

A análise deverá considerar:

- informações existentes;
- incertezas;
- tempo disponível;
- autoridade;
- alternativas;
- riscos;
- pressão;
- consequências previsíveis.

Decisões não deverão ser julgadas apenas com conhecimento adquirido posteriormente.

---

## 263. Hipóteses e níveis de confiança

Quando a causa não puder ser comprovada integralmente, a análise deverá registrar:

- hipóteses;
- evidências;
- limitações;
- divergências;
- níveis de confiança;
- investigação futura.

Uma narrativa conveniente não deverá substituir a verdade ainda desconhecida.

---

## 264. Impacto real

O impacto deverá ser analisado em dimensões:

- pessoas;
- serviços;
- Missões;
- dados;
- recursos;
- organizações;
- territórios;
- ambiente;
- finanças;
- contratos;
- direitos;
- confiança;
- continuidade.

A análise deverá distinguir:

- impacto observado;
- impacto estimado;
- impacto evitado;
- impacto residual;
- impacto potencial.

---

## 265. Impacto evitado

A resposta poderá impedir consequências maiores.

Esses resultados deverão ser reconhecidos para identificar:

- controles eficazes;
- decisões acertadas;
- cooperação;
- redundâncias;
- capacidades que devem ser preservadas.

A análise não deverá registrar somente falhas.

Ela deverá compreender também aquilo que funcionou.

---

## 266. Responsabilização

A responsabilização deverá identificar:

- dever;
- autoridade;
- ação ou omissão;
- contexto;
- evidência;
- consequência;
- possibilidade de prevenção;
- direito de manifestação;
- medida adequada.

Ela deverá ser:

- proporcional;
- fundamentada;
- transparente;
- revisável;
- compatível com a legislação;
- separada de perseguição.

---

## 267. Cultura justa

A cultura de aprendizado deverá distinguir:

- erro compreensível;
- limitação de capacidade;
- falha de processo;
- comportamento imprudente;
- negligência;
- violação consciente;
- fraude;
- sabotagem.

Punir indiscriminadamente reduz a comunicação de falhas.

Eliminar toda responsabilização destrói confiança.

A cultura justa deverá proteger o relato honesto e responsabilizar condutas incompatíveis com a função exercida.

---

## 268. Reparação

Quando a contingência produzir dano, a instituição deverá avaliar:

- reconhecimento;
- comunicação;
- correção;
- restituição;
- compensação;
- suporte;
- restauração de direitos;
- revisão de decisão;
- garantia de não repetição.

A reparação deverá considerar pessoas e comunidades afetadas, não apenas ativos institucionais.

---

## 269. Plano de ações corretivas

Toda recomendação aceita deverá ser convertida em ação contendo:

- descrição;
- finalidade;
- responsável;
- prioridade;
- prazo;
- recursos;
- dependências;
- critério de conclusão;
- evidência;
- risco tratado;
- acompanhamento.

Recomendações genéricas como “melhorar comunicação” não serão suficientes.

---

## 270. Tipos de ação

As ações poderão ser:

- corretivas;
- preventivas;
- protetivas;
- adaptativas;
- estruturais;
- procedimentais;
- normativas;
- educativas;
- tecnológicas;
- organizacionais;
- institucionais;
- reparatórias.

Cada ação deverá indicar qual fragilidade pretende tratar.

---

## 271. Priorização das ações

As ações deverão ser priorizadas conforme:

- risco;
- impacto;
- urgência;
- recorrência;
- vulnerabilidade;
- dependências;
- esforço;
- custo;
- alcance;
- obrigação normativa;
- capacidade de reduzir consequências.

A facilidade de implementação não deverá substituir relevância.

---

## 272. Acompanhamento das ações

O encerramento da contingência não encerrará o acompanhamento das ações.

Elas deverão permanecer visíveis até:

- conclusão;
- validação;
- substituição justificada;
- cancelamento autorizado.

Ações vencidas deverão gerar:

- alerta;
- revisão;
- escalonamento;
- reavaliação do risco.

---

## 273. Validação da melhoria

Uma ação somente será considerada concluída quando houver evidência de que:

- foi implementada;
- funciona;
- reduz o risco;
- não criou vulnerabilidade superior;
- é compreendida pelos responsáveis;
- está integrada à operação;
- pode ser mantida.

Documentar uma mudança não significa incorporá-la.

---

## 274. Atualização da Engenharia Oficial

Aprendizados que alterem propriedades permanentes deverão atualizar:

- princípios;
- modelos;
- invariantes;
- garantias;
- padrões;
- procedimentos;
- catálogos;
- mapas;
- contratos arquiteturais;
- documentação.

A Engenharia Oficial deverá permanecer como fonte normativa viva.

Mudanças deverão possuir:

- justificativa;
- proveniência;
- revisão;
- compatibilidade;
- histórico;
- autoridade.

---

## 275. Atualização dos mapas de dependência

A contingência poderá revelar dependências:

- desconhecidas;
- mal classificadas;
- indiretas;
- humanas;
- territoriais;
- institucionais;
- concentradas;
- frágeis.

O mapa estabelecido no arquivo 017 deverá ser atualizado com:

- relações observadas;
- impactos reais;
- caminhos de propagação;
- substituições;
- tempos;
- falhas;
- novas criticidades.

---

## 276. Atualização dos modos degradados

Os modos utilizados deverão ser avaliados quanto a:

- ativação;
- clareza;
- capacidade;
- limites;
- controles;
- comunicação;
- duração;
- reconciliação;
- retorno.

Modos improvisados que funcionaram poderão ser formalizados depois de avaliação.

Modos planejados que falharam deverão ser corrigidos ou retirados.

---

## 277. Atualização dos planos de recuperação

Os planos deverão incorporar:

- tempos reais;
- recursos reais;
- dependências descobertas;
- falhas de procedimentos;
- dificuldades humanas;
- problemas de acesso;
- incompatibilidades;
- resultados de validação.

O plano deverá refletir capacidade comprovada, não expectativa histórica.

---

## 278. Conhecimento reutilizável

Os aprendizados deverão ser convertidos, conforme adequado, em:

- padrões;
- alertas;
- regras;
- checklists;
- procedimentos;
- treinamentos;
- cenários;
- testes;
- indicadores;
- componentes;
- capacidades;
- decisões orientadoras.

O conhecimento deverá ser acessível a quem precisar aplicá-lo.

---

## 279. Lições e padrões

Uma lição deverá informar:

- contexto;
- ocorrência;
- observação;
- significado;
- aplicabilidade;
- limites;
- recomendação;
- evidência.

Uma lição não deverá ser transformada em regra universal sem avaliar diferentes contextos.

---

## 280. Aprendizado assistido por inteligência artificial

Agentes poderão apoiar:

- consolidação de registros;
- construção da linha do tempo;
- correlação de eventos;
- identificação de padrões;
- comparação com ocorrências anteriores;
- descoberta de lacunas;
- elaboração de hipóteses;
- acompanhamento de ações;
- geração de cenários de teste.

A IA não deverá:

- inventar fatos;
- eliminar divergências;
- atribuir culpa autonomamente;
- ocultar limitações;
- substituir investigação;
- produzir narrativa definitiva sem validação.

---

## 281. Memória sem exposição indevida

O aprendizado deverá preservar conhecimento sem expor indevidamente:

- dados pessoais;
- informações sensíveis;
- segredos;
- vulnerabilidades exploráveis;
- pessoas afetadas;
- investigações;
- direitos.

Poderão existir versões:

- pública;
- operacional;
- técnica;
- institucional;
- restrita;
- anonimizada.

A restrição deverá proteger sem apagar responsabilidade.

---

## 282. Exercícios de contingência

A UNO deverá realizar exercícios para verificar:

- compreensão;
- papéis;
- comunicação;
- autoridade;
- procedimentos;
- recursos;
- modos degradados;
- recuperação;
- reconciliação;
- retorno.

Exercícios deverão possuir:

- objetivo;
- cenário;
- escopo;
- participantes;
- limites;
- critérios;
- observadores;
- segurança;
- registro;
- análise.

---

## 283. Tipos de exercício

### 283.1 Revisão orientada

Participantes analisam procedimentos e decisões sem executar mudanças.

### 283.2 Exercício de mesa

Um cenário é apresentado e os responsáveis discutem suas ações.

### 283.3 Simulação funcional

Capacidades específicas são exercitadas em ambiente controlado.

### 283.4 Teste técnico

Componentes, restaurações, redundâncias ou failovers são executados.

### 283.5 Simulação integrada

Pessoas, organizações, sistemas e comunicação respondem conjuntamente.

### 283.6 Exercício territorial

Condições físicas, comunitárias e institucionais locais são consideradas.

### 283.7 Simulação surpresa governada

Participantes não conhecem antecipadamente o cenário completo, mas existem limites e proteção.

### 283.8 Teste de reconstrução

A capacidade é reconstruída a partir de fontes oficiais.

---

## 284. Simulação não é ocorrência real

Toda simulação deverá ser explicitamente identificada.

Mensagens, painéis, registros e comunicações deverão apresentar a marcação:

> **SIMULAÇÃO**

Isso impedirá:

- mobilização indevida;
- confusão;
- pânico;
- decisões reais baseadas em cenário fictício;
- mistura com registros operacionais reais.

---

## 285. Segurança dos exercícios

Nenhum exercício deverá:

- colocar pessoas em risco;
- comprometer produção sem autorização;
- violar direitos;
- utilizar dados reais desnecessariamente;
- acionar autoridades indevidamente;
- enviar mensagens públicas ambíguas;
- eliminar capacidade de recuperação.

Deverá existir mecanismo de interrupção imediata.

---

## 286. Testes de restauração

Cópias de segurança e fontes de recuperação deverão ser testadas.

O teste deverá verificar:

- acessibilidade;
- integridade;
- tempo;
- completude;
- compatibilidade;
- segurança;
- documentação;
- capacidade das equipes.

O teste poderá utilizar amostras, mas capacidades críticas deverão passar periodicamente por restauração suficientemente representativa.

---

## 287. Testes de modo manual

A operação deverá verificar se pessoas conseguem sustentar:

- volume;
- qualidade;
- segurança;
- registro;
- comunicação;
- jornada;
- reconciliação.

Um modo manual que depende de capacidade humana inexistente não será uma contingência válida.

---

## 288. Testes de desconexão

Unidades que possam operar desconectadas deverão testar:

- ativação;
- identidade;
- dados locais;
- permissões;
- registro;
- autonomia;
- duração;
- reconexão;
- reconciliação.

---

## 289. Testes de autoridade

Exercícios deverão verificar se:

- responsáveis são localizáveis;
- substitutos são conhecidos;
- delegações funcionam;
- limites são compreendidos;
- poderes extraordinários expiram;
- a autoridade retorna ao estado normal.

---

## 290. Testes de comunicação

Deverão verificar:

- canais principais;
- canais alternativos;
- autenticidade;
- alcance;
- acessibilidade;
- coerência;
- cadência;
- correção;
- confirmação de recebimento.

---

## 291. Cenários

Os cenários deverão incluir:

- falha única;
- múltiplas falhas;
- falha de dependência;
- saturação;
- indisponibilidade de pessoas;
- perda de conectividade;
- perda de energia;
- comprometimento de dados;
- ataque;
- desastre territorial;
- conflito de autoridade;
- desinformação;
- fornecedor indisponível;
- recuperação incompleta;
- falha durante o retorno.

A seleção deverá refletir riscos reais e emergentes.

---

## 292. Frequência dos exercícios

A frequência deverá considerar:

- criticidade;
- mudança;
- histórico;
- obrigação normativa;
- rotatividade;
- complexidade;
- dependências;
- risco;
- resultado anterior.

Capacidades críticas deverão ser exercitadas com maior frequência.

Mudanças significativas deverão provocar novo teste.

---

## 293. Maturidade de contingência

A maturidade poderá evoluir pelos seguintes níveis:

### Nível 0 — Inexistente

Não há preparação reconhecível.

### Nível 1 — Reativo

A instituição responde somente depois da ruptura.

### Nível 2 — Documentado

Existem planos, mas sua execução não foi comprovada.

### Nível 3 — Exercitado

Planos e papéis são testados periodicamente.

### Nível 4 — Integrado

Contingência faz parte da arquitetura, operação e governança.

### Nível 5 — Adaptativo

A instituição aprende continuamente, antecipa riscos e evolui suas capacidades.

A maturidade deverá ser comprovada por evidências.

---

## 294. Indicadores de percepção

Poderão ser acompanhados:

- tempo entre sinal e detecção;
- percentual de ocorrências detectadas automaticamente;
- percentual relatado por pessoas;
- sinais não reconhecidos;
- falsos positivos;
- cobertura de monitoramento;
- atualidade dos mapas.

---

## 295. Indicadores de ativação

Poderão incluir:

- tempo entre detecção e classificação;
- tempo entre classificação e declaração;
- tempo de mobilização;
- qualidade do registro;
- precisão da classificação inicial;
- quantidade de reclassificações;
- contenções bem-sucedidas.

---

## 296. Indicadores de operação degradada

Poderão incluir:

- capacidade residual;
- funções preservadas;
- funções suspensas;
- volume atendido;
- fila;
- impacto sobre usuários;
- duração;
- erros;
- controles compensatórios;
- carga humana;
- violações de limites.

---

## 297. Indicadores de recuperação

Poderão incluir:

- tempo de restauração;
- tempo de recuperação;
- perda de dados;
- taxa de sucesso;
- regressões;
- reversões;
- dependências recuperadas;
- reconciliações pendentes;
- testes concluídos;
- riscos residuais.

---

## 298. Indicadores humanos

Deverão considerar:

- jornada;
- fadiga;
- substituição;
- incidentes de segurança;
- capacidade cognitiva;
- necessidade de apoio;
- qualidade da passagem de turno;
- percepção das equipes;
- impacto sobre pessoas afetadas.

Eficiência não deverá ser medida isoladamente da condição humana.

---

## 299. Indicadores institucionais

Poderão incluir:

- transparência;
- cumprimento de obrigações;
- tempo de comunicação;
- correções públicas;
- reclamações;
- reparações;
- conflitos de autoridade;
- exceções vencidas;
- confiança;
- ações corretivas concluídas.

---

## 300. Indicadores de aprendizado

Poderão incluir:

- análises concluídas;
- ações implementadas;
- reincidência;
- riscos reduzidos;
- planos atualizados;
- exercícios realizados;
- lições reutilizadas;
- fragilidades eliminadas;
- tempo entre aprendizado e mudança.

Quantidade de relatórios não será prova de aprendizado.

---

## 301. Métricas sem distorção

Indicadores não deverão criar incentivos para:

- esconder incidentes;
- reduzir severidade artificialmente;
- acelerar encerramentos;
- evitar registro;
- transferir impacto;
- culpar operadores;
- declarar sucesso sem validação.

Toda métrica deverá ser acompanhada de contexto.

---

## 302. Revisão periódica da capacidade de contingência

A UNO deverá revisar:

- riscos;
- planos;
- responsáveis;
- contatos;
- recursos;
- dependências;
- fornecedores;
- modos;
- procedimentos;
- objetivos;
- cópias;
- ambientes;
- normas;
- treinamentos;
- evidências de teste.

A revisão deverá ocorrer:

- periodicamente;
- após contingências;
- após exercícios;
- após mudanças;
- após expansão;
- após alteração normativa;
- após mudança de fornecedor;
- após descoberta de dependência crítica.

---

## 303. Resiliência

Resiliência é a capacidade de:

- absorver;
- adaptar;
- continuar;
- recuperar;
- aprender;
- evoluir;

sem perder identidade, propósito, responsabilidade e legitimidade.

Resiliência não significa impedir toda falha.

Também não significa suportar indefinidamente condições inadequadas.

Ela exige reconhecer quando:

- resistir;
- reduzir;
- interromper;
- substituir;
- reconstruir;
- transformar.

---

## 304. Resiliência sem romantização

A UNO não deverá utilizar o conceito de resiliência para:

- normalizar precariedade;
- exigir sacrifício contínuo;
- adiar investimento;
- sobrecarregar pessoas;
- tolerar falhas repetidas;
- justificar ausência de proteção;
- manter dívida operacional.

Resiliência verdadeira reduz sofrimento futuro.

---

## 305. Antifragilidade limitada

Algumas capacidades poderão tornar-se melhores depois de enfrentar variações e falhas controladas.

Entretanto, a UNO não deverá provocar sofrimento, risco ou dano real com a justificativa de fortalecer o sistema.

O fortalecimento deverá ocorrer por:

- testes seguros;
- simulações;
- aprendizado;
- redundância;
- diversidade;
- revisão;
- preparação.

---

## 306. Diversidade de capacidades

A resiliência poderá ser ampliada por diversidade de:

- tecnologias;
- fornecedores;
- pessoas;
- conhecimentos;
- organizações;
- territórios;
- canais;
- estratégias;
- fontes de dados.

Diversidade não deverá criar complexidade sem governança.

Ela deverá reduzir concentrações e ampliar caminhos legítimos de continuidade.

---

## 307. Reservas e folgas

Sistemas permanentemente operados no limite não possuem capacidade real de adaptação.

A UNO deverá preservar folgas proporcionais em:

- processamento;
- armazenamento;
- rede;
- pessoas;
- tempo;
- orçamento;
- materiais;
- autoridade;
- comunicação.

Folga não será desperdício quando necessária à continuidade.

---

## 308. Aprendizado federado

Organizações participantes poderão compartilhar aprendizados sem expor indevidamente:

- dados pessoais;
- segredos;
- vulnerabilidades;
- informações protegidas.

O aprendizado federado poderá disseminar:

- padrões;
- riscos;
- medidas;
- indicadores;
- cenários;
- procedimentos;
- lições.

Cada organização preservará sua responsabilidade e contexto.

---

## 309. Biblioteca institucional de contingências

A UNO deverá manter biblioteca contendo:

- ocorrências;
- análises;
- lições;
- planos;
- procedimentos;
- modos;
- exercícios;
- resultados;
- ações;
- evidências autorizadas.

A biblioteca deverá permitir pesquisa por:

- capacidade;
- natureza;
- causa;
- impacto;
- território;
- organização;
- dependência;
- modo;
- recuperação;
- aprendizado.

---

## 310. Conhecimento vivo

O conhecimento deverá possuir:

- responsável;
- versão;
- validade;
- proveniência;
- revisão;
- contexto;
- relação com ocorrências;
- relação com normas;
- relação com capacidades.

Conhecimento desatualizado poderá produzir contingência adicional.

---

## 311. Antipadrões de aprendizado

A UNO deverá evitar:

### 311.1 Relatório sem ação

Documentar extensamente e não corrigir.

### 311.2 Culpado único

Reduzir causa sistêmica a uma pessoa.

### 311.3 Memória seletiva

Preservar apenas fatos favoráveis.

### 311.4 Lição genérica

Produzir recomendações sem responsáveis e critérios.

### 311.5 Exercício decorativo

Simular apenas cenários nos quais tudo funciona.

### 311.6 Cópia não testada

Declarar recuperabilidade sem restauração.

### 311.7 Resiliência por sacrifício

Transferir continuamente falhas para pessoas.

### 311.8 Encerramento administrativo

Fechar registros sem concluir ações.

### 311.9 Métrica manipulável

Criar incentivo para ocultar ocorrências.

### 311.10 Repetição normalizada

Aceitar recorrência como parte inevitável da operação.

---

## 312. Invariantes do aprendizado

Toda aprendizagem deverá preservar:

1. verdade;
2. contexto;
3. evidência;
4. memória;
5. dignidade;
6. responsabilidade;
7. proporcionalidade;
8. contestabilidade;
9. aplicabilidade;
10. acompanhamento;
11. evolução;
12. compromisso de não repetição evitável.

---

## 313. Garantias do Lote 6

A Plataforma UNO deverá garantir que:

- toda contingência relevante produza memória;
- toda memória preserve contexto;
- toda análise diferencie causa imediata e sistêmica;
- toda responsabilização respeite evidência e justiça;
- todo dano relevante seja considerado para reparação;
- toda recomendação aceita gere ação;
- toda ação possua responsável e validação;
- todo plano seja atualizado pela experiência;
- toda cópia crítica seja testada;
- todo exercício seja identificado como simulação;
- toda métrica seja interpretada com contexto;
- toda recorrência relevante provoque revisão;
- nenhum aprendizado permaneça apenas como documento.

---

## 314. Garantias permanentes do arquivo 018

A Engenharia Oficial estabelece que:

1. nenhuma contingência será confundida com improvisação sem limites;
2. nenhuma operação degradada será apresentada como normal;
3. nenhuma continuidade justificará risco inaceitável;
4. nenhuma função essencial será preservada sem considerar pessoas;
5. nenhuma urgência eliminará responsabilidade;
6. nenhuma autoridade extraordinária será ilimitada ou permanente;
7. nenhuma redução ocorrerá sem prioridade compreensível;
8. nenhuma automação crítica permanecerá sem supervisão;
9. nenhuma operação local perderá vínculo com propósito e memória;
10. nenhuma substituição será declarada equivalente sem validação;
11. nenhuma recuperação será aceita apenas pelo retorno técnico;
12. nenhum dado recuperado será utilizado sem integridade suficiente;
13. nenhum retorno crítico ocorrerá sem possibilidade de pausa ou reversão;
14. nenhuma normalização manterá exceções por esquecimento;
15. nenhuma contingência será encerrada sem pendências identificadas;
16. nenhuma ocorrência relevante desaparecerá da memória institucional;
17. nenhuma análise será reduzida à busca simplista de culpados;
18. nenhuma resiliência será construída pela exploração contínua de pessoas;
19. toda experiência deverá fortalecer a capacidade futura de servir;
20. a forma de operar poderá mudar, mas propósito, dignidade, responsabilidade e legitimidade deverão permanecer.

---

## 315. Modelo integrado de contingência

A Engenharia estabelecida neste arquivo pode ser compreendida pelo seguinte ciclo:

1. perceber alteração;
2. compreender a condição;
3. classificar impacto;
4. proteger o essencial;
5. declarar a contingência;
6. ativar o modo adequado;
7. coordenar responsabilidades;
8. conter propagação;
9. operar com capacidade residual;
10. recuperar dependências;
11. restaurar ou reconstruir capacidades;
12. validar;
13. retornar progressivamente;
14. reconciliar estados;
15. normalizar autoridade e operação;
16. preservar memória;
17. analisar;
18. corrigir;
19. exercitar;
20. evoluir.

Esse ciclo não deverá ser tratado como uma sequência rígida.

Ele representa uma estrutura de consciência operacional que deverá adaptar-se à realidade sem perder seus invariantes.

---

## 316. Resultado arquitetural

Com este documento, a Plataforma UNO passa a reconhecer que a continuidade institucional não depende da tentativa de manter todas as funções ativas em qualquer circunstância.

Ela depende da capacidade de:

- reconhecer limites;
- declarar a realidade;
- preservar o essencial;
- reduzir com consciência;
- interromper com responsabilidade;
- mobilizar capacidades;
- coordenar legitimamente;
- recuperar com método;
- retornar com segurança;
- aprender profundamente.

A contingência deixa de ser uma reação improvisada à falha.

Passa a ser parte constitutiva da própria Engenharia Oficial.

---

## 317. Declaração final

> A Plataforma UNO não deverá prometer que nunca falhará.  
> Deverá construir a capacidade de reconhecer a falha, impedir que ela destrua o propósito, proteger quem depende da operação, recuperar o que foi perdido e retornar mais consciente do que antes.

Quando a capacidade diminuir, a responsabilidade deverá permanecer.

Quando a forma normal se tornar impossível, o propósito deverá orientar a adaptação.

Quando a interrupção ocorrer, a memória deverá preservar a continuidade.

Quando a recuperação começar, a pressa não deverá substituir a validação.

Quando a normalidade retornar, a instituição não deverá esquecer aquilo que a contingência revelou.

---

## 318. Relação com os próximos arquivos

Este documento estabelece a arquitetura geral de:

- contingência;
- recuperação;
- operação degradada;
- coordenação;
- retorno;
- aprendizado.

Os próximos arquivos aprofundarão capacidades específicas relacionadas à continuidade operacional:

- `019-backup-restauracao-e-recuperabilidade.md`;
- `020-continuidade-operacional-e-disaster-recovery.md`;
- `021-runbooks-playbooks-e-procedimentos-operacionais.md`;
- `022-automacao-operacional-e-auto-remediacao.md`;
- `023-agentes-operacionais-e-operacao-assistida-por-ia.md`;
- `024-seguranca-na-operacao-e-resposta-operacional.md`;
- `025-operacao-de-dados-integracoes-e-fluxos.md`;
- `026-operacao-federada-e-multi-organizacao.md`;
- `027-turnos-escalas-handover-e-continuidade-humana.md`;
- `028-operacao-critica-crise-e-modos-extraordinarios.md`;
- `029-metricas-kpis-e-inteligencia-operacional.md`;
- `030-aprendizagem-operacional-e-melhoria-continua.md`;
- `031-capacidade-adaptativa-e-resiliencia-operacional.md`;
- `032-modelo-integrado-de-ops.md`;
- `033-invariantes-e-garantias-de-ops.md`.

---

## 319. Encerramento oficial

O arquivo `018-contingencia-recuperacao-e-operacao-degradada.md` estabelece oficialmente:

- os fundamentos da contingência;
- os estados e níveis operacionais;
- as classificações de impacto;
- os modos de operação degradada;
- os princípios de funcionalidade mínima;
- a ativação e a coordenação;
- os limites de autoridade extraordinária;
- a recuperação e a restauração;
- o retorno progressivo;
- a memória da ocorrência;
- o aprendizado institucional;
- a evolução permanente da resiliência.

> A contingência preserva o que não pode ser perdido.  
> A recuperação reconstrói o que ainda precisa servir.  
> O aprendizado impede que a instituição retorne à mesma fragilidade.

---

**Fim do arquivo `018-contingencia-recuperacao-e-operacao-degradada.md`.**
