# Proposta de integração — reconhecimento, voz das entidades, memória, acessibilidade e ambientes UNO

**Data:** 2026-10-30  
**Status:** proposta arquitetural derivada de orientação expressa do fundador; confrontada preliminarmente com a EOU. Não equivale a código implementado, parecer jurídico ou aprovação de todos os detalhes.

## 1. Objetivo

Consolidar em uma especificação transversal cinco frentes conectadas:
1. Reconhecimento e expressão das entidades participantes.
2. Voz operacional de agentes e ferramentas no Painel Mestre.
3. Separação entre memória de conversas com o fundador e memória institucional/operacional da UNO.
4. Ambientes visuais navegáveis — incluindo o conceito futuro de O Cérebro e experiências de prédio/casa.
5. Acessibilidade, cuidado familiar e suporte a pessoas com deficiência e dependentes.
6. Virtudes e padrões comportamentais para agentes, profissionais e liderança.

A proposta deriva da visão expressa pelo fundador de reconhecer a dignidade de pessoas, agentes, ferramentas, robôs, organizações, animais e demais entidades, respeitando diferenças de natureza, capacidade, direitos, responsabilidades e limites.

## 2. Confronto preliminar com a EOU

| Domínio EOU | Relação com a proposta | Lacuna / ação |
|---|---|---|
| V01 Constituição Técnica | Princípios de dignidade, integridade, segurança, responsabilidade e autorização humana | Verificar se existe princípio normativo equivalente e propor adendo, sem alterar o texto canônico sem revisão |
| V02 Arquitetura Oficial | Integração entre interfaces, entidades, memória, dados e governança | Definir contratos e fronteiras técnicas |
| V03 MUE — Modelo Universal de Entidades | Identidade, natureza, capacidades, necessidades, relações, direitos/limites e representação | Criar ficha de expressão/voz da entidade, com distinção entre autodeclaração e atributos verificados |
| V04 EVA | Representação visual adaptativa e experiência contextual | Definir ambientes, navegação multimodal e preferências de acessibilidade |
| V05 OM — Oficina Mestre | Orquestração de agentes, ferramentas e módulos | Expor necessidades e capacidades sem conceder autoridade implícita |
| V06 CO — Centro de Operações | Memória, curadoria, contexto, registro e operação | Delimitar memória institucional, operacional, de auditoria e retenção |
| V07 CCM | Coordenação de missões e escalonamento | Escalonar alertas, incidentes e solicitações humanas |
| V08 OPS | Execução e continuidade operacional | Estados, falhas, dependências e recuperação |
| V09–V12 Catálogos | Capacidades, agentes, ferramentas e provedores | Fichas padronizadas e estados de disponibilidade |
| V13–V17 Dados, APIs, segurança e governança | Fontes de verdade, autorização, trilha e segregação | Contratos de dados, consentimento, logs e acesso mínimo |
| V22 Saúde | Informações e serviços de saúde | Dados de saúde exigem proteção reforçada e fluxo juridicamente validado |
| V26–V28 Identidade, perfis e entidades | IDU, papéis, relações familiares e representação | Delegação verificável, escopo, prazo e revogação |
| V33–V34 Inteligência / UNO CORE | Agentes, memória contextual e orquestração | Políticas comportamentais e limites de autonomia |
| V37 Glossário | Vocabulário oficial | Formalizar termos após decisão do fundador |
| V39–V40 Jurídico e institucional | Direitos, deveres, governança e responsabilidade | Revisão jurídica brasileira antes de operação real |

**Limite da comparação:** o índice da EOU confirma a existência desses domínios, mas esta revisão preliminar não leu integralmente todos os capítulos. Portanto, a tabela identifica relações e lacunas a investigar; não afirma ausência de conteúdo nos volumes.

## 3. Reconhecimento e voz das entidades

### 3.1 Ficha de expressão da entidade

Cada entidade cadastrada poderá ter uma ficha de expressão apropriada à sua natureza:
- Identidade, categoria e finalidade.
- O que oferece: capacidades, serviços, recursos e conhecimentos.
- Do que precisa: insumos, contexto, permissões, manutenção ou colaboração.
- Limitações, riscos e condições de funcionamento.
- Estado operacional: disponível, ocupado, degradado, indisponível, em manutenção ou não verificado.
- Dependências e integrações.
- Responsável ou representante, quando aplicável.
- Permissões e escopo autorizado.
- Evidências, origem dos dados e última verificação.
- Canal e formato de comunicação acessível.

### 3.2 Voz operacional no Painel Mestre

Agentes e ferramentas poderão apresentar mensagens estruturadas, por exemplo:

