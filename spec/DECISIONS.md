# DECISIONS.md — Registro Resumido de Decisões de Arquitetura (NOS S.A.)

| ADR ID | Data | Título | Status | Resumo / Justificativa |
|---|---|---|---|---|
| **ADR-0001** | 2026-07-27 | Adotação da Estrutura Modular `/core` e `/spec` | **Aprovado** | Separação estrita entre lógica do Kernel, especificações técnicas e interface do PCA. |
| **ADR-0002** | 2026-07-27 | Supabase como Camada de Persistência Desacoplada | **Aprovado** | Utilização de `VITE_SUPABASE_PUBLISHABLE_KEY` (e fallback `VITE_SUPABASE_ANON_KEY`) sem hardcode. |
| **ADR-0003** | 2026-07-27 | Interface Futurista Estilo Centro de Operações | **Aprovado** | Layout escuro com Glassmorphism, menu lateral recolhível e foco no Chat do UNO CORE. |
| **ADR-0004** | 2026-07-27 | Orquestração por Capacidades (não por Funcionalidades) | **Aprovado** | O UNO CORE gerencia capacidades auditáveis que podem ser combinadas e executadas dinamicamente. |
| **ADR-0005** | 2026-07-27 | Gateway de IA Server-Side via Supabase Edge Function (`uno-ai-gateway`) | **Aprovado** | A chave `GEMINI_API_KEY` reside exclusivamente no ambiente server-side da Edge Function. Proibido `VITE_GEMINI_API_KEY` no browser. |
| **ADR-0006** | 2026-07-27 | Padronização da VITE_SUPABASE_PUBLISHABLE_KEY | **Aprovado** | Renomeação para a convenção moderna da Supabase com suporte temporário à chave legada. |
