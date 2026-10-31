# Motor Universal de Negociação, Contratos, CRM, ERP e Conectores — UNO CORE

- **Identificador:** V18-ADR-PROP-UNO-002
- **Versão:** 0.2.0
- **Data:** 31/10/2026
- **Estado:** proposta de arquitetura para revisão do fundador; não aprovada como implementação
- **Volumes relacionados:** V11 Ferramentas, V12 Provedores, V13 Dados, V14 APIs, V15 Integrações, V16 Segurança, V17 Governança, V18 Marketplace, V24 Empregabilidade, V25 Financeiro, V31 Fluxos, V32 Automações, V33 Motor Cognitivo e V39 Documentação Jurídica

## 1. Propósito

Preparar a arquitetura para que o UNO CORE possa administrar o ciclo comercial e institucional de ponta a ponta: relacionamento, oportunidade, orçamento, negociação, pedido, contrato, assinatura, execução, faturamento, pagamento, conciliação, suporte, renovação e encerramento.

A arquitetura deverá permitir que capacidades de CRM, gestão contratual e ERP sejam oferecidas de forma integrada no Universo UNO, sem impedir conexões com sistemas especializados contratados por cada entidade.

O objetivo não é construir de imediato um ERP completo nem substituir profissionais contábeis ou jurídicos. É estabelecer contratos de dados e interfaces de integração para evolução gradual, começando por fluxos simples e auditáveis.

## 2. Princípios estruturantes

1. **Negociação antes do instrumento:** as condições comerciais surgem da proposta, contraproposta e aceite das partes; não de um contrato rígido predefinido.
2. **Composição controlada:** o motor monta a minuta a partir de dados acordados, cláusulas aprovadas e regras aplicáveis ao tipo de operação.
3. **Acordo não presumido:** proposta, orçamento, pedido, aceite e contrato são objetos distintos, ainda que em alguns fluxos o aceite do pedido possa produzir efeitos contratuais conforme lei, termos e contexto.
4. **Rastreabilidade:** preservar autoria, data, versão, origem, alterações, aprovações, evidências de aceite e assinatura.
5. **Responsabilidade identificada:** cada operação deve informar quem vende, contrata, presta, entrega, recebe, fatura e responde juridicamente.
6. **Interoperabilidade:** marketplaces, ERPs, escritórios e serviços externos podem fornecer ou receber dados por adaptadores, sem se tornarem fonte de verdade irrestrita do UNO.
7. **Automação com alçada:** automatizar tarefas determinísticas; submeter exceções, riscos e atos jurídicos/financeiros relevantes a pessoas autorizadas.
8. **Portabilidade:** permitir exportação dos dados e documentos em formatos utilizáveis, respeitando direitos, contratos e retenção legal.

## 2.1. Multi-instituição, autonomia e gatilhos de autoridade

O UNO deve suportar ambientes administrativos separados por instituição, com seus próprios contratos, clientes, fornecedores, oportunidades, pedidos, financeiro, responsáveis e conexões. A separação lógica deve impedir acesso cruzado não autorizado e permitir colaboração por compartilhamento deliberado.

A **NÓS S.A.** é a instituição de referência e poderá possuir o conjunto mais amplo de conexões com os componentes UNO. As demais instituições mantêm independência e recebem apenas conexões essenciais à integração harmônica. O Departamento de Sinergia coordena interoperabilidade e cooperação, sem assumir a autoridade decisória das instituições.

Em cada operação, distinguir:
- gatilho de decisão: quem aprova ou autoriza;
- gatilho de operação: quem executa a ação aprovada;
- responsabilidade jurídica: qual entidade responde pela relação;
- supervisão e auditoria: quem acompanha e registra.

A autorização de operação não concede autoridade de decisão. Nenhuma integração transfere automaticamente titularidade, representação legal, custódia, poderes financeiros ou responsabilidade profissional.

## 3. Domínios e motores integrados

