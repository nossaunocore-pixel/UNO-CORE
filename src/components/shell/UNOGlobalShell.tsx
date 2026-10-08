import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  User, 
  Home, 
  Briefcase, 
  Globe, 
  Key, 
  Bot, 
  ShieldCheck, 
  Menu, 
  X,
  Hexagon,
  ArrowRight
} from 'lucide-react';

export type P01ViewId = 
  | 'landing' 
  | 'dialogo' 
  | 'escolha_ambiente'
  | 'pessoa' 
  | 'casa' 
  | 'business' 
  | 'mundi' 
  | 'fundador';

interface UNOGlobalShellProps {
  currentView: P01ViewId;
  onNavigate: (view: P01ViewId) => void;
  children: React.ReactNode;
}

export const UNOGlobalShell: React.FC<UNOGlobalShellProps> = ({
  currentView,
  onNavigate,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: P01ViewId) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const guidedSteps = [
    { id: 'landing', label: 'Recepção', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'dialogo', label: 'Diálogo EVA', icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { id: 'escolha_ambiente', label: 'Ambientes', icon: <Hexagon className="w-3.5 h-3.5" /> },
    { id: 'mundi', label: 'Mapa Mundo', icon: <Globe className="w-3.5 h-3.5" /> }
  ];

  const navItems = [
    { id: 'landing', label: 'Recepção', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { id: 'dialogo', label: 'Conversa com EVA', icon: <MessageSquare className="w-4 h-4 text-cyan-400" /> },
    { id: 'escolha_ambiente', label: 'Ambientes', icon: <Hexagon className="w-4 h-4 text-cyan-300" /> },
    { id: 'pessoa', label: 'Pessoa', icon: <User className="w-4 h-4 text-amber-300" /> },
    { id: 'casa', label: 'Casa', icon: <Home className="w-4 h-4 text-emerald-400" /> },
    { id: 'business', label: 'Trabalho', icon: <Briefcase className="w-4 h-4 text-indigo-400" /> },
    { id: 'mundi', label: 'Mundo', icon: <Globe className="w-4 h-4 text-sky-400" /> },
    { id: 'fundador', label: 'Painel do Fundador', icon: <Key className="w-4 h-4 text-amber-400" /> },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 ELEGANT AERO GLASS HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/85 border-b border-cyan-500/30 backdrop-blur-2xl px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-cyan-400 text-slate-950 font-black text-sm font-mono shadow-[0_0_25px_rgba(245,158,11,0.6)] ring-2 ring-amber-300 group-hover:scale-105 transition-all">
            UNO
          </div>
          <div>
            <h1 className="text-base md:text-lg font-extrabold text-white tracking-wide flex items-center gap-2">
              <span>UNO</span>
              <span className="text-amber-400 text-xs font-mono">◎</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 font-mono text-xs tracking-wider">
                Universo Operacional
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-sans flex items-center gap-1 mt-0.5">
              Ecossistema Inteligente & Soberano
            </p>
          </div>
        </div>

        {/* Guided Navigation Flow */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl text-xs font-medium backdrop-blur-xl">
          {guidedSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => handleNavClick(step.id as P01ViewId)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 font-bold ${
                  currentView === step.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {step.icon}
                <span>{step.label}</span>
              </button>
              {idx < guidedSteps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-slate-700" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-2 text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as P01ViewId)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 font-semibold ${
                currentView === item.id
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/70 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-16 z-40 bg-slate-950/95 border-b border-cyan-500/40 p-4 backdrop-blur-2xl space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as P01ViewId)}
              className={`w-full p-3 rounded-xl border text-xs font-semibold flex items-center gap-3 ${
                currentView === item.id
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/70 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* STATUS & ASSISTANT ACTIVE BAR */}
      <div className="bg-slate-950/80 border-b border-slate-900/80 px-4 md:px-8 py-2 flex items-center justify-between text-xs font-sans text-slate-400">
        <div className="flex items-center gap-4">
          <span className="text-amber-300 font-bold flex items-center gap-1.5">
            <Bot className="w-4 h-4 text-amber-400 animate-pulse" /> Assistente EVA:
            <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 ml-1">
              🟢 Ativa & Pronta
            </span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-slate-400 text-[11px]">
          <span className="flex items-center gap-1 text-cyan-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Rede Soberana Protegida
          </span>
        </div>
      </div>

      {/* MAIN CONTENT VIEW */}
      <main className="flex-1 transition-all duration-300">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
        <div className="flex items-center gap-2 text-amber-300 font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" /> UNO — Ecossistema Sustentável & Soberano
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-slate-300 font-medium">Normal</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span className="text-slate-300 font-medium">Atenção</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
            <span className="text-slate-300 font-medium">Alerta Urgente</span>
          </span>
        </div>
      </footer>

    </div>
  );
};

export default UNOGlobalShell;
