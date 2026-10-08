# Arquitetura de Dados — UNO V6

## Princípio

Cada dado possui proprietário, finalidade, classificação, origem, retenção e regra de acesso. A separação tecnológica não substitui governança.

## Supabase — domínio do usuário

Estruturas iniciais:

- `profiles`;
- `households`;
- `household_members`;
- `territories`;
- `conversations`;
- `messages`;
- `complaints`;
- `ideas`;
- `polls`;
- `votes`;
- `talent_profiles`;
- `memberships`;
- `service_entitlements`;
- `consents`;
- `user_documents`.

Todas as tabelas expostas ao cliente usam RLS. Mensagens de sistema e de assistente são gravadas pelo backend confiável.

## Firebase/Google Cloud — domínio interno

- autenticação e sinais de confiança;
- configuração interna;
- estados e relatórios de agentes;
- missões e filas internas;
- evidências de autorização;
- auditoria e alertas;
- armazenamento interno de mídia conforme política.

## GitHub — engenharia

- código;
- EOU;
- ADRs;
- especificações;
- testes e histórico de alterações.

## Classificação

| Classe | Exemplos | Regra |
|---|---|---|
| Pública | páginas institucionais | leitura pública |
| Interna | configuração não secreta | equipe autorizada |
| Pessoal | perfil e conversa | titular e funções autorizadas |
| Sensível | saúde, biometria, documentos | necessidade estrita e proteção reforçada |
| Segredo | chaves e tokens | cofre/variável server-side; nunca banco público |

## Áudio e vídeo

Áudio, vídeo e transcrições exigem consentimento específico, finalidade declarada, retenção definida e opção de acesso pelo titular. Evidências contratuais devem vincular arquivo, pergunta, contrato, versão, data e hash.

