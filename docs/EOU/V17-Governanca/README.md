# EOU-V17 — Governança

- Versão documental: 0.3.0 (README-base)\n- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)\n- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: rascunho técnico estruturado; regras finais exigem aprovação do fundador
- Relacionados: V01 Constituição, V05 Oficina Mestre, V06 Centro de Operações, V07 CCM, V08 OPS, V10 Agentes, V16 Segurança, V26 Identidade, V36 ADR

## 1. Finalidade
Definir quem pode propor, decidir, autorizar, executar, supervisionar, auditar e revogar ações no UNO. Governança limita poderes e garante que decisões relevantes tenham autoridade, escopo, evidência e rastreabilidade.

## 2. Estrutura de autoridade
- **Fundador:** autoridade institucional máxima definida para o projeto; atua também como usuário comum em contexto separado.
- **Orquestrador Mestre:** coordena políticas, agentes, APIs e módulos; não substitui a autoridade humana nem pode conceder a si próprio poderes.
- **Painel Mestre:** reservado ao fundador e a pessoas explicitamente designadas.
- **Painéis funcionais:** Administrativo, Coordenação Geral, Jurídico, Contábil e Financeiro e Atendimento, cada qual com escopos delimitados.
- **Oficina Mestre:** cria e versiona rascunhos; revisão, aprovação e ativação são etapas separadas.
A existência de um painel não significa que todas as suas operações estejam implementadas.

## 3. Modelo de autorização
Adotar RBAC para papéis e ABAC para atributos como entidade, território, titularidade, sensibilidade, estado, finalidade e horário. Decisão deve considerar sujeito, ação, recurso, contexto, escopo e política. Negar por padrão. Separar administração de acesso, execução financeira, revisão jurídica e auditoria.

## 4. Delegação e alçadas
Toda delegação registra concedente, destinatário, escopo, finalidade, início, expiração, limites, possibilidade de subdelegar e mecanismo de revogação. Delegação não transfere autoridade institucional ilimitada. Atribuições devem ser revisadas e expiradas quando necessário.

## 4.1. Autoridade institucional e integração multi-institucional

Cada instituição participante mantém identidade, administração, responsabilidades e autonomia próprias. A entrada no ecossistema UNO não transforma uma instituição em departamento da NÓS S.A. nem transfere automaticamente seus poderes, dados ou decisões.

A **NÓS S.A.** é a instituição de referência e poderá possuir integração ampliada com os componentes UNO, conforme necessidade e autorização. As demais instituições recebem somente conexões essenciais e justificadas para interoperabilidade e cooperação.

O **Departamento de Sinergia** coordena a identificação de necessidades de integração, padrões de interoperabilidade, fluxos de cooperação e acompanhamento das conexões. Não recebe, por essa função, poder automático para decidir em nome das instituições ou ampliar permissões.

### Gatilho de decisão e gatilho de operação

- **Gatilho de decisão:** competência para aprovar, autorizar, deliberar, definir regras, assumir compromissos ou alterar políticas dentro de uma alçada.
- **Gatilho de operação:** permissão para executar uma ação específica, já autorizada, dentro de escopo, finalidade, limite, prazo e condições registrados.

A concessão de capacidade operacional não concede poder decisório. A autoridade para decidir não implica, por si só, autorização para executar qualquer operação. Toda delegação deve indicar separadamente ambos os gatilhos, quando aplicáveis, além de concedente, destinatário, entidade, recurso, finalidade, limites, evidência, vigência e revogação.

## 5. Aprovação humana
Ações de alto impacto — dinheiro, identidade, dados sensíveis, publicação institucional, contratação, exclusão, concessão de acesso, alteração de políticas e ativação de agentes — exigem aprovador humano competente, evidência, confirmação e trilha auditável.

## 6. Oficina, mudanças e releases
Separar proposta, rascunho, revisão, testes, aprovação, ativação, monitoramento e rollback. Autor do artefato não aprova sozinho mudança crítica. Mudanças em produção exigem plano de reversão e janela de implantação.

## 7. Auditoria e conflito de interesse
Registrar decisões, delegações, recusas, exceções, aprovações e revogações. Exigir segregação quando a mesma pessoa possa solicitar, aprovar e executar operação sensível. Exceções precisam de justificativa, prazo e revisão.

## 8. Testes e aceite
Testar acesso negado, escopo insuficiente, atribuição expirada, revogação, subdelegação, fundador versus usuário comum, separação de funções e trilha. A implementação V7 possui escopos e verificação server-side preparados; isso não equivale à governança completa de todos os domínios.

## 9. Pendências
Formalizar matriz de alçadas por domínio, processo de nomeação/remoção de gestores, sucessão e contingência do fundador, política de exceção e revisão periódica. Requer validação jurídica e institucional.

## 10. Histórico
0.3.0 — distinção expressa entre gatilho de decisão e gatilho de operação; autonomia institucional e papel integrador do Departamento de Sinergia; 2026-10-31.
0.2.0 — estrutura alinhada aos painéis e controles V7; 2026-10-31.


## Relação com o Modelo Econômico Universal

A governança financeira transversal segue o MEU-UNO-001 e seu adendo. Alçadas, segregação de funções, aprovações humanas e trilhas de auditoria devem ser aplicadas a custos, contratos, pagamentos, apuração territorial e reservas. Os percentuais territoriais internos e a destinação dos outros 50% do lucro permanecem pendentes; nenhum agente pode inferi-los ou ativá-los. Ver [Adendo econômico](../ADENDO-MEU-UNO-001-CICLO-ECONOMICO-TERRITORIAL-SOCIETARIO-2026-10-31.md) e [Matriz jurídica/financeira](../REGIME-JURIDICO-TRABALHISTA-TRIBUTARIO-FINANCEIRO-UNO-CORE.md).

