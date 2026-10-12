import React, { useState } from 'react';
import { Activity, Bot, BrainCircuit, Database, FileUp, GitBranch, KeyRound, LockKeyhole, Play, Wrench } from 'lucide-react';
import type { NavigateV6 } from '../types';

const agents = ['Gemini • Contexto','GPT • Estrutura','EVA • Escuta','MUI • Interface','CCM • Soluções','OPS • Execução','AFS • Proteção'];
const tools = [['Gemini','62%'],['GPT','74%'],['Firebase','41%'],['Supabase','38%'],['Stripe','67%'],['GitHub','52%'],['Vercel','48%'],['Google Cloud','81%']];

export function MasterPanelV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [command,setCommand]=useState('');
  return <section className="v62-scene v62-master">
    <header className="v62-master-title"><div><span className="v6-kicker">Acesso exclusivo do fundador</span><h1>Painel Mestre UNO</h1><p>Visão, decisão, autorização e evolução da plataforma.</p></div><nav><button onClick={()=>onNavigate('conteudos')}>Conteúdos</button><button onClick={()=>onNavigate('integracoes')}>APIs</button><button onClick={()=>onNavigate('integracoes')}>Ferramentas</button><button onClick={()=>onNavigate('agentes')}>Agentes</button><button onClick={()=>onNavigate('auditoria')}>Logs</button><button onClick={()=>onNavigate('oficina')}><Wrench size={15}/> Oficina</button></nav></header>
    <div className="v62-master-layout">
      <aside className="v62-master-side"><h2>Situação da UNO</h2><div className="v62-metrics"><span>Usuários<b>1.248</b></span><span>Adesões<b>184</b></span><span>Demandas<b>23</b></span><span>Votações<b>4</b></span></div><h3>Aprovações pendentes</h3>{['Novo módulo na Praça UNO','Ajuste de orçamento','Política de uso de IA'].map(item=><button key={item}>{item}<small>Analisar</small></button>)}</aside>
      <main className="v62-orchestrator"><div className="v62-brain-core"><BrainCircuit size={70}/><strong>Orquestrador Mestre</strong><small>Em observação</small></div><div className="v62-orbit">{agents.map((agent,index)=><button key={agent} style={{'--orbit-index':index} as React.CSSProperties}><i/><span>{agent}</span><small>Relatório atualizado</small></button>)}</div></main>
      <aside className="v62-tool-status"><h2>Motores e ferramentas</h2>{tools.map(([name,usage],index)=><button key={name}><span>{index<2?<Bot/>:index<4?<Database/>:index===5?<GitBranch/>:<KeyRound/>}<b>{name}</b></span><small><i style={{width:usage}}/> {usage}</small></button>)}<div className="v62-audit"><Activity/> Últimas decisões preservadas</div></aside>
    </div>
    <form className="v62-master-console" onSubmit={event=>{event.preventDefault();setCommand('')}}><button type="button"><FileUp/></button><input value={command} onChange={event=>setCommand(event.target.value)} placeholder="Converse com o Orquestrador ou anexe qualquer arquivo…"/><label><input type="checkbox" defaultChecked/> Simulação</label><button className="v62-analyze" disabled={!command.trim()}><Play/> Analisar</button><div className="v62-guard"><LockKeyhole/> Execução real bloqueada até autorização</div><div className="v62-flow">Analisar <i/> Simular <i/> Autorizar <i/> Executar <i/> Auditar</div></form>
  </section>;
}
