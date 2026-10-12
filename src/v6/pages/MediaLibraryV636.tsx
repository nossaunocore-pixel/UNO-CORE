import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FileText, Film, Image, LockKeyhole, Mic2, Play, Search, ShieldCheck, UploadCloud, X } from 'lucide-react';
import { mediaLibrary } from '../content/mediaLibrary';
import type { MediaKind, NavigateV6, UnoMediaAsset } from '../types';

const filters: Array<{ id: 'todos' | MediaKind; label: string }> = [{ id: 'todos', label: 'Todos' },{ id: 'imagem', label: 'Imagens' },{ id: 'audio', label: 'Áudios' },{ id: 'video', label: 'Vídeos' },{ id: 'roteiro', label: 'Roteiros' }];
const icons = { imagem: Image, audio: Mic2, video: Film, roteiro: FileText };
const rightsLabels = { autorizado: 'Uso autorizado', revisar: 'Revisar autorização', interno: 'Uso interno' };

export function MediaLibraryV636({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [filter, setFilter] = useState<'todos' | MediaKind>('todos');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<UnoMediaAsset | null>(null);
  const items = useMemo(() => mediaLibrary.filter(item => filter === 'todos' || item.kind === filter).filter(item => `${item.title} ${item.module} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  return <section className="v636-media" aria-labelledby="media-title">
    <header className="v63-page-heading"><div><button className="v63-back" onClick={() => onNavigate('conteudos')}><ArrowLeft size={17}/> Voltar à Central</button><span className="v6-kicker">Acervo supervisionado</span><h1 id="media-title">Acervo Multimídia UNO</h1><p>Imagens, áudios, vídeos e roteiros organizados por origem, versão, permissão e local de uso.</p></div><span className="v63-privacy"><ShieldCheck/> Direitos identificados</span></header>
    <div className="v636-controls"><label><Search/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar mídia ou módulo"/></label><nav>{filters.map(item => <button key={item.id} className={filter === item.id ? 'active' : ''} onClick={() => setFilter(item.id)}>{item.label}</button>)}</nav><button className="v636-upload" onClick={() => alert('Demonstração: o envio ao Firebase Storage ainda será conectado e testado.')}><UploadCloud/> Adicionar arquivo</button></div>
    <div className="v636-summary"><span><b>{items.length}</b> itens encontrados</span><span><LockKeyhole/> Arquivos internos não são exibidos ao público</span><span><CheckCircle2/> Uso depende de autorização registrada</span></div>
    <div className="v636-grid">{items.map(item => { const Icon = icons[item.kind]; return <article key={item.id}><button className={`v636-preview ${item.id === 'avatar-uno' ? 'contain' : ''}`} onClick={() => setSelected(item)}>{item.fileUrl ? <img src={item.fileUrl} alt={item.fileAlt || ''}/> : <span><Icon/><small>Arquivo ainda não conectado</small></span>}<i><Play/> Visualizar</i></button><div className="v636-card-body"><span className={`v636-rights ${item.rights}`}>{rightsLabels[item.rights]}</span><small>{item.module}</small><h2>{item.title}</h2><p>{item.description}</p><footer><span>v{item.version}</span><button onClick={() => setSelected(item)}>Detalhes</button></footer></div></article>})}</div>
    {selected && <div className="v636-modal" role="dialog" aria-modal="true"><button className="v636-dismiss" onClick={() => setSelected(null)} aria-label="Fechar"><X/></button><div className="v636-modal-media">{selected.fileUrl ? <img src={selected.fileUrl} alt={selected.fileAlt || ''}/> : React.createElement(icons[selected.kind], { size: 70 })}</div><div className="v636-modal-info"><span className={`v636-rights ${selected.rights}`}>{rightsLabels[selected.rights]}</span><h2>{selected.title}</h2><p>{selected.description}</p><dl><div><dt>Módulo</dt><dd>{selected.module}</dd></div><div><dt>Origem</dt><dd>{selected.source}</dd></div><div><dt>Versão</dt><dd>{selected.version}</dd></div></dl><h3>Uso previsto</h3><div className="v636-usage">{selected.usage.map(use => <span key={use}>{use}</span>)}</div><aside><ShieldCheck/> Esta visualização não publica, distribui nem altera o arquivo.</aside></div></div>}
  </section>;
}
