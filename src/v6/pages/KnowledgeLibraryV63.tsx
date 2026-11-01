import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, FileText, Film, Image, Search, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';
import { approvalLabels, contentLibrary } from '../content/contentLibrary';
import { ContentViewerV63 } from '../components/ContentViewerV63';
import type { ContentKind, NavigateV6, UnoContentDefinition } from '../types';

const filters: Array<{ id: 'todos' | ContentKind; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'apresentacao', label: 'Apresentações' },
  { id: 'explicacao', label: 'Explicações' },
  { id: 'documento', label: 'Documentos' },
  { id: 'midia', label: 'Mídias' }
];

const kindIcons = { apresentacao: Sparkles, explicacao: Volume2, documento: FileText, midia: Image };

export function KnowledgeLibraryV63({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [filter, setFilter] = useState<'todos' | ContentKind>('todos');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<UnoContentDefinition | null>(null);
  const publicContent = useMemo(() => contentLibrary.filter(item => item.audience === 'publico' && item.approval === 'aprovado').filter(item => filter === 'todos' || item.kind === filter).filter(item => `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return <section className="v63-library" aria-labelledby="library-title">
    <header className="v63-page-heading"><div><button className="v63-back" onClick={() => onNavigate('edificio')}><ArrowLeft size={17}/> Voltar ao Prédio</button><span className="v6-kicker">Biblioteca pública</span><h1 id="library-title">Conhecimento que a UNO pode apresentar.</h1><p>Somente conteúdos com aprovação pública concluída aparecem aqui. Materiais em revisão, rascunhos e documentos internos permanecem protegidos.</p></div><span className="v63-privacy"><ShieldCheck size={17}/> Conteúdo versionado</span></header>
    <div className="v63-library-controls"><label><Search/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar assuntos e documentos"/></label><nav>{filters.map(item => <button className={filter === item.id ? 'active' : ''} key={item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}</nav></div>
    <div className="v63-library-summary"><span><b>{publicContent.length}</b> conteúdos públicos encontrados</span><span><CheckCircle2/>A UNO utiliza apenas a última versão aprovada</span></div>
    <div className="v63-library-grid">{publicContent.map(item => { const Icon = kindIcons[item.kind]; return <article key={item.id}><div className="v63-library-icon"><Icon/></div><span className={`v63-approval ${item.approval}`}><i/>{approvalLabels[item.approval]}</span><h2>{item.title}</h2><p>{item.summary}</p><dl><div><dt>Versão</dt><dd>{item.version}</dd></div><div><dt>Fonte</dt><dd>{item.source}</dd></div></dl><div className="v63-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button onClick={() => setSelected(item)}><Film size={15}/>Ver conteúdo</button></article> })}</div>
    {selected && <ContentViewerV63 content={selected} onClose={() => setSelected(null)}/>} 
  </section>;
}
