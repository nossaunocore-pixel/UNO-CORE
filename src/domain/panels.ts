/**
 * UNO panel directory. This is a presentation/domain registry, not an
 * authorization engine. Server-side policy and explicit assignments decide
 * who can enter or perform each operation.
 */

export type PanelId =
  | 'master'
  | 'administrative'
  | 'general_coordination'
  | 'legal'
  | 'accounting_finance'
  | 'platform_finance'
  | 'support';

export type SupportLevel =
  | 'support_operator'
  | 'support_specialist'
  | 'support_supervisor'
  | 'support_general_manager';

export interface PanelDefinition {
  id: PanelId;
  title: string;
  purpose: string;
  requiredScope: string;
  defaultAccess: 'deny';
  responsibleDomains: readonly string[];
  operationalRoles: readonly string[];
  sensitiveActionsRequireHumanApproval: boolean;
}

export const UNO_PANELS: readonly PanelDefinition[] = [
  {
    id: 'master',
    title: 'Painel Mestre',
    purpose: 'Administração da arquitetura, governança, Oficina e diálogo com o Orquestrador Mestre.',
    requiredScope: 'uno.panel.master.access',
    defaultAccess: 'deny',
    responsibleDomains: ['architecture', 'orchestration', 'governance', 'workshop'],
    operationalRoles: ['founder', 'master_delegate'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'administrative',
    title: 'Painel Administrativo',
    purpose: 'Gestão administrativa geral e rotinas internas da operação.',
    requiredScope: 'uno.panel.administrative.access',
    defaultAccess: 'deny',
    responsibleDomains: ['administration', 'records', 'internal_processes'],
    operationalRoles: ['administrative_manager', 'administrative_operator'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'general_coordination',
    title: 'Painel de Coordenação Geral',
    purpose: 'Visão executiva de metas, indicadores, prioridades, riscos e acompanhamento.',
    requiredScope: 'uno.panel.general_coordination.access',
    defaultAccess: 'deny',
    responsibleDomains: ['strategy', 'executive_metrics', 'coordination', 'risk_follow_up'],
    operationalRoles: ['general_coordinator', 'executive_delegate'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'legal',
    title: 'Painel Jurídico',
    purpose: 'Contratos, obrigações, conformidade, documentos e riscos jurídicos.',
    requiredScope: 'uno.panel.legal.access',
    defaultAccess: 'deny',
    responsibleDomains: ['contracts', 'compliance', 'legal_documents', 'legal_risk'],
    operationalRoles: ['legal_reviewer', 'legal_manager'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'accounting_finance',
    title: 'Painel Contábil e Financeiro',
    purpose: 'Contabilidade, orçamento, receitas, despesas, conciliação e obrigações fiscais.',
    requiredScope: 'uno.panel.accounting_finance.access',
    defaultAccess: 'deny',
    responsibleDomains: ['accounting', 'budget', 'bookkeeping', 'tax_reporting'],
    operationalRoles: ['accounting_operator', 'finance_manager'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'platform_finance',
    title: 'Painel Financeiro da Plataforma',
    purpose: 'Administração operacional do Stripe e dos fluxos financeiros da plataforma.',
    requiredScope: 'uno.panel.platform_finance.access',
    defaultAccess: 'deny',
    responsibleDomains: ['stripe_configuration', 'payments', 'refunds', 'reconciliation', 'payout_controls'],
    operationalRoles: ['platform_finance_operator', 'platform_finance_manager'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'support',
    title: 'Painel de Atendimento',
    purpose: 'Atendimento escalonado, encaminhamento, acompanhamento e resolução de solicitações.',
    requiredScope: 'uno.panel.support.access',
    defaultAccess: 'deny',
    responsibleDomains: ['support_queue', 'case_management', 'escalation', 'service_quality'],
    operationalRoles: [
      'support_operator',
      'support_specialist',
      'support_supervisor',
      'support_general_manager'
    ],
    sensitiveActionsRequireHumanApproval: true
  }
] as const;

export function getPanelDefinition(id: PanelId): PanelDefinition | undefined {
  return UNO_PANELS.find((panel) => panel.id === id);
}
