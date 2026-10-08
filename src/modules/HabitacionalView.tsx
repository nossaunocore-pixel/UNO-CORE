import React, { useState } from 'react';
import { alertService } from '../services/alertService';
import { HologramAlert } from '../components/HologramAlert';
import { 
  Home, 
  Smartphone, 
  Zap, 
  Wind, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Radio
} from 'lucide-react';

export const HabitacionalView: React.FC = () => {
  const [showPersonalHologram, setShowPersonalHologram] = useState(true);
  const alerts = alertService.getAlerts();
  const personalAlert = alerts.find(a => a.scope === 'personal') || alerts[0];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Module Title Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg">
            <Home className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                MÓDULO HABITACIONAL — ESQUERDO SUPERIOR
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-amber-100 tracking-tight">
              Residências & Lar Comunitário
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Espaço aconchegante, sustentável e acolhedor. Integração de residências com holograma pessoal e gestão doméstica.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowPersonalHologram(true)}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-lg shadow-amber-950/50 cursor-pointer"
        >
          <Smartphone className="w-4 h-4" />
          📱 ABRIR HOLOGRAMA PESSOAL
        </button>
      </div>

      {/* Grid of Residential Telemetry */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Personal Residence Widget */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-amber-200 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Unidade Habitacional #104
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Confortável
            </span>
          </div>
          <div className="space-y-3 text-xs font-mono">
            <div className="flex justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" /> Consumo Energético:
              </span>
              <span className="text-amber-300 font-bold">1.2 kWh / dia</span>
            </div>
            <div className="flex justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-sky-400" /> Qualidade do Ar Interno:
              </span>
              <span className="text-sky-300 font-bold">99.4% Purificado</span>
            </div>
          </div>
        </div>

        {/* Hologram Status Card */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-amber-200 flex items-center gap-2">
              <Radio className="w-5 h-5 text-amber-400 animate-pulse" /> Holograma Pessoal Doméstico
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300">
              Sincronizado
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            O holograma pessoal projeta avisos comunitários diretamente na sala de estar ou dispositivo pessoal do morador, com os mesmos níveis de urgência do holograma central.
          </p>
        </div>

        {/* Community Board */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-amber-200 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" /> Rede de Vizinhança
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-sky-500/20 text-sky-300">
              42 Vizinhos
            </span>
          </div>
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              🤝 <strong>Troca de Ferramentas:</strong> Furadeira solar disponível com Gabriel (#108).
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              🌱 <strong>Horta Comunitária:</strong> Mutirão de plantio agendado para sábado às 09:00.
            </div>
          </div>
        </div>

      </div>

      {/* Personal Hologram Display trigger */}
      {showPersonalHologram && personalAlert && (
        <HologramAlert
          alert={personalAlert}
          mode="personal"
          onClose={() => setShowPersonalHologram(false)}
        />
      )}

    </div>
  );
};
