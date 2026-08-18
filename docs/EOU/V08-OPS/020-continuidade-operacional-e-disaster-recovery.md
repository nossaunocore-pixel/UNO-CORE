# 020 — Continuidade Operacional e Disaster Recovery

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial de:

- continuidade operacional;
- continuidade institucional;
- continuidade de serviços;
- continuidade de capacidades;
- continuidade humana;
- continuidade tecnológica;
- continuidade informacional;
- recuperação de desastres;
- ativação de estruturas alternativas;
- preservação de funções essenciais;
- reconstrução coordenada;
- retorno controlado à normalidade;
- aprendizagem após interrupções graves.

Seu propósito é assegurar que a Plataforma UNO, suas organizações, serviços, capacidades, pessoas, agentes, dados, infraestruturas e relações institucionais possam atravessar eventos adversos sem perder:

- identidade;
- propósito;
- legitimidade;
- responsabilidade;
- memória;
- governança;
- coerência;
- capacidade de servir;
- compromisso com a vida e a dignidade humana.

Continuidade não será tratada apenas como permanência de sistemas ligados.

Será compreendida como a capacidade de uma organização preservar aquilo que precisa continuar existindo, ainda que sua forma de operar tenha de mudar temporariamente.

Disaster Recovery não será reduzido à restauração de servidores.

Será a capacidade coordenada de recuperar recursos tecnológicos, informacionais e operacionais após eventos capazes de comprometer severamente a estrutura ordinária de funcionamento.

---

## Princípio central

> A continuidade existe para preservar o propósito diante da interrupção.  
> A recuperação existe para reconstruir capacidades sem reconstruir o erro que produziu a perda.

A Plataforma UNO deverá ser capaz de:

1. perceber ameaças à continuidade;
2. compreender o impacto possível;
3. identificar funções essenciais;
4. preservar pessoas e responsabilidades;
5. definir prioridades;
6. declarar níveis de interrupção;
7. ativar estratégias alternativas;
8. sustentar uma operação mínima legítima;
9. recuperar capacidades;
10. reconciliar estados;
11. retornar de forma controlada;
12. aprender e fortalecer a organização.

---

## Escopo

Este documento abrange:

- organizações;
- missões;
- serviços;
- capacidades;
- processos;
- sistemas;
- aplicações;
- dados;
- integrações;
- infraestrutura;
- fornecedores;
- agentes;
- automações;
- operadores;
- curadores;
- diretores;
- colaboradores;
- parceiros;
- comunidades;
- usuários;
- ambientes físicos;
- estruturas institucionais;
- dependências externas;
- recursos financeiros;
- conhecimento;
- documentação;
- comunicação;
- autoridade;
- memória organizacional.

A continuidade deverá ser pensada desde a concepção da arquitetura.

Não será um mecanismo acrescentado somente depois que a operação estiver pronta.

---

## Relação com os arquivos anteriores

