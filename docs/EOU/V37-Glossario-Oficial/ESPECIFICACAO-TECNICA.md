# EOU-V37 — Especificação técnica do Glossário Oficial

- Revisão documental: 0.3.0
- Estado: proposta técnica; termos listados ainda exigem revisão e aprovação editorial
- Dependências: todos os volumes, especialmente V03, V26, V28, V34, V36, V38

## 1. Contrato terminológico
Glossário é catálogo governado de conceitos e termos, não lista informal de palavras. Cada conceito possui ID estável independente de rótulos e traduções.

## 2. Modelo lógico
Term(id, preferred_label, definition, concept_type, domain_owner, status, created_at, reviewed_at).
TermVariant(id, term_id, label, language, variant_type, context, valid_from, valid_until).
TermRelation(id, source_term, relation_type, target_term).
TermUsage(id, term_id, volume, section, code_symbol, ui_label).
TermDecision(id, term_id, decision, authority, rationale, evidence_ref, timestamp).
TermConflict(id, term_a, term_b, collision_type, resolution_status, owner).

Tipos de variante: sinônimo permitido, histórico, tradução, abreviação, nome de interface. Estados: proposta, vigente, histórico, proibido, substituído.

## 3. Regras de definição
Definição deve ser concisa, não circular e distinguir conceito de implementação. Indicar contexto e limites. Termo de interface pode simplificar o nome técnico, mas deve mapear para o mesmo ID conceitual. Não reutilizar sigla com significados distintos no mesmo ecossistema.

## 4. Governança editorial
Propor termo com domínio responsável; verificar colisões; revisar impacto em volumes, APIs, banco, UI, suporte e contratos; aprovar; atualizar referências; manter aliases históricos. Mudança de nomenclatura que afeta contrato cria ADR e migração compatível.

## 5. Termos prioritários da UNO
Priorizar UNO CORE, EOU, volume EOU versus versão do produto, Orquestrador Mestre, Oficina Mestre, Centro de Operações, IDU, MUE, agente, ferramenta, capacidade, entidade, perfil, usuário, parceiro, pioneiro, visitante, serviço, oferta, contratação, carteira, saldo, autorização, aprovação, ativação, publicação, Vitrine, Comunidade, Participação, Praça UNO, Chaveiro e Sinergia.

## 6. Busca e consumo
Disponibilizar consulta por termo, sigla, sinônimo, domínio e idioma. APIs retornam termo preferido, definição, status e variantes permitidas. Documentação e interfaces podem validar termos proibidos/ambíguos em CI. Não alterar identificadores técnicos estáveis por mudança de label.

## 7. Testes e aceite
Testar duplicidade de sigla, definição circular, sinônimo proibido, tradução conflitante, termo sem owner, link quebrado e divergência de label. Aceite exige inventário, owners, estados, processo de aprovação, busca e integração editorial/CI.

## 8. Pendências
Completar glossário V01–V40, aprovar definições sensíveis, nomear responsáveis por domínio, definir idiomas e automatizar detecção de inconsistências.
