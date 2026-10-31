export type V6View =
  | 'praca'
  | 'edificio'
  | 'biblioteca'
  | 'conteudos'
  | 'acervo'
  | 'integracoes'
  | 'agentes'
  | 'auditoria'
  | 'conversa'
  | 'usuario'
  | 'perfil'
  | 'participacao'
  | 'comunidade'
  | 'nos'
  | 'mestre'
  | 'oficina'
  | 'instituicoes'
  | 'lazer'
  | 'servicos'
  | 'servicos_ativos'
  | 'casa'
  | 'emprego_renda';

export type NavigateV6 = (view: V6View) => void;

export interface UnoMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export type AvailabilityStatus =
  | 'publico'
  | 'em-construcao'
  | 'em-discussao'
  | 'aguardando-assembleia'
  | 'em-simulacao'
  | 'futuro';

export interface UnoModuleDefinition {
  id: string;
  title: string;
  summary: string;
  status: AvailabilityStatus;
  whyUnavailable?: string;
  alreadyPrepared?: string[];
  nextMilestone?: string;
}

export interface NosDepartmentDefinition extends UnoModuleDefinition {
  area: string;
  responsibilities: string[];
}

export type ContentKind = 'apresentacao' | 'explicacao' | 'documento' | 'midia';
export type ContentApproval = 'aprovado' | 'revisao-humana' | 'rascunho';

export interface UnoContentDefinition {
  id: string;
  title: string;
  summary: string;
  kind: ContentKind;
  approval: ContentApproval;
  version: string;
  source: string;
  audience: 'publico' | 'usuario' | 'interno';
  tags: string[];
  body: string;
  mediaUrl?: string;
  mediaAlt?: string;
}

export type MediaKind = 'imagem' | 'audio' | 'video' | 'roteiro';
export type MediaRights = 'autorizado' | 'revisar' | 'interno';

export interface UnoMediaAsset {
  id: string;
  title: string;
  kind: MediaKind;
  module: string;
  rights: MediaRights;
  version: string;
  source: string;
  description: string;
  fileUrl?: string;
  fileAlt?: string;
  usage: string[];
}

export type IntegrationStatus = 'declarada' | 'verificacao-pendente' | 'planejada';
export interface UnoIntegrationDefinition {
  id: string; name: string; provider: string; category: string; purpose: string;
  environment: string; status: IntegrationStatus; credential: string;
  cost: string; limit: string; lastCheck: string; checks: string[];
}

export type AgentStatus = 'especificado' | 'interface-pronta' | 'integracao-pendente';
export interface UnoAgentDefinition {
  id: string; name: string; fullName: string; role: string; layer: string;
  status: AgentStatus; mission: string; receives: string[]; delivers: string[];
  permissions: string[]; restrictions: string[]; reportsTo: string;
}

export type AuditStage = 'recebido' | 'analisado' | 'simulado' | 'autorizacao-pendente' | 'autorizado' | 'executado' | 'auditado';
export interface UnoAuditRecord {
  id: string; title: string; category: string; stage: AuditStage; actor: string;
  createdAt: string; version: string; environment: 'demonstracao' | 'teste' | 'real';
  summary: string; authorization: string; evidence: string[]; timeline: Array<{stage: AuditStage; label: string; time: string; note: string}>;
}

