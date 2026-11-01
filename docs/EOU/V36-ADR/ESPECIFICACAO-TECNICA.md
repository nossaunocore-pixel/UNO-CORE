# EOU-V36 — Especificação técnica de Registros de Decisões Arquiteturais

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; ADR-EOU-001 é proposta, não decisão aceita
- Dependências: V01, V02, V13, V16, V17, V34, V35, V38

## 1. Registro como fonte de decisão
ADR é registro imutável da evolução de uma decisão arquitetural. Não é chat, comentário informal, checklist nem substituto da aprovação competente. Sugestões de agente/GPT só se tornam decisão após aceite explícito da autoridade definida.

## 2. Schema obrigatório
ADR(id, title, status, created_at, updated_at, decision_owner, reviewers, context, problem, constraints, options, decision, rationale, consequences, risks, mitigations, rollback, affected_volumes, affected_components, evidence_refs, supersedes, superseded_by).
Status: proposta, em revisão, aceita, rejeitada, obsoleta, substituída. Separar estado decisório de estado de implementação: não implementada, em implementação, implementada em teste, implantada, verificada em operação.

## 3. Workflow
Abrir proposta → validar escopo/duplicidade → revisão técnica e domínios afetados → revisão segurança/jurídica quando necessário → decisão humana → publicar estado → abrir tarefas de implementação → verificar evidência → encerrar ou substituir. Rejeição também é preservada com justificativa.

## 4. Imutabilidade e supersessão
Decisão aceita não é editada silenciosamente. Correção editorial gera revisão; mudança substantiva cria novo ADR que referencia o anterior. Preservar autor, datas, decisão, justificativa e links. Histórico legado recebe etiqueta histórica, sem reescrita destrutiva.

## 5. Relação com código e release
PR referencia ADRs; CI pode validar links e IDs. Mudança de implementação não altera status de ADR automaticamente. “Aceita” não significa “implementada”; “implementada” não significa “deploy”; produção exige evidência própria. ADR deve apontar commits, testes e release quando existentes.

## 6. Catálogo e busca
Índice por ID, domínio, status, data, tags e relações. Verificar IDs duplicados, links quebrados, ADR aceito contradito, supersessão circular e registro sem responsável. Metadados públicos não devem revelar conteúdo confidencial.

## 7. Segurança e auditoria
Acesso de escrita restrito; trilha de mudanças; evidência protegida; decisões sensíveis com revisão independente. Não armazenar credenciais ou dados pessoais desnecessários. Toda alteração de status registra ator e justificativa.

## 8. Testes e aceite
Testar transição inválida, edição de decisão aceita, ID duplicado, supersessão, links, decisão sem autoridade, evidência ausente, divergência entre ADR e código e permissões. Aceite requer template, catálogo, política de aprovação, versionamento e ligação rastreável com PR/release.

## 9. Pendências
Definir alçadas por categoria, aprovadores, SLA de revisão, política de exceção emergencial, automação de CI e tratamento de decisões históricas.
