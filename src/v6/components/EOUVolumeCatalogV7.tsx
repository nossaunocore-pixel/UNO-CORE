import React, { useMemo, useState } from 'react';
import { AlertCircle, BookOpen, Layers3 } from 'lucide-react';
import { EOU_VOLUMES, type VolumeNature } from '../../domain/volumes';

type Filter = 'all' | VolumeNature | 'naming_conflict';

const natureLabel: Record<VolumeNature, string> = {
  structural: 'Estrutural',
  evolutive: 'Evolutivo',
  operation_dependent: 'Dependente da operação'
};

const maturityLabel = {
  documented: 'Documentado',
  readme_base: 'Base README',
  naming_conflict: 'Conflito de nomenclatura'
} as const;

export function EOUVolumeCatalogV7() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState('V01');

  const filtered = useMemo(() => EOU_VOLUMES.filter((volume) => {
    if (filter === 'all') return true;
    if (filter === 'naming_conflict') return volume.maturity === 'naming_conflict';
    return volume.nature === filter;
  }), [filter]);

  const selected = EOU_VOLUMES.find((volume) => volume.id === selectedId) || EOU_VOLUMES[0];
  const decisionCount = EOU_VOLUMES.filter((volume) => volume.decisionRequired).length;

  return <section className="v7-eou-catalog" aria-labelledby="eou-catalog-title">
    <header><div><span className="v6-kicker">Biblioteca estrutural · EOU</span><h2 id="eou-catalog-title">Os 40 volumes da arquitetura UNO</h2><p>O catálogo está registrado em código. O estado documental não significa que todos os volumes estejam especificados, implementados ou liberados.</p></div><span><Layers3/> {EOU_VOLUMES.length} volumes</span></header>
    <nav aria-label="Filtrar volumes">
      {([
        ['all', 'Todos'],
        ['structural', 'Estruturais'],
        ['evolutive', 'Evolutivos'],
        ['operation_dependent', 'Operacionais'],
        ['naming_conflict', 'Pendências do fundador']
      ] as Array<[Filter, string]>).map(([value, label]) => <button type="button" key={value} className={filter === value ? 'active' : ''} onClick={() => setFilter(value)}>{label}</button>)}
    </nav>
    <div className="v7-eou-layout">
      <div className="v7-eou-list">{filtered.map((volume) => <button type="button" key={volume.id} className={selectedId === volume.id ? 'selected' : ''} onClick={() => setSelectedId(volume.id)}>
        <b>{volume.id}</b><span>{volume.name}</span><small>{maturityLabel[volume.maturity]}</small>
      </button>)}</div>
      <article className="v7-eou-detail">
        <span>{selected.id} · {natureLabel[selected.nature]}</span>
        <h3>{selected.name}</h3>
        <p>{maturityLabel[selected.maturity]}</p>
        {selected.decisionRequired && <div className="v7-eou-warning"><AlertCircle/><span><b>Precisa de decisão do fundador</b>{selected.boundaryNote}</span></div>}
        {selected.boundaryNote && !selected.decisionRequired && <p>{selected.boundaryNote}</p>}
        <h4>Domínios de implementação</h4>
        <ul>{selected.implementationDomains.map((domain) => <li key={domain}>{domain.replace(/-/g, ' ')}</li>)}</ul>
        <small>Origem documental: {selected.sourcePath}</small>
      </article>
    </div>
    <footer><BookOpen size={15}/> {decisionCount} volumes têm conflito de nomenclatura que não será resolvido por suposição. A codificação seguirá a nomenclatura aprovada pelo fundador.</footer>
  </section>;
}
