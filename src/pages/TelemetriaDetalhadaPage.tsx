import React from 'react';
import { 
  Activity, 
  Cpu, 
  Key, 
  Zap, 
  CheckCircle2, 
  Radio, 
  Wifi, 
  Volume2, 
  Server, 
  Sparkles,
  Compass,
  Layers,
  ShieldCheck
} from 'lucide-react';

export const TelemetriaDetalhadaPage: React.FC = () => {
  const systemMetrics = [
    { title: 'Matriz Energética Fotovoltaica', val: '1.450 kW/h', detail: 'Baterias Centrais em 100%', status: 'operacional', color: 'text-amber-300 border-amber-500/40 bg-amber-500/10' },
    { title: 'Rede Mesh Descentralizada', val: '12 ms Latência', detail: 'Cobertura 100% dos 7 Módulos', status: 'operacional', color: 'text-cyan-300 border-cyan-500/40 bg-cyan-500/10' },
    { title: 'Sintetizador Web Audio API', val: '440 Hz / 880 Hz', detail: 'Frequência Suave & Alertas OK', status: 'operacional', color: 'text-indigo-300 border-indigo-500/40 bg-indigo-500/10' },
    { title: 'Banco de Dados Firestore DB', val: '0ms Sincronia', detail: 'Replicação em Tempo Real OK', status: 'operacional', color: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10' },
    { title: 'Índice de Consenso UNO', val: '99.8% Estável', detail: 'Governança Sem Divergências', status: 'operacional', color: 'text-amber-300 border-amber-500/40 bg-amber-500/10' },
    { title: 'Reservatório Hídrico Pluvial', val: '88.000 Litros', detail: 'Filtragem UV & Pressão OK', status: 'operacional', color: 'text-sky-300 border-sky-500/40 bg-sky-500/10' }
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-120px)] bg-[#030712] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98106_1px,transparent_1px),linear-gradient(to_bottom,#10b98106_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 TOP BAR */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-emerald-400 via-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            <Activity className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>NÓS S.A. / UNO</span>
              <span className="text-amber-400 text-xl font-mono">◎</span>
              <span className="text-emerald-400 font-mono text-xl tracking-wider drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]">
                TELEMETRIA DETALHADA
              </span>
            </h1>
            <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Diagnóstico Abrangente de Sistemas & Todos os Indicadores Verdes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 text-xs font-mono font-extrabold flex items-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.5)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>🟢 TODOS OS SISTEMAS VERDES (VERIFIED)</span>
          </div>
        </div>

      </div>

      {/* 📐 MAIN BODY: METRICS GRID */}
      <div className="relative z-20 my-8 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemMetrics.map((item, idx) => (
            <div key={idx} className={`p-6 rounded-3xl border ${item.color} backdrop-blur-xl space-y-3 shadow-xl hover:scale-[1.02] transition-transform`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-300">{item.title}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERDE
                </span>
              </div>
              <div className="text-2xl font-black font-mono text-white">{item.val}</div>
              <p className="text-xs text-slate-400 font-sans">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Diagnostic Audio & Hardware Card */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-indigo-400" /> Sintetizador Sonoro:
            </span>
            <strong className="text-indigo-300 font-bold text-sm">Web Audio API Nativo OK</strong>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-amber-400" /> Ponte Mesh de Dados:
            </span>
            <strong className="text-amber-300 font-bold text-sm">100% Criptografado</strong>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-400" /> Processamento Sensorial:
            </span>
            <strong className="text-emerald-300 font-bold text-sm">0% Perda de Pacotes</strong>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> NÓS S.A. / UNO — 4. Telemetria Detalhada
        </span>
        <span className="text-emerald-400 font-bold">Aparência UNO • Sistemas Verdes 100%</span>
      </div>

    </div>
  );
};
