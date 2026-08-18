# 019 — Backup, Restauração e Recuperabilidade

## Engenharia Oficial da Plataforma UNO  
### Volume 08 — OPS  
### Operações, Continuidade e Consciência Operacional

---

## Declaração de abertura

A memória operacional da Plataforma UNO não poderá depender da permanência de um único dispositivo, serviço, banco de dados, fornecedor, território, organização ou pessoa.

Sistemas falham.

Dispositivos se deterioram.

Arquivos são alterados.

Dados podem ser apagados.

Credenciais podem ser comprometidas.

Serviços podem tornar-se indisponíveis.

Organizações podem mudar.

Territórios podem perder conectividade.

Pessoas podem deixar de exercer suas funções.

A continuidade da UNO dependerá de sua capacidade de preservar, localizar, compreender, restaurar e validar aquilo que não poderá ser perdido.

Entretanto, possuir uma cópia não significa possuir recuperação.

Uma cópia poderá:

- estar incompleta;
- estar corrompida;
- estar desatualizada;
- possuir o mesmo defeito da origem;
- depender da mesma infraestrutura que falhou;
- estar inacessível;
- não possuir contexto;
- não conter configurações;
- não preservar permissões;
- não ser compatível com a versão recuperada;
- não ter sido testada;
- não permitir reconstrução coerente.

Por isso, este documento não tratará backup apenas como atividade de copiar dados.

Ele estabelecerá uma arquitetura de recuperabilidade.

---

## Propósito

Este arquivo define os princípios, modelos, classificações, responsabilidades, controles e garantias necessários para preservar e recuperar:

- dados;
- documentos;
- configurações;
- estados;
- eventos;
- evidências;
- códigos;
- modelos;
- políticas;
- identidades;
- permissões;
- conhecimento;
- memória institucional;
- relações arquiteturais;
- capacidades operacionais.

Seu propósito é assegurar que a UNO consiga demonstrar:

1. o que precisa ser preservado;
2. por que precisa ser preservado;
3. onde está preservado;
4. com qual frequência;
5. por quanto tempo;
6. sob qual proteção;
7. quem poderá acessá-lo;
8. como será restaurado;
9. como sua integridade será validada;
10. como a operação será reconstruída a partir dele.

---

## Tese fundamental

> Backup é a preservação de uma possibilidade.  
> Restauração é a recuperação de um conteúdo.  
> Recuperabilidade é a capacidade comprovada de reconstruir uma operação confiável a partir daquilo que foi preservado.

A UNO não considerará uma capacidade protegida apenas porque existe uma cópia.

A proteção somente será reconhecida quando houver evidência de que a cópia:

- existe;
- pode ser localizada;
- pode ser acessada por autoridade legítima;
- permanece íntegra;
- possui contexto;
- pode ser restaurada;
- pode ser validada;
- é suficiente para o propósito definido.

---

## Relação com os arquivos anteriores

Este documento se apoia especialmente em:

- `014-configuracao-e-estado-operacional.md`;
- `015-capacidade-desempenho-e-saturacao.md`;
- `016-disponibilidade-confiabilidade-e-slos.md`;
- `017-dependencias-operacionais-e-mapa-de-impacto.md`;
- `018-contingencia-recuperacao-e-operacao-degradada.md`.

O arquivo 014 estabelece quais configurações e estados deverão ser conhecidos.

O arquivo 015 permite calcular capacidade, volume, desempenho e saturação das estruturas de preservação.

O arquivo 016 estabelece compromissos de disponibilidade e confiabilidade.

O arquivo 017 permite identificar dependências e impactos relacionados aos dados e às fontes de recuperação.

O arquivo 018 estabelece a contingência e o processo geral de recuperação.

O arquivo 019 aprofunda a pergunta:

> Quais informações, estados, evidências e conhecimentos deverão ser preservados para que a UNO consiga reconstruir suas capacidades depois de uma perda?

---

## Delimitação

Este arquivo tratará especificamente de:

- inventário de objetos recuperáveis;
- classificação de dados e estados;
- estratégias de backup;
- cópias completas, incrementais e diferenciais;
- snapshots;
- réplicas;
- exportações;
- versionamento;
- retenção;
- imutabilidade;
- armazenamento;
- criptografia;
- isolamento;
- restauração;
- validação;
- reconciliação;
- testes;
- governança;
- recuperabilidade.

O arquivo não substituirá:

- continuidade operacional ampla;
- disaster recovery completo;
- resposta a incidentes;
- segurança da informação;
- arquivamento histórico;
- gestão documental;
- memória institucional;
- procedimentos detalhados de operação.

Essas capacidades serão integradas, mas aprofundadas em arquivos próprios.

---

## Estrutura de aprofundamento

Este arquivo será desenvolvido nos seguintes lotes:

### Lote 1 — Fundamentos de backup, restauração e recuperabilidade

Definirá:

- conceitos;
- diferenças fundamentais;
- objetos de preservação;
- finalidade;
- valor;
- perda;
- requisitos;
- invariantes;
- princípios de recuperabilidade.

### Lote 2 — Classificação, inventário e políticas de proteção

Definirá:

- classes de dados;
- criticidade;
- proprietários;
- custódia;
- temporalidade;
- retenção;
- objetivos de recuperação;
- requisitos normativos;
- matriz de proteção.

### Lote 3 — Estratégias e arquitetura de backup

Aprofundará:

- backup completo;
- incremental;
- diferencial;
- snapshots;
- réplicas;
- exportações;
- versionamento;
- regra de múltiplas cópias;
- isolamento;
- imutabilidade;
- distribuição territorial;
- fornecedores.

### Lote 4 — Restauração, reconstrução e reconciliação

Estabelecerá:

- solicitações de restauração;
- autorização;
- seleção da fonte;
- ambientes;
- sequenciamento;
- validação;
- reconstrução;
- reconciliação;
- retorno operacional.

### Lote 5 — Segurança, governança e ciclo de vida

Definirá:

- criptografia;
- identidade;
- acesso;
- segregação;
- cadeia de custódia;
- retenção;
- descarte;
- soberania;
- conformidade;
- fornecedores;
- auditoria.

### Lote 6 — Testes, evidências, maturidade e encerramento

Estabelecerá:

- testes de restauração;
- exercícios;
- indicadores;
- falhas de backup;
- capacidade comprovada;
- aprendizado;
- garantias permanentes;
- encerramento oficial.

---

# Lote 1 — Fundamentos de Backup, Restauração e Recuperabilidade

---

## 1. Backup

Backup é uma cópia protegida de dados, estados, configurações ou artefatos, criada para permitir recuperação depois de:

- perda;
- exclusão;
- corrupção;
- alteração indevida;
- falha;
- indisponibilidade;
- comprometimento;
- desastre;
- erro humano;
- mudança incompatível.

O backup deverá possuir finalidade explícita.

Uma cópia criada sem conhecer:

- o que protege;
- contra qual risco;
- por quanto tempo;
- para qual recuperação;
- sob qual responsabilidade;

não deverá ser considerada política de backup suficiente.

---

## 2. Restauração

Restauração é o processo de recuperar conteúdo preservado e torná-lo novamente disponível em determinado ambiente ou contexto.

Ela poderá restaurar:

- arquivo;
- documento;
- registro;
- banco de dados;
- configuração;
- aplicação;
- sistema;
- ambiente;
- identidade;
- permissão;
- modelo;
- infraestrutura;
- conjunto completo de capacidades.

Restauração não significa automaticamente recuperação.

O conteúdo restaurado poderá permanecer:

- incompatível;
- incompleto;
- desatualizado;
- inconsistente;
- inseguro;
- sem dependências;
- sem autoridade;
- incapaz de sustentar a operação.

---

## 3. Recuperabilidade

Recuperabilidade é a capacidade comprovável de recuperar determinado objeto, estado ou operação dentro de condições estabelecidas de:

- tempo;
- integridade;
- completude;
- segurança;
- consistência;
- autoridade;
- contexto;
- desempenho;
- conformidade.

Ela será determinada pelo conjunto:

- cópia preservada;
- documentação;
- ferramentas;
- infraestrutura;
- pessoas;
- conhecimento;
- permissões;
- procedimentos;
- testes;
- dependências;
- evidências.

> A recuperabilidade não está apenas no arquivo preservado.  
> Está na arquitetura que permite transformar esse arquivo novamente em capacidade operacional.

---

## 4. Recuperação

Recuperação é o processo mais amplo de restabelecer condições suficientes para que uma capacidade volte a cumprir seu propósito.

Ela poderá exigir:

- restauração de dados;
- reconstrução de infraestrutura;
- reinstalação;
- recomposição de identidades;
- restauração de configurações;
- reconciliação de eventos;
- revisão de permissões;
- validação;
- retomada progressiva.

O backup será uma das fontes da recuperação.

Não será necessariamente sua única fonte.

---

## 5. Arquivamento não é backup

Arquivamento preserva conteúdos por razões como:

- história;
- obrigação legal;
- memória;
- auditoria;
- referência;
- conhecimento;
- prova.

Backup preserva conteúdos para recuperação operacional.

Um arquivo histórico poderá não possuir estrutura adequada para restauração rápida.

Um backup operacional poderá não atender requisitos de preservação histórica.

As duas capacidades poderão compartilhar infraestrutura, mas deverão possuir:

- objetivos;
- políticas;
- retenções;
- acessos;
- formatos;
- responsabilidades;

claramente diferenciados.

---

## 6. Réplica não é backup

Uma réplica mantém uma cópia sincronizada ou aproximadamente sincronizada de uma origem.

Ela amplia:

- disponibilidade;
- desempenho;
- distribuição;
- tolerância a falha.

Entretanto, uma réplica poderá reproduzir imediatamente:

- exclusão;
- corrupção;
- alteração indevida;
- ataque;
- erro lógico;
- configuração errada.

A réplica será uma capacidade de continuidade e redundância.

Somente será considerada parte da estratégia de backup quando possuir mecanismos que preservem estados anteriores e impeçam a propagação integral da perda.

---

## 7. Snapshot não é recuperabilidade por si só

Snapshot é uma representação de determinado estado em um ponto do tempo.

Poderá ser:

- instantâneo;
- eficiente;
- integrado ao armazenamento;
- adequado para reversão rápida.

Porém, poderá depender da mesma:

- infraestrutura;
- conta;
- região;
- credencial;
- tecnologia;
- camada de armazenamento.

Um snapshot perdido junto com a origem não oferece recuperação.

Snapshots deverão ser combinados com outras estratégias quando a criticidade exigir isolamento real.

---

## 8. Sincronização não é backup

Sincronização mantém conteúdos semelhantes em diferentes locais ou dispositivos.

Ela é útil para:

- disponibilidade;
- colaboração;
- continuidade de acesso;
- distribuição.

Mas poderá sincronizar:

- exclusões;
- corrupção;
- ransomware;
- alterações indevidas;
- versões incompletas.

Serviços como unidades em nuvem somente integrarão a arquitetura de backup quando houver:

- histórico de versões;
- retenção;
- proteção contra exclusão;
- independência;
- controle de acesso;
- restauração testada.

---

## 9. Exportação

Exportação é a extração de dados de um sistema para formato que possa ser:

- armazenado;
- transportado;
- inspecionado;
- migrado;
- restaurado;
- processado externamente.

Uma exportação será especialmente importante quando houver risco de dependência excessiva de fornecedor.

Ela deverá preservar, conforme o propósito:

- conteúdo;
- estrutura;
- relações;
- metadados;
- identificadores;
- temporalidade;
- proveniência;
- permissões relevantes.

---

## 10. Versionamento

Versionamento preserva diferentes estados de um conteúdo ao longo do tempo.

Ele permite:

- recuperar versões anteriores;
- comparar mudanças;
- identificar autoria;
- reverter alterações;
- compreender evolução;
- preservar histórico.

O versionamento será fundamental para:

- código;
- documentação;
- políticas;
- configurações;
- esquemas;
- modelos;
- conteúdos;
- artefatos da Engenharia Oficial.

Entretanto, o repositório de versões também deverá possuir proteção independente.

---

## 11. O objeto recuperável

Objeto recuperável é qualquer conteúdo, estado, relação ou capacidade cuja perda exija possibilidade de restauração ou reconstrução.

Poderá ser:

- arquivo;
- pasta;
- documento;
- registro;
- tabela;
- banco;
- evento;
- fila;
- configuração;
- segredo;
- identidade;
- permissão;
- código;
- modelo;
- infraestrutura;
- política;
- contrato;
- conhecimento;
- mapa;
- evidência;
- memória.

Cada objeto deverá possuir identidade suficiente para ser:

- localizado;
- classificado;
- preservado;
- restaurado;
- validado.

---

## 12. Dados não são o único objeto de backup

Uma recuperação poderá falhar mesmo que todos os dados tenham sido preservados.

Também poderão ser necessários:

- esquemas;
- índices;
- dependências;
- configurações;
- versões;
- variáveis;
- certificados;
- chaves;
- políticas;
- documentação;
- procedimentos;
- imagens de infraestrutura;
- conhecimento operacional.

A UNO deverá proteger a capacidade de interpretar e utilizar os dados, não apenas os dados isolados.

---

## 13. Estado operacional

Estado operacional representa a condição de uma capacidade em determinado momento.

Poderá incluir:

- tarefas;
- filas;
- sessões;
- transações;
- Missões em andamento;
- eventos pendentes;
- decisões;
- reservas;
- bloqueios;
- dependências;
- versões.

A recuperação de dados sem recuperação ou classificação do estado poderá produzir:

- duplicidade;
- perda de execução;
- inconsistência;
- repetição de pagamentos;
- abandono de solicitações;
- resultados conflitantes.

---

## 14. Configurações

Configurações determinam como sistemas e capacidades funcionam.

Sua proteção deverá incluir:

- valores;
- versões;
- origem;
- ambiente;
- responsável;
- dependências;
- data de mudança;
- justificativa;
- validação.

Segredos não deverão ser armazenados de forma insegura junto às configurações comuns.

---

## 15. Código e artefatos executáveis

Código deverá ser preservado com:

- histórico;
- autoria;
- versões;
- dependências;
- instruções de construção;
- testes;
- artefatos;
- assinaturas quando aplicável.

A capacidade de recuperar um repositório não garante que seja possível reconstruir a aplicação.

Será necessário preservar também:

- ferramentas;
- versões de compilação;
- pacotes;
- registros;
- ambientes;
- instruções;
- dependências externas.

---

## 16. Infraestrutura como objeto recuperável

Quando a infraestrutura for definida por código ou modelos declarativos, deverão ser preservados:

- topologia;
- recursos;
- parâmetros;
- redes;
- identidades;
- permissões;
- políticas;
- dependências;
- regiões;
- versões.

A infraestrutura deverá poder ser reconstruída sem depender exclusivamente da memória de seus operadores.

---

## 17. Identidades e permissões

A recuperação deverá considerar:

- contas;
- papéis;
- grupos;
- relações;
- permissões;
- delegações;
- revogações;
- expirações;
- evidências de autoridade.

Segredos e credenciais não deverão ser simplesmente restaurados quando houver possibilidade de comprometimento.

A recuperação poderá exigir:

- rotação;
- nova emissão;
- revalidação;
- revogação;
- autenticação reforçada.

---

## 18. Conhecimento operacional

O conhecimento necessário à recuperação deverá ser preservado em:

- documentação;
- runbooks;
- playbooks;
- diagramas;
- inventários;
- contatos;
- procedimentos;
- registros de exercícios;
- decisões;
- lições.

Uma cópia tecnicamente íntegra será inútil se ninguém souber como utilizá-la.

---

## 19. Memória institucional

A memória institucional inclui:

- princípios;
- constituições;
- Engenharia Oficial;
- decisões;
- compromissos;
- versões normativas;
- registros;
- conhecimento acumulado;
- justificativas;
- histórico de mudanças.

Sua perda poderia comprometer não apenas funcionamento, mas identidade e legitimidade.

Por isso, deverá possuir proteção proporcional ao seu valor institucional.

---

## 20. Evidências

Evidências deverão ser preservadas para:

- auditoria;
- prestação de contas;
- investigação;
- defesa de direitos;
- aprendizado;
- conformidade;
- responsabilização.

A política deverá proteger:

- integridade;
- autenticidade;
- temporalidade;
- proveniência;
- cadeia de custódia;
- acesso;
- retenção.

---

## 21. Valor de recuperação

O valor de recuperação representa a importância de preservar determinado objeto para o retorno da operação.

Ele deverá considerar:

- função;
- criticidade;
- irreversibilidade;
- exclusividade;
- impacto da perda;
- obrigação;
- custo de reconstrução;
- tempo;
- relação com pessoas;
- relação com direitos;
- valor histórico;
- dependências.

O tamanho de um arquivo não determina seu valor.

Um pequeno registro de identidade poderá ser mais importante do que grandes volumes de dados reproduzíveis.

---

## 22. Perda de dados

Perda de dados poderá ocorrer por:

- exclusão;
- corrupção;
- sobrescrita;
- falha física;
- erro lógico;
- ataque;
- falha de fornecedor;
- indisponibilidade;
- incompatibilidade;
- expiração;
- ausência de chave;
- falta de contexto;
- deterioração de mídia.

A perda não será apenas desaparecimento.

Um conteúdo existente, mas impossível de interpretar, acessar ou validar, também poderá estar operacionalmente perdido.

---

## 23. Perda de contexto

Uma cópia poderá preservar valores e perder o significado das relações.

A proteção deverá incluir, quando necessário:

- esquemas;
- metadados;
- dicionários;
- unidades;
- identificadores;
- relações;
- versões;
- proveniência;
- regras;
- documentação.

---

## 24. Perda de acesso

O conteúdo poderá existir e permanecer inacessível por perda de:

- credencial;
- chave;
- autorização;
- contrato;
- conta;
- fornecedor;
- conectividade;
- conhecimento;
- compatibilidade.

A recuperabilidade deverá incluir meios legítimos de acesso emergencial, com governança e rastreabilidade.

---

## 25. Perda de integridade

A integridade poderá ser comprometida por:

- alteração;
- truncamento;
- corrupção;
- mistura de versões;
- manipulação;
- falha de transferência;
- erro de restauração.

A arquitetura deverá utilizar mecanismos de verificação adequados, como:

- checksums;
- assinaturas;
- comparação;
- validação de esquema;
- testes;
- amostragem;
- reconciliação.

---

## 26. Perda silenciosa

A perda silenciosa ocorre quando o conteúdo parece existir, mas está:

- incompleto;
- corrompido;
- desatualizado;
- inconsistente;
- sem metadados;
- sem chave;
- sem compatibilidade.

Ela é especialmente perigosa porque poderá ser descoberta somente durante uma emergência.

Testes periódicos deverão reduzir esse risco.

---

## 27. Corrupção histórica

Uma falha poderá permanecer por longo período e contaminar diversas gerações de backup.

A retenção deverá preservar diferentes pontos temporais suficientes para permitir retorno anterior ao início da corrupção.

A UNO não deverá assumir que a cópia mais recente é sempre a melhor fonte de recuperação.

---

## 28. Exclusão acidental

A arquitetura deverá prever:

- lixeira;
- versionamento;
- retenção;
- proteção contra exclusão;
- aprovação;
- imutabilidade;
- recuperação granular.

A exclusão da origem não deverá eliminar imediatamente todas as cópias.

---

## 29. Exclusão maliciosa

A proteção deverá considerar agentes capazes de tentar apagar:

- origem;
- backups;
- logs;
- chaves;
- evidências;
- configurações.

Por isso, deverão existir separações entre:

- administração da produção;
- administração do backup;
- exclusão;
- retenção;
- auditoria.

---

## 30. Ransomware e corrupção propagada

Cópias continuamente conectadas poderão ser comprometidas junto com a origem.

A estratégia deverá considerar:

- isolamento;
- imutabilidade;
- atraso;
- cópia offline;
- credenciais separadas;
- múltiplos domínios de falha;
- detecção de alterações anormais;
- retenção histórica.

---

## 31. Falha de fornecedor

A UNO deverá ser capaz de responder à perda de:

- conta;
- serviço;
- contrato;
- região;
- acesso;
- formato proprietário;
- capacidade de exportação.

A recuperabilidade deverá evitar dependência absoluta de um único fornecedor quando o impacto da perda for inaceitável.

---

## 32. Falha territorial

Cópias armazenadas no mesmo local físico poderão ser perdidas simultaneamente por:

- incêndio;
- inundação;
- furto;
- interrupção de energia;
- desastre;
- apreensão;
- destruição;
- perda de conectividade.

Objetos críticos deverão possuir distribuição territorial adequada.

---

## 33. Falha humana

A política deverá reconhecer que pessoas podem:

- esquecer;
- confundir;
- sobrescrever;
- excluir;
- utilizar versão incorreta;
- compartilhar indevidamente;
- perder credenciais;
- executar procedimento incompleto.

A arquitetura deverá reduzir dependência de memória e ação perfeita.

---

## 34. Falha de conhecimento

Mesmo com cópias disponíveis, a recuperação poderá falhar porque:

- o procedimento não existe;
- a documentação está desatualizada;
- o responsável não está disponível;
- a ferramenta não é conhecida;
- a relação entre componentes foi perdida.

Conhecimento de recuperação será parte do objeto protegido.

---

## 35. Finalidades do backup

Um backup poderá atender uma ou mais finalidades:

- recuperação de exclusão;
- reversão;
- recuperação de falha;
- reconstrução;
- continuidade;
- migração;
- auditoria;
- investigação;
- preservação histórica;
- conformidade;
- teste;
- proteção contra fornecedor.

Cada finalidade poderá exigir estratégia diferente.

---

## 36. Granularidade

A recuperação poderá ser:

- por campo;
- registro;
- documento;
- arquivo;
- pasta;
- tabela;
- banco;
- serviço;
- aplicação;
- ambiente;
- organização;
- território;
- plataforma.

Quanto maior a granularidade disponível, maior poderá ser a precisão da restauração.

Contudo, maior granularidade poderá aumentar:

- complexidade;
- custo;
- tempo;
- validação.

A granularidade deverá refletir necessidades reais.

---

## 37. Consistência

Backups deverão ser classificados quanto à consistência:

- consistente;
- consistente por aplicação;
- consistente por sistema de arquivos;
- transacionalmente consistente;
- eventualmente consistente;
- não confirmado.

A política deverá conhecer quais operações estavam em andamento no momento da cópia.

---

## 38. Cópia em estado ativo

Sistemas em funcionamento poderão exigir backup sem interrupção.

Nesse caso, deverão existir mecanismos para preservar:

- consistência;
- ordem;
- transações;
- dependências;
- integridade.

A velocidade de cópia não deverá comprometer a validade do estado preservado.

---

## 39. Cópia em estado interrompido

Algumas capacidades poderão exigir pausa ou congelamento para produzir estado confiável.

A interrupção deverá considerar:

- impacto;
- duração;
- janela;
- comunicação;
- dependências;
- retorno;
- validação.

---

## 40. Objetivo de ponto de recuperação

O objetivo de ponto de recuperação define quanta perda temporal poderá ser tolerada.

Poderá ser:

- zero;
- segundos;
- minutos;
- horas;
- dias;
- um ciclo específico.

Ele deverá ser definido por objeto ou classe de objetos.

---

## 41. Objetivo de tempo de recuperação

O objetivo de tempo de recuperação define em quanto tempo o objeto ou capacidade deverá voltar a estar disponível.

Ele deverá considerar:

- localização da cópia;
- volume;
- transferência;
- infraestrutura;
- pessoas;
- ferramentas;
- validação;
- dependências;
- reconciliação.

---

## 42. Relação entre ponto e tempo de recuperação

Uma política poderá preservar dados com frequência elevada, mas exigir muito tempo para restaurá-los.

Outra poderá restaurar rapidamente, mas perder grande intervalo de dados.

A arquitetura deverá equilibrar:

- frequência;
- velocidade;
- custo;
- complexidade;
- capacidade;
- impacto.

---

## 43. Objetivo de consistência

Além de tempo e ponto, deverá existir objetivo de consistência.

Ele deverá definir:

- quais relações precisam permanecer válidas;
- quais transações não poderão ser divididas;
- quais versões deverão coexistir;
- quais dependências precisam estar sincronizadas;
- quais divergências poderão ser reconciliadas.

---

## 44. Objetivo de completude

A completude determina o conjunto mínimo que deverá estar presente para permitir recuperação válida.

Poderá exigir:

- dados;
- metadados;
- esquemas;
- configurações;
- identidades;
- documentação;
- chaves;
- procedimentos;
- dependências.

---

## 45. Objetivo de confiabilidade

A política deverá definir o nível de confiança necessário na cópia e no processo de restauração.

Esse nível dependerá de:

- criticidade;
- testes;
- integridade;
- histórico;
- isolamento;
- imutabilidade;
- controle;
- evidências.

---

## 46. Domínio de falha

Domínio de falha é o conjunto de componentes que poderão ser perdidos por uma mesma causa.

Poderá ser:

- dispositivo;
- servidor;
- conta;
- aplicação;
- rede;
- região;
- fornecedor;
- organização;
- território;
- autoridade;
- tecnologia.

Cópias dentro do mesmo domínio de falha não serão independentes.

---

## 47. Independência

Uma cópia será tão protetiva quanto sua independência em relação à origem.

A independência poderá envolver:

- armazenamento;
- conta;
- credencial;
- fornecedor;
- tecnologia;
- região;
- organização;
- administração;
- formato.

Objetos críticos deverão possuir independência proporcional aos riscos.

---

## 48. Diversidade

