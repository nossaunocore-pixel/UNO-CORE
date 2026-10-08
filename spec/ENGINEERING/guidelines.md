# Diretrizes de Engenharia — NOS S.A.

1. **Sem Hardcode de Segredos**: Nunca inclua chaves privadas, tokens ou senhas no repositório.
2. **Tipagem TypeScript Estrita**: Defina tipos e interfaces para todas as entidades e capacidades em `/src/types` e `/core`.
3. **Componentização Atômica**: Reutilize componentes visuais (Cards, Badges, Modais, Inputs).
4. **Resiliência a Falhas de Rede**: Trate erros do Supabase e APIs externas graciosamente.