### 3.1 CRM — relacionamento e oportunidades
Gerencia pessoas e organizações, contatos autorizados, origem do relacionamento, oportunidades, necessidades, histórico de interação, tarefas, propostas, etapas comerciais e responsáveis.

O CRM não deve expor dados de uma pessoa a qualquer promotor, fornecedor ou parceiro. Cada entidade e usuário acessa somente os registros autorizados para sua finalidade.

### 3.2 Motor de propostas, orçamentos e negociação
Registra itens/serviços, escopo, quantidades, unidade, preço, descontos, impostos estimados quando aplicável, prazo, validade da proposta, disponibilidade, logística, condições de pagamento, garantias, responsabilidades, exclusões e anexos.

Permite contrapropostas e versões sucessivas. Cada alteração relevante gera nova versão e identifica autor, horário, campo alterado e estado de aceite. Valores e condições devem ser apresentados de forma clara antes da confirmação.

### 3.3 Motor universal de contratos
Recebe dados estruturados da negociação e seleciona um tipo de instrumento apropriado: compra e venda, prestação de serviços, ordem de serviço, fornecimento, parceria, licença, locação, adesão, confidencialidade, contratação de fornecedor ou outro tipo validado.

O motor:
- identifica as partes e seus papéis;
- verifica capacidade de representação e dados necessários;
- seleciona cláusulas aprovadas e compatíveis;
- insere condições negociadas e anexos;
- identifica lacunas e conflitos;
- gera minuta versionada;
- solicita revisão humana/jurídica quando a regra exigir;
- coleta aprovações e assinaturas;
- registra versão final e evidências;
- acompanha obrigações, prazos, aditivos, renovação, inadimplemento e encerramento.

O motor não deve inventar cláusulas legais nem improvisar aconselhamento jurídico. Conteúdo generativo é rascunho até validação por regras e, quando necessário, profissional habilitado. A biblioteca de cláusulas deve ter proprietário, jurisdição, tipo de operação, versão, data de revisão, responsável jurídico, escopo permitido e estado (rascunho, em revisão, aprovado, suspenso).

### 3.4 Gestão de pedidos e marketplace
Recebe pedidos originados no UNO ou em marketplaces externos. Um pedido externo deve ser preservado com seu identificador, origem, conta/loja, itens, quantidades, preço, moeda, pagamento, envio, cancelamento e eventos.

O adaptador cria ou atualiza um registro interno correlacionado, sem presumir que o pedido externo seja um contrato UNO ou que o UNO seja parte da relação. O sistema deve identificar a plataforma de origem, vendedor, comprador conforme dados permitidos, papel jurídico de cada parte e termos que governam a transação.

Quando apropriado, o pedido pode iniciar um fluxo contratual interno; quando o marketplace já regula o acordo e o UNO apenas sincroniza o pedido, registrar essa distinção. Não duplicar cobranças, pagamentos, notas ou obrigações já administradas pela plataforma externa.

### 3.5 ERP e financeiro operacional
Gerencia cadastros de produtos/serviços, estoque quando aplicável, ordens de serviço, compras, vendas, contas a pagar/receber, faturamento, comissões, despesas, centros de custo, documentos fiscais e conciliação.

O ledger e a liquidação permanecem sob V25. O contrato e o pedido são fontes de obrigações; não substituem confirmação de pagamento do provedor nem registro contábil. Valores devem usar moeda e unidade mínima, com trilha de auditoria.

### 3.6 Integrações contábeis, fiscais e jurídicas
Permite conectar escritório contábil, ERP do contador, plataforma de assinatura, escritório jurídico e serviços governamentais autorizados. A contratação do escritório e a conexão técnica são etapas distintas: registrar entidade contratada, escopo profissional, contrato de prestação, responsáveis, credenciais concedidas, dados compartilhados, validade e desligamento.

A integração não transfere responsabilidade profissional ao software nem autoriza o UNO a praticar atos privativos de profissões regulamentadas.

## 4. Modelo de dados conceitual

Entidades iniciais recomendadas:

