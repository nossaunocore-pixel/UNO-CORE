# EOU-V26 — Especificação técnica de Identidade Digital

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; não declara autenticação federada operacional
- Dependências: V03, V13, V16, V17, V27, V28, V36

## 1. Fronteiras conceituais
Identidade digital responde “quem é o sujeito no ecossistema”; autenticação comprova controle de um autenticador; autorização decide o que o sujeito pode fazer; perfil descreve atributos e preferências; entidade representa pessoa ou organização no domínio. Uma prova de autenticação não concede permissão.

- IDU é o identificador canônico UNO da pessoa, opaco, estável e não semântico.
- UID/subject do provedor identifica a conta no provedor e permanece como vínculo externo.
- Credencial é autenticador; sessão/token é prova temporária.
- Perfil e entidade não são credenciais.
- Identidades técnicas de agentes, serviços e organizações não reutilizam IDU pessoal.

## 2. Modelo lógico proposto
PersonIdentity(idu, lifecycle_state, created_at, closed_at).
ExternalIdentityLink(id, idu, issuer, subject, provider, assurance, linked_at, verified_at, status).
Authenticator(id, idu, type, provider_ref, enrolled_at, last_used_at, status).
IdentityProof(id, idu, proof_type, issuer, scope, verified_at, expires_at, evidence_ref).
RecoveryCase(id, idu, channel, status, risk_level, opened_at, resolved_at, reviewer).
SessionRecord(id, idu, issuer, device_ref, created_at, expires_at, revoked_at).
IdentityEvent(id, idu, event_type, actor_ref, correlation_id, timestamp, evidence_ref).

Índices únicos: IDU; (issuer, subject) para vínculo ativo. Não usar e-mail/telefone como chave de identidade. Esquemas finais dependem de V13.

## 3. Provisionamento e vinculação
Fluxo idempotente: validar token e emissor; resolver subject; procurar vínculo ativo; se houver, recuperar IDU; se não houver, verificar política de criação e conflitos; emitir IDU por serviço confiável; persistir vínculo com unicidade transacional; criar perfil separado em V27; registrar evento. Corrida de duas primeiras autenticações deve resultar em uma única identidade.

Vincular novo provedor exige autenticação recente e prova de controle do provedor novo; para conta existente, confirmação por canal já confiável ou revisão reforçada. E-mail coincidente sozinho nunca funde identidades. Conflitos, conta reivindicada ou evidência contraditória vão para revisão humana.

## 4. Firebase, Supabase e visitantes
No desenho UNO atual, Firebase Auth é o provedor planejado para autenticação Google e identidade; Supabase armazena dados de aplicação e atende navegação pública. IDU é a chave canônica de domínio, sem substituir o subject Firebase. Supabase Anonymous Auth identifica sessão pública limitada, não pessoa verificada nem titularidade de dados pessoais.

A ponte Firebase→Supabase (Third-Party Auth ou mecanismo aprovado) precisa validar issuer/audience/assinatura e mapear IDU de forma confiável. Até configuração e testes, não declarar SSO, claims ou RLS baseados em IDU como ativos. Visitante anônimo não recebe IDU persistente por inferência.

## 5. Recuperação, autenticação reforçada e revogação
Recuperação considera risco do canal, idade da sessão, mudanças recentes, sinais de takeover e acesso a fatores alternativos. Mudança de e-mail/telefone, perda de autenticador e vinculação de novo provedor são eventos de alto risco. Aplicar atraso/notificação/revisão conforme política a definir. MFA/passkeys são opções recomendadas para contas privilegiadas; política e disponibilidade precisam ser confirmadas.

Revogar sessão e refresh tokens quando houver suspeita, perda de dispositivo, desligamento ou revogação de vínculo. Grants de autorização são revistos separadamente em V17. Encerrar identidade não apaga automaticamente registros cuja retenção seja legalmente necessária; aplicar política de retenção de V13/V39.

## 6. Privacidade e proteção
Guardar somente atributos necessários. Restringir IDU em URLs, logs e telas públicas. Separar prova/documentos de atributos públicos; armazenar evidências com acesso mínimo e prazo. Registrar finalidade, base legal, consentimento quando aplicável, retenção, correção, exportação e eliminação. Tratar dados biométricos e de menores com proteção reforçada e revisão jurídica.

## 7. Eventos e APIs
Operações conceituais: provisionar, consultar vínculo próprio, iniciar vinculação, confirmar vínculo, remover vínculo, abrir recuperação, revogar sessão, suspender identidade e encerrar. Eventos: identity.provisioned, link.added/removed, recovery.opened/resolved, session.revoked, identity.suspended/closed. APIs V14 devem ser idempotentes, não enumeráveis e protegidas por autenticação/escopo.

## 8. Testes e critérios de aceite
Testes: token inválido/expirado, issuer/audience incorretos, subject repetido, corrida de provisionamento, e-mail coincidente sem prova, vínculo removido, takeover, recuperação fraudulenta, sessão revogada, IDU ausente/duplicado, usuário anônimo tentando acessar área privada, cross-environment e vazamento em logs.

Aceite: política de emissão IDU aprovada; unicidade transacional; vinculação/recuperação testadas; revogação efetiva; integração Firebase/Supabase testada em ambiente isolado; RLS validada; trilha auditável; revisão de privacidade/jurídica. Até lá, identidade federada permanece parcialmente preparada.

## 9. Decisões pendentes
Autoridade emissora do IDU e formato opaco; política de recuperação e MFA; nível de garantia por ação; provedores futuros (WhatsApp não é automaticamente autenticador); retenção e encerramento; tratamento de duplicidades legadas; e procedimento de sucessão/acesso institucional.
