# EOU-V15 — Especificação técnica de Integrações

- Revisão documental: 0.3.0
- Estado: proposta técnica
- Dependências: V11–V14, V16, V17, V18, V25, V39

## 1. Contrato e modelo lógico
Integração é relação técnica/institucional entre UNO e sistema externo ou interno. Conexão ativa não autoriza acesso irrestrito.

Integration: ID, finalidade, proprietário, contraparte, estado e criticidade.
IntegrationVersion: endpoints, autenticação, escopos, fluxos de dados, schema, ambiente, agenda, retry e timeout.
ConsentGrant: titular, finalidade, categorias de dados, destinatário, concessão, validade, revogação e evidência.
CredentialRef: referência segura, proprietário, escopos, emissão, expiração, rotação e estado.
IntegrationRun: versão, gatilho, correlação, estado, contagens, erros e horários.
WebhookSubscription: eventos, referência da chave de assinatura, endpoint e estado.
Reconciliation: estado esperado/observado, divergência e resolução.

## 2. Ciclo de vida e dados
Solicitada → análise de finalidade/dados → contrato/consentimento → sandbox → testes → aprovação humana → habilitada por escopo → monitorada → suspensa/desconectada. Declarar origem, destino, campos, finalidade, frequência, retenção, base legal/consentimento, região, suboperadores e revogação. Compartilhar somente o mínimo.

## 3. Credenciais e confiabilidade
Preferir OAuth com escopos mínimos. Credenciais ficam em cofre; cadastro guarda referência. Rotacionar, expirar e revogar. Webhooks usam assinatura, timestamp e proteção replay. Separar ambientes e credenciais por organização quando necessário.

Retry exponencial com jitter somente para falhas transitórias; idempotência, circuit breaker, fila, dead-letter, reconciliação e limites de concorrência. Operações financeiras/irreversíveis não são repetidas cegamente. Falha parcial tem estado explícito.

## 4. Comercial e financeiro
Definir vendedor, prestador, recebedor, intermediador, responsável por reembolso e suporte. Pagamentos e repasses seguem V25 e contrato do provedor. Não mostrar saldo, saque ou liquidação antes de confirmação e conciliação. Split proposto exige implementação, validação contratual e testes.

## 5. Encerramento, testes e aceite
Desabilitar chamadas, revogar credenciais, remover webhooks, verificar jobs, exportar/retornar dados quando devido, eliminar cópias conforme política e arquivar evidências. Testar consentimento ausente/revogado, token expirado, escopo excessivo, webhook falso/replay, timeout, indisponibilidade, duplicidade, falha parcial, reconciliação, rotação e encerramento.

Aceite exige inventário, fluxo de dados aprovado, contrato/consentimento, credenciais seguras, sandbox, testes ponta a ponta, monitoramento e desligamento documentado. Configuração presente não comprova integração operacional.