- `party`: pessoa física, pessoa jurídica ou instituição;
- `party_role`: comprador, vendedor, contratante, contratado, prestador, representante, testemunha, contador, advogado, operador;
- `relationship`: vínculo e autorização entre partes;
- `opportunity`: oportunidade comercial ou institucional;
- `quote` e `quote_version`: orçamento/proposta e suas versões;
- `negotiation` e `negotiation_event`: negociação e eventos imutáveis;
- `order` e `order_item`: pedido interno correlacionado a origem externa;
- `contract` e `contract_version`: instrumento e versões;
- `clause_library_item`: cláusula versionada e aprovada;
- `approval`: aprovação, alçada, autor e evidência;
- `signature_envelope` e `signature_event`: processo externo/interno de assinatura;
- `obligation`: obrigação, responsável, vencimento, condição e estado;
- `amendment`: aditivo;
- `invoice`, `receivable`, `payable` e `reconciliation`: registros financeiros/fiscais relacionados;
- `external_connection`: conta/tenant, provedor, escopos e ambiente;
- `external_reference`: identificador externo e correlação;
- `audit_event`: histórico de ações e transições.

Cada entidade deverá ter ID interno estável, tenant/entidade responsável, estado, timestamps, origem, política de retenção e classificação de dados. CPF, CNPJ, dados bancários, assinaturas e documentos pessoais exigem proteção e minimização reforçadas.

## 5. Fluxo comercial de referência

1. Pessoa ou empresa cria uma oportunidade ou recebe uma solicitação.
2. CRM registra relacionamento e necessidade.
3. Proposta/orçamento é elaborado com itens e condições.
4. Contrapropostas são registradas como novas versões.
5. As partes confirmam explicitamente os termos consolidados.
6. O motor classifica o tipo de operação e verifica os requisitos.
7. Gera minuta a partir de cláusulas aprovadas e dados acordados.
8. A revisão humana/jurídica ocorre conforme risco, tipo de contrato e alçada.
9. As partes aprovam e assinam pelo mecanismo adequado.
10. O contrato cria obrigações e, quando aplicável, ordem de serviço/pedido.
11. ERP/financeiro recebe eventos e parcelas, sem presumir liquidação.
12. Execução, entrega, pagamento, nota fiscal e conciliação são acompanhados.
13. Alterações, aditivos, cancelamentos e disputas mantêm trilha.
14. Encerramento e retenção documental seguem contrato e lei.

## 6. Integração com marketplaces

### 6.1 Mercado Livre
A documentação oficial disponibiliza recursos de gerenciamento de vendas e consulta de orders, com autenticação OAuth/Bearer e eventos/tópicos para acompanhar mudanças. O adaptador deverá suportar pedidos, itens, pagamentos, envios, cancelamentos, devoluções e atualizações de estado, respeitando escopos e dados pessoais disponibilizados.

Documentação:
- https://developers.mercadolivre.com.br/pt_br/api-docs
- https://developers.mercadolivre.com.br/pt_br/gerenciamento-de-vendas
- https://developers.mercadolivre.com.br/autenticacao-e-autorizacao

### 6.2 Shopee
A Shopee Open Platform deve ser tratada como conector candidato. Antes de desenvolver, confirmar documentação oficial atual, elegibilidade de parceiro, aprovação de aplicação, escopos, Partner ID/Key, OAuth, limites e regras para o mercado brasileiro. Não usar wrappers não oficiais como substituto da API oficial.

Portal:
- https://open.shopee.com/

### 6.3 Regra de sincronização
Cada pedido externo tem sua identidade de origem. Usar `source_platform`, `external_account_id`, `external_order_id`, `external_event_id` e chaves de idempotência. Não criar duplicidade em reentregas de webhook. Fazer reconciliação periódica para recuperar eventos perdidos. Mudanças externas devem ser registradas como eventos, não sobrescrever silenciosamente a história interna.

## 7. Assinatura eletrônica e evidência

