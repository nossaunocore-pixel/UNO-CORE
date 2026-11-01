# Prompt de Execução — Antigravity / UNO CORE

**Identificador:** PROMPT-ANTIGRAVITY-UNO-001  
**Versão:** 0.2.0  
**Data:** 01/11/2026  
**Repositório:** nossaunocore-pixel/UNO-CORE  
**Branch documental de referência:** eou-v09-v17-deepening-2026-10-31  
**PR de revisão:** #2 — manter Draft

## Instrução principal

Trabalhe no repositório existente UNO-CORE seguindo o plano de produto e a sequência de fases já aprovados pelo fundador. A prioridade operacional é continuar a implementação do MVP V7 a partir da branch e do pacote V7 indicados nos documentos de implementação, preservando as etapas posteriores no roadmap existente. Não reabra decisões já aprovadas, não reinicie uma auditoria documental ampla e não transforme recomendações de fases futuras em bloqueios do MVP. Verifique apenas os arquivos, contratos, dependências e riscos diretamente relacionados à tarefa em execução. Diferencie sempre documentação, código, integração, teste, Preview e produção.

### 1. Leitura obrigatória antes de editar

Leia:
- README.md, GOVERNANCE.md e documentação de contribuição;
- docs/EOU/README.md e docs/EOU/CATALOGO.md;
- inventário estrutural V01–V08 e auditoria cruzada V01–V40;
- todos os registros de legado V05/V06 e decisões pendentes V04/V08;
- MEU-UNO-001 versão 0.3.0 e seu adendo;
- RJTTF-UNO-001, RDL-ECON-UNO-001, plano de handoff e checklist;
- especificações técnicas dos volumes relacionados ao módulo que será tocado;
- documentação V7 e relatório de acesso/responsividade/LGPD.

Use a documentação consolidada existente como baseline. Antes de cada alteração, confira o estado atual dos arquivos diretamente envolvidos e faça apenas a verificação técnica necessária para evitar regressões. Se descobrir divergência documental simples, corrija-a preservando decisões existentes. Se surgir uma decisão estrutural realmente não definida e cuja escolha altere identidade, autoridade, segurança, obrigações legais, arquitetura ou escopo aprovado, não invente a resposta: registre o ponto e peça autorização do fundador. Continue normalmente nas tarefas independentes.

### 2. Preservação, escopo aprovado e segurança

- O MVP V7 e a sequência de evolução posterior já foram definidos pelo fundador. Preserve o plano e não acrescente escopo por iniciativa própria.
- A simulação histórica 2020–2022 em `docs/simulacao/` é material analítico contrafactual; não é autorização para ampliar o MVP nem para antecipar módulos posteriores.
- Requisitos e oportunidades que pertençam a fases futuras devem ser registrados no ponto correspondente do roadmap existente, sem bloquear a entrega V7.

- Preserve V6, V7, main e todos os arquivos históricos.
- Não apague, mova, renomeie nem reescreva capítulos legados sem autorização expressa.
- Não faça merge, release, deploy de produção ou promoção de Preview.
- Não aplique migrations em Supabase de produção.
- Não altere configurações externas de Firebase, Supabase, Vercel, Stripe, domínios ou provedores.
- Não revele, copie ou registre segredos, tokens, chaves, dados pessoais ou credenciais.
- Não contrate planos pagos nem execute transações.
- Não use dados reais de usuários para testes; prefira fixtures sintéticas.

### 3. Modelo econômico obrigatório

Respeite a sequência:
1. identificar operação, partes, papéis e território;
2. reconhecer corretamente a receita de cada parte;
3. separar valores de terceiros que apenas transitam pela plataforma;
4. contabilizar custos e obrigações operacionais aplicáveis, incluindo salários, encargos, prestadores, tributos, taxas e demais despesas;
5. apurar o lucro/resultado local por critério contábil consistente;
6. somente então reservar 50% do lucro local para a dimensão territorial;
7. organizar essa dimensão em bairro, cidade, estado e país.

Não aplique 50% ao faturamento bruto. Não considere automaticamente o valor integral de uma venda intermediada como receita da UNO. Os percentuais internos entre bairro/cidade/estado/país não foram definidos. Os outros 50% do lucro também não têm destinação definida. A antiga referência 50/25/10/15 e a referência operacional de 75% não são regras vigentes. A antiga diretriz de piso de 50% para quem gera receita precisa de compatibilização antes de virar fórmula.

Todo cálculo financeiro deve permanecer em modo de simulação com dados fictícios até ratificação e validação profissional. Não habilite pagamento, payout, split, saque, custódia ou distribuição real.

### 4. Enquadramento de trabalho e comércio

Diferencie emprego direto, prestação independente PF, prestação PJ, terceirização, venda direta, marketplace, intermediação, doação, subsídio e parceria. O nome do contrato não supera a realidade operacional. Não presuma vínculo nem autonomia sem análise dos fatos. Cada fluxo deve identificar quem contrata, vende, executa, emprega, recebe, intermedeia e processa o pagamento.

### 5. Fases societárias

A fase atual é construção, inauguração e operação. A comercialização de ações não integra o MVP nem decorre automaticamente da inauguração. Uma eventual etapa societária futura exige decisão expressa, escolha do tipo societário, documentação, avaliação, revisão jurídica e análise regulatória. Não prometer retorno, liquidez, valorização ou participação.

### 6. Implementação

- Priorize módulos pequenos, testáveis e reversíveis.
- Use padrões existentes no projeto.
- Faça validação server-side; UI gates não substituem autorização de API, RLS ou regras de banco.
- Respeite a arquitetura Supabase/Firebase/IDU documentada.
- Adote negação por padrão, menor privilégio, segregação de funções, logs auditáveis e minimização de dados.
- Para integrações externas, criar adapters e interfaces desativadas quando faltar autorização/configuração.
- Não invente mocks que pareçam dados reais; marque demonstrações e fixtures explicitamente.
- Não adicionar dependências pagas sem comparação e aprovação.

### 7. Testes

Executar, conforme escopo:
- lint, typecheck, build e testes existentes;
- testes de acesso positivo/negativo por papel e território;
- testes de autorização server-side, RLS e isolamento;
- idempotência, concorrência, webhooks fora de ordem, falhas parciais e reconciliação;
- cálculos com arredondamento e invariantes, apenas em fixtures;
- estornos, reembolsos, chargebacks e estados pendentes;
- responsividade e acessibilidade;
- privacidade, exposição de dados e logs;
- regressão das rotas V7.

Distinguir falha de código de indisponibilidade/limite do provedor Vercel. Não declarar Preview validado sem deployment READY no commit exato e testes relevantes.

### 8. Saída obrigatória

Entregue:
- branch e commit de origem;
- inventário dos arquivos lidos e alterados;
- diagnóstico por módulo;
- diff revisável;
- testes executados, comandos e resultados;
- riscos, dependências e limitações;
- decisões que não foram tomadas e por quê;
- checklist de validação do fundador;
- instruções para retomar;
- confirmação de que não houve merge, deploy, migration de produção, alteração externa ou transação financeira.

Se uma decisão depender do fundador ou de profissional habilitado, pare nesse ponto, documente a lacuna e continue com tarefas independentes.