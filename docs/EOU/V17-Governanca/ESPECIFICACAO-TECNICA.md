# EOU-V17 — Especificação técnica de Governança

- Revisão documental: 0.3.0
- Estado: proposta técnica para aprovação do fundador
- Dependências: V01, V05–V08, V10, V13, V16, V26, V36, V39

## 1. Contrato de autoridade
Governança define quem pode propor, avaliar, aprovar, executar, supervisionar, auditar, suspender e revogar. Orquestrador Mestre coordena e aplica políticas, mas não cria autoridade para si nem substitui aprovação humana.

## 1.1. Separação entre gatilho de decisão e gatilho de operação

O modelo de autorização deve distinguir:
- `decision_grant`: competência para aprovar, deliberar, autorizar, alterar política ou assumir compromisso em uma alçada definida;
- `operation_grant`: capacidade de executar uma ação previamente autorizada, sob escopo, finalidade, limites, prazo e condições explícitos.

Nenhum `operation_grant` implica `decision_grant`. Uma pessoa/agente que executa não pode presumir autorização para decidir. Uma decisão aprovada não autoriza automaticamente execução por qualquer ator. A política deve identificar quem decide, quem executa, quem supervisiona e quem audita.

## 1.2. Instituições autônomas e Sinergia

Cada instituição mantém identidade, administração, dados, responsabilidades e alçadas próprias. A NÓS S.A. é a instituição de referência, com integração ampliada conforme necessidade e autorização, sem poder automático sobre outras instituições. As demais instituições conectam-se aos componentes UNO estritamente necessários à integração harmônica.

O Departamento de Sinergia identifica, propõe e acompanha conexões, padrões e cooperação. Não pode aprovar em nome das instituições, alterar seus grants ou ampliar escopos sem autoridade expressa. Cada conexão deve registrar finalidade, dados, titulares, entidades, escopo, responsável, vigência, custos, evidências e revogação.

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


## 12. Governança das decisões econômicas

Decisões sobre classificação de receita, dedutibilidade gerencial, rateios, percentuais territoriais, reservas, pagamentos e destinação de resultados exigem autoridade e evidência versionadas. O Orquestrador Mestre pode validar consistência e bloquear execução, mas não preencher lacunas reservadas ao fundador. A parcela territorial de 50% do lucro local não se converte em distribuição individual aos moradores nem em direito acionário. Ver MEU-UNO-001 e seu adendo.

