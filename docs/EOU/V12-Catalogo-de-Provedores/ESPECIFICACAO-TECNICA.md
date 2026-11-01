# EOU-V12 — Especificação técnica do Catálogo Universal de Provedores

- Revisão documental: 0.3.0
- Estado: proposta técnica para revisão
- Dependências: V11, V13, V14, V15, V16, V25, V33, V39

## 1. Contrato
Registra organizações e serviços de infraestrutura, IA, identidade, pagamentos, comunicação, mapas e armazenamento. Aprovação para uma finalidade não aprova automaticamente todos os produtos, endpoints, regiões ou usos do fornecedor.

Provider: ID estável, nome legal/comercial, categoria, entidade contratante e estado.
ProviderService: produto, versão, endpoints, região, residência de dados e criticidade.
ProviderAssessment: escopo, segurança, privacidade, jurídico, resiliência, custo, portabilidade, revisor e evidências.
ProviderContract: serviço, termos, DPA, SLA, vigência, renovação e encerramento.
ProviderDependency: consumidor, serviço, criticidade e alternativa.
ProviderIncident: serviço, severidade, impacto, resposta e evidência.

Não presumir SLA, certificação, residência, retenção ou preço sem fonte e data de verificação.

## 2. Avaliação de entrada
Registrar finalidade e produto exato; dados enviados e classificação; região; subprocessadores; transferências internacionais; autenticação/escopos; preço/unidade/limites/moeda; termos/licenças/DPA; suporte; exportação/encerramento; risco de dependência; responsável e aprovador. IA com dados pessoais, pagamentos e identidade exige revisão especializada.

## 3. Estados e resiliência
Estados: descoberto, em avaliação, aprovado para teste, sandbox, aprovado para uso limitado, monitorado, suspenso, substituído ou encerrado. Estado do fornecedor e do serviço são independentes.

Serviço crítico documenta modo degradado, exportação, backup, alternativa, limites de migração e procedimento manual. Fallback não transfere dados a outro provedor sem compatibilidade legal, contratual e de finalidade. Testar saída do fornecedor.

## 4. Custos, segurança e monitoramento
Preço registra moeda, unidade, condições, data, fonte e responsável pelo orçamento. Definir quotas e alertas; não inventar limites financeiros como decisão do fundador. Monitorar disponibilidade, latência, erros, alterações contratuais/preço, incidentes e consumo. Segredos ficam em cofre; revisar escopos e credenciais.

## 5. Testes e aceite
Testar conectividade, autenticação, quota, preço, região, latência, indisponibilidade, fallback, exportação, recuperação, revogação e encerramento. Aceite exige evidências atuais e aprovação de domínio. Pendências: scorecard, periodicidade, criticidade, tolerância de indisponibilidade, orçamento por domínio e padrão de residência de dados.
