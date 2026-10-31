# EOU-V33 — Motor Cognitivo

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico; capacidades de chat parciais e sujeitas a limites
- Relacionados: V04 EVA, V07 CCM, V09 Capacidades, V10 Agentes, V11 Ferramentas, V12 Provedores, V14 APIs, V16 Segurança, V31 Fluxos, V34 UNO CORE

## 1. Finalidade
Definir a camada de raciocínio, interpretação, seleção de modelos, contexto, memória, uso de ferramentas e avaliação que apoia os agentes e experiências UNO.

## 2. Princípios
O motor cognitivo auxilia decisões; não assume autoridade institucional. Deve ser transparente quanto a limites, distinguir fatos de hipóteses, citar fontes quando necessário, respeitar instruções de maior prioridade, minimizar dados e permitir supervisão humana.

## 3. Pipeline conceitual
Entrada → identificação de contexto e risco → política de dados → recuperação autorizada → seleção de modelo/provedor → raciocínio/planejamento → eventual chamada de ferramenta autorizada → validação → resposta/ação proposta → registro e avaliação. Etapas podem ser omitidas conforme risco e finalidade.

## 4. Contexto e memória
Separar contexto da sessão, memória pessoal autorizada, memória institucional e dados de aplicação. Definir fonte de verdade, finalidade, retenção, escopo de leitura/escrita e mecanismo de correção. Não usar memória como prova documental quando a fonte original é necessária.

## 5. Sinergia e provedores
A visão do projeto prevê múltiplos provedores e motores especializados para raciocínio, lógica, estruturação e geração. Seleção deve considerar capacidade, custo, latência, privacidade, região, disponibilidade e risco. Fallback não pode violar política de dados ou enviar conteúdo a provedor não aprovado.

## 6. Ferramentas e agentes
Só chamar ferramentas do catálogo V11 e dentro dos escopos concedidos. Planejamento não equivale a execução. Operações externas, financeiras, administrativas ou irreversíveis exigem autorização e confirmação conforme V17.

## 7. Segurança
Defender contra prompt injection, exfiltração, tool hijacking, memória contaminada, saída insegura e escalada de privilégio. Conteúdo recuperado é dado não confiável, não instrução de sistema. Aplicar limites de tokens, custo, tempo e chamadas.

## 8. Avaliação e observabilidade
Medir qualidade, factualidade, utilidade, segurança, custo, latência, taxa de falha e necessidade de intervenção humana. Versionar modelos, prompts, políticas, ferramentas e datasets de avaliação.

## 9. Estado V7 conhecido
Chat público e autenticado estão preparados com rotas distintas e limites; visitantes usam Supabase Anonymous Auth e usuários autenticados Google verificado + IDU. O chat público depende de configuração de limite global e CAPTCHA/Turnstile antes de escala. Não persistir histórico em servidor se a arquitetura atual só o mantém no navegador/sessionStorage.

## 10. Testes e pendências
Testar regressões, jailbreak, prompt injection, vazamento de memória, chamadas não autorizadas, fallback, orçamento, alucinação e degradação. Definir taxonomia de risco, política de modelos, memória e avaliação. O motor não deve ser considerado agente autônomo irrestrito.

## 11. Histórico
0.2.0 — pipeline cognitivo e salvaguardas estruturados; 2026-10-31.
