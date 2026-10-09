import React, { useState } from 'react';
import { Activity, Bot, BrainCircuit, Database, FileUp, Gauge, GitBranch, KeyRound, ServerCog, ShieldCheck } from 'lucide-react';
import type { NavigateV6 } from '../types';

const tools = [
  { name: 'Gemini', role: 'Visão e contexto', status: 'configuração detectada', icon: BrainCircuit },
  { name: 'GPT', role: 'Estrutura e decisão', status: 'configuração a validar', icon: Bot },
  { name: 'Supabase', role: 'Dados do usuário', status: 'conectividade a testar', icon: Database },
  { name: 'Firebase', role: 'Identidade e auditoria', status: 'conectividade a testar', icon: ShieldCheck },
  { name: 'GitHub', role: 'Código e versionamento', status: 'conectado', icon: GitBranch },
  { name: 'Vercel', role: 'Publicação e funções', status: 'projeto vinculado', icon: ServerCog }
];

export function MasterPanelV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [command, setCommand] = useState('');
  return (
    <section className="v6-master">
      <header className="v6-master-heading"><div><span className="v6-kicker">Acesso reservado ao fundador</span><h1>Orquestrador Mestre</h1><p>Visão, contexto, simulação, autorização e rastreabilidade em um único espaço.</p></div><button className="v6-secondary" onClick={() => onNavigate('praca')}>Ver experiência pública</button></header>

      <div className="v6-master-grid">
        <section className="v6-command-center">
          <div className="v6-orchestrator"><div className="v6-brain"><BrainCircuit size={64} /></div><div><strong>Orquestrador em observação</strong><span>Nenhuma execução real sem autorização.</span></div></div>
          <div className="v6-agent-orbit"><span className="gemini">Gemini · contexto</span><span className="gpt">GPT · estrutura</span><span className="eva">EVA · acolhimento</span><span className="mui">MUI · interface</span><span className="afs">AFS · proteção</span><span className="ops">OPS · operação</span></div>
          <form onSubmit={event => { event.preventDefault(); setCommand(''); }} className="v6-master-command"><textarea value={command} onChange={event => setCommand(event.target.value)} placeholder="Converse com o Orquestrador Mestre ou descreva o que deve ser analisado…" /><div><button type="button"><FileUp size={18} /> Anexar arquivo</button><button className="v6-primary" type="submit" disabled={!command.trim()}>Analisar comando</button></div></form>
        </section>

        <aside className="v6-health">
          <h2><Gauge size={20} /> Situação da UNO</h2>
          <div className="v6-metric"><span>Interface V6</span><b>Em construção</b></div>
          <div className="v6-metric"><span>Build</span><b className="ok">Saudável</b></div>
          <div className="v6-metric"><span>Autorizações pendentes</span><b>0</b></div>
          <div className="v6-metric"><span>Execuções reais</span><b>Bloqueadas</b></div>
          <small><Activity size={14} /> Atualização demonstrativa local</small>
        </aside>
      </div>

      <section className="v6-tools"><header><div><span className="v6-kicker">Ferramentas e APIs</span><h2>Mapa de integrações</h2></div><button><KeyRound size={17} /> Gerenciar conexões</button></header><div className="v6-tool-grid">{tools.map(({ name, role, status, icon: Icon }) => <button key={name} className="v6-tool"><Icon /><strong>{name}</strong><span>{role}</span><small>{status}</small></button>)}</div></section>
    </section>
  );
}

