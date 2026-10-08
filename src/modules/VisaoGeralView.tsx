import React from 'react';
import { Cpu, ShieldCheck, Database, Zap, Activity, Boxes, Bot, Terminal } from 'lucide-react';
import { kernel } from '@core/kernel';

export const VisaoGeralView: React.FC = () => {
  const telemetry = kernel.getTelemetry();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          VISÃO GERAL — CENTRO DE OPERAÇÕES UNO CORE
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Telemetria e status operacional dos 9 subsistemas conceituais do Universo Novo Operacional.
        </p>
      </div>

      {/* Cards de Métricas Principais */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status do Kernel</span>
            <Cpu size={20} color="var(--accent-cyan)" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
            ONLINE
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Uptime: {telemetry.uptimeSeconds}s
          </span>
        </div>

        <div className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Agentes Ativos</span>
            <Bot size={20} color="var(--accent-cyan)" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
            {telemetry.activeAgentsCount} Agentes
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            UNO Arquiteto-Chefe ON
          </span>
        </div>

        <div className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Capacidades</span>
            <Boxes size={20} color="var(--accent-cyan)" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
            {telemetry.capabilitiesCount} Registradas
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            100% Auditadas
          </span>
        </div>

        <div className="glass-panel glass-panel-interactive" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Persistência Supabase</span>
            <Database size={20} color="var(--accent-cyan)" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: telemetry.supabaseConnected ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>
            {telemetry.supabaseConnected ? 'CONECTADO' : 'PRONTO'}
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {telemetry.supabaseConnected ? 'RLS Homologado' : 'Aguardando .env.local'}
          </span>
        </div>
      </div>

      {/* Grade com os 9 Subsistemas */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={18} color="var(--accent-cyan)" />
          <span>Matriz de Subsistemas do UNO CORE (NOS S.A.)</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {[
            { name: 'UNO Kernel', desc: 'Ciclo de vida, bootstrap e registro de módulos.', status: 'Ativo' },
            { name: 'UNO Brain', desc: 'Conhecimento oficial, regras e regras cognitivas.', status: 'Ativo' },
            { name: 'UNO Engine', desc: 'Orquestração de comandos, fluxos e execuções.', status: 'Ativo' },
            { name: 'UNO Memory', desc: 'Persistência segura via Supabase.', status: 'Pronto' },
            { name: 'UNO Interface', desc: 'Painéis web/mobile responsivos (Google Stitch).', status: 'Ativo' },
            { name: 'UNO Agents', desc: 'Registro e monitoramento dos agentes de IA.', status: 'Ativo' },
            { name: 'UNO Capabilities', desc: 'Catálogo universal de capacidades da plataforma.', status: 'Ativo' },
            { name: 'UNO Governance', desc: 'Propostas, votações, ADRs e histórico de decisões.', status: 'Ativo' },
            { name: 'UNO Documentation', desc: 'Especificações técnicas `/spec` e versionamento.', status: 'Ativo' }
          ].map((sys) => (
            <div key={sys.name} className="glass-panel" style={{ padding: '16px', background: 'rgba(7, 9, 14, 0.6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--accent-cyan)' }}>{sys.name}</span>
                <span className="badge badge-emerald">{sys.status}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{sys.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
