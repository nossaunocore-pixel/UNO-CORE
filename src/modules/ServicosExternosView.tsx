import React from 'react';
import { RadioTower, Globe, Cable, Wifi, Server, Cpu } from 'lucide-react';

export const ServicosExternosView: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-lg">
            <RadioTower className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                MÓDULO SERVIÇOS EXTERNOS / CONEXÃO — BASE DIREITA
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-indigo-100 tracking-tight">
              Torres de Comunicação & Portais de Integração
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Conexão externa resiliente, antenas de satélite, pontes de dados e gateways de integração comunitária.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-indigo-200 flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" /> Ponte de Dados Externa & APIs
          </h3>
          <p className="text-xs text-slate-300">
            Conexão segura com redes públicas, serviços climáticos e bancos de dados externos.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-indigo-300">
            🌐 Latência Média: 12 ms (Link Direto Estável)
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-indigo-200 flex items-center gap-2">
            <Wifi className="w-5 h-5 text-amber-400" /> Malha Mesh de Comunicação
          </h3>
          <p className="text-xs text-slate-300">
            Rede sem fio comunitária descentralizada imune a quedas de operadoras tradicionais.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-300">
            📡 Cobertura Mesh: 100% dos 7 Módulos Cobertos
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-indigo-200 flex items-center gap-2">
            <Server className="w-5 h-5 text-emerald-400" /> Servidores de Backup Distribuídos
          </h3>
          <p className="text-xs text-slate-300">
            Armazenamento redundante criptografado em Firestore / Cloud Storage com backup automático.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
            💾 Cópia de Segurança: Atualizada há 2 minutos
          </div>
        </div>

      </div>

    </div>
  );
};
