# EOU-V09 — Catálogo Universal de Capacidades

- Versão documental: 0.2.0
- Estado: rascunho técnico estruturado — requer revisão do domínio
- Responsável: Orquestrador Mestre, com autorização humana para mudanças de governança
- Relacionados: V03 MUE, V04 EVA, V10 Agentes, V11 Ferramentas, V17 Governança, V28 Entidades, V31 Fluxos

## 1. Finalidade
Definir um catálogo único, legível por pessoas e máquinas, das capacidades que pessoas, agentes, instituições, equipes, serviços e módulos podem oferecer ou executar no ecossistema UNO. Capacidade descreve **o que uma entidade está apta a realizar**, não concede por si só autorização para realizar.

## 2. Escopo e exclusões
Inclui taxonomia, identidade estável, descrição, pré-requisitos, titularidade, disponibilidade, qualificação, limites, custo, riscos, evidências e ciclo de vida. Não substitui cadastro de agentes (V10), ferramentas (V11), provedores (V12), ofertas comerciais (V18) nem permissões (V17).

## 3. Modelo de capacidade
Cada registro deve conter: `capability_id` imutável; nome e descrição; domínio e categorias; entidade titular; tipo de executor (humano, artificial, institucional, híbrido); entradas e saídas; pré-condições; recursos necessários; qualificação/evidências; território e público atendido; nível de risco; custo e unidade de cobrança, se houver; limites e quotas; dependências; estado; versão; responsável; origem UNO/terceiro; datas de validade e trilha de alterações.

## 4. Estados e ciclo de vida
Proposta → em análise → aprovada → publicada/disponível → suspensa → retirada. Execução é um estado separado e depende de missão/fluxo autorizado. Mudanças materiais geram nova versão; retirada não apaga histórico. Capacidades de alto risco exigem revisão humana e evidência proporcional.

## 5. Regras e governança
- Catálogo não é mecanismo de autorização.
- Agente só pode invocar capacidade se identidade, escopo, missão, contexto e política permitirem.
- Capacidade humana exige consentimento, disponibilidade e qualificação aplicável.
- Capacidade de terceiro exige origem, fornecedor, contrato/licença e limites.
- Não inferir habilitação profissional apenas por autodeclaração.
- Indisponibilidade, expiração ou revogação bloqueiam novas execuções.

## 6. Dados, APIs e eventos
Expor consultas filtradas por domínio, território, estado, qualificação e acessibilidade. Escritas somente por fluxo autorizado da Oficina Mestre ou serviço de domínio. Eventos sugeridos: `capability.proposed`, `capability.approved`, `capability.published`, `capability.suspended`, `capability.versioned`. Contratos definitivos e armazenamento ainda precisam de ADR/schema próprio.

## 7. Segurança, auditoria e privacidade
Aplicar mínimo privilégio, segregação entre capacidade e permissão, minimização de dados pessoais, controle de documentos comprobatórios e trilha append-only para decisões relevantes. Dados sensíveis não devem ser copiados para catálogos públicos.

## 8. Interfaces e operação
A Oficina Mestre administra rascunhos e revisões; catálogos públicos mostram somente capacidades aprovadas e publicáveis. Busca deve permitir linguagem simples, filtros acessíveis e indicação clara de disponibilidade, território e requisitos.

## 9. Testes e critérios de aceite
Testar IDs estáveis, duplicidade, versionamento, expiração, suspensão, autorização negativa, origem de terceiros, visibilidade pública e auditoria. Aceite exige schema versionado, regras de publicação, API documentada e testes de autorização.

## 10. Lacunas e decisões pendentes
Definir taxonomia final, escala de risco, evidências por profissão, política de custo, modelo de disponibilidade e quem aprova cada classe. Este volume não declara esses itens resolvidos nem afirma que o catálogo completo esteja implantado.

## 11. Histórico
0.2.0 — estrutura técnica inicial preparada para revisão; 2026-10-31.
