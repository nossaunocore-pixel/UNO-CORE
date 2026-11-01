# EOU-V14 — Especificação técnica de APIs e Gateways

- Revisão documental: 0.3.0
- Estado: proposta técnica para inventário e validação
- Dependências: V09–V13, V15–V17, V31–V33

## 1. Fronteiras
Interface → API de domínio → serviço/adaptador → provedor. Cada fronteira autentica, autoriza e valida schema. Interface não é autoridade final; API pública não expõe credenciais ou lógica administrativa.

## 2. Registro de endpoint
Cada operação declara ID, método, caminho, versão, domínio, responsável, audiência, autenticação, escopos, schemas de entrada/saída, classificação de dados, efeitos colaterais, idempotência, quota, timeout, erros, logs, métricas e depreciação.

## 3. Resposta e erros
Sucesso inclui request_id, data e meta. Erro inclui código estável, mensagem segura, request_id e indicação de retry quando conhecida. Não retornar stack trace, segredos, tokens, políticas internas ou dados de terceiros.

## 4. Autenticação e proteção
Validar assinatura, emissor, audiência, expiração e tipo de token. Distinguir visitante anônimo Supabase de usuário Google verificado com IDU. Grants atuais são validados no servidor. Painéis exigem scope e atribuição ativa; recursos pessoais exigem ownership. Operações críticas revalidam antes do efeito externo.

Definir rate limit por identidade e, quando necessário, IP/tenant; quota global; tamanho máximo; concorrência; timeout; circuit breaker; idempotência; replay; paginação e custo. Falhar fechado quando limite obrigatório estiver ausente.

## 5. Gateway de IA e webhooks
Gateway centraliza seleção de modelo/provedor, política de dados, custo, quota, fallback e observabilidade. Fallback não amplia finalidade nem transfere dados sensíveis sem autorização. Registrar modelo/versão, tokens/custo e decisão, minimizando conteúdo.

Webhooks verificam assinatura e timestamp, protegem contra replay, persistem ID de evento e processam idempotentemente. Eventos levam IDs e referências mínimas.

## 6. Inventário conhecido
V7 contém endpoints de chat público/autenticado, autorização de painéis e Oficina. Chat público prevê Supabase Anonymous Auth, limites individuais e globais; limite global depende de configuração explícita. CAPTCHA/Turnstile permanece requisito antes de expansão pública ampla. Arquivo de API não prova deploy nem disponibilidade.

## 7. Testes e aceite
Testar contrato, token inválido/expirado, emissor errado, escopo ausente, IDOR, RLS, quota, payload grande, injection, replay, webhook falso, duplicidade, timeout, provedor indisponível, custo, fallback proibido e segredo. Aceite exige inventário completo, OpenAPI/JSON Schema, CI, métricas, matriz de autorização e smoke test verificável. Não rotular produção sem deployment comprovado.
