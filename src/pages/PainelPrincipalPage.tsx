import React, { useState } from 'react';
import { 
  Radio, 
  Key, 
  Zap, 
  Brain, 
  AlertTriangle, 
  PlusCircle, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert,
  Flame,
  Layers,
  Compass
} from 'lucide-react';
import { alertService } from '../services/alertService';
import { AlertSeverity } from '../types';

export const PainelPrincipalPage: React.FC = () => {
  const [showSimulateModal, setShowSimulateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertSeverity>('urgent');

  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message) return;
    alertService.createAlert({
      title,
      message,
      severity,
      createdBy: 'Painel Principal UNO'
    });
    setTitle('');
    setMessage('');
    setShowSimulateModal(false);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-120px)] bg-[#030712] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE BACKGROUND & FLOATING GLOW RAYS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 TOP BAR */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-cyan-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)]">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>NÓS S.A. / UNO</span>
              <span className="text-amber-400 text-xl font-mono">◎</span>
              <span className="text-cyan-400 font-mono text-xl tracking-wider drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]">
                PAINEL PRINCIPAL
              </span>
            </h1>
            <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Visão Sensorial & Holograma Ativo
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-red-950/80 border-2 border-red-500 text-red-200 text-xs font-mono font-extrabold flex items-center gap-2.5 shadow-[0_0_30px_rgba(239,68,68,0.7)] animate-pulse">
            <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
            <span>⚠️ 1 URGENTE PENDE</span>
          </div>
        </div>

      </div>

      {/* 📐 MAIN BODY GRID */}
      <div className="relative z-20 my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT STATUS LIST */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(3,7,18,0.8)] space-y-4">
            
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> TELEMETRIA DO SISTEMA
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>📡 Circuito Sensorial</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Ativo
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Key className="w-4 h-4 text-amber-400" />
                <span>🗝️ Núcleos: 5 Chaves</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 5/5 Conectadas
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>⚡ Rede Elétrica</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 99.8% OK
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>🧠 Freio Inteligente</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Plano 1 Ativo
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowSimulateModal(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(245,158,11,0.5)] border border-amber-300 transition-all cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                SIMULAR ALERTA
              </button>
            </div>

          </div>
        </div>

        {/* CENTER HOLOGRAM */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center relative min-h-[420px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-amber-500/30 shadow-[0_0_80px_rgba(245,158,11,0.3)] animate-ping opacity-30" />
            <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-2 border-cyan-400/40 shadow-[0_0_60px_rgba(6,182,212,0.4)] animate-pulse" />
          </div>

          <div className="relative z-30 p-8 md:p-10 rounded-3xl bg-slate-900/70 border-2 border-amber-500/80 shadow-[0_0_60px_rgba(245,158,11,0.5)] backdrop-blur-2xl max-w-xl text-center space-y-4 animate-float">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 text-xs font-mono font-extrabold tracking-wider shadow-lg">
              <Radio className="w-4 h-4 animate-ping text-amber-400" />
              HOLOGRAMA CENTRAL NÓS S.A. / UNO
            </div>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center justify-center gap-2">
              <ShieldAlert className="w-8 h-8 text-red-500 animate-pulse" />
              <span>1 URGENTE PENDE</span>
            </h2>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-red-500/50 text-left text-xs font-mono text-red-200 leading-relaxed">
              <div className="text-amber-400 font-bold mb-1">🚨 ALERTA CRÍTICO:</div>
              Flutuação de pressão detectada no reservatório hídrico do Módulo Recursos. Leitura e confirmação obrigatórias solicitadas.
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold">
          <Compass className="w-4 h-4" /> NÓS S.A. / UNO — 1. Painel Principal
        </span>
        <span className="text-cyan-400 font-bold">Aparência UNO • Flutuação Suspensa</span>
      </div>

      {/* MODAL */}
      {showSimulateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 w-full max-w-md text-slate-100 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold font-mono text-amber-300 flex items-center gap-2">
              <PlusCircle className="w-5 h-5" /> Disparar Alerta Holográfico
            </h3>
            <form onSubmit={handleCreateAlert} className="space-y-4 text-sm font-sans">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Título</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: 🚨 URGENTE: Teste"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-slate-100 text-xs font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Mensagem</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descrição..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-slate-100 h-24 text-xs font-mono"
                  required
                />
              </div>

              <div className="pt-2 flex justify-end gap-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setShowSimulateModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold"
                >
                  Disparar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
