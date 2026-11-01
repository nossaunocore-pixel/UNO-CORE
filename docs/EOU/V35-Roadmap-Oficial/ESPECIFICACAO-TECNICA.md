# EOU-V35 — Especificação técnica do Roadmap Oficial

- Revisão documental: 0.3.0
- Estado: proposta técnica; marcos não equivalem a compromissos de lançamento
- Dependências: V17, V29, V31, V34, V36, V38, V39, V40

## 1. Contrato
Roadmap é portfólio priorizado de resultados e capacidades, não calendário de promessas. Cada item distingue hipótese, proposta, aprovado, em execução, bloqueado, entregue e validado em operação. Entrega documental, código, CI, preview, produção e adoção real são evidências diferentes.

## 2. Modelo lógico
Roadmap(id, horizon, owner, version, status).
RoadmapItem(id, roadmap_id, title, outcome, scope, exclusions, product_version, eou_refs, owner, priority, status, target_window).
Dependency(id, source_item, target_item, type, blocking, owner, due_at, mitigation).
Milestone(id, item_id, acceptance_criteria, evidence_required, approver, status).
Risk(id, item_id, category, probability, impact, mitigation, owner, review_date).
CapacityPlan(id, team_or_resource, period, available_capacity, committed_capacity).
ReleaseRecord(id, item_id, commit_sha, ci_run, artifact, environment, approval, deployment_ref).
OutcomeMetric(id, item_id, metric, formula, baseline, target, observed, source, period).

## 3. Priorização
Pontuar valor comunitário, urgência, risco reduzido, dependências, custo, capacidade, inclusão, sustentabilidade e reversibilidade. Não usar score único sem critérios transparentes. Segurança, privacidade, integridade e obrigações legais são gates, não trade-offs livremente compensáveis por valor comercial.

## 4. Estados e gates
Ideia → descoberta → proposta → priorizado → aprovado → planejado → execução → validação → entregue → observado/encerrado. Bloqueio registra causa, dono e condição de desbloqueio. Cancelamento registra aprendizado e compromissos. Mudança material reabre avaliação de impacto.

## 5. Produto, EOU e releases
Versões V5/V6/V7/V8 são ciclos de produto; volumes V01–V40 são domínios documentais. Roadmap referencia ambos sem confundi-los. Release exige commit exato, CI da cabeça, artefato, ambiente, migrations, evidência de smoke test, riscos e autorização. Preview não é produção; deploy não é prova de operação comunitária.

## 6. Piloto territorial
Definir território e população de referência, necessidades verificadas, instituições e serviços, profissionais/capacidades, canais de suporte, proteção de dados, protocolo de incidentes, custo operacional e indicadores. Expandir somente quando suporte, qualidade, segurança e sustentabilidade estiverem dentro de limites aprovados. Métricas incluem resolução, tempo, inclusão, confiança e participação, sem ranquear dignidade individual.

## 7. Comunicação e transparência
Publicar somente status verificável, critérios, responsáveis e limitações. Estimativas e metas são rotuladas. Não divulgar dados pessoais, riscos exploráveis ou informações institucionais restritas.

## 8. Testes e aceite
Testar dependência circular, marco sem dono, aceite sem evidência, CI de SHA diferente, ambiente incorreto, orçamento/capacidade insuficiente, risco sem mitigação e status desatualizado. Aceite requer baseline, dependências, gates, evidências, responsáveis, indicadores e revisão periódica.

## 9. Pendências
Ratificar horizontes, governança de prioridade, orçamento, capacidade, métricas do bairro piloto, gates de release, responsáveis e critérios de expansão.
