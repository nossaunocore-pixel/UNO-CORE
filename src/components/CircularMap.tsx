import React from 'react';
import { ModuleId, AlertItem } from '../types';
import { 
  Building2, 
  Home, 
  Hammer, 
  Sprout, 
  ShieldPlus, 
  ShoppingBag, 
  Radio, 
  RadioTower, 
  Sparkles,
  AlertTriangle,
  Trees,
  Wind,
  Layers,
  Compass
} from 'lucide-react';

interface CircularMapProps {
  onSelectModule: (id: ModuleId) => void;
  activeAlerts: AlertItem[];
  onOpenCentralHologram: () => void;
}

interface ModuleNodeConfig {
  id: ModuleId;
  badgeLabel: string;
  title: string;
  subtitle: string;
  x: number; // percentage
  y: number; // percentage
  icon: React.ReactNode;
  theme: {
    border: string;
    glow: string;
    bg: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    iconBg: string;
    titleColor: string;
  };
}

export const CircularMap: React.FC<CircularMapProps> = ({
  onSelectModule,
  activeAlerts,
  onOpenCentralHologram
}) => {

  const modules: ModuleNodeConfig[] = [
    {
      id: 'centro',
      badgeLabel: 'MÓDULO CENTRAL',
      title: 'NÓS S.A. / UNO',
      subtitle: 'Cúpula Central & Árvore da Vida',
      x: 50,
      y: 22,
      icon: <Building2 className="w-10 h-10 text-amber-300" />,
      theme: {
        border: 'border-amber-400/90',
        glow: 'shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:shadow-[0_0_80px_rgba(245,158,11,0.9)]',
        bg: 'bg-gradient-to-b from-slate-900/95 via-amber-950/70 to-slate-950/95',
        badgeBg: 'bg-cyan-500/20 backdrop-blur-md',
        badgeText: 'text-cyan-200',
        badgeBorder: 'border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)]',
        iconBg: 'bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 text-slate-950 shadow-xl shadow-amber-500/60 ring-2 ring-amber-300',
        titleColor: 'text-amber-100 font-extrabold text-lg'
      }
    },
    {
      id: 'habitacional',
      badgeLabel: 'MÓDULO HABITACIONAL',
      title: 'Residências & Lar',
      subtitle: 'Casas aconchegantes de madeira e pedra',
      x: 20,
      y: 35,
      icon: <Home className="w-8 h-8 text-amber-200" />,
      theme: {
        border: 'border-amber-500/60',
        glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)]',
        bg: 'bg-slate-900/90 backdrop-blur-md',
        badgeBg: 'bg-cyan-950/80',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
        iconBg: 'bg-amber-600/30 border border-amber-400/50 text-amber-200',
        titleColor: 'text-amber-100'
      }
    },
    {
      id: 'producao',
      badgeLabel: 'MÓDULO DE PRODUÇÃO',
      title: 'Oficina Sustentável',
      subtitle: 'Marcenaria ecológicas & Manufatura Tech',
      x: 80,
      y: 35,
      icon: <Hammer className="w-8 h-8 text-amber-400" />,
      theme: {
        border: 'border-amber-600/60',
        glow: 'shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_50px_rgba(217,119,6,0.6)]',
        bg: 'bg-slate-900/90 backdrop-blur-md',
        badgeBg: 'bg-cyan-950/80',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
        iconBg: 'bg-amber-700/30 border border-amber-500/50 text-amber-300',
        titleColor: 'text-amber-200'
      }
    },
    {
      id: 'recursos',
      badgeLabel: 'MÓDULO DE RECURSOS',
      title: 'Fazenda & Energia Solar',
      subtitle: 'Moinho de vento, estufas & colheita',
      x: 80,
      y: 65,
      icon: <Sprout className="w-8 h-8 text-emerald-400" />,
      theme: {
        border: 'border-emerald-500/60',
        glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]',
        bg: 'bg-slate-900/90 backdrop-blur-md',
        badgeBg: 'bg-cyan-950/80',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
        iconBg: 'bg-emerald-600/30 border border-emerald-400/50 text-emerald-300',
        titleColor: 'text-emerald-200'
      }
    },
    {
      id: 'saude',
      badgeLabel: 'MÓDULO DE SEGURANÇA',
      title: 'Segurança & Saúde',
      subtitle: 'Torre de vigia & Hospital limpo',
      x: 80,
      y: 88,
      icon: <ShieldPlus className="w-8 h-8 text-sky-400" />,
      theme: {
        border: 'border-sky-500/60',
        glow: 'shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]',
        bg: 'bg-slate-900/90 backdrop-blur-md',
        badgeBg: 'bg-cyan-950/80',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
        iconBg: 'bg-sky-600/30 border border-sky-400/50 text-sky-300',
        titleColor: 'text-sky-200'
      }
    },
    {
      id: 'marketplace',
      badgeLabel: 'MARKETPLACE',
      title: 'Praça Aberta & Lojas',
      subtitle: 'Feira viva de trocas e comércio',
      x: 32,
      y: 58,
      icon: <ShoppingBag className="w-8 h-8 text-orange-400" />,
      theme: {
        border: 'border-orange-500/60',
        glow: 'shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]',
        bg: 'bg-slate-900/90 backdrop-blur-md',
        badgeBg: 'bg-cyan-950/80',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
        iconBg: 'bg-orange-600/30 border border-orange-400/50 text-orange-300',
        titleColor: 'text-orange-200'
      }
    },
    {
      id: 'servicos',
      badgeLabel: 'Navegação UNO (Serviço)',
      title: 'Serviços Externos & Pontes',
      subtitle: 'Torres de sinal, portais & conexões',
      x: 20,
      y: 88,
      icon: <RadioTower className="w-8 h-8 text-indigo-400" />,
      theme: {
        border: 'border-indigo-500/60',
        glow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)]',
        bg: 'bg-slate-900/90 backdrop-blur-md',
        badgeBg: 'bg-cyan-950/80',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
        iconBg: 'bg-indigo-600/30 border border-indigo-400/50 text-indigo-300',
        titleColor: 'text-indigo-200'
      }
    }
  ];

  const centralNode = modules[0];
  const urgentAlertsCount = activeAlerts.filter(a => a.severity === 'urgent' && !a.confirmed).length;

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-2 select-none">
      
      {/* 🌅 SUNRISE SKY & DEEP FOREST ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Golden Sunrise Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-orange-950/30 to-slate-950 opacity-90" />
        
        {/* Top Sun Rays Flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-300/30 via-amber-500/10 to-transparent blur-3xl" />
        
        {/* Cobblestone & Forest Ambient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b08_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* SVG RADIANT GOLDEN LIGHT PATHWAYS & MANDALA PLAZA */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <linearGradient id="goldenPath" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="1" />
          </linearGradient>

          <filter id="goldenGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Geometric Plaza Mandala Ring on Floor (matching Gemini reference image) */}
        <g transform="translate(0, 0)">
          {/* Main Central Circle Mandala */}
          <circle
            cx="50%"
            cy="52%"
            r="160"
            fill="none"
            stroke="url(#goldenPath)"
            strokeWidth="3"
            filter="url(#goldenGlowFilter)"
            strokeDasharray="12 4"
            className="opacity-80"
          />
          <circle
            cx="50%"
            cy="52%"
            r="110"
            fill="none"
            stroke="url(#goldenPath)"
            strokeWidth="2"
            filter="url(#goldenGlowFilter)"
            className="opacity-70"
          />
          {/* Mandala Cross & Star Lines */}
          <line x1="38%" y1="52%" x2="62%" y2="52%" stroke="url(#goldenPath)" strokeWidth="1.5" filter="url(#goldenGlowFilter)" className="opacity-60" />
          <line x1="50%" y1="38%" x2="50%" y2="66%" stroke="url(#goldenPath)" strokeWidth="1.5" filter="url(#goldenGlowFilter)" className="opacity-60" />
        </g>

        {/* Radiating Golden Pathways Connecting Central Building to all Modules */}
        {modules.slice(1).map((node) => (
          <g key={`path-${node.id}`}>
            {/* Thick golden ground path */}
            <line
              x1="50%"
              y1="28%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="url(#goldenPath)"
              strokeWidth="4"
              filter="url(#goldenGlowFilter)"
              className="opacity-90"
            />

            {/* Light beam pulse moving along the line */}
            <line
              x1="50%"
              y1="28%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="15 150"
              filter="url(#goldenGlowFilter)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="165"
                to="0"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
          </g>
        ))}

        {/* Outer Circular Perimeter Connector */}
        <polygon
          points="20,35 80,35 80,65 80,88 20,88 32,58"
          fill="none"
          stroke="url(#goldenPath)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          filter="url(#goldenGlowFilter)"
          className="opacity-40"
        />
      </svg>

      {/* 📡 HOLOGRAMA CENTRAL FLOATING TRIGGER ABOVE DOME */}
      <div 
        onClick={onOpenCentralHologram}
        className="absolute top-[4%] left-1/2 -translate-x-1/2 z-40 cursor-pointer group"
      >
        <div className="px-5 py-2.5 rounded-full bg-slate-900/90 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.7)] group-hover:scale-105 transition-all flex items-center gap-2.5 backdrop-blur-lg">
          <Radio className="w-5 h-5 text-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-extrabold text-amber-200 tracking-wider">
            📡 HOLOGRAMA CENTRAL NÓS S.A. / UNO
          </span>
          {urgentAlertsCount > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[11px] font-bold animate-bounce flex items-center gap-1 shadow-md">
              <AlertTriangle className="w-3.5 h-3.5" />
              {urgentAlertsCount} URGENTE
            </span>
          )}
        </div>
      </div>

      {/* MAP CANVAS & MODULE CARDS */}
      <div className="relative w-full max-w-6xl h-[720px] z-30">

        {/* GRAND CENTRAL BUILDING (EDIFÍCIO CENTRAL & ÁRVORE DA VIDA) */}
        <div
          onClick={() => onSelectModule('centro')}
          style={{ left: '50%', top: '22%', transform: 'translate(-50%, -50%)' }}
          className="absolute cursor-pointer transition-all duration-300 hover:scale-105 z-30 w-96 text-center"
        >
          {/* Floating Cyan Pill Badge matching Gemini style */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-extrabold font-mono mb-2 bg-cyan-950/90 text-cyan-200 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            MÓDULO CENTRAL — NÓS S.A.
          </div>

          <div className="p-5 rounded-3xl border-2 border-amber-400/90 bg-gradient-to-b from-slate-900/95 via-amber-950/70 to-slate-950/95 shadow-[0_0_60px_rgba(245,158,11,0.6)] backdrop-blur-md">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 text-slate-950 shadow-xl shadow-amber-500/60 ring-2 ring-amber-300">
                <Building2 className="w-9 h-9" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-black text-amber-100 tracking-tight">
                  NÓS S.A. / UNO
                </h2>
                <div className="text-xs text-amber-300/90 font-mono font-bold">
                  🌳 Árvore da Vida & Cúpula Dourada
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-amber-500/30">
              Edifício imponente, revestido em vidro e colunas de iluminação com o feixe UNO no topo.
            </p>

            <div className="mt-3 pt-2 border-t border-amber-500/40 flex items-center justify-between text-xs text-amber-300 font-mono">
              <span>Acessar Hub Central</span>
              <span className="text-amber-400 text-base">➔</span>
            </div>
          </div>
        </div>

        {/* PERIPHERAL MODULE CARDS (DISPOSED IN CIRCLE AROUND HUB) */}
        {modules.slice(1).map((node) => (
          <div
            key={node.id}
            onClick={() => onSelectModule(node.id)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute cursor-pointer transition-all duration-300 hover:scale-105 z-20 w-64"
          >
            {/* Floating Cyan Pill Badge matching Gemini reference artwork */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold font-mono mb-1 bg-cyan-950/90 text-cyan-200 border border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
              {node.badgeLabel}
            </div>

            <div className={`p-4 rounded-2xl border-2 backdrop-blur-md transition-all ${node.theme.bg} ${node.theme.border} ${node.theme.glow}`}>
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${node.theme.iconBg}`}>
                  {node.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-sm leading-tight ${node.theme.titleColor}`}>
                    {node.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-sans mt-0.5 leading-snug">
                    {node.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Explorar Módulo</span>
                <span className="text-amber-400">➔</span>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* MAP FOOTER BAR WITH ARTWORK LEGEND */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 text-xs font-mono text-slate-200 bg-slate-900/90 px-6 py-2 rounded-full border border-amber-500/40 shadow-xl backdrop-blur-md flex items-center gap-5">
        <span className="flex items-center gap-1.5 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> NÓS S.A. / UNO — Circuito do Amanhecer
        </span>
        <span className="h-3 w-px bg-slate-700" />
        <span className="text-cyan-300">
          ⚡ Linhas Douradas Pulsantes Conectadas
        </span>
      </div>

    </div>
  );
};
