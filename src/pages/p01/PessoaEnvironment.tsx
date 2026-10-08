import React from 'react';
import { User, ShieldCheck, Sparkles, Activity, Lock } from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface PessoaEnvironmentProps {
  onNavigate: (view: P01ViewId) => void;
}

export const PessoaEnvironment: React.FC<PessoaEnvironmentProps> = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b06_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Banner */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)]">
            <User className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>Ambiente Pessoa</span>
              <span className="text-amber-400 font-mono text-xl">◎</span>
              <span className="text-amber-300 font-sans text-xl tracking-wider">Perfil & Soberania</span>
            </h1>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Perfil Individual, Proteção de Dados e Assistência Pessoal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-2xl border border-emerald-500/50">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> 🟢 Dados Protegidos & Soberanos
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-20 my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-amber-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-amber-300 font-mono text-lg">
              UD
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">Perfil Soberano</h3>
              <p className="text-xs text-amber-300">Morador Cadastrado</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Status da Conta:</span>
              <span className="text-emerald-400 font-bold">Ativa & Protegida</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Nível de Permissão:</span>
              <span className="text-amber-300 font-bold">Residente Completo</span>
            </div>
          </div>
        </div>

        {/* Biometric & Telemetry Card */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-amber-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-amber-200 text-sm font-sans flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-400" /> ÍNDICE DE BEM-ESTAR PESSOAL
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
              <span className="text-slate-400">Indicador de Vitalidade:</span>
              <span className="text-emerald-400 font-bold">99.4% Ótima</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
              <span className="text-slate-400">Assistente EVA:</span>
              <span className="text-amber-300 font-bold">Sincronizada</span>
            </div>
          </div>
        </div>

        {/* Data Security Card */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border-2 border-amber-500/50 backdrop-blur-xl space-y-4 shadow-xl">
          <h3 className="font-extrabold text-amber-200 text-sm font-sans flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" /> SOBERANIA DE DADOS
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Seus dados pessoais permanecem estritamente sob sua custódia e criptografia. Nenhuma informação é compartilhada sem sua permissão.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-semibold">
          <Sparkles className="w-4 h-4" /> Ambiente Pessoa — UNO
        </span>
        <span className="text-amber-400 font-semibold">Soberania & Cuidado Pessoal</span>
      </div>

    </div>
  );
};

export default PessoaEnvironment;
