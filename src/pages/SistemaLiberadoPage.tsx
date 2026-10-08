import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Radio, 
  ShieldCheck, 
  Sun, 
  Zap, 
  Heart, 
  Smile, 
  Compass,
  Award
} from 'lucide-react';

export const SistemaLiberadoPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-120px)] bg-[#030712] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 GOLDEN SUNRISE & DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b06_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 TOP BAR */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold shadow-[0_0_35px_rgba(245,158,11,0.6)]">
            <Sun className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>NÓS S.A. / UNO</span>
              <span className="text-amber-400 text-xl font-mono">◎</span>
              <span className="text-emerald-400 font-mono text-xl tracking-wider drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]">
                SISTEMA LIBERADO
              </span>
            </h1>
            <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Estado de Harmonia Completa & Zero Alertas Pendentes
            </p>
          </div>
        </div>

        {/* Liberated Status Badge */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 text-xs font-mono font-extrabold flex items-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.6)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>🟢 100% LIBERADO — SEM PENDÊNCIAS</span>
          </div>
        </div>

      </div>

      {/* 📐 MAIN BODY: FLOATING GOLDEN HARMONY HOLOGRAM */}
      <div className="relative z-20 my-8 flex flex-col items-center justify-center min-h-[440px]">
        
        {/* Radiating Golden Circle Aura */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[420px] h-[420px] md:w-[540px] md:h-[540px] rounded-full border-2 border-amber-400/50 shadow-[0_0_100px_rgba(245,158,11,0.5)] animate-ping opacity-40" />
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-2 border-emerald-400/60 shadow-[0_0_70px_rgba(16,185,129,0.5)] animate-pulse" />
        </div>

        {/* FLOATING HOLOGRAM CARD IN FULL GOLDEN LIBERATED GLOW */}
        <div className="relative z-30 p-8 md:p-12 rounded-3xl bg-slate-900/80 border-2 border-amber-400/90 shadow-[0_0_70px_rgba(245,158,11,0.6)] backdrop-blur-2xl max-w-2xl text-center space-y-6 animate-float">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-xs font-mono font-extrabold tracking-wider shadow-lg">
            <Award className="w-4 h-4 text-amber-300 animate-spin-slow" />
            SISTEMA OPERACIONAL NÓS S.A. / UNO — HARMONIA TOTAL
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-center justify-center gap-3">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
            <span>SISTEMA 100% OPERACIONAL</span>
          </h2>

          <p className="text-sm text-slate-200 font-sans leading-relaxed bg-slate-950/80 p-5 rounded-2xl border border-amber-500/40 shadow-inner">
            Todos os 7 módulos do ecossistema UNO operam em sincronia plena. Nenhuma notificação urgente ou pendência de manutenção registrada no circuito.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300">
              <div className="text-[10px] text-slate-400">Consenso</div>
              <div className="text-lg font-bold">100%</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 text-amber-300">
              <div className="text-[10px] text-slate-400">Matriz Elétrica</div>
              <div className="text-lg font-bold">100% Solar</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-sky-500/40 text-sky-300">
              <div className="text-[10px] text-slate-400">Paz Comunitária</div>
              <div className="text-lg font-bold">Plena</div>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> NÓS S.A. / UNO — 2. Sistema Liberado
        </span>
        <span className="text-emerald-400 font-bold">Aparência UNO • Brilho Dourado Completo</span>
      </div>

    </div>
  );
};
