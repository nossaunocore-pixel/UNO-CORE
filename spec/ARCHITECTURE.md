# ARCHITECTURE.md — Arquitetura de Engenharia do UNO CORE

**Sistema:** UNO CORE / Plataforma UNO  
**Revisão:** 31 de outubro de 2026  
**Status:** arquitetura normativa para implementação; integrações sujeitas a validação.

## 1. Modelo de camadas

```
Pessoa
  |
  v
Landing pública / boas-vindas (anônimas)
  |
  | "Conheça o UNO"
  v
Firebase Authentication — Google obrigatório
  |
  v
Serviço server-side de identidade e sessão
  | valida token Google/Firebase, provisiona IDU,
  | aplica regras e emite/valida claims confiáveis
  v
UNO CORE — Kernel / Brain / Engine / Memory / Governance
  |                         |
  |                         +--> Firebase: identidade, memória interna,
  |                              segurança e contexto institucional
  |
  +--> Supabase: dados de uso/produto, conteúdo e arquivos
       com JWT validado, RLS e políticas de ownership/escopo
  |
  +--> Catálogo de capacidades e políticas
       gratuita | consumo | externa | restrita
  |
  +--> Adaptadores externos (APIs, IA, órgãos, pagamentos)
       somente após autorização, limites e auditoria
```

## 2. Limites de confiança

1. O frontend é não confiável. Ocultar botões ou bloquear rotas na interface não é controle suficiente.
2. Firebase Authentication autentica a conta; o backend valida token, estado, IDU e permissões.
3. Claims como `unoFounder`, `unoMaster`, plano, parceiro e escopos devem ser definidos por ambiente confiável server-side. Nunca aceitar claims enviadas pelo cliente ou metadados editáveis pelo usuário.
4. O IDU deve ser estável, não enumerável, provisionado no servidor e associado à identidade do provedor. Não usar e-mail como chave primária universal.
5. Todas as operações Supabase devem depender de JWT reconhecido pela integração Third-Party Auth e de RLS adequada. `TO authenticated` sem condição de ownership/escopo não é autorização suficiente.
6. Nenhuma chave service-role, service account ou segredo de provedor pode entrar em variáveis `VITE_*` ou bundle do navegador.
7. Operações externas, financeiras, irreversíveis ou sensíveis exigem validação server-side, política explícita e, quando aplicável, confirmação humana.

## 3. Responsabilidade dos componentes de dados

### Firebase
- autenticação Google no MVP;
- vínculo da conta autenticada à Identidade UNO (IDU);
- memória interna institucional/operacional e contexto de agentes, quando implementados;
- claims e estado de acesso geridos em ambiente confiável;
- trilha de eventos de segurança e identidade, conforme política de retenção.

### Supabase
- dados de uso e experiência do usuário;
- publicações, comentários, propostas, participações, conteúdo e arquivos, conforme schema implementado;
- autorização por RLS com ownership, escopo e papéis validados;
- acesso do frontend apenas com chave publishable e token de usuário.

### IDU
- identificador UNO independente de Firebase UID, e-mail e IDs Supabase;
- associação provisionada e validada no servidor;
- referência para vincular registros entre domínios, sem expor dados pessoais desnecessários;
- regras de criação, recuperação, colisão, exclusão e auditoria devem ser documentadas e testadas.

## 4. Acesso e ciclo de sessão

- Landing e boas-vindas: públicas.
- “Conheça o UNO”: inicia Google OAuth.
- Todas as rotas internas da aplicação V7: autenticadas.
- Sessão autenticada sem IDU provisionado: acesso interno negado até concluir provisionamento seguro.
- Visitante autenticado: capacidades gratuitas internas elegíveis.
- Aderido/parceiro: capacidades adicionais somente conforme plano, vínculo, escopo e autorização.
- Painel Mestre: claim confiável de fundador ou mestre delegado, mais validação no servidor.

O frontend deve refletir o estado, mas APIs e bancos precisam repetir a autorização. O logout deve encerrar a sessão e limpar estados locais sensíveis.

## 5. Catálogo de capacidades e política de custo

Cada capacidade deve declarar pelo menos:
`id`, `owner`, `description`, `classification`, `cost_model`, `required_plan`, `required_scopes`, `external_dependencies`, `human_approval`, `availability_status`, `rate_limit`, `audit_policy`.

Classificações: `free_internal`, `consumption`, `external`, `restricted`. Classificações podem ser combinadas. O sistema deve negar por padrão quando política, custo, autorização ou dependência estiverem ausentes.

## 6. Orquestração e governança

- Kernel: bootstrap, registro e ciclo de vida.
- Brain: conhecimento oficial, regras e contexto.
- Engine: missões, fluxos, gatilhos e execução controlada.
- Memory: adaptadores de persistência e política de retenção.
- Agents: registro, especialização, escopos e telemetria.
- Capabilities: catálogo, classificação, custo e pré-requisitos.
- Governance: ADR, autorização, auditoria e revisão humana.
- Integrations: adaptadores isolados e credenciais server-side.
- Interface: apresentação de estados e coleta de intenção, sem autoridade própria.

Nenhum agente recebe acesso universal por padrão. A autorização deve ser contextual, limitada e revogável.

## 7. Conversas, histórico e privacidade

Conversas vinculadas à conta/IDU devem ter finalidade, aviso claro, política de retenção e mecanismos de consulta e exclusão. Não salvar indiscriminadamente dados sensíveis. Não compartilhar conversas com agentes, parceiros ou terceiros além do necessário e autorizado. A política de privacidade e os controles de produto precisam refletir a implementação real.

## 8. Ambientes

- **local/dev:** dados sintéticos quando possível; segredos locais não versionados.
- **preview/test:** autenticação e integrações de teste, limites conservadores e nenhuma cobrança real.
- **production:** habilitação gradual após checklist técnico, jurídico, segurança, monitoramento e autorização humana.

## 9. Critérios mínimos de validação

- teste de acesso anônimo a todas as rotas internas;
- teste de login Google e provisionamento IDU;
- teste de token inválido/expirado e sessão encerrada;
- teste de usuário sem plano e sem escopo;
- teste de claims privilegiadas apenas server-side;
- teste RLS de leitura, escrita, atualização, exclusão e tentativa de acesso cruzado;
- inspeção de bundle e variáveis para ausência de segredos;
- build e testes automatizados;
- registro de evidências e resultado por ambiente.

## 10. Situação conhecida e cautela

A presença de um cliente Firebase/Supabase no repositório não prova integração completa. A configuração de Firebase Third-Party Auth no Supabase, as policies RLS, o endpoint de provisionamento IDU, os serviços server-side e as rotinas de retenção precisam ser inspecionados e testados. Até lá, devem ser marcados como pendentes.
