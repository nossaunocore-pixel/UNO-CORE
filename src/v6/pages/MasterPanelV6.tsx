import React, { useState } from 'react';
import {
  Activity, AlertTriangle, BarChart3, Bot, BrainCircuit, CheckCircle2,
  ClipboardList, Clock3, Database, GitBranch, KeyRound, Layers3,
  LockKeyhole, MessageCircle, PackagePlus, Play, PlugZap, Send,
  ShieldCheck, Sparkles, Workflow, Wrench
} from 'lucide-react';
import type { NavigateV6 } from '../types';
import { PanelAssignmentCenterV7 } from '../components/PanelAssignmentCenterV7';

type WorkMode = 'conversar' | 'analisar' | 'planejar' | 'simular';

const agents = [
  { name: 'Gemini', role: 'Contexto e compreensão', detail: 'Motor de contexto', color: 'cyan' },
  { name: 'EVA', role: 'Escuta e interpretação', detail: 'Camada de escuta', color: 'cyan' },
  { name: 'GPT', role: 'Estrutura e conhecimento', detail: 'Organização e análise', color: 'violet' },
  { name: 'MUE', role: 'Modelo universal de entidades', detail: 'Entidades e relações', color: 'violet' },
  { name: 'MUI', role: 'Apresentação e experiência', detail: 'Interfaces e protótipos', color: 'pink' },
  { name: 'AI Studio', role: 'Simulação', detail: 'Cenários de teste', color: 'pink' },
  { name: 'CCM', role: 'Missões e coordenação', detail: 'Planejamento de missões', color: 'green' },
  { name: 'OPS', role: 'Execução operacional', detail: 'Execução sob autorização', color: 'green' },
  { name: 'Supabase', role: 'Dados de produto', detail: 'Integração a validar', color: 'orange' },
  { name: 'Firebase', role: 'Identidade e memória', detail: 'Integração a validar', color: 'orange' }
];

const modeCopy: Record<WorkMode, { title: string; placeholder: string; intro: string }> = {
  conversar: { title: 'Conversa com o Orquestrador Mestre', placeholder: 'Descreva sua intenção, faça uma pergunta ou apresente uma proposta…', intro: 'A conversa pode organizar uma intenção e indicar os próximos passos. A conexão com o executor e a memória persistente depende das integrações configuradas.' },
  analisar: { title: 'Analisar uma estrutura ou situação', placeholder: 'O que você deseja analisar? Informe contexto, objetivo e limites…', intro: 'A análise desta interface é preparatória. Dados reais só serão considerados quando as respectivas fontes estiverem conectadas e verificadas.' },
  planejar: { title: 'Planejar uma nova capacidade', placeholder: 'Descreva o universo, módulo, produto, serviço, API ou agente…', intro: 'O planejamento pode ser encaminhado à Oficina Mestre para criação de um rascunho versionado. Criar não significa aprovar ou ativar.' },
  simular: { title: 'Simular antes de autorizar', placeholder: 'Descreva o cenário, as premissas e o resultado que deseja testar…', intro: 'Simulações devem separar premissas, dados observados e hipóteses. Nenhuma simulação executa operações reais.' }
};

