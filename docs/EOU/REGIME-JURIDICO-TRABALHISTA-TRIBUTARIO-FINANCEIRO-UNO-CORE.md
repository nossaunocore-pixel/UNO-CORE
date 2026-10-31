# Regime Jurídico, Trabalhista, Tributário e Financeiro — UNO CORE

**Identificador:** RJTTF-UNO-001  
**Versão:** 0.1.0  
**Data:** 31/10/2026  
**Estado:** Especificação técnica preparatória — não constitui parecer jurídico ou contábil  
**Volumes relacionados:** V17, V18, V24, V25, V28, V31, V32, V39 e V40

## 1. Objetivo

Definir controles e perguntas obrigatórias para que cada operação econômica da UNO seja enquadrada antes de ser ativada. O objetivo é permitir diversidade de modelos de negócio sem confundir receita própria, valores de terceiros, emprego, prestação de serviços, intermediação, doações, recursos vinculados e resultados territoriais.

## 2. Princípios de conformidade

- A realidade da operação prevalece sobre o nome atribuído ao contrato.
- Cada participante, fluxo financeiro e obrigação deve ter titularidade identificável.
- A plataforma não presume ser vendedora, empregadora, instituição financeira ou custodiante.
- Tributos e retenções são determinados por natureza da operação, parte responsável, regime tributário e legislação vigente.
- A classificação deve ser validada antes da primeira operação real e revisada quando houver mudança material.
- Recursos de terceiros e recursos próprios devem ser reconciliáveis e segregados conforme orientação contábil, contratual e regulatória.
- Nenhum agente autônomo pode aprovar enquadramento jurídico definitivo ou movimentar recursos sem alçada humana.

## 3. Matriz de enquadramento por operação

| Modelo | Perguntas de classificação | Evidência mínima | Bloqueio |
|---|---|---|---|
| Venda direta pela UNO | UNO compra/revende ou é a fornecedora? Quem emite documento fiscal? | Contrato, cadastro fiscal, nota/documento e política de devolução | Bloquear sem definição do vendedor e obrigações fiscais |
| Marketplace/intermediação | Quem oferta, contrata, executa e recebe? A UNO recebe só comissão ou valor integral? | Termos de uso, contrato de intermediação, fluxo de liquidação | Bloquear se valores de terceiros forem confundidos com receita UNO |
| Emprego direto | Há pessoalidade, habitualidade, onerosidade e subordinação? Quem dirige e controla? | Contrato, registro, folha, eSocial e controles aplicáveis | Bloquear sem estrutura de empregador e folha |
| Prestação PF independente | Qual serviço, autonomia real, frequência e retenções aplicáveis? | Contrato, cadastro, recibo/documento fiscal aplicável | Bloquear sem classificação fiscal e retenções |
| Prestação PJ | Qual entidade presta, regime e documento fiscal? | Contrato, CNPJ, nota fiscal, certidões quando exigidas | Bloquear sem validação do tomador e prestador |
| Terceirização | A empresa contratada dirige seus empregados? A contratante fiscaliza obrigações? | Contrato, documentos de regularidade e gestão de riscos | Bloquear se houver interposição irregular ou falta de controles |
| Doação/contribuição | Quem recebe, finalidade, condição e eventual benefício? | Termo de doação/contribuição, recibo, prestação de contas | Bloquear uso incompatível com destinação |
| Projeto subsidiado | Quem financia, quem executa, elegibilidade e prestação de contas? | Instrumento, orçamento, metas e comprovantes | Bloquear despesa fora do objeto |
| Parceria institucional | Há compartilhamento de receitas, custos, marca, equipe ou riscos? | Instrumento contratual e matriz de responsabilidades | Bloquear sem titularidade e prestação de contas |

## 4. Livro-razão operacional por transação

Cada operação deve manter, conforme aplicável:

- ID único da transação e IDU dos participantes;
- universo, núcleo, instituição, serviço e território;
- datas de contratação, execução, faturamento, liquidação e conciliação;
- contratante, vendedor/prestador, executor, intermediador e processador;
- natureza jurídica e modelo de negócio;
- valor bruto contratado e valor efetivamente recebido;
- receita própria reconhecida por cada entidade;
- valores de terceiros a pagar;
- impostos, retenções, taxas, estornos e reembolsos discriminados;
- custos diretos e rateios com critério documentado;
- margem de contribuição e resultado contábil, sem chamar estimativa de lucro realizado;
- parcela territorial calculada apenas depois da apuração aprovada;
- autorizações, comprovantes, documentos fiscais e trilha de auditoria.

Não armazenar dados fiscais sensíveis além do necessário; aplicar controle de acesso, minimização, retenção e proteção de dados.

## 5. Classificação de custos e obrigações

Separar pelo menos:

