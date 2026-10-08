import React, { useState } from 'react';
import { ModuleId, AlertSeverity } from '../types';
import { alertService } from '../services/alertService';
import { 
  Building2, 
  MapPin, 
  Bell, 
  PlusCircle, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowLeft,
  Flame,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  currentModule: ModuleId | 'map';
  onReturnToMap: () => void;
  unconfirmedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentModule,
  onReturnToMap,
  unconfirmedCount
}) => {
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
      createdBy: 'Simulação Operacional'
    });
    setTitle('');
    setMessage('');
    setShowSimulateModal(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-slate-950/90 border-b border-amber-500/30 backdrop-blur-xl px-6 flex items-center justify-between">
      
      {/* Brand & Left Navigation */}
      <div className="flex items-center gap-4">
        {currentModule !== 'map' ? (
          <button
            onClick={onReturnToMap}
            className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-950/40"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLTAR AO MAPA CENTRAL
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-300 text-slate-950 shadow-md shadow-amber-500/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-amber-200 tracking-wide font-sans flex items-center gap-2">
                NÓS S.A. / UNO
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> AFS ATIVO 🟢
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" /> Circuito Sensorial & Comunitário
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Telemetry Status Indicators */}
      <div className="hidden md:flex items-center gap-4 font-mono text-xs text-slate-300">
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <Eye className="w-4 h-4 text-amber-400" />
          <span>Núcleos: <strong className="text-amber-300">5 Chaves Ligadas</strong></span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Rede Elétrica: <strong className="text-amber-300">99.8% OK</strong></span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Freio Inteligente: <strong className="text-emerald-300">Plano 1 Ativo</strong></span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowSimulateModal(true)}
          className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 text-amber-400" />
          SIMULAR ALERTA
        </button>

        {unconfirmedCount > 0 && (
          <div className="px-3 py-1.5 rounded-xl bg-red-950/80 border border-red-500/80 text-red-300 text-xs font-mono font-bold flex items-center gap-2 animate-pulse">
            <Bell className="w-4 h-4 text-red-400" />
            <span>{unconfirmedCount} URGENTE PENDE</span>
          </div>
        )}
      </div>

      {/* Simulation Modal */}
      {showSimulateModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 w-full max-w-md text-slate-100 shadow-2xl">
            <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <PlusCircle className="w-5 h-5" /> Disparar Alerta Holográfico
            </h3>
            <form onSubmit={handleCreateAlert} className="space-y-4 text-sm font-sans">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Título do Alerta</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: 🚨 URGENTE: Manutenção de Água"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Mensagem do Holograma</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descrição detalhada das instruções..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-400 h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Nível de Urgência & Cores</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as AlertSeverity)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-amber-400 font-mono text-xs"
                >
                  <option value="urgent">🔴 URGENTE (Vermelho Pulsante + Trava Obrigatória)</option>
                  <option value="warning">🟡 ATENÇÃO (Amarelo)</option>
                  <option value="important">🔵 IMPORTANTE (Azul)</option>
                  <option value="general">🟢 GERAL (Verde)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowSimulateModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono"
                >
                  Disparar Holograma
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </header>
  );
};
