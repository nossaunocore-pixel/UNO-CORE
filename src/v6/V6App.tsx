import React, { useState } from 'react';
import { Home, MessageCircle, Network, Shield, UserRound, Wrench } from 'lucide-react';
import { CommunityV6 } from './pages/CommunityV6';
import { ConversationV6 } from './pages/ConversationV6';
import { MasterPanelV6 } from './pages/MasterPanelV6';
import { NosShowcaseV63 } from './pages/NosShowcaseV63';
import { ParticipationV63 } from './pages/ParticipationV63';
import { ProfileV63 } from './pages/ProfileV63';
import { PublicSquareV6 } from './pages/PublicSquareV6';
import { UserSquareV6 } from './pages/UserSquareV6';
import { UnoBuildingV63 } from './pages/UnoBuildingV63';
import { KnowledgeLibraryV63 } from './pages/KnowledgeLibraryV63';
import { ContentStudioV635 } from './pages/ContentStudioV635';
import { MediaLibraryV636 } from './pages/MediaLibraryV636';
import { IntegrationsCenterV637 } from './pages/IntegrationsCenterV637';
import { AgentsCenterV638 } from './pages/AgentsCenterV638';
import { AuditCenterV639 } from './pages/AuditCenterV639';
import { WorkshopV6 } from './pages/WorkshopV6';
import type { V6View } from './types';
import './v6.css';

const navigation: Array<{ id: V6View; label: string; icon: React.ElementType }> = [
  { id: 'praca', label: 'Praça UNO', icon: Home },
  { id: 'conversa', label: 'Conversas', icon: MessageCircle },
  { id: 'usuario', label: 'Meu Ambiente', icon: UserRound },
  { id: 'comunidade', label: 'Comunidade', icon: Network },
  { id: 'mestre', label: 'Painel Mestre', icon: Shield },
  { id: 'oficina', label: 'Oficina', icon: Wrench }
];

export default function V6App() {
  const [view, setView] = useState<V6View>('praca');

  return (
    <div className={`v6-app ${view === 'praca' ? 'v6-app--immersive' : ''}`}>
      <header className="v6-topbar">
        <button className="v6-brand" onClick={() => setView('praca')} aria-label="Ir para a Praça UNO">
          <span className="v6-brand-mark">UNO</span>
          <span><strong>União Nacional Organizada</strong><small>Tecnologia a serviço da vida real</small></span>
        </button>
        <nav className="v6-nav" aria-label="Navegação principal">
          {navigation.map(({ id, label, icon: Icon }) => (
            <button key={id} className={view === id ? 'active' : ''} onClick={() => setView(id)}>
              <Icon size={18} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <span className="v6-stage">V6 · ambiente de desenvolvimento</span>
      </header>

      <main className="v6-main">
        {view === 'praca' && <PublicSquareV6 onNavigate={setView} />}
        {view === 'edificio' && <UnoBuildingV63 onNavigate={setView} />}
        {view === 'biblioteca' && <KnowledgeLibraryV63 onNavigate={setView} />}
        {view === 'conteudos' && <ContentStudioV635 onNavigate={setView} />}
        {view === 'acervo' && <MediaLibraryV636 onNavigate={setView} />}
        {view === 'integracoes' && <IntegrationsCenterV637 onNavigate={setView} />}
        {view === 'agentes' && <AgentsCenterV638 onNavigate={setView} />}
        {view === 'auditoria' && <AuditCenterV639 onNavigate={setView} />}
        {view === 'conversa' && <ConversationV6 onNavigate={setView} />}
        {view === 'usuario' && <UserSquareV6 onNavigate={setView} />}
        {view === 'perfil' && <ProfileV63 onNavigate={setView} />}
        {view === 'participacao' && <ParticipationV63 onNavigate={setView} />}
        {view === 'comunidade' && <CommunityV6 onNavigate={setView} />}
        {view === 'nos' && <NosShowcaseV63 />}
        {view === 'mestre' && <MasterPanelV6 onNavigate={setView} />}
        {view === 'oficina' && <WorkshopV6 onNavigate={setView} />}
      </main>

      <footer className="v6-mobile-nav">
        {navigation.map(({ id, label, icon: Icon }) => (
          <button key={id} className={view === id ? 'active' : ''} onClick={() => setView(id)}>
            <Icon size={20} /><span>{label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}

