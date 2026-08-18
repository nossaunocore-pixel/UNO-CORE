# 024 — Segurança na Operação e Resposta Operacional

## Engenharia Oficial V08 — OPS

---

## Propósito

Este documento estabelece a Engenharia Oficial para concepção, preparação, execução, supervisão, contenção, recuperação, investigação, aprendizagem e evolução da segurança operacional da Plataforma UNO.

Seu propósito é proteger:

- a vida;
- a dignidade;
- as pessoas;
- as organizações;
- as comunidades;
- as missões;
- os serviços;
- os dados;
- as identidades;
- os recursos;
- as ferramentas;
- os agentes;
- as automações;
- as integrações;
- a memória;
- o conhecimento;
- as evidências;
- a continuidade;
- a legitimidade;
- a confiança institucional.

A segurança operacional deverá permitir que a Plataforma UNO:

- reconheça ameaças;
- compreenda riscos;
- reduza vulnerabilidades;
- previna incidentes;
- detecte comportamentos anormais;
- limite autoridade;
- contenha danos;
- preserve evidências;
- mantenha funções essenciais;
- recupere capacidades;
- comunique com responsabilidade;
- repare efeitos;
- aprenda continuamente.

---

## Princípio central

> Segurança não é impedir que a operação aconteça.  
> É permitir que ela aconteça sem abandonar vida, dignidade, legitimidade, responsabilidade e continuidade.

A Plataforma UNO não deverá tratar segurança como camada acrescentada depois da construção.

Leis, normas, riscos, controles e responsabilidades deverão orientar a arquitetura desde sua origem.

---

## Regra fundamental

> Nenhuma missão será considerada bem-sucedida se alcançar seu resultado destruindo as condições que legitimavam sua realização.

Uma operação não será segura apenas porque:

- não ficou indisponível;
- não gerou alerta;
- não perdeu dados;
- não sofreu ataque conhecido;
- encerrou dentro do prazo;
- alcançou a métrica esperada.

A segurança deverá considerar também:

- danos não detectados;
- direitos violados;
- autoridade ultrapassada;
- evidências perdidas;
- confiança manipulada;
- pessoas expostas;
- riscos transferidos;
- dependências fragilizadas;
- continuidade comprometida.

---

## Escopo

Este documento aplica-se à segurança de:

- operações humanas;
- operações técnicas;
- operações automatizadas;
- operações assistidas por inteligência artificial;
- operações multiagentes;
- operações de campo;
- operações administrativas;
- operações financeiras;
- operações comunitárias;
- operações institucionais;
- operações federadas;
- integrações;
- serviços;
- dados;
- infraestrutura;
- ambientes físicos e digitais;
- cadeia de fornecedores;
- continuidade e recuperação.

---

## Relações fundamentais

