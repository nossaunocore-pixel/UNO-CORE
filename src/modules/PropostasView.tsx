import React from 'react';
import { FileCheck2 } from 'lucide-react';

export const PropostasView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          PROPOSTAS DE ALTERAÇÃO E CAPACIDADES
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Submissão e revisão de propostas antes de entrar para o pipeline oficial da NOS S.A.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Todas as propostas ativas encontram-se homologadas no painel de <strong style={{ color: 'var(--accent-cyan)' }}>Governança</strong>.
        </p>
      </div>
    </div>
  );
};