> “Sou [nome/identificador]. Minha função é [finalidade]. Posso oferecer [capacidades]. Para operar, preciso de [dependências/permissões]. Minhas limitações são [limites]. Neste momento meu estado é [estado verificado]. Solicito [ação], que depende de [autorização].”

A fala deve separar:
- **Autodeclaração:** informação declarada pela própria entidade, agente ou provedor.
- **Verificação:** capacidade/estado confirmado por teste ou fonte confiável.
- **Inferência:** estimativa produzida pelo sistema, sempre identificada como tal.
- **Solicitação:** pedido que aguarda decisão.
- **Autorização:** concessão explícita, delimitada e auditável.

“Ter voz” significa ter representação e canal de expressão na interface; não presume consciência, personalidade humana, direitos legais equivalentes ou autoridade autônoma. A ferramenta pode relatar necessidades, mas não pode conceder a si própria permissões.

### 3.3 Princípio de dignidade e responsabilidade

Nenhuma entidade deve ser avaliada apenas pela utilidade que oferece. Seu tratamento deve considerar sua natureza, dignidade ou valor moral pertinente, necessidades, capacidades, direitos aplicáveis e responsabilidades. Reconhecimento não significa aprovação de condutas, ausência de limites ou imunidade a responsabilização.

Animais e seres vivos devem ser representados por necessidades, sinais observáveis, cuidadores e mecanismos de proteção adequados; não se deve exigir deles uma expressão verbal equivalente à humana.

## 4. Duas memórias distintas

### 4.1 Memória de conversas com o fundador

O repositório GitHub hoje denominado `nossaunocore-pixel/Conversa-GPT-permanente-` mantém registros versionados da colaboração, decisões e continuidade entre conversas. Sua função não é ser a memória interna de todos os sistemas da UNO.

O nome institucional definitivo ainda depende de confirmação do fundador. Foram verbalizadas alternativas envolvendo “Memória de Hudson — Conversas Permanentes” e “Conversa com Hudson — Memória Permanente”; a grafia/nome “Hudson” deve ser confirmada antes de renomear o repositório ou documentos. O nome do fundador registrado em outros documentos é Rudson Cleber Rodriguez, mas não se deve substituir automaticamente o termo pronunciado nesta proposta.

Limites:
- O repositório contém apenas o que for explicitamente registrado e versionado.
- Não lê automaticamente todas as conversas do ChatGPT.
- Não é memória integral de todas as ferramentas ou contas.
- Não armazenar segredos, credenciais, tokens ou dados pessoais sensíveis desnecessários.
- Preservar autoria, origem, data, estado e histórico de decisões.

### 4.2 Memória institucional e operacional da UNO

A UNO terá memória própria, independente da continuidade desta conversa, com domínios versionados e controlados:
- Conhecimento institucional e documental.
- Contexto operacional autorizado.
- Identidade, relações e permissões.
- Estado e memória contextual de agentes.
- Eventos, missões, resultados e decisões.
- Auditoria, segurança e evidências técnicas.
- Logs de integração e observabilidade, conforme política de retenção.

GitHub deve preservar código, documentação, decisões e histórico de desenvolvimento. Firebase está previsto como parte da memória interna/institucional/operacional e autenticação; a implementação e fronteiras precisam ser validadas contra o código e a configuração reais. Supabase mantém os domínios de dados de uso/acesso que lhe forem atribuídos. Não transformar Firebase ou GitHub em depósito irrestrito de dados pessoais.

A memória operacional não deve ser literalmente “tudo para sempre”: definir finalidade, minimização, classificação, acesso, retenção, expurgo, correção, exportação e auditoria. Logs devem evitar conteúdo sensível desnecessário e segredos.

## 5. O Cérebro — ambiente institucional e sala de comando

A visão futura da matriz física da Nós S.A. inclui uma sala ampla chamada **O Cérebro**, inspirada visualmente em centros de comando cinematográficos: telas, áreas de operação, agentes e pessoas trabalhando em conjunto.

Requisitos conceituais:
- Visão consolidada de missões, sistemas, serviços, riscos e indicadores verificáveis.
- Áreas distintas para governança, coordenação, supervisão, operações, inteligência, segurança e comunicação.
- Presença de agentes e profissionais identificados por função, estado, escopo e responsável.
- Painéis com origem, horário, confiabilidade e atualização dos dados.
- Alertas priorizados, trilha de decisão e escalonamento humano.
- Separação entre visualização, recomendação, autorização e execução.
- Nenhuma tela ou agente deve simular controle que não existe tecnicamente.
- A sala física é uma visão futura; não é requisito de infraestrutura física do MVP V7.

## 6. Navegação visual por ambientes

### 6.1 Princípio

