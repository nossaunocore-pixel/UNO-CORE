# EOU-V24 — Especificação técnica de Empregabilidade

- Revisão documental: 0.3.0
- Estado: proposta técnica; não constitui agência de emprego ou empregador por si só
- Dependências: V09, V13, V16–V18, V20, V21, V25–V29, V31, V39

## 1. Finalidade e limites
Conectar pessoas, profissionais, organizações e oportunidades, reconhecendo capacidades formais e informais e apoiando formalização. Cada fluxo define se UNO atua como diretório, intermediador, prestador ou contratante; termos não afastam vínculo que resulte dos fatos.

## 2. Modelo lógico
ProfessionalProfile(id, person_id, visibility, summary, availability).
SkillClaim(id, person_id, capability_ref, evidence_ref, verification_state, validity).
WorkOpportunity(id, organization, role_or_service, location, terms, requirements, status).
Application(id, opportunity, applicant, status, consent_ref, created_at).
Proposal(id, parties, scope, price, schedule, terms_version, status).
WorkAgreement(id, parties, legal_type_review, obligations, validity, document_ref).
WorkOrder(id, agreement, task, responsible, due_at, status).
DeliveryEvidence(id, work_order, evidence, accepted_by, timestamp).
PaymentRef(id, agreement, V25_reference, status).
Dispute(id, agreement, claimant, reason, evidence, resolution).

## 3. Habilidades e qualificação
Separar autodeclaração, portfólio, referência, documento, verificação por emissor e habilitação profissional. Atividade regulamentada exige evidência e validação competentes. Perfil público não expõe documento, endereço ou contato sem autorização. Expiração de licença suspende elegibilidade para tarefa que a exige.

## 4. Matching e equidade
Matching considera requisito objetivo, capacidade, território, disponibilidade, preferência e acessibilidade; deve ser explicável, auditável e contestável. Não inferir características sensíveis ou usar proxies discriminatórios. Não ocultar oportunidades por critérios não informados. Recomendação não é decisão de contratação.

## 5. Jornada e responsabilidades
Cadastro → capacidade → descoberta → candidatura/contato → seleção humana pelo responsável → proposta → revisão/aceite contratual → execução → evidência → aceite → pagamento via V25 → avaliação/disputa. Identificar quem contrata, supervisiona, fornece ferramentas, assume risco, paga e responde por segurança.

## 6. Formalização e proteção
Oferecer informação e encaminhamento a serviços contábeis/jurídicos para formalização adequada, sem prometer enquadramento. Avaliar legislação trabalhista, previdenciária, fiscal, saúde e segurança ocupacional conforme fatos. Proteger contra fraude, exploração, discriminação, assédio e retenção indevida de documentos.

## 7. Privacidade e reputação
Currículo, histórico e avaliações têm finalidade e visibilidade definidas. Permitir correção e contestação; não tornar avaliação unilateral e irreversível. Dados de candidatura são compartilhados apenas com destinatários e finalidade informados.

## 8. Testes e aceite
Testar matching explicável, requisito obrigatório, licença vencida, candidatura duplicada, seleção, contrato, cancelamento, entrega, pagamento, disputa, discriminação, acesso de contratante e retenção. Aceite requer política de matching, contratos, fluxo financeiro e revisão trabalhista/jurídica.

## 9. Pendências
Definir categorias do piloto, papel da UNO, onboarding de empresas, validação de capacidades, política de remuneração/comissão, fluxo de formalização e regras de disputa.
