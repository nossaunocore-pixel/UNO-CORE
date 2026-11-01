# MASTER_SPEC.md — Especificação Mestra do UNO CORE

**Organização institucional:** Nós S.A. (estrutura institucional em desenvolvimento; não implica constituição jurídica concluída)  
**Plataforma:** UNO  
**Núcleo:** UNO CORE  
**Versão:** 1.1.0-alpha  
**Revisão:** 31 de outubro de 2026  
**Status:** especificação consolidada para implementação e validação; não representa homologação de produção.

---

## 1. Identidade e propósito

O UNO CORE é a camada universal de orquestração e governança de capacidades da Plataforma UNO. Não se limita a um aplicativo ou conjunto de telas. Organiza, com rastreabilidade e autorização humana, a interação entre pessoas, organizações, serviços, conhecimento, agentes, recursos e oportunidades.

A Plataforma UNO busca ampliar dignidade, acesso à informação, participação e oportunidades, conectando pessoas de um mesmo território para compreender necessidades e coordenar respostas. A tecnologia deve servir às pessoas; não substituir responsabilidade humana, direitos, serviços públicos ou obrigações legais.

## 2. Princípios invariáveis

1. Integridade, segurança, privacidade e rastreabilidade.
2. Propósito antes da tecnologia; governança antes da velocidade.
3. Contexto antes de dados; decisões antes de execução.
4. Responsabilidade humana antes da automação.
5. Menor privilégio: nenhuma interface concede permissão por si só.
6. Transparência sobre estado real, custos, limitações e dependências.
7. Consentimento e controle do usuário sobre seus dados, histórico e interações.
8. Nenhuma capacidade deve ser anunciada como funcional/testada sem evidência de execução.

## 3. Acesso à plataforma

### 3.1 Camada pública
A camada pública inclui landing e boas-vindas, Praça, visualização pública de Instituições, Vitrine, leitura pública da Comunidade, consultas/resultados públicos de Participação, Lazer/Eventos, catálogo público de Serviços e Conversa. A navegação pública usa Supabase com chave publishable/anon e RLS; não depende de Firebase, Google ou IDU. A leitura pública não concede escrita, voto, contratação, acesso a dados pessoais ou entrada em painéis.

### 3.2 Visitante anônimo
A pessoa pode conhecer os ambientes públicos sem conta Google. A Conversa pública cria sessão anônima no Supabase Auth, sem Perfil UNO, IDU, adesão ou vínculo institucional. O endpoint público aceita somente JWT anônimo Supabase, responde apenas sobre informações públicas e aplica cotas por usuário e limite global diário aprovado. Anonymous Sign-Ins, CAPTCHA/Turnstile, retenção/limpeza e limites devem ser configurados antes da liberação pública.

### 3.3 Visitante autenticado
A autenticação Google é obrigatória para entrar nos ambientes internos, mas não equivale a adesão paga, contratação ou autorização para capacidades restritas. Após autenticação, a pessoa recebe ou provisiona uma Identidade UNO (IDU) vinculada à conta, mediante serviço seguro no servidor.

Visitantes autenticados podem usar capacidades internas classificadas como gratuitas, desde que não dependam de APIs pagas, tokens externos, integrações com terceiros, contratação ou autorização especial. Exemplos previstos: perfil básico, navegação pelos universos, conversa em modo interno gratuito quando disponível, publicações, comentários, mensagens entre usuários, propostas e participação interna. Cada função só pode ser liberada quando efetivamente implementada e protegida.

### 3.4 Aderidos e parceiros
A adesão ativa os serviços e direitos correspondentes ao plano, contrato, qualificação e estado de liberação. Parceiros podem receber permissões operacionais adicionais por vínculo e escopo. A adesão não concede automaticamente acesso administrativo ou institucional.

### 3.5 Autenticação
- Google é o único método de autenticação pessoal permitido para áreas privadas no MVP.
- E-mail/senha e outros métodos não podem permanecer como rotas alternativas de identidade pessoal.
- A allowlist pública é acessível sem Firebase/Google; a Conversa pública usa sessão anônima Supabase separada.
- Perfil, Casa, Emprego e Renda, carteira, Serviços Ativos, ações de escrita e todas as rotas protegidas exigem sessão Google, IDU provisionado e autorização no servidor.
- Claims administrativos devem ser atribuídas por mecanismo confiável server-side; nunca confiar em dados editáveis pelo cliente.
- Painel Mestre exige claim explícita `unoFounder` ou `unoMaster`, validada também no backend.
- A sessão Google não substitui consentimento, contrato ou autorização para tratar dados específicos.

