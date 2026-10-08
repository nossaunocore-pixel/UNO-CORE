import React from 'react';
import { Bot, Cpu, Zap, Activity } from 'lucide-react';
import { agents } from '@core/agents';

export const AgentesView: React.FC = () => {
  const agentList = agents.listAgents();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          AGENTES DE IA — UNO AGENTS
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Registro, configuração, execução e monitoramento dos agentes inteligentes da plataforma.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {agentList.map((agent) => (
          <div key={agent.id} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'rgba(0, 229, 255, 0.1)', border: '1px solid var(--border-cyan)' }}>
                  <Bot size={22} color="var(--accent-cyan)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{agent.name}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{agent.id}</span>
                </div>
              </div>
              <span className="badge badge-emerald">{agent.status.toUpperCase()}</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#e0e6ed', marginBottom: '14px' }}>
              {agent.specialization}
            </p>

            <div style={{ borderTop: '1px solid var(--border-cyan)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              <span>Modelo: {agent.model}</span>
              <span>{agent.capabilitiesCount} Capacidades</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
