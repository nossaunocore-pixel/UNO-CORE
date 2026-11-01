import React, { useEffect, useState } from 'react';
import { CalendarDays, MapPin, ShieldCheck, Ticket } from 'lucide-react';
import { listPublicEvents } from '../../services/publicContent';
import type { PublicEvent } from '../../domain/publicContent';

function formatEventDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? 'Data a confirmar'
    : new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

export function LeisureV7() {
  const [items, setItems] = useState<PublicEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    listPublicEvents(40)
      .then((records) => { if (active) setItems(records); })
      .catch(() => { if (active) setUnavailable(true); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return <section className="v7-directory" aria-labelledby="leisure-title">
    <header className="v7-directory-heading">
      <div><span className="v6-kicker">Lazer · eventos e festivais</span><h1 id="leisure-title">O que está acontecendo</h1><p>Encontros, cultura, esporte, festivais e experiências promovidas espontaneamente pela comunidade, por instituições, pela UNO ou por terceiros.</p></div>
      <span className="v7-directory-mark"><CalendarDays size={20}/> Agenda pública</span>
    </header>
    {loading && <p className="v7-directory-state">Carregando a agenda pública do Supabase…</p>}
    {!loading && unavailable && <div className="v7-directory-state"><CalendarDays/><b>Agenda pública ainda não conectada.</b><span>O ambiente está preparado, mas não há eventos reais publicados nesta versão.</span></div>}
    {!loading && !unavailable && items.length === 0 && <div className="v7-directory-state"><CalendarDays/><b>Nenhum evento publicado ainda.</b><span>Eventos confirmados aparecerão aqui com organizador, data e condições.</span></div>}
    {items.length > 0 && <div className="v7-directory-grid">{items.map((item) => <article key={item.id}>
      <span>{item.event_type} · {item.status === 'cancelled' ? 'Cancelado' : item.status === 'completed' ? 'Realizado' : 'Publicado'}</span>
      <h2>{item.title}</h2><p>{item.summary}</p>
      <small><CalendarDays size={14}/> {formatEventDate(item.starts_at)}</small>
      {item.venue_name && <small><MapPin size={14}/> {item.venue_name}</small>}
      {item.registration_mode !== 'informational' && <small><Ticket size={14}/> Inscrição/ingresso: {item.registration_mode.split('_').join(' ')}</small>}
      {item.registration_url && <a href={item.registration_url} target="_blank" rel="noreferrer">Ver inscrição externa</a>}
    </article>)}</div>}
    <p className="v7-directory-notice"><ShieldCheck size={16}/> Lazer organiza experiências e eventos. Serviços contratáveis ficam em Serviços; a presença de um evento não confirma parceria nem responsabilidade da UNO pelo organizador.</p>
  </section>;
}
