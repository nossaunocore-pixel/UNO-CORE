# EOU-V39 — Especificação técnica de Documentação Jurídica

- Revisão documental: 0.3.0
- Estado: estrutura de engenharia; não é parecer, contrato pronto ou certificação de conformidade
- Dependências: V13, V15–V18, V21–V25, V28–V30, V34–V40

## 1. Objetivo e limite profissional
Manter inventário rastreável de questões, documentos, obrigações, aprovações e evidências jurídicas da UNO. A especificação organiza o trabalho e não substitui assessoria jurídica, contábil, fiscal ou regulatória. Nenhum texto gerado por IA deve ser publicado como instrumento definitivo sem revisão profissional competente.

## 2. Modelo lógico
LegalMatter(id, domain, jurisdiction, operation_ref, risk_level, owner, counsel_ref, status).
LegalDocument(id, type, version, jurisdiction, parties, purpose, status, effective_from, expires_at, reviewer, approver, source_ref).
Obligation(id, source, jurisdiction, applicable_operation, responsible_entity, owner, due_date, evidence_ref, status).
LegalAssessment(id, matter_id, assumptions, questions, conclusion_ref, reviewer, date, validity).
ConsentAndNotice(id, purpose, data_categories, legal_basis_assessment, notice_version, evidence_ref, revocation).
ContractRelation(id, parties, role, scope, term, termination, liability_ref).
LegalChange(id, source_change, impact, affected_docs, required_action, owner, status).
IncidentLegalReview(id, incident_ref, notification_assessment, deadlines, reviewer, outcome).

## 3. Mapa de operação e papéis
Para cada fluxo, mapear quem vende, presta, intermedeia, recebe, custodia, contrata, emprega, publica, modera, processa dados e responde por reembolso/garantia. Papel jurídico deve refletir operação real e contrato; rótulos em termos de uso não afastam responsabilidade legal de fato.

## 4. Matriz regulatória por domínio
- Privacidade: LGPD, bases legais, transparência, direitos, agentes de tratamento, compartilhamento, retenção, transferência internacional e incidentes.
- Consumo/marketplace: oferta, publicidade, fornecedor, informação, atendimento, garantia, cancelamento e responsabilidade.
- Trabalho/renda: intermediação, prestação autônoma, contratação e risco de vínculo conforme fatos.
- Financeiro: arranjo de pagamento, custódia, split, repasses, comissões, doações, KYC/AML, tributação e fiscalidade.
- Domínios sensíveis: saúde, educação, habitação, eventos, menores, acessibilidade, propriedade intelectual e uso de imagem.
A aplicabilidade depende da operação, jurisdição e fatos; não presumir enquadramento.

## 5. Ciclo de documento
Solicitação → levantamento de fatos → avaliação de risco → elaboração → revisão profissional → aprovação institucional → publicação/assinatura → monitoramento de vigência → revisão/renovação → encerramento/arquivo. Guardar versão, jurisdição, público, partes, aprovadores, evidência de aceite, data de vigência e histórico. Minutas e versões finais devem ser inequivocamente diferenciadas.

## 6. LGPD e dados
Criar inventário de operações de tratamento e mapa de fluxo de dados. Definir finalidade, base legal, minimização, titular, controlador/operador/suboperador, compartilhamento, retenção, direitos, segurança, transferências e incidentes. Avaliar necessidade de RIPD e controles especiais para dados sensíveis, menores, saúde, família e finanças. Consentimento não deve ser usado como base universal por conveniência.

## 7. Financeiro e relações contratuais
Revisar termos de pagamento, split, repasse, saque, comissões, doações, reembolso, chargeback, emissão fiscal e responsabilidades do provedor. Não prometer saldo disponível, liquidação, isenção tributária ou saque sem validação operacional e jurídica. Contratos com parceiros definem serviço, nível, responsabilidade, propriedade intelectual, dados, suporte, término e transição.

## 8. Evidências e auditoria
Relacionar documento a versão de interface, fluxo, API, provedor, entidade e release. Preservar prova de aceite, assinatura, comunicação e revisão. Acesso restrito; dados pessoais minimizados. Alterações de lei/termos acionam avaliação de impacto e atualização de documentos.

## 9. Testes e critérios de aceite
Testar consistência entre promessa, interface, contrato e operação; documentos vencidos; jurisdição errada; consentimento revogado; responsabilidade indefinida; fluxo financeiro sem avaliação; solicitação de titular; incidente com prazo; contrato encerrado e retenção. Aceite requer revisão profissional registrada e aprovação institucional.

## 10. Pendências
Mapear operações efetivas do MVP; definir assessoria jurídica; validar estrutura societária e papéis; elaborar documentos finais; avaliar LGPD/CDC/trabalho/financeiro/propriedade intelectual e requisitos setoriais; estabelecer calendário e responsável por atualização normativa.


## 12. Ciclo societário posterior à operação

A fase inicial da UNO é de construção, inauguração e operação; não inclui por si só comercialização de ações. A eventual fase societária posterior exige decisão expressa, escolha de tipo societário, estruturação dos direitos, avaliação, documentação e análise regulatória. Sociedade limitada e sociedade anônima não são intercambiáveis: quotas e ações possuem regimes distintos. Inauguração ou reconhecimento institucional não autoriza automaticamente oferta pública. Ver adendo do MEU-UNO-001.

