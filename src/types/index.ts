export type ModuleId =
  | 'centro'
  | 'habitacional'
  | 'producao'
  | 'recursos'
  | 'saude'
  | 'marketplace'
  | 'servicos';

// O painel de controle ampliado possui uma navegação própria. Mantê-la
// separada dos módulos territoriais evita que alterações no PCA quebrem
// componentes da Cidade UNO.
export type PcaModuleId =
  | 'dashboard'
  | 'conversa'
  | 'agentes'
  | 'capacidades'
  | 'execucoes'
  | 'bibliotecas'
  | 'ferramentas'
  | 'integracoes'
  | 'usuarios'
  | 'entidades'
  | 'projetos'
  | 'propostas'
  | 'governanca'
  | 'historico'
  | 'engenharia'
  | 'configuracoes';

export type AlertSeverity = 'general' | 'important' | 'warning' | 'urgent';
export type AlertScope = 'central' | 'personal';

export interface AlertItem {
  id: string;
  title: string;
  message: string;
  severity: AlertSeverity;
  scope: AlertScope;
  targetModule?: ModuleId;
  timestamp: string;
  requiresConfirmation: boolean;
  confirmed?: boolean;
  confirmedAt?: string;
  confirmedBy?: string[];
  createdBy?: string;
}

export interface ModuleConfig {
  id: ModuleId;
  title: string;
  subtitle: string;
  iconName: string;
  position: { x: number; y: number }; // Percentage (0-100) on map canvas
  description: string;
  visualStyle: {
    accentColor: string;
    borderGlow: string;
    bgGradient: string;
    badgeColor: string;
  };
}

export interface UserProfile {
  uid: string;
  name: string;
  role: 'admin' | 'resident' | 'operator';
  residenceId?: string;
  activeHologramId?: string;
}

export interface ServiceCostItem {
  name: string;
  tier: string;
  usageQuota: string;
  estimatedCost: string;
  status: 'active' | 'optimal' | 'warning';
}
