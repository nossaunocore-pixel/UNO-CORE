# Plano de Fechamento Documental e Handoff Antigravity — UNO CORE

**Identificador:** PFDA-UNO-001  
**Versão:** 0.1.0  
**Data:** 31/10/2026  
**Estado:** Plano de trabalho — execução condicionada a validações e autorização  
**Branch:** eou-economic-closeout-2026-10-31

## 1. Objetivo

Preparar o conjunto documental e técnico para uma sessão de implementação no Antigravity, sem confundir preparação com deploy, sem alterar serviços externos e sem liberar produção antes dos gates de validação.

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

## 6. Prompt-base para Antigravity

> Você está trabalhando no repositório UNO-CORE. Antes de modificar qualquer arquivo, leia o README principal, os documentos de arquitetura e governança, o inventário EOU V01–V08, a auditoria cruzada, o MEU-UNO-001 e seus adendos, a matriz RJTTF-UNO-001, o plano PFDA-UNO-001 e as especificações dos volumes relacionados.
>
> Preserve V6, a branch principal e todos os documentos legados. Não mova, apague ou renomeie capítulos sem autorização expressa. Não faça merge em main nem deploy de produção. Não altere Firebase, Supabase, Vercel, Stripe, domínios, variáveis de ambiente, migrations ou serviços externos. Não revele nem copie segredos.
>
> Primeiro produza um inventário do estado real do código e da documentação, comparando o repositório com os critérios de aceite. Identifique divergências, dependências, riscos e arquivos a modificar. Não invente funções existentes.
>
> Implemente somente o que estiver especificado e não depender de decisão reservada ao fundador ou parecer profissional. Para lacunas, crie interfaces/configurações desativadas, documentação e bloqueios seguros, nunca valores arbitrários. Simulações financeiras devem usar dados fictícios e ser marcadas como simulação.
>
> Para o modelo econômico, respeite a sequência: reconhecimento correto da receita de cada parte; contabilização de custos e obrigações operacionais; apuração do lucro local; 50% do lucro para a dimensão territorial bairro/cidade/estado/país, sem percentuais internos definidos; os outros 50% permanecem sem destinação definida. Não aplique 50% ao faturamento bruto. Não trate valores de terceiros como receita da UNO. Não habilite pagamentos, saques, custódia ou distribuição real.
>
> Separe emprego, prestador PF/PJ, terceirização, venda direta, marketplace e intermediação. A classificação depende da realidade contratual e operacional e deve ser configurável e auditável.
>
> Execute testes automatizados e verificações de segurança. Registre cada arquivo alterado, decisões técnicas, comandos executados, testes aprovados/reprovados, limitações, riscos e próximos passos. Se houver bloqueio de build/limite de provedor, registre-o como limitação de infraestrutura, sem alegar falha de código.
>
> Ao final, não faça merge nem deploy. Entregue um relatório de prontidão, diff revisável, checklist de validação humana e lista de decisões reservadas ao fundador.

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
