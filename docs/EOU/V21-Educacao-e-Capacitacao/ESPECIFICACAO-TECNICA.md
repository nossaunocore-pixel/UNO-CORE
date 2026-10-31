# EOU-V21 — Especificação técnica de Educação e Capacitação

- Revisão documental: 0.3.0
- Estado: proposta técnica; não constitui instituição de ensino nem habilita certificação
- Dependências: V09, V13, V16–V18, V20, V24, V27, V28, V30, V31, V39

## 1. Fronteira
V21 conecta pessoas a ofertas educacionais e trilhas; instituição competente mantém autoridade acadêmica, matrícula oficial, avaliação e emissão de credencial quando aplicável. Catálogo UNO não equivale a credenciamento ou reconhecimento de curso.

## 2. Modelo lógico
EducationProvider(id, entity_ref, accreditation_evidence, status).
LearningOffer(id, provider, course_ref, format, prerequisites, workload, price, terms_version, status).
CourseEdition(id, offer_id, schedule, timezone, capacity, instructors, location).
Enrollment(id, learner_id, edition_id, status, consent_ref, confirmation_ref).
LearningActivity(id, enrollment_id, activity, completion_state, evidence_ref).
Assessment(id, learner_id, rubric, evaluator, result_ref, status).
Credential(id, issuer, learner_id, type, external_verification_ref, issued_at, revoked_at).
Scholarship(id, sponsor, criteria, benefit, validity, decision_ref).

## 3. Descoberta e matrícula
Publicar responsável, conteúdo, objetivos, carga horária, formato, pré-requisitos, acessibilidade, preço, política de cancelamento, validade e situação de reconhecimento quando aplicável. Matrícula é confirmada somente pela instituição ou mecanismo contratual. Vagas usam reserva com expiração e controle concorrente.

## 4. Aprendizagem e credenciais
Separar participação, presença, avaliação, conclusão e certificado. A instituição emissora é fonte de verdade da credencial; verificação usa endpoint ou referência confiável. Upload de PDF não comprova autenticidade. Reconhecer aprendizagem informal pode gerar portfólio/evidência, mas não título acadêmico automático.

## 5. Menores e proteção
Dados de menores, imagem, desempenho e contato requerem salvaguardas, transparência e avaliação jurídica. Perfis de aluno não são públicos por padrão. Acesso de responsáveis deve respeitar representação e melhor interesse, sem abrir dados de outros membros.

## 6. Acessibilidade e inclusão
Ofertas informam formato, recursos, conectividade, idioma, acessibilidade física/digital e alternativas. Não prometer acessibilidade sem confirmação do provedor. Suporte humano e alternativas de baixo consumo de dados são considerados.

## 7. Financeiro e contratos
Preço, bolsa, pagamento, reembolso e comissão seguem V18/V25 e contratos. A UNO não assume papel de instituição emissora sem autorização e estrutura. Dados de desempenho não são usados para publicidade incompatível.

## 8. Testes e aceite
Testar provider suspenso, matrícula duplicada, lotação, cancelamento, avaliação, credencial revogada, verificação externa, consentimento, menores, acessibilidade e isolamento. Aceite exige acordo, fonte confiável, workflow, privacy review e testes ponta a ponta.

## 9. Pendências
Definir oferta inicial, parceiros, critérios de verificação, modelo de matrícula, política de menores, reconhecimento de aprendizagem, bolsas, pagamentos e responsabilidade institucional.
