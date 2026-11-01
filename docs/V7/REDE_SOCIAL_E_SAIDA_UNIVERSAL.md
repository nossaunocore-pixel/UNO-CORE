# Rede social UNO e regra universal de saída
Data: 2026-10-30
Branch de implementação: v7-implementation
Status: requisito aprovado para implementação; ainda não declarar entregue.

## 0. Arquitetura acordada: visitantes, Supabase e Firebase
- A navegação pública/visitante da UNO depende somente do Supabase. O acesso às páginas e aos dados públicos deve ser resolvido pela integração Supabase, sem exigir criação de usuário anônimo ou autenticação visitante no Firebase.
- O Supabase é a camada de dados dos usuários e deve controlar a leitura pública permitida por políticas RLS adequadas. A interface não substitui autorização no banco.
- O Firebase não é pré-requisito da navegação de visitante nem deve ser tratado como dependência para liberar as páginas públicas no Preview.
- O banco/estrutura de dados do Firebase será criado, estruturado e preenchido posteriormente pelo Antigravity, na etapa de preparação para produção, conforme a arquitetura institucional/operacional da UNO. Não antecipar essa etapa nem declarar o Firebase configurado antes da execução e validação pelo Antigravity.
- Esta decisão não autoriza expor dados privados: conteúdo público aprovado pode ser lido por visitantes; dados pessoais, conteúdo restrito e ações de escrita permanecem sujeitos a autenticação, autorização e políticas apropriadas.
- A rede social deve priorizar funções sem APIs externas. A persistência e sincronização de dados sociais seguem o backend próprio definido para cada domínio; a navegação pública de visitante permanece dependente apenas do Supabase.

## 1. Rede social no MVP
A UNO deve incluir uma dimensão de rede social própria, integrada à navegação da plataforma. O trabalho deve priorizar funções que não dependem de APIs de terceiros.

### 1.1 Funções de interface e execução local
- Feed de publicações com paginação ou carregamento progressivo.
- Criar, editar e excluir a própria publicação, com confirmação antes de excluir.
- Publicar texto e, quando houver suporte seguro de armazenamento, anexos de mídia.
- Curtir e retirar curtida.
- Comentar, responder e editar/excluir os próprios comentários.
- Compartilhar publicação dentro da UNO por referência/link interno.
- Salvar e remover dos salvos.
- Seguir/deixar de seguir participantes, quando houver identidade disponível.
- Descobrir publicações por tema, comunidade e território.
- Preferências de feed e filtros básicos.
- Denunciar publicação/comentário e bloquear participante, com confirmação e feedback.
- Estados vazios, carregamento, erro, sucesso e indisponibilidade.
- Acessibilidade por teclado, leitores de tela e layouts responsivos.

### 1.2 Regras de verdade operacional
- Não inserir publicações, perfis, contagens, comentários, curtidas ou notificações fictícias como se fossem atividade real.
- Distinguir claramente conteúdo demonstrativo de conteúdo publicado por participantes.
- A camada local pode permitir rascunhos, pré-visualização, filtros, preferências e interações de demonstração no próprio dispositivo.
- A sincronização entre pessoas exige persistência e autorização no backend próprio da UNO. Para a navegação pública/visitante, a fonte definida é o Supabase; não introduzir dependência do Firebase para esse acesso. “Sem API de terceiros” não significa “sem comunicação com backend”.
- Não anunciar uma publicação como compartilhada com a comunidade enquanto ela não tiver sido persistida e confirmada pelo servidor.
- Ações que alterem dados devem ser autorizadas no servidor e nas regras do banco, não apenas ocultadas na interface.
- Definir privacidade e audiência por publicação; padrão conservador, com prévia clara antes de publicar.
- Não armazenar dados sensíveis em localStorage/sessionStorage. Evitar persistência local de conteúdo pessoal além do necessário; oferecer exclusão de rascunhos.
- Denúncia, bloqueio e moderação precisam de trilha auditável e política de tratamento antes de serem apresentados como proteção efetiva.

