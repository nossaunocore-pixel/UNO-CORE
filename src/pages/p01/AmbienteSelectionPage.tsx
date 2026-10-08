import React from 'react';
import { 
  User, 
  Home, 
  Briefcase, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  Hexagon
} from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface AmbienteSelectionPageProps {
  onNavigate: (view: P01ViewId) => void;
}

export const AmbienteSelectionPage: React.FC<AmbienteSelectionPageProps> = ({ onNavigate }) => {
  const environments = [
    {
      id: 'pessoa' as P01ViewId,
      title: 'Pessoa',
      subtitle: 'Perfil Individual & Cuidado',
      desc: 'Gestão de perfil soberano, assistente individual e integridade de dados pessoais.',
      icon: <User className="w-8 h-8 text-amber-300" />,
      color: 'border-amber-500/60 bg-amber-500/10 text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:border-amber-400'
    },
    {
      id: 'casa' as P01ViewId,
      title: 'Casa',
      subtitle: 'Ambiente Residencial & Lar',
      desc: 'Visão doméstica, energia fotovoltaica, qualidade do ar e rede de convivência.',
      icon: <Home className="w-8 h-8 text-emerald-400" />,
      color: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-400'
    },
    {
      id: 'business' as P01ViewId,
      title: 'Trabalho & Negócio',
      subtitle: 'Oficina Sustentável & Produção',
      desc: 'Produção eco-tech, marcenaria CNC, impressão 3D e economia comunitária.',
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      color: 'border-indigo-500/60 bg-indigo-500/10 text-indigo-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:border-indigo-400'
    },
    {
      id: 'mundi' as P01ViewId,
      title: 'Mundo & Território',
      subtitle: 'Visão Geográfica & Conexões',
      desc: 'Ecossistema global de nós, mapa territorial interativo e comunicação em malha.',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      color: 'border-cyan-500/60 bg-cyan-500/10 text-cyan-300 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:border-cyan-400'
    }
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-6 md:p-12 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff06_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 HEADER BANNER */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 my-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/80 border-2 border-cyan-400 text-cyan-300 text-xs font-mono font-extrabold tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.4)] backdrop-blur-xl">
          <Hexagon className="w-4 h-4 text-cyan-300 animate-pulse" /> ESCOLHA SEU AMBIENTE OPERACIONAL
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Selecione a Dimensão <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-amber-300 to-amber-400 text-glow-cyan">UNO</span>
        </h1>

        <p className="text-sm text-slate-200 font-sans max-w-xl mx-auto leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800 backdrop-blur-xl">
          Escolha qual dimensão do ecossistema você deseja acessar e gerenciar agora:
        </p>
      </div>

      {/* 📐 4 ENVIRONMENTS GRID */}
      <div className="relative z-20 my-8 max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {environments.map((env) => (
          <div
            key={env.id}
            onClick={() => onNavigate(env.id)}
            className={`p-6 rounded-3xl border-2 backdrop-blur-2xl cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col justify-between space-y-4 animate-float ${env.color}`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
                  {env.icon}
                </div>
                <span className="text-[10px] font-sans font-bold bg-slate-950/90 px-3 py-1 rounded-full border border-slate-800 text-amber-200">
                  UNO
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">{env.title}</h3>
              <div className="text-xs font-sans text-slate-300 font-bold mt-0.5">{env.subtitle}</div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed mt-3 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                {env.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
              <span>Entrar no Ambiente</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-semibold text-glow-gold">
          <Sparkles className="w-4 h-4" /> Seleção de Ambientes UNO
        </span>
        <span className="text-cyan-300 font-semibold text-glow-cyan">Vidro Aeroespacial & Hexágonos</span>
      </div>

    </div>
  );
};

export default AmbienteSelectionPage;
