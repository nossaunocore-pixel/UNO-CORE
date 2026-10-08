# UNO CORE — Universo Novo Operacional

> **Equipe de Engenharia Oficial:** NOS S.A.  
> **Projeto:** UNO CORE (Painel de Criação e Administração - PCA)  
> **Segurança:** Gateway de IA Server-side (`uno-ai-gateway`)

O **UNO CORE** é o núcleo operacional e cognitivo da plataforma **UNO — Universo Novo Operacional**. O sistema funciona como um **Sistema Operacional Adaptativo de Orquestração e Governança de Capacidades**.

---

## ⚡ Tecnologias da Aplicação Base

- **Core Framework:** React 18 + TypeScript 5 + Vite 5
- **Icons & Visuals:** Lucide React + Glassmorphism Cyber-Operations UI
- **Database & Edge Gateway:** `@supabase/supabase-js` (Invocação de Edge Function `uno-ai-gateway`)
- **Arquitetura Conceitual:** 9 Subsistemas (`/core`) + Engenharia de Specs (`/spec`)

---

## 🔒 Regras de Segurança (NOS S.A.)

- **Frontend Environment**:
  - `VITE_SUPABASE_URL=https://qfeyppyubxlewskpwtuh.supabase.co`
  - `VITE_SUPABASE_PUBLISHABLE_KEY=` (ou chave legada `VITE_SUPABASE_ANON_KEY`)
- **Proibições Estritas**:
  - ❌ NUNCA utilizar `VITE_GEMINI_API_KEY` no frontend.
  - ❌ NUNCA utilizar `SUPABASE_SERVICE_ROLE_KEY` no frontend.
  - 🌐 As requisições para a Gemini API passam exclusivamente pela Supabase Edge Function `uno-ai-gateway` usando o segredo server-side `GEMINI_API_KEY`.

---

## 🚀 Como Executar Localmente

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Configurar Variáveis de Ambiente:**
   Crie o arquivo `.env.local` na raiz baseado no `.env.example`:
   ```bash
   VITE_SUPABASE_URL=https://qfeyppyubxlewskpwtuh.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=sua_chave_publica_aqui
   ```

3. **Iniciar Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Compilar para Produção:**
   ```bash
   npm run build
   ```

---

## 📚 Documentação Técnica

Toda a documentação oficial da NOS S.A. está estruturada em `/spec`:
- [Especificação Mestra (MASTER_SPEC.md)](spec/MASTER_SPEC.md)
- [Arquitetura de Engenharia (ARCHITECTURE.md)](spec/ARCHITECTURE.md)
- [Registro de Decisões - ADRs (DECISIONS.md)](spec/DECISIONS.md)
- [ADR-0002 AI Gateway Edge Function (spec/ADR/0002-ai-gateway-edge-function.md)](spec/ADR/0002-ai-gateway-edge-function.md)
- [Roadmap do Projeto (ROADMAP.md)](spec/ROADMAP.md)