O UNO deve possuir uma interface abstrata de assinatura, com adaptadores para fornecedores distintos e possibilidade de assinatura compatível com o nível de risco e a legislação aplicável.

Candidatos identificados:
- **Clicksign:** API documentada, criação de envelopes, coleta de assinaturas, webhooks e ambiente Sandbox separado de produção. https://developers.clicksign.com/
- **D4Sign:** API REST, upload de documentos, cadastro de signatários, envio e recuperação do documento final; documentação informa ambiente Sandbox e produção. https://docapi.d4sign.com.br/docs/introdu%C3%A7%C3%A3o-a-api

O catálogo não declara um fornecedor escolhido. Avaliar autenticação, evidências, trilha de auditoria, métodos de identificação, ICP-Brasil quando exigida, retenção, exportação, custos, suporte, LGPD, termos e validade jurídica do método no caso concreto. Assinatura eletrônica simples, avançada e qualificada não são categorias intercambiáveis em todos os contextos. A ferramenta não substitui análise jurídica da operação.

## 8. Contabilidade, ERP externo e serviços profissionais

### 8.1 Contabilizei
A Contabilizei é uma candidata para pesquisa comercial e técnica. Este levantamento não confirmou uma API pública geral para integrar diretamente o UNO à plataforma. Não presumir existência de API, acesso de parceiros ou credenciais até confirmação formal pela empresa. Se não houver API disponível, avaliar exportação/importação segura, portal do cliente ou integração intermediada autorizada, sem automação que viole termos.

### 8.2 Conta Azul
A documentação oficial descreve API para integração de dados de vendas, orçamentos, contratos, clientes/fornecedores, produtos/serviços, financeiro e notas fiscais. A autenticação da versão atual utiliza OAuth 2.0; disponibilidade depende do plano e dos recursos habilitados. A documentação alerta para limitações de ambiente de homologação e webhooks que devem ser verificadas na versão efetivamente contratada.

- https://developers.contaazul.com/aboutapis
- https://ajuda.contaazul.com/hc/pt-br/articles/360028922991-API-Conta-Azul-Desenvolva-sua-integra%C3%A7%C3%A3o

### 8.3 Omie
A documentação pública apresenta APIs para cadastros, vendas, pedidos, serviços/ordens de serviço, estoque, financeiro, CRM e painel do contador, além de webhooks. O acesso e os limites dependem do aplicativo/plano. A autenticação e os tokens devem ficar somente no servidor.

- https://api.omie.com.br/docs
- https://api.omie.com.br/docs/apis

### 8.4 Serviços fiscais governamentais
O Portal Nacional da NFS-e publica documentação técnica de APIs e informa que a emissão via API exige credenciamento prévio no Painel do Contribuinte. A integração deve ser desenhada por CNPJ/entidade e município/serviço, não como chave universal que autoriza qualquer emissão.

- https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual
- https://www.gov.br/pt-br/servicos/emitir-nota-fiscal-de-servico-eletronica

### 8.5 eSocial e serviços públicos
O eSocial publica documentação técnica, leiautes, esquemas e requisitos de comunicação; determinadas integrações usam certificados digitais e exigem habilitação compatível. O Catálogo de APIs Governamentais lista serviços e requisitos específicos. Nem todo serviço público oferece API aberta, nem uma API aberta garante acesso a dados protegidos ou a qualquer cidadão.

- https://www.gov.br/esocial/pt-br/documentacao-tecnica/
- https://www.gov.br/conecta/catalogo/apis

### 8.6 Apoio jurídico
Pesquisar provedores de assinatura, gestão documental, consulta processual e serviços jurídicos somente por APIs oficiais e dentro das permissões legais. Consulta a processo público não equivale a acesso irrestrito a autos sigilosos. O UNO deve registrar advogado/escritório contratado, escopo, OAB/responsável, procuração quando necessária, finalidade, consentimento/base legal, dados enviados e evidência de retorno. A IA pode organizar documentos e preparar rascunhos; parecer, estratégia e atos privativos ficam com profissional habilitado.

