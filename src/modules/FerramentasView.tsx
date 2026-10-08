import React from 'react';
import { Wrench } from 'lucide-react';

export const FerramentasView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          FERRAMENTAS DIGITAIS
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Inventário de ferramentas digitais e utilitários da NOS S.A.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {[
          { title: 'Google AI Studio', category: 'Cognitivo', desc: 'Ambiente de desenvolvimento do UNO Arquiteto-Chefe.' },
          { title: 'Google Stitch', category: 'Design Visual', desc: 'Gerador e referência de layouts futuristas.' },
          { title: 'FlutterFlow', category: 'Expansão Mobile', desc: 'Plataforma low-code para apps nativos.' }
        ].map((item) => (
          <div key={item.title} className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
            <Wrench size={22} color="var(--accent-cyan)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h3>
            <span className="badge badge-emerald">{item.category}</span>
            <p style={{ marginTop: '10px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
