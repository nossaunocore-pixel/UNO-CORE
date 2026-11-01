# EOU-V38 — Especificação técnica de Padrões de Engenharia

- Revisão documental: 0.3.0
- Estado: proposta técnica complementar; cobertura real precisa de auditoria
- Dependências: V01, V02, V13–V17, V31–V36, V39

## 1. Padrões obrigatórios de projeto
Cada componente declara propósito, owner, fronteiras, contratos, classificação de dados, permissões, falhas, observabilidade, testes, custo e ciclo de vida. Domínio não depende de UI; cliente não é autoridade; adaptadores encapsulam provedores; schemas são versionados.

## 2. Código e repositório
TypeScript estrito quando aplicável; validação runtime em fronteiras; nomes consistentes; funções e módulos com responsabilidade delimitada; evitar estado global implícito e dependências circulares. Commits pequenos e descritivos; branches para mudanças; PR com escopo, risco, testes e migração. Não commitar .env, tokens, dados pessoais ou artefatos sensíveis.

## 3. Segurança e privacidade
Threat modeling proporcional ao risco; deny-by-default; autorização server-side; ownership; RLS; validação de input/output; escaping; proteção contra IDOR, SSRF, XSS, CSRF e injection conforme superfície; secrets manager; rotação; least privilege; minimização e retenção. Dependências e cadeia de suprimentos precisam de análise.

## 4. APIs e contratos
OpenAPI/JSON Schema versionados; códigos de erro estáveis; paginação; limites; timeout; idempotência; retry seguro; webhooks assinados; compatibilidade e depreciação. Alterações breaking exigem versão/ADR e plano de migração.

## 5. Banco e migrations
Migration reproduzível e revisada; preflight e backup; ambiente isolado; testes anon/authenticated/service role; verificação RLS e exposição; plano de rollback ou forward-fix; monitoramento pós-migração. Produção exige autorização explícita e identificação do projeto correto. Restore é testado, não presumido.

## 6. Testes e CI
Camadas: unitário, contrato, integração, segurança, acessibilidade, performance e E2E. CI deve usar lockfile, runtime fixado, instalação limpa, lint/typecheck configurados, testes e build. Relatório associa SHA exato. Teste de commit anterior não valida cabeça nova. Cobertura não substitui qualidade dos casos negativos.

## 7. UI e acessibilidade
Responsividade, teclado, foco, contraste, semântica, mensagens claras, estado de carregamento/erro/vazio e saída explícita de diálogos. Testar viewport móvel/desktop e navegação sem API quando esse for requisito. Não simular dados ou operações inexistentes.

## 8. Release e operação
Separar dev/test/preview/prod; feature flags e rollout gradual quando aplicável; smoke tests; métricas, logs e tracing; alertas; runbooks; rollback; gestão de incidentes. Publicação requer aprovação, evidência e responsável operacional.

## 9. Evidências e maturidade
Registrar estado: documentado, prototipado, implementado, testado, implantado, verificado em operação. Não promover maturidade sem evidência. Fornecedor configurado, código compilando ou tela visível não prova integração operacional.

## 10. Testes de conformidade
Verificar segredos, dependências, permissões, RLS, contratos, migrações, acessibilidade, performance, logs, recuperação, backup, rollback e evidência de release. Auditorias devem registrar exceções e prazo de correção.

## 11. Pendências
Ratificar baseline técnico, ferramentas de análise, cobertura mínima por risco, SBOM, política de atualização, padrões de acessibilidade, SLOs, release gates e auditoria de conformidade.
