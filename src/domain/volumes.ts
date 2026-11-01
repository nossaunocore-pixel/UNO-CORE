/**
 * Machine-readable registry for the 40-volume EOU.
 * Maturity reflects the audited documentation state on 2026-10-31,
 * not implementation completeness or release status.
 */

export type VolumeNature = 'structural' | 'evolutive' | 'operation_dependent';
export type VolumeMaturity = 'documented' | 'readme_base' | 'naming_conflict';

export interface EOUVolumeDefinition {
  id: `V${string}`;
  number: number;
  name: string;
  nature: VolumeNature;
  maturity: VolumeMaturity;
  sourcePath: string;
  legacyName?: string;
  decisionRequired: boolean;
  boundaryNote?: string;
  implementationDomains: readonly string[];
}

const documented = (number: number): VolumeMaturity =>
  number <= 8 ? 'documented' : 'readme_base';

export const EOU_VOLUMES: readonly EOUVolumeDefinition[] = [
  { id: 'V01', number: 1, name: 'Constituição Técnica', nature: 'structural', maturity: documented(1), sourcePath: 'docs/EOU/V01-Constituicao-Tecnica', decisionRequired: false, implementationDomains: ['constitution', 'invariants', 'engineering-guardrails'] },
  { id: 'V02', number: 2, name: 'Arquitetura Oficial', nature: 'structural', maturity: documented(2), sourcePath: 'docs/EOU/V02-Arquitetura-Oficial', decisionRequired: false, implementationDomains: ['kernel', 'module-contracts', 'events', 'data-architecture'] },
  { id: 'V03', number: 3, name: 'MUE', nature: 'structural', maturity: documented(3), sourcePath: 'docs/EOU/V03-MUE', decisionRequired: false, boundaryNote: 'Meta-modelo universal de entidades; V28 deve detalhar os tipos aplicados e suas especializações.', implementationDomains: ['entity-model', 'relationships', 'identity-links'] },
  { id: 'V04', number: 4, name: 'EVA', nature: 'structural', maturity: documented(4), sourcePath: 'docs/EOU/V04-EVA', decisionRequired: false, implementationDomains: ['value-model', 'learning', 'evidence'] },
  { id: 'V05', number: 5, name: 'Oficina Mestre', nature: 'structural', maturity: 'documented', sourcePath: 'docs/EOU/V05-OM', legacyName: 'Ordem de Missão', decisionRequired: false, boundaryNote: 'Nomenclatura oficial confirmada pelo fundador em 2026-10-31. Ordem de Missão é preservado apenas como referência histórica da série anterior de oito volumes.', implementationDomains: ['workshop', 'versioning', 'review', 'approval', 'rollback'] },
  { id: 'V06', number: 6, name: 'Centro de Operações', nature: 'structural', maturity: 'documented', sourcePath: 'docs/EOU/V06-CO', legacyName: 'Conhecimento Organizacional', decisionRequired: false, boundaryNote: 'Nomenclatura oficial confirmada pelo fundador em 2026-10-31. Conhecimento Organizacional é preservado apenas como referência histórica da série anterior de oito volumes.', implementationDomains: ['operations-center', 'monitoring', 'incident-management'] },
  { id: 'V07', number: 7, name: 'CCM', nature: 'structural', maturity: documented(7), sourcePath: 'docs/EOU/V07-CCM', decisionRequired: false, implementationDomains: ['agents', 'missions', 'delegation', 'supervision'] },
  { id: 'V08', number: 8, name: 'OPS', nature: 'structural', maturity: documented(8), sourcePath: 'docs/EOU/V08-OPS', decisionRequired: false, implementationDomains: ['operations', 'execution', 'observability', 'rollback'] },
  { id: 'V09', number: 9, name: 'Catálogo de Capacidades', nature: 'evolutive', maturity: documented(9), sourcePath: 'docs/EOU/V09-Catalogo-de-Capacidades', decisionRequired: false, implementationDomains: ['capabilities', 'entitlements', 'costs', 'limits'] },
  { id: 'V10', number: 10, name: 'Catálogo de Agentes', nature: 'evolutive', maturity: documented(10), sourcePath: 'docs/EOU/V10-Catalogo-de-Agentes', decisionRequired: false, implementationDomains: ['agents', 'agent-permissions', 'agent-memory'] },
  { id: 'V11', number: 11, name: 'Catálogo de Ferramentas', nature: 'evolutive', maturity: documented(11), sourcePath: 'docs/EOU/V11-Catalogo-de-Ferramentas', decisionRequired: false, implementationDomains: ['tools', 'connectors', 'tool-permissions'] },
  { id: 'V12', number: 12, name: 'Catálogo de Provedores', nature: 'evolutive', maturity: documented(12), sourcePath: 'docs/EOU/V12-Catalogo-de-Provedores', decisionRequired: false, implementationDomains: ['providers', 'service-levels', 'pricing', 'fallbacks'] },
  { id: 'V13', number: 13, name: 'Banco de Dados Mestre', nature: 'structural', maturity: documented(13), sourcePath: 'docs/EOU/V13-Banco-de-Dados-Mestre', decisionRequired: false, implementationDomains: ['idu', 'supabase', 'firebase', 'rls', 'migrations'] },
  { id: 'V14', number: 14, name: 'APIs e Gateways', nature: 'evolutive', maturity: documented(14), sourcePath: 'docs/EOU/V14-APIs-e-Gateways', decisionRequired: false, implementationDomains: ['api-contracts', 'ai-gateway', 'authentication', 'rate-limits'] },
  { id: 'V15', number: 15, name: 'Integrações', nature: 'evolutive', maturity: documented(15), sourcePath: 'docs/EOU/V15-Integracoes', decisionRequired: false, implementationDomains: ['integrations', 'consent', 'webhooks', 'fallbacks'] },
  { id: 'V16', number: 16, name: 'Segurança e Auditoria', nature: 'structural', maturity: documented(16), sourcePath: 'docs/EOU/V16-Seguranca-e-Auditoria', decisionRequired: false, implementationDomains: ['security', 'audit', 'rls', 'incident-response'] },
  { id: 'V17', number: 17, name: 'Governança', nature: 'structural', maturity: documented(17), sourcePath: 'docs/EOU/V17-Governanca', decisionRequired: false, implementationDomains: ['governance', 'rbac', 'abac', 'approvals', 'delegation'] },
  { id: 'V18', number: 18, name: 'Marketplace', nature: 'evolutive', maturity: documented(18), sourcePath: 'docs/EOU/V18-Marketplace', decisionRequired: false, boundaryNote: 'Define descoberta e contratação; V12 define provedores e V15 conectores técnicos. Produtos/serviços podem ser UNO ou terceiros.', implementationDomains: ['catalog', 'products', 'services', 'offers', 'checkout'] },
  { id: 'V19', number: 19, name: 'Industrial', nature: 'operation_dependent', maturity: documented(19), sourcePath: 'docs/EOU/V19-Industrial', decisionRequired: false, implementationDomains: ['industrial-services', 'production', 'logistics', 'maintenance'] },
  { id: 'V20', number: 20, name: 'Infraestrutura Comunitária', nature: 'operation_dependent', maturity: documented(20), sourcePath: 'docs/EOU/V20-Infraestrutura-Comunitaria', decisionRequired: false, implementationDomains: ['community', 'territory', 'shared-resources', 'transparency'] },
  { id: 'V21', number: 21, name: 'Educação e Capacitação', nature: 'operation_dependent', maturity: documented(21), sourcePath: 'docs/EOU/V21-Educacao-e-Capacitacao', decisionRequired: false, boundaryNote: 'Instituição mantém suas regras; oferta integrada aparece na Vitrine; matrícula/contratação em Serviços; confirmação gera Serviço Ativo.', implementationDomains: ['education', 'courses', 'enrollments', 'active-services'] },
  { id: 'V22', number: 22, name: 'Saúde', nature: 'operation_dependent', maturity: documented(22), sourcePath: 'docs/EOU/V22-Saude', decisionRequired: false, implementationDomains: ['health-services', 'sensitive-data', 'consent', 'compliance'] },
  { id: 'V23', number: 23, name: 'Habitação', nature: 'operation_dependent', maturity: documented(23), sourcePath: 'docs/EOU/V23-Habitacao', decisionRequired: false, implementationDomains: ['housing', 'households', 'property-services'] },
  { id: 'V24', number: 24, name: 'Empregabilidade', nature: 'operation_dependent', maturity: documented(24), sourcePath: 'docs/EOU/V24-Empregabilidade', decisionRequired: false, implementationDomains: ['employment', 'professional-skills', 'income', 'opportunities'] },
  { id: 'V25', number: 25, name: 'Financeiro', nature: 'operation_dependent', maturity: documented(25), sourcePath: 'docs/EOU/V25-Financeiro', decisionRequired: false, boundaryNote: 'Ledger, carteira, tarifas e conciliação; gestão operacional Stripe é subárea do Painel Contábil e Financeiro.', implementationDomains: ['ledger', 'wallet', 'stripe', 'payouts', 'reconciliation'] },
  { id: 'V26', number: 26, name: 'Identidade Digital', nature: 'structural', maturity: documented(26), sourcePath: 'docs/EOU/V26-Identidade-Digital', decisionRequired: false, implementationDomains: ['idu', 'firebase-auth', 'claims', 'identity-lifecycle'] },
  { id: 'V27', number: 27, name: 'Usuários e Perfis', nature: 'structural', maturity: documented(27), sourcePath: 'docs/EOU/V27-Usuarios-e-Perfis', decisionRequired: false, implementationDomains: ['profiles', 'household', 'professional-profile', 'consent'] },
  { id: 'V28', number: 28, name: 'Entidades', nature: 'structural', maturity: documented(28), sourcePath: 'docs/EOU/V28-Entidades', decisionRequired: false, boundaryNote: 'Catálogo aplicado de tipos e especializações de entidades; V03 permanece o meta-modelo universal.', implementationDomains: ['entity-types', 'institutions', 'branches', 'providers'] },
  { id: 'V29', number: 29, name: 'Projetos', nature: 'operation_dependent', maturity: documented(29), sourcePath: 'docs/EOU/V29-Projetos', decisionRequired: false, implementationDomains: ['projects', 'milestones', 'resources', 'outcomes'] },
  { id: 'V30', number: 30, name: 'Eventos', nature: 'operation_dependent', maturity: documented(30), sourcePath: 'docs/EOU/V30-Eventos', decisionRequired: false, boundaryNote: 'Eventos e festivais ficam em Lazer; ingresso/inscrição não transforma o evento no catálogo geral de serviços.', implementationDomains: ['leisure', 'events', 'festivals', 'registrations'] },
  { id: 'V31', number: 31, name: 'Fluxos', nature: 'evolutive', maturity: documented(31), sourcePath: 'docs/EOU/V31-Fluxos', decisionRequired: false, implementationDomains: ['workflows', 'states', 'transitions', 'idempotency'] },
  { id: 'V32', number: 32, name: 'Automações', nature: 'evolutive', maturity: documented(32), sourcePath: 'docs/EOU/V32-Automacoes', decisionRequired: false, implementationDomains: ['automations', 'triggers', 'scheduling', 'approvals'] },
  { id: 'V33', number: 33, name: 'Motor Cognitivo', nature: 'evolutive', maturity: documented(33), sourcePath: 'docs/EOU/V33-Motor-Cognitivo', decisionRequired: false, implementationDomains: ['reasoning', 'models', 'memory', 'evaluation', 'guardrails'] },
  { id: 'V34', number: 34, name: 'UNO CORE', nature: 'structural', maturity: documented(34), sourcePath: 'docs/EOU/V34-UNO-CORE', decisionRequired: false, implementationDomains: ['kernel', 'orchestration', 'module-composition'] },
  { id: 'V35', number: 35, name: 'Roadmap Oficial', nature: 'structural', maturity: documented(35), sourcePath: 'docs/EOU/V35-Roadmap-Oficial', decisionRequired: false, implementationDomains: ['roadmap', 'milestones', 'release-gates'] },
  { id: 'V36', number: 36, name: 'ADR', nature: 'structural', maturity: documented(36), sourcePath: 'docs/EOU/V36-ADR', decisionRequired: false, implementationDomains: ['decisions', 'precedence', 'supersession'] },
  { id: 'V37', number: 37, name: 'Glossário Oficial', nature: 'structural', maturity: documented(37), sourcePath: 'docs/EOU/V37-Glossario-Oficial', decisionRequired: false, implementationDomains: ['glossary', 'terminology', 'acronyms'] },
  { id: 'V38', number: 38, name: 'Padrões de Engenharia', nature: 'structural', maturity: documented(38), sourcePath: 'docs/EOU/V38-Padroes-de-Engenharia', decisionRequired: false, implementationDomains: ['engineering-standards', 'ci', 'testing', 'observability'] },
  { id: 'V39', number: 39, name: 'Documentação Jurídica', nature: 'structural', maturity: documented(39), sourcePath: 'docs/EOU/V39-Documentacao-Juridica', decisionRequired: false, implementationDomains: ['legal-documents', 'contracts', 'privacy', 'compliance'] },
  { id: 'V40', number: 40, name: 'Documentação Institucional', nature: 'structural', maturity: documented(40), sourcePath: 'docs/EOU/V40-Documentacao-Institucional', decisionRequired: false, implementationDomains: ['institutional-identity', 'mission', 'governance', 'public-records'] }
] as const;

export function getEOUVolume(id: string): EOUVolumeDefinition | undefined {
  return EOU_VOLUMES.find((volume) => volume.id === id);
}

export function getVolumesRequiringFounderDecision(): EOUVolumeDefinition[] {
  return EOU_VOLUMES.filter((volume) => volume.decisionRequired);
}

export function getVolumesByMaturity(maturity: VolumeMaturity): EOUVolumeDefinition[] {
  return EOU_VOLUMES.filter((volume) => volume.maturity === maturity);
}
