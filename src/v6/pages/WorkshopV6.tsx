import React, { useState } from 'react';
import { Box, CheckCircle2, Code2, Eye, FileArchive, GitBranch, LockKeyhole, Play, RotateCcw, ShieldCheck, Wrench } from 'lucide-react';
import type { NavigateV6 } from '../types';

export function WorkshopV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [prompt,setPrompt]=useState('');
  return <section className="v62-workshop">
    <header><div><span className="v6-kicker">Fundador • ambiente isolado</span><h1>Oficina de Modelagem</h1><p>Recrie páginas, módulos e até uma nova versão da plataforma sem alterar o ambiente publicado.</p></div><span className="v62-safe"><ShieldCheck/> Simulação protegida</span></header>
    <div className="v62-workshop-grid">
      <aside><h2>Componentes</h2>{([['Páginas',Box],['Módulos',Wrench],['Agentes',Code2],['APIs',GitBranch],['Pacotes ZIP',FileArchive]] as const).map(([label,Icon])=><button key={label}><Icon/> {label}</button>)}<hr/><button onClick={()=>onNavigate('mestre')}><RotateCcw/> Voltar ao Painel Mestre</button></aside>
      <main><div className="v62-canvas"><div className="v62-canvas-toolbar"><span>Projeto: UNO V6.2</span><button><Eye/> Prévia</button><button><Play/> Testar</button></div><div className="v62-model"><div><strong>Praça UNO</strong><small>Landing pública</small></div><i/><div><strong>Conversa</strong><small>UNO + agente pessoal</small></div><i/><div><strong>Meu Ambiente</strong><small>Perfil e vínculos</small></div><i/><div><strong>Comunidade</strong><small>Rede social interna</small></div></div><div className="v62-drop"><FileArchive size={38}/><strong>Solte aqui arquivos, imagens ou um pacote ZIP</strong><small>O conteúdo será analisado e mantido em rascunho.</small><button>Selecionar arquivos</button></div></div><form onSubmit={event=>{event.preventDefault();setPrompt('')}}><textarea value={prompt} onChange={event=>setPrompt(event.target.value)} placeholder="Descreva a página, o módulo ou a transformação que deseja modelar…"/><button className="v6-primary" disabled={!prompt.trim()}>Gerar rascunho</button></form></main>
      <aside className="v62-version"><h2>Controle de versão</h2>{['Analisar','Modelar','Gerar','Testar','Simular'].map((step,index)=><span key={step}><CheckCircle2 className={index<2?'done':''}/>{step}</span>)}{['Autorizar','Versionar','Publicar','Auditar'].map(step=><span key={step}><LockKeyhole/>{step}</span>)}<div><GitBranch/><b>Branch isolada</b><small>Nenhuma mudança em produção.</small></div><button className="v62-danger" disabled>Publicar versão</button></aside>
    </div>
  </section>;
}