## 4. Classificação universal de capacidades

Toda capacidade deve declarar classificação, custo, pré-requisitos, permissões, riscos, estado e evidências.

| Classe | Definição | Regra de acesso |
|---|---|---|
| **Gratuita interna** | Processamento interno sem consumo variável de API/token ou serviço externo cobrado por uso | Visitante autenticado pode usar, quando implementada e segura |
| **Consumo** | Gera tokens, chamadas de API, processamento ou custo variável externo | Exige adesão/permissão aplicável, limites e transparência de custo |
| **Externa** | Interage com órgão, empresa, sistema ou pessoa fora da plataforma | Exige adesão/consentimento, integração válida e autorização correspondente |
| **Restrita** | Exige qualificação, função, vínculo, aprovação humana ou autorização legal | Acesso por escopo e concessão explícita |

Uma capacidade pode acumular mais de uma classificação (por exemplo, externa e restrita). Não presumir que “gratuita para o usuário” significa custo zero para a UNO; medir custos internos e impor limites sustentáveis.

## 5. Estados de disponibilidade

- **Disponível e testado:** implementação executada e validada com evidência.
- **Bloqueado/restrito:** não liberado; informar o motivo.
- **Aguardando integração/autorização:** interface ou preparação pode existir, mas depende de integração, credencial, aprovação ou validação.
- **Em simulação:** demonstração ou fluxo de teste; não representa operação financeira ou institucional real.
- **Em construção:** ainda não implementado ou incompleto.

Estados visuais de referência: verde claro para disponível e testado; vermelho com cadeado para bloqueado; laranja para aguardando integração/autorização. A cor nunca substitui texto acessível.

## 6. Arquitetura de dados e identidade

- **Firebase:** autenticação Google, identidade e serviços internos de memória institucional/operacional, agentes e segurança, conforme implementação validada.
- **Supabase:** dados de produto e uso, navegação, conteúdo e arquivos voltados ao usuário, protegidos por RLS e políticas de propriedade/escopo.
- **IDU:** identificador universal da pessoa na UNO, separado dos identificadores técnicos de provedores e bases. Deve ser provisionado no servidor e vinculado de forma verificável à identidade autenticada.
- O JWT Firebase só pode ser usado no Supabase após configuração e validação do mecanismo Third-Party Auth no projeto.
- O cliente Supabase público é independente e nunca recebe service-role ou token Firebase; as tabelas públicas oferecem somente leitura de conteúdo publicado.
- A sessão anônima Supabase da Conversa não é IDU, não concede acesso às tabelas pessoais e não pode ser convertida silenciosamente em perfil UNO.
- Nunca expor service-role, service account, chaves secretas ou credenciais administrativas no navegador.
- RLS em todas as tabelas expostas; políticas de ownership/escopo, não apenas a condição genérica de usuário autenticado.
- Não usar metadados editáveis pelo usuário como autorização.
- Conversas e interações devem ser associadas ao IDU e à conta autenticada apenas com transparência, finalidade definida, acesso do titular, retenção e exclusão documentados. Autenticação não é consentimento irrestrito.

A arquitetura é a direção normativa. Cada integração permanece “pendente” até ser configurada e testada; a documentação não comprova que Firebase, Supabase ou serviços externos já estejam plenamente integrados.

## 7. Governança e Orquestrador Mestre

O Orquestrador Mestre coordena capacidades, agentes, APIs, módulos, permissões, missões e auditoria. Não concede poder irrestrito a agentes. Toda ação sensível deve declarar solicitante, contexto, escopo, autorização, execução, resultado e evidência.

O Painel Mestre fica restrito ao fundador ou a pessoas explicitamente delegadas. Painéis administrativos, coordenação, supervisão e operação devem obedecer a menor privilégio, escopo territorial/funcional e trilha de auditoria. O agente Chaveiro, quando implementado, será o único componente autorizado a operar credenciais, sob controles server-side e aprovação apropriada.

## 8. Escopo funcional do MVP

O MVP deve validar uma experiência coerente e real: camada pública Supabase para visitantes, Conversa pública com sessão anônima limitada, autenticação Google para identidade pessoal, IDU, perfil, navegação privada, Vitrine, Comunidade, Participação, publicações e interações internas, catálogo de produtos/serviços próprios e externos, Serviços Ativos, painéis conforme permissões, transparência e auditoria básica.

