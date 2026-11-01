# V7 — Centro de Comando do Orquestrador Mestre

- **Data:** 2026-11-01
- **Branch:** `v7-orchestrator-command-center-2026-11-01`
- **Base:** `v7-implementation`
- **Ambiente autorizado nesta etapa:** Preview
- **Produção:** bloqueada; esta atualização não promove domínios nem altera o target de produção.

## Objetivo

Incorporar ao Painel Mestre uma experiência visual de comando inspirada na referência fornecida pelo fundador: visão central do Orquestrador, ferramentas e agentes agrupados por função, estado de integração, áreas de trabalho, aprovações, riscos, auditoria e console de interação.

## Capacidades visíveis

- Modos de trabalho: Conversar, Analisar, Planejar e Simular.
- Acesso às áreas existentes: Oficina Mestre, Agentes, APIs/Integrações e Auditoria.
- Atalhos aos painéis institucionais já previstos.
- Mapa visual dos motores: Gemini, EVA, GPT, MUE, MUI, AI Studio, CCM, OPS, Supabase e Firebase.
- Indicação explícita de estados ainda não verificados.

## Limites desta entrega

- A tela permanece atrás do `MasterPanelGateV7`, que exige sessão Firebase e claim `unoFounder` ou `unoMaster`.
- O console de interação desta etapa é um rascunho local de interface: não chama agentes, não grava mensagens no banco e não executa ações externas.
- A criação versionada de ativos deve ocorrer na Oficina Mestre existente; criação não significa aprovação, ativação ou publicação.
- Os estados apresentados são rótulos de governança e não telemetria em tempo real.
- Nenhuma integração, chave, migration, regra de banco, permissão, domínio ou variável Vercel é alterada por esta entrega.
- A imagem de referência é diretriz de experiência, não prova de que os motores estejam conectados.

## Próximas etapas técnicas

1. Conectar o console a um endpoint de orquestração server-side com autenticação e IDU.
2. Persistir conversas, solicitações, planos e simulações com trilha de auditoria.
3. Ligar o catálogo de agentes e ferramentas a estados reais verificados.
4. Ligar criação de universos, módulos, produtos, serviços, APIs, páginas e protocolos a schemas versionados da Oficina.
5. Exigir revisão, escopo de permissão e aprovação humana antes de ativar ou publicar artefatos.
6. Executar build, testes, validação responsiva e testes de autorização no Preview antes de qualquer promoção.

## Critérios de aceite

- Painel visível somente após autorização mestre verificada.
- Interface responsiva em desktop e dispositivos móveis.
- Nenhuma alegação de conexão real sem evidência.
- Console não executa operações externas nesta etapa.
- V6 permanece preservada.
- Preview validado; produção não promovida.


## Ajuste de experiência pública — boas-vindas da Praça UNO

- O balão inicial “Olá! Quer conhecer o que estamos construindo?” deve oferecer controle visível de fechar, com rótulo acessível.
- Fechar o balão dispensa a apresentação sem retirar o avatar/atalho da UNO; oferecer ação discreta para reabri-lo.
- O fechamento encerra também eventual etapa ativa do tour, evitando manter conteúdo de apresentação oculto em estado inconsistente.

## Preparação de identidade — etapa Antigravity/Firebase

- Não ativar nem alterar provedores nesta atualização.
- Após a configuração inicial do Firebase pelo Antigravity, validar cadastro por e-mail/senha e autenticação Google, recuperação de senha, verificação de e-mail, persistência de sessão e autorização por claims.
- O fluxo de visitante Supabase permanece separado da Identidade UNO Firebase.
- Não promover produção nem alterar regras/segredos até revisão dos resultados dessa configuração.
