import React, { useState } from 'react';
import { ServiceCostItem } from '../types';
import { alertService } from '../services/alertService';
import { AfsPanel } from '../components/AfsPanel';
import { 
  Building2, 
  ShieldCheck, 
  Vote, 
  DollarSign, 
  Radio, 
  CheckCircle, 
  TrendingUp, 
  Eye,
  Lock
} from 'lucide-react';

export const CentroView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'afs' | 'governanca' | 'holograma' | 'custos'>('afs');

  const costReport: ServiceCostItem[] = [
    {
      name: 'Firebase Firestore DB',
      tier: 'Spark (Gratuito)',
      usageQuota: '50.000 leituras/dia, 20.000 escritas/dia',
      estimatedCost: 'R$ 0,00',
      status: 'optimal'
    },
    {
      name: 'STITCH / AI Studio API',
      tier: 'Chave Conectada (AQ.Ab8R...)',
      usageQuota: 'Quota Padrão Conectada',
      estimatedCost: 'R$ 0,00',
      status: 'active'
    },
    {
      name: 'GitHub API Integration',
      tier: 'Token Autenticado (ghp_RWbu...)',
      usageQuota: '5.000 requisições / hora',
      estimatedCost: 'R$ 0,00',
      status: 'active'
    },
    {
      name: 'Firebase Authentication',
      tier: 'Standard Free',
      usageQuota: '50.000 usuários ativos mensais (MAU)',
      estimatedCost: 'R$ 0,00',
      status: 'optimal'
    },
    {
      name: 'Web Client Hosting',
      tier: 'Firebase / Vercel Free Tier',
      usageQuota: '100 GB Largura de Banda / mês',
      estimatedCost: 'R$ 0,00',
      status: 'optimal'
    },
    {
      name: 'Sintetizador de Áudio (Web Audio API)',
      tier: 'Nativo Browser Client-side',
      usageQuota: 'Ilimitado (Processamento local)',
      estimatedCost: 'R$ 0,00',
      status: 'active'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Module Title Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-300 text-slate-950 shadow-xl shadow-amber-500/30">
            <Building2 className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                HUB CENTRAL — TOPO DO MAPA
              </span>
              <span className="text-xs text-amber-400 font-mono flex items-center gap-1">
                <Lock className="w-3 h-3" /> NÓS S.A. / UNO
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-amber-100 tracking-tight">
              Edifício Central NÓS S.A. / UNO
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Estrutura imponente, branca e dourada, revestida em vidro reflexivo com feixe de luz permanente no topo.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30 font-mono text-xs">
          <div>
            <div className="text-slate-400">Status AFS</div>
            <div className="text-xl font-bold text-emerald-400">🟢 LIGADO</div>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div>
            <div className="text-slate-400">Consenso Comunitário</div>
            <div className="text-xl font-bold text-amber-300">99.7%</div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3 font-mono text-sm overflow-x-auto">
        <button
          onClick={() => setActiveTab('afs')}
          className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold flex items-center gap-2 ${
            activeTab === 'afs'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Eye className="w-4 h-4 text-amber-400" /> 👁️ PAINEL MESTRE AFS
        </button>
        <button
          onClick={() => setActiveTab('governanca')}
          className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold flex items-center gap-2 ${
            activeTab === 'governanca'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Vote className="w-4 h-4" /> Governança & Propostas
        </button>
        <button
          onClick={() => setActiveTab('holograma')}
          className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold flex items-center gap-2 ${
            activeTab === 'holograma'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Radio className="w-4 h-4" /> Transmissor Holográfico
        </button>
        <button
          onClick={() => setActiveTab('custos')}
          className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold flex items-center gap-2 ${
            activeTab === 'custos'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <DollarSign className="w-4 h-4" /> Orçamento & Custos APIs
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'afs' && (
        <AfsPanel />
      )}

      {activeTab === 'governanca' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" /> Diretrizes de Governança UNO
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              O Hub Central NÓS S.A. coordena a estabilidade institucional, a transparência distributiva e o equilíbrio entre os 6 módulos periféricos através de votações ponderadas em tempo real.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Propostas Aprovadas neste mês:</span>
                <span className="text-amber-300 font-bold">14 deliberadas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tempo Médio de Resposta:</span>
                <span className="text-emerald-400 font-bold">1.2 horas</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" /> Índice Geral de Harmonia NÓS S.A.
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>Satisfação Habitacional</span>
                  <span className="text-amber-300">98%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full w-[98%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>Autonomia Agrícola & Recursos</span>
                  <span className="text-emerald-300">95%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>Balanço Econômico do Marketplace</span>
                  <span className="text-sky-300">99%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <div className="bg-sky-400 h-2 rounded-full w-[99%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'holograma' && (
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
            <Radio className="w-5 h-5 text-amber-400 animate-pulse" /> Emissor Holográfico Central (Mapa & Habitacional)
          </h3>
          <p className="text-sm text-slate-300">
            Transmite avisos visuais holográficos para todo o mapa central ou diretamente para os aparelhos de holograma pessoal nas residências.
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3 text-sm">
            <div className="text-xs font-mono text-amber-300 uppercase tracking-wide">
              Regras do Holograma:
            </div>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2">🟢 <strong>Geral</strong> — Mensagens informativas comunitárias. Fechamento normal.</li>
              <li className="flex items-center gap-2">🔵 <strong>Importante</strong> — Notificações de serviços e diretrizes. Fechamento normal.</li>
              <li className="flex items-center gap-2">🟡 <strong>Atenção</strong> — Avisos de manutenção e ações preventivas. Fechamento normal.</li>
              <li className="flex items-center gap-2 text-red-300">🔴 <strong>URGENTE</strong> — Borda pulsante + Som de alerta + <strong>Exige confirmação de leitura obrigatória para fechar!</strong></li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'custos' && (
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-400" /> Relatório de Custos Estimados de APIs e Infraestrutura
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Monitoramento contínuo para manter os custos mensais dentro da gratuidade acessível.
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 font-mono font-bold text-sm">
              CUSTO MENSAL ATUAL: R$ 0,00
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4">SERVIÇO / API</th>
                  <th className="py-3 px-4">PLANO / TIER</th>
                  <th className="py-3 px-4">COTA GRATUITA MENSAL</th>
                  <th className="py-3 px-4">ESTIMATIVA DE CUSTO</th>
                  <th className="py-3 px-4">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {costReport.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-950/50">
                    <td className="py-3.5 px-4 font-bold text-slate-200">{item.name}</td>
                    <td className="py-3.5 px-4 text-amber-300">{item.tier}</td>
                    <td className="py-3.5 px-4 text-slate-300">{item.usageQuota}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400">{item.estimatedCost}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 w-fit">
                        <CheckCircle className="w-3 h-3" /> {item.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
