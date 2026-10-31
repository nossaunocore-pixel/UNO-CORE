# EOU-V40 — Especificação técnica de Documentação Institucional

- Revisão documental: 0.3.0
- Estado: proposta técnica; atos oficiais dependem de autoridade, formalização e aprovação
- Dependências: V01, V17, V34–V39

## 1. Contrato institucional
Documentação institucional registra identidade, propósito, história, estrutura, compromissos, programas, resultados e comunicação oficial. Deve separar: visão aspiracional; decisão interna aprovada; ato formalizado; compromisso público; capacidade implementada; resultado observado. Uma intenção não deve ser apresentada como parceria, cobertura, certificação ou resultado alcançado.

## 2. Modelo lógico
InstitutionalRecord(id, record_type, title, owner, status, confidentiality, jurisdiction, version).
MissionStatement(id, text, scope, approved_by, effective_at, review_at).
GovernanceBody(id, name, mandate, authority_ref, members, term, status).
InstitutionalRole(id, subject, role, scope, appointing_authority, valid_from, valid_until, revoked_at).
InstitutionalAct(id, act_type, parties, signer, authority_evidence, date, document_ref).
ProgramRecord(id, territory, objective, beneficiaries_definition, partners, resources, status).
PublicCommitment(id, statement, evidence_basis, approver, audience, publication_date, review_date).
ImpactReport(id, period, methodology, indicators, data_sources, limitations, reviewer, publication_status).
InstitutionalHistoryEvent(id, event_type, date, source_ref, confidence, correction_ref).
CommunicationAsset(id, channel, audience, version, approval, accessibility, status).

## 3. Autoridade e representação
Fundador, usuário comum, representante legal, administrador e porta-voz são papéis distintos. Toda delegação declara ato de origem, escopo, prazo, limites e revogação. Assinatura ou declaração em nome da entidade exige prova de poderes. Painel Mestre é privilégio técnico e não substitui poderes societários/legais.

## 4. Identidade e estrutura
Manter nome institucional, nome jurídico, marcas, produtos, entidades controladas, iniciativas e projetos separados. Organograma representa relações e responsabilidades vigentes, não cria poderes. Alterações societárias, sucessão, representação e uso de marca devem referenciar documentos V39.

## 5. História, memória e proveniência
Preservar fonte original, data, autor, estado de confirmação e correções. Memória consolidada aponta para fontes e distingue decisão do fundador, proposta técnica, hipótese e fato externo. Não reescrever documento histórico para parecer que a decisão sempre existiu. Registros de conversa não substituem atos assinados.

## 6. Programa territorial e impacto
Cada programa registra território, necessidades observadas, método de escuta, parceiros confirmados, recursos, equipe, serviços, indicadores, resultados e limitações. Não divulgar nomes/dados de beneficiários sem base e autorização. Relatório de impacto declara período, metodologia, fonte, denominadores, viés e limitações. Crescimento deve respeitar capacidade operacional, suporte, segurança e inclusão.

## 7. Comunicação pública e marca
Toda mensagem pública tem público, finalidade, autor, aprovador, versão e evidência. Promessas comerciais e institucionais precisam corresponder à capacidade real. Crise/incidente possui porta-voz e protocolo. Materiais devem ser acessíveis, claros e não discriminatórios. Diferenciar UNO CORE, empresa titular, produtos e futuras entidades.

## 8. Transparência e prestação de contas
Publicar governança, critérios, uso de recursos, indicadores e resultados quando cabível, preservando privacidade e segurança. Corrigir informação material de modo rastreável. Não publicar parceria ou endosso sem autorização da contraparte.

## 9. Testes e aceite
Testar autoridade de assinatura, delegação expirada, confusão entre nome jurídico e marca, afirmação sem evidência, relatório sem metodologia, parceiro não confirmado, dado pessoal, histórico editado e documento vencido. Aceite exige matriz de documentos, autoridades, aprovações, proveniência, revisão jurídica e canal oficial.

## 10. Pendências
Formalizar missão e atos; validar estrutura societária e nomes jurídicos; aprovar organograma e delegações; criar políticas institucionais; definir porta-vozes, marca, critérios do piloto, indicadores e relatório de impacto; validar documentos com V39 antes de publicação.
