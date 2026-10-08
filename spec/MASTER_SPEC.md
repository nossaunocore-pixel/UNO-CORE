# MASTER_SPEC.md — Especificação Mestra do UNO CORE

**Organização:** NOS S.A.  
**Projeto:** UNO — Universo Novo Operacional  
**Núcleo:** UNO CORE  
**Versão:** 1.0.1-alpha (Revisão de Segurança Server-Side)  
**Data:** 27 de Julho de 2026  

---

## 1. Visão Geral Executiva

O **UNO CORE** é o núcleo operacional e cognitivo da plataforma **UNO — Universo Novo Operacional**. O sistema não é construído em torno de "funcionalidades isoladas", mas sim estruturado estritamente como um **Sistema Operacional Adaptativo de Orquestração e Governança de Capacidades**.

A plataforma opera integrando inteligência cognitiva (Google AI Studio - *UNO Arquiteto-Chefe*), memória persistente segura (Supabase - *Uno Universo Novo Operacional*) e interfaces futuristas de alto desempenho (referenciadas visualmente a partir do Google Stitch).

---

## 2. Princípios de Engenharia e Regras Estritas de Segurança (NOS S.A.)

1. **Modularidade por Capacidades**: Toda extensão do sistema deve ser encapsulada como uma capacidade declarativa, auditável e versionável.
2. **Engenharia Antes da Implementação**: Nenhuma alteração de código ou integração é realizada sem análise arquitetural prévia e registro de decisão (ADR).
3. **Gateway de IA Server-Side (`uno-ai-gateway`)**:
   - NENHUMA chave de API Gemini (`VITE_GEMINI_API_KEY` ou similar) deve ser exposta ou executada no browser frontend.
   - Toda comunicação de IA do frontend é enviada para a Supabase Edge Function `uno-ai-gateway`.
   - A Edge Function `uno-ai-gateway` autentica e consome a Gemini API utilizando o segredo server-side `GEMINI_API_KEY`.
4. **Persistência & Credenciais do Frontend**:
   - O frontend utiliza apenas `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` (mantendo suporte temporário para a chave legada `VITE_SUPABASE_ANON_KEY`).
   - NUNCA utilizar `service_role` ou chave secreta do Supabase no cliente.
5. **Auditoria & Governança Universal**: Toda execução, modificação de agente ou alteração de estado deve produzir um rastro auditável na camada `/core/governance`.

---

## 3. Estrutura Arquitetural dos 9 Subsistemas

```
UNO CORE
├── UNO Kernel (/core/kernel)             -> Ciclo de vida, bootstrap & registro de subsistemas
├── UNO Brain (/core/brain)               -> Conhecimento oficial, regras, contexto e prompts
├── UNO Engine (/core/engine)             -> Orquestração de comandos, tarefas, fluxos e gatilhos
├── UNO Memory (/core/memory)             -> Persistência Supabase, client publishable & invoke Edge Function
├── UNO Interface (/core/interface)       -> Componentes visuais, layouts, chat e navegação PCA
├── UNO Agents (/core/agents)             -> Registro, especialização e telemetria de agentes
├── UNO Capabilities (/core/capabilities) -> Catálogo universal de capacidades
├── UNO Governance (/core/governance)     -> Auditoria, decisões (ADR), votações e propostas
├── UNO Documentation (/core/documentation) -> Biblioteca técnica, especificações e specs
└── UNO Integrations (/core/integrations) -> Hub de adaptadores (uno-ai-gateway, Supabase, GitHub, etc)
```