Diferentes tecnologias, formatos ou locais poderão reduzir falhas comuns.

Porém, diversidade também aumenta:

- complexidade;
- custo;
- conhecimento necessário;
- dificuldade de teste.

Ela deverá ser aplicada quando reduzir risco de forma justificável.

---

## 49. Isolamento

Isolamento impede que alterações ou ataques na origem alcancem imediatamente a cópia.

Poderá ser:

- lógico;
- administrativo;
- temporal;
- físico;
- territorial;
- organizacional;
- offline.

Isolamento não deverá impedir recuperação dentro dos objetivos definidos.

---

## 50. Imutabilidade

Imutabilidade impede alteração ou exclusão de uma cópia durante determinado período.

Ela deverá proteger contra:

- erro;
- ataque;
- fraude;
- exclusão acidental;
- exclusão administrativa indevida.

A imutabilidade deverá possuir:

- política;
- período;
- autoridade;
- auditoria;
- mecanismo de expiração;
- compatibilidade normativa.

---

## 51. Integridade

A cópia deverá possuir mecanismos que permitam verificar se permaneceu íntegra.

A verificação poderá ocorrer:

- na criação;
- na transferência;
- no armazenamento;
- periodicamente;
- antes da restauração;
- depois da restauração.

---

## 52. Confidencialidade

Backups poderão concentrar grande quantidade de informação sensível.

Deverão ser protegidos por:

- criptografia;
- controle de acesso;
- segregação;
- registro;
- classificação;
- retenção;
- descarte.

Uma cópia não deverá reduzir as proteções aplicadas à origem.

---

## 53. Disponibilidade

Backups deverão permanecer acessíveis quando necessários.

A disponibilidade deverá considerar:

- credenciais;
- conectividade;
- fornecedor;
- região;
- ferramentas;
- pessoas;
- tempo de recuperação;
- capacidade de leitura;
- contratos.

Uma cópia excessivamente protegida, mas irrecuperável durante a contingência, não cumpre seu propósito.

---

## 54. Autenticidade

A UNO deverá ser capaz de confirmar:

- origem;
- autoria;
- momento;
- versão;
- cadeia de preservação;
- ausência de substituição indevida.

A autenticidade será especialmente importante para:

- evidências;
- documentos institucionais;
- políticas;
- código;
- decisões;
- registros jurídicos.

---

## 55. Proveniência

A proveniência deverá informar:

- de onde veio;
- como foi produzido;
- qual sistema originou;
- qual transformação ocorreu;
- qual versão representa;
- quem o preservou;
- quais dependências possui.

Sem proveniência, a restauração poderá utilizar conteúdo tecnicamente íntegro, porém semanticamente incorreto.

---

## 56. Temporalidade

Toda cópia deverá possuir referência temporal confiável.

Deverá ser possível distinguir:

- momento representado;
- momento de criação;
- momento de conclusão;
- período coberto;
- validade;
- retenção.

---

## 57. Retenção

Retenção define por quanto tempo uma cópia deverá ser preservada.

Ela deverá considerar:

- recuperabilidade;
- corrupção histórica;
- obrigações legais;
- valor;
- custo;
- privacidade;
- direito de eliminação;
- finalidade;
- capacidade de armazenamento.

Reter tudo indefinidamente não será política responsável.

Eliminar cedo demais poderá destruir a recuperação.

---

## 58. Expiração

Toda cópia deverá possuir regra de expiração ou justificativa de preservação permanente.

A expiração deverá ser:

- autorizada;
- rastreável;
- compatível com retenção;
- segura;
- suspensa quando houver obrigação de preservação.

---

## 59. Direito à eliminação e obrigação de preservação

A arquitetura deverá conciliar:

- privacidade;
- direitos dos titulares;
- obrigações legais;
- investigação;
- auditoria;
- memória;
- continuidade.

Uma solicitação de eliminação não deverá ser ignorada porque existem backups.

Ao mesmo tempo, uma cópia não deverá ser alterada de forma que destrua sua integridade sem procedimento adequado.

As estratégias específicas serão definidas no lote de governança e ciclo de vida.

---

## 60. Responsabilidade

Todo objeto protegido deverá possuir:

- proprietário;
- custodiante;
- operador;
- política;
- aprovador;
- responsável por teste;
- responsável por recuperação.

Esses papéis poderão ser exercidos por pessoas ou organizações diferentes.

---

## 61. Proprietário do objeto

O proprietário deverá definir:

- valor;
- finalidade;
- criticidade;
- requisitos;
- retenção;
- acesso;
- recuperação;
- validação.

O proprietário não será necessariamente quem armazena a cópia.

---

## 62. Custodiante

O custodiante deverá proteger:

- armazenamento;
- integridade;
- acesso;
- retenção;
- disponibilidade;
- evidências.

Ele não deverá alterar unilateralmente a finalidade do conteúdo.

---

## 63. Operador de backup

O operador deverá:

- acompanhar execuções;
- tratar falhas;
- verificar capacidade;
- preservar registros;
- executar procedimentos;
- escalar riscos.

Sua atuação deverá permanecer separada da autorização para excluir cópias críticas quando necessário.

---

## 64. Responsável pela restauração

Deverá possuir:

- competência;
- acesso;
- procedimentos;
- conhecimento;
- autoridade;
- capacidade de coordenação.

A restauração não deverá depender de uma única pessoa sem substituição prevista.

---

## 65. Responsável pela validação

A validação deverá ser realizada, quando possível, por instância diferente de quem executou a restauração.

Ela deverá confirmar:

- conteúdo;
- integridade;
- função;
- segurança;
- consistência;
- adequação ao propósito.

---

## 66. Backup automático

A automação será necessária para reduzir:

- esquecimento;
- variação;
- atraso;
- dependência humana.

Toda automação deverá possuir:

- proprietário;
- configuração;
- agenda;
- monitoramento;
- logs;
- alertas;
- comportamento de falha;
- testes.

Automatizar a criação não automatiza a garantia de recuperação.

---

## 67. Backup manual

Backups manuais poderão ser utilizados para:

- situações excepcionais;
- objetos específicos;
- transições;
- preservações extraordinárias;
- ambientes desconectados.

Deverão registrar:

- responsável;
- conteúdo;
- momento;
- destino;
- integridade;
- motivo;
- retenção.

---

## 68. Falha de backup

Uma falha deverá ser tratada como degradação da capacidade de recuperação.

Ela deverá informar:

- objeto desprotegido;
- período afetado;
- causa;
- cópia anterior disponível;
- impacto sobre objetivos;
- risco;
- ação;
- escalonamento.

Falhas repetidas não deverão ser normalizadas.

---

## 69. Janela sem proteção

Quando um backup falha ou fica atrasado, surge uma janela na qual alterações poderão não ser recuperáveis.

Essa janela deverá ser:

- calculada;
- comunicada;
- acompanhada;
- reduzida;
- considerada nas decisões operacionais.

---

## 70. Monitoramento

A arquitetura deverá monitorar:

- sucesso;
- falha;
- duração;
- volume;
- crescimento;
- integridade;
- retenção;
- capacidade;
- atraso;
- replicação;
- imutabilidade;
- testes;
- expiração.

O indicador “execução concluída” não comprova que o conteúdo é restaurável.

---

## 71. Alerta

Alertas deverão distinguir:

- falha isolada;
- falha recorrente;
- cópia atrasada;
- destino indisponível;
- integridade comprometida;
- retenção incorreta;
- capacidade próxima do limite;
- teste vencido;
- objeto sem proteção;
- credencial expirada.

---

## 72. Evidência de execução

Cada execução deverá produzir evidência contendo:

- política;
- objetos;
- início;
- término;
- resultado;
- volume;
- destino;
- integridade;
- erros;
- versão;
- retenção;
- identificador.

---

## 73. Evidência de recuperabilidade

A evidência de recuperabilidade deverá incluir:

- restauração testada;
- tempo medido;
- conteúdo validado;
- dependências verificadas;
- responsável;
- ambiente;
- resultado;
- limitações;
- validade do teste.

---

## 74. Testabilidade

Toda estratégia deverá ser concebida para permitir testes sem comprometer:

- produção;
- dados;
- segurança;
- privacidade;
- operação.

Uma política impossível de testar permanecerá baseada em fé.

---

## 75. Recuperabilidade granular

A arquitetura deverá permitir recuperar somente o necessário quando isso reduzir:

- tempo;
- impacto;
- risco;
- custo;
- conflito.

Contudo, recuperações granulares deverão preservar relações e consistência.

---

## 76. Recuperabilidade integral

Capacidades críticas deverão possuir meios de reconstrução integral quando:

- ambiente completo for perdido;
- fornecedor ficar indisponível;
- infraestrutura for destruída;
- comprometimento amplo exigir reconstrução limpa.

---

## 77. Recuperação limpa

Quando houver suspeita de comprometimento, a recuperação deverá utilizar fontes e ambientes confiáveis.

Não deverá reintroduzir:

- código malicioso;
- credenciais comprometidas;
- configuração insegura;
- dados corrompidos;
- vulnerabilidade conhecida.

---

## 78. Recuperabilidade local e sistêmica

Um objeto poderá ser recuperável isoladamente e insuficiente para recuperar o sistema.

A UNO deverá avaliar:

- recuperabilidade local;
- recuperabilidade das dependências;
- recuperabilidade da composição;
- recuperabilidade institucional.

---

## 79. Recuperabilidade humana

A arquitetura deverá garantir que existam pessoas capazes de:

- localizar;
- autorizar;
- acessar;
- restaurar;
- validar;
- reconciliar;
- comunicar.

Conhecimento crítico deverá possuir sucessão e distribuição adequadas.

---

## 80. Recuperabilidade organizacional

Organizações participantes deverão declarar:

- responsabilidades;
- capacidades;
- fontes;
- prazos;
- dependências;
- contatos;
- limites;
- evidências.

Contratos deverão refletir necessidades reais de recuperação.

---

## 81. Recuperabilidade federada

Em ambientes federados, cada organização poderá preservar seus próprios dados e responsabilidades.

A recuperação conjunta deverá definir:

- referências comuns;
- identificadores;
- ordem;
- autoridade;
- compartilhamento;
- validação;
- reconciliação.

Federação não deverá significar ausência de coordenação.

---

## 82. Recuperabilidade territorial

Territórios poderão possuir:

- conectividade limitada;
- infraestrutura própria;
- cópias locais;
- necessidade de operação desconectada;
- riscos específicos.

A estratégia deverá equilibrar:

- disponibilidade local;
- proteção externa;
- sincronização;
- soberania;
- recuperação.

---

## 83. Recuperabilidade e soberania

A localização e a custódia das cópias deverão considerar:

- legislação;
- jurisdição;
- contratos;
- sensibilidade;
- valor público;
- autonomia institucional;
- riscos geopolíticos;
- dependência de fornecedor.

---

## 84. Recuperabilidade econômica

A política deverá possuir recursos sustentáveis para:

- armazenamento;
- transferência;
- ferramentas;
- testes;
- pessoas;
- retenção;
- restauração;
- expansão.

Uma estratégia financeiramente impossível não será sustentável.

---

## 85. Custo da proteção e custo da perda

A decisão deverá comparar:

- custo de preservar;
- custo de restaurar;
- custo de reconstruir;
- custo da indisponibilidade;
- custo da perda;
- custo humano;
- custo institucional;
- custo jurídico;
- custo reputacional.

Objetos de baixo volume poderão justificar alta proteção quando sua perda for irreversível.

---

## 86. Princípio da proporcionalidade

A proteção deverá ser proporcional a:

- criticidade;
- sensibilidade;
- irreversibilidade;
- impacto;
- obrigação;
- frequência de mudança;
- dificuldade de reconstrução.

Nem todos os objetos exigirão a mesma estratégia.

---

## 87. Princípio da multiplicidade

Objetos críticos não deverão depender de uma única cópia.

A multiplicidade deverá considerar:

- versões;
- locais;
- tecnologias;
- domínios;
- administrações;
- fornecedores.

Quantidade sem independência não produz proteção suficiente.

---

## 88. Princípio da independência

Pelo menos uma fonte crítica deverá permanecer protegida de falhas e autoridades que possam comprometer simultaneamente a origem e as demais cópias.

---

## 89. Princípio da verificabilidade

Toda cópia deverá poder ser verificada quanto a:

- existência;
- integridade;
- autenticidade;
- completude;
- acessibilidade;
- restaurabilidade.

---

## 90. Princípio da temporalidade

Toda cópia deverá possuir:

- momento;
- período;
- retenção;
- expiração;
- validade de teste.

---

## 91. Princípio da menor exposição

A cópia não deverá ampliar desnecessariamente:

- acesso;
- compartilhamento;
- retenção;
- sensibilidade;
- superfície de ataque.

---

## 92. Princípio da reconstrução compreensível

A UNO deverá saber como transformar os objetos preservados novamente em capacidade.

Isso exige:

- ordem;
- ferramentas;
- documentação;
- autoridades;
- pessoas;
- critérios;
- validação.

---

## 93. Princípio da restauração governada

Nenhum conteúdo crítico deverá ser restaurado em produção sem:

- solicitação;
- autorização;
- escopo;
- fonte validada;
- plano;
- registro;
- verificação;
- possibilidade de reversão.

---

## 94. Princípio da recuperação sem confiança cega

Nenhuma cópia, ferramenta, pessoa, fornecedor ou procedimento deverá ser considerado infalível.

A arquitetura deverá utilizar:

- verificação;
- separação;
- comparação;
- testes;
- supervisão;
- evidência.

---

## 95. Princípio da preservação do significado

Backup deverá preservar aquilo que permite compreender o conteúdo.

Dados sem significado não recuperam uma instituição.

---

## 96. Princípio da proteção da memória

A Engenharia Oficial, seus princípios, decisões e registros deverão possuir proteção diferenciada porque constituem parte da identidade da UNO.

---

## 97. Invariantes fundamentais

Toda arquitetura de backup deverá preservar:

1. identidade do objeto;
2. finalidade;
3. proveniência;
4. temporalidade;
5. integridade;
6. autenticidade;
7. confidencialidade;
8. disponibilidade;
9. responsabilidade;
10. retenção;
11. possibilidade de restauração;
12. possibilidade de validação.

---

## 98. Antipadrões fundamentais

A UNO deverá evitar:

### 98.1 Cópia única

Depender de uma única fonte de recuperação.

### 98.2 Cópias no mesmo domínio de falha

Manter origem e cópia sob a mesma causa de perda.

### 98.3 Sincronização tratada como backup

Replicar imediatamente exclusões e corrupção.

### 98.4 Backup sem monitoramento

Descobrir falhas somente durante a restauração.

### 98.5 Backup sem teste

Presumir recuperabilidade.

### 98.6 Backup sem contexto

Preservar valores sem esquemas, relações ou documentação.

### 98.7 Retenção infinita e indiscriminada

Acumular risco e custo sem finalidade.

### 98.8 Administrador absoluto

Permitir que a mesma credencial apague origem, cópias e evidências.

### 98.9 Credenciais junto ao conteúdo

Armazenar chaves de forma que a perda ou exposição comprometa toda a recuperação.

### 98.10 Dependência de uma única pessoa

Tornar a restauração impossível na ausência de determinado operador.

---

## 99. Garantias do Lote 1

A Plataforma UNO deverá garantir que:

- todo objeto crítico seja identificado;
- toda cópia possua finalidade;
- toda política considere perda e corrupção;
- toda cópia preserve contexto suficiente;
- toda estratégia conheça seus domínios de falha;
- toda recuperação possua responsáveis;
- toda automação seja monitorada;
- toda falha gere visibilidade;
- toda fonte crítica possua verificação;
- toda restauração crítica seja governada;
- toda recuperabilidade seja comprovada por teste;
- nenhuma réplica, sincronização ou snapshot seja presumido como backup suficiente;
- nenhuma existência de cópia seja confundida com capacidade de recuperação.

---

## 100. Princípios consolidados

A Engenharia Oficial reconhece que:

1. backup é uma cópia com finalidade de recuperação;
2. restauração é diferente de recuperação;
3. recuperabilidade é uma capacidade composta;
4. dados não são o único objeto preservável;
5. significado, relações e configurações também precisam sobreviver;
6. réplica amplia disponibilidade, mas pode reproduzir perda;
7. sincronização não protege automaticamente contra exclusão;
8. cópias precisam atravessar domínios de falha;
9. imutabilidade reduz risco de destruição;
10. retenção deve equilibrar recuperação, privacidade e obrigação;
11. credenciais e conhecimento também podem impedir recuperação;
12. falha de backup é degradação operacional;
13. execução concluída não comprova restaurabilidade;
14. teste é a evidência central da recuperabilidade;
15. nenhuma proteção será suficiente se a instituição não souber reconstruir-se a partir dela.

---

## 101. Transição para o próximo lote

Os fundamentos estabelecidos neste lote definem o significado de backup, restauração e recuperabilidade para a Plataforma UNO.

O próximo lote estabelecerá como os objetos deverão ser:

- descobertos;
- inventariados;
- classificados;
- associados a proprietários;
- avaliados por criticidade;
- vinculados a objetivos de recuperação;
- submetidos a retenção;
- relacionados a normas;
- organizados em políticas de proteção.

Antes de escolher onde e como copiar, a UNO deverá saber exatamente o que está protegendo e qual realidade precisará reconstruir.

---

## Lote 2 — Classificação, Inventário e Políticas de Proteção

---

## 102. A necessidade de conhecer aquilo que será protegido

Nenhuma política de backup poderá ser considerada suficiente quando a instituição não souber exatamente:

- quais objetos existem;
- onde estão;
- quem responde por eles;
- qual valor possuem;
- com que frequência mudam;
- quais dependências carregam;
- quais leis e normas os alcançam;
- qual perda pode ser tolerada;
- em quanto tempo precisam ser recuperados;
- por quanto tempo devem ser preservados.

A criação de cópias sem inventário produz uma falsa percepção de segurança.

Nesse cenário, alguns conteúdos poderão ser copiados repetidamente, enquanto objetos indispensáveis permanecem desprotegidos.

> A primeira capacidade de backup não é copiar.  
> É conhecer aquilo que não poderá ser perdido.

---

## 103. Inventário de objetos recuperáveis

A UNO deverá manter um inventário oficial dos objetos recuperáveis.

Esse inventário deverá abranger, conforme aplicável:

- arquivos;
- documentos;
- bancos de dados;
- tabelas;
- registros;
- eventos;
- filas;
- configurações;
- códigos;
- artefatos;
- modelos;
- esquemas;
- identidades;
- permissões;
- evidências;
- políticas;
- contratos;
- mapas;
- conhecimentos;
- ambientes;
- infraestruturas;
- memórias institucionais.

O inventário deverá ser tratado como capacidade operacional viva.

---

## 104. Identificador único

Cada objeto ou conjunto protegido deverá possuir identificador estável.

O identificador deverá permitir relacionar:

- origem;
- cópias;
- versões;
- políticas;
- responsáveis;
- testes;
- restaurações;
- dependências;
- incidentes;
- retenções;
- descarte.

Mudanças de nome ou localização não deverão destruir a continuidade de sua identidade.

---

## 105. Granularidade do inventário

O inventário poderá registrar:

- objeto individual;
- conjunto lógico;
- coleção;
- banco;
- aplicação;
- ambiente;
- capacidade;
- domínio.

A granularidade deverá ser suficiente para diferenciar políticas quando existirem diferenças relevantes de:

- criticidade;
- sensibilidade;
- retenção;
- frequência;
- recuperação;
- responsabilidade.

Granularidade excessiva poderá tornar o inventário inviável.

Granularidade insuficiente poderá esconder objetos críticos dentro de conjuntos genéricos.

---

## 106. Descoberta de objetos

A descoberta poderá ocorrer por:

- declaração dos responsáveis;
- varredura técnica;
- análise de repositórios;
- análise de bancos;
- observação de fluxos;
- auditoria;
- documentação;
- mapas de dependência;
- contratos;
- agentes;
- relatos operacionais.

A descoberta automática deverá ser complementada por compreensão humana.

Uma ferramenta poderá encontrar um arquivo, mas não necessariamente compreender seu valor institucional.

---

## 107. Objetos não inventariados

Objetos descobertos sem inventário deverão ser tratados como risco.

A UNO deverá avaliar:

- origem;
- proprietário;
- finalidade;
- sensibilidade;
- dependências;
- necessidade de preservação;
- legitimidade da existência;
- descarte possível.

Nenhum objeto desconhecido deverá ser incluído indefinidamente em backups sem classificação.

---

## 108. Fontes não oficiais

Dados poderão existir em:

- computadores pessoais;
- celulares;
- planilhas;
- mensagens;
- e-mails;
- unidades externas;
- nuvens particulares;
- pastas temporárias;
- anotações;
- serviços não autorizados.

Essas fontes deverão ser identificadas porque poderão representar:

- conhecimento indispensável;
- cópia informal;
- risco de exposição;
- ausência de governança;
- dependência humana;
- duplicidade;
- inconsistência.

A política deverá migrar objetos essenciais para fontes oficiais e governadas.

---

## 109. Proprietário do objeto

Todo objeto deverá possuir proprietário responsável por definir:

- finalidade;
- valor;
- criticidade;
- sensibilidade;
- retenção;
- acesso;
- requisitos de recuperação;
- critérios de validação.

A ausência de proprietário deverá impedir que o objeto seja considerado adequadamente governado.

---

## 110. Custodiante

O custodiante será responsável por manter o objeto ou sua cópia dentro das condições estabelecidas.

Deverá responder por:

- armazenamento;
- proteção;
- integridade;
- disponibilidade;
- retenção;
- controle de acesso;
- evidências;
- descarte.

O custodiante não poderá alterar unilateralmente a finalidade ou os direitos relacionados ao objeto.

---

## 111. Consumidores e dependentes

O inventário deverá identificar quem utiliza ou depende do objeto.

Poderão ser:

- pessoas;
- Missões;
- serviços;
- organizações;
- agentes;
- automações;
- autoridades;
- integrações;
- territórios.

A criticidade deverá considerar o impacto sobre esses consumidores.

---

## 112. Fonte de autoridade

Todo objeto relevante deverá indicar sua fonte de autoridade.

Ela responderá qual versão ou sistema é reconhecido como referência legítima.

Poderão existir:

- fonte primária;
- fontes derivadas;
- réplicas;
- caches;
- exportações;
- versões de consulta;
- cópias históricas.

A restauração não deverá transformar uma fonte derivada em autoridade sem validação.

---

## 113. Sistema de registro

O sistema de registro é a fonte reconhecida para determinado estado ou decisão.

Ele deverá possuir proteção proporcional quando sua perda comprometer:

- verdade operacional;
- identidade;
- direitos;
- autoridade;
- memória;
- prestação de contas.

---

## 114. Proveniência

O inventário deverá informar:

- origem;
- sistema produtor;
- método de geração;
- transformações;
- integrações;
- versão;
- responsáveis;
- momento.

Objetos sem proveniência suficiente poderão exigir restrição de uso durante recuperação.

---

## 115. Localização

A localização deverá incluir, conforme aplicável:

- dispositivo;
- caminho;
- serviço;
- conta;
- projeto;
- região;
- território;
- organização;
- fornecedor;
- mídia;
- ambiente.

A localização lógica e a física deverão ser distinguidas.

---

## 116. Formato

O inventário deverá registrar:

- formato;
- versão;
- esquema;
- codificação;
- compressão;
- criptografia;
- ferramenta necessária;
- compatibilidade.

Formatos proprietários deverão possuir estratégia de exportação quando a dependência for relevante.

---

## 117. Volume

O volume deverá considerar:

- tamanho atual;
- crescimento;
- frequência de mudança;
- quantidade de objetos;
- taxa de criação;
- taxa de exclusão;
- retenção.

Essas informações orientarão capacidade, custo e tempo de recuperação.

---

## 118. Frequência de mudança

Objetos poderão mudar:

- continuamente;
- por evento;
- a cada transação;
- em intervalos;
- diariamente;
- ocasionalmente;
- raramente;
- nunca.

A frequência de proteção deverá refletir a quantidade de mudança que poderá ser perdida.

---

## 119. Estado estático e estado dinâmico

Objetos estáticos sofrem poucas alterações.

Objetos dinâmicos mudam continuamente.

A estratégia deverá distinguir:

- documentação normativa;
- código;
- cadastros;
- transações;
- filas;
- eventos;
- telemetria;
- configurações;
- arquivos históricos.

Aplicar a mesma política a todos poderá produzir desperdício ou perda excessiva.

---

## 120. Classes de valor

Os objetos deverão ser classificados quanto ao valor de recuperação.

### Classe V0 — Reproduzível

Pode ser recriado com baixo custo e sem impacto relevante.

### Classe V1 — Conveniente

Sua perda causa trabalho adicional, mas não compromete função essencial.

### Classe V2 — Relevante

Sua perda reduz capacidade, eficiência, qualidade ou memória operacional.

### Classe V3 — Essencial

Sua perda compromete Missões, serviços ou responsabilidades relevantes.

### Classe V4 — Crítico

Sua perda pode produzir dano grave, interrupção ampla, perda de direitos ou incapacidade institucional.

### Classe V5 — Insuprimível

Sua perda ameaça identidade, legitimidade, memória permanente, vida, segurança ou continuidade fundamental.

O valor deverá ser contextualizado, não determinado apenas pelo conteúdo aparente.

---

## 121. Classes de criticidade para recuperação

### Classe C0 — Sem requisito formal

Não existe necessidade operacional relevante de recuperação.

### Classe C1 — Recuperação eventual

Pode ser recuperado em prazo amplo.

