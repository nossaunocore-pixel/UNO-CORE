import React from 'react';
import { Shield, FileCheck2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { governance } from '@core/governance';

export const GovernancaView: React.FC = () => {
  const proposals = governance.getProposals();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          PAINEL DE GOVERNANÇA — UNO GOVERNANCE
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Propostas, deliberações, votações e histórico auditável de decisões (ADRs) da NOS S.A.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileCheck2 size={18} color="var(--accent-cyan)" /> Propostas e Deliberações Recentes
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {proposals.map((prop) => (
            <div key={prop.id} className="glass-panel" style={{ padding: '16px', background: 'rgba(7, 9, 14, 0.7)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  {prop.id}: {prop.title}
                </span>
                <span className="badge badge-emerald">{prop.status.toUpperCase()}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <span>Autor: {prop.author} • {prop.dateCreated}</span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ThumbsUp size={12} /> {prop.votesFor}
                  </span>
                  <span style={{ color: 'var(--accent-rose)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ThumbsDown size={12} /> {prop.votesAgainst}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
