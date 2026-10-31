# EOU-V26 — Identidade Digital

- Versão documental: 0.2.0
- Estado: rascunho técnico; integração Firebase/Supabase ainda requer configuração e validação
- Relacionados: V03 MUE, V13 Dados, V16 Segurança, V17 Governança, V27 Perfis, V28 Entidades, V36 ADR

## 1. Finalidade
Definir identidade digital, autenticação, vínculo entre provedores, IDU, recuperação, ciclo de vida, consentimentos e delegações no UNO.

## 2. Separações obrigatórias
- **IDU:** identificador canônico da pessoa no ecossistema UNO.
- **UID do provedor:** identificador emitido pelo Firebase/Google ou outro provedor; não substitui o IDU.
- **Perfil:** atributos e preferências da pessoa, tratados em V27.
- **Conta/agente/entidade:** identidades distintas, sem reutilizar identidade pessoal.
- **Sessão/token:** prova temporária de autenticação, não identidade permanente.
Não usar e-mail, telefone ou nome como chave canônica.

## 3. Ciclo de vida
Convite/registro → autenticação → verificação → provisionamento de IDU → vínculo de perfil → atualização → suspensão → recuperação → encerramento. Unicidade, vinculação e recuperação exigem controles contra takeover e duplicidade. Mudança de provedor não pode criar pessoa duplicada.

## 4. Autenticação e confiança
Validar issuer, audience, assinatura, expiração e claims. Distinguir visitante anônimo Supabase de usuário Google verificado com IDU. Rotas privadas e painéis exigem validação server-side e escopo. Não confiar em estado de autenticação do frontend isoladamente.

## 5. Provisionamento e vinculação
O processo deve ser idempotente: verificar vínculo existente, gerar/associar IDU, persistir referência do provedor e registrar evento. Conflitos de identidade exigem revisão humana; não fundir contas automaticamente por e-mail sem prova adequada.

## 6. Recuperação e segurança
Recuperação deve provar controle por canal confiável, proteger contra engenharia social, notificar alterações e permitir revogação de sessões. MFA/passkeys podem ser avaliados. Segredos e refresh tokens devem permanecer em armazenamento seguro.

## 7. Privacidade
Minimizar atributos de identidade, separar dados de perfil e sensíveis, permitir correção e encerramento conforme política. Registrar consentimentos e compartilhamentos. Não expor IDU em URLs ou interfaces públicas desnecessariamente.

## 8. Estado V7 conhecido
O desenho utiliza Firebase para identidade e IDU separado, com Supabase para dados de aplicação e navegação pública. A configuração de Firebase Admin, claims, IDU e Supabase Third-Party Auth ainda possui pendências; as migrations preparadas não foram aplicadas. Não declarar SSO entre serviços como pronto.

## 9. Testes e aceite
Testar token inválido/expirado, issuer incorreto, duplicidade, vinculação, revogação, recuperação, conta suspensa, IDU ausente, privilégios, usuário anônimo e isolamento entre ambientes.

## 10. Pendências
Definir política de identidade duplicada, recuperação, MFA, canais futuros, verificação de telefone/WhatsApp, retenção, exclusão e migração de provedores. WhatsApp não deve ser habilitado como autenticação sem análise de risco e consentimento.

## 11. Histórico
0.2.0 — separação IDU/provedor/perfil formalizada; 2026-10-31.
