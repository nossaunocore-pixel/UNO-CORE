import React from 'react';
import { ShoppingBag, Store, Repeat, Tag, ShoppingCart, Coins } from 'lucide-react';

export const MarketplaceView: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-orange-950/40 to-slate-900 border border-orange-500/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-2xl bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-lg">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40">
                MÓDULO MARKETPLACE / COMÉRCIO — BASE ESQUERDA
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-orange-100 tracking-tight">
              Praça Aberta, Lojas & Comércio Vivo
            </h1>
            <p className="text-sm text-slate-300 font-sans mt-1">
              Ambiente vibrante para trocas comunitárias, artesanato local, suprimentos e serviços de proximidade.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-orange-200 flex items-center gap-2">
            <Store className="w-5 h-5 text-orange-400" /> Feira da Praça Principal
          </h3>
          <p className="text-xs text-slate-300">
            Bancadas abertas para comercialização e escambo de hortaliças frescas, pães artesanais e conservas.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-orange-300">
            🛒 18 Barracas ativas hoje na praça central
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-orange-200 flex items-center gap-2">
            <Repeat className="w-5 h-5 text-amber-400" /> Rede de Escambo & Banco de Horas
          </h3>
          <p className="text-xs text-slate-300">
            Sistema transparente de trocas de tempo de trabalho por produtos e serviços sem moedas fiduciárias externas.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-300">
            ⏳ Saldo Comunitário: 100% Auditável pelo Módulo Centro
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="font-bold text-orange-200 flex items-center gap-2">
            <Coins className="w-5 h-5 text-emerald-400" /> Carteira & Balanço Comunitário
          </h3>
          <p className="text-xs text-slate-300">
            Registro distribuído de transações com taxa zero para produtores e artesãos locais.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
            💳 Crédito Local UNO: 1.250 Créditos Disponíveis
          </div>
        </div>

      </div>

    </div>
  );
};
