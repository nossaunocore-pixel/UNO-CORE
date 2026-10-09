import React, { useState } from 'react';
import { Home, MessageCircle, Shield, UserRound } from 'lucide-react';
import { ConversationV6 } from './pages/ConversationV6';
import { MasterPanelV6 } from './pages/MasterPanelV6';
import { PublicSquareV6 } from './pages/PublicSquareV6';
import { UserSquareV6 } from './pages/UserSquareV6';
import type { V6View } from './types';
import './v6.css';

const navigation: Array<{ id: V6View; label: string; icon: React.ElementType }> = [
  { id: 'praca', label: 'Praça UNO', icon: Home },
  { id: 'conversa', label: 'Conversar', icon: MessageCircle },
  { id: 'usuario', label: 'Meu espaço', icon: UserRound },
  { id: 'mestre', label: 'Painel Mestre', icon: Shield }
];

export default function V6App() {
  const [view, setView] = useState<V6View>('praca');

  return (
    <div className="v6-app">
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
        {view === 'conversa' && <ConversationV6 onNavigate={setView} />}
        {view === 'usuario' && <UserSquareV6 onNavigate={setView} />}
        {view === 'mestre' && <MasterPanelV6 onNavigate={setView} />}
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

