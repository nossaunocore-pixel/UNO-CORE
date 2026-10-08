# UNO V6 — Fundação Oficial

Este diretório materializa a ponte entre a Engenharia Oficial da UNO (EOU) e a implementação da V6.

## Ordem de autoridade documental

1. Constituição Técnica da UNO — EOU-V01.
2. Arquitetura Oficial — EOU-V02.
3. ADRs aprovados.
4. Blueprint e matrizes da V6.
5. Especificações de módulos e contratos.
6. Código e testes.

Em caso de conflito, prevalece o documento de maior autoridade, salvo ADR posterior explicitamente aprovado que atualize a referência superior.

## Documentos

- `V6-BLUEPRINT.md` — escopo, interfaces e fases.
- `TRACEABILITY-MATRIX.md` — rastreabilidade EOU → implementação.
- `SECURITY-BASELINE.md` — controles mínimos obrigatórios.
- `ROLES-AND-PERMISSIONS.md` — papéis e fronteiras de autoridade.
- `DATA-ARCHITECTURE.md` — divisão e classificação dos dados.
- `INTEGRATIONS.md` — contratos iniciais das integrações.
- `ADR/` — decisões arquiteturais aprovadas.

## Regra de implementação

Nenhuma integração, página ou agente entra em produção sem:

1. especificação;
2. responsável;
3. permissão;
4. teste;
5. log;
6. rollback;
7. aprovação compatível com o impacto.

