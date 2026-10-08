# ARCHITECTURE.md — Arquitetura de Engenharia do UNO CORE

**Organização:** NOS S.A.  
**Sistema:** UNO CORE  
**Revisão de Segurança:** Gateway Server-Side (`uno-ai-gateway`)

---

## 1. Visão de Camadas e Limite de Segurança

```
+-------------------------------------------------------------------+
|                        UNO Interface (PCA)                        |
|  (Visão Geral, Conversa, Agentes, Capacidades, Governança, etc.) |
+-------------------------------------------------------------------+
                                  |
                                  v  (VITE_SUPABASE_PUBLISHABLE_KEY)
+-------------------------------------------------------------------+
|                            UNO Kernel                             |
|    (Bootstrapper, LifeCycle Manager, System Telemetry & Status)  |
+-------------------------------------------------------------------+
         |               |                |               |
         v               v                v               v
  +--------------+ +-----------+  +--------------+ +--------------+
  |  UNO Brain   | | UNO Engine|  |  UNO Memory  | |  UNO Agents  |
  | Context/Rules| | Orchestr. |  | Supabase RLS | |  AI Registry |
  +--------------+ +-----------+  +--------------+ +--------------+
                                          |
                                          v  (invoke 'uno-ai-gateway')
+-------------------------------------------------------------------+
|            Supabase Edge Function (uno-ai-gateway)                |
|       [Segurança Server-Side: Usa GEMINI_API_KEY do Vault]        |
+-------------------------------------------------------------------+
                                  |
                                  v  (API Key HTTPS)
+-------------------------------------------------------------------+
|                   Google AI Studio (Gemini API)                   |
+-------------------------------------------------------------------+
```

---

## 2. Princípios do Boundary de Segurança (Server-Side AI Gateway)

1. **Separação de Chaves**:
   - **Frontend Browser**: Possui apenas a chave pública `VITE_SUPABASE_PUBLISHABLE_KEY` (com fallback temporário para `VITE_SUPABASE_ANON_KEY`).
   - **Backend Server-Side**: A Supabase Edge Function `uno-ai-gateway` armazena o segredo `GEMINI_API_KEY` isolado do navegador.

2. **Benefícios Arquiteturais**:
   - Impede o vazamento ou engenharia reversa da chave da Gemini API no cliente.
   - Centraliza políticas de rate-limiting, auditoria e sanitização de prompts em um único ponto de controle server-side.
   - Garante que nenhuma chave `service_role` seja exposta na aplicação web.
