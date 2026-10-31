# EOU-V22 — Especificação técnica de Saúde

- Revisão documental: 0.3.0
- Estado: proposta técnica com risco elevado; não habilita cuidado clínico, diagnóstico ou prontuário
- Dependências: V13, V15–V18, V20, V23, V24, V26–V28, V31, V39, V40

## 1. Limite clínico e finalidade
V22 pode organizar diretórios, informações verificadas, campanhas, encaminhamentos administrativos e acesso a serviços. Não autoriza diagnóstico, prescrição, triagem clínica autônoma, telemedicina, prontuário ou decisão clínica. Serviços assistenciais exigem profissionais/instituições habilitados, responsabilidade técnica, contratos, consentimento e revisão regulatória.

## 2. Modelo lógico restrito
HealthProvider(id, entity_ref, registration_evidence, responsible_professional, status).
HealthService(id, provider, category, description, eligibility, source, updated_at).
AppointmentReferral(id, requester, provider, service, status, consent_ref, external_protocol).
HealthDataRequest(id, subject, purpose, categories, legal_basis_review, status).
ClinicalRecordRef(id, issuer, subject, external_reference, access_policy, retention_ref).
Campaign(id, organizer, purpose, audience, evidence, validity, status).
EmergencyGuidance(id, jurisdiction, official_channel, source, reviewed_at).

Dados clínicos não devem ser introduzidos em modelos genéricos de perfil ou memória. O modelo acima é conceitual e não especifica prontuário.

## 3. Classificação e acesso
Dados de saúde são sensíveis. Minimizar coleta e manter segregação reforçada por titular, instituição e finalidade. Acesso por profissional requer vínculo, habilitação, finalidade assistencial, consentimento/base legal adequada e auditoria. Agentes não podem tomar decisão clínica, prescrever ou alterar registro clínico.

## 4. Informação pública e emergência
Diretórios indicam fonte, data, jurisdição e limites. Horários/disponibilidade não são em tempo real sem integração. Em emergência, encaminhar para canais oficiais locais atualizados; não substituir serviço de urgência nem atrasar procura de atendimento. Orientações precisam de revisão clínica e atualização.

## 5. Integração e fornecedores
Integração com prontuários, laboratórios, clínicas, operadoras ou sistemas públicos exige contrato, padrão técnico, base legal, avaliação de segurança, interoperabilidade e responsabilidade profissional. Não presumir acesso ou convênio. Provedores de IA não recebem dados clínicos sem avaliação e autorização específicas.

## 6. Segurança e incidentes
Criptografia, segregação, menor privilégio, trilha de acesso, gestão de chaves, backup/restore, monitoramento e resposta a incidente. Logs minimizam conteúdo clínico. Plano define contenção, avaliação de impacto e comunicação conforme obrigação. Teste com dados sintéticos, nunca prontuário real sem autorização.

## 7. Estado e maturidade
Tela demonstrativa ou catálogo não é serviço de saúde operacional. Antes de qualquer fluxo clínico, exigir revisão de conselho/profissionais competentes, jurídico, privacidade, segurança e regulação aplicável. Este documento não define aconselhamento médico.

## 8. Testes e aceite
Testar acesso cross-patient, profissional sem vínculo, finalidade inválida, consentimento revogado, exportação, exclusão/retention, vazamento em logs, prompt injection, provedor externo e incidentes. Aceite requer responsável técnico, base legal, controles, contrato, revisão clínica/jurídica e validação independente.

## 9. Pendências
Definir se MVP terá somente diretório/encaminhamento; responsáveis clínicos; fontes oficiais; base legal e retenção; políticas de emergência; acordos com instituições; e requisitos setoriais.
