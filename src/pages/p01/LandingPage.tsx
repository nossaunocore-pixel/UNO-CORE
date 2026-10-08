import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Hexagon, 
  User, 
  Home, 
  Briefcase, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface LandingPageProps {
  onNavigate: (view: P01ViewId) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {

  const environmentCards = [
    { 
      id: 'pessoa' as P01ViewId,
      title: 'Pessoa', 
      desc: 'Assistência individual, perfil e soberania pessoal soberana.', 
      icon: <User className="w-6 h-6 text-amber-300" />,
      badge: 'Perfil & Cuidado',
      color: 'border-amber-500/50 bg-amber-500/10 text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:border-amber-400'
    },
    { 
      id: 'casa' as P01ViewId,
      title: 'Casa', 
      desc: 'Lar residencial, energia fotovoltaica comunitária e convivência.', 
      icon: <Home className="w-6 h-6 text-emerald-300" />,
      badge: 'Lar & Sustentabilidade',
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:border-emerald-400'
    },
    { 
      id: 'business' as P01ViewId,
      title: 'Trabalho', 
      desc: 'Oficinas eco-tech, produção sustentável e economia comunitária.', 
      icon: <Briefcase className="w-6 h-6 text-indigo-300" />,
      badge: 'Produção & Projetos',
      color: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300 shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:border-indigo-400'
    },
    { 
      id: 'mundi' as P01ViewId,
      title: 'Mundo', 
      desc: 'Dimensão territorial, mapa interativo e malha de conexão.', 
      icon: <Globe className="w-6 h-6 text-cyan-300" />,
      badge: 'Mapa & Território',
      color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300 shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:border-cyan-400'
    }
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-6 md:p-12 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE BACKGROUND & RADIAL GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[190px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff06_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🌟 HERO SECTION */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6 my-6">
        
        {/* Aero Glass Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/80 border-2 border-amber-400/80 text-amber-300 text-xs font-mono font-extrabold tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-xl">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
          UNO — UNIVERSO OPERACIONAL
        </div>

        {/* Elegant Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Bem-vindo à <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-cyan-300 text-glow-gold">UNO</span>
        </h1>

        <p className="text-base md:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl mx-auto bg-slate-900/60 p-5 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-2xl">
          Seu ecossistema integrado para pessoas, lares, atividades produtivas e território. Navegue suavemente ou inicie o diálogo com a **EVA**.
        </p>

        {/* Highlighted Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 text-xs font-semibold">
          
          <button
            onClick={() => onNavigate('dialogo')}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black tracking-wider uppercase flex items-center justify-center gap-3 hex-btn-gold border-2 border-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.6)] cursor-pointer hover:scale-105 transition-all"
          >
            <MessageSquare className="w-5 h-5 text-slate-950" />
            <span>INICIAR CONVERSA COM EVA</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => onNavigate('escolha_ambiente')}
            className="w-full sm:w-auto px-8 py-5 bg-slate-900/90 text-cyan-300 font-bold border-2 border-cyan-400 flex items-center justify-center gap-2 hex-btn shadow-[0_0_25px_rgba(0,229,255,0.4)] cursor-pointer backdrop-blur-xl hover:scale-105 transition-all"
          >
            <Hexagon className="w-5 h-5 text-cyan-300" />
            <span>EXPLORAR AMBIENTES</span>
          </button>
        </div>

      </div>

      {/* 🔷 4 ENVIRONMENT CARDS GRID */}
      <div className="relative z-20 my-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-6">
          <h3 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest flex items-center justify-center gap-2 text-glow-cyan">
            <Hexagon className="w-4 h-4 text-cyan-400 animate-pulse" /> DIMENSÕES OPERACIONAIS DA UNO
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {environmentCards.map((env) => (
            <div 
              key={env.id} 
              onClick={() => onNavigate(env.id)}
              className={`p-6 rounded-3xl border-2 ${env.color} backdrop-blur-2xl space-y-4 shadow-2xl animate-float cursor-pointer hover:scale-105 transition-all flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
                    {env.icon}
                  </div>
                  <span className="text-[10px] font-sans font-bold bg-slate-950/90 px-3 py-1 rounded-full border border-slate-800 text-amber-200">
                    {env.badge}
                  </span>
                </div>
                <h4 className="font-extrabold text-lg text-white">{env.title}</h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  {env.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
                <span>Acessar {env.title}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ELEGANT FOOTER BAR */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-semibold text-glow-gold">
          <Sparkles className="w-4 h-4" /> Design Aeroespacial & Vidro Suave
        </span>
        <span className="text-cyan-300 font-semibold text-glow-cyan">Fundo Azul-Noite • Hexágonos Estilizados</span>
      </div>

    </div>
  );
};

export default LandingPage;
