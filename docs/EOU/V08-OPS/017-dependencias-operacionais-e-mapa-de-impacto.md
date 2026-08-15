# V08 — OPS

# 017 — Dependências Operacionais e Mapa de Impacto

## Engenharia Oficial da Plataforma UNO

---

## Nome Oficial do Arquivo

`017-dependencias-operacionais-e-mapa-de-impacto.md`

---

## Posição na Sequência de OPS

O Arquivo 016 estabeleceu como a Plataforma UNO compreende, mede e governa:

- disponibilidade;
- confiabilidade;
- SLIs;
- SLOs;
- SLAs;
- error budgets;
- qualidade de serviço;
- compromissos operacionais.

O Arquivo 017 deverá estabelecer como OPS identifica, representa, acompanha e interpreta as relações de dependência que sustentam cada Capacidade, Serviço, Operação e Missão.

Seu propósito será permitir que a Plataforma compreenda não apenas:

> O que está funcionando?

Mas também:

> De que isso depende?

> O que depende disso?

> Qual impacto poderá surgir se essa condição mudar?

---

## Pergunta Fundamental

> Quais dependências sustentam cada Capacidade Operacional e como uma alteração, degradação ou falha poderá propagar impacto através do ecossistema?

---

## Princípio Central

Nenhuma Capacidade Operacional relevante existe isoladamente.

Toda operação depende de alguma combinação entre:

- pessoas;
- organizações;
- Serviços;
- recursos;
- dados;
- conhecimento;
- agentes;
- ferramentas;
- fornecedores;
- instalações;
- credenciais;
- contratos;
- redes;
- integrações;
- decisões;
- condições externas.

Compreender uma operação exige compreender as relações que tornam sua existência possível.

---

## Consequência

Um componente poderá parecer saudável...

enquanto uma Dependência necessária permanece degradada.

Um Serviço poderá continuar respondendo...

enquanto sua capacidade de produzir resultado útil foi comprometida.

Uma mudança local poderá parecer segura...

mas gerar consequências em múltiplas Capacidades, organizações ou Missões.

Uma falha pequena poderá possuir grande impacto...

quando ocupa posição crítica no Grafo Operacional.

E uma falha tecnicamente grave poderá possuir impacto limitado...

quando existem alternativas, isolamento e capacidade de substituição.

---

## Invariante Fundamental

OPS deverá distinguir:

`CONDIÇÃO DA DEPENDÊNCIA`

de:

`IMPACTO PRODUZIDO`

Uma Dependência degradada não gera necessariamente o mesmo impacto em todos os consumidores.

E um impacto relevante poderá existir mesmo quando nenhuma Dependência isolada parece completamente indisponível.

---

## Relação Arquitetural

O Arquivo 016 responde:

> A Capacidade está disponível e permanece confiável dentro dos objetivos de serviço necessários?

O Arquivo 017 responderá:

> Quais relações sustentam essa Capacidade e como mudanças nessas relações poderão afetar Serviços, consumidores e Missões?

O Arquivo 018 responderá:

> Quando o impacto se concretiza ou se torna provável, quais contingências deverão ser ativadas e como a operação deverá continuar em condição degradada?

---

## Fronteira do Arquivo 017

Este arquivo deverá aprofundar:

- identificação de Dependências;
- classificação de Dependências;
- representação de relações operacionais;
- Grafo Operacional;
- direção da dependência;
- dependentes e dependências;
- dependências diretas e indiretas;
- dependências obrigatórias e opcionais;
- dependências internas e externas;
- dependências técnicas, humanas e institucionais;
- criticidade;
- propagação de impacto;
- blast radius;
- caminhos críticos;
- pontos únicos de falha;
- concentração de dependências;
- impacto potencial e impacto observado;
- análise de mudanças;
- análise de incidentes;
- análise de Missões;
- confiança e atualidade do mapa;
- descoberta de dependências desconhecidas;
- governança do mapa;
- inteligência de impacto.

Este arquivo não deverá absorver integralmente:

- ativação de contingência;
- operação degradada;
- recuperação operacional;
- backup e restauração;
- disaster recovery;
- execução de runbooks;
- automação de remediação;
- resposta de segurança;
- resiliência sistêmica completa.

Esses temas pertencem aos arquivos seguintes.

---

## Direção de Aprofundamento

