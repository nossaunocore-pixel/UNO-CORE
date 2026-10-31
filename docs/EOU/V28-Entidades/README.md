# EOU-V28 — Entidades

- Versão documental: 0.2.0
- Estado: rascunho técnico; fronteira com V03 requer revisão editorial
- Relacionados: V03 MUE, V09 Capacidades, V13 Dados, V17 Governança, V18 Marketplace, V20 Infraestrutura Comunitária, V26 Identidade, V27 Perfis

## 1. Finalidade
Definir o catálogo aplicado de tipos de entidades que existem ou interagem no ecossistema UNO e suas relações, titularidade, representação, estados e permissões.

## 2. Fronteira com V03
V03 MUE deve definir o meta-modelo universal: o que é uma entidade, identidade, atributo, relação e ciclo de vida. V28 aplica esse meta-modelo aos tipos concretos do UNO, suas especializações e regras de domínio. Essa separação é proposta de organização e deve ser validada na revisão editorial.

## 3. Tipos iniciais
Pessoa, família/grupo familiar, profissional, empresa, organização social, instituição, órgão público, matriz, filial, unidade, parceiro, fornecedor, agente, serviço, produto, projeto, evento, equipamento e território. A lista é inicial, não exaustiva; novos tipos exigem revisão de impacto.

## 4. Identidade e relações
Cada entidade possui ID estável, tipo, nome, estado, origem, titularidade, responsável, relações tipadas, validade, território, dados públicos e privados e histórico. Matriz/filial/unidade devem preservar hierarquia e responsabilidade legal; relações familiares exigem representação e consentimento.

## 5. Ciclo de vida
Proposta → verificação → ativa → suspensa → encerrada/arquivada. Alterações de titularidade, representação, fusão, divisão ou encerramento devem registrar evidência e preservar histórico. Não inferir vínculo legal apenas por associação de cadastro.

## 6. Verificação
Distinguir autodeclaração, documento recebido, validação por fonte confiável e validação institucional. Mostrar nível e data de verificação; nunca usar selo genérico que sugira validação inexistente.

## 7. Segurança e visibilidade
Políticas por tipo e atributo, tenant/organização, território e finalidade. Proteger documentos, dados familiares e informações de representantes. Diretório público expõe apenas campos explicitamente publicados.

## 8. APIs e eventos
Consultas por tipo, relação e território; alterações por serviço autorizado. Eventos sugeridos: entity.created, verified, relationship.changed, suspended e archived. Contratos definitivos devem ser definidos em V14 e schemas em V13.

## 9. Testes e aceite
Testar unicidade, hierarquia, ciclos relacionais, titularidade, representação, fusão, revogação, publicação, isolamento e auditoria.

## 10. Pendências
Aprovar taxonomia, fronteira V03/V28, requisitos de verificação por tipo, representação legal, governança de matrizes/filiais e migração de registros existentes.

## 11. Histórico
0.2.0 — catálogo de tipos inicial estruturado; 2026-10-31.
