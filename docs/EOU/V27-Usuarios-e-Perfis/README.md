# EOU-V27 — Usuários e Perfis

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico; telas e contratos parciais
- Relacionados: V13 Dados, V16 Segurança, V17 Governança, V21 Educação, V24 Empregabilidade, V25 Financeiro, V26 Identidade, V28 Entidades

## 1. Finalidade
Definir o modelo de usuário e perfil, preferências, relações, consentimentos, papéis de participação e experiências pessoais no UNO, preservando a distinção entre pessoa, conta, identidade, perfil e papel.

## 2. Tipos de acesso
O MVP considera visitantes, usuários e parceiros, com permissões distintas. Pioneiro/aderido pode ser uma condição de participação e benefício, não uma identidade civil separada. Equipe e gestores recebem atribuições explícitas e auditáveis. Fundador deve poder atuar como usuário comum sem misturar privilégios institucionais.

## 3. Perfil
Dados mínimos de identificação e contato, preferências, acessibilidade, território, habilidades, biografia, vínculos e configurações de privacidade. Cada atributo deve indicar origem, visibilidade, finalidade, titularidade, validação e possibilidade de correção. Não tornar público por padrão.

## 4. Experiências relacionadas
Perfil pessoal, Casa/família, Emprego e Renda, Carteira, Serviços Ativos, preferências e histórico. Dados familiares pertencem a pessoas distintas e exigem vínculo, consentimento/representação e permissões específicas; um usuário não ganha acesso irrestrito aos dados de familiares.

## 5. Privacidade e consentimento
Permitir controles granulares de visibilidade, comunicação, compartilhamento e exclusão. Consentimento deve ser específico, informado, revogável e registrado. Dados sensíveis e de menores exigem tratamento reforçado e revisão jurídica.

## 6. Estado atual V7
Há páginas de perfil, User Square, Casa, Emprego e Renda, Carteira e Serviços Ativos. Parte significativa é shell visual sem persistência ou dados reais. Não simular saldo, contrato, vínculo ou dados familiares inexistentes.

## 7. Regras e segurança
Acesso padrão negado; separar permissões de leitura e escrita; validar no servidor; controlar sessões e dispositivos; registrar alterações críticas; proteger contra enumeração de usuários. Perfil público deve expor apenas campos autorizados.

## 8. Testes e aceite
Testar criação/edição, validação, privacidade por campo, consentimento, vínculo familiar, revogação, exclusão, acesso cruzado, fundador como usuário comum e compatibilidade móvel/acessível.

## 9. Pendências
Definir campos mínimos do MVP, política de perfil público, papéis visitante/usuário/parceiro, condição pioneiro, vínculo familiar, consentimento de representantes e persistência por domínio.

## 10. Histórico
0.2.0 — modelo de usuário/perfil inicial; 2026-10-31.
