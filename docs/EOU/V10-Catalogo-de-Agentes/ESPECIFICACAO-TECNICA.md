# EOU-V10 — Especificação técnica do Catálogo Universal de Agentes

- Revisão documental: 0.3.0
- Estado: proposta técnica para revisão
- Dependências: V03, V04, V05, V07, V09, V11, V12, V16, V17, V26, V33

## 1. Contrato e invariantes
Registra agentes humanos, artificiais e híbridos. Registro não concede autoridade. O Orquestrador Mestre coordena políticas, mas não cria privilégios para si nem substitui aprovação humana.

Agent: agent_id, nome, classe, entidade proprietária, responsável humano, estado e versão atual.
AgentVersion: finalidade, referência de política, perfil de modelo, política de memória, ferramentas permitidas, capacidades, schemas, timeout, orçamento e concorrência.
AgentGrant: sujeito, agente, escopos, restrições, concedente, validade e revogação.
AgentEvaluation: versão, bateria de testes, scorecard, riscos, avaliador, evidências e decisão.
AgentRun: execução, agente/versão, solicitante, missão, estado, custo, resultado e horários.
AgentIncident: execução relacionada, categoria, severidade, contenção e resolução.

Identidade técnica de agente não é IDU de pessoa. Credenciais nunca ficam no cadastro ou Git.

## 2. Ciclo de vida e contrato de execução
Estados: rascunho → revisão → aprovado → habilitado → suspenso → desativado. Mudança em política, modelo, memória, ferramentas, schema ou permissões exige nova versão e avaliação.

Toda execução declara solicitante, agente/versão, missão, finalidade, contexto autorizado, escopos, ferramentas permitidas, prazo, orçamento e correlação. Sequência: autenticar; validar versão; obter grants atuais no servidor; validar missão/finalidade; montar contexto mínimo; executar allowlist; validar saída/efeitos; registrar evidência e custo; encerrar ou parar ao atingir limite. Ações sensíveis revalidam autorização imediatamente antes do efeito externo.

## 3. Autonomia e intervenção humana
Níveis A0 consulta; A1 recomendação/rascunho; A2 ação reversível com autorização específica; A3 execução delimitada por missão, política e orçamento previamente aprovados; A4 não habilitado por padrão. São propostas para aprovação V17. Nenhum nível permite autoelevação, autoaprovação, movimentação financeira, obrigação jurídica ou publicação institucional crítica sem controles humanos do domínio.

## 4. Memória, segurança e falhas
Cada versão declara fontes, finalidade, dados permitidos, retenção, isolamento por usuário/entidade, correção e exclusão. Separar memória transitória, contexto institucional e dados pessoais. Segredos não entram em memória. Conteúdo externo é dado não confiável, nunca instrução de política. Definir timeout, limite de passos/ferramentas, custo, concorrência, retry e parada segura.

## 5. Avaliação, observabilidade e testes
Avaliar qualidade, fidelidade, robustez, privacidade, viés, segurança e custo. Registrar versão exata, solicitante, missão, ferramentas, decisões de autorização, latência, custo, estado e evidências, minimizando payloads. Não armazenar cadeia de pensamento privada; registrar decisões operacionais verificáveis.

Testes: prompt injection, escalada, autoaprovação, ferramenta não permitida, vazamento entre usuários, memória contaminada, loop, timeout, orçamento, revogação durante execução e rollback.

## 6. Critérios de aceite e pendências
Catálogo operacional exige schema, grants, avaliação, execução isolada, interrupção, revogação, auditoria e rollback testados. Pendências: ratificar autonomia, memória por classe, responsáveis, scorecard, política de agente pessoal e suspensão emergencial. A especificação não declara agentes conceituais já implementados.
