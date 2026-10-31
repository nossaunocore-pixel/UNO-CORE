# EOU-V29 — Especificação técnica de Projetos

- Revisão documental: 0.3.0
- Estado: proposta técnica; não habilita gestão financeira ou execução de projetos
- Dependências: V09, V13, V17, V18, V20, V24, V25, V28, V31, V32, V35, V36, V39, V40

## 1. Fronteira e contrato
Projeto é iniciativa temporária ou contínua com objetivo, escopo, responsáveis, recursos, prazo, entregas e critérios de resultado. Programa agrupa projetos; portfólio organiza prioridades. Proposta não é projeto aprovado; aprovação não libera dinheiro; orçamento planejado não é saldo; despesa prevista não é pagamento confirmado.

## 2. Modelo lógico proposto
Project(id, type, title, sponsor_entity, owner_entity, accountable_subject, territory, purpose, lifecycle_state, current_version).
ProjectVersion(id, project_id, version, scope, objectives, assumptions, schedule, baseline_ref, change_reason).
ProjectMembership(id, project_id, subject_or_entity, role, scope, start, end, status).
ProjectDeliverable(id, project_id, description, owner, due_at, acceptance_criteria, status, evidence_ref).
ProjectMilestone(id, project_id, name, due_at, status, dependency_ref).
ProjectBudget(id, project_id, currency, ceiling, approved_amount, funding_source, approval_ref, validity).
ProjectCost(id, project_id, category, amount, currency, supplier_ref, evidence_ref, approval_ref, reconciliation_state).
ProjectRisk(id, project_id, category, probability, impact, mitigation, owner, status).
ProjectMetric(id, project_id, definition, baseline, target, observed, period, evidence_ref).
ProjectDecision(id, project_id, decision, authority_ref, rationale_code, evidence_ref, timestamp).
ProjectChange(id, project_id, change_type, before_ref, after_ref, impact, approval_ref, status).

## 3. Ciclo de vida e gates
Ideia → proposta → triagem → avaliação → aprovado/rejeitado → planejado → execução → monitoramento → concluído/cancelado. Cada gate possui critérios, aprovador V17, evidências e resultado. Aprovação condicionada explicita condições e prazo. Projeto suspenso não aceita novas despesas/execuções, salvo medidas de segurança autorizadas.

## 4. Baseline, orçamento e mudança
Baseline registra escopo, prazo, custo e resultados aprovados. Alteração material cria nova versão e análise de impacto; nunca reescreve baseline anterior. V25 é fonte de verdade financeira; V29 guarda orçamento autorizado, referências e prestação de contas, sem criar ledger paralelo. Despesa exige alçada, documento, classificação e conciliação; valores estimados são rotulados como estimativas.

## 5. Prestação de contas e transparência
Cada projeto declara fonte de recursos, beneficiários/território, responsável, entregas, indicadores, conflitos de interesse e prestação de contas. Projeção pública inclui apenas dados aprovados; dados de beneficiários, fornecedores e equipe respeitam privacidade. Participação comunitária não expõe dados pessoais ou votos individuais.

## 6. Riscos e encerramento
Riscos legais, financeiros, operacionais, ambientais, sociais, reputacionais, segurança, fornecedor e dependência. Encerramento inclui aceite de entregas, conciliação, saldos/obrigações, devolução de recursos quando aplicável, arquivo de evidências, lições aprendidas e retenção. Cancelamento registra motivo, compromissos e comunicação.

## 7. Integração
V28 identifica patrocinador/executor; V09 capacidades necessárias; V17 aprova alçadas; V31 executa workflow; V32 agenda automações; V25 registra transações; V20 fornece contexto territorial; V35 consolida roadmap. Integrações devem usar IDs e referências, sem duplicar a fonte de verdade.

## 8. Segurança, auditoria e testes
Isolar projetos por organização/território; validar membership no servidor; impedir alteração retroativa de custos e aprovações; registrar versões e decisões. Testar proposta sem aprovação, orçamento acima do limite, conflito de interesse, alteração de baseline, custo duplicado, membro removido, evidência ausente, projeto suspenso e acesso cross-tenant.

## 9. Aceite e pendências
Aceite requer workflow, baseline/versionamento, grants, integração V25, evidências, métricas, projeção pública, auditoria e testes. Pendências: templates por tipo, metodologia de impacto, critérios de priorização, política de patrocínio, limites de alçada, indicadores comunitários e prestação de contas pública.
