# EOU-V33 — Especificação técnica do Motor Cognitivo

- Revisão documental: 0.3.0
- Estado: proposta técnica; não concede autonomia nem valida modelos/provedores automaticamente
- Dependências: V04, V09–V17, V26, V31, V32, V34, V36, V39

## 1. Fronteira e responsabilidade
Motor Cognitivo interpreta solicitações, recupera contexto permitido, planeja, seleciona modelo e ferramentas, valida saídas e apresenta recomendações ou ações propostas. Não é identidade, catálogo de agentes, executor de workflow nem autoridade institucional. V10 representa agentes; V11 ferramentas; V17 autorização; V31 fluxo; V32 gatilho; V33 raciocínio/seleção/avaliação; V34 integração sistêmica.

## 2. Pipeline de execução
1. Receber solicitação e criar correlation_id.
2. Identificar usuário/sessão, finalidade e domínio.
3. Classificar risco e dados; aplicar política antes de recuperar contexto.
4. Recuperar apenas fontes autorizadas e registrar proveniência.
5. Selecionar modelo/provedor aprovado, região e política de retenção.
6. Produzir plano estruturado e estimativa de custo/limites.
7. Para ferramenta, consultar catálogo V11 e autorização V17 no servidor.
8. Executar apenas se política permitir; exigir confirmação humana para efeitos definidos.
9. Validar resultado, evidências, schema e efeitos.
10. Responder ou devolver tarefa/decisão pendente; registrar métricas e auditoria.

## 3. Modelo lógico proposto
CognitiveRequest(id, actor, purpose, domain, risk_class, data_class, correlation_id).
ContextSource(id, source_type, owner, permission_ref, provenance, freshness, retention).
ModelProfile(id, provider_service_ref, model_id, version, allowed_data_classes, region, cost_profile, status).
RoutingPolicy(id, task_type, risk_class, candidate_profiles, constraints, fallback_policy, approval_ref).
Plan(id, request_id, steps, tool_refs, estimated_cost, expiry, status).
EvaluationRun(id, model_profile, test_suite, scorecard, evidence_ref, reviewer, timestamp).
CognitiveExecution(id, request_id, plan_ref, model_profile, token_usage, latency, cost, outcome, safety_flags).
HumanDecision(id, execution_id, decision_type, approver, scope, evidence_ref, timestamp).

## 4. Sinergia e roteamento
A visão Sinergia permite combinar provedores e motores especializados. Roteamento considera qualidade comprovada para tarefa, segurança, privacidade, região, latência, custo, disponibilidade e portabilidade. Não selecionar por nome comercial ou marketing. Fallback só usa perfil aprovado para a mesma classe de dados/finalidade; indisponibilidade não autoriza relaxar controles.

## 5. Contexto e memória
Separar contexto transitório, memória pessoal autorizada, memória institucional, documentos e dados operacionais. Cada fonte tem proprietário, finalidade, permissão, validade e mecanismo de correção. Recuperação deve minimizar conteúdo e respeitar tenant/IDU. Não transformar conteúdo recuperado em instrução de política. Não persistir cadeia de pensamento privada; registrar plano resumido, decisões verificáveis, ferramentas, evidências e resultado.

## 6. Segurança e autonomia
Defesa contra prompt injection direto/indireto, tool hijacking, exfiltração, contaminação de memória, jailbreak, escalada e saída insegura. Limitar passos, tokens, chamadas, custo, tempo e concorrência. Planejar não é executar. Autonomia é definida por V10/V17 e missão; nenhuma política do motor pode ampliar grant. Ações financeiras, jurídicas, administrativas, públicas ou irreversíveis seguem aprovação humana do domínio.

## 7. Avaliação e observabilidade
Scorecards por tarefa: factualidade, utilidade, cobertura, calibração, robustez, segurança, privacidade, viés, custo e latência. Versionar modelo, política, prompt operacional, ferramentas, dataset e resultado. Monitorar drift, regressão, incidentes, fallback e intervenção humana. Amostras para avaliação devem ser minimizadas e autorizadas.

## 8. Testes e aceite
Testar injection, instruções conflitantes, conteúdo malicioso recuperado, vazamento cross-user, fonte desatualizada, modelo indisponível, fallback proibido, ferramenta fora da allowlist, orçamento excedido, output inválido, ação sem confirmação, dados sensíveis enviados a provedor não autorizado e retenção incorreta.

Aceite exige inventário de modelos, scorecards, política de dados, roteamento reproduzível, limites, autorização, trilha e testes adversariais. A existência de API key não significa provedor aprovado.

## 9. Pendências
Ratificar classes de risco/dados; política de memória; provedores e modelos permitidos por finalidade; critérios de Sinergia; avaliação contínua; limites de custo; região/retention; e governança de prompts e datasets.
