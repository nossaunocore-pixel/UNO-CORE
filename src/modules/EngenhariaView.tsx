import React from 'react';
import { FileCode2, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';
import { documentation } from '@core/documentation';

export const EngenhariaView: React.FC = () => {
  const docs = documentation.getDocs();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          ENGENHARIA OFICIAL & SPECS — NOS S.A.
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Repositório formal de especificações técnicas, ADRs, ROADMAP e guia do Arquiteto-Chefe.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {docs.map((doc) => (
          <div key={doc.path} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileCode2 size={20} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{doc.title}</h3>
              </div>
              <span className="badge badge-cyan">{doc.category.toUpperCase()}</span>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
              Caminho: {doc.path}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', borderTop: '1px solid var(--border-cyan)', paddingTop: '10px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Atualizado: {doc.lastUpdated}</span>
              <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle size={12} /> Homologado
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
