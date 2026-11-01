# EOU-V30 — Especificação técnica de Eventos

- Revisão documental: 0.3.0
- Estado: proposta técnica; interface Lazer não comprova inscrição/ingresso operacional
- Dependências: V13, V15, V16, V17, V18, V20, V21, V25, V28, V31, V39, V40

## 1. Fronteira e modelo
Evento descreve ocorrência organizada com tempo, local/ambiente, organizador, programação e condições. Edição é uma realização específica; sessão/atividade compõe agenda; ingresso/reserva é direito de acesso separado; pagamento segue V25/V18. Evento gratuito também pode exigir inscrição por capacidade/segurança.

Event(id, organizer_entity, title, purpose, category, lifecycle_state, visibility, territory, timezone).
EventEdition(id, event_id, starts_at, ends_at, venue_ref, capacity, age_policy, accessibility, safety_plan_ref).
EventSession(id, edition_id, title, starts_at, ends_at, capacity, host_ref).
EventPublication(id, edition_id, reviewer, published_at, version, public_projection_ref).
Registration(id, edition_id, participant_id, status, created_at, cancellation_at, consent_ref).
Ticket(id, registration_id, ticket_type, credential_ref, payment_ref, status).
Attendance(id, ticket_or_registration, checkin_at, checker, method, status).
EventOccurrence(id, edition_id, category, severity, responsible, response_ref).
Cancellation(id, edition_id, reason_code, decided_by, refund_policy_ref, notification_status).

## 2. Estados e publicação
Rascunho → submetido → em revisão → publicado → inscrições abertas → lotado/encerrado → em andamento → realizado; estados alternativos suspenso/cancelado. Publicação exige organizador verificado conforme risco, horário/fuso, local, acessibilidade, capacidade, classificação etária, preço/condições, política de cancelamento e contato responsável. Não exibir licença, segurança ou aprovação sem evidência verificada.

## 3. Tempo e localização
Persistir timestamps em UTC e timezone IANA do evento; apresentar horário local e mudança de fuso explicitamente. Validar início/fim, sessões sobrepostas, horário de verão e atualização. Local pode ser endereço privado enviado apenas a inscritos; não publicar residência/local sensível sem autorização.

## 4. Inscrição, capacidade e ingresso
Operação deve ser transacional: reservar vaga com expiração; confirmar inscrição; emitir credencial única; liberar reserva expirada; evitar overselling sob concorrência. Ingresso pago usa provedor V25 e reconciliação; não confirmar ingresso somente pelo retorno do browser. Reembolso/cancelamento exige regra e registro. Check-in idempotente e proteção contra screenshot/replay conforme risco.

## 5. Segurança, menores e acessibilidade
Organizador é responsável pelo evento conforme termos e legislação. Requisitos de licença, segurança, seguro, lotação e emergência variam por tipo/localidade e precisam de revisão jurídica. Política para menores, responsável legal, imagem, comunicação e dados de participantes deve ser específica. Acessibilidade inclui informação verificável sobre local, recursos e limitações.

## 6. Moderação e integridade
Canal de denúncia, análise, suspensão e contestação. Prevenir evento fraudulento, ingresso duplicado, falsa afiliação institucional, assédio, revenda proibida e scraping de participantes. Logs não expõem lista de inscritos a outros participantes.

## 7. Integração
V28 representa organizadores, locais e fornecedores; V18 catálogo/oferta; V25 pagamento/reembolso; V31 inscrição/check-in/cancelamento; V20 território; V21 formação quando curso/aula. O read model público mostra somente eventos publicados e campos autorizados.

## 8. Testes e aceite
Testar timezone, lotação concorrente, reserva expirada, duplicidade, credencial copiada, check-in repetido, pagamento pendente, reembolso, cancelamento, organizador revogado, evento suspenso, privacidade e dados de menores. Aceite exige fluxo ponta a ponta, conciliação, plano de segurança proporcional, política de publicação e testes de carga.

## 9. Pendências
Taxonomia e níveis de risco; política de menores/imagem; responsabilidade por licenças; integração de tickets; reembolso e chargeback; padrão de acessibilidade; política de moderação e tratamento de eventos espontâneos.