1. folha e benefícios;
2. encargos e obrigações patronais;
3. prestadores independentes;
4. fornecedores e insumos;
5. tributos próprios;
6. tributos retidos de terceiros;
7. taxas de pagamento e bancárias;
8. logística e deslocamento;
9. tecnologia e infraestrutura;
10. suporte, atendimento e segurança;
11. provisões, contingências e perdas;
12. estornos, chargebacks e reembolsos.

Cada item precisa de regra contábil para reconhecer competência, caixa, dedutibilidade e rateio. “Custo operacional” no modelo gerencial não implica automaticamente dedutibilidade fiscal.

## 6. Resultado territorial

O resultado local deve ser apurado por critérios documentados, consistentes e auditáveis. Critérios possíveis para análise (não aprovados como fórmula): local de origem da demanda, local de execução, sede/unidade responsável, local do cliente, local do ativo ou combinação ponderada.

Para atividades que atravessam territórios, deve existir regra de rateio anterior à apuração. Não atribuir 100% do resultado a vários territórios ao mesmo tempo. A soma dos rateios deve fechar em 100% e possuir evidência.

Depois da apuração do lucro local, a regra diretriz é separar 50% para a dimensão territorial, distribuída entre bairro, cidade, estado e país, quando os percentuais e a estrutura jurídica estiverem aprovados. Os demais 50% permanecem sem destinação definida.

## 7. Pagamentos, intermediação e serviços financeiros

- Preferir prestador de pagamento regulado/adequado ao fluxo e à atividade.
- Avaliar se o papel da UNO é apenas tecnológico, recebedor, subcredenciador, marketplace ou outro enquadramento.
- Não manter saldo custodiado de terceiros em carteira interna sem análise regulatória.
- Documentar titularidade, segregação, liquidação, chargebacks, reembolsos e conciliação.
- Stripe Connect ou outro produto não substitui a análise de enquadramento no Brasil nem a revisão contratual/tributária.
- Saques, transferências, split e repasses devem ser testados em sandbox e autorizados antes de produção.

## 8. Fases societárias

A operação inicial não pressupõe comercialização de ações. Preparar trilhas de ativos, contratos, propriedade intelectual, governança, contabilidade e indicadores para uma possível etapa societária posterior.

Antes de qualquer captação ou oferta:
- definir tipo societário e titularidade dos ativos;
- avaliar direitos e deveres de sócios/investidores;
- obter avaliação e demonstrações adequadas;
- revisar contratos, passivos, propriedade intelectual e governança;
- verificar regras da CVM e demais órgãos, conforme a modalidade de oferta;
- aprovar formalmente pelo órgão competente e pelo fundador, conforme governança.

Não usar linguagem que prometa valorização, retorno, liquidez ou direito acionário antes da estrutura e dos documentos válidos.

## 9. Papéis de controle

| Papel | Responsabilidade | Limite |
|---|---|---|
| Orquestrador Mestre | Aplicar políticas e exigir evidências | Não substitui decisão jurídica humana |
| Painel Mestre | Aprovar exceções e decisões reservadas ao fundador | Não dispensa exigências legais |
| Painel Jurídico | Revisar contratos, enquadramentos e riscos | Parecer por profissional habilitado quando necessário |
| Painel Contábil e Financeiro | Plano de contas, conciliação, apuração e relatórios | Não inventar tratamento fiscal |
| Operação local | Registrar atividade e comprovar execução | Não alterar regras centrais |
| Agentes e automações | Preparar, validar consistência, alertar e simular | Sem contratação, pagamento ou mudança de percentuais sem autorização |

## 10. Gate de ativação

Uma modalidade só pode ir a produção após:
- enquadramento jurídico/contratual;
- validação contábil e tributária;
- papéis e responsabilidades publicados;
- documentos e comprovantes definidos;
- fluxo financeiro e conciliação testados;
- privacidade e segurança avaliadas;
- alçada e aprovadores definidos;
- testes negativos de fraude, estorno e falha;
- autorização humana registrada.

## 11. Questões que exigem profissional habilitado

- regime tributário da entidade e de cada linha de negócio;
- emissão de documentos fiscais e obrigações acessórias;
- vínculo trabalhista e terceirização em cada operação;
- retenções de IR, INSS, ISS e outros tributos conforme caso;
- contabilização de recursos de terceiros e comissões;
- regras de arranjos e instituições de pagamento;
- natureza jurídica de fundos/reservas territoriais;
- doações, OSCs, parcerias públicas e incentivos;
- estrutura societária e ofertas futuras;
- LGPD, sigilo fiscal e retenção documental.

## 12. Critério de aceite

A especificação estará implementável quando cada fluxo de negócio tiver um registro de enquadramento preenchido, evidências anexadas, aprovador identificado, bloqueios técnicos testados e revisão profissional documentada. Este documento não autoriza operação financeira real.
