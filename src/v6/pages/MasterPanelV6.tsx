import React, { useState } from 'react';
import { Activity, Bot, BrainCircuit, FileUp, GitBranch, KeyRound, LockKeyhole, Play, Wrench } from 'lucide-react';
import type { NavigateV6 } from '../types';

const agents = ['Gemini • Contexto','GPT • Estrutura','EVA • Escuta','MUI • Interface','CCM • Soluções','OPS • Execução','AFS • Proteção'];
const tools = ['Gemini','GPT','Firebase','Supabase','Stripe','GitHub','Vercel','Google Cloud'];

export function MasterPanelV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [command,setCommand]=useState('');
  return <section className="v62-scene v62-master">
    <header className="v62-master-title"><div><span className="v6-kicker">Acesso condicionado a claim verificada</span><h1>Painel Mestre UNO</h1><p>Visão, decisão, autorização e evolução da plataforma.</p></div><nav><button onClick={()=>onNavigate('conteudos')}>Conteúdos</button><button onClick={()=>onNavigate('integracoes')}>APIs</button><button onClick={()=>onNavigate('integracoes')}>Ferramentas</button><button onClick={()=>onNavigate('agentes')}>Agentes</button><button onClick={()=>onNavigate('auditoria')}>Logs</button><button onClick={()=>onNavigate('oficina')}><Wrench size={15}/> Oficina</button></nav></header>
    <div className="v62-master-layout">
      <aside className="v62-master-side"><h2>Situação da UNO</h2><div className="v62-metrics"><span>Usuários<b>Dados ainda não conectados</b></span><span>Adesões<b>Dados ainda não conectados</b></span><span>Demandas<b>Dados ainda não conectados</b></span><span>Votações<b>Dados ainda não conectados</b></span></div><h3>Aprovações pendentes</h3><p>O registro de aprovações será exibido após a conexão do serviço de governança e sua trilha de auditoria.</p></aside>
      <main className="v62-orchestrator"><div className="v62-brain-core"><BrainCircuit size={70}/><strong>Orquestrador Mestre</strong><small>Execução real bloqueada até configuração e autorização</small></div><div className="v62-orbit">{agents.map((agent,index)=><div key={agent} style={{'--orbit-index':index} as React.CSSProperties}><i/><span>{agent}</span><small>Agente: integração pendente</small></div>)}</div></main>
      <aside className="v62-tool-status"><h2>Motores e ferramentas</h2>{tools.map((name,index)=><div key={name}><span>{index<2?<Bot/>:index<4?<Activity/>:index===5?<GitBranch/>:<KeyRound/>}<b>{name}</b></span><small>Conexão não verificada</small></div>)}<div className="v62-audit"><Activity/> Auditoria: aguardando conexão persistente</div></aside>
    </div>
    <form className="v62-master-console" onSubmit={event=>event.preventDefault()}><button type="button" disabled title="Anexos ainda não conectados"><FileUp/></button><input value={command} onChange={event=>setCommand(event.target.value)} placeholder="Console mestre será habilitado após conectar o executor autorizado…" disabled/><label><input type="checkbox" checked readOnly/> Simulação</label><button className="v62-analyze" disabled={!command.trim()}><Play/> Analisar</button><div className="v62-guard"><LockKeyhole/> Execução real bloqueada até autorização</div><div className="v62-flow">Analisar <i/> Simular <i/> Autorizar <i/> Executar <i/> Auditar</div></form>
  </section>;
}
