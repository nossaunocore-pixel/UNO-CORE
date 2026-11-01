# EOU-V27 — Especificação técnica de Usuários e Perfis

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; telas existentes não equivalem a persistência funcional
- Dependências: V13, V16, V17, V21–V26, V28, V36, V39

## 1. Separação de conceitos
Pessoa é titular; identidade V26 autentica; usuário é a participação da pessoa no produto; perfil agrega atributos e preferências; papel/grant concede escopo; associação a entidade é relação; condição pioneiro é estado/benefício de participação, não identidade civil. Fundador mantém contexto pessoal comum separado do contexto institucional privilegiado.

## 2. Modelo lógico proposto
UserAccount(id, idu, status, created_at, closed_at).
Profile(id, idu, display_name, bio, locale, accessibility_preferences, privacy_defaults, version).
ProfileAttribute(id, profile_id, key, value_ref, source, visibility, purpose, verified_state, updated_at).
UserRoleAssignment(id, idu, role, scope, valid_from, valid_until, granted_by, revoked_at).
Membership(id, idu, entity_id, relation_type, status, valid_from, valid_until).
ParticipationStatus(id, idu, status, benefit_plan_ref, started_at, expires_at).
ConsentRecord(id, idu, purpose, data_categories, recipient, legal_basis_ref, granted_at, revoked_at, evidence_ref).
Preference(id, idu, category, value, updated_at).
UserDataRequest(id, idu, request_type, status, received_at, completed_at).

Dados finais e relacionamentos dependem do modelo de V13/V28; não armazenar dados familiares como atributos livres do perfil.

## 3. Perfis e visibilidade
Cada atributo declara classificação, fonte, finalidade, titularidade, visibilidade, verificabilidade e retenção. Visibilidade: privado, compartilhado com sujeitos/entidades designados, comunidade/território ou público. Padrão privado; exceções devem ser explícitas. Diretório público utiliza projeção de campos permitidos, não serialização do perfil inteiro.

Preferências e acessibilidade são controladas pelo titular. A plataforma deve oferecer correção e explicação de origem. Informações declaradas pelo usuário não devem receber selo de verificação automática.

## 4. Tipos de acesso e participação
Visitante: navegação pública e conversa dentro de quotas; sem acesso a dados pessoais privados.
Usuário: sessão autenticada e IDU provisionado; acesso a recursos próprios e compartilhados conforme autorização.
Parceiro: usuário ou representante associado a entidade, com escopos de parceiro limitados à relação e ao contrato.
Equipe: grants administrativos específicos, temporários e auditáveis; “equipe” não é permissão universal.
Pioneiro/aderido: condição de participação e benefícios, conforme plano/termo aprovado; não amplia automaticamente acesso a dados ou painéis.
Fundador: papel institucional protegido em V17, separado do perfil e da navegação como usuário comum.

Papéis não devem ser mutuamente exclusivos quando a pessoa acumular relações legítimas. A interface pode selecionar contexto ativo, mas o servidor revalida o grant a cada operação sensível.

## 5. Casa, família e representação
Família é grupo/entidade V28, composto por pessoas distintas. Relação familiar não concede acesso automático a dados de outro membro. Representação requer fundamento, escopo, finalidade, prova e validade; revogação deve interromper acesso futuro. Menores e pessoas representadas exigem política específica e revisão jurídica. Não criar um “perfil familiar” que misture titularidades.

## 6. Ciclo de vida e portabilidade
Criar conta após identidade válida; criar perfil mínimo; completar atributos opcionalmente; associar entidade; alterar preferências; suspender; exportar/corrigir; encerrar. Exclusão de conta não significa apagar registros financeiros/auditáveis sujeitos a retenção. Definir anonimização, bloqueio e exclusão por categoria em V13/V39.

## 7. Segurança e abuso
Validar ownership no servidor; negar por padrão; proteger contra IDOR e enumeração; rate limit; consentimento específico; registrar mudanças de perfil, papéis e representação. Nunca confiar em role enviado pelo cliente. Operações de perfil não concedem grants administrativos.

## 8. Contratos e testes
APIs: consultar perfil próprio, atualizar campos permitidos, gerir visibilidade, preferências, consentimentos, associações e solicitações de dados. Testar visitante, usuário, parceiro, equipe, pioneiro e fundador em contextos separados; leitura cross-user; acesso familiar; consentimento revogado; campo privado em feed; alteração de papel via cliente; exportação/exclusão e acessibilidade.

Aceite exige schema, catálogo de atributos, projeções públicas, grants, consentimentos, trilha, política familiar, testes cross-user e fluxos de titular implementados. Estado V7: shells de Casa, Emprego e Renda, Carteira e Serviços Ativos não devem ser apresentados como dados persistidos ou operações reais.

## 9. Decisões pendentes
Campos mínimos do MVP; papel exato de parceiro; regra e prazo de pioneiro; política de perfil público; atributos acessíveis; associação familiar/representação; consentimento de menores; e retenção por categoria.
