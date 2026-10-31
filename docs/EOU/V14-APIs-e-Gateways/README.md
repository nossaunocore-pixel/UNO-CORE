# EOU-V14 — APIs e Gateways

- Versão documental: 0.2.0 (README-base)\n- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)\n- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado
- Relacionados: V09 Capacidades, V10 Agentes, V11 Ferramentas, V12 Provedores, V13 Dados, V15 Integrações, V16 Segurança, V31 Fluxos, V33 Motor Cognitivo

## 1. Finalidade
Definir contratos de comunicação entre interface, backend UNO, módulos internos, provedores e parceiros. APIs são fronteiras de confiança e devem expor somente operações necessárias.

## 2. Padrões de contrato
Cada endpoint/evento declara identificador, método, rota, versão, finalidade, solicitante autorizado, autenticação, escopos, schema de entrada/saída, erros, limites, timeout, idempotência, efeitos colaterais, dados tratados, logs, responsável e compatibilidade. Preferir schemas explícitos e validação server-side.

## 3. Camadas
- Interface pública consome serviços públicos com dados publicados.
- APIs de domínio aplicam regras e autorização.
- Adaptadores encapsulam provedores externos.
- Gateway de IA aplica seleção de modelo/provedor, quotas e controles.
- Operações privilegiadas usam credenciais somente no servidor.
A interface nunca é autoridade final de acesso.

## 4. Autenticação e autorização
Validar token e emissor, audiência, expiração e claims. Distinguir visitante anônimo Supabase de usuário Google verificado com IDU. Verificar autorização no servidor em cada operação; não confiar em flags do cliente. Painéis exigem scopes e atribuições ativas. Service role não pode chegar ao navegador.

## 5. Proteção operacional
Rate limit por usuário/tenant/IP quando adequado, quota global, tamanho máximo, timeout, circuit breaker, limites de concorrência, idempotency key e proteção contra replay. Mensagens de erro não devem revelar segredos ou detalhes internos.

## 6. Versionamento e compatibilidade
Mudanças incompatíveis exigem nova versão e janela de migração. Depreciação precisa de aviso, métricas de uso, prazo e fallback. Schemas devem ser testados no CI e compartilhados entre cliente e servidor quando aplicável.

## 7. Eventos e webhooks
Verificar assinatura, timestamp e replay; processar idempotentemente; confirmar recebimento rapidamente e tratar trabalho pesado em fila. Eventos carregam IDs e referências mínimas, não cópias desnecessárias de dados pessoais.

## 8. APIs conhecidas no estado V7
Existem rotas de chat público e autenticado, acesso a painéis e Oficina, entre outras. O chat público exige Supabase Anonymous Auth e limites por usuário e globais; o limite global depende de configuração explícita. Isso não significa que todos os endpoints estejam implantados ou que o serviço público esteja pronto para tráfego amplo.

## 9. Testes e aceite
Testes de contrato, autenticação inválida, token expirado, escopo ausente, RLS, rate limit, quota global, payload grande, injection, replay, duplicidade, timeout, indisponibilidade e vazamento de segredo.

## 10. Pendências
Consolidar inventário completo de endpoints, OpenAPI/JSON Schema, matriz de escopos, políticas de quota, monitoramento e gateway de IA. CAPTCHA/Turnstile para chat público ainda é requisito antes de expansão ampla.

## 11. Histórico
0.2.0 — estrutura inicial alinhada ao V7; 2026-10-31.
