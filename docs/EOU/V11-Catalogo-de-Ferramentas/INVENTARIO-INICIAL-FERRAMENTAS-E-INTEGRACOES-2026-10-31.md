# Inventário Inicial de Ferramentas e Integrações — UNO CORE

- **Identificador:** V11-INV-UNO-001
- **Versão:** 0.1.0
- **Data da pesquisa:** 31/10/2026
- **Branch de documentação:** `eou-v09-v17-deepening-2026-10-31`
- **Estado:** levantamento técnico preliminar; não equivale a aprovação, contratação, instalação ou ativação
- **Volumes relacionados:** V09 Capacidades, V10 Agentes, V11 Ferramentas, V12 Provedores, V14 APIs e Gateways, V15 Integrações, V16 Segurança, V17 Governança, V25 Financeiro, V32 Automações, V33 Motor Cognitivo e V34 UNO CORE

## 1. Objetivo

Identificar ferramentas existentes que podem atender capacidades já previstas para o UNO CORE e preparar um inventário legível pelo motor. O objetivo operacional é permitir que o sistema responda, por exemplo:

- qual capacidade uma missão exige;
- qual ferramenta ou provedor pode atendê-la;
- se existe implementação nativa, opção open source ou serviço externo;
- se a integração está instalada, configurada, autorizada e saudável;
- qual credencial ou configuração está ausente;
- qual responsável deve providenciar a configuração;
- qual alternativa segura existe quando o serviço está indisponível.

A presença de uma ferramenta neste inventário **não autoriza sua execução**. O motor deve respeitar escopo, finalidade, consentimento, orçamento, ambiente e aprovação humana previstos nos volumes de governança e segurança.

## 2. Princípio de arquitetura: capacidade antes do fornecedor

O motor não deve codificar uma missão como dependente de um único fornecedor. Deve solicitar uma capacidade abstrata (por exemplo, `document.extract`, `maps.route`, `message.whatsapp.send` ou `ai.generate.structured`) e consultar adaptadores compatíveis.

Cada integração deverá possuir, no mínimo:

- `integration_id` e `provider_id` estáveis;
- capacidades atendidas e ferramentas expostas;
- ambiente: local, desenvolvimento, preview, homologação ou produção;
- estado de instalação, configuração, autorização, saúde e disponibilidade;
- referência ao segredo no cofre, nunca o segredo em si;
- variáveis/credenciais exigidas e quais estão ausentes;
- escopos, permissões, dados enviados e recebidos;
- limites, preço/unidade, orçamento e política de consumo;
- timeout, retry, idempotência, fallback e comportamento degradado;
- versão de API/SDK, licença/termos, documentação e data da última revisão;
- responsável, criticidade, evidências de teste e aprovação.

### Estados distintos que o motor deve reconhecer

1. **Não avaliada:** ferramenta apenas descoberta.
2. **Aprovada para avaliação:** pode ser testada em ambiente isolado.
3. **Instalação ausente:** dependência ainda não instalada.
4. **Configuração ausente:** endpoint, projeto, região ou parâmetro não definido.
5. **Credencial ausente:** chave/token necessário não cadastrado.
6. **Credencial inválida/expirada:** autenticação falhou; nunca revelar o valor.
7. **Não autorizada:** integração existe, mas o agente/missão não tem permissão.
8. **Sandbox pronta:** teste autorizado e funcional em ambiente não produtivo.
9. **Preview pronta:** configurada e validada no ambiente Preview correspondente.
10. **Produção bloqueada:** não houve autorização ou validação de produção.
11. **Saudável / degradada / indisponível:** estado operacional observado.
12. **Suspensa / revogada / descontinuada:** não pode ser chamada.

A interface deve explicar a diferença entre “falta uma chave”, “falta configurar o serviço”, “o serviço está fora do ar” e “o agente não tem autorização”. Esses estados não são equivalentes.

## 3. Catálogo inicial por capacidade

A classificação abaixo é uma recomendação preliminar baseada na documentação pública consultada. Custos, limites, licenças, disponibilidade regional e condições comerciais devem ser confirmados antes de qualquer adoção.

