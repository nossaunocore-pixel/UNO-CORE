# EOU-V17 — Especificação técnica de Governança

- Revisão documental: 0.3.0
- Estado: proposta técnica para aprovação do fundador
- Dependências: V01, V05–V08, V10, V13, V16, V26, V36, V39

## 1. Contrato de autoridade
Governança define quem pode propor, avaliar, aprovar, executar, supervisionar, auditar, suspender e revogar. Orquestrador Mestre coordena e aplica políticas, mas não cria autoridade para si nem substitui aprovação humana.

## 2. Princípios institucionais já definidos
Painel Mestre reservado ao fundador e pessoas explicitamente designadas. Fundador também atua como usuário comum em contexto separado. Painéis funcionais: Administrativo, Coordenação Geral, Jurídico, Contábil e Financeiro e Atendimento. Stripe é subárea do Painel Contábil e Financeiro. Oficina Mestre cria/versiona rascunhos; aprovação e ativação são etapas distintas. Acesso padrão negado; delegações explícitas, rastreáveis e revogáveis.

## 3. Modelo de decisão e concessão
Decisão considera sujeito, ação, recurso, finalidade, contexto, escopo, política e estado. RBAC organiza papéis; ABAC considera entidade, território, titularidade, classificação, finalidade e horário. Avaliação ocorre no servidor.

Grant: ID, sujeito, papel/escopo, limite de recurso, finalidade, concedente, evidência, início, expiração, possibilidade de delegar, restrições, estado e revogação. Escopo mínimo; prazo quando apropriado; subdelegação proibida por padrão. Revogação bloqueia novas operações e trata tarefas pendentes conforme risco.

## 4. Matriz de alçadas — proposta não aprovada
| Ação | Proponente | Aprovador mínimo proposto | Executor | Evidência |
|---|---|---|---|---|
| Criar rascunho de agente/ferramenta | pessoa autorizada | revisão de domínio | Oficina | versão e testes |
| Publicar/ativar agente | responsável técnico | humano competente conforme risco | release | aprovação e rollback |
| Alterar escopo de painel | fundador | fundador | API administrativa | concessão/revogação |
| Publicar conteúdo institucional | equipe designada | aprovador institucional | serviço editorial | versão e registro |
| Operação financeira sensível | operador autorizado | alçada financeira a definir | integração financeira | confirmação/conciliação |
| Acessar dado sensível | finalidade legítima | política e responsável competente | serviço de domínio | justificativa/log |

Alçadas, cargos, dupla aprovação e valores precisam de definição formal. Não atribuir poderes presumidos.

## 5. Segregação e Oficina
Quando viável, separar solicitante, aprovador, executor e auditor. Exceção emergencial exige justificativa, prazo, notificação e revisão. Ciclo de mudança: proposta → rascunho → revisão técnica/segurança/jurídica conforme risco → testes → aprovação humana → ativação controlada → monitoramento → rollback/desativação. Autor não aprova sozinho mudança crítica.

## 6. Painéis, auditoria e revisão
Painéis são superfícies de trabalho, não autoridade autônoma. Permissão liga pessoa/entidade a escopos e limites. Painel Mestre não é concedido por papel genérico ou autodeclaração. Registrar concessões, recusas, aprovações, exceções, delegações, expirações e revogações. Revisar grants após mudança de função e periodicamente.

## 7. Testes e decisões do fundador
Testar fundador versus usuário comum; painel sem grant; grant expirado/revogado; escopo de outro território; autoelevação; subdelegação; autoaprovação; operação crítica sem confirmação; claims desatualizadas; revogação concorrente à execução.

Fundador precisa ratificar matriz de alçadas, delegados e sucessão/contingência, autonomia de agentes, ações com dupla aprovação, exceções e periodicidade de revisão. Este texto não cria novos poderes nem substitui validação jurídica.
