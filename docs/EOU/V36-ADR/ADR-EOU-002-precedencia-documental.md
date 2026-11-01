# ADR-EOU-002 — Precedência documental e autoridade por tipo de decisão

- Estado: **proposta para decisão do fundador e revisão técnica**
- Data: 2026-10-31
- Relacionados: EOU V01, V02, V03, V17, V34, V36, V37, V38
- Não aprovado: esta proposta não altera a regra vigente do V01 até ratificação expressa.

## 1. Contexto

V01 declara que prevalece quando há conflito entre documentos técnicos. V03 se apresenta como fundamento conceitual permanente e afirma que os demais volumes especializam seus princípios. V02 descreve a arquitetura oficial. Sem tipagem, essas declarações podem parecer concorrentes quando um conflito envolve princípios, conceitos, arquitetura ou contrato de domínio.

## 2. Problema a resolver

É necessário preservar a autoridade normativa de V01 sem transformar V01 em fonte de detalhes conceituais, schemas ou decisões locais; preservar a estabilidade conceitual de V03 sem permitir que conceitos se sobreponham a regras institucionais; e manter V02 como arquitetura de referência sem substituir contratos dos volumes especializados.

## 3. Regra de precedência proposta

A seguinte hierarquia tipada é proposta para ratificação:

1. **Atos institucionais e obrigações legais válidas:** prevalecem no respectivo âmbito jurídico; documentação técnica não os substitui.
2. **V01 — Constituição Técnica:** prevalece em princípios, restrições normativas, integridade, segurança, governança técnica e limites obrigatórios da engenharia.
3. **Decisões institucionais formalmente aprovadas e ADRs aceitos:** governam o assunto e o escopo específicos que registram, desde que compatíveis com V01 e com obrigações legais.
4. **V03 — MUE:** é referência conceitual universal para semântica de entidade, identidade conceitual, atributo, relação, evento e ciclo de vida; não define por si só autoridade jurídica, permissão, schema físico ou implementação.
5. **V02 — Arquitetura Oficial:** define camadas, componentes, fronteiras e relações arquiteturais; não substitui o significado do MUE nem os contratos especializados.
6. **Volumes de domínio:** definem regras, estados, dados e contratos de seus respectivos domínios dentro dos limites acima.
7. **Padrões, guias, catálogos e documentação operacional:** detalham execução e conformidade, sem criar autoridade acima das fontes anteriores.

Em conflito entre dois documentos do mesmo nível, o conflito deve ser registrado em ADR, com escopo, impacto, alternativas e decisão explícita. Data mais recente, isoladamente, não resolve precedência.

## 4. Limites e salvaguardas

- Um ADR aceito não pode revogar V01 nem contrariar obrigação legal; se uma regra constitucional precisar mudar, o próprio V01 deve passar por processo formal de revisão.
- V03 não é um banco de dados, cadastro de pessoas ou sistema de autorização.
- V28 aplica a taxonomia UNO e as regras de titularidade/representação sobre o meta-modelo de V03.
- V13 define persistência física, ownership de dados e migrações.
- V17 é responsável por grants e autorização efetiva.
- V36 registra o processo decisório, mas não concede a si mesmo autoridade de aprovação.
- Uma recomendação técnica, resposta de agente ou comentário em PR não equivale a decisão do fundador.

## 5. Alternativas consideradas

- **Precedência absoluta de V01 sem tipagem:** preserva simplicidade, mas pode fazer a Constituição ser usada como especificação de detalhes que não foram definidos nela.
- **V03 como fundamento superior a todos os volumes:** rejeitada nesta proposta porque confundiria autoridade conceitual com autoridade normativa e institucional.
- **Último documento atualizado prevalece:** rejeitada porque data/ordem de commit não é autoridade de decisão.
- **Precedência tipada por assunto:** recomendada para análise, sujeita à aprovação do fundador.

## 6. Consequências esperadas se aprovada

- Conflitos são classificados por natureza antes de serem resolvidos.
- V01, V02 e V03 mantêm funções distintas e complementares.
- ADRs passam a declarar a categoria de decisão e a fonte de autoridade.
- Mudanças em conceitos universais, arquitetura e contratos de domínio deixam rastros separados.
- A coleção não presume que a regra proposta esteja vigente antes da ratificação.

## 7. Decisões necessárias

O fundador deve confirmar ou alterar:
- a precedência tipada proposta;
- a posição dos atos institucionais/obrigações legais;
- a relação entre ADR aceito e V01;
- a função de V03 como autoridade conceitual, sem schema físico;
- a autoridade de V02 sobre camadas e componentes.

## 8. Critérios de aceite

- decisão explícita do fundador;
- revisão técnica dos impactos nos 40 volumes;
- atualização coordenada de V01, V02, V03, V36, V37 e V38;
- validação de links, referências e estados de ADR;
- CI documental no SHA exato.

## 9. Estado de implementação

Nenhuma alteração de código, schema, migration ou configuração é autorizada por esta proposta. Até sua aceitação, a regra textual atual de V01 permanece registrada, e a ambiguidade deve ser tratada como pendência documental.
