import React from 'react';
import { Layers } from 'lucide-react';

export const EntidadesView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          ENTIDADES DO ECOSSISTEMA
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Modelagem conceitual e tabelas registradas no Supabase.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {[
          { name: 'Core_Subsystems', fields: 'id, name, status, telemetry' },
          { name: 'Capabilities_Catalog', fields: 'id, name, category, status' },
          { name: 'Governance_Audit_Logs', fields: 'id, event, user, timestamp' }
        ].map((ent) => (
          <div key={ent.name} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <Layers size={22} color="var(--accent-cyan)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{ent.name}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>Campos: {ent.fields}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
