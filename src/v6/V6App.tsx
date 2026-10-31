import React, { useEffect, useState } from 'react';
import { getIdTokenResult, onIdTokenChanged } from 'firebase/auth';
import { Home, MessageCircle, Network, UserRound, Store, Landmark, Shield, Wrench, Building2, CalendarDays, Briefcase, ClipboardCheck } from 'lucide-react';
import { CommunityV6 } from './pages/CommunityV6';
import { ConversationV6 } from './pages/ConversationV6';
import { MasterPanelGateV7 } from './components/MasterPanelGateV7';
import { PageAccessGateV7 } from './components/PageAccessGateV7';
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
import { InstitutionsV7 } from './pages/InstitutionsV7';
import { LeisureV7 } from './pages/LeisureV7';
import { ServicesV7 } from './pages/ServicesV7';
import { ActiveServicesV7 } from './pages/ActiveServicesV7';
import { HouseV7 } from './pages/HouseV7';
import { EmploymentIncomeV7 } from './pages/EmploymentIncomeV7';
import { WalletV7 } from './pages/WalletV7';
import { AuthControlV7 } from './components/AuthControlV7';
import { auth } from '../services/firebase';
import type { V6View } from './types';
import './v6.css';

const navigation: Array<{ id: V6View; label: string; icon: React.ElementType }> = [
  { id: 'praca', label: 'Praça UNO', icon: Home },
  { id: 'edificio', label: 'UNO Institucional', icon: Landmark },
  { id: 'instituicoes', label: 'Instituições', icon: Building2 },
  { id: 'nos', label: 'Vitrine', icon: Store },
  { id: 'lazer', label: 'Lazer', icon: CalendarDays },
  { id: 'servicos', label: 'Serviços', icon: Briefcase },
  { id: 'conversa', label: 'Conversa', icon: MessageCircle },
  { id: 'usuario', label: 'Meu Ambiente', icon: UserRound },
  { id: 'casa', label: 'Casa', icon: Home },
  { id: 'emprego_renda', label: 'Emprego e Renda', icon: Briefcase },
  { id: 'servicos_ativos', label: 'Serviços Ativos', icon: ClipboardCheck },
  { id: 'comunidade', label: 'Comunidade', icon: Network },
  { id: 'mestre', label: 'Painel Mestre', icon: Shield },
  { id: 'oficina', label: 'Oficina', icon: Wrench }
];

const mobileNavigation: V6View[] = ['praca', 'conversa', 'usuario', 'comunidade'];

export default function V6App() {
  const [view, setView] = useState<V6View>('praca');
  const [masterAccess, setMasterAccess] = useState(false);

  useEffect(() => {
    if (!auth) return;
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        setMasterAccess(false);
        return;
      }
      try {
        const token = await getIdTokenResult(user);
        setMasterAccess(token.claims.unoFounder === true || token.claims.unoMaster === true);
      } catch {
        setMasterAccess(false);
      }
    });
  }, []);

  const visibleNavigation = navigation.filter(({ id }) =>
    masterAccess || (id !== 'mestre' && id !== 'oficina')
  );

  return (
    <div className={`v6-app ${view === 'praca' ? 'v6-app--immersive' : ''}`}>
      <header className="v6-topbar">
        <button className="v6-brand" onClick={() => setView('praca')} aria-label="Ir para a Praça UNO">
          <span className="v6-brand-mark">UNO</span>
          <span><strong>União Nacional Organizada</strong><small>Tecnologia a serviço da vida real</small></span>
        </button>
        <nav className="v6-nav" aria-label="Navegação principal">
          {visibleNavigation.map(({ id, label, icon: Icon }) => (
            <button key={id} className={view === id ? 'active' : ''} onClick={() => setView(id)} aria-current={view === id ? 'page' : undefined}>
              <Icon size={18} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <AuthControlV7 />
        <span className="v6-stage">V7 · base funcional em preparação</span>
      </header>

      <main className="v6-main">
        <PageAccessGateV7 view={view}>
          {view === 'praca' && <PublicSquareV6 onNavigate={setView} />}
          {view === 'edificio' && <UnoBuildingV63 onNavigate={setView} />}
          {view === 'instituicoes' && <InstitutionsV7 />}
          {view === 'lazer' && <LeisureV7 />}
          {view === 'servicos' && <ServicesV7 />}
          {view === 'servicos_ativos' && <ActiveServicesV7 />}
          {view === 'casa' && <HouseV7 />}
          {view === 'emprego_renda' && <EmploymentIncomeV7 />}
          {view === 'carteira' && <WalletV7 />}
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
          {view === 'mestre' && <MasterPanelGateV7 onNavigate={setView} />}
          {view === 'oficina' && <WorkshopV6 onNavigate={setView} />}
        </PageAccessGateV7>
      </main>

      <footer className="v6-mobile-nav" aria-label="Navegação móvel">
        {mobileNavigation.map((id) => {
          const item = navigation.find(entry => entry.id === id)!;
          const Icon = item.icon;
          return <button key={id} className={view === id ? 'active' : ''} onClick={() => setView(id)} aria-current={view === id ? 'page' : undefined}>
            <Icon size={20} /><span>{item.label}</span>
          </button>;
        })}
      </footer>
    </div>
  );
}
