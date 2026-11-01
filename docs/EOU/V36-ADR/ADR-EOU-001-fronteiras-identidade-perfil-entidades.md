# ADR-EOU-001 — Fronteiras entre Identidade, Perfil e Entidades

- Estado: proposta para decisão do fundador e revisão técnica
- Data: 2026-10-31
- Relacionados: EOU V03, V13, V16, V17, V26, V27, V28
- Não aprovado: este ADR registra uma proposta, não uma decisão institucional vigente.

## Contexto
A UNO precisa distinguir autenticação, identidade canônica, perfil de usuário, entidade de domínio e autorização. Misturar esses conceitos cria risco de duplicidade de pessoas, escalada de privilégios, vazamento de dados e acoplamento entre provedores.

## Proposta
1. V03 define o meta-modelo universal de entidades, identidades, atributos, relações e eventos.
2. V26 define identidade digital da pessoa, IDU, vínculos com provedores, autenticadores, recuperação e sessões.
3. V27 define conta/participação de usuário, perfil, preferências, visibilidade, consentimentos e condições de participação.
4. V28 define tipos concretos de entidades UNO, titularidade, representação, hierarquia e verificação.
5. V17 é a autoridade para grants e autorização; nenhum IDU, perfil, vínculo ou tipo de entidade concede acesso por si.
6. V13 define persistência, ownership, chaves, fontes de verdade, retenção e migrações.
7. V16 define controles transversais de segurança, classificação, auditoria e incidentes.

## Invariantes propostos
- IDU é opaco, estável e não semântico; não é UID Firebase, UUID Supabase, e-mail, telefone ou nome.
- O vínculo (issuer, subject) identifica uma conta externa, não uma pessoa por inferência de e-mail.
- Uma pessoa pode ter múltiplas contas externas e perfis de apresentação, mas uma identidade canônica UNO sujeita à política de resolução de duplicidade.
- Perfil não é entidade jurídica e não é fonte de autorização.
- Relação familiar, emprego, parceria, matriz/filial ou representação não transfere automaticamente acesso ou titularidade.
- Visitante anônimo não é pessoa verificada nem recebe IDU persistente por inferência.
- Atributos públicos são projeções allowlist; não se serializa perfil ou entidade integral para a camada pública.
- Firebase Auth comprova autenticação; autorização é reavaliada no servidor e grants atuais são governados por V17.

## Consequências
Schemas e APIs precisam respeitar essas fronteiras; integração Firebase/Supabase deve mapear IDU sem confiar em claims não verificadas. Migrações de identidade exigem preflight, unicidade, rollback/forward-fix e teste cross-user. A interface deve separar contexto pessoal comum e contexto institucional do fundador.

## Alternativas rejeitadas
- Usar e-mail/telefone como IDU: mutável, reciclável e não prova identidade única.
- Tratar UID do provedor como IDU: acopla domínio UNO ao provedor e dificulta troca/contas múltiplas.
- Armazenar dados de perfil e família como campos livres numa entidade pessoa: mistura titularidades e permissões.
- Inferir privilégios pelo tipo de entidade ou pelo perfil: contorna V17.

## Decisões ainda necessárias
- Ratificação da fronteira V03/V28 e dos invariantes.
- Autoridade emissora e política de unicidade/resolução de duplicidade do IDU.
- Fonte de verdade e schema físico de cada conjunto de dados.
- Política de recuperação, MFA, encerramento, retenção e representação.
- Tratamento de identidades legadas e critérios de verificação por tipo de entidade.

## Critérios de implementação
Aprovar ADR; produzir schemas V13 e contratos V14; testar provisionamento concorrente, duplicidade, vínculo externo, revogação, acesso familiar, representação, projeções públicas e grants V17; somente então habilitar fluxos reais.
