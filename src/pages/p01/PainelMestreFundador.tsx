import React from 'react';
import { 
  Key, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Award,
  Bot
} from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface PainelMestreFundadorProps {
  onNavigate: (view: P01ViewId) => void;
}

export const PainelMestreFundador: React.FC<PainelMestreFundadorProps> = () => {

  const permissionRules = [
    { rule: 'Segurança & Criptografia Soberana', status: 'Aprovado', detail: 'Sem exposição de dados sensíveis' },
    { rule: 'Integridade dos Dados do Sistema', status: 'Aprovado', detail: 'Transparência em todas as operações' },
    { rule: 'Isolamento de Acesso & Permissões', status: 'Aprovado', detail: 'Acesso às áreas autorizadas' },
    { rule: 'Autoridade de Gestão do Fundador', status: 'Reconhecido', detail: 'Acesso mestre concedido' }
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-6 md:p-10 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b06_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Banner */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold shadow-[0_0_35px_rgba(245,158,11,0.6)]">
            <Key className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>Painel do Fundador</span>
              <span className="text-amber-400 font-mono text-xl">◎</span>
              <span className="text-amber-300 font-sans text-xl tracking-wider text-glow-gold">
                Gestão Mestre
              </span>
            </h1>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Controle de Acesso Especial & Verificação da Plataforma
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/80 px-4 py-2 rounded-2xl border-2 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold">
          <Award className="w-4 h-4 text-amber-400" /> Acesso Mestre Autorizado
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-20 my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* PERMISSION RULES VERIFIER (7 COLS) */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/80 border-2 border-amber-400/80 shadow-[0_0_60px_rgba(245,158,11,0.4)] backdrop-blur-2xl space-y-6">
          
          <h2 className="text-xl font-extrabold text-amber-200 flex items-center gap-2 font-sans">
            <ShieldCheck className="w-6 h-6 text-emerald-400" /> VERIFICAÇÃO DE DIRETRIZES DO SISTEMA
          </h2>

          <div className="space-y-3">
            {permissionRules.map((rule, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-100">{rule.rule}</div>
                  <div className="text-[11px] text-slate-400">{rule.detail}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {rule.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ORCHESTRATOR & AGENT SUMMARY (5 COLS) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/40 backdrop-blur-xl space-y-4 shadow-xl">
            <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
              <Bot className="w-4 h-4 text-cyan-400" /> RELATÓRIO DE MONITORAMENTO
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              O ecossistema opera em sincronia constante. O controle final de autorizações permanece resguardado pelo **Fundador**.
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Interface Global:</span>
                <span className="text-emerald-400 font-bold">100% Estável</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Ambientes Integrados:</span>
                <span className="text-emerald-400 font-bold">4 Operacionais</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Assistente EVA:</span>
                <span className="text-emerald-400 font-bold">Ativa</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-semibold">
          <Sparkles className="w-4 h-4" /> Painel do Fundador — UNO
        </span>
        <span className="text-amber-400 font-semibold">Acesso Especial Mestre</span>
      </div>

    </div>
  );
};

export default PainelMestreFundador;
