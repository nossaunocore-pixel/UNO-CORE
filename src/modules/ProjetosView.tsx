import React from 'react';
import { FolderGit2 } from 'lucide-react';

export const ProjetosView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          PROJETOS & PIPELINES
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Projetos cadastrados e em execução na plataforma UNO.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {[
          { title: 'UNO CORE — Universo Novo Operacional', status: 'Em Construção (Fase 1)', progress: '100%' },
          { title: 'UNO Mobile App (FlutterFlow)', status: 'Planejamento', progress: '15%' }
        ].map((proj) => (
          <div key={proj.title} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <FolderGit2 size={22} color="var(--accent-cyan)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>{proj.title}</h3>
            <span className="badge badge-emerald">{proj.status}</span>
            <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Progresso: {proj.progress}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
