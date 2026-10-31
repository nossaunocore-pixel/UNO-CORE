# EOU-V16 — Segurança e Auditoria

- Versão documental: 0.2.0
- Estado: rascunho técnico estruturado; revisão de segurança necessária
- Relacionados: V01 Constituição, V02 Arquitetura, V13 Dados, V14 APIs, V15 Integrações, V17 Governança, V26 Identidade, V36 ADR, V39 Jurídico

## 1. Finalidade
Estabelecer controles técnicos e operacionais para proteger pessoas, dados, recursos, agentes, instituições e continuidade do UNO. Segurança é requisito transversal, não uma tela ou recurso isolado.

## 2. Princípios
Acesso negado por padrão; menor privilégio; segregação de funções; defesa em profundidade; zero trust entre componentes; minimização; criptografia; rastreabilidade; autorização humana para ações críticas; falha segura; revisão contínua.

## 3. Identidade e acesso
Autenticar identidade e validar emissor/audiência/expiração. Autorizar cada ação no servidor. Separar usuário, IDU, agente, serviço e provedor. Painéis exigem scopes e atribuição ativa. Revogação deve produzir efeito imediato ou dentro de prazo documentado. Contas privilegiadas exigem controles reforçados.

## 4. Dados e privacidade
Classificar dados (públicos, internos, confidenciais, sensíveis); declarar finalidade, base legal/consentimento, titular, acesso, retenção e descarte. Publicação exige revisão. Não inserir segredos em código, prompts, logs ou memória. Criptografar em trânsito e repouso conforme capacidade dos serviços.

## 5. Ameaças e controles
Modelar abuso de conta, escalada de privilégio, prompt injection, exfiltração, abuso de API, scraping, fraude, insider, supply chain, ransomware, vazamento de credenciais, indisponibilidade e erro humano. Controles incluem MFA quando disponível, rate limits, RLS, validação, sandbox, revisão de dependências, backup e monitoramento.

## 6. Auditoria
Eventos relevantes devem registrar ator, ação, alvo, escopo, horário, resultado, origem, versão e correlação. Logs append-only para trilhas críticas, proteção contra alteração, retenção definida e acesso restrito. Evitar conteúdo pessoal desnecessário nos logs. Toda decisão privilegiada precisa de evidência e responsável.

## 7. Incidentes
Detectar → classificar → conter → preservar evidências → avaliar impacto → comunicar conforme obrigação → recuperar → corrigir → revisar. Definir responsáveis, canais, severidade, tempos-alvo e exercícios. Não afirmar conformidade ou ausência de incidentes sem auditoria.

## 8. Segurança de agentes e ferramentas
Agentes não podem ampliar escopos, acessar segredos fora da necessidade, executar instruções não confiáveis como política ou aprovar a própria ação. Ferramentas de pagamento, publicação, exclusão e gestão de acesso exigem controles adicionais e confirmação humana.

## 9. Testes e critérios de aceite
Testes negativos de RLS, IDOR, escalada, CSRF quando aplicável, injection, XSS, SSRF, replay, rate limit, segredo, logs, dependências, restauração e revogação. Revisões de ameaça e pentest independente devem ser planejados antes de escala.

## 10. Pendências
Definir classificação oficial, matriz de riscos, política de retenção, resposta a incidentes, gestão de vulnerabilidades, cadência de auditoria e requisitos de autenticação forte. Este volume é base de engenharia e não certificação jurídica ou de segurança.

## 11. Histórico
0.2.0 — controles e escopo estruturados para revisão; 2026-10-31.
