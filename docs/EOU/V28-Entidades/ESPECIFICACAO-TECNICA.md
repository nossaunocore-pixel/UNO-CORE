# EOU-V28 — Especificação técnica de Entidades

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; taxonomia depende de ratificação editorial
- Dependências: V03, V09, V13, V16, V17, V18–V25, V26, V27, V36, V39

## 1. Fronteira com V03 MUE
V03 define o meta-modelo universal: entidade, identidade, atributo, relação, evento e ciclo de vida. V28 define o catálogo aplicado de tipos UNO, especializações, regras de titularidade, representação e validação. V28 não deve duplicar o meta-modelo nem criar um segundo sistema de identidade. A fronteira é proposta para revisão e precisa de ADR se aprovada.

## 2. Modelo lógico
Entity(entity_id, entity_type, canonical_name, lifecycle_state, owner_subject, responsible_subject, origin, created_at, updated_at).
EntityIdentifier(id, entity_id, scheme, value_ref, issuer, verified_at, valid_until, status).
EntityRelationship(id, source_entity, relation_type, target_entity, scope, valid_from, valid_until, evidence_ref, status).
EntityRepresentative(id, entity_id, representative_subject, authority_type, scope, evidence_ref, valid_from, valid_until, revoked_at).
EntityAttribute(id, entity_id, key, value_ref, classification, visibility, source, verified_state).
EntityVerification(id, entity_id, method, issuer, evidence_ref, result, checked_at, expires_at, reviewer).
EntityEvent(id, entity_id, event_type, actor, correlation_id, timestamp, evidence_ref).

IDs estáveis e não semânticos; identificadores externos têm namespace/emissor. Nomes não são chaves. Titular, responsável operacional e representante são papéis distintos.

## 3. Taxonomia inicial e regras
- Pessoa: identidade V26 e perfil V27; entidade pessoa não se confunde com conta de usuário.
- Família/grupo: membros ligados por relações explícitas; sem acesso implícito a dados.
- Profissional: pessoa com capacidades/qualificações V09; cadastro não comprova licença.
- Empresa/organização: pessoa jurídica ou organização; exige dados e evidência conforme finalidade.
- Instituição/órgão público: tipo institucional com autoridade e verificação específicas.
- Matriz/filial/unidade: hierarquia e relação; filial/unidade não herda automaticamente todas as permissões ou responsabilidades da matriz.
- Parceiro/fornecedor: relação comercial/operacional contratual, não tipo de pessoa jurídica por si só.
- Agente/serviço/módulo: entidades técnicas com identidade não humana e proprietário/responsável.
- Produto, serviço, projeto, evento, equipamento e território: entidades de domínio com schemas especializados nos volumes correspondentes.

Taxonomia é extensível por proposta, análise de impacto, aprovação e versionamento. Não criar tipos ad hoc sem schema, proprietário e regra de ciclo de vida.

## 4. Titularidade, representação e hierarquia
Ownership indica titularidade jurídica ou controle legítimo conforme tipo; responsável responde pela operação; representante age dentro de mandato verificável. Associação, emprego, parentesco ou relação de fornecedor não implica titularidade nem representação.

Matriz-filial exige identificadores, relação societária/administrativa, vigência e evidência. Permissões são atribuídas por entidade e escopo; herança é explícita, limitada e revogável. Ciclos hierárquicos são bloqueados; fusão, cisão e mudança de titularidade preservam histórico e exigem revisão.

## 5. Verificação e confiança
Estados de evidência: autodeclarada, documento recebido, fonte consultada, validada por revisor competente, expirada ou contestada. Mostrar exatamente o nível alcançado, emissor, data e validade. Verificação de existência não equivale a certificação de qualidade, idoneidade ou garantia. Tipos regulamentados exigem fonte e revisão adequadas.

## 6. Privacidade e diretório
Atributos têm classificação e visibilidade independentes. Projeções públicas são allowlist por tipo e finalidade; documentos e identificadores sensíveis ficam privados. Restringir pesquisa e exportação em massa; registrar consultas de dados sensíveis quando justificável. Dados de pessoa natural devem respeitar V16/V39 e a finalidade aplicável.

## 7. Operações e eventos
Operações conceituais: propor entidade, validar, publicar projeção, atualizar atributo, criar/revogar relação, atribuir/revogar representante, suspender, fundir, dividir e arquivar. Eventos versionados e idempotentes: entity.created, verified, relationship.created/ended, representative.granted/revoked, suspended, merged, split e archived.

## 8. Testes e aceite
Testar tipo desconhecido, ID duplicado, namespace, hierarquia cíclica, matriz/filial, herança indevida, representante expirado, titularidade contestada, evidência vencida, dado privado em projeção pública, fusão, split, suspensão e auditoria.

Aceite exige taxonomia aprovada, fronteira V03/V28 registrada em ADR, schemas V13, autorização V17, evidências por tipo, projeções públicas, migração e testes de isolamento.

## 9. Decisões pendentes
Ratificar fronteira V03/V28; taxonomia e nomes canônicos; política de verificação por entidade; regras de matriz/filial/unidade; ownership e representação; tipos de identificadores externos; e processo de criação/versionamento de novos tipos.
