import React, { useEffect, useState } from 'react';
import { Building2, GraduationCap, RefreshCw, ShieldCheck } from 'lucide-react';
import { listPublicInstitutions } from '../../services/publicContent';
import type { PublicInstitution } from '../../domain/publicContent';

export function InstitutionsV7() {
  const [items, setItems] = useState<PublicInstitution[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    listPublicInstitutions(40)
      .then((records) => {
        if (active) setItems(records);
      })
      .catch(() => {
        if (active) setUnavailable(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  return <section className="v7-directory" aria-labelledby="institutions-title">
    <header className="v7-directory-heading">
      <div><span className="v6-kicker">Instituições · consulta pública</span><h1 id="institutions-title">Organizações e instituições</h1><p>Empresas, associações, escolas, faculdades, organizações sociais e unidades institucionais mantêm suas próprias regras e responsabilidades.</p></div>
      <span className="v7-directory-mark"><Building2 size={20}/> Diretório público</span>
    </header>
    {loading && <p className="v7-directory-state">Carregando o diretório público do Supabase…</p>}
    {!loading && unavailable && <div className="v7-directory-state"><ShieldCheck/><b>Diretório público ainda não publicado.</b><span>A estrutura de consulta está preparada; nenhuma instituição real é inventada ou presumida.</span></div>}
    {!loading && !unavailable && items.length === 0 && <div className="v7-directory-state"><GraduationCap/><b>Nenhuma instituição publicada ainda.</b><span>Quando houver registros aprovados e públicos, eles aparecerão aqui.</span></div>}
    {items.length > 0 && <div className="v7-directory-grid">{items.map((item) => <article key={item.id}>
      <span>{item.institution_type} · {item.unit_type === 'matrix' ? 'Matriz' : item.unit_type === 'branch' ? 'Filial' : item.unit_type === 'unit' ? 'Unidade' : 'Independente'}</span><h2>{item.name}</h2><p>{item.summary || 'Perfil público sem descrição adicional.'}</p>
      {item.parent_id && <small>Unidade vinculada a uma instituição matriz</small>}
    </article>)}</div>}
    <p className="v7-directory-notice"><ShieldCheck size={16}/> A listagem mostra somente dados publicados como públicos. Informações internas, documentos, vínculos e regras privadas permanecem protegidos.</p>
  </section>;
}