Funções dependentes de API, tokens, pagamentos, órgãos externos, serviços regulados ou qualificações devem permanecer bloqueadas, simuladas ou aguardando integração até que requisitos técnicos, comerciais, jurídicos e de segurança sejam atendidos.

## 9. Modo Simulação e Transparência Pré-Ativação

Durante a preparação institucional e operacional, fluxos comerciais e financeiros devem permanecer em ambiente de teste/simulação. A interface deve informar claramente:
- estado de regularização empresarial e da plataforma, sem sugerir constituição jurídica inexistente;
- versão, data e condições dos termos;
- o que funciona, o que está simulado, o que aguarda integração e o que está bloqueado;
- valores simulados versus cobranças reais;
- critérios de ativação, cancelamento, reembolso e atendimento, após validação jurídica.

Nenhuma cobrança real, carteira sacável, repasse, comissão financeira ou serviço regulado será ativado apenas por existir uma tela ou produto em modo de teste.

## 10. Segurança, testes e critérios de aceite

Cada rota interna deve negar acesso sem autenticação. Cada operação de dados deve validar sessão, IDU, propriedade, escopo e autorização no servidor/banco. Testar: visitante anônimo nas rotas públicas, visitante anônimo bloqueado em rotas privadas, Conversa com JWT Supabase inválido, Google autenticado sem IDU, visitante com IDU, aderido, parceiro, usuário sem permissão e fundador/delegado.

Build, testes automatizados, testes de RLS, revisão de segredos e validação em Preview devem ser concluídos antes de declarar uma versão pronta. Produção exige validação explícita e monitoramento.

## 11. Referências técnicas

- `spec/ARCHITECTURE.md`: camadas e limites de confiança.
- `spec/ROADMAP.md`: sequência de implementação e evidências.
- `spec/DECISIONS.md`: decisões arquiteturais.
- `spec/V7_MVP_ACCESS_AND_CAPABILITIES.md`: matriz detalhada de acesso e capacidades.

---
**Nota de estado:** esta especificação consolida decisões e requisitos. Não declara que funcionalidades, integrações, testes, regularização jurídica ou implantação estejam concluídos.


## 12. Precedência de navegação pública — ADR-0013

A regra atual de acesso público é a allowlist descrita na seção 3.1 e no ADR-0013. A regra anterior de ADR-0007 que limitava anonimato à landing e boas-vindas foi substituída somente quanto às rotas públicas. Google continua obrigatório para identidade pessoal e ambientes protegidos. A Conversa pública usa Supabase Auth anônimo, limite global diário configurado pelo fundador e conteúdo público exclusivamente.

## 13. Fronteira de escopo entre MVP V7 e V8

A V7 deve concluir o núcleo essencial já definido: Praça UNO e apresentação institucional pública; navegação e leitura pública via Supabase conforme ADR-0013; Conversa pública de visitante com sessão anônima Supabase e limites; identidade pessoal Google + IDU server-side; Vitrine como descoberta e catálogo transparente; Comunidade e funções sociais nativas sem dependência de APIs de redes de terceiros; participação pública de leitura; e apresentação dos 18 universos como mapa navegável, sem afirmar que todos os serviços estejam ativos.

O catálogo público de Serviços pode existir no V7, mas contratação, reserva, matrícula, pedido, ativação operacional, onboarding de fornecedores, integrações externas, logística/mobilidade operacional e expansão dos serviços ficam reservados ao V8. A área Serviços Ativos no V7 deve permanecer estrutural/sem operações reais, salvo consulta a ativações efetivamente confirmadas por processo autorizado. Pagamentos reais, Connect, transferências, payouts e carteira sacável não são liberados por uma tela ou pelo deploy do MVP.

A lista oficial completa dos 18 universos ainda precisa ser recuperada: o registro atual `squareModules` contém 10 itens e `UNO_EXPERIENCE_AREAS` contém 10 áreas de experiência; nenhum deles deve ser tratado como lista dos 18 universos. Não inventar os nomes ausentes.

A definição detalhada, o estado observado e os critérios de fechamento estão em [Fronteira de escopo MVP V7 e expansão V8](../docs/V7/FRONTEIRA_MVP_V7_V8.md). V8 designa a próxima versão do produto, não o Volume 08 da EOU.
