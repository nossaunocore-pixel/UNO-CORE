# EOU-V30 — Eventos

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico; apresentação pública parcial em Lazer
- Relacionados: V13 Dados, V15 Integrações, V18 Marketplace, V20 Infraestrutura Comunitária, V21 Educação, V25 Financeiro, V28 Entidades, V31 Fluxos

## 1. Finalidade
Definir o ciclo de vida de eventos, encontros, festivais, atividades culturais, esportivas, educacionais, comunitárias e experiências espontâneas apresentadas no ambiente Lazer.

## 2. Entidades
Evento, edição, organizador, local, agenda, sessão, atividade, ingresso, inscrição, capacidade, participante, convidado, fornecedor, patrocínio, regra de acesso, cancelamento e ocorrência. Evento e oferta comercial são entidades relacionadas, mas distintas.

## 3. Publicação
Rascunho → revisão → publicado → inscrições abertas → lotado/encerrado → realizado/cancelado. Exibir organizador responsável, data/hora e fuso, local, acessibilidade, faixa etária, preço, capacidade, política de cancelamento e data de atualização. Horários e disponibilidade precisam de fonte confiável.

## 4. Inscrição e ingresso
Fluxo futuro: descoberta → leitura das condições → inscrição/reserva → confirmação → credencial → check-in → pós-evento. Evitar dupla inscrição, falsificação, revenda irregular e divulgação de dados dos participantes. Ingresso pago segue V25 e V18.

## 5. Segurança e operação
Definir responsável pelo evento, plano de emergência, acessibilidade, capacidade, licenças e fornecedores conforme porte e legislação. Não apresentar evento como aprovado/licenciado sem evidência. Localização e dados de participantes devem ter acesso limitado.

## 6. Estado atual
Lazer possui interface e read model público planejado para eventos publicados. Não há comprovação de inscrição, ingresso, pagamento, check-in ou gestão de capacidade operacional. Migration de conteúdo público está preparada, mas não aplicada.

## 7. Testes e aceite
Testar fuso horário, alteração/cancelamento, lotação, inscrição duplicada, reembolso, check-in, privacidade, moderação, permissões do organizador e publicação.

## 8. Pendências
Definir regras de publicação, categorias, política de menores, requisitos por porte, integrações de ingresso, responsabilidade por cancelamento e moderação.

## 9. Histórico
0.2.0 — domínio de eventos estruturado para revisão; 2026-10-31.
