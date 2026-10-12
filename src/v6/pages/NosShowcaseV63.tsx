import React, { useMemo, useState } from 'react';
import { Building2, ChevronRight, FileText, Landmark, LockKeyhole, Search, ShieldCheck, Users } from 'lucide-react';
import { nosDepartments, statusLabels } from '../content/unoRegistry';

export function NosShowcaseV63() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(nosDepartments[0]);
  const visible = useMemo(() => nosDepartments.filter(item => `${item.title} ${item.area}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <section className="v63-nos" aria-labelledby="nos-title">
    <header className="v63-page-heading"><div><span className="v6-kicker">Vitrine institucional</span><h1 id="nos-title">NÓS S.A.</h1><p>Instituição em processo de constituição, preparada para cuidar da continuidade e da operação responsável da UNO.</p></div><span className="v63-constitution"><Landmark size={17}/> Processo de constituição</span></header>
    <div className="v63-nos-notice"><ShieldCheck/><p><b>Transparência desde o início.</b> Esta área apresenta propostas para conhecimento e participação. Departamentos e serviços somente serão ativados após as validações, assembleias e formalidades necessárias.</p></div>
    <nav className="v63-nos-links" aria-label="Documentos da NÓS S.A."><button><FileText/>Carta Fundadora</button><button><Building2/>Estrutura institucional</button><button><Users/>Como participar</button></nav>
    <div className="v63-nos-layout">
      <aside><label><Search size={16}/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar departamento"/></label><small>{visible.length} departamentos encontrados</small><div>{visible.map(item => <button className={selected.id === item.id ? 'active' : ''} onClick={() => setSelected(item)} key={item.id}><span><b>{item.title}</b><small>{item.area}</small></span><ChevronRight size={16}/></button>)}</div></aside>
      <article className="v63-department-detail"><span className="v6-kicker">{selected.area}</span><h2>{selected.title}</h2><p>{selected.summary}</p><h3>Responsabilidades propostas</h3><ul>{selected.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><div className="v63-department-status"><LockKeyhole/><span><b>{statusLabels[selected.status]}</b><small>{selected.whyUnavailable}</small><em>Próximo marco: {selected.nextMilestone}</em></span></div><button className="v6-secondary">Acompanhar evolução</button></article>
    </div>
  </section>;
}
