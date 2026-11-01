# EOU-V13 — Especificação técnica do Banco de Dados Mestre

- Revisão documental: 0.3.0
- Estado: proposta técnica; migrations preparadas não são autorizadas por este documento
- Dependências: V03, V16, V17, V26, V27, V28, V36, V39

## 1. Fontes de verdade definidas para o projeto
Firebase: autenticação/identidade e memória/contexto interno institucional e operacional, conforme política.
Supabase/PostgreSQL: dados de aplicação, navegação pública, conteúdo publicado e serviços voltados ao uso.
IDU: identificador canônico da pessoa, independente dos IDs nativos dos provedores.
Vercel: execução de APIs e aplicação, não fonte de verdade de domínio.
A divisão exige mapa entidade→fonte de verdade; não duplicar dados apenas por disponibilidade técnica.

## 2. Registro obrigatório por conjunto de dados
Declarar domínio, proprietário, fonte de verdade, ID/chaves, classificação, titular, leitores/escritores, finalidade, base de tratamento, retenção, exclusão, localização, criptografia, backup, RPO/RTO, responsável por migration e versão de schema.

## 3. Identidade e ownership
IDU não é e-mail, UID Firebase, UUID Supabase ou nome de usuário. Manter vínculo entre IDU e credenciais externas com unicidade, proveniência, estado e datas. Cliente não escolhe livremente IDU de terceiros. Pessoas, entidades, agentes e contas de serviço têm identidades distintas. Representação/delegação não transfere titularidade.

## 4. PostgreSQL e Firebase
RLS em toda tabela acessível por cliente. Anon lê apenas projeções explicitamente públicas; authenticated lê dados próprios/compartilhados conforme política; service role somente no servidor. Funções privilegiadas fixam search_path, validam chamador e restringem EXECUTE. Views públicas expõem somente colunas permitidas.

Firebase Auth comprova autenticação, não autorização de domínio. Claims são snapshots; operações críticas verificam grants atuais. Sincronizações entre bases declaram direção, autoridade, conflito, idempotência e atraso aceitável.

## 5. Migrações, retenção e continuidade
Fluxo: branch, revisão, backup/preflight, ambiente isolado, aplicação controlada, testes anon/authenticated/service_role, verificação, plano de rollback/forward-fix e aprovação de produção. Migrations V7 existentes são arquivos preparados, não aplicados. Alteração de identificadores é alto risco e requer cópia representativa.

Definir retenção por categoria, correção, exportação, bloqueio, anonimização e exclusão, considerando índices, integrações e backups. RPO/RTO por criticidade, backup criptografado e restauração testada. Backup não é comprovado até teste de restore.

## 6. Testes e aceite
Testar RLS cross-user/tenant/territory, IDU ausente/duplicado, token inválido, service role no cliente, colunas sensíveis, migration com dados, concorrência, exclusão, restore, sincronização repetida e auditoria. Aceite exige mapa de ownership, DDL versionado, políticas, retenção, restore testado e migrations validadas em teste.

## 7. Pendências
Mapa completo de ownership; política de retenção; RPO/RTO; testes de restauração; exposição de schemas; e autorização expressa para aplicar migrations no projeto correto. Este volume não autoriza alteração de ambiente.
