export type ViewScreen = 'landing' | 'conversa' | 'casa' | 'mestre';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'uno';
  text: string;
  timestamp: string;
  category?: 'general' | 'idea' | 'complaint' | 'system';
}

export interface ComplaintItem {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'Em análise' | 'Em andamento' | 'Resolvido';
  date: string;
}

export interface IdeaProposal {
  id: string;
  title: string;
  author: string;
  description: string;
  votes: number;
  userVoted: boolean;
  status: 'Pendente' | 'Aprovada' | 'Rejeitada' | 'Em desenvolvimento';
  date: string;
}

export interface SystemCommandLog {
  id: string;
  command: string;
  impactScore: number; // 0 - 100
  riskLevel: 'Baixo' | 'Médio' | 'Crítico';
  recommendation: 'Aprovar' | 'Ajustar' | 'Rejeitar';
  specPreview?: string;
  timestamp: string;
  status: 'Pendente' | 'Aprovado' | 'Rejeitado';
}
