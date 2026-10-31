# EOU-V38 — Padrões de Engenharia

- Versão documental: 0.2.0
- Estado: padrões-base documentados; cobertura e conformidade precisam de auditoria
- Relacionados: V01 Constituição, V02 Arquitetura, V13 Dados, V14 APIs, V16 Segurança, V35 Roadmap, V36 ADR

## 1. Finalidade
Definir padrões mínimos para projetar, codificar, testar, revisar, documentar, versionar, publicar e operar componentes UNO com qualidade e rastreabilidade.

## 2. Organização e código
Separar domínio, apresentação, serviços, APIs e adaptadores. Preferir contratos explícitos, tipos fortes, funções pequenas e responsabilidades únicas. Evitar dependências circulares, lógica crítica apenas no cliente e duplicação de regras de negócio.

## 3. Segurança por padrão
Validar entrada no servidor; autenticar e autorizar por operação; negar por padrão; segredos fora do repositório; dependências revisadas; logs minimizados; RLS em dados expostos; ambientes segregados. Nunca confiar em controles de interface como única barreira.

## 4. Dados e migrations
Toda alteração de schema deve ser versionada, revisada, testada em ambiente isolado, com preflight, backup, rollback/recuperação e verificação pós-migração. Não executar migration em produção sem autorização explícita e evidência do projeto correto.

## 5. APIs e integrações
Schemas versionados, erros padronizados, idempotência, rate limits, timeouts, retries limitados, assinatura de webhooks e documentação. Provedores externos devem estar encapsulados em adaptadores.

## 6. Testes e CI
Testes unitários, de contrato, integração, segurança e E2E proporcionais ao risco. CI deve executar instalação reproduzível, lint/typecheck quando configurados, testes e build. Falha de teste bloqueia merge/release. Resultado de commit anterior não comprova a cabeça atual.

## 7. Revisão e qualidade
Pull request com objetivo, risco, evidência, screenshots quando UI, migrations e plano de rollback. Revisar acessibilidade, responsividade, performance, tratamento de erro e saídas explícitas em diálogos. Mudanças críticas exigem revisão independente.

## 8. Versionamento e release
Commits pequenos e descritivos; branch de trabalho; tags/releases; changelog; artefato rastreável. Separar preview de produção. Não promover automaticamente sem gates e aprovação.

## 9. Observabilidade e operação
Logs estruturados, métricas, tracing/correlation IDs, alertas, runbooks, SLOs e gestão de incidentes. Não registrar tokens, dados sensíveis ou conteúdo privado sem necessidade.

## 10. Estado conhecido
Há workflow CI com npm ci, testes e build; testes de contratos de domínio. Isso não prova cobertura integral, segurança independente ou funcionamento de integrações hospedadas. O branch V7 e migrations precisam de validação contínua.

## 11. Pendências
Definir matriz de cobertura mínima por criticidade, lint/typecheck, revisão de dependências, SBOM, scans de segurança, política de release, SLOs e checklist de acessibilidade.

## 12. Histórico
0.2.0 — padrão-base estruturado com base no CI e arquitetura V7; 2026-10-31.
