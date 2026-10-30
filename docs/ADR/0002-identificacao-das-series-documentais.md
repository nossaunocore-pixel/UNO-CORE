# ADR-0002 — Identificação distinta das séries documentais da EOU

- **Status:** Proposto — aguardando validação do fundador
- **Data:** 30 de outubro de 2026
- **Escopo:** organização, indexação e referências da Engenharia Oficial da UNO

## Contexto

A auditoria do branch `main` identificou mais de uma série documental com numeração sobreposta:

1. A coleção fundacional `EOU/volumes/`, anunciada como oito volumes.
2. A coleção de domínios `docs/EOU/V01` até `docs/EOU/V40`.
3. Capítulos e subdocumentos internos desses diretórios.

A sobreposição gera ambiguidades concretas:

- O índice fundacional anuncia oito volumes, mas o arquivo autônomo EOU/volumes/volume-06-conhecimento-organizacional.md não existe nesse caminho.
- O fundador forneceu a transcrição da imagem oficial do Volume 06, identificando-o como Conhecimento Organizacional — Arquitetura Cognitiva e Institucional, com ciclo 06 concluído, lema “Um ciclo completo. Um fundamento eterno.” e data de 06 de agosto de 2026.
- docs/EOU/V06-CO/README.md também se intitula “Conhecimento Organizacional”, consistente com a identificação visual fornecida. Entretanto, o catálogo geral descreve EOU-V06 como “Centro de Operações (CO)”. A divergência relevante está na nomenclatura/indexação do catálogo e na localização do arquivo fundacional autônomo, não na identidade temática do Volume 06.
- O `docs/EOU/README.md` e o `docs/EOU/CATALOGO.md` associam EOU-V04 a EVA, V05 a Oficina Mestre, V06 a CO, V07 a CCM e V08 a OPS, enquanto os oito volumes fundacionais usam nomes diferentes para V04 e V05 e incluem Conhecimento Organizacional no V06.
- A coleção `docs/EOU/V09` a `V40` apresenta, no snapshot auditado, diretórios com apenas README introdutório, enquanto V01–V08 possuem conjuntos documentais de tamanhos muito diferentes.

## Problema

A mesma forma de identificação numérica é usada para conjuntos que não têm correspondência unívoca. Isso dificulta citações, rastreabilidade, versionamento e instruções de implementação.

## Proposta

Separar as duas séries por prefixos distintos, preservando os caminhos atuais como aliases históricos durante a transição:

- **Fundacionais:** `FND-V01` a `FND-V08`, referentes aos oito volumes fundacionais.
- **Domínios EOU:** `EOU-V01` a `EOU-V40`, referentes aos quarenta domínios da coleção `docs/EOU/`.

Os identificadores propostos são rótulos lógicos, não ordem de precedência automática. A EOU deverá definir qual documento é normativo para cada assunto, como tratar divergências e como referenciar materiais derivados.

Nenhum arquivo deverá ser movido, renomeado, apagado ou reescrito até que:
1. a relação entre cada volume fundacional e os diretórios de domínio seja mapeada;
2. o conteúdo completo de V06-CO seja comparado com a imagem e demais materiais do Volume 06 concluído, para confirmar se é o próprio volume, sua documentação textual ou um conjunto derivado;
3. o significado e a nomenclatura de V04, V05, V06, V07 e V08 sejam reconciliados;
4. o fundador aprove a convenção.

## Alternativas consideradas

### A. Manter numeração atual sem distinção
Rejeitada como solução definitiva, pois mantém a ambiguidade já observada.

### B. Renumerar os 40 domínios
Não recomendada nesta fase, pois poderia quebrar referências e histórico documental.

### C. Distinguir por prefixos e manter aliases
Proposta preferida por preservar caminhos históricos, reduzir colisões e permitir migração gradual.

## Consequências esperadas

- Referências a volumes tornam-se inequívocas.
- A documentação pode mapear relações entre fundamentos e domínios sem sugerir equivalência inexistente.
- Antigravity e agentes poderão apontar para fontes com identificadores estáveis.
- Será necessário atualizar índices, glossário e links após aprovação.
- A migração deverá manter redirecionamentos/referências antigas e histórico.

## Impacto na V7 e na V8

A V7 deve utilizar somente documentos e conceitos cuja fonte e estado estejam identificados, evitando que a ambiguidade documental se converta em comportamento de produto. A V8 poderá receber melhorias de organização e governança documental após validação, sem antecipar decisões comunitárias.

## Critérios para aceitar este ADR

- Mapeamento completo dos oito volumes fundacionais, incluindo a localização e a representação documental do Volume 06 já identificado pelo fundador.
- Mapeamento dos quarenta domínios EOU.
- Relação explícita entre FND e EOU por assunto.
- Glossário atualizado.
- Links e índices verificados.
- Aprovação expressa do fundador.

## Limites

Este ADR está **proposto**, não aceito. Não autoriza renomear arquivos, alterar numeração, redefinir siglas ou modificar a autoridade de documentos existentes.


## Evidência complementar recebida do fundador — Volume 06

Em 30 de outubro de 2026, o fundador forneceu a transcrição dos elementos de uma imagem identificada como Engenharia Oficial — Plataforma UNO, Volume 06. Essa evidência informa:

- **Título:** Conhecimento Organizacional — Arquitetura Cognitiva e Institucional.
- **Estado do ciclo:** 06 Concluído.
- **Lema:** “Um ciclo completo. Um fundamento eterno.”
- **Data indicada:** 06 de agosto de 2026.
- **Declarações:** Engenharia Oficial declarada; Nós S.A. fundada; missão definida; futuro em construção.
- **Elementos organizacionais:** Organizações, Engenharia Oficial, Nós S.A., Nósu, S.A. Fundadora, Instituição Curadora, Curadoria, Stewardship, valor público e valor compartilhado, Governança, Inteligência organizacional e Conhecimento organizacional.
- **Pilares:** conhecer, compreender, preservar, evoluir e transformar.
- **Propósitos:** servir melhor à sociedade e contribuir para que cada geração seja melhor que a anterior.

A transcrição fornecida pelo fundador é tratada como evidência de identificação e estado declarado do Volume 06. Ela não substitui a leitura integral dos arquivos que compõem o volume nem autoriza alterar os catálogos sem reconciliação. A grafia “Nósu, S.A.” foi preservada exatamente como transcrita; confirmar a forma oficial antes de normalizar.

**Atualização da conclusão:** a identidade temática e o estado concluído do Volume 06 estão agora confirmados pela evidência fornecida pelo fundador. Permanecem pendentes a localização/organização do texto integral canônico, a correspondência entre o conteúdo do diretório V06-CO e a imagem, e a correção dos índices que apresentam V06 como Centro de Operações. O ADR continua proposto porque a convenção global de identificação das séries ainda depende de validação.