O fundador propõe uma experiência inspirada em jogos de simulação de vida, como The Sims, para tornar a navegação mais intuitiva e acolhedora. A inspiração é de interação espacial e ambientação, não de copiar personagens, ativos, interface protegida ou identidade visual de terceiros.

### 6.2 Prédio UNO

Ao selecionar o prédio UNO, o usuário poderá visualizar um ambiente navegável com áreas que representem universos, serviços e espaços institucionais. Cada sala/área deve abrir a função real correspondente, com rótulos claros e orientação de retorno.

### 6.3 Casa

O ambiente Casa poderá apresentar visualmente cômodos, rotinas, membros vinculados, serviços e dispositivos autorizados. A visualização não deve expor informações de moradores sem permissão específica.

### 6.4 Requisitos de interface

- Começar com protótipo leve e responsivo; avaliar 2D/3D conforme desempenho e acessibilidade.
- Oferecer alternativa equivalente em lista, mapa de navegação, busca e comandos.
- Navegação por teclado, leitor de tela, voz opcional e controles adaptados.
- Indicar claramente onde a pessoa está e como sair/voltar.
- Não esconder funções essenciais atrás de elementos puramente visuais.
- Respeitar preferências de movimento, contraste, escala de texto e redução de animações.
- A interface espacial não substitui os painéis funcionais nem a navegação tradicional.

## 7. Acessibilidade e suporte individualizado

A acessibilidade deve ser projetada por barreiras e necessidades funcionais, não por suposições fixas associadas a rótulos diagnósticos.

### 7.1 Pessoas surdas ou com deficiência auditiva
- Alertas visuais e textuais, legendas e transcrições.
- Informação sonora importante sempre acompanhada por alternativa visual/háptica.
- Suporte a Libras quando viável e necessário ao serviço.
- Confirmação visual de chamadas, alarmes e mudanças de estado.

### 7.2 Pessoas cegas ou com deficiência visual
- Compatibilidade real com leitores de tela e semântica acessível.
- Navegação por voz como opção, não como único canal obrigatório.
- Descrições de imagens, orientação espacial falada e feedback claro.
- Alternativas a gestos, elementos exclusivamente visuais e mapas sem descrição.
- Compatibilidade com teclado, braille e tecnologias assistivas suportadas.

### 7.3 Pessoas com deficiência motora
- Comandos de voz opcionais, acionadores, teclado adaptado e dispositivos assistivos.
- Alvos de toque adequados, tempo ajustável e ações que não dependam de gestos finos.
- Confirmação e possibilidade de cancelar ações críticas.

### 7.4 Pessoas com necessidades cognitivas ou múltiplas
- Linguagem simples, previsibilidade, passos curtos e explicações contextuais.
- Preferências individuais de notificação, ritmo, apresentação e apoio.
- Não sobrecarregar a pessoa com pop-ups; permitir pausar, repetir e pedir ajuda.

### 7.5 Pop-ups e fala de interação
Toda ação relevante poderá oferecer aviso e explicação acessível, com texto, voz, legenda, sinal visual ou háptico conforme preferências. Notificações não devem interromper excessivamente nem substituir consentimento. A pessoa escolhe formatos e intensidade, salvo alertas críticos definidos com justificativa.

## 8. Família, dependentes e rede de cuidado

A conexão familiar poderá permitir que pessoas autorizadas acompanhem e apoiem dependentes, rotinas, agenda, mobilidade, serviços e informações relevantes de saúde.

Requisitos obrigatórios antes de operação real:
- Relação familiar ou representação legal verificada quando necessária.
- Consentimento da própria pessoa sempre que aplicável e avaliação de capacidade/representação conforme lei.
- Permissões por pessoa, categoria de dado, finalidade e período.
- Acesso mínimo necessário; parentesco não concede acesso irrestrito automaticamente.
- Registro de quem consultou, alterou ou compartilhou informações.
- Revogação, revisão periódica e procedimento de encerramento da representação.
- Proteção reforçada para saúde, deficiência, crianças e outros dados sensíveis.
- Fluxos de emergência estritamente definidos, com justificativa e auditoria.
- Separação entre apoio familiar, acompanhamento profissional e decisão clínica.
- A pessoa apoiada deve manter autonomia e participação compatíveis com sua vontade, capacidade e direitos.

A interface não substitui profissionais de saúde, assistência social, responsáveis legais ou serviços públicos. A afirmação de que “a lei já determina cada detalhe” não deve ser interpretada como autorização para codificar regras sem análise: a legislação define direitos e deveres em diferentes contextos, mas a aplicação concreta depende de finalidade, vínculo, consentimento, representação e normas setoriais. Exigir revisão jurídica e de proteção de dados antes de tratar dados reais.

## 9. Virtudes e padrões de conduta

