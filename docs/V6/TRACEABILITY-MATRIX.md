# UNO V6 — Matriz de Rastreabilidade EOU → Implementação

**Projeto:** UNO-CORE  
**Responsável institucional:** Rudson Rodriguez — Fundador e CEO  
**Data-base da auditoria:** 08/10/2026  
**Fonte analisada:** `docs/EOU` da branch `main`  
**Escopo:** arquitetura da V6, quatro interfaces centrais, integrações, autoridade, dados e testes

## 1. Resultado executivo

A Engenharia Oficial da UNO oferece uma base conceitual forte para a V6. Os princípios de modularidade, separação de responsabilidades, contratos documentados, observabilidade, segurança por concepção, confirmação proporcional e responsabilidade humana são compatíveis com o produto planejado.

O acervo, entretanto, não está homogêneo. Dos 40 volumes existentes, V03 a V08 concentram quase toda a especificação. V09 a V40 são majoritariamente documentos iniciais de 15 a 17 linhas. Isso significa que integrações, identidade, segurança, governança, finanças, jurídico, motor cognitivo e padrões de engenharia ainda precisam ser transformados em especificações executáveis antes da operação pública com dados e pagamentos reais.

**Decisão recomendada:** construir a V6 como um piloto controlado, com dados mínimos, serviços externos em modo de teste, autorização humana obrigatória para ações relevantes e módulos ainda indisponíveis claramente identificados como demonstração.

## 2. Inventário verificado

| Item | Resultado |
|---|---:|
| Documentos em `docs/EOU` | 565 |
| Volumes oficiais | 40 |
| Linhas aproximadas | 525.136 |
| Arquivos exatamente duplicados | 0 |
| Nomes incompatíveis com Windows | 2 |
| Volumes com conteúdo substancial | V01–V08 |
| Volumes principalmente introdutórios | V09–V40 |

Distribuição principal:

| Volume | Arquivos | Linhas aproximadas | Situação |
|---|---:|---:|---|
| V01 — Constituição Técnica | 8 | 488 | Fundamento normativo inicial |
| V02 — Arquitetura Oficial | 8 | 389 | Arquitetura conceitual inicial |
| V03 — MUE | 158 | 6.622 | Extenso; requer consolidação |
| V04 — EVA | 145 | 5.882 | Extenso; nomenclatura conflitante |
| V05 — OM | 101 | 7.433 | Base relevante do Orquestrador Mestre |
| V06 — CO | 53 | 24.009 | Estrutura organizacional extensa |
| V07 — CCM | 22 | 71.434 | Coordenação e Painéis Mestres |
| V08 — OPS | 33 | 408.057 | Muito extenso; requer síntese normativa |
| V09–V40 | 32 | cerca de 15–17 linhas cada | Lacunas de especificação |

## 3. Princípios constitucionais que governam a V6

Toda implementação da V6 deverá obedecer aos seguintes invariantes já presentes na EOU:

1. A engenharia e a documentação precedem mudanças estruturais.
2. O usuário permanece no centro da arquitetura.
3. A solução equivalente de menor complexidade deve ser preferida.
4. Modularidade e separação de responsabilidades são obrigatórias.
5. IA é infraestrutura, mas responsabilidade institucional permanece humana.
6. Integrações devem usar contratos e interfaces documentados.
7. Segurança deve existir desde a concepção.
8. Toda capacidade crítica precisa ser observável, auditável e diagnosticável.
9. Alterações estruturais devem possuir proposta, impacto, aprovação, validação e histórico.
10. Confirmação deve ser proporcional ao impacto financeiro, jurídico, humano, patrimonial, público e de privacidade.

## 4. Conflitos de nomenclatura a resolver por ADR

Nenhum destes conflitos deve ser corrigido silenciosamente. Cada resolução deverá gerar um Registro de Decisão Arquitetural.

| Sigla/conceito | Uso encontrado na EOU | Uso atual no planejamento | Proposta |
|---|---|---|---|
| EVA | Enciclopédia Visual Adaptativa; também Ecossistema de Valor e Aprendizagem | Entidade de Vida e Acolhimento | Reservar `EVA` para acolhimento; renomear conhecimento/aprendizagem após decisão formal |
| OM | README: Oficina Mestre; capítulos: Orquestrador Mestre | Orquestrador Mestre | Fixar `OM = Orquestrador Mestre`; criar outro nome para ambiente de engenharia |
| MUI | Não consolidado nos volumes atuais | Mensageiro Universal de Interface | Formalizar como camada de experiência e apresentação |
| AFS | Não consolidado nos volumes atuais | Anatomia das Ferramentas Sensoriais | Formalizar como proteção, percepção instrumental e permanência, delimitando responsabilidades |
| CO | Centro de Operações/Conhecimento Organizacional em materiais distintos | Painel administrativo e operação departamental | Definir nome e fronteira oficial |
| Painel Mestre | Painel por capacidade no CCM | Controle máximo do fundador | Separar Painel Mestre Global de Painéis Mestres Departamentais |

