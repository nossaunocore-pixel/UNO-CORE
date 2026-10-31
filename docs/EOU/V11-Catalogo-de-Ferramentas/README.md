# EOU-V11 — Catálogo Universal de Ferramentas

- Versão documental: 0.2.0 (README-base)\n- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)\n- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado
- Relacionados: V09 Capacidades, V10 Agentes, V12 Provedores, V14 APIs, V15 Integrações, V16 Segurança, V17 Governança, V32 Automações

## 1. Finalidade
Padronizar o registro e o uso de ferramentas internas e externas por pessoas, agentes, fluxos e módulos UNO. Ferramenta é um recurso invocável; sua presença no catálogo não autoriza uso.

## 2. Registro
Cada ferramenta possui `tool_id` estável, nome, finalidade, versão, classe, proprietário, origem UNO/terceiro, provedor, capacidade atendida, entradas/saídas tipadas, permissões exigidas, dados acessados, efeitos colaterais, risco, custo, limites, timeout, política de repetição, disponibilidade, documentação, testes, estado e responsável.

## 3. Classes e exemplos
Ferramentas de leitura, busca, cálculo, transformação, comunicação, armazenamento, execução, pagamento, publicação e administração. Exemplos concretos só podem ser ativados após contrato, avaliação de risco e autorização. Ferramentas que movimentam dinheiro, alteram permissões, publicam conteúdo ou modificam dados exigem controles reforçados.

## 4. Ciclo de vida
Rascunho → análise → teste isolado → aprovada → disponível para escopos concedidos → suspensa/descontinuada. Atualização de versão exige revalidação de schema, permissões, custos e efeitos colaterais.

## 5. Execução segura
Antes de invocar: validar identidade do agente/usuário, missão, escopo, consentimento, parâmetros, limites e política do domínio. Depois: validar resposta, registrar evidência, contabilizar custo e tratar erro. Operações não idempotentes exigem chave de idempotência ou confirmação contra duplicidade.

## 6. Segredos e credenciais
Segredos são referenciados por identificadores de cofre ou variáveis seguras, nunca armazenados em descrições, argumentos persistidos, logs, prompts ou Git. A arquitetura UNO reserva ao Chaveiro o gerenciamento autorizado de segredos; a ferramenta não pode ler segredos além do necessário para sua execução.

## 7. Auditoria e isolamento
Separar ambientes de desenvolvimento, teste e produção. Usar sandbox quando disponível. Registrar ator, ferramenta/versão, escopo, parâmetros minimizados, resultado, custo, horário e aprovação. Não registrar payloads sensíveis indiscriminadamente.

## 8. Contratos e integração
V14 define transporte/API; V12 define provedor; V15 define conexão; V32 define automação. O catálogo referencia contratos versionados e não duplica sua especificação.

## 9. Testes e aceite
Testar schema, autorização, parâmetros inválidos, abuso, timeout, repetição, idempotência, limites, indisponibilidade, vazamento de segredo, logs e revogação. Ferramentas perigosas exigem testes negativos e aprovação humana.

## 10. Pendências
Definir classificação de risco, matriz de aprovação, formato canônico do schema, política de sandbox, catálogo de ferramentas nativas e critérios de descontinuação. Nenhuma ferramenta é considerada aprovada apenas por constar neste volume.

## 11. Histórico
0.2.0 — estrutura inicial para revisão; 2026-10-31.
