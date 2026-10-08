import React from 'react';
import { Library, BookOpen } from 'lucide-react';

export const BibliotecasView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          BIBLIOTECAS & REPOSITÓRIOS — UNO CORE
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Repositório unificado de componentes, utilitários, schemas e módulos reutilizáveis.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {[
          { name: 'Core Engine SDK', type: 'TypeScript Package', version: '1.0.0' },
          { name: 'Supabase Memory Adapter', type: 'Database Connector', version: '1.0.0' },
          { name: 'Glassmorphism UI Kit', type: 'React Components', version: '1.0.0' }
        ].map((lib) => (
          <div key={lib.name} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <Library size={22} color="var(--accent-cyan)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{lib.name}</h3>
            <span className="badge badge-cyan">{lib.type}</span>
            <div style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Versão: v{lib.version}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