## 5. Quatro interfaces centrais da V6

### 5.1 Praça UNO pública — Landing

**Objetivo:** apresentar a UNO, permitir exploração segura e iniciar diálogo sem exigir pagamento.

**Componentes mínimos:**

- cenário da Praça UNO;
- avatar oficial da UNO;
- prédio UNO como acesso institucional permanente;
- módulos clicáveis de Casa, Perfil Vivo, Pessoas, Serviços e MUNDI;
- módulos futuros bloqueados com status transparente;
- campo de conversa e sugestões de perguntas;
- acessibilidade, privacidade e indicação de ambiente demonstrativo;
- responsividade para celular e desktop.

**Restrições:** nenhum módulo pode declarar serviço executado quando estiver somente em demonstração.

### 5.2 Conversa com a UNO

**Objetivo:** receber texto e áudio, preservar contexto autorizado e encaminhar intenções ao motor cognitivo.

**Componentes mínimos:**

- mensagens de usuário e UNO;
- histórico por conversa;
- entrada por texto;
- preparação para áudio, transcrição e leitura em voz;
- anexos permitidos conforme perfil e política;
- indicação do agente/capacidade ativa;
- confirmação antes de ações relevantes;
- mensagens claras de erro, indisponibilidade e limite.

**Regra:** memória permanente exige autenticação, consentimento versionado e política de retenção.

### 5.3 Praça UNO do usuário

**Objetivo:** representar a presença do cidadão, de sua casa e de suas relações autorizadas no ecossistema.

**Componentes mínimos:**

- Casa UNO;
- Perfil Vivo;
- família e moradores vinculados;
- conversa permanente com a UNO;
- reclamações, ideias, debates, enquetes e resultados;
- adesão e serviços ativos;
- banco de talentos;
- prefeitura e indústria como integrações futuras bloqueadas;
- central de documentos, consentimentos e comprovantes;
- módulos visíveis conforme idade, território, perfil e permissão.

### 5.4 Painel Mestre Global

**Objetivo:** fornecer ao fundador controle arquitetural, autorização, supervisão, simulação e evolução da plataforma.

**Componentes mínimos:**

- conversa com o Orquestrador Mestre;
- dashboard padrão exibido quando não houver interação;
- relatórios de agentes e integrações;
- estado das APIs, ferramentas, custos, limites e disponibilidade;
- Páginas, APIs, Ferramentas, Agentes, Planos, Propostas, Aprovações, Execuções e Histórico;
- ingestão de arquivos em quarentena;
- simulação antes de execução;
- aprovação humana explícita;
- auditoria imutável e reversão;
- fábrica controlada de páginas, módulos e agentes.

**Regra:** o Orquestrador organiza e recomenda; não concede a si próprio autoridade, não aprova a própria mudança e não publica produção sem autorização compatível.

## 6. Papéis e fronteiras de autoridade

| Papel | Pode ver | Pode propor | Pode executar | Pode aprovar |
|---|---|---|---|---|
| Visitante | Conteúdo público e demonstrações | Perguntas e interesse | Nenhuma ação externa | Não |
| Usuário autenticado | Dados próprios e módulos autorizados | Ideias, reclamações, votos e solicitações | Ações pessoais reversíveis | Consentimentos próprios |
| Colaborador | Missões e dados mínimos do seu escopo | Ações operacionais | Somente capacidades delegadas | Apenas quando expressamente delegado |
| Operador departamental | Painel da capacidade atribuída | Operações e escalonamentos | Dentro de políticas e limites | Decisões departamentais permitidas |
| Administrador | Dados e configurações administrativas permitidas | Comandos departamentais | Administração não arquitetural | Conforme política |
| Fundador/Painel Mestre | Visão global auditada | Arquitetura, módulos e integrações | Após simulação e controles | Autoridade máxima inicial definida em governança |
| Orquestrador Mestre | Contexto necessário e permitido | Planos, classificações e recomendações | Somente ações previamente autorizadas | Nunca aprova a si próprio |

