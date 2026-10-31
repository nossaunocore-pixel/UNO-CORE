# EOU-V16 — Especificação técnica de Segurança e Auditoria

- Revisão documental: 0.3.0
- Estado: proposta técnica; revisão especializada necessária antes de produção ampla
- Dependências: V01–V03, V10–V17, V26, V36, V39

## 1. Modelo de ameaça e zonas
Ameaças: abuso interno/externo, erro de configuração, supply chain, prompt injection, fraude, scraping, sequestro de conta, escalada, vazamento, ransomware e indisponibilidade. Separar cliente público, sessão autenticada, APIs, serviços privilegiados, provedores, cofre, bancos e plano administrativo. Toda fronteira autentica e autoriza.

## 2. Classificação proposta
Público: aprovado para divulgação.
Interno: operação restrita.
Confidencial: contratos, estratégia e dados limitados.
Sensível: dados pessoais de maior impacto, saúde, família, finanças, biometria e credenciais.
Classificação final precisa ser aprovada e alinhada à LGPD. Cada conjunto declara finalidade, base legal, titular, acesso, retenção e descarte.

## 3. Controles mínimos
Autenticação forte para contas privilegiadas quando disponível; autorização server-side; deny-by-default; RLS e testes cross-user/tenant; segredos em cofre e rotação; criptografia em trânsito/repouso conforme serviço; rate limits e quotas; validação; sandbox; revisão de dependências; backups protegidos e restore testado; monitoramento; segregação de ambientes.

## 4. Auditoria
Evento mínimo: ID, timestamp, tipo/ID do ator, ação, recurso, escopo, decisão, reason_code, correlation_id, origem, versão, resultado e referência de evidência. Armazenamento append-only ou controles equivalentes. Restringir leitura e retenção. Evitar payloads, segredos, tokens e conteúdo pessoal desnecessário. Registrar fatos verificáveis, não cadeia de pensamento privada.

## 5. Incidentes e IA
Preparação → detecção → triagem → contenção → preservação de evidência → avaliação de impacto → comunicação conforme obrigação → recuperação → correção → revisão. Definir severidades, responsáveis, canais e exercícios. Em credencial exposta, revogar/rotacionar rapidamente.

Documentos e mensagens externas são entrada não confiável. Separar conteúdo de instruções de política. Ferramentas com efeitos colaterais usam allowlist, schemas, limites e confirmação. Testar injection indireto, exfiltração, confusão de autoridade, memória contaminada e abuso.

## 6. Verificação e aceite
Métricas: tentativas negadas, falhas de autenticação, alterações privilegiadas, segredos expostos, vulnerabilidades, tempo de contenção, falhas de backup e exceções abertas. Testes: threat modeling, SAST/DAST quando disponíveis, dependências, RLS, IDOR, SSRF, XSS, CSRF quando aplicável, injection, replay, quota, segredo, restore, revogação e resposta a incidente. Pentest independente antes de escala.

Pendências: classificação final, retenção, RPO/RTO, cadência de auditoria, MFA, pentest e requisitos regulatórios. Este volume não é certificação de segurança ou conformidade.