### Classe C2 — Recuperação necessária

Deve retornar dentro de prazo definido para evitar impacto crescente.

### Classe C3 — Recuperação prioritária

Sustenta funções essenciais e exige tratamento prioritário.

### Classe C4 — Recuperação crítica

Sua ausência compromete significativamente a operação.

### Classe C5 — Recuperação vital

Deve ser preservado e recuperável sob condições extremas.

---

## 122. Classes de sensibilidade

### S0 — Público

Pode ser divulgado legitimamente.

### S1 — Uso interno

Destinado à operação interna, sem sensibilidade elevada.

### S2 — Restrito

Exige controle de acesso por função ou finalidade.

### S3 — Confidencial

Sua exposição poderá causar dano relevante.

### S4 — Altamente sensível

Inclui dados, segredos ou evidências de alto impacto.

### S5 — Proteção excepcional

Exige controles especiais, acesso mínimo e governança ampliada.

A sensibilidade da cópia não será inferior à da origem apenas por estar fora da produção.

---

## 123. Dados pessoais

Objetos contendo dados pessoais deverão registrar:

- finalidade;
- base aplicável;
- categorias;
- titulares;
- compartilhamentos;
- retenção;
- controles;
- eliminação;
- obrigações;
- responsável.

A política deverá considerar a legislação de proteção de dados vigente.

---

## 124. Dados pessoais sensíveis

Dados sensíveis deverão receber proteção ampliada quanto a:

- criptografia;
- acesso;
- localização;
- cópias;
- logs;
- testes;
- anonimização;
- descarte.

Ambientes de teste de restauração não deverão expor dados reais sem necessidade e autorização.

---

## 125. Segredos e credenciais

Segredos incluem:

- senhas;
- tokens;
- chaves;
- certificados;
- credenciais de serviço;
- códigos de recuperação.

Eles deverão possuir política distinta.

Não deverão ser preservados em texto aberto.

Quando houver suspeita de comprometimento, deverão ser:

- revogados;
- rotacionados;
- reemitidos;
- revalidados;

em vez de simplesmente restaurados.

---

## 126. Evidências

Evidências deverão ser classificadas quanto a:

- valor probatório;
- cadeia de custódia;
- autenticidade;
- integridade;
- acesso;
- retenção;
- suspensão de descarte.

Sua política poderá ser diferente do backup operacional comum.

---

## 127. Documentos normativos

Constituições, políticas, Engenharia Oficial, contratos arquiteturais e decisões permanentes deverão possuir:

- versionamento;
- autoria;
- aprovação;
- histórico;
- integridade;
- cópias independentes;
- preservação de longo prazo.

Eles fazem parte da identidade institucional da UNO.

---

## 128. Código e repositórios

O inventário deverá identificar:

- repositório;
- organização;
- branch principal;
- versões;
- artefatos;
- dependências;
- pipelines;
- segredos externos;
- documentação de construção;
- responsáveis.

Hospedagem em plataforma de versionamento não substituirá necessariamente backup independente.

---

## 129. Bancos de dados

O inventário deverá registrar:

- tecnologia;
- versão;
- esquemas;
- tamanho;
- crescimento;
- relações;
- transações;
- extensões;
- políticas;
- consistência;
- mecanismos nativos de backup;
- requisitos de restauração.

---

## 130. Eventos e logs

Eventos e logs poderão sustentar:

- reconstrução;
- auditoria;
- investigação;
- reconciliação;
- aprendizado.

Deverão ser classificados por:

- valor;
- sensibilidade;
- retenção;
- volume;
- imutabilidade;
- relação com decisões.

Nem toda telemetria deverá ser retida indefinidamente.

---

## 131. Filas e trabalhos pendentes

A política deverá definir se filas são:

- reconstruíveis;
- persistentes;
- descartáveis;
- reexecutáveis;
- idempotentes;
- dependentes de confirmação.

Uma fila recuperada sem estado de execução poderá repetir ações.

---

## 132. Modelos de inteligência artificial

Objetos relacionados à IA poderão incluir:

- pesos;
- versões;
- configurações;
- instruções;
- prompts institucionais;
- ferramentas;
- avaliações;
- dados autorizados;
- políticas;
- registros de decisões;
- catálogos de agentes.

A recuperação deverá preservar contexto, governança e limites, não apenas o modelo.

---

## 133. Memória cognitiva

Memórias de agentes ou assistentes deverão ser classificadas por:

- origem;
- identidade relacionada;
- validade;
- sensibilidade;
- possibilidade de correção;
- retenção;
- consentimento;
- finalidade.

Memória incorreta não deverá ser restaurada como verdade institucional.

---

## 134. Infraestrutura

Objetos de infraestrutura deverão incluir:

- código;
- topologia;
- imagens;
- versões;
- redes;
- políticas;
- identidades;
- dependências;
- regiões;
- fornecedores;
- procedimentos de reconstrução.

---

## 135. Conhecimento humano crítico

O inventário deverá identificar conhecimentos que existam predominantemente em pessoas.

Esses conhecimentos deverão ser convertidos, quando possível, em:

- documentação;
- procedimentos;
- treinamentos;
- registros;
- sucessão;
- dupla capacidade.

O objetivo não será substituir pessoas, mas impedir perda institucional de conhecimento.

---

## 136. Classificação de irreversibilidade

A perda poderá ser:

- plenamente reversível;
- reversível por reconstrução;
- parcialmente reversível;
- reversível com alto custo;
- irreversível.

Objetos irreversíveis deverão receber maior prioridade de preservação.

---

## 137. Classificação de substituibilidade

Um objeto poderá ser:

- facilmente substituível;
- substituível com perda de qualidade;
- substituível temporariamente;
- dependente de terceiro;
- insubstituível.

Substituição não deverá ser confundida com recuperação integral.

---

## 138. Classificação temporal

O valor do objeto poderá ser:

- imediato;
- operacional;
- transitório;
- histórico;
- permanente.

Um estado de sessão poderá ter valor por minutos.

Uma decisão institucional poderá ter valor por gerações.

---

## 139. Classificação por obrigação

A preservação poderá ser:

- opcional;
- recomendada;
- operacionalmente necessária;
- contratualmente obrigatória;
- normativamente obrigatória;
- legalmente obrigatória;
- institucionalmente permanente.

A política deverá registrar a fonte da obrigação.

---

## 140. Requisitos legais e normativos

Cada classe deverá indicar, quando aplicável:

- legislação;
- regulamentação;
- norma técnica;
- NR;
- contrato;
- política;
- decisão institucional;
- jurisdição;
- prazo;
- evidência exigida.

A conformidade deverá fazer parte da arquitetura da política desde sua criação.

---

## 141. Conflitos de obrigação

Poderá existir conflito entre:

- obrigação de preservar;
- obrigação de eliminar;
- privacidade;
- auditoria;
- investigação;
- continuidade;
- memória.

O conflito deverá ser encaminhado à autoridade competente e registrado.

Nenhum operador deverá resolvê-lo por conveniência pessoal.

---

## 142. Objetivo de ponto de recuperação por classe

Cada classe deverá possuir RPO compatível.

Exemplo conceitual:

- objetos reproduzíveis: perda ampla tolerável;
- objetos relevantes: perda de um ciclo limitado;
- objetos essenciais: perda reduzida;
- objetos críticos: perda mínima;
- objetos vitais: perda próxima de zero ou registro contínuo.

Os valores concretos deverão ser definidos por capacidade e contexto.

---

## 143. Objetivo de tempo de recuperação por classe

O RTO deverá considerar:

- criticidade;
- capacidade residual;
- alternativas;
- impacto;
- vulnerabilidade;
- obrigações;
- recursos disponíveis.

Objetos vitais poderão exigir recuperação imediata ou alternativa ativa.

---

## 144. Objetivo de consistência por classe

Cada política deverá declarar:

- consistência exigida;
- relações indivisíveis;
- transações;
- versões compatíveis;
- possibilidade de reconciliação;
- tolerância a divergências.

---

## 145. Tempo máximo tolerável de perda

Além de RPO e RTO, a UNO deverá definir quanto tempo poderá permanecer sem possuir uma fonte recente e confiável de recuperação.

A falha continuada de backup poderá exigir:

- alerta;
- contenção;
- suspensão de mudanças;
- modo degradado;
- escalonamento.

---

## 146. Política de proteção

A política de proteção será a declaração formal que relaciona uma classe de objetos a:

- estratégia;
- frequência;
- retenção;
- destinos;
- isolamento;
- imutabilidade;
- criptografia;
- acesso;
- monitoramento;
- testes;
- recuperação;
- descarte.

---

## 147. Identidade da política

Toda política deverá possuir:

- identificador;
- nome;
- versão;
- proprietário;
- aprovador;
- escopo;
- vigência;
- histórico;
- próxima revisão.

---

## 148. Escopo da política

O escopo deverá listar:

- objetos incluídos;
- objetos excluídos;
- ambientes;
- organizações;
- territórios;
- fornecedores;
- exceções.

Expressões genéricas como “todos os dados importantes” não serão suficientes.

---

## 149. Frequência

A frequência poderá ser:

- contínua;
- por evento;
- a cada alteração;
- horária;
- diária;
- semanal;
- mensal;
- sob demanda.

Ela deverá refletir:

- RPO;
- frequência de mudança;
- custo;
- capacidade;
- risco;
- janela operacional.

---

## 150. Retenção por gerações

A política poderá manter:

- cópias recentes frequentes;
- cópias diárias;
- cópias semanais;
- cópias mensais;
- cópias anuais;
- marcos permanentes.

A distribuição por gerações deverá permitir recuperar:

- perda recente;
- corrupção histórica;
- estado de referência;
- obrigação de longo prazo.

---

## 151. Retenção operacional

A retenção operacional deverá atender à recuperação da operação dentro do horizonte de risco conhecido.

Ela não deverá ser confundida com retenção histórica ou legal.

---

## 152. Retenção legal e institucional

Cópias sujeitas a retenção obrigatória deverão indicar:

- fundamento;
- período;
- início da contagem;
- suspensão;
- autoridade;
- forma de descarte.

---

## 153. Suspensão de descarte

Quando houver:

- investigação;
- litígio;
- auditoria;
- incidente;
- determinação;
- obrigação;

o descarte poderá ser suspenso.

A suspensão deverá possuir:

- objeto;
- autoridade;
- motivo;
- início;
- revisão;
- encerramento.

---

## 154. Destinos de proteção

A política deverá registrar:

- destino primário;
- destino secundário;
- destino isolado;
- localização;
- fornecedor;
- conta;
- região;
- tecnologia;
- domínio de falha.

---

## 155. Separação de ambientes

Ambientes de:

- desenvolvimento;
- teste;
- homologação;
- produção;
- recuperação;

deverão possuir políticas adequadas.

Dados de produção não deverão ser copiados indiscriminadamente para ambientes menos protegidos.

---

## 156. Matriz de proteção

Cada objeto ou classe deverá ser associado a uma matriz contendo:

| Dimensão | Definição necessária |
|---|---|
| Valor | Qual a importância do objeto? |
| Criticidade | Qual operação depende dele? |
| Sensibilidade | Qual dano sua exposição produziria? |
| Proprietário | Quem define seus requisitos? |
| Custodiante | Quem protege a cópia? |
| RPO | Quanta perda temporal é tolerável? |
| RTO | Em quanto tempo deve retornar? |
| Consistência | Quais relações precisam permanecer válidas? |
| Frequência | Quando será copiado? |
| Retenção | Por quanto tempo será preservado? |
| Isolamento | De quais falhas deverá estar protegido? |
| Imutabilidade | Por quanto tempo não poderá ser alterado? |
| Teste | Como a recuperabilidade será comprovada? |
| Descarte | Como será eliminado com segurança? |

---

## 157. Perfil mínimo de proteção

Todo objeto crítico deverá possuir, no mínimo:

- inventário;
- proprietário;
- classificação;
- política;
- cópia independente;
- criptografia adequada;
- controle de acesso;
- retenção;
- monitoramento;
- teste de restauração;
- procedimento;
- responsável pela recuperação;
- evidência.

---

## 158. Exceções à política

Toda exceção deverá registrar:

- objeto;
- requisito não atendido;
- motivo;
- risco;
- controle compensatório;
- responsável;
- validade;
- plano de correção;
- autoridade aprovadora.

Exceções não deverão permanecer indefinidamente.

---

## 159. Objetos temporários

Objetos temporários deverão possuir:

- finalidade;
- prazo;
- necessidade de proteção;
- condição de descarte;
- dependências.

Nem todo objeto temporário exigirá backup.

Contudo, sua ausência de proteção deverá ser uma decisão consciente.

---

## 160. Objetos órfãos

Objeto órfão é aquele que não possui proprietário ou finalidade confirmada.

Ele deverá ser:

- identificado;
- isolado quando necessário;
- avaliado;
- associado a responsável;
- preservado temporariamente;
- descartado se autorizado.

---

## 161. Objetos duplicados

Duplicidades deverão ser avaliadas quanto a:

- autoridade;
- consistência;
- custo;
- risco;
- finalidade;
- retenção;
- possibilidade de confusão.

A exclusão de duplicidades deverá preservar a fonte reconhecida e os requisitos aplicáveis.

---

## 162. Dados derivados

Dados derivados poderão ser:

- facilmente recalculáveis;
- caros para recalcular;
- dependentes de fonte externa;
- impossíveis de reconstruir depois.

A política deverá comparar custo de preservação e custo de recomputação.

---

## 163. Dados externos

Quando a operação depender de dados externos, deverá conhecer:

- fornecedor;
- contrato;
- possibilidade de reconsulta;
- retenção;
- exportação;
- licença;
- atualização;
- integridade;
- alternativa.

A disponibilidade atual do fornecedor não garante recuperabilidade futura.

---

## 164. Dados compartilhados

Objetos compartilhados entre organizações deverão possuir regras sobre:

- propriedade;
- custódia;
- cópias;
- restauração;
- consentimento;
- retenção;
- eliminação;
- reconciliação;
- encerramento da parceria.

---

## 165. Inventário de dependências de recuperação

Cada objeto deverá indicar o que será necessário para restaurá-lo:

- software;
- versão;
- chave;
- esquema;
- infraestrutura;
- identidade;
- pessoa;
- documentação;
- fornecedor;
- conectividade;
- autoridade.

Essas dependências também deverão ser protegidas.

---

## 166. Pacote mínimo de recuperação

Objetos críticos deverão possuir pacote contendo, conforme necessário:

- cópia;
- esquema;
- configuração;
- metadados;
- chaves protegidas;
- instruções;
- ferramentas;
- versões;
- contatos;
- critérios de validação;
- dependências.

O pacote deverá reduzir o risco de existir conteúdo sem capacidade de uso.

---

## 167. Mapa de cobertura

A UNO deverá manter visão capaz de mostrar:

- objetos protegidos;
- objetos sem política;
- políticas atrasadas;
- testes vencidos;
- cópias falhas;
- dependências únicas;
- riscos;
- exceções;
- responsáveis.

---

## 168. Lacuna de proteção

Uma lacuna existirá quando:

- o objeto não estiver inventariado;
- não possuir proprietário;
- não possuir política;
- a frequência não atender ao RPO;
- a restauração não atender ao RTO;
- não existir cópia independente;
- o teste estiver vencido;
- a retenção for insuficiente;
- a cópia estiver inacessível.

Toda lacuna deverá gerar risco registrado.

---

## 169. Revisão do inventário

O inventário deverá ser revisado:

- periodicamente;
- após mudanças;
- após novos serviços;
- após migrações;
- após incidentes;
- após auditorias;
- após alteração normativa;
- após mudança de fornecedor;
- após encerramento de capacidades.

---

## 170. Descoberta contínua

A descoberta contínua poderá utilizar agentes e automações para identificar:

- novas bases;
- novos repositórios;
- novos armazenamentos;
- novos objetos sensíveis;
- cópias informais;
- políticas ausentes;
- crescimento inesperado.

Toda descoberta deverá ser validada antes de produzir classificação institucional definitiva.

---

## 171. Mudança de classificação

A classificação deverá ser revista quando houver mudança de:

- finalidade;
- conteúdo;
- sensibilidade;
- público;
- dependência;
- obrigação;
- criticidade;
- território;
- fornecedor;
- recuperação.

O histórico deverá ser preservado.

---

## 172. Herança de classificação

Objetos derivados poderão herdar requisitos da fonte.

A herança deverá considerar:

- sensibilidade;
- retenção;
- propriedade;
- restrições;
- finalidade.

A transformação não eliminará automaticamente as obrigações existentes.

---

## 173. Classificação mais protetiva

Quando um conjunto contiver objetos com requisitos diferentes e não puder separá-los, deverá prevalecer a classificação mais protetiva aplicável.

Isso poderá aumentar custo e complexidade.

Por isso, a arquitetura deverá favorecer separação adequada quando possível.

---

## 174. Rotulagem

Objetos e cópias deverão possuir rótulos que permitam identificar:

- classificação;
- proprietário;
- retenção;
- ambiente;
- política;
- sensibilidade;
- data;
- versão.

A rotulagem deverá ser compreensível por pessoas e sistemas.

---

## 175. Automação por política

Políticas poderão ser aplicadas automaticamente com base em rótulos e inventário.

A automação deverá:

- validar escopo;
- registrar aplicação;
- detectar falhas;
- impedir exclusões indevidas;
- alertar divergências;
- permitir revisão.

---

## 176. Aprovação da política

Políticas críticas deverão ser aprovadas por instâncias compatíveis com:

- risco;
- custo;
- sensibilidade;
- obrigação;
- alcance;
- impacto institucional.

---

## 177. Comunicação da política

Responsáveis deverão conhecer:

- o que está protegido;
- o que não está;
- frequência;
- retenção;
- limitações;
- forma de solicitar restauração;
- responsabilidades;
- riscos.

A existência da política em um repositório não garante sua compreensão.

---

## 178. Política como contrato operacional

A política de proteção será um contrato entre:

- proprietário;
- custodiante;
- operação;
- segurança;
- governança;
- usuários dependentes.

Ela deverá expressar compromissos verificáveis.

---

## 179. Auditoria de cobertura

A auditoria deverá verificar:

- completude do inventário;
- adequação das classificações;
- aderência das políticas;
- evidências de execução;
- independência;
- retenção;
- testes;
- exceções;
- descarte.

---

## 180. Antipadrões de classificação e inventário

A UNO deverá evitar:

### 180.1 Inventário estático

Registrar uma vez e não acompanhar mudanças.

### 180.2 Classificação pelo tamanho

Confundir volume com valor.

### 180.3 Proprietário genérico

Atribuir responsabilidade a “TI” sem pessoa, papel ou organização definida.

### 180.4 Política universal

Aplicar a mesma proteção a todos os objetos.

### 180.5 Dados sensíveis em ambiente inferior

Copiar produção para teste sem controles equivalentes.

### 180.6 Retenção por medo

Preservar tudo indefinidamente.

### 180.7 Exclusão sem mapa de dependência

Eliminar objeto aparentemente duplicado que sustentava outra capacidade.

### 180.8 RPO e RTO fictícios

Declarar objetivos sem infraestrutura, pessoas ou testes capazes de cumpri-los.

### 180.9 Fonte externa presumida

Confiar que um fornecedor sempre permitirá reconsulta ou exportação.

### 180.10 Política sem restauração

Definir cópia e retenção sem procedimento de recuperação.

---

## 181. Invariantes do inventário e da política

Toda classificação deverá preservar:

1. identidade;
2. finalidade;
3. propriedade;
4. proveniência;
5. localização;
6. valor;
7. criticidade;
8. sensibilidade;
9. temporalidade;
10. obrigação;
11. requisito de recuperação;
12. rastreabilidade.

---

## 182. Garantias do Lote 2

A Plataforma UNO deverá garantir que:

- todo objeto crítico esteja inventariado;
- todo objeto relevante possua proprietário;
- toda fonte de autoridade esteja identificada;
- toda classificação considere impacto humano e institucional;
- todo dado pessoal possua finalidade e retenção;
- todo segredo possua tratamento específico;
- todo objeto crítico possua RPO e RTO;
- toda política indique frequência, destino, retenção e teste;
- toda exceção possua prazo;
- toda lacuna produza risco visível;
- toda mudança preserve histórico;
- nenhum objetivo de recuperação seja declarado sem capacidade correspondente;
- nenhum objeto seja considerado protegido apenas porque está incluído em uma rotina genérica.

---

## 183. Princípios consolidados

A Engenharia Oficial reconhece que:

1. não se protege adequadamente aquilo que não se conhece;
2. todo objeto recuperável precisa de identidade;
3. propriedade e custódia são responsabilidades diferentes;
4. valor não depende de volume;
5. criticidade é determinada pelo impacto da perda;
6. sensibilidade acompanha a cópia;
7. a fonte de autoridade deve permanecer identificável;
8. RPO, RTO, consistência e completude formam objetivos complementares;
9. retenção operacional não é igual à retenção histórica;
10. dados derivados podem exigir proteção;
11. dependências de restauração também precisam ser preservadas;
12. objetos órfãos e cópias informais são riscos;
13. políticas devem refletir classes e contextos;
14. lacunas de cobertura precisam permanecer visíveis;
15. inventário e classificação deverão evoluir com a arquitetura;
16. toda política será incompleta se não puder demonstrar recuperação.

---

## 184. Transição para o próximo lote

O inventário, as classificações e as políticas estabelecidos neste lote definem o que a UNO deverá proteger e quais resultados sua recuperação deverá alcançar.

O próximo lote estabelecerá como essa proteção será materializada por meio de:

- backups completos;
- backups incrementais;
- backups diferenciais;
- snapshots;
- réplicas;
- exportações;
- versionamento;
- registros contínuos;
- múltiplas cópias;
- domínios de falha;
- isolamento;
- imutabilidade;
- distribuição territorial;
- diversidade tecnológica;
- capacidade de armazenamento.

A classificação define o requisito.

A arquitetura de backup deverá transformar esse requisito em preservação concreta, independente e verificável.

---

## Lote 3 — Estratégias e Arquitetura de Backup

---

## 185. A arquitetura de backup como sistema de preservação

A arquitetura de backup é o conjunto coordenado de:

- fontes;
- processos;
- cópias;
- destinos;
- políticas;
- tecnologias;
- identidades;
- controles;
- registros;
- verificações;
- pessoas;
- organizações;

utilizado para preservar objetos recuperáveis fora de seus estados ordinários de operação.

Ela deverá ser concebida para continuar válida quando a origem estiver:

- indisponível;
- corrompida;
- excluída;
- comprometida;
- inacessível;
- destruída;
- sob investigação;
- dependente de fornecedor indisponível.

> Uma arquitetura de backup que depende integralmente daquilo que pretende proteger não constitui recuperação independente.

---

## 186. Estratégia orientada ao risco

A escolha da estratégia deverá considerar:

- natureza do objeto;
- criticidade;
- sensibilidade;
- volume;
- frequência de alteração;
- RPO;
- RTO;
- consistência;
- retenção;
- domínios de falha;
- custo;
- obrigações;
- capacidade de teste.

Nenhuma técnica isolada deverá ser aplicada como solução universal.

---

## 187. Composição de estratégias

A proteção poderá combinar:

- backup completo;
- backup incremental;
- backup diferencial;
- snapshot;
- replicação;
- exportação;
- versionamento;
- registro contínuo;
- armazenamento imutável;
- cópia offline;
- distribuição territorial;
- redundância entre fornecedores.

A composição deverá reduzir riscos complementares.

Acumular técnicas sem compreender suas relações poderá aumentar complexidade sem ampliar recuperabilidade.

---

## 188. Backup completo

Backup completo preserva todo o conjunto definido pela política em uma execução.

Vantagens:

- restauração mais direta;
- menor dependência de cadeias;
- compreensão simplificada;
- validação mais clara.

Limitações:

- maior consumo de armazenamento;
- maior tempo de execução;
- maior transferência;
- impacto potencial sobre a origem.

Deverá ser utilizado conforme:

- volume;
- janela;
- frequência;
- criticidade;
- estratégia de retenção.

---

## 189. Backup incremental

Backup incremental preserva alterações ocorridas desde a última cópia relevante, completa ou incremental.

Vantagens:

- menor volume por execução;
- maior frequência possível;
- menor janela operacional;
- menor tráfego.

Limitações:

- restauração dependente de cadeia;
- maior complexidade;
- risco de elo ausente;
- validação mais exigente;
- potencial aumento do tempo de recuperação.

Toda cadeia incremental deverá possuir:

- início conhecido;
- sequência;
- integridade;
- retenção coordenada;
- possibilidade de reconstrução.

---

## 190. Backup diferencial

Backup diferencial preserva alterações desde o último backup completo.

Vantagens:

- restauração menos dependente do que a incremental;
- equilíbrio entre volume e simplicidade;
- necessidade de menos conjuntos para recuperação.

Limitações:

- crescimento progressivo até o próximo completo;
- maior armazenamento do que incrementais;
- necessidade de coordenação com a cópia completa.

---

## 191. Seleção entre completo, incremental e diferencial

A seleção deverá considerar:

| Dimensão | Completo | Incremental | Diferencial |
|---|---|---|---|
| Volume da execução | Maior | Menor | Progressivo |
| Velocidade de cópia | Geralmente menor | Geralmente maior | Intermediária |
| Complexidade de restauração | Menor | Maior | Intermediária |
| Dependência de cadeia | Baixa | Alta | Moderada |
| Uso de armazenamento | Alto | Eficiente | Intermediário |
| Sensibilidade a elo ausente | Menor | Maior | Moderada |

