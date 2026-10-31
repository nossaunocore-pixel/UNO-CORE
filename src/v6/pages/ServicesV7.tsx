import React, { useEffect, useState } from 'react';
import { Briefcase, ShieldCheck, Store } from 'lucide-react';
import { listPublicCatalogItems } from '../../services/publicContent';
import type { PublicCatalogItem } from '../../domain/publicContent';

function formatPrice(item: PublicCatalogItem) {
  if (item.price_amount === null || !item.currency) return 'Preço sob consulta';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: item.currency }).format(item.price_amount);
}

export function ServicesV7() {
  const [items, setItems] = useState<PublicCatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    listPublicCatalogItems('service', 60)
      .then((records) => { if (active) setItems(records); })
      .catch(() => { if (active) setUnavailable(true); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return <section className="v7-directory" aria-labelledby="services-title">
    <header className="v7-directory-heading">
      <div><span className="v6-kicker">Serviços · catálogo contratável</span><h1 id="services-title">Serviços oferecidos por instituições e profissionais</h1><p>Aqui ficam ofertas que podem ser contratadas ou habilitadas. A origem e o responsável por cada oferta devem estar claros.</p></div>
      <span className="v7-directory-mark"><Briefcase size={20}/> Catálogo de serviços</span>
    </header>
    {loading && <p className="v7-directory-state">Carregando serviços públicos do Supabase…</p>}
    {!loading && unavailable && <div className="v7-directory-state"><Store/><b>Catálogo público ainda não publicado.</b><span>A consulta está preparada; contratação e pagamento não estão habilitados por esta tela.</span></div>}
    {!loading && !unavailable && items.length === 0 && <div className="v7-directory-state"><Briefcase/><b>Nenhum serviço público disponível ainda.</b><span>Ofertas aprovadas aparecerão aqui quando publicadas no catálogo.</span></div>}
    {items.length > 0 && <div className="v7-directory-grid">{items.map((item) => <article key={item.id}>
      <span>{item.origin === 'uno' ? 'Oferta própria UNO' : 'Oferta de terceiro'} · {item.status === 'available' ? 'Disponível para consulta' : 'Publicado'}</span>
      <h2>{item.title}</h2><p>{item.summary}</p>
      <small>Prestador: {item.provider_public_name}</small>
      <small>Responsável: {item.responsible_public_name}</small>
      <strong>{formatPrice(item)}</strong>
      
      <small className="v7-service-not-live">Informativo nesta versão · contratação ainda não habilitada</small>
    </article>)}</div>}
    <p className="v7-directory-notice"><ShieldCheck size={16}/> Ver uma oferta não significa contratá-la. A contratação, matrícula ou ativação só será confirmada após fluxo próprio, consentimento e retorno do prestador.</p>
  </section>;
}
