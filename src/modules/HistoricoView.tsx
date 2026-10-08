import React from 'react';
import { History, ShieldCheck } from 'lucide-react';

export const HistoricoView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          HISTÓRICO & AUDITORIA UNIFICADA
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Trilha de auditoria imutável dos eventos de sistema, acessos e alterações de estado.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
          {[
            { id: 'LOG-109', time: '13:50:12', event: 'BOOT_SYSTEM_KERNEL', user: 'SYSTEM', status: 'SUCCESS' },
            { id: 'LOG-108', time: '13:48:45', event: 'LOAD_SPECS_SPEC_DIRECTORY', user: 'ENG_NOS', status: 'SUCCESS' },
            { id: 'LOG-107', time: '13:45:00', event: 'VERIFY_SUPABASE_CONFIG', user: 'MEMORY_GUARD', status: 'SUCCESS' }
          ].map((log) => (
            <div key={log.id} style={{ padding: '10px 14px', background: 'rgba(7, 9, 14, 0.6)', borderRadius: '6px', borderLeft: '3px solid var(--accent-cyan)', display: 'flex', justifyContent: 'space-between' }}>
              <span>[{log.time}] {log.id} — {log.event} ({log.user})</span>
              <span style={{ color: 'var(--accent-emerald)' }}>{log.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