A decisão deverá priorizar recuperabilidade, não apenas economia de armazenamento.

---

## 192. Backup sintético completo

Um backup sintético completo poderá ser construído combinando:

- cópia completa anterior;
- alterações incrementais;
- processamento no destino.

Ele poderá reduzir carga sobre a origem.

Deverá ser validado quanto a:

- integridade;
- sequência;
- consistência;
- compatibilidade;
- capacidade de restauração.

---

## 193. Backup contínuo

O backup contínuo ou proteção contínua registra alterações em intervalo muito pequeno ou por evento.

Será adequado quando o RPO exigir perda mínima.

Deverá considerar:

- propagação de corrupção;
- retenção de versões;
- volume;
- consistência;
- ordenação;
- conectividade;
- isolamento;
- capacidade de reversão temporal.

Proteção contínua sem histórico poderá comportar-se apenas como replicação.

---

## 194. Registro de transações

Bancos e sistemas transacionais poderão preservar logs capazes de reconstruir o estado até determinado ponto.

A estratégia deverá garantir:

- sequência;
- integridade;
- completude;
- compatibilidade;
- retenção;
- associação ao backup-base;
- prevenção de lacunas.

---

## 195. Recuperação pontual

A recuperação pontual permite restaurar o estado correspondente a um momento específico anterior à falha.

Será importante para:

- exclusão;
- corrupção lógica;
- alteração indevida;
- erro de implantação;
- falha de processo;
- incidente de segurança.

A precisão dependerá da qualidade dos registros e da sincronização temporal.

---

## 196. Snapshot

Snapshots poderão preservar rapidamente:

- volumes;
- máquinas;
- bancos;
- ambientes;
- sistemas de arquivos;
- configurações.

Deverão registrar:

- origem;
- momento;
- consistência;
- dependência da infraestrutura;
- retenção;
- possibilidade de exportação;
- capacidade de cópia independente.

Snapshots locais deverão ser protegidos contra perda conjunta com a origem.

---

## 197. Snapshot consistente com a aplicação

Quando necessário, a aplicação deverá:

- concluir transações;
- congelar escrita;
- descarregar buffers;
- registrar estado;
- coordenar dependências;

antes do snapshot.

Um snapshot tecnicamente válido poderá ser operacionalmente inconsistente se capturar relações em estados incompatíveis.

---

## 198. Réplica síncrona

Na replicação síncrona, a confirmação depende de gravação em mais de um destino.

Ela poderá oferecer:

- baixa perda de dados;
- consistência elevada;
- continuidade rápida.

Entretanto, poderá:

- aumentar latência;
- compartilhar corrupção lógica;
- depender de conectividade;
- ampliar custo;
- propagar exclusões.

Não substituirá retenção histórica independente.

---

## 199. Réplica assíncrona

Na replicação assíncrona, alterações são transferidas depois da confirmação na origem.

Ela poderá:

- reduzir latência;
- atravessar regiões;
- permitir separação;
- produzir pequeno atraso.

Deverá monitorar:

- fila;
- atraso;
- lacunas;
- capacidade;
- consistência;
- perda potencial.

---

## 200. Réplica atrasada

Uma réplica poderá aplicar alterações com atraso deliberado.

Essa estratégia poderá oferecer janela de proteção contra:

- exclusão;
- corrupção;
- erro lógico;
- ataque detectado rapidamente.

O atraso deverá ser conhecido, monitorado e compatível com a finalidade.

---

## 201. Exportação lógica

Exportações lógicas preservam:

- estruturas;
- registros;
- relações;
- definições;
- conteúdos;

em formato interpretável por ferramentas apropriadas.

Elas poderão ampliar:

- portabilidade;
- inspeção;
- migração;
- independência de fornecedor.

Deverão ser testadas quanto à recomposição de:

- tipos;
- restrições;
- índices;
- permissões;
- extensões;
- metadados.

---

## 202. Exportação física

Exportações físicas preservam estruturas internas ou arquivos nativos de determinada tecnologia.

Poderão oferecer:

- velocidade;
- fidelidade;
- recuperação eficiente.

Entretanto, poderão depender fortemente de:

- versão;
- sistema;
- arquitetura;
- fornecedor;
- ferramentas.

A política poderá combinar exportação física e lógica.

---

## 203. Portabilidade

Objetos críticos deverão possuir grau de portabilidade compatível com o risco de dependência.

A portabilidade deverá considerar:

- formatos abertos;
- documentação;
- esquemas;
- exportação;
- ferramentas;
- licenças;
- testes em ambiente alternativo.

---

## 204. Versionamento de código

Repositórios deverão preservar:

- commits;
- branches relevantes;
- tags;
- releases;
- histórico;
- autoria;
- referências;
- configurações;
- documentação.

A estratégia deverá avaliar cópia independente da plataforma principal de hospedagem.

---

## 205. Espelhamento de repositórios

Repositórios críticos poderão ser espelhados em:

- segunda organização;
- segundo fornecedor;
- armazenamento próprio;
- pacote exportado;
- cópia offline.

O espelho deverá preservar histórico suficiente e ser atualizado conforme o objetivo de recuperação.

---

## 206. Artefatos de construção

A recuperação poderá depender de:

- pacotes;
- binários;
- imagens;
- dependências;
- registros;
- assinaturas;
- manifestos.

A política deverá decidir se serão:

- preservados;
- reconstruídos;
- obtidos novamente;
- validados por assinatura.

---

## 207. Infraestrutura como código

A preservação deverá incluir:

- repositórios;
- módulos;
- variáveis não secretas;
- versões;
- estados;
- dependências;
- documentação;
- procedimentos.

Estados de infraestrutura poderão conter informações sensíveis e deverão receber proteção adequada.

---

## 208. Imagens de máquina e contêiner

Imagens poderão acelerar reconstrução.

Deverão possuir:

- versão;
- origem;
- composição;
- vulnerabilidades conhecidas;
- assinatura;
- retenção;
- compatibilidade.

Imagens antigas não deverão ser utilizadas sem avaliação de segurança.

---

## 209. Backup de configuração

Configurações deverão ser preservadas de forma:

- versionada;
- declarativa quando possível;
- vinculada ao ambiente;
- separada de segredos;
- auditável;
- testável.

Alterações manuais não registradas deverão ser detectadas.

---

## 210. Proteção de segredos

Segredos deverão ser preservados em sistemas apropriados.

A estratégia deverá prever:

- cópia protegida;
- recuperação de emergência;
- múltiplos responsáveis quando necessário;
- rotação;
- revogação;
- registro;
- acesso mínimo.

Uma cópia de segredo não deverá permitir acesso irrestrito fora do contexto autorizado.

---

## 211. Divisão de conhecimento

Chaves críticas poderão utilizar mecanismos que exijam múltiplas partes ou autoridades para recuperação.

Isso poderá reduzir:

- abuso individual;
- perda por ausência;
- concentração;
- comprometimento total.

A divisão deverá possuir procedimentos de sucessão e teste.

---

## 212. Estratégia de múltiplas cópias

Objetos críticos deverão possuir múltiplas cópias conforme seus riscos.

Uma referência amplamente utilizada é manter:

- várias cópias;
- em diferentes tipos ou domínios de armazenamento;
- pelo menos uma fora do ambiente principal;
- pelo menos uma isolada ou imutável;
- com restauração comprovada.

A UNO deverá adotar a lógica adequada ao contexto, sem transformar uma fórmula genérica em substituta da análise de risco.

---

## 213. Cópia primária de recuperação

É a fonte preferencial para restaurações ordinárias.

Deverá possuir:

- acesso eficiente;
- atualização compatível;
- monitoramento;
- integridade;
- disponibilidade.

Ela não deverá ser a única fonte.

---

## 214. Cópia secundária

Deverá proteger contra perda ou indisponibilidade da fonte principal de recuperação.

Poderá estar em:

- outra conta;
- outra região;
- outro fornecedor;
- outra tecnologia;
- outra organização.

---

## 215. Cópia isolada

A cópia isolada deverá resistir à propagação de:

- exclusões;
- corrupção;
- credenciais comprometidas;
- automações defeituosas;
- ransomware;
- ações administrativas indevidas.

---

## 216. Cópia offline

A cópia offline permanece desconectada durante parte significativa de seu ciclo.

Poderá utilizar:

- mídia removível;
- armazenamento desconectado;
- cofre;
- serviço com isolamento lógico forte.

Deverá possuir procedimentos para:

- atualização;
- verificação;
- transporte;
- custódia;
- rotação;
- restauração.

---

## 217. Cópia imutável

A imutabilidade deverá impedir alteração ou exclusão pelo período definido, inclusive por administradores comuns.

Deverá ser configurada com:

- retenção;
- autoridade específica;
- auditoria;
- proteção contra redução indevida;
- compatibilidade jurídica;
- expiração controlada.

---

## 218. Cópia fora da origem

Uma cópia armazenada fora do ambiente principal deverá sobreviver à perda de:

- dispositivo;
- instalação;
- conta;
- organização;
- região;
- fornecedor;
- território.

O grau de separação deverá refletir a criticidade.

---

## 219. Distribuição regional

A distribuição entre regiões poderá proteger contra:

- falhas extensas;
- desastres;
- interrupções de infraestrutura;
- indisponibilidade de datacenter.

Deverá considerar:

- legislação;
- latência;
- custo;
- soberania;
- transferência;
- disponibilidade;
- jurisdição.

---

## 220. Distribuição entre fornecedores

Utilizar mais de um fornecedor poderá reduzir dependência comum.

Entretanto, exigirá:

- formatos portáveis;
- ferramentas;
- contratos;
- conhecimento;
- testes;
- governança;
- controle de custos.

Multifornecedor sem capacidade real de recuperação apenas multiplica contratos.

---

## 221. Distribuição organizacional

Em ambiente federado, cópias poderão ser custodiadas por organizações diferentes.

Deverão existir contratos claros sobre:

- propriedade;
- acesso;
- restauração;
- proteção;
- retenção;
- encerramento;
- auditoria;
- responsabilidade.

---

## 222. Distribuição territorial

Territórios poderão manter cópias locais para operação desconectada, enquanto cópias externas preservam recuperação contra perdas locais.

A sincronização deverá tratar:

- conflitos;
- latência;
- duplicidade;
- identidade;
- autoridade;
- reconciliação.

---

## 223. Domínios administrativos

Cópias críticas não deverão ficar todas sob a mesma credencial ou autoridade operacional.

Poderão existir separações entre:

- produção;
- backup;
- segurança;
- auditoria;
- custódia institucional.

A separação deverá evitar tanto abuso quanto incapacidade de recuperação.

---

## 224. Conta de backup dedicada

Ambientes críticos poderão utilizar conta, projeto ou assinatura dedicada para backup.

Essa conta deverá possuir:

- acesso restrito;
- credenciais próprias;
- monitoramento;
- alertas;
- cobrança observável;
- recuperação de emergência;
- proteção contra exclusão.

---

## 225. Rede de backup

O tráfego de backup poderá utilizar:

- redes separadas;
- canais protegidos;
- limites;
- criptografia;
- priorização;
- janelas.

A arquitetura deverá impedir que a própria cópia sature ou degrade a operação principal.

---

## 226. Criptografia em trânsito

Toda transferência sensível deverá utilizar proteção adequada contra:

- interceptação;
- alteração;
- falsificação;
- acesso não autorizado.

A identidade dos destinos deverá ser validada.

---

## 227. Criptografia em repouso

Cópias sensíveis deverão permanecer criptografadas no armazenamento.

A proteção dependerá também da governança das chaves.

Criptografia sem capacidade de recuperar a chave poderá transformar proteção em perda definitiva.

---

## 228. Gestão de chaves

A arquitetura deverá definir:

- criação;
- armazenamento;
- acesso;
- rotação;
- cópia;
- recuperação;
- revogação;
- destruição;
- auditoria.

As chaves não deverão depender exclusivamente do mesmo ambiente protegido.

---

## 229. Compressão

A compressão poderá reduzir:

- armazenamento;
- transferência;
- custo.

Deverá ser avaliada quanto a:

- tempo;
- processamento;
- integridade;
- compatibilidade;
- restauração;
- risco de corrupção.

---

## 230. Deduplicação

A deduplicação poderá reduzir cópias repetidas.

Entretanto, deverá considerar:

- dependência de índices;
- impacto de corrupção;
- isolamento;
- criptografia;
- portabilidade;
- restauração.

A economia não deverá criar um ponto único de falha invisível.

---

## 231. Capacidade de armazenamento

A arquitetura deverá calcular:

- volume atual;
- crescimento;
- frequência;
- retenção;
- versões;
- compressão;
- margem;
- cópias;
- testes;
- restaurações temporárias.

Deverá existir folga suficiente para picos e falhas de limpeza.

---

## 232. Saturação do destino

A saturação deverá produzir:

- alerta antecipado;
- análise;
- expansão;
- priorização;
- correção;
- registro de objetos afetados.

Excluir cópias críticas automaticamente para liberar espaço não deverá ocorrer fora das políticas autorizadas.

---

## 233. Janela de backup

A janela deverá considerar:

- carga;
- volume;
- duração;
- impacto;
- concorrência;
- conectividade;
- prioridades;
- tempo disponível.

Sistemas de operação contínua poderão exigir estratégias sem janela rígida.

---

## 234. Impacto sobre a produção

A execução deverá monitorar:

- processamento;
- memória;
- armazenamento;
- rede;
- latência;
- bloqueios;
- filas;
- experiência do usuário.

Quando necessário, deverá limitar ou pausar o backup sem perder visibilidade da janela de proteção aberta.

---

## 235. Priorização de objetos

Quando a capacidade for insuficiente, a política deverá priorizar:

1. objetos vitais;
2. identidade e autoridade;
3. dados críticos;
4. estados essenciais;
5. evidências;
6. configurações;
7. objetos relevantes;
8. objetos reproduzíveis.

A priorização deverá ser declarada antes da saturação sempre que possível.

---

## 236. Orquestração

A orquestração deverá coordenar:

- sequência;
- dependências;
- congelamentos;
- snapshots;
- cópias;
- verificações;
- retenções;
- replicações;
- alertas;
- testes.

Ela deverá possuir comportamento seguro quando uma etapa falhar.

---

## 237. Consistência entre componentes

Aplicações compostas poderão exigir cópias coordenadas de:

- dados;
- arquivos;
- filas;
- configurações;
- identidades;
- eventos;
- versões.

A restauração de pontos temporais incompatíveis poderá produzir corrupção semântica.

---

## 238. Grupos de consistência

Objetos que precisam ser recuperados juntos deverão formar grupos de consistência.

Cada grupo deverá definir:

- componentes;
- ordem;
- ponto temporal;
- método;
- validação;
- dependências.

---

## 239. Quiescência

Quiescência é a redução ou pausa controlada das alterações para produzir uma cópia consistente.

Ela deverá possuir:

- condição de início;
- duração;
- impacto;
- confirmação;
- liberação;
- tratamento de falha.

---

## 240. Backup em ambientes distribuídos

Ambientes distribuídos deverão considerar:

- relógios;
- partições;
- replicação;
- consistência eventual;
- eventos;
- identificadores;
- ordenação;
- conflitos;
- nós indisponíveis.

A cópia deverá declarar qual visão do sistema representa.

---

## 241. Backup de bancos gerenciados

Serviços gerenciados poderão oferecer:

- snapshots;
- retenção;
- recuperação pontual;
- replicação;
- exportações.

A UNO deverá conhecer:

- limites;
- responsabilidades;
- regiões;
- custos;
- retenção;
- exclusão;
- portabilidade;
- testes;
- dependência da conta.

Recursos nativos não eliminam responsabilidade institucional.

---

## 242. Backup de serviços SaaS

Aplicações SaaS poderão exigir exportações independentes quando:

- o fornecedor controla todas as cópias;
- não há garantia de restauração granular;
- a conta pode ser perdida;
- o contrato pode terminar;
- a portabilidade é necessária.

---

## 243. Backup de dispositivos

Dispositivos poderão conter objetos ainda não sincronizados.

A política deverá priorizar:

- armazenamento em fontes oficiais;
- sincronização governada;
- criptografia;
- gestão;
- cópia de pastas autorizadas;
- redução de dados locais.

Backup de dispositivo completo não deverá copiar indiscriminadamente conteúdos pessoais ou sem finalidade legítima.

---

## 244. Mídias removíveis

Mídias removíveis deverão possuir:

- inventário;
- identificação;
- criptografia;
- custódia;
- localização;
- integridade;
- rotação;
- descarte;
- teste.

Elas não deverão permanecer conectadas continuamente quando sua finalidade for isolamento.

---

## 245. Migração de mídia

Mídias envelhecem e tecnologias tornam-se obsoletas.

A política deverá prever:

- inspeção;
- leitura periódica;
- migração;
- atualização de formato;
- substituição;
- verificação após cópia.

---

## 246. Obsolescência tecnológica

A recuperabilidade deverá considerar a disponibilidade futura de:

- leitores;
- formatos;
- sistemas;
- licenças;
- versões;
- conhecimentos.

Objetos de longo prazo deverão utilizar formatos e mecanismos sustentáveis.

---

## 247. Validação na criação

Após cada execução, deverão ser verificados:

- objetos incluídos;
- volume;
- erros;
- integridade;
- destino;
- retenção;
- criptografia;
- identificador;
- cadeia.

Essa validação não substitui teste de restauração.

---

## 248. Verificação periódica

Cópias armazenadas deverão passar por verificações periódicas para detectar:

- deterioração;
- corrupção;
- perda;
- alteração;
- expiração indevida;
- inacessibilidade;
- falha de chave.

---

## 249. Amostragem

A amostragem poderá verificar conjuntos grandes, mas deverá ser proporcional ao risco.

Objetos críticos poderão exigir validação integral ou mecanismos fortes de integridade.

---

## 250. Catálogo de cópias

A UNO deverá possuir catálogo contendo:

- objeto;
- política;
- ponto temporal;
- tipo;
- destino;
- retenção;
- integridade;
- estado;
- dependências;
- teste;
- expiração.

O catálogo também deverá possuir proteção.

---

## 251. Busca e localização

Durante uma contingência, os responsáveis deverão conseguir localizar rapidamente:

- fontes disponíveis;
- versões;
- estados;
- períodos;
- testes;
- chaves;
- responsáveis.

A localização não poderá depender somente de conhecimento informal.

---

## 252. Destruição segura

Quando uma cópia expirar, o descarte deverá considerar:

- tecnologia;
- criptografia;
- mídia;
- fornecedor;
- obrigação;
- cadeia de custódia;
- evidência.

A exclusão lógica poderá não ser suficiente em todos os contextos.

---

## 253. Encerramento de fornecedor

Antes de encerrar um serviço, deverão ser executados:

- inventário;
- exportação;
- verificação;
- migração;
- teste;
- revogação;
- descarte;
- encerramento contratual;
- preservação de evidências.

---

## 254. Mudança de arquitetura

Mudanças deverão preservar:

- compatibilidade;
- histórico;
- retenção;
- fontes anteriores;
- capacidade de restauração;
- documentação;
- testes.

A nova arquitetura não deverá tornar cópias antigas inacessíveis sem plano de migração.

---

## 255. Custo observável

A arquitetura deverá acompanhar:

- armazenamento;
- transferência;
- requisições;
- licenças;
- retenção;
- testes;
- restaurações;
- pessoas;
- crescimento.

A redução de custos não deverá eliminar silenciosamente garantias.

---

## 256. Eficiência sem fragilidade

A eficiência poderá utilizar:

- compressão;
- deduplicação;
- camadas de armazenamento;
- ciclos;
- automação;
- retenção diferenciada.

Toda otimização deverá ser avaliada quanto ao impacto sobre:

- integridade;
- tempo;
- portabilidade;
- isolamento;
- simplicidade;
- recuperação.

---

## 257. Arquitetura mínima para objetos críticos

Objetos críticos deverão possuir, conforme o risco:

- fonte oficial;
- proteção automatizada;
- cópia independente;
- histórico temporal;
- imutabilidade ou isolamento;
- criptografia;
- catálogo;
- monitoramento;
- documentação;
- teste de restauração;
- responsáveis;
- capacidade alternativa.

---

## 258. Antipadrões arquiteturais

A UNO deverá evitar:

### 258.1 Todas as cópias na mesma conta

Uma credencial comprometida poderá eliminar tudo.

### 258.2 Snapshot como única proteção

A perda da infraestrutura elimina origem e snapshot.

### 258.3 Réplica sem histórico

Corrupção e exclusão são propagadas.

### 258.4 Cadeia incremental sem validação

Um elo corrompido impede recuperação.

### 258.5 Cópia offline permanentemente desatualizada

O isolamento existe, mas o conteúdo perdeu valor.

### 258.6 Criptografia sem recuperação de chave

A cópia torna-se inacessível.

### 258.7 Formato proprietário sem exportação

A instituição torna-se dependente do fornecedor.

### 258.8 Deduplicação como ponto único oculto

A corrupção de índice afeta múltiplas cópias.

### 258.9 Destino saturado com exclusão emergencial

A proteção antiga é destruída sem avaliação.

### 258.10 Arquitetura complexa não testada

Múltiplas ferramentas produzem aparência de maturidade sem recuperação comprovada.

---

## 259. Invariantes da arquitetura de backup

Toda arquitetura deverá preservar:

1. independência suficiente;
2. integridade;
3. temporalidade;
4. consistência;
5. confidencialidade;
6. autenticidade;
7. portabilidade proporcional;
8. capacidade de localização;
9. retenção;
10. monitoramento;
11. testabilidade;
12. possibilidade de restauração.

---

## 260. Garantias do Lote 3

A Plataforma UNO deverá garantir que:

- toda estratégia corresponda aos riscos do objeto;
- toda cadeia incremental seja verificável;
- todo snapshot crítico possua proteção independente;
- toda réplica seja distinguida de backup histórico;
- toda exportação preserve contexto suficiente;
- todo repositório crítico possua recuperação independente;
- todo segredo possua governança própria;
- toda cópia crítica atravesse domínios de falha adequados;
- toda imutabilidade possua retenção governada;
- toda chave crítica possua recuperação segura;
- todo destino seja monitorado quanto à capacidade;
- todo grupo de consistência seja identificado;
- toda cópia possa ser localizada por catálogo;
- nenhuma otimização reduza recuperabilidade sem risco explicitamente aceito.

---

## 261. Princípios consolidados

A Engenharia Oficial reconhece que:

1. técnicas de backup são complementares;
2. cópias completas simplificam restauração;
3. incrementais exigem cadeias confiáveis;
4. snapshots precisam sobreviver à origem;
5. réplicas protegem disponibilidade, não necessariamente histórico;
6. exportações ampliam portabilidade;
7. registros contínuos permitem recuperação pontual;
8. código, infraestrutura, configurações e artefatos também precisam ser preservados;
9. múltiplas cópias somente protegem quando possuem independência;
10. isolamento e imutabilidade reduzem propagação de perda;
11. distribuição deve considerar território, fornecedor e autoridade;
12. criptografia depende da recuperação das chaves;
13. consistência entre componentes deve ser planejada;
14. capacidade e saturação afetam a janela de proteção;
15. o catálogo das cópias é parte da própria recuperabilidade;
16. arquitetura simples e testada é superior à complexidade não comprovada.

---

## 262. Transição para o próximo lote

As estratégias e os componentes definidos neste lote estabelecem como a Plataforma UNO deverá produzir e preservar fontes de recuperação.

O próximo lote definirá como essas fontes serão utilizadas para:

- solicitar uma restauração;
- autorizar o procedimento;
- selecionar o ponto correto;
- preservar evidências;
- construir ambiente seguro;
- restaurar objetos;
- reconstruir capacidades;
- validar integridade;
- reconciliar divergências;
- retornar progressivamente à operação.

A cópia preserva a possibilidade.

A restauração deverá transformar essa possibilidade em realidade operacional confiável.

---

## Lote 4 — Restauração, Reconstrução e Reconciliação

---

## 263. A restauração como operação governada

Restauração é uma alteração deliberada do estado operacional.

Ela poderá:

- substituir dados existentes;
- reintroduzir versões anteriores;
- alterar configurações;
- reabrir acessos;
- reconstruir relações;
- reexecutar eventos;
- modificar resultados;
- afetar pessoas;
- produzir consequências jurídicas e institucionais.

Por isso, uma restauração não deverá ser tratada como simples cópia de arquivos.

Ela deverá ser governada como operação crítica, proporcional ao impacto do objeto recuperado.

> Restaurar significa escolher qual passado será utilizado para reconstruir o presente.  
> Essa escolha deverá possuir evidência, autoridade, limites e validação.

---

## 264. Condições para iniciar uma restauração

Uma restauração poderá ser iniciada quando houver:

- perda confirmada;
- corrupção;
- exclusão;
- indisponibilidade;
- alteração indevida;
- falha de implantação;
- comprometimento;
- necessidade de investigação;
- teste autorizado;
- migração;
- reconstrução;
- determinação institucional.

A restauração não deverá ser iniciada apenas porque existe uma cópia disponível.

Deverá existir finalidade clara.

---

## 265. Solicitação de restauração

Toda solicitação deverá conter, quando aplicável:

- solicitante;
- objeto;
- finalidade;
- motivo;
- escopo;
- período;
- ponto desejado;
- urgência;
- ambiente;
- impacto;
- dados existentes;
- dependências;
- autoridade;
- validação esperada.

Solicitações incompletas poderão ser aceitas provisoriamente em emergência, desde que sejam complementadas posteriormente.

---

## 266. Identidade do solicitante

