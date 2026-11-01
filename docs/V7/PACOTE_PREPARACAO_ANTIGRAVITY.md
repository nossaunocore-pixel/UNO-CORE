# V7 — Pacote de preparação para implantação pelo Antigravity

Data: 2026-10-30
Branch técnica: v7-implementation
Estado: preparação em andamento; NÃO liberar produção nem considerar MVP concluído.

## Objetivo

Concluir no repositório todo o código que pode ser preparado sem acesso ao console Firebase/Google Cloud, sem credenciais privadas e sem decisões institucionais ainda não aprovadas. Entregar ao Antigravity uma base coerente para configurar Firebase, completar a identidade operacional, preencher os dados institucionais autorizados e executar os testes de autenticação Google e dos perfis.

## Limites e responsabilidades

### GPT / repositório técnico

- Implementar componentes, rotas, estados, formulários, validações e fluxos que pertencem ao código.
- Implementar o catálogo e a navegação dos universos somente com classificação institucional confirmada; itens ainda não aprovados devem ser marcados como proposta e não apresentados como decisão definitiva.
- Implementar a experiência responsiva baseada nas referências visuais entregues em 2026-10-30.
- Implementar as funções nativas que não dependem de APIs externas.
- Implementar os módulos de perfil, rede social, comunidade, participação, vitrine e painéis com estados reais, sem métricas ou atividade fictícias.
- Preparar migrações, políticas RLS, contratos de dados e testes do Supabase.
- Preparar APIs server-side, validação de sessão, auditoria, rate limits e testes automatizados.
- Documentar variáveis de ambiente por finalidade, sem valores secretos.
- Manter produção intacta e o PR #1 como Draft até validação.

### Antigravity / console e ambiente de produção

- Criar/confirmar o projeto Firebase e registrar os aplicativos web necessários.
- Habilitar Google Authentication e configurar OAuth, domínios autorizados e URLs de retorno.
- Configurar as variáveis Firebase no ambiente Vercel correto, sem publicar segredos no frontend.
- Configurar Firebase Admin/service account apenas no servidor.
- Criar/estruturar/preencher Firestore e demais recursos Firebase para produção conforme regras e modelos entregues.
- Publicar regras Firebase, índices, TTL e App Check conforme plano de segurança.
- Configurar Firebase como provedor de autenticação de terceiros no Supabase quando necessário para JWT Firebase em consultas autenticadas/RLS.
- Executar o roteiro de implantação e os testes reais com conta Google.
- Não alterar a arquitetura pública: a navegação de visitante deve depender somente do Supabase; Firebase não pode ser pré-requisito para abrir e consultar conteúdo público.

## Arquitetura vinculante

1. Visitante: navegação e leitura pública via Supabase com chave publicável/anon e RLS de leitura pública. Não exigir Firebase Anonymous para renderizar páginas públicas.
2. Participante autenticado: Firebase Authentication (Google/e-mail, conforme configuração) como identidade; Supabase recebe o JWT Firebase por integração Third-Party Auth habilitada e validada, para operações permitidas por RLS.
3. IDU: identificador UNO próprio, vinculado à identidade técnica por serviço server-side; nunca confundir UID Firebase com IDU.
4. Firebase: estrutura institucional/operacional e memória operacional será preparada pelo Antigravity posteriormente, para produção.
5. Supabase: navegação pública, dados de participantes, relações e persistência dos módulos sob RLS.
6. Segredos: service-role, Firebase Admin e chaves privadas somente em ambiente server-side; nunca em variáveis VITE_.
7. Nenhuma operação sensível pode confiar apenas em ocultação de botão ou controle React; autorização deve existir no servidor e no banco.

## Inventário de implementação

### A. Base e navegação
- [ ] Mapa institucional validado dos 18 universos e seus subuniversos.
- [ ] Diretório navegável de universos e módulos.
- [ ] Navegação por perfil, contexto, território e permissões.
- [ ] Estados: público, requer login, requer vínculo, em preparação, indisponível, erro e sucesso.
- [ ] Navegação responsiva desktop/tablet/celular.
- [ ] Saída universal: botão de fechar/sair, Android Back, Escape, foco, scroll e descarte seguro.

### B. Perfis e identidade
- [ ] Login Google e e-mail testáveis.
- [ ] Provisionamento IDU idempotente e verificável.
- [ ] Perfil pessoal editável e persistido.
- [ ] Ativação de contextos pessoais, parceiro, profissional e institucional.
- [ ] Preferências e visibilidade por campo.
- [ ] Consentimentos, exportação, correção e exclusão.
- [ ] Isolamento de dados entre titulares e organizações.

### C. Funções nativas sem APIs externas
- [ ] Navegação, diretório, tour, filtros e busca em dados já disponíveis.
- [ ] Formulários, validações, rascunhos e pré-visualizações.
- [ ] Calendários, organizadores, simuladores e calculadoras locais.
- [ ] Gestão de preferências e configurações.
- [ ] Estados vazios, erros, confirmações e acessibilidade.
- [ ] Diferenciar função local de função sincronizada/compartilhada.

### D. Social e comunidade
- [ ] Feed público e autenticado.
- [ ] Criar/editar/excluir publicações próprias.
- [ ] Reações, comentários, respostas, salvar e compartilhar internamente.
- [ ] Seguir/deixar de seguir, descoberta e filtros.
- [ ] Denúncia, bloqueio, moderação e auditoria.
- [ ] Comunidades territoriais, grupos, iniciativas e projetos.
- [ ] Notificações persistentes.
- [ ] Visitantes somente leem conteúdo público aprovado.

