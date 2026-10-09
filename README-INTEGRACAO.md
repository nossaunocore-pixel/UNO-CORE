# UNO V6 — Interface Base

Pacote aditivo para a branch `v6-interface-base`.

## Conteúdo

- `src/App.tsx`: ativa a experiência V6.
- `src/v6/V6App.tsx`: navegação central.
- `src/v6/pages/PublicSquareV6.tsx`: Praça UNO pública.
- `src/v6/pages/ConversationV6.tsx`: conversa conectada a `/api/chat`.
- `src/v6/pages/UserSquareV6.tsx`: Praça do usuário.
- `src/v6/pages/MasterPanelV6.tsx`: painel demonstrativo do Orquestrador Mestre.
- `src/v6/v6.css`: identidade visual responsiva.

## Segurança desta etapa

- Não contém chaves, tokens ou credenciais.
- Não altera Firebase, Supabase, Stripe ou Vercel.
- Não apaga as páginas anteriores.
- O Painel Mestre é apenas visual; comandos reais permanecem bloqueados.
- O upload apresentado no painel ainda não envia arquivos.

## Recursos esperados no projeto

- `/public/assets/uno/avatar-uno-corpo-inteiro-v1.png`
- `/public/assets/uno/cidade-uno-sem-avatar-v4.png`
- `/public/assets/uno/landing-uno.png.png` como fallback visual

## Validação executada

- TypeScript: aprovado.
- Vite build: aprovado.
- 1.476 módulos transformados.

