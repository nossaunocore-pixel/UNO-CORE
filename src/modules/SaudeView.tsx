import React from 'react';
import { ShieldPlus, HeartPulse, Activity, Stethoscope, ShieldAlert, Ambulance } from 'lucide-react';

export const SaudeView: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-lg">
            <ShieldPlus className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">
                MÓDULO SEGURANÇA & SAÚDE — DIREITO INFERIOR
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-sky-100 tracking-tight">
              Hospital Torre Clean & Proteção Comunitária
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Arquitetura hospitalar em torre, revestida em tons branco-alvo e azul sanitário confiável.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-sky-200 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-sky-400" /> Triagem & Telemedicina Express
          </h3>
          <p className="text-xs text-slate-300">
            Atendimento médico humanizado integrado a monitores biométricos das residências do Módulo Habitacional.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-sky-300">
            🏥 Fila de Espera Atual: 0 Minutos (Sem Espera)
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-sky-200 flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-emerald-400" /> Índice de Bem-Estar Vital
          </h3>
          <p className="text-xs text-slate-300">
            Acompanhamento preventivo de nutrição, saúde mental e atividades físicas da comunidade.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
            💚 Indicador de Saúde Geral: 99.2% Ótimo
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-sky-200 flex items-center gap-2">
            <Ambulance className="w-5 h-5 text-amber-400" /> Resposta a Emergências & Defesa
          </h3>
          <p className="text-xs text-slate-300">
            Equipe de primeiros socorros em prontidão 24 horas com resposta em até 2 minutos em qualquer módulo.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-300">
            🛡️ Status do Esquadrão: Alerta Verde / Prontidão Total
          </div>
        </div>

      </div>

    </div>
  );
};
