import React from 'react';
import { Sprout, Sun, Droplets, Leaf, Activity, PieChart } from 'lucide-react';

export const RecursosView: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg">
            <Sprout className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                MÓDULO RECURSOS / ABASTECIMENTO — ESQUERDO INFERIOR
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-emerald-100 tracking-tight">
              Fazenda, Estufas & Matriz Energética Solar
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Visual orgânico e natural com tecnologia agroecológica, captação pluvial e microgeração fotovoltaica.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-emerald-200 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-emerald-400" /> Estufas Hidropônicas Verticais
          </h3>
          <p className="text-xs text-slate-300">
            Cultivo contínuo de hortaliças, ervas medicinais e grãos ecológicos com uso de água 90% recirculada.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
            🥬 Colheita Prevista: 340 kg de hortaliças nesta sexta-feira
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-emerald-200 flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" /> Parques de Painéis Solares
          </h3>
          <p className="text-xs text-slate-300">
            Matriz limpa de captação solar que alimenta todos os 7 módulos da comunidade com zero emissões.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-300">
            ☀️ Geração Solar Atual: 1.450 kW/h (Baterias em 98%)
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-emerald-200 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-sky-400" /> Reservatório de Água & Filtragem
          </h3>
          <p className="text-xs text-slate-300">
            Captação de águas pluviais com filtragem multinível por brita, areia e raios UV.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-sky-300">
            💧 Nível do Reservatório: 88.000 Litros (Pressão Estável)
          </div>
        </div>

      </div>

    </div>
  );
};
