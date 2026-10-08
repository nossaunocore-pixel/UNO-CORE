import React from 'react';
import { Network, Database, Zap, Github, Layers, Code } from 'lucide-react';
import { integrations } from '@core/integrations';

export const IntegracoesView: React.FC = () => {
  const list = integrations.getIntegrations();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          HUB DE INTEGRAÇÕES — UNO INTEGRATIONS
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Adaptadores e conectores homologados (Google AI Studio, Supabase, GitHub, Google Stitch, FlutterFlow).
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {list.map((item) => (
          <div key={item.id} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Network size={20} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{item.name}</h3>
              </div>
              <span className={item.status === 'connected' || item.status === 'configured' ? "badge badge-emerald" : "badge badge-cyan"}>
                {item.status.toUpperCase()}
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