Este arquivo é construído sobre as capacidades estabelecidas em:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`;
- `018-contingencia-recuperacao-e-operacao-degradada.md`;
- `019-backup-restauracao-e-recuperabilidade.md`.

Esses documentos fornecem as bases para:

- reconhecer o estado operacional;
- compreender capacidade e saturação;
- estabelecer compromissos de disponibilidade;
- mapear dependências e impactos;
- operar sob condições degradadas;
- preservar e restaurar estados.

O presente arquivo integra essas capacidades em um modelo institucional de continuidade e recuperação diante de interrupções amplas.

---

## Estrutura do documento

Este arquivo será desenvolvido em seis lotes:

### Lote 1 — Fundamentos da Continuidade Operacional e do Disaster Recovery

Estabelece conceitos, princípios, objetivos, escopo, responsabilidades e invariantes fundamentais.

### Lote 2 — Análise de Impacto, Criticidade e Requisitos de Continuidade

Estabelece a Análise de Impacto nos Negócios e na Missão, os requisitos temporais, as prioridades e as tolerâncias à interrupção.

### Lote 3 — Estratégias de Continuidade e Estruturas Alternativas

Estabelece estratégias humanas, operacionais, tecnológicas, informacionais, físicas, financeiras, federadas e institucionais.

### Lote 4 — Planos, Ativação, Coordenação e Recuperação de Desastres

Estabelece planos, níveis de ativação, estruturas de comando, recuperação coordenada, comunicação e retorno.

### Lote 5 — Governança, Segurança, Conformidade e Relações Externas

Estabelece autoridade, responsabilidades, segurança, fornecedores, contratos, leis, normas, auditoria e prestação de contas.

### Lote 6 — Exercícios, Evidências, Maturidade, Aprendizagem e Encerramento

Estabelece testes, simulações, indicadores, evidências, aprendizagem, maturidade e garantias permanentes.

---

# Lote 1 — Fundamentos da Continuidade Operacional e do Disaster Recovery

## 1. Continuidade como capacidade institucional

Continuidade operacional é a capacidade de uma organização manter ou recuperar funções essenciais diante de interrupções.

Essa capacidade envolve mais do que tecnologia.

Ela depende de:

- pessoas;
- autoridade;
- conhecimento;
- recursos;
- comunicação;
- instalações;
- fornecedores;
- dados;
- processos;
- relações;
- confiança;
- memória;
- governança.

Uma organização poderá possuir sistemas redundantes e, ainda assim, não possuir continuidade se não souber quem decide, o que deve ser priorizado e como suas responsabilidades serão preservadas.

## 2. Continuidade do propósito

O primeiro objeto de continuidade é o propósito.

Processos, ferramentas, instalações e tecnologias poderão mudar durante uma interrupção.

O propósito legítimo da organização deverá permanecer reconhecível.

Toda estratégia deverá responder:

- o que precisa continuar sendo realizado;
- para quem;
- por qual razão;
- sob qual autoridade;
- dentro de quais limites;
- com quais garantias;
- durante quanto tempo.

## 3. Continuidade não é imobilidade

Continuidade não significa manter a forma ordinária de operação a qualquer custo.

Uma organização consciente poderá:

- reduzir serviços;
- suspender funções não essenciais;
- mudar canais;
- transferir responsabilidades;
- operar manualmente;
- utilizar locais alternativos;
- substituir fornecedores;
- modificar frequências;
- limitar automações;
- reorganizar equipes.

A forma poderá mudar para que o propósito permaneça.

## 4. Continuidade operacional

Continuidade operacional é a capacidade de preservar ou restabelecer a execução das funções necessárias à missão.

Ela abrange:

- atividades;
- fluxos;
- serviços;
- recursos;
- decisões;
- controles;
- comunicação;
- acompanhamento;
- prestação de contas.

## 5. Continuidade institucional

Continuidade institucional é a capacidade de preservar:

- identidade;
- autoridade;
- legitimidade;
- memória;
- responsabilidade;
- governança;
- compromissos;
- relações;
- princípios;
- sucessão.

Uma operação tecnicamente funcional poderá ser institucionalmente inválida se perder sua autoridade, responsabilidade ou coerência normativa.

## 6. Continuidade de serviços

Continuidade de serviços é a capacidade de manter ou recuperar entregas realizadas a pessoas, organizações e comunidades.

Ela deverá considerar:

- disponibilidade;
- qualidade mínima;
- acessibilidade;
- segurança;
- prioridade;
- canais alternativos;
- capacidade reduzida;
- comunicação;
- dependências;
- impacto da indisponibilidade.

## 7. Continuidade de capacidades

A continuidade deverá preservar não apenas serviços visíveis, mas também as capacidades que os tornam possíveis.

Entre essas capacidades estão:

- perceber;
- compreender;
- decidir;
- coordenar;
- comunicar;
- executar;
- monitorar;
- registrar;
- aprender;
- governar;
- recuperar.

## 8. Continuidade humana

Continuidade humana é a capacidade de preservar pessoas, competências, responsabilidades, saúde, segurança e possibilidade de atuação.

Ela deverá considerar:

- indisponibilidade de pessoas;
- sobrecarga;
- fadiga;
- afastamento;
- evacuação;
- trabalho remoto;
- sucessão;
- substituição;
- comunicação;
- apoio psicológico;
- condições familiares;
- acessibilidade;
- proteção de colaboradores.

Nenhum plano deverá tratar pessoas como recursos inesgotáveis.

## 9. Continuidade cognitiva

Continuidade cognitiva é a preservação da capacidade de compreender a realidade e tomar decisões responsáveis durante condições adversas.

Ela depende de:

- informação confiável;
- percepção contextual;
- comunicação;
- memória;
- documentação;
- critérios;
- especialistas;
- diversidade de perspectivas;
- espaços de deliberação;
- proteção contra desinformação.

## 10. Continuidade informacional

Continuidade informacional é a capacidade de preservar acesso legítimo a informações necessárias à operação e à decisão.

Ela deverá considerar:

- disponibilidade;
- integridade;
- autenticidade;
- confidencialidade;
- proveniência;
- temporalidade;
- atualização;
- interpretação;
- rastreabilidade;
- recuperação.

## 11. Continuidade tecnológica

Continuidade tecnológica é a capacidade de manter ou recuperar os recursos tecnológicos necessários às funções essenciais.

Ela poderá envolver:

- infraestrutura;
- redes;
- computação;
- armazenamento;
- aplicações;
- integrações;
- identidades;
- certificados;
- observabilidade;
- automações;
- agentes;
- dispositivos;
- telecomunicações.

## 12. Continuidade física

Continuidade física é a capacidade de operar diante da indisponibilidade de instalações, equipamentos, acessos ou ambientes.

Ela deverá considerar:

- locais alternativos;
- segurança;
- energia;
- água;
- climatização;
- transporte;
- acessibilidade;
- controle de acesso;
- equipamentos;
- documentação física;
- condições ambientais.

## 13. Continuidade financeira

Continuidade financeira é a capacidade de preservar recursos suficientes para sustentar funções essenciais durante e após a interrupção.

Ela deverá considerar:

- reservas;
- liquidez;
- pagamentos;
- recebimentos;
- folhas;
- fornecedores;
- acesso bancário;
- autoridades financeiras;
- fraudes;
- reconciliação;
- canais alternativos;
- limites emergenciais.

## 14. Continuidade jurídica e normativa

A continuidade deverá preservar a capacidade de reconhecer e cumprir obrigações legais, regulatórias, normativas e contratuais.

Emergência não suspende automaticamente:

- direitos;
- deveres;
- proteção de dados;
- segurança;
- responsabilidade;
- prestação de contas;
- dignidade;
- limites de autoridade.

Exceções somente poderão ser utilizadas quando possuírem fundamento legítimo e forem registradas.

## 15. Disaster Recovery

Disaster Recovery, ou recuperação de desastres, é a capacidade planejada de recuperar recursos tecnológicos e informacionais após evento de grande impacto.

O Disaster Recovery deverá abranger:

- infraestrutura;
- aplicações;
- dados;
- redes;
- identidades;
- integrações;
- configurações;
- segurança;
- monitoramento;
- validação;
- reconciliação;
- retorno.

## 16. Continuidade e Disaster Recovery

Continuidade operacional e Disaster Recovery são capacidades relacionadas, mas não idênticas.

A continuidade pergunta:

> Como a missão continuará sendo atendida?

O Disaster Recovery pergunta:

> Como os recursos tecnológicos e informacionais serão recuperados?

O Disaster Recovery sustenta a continuidade, mas não a substitui.

## 17. Continuidade e alta disponibilidade

Alta disponibilidade procura reduzir interrupções durante falhas previsíveis.

Continuidade prepara a organização para operar ou se recuperar quando a disponibilidade ordinária não for suficiente.

Um mecanismo de alta disponibilidade poderá falhar diante de:

- desastre regional;
- corrupção propagada;
- comprometimento administrativo;
- erro sistêmico;
- perda de fornecedor;
- indisponibilidade humana;
- evento físico;
- ruptura institucional.

## 18. Continuidade e contingência

Contingência é a resposta alternativa a uma condição adversa específica.

Continuidade integra múltiplas contingências, prioridades, autoridades e estratégias para preservar a missão como conjunto.

Uma contingência poderá manter determinada função.

O plano de continuidade deverá coordenar as funções necessárias à organização.

## 19. Continuidade e operação degradada

Operação degradada permite continuar servindo com capacidade, qualidade ou funcionalidade reduzidas.

Ela poderá constituir uma estratégia de continuidade.

Contudo, a continuidade também deverá definir:

- quando degradar;
- quanto degradar;
- por quanto tempo;
- quem autoriza;
- como comunicar;
- como recuperar;
- como retornar;
- como compensar impactos.

## 20. Continuidade e recuperação

Recuperação é o movimento de reconstrução de capacidades após perda ou interrupção.

Continuidade poderá utilizar recuperação, substituição, desvio, redistribuição, suspensão ou transformação.

Nem toda continuidade exige recuperar imediatamente a estrutura original.

## 21. Continuidade e resiliência

Resiliência é a capacidade de absorver, adaptar-se, recuperar-se e evoluir diante de mudanças e adversidades.

Continuidade é uma disciplina essencial da resiliência, mas não representa sua totalidade.

A continuidade preserva funções.

A resiliência também transforma a organização a partir da experiência.

## 22. Interrupção

Interrupção é qualquer condição que impeça, reduza ou ameace a execução normal de uma função.

Ela poderá ser:

- parcial;
- total;
- breve;
- prolongada;
- localizada;
- distribuída;
- previsível;
- inesperada;
- técnica;
- humana;
- física;
- institucional;
- ambiental;
- econômica;
- social.

## 23. Incidente de continuidade

Um incidente de continuidade ocorre quando uma interrupção ultrapassa a capacidade ordinária de resposta ou ameaça fazê-lo.

Esse incidente poderá exigir:

- coordenação ampliada;
- priorização institucional;
- ativação de planos;
- estruturas alternativas;
- mobilização de recursos;
- comunicação extraordinária;
- recuperação coordenada.

## 24. Crise

Crise é uma situação de elevada incerteza, impacto ou pressão que exige decisões extraordinárias e coordenação institucional.

Nem toda interrupção constitui crise.

Nem toda crise tem origem tecnológica.

Uma crise poderá envolver:

- confiança;
- reputação;
- pessoas;
- legitimidade;
- segurança;
- finanças;
- relações;
- continuidade da liderança;
- conflito entre prioridades.

## 25. Desastre

Desastre é um evento cuja extensão compromete significativamente recursos, instalações, tecnologias, pessoas ou capacidades necessárias à missão.

A classificação como desastre deverá considerar impacto, duração, extensão, recuperabilidade e capacidade disponível.

O desastre não deverá ser definido somente pelo tamanho do evento, mas pela relação entre o evento e a capacidade da organização de responder.

## 26. Evento adverso

Evento adverso é toda ocorrência capaz de produzir impacto negativo sobre a operação.

Poderão ser eventos adversos:

- falha tecnológica;
- ataque cibernético;
- perda de dados;
- incêndio;
- inundação;
- tempestade;
- deslizamento;
- interrupção elétrica;
- indisponibilidade de telecomunicação;
- epidemia;
- conflito;
- fraude;
- sabotagem;
- erro humano;
- falência de fornecedor;
- mudança regulatória;
- perda de acesso;
- desinformação;
- indisponibilidade de liderança.

## 27. Cenário de continuidade

Cenário é uma representação estruturada de condições adversas utilizada para planejamento, avaliação e exercício.

Um cenário deverá descrever:

- evento;
- extensão;
- duração;
- recursos afetados;
- capacidades indisponíveis;
- pessoas impactadas;
- dependências;
- incertezas;
- efeitos progressivos;
- limites;
- hipóteses.

## 28. Planejamento por impacto

A continuidade deverá ser planejada prioritariamente pelos impactos e capacidades perdidas, e não somente por causas específicas.

A mesma indisponibilidade de instalação poderá resultar de:

- incêndio;
- inundação;
- interdição;
- risco estrutural;
- falha energética;
- ameaça de segurança;
- restrição sanitária.

Planejar pelo impacto permite que a resposta permaneça útil diante de causas diferentes.

## 29. Planejamento por cenário

O planejamento por impacto deverá ser complementado por cenários capazes de revelar particularidades.

Um ataque cibernético, por exemplo, poderá exigir:

- preservação de evidências;
- isolamento;
- investigação;
- troca de credenciais;
- validação de integridade;
- comunicação regulatória.

Uma inundação poderá exigir:

- evacuação;
- local alternativo;
- proteção física;
- transporte;
- substituição de equipamentos.

## 30. Função essencial

Função essencial é aquela cuja interrupção ameaça de forma relevante:

- vida;
- dignidade;
- segurança;
- direitos;
- missão;
- legalidade;
- continuidade institucional;
- estabilidade financeira;
- confiança;
- valor público;
- capacidade de recuperação.

A essencialidade deverá ser demonstrada, e não apenas declarada.

## 31. Serviço crítico

Serviço crítico é aquele cuja indisponibilidade produz impacto incompatível com as tolerâncias estabelecidas.

A criticidade poderá variar conforme:

- tempo;
- local;
- população;
- contexto;
- dependências;
- volume;
- evento;
- obrigação;
- estação;
- horário.

## 32. Capacidade crítica

Uma capacidade será crítica quando sua ausência impedir múltiplas funções essenciais ou comprometer decisões fundamentais.

Exemplos incluem:

- identidade;
- comunicação;
- coordenação;
- pagamentos;
- observabilidade;
- dados operacionais;
- autoridade;
- conhecimento;
- segurança;
- recuperação.

## 33. Atividade prioritária

Atividade prioritária é aquela que deverá ser mantida ou recuperada antes de outras em determinado cenário.

Prioridade não é propriedade permanente e absoluta.

Ela deverá ser determinada pelo contexto, pelo impacto e pelo propósito.

## 34. Recurso crítico

Recurso crítico é aquele necessário a uma função essencial e cuja substituição, recuperação ou ausência exige tratamento específico.

Poderão ser recursos críticos:

- pessoas;
- instalações;
- equipamentos;
- sistemas;
- informações;
- fundos;
- credenciais;
- fornecedores;
- veículos;
- canais;
- energia;
- conectividade.

## 35. Dependência crítica

Dependência crítica é uma relação cuja falha pode interromper função essencial ou impedir sua recuperação.

Ela poderá ser:

- interna;
- externa;
- técnica;
- humana;
- física;
- financeira;
- informacional;
- jurídica;
- institucional.

Dependências críticas deverão ser identificadas antes da interrupção.

## 36. Ponto único de falha

Ponto único de falha é um componente, pessoa, fornecedor, autoridade ou recurso cuja perda produz interrupção sem alternativa suficiente.

A Plataforma UNO deverá:

- identificar;
- reduzir;
- substituir;
- distribuir;
- proteger;
- monitorar;
- testar;

os pontos únicos de falha relacionados às funções essenciais.

## 37. Ponto único de conhecimento

Conhecimento concentrado em uma única pessoa constitui risco de continuidade.

A organização deverá buscar:

- documentação;
- treinamento;
- sucessão;
- acompanhamento;
- revisão;
- compartilhamento;
- validação por terceiros;
- preservação da memória.

## 38. Ponto único de autoridade

A autoridade concentrada em pessoa ou mecanismo sem sucessão poderá impedir decisões durante uma interrupção.

Deverão existir:

- substitutos;
- delegações;
- limites;
- critérios;
- registros;
- canais emergenciais;
- mecanismos de revogação;
- retorno da autoridade ordinária.

## 39. Tolerância à interrupção

Tolerância à interrupção é o limite dentro do qual uma função poderá permanecer indisponível ou degradada sem produzir impacto inaceitável.

Ela deverá considerar:

- duração;
- qualidade;
- volume;
- população afetada;
- riscos;
- obrigações;
- efeitos acumulados;
- capacidade de compensação.

## 40. Período Máximo Tolerável de Interrupção

O Período Máximo Tolerável de Interrupção representa o tempo máximo pelo qual uma função poderá permanecer interrompida antes que seus impactos se tornem inaceitáveis.

Esse período deverá orientar:

- prioridade;
- estratégia;
- recursos;
- recuperação;
- escalonamento;
- exercícios.

## 41. Objetivo de Tempo de Recuperação

O RTO estabelece o tempo desejado para recuperar determinado serviço, recurso ou capacidade.

O RTO deverá ser inferior ao limite máximo tolerável e incluir margem suficiente para:

- validação;
- reconciliação;
- estabilização;
- comunicação;
- reintegração.

## 42. Objetivo de Ponto de Recuperação

O RPO estabelece a perda temporal máxima de dados ou estado que poderá ser tolerada.

Ele deverá ser definido conforme:

- criticidade;
- frequência de mudança;
- possibilidade de reconstrução;
- impacto;
- consistência;
- obrigações;
- efeitos externos.

## 43. Objetivo Mínimo de Continuidade

O Objetivo Mínimo de Continuidade define o nível mínimo aceitável de serviço durante a interrupção.

Ele poderá estabelecer:

- funções mantidas;
- quantidade mínima;
- capacidade mínima;
- canais disponíveis;
- localidades atendidas;
- público prioritário;
- controles indispensáveis;
- duração suportável.

## 44. Retorno à capacidade normal

A continuidade não termina quando o serviço volta a responder.

O retorno deverá considerar:

- estabilidade;
- integridade;
- segurança;
- desempenho;
- filas acumuladas;
- reconciliação;
- usuários;
- equipes;
- dados;
- monitoramento;
- riscos residuais;
- aprovação.

## 45. Prioridade da vida

Nenhuma meta de continuidade deverá colocar pessoas em risco desproporcional.

A preservação da vida, da integridade física, da saúde e da dignidade deverá preceder:

- proteção de equipamentos;
- cumprimento de metas;
- recuperação acelerada;
- preservação financeira;
- conveniência operacional.

## 46. Dignidade durante a interrupção

Planos deverão considerar como a interrupção afeta pessoas em condições diferentes.

Deverão ser observados:

- vulnerabilidade;
- deficiência;
- idade;
- saúde;
- acesso digital;
- mobilidade;
- idioma;
- renda;
- dependência do serviço;
- capacidade de resposta.

Continuidade não deverá proteger apenas aqueles que possuem mais recursos para suportar a interrupção.

## 47. Propósito antes da infraestrutura

A infraestrutura deverá ser recuperada conforme sua contribuição ao propósito.

Não se deverá recuperar primeiro aquilo que é mais fácil, mais visível ou tecnologicamente atraente quando outra capacidade for mais necessária à missão.

## 48. Contexto antes da prioridade

Prioridades deverão ser avaliadas segundo a realidade presente.

Um serviço normalmente secundário poderá tornar-se essencial em determinado evento.

Um serviço normalmente crítico poderá ser temporariamente substituído ou reduzido.

## 49. Responsabilidade antes da velocidade

A pressão por velocidade não eliminará a necessidade de:

- autoridade;
- registro;
- segurança;
- proporcionalidade;
- validação;
- prestação de contas.

Decisões rápidas deverão continuar sendo decisões responsáveis.

## 50. Governança antes da improvisação

Planos de continuidade deverão reduzir a dependência de improvisação desordenada.

A adaptação continuará necessária, mas deverá ocorrer dentro de:

- princípios;
- autoridades;
- limites;
- critérios;
- registros;
- mecanismos de revisão.

## 51. Evidência antes da confiança

A organização não deverá presumir que seus planos funcionarão apenas porque estão documentados.

A confiança deverá ser sustentada por:

- testes;
- exercícios;
- medições;
- evidências;
- revisões;
- correções;
- experiência.

## 52. Aprendizagem antes da repetição

Incidentes, exercícios e falhas deverão produzir aprendizado.

A organização não deverá repetir indefinidamente vulnerabilidades conhecidas sem:

- reconhecer;
- registrar;
- priorizar;
- corrigir;
- aceitar formalmente o risco.

## 53. Autonomia governada

Equipes, organizações e agentes poderão receber autonomia para agir durante interrupções.

Essa autonomia deverá possuir:

- escopo;
- limites;
- propósito;
- responsabilidade;
- rastreabilidade;
- escalonamento;
- supervisão;
- revisão posterior.

## 54. Cooperação

Continuidade exige cooperação entre:

- pessoas;
- equipes;
- organizações;
- fornecedores;
- autoridades;
- parceiros;
- comunidades;
- agentes;
- instituições públicas e privadas.

A cooperação deverá preservar autonomia, responsabilidades e fronteiras legítimas.

## 55. Neutralidade institucional

A continuidade deverá servir à missão e às pessoas, e não a interesses circunstanciais incompatíveis com os princípios da Engenharia Oficial.

Recursos emergenciais não poderão ser utilizados para:

- concentração indevida de poder;
- favorecimento ilegítimo;
- manipulação;
- exclusão arbitrária;
- ocultação de falhas;
- destruição de evidências.

## 56. Proporcionalidade

A resposta deverá ser proporcional:

- ao impacto;
- ao risco;
- à urgência;
- à duração;
- à população afetada;
- à capacidade disponível;
- à incerteza.

A maior resposta não será necessariamente a melhor.

A resposta correta será aquela suficiente e responsável para a realidade existente.

## 57. Temporalidade

Medidas extraordinárias deverão possuir:

- início identificável;
- autoridade;
- objetivo;
- duração;
- condição de revisão;
- condição de encerramento.

A exceção não deverá tornar-se operação permanente sem avaliação e formalização.

## 58. Rastreabilidade

Decisões relevantes deverão registrar:

- contexto;
- informações disponíveis;
- responsáveis;
- autoridade;
- alternativas;
- escolha;
- tempo;
- recursos;
- consequências;
- revisão.

A ausência de condições ideais não elimina a necessidade de preservar memória decisória.

## 59. Transparência

Partes legítimas deverão receber informações suficientes para compreender:

- o que ocorreu;
- quais serviços foram afetados;
- o que permanece disponível;
- quais alternativas existem;
- quais cuidados são necessários;
- quando haverá nova atualização;
- quem poderá ajudar.

A transparência deverá respeitar segurança, privacidade e investigação.

## 60. Comunicação como capacidade crítica

A comunicação deverá ser tratada como capacidade essencial de continuidade.

Sem comunicação, a organização poderá perder:

- coordenação;
- confiança;
- autoridade;
- percepção;
- prioridade;
- capacidade de orientar pessoas;
- capacidade de solicitar ajuda.

## 61. Canais alternativos

Planos deverão prever canais alternativos quando os canais ordinários estiverem indisponíveis.

Poderão ser utilizados:

- telefonia;
- mensagens;
- e-mail;
- rádio;
- aplicativos;
- painéis;
- portais;
- redes sociais;
- comunicação presencial;
- representantes;
- parceiros;
- canais públicos.

Nenhum canal único deverá ser presumido como universalmente disponível.

## 62. Fonte oficial de informação

Durante interrupções relevantes, deverá existir fonte reconhecível de informação oficial.

Essa fonte deverá:

- possuir autoridade;
- informar horário;
- indicar versão;
- distinguir fatos de hipóteses;
- corrigir informações;
- preservar histórico;
- evitar contradições;
- oferecer acessibilidade.

## 63. Desinformação

Planos deverão considerar a possibilidade de:

- boatos;
- mensagens falsas;
- personificação;
- informações desatualizadas;
- instruções conflitantes;
- manipulação;
- conteúdo produzido por agentes comprometidos.

Informações críticas deverão possuir mecanismos de autenticidade e confirmação.

## 64. Estrutura de autoridade

A continuidade deverá possuir estrutura de autoridade previamente definida.

Ela deverá estabelecer:

- quem percebe;
- quem avalia;
- quem declara;
- quem ativa;
- quem coordena;
- quem executa;
- quem comunica;
- quem aprova o retorno;
- quem encerra;
- quem revisa.

## 65. Autoridade ordinária

Sempre que possível, decisões deverão permanecer com as autoridades ordinárias.

A ativação de estruturas extraordinárias deverá ocorrer apenas quando:

- a estrutura ordinária estiver indisponível;
- o tempo não permitir sua atuação;
- a extensão do evento exigir coordenação ampliada;
- o plano estabelecer legitimamente essa transição.

## 66. Autoridade extraordinária

A autoridade extraordinária deverá possuir:

- fundamento;
- escopo;
- prazo;
- limites;
- registro;
- supervisão;
- prestação de contas;
- condição de devolução.

Ela não deverá tornar-se instrumento permanente de concentração de poder.

## 67. Delegação

A delegação deverá identificar:

- autoridade de origem;
- delegado;
- capacidade transferida;
- limites;
- duração;
- condições;
- deveres;
- forma de registro;
- possibilidade de revogação.

Delegação não elimina a responsabilidade correspondente.

## 68. Sucessão

Funções críticas deverão possuir sucessão planejada.

A sucessão deverá considerar:

- indisponibilidade;
- afastamento;
- conflito;
- perda de comunicação;
- incapacidade;
- mudança de organização;
- duração prolongada.

Sucessores deverão possuir acesso, conhecimento e legitimidade suficientes.

## 69. Papéis na continuidade

A estrutura poderá incluir:

- autoridade institucional;
- coordenação de continuidade;
- coordenação de recuperação tecnológica;
- responsáveis por serviços;
- responsáveis por dados;
- responsáveis por instalações;
- segurança;
- comunicação;
- jurídico;
- finanças;
- pessoas;
- fornecedores;
- curadores;
- operadores;
- agentes especializados.

Os papéis deverão ser adaptados à escala da organização.

## 70. Alta direção

A alta direção deverá:

- aprovar princípios;
- definir tolerâncias;
- garantir recursos;
- resolver conflitos;
- aceitar riscos;
- acompanhar maturidade;
- assegurar integração institucional;
- prestar contas.

Ela não deverá transferir integralmente a responsabilidade de continuidade à área tecnológica.

## 71. Responsável pela continuidade

O responsável pela continuidade deverá coordenar:

- metodologia;
- planejamento;
- análise;
- integração;
- exercícios;
- evidências;
- revisão;
- melhoria.

Esse responsável não será proprietário isolado da continuidade de todas as funções.

## 72. Proprietários de serviços e processos

Proprietários deverão:

- reconhecer impactos;
- definir necessidades;
- mapear dependências;
- participar de estratégias;
- validar planos;
- exercer recuperações;
- aceitar ou escalar riscos;
- manter informações atualizadas.

## 73. Equipe de Disaster Recovery

A equipe de Disaster Recovery deverá coordenar a recuperação dos recursos tecnológicos e informacionais.

Ela deverá atuar em integração com:

- continuidade;
- segurança;
- proprietários de serviços;
- dados;
- infraestrutura;
- fornecedores;
- comunicação;
- governança.

## 74. Segurança

A segurança deverá:

- avaliar ameaças;
- preservar evidências;
- controlar acessos;
- validar ambientes;
- proteger credenciais;
- acompanhar riscos;
- impedir propagação;
- apoiar retorno seguro.

Recuperar rapidamente um ambiente comprometido sem eliminar a causa poderá reconstruir a própria ameaça.

## 75. Gestão de pessoas

A gestão de pessoas deverá considerar:

- disponibilidade;
- segurança;
- saúde;
- escalas;
- substituição;
- contato;
- suporte;
- deslocamento;
- trabalho remoto;
- necessidades familiares;
- fadiga;
- recuperação pós-evento.

## 76. Comunicação institucional

A comunicação deverá produzir mensagens:

- verdadeiras;
- claras;
- consistentes;
- acessíveis;
- temporais;
- proporcionais;
- autorizadas;
- atualizáveis.

Ela deverá diferenciar:

- informação confirmada;
- avaliação;
- hipótese;
- orientação;
- decisão;
- simulação.

## 77. Jurídico e conformidade

As funções jurídicas e de conformidade deverão apoiar:

- interpretação normativa;
- notificações;
- preservação de direitos;
- contratos;
- exceções;
- registros;
- responsabilidade;
- comunicação com autoridades;
- proteção de dados;
- prestação de contas.

## 78. Finanças

A função financeira deverá assegurar:

- acesso legítimo a recursos;
- pagamentos essenciais;
- prevenção de fraude;
- limites emergenciais;
- registros;
- reconciliação;
- reservas;
- continuidade de fornecedores críticos.

## 79. Fornecedores

Fornecedores críticos deverão possuir responsabilidades de continuidade compatíveis com o serviço prestado.

A organização deverá compreender:

- o que o fornecedor protege;
- o que permanece sob responsabilidade interna;
- quais tempos são oferecidos;
- quais limites existem;
- como ocorre a comunicação;
- quais alternativas são possíveis;
- como ocorre a saída.

## 80. Organizações federadas

Em ambiente federado, cada organização deverá preservar:

- identidade;
- autonomia;
- autoridade;
- responsabilidade;
- dados;
- políticas;
- relações;
- capacidade de decisão.

A coordenação não deverá apagar as fronteiras legítimas entre organizações.

## 81. Usuários e comunidades

Usuários e comunidades não deverão ser tratados apenas como receptores passivos.

Quando apropriado, poderão contribuir com:

- sinais;
- necessidades;
- validações;
- comunicação local;
- prioridades;
- recursos;
- cooperação;
- aprendizagem.

Essa participação deverá ser voluntária, segura, legítima e acessível.

## 82. Agentes artificiais

Agentes artificiais poderão apoiar:

- percepção;
- correlação;
- análise;
- comunicação;
- recomendação;
- monitoramento;
- execução autorizada;
- registro;
- aprendizagem.

Eles não deverão presumir autoridade que não lhes foi concedida.

## 83. Limites dos agentes

Durante uma interrupção, agentes deverão respeitar:

- escopo;
- identidade;
- permissões;
- contexto;
- proporcionalidade;
- segurança;
- rastreabilidade;
- supervisão;
- critérios de suspensão.

A urgência não autoriza um agente a ampliar sozinho sua própria autoridade.

## 84. Decisão humana

Decisões com impacto relevante sobre:

- vida;
- direitos;
- dignidade;
- recursos significativos;
- autoridade;
- continuidade institucional;
- exceções normativas;
- retorno à operação;

deverão permanecer sob responsabilidade humana ou institucional legítima.

## 85. Registro da decisão

Toda decisão material de continuidade deverá registrar, conforme aplicável:

- evento;
- impacto;
- prioridade;
- informações;
- incertezas;
- alternativas;
- decisão;
- autoridade;
- tempo;
- duração;
- revisão;
- resultado.

## 86. Incerteza

Planos deverão reconhecer que informações poderão ser:

- incompletas;
- atrasadas;
- contraditórias;
- indisponíveis;
- comprometidas;
- estimadas.

A incerteza deverá ser registrada e considerada na decisão.

## 87. Princípio da precaução

Quando houver possibilidade de dano grave e informação insuficiente, poderão ser adotadas medidas preventivas proporcionais.

Essas medidas deverão:

- possuir fundamento;
- ser temporárias;
- evitar danos maiores;
- ser revisadas;
- preservar direitos na maior medida possível;
- ser encerradas quando perderem necessidade.

## 88. Premissas

Todo plano dependerá de premissas.

As premissas deverão ser:

- explícitas;
- verificáveis;
- monitoradas;
- revisadas;
- substituídas quando deixarem de ser verdadeiras.

Planos baseados em premissas invisíveis produzem falsa confiança.

## 89. Recursos mínimos

Cada função essencial deverá reconhecer os recursos mínimos necessários à sua continuidade.

Esses recursos poderão incluir:

- quantidade de pessoas;
- competências;
- dados;
- sistemas;
- dispositivos;
- instalações;
- conectividade;
- energia;
- fundos;
- autoridade;
- comunicação;
- fornecedores.

## 90. Duração suportável

Estratégias deverão indicar por quanto tempo poderão sustentar a operação alternativa.

Uma solução poderá funcionar por algumas horas e tornar-se inviável após dias.

Deverão ser considerados:

- capacidade;
- estoque;
- fadiga;
- custos;
- segurança;
- manutenção;
- dependências;
- qualidade;
- efeitos acumulados.

## 91. Degradação progressiva

Quando recursos diminuírem, a operação poderá adotar níveis progressivos de degradação.

Cada nível deverá indicar:

- funções preservadas;
- funções reduzidas;
- funções suspensas;
- capacidade;
- riscos;
- autoridade;
- comunicação;
- condição de transição.

## 92. Recuperação progressiva

A recuperação poderá ocorrer por etapas.

A organização deverá priorizar:

1. segurança;
2. percepção;
3. autoridade;
4. comunicação;
5. funções essenciais;
6. dependências críticas;
7. capacidade ampliada;
8. serviços complementares;
9. normalização;
10. melhoria.

A ordem real deverá ser adaptada ao contexto.

## 93. Reconciliação

Estados produzidos durante contingência ou operação alternativa deverão ser reconciliados com os sistemas recuperados.

A reconciliação deverá considerar:

- registros manuais;
- transações;
- decisões;
- filas;
- mensagens;
- pagamentos;
- alterações;
- duplicidades;
- conflitos;
- temporalidade;
- proveniência.

## 94. Retorno controlado

O retorno deverá ser uma decisão consciente.

Antes do retorno, deverão ser avaliados:

- segurança;
- estabilidade;
- capacidade;
- integridade;
- dependências;
- dados;
- equipes;
- riscos;
- comunicação;
- possibilidade de reversão.

## 95. Retorno não obrigatório à forma anterior

Após uma interrupção, poderá ser inadequado reconstruir exatamente a estrutura anterior.

A organização deverá avaliar se:

- a arquitetura anterior permanece segura;
- a capacidade anterior permanece necessária;
- o fornecedor continua adequado;
- as dependências devem ser alteradas;
- o modelo operacional pode ser melhorado;
- o risco pode ser reduzido.

## 96. Encerramento da ativação

A ativação de continuidade somente deverá ser encerrada quando:

- funções essenciais estiverem estáveis;
- responsabilidades ordinárias forem restabelecidas;
- riscos residuais forem conhecidos;
- registros forem preservados;
- comunicações forem realizadas;
- ações pendentes tiverem responsáveis;
- a autoridade competente aprovar.

## 97. Recuperação das pessoas

O encerramento técnico não significa encerramento humano.

Após eventos relevantes, deverão ser avaliados:

- descanso;
- saúde;
- apoio psicológico;
- substituição;
- reconhecimento;
- retorno gradual;
- carga acumulada;
- consequências pessoais;
- aprendizagem.

## 98. Aprendizagem institucional

Toda interrupção deverá ser transformada em oportunidade de fortalecimento.

A revisão deverá alcançar:

- causas;
- impactos;
- decisões;
- comunicação;
- dependências;
- estratégias;
- tempos;
- falhas;
- acertos;
- efeitos humanos;
- governança;
- arquitetura.

## 99. Invariantes fundamentais do Lote 1

Permanecem como invariantes:

- vida antes de infraestrutura;
- dignidade durante toda interrupção;
- propósito antes da forma;
- contexto antes da prioridade;
- responsabilidade antes da velocidade;
- governança antes da improvisação;
- evidência antes da confiança;
- aprendizagem antes da repetição;
- continuidade não é apenas tecnologia;
- Disaster Recovery não substitui continuidade;
- autoridade extraordinária deverá ser limitada e temporária;
- automação não elimina responsabilidade;
- operação degradada não elimina direitos;
- retorno não apaga o que aconteceu;
- recuperação não deverá reconstruir vulnerabilidades conhecidas;
- nenhuma função crítica deverá depender permanentemente de uma única pessoa, ferramenta, instalação ou organização;
- toda decisão relevante deverá permanecer atribuível;
- toda exceção deverá possuir fundamento e duração;
- toda capacidade declarada deverá poder ser exercitada e comprovada.

## 100. Transição para o Lote 2

Os fundamentos estabelecidos neste lote determinam que a continuidade deverá ser construída a partir do propósito, das funções essenciais, das pessoas, das responsabilidades, das dependências e dos impactos reais da interrupção.

O próximo lote estabelecerá como a Plataforma UNO deverá identificar:

- funções essenciais;
- impactos;
- criticidade;
- tolerâncias;
- requisitos temporais;
- prioridades;
- dependências;
- recursos mínimos;
- cenários;
- riscos de concentração;
- efeitos progressivos;
- necessidades de recuperação.

Essa análise permitirá transformar a intenção de continuar em requisitos concretos, mensuráveis, justificáveis e governáveis.

---

# Lote 2 — Análise de Impacto, Criticidade e Requisitos de Continuidade

## 101. Finalidade da análise

A continuidade somente poderá ser planejada com responsabilidade quando a organização compreender:

- o que realiza;
- para quem realiza;
- por que realiza;
- de quais capacidades depende;
- por quanto tempo cada função pode permanecer interrompida;
- quais impactos surgem ao longo do tempo;
- quais recursos mínimos permitem continuar;
- quais relações precisam ser recuperadas primeiro.

A análise de impacto deverá transformar conhecimento institucional em requisitos concretos de continuidade.

## 102. Análise de Impacto sobre a Missão

A Plataforma UNO adotará uma Análise de Impacto sobre a Missão capaz de reconhecer as consequências da interrupção sobre:

- pessoas;
- comunidades;
- organizações;
- serviços;
- direitos;
- compromissos;
- recursos;
- confiança;
- legitimidade;
- valor público;
- continuidade institucional.

Essa análise ampliará a abordagem tradicional de impacto sobre negócios para abranger finalidades sociais, humanas, públicas e institucionais.

## 103. Análise de Impacto nos Negócios

Quando houver atividades econômicas, a Análise de Impacto nos Negócios deverá avaliar:

- perda de receita;
- aumento de custos;
- interrupção de pagamentos;
- multas;
- obrigações contratuais;
- perda de clientes;
- perda de mercado;
- danos materiais;
- efeitos sobre fornecedores;
- efeitos sobre colaboradores;
- necessidade de capital;
- impacto tributário;
- capacidade de retomada.

O impacto financeiro será relevante, mas não será o único critério de prioridade.

## 104. Análise integrada

A Plataforma UNO deverá integrar impactos:

- humanos;
- sociais;
- operacionais;
- tecnológicos;
- informacionais;
- financeiros;
- jurídicos;
- regulatórios;
- ambientais;
- reputacionais;
- estratégicos;
- institucionais.

Uma função poderá possuir baixo impacto financeiro e, ainda assim, ser essencial à vida, à dignidade, à segurança ou à legitimidade.

## 105. Unidade de análise

A análise poderá ser realizada sobre:

- missão;
- função;
- serviço;
- processo;
- capacidade;
- produto;
- sistema;
- organização;
- território;
- população;
- instalação;
- fornecedor;
- fluxo;
- integração;
- conjunto de dados.

A unidade escolhida deverá ser suficientemente clara para permitir identificação de impactos, dependências, tempos e responsabilidades.

## 106. Granularidade adequada

Uma análise excessivamente ampla poderá ocultar diferenças importantes.

Uma análise excessivamente fragmentada poderá produzir complexidade sem utilidade.

A granularidade deverá permitir:

- decisões;
- prioridades;
- estratégias;
- atribuição de responsabilidades;
- testes;
- revisão;
- rastreabilidade.

## 107. Inventário de funções

Cada organização deverá manter inventário de suas funções relevantes.

O inventário deverá indicar, conforme aplicável:

- identificador;
- nome;
- descrição;
- propósito;
- público atendido;
- proprietário;
- responsáveis;
- entradas;
- atividades;
- saídas;
- dependências;
- obrigações;
- tecnologias;
- locais;
- criticidade;
- requisitos de continuidade.

## 108. Identificador persistente

Cada função, capacidade ou serviço analisado deverá possuir identificador persistente.

Alterações de nome, responsável, tecnologia ou organização não deverão apagar sua trajetória histórica.

O identificador deverá permitir relacionar:

- análises;
- planos;
- incidentes;
- testes;
- métricas;
- riscos;
- decisões;
- versões;
- evidências.

## 109. Proprietário da função

Cada função deverá possuir proprietário responsável por:

- declarar seu propósito;
- reconhecer impactos;
- mapear dependências;
- propor requisitos;
- validar estratégias;
- participar de exercícios;
- revisar mudanças;
- prestar contas sobre riscos.

A propriedade poderá ser institucional, mas deverá permanecer atribuível.

## 110. Partes interessadas

A análise deverá identificar as partes afetadas pela interrupção.

Poderão ser partes interessadas:

- usuários;
- cidadãos;
- famílias;
- comunidades;
- colaboradores;
- parceiros;
- fornecedores;
- organizações;
- autoridades;
- investidores;
- reguladores;
- sociedade;
- gerações futuras.

## 111. Perspectiva das pessoas afetadas

A análise não deverá ser construída somente pela perspectiva de quem opera o serviço.

Deverá considerar:

- como a interrupção é percebida;
- quais necessidades deixam de ser atendidas;
- quais alternativas as pessoas possuem;
- quais grupos são mais vulneráveis;
- quais custos são transferidos ao usuário;
- quais consequências indiretas surgem.

## 112. Dependência vital

Uma função será considerada de dependência vital quando sua interrupção puder contribuir para:

- morte;
- agravamento de saúde;
- lesão;
- exposição a violência;
- falta de abrigo;
- falta de alimento;
- falta de água;
- interrupção de cuidado essencial;
- perda de acesso a socorro.

Essas funções deverão receber tratamento prioritário e proporcional.

## 113. Impacto sobre a dignidade

A análise deverá reconhecer impactos sobre:

- privacidade;
- autonomia;
- acesso;
- igualdade;
- respeito;
- proteção contra exposição;
- possibilidade de escolha;
- condições básicas de existência;
- tratamento justo.

Danos à dignidade não deverão ser reduzidos a valores financeiros.

## 114. Impacto sobre direitos

A interrupção poderá afetar direitos:

- civis;
- sociais;
- trabalhistas;
- econômicos;
- culturais;
- digitais;
- contratuais;
- de proteção de dados;
- de acesso a serviços;
- de defesa e recurso.

A análise deverá reconhecer direitos aplicáveis antes de definir estratégias.

## 115. Impacto sobre segurança

O impacto sobre segurança poderá envolver:

- pessoas;
- instalações;
- informações;
- recursos;
- identidade;
- operações;
- comunidades;
- ambiente;
- fornecedores;
- infraestrutura crítica.

A interrupção de controles de segurança poderá ampliar outros impactos mesmo quando o serviço principal continuar disponível.

## 116. Impacto operacional

Impactos operacionais poderão incluir:

- interrupção de atividades;
- formação de filas;
- perda de capacidade;
- retrabalho;
- erros;
- descoordenação;
- decisões atrasadas;
- perda de visibilidade;
- degradação de qualidade;
- incapacidade de atender prioridades;
- sobrecarga de equipes.

## 117. Impacto informacional

Impactos informacionais poderão incluir:

- perda de acesso;
- perda de integridade;
- desatualização;
- perda de contexto;
- contradição;
- perda de proveniência;
- exposição indevida;
- incapacidade de decidir;
- impossibilidade de prestar contas;
- amnésia institucional.

## 118. Impacto tecnológico

Impactos tecnológicos poderão incluir:

- indisponibilidade de aplicações;
- perda de conectividade;
- perda de processamento;
- perda de armazenamento;
- indisponibilidade de identidades;
- falha de integrações;
- interrupção de automações;
- perda de observabilidade;
- incompatibilidade;
- comprometimento de ambientes.

## 119. Impacto financeiro

A análise financeira deverá considerar:

- perdas imediatas;
- perdas acumuladas;
- custos de resposta;
- custos de recuperação;
- despesas extraordinárias;
- perda de receita;
- indisponibilidade de fundos;
- multas;
- indenizações;
- fraudes;
- necessidade de reservas;
- efeitos sobre caixa;
- impacto sobre sustentabilidade.

## 120. Impacto jurídico e regulatório

A interrupção poderá gerar:

- descumprimento de prazo;
- indisponibilidade de registro;
- violação de obrigação;
- exposição de dados;
- perda de evidência;
- impedimento de defesa;
- falha de notificação;
- sanção;
- responsabilização;
- suspensão de autorização.

A análise deverá identificar obrigações aplicáveis e autoridades competentes.

## 121. Impacto contratual

Contratos poderão estabelecer:

- níveis de serviço;
- prazos;
- responsabilidades;
- notificações;
- penalidades;
- direitos de auditoria;
- requisitos de continuidade;
- requisitos de segurança;
- recuperação;
- rescisão;
- cooperação.

Os contratos deverão ser considerados como entradas da análise, não como substitutos do julgamento institucional.

## 122. Impacto reputacional

O impacto reputacional poderá envolver:

- perda de confiança;
- percepção de abandono;
- desinformação;
- insegurança;
- questionamento de competência;
- diminuição da adesão;
- ruptura de parcerias;
- dificuldade de recuperação institucional.

A reputação não deverá ser protegida por ocultação de fatos relevantes.

## 123. Impacto sobre confiança

Confiança depende da correspondência entre:

- o que a organização promete;
- o que consegue entregar;
- como comunica limitações;
- como trata pessoas;
- como assume responsabilidades;
- como aprende com falhas.

A interrupção poderá ser tolerada melhor do que a desonestidade sobre ela.

## 124. Impacto estratégico

Impactos estratégicos poderão incluir:

- perda de oportunidades;
- atraso de programas;
- redução de capacidade futura;
- desvio de recursos;
- enfraquecimento de parcerias;
- interrupção de expansão;
- dependência ampliada;
- perda de vantagem;
- comprometimento de objetivos.

## 125. Impacto institucional

Impactos institucionais poderão incluir:

- perda de autoridade;
- conflito de responsabilidade;
- ruptura de governança;
- incapacidade de deliberar;
- descontinuidade de liderança;
- perda de memória;
- decisões ilegítimas;
- desintegração organizacional.

## 126. Impacto social

Impactos sociais poderão incluir:

- agravamento de desigualdades;
- desassistência;
- isolamento;
- desemprego;
- insegurança;
- interrupção de educação;
- interrupção de saúde;
- perda de renda;
- conflito comunitário;
- redução de acesso a serviços.

## 127. Impacto ambiental

A análise deverá considerar:

- poluição;
- vazamento;
- descarte inadequado;
- consumo emergencial;
- perda de controle ambiental;
- danos a ecossistemas;
- risco à água;
- risco ao solo;
- risco ao ar;
- obrigações de remediação.

## 128. Impacto sobre terceiros

Uma interrupção poderá produzir impactos além da fronteira da organização.

A análise deverá considerar:

- parceiros;
- fornecedores;
- clientes;
- organizações federadas;
- serviços públicos;
- comunidades;
- familiares;
- cadeias produtivas;
- ecossistemas digitais;
- infraestrutura compartilhada.

## 129. Impacto sobre gerações futuras

Decisões de continuidade poderão criar consequências duradouras.

A análise deverá evitar soluções que preservem a operação imediata ao custo de:

- dívida insustentável;
- perda de memória;
- degradação ambiental;
- concentração de poder;
- dependência irreversível;
- eliminação de conhecimento;
- comprometimento de capacidades futuras.

## 130. Impacto cumulativo

O impacto poderá aumentar com o tempo.

Uma interrupção inicialmente tolerável poderá tornar-se crítica por:

- formação de filas;
- esgotamento de reservas;
- fadiga;
- vencimento de prazos;
- perda de confiança;
- deterioração de materiais;
- acúmulo de transações;
- propagação de dependências;
- agravamento de condições humanas.

## 131. Impacto em cascata

Uma falha poderá atingir funções indiretamente.

A análise deverá reconhecer cadeias como:

- perda de identidade;
- impedimento de acesso;
- interrupção de sistemas;
- incapacidade de pagamento;
- indisponibilidade de fornecedores;
- interrupção de serviços;
- impacto sobre pessoas.

O mapa de dependências do arquivo 017 deverá apoiar essa compreensão.

## 132. Impacto simultâneo

Cenários poderão afetar múltiplas funções ao mesmo tempo.

A análise não deverá presumir que todos os recursos estarão disponíveis para cada plano isoladamente.

Deverão ser avaliados:

- conflitos;
- concorrência;
- capacidade compartilhada;
- especialistas comuns;
- instalações comuns;
- fornecedores comuns;
- canais comuns;
- prioridades incompatíveis.

## 133. Impacto prolongado

Interrupções prolongadas alteram a natureza do problema.

Com o tempo, poderão surgir:

- desgaste de equipes;
- falta de suprimentos;
- contratos vencidos;
- perda de pessoal;
- mudança de demanda;
- instabilidade financeira;
- necessidade de reorganização;
- mudanças regulatórias;
- novas ameaças;
- adaptação de usuários.

## 134. Impacto sazonal

A criticidade poderá variar conforme:

- horário;
- dia;
- mês;
- estação;
- calendário fiscal;
- período escolar;
- eventos;
- eleições;
- pagamentos;
- clima;
- ciclos produtivos;
- campanhas;
- emergências sanitárias.

Os requisitos deverão considerar esses períodos.

## 135. Impacto geográfico

A análise deverá identificar se a interrupção afeta:

- instalação;
- bairro;
- município;
- região;
- estado;
- país;
- múltiplos países;
- ambiente digital distribuído.

Estratégias deverão evitar dependências geográficas concentradas quando o impacto justificar redundância territorial.

## 136. Impacto populacional

A extensão poderá ser avaliada pelo número e pelo perfil das pessoas afetadas.

Contudo, quantidade não será o único critério.

Uma interrupção que afete poucas pessoas em situação de alta vulnerabilidade poderá exigir prioridade elevada.

## 137. Escala temporal de impacto

A análise deverá observar impactos em diferentes momentos:

- imediatamente;
- após minutos;
- após horas;
- após um dia;
- após vários dias;
- após semanas;
- após meses.

Essa escala permitirá reconhecer quando cada função precisa ser recuperada.

## 138. Limiar de impacto inaceitável

Para cada função relevante, deverá ser identificado o ponto em que a interrupção deixa de ser tolerável.

O limiar deverá considerar:

- gravidade;
- duração;
- extensão;
- população;
- obrigações;
- reversibilidade;
- alternativas;
- capacidade de compensação;
- efeitos acumulados.

## 139. Critérios de aceitabilidade

A aceitabilidade deverá ser determinada por autoridade legítima e critérios transparentes.

Não poderá ser definida somente por conveniência técnica ou financeira.

Deverão ser considerados:

- vida;
- dignidade;
- direitos;
- segurança;
- missão;
- legalidade;
- valor público;
- sustentabilidade;
- responsabilidade.

## 140. Escalas de impacto

A organização poderá adotar escalas como:

- insignificante;
- reduzido;
- moderado;
- elevado;
- crítico;
- catastrófico.

Cada nível deverá possuir definição observável e contextualizada.

## 141. Proibição de pesos universais

Impactos não deverão receber pesos universais sem justificativa.

O valor relativo entre vida, finanças, reputação, legalidade e operação poderá variar conforme o contexto.

Nenhuma fórmula poderá reduzir automaticamente decisões complexas a um único número sem possibilidade de revisão humana.

## 142. Avaliação qualitativa

A avaliação qualitativa deverá registrar:

- natureza do impacto;
- pessoas afetadas;
- mecanismos de propagação;
- reversibilidade;
- incerteza;
- dependências;
- alternativas;
- contexto;
- justificativa da classificação.

## 143. Avaliação quantitativa

Quando possível, a análise poderá utilizar:

- número de pessoas;
- volume de transações;
- horas de interrupção;
- valores financeiros;
- capacidade perdida;
- filas;
- prazos;
- penalidades;
- estoques;
- recursos;
- níveis de serviço.

A quantificação deverá apoiar, e não substituir, a compreensão.

## 144. Reversibilidade

Impactos deverão ser classificados quanto à possibilidade de reversão.

Poderão ser:

- imediatamente reversíveis;
- reversíveis com esforço;
- parcialmente reversíveis;
- compensáveis;
- irreversíveis;
- de reversibilidade desconhecida.

Impactos irreversíveis deverão receber atenção especial.

## 145. Velocidade de propagação

A análise deverá avaliar com que velocidade o impacto se amplia.

Uma função poderá apresentar:

- impacto imediato;
- crescimento linear;
- crescimento acelerado;
- propagação em cascata;
- atraso seguido de agravamento;
- comportamento imprevisível.

## 146. Detectabilidade

A organização deverá avaliar se a interrupção e seus impactos são facilmente percebidos.

Falhas silenciosas poderão permanecer ocultas enquanto:

- dados são corrompidos;
- filas crescem;
- registros deixam de ser produzidos;
- controles deixam de funcionar;
- decisões são tomadas sobre informações incorretas.

## 147. Incerteza da avaliação

Toda análise deverá indicar seu grau de confiança.

A incerteza poderá decorrer de:

- falta de dados;
- sistema novo;
- dependência desconhecida;
- cenário inédito;
- informação conflitante;
- mudança rápida;
- comportamento humano;
- fornecedor opaco.

## 148. Hipóteses conservadoras

Quando a incerteza envolver riscos elevados à vida, à dignidade, à segurança ou à continuidade institucional, poderão ser adotadas hipóteses conservadoras.

Essas hipóteses deverão ser:

- explícitas;
- justificadas;
- temporárias;
- revisáveis;
- proporcionais.

## 149. Criticidade

Criticidade é a medida contextual da importância de uma função, capacidade, recurso ou serviço para a missão.

Ela deverá resultar da combinação de:

- impactos;
- tempo;
- dependências;
- alternativas;
- obrigações;
- vulnerabilidades;
- capacidade de recuperação;
- população afetada.

## 150. Criticidade não é importância simbólica

Uma função poderá ser institucionalmente valorizada sem exigir recuperação imediata.

Outra função pouco visível poderá sustentar diversas atividades essenciais.

A criticidade deverá refletir consequências reais da interrupção.

## 151. Criticidade dinâmica

A criticidade poderá mudar durante o evento.

Exemplos:

- comunicação torna-se mais crítica durante crise;
- folha de pagamento torna-se mais crítica próxima ao vencimento;
- capacidade de abrigo aumenta de importância durante desastre climático;
- identidade torna-se crítica quando acessos precisam ser reconstruídos.

## 152. Classes de criticidade

A organização poderá estabelecer classes como:

- essencial imediata;
- essencial prioritária;
- necessária;
- recuperável posteriormente;
- suspensível;
- descontinuável.

Cada classe deverá possuir requisitos e critérios de uso.

## 153. Função essencial imediata

Uma função essencial imediata exige preservação contínua ou recuperação em tempo extremamente reduzido.

Sua perda poderá produzir:

- risco à vida;
- perda de controle;
- dano irreversível;
- ruptura de autoridade;
- comprometimento generalizado;
- incapacidade de coordenar a resposta.

## 154. Função essencial prioritária

Uma função essencial prioritária poderá tolerar breve interrupção, mas deverá ser recuperada antes que impactos relevantes se acumulem.

Ela deverá possuir:

- estratégia definida;
- recursos reservados;
- dependências identificadas;
- tempo de recuperação testado;
- responsáveis disponíveis.

## 155. Função necessária

Uma função necessária sustenta a operação, mas poderá permanecer temporariamente reduzida ou suspensa dentro de limites conhecidos.

Deverá existir:

- tolerância definida;
- alternativa proporcional;
- ponto de recuperação;
- comunicação;
- critério de retomada.

## 156. Função suspensível

Uma função suspensível poderá ser interrompida para liberar recursos às funções mais críticas.

Sua suspensão deverá considerar:

- impactos;
- obrigações;
- comunicação;
- preservação de estado;
- retorno;
- filas acumuladas;
- consequências futuras.

## 157. Função descontinuável

A análise poderá revelar funções que não precisam ser recuperadas.

Uma função poderá ser descontinuada quando:

- perdeu seu propósito;
- tornou-se redundante;
- foi substituída;
- produz mais risco que valor;
- não possui obrigação de continuidade;
- sua manutenção prejudica funções prioritárias.

A descontinuação deverá ser legítima, documentada e governada.

## 158. Período Máximo Tolerável de Interrupção

O MTPD deverá representar o limite máximo após o qual os impactos se tornam inaceitáveis.

Sua definição deverá considerar:

- impacto máximo tolerado;
- agravamento temporal;
- obrigações;
- alternativas;
- recursos;
- capacidade de recuperação;
- margem de segurança.

## 159. MTPD e limite real

O MTPD não deverá ser definido pelo tempo que a tecnologia consegue recuperar.

Primeiro deverá ser reconhecido o limite da missão.

Depois, a arquitetura deverá ser projetada para atendê-lo.

Quando a capacidade atual não atender ao limite, deverá existir:

- risco registrado;
- estratégia provisória;
- plano de melhoria;
- autoridade responsável.

## 160. Objetivo de Tempo de Recuperação

O RTO deverá definir o tempo desejado para restabelecer a capacidade a um nível definido.

Ele deverá especificar:

- marco inicial;
- capacidade esperada;
- escopo;
- dependências;
- validações;
- margem;
- autoridade.

## 161. Marco inicial do RTO

O início da medição deverá ser explicitado.

Poderá ocorrer a partir de:

- evento;
- detecção;
- declaração;
- ativação;
- autorização;
- início da recuperação.

Diferentes marcos produzem medições diferentes e não deverão ser confundidos.

## 162. Marco final do RTO

O RTO não deverá terminar apenas quando um sistema liga.

O marco final poderá exigir:

- serviço disponível;
- dados acessíveis;
- segurança validada;
- dependências ativas;
- desempenho mínimo;
- usuários autorizados;
- operação aprovada;
- comunicação realizada.

## 163. Margem entre RTO e MTPD

O RTO deverá ser menor que o MTPD.

A diferença deverá permitir:

- atrasos;
- validação;
- reconciliação;
- estabilização;
- falha de tentativa;
- escalonamento;
- comunicação;
- decisões adicionais.

Um RTO igual ao limite máximo não oferece margem real de segurança.

## 164. Objetivo de Ponto de Recuperação

O RPO deverá indicar até qual ponto o estado deverá ser recuperado.

A definição deverá considerar:

- perda temporal;
- perda transacional;
- reconstruibilidade;
- efeitos externos;
- consistência;
- registros manuais;
- obrigações;
- impacto humano.

## 165. RPO zero

RPO zero somente deverá ser declarado quando a arquitetura e as evidências demonstrarem ausência tolerável de perda.

Replicação contínua, isoladamente, não garante RPO zero diante de:

- corrupção;
- exclusão;
- comprometimento;
- inconsistência;
- propagação de erro;
- perda simultânea;
- efeitos externos não registrados.

## 166. Objetivo Mínimo de Continuidade

O MBCO deverá estabelecer o nível mínimo de produtos ou serviços necessário durante a interrupção.

Ele deverá indicar:

- o que será entregue;
- para quem;
- em qual quantidade;
- com qual qualidade;
- por qual canal;
- com quais controles;
- por quanto tempo;
- sob quais riscos.

## 167. Nível mínimo não é ausência de qualidade

Operação mínima não autoriza:

- tratamento indigno;
- insegurança desnecessária;
- ocultação;
- discriminação;
- abandono;
- decisões sem registro;
- eliminação de controles essenciais.

Qualidade poderá ser reduzida, mas os princípios permanentes deverão permanecer ativos.

## 168. Capacidade mínima

A capacidade mínima deverá ser expressa de forma compreensível.

Poderá utilizar:

- percentual da demanda;
- número de atendimentos;
- transações por período;
- localidades;
- grupos prioritários;
- funções preservadas;
- tempo de resposta;
- canais mantidos.

## 169. Duração da capacidade mínima

A análise deverá indicar por quanto tempo a capacidade mínima poderá ser sustentada.

Recursos poderão se esgotar por:

- fadiga;
- consumo;
- custo;
- capacidade;
- estoque;
- licenças;
- bateria;
- combustível;
- contratos;
- dependências humanas.

## 170. Tempo de recuperação do trabalho acumulado

Além do RTO, deverá ser avaliado o tempo necessário para tratar:

- filas;
- demandas represadas;
- transações pendentes;
- registros manuais;
- mensagens;
- exceções;
- reconciliações;
- correções.

O retorno do sistema não elimina o passivo gerado durante a interrupção.

## 171. Prioridade de recuperação

A prioridade deverá considerar:

- criticidade;
- MTPD;
- RTO;
- impacto acumulado;
- dependências;
- recursos;
- risco;
- população;
- possibilidade de operação alternativa;
- contribuição à recuperação de outras funções.

## 172. Ordem de recuperação

A ordem deverá respeitar relações técnicas e institucionais.

Poderá ser necessário recuperar:

1. segurança;
2. autoridade;
3. identidade;
4. comunicação;
5. observabilidade;
6. infraestrutura;
7. dados;
8. aplicações;
9. integrações;
10. serviços.

A sequência deverá ser adaptada ao cenário e às dependências reais.

## 173. Conflito entre prioridades

Duas funções poderão exigir o mesmo recurso no mesmo momento.

O conflito deverá ser resolvido por critérios como:

- vida;
- dignidade;
- urgência;
- impacto;
- MTPD;
- dependências;
- alternativas;
- abrangência;
- legalidade;
- valor público.

A decisão deverá ser registrada.

## 174. Recurso mínimo humano

A análise deverá identificar:

- funções necessárias;
- quantidade mínima;
- competências;
- autoridade;
- localização;
- tempo de atuação;
- substitutos;
- descanso;
- suporte;
- acessibilidade.

Não deverá ser presumido que todas as pessoas estarão disponíveis.

## 175. Competência crítica

Competência crítica é o conhecimento ou habilidade sem o qual a função não poderá continuar ou ser recuperada.

Ela deverá possuir:

- responsável;
- sucessor;
- documentação;
- treinamento;
- exercício;
- forma de contato;
- alternativa externa, quando necessária.

## 176. Recurso mínimo tecnológico

Deverão ser identificados:

- processamento;
- memória;
- armazenamento;
- conectividade;
- aplicações;
- identidades;
- dispositivos;
- integrações;
- monitoramento;
- segurança;
- licenças.

A especificação deverá distinguir o ambiente mínimo do ambiente ideal.

## 177. Recurso mínimo informacional

A análise deverá identificar quais informações são indispensáveis para:

- reconhecer usuários;
- tomar decisões;
- executar serviços;
- prestar contas;
- reconciliar estados;
- cumprir obrigações;
- comunicar;
- recuperar.

## 178. Recurso mínimo físico

Poderão ser necessários:

- instalação;
- estação de trabalho;
- equipamento;
- energia;
- água;
- climatização;
- transporte;
- acesso;
- proteção;
- armazenamento;
- materiais.

## 179. Recurso mínimo financeiro

A continuidade poderá exigir:

- reserva;
- limite de pagamento;
- acesso bancário;
- autoridade;
- caixa emergencial;
- meios alternativos;
- contratação extraordinária;
- seguros;
- fundos compartilhados.

Esses recursos deverão possuir controles contra abuso e fraude.

## 180. Recurso mínimo de comunicação

A análise deverá identificar:

- públicos;
- responsáveis;
- canais;
- alternativas;
- mensagens essenciais;
- frequência;
- autenticação;
- acessibilidade;
- registros;
- limitações.

## 181. Dependências internas

Dependências internas poderão incluir:

- pessoas;
- equipes;
- processos;
- sistemas;
- dados;
- instalações;
- finanças;
- comunicação;
- autoridade;
- serviços compartilhados.

## 182. Dependências externas

Dependências externas poderão incluir:

- energia;
- telecomunicações;
- nuvem;
- fornecedores;
- bancos;
- transporte;
- serviços públicos;
- autoridades;
- parceiros;
- organizações federadas;
- infraestrutura regional.

## 183. Dependências compartilhadas

Funções distintas poderão depender do mesmo recurso.

A análise deverá revelar concentrações como:

- provedor único;
- região única;
- identidade única;
- equipe única;
- banco de dados único;
- canal único;
- autoridade única;
- fornecedor único;
- instalação única.

## 184. Dependência de infraestrutura pública

Planos deverão considerar falhas em:

- energia;
- água;
- telecomunicação;
- transporte;
- saúde;
- segurança;
- serviços de emergência;
- sistemas governamentais;
- meios de pagamento.

A organização não deverá presumir disponibilidade contínua da infraestrutura externa.

## 185. Dependência de fornecedor

Para cada fornecedor crítico, deverão ser conhecidos:

- serviço fornecido;
- funções dependentes;
- compromisso;
- capacidade;
- localização;
- subcontratados;
- canais de crise;
- recuperação;
- alternativas;
- estratégia de saída.

## 186. Dependência oculta

Dependências poderão permanecer invisíveis até uma interrupção.

A organização deverá procurar sinais como:

- planilhas pessoais;
- contas não institucionais;
- scripts não documentados;
- dispositivos particulares;
- conhecimento informal;
- integrações manuais;
- licenças individuais;
- contatos pessoais;
- serviços gratuitos sem compromisso.

## 187. Dependência recíproca

Duas funções poderão depender uma da outra.

Esses ciclos deverão ser identificados e tratados por:

- estados mínimos;
- inicialização controlada;
- desacoplamento;
- procedimentos manuais;
- prioridade conjunta;
- recuperação coordenada.

## 188. Dependência temporal

Algumas dependências somente se tornam críticas após determinado período.

Exemplos:

- estoque;
- certificado;
- bateria;
- sessão;
- cache;
- fila;
- contrato;
- prazo;
- reserva financeira.

A análise deverá considerar quando a dependência passa a limitar a continuidade.

## 189. Substituibilidade

Cada recurso crítico deverá ser avaliado quanto à substituição.

A substituição poderá ser:

- imediata;
- parcial;
- temporária;
- manual;
- contratual;
- tecnológica;
- regional;
- inexistente.

A existência nominal de alternativa não comprova sua capacidade real.

## 190. Tempo de substituição

Deverá ser estimado o tempo necessário para:

- identificar a necessidade;
- autorizar;
- contratar;
- configurar;
- integrar;
- validar;
- treinar;
- operar;
- estabilizar.

Uma alternativa disponível comercialmente poderá não estar disponível dentro do tempo necessário.

## 191. Cenários mínimos de análise

A análise deverá considerar, conforme aplicável:

- perda de pessoas;
- perda de instalação;
- perda de tecnologia;
- perda de dados;
- perda de comunicação;
- perda de energia;
- perda de fornecedor;
- perda de identidade;
- comprometimento de segurança;
- indisponibilidade regional;
- interrupção prolongada;
- múltiplas perdas simultâneas.

## 192. Cenário de indisponibilidade humana

A organização deverá avaliar situações em que:

- pessoas-chave não podem atuar;
- equipes inteiras ficam indisponíveis;
- há restrição de deslocamento;
- existe risco sanitário;
- ocorre sobrecarga;
- lideranças perdem comunicação;
- sucessores precisam assumir.

## 193. Cenário de perda tecnológica

O cenário deverá considerar:

- indisponibilidade;
- corrupção;
- ataque;
- falha de atualização;
- perda de região;
- perda de conta;
- perda de chaves;
- falha de integração;
- perda de fornecedor;
- obsolescência.

## 194. Cenário de comprometimento

Quando houver possibilidade de comprometimento, continuidade e segurança deverão operar juntas.

A recuperação não deverá utilizar automaticamente:

- credenciais suspeitas;
- cópias não validadas;
- configurações comprometidas;
- código contaminado;
- identidades não verificadas;
- redes inseguras.

## 195. Cenário de desastre físico

A análise deverá considerar:

- evacuação;
- indisponibilidade de instalação;
- dano a equipamentos;
- perda de energia;
- interrupção de acesso;
- risco às pessoas;
- perda de documentação;
- falha de telecomunicação;
- impacto regional;
- necessidade de local alternativo.

## 196. Cenário de indisponibilidade regional

A organização deverá avaliar se pessoas, instalações, fornecedores e tecnologias alternativos estão concentrados na mesma região afetável.

Recursos em locais diferentes, mas sujeitos ao mesmo:

- clima;
- sistema elétrico;
- provedor;
- rota;
- legislação;
- identidade;
- domínio administrativo;

poderão não constituir independência suficiente.

## 197. Cenário de ruptura financeira

A análise deverá considerar:

- indisponibilidade bancária;
- fraude;
- congelamento de recursos;
- falta de liquidez;
- interrupção de receita;
- aumento abrupto de custo;
- perda de fornecedor;
- impossibilidade de pagar pessoas;
- necessidade de prioridade financeira.

## 198. Cenário de ruptura institucional

Deverão ser avaliadas situações como:

- perda de liderança;
- conflito de autoridade;
- suspensão de organização;
- mudança legal;
- disputa de responsabilidade;
- ruptura de parceria;
- perda de legitimidade;
- incapacidade de deliberar;
- indisponibilidade de registros institucionais.

## 199. Cenário de demanda extraordinária

A continuidade poderá ser ameaçada não pela perda de recursos, mas por aumento extremo de demanda.

A análise deverá considerar:

- picos;
- filas;
- campanhas;
- emergências;
- eventos;
- migração de usuários;
- falha de serviço relacionado;
- mobilização pública;
- desinformação;
- comportamento coletivo.

## 200. Cenário de perda de confiança

A perda de confiança poderá reduzir adesão, cooperação, comunicação e legitimidade.

O cenário deverá avaliar:

- informações conflitantes;
- falha pública;
- ocultação;
- vazamento;
- abuso de autoridade;
- decisão injusta;
- desinformação;
- incapacidade de prestar contas.

## 201. Fonte dos dados da análise

A análise deverá utilizar, conforme disponível:

- entrevistas;
- documentos;
- métricas;
- registros;
- contratos;
- incidentes;
- exercícios;
- mapas de dependência;
- observação;
- auditorias;
- normas;
- experiências de usuários;
- conhecimento de especialistas.

## 202. Entrevistas

Entrevistas deverão envolver pessoas que:

- executam;
- decidem;
- recebem;
- apoiam;
- supervisionam;
- fornecem;
- dependem;
- auditam.

A visão da liderança não deverá substituir integralmente a experiência operacional.

## 203. Oficinas de análise

Oficinas poderão reunir diferentes partes para:

- mapear funções;
- reconhecer impactos;
- descobrir dependências;
- resolver divergências;
- construir cenários;
- validar prioridades;
- definir requisitos;
- identificar lacunas.

## 204. Dados históricos

Incidentes anteriores deverão ser utilizados para avaliar:

- duração;
- causas;
- impactos;
- dependências;
- tempos;
- decisões;
- perdas;
- recursos;
- recuperação;
- aprendizagem.

O passado deverá informar o planejamento sem limitar a imaginação de novos cenários.

## 205. Validação cruzada

Declarações deverão ser comparadas com:

- métricas;
- contratos;
- arquitetura;
- inventários;
- registros;
- usuários;
- fornecedores;
- testes;
- evidências.

A validação cruzada reduz o risco de requisitos baseados somente em percepção.

## 206. Conflito de informações

Quando fontes divergirem, a divergência deverá ser registrada.

A resolução poderá exigir:

- nova coleta;
- teste;
- autoridade;
- análise contextual;
- cenário conservador;
- requisito provisório;
- revisão futura.

## 207. Registro de premissas

Toda análise deverá registrar premissas como:

- disponibilidade de pessoas;
- funcionamento de fornecedor;
- existência de energia;
- acesso a local;
- integridade de dados;
- capacidade de comunicação;
- disponibilidade de recursos.

## 208. Registro de limitações

A análise deverá declarar limitações:

- dados ausentes;
- baixa confiança;
- escopo reduzido;
- dependências desconhecidas;
- falta de teste;
- tecnologia em mudança;
- fornecedor sem transparência;
- requisito ainda não validado.

## 209. Aprovação da análise

A análise deverá ser aprovada por autoridades compatíveis com:

- missão;
- risco;
- impacto;
- obrigações;
- recursos;
- estratégia.

A aprovação não transforma incertezas em certezas.

Ela reconhece que os requisitos foram avaliados e assumidos institucionalmente.

## 210. Periodicidade de revisão

A análise deverá ser revista periodicamente e quando houver:

- nova função;
- mudança de missão;
- mudança tecnológica;
- alteração de fornecedor;
- mudança de local;
- mudança de equipe;
- nova obrigação;
- incidente;
- exercício;
- falha;
- expansão;
- reorganização;
- mudança de criticidade.

## 211. Versionamento

Cada versão deverá registrar:

- data;
- escopo;
- responsáveis;
- alterações;
- justificativas;
- requisitos;
- aprovações;
- riscos;
- documentos relacionados.

Versões anteriores deverão ser preservadas como memória institucional.

## 212. Relação com o catálogo de capacidades

Os resultados deverão alimentar o catálogo de capacidades da Plataforma UNO.

Cada capacidade poderá indicar:

- funções suportadas;
- criticidade;
- dependências;
- MTPD;
- RTO;
- RPO;
- nível mínimo;
- estratégias;
- responsáveis;
- evidências.

## 213. Relação com o mapa de impacto

A análise deverá atualizar o mapa de impacto estabelecido pelo arquivo 017.

Esse mapa deverá permitir compreender:

- o que falhou;
- o que poderá falhar em seguida;
- quais pessoas serão afetadas;
- quais capacidades precisam ser preservadas;
- quais recursos devem ser mobilizados;
- qual recuperação produz maior valor.

## 214. Relação com os SLOs

Os requisitos de continuidade deverão ser coerentes com os compromissos de disponibilidade e confiabilidade do arquivo 016.

Contudo:

- SLO não substitui MTPD;
- disponibilidade média não substitui impacto contextual;
- erro permitido não representa automaticamente perda tolerável;
- meta de serviço não substitui estratégia de desastre.

## 215. Relação com a recuperabilidade

RPO, RTO e requisitos de reconstrução deverão ser comparados às capacidades comprovadas no arquivo 019.

Quando a necessidade for superior à capacidade atual, deverá existir:

- lacuna registrada;
- risco;
- responsável;
- estratégia provisória;
- plano de evolução;
- prazo;
- acompanhamento.

## 216. Matriz de requisitos de continuidade

Cada função poderá possuir registro estruturado contendo:

- identificador;
- propósito;
- proprietário;
- partes afetadas;
- impactos;
- criticidade;
- MTPD;
- RTO;
- RPO;
- MBCO;
- recursos mínimos;
- dependências;
- alternativas;
- cenários;
- autoridade;
- riscos;
- evidências;
- última revisão.

## 217. Coerência entre requisitos

Requisitos relacionados deverão ser avaliados em conjunto.

Não será coerente:

- definir RTO menor que o tempo de mobilização;
- definir RPO sem estratégia de backup correspondente;
- definir capacidade mínima superior aos recursos alternativos;
- exigir recuperação antes de suas dependências;
- declarar função crítica sem proprietário;
- estabelecer prioridade sem critério de conflito.

## 218. Viabilidade

Todo requisito deverá ser avaliado quanto à viabilidade:

- técnica;
- humana;
- financeira;
- jurídica;
- operacional;
- temporal;
- institucional.

Requisito inviável deverá permanecer visível como lacuna, e não ser silenciosamente alterado para corresponder à capacidade existente.

## 219. Lacuna de continuidade

Lacuna é a diferença entre:

- o que a missão necessita;
- o que a organização consegue entregar.

A lacuna poderá envolver:

- tempo;
- dados;
- capacidade;
- pessoas;
- dependências;
- alternativas;
- segurança;
- evidência;
- autoridade;
- comunicação.

## 220. Classificação da lacuna

Lacunas poderão ser classificadas conforme:

- gravidade;
- urgência;
- abrangência;
- duração;
- probabilidade;
- reversibilidade;
- obrigação;
- custo de correção;
- impacto humano;
- impacto institucional.

## 221. Tratamento da lacuna

Uma lacuna poderá ser tratada por:

- redução;
- redundância;
- substituição;
- transferência;
- automação;
- capacitação;
- contratação;
- documentação;
- reserva;
- redesign;
- aceitação formal;
- suspensão da função;
- mudança de compromisso.

## 222. Aceitação de risco

A aceitação deverá identificar:

- risco;
- impacto;
- partes afetadas;
- duração;
- justificativa;
- autoridade;
- medidas compensatórias;
- revisão;
- condição de encerramento.

Riscos sobre vida, dignidade, direitos ou legalidade não deverão ser aceitos por autoridade sem competência legítima.

## 223. Priorização de investimentos

Investimentos em continuidade deverão ser orientados por:

- impacto;
- criticidade;
- lacunas;
- dependências;
- obrigações;
- concentração;
- capacidade de redução de risco;
- valor público;
- sustentabilidade.

Ferramentas não deverão ser adquiridas apenas por popularidade ou aparência de maturidade.

## 224. Requisitos legais e normativos

A análise deverá incorporar desde o início:

- leis;
- regulamentos;
- normas técnicas;
- normas regulamentadoras;
- requisitos setoriais;
- contratos;
- políticas públicas;
- obrigações territoriais;
- direitos das pessoas.

A arquitetura deverá ser construída utilizando essas exigências como guias, e não adaptada somente depois de pronta.

## 225. Matriz normativa

Cada requisito aplicável deverá ser relacionado a:

- função;
- território;
- organização;
- obrigação;
- autoridade;
- evidência;
- prazo;
- estratégia;
- responsável;
- revisão.

## 226. Proteção de dados

A continuidade deverá considerar:

- base legal;
- minimização;
- necessidade;
- acesso;
- transferência;
- retenção;
- segurança;
- comunicação de incidente;
- direitos dos titulares;
- tratamento emergencial;
- retorno à normalidade.

## 227. Saúde e segurança do trabalho

Planos e requisitos deverão observar as normas de saúde e segurança aplicáveis.

Nenhuma estratégia deverá exigir que pessoas operem:

- em ambiente inseguro;
- sem equipamento;
- sem capacitação;
- além de limites humanos;
- sob risco não comunicado;
- sem proteção adequada.

## 228. Acessibilidade

A análise deverá considerar a continuidade para pessoas com diferentes necessidades.

Estratégias alternativas deverão avaliar:

- acesso físico;
- leitura;
- audição;
- comunicação;
- linguagem;
- tecnologia assistiva;
- apoio humano;
- canais não digitais;
- compreensão.

## 229. Equidade

Quando recursos forem limitados, a priorização deverá considerar quem possui menos alternativas e maior risco de dano.

Tratar todos de forma idêntica poderá produzir desigualdade quando as condições forem diferentes.

## 230. Valor público

A análise deverá reconhecer o valor produzido para:

- pessoas;
- comunidades;
- instituições;
- sociedade;
- ambiente;
- gerações futuras.

O valor público deverá participar da definição de criticidade e prioridade.

## 231. Antipadrões da análise de impacto

Constituem antipadrões:

- copiar requisitos de outra organização;
- definir tudo como crítico;
- definir nada como crítico;
- utilizar somente impacto financeiro;
- ignorar usuários;
- ignorar pessoas vulneráveis;
- confundir RTO com MTPD;
- definir tempos sem evidência;
- ocultar lacunas;
- presumir dependências;
- ignorar efeitos acumulados;
- tratar fornecedor como garantia automática;
- não revisar a análise;
- produzir documento sem estratégia correspondente.

## 232. Tudo crítico

Quando tudo é declarado crítico, a organização perde capacidade de priorizar.

A análise deverá distinguir:

- o que precisa ser contínuo;
- o que precisa ser recuperado rapidamente;
- o que pode operar degradado;
- o que pode aguardar;
- o que pode ser suspenso;
- o que pode ser encerrado.

## 233. Criticidade por influência

A posição hierárquica do proprietário não deverá determinar automaticamente a criticidade de sua função.

A criticidade deverá decorrer dos impactos e requisitos da missão.

## 234. Precisão artificial

Números extremamente precisos não deverão ser utilizados quando os dados não sustentarem essa precisão.

Um RTO de 37 minutos, por exemplo, deverá possuir fundamento verificável.

Quando houver incerteza, deverão ser utilizadas faixas, hipóteses e margens.

## 235. Requisito sem financiamento

Requisitos de continuidade deverão ser relacionados aos recursos necessários.

Quando não houver financiamento suficiente, a diferença deverá ser apresentada como risco institucional.

Não se deverá declarar capacidade inexistente para preservar aparência de conformidade.

## 236. Requisito sem exercício

Um requisito não exercitado deverá ser identificado como não comprovado.

A análise poderá estabelecer a necessidade.

Somente teste e evidência poderão demonstrar a capacidade.

## 237. Invariantes do Lote 2

Permanecem como invariantes:

- impacto sobre a vida precede conveniência;
- dignidade não pode ser convertida apenas em valor financeiro;
- criticidade é contextual;
- prioridade não é propriedade permanente;
- MTPD nasce da necessidade da missão;
- RTO deverá permanecer abaixo do MTPD;
- RPO deverá refletir perda realmente tolerável;
- capacidade mínima deverá ser definida;
- dependências deverão ser reconhecidas;
- recursos compartilhados deverão ser considerados;
- lacunas não deverão ser ocultadas;
- requisitos legais e normativos orientarão o desenho desde o início;
- números sem evidência não constituem precisão;
- função crítica sem proprietário não possui governança suficiente;
- requisito sem estratégia constitui intenção;
- estratégia sem teste constitui hipótese;
- teste sem evidência não constitui garantia.

## 238. Garantias produzidas pela análise

Uma análise madura deverá permitir garantir que:

- funções essenciais são reconhecidas;
- impactos são compreendidos;
- pessoas afetadas são consideradas;
- prioridades possuem fundamento;
- tempos possuem significado;
- recursos mínimos são conhecidos;
- dependências são visíveis;
- lacunas são registradas;
- autoridades são atribuídas;
- estratégias poderão ser projetadas;
- investimentos poderão ser priorizados;
- exercícios poderão ser avaliados;
- decisões poderão ser auditadas.

## 239. Resultado esperado do Lote 2

Ao concluir esta etapa, cada organização deverá possuir visão suficientemente clara de:

- sua missão;
- suas funções;
- seus serviços;
- seus impactos;
- suas criticidades;
- seus tempos;
- suas capacidades mínimas;
- seus recursos;
- suas dependências;
- seus riscos;
- suas lacunas;
- suas obrigações;
- suas prioridades.

## 240. Transição para o Lote 3

A análise de impacto transforma a realidade institucional em requisitos de continuidade.

O próximo lote deverá transformar esses requisitos em estratégias concretas para:

- preservar pessoas;
- redistribuir trabalho;
- operar em locais alternativos;
- utilizar canais alternativos;
- manter recursos financeiros;
- substituir fornecedores;
- recuperar tecnologia;
- preservar dados;
- trabalhar manualmente;
- federar capacidades;
- sustentar operações prolongadas;
- retornar com segurança.

A estratégia deverá responder não apenas como recuperar aquilo que foi perdido, mas como continuar servindo enquanto a recuperação ainda não foi concluída.

---

# Lote 3 — Estratégias de Continuidade e Estruturas Alternativas

## 241. Finalidade das estratégias

As estratégias de continuidade deverão transformar os requisitos identificados no Lote 2 em capacidades concretas para:

- preservar funções essenciais;
- manter níveis mínimos de serviço;
- reduzir impactos;
- substituir recursos indisponíveis;
- redistribuir responsabilidades;
- recuperar capacidades;
- sustentar a operação durante interrupções;
- retornar de maneira segura.

Uma estratégia deverá explicar como a organização continuará servindo quando sua forma ordinária de operar não estiver disponível.

## 242. Estratégia não é intenção

Declarações como:

- “utilizar ambiente alternativo”;
- “acionar fornecedor”;
- “trabalhar remotamente”;
- “restaurar o backup”;
- “mobilizar outra equipe”;

não constituem estratégias completas sem definição de:

- autoridade;
- recursos;
- condições;
- responsáveis;
- tempo;
- capacidade;
- segurança;
- dependências;
- limitações;
- validação;
- retorno.

## 243. Estratégia orientada à missão

Toda estratégia deverá demonstrar sua relação com:

- função essencial;
- impacto evitado;
- MTPD;
- RTO;
- RPO;
- MBCO;
- população atendida;
- obrigações;
- valor público.

Estratégias que preservem infraestrutura sem preservar missão deverão ser revistas.

## 244. Estratégia proporcional

A profundidade da estratégia deverá ser proporcional:

- à criticidade;
- ao impacto;
- à duração possível;
- à complexidade;
- à concentração;
- às obrigações;
- à dificuldade de substituição;
- à incerteza.

Funções de baixo impacto não deverão consumir recursos desproporcionais que seriam necessários às funções essenciais.

## 245. Estratégia multicamada

A continuidade não deverá depender de uma única proteção.

A estratégia poderá combinar camadas:

- prevenção;
- absorção;
- redundância;
- substituição;
- contingência;
- operação degradada;
- recuperação;
- reconciliação;
- adaptação.

A falha de uma camada não deverá eliminar automaticamente todas as demais.

## 246. Prevenção como primeira camada

A prevenção deverá reduzir a probabilidade ou a extensão da interrupção.

Poderão ser medidas preventivas:

- manutenção;
- monitoramento;
- treinamento;
- segurança;
- redundância;
- atualização;
- revisão;
- capacidade;
- proteção física;
- gestão de fornecedores;
- controle de mudanças;
- identificação de riscos.

A prevenção não substituirá a preparação para falhas inevitáveis ou imprevisíveis.

## 247. Absorção do impacto

A capacidade de absorção permite que a operação suporte a interrupção sem mudança imediata de modo.

Poderão contribuir:

- reservas;
- estoques;
- baterias;
- filas;
- caches;
- capacidade ociosa;
- redundância;
- tolerância a falhas;
- autonomia local;
- prazos de segurança.

## 248. Desvio operacional

O desvio direciona a demanda, o trabalho ou a comunicação para estrutura alternativa.

Poderá envolver:

- outro canal;
- outra equipe;
- outra instalação;
- outra região;
- outro sistema;
- outro fornecedor;
- outra organização;
- processamento posterior;
- atendimento manual.

## 249. Substituição

A substituição deverá permitir que um recurso indisponível seja temporária ou permanentemente trocado.

A organização deverá conhecer:

- compatibilidade;
- capacidade;
- tempo de ativação;
- treinamento;
- custo;
- limitações;
- riscos;
- integração;
- retorno;
- dependência criada.

## 250. Redistribuição

A redistribuição poderá transferir funções, demandas ou responsabilidades entre:

- pessoas;
- equipes;
- unidades;
- organizações;
- territórios;
- sistemas;
- fornecedores;
- agentes.

Ela deverá preservar autoridade, rastreabilidade, segurança e equilíbrio de capacidade.

## 251. Suspensão seletiva

Funções não essenciais poderão ser suspensas para liberar:

- pessoas;
- processamento;
- armazenamento;
- comunicação;
- instalações;
- recursos financeiros;
- atenção institucional.

A suspensão deverá ser autorizada, comunicada e acompanhada de estratégia de retorno ou encerramento.

## 252. Operação degradada

A operação degradada deverá preservar o maior valor possível com os recursos disponíveis.

Ela poderá reduzir:

- volume;
- frequência;
- velocidade;
- funcionalidades;
- canais;
- regiões;
- horários;
- personalização;
- automação.

Não deverá reduzir princípios fundamentais de legitimidade, dignidade, segurança e responsabilidade.

## 253. Estratégia manual

Processos manuais poderão ser utilizados quando sistemas ou automações estiverem indisponíveis.

A estratégia deverá definir:

- formulários;
- identificadores;
- autorização;
- registro temporal;
- validação;
- armazenamento;
- proteção;
- limite de volume;
- reconciliação;
- descarte posterior;
- treinamento.

## 254. Limites da operação manual

A operação manual poderá apresentar:

- menor capacidade;
- maior latência;
- maior risco de erro;
- menor visibilidade;
- dificuldade de pesquisa;
- duplicidade;
- exposição de dados;
- dependência humana;
- dificuldade de reconciliação.

Esses limites deverão ser conhecidos antes da ativação.

## 255. Registro durante contingência

Toda estratégia deverá preservar registros suficientes para reconstruir:

- solicitações;
- decisões;
- autorizações;
- atendimentos;
- transações;
- alterações;
- comunicações;
- responsáveis;
- resultados;
- exceções.

A continuidade da ação não deverá produzir descontinuidade da memória.

## 256. Estratégia de trabalho remoto

O trabalho remoto poderá ser adotado quando instalações estiverem indisponíveis.

A estratégia deverá considerar:

- equipamentos;
- conectividade;
- identidade;
- acesso;
- segurança;
- privacidade;
- ambiente doméstico;
- comunicação;
- supervisão;
- saúde;
- ergonomia;
- suporte;
- dependências familiares.

## 257. Trabalho remoto não universal

A organização não deverá presumir que todas as pessoas possuem:

- computador;
- internet confiável;
- espaço adequado;
- energia contínua;
- privacidade;
- acessibilidade;
- disponibilidade familiar;
- conhecimento técnico.

Alternativas deverão ser proporcionadas quando o trabalho remoto for necessário à função.

## 258. Estratégia de local alternativo

Um local alternativo deverá possuir condições suficientes de:

- segurança;
- acesso;
- energia;
- comunicação;
- equipamentos;
- ergonomia;
- proteção de dados;
- capacidade;
- acessibilidade;
- coordenação;
- permanência.

A existência física do local não comprova sua prontidão operacional.

## 259. Local alternativo quente

Um local quente poderá permanecer preparado com:

- infraestrutura;
- equipamentos;
- conectividade;
- dados;
- configurações;
- equipes ou capacidade de ocupação rápida.

Ele buscará reduzir o tempo de ativação, com custo e manutenção maiores.

## 260. Local alternativo morno

Um local morno poderá possuir parte dos recursos necessários e depender de:

- configuração;
- carregamento de dados;
- mobilização de pessoas;
- instalação de componentes;
- validação.

Seu tempo real de ativação deverá ser conhecido e testado.

## 261. Local alternativo frio

Um local frio poderá oferecer espaço e recursos básicos, exigindo preparação mais ampla.

Ele poderá ser adequado a funções com maior tolerância à interrupção, desde que:

- os recursos sejam obtíveis;
- o prazo seja compatível;
- existam procedimentos;
- as dependências sejam conhecidas.

## 262. Local de trabalho recíproco

Organizações ou unidades poderão estabelecer acordos para utilização recíproca de instalações.

O acordo deverá definir:

- capacidade;
- prioridade;
- segurança;
- privacidade;
- custos;
- autoridade;
- duração;
- conflito de demanda;
- testes;
- encerramento.

## 263. Conflito regional

Locais alternativos não deverão ser considerados independentes apenas por possuírem endereços diferentes.

Deverão ser avaliados riscos comuns:

- energia;
- telecomunicação;
- clima;
- transporte;
- segurança;
- provedor;
- acesso;
- desastre regional;
- autoridade territorial.

## 264. Estratégia de mobilidade

Funções que exijam presença física poderão depender de:

- veículos;
- combustível;
- rotas;
- motoristas;
- autorizações;
- manutenção;
- pontos de apoio;
- transporte público;
- acessibilidade.

Rotas alternativas deverão considerar congestionamento, interdição e risco.

## 265. Estratégia de energia

A continuidade energética poderá combinar:

- alimentação redundante;
- nobreak;
- baterias;
- geradores;
- energia solar;
- contratos;
- locais alternativos;
- redução de carga;
- prioridade de circuitos;
- desligamento controlado.

## 266. Autonomia energética

A estratégia deverá conhecer:

- carga essencial;
- tempo de autonomia;
- capacidade real;
- combustível;
- recarga;
- manutenção;
- segurança;
- ventilação;
- responsáveis;
- testes;
- tempo de reposição.

Autonomia nominal não deverá ser confundida com autonomia observada.

## 267. Estratégia de telecomunicações

A continuidade poderá utilizar:

- múltiplos provedores;
- rotas distintas;
- redes móveis;
- rádio;
- satélite;
- comunicação offline;
- pontos físicos;
- mensageria assíncrona;
- redes comunitárias.

A diversidade comercial não garante diversidade física ou lógica.

## 268. Estratégia de comunicação offline

Quando não houver conectividade, deverão existir mecanismos para:

- divulgar orientações;
- registrar ocorrências;
- coletar demandas;
- autenticar mensagens;
- transmitir prioridades;
- consolidar informações;
- sincronizar posteriormente.

## 269. Estratégia de identidade

A perda do provedor principal de identidade não deverá impedir toda a operação.

Poderão existir:

- contas emergenciais;
- identidades locais;
- credenciais temporárias;
- diretórios alternativos;
- autenticação offline;
- procedimentos manuais;
- validação por múltiplas pessoas.

## 270. Contas emergenciais

Contas emergenciais deverão ser:

- limitadas;
- protegidas;
- testadas;
- monitoradas;
- documentadas;
- segregadas;
- rotacionadas;
- acessadas somente quando necessário.

Seu uso deverá produzir evidência e revisão posterior.

## 271. Estratégia de autoridade

A continuidade deverá preservar a capacidade de autorizar ações legítimas.

A estratégia deverá prever:

- titulares;
- substitutos;
- delegação;
- quórum alternativo;
- autenticação;
- registro;
- duração;
- revogação;
- retorno da autoridade ordinária.

## 272. Deliberação alternativa

Quando os meios ordinários de reunião ou votação estiverem indisponíveis, poderão existir meios alternativos.

Eles deverão preservar:

- identidade;
- participação;
- quórum;
- transparência;
- registro;
- integridade;
- possibilidade de contestação;
- segurança;
- acessibilidade.

## 273. Estratégia de comunicação institucional

A comunicação de continuidade deverá possuir:

- responsáveis;
- porta-vozes;
- substitutos;
- mensagens preparadas;
- modelos;
- canais;
- listas de contato;
- critérios de divulgação;
- frequência;
- validação;
- acessibilidade.

## 274. Mensagens pré-elaboradas

Mensagens pré-elaboradas poderão acelerar a comunicação sobre:

- indisponibilidade;
- canais alternativos;
- segurança;
- ativação;
- mudança de prioridade;
- previsão;
- retorno;
- correção de informação.

Elas deverão ser adaptadas ao contexto antes da publicação.

## 275. Comunicação com pessoas vulneráveis

Estratégias deverão incluir meios adequados para pessoas:

- sem acesso digital;
- com deficiência;
- idosas;
- hospitalizadas;
- em áreas remotas;
- em situação de rua;
- com dificuldade de leitura;
- com idioma diferente;
- dependentes do serviço.

## 276. Estratégia de capacidade humana

A continuidade humana poderá utilizar:

- sucessão;
- treinamento cruzado;
- equipes reservas;
- fornecedores;
- parceiros;
- voluntários qualificados;
- agentes;
- redistribuição;
- escalas;
- pausas obrigatórias.

## 277. Treinamento cruzado

Competências críticas deverão ser distribuídas entre pessoas suficientes.

O treinamento cruzado deverá incluir:

- teoria;
- prática;
- acesso;
- autoridade;
- documentação;
- acompanhamento;
- exercício;
- avaliação.

## 278. Equipes de reserva

Equipes de reserva poderão ser mobilizadas para:

- substituir indisponíveis;
- ampliar capacidade;
- permitir descanso;
- sustentar operação prolongada;
- recuperar serviços;
- realizar reconciliação.

Sua existência deverá ser real, atualizada e testada.

## 279. Escalas extraordinárias

Escalas extraordinárias deverão respeitar:

- limites humanos;
- legislação;
- descanso;
- alimentação;
- segurança;
- deslocamento;
- saúde;
- responsabilidades familiares;
- substituição;
- duração.

## 280. Fadiga

A fadiga deverá ser tratada como risco operacional.

Ela poderá produzir:

- erro;
- acidente;
- conflito;
- decisão inadequada;
- perda de percepção;
- falha de comunicação;
- comprometimento de segurança.

Planos deverão prever rodízio e recuperação das pessoas.

## 281. Apoio psicossocial

Interrupções graves poderão afetar emocionalmente operadores, usuários e comunidades.

Estratégias deverão considerar:

- acolhimento;
- orientação;
- apoio profissional;
- comunicação;
- pausas;
- encaminhamento;
- proteção contra estigma;
- acompanhamento posterior.

## 282. Estratégia de conhecimento

Conhecimentos essenciais deverão ser preservados em:

- procedimentos;
- mapas;
- contatos;
- diagramas;
- decisões;
- registros;
- treinamentos;
- bases de conhecimento;
- memória institucional.

## 283. Documentação offline

Documentos críticos deverão possuir forma acessível quando os repositórios principais estiverem indisponíveis.

A documentação offline deverá ser:

- protegida;
- atualizada;
- identificada;
- limitada ao necessário;
- acessível aos responsáveis;
- controlada;
- recuperável;
- descartada com segurança quando substituída.

## 284. Pacote de continuidade

Cada função crítica poderá possuir pacote de continuidade contendo:

- contatos;
- responsabilidades;
- requisitos;
- dependências;
- procedimentos;
- formulários;
- credenciais emergenciais;
- mapas;
- fornecedores;
- critérios de ativação;
- comunicação;
- retorno.

Conteúdos sensíveis deverão permanecer protegidos.

## 285. Estratégia financeira

A estratégia financeira deverá permitir:

- pagamento de pessoas;
- aquisição emergencial;
- manutenção de serviços;
- apoio a deslocamentos;
- contratação de alternativas;
- reposição de recursos;
- resposta a danos.

## 286. Reserva de continuidade

Reservas poderão ser:

- financeiras;
- materiais;
- tecnológicas;
- humanas;
- contratuais;
- territoriais.

A utilização deverá possuir autoridade, critérios, limites, registros e prestação de contas.

## 287. Meios alternativos de pagamento

A organização deverá avaliar alternativas diante da indisponibilidade de:

- banco;
- adquirente;
- Pix;
- cartão;
- internet;
- conta institucional;
- autorizador;
- sistema financeiro interno.

Alternativas deverão preservar legalidade, segurança, reconciliação e prevenção de fraude.

## 288. Fraude durante interrupções

Condições adversas ampliam oportunidades de fraude.

Estratégias deverão manter controles como:

- dupla autorização;
- limites;
- confirmação por canal alternativo;
- registro;
- segregação;
- revisão;
- monitoramento;
- reconciliação.

## 289. Estratégia de suprimentos

Recursos físicos essenciais deverão possuir:

- estoque mínimo;
- fornecedores alternativos;
- prazo de reposição;
- condições de armazenamento;
- transporte;
- controle de validade;
- distribuição;
- prioridade.

## 290. Estoque de segurança

O estoque deverá considerar:

- consumo normal;
- consumo extraordinário;
- duração do evento;
- prazo de reposição;
- deterioração;
- custo;
- espaço;
- risco de concentração;
- validade.

## 291. Estratégia de fornecedor alternativo

Um fornecedor alternativo deverá possuir:

- capacidade;
- compatibilidade;
- contrato ou caminho de contratação;
- acesso;
- segurança;
- prazo;
- localização;
- recursos;
- responsabilidade;
- possibilidade de teste.

## 292. Contrato de prontidão

Poderão existir contratos que garantam:

- prioridade;
- reserva de capacidade;
- prazo de mobilização;
- suporte;
- recursos;
- local alternativo;
- equipamentos;
- especialistas;
- transporte;
- recuperação.

A capacidade contratada deverá ser periodicamente confirmada.

## 293. Concentração de fornecedores

A organização deverá avaliar se diferentes fornecedores dependem dos mesmos:

- data centers;
- redes;
- subcontratados;
- fabricantes;
- regiões;
- plataformas;
- identidades;
- meios de pagamento.

Diversidade aparente poderá ocultar concentração estrutural.

## 294. Estratégia de saída

Todo fornecedor crítico deverá possuir estratégia de saída proporcional.

Ela poderá abranger:

- exportação de dados;
- formatos;
- documentação;
- transferência de conhecimento;
- substituição;
- prazos;
- licenças;
- credenciais;
- encerramento seguro;
- apoio de transição.

## 295. Estratégia tecnológica

A estratégia tecnológica deverá ser derivada dos requisitos da missão.

Ela poderá utilizar:

- redundância;
- replicação;
- backup;
- clusters;
- múltiplas regiões;
- múltiplos provedores;
- infraestrutura reconstruível;
- ambientes alternativos;
- processamento local;
- serviços degradados;
- recuperação manual.

## 296. Arquitetura ativa-ativa

Na arquitetura ativa-ativa, múltiplos ambientes poderão atender simultaneamente.

A estratégia deverá tratar:

- distribuição;
- consistência;
- conflito;
- capacidade;
- roteamento;
- falha comum;
- segurança;
- observabilidade;
- retorno;
- custo.

## 297. Arquitetura ativa-passiva

Na arquitetura ativa-passiva, um ambiente alternativo permanece preparado para assumir a operação.

A estratégia deverá definir:

- estado de prontidão;
- sincronização;
- ativação;
- capacidade;
- validação;
- autoridade;
- tempo;
- retorno;
- risco de configuração divergente.

## 298. Ambiente alternativo reconstruível

A organização poderá reconstruir ambientes por meio de:

- infraestrutura como código;
- configuração como código;
- imagens;
- pacotes;
- automações;
- catálogos;
- backups;
- documentação;
- credenciais protegidas.

A reconstrução deverá ser testada sem dependência oculta do ambiente original.

## 299. Múltiplas regiões

O uso de múltiplas regiões deverá considerar:

- distância;
- latência;
- soberania;
- custo;
- consistência;
- dependências compartilhadas;
- falhas do provedor;
- identidade;
- conectividade;
- regulamentação.

## 300. Múltiplos provedores

Uma estratégia multiprovedor poderá reduzir algumas concentrações, mas aumentar:

- complexidade;
- custo;
- incompatibilidade;
- necessidade de conhecimento;
- dificuldade de observabilidade;
- superfície de ataque;
- divergência operacional.

Sua adoção deverá ser justificada por risco e capacidade institucional.

## 301. Portabilidade

Sistemas críticos deverão avaliar a possibilidade de transferência entre ambientes.

A portabilidade depende de:

- dados exportáveis;
- formatos conhecidos;
- configurações;
- dependências;
- licenças;
- identidade;
- integrações;
- automação;
- documentação;
- testes.

## 302. Estratégia de dados

A continuidade dos dados deverá integrar:

- backup;
- replicação;
- retenção;
- integridade;
- consistência;
- proteção;
- acesso;
- recuperação;
- reconciliação;
- soberania.

## 303. Consistência entre sistemas

Sistemas relacionados deverão possuir estratégia para preservar ou reconstruir consistência.

Poderão ser utilizados:

- grupos de consistência;
- registros de eventos;
- identificadores;
- timestamps;
- idempotência;
- reconciliação;
- compensação;
- validação cruzada;
- reprocessamento.

## 304. Processamento assíncrono

Filas e eventos poderão permitir que atividades sejam retomadas após indisponibilidade temporária.

A estratégia deverá tratar:

- retenção;
- ordem;
- duplicidade;
- expiração;
- reprocessamento;
- prioridades;
- efeitos externos;
- mensagens inválidas;
- capacidade acumulada.

## 305. Idempotência

Operações recuperáveis deverão, quando possível, suportar repetição sem produzir efeitos indevidos.

A idempotência deverá ser considerada em:

- pagamentos;
- notificações;
- solicitações;
- integrações;
- provisionamento;
- atualizações;
- execução de missões.

## 306. Estratégia de integração

Integrações críticas deverão possuir:

- detecção de falha;
- fila;
- repetição;
- limite;
- circuito de proteção;
- alternativa;
- validação;
- reconciliação;
- observabilidade;
- comunicação.

## 307. Modo desconectado

Quando necessário, capacidades poderão operar temporariamente sem conexão central.

O modo desconectado deverá definir:

- dados locais;
- autoridade;
- limite temporal;
- segurança;
- conflito;
- sincronização;
- reconciliação;
- revogação;
- atualização;
- retorno.

## 308. Autonomia local

Unidades locais poderão receber autonomia para preservar funções essenciais quando a coordenação central estiver indisponível.

Essa autonomia deverá possuir:

- propósito;
- limites;
- recursos;
- critérios;
- responsabilidades;
- registros;
- comunicação posterior;
- revisão;
- retorno à coordenação.

## 309. Estratégia federada

Organizações federadas poderão compartilhar:

- capacidade;
- infraestrutura;
- especialistas;
- instalações;
- comunicação;
- suprimentos;
- dados autorizados;
- recuperação.

O compartilhamento deverá preservar identidade, soberania, segurança e responsabilidade.

## 310. Mutualização

A mutualização permite que recursos comuns apoiem organizações afetadas.

Ela deverá definir:

- critérios de acesso;
- prioridade;
- contribuição;
- capacidade;
- governança;
- custos;
- limites;
- segurança;
- conflito;
- prestação de contas.

## 311. Conflito simultâneo na federação

Um desastre amplo poderá afetar várias organizações que dependem da mesma reserva.

A estratégia deverá considerar:

- capacidade total;
- critérios de rateio;
- funções vitais;
- vulnerabilidade;
- alternativas;
- escalonamento;
- transparência;
- recomposição.

## 312. Colaboração com poder público

Quando aplicável, a continuidade poderá exigir coordenação com:

- defesa civil;
- saúde;
- segurança;
- assistência social;
- concessionárias;
- municípios;
- estados;
- União;
- reguladores;
- serviços de emergência.

Responsabilidades e canais deverão ser conhecidos antes do evento.

## 313. Colaboração comunitária

Comunidades poderão apoiar:

- percepção local;
- comunicação;
- acolhimento;
- distribuição;
- transporte;
- identificação de necessidades;
- priorização;
- validação;
- recuperação.

A colaboração não deverá substituir responsabilidades institucionais nem expor voluntários a riscos indevidos.

## 314. Estratégia para operações prolongadas

Interrupções prolongadas exigirão transição entre:

- resposta imediata;
- sustentação;
- recuperação;
- reorganização;
- retorno;
- transformação.

A estratégia deverá prever recursos e autoridades para cada fase.

## 315. Sustentação prolongada

A sustentação deverá considerar:

- escalas;
- suprimentos;
- finanças;
- contratos;
- manutenção;
- comunicação;
- saúde;
- segurança;
- atualização de prioridades;
- substituição;
- aprendizagem em curso.

## 316. Estratégia de capacidade crescente

A recuperação poderá ampliar a capacidade em estágios:

- capacidade de sobrevivência;
- capacidade mínima;
- capacidade prioritária;
- capacidade ampliada;
- capacidade normal;
- capacidade melhorada.

Cada estágio deverá possuir critérios de entrada e saída.

## 317. Estratégia de retorno

O retorno deverá definir:

- condições;
- autoridade;
- sequência;
- migração;
- sincronização;
- validação;
- comunicação;
- reversibilidade;
- monitoramento;
- encerramento do ambiente alternativo.

## 318. Retorno gradual

A organização poderá retornar por:

- grupos de usuários;
- regiões;
- serviços;
- funções;
- volumes;
- horários;
- níveis de risco.

O retorno gradual permite observar estabilidade e limitar impactos.

## 319. Plano de reversão do retorno

Se o ambiente recuperado falhar, deverá existir possibilidade de voltar temporariamente à estratégia alternativa.

O plano deverá preservar:

- estados;
- registros;
- capacidade;
- comunicação;
- autoridade;
- segurança;
- critérios;
- dados produzidos durante a tentativa.

## 320. Encerramento do ambiente alternativo

O ambiente alternativo somente deverá ser encerrado após:

- estabilização;
- reconciliação;
- validação;
- transferência de registros;
- revogação de acessos;
- proteção de evidências;
- comunicação;
- autorização;
- preservação de aprendizados.

## 321. Estratégia de reconciliação

A reconciliação deverá tratar diferenças entre:

- ambiente ordinário;
- ambiente alternativo;
- registros manuais;
- sistemas externos;
- filas;
- pagamentos;
- comunicações;
- decisões;
- estoques;
- identidades.

## 322. Fonte de verdade durante a interrupção

A estratégia deverá definir qual fonte será considerada referência para cada tipo de estado.

Poderão existir fontes diferentes para:

- identidade;
- transações;
- decisões;
- recursos;
- comunicação;
- filas;
- evidências.

A fonte deverá ser explicitamente declarada e temporalmente identificada.

## 323. Conflito entre fontes

Quando fontes divergirem, a reconciliação deverá considerar:

- autoridade;
- proveniência;
- tempo;
- integridade;
- completude;
- evidência;
- efeitos externos;
- possibilidade de duplicidade;
- impacto humano;
- obrigação.

## 324. Estratégia de compensação

Quando não for possível reverter determinado efeito, poderá ser necessária compensação.

Ela deverá ser:

- legítima;
- proporcional;
- rastreável;
- comunicada;
- autorizada;
- registrada;
- revisável.

## 325. Estratégia de segurança

Toda estratégia deverá incorporar segurança desde o desenho.

Deverão ser preservados:

- identidade;
- menor privilégio;
- segregação;
- criptografia;
- monitoramento;
- evidência;
- validação;
- resposta a comprometimento;
- proteção física;
- privacidade.

## 326. Segurança adaptativa

Alguns controles poderão precisar mudar durante a interrupção.

A mudança deverá:

- possuir fundamento;
- preservar controles essenciais;
- limitar exposição;
- ser temporária;
- ser monitorada;
- ser registrada;
- ser revertida após a necessidade.

## 327. Exceção de segurança

A exceção não deverá ser utilizada como atalho informal.

Ela deverá conter:

- risco;
- justificativa;
- autoridade;
- escopo;
- duração;
- compensações;
- monitoramento;
- encerramento;
- revisão posterior.

## 328. Estratégia de preservação de evidências

A continuidade deverá preservar evidências necessárias para:

- compreender o evento;
- investigar;
- responsabilizar;
- auditar;
- reconciliar;
- aprender;
- atender autoridades;
- defender direitos.

## 329. Estratégia contra comprometimento propagado

Quando houver suspeita de comprometimento, a estratégia deverá evitar propagá-lo para:

- ambientes alternativos;
- backups;
- identidades;
- fornecedores;
- organizações federadas;
- dispositivos;
- canais de comunicação.

## 330. Estratégia de restauração limpa

A recuperação poderá exigir:

- ambiente limpo;
- credenciais novas;
- componentes verificados;
- dados validados;
- isolamento;
- observação;
- autorização;
- reintegração gradual.

## 331. Critérios de seleção de estratégia

A escolha deverá considerar:

- impacto reduzido;
- tempo;
- capacidade;
- segurança;
- custo;
- complexidade;
- sustentabilidade;
- legalidade;
- dependências;
- testabilidade;
- reversibilidade;
- valor público.

## 332. Comparação entre alternativas

Alternativas deverão ser comparadas de forma explícita.

A análise poderá avaliar:

- benefícios;
- riscos;
- custo inicial;
- custo recorrente;
- tempo de ativação;
- duração suportada;
- capacidade;
- limitações;
- pessoas necessárias;
- dependências;
- evidências.

## 333. Custo da continuidade

O custo deverá incluir:

- tecnologia;
- pessoas;
- treinamento;
- instalações;
- contratos;
- estoques;
- testes;
- manutenção;
- auditoria;
- atualização;
- oportunidade;
- complexidade.

## 334. Custo da interrupção

O investimento deverá ser comparado ao custo potencial de:

- perda humana;
- perda de direitos;
- perda financeira;
- sanção;
- desassistência;
- perda de confiança;
- recuperação;
- reconstrução;
- efeitos duradouros;
- ruptura institucional.

## 335. Sustentabilidade da estratégia

Uma estratégia somente será sustentável quando puder ser:

- financiada;
- mantida;
- atualizada;
- compreendida;
- exercitada;
- operada;
- auditada;
- sucedida;
- adaptada.

## 336. Complexidade como risco

Toda camada adicional poderá criar:

- dependência;
- configuração;
- custo;
- necessidade de conhecimento;
- falha;
- alerta;
- superfície de ataque;
- dificuldade de teste.

A complexidade deverá produzir benefício proporcional.

## 337. Estratégia simples e suficiente

Quando duas estratégias oferecerem garantias equivalentes, deverá ser preferida aquela que:

- seja mais compreensível;
- possua menos dependências;
- seja mais testável;
- permita maior autonomia;
- tenha menor risco oculto;
- seja mais sustentável.

## 338. Estratégia provisória

Enquanto a solução definitiva não existir, poderá ser adotada estratégia provisória.

Ela deverá possuir:

- escopo;
- prazo;
- risco;
- limitações;
- responsáveis;
- controles;
- revisão;
- substituição planejada.

## 339. Estratégia não comprovada

Uma estratégia ainda não testada deverá ser identificada como:

**NÃO COMPROVADA**

Ela não deverá ser apresentada como garantia plena de continuidade.

## 340. Catálogo de estratégias

A Plataforma UNO deverá manter catálogo relacionando:

- função;
- cenário;
- estratégia;
- responsável;
- recursos;
- dependências;
- ativação;
- capacidade;
- duração;
- riscos;
- testes;
- evidências;
- versão.

## 341. Arquitetura estratégica integrada

As estratégias deverão formar arquitetura coerente.

Não deverão existir conflitos como:

- local alternativo dependente do local perdido;
- recuperação dependente da identidade indisponível;
- comunicação alternativa acessível somente pelo sistema afetado;
- fornecedor alternativo dependente do mesmo provedor;
- procedimento offline armazenado apenas online;
- conta emergencial protegida por autenticação indisponível;
- equipe reserva formada pelas mesmas pessoas mobilizadas em outra função.

## 342. Validação prévia

Antes da aprovação, a estratégia deverá ser validada por:

- proprietários;
- operadores;
- segurança;
- tecnologia;
- pessoas;
- jurídico;
- finanças;
- fornecedores;
- partes afetadas, quando aplicável.

## 343. Aprovação

A aprovação deverá considerar:

- adequação ao impacto;
- atendimento aos tempos;
- capacidade mínima;
- recursos;
- riscos;
- obrigações;
- custos;
- evidências;
- lacunas.

## 344. Revisão de estratégias

Estratégias deverão ser revistas quando houver:

- mudança de missão;
- alteração de requisito;
- mudança de tecnologia;
- mudança de pessoas;
- mudança de fornecedor;
- mudança de instalação;
- incidente;
- exercício;
- falha;
- nova obrigação;
- mudança de risco.

## 345. Antipadrões estratégicos

Constituem antipadrões:

- depender de uma única solução;
- confundir contrato com capacidade;
- pressupor pessoas sempre disponíveis;
- declarar trabalho remoto sem infraestrutura;
- possuir local alternativo não testado;
- restaurar sem validar;
- utilizar manual sem reconciliação;
- ignorar fadiga;
- enfraquecer segurança sem limite;
- criar autonomia sem responsabilidade;
- manter estratégia economicamente insustentável;
- ocultar que a estratégia não foi comprovada.

## 346. Invariantes do Lote 3

Permanecem como invariantes:

- estratégia deverá preservar missão;
- vida e dignidade precedem conveniência;
- toda alternativa possuirá limites;
- toda autonomia será governada;
- toda exceção será temporária;
- todo estado alternativo deverá ser reconciliável;
- toda autoridade deverá ser atribuível;
- todo ambiente alternativo deverá ser protegido;
- toda dependência deverá ser reconhecida;
- todo retorno deverá ser controlado;
- toda estratégia crítica deverá ser testável;
- toda capacidade não testada deverá ser declarada não comprovada;
- continuidade não poderá depender de sacrifício humano ilimitado;
- diversidade aparente não garante independência;
- recuperação não deverá propagar comprometimento;
- forma poderá mudar, propósito não.

## 347. Garantias esperadas

As estratégias deverão produzir garantias de que:

- funções essenciais possuem alternativas;
- pessoas possuem proteção;
- autoridades possuem sucessão;
- recursos mínimos são conhecidos;
- locais alternativos são adequados;
- canais alternativos existem;
- dados podem ser recuperados;
- operações manuais podem ser reconciliadas;
- fornecedores podem ser substituídos;
- ambientes podem ser reconstruídos;
- estruturas federadas podem cooperar;
- retorno pode ocorrer com segurança.

## 348. Resultado esperado do Lote 3

Ao final desta etapa, a organização deverá possuir estratégias que respondam:

- como continuar;
- como reduzir;
- como substituir;
- como redistribuir;
- como recuperar;
- como sustentar;
- como comunicar;
- como proteger;
- como reconciliar;
- como retornar.

## 349. Transição para o Lote 4

As estratégias estabelecem possibilidades de continuidade.

O próximo lote deverá transformá-las em planos acionáveis, definindo:

- documentos;
- níveis de ativação;
- critérios de declaração;
- estruturas de coordenação;
- responsabilidades;
- comunicação;
- recuperação tecnológica;
- mobilização;
- acompanhamento;
- retorno;
- encerramento.

Um plano não deverá apenas descrever o que seria desejável.

Deverá permitir que pessoas e agentes autorizados reconheçam o evento, tomem decisões, mobilizem capacidades e atravessem a interrupção com consciência institucional.

---

# Lote 4 — Planos, Ativação, Coordenação e Recuperação de Desastres

## 350. Finalidade dos planos

Os planos deverão transformar estratégias de continuidade em instruções, responsabilidades, decisões e recursos acionáveis.

Um plano deverá permitir que a organização:

- reconheça a interrupção;
- compreenda sua extensão;
- declare o nível adequado;
- mobilize pessoas e recursos;
- preserve funções essenciais;
- ative estruturas alternativas;
- recupere capacidades;
- acompanhe impactos;
- comunique;
- reconcilie estados;
- retorne;
- encerre a ativação;
- aprenda.

## 351. Plano como instrumento vivo

O plano não deverá ser tratado como documento estático produzido apenas para auditoria.

Ele deverá permanecer:

- acessível;
- atualizado;
- compreensível;
- executável;
- protegido;
- versionado;
- exercitado;
- integrado à operação;
- conhecido pelos responsáveis.

## 352. Conjunto de planos

A continuidade poderá exigir um conjunto coordenado de planos, incluindo:

- Plano de Continuidade Operacional;
- Plano de Continuidade Institucional;
- Plano de Recuperação de Desastres;
- Plano de Comunicação;
- Plano de Evacuação;
- Plano de Resposta a Incidentes;
- Plano de Operação Degradada;
- Plano de Recuperação de Dados;
- Plano de Continuidade de Pessoas;
- Plano de Continuidade de Fornecedores;
- Plano de Retorno;
- planos específicos por serviço, organização ou território.

## 353. Integração entre planos

Os planos deverão possuir relações explícitas.

Cada plano deverá indicar:

- quando se aplica;
- quem o ativa;
- quais outros planos aciona;
- quais responsabilidades compartilha;
- quais precedências existem;
- como os conflitos serão resolvidos;
- qual autoridade coordena o conjunto.

## 354. Plano de Continuidade Operacional

O Plano de Continuidade Operacional deverá estabelecer como as funções essenciais serão mantidas ou recuperadas.

Ele deverá relacionar:

- funções;
- prioridades;
- níveis mínimos;
- recursos;
- responsáveis;
- estratégias;
- dependências;
- comunicação;
- critérios de ativação;
- retorno.

## 355. Plano de Recuperação de Desastres

O Plano de Recuperação de Desastres deverá estabelecer como serão recuperados os recursos tecnológicos e informacionais necessários à missão.

Ele deverá abranger:

- ambientes;
- sistemas;
- aplicações;
- redes;
- dados;
- identidades;
- integrações;
- observabilidade;
- segurança;
- validação;
- reconciliação;
- retorno tecnológico.

## 356. Plano de continuidade institucional

O plano institucional deverá preservar:

- autoridade;
- liderança;
- sucessão;
- deliberação;
- legitimidade;
- memória;
- comunicação oficial;
- compromissos;
- prestação de contas;
- relações externas.

## 357. Plano de comunicação

O plano de comunicação deverá estabelecer:

- públicos;
- porta-vozes;
- substitutos;
- canais;
- modelos;
- frequência;
- aprovações;
- autenticação;
- acessibilidade;
- correção;
- preservação de registros.

## 358. Plano de continuidade humana

O plano humano deverá tratar:

- proteção;
- contato;
- disponibilidade;
- sucessão;
- substituição;
- deslocamento;
- trabalho remoto;
- escalas;
- descanso;
- saúde;
- apoio psicossocial;
- retorno.

## 359. Plano por função

Funções críticas poderão possuir planos específicos contendo:

- propósito;
- proprietário;
- MTPD;
- RTO;
- RPO;
- MBCO;
- dependências;
- recursos mínimos;
- estratégias;
- procedimentos;
- contatos;
- critérios;
- evidências.

## 360. Identidade do plano

Cada plano deverá possuir:

- identificador;
- título;
- proprietário;
- versão;
- data;
- escopo;
- classificação;
- autoridade aprovadora;
- data de revisão;
- documentos relacionados;
- histórico de alterações.

## 361. Escopo do plano

O escopo deverá indicar claramente:

- organizações abrangidas;
- funções;
- serviços;
- territórios;
- instalações;
- sistemas;
- fornecedores;
- pessoas;
- eventos;
- exclusões;
- limitações.

## 362. Objetivos do plano

Os objetivos deverão ser observáveis.

Poderão incluir:

- proteger pessoas;
- preservar autoridade;
- manter capacidade mínima;
- recuperar serviço dentro do RTO;
- limitar perda ao RPO;
- comunicar em tempo adequado;
- reconciliar operações;
- retornar com segurança.

## 363. Premissas do plano

O plano deverá registrar as condições consideradas disponíveis.

Exemplos:

- determinado local permanece acessível;
- equipe mínima está disponível;
- cópia de dados está íntegra;
- canal alternativo funciona;
- fornecedor responde;
- autoridade substituta pode atuar.

## 364. Falha das premissas

O plano deverá indicar o que fazer quando suas premissas não forem verdadeiras.

Poderão ser necessárias:

- estratégia secundária;
- escalonamento;
- redução de capacidade;
- apoio externo;
- autonomia local;
- suspensão;
- reavaliação institucional.

## 365. Dependências do plano

Cada plano deverá registrar:

- pessoas;
- informações;
- tecnologias;
- instalações;
- fornecedores;
- autoridades;
- recursos financeiros;
- comunicação;
- energia;
- transporte;
- documentação.

## 366. Pontos de decisão

O plano deverá identificar decisões que não podem ser totalmente automatizadas.

Cada ponto deverá apresentar:

- pergunta;
- informações necessárias;
- opções;
- impactos;
- autoridade;
- prazo;
- critério;
- registro.

## 367. Procedimentos

Os procedimentos deverão ser suficientemente claros para execução por pessoas capacitadas.

Deverão indicar:

- sequência;
- responsável;
- entrada;
- ação;
- resultado esperado;
- validação;
- desvio;
- escalonamento;
- evidência;
- encerramento.

## 368. Listas de verificação

Listas de verificação poderão apoiar:

- detecção;
- declaração;
- ativação;
- mobilização;
- segurança;
- recuperação;
- validação;
- comunicação;
- retorno;
- encerramento.

Elas deverão apoiar o julgamento, e não substituir a compreensão do contexto.

## 369. Cartões de ação

Papéis críticos poderão possuir cartões de ação com:

- responsabilidade imediata;
- contatos;
- autoridade;
- primeiras ações;
- limites;
- registros;
- canais;
- escalonamento;
- substituto.

## 370. Diagramas e mapas

Planos poderão utilizar representações visuais para demonstrar:

- dependências;
- fluxos;
- níveis;
- estruturas;
- ambientes;
- recuperação;
- comunicação;
- escalonamento;
- retorno.

A representação deverá ser atualizada junto com o plano.

## 371. Acessibilidade do plano

Os responsáveis deverão conseguir acessar o plano mesmo diante de:

- perda da rede;
- perda da nuvem;
- indisponibilidade de identidade;
- perda de instalação;
- falha do dispositivo;
- restrição de mobilidade.

## 372. Cópias controladas

Cópias offline ou físicas deverão possuir:

- versão;
- proprietário;
- data;
- proteção;
- distribuição;
- atualização;
- recolhimento;
- descarte seguro.

## 373. Proteção de informações sensíveis

Planos poderão conter:

- contatos;
- credenciais;
- arquitetura;
- locais;
- vulnerabilidades;
- fornecedores;
- procedimentos emergenciais.

O acesso deverá ser limitado sem impedir a disponibilidade legítima durante a interrupção.

## 374. Diretório de contatos

O diretório deverá conter, conforme necessário:

- nome;
- função;
- organização;
- canais;
- substituto;
- disponibilidade;
- autoridade;
- localização;
- restrições;
- data de validação.

## 375. Validação dos contatos

Contatos críticos deverão ser verificados periodicamente.

A verificação deverá confirmar:

- existência;
- função atual;
- canal;
- resposta;
- substituição;
- consentimento;
- disponibilidade;
- capacidade de atuação.

## 376. Árvore de acionamento

A árvore de acionamento deverá definir como pessoas e organizações serão notificadas.

Ela deverá possuir:

- iniciador;
- sequência;
- confirmação;
- substituição;
- tempo;
- canal alternativo;
- escalonamento;
- registro.

## 377. Falha de acionamento

Quando uma pessoa não responder:

- o fato deverá ser registrado;
- o substituto deverá ser acionado;
- a autoridade deverá ser preservada;
- o atraso deverá ser considerado;
- a árvore deverá continuar.

## 378. Detecção

A ativação começa pela percepção de sinais relevantes.

A detecção poderá ocorrer por:

- monitoramento;
- alerta;
- usuário;
- operador;
- fornecedor;
- autoridade;
- parceiro;
- comunidade;
- agente;
- evento físico;
- mídia confiável.

## 379. Qualificação inicial

O sinal deverá ser qualificado para determinar:

- autenticidade;
- extensão;
- gravidade;
- funções afetadas;
- risco;
- velocidade;
- incerteza;
- necessidade de proteção imediata;
- necessidade de escalonamento.

## 380. Preservação imediata da vida

Quando houver risco às pessoas, ações de proteção poderão preceder a análise completa.

Poderão incluir:

- evacuação;
- isolamento;
- interrupção de energia;
- acionamento de emergência;
- suspensão de atividade;
- orientação pública;
- bloqueio de acesso.

## 381. Declaração de interrupção

A declaração formal deverá indicar:

- evento conhecido;
- data e horário;
- funções afetadas;
- extensão;
- nível;
- autoridade;
- planos ativados;
- coordenação;
- próxima atualização.

## 382. Declaração com informação incompleta

A ausência de informação completa não deverá impedir declaração necessária.

A declaração poderá indicar:

- fatos confirmados;
- hipóteses;
- incertezas;
- limitações;
- medidas preventivas;
- horário de revisão.

## 383. Níveis de ativação

A organização deverá estabelecer níveis de ativação compreensíveis.

Um modelo poderá incluir:

- Nível 0 — observação;
- Nível 1 — resposta local;
- Nível 2 — continuidade parcial;
- Nível 3 — continuidade institucional;
- Nível 4 — desastre amplo.

Os nomes poderão variar, mas os critérios deverão permanecer claros.

## 384. Nível 0 — observação

No nível de observação:

- há sinal relevante;
- a operação ordinária permanece ativa;
- responsáveis acompanham;
- informações são coletadas;
- medidas preventivas podem ser adotadas;
- não há ativação ampla.

## 385. Nível 1 — resposta local

No nível local:

- o impacto permanece limitado;
- a unidade responsável coordena;
- contingências específicas são utilizadas;
- recursos ordinários continuam suficientes;
- a situação é monitorada;
- existe possibilidade de escalonamento.

## 386. Nível 2 — continuidade parcial

No nível parcial:

- uma ou mais funções essenciais estão ameaçadas;
- estratégias alternativas são ativadas;
- recursos adicionais são mobilizados;
- prioridades são redistribuídas;
- coordenação ampliada é necessária;
- usuários podem ser comunicados.

## 387. Nível 3 — continuidade institucional

No nível institucional:

- múltiplas funções são afetadas;
- há conflito significativo de recursos;
- estruturas ordinárias não são suficientes;
- autoridade institucional coordenada é ativada;
- planos múltiplos operam em conjunto;
- comunicação extraordinária é necessária.

## 388. Nível 4 — desastre amplo

No nível de desastre amplo:

- capacidades essenciais foram severamente comprometidas;
- recuperação tecnológica ampla é necessária;
- estruturas alternativas assumem funções;
- apoio externo pode ser mobilizado;
- decisões extraordinárias são tomadas;
- a continuidade da própria organização está ameaçada.

## 389. Critérios de escalonamento

O escalonamento deverá considerar:

- vidas em risco;
- impacto crescente;
- duração;
- extensão;
- funções;
- recursos;
- falha de estratégia;
- indisponibilidade de autoridade;
- propagação;
- comprometimento;
- demanda extraordinária;
- comunicação pública.

## 390. Critérios de redução de nível

A redução deverá ocorrer quando:

- riscos diminuírem;
- impactos estiverem controlados;
- funções essenciais forem estabilizadas;
- recursos ordinários voltarem a ser suficientes;
- a recuperação estiver consolidada;
- a autoridade competente aprovar.

## 391. Proibição de redução por aparência

O nível não deverá ser reduzido apenas para:

- melhorar indicadores;
- reduzir exposição;
- proteger reputação;
- evitar custos;
- encerrar comunicação;
- esconder fragilidade.

## 392. Registro de mudança de nível

Toda mudança deverá indicar:

- nível anterior;
- novo nível;
- contexto;
- critérios;
- autoridade;
- horário;
- planos afetados;
- comunicação;
- próxima revisão.

## 393. Estrutura de coordenação

A coordenação deverá integrar:

- direção;
- continuidade;
- operações;
- tecnologia;
- segurança;
- pessoas;
- comunicação;
- jurídico;
- finanças;
- fornecedores;
- organizações federadas;
- especialistas.

## 394. Centro de Coordenação de Continuidade

A Plataforma UNO poderá ativar um Centro de Coordenação de Continuidade para:

- consolidar percepção;
- manter quadro comum;
- coordenar prioridades;
- mobilizar recursos;
- acompanhar planos;
- resolver conflitos;
- comunicar;
- preservar registros;
- orientar retorno.

## 395. Centro físico ou virtual

A coordenação poderá ocorrer em:

- sala física;
- ambiente virtual;
- estrutura híbrida;
- local alternativo;
- unidade móvel;
- rede federada.

O modelo deverá permanecer disponível diante do cenário correspondente.

## 396. Quadro Operacional Comum

O quadro deverá apresentar, conforme aplicável:

- evento;
- horário;
- nível;
- funções afetadas;
- pessoas em risco;
- capacidades disponíveis;
- ações;
- responsáveis;
- prioridades;
- decisões;
- dependências;
- recursos;
- previsões;
- riscos;
- próxima atualização.

## 397. Fonte do quadro

As informações deverão indicar:

- fonte;
- tempo;
- confiança;
- responsável;
- confirmação;
- limitações.

Fatos, hipóteses e previsões deverão permanecer distinguíveis.

## 398. Consciência situacional

A consciência situacional deverá integrar:

- o que ocorreu;
- o que está ocorrendo;
- o que poderá ocorrer;
- quem foi afetado;
- quais capacidades permanecem;
- quais decisões foram tomadas;
- quais ações estão em curso;
- quais limites estão próximos.

## 399. Ritmo de coordenação

A coordenação deverá estabelecer ciclos de:

- coleta;
- análise;
- decisão;
- atribuição;
- execução;
- acompanhamento;
- comunicação;
- revisão.

A frequência deverá acompanhar a velocidade do evento.

## 400. Reuniões de situação

Cada reunião deverá possuir:

- horário;
- participantes;
- situação;
- mudanças;
- riscos;
- prioridades;
- decisões;
- responsáveis;
- prazos;
- próxima reunião;
- registro.

## 401. Disciplina de comunicação interna

Comunicações deverão utilizar:

- linguagem clara;
- identificadores;
- horários;
- prioridades;
- confirmação;
- canais reconhecidos;
- distinção entre ordem e recomendação;
- registro.

## 402. Unidade de comando

Cada ação deverá possuir responsável reconhecível.

Pessoas e agentes não deverão receber ordens incompatíveis sem mecanismo de resolução.

A unidade de comando não elimina colaboração, mas evita responsabilidade difusa.

## 403. Coordenação sem centralização absoluta

A coordenação poderá distribuir execução e decisão conforme:

- contexto;
- proximidade;
- capacidade;
- autoridade;
- tempo;
- autonomia local.

O centro deverá integrar, não impedir, respostas legítimas próximas da realidade.

## 404. Células funcionais

A estrutura poderá organizar células de:

- operações;
- tecnologia;
- pessoas;
- logística;
- comunicação;
- segurança;
- dados;
- finanças;
- jurídico;
- recuperação;
- planejamento.

## 405. Responsável pela coordenação

O coordenador deverá:

- preservar visão integrada;
- convocar responsáveis;
- confirmar prioridades;
- resolver conflitos;
- escalar decisões;
- acompanhar execução;
- comunicar autoridades;
- manter registro;
- orientar transições.

## 406. Equipe de planejamento

A equipe de planejamento deverá considerar:

- situação atual;
- evolução provável;
- recursos futuros;
- cenários;
- contingências;
- dependências;
- necessidades;
- próximos períodos;
- condições de retorno.

## 407. Equipe de operações

A equipe de operações deverá:

- executar prioridades;
- mobilizar capacidades;
- preservar funções essenciais;
- relatar resultados;
- reconhecer obstáculos;
- solicitar recursos;
- manter registros;
- adaptar ações dentro de sua autoridade.

## 408. Equipe de logística

A logística deverá coordenar:

- equipamentos;
- transporte;
- instalações;
- energia;
- suprimentos;
- alimentação;
- comunicação;
- contratos;
- distribuição;
- reposição.

## 409. Equipe de finanças e administração

Essa equipe deverá registrar:

- despesas;
- contratos;
- horas;
- aquisições;
- autorizações;
- perdas;
- indenizações;
- compromissos;
- reconciliações;
- evidências.

## 410. Especialistas

Especialistas deverão ser mobilizados conforme:

- natureza do evento;
- função afetada;
- risco;
- dependência;
- obrigação;
- necessidade de validação.

A decisão deverá considerar competência, independência e possível conflito de interesse.

## 411. Curadores

Curadores deverão apoiar a preservação de:

- significado;
- memória;
- princípios;
- qualidade semântica;
- coerência institucional;
- conhecimento;
- evidências.

## 412. Operadores

Operadores deverão executar ações dentro de:

- escopo;
- procedimentos;
- autoridade;
- segurança;
- rastreabilidade;
- critérios de interrupção;
- supervisão.

## 413. Agentes artificiais na coordenação

Agentes poderão apoiar:

- consolidação de sinais;
- comparação de estados;
- detecção de conflitos;
- recomendação;
- priorização;
- geração de relatórios;
- acompanhamento;
- registro;
- comunicação autorizada.

## 414. Autoridade dos agentes

Todo agente deverá possuir definição de:

- identidade;
- função;
- capacidade;
- dados acessíveis;
- ações permitidas;
- limites;
- supervisão;
- escalonamento;
- desligamento;
- auditoria.

## 415. Interrupção do agente

O agente deverá ser interrompido quando:

- exceder sua autoridade;
- produzir resultados incoerentes;
- perder contexto;
- acessar dados indevidos;
- repetir ações perigosas;
- gerar conflito;
- não conseguir explicar ação crítica;
- houver suspeita de comprometimento.

## 416. Priorização durante a ativação

A priorização deverá ser atualizada conforme:

- vidas;
- dignidade;
- impacto;
- dependências;
- tempo;
- recursos;
- propagação;
- oportunidades;
- obrigações;
- capacidade de recuperação.

## 417. Fila de ações

A coordenação deverá manter fila contendo:

- ação;
- propósito;
- prioridade;
- responsável;
- autoridade;
- dependências;
- recursos;
- prazo;
- estado;
- resultado;
- evidência.

## 418. Ação imediata

Ações imediatas poderão incluir:

- proteger pessoas;
- interromper propagação;
- preservar evidências;
- declarar nível;
- acionar responsáveis;
- comunicar;
- preservar dados;
- ativar alternativas;
- mobilizar recursos.

## 419. Autorização emergencial

Autorizações emergenciais deverão possuir:

- fundamento;
- ação;
- responsável;
- limite;
- duração;
- evidência;
- revisão;
- revogação;
- prestação de contas.

## 420. Mobilização

A mobilização deverá confirmar:

- pessoas;
- funções;
- contatos;
- recursos;
- acessos;
- local;
- canais;
- segurança;
- duração;
- substitutos.

## 421. Confirmação de prontidão

Cada equipe deverá declarar:

- capacidade disponível;
- limitações;
- tempo para atuar;
- dependências;
- recursos faltantes;
- riscos;
- contato responsável.

## 422. Ativação de local alternativo

A ativação deverá incluir:

- autorização;
- acesso;
- inspeção;
- segurança;
- energia;
- comunicação;
- equipamentos;
- identidades;
- dados;
- testes;
- ocupação;
- registro.

## 423. Ativação de trabalho remoto

A ativação deverá confirmar:

- pessoas aptas;
- equipamentos;
- conectividade;
- segurança;
- acessos;
- canais;
- horários;
- suporte;
- monitoramento;
- condições humanas.

## 424. Ativação de operação manual

A operação manual deverá ser declarada e temporalmente delimitada.

Deverá indicar:

- formulários;
- identificadores;
- responsáveis;
- validações;
- armazenamento;
- segurança;
- capacidade;
- reconciliação;
- retorno.

## 425. Ativação federada

A mobilização entre organizações deverá registrar:

- solicitante;
- organização apoiadora;
- capacidade;
- autoridade;
- dados;
- responsabilidades;
- custos;
- duração;
- limites;
- encerramento.

## 426. Acionamento de fornecedor

O acionamento deverá utilizar canais previamente reconhecidos.

Deverá registrar:

- incidente;
- contrato;
- prioridade;
- protocolo;
- responsável;
- previsão;
- escalonamento;
- atualização;
- resultado;
- evidência.

## 427. Acionamento de autoridades públicas

Quando necessário, deverão ser observados:

- competência;
- canal;
- prazo;
- conteúdo;
- proteção de dados;
- evidências;
- responsabilidades;
- atualizações;
- cooperação.

## 428. Início do Disaster Recovery

O Disaster Recovery deverá ser iniciado quando:

- recursos tecnológicos críticos estiverem indisponíveis;
- a recuperação ordinária for insuficiente;
- o RTO estiver ameaçado;
- houver perda ampla;
- ambiente alternativo for necessário;
- a continuidade depender de reconstrução tecnológica.

## 429. Autoridade para ativar o DR

A autoridade deverá ser definida previamente.

A ativação deverá indicar:

- escopo;
- cenário;
- ambientes;
- prioridades;
- responsáveis;
- riscos;
- ponto de recuperação;
- estratégia;
- comunicação;
- próxima revisão.

## 430. Preservação antes da recuperação

Antes de alterar o ambiente afetado, deverão ser preservados, conforme aplicável:

- logs;
- imagens;
- estados;
- evidências;
- configurações;
- dados voláteis;
- registros;
- informações de acesso;
- cronologia.

## 431. Isolamento

Ambientes comprometidos poderão precisar ser isolados para impedir:

- propagação;
- exfiltração;
- alteração de evidência;
- corrupção adicional;
- reativação indevida;
- acesso não autorizado.

## 432. Avaliação do desastre tecnológico

A equipe deverá determinar:

- recursos afetados;
- causa conhecida;
- extensão;
- confiabilidade dos dados;
- comprometimento;
- dependências;
- alternativas;
- tempo;
- segurança;
- estratégia de recuperação.

## 433. Seleção do ambiente de recuperação

O ambiente poderá ser:

- local preservado;
- região alternativa;
- provedor alternativo;
- infraestrutura reconstruída;
- instalação física alternativa;
- ambiente isolado;
- capacidade federada.

## 434. Seleção do ponto de recuperação

O ponto deverá considerar:

- integridade;
- temporalidade;
- RPO;
- comprometimento;
- consistência;
- efeitos externos;
- dependências;
- autoridade;
- necessidade de reconciliação.

## 435. Ordem tecnológica de recuperação

A recuperação poderá exigir sequência como:

1. segurança;
2. infraestrutura;
3. rede;
4. identidade;
5. chaves e certificados;
6. armazenamento;
7. dados;
8. aplicações;
9. integrações;
10. observabilidade;
11. serviços;
12. usuários.

A ordem deverá seguir as dependências reais.

## 436. Reconstrução da infraestrutura

A reconstrução deverá utilizar, quando disponível:

- infraestrutura como código;
- configurações versionadas;
- imagens validadas;
- inventários;
- catálogos;
- automações;
- documentação;
- chaves protegidas.

## 437. Recuperação da rede

A rede deverá ser validada quanto a:

- segmentação;
- roteamento;
- resolução;
- conectividade;
- segurança;
- capacidade;
- redundância;
- monitoramento;
- acesso externo;
- isolamento.

## 438. Recuperação de identidades

Identidades deverão ser recuperadas com:

- integridade;
- autoridade;
- menor privilégio;
- revisão de acessos;
- troca de credenciais comprometidas;
- validação;
- rastreabilidade;
- contas emergenciais controladas.

## 439. Recuperação de chaves e certificados

Deverão ser avaliados:

- validade;
- custódia;
- comprometimento;
- rotação;
- substituição;
- cadeia de confiança;
- acessos;
- dependências;
- revogação.

## 440. Recuperação dos dados

A recuperação deverá seguir os princípios do arquivo 019, incluindo:

- seleção legítima;
- integridade;
- consistência;
- segurança;
- validação;
- proveniência;
- reconciliação;
- evidência.

## 441. Recuperação das aplicações

Aplicações deverão ser recuperadas com:

- versão identificada;
- código confiável;
- dependências compatíveis;
- configurações;
- segredos;
- dados;
- integrações;
- monitoramento;
- testes.

## 442. Recuperação das integrações

Integrações deverão ser ativadas de modo controlado.

Antes da liberação, deverão ser verificados:

- autenticidade;
- endpoints;
- credenciais;
- filas;
- estado;
- repetição;
- efeitos externos;
- capacidade;
- segurança;
- observabilidade.

## 443. Recuperação da observabilidade

Sem observabilidade suficiente, a organização não poderá confiar plenamente na recuperação.

Deverão ser restabelecidos:

- logs;
- métricas;
- alertas;
- rastreamento;
- painéis;
- relógios;
- correlação;
- retenção;
- acesso.

## 444. Testes técnicos

Antes da liberação, deverão ser testados:

- infraestrutura;
- rede;
- identidade;
- dados;
- aplicações;
- integrações;
- segurança;
- desempenho;
- capacidade;
- observabilidade.

## 445. Testes funcionais

Proprietários deverão validar se a função:

- recebe entradas;
- processa corretamente;
- produz saídas;
- preserva regras;
- atende prioridades;
- mantém significado;
- suporta operação mínima;
- registra evidências.

## 446. Testes de segurança

A validação deverá verificar:

- acessos;
- privilégios;
- segmentação;
- criptografia;
- vulnerabilidades;
- credenciais;
- logs;
- integridade;
- exposição;
- sinais de comprometimento.

## 447. Testes de desempenho

O ambiente deverá demonstrar capacidade suficiente para:

- demanda mínima;
- picos esperados;
- filas acumuladas;
- usuários prioritários;
- processamento de reconciliação;
- crescimento inicial.

## 448. Liberação controlada

A liberação poderá ocorrer por:

- usuários;
- serviços;
- regiões;
- organizações;
- volumes;
- funções;
- horários.

Cada etapa deverá possuir observação e possibilidade de reversão.

## 449. Aprovação da recuperação

A aprovação deverá envolver autoridades compatíveis com:

- tecnologia;
- função;
- segurança;
- dados;
- operação;
- continuidade;
- risco.

## 450. Declaração de serviço recuperado

A declaração deverá indicar:

- serviço;
- escopo;
- capacidade;
- horário;
- dados;
- limitações;
- riscos residuais;
- responsáveis;
- monitoramento;
- próxima revisão.

## 451. Serviço recuperado não é operação normal

Um serviço poderá estar recuperado e ainda apresentar:

- capacidade reduzida;
- risco residual;
- filas;
- integrações suspensas;
- reconciliação pendente;
- monitoramento reforçado;
- restrições de acesso.

A comunicação deverá refletir sua condição real.

## 452. Comunicação externa

A organização deverá informar, conforme necessário:

- condição;
- impacto;
- canais disponíveis;
- alternativas;
- cuidados;
- previsão;
- limitações;
- próxima atualização;
- confirmação de retorno.

## 453. Comunicação de incerteza

Quando não houver previsão confiável, a organização não deverá inventar prazo.

Deverá comunicar:

- situação conhecida;
- ações em curso;
- limitações;
- horário da próxima atualização;
- formas de apoio;
- riscos relevantes.

## 454. Correção pública

Informações incorretas deverão ser corrigidas com:

- clareza;
- visibilidade;
- horário;
- conteúdo correto;
- reconhecimento da alteração;
- preservação do histórico.

## 455. Acompanhamento

Durante a recuperação, deverão ser acompanhados:

- impactos;
- capacidade;
- filas;
- erros;
- segurança;
- pessoas;
- recursos;
- dependências;
- fornecedores;
- comunicação;
- tempos;
- riscos.

## 456. Revisão de prioridades

Prioridades deverão ser revistas quando:

- impacto mudar;
- nova função falhar;
- recursos se esgotarem;
- risco aumentar;
- oportunidade surgir;
- estratégia falhar;
- recuperação avançar;
- demanda mudar.

## 457. Recuperação da capacidade humana

O retorno de sistemas deverá ser acompanhado da recuperação de:

- equipes;
- escalas;
- competências;
- saúde;
- descanso;
- acesso;
- coordenação;
- confiança.

## 458. Preparação do retorno

O retorno ao ambiente ordinário deverá possuir plano próprio.

Ele deverá definir:

- autoridade;
- critérios;
- sequência;
- estados;
- dados;
- sincronização;
- riscos;
- comunicação;
- reversão;
- encerramento do alternativo.

## 459. Critérios de retorno

Poderão incluir:

- causa controlada;
- ambiente seguro;
- capacidade suficiente;
- dados íntegros;
- dependências ativas;
- pessoas disponíveis;
- risco aceitável;
- validação concluída;
- monitoramento ativo;
- autoridade aprovada.

## 460. Reconciliação antes do retorno

Deverão ser reconciliados:

- registros manuais;
- transações;
- filas;
- decisões;
- identidades;
- pagamentos;
- comunicações;
- estoques;
- sistemas externos;
- evidências.

## 461. Congelamento controlado

Poderá ser necessário interromper temporariamente novas operações para:

- consolidar estados;
- sincronizar;
- validar;
- transferir;
- evitar conflitos;
- alterar fonte de verdade.

O congelamento deverá ser proporcional, comunicado e temporalmente limitado.

## 462. Migração do ambiente alternativo

A migração deverá preservar:

- dados;
- temporalidade;
- proveniência;
- decisões;
- identidades;
- autorizações;
- evidências;
- filas;
- efeitos externos;
- segurança.

## 463. Retorno progressivo

O retorno poderá ocorrer em ondas.

Cada onda deverá possuir:

- escopo;
- usuários;
- volume;
- critérios;
- validação;
- monitoramento;
- tempo;
- decisão de avançar;
- possibilidade de recuo.

## 464. Reversão

Quando o retorno produzir risco ou instabilidade, a organização deverá poder:

- interromper;
- preservar estados;
- retornar ao ambiente alternativo;
- comunicar;
- analisar;
- corrigir;
- tentar novamente.

## 465. Desativação de acessos emergenciais

Após a necessidade, deverão ser:

- revogados;
- reduzidos;
- rotacionados;
- registrados;
- revisados;
- auditados;

os acessos extraordinários.

## 466. Desativação de autoridades extraordinárias

A devolução de autoridade deverá ser formalmente registrada.

Deverão ser identificados:

- responsável ordinário;
- horário;
- decisões pendentes;
- recursos;
- riscos;
- compromissos;
- registros transferidos.

## 467. Encerramento da operação manual

O encerramento deverá ocorrer após:

- digitalização ou incorporação necessária;
- validação;
- reconciliação;
- tratamento de duplicidades;
- preservação de evidências;
- descarte seguro;
- confirmação dos responsáveis.

## 468. Encerramento do local alternativo

O local deverá ser encerrado de forma controlada, incluindo:

- inventário;
- limpeza;
- revogação de acessos;
- transferência de documentos;
- proteção de dados;
- devolução de recursos;
- registro de danos;
- prestação de contas.

## 469. Encerramento de contratos emergenciais

Contratos extraordinários deverão ser:

- revisados;
- pagos;
- reconciliados;
- encerrados;
- prorrogados legitimamente;
- auditados;
- registrados.

## 470. Declaração de retorno

A declaração deverá informar:

- funções restabelecidas;
- capacidade;
- horário;
- limitações;
- riscos;
- pendências;
- responsáveis;
- acompanhamento;
- situação dos planos.

## 471. Encerramento da ativação

A ativação somente deverá ser encerrada quando:

- funções essenciais estiverem estáveis;
- autoridade ordinária estiver restabelecida;
- riscos estiverem conhecidos;
- registros estiverem preservados;
- partes relevantes forem comunicadas;
- ações pendentes tiverem responsáveis;
- revisão estiver programada.

## 472. Pendências após encerramento

O encerramento não elimina:

- correções;
- investigações;
- reconciliações;
- compensações;
- comunicações;
- obrigações;
- recuperação humana;
- melhoria;
- prestação de contas.

## 473. Relatório inicial

Após a estabilização, deverá ser produzido relatório com:

- cronologia;
- evento;
- impactos;
- decisões;
- planos ativados;
- ações;
- recursos;
- tempos;
- falhas;
- resultados;
- riscos;
- pendências.

## 474. Cronologia oficial

A cronologia deverá integrar:

- sinais;
- detecção;
- declaração;
- mudanças de nível;
- decisões;
- ações;
- comunicações;
- recuperações;
- retorno;
- encerramento.

Fontes e incertezas deverão ser preservadas.

## 475. Preservação das evidências

Evidências deverão ser protegidas para:

- investigação;
- auditoria;
- conformidade;
- defesa de direitos;
- reconciliação;
- aprendizagem;
- responsabilização;
- memória institucional.

## 476. Antipadrões de planejamento e ativação

Constituem antipadrões:

- plano inacessível;
- contatos desatualizados;
- responsabilidades genéricas;
- autoridade indefinida;
- critérios vagos;
- planos contraditórios;
- ativação sem registro;
- nível reduzido por aparência;
- recuperação sem segurança;
- retorno sem reconciliação;
- encerramento sem pendências atribuídas;
- dependência de uma única pessoa;
- comunicação sem fonte oficial;
- documentação produzida apenas para auditoria.

## 477. Plano excessivamente detalhado

Um plano poderá falhar por excesso de rigidez quando:

- presume sequência única;
- não admite incerteza;
- depende de condições ideais;
- impede adaptação;
- exige leitura extensa antes da primeira ação;
- não distingue princípios de procedimentos.

Deverão existir diferentes níveis de informação:

- orientação imediata;
- listas de ação;
- procedimentos detalhados;
- referências especializadas.

## 478. Plano excessivamente genérico

Planos vagos falham por não indicar:

- quem;
- quando;
- como;
- com quê;
- sob qual autoridade;
- até qual limite;
- com qual evidência.

## 479. Recuperação sem coordenação

Recuperar componentes isolados sem visão do conjunto poderá produzir:

- conflito;
- inconsistência;
- saturação;
- exposição;
- duplicidade;
- ordem incorreta;
- perda de evidência;
- impacto sobre funções prioritárias.

## 480. Retorno prematuro

O retorno prematuro poderá:

- reintroduzir a falha;
- propagar comprometimento;
- perder dados;
- interromper novamente;
- confundir usuários;
- ampliar fadiga;
- reduzir confiança.

## 481. Invariantes do Lote 4

Permanecem como invariantes:

- todo plano deverá ser acionável;
- todo plano deverá possuir proprietário;
- toda ativação deverá possuir autoridade;
- toda mudança de nível deverá ser registrada;
- toda coordenação deverá preservar responsabilidade;
- toda informação deverá possuir fonte e tempo;
- toda recuperação deverá incluir segurança;
- todo serviço recuperado deverá ser validado;
- todo retorno deverá ser reconciliado;
- toda autoridade extraordinária deverá ser devolvida;
- todo acesso emergencial deverá ser revogado ou regularizado;
- toda pendência deverá possuir responsável;
- todo encerramento deverá preservar memória;
- plano sem exercício não constitui garantia;
- tecnologia recuperada sem missão restabelecida não constitui continuidade;
- velocidade não substituirá legitimidade;
- forma poderá mudar, propósito não.

## 482. Garantias esperadas

A aplicação deste lote deverá garantir que:

- planos sejam localizáveis;
- responsabilidades sejam reconhecidas;
- interrupções possam ser declaradas;
- níveis possam ser escalonados;
- estruturas possam ser mobilizadas;
- prioridades possam ser coordenadas;
- o Disaster Recovery possua sequência;
- ambientes possam ser validados;
- serviços possam ser liberados progressivamente;
- estados possam ser reconciliados;
- autoridades ordinárias possam ser restabelecidas;
- evidências possam ser preservadas.

## 483. Resultado esperado do Lote 4

Ao final desta etapa, a organização deverá ser capaz de responder:

- quem percebe;
- quem declara;
- quem coordena;
- quem executa;
- quem comunica;
- quais planos são ativados;
- quais recursos são mobilizados;
- como a tecnologia é recuperada;
- como o serviço é validado;
- como o retorno é autorizado;
- como a ativação é encerrada;
- como a memória é preservada.

## 484. Transição para o Lote 5

Planos, estruturas e procedimentos somente permanecerão legítimos quando sustentados por governança, segurança, conformidade e responsabilidades claras.

O próximo lote deverá estabelecer:

- propriedade;
- autoridade;
- financiamento;
- segregação;
- segurança;
- privacidade;
- fornecedores;
- organizações federadas;
- contratos;
- leis;
- normas;
- auditoria;
- prestação de contas;
- ciclo de vida dos planos;
- preservação institucional.

---

# Lote 5 — Governança, Segurança, Conformidade e Relações Externas

## 485. Finalidade da governança de continuidade

A governança deverá assegurar que a continuidade operacional e o Disaster Recovery sejam:

- orientados pelo propósito;
- aprovados por autoridade legítima;
- integrados à estratégia;
- adequadamente financiados;
- protegidos;
- testados;
- auditáveis;
- atualizados;
- atribuíveis;
- capazes de atravessar mudanças de pessoas, tecnologias e organizações.

## 486. Continuidade como responsabilidade institucional

A continuidade não deverá ser considerada responsabilidade exclusiva:

- da tecnologia;
- da segurança;
- da operação;
- de fornecedores;
- de consultores;
- de uma única pessoa;
- de agentes artificiais.

Ela deverá ser responsabilidade compartilhada, com atribuições claramente distribuídas.

## 487. Princípio da responsabilidade atribuível

Toda função, plano, estratégia, requisito, exceção e risco deverá possuir responsável reconhecível.

Responsabilidade coletiva não deverá transformar-se em ausência de responsabilidade individual ou institucional.

## 488. Princípio da autoridade legítima

Decisões de continuidade deverão ser tomadas por pessoas ou estruturas com competência legítima.

A autoridade deverá decorrer de:

- constituição;
- estatuto;
- contrato;
- política;
- delegação;
- função;
- legislação;
- governança estabelecida.

## 489. Separação entre autoridade e capacidade

Possuir capacidade técnica de executar uma ação não significa possuir autoridade para autorizá-la.

A arquitetura deverá distinguir:

- quem solicita;
- quem recomenda;
- quem aprova;
- quem executa;
- quem valida;
- quem audita.

## 490. Alta direção

A alta direção deverá:

- estabelecer compromisso;
- aprovar políticas;
- definir tolerâncias;
- priorizar funções;
- prover recursos;
- resolver conflitos;
- aceitar riscos;
- acompanhar resultados;
- exigir melhoria;
- prestar contas.

## 491. Órgão de governança

A organização poderá estabelecer conselho, comitê ou estrutura equivalente para:

- supervisionar continuidade;
- integrar áreas;
- aprovar requisitos;
- revisar riscos;
- acompanhar exercícios;
- avaliar falhas;
- orientar investimentos;
- resolver conflitos;
- preservar princípios.

## 492. Comitê de continuidade

O comitê poderá incluir representantes de:

- direção;
- operações;
- tecnologia;
- segurança;
- pessoas;
- jurídico;
- conformidade;
- finanças;
- comunicação;
- dados;
- instalações;
- fornecedores;
- organizações federadas;
- usuários, quando pertinente.

## 493. Independência de supervisão

A supervisão deverá possuir independência suficiente para questionar:

- declarações de prontidão;
- riscos aceitos;
- resultados de testes;
- conflitos de interesse;
- falta de recursos;
- atrasos;
- exceções;
- dependências ocultas;
- informações incompletas.

## 494. Proprietário da política

A política de continuidade deverá possuir proprietário responsável por:

- manutenção;
- interpretação;
- integração;
- revisão;
- comunicação;
- conformidade;
- versionamento;
- preservação histórica.

## 495. Proprietário do plano

Cada plano deverá possuir proprietário responsável por:

- conteúdo;
- contatos;
- dependências;
- estratégias;
- acessibilidade;
- exercícios;
- correções;
- atualização;
- aprovação.

## 496. Proprietário do serviço

O proprietário do serviço deverá responder por:

- impacto;
- criticidade;
- requisitos;
- nível mínimo;
- riscos;
- validação;
- retorno;
- comunicação funcional.

## 497. Proprietário da tecnologia

O proprietário tecnológico deverá responder por:

- arquitetura;
- capacidade;
- disponibilidade;
- recuperação;
- dependências;
- documentação;
- segurança técnica;
- testes;
- evidências.

## 498. Proprietário dos dados

O proprietário dos dados deverá definir:

- criticidade;
- sensibilidade;
- consistência;
- RPO;
- retenção;
- acesso;
- validação;
- reconciliação;
- requisitos legais;
- critérios de recuperação.

## 499. Custodiante

O custodiante deverá operar mecanismos de proteção e recuperação dentro das políticas estabelecidas.

A custódia não transfere automaticamente a propriedade nem a autoridade decisória.

## 500. Responsável por pessoas

A função responsável por pessoas deverá preservar:

- saúde;
- segurança;
- contatos;
- escalas;
- sucessão;
- apoio;
- acessibilidade;
- direitos;
- retorno;
- acompanhamento pós-evento.

## 501. Responsável por instalações

Deverá responder por:

- segurança física;
- acesso;
- evacuação;
- energia;
- climatização;
- manutenção;
- locais alternativos;
- inspeção;
- retorno;
- evidências.

## 502. Responsável por fornecedores

Deverá manter:

- inventário;
- criticidade;
- contratos;
- contatos;
- compromissos;
- alternativas;
- dependências;
- riscos;
- desempenho;
- estratégia de saída.

## 503. Matriz de responsabilidades

Cada plano deverá utilizar matriz que esclareça:

- responsável pela execução;
- autoridade aprovadora;
- pessoas consultadas;
- pessoas informadas;
- substitutos;
- escalonamento;
- limites.

A matriz deverá refletir a operação real.

## 504. Conflito de responsabilidade

Quando houver sobreposição ou ausência de responsabilidade:

- o conflito deverá ser registrado;
- uma autoridade deverá resolvê-lo;
- o plano deverá ser atualizado;
- a decisão deverá ser comunicada;
- a mudança deverá ser exercitada.

## 505. Segregação de funções

A continuidade deverá preservar segregação proporcional entre:

- solicitação;
- aprovação;
- execução;
- validação;
- auditoria;
- custódia;
- comunicação;
- aceitação de risco.

## 506. Segregação durante emergências

Quando a quantidade de pessoas disponíveis impedir a segregação ordinária, deverão ser adotados controles compensatórios, como:

- dupla confirmação posterior;
- limites;
- registros reforçados;
- monitoramento;
- revisão independente;
- duração reduzida;
- reconciliação;
- prestação de contas.

## 507. Delegação emergencial

Delegações emergenciais deverão indicar:

- autoridade de origem;
- delegado;
- escopo;
- limite;
- início;
- validade;
- registro;
- supervisão;
- revogação;
- retorno.

## 508. Sucessão de autoridade

A sucessão deverá ser definida para:

- direção;
- continuidade;
- tecnologia;
- segurança;
- comunicação;
- finanças;
- dados;
- operações;
- relações externas.

## 509. Exercício da sucessão

Sucessores deverão participar de:

- treinamentos;
- revisões;
- exercícios;
- decisões simuladas;
- validações;
- acesso controlado a documentos e recursos.

Sucessão apenas nominal não constitui capacidade.

## 510. Política de continuidade

A política deverá estabelecer:

- propósito;
- princípios;
- escopo;
- responsabilidades;
- requisitos;
- metodologia;
- critérios;
- governança;
- conformidade;
- testes;
- revisão;
- exceções;
- prestação de contas.

## 511. Hierarquia normativa interna

A organização deverá reconhecer a relação entre:

- princípios permanentes;
- constituição institucional;
- políticas;
- padrões;
- planos;
- procedimentos;
- instruções;
- registros;
- evidências.

Documentos inferiores não poderão contrariar os superiores.

## 512. Engenharia Oficial como referência

A Engenharia Oficial da UNO deverá orientar o desenvolvimento dos planos e mecanismos derivados.

Planos locais poderão adaptar:

- forma;
- escala;
- ferramenta;
- procedimento;
- frequência;
- organização.

Não poderão eliminar propriedades fundamentais estabelecidas pela Engenharia Oficial.

## 513. Aplicação proporcional

Organizações de diferentes portes poderão implementar estruturas distintas.

A proporcionalidade não autoriza eliminar:

- responsabilidade;
- autoridade;
- registro;
- segurança;
- proteção das pessoas;
- requisitos legais;
- testes;
- aprendizagem.

## 514. Financiamento

A continuidade deverá possuir recursos compatíveis com:

- criticidade;
- impacto;
- obrigações;
- estratégias;
- testes;
- manutenção;
- correções;
- evolução.

## 515. Orçamento de continuidade

O orçamento deverá considerar:

- pessoas;
- tecnologia;
- instalações;
- comunicação;
- treinamento;
- fornecedores;
- reservas;
- exercícios;
- auditoria;
- seguros;
- recuperação;
- atualização.

## 516. Priorização financeira

Quando os recursos forem limitados, deverão ser priorizados:

- proteção à vida;
- dignidade;
- funções essenciais;
- riscos irreversíveis;
- obrigações;
- pontos únicos de falha;
- lacunas comprovadas;
- dependências críticas;
- capacidades de recuperação.

## 517. Reserva emergencial

Reservas deverão possuir:

- finalidade;
- valor;
- autoridade;
- forma de acesso;
- controles;
- limites;
- reposição;
- auditoria;
- transparência proporcional.

## 518. Aquisição emergencial

Contratações emergenciais deverão preservar, na maior medida possível:

- legitimidade;
- proporcionalidade;
- competição;
- verificação;
- segurança;
- registro;
- prevenção de conflito;
- prestação de contas;
- temporalidade.

## 519. Seguro

Seguros poderão transferir parte das consequências financeiras, mas não substituirão:

- prevenção;
- continuidade;
- recuperação;
- responsabilidade;
- proteção das pessoas;
- preservação de dados;
- aprendizagem.

## 520. Aceitação de risco

A aceitação deverá ser realizada por autoridade competente.

Deverá registrar:

- risco;
- causa;
- impacto;
- probabilidade;
- duração;
- partes afetadas;
- estratégia existente;
- controles compensatórios;
- justificativa;
- revisão;
- condição de encerramento.

## 521. Risco não delegável

A organização não deverá transferir formalmente a fornecedor ou colaborador riscos que continuam materialmente sob sua responsabilidade.

Contratos poderão distribuir obrigações, mas não apagar deveres legais, éticos ou institucionais.

## 522. Apetite e tolerância a risco

A governança deverá definir limites para riscos relacionados a:

- vida;
- dignidade;
- dados;
- finanças;
- segurança;
- disponibilidade;
- fornecedores;
- autoridade;
- continuidade institucional;
- reputação.

## 523. Risco residual

Após a aplicação de controles, o risco restante deverá ser:

- conhecido;
- registrado;
- atribuído;
- aceito ou tratado;
- monitorado;
- revisado.

## 524. Exceção

Toda exceção deverá possuir:

- requisito afetado;
- justificativa;
- risco;
- responsável;
- autoridade;
- início;
- validade;
- controles compensatórios;
- plano de regularização;
- revisão.

## 525. Exceção não permanente

Exceções deverão expirar.

Caso a condição precise permanecer, deverá ocorrer:

- nova avaliação;
- mudança formal da arquitetura;
- revisão da política;
- aprovação legítima;
- atualização dos riscos.

## 526. Segurança na continuidade

A segurança deverá permanecer integrada a:

- análise;
- estratégia;
- plano;
- ativação;
- recuperação;
- retorno;
- encerramento;
- aprendizagem.

## 527. Princípio do menor privilégio

Pessoas, agentes e sistemas deverão receber somente os acessos necessários à função e ao período correspondente.

## 528. Acesso emergencial

O acesso emergencial deverá:

- possuir identidade;
- ser limitado;
- ser protegido;
- produzir alerta;
- ser registrado;
- ser monitorado;
- expirar;
- ser revisto;
- ser revogado após o uso.

## 529. Credenciais compartilhadas

Credenciais compartilhadas deverão ser evitadas.

Quando inevitáveis em condição extraordinária, deverão possuir:

- custódia;
- acesso restrito;
- rotação;
- registro de retirada;
- monitoramento;
- revisão;
- substituição posterior.

## 530. Autenticação alternativa

Mecanismos alternativos deverão ser capazes de operar quando o provedor principal estiver indisponível, sem eliminar:

- confirmação de identidade;
- autoridade;
- proteção;
- rastreabilidade;
- revogação;
- limitação temporal.

## 531. Gestão de chaves

Chaves necessárias à recuperação deverão possuir:

- custódia;
- redundância;
- segregação;
- rotação;
- recuperação;
- proteção física e lógica;
- sucessão;
- teste;
- registro de acesso.

## 532. Segmentação

Ambientes de recuperação deverão ser segmentados para impedir:

- propagação;
- acesso indevido;
- contaminação;
- conflito;
- exposição;
- interferência com produção;
- comunicação externa não autorizada.

## 533. Ambiente limpo

Quando houver comprometimento, o ambiente deverá ser reconstruído a partir de componentes confiáveis.

Não deverão ser reutilizados sem validação:

- imagens;
- credenciais;
- configurações;
- dados;
- dispositivos;
- redes;
- ferramentas;
- códigos;
- dependências.

## 534. Preservação forense

Quando aplicável, deverão ser preservados:

- logs;
- imagens;
- memória;
- tráfego;
- estados;
- dispositivos;
- credenciais relacionadas;
- cronologia;
- cadeia de custódia.

## 535. Continuidade da segurança

Controles críticos de segurança deverão possuir continuidade própria, incluindo:

- identidade;
- monitoramento;
- proteção de endpoints;
- detecção;
- resposta;
- gestão de vulnerabilidades;
- registros;
- comunicação;
- custódia de chaves.

## 536. Operação em confiança reduzida

Após comprometimento, a organização poderá adotar modelo de confiança reduzida.

Ele poderá exigir:

- verificações adicionais;
- limitação de acesso;
- dupla autorização;
- isolamento;
- observação reforçada;
- validação manual;
- suspensão de integrações;
- retorno gradual.

## 537. Privacidade

A continuidade deverá preservar:

- finalidade;
- necessidade;
- minimização;
- segurança;
- transparência;
- direitos;
- retenção;
- controle de acesso;
- rastreabilidade.

## 538. Dados emergenciais

A condição adversa poderá justificar tratamentos específicos quando legalmente permitidos.

Esses tratamentos deverão possuir:

- fundamento;
- finalidade;
- escopo;
- duração;
- acesso;
- proteção;
- registro;
- encerramento;
- revisão.

## 539. Minimização durante a crise

A organização não deverá coletar dados além do necessário sob justificativa genérica de emergência.

Cada ampliação deverá ser avaliada quanto a:

- necessidade;
- proporcionalidade;
- finalidade;
- risco;
- retenção;
- acesso;
- eliminação.

## 540. Compartilhamento emergencial

O compartilhamento deverá definir:

- partes;
- finalidade;
- dados;
- autoridade;
- canal;
- segurança;
- retenção;
- restrições;
- registro;
- encerramento.

## 541. Soberania

Dados e operações deverão respeitar as obrigações territoriais e institucionais aplicáveis.

Estratégias multinacionais ou multirregionais deverão considerar:

- localização;
- jurisdição;
- transferências;
- acesso governamental;
- contratos;
- criptografia;
- direitos;
- retorno;
- portabilidade.

## 542. Residência de dados

A recuperação em região alternativa não deverá violar requisitos de residência.

Os planos deverão reconhecer previamente:

- regiões permitidas;
- exceções legítimas;
- autoridades;
- controles;
- duração;
- retorno;
- evidências.

## 543. Segurança física

Instalações ordinárias e alternativas deverão possuir controles proporcionais de:

- acesso;
- vigilância;
- proteção contra incêndio;
- energia;
- ambiente;
- armazenamento;
- evacuação;
- visitantes;
- equipamentos;
- documentos.

## 544. Evacuação

Planos de evacuação deverão priorizar pessoas e considerar:

- rotas;
- saídas;
- pontos de encontro;
- acessibilidade;
- visitantes;
- contagem;
- comunicação;
- emergência médica;
- autoridades públicas;
- proibição de retorno não autorizado.

## 545. Retorno às instalações

O retorno deverá depender de:

- inspeção;
- segurança estrutural;
- energia;
- ambiente;
- acesso;
- autorização;
- comunicação;
- capacidade;
- riscos;
- registro.

## 546. Saúde e segurança do trabalho

A continuidade deverá observar as exigências de saúde e segurança aplicáveis às atividades e aos ambientes.

Deverão ser considerados:

- riscos;
- equipamentos de proteção;
- treinamento;
- ergonomia;
- jornada;
- exposição;
- emergência;
- trabalho remoto;
- deslocamento;
- documentação.

## 547. Normas Regulamentadoras

As Normas Regulamentadoras aplicáveis deverão orientar desde a concepção:

- instalações;
- atividades;
- planos;
- treinamento;
- equipamentos;
- evacuação;
- eletricidade;
- ergonomia;
- trabalho em altura;
- máquinas;
- ambientes;
- proteção coletiva e individual.

A identificação da norma aplicável deverá ocorrer antes da definição do procedimento correspondente.

## 548. Conformidade legal

A organização deverá manter processo para identificar:

- leis;
- regulamentos;
- normas;
- licenças;
- contratos;
- decisões;
- obrigações territoriais;
- prazos;
- autoridades;
- evidências.

## 549. Matriz de aplicabilidade

A matriz deverá relacionar:

- requisito;
- origem;
- território;
- organização;
- função;
- plano;
- controle;
- responsável;
- evidência;
- periodicidade;
- situação.

## 550. Mudança normativa

Mudanças legais ou normativas deverão gerar:

- avaliação;
- impacto;
- responsável;
- alteração de planos;
- treinamento;
- teste;
- comunicação;
- evidência;
- prazo de adequação.

## 551. Normas técnicas

A organização deverá utilizar normas técnicas aplicáveis como referências estruturantes.

Elas poderão apoiar:

- continuidade;
- recuperação;
- segurança;
- gestão de riscos;
- tecnologia;
- saúde e segurança;
- instalações;
- dados;
- auditoria;
- qualidade.

## 552. Adequação contextual das normas

A adoção de uma norma deverá considerar:

- escopo;
- aplicabilidade;
- território;
- setor;
- risco;
- porte;
- obrigação;
- relação com outras normas.

Não deverá haver aplicação mecânica que contrarie propósito, lei ou realidade operacional.

## 553. Evidência de conformidade

A conformidade deverá ser sustentada por:

- políticas;
- planos;
- registros;
- testes;
- treinamentos;
- contratos;
- autorizações;
- auditorias;
- correções;
- resultados.

A existência de documentos não comprova, isoladamente, execução.

## 554. Não conformidade

Toda não conformidade deverá possuir:

- descrição;
- requisito;
- impacto;
- risco;
- responsável;
- prioridade;
- ação;
- prazo;
- validação;
- encerramento.

## 555. Comunicação obrigatória

A organização deverá conhecer obrigações de comunicar:

- incidentes;
- indisponibilidades;
- violações;
- acidentes;
- riscos;
- perdas;
- impactos;
- eventos relevantes.

## 556. Prazo de comunicação

Prazos legais, regulatórios e contratuais deverão ser incorporados aos planos.

A organização não deverá depender de consulta improvisada durante a crise para descobrir obrigações previsíveis.

## 557. Preservação de direitos

A continuidade deverá manter mecanismos para:

- reclamação;
- contestação;
- recurso;
- correção;
- acesso;
- transparência;
- representação;
- proteção contra abuso;
- reparação.

## 558. Governança de fornecedores

Fornecedores críticos deverão ser governados ao longo de todo o ciclo:

- seleção;
- contratação;
- integração;
- operação;
- monitoramento;
- incidente;
- recuperação;
- saída;
- encerramento.

## 559. Due diligence

Antes da contratação, deverão ser avaliados:

- capacidade;
- estabilidade;
- segurança;
- continuidade;
- localização;
- subcontratados;
- histórico;
- recuperação;
- conformidade;
- transparência;
- portabilidade;
- suporte.

## 560. Requisitos contratuais

Contratos poderão estabelecer:

- disponibilidade;
- RTO;
- RPO;
- suporte;
- comunicação;
- testes;
- evidências;
- auditoria;
- segurança;
- proteção de dados;
- subcontratação;
- portabilidade;
- saída;
- responsabilidade.

## 561. Responsabilidade compartilhada

A organização deverá compreender o que é responsabilidade:

- do fornecedor;
- da Plataforma UNO;
- da organização usuária;
- de parceiros;
- de operadores;
- de usuários.

Lacunas entre responsabilidades deverão ser tratadas antes da interrupção.

## 562. SLO contratual e necessidade real

O compromisso contratual deverá ser comparado aos requisitos da missão.

Quando o fornecedor oferecer RTO, RPO ou disponibilidade insuficientes, deverão existir:

- estratégia complementar;
- fornecedor alternativo;
- operação degradada;
- aceitação de risco;
- substituição;
- redesenho.

## 563. Dependência de suporte

A organização deverá conhecer:

- canais;
- idiomas;
- horários;
- níveis;
- tempos;
- contatos;
- escalonamento;
- limites;
- suporte emergencial;
- evidências.

## 564. Testes com fornecedores

Fornecedores críticos deverão participar, quando aplicável, de:

- exercícios;
- testes de recuperação;
- validações de contato;
- testes de exportação;
- simulações de indisponibilidade;
- revisões;
- ações corretivas.

## 565. Evidências do fornecedor

Declarações comerciais não deverão substituir evidências proporcionais de:

- capacidade;
- testes;
- recuperação;
- segurança;
- conformidade;
- continuidade;
- comunicação.

## 566. Subcontratados

A organização deverá conhecer subcontratados capazes de afetar:

- dados;
- disponibilidade;
- suporte;
- recuperação;
- segurança;
- soberania;
- continuidade;
- saída.

## 567. Alteração de subcontratado

Mudanças relevantes deverão produzir:

- comunicação;
- avaliação;
- revisão contratual;
- análise de risco;
- atualização de planos;
- teste, quando necessário.

## 568. Concentração sistêmica

A dependência de um mesmo fornecedor por muitas organizações poderá produzir risco sistêmico.

A análise deverá considerar:

- capacidade concorrida;
- prioridade contratual;
- recursos compartilhados;
- região;
- cadeia de suprimentos;
- tempo de recuperação;
- alternativas.

## 569. Falência do fornecedor

Planos deverão considerar:

- interrupção abrupta;
- perda de suporte;
- acesso aos dados;
- licenças;
- credenciais;
- código;
- infraestrutura;
- contratos;
- transferência;
- continuidade temporária.

## 570. Estratégia de saída contratual

A saída deverá prever:

- dados;
- formatos;
- prazos;
- documentação;
- conhecimento;
- credenciais;
- configurações;
- eliminação;
- transição;
- validação;
- evidência.

## 571. Direito de auditoria

Quando proporcional ao risco, a organização deverá buscar direitos para:

- solicitar evidências;
- revisar controles;
- acompanhar correções;
- validar continuidade;
- conhecer subcontratados;
- verificar eliminação;
- examinar incidentes.

## 572. Organizações federadas

A governança federada deverá equilibrar:

- autonomia;
- coordenação;
- solidariedade;
- identidade;
- soberania;
- responsabilidade;
- compartilhamento;
- prestação de contas.

## 573. Acordo federativo de continuidade

O acordo deverá definir:

- capacidades compartilhadas;
- critérios de acionamento;
- prioridades;
- autoridade;
- custos;
- dados;
- segurança;
- limites;
- reciprocidade;
- encerramento;
- resolução de conflitos.

## 574. Autonomia local

Cada organização deverá manter capacidade de:

- reconhecer seu contexto;
- proteger suas pessoas;
- declarar sua condição;
- executar ações autorizadas;
- preservar registros;
- solicitar apoio;
- recusar ação ilegítima;
- prestar contas.

## 575. Coordenação federada

A coordenação deverá facilitar:

- percepção comum;
- distribuição de recursos;
- comunicação;
- apoio;
- resolução de conflitos;
- aprendizagem;
- recuperação integrada.

## 576. Prioridade federada

Quando recursos compartilhados forem insuficientes, deverão ser considerados:

- vida;
- dignidade;
- vulnerabilidade;
- extensão;
- impacto;
- urgência;
- alternativas;
- dependências;
- valor público;
- proporcionalidade.

## 577. Solidariedade com responsabilidade

A cooperação não deverá eliminar:

- registro;
- segurança;
- limites;
- autoridade;
- prestação de contas;
- autonomia;
- proteção de dados;
- encerramento.

## 578. Compartilhamento de dados na federação

O compartilhamento deverá observar:

- finalidade;
- necessidade;
- autoridade;
- minimização;
- segurança;
- soberania;
- retenção;
- acesso;
- eliminação;
- auditoria.

## 579. Interoperabilidade

Planos federados deverão considerar interoperabilidade de:

- identidade;
- comunicação;
- dados;
- eventos;
- solicitações;
- recursos;
- registros;
- evidências;
- estados;
- encerramento.

## 580. Relações com autoridades públicas

A governança deverá manter:

- contatos;
- competências;
- protocolos;
- obrigações;
- canais;
- documentos;
- prazos;
- responsabilidades;
- formas de cooperação.

## 581. Relações com comunidades

A organização deverá comunicar e cooperar com comunidades de forma:

- verdadeira;
- acessível;
- respeitosa;
- segura;
- não manipulativa;
- participativa;
- proporcional.

## 582. Voluntários

A participação voluntária deverá possuir:

- consentimento;
- função;
- orientação;
- segurança;
- supervisão;
- limites;
- identificação;
- registro;
- apoio;
- encerramento.

Voluntários não deverão substituir profissionais exigidos por lei ou norma.

## 583. Doações e recursos externos

Recursos recebidos deverão possuir:

- origem;
- finalidade;
- inventário;
- custódia;
- distribuição;
- transparência;
- segurança;
- prestação de contas;
- tratamento de excedentes.

## 584. Comunicação pública

A comunicação deverá equilibrar:

- transparência;
- privacidade;
- segurança;
- investigação;
- clareza;
- confiança;
- responsabilidade.

## 585. Porta-voz

O porta-voz deverá possuir:

- autoridade;
- acesso a informações verificadas;
- compreensão do evento;
- orientação jurídica;
- capacidade de comunicar;
- substituto;
- registro das manifestações.

## 586. Proibição de ocultação

Não deverão ser ocultados fatos relevantes com a finalidade de:

- preservar aparência;
- evitar responsabilização;
- impedir fiscalização;
- manipular usuários;
- reduzir artificialmente o impacto;
- proteger interesses circunstanciais.

## 587. Proteção contra divulgação indevida

Transparência não autoriza divulgação de:

- dados pessoais desnecessários;
- credenciais;
- detalhes que ampliem ataque;
- localização sensível;
- informação protegida;
- evidência comprometida;
- identidade de vítimas sem fundamento.

## 588. Auditoria de continuidade

A auditoria poderá avaliar:

- política;
- governança;
- requisitos;
- planos;
- estratégias;
- recursos;
- contatos;
- fornecedores;
- exercícios;
- evidências;
- riscos;
- ações corretivas;
- maturidade.

## 589. Auditoria técnica

A auditoria técnica deverá avaliar:

- arquitetura;
- redundância;
- recuperação;
- dados;
- segurança;
- identidade;
- integrações;
- capacidade;
- observabilidade;
- evidências.

## 590. Auditoria operacional

A auditoria operacional deverá avaliar:

- execução;
- responsabilidades;
- comunicação;
- procedimentos;
- mobilização;
- recursos;
- registros;
- reconciliação;
- retorno;
- aprendizagem.

## 591. Auditoria institucional

A auditoria institucional deverá avaliar:

- autoridade;
- legitimidade;
- prestação de contas;
- sucessão;
- conflitos;
- aderência aos princípios;
- preservação de direitos;
- transparência;
- memória.

## 592. Independência da auditoria

Auditores deverão possuir independência proporcional e acesso legítimo às evidências necessárias.

Conflitos de interesse deverão ser declarados.

## 593. Achados

Cada achado deverá indicar:

- condição;
- requisito;
- evidência;
- causa;
- risco;
- impacto;
- recomendação;
- responsável;
- prazo;
- prioridade.

## 594. Tratamento dos achados

O tratamento deverá incluir:

- análise;
- plano;
- recursos;
- execução;
- validação;
- teste;
- evidência;
- encerramento.

## 595. Prestação de contas

A prestação de contas deverá informar:

- capacidade;
- lacunas;
- riscos;
- recursos;
- testes;
- falhas;
- incidentes;
- decisões;
- melhorias;
- pendências.

## 596. Indicadores para governança

A governança poderá acompanhar:

- cobertura de análises;
- planos atualizados;
- contatos validados;
- funções exercitadas;
- RTO observado;
- RPO observado;
- lacunas;
- riscos vencidos;
- ações atrasadas;
- fornecedores testados;
- sucessores preparados.

## 597. Painel de governança

O painel deverá permitir aprofundamento por:

- organização;
- função;
- criticidade;
- território;
- plano;
- fornecedor;
- risco;
- teste;
- responsável;
- prazo.

## 598. Revisão pela direção

A direção deverá revisar periodicamente:

- adequação;
- desempenho;
- riscos;
- mudanças;
- recursos;
- incidentes;
- exercícios;
- conformidade;
- oportunidades de melhoria.

## 599. Ciclo de vida dos planos

Cada plano deverá atravessar:

1. criação;
2. análise;
3. aprovação;
4. publicação;
5. treinamento;
6. exercício;
7. correção;
8. revisão;
9. substituição;
10. arquivamento;
11. preservação histórica.

## 600. Gatilhos de revisão

Planos deverão ser revistos quando houver:

- alteração de missão;
- mudança organizacional;
- mudança de liderança;
- mudança de equipe;
- mudança tecnológica;
- mudança de fornecedor;
- mudança de instalação;
- alteração normativa;
- incidente;
- exercício;
- falha;
- nova dependência;
- mudança de risco.

## 601. Revisão extraordinária

Eventos relevantes deverão gerar revisão antes do ciclo ordinário.

A revisão deverá avaliar se o plano permanece:

- correto;
- suficiente;
- acessível;
- seguro;
- executável;
- coerente;
- legítimo.

## 602. Arquivamento

Planos substituídos deverão ser arquivados com:

- versão;
- período de validade;
- responsáveis;
- justificativa de substituição;
- incidentes relacionados;
- evidências;
- restrições de acesso.

## 603. Preservação da memória

A organização deverá preservar por que:

- determinada estratégia foi escolhida;
- determinado risco foi aceito;
- determinado fornecedor foi contratado;
- determinado tempo foi definido;
- determinada exceção foi concedida;
- determinada mudança foi realizada.

## 604. Sucessão institucional

A continuidade deverá atravessar:

- mudança de direção;
- mudança de equipe;
- reorganização;
- fusão;
- separação;
- encerramento;
- mudança de tecnologia;
- mudança de território.

## 605. Transferência de responsabilidade

Toda transferência deverá incluir:

- planos;
- riscos;
- contatos;
- recursos;
- contratos;
- evidências;
- pendências;
- acessos;
- autoridade;
- conhecimento.

## 606. Encerramento de função

Quando uma função for encerrada, deverão ser tratados:

- dados;
- obrigações;
- usuários;
- contratos;
- acessos;
- planos;
- recursos;
- registros;
- responsabilidades;
- memória.

## 607. Antipadrões de governança

Constituem antipadrões:

- continuidade restrita à tecnologia;
- política sem autoridade;
- plano sem proprietário;
- risco aceito por pessoa incompetente;
- exceção sem validade;
- acesso emergencial permanente;
- fornecedor sem estratégia de saída;
- auditoria apenas documental;
- conformidade somente posterior;
- sucessão nominal;
- responsabilidade compartilhada indefinida;
- plano sem financiamento;
- ocultação de lacunas;
- autoridade extraordinária sem devolução.

## 608. Invariantes do Lote 5

Permanecem como invariantes:

- toda responsabilidade deverá ser atribuível;
- toda autoridade deverá ser legítima;
- capacidade técnica não equivale a autoridade;
- continuidade deverá possuir financiamento proporcional;
- toda exceção deverá expirar;
- todo risco residual deverá ser conhecido;
- segurança permanecerá ativa durante a interrupção;
- privacidade não será abandonada;
- leis, normas e NRs orientarão o desenho desde o início;
- fornecedor não substituirá responsabilidade institucional;
- cooperação federada preservará autonomia;
- transparência não autoriza exposição indevida;
- auditoria avaliará capacidade real;
- sucessão deverá ser exercitada;
- planos substituídos deverão preservar memória;
- autoridade extraordinária sempre retornará à estrutura ordinária.

## 609. Garantias esperadas

A governança deverá garantir que:

- a continuidade possua direção;
- os planos possuam proprietários;
- as responsabilidades sejam reconhecidas;
- os riscos sejam tratados;
- os recursos sejam provisionados;
- as exceções sejam controladas;
- os acessos emergenciais sejam temporários;
- os fornecedores sejam governados;
- as organizações federadas possam cooperar;
- as normas aplicáveis sejam incorporadas;
- as auditorias produzam correção;
- a memória atravesse mudanças.

## 610. Resultado esperado do Lote 5

Ao final desta etapa, a Plataforma UNO deverá possuir bases para assegurar que sua continuidade seja:

- legítima;
- segura;
- financiada;
- responsável;
- normativa;
- auditável;
- cooperativa;
- transparente;
- sustentável;
- transmissível entre gerações.

## 611. Transição para o Lote 6

Políticas, planos, estratégias e contratos não demonstram sozinhos a capacidade de continuidade.

O lote final deverá estabelecer como a Plataforma UNO irá:

- testar;
- simular;
- medir;
- observar;
- produzir evidências;
- corrigir falhas;
- aprender;
- avaliar maturidade;
- preservar memória;
- revisar garantias;
- concluir o modelo integrado de continuidade operacional e Disaster Recovery.

Somente a prática controlada poderá transformar planejamento em confiança institucional.

---

# Lote 6 — Exercícios, Evidências, Maturidade, Aprendizagem e Encerramento

## 612. Continuidade não presumida

A existência de políticas, planos, ambientes alternativos, backups, contratos e equipes designadas não constitui, isoladamente, prova de continuidade.

A capacidade somente deverá ser considerada comprovada quando a organização demonstrar, por meio de exercícios, testes, evidências e resultados, que consegue:

- reconhecer interrupções;
- mobilizar responsáveis;
- preservar pessoas;
- ativar estratégias;
- manter funções essenciais;
- recuperar recursos;
- reconciliar estados;
- comunicar;
- retornar;
- aprender.

## 613. Exercício como prova institucional

O exercício deverá transformar hipóteses em observações.

Ele deverá revelar:

- o que funciona;
- o que não funciona;
- o que demora;
- o que depende de pessoas específicas;
- o que não está documentado;
- quais recursos são insuficientes;
- quais autoridades são ambíguas;
- quais dependências estavam ocultas;
- quais estratégias não sustentam a missão.

## 614. Finalidade dos exercícios

Os exercícios deverão possuir objetivos claros, como:

- validar planos;
- treinar pessoas;
- testar contatos;
- confirmar autoridade;
- medir tempos;
- avaliar operação degradada;
- verificar recuperação tecnológica;
- testar fornecedores;
- avaliar comunicação;
- exercitar sucessão;
- identificar lacunas;
- fortalecer cooperação;
- produzir aprendizagem.

## 615. Programa permanente de exercícios

A Plataforma UNO deverá manter programa permanente de exercícios de continuidade e Disaster Recovery.

O programa deverá definir:

- escopo;
- funções;
- organizações;
- cenários;
- periodicidade;
- participantes;
- autoridades;
- recursos;
- riscos;
- evidências;
- critérios;
- ações corretivas;
- revisão.

## 616. Planejamento baseado em risco

A frequência e a profundidade dos exercícios deverão ser proporcionais:

- à criticidade;
- ao impacto;
- ao MTPD;
- ao RTO;
- ao RPO;
- às mudanças;
- ao histórico;
- às dependências;
- às obrigações;
- às lacunas;
- à incerteza.

## 617. Cobertura dos exercícios

O programa deverá buscar cobrir ao longo do tempo:

- pessoas;
- funções;
- serviços;
- instalações;
- tecnologia;
- dados;
- fornecedores;
- organizações federadas;
- comunicação;
- autoridade;
- recursos financeiros;
- retorno;
- aprendizagem.

## 618. Modalidades de exercício

Poderão ser utilizados:

- revisão orientada;
- teste documental;
- verificação de contatos;
- walkthrough;
- exercício de mesa;
- simulação funcional;
- teste técnico;
- exercício de recuperação;
- teste de local alternativo;
- exercício federado;
- exercício de comunicação;
- exercício integral;
- teste não anunciado;
- recuperação real controlada.

## 619. Revisão orientada

A revisão orientada deverá reunir responsáveis para percorrer o plano e verificar:

- clareza;
- completude;
- atualidade;
- responsabilidades;
- contatos;
- dependências;
- decisões;
- recursos;
- critérios;
- comunicação;
- retorno.

## 620. Teste documental

O teste documental deverá confirmar:

- existência;
- identificação;
- versão;
- acessibilidade;
- classificação;
- aprovação;
- distribuição;
- coerência;
- relações com outros planos;
- preservação offline.

## 621. Verificação de contatos

A verificação deverá confirmar:

- identidade;
- função;
- canal;
- disponibilidade;
- substituto;
- autoridade;
- capacidade de resposta;
- atualização.

## 622. Walkthrough

O walkthrough deverá permitir que os responsáveis expliquem como executariam o plano.

Ele deverá revelar:

- interpretações divergentes;
- etapas ausentes;
- dependências ocultas;
- decisões ambíguas;
- acessos indisponíveis;
- documentos desconhecidos;
- lacunas de conhecimento.

## 623. Exercício de mesa

O exercício de mesa deverá apresentar cenário progressivo para que os participantes:

- interpretem sinais;
- avaliem impactos;
- decidam;
- priorizem;
- comuniquem;
- mobilizem;
- escalonem;
- planejem recuperação;
- preparem retorno.

## 624. Simulação funcional

A simulação funcional deverá exigir ações reais em ambiente controlado, como:

- acionamento;
- comunicação;
- mobilização;
- ativação de ferramentas;
- trabalho por estrutura alternativa;
- elaboração de decisões;
- atualização do quadro operacional;
- coordenação entre equipes.

## 625. Teste técnico

O teste técnico deverá avaliar componentes necessários à continuidade, incluindo:

- infraestrutura;
- redes;
- identidades;
- dados;
- aplicações;
- integrações;
- segurança;
- observabilidade;
- capacidade;
- automações.

## 626. Exercício de Disaster Recovery

O exercício de DR deverá demonstrar que recursos tecnológicos podem ser recuperados de acordo com:

- prioridade;
- dependências;
- RTO;
- RPO;
- capacidade;
- segurança;
- validação;
- reconciliação;
- comunicação;
- retorno.

## 627. Exercício de local alternativo

O exercício deverá avaliar:

- acesso;
- mobilização;
- energia;
- telecomunicação;
- equipamentos;
- identidades;
- dados;
- segurança;
- capacidade;
- acessibilidade;
- condições humanas;
- duração suportável.

## 628. Exercício de trabalho remoto

O exercício deverá avaliar:

- disponibilidade das pessoas;
- equipamentos;
- conectividade;
- autenticação;
- proteção de dados;
- comunicação;
- colaboração;
- ergonomia;
- suporte;
- limitações domésticas;
- capacidade real.

## 629. Exercício de operação manual

O exercício deverá comprovar se a operação manual consegue:

- receber demandas;
- identificar pessoas;
- registrar ações;
- preservar autoridade;
- evitar duplicidade;
- proteger dados;
- sustentar volume mínimo;
- reconciliar posteriormente.

## 630. Exercício de comunicação

A simulação deverá testar:

- fonte oficial;
- porta-voz;
- mensagens;
- aprovação;
- canais;
- acessibilidade;
- correção;
- frequência;
- resposta a boatos;
- comunicação com autoridades;
- comunicação com pessoas vulneráveis.

## 631. Exercício de sucessão

A sucessão deverá ser exercitada com a indisponibilidade simulada de:

- direção;
- coordenação;
- proprietário de serviço;
- administrador;
- especialista;
- responsável financeiro;
- porta-voz;
- custodiante de chaves.

## 632. Exercício com fornecedores

Fornecedores críticos deverão participar, quando aplicável, de exercícios que avaliem:

- acionamento;
- suporte;
- escalonamento;
- capacidade;
- comunicação;
- recuperação;
- evidências;
- subcontratados;
- transferência;
- saída.

## 633. Exercício federado

O exercício federado deverá avaliar:

- solicitação de apoio;
- autoridade;
- prioridades;
- compartilhamento;
- interoperabilidade;
- segurança;
- autonomia;
- comunicação;
- conflitos;
- prestação de contas;
- encerramento.

## 634. Exercício integral

O exercício integral poderá combinar:

- indisponibilidade humana;
- perda de instalação;
- falha tecnológica;
- comprometimento;
- perda de fornecedor;
- comunicação pública;
- operação degradada;
- DR;
- retorno.

Sua execução deverá ser autorizada e proporcional aos riscos.

## 635. Simulação identificada

Todo exercício que utilize evento fictício, alerta artificial, interrupção controlada ou dado simulado deverá ser identificado de forma inequívoca como:

**SIMULAÇÃO**

Essa identificação deverá aparecer:

- nas mensagens;
- nos painéis;
- nos alertas;
- nos registros;
- nas ordens;
- nos documentos;
- nos canais operacionais;
- nas interfaces apresentadas aos participantes.

## 636. Proteção contra interpretação real

A marcação **SIMULAÇÃO** deverá impedir que:

- usuários;
- colaboradores;
- fornecedores;
- agentes;
- organizações;
- autoridades;
- público externo;

interpretem o exercício como ocorrência real.

## 637. Separação entre simulação e realidade

Dados, alertas, decisões e resultados simulados deverão permanecer distinguíveis dos reais.

A simulação não deverá:

- alterar indicadores reais indevidamente;
- mobilizar serviços públicos sem coordenação;
- produzir pagamentos;
- enviar ordens externas;
- expor pessoas;
- modificar dados produtivos;
- gerar pânico.

## 638. Incidente real durante exercício

Se ocorrer evento real durante a simulação:

- o fato deverá ser reconhecido;
- a prioridade deverá ser reavaliada;
- a distinção entre real e simulado deverá ser declarada;
- o exercício poderá ser suspenso;
- recursos deverão ser redirecionados;
- registros deverão permanecer separados.

## 639. Plano do exercício

Todo exercício relevante deverá possuir plano contendo:

- identificador;
- objetivo;
- escopo;
- cenário;
- participantes;
- autoridades;
- ambiente;
- duração;
- premissas;
- riscos;
- controles;
- injeções;
- critérios de sucesso;
- critérios de suspensão;
- evidências;
- comunicação;
- encerramento.

## 640. Proprietário do exercício

O exercício deverá possuir proprietário responsável por:

- planejamento;
- autorização;
- coordenação;
- segurança;
- evidências;
- avaliação;
- ações posteriores;
- encerramento.

## 641. Direção do exercício

A direção deverá controlar:

- início;
- progressão;
- injeções;
- ritmo;
- segurança;
- suspensão;
- conclusão;
- separação entre simulação e realidade.

## 642. Observadores

Observadores deverão registrar:

- decisões;
- tempos;
- dúvidas;
- conflitos;
- atrasos;
- improvisações;
- falhas;
- acertos;
- dependências;
- comunicação;
- efeitos humanos.

## 643. Avaliadores

Avaliadores deverão comparar o comportamento observado com:

- objetivos;
- planos;
- requisitos;
- tempos;
- princípios;
- obrigações;
- critérios;
- resultados esperados.

## 644. Participantes

Os participantes deverão conhecer:

- sua função;
- autoridade;
- limites;
- canais;
- segurança;
- forma de registro;
- condição de suspensão;
- identificação da simulação.

## 645. Injeções de cenário

As injeções poderão representar:

- nova falha;
- perda de pessoa;
- indisponibilidade de canal;
- notícia falsa;
- aumento de demanda;
- risco físico;
- falha de fornecedor;
- corrupção;
- conflito de prioridade;
- mudança normativa;
- recuperação parcial.

## 646. Incerteza controlada

Exercícios poderão limitar informações para avaliar:

- percepção;
- decisão;
- escalonamento;
- busca de evidências;
- comunicação;
- prudência.

A incerteza deverá ser planejada sem transformar o exercício em armadilha contra os participantes.

## 647. Exercício sem culpabilização

O exercício deverá avaliar o sistema, e não buscar constranger indivíduos.

Falhas deverão ser analisadas considerando:

- desenho;
- informação;
- treinamento;
- autoridade;
- recurso;
- ferramenta;
- comunicação;
- contexto;
- carga;
- dependência;
- cultura.

## 648. Realismo proporcional

O cenário deverá ser realista o suficiente para produzir aprendizagem, sem gerar risco desnecessário.

O realismo poderá envolver:

- pressão temporal;
- recursos limitados;
- informação incompleta;
- múltiplas dependências;
- comunicação;
- decisões;
- recuperação.

## 649. Segurança do exercício

Antes da execução, deverão ser avaliados riscos a:

- pessoas;
- produção;
- dados;
- finanças;
- reputação;
- fornecedores;
- autoridades;
- ambiente;
- comunidade.

## 650. Critérios de suspensão

O exercício deverá ser suspenso quando:

- ocorrer risco real não previsto;
- houver perda de isolamento;
- dados forem expostos;
- pessoas estiverem em perigo;
- efeitos externos forem produzidos;
- surgir incidente real prioritário;
- autoridade for perdida;
- as condições ultrapassarem o escopo autorizado.

## 651. Critérios de sucesso

Os critérios deverão ser definidos antes do exercício.

Poderão incluir:

- detecção;
- declaração;
- mobilização;
- comunicação;
- proteção de pessoas;
- ativação de estratégia;
- atendimento ao MBCO;
- cumprimento do RTO;
- cumprimento do RPO;
- validação;
- reconciliação;
- retorno;
- evidências.

## 652. Sucesso parcial

Um exercício poderá produzir sucesso parcial quando algumas capacidades funcionarem e outras não.

O resultado deverá identificar:

- critérios atendidos;
- critérios não atendidos;
- limitações;
- riscos;
- impacto;
- necessidade de correção;
- necessidade de repetição.

## 653. Falha do exercício

O exercício será considerado falho quando não demonstrar capacidade suficiente para atender critérios obrigatórios.

A falha poderá envolver:

- plano inacessível;
- contato inválido;
- autoridade indefinida;
- recurso ausente;
- estratégia inviável;
- RTO excedido;
- RPO excedido;
- segurança comprometida;
- retorno impossível;
- evidência insuficiente.

## 654. Falha como evidência

A falha deverá ser preservada como evidência institucional.

Ela deverá revelar:

- lacuna;
- risco;
- necessidade de decisão;
- prioridade de melhoria;
- dependência;
- fragilidade da confiança anterior.

## 655. Proibição de maquiar resultados

Não deverão ser alterados resultados para:

- atingir indicador;
- evitar responsabilização;
- preservar reputação;
- justificar investimento;
- proteger fornecedor;
- encerrar ação.

## 656. Evidência mínima do exercício

A evidência deverá registrar:

- identificador;
- versão dos planos;
- cenário;
- participantes;
- autoridades;
- início;
- eventos;
- decisões;
- ações;
- tempos;
- comunicações;
- resultados;
- falhas;
- riscos;
- encerramento.

## 657. Cronologia do exercício

A cronologia deverá permitir reconstruir:

- quando o sinal foi apresentado;
- quando foi percebido;
- quando foi avaliado;
- quando foi declarado;
- quando cada ação começou;
- quando cada resultado foi alcançado;
- quando houve escalonamento;
- quando ocorreu retorno;
- quando houve encerramento.

## 658. Evidências técnicas

Poderão incluir:

- logs;
- métricas;
- alertas;
- capturas;
- comandos;
- registros de alteração;
- resultados de validação;
- relatórios de integridade;
- medições de capacidade;
- estados dos ambientes.

## 659. Evidências operacionais

Poderão incluir:

- listas de presença;
- acionamentos;
- atas;
- decisões;
- tarefas;
- formulários;
- comunicações;
- registros manuais;
- solicitações;
- confirmações;
- reconciliações.

## 660. Evidências institucionais

Poderão incluir:

- declarações;
- delegações;
- autorizações;
- mudanças de nível;
- aceitação de risco;
- comunicação pública;
- prestação de contas;
- devolução de autoridade;
- encerramento.

## 661. Integridade das evidências

As evidências deverão possuir:

- autoria;
- temporalidade;
- proveniência;
- proteção;
- completude;
- contexto;
- vínculo com o exercício;
- retenção;
- acesso controlado.

## 662. Preservação das evidências

As evidências deverão ser preservadas conforme:

- criticidade;
- sensibilidade;
- obrigação;
- necessidade de auditoria;
- aprendizagem;
- responsabilidade;
- memória institucional.

## 663. Evidência negativa

A organização deverá preservar evidências de:

- atrasos;
- falhas;
- dúvidas;
- divergências;
- ausência de resposta;
- decisões incompletas;
- estratégias abandonadas;
- controles não atendidos;
- riscos não previstos.

## 664. Reunião de encerramento imediato

Ao final do exercício, deverá ocorrer reunião inicial para registrar:

- percepção dos participantes;
- fatos;
- problemas;
- riscos urgentes;
- ações imediatas;
- evidências faltantes;
- segurança;
- próximos passos.

## 665. Debriefing

O debriefing deverá permitir reflexão estruturada sobre:

- o que era esperado;
- o que ocorreu;
- o que funcionou;
- o que falhou;
- por que ocorreu;
- quais impactos surgiriam;
- o que precisa mudar;
- o que deverá ser preservado.

## 666. Segurança psicológica

Participantes deverão poder relatar:

- dúvida;
- erro;
- sobrecarga;
- conflito;
- medo;
- improvisação;
- fragilidade;
- limitação;

sem receio de punição indevida por contribuir honestamente com a aprendizagem.

## 667. Responsabilização legítima

Segurança psicológica não elimina responsabilização por:

- fraude;
- ocultação;
- abuso;
- sabotagem;
- desobediência consciente;
- violação deliberada;
- destruição de evidência.

A análise deverá distinguir erro sistêmico de conduta intencional.

## 668. Relatório do exercício

O relatório deverá conter:

- objetivo;
- escopo;
- cenário;
- metodologia;
- participantes;
- critérios;
- cronologia;
- resultados;
- tempos;
- falhas;
- acertos;
- riscos;
- ações;
- responsáveis;
- conclusão.

## 669. Classificação dos achados

Achados poderão ser classificados como:

- observação;
- oportunidade;
- fragilidade;
- não conformidade;
- lacuna crítica;
- risco imediato;
- boa prática;
- capacidade comprovada.

## 670. Gravidade do achado

A gravidade deverá considerar:

- impacto;
- função;
- tempo;
- vida;
- dignidade;
- obrigação;
- abrangência;
- probabilidade;
- recorrência;
- ausência de alternativa;
- risco institucional.

## 671. Ação imediata

Achados críticos poderão exigir:

- comunicação;
- restrição;
- cópia extraordinária;
- correção de acesso;
- atualização de contato;
- suspensão de declaração de prontidão;
- estratégia provisória;
- novo recurso;
- escalonamento.

## 672. Plano de ação corretiva

Cada ação deverá possuir:

- achado;
- causa;
- impacto;
- prioridade;
- responsável;
- autoridade;
- recurso;
- prazo;
- dependências;
- validação;
- critério de encerramento.

## 673. Análise de causa

A análise deverá avaliar fatores:

- técnicos;
- humanos;
- cognitivos;
- processuais;
- documentais;
- financeiros;
- contratuais;
- culturais;
- institucionais;
- normativos;
- arquiteturais.

## 674. Correção do plano

Quando a falha decorrer do plano, deverão ser atualizados:

- conteúdo;
- sequência;
- contatos;
- autoridade;
- critérios;
- recursos;
- estratégia;
- acessibilidade;
- relações com outros planos.

## 675. Correção da arquitetura

Quando a falha decorrer da arquitetura, poderão ser necessárias mudanças em:

- redundância;
- capacidade;
- distribuição;
- identidade;
- dados;
- integrações;
- fornecedores;
- instalações;
- segurança;
- observabilidade.

## 676. Correção institucional

Quando a falha decorrer da governança, poderão ser necessárias mudanças em:

- responsabilidade;
- autoridade;
- sucessão;
- financiamento;
- política;
- contrato;
- prestação de contas;
- cultura;
- supervisão.

## 677. Teste de confirmação

A ação corretiva somente deverá ser encerrada após demonstração proporcional de que:

- a correção foi aplicada;
- a falha original foi tratada;
- não houve regressão relevante;
- o resultado atende ao critério;
- a evidência foi preservada.

## 678. Repetição do exercício

O exercício deverá ser repetido quando:

- critério crítico não for atendido;
- estratégia for alterada;
- plano for reconstruído;
- dependência essencial mudar;
- correção exigir comprovação;
- autoridade competente determinar.

## 679. MTPD observado

Exercícios e incidentes deverão avaliar se o limite máximo tolerável permanece coerente com os impactos observados.

A experiência poderá revelar que o MTPD declarado:

- era excessivo;
- era conservador;
- ignorava impacto;
- não considerava dependência;
- variava por contexto;
- precisava ser reduzido.

## 680. RTO observado

O RTO observado deverá medir o tempo real necessário para atingir o nível de capacidade definido.

A medição deverá distinguir:

- detecção;
- avaliação;
- declaração;
- mobilização;
- preparação;
- recuperação;
- validação;
- liberação;
- estabilização.

## 681. RPO observado

O RPO observado deverá identificar:

- último estado recuperável;
- momento do evento;
- intervalo de perda;
- transações ausentes;
- reconstrução possível;
- divergências;
- efeitos externos;
- reconciliação necessária.

## 682. MBCO observado

A organização deverá avaliar se conseguiu sustentar:

- volume;
- qualidade;
- público;
- território;
- canal;
- segurança;
- duração;
- controles;

previstos no objetivo mínimo.

## 683. Tempo de mobilização

Deverá ser medido o tempo necessário para:

- localizar responsáveis;
- confirmar disponibilidade;
- estabelecer coordenação;
- acessar planos;
- obter autoridade;
- reunir recursos;
- iniciar ações.

## 684. Tempo de decisão

O tempo de decisão deverá ser analisado considerando:

- informação disponível;
- complexidade;
- autoridade;
- conflito;
- escalonamento;
- comunicação;
- risco.

Decisões rápidas não deverão ser valorizadas quando forem irresponsáveis.

## 685. Tempo de estabilização

A medição deverá continuar após a primeira restauração até que a função alcance condição estável.

Estabilização poderá exigir:

- correção de erros;
- aumento de capacidade;
- redução de filas;
- ativação de monitoramento;
- validação;
- apoio a usuários;
- ajuste de equipes.

## 686. Tempo de retorno

O tempo de retorno deverá incluir:

- preparação;
- reconciliação;
- migração;
- validação;
- liberação;
- reversão de acessos;
- encerramento do ambiente alternativo;
- comunicação.

## 687. Tempo de recuperação do passivo

A organização deverá medir o tempo necessário para tratar:

- filas;
- solicitações;
- transações;
- registros manuais;
- pagamentos;
- comunicações;
- pendências;
- compensações;
- reconciliações.

## 688. Indicadores de cobertura

Poderão ser utilizados:

- percentual de funções analisadas;
- percentual de funções com plano;
- percentual de planos atualizados;
- percentual de estratégias exercitadas;
- percentual de contatos validados;
- percentual de fornecedores testados;
- percentual de sucessores exercitados;
- percentual de requisitos comprovados.

## 689. Indicadores de desempenho

Poderão incluir:

- tempo de detecção;
- tempo de declaração;
- tempo de mobilização;
- RTO observado;
- RPO observado;
- capacidade mínima atingida;
- tempo de estabilização;
- tempo de retorno;
- tempo de tratamento de filas.

## 690. Indicadores de qualidade

Poderão incluir:

- falhas de comunicação;
- decisões sem autoridade;
- dependências desconhecidas;
- procedimentos desatualizados;
- acessos emergenciais não revogados;
- evidências incompletas;
- conflitos de prioridade;
- falhas recorrentes;
- ações corretivas vencidas.

## 691. Indicadores humanos

Deverão ser observados:

- horas extraordinárias;
- fadiga;
- afastamentos;
- acidentes;
- sobrecarga;
- disponibilidade;
- substituição;
- apoio;
- satisfação dos participantes;
- impacto psicossocial.

## 692. Indicadores de fornecedores

Poderão incluir:

- tempo de resposta;
- cumprimento de compromisso;
- capacidade entregue;
- falhas de escalonamento;
- participação em exercícios;
- evidências fornecidas;
- reincidência;
- transparência;
- portabilidade comprovada.

## 693. Indicadores sem mascaramento

Indicadores agregados não deverão ocultar:

- função crítica sem plano;
- requisito não comprovado;
- fornecedor crítico não testado;
- sucessor inexistente;
- risco vencido;
- ação corretiva atrasada;
- organização vulnerável;
- população desassistida.

## 694. Confiabilidade dos indicadores

Todo indicador deverá possuir:

- definição;
- fonte;
- cálculo;
- periodicidade;
- proprietário;
- limitações;
- contexto;
- histórico;
- evidência.

## 695. Painel de continuidade

O painel poderá apresentar:

- funções essenciais;
- criticidade;
- estado dos planos;
- exercícios;
- RTO;
- RPO;
- MBCO;
- riscos;
- lacunas;
- fornecedores;
- ações corretivas;
- maturidade;
- próxima revisão.

## 696. Declaração de capacidade

Uma capacidade somente deverá ser declarada comprovada quando existirem evidências proporcionais.

A declaração deverá indicar:

- função;
- cenário;
- estratégia;
- data;
- escopo;
- resultado;
- tempos;
- limitações;
- riscos residuais;
- validade;
- autoridade.

## 697. Validade da declaração

A declaração deverá ser revista ou perder validade quando houver:

- mudança de arquitetura;
- mudança de pessoas;
- mudança de fornecedor;
- mudança de instalação;
- mudança de missão;
- incidente;
- falha;
- mudança normativa;
- tempo excessivo sem exercício.

## 698. Nível 0 — continuidade inexistente

Neste nível:

- funções não estão identificadas;
- impactos não são conhecidos;
- planos não existem;
- responsabilidades são indefinidas;
- recuperação depende de improvisação;
- não há exercícios;
- não há evidências.

## 699. Nível 1 — continuidade reativa

Neste nível:

- existem respostas informais;
- algumas pessoas conhecem alternativas;
- planos são fragmentados;
- dependências permanecem ocultas;
- exercícios são raros;
- a recuperação depende de especialistas;
- riscos são tratados após falhas.

## 700. Nível 2 — continuidade definida

Neste nível:

- funções são analisadas;
- impactos são classificados;
- planos são documentados;
- responsáveis são atribuídos;
- estratégias são selecionadas;
- contatos são mantidos;
- exercícios começam a ocorrer;
- ações são registradas.

## 701. Nível 3 — continuidade gerenciada

Neste nível:

- requisitos são medidos;
- exercícios possuem programa;
- fornecedores participam;
- sucessores são preparados;
- tempos são observados;
- evidências são preservadas;
- riscos são acompanhados;
- correções são verificadas.

## 702. Nível 4 — continuidade adaptativa

Neste nível:

- prioridades se adaptam ao contexto;
- automações apoiam percepção;
- exercícios revelam dependências;
- estratégias são ajustadas;
- organizações cooperam;
- aprendizagem modifica arquitetura;
- riscos emergentes atualizam planos.

## 703. Nível 5 — continuidade institucional e evolutiva

Neste nível:

- continuidade atravessa gerações;
- autoridade possui sucessão;
- memória preserva decisões;
- capacidades são comprovadas;
- pessoas são protegidas;
- a federação coopera com responsabilidade;
- aprendizado fortalece a Engenharia Oficial;
- propósito permanece reconhecível durante a mudança.

## 704. Maturidade por dimensão

A maturidade deverá ser avaliada separadamente em dimensões como:

- governança;
- pessoas;
- processos;
- tecnologia;
- dados;
- comunicação;
- fornecedores;
- instalações;
- exercícios;
- aprendizagem;
- conformidade;
- cooperação federada.

## 705. Proibição da maturidade aparente

A organização não deverá ser considerada madura apenas porque possui:

- ferramentas avançadas;
- certificações;
- documentos extensos;
- ambientes redundantes;
- contratos;
- painéis;
- automações.

Maturidade exige correspondência entre declaração, prática, evidência, responsabilidade e aprendizagem.

## 706. Plano de evolução

A evolução deverá priorizar:

- riscos críticos;
- funções vitais;
- lacunas comprovadas;
- pontos únicos de falha;
- dependências concentradas;
- ausência de sucessão;
- estratégias não testadas;
- obrigações não atendidas;
- ações recorrentes.

## 707. Aprendizagem operacional

Exercícios e incidentes deverão produzir melhorias em:

- planos;
- procedimentos;
- treinamento;
- arquitetura;
- comunicação;
- segurança;
- contratos;
- recursos;
- governança;
- indicadores.

## 708. Aprendizagem institucional

A aprendizagem institucional deverá preservar:

- contexto;
- decisão;
- justificativa;
- falha;
- consequência;
- correção;
- teste;
- resultado;
- princípio fortalecido.

## 709. Aprendizagem federada

Organizações poderão compartilhar aprendizados respeitando:

- segurança;
- privacidade;
- autonomia;
- contratos;
- soberania;
- necessidade;
- responsabilidade.

## 710. Memória sem culpabilização indevida

A memória deverá preservar fatos sem transformar todo erro em condenação individual.

O objetivo será permitir que futuras pessoas e organizações compreendam:

- o que aconteceu;
- por que aconteceu;
- como foi enfrentado;
- o que mudou;
- o que permanece pendente.

## 711. Memória sem apagamento

A correção não deverá apagar:

- versões anteriores;
- decisões;
- falhas;
- exceções;
- riscos;
- resultados;
- aprendizados.

## 712. Revisão periódica do modelo

Este modelo deverá ser revisto diante de:

- mudanças legais;
- mudanças normativas;
- novas tecnologias;
- novas ameaças;
- expansão da Plataforma UNO;
- novas organizações;
- novos territórios;
- incidentes;
- exercícios;
- mudanças sociais;
- aprendizagem acumulada.

## 713. Modelo integrado de continuidade

A capacidade integrada estabelecida por este arquivo compreende:

1. reconhecer propósito e missão;
2. identificar funções essenciais;
3. compreender impactos;
4. definir criticidade;
5. estabelecer MTPD, RTO, RPO e MBCO;
6. mapear recursos e dependências;
7. reconhecer lacunas;
8. selecionar estratégias;
9. construir planos;
10. atribuir autoridade;
11. proteger pessoas;
12. detectar interrupções;
13. declarar níveis;
14. coordenar ações;
15. operar de forma alternativa;
16. recuperar tecnologia e informação;
17. validar capacidades;
18. reconciliar estados;
19. retornar de maneira controlada;
20. encerrar estruturas extraordinárias;
21. preservar evidências;
22. aprender;
23. evoluir.

## 714. Relação entre continuidade e Disaster Recovery

A continuidade preserva a missão durante a interrupção.

O Disaster Recovery reconstrói recursos tecnológicos e informacionais.

A operação degradada mantém capacidade possível.

O backup preserva estados recuperáveis.

A reconciliação reúne estados divergentes.

O retorno restabelece a operação governada.

A aprendizagem reduz fragilidades futuras.

## 715. Relação com o arquivo 014

O arquivo:

`014-configuracao-e-estado-operacional.md`

permite reconhecer como a operação está configurada e em qual estado se encontra.

A continuidade depende desse conhecimento para distinguir:

- normalidade;
- degradação;
- contingência;
- interrupção;
- recuperação;
- retorno.

## 716. Relação com o arquivo 015

O arquivo:

`015-capacidade-desempenho-e-saturacao.md`

estabelece como reconhecer capacidade e limites.

A continuidade deverá saber:

- quanto pode sustentar;
- por quanto tempo;
- com quais recursos;
- sob qual demanda;
- em qual nível de degradação;
- com qual passivo acumulado.

## 717. Relação com o arquivo 016

O arquivo:

`016-disponibilidade-confiabilidade-e-slos.md`

estabelece compromissos ordinários de serviço.

A continuidade deverá operar quando esses compromissos estiverem ameaçados ou quando os mecanismos ordinários de confiabilidade forem insuficientes.

## 718. Relação com o arquivo 017

O arquivo:

`017-dependencias-operacionais-e-mapa-de-impacto.md`

permite reconhecer relações, propagação e consequências.

A continuidade utilizará esse mapa para:

- priorizar;
- ordenar recuperação;
- evitar cascatas;
- distribuir recursos;
- reconciliar funções;
- compreender impactos.

## 719. Relação com o arquivo 018

O arquivo:

`018-contingencia-recuperacao-e-operacao-degradada.md`

estabelece como operar sob capacidade reduzida e condições alternativas.

O presente arquivo integra essas estratégias em um modelo institucional de continuidade.

## 720. Relação com o arquivo 019

O arquivo:

`019-backup-restauracao-e-recuperabilidade.md`

estabelece como preservar, restaurar, reconstruir e validar estados.

O Disaster Recovery deverá utilizar essas capacidades para recuperar os recursos necessários à missão.

## 721. Relação com o próximo arquivo

O próximo arquivo:

`021-runbooks-playbooks-e-procedimentos-operacionais.md`

deverá transformar planos e estratégias em instruções operacionais detalhadas, repetíveis, seguras e governadas.

Ele deverá estabelecer como pessoas e agentes executarão ações específicas sem perder contexto, autoridade, evidência e responsabilidade.

## 722. Invariantes permanentes

Permanecem como invariantes:

- vida antes de infraestrutura;
- dignidade durante toda interrupção;
- propósito antes da forma;
- contexto antes da prioridade;
- responsabilidade antes da velocidade;
- governança antes da improvisação;
- evidência antes da confiança;
- aprendizagem antes da repetição;
- continuidade não é apenas tecnologia;
- Disaster Recovery não substitui continuidade;
- alta disponibilidade não substitui recuperação;
- backup não substitui plano;
- plano sem exercício não constitui garantia;
- exercício sem evidência não constitui comprovação;
- autoridade extraordinária será limitada e temporária;
- acessos emergenciais deverão ser revogados;
- operação degradada não elimina direitos;
- automação não elimina responsabilidade;
- fornecedor não elimina responsabilidade institucional;
- autonomia federada será preservada;
- reconciliação precederá o retorno definitivo;
- retorno não apagará a memória;
- recuperação não reconstruirá conscientemente a vulnerabilidade;
- forma poderá mudar, propósito não.

## 723. Garantia de propósito

A continuidade deverá preservar a razão legítima pela qual a organização existe.

## 724. Garantia de proteção humana

Nenhuma estratégia deverá depender de exposição humana desproporcional.

## 725. Garantia de autoridade

Toda decisão relevante deverá permanecer legítima, atribuível e revisável.

## 726. Garantia de capacidade mínima

Funções essenciais deverão possuir nível mínimo definido e estratégia correspondente.

## 727. Garantia de recuperabilidade

Recursos necessários deverão possuir capacidade comprovada de recuperação.

## 728. Garantia de segurança

Continuidade, recuperação e retorno deverão preservar controles essenciais de segurança.

## 729. Garantia de memória

Decisões, ações, estados, falhas e aprendizados deverão atravessar a interrupção.

## 730. Garantia de reconciliação

Estados produzidos por estruturas ordinárias e alternativas deverão poder ser compreendidos e reconciliados.

## 731. Garantia de temporalidade

Medidas extraordinárias deverão possuir início, duração, revisão e encerramento.

## 732. Garantia de sucessão

Funções críticas deverão atravessar indisponibilidade e mudança de pessoas.

## 733. Garantia de cooperação

Organizações deverão poder compartilhar capacidades sem perder autonomia, identidade e responsabilidade.

## 734. Garantia de verificabilidade

Capacidades declaradas deverão poder ser exercitadas, observadas e comprovadas.

## 735. Garantia de aprendizagem

Todo incidente e exercício relevante deverá fortalecer a capacidade futura.

## 736. Princípios e virtudes aplicadas

A continuidade deverá permanecer sustentada por:

- **propósito**, para preservar aquilo que merece continuar;
- **prudência**, para agir sem ampliar o dano;
- **responsabilidade**, para atribuir decisões e consequências;
- **verdade**, para reconhecer capacidade e fragilidade reais;
- **transparência**, para comunicar sem manipular;
- **discernimento**, para priorizar conforme o contexto;
- **justiça**, para proteger pessoas considerando suas diferenças;
- **cooperação**, para integrar capacidades;
- **autonomia**, para permitir ação próxima da realidade;
- **governança**, para limitar e orientar a autonomia;
- **memória**, para preservar a trajetória;
- **continuidade**, para atravessar a interrupção;
- **humildade**, para reconhecer limites;
- **coragem**, para decidir diante da incerteza;
- **esperança responsável**, para reconstruir com fundamento.

## 737. Compromisso legal e normativo

A aplicação deste arquivo deverá observar:

- leis;
- regulamentos;
- normas técnicas;
- Normas Regulamentadoras;
- obrigações setoriais;
- direitos;
- contratos;
- políticas públicas;
- exigências territoriais;
- compromissos institucionais.

A Plataforma UNO não deverá construir primeiro para depois tentar enquadrar sua operação.

As normas aplicáveis deverão ser utilizadas desde o início como linhas orientadoras para encontrar caminhos legítimos entre:

- propósito;
- segurança;
- tecnologia;
- trabalho;
- organização;
- serviço;
- sociedade.

## 738. Declaração de continuidade

Nenhuma função deverá ser declarada plenamente preparada sem evidências proporcionais.

A declaração deverá informar:

- função;
- cenário;
- requisitos;
- estratégia;
- plano;
- data do exercício;
- resultados;
- MTPD;
- RTO observado;
- RPO observado;
- MBCO observado;
- limitações;
- riscos;
- validade;
- autoridade.

## 739. Resultado esperado

Com a aplicação desta Engenharia Oficial, a Plataforma UNO deverá ser capaz de:

- reconhecer o que não pode ser perdido;
- compreender quem será afetado;
- definir quanto tempo possui;
- preservar pessoas e autoridade;
- continuar servindo de forma alternativa;
- coordenar recursos;
- recuperar tecnologia e informação;
- comunicar com verdade;
- reconciliar estados;
- retornar com segurança;
- prestar contas;
- aprender;
- evoluir.

## 740. Encerramento

Continuidade não é fingir que nada aconteceu.

É reconhecer a interrupção, proteger aquilo que importa e adaptar a forma de operar sem abandonar o propósito.

Disaster Recovery não é apenas religar máquinas.

É reconstruir, com segurança e consciência, os recursos necessários para que a missão volte a existir em capacidade suficiente.

Uma organização verdadeiramente contínua não é aquela que nunca falha.

É aquela que:

- percebe;
- compreende;
- protege;
- decide;
- coopera;
- adapta-se;
- recupera;
- reconcilia;
- aprende;
- retorna mais consciente.

A Plataforma UNO deverá atravessar interrupções sem perder sua identidade.

Deverá utilizar tecnologia sem se tornar dependente de uma única tecnologia.

Deverá distribuir autoridade sem produzir ausência de responsabilidade.

Deverá cooperar sem eliminar autonomia.

Deverá agir com velocidade sem abandonar prudência.

Deverá recuperar o que foi perdido sem reconstruir aquilo que já se revelou inadequado.

Quando a realidade interromper a forma ordinária de funcionamento, a Engenharia Oficial deverá preservar o caminho pelo qual a organização continuará servindo.

Porque a continuidade da UNO não existirá para preservar máquinas, sistemas ou estruturas por si mesmos.

Existirá para preservar a capacidade de pessoas, organizações e comunidades continuarem construindo, com dignidade, responsabilidade, memória e propósito.

---

**Fim do arquivo `020-continuidade-operacional-e-disaster-recovery.md`.**
