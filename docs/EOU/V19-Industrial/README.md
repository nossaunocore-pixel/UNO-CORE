# EOU-V19 — Industrial

- Versão documental: 0.2.0 (README-base)
- Aprofundamento complementar: [Especificação técnica 0.3.0](ESPECIFICACAO-TECNICA.md)
- Estado do aprofundamento: proposta técnica em branch de revisão; pendente de aprovação
- Estado: arquitetura de domínio inicial; não implementado como operação industrial
- Relacionados: V09 Capacidades, V12 Provedores, V15 Integrações, V18 Marketplace, V20 Infraestrutura Comunitária, V24 Empregabilidade, V29 Projetos, V31 Fluxos

## 1. Finalidade
Definir como o UNO poderá mapear, conectar e apoiar atividades industriais e produtivas no território, aproximando empresas, fornecedores, profissionais, capacidade produtiva, manutenção, logística e oportunidades, sem assumir controle de máquinas ou processos industriais por padrão.

## 2. Limites de escopo
Inclui cadastro de unidades produtivas, linhas/processos em nível informacional, fornecedores, insumos, ordens de serviço, manutenção, qualificação, capacidade declarada, resíduos, logística e oportunidades. Controle operacional OT/SCADA, segurança funcional e comando de equipamentos ficam fora do MVP e exigem projeto especializado, certificação e autorização específica.

## 3. Entidades
Organização, planta/unidade, linha, ativo, processo, produto, lote, insumo, fornecedor, profissional, ordem de produção, ordem de manutenção, inspeção, incidente, resíduo, transporte e contrato. Identificadores e ownership devem ser definidos por V13/V28.

## 4. Fluxos
Mapear demanda → capacidade disponível → cotação → contratação → planejamento → execução pelo responsável industrial → inspeção/entrega → registro de resultado. UNO pode facilitar descoberta e coordenação; não declarar qualidade, conformidade ou segurança sem laudo e responsável competente.

## 5. Segurança e responsabilidade
Dados industriais podem ser confidenciais e críticos. Segregar organização, planta e usuário; limitar divulgação de produção, localização e vulnerabilidades. Nenhuma integração com rede OT deve ser feita sem avaliação de risco, segmentação, aprovação do operador e plano de contingência. Nunca permitir que agente de IA envie comandos físicos autônomos.

## 6. Integrações
ERP/MES/CMMS, logística, fornecedores e sensores somente por V14/V15, com APIs documentadas, consentimento, contratos e ambiente de teste. Não presumir compatibilidade de equipamento ou fornecedor.

## 7. Indicadores
Capacidade declarada versus disponível, lead time, utilização, manutenção, qualidade, desperdício e impacto territorial. Definições e fórmulas devem ser acordadas com cada operação; indicadores não podem expor segredo industrial.

## 8. Testes e aceite
Validar isolamento multiempresa, permissão por unidade, integridade de ordens, trilha, exportação, falha de integração e indisponibilidade. Operação OT exige avaliação independente e testes de segurança específicos.

## 9. Pendências
Definir primeiro caso de uso do piloto, fronteira entre diretório e sistema de gestão industrial, padrões de dados, responsabilidades contratuais e requisitos de segurança industrial. Nenhum módulo industrial operacional está declarado entregue neste volume.

## 10. Histórico
0.2.0 — domínio delimitado para evolução futura; 2026-10-31.
