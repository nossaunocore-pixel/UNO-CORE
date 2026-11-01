# EOU-V25 — Especificação técnica de Financeiro

- Revisão documental: 0.3.0
- Estado: proposta técnica de alto risco; não constitui autorização para movimentar/custodiar fundos
- Dependências: V13–V18, V24, V26–V28, V30–V31, V36, V39, V40

## 1. Princípios e limites
V25 define registros financeiros, integrações de pagamento, reconciliação e controles. Não presume que UNO possa custodiar, emitir moeda, operar conta de pagamento ou prestar serviço regulado. Papel jurídico e fluxo de fundos devem ser validados por assessoria jurídica/contábil e pelo provedor. Saldo interno de ledger não é automaticamente dinheiro disponível em banco.

## 2. Modelo contábil proposto
LedgerAccount(id, owner_entity, account_type, currency, status).
JournalEntry(id, transaction_ref, effective_at, status, idempotency_key, source_ref).
JournalLine(id, entry_id, account_id, debit_minor, credit_minor, currency, counterparty_ref).
PaymentIntentRef(id, provider, external_id, amount_minor, currency, status, idempotency_key).
TransferRef(id, provider, source_account, destination_account, amount_minor, status, external_id).
FeeAssessment(id, basis, amount_minor, currency, rule_version, approval_ref).
PayoutRef(id, beneficiary, provider_ref, amount_minor, status, reconciliation_ref).
RefundRef(id, original_transaction, amount_minor, reason, status).
DisputeRef(id, provider_case, amount_minor, status, evidence_deadline).
ReconciliationRun(id, provider, period, statement_ref, matched, unmatched, reviewer, status).
FinancialApproval(id, operation, approver, scope, limit, evidence_ref, timestamp).

Valores monetários usam inteiros na menor unidade da moeda e moeda explícita. Lançamento confirmado deve ser balanceado por moeda e entidade contábil. Não usar ponto flutuante para dinheiro.

## 3. Estados e fonte de verdade
Separar created, pending, requires_action, authorized, captured, settled, failed, canceled, refunded, disputed e reconciled conforme capacidade do provedor. Autorização não é captura; captura não é liquidação; liquidação não é repasse ao beneficiário. Webhook é validado por assinatura, timestamp e idempotência; divergência exige reconciliação. Estado incerto não pode ser exibido como concluído.

## 4. Carteira e saldo
Carteira é projeção de lançamentos permitidos, não conta bancária por si só. Saldo disponível, pendente, bloqueado e a receber são categorias distintas, calculadas por regra aprovada e conciliada. Depósito, retirada, transferência interna, pagamento e repasse são operações diferentes. Não prometer conversão 1:1, saque instantâneo ou ausência de taxa sem contrato, custos e autorização legal.

## 5. Stripe e provedores
Stripe é área operacional do Painel Contábil e Financeiro, não painel autônomo por padrão. Separar test/live, contas, chaves, webhooks, produtos, preços, Connect, transferências e payouts. Credenciais somente em cofre/ambiente seguro; nunca no cliente, logs ou documentação. Connect e split exigem desenho de responsabilidades, onboarding, KYC, saldo negativo, chargeback, reserva, reembolso, tributação e termos. Configuração de teste não prova produção.

## 6. Tarifas, comissões, doações e lives
Qualquer percentual, split, taxa, elegibilidade, base de cálculo, recebedor, retenção e momento de repasse precisa de decisão formal, contrato e validação profissional. A visão comercial histórica é hipótese de produto até aprovação. Doações precisam de finalidade, destinatário, prestação de contas, política de devolução e análise tributária. Não misturar doação com compra, assinatura ou saldo de usuário.

## 7. Controles e segregação
Separar criador de solicitação, aprovador, executor, conciliador e auditor. Aplicar limites por operação, titular, período, parceiro e risco; dupla aprovação para exceções e valores definidos pela governança. Antifraude, KYC quando aplicável, monitoramento, reconciliação, chargeback, reserva e incidentes. Não inventar limites monetários.

## 8. Reconciliação e fechamento
Conciliar eventos do provedor, ledger, extrato e beneficiário. Processar eventos fora de ordem com máquina de estados; deduplicar; detectar lacunas; manter suspense account para divergências conforme política contábil aprovada. Fechamento por período bloqueia alterações silenciosas; ajustes são lançamentos compensatórios com referência.

## 9. Segurança e testes
Testar valor/moeda, precisão, idempotência, assinatura, replay, eventos fora de ordem, captura parcial, refund parcial, chargeback, payout falho, saldo negativo, conta suspensa, concorrência, segregação, RLS, acesso cross-user, reconciliação e fechamento. Testes sandbox nunca movimentam dinheiro real. Teste de produção exige aprovação explícita e valores controlados.

## 10. Aceite e pendências
Aceite exige parecer jurídico/contábil sobre modelo, titularidades, ledger auditável, reconciliação, webhooks, antifraude, permissões, relatórios, política de reembolso e testes. Pendências: modelo legal/contábil, arquitetura de ledger, titularidade de contas, Connect, tarifas, comissões, doações, saques, limites, impostos, KYC/AML, reservas e operação de disputas.


## 12. Regra econômica territorial — precedência 31/10/2026

O reconhecimento contábil deve separar receita própria, valores de terceiros, custos/despesas, tributos, retenções e demais obrigações. Somente depois da apuração do lucro local poderá ser calculada a parcela territorial de 50%. Essa parcela será gerida nas esferas bairro, cidade, estado e país. Percentuais entre esferas permanecem indefinidos; os outros 50% do lucro também não possuem destinação definida. Não usar faturamento bruto como base. Até aprovação e validação profissional, qualquer cálculo é apenas simulação, sem payout, split ou lançamento financeiro real. Ver o adendo transversal ADENDO-MEU-UNO-001-01.

