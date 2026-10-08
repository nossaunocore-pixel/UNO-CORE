/**
 * UNO Governance — Propostas, Votações, Histórico, Auditoria e Aprovações
 * NOS S.A.
 */

export interface GovernanceProposal {
  id: string;
  title: string;
  author: string;
  status: 'approved' | 'under_review' | 'rejected';
  votesFor: number;
  votesAgainst: number;
  dateCreated: string;
}

export class UnoGovernance {
  private proposals: GovernanceProposal[] = [
    {
      id: 'PROP-001',
      title: 'Aprovação da Estrutura-Base do UNO CORE v1.0.0',
      author: 'Equipe de Engenharia NOS S.A.',
      status: 'approved',
      votesFor: 12,
      votesAgainst: 0,
      dateCreated: '2026-07-27'
    },
    {
      id: 'PROP-002',
      title: 'Conexão Supabase via Variáveis de Ambiente sem Hardcode',
      author: 'UNO Arquiteto-Chefe',
      status: 'approved',
      votesFor: 12,
      votesAgainst: 0,
      dateCreated: '2026-07-27'
    }
  ];

  public getProposals(): GovernanceProposal[] {
    return this.proposals;
  }
}

export const governance = new UnoGovernance();
