import React from 'react';
import { PlayCircle, Terminal, CheckCircle2 } from 'lucide-react';
import { engine } from '@core/engine';

export const ExecucoesView: React.FC = () => {
  const executions = engine.getExecutions();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          EXECUÇÕES & FILA DE TAREFAS — UNO ENGINE
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Monitoramento em tempo real das tarefas e orquestrações disparadas pela Engine.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {executions.map((task) => (
            <div key={task.id} className="glass-panel" style={{ padding: '16px', background: 'rgba(7, 9, 14, 0.7)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  {task.id} • {task.command}
                </span>
                <span className="badge badge-emerald">{task.status.toUpperCase()}</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                {task.resultSummary}
              </p>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Módulo: {task.module} • Hora: {task.timestamp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
