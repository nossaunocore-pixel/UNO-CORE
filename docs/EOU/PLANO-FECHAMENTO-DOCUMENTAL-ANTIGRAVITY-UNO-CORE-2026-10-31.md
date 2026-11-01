# Plano de Fechamento Documental e Handoff Antigravity — UNO CORE

**Identificador:** PFDA-UNO-001  
**Versão:** 0.1.0  
**Data:** 31/10/2026  
**Estado:** Baseline documental consolidada; instrução de handoff para execução incremental por fase  
**Branch:** eou-v09-v17-deepening-2026-10-31

## 1. Objetivo

Registrar os critérios de continuidade entre documentação e implementação no Antigravity, preservando o MVP V7 e as fases posteriores já aprovadas. A preparação documental principal está consolidada; este plano não solicita reinício de auditoria ampla. A execução continua condicionada aos gates técnicos, às configurações de conta e às autorizações específicas para operações externas.

## 2. Resultado esperado do fechamento

- decisões do fundador separadas de propostas e pendências;
- modelo econômico corrigido conforme o adendo;
- matriz jurídica/trabalhista/tributária/financeira;
- critérios de aceite e testes;
- inventário de integrações e variáveis sem revelar segredos;
- plano de execução incremental;
- prompt de handoff com instruções de leitura, implementação, testes e relatório;
- lista de bloqueios que exigem decisão humana ou profissional habilitado.

## 3. Sequência de trabalho

### Etapa 1 — Baseline e preservação
- confirmar branch, commit-base e PR;
- preservar V6 e o estado atual de V7;
- não mover/apagar capítulos legados;
- não alterar main;
- identificar arquivos de especificação e dependências.

### Etapa 2 — Consistência documental
- revisar MEU-UNO-001 à luz do adendo;
- revisar referências cruzadas em V17, V18, V24, V25, V28, V31, V32, V39 e V40;
- conferir nomenclaturas oficiais e ownership;
- marcar ADRs ainda não aprovadas como propostas;
- manter histórico e origem das decisões.

### Etapa 3 — Especificação técnica
- modelar entidades financeiras sem efetuar pagamentos;
- definir estados de transação e trilha de auditoria;
- definir centros de resultado e territorialização parametrizável;
- separar valores de terceiros, receita própria, tributos, custos, lucro e reservas;
- adicionar bloqueios de ativação e alçadas humanas.

### Etapa 4 — Implementação local/preview
- ler primeiro README, arquitetura e decisões;
- criar branch de implementação separada se necessário;
- implementar por módulos pequenos;
- usar dados fictícios e sandbox;
- não aplicar migrations em produção;
- não alterar Firebase/Supabase/Vercel/Stripe sem aprovação;
- não usar segredos em código ou commits.

### Etapa 5 — Testes e evidências
- testes unitários e integração;
- testes de cálculo e arredondamento;
- testes de reconciliação;
- testes de acesso/roles;
- testes de idempotência, estorno, chargeback e falha de webhook;
- testes de segurança e privacidade;
- evidência de preview e relatório de limitações.

### Etapa 6 — Formalização
- registrar decisões aprovadas pelo fundador;
- manter lacunas explicitamente pendentes;
- revisão jurídica e contábil;
- atualizar PR Draft e checklist;
- somente depois solicitar autorização específica para merge/deploy.

## 4. Gates não negociáveis

**G0 — Integridade documental:** sem arquivos sobrescritos sem revisão, sem segredo em Git, sem divergência de nomenclatura crítica.

**G1 — Segurança:** autenticação, autorização por papel, isolamento territorial, validação de entradas, logs sem dados sensíveis e gestão de segredos.

**G2 — Financeiro:** nenhum cálculo de distribuição executável enquanto percentuais territoriais e demais bases não estiverem aprovados; simulações identificadas como fictícias.

**G3 — Jurídico/contábil:** nenhuma modalidade de emprego, intermediação, marketplace, doação ou custódia em produção sem enquadramento profissional.

**G4 — Infraestrutura:** nenhum gasto, migration, configuração externa ou deploy de produção sem autorização explícita.

**G5 — Aceite humano:** o fundador valida a experiência visual, os fluxos críticos e as decisões reservadas.

## 5. Definição de pronto para Antigravity

O pacote está pronto para handoff quando:
- o commit-base e a branch forem identificados;
- o Antigravity receber a instrução de ler documentos antes de editar;
- o escopo de arquivos e módulos estiver listado;
- os critérios de aceite forem testáveis;
- as pendências não forem preenchidas por inferência;
- a estratégia de rollback e preservação estiver definida;
- o resultado esperado for relatório + alterações versionadas + evidências.

## 6. Instrução vigente para Antigravity

Use como instrução executável principal o [Prompt de Execução Antigravity](PROMPT-ANTIGRAVITY-UNO-CORE-2026-10-31.md), que prevalece sobre este texto histórico quando houver diferença de sequência ou de orientação.

- O plano de produto, o escopo do MVP V7 e a sequência de fases posteriores já foram definidos pelo fundador.
- Não reiniciar auditoria documental ampla nem reabrir decisões aprovadas.
- Verificar o estado atual apenas dos arquivos, módulos, contratos e dependências envolvidos na tarefa em execução.
- Implementar no V7 somente o que pertence ao MVP aprovado e está especificado; não antecipar módulos posteriores.
- Os gates jurídicos, contábeis, financeiros e regulatórios aplicam-se aos fluxos correspondentes quando esses fluxos forem implementados/ativados; não são bloqueios genéricos para páginas ou capacidades fora do escopo do MVP.
- Simulações históricas e financeiras permanecem analíticas, identificadas e sem efeito operacional.
- Se uma decisão estrutural não estiver definida e sua escolha alterar arquitetura, identidade, autoridade, segurança, obrigação legal ou escopo aprovado, registrar e pedir decisão do fundador. Tarefas independentes devem continuar.

## 7. Relatório de encerramento obrigatório

O Antigravity deve devolver:
- branch e commit de origem;
- lista de arquivos lidos e alterados;
- resumo de implementação;
- testes executados e resultados;
- erros de código versus bloqueios de infraestrutura;
- dependências e riscos;
- decisões não tomadas;
- instruções de execução local/preview;
- confirmação explícita de que não houve deploy, migration ou operação financeira não autorizada.

## 8. Fora do escopo automático

Não decidir forma societária, percentuais territoriais, destino dos outros 50%, envelope operacional anterior, política final de remuneração, regime tributário, titularidade de reservas, oferta de ações, nem contratação de fornecedores pagos. Não transformar reconhecimento institucional em autorização regulatória.
