# Stripe — catálogo de teste do MVP UNO

**Conta:** UNO-Nós S.A.  
**Ambiente:** Stripe test mode (`livemode=false`)  
**Verificação:** 31/10/2026  
**Finalidade:** estrutura técnica de simulação; nenhum produto autoriza cobrança real.

## Produtos e preços verificados

| Produto | Product ID | Preço | Price ID | Frequência | Estado |
|---|---|---:|---|---|---|
| Acesso pioneiro (simulação) | `prod_VXgDMYzY1oC6gl` | R$ 29,90 | `price_1UWaqw1sA4kiL7DZFyKIXML4` | Único | Ativo no test mode |
| Plano pessoal (simulação) | `prod_VXgDncVq3isBuK` | R$ 59,90 | `price_1UWar11sA4kiL7DZyUIkOv0d` | Mensal | Ativo no test mode |
| Plano profissional integrado (simulação) | `prod_VXgD2yLLnP6no8` | R$ 129,90 | `price_1UWar31sA4kiL7DZS50A2GDw` | Mensal | Ativo no test mode |
| Dependente/ajudante adicional (simulação) | `prod_VXgDAf8jxpWHhL` | R$ 9,90 | `price_1UWar51sA4kiL7DZfpqX1TM7` | Mensal | Ativo no test mode |
| Plano profissional integrado — pós-lançamento | `prod_VXgD2yLLnP6no8` | R$ 159,90 | `price_1UWarE1sA4kiL7DZN0K6ZZTw` | Mensal | **Inativo** até liberação |

## Regras

- Acesso Google gratuito não é produto Stripe e não deve gerar assinatura.
- Visitante autenticado pode usar capacidades internas gratuitas elegíveis sem checkout.
- R$ 29,90 pioneiro está modelado como pagamento único em ambiente de teste; direitos, duração e condições dependem de contrato validado.
- R$ 59,90 pessoal e R$ 129,90 profissional são preços mensais de simulação.
- R$ 159,90 profissional pós-lançamento foi criado inativo para impedir uso acidental.
- R$ 9,90 é preço mensal por unidade adicional; validar quantidade, vínculo e regras contratuais antes de criar assinatura com quantity.
- Nenhum produto está autorizado para cobrança live. Não criar Checkout Session de produção, Connect account, transfer, payout ou wallet cash-out nesta fase.
- Não configurar Stripe Tax/automatic tax sem confirmação de obrigações e registros fiscais.
- Não foi encontrado código Stripe/webhook no repositório no momento da varredura.

## Próxima implementação técnica

1. Backend cria Checkout Session hospedada somente em test mode, usando IDs acima.
2. Webhook obrigatório, assinatura verificada, idempotência e eventos de ciclo de assinatura.
3. Concessão de plano somente após evento confirmado e validado no backend.
4. Customer Portal para autoatendimento, se habilitado no escopo final.
5. IDs de preço selecionados por configuração server-side; nunca aceitar amount ou price ID arbitrário do navegador.
6. Não enviar segredos Stripe para `VITE_*`; usar segredo restrito e server-side com privilégio mínimo.
7. Testes: pagamento aprovado, falha, cancelamento, renovação, webhook duplicado, evento atrasado, plano expirado e tentativa de acesso indevido.

## Fora do escopo atual

Connect e marketplace (comissão 10%, divisão de lives, repasses a profissionais/criadores), créditos de indicação e carteira interna ficam em especificação separada. A conta Stripe principal é brasileira; a elegibilidade e compatibilidade do modelo de Connect e dos fluxos de repasse precisam ser confirmadas antes de qualquer criação de conta conectada.
