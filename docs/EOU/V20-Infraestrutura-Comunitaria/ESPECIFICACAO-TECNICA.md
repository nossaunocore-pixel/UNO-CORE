# EOU-V20 — Especificação técnica de Infraestrutura Comunitária

- Revisão documental: 0.3.0
- Estado: proposta técnica; não substitui cadastro ou autoridade pública
- Dependências: V03, V13, V16–V18, V21–V25, V28–V31, V34, V39, V40

## 1. Finalidade e limites
Mapear recursos e necessidades coletivas e apoiar coordenação territorial por informação e participação. UNO não se apresenta como prefeitura, concessionária, serviço de emergência ou autoridade de manutenção. Informação comunitária não substitui cadastro oficial nem decisão administrativa.

## 2. Modelo lógico
Territory(id, parent, boundary_ref, source, precision, status).
CommunityAsset(id, type, owner_entity, operator_entity, location_ref, condition, public_state, verified_at).
ResourceAvailability(id, asset_id, schedule, capacity, source, valid_until).
CommunityNeed(id, territory, category, description, severity, reporter_privacy, status).
ServiceRequest(id, need_id, responsible_entity, protocol, state, target_date, evidence).
MaintenanceEvent(id, asset_id, responsible, action, date, evidence, next_due).
CommunityIndicator(id, territory, metric, formula, period, source, limitations).
ParticipationRecord(id, proposal_ref, decision_process_ref, outcome_ref).

## 3. Proveniência e confiança
Todo registro declara fonte: oficial, operador responsável, instituição, observação comunitária ou inferência. Mostrar fonte, data, método, precisão e validade. Relatos comunitários são sinais, não fatos automaticamente verificados. Denúncias sensíveis e relatos de risco não são publicados automaticamente.

## 4. Escuta e participação
Necessidade pode ser relatada, agrupada e priorizada por critérios públicos. Participação V17/ambiente Participação define elegibilidade, moderação, consulta e apuração. Consulta não equivale a decisão vinculante da autoridade pública. Evitar duplicidade e manipulação; permitir contestação e correção.

## 5. Privacidade e segurança territorial
Aplicar precisão geográfica mínima necessária; ocultar endereços residenciais e pontos de pessoas vulneráveis; proteger infraestrutura crítica e rotas sensíveis. Dados públicos são allowlist e revisados. Segregar acesso por território e papel; não expor denunciantes.

## 6. Operação e encaminhamento
Cada ocorrência tem responsável real, protocolo, status, data de atualização e fonte. Prazos estimados são identificados como estimativa. Sem responsável confirmado, mostrar apenas orientação/encaminhamento, não promessa de execução. Registrar fechamento e evidência quando fornecida.

## 7. Indicadores
Indicadores descrevem cobertura, acesso, tempo de resposta, condição, disponibilidade e resolução, com denominador, método, período, fonte e limitações. Não inferir causalidade sem desenho apropriado; evitar ranking simplista de bairros ou pessoas.

## 8. Estado V7 e testes
Comunidade/Participação possuem leitura pública planejada, mas postagem, voto e execução comunitária ainda não são considerados ativos. Testar localização, fonte vencida, moderação, acesso cross-territory, privacidade, correção, RLS, participação fraudulenta e atualização.

## 9. Pendências
Definir território piloto, fontes oficiais, curadoria, governança dos relatos, papéis comunitários, metodologia de indicadores, canais de encaminhamento e acordos institucionais.