## 7. Matriz EOU → V6 → implementação

| Fundamento EOU | Entrega V6 | Dados principais | Controle obrigatório | Teste de aceite |
|---|---|---|---|---|
| V01 Constituição | regras e ADRs versionados | versões, decisões | aprovação humana | toda mudança estrutural aponta para decisão |
| V02 Arquitetura | shell modular e contratos | módulos, rotas, eventos | baixo acoplamento | módulo pode ser desativado sem quebrar os demais |
| V03 MUE | Pessoa, Família, Residência, Território | entidades e vínculos | minimização e integridade | nenhum vínculo duplicado ou órfão |
| V04 EVA | acolhimento e aprendizagem após ADR | contexto, memória, preferências | consentimento e escopo | usuário entende qual memória será guardada |
| V05 OM | orquestração de conversa e ações | comandos, planos, autorizações | confirmação proporcional | pagamento/publicação nunca ocorre sem aprovação |
| V06 CO | painel administrativo/departamental | departamentos, responsabilidades | segregação de função | administrador não altera arquitetura global |
| V07 CCM | Painéis Mestres e missões | missões, responsáveis, riscos | autoridade por capacidade | cada painel exibe somente seu escopo |
| V08 OPS | execução, logs, incidentes e rollback | execuções, eventos, versões | simulação e reversibilidade | falha produz log e caminho de recuperação |
| V09–V12 | catálogos universais | capacidades, agentes, ferramentas, provedores | registro e status | recurso não catalogado não executa |
| V13 | estratégia de dados | metadados e referências | classificação de dados | origem e proprietário são rastreáveis |
| V14–V15 | APIs, gateways e integrações | conexões e saúde | segredo somente no servidor | nenhuma chave aparece no cliente ou log |
| V16 | segurança e auditoria | evidências, alertas, acessos | menor privilégio | tentativa indevida é bloqueada e registrada |
| V17 | governança | papéis, políticas, votações | separação de poderes | decisão indica regra e autoridade aplicadas |
| V25 | adesão, planos e pagamentos | planos, adesões, faturas | Stripe em teste inicialmente | webhook idempotente; sem cobrança duplicada |
| V26–V27 | autenticação e perfis | identidades, perfis, consentimentos | Google primeiro; gov.br futuro | CPF nunca concede privilégio sozinho |
| V30–V32 | eventos, fluxos e automações | eventos, estados, gatilhos | allowlist e limites | automação crítica exige autorização |
| V33–V34 | motor cognitivo e UNO CORE | sessões, decisões, relatórios | roteamento e limites de custo | falha de provedor possui fallback seguro |
| V39–V40 | contratos e instituição | contratos, versões, evidências | revisão jurídica | aceite vinculado à versão exata do contrato |

## 8. Arquitetura inicial de dados

### Supabase — domínio do usuário

- `profiles`
- `households`
- `household_members`
- `territories`
- `conversations`
- `messages`
- `complaints`
- `ideas`
- `polls`
- `votes`
- `talent_profiles`
- `memberships`
- `service_entitlements`
- `consents`
- `user_documents`

### Firebase/Google Cloud — domínio interno e operacional

- configurações internas;
- registro de integrações sem armazenar segredos em documentos públicos;
- estados dos agentes;
- filas e missões internas;
- eventos de auditoria;
- evidências de autorização;
- armazenamento interno de mídia conforme política;
- alertas e telemetria.

### GitHub

- código;
- documentação EOU;
- ADRs;
- especificações de módulos;
- histórico versionado;
- branches de desenvolvimento e revisão.

### Vercel

- frontend publicado;
- endpoints server-side compatíveis;
- variáveis de ambiente protegidas;
- previews por branch;
- produção somente após aprovação.

## 9. Integrações e estado recomendado

| Integração | Uso inicial | Estado para V6 | Condição de produção |
|---|---|---|---|
| Gemini | contexto e compreensão | gateway server-side | limites, logs seguros e fallback |
| GPT | estruturação, decisão assistida e geração | gateway server-side | modelo autorizado e orçamento |
| Firebase | autenticação e operação interna | piloto controlado | regras e App Check revisados |
| Supabase | dados estruturados do usuário | piloto com RLS | políticas testadas por papel |
| Stripe | adesão e planos | somente modo teste | webhooks, contrato e política de reembolso |
| YouTube | transmissão pública | preparar conector | OAuth, autorização e política editorial |
| Google/GOV.BR | identidade | Google primeiro; GOV.BR futuro | aprovação do provedor e base legal |
| GitHub | código e EOU | ativo | proteção da `main` e revisão por PR |
| Vercel | publicação | preview primeiro | variáveis seguras e rollback validado |
| Antigravity | execução de desenvolvimento | ferramenta assistida | acesso mínimo, branch própria e revisão humana |