### E. Comercial e parceiros
- [ ] Perfis de parceiro, loja, profissional e instituição.
- [ ] Catálogo, produtos, serviços, ofertas e oportunidades.
- [ ] Pedidos, orçamentos, reservas e acompanhamento.
- [ ] Logística e entregas como módulos próprios.
- [ ] Reputação e avaliações somente após operação verificada.
- [ ] Checkout, Stripe Connect, repasses, reembolsos e ledger em etapa controlada, com testes e webhooks.

### F. Participação e governança
- [ ] Propostas, debates, consultas e votações com tipos distintos.
- [ ] Elegibilidade, quórum, prazos, atas e trilha de auditoria.
- [ ] Painel Mestre funcional, com papéis, escopos, aprovações e auditoria.
- [ ] Painéis Administrativo, Coordenação, Supervisão, Operações e Comercial.
- [ ] Agentes e ferramentas com permissões, limites, filas e aprovação humana.
- [ ] Nenhum dado demonstrativo apresentado como dado real.

### G. IA e serviços
- [ ] Escolher e documentar um único gateway de IA.
- [ ] Autenticação, quotas, rate limit, logs sem dados sensíveis e proteção contra abuso.
- [ ] Histórico e memória com finalidade, consentimento e retenção definidos.
- [ ] Encaminhamentos e solicitações acompanháveis.
- [ ] Ações externas sempre sujeitas à autorização humana e ao escopo do agente.

## Problemas conhecidos que precisam ser tratados no código

1. AuthControlV7 já contém signInWithPopup(new GoogleAuthProvider()), mas isso não prova que o provedor Google esteja habilitado ou que os domínios OAuth estejam configurados.
2. PageAccessGateV7 libera páginas públicas antes de consultar Firebase, o que deve ser preservado.
3. ConversationV6 e api/chat.ts ainda usam sessão anônima Firebase/Firestore para o visitante. Rever esse fluxo separadamente para que a navegação pública não dependa de Firebase e para que a conversa só tenha as dependências explicitamente aprovadas.
4. src/services/supabase.ts envia o Firebase ID token como access token. A integração Firebase Third-Party Auth no projeto Supabase deve ser configurada e testada antes de considerar RLS autenticada operacional.
5. api/identity/session.ts depende de Firebase Admin, Firestore e variável UNO_FOUNDER_UID; não está pronto até o Antigravity configurar e testar esses recursos.
6. MasterPanelV6, AgentsCenterV638, IntegrationsCenterV637 e AuditCenterV639 ainda contêm estados declarativos/demonstrativos; não podem ser tratados como operação real.
7. ParticipationV63 e NosShowcaseV63 identificam módulos como demonstração/planejados; os fluxos operacionais ainda precisam ser construídos.
8. A enumeração recuperada dos 18 universos ainda aparece como classificação proposta em registros anteriores; validar nomes e definições antes de torná-los catálogo institucional definitivo.

## Roteiro de aceite para teste com conta Google

1. Antigravity configura o provedor Google, domínios e ambiente de Preview.
2. Entrar com uma conta Google de teste.
3. Confirmar UID do provedor e provisionamento único de IDU.
4. Confirmar claims e papéis sem permitir autoelevação.
5. Acessar perfil pessoal e ativar somente contextos autorizados.
6. Confirmar que a sessão autenticada recebe acesso Supabase via JWT Firebase e que as policies RLS isolam os dados.
7. Confirmar que visitante sem sessão Firebase abre Praça, Vitrine, Comunidade e conteúdo público consultado no Supabase.
8. Confirmar que visitante não publica, não comenta e não acessa dados privados.
9. Testar Android Back, Escape e botão de saída nos overlays.
10. Testar isolamento entre duas contas Google distintas.
11. Testar revogação de sessão, falhas de configuração e respostas 401/403/429.
12. Só depois de evidências, liberar o PR para revisão humana; não promover produção automaticamente.

## Regra de conclusão

Cada item deve receber um estado verificável: não iniciado, em código, integrado, testado no Preview, bloqueado por configuração externa ou aprovado. Build verde, tela visível ou deploy READY não equivalem a teste ponta a ponta.

## CONTINUAR DESTE DOCUMENTO

Retomar a implementação pela branch v7-implementation, preservar a produção e o PR Draft. Primeiro consolidar os modelos e contratos de dados; em seguida implementar por domínio, executar build/testes e entregar ao Antigravity apenas tarefas de console, segredos, provisionamento Firebase e testes reais de OAuth/Google que dependam do ambiente externo.

## Nota de precedência — revisão técnica de 2026-11-01

Este pacote contém instruções e inventários de etapas anteriores. As referências antigas a sessão anônima Firebase em `ConversationV6`/`api/chat.ts` foram superadas: a Conversa de visitante usa Supabase Anonymous Auth e endpoint público separado; a rota privada usa Google verificado + IDU. A autenticação pessoal do MVP é Google, sem alternativa Email/Password. A navegação pública não depende de Firebase. Para o limite entre V7 e V8, não implementar ativação/contratação de serviços no MVP; prevalece `docs/V7/FRONTEIRA_MVP_V7_V8.md`.
