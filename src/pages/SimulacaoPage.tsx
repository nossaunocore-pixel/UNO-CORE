import React, { useState } from 'react';
import { 
  PlusCircle, 
  Sparkles, 
  Volume2, 
  Radio, 
  ShieldAlert, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Compass,
  Sliders,
  Play
} from 'lucide-react';
import { alertService } from '../services/alertService';
import { audioService } from '../services/audioService';
import { AlertSeverity } from '../types';

export const SimulacaoPage: React.FC = () => {
  const [title, setTitle] = useState('🚨 ALERTA DE TESTE SENSORIAL UNO');
  const [message, setMessage] = useState('Instruções de teste disparadas via Ambiente de Simulação Limpo.');
  const [severity, setSeverity] = useState<AlertSeverity>('urgent');

  const handleTestAudio = (sev: AlertSeverity) => {
    audioService.playNotificationSound(sev);
  };

  const handleDispatchSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    alertService.createAlert({
      title,
      message,
      severity,
      createdBy: 'Ambiente de Simulação UNO'
    });
    alert('Holograma disparado com sucesso! Verifique a transmissão no Painel Principal.');
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-120px)] bg-[#030712] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f106_1px,transparent_1px),linear-gradient(to_bottom,#6366f106_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 TOP BAR */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-400 via-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <Sliders className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>NÓS S.A. / UNO</span>
              <span className="text-amber-400 text-xl font-mono">◎</span>
              <span className="text-indigo-400 font-mono text-xl tracking-wider drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]">
                AMBIENTE DE SIMULAÇÃO
              </span>
            </h1>
            <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Laboratório de Testes Holográficos & Sintetizador de Áudio
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-4 py-2 rounded-2xl bg-indigo-950/80 border border-indigo-500/60 text-indigo-200 text-xs font-mono font-bold">
            🧪 MODO TESTE ATIVO
          </span>
        </div>

      </div>

      {/* 📐 MAIN BODY: SIMULATION FORM & AUDIO TEST SUITE */}
      <div className="relative z-20 my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* DISPATCH FORM (7 COLS) */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/80 border-2 border-amber-500/60 shadow-[0_0_50px_rgba(245,158,11,0.3)] backdrop-blur-2xl space-y-6">
          
          <h2 className="text-xl font-extrabold text-amber-200 flex items-center gap-2 font-mono">
            <Radio className="w-5 h-5 text-amber-400 animate-pulse" /> SIMULAR DISPARO HOLOGRÁFICO
          </h2>

          <form onSubmit={handleDispatchSimulation} className="space-y-5 text-sm font-sans">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Título da Projeção Holográfica</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-3.5 text-slate-100 font-mono text-xs focus:outline-none focus:border-amber-400 shadow-inner"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Mensagem Comunitária</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-3.5 text-slate-100 font-mono text-xs focus:outline-none focus:border-amber-400 h-28 shadow-inner"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Nível de Urgência & Efeitos</label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value as AlertSeverity)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-3.5 text-slate-100 font-mono text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="urgent">🔴 URGENTE (Vermelho Pulsante + Som + Trava Obrigatória)</option>
                <option value="warning">🟡 ATENÇÃO (Amarelo Suave)</option>
                <option value="important">🔵 IMPORTANTE (Azul)</option>
                <option value="general">🟢 GERAL (Verde)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black font-mono text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.5)] border border-amber-300 transition-all cursor-pointer"
            >
              🚀 TRANSMITIR SIMULAÇÃO HOLOGRÁFICA
            </button>
          </form>

        </div>

        {/* AUDIO TEST SUITE (5 COLS) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl space-y-4">
            <h3 className="text-sm font-bold font-mono text-cyan-300 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-cyan-400" /> TESTE NATIVO DE ÁUDIO SENSORIAIS
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Sintetizador client-side Web Audio API sem dependências externas ou consumo de banda.
            </p>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => handleTestAudio('urgent')}
                className="w-full p-3 rounded-xl bg-red-950/80 border border-red-500 text-red-200 font-mono text-xs font-bold flex items-center justify-between hover:bg-red-900/80 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-red-400" /> Testar Som 🔴 URGENTE</span>
                <Play className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleTestAudio('warning')}
                className="w-full p-3 rounded-xl bg-amber-950/80 border border-amber-500 text-amber-200 font-mono text-xs font-bold flex items-center justify-between hover:bg-amber-900/80 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /> Testar Som 🟡 ATENÇÃO</span>
                <Play className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleTestAudio('general')}
                className="w-full p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 font-mono text-xs font-bold flex items-center justify-between hover:bg-emerald-900/80 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Testar Som 🟢 GERAL</span>
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> NÓS S.A. / UNO — 5. Ambiente de Simulação
        </span>
        <span className="text-indigo-400 font-bold">Aparência UNO • Teste Limpo & Ativo</span>
      </div>

    </div>
  );
};
