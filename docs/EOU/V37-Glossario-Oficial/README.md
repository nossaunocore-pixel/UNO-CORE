# EOU-V37 — Glossário Oficial

- Versão documental: 0.3.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: estrutura inicial; glossário canônico ainda precisa ser preenchido e revisado
- Relacionados: todos os volumes EOU, especialmente V03 MUE, V26 Identidade, V28 Entidades, V36 ADR

## 1. Finalidade
Estabelecer vocabulário comum para documentos, código, interfaces, agentes, equipes e parceiros, reduzindo ambiguidades e preservando o significado oficial de conceitos e siglas.

## 2. Registro terminológico
Cada termo deve ter: forma preferida, definição, categoria, contexto, sinônimos permitidos, termos proibidos/ambíguos, sigla, origem, volume responsável, exemplos, estado, responsável e data de revisão.

## 3. Regras
- Um conceito canônico deve ter um termo preferido.
- Sinônimos históricos podem ser preservados, mas devem apontar para o termo vigente.
- Siglas não devem ser reutilizadas para conceitos distintos.
- Termos de interface podem ser mais simples que termos técnicos, desde que mapeados.
- Traduções devem manter significado e contexto.
- Mudanças terminológicas relevantes exigem atualização de documentação, código e ADR quando afetarem contratos.

## 4. Termos canônicos já identificados
- **UNO CORE:** camada de orquestração universal e ecossistema institucional/tecnológico.
- **EOU:** Engenharia Oficial UNO; coleção de 40 volumes de engenharia.
- **Volume EOU:** documento/domínio numerado V01–V40.
- **Versão do produto:** etapa de evolução/entrega, como V5, V6, V7.
- **Orquestrador Mestre:** camada de coordenação e governança de agentes, APIs e módulos, sujeita a autorização humana.
- **Oficina Mestre:** ambiente de criação, edição, versionamento e revisão de artefatos.
- **Centro de Operações:** domínio de acompanhamento e operação.
- **IDU:** identificador digital universal da pessoa no UNO, separado do UID do provedor.
- **MUE:** Moderador Universal de Entidades; definição detalhada vinculada ao V03.
- **Vitrine:** ambiente de descoberta/apresentação comercial.
- **Comunidade:** ambiente social e informacional do território.
- **Participação:** ambiente de propostas, consultas e mecanismos participativos.
- **Praça UNO:** ambiente institucional e de acesso comunitário.
- **Chaveiro:** papel/componente restrito para gerenciamento autorizado de segredos.
- **Sinergia:** coordenação de capacidades/motores especializados, sem eliminar governança.

## 4.1. Nomenclatura institucional canônica — NÓS S.A.

- **NÓS S.A.:** denominação institucional obrigatória da empresa e instituição de referência vinculada ao ecossistema UNO. A grafia oficial é exatamente **NÓS S.A.**, com acento agudo em NÓS e pontuação em S.A.
- **Forma proibida para a denominação institucional:** “Nossa S.A.”, “NOS S.A.”, “Nós SA”, “NÓS SA” ou outras variantes sem aprovação expressa do fundador.
- **UNO CORE:** ecossistema e camada de orquestração universal; não é sinônimo da pessoa jurídica NÓS S.A.
- **Relação:** NÓS S.A. é uma instituição que utiliza e se integra ao UNO CORE. Sua integração ampliada não a torna proprietária de todas as instituições nem elimina a autonomia delas.
- **Identificadores técnicos históricos:** nomes de usuário, organizações GitHub, slugs, caminhos e identificadores legados não devem ser alterados automaticamente quando contiverem grafias técnicas antigas. A correção aplica-se à denominação institucional exibida em conteúdo editorial, interfaces e documentos.

A nomenclatura **NÓS S.A.** foi confirmada expressamente pelo fundador em 31/10/2026 e deve ser aplicada em novos documentos, interfaces e comunicações institucionais.

## 5. Termos que exigem cuidado
“Agente”, “usuário”, “entidade”, “instituição”, “parceiro”, “pioneiro”, “visitante”, “serviço”, “oferta”, “contratação”, “carteira”, “saldo”, “aprovação”, “ativação” e “publicação” devem ter definições precisas por domínio. Não usar “saldo” para representar valor apenas estimado ou não liquidado.

## 6. Convenção de identificadores
V01–V40 identificam volumes EOU. V5/V6/V7 identificam versões do produto. IDs técnicos estáveis não devem ser alterados por mudança de nome de exibição.

## 7. Processo editorial
Proposta de termo → análise do volume responsável → verificação de colisões → aprovação → atualização de referências → registro de histórico. Manter aliases para busca sem confundir nome oficial.

## 8. Pendências
Criar inventário completo, revisar todas as siglas, definir termos jurídicos e comerciais, adicionar equivalentes em inglês quando necessário e automatizar verificação de links/nomes.

## 9. Histórico
0.3.0 — inclusão da forma institucional canônica NÓS S.A. e regra de distinção em relação ao UNO CORE; 2026-10-31.
0.2.0 — vocabulário inicial e regras editoriais; 2026-10-31.
