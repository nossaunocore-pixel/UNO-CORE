# EOU-V10 — Catálogo Universal de Agentes

- Versão documental: 0.2.0
- Estado: rascunho técnico estruturado — requer revisão
- Relacionados: V03 MUE, V04 EVA, V05 Oficina Mestre, V07 CCM, V09 Capacidades, V11 Ferramentas, V12 Provedores, V16 Segurança, V17 Governança, V33 Motor Cognitivo

## 1. Finalidade
Definir como agentes humanos, artificiais e híbridos são identificados, descritos, autorizados, supervisionados, avaliados, suspensos e desativados no UNO. O catálogo descreve agentes; não lhes concede poder irrestrito.

## 2. Identidade e registro
Cada agente deve possuir `agent_id` estável, nome, versão, finalidade, classe (humano/artificial/híbrido), entidade responsável, proprietário institucional, estado, capacidades declaradas, ferramentas permitidas, provedores, escopos, território, canais, modelo de memória, política de dados, limites de custo, criticidade, responsável humano, evidências de teste e histórico.

Identidade técnica de agente não se confunde com IDU de pessoa. Credenciais e tokens ficam em cofres/variáveis seguras, nunca no cadastro ou no repositório.

## 3. Ciclo de vida
Rascunho → revisão → aprovado → habilitado → suspenso → desativado. Habilitação requer aprovação humana, testes e concessão explícita de escopos. Alterações de modelo, ferramentas, prompts de sistema, memória ou permissões geram revisão/versionamento. Rollback deve apontar para versão previamente aprovada.

## 4. Limites de autoridade
- Todo agente opera sob o Orquestrador Mestre e políticas aplicáveis.
- Nenhum agente altera suas próprias permissões, aprova a própria publicação ou contorna autorização humana.
- Agentes não executam ações externas irreversíveis sem consentimento e confirmação exigidos pelo domínio.
- Delegação deve ser explícita, limitada, temporária quando apropriado e auditável.
- Um agente pode recomendar; a autoridade decisória permanece com o papel humano competente.

## 5. Contrato de execução
Entrada tipada, contexto autorizado, identidade do solicitante, missão, escopos, ferramentas permitidas, orçamento/limite, prazo, critérios de parada, saída estruturada, evidências e tratamento de falhas. Chamadas devem ter timeout, limites de repetição e proteção contra loops.

## 6. Memória e dados
Declarar quais dados o agente pode ler, escrever, reter ou esquecer; finalidade, titularidade, retenção e fonte de verdade. Memória interna institucional não deve ser confundida com conteúdo de usuário ou dados públicos. Toda escrita persistente deve ser autorizada e rastreável.

## 7. Observabilidade e avaliação
Registrar versão do agente, solicitante, missão, ferramentas invocadas, decisões de política, custos, duração, resultado e falhas, respeitando minimização de dados. Avaliações incluem qualidade, segurança, fidelidade, viés, robustez, custo e aderência ao escopo.

## 8. Integrações
V11 descreve ferramentas, V12 provedores, V14 APIs e V33 motor cognitivo. Agente referencia esses contratos por IDs e versões, sem incorporar credenciais.

## 9. Testes e aceite
Testes unitários, de contrato, prompt injection, escalada de privilégio, exfiltração, abuso de ferramenta, limites de custo, concorrência, timeout, revogação e rollback. Nenhum agente entra em produção apenas por existir no catálogo.

## 10. Pendências
Definir taxonomia oficial, níveis de autonomia, classes de risco, padrões de avaliação, política de memória por classe e fluxo de aprovação. O Orquestrador Mestre e demais agentes descritos conceitualmente precisam de especificações e testes próprios.

## 11. Histórico
0.2.0 — estrutura inicial para revisão, sem declarar agentes integralmente implementados; 2026-10-31.
