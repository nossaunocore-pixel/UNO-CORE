/**
 * UNO Agents — Cadastro, Execução, Monitoramento e Especializações
 * NOS S.A.
 */

export interface AgentSpec {
  id: string;
  name: string;
  specialization: string;
  status: 'active' | 'idle' | 'busy' | 'offline';
  model: string;
  capabilitiesCount: number;
}

export class UnoAgents {
  private registry: AgentSpec[] = [
    {
      id: 'AGENT-01',
      name: 'UNO Arquiteto-Chefe',
      specialization: 'Governança & Arquitetura Cognitiva',
      status: 'active',
      model: 'Google AI Studio (Gemini Pro/Flash)',
      capabilitiesCount: 12
    },
    {
      id: 'AGENT-02',
      name: 'UNO Memory Guard',
      specialization: 'Persistência Supabase & Segurança RLS',
      status: 'active',
      model: 'Custom Kernel Rules Engine',
      capabilitiesCount: 6
    },
    {
      id: 'AGENT-03',
      name: 'UNO Interface Builder',
      specialization: 'Layouts Futuristas & Componentização React',
      status: 'idle',
      model: 'Google Stitch Spec Synthesizer',
      capabilitiesCount: 8
    }
  ];

  public listAgents(): AgentSpec[] {
    return this.registry;
  }
}

export const agents = new UnoAgents();
