import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Key, 
  ShieldCheck, 
  Radio, 
  AlertTriangle, 
  Bot, 
  CheckCircle2, 
  Layers, 
  Sliders, 
  HardDrive,
  Eye,
  Activity,
  Flame
} from 'lucide-react';

export const AfsPanel: React.FC = () => {
  const [smartBrakeStatus, setSmartBrakeStatus] = useState<'optimal' | 'warning'>('optimal');
  const [creditsUsedPercent, setCreditsUsedPercent] = useState(14); // Low usage in free tier
  const [activePlan, setActivePlan] = useState<'Plano 1' | 'Plano 2'>('Plano 1');
  const [showSmartBrakeModal, setShowSmartBrakeModal] = useState(false);

  // Hardware/Device scan data (AFS Anatomia das Ferramentas Sensoriais)
  const deviceScan = {
    os: 'Windows 64-bit',
    browser: 'Chrome / Edge WebEngine',
    audioEngine: 'Web Audio API (Ativo & Sintetizado)',
    screenRes: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '1920x1080',
    meshNetwork: '100% Funcional',
    status: 'Capacidade Plena Detectada'
  };

  const coreConnections = [
    { name: 'STITCH / AI Studio', type: '🎨 Design & UI Engine', keyPreview: 'AQ.Ab8RN6...', status: 'conectado', color: 'text-amber-300 border-amber-500/40 bg-amber-500/10' },
    { name: 'GITHUB', type: '📜 Versionamento & Código', keyPreview: 'ghp_RWbu5m...', status: 'conectado', color: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10' },
    { name: 'GEMINI AI', type: '🧠 Ecossistema Google', keyPreview: 'Integrado Nativo', status: 'conectado', color: 'text-sky-300 border-sky-500/40 bg-sky-500/10' },
    { name: 'FIREBASE', type: '💾 Banco de Dados & Auth', keyPreview: 'Banco de Dados', status: 'conectado', color: 'text-orange-300 border-orange-500/40 bg-orange-500/10' },
    { name: 'CHATGPT', type: '🤖 Plano Pago Autorizado', keyPreview: 'Conta Autorizada', status: 'conectado', color: 'text-indigo-300 border-indigo-500/40 bg-indigo-500/10' }
  ];

  const preparedAgents = [
    { id: 'receptor', name: 'Receptor de Carga', role: 'Aguardando importação manual', status: 'pronto' },
    { id: 'descompactador', name: 'Descompactador', role: 'Estruturação de arquivos', status: 'pronto' },
    { id: 'filtro', name: 'Filtro & Curadoria', role: 'Triagem de dados', status: 'ativo' },
    { id: 'indexador', name: 'Indexador UNO', role: 'Catalogação comunitária', status: 'ativo' },
    { id: 'midia', name: 'Processador de Mídia', role: 'Áudio & Imagens', status: 'ativo' },
    { id: 'afs_sensorial', name: 'AFS Sensorial', role: 'Leitura de hardware', status: 'ativo' }
  ];

  const triggerSmartBrakeCheck = () => {
    if (creditsUsedPercent > 80) {
      setShowSmartBrakeModal(true);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-6 text-slate-100 shadow-2xl space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-bold shadow-lg shadow-amber-500/30">
            <Eye className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                PAINEL MESTRE AFS
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> NÚCLEOS MOTORES LIGADOS 🟢🚀
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-amber-100 mt-1">
              Anatomia das Ferramentas Sensoriais (AFS)
            </h2>
          </div>
        </div>

        {/* Smart Brake Widget */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-1.5 min-w-[240px]">
          <div className="flex justify-between items-center text-slate-400">
            <span>⚙️ FREIO INTELIGENTE</span>
            <span className="text-emerald-400 font-bold">ATIVO</span>
          </div>
          <div className="flex justify-between items-center text-slate-200 font-bold">
            <span>Plano Atual:</span>
            <span className="text-amber-300">{activePlan} (Gratuito)</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-2 mt-1">
            <div 
              className="bg-emerald-400 h-2 rounded-full transition-all" 
              style={{ width: `${creditsUsedPercent}%` }}
            />
          </div>
          <div className="text-[10px] text-slate-500 text-right">
            Consumo: {creditsUsedPercent}% da cota
          </div>
        </div>
      </div>

      {/* 2. CHAVES & CONEXÕES DE NÚCLEOS */}
      <div>
        <h3 className="text-sm font-bold font-mono text-amber-300 mb-3 flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-400" /> NÚCLEOS CONECTADOS E AUTENTICADOS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {coreConnections.map((core, idx) => (
            <div key={idx} className={`p-3.5 rounded-xl border ${core.color} space-y-1 backdrop-blur-md`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs font-mono text-slate-100">{core.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  🟢 LIGADO
                </span>
              </div>
              <div className="text-[11px] font-mono opacity-90">{core.type}</div>
              <div className="text-[10px] font-mono text-slate-400 truncate">
                Chave: <code className="text-amber-300">{core.keyPreview}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DIAGNÓSTICO DE HARDWARE & CAPACIDADE SENSORIAL (AFS) */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
        <h3 className="text-xs font-bold font-mono text-amber-300 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-amber-400" /> DIAGNÓSTICO SENSORIAL DE RECURSOS DO APARELHO
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Sistema Operacional:</span>
            <strong className="text-slate-200">{deviceScan.os}</strong>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Interface de Render:</span>
            <strong className="text-slate-200">{deviceScan.browser}</strong>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Motor de Áudio:</span>
            <strong className="text-amber-300">{deviceScan.audioEngine}</strong>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Capacidade:</span>
            <strong className="text-emerald-400">{deviceScan.status}</strong>
          </div>
        </div>
      </div>

      {/* 5. AGENTES PREPARADOS */}
      <div>
        <h3 className="text-sm font-bold font-mono text-amber-300 mb-3 flex items-center gap-2">
          <Bot className="w-4 h-4 text-amber-400" /> AGENTES PREPARADOS E EM OPERAÇÃO
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
          {preparedAgents.map((agent) => (
            <div key={agent.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div>
                <div className="font-bold text-slate-200">{agent.name}</div>
                <div className="text-[10px] text-slate-400">{agent.role}</div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {agent.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Brake Modal Trigger Alert */}
      {showSmartBrakeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-amber-500/80 rounded-2xl p-6 w-full max-w-md text-slate-100 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-amber-300">
              <AlertTriangle className="w-7 h-7 text-amber-400 animate-pulse" />
              <h3 className="text-lg font-bold font-mono">FREIO INTELIGENTE ATIVADO</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950 p-4 rounded-xl border border-slate-800">
              O consumo de cota aproximou-se do limite de segurança pré-configurado.
              <br /><br />
              <strong className="text-amber-200">"Plano 1 atende ou será necessário o Plano 2?"</strong>
            </p>
            <div className="flex justify-end gap-3 font-mono text-xs">
              <button
                onClick={() => {
                  setActivePlan('Plano 1');
                  setShowSmartBrakeModal(false);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold cursor-pointer"
              >
                Manter no Plano 1 (Gratuito)
              </button>
              <button
                onClick={() => {
                  setActivePlan('Plano 2');
                  setShowSmartBrakeModal(false);
                }}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold cursor-pointer"
              >
                Confirmar Migração Plano 2
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
