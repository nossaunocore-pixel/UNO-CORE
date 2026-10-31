# EOU-V34 — Especificação técnica integradora do UNO CORE

- Revisão documental: 0.3.0
- Estado: proposta integradora; não substitui especificações de domínio nem declara produto pronto
- Dependências: todos os volumes EOU, com foco em V01–V17, V26–V33, V35–V40

## 1. Definição sistêmica
UNO CORE é a camada de orquestração universal que conecta informação, acesso e oportunidades entre pessoas, comunidades, instituições, serviços, agentes e recursos. Não se reduz a aplicativo, marketplace ou assistente. Deve preservar dignidade, integridade, segurança, rastreabilidade, inclusão e autorização humana.

## 2. Arquitetura em planos
- Plano de experiência: Vitrine, Comunidade, Participação, Praça UNO, Perfil e experiências de domínio.
- Plano de domínio: serviços, instituições, educação, saúde, habitação, emprego/renda, projetos, eventos, indústria, financeiro e infraestrutura comunitária.
- Plano de plataforma: identidade, dados, APIs, integrações, capacidades, agentes, ferramentas, fluxos, automações e motor cognitivo.
- Plano de governança: Orquestrador Mestre, Painel Mestre, painéis funcionais, Oficina, políticas, auditoria e intervenção humana.
- Plano institucional: regras, contratos, transparência, responsabilidade, prestação de contas e evolução territorial.

## 3. Princípio de autoridade
Orquestrador Mestre coordena e aplica políticas; não é soberano sobre pessoas nem pode autoelevar privilégios. Autoridade decorre de constituição, grants e decisões humanas válidas. Usuário fundador e papel fundador são contextos separados. Painéis são superfícies operacionais, não fonte autônoma de autoridade. Ações críticas têm aprovador competente, executor limitado e evidência.

## 4. Ciclo de valor territorial
Ouvir → compreender → direcionar → nutrir → acompanhar → aprender com resultados. O sistema identifica necessidades por participação e dados autorizados; organiza capacidades e oportunidades locais; conecta pessoas/serviços/instituições; acompanha resultados e prestação de contas. Métricas devem medir acesso, resolução, tempo, qualidade, inclusão e confiança, sem reduzir dignidade a score único.

## 5. Rollout e versões do produto
Início no Brasil, bairro piloto, expansão conforme demanda, capacidade e salvaguardas. V7 é etapa de entrega/implementação; V8 é etapa posterior de evolução e não substitui histórico V6. Preview, homologação e produção são ambientes distintos. Expansão depende de testes, suporte, operação, proteção de dados e validação comunitária.

## 6. Fontes de verdade e fronteiras
Firebase: autenticação/identidade e memória/contexto interno conforme política aprovada. Supabase: dados de aplicação, navegação pública e read models. IDU: identificador canônico separado dos IDs de provedores. Vercel: runtime/deploy, não domínio de negócio. Cada entidade/conjunto tem owner e fonte de verdade definidos em V13. Sincronização é explícita e auditável.

## 7. Interoperabilidade e evolução
Volumes definem contratos e dependências; APIs não duplicam regra de domínio. Mudanças transversais exigem ADR V36, versionamento, compatibilidade e migração. Produtos próprios e de terceiros têm origem, responsável e termos distintos. Integrações externas usam finalidade, consentimento/base aplicável, escopo mínimo e desligamento possível.

## 8. Segurança, confiança e sustentabilidade
Privacy/security by design; minimização; deny-by-default; autorização server-side; auditoria; continuidade; resposta a incidentes; acessibilidade; revisão jurídica; custos transparentes e operação sustentável. Sem evidência, não declarar função ativa, aprovação, saldo, contratação ou disponibilidade.

## 9. Critérios de maturidade
Cada capacidade passa por: concepção documentada; contrato revisado; protótipo; teste isolado; aprovação humana; habilitação controlada; monitoramento; revisão de impacto; operação comprovada. A interface visual ou documentação não comprova backend operacional. Indicadores e critérios devem ser verificáveis.

## 10. Estado atual e limites
V7 tem partes de interface e APIs preparadas, mas há shells sem persistência, migrations não aplicadas, configurações externas pendentes e preview sujeito a bloqueio de deployment. A EOU aprofundada não significa que o sistema completo esteja implementado. Não realizar deploy, migração ou ativação apenas com base neste documento.

## 11. Aceite e pendências
Aceite integrador requer mapa de dependências, matriz de maturidade por capacidade, contratos entre domínios, segurança e privacidade revisadas, plano do bairro piloto, suporte, métricas de resultados, custo operacional e autorização do fundador. Pendências: constituição e governança final, arquitetura física, plano de operação territorial, indicadores e plano de expansão.
