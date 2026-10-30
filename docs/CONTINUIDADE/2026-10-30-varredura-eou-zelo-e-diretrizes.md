# Registro de continuidade — Varredura EOU e diretriz de Zelo

**Data:** 2026-10-30  
**Repositório:** `nossaunocore-pixel/UNO-CORE`  
**Branch consultada:** `main`  
**Natureza:** registro de continuidade e encaminhamentos; não altera especificações técnicas oficiais nem declara funcionalidades implementadas.

## 1. Correção de entendimento

O termo correto usado pelo fundador é **Zelo** (não “ZEU”). Zelo já faz parte da engenharia oficial e dos documentos anteriormente produzidos no repositório. Não deve ser tratado como uma sigla nova, um produto independente ou uma arquitetura inventada nesta conversa. A definição canônica deve ser recuperada dos documentos oficiais pertinentes antes de qualquer implementação ou reformulação.

## 2. Escopo de visão reafirmado

A UNO é concebida como uma camada integrada de navegação, orquestração e encaminhamento de necessidades da vida cidadã. O propósito é cuidado, zelo, acompanhamento e auxílio — não controle ou vigilância.

Diretriz cívica mencionada pelo fundador: trabalhar para reduzir e, como objetivo de longo prazo, zerar o desemprego involuntário, aproximando pessoas de oportunidades, qualificações, serviços e redes de apoio.

A visão inclui integração coordenada, conforme viabilidade, autorização e acordos formais, com serviços e instituições como secretarias públicas, PAT, hospitais, unidades de saúde, escolas, faculdades, fóruns, serviços digitais, telemedicina, cultura, esportes, desenvolvimento humano, segurança pública e outros parceiros. A presença dessas instituições no catálogo não significa convênio existente ou integração ativa.

## 3. Domínios EOU relevantes identificados no catálogo

O arquivo `docs/EOU/README.md` apresenta 40 volumes oficiais. Para a continuidade desta visão, são especialmente relevantes:

- EOU-V18 — Marketplace
- EOU-V20 — Infraestrutura Comunitária
- EOU-V21 — Educação e Capacitação
- EOU-V22 — Saúde
- EOU-V24 — Empregabilidade
- EOU-V25 — Financeiro
- EOU-V26 — Identidade Digital
- EOU-V27 — Usuários e Perfis
- EOU-V28 — Entidades
- EOU-V31 — Fluxos
- EOU-V32 — Automações
- EOU-V39 — Documentação Jurídica
- EOU-V40 — Documentação Institucional

A lista acima é um mapa inicial de relacionamento, não uma declaração de que cada volume foi integralmente auditado ou está implementado.

## 4. Estado da varredura realizada

Foi consultado o catálogo `docs/EOU/README.md` na branch `main`, que confirma a organização da EOU em 40 volumes e determina que a engenharia oficial precede a implementação, com fluxo de proposta, análise, documentação, revisão, aprovação, implementação e evolução contínua.

Também foram identificadas referências à coleção `EOU/volumes/` e aos volumes fundacionais 01–08. A varredura anterior não conseguiu validar integralmente o conteúdo de todos os documentos complementares nem localizar a definição canônica completa de Zelo. Portanto, **a auditoria documental permanece parcial**. Não assumir ausência de conteúdo apenas porque uma tentativa de leitura por caminho presumido não retornou o arquivo.

## 5. Diretriz para continuidade técnica

Antes de escrever código novo para RH, banco de talentos, Zelo, saúde, proteção/resgate, segurança comunitária ou gestão territorial:

1. Fazer inventário real da árvore do repositório e localizar o MMK (Mapa Mestre do Conhecimento), índices, documentos EOU, anexos e demais documentos citados pelo fundador.
2. Recuperar a definição oficial de Zelo e os documentos relacionados; preservar nomenclaturas e relações já estabelecidas.
3. Cruzar os domínios EOU relevantes e identificar entidades, agentes, permissões, dados, fluxos, APIs e dependências existentes.
4. Elaborar matriz de rastreabilidade: requisito oficial → documento/fonte → componente → estado atual → lacuna → teste.
5. Distinguir claramente: especificado, documentado, codificado, integrado, testado e liberado.
6. Só então propor alterações de engenharia e implementar o escopo aprovado do V7 MVP, sem duplicar módulos ou redefinir conceitos oficiais.

## 6. Diretrizes de proteção e governança

- Zelo significa cuidado e auxílio; não criar mecanismos de vigilância ou controle social.
- Dados pessoais, profissionais, de saúde e de participação cívica devem ter finalidades e permissões separadas, minimização, rastreabilidade e proteção compatível com a legislação.
- Dados psicológicos ou sensíveis não devem gerar pontuação secreta nem decisões automatizadas que excluam pessoas de trabalho, serviços ou benefícios.
- Encaminhamentos e decisões relevantes devem prever transparência, revisão e intervenção humana.
- Equipes territoriais e serviços de saúde, segurança, bombeiros civis, primeiros socorros, remoção e saneamento somente podem operar dentro das qualificações, competências, protocolos, autorizações e parcerias aplicáveis.
- Convênios e integrações institucionais devem ser marcados como planejados até que estejam formalizados e tecnicamente validados.

## 7. UNO RH e empregabilidade — continuidade do MVP

O fundador confirmou que UNO RH deve fazer parte do V7 MVP com funções essenciais operacionais, e que a arquitetura ampliada deve ficar preparada para evolução. O escopo deve ser reconciliado com EOU-V24 e demais volumes antes de codificação.

A visão inclui banco de talentos, habilidades, qualificações, experiências, disponibilidade, oportunidades, encaminhamentos, jornada, remuneração, benefícios e desenvolvimento profissional. O objetivo é ampliar acesso ao trabalho e continuidade de trajetória, sem reduzir pessoas a currículos ou indicadores.

As hipóteses anteriormente discutidas — referência de 180 horas mensais, escala 4x2, recesso, percentuais e arranjos de pagamento/benefícios — são parâmetros propostos pelo fundador para estudo, não regras legais validadas. A implementação deverá suportar regras configuráveis por regime e jurisdição, respeitar CLT, legislação previdenciária, normas coletivas e demais obrigações aplicáveis. O enquadramento jurídico não pode ser definido apenas pelo nome “colaborador UNO” ou pelo fluxo financeiro da plataforma.

## 8. Estado das alterações

Este registro documenta contexto e próximos passos. Nesta ação não foram alterados código, banco de dados, Stripe, Supabase, Firebase, configurações de produção ou especificações canônicas da EOU. Nenhum serviço, convênio ou funcionalidade foi declarado operacional por este registro.

**Próxima ação:** concluir a varredura da árvore documental e do MMK, localizar a definição oficial de Zelo e gerar a matriz de rastreabilidade antes de implementar os módulos relacionados no V7.
