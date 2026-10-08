import React from 'react';
import { Hammer, Cpu, Layers, CheckSquare, Wrench, Trees } from 'lucide-react';

export const ProducaoView: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-600/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-amber-600/20 text-amber-300 border border-amber-500/40 shadow-lg">
            <Hammer className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-600/20 text-amber-300 border border-amber-600/40">
                MÓDULO PRODUÇÃO / TRABALHO — DIREITO SUPERIOR
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-amber-100 tracking-tight">
              Oficina Sustentável & Trabalho
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Estética artesanal em madeira reflorestada integrada a manufatura digital e automação de alta precisão.
            </p>
          </div>
        </div>
      </div>

      {/* Production Dashboards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-amber-200 flex items-center gap-2">
            <Trees className="w-5 h-5 text-amber-400" /> Marcenaria Ecológica CNC
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Produção de mobília modular e componentes estruturais reutilizando madeira certificada e polímeros reciclados.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-300">
            🔨 Projeto Ativo: Mesas Ergonômicas para a Escola Comunitária
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-amber-200 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" /> Laboratório de Prototipagem Tech
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Impressoras 3D de argila e filamento bioplástico para produção rápida de peças de reposição e hardware livre.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-sky-300">
            🖨️ Status: 4 Impressoras operando a 100% de capacidade
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-amber-200 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-amber-400" /> Fila de Tarefas Comunitárias
          </h3>
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
              <span>Fixação de Suportes Solares</span>
              <span className="text-emerald-400 font-bold">Concluído</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
              <span>Montagem de Sensores de Umidade</span>
              <span className="text-amber-400 font-bold">Em Andamento</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
