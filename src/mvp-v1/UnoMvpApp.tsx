import React, { useState } from 'react';
import { ViewScreen } from './types';
import { LandingScreen } from './pages/LandingScreen';
import { ConversationScreen } from './pages/ConversationScreen';
import { UserDashboardScreen } from './pages/UserDashboardScreen';
import { MasterPanelScreen } from './pages/MasterPanelScreen';
import { MessageSquare, Home, Shield, Sparkles, Award, Globe } from 'lucide-react';
import './styles/uno-mvp.css';

export const UnoMvpApp: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ViewScreen>('landing');
  const [isFounder, setIsFounder] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAdherePact = () => {
    setIsFounder(true);
    showNotification('Modo de demonstração: perfil fundador reconhecido localmente. Nenhuma adesão ou cobrança foi realizada.');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingScreen onNavigate={setCurrentScreen} onAdherePact={handleAdherePact} isFounder={isFounder} />;
      case 'conversa':
        return <ConversationScreen onNavigate={setCurrentScreen} onAdherePact={handleAdherePact} isFounder={isFounder} />;
      case 'casa':
        return <UserDashboardScreen onNavigate={setCurrentScreen} onAdherePact={handleAdherePact} isFounder={isFounder} />;
      case 'mestre':
        return isFounder
          ? <MasterPanelScreen onNavigate={setCurrentScreen} />
          : <UserDashboardScreen onNavigate={setCurrentScreen} onAdherePact={handleAdherePact} isFounder={isFounder} />;
      default:
        return <LandingScreen onNavigate={setCurrentScreen} onAdherePact={handleAdherePact} isFounder={isFounder} />;
    }
  };

  return (
    <div className="uno-app-container">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 100,
          background: 'rgba(245, 158, 11, 0.95)',
          color: '#020617',
          padding: '1rem 1.5rem',
          borderRadius: '0.75rem',
          fontWeight: 700,
          boxShadow: '0 10px 30px rgba(245, 158, 11, 0.5)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          {toastMessage}
        </div>
      )}

      {/* Main Navbar */}
      <header className="uno-navbar">
        <div className="uno-brand" onClick={() => setCurrentScreen('landing')}>
          <div className="uno-logo-hex">
            U
          </div>
          <div>
            <div className="uno-brand-title">UNO CORE</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.05em' }}>UNIVERSO OPERACIONAL v1.0</div>
          </div>
        </div>

        <nav className="uno-nav-links">
          <button 
            className={`uno-nav-btn ${currentScreen === 'landing' ? 'active' : ''}`} 
            onClick={() => setCurrentScreen('landing')}
          >
            <Globe size={15} /> Landing
          </button>

          <button 
            className={`uno-nav-btn ${currentScreen === 'conversa' ? 'active' : ''}`} 
            onClick={() => setCurrentScreen('conversa')}
          >
            <MessageSquare size={15} /> Conversa
          </button>

          <button 
            className={`uno-nav-btn ${currentScreen === 'casa' ? 'active' : ''}`} 
            onClick={() => setCurrentScreen('casa')}
          >
            <Home size={15} /> Casa UNO
          </button>

          {isFounder && (
            <button 
              className={`uno-nav-btn ${currentScreen === 'mestre' ? 'active-master' : ''}`} 
              onClick={() => setCurrentScreen('mestre')}
            >
              <Shield size={15} /> Painel Mestre
            </button>
          )}
        </nav>

        <div>
          {isFounder ? (
            <div className="uno-badge uno-badge-amber" onClick={() => setCurrentScreen('mestre')} style={{ cursor: 'pointer' }}>
              <Award size={14} /> Fundador · demonstração
            </div>
          ) : (
            <button className="uno-btn-amber" onClick={() => setCurrentScreen('casa')} style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem' }}>
              <Sparkles size={14} /> Conhecer minha Casa
            </button>
          )}
        </div>
      </header>

      {/* Main Content View */}
      <main className={`uno-content ${currentScreen === 'landing' ? 'uno-content--city-map' : ''}`}>
        {renderScreen()}
      </main>

      {/* Footer */}
      <footer className="uno-footer">
        UNO Universo Operacional • Inteligência Coletiva & Governança Soberana © 2026
      </footer>
    </div>
  );
};

export default UnoMvpApp;
