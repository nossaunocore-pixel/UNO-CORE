# ADR-0002: Intermediação Obrigatória da Gemini API via Supabase Edge Function (`uno-ai-gateway`)

- **Status:** Aprovado
- **Data:** 2026-07-27
- **Autor:** Equipe de Engenharia NOS S.A. / UNO Arquiteto-Chefe

## Contexto
Toda requisição cognitiva originada no frontend para a Gemini API (Google AI Studio) deve possuir um limite estrito de segurança. Nenhuma chave secreta ou de API da IA pode residir no código do cliente web ou ser exposta no arquivo `.env.local` via variáveis `VITE_`.

## Decisão
1. Proibir categoricamente o uso de `VITE_GEMINI_API_KEY` no frontend.
2. Criar a arquitetura preparada para invocar uma Supabase Edge Function chamada `uno-ai-gateway`.
3. O frontend chamará apenas essa Edge Function passando o prompt e contexto.
4. A Edge Function consumirá a Gemini API utilizando a variável de ambiente server-side `GEMINI_API_KEY`.
5. No frontend, manter estritamente apenas `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` (mantendo suporte temporário para a chave legada `VITE_SUPABASE_ANON_KEY`).
6. Proibir o uso de `service_role` ou chave secreta do Supabase na aplicação client-side.

## Consequências
- Vazamento de chaves zerado no lado do cliente.
- Total controle sobre sanitização de prompts e auditoria server-side.
- Conformidade estrita com os padrões de segurança da NOS S.A.
