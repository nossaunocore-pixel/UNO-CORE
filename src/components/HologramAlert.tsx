import React from 'react';
import { AlertItem, AlertSeverity } from '../types';
import { alertService } from '../services/alertService';
import { audioService } from '../services/audioService';
import { ShieldAlert, AlertTriangle, Info, CheckCircle2, Radio, Bell } from 'lucide-react';

interface HologramAlertProps {
  alert: AlertItem | null;
  mode?: 'central' | 'personal' | 'modal';
  onClose?: () => void;
}

export const HologramAlert: React.FC<HologramAlertProps> = ({ alert, mode = 'modal', onClose }) => {
  if (!alert) return null;

  const isUrgent = alert.severity === 'urgent';
  const isUnconfirmedUrgent = isUrgent && !alert.confirmed;

  const getSeverityBadge = (severity: AlertSeverity) => {
    switch (severity) {
      case 'urgent':
        return {
          label: '🔴 URGENTE',
          bg: 'bg-red-950/90 border-red-500/80 text-red-100',
          glow: 'shadow-[0_0_35px_rgba(239,68,68,0.6)]',
          icon: <ShieldAlert className="w-6 h-6 text-red-400 animate-pulse" />
        };
      case 'warning':
        return {
          label: '🟡 ATENÇÃO',
          bg: 'bg-amber-950/80 border-amber-500/70 text-amber-100',
          glow: 'shadow-[0_0_25px_rgba(245,158,11,0.5)]',
          icon: <AlertTriangle className="w-5 h-5 text-amber-400" />
        };
      case 'important':
        return {
          label: '🔵 IMPORTANTE',
          bg: 'bg-sky-950/80 border-sky-500/70 text-sky-100',
          glow: 'shadow-[0_0_25px_rgba(56,189,248,0.4)]',
          icon: <Info className="w-5 h-5 text-sky-400" />
        };
      default:
        return {
          label: '🟢 COMUNICADO',
          bg: 'bg-emerald-950/80 border-emerald-500/70 text-emerald-100',
          glow: 'shadow-[0_0_25px_rgba(16,185,129,0.4)]',
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        };
    }
  };

  const config = getSeverityBadge(alert.severity);

  const handleConfirm = () => {
    alertService.confirmAlert(alert.id);
    if (onClose) onClose();
  };

  const handleDismissNonUrgent = () => {
    if (isUnconfirmedUrgent) {
      audioService.playNotificationSound('urgent');
      return;
    }
    if (onClose) onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isUnconfirmedUrgent ? 'bg-black/85 backdrop-blur-md' : 'bg-black/50 backdrop-blur-sm'}`}>
      <div className={`relative w-full max-w-lg rounded-3xl border p-6 text-slate-100 transition-all duration-300 ${config.bg} ${config.glow} ${isUnconfirmedUrgent ? 'border-2 border-red-500 animate-pulse-glow' : 'border-amber-500/40'}`}>
        
        {/* Header Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-950 border border-amber-400/60 text-amber-300 text-xs font-mono font-bold tracking-wider flex items-center gap-2 shadow-xl">
          <Radio className="w-3.5 h-3.5 animate-ping text-amber-400" />
          NOTIFICAÇÃO DA PLATAFORMA UNO
        </div>

        <div className="mt-2 flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex-shrink-0">
            {config.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold font-mono tracking-wider border ${config.bg}`}>
                {config.label}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug">
              {alert.title}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-sans bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80 mb-4">
              {alert.message}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          {isUnconfirmedUrgent ? (
            <div className="w-full flex flex-col gap-2">
              <div className="text-xs text-red-300 font-medium text-center animate-pulse">
                ⚠️ CONFIRMAÇÃO DE LEITURA NECESSÁRIA PARA PROSSEGUIR
              </div>
              <button
                onClick={handleConfirm}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-900/50 border border-red-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldAlert className="w-5 h-5" />
                CONFIRMAR LEITURA
              </button>
            </div>
          ) : (
            <>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5 text-amber-400" />
                Origem: {alert.createdBy || 'Sistema UNO'}
              </div>
              <button
                onClick={handleDismissNonUrgent}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
              >
                Fechar Notificação
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default HologramAlert;
