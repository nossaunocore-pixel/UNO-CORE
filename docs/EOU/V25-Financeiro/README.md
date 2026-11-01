# EOU-V25 — Financeiro

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico; Stripe em preparação/teste, sem operação financeira de produção validada
- Relacionados: V13 Dados, V16 Segurança, V17 Governança, V18 Marketplace, V24 Empregabilidade, V26 Identidade, V27 Perfis, V36 ADR, V39 Jurídico

## 1. Finalidade
Definir a arquitetura financeira do UNO: contas, carteira, ledger, pagamentos, recebimentos, tarifas, comissões, repasses, doações, assinaturas, conciliação, estornos e relatórios, com separação entre saldo contábil interno e dinheiro efetivamente movimentado por instituições financeiras.

## 2. Princípios
- O ledger é imutável por lançamento; correções são lançamentos compensatórios, nunca edição silenciosa.
- Saldo exibido deriva de lançamentos confirmados e conciliados, não de estado de interface.
- Depósitos, saques, transferências, split, reembolso e comissão são operações distintas.
- Taxas e responsabilidades precisam ser transparentes antes da confirmação.
- Não custodiar ou prometer dinheiro sem estrutura jurídica, contratual e regulatória adequada.

## 3. Entidades
Conta, titular, carteira, lançamento, transação, pagamento, transferência, repasse, comissão, tarifa, estorno, disputa, doação, assinatura, fatura, conciliação, provedor e evento financeiro. Cada operação possui ID, moeda, valor inteiro na menor unidade, status, origem, destino, taxas, timestamps, chave idempotente e referência externa.

## 4. Ledger e estados
Registrar débito/crédito balanceado por moeda e entidade contábil, com estados pendente, autorizado, confirmado, liquidado, falho, cancelado, estornado ou em disputa, conforme o fluxo. Não misturar autorização de cartão com liquidação. Reconciliar webhooks e extratos. Operações duplicadas devem ser impedidas por idempotência.

## 5. Stripe e governança de acesso
Stripe é uma área operacional dentro do **Painel Contábil e Financeiro**, não um painel autônomo por padrão. Acesso segue escopos, segregação de funções e auditoria. Chaves secretas ficam somente no servidor/cofre; nunca em documentos ou Git. Ambiente de testes deve ser separado de produção. O uso de Connect, tipo de cobrança, responsabilidade por perdas, onboarding/KYC e split exige configuração e revisão próprias.

## 6. Regras comerciais ainda sujeitas a validação
A visão do projeto inclui repasses e comissões sobre operações elegíveis, doações e possíveis divisões de receita em lives. Percentuais, taxas, elegibilidade, titularidade, tributação, retenções e prazos precisam de contrato e validação antes de codificar como obrigação financeira. Nenhuma regra conceitual é automaticamente uma configuração Stripe ativa.

## 7. Controles
Dupla aprovação para operações críticas; limites por usuário, parceiro e período; antifraude; KYC quando exigido; conciliação diária; trilha append-only; chargeback; bloqueio e reversão; segregação entre solicitante, aprovador e executor.

## 8. Estado atual conhecido
Há catálogo de produtos Stripe em teste e documentação de configuração. V7 contém shell de carteira sem saldo real. Não há confirmação de ledger operacional, pagamentos de produção, saques, Connect, split ou conciliação implantados. Não exibir saldo fictício.

## 9. Segurança e conformidade
Revisão jurídica/contábil/regulatória para arranjo de pagamento, prestação de serviços, intermediação, doações, tributação, notas fiscais, proteção ao consumidor e prevenção à lavagem de dinheiro, conforme aplicável.

## 10. Testes e aceite
Testar idempotência, webhooks assinados, eventos fora de ordem, conciliação, valor/moeda, falha parcial, reembolso, disputa, saldo negativo, segregação de contas, autorização, fraude e fechamento contábil. Usar sandbox antes de qualquer produção.

## 11. Pendências
Definir modelo legal/contábil, contas e titularidades, ledger, moedas, limites, taxas, comissões, fluxo Connect, onboarding, payout, política de saque e conciliação. Nenhum valor ou percentual deve ser ativado sem decisão formal e validação profissional.

## 12. Histórico
0.2.0 — arquitetura financeira inicial consolidada; 2026-10-31.


## Relação com o Modelo Econômico Universal

O ledger e os relatórios devem separar receita própria, valores de terceiros, custos/despesas, tributos, retenções, lucro apurado, destinação territorial e recursos vinculados. A regra territorial de 50% incide sobre lucro local apurado após custos e obrigações, não sobre faturamento bruto. As quatro esferas são bairro, cidade, estado e país; percentuais internos não estão definidos. Os outros 50% do lucro também permanecem sem destinação definida. Até ratificação e validação profissional, esses cálculos são apenas simulações e não podem iniciar pagamentos, saques, custódia ou split. Ver [Adendo MEU-UNO-001](../ADENDO-MEU-UNO-001-CICLO-ECONOMICO-TERRITORIAL-SOCIETARIO-2026-10-31.md) e [RJTTF-UNO-001](../REGIME-JURIDICO-TRABALHISTA-TRIBUTARIO-FINANCEIRO-UNO-CORE.md).

