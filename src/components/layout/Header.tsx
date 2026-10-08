import React from 'react';
import { Cpu, ShieldCheck, Database, Zap, Terminal } from 'lucide-react';
import { kernel } from '@core/kernel';
import { memory } from '@core/memory';

interface HeaderProps {
  activeModuleName: string;
}

export const Header: React.FC<HeaderProps> = ({ activeModuleName }) => {
  const telemetry = kernel.getTelemetry();
  const memStatus = memory.getStatus();

  return (
    <header className="glass-panel" style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 20 }}>
      {/* Esquerda: Identidade & Módulo Ativo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="pulse-cyan" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #00e5ff 0%, #2979ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={18} color="#07090e" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '1px' }} className="text-gradient-cyan">
              UNO CORE
            </h1>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              NOS S.A. — PCA v1.0
            </span>
          </div>
        </div>

        <div style={{ height: '24px', width: '1px', background: 'var(--border-cyan)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Módulo:</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
            {activeModuleName}
          </span>
        </div>
      </div>

      {/* Direita: Telemetria dos Subsistemas */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
        {/* Status do Kernel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="badge badge-emerald">
          <Terminal size={12} />
          <span>KERNEL: ONLINE</span>
        </div>

        {/* Status do Supabase */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className={memStatus.hasPublicKey ? "badge badge-emerald" : "badge badge-cyan"}>
          <Database size={12} />
          <span>SUPABASE: {memStatus.hasPublicKey ? 'CONECTADO' : 'READY (.env)'}</span>
        </div>

        {/* Status do AI Gateway */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="badge badge-cyan" title="Comunicação de IA intermediada pela Supabase Edge Function 'uno-ai-gateway'">
          <Zap size={12} />
          <span>AI GATEWAY: SECURE EDGE</span>
        </div>

        {/* Governança */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)' }}>
          <ShieldCheck size={14} />
          <span>GOVERNANÇA: ATIVA</span>
        </div>
      </div>
    </header>
  );
};
