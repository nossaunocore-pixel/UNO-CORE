# EOU-V13 — Banco de Dados Mestre

- Versão documental: 0.2.0 (README-base)\n- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)\n- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado; migrations preparadas ainda não aplicadas
- Relacionados: V03 MUE, V16 Segurança, V17 Governança, V26 Identidade, V27 Perfis, V28 Entidades, V36 ADR

## 1. Finalidade
Definir a arquitetura canônica de dados, ownership, persistência, integridade, acesso, histórico, retenção, migração, backup e recuperação do UNO.

## 2. Princípios
Uma fonte de verdade por domínio; identificadores estáveis; separação entre identidade e perfil; minimização; consistência; versionamento; rastreabilidade; acesso padrão negado; migrações reversíveis quando possível; dados de teste separados de produção.

## 3. Distribuição de responsabilidades definida para o projeto
- **Firebase:** identidade/autenticação e memória/contexto interno institucional e operacional, conforme os limites de autorização definidos.
- **Supabase/PostgreSQL:** dados de aplicação, navegação pública, conteúdo publicado e serviços voltados ao uso da plataforma.
- **IDU:** identificador universal canônico da pessoa, separado dos identificadores nativos dos provedores.
- **Vercel:** execução de APIs e aplicação; não é fonte de verdade de domínio.
A distribuição precisa ser detalhada por entidade e não autoriza replicação indiscriminada entre bases.

## 4. Modelo e ownership
Cada tabela/coleção deve declarar domínio, proprietário, ID, chaves, relações, classificação de dados, fonte de verdade, escritores autorizados, leitores, retenção, exclusão, índices e estratégia de migração. Não usar e-mail como chave universal. IDU textual e vínculo com UID Firebase exigem unicidade, validação e política de ciclo de vida.

## 5. Segurança
RLS em toda tabela exposta; privilégios mínimos; service role somente no servidor; validação de JWT e claims; políticas de leitura pública apenas para dados explicitamente publicados; auditoria de operações administrativas. Dados sensíveis não podem ser expostos por views públicas. Proteger backups e ambientes.

## 6. Migrações
Migration deve ser pequena, versionada, revisada e testada em ambiente isolado. Exigir preflight, backup, plano de rollback/recuperação, verificação pós-migração e testes com anon, authenticated e service_role. Migrações preparadas no repositório não foram aplicadas ao Supabase hospedado; a migração de IDs possui preflight que aborta se encontrar dados incompatíveis.

## 7. Retenção e ciclo de vida
Definir finalidade, prazo, bloqueio legal, exportação, correção, exclusão e anonimização por categoria. Logs não devem reter conteúdo sensível sem necessidade. Exclusão em uma base precisa considerar cópias, índices, backups e integrações.

## 8. Continuidade
Documentar backups, RPO/RTO por criticidade, testes de restauração, monitoramento, replicação e plano de incidente. Não afirmar que backup ou recuperação estão operacionais sem evidência.

## 9. Testes e aceite
Schema/constraints, integridade referencial, concorrência, RLS positiva e negativa, service role, isolamento entre usuários/territórios, migração vazia e populada, backup/restore e trilha de auditoria.

## 10. Pendências
Confirmar mapa entidade→fonte de verdade, estratégia de provisionamento Firebase/Supabase, política de retenção, backup e recuperação, exposure de schemas e execução das migrations em projeto de teste. Nenhuma migration descrita neste volume está autorizada a ser aplicada por este documento.

## 11. Histórico
0.2.0 — arquitetura e salvaguardas documentadas a partir das decisões atuais; 2026-10-31.