## 9. Conector universal e painel de integrações

Cada conector deve declarar:
- fornecedor e produto;
- capacidade oferecida;
- documentação oficial e versão;
- modo de autenticação (OAuth, API key, certificado, mTLS, assinatura de webhook);
- credenciais necessárias por ambiente;
- escopos solicitados e justificativa;
- titular da conta externa e entidade UNO responsável;
- dados enviados/recebidos e base/finalidade;
- custos, quotas, limites e plano;
- sandbox/homologação disponível;
- webhooks, polling e reconciliação;
- saúde, último teste e último evento;
- botão/fluxo de conectar, autenticar, testar, renovar, suspender e desconectar;
- responsável e aprovações necessárias.

### Estados apresentados no Painel Mestre

- Descoberto: serviço encontrado no catálogo, ainda não avaliado.
- Disponível para conectar: integração tecnicamente suportada.
- Aguardando contratação: precisa de plano ou contrato com fornecedor.
- Aguardando credencial: chave/token/certificado ainda não fornecido.
- Aguardando autorização OAuth: titular da conta precisa conceder acesso.
- Aguardando escopo: permissões solicitadas ainda não aprovadas.
- Configuração incompleta: endpoint, tenant, webhook ou parâmetro ausente.
- Teste pendente / teste aprovado / teste falhou.
- Ativo em Preview / ativo em produção.
- Degradado / indisponível / credencial expirada / suspenso / revogado.

O painel deve apresentar o nome do fornecedor e o link para o portal oficial onde a entidade pode contratar, criar aplicação, gerar chave e conceder acesso. O sistema não deve pedir que a pessoa cole credenciais em chat comum. Preferir OAuth e cofre de segredos com fluxo seguro do Chaveiro. Se uma chave manual for inevitável, inserir diretamente no cofre/ambiente autorizado e mostrar apenas presença/validade.

## 10. Segurança, autorização e segregação

- Nenhuma credencial secreta no frontend, Git, logs ou prompts.
- OAuth com escopos mínimos e autorização explícita do titular da conta.
- Segredos geridos pelo Chaveiro sob política aprovada.
- Separação completa de credenciais de desenvolvimento, Preview e produção.
- Webhooks autenticados/assinados, deduplicados e idempotentes.
- Operações financeiras e contratuais irreversíveis exigem alçada e evidência.
- Não permitir que o agente que cria a minuta aprove sozinho uma operação quando a política exigir segregação.
- Dados de uma empresa/cliente não podem vazar para outra entidade ou tenant.
- Revogação deve interromper chamadas futuras e iniciar processo de encerramento/retensão conforme contrato e lei.
- Toda automação deve permitir identificar quem autorizou, quem executou e qual regra foi aplicada.

## 11. Evolução por fases

### Fase A — MVP
- Cadastro de partes e papéis.
- CRM mínimo de oportunidades e contatos autorizados.
- Propostas/orçamentos versionados.
- Pedidos internos simples.
- Minutas montadas a partir de estrutura e cláusulas previamente aprovadas.
- Aprovação humana e registro de aceite.
- Anexos e histórico auditável.
- Conector de assinatura escolhido somente após avaliação e aprovação.
- Integração financeira somente nos fluxos já aprovados.

### Fase B — operação comercial ampliada
- Contratos com aditivos, obrigações e renovações.
- Marketplace externo e sincronização de pedidos.
- Ordens de serviço, estoque, entrega e suporte.
- Integração com ERP/contabilidade contratado.
- Conciliação e emissão fiscal nos casos credenciados.
- Painéis de CRM/ERP por entidade e alçada.

### Fase C — ecossistema universal
- Conectores adicionais de marketplaces, bancos, escritórios, serviços profissionais e órgãos públicos.
- Catálogo de integrações instaláveis e autenticáveis pelo Painel Mestre.
- Orquestração multi-entidade e multi-jurisdição.
- Monitoramento de obrigações e automação de rotinas autorizadas.

