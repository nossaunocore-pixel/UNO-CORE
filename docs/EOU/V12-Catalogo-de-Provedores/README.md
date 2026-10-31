# EOU-V12 — Catálogo Universal de Provedores

- Versão documental: 0.2.0 (README-base)\n- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)\n- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado
- Relacionados: V09 Capacidades, V10 Agentes, V11 Ferramentas, V14 APIs, V15 Integrações, V16 Segurança, V25 Financeiro, V33 Motor Cognitivo

## 1. Finalidade
Registrar provedores internos e externos de infraestrutura, IA, identidade, pagamentos, comunicação, mapas, armazenamento, serviços e outros recursos usados pelo UNO. O registro permite comparar dependência, custo, risco, disponibilidade e alternativas.

## 2. Registro do provedor
Campos mínimos: `provider_id` estável, nome legal/comercial, categoria, origem interna/terceiro, entidade contratante, serviço contratado, região e residência de dados, endpoints documentados, versão/API, SLA declarado, preço/unidade, limites, termos/licenças, DPA quando aplicável, subprocessadores, suporte, responsável UNO, criticidade, alternativas, estado e datas de revisão.

## 3. Avaliação e seleção
Avaliar adequação funcional, segurança, privacidade, localização de dados, conformidade, disponibilidade, portabilidade, lock-in, custo total, suporte, continuidade, reputação e condições contratuais. Não presumir certificações ou garantias sem evidência atual do fornecedor.

## 4. Ciclo de vida
Descoberto → avaliação → aprovado para teste → sandbox → aprovado para uso delimitado → monitorado → suspenso/substituído/encerrado. Aprovação de fornecedor não autoriza automaticamente todos os seus produtos ou endpoints.

## 5. Resiliência
Serviços críticos devem ter estratégia de contingência proporcional: provedor alternativo, modo degradado, fila, cache, exportação ou procedimento manual. Fallback só pode ocorrer se compatível com privacidade, contrato, região e qualidade. Não enviar dados a outro provedor sem base e autorização.

## 6. Custos e consumo
Registrar preço e unidade com data/fonte, quotas, limites de orçamento, alertas e responsável pagador. Custos de IA e ferramentas devem ser atribuíveis a produto/fluxo quando tecnicamente possível. Nenhum limite financeiro deve ser inventado como se fosse decisão do fundador.

## 7. Segurança e dados
Classificar dados transmitidos, finalidade, retenção, criptografia, suboperadores, incidentes, exclusão e transferências internacionais. Segredos ficam em cofre/variáveis seguras. Revisar permissões e credenciais periodicamente.

## 8. Contratos e eventos
V14 descreve APIs; V15 descreve integrações; V25 trata liquidação e custos financeiros. Registrar eventos de disponibilidade, alteração de preço, incidente, expiração contratual, rotação de credencial e encerramento.

## 9. Testes e aceite
Testar conectividade, autenticação, limites, latência, falha, fallback, custos, região, exportação e revogação. Produção exige aprovação documentada e evidência.

## 10. Pendências
Definir scorecard, criticidade, cadência de reavaliação, requisitos mínimos por categoria e catálogo oficial de provedores aprovados. A presença de nomes de fornecedores em código ou configuração não equivale a aprovação institucional.

## 11. Histórico
0.2.0 — estrutura inicial para revisão; 2026-10-31.
