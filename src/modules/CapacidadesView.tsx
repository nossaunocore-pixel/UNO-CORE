import React from 'react';
import { Boxes, ShieldCheck, Cpu } from 'lucide-react';
import { capabilities } from '@core/capabilities';

export const CapacidadesView: React.FC = () => {
  const capList = capabilities.getCapabilities();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          CATÁLOGO DE CAPACIDADES — UNO CAPABILITIES
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          A UNO é construída por capacidades declarativas, auditáveis e reutilizáveis.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-cyan)', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              <th style={{ padding: '12px' }}>ID</th>
              <th style={{ padding: '12px' }}>Capacidade</th>
              <th style={{ padding: '12px' }}>Categoria</th>
              <th style={{ padding: '12px' }}>Provedor</th>
              <th style={{ padding: '12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {capList.map((cap) => (
              <tr key={cap.id} style={{ borderBottom: '1px solid rgba(0, 229, 255, 0.08)' }}>
                <td style={{ padding: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{cap.id}</td>
                <td style={{ padding: '12px', fontWeight: 600 }}>
                  <div>{cap.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}>{cap.description}</div>
                </td>
                <td style={{ padding: '12px' }}>
                  <span className="badge badge-cyan">{cap.category.toUpperCase()}</span>
                </td>
                <td style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{cap.provider}</td>
                <td style={{ padding: '12px' }}>
                  <span className="badge badge-emerald">ATIVO</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
