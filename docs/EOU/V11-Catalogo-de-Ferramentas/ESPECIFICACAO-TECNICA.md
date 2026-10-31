# EOU-V11 — Especificação técnica do Catálogo Universal de Ferramentas

- Revisão documental: 0.3.0
- Estado: proposta técnica para revisão
- Dependências: V09, V10, V12, V14, V15, V16, V17, V31, V32

## 1. Contrato
Ferramenta é uma operação invocável por interface, serviço, agente ou fluxo. A presença no catálogo não autoriza uso. V17 decide se o ator pode invocá-la no contexto.

Tool: tool_id, nome, finalidade, proprietário, origem, provedor, estado e versão.
ToolVersion: schemas de entrada/saída, escopos, classes de dados, efeitos colaterais, risco, timeout, retry, idempotência e custo.
ToolGrant: principal, ferramenta, escopos, restrições, validade e concedente.
ToolTest: versão, suite, resultado, evidência e data.
ToolInvocation: ator, ferramenta/versão, missão, decisão de escopo, resumo de entrada, resultado, custo e horários.

## 2. Classes e efeitos
Classes funcionais: leitura, busca, cálculo, transformação, comunicação, armazenamento, execução, pagamento, publicação e administração. Classificar também efeito: somente leitura, escrita reversível, efeito externo ou irreversível. Pagamento, concessão de acesso, publicação, exclusão e comunicação a terceiros exigem controles reforçados e confirmação humana conforme política.

## 3. Contrato de chamada
Validar ator, missão, finalidade, versão habilitada, schema, escopos, consentimento, limites, orçamento, prazo e idempotência. Retorno tipado com estado, evidência e custo quando disponível. Erros estáveis: argumento inválido, não autenticado, proibido, limite excedido, timeout, dependência indisponível, conflito e erro interno. Nunca revelar segredos ou detalhes internos.

## 4. Segredos e ambientes
Credenciais são referenciadas por identificador seguro, nunca gravadas em cadastro, prompt, log, argumentos persistidos ou Git. O Chaveiro é o papel conceitual reservado à gestão de segredos; permissões operacionais precisam ser definidas em V16/V17. Separar desenvolvimento, teste/sandbox e produção. Aprovação de versão não aprova versão ou escopo futuro.

## 5. Confiabilidade e testes
Declarar timeout, retry com backoff, concorrência, rate limit, circuit breaker, idempotência e compensação. Retry apenas em falhas transitórias e quando seguro. Testar schema, entrada maliciosa, autenticação, escopo, segredo exposto, timeout, duplicidade, idempotência, custo, indisponibilidade, retorno inválido, revogação e efeito externo.

## 6. Critérios de aceite e pendências
Habilitação exige proprietário, contrato, análise de risco, escopos, ambiente de teste, evidência e mecanismo de suspensão. Pendências: schema canônico, escala de risco, sandbox, formato de referência segura e alçada de aprovação por efeito. Catálogo não significa ferramenta aprovada ou pronta.