## 10. Lacunas bloqueadoras para operação pública

1. Ausência de especificação LGPD e base legal por finalidade.
2. Ausência de catálogo executável de papéis e permissões.
3. Ausência de contratos formais das APIs e eventos.
4. Ausência de estratégia documentada de segredos e rotação.
5. Ausência de especificação detalhada de identidade digital.
6. Ausência de política de retenção, exportação e exclusão de dados.
7. Ausência de especificação financeira e reconciliação de webhooks.
8. Ausência de documentação jurídica suficiente para adesão e contratos.
9. Conflitos de nomenclatura entre documentos.
10. Dois nomes de arquivo incompatíveis com Windows.
11. Volume OPS desproporcional e difícil de transformar diretamente em requisitos testáveis.
12. Catálogos V09–V12 ainda não materializados.

## 11. Sequência de implementação autorizável

### Fase A — Fundação segura

1. Corrigir nomes incompatíveis com Windows em branch própria.
2. Criar ADRs de nomenclatura e autoridade.
3. Criar catálogo mínimo de módulos, papéis, capacidades e integrações.
4. Definir esquema de eventos e log de auditoria.
5. Fixar separação entre demonstração, teste, piloto e produção.

### Fase B — V6 navegável

1. Criar branch `v6-foundation` a partir do MVP preservado.
2. Implementar shell, rotas e estado de sessão.
3. Implementar Praça UNO pública.
4. Implementar conversa com a UNO.
5. Implementar Praça UNO do usuário.
6. Implementar Painel Mestre Global.
7. Criar páginas genéricas autorizadas para módulos ainda não concluídos.

### Fase C — Identidade e memória

1. Google/Firebase Auth.
2. perfis e vínculos no Supabase com RLS.
3. consentimentos versionados.
4. histórico de conversa por usuário.
5. reconhecimento de fundador por papel concedido no backend — nunca apenas por CPF informado pelo cliente.

### Fase D — Cognição e operação

1. gateway único de IA no servidor;
2. roteamento Gemini/GPT;
3. contexto mínimo e memória autorizada;
4. orçamento, limites e fallback;
5. relatórios do Orquestrador;
6. simulação antes de execução.

### Fase E — Serviços externos

1. Stripe em modo teste;
2. YouTube;
3. contratos e evidências;
4. ferramentas e agentes adicionais;
5. gov.br quando houver autorização adequada.

## 12. Critérios para declarar a UNO pronta para receber pessoas

A plataforma somente deverá ser declarada pronta quando todos os itens abaixo estiverem comprovados:

- build limpo;
- quatro interfaces navegáveis em celular e desktop;
- autenticação funcional;
- papéis e permissões testados;
- segredos somente no servidor;
- RLS e regras do Firebase testadas;
- consentimento e política de privacidade apresentados;
- conversa salva no perfil correto;
- fundador reconhecido por papel seguro;
- ações críticas exigem confirmação;
- Stripe permanece em teste até liberação formal;
- logs não expõem dados sensíveis;
- backups e rollback validados;
- páginas de erro e indisponibilidade funcionais;
- nenhuma demonstração afirma ter executado serviço real;
- revisão jurídica mínima concluída.

## 13. Decisões que exigem validação do fundador

1. Significado oficial e definitivo de EVA.
2. Nome do ambiente de engenharia atualmente chamado Oficina Mestre.
3. Fronteira entre Painel Mestre Global e Painéis Mestres departamentais.
4. Responsabilidade oficial de MUI e AFS.
5. Política de retenção de áudio, vídeo e conversas.
6. Quais dados ficam em Firebase, Supabase e Cloud Storage.
7. Modelo definitivo de adesão, mensalidade e início de cobrança.
8. Níveis de autoridade após a constituição da NÓS S.A.

---

**Princípio de implementação da V6:** criar uma base pequena, observável e reversível que materialize a EOU sem fingir que os serviços ainda não implementados já existem.