### 1.3 Permissões mínimas
- Visitante: visualizar apenas conteúdo público aprovado e navegar por áreas públicas; não pode publicar, reagir, comentar, seguir ou enviar denúncias autenticadas.
- Participante autenticado: criar e gerenciar as próprias publicações e interações conforme consentimentos, estado da conta e regras de comunidade.
- Moderador: tratar denúncias e aplicar medidas somente com autorização explícita e registro de auditoria.
- Administrador/mestre: permissões privilegiadas com claims verificadas no servidor; nunca confiar apenas em estado de interface.
- Perfil e dados privados nunca devem ser expostos por simples acesso a uma rota pública.

## 2. Regra universal para diálogos e sobreposições
Todo elemento temporário que se sobreponha à página ou interrompa o fluxo deve oferecer uma saída explícita e previsível.

### 2.1 Elementos cobertos
- Diálogos e modais.
- Balões de informação e ajuda.
- Popovers, menus expandidos e menus contextuais.
- Painéis laterais, drawers e bottom sheets.
- Tutoriais, tours e etapas guiadas.
- Formulários em janela, seletores e visualizadores.
- Alertas interativos, confirmações e avisos que bloqueiem a navegação.
- Pré-visualização de mídia e qualquer camada flutuante com foco próprio.

### 2.2 Comportamento obrigatório
- Botão visível “Fechar” ou “Sair” em todos os elementos dispensáveis.
- Botão “Cancelar” quando houver formulário ou ação não confirmada.
- Android: gesto/botão Voltar deve fechar primeiro a sobreposição mais recente; só depois deve navegar para a página anterior ou permitir saída do app/navegador.
- Navegador desktop: tecla Escape fecha a sobreposição superior quando isso não causar perda inesperada.
- Clique fora pode fechar somente elementos não destrutivos e quando o contexto permitir.
- Se houver dados não salvos, perguntar se a pessoa deseja descartar ou continuar editando; nunca descartar silenciosamente.
- Restaurar foco ao controle que abriu a sobreposição.
- Gerenciar corretamente empilhamento: fechar apenas a camada superior, sem fechar todas de uma vez.
- Impedir scroll indevido do conteúdo de fundo enquanto modal bloqueante estiver aberto.
- Garantir foco acessível, aria-modal, nome acessível e navegação por teclado quando aplicável.
- O fechamento deve liberar listeners, locks de scroll, foco e recursos associados.
- Nenhuma sobreposição pode deixar a pessoa presa sem ação de saída.

### 2.3 Implementação técnica esperada
- Criar um mecanismo central de gerenciamento/empilhamento de overlays e integração com popstate/histórico de navegação.
- Cada overlay deve registrar abertura e limpeza de forma determinística; o botão/gesto Voltar fecha somente o topo da pilha.
- Não adicionar listeners globais independentes em cada modal sem coordenação, para evitar múltiplos fechamentos por um único toque.
- Componentes que não forem overlays (toast não bloqueante, tooltip de hover) devem continuar dispensáveis e não interceptar Voltar.
- Testar Android físico ou emulador, Chrome desktop, teclado, leitor de tela e múltiplas sobreposições aninhadas.

## 3. Critérios de aceite
1. A área de rede social aparece na navegação e respeita o modelo de acesso.
2. É possível testar funções locais sem APIs de terceiros, com rótulo claro quando os dados não são compartilhados.
3. Nenhuma interação de demonstração é apresentada como ação social real.
4. A sincronização multiusuário só é habilitada após backend, regras, autorização e testes; a navegação de visitante usa apenas Supabase. Firebase será preparado pelo Antigravity posteriormente, na etapa de produção.
5. Todo modal/popover/drawer/tour/visualizador relevante tem botão de saída.
6. Em Android, Voltar fecha a sobreposição superior antes de navegar para fora da tela.
7. Em desktop, Escape fecha a sobreposição superior quando aplicável.
8. Formulários com alterações não salvas pedem confirmação.
9. Fechar uma camada restaura foco e não deixa listeners ou bloqueios ativos.
10. O comportamento é testado em viewports móveis e desktop.

## 4. Limites e dependências
- Não promover a produção com base apenas na presença da interface.
- Não declarar rede social multiusuário pronta sem persistência, regras, moderação, privacidade e testes ponta a ponta.
- Não declarar “todas as janelas fecham pelo Voltar” sem inventário e teste dos componentes existentes.
- Preservar o PR #1 como Draft até conclusão dos critérios de aceite e revisão humana.