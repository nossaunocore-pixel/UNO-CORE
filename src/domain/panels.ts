/**
 * UNO panel directory. This is a presentation/domain registry, not an
 * authorization engine. Server-side policy and explicit assignments decide
 * who can enter or perform each operation.
 */

export const PANEL_SCOPE_KEYS = [
  'uno.panel.master.access',
  'uno.panel.administrative.access',
  'uno.panel.general_coordination.access',
  'uno.panel.legal.access',
  'uno.panel.accounting_finance.access',
  'uno.panel.support.access'
] as const;

export type PanelScope = typeof PANEL_SCOPE_KEYS[number];

export type PanelId =
  | 'master'
  | 'administrative'
  | 'general_coordination'
  | 'legal'
  | 'accounting_finance'
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
  requiredScope: PanelScope;
  defaultAccess: 'deny';
  responsibleDomains: readonly string[];
  operationalRoles: readonly string[];
  subAreas: readonly string[];
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
    subAreas: ['Orquestrador Mestre', 'Bibliotecas', 'Oficina', 'Políticas e aprovações'],
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
    subAreas: ['Rotinas administrativas', 'Cadastros operacionais', 'Documentos e processos'],
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
    subAreas: ['Metas e indicadores', 'Prioridades', 'Riscos e acompanhamento'],
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
    subAreas: ['Contratos', 'Conformidade', 'Obrigações e riscos'],
    sensitiveActionsRequireHumanApproval: true
  },
  {
    id: 'accounting_finance',
    title: 'Painel Contábil e Financeiro',
    purpose: 'Contabilidade, orçamento, receitas, despesas, conciliação e obrigações fiscais.',
    requiredScope: 'uno.panel.accounting_finance.access',
    defaultAccess: 'deny',
    responsibleDomains: [
      'accounting', 'budget', 'bookkeeping', 'tax_reporting',
      'stripe_configuration', 'payments', 'refunds', 'reconciliation', 'payout_controls'
    ],
    operationalRoles: ['accounting_operator', 'platform_finance_operator', 'finance_manager'],
    subAreas: ['Contabilidade', 'Orçamento e conciliação', 'Gestão operacional Stripe', 'Pagamentos, repasses e tarifas', 'Reembolsos e disputas'],
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
    subAreas: ['Atendimento inicial', 'Atendimento especializado', 'Supervisão', 'Gestão geral e escalonamento'],
    sensitiveActionsRequireHumanApproval: true
  }
] as const;

export function getPanelDefinition(id: PanelId): PanelDefinition | undefined {
  return UNO_PANELS.find((panel) => panel.id === id);
}
