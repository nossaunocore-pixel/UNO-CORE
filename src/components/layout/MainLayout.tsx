import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { PcaModuleId } from '../../types';

interface MainLayoutProps {
  children: (activeModule: PcaModuleId, setActiveModule: (id: PcaModuleId) => void) => React.ReactNode;
}

const moduleLabels: Record<PcaModuleId, string> = {
  dashboard: 'Visão Geral',
  conversa: 'Conversa com UNO CORE',
  bibliotecas: 'Bibliotecas',
  agentes: 'Agentes de IA',
  capacidades: 'Capacidades',
  ferramentas: 'Ferramentas Digitais',
  integracoes: 'Integrações',
  usuarios: 'Usuários',
  entidades: 'Entidades',
  projetos: 'Projetos',
  propostas: 'Propostas',
  governanca: 'Governança',
  execucoes: 'Execuções',
  historico: 'Histórico',
  engenharia: 'Engenharia Oficial',
  configuracoes: 'Configurações'
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [activeModule, setActiveModule] = useState<PcaModuleId>('conversa');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Header com Telemetria */}
      <Header activeModuleName={moduleLabels[activeModule]} />

      {/* Área de Conteúdo Principal com Sidebar */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar 
          activeModule={activeModule} 
          setActiveModule={setActiveModule}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <main style={{ flex: 1, height: '100%', overflowY: 'auto', padding: '24px', background: 'radial-gradient(ellipse at top, rgba(0, 229, 255, 0.02) 0%, transparent 70%)' }}>
          {children(activeModule, setActiveModule)}
        </main>
      </div>
    </div>
  );
};
