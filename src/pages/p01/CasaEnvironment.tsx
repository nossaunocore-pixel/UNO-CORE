import React from 'react';
import { Home, Zap, Wind, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface CasaEnvironmentProps {
  onNavigate: (view: P01ViewId) => void;
}

export const CasaEnvironment: React.FC = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98106_1px,transparent_1px),linear-gradient(to_bottom,#10b98106_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Banner */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 via-amber-400 to-amber-300 text-slate-950 font-bold shadow-[0_0_25px_rgba(16,185,129,0.5)]">
            <Home className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>Ambiente Casa</span>
              <span className="text-amber-400 font-mono text-xl">◎</span>
              <span className="text-emerald-400 font-sans text-xl tracking-wider">Residência & Lar</span>
            </h1>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Gestão Residencial, Energia Fotovoltaica & Convivência Doméstica
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-2xl border border-emerald-500/50">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 🟢 Unidade Residencial Conectada
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-20 my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-emerald-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-emerald-200 text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" /> ENERGIA SOLAR RESIDENCIAL
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
              <span className="text-slate-400">Eficiência Energética:</span>
              <span className="text-amber-300 font-bold">1.2 kWh / dia</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
              <span className="text-slate-400">Origem:</span>
              <span className="text-emerald-400 font-bold">100% Fotovoltaica</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-emerald-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-emerald-200 text-sm flex items-center gap-2">
            <Wind className="w-4 h-4 text-sky-400" /> QUALIDADE DO AR INTERNO
          </h3>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Índice de Purificação:</span>
              <span className="text-sky-300 font-bold">99.4% Puríssimo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Filtros UV:</span>
              <span className="text-emerald-400 font-bold">Ativos & Operacionais</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-emerald-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-emerald-200 text-sm flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" /> CONVIVÊNCIA COMUNITÁRIA
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Rede de convivência residencial para apoio mútuo, troca de suprimentos e projetos ecológicos compartilhados.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-semibold">
          <Sparkles className="w-4 h-4" /> Ambiente Casa — UNO
        </span>
        <span className="text-emerald-400 font-semibold">Lar Sustentável & Inteligente</span>
      </div>

    </div>
  );
};

export default CasaEnvironment;