export function MasterPanelV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [mode, setMode] = useState<WorkMode>('conversar');
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');
  const [draftTitle, setDraftTitle] = useState('');

  const submitCommand = (event: React.FormEvent) => {
    event.preventDefault();
    if (!command.trim()) return;
    setResponse(`Solicitação recebida nesta interface em modo ${mode}.\n\nResumo: ${command.trim()}\n\nEstado: rascunho local de demonstração. Não foi enviada a um agente, não foi gravada no banco e nenhuma ação externa foi executada. Para transformar a intenção em um artefato versionado, continue pela Oficina Mestre.`);
  };

  return <section className="v7-orchestrator-console" aria-labelledby="v7-orchestrator-title">
    <header className="v7-oc-topbar">
      <div className="v7-oc-brand"><span className="v7-oc-logo">UNO</span><div><h1 id="v7-orchestrator-title">ORQUESTRADOR MESTRE</h1><small>INTELIGÊNCIA ORGANIZACIONAL · AMBIENTE DO FUNDADOR</small></div></div>
      <div className="v7-oc-topstatus"><span><i/> Sessão protegida</span><span><ShieldCheck size={16}/> Auditoria prevista em cada operação</span><span><LockKeyhole size={15}/> Produção bloqueada</span></div>
    </header>

    <div className="v7-oc-layout">
      <aside className="v7-oc-sidebar">
        <section className="v7-oc-panel"><h2>SISTEMA UNO</h2>
          <div className="v7-oc-status"><span><BrainCircuit/> Orquestrador Mestre</span><b>Interface protegida</b></div>
          <div className="v7-oc-status"><span><Bot/> Agentes</span><b>Catálogo consultável</b></div>
          <div className="v7-oc-status"><span><Layers3/> Módulos e universos</span><b>Oficina Mestre</b></div>
          <div className="v7-oc-status"><span><Database/> Dados</span><b>Conexões a validar</b></div>
          <div className="v7-oc-status"><span><ShieldCheck/> Segurança</span><b>Autorização server-side</b></div>
        </section>
        <section className="v7-oc-panel"><h2>ÁREAS DE TRABALHO</h2>
          <button className="v7-oc-action" onClick={() => onNavigate('oficina')}><PackagePlus/> Oficina Mestre <span>+</span></button>
          <button className="v7-oc-action" onClick={() => onNavigate('agentes')}><Bot/> Agentes <span>›</span></button>
          <button className="v7-oc-action" onClick={() => onNavigate('integracoes')}><PlugZap/> APIs e integrações <span>›</span></button>
          <button className="v7-oc-action" onClick={() => onNavigate('auditoria')}><ClipboardList/> Auditoria e histórico <span>›</span></button>
        </section>
      </aside>

      <main className="v7-oc-main">
        <section className="v7-oc-network">
          <div className="v7-oc-network-heading"><span>ESTRUTURA E CONHECIMENTO</span><span className="v7-oc-live"><i/> Núcleo de comando</span></div>
          <div className="v7-oc-brain"><div className="v7-oc-orbit v7-oc-orbit-one"/><div className="v7-oc-orbit v7-oc-orbit-two"/><div className="v7-oc-core"><Sparkles size={30}/><strong>UNO</strong><small>ORQUESTRADOR<br/>MESTRE</small></div></div>
          <div className="v7-oc-agents">
            {agents.map((agent) => <article key={agent.name} className={`v7-oc-agent v7-oc-${agent.color}`}>
              <span className="v7-oc-agent-icon">{agent.name === 'Supabase' || agent.name === 'Firebase' ? <Database/> : agent.name === 'OPS' || agent.name === 'CCM' ? <Workflow/> : agent.name === 'AI Studio' ? <Activity/> : <BrainCircuit/>}</span>
              <span><b>{agent.name}</b><small>{agent.role}</small><em>{agent.detail}</em></span>
              <span className="v7-oc-agent-state">A verificar</span>
            </article>)}
          </div>
          <div className="v7-oc-connectors"><span><KeyRound/> STRIPE · TESTE</span><span><GitBranch/> GITHUB · REPOSITÓRIO</span><span><Workflow/> VERCEL · PREVIEW</span></div>
        </section>

        <div className="v7-oc-lower-grid">
          <section className="v7-oc-panel v7-oc-approvals"><h2>APROVAÇÕES NECESSÁRIAS</h2>
            <div><LockKeyhole/><span><b>Deploy de produção</b><small>Exige homologação e autorização explícita</small></span><em>Bloqueado</em></div>
            <div><Database/><span><b>Alterações em dados</b><small>Migrations e políticas RLS pendentes de validação</small></span><em>Revisar</em></div>
            <div><KeyRound/><span><b>Credenciais e identidade</b><small>Configuração server-side e UID fundador</small></span><em>Pendente</em></div>
          </section>
          <section className="v7-oc-panel v7-oc-risks"><h2>RISCOS E ATENÇÃO</h2>
            <div><AlertTriangle/><span><b>Integrações</b><small>Estado visual não comprova conexão operacional</small></span></div>
            <div><Clock3/><span><b>Capacidades em preparação</b><small>Separar catálogo, protótipo e serviço ativo</small></span></div>
            <button onClick={() => onNavigate('auditoria')}>Consultar trilha de auditoria <span>›</span></button>
          </section>
        </div>

        <section className="v7-oc-workshop-strip"><div><span className="v6-kicker">CRIAÇÃO E EVOLUÇÃO ORGANIZACIONAL</span><h2>Construa a próxima capacidade da UNO</h2><p>Universos, módulos, produtos, serviços, APIs, páginas, protocolos, agentes e ferramentas começam como rascunhos controlados.</p></div><button onClick={() => onNavigate('oficina')}><Wrench size={17}/> Abrir Oficina Mestre</button></section>
      </main>
    </div>

    <section className="v7-oc-console">
      <div className="v7-oc-console-tabs" role="tablist" aria-label="Modo de trabalho do Orquestrador">
        {(['conversar','analisar','planejar','simular'] as WorkMode[]).map((item) => <button key={item} role="tab" aria-selected={mode === item} className={mode === item ? 'active' : ''} onClick={() => { setMode(item); setResponse(''); }}>{item === 'conversar' ? <MessageCircle/> : item === 'analisar' ? <BarChart3/> : item === 'planejar' ? <Workflow/> : <Play/>}{item}</button>)}
      </div>
      <div className="v7-oc-console-body"><div><b>{modeCopy[mode].title}</b><p>{modeCopy[mode].intro}</p></div>
        <form onSubmit={submitCommand}><textarea value={command} onChange={event => setCommand(event.target.value)} placeholder={modeCopy[mode].placeholder} rows={2}/><button type="submit" disabled={!command.trim()}><Send size={17}/> Enviar</button></form>
        {response && <div className="v7-oc-response" role="status"><CheckCircle2/><p>{response}</p></div>}
        <div className="v7-oc-safety"><LockKeyhole size={14}/> Interface de preparação: sem execução externa, sem persistência e sem aprovação automática.</div>
      </div>
    </section>

    <section className="v7-oc-panels"><header><span className="v6-kicker">GOVERNANÇA POR RESPONSABILIDADE</span><h2>Painéis de gestão da UNO</h2><p>A navegação não concede acesso. O servidor valida as atribuições antes de abrir cada ambiente.</p></header>
      <div>
        <button onClick={() => onNavigate('painel_administrativo')}>Painel Administrativo<small>Rotinas e processos administrativos</small></button>
        <button onClick={() => onNavigate('painel_coordenacao')}>Coordenação Geral<small>Metas, indicadores e prioridades</small></button>
        <button onClick={() => onNavigate('painel_juridico')}>Painel Jurídico<small>Contratos e conformidade</small></button>
        <button onClick={() => onNavigate('painel_contabil_financeiro')}>Contábil e Financeiro<small>Orçamento e conciliação</small></button>
        <button onClick={() => onNavigate('painel_atendimento')}>Painel de Atendimento<small>Operação e escalonamento</small></button>
      </div>
    </section>
    <PanelAssignmentCenterV7/>
    <footer className="v7-oc-footer"><span><Activity size={15}/> V7 · Orquestração visual em consolidação</span><span>Fluxo de referência: analisar → planejar → simular → autorizar → executar → auditar</span><button onClick={() => onNavigate('praca')}>Voltar à Praça UNO</button></footer>
  </section>;
}
