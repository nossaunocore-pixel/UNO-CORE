# EOU-V36 — ADR — Registros de Decisão Arquitetural

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: processo inicial; ADRs existentes em evolução
- Relacionados: V01 Constituição, V02 Arquitetura, V13 Dados, V16 Segurança, V17 Governança, V34 UNO CORE, V35 Roadmap, V38 Padrões

## 1. Finalidade
Manter decisões arquiteturais rastreáveis, com contexto, alternativas, consequências, responsáveis, estado e relação com código/documentação.

## 2. Quando criar ADR
Criar ADR para decisões com impacto em arquitetura, dados, identidade, segurança, privacidade, integrações, contratos, custos estruturais, dependências, governança ou compatibilidade. Decisões locais e reversíveis podem ficar no registro técnico do componente, desde que não contradigam ADR vigente.

## 3. Modelo obrigatório
- ID e título.
- Estado: proposta, aceita, rejeitada, obsoleta ou substituída.
- Data e responsáveis.
- Contexto e problema.
- Restrições e requisitos.
- Alternativas consideradas.
- Decisão e justificativa.
- Consequências positivas/negativas.
- Riscos, mitigação e plano de reversão.
- Volumes, módulos, commits e testes afetados.
- Decisões substituídas ou relacionadas.

## 4. Precedência
Constituição e decisões institucionais aprovadas prevalecem sobre escolhas locais. ADR aceita orienta implementação até ser substituída. Uma sugestão do GPT ou comentário técnico não se torna decisão do fundador sem confirmação explícita. Documentos antigos são preservados e marcados como históricos quando necessário.

## 5. Ciclo de vida
Rascunho → revisão → aceita → implementada/verificada → substituída/obsoleta. Aceita não significa implementada. Implementada não significa implantada em produção. Registrar evidência em cada transição.

## 6. Relação com mudanças
PRs e commits devem referenciar ADRs relevantes. Mudanças de schema, segurança, autenticação, pagamentos e dados sensíveis exigem análise de impacto e plano de migração.

## 7. Estado atual
Existe ADR sobre navegação pública de visitantes via Supabase, além de registro de decisões. O processo ainda precisa de padronização, indexação e verificação de aderência entre ADR, código e memória permanente.

## 8. Testes e aceite
Verificar IDs únicos, estado, links, supersessão, justificativa, evidências, histórico e referências no código. Nenhum ADR pode ser apagado para esconder decisão anterior.

## 9. Pendências
Definir aprovadores por categoria, templates automatizados, política de revisão, ligação CI/ADR e indexação no repositório.

## 10. Histórico
0.2.0 — processo de decisão documentado; 2026-10-31.


## ADRs transversais registrados em 31/10/2026

- [ADR-EOU-001 — Fronteiras entre Identidade, Perfil e Entidades](ADR-EOU-001-fronteiras-identidade-perfil-entidades.md): proposta, não aprovada.
- [ADR-EOU-002 — Precedência documental e autoridade por tipo de decisão](ADR-EOU-002-precedencia-documental.md): proposta, não aprovada.
- [ADR-EOU-003 — Fronteiras entre Oficina, Operações, Missões, Fluxos e Cognição](ADR-EOU-003-fronteiras-missoes-fluxos-cognicao.md): proposta, não aprovada.

A existência ou indexação de um ADR não significa ratificação. O estado só muda mediante decisão explícita e evidência registrada, conforme o processo deste volume.
