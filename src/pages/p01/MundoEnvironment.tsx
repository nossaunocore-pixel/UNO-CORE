import React, { useState } from 'react';
import { 
  Globe, 
  Layers, 
  Wifi, 
  Sprout, 
  ShieldPlus, 
  Home, 
  Sparkles, 
  Filter,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface MundoEnvironmentProps {
  onNavigate: (view: P01ViewId) => void;
}

export const MundoEnvironment: React.FC<MundoEnvironmentProps> = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'energia' | 'saude' | 'mesh'>('all');
  const [selectedPin, setSelectedPin] = useState<string>('hub_central');

  const geoServices = [
    { id: 'hub_central', name: '1. HUB CENTRAL DE GOVERNANÇA', category: 'GOVERNANÇA', layer: 'all', x: 50, y: 22, icon: <Globe className="w-6 h-6 text-amber-300" />, desc: 'Edifício Central com feixe de luz UNO e centro de mediação.' },
    { id: 'residencia', name: '2. POLO HABITACIONAL', category: 'RESIDÊNCIAS', layer: 'energia', x: 22, y: 38, icon: <Home className="w-5 h-5 text-amber-200" />, desc: 'Unidades habitacionais conectadas com 99.4% de eficiência fotovoltaica.' },
    { id: 'oficina', name: '3. POLO DE PRODUÇÃO', category: 'MANUFATURA', layer: 'mesh', x: 78, y: 38, icon: <Layers className="w-5 h-5 text-indigo-400" />, desc: 'Oficinas sustentáveis e manufatura 3D comunitária.' },
    { id: 'fazenda', name: '4. RECURSOS & AGROECO', category: 'ALIMENTAÇÃO', layer: 'energia', x: 25, y: 72, icon: <Sprout className="w-5 h-5 text-emerald-400" />, desc: 'Estufas hidropônicas verticais e reservatório pluvial.' },
    { id: 'hospital', name: '5. CENTRO DE SAÚDE', category: 'SAÚDE & CUIDADO', layer: 'saude', x: 75, y: 72, icon: <ShieldPlus className="w-5 h-5 text-sky-400" />, desc: 'Triagem expressa e suporte comunitário 24 horas.' }
  ];

  const filteredServices = geoServices.filter(s => activeLayer === 'all' || s.layer === activeLayer || s.layer === 'all');
  const activeServiceInfo = geoServices.find(s => s.id === selectedPin) || geoServices[0];

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP BLUE SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff06_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 TOP BAR */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-400 via-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(0,229,255,0.5)]">
            <Globe className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>Ambiente Mundo</span>
              <span className="text-amber-400 font-mono text-xl">◎</span>
              <span className="text-cyan-400 font-sans text-xl tracking-wider">Visualização Geográfica</span>
            </h1>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Mapeamento Territorial & Conexões de Rede em Malha
            </p>
          </div>
        </div>

        {/* Layer Filters */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl text-xs overflow-x-auto w-full md:w-auto">
          <span className="text-slate-400 text-xs font-bold px-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" /> CAMADAS:
          </span>
          <button
            onClick={() => setActiveLayer('all')}
            className={`px-3 py-1 rounded-xl transition-all cursor-pointer font-bold ${
              activeLayer === 'all'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveLayer('energia')}
            className={`px-3 py-1 rounded-xl transition-all cursor-pointer font-bold ${
              activeLayer === 'energia'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ⚡ Energia
          </button>
          <button
            onClick={() => setActiveLayer('saude')}
            className={`px-3 py-1 rounded-xl transition-all cursor-pointer font-bold ${
              activeLayer === 'saude'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🏥 Saúde
          </button>
          <button
            onClick={() => setActiveLayer('mesh')}
            className={`px-3 py-1 rounded-xl transition-all cursor-pointer font-bold ${
              activeLayer === 'mesh'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📡 Conexões
          </button>
        </div>

      </div>

      {/* 📐 MAIN BODY: GEOGRAPHIC MAP CANVAS */}
      <div className="relative z-20 my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* MAP CANVAS (8 COLS) */}
        <div className="lg:col-span-8 relative min-h-[460px] flex items-center justify-center">
          
          {/* Outer Orbital Grid Rings */}
          <div className="absolute pointer-events-none flex items-center justify-center">
            <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border-2 border-cyan-400/40 shadow-[0_0_60px_rgba(0,229,255,0.3)] animate-pulse" />
            <div className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border border-amber-400/40 shadow-[0_0_40px_rgba(245,158,11,0.3)]" />
          </div>

          {/* SVG Vector Mesh Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {filteredServices.slice(1).map((s) => (
              <g key={s.id}>
                <line
                  x1="50%"
                  y1="22%"
                  x2={`${s.x}%`}
                  y2={`${s.y}%`}
                  stroke="#00e5ff"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  className="opacity-80"
                />
                <circle cx={`${s.x}%`} cy={`${s.y}%`} r="6" fill="#f59e0b" className="animate-ping opacity-80" />
              </g>
            ))}
          </svg>

          {/* Service Pins */}
          <div className="relative w-full max-w-xl h-[420px]">
            {filteredServices.map((s) => (
              <div
                key={s.id}
                onClick={() => setSelectedPin(s.id)}
                style={{
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 z-30 p-3 rounded-2xl border-2 backdrop-blur-2xl flex items-center gap-2.5 shadow-2xl ${
                  selectedPin === s.id
                    ? 'bg-cyan-950/90 border-cyan-400 shadow-[0_0_40px_rgba(0,229,255,0.8)] scale-105'
                    : 'bg-slate-900/80 border-cyan-500/40 hover:border-cyan-300'
                }`}
              >
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[10px] font-sans text-amber-300 font-bold">{s.category}</div>
                  <div className="text-xs font-extrabold text-white whitespace-nowrap">{s.name}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* LAYER & SERVICE DETAIL WIDGET (4 COLS) */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-cyan-400/80 shadow-[0_0_50px_rgba(0,229,255,0.3)] backdrop-blur-2xl space-y-4 animate-float">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-200 border border-cyan-400 text-xs font-bold">
              <Eye className="w-3.5 h-3.5 text-cyan-300" /> POLO SELECIONADO
            </div>

            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              {activeServiceInfo.icon}
              <span>{activeServiceInfo.name}</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-950/90 p-4 rounded-xl border border-slate-800">
              {activeServiceInfo.desc}
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Status do Polo:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 🟢 Operacional
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Conexão de Malha:</span>
                <span className="text-cyan-300 font-bold">100% Estável</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-semibold">
          <Sparkles className="w-4 h-4" /> Ambiente Mundo — UNO
        </span>
        <span className="text-cyan-400 font-semibold">Visualização Geográfica Interativa</span>
      </div>

    </div>
  );
};

export default MundoEnvironment;