A identidade e a competência do solicitante deverão ser confirmadas.

A possibilidade de solicitar não significará automaticamente autoridade para:

- acessar o conteúdo;
- selecionar qualquer versão;
- sobrescrever produção;
- recuperar dados de terceiros;
- alterar retenção;
- exportar informações.

---

## 267. Autorização

A autorização deverá ser proporcional a:

- criticidade;
- sensibilidade;
- alcance;
- irreversibilidade;
- ambiente;
- impacto humano;
- obrigação normativa.

Restaurações críticas poderão exigir:

- proprietário;
- custodiante;
- segurança;
- responsável operacional;
- autoridade institucional;
- jurídico;
- auditoria.

Nem todos precisarão aprovar todas as restaurações, mas a matriz deverá ser previamente definida.

---

## 268. Restauração emergencial

Em situação emergencial, procedimentos poderão ser acelerados.

Ainda assim, deverão permanecer:

- identificação;
- escopo;
- responsável;
- fonte;
- registro;
- validação mínima;
- comunicação;
- revisão posterior.

A urgência não autorizará restauração arbitrária de qualquer conteúdo.

---

## 269. Segregação de funções

Quando o risco justificar, deverão ser separados os papéis de:

- solicitar;
- autorizar;
- executar;
- validar;
- aprovar retorno;
- auditar.

Se a separação integral não for possível, deverão existir controles compensatórios, como:

- dupla verificação;
- registro ampliado;
- supervisão;
- limitação de escopo;
- revisão posterior obrigatória.

---

## 270. Classificação da restauração

A restauração deverá ser classificada por:

- objeto;
- granularidade;
- finalidade;
- ambiente;
- criticidade;
- urgência;
- origem;
- ponto temporal;
- impacto;
- reversibilidade.

Essa classificação definirá o fluxo aplicável.

---

## 271. Restauração granular

A restauração granular poderá recuperar:

- campo;
- registro;
- documento;
- arquivo;
- pasta;
- tabela;
- configuração;
- permissão;
- evento.

Ela deverá verificar relações com outros objetos.

Restaurar um registro isolado poderá exigir:

- referências;
- histórico;
- autorizações;
- índices;
- eventos;
- dependências;
- reconciliação.

---

## 272. Restauração de conjunto

A restauração de conjunto recupera uma coleção coerente de objetos.

Poderá ser adequada quando:

- relações precisam ser preservadas;
- o impacto alcança vários componentes;
- a granularidade individual produziria inconsistência;
- existe ponto comum de recuperação.

---

## 273. Restauração integral

A restauração integral recupera:

- banco;
- aplicação;
- ambiente;
- organização;
- capacidade completa.

Ela deverá possuir:

- plano;
- ambiente;
- capacidade;
- sequência;
- janela;
- comunicação;
- validação;
- reversão;
- reconciliação.

---

## 274. Seleção da fonte de recuperação

A seleção deverá considerar:

- integridade;
- completude;
- autenticidade;
- ponto temporal;
- consistência;
- segurança;
- compatibilidade;
- isolamento;
- teste;
- disponibilidade;
- proveniência.

A cópia mais recente não será automaticamente a mais adequada.

---

## 275. Fonte suspeita

Uma fonte deverá ser considerada suspeita quando:

- sua integridade não puder ser confirmada;
- estiver dentro do período de comprometimento;
- compartilhar a mesma causa de falha;
- tiver sido produzida por processo defeituoso;
- depender de chave comprometida;
- apresentar divergência;
- não possuir proveniência suficiente.

Fontes suspeitas poderão ser preservadas para investigação, mas não deverão retornar diretamente à produção sem tratamento.

---

## 276. Janela de comprometimento

A UNO deverá estimar o período durante o qual:

- corrupção;
- ataque;
- erro;
- alteração indevida;
- falha lógica;

poderá ter contaminado as cópias.

A seleção do ponto deverá buscar um estado anterior suficientemente confiável.

---

## 277. Ponto de recuperação

O ponto escolhido deverá ser registrado com:

- data;
- hora;
- identificador;
- versão;
- fonte;
- justificativa;
- perda esperada;
- consistência;
- confiança.

Quando o ponto exato não for conhecido, a incerteza deverá permanecer explícita.

---

## 278. Comparação de pontos

Poderão ser comparados diferentes pontos para identificar:

- início da corrupção;
- última versão íntegra;
- alterações relevantes;
- lacunas;
- impacto da perda;
- possibilidade de recuperação mais recente.

---

## 279. Preservação do estado atual

Antes de sobrescrever ou alterar o estado atual, ele deverá ser preservado quando possível.

Mesmo um estado corrompido poderá possuir valor para:

- investigação;
- comparação;
- reconstrução;
- reconciliação;
- defesa;
- aprendizado.

---

## 280. Cópia pré-restauração

A cópia pré-restauração deverá registrar:

- estado;
- momento;
- responsável;
- ambiente;
- integridade possível;
- finalidade;
- retenção.

Ela permitirá reversão quando a restauração produzir resultado inadequado.

---

## 281. Cadeia de custódia

Quando houver valor jurídico, regulatório ou investigativo, a seleção e a manipulação da fonte deverão preservar:

- origem;
- integridade;
- responsáveis;
- acessos;
- cópias;
- transferências;
- ferramentas;
- resultados.

---

## 282. Ambiente de restauração

Sempre que possível, a restauração deverá ocorrer inicialmente em ambiente separado.

O ambiente deverá possuir:

- isolamento;
- capacidade;
- versões compatíveis;
- acesso controlado;
- monitoramento;
- armazenamento;
- proteção;
- possibilidade de descarte;
- registros.

---

## 283. Ambiente limpo

Quando houver suspeita de comprometimento, o ambiente deverá ser construído a partir de fontes confiáveis.

Não deverá utilizar sem validação:

- imagens comprometidas;
- credenciais antigas;
- configurações inseguras;
- dependências desconhecidas;
- ferramentas alteradas;
- redes contaminadas.

---

## 284. Fidelidade do ambiente

O ambiente deverá ser suficientemente semelhante ao destino para validar:

- funcionamento;
- compatibilidade;
- desempenho;
- integrações;
- segurança;
- consistência.

Uma restauração bem-sucedida em ambiente diferente poderá falhar no destino real.

---

## 285. Dados reais em ambiente de teste

O uso de dados reais deverá ser:

- necessário;
- autorizado;
- protegido;
- limitado;
- registrado;
- descartado adequadamente.

Quando possível, deverão ser utilizados:

- dados mascarados;
- anonimizados;
- sintéticos;
- subconjuntos.

---

## 286. Capacidade do ambiente

A infraestrutura deverá suportar:

- volume restaurado;
- processamento;
- validação;
- índices;
- logs;
- comparações;
- exportações;
- reconciliação.

Falta de capacidade poderá produzir falsa falha de restauração.

---

## 287. Plano de execução

O plano deverá definir:

1. preservar o estado atual;
2. selecionar a fonte;
3. validar a fonte;
4. preparar o ambiente;
5. restaurar componentes-base;
6. aplicar cadeias;
7. restaurar relações;
8. reconstruir índices;
9. validar;
10. reconciliar;
11. aprovar;
12. retornar progressivamente.

A ordem deverá ser adaptada ao objeto.

---

## 288. Dependências da restauração

A execução poderá depender de:

- infraestrutura;
- armazenamento;
- rede;
- chaves;
- identidades;
- versões;
- licenças;
- ferramentas;
- pessoas;
- fornecedores;
- esquemas;
- documentação.

A indisponibilidade dessas dependências deverá aparecer no plano.

---

## 289. Restauração de chaves e credenciais

Chaves deverão ser recuperadas somente em ambiente autorizado.

Quando existir possibilidade de comprometimento, deverá ocorrer:

- rotação;
- reemissão;
- revogação;
- substituição;
- atualização de dependências.

A restauração não deverá reativar credenciais expiradas ou indevidas.

---

## 290. Restauração de identidade e autoridade

Deverão ser restaurados com cuidado:

- usuários;
- papéis;
- grupos;
- permissões;
- delegações;
- revogações;
- limites.

O estado histórico de autoridade poderá não ser adequado ao momento atual.

Toda restauração deverá reconciliar alterações legítimas ocorridas depois do ponto recuperado.

---

## 291. Restauração de configuração

Configurações deverão ser verificadas quanto a:

- ambiente;
- versão;
- segurança;
- dependências;
- parâmetros;
- segredos;
- políticas atuais.

Uma configuração antiga poderá reintroduzir:

- vulnerabilidade;
- endereço obsoleto;
- permissão indevida;
- integração encerrada;
- limite inadequado.

---

## 292. Restauração de banco de dados

O procedimento deverá considerar:

- versão;
- extensões;
- esquemas;
- usuários;
- permissões;
- índices;
- restrições;
- funções;
- transações;
- logs;
- codificação;
- integridade referencial.

A restauração deverá medir:

- duração;
- volume;
- erros;
- divergências;
- capacidade.

---

## 293. Restauração de arquivos

Deverão ser verificados:

- nomes;
- caminhos;
- permissões;
- propriedades;
- versões;
- integridade;
- metadados;
- links;
- dependências;
- sensibilidade.

Arquivos não deverão sobrescrever versões legítimas sem comparação.

---

## 294. Restauração de código

O procedimento deverá confirmar:

- repositório;
- commit;
- tag;
- branch;
- dependências;
- artefatos;
- assinaturas;
- testes;
- documentação;
- pipeline.

A versão recuperada deverá permanecer relacionada ao estado de dados e infraestrutura compatível.

---

## 295. Restauração de infraestrutura

A reconstrução deverá considerar:

- redes;
- regiões;
- serviços;
- identidades;
- permissões;
- políticas;
- monitoramento;
- armazenamento;
- segurança;
- dependências externas.

Infraestrutura restaurada deverá ser validada antes de receber dados sensíveis.

---

## 296. Restauração de eventos

Eventos deverão ser processados respeitando:

- ordem;
- idempotência;
- versão;
- dependências;
- duplicidade;
- efeitos externos;
- lacunas;
- temporalidade.

---

## 297. Restauração de filas

A fila deverá diferenciar:

- itens nunca executados;
- itens em execução no momento da falha;
- itens concluídos sem confirmação;
- itens falhos;
- itens cancelados;
- itens desconhecidos.

A reexecução automática poderá produzir duplicidade.

---

## 298. Restauração de modelos e agentes

Deverão ser recuperados:

- versão;
- configuração;
- instruções;
- ferramentas;
- permissões;
- memória autorizada;
- avaliações;
- limites;
- políticas.

O agente restaurado deverá ser novamente validado antes de receber autonomia.

---

## 299. Restauração da Engenharia Oficial

Documentos normativos deverão preservar:

- versão;
- autoria;
- histórico;
- aprovação;
- relação com arquivos;
- integridade;
- ordem arquitetural.

Uma cópia recuperada não deverá substituir versão posterior legítima sem processo formal.

---

## 300. Reconstrução por fontes múltiplas

Quando nenhuma fonte for suficiente, a recuperação poderá combinar:

- backup;
- réplica;
- logs;
- eventos;
- documentos;
- registros externos;
- confirmação humana;
- sistemas parceiros;
- memória institucional.

Cada contribuição deverá possuir proveniência e confiança.

---

## 301. Reconstrução determinística

A reconstrução será determinística quando as mesmas entradas e regras produzirem o mesmo estado.

Ela deverá registrar:

- entradas;
- ordem;
- versões;
- regras;
- ferramentas;
- resultado.

---

## 302. Reconstrução inferida

Quando faltarem dados, poderá ser necessário inferir partes do estado.

Toda inferência deverá ser:

- identificada;
- justificada;
- limitada;
- revisável;
- separada de fatos confirmados;
- associada a nível de confiança.

Inferência não deverá ser gravada como verdade definitiva sem validação.

---

## 303. Recomposição humana

Pessoas poderão ajudar a reconstruir:

- decisões;
- atividades;
- contextos;
- relacionamentos;
- estados;
- pendências.

Relatos deverão ser comparados com outras evidências.

A pressão da emergência não deverá transformar lembrança individual em única fonte de verdade.

---

## 304. Lacunas irrecuperáveis

Quando determinada parte não puder ser recuperada, a UNO deverá:

- reconhecer a perda;
- delimitar o alcance;
- identificar afetados;
- impedir falsas certezas;
- comunicar;
- reparar quando possível;
- reconstruir alternativas;
- registrar aprendizado.

A ocultação da perda produzirá risco superior.

---

## 305. Validação estrutural

A validação estrutural deverá confirmar:

- presença;
- formato;
- esquema;
- tamanho;
- relações;
- índices;
- metadados;
- versões;
- referências.

---

## 306. Validação de integridade

Poderá utilizar:

- checksums;
- assinaturas;
- comparação;
- restrições;
- testes;
- amostragem;
- validação cruzada;
- reconciliação.

---

## 307. Validação semântica

A validação semântica deverá confirmar se o conteúdo:

- representa a realidade esperada;
- possui significado correto;
- mantém relações;
- respeita regras;
- não mistura contextos;
- não reintroduz estados inválidos.

---

## 308. Validação funcional

A capacidade deverá demonstrar que consegue:

- ler;
- interpretar;
- processar;
- decidir;
- executar;
- registrar;
- comunicar;
- recuperar erros.

---

## 309. Validação temporal

Deverá confirmar:

- ponto representado;
- sequência;
- lacunas;
- relógios;
- eventos;
- alterações posteriores;
- retenção.

---

## 310. Validação de segurança

Deverá verificar:

- credenciais;
- permissões;
- segredos;
- vulnerabilidades;
- código;
- configurações;
- integridade;
- acessos temporários;
- sinais de comprometimento.

---

## 311. Validação normativa

Deverá confirmar aderência às leis, normas, contratos, políticas e obrigações aplicáveis no momento da recuperação.

Um estado antigo poderá não cumprir requisitos atuais.

---

## 312. Validação pelo proprietário

O proprietário deverá confirmar que o objeto restaurado:

- corresponde ao esperado;
- atende à finalidade;
- possui completude suficiente;
- poderá retornar à operação;
- apresenta limitações conhecidas.

---

## 313. Validação independente

Capacidades críticas deverão possuir validação independente quando possível.

A mesma pessoa não deverá:

- executar;
- aprovar;
- validar integralmente;

uma restauração de alta consequência sem controle adicional.

---

## 314. Registro dos resultados

A restauração deverá registrar:

- fonte;
- ponto;
- ambiente;
- início;
- término;
- responsáveis;
- ferramentas;
- erros;
- decisões;
- validações;
- limitações;
- resultado;
- evidências.

---

## 315. Reconciliação

Reconciliação é o processo de resolver diferenças entre:

- estado restaurado;
- estado anterior à falha;
- operações ocorridas durante a contingência;
- registros externos;
- unidades desconectadas;
- sistemas parceiros;
- realidade atual.

A restauração recupera um ponto.

A reconciliação integra aquilo que aconteceu depois dele.

---

## 316. Fontes de divergência

Divergências poderão resultar de:

- operação manual;
- funcionamento parcial;
- filas;
- replicação atrasada;
- unidades locais;
- integrações;
- eventos externos;
- versões concorrentes;
- relógios diferentes;
- restauração incompleta.

---

## 317. Classificação das divergências

Cada divergência poderá ser:

- duplicidade;
- conflito;
- ausência;
- atraso;
- versão concorrente;
- alteração inválida;
- alteração legítima;
- estado desconhecido.

---

## 318. Autoridade da fonte

A resolução deverá considerar:

- fonte oficial;
- autoridade;
- temporalidade;
- finalidade;
- evidência;
- integridade;
- contexto.

O registro mais recente não será necessariamente o mais legítimo.

---

## 319. Reconciliação automática

Poderá ocorrer quando:

- regras forem determinísticas;
- impacto for limitado;
- idempotência existir;
- conflitos forem conhecidos;
- reversão for possível.

A automação deverá registrar decisões e exceções.

---

## 320. Reconciliação assistida

Agentes poderão:

- comparar;
- agrupar;
- identificar conflito;
- sugerir resolução;
- estimar impacto;
- apresentar evidências.

Decisões de alta consequência deverão permanecer sob autoridade humana legítima.

---

## 321. Reconciliação humana

Será necessária quando houver:

- direitos;
- pagamentos;
- identidade;
- autoridade;
- decisões incompatíveis;
- impacto humano;
- evidência incompleta;
- conflito institucional.

---

## 322. Prevenção de duplicidade

A reconciliação deverá utilizar:

- identificadores;
- chaves de idempotência;
- temporalidade;
- estado;
- confirmação;
- comparação;
- regras de negócio.

---

## 323. Efeitos externos

A restauração não desfaz automaticamente efeitos ocorridos fora do sistema.

Deverão ser reconciliados:

- pagamentos;
- mensagens;
- contratos;
- entregas;
- atendimentos;
- decisões;
- ações físicas;
- registros de parceiros.

---

## 324. Reparação de inconsistências

Quando o sistema recuperado divergir da realidade, a correção deverá:

- preservar histórico;
- registrar motivo;
- identificar responsável;
- evitar ocultação;
- comunicar afetados;
- reparar direitos.

---

## 325. Estado provisório

Dados ainda não reconciliados poderão receber estado provisório.

Esse estado deverá impedir uso inadequado em:

- decisões definitivas;
- cobranças;
- punições;
- autorizações;
- distribuições;
- conclusões institucionais.

---

## 326. Critérios de conclusão da reconciliação

A reconciliação será concluída quando:

- conflitos relevantes forem resolvidos;
- lacunas forem classificadas;
- duplicidades forem tratadas;
- efeitos externos forem comparados;
- responsáveis aprovarem;
- limitações permanecerem registradas.

---

## 327. Retorno à produção

O retorno deverá exigir:

- restauração concluída;
- validações aprovadas;
- riscos residuais conhecidos;
- dependências disponíveis;
- monitoramento ativo;
- plano de reversão;
- responsáveis presentes;
- comunicação preparada.

---

## 328. Ativação limitada

A capacidade restaurada poderá retornar para:

- grupo reduzido;
- território;
- organização;
- função;
- percentual de tráfego;
- janela temporal.

A ativação limitada deverá produzir evidência suficiente antes da ampliação.

---

## 329. Ampliação progressiva

A ampliação deverá considerar:

- estabilidade;
- desempenho;
- erros;
- segurança;
- consistência;
- filas;
- impacto;
- capacidade;
- confiança.

---

## 330. Monitoramento reforçado

Durante o retorno, deverão ser acompanhados:

- integridade;
- disponibilidade;
- desempenho;
- replicação;
- eventos;
- divergências;
- acessos;
- falhas;
- reclamações;
- dependências.

---

## 331. Reversão da restauração

A reversão deverá ser acionada quando:

- critérios falharem;
- corrupção aparecer;
- segurança for comprometida;
- inconsistências aumentarem;
- capacidade for insuficiente;
- impactos inesperados surgirem.

O estado de reversão deverá ter sido preparado antes da ampliação.

---

## 332. Restauração sobre produção

Quando for inevitável restaurar diretamente sobre produção, deverão existir controles ampliados:

- janela;
- congelamento;
- cópia prévia;
- autorização;
- supervisão;
- comunicação;
- validação;
- reversão;
- registro.

---

## 333. Restauração sem interrupção

Quando a operação precisar permanecer ativa, a arquitetura deverá coordenar:

- ambiente paralelo;
- sincronização;
- corte;
- filas;
- consistência;
- sessão;
- reversão.

---

## 334. Corte operacional

O momento de transferir a operação ao estado restaurado deverá indicar:

- horário;
- responsáveis;
- condições;
- bloqueios;
- sincronização final;
- validação;
- comunicação;
- retorno possível.

---

## 335. Aceitação da restauração

A aceitação deverá registrar:

- objeto;
- resultado;
- critérios;
- limitações;
- risco residual;
- proprietário;
- validador;
- autoridade;
- momento.

---

## 336. Encerramento da restauração

O encerramento deverá incluir:

- limpeza de ambientes temporários;
- revogação de acessos;
- proteção de evidências;
- atualização do catálogo;
- medição de objetivos;
- registro de falhas;
- ações corretivas;
- comunicação.

---

## 337. Medição do RPO

A UNO deverá calcular a diferença entre:

- último estado recuperado;
- momento real da falha ou perda.

A perda efetiva deverá ser comparada ao objetivo estabelecido.

---

## 338. Medição do RTO

O tempo deverá ser medido desde o marco definido pela política até o retorno validado da capacidade.

Não deverá ser encerrado apenas quando a ferramenta concluir a cópia.

---

## 339. Medição de consistência

A recuperação deverá indicar:

- relações preservadas;
- conflitos;
- lacunas;
- objetos não recuperados;
- reconciliações necessárias.

---

## 340. Falha de restauração

Toda falha deverá registrar:

- etapa;
- causa;
- objeto;
- fonte;
- impacto;
- alternativa;
- tempo;
- ação;
- aprendizado.

A falha deverá reclassificar a confiança na política correspondente.

---

## 341. Fontes alternativas

Quando a fonte preferencial falhar, deverão existir critérios para selecionar:

- cópia secundária;
- exportação;
- réplica;
- mídia offline;
- reconstrução por eventos;
- recomposição manual.

---

## 342. Restauração parcial

Quando somente parte puder ser recuperada, a UNO deverá declarar:

- conteúdo recuperado;
- conteúdo perdido;
- limitações;
- confiança;
- impacto;
- ações;
- reparação;
- próximos passos.

---

## 343. Comunicação aos afetados

Quando a restauração alterar ou não conseguir recuperar informações relacionadas a pessoas, elas deverão receber comunicação adequada sobre:

- ocorrência;
- impacto;
- estado;
- direitos;
- correções;
- ações necessárias;
- canais.

---

## 344. Antipadrões de restauração

A UNO deverá evitar:

### 344.1 Restaurar diretamente sem preservar o estado atual

A evidência e a reversão são perdidas.

### 344.2 Escolher automaticamente a cópia mais recente

Ela poderá conter a mesma corrupção.

### 344.3 Restaurar dados sem configurações compatíveis

A capacidade retorna inconsistente.

### 344.4 Reativar credenciais antigas

A recuperação reintroduz acesso comprometido.

### 344.5 Validar somente quantidade de arquivos

Integridade e significado permanecem desconhecidos.

### 344.6 Reprocessar filas sem idempotência

Ações são duplicadas.

### 344.7 Ignorar efeitos externos

O sistema restaurado diverge da realidade.

### 344.8 Usar inferência como fato

Lacunas são ocultadas.

### 344.9 Retornar integralmente sem ativação limitada

A falha pode alcançar todo o ambiente.

### 344.10 Encerrar sem medir objetivos

A organização não sabe se sua política funcionou.

---

## 345. Invariantes da restauração

Toda restauração deverá preservar:

1. finalidade;
2. autorização;
3. proveniência;
4. integridade;
5. estado anterior;
6. segurança;
7. temporalidade;
8. rastreabilidade;
9. validação;
10. reconciliação;
11. reversibilidade;
12. responsabilidade.

---

## 346. Garantias do Lote 4

A Plataforma UNO deverá garantir que:

- toda restauração relevante possua solicitação e autorização;
- toda fonte seja selecionada por evidência;
- todo estado atual seja preservado quando possível;
- toda restauração crítica ocorra inicialmente em ambiente controlado;
- toda credencial seja reavaliada;
- toda configuração antiga seja validada;
- toda fila seja classificada antes da reexecução;
- toda inferência permaneça identificada;
- toda divergência seja reconciliada;
- todo efeito externo seja considerado;
- todo retorno possua monitoramento e reversão;
- toda restauração seja aceita por autoridade competente;
- todo RPO e RTO sejam medidos;
- nenhuma conclusão de sucesso seja declarada sem validação funcional.

---

## 347. Princípios consolidados

A Engenharia Oficial reconhece que:

1. restauração é uma mudança crítica de estado;
2. selecionar a fonte correta é parte da recuperação;
3. a cópia mais recente pode não ser confiável;
4. o estado atual deve ser preservado antes da substituição;
5. ambientes limpos reduzem reinfecção e recorrência;
6. dados, configurações, identidades e versões devem ser compatíveis;
7. filas e eventos exigem idempotência;
8. lacunas precisam permanecer visíveis;
9. reconstrução poderá combinar múltiplas fontes;
10. reconciliação integra o passado restaurado à realidade atual;
11. efeitos externos não são revertidos por backup;
12. validação deve ser estrutural, semântica, funcional, temporal, normativa e de segurança;
13. o retorno deverá ser progressivo;
14. toda ampliação exige possibilidade de reversão;
15. recuperação comprovada termina na capacidade validada, não na conclusão da ferramenta.

---

## 348. Transição para o próximo lote

A restauração, a reconstrução e a reconciliação estabelecidas neste lote permitem transformar fontes preservadas em capacidade operacional novamente confiável.

O próximo lote estabelecerá como todo esse ciclo será protegido e governado por meio de:

- identidade;
- autorização;
- criptografia;
- gestão de chaves;
- segregação de funções;
- imutabilidade;
- cadeia de custódia;
- retenção;
- descarte;
- privacidade;
- soberania;
- conformidade;
- fornecedores;
- auditoria.

A recuperabilidade precisa sobreviver à falha.

Também deverá resistir ao abuso, à exposição, à manipulação e à perda de legitimidade.

---

## Lote 5 — Segurança, Governança e Ciclo de Vida

---

## 349. A proteção das próprias fontes de recuperação

Backups concentram versões históricas, dados, configurações, identidades, documentos, evidências e conhecimentos suficientes para reconstruir capacidades inteiras.

