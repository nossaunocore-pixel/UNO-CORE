import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Hammer, 
  Sprout, 
  ShieldPlus, 
  ShoppingBag, 
  RadioTower, 
  Sparkles, 
  Compass,
  Globe,
  Radio,
  RotateCw
} from 'lucide-react';
import { ModuleId } from '../types';

export const MapaCircular3DPage: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<string | null>('centro');
  const [rotationDegree, setRotationDegree] = useState(0);

  const mapPoints = [
    { id: 'centro', title: '1. HUB CENTRAL NÓS S.A.', category: 'CENTRO', x: 50, y: 24, icon: <Building2 className="w-6 h-6 text-amber-300" />, desc: 'Edifício imponente, revestido em vidro reflexivo com feixe de luz permanente.' },
    { id: 'habitacional', title: '2. MÓDULO HABITACIONAL', category: 'ESQUERDO SUPERIOR', x: 22, y: 38, icon: <Home className="w-5 h-5 text-amber-200" />, desc: 'Residências aconchegantes com holograma pessoal e gestão de consumo doméstico.' },
    { id: 'producao', title: '3. MÓDULO PRODUÇÃO', category: 'DIREITO SUPERIOR', x: 78, y: 38, icon: <Hammer className="w-5 h-5 text-amber-400" />, desc: 'Oficina sustentável com marcenaria ecológica e impressão 3D de alta tecnologia.' },
    { id: 'recursos', title: '4. MÓDULO RECURSOS', category: 'ESQUERDO INFERIOR', x: 24, y: 72, icon: <Sprout className="w-5 h-5 text-emerald-400" />, desc: 'Fazenda hidropônica, captação pluvial e parque fotovoltaico de energia limpa.' },
    { id: 'saude', title: '5. SEGURANÇA & SAÚDE', category: 'DIREITO INFERIOR', x: 76, y: 72, icon: <ShieldPlus className="w-5 h-5 text-sky-400" />, desc: 'Hospital torre limpa, azul e branco com triagem e prontidão de emergência.' }
  ];

  const handleRotate = () => {
    setRotationDegree(prev => (prev + 72) % 360);
  };

  const activeNode = mapPoints.find(p => p.id === selectedPoint) || mapPoints[0];

  return (
    <div className="relative w-full min-h-[calc(100vh-120px)] bg-[#030712] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 TOP BAR */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-400 via-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <Globe className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>NÓS S.A. / UNO</span>
              <span className="text-amber-400 text-xl font-mono">◎</span>
              <span className="text-cyan-400 font-mono text-xl tracking-wider drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]">
                MAPA CIRCULAR 3D
              </span>
            </h1>
            <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Esfera Giratória & 5 Pontos Orbitais Interligados
            </p>
          </div>
        </div>

        <button
          onClick={handleRotate}
          className="px-4 py-2 rounded-2xl bg-slate-900 border border-amber-500/50 hover:bg-slate-800 text-amber-300 text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg"
        >
          <RotateCw className="w-4 h-4 text-amber-400 animate-spin-slow" />
          ROTACIONAR ESFERA (+72°)
        </button>

      </div>

      {/* 📐 MAIN BODY: ROTATING 3D CIRCULAR SPHERE MAP */}
      <div className="relative z-20 my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* SPHERE MAP CANVAS (8 COLS) */}
        <div className="lg:col-span-8 relative min-h-[460px] flex items-center justify-center">
          
          {/* Outer Orbital Rotating Rings */}
          <div 
            style={{ transform: `rotate(${rotationDegree}deg)` }}
            className="absolute transition-transform duration-1000 ease-out pointer-events-none flex items-center justify-center"
          >
            <div className="w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border-2 border-amber-400/40 shadow-[0_0_60px_rgba(245,158,11,0.3)] stroke-dash-array" />
            <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.4)]" />
          </div>

          {/* SVG Connecting Golden Ray Vectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {mapPoints.slice(1).map((pt) => (
              <g key={pt.id}>
                <line
                  x1="50%"
                  y1="24%"
                  x2={`${pt.x}%`}
                  y2={`${pt.y}%`}
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  className="opacity-80"
                />
                <circle cx={`${pt.x}%`} cy={`${pt.y}%`} r="6" fill="#06b6d4" className="animate-ping opacity-75" />
              </g>
            ))}
          </svg>

          {/* Interactive Nodes */}
          <div className="relative w-full max-w-xl h-[400px]">
            {mapPoints.map((pt) => (
              <div
                key={pt.id}
                onClick={() => setSelectedPoint(pt.id)}
                style={{
                  left: `${pt.x}%`,
                  top: `${pt.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 z-30 p-3 rounded-2xl border-2 backdrop-blur-xl flex items-center gap-2.5 shadow-2xl ${
                  selectedPoint === pt.id
                    ? 'bg-amber-950/90 border-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.7)] scale-105'
                    : 'bg-slate-900/80 border-cyan-500/50 hover:border-cyan-400'
                }`}
              >
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {pt.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-300 font-bold">{pt.category}</div>
                  <div className="text-xs font-extrabold text-slate-100 whitespace-nowrap">{pt.title}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* NODE DETAIL WIDGET (4 COLS) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-amber-500/60 shadow-[0_0_50px_rgba(245,158,11,0.3)] backdrop-blur-2xl space-y-4 animate-float">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-200 border border-cyan-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> INSPEÇÃO DE PONTO ORBITAL
            </div>

            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              {activeNode.icon}
              <span>{activeNode.title}</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-950/90 p-4 rounded-xl border border-slate-800">
              {activeNode.desc}
            </p>

            <div className="pt-2 text-xs font-mono text-amber-300 flex items-center justify-between">
              <span>Sincronia Orbital:</span>
              <span className="text-emerald-400 font-bold">100% Alinhado</span>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> NÓS S.A. / UNO — 3. Mapa Circular 3D
        </span>
        <span className="text-cyan-400 font-bold">Aparência UNO • 5 Pontos Orbitais</span>
      </div>

    </div>
  );
};
