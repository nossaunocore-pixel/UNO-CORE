# EOU-V34 — UNO CORE

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: arquitetura integradora em evolução; V7 em implementação
- Relacionados: todos os volumes EOU; especialmente V01, V02, V05, V06, V07, V08, V13, V16, V17, V33

## 1. Finalidade
Descrever a composição sistêmica do UNO CORE como camada de orquestração universal que conecta informação, acesso e oportunidades, pessoas, instituições, serviços, agentes, módulos e recursos sob governança comum.

## 2. Promessa e princípios
A UNO busca que a pessoa seja ouvida, compreendida, direcionada e nutrida; conectar pessoas do mesmo território para identificar, com dados e participação, o que prejudica e ajuda a comunidade e apoiar melhor gestão local. Princípios: integridade, segurança, rastreabilidade, autorização humana, inclusão, transparência e evolução baseada em necessidade real.

## 3. Camadas
- Experiências e interfaces: Vitrine, Comunidade, Participação, Praça UNO, Perfil e demais ambientes.
- Domínios: serviços, instituições, educação, saúde, habitação, emprego/renda, eventos, financeiro e projetos.
- Serviços de plataforma: identidade, dados, APIs, integrações, agentes, ferramentas e motor cognitivo.
- Governança: Orquestrador Mestre, painéis, Oficina Mestre, auditoria e políticas.
A separação lógica deve ser refletida em contratos e ownership, não apenas em menus.

## 4. Ambientes e rollout
Começar no Brasil e em bairro piloto; expandir conforme demanda, capacidade, segurança e inclusão. V7 é etapa de produto/implementação, não volume de engenharia. V8 é etapa posterior planejada para incorporar decisões e aprendizados da Comunidade 1, sem sobrescrever V6. Preview e produção são ambientes distintos e exigem validação.

## 5. Arquitetura de dados
Firebase para identidade e memória/contexto interno conforme política; Supabase para dados de aplicação e navegação pública; IDU como identificador canônico separado. V13 define ownership e fluxos de dados. Não duplicar fonte de verdade sem estratégia de sincronização.

## 6. Governança
Orquestrador Mestre coordena, mas não possui autoridade ilimitada. Painel Mestre reservado ao fundador/delegados. Painéis funcionais têm escopos separados. Oficina cria e versiona rascunhos; aprovação, ativação e rollback são controles humanos distintos.

## 7. Estado atual
O branch V7 contém interfaces, domínios e APIs parciais; CI aprovado em commit anterior, mas última cabeça precisa de validação. Migrations Supabase preparadas não foram aplicadas; Firebase Admin/IDU e Supabase Auth ainda requerem configuração; deployment Vercel atual está sujeito a limite de criação. Não declarar produção pronta.

## 8. Critérios de evolução
Cada capacidade deve demonstrar valor real no território, ser segura, acessível, sustentável, auditável e compatível com governança. Priorizar o que atende necessidade observada e pode ser operado com responsabilidade.

## 9. Pendências
Consolidar arquitetura integral, mapa de dependências, contratos entre volumes, plano do bairro piloto, métricas de dignidade/acesso/oportunidade, governança territorial e critérios de saída de cada versão.

## 10. Histórico
0.2.0 — visão integradora alinhada às decisões de 2026-10-31.
