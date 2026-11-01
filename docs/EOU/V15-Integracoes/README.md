# EOU-V15 — Integrações

- Versão documental: 0.2.0 (README-base)\n- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)\n- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado
- Relacionados: V11 Ferramentas, V12 Provedores, V13 Dados, V14 APIs, V16 Segurança, V18 Marketplace, V25 Financeiro

## 1. Finalidade
Definir como UNO conecta sistemas próprios, serviços externos, instituições, parceiros, dispositivos e canais, mantendo consentimento, segurança, rastreabilidade e continuidade.

## 2. Registro da integração
Cada integração deve ter `integration_id`, finalidade, proprietário UNO, contraparte, provedor, sistemas envolvidos, dados e direção do fluxo, base/consentimento, escopos, autenticação, endpoints, versão, ambiente, frequência, SLA, custos, riscos, responsável, estado, suporte e plano de desligamento.

## 3. Ciclo de vida
Solicitada → avaliação → consentimento/contrato → sandbox → testes → aprovação humana → habilitada em escopo → monitorada → suspensa/desconectada. A conexão técnica não autoriza uso de todos os dados ou funcionalidades do parceiro.

## 4. Consentimento e minimização
Declarar finalidade, campos compartilhados, destinatário, retenção, frequência, revogação e consequências. Coletar somente o necessário. A revogação deve interromper novas transmissões e iniciar tratamento de tokens/cópias conforme contrato e lei.

## 5. Segurança de conexão
OAuth quando suportado, tokens com escopos mínimos, rotação, armazenamento seguro, assinatura de webhooks, allowlists quando aplicável e segregação por ambiente. Credenciais nunca entram em Git, logs, prompts ou dados de Oficina. Acesso de produção exige aprovação separada.

## 6. Confiabilidade e operação
Timeout, retry com backoff, idempotência, circuit breaker, filas, dead-letter, reconciliação, monitoramento de saúde e procedimento manual. Não repetir automaticamente operações financeiras ou irreversíveis sem proteção contra duplicidade.

## 7. Integrações financeiras e comerciais
Pagamentos, Connect, repasses e split seguem V25 e contratos oficiais do provedor. A integração não deve prometer saldo, saque ou liquidação antes de confirmação do provedor e conciliação. Integrações de parceiros devem identificar quem vende, presta, recebe e responde pelo serviço.

## 8. Auditoria e encerramento
Registrar ator, consentimento, escopos, versão, chamadas relevantes, falhas, alterações e revogação. Encerramento revoga tokens, desativa webhooks, trata dados remanescentes e registra evidência.

## 9. Testes e aceite
Sandbox, credencial inválida, escopo excessivo, token expirado, replay, webhook falso, indisponibilidade, duplicidade, revogação, exportação e falha parcial. Testar fluxo ponta a ponta antes de produção.

## 10. Pendências
Inventariar integrações existentes e desejadas, formalizar matriz de dados e consentimento, definir níveis de criticidade e plano de desligamento por parceiro. Integração listada não é integração operacional.

## 11. Histórico
0.2.0 — estrutura inicial para revisão; 2026-10-31.
