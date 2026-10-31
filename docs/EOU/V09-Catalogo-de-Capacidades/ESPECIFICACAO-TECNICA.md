# EOU-V09 — Especificação técnica do Catálogo Universal de Capacidades

- Revisão documental: 0.3.0
- Estado: proposta técnica para revisão; não autoriza execução ou publicação automática
- Dependências: V03, V04, V10, V11, V16, V17, V28, V31

## 1. Contrato e invariantes
Capacidade descreve o que uma pessoa, agente, instituição, módulo ou serviço está apto a oferecer ou executar. Não concede autorização. A autorização é decidida por V17 no contexto de uma missão/fluxo.

- Identificador estável e não reutilizável.
- Titular e responsável obrigatórios.
- Qualificação, disponibilidade, autorização e execução são conceitos separados.
- Capacidade suspensa, expirada ou revogada não pode ser selecionada.
- Alteração material cria nova versão; histórico não é apagado.
- Projeção pública contém somente campos explicitamente publicáveis.

## 2. Modelo lógico
Capability: id, slug, nome, descrição, domínio, entidade titular, tipo de executor, estado e versão atual.
CapabilityVersion: versão, schemas de entrada/saída, pré-requisitos, classe de risco, custo/unidade, limites, território, acessibilidade e validade.
QualificationEvidence: tipo de evidência, emissor, referência, verificador, data de verificação e expiração.
CapabilityDependency: capacidade dependente, relação e restrição de versão.
CapabilityAvailability: território, agenda, capacidade disponível, estado e validade.
CapabilityReview: revisor, decisão, justificativa, evidências e data.

Tipos de executor propostos: humano, agente, instituição, módulo e híbrido. Estados: rascunho, em revisão, aprovada, publicada, suspensa e retirada. Classes de risco baixa, moderada, alta e crítica são proposta e dependem de ratificação.

## 3. Qualificação e risco
Autodeclaração inicia cadastro, mas não comprova habilitação regulamentada. Evidências devem registrar emissor, validade e escopo. Atividades regulamentadas exigem verificação compatível com a lei e revisão humana competente. Risco considera dano potencial, reversibilidade, sensibilidade, impacto financeiro, alcance e autonomia. Capacidade de terceiro declara origem, licença/contrato e responsável.

## 4. Seleção
Entrada: solicitante, finalidade, território/contexto, capacidade requerida, janela de tempo e restrições. O seletor retorna candidatos e motivos de elegibilidade; não executa a ação. Elegibilidade exige publicação, validade, território, pré-requisitos, evidências válidas, disponibilidade e autorização V17.

## 5. Interfaces e eventos propostos
Operações: criar rascunho; consultar por ID; pesquisar com filtros; submeter para revisão; publicar após aprovação; suspender; retirar. Eventos: criada, versionada, submetida, aprovada, publicada, suspensa, expirada e retirada. Eventos carregam IDs, versão, ator, correlação e horário, sem dados pessoais desnecessários.

## 6. Segurança, auditoria e testes
V17 decide permissões; V16 define controles. Registrar ator, escopo, motivo, versão e evidências. Testar ID duplicado, alteração de versão publicada, evidência vencida, suspensão ignorada, capacidade tratada como autorização, vazamento de evidência privada, dependência cíclica e publicação concorrente.

## 7. Critérios de aceite e decisões abertas
Documental: aprovar taxonomia, schema, escala de risco e fluxo de revisão. Implementação: migrations, APIs protegidas, testes negativos, auditoria e projeção pública testada. Pendências: evidências por profissão, validade, responsáveis por publicação, custo/unidade e granularidade territorial. Não declarar catálogo operacional até concluir esses itens.
