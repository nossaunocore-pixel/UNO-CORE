import React from 'react';
import { Users, Shield } from 'lucide-react';

export const UsuariosView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gradient-cyan">
          GOVERNANÇA DE USUÁRIOS
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Gestão de papéis, permissões RLS e acessos da equipe de engenharia NOS S.A.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-cyan)', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              <th style={{ padding: '12px' }}>Usuário / Operador</th>
              <th style={{ padding: '12px' }}>Função</th>
              <th style={{ padding: '12px' }}>Nível de Acesso</th>
              <th style={{ padding: '12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(0, 229, 255, 0.08)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Equipe de Engenharia NOS S.A.</td>
              <td style={{ padding: '12px' }}>Administrador Geral</td>
              <td style={{ padding: '12px', fontFamily: 'var(--font-mono)' }}>ROLE_SUPER_ADMIN</td>
              <td style={{ padding: '12px' }}><span className="badge badge-emerald">ATIVO</span></td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontWeight: 600 }}>UNO Arquiteto-Chefe</td>
              <td style={{ padding: '12px' }}>Agente Cognitivo Central</td>
              <td style={{ padding: '12px', fontFamily: 'var(--font-mono)' }}>ROLE_CORE_BRAIN</td>
              <td style={{ padding: '12px' }}><span className="badge badge-emerald">ATIVO</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
