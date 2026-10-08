import React from 'react';
import { Settings, Database, Cpu, Lock, ShieldCheck, Zap } from 'lucide-react';
import { memory } from '@core/memory';

export const ConfiguracoesView: React.FC = () => {
  const memStatus = memory.getStatus();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          CONFIGURAÇÕES GLOBAIS — UNO CORE
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Diagnóstico do Kernel, variáveis de ambiente e parâmetros do Gateway Seguro Server-Side.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Database size={18} color="var(--accent-cyan)" /> Configuração do Supabase (Uno - Universo Novo Operacional)
        </h3>

        <div style={{ display: 'grid', gap: '12px', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
          <div style={{ padding: '12px', background: 'rgba(7, 9, 14, 0.7)', borderRadius: '8px', border: '1px solid var(--border-cyan)' }}>
            <span style={{ color: 'var(--text-muted)' }}>URL do Projeto (Pública):</span>
            <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '4px' }}>
              {memStatus.url}
            </div>
          </div>

          <div style={{ padding: '12px', background: 'rgba(7, 9, 14, 0.7)', borderRadius: '8px', border: '1px solid var(--border-cyan)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Chave Pública do Frontend (VITE_SUPABASE_PUBLISHABLE_KEY):</span>
            <div style={{ color: memStatus.hasPublicKey ? 'var(--accent-emerald)' : 'var(--accent-amber)', fontWeight: 600, marginTop: '4px' }}>
              Tipo Detectado: {memStatus.keyType} — {memStatus.mode}
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={18} color="var(--accent-cyan)" /> Arquitetura do Gateway de IA (uno-ai-gateway)
        </h3>

        <div style={{ display: 'grid', gap: '12px', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
          <div style={{ padding: '12px', background: 'rgba(7, 9, 14, 0.7)', borderRadius: '8px', border: '1px solid var(--border-cyan)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Modo de Conexão com Gemini API:</span>
            <div style={{ color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '4px' }}>
              Supabase Edge Function: <code>uno-ai-gateway</code>
            </div>
          </div>

          <div style={{ padding: '12px', background: 'rgba(7, 9, 14, 0.7)', borderRadius: '8px', border: '1px solid var(--border-cyan)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Armazenamento do Segredo GEMINI_API_KEY:</span>
            <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '4px' }}>
              Server-Side Secret (Supabase Vault / Environment) — Jamais exposto no navegador.
            </div>
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, background: 'rgba(0, 229, 255, 0.05)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid var(--accent-cyan)' }}>
          🔒 <strong>Diretriz de Segurança NOS S.A.:</strong> O frontend utiliza exclusivamente <code>VITE_SUPABASE_PUBLISHABLE_KEY</code> (ou temporariamente <code>VITE_SUPABASE_ANON_KEY</code>). Nenhuma chave <code>service_role</code> nem <code>VITE_GEMINI_API_KEY</code> é aceita ou executada no cliente.
        </div>
      </div>
    </div>
  );
};