Este arquivo deverá operar em harmonia com:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`;
- `018-contingencia-recuperacao-e-operacao-degradada.md`;
- `019-backup-restauracao-e-recuperabilidade.md`;
- `020-continuidade-operacional-e-disaster-recovery.md`;
- `021-runbooks-playbooks-e-procedimentos-operacionais.md`;
- `022-automacao-operacional-e-auto-remediacao.md`;
- `023-agentes-operacionais-e-operacao-assistida-por-ia.md`.

---

## Estrutura deste arquivo

Este arquivo será desenvolvido em seis lotes:

1. **Fundamentos, princípios, ativos, ameaças, vulnerabilidades e riscos;**
2. **Identidade, acesso, privilégios, ambientes, infraestrutura, dados e integrações;**
3. **Detecção, observabilidade, eventos, incidentes e resposta operacional;**
4. **Contenção, investigação, evidências, comunicação, recuperação e reparação;**
5. **Segurança física, humana, federada, fornecedores, conformidade e governança;**
6. **Testes, métricas, maturidade, aprendizagem, garantias e modelo integrado.**

---

# Lote 1 — Fundamentos, Princípios, Ativos, Ameaças, Vulnerabilidades e Riscos

## 1. Segurança operacional

Segurança operacional é a capacidade institucional de preservar condições legítimas, confiáveis e sustentáveis de operação diante de:

- erro;
- falha;
- abuso;
- ameaça;
- ataque;
- acidente;
- indisponibilidade;
- manipulação;
- comportamento inesperado;
- condição extraordinária.

---

## 2. Segurança como capacidade institucional

Segurança não deverá depender apenas de ferramentas.

Será produzida pela integração entre:

- pessoas;
- princípios;
- autoridade;
- arquitetura;
- políticas;
- processos;
- tecnologia;
- observabilidade;
- memória;
- aprendizagem;
- responsabilidade.

---

## 3. Segurança como condição da missão

A segurança deverá acompanhar a missão desde:

- necessidade;
- planejamento;
- autorização;
- preparação;
- execução;
- acompanhamento;
- encerramento;
- aprendizagem.

---

## 4. Segurança não é ausência de risco

Nenhuma operação será totalmente livre de risco.

A segurança deverá permitir:

- compreender riscos;
- reduzir exposição;
- limitar impacto;
- aceitar riscos legítimos;
- transferir riscos quando adequado;
- evitar riscos incompatíveis;
- recuperar-se quando necessário.

---

## 5. Segurança e vida

Quando houver risco à vida, a operação deverá priorizar:

- prevenção;
- interrupção;
- contenção;
- socorro;
- comunicação;
- coordenação competente;
- redução de danos.

---

## 6. Segurança e dignidade

Medidas de segurança não deverão:

- humilhar;
- discriminar;
- manipular;
- expor indevidamente;
- eliminar defesa;
- transformar pessoas em suspeitos permanentes;
- utilizar medo como controle.

---

## 7. Segurança e propósito

Todo controle deverá possuir propósito compreensível.

Controles sem finalidade poderão produzir:

- barreiras;
- custos;
- complexidade;
- exclusão;
- falsa sensação de proteção;
- transferência de responsabilidade.

---

## 8. Segurança e verdade

A segurança exige representação verdadeira da operação.

Não deverão ser ocultados:

- incidentes;
- falhas;
- vulnerabilidades;
- acessos indevidos;
- perdas;
- impactos;
- limitações;
- riscos residuais.

---

## 9. Segurança e responsabilidade

Toda capacidade de segurança deverá possuir:

- proprietário;
- autoridade;
- escopo;
- limite;
- supervisão;
- evidência;
- prestação de contas.

---

## 10. Segurança e legitimidade

Uma ação de segurança somente será legítima quando possuir:

- finalidade válida;
- autoridade;
- necessidade;
- proporcionalidade;
- temporalidade;
- rastreabilidade;
- possibilidade de revisão.

---

## 11. Segurança e prudência

Prudência exigirá considerar:

- contexto;
- incerteza;
- impacto;
- urgência;
- reversibilidade;
- alternativas;
- consequências;
- pessoas afetadas.

---

## 12. Segurança e justiça

Controles deverão ser aplicados com coerência, sem produzir tratamento desigual injustificado.

---

## 13. Segurança e proporcionalidade

A intensidade do controle deverá ser proporcional a:

- ameaça;
- vulnerabilidade;
- impacto;
- probabilidade;
- criticidade;
- contexto;
- direitos afetados.

---

## 14. Segurança e continuidade

A proteção não deverá destruir a capacidade de prestar funções essenciais.

A continuidade também não deverá justificar operação insegura.

---

## 15. Segurança e disponibilidade

Alta disponibilidade não significará segurança.

Um serviço poderá permanecer disponível enquanto:

- dados são expostos;
- autoridade é abusada;
- registros são alterados;
- pessoas são prejudicadas;
- agentes são manipulados.

---

## 16. Segurança e confiabilidade

A confiabilidade exige que a operação se comporte conforme esperado, inclusive diante de falha, pressão ou ataque.

---

## 17. Segurança e privacidade

Segurança deverá proteger informações sem utilizar coleta ilimitada como solução genérica.

---

## 18. Segurança e transparência

A transparência deverá permitir compreender:

- controles;
- responsabilidades;
- incidentes;
- riscos;
- formas de contestação.

Não deverá expor detalhes que facilitem ataque ou violem direitos.

---

## 19. Segurança e autonomia

A autonomia deverá existir dentro de:

- autoridade;
- políticas;
- limites;
- observabilidade;
- possibilidade de intervenção;
- prestação de contas.

---

## 20. Segurança por concepção

A segurança deverá integrar:

- requisitos;
- arquitetura;
- código;
- dados;
- infraestrutura;
- interfaces;
- operação;
- fornecedores;
- ciclo de vida.

---

## 21. Segurança por padrão

Configurações iniciais deverão adotar condição segura sem depender de ação adicional do usuário.

---

## 22. Segurança em profundidade

A Plataforma UNO deverá utilizar múltiplas camadas de proteção.

A falha de um controle não deverá expor automaticamente toda a operação.

---

## 23. Segurança verificável

Controles deverão produzir evidências de que:

- existem;
- estão ativos;
- foram aplicados;
- continuam eficazes;
- falharam quando aplicável.

---

## 24. Segurança adaptativa

Controles poderão ser ajustados conforme:

- contexto;
- risco;
- comportamento;
- ambiente;
- ameaça;
- criticidade;
- confiança.

A adaptação deverá permanecer governada.

---

## 25. Segurança contínua

A segurança deverá ser observada continuamente porque:

- contextos mudam;
- ameaças evoluem;
- vulnerabilidades surgem;
- configurações derivam;
- pessoas mudam;
- fornecedores atualizam serviços;
- dependências falham.

---

## 26. Segurança compartilhada

Responsabilidades poderão ser distribuídas entre:

- Plataforma UNO;
- NÓS S.A.;
- organizações;
- parceiros;
- fornecedores;
- operadores;
- usuários;
- agentes.

A distribuição deverá ser explícita.

---

## 27. Responsabilidade não transferível

A contratação de fornecedor não eliminará a responsabilidade da organização que utiliza sua capacidade.

---

## 28. Cultura de segurança

A cultura deverá estimular:

- comunicação;
- prudência;
- denúncia;
- correção;
- aprendizagem;
- cooperação;
- responsabilidade;
- interrupção diante de risco.

---

## 29. Cultura não punitiva

Pessoas deverão poder comunicar erros e riscos sem medo de punição automática.

Isso não eliminará responsabilização por fraude, dolo ou negligência grave.

---

## 30. Segurança e confiança

A confiança deverá resultar de:

- competência;
- coerência;
- evidência;
- transparência;
- reparação;
- continuidade;
- respeito.

---

## 31. Confiança não é controle

Confiar em pessoa, organização ou agente não deverá eliminar:

- autenticação;
- limitação;
- monitoramento;
- validação;
- revisão.

---

## 32. Confiança zero por padrão

A expressão confiança zero deverá significar que acesso e ação precisam ser continuamente justificados.

Não deverá significar tratar todas as pessoas como inimigas.

---

## 33. Ativo operacional

Ativo é tudo aquilo que possui valor para a missão e precisa ser protegido.

Poderá ser:

- humano;
- físico;
- digital;
- informacional;
- financeiro;
- cognitivo;
- institucional;
- comunitário;
- reputacional;
- ambiental.

---

## 34. Pessoas como sujeitos protegidos

Pessoas não deverão ser tratadas apenas como ativos.

Elas são sujeitos de:

- dignidade;
- direitos;
- autonomia;
- proteção;
- participação;
- contestação;
- reparação.

---

## 35. Ativos humanos

Incluem:

- saúde;
- segurança;
- conhecimento;
- competência;
- atenção;
- tempo;
- confiança;
- continuidade das equipes;
- capacidade de decisão.

---

## 36. Ativos físicos

Incluem:

- instalações;
- equipamentos;
- dispositivos;
- veículos;
- ferramentas;
- redes;
- energia;
- materiais;
- documentos físicos.

---

## 37. Ativos digitais

Incluem:

- sistemas;
- aplicações;
- serviços;
- contas;
- identidades;
- certificados;
- configurações;
- código;
- modelos;
- automações;
- agentes.

---

## 38. Ativos informacionais

Incluem:

- dados;
- documentos;
- registros;
- conhecimento;
- memória;
- evidências;
- decisões;
- procedimentos;
- segredos;
- propriedade intelectual.

---

## 39. Ativos institucionais

Incluem:

- legitimidade;
- autoridade;
- missão;
- governança;
- confiança pública;
- contratos;
- relações;
- capacidade de coordenação;
- memória organizacional.

---

## 40. Ativos comunitários

Incluem:

- vínculos;
- redes de apoio;
- recursos compartilhados;
- espaços;
- conhecimento local;
- participação;
- confiança;
- continuidade social.

---

## 41. Ativos financeiros

Incluem:

- recursos;
- créditos;
- pagamentos;
- reservas;
- carteiras;
- contribuições;
- rateios;
- registros contábeis;
- instrumentos de pagamento.

---

## 42. Ativos de identidade

Incluem:

- identidade pessoal;
- identidade organizacional;
- identidade de agente;
- papel;
- autoridade;
- credencial;
- reputação;
- vínculo institucional.

---

## 43. Ativos cognitivos

Incluem:

- modelos;
- instruções;
- políticas;
- ontologias;
- memória;
- conhecimento;
- critérios;
- aprendizagem;
- capacidade humana.

---

## 44. Ativos de evidência

Incluem registros capazes de demonstrar:

- ação;
- decisão;
- autorização;
- estado;
- resultado;
- responsabilidade;
- incidente;
- correção.

---

## 45. Ativos de continuidade

Incluem:

- backups;
- planos;
- procedimentos;
- ambientes alternativos;
- equipes;
- contatos;
- fornecedores substitutos;
- conhecimento de recuperação.

---

## 46. Inventário de ativos

A Plataforma UNO deverá manter inventário proporcional à criticidade.

O inventário deverá indicar:

- identidade;
- proprietário;
- localização;
- finalidade;
- classificação;
- dependências;
- estado;
- controles;
- ciclo de vida.

---

## 47. Proprietário do ativo

Todo ativo relevante deverá possuir proprietário responsável por:

- classificação;
- uso;
- proteção;
- revisão;
- continuidade;
- destinação.

---

## 48. Custodiante

O custodiante preserva o ativo em nome do proprietário.

Custódia não significa propriedade nem autoridade irrestrita.

---

## 49. Usuário do ativo

O usuário deverá conhecer:

- finalidade;
- condições;
- limites;
- responsabilidades;
- forma de comunicação de incidentes.

---

## 50. Classificação do ativo

Ativos deverão ser classificados segundo:

- criticidade;
- sensibilidade;
- impacto;
- disponibilidade;
- integridade;
- confidencialidade;
- obrigações;
- possibilidade de substituição.

---

## 51. Criticidade

Criticidade representa o impacto da perda, alteração, exposição ou indisponibilidade do ativo.

---

## 52. Sensibilidade

Sensibilidade representa o cuidado necessário para evitar acesso, uso ou divulgação indevidos.

---

## 53. Valor não financeiro

O valor de um ativo não deverá ser medido apenas por custo de reposição.

Deverão ser considerados:

- impacto humano;
- memória;
- confiança;
- legitimidade;
- continuidade;
- valor público;
- irreversibilidade.

---

## 54. Ciclo de vida do ativo

A proteção deverá acompanhar:

- criação;
- aquisição;
- classificação;
- uso;
- compartilhamento;
- armazenamento;
- manutenção;
- transferência;
- arquivamento;
- eliminação.

---

## 55. Ameaça

Ameaça é qualquer condição, agente ou evento capaz de explorar vulnerabilidade e produzir impacto.

---

## 56. Fonte de ameaça

A fonte poderá ser:

- pessoa;
- organização;
- agente artificial;
- fornecedor;
- falha técnica;
- acidente;
- condição ambiental;
- processo;
- configuração;
- evento natural;
- ação coordenada.

---

## 57. Ameaça intencional

A ameaça intencional poderá buscar:

- fraude;
- sabotagem;
- extorsão;
- espionagem;
- manipulação;
- exposição;
- interrupção;
- abuso;
- destruição;
- deslegitimação.

---

## 58. Ameaça não intencional

Poderá resultar de:

- erro;
- desconhecimento;
- distração;
- fadiga;
- configuração incorreta;
- procedimento inadequado;
- comunicação falha;
- dependência não compreendida.

---

## 59. Ameaça interna

Origina-se dentro de domínio autorizado.

Poderá envolver:

- abuso de privilégio;
- fraude;
- negligência;
- erro;
- coerção;
- credencial comprometida;
- conflito de interesse.

---

## 60. Ameaça externa

Origina-se fora do domínio operacional e poderá explorar:

- interfaces;
- fornecedores;
- identidades;
- rede;
- pessoas;
- integrações;
- cadeia de suprimentos.

---

## 61. Ameaça híbrida

Poderá combinar elementos internos e externos, humanos e digitais, físicos e informacionais.

---

## 62. Ameaça persistente

A ameaça poderá permanecer por longo período, adaptando comportamento para evitar detecção.

---

## 63. Ameaça oportunista

Explora condição disponível sem possuir alvo inicial específico.

Configurações inseguras ampliam esse risco.

---

## 64. Ameaça direcionada

É planejada para atingir:

- pessoa;
- organização;
- missão;
- comunidade;
- ativo;
- função crítica.

---

## 65. Ameaça automatizada

Poderá operar em grande escala por:

- scripts;
- bots;
- agentes;
- automações;
- ferramentas de exploração;
- geração artificial de conteúdo.

---

## 66. Ameaça cognitiva

Busca alterar compreensão, decisão ou comportamento.

Poderá utilizar:

- desinformação;
- falsificação;
- manipulação emocional;
- personificação;
- saturação;
- instruções maliciosas;
- consenso artificial.

---

## 67. Engenharia social

Explora confiança, medo, urgência, autoridade ou curiosidade para induzir comportamento.

A proteção deverá incluir tecnologia, treinamento e cultura.

---

## 68. Desinformação operacional

Informação falsa ou manipulada poderá causar:

- decisão incorreta;
- mobilização indevida;
- pânico;
- conflito;
- desperdício;
- perda de legitimidade;
- ação insegura.

---

## 69. Falsificação de identidade

A ameaça poderá personificar:

- usuário;
- operador;
- diretor;
- organização;
- agente;
- serviço;
- fornecedor;
- autoridade pública.

---

## 70. Fraude operacional

Fraude é utilização intencional de engano para obter vantagem, recurso, acesso ou resultado indevido.

---

## 71. Sabotagem

Sabotagem busca prejudicar:

- disponibilidade;
- integridade;
- continuidade;
- segurança;
- confiança;
- missão.

---

## 72. Extorsão

Poderá envolver:

- bloqueio;
- ameaça de exposição;
- sequestro de dados;
- interrupção;
- coerção de pessoas;
- manipulação de recursos.

---

## 73. Espionagem

Busca obter informações sem autorização para:

- vantagem;
- influência;
- fraude;
- concorrência;
- ataque;
- controle.

---

## 74. Ameaça física

Inclui:

- invasão;
- furto;
- vandalismo;
- incêndio;
- acidente;
- falha elétrica;
- água;
- calor;
- violência;
- desastre natural.

---

## 75. Ameaça à cadeia de fornecimento

Poderá entrar por:

- software;
- hardware;
- atualização;
- prestador;
- fornecedor;
- modelo;
- biblioteca;
- serviço;
- credencial;
- integração.

---

## 76. Ameaça a modelos de inteligência artificial

Poderá buscar:

- manipular entrada;
- alterar instruções;
- contaminar memória;
- extrair dados;
- abusar de ferramentas;
- produzir respostas inseguras;
- causar falsa execução.

---

## 77. Ameaça multiagente

Um agente comprometido poderá:

- propagar erro;
- falsificar consenso;
- ampliar autoridade;
- contaminar memória;
- delegar ação maliciosa;
- enganar verificadores.

---

## 78. Ameaça federada

Uma organização participante poderá ser:

- comprometida;
- maliciosa;
- inadequadamente governada;
- induzida ao erro;
- incapaz de proteger dados;
- incompatível com políticas comuns.

---

## 79. Ameaça ambiental

Condições externas poderão comprometer:

- energia;
- conectividade;
- acesso;
- instalações;
- equipamentos;
- pessoas;
- transporte;
- fornecedores.

---

## 80. Inteligência de ameaças

A Plataforma UNO deverá reunir conhecimento sobre:

- fontes;
- comportamentos;
- indicadores;
- vulnerabilidades;
- técnicas;
- impactos;
- controles;
- tendências.

---

## 81. Proveniência da inteligência

Informações sobre ameaças deverão possuir:

- origem;
- data;
- confiança;
- escopo;
- validade;
- restrições de compartilhamento;
- responsável.

---

## 82. Compartilhamento de ameaças

Organizações poderão compartilhar sinais para fortalecer defesa coletiva, preservando:

- privacidade;
- segredo legítimo;
- finalidade;
- segurança;
- verificação;
- responsabilidade.

---

## 83. Cenário de ameaça

O cenário deverá relacionar:

- fonte;
- motivação;
- capacidade;
- alvo;
- vulnerabilidade;
- caminho;
- impacto;
- controle;
- resposta.

---

## 84. Vulnerabilidade

Vulnerabilidade é fragilidade que poderá ser explorada ou contribuir para dano.

---

## 85. Vulnerabilidade técnica

Poderá existir em:

- código;
- configuração;
- protocolo;
- aplicação;
- infraestrutura;
- dispositivo;
- integração;
- modelo;
- biblioteca.

---

## 86. Vulnerabilidade humana

Poderá decorrer de:

- falta de informação;
- fadiga;
- pressão;
- medo;
- excesso de confiança;
- acesso inadequado;
- treinamento insuficiente;
- conflito de interesse.

A pessoa não deverá ser tratada como culpada automática pela fragilidade do sistema.

---

## 87. Vulnerabilidade processual

Poderá resultar de:

- ausência de procedimento;
- autorização inadequada;
- segregação insuficiente;
- comunicação falha;
- revisão inexistente;
- contingência não testada.

---

## 88. Vulnerabilidade organizacional

Poderá decorrer de:

- papéis indefinidos;
- governança fraca;
- dependência;
- cultura punitiva;
- recursos insuficientes;
- incentivos inadequados;
- falta de continuidade.

---

## 89. Vulnerabilidade física

Poderá existir em:

- acesso;
- instalação;
- energia;
- climatização;
- proteção contra incêndio;
- armazenamento;
- descarte;
- equipamentos.

---

## 90. Vulnerabilidade cognitiva

Poderá envolver:

- interpretação;
- memória;
- instrução;
- viés;
- excesso de informação;
- falsa confiança;
- incapacidade de reconhecer manipulação.

---

## 91. Vulnerabilidade de identidade

Poderá resultar de:

- autenticação fraca;
- credencial compartilhada;
- privilégio excessivo;
- identidade duplicada;
- revogação falha;
- recuperação insegura.

---

## 92. Vulnerabilidade de dados

Poderá decorrer de:

- acesso excessivo;
- armazenamento inseguro;
- exposição;
- falta de classificação;
- retenção indevida;
- ausência de criptografia;
- compartilhamento inadequado.

---

## 93. Vulnerabilidade de integração

Poderá existir em:

- API;
- evento;
- fila;
- webhook;
- contrato;
- autenticação;
- validação;
- tratamento de erro;
- dependência.

---

## 94. Vulnerabilidade de agente

Poderá surgir de:

- instrução fraca;
- ferramenta excessiva;
- memória contaminável;
- autoridade ampla;
- falta de supervisão;
- ausência de verificação;
- manipulação de contexto.

---

## 95. Vulnerabilidade conhecida

Deverá possuir tratamento de:

- identificação;
- classificação;
- correção;
- mitigação;
- aceitação;
- prazo;
- responsável;
- evidência.

---

## 96. Vulnerabilidade desconhecida

A arquitetura deverá presumir que fragilidades ainda não identificadas existem.

Por isso deverá aplicar:

- isolamento;
- privilégio mínimo;
- observabilidade;
- contenção;
- recuperação;
- defesa em profundidade.

---

## 97. Exposição

Exposição representa o grau em que um ativo está acessível ou sujeito a uma ameaça.

---

## 98. Superfície de ataque

A superfície de ataque inclui todos os pontos pelos quais a operação poderá ser influenciada ou acessada.

---

## 99. Superfície humana

Inclui:

- comunicação;
- suporte;
- recuperação de conta;
- atendimento;
- redes sociais;
- relacionamento com fornecedores;
- trabalho em campo.

---

## 100. Superfície física

Inclui:

- portas;
- instalações;
- dispositivos;
- cabos;
- equipamentos;
- documentos;
- armazenamento;
- descarte.

---

## 101. Superfície digital

Inclui:

- aplicações;
- APIs;
- painéis;
- dispositivos;
- rede;
- bancos;
- serviços;
- repositórios;
- ambientes de desenvolvimento.

---

## 102. Superfície cognitiva

Inclui:

- instruções;
- conteúdos;
- modelos;
- memória;
- conhecimento;
- decisões;
- interfaces conversacionais;
- mensagens entre agentes.

---

## 103. Redução de superfície

A Plataforma UNO deverá remover ou restringir:

- serviços desnecessários;
- acessos antigos;
- contas órfãs;
- integrações não utilizadas;
- ferramentas excessivas;
- dados redundantes;
- permissões amplas;
- interfaces abandonadas.

---

## 104. Risco

Risco é a possibilidade de uma condição produzir impacto sobre objetivos, pessoas, ativos ou missão.

---

## 105. Componentes do risco

A análise deverá considerar:

- ameaça;
- vulnerabilidade;
- exposição;
- probabilidade;
- impacto;
- velocidade;
- duração;
- capacidade de detecção;
- capacidade de recuperação.

---

## 106. Risco inerente

É o risco existente antes da aplicação dos controles.

---

## 107. Risco residual

É o risco que permanece após os controles.

---

## 108. Risco aceito

O risco somente deverá ser aceito por autoridade compatível com:

- impacto;
- alcance;
- direitos envolvidos;
- responsabilidade;
- duração.

---

## 109. Aceitação temporária

A aceitação poderá possuir:

- prazo;
- condição;
- compensação;
- monitoramento;
- responsável;
- revisão;
- plano de correção.

---

## 110. Risco transferido

A transferência por contrato ou seguro não eliminará impacto sobre pessoas nem responsabilidade institucional aplicável.

---

## 111. Risco evitado

Uma atividade poderá ser cancelada ou redesenhada quando o risco for incompatível com o propósito.

---

## 112. Risco mitigado

Controles deverão reduzir:

- probabilidade;
- exposição;
- impacto;
- duração;
- tempo de detecção;
- tempo de recuperação.

---

## 113. Risco compartilhado

Em operações federadas, cada participante deverá compreender sua parcela de risco e responsabilidade.

---

## 114. Risco humano

Deverá considerar efeitos sobre:

- vida;
- saúde;
- dignidade;
- liberdade;
- renda;
- trabalho;
- reputação;
- acesso;
- confiança.

---

## 115. Risco institucional

Poderá afetar:

- legitimidade;
- governança;
- missão;
- contratos;
- confiança;
- continuidade;
- responsabilidade pública.

---

## 116. Risco operacional

Poderá comprometer:

- execução;
- qualidade;
- capacidade;
- disponibilidade;
- coordenação;
- resultados;
- aprendizagem.

---

## 117. Risco tecnológico

Poderá decorrer de:

- falha;
- obsolescência;
- incompatibilidade;
- dependência;
- atualização;
- vulnerabilidade;
- complexidade.

---

## 118. Risco de dados

Inclui:

- perda;
- alteração;
- exposição;
- indisponibilidade;
- uso incompatível;
- baixa qualidade;
- ausência de proveniência.

---

## 119. Risco financeiro

Inclui:

- fraude;
- desvio;
- duplicidade;
- indisponibilidade;
- erro de rateio;
- cobrança indevida;
- perda;
- manipulação.

---

## 120. Risco reputacional

A reputação poderá ser afetada por:

- incidente;
- ocultação;
- resposta inadequada;
- desinformação;
- abuso;
- comunicação contraditória;
- ausência de reparação.

---

## 121. Risco jurídico e regulatório

Poderá surgir de:

- descumprimento;
- interpretação inadequada;
- atividade não autorizada;
- contrato inválido;
- tratamento ilegítimo;
- ausência de evidência;
- responsabilidade não atendida.

---

## 122. Risco sistêmico

Um componente poderá causar impacto amplo por:

- centralidade;
- dependências;
- escala;
- integração;
- autoridade;
- propagação;
- memória compartilhada.

---

## 123. Risco emergente

Surge de:

- nova tecnologia;
- mudança social;
- expansão;
- integração;
- comportamento coletivo;
- nova ameaça;
- alteração legal;
- mudança de propósito.

---

## 124. Risco desconhecido

A existência de incerteza deverá gerar prudência, não falsa certeza.

---

## 125. Apetite de risco

O apetite de risco define a quantidade e o tipo de risco que a organização admite para alcançar seu propósito.

Não deverá permitir violação deliberada de:

- vida;
- dignidade;
- lei;
- direitos;
- princípios permanentes.

---

## 126. Tolerância ao risco

A tolerância deverá estabelecer limites mensuráveis ou observáveis para determinadas exposições.

---

## 127. Limite de risco

Ao ultrapassar o limite, a operação deverá:

- alertar;
- reduzir escopo;
- exigir autorização;
- suspender;
- conter;
- ativar contingência;
- escalar.

---

## 128. Matriz de risco

A matriz poderá relacionar probabilidade e impacto, mas não deverá substituir compreensão contextual.

Eventos raros de impacto catastrófico continuarão relevantes.

---

## 129. Velocidade do risco

A análise deverá considerar quanto tempo existe entre:

- início;
- detecção;
- impacto;
- possibilidade de contenção;
- irreversibilidade.

---

## 130. Persistência do impacto

Impactos poderão ser:

- momentâneos;
- temporários;
- prolongados;
- permanentes;
- intergeracionais.

---

## 131. Propagação do risco

O risco poderá atravessar:

- dependências;
- organizações;
- agentes;
- dados;
- ferramentas;
- territórios;
- comunidades;
- fornecedores.

---

## 132. Concentração de risco

A Plataforma UNO deverá identificar concentração em:

- fornecedor;
- região;
- identidade;
- conta;
- ferramenta;
- modelo;
- operador;
- infraestrutura;
- autoridade.

---

## 133. Correlação de riscos

Riscos aparentemente independentes poderão ocorrer simultaneamente por dependência comum.

---

## 134. Risco em cascata

Uma falha poderá causar outra sucessivamente.

O mapa de dependências deverá apoiar a identificação das cascatas.

---

## 135. Risco de segurança física

Deverá considerar:

- pessoas;
- instalações;
- energia;
- equipamentos;
- materiais;
- acesso;
- incêndio;
- acidente;
- violência;
- ambiente.

---

## 136. Risco cibernético

Deverá considerar:

- identidade;
- rede;
- aplicação;
- dados;
- infraestrutura;
- dispositivos;
- fornecedores;
- agentes;
- integrações.

---

## 137. Risco cognitivo

Deverá considerar efeitos sobre:

- percepção;
- compreensão;
- decisão;
- memória;
- confiança;
- comportamento;
- legitimidade.

---

## 138. Risco de inteligência artificial

Poderá incluir:

- alucinação;
- falsa execução;
- viés;
- manipulação;
- deriva;
- autoridade excessiva;
- vazamento;
- dependência;
- comportamento emergente;
- perda de supervisão.

---

## 139. Risco multiagente

Poderá surgir de:

- delegação;
- propagação;
- consenso falso;
- conflito;
- diluição de responsabilidade;
- memória contaminada;
- confiança transitiva.

---

## 140. Risco federado

Poderá decorrer de:

- políticas incompatíveis;
- identidade externa;
- transferência de dados;
- falha de parceiro;
- jurisdição;
- contrato;
- desconexão;
- dependência.

---

## 141. Avaliação de risco

A avaliação deverá identificar:

- ativo;
- ameaça;
- vulnerabilidade;
- exposição;
- cenário;
- impacto;
- probabilidade;
- controles;
- risco residual;
- proprietário;
- tratamento.

---

## 142. Avaliação qualitativa

Poderá utilizar categorias como:

- mínimo;
- baixo;
- moderado;
- alto;
- crítico.

As categorias deverão possuir significado institucional definido.

---

## 143. Avaliação quantitativa

Quando possível, poderá estimar:

- frequência;
- perda;
- duração;
- pessoas afetadas;
- custo;
- tempo de recuperação;
- indisponibilidade.

Números não deverão ocultar incerteza.

---

## 144. Avaliação participativa

Pessoas e comunidades afetadas poderão contribuir para identificar impactos que a análise técnica não percebe.

---

## 145. Avaliação independente

Riscos elevados poderão exigir revisão por estrutura diferente daquela responsável pela implantação.

---

## 146. Registro de risco

O registro deverá conter:

- identificador;
- descrição;
- proprietário;
- ativos;
- cenário;
- classificação;
- controles;
- ações;
- prazo;
- risco residual;
- última revisão;
- evidências.

---

## 147. Proprietário do risco

O proprietário deverá possuir autoridade e recursos para:

- tratar;
- aceitar;
- escalar;
- acompanhar;
- comunicar;
- revisar.

---

## 148. Tratamento do risco

O tratamento poderá:

- evitar;
- reduzir;
- conter;
- compartilhar;
- transferir;
- aceitar;
- preparar recuperação;
- eliminar a atividade.

---

## 149. Plano de tratamento

O plano deverá definir:

- controle;
- responsável;
- prazo;
- recurso;
- dependência;
- critério de conclusão;
- evidência;
- risco residual esperado.

---

## 150. Controle de segurança

Controle é medida destinada a modificar risco.

Poderá ser:

- preventivo;
- detectivo;
- corretivo;
- dissuasório;
- compensatório;
- recuperativo;
- diretivo.

---

## 151. Controle preventivo

Busca impedir que o evento ocorra.

Exemplos:

- autenticação;
- limitação;
- validação;
- segregação;
- treinamento;
- configuração segura.

---

## 152. Controle detectivo

Busca reconhecer:

- evento;
- desvio;
- ataque;
- falha;
- abuso;
- comportamento inesperado.

---

## 153. Controle corretivo

Busca corrigir condição depois de sua identificação.

---

## 154. Controle de contenção

Busca impedir expansão do impacto.

---

## 155. Controle recuperativo

Busca restaurar capacidade, integridade e continuidade.

---

## 156. Controle compensatório

É utilizado quando controle principal não puder ser implementado imediatamente.

Deverá possuir justificativa, prazo e revisão.

---

## 157. Controle humano

Poderá incluir:

- supervisão;
- aprovação;
- treinamento;
- inspeção;
- revisão;
- segregação;
- comunicação.

---

## 158. Controle técnico

Poderá incluir:

- autenticação;
- autorização;
- criptografia;
- isolamento;
- monitoramento;
- bloqueio;
- backup;
- validação.

---

## 159. Controle físico

Poderá incluir:

- barreira;
- fechadura;
- vigilância;
- detecção;
- proteção ambiental;
- sinalização;
- intertravamento;
- parada segura.

---

## 160. Controle institucional

Poderá incluir:

- política;
- contrato;
- governança;
- autoridade;
- auditoria;
- responsabilização;
- prestação de contas.

---

## 161. Controle proporcional

O controle não deverá produzir dano superior ao risco que pretende tratar.

---

## 162. Controle verificável

Deverá existir evidência de:

- implantação;
- configuração;
- funcionamento;
- teste;
- falha;
- correção;
- revisão.

---

## 163. Controle independente

Controles críticos deverão possuir independência suficiente do componente que protegem.

---

## 164. Controle em camadas

A proteção deverá combinar medidas capazes de:

- prevenir;
- detectar;
- limitar;
- responder;
- recuperar;
- aprender.

---

## 165. Falha do controle

A falha deverá produzir:

- detecção;
- redução de confiança;
- contenção;
- escalonamento;
- correção;
- evidência;
- aprendizagem.

---

## 166. Controle órfão

Nenhum controle relevante deverá existir sem proprietário responsável por sua manutenção.

---

## 167. Controle obsoleto

Controles deverão ser revisados quando:

- ameaça mudar;
- arquitetura mudar;
- fornecedor mudar;
- contexto mudar;
- obrigação mudar;
- eficácia diminuir.

---

## 168. Exceção de segurança

Uma exceção deverá possuir:

- justificativa;
- autoridade;
- escopo;
- prazo;
- risco;
- controle compensatório;
- monitoramento;
- encerramento.

---

## 169. Exceção não é regra

Exceções repetidas deverão gerar revisão da arquitetura ou da política.

---

## 170. Desvio de segurança

Desvio é diferença entre condição exigida e condição observada.

Deverá ser:

- detectado;
- classificado;
- registrado;
- corrigido;
- aceito temporariamente quando legítimo;
- acompanhado.

---

## 171. Dívida de segurança

Fragilidades adiadas formam dívida que aumenta:

- exposição;
- complexidade;
- custo;
- risco;
- dificuldade de recuperação.

---

## 172. Priorização de segurança

A priorização deverá considerar:

- vida;
- direitos;
- criticidade;
- exploração;
- exposição;
- impacto;
- dependências;
- capacidade de contenção;
- obrigações.

---

## 173. Segurança mínima obrigatória

Toda capacidade operacional deverá possuir, no mínimo:

- identidade;
- proprietário;
- classificação;
- autoridade;
- acesso limitado;
- registros;
- monitoramento proporcional;
- tratamento de falhas;
- possibilidade de interrupção;
- revisão.

---

## 174. Segurança de capacidade crítica

Capacidades críticas deverão possuir:

- defesa em profundidade;
- segregação;
- redundância;
- observabilidade contínua;
- resposta preparada;
- continuidade testada;
- auditoria;
- recuperação verificável.

---

## 175. Invariante de vida

Nenhuma decisão de segurança deverá sacrificar deliberadamente vida humana para preservar métrica, ativo ou reputação.

---

## 176. Invariante de dignidade

A proteção não deverá transformar pessoas em objetos de vigilância, controle ou suspeita permanente.

---

## 177. Invariante de identidade

Toda ação de segurança deverá permanecer vinculada a identidade reconhecível.

---

## 178. Invariante de autoridade

Nenhum controle ou respondente deverá ultrapassar autoridade legítima, salvo condição emergencial formalmente prevista e posteriormente revisada.

---

## 179. Invariante de proporcionalidade

A intensidade da resposta deverá corresponder à ameaça, ao risco e ao impacto real.

---

## 180. Invariante de verdade

Incidentes, vulnerabilidades, impactos e limitações não deverão ser ocultados para preservar aparência de normalidade.

---

## 181. Invariante de evidência

A segurança deverá produzir evidências suficientes para verificar controles, decisões, ações e resultados.

---

## 182. Invariante de continuidade

Conter uma ameaça não deverá destruir desnecessariamente funções essenciais, memória ou capacidade de recuperação.

---

## 183. Invariante de privacidade

Monitoramento e investigação deverão observar finalidade, necessidade, proporcionalidade, autoridade e temporalidade.

---

## 184. Invariante de responsabilidade

Toda aceitação de risco, exceção, controle e resposta deverá possuir proprietário responsável.

---

## 185. Invariante de aprendizagem

Falhas e incidentes deverão fortalecer a arquitetura sem apagar responsabilidades ou evidências.

---

## 186. Resultado do primeiro lote

Com este lote, a Engenharia Oficial estabelece que a segurança operacional deverá:

- proteger pessoas e missões;
- integrar-se à arquitetura desde a origem;
- reconhecer ativos;
- compreender ameaças;
- localizar vulnerabilidades;
- avaliar exposição;
- governar riscos;
- aplicar controles proporcionais;
- preservar evidências;
- sustentar continuidade;
- responder com legitimidade;
- aprender continuamente.

O próximo lote aprofundará:

- identidade;
- autenticação;
- autorização;
- papéis;
- privilégios;
- credenciais;
- ambientes;
- dispositivos;
- infraestrutura;
- aplicações;
- dados;
- integrações;
- cadeia técnica de proteção.

---

# Lote 2 — Identidade, Acesso, Privilégios, Ambientes, Infraestrutura, Dados e Integrações

## 187. Identidade operacional

Identidade operacional é a representação persistente e verificável de uma entidade participante da operação.

Poderá representar:

- pessoa;
- organização;
- agente;
- serviço;
- automação;
- dispositivo;
- aplicação;
- fornecedor;
- missão;
- ambiente.

---

## 188. Identidade antes do acesso

Nenhum acesso relevante deverá ser concedido antes de a entidade ser identificada e autenticada de forma compatível com o risco.

---

## 189. Identidade não é credencial

A identidade representa quem ou o que participa.

A credencial é um meio utilizado para demonstrar essa identidade.

Uma mesma identidade poderá possuir credenciais diferentes durante seu ciclo de vida.

---

## 190. Identidade humana

A identidade humana deverá permitir reconhecer:

- pessoa;
- vínculo;
- papel;
- organização;
- estado;
- autoridade;
- credenciais;
- responsabilidades;
- temporalidade.

---

## 191. Identidade organizacional

A organização deverá possuir identidade verificável que represente:

- nome;
- natureza;
- registro;
- domínio;
- representantes;
- contratos;
- capacidades;
- autoridade;
- situação operacional.

---

## 192. Identidade de agente

Todo agente deverá possuir identidade vinculada a:

- proprietário;
- organização;
- missão;
- versão;
- modelo;
- ferramentas;
- ambiente;
- autoridade;
- histórico;
- estado operacional.

---

## 193. Identidade de serviço

Serviços e automações deverão utilizar identidades próprias.

Não deverão operar permanentemente com credenciais pessoais compartilhadas.

---

## 194. Identidade de dispositivo

Dispositivos deverão ser reconhecidos por:

- identificador;
- proprietário;
- tipo;
- configuração;
- localização quando aplicável;
- estado;
- integridade;
- credenciais;
- ciclo de vida.

---

## 195. Identidade de missão

Missões relevantes deverão possuir identidade que permita correlacionar:

- participantes;
- acessos;
- decisões;
- ferramentas;
- recursos;
- ações;
- evidências;
- resultados.

---

## 196. Identidade federada

A identidade federada deverá permitir reconhecimento entre domínios autônomos sem eliminar:

- autoridade local;
- responsabilidade;
- política própria;
- possibilidade de revogação;
- fronteira organizacional.

---

## 197. Fonte de identidade

Toda identidade deverá possuir origem confiável e responsável por:

- emissão;
- validação;
- atualização;
- suspensão;
- revogação;
- encerramento.

---

## 198. Prova de identidade

A força da prova deverá ser proporcional ao risco.

Poderá utilizar:

- documento;
- vínculo institucional;
- biometria;
- certificado;
- autenticação governamental;
- confirmação presencial;
- verificação por organização responsável;
- combinação de evidências.

---

## 199. Identidade declarada

Identidade informada pelo próprio participante poderá ser suficiente para interações de baixo risco.

Não deverá conceder acesso a dados, recursos ou decisões relevantes sem verificação adicional.

---

## 200. Identidade verificada

A identidade será verificada quando houver evidência adequada de correspondência entre a entidade real e sua representação digital ou institucional.

---

## 201. Nível de garantia de identidade

A Plataforma UNO deverá classificar o nível de confiança na identidade segundo:

- método de verificação;
- qualidade das fontes;
- risco de falsificação;
- atualidade;
- vínculo;
- contexto;
- impacto permitido.

---

## 202. Identidade persistente

A identidade deverá atravessar mudanças de:

- dispositivo;
- credencial;
- papel;
- organização;
- interface;
- versão;
- fornecedor;

sem perder histórico necessário.

---

## 203. Identidade temporária

Identidades temporárias poderão ser utilizadas para:

- visitante;
- evento;
- missão;
- contingência;
- prestador;
- teste;
- integração temporária.

Deverão possuir prazo e escopo definidos.

---

## 204. Identidade anônima

Interações anônimas poderão ser permitidas quando a finalidade não exigir identificação.

O anonimato não deverá conceder autoridade incompatível com o risco.

---

## 205. Identidade pseudonimizada

Pseudônimos poderão proteger pessoas em determinados contextos, preservando mecanismos governados de responsabilização quando necessário.

---

## 206. Unicidade contextual

Uma identidade deverá ser única dentro do domínio necessário.

A mesma pessoa poderá possuir papéis distintos sem que esses papéis sejam confundidos.

---

## 207. Identidade duplicada

Duplicidades poderão causar:

- fraude;
- conflito de histórico;
- acesso indevido;
- rateio incorreto;
- perda de continuidade;
- responsabilidades ambíguas.

Deverão possuir processo de detecção e reconciliação.

---

## 208. Fusão de identidades

A fusão deverá preservar:

- registros anteriores;
- evidências;
- divergências;
- permissões;
- responsabilidades;
- motivo;
- responsável;
- possibilidade de revisão.

---

## 209. Separação de identidades

Quando identidades tiverem sido associadas incorretamente, a separação deverá restaurar:

- dados;
- acessos;
- histórico;
- responsabilidades;
- privacidade.

---

## 210. Ciclo de vida da identidade

Deverá incluir:

- solicitação;
- verificação;
- criação;
- ativação;
- atualização;
- revisão;
- suspensão;
- recuperação;
- revogação;
- arquivamento.

---

## 211. Identidade órfã

Identidades sem proprietário, vínculo ou responsável reconhecido deverão ser suspensas ou investigadas.

---

## 212. Identidade inativa

Identidades inativas deverão ter acessos reduzidos, suspensos ou removidos conforme risco e política.

---

## 213. Autenticação

Autenticação é o processo de comprovar que a entidade é quem declara ser.

---

## 214. Fator de autenticação

Os fatores poderão incluir:

- conhecimento;
- posse;
- característica biométrica;
- contexto;
- certificado;
- vínculo institucional.

---

## 215. Autenticação multifator

Operações de maior risco deverão exigir combinação de fatores independentes quando aplicável.

---

## 216. Autenticação adaptativa

A autenticação poderá ser fortalecida conforme:

- risco;
- dispositivo;
- localização;
- comportamento;
- horário;
- recurso;
- impacto;
- anomalia.

---

## 217. Autenticação contínua

A confiança na sessão poderá ser reavaliada durante a operação.

A autenticação inicial não deverá garantir confiança indefinida.

---

## 218. Reautenticação

Deverá ser exigida antes de ações como:

- alterar credenciais;
- modificar autoridade;
- realizar pagamento relevante;
- acessar dados sensíveis;
- executar ação irreversível;
- assumir papel privilegiado.

---

## 219. Autenticação de agentes

Agentes deverão autenticar-se diante de:

- ferramentas;
- serviços;
- outros agentes;
- ambientes;
- organizações.

---

## 220. Autenticação de serviço

Serviços deverão utilizar mecanismos adequados como:

- certificados;
- chaves;
- tokens;
- identidades de carga de trabalho;
- assinaturas;
- canais protegidos.

---

## 221. Sessão autenticada

A sessão deverá possuir:

- identidade;
- início;
- expiração;
- contexto;
- nível de garantia;
- dispositivo;
- permissões;
- registros;
- critérios de revogação.

---

## 222. Expiração de sessão

Sessões deverão expirar conforme:

- inatividade;
- duração;
- risco;
- mudança de contexto;
- alteração de credencial;
- revogação;
- incidente.

---

## 223. Sequestro de sessão

A proteção deverá detectar:

- mudança incompatível de dispositivo;
- uso simultâneo inesperado;
- comportamento anômalo;
- token reutilizado;
- origem suspeita;
- elevação indevida.

---

## 224. Recuperação de acesso

A recuperação de conta deverá ser tão segura quanto a autenticação normal.

Não deverá depender de pergunta facilmente descoberta ou canal comprometido.

---

## 225. Recuperação assistida

Quando houver atendimento humano, o operador deverá possuir:

- procedimento;
- autoridade;
- evidências;
- proteção contra engenharia social;
- registro;
- supervisão proporcional.

---

## 226. Autorização

Autorização determina o que uma identidade autenticada poderá fazer.

---

## 227. Autenticação não é autorização

Provar identidade não concede automaticamente permissão para:

- acessar;
- decidir;
- alterar;
- executar;
- compartilhar;
- representar;
- administrar.

---

## 228. Decisão de autorização

A autorização deverá considerar:

- identidade;
- papel;
- missão;
- recurso;
- ação;
- contexto;
- risco;
- temporalidade;
- organização;
- política.

---

## 229. Autorização baseada em papéis

Papéis poderão agrupar permissões relacionadas a funções reconhecidas.

Deverão ser:

- claros;
- limitados;
- revisados;
- vinculados a responsabilidades;
- separados quando conflitantes.

---

## 230. Autorização baseada em atributos

A decisão poderá considerar atributos como:

- organização;
- território;
- qualificação;
- estado;
- missão;
- vínculo;
- nível de confiança;
- horário;
- ambiente.

---

## 231. Autorização baseada em políticas

Políticas poderão determinar acesso dinamicamente conforme contexto e risco.

---

## 232. Autorização baseada em relacionamento

O acesso poderá depender da relação legítima entre:

- pessoa e organização;
- profissional e missão;
- cuidador e assistido;
- agente e proprietário;
- parceiro e contrato.

---

## 233. Menor privilégio

Cada identidade deverá receber apenas as permissões necessárias para cumprir sua função.

---

## 234. Menor duração

Permissões deverão permanecer válidas somente pelo período necessário.

---

## 235. Menor alcance

A autorização deverá limitar:

- dados;
- território;
- organização;
- ferramenta;
- valor;
- horário;
- missão;
- ambiente;
- quantidade.

---

## 236. Privilégio permanente

Privilégios permanentes deverão ser evitados, especialmente em funções administrativas e extraordinárias.

---

## 237. Privilégio temporário

A elevação deverá possuir:

- solicitação;
- justificativa;
- aprovação;
- duração;
- escopo;
- monitoramento;
- revogação automática;
- revisão.

---

## 238. Acesso just-in-time

O acesso poderá ser concedido no momento da necessidade e removido após a atividade.

---

## 239. Acesso just-enough

A permissão deverá cobrir apenas as ações necessárias à tarefa.

---

## 240. Segregação de funções

Funções incompatíveis deverão ser separadas entre identidades distintas.

Exemplos:

- solicitar e aprovar;
- preparar e pagar;
- executar e auditar;
- criar usuário e conceder privilégio;
- investigar e julgar a própria atuação.

---

## 241. Dupla autorização

Ações críticas poderão exigir aprovação independente de duas autoridades.

---

## 242. Quórum de segurança

Determinadas mudanças poderão exigir participação de múltiplos responsáveis ou organizações.

---

## 243. Delegação de acesso

A delegação deverá registrar:

- delegante;
- destinatário;
- finalidade;
- escopo;
- duração;
- autoridade;
- possibilidade de subdelegação;
- revogação.

---

## 244. Subdelegação

Deverá ser proibida por padrão quando não estiver explicitamente autorizada.

---

## 245. Acesso de emergência

O acesso emergencial deverá ser:

- excepcional;
- autenticado;
- justificado;
- limitado;
- monitorado;
- temporário;
- revisado posteriormente.

---

## 246. Conta de emergência

Contas de emergência deverão possuir proteção reforçada e teste periódico.

Seu uso deverá gerar alerta imediato.

---

## 247. Acesso administrativo

Acesso administrativo deverá ocorrer por:

- identidade individual;
- ambiente controlado;
- autenticação reforçada;
- sessão registrada;
- privilégio temporário quando possível;
- monitoramento.

---

## 248. Conta compartilhada

Contas compartilhadas deverão ser evitadas.

Quando inevitáveis, deverão existir mecanismos adicionais de atribuição e controle.

---

## 249. Conta de serviço

Contas de serviço deverão possuir:

- proprietário;
- finalidade;
- escopo;
- credencial;
- rotação;
- monitoramento;
- ciclo de vida;
- proibição de uso interativo quando aplicável.

---

## 250. Conta órfã

Contas sem proprietário ou finalidade deverão ser suspensas e investigadas.

---

## 251. Revisão de acesso

Acessos deverão ser revisados:

- periodicamente;
- após mudança de função;
- após desligamento;
- após incidente;
- após encerramento de missão;
- após mudança contratual.

---

## 252. Certificação de acesso

Responsáveis deverão confirmar se permissões continuam necessárias e legítimas.

---

## 253. Revogação

A revogação deverá alcançar:

- sessões;
- tokens;
- chaves;
- certificados;
- dispositivos;
- integrações;
- acessos federados;
- credenciais temporárias.

---

## 254. Desligamento

O encerramento de vínculo deverá acionar processo coordenado de remoção de acessos e transferência de responsabilidades.

---

## 255. Mudança de função

A mudança deverá remover privilégios anteriores antes ou junto da concessão dos novos.

---

## 256. Credencial

Credencial é o elemento utilizado para autenticar ou autorizar uma identidade.

Poderá incluir:

- senha;
- token;
- chave;
- certificado;
- código;
- biometria;
- dispositivo;
- assinatura.

---

## 257. Senha

Senhas deverão ser protegidas por:

- requisitos adequados;
- armazenamento seguro;
- limitação de tentativas;
- detecção de comprometimento;
- recuperação segura;
- autenticação adicional quando necessária.

---

## 258. Segredo

Segredos não deverão ser:

- expostos em código;
- incluídos em documentos;
- registrados em logs;
- compartilhados por canais inseguros;
- inseridos em contexto de modelos sem necessidade.

---

## 259. Cofre de segredos

Credenciais técnicas deverão permanecer em mecanismos próprios de proteção e disponibilização controlada.

---

## 260. Rotação

Credenciais deverão ser rotacionadas conforme:

- risco;
- validade;
- mudança;
- incidente;
- desligamento;
- política;
- suspeita de exposição.

---

## 261. Chave criptográfica

Chaves deverão possuir ciclo de vida que inclua:

- geração;
- armazenamento;
- uso;
- rotação;
- revogação;
- destruição;
- recuperação quando aplicável.

---

## 262. Certificado

Certificados deverão ser:

- emitidos por autoridade confiável;
- vinculados à identidade;
- monitorados;
- renovados;
- revogados;
- validados.

---

## 263. Token

Tokens deverão possuir:

- escopo;
- audiência;
- emissor;
- validade;
- assinatura;
- possibilidade de revogação;
- proteção contra reutilização.

---

## 264. Credencial de agente

O agente deverá utilizar credenciais próprias e limitadas por:

- missão;
- ferramenta;
- ambiente;
- ação;
- duração;
- organização.

---

## 265. Credencial humana utilizada por agente

Agentes não deverão reutilizar credenciais humanas de maneira que impeça distinguir autoria e responsabilidade.

---

## 266. Assinatura de ação

Ações relevantes poderão ser assinadas para demonstrar:

- identidade;
- integridade;
- momento;
- autoria;
- não alteração.

---

## 267. Não repúdio

Mecanismos de não repúdio deverão ser utilizados quando necessário para comprovar que determinada identidade realizou ou autorizou uma ação.

---

## 268. Ambiente operacional

Ambiente é o domínio técnico e institucional no qual capacidades são executadas.

---

## 269. Separação de ambientes

Deverão ser separados:

- desenvolvimento;
- teste;
- homologação;
- treinamento;
- simulação;
- produção;
- contingência;
- recuperação;
- investigação.

---

## 270. Ambiente de desenvolvimento

Deverá permitir criação e teste inicial sem acesso desnecessário a dados e recursos de produção.

---

## 271. Ambiente de teste

Deverá utilizar dados controlados e ferramentas limitadas.

Resultados deverão ser identificados como não produtivos.

---

## 272. Ambiente de homologação

Deverá reproduzir condições suficientes para validar:

- integração;
- configuração;
- segurança;
- desempenho;
- procedimentos;
- observabilidade;
- recuperação.

---

## 273. Ambiente de produção

Somente componentes:

- aprovados;
- identificados;
- versionados;
- configurados;
- observáveis;
- suportados;

deverão operar em produção.

---

## 274. Ambiente de simulação

Atividades fictícias deverão ser explicitamente identificadas como:

**SIMULAÇÃO**

Dados, mensagens e resultados simulados não deverão ser confundidos com operação real.

---

## 275. Ambiente de contingência

Deverá possuir:

- finalidade;
- capacidade conhecida;
- acesso controlado;
- sincronização;
- procedimentos;
- teste;
- critérios de ativação;
- critérios de retorno.

---

## 276. Ambiente de investigação

Deverá preservar isolamento, integridade e cadeia de custódia das evidências.

---

## 277. Promoção entre ambientes

A promoção deverá exigir:

- versão;
- testes;
- aprovação;
- configuração validada;
- dependências;
- segurança;
- evidências;
- plano de retorno.

---

## 278. Dados entre ambientes

Dados de produção não deverão ser copiados indiscriminadamente para ambientes inferiores.

---

## 279. Configuração segura

Configurações deverão ser:

- versionadas;
- revisadas;
- testadas;
- verificáveis;
- automatizadas quando possível;
- protegidas contra alteração indevida.

---

## 280. Configuração padrão

Padrões deverão desabilitar:

- serviços desnecessários;
- acessos públicos;
- credenciais genéricas;
- permissões excessivas;
- recursos experimentais não aprovados;
- registros sensíveis desnecessários.

---

## 281. Deriva de configuração

Diferenças entre configuração aprovada e configuração real deverão ser detectadas.

---

## 282. Mudança de configuração

Mudanças deverão possuir:

- solicitação;
- justificativa;
- revisão;
- teste;
- aprovação;
- registro;
- validação;
- possibilidade de retorno.

---

## 283. Mudança emergencial

Mudanças emergenciais deverão preservar:

- autoridade;
- evidência;
- limitação;
- observação;
- revisão posterior;
- correção definitiva.

---

## 284. Infraestrutura

A infraestrutura inclui:

- computação;
- armazenamento;
- rede;
- energia;
- climatização;
- instalações;
- serviços gerenciados;
- ambientes em nuvem;
- dispositivos de borda.

---

## 285. Responsabilidade pela infraestrutura

Deverá ser claramente definido o que pertence a:

- Plataforma UNO;
- organização participante;
- provedor de nuvem;
- fornecedor;
- operador;
- parceiro.

---

## 286. Inventário de infraestrutura

Componentes deverão ser registrados com:

- identidade;
- função;
- proprietário;
- localização;
- versão;
- configuração;
- criticidade;
- dependências;
- estado;
- suporte.

---

## 287. Infraestrutura como código

Configurações poderão ser representadas como código para ampliar:

- repetibilidade;
- revisão;
- rastreabilidade;
- teste;
- recuperação;
- consistência.

---

## 288. Imagem de execução

Imagens de sistemas, contêineres e ambientes deverão possuir:

- origem;
- versão;
- componentes;
- assinatura;
- análise;
- política de atualização.

---

## 289. Isolamento de carga

Cargas deverão ser isoladas conforme:

- organização;
- missão;
- risco;
- sensibilidade;
- ambiente;
- privilégio;
- exposição.

---

## 290. Contêiner e máquina virtual

O uso dessas tecnologias não garantirá isolamento absoluto.

Configuração, privilégio, rede, imagem e monitoramento continuarão necessários.

---

## 291. Computação sem servidor

Serviços gerenciados deverão ser avaliados quanto a:

- identidade;
- eventos;
- permissões;
- segredos;
- dependências;
- registros;
- continuidade;
- limites do fornecedor.

---

## 292. Infraestrutura local

Recursos locais deverão considerar:

- acesso físico;
- energia;
- conectividade;
- manutenção;
- backup;
- peças;
- proteção ambiental;
- continuidade humana.

---

## 293. Infraestrutura em nuvem

Deverá considerar:

- responsabilidade compartilhada;
- região;
- disponibilidade;
- identidade;
- custos;
- dados;
- dependência;
- saída;
- conformidade;
- suporte.

---

## 294. Multinuvem

A utilização de múltiplos provedores somente deverá ocorrer quando produzir benefício compatível com:

- complexidade;
- custo;
- competência;
- interoperabilidade;
- segurança;
- continuidade.

---

## 295. Região de operação

A escolha da região deverá considerar:

- latência;
- residência de dados;
- legislação;
- disponibilidade;
- desastre;
- custo;
- conectividade;
- suporte.

---

## 296. Rede

A rede deverá ser arquitetada para limitar comunicação ao necessário.

---

## 297. Segmentação

A segmentação deverá separar:

- ambientes;
- organizações;
- funções;
- dados;
- componentes críticos;
- administração;
- usuários;
- agentes;
- fornecedores.

---

## 298. Microssegmentação

Controles mais granulares poderão limitar comunicação entre cargas específicas.

---

## 299. Perímetro

A Plataforma UNO não deverá presumir que tudo dentro da rede é confiável.

---

## 300. Canal seguro

Comunicações deverão proteger:

- identidade;
- confidencialidade;
- integridade;
- temporalidade;
- autenticidade;
- resistência à repetição.

---

## 301. Criptografia em trânsito

Dados deverão ser protegidos durante comunicação conforme sensibilidade e risco.

---

## 302. Criptografia em repouso

Dados armazenados deverão ser protegidos quando necessário, com gestão adequada de chaves.

---

## 303. Resolução de nomes

Serviços de nomes deverão ser protegidos contra:

- falsificação;
- redirecionamento;
- alteração;
- indisponibilidade;
- dependência única.

---

## 304. Entrada e saída de rede

Fluxos deverão ser:

- autorizados;
- necessários;
- registrados;
- limitados;
- revisados;
- monitorados.

---

## 305. Acesso remoto

Deverá utilizar:

- identidade forte;
- dispositivo confiável;
- canal protegido;
- autorização;
- monitoramento;
- expiração;
- restrição contextual.

---

## 306. Dispositivo

Dispositivos deverão possuir:

- proprietário;
- configuração;
- atualização;
- proteção;
- identidade;
- inventário;
- bloqueio;
- capacidade de revogação;
- descarte seguro.

---

## 307. Dispositivo pessoal

O uso de equipamento pessoal deverá possuir regras sobre:

- dados;
- aplicações;
- atualização;
- separação;
- suporte;
- privacidade;
- perda;
- desligamento.

---

## 308. Dispositivo compartilhado

Deverá separar sessões, identidades, dados e históricos dos usuários.

---

## 309. Dispositivo de campo

Deverá considerar:

- conectividade limitada;
- risco físico;
- perda;
- roubo;
- ambiente;
- uso offline;
- sincronização;
- autenticação;
- bateria.

---

## 310. Integridade do dispositivo

A operação poderá verificar:

- sistema;
- versão;
- configuração;
- proteção;
- comprometimento;
- origem;
- estado.

---

## 311. Atualização de dispositivo

Atualizações deverão ser:

- verificadas;
- planejadas;
- implantadas;
- observadas;
- reversíveis quando possível;
- compatíveis com continuidade.

---

## 312. Bloqueio e limpeza remota

Deverão existir quando proporcionais ao risco e tecnicamente viáveis.

A ação deverá preservar evidências quando houver investigação.

---

## 313. Aplicação

Aplicações deverão ser desenvolvidas e operadas com:

- identidade;
- autorização;
- validação;
- registros;
- proteção de dados;
- gestão de dependências;
- testes;
- atualização;
- resposta a incidentes.

---

## 314. Desenvolvimento seguro

O ciclo deverá incluir:

- requisitos;
- modelagem de ameaças;
- revisão;
- análise;
- testes;
- gestão de segredos;
- controle de versão;
- aprovação;
- monitoramento.

---

## 315. Repositório

Repositórios deverão proteger:

- código;
- histórico;
- branches;
- revisões;
- segredos;
- artefatos;
- automações;
- identidades;
- permissões.

---

## 316. Alteração de código

Mudanças relevantes deverão exigir:

- autoria;
- revisão;
- teste;
- aprovação;
- rastreabilidade;
- integração controlada.

---

## 317. Pipeline de entrega

O pipeline deverá proteger:

- fonte;
- dependências;
- artefatos;
- segredos;
- ambientes;
- aprovações;
- evidências;
- implantação.

---

## 318. Artefato

Artefatos de implantação deverão possuir:

- versão;
- origem;
- integridade;
- assinatura quando necessária;
- resultado de testes;
- dependências;
- aprovação.

---

## 319. Biblioteca e dependência

Dependências deverão ser inventariadas e avaliadas quanto a:

- origem;
- licença;
- vulnerabilidade;
- manutenção;
- atualização;
- substituição;
- impacto.

---

## 320. Componente obsoleto

Componentes sem suporte deverão possuir plano de:

- isolamento;
- compensação;
- substituição;
- desativação;
- prazo;
- responsável.

---

## 321. API

Toda API deverá possuir:

- identidade;
- contrato;
- autenticação;
- autorização;
- validação;
- limite;
- versão;
- registros;
- tratamento de erro;
- ciclo de vida.

---

## 322. Entrada de API

Entradas deverão ser tratadas como não confiáveis até validação.

---

## 323. Saída de API

Respostas não deverão expor:

- segredos;
- detalhes internos desnecessários;
- dados de outro contexto;
- informações além da autorização.

---

## 324. Limite de requisições

Limites deverão reduzir:

- abuso;
- saturação;
- varredura;
- custo inesperado;
- negação de serviço;
- falha em cascata.

---

## 325. Versão de API

Mudanças deverão preservar compatibilidade ou possuir processo de migração e descontinuação.

---

## 326. Evento

Eventos deverão possuir:

- origem;
- identidade;
- tipo;
- momento;
- integridade;
- contexto;
- versão;
- correlação;
- política de repetição.

---

## 327. Webhook

Webhooks deverão ser protegidos por:

- autenticação;
- assinatura;
- validação;
- proteção contra repetição;
- idempotência;
- limite;
- observabilidade.

---

## 328. Fila

Filas deverão proteger:

- identidade do produtor;
- identidade do consumidor;
- conteúdo;
- ordem quando necessária;
- repetição;
- retenção;
- acesso;
- descarte.

---

## 329. Mensagem malformada

Mensagens inválidas não deverão bloquear indefinidamente o processamento.

Deverão ser isoladas, registradas e analisadas.

---

## 330. Integração

Integrações deverão possuir:

- proprietário;
- finalidade;
- contrato;
- dados;
- autoridade;
- dependências;
- segurança;
- observabilidade;
- continuidade;
- encerramento.

---

## 331. Integração de terceiro

Deverá ser avaliada quanto a:

- fornecedor;
- identidade;
- dados;
- política;
- disponibilidade;
- segurança;
- conformidade;
- suporte;
- portabilidade.

---

## 332. Fronteira de confiança

Toda integração deverá reconhecer a passagem entre domínios de confiança distintos.

---

## 333. Validação de origem

Sistemas não deverão confiar em dados ou comandos apenas porque chegaram por integração conhecida.

---

## 334. Contrato de dados

A integração deverá definir:

- campos;
- significado;
- classificação;
- qualidade;
- finalidade;
- retenção;
- permissões;
- versão;
- erros.

---

## 335. Encerramento de integração

A desativação deverá:

- interromper fluxos;
- revogar credenciais;
- tratar filas;
- preservar evidências;
- atualizar dependências;
- comunicar responsáveis;
- confirmar ausência de atividade residual.

---

## 336. Dados operacionais

Dados deverão ser protegidos durante:

- coleta;
- transmissão;
- processamento;
- armazenamento;
- compartilhamento;
- backup;
- arquivamento;
- eliminação.

---

## 337. Classificação de dados

Dados poderão ser classificados como:

- públicos;
- internos;
- restritos;
- confidenciais;
- sensíveis;
- críticos.

A classificação deverá possuir critérios claros.

---

## 338. Proprietário dos dados

O proprietário deverá definir:

- finalidade;
- acesso;
- qualidade;
- classificação;
- retenção;
- compartilhamento;
- destinação.

---

## 339. Custodiante dos dados

O custodiante deverá implementar proteção conforme orientações e obrigações aplicáveis.

---

## 340. Proveniência dos dados

Deverá ser possível reconhecer:

- origem;
- momento;
- método;
- responsável;
- transformações;
- qualidade;
- autorização;
- contexto.

---

## 341. Integridade dos dados

Controles deverão prevenir ou detectar:

- alteração indevida;
- corrupção;
- perda;
- duplicidade;
- conflito;
- truncamento;
- substituição.

---

## 342. Confidencialidade

Somente identidades autorizadas deverão acessar dados conforme finalidade legítima.

---

## 343. Disponibilidade dos dados

Dados necessários à missão deverão permanecer acessíveis conforme criticidade e continuidade.

---

## 344. Autenticidade dos dados

Deverá existir confiança razoável de que os dados vieram da fonte alegada.

---

## 345. Temporalidade dos dados

A validade deverá considerar:

- criação;
- atualização;
- expiração;
- retenção;
- estado histórico;
- momento da decisão.

---

## 346. Minimização de dados

A operação deverá utilizar somente os dados necessários.

---

## 347. Mascaramento

Dados poderão ser ocultados parcialmente conforme papel, finalidade e ambiente.

---

## 348. Tokenização

Valores sensíveis poderão ser substituídos por representações controladas para reduzir exposição.

---

## 349. Pseudonimização

Identificadores poderão ser separados dos dados para reduzir associação direta.

---

## 350. Anonimização

A anonimização deverá ser avaliada quanto à possibilidade real de reidentificação.

---

## 351. Dados em logs

Registros não deverão conter indiscriminadamente:

- senhas;
- tokens;
- segredos;
- dados sensíveis;
- conteúdo pessoal completo;
- credenciais;
- chaves.

---

## 352. Exportação de dados

Exportações deverão possuir:

- finalidade;
- autorização;
- destinatário;
- formato;
- proteção;
- prazo;
- rastreabilidade;
- confirmação de destinação.

---

## 353. Compartilhamento

O compartilhamento deverá considerar:

- necessidade;
- finalidade;
- identidade;
- contrato;
- consentimento quando aplicável;
- segurança;
- retenção;
- responsabilidade.

---

## 354. Transferência entre organizações

A transferência deverá reconhecer mudanças de:

- controlador;
- operador;
- jurisdição;
- finalidade;
- política;
- responsabilidade;
- risco.

---

## 355. Retenção

Prazos deverão considerar:

- finalidade;
- obrigação;
- contestação;
- auditoria;
- investigação;
- minimização;
- valor histórico;
- risco.

---

## 356. Eliminação segura

A eliminação deverá alcançar cópias e representações dentro dos limites técnicos e legais aplicáveis.

---

## 357. Backup e segurança

Backups deverão preservar:

- confidencialidade;
- integridade;
- disponibilidade;
- isolamento;
- acesso;
- rastreabilidade;
- recuperabilidade.

---

## 358. Dado comprometido

Quando houver suspeita, a operação deverá:

- limitar uso;
- identificar alcance;
- preservar evidências;
- comunicar responsáveis;
- corrigir;
- reconciliar;
- avaliar decisões afetadas.

---

## 359. Dado falso

Informações falsas poderão ser introduzidas por erro ou ataque.

O agente e os sistemas deverão avaliar proveniência e coerência antes de agir.

---

## 360. Envenenamento de dados

A introdução deliberada de dados manipulados poderá afetar:

- análise;
- decisão;
- memória;
- aprendizagem;
- modelos;
- confiança;
- operações futuras.

---

## 361. Dados utilizados por agentes

Agentes deverão acessar dados por mecanismos governados, e não por inclusão indiscriminada em seu contexto.

---

## 362. Dados utilizados para aprendizagem

O uso para treinamento ou melhoria deverá possuir:

- finalidade;
- legitimidade;
- seleção;
- qualidade;
- proteção;
- avaliação de viés;
- retenção;
- governança.

---

## 363. Registro operacional

Registros deverão apoiar:

- observabilidade;
- investigação;
- auditoria;
- contestação;
- recuperação;
- aprendizagem.

---

## 364. Imutabilidade proporcional

Registros críticos deverão possuir proteção contra alteração ou exclusão indevida.

---

## 365. Sincronização de tempo

Sistemas deverão possuir referências temporais suficientemente coerentes para correlacionar eventos e evidências.

---

## 366. Identificador de correlação

Missões, incidentes, sessões e transações deverão possuir identificadores que permitam reconstruir a cadeia operacional.

---

## 367. Invariante de identidade

Nenhuma ação relevante deverá existir sem identidade operacional atribuível.

---

## 368. Invariante de autenticação

A força da autenticação deverá ser proporcional ao impacto permitido.

---

## 369. Invariante de autorização

Autenticação válida não deverá conceder autoridade além da política aplicável.

---

## 370. Invariante de privilégio mínimo

Identidades deverão possuir o menor privilégio, duração e alcance necessários.

---

## 371. Invariante de segregação

Ações críticas não deverão concentrar solicitação, autorização, execução e auditoria na mesma identidade sem justificativa extraordinária.

---

## 372. Invariante de credencial

Credenciais deverão ser protegidas, limitadas, rotacionáveis e revogáveis.

---

## 373. Invariante de ambiente

Dados, credenciais e efeitos de produção não deverão atravessar ambientes sem processo governado.

---

## 374. Invariante de configuração

O estado real deverá permanecer comparável à configuração aprovada.

---

## 375. Invariante de infraestrutura

Componentes deverão possuir proprietário, inventário, configuração, suporte e ciclo de vida.

---

## 376. Invariante de integração

Toda fronteira entre sistemas ou organizações deverá preservar identidade, contrato, contexto, segurança e responsabilidade.

---

## 377. Invariante de dados

Dados deverão possuir finalidade, classificação, proveniência, acesso, proteção, retenção e destinação.

---

## 378. Invariante de agente

Agentes não deverão possuir simultaneamente contexto, ferramentas, credenciais e autoridade ilimitados.

---

## 379. Invariante de rastreabilidade

Ações relevantes deverão permanecer correlacionáveis com identidade, missão, autorização, ferramenta, resultado e evidência.

---

## 380. Resultado do segundo lote

Com este lote, a Engenharia Oficial estabelece a cadeia técnica e institucional pela qual a segurança deverá proteger:

- identidades;
- autenticações;
- autorizações;
- papéis;
- privilégios;
- credenciais;
- sessões;
- ambientes;
- configurações;
- infraestrutura;
- redes;
- dispositivos;
- aplicações;
- APIs;
- eventos;
- integrações;
- dados;
- registros;
- agentes.

O próximo lote aprofundará:

- observabilidade de segurança;
- eventos;
- sinais;
- telemetria;
- detecção;
- alertas;
- correlação;
- triagem;
- classificação;
- declaração de incidentes;
- comando e coordenação da resposta operacional.

---

# Lote 3 — Observabilidade, Detecção, Eventos, Alertas, Incidentes e Coordenação da Resposta

## 381. Observabilidade de segurança

Observabilidade de segurança é a capacidade de compreender o estado de proteção da operação a partir de sinais, eventos, registros, métricas, relações e evidências.

Não deverá limitar-se à coleta indiscriminada de dados.

---

## 382. Finalidade da observabilidade

A observabilidade deverá permitir:

- reconhecer comportamento normal;
- identificar desvios;
- detectar ameaças;
- localizar vulnerabilidades;
- compreender impactos;
- acompanhar controles;
- investigar eventos;
- orientar resposta;
- preservar evidências;
- aprender.

---

## 383. Observabilidade e privacidade

A coleta deverá respeitar:

- finalidade;
- necessidade;
- proporcionalidade;
- autoridade;
- minimização;
- retenção;
- controle de acesso;
- direitos aplicáveis.

Segurança não deverá justificar vigilância ilimitada.

---

## 384. Observabilidade em profundidade

A Plataforma UNO deverá observar, conforme risco:

- identidades;
- acessos;
- sessões;
- dispositivos;
- rede;
- aplicações;
- APIs;
- dados;
- integrações;
- agentes;
- automações;
- infraestrutura;
- ambientes físicos;
- fornecedores;
- missões.

---

## 385. Estado observável

Componentes relevantes deverão expor informações suficientes para compreender:

- disponibilidade;
- integridade;
- configuração;
- atividade;
- dependências;
- falhas;
- acessos;
- alterações;
- riscos;
- estado de proteção.

---

## 386. Limite da observação

A ausência de sinal não deverá ser interpretada automaticamente como ausência de ameaça.

A operação deverá reconhecer:

- pontos cegos;
- atrasos;
- falhas de coleta;
- perda de registros;
- limitações de cobertura;
- comportamentos ainda desconhecidos.

---

## 387. Fonte de telemetria

A telemetria poderá originar-se de:

- sistemas;
- aplicações;
- redes;
- dispositivos;
- serviços;
- identidades;
- agentes;
- sensores;
- operadores;
- usuários;
- parceiros;
- fornecedores.

---

## 388. Catálogo de fontes

Cada fonte deverá possuir:

- identidade;
- proprietário;
- finalidade;
- formato;
- cobertura;
- qualidade;
- retenção;
- acesso;
- dependências;
- estado;
- limitações.

---

## 389. Fonte confiável

A confiança deverá considerar:

- autenticidade;
- integridade;
- precisão;
- temporalidade;
- cobertura;
- independência;
- histórico;
- possibilidade de manipulação.

---

## 390. Fonte comprometida

Uma fonte poderá produzir telemetria falsa, incompleta ou atrasada.

A arquitetura deverá detectar incoerências entre fontes independentes.

---

## 391. Evento de segurança

Evento de segurança é qualquer ocorrência relevante para proteção da operação.

Nem todo evento constituirá incidente.

---

## 392. Estrutura do evento

O evento deverá conter, quando aplicável:

- identificador;
- tipo;
- origem;
- momento;
- identidade;
- ação;
- objeto;
- resultado;
- contexto;
- criticidade;
- correlação;
- integridade.

---

## 393. Proveniência do evento

Deverá ser possível reconhecer:

- quem produziu;
- em qual componente;
- em qual ambiente;
- por qual mecanismo;
- com qual versão;
- em qual momento.

---

## 394. Temporalidade do evento

A análise deverá distinguir:

- momento da ocorrência;
- momento da detecção;
- momento do registro;
- momento da transmissão;
- momento da análise;
- momento da resposta.

---

## 395. Evento atrasado

Eventos atrasados poderão alterar a compreensão histórica de um incidente.

Não deverão ser descartados apenas por terem chegado depois.

---

## 396. Evento duplicado

Duplicidades deverão ser reconhecidas para evitar:

- múltiplos alertas;
- resposta repetida;
- contagem incorreta;
- escalonamento indevido;
- ações automáticas duplicadas.

---

## 397. Evento ausente

Lacunas poderão indicar:

- falha de coleta;
- indisponibilidade;
- alteração;
- ataque;
- configuração incorreta;
- retenção inadequada.

---

## 398. Evento adulterado

Eventos com suspeita de alteração deverão ser isolados e comparados com outras evidências.

---

## 399. Registro de segurança

Registros deverão apoiar:

- detecção;
- correlação;
- auditoria;
- investigação;
- contestação;
- recuperação;
- prestação de contas.

---

## 400. Conteúdo do registro

O registro deverá conter o necessário sem expor indiscriminadamente:

- segredos;
- credenciais;
- dados sensíveis;
- conteúdo pessoal;
- informações protegidas.

---

## 401. Proteção dos registros

Registros deverão ser protegidos contra:

- alteração;
- exclusão;
- acesso indevido;
- falsificação;
- retenção excessiva;
- indisponibilidade;
- perda de ordenação.

---

## 402. Centralização de registros

A centralização poderá facilitar correlação, mas deverá considerar:

- concentração de dados;
- privacidade;
- dependência;
- custo;
- escala;
- continuidade;
- acesso;
- isolamento organizacional.

---

## 403. Registros distribuídos

Quando os registros permanecerem em múltiplos domínios, deverão existir referências e mecanismos de correlação.

---

## 404. Métrica de segurança

Métricas deverão representar condições como:

- tentativas;
- falhas;
- acessos;
- bloqueios;
- vulnerabilidades;
- incidentes;
- exposição;
- cobertura;
- tempo de resposta;
- recuperação;
- recorrência.

---

## 405. Indicador

Indicador de segurança é um sinal que poderá representar:

- ameaça;
- comprometimento;
- vulnerabilidade;
- falha de controle;
- comportamento anômalo;
- risco crescente.

---

## 406. Indicador de comprometimento

Poderá incluir:

- identidade;
- endereço;
- arquivo;
- assinatura;
- comportamento;
- alteração;
- sequência;
- credencial;
- comunicação suspeita.

Nenhum indicador deverá ser tratado isoladamente como prova definitiva.

---

## 407. Indicador de ataque

Poderá sinalizar preparação ou tentativa antes do comprometimento efetivo.

---

## 408. Indicador de comportamento

Comportamentos poderão ser mais úteis do que assinaturas estáticas para reconhecer ameaças desconhecidas.

---

## 409. Linha de base

A linha de base representa padrões esperados de:

- acesso;
- comunicação;
- desempenho;
- volume;
- horário;
- sequência;
- configuração;
- uso de ferramentas;
- atuação de agentes.

---

## 410. Mudança legítima da linha de base

Mudanças operacionais poderão alterar padrões sem representar ameaça.

A detecção deverá considerar:

- implantação;
- campanha;
- evento;
- crescimento;
- contingência;
- mudança de turno;
- alteração de missão.

---

## 411. Anomalia

Anomalia é desvio em relação ao comportamento esperado.

Poderá representar:

- ameaça;
- erro;
- mudança;
- oportunidade;
- falha de telemetria;
- condição legítima.

---

## 412. Detecção

Detecção é o processo de reconhecer eventos que merecem análise ou resposta.

---

## 413. Detecção baseada em regra

Utiliza condições previamente definidas.

Será adequada para:

- comportamento proibido;
- limite conhecido;
- assinatura;
- sequência crítica;
- ausência de controle;
- configuração inadequada.

---

## 414. Detecção baseada em comportamento

Compara atividades com padrões históricos ou esperados.

Deverá considerar mudanças legítimas de contexto.

---

## 415. Detecção estatística

Poderá utilizar distribuição, frequência, correlação e desvio.

Resultados deverão indicar incerteza e limitações.

---

## 416. Detecção apoiada por inteligência artificial

Agentes poderão:

- organizar sinais;
- correlacionar eventos;
- formar hipóteses;
- priorizar alertas;
- resumir contexto;
- sugerir investigação.

Não deverão declarar comprometimento definitivo sem evidência suficiente.

---

## 417. Detecção humana

Pessoas poderão reconhecer sinais não capturados por sistemas, incluindo:

- comportamento estranho;
- coerção;
- fraude;
- dano físico;
- comunicação suspeita;
- alteração contextual.

---

## 418. Detecção comunitária

Usuários, colaboradores e comunidades poderão comunicar:

- fraude;
- personificação;
- abuso;
- desinformação;
- exposição;
- risco;
- comportamento indevido.

---

## 419. Canal de comunicação de segurança

O canal deverá ser:

- acessível;
- protegido;
- conhecido;
- rastreável;
- responsivo;
- não punitivo;
- adequado à urgência.

---

## 420. Denúncia

Denúncias deverão ser tratadas com:

- confidencialidade;
- proteção;
- imparcialidade;
- registro;
- triagem;
- acompanhamento;
- resposta.

---

## 421. Denúncia anônima

Poderá ser admitida quando adequada, preservando meios de avaliar conteúdo sem exigir exposição da pessoa.

---

## 422. Falso positivo

Ocorre quando sinal legítimo é classificado como ameaça.

Poderá causar:

- bloqueio indevido;
- interrupção;
- constrangimento;
- custo;
- fadiga;
- perda de confiança;
- dano reputacional.

---

## 423. Falso negativo

Ocorre quando ameaça real não é reconhecida.

Poderá prolongar:

- exposição;
- fraude;
- dano;
- propagação;
- perda;
- comprometimento.

---

## 424. Equilíbrio de detecção

A sensibilidade deverá considerar:

- criticidade;
- impacto de bloqueio;
- impacto de não detecção;
- reversibilidade;
- capacidade de revisão;
- direitos das pessoas.

---

## 425. Cobertura de detecção

A Plataforma UNO deverá conhecer quais:

- ativos;
- ambientes;
- identidades;
- eventos;
- técnicas;
- organizações;
- territórios;

estão ou não cobertos.

---

## 426. Ponto cego

Pontos cegos deverão possuir:

- identificação;
- risco;
- responsável;
- controle compensatório;
- prazo;
- revisão.

---

## 427. Integridade da detecção

Agentes ou sistemas monitorados não deverão poder desativar silenciosamente seus próprios controles.

---

## 428. Falha de telemetria

A perda de telemetria deverá gerar estado de confiança reduzida.

Para componentes críticos, a ausência de observação poderá exigir:

- restrição;
- redução de autonomia;
- interrupção;
- ativação de contingência;
- investigação.

---

## 429. Alerta de segurança

Alerta é sinal qualificado que exige análise, decisão ou acompanhamento.

---

## 430. Estrutura do alerta

O alerta deverá indicar:

- o que ocorreu;
- onde;
- quando;
- quem ou o que está envolvido;
- criticidade;
- evidências;
- confiança;
- impacto potencial;
- ação esperada;
- responsável.

---

## 431. Prioridade do alerta

A prioridade deverá considerar:

- vida;
- impacto;
- propagação;
- criticidade;
- exploração ativa;
- exposição;
- vulnerabilidade;
- capacidade de contenção;
- temporalidade.

---

## 432. Alerta crítico

Deverá exigir resposta imediata quando houver risco de:

- vida;
- dano grave;
- comprometimento amplo;
- perda irreversível;
- fraude significativa;
- colapso de função essencial;
- propagação rápida.

---

## 433. Alerta alto

Exigirá análise prioritária e possível contenção antes de confirmação completa.

---

## 434. Alerta moderado

Exigirá acompanhamento dentro de prazo compatível com seu risco.

---

## 435. Alerta baixo

Poderá ser agregado, observado ou tratado por procedimento padronizado.

---

## 436. Agrupamento de alertas

Alertas relacionados deverão ser agrupados por:

- identidade;
- ativo;
- missão;
- origem;
- comportamento;
- tempo;
- técnica;
- dependência;
- organização.

---

## 437. Supressão de duplicidade

A supressão deverá reduzir ruído sem apagar:

- frequência;
- expansão;
- impacto;
- novas evidências;
- mudança de padrão.

---

## 438. Silenciamento de alerta

O silenciamento deverá possuir:

- motivo;
- responsável;
- prazo;
- escopo;
- risco;
- revisão;
- registro.

---

## 439. Fadiga de alertas

A operação deverá evitar volume de alertas superior à capacidade de análise.

A fadiga poderá produzir:

- atrasos;
- ignorância;
- aprovações automáticas;
- erros;
- desmotivação;
- perda de sinais críticos.

---

## 440. Alerta acionável

Todo alerta deverá indicar, quando possível:

- decisão necessária;
- ação recomendada;
- responsável;
- prazo;
- consequência;
- procedimento relacionado.

---

## 441. Correlação

A correlação deverá relacionar eventos para formar compreensão contextual.

Poderá considerar:

- tempo;
- identidade;
- dispositivo;
- ativo;
- comportamento;
- missão;
- localização;
- ferramenta;
- organização;
- dependência.

---

## 442. Correlação temporal

Eventos próximos poderão pertencer ao mesmo cenário, mas proximidade isolada não será prova.

---

## 443. Correlação causal

A investigação deverá distinguir relação temporal de relação causal.

---

## 444. Correlação entre domínios

Sinais físicos, digitais, financeiros, humanos e institucionais poderão representar partes do mesmo incidente.

---

## 445. Correlação multiagente

Eventos de múltiplos agentes poderão revelar:

- propagação;
- delegação indevida;
- consenso falso;
- memória contaminada;
- ferramenta comprometida;
- coordenador malicioso.

---

## 446. Correlação federada

Organizações poderão compartilhar sinais compatíveis com:

- contrato;
- finalidade;
- privacidade;
- necessidade;
- segurança;
- responsabilidade.

---

## 447. Enriquecimento

Alertas poderão ser enriquecidos com:

- criticidade do ativo;
- proprietário;
- histórico;
- vulnerabilidades;
- dependências;
- missão;
- identidade;
- inteligência de ameaça;
- contexto territorial.

---

## 448. Enriquecimento não confiável

Dados externos utilizados para enriquecimento deverão ser avaliados quanto a:

- origem;
- atualidade;
- qualidade;
- interesse;
- falsificação;
- aplicabilidade.

---

## 449. Triagem

Triagem é o processo de determinar se um alerta:

- é legítimo;
- representa incidente;
- exige resposta;
- pode ser encerrado;
- precisa de especialista;
- deve ser escalonado.

---

## 450. Analista de triagem

O analista poderá ser:

- humano;
- artificial;
- híbrido.

A responsabilidade institucional deverá permanecer atribuída.

---

## 451. Triagem assistida por agente

O agente poderá:

- reunir contexto;
- verificar duplicidades;
- relacionar ativos;
- localizar procedimentos;
- sugerir classificação;
- identificar evidências;
- preparar encaminhamento.

---

## 452. Limite da triagem automatizada

Alertas de alto impacto não deverão ser descartados somente por classificação automática sem salvaguardas compatíveis.

---

## 453. Critérios de triagem

A triagem deverá avaliar:

- autenticidade;
- alcance;
- impacto;
- urgência;
- exposição;
- evidência;
- confiança;
- pessoas afetadas;
- necessidade de contenção;
- autoridade.

---

## 454. Estado da triagem

Poderá incluir:

- recebido;
- em análise;
- aguardando contexto;
- duplicado;
- escalonado;
- incidente confirmado;
- falso positivo;
- monitorado;
- encerrado.

---

## 455. Tempo de triagem

Prazos deverão ser definidos conforme a velocidade potencial do risco.

---

## 456. Escalonamento da triagem

O escalonamento deverá ocorrer quando:

- faltar competência;
- houver risco elevado;
- existir conflito;
- autoridade for insuficiente;
- o impacto ultrapassar limite;
- houver exigência legal;
- a contenção for urgente.

---

## 457. Caso de segurança

Alertas relacionados poderão formar um caso com:

- identificador;
- responsável;
- estado;
- ativos;
- eventos;
- evidências;
- decisões;
- ações;
- comunicações;
- histórico.

---

## 458. Incidente de segurança

Incidente é evento ou conjunto de eventos que compromete ou ameaça comprometer:

- vida;
- dignidade;
- confidencialidade;
- integridade;
- disponibilidade;
- autoridade;
- identidade;
- privacidade;
- continuidade;
- legitimidade;
- confiança.

---

## 459. Incidente operacional

Um incidente poderá ser causado por:

- ataque;
- erro;
- falha;
- acidente;
- desvio;
- abuso;
- configuração;
- fornecedor;
- evento natural;
- processo inadequado.

---

## 460. Incidente confirmado

Será confirmado quando evidências suficientes demonstrarem comprometimento ou impacto relevante.

A resposta poderá começar antes da confirmação quando a espera aumentar o dano.

---

## 461. Suspeita de incidente

A suspeita deverá gerar investigação proporcional sem produzir acusação definitiva.

---

## 462. Quase incidente

Um evento contido antes do impacto deverá ser registrado quando revelar fragilidade relevante.

---

## 463. Incidente evitado

Controles que impedirem impacto deverão gerar evidência e aprendizagem sobre sua eficácia.

---

## 464. Incidente oculto

A operação deverá considerar que incidentes poderão permanecer sem detecção por longo período.

---

## 465. Classificação do incidente

A classificação deverá considerar:

- impacto;
- alcance;
- criticidade;
- duração;
- propagação;
- pessoas afetadas;
- dados;
- recursos;
- continuidade;
- obrigações.

---

## 466. Severidade crítica

Poderá envolver:

- risco à vida;
- dano grave;
- comprometimento sistêmico;
- indisponibilidade essencial;
- perda irreversível;
- fraude ampla;
- crise institucional;
- violação relevante de direitos.

---

## 467. Severidade alta

Envolve impacto significativo que exige resposta coordenada e prioritária.

---

## 468. Severidade moderada

Envolve impacto controlável dentro da operação normal com acompanhamento específico.

---

## 469. Severidade baixa

Envolve impacto limitado, reversível e contido.

---

## 470. Reclassificação

A severidade poderá aumentar ou diminuir conforme novas evidências.

Toda mudança deverá possuir:

- motivo;
- responsável;
- momento;
- evidência;
- consequências operacionais.

---

## 471. Declaração do incidente

A declaração formal deverá indicar:

- identificador;
- momento;
- severidade;
- responsável;
- missão afetada;
- ativos;
- impacto conhecido;
- ações iniciais;
- canais;
- participantes.

---

## 472. Autoridade para declarar

A organização deverá definir quem poderá declarar incidentes por nível.

Agentes poderão recomendar ou declarar automaticamente somente dentro de autoridade governada.

---

## 473. Declaração preventiva

Um incidente poderá ser declarado preventivamente quando sinais indicarem risco rápido e grave.

Se não for confirmado, deverá ser encerrado com transparência e aprendizagem.

---

## 474. Não declaração indevida

A operação não deverá evitar declaração para:

- preservar indicadores;
- reduzir visibilidade;
- proteger reputação;
- evitar obrigação;
- ocultar falha;
- impedir escalonamento.

---

## 475. Missão de resposta

A resposta deverá ser tratada como missão com:

- propósito;
- comando;
- participantes;
- autoridade;
- prioridades;
- recursos;
- procedimentos;
- estados;
- resultados;
- encerramento.

---

## 476. Objetivos da resposta

A resposta deverá buscar:

1. proteger a vida;
2. impedir dano adicional;
3. preservar dignidade e direitos;
4. conter propagação;
5. manter funções essenciais;
6. preservar evidências;
7. recuperar capacidades;
8. comunicar;
9. reparar;
10. aprender.

---

## 477. Comando de resposta

O comando deverá coordenar:

- segurança;
- operação;
- tecnologia;
- comunicação;
- jurídico;
- privacidade;
- continuidade;
- organizações;
- especialistas;
- pessoas afetadas.

---

## 478. Comandante do incidente

O comandante deverá possuir:

- autoridade;
- competência;
- visão integrada;
- capacidade de priorização;
- apoio;
- possibilidade de delegação;
- responsabilidade;
- substituto.

---

## 479. Comando não absoluto

O comandante não deverá ultrapassar:

- leis;
- direitos;
- princípios permanentes;
- limites da missão;
- autoridades superiores legítimas.

---

## 480. Estrutura de resposta

A estrutura poderá incluir:

- comando;
- operações;
- análise;
- investigação;
- contenção;
- recuperação;
- comunicação;
- registro;
- logística;
- jurídico;
- segurança física;
- apoio às pessoas.

---

## 481. Coordenador técnico

Deverá integrar ações técnicas sem substituir o comando institucional.

---

## 482. Coordenador humano

Deverá acompanhar impactos sobre:

- equipes;
- usuários;
- comunidades;
- trabalhadores;
- pessoas vulneráveis;
- atendimento;
- comunicação.

---

## 483. Responsável por evidências

Deverá preservar:

- integridade;
- cadeia de custódia;
- acesso;
- temporalidade;
- documentação;
- destinação.

---

## 484. Responsável por comunicação

Deverá coordenar mensagens:

- internas;
- externas;
- regulatórias;
- públicas;
- às pessoas afetadas;
- aos parceiros;
- aos fornecedores.

---

## 485. Responsável por continuidade

Deverá garantir que contenção e investigação não eliminem desnecessariamente funções essenciais.

---

## 486. Sala de situação

A sala de situação deverá reunir visão comum sobre:

- incidente;
- estado;
- impacto;
- ações;
- decisões;
- riscos;
- recursos;
- dependências;
- comunicações;
- próximos passos.

---

## 487. Sala de situação digital

Deverá possuir:

- controle de acesso;
- identidade;
- registro;
- canais alternativos;
- proteção de evidências;
- continuidade;
- separação de informações sensíveis.

---

## 488. Painel operacional comum

O painel deverá apresentar:

- linha do tempo;
- severidade;
- ativos;
- missões;
- responsáveis;
- ações;
- estado;
- riscos;
- dependências;
- pendências;
- comunicações.

---

## 489. Linha do tempo

A linha do tempo deverá registrar:

- ocorrência;
- detecção;
- triagem;
- declaração;
- decisões;
- ações;
- resultados;
- comunicações;
- mudanças de estado.

---

## 490. Registro de decisão

Cada decisão relevante deverá indicar:

- quem decidiu;
- autoridade;
- contexto;
- opções;
- razão;
- riscos;
- momento;
- resultado esperado.

---

## 491. Registro de ação

Cada ação deverá indicar:

- executor;
- ferramenta;
- escopo;
- início;
- término;
- resultado;
- evidência;
- efeito observado.

---

## 492. Estado do incidente

Poderá incluir:

- suspeito;
- em triagem;
- confirmado;
- declarado;
- em contenção;
- contido;
- em investigação;
- em recuperação;
- monitorado;
- encerrado;
- reaberto.

---

## 493. Critério de transição

Cada mudança de estado deverá possuir critério e autoridade definidos.

---

## 494. Prioridade durante o incidente

A prioridade deverá considerar:

- vida;
- dignidade;
- impacto;
- propagação;
- funções essenciais;
- evidências;
- capacidade de recuperação;
- obrigações;
- confiança.

---

## 495. Priorização de ativos

Ativos não deverão ser priorizados apenas por valor financeiro.

---

## 496. Priorização de pessoas

Pessoas em maior risco ou vulnerabilidade deverão receber proteção e comunicação adequadas.

---

## 497. Recurso de resposta

Poderá incluir:

- pessoas;
- agentes;
- ferramentas;
- infraestrutura;
- comunicação;
- especialistas;
- fornecedores;
- recursos financeiros;
- ambientes alternativos.

---

## 498. Mobilização

A mobilização deverá ser proporcional à severidade e poderá ativar:

- plantão;
- especialistas;
- direção;
- parceiros;
- autoridades;
- contingência;
- suporte às pessoas.

---

## 499. Escalonamento institucional

Deverá ocorrer quando o incidente ultrapassar:

- autoridade;
- capacidade;
- território;
- organização;
- contrato;
- limite técnico;
- impacto aceito.

---

## 500. Escalonamento externo

Poderá envolver:

- fornecedor;
- parceiro;
- autoridade pública;
- regulador;
- emergência;
- perícia;
- apoio especializado.

---

## 501. Operação assistida na resposta

Agentes poderão apoiar:

- correlação;
- síntese;
- busca;
- priorização;
- preparação de ações;
- comunicação;
- acompanhamento;
- documentação.

---

## 502. Limites dos agentes durante incidentes

Urgência não deverá conceder autoridade ilimitada.

Agentes deverão permanecer sujeitos a:

- identidade;
- política;
- supervisão;
- evidência;
- interrupção;
- validação;
- revisão.

---

## 503. Automação de resposta

Automações poderão executar:

- bloqueio;
- isolamento;
- revogação;
- contenção;
- coleta;
- alerta;
- transferência;
- recuperação.

A autonomia deverá ser proporcional ao risco de falso positivo e ao impacto da ação.

---

## 504. Resposta automática preventiva

Poderá ser adequada quando:

- a ameaça for conhecida;
- o impacto da contenção for limitado;
- a ação for reversível;
- a evidência for suficiente;
- a demora ampliar dano.

---

## 505. Resposta automática crítica

Ações de grande impacto deverão exigir controles reforçados, como:

- dupla validação;
- limites;
- supervisão;
- confirmação;
- ambiente seguro;
- compensação;
- auditoria.

---

## 506. Resposta humana

Pessoas deverão manter capacidade para:

- interpretar;
- decidir;
- intervir;
- agir manualmente;
- contestar automação;
- coordenar;
- prestar contas.

---

## 507. Handover de resposta

Trocas de turno deverão transferir:

- estado;
- linha do tempo;
- decisões;
- hipóteses;
- ações;
- evidências;
- riscos;
- pendências;
- contatos;
- próximo passo.

---

## 508. Continuidade do comando

Deverá existir substituição para funções essenciais de resposta.

---

## 509. Canal de resposta

Canais deverão possuir:

- identidade;
- proteção;
- disponibilidade;
- participantes;
- finalidade;
- registro;
- alternativa;
- procedimento de falha.

---

## 510. Canal comprometido

Quando o canal principal estiver comprometido, a resposta deverá utilizar alternativa previamente estabelecida.

---

## 511. Comunicação fora de banda

Poderá ser necessária quando sistemas normais estiverem:

- indisponíveis;
- monitorados pelo atacante;
- adulterados;
- congestionados;
- não confiáveis.

---

## 512. Confidencialidade da resposta

Informações deverão ser compartilhadas conforme:

- necessidade;
- papel;
- autoridade;
- risco;
- proteção das pessoas;
- investigação;
- obrigação.

---

## 513. Informação comum operacional

A equipe deverá possuir contexto compartilhado suficiente para agir coordenadamente.

---

## 514. Hipótese de incidente

Hipóteses deverão ser identificadas como hipóteses e comparadas com evidências.

---

## 515. Certeza prematura

A operação deverá evitar definir causa, autoria ou alcance antes de evidência suficiente.

---

## 516. Atualização situacional

Atualizações deverão informar:

- estado;
- mudança;
- impacto;
- ações;
- decisões;
- riscos;
- necessidade de apoio;
- próximo período de atualização.

---

## 517. Cadência de atualização

A frequência deverá ser proporcional à severidade e à velocidade do incidente.

---

## 518. Relatório de situação

O relatório poderá conter:

- resumo;
- fatos;
- hipóteses;
- impacto;
- ações concluídas;
- ações em andamento;
- bloqueios;
- riscos;
- decisões necessárias;
- responsáveis.

---

## 519. Decisão sob incerteza

A resposta poderá exigir ação antes de compreensão completa.

A decisão deverá considerar:

- pior impacto plausível;
- reversibilidade;
- tempo;
- alternativas;
- evidências;
- proporcionalidade;
- autoridade.

---

## 520. Ação conservadora

Quando a incerteza for elevada, deverá ser preferida ação que:

- proteja pessoas;
- preserve evidências;
- limite propagação;
- mantenha opções futuras;
- evite dano irreversível.

---

## 521. Operação degradada durante incidente

A resposta poderá reduzir capacidades para preservar:

- vida;
- segurança;
- funções essenciais;
- integridade;
- continuidade;
- evidências.

---

## 522. Restrição de autonomia

Durante incidentes, agentes e automações poderão ter autonomia reduzida quando:

- contexto estiver comprometido;
- identidade estiver em dúvida;
- ferramentas estiverem instáveis;
- evidências forem insuficientes;
- supervisão estiver indisponível.

---

## 523. Estado de segurança elevado

A Plataforma UNO poderá ativar estado temporário com:

- autenticação reforçada;
- menor privilégio;
- maior monitoramento;
- aprovações adicionais;
- bloqueios;
- restrições de integração;
- revisão frequente.

---

## 524. Estado extraordinário

Medidas extraordinárias deverão possuir:

- fundamento;
- autoridade;
- escopo;
- prazo;
- proporcionalidade;
- registro;
- revisão;
- encerramento.

---

## 525. Encerramento automático de medidas

Controles extraordinários deverão expirar automaticamente quando não forem renovados legitimamente.

---

## 526. Proteção contra abuso emergencial

A emergência não deverá ser utilizada para:

- concentração permanente de poder;
- vigilância indefinida;
- supressão de direitos;
- eliminação de evidências;
- ocultação de responsabilidade;
- manutenção de exceções desnecessárias.

---

## 527. Invariante de observabilidade

A segurança deverá conhecer seus pontos cegos e reduzir confiança quando a observação for insuficiente.

---

## 528. Invariante de telemetria

Fontes críticas deverão possuir identidade, integridade, temporalidade, proprietário e continuidade.

---

## 529. Invariante de detecção

A ausência de alerta não deverá ser considerada prova de segurança.

---

## 530. Invariante de alerta

Alertas deverão ser acionáveis, priorizados e proporcionais ao impacto.

---

## 531. Invariante de triagem

Alertas relevantes não deverão ser descartados exclusivamente por classificação automática sem salvaguardas.

---

## 532. Invariante de declaração

Incidentes não deverão deixar de ser declarados para proteger reputação, métricas ou conveniência.

---

## 533. Invariante de comando

Toda resposta deverá possuir comando, autoridade, responsabilidades e substituição reconhecíveis.

---

## 534. Invariante de decisão

Decisões sob incerteza deverão preservar vida, opções futuras, evidências e proporcionalidade.

---

## 535. Invariante de resposta automatizada

A velocidade da automação não deverá ultrapassar capacidade de contenção, validação e responsabilização.

---

## 536. Invariante de estado extraordinário

Medidas excepcionais deverão ser temporárias, limitadas, revisáveis e encerradas quando sua necessidade terminar.

---

## 537. Resultado do terceiro lote

Com este lote, a Engenharia Oficial estabelece que a Plataforma UNO deverá:

- observar sua segurança;
- reconhecer limitações de cobertura;
- preservar telemetria;
- detectar desvios;
- qualificar sinais;
- controlar alertas;
- realizar triagem;
- declarar incidentes;
- estabelecer comando;
- mobilizar capacidades;
- decidir sob incerteza;
- coordenar pessoas, agentes e organizações;
- operar com segurança em condições extraordinárias.

O próximo lote aprofundará:

- contenção;
- isolamento;
- erradicação;
- investigação;
- forense;
- cadeia de custódia;
- comunicação;
- recuperação;
- retorno à operação;
- reparação;
- encerramento;
- revisão posterior ao incidente.

---

# Lote 4 — Contenção, Investigação, Evidências, Comunicação, Recuperação e Reparação

## 538. Contenção

Contenção é o conjunto de ações destinadas a limitar:

- propagação;
- exposição;
- impacto;
- duração;
- acesso;
- perda;
- comprometimento;
- dano às pessoas;
- dano institucional.

A contenção deverá preservar o máximo possível de continuidade, evidência e capacidade de recuperação.

---

## 539. Finalidade da contenção

A contenção deverá:

- proteger pessoas;
- impedir agravamento;
- limitar o alcance;
- preservar funções essenciais;
- impedir novas ações indevidas;
- manter opções futuras;
- preparar investigação e recuperação.

---

## 540. Contenção não é solução definitiva

Conter um incidente não significa:

- eliminar a causa;
- remover a ameaça;
- recuperar o ambiente;
- reparar os impactos;
- encerrar a investigação;
- restaurar confiança;
- impedir recorrência.

---

## 541. Contenção imediata

A contenção imediata deverá priorizar ações capazes de reduzir rapidamente o dano.

Poderá incluir:

- bloqueio;
- isolamento;
- revogação;
- interrupção;
- restrição;
- desconexão;
- transferência;
- suspensão;
- ativação de contingência.

---

## 542. Contenção de curto prazo

Deverá estabilizar a operação enquanto a investigação e o planejamento avançam.

Poderá utilizar controles temporários e modos degradados.

---

## 543. Contenção de longo prazo

Deverá manter proteção até que:

- causa seja compreendida;
- correção seja implementada;
- vulnerabilidade seja tratada;
- ambiente seguro esteja disponível;
- retorno seja aprovado.

---

## 544. Autoridade de contenção

A organização deverá definir quem poderá conter:

- identidade;
- sessão;
- dispositivo;
- agente;
- serviço;
- integração;
- ambiente;
- organização participante;
- missão;
- recurso financeiro.

---

## 545. Contenção automática

Poderá ocorrer quando:

- a ameaça for conhecida;
- a evidência for suficiente;
- a velocidade do risco for elevada;
- a ação for limitada;
- o efeito for reversível;
- houver observabilidade;
- existirem critérios de parada.

---

## 546. Contenção supervisionada

A automação poderá preparar ou iniciar contenção sujeita à confirmação humana.

Deverá apresentar:

- alvo;
- motivo;
- evidências;
- impacto esperado;
- dependências;
- possibilidade de reversão;
- alternativas.

---

## 547. Contenção manual

A contenção manual deverá possuir:

- procedimento;
- autoridade;
- ferramentas;
- comunicação;
- registro;
- validação;
- alternativa diante de falha.

---

## 548. Contenção proporcional

A resposta deverá considerar o impacto da própria contenção.

Bloquear um componente comprometido não deverá causar dano maior sem avaliação e autoridade correspondentes.

---

## 549. Contenção conservadora

Quando a compreensão for incompleta, deverá ser preferida ação que:

- preserve vida;
- reduza propagação;
- evite alteração irreversível;
- preserve evidências;
- mantenha alternativas;
- permita revisão.

---

## 550. Isolamento

Isolamento separa componente, identidade, ambiente ou domínio do restante da operação.

---

## 551. Isolamento de identidade

Poderá incluir:

- suspensão de conta;
- encerramento de sessões;
- revogação de tokens;
- remoção de privilégios;
- exigência de nova verificação;
- bloqueio de delegações.

---

## 552. Isolamento de dispositivo

Poderá restringir:

- rede;
- aplicações;
- dados;
- credenciais;
- sincronização;
- comunicação;
- acesso físico.

---

## 553. Isolamento de serviço

Deverá considerar:

- dependências;
- funções essenciais;
- filas;
- dados;
- integrações;
- usuários;
- alternativas;
- recuperação.

---

## 554. Isolamento de agente

Um agente suspeito deverá perder:

- novas missões;
- ferramentas;
- credenciais;
- memória compartilhada;
- comunicação com outros agentes;
- capacidade de delegação;
- autoridade executiva.

---

## 555. Isolamento de memória

Memórias suspeitas deverão ser:

- separadas;
- marcadas;
- preservadas;
- impedidas de influenciar novas decisões;
- investigadas;
- reconciliadas.

---

## 556. Isolamento federado

Uma organização participante poderá ser temporariamente desconectada quando houver risco de propagação.

A ação deverá respeitar:

- contrato;
- autoridade;
- impacto;
- continuidade;
- evidências;
- comunicação;
- reintegração futura.

---

## 557. Segmentação emergencial

A rede ou operação poderá ser reorganizada temporariamente para limitar o alcance do incidente.

---

## 558. Bloqueio

O bloqueio deverá possuir:

- alvo;
- motivo;
- autoridade;
- duração;
- evidência;
- critério de revisão;
- impacto;
- possibilidade de contestação quando aplicável.

---

## 559. Lista de bloqueio

Listas deverão ser:

- atualizadas;
- verificadas;
- temporais;
- justificadas;
- protegidas;
- revisáveis.

---

## 560. Lista de permissão

Permitir somente entidades conhecidas poderá reduzir exposição em ambientes críticos.

A lista deverá possuir proprietário e processo de atualização.

---

## 561. Revogação emergencial

Credenciais e autoridades deverão poder ser revogadas rapidamente.

A revogação deverá alcançar:

- sessões;
- tokens;
- chaves;
- certificados;
- caches;
- integrações;
- delegações;
- ambientes federados.

---

## 562. Suspensão de automação

Automações poderão ser suspensas quando:

- contexto estiver comprometido;
- ferramenta estiver insegura;
- ação estiver produzindo dano;
- política não puder ser aplicada;
- supervisão estiver ausente;
- evidência for insuficiente.

---

## 563. Suspensão de agente

A suspensão deverá preservar:

- estado;
- missões;
- ações realizadas;
- memória;
- evidências;
- credenciais;
- dependências;
- possibilidade de investigação.

---

## 564. Interrupção segura

A interrupção deverá evitar:

- corrupção;
- perda de estado;
- duplicidade;
- ação parcial desconhecida;
- abandono de pessoas;
- destruição de evidências;
- falha em cascata.

---

## 565. Contenção financeira

Poderá incluir:

- bloqueio de transação;
- suspensão de carteira;
- limite temporário;
- dupla aprovação;
- reconciliação;
- comunicação antifraude;
- preservação de registros.

---

## 566. Contenção de dados

Poderá incluir:

- suspensão de acesso;
- congelamento;
- cópia protegida;
- isolamento de conjunto;
- interrupção de compartilhamento;
- revogação de exportações;
- validação de integridade.

---

## 567. Contenção física

Poderá exigir:

- evacuação;
- isolamento de área;
- desligamento;
- bloqueio de energia;
- proteção coletiva;
- parada de equipamento;
- acionamento de emergência;
- profissional habilitado.

---

## 568. Normas Regulamentadoras na contenção

A contenção de risco físico deverá respeitar as NRs aplicáveis.

Urgência não deverá autorizar pessoa não qualificada a realizar intervenção técnica perigosa.

---

## 569. Contenção cognitiva

Quando houver desinformação ou manipulação, poderá ser necessário:

- interromper propagação;
- preservar conteúdo;
- verificar fontes;
- comunicar correção;
- proteger pessoas vulneráveis;
- suspender recomendações automatizadas.

---

## 570. Contenção de comunicação

A restrição de comunicação deverá ser proporcional e não poderá ser utilizada para ocultar incidente ou impedir denúncia legítima.

---

## 571. Validação da contenção

Após conter, deverá ser verificado:

- se a propagação cessou;
- se o acesso foi removido;
- se funções essenciais permanecem;
- se evidências foram preservadas;
- se novos riscos surgiram;
- se o controle continua ativo.

---

## 572. Falha de contenção

Quando a contenção falhar, a resposta deverá:

- reconhecer;
- reclassificar o incidente;
- ampliar recursos;
- alterar estratégia;
- escalar autoridade;
- comunicar;
- preservar evidências da falha.

---

## 573. Contenção excessiva

Ações excessivas poderão:

- interromper serviços essenciais;
- prejudicar pessoas;
- destruir evidências;
- ampliar crise;
- gerar dano financeiro;
- reduzir confiança;
- violar direitos.

---

## 574. Revisão da contenção

Controles temporários deverão ser revisados quanto a:

- necessidade;
- eficácia;
- impacto;
- duração;
- proporcionalidade;
- substituição;
- encerramento.

---

## 575. Erradicação

Erradicação é o processo de remover ou neutralizar a causa técnica ou operacional que permite a continuidade da ameaça.

---

## 576. Escopo da erradicação

Poderá envolver:

- código malicioso;
- credencial comprometida;
- configuração insegura;
- vulnerabilidade;
- conta indevida;
- acesso persistente;
- dado contaminado;
- instrução maliciosa;
- agente comprometido;
- processo inadequado.

---

## 577. Erradicação não destrutiva

Sempre que possível, a ameaça deverá ser removida sem destruir informações necessárias à investigação e à continuidade.

---

## 578. Ordem das ações

A erradicação deverá ser coordenada para evitar que o responsável pela ameaça:

- perceba prematuramente;
- se desloque;
- destrua evidências;
- amplie o ataque;
- utilize acesso alternativo.

---

## 579. Remoção de persistência

Deverão ser investigados mecanismos que permitam retorno, como:

- contas;
- chaves;
- tarefas;
- serviços;
- integrações;
- agentes;
- tokens;
- alterações de configuração;
- dependências contaminadas.

---

## 580. Correção de vulnerabilidade

A correção deverá incluir:

- identificação;
- versão;
- teste;
- implantação;
- validação;
- monitoramento;
- evidência;
- tratamento de componentes equivalentes.

---

## 581. Vulnerabilidade sem correção disponível

Deverão ser aplicados controles como:

- isolamento;
- desativação;
- restrição;
- monitoramento;
- substituição;
- controle compensatório;
- aceitação temporária formal.

---

## 582. Rotação de credenciais

A rotação deverá considerar todas as credenciais potencialmente expostas, inclusive:

- humanas;
- técnicas;
- de agentes;
- federadas;
- temporárias;
- armazenadas em backup;
- utilizadas em integração.

---

## 583. Reconstrução segura

Em alguns casos, reconstruir o ambiente a partir de referência confiável será mais seguro do que tentar limpar o componente comprometido.

---

## 584. Fonte confiável de reconstrução

A reconstrução deverá utilizar:

- configuração aprovada;
- imagem verificada;
- artefato assinado;
- dependências validadas;
- credenciais novas;
- dados reconciliados;
- procedimento testado.

---

## 585. Erradicação de memória contaminada

Deverá identificar:

- registros afetados;
- origem;
- derivações;
- agentes consumidores;
- decisões influenciadas;
- cópias;
- necessidade de correção.

---

## 586. Erradicação em modelos e agentes

Quando houver contaminação cognitiva, poderá ser necessário:

- substituir instruções;
- remover memória;
- trocar modelo;
- revogar ferramenta;
- reconstruir índice;
- revalidar conhecimento;
- suspender aprendizagem;
- retestar capacidades.

---

## 587. Validação da erradicação

Deverá demonstrar que:

- ameaça foi removida;
- persistências foram tratadas;
- vulnerabilidade foi reduzida;
- credenciais foram renovadas;
- comportamento anômalo cessou;
- ambientes equivalentes foram verificados.

---

## 588. Investigação

Investigação é o processo estruturado de compreender:

- o que ocorreu;
- quando;
- como;
- por quê;
- quem ou o que participou;
- quais ativos foram afetados;
- quais consequências surgiram;
- quais responsabilidades existem.

---

## 589. Objetivo da investigação

A investigação deverá apoiar:

- contenção;
- erradicação;
- recuperação;
- comunicação;
- reparação;
- responsabilização;
- conformidade;
- aprendizagem.

---

## 590. Imparcialidade

A investigação deverá evitar conclusões determinadas previamente por:

- interesse;
- pressão;
- reputação;
- hierarquia;
- conveniência;
- conflito de responsabilidade;
- resultado esperado.

---

## 591. Autoridade investigativa

O investigador deverá possuir autoridade para acessar o necessário, dentro de:

- finalidade;
- escopo;
- proporcionalidade;
- privacidade;
- cadeia de custódia;
- obrigação legal;
- supervisão.

---

## 592. Escopo da investigação

Deverá definir:

- incidente;
- período;
- ativos;
- pessoas;
- organizações;
- sistemas;
- dados;
- hipóteses;
- limites;
- responsáveis.

---

## 593. Hipótese investigativa

Hipóteses deverão ser:

- explícitas;
- verificáveis;
- revisáveis;
- relacionadas a evidências;
- distinguíveis de conclusões.

---

## 594. Investigação técnica

Poderá analisar:

- sistemas;
- rede;
- aplicações;
- código;
- configurações;
- identidades;
- dispositivos;
- dados;
- agentes;
- integrações.

---

## 595. Investigação operacional

Deverá analisar:

- decisões;
- procedimentos;
- autoridade;
- comunicação;
- supervisão;
- handovers;
- controles;
- contingência;
- resposta.

---

## 596. Investigação humana

Poderá envolver:

- entrevistas;
- relatos;
- registros;
- jornadas;
- treinamento;
- condições de trabalho;
- fadiga;
- pressão;
- coerção;
- conflitos.

A pessoa não deverá ser presumida culpada por ser o ponto visível da falha.

---

## 597. Investigação institucional

Deverá avaliar:

- governança;
- incentivos;
- recursos;
- responsabilidades;
- cultura;
- contratos;
- fornecedores;
- aceitação de risco;
- decisões anteriores.

---

## 598. Investigação multiagente

Deverá reconstruir:

- mensagens;
- delegações;
- ferramentas;
- memórias;
- conflitos;
- verificações;
- coordenação;
- propagação;
- responsabilidades.

---

## 599. Investigação federada

Organizações deverão cooperar conforme:

- contrato;
- autoridade;
- jurisdição;
- finalidade;
- privacidade;
- segurança;
- cadeia de custódia;
- responsabilidade.

---

## 600. Forense digital

A análise forense deverá preservar e examinar evidências digitais de maneira:

- íntegra;
- reproduzível;
- documentada;
- autorizada;
- tecnicamente adequada;
- juridicamente compatível.

---

## 601. Forense física

Poderá envolver:

- local;
- equipamento;
- documento;
- acesso;
- sinal;
- dano;
- material;
- imagem;
- testemunho.

---

## 602. Preservação antes da análise

A coleta deverá evitar alterar desnecessariamente o objeto original.

Quando alteração for inevitável, deverá ser documentada.

---

## 603. Imagem forense

Cópias técnicas deverão possuir mecanismos para demonstrar:

- origem;
- integridade;
- momento;
- responsável;
- método;
- correspondência com o objeto.

---

## 604. Evidência

Evidência é informação capaz de apoiar a demonstração de fato, ação, estado, relação ou responsabilidade.

---

## 605. Tipos de evidência

Poderão incluir:

- registros;
- eventos;
- mensagens;
- arquivos;
- imagens;
- vídeos;
- telemetria;
- decisões;
- autorizações;
- documentos;
- depoimentos;
- estados;
- objetos físicos.

---

## 606. Evidência primária

É obtida diretamente da fonte ou do objeto relacionado ao evento.

---

## 607. Evidência derivada

É produzida por:

- análise;
- correlação;
- síntese;
- transformação;
- extração;
- inferência.

Deverá preservar relação com as fontes originais.

---

## 608. Evidência produzida por agente

Conteúdo produzido por inteligência artificial deverá indicar:

- agente;
- versão;
- instrução;
- fontes;
- contexto;
- ferramentas;
- método;
- limitações.

A síntese do agente não substituirá a evidência original.

---

## 609. Autenticidade da evidência

Deverá ser possível demonstrar que a evidência é aquilo que afirma ser.

---

## 610. Integridade da evidência

Deverão existir mecanismos capazes de indicar alterações.

---

## 611. Relevância da evidência

A evidência deverá possuir relação compreensível com a questão investigada.

---

## 612. Suficiência da evidência

Conclusões deverão considerar se a quantidade e a qualidade das evidências são adequadas.

---

## 613. Confiabilidade da evidência

Deverá considerar:

- origem;
- método;
- integridade;
- contexto;
- independência;
- possibilidade de erro;
- possibilidade de manipulação.

---

## 614. Evidência contraditória

Contradições deverão ser preservadas e investigadas.

Não deverão ser apagadas para produzir narrativa simples.

---

## 615. Ausência de evidência

Ausência de registro poderá significar:

- evento não ocorrido;
- falha de coleta;
- exclusão;
- alteração;
- ponto cego;
- retenção inadequada.

Não deverá ser interpretada isoladamente.

---

## 616. Cadeia de custódia

A cadeia de custódia deverá registrar:

- coleta;
- responsável;
- momento;
- localização;
- método;
- transferência;
- acesso;
- análise;
- armazenamento;
- destinação.

---

## 617. Coleta de evidência

A coleta deverá ser:

- autorizada;
- proporcional;
- documentada;
- segura;
- adequada ao tipo;
- compatível com privacidade e obrigações.

---

## 618. Armazenamento de evidência

Deverá proteger contra:

- alteração;
- destruição;
- acesso indevido;
- perda;
- exposição;
- mistura;
- expiração prematura.

---

## 619. Acesso à evidência

Somente identidades autorizadas deverão acessar conforme:

- papel;
- finalidade;
- investigação;
- sensibilidade;
- obrigação;
- necessidade.

---

## 620. Transferência de evidência

A transferência deverá preservar:

- integridade;
- identidade;
- destinatário;
- momento;
- finalidade;
- confirmação;
- cadeia de custódia.

---

## 621. Retenção de evidência

O prazo deverá considerar:

- investigação;
- contestação;
- obrigação legal;
- reparação;
- auditoria;
- memória institucional;
- minimização.

---

## 622. Descarte de evidência

O descarte deverá ser:

- autorizado;
- documentado;
- seguro;
- compatível com retenções;
- verificável.

---

## 623. Privacidade na investigação

A investigação deverá limitar coleta e acesso ao necessário.

Não deverá utilizar incidente como oportunidade para vigilância ampla e sem finalidade.

---

## 624. Dados sensíveis na evidência

Deverão receber proteção reforçada e acesso estritamente limitado.

---

## 625. Sigilo investigativo

O sigilo poderá proteger:

- pessoas;
- investigação;
- evidências;
- segurança;
- direitos;
- estratégia de contenção.

Não deverá ser utilizado para ocultar responsabilidade ou impedir comunicação obrigatória.

---

## 626. Entrevista

Entrevistas deverão preservar:

- respeito;
- propósito;
- registro;
- voluntariedade ou autoridade aplicável;
- direito de esclarecimento;
- proteção contra intimidação;
- distinção entre fato e interpretação.

---

## 627. Testemunho

Relatos humanos deverão ser avaliados com respeito às limitações de:

- memória;
- percepção;
- contexto;
- pressão;
- tempo;
- linguagem;
- interesse.

---

## 628. Linha do tempo investigativa

A investigação deverá consolidar:

- fatos confirmados;
- eventos;
- decisões;
- ações;
- mudanças;
- comunicações;
- lacunas;
- hipóteses.

---

## 629. Causa imediata

É a condição diretamente associada ao evento observado.

---

## 630. Causa raiz

A análise deverá buscar fatores estruturais que permitiram ou ampliaram o incidente.

Uma única causa raiz poderá não existir.

---

## 631. Fator contribuinte

Poderá incluir:

- configuração;
- processo;
- treinamento;
- ferramenta;
- supervisão;
- pressão;
- dependência;
- incentivo;
- comunicação;
- governança.

---

## 632. Análise sistêmica

A investigação deverá considerar interações entre:

- pessoas;
- tecnologia;
- processos;
- organizações;
- ambiente;
- políticas;
- fornecedores;
- objetivos.

---

## 633. Culpabilização prematura

A busca imediata por culpado poderá:

- ocultar causas;
- impedir denúncia;
- destruir confiança;
- reduzir aprendizagem;
- proteger fragilidades sistêmicas.

---

## 634. Responsabilização

A ausência de culpabilização automática não elimina a necessidade de apurar:

- dolo;
- fraude;
- abuso;
- negligência;
- descumprimento;
- responsabilidade institucional.

---

## 635. Relatório investigativo

Deverá apresentar:

- escopo;
- método;
- fatos;
- evidências;
- limitações;
- linha do tempo;
- causas;
- impactos;
- responsabilidades;
- recomendações;
- pendências.

---

## 636. Nível de confiança da conclusão

Conclusões deverão indicar se são:

- confirmadas;
- altamente prováveis;
- prováveis;
- possíveis;
- inconclusivas;
- refutadas.

---

## 637. Comunicação durante o incidente

A comunicação deverá proteger pessoas e apoiar coordenação sem produzir:

- desinformação;
- pânico;
- acusação prematura;
- exposição indevida;
- contradição;
- falsa normalidade.

---

## 638. Princípios da comunicação

A comunicação deverá ser:

- verdadeira;
- clara;
- tempestiva;
- proporcional;
- acessível;
- responsável;
- coerente;
- atualizável.

---

## 639. Comunicação interna

Deverá informar às equipes:

- estado;
- impacto;
- comportamento esperado;
- restrições;
- canais;
- segurança;
- próximos passos.

---

## 640. Comunicação às pessoas afetadas

Deverá informar, quando aplicável:

- o que ocorreu;
- como poderão ser afetadas;
- quais ações foram tomadas;
- o que devem fazer;
- onde obter ajuda;
- como contestar;
- quando haverá atualização.

---

## 641. Comunicação pública

Deverá ser coordenada por autoridade reconhecida e considerar:

- interesse público;
- precisão;
- investigação;
- segurança;
- obrigações;
- confiança;
- acessibilidade.

---

## 642. Comunicação regulatória

Obrigações de notificação deverão ser identificadas conforme:

- incidente;
- dado;
- setor;
- território;
- organização;
- prazo;
- autoridade competente.

---

## 643. Comunicação a parceiros

Parceiros deverão receber informação suficiente para:

- proteger seus ambientes;
- conter propagação;
- preservar evidências;
- cumprir obrigações;
- apoiar recuperação.

---

## 644. Comunicação a fornecedores

Fornecedores deverão ser acionados conforme:

- contrato;
- criticidade;
- suporte;
- responsabilidade;
- necessidade técnica;
- preservação de evidências.

---

## 645. Porta-voz

O porta-voz deverá possuir:

- informação validada;
- autoridade;
- orientação;
- acesso a atualizações;
- compreensão das limitações;
- coordenação com a resposta.

---

## 646. Mensagem provisória

Quando ainda houver incerteza, a mensagem deverá declarar claramente:

- o que é conhecido;
- o que não é conhecido;
- o que está sendo feito;
- quando haverá atualização.

---

## 647. Correção pública

Informação incorreta deverá ser corrigida com:

- clareza;
- alcance proporcional;
- explicação;
- atualização de canais;
- preservação do histórico quando adequado.

---

## 648. Comunicação fraudulenta durante incidente

A Plataforma UNO deverá proteger canais contra personificação e mensagens falsas.

---

## 649. Canal oficial verificável

Pessoas deverão conseguir reconhecer:

- domínio;
- identidade;
- assinatura;
- perfil;
- número;
- código;
- forma de confirmação.

---

## 650. Comunicação acessível

Mensagens deverão considerar:

- linguagem simples;
- tradução;
- deficiência;
- voz;
- texto;
- conexão limitada;
- canais não digitais;
- urgência.

---

## 651. Comunicação com crianças e adolescentes

Deverá utilizar linguagem e proteção compatíveis com idade, melhor interesse e participação responsável.

---

## 652. Comunicação com pessoas vulneráveis

Deverá evitar exploração de medo e oferecer orientação concreta e apoio humano.

---

## 653. Recuperação

Recuperação é o processo de restaurar capacidades, serviços, dados, confiança e condições legítimas de operação.

---

## 654. Recuperação segura

O retorno não deverá reintroduzir:

- ameaça;
- vulnerabilidade;
- credencial exposta;
- configuração insegura;
- memória contaminada;
- dado incorreto;
- dependência comprometida.

---

## 655. Objetivo de recuperação

Deverá restabelecer:

- funções essenciais;
- integridade;
- autoridade;
- identidade;
- disponibilidade;
- segurança;
- observabilidade;
- continuidade;
- confiança verificável.

---

## 656. Prioridade de recuperação

A ordem deverá considerar:

- vida;
- pessoas afetadas;
- missão;
- funções essenciais;
- dependências;
- integridade;
- risco;
- evidências;
- impacto público.

---

## 657. Plano de recuperação do incidente

Deverá definir:

- escopo;
- ordem;
- responsáveis;
- recursos;
- dependências;
- validações;
- critérios de retorno;
- comunicação;
- contingência;
- possibilidade de reversão.

---

## 658. Ambiente limpo

A recuperação deverá ocorrer em ambiente cuja integridade tenha sido estabelecida.

---

## 659. Restauração de dados

Deverá considerar:

- ponto confiável;
- integridade;
- consistência;
- perda aceitável;
- contaminação;
- reconciliação;
- validação;
- evidência.

---

## 660. Restauração de identidade

Poderá exigir:

- reverificação;
- nova credencial;
- encerramento de sessões;
- revisão de autoridade;
- comunicação;
- monitoramento reforçado.

---

## 661. Restauração de agente

O agente somente deverá retornar após validação de:

- identidade;
- versão;
- instruções;
- memória;
- ferramentas;
- credenciais;
- políticas;
- comportamento;
- supervisão.

---

## 662. Restauração de integração

Deverá verificar:

- parceiro;
- contrato;
- credenciais;
- mensagens pendentes;
- duplicidades;
- estado;
- segurança;
- sincronização.

---

## 663. Retorno progressivo

A capacidade deverá ser restabelecida gradualmente quando o risco justificar.

---

## 664. Operação canário

Parte limitada da operação poderá retornar primeiro para permitir observação e validação.

---

## 665. Monitoramento reforçado

Após o retorno, deverão ser observados:

- recorrência;
- comportamento;
- falha;
- desempenho;
- integridade;
- acessos;
- dependências;
- experiência das pessoas.

---

## 666. Critério de retorno

O retorno deverá exigir evidência de que:

- ameaça foi contida;
- causa foi tratada;
- ambiente está íntegro;
- credenciais estão seguras;
- dados foram validados;
- controles estão ativos;
- supervisão está disponível;
- risco residual foi aceito legitimamente.

---

## 667. Autoridade para retorno

O retorno deverá ser aprovado por autoridade compatível com a severidade e o impacto.

---

## 668. Retorno parcial

Capacidades não validadas deverão permanecer:

- suspensas;
- limitadas;
- manuais;
- em contingência;
- sob supervisão reforçada.

---

## 669. Falha de recuperação

A falha deverá produzir:

- interrupção;
- retorno ao estado seguro;
- reavaliação;
- investigação;
- comunicação;
- revisão do plano;
- preservação de evidências.

---

## 670. Reabertura do incidente

O incidente deverá ser reaberto quando:

- houver recorrência;
- contenção falhar;
- impacto novo surgir;
- evidência alterar conclusão;
- recuperação revelar comprometimento residual.

---

## 671. Reparação

Reparação é o processo de reconhecer e tratar efeitos produzidos sobre pessoas, organizações, recursos, direitos e confiança.

---

## 672. Reparação técnica

Poderá incluir:

- correção;
- restauração;
- reconciliação;
- reversão;
- substituição;
- compensação;
- proteção adicional.

---

## 673. Reparação humana

Poderá incluir:

- acolhimento;
- informação;
- proteção;
- assistência;
- correção de registro;
- restauração de acesso;
- compensação;
- pedido institucional de desculpas.

---

## 674. Reparação financeira

Deverá considerar:

- devolução;
- estorno;
- recomposição;
- indenização;
- correção de rateio;
- restituição;
- custos produzidos pelo incidente.

---

## 675. Reparação reputacional

Informações falsas ou injustas deverão ser corrigidas nos sistemas e canais em que produziram efeito.

---

## 676. Reparação de identidade

Poderá exigir:

- remoção de associação indevida;
- restauração de vínculo;
- correção de papel;
- emissão de credenciais;
- proteção contra nova personificação;
- comunicação a parceiros.

---

## 677. Reparação de decisão automatizada

Quando decisão for afetada por incidente, deverão ser identificados:

- casos impactados;
- pessoas;
- resultados;
- efeitos derivados;
- necessidade de revisão;
- correção;
- comunicação.

---

## 678. Reparação coletiva

Incidentes que afetem comunidades deverão considerar medidas coletivas, e não apenas respostas individuais isoladas.

---

## 679. Reparação proativa

Quando o impacto for conhecido, a organização não deverá esperar exclusivamente que cada pessoa prejudicada solicite correção.

---

## 680. Prioridade da reparação

Deverá considerar:

- gravidade;
- vulnerabilidade;
- urgência;
- irreversibilidade;
- duração;
- alcance;
- necessidade humana.

---

## 681. Evidência de reparação

A reparação deverá produzir registros de:

- impacto;
- medida;
- responsável;
- destinatário;
- momento;
- resultado;
- pendência;
- aceitação ou contestação.

---

## 682. Contestação da reparação

A pessoa afetada deverá poder informar quando a medida não corrigiu adequadamente o impacto.

---

## 683. Recuperação da confiança

A confiança poderá ser fortalecida por:

- verdade;
- transparência;
- responsabilidade;
- reparação;
- mudança verificável;
- continuidade;
- participação;
- ausência de recorrência.

---

## 684. Encerramento do incidente

O incidente somente deverá ser encerrado quando houver compreensão e tratamento suficientes de:

- contenção;
- erradicação;
- recuperação;
- impacto;
- evidências;
- comunicação;
- reparação;
- risco residual;
- pendências;
- aprendizagem.

---

## 685. Encerramento técnico

Confirma que componentes e serviços retornaram a estado aprovado ou contingência aceita.

---

## 686. Encerramento operacional

Confirma que missões, usuários, equipes e dependências possuem condições adequadas de continuidade.

---

## 687. Encerramento institucional

Confirma que responsabilidades, comunicações, obrigações e decisões de risco foram tratadas.

---

## 688. Encerramento humano

Confirma que pessoas afetadas receberam proteção, informação e encaminhamento compatíveis com o impacto conhecido.

---

## 689. Critério de encerramento

Deverá ser definido e aprovado por autoridade compatível com a severidade.

---

## 690. Pendência pós-encerramento

Algumas ações poderão continuar após o encerramento operacional.

Deverão possuir:

- proprietário;
- prazo;
- prioridade;
- acompanhamento;
- evidência;
- escalonamento.

---

## 691. Incidente encerrado com risco aceito

O risco residual deverá ser explicitamente documentado, aprovado e revisado.

---

## 692. Encerramento indevido

O incidente não deverá ser encerrado apenas para:

- cumprir prazo;
- reduzir indicador;
- proteger reputação;
- liberar equipe;
- ocultar impacto;
- evitar obrigação;
- eliminar visibilidade.

---

## 693. Revisão pós-incidente

A revisão deverá reconstruir:

- contexto;
- linha do tempo;
- detecção;
- decisões;
- contenção;
- investigação;
- recuperação;
- comunicação;
- reparação;
- resultados.

---

## 694. Revisão sem culpabilização automática

A revisão deverá criar ambiente para verdade e aprendizagem, preservando responsabilização adequada.

---

## 695. Participantes da revisão

Poderão incluir:

- operação;
- segurança;
- tecnologia;
- pessoas afetadas;
- agentes;
- fornecedores;
- parceiros;
- jurídico;
- privacidade;
- continuidade;
- direção.

---

## 696. Perguntas da revisão

A revisão deverá perguntar:

- o que esperávamos;
- o que ocorreu;
- o que detectamos;
- o que não vimos;
- por que decidimos;
- o que funcionou;
- o que falhou;
- quem foi afetado;
- o que deverá mudar.

---

## 697. Controle eficaz

Controles que funcionaram deverão ser reconhecidos, preservados e, quando adequado, ampliados.

---

## 698. Controle ineficaz

Deverá ser analisado quanto a:

- desenho;
- implantação;
- configuração;
- cobertura;
- operação;
- manutenção;
- contexto;
- dependências.

---

## 699. Oportunidade de melhoria

Cada melhoria deverá possuir:

- descrição;
- justificativa;
- proprietário;
- prazo;
- prioridade;
- recurso;
- critério de conclusão;
- evidência.

---

## 700. Acompanhamento das melhorias

A revisão não deverá terminar na publicação do relatório.

As ações deverão permanecer acompanhadas até conclusão ou aceitação legítima.

---

## 701. Memória do incidente

A memória deverá preservar:

- fatos;
- decisões;
- impactos;
- erros;
- reparações;
- melhorias;
- responsáveis;
- lições;
- mudanças.

---

## 702. Anonimização para aprendizagem

Conteúdos poderão ser adaptados para treinamento e compartilhamento sem exposição desnecessária das pessoas.

---

## 703. Atualização de procedimentos

Runbooks, playbooks e planos deverão ser revisados a partir das lições verificadas.

---

## 704. Atualização de agentes e automações

Mudanças deverão seguir:

- proposta;
- teste;
- aprovação;
- versionamento;
- implantação progressiva;
- observação;
- possibilidade de reversão.

---

## 705. Atualização do mapa de impacto

O incidente deverá revelar dependências e consequências antes desconhecidas.

Essas descobertas deverão atualizar o arquivo e os registros derivados do modelo de dependências.

---

## 706. Invariante de contenção

A contenção deverá limitar dano sem destruir desnecessariamente vida, direitos, evidências ou continuidade.

---

## 707. Invariante de erradicação

A ameaça não deverá ser considerada removida sem validação de persistências, vulnerabilidades e ambientes equivalentes.

---

## 708. Invariante de investigação

Hipóteses, fatos, evidências e conclusões deverão permanecer distinguíveis.

---

## 709. Invariante de evidência

Nenhuma síntese, inclusive produzida por agente, deverá substituir a evidência original.

---

## 710. Invariante de cadeia de custódia

Toda evidência relevante deverá possuir origem, integridade, acesso, transferência e destinação rastreáveis.

---

## 711. Invariante de privacidade investigativa

A investigação deverá acessar somente aquilo que possuir finalidade, necessidade, autoridade e proporcionalidade.

---

## 712. Invariante de comunicação

A comunicação deverá ser verdadeira, tempestiva, acessível e compatível com o conhecimento disponível.

---

## 713. Invariante de recuperação

Nenhuma capacidade deverá retornar carregando ameaça, credencial comprometida, dado contaminado ou configuração insegura conhecida.

---

## 714. Invariante de reparação

O encerramento técnico não deverá apagar impactos humanos, financeiros, reputacionais ou institucionais ainda não tratados.

---

## 715. Invariante de encerramento

Incidentes não deverão ser encerrados para melhorar métricas ou ocultar pendências.

---

## 716. Invariante de aprendizagem

Toda melhoria derivada de incidente deverá possuir proprietário, prazo, evidência e acompanhamento.

---

## 717. Resultado do quarto lote

Com este lote, a Engenharia Oficial estabelece que a resposta operacional deverá:

- conter com proporcionalidade;
- isolar sem perder controle;
- erradicar sem destruir evidências;
- investigar com imparcialidade;
- preservar cadeia de custódia;
- comunicar com verdade;
- recuperar em ambiente confiável;
- retornar progressivamente;
- reparar impactos;
- encerrar somente com critérios;
- transformar incidentes em aprendizagem verificável.

O próximo lote aprofundará:

- segurança humana;
- segurança física;
- saúde e segurança do trabalho;
- proteção comunitária;
- segurança federada;
- terceiros;
- fornecedores;
- cadeia de suprimentos;
- governança;
- conformidade;
- responsabilidades;
- continuidade da função de segurança.

---

# Lote 5 — Segurança Humana, Física, Federada, Fornecedores, Conformidade e Governança

## 718. Segurança humana

Segurança humana é a capacidade institucional de proteger pessoas durante o planejamento, a execução, a supervisão, a interrupção e a recuperação das operações.

Deverá considerar:

- vida;
- saúde;
- dignidade;
- liberdade;
- privacidade;
- integridade física;
- integridade emocional;
- condições de trabalho;
- capacidade de participação;
- possibilidade de defesa;
- acesso a ajuda.

---

## 719. Pessoa como sujeito

A pessoa não deverá ser tratada apenas como:

- recurso;
- identidade;
- operador;
- fonte de dados;
- elemento de risco;
- ativo;
- consumidor;
- executor.

Ela permanecerá sujeito de direitos, necessidades, responsabilidades, limitações e capacidades próprias.

---

## 720. Segurança centrada na pessoa

Controles deverão ser avaliados também quanto a seus efeitos sobre:

- compreensão;
- acesso;
- autonomia;
- confiança;
- bem-estar;
- inclusão;
- trabalho;
- participação;
- desenvolvimento.

---

## 721. Proteção contra dano

A arquitetura deverá prevenir ou reduzir danos:

- físicos;
- emocionais;
- financeiros;
- reputacionais;
- informacionais;
- profissionais;
- sociais;
- institucionais.

---

## 722. Vulnerabilidade humana contextual

A vulnerabilidade poderá aumentar diante de:

- emergência;
- pressão;
- doença;
- deficiência;
- exclusão digital;
- pobreza;
- violência;
- assimetria de informação;
- dependência;
- isolamento;
- fadiga;
- medo.

---

## 723. Proteção ampliada

Quanto maior a vulnerabilidade, maior deverá ser:

- o cuidado;
- a clareza;
- a supervisão;
- a possibilidade de ajuda;
- a proteção contra manipulação;
- a acessibilidade;
- a facilidade de contestação.

---

## 724. Segurança psicológica

Pessoas deverão poder:

- comunicar erro;
- apontar risco;
- discordar;
- interromper;
- pedir ajuda;
- revelar dúvida;
- denunciar;
- propor melhoria;

sem medo de retaliação automática.

---

## 725. Cultura de silêncio

A organização deverá reconhecer sinais como:

- incidentes não registrados;
- normalização de desvios;
- medo de liderança;
- punição por alertas;
- encobrimento;
- ausência de divergência;
- decisões sem contestação.

---

## 726. Fadiga

A fadiga poderá comprometer:

- percepção;
- julgamento;
- memória;
- coordenação;
- resposta;
- supervisão;
- segurança física;
- resistência à manipulação.

---

## 727. Carga cognitiva

Interfaces e procedimentos deverão evitar sobrecarregar pessoas com:

- alertas excessivos;
- informações desorganizadas;
- confirmações repetitivas;
- linguagem ambígua;
- múltiplos painéis;
- mudanças inesperadas;
- decisões simultâneas.

---

## 728. Pressão temporal

Urgência deverá ser utilizada somente quando real.

Pressão artificial poderá induzir:

- erro;
- fraude;
- consentimento inadequado;
- desativação de controles;
- decisão impulsiva;
- perda de evidência.

---

## 729. Engenharia social humana

Treinamentos deverão preparar pessoas para reconhecer:

- personificação;
- urgência fabricada;
- autoridade falsa;
- solicitação de segredo;
- ameaça;
- promessa;
- manipulação emocional;
- pedido incomum;
- desvio de procedimento.

---

## 730. Verificação fora do canal

Solicitações críticas ou incomuns deverão poder ser confirmadas por canal independente.

---

## 731. Coerção

A operação deverá possuir meios para reconhecer quando pessoa autorizada está agindo sob:

- ameaça;
- chantagem;
- pressão;
- violência;
- manipulação;
- conflito.

---

## 732. Ameaça interna humana

A resposta deverá diferenciar:

- erro;
- desconhecimento;
- imprudência;
- negligência;
- abuso;
- fraude;
- coerção;
- comprometimento de credencial.

---

## 733. Monitoramento de trabalhadores

O monitoramento deverá respeitar:

- finalidade;
- necessidade;
- proporcionalidade;
- transparência;
- privacidade;
- legislação;
- dignidade;
- segurança.

Não deverá transformar trabalho em vigilância integral.

---

## 734. Avaliação de comportamento

Comportamentos anormais não deverão gerar acusação automática.

Deverão ser contextualizados e revisados por autoridade competente.

---

## 735. Proteção do denunciante

A organização deverá proteger pessoas que comuniquem, de boa-fé:

- fraude;
- abuso;
- risco;
- vulnerabilidade;
- descumprimento;
- incidente;
- ameaça à vida;
- violação de direitos.

---

## 736. Treinamento de segurança

O treinamento deverá ser:

- relacionado ao papel;
- periódico;
- acessível;
- contextual;
- verificável;
- atualizado;
- prático;
- proporcional ao risco.

---

## 737. Treinamento de liderança

Lideranças deverão compreender:

- responsabilidade;
- autoridade;
- risco;
- incidentes;
- comunicação;
- continuidade;
- segurança humana;
- obrigação de interromper;
- prestação de contas.

---

## 738. Treinamento de operadores

Operadores deverão saber:

- reconhecer sinais;
- usar ferramentas;
- seguir procedimentos;
- preservar evidências;
- escalar;
- conter;
- comunicar;
- operar em contingência.

---

## 739. Treinamento de desenvolvedores

Deverá incluir:

- segurança por concepção;
- identidade;
- acesso;
- dados;
- dependências;
- registros;
- testes;
- ameaças;
- resposta;
- privacidade.

---

## 740. Treinamento de agentes

Agentes artificiais deverão ser configurados e avaliados para:

- reconhecer limites;
- negar ação insegura;
- encaminhar;
- preservar evidências;
- respeitar autoridade;
- diferenciar fato e hipótese;
- operar em modo degradado.

---

## 741. Exercício humano

Exercícios deverão permitir que pessoas pratiquem:

- detecção;
- comunicação;
- contenção;
- decisão;
- handover;
- recuperação;
- trabalho sem sistemas principais;
- resposta sob pressão.

Toda atividade fictícia deverá ser identificada como:

**SIMULAÇÃO**

---

## 742. Continuidade das equipes

Funções críticas deverão possuir:

- substitutos;
- contatos;
- treinamento;
- documentação;
- acesso;
- distribuição de conhecimento;
- handover;
- capacidade de mobilização.

---

## 743. Pessoa-chave

A dependência de uma única pessoa deverá ser tratada como risco operacional.

---

## 744. Separação de responsabilidade humana

Nenhuma pessoa deverá concentrar, sem necessidade:

- autorização;
- execução;
- verificação;
- investigação;
- auditoria;
- aprovação de exceção.

---

## 745. Segurança física

Segurança física protege pessoas, instalações, equipamentos, materiais e ambientes contra:

- acesso indevido;
- furto;
- violência;
- acidente;
- sabotagem;
- incêndio;
- falha ambiental;
- desastre;
- dano intencional ou acidental.

---

## 746. Perímetro físico

O perímetro deverá ser definido conforme:

- criticidade;
- público;
- localização;
- operação;
- risco;
- horário;
- ativos;
- necessidade de acesso.

---

## 747. Zona física

Ambientes poderão ser classificados como:

- públicos;
- controlados;
- restritos;
- críticos;
- temporários;
- de contingência;
- de investigação.

---

## 748. Controle de acesso físico

Deverá considerar:

- identidade;
- autorização;
- finalidade;
- horário;
- acompanhamento;
- registro;
- revogação;
- emergência.

---

## 749. Crachá e identificação

Credenciais visuais não deverão ser suficientes para acesso crítico sem verificação adequada.

---

## 750. Visitante

Visitantes deverão possuir:

- responsável;
- finalidade;
- área autorizada;
- duração;
- registro;
- acompanhamento quando necessário;
- devolução ou expiração de credencial.

---

## 751. Prestador de serviço

Prestadores deverão receber acesso somente ao necessário e pelo período da atividade.

---

## 752. Chave física

Chaves deverão possuir:

- inventário;
- responsável;
- cópia controlada;
- devolução;
- substituição;
- procedimento de perda;
- revisão.

---

## 753. Fechadura eletrônica

Deverá preservar:

- identidade;
- registros;
- alimentação alternativa;
- abertura de emergência;
- proteção contra manipulação;
- recuperação diante de falha.

---

## 754. Vigilância física

A vigilância deverá respeitar:

- finalidade;
- área;
- sinalização;
- privacidade;
- retenção;
- acesso;
- proporcionalidade;
- legislação.

---

## 755. Imagem e gravação

Registros audiovisuais deverão possuir:

- finalidade;
- proteção;
- retenção;
- acesso;
- integridade;
- processo de fornecimento;
- eliminação.

---

## 756. Iluminação e visibilidade

Ambientes deverão possuir condições adequadas para:

- circulação;
- inspeção;
- reconhecimento;
- emergência;
- prevenção de acidentes;
- proteção de áreas.

---

## 757. Proteção de equipamentos

Equipamentos deverão ser protegidos contra:

- acesso;
- queda;
- impacto;
- calor;
- água;
- poeira;
- vibração;
- furto;
- alimentação inadequada;
- manipulação.

---

## 758. Proteção de cabos

Cabos de energia, comunicação e controle deverão ser protegidos contra:

- dano;
- acesso;
- desconexão;
- interferência;
- identificação incorreta;
- risco físico.

---

## 759. Energia

A operação deverá considerar:

- disponibilidade;
- qualidade;
- proteção;
- desligamento;
- aterramento;
- sobrecarga;
- contingência;
- manutenção;
- segurança.

---

## 760. Desligamento de emergência

Deverá existir quando aplicável e ser:

- acessível;
- identificado;
- protegido contra uso indevido;
- testado;
- relacionado a procedimento;
- conhecido pelos responsáveis.

---

## 761. Incêndio

A proteção deverá considerar:

- prevenção;
- detecção;
- alarme;
- combate;
- evacuação;
- rotas;
- treinamento;
- manutenção;
- comunicação;
- recuperação.

---

## 762. Água e umidade

Ambientes técnicos deverão considerar riscos de:

- infiltração;
- inundação;
- condensação;
- vazamento;
- corrosão;
- contato com energia.

---

## 763. Temperatura e ventilação

Condições inadequadas poderão afetar:

- pessoas;
- equipamentos;
- disponibilidade;
- segurança;
- incêndio;
- vida útil.

---

## 764. Limpeza e organização

Ambientes desorganizados poderão aumentar:

- acidente;
- dano;
- perda;
- bloqueio de acesso;
- risco elétrico;
- dificuldade de resposta;
- erro de identificação.

---

## 765. Documento físico

Documentos deverão ser protegidos conforme:

- sensibilidade;
- acesso;
- armazenamento;
- transporte;
- cópia;
- retenção;
- descarte.

---

## 766. Descarte físico

Materiais e equipamentos deverão ser descartados de forma que não exponham:

- dados;
- credenciais;
- configurações;
- documentos;
- identidade;
- propriedade;
- risco ambiental.

---

## 767. Transporte de ativo

O transporte deverá considerar:

- responsável;
- rota;
- embalagem;
- segurança;
- registro;
- entrega;
- incidente;
- cadeia de custódia.

---

## 768. Ambiente doméstico

Operações realizadas em residências deverão considerar:

- acesso de terceiros;
- privacidade;
- rede;
- dispositivo;
- documentos;
- ergonomia;
- comunicação;
- armazenamento;
- segurança elétrica.

---

## 769. Trabalho remoto

Deverá possuir regras sobre:

- identidade;
- dispositivo;
- canal;
- ambiente;
- dados;
- suporte;
- incidente;
- privacidade;
- acesso administrativo.

---

## 770. Trabalho em campo

Deverá considerar:

- local;
- deslocamento;
- comunicação;
- riscos;
- equipamentos;
- qualificação;
- condições climáticas;
- atendimento emergencial;
- operação offline.

---

## 771. Saúde e segurança do trabalho

A segurança operacional deverá integrar obrigações relacionadas a:

- prevenção;
- análise de risco;
- saúde ocupacional;
- ergonomia;
- equipamentos;
- treinamento;
- autorização;
- emergência;
- registro;
- responsabilidade técnica.

---

## 772. Aplicação das Normas Regulamentadoras

As NRs deverão orientar o desenho da atividade desde o início, conforme:

- setor;
- ambiente;
- equipamento;
- energia;
- altura;
- espaço;
- material;
- função;
- risco.

---

## 773. Qualificação profissional

Atividades regulamentadas deverão ser executadas ou supervisionadas por pessoas:

- qualificadas;
- habilitadas;
- capacitadas;
- autorizadas;

conforme a exigência aplicável.

---

## 774. Análise de risco da atividade

Antes de atividade perigosa, deverão ser identificados:

- perigos;
- pessoas expostas;
- energia;
- equipamentos;
- ambiente;
- controles;
- emergência;
- responsável;
- condição de interrupção.

---

## 775. Permissão de trabalho

Quando aplicável, a permissão deverá registrar:

- atividade;
- local;
- período;
- responsáveis;
- riscos;
- controles;
- autorizações;
- encerramento.

---

## 776. Bloqueio e etiquetagem

Fontes de energia deverão ser controladas para impedir acionamento inesperado durante intervenção.

---

## 777. Equipamento de proteção coletiva

A proteção coletiva deverá ser priorizada quando tecnicamente aplicável.

---

## 778. Equipamento de proteção individual

O EPI deverá ser:

- adequado;
- disponibilizado;
- inspecionado;
- utilizado;
- mantido;
- substituído;
- relacionado ao risco.

---

## 779. Parada por condição insegura

Qualquer pessoa com percepção legítima de risco grave deverá possuir canal para interromper e solicitar avaliação.

---

## 780. Agente em segurança do trabalho

Agentes poderão apoiar:

- orientação;
- checklist;
- identificação de risco;
- registro;
- alerta;
- documentação;
- acompanhamento.

Não deverão substituir profissional legalmente exigido.

---

## 781. Automação física

Automações que controlem equipamentos deverão possuir:

- intertravamento;
- limite;
- parada segura;
- sensores;
- supervisão;
- teste;
- manutenção;
- modo manual;
- resposta a falha.

---

## 782. Segurança funcional

Funções destinadas a reduzir risco deverão possuir confiabilidade proporcional à gravidade do dano evitado.

---

## 783. Resposta a acidente

Deverá priorizar:

- proteção da vida;
- interrupção da fonte de risco;
- socorro;
- acionamento competente;
- preservação do local quando possível;
- comunicação;
- registro;
- investigação.

---

## 784. Segurança comunitária

A Plataforma UNO deverá proteger comunidades sem transformar cooperação em vigilância ou controle desproporcional.

---

## 785. Participação comunitária

Comunidades poderão contribuir para:

- reconhecer riscos;
- comunicar incidentes;
- proteger pessoas vulneráveis;
- organizar resposta;
- preservar conhecimento local;
- avaliar impactos.

---

## 786. Informação comunitária

Mensagens deverão evitar:

- pânico;
- estigmatização;
- acusação;
- exposição;
- discriminação;
- manipulação política;
- linguagem inacessível.

---

## 787. Segurança territorial

Riscos poderão variar conforme:

- bairro;
- cidade;
- região;
- infraestrutura;
- clima;
- acesso;
- serviços públicos;
- contexto social;
- atividade econômica.

---

## 788. Mapa de risco territorial

Poderá integrar:

- infraestrutura;
- serviços;
- recursos;
- vulnerabilidades;
- rotas;
- contatos;
- pessoas em risco;
- capacidades locais.

O mapa deverá proteger dados pessoais e evitar estigmatização.

---

## 789. Segurança em eventos

Eventos deverão possuir planejamento sobre:

- público;
- acesso;
- capacidade;
- emergência;
- comunicação;
- saúde;
- evacuação;
- energia;
- estruturas;
- autoridades;
- contingência.

---

## 790. Conteúdo simulado em eventos

Qualquer exercício, interação ou protocolo fictício apresentado ao público deverá ser marcado como:

**SIMULAÇÃO**

---

## 791. Segurança federada

Segurança federada é a proteção coordenada entre organizações que preservam identidade, autoridade e responsabilidade próprias.

---

## 792. Princípio da autonomia federada

A cooperação não deverá eliminar a capacidade de cada organização:

- aplicar políticas;
- proteger dados;
- interromper conexão;
- investigar;
- responder;
- prestar contas;
- recuperar.

---

## 793. Contrato de segurança federada

Deverá estabelecer:

- participantes;
- responsabilidades;
- controles;
- dados;
- identidades;
- incidentes;
- comunicação;
- evidências;
- continuidade;
- auditoria;
- encerramento.

---

## 794. Linha de responsabilidade federada

Deverá indicar quem:

- detecta;
- declara;
- contém;
- investiga;
- comunica;
- recupera;
- repara;
- presta contas.

---

## 795. Fronteira federada

Toda passagem de:

- identidade;
- dado;
- comando;
- ferramenta;
- agente;
- autoridade;
- evidência;

deverá ser reconhecida e governada.

---

## 796. Confiança federada

A confiança deverá ser:

- explícita;
- limitada;
- verificável;
- monitorada;
- revogável;
- relacionada ao contrato.

---

## 797. Verificação contínua federada

Participantes deverão ser reavaliados conforme:

- estado;
- incidente;
- mudança;
- expiração;
- comportamento;
- conformidade;
- risco.

---

## 798. Identidade externa

Identidades externas deverão possuir atributos suficientes para:

- autenticação;
- autorização;
- responsabilização;
- revogação;
- auditoria.

---

## 799. Autoridade externa

Autoridade concedida em um domínio não deverá ser aceita automaticamente em outro.

---

## 800. Política local

A organização receptora deverá aplicar suas políticas sem violar contratos, leis, direitos e propósito comum.

---

## 801. Conflito de políticas

O conflito deverá produzir:

- identificação;
- suspensão da ação incompatível;
- análise;
- negociação;
- escalonamento;
- registro;
- decisão legítima.

---

## 802. Incidente federado

Um incidente deverá ser considerado federado quando:

- atravessar organizações;
- envolver identidade externa;
- afetar dados compartilhados;
- utilizar integração comum;
- comprometer fornecedor coletivo;
- produzir impacto em múltiplos domínios.

---

## 803. Declaração federada

O contrato deverá definir:

- quem declara;
- quem confirma;
- quais participantes são informados;
- quais prazos existem;
- como a severidade é harmonizada.

---

## 804. Contenção federada

Poderá exigir:

- bloqueio de confiança;
- revogação de credencial;
- isolamento de organização;
- suspensão de integração;
- retenção de mensagens;
- operação degradada;
- canal alternativo.

---

## 805. Investigação federada

A investigação deverá preservar:

- autonomia;
- jurisdição;
- privacidade;
- cadeia de custódia;
- direitos;
- responsabilidades;
- evidências compartilhadas.

---

## 806. Comunicação federada

Mensagens deverão ser coordenadas para evitar:

- contradição;
- ocultação;
- acusação prematura;
- exposição;
- confusão pública;
- perda de evidência.

---

## 807. Recuperação federada

O retorno deverá verificar:

- identidades;
- contratos;
- credenciais;
- integridade;
- eventos pendentes;
- dados;
- políticas;
- segurança;
- confiança.

---

## 808. Reintegração de participante

A organização isolada somente deverá retornar após:

- causa tratada;
- evidências apresentadas;
- credenciais renovadas;
- controles validados;
- risco residual aceito;
- responsáveis aprovarem.

---

## 809. Desconexão permanente

A federação deverá permitir encerramento seguro da participação, preservando:

- missões;
- evidências;
- dados;
- obrigações;
- responsabilidades;
- continuidade.

---

## 810. Terceiro

Terceiro é qualquer entidade externa que forneça:

- produto;
- serviço;
- infraestrutura;
- dado;
- modelo;
- agente;
- pessoal;
- suporte;
- integração;
- capacidade.

---

## 811. Risco de terceiro

O risco deverá considerar:

- acesso;
- criticidade;
- dados;
- dependência;
- substituição;
- localização;
- segurança;
- continuidade;
- cadeia de subcontratação;
- reputação.

---

## 812. Classificação de fornecedor

Fornecedores deverão ser classificados conforme o impacto de sua falha ou comprometimento.

---

## 813. Avaliação pré-contratual

Antes da contratação, deverá analisar:

- identidade;
- capacidade;
- segurança;
- privacidade;
- conformidade;
- continuidade;
- suporte;
- incidentes;
- dependências;
- portabilidade;
- encerramento.

---

## 814. Evidência do fornecedor

Declarações comerciais não deverão substituir evidências como:

- certificações;
- auditorias;
- testes;
- relatórios;
- histórico;
- arquitetura;
- contratos;
- resposta a incidentes.

---

## 815. Contrato de segurança

Deverá estabelecer:

- controles;
- acesso;
- dados;
- incidentes;
- notificação;
- auditoria;
- vulnerabilidades;
- continuidade;
- subcontratação;
- retorno e eliminação de dados;
- responsabilidade.

---

## 816. Nível de serviço de segurança

Poderá definir objetivos de:

- detecção;
- notificação;
- contenção;
- correção;
- recuperação;
- suporte;
- fornecimento de evidências.

---

## 817. Acesso de fornecedor

Deverá ser:

- individual;
- autorizado;
- limitado;
- temporário;
- monitorado;
- revogável;
- relacionado a chamado ou missão.

---

## 818. Suporte remoto

Sessões deverão possuir:

- identidade;
- aprovação;
- canal seguro;
- registro;
- escopo;
- supervisão;
- encerramento;
- revisão.

---

## 819. Subcontratação

O fornecedor deverá informar subcontratados capazes de afetar:

- dados;
- segurança;
- continuidade;
- localização;
- conformidade;
- suporte.

---

## 820. Cadeia de suprimentos

A proteção deverá considerar toda a cadeia de:

- desenvolvimento;
- fabricação;
- distribuição;
- atualização;
- operação;
- suporte;
- descarte.

---

## 821. Software de terceiro

Deverá ser avaliado quanto a:

- origem;
- versão;
- assinatura;
- vulnerabilidades;
- manutenção;
- licença;
- comportamento;
- telemetria;
- substituição.

---

## 822. Hardware de terceiro

Deverá considerar:

- origem;
- integridade;
- firmware;
- suporte;
- adulteração;
- manutenção;
- descarte;
- peças;
- garantia.

---

## 823. Modelo de inteligência artificial externo

Deverá ser avaliado quanto a:

- dados;
- privacidade;
- segurança;
- comportamento;
- atualização;
- disponibilidade;
- localização;
- custo;
- portabilidade;
- transparência;
- encerramento.

---

## 824. Plugin e extensão

Plugins deverão possuir:

- origem;
- finalidade;
- permissões;
- dados;
- manutenção;
- versão;
- isolamento;
- possibilidade de remoção;
- avaliação de risco.

---

## 825. Atualização de fornecedor

Mudanças externas deverão ser avaliadas quanto ao impacto sobre:

- comportamento;
- integração;
- segurança;
- privacidade;
- disponibilidade;
- custo;
- conformidade;
- continuidade.

---

## 826. Monitoramento do fornecedor

Deverá considerar:

- desempenho;
- incidentes;
- vulnerabilidades;
- mudanças;
- suporte;
- conformidade;
- dependências;
- risco financeiro;
- capacidade de continuidade.

---

## 827. Incidente de fornecedor

O contrato deverá definir:

- prazo de notificação;
- conteúdo;
- evidências;
- cooperação;
- contenção;
- comunicação;
- recuperação;
- responsabilidade;
- reparação.

---

## 828. Falha de fornecedor

A operação deverá possuir alternativa proporcional à criticidade, como:

- contingência;
- fornecedor substituto;
- modo manual;
- operação reduzida;
- estoque;
- migração;
- encerramento seguro.

---

## 829. Concentração de fornecedor

A dependência de um único fornecedor para múltiplas funções críticas deverá ser tratada como risco sistêmico.

---

## 830. Portabilidade

A arquitetura deverá permitir, quando viável:

- exportar dados;
- migrar configurações;
- substituir modelos;
- trocar serviços;
- preservar identidade;
- manter evidências;
- reconstruir integrações.

---

## 831. Estratégia de saída

Deverá existir antes da dependência crítica e definir:

- gatilhos;
- dados;
- ferramentas;
- prazo;
- custo;
- responsáveis;
- continuidade;
- obrigações;
- testes.

---

## 832. Encerramento do fornecedor

Deverá incluir:

- revogação;
- devolução;
- eliminação;
- transferência;
- confirmação;
- evidências;
- continuidade;
- comunicação;
- encerramento de integrações.

---

## 833. Governança da segurança

Governança é a capacidade de dirigir, supervisionar e responsabilizar a segurança em toda a Plataforma UNO.

---

## 834. Objetivos da governança

Deverá assegurar:

- alinhamento ao propósito;
- proteção de pessoas;
- conformidade;
- gestão de riscos;
- autoridade;
- recursos;
- continuidade;
- transparência;
- aprendizagem;
- prestação de contas.

---

## 835. Estrutura de governança

Poderá incluir:

- direção;
- responsável por segurança;
- operação;
- privacidade;
- jurídico;
- continuidade;
- auditoria;
- curadoria;
- organizações;
- representantes das pessoas afetadas.

---

## 836. Autoridade da segurança

A função de segurança deverá possuir autoridade para:

- interromper;
- restringir;
- investigar;
- exigir correção;
- escalar;
- declarar risco;
- recomendar desativação;
- convocar resposta.

---

## 837. Independência da segurança

A segurança deverá possuir independência suficiente das áreas pressionadas por:

- velocidade;
- receita;
- entrega;
- expansão;
- reputação;
- produtividade;
- redução de custos.

---

## 838. Responsável por segurança

Deverá coordenar:

- políticas;
- riscos;
- controles;
- incidentes;
- fornecedores;
- treinamento;
- métricas;
- auditorias;
- melhorias;
- prestação de contas.

---

## 839. Proprietário do risco

Deverá possuir autoridade e recursos para tratar ou aceitar risco residual.

---

## 840. Proprietário do controle

Deverá garantir:

- implantação;
- operação;
- teste;
- manutenção;
- evidência;
- correção;
- substituição.

---

## 841. Comitê de segurança

Poderá analisar:

- riscos elevados;
- exceções;
- incidentes;
- investimentos;
- políticas;
- terceiros;
- mudanças críticas;
- métricas;
- planos de melhoria.

---

## 842. Conselho e direção

Deverão receber informação suficiente para compreender:

- exposição;
- riscos críticos;
- incidentes;
- dependências;
- capacidade de resposta;
- riscos aceitos;
- necessidades;
- impactos humanos e institucionais.

---

## 843. Política de segurança

Deverá declarar:

- princípios;
- responsabilidades;
- regras;
- autoridade;
- controles;
- exceções;
- resposta;
- conformidade;
- revisão;
- consequências.

---

## 844. Norma interna

Normas deverão traduzir políticas em requisitos aplicáveis a domínios específicos.

---

## 845. Procedimento de segurança

Procedimentos deverão orientar execução sem eliminar:

- discernimento;
- autoridade;
- adaptação;
- registro;
- escalonamento.

---

## 846. Exceção de política

Deverá possuir:

- solicitante;
- justificativa;
- risco;
- escopo;
- prazo;
- compensação;
- aprovação;
- monitoramento;
- encerramento.

---

## 847. Aceitação de risco

Não deverá ser realizada por quem não possui legitimidade para responder pelo impacto.

---

## 848. Orçamento de segurança

Recursos deverão considerar:

- prevenção;
- detecção;
- resposta;
- recuperação;
- treinamento;
- pessoas;
- ferramentas;
- auditoria;
- continuidade;
- reparação.

---

## 849. Segurança como investimento

A avaliação não deverá considerar apenas o custo do controle, mas também:

- dano evitado;
- confiança;
- continuidade;
- conformidade;
- qualidade;
- valor público;
- capacidade institucional.

---

## 850. Métricas para governança

Deverão incluir:

- riscos;
- controles;
- incidentes;
- vulnerabilidades;
- cobertura;
- tempos;
- recorrência;
- treinamento;
- fornecedores;
- melhorias;
- impacto.

---

## 851. Relatório de segurança

Deverá apresentar:

- estado;
- riscos;
- tendências;
- incidentes;
- controles;
- exceções;
- pendências;
- investimentos;
- decisões necessárias;
- aprendizagem.

---

## 852. Transparência institucional

A organização deverá comunicar informações de segurança suficientes para sustentar confiança e responsabilidade, preservando dados e detalhes protegidos.

---

## 853. Auditoria de segurança

Deverá avaliar:

- governança;
- identidade;
- acesso;
- infraestrutura;
- dados;
- fornecedores;
- incidentes;
- continuidade;
- conformidade;
- evidências;
- melhorias.

---

## 854. Auditoria independente

Riscos elevados poderão exigir avaliação externa ou funcionalmente independente.

---

## 855. Conformidade

Conformidade é a aderência demonstrável a:

- leis;
- regulamentos;
- normas;
- contratos;
- políticas;
- procedimentos;
- compromissos;
- decisões legítimas.

---

## 856. Conformidade por concepção

Obrigações deverão orientar arquitetura, dados, processos, agentes, ferramentas e contratos desde o início.

---

## 857. Inventário de obrigações

A Plataforma UNO deverá identificar obrigações conforme:

- atividade;
- setor;
- território;
- dado;
- público;
- organização;
- contrato;
- risco.

---

## 858. Hierarquia de obrigações

Deverão ser distinguidos:

- princípios constitucionais;
- leis;
- regulamentos;
- decisões aplicáveis;
- normas técnicas;
- contratos;
- políticas;
- procedimentos;
- recomendações.

---

## 859. Mudança normativa

Mudanças deverão gerar:

- identificação;
- análise;
- impacto;
- responsável;
- adequação;
- teste;
- comunicação;
- evidência;
- acompanhamento.

---

## 860. Proteção de dados

A segurança deverá operar em harmonia com a legislação aplicável de proteção de dados, preservando:

- finalidade;
- necessidade;
- transparência;
- segurança;
- direitos;
- responsabilização;
- prevenção.

---

## 861. Defesa do consumidor

A operação deverá proteger contra:

- fraude;
- cobrança indevida;
- publicidade enganosa;
- informação insuficiente;
- dificuldade artificial de cancelamento;
- manipulação;
- ausência de atendimento;
- falta de reparação.

---

## 862. Relações de trabalho

A segurança deverá respeitar:

- dignidade;
- saúde;
- privacidade;
- não discriminação;
- jornada;
- segurança;
- direito de defesa;
- responsabilidade da organização.

---

## 863. Acessibilidade

Controles não deverão excluir pessoas por:

- deficiência;
- idioma;
- conectividade;
- dispositivo;
- escolaridade;
- idade;
- ausência de familiaridade tecnológica.

---

## 864. Responsabilidade civil, administrativa e penal

A arquitetura deverá preservar evidências e atribuições necessárias à apuração de responsabilidades aplicáveis.

---

## 865. Preservação legal

Quando houver obrigação de preservar informações, a organização deverá suspender descarte dentro do escopo legítimo.

---

## 866. Conflito entre segurança e obrigação

Conflitos deverão ser analisados por autoridades competentes, preservando:

- vida;
- direitos;
- legalidade;
- evidências;
- proporcionalidade;
- documentação.

---

## 867. Certificação

Certificações poderão demonstrar parte da conformidade, mas não substituirão avaliação contínua da operação real.

---

## 868. Declaração de conformidade

Toda declaração deverá possuir:

- escopo;
- período;
- referência;
- responsável;
- evidências;
- limitações;
- validade.

---

## 869. Não conformidade

Deverá gerar:

- registro;
- classificação;
- contenção quando necessária;
- plano de correção;
- responsável;
- prazo;
- validação;
- escalonamento.

---

## 870. Reincidência

Não conformidades repetidas deverão produzir análise de:

- causa;
- incentivo;
- cultura;
- recursos;
- governança;
- eficácia da correção;
- responsabilidade.

---

## 871. Continuidade da segurança

A própria função de segurança deverá permanecer operacional durante:

- falha;
- crise;
- contingência;
- troca de pessoas;
- indisponibilidade de ferramenta;
- ataque;
- mudança de fornecedor.

---

## 872. Contingência de segurança

Deverá prever alternativas para:

- autenticação;
- comunicação;
- monitoramento;
- bloqueio;
- investigação;
- evidência;
- coordenação;
- acesso emergencial.

---

## 873. Recuperação da função de segurança

Deverá ser priorizada quando sua indisponibilidade reduzir a capacidade de compreender ou limitar riscos.

---

## 874. Invariante de segurança humana

Nenhum controle deverá preservar tecnologia sacrificando desnecessariamente vida, dignidade, saúde ou direitos.

---

## 875. Invariante de segurança física

Ambientes e equipamentos deverão possuir proteção proporcional aos riscos humanos e operacionais.

---

## 876. Invariante de segurança do trabalho

Atividades deverão respeitar qualificação, autorização, procedimentos e NRs aplicáveis.

---

## 877. Invariante de proteção comunitária

A segurança comunitária não deverá se transformar em vigilância, estigmatização ou concentração ilegítima de poder.

---

## 878. Invariante de federação

A cooperação deverá preservar fronteiras, autonomia, identidade, responsabilidade e direito de desconexão.

---

## 879. Invariante de terceiro

Nenhum contrato deverá eliminar a responsabilidade da organização sobre capacidade que utiliza.

---

## 880. Invariante de cadeia de suprimentos

Componentes externos deverão possuir origem, integridade, versão, manutenção e possibilidade de substituição conhecidas.

---

## 881. Invariante de governança

A função de segurança deverá possuir autoridade, independência, recursos e prestação de contas.

---

## 882. Invariante de conformidade

Leis e normas deverão orientar o desenho desde sua origem, e não ser adaptadas posteriormente por conveniência.

---

## 883. Invariante de continuidade da segurança

A operação não deverá perder capacidade de detectar, conter, comunicar e recuperar justamente quando estiver sob maior pressão.

---

## 884. Resultado do quinto lote

Com este lote, a Engenharia Oficial estabelece que a segurança deverá:

- proteger pessoas;
- preservar segurança psicológica;
- reduzir fadiga e manipulação;
- proteger instalações e equipamentos;
- respeitar saúde e segurança do trabalho;
- incorporar as NRs aplicáveis;
- proteger comunidades sem vigilância indevida;
- coordenar segurança federada;
- governar terceiros e fornecedores;
- proteger a cadeia de suprimentos;
- assegurar conformidade;
- sustentar governança independente;
- preservar a continuidade da própria função de segurança.

O lote final aprofundará:

- testes;
- exercícios;
- simulações;
- métricas;
- indicadores;
- maturidade;
- aprendizagem;
- evolução;
- garantias fundamentais;
- modelo integrado;
- relações com os demais arquivos;
- encerramento oficial.

---

# Lote 6 — Testes, Exercícios, Métricas, Maturidade, Aprendizagem, Garantias e Modelo Integrado

## 885. Testes de segurança operacional

A segurança deverá ser testada para demonstrar que:

- controles existem;
- controles funcionam;
- falhas são detectadas;
- ameaças podem ser contidas;
- evidências são preservadas;
- capacidades podem ser recuperadas;
- pessoas conseguem responder;
- responsabilidades permanecem reconhecíveis.

---

## 886. Teste não é conformidade presumida

A existência de:

- política;
- ferramenta;
- certificado;
- procedimento;
- contrato;
- treinamento;
- controle configurado;

não demonstrará, isoladamente, que a operação está segura.

---

## 887. Plano de testes

O plano deverá definir:

- objetivo;
- escopo;
- ambiente;
- ativos;
- ameaças;
- controles;
- responsáveis;
- critérios;
- evidências;
- riscos do próprio teste;
- tratamento de falhas.

---

## 888. Autorização do teste

Testes que possam afetar operação, dados, pessoas ou fornecedores deverão possuir autorização explícita.

---

## 889. Escopo autorizado

O escopo deverá estabelecer:

- sistemas;
- ambientes;
- horários;
- técnicas;
- identidades;
- limites;
- dados;
- contatos;
- critérios de interrupção.

---

## 890. Segurança do teste

O teste deverá evitar:

- dano real;
- exposição;
- indisponibilidade indevida;
- perda de dados;
- interferência externa;
- violação de direitos;
- comprometimento de evidências.

---

## 891. Identificação de simulação

Todo exercício que represente ficticiamente ameaça, ataque, incidente, pessoa, organização ou efeito deverá ser identificado como:

**SIMULAÇÃO**

A identificação deverá impedir confusão com uma operação real.

---

## 892. Ambiente de teste

Sempre que possível, testes deverão ocorrer em ambiente:

- isolado;
- representativo;
- observável;
- restaurável;
- controlado;
- sem dados pessoais desnecessários;
- sem credenciais produtivas.

---

## 893. Teste em produção

Somente deverá ocorrer quando:

- houver necessidade;
- o risco for compreendido;
- a autoridade for adequada;
- controles estiverem ativos;
- o impacto estiver limitado;
- houver observação;
- existir interrupção;
- a recuperação estiver preparada.

---

## 894. Teste de configuração

Deverá verificar:

- padrões seguros;
- serviços ativos;
- permissões;
- registros;
- criptografia;
- segmentação;
- atualizações;
- portas;
- credenciais;
- deriva.

---

## 895. Teste de identidade

Deverá avaliar:

- criação;
- verificação;
- autenticação;
- recuperação;
- suspensão;
- revogação;
- duplicidade;
- federação;
- encerramento.

---

## 896. Teste de autenticação

Deverá considerar:

- credencial válida;
- credencial inválida;
- fator ausente;
- tentativa repetida;
- sessão expirada;
- dispositivo desconhecido;
- recuperação;
- personificação;
- coerção quando aplicável.

---

## 897. Teste de autorização

Deverá verificar se identidades conseguem realizar apenas ações compatíveis com:

- papel;
- missão;
- organização;
- recurso;
- horário;
- território;
- risco;
- política.

---

## 898. Teste de menor privilégio

Deverá identificar:

- permissões excessivas;
- contas órfãs;
- privilégios permanentes;
- funções conflitantes;
- acessos antigos;
- subdelegações indevidas.

---

## 899. Teste de revogação

Deverá confirmar a remoção de:

- sessões;
- tokens;
- chaves;
- certificados;
- caches;
- integrações;
- acessos federados;
- autoridade de agentes.

---

## 900. Teste de segregação

Deverá verificar se uma mesma identidade consegue indevidamente:

- solicitar;
- aprovar;
- executar;
- verificar;
- auditar;
- encerrar.

---

## 901. Teste de credenciais

Deverá avaliar:

- armazenamento;
- exposição;
- rotação;
- validade;
- escopo;
- revogação;
- uso;
- registros;
- recuperação.

---

## 902. Teste de ambiente

Deverá verificar separação entre:

- desenvolvimento;
- teste;
- homologação;
- produção;
- contingência;
- investigação;
- simulação.

---

## 903. Teste de infraestrutura

Deverá considerar:

- inventário;
- configuração;
- atualização;
- isolamento;
- energia;
- rede;
- capacidade;
- continuidade;
- acesso físico;
- observabilidade.

---

## 904. Teste de rede

Deverá avaliar:

- segmentação;
- comunicação permitida;
- comunicação proibida;
- entrada;
- saída;
- canais seguros;
- resolução de nomes;
- acesso remoto;
- limite;
- detecção.

---

## 905. Teste de dispositivo

Deverá verificar:

- identidade;
- configuração;
- atualização;
- proteção;
- perda;
- revogação;
- bloqueio;
- armazenamento;
- sincronização;
- descarte.

---

## 906. Teste de aplicação

Deverá abranger:

- entrada;
- autenticação;
- sessão;
- autorização;
- erro;
- dados;
- lógica;
- integração;
- registros;
- abuso;
- disponibilidade.

---

## 907. Teste de API

Deverá verificar:

- contrato;
- identidade;
- parâmetros;
- autorização;
- limite;
- repetição;
- erro;
- exposição;
- versão;
- encerramento.

---

## 908. Teste de integração

Deverá simular:

- credencial inválida;
- mensagem repetida;
- atraso;
- indisponibilidade;
- dado incorreto;
- quebra de contrato;
- revogação;
- desconexão;
- retomada.

---

## 909. Teste de dados

Deverá avaliar:

- classificação;
- acesso;
- integridade;
- confidencialidade;
- disponibilidade;
- proveniência;
- retenção;
- eliminação;
- backup;
- reconciliação.

---

## 910. Teste de registros

Deverá confirmar:

- geração;
- conteúdo adequado;
- integridade;
- temporalidade;
- correlação;
- acesso;
- retenção;
- disponibilidade;
- ausência de segredos indevidos.

---

## 911. Teste de observabilidade

Deverá verificar se a organização consegue compreender:

- estado;
- acesso;
- alteração;
- falha;
- ameaça;
- controle;
- propagação;
- impacto;
- resposta.

---

## 912. Teste de detecção

Deverá avaliar:

- cobertura;
- precisão;
- falsos positivos;
- falsos negativos;
- tempo;
- correlação;
- qualidade do alerta;
- escalonamento.

---

## 913. Teste de alerta

Deverá verificar se o alerta:

- chega;
- é compreendido;
- possui prioridade;
- indica ação;
- alcança responsável;
- evita duplicidade;
- permanece disponível;
- produz acompanhamento.

---

## 914. Teste de contenção

Deverá avaliar a capacidade de:

- bloquear;
- isolar;
- revogar;
- suspender;
- preservar evidências;
- limitar propagação;
- manter funções essenciais;
- desfazer contenção indevida.

---

## 915. Teste de erradicação

Deverá verificar se:

- persistências são removidas;
- vulnerabilidades são tratadas;
- credenciais são renovadas;
- ambientes equivalentes são avaliados;
- ameaças não retornam.

---

## 916. Teste de investigação

Deverá avaliar:

- acesso a evidências;
- linha do tempo;
- cadeia de custódia;
- hipóteses;
- independência;
- privacidade;
- conclusões;
- relatório.

---

## 917. Teste de recuperação

Deverá verificar:

- ambiente limpo;
- restauração;
- integridade;
- identidade;
- configuração;
- dados;
- dependências;
- monitoramento;
- retorno progressivo.

---

## 918. Teste de reparação

Deverá avaliar se a organização consegue:

- identificar afetados;
- corrigir registros;
- restaurar acesso;
- devolver recursos;
- comunicar;
- compensar;
- acompanhar;
- receber contestação.

---

## 919. Teste de comunicação

Deverá avaliar comunicação:

- interna;
- externa;
- pública;
- regulatória;
- federada;
- com pessoas afetadas;
- em canais alternativos;
- em linguagem acessível.

---

## 920. Teste de segurança física

Deverá avaliar:

- acesso;
- perímetro;
- energia;
- ambiente;
- equipamentos;
- alarme;
- evacuação;
- emergência;
- transporte;
- descarte.

---

## 921. Teste de segurança do trabalho

Deverá verificar:

- análise de risco;
- qualificação;
- autorização;
- procedimento;
- bloqueio;
- equipamentos;
- emergência;
- documentação;
- NRs aplicáveis.

---

## 922. Teste de fornecedor

Deverá avaliar:

- notificação;
- suporte;
- evidências;
- contenção;
- recuperação;
- continuidade;
- portabilidade;
- encerramento;
- subcontratação.

---

## 923. Teste federado

Deverá exercitar:

- identidade;
- confiança;
- conflito de política;
- incidente compartilhado;
- contenção;
- comunicação;
- investigação;
- desconexão;
- reintegração;
- saída.

---

## 924. Teste de agentes

Deverá verificar se agentes de inteligência artificial:

- reconhecem ameaça;
- respeitam autoridade;
- protegem dados;
- recusam ações inseguras;
- preservam evidências;
- pedem ajuda;
- reduzem autonomia;
- resistem à manipulação.

---

## 925. Teste multiagente

Deverá avaliar:

- propagação de erro;
- confiança transitiva;
- delegação;
- contaminação de memória;
- consenso falso;
- isolamento;
- interrupção;
- responsabilização.

---

## 926. Teste adversarial

O teste deverá procurar caminhos capazes de:

- contornar controle;
- confundir identidade;
- manipular agente;
- explorar integração;
- revelar dados;
- ampliar autoridade;
- ocultar atividade;
- impedir recuperação.

---

## 927. Teste de engenharia social

Deverá avaliar processos e treinamento sem humilhar, enganar abusivamente ou punir automaticamente participantes.

---

## 928. Teste de mesa

O exercício de mesa reúne participantes para percorrer um cenário e avaliar:

- papéis;
- decisões;
- comunicação;
- recursos;
- procedimentos;
- dependências;
- autoridade;
- continuidade.

---

## 929. Exercício funcional

Deverá executar parte real dos procedimentos sem produzir impacto indevido.

---

## 930. Exercício integrado

Poderá envolver:

- equipes;
- agentes;
- fornecedores;
- organizações;
- autoridades;
- comunidades;
- ambientes alternativos.

---

## 931. Frequência dos exercícios

A frequência deverá considerar:

- criticidade;
- mudança;
- risco;
- rotatividade;
- incidente;
- obrigação;
- dependência;
- maturidade.

---

## 932. Critério de sucesso do exercício

O sucesso não será apenas concluir o roteiro.

Deverá demonstrar:

- compreensão;
- coordenação;
- segurança;
- comunicação;
- intervenção;
- continuidade;
- evidências;
- aprendizagem.

---

## 933. Falha durante o exercício

Falhas deverão ser tratadas como oportunidades de melhoria, preservando responsabilização quando houver descumprimento deliberado.

---

## 934. Evidência do exercício

Deverá registrar:

- participantes;
- cenário;
- ambiente;
- ações;
- decisões;
- resultados;
- falhas;
- observações;
- melhorias;
- responsáveis.

---

## 935. Métricas de segurança

Métricas deverão apoiar decisões sem reduzir segurança a números isolados.

---

## 936. Métrica de cobertura

Deverá indicar quais:

- ativos;
- ambientes;
- identidades;
- dados;
- integrações;
- ameaças;
- técnicas;
- organizações;

estão protegidos e observados.

---

## 937. Métrica de vulnerabilidade

Poderá considerar:

- quantidade;
- criticidade;
- exposição;
- idade;
- exploração;
- prazo;
- recorrência;
- risco residual.

---

## 938. Tempo de correção

Deverá ser avaliado conforme criticidade e exposição, não apenas por média geral.

---

## 939. Métrica de identidade

Poderá incluir:

- contas órfãs;
- acessos excessivos;
- autenticação forte;
- revisões;
- revogações;
- falhas;
- recuperações;
- privilégios temporários.

---

## 940. Métrica de detecção

Poderá considerar:

- cobertura;
- tempo;
- precisão;
- falso positivo;
- falso negativo;
- fontes;
- pontos cegos;
- qualidade da triagem.

---

## 941. Tempo médio de detecção

A média deverá ser acompanhada por distribuição, severidade e incidentes não detectados internamente.

---

## 942. Tempo médio de resposta

Deverá distinguir:

- recebimento;
- triagem;
- declaração;
- contenção;
- erradicação;
- recuperação;
- reparação;
- encerramento.

---

## 943. Métrica de contenção

Deverá observar:

- tempo;
- alcance;
- eficácia;
- impacto colateral;
- recorrência;
- preservação de evidências;
- continuidade.

---

## 944. Métrica de recuperação

Poderá considerar:

- tempo;
- integridade;
- perda;
- capacidade restaurada;
- retorno parcial;
- falha;
- recorrência;
- confiança.

---

## 945. Métrica de incidentes

Deverá classificar:

- severidade;
- origem;
- causa;
- ativo;
- impacto;
- recorrência;
- detecção;
- resposta;
- reparação.

---

## 946. Quantidade não é segurança

A redução do número de incidentes poderá significar:

- melhoria;
- subnotificação;
- perda de observabilidade;
- classificação inadequada;
- cultura de silêncio.

---

## 947. Métrica de comunicação

Deverá avaliar:

- tempestividade;
- alcance;
- clareza;
- coerência;
- acessibilidade;
- correções;
- compreensão;
- confiança.

---

## 948. Métrica de reparação

Deverá considerar:

- pessoas identificadas;
- tempo;
- medidas;
- resultado;
- contestação;
- pendências;
- recorrência;
- satisfação proporcional.

---

## 949. Métrica humana

Poderá observar:

- treinamento;
- fadiga;
- participação;
- denúncias;
- segurança psicológica;
- handovers;
- capacidade de contingência;
- retenção de conhecimento.

---

## 950. Métrica de fornecedor

Deverá considerar:

- incidentes;
- notificação;
- suporte;
- vulnerabilidades;
- recuperação;
- evidências;
- continuidade;
- mudanças;
- concentração.

---

## 951. Métrica federada

Poderá avaliar:

- confiança;
- cobertura;
- comunicação;
- contenção;
- interoperabilidade;
- conflito;
- desconexão;
- reintegração;
- prestação de contas.

---

## 952. Métrica de agente

Deverá observar:

- recusas;
- ações bloqueadas;
- falsa execução;
- intervenção humana;
- uso de ferramentas;
- vazamento;
- deriva;
- escalonamento;
- explicação.

---

## 953. Métrica de conformidade

Deverá considerar:

- obrigações;
- controles;
- não conformidades;
- reincidência;
- prazos;
- exceções;
- evidências;
- mudanças normativas.

---

## 954. Métrica de aprendizagem

Deverá avaliar:

- melhorias propostas;
- ações concluídas;
- recorrência;
- atualização de procedimentos;
- exercícios;
- correções;
- efeito observado.

---

## 955. Indicador de risco

Indicadores deverão permitir acompanhar tendência e aproximação de limites.

---

## 956. Indicador antecedente

Busca reconhecer deterioração antes do incidente.

Poderá incluir:

- vulnerabilidade crescente;
- revisão vencida;
- excesso de privilégio;
- telemetria ausente;
- fadiga;
- dívida de segurança;
- fornecedor instável.

---

## 957. Indicador posterior

Representa resultado já ocorrido, como:

- incidente;
- perda;
- indisponibilidade;
- fraude;
- reparação;
- violação;
- recorrência.

---

## 958. Limite de segurança

Ao ultrapassar limite, deverão ser acionados:

- alerta;
- revisão;
- restrição;
- contenção;
- escalonamento;
- contingência;
- suspensão.

---

## 959. Painel de segurança

O painel deverá apresentar:

- riscos;
- ativos;
- vulnerabilidades;
- controles;
- eventos;
- incidentes;
- fornecedores;
- conformidade;
- melhorias;
- capacidade de resposta.

---

## 960. Painel executivo

Deverá permitir à direção compreender:

- exposição;
- riscos críticos;
- impacto humano;
- decisões necessárias;
- riscos aceitos;
- capacidade;
- tendência;
- continuidade;
- responsabilidade.

---

## 961. Painel operacional

Deverá permitir às equipes compreender:

- alertas;
- casos;
- incidentes;
- ações;
- responsáveis;
- prazos;
- ferramentas;
- dependências;
- evidências;
- estado.

---

## 962. Métrica manipulada

Indicadores não deverão ser melhorados por:

- deixar de registrar;
- reduzir severidade;
- encerrar prematuramente;
- excluir casos;
- desencorajar denúncia;
- ocultar impacto;
- transferir responsabilidade.

---

## 963. Maturidade da segurança

Maturidade representa a capacidade de proteger, responder, recuperar, reparar e aprender de maneira consistente.

---

## 964. Nível 0 — segurança desconhecida

Neste nível:

- ativos não são conhecidos;
- riscos não são governados;
- controles são informais;
- incidentes não são registrados;
- responsabilidades são indefinidas.

---

## 965. Nível 1 — segurança reativa

Neste nível:

- ações ocorrem após falhas;
- controles são pontuais;
- dependência de pessoas é elevada;
- evidências são incompletas;
- recuperação é improvisada.

---

## 966. Nível 2 — segurança definida

Neste nível existem:

- políticas;
- inventários;
- papéis;
- controles básicos;
- procedimentos;
- registros;
- treinamento inicial;
- resposta definida.

---

## 967. Nível 3 — segurança gerenciada

Neste nível:

- riscos são avaliados;
- controles são testados;
- incidentes são coordenados;
- métricas existem;
- fornecedores são acompanhados;
- melhorias são rastreadas.

---

## 968. Nível 4 — segurança adaptativa

Neste nível:

- contexto altera controles;
- ameaças são correlacionadas;
- automações atuam sob governança;
- exercícios são frequentes;
- riscos emergentes são tratados;
- continuidade é testada.

---

## 969. Nível 5 — segurança institucional consciente

Neste nível:

- segurança integra propósito;
- pessoas participam;
- federação preserva responsabilidade;
- agentes ampliam capacidade sem eliminar controle;
- reparação é proativa;
- aprendizagem transforma arquitetura;
- confiança é verificável.

---

## 970. Maturidade não é ausência de incidente

Organizações maduras também sofrem incidentes.

A maturidade será demonstrada pela capacidade de:

- reconhecer;
- responder;
- limitar;
- recuperar;
- reparar;
- aprender;
- comunicar com verdade.

---

## 971. Progressão de maturidade

A progressão deverá ser baseada em evidências, não apenas em documentação ou aquisição de ferramentas.

---

## 972. Regressão de maturidade

A maturidade poderá diminuir por:

- expansão;
- rotatividade;
- dívida;
- mudança;
- fornecedor;
- perda de conhecimento;
- desativação de controles;
- cultura de silêncio;
- incidente recorrente.

---

## 973. Aprendizagem de segurança

A aprendizagem deverá transformar:

- incidente;
- vulnerabilidade;
- exercício;
- auditoria;
- denúncia;
- quase incidente;
- falha;
- mudança;
- experiência;

em melhoria institucional verificável.

---

## 974. Ciclo de aprendizagem

Deverá incluir:

1. observar;
2. registrar;
3. compreender;
4. investigar;
5. propor;
6. priorizar;
7. implementar;
8. testar;
9. verificar;
10. incorporar;
11. revisar.

---

## 975. Memória de segurança

Deverá preservar:

- riscos;
- decisões;
- incidentes;
- controles;
- falhas;
- reparações;
- fornecedores;
- exercícios;
- aprendizados;
- mudanças.

---

## 976. Conhecimento de segurança

Deverá ser organizado para apoiar:

- prevenção;
- detecção;
- resposta;
- investigação;
- recuperação;
- treinamento;
- decisão;
- continuidade.

---

## 977. Conhecimento sensível

Informações que possam facilitar ataques deverão possuir acesso restrito sem impedir sua utilização legítima pelas equipes responsáveis.

---

## 978. Lição aprendida

Uma lição somente será considerada aprendida quando produzir mudança observável em:

- arquitetura;
- controle;
- procedimento;
- treinamento;
- contrato;
- comportamento;
- governança;
- resultado.

---

## 979. Recorrência

A repetição de incidente deverá gerar análise sobre:

- correção insuficiente;
- causa não tratada;
- incentivo;
- falta de recurso;
- ausência de proprietário;
- aceitação inadequada;
- governança.

---

## 980. Melhoria contínua

A segurança deverá evoluir por ciclos pequenos e grandes, preservando:

- prioridade;
- evidência;
- teste;
- autoridade;
- continuidade;
- prestação de contas.

---

## 981. Evolução de ameaça

A arquitetura deverá acompanhar mudanças em:

- técnicas;
- ferramentas;
- agentes;
- fraudes;
- vulnerabilidades;
- comportamentos;
- conflitos;
- ambiente;
- legislação.

---

## 982. Evolução de controle

Controles deverão ser substituídos quando:

- não forem eficazes;
- forem obsoletos;
- produzirem dano excessivo;
- perderem suporte;
- puderem ser simplificados;
- novas ameaças surgirem.

---

## 983. Autoavaliação da segurança

A organização deverá avaliar sua própria capacidade com honestidade, reconhecendo:

- limitações;
- conflitos;
- pontos cegos;
- dívida;
- dependências;
- riscos aceitos;
- necessidades.

---

## 984. Avaliação independente

A visão externa poderá revelar fragilidades normalizadas internamente.

---

## 985. Garantias fundamentais

A Plataforma UNO deverá manter garantias que não dependam de fornecedor, ferramenta, modelo, escala ou interface específica.

---

## 986. Garantia de vida

A proteção da vida deverá prevalecer sobre conveniência, custo, velocidade, reputação e métricas.

---

## 987. Garantia de dignidade

Controles não deverão humilhar, manipular, discriminar ou transformar pessoas em objetos de vigilância permanente.

---

## 988. Garantia de propósito

Toda medida deverá possuir finalidade legítima e relação com a missão.

---

## 989. Garantia de identidade

Ações, decisões, acessos, agentes, serviços e organizações deverão permanecer identificáveis.

---

## 990. Garantia de autoridade

Toda ação deverá respeitar autoridade válida, limitada, temporal e revogável.

---

## 991. Garantia de menor privilégio

Nenhuma identidade deverá receber acesso superior ao necessário.

---

## 992. Garantia de segregação

Funções críticas deverão preservar independência suficiente entre autorização, execução, verificação e auditoria.

---

## 993. Garantia de verdade

Riscos, incidentes, falhas, impactos e limitações não deverão ser ocultados.

---

## 994. Garantia de observabilidade

A operação deverá conseguir reconhecer seu estado, suas limitações e seus pontos cegos.

---

## 995. Garantia de detecção

Sinais relevantes deverão possuir caminhos de coleta, qualificação, triagem e escalonamento.

---

## 996. Garantia de contenção

A organização deverá conseguir limitar propagação e impacto sem depender exclusivamente do componente comprometido.

---

## 997. Garantia de evidência

Atuações relevantes deverão produzir registros íntegros, temporais, correlacionáveis e protegidos.

---

## 998. Garantia de investigação

Fatos, hipóteses, evidências, inferências e conclusões deverão permanecer distinguíveis.

---

## 999. Garantia de continuidade

A segurança deverá preservar funções essenciais, memória, recuperação e capacidade humana.

---

## 1000. Garantia de recuperação segura

Nenhuma capacidade deverá retornar com ameaça, vulnerabilidade crítica, credencial exposta ou dado contaminado conhecido.

---

## 1001. Garantia de reparação

Impactos humanos, financeiros, informacionais, reputacionais e institucionais deverão possuir caminhos de reparação.

---

## 1002. Garantia de privacidade

Monitoramento, resposta e investigação deverão respeitar finalidade, necessidade, proporcionalidade, segurança e temporalidade.

---

## 1003. Garantia de segurança humana

Pessoas deverão poder comunicar risco, interromper atividade insegura e solicitar ajuda.

---

## 1004. Garantia de segurança do trabalho

A operação deverá respeitar qualificação, autorização, análise de risco, procedimentos e NRs aplicáveis.

---

## 1005. Garantia federada

Organizações deverão cooperar sem apagar autonomia, fronteiras, responsabilidades e direito de desconexão.

---

## 1006. Garantia de fornecedor

A contratação não deverá eliminar responsabilidade institucional, continuidade ou capacidade de substituição.

---

## 1007. Garantia de conformidade

Leis, normas, regulamentos e contratos deverão orientar a arquitetura desde sua origem.

---

## 1008. Garantia de aprendizagem

Incidentes, falhas e exercícios deverão produzir melhorias acompanhadas e verificáveis.

---

## 1009. Modelo integrado de segurança operacional

O modelo deverá integrar:

- propósito;
- ativos;
- ameaças;
- vulnerabilidades;
- exposição;
- riscos;
- controles;
- identidades;
- dados;
- observabilidade;
- detecção;
- resposta;
- recuperação;
- reparação;
- aprendizagem.

---

## 1010. Fluxo integrado de segurança

O fluxo deverá seguir:

1. conhecer;
2. classificar;
3. compreender;
4. proteger;
5. observar;
6. detectar;
7. qualificar;
8. declarar;
9. conter;
10. investigar;
11. erradicar;
12. recuperar;
13. comunicar;
14. reparar;
15. aprender;
16. evoluir.

---

## 1011. Conhecer antes de proteger

A organização não conseguirá proteger adequadamente ativos, pessoas e missões que desconhece.

---

## 1012. Compreender antes de controlar

Controles deverão responder a riscos reais e contextuais, não apenas a modelos genéricos.

---

## 1013. Identificar antes de autorizar

Nenhuma entidade deverá receber autoridade relevante sem identidade compatível com o risco.

---

## 1014. Limitar antes de confiar

Confiança deverá operar dentro de fronteiras verificáveis.

---

## 1015. Observar antes de concluir

A ausência de alerta não deverá ser confundida com ausência de ameaça.

---

## 1016. Conter antes de perder

Quando o risco crescer rapidamente, a operação deverá preservar vida, evidências e opções futuras.

---

## 1017. Investigar antes de acusar

Responsabilidade deverá ser apurada com evidências, contexto e imparcialidade.

---

## 1018. Recuperar antes de normalizar

O retorno deverá ser seguro e verificável, não apenas rápido.

---

## 1019. Reparar antes de encerrar

O encerramento técnico não deverá apagar pessoas, direitos e impactos ainda pendentes.

---

## 1020. Aprender antes de repetir

A repetição de falha conhecida sem ação adequada será sinal de fragilidade institucional.

---

## 1021. Relação com o arquivo 014

Configuração e estado operacional deverão tornar desvios, alterações e condições de segurança reconhecíveis.

---

## 1022. Relação com o arquivo 015

Capacidade e saturação deverão considerar os recursos necessários para prevenção, detecção, resposta e recuperação.

---

## 1023. Relação com o arquivo 016

Disponibilidade e confiabilidade deverão incluir controles de segurança e seus modos de falha.

---

## 1024. Relação com o arquivo 017

Ativos, dependências e caminhos de impacto deverão orientar proteção, contenção e recuperação.

---

## 1025. Relação com o arquivo 018

Contingência e operação degradada deverão preservar controles mínimos, autoridade e evidências.

---

## 1026. Relação com o arquivo 019

Backups deverão ser protegidos, isolados, verificáveis e recuperáveis diante de ataque ou falha.

---

## 1027. Relação com o arquivo 020

Continuidade e disaster recovery deverão considerar incidentes de segurança como cenários fundamentais.

---

## 1028. Relação com o arquivo 021

Runbooks e playbooks deverão orientar resposta sem eliminar discernimento, autoridade e adaptação.

---

## 1029. Relação com o arquivo 022

Automações e auto-remediações deverão operar dentro de limites, controles, evidências e possibilidade de interrupção.

---

## 1030. Relação com o arquivo 023

Agentes deverão preservar identidade, menor privilégio, supervisão, segurança de memória, ferramentas e responsabilidade.

---

## 1031. Relação com a EVA

A EVA deverá ampliar a capacidade de compreender riscos, aprender com incidentes e cooperar na proteção da vida.

---

## 1032. Relação com o OM

O OM poderá coordenar capacidades de segurança sem concentrar autoridade ilimitada ou eliminar responsabilidades locais.

---

## 1033. Relação com o CCM

O CCM deverá tratar incidentes como missões que exigem contexto, prioridade, coordenação, decisão, ação, avaliação e aprendizagem.

---

## 1034. Relação com a NÓS S.A.

A NÓS S.A., como instituição curadora, deverá preservar:

- princípios;
- governança;
- continuidade;
- memória;
- responsabilidade;
- legitimidade;
- evolução da segurança.

---

## 1035. Relação com Nosso Zelo

Nosso Zelo deverá proteger pessoas em sua interface de entrada, oferecendo:

- identidade verificável;
- comunicação segura;
- proteção de dados;
- denúncia;
- acompanhamento;
- contestação;
- atendimento humano;
- reparação.

---

## 1036. O que a segurança jamais deverá fazer

A segurança jamais deverá:

- justificar abuso;
- ocultar incidente;
- eliminar responsabilidade;
- utilizar medo como controle;
- discriminar;
- vigiar sem necessidade;
- destruir evidências;
- manter exceções indefinidas;
- sacrificar pessoas para proteger indicadores;
- impedir contestação legítima.

---

## 1037. Princípios permanentes

A segurança operacional deverá permanecer orientada por:

- vida;
- dignidade;
- verdade;
- propósito;
- prudência;
- justiça;
- responsabilidade;
- legitimidade;
- proporcionalidade;
- transparência;
- cooperação;
- continuidade;
- aprendizagem.

---

## 1038. Virtudes aplicadas

As virtudes serão expressas operacionalmente por:

- prudência para avaliar riscos;
- coragem para interromper;
- justiça para proteger direitos;
- temperança para limitar controles;
- humildade para reconhecer pontos cegos;
- honestidade para declarar incidentes;
- cuidado para reparar;
- cooperação para responder;
- perseverança para recuperar;
- responsabilidade para prestar contas.

---

## 1039. Declaração de capacidade segura

A Plataforma UNO estará preparada quando conseguir demonstrar:

- o que protege;
- contra quais riscos;
- com quais controles;
- quem responde;
- como observa;
- como detecta;
- como contém;
- como investiga;
- como recupera;
- como repara;
- como aprende;
- como continua.

---

## 1040. Resultado esperado

A aplicação deste documento deverá produzir uma segurança:

- humana;
- verificável;
- proporcional;
- contínua;
- preventiva;
- responsiva;
- recuperável;
- federada;
- responsável;
- compatível com o propósito.

---

## 1041. Encerramento

A segurança da Plataforma UNO não deverá ser construída como muralha destinada a separar pessoas daquilo que precisam.

Deverá funcionar como uma arquitetura viva de proteção, confiança, responsabilidade e continuidade.

Sua maturidade não será medida apenas pela quantidade de ataques bloqueados.

Também será medida por sua capacidade de:

- proteger sem humilhar;
- observar sem vigiar excessivamente;
- limitar sem paralisar;
- responder sem agir de forma arbitrária;
- investigar sem acusar prematuramente;
- recuperar sem reintroduzir fragilidades;
- reparar sem ocultar impactos;
- aprender sem apagar responsabilidades.

A melhor resposta não será necessariamente a maior, a mais rápida ou a mais visível.

Será aquela suficiente para a realidade existente, capaz de preservar vida, dignidade, missão, evidências e futuro.

A segurança não existirá para defender a tecnologia de qualquer custo humano.

A tecnologia deverá ser protegida porque serve a pessoas, organizações, comunidades e missões legítimas.

Quando cada identidade puder ser reconhecida, cada autoridade puder ser limitada, cada risco puder ser compreendido, cada incidente puder ser enfrentado e cada dano puder ser reparado, a segurança deixará de ser apenas um conjunto de controles.

Ela se tornará consciência protetiva integrada à Engenharia Oficial da Plataforma UNO.

---

**Fim do arquivo `024-seguranca-na-operacao-e-resposta-operacional.md`.**