| Capacidade UNO | Ferramenta/provedor candidato | Modalidade | Credencial/configuração típica | Prioridade sugerida |
|---|---|---|---|---|
| Raciocínio, geração e saída estruturada | OpenAI API | Externa, API | `OPENAI_API_KEY`; projeto, modelo, limites e orçamento | Alta, se escolhida como provedor do motor |
| Raciocínio e geração alternativa | Google Gemini API | Externa, API | `GEMINI_API_KEY` ou autenticação Google Cloud compatível; projeto e quotas | Média; alternativa a avaliar |
| Raciocínio e geração alternativa | Anthropic Claude API | Externa, API | `ANTHROPIC_API_KEY` ou identidade federada compatível | Média; alternativa a avaliar |
| Leitura de PDFs, Office, HTML, imagens e tabelas | Docling | Open source, local/servidor | Instalação, runtime e modelos locais; API própria se hospedado | Alta |
| Automação e teste de navegador | Playwright | Open source, local/CI | Dependência e browsers instalados; sem chave de fornecedor para execução local | Alta para testes e automação controlada |
| Busca textual, semântica e híbrida | Supabase PostgreSQL + pgvector | Já disponível na pilha; extensão/configuração | Projeto Supabase, conexão server-side, extensão e embeddings quando necessários | Alta; preferir reaproveitar antes de adicionar banco |
| Busca textual dedicada | Meilisearch | Open source self-host ou Cloud | URL do serviço e chave de API; configuração de índices | Média; somente se busca nativa/Supabase não bastar |
| Mapas interativos no navegador | MapLibre GL JS | Biblioteca open source | Biblioteca, fonte de tiles e estilo; chave depende do provedor de tiles | Alta para interface cartográfica |
| Rotas, geocodificação e lugares | Google Maps Platform (Routes, Geocoding, Places) | Externa, API paga conforme produto/uso | `GOOGLE_MAPS_API_KEY`, APIs habilitadas, billing e restrições de chave | Média; ativar apenas quando o fluxo exigir |
| Geocodificação/rotas com dados OpenStreetMap | Nominatim/OSRM ou serviços compatíveis | Open source/self-host ou terceiro | Instância/endpoint próprio ou contrato com provedor; atribuição e política de uso | Média; evitar depender do endpoint público Nominatim para escala |
| Proteção de formulários e chat público | Cloudflare Turnstile | Externa, serviço com camada gratuita conforme termos vigentes | `TURNSTILE_SITE_KEY` (pública) e `TURNSTILE_SECRET_KEY` (servidor) por ambiente | Alta para liberar tráfego público amplo |
| Comunicação oficial WhatsApp | WhatsApp Business Platform Cloud API | Externa, API | `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `META_APP_SECRET`, configuração de app/webhook e opt-in | Alta para etapa de comunicação; não bloqueia navegação MVP |
| Pagamentos e onboarding de recebedores | Stripe / Stripe Connect | Externa, API | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, chaves públicas quando aplicável, conta e configuração Connect | Alta para etapa financeira; manter desativado até validação jurídica/financeira |
| Observabilidade de IA e rastreamento de execuções | OpenTelemetry + Langfuse | Open source + opção Cloud | Instrumentação OTel; Langfuse URL e chaves pública/privada se utilizado | Média/alta antes de ampliar uso de IA |
| Orquestração durável de processos críticos | Temporal | Open source self-host ou Cloud | Infraestrutura Temporal; credenciais/endpoint conforme modalidade | Futuro; avaliar quando fluxos longos exigirem retomada confiável |
| Automação visual de integrações | n8n | Source-available / Sustainable Use License | Instância, credencial de API e conexões por serviço | Não selecionar sem análise de licença do modelo comercial UNO |

### Observações de seleção

- **Docling** é candidato forte para leitura de documentos porque pode ser executado localmente e oferece CLI/API, reduzindo a necessidade de enviar documentos a um serviço externo.
- **Playwright** serve tanto à automação de navegador quanto aos testes ponta a ponta da V7. A execução deve ocorrer em ambientes isolados e com contas de teste; não deve receber liberdade para operar painéis de produção ou realizar transações sem autorização.
- **Supabase + pgvector** deve ser a primeira opção para busca vetorial/memória de aplicação enquanto atender desempenho e escala. Evitar duplicar dados em outra base sem necessidade demonstrada.
- **Meilisearch** é uma opção complementar de busca dedicada, não uma dependência obrigatória.
- **MapLibre** renderiza mapas; não fornece por si só dados de endereços, geocodificação, lugares ou rotas. A fonte de tiles e os serviços de dados precisam ser escolhidos e licenciados separadamente.
- **Nominatim público** tem limites estritos e não deve ser tratado como API gratuita ilimitada de produção. Para uso recorrente ou comercial em escala, avaliar instância própria ou fornecedor compatível.
- **Turnstile** exige validação server-side do token. A sitekey é pública; a secret key deve ficar apenas no servidor. Separar widgets e chaves por ambiente.
- **WhatsApp** exige política de opt-in, templates e observância das políticas da Meta. Não usar automação não oficial de WhatsApp Web como substituto da API oficial.
- **Stripe Connect** não autoriza por si só o modelo jurídico de marketplace, split ou repasse. O fluxo financeiro permanece bloqueado até aprovação específica e testes de reconciliação.
- **OpenTelemetry** é uma camada neutra de instrumentação, não um painel/armazenamento completo. Pode enviar dados para Langfuse ou outro backend aprovado.
- **n8n** não deve ser rotulado genericamente como open source. A licença Sustainable Use possui restrições relevantes para certos modelos de oferta comercial de automação. Avaliar a licença vigente e o modelo de negócio antes de usar.
- **Temporal** é mais adequado a processos duráveis, longos e críticos do que a pequenas automações simples; sua operação exige infraestrutura e maturidade técnica.

## 4. Mapa de prioridade para o MVP

### 4.1 Prioridade de preparação imediata

1. **Supabase:** confirmar variáveis e configuração já usadas pelo V7; verificar funções, autenticação anônima, políticas e ambiente sem expor service role.
2. **Cloudflare Turnstile:** preparar sitekey e secret separadas para Preview e produção; implementar validação no backend e testar tokens de teste.
3. **Playwright:** usar para smoke tests, navegação responsiva e testes de acesso por papel nos ambientes de desenvolvimento/Preview.
4. **OpenAI API:** registrar como provedor candidato do chat/motor, sem presumir que a chave já exista nem habilitar chamadas sem orçamento e limite.
5. **Docling:** avaliar instalação local para leitura e indexação da documentação EOU, PDFs e documentos institucionais.
6. **OpenTelemetry/Langfuse:** preparar rastreamento mínimo de chamadas, latência, falhas e custos antes de aumentar tráfego de IA.

### 4.2 Preparar catálogo, mas não bloquear o MVP

- Gemini e Claude como provedores alternativos;
- Meilisearch como busca dedicada;
- MapLibre com fonte de tiles escolhida;
- Google Maps ou serviço equivalente para rotas/geocodificação;
- WhatsApp Business Platform;
- Temporal para fluxos duráveis.

### 4.3 Bloqueadas por decisão/validação específica

- Stripe Connect, split, payouts, saques e movimentação de dinheiro;
- qualquer serviço que exija envio de dados sensíveis sem análise de finalidade, base legal, contrato e retenção;
- ferramentas que publiquem conteúdo, alterem permissões, contratem serviços ou executem atos irreversíveis sem aprovação correspondente.

## 5. Registro de credenciais — nomes lógicos, não valores

O catálogo deve guardar apenas o identificador lógico do segredo e sua localização segura. Nunca incluir o valor de uma chave em Markdown, issue, commit, prompt, log, relatório, variável client-side ou conversa.

| Identificador lógico | Variável/nome típico | Uso | Visibilidade |
|---|---|---|---|
| `secret.ai.openai.api_key` | `OPENAI_API_KEY` | Chamadas OpenAI server-side | Somente servidor |
| `secret.ai.gemini.api_key` | `GEMINI_API_KEY` | Chamadas Gemini server-side | Somente servidor |
| `secret.ai.anthropic.api_key` | `ANTHROPIC_API_KEY` | Chamadas Claude server-side | Somente servidor |
| `public.turnstile.site_key` | `TURNSTILE_SITE_KEY` | Renderização do widget | Pode ser pública |
| `secret.turnstile.secret_key` | `TURNSTILE_SECRET_KEY` | Validação server-side | Somente servidor |
| `secret.whatsapp.access_token` | `WHATSAPP_ACCESS_TOKEN` | Envio/recebimento oficial | Somente servidor |
| `config.whatsapp.phone_number_id` | `WHATSAPP_PHONE_NUMBER_ID` | Identificação do número na API | Servidor |
| `secret.meta.app_secret` | `META_APP_SECRET` | Validação/segurança de integração Meta quando aplicável | Somente servidor |
| `secret.stripe.secret_key` | `STRIPE_SECRET_KEY` | Operações Stripe server-side | Somente servidor |
| `secret.stripe.webhook_secret` | `STRIPE_WEBHOOK_SECRET` | Verificação de assinatura webhook | Somente servidor |
| `public.google_maps.api_key` | `GOOGLE_MAPS_API_KEY` | APIs/SDKs Google Maps habilitados e restritos | Conforme uso; chave restrita |
| `secret.langfuse.public_key` | `LANGFUSE_PUBLIC_KEY` | Identificação do projeto Langfuse | Conforme documentação do serviço |
| `secret.langfuse.secret_key` | `LANGFUSE_SECRET_KEY` | Ingestão/acesso Langfuse | Somente servidor |
| `secret.firebase.admin_identity` | ADC/workload identity ou credencial de serviço | Operações privilegiadas Firebase Admin | Somente servidor/identidade de workload |
| `config.supabase.url` | `SUPABASE_URL` | Endpoint do projeto Supabase | Cliente/servidor conforme uso |
| `public.supabase.publishable_key` | chave publishable/anon conforme versão | Acesso público controlado pelo RLS | Pública; nunca substitui RLS |
| `secret.supabase.service_role` | service role/secret key conforme versão | Operações privilegiadas server-side | Somente servidor |

Os nomes são convenções de referência. Antigravity deve primeiro inspecionar os nomes já adotados no código e no painel de ambiente, evitando criar aliases duplicados ou quebrar integrações existentes. A tabela não afirma que qualquer chave esteja ausente ou presente hoje.

## 6. Verificação automática de prontidão pelo motor

A checagem deve funcionar por metadados e testes seguros, sem ler ou exibir o conteúdo dos segredos.

Exemplo de diagnóstico esperado:

- **Capacidade:** `document.extract`
- **Ferramenta candidata:** Docling
- **Instalação:** ausente
- **Credencial:** não necessária para execução local
- **Configuração:** runtime de serviço ainda não definido
- **Ação sugerida:** instalar em ambiente de avaliação e executar fixture sintética.

Outro exemplo:

- **Capacidade:** `anti_abuse.turnstile.verify`
- **Ferramenta:** Cloudflare Turnstile
- **Sitekey:** configurada / ausente
- **Secret:** configurada / ausente (apenas presença verificada)
- **Validação server-side:** aprovada / falhou / não testada
- **Ambiente:** Preview
- **Ação sugerida:** concluir validação sem copiar a chave para logs ou interface.

A checagem de segredo deve retornar apenas metadados como `present`, `missing`, `invalid`, `expired` quando o provedor permitir, `last_rotated_at` e referência do cofre. Nunca retornar o valor ou trechos do valor.

### Regra de autoridade

- O motor pode detectar e relatar ausência.
- O Orquestrador Mestre pode encaminhar a pendência ao responsável.
- O Chaveiro é o único agente autorizado a gerir segredos conforme política institucional aprovada.
- Antigravity pode identificar variáveis esperadas e preparar adapters, mas não pode criar/alterar credenciais externas nem ativar produção sem autorização.
- Nenhum agente pode contornar a falta de chave usando credencial pessoal, variável improvisada ou integração não aprovada.

## 7. Separação obrigatória dos ambientes

Preview e produção devem possuir configurações e credenciais independentes. O painel de prontidão deve exibir o ambiente que está sendo verificado.

- **Desenvolvimento:** fixtures sintéticas e chaves de teste.
- **Preview Vercel:** chaves específicas de Preview, domínios de teste e dados não produtivos.
- **Produção:** credenciais próprias, domínios aprovados, limites financeiros, monitoramento e autorização expressa.
- Nunca copiar automaticamente segredos de produção para Preview.
- Nunca considerar a URL de produção validada apenas porque o Preview funciona.
- Nunca promover Preview para produção sem checklist e aprovação.

## 8. Licenças, custos e sustentabilidade

Antes de instalar/contratar qualquer ferramenta, registrar:

1. licença exata da versão utilizada e permissões para uso comercial, hospedagem e redistribuição;
2. preço atual e unidade de cobrança, quotas gratuitas e limites;
3. custo estimado por missão/usuário/território;
4. custos indiretos de infraestrutura, armazenamento, tráfego, backups e manutenção;
5. localização de dados, subprocessadores, retenção e condições de exclusão;
6. estratégia de exportação, substituição e desligamento;
7. responsável financeiro e teto de consumo aprovado.

“Gratuito”, “open source”, “source available” e “free tier” não são sinônimos. A licença deve ser revisada por versão e pelo modelo real de operação UNO. Não selecionar ferramenta apenas porque o repositório é público.

## 9. Fontes oficiais consultadas

Pesquisa inicial em 31/10/2026. Links são referências para nova verificação antes da adoção:

- [Docling — documentação e execução local](https://docling.ai/)
- [Playwright — repositório e automação de navegador](https://github.com/microsoft/playwright)
- [Supabase — pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase — AI & Vectors](https://supabase.com/docs/guides/ai)
- [Meilisearch — repositório e licença comunitária](https://github.com/meilisearch/meilisearch)
- [MapLibre GL JS — documentação](https://maplibre.org/maplibre-gl-js/docs/)
- [Nominatim — política de uso](https://operations.osmfoundation.org/policies/nominatim/)
- [Google Maps Routes API — configuração, faturamento e restrições de chave](https://developers.google.com/maps/documentation/routes/get-api-key)
- [Cloudflare Turnstile — configuração](https://developers.cloudflare.com/turnstile/get-started/)
- [Cloudflare Turnstile — validação server-side](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [WhatsApp Business Platform — Developer Hub](https://whatsappbusiness.com/developers/developer-hub/)
- [Stripe Connect — marketplaces](https://stripe.com/connect/marketplaces)
- [OpenTelemetry — documentação](https://opentelemetry.io/docs/)
- [Langfuse — self-hosting](https://langfuse.com/self-hosting)
- [Temporal — documentação](https://docs.temporal.io/)
- [n8n — licença e cenários de uso](https://support.n8n.io/article/can-i-use-your-license-for-my-use-case)
- [OpenAI — Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)
- [OpenAI — Moderation](https://developers.openai.com/api/docs/guides/moderation)
- [Google — Gemini API keys](https://ai.google.dev/gemini-api/docs/api-key)
- [Anthropic — autenticação da API](https://platform.claude.com/docs/en/manage-claude/authentication)
- [Firebase Admin SDK — credenciais e identidade de serviço](https://firebase.google.com/docs/admin/setup)

## 10. Decisões e pendências

### Propostas técnicas deste inventário

- Adotar catálogo orientado a capacidades e adaptadores, não amarrado a fornecedor.
- Reaproveitar Supabase/pgvector antes de contratar outra base vetorial.
- Priorizar Docling, Playwright e Turnstile na preparação técnica.
- Instrumentar observabilidade antes de escalar chamadas de IA.
- Manter provedores alternativos cadastrados, mas desativados até avaliação.
- Separar chaves por ambiente e centralizar gestão segura sob o Chaveiro.

### Não decidido pelo fundador

- Qual provedor de IA será principal e quais serão contingência.
- Quais serviços externos serão contratados e quais permanecerão self-hosted.
- Qual serviço de mapas/tiles/rotas será escolhido.
- Se WhatsApp será habilitado no primeiro ciclo público.
- Se Langfuse Cloud ou self-host será utilizado.
- Se haverá orquestrador externo durável no MVP.
- Limites de orçamento por provedor, usuário, missão e território.
- Aprovação jurídica/financeira para ativação do Stripe Connect.

### Instrução ao Antigravity

Ler este inventário junto aos contratos V11, V12, V14, V15, V16, V17, V25, V32, V33 e V34. Conferir o código e os ambientes atuais antes de propor qualquer variável. Produzir uma matriz real com: ferramenta, capacidade, uso encontrado no código, ambiente, variável esperada, presença da configuração (sem revelar valor), teste, custo, licença, autorização e estado. Não instalar, contratar, criar credenciais, alterar ambiente externo, executar transação, aplicar migration ou ativar produção sem autorização específica.

## 11. Histórico

- 0.1.0 — inventário inicial baseado em pesquisa pública e necessidades já documentadas no UNO CORE; 31/10/2026.