## 12. Limites e riscos

- Um pedido de marketplace nem sempre equivale a um contrato independente a ser redigido pelo UNO.
- O papel jurídico da plataforma varia por operação; não presumir que o UNO seja vendedor, empregador, agente, custodiante ou intermediador em todos os casos.
- Uma API governamental pode exigir credenciamento, certificado, procuração, perfil institucional ou autorização específica.
- Serviços de contabilidade e advocacia são prestados por profissionais/empresas habilitados; API não substitui o serviço profissional.
- Geração de contrato por IA exige cláusulas aprovadas, validação de consistência, revisão humana conforme risco e aceite expresso.
- A existência de assinatura eletrônica não garante automaticamente validade de toda cláusula ou de toda operação.
- Integrações externas podem gerar custos, limites, dependência de fornecedor e obrigações de proteção de dados.

## 13. Decisões propostas e questões abertas

### Propostas técnicas
- Criar motor universal de negociação e contratos desacoplado do CRM/ERP.
- Tratar pedidos externos como registros de origem externa correlacionados, não como contratos UNO automaticamente.
- Criar camada de conectores com descoberta, conexão, autenticação, teste, monitoramento e revogação.
- Criar biblioteca de cláusulas versionada, com aprovação e responsável jurídico.
- Priorizar MVP com orçamento, proposta, pedido, minuta, aceite e trilha de auditoria antes de ERP completo.

### Não decidido pelo fundador
- Se o motor de contratos será implementado no MVP ou apenas preparado arquiteturalmente.
- Quais tipos de contrato entram primeiro.
- Qual fornecedor de assinatura será escolhido.
- Qual ERP/contador será contratado (Contabilizei, Conta Azul, Omie ou outro).
- Quais marketplaces serão conectados primeiro.
- Quais serviços jurídicos/fiscais governamentais terão integração prioritária.
- Quem aprova cláusulas, minutas e categorias de risco.
- Limites de automação e alçadas para cada tipo de transação.

## 14. Instrução ao Antigravity

Ler este documento em conjunto com V11, V12, V13, V14, V15, V16, V17, V18, V25, V31, V32, V33 e V39. Antes de editar ou implementar, inspecionar o código atual, identificar o que já existe e mapear dependências. Não assumir que qualquer fornecedor foi contratado ou que qualquer API está liberada.

Produzir inventário de entidades, eventos, endpoints internos, conectores, schemas e gaps. Implementar somente após escopo aprovado. Não gerar nem enviar contratos reais, conceder procurações, emitir notas, executar pagamentos, movimentar recursos, aceitar termos externos, criar credenciais, aplicar migrations ou ativar produção sem autorização específica.

## 15. Fontes oficiais consultadas em 31/10/2026

- Mercado Livre Developers: https://developers.mercadolivre.com.br/pt_br/api-docs
- Mercado Livre Orders: https://developers.mercadolivre.com.br/pt_br/gerenciamento-de-vendas
- Shopee Open Platform: https://open.shopee.com/
- Clicksign Developers: https://developers.clicksign.com/
- D4Sign API: https://docapi.d4sign.com.br/docs/introdu%C3%A7%C3%A3o-a-api
- Conta Azul API: https://developers.contaazul.com/aboutapis
- Omie API: https://api.omie.com.br/docs
- Portal Nacional NFS-e: https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual
- eSocial: https://www.gov.br/esocial/pt-br/documentacao-tecnica/
- Catálogo de APIs governamentais: https://www.gov.br/conecta/catalogo/apis

## 16. Histórico

- 0.2.0 — inclusão de autonomia multi-institucional, ambientes administrativos por entidade, distinção entre gatilhos de decisão/operação e integração coordenada pela Sinergia; 31/10/2026.

- 0.1.0 — proposta inicial de arquitetura de negociação, contratos, CRM/ERP e conectores; pesquisa pública realizada em 31/10/2026.