Por isso, poderão possuir valor e sensibilidade superiores aos ambientes de origem.

Uma arquitetura de recuperação insegura poderá tornar-se:

- fonte de exposição;
- caminho de ataque;
- instrumento de fraude;
- mecanismo de vigilância;
- ponto de concentração;
- forma de apagar evidências;
- meio de recuperar permissões indevidas;
- dependência institucional invisível.

> O backup deverá sobreviver à falha sem se transformar em uma nova origem de risco.

---

## 350. Governança de backup

A governança deverá definir:

- quem determina o que será protegido;
- quem executa as cópias;
- quem administra os destinos;
- quem controla as chaves;
- quem autoriza restaurações;
- quem valida;
- quem altera retenções;
- quem aprova exclusões;
- quem audita;
- quem responde por falhas.

A governança deverá impedir lacunas e concentrações indevidas.

---

## 351. Autoridade sobre o objeto e autoridade sobre a cópia

A autoridade sobre a origem não concederá automaticamente autoridade irrestrita sobre todas as cópias.

A arquitetura deverá distinguir:

- propriedade do objeto;
- custódia da cópia;
- administração da infraestrutura;
- autorização de restauração;
- autorização de descarte;
- acesso ao conteúdo;
- auditoria.

---

## 352. Princípio do menor privilégio

Cada pessoa, agente, sistema ou organização deverá possuir apenas os acessos necessários para sua função.

Exemplos:

- o sistema de produção poderá escrever cópias sem apagá-las;
- o operador poderá acompanhar execuções sem ler dados sensíveis;
- o custodiante poderá manter armazenamento sem autorizar restauração;
- o auditor poderá verificar evidências sem alterar políticas;
- o restaurador poderá acessar determinado conjunto durante uma janela limitada.

---

## 353. Privilégio temporário

Acessos excepcionais deverão possuir:

- finalidade;
- escopo;
- responsável;
- início;
- expiração;
- aprovação;
- registro;
- revisão.

Permissões temporárias deverão ser revogadas automaticamente quando possível.

---

## 354. Acesso emergencial

A recuperação poderá exigir acesso quando os mecanismos ordinários estiverem indisponíveis.

O acesso emergencial deverá possuir:

- credencial protegida;
- múltiplos responsáveis quando necessário;
- autenticação reforçada;
- registro;
- alerta;
- uso limitado;
- rotação posterior;
- revisão obrigatória.

O acesso emergencial não deverá ser utilizado como caminho rotineiro.

---

## 355. Contas de emergência

Contas de emergência deverão:

- possuir finalidade específica;
- permanecer protegidas;
- ser testadas;
- não depender exclusivamente da mesma identidade federada que poderão precisar recuperar;
- produzir alertas de utilização;
- possuir credenciais armazenadas separadamente;
- ser revisadas periodicamente.

---

## 356. Autenticação

O acesso deverá utilizar autenticação proporcional à criticidade, podendo incluir:

- múltiplos fatores;
- dispositivos confiáveis;
- certificados;
- chaves físicas;
- confirmação adicional;
- restrição contextual;
- identidade institucional.

---

## 357. Autorização contextual

A autorização poderá considerar:

- objeto;
- finalidade;
- ambiente;
- horário;
- localização;
- função;
- incidente;
- sensibilidade;
- risco;
- aprovação.

Uma pessoa autorizada a restaurar em teste não estará automaticamente autorizada a restaurar em produção.

---

## 358. Separação entre produção e backup

As estruturas deverão possuir separação adequada de:

- contas;
- credenciais;
- redes;
- permissões;
- projetos;
- administrações;
- fornecedores;
- registros.

A separação deverá impedir que uma única falha comprometa origem e recuperação.

---

## 359. Separação entre backup e segurança

A segurança deverá supervisionar riscos sem necessariamente possuir acesso irrestrito ao conteúdo.

A arquitetura deverá equilibrar:

- proteção;
- privacidade;
- auditoria;
- capacidade de resposta;
- separação de funções.

---

## 360. Separação entre backup e auditoria

Auditores deverão poder verificar:

- políticas;
- execuções;
- retenções;
- falhas;
- acessos;
- restaurações;
- descartes;
- testes.

Eles não deverão alterar os mesmos registros que auditam.

---

## 361. Controle de exclusão

A exclusão de cópias críticas deverá exigir controles como:

- autorização específica;
- dupla aprovação;
- justificativa;
- janela;
- registro;
- alerta;
- verificação da retenção;
- confirmação de outras fontes;
- possibilidade de suspensão.

---

## 362. Proteção contra exclusão em massa

A arquitetura deverá detectar e limitar:

- grandes volumes de exclusão;
- redução inesperada de retenção;
- remoção de políticas;
- desativação de imutabilidade;
- eliminação de catálogos;
- revogação de chaves;
- encerramento de contas.

---

## 363. Proteção contra administradores comprometidos

Administradores poderão ter credenciais roubadas, agir sob coerção, cometer erro ou abusar de autoridade.

A proteção deverá utilizar:

- separação de funções;
- múltiplas aprovações;
- imutabilidade;
- alertas independentes;
- contas separadas;
- registros externos;
- privilégios temporários;
- revisão.

Nenhum administrador isolado deverá possuir capacidade desnecessária de eliminar origem, cópias, chaves e evidências.

---

## 364. Identidade de agentes e automações

Toda automação deverá possuir identidade própria.

Não deverá utilizar indiscriminadamente:

- contas humanas;
- credenciais compartilhadas;
- privilégios permanentes;
- segredos embutidos.

Sua identidade deverá possuir:

- proprietário;
- escopo;
- rotação;
- logs;
- expiração quando aplicável;
- comportamento de falha.

---

## 365. Autoridade de agentes de IA

Agentes poderão:

- inventariar;
- classificar provisoriamente;
- monitorar;
- alertar;
- recomendar;
- executar cópias previamente autorizadas;
- realizar verificações;
- preparar restaurações em ambientes isolados.

Não deverão, isoladamente:

- reduzir retenções;
- apagar cópias críticas;
- restaurar produção de alta consequência;
- acessar conteúdos fora de sua finalidade;
- alterar políticas permanentes;
- expor dados;
- revogar evidências.

---

## 366. Criptografia

A criptografia deverá proteger:

- transferência;
- armazenamento;
- mídias;
- exportações;
- catálogos sensíveis;
- credenciais;
- metadados quando necessário.

Ela deverá utilizar mecanismos adequados à criticidade e à legislação aplicável.

---

## 367. Criptografia do lado do fornecedor

A criptografia gerenciada pelo fornecedor poderá proteger contra perda física de mídia.

Entretanto, poderá não proteger contra:

- conta comprometida;
- administrador autorizado;
- obrigação externa;
- falha de controle;
- dependência do próprio fornecedor.

Objetos críticos poderão exigir chaves sob controle institucional adicional.

---

## 368. Criptografia sob controle da UNO

Quando a UNO controlar as chaves, deverá assumir responsabilidade por:

- disponibilidade;
- proteção;
- rotação;
- recuperação;
- sucessão;
- revogação;
- auditoria.

Controle sem governança poderá causar perda definitiva.

---

## 369. Gestão do ciclo de vida das chaves

Toda chave deverá possuir:

- identificador;
- finalidade;
- algoritmo;
- criação;
- ativação;
- uso;
- rotação;
- cópia protegida;
- recuperação;
- suspensão;
- revogação;
- destruição.

---

## 370. Cópia de segurança das chaves

Chaves necessárias à recuperação deverão possuir proteção independente.

A cópia deverá:

- permanecer criptografada;
- possuir custódia;
- exigir autoridade adequada;
- ser testada;
- possuir sucessão;
- resistir à perda da infraestrutura principal.

---

## 371. Divisão de autoridade sobre chaves

Chaves de alta consequência poderão exigir:

- múltiplos responsáveis;
- fragmentos;
- quórum;
- cerimônia de recuperação;
- registro;
- supervisão.

Nenhuma pessoa deverá tornar-se ponto único de recuperação ou comprometimento.

---

## 372. Rotação de chaves

A rotação deverá considerar cópias históricas.

A UNO deverá saber:

- quais cópias utilizam cada chave;
- por quanto tempo precisam permanecer legíveis;
- como ocorrerá recriptografia;
- como revogar sem destruir recuperação legítima.

---

## 373. Perda de chave

A perda deverá ser tratada como perda potencial de dados.

Deverá produzir:

- incidente;
- avaliação de alcance;
- busca por cópias protegidas;
- contenção;
- comunicação;
- revisão;
- aprendizado.

---

## 374. Comprometimento de chave

Quando houver suspeita de exposição, deverão ser avaliados:

- conteúdos acessíveis;
- período;
- cópias;
- agentes;
- acessos;
- necessidade de rotação;
- recriptografia;
- notificação;
- preservação de evidências.

---

## 375. Integridade criptográfica

Checksums, assinaturas e mecanismos equivalentes deverão permitir detectar:

- alteração;
- corrupção;
- substituição;
- truncamento;
- transferência incompleta.

Os próprios registros de integridade deverão ser protegidos.

---

## 376. Assinatura de objetos críticos

Documentos, políticas, artefatos, imagens ou pacotes críticos poderão possuir assinatura que confirme:

- origem;
- integridade;
- versão;
- autoridade;
- momento.

---

## 377. Imutabilidade governada

A imutabilidade deverá ser configurada de acordo com:

- retenção;
- obrigação;
- sensibilidade;
- custo;
- direito de eliminação;
- investigação;
- operação.

Ela não deverá impedir correções legítimas sem oferecer procedimento adequado para novos estados e marcações.

---

## 378. Imutabilidade não significa verdade

Um conteúdo imutável poderá preservar:

- erro;
- corrupção;
- informação incorreta;
- dado indevido.

A imutabilidade prova preservação, não correção.

A política deverá permitir registrar:

- contestação;
- invalidação;
- substituição;
- contexto;
- nova versão;

sem apagar indevidamente o histórico.

---

## 379. Retenção governada

A retenção deverá ser implementada conforme:

- finalidade;
- classe;
- obrigação;
- risco;
- temporalidade;
- custo;
- direitos.

Ela deverá possuir responsáveis e evidências.

---

## 380. Início da contagem de retenção

A política deverá definir quando o período começa:

- criação;
- última alteração;
- encerramento;
- término de contrato;
- conclusão de Missão;
- evento;
- determinação;
- último uso legítimo.

---

## 381. Retenção mínima e máxima

Poderão existir:

- prazo mínimo obrigatório;
- prazo máximo permitido;
- retenção permanente;
- retenção condicionada;
- suspensão temporária.

A arquitetura deverá impedir tanto eliminação precoce quanto preservação indevida.

---

## 382. Retenção diferenciada

Partes de um mesmo conjunto poderão possuir retenções distintas.

Quando tecnicamente possível, deverão ser separadas.

Quando não for possível, deverá ser aplicada política compatível com o requisito mais protetivo e revista a arquitetura.

---

## 383. Preservação legal

Uma determinação de preservação deverá impedir descarte de objetos relacionados.

Ela deverá indicar:

- escopo;
- autoridade;
- fundamento;
- início;
- responsáveis;
- revisão;
- encerramento.

---

## 384. Direito de eliminação

Quando houver direito ou obrigação de eliminação, a UNO deverá possuir processo para:

- localizar cópias;
- identificar retenções;
- avaliar exceções legais;
- impedir restauração indevida do conteúdo eliminado;
- registrar a ação;
- preservar somente o necessário.

---

## 385. Eliminação lógica em backups imutáveis

Quando a alteração direta não for possível, poderão ser utilizados mecanismos como:

- expiração de retenção;
- separação por chaves;
- revogação controlada;
- listas de supressão;
- exclusão na restauração;
- reconstrução sem o objeto.

A solução deverá ser juridicamente e tecnicamente validada.

---

## 386. Lista de supressão

A lista de supressão poderá impedir que objetos legitimamente eliminados retornem durante restaurações futuras.

Ela deverá possuir:

- identidade;
- autoridade;
- proteção;
- temporalidade;
- aplicação obrigatória;
- auditoria.

A lista não deverá revelar mais informação do que o necessário.

---

## 387. Descarte seguro

O descarte deverá considerar:

- mídia;
- tecnologia;
- criptografia;
- sensibilidade;
- fornecedor;
- jurisdição;
- cadeia de custódia;
- evidência.

Métodos poderão incluir:

- exclusão segura;
- destruição criptográfica;
- sobrescrita;
- destruição física;
- expiração imutável controlada.

---

## 388. Destruição criptográfica

Quando os dados estiverem criptografados adequadamente, a destruição das chaves poderá torná-los inacessíveis.

Essa medida deverá ser utilizada somente quando:

- as chaves forem exclusivas;
- não existirem cópias alternativas;
- o efeito estiver compreendido;
- houver autorização;
- existir evidência.

---

## 389. Destruição de mídia

A mídia poderá exigir:

- desmagnetização;
- trituração;
- destruição física;
- procedimento certificado;
- acompanhamento;
- registro.

A técnica deverá ser compatível com o tipo de mídia.

---

## 390. Privacidade desde a política

A política deverá incorporar desde a origem:

- finalidade;
- necessidade;
- minimização;
- acesso;
- retenção;
- transparência;
- segurança;
- direitos;
- prestação de contas.

Backup não deverá ser utilizado como justificativa para conservar indefinidamente dados sem finalidade.

---

## 391. Minimização

Deverá ser copiado somente aquilo que for necessário à finalidade definida.

A minimização poderá ocorrer por:

- exclusão de campos;
- separação;
- anonimização;
- filtragem;
- redução de retenção;
- classificação.

---

## 392. Anonimização e pseudonimização

Quando adequadas, poderão reduzir exposição em:

- testes;
- análises;
- exercícios;
- ambientes alternativos;
- compartilhamentos.

A possibilidade de reidentificação deverá ser avaliada.

---

## 393. Transparência

Pessoas deverão receber informações adequadas sobre:

- existência de cópias;
- finalidade;
- retenção;
- proteção;
- compartilhamento;
- direitos;
- limitações de eliminação.

A transparência deverá ser proporcional e compreensível.

---

## 394. Acesso do titular

Solicitações relacionadas a dados pessoais deverão considerar que:

- backups não são sistemas ordinários de consulta;
- restauração ampla para atender consulta poderá produzir risco;
- a existência de cópias não elimina direitos;
- procedimentos específicos poderão ser necessários.

A resposta deverá respeitar a legislação aplicável e a arquitetura técnica.

---

## 395. Incidente envolvendo backup

A exposição, perda, alteração ou indisponibilidade de backup deverá ser tratada como incidente próprio.

A avaliação deverá considerar:

- conteúdo;
- classes;
- titulares;
- chaves;
- acesso;
- retenção;
- capacidade de recuperação;
- obrigações de comunicação;
- impacto institucional.

---

## 396. Rastreabilidade de acesso

Todo acesso relevante deverá registrar:

- identidade;
- objeto;
- ação;
- momento;
- finalidade;
- origem;
- resultado;
- autorização.

Logs de acesso deverão ser protegidos contra alteração pelo mesmo administrador observado.

---

## 397. Rastreabilidade de restauração

O histórico deverá permitir saber:

- quem solicitou;
- quem autorizou;
- qual fonte foi utilizada;
- o que foi restaurado;
- onde;
- quando;
- qual validação ocorreu;
- qual resultado foi produzido.

---

## 398. Rastreabilidade de política

Mudanças deverão registrar:

- estado anterior;
- alteração;
- responsável;
- aprovação;
- justificativa;
- impacto;
- vigência;
- reversão.

---

## 399. Monitoramento de comportamento anormal

A arquitetura deverá detectar:

- acessos incomuns;
- exportações em massa;
- restaurações não previstas;
- falhas de autenticação;
- mudanças de retenção;
- exclusões;
- desativação de alertas;
- leitura de objetos sensíveis;
- alteração de políticas;
- movimentação territorial inesperada.

---

## 400. Alertas independentes

Eventos críticos deverão ser comunicados por canais que não dependam exclusivamente do mesmo ambiente monitorado.

Isso poderá incluir:

- conta separada;
- organização distinta;
- canal externo;
- auditoria;
- responsável institucional.

---

## 401. Segurança dos catálogos

Catálogos poderão revelar:

- localizações;
- nomes;
- classificações;
- estruturas;
- pontos de recuperação;
- tecnologias;
- responsáveis.

Eles deverão possuir controle de acesso e cópia própria.

---

## 402. Segurança dos procedimentos

Runbooks de recuperação poderão conter informações sensíveis.

Deverão ser acessíveis durante emergência sem ficarem publicamente expostos.

---

## 403. Soberania

A arquitetura deverá conhecer:

- onde as cópias residem;
- sob qual jurisdição;
- quem controla;
- quais terceiros acessam;
- quais transferências ocorrem;
- quais leis se aplicam;
- quais riscos existem.

Soberania não significará necessariamente armazenar tudo em um único território.

Significará exercer decisão consciente e legítima sobre a custódia e o uso.

---

## 404. Residência de dados

Requisitos de residência poderão resultar de:

- legislação;
- contrato;
- política;
- sensibilidade;
- decisão institucional;
- compromisso público.

Eles deverão ser incorporados à seleção dos destinos.

---

## 405. Transferência entre jurisdições

A transferência deverá avaliar:

- base legal;
- proteção;
- contrato;
- finalidade;
- acesso;
- autoridade;
- retenção;
- risco;
- notificação.

---

## 406. Custódia institucional

Objetos fundamentais da Engenharia Oficial deverão possuir custódia que sobreviva a:

- mudança de fornecedor;
- mudança de equipe;
- perda de conta;
- conflito;
- encerramento de parceria;
- sucessão institucional.

---

## 407. Continuidade da custódia

Toda custódia crítica deverá possuir:

- responsável principal;
- substituto;
- sucessão;
- contatos;
- procedimentos;
- chaves;
- revisão;
- transferência governada.

---

## 408. Fornecedores

A seleção deverá considerar:

- confiabilidade;
- segurança;
- disponibilidade;
- regiões;
- portabilidade;
- imutabilidade;
- criptografia;
- auditoria;
- contratos;
- suporte;
- recuperação;
- encerramento;
- sustentabilidade econômica.

---

## 409. Responsabilidade compartilhada

O contrato deverá esclarecer o que cabe:

- ao fornecedor;
- à UNO;
- às organizações participantes;
- aos operadores;
- aos usuários.

“Serviço gerenciado” não significa transferência integral da responsabilidade.

---

## 410. Garantias contratuais

Contratos poderão exigir:

- disponibilidade;
- retenção;
- recuperação;
- notificação;
- portabilidade;
- localização;
- suporte;
- devolução;
- eliminação;
- auditoria;
- continuidade;
- níveis de serviço.

---

## 411. Direito de auditoria

Quando necessário, a UNO deverá possuir meios de verificar:

- controles;
- evidências;
- certificações;
- incidentes;
- retenção;
- exclusão;
- localização;
- acesso;
- recuperação.

---

## 412. Dependência de fornecedor

A dependência deverá ser medida quanto a:

- formatos;
- APIs;
- ferramentas;
- chaves;
- identidades;
- contratos;
- conhecimento;
- custos de saída;
- capacidade de exportação;
- tempo de migração.

---

## 413. Estratégia de saída

Todo fornecedor crítico deverá possuir plano de saída contendo:

- inventário;
- exportação;
- formato;
- transferência;
- validação;
- migração;
- continuidade;
- revogação;
- descarte;
- encerramento;
- evidência.

---

## 414. Falência ou encerramento do fornecedor

A arquitetura deverá considerar a possibilidade de:

- encerramento repentino;
- bloqueio de conta;
- indisponibilidade prolongada;
- alteração contratual;
- perda de acesso;
- descontinuação de produto.

Cópias independentes deverão permitir recuperação fora do fornecedor quando a criticidade exigir.

---

## 415. Subcontratados

A UNO deverá conhecer terceiros que participem de:

- armazenamento;
- suporte;
- processamento;
- transporte;
- destruição;
- auditoria.

As obrigações deverão alcançar a cadeia necessária.

---

## 416. Organizações federadas

Cada organização deverá declarar:

- objetos;
- políticas;
- custódia;
- localização;
- responsáveis;
- retenção;
- incidentes;
- testes;
- restauração.

A federação deverá possuir garantias mínimas comuns sem apagar autonomia legítima.

---

## 417. Compartilhamento de cópias

Cópias não deverão ser compartilhadas apenas por conveniência.

O compartilhamento deverá possuir:

- finalidade;
- minimização;
- contrato;
- autorização;
- proteção;
- retenção;
- devolução;
- descarte;
- registro.

---

## 418. Encerramento de parceria

Ao encerrar uma relação, deverão ser tratados:

- devolução;
- migração;
- retenção;
- eliminação;
- chaves;
- acessos;
- cópias;
- evidências;
- obrigações pendentes;
- confirmação.

---

## 419. Conformidade

A conformidade deverá ser demonstrada por:

- políticas;
- configurações;
- registros;
- evidências;
- testes;
- contratos;
- auditorias;
- ações corretivas.

Declarações sem evidência não serão suficientes.

---

## 420. Matriz normativa

Cada política deverá relacionar:

- objeto;
- requisito;
- fonte normativa;
- obrigação;
- controle;
- evidência;
- responsável;
- periodicidade;
- exceção.

A matriz deverá ser atualizada quando leis ou normas mudarem.

---

## 421. Normas técnicas

A UNO poderá adotar normas técnicas reconhecidas como referência, desde que:

- aplicáveis;
- contextualizadas;
- atualizadas;
- compatíveis com a legislação;
- incorporadas formalmente.

Normas não deverão ser citadas apenas como símbolo de maturidade.

Seus requisitos deverão produzir controles reais.

---

## 422. Auditoria

A auditoria deverá avaliar:

- inventário;
- classificação;
- políticas;
- acessos;
- criptografia;
- chaves;
- execuções;
- retenção;
- descarte;
- fornecedores;
- restaurações;
- testes;
- ações corretivas.

---

## 423. Auditoria técnica

Poderá verificar:

- configurações;
- logs;
- integridade;
- isolamento;
- imutabilidade;
- criptografia;
- capacidade;
- falhas;
- versões.

---

## 424. Auditoria operacional

Poderá verificar:

- papéis;
- procedimentos;
- comunicação;
- escalonamentos;
- tratamento de falhas;
- restaurações;
- passagens de responsabilidade.

---

## 425. Auditoria institucional

Poderá verificar:

- legitimidade;
- finalidade;
- direitos;
- autoridade;
- prestação de contas;
- contratos;
- memória;
- continuidade.

---

## 426. Evidências de auditoria

As evidências deverão possuir:

- origem;
- integridade;
- período;
- responsável;
- escopo;
- proteção;
- retenção.

A auditoria não deverá depender exclusivamente de registros controlados por quem está sendo auditado.

---

## 427. Não conformidade

Toda não conformidade deverá possuir:

- descrição;
- requisito;
- impacto;
- criticidade;
- responsável;
- ação;
- prazo;
- evidência de correção;
- validação.

---

## 428. Exceção de conformidade

Exceções deverão ser:

- fundamentadas;
- temporárias;
- proporcionais;
- aprovadas;
- acompanhadas;
- encerradas.

Não deverão ser utilizadas para transformar incapacidade permanente em situação aceita.

---

## 429. Revisão de acesso

Acesso deverá ser revisado:

- periodicamente;
- após mudança de função;
- após desligamento;
- após incidente;
- após restauração crítica;
- após encerramento de parceria;
- após alteração de sensibilidade.

---

## 430. Desligamento de pessoas

O processo deverá revogar:

- contas;
- tokens;
- chaves;
- acessos;
- dispositivos;
- permissões;
- cópias locais;
- autoridade emergencial.

Também deverá preservar:

- continuidade;
- registros;
- responsabilidades;
- transferência de conhecimento.

---

## 431. Mudança de função

A mudança deverá atualizar acessos e responsabilidades.

Permissões históricas não deverão permanecer por acúmulo.

---

## 432. Sucessão institucional

A recuperação deverá sobreviver à mudança de:

- direção;
- equipe;
- fornecedor;
- organização;
- curador;
- tecnologia;
- território.

Conhecimento, chaves e autoridades deverão possuir sucessão governada.

---

## 433. Ciclo de vida da política

Toda política deverá passar por:

1. proposta;
2. análise;
3. aprovação;
4. implementação;
5. monitoramento;
6. teste;
7. revisão;
8. atualização;
9. substituição;
10. encerramento.

---

## 434. Encerramento de política

Antes de encerrar uma política, deverão ser avaliados:

- objetos;
- cópias existentes;
- retenções;
- obrigações;
- migração;
- dependências;
- descarte;
- evidências.

---

## 435. Preservação de políticas anteriores

Versões antigas deverão ser preservadas quando necessárias para compreender:

- decisões;
- obrigações;
- ocorrências;
- cópias;
- restaurações;
- auditorias.

---

## 436. Segurança física

Mídias, instalações e equipamentos deverão possuir proteção contra:

- acesso;
- furto;
- incêndio;
- água;
- temperatura;
- umidade;
- impacto;
- campos inadequados;
- transporte indevido;
- deterioração.

---

## 437. Transporte de mídia

O transporte deverá possuir:

- autorização;
- embalagem;
- criptografia;
- identificação;
- rastreamento;
- custódia;
- confirmação;
- procedimento de perda.

---

## 438. Perda de mídia

A perda deverá gerar:

- incidente;
- avaliação de conteúdo;
- verificação de criptografia;
- revogação quando possível;
- comunicação;
- investigação;
- revisão.

---

## 439. Acesso físico

