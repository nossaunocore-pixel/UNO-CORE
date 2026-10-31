# EOU-V18 — Especificação técnica de Marketplace

- Revisão documental: 0.3.0
- Estado: proposta técnica; catálogo público parcial não equivale a checkout/contratação operacional
- Dependências: V09, V12–V18, V20–V25, V28, V30, V31, V39

## 1. Fronteira e papéis
Marketplace organiza descoberta e transação entre ofertantes e demandantes. Para cada fluxo, determinar se UNO é fornecedor, vendedor, intermediador, agente comercial, operador técnico ou apenas diretório. O papel não pode ser presumido globalmente; depende de operação, contrato e comportamento real.

## 2. Modelo lógico
CatalogItem(id, origin, owner_entity, provider_entity, category, status, visibility, version).
Offer(id, item_id, seller_entity, executor_entity, territory, price, currency, unit, terms_version, availability_ref).
ListingReview(id, offer_id, reviewer, evidence, decision, timestamp).
Order(id, buyer_id, offer_id, quantity, price_snapshot, terms_snapshot, status, idempotency_key).
Contracting(id, order_id, parties, scope, start, end, status, evidence_ref).
Fulfillment(id, order_id, executor, milestones, delivery_evidence, status).
Cancellation(id, order_id, requester, reason, policy_version, status).
Dispute(id, order_id, claimant, reason, evidence, reviewer, outcome).
Rating(id, order_id, author, score, content, moderation_state).
CommissionRule(id, scope, basis, rate, validity, approval_ref).

## 3. Publicação e descoberta
Oferta deve indicar origem UNO/terceiro, responsável, preço/unidade, escopo, disponibilidade, restrições, prazo, localização, termos e canal de suporte. Publicação exige evidência proporcional à categoria e aprovação. Atualização de preço/termos cria versão; pedido guarda snapshot imutável do que foi aceito.

## 4. Pedido e contratação
Descoberta → comparação → confirmação de termos → criação idempotente do pedido → aceitação pelo fornecedor quando necessária → pagamento/autorização → execução → confirmação → suporte/disputa. Estado pendente nunca é apresentado como contratado ou pago. Reserva de estoque/vaga usa expiração e transação concorrente.

## 5. Dinheiro e conciliação
V25 é fonte financeira. Checkout, split, comissão, reembolso e payout são operações distintas. Confirmar por webhook validado e conciliação, não por redirect do browser. Falha ou timeout externo gera estado incerto e reconciliação; nunca repetir cobrança cegamente. Taxas e comissões exigem regra aprovada, versão, transparência e base contratual.

## 6. Integridade e proteção
Onboarding de fornecedor, identidade e evidência; prevenção a fraude e oferta ilícita; moderação; proteção ao consumidor; canal de denúncia; suporte e resolução. Não publicar selo de verificação sem critério e data. Proteger dados de comprador e histórico de pedidos por finalidade e acesso.

## 7. Estado V7 e fronteiras
Vitrine lê itens publicados por read model Supabase; produto/serviço de terceiro registra origem. Contratação, pagamento, entrega, comissão, carteira e disputa não são considerados implementados apenas pela listagem. V25 ledger; V12 provedor; V15 integração; V31 fluxo; V39 revisão legal.

## 8. Testes e aceite
Testar oferta expirada, vendedor suspenso, snapshot de preço, pedido duplicado, estoque concorrente, pagamento pendente, webhook falso/replay, refund, chargeback, comissão, acesso cruzado, RLS e denúncia. Aceite requer contratos, onboarding, checkout sandbox, reconciliação, suporte, política de cancelamento e revisão jurídica.

## 9. Pendências
Definir categorias do MVP, papel jurídico por fluxo, elegibilidade de terceiros, onboarding, KYC quando aplicável, comissões, prazos, devoluções, chargeback, reputação, moderação e atendimento.
