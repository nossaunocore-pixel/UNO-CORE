# EOU-V18 — Marketplace

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado; catálogo público parcial no V7
- Relacionados: V09 Capacidades, V12 Provedores, V15 Integrações, V19 Industrial, V21 Educação, V24 Empregabilidade, V25 Financeiro, V30 Eventos

## Aprofundamento — contratos, CRM, ERP e conectores

- [Motor Universal de Negociação, Contratos, CRM, ERP e Conectores — 31/10/2026](MOTOR-UNIVERSAL-DE-NEGOCIACAO-CONTRATOS-CRM-ERP-E-CONECTORES-2026-10-31.md) — proposta de arquitetura para negociações dinâmicas, contratos versionados, pedidos de marketplaces, gestão comercial/operacional e integração com contabilidade, assinatura e serviços públicos. Pendente de aprovação do fundador.

## 1. Finalidade
Definir a descoberta, apresentação, comparação, oferta e contratação de produtos e serviços próprios da UNO e de terceiros, com clareza sobre quem oferece, quem vende, quem executa, quem recebe e quem responde.

## 2. Escopo
Inclui Vitrine, catálogo, ofertas, prestadores, instituições, preço, disponibilidade, condições, pedido, contratação, cancelamento, avaliação e pós-venda. Não substitui o ledger e a liquidação (V25), o catálogo de provedores (V12) ou o registro de eventos (V30).

## 3. Entidades principais
Produto, serviço, oferta, fornecedor, prestador, instituição, catálogo, preço, disponibilidade, pedido, contratação, entrega, cancelamento, disputa, avaliação e comissão. Cada item deve identificar origem UNO/terceiro, titularidade, responsável legal/comercial, território, estado e versão dos termos.

## 4. Publicação e transparência
Rascunho → validação → aprovado → publicado → pausado/retirado. Exibir identidade do fornecedor, descrição, preço e unidade, condições, prazo, restrições, política de cancelamento e canal de suporte. Conteúdo de terceiros não deve parecer oferta própria da UNO.

## 5. Jornada comercial
Descoberta → comparação → confirmação de condições → pedido/contrato → pagamento quando aplicável → execução/entrega → confirmação → suporte/disputa → avaliação. A contratação só pode ser considerada concluída com evidência do fluxo e confirmação de pagamento/execução aplicável.

## 6. Responsabilidades e proteção
Determinar se a UNO atua como intermediadora, marketplace, fornecedora ou prestadora em cada fluxo; não presumir papel jurídico único. Prever prevenção a fraude, transparência de taxas, proteção de dados, atendimento, reembolso e resolução de disputas. Exige revisão jurídica e consumerista.

## 7. Integração financeira
V25 define contas, ledger, tarifas, Stripe e conciliação. Nunca mostrar saldo ou pagamento como confirmado com base apenas em retorno do cliente. Webhooks precisam de assinatura, idempotência e reconciliação. Repasses e comissões dependem de contrato e configuração aprovados.

## 8. Estado atual conhecido
O V7 possui read model Supabase para catálogo público de produtos e serviços, com origem UNO/terceiro e leitura de itens publicados. A tela de Serviços/Vitrine não implementa por si só contratação, checkout ou fulfillment completo. Migrations preparadas ainda não foram aplicadas no Supabase hospedado.

## 9. Testes e aceite
Testar origem, fornecedor, preço, visibilidade, estoque/disponibilidade, publicação, consentimento, compra duplicada, pagamento pendente/falho, cancelamento, reembolso, disputa, comissão, fraude e RLS.

## 10. Pendências
Definir termos por categoria, papel jurídico da plataforma em cada operação, política de vendedores, onboarding/KYC quando aplicável, regras de comissão, devolução, chargeback, moderação e atendimento. Não ativar transações reais antes de validar V25 e obrigações legais.

## 11. Histórico
0.2.0 — estrutura de marketplace alinhada ao catálogo público V7; 2026-10-31.


## Relação com o Modelo Econômico Universal

Cada oferta/contratação deve identificar vendedor/prestador, contratante, executor, instituição parceira, papel contratual da UNO e processador de pagamento. Em intermediação, o valor integral pago pelo cliente não é automaticamente receita da UNO; reconhecer apenas os valores que lhe pertencem segundo contrato e contabilidade. Custos, obrigações e resultado territorial seguem o MEU-UNO-001 e seu adendo. Não ativar checkout, split ou comissão real sem validação V25 e V39.

