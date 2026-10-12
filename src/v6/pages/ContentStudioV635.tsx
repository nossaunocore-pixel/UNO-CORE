import React, { useMemo, useState } from 'react';
import { ArrowLeft, Bot, Check, Clock3, Eye, FilePlus2, Images, Image, Library, LockKeyhole, PencilLine, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { contentLibrary } from '../content/contentLibrary';
import type { ContentApproval, NavigateV6 } from '../types';

const statusLabel: Record<ContentApproval, string> = {
  aprovado: 'Aprovado',
  'revisao-humana': 'Revisão humana',
  rascunho: 'Rascunho'
};

const pipeline = [
  { icon: Bot, title: 'Agente redator', text: 'Prepara uma proposta usando fontes autorizadas.' },
  { icon: PencilLine, title: 'Revisão humana', text: 'O fundador ou responsável confere e ajusta.' },
  { icon: ShieldCheck, title: 'Autorização', text: 'Define versão, público e data de validade.' },
  { icon: Library, title: 'Biblioteca', text: 'A última versão aprovada fica disponível.' }
];

export function ContentStudioV635({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [filter, setFilter] = useState<'todos' | ContentApproval>('todos');
  const [title, setTitle] = useState('');
  const [instruction, setInstruction] = useState('');
  const [notice, setNotice] = useState('');
  const items = useMemo(() => contentLibrary.filter(item => filter === 'todos' || item.approval === filter), [filter]);

  function simulateDraft(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || !instruction.trim()) return;
    setNotice('Solicitação preparada para simulação. Nenhum conteúdo foi criado ou publicado no banco nesta demonstração.');
  }

  return <section className="v635-studio" aria-labelledby="studio-title">
    <header className="v63-page-heading">
      <div><button className="v63-back" onClick={() => onNavigate('mestre')}><ArrowLeft size={17}/> Voltar ao Painel Mestre</button><span className="v6-kicker">Produção supervisionada</span><h1 id="studio-title">Central de Conteúdo da UNO</h1><p>Um conteúdo nasce como proposta, passa por revisão humana e só aparece ao público depois da autorização.</p></div>
      <span className="v63-privacy"><LockKeyhole size={17}/> Publicação protegida</span>
    </header>

    <div className="v635-pipeline" aria-label="Fluxo de produção de conteúdo">{pipeline.map(({ icon: Icon, title: itemTitle, text }, index) => <article key={itemTitle}><span>{index + 1}</span><Icon/><div><h2>{itemTitle}</h2><p>{text}</p></div></article>)}</div>

    <div className="v635-studio-layout">
      <form className="v635-create" onSubmit={simulateDraft}>
        <span className="v6-kicker"><Sparkles size={15}/> Nova solicitação</span><h2>Preparar conteúdo</h2><p>Descreva o material. Nesta versão, o botão apenas demonstra o encaminhamento ao agente.</p>
        <label>Título<input value={title} onChange={event => setTitle(event.target.value)} placeholder="Ex.: Como funciona a adesão"/></label>
        <label>Orientação<textarea value={instruction} onChange={event => setInstruction(event.target.value)} placeholder="Explique o objetivo, o público e as fontes que o agente deve utilizar."/></label>
        <div className="v635-format"><button type="button"><FilePlus2/> Texto</button><button type="button"><Image/> Imagem</button><button type="button"><Eye/> Apresentação</button></div>
        <label className="v635-simulation"><input type="checkbox" checked readOnly/> Gerar primeiro no ambiente de simulação</label>
        <button className="v635-submit" disabled={!title.trim() || !instruction.trim()}><Send/> Encaminhar para simulação</button>
        {notice && <output><Check/>{notice}</output>}
      </form>

      <section className="v635-inventory"><header><div><span className="v6-kicker">Inventário versionado</span><h2>Materiais registrados</h2></div><div className="v636-content-actions"><button onClick={() => onNavigate('acervo')}><Images/> Acervo multimídia</button><button onClick={() => onNavigate('biblioteca')}><Library/> Biblioteca pública</button></div></header>
        <nav>{(['todos','rascunho','revisao-humana','aprovado'] as const).map(id => <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{id === 'todos' ? 'Todos' : statusLabel[id]}</button>)}</nav>
        <div className="v635-content-list">{items.map(item => <article key={item.id}><div className={`v635-status ${item.approval}`}><i/>{statusLabel[item.approval]}</div><h3>{item.title}</h3><p>{item.summary}</p><footer><span>v{item.version}</span><span><Clock3/> {item.source}</span><button disabled={item.approval === 'aprovado'}>{item.approval === 'aprovado' ? 'Publicado' : 'Revisar'}</button></footer></article>)}</div>
      </section>
    </div>
    <aside className="v635-honesty"><ShieldCheck/><div><strong>Limite desta demonstração</strong><p>Os controles representam o fluxo aprovado da UNO. Persistência no Supabase/Firebase, geração por agentes e publicação real ainda serão conectadas e testadas antes da liberação.</p></div></aside>
  </section>;
}
