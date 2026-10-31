import React, { useState } from 'react';
import { Activity, Bot, BrainCircuit, FileUp, GitBranch, KeyRound, LockKeyhole, Play, Wrench } from 'lucide-react';
import type { NavigateV6 } from '../types';
import { PanelAssignmentCenterV7 } from '../components/PanelAssignmentCenterV7';

const agents = ['Gemini • Contexto','GPT • Estrutura','EVA • Escuta','MUI • Interface','CCM • Soluções','OPS • Execução','AFS • Proteção'];
const tools = ['Gemini','GPT','Firebase','Supabase','Stripe','GitHub','Vercel','Google Cloud'];

export function MasterPanelV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [command,setCommand]=useState('');
  return <section className="v62-scene v62-master">
    <header className="v62-master-title"><div><span className="v6-kicker">Acesso condicionado a claim verificada</span><h1>Painel Mestre UNO</h1><p>Visão, decisão, autorização e evolução da plataforma.</p></div><nav><button onClick={()=>onNavigate('conteudos')}>Conteúdos</button><button onClick={()=>onNavigate('integracoes')}>APIs</button><button onClick={()=>onNavigate('integracoes')}>Ferramentas</button><button onClick={()=>onNavigate('agentes')}>Agentes</button><button onClick={()=>onNavigate('auditoria')}>Logs</button><button onClick={()=>onNavigate('oficina')}><Wrench size={15}/> Oficina</button><button onClick={()=>onNavigate('painel_administrativo')}>Administrativo</button><button onClick={()=>onNavigate('painel_coordenacao')}>Coordenação</button><button onClick={()=>onNavigate('painel_juridico')}>Jurídico</button><button onClick={()=>onNavigate('painel_contabil_financeiro')}>Contábil/Financeiro</button><button onClick={()=>onNavigate('painel_atendimento')}>Atendimento</button></nav></header>
    <div className="v62-master-layout">
      <aside className="v62-master-side"><h2>Situação da UNO</h2><div className="v62-metrics"><span>Usuários<b>Dados ainda não conectados</b></span><span>Adesões<b>Dados ainda não conectados</b></span><span>Demandas<b>Dados ainda não conectados</b></span><span>Votações<b>Dados ainda não conectados</b></span></div><h3>Aprovações pendentes</h3><p>O registro de aprovações será exibido após a conexão do serviço de governança e sua trilha de auditoria.</p></aside>
      <main className="v62-orchestrator"><div className="v62-brain-core"><BrainCircuit size={70}/><strong>Orquestrador Mestre</strong><small>Execução real bloqueada até configuração e autorização</small></div><div className="v62-orbit">{agents.map((agent,index)=><div key={agent} style={{'--orbit-index':index} as React.CSSProperties}><i/><span>{agent}</span><small>Agente: integração pendente</small></div>)}</div></main>
      <aside className="v62-tool-status"><h2>Motores e ferramentas</h2>{tools.map((name,index)=><div key={name}><span>{index<2?<Bot/>:index<4?<Activity/>:index===5?<GitBranch/>:<KeyRound/>}<b>{name}</b></span><small>Conexão não verificada</small></div>)}<div className="v62-audit"><Activity/> Auditoria: aguardando conexão persistente</div></aside>
    </div>
    <section className="v7-master-panels">
      <header><span className="v6-kicker">Governança por responsabilidade</span><h2>Painéis de gestão da UNO</h2><p>Cada painel tem escopo próprio. A navegação não concede acesso; o servidor valida as atribuições antes de abrir cada ambiente.</p></header>
      <div>
        <button onClick={() => onNavigate('painel_administrativo')}><b>Painel Administrativo</b><small>Rotinas e processos administrativos</small></button>
        <button onClick={() => onNavigate('painel_coordenacao')}><b>Coordenação Geral</b><small>Visão executiva, metas e indicadores</small></button>
        <button onClick={() => onNavigate('painel_juridico')}><b>Painel Jurídico</b><small>Contratos, conformidade e obrigações</small></button>
        <button onClick={() => onNavigate('painel_contabil_financeiro')}><b>Contábil e Financeiro</b><small>Contabilidade, conciliação e gestão Stripe</small></button>
        <button onClick={() => onNavigate('painel_atendimento')}><b>Painel de Atendimento</b><small>Operador, especialista, supervisor e gestor geral</small></button>
      </div>
    </section>
    <PanelAssignmentCenterV7 />
    <form className="v62-master-console" onSubmit={event=>event.preventDefault()}><button type="button" disabled title="Anexos ainda não conectados"><FileUp/></button><input value={command} onChange={event=>setCommand(event.target.value)} placeholder="Console mestre será habilitado após conectar o executor autorizado…" disabled/><label><input type="checkbox" checked readOnly/> Simulação</label><button className="v62-analyze" disabled={!command.trim()}><Play/> Analisar</button><div className="v62-guard"><LockKeyhole/> Execução real bloqueada até autorização</div><div className="v62-flow">Analisar <i/> Simular <i/> Autorizar <i/> Executar <i/> Auditar</div></form>
  </section>;
}
