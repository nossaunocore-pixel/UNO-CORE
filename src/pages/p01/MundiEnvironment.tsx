import React from 'react';
import { Globe, RadioTower, Wifi, Compass, Sparkles, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface MundiEnvironmentProps {
  onNavigate: (view: P01ViewId) => void;
}

export const MundiEnvironment: React.FC = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#030712] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Banner */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-400 via-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            <Globe className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>NÓS S.A. / UNO</span>
              <span className="text-amber-400 font-mono text-xl">◎</span>
              <span className="text-cyan-400 font-mono text-xl tracking-wider">AMBIENTE MUNDI</span>
            </h1>
            <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Visão Territorial, Espacial, Geográfica & Integração Global de Nós
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/80 px-3.5 py-1.5 rounded-2xl border border-cyan-500/50">
          <Globe className="w-4 h-4 text-cyan-400" /> 🟢 REDE MESH OPERACIONAL
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-20 my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-cyan-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-cyan-200 text-sm font-mono flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" /> MAPA TERRITORIAL DE NÓS
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Mapeamento descentralizado conectando a comunidade central aos polos regionais em sincronia soberana.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-cyan-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-cyan-200 text-sm font-mono flex items-center gap-2">
            <Wifi className="w-4 h-4 text-emerald-400" /> MALHA MESH DE COMUNICAÇÃO
          </h3>
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Latência de Rede:</span>
              <span className="text-emerald-400 font-bold">12 ms Estável</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Pontes Ativas:</span>
              <span className="text-cyan-300 font-bold">100% Cobertura</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-cyan-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-cyan-200 text-sm font-mono flex items-center gap-2">
            <RadioTower className="w-4 h-4 text-indigo-400" /> CONEXÕES EXTERNAS
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Portais de integração de dados e monitoramento climático com resiliência total contra desconexões.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> AMBIENTE MUNDI — UNO P01
        </span>
        <span className="text-cyan-400 font-bold">Aparência UNO • Integração Territorial</span>
      </div>

    </div>
  );
};