O acesso deverá ser limitado, registrado e revisado.

A presença física diante da mídia não deverá conceder autoridade sobre seu conteúdo.

---

## 440. Continuidade energética

Destinos locais poderão exigir:

- proteção elétrica;
- aterramento;
- UPS;
- gerador;
- monitoramento;
- desligamento seguro;
- manutenção.

A proteção física deverá seguir normas técnicas e requisitos de segurança aplicáveis.

---

## 441. Condições ambientais

A mídia deverá ser armazenada conforme requisitos de:

- temperatura;
- umidade;
- poeira;
- ventilação;
- vibração;
- campo magnético;
- vida útil.

---

## 442. Segurança de restauração

Durante uma restauração, cópias poderão ser:

- descriptografadas;
- extraídas;
- duplicadas;
- processadas;
- expostas em ambiente temporário.

Esses ambientes deverão receber proteção equivalente ou superior à sensibilidade do conteúdo.

---

## 443. Limpeza pós-restauração

Após o procedimento, deverão ser eliminados ou protegidos:

- arquivos temporários;
- cópias intermediárias;
- chaves;
- credenciais;
- exportações;
- logs sensíveis;
- ambientes;
- acessos.

---

## 444. Antipadrões de segurança e governança

A UNO deverá evitar:

### 444.1 Administrador universal

Uma identidade controla origem, backup, chaves e auditoria.

### 444.2 Conta humana em automação

A rastreabilidade e a continuidade ficam comprometidas.

### 444.3 Criptografia sem sucessão

A saída de uma pessoa elimina a recuperação.

### 444.4 Imutabilidade sem política de eliminação

Direitos e obrigações entram em conflito permanente.

### 444.5 Retenção indiscriminada

Dados são mantidos sem finalidade.

### 444.6 Backup usado como base paralela

Cópias passam a servir finalidades não autorizadas.

### 444.7 Dados reais em teste sem proteção

A restauração cria exposição.

### 444.8 Confiança integral no fornecedor

A instituição perde autonomia e portabilidade.

### 444.9 Auditoria sem independência

O mesmo responsável altera e valida seus registros.

### 444.10 Encerramento sem descarte confirmado

Cópias permanecem com antigos parceiros ou fornecedores.

---

## 445. Invariantes de segurança e governança

Toda proteção deverá preservar:

1. finalidade;
2. legitimidade;
3. menor privilégio;
4. segregação;
5. confidencialidade;
6. integridade;
7. disponibilidade;
8. rastreabilidade;
9. temporalidade;
10. soberania;
11. conformidade;
12. prestação de contas.

---

## 446. Garantias do Lote 5

A Plataforma UNO deverá garantir que:

- toda cópia possua autoridade e custódia definidas;
- todo acesso respeite menor privilégio;
- todo privilégio extraordinário expire;
- toda conta emergencial seja protegida e testada;
- toda automação possua identidade própria;
- toda cópia sensível permaneça criptografada;
- toda chave crítica possua recuperação e sucessão;
- toda exclusão crítica exija controle;
- toda retenção possua fundamento;
- todo direito de eliminação possua procedimento;
- todo descarte produza evidência;
- toda localização e jurisdição sejam conhecidas;
- todo fornecedor crítico possua estratégia de saída;
- toda parceria encerrada trate as cópias remanescentes;
- toda não conformidade gere ação;
- nenhuma recuperação dependa de autoridade ilimitada ou de uma única pessoa.

---

## 447. Princípios consolidados

A Engenharia Oficial reconhece que:

1. backups poderão ser mais sensíveis do que suas origens;
2. autoridade sobre produção não significa autoridade irrestrita sobre cópias;
3. menor privilégio deverá alcançar pessoas, sistemas e agentes;
4. acessos emergenciais precisam existir sem se tornarem rotineiros;
5. administradores também fazem parte do modelo de ameaça;
6. criptografia depende da governança das chaves;
7. imutabilidade preserva estado, não garante verdade;
8. retenção e eliminação deverão ser reconciliadas;
9. a privacidade deverá existir desde a política;
10. restaurações temporariamente ampliam exposição;
11. soberania exige conhecimento sobre localização e custódia;
12. fornecedores não absorvem integralmente a responsabilidade da UNO;
13. estratégia de saída é parte da recuperabilidade;
14. auditoria exige evidências independentes;
15. sucessão de pessoas e organizações deverá preservar a capacidade de recuperação;
16. segurança não poderá tornar a cópia inacessível quando realmente necessária.

---

## 448. Transição para o próximo lote

A segurança, a governança e o ciclo de vida estabelecidos neste lote protegem as fontes de recuperação contra perda, abuso, exposição, manipulação e dependência indevida.

O próximo lote concluirá o arquivo estabelecendo:

- testes de restauração;
- exercícios de reconstrução;
- evidências de recuperabilidade;
- indicadores;
- falhas e desvios;
- maturidade;
- aprendizado;
- revisão contínua;
- garantias permanentes;
- encerramento oficial do arquivo 019.

A existência da cópia cria uma possibilidade.

Somente o teste, a evidência e a aprendizagem poderão transformar essa possibilidade em recuperabilidade institucional comprovada.

---

# Lote 6 — Testes, Evidências, Maturidade e Encerramento

## 449. Recuperabilidade não presumida

A existência de cópias de segurança não constitui, por si só, prova de recuperabilidade.

A Plataforma UNO somente poderá considerar um objeto recuperável quando houver evidências suficientes de que:

- a cópia existe;
- a cópia pode ser localizada;
- a cópia pode ser acessada por autoridade legítima;
- seu conteúdo permanece íntegro;
- as chaves, credenciais, catálogos e dependências necessários estão disponíveis;
- o procedimento de restauração é conhecido;
- a restauração pode ser executada dentro das condições requeridas;
- o objeto restaurado pode ser validado;
- o estado recuperado pode ser reintegrado à operação;
- os riscos residuais são conhecidos e aceitos pela autoridade competente.

A recuperabilidade será tratada como capacidade operacional demonstrável, e não como expectativa baseada apenas na execução bem-sucedida de rotinas de backup.

## 450. O teste como prova institucional

Todo mecanismo de backup deverá ser acompanhado por um regime proporcional de testes.

O teste de recuperação terá como finalidade produzir evidência verificável de que a organização consegue transformar cópias preservadas em estados utilizáveis, coerentes, seguros e operacionalmente reintegráveis.

Testar não significa apenas confirmar que um arquivo pode ser aberto.

O teste deverá avaliar, conforme o escopo:

- existência;
- disponibilidade;
- autenticidade;
- integridade;
- consistência;
- completude;
- compatibilidade;
- restaurabilidade;
- reconstruibilidade;
- reconciliabilidade;
- segurança;
- desempenho;
- reintegração;
- continuidade de significado.

## 451. Princípio da prova proporcional

A profundidade, a frequência e o rigor dos testes deverão ser proporcionais:

- à criticidade do objeto;
- ao impacto de sua perda;
- à sensibilidade da informação;
- ao RPO requerido;
- ao RTO requerido;
- à complexidade das dependências;
- à frequência de mudança;
- ao histórico de falhas;
- ao grau de automação;
- ao tempo de retenção;
- ao risco tecnológico;
- às obrigações legais, regulatórias, contratuais e institucionais.

Objetos essenciais à vida, à dignidade, à segurança, à legitimidade, à continuidade institucional ou à prestação de serviços críticos exigirão comprovação mais rigorosa do que objetos de baixo impacto.

## 452. Programa permanente de testes

A Plataforma UNO deverá manter um programa permanente de testes de backup, restauração e recuperabilidade.

Esse programa deverá definir:

- objetos abrangidos;
- responsáveis;
- ambientes utilizados;
- tipos de teste;
- periodicidades;
- critérios de seleção;
- critérios de sucesso;
- critérios de interrupção;
- evidências obrigatórias;
- tratamento de desvios;
- prazos de correção;
- autoridades de aprovação;
- regras de repetição;
- forma de preservação dos resultados.

O programa deverá ser revisto quando houver mudanças relevantes na arquitetura, na criticidade, nas dependências, nas tecnologias, nas obrigações ou no contexto operacional.

## 453. Modalidades de teste

Os testes poderão compreender, de forma isolada ou combinada:

- verificação automatizada da execução do backup;
- verificação de integridade;
- leitura amostral;
- restauração granular;
- restauração de conjunto;
- restauração de estado completo;
- reconstrução de ambiente;
- recuperação pontual no tempo;
- recuperação de transações;
- reconstrução a partir de múltiplas fontes;
- recuperação sem acesso ao ambiente original;
- recuperação com perda simulada de componentes;
- validação de cópia isolada;
- teste de mídia;
- teste de chaves e credenciais;
- teste de catálogo;
- teste de documentação;
- exercício assistido;
- exercício integral de recuperação.

Nenhuma modalidade isolada será considerada universalmente suficiente.

## 454. Verificação da execução

A primeira camada de teste deverá confirmar se a rotina planejada foi efetivamente executada.

A verificação deverá distinguir:

- tarefa iniciada;
- tarefa parcialmente executada;
- tarefa concluída;
- dados transferidos;
- dados confirmados;
- catálogo atualizado;
- integridade verificada;
- retenção aplicada;
- cópia replicada;
- cópia isolada;
- restauração testada.

Uma mensagem de “sucesso” emitida pela ferramenta não poderá substituir a confirmação do resultado material produzido.

## 455. Verificação de integridade

A integridade deverá ser verificada por mecanismos compatíveis com o tipo de objeto preservado.

Poderão ser empregados:

- hashes;
- checksums;
- assinaturas;
- comparação de manifestos;
- validação de blocos;
- verificação de estrutura;
- validação de formato;
- testes de leitura;
- controles de consistência;
- confirmação de cadeia de custódia;
- comparação com metadados de origem.

A verificação deverá detectar corrupção silenciosa, truncamento, substituição indevida, alteração não autorizada e inconsistências entre conteúdo e catálogo.

## 456. Restauração granular

A restauração granular deverá comprovar a capacidade de recuperar unidades específicas sem exigir, quando desnecessário, a restauração integral do conjunto.

Poderão ser objetos granulares:

- arquivo;
- registro;
- documento;
- configuração;
- segredo;
- mensagem;
- evento;
- versão;
- objeto de armazenamento;
- tabela;
- índice;
- conta;
- permissão;
- componente;
- artefato de código;
- modelo;
- evidência;
- item de memória institucional.

A granularidade disponível deverá corresponder às necessidades reais de recuperação.

## 457. Restauração de conjunto coerente

Quando objetos possuírem relações de consistência entre si, o teste deverá verificar a restauração do conjunto coerente.

Não será suficiente recuperar individualmente componentes que, reunidos, produzam estado contraditório ou semanticamente inválido.

O teste deverá observar:

- versões compatíveis;
- referências válidas;
- ordem de aplicação;
- transações relacionadas;
- identidades correspondentes;
- permissões coerentes;
- dependências presentes;
- configurações alinhadas;
- vínculos preservados;
- significado institucional mantido.

## 458. Recuperação pontual no tempo

Quando houver capacidade de recuperação pontual, os testes deverão confirmar se a organização consegue reconstruir o estado correspondente a um instante autorizado.

Deverão ser avaliados:

- precisão temporal;
- disponibilidade dos registros necessários;
- continuidade dos logs;
- tratamento de diferenças de relógio;
- ordem dos eventos;
- consistência transacional;
- limite real alcançável;
- impacto das operações posteriores;
- riscos de reexecução;
- reconciliação com efeitos externos.

O ponto selecionado deverá ser rastreável e justificado.

## 459. Teste de reconstrução completa

Periodicamente, objetos e serviços críticos deverão ser submetidos a testes de reconstrução completa.

Esse teste deverá partir, tanto quanto possível, de condições que não dependam do estado operacional original.

A reconstrução poderá abranger:

- infraestrutura;
- redes;
- identidades;
- políticas;
- configurações;
- aplicações;
- bancos de dados;
- arquivos;
- filas;
- integrações;
- certificados;
- segredos;
- observabilidade;
- automações;
- documentação;
- conhecimento necessário à operação.

O objetivo será demonstrar que a capacidade de recuperação não está ocultamente dependente do próprio ambiente que se pretende recuperar.

## 460. Ambiente isolado de teste

Testes de restauração deverão, sempre que possível, ocorrer em ambiente isolado.

O isolamento deverá impedir:

- sobrescrita do estado produtivo;
- envio indevido de mensagens;
- execução de pagamentos;
- acionamento de integrações reais;
- exposição de dados;
- duplicação de efeitos;
- conflito de identidades;
- contaminação por código malicioso;
- alteração de evidências;
- impacto sobre usuários e organizações.

O ambiente deverá ser representativo o bastante para produzir evidências confiáveis, sem criar riscos desnecessários para a operação real.

## 461. Sinalização de simulação

Todo exercício que utilize cenários fictícios, alertas artificiais, dados simulados ou interrupções controladas deverá ser identificado de forma inequívoca como:

**SIMULAÇÃO**

Essa marcação deverá aparecer:

- nas comunicações;
- nos painéis;
- nos registros;
- nos alertas;
- nos canais operacionais;
- nas ordens de execução;
- nas evidências produzidas.

A sinalização deverá evitar que pessoas, agentes ou sistemas interpretem o exercício como ocorrência real.

## 462. Separação entre exercício e incidente real

Durante um teste, a organização deverá manter capacidade de reconhecer e tratar ocorrências reais.

Se um incidente verdadeiro surgir durante uma simulação:

- o fato deverá ser declarado;
- a prioridade deverá ser reavaliada;
- as equipes deverão ser informadas;
- o exercício poderá ser suspenso;
- os recursos necessários deverão ser liberados;
- os registros reais deverão permanecer distinguíveis dos registros simulados.

A simulação jamais deverá reduzir a capacidade institucional de responder à realidade.

## 463. Teste sem catálogo principal

A recuperabilidade deverá ser testada, quando proporcional ao risco, em cenário no qual o catálogo principal de backup esteja indisponível.

O teste deverá avaliar se existem:

- catálogos secundários;
- manifestos preservados;
- índices reconstruíveis;
- identificadores independentes;
- documentação suficiente;
- mecanismos de descoberta;
- procedimentos de importação;
- autoridades capazes de reconhecer os objetos.

Um backup que somente pode ser localizado por meio de um catálogo vulnerável à mesma falha não possui independência suficiente.

## 464. Teste de credenciais e chaves

A organização deverá comprovar que as credenciais, certificados e chaves necessários à recuperação permanecem disponíveis e utilizáveis.

O teste deverá observar:

- custódia;
- validade;
- rotação;
- expiração;
- revogação;
- redundância;
- acesso emergencial;
- segregação de funções;
- recuperação de segredos;
- registro de uso;
- sucessão de responsáveis.

A proteção criptográfica não poderá transformar-se em impedimento absoluto à recuperação legítima.

## 465. Teste de independência administrativa

Os testes deverão avaliar se a cópia continua recuperável diante do comprometimento ou indisponibilidade do domínio administrativo primário.

Deverão ser considerados cenários como:

- perda de conta administrativa;
- comprometimento de provedor de identidade;
- indisponibilidade de diretório;
- bloqueio de assinatura;
- erro de permissão;
- exclusão de organização;
- perda de acesso ao provedor;
- indisponibilidade de pessoal-chave.

Contas emergenciais deverão permanecer protegidas, controladas, monitoradas e periodicamente verificadas.

## 466. Teste de cópia imutável ou isolada

Quando a arquitetura declarar a existência de cópias imutáveis, offline ou logicamente isoladas, o teste deverá demonstrar essa propriedade.

A evidência deverá indicar:

- quem pode ler;
- quem pode gravar;
- quem pode excluir;
- quando a exclusão se torna possível;
- quais credenciais são necessárias;
- se a origem pode alterar a cópia;
- se malware no ambiente principal pode alcançá-la;
- como ocorre o retorno controlado ao ambiente de recuperação.

A imutabilidade declarada, mas não comprovada, não deverá ser contabilizada como garantia.

## 467. Teste de retenção

O teste de retenção deverá confirmar:

- preservação pelo período definido;
- expiração no momento autorizado;
- proteção contra eliminação antecipada;
- tratamento de retenções legais;
- coerência entre gerações;
- disponibilidade de versões históricas;
- destruição segura após o término aplicável;
- atualização dos catálogos.

Reter indefinidamente não é sinônimo de preservar corretamente.

## 468. Teste de mídia e armazenamento

Mídias e repositórios deverão ser avaliados quanto a:

- legibilidade;
- degradação;
- compatibilidade;
- capacidade;
- erros de leitura;
- falhas de setor;
- obsolescência;
- disponibilidade de equipamentos;
- condições ambientais;
- transporte;
- cadeia de custódia;
- descarte seguro.

Quando necessário, dados deverão ser migrados para novas mídias sem perda de integridade, proveniência ou rastreabilidade.

## 469. Teste de compatibilidade tecnológica

A recuperação deverá considerar se os artefatos preservados continuam compatíveis com as tecnologias disponíveis.

O teste deverá avaliar:

- versões de aplicação;
- formatos de arquivo;
- esquemas de dados;
- sistemas operacionais;
- bibliotecas;
- drivers;
- protocolos;
- APIs;
- máquinas virtuais;
- contêineres;
- imagens;
- licenças;
- dependências descontinuadas.

Quando a restauração depender de tecnologia obsoleta, a organização deverá manter estratégia de migração, emulação, conversão ou preservação do ambiente necessário.

## 470. Teste de conhecimento operacional

A capacidade de recuperação não poderá depender exclusivamente da memória de uma única pessoa.

Os testes deverão verificar se:

- os procedimentos são compreensíveis;
- os responsáveis sabem localizá-los;
- as instruções correspondem à realidade;
- as permissões estão disponíveis;
- os contatos estão atualizados;
- os critérios de decisão são conhecidos;
- pessoas substitutas conseguem executar o processo;
- dúvidas e exceções possuem caminhos de escalonamento.

Conhecimento não documentado deverá ser reconhecido como dependência operacional e risco de continuidade.

## 471. Teste por sucessores

Periodicamente, a restauração deverá ser executada ou acompanhada por pessoas diferentes das que projetaram ou operam rotineiramente o mecanismo.

Esse teste deverá avaliar:

- transferibilidade do conhecimento;
- clareza documental;
- ausência de dependências pessoais;
- suficiência dos registros;
- atualização dos procedimentos;
- capacidade de sucessão;
- autonomia responsável.

A recuperação somente será institucional quando puder atravessar mudanças de pessoas e gerações.

## 472. Teste de fornecedores e serviços externos

Quando a recuperação depender de fornecedor, serviço em nuvem, plataforma SaaS ou organização parceira, deverão ser testados:

- canais de suporte;
- tempos de atendimento;
- métodos de exportação;
- formatos entregues;
- permissões;
- responsabilidades;
- limites contratuais;
- portabilidade;
- recuperação de conta;
- disponibilidade regional;
- saída do serviço;
- reconstrução fora do fornecedor, quando aplicável.

A simples declaração contratual não substituirá a demonstração técnica e operacional da capacidade de recuperação.

## 473. Teste federado

Em ambientes multi-organização, os testes deverão respeitar:

- autonomia;
- fronteiras de dados;
- soberania;
- responsabilidades;
- consentimentos;
- contratos;
- políticas locais;
- obrigações compartilhadas;
- critérios de coordenação.

A recuperação de uma organização não poderá expor, sobrescrever ou incorporar indevidamente informações pertencentes a outra.

## 474. Teste de efeitos externos

A restauração de estado interno não garante, por si só, a reversão de efeitos externos já produzidos.

Os testes deverão considerar:

- mensagens enviadas;
- pagamentos realizados;
- ordens emitidas;
- registros compartilhados;
- notificações;
- decisões comunicadas;
- recursos mobilizados;
- alterações físicas;
- compromissos assumidos.

Esses efeitos deverão ser reconciliados por procedimentos próprios, sem pressupor que a restauração interna os apagará.

## 475. Limite em relação à continuidade ampla

Este arquivo estabelece a capacidade de preservar, restaurar, reconstruir e validar objetos e estados necessários à operação.

Os planos institucionais amplos de continuidade, os cenários de desastre, os locais alternativos, a recuperação coordenada de serviços e a retomada da organização como conjunto serão aprofundados em:

`020-continuidade-operacional-e-disaster-recovery.md`

Os testes previstos neste arquivo deverão fornecer evidências e capacidades para esse modelo posterior, sem substituir sua disciplina específica.

## 476. Plano de teste

Todo teste relevante deverá possuir plano identificável contendo:

- objetivo;
- escopo;
- objetos;
- cenário;
- premissas;
- participantes;
- autoridades;
- ambiente;
- dados utilizados;
- controles de segurança;
- etapas;
- critérios de sucesso;
- critérios de suspensão;
- evidências esperadas;
- duração prevista;
- riscos;
- plano de retorno;
- forma de encerramento.

O plano deverá ser proporcional à criticidade e à complexidade do exercício.

## 477. Critérios de sucesso

Os critérios de sucesso deverão ser definidos antes da execução.

Poderão incluir:

- cópia localizada;
- autorização obtida;
- integridade confirmada;
- restauração concluída;
- dependências reconstruídas;
- aplicação iniciada;
- dados acessíveis;
- consistência validada;
- RPO atendido;
- RTO atendido;
- segurança preservada;
- efeitos externos controlados;
- usuários autorizados capazes de operar;
- evidências completas;
- reintegração aprovada.

Critérios vagos deverão ser substituídos por condições observáveis.

## 478. Critérios de suspensão

O teste deverá ser suspenso ou reavaliado quando:

- produzir risco não previsto;
- ameaçar a operação real;
- expor informação sensível;
- alcançar sistema não autorizado;
- gerar efeitos externos indevidos;
- ocorrer incidente real prioritário;
- faltar autoridade necessária;
- houver perda de isolamento;
- a integridade das evidências estiver comprometida;
- as condições deixarem de representar o cenário aprovado.

A suspensão responsável não será tratada como falha de coragem, mas como exercício de governança.

## 479. Frequência dos testes

A frequência deverá considerar:

- criticidade;
- volatilidade;
- mudança de arquitetura;
- mudança de fornecedor;
- mudança de responsáveis;
- alterações regulatórias;
- volume de dados;
- histórico de incidentes;
- resultados anteriores;
- obsolescência;
- tempo desde a última comprovação;
- risco emergente.

Mudanças relevantes poderão exigir teste extraordinário, independentemente do calendário regular.

## 480. Seleção de amostras

Quando não for possível testar todos os objetos a cada ciclo, deverá existir seleção amostral baseada em risco.

A amostra deverá variar ao longo do tempo e abranger:

- objetos críticos;
- objetos antigos;
- objetos recentes;
- diferentes tecnologias;
- diferentes regiões;
- diferentes organizações;
- diferentes classes de retenção;
- diferentes tamanhos;
- objetos pouco restaurados;
- mecanismos recentemente alterados.

A amostragem não deverá excluir indefinidamente os objetos de menor visibilidade.

## 481. Evidência mínima do teste

A evidência deverá registrar, conforme aplicável:

- identificador do teste;
- data e horário;
- versão do plano;
- cenário;
- objetos selecionados;
- origem das cópias;
- pontos de recuperação;
- participantes;
- autoridades;
- comandos ou procedimentos;
- logs;
- tempos observados;
- verificações realizadas;
- resultados;
- desvios;
- decisões;
- riscos residuais;
- ações corretivas;
- aprovação;
- encerramento.

A evidência deverá permitir que uma parte competente compreenda o que foi testado e por que o resultado foi aceito.

## 482. Preservação das evidências

As evidências de recuperabilidade deverão ser preservadas de forma:

- íntegra;
- rastreável;
- acessível;
- protegida;
- temporalmente identificada;
- vinculada aos objetos testados;
- vinculada às versões de política;
- compatível com auditoria;
- proporcional à sensibilidade.

A própria evidência deverá possuir proteção contra alteração, supressão indevida e perda de contexto.

## 483. Evidência negativa

Resultados incompletos, falhas, atrasos e inconsistências também deverão ser registrados.

A Plataforma UNO não deverá preservar apenas evidências de sucesso.

A evidência negativa é necessária para:

- revelar fragilidades;
- orientar correções;
- impedir falsa confiança;
- identificar tendências;
- melhorar políticas;
- responsabilizar decisões;
- fortalecer a memória institucional.

Apagar o fracasso do registro significa apagar a oportunidade de aprendizagem.

## 484. Falha de teste

Um teste será considerado falho quando não satisfizer critérios obrigatórios ou quando não puder produzir evidência suficiente de recuperabilidade.

A falha poderá envolver:

- cópia inexistente;
- cópia ilegível;
- corrupção;
- credencial indisponível;
- chave perdida;
- catálogo inconsistente;
- procedimento incorreto;
- dependência ausente;
- incompatibilidade;
- RPO excedido;
- RTO excedido;
- validação inconclusiva;
- reconciliação impossível;
- autoridade indefinida;
- exposição indevida;
- documentação insuficiente.

A falha deverá ser tratada como sinal operacional relevante.

## 485. Gravidade da falha

Falhas deverão ser classificadas de acordo com:

- criticidade do objeto;
- extensão da perda potencial;
- probabilidade de repetição;
- tempo sem proteção;
- existência de alternativas;
- impacto sobre pessoas;
- impacto institucional;
- impacto legal;
- impacto financeiro;
- impacto sobre continuidade;
- exposição de segurança;
- confiança indevidamente atribuída.

A classificação deverá orientar prioridade, escalonamento e prazo de correção.

## 486. Ação imediata após falha

