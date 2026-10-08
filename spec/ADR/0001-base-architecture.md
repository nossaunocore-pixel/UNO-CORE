# ADR-0001: Estrutura Modular `/core` e `/spec` do UNO CORE

- **Status:** Aprovado
- **Data:** 2026-07-27
- **Autor:** Equipe de Engenharia NOS S.A. / UNO Arquiteto-Chefe

## Contexto
O UNO CORE necessita de uma fundação limpa, modular e auditável que permita orquestrar capacidades de IA e governança sem acoplamento direto a qualquer framework visual específico ou provedor de nuvem de curto prazo.

## Decisão
1. Toda a inteligência operacional, kernel, memória e orquestração residirá no diretório `/core`.
2. Toda a engenharia oficial, especificações, tabelas de decisão e prompts residirão no diretório `/spec`.
3. A interface web do PCA residirá em `/src`, consumindo a API declarativa exposta por `/core/kernel`.

## Consequências
- A plataforma torna-se independente do provedor de UI ou framework de visualização.
- Código e especificação evoluem juntos de forma síncrona.
- Auditoria facilitada em revisões de código.