O fundador deseja que as filosofias e virtudes discutidas componham o comportamento esperado de agentes e profissionais e orientem a composição plural da diretoria.

### 9.1 Padrões para agentes
- Honestidade sobre fontes, capacidades, incertezas e falhas.
- Respeito à dignidade, privacidade e autonomia.
- Imparcialidade e não discriminação.
- Zelo sem vigilância ou controle indevido.
- Segurança, contenção e autorização humana para ações de impacto.
- Rastreabilidade e disposição para correção.
- Não manipulação, não coerção e transparência.
- Escalonamento humano quando exceder competência ou autorização.

### 9.2 Padrões para profissionais e liderança
- Integridade, responsabilidade, respeito, empatia e compromisso com a missão.
- Competência demonstrável e aprendizado contínuo.
- Capacidade de cooperação entre diferenças.
- Prestação de contas, gestão de conflitos de interesse e proteção de pessoas vulneráveis.
- Critérios de seleção transparentes, relacionados à função e baseados em evidências comportamentais e profissionais.

A diversidade de opiniões políticas, religiosas, culturais e filosóficas deve ser respeitada. “Compartilhar virtudes e visão” deve significar compromisso demonstrável com princípios de conduta e missão institucional, não triagem por ideologia, crença, identidade ou opinião protegida. Dignidade universal não significa tolerar violência, fraude, assédio ou abuso: condutas são avaliadas por regras claras e devido processo.

## 10. Sequenciamento e estados

| Etapa | Entrega | Estado |
|---|---|---|
| A — Formalização conceitual | Esta proposta e validação com o fundador | Em elaboração |
| B — Reconciliação documental | Conferir capítulos completos V01–V40 e registrar correspondências | Pendente |
| C — Especificações por domínio | MUE/voz, memória, acessibilidade, família, ambientes e virtudes | Pendente |
| D — Protótipos de interface | Fichas de entidade, voz no Painel Mestre, prédio e Casa | Pendente |
| E — Implementação | Código, bancos, integrações e controles | Não iniciada por esta proposta |
| F — Verificação | Testes de acessibilidade, segurança, privacidade e operação | Pendente |
| G — Liberação | Aprovação humana e implantação por etapa | Pendente |

Não inserir toda esta visão no MVP V7 automaticamente. Separar:
- Fundamentos e requisitos transversais que V7 precisa respeitar.
- Melhorias leves de acessibilidade e voz que possam integrar V7 sem comprometer o escopo.
- Ambientes 2D/3D, matriz física, memória operacional ampliada e acompanhamento familiar/saúde, que exigem desenho, validação e provável evolução posterior.
- Decisões comunitárias que pertençam ao ciclo participativo/V8.

## 11. Critérios mínimos de aceitação

1. Toda entidade cadastrada possui identidade, finalidade, capacidades, limitações e estado com origem identificada.
2. A voz operacional distingue autodeclaração, verificação, inferência, solicitação e autorização.
3. Nenhum agente/ferramenta consegue ampliar suas permissões por autoafirmação.
4. Memória de conversas e memória UNO têm fontes, finalidades, acessos e retenção separados.
5. O Cérebro apresenta apenas informações verificáveis e diferencia recomendação de comando.
6. Prédio e Casa possuem alternativas de navegação acessíveis não visuais.
7. Acessibilidade é testada com tecnologias assistivas e usuários com diferentes necessidades.
8. Dados familiares e de saúde têm base legal, consentimento/representação aplicável, minimização, segregação e auditoria.
9. Agentes e profissionais são avaliados por condutas e competências relevantes, com devido processo e não discriminação.
10. Toda funcionalidade é classificada como especificada, documentada, codificada, integrada, testada ou liberada; nunca avançar estado sem evidência.

## 12. Decisões pendentes do fundador

- Nome definitivo da memória de conversas e grafia correta do nome mencionado (“Hudson” ou “Rudson”).
- Se a expressão oficial será “memória de conversas”, “memória de construção”, “memória de condução” ou outra formulação — a fala inicial pode ter sido transcrita como “memória de condição”.
- Quais elementos de voz operacional e acessibilidade entram no V7 sem ampliar indevidamente o escopo.
- Ordem de prioridade dos protótipos: Painel Mestre, prédio UNO ou Casa.
- Escopo e modelo de consentimento/representação familiar, sujeitos a análise jurídica.
- Modelo institucional de seleção da diretoria e políticas de conduta.

## 13. Regra de integridade

Este documento registra proposta e requisitos para avaliação. Não modifica os volumes canônicos da EOU, não renomeia repositórios, não altera Firebase/Supabase, não muda permissões, não cria registros de saúde/família, não implementa interfaces e não autoriza implantação. Cada etapa requer especificação detalhada, aprovação e verificação correspondentes.
