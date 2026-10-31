# EOU-V22 — Saúde

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho de domínio; não constitui serviço médico habilitado
- Relacionados: V13 Dados, V16 Segurança, V18 Marketplace, V20 Infraestrutura Comunitária, V23 Habitação, V24 Empregabilidade, V27 Perfis, V39 Jurídico

## 1. Finalidade
Organizar acesso informacional a serviços, instituições, campanhas, prevenção, orientação administrativa e oportunidades de cuidado, respeitando autonomia, privacidade e limites profissionais.

## 2. Limites
O volume não autoriza diagnóstico, prescrição, triagem clínica autônoma, telemedicina ou prontuário. Atos de saúde devem ser realizados por profissionais e instituições legalmente habilitados, com responsabilidade técnica, consentimento e integração regular. Emergências devem ser encaminhadas aos serviços oficiais apropriados; a plataforma não substitui atendimento emergencial.

## 3. Entidades
Instituição de saúde, unidade, profissional, registro profissional, especialidade, serviço, campanha, agendamento, encaminhamento, consentimento e documento de saúde. Dados clínicos exigem classificação sensível e segregação reforçada.

## 4. Acesso e informação
Exibir informações verificadas de serviços, localização, requisitos, horários fornecidos pela instituição e canais oficiais. Indicar origem e data de atualização. Não afirmar disponibilidade em tempo real sem integração confirmada.

## 5. Dados e consentimento
Minimizar coleta; separar dados de perfil de dados clínicos; definir finalidade, base legal, acesso, retenção, compartilhamento, exportação e exclusão. Proibir uso de dados de saúde para publicidade ou perfilamento incompatível. Acesso por equipe deve ser estritamente necessário e auditado.

## 6. Segurança
Criptografia, segregação de tenant, controle por função, logs sem conteúdo clínico desnecessário, gestão de incidentes, backup protegido e revisão de fornecedores. Agentes não podem tomar decisões clínicas ou alterar prontuários sem supervisão e autorização profissional.

## 7. Integrações e responsabilidade
Integrações com prontuários, laboratórios, operadoras ou sistemas públicos dependem de base legal, contrato, padrões técnicos e validação profissional. Não presumir convênio ou acesso a bases oficiais.

## 8. Estado atual
Há referência a uma tela de saúde no código, mas o volume e o mapa de implementação classificam a experiência como demonstrativa. Não há comprovação de operação clínica, persistência de prontuário ou integração com prestadores.

## 9. Testes e aceite
Testar isolamento de dados sensíveis, consentimento, revogação, acesso de profissional, auditoria, exportação, exclusão, incidentes e segurança. Exigir revisão clínica e jurídica antes de qualquer serviço assistencial.

## 10. Pendências
Definir escopo permitido no piloto, parceiros habilitados, responsáveis técnicos, fluxo de emergência, base legal, governança de dados e requisitos regulatórios. Revisão profissional obrigatória antes da ativação.

## 11. Histórico
0.2.0 — limites de segurança e responsabilidade documentados; 2026-10-31.
