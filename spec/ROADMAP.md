# ROADMAP.md — Plano de Evolução e Entrega do UNO CORE

**Revisão:** 31 de outubro de 2026  
**Objetivo:** preparar um MVP real, seguro, testável e implantável, preservando a base V6 e integrando a evolução V7.

> Estados deste roadmap descrevem trabalho documental e técnico conhecido. Uma tela ou especificação não equivale a funcionalidade testada.

## Fase 0 — Base existente e diagnóstico
- [x] Repositório e branches `v7-foundation` e `v7-implementation` identificados.
- [x] Aplicação atual ainda monta `V6App`; registrar que a integração V7 completa não está concluída.
- [x] Clientes Firebase e Supabase encontrados no código.
- [x] Divergências antigas de arquitetura e acesso identificadas.
- [ ] Executar build limpo e registrar resultado.
- [ ] Mapear rotas, componentes, persistência e dependências com testes.

## Fase 1 — Especificação e decisões
- [x] Consolidar propósito, princípios, acesso Google obrigatório e visitante autenticado.
- [x] Definir landing/boas-vindas como únicas experiências anônimas.
- [x] Definir classes gratuita interna, consumo, externa e restrita.
- [x] Definir direção Firebase + Supabase + IDU, com ressalva de validação.
- [x] Definir modo de simulação e transparência pré-ativação.
- [x] Registrar estados de disponibilidade e critérios de evidência.
- [ ] Validar termos, privacidade, retenção e exclusão com assessoria jurídica.

## Fase 2 — Identidade, autenticação e autorização
- [ ] Google OAuth funcional em Preview e produção.
- [ ] Remover rotas alternativas de e-mail/senha do frontend e desabilitá-las no Firebase quando apropriado.
- [ ] Garantir que somente landing e boas-vindas sejam anônimas.
- [ ] Implementar/verificar endpoint server-side de provisionamento e recuperação de IDU.
- [ ] Validar token, IDU, sessão, claims e autorização no backend.
- [ ] Testar acesso de visitante, aderido, parceiro, equipe, fundador e usuário sem permissão.
- [ ] Revisar saída de sessão, revogação e estados de erro.

## Fase 3 — Dados, memória e privacidade
- [ ] Confirmar Firebase Auth, Firestore, regras e serviços internos.
- [ ] Configurar e testar Firebase Third-Party Auth no Supabase.
- [ ] Inspecionar schema Supabase, migrations, grants, RLS, views e Storage.
- [ ] Criar/ajustar políticas por ownership e escopo; testar acesso cruzado.
- [ ] Definir registro de conversas, consentimento, acesso do titular, retenção e exclusão.
- [ ] Separar memória institucional da memória pessoal e dados operacionais.

## Fase 4 — Capacidades e experiência
- [ ] Catálogo executável com classe, custo, plano, dependência, escopo, status e auditoria.
- [ ] Visitante autenticado: habilitar apenas funções internas gratuitas realmente implementadas.
- [ ] Conversa: distinguir modo interno gratuito de modelos/APIs com consumo.
- [ ] Comunidade: feed, publicações, comentários e mensagens com RLS e controles de abuso.
- [ ] Participação: propostas e votações internas com regras de elegibilidade e auditoria.
- [ ] Vitrine, perfil e navegação responsiva.
- [ ] Praça UNO e camada institucional com estados transparentes.
- [ ] Todos os diálogos com saída explícita e comportamento correto no botão voltar.
- [ ] Revisar acessibilidade e navegação assistida.

## Fase 5 — Orquestrador Mestre e painéis
- [ ] Catálogo e gestão de agentes, APIs, módulos e permissões.
- [ ] Separar painéis mestre, administração, coordenação, supervisão e operação.
- [ ] Menor privilégio, delegação explícita e escopos territoriais/funcionais.
- [ ] Auditoria de solicitações, decisões, autorizações, execuções e resultados.
- [ ] Aprovação humana para ações externas, sensíveis ou irreversíveis.

## Fase 6 — Simulação comercial e Stripe
- [ ] Manter todos os produtos/preços no Stripe test mode enquanto não houver liberação formal.
- [ ] Separar catálogo comercial simulado de cobranças reais.
- [ ] Configurar webhooks de teste idempotentes e validar estados de pagamento.
- [ ] Documentar preços, elegibilidade, comissão e dependentes sem ativar repasses reais.
- [ ] Validar fornecedor legal, contratos, CDC, tributação, cancelamento e reembolso.
- [ ] Bloquear wallet sacável, split, Connect e payout em produção até validação jurídica/financeira.

## Fase 7 — Qualidade, segurança e implantação
- [ ] Scripts de teste unitário, integração e E2E.
- [ ] Build de produção sem erros e revisão de dependências.
- [ ] Testes de autenticação, autorização, RLS, abuso e rate limits.
- [ ] Inspeção de segredos e configuração de ambientes.
- [ ] Vercel Preview validado em desktop e mobile.
- [ ] Produção somente após checklist e autorização explícita.
- [ ] Evidências, rollback e monitoramento.

## Critério de conclusão do MVP
O MVP só será declarado pronto quando as fases críticas de identidade, autorização, dados, capacidades centrais, segurança, build e Preview tiverem evidências reproduzíveis. Itens futuros ou dependentes de APIs devem aparecer como bloqueados/aguardando integração, nunca como concluídos.