O Arquivo 017 deverá ser desenvolvido através dos seguintes lotes:

### Lote 1 — Fundamentos e Ontologia das Dependências Operacionais

- conceito de Dependência Operacional;
- dependência como relação;
- depender e ser dependido;
- origem e destino;
- direção;
- necessidade;
- suficiência;
- substituibilidade;
- contexto;
- temporalidade;
- escopo;
- invariantes fundamentais.

### Lote 2 — Tipos e Classificações de Dependências

- dependências técnicas;
- dependências de Serviço;
- dependências de dados;
- dependências humanas;
- dependências organizacionais;
- dependências institucionais;
- dependências contratuais;
- dependências físicas;
- dependências de segurança;
- dependências cognitivas;
- dependências de fornecedores;
- dependências externas;
- dependências obrigatórias, opcionais e condicionais.

### Lote 3 — Grafo Operacional e Representação Estrutural

- nós;
- relações;
- direção;
- cardinalidade;
- profundidade;
- caminhos;
- ciclos;
- hierarquias;
- agrupamentos;
- camadas;
- subgrafos;
- versões;
- proveniência;
- confiança;
- temporalidade do Grafo;
- descoberta e reconciliação.

### Lote 4 — Mapa de Impacto e Propagação

- impacto direto;
- impacto indireto;
- impacto potencial;
- impacto observado;
- impacto acumulado;
- propagação;
- blast radius;
- caminhos críticos;
- concentração;
- cascatas;
- efeito dominó;
- impacto transversal;
- impacto sobre consumidores;
- impacto sobre Missões;
- impacto institucional.

### Lote 5 — Análise Operacional e Decisão

- análise de mudança;
- análise de incidente;
- análise de risco;
- análise de indisponibilidade;
- análise de saturação;
- análise de configuração;
- análise de Provider;
- análise de segurança;
- priorização;
- criticidade;
- alternativas;
- simulação;
- what-if;
- avaliação antes da execução.

### Lote 6 — Inteligência, Governança e Encerramento Arquitetural

- atualização contínua;
- dependências desconhecidas;
- dependências inferidas;
- validação humana;
- Eva;
- Agentes;
- Automações;
- confiança;
- explicabilidade;
- auditoria;
- governança;
- métricas;
- maturidade;
- anti-padrões;
- invariantes;
- garantias mínimas;
- modelo integrado;
- Princípio Final;
- conclusão do Arquivo 017;
- transição para o Arquivo 018.

---

## Resultado Esperado

Ao concluir o Arquivo 017, OPS deverá ser capaz de responder:

- de que depende determinada Capacidade;
- quais elementos dependem dela;
- quais relações são críticas;
- quais dependências são substituíveis;
- quais dependências são desconhecidas ou pouco confiáveis;
- qual caminho operacional sustenta determinado resultado;
- onde existe ponto único de falha;
- onde existe concentração de risco;
- qual impacto poderá surgir diante de uma mudança;
- quais Missões poderão ser afetadas;
- quais consumidores poderão perder acesso;
- qual extensão provável do impacto;
- quais relações precisam ser verificadas;
- quais alternativas existem;
- quanto confiar no mapa atual;
- quando escalar análise para operadores, curadores ou CCM.

---

## Declaração de Direção

O Arquivo 017 não deverá transformar Dependências em uma lista estática de componentes.

Também não deverá transformar impacto em uma estimativa genérica desconectada da realidade.

Deverá estabelecer uma arquitetura através da qual a Plataforma UNO consiga compreender continuamente:

- o que sustenta cada Capacidade;
- como as relações mudam;
- onde o risco se concentra;
- como consequências poderão se propagar;
- quem poderá ser afetado;
- quais Missões poderão ser comprometidas;
- e quais decisões deverão considerar essas relações antes de produzir novas consequências.

---

## Princípio de Continuidade

Onde houver uma Capacidade...

existirão condições que sustentam sua operação.

Onde existirem condições relacionadas...

existirão Dependências.

Onde existirem Dependências...

existirá possibilidade de propagação.

Onde existir propagação...

existirá impacto.

E onde a Plataforma UNO conseguir compreender essas relações antes, durante e depois de cada mudança...

existirá consciência operacional suficiente para agir sem tratar cada parte do ecossistema como se estivesse isolada.
