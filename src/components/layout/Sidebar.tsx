import React from 'react';
import { 
  LayoutDashboard, MessageSquareCode, Library, Bot, Boxes, Wrench, 
  Network, Users, Layers, FolderGit2, FileCheck2, Shield, 
  PlayCircle, History, FileCode2, Settings, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { PcaModuleId } from '../../types';

interface SidebarProps {
  activeModule: PcaModuleId;
  setActiveModule: (id: PcaModuleId) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

interface MenuItem {
  id: PcaModuleId;
  label: string;
  icon: React.ElementType;
  category: 'core' | 'management' | 'system';
}

const menuItems: MenuItem[] = [
  // CORE OPERACIONAL
  { id: 'dashboard', label: 'Visão Geral', icon: LayoutDashboard, category: 'core' },
  { id: 'conversa', label: 'Conversa com UNO CORE', icon: MessageSquareCode, category: 'core' },
  { id: 'agentes', label: 'Agentes de IA', icon: Bot, category: 'core' },
  { id: 'capacidades', label: 'Capacidades', icon: Boxes, category: 'core' },
  { id: 'execucoes', label: 'Execuções', icon: PlayCircle, category: 'core' },

  // GESTÃO & GOVERNANÇA
  { id: 'bibliotecas', label: 'Bibliotecas', icon: Library, category: 'management' },
  { id: 'ferramentas', label: 'Ferramentas Digitais', icon: Wrench, category: 'management' },
  { id: 'integracoes', label: 'Integrações', icon: Network, category: 'management' },
  { id: 'usuarios', label: 'Usuários', icon: Users, category: 'management' },
  { id: 'entidades', label: 'Entidades', icon: Layers, category: 'management' },
  { id: 'projetos', label: 'Projetos', icon: FolderGit2, category: 'management' },
  { id: 'propostas', label: 'Propostas', icon: FileCheck2, category: 'management' },
  { id: 'governanca', label: 'Governança', icon: Shield, category: 'management' },

  // SISTEMA & ENGENHARIA
  { id: 'historico', label: 'Histórico', icon: History, category: 'system' },
  { id: 'engenharia', label: 'Engenharia Oficial', icon: FileCode2, category: 'system' },
  { id: 'configuracoes', label: 'Configurações', icon: Settings, category: 'system' }
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  setActiveModule,
  isCollapsed,
  setIsCollapsed
}) => {
  return (
    <aside 
      className="glass-panel"
      style={{
        width: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
        transition: 'width 0.25s ease',
        borderRadius: 0,
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        zIndex: 15,
        overflow: 'hidden'
      }}
    >
      {/* Botão de Toggle */}
      <div style={{ padding: '12px 16px', display: 'flex', justifyContent: isCollapsed ? 'center' : 'flex-end', borderBottom: '1px solid var(--border-cyan)' }}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-cyan)',
            color: 'var(--accent-cyan)',
            borderRadius: '6px',
            padding: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={isCollapsed ? "Expandir Menu" : "Recolher Menu"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Lista de Módulos */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 8px' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: isCollapsed ? '10px 0' : '10px 12px',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                borderRadius: '8px',
                border: isActive ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                background: isActive ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                marginBottom: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left'
              }}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
              {!isCollapsed && (
                <span style={{ fontSize: '0.85rem', fontWeight: isActive ? 600 : 400, whiteSpace: 'nowrap' }}>
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Rodapé da Sidebar */}
      {!isCollapsed && (
        <div style={{ padding: '12px', borderTop: '1px solid var(--border-cyan)', fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          NOS S.A. © 2026<br/>
          UNO CORE System
        </div>
      )}
    </aside>
  );
};
