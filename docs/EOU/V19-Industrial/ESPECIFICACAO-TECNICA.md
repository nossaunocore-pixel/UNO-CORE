# EOU-V19 — Especificação técnica de Industrial

- Revisão documental: 0.3.0
- Estado: proposta técnica de domínio; não implementa nem autoriza controle industrial
- Dependências: V09, V12–V15, V16–V18, V20, V24, V28, V29, V31, V39

## 1. Limite de responsabilidade
V19 organiza dados e coordenação de capacidade produtiva, manutenção, fornecedores, serviços e oportunidades industriais. Controle de processo, automação OT, PLC/SCADA, segurança funcional e comando de máquinas não fazem parte do escopo padrão UNO. Qualquer integração OT exige projeto específico, aprovação do operador, segmentação, avaliação de risco e especialistas habilitados.

## 2. Modelo lógico
IndustrialSite(id, entity_ref, territory, owner, status, verification).
ProductionAsset(id, site_id, asset_type, criticality, owner, maintenance_owner).
ProcessCapability(id, site_id, description, capacity_unit, declared_capacity, availability, evidence_ref).
Material(id, supplier_ref, specification, hazard_class, traceability_ref).
WorkOrder(id, site_id, requester, executor, scope, priority, state, approval_ref).
MaintenanceRecord(id, asset_id, activity, technician, date, evidence, next_due).
QualityInspection(id, order_ref, criteria, result, inspector, evidence_ref).
IndustrialIncident(id, site_id, asset_ref, severity, containment, report_ref).
WasteStream(id, site_id, category, quantity, destination, compliance_evidence).
LogisticsMovement(id, order_ref, carrier, route_ref, custody_events).

## 3. Fluxos de negócio
Cadastro e verificação de unidade; declaração de capacidade; solicitação de cotação; seleção de fornecedor; ordem de serviço; planejamento; execução pelo operador responsável; inspeção/aceite; manutenção; logística e encerramento. Cada etapa define autoridade, evidência e responsabilidade.

## 4. Dados e confidencialidade
Separar informação pública, comercial confidencial e crítica de segurança. Localização detalhada, capacidade, gargalos, inventário, vulnerabilidades e dados de produção são restritos por organização/unidade. Diretório público usa projeção aprovada. Dados de terceiros exigem contrato/finalidade.

## 5. Integrações
ERP/MES/CMMS/IoT conectados por adaptadores V14/V15; escopos mínimos, sandbox, limites e revogação. Não abrir conectividade direta de internet a redes OT. Preferir exportações/integrações unidirecionais quando adequadas. Nenhum agente cognitivo envia comando a ativo físico.

## 6. Segurança e continuidade
Threat model inclui ransomware, movimento lateral, sabotagem, indisponibilidade e alteração de telemetria. Separar IT/OT, aplicar allowlist, MFA, logging, backups, gestão de fornecedor e plano de resposta. Intervenção física é sempre responsabilidade do operador competente.

## 7. Testes e aceite
Testar isolamento entre plantas, autorização por unidade, integridade de ordens, origem de telemetria, assinatura de integração, revogação, falha de rede, backup e incidente. Testes OT são executados em ambiente representativo e por equipe especializada, nunca em equipamento crítico sem autorização.

## 8. Pendências
Escolher caso de uso informacional do piloto; definir taxonomia de ativos/capacidade; regras de confidencialidade; responsabilidade contratual; padrão de integração; e critérios para eventual projeto OT independente.