Após falha relevante, deverão ser avaliadas medidas como:

- preservar evidências;
- impedir expiração da última cópia válida;
- criar cópia extraordinária;
- reduzir mudanças no objeto;
- ativar mecanismo alternativo;
- corrigir permissões;
- recuperar chaves;
- atualizar procedimentos;
- comunicar responsáveis;
- elevar o risco;
- limitar operações;
- repetir o teste.

A continuidade de uma operação sem recuperabilidade comprovada deverá ser decisão consciente, registrada e autorizada.

## 487. Plano de ação corretiva

Toda falha material deverá gerar plano de ação contendo:

- problema observado;
- causa conhecida ou hipótese;
- impacto;
- prioridade;
- responsável;
- autoridade;
- ações;
- recursos;
- prazo;
- dependências;
- risco provisório;
- forma de verificação;
- teste de confirmação;
- critério de encerramento.

A conclusão administrativa da tarefa não substituirá o novo teste técnico.

## 488. Análise de causa

A análise deverá buscar causas técnicas, operacionais, cognitivas, organizacionais e institucionais.

Poderão ser investigados:

- desenho inadequado;
- configuração incorreta;
- automação defeituosa;
- documentação desatualizada;
- capacidade insuficiente;
- dependência oculta;
- permissão inadequada;
- treinamento insuficiente;
- governança ausente;
- alerta ignorado;
- contrato incompleto;
- decisão não registrada;
- incentivo inadequado;
- excesso de confiança.

A análise não deverá limitar-se à procura de culpados individuais.

## 489. Repetição obrigatória

Uma ação corretiva somente deverá ser considerada eficaz após verificação compatível com a falha tratada.

Quando a correção afetar a capacidade de recuperação, o teste deverá ser repetido total ou parcialmente.

A repetição deverá demonstrar:

- correção aplicada;
- ausência da falha original;
- ausência de regressão relevante;
- resultado dentro dos critérios;
- evidências suficientes;
- aprovação competente.

## 490. RPO observado

Além do RPO declarado, a organização deverá medir o RPO efetivamente observado.

A medição deverá identificar:

- último ponto recuperável;
- momento da interrupção simulada ou real;
- intervalo de perda;
- transações ausentes;
- objetos divergentes;
- fontes utilizadas;
- exceções;
- limitações.

Diferenças entre RPO requerido e RPO observado deverão ser registradas e tratadas.

## 491. RTO observado

O RTO observado deverá ser medido desde o marco definido no plano até o alcance do estado recuperado e validado.

A medição deverá distinguir, quando aplicável:

- detecção;
- declaração;
- autorização;
- localização da cópia;
- preparação do ambiente;
- transferência;
- restauração;
- reconstrução;
- validação;
- reconciliação;
- liberação;
- reintegração.

Essa decomposição permitirá reconhecer onde o tempo é realmente consumido.

## 492. Tempo técnico e tempo institucional

A Plataforma UNO deverá distinguir:

- tempo de processamento técnico;
- tempo de mobilização;
- tempo de decisão;
- tempo de autorização;
- tempo de comunicação;
- tempo de validação;
- tempo de reconciliação;
- tempo de aceitação institucional.

Uma restauração tecnicamente rápida poderá continuar operacionalmente lenta se suas decisões, autoridades e dependências humanas não estiverem preparadas.

## 493. Indicadores de cobertura

A cobertura poderá ser medida por indicadores como:

- percentual de objetos inventariados;
- percentual com política definida;
- percentual com backup ativo;
- percentual com cópia independente;
- percentual com retenção adequada;
- percentual testado no período;
- percentual com restauração bem-sucedida;
- percentual com RPO atendido;
- percentual com RTO atendido;
- percentual com evidências completas.

Indicadores agregados deverão permitir aprofundamento até os objetos e organizações correspondentes.

## 494. Indicadores de qualidade

A qualidade poderá ser acompanhada por:

- taxa de falha de backup;
- taxa de falha de restauração;
- incidência de corrupção;
- tempo médio de detecção;
- tempo médio de correção;
- idade da última restauração testada;
- quantidade de exceções;
- reincidência;
- dependências desconhecidas;
- documentação desatualizada;
- resultados inconclusivos;
- desvios de RPO e RTO.

Nenhum indicador deverá ser utilizado isoladamente para representar toda a recuperabilidade.

## 495. Indicadores sem mascaramento

Médias e percentuais gerais não deverão ocultar objetos críticos sem proteção.

Um alto índice global de sucesso poderá coexistir com falha grave em pequena quantidade de objetos essenciais.

Painéis e relatórios deverão permitir visualizar:

- criticidade;
- distribuição;
- extremos;
- exceções;
- objetos não testados;
- riscos vencidos;
- falhas recorrentes;
- tempo sem comprovação.

## 496. Confiabilidade da medição

Os indicadores deverão possuir:

- definição;
- fonte;
- periodicidade;
- responsável;
- método de cálculo;
- unidade;
- limitações;
- contexto;
- histórico;
- rastreabilidade.

Métricas produzidas pela mesma ferramenta cuja falha está sendo avaliada deverão, quando necessário, ser corroboradas por fonte independente.

## 497. Alertas de recuperabilidade

A Plataforma UNO deverá produzir alertas proporcionais para situações como:

- backup não executado;
- janela excedida;
- cópia incompleta;
- corrupção detectada;
- retenção violada;
- repositório inacessível;
- capacidade insuficiente;
- chave próxima da expiração;
- credencial inválida;
- teste vencido;
- RPO não atendido;
- RTO não atendido;
- objeto crítico sem cobertura;
- falha repetida.

Alertas deverão possuir responsável, prioridade, prazo e condição de encerramento.

## 498. Painel de recuperabilidade

O painel operacional deverá apresentar uma visão compreensível da capacidade de recuperação.

Poderá reunir:

- objetos críticos;
- estado dos backups;
- último ponto recuperável;
- idade da última cópia;
- última restauração testada;
- RPO requerido e observado;
- RTO requerido e observado;
- falhas abertas;
- riscos aceitos;
- ações corretivas;
- cópias isoladas;
- retenções;
- dependências;
- tendência de maturidade.

O painel deverá apoiar decisão, e não apenas exposição estética de dados.

## 499. Transparência proporcional

Informações sobre recuperabilidade deverão ser transparentes às autoridades, responsáveis e partes legítimas, respeitando:

- necessidade;
- sigilo;
- privacidade;
- segurança;
- segregação;
- contratos;
- soberania;
- risco de exposição.

Transparência não significa publicar chaves, localizações sensíveis ou detalhes que facilitem ataques.

## 500. Prestação de contas

Responsáveis pela proteção e recuperação deverão prestar contas sobre:

- cobertura;
- falhas;
- riscos;
- testes;
- resultados;
- exceções;
- recursos;
- decisões;
- atrasos;
- melhorias;
- limitações conhecidas.

A prestação de contas deverá distinguir incapacidade técnica, falta de recurso, decisão de risco e descumprimento de responsabilidade.

## 501. Revisão independente

Objetos de alta criticidade poderão exigir revisão por parte distinta daquela que:

- projetou;
- implementou;
- executa;
- monitora;
- aprova rotineiramente.

A revisão independente deverá avaliar desenho, evidências, resultados, riscos, conflitos de interesse e aderência às normas aplicáveis.

## 502. Auditoria

A auditoria de recuperabilidade poderá verificar:

- inventário;
- classificação;
- políticas;
- cobertura;
- registros de execução;
- integridade;
- retenção;
- acesso;
- testes;
- RPO;
- RTO;
- evidências;
- falhas;
- ações corretivas;
- exceções;
- contratos;
- conformidade.

A auditoria não deverá limitar-se à presença documental; deverá avaliar correspondência entre declaração e capacidade real.

## 503. Exercícios não anunciados

Quando legítimo, seguro e autorizado, poderão ser realizados testes não anunciados previamente a todos os participantes.

Esses testes deverão:

- possuir autoridade formal;
- preservar a segurança;
- evitar danos reais;
- respeitar direitos;
- limitar o conhecimento apenas ao necessário;
- ter critério de interrupção;
- ser declarados como simulação no momento adequado;
- preservar evidências;
- permitir revisão posterior.

O objetivo será avaliar prontidão real, não constranger pessoas.

## 504. Aprendizagem após o teste

Todo teste relevante deverá gerar revisão posterior.

A revisão deverá perguntar:

- o que era esperado;
- o que ocorreu;
- o que funcionou;
- o que falhou;
- o que surpreendeu;
- quais dependências apareceram;
- quais decisões demoraram;
- quais informações faltaram;
- quais riscos foram revelados;
- o que deverá mudar;
- o que deverá ser preservado.

O aprendizado deverá alcançar políticas, arquitetura, procedimentos, treinamento e governança.

## 505. Memória dos exercícios

Resultados e aprendizados deverão integrar a memória operacional e institucional.

Essa memória deverá permitir:

- comparação entre ciclos;
- reconhecimento de reincidências;
- avaliação da evolução;
- transferência de conhecimento;
- preparação de sucessores;
- revisão de decisões;
- reconstrução histórica;
- melhoria da Engenharia Oficial.

O registro deverá preservar contexto suficiente para que gerações futuras compreendam por que determinada prática foi adotada.

## 506. Aprendizagem sem apagamento

A correção de uma fragilidade não deverá apagar o registro de sua existência.

A Plataforma UNO deverá preservar:

- estado anterior;
- falha;
- análise;
- decisão;
- correção;
- teste posterior;
- resultado;
- aprendizado.

Evoluir não significa produzir amnésia institucional.

## 507. Treinamento

Pessoas com responsabilidades de recuperação deverão receber treinamento proporcional às suas funções.

O treinamento deverá abranger:

- conceitos;
- ferramentas;
- procedimentos;
- segurança;
- autoridade;
- comunicação;
- escalonamento;
- validação;
- reconciliação;
- evidências;
- limites;
- tratamento de falhas.

O treinamento deverá ser atualizado quando houver mudanças relevantes.

## 508. Capacitação de agentes artificiais

Agentes artificiais que participem de backup ou recuperação deverão ser avaliados quanto a:

- escopo;
- permissões;
- confiabilidade;
- interpretação;
- rastreabilidade;
- reversibilidade;
- limites;
- supervisão;
- capacidade de explicar ações;
- proteção contra instruções indevidas;
- comportamento diante de incerteza.

O agente deverá interromper ou escalar quando a ação exceder sua autoridade ou quando as condições necessárias não puderem ser comprovadas.

## 509. Automação dos testes

Testes poderão ser automatizados para ampliar frequência, cobertura e consistência.

A automação poderá:

- selecionar amostras;
- criar ambientes isolados;
- restaurar objetos;
- validar integridade;
- medir tempos;
- comparar estados;
- registrar evidências;
- gerar alertas;
- abrir ações corretivas;
- atualizar indicadores.

A automação não eliminará validações humanas, semânticas, institucionais ou legais quando elas forem necessárias.

## 510. Limites da validação automática

Um teste automatizado pode confirmar que:

- dados foram lidos;
- estruturas são válidas;
- serviços iniciaram;
- consultas responderam;
- hashes coincidem;
- tempos foram atendidos.

Contudo, poderá não confirmar sozinho:

- significado correto;
- legitimidade;
- suficiência para a missão;
- coerência institucional;
- adequação legal;
- impacto humano;
- aceitabilidade do risco;
- validade de decisões reconstruídas.

Esses aspectos exigirão julgamento competente.

## 511. Maturidade de recuperabilidade

A maturidade deverá representar a capacidade real da organização de preservar e recuperar seus objetos de forma consciente, repetível, comprovada e evolutiva.

Ela não deverá ser medida somente pela quantidade de ferramentas adquiridas ou pelo volume de dados armazenados.

## 512. Nível 0 — inexistente

No nível inexistente:

- não há inventário confiável;
- backups são ausentes ou casuais;
- responsabilidades são desconhecidas;
- não há critérios de retenção;
- restaurações não são testadas;
- perdas são descobertas apenas quando ocorre necessidade;
- a recuperação depende de improvisação.

Esse nível representa incapacidade institucional de afirmar recuperabilidade.

## 513. Nível 1 — reativo

No nível reativo:

- alguns objetos possuem cópias;
- procedimentos dependem de pessoas específicas;
- testes são ocasionais;
- evidências são incompletas;
- RPO e RTO não são medidos consistentemente;
- falhas provocam respostas pontuais;
- a cobertura permanece fragmentada.

Há capacidade parcial, porém sem garantia sistêmica.

## 514. Nível 2 — definido

No nível definido:

- objetos relevantes estão inventariados;
- políticas estão documentadas;
- responsabilidades estão atribuídas;
- retenções são estabelecidas;
- testes possuem calendário;
- resultados são registrados;
- falhas geram correções;
- RPO e RTO começam a ser observados.

A organização passa a operar com método comum.

## 515. Nível 3 — gerenciado

No nível gerenciado:

- cobertura e qualidade são monitoradas;
- testes são proporcionais ao risco;
- cópias independentes são verificadas;
- restaurações completas são exercitadas;
- métricas orientam decisões;
- fornecedores são avaliados;
- evidências são auditáveis;
- desvios são escalonados;
- sucessores são preparados.

A recuperabilidade torna-se capacidade operacional governada.

## 516. Nível 4 — adaptativo

No nível adaptativo:

- mudanças de contexto ajustam políticas;
- riscos emergentes alteram testes;
- automações ampliam cobertura;
- falhas produzem aprendizagem sistêmica;
- dependências são continuamente descobertas;
- testes alimentam arquitetura e governança;
- agentes colaboram sob limites;
- a recuperação melhora com a experiência.

A organização adapta sua proteção sem abandonar princípios permanentes.

## 517. Nível 5 — institucional e evolutivo

No nível institucional e evolutivo:

- a recuperabilidade atravessa tecnologias, pessoas e gerações;
- evidências sustentam confiança;
- memória preserva decisões;
- sucessão é exercitada;
- recuperação integra segurança, operação e governança;
- autonomia permanece acompanhada de responsabilidade;
- aprendizado transforma arquitetura;
- valor público orienta prioridades.

Nesse nível, recuperar não é apenas restaurar tecnologia: é preservar a capacidade institucional de continuar servindo.

## 518. Maturidade não linear

Uma organização poderá apresentar diferentes níveis de maturidade para diferentes objetos, domínios ou capacidades.

A avaliação deverá evitar classificações simplistas.

Um serviço poderá possuir backup tecnologicamente avançado e, ao mesmo tempo, apresentar baixa maturidade em:

- governança;
- documentação;
- sucessão;
- segurança;
- reconciliação;
- dependências;
- comprovação;
- aderência legal.

A maturidade deverá ser analisada por dimensões e evidências.

## 519. Plano de evolução

A evolução deverá ser planejada considerando:

- riscos prioritários;
- objetos críticos;
- lacunas de cobertura;
- falhas recorrentes;
- obrigações;
- recursos disponíveis;
- dependências;
- capacidade humana;
- arquitetura futura;
- benefícios esperados.

A evolução deverá buscar redução real de risco, e não apenas aumento de complexidade tecnológica.

## 520. Revisão periódica deste modelo

As disposições deste arquivo deverão ser revisadas quando houver:

- novas ameaças;
- novas tecnologias;
- mudanças legais;
- mudanças regulatórias;
- novas organizações;
- novos tipos de dado;
- alterações arquiteturais;
- incidentes;
- falhas de recuperação;
- aprendizados de testes;
- mudança de propósito ou missão.

A revisão deverá preservar os princípios permanentes e adaptar os mecanismos mutáveis.

## 521. Modelo integrado de recuperabilidade

A capacidade integrada estabelecida por este arquivo compreende:

1. reconhecer os objetos que precisam ser preservados;
2. compreender seu valor, criticidade, sensibilidade e dependências;
3. definir RPO, RTO, consistência, retenção e autoridade;
4. produzir cópias adequadas;
5. proteger cópias, catálogos, chaves e credenciais;
6. manter independência suficiente dos domínios de falha;
7. localizar e selecionar pontos de recuperação legítimos;
8. restaurar ou reconstruir os objetos;
9. validar integridade, coerência, significado e segurança;
10. reconciliar divergências e efeitos externos;
11. reintegrar o estado recuperado;
12. medir resultados;
13. preservar evidências;
14. corrigir fragilidades;
15. aprender e evoluir.

Nenhuma dessas etapas deverá ser presumida como consequência automática das demais.

## 522. Relação entre backup, restauração e recuperabilidade

O backup produz possibilidade.

A restauração transforma possibilidade em estado acessível.

A validação demonstra se esse estado é confiável.

A reconciliação permite sua convivência com a realidade atual.

A reintegração devolve capacidade à operação.

A evidência permite que a instituição confie de forma responsável.

A aprendizagem fortalece futuras recuperações.

## 523. Relação com a configuração operacional

O arquivo:

`014-configuracao-e-estado-operacional.md`

estabelece a necessidade de reconhecer o estado e a configuração da operação.

O presente arquivo assegura que configurações, estados e referências necessárias possam ser preservados e recuperados sem perder identidade, proveniência e coerência.

## 524. Relação com capacidade e saturação

O arquivo:

`015-capacidade-desempenho-e-saturacao.md`

estabelece princípios de capacidade e desempenho.

A arquitetura de backup e restauração deverá considerar:

- janelas;
- volumes;
- largura de banda;
- processamento;
- armazenamento;
- concorrência;
- crescimento;
- tempo de recuperação;
- saturação durante emergências.

Uma recuperação incapaz de operar sob a escala necessária não atende plenamente ao seu propósito.

## 525. Relação com disponibilidade e confiabilidade

O arquivo:

`016-disponibilidade-confiabilidade-e-slos.md`

estabelece compromissos de disponibilidade e confiabilidade.

A recuperabilidade atua quando a prevenção, a redundância ou a disponibilidade ordinária não são suficientes para preservar o estado necessário.

Ela constitui uma das bases para restaurar confiança após perda, corrupção ou indisponibilidade.

## 526. Relação com dependências e impacto

O arquivo:

`017-dependencias-operacionais-e-mapa-de-impacto.md`

estabelece a compreensão das relações entre componentes, capacidades, serviços, pessoas e organizações.

Essas dependências deverão orientar:

- ordem de backup;
- grupos de consistência;
- ordem de restauração;
- validações;
- prioridades;
- reconciliações;
- testes integrados.

Não se recupera corretamente aquilo cujas relações não são compreendidas.

## 527. Relação com contingência e operação degradada

O arquivo:

`018-contingencia-recuperacao-e-operacao-degradada.md`

estabelece como a operação preservará propósito e capacidade durante condições adversas.

O presente arquivo fornece os estados, objetos e mecanismos necessários para reconstruir capacidades perdidas e apoiar a saída responsável da degradação.

## 528. Relação com continuidade e disaster recovery

O próximo arquivo:

`020-continuidade-operacional-e-disaster-recovery.md`

deverá ampliar esta capacidade para o plano coordenado de continuidade da organização.

Ele deverá tratar, entre outros temas:

- cenários de desastre;
- continuidade de funções;
- estratégias de recuperação de serviços;
- prioridades institucionais;
- estruturas alternativas;
- coordenação;
- declaração;
- ativação;
- retorno;
- exercícios integrados.

O presente arquivo entrega a esse modelo a disciplina de preservação, restauração, reconstrução, validação e evidência.

## 529. Invariantes permanentes

Permanecem como invariantes desta Engenharia Oficial:

- backup não é sinônimo de recuperabilidade;
- réplica não substitui necessariamente backup;
- sincronização não constitui proteção suficiente contra toda perda;
- cópia sem integridade conhecida não oferece confiança suficiente;
- cópia sem chave recuperável pode tornar-se inutilizável;
- cópia sem catálogo reconstruível pode tornar-se invisível;
- restauração sem validação não demonstra correção;
- recuperação sem autoridade não é legítima;
- recuperação sem segurança pode ampliar o dano;
- recuperação sem contexto pode reconstruir estado incorreto;
- recuperação sem reconciliação pode duplicar efeitos;
- recuperação sem evidência não sustenta confiança institucional;
- falha de teste não deverá ser ocultada;
- correção não deverá apagar a memória da falha;
- automação não elimina responsabilidade;
- urgência não elimina governança;
- retenção não autoriza acumulação ilimitada;
- eliminação não deverá violar preservação obrigatória;
- nenhuma pessoa, ferramenta ou fornecedor deverá tornar-se ponto único de recuperabilidade;
- toda capacidade crítica deverá atravessar mudanças de tecnologia, pessoas e organizações.

## 530. Garantias fundamentais

A arquitetura de backup, restauração e recuperabilidade deverá buscar garantir:

### 530.1. Garantia de existência

Objetos necessários possuem cópias identificáveis e preservadas.

### 530.2. Garantia de integridade

Alterações, corrupções e perdas podem ser detectadas.

### 530.3. Garantia de proveniência

A origem, a versão, o contexto e a cadeia de custódia podem ser reconhecidos.

### 530.4. Garantia de autoridade

A recuperação somente ocorre por decisão legítima e atribuível.

### 530.5. Garantia de independência

Falhas no ambiente principal não eliminam todas as possibilidades de recuperação.

### 530.6. Garantia de segurança

Dados e capacidades permanecem protegidos durante preservação, transporte, restauração e reintegração.

### 530.7. Garantia de coerência

Objetos relacionados podem ser recuperados em estado compatível.

### 530.8. Garantia de verificabilidade

A capacidade declarada pode ser testada e demonstrada.

### 530.9. Garantia de continuidade

Estados e conhecimentos necessários podem atravessar interrupções e mudanças.

### 530.10. Garantia de aprendizagem

Falhas, testes e recuperações fortalecem a capacidade futura.

## 531. Princípios e virtudes aplicadas

A execução deste modelo deverá permanecer alinhada aos princípios e virtudes da Engenharia Oficial:

- **propósito**, para preservar aquilo que permite servir;
- **prudência**, para não transformar recuperação em novo dano;
- **responsabilidade**, para atribuir decisões e consequências;
- **verdade**, para não declarar recuperável aquilo que não foi comprovado;
- **transparência**, para tornar riscos e resultados compreensíveis;
- **discernimento**, para selecionar o ponto e a estratégia adequados;
- **justiça**, para priorizar considerando impactos reais sobre pessoas e organizações;
- **cooperação**, para integrar responsáveis, operadores, curadores, fornecedores e instituições;
- **memória**, para preservar fatos, decisões e aprendizados;
- **continuidade**, para atravessar perdas sem abandonar identidade;
- **humildade**, para reconhecer limites e fragilidades;
- **esperança responsável**, para reconstruir com base em capacidade real.

## 532. Compromisso com leis e normas

A aplicação deste arquivo deverá observar as leis, regulamentações, normas técnicas, requisitos setoriais, contratos e demais obrigações vigentes em cada contexto.

A Plataforma UNO não deverá construir mecanismos de preservação para somente depois buscar enquadrá-los.

As exigências aplicáveis deverão orientar desde o início:

- classificação;
- localização;
- retenção;
- acesso;
- criptografia;
- portabilidade;
- eliminação;
- auditoria;
- privacidade;
- soberania;
- continuidade;
- prestação de contas.

Quando houver conflito, lacuna ou incerteza, a questão deverá ser registrada e submetida à autoridade jurídica, regulatória, técnica ou institucional competente.

## 533. Declaração de recuperabilidade

Nenhum objeto, serviço ou organização deverá receber declaração plena de recuperabilidade sem evidência proporcional.

A declaração deverá indicar:

- escopo;
- data;
- ponto testado;
- condições;
- RPO observado;
- RTO observado;
- limitações;
- riscos residuais;
- validade;
- autoridade responsável.

A declaração deverá expirar ou ser revista quando mudanças relevantes reduzirem a confiança nas evidências anteriores.

## 534. Resultado esperado

Com a aplicação desta Engenharia Oficial, a Plataforma UNO deverá ser capaz de:

- reconhecer o que precisa ser preservado;
- produzir cópias adequadas;
- proteger essas cópias contra os riscos relevantes;
- localizar estados recuperáveis;
- restaurar objetos e conjuntos coerentes;
- reconstruir capacidades;
- validar integridade e significado;
- reconciliar o passado preservado com a realidade presente;
- reintegrar estados com segurança;
- demonstrar o que consegue recuperar;
- reconhecer aquilo que ainda não consegue;
- corrigir fragilidades;
- aprender com cada teste, falha e recuperação;
- atravessar mudanças sem perder sua memória institucional.

## 535. Encerramento

Backup não é o acúmulo de cópias.

É a preservação consciente de possibilidades legítimas de reconstrução.

Restauração não é apenas devolver dados ao armazenamento.

É recuperar estados capazes de voltar a servir com integridade, contexto, segurança e responsabilidade.

Recuperabilidade não é promessa tecnológica.

É capacidade institucional comprovada.

A Plataforma UNO deverá preservar não apenas arquivos, sistemas e registros, mas também:

- identidade;
- propósito;
- memória;
- evidência;
- conhecimento;
- responsabilidade;
- continuidade;
- capacidade de aprender.

Quando a perda ocorrer, a organização não deverá depender apenas da esperança de que exista uma cópia.

Deverá possuir evidências de que consegue reconhecer o que foi preservado, restaurar o que é necessário, validar o que foi reconstruído e continuar servindo sem abandonar seus princípios.

A verdadeira recuperação não devolve somente aquilo que existia.

Ela permite que a organização compreenda o que aconteceu, preserve o que permanece legítimo, corrija o que falhou e retorne mais consciente do que antes.

---

**Fim do arquivo `019-backup-restauracao-e-recuperabilidade.md`.**
