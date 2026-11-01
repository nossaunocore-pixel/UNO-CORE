import React, { useEffect, useState } from 'react';
import {
  HeartHandshake,
  Home,
  MessageCircle,
  Network,
  Radio,
  Sparkles,
  UserRound,
  Users,
  Building2,
  CalendarDays,
  Briefcase
} from 'lucide-react';
import { presentationTour } from '../content/presentationTour';
import { ModuleInfoDialogV63 } from '../components/ModuleInfoDialogV63';
import type { NavigateV6 } from '../types';

export function PublicSquareV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [unoIsPresent, setUnoIsPresent] = useState(false);
  const [tourStep, setTourStep] = useState<number | null>(null);

  useEffect(() => {
    const invitation = window.setTimeout(() => setUnoIsPresent(true), 4500);
    return () => window.clearTimeout(invitation);
  }, []);

  const activeStep = tourStep === null ? null : presentationTour[tourStep];
  const placeClass = (id: string) => activeStep?.moduleId === id ? ' is-tour-active' : '';

  const advanceTour = () => {
    if (tourStep === null) {
      setTourStep(0);
      setUnoIsPresent(true);
      return;
    }
    if (tourStep < presentationTour.length - 1) {
      setTourStep(tourStep + 1);
      return;
    }
    setTourStep(null);
  };

  const openUno = () => {
    if (unoIsPresent) {
      onNavigate('conversa');
      return;
    }
    setUnoIsPresent(true);
  };

  return (
    <section className="v6-square v6-square--immersive" aria-labelledby="square-title">
      <div className="v6-square-atmosphere" aria-hidden="true" />
      <div className="v6-square-vignette" aria-hidden="true" />

      <header className="v6-square-intro">
        <span>Praça UNO</span>
        <h1 id="square-title">Três caminhos. Um propósito: melhorar a vida real.</h1>
        <p>Conheça a proposta social, a rede comercial e a estrutura institucional da UNO. A conversa está aberta a visitantes.</p>
        <div className="v7-square-links" aria-label="Mais ambientes públicos">
          <button onClick={() => onNavigate('instituicoes')}><Building2 size={14}/> Instituições</button>
          <button onClick={() => onNavigate('lazer')}><CalendarDays size={14}/> Lazer e eventos</button>
          <button onClick={() => onNavigate('servicos')}><Briefcase size={14}/> Serviços</button>
        </div>
      </header>

      <div className="v6-city-map" aria-label="Ambientes públicos da Praça UNO">
        <button className={`v6-place v6-place-building${placeClass('building')}`} onClick={() => onNavigate('edificio')} aria-label="Conhecer a proposta institucional da UNO">
          <span className="v6-building-beacon"><Sparkles size={18} /></span>
          <span className="v6-place-card"><strong>Edifício UNO</strong><small>Propósito, princípios e estrutura institucional.</small></span>
        </button>

        <button className={`v6-place place-home${placeClass('home')}`} onClick={() => onNavigate('usuario')}>
          <span className="v6-place-icon"><Home /></span>
          <span className="v6-place-card"><strong>Meu Ambiente</strong><small>Seu espaço pessoal, disponível após entrar.</small></span>
        </button>

        <button className={`v6-place place-services${placeClass('services')}`} onClick={() => onNavigate('conversa')}>
          <span className="v6-place-icon"><HeartHandshake /></span>
          <span className="v6-place-card"><strong>Acolhimento e apoio</strong><small>Escuta, orientação e próximos caminhos.</small></span>
        </button>

        <button className={`v6-place place-profile${placeClass('profile')}`} onClick={() => onNavigate('perfil')}>
          <span className="v6-place-icon"><UserRound /></span>
          <span className="v6-place-card"><strong>Perfil Vivo</strong><small>Sua identidade e seus objetivos, com privacidade.</small></span>
        </button>

        <button className={`v6-place place-live${placeClass('live')}`} type="button" onClick={() => onNavigate('nos')}>
          <span className="v6-place-icon"><Radio /></span>
          <span className="v6-place-card"><strong>Vitrine Comercial</strong><small>Produtos, serviços, profissionais e logística.</small></span>
        </button>

        <button className={`v6-place place-people${placeClass('people')}`} onClick={() => onNavigate('participacao')}>
          <span className="v6-place-icon"><Users /></span>
          <span className="v6-place-card"><strong>Participação Social</strong><small>Debates, ideias, consultas e acompanhamento.</small></span>
        </button>

        <button className={`v6-place place-community${placeClass('community')}`} onClick={() => onNavigate('comunidade')}>
          <span className="v6-place-icon"><Network /></span>
          <span className="v6-place-card"><strong>Comunidade UNO</strong><small>Acolhimento, iniciativas e organização do território.</small></span>
        </button>
      </div>

      <div className={`v6-uno-presence ${unoIsPresent ? 'is-speaking' : ''}`}>
        <button className="v6-uno-avatar" onClick={openUno} aria-expanded={unoIsPresent} aria-label="Conversar com a UNO como visitante">
          <img src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="UNO, anfitriã da praça" />
          <span className="v6-avatar-aura" aria-hidden="true" />
        </button>

        <div className="v6-speech" role="status" aria-live="polite">
          <span className="v6-speech-presence">UNO está aqui</span>
          <strong>{activeStep?.title ?? 'Olá! Quer conhecer o que estamos construindo?'}</strong>
          <p>{activeStep?.text ?? 'Posso explicar a proposta social, comercial e institucional. Visitantes também podem conversar comigo.'}</p>
          {activeStep && <div className={`v63-tour-media v63-tour-media--${activeStep.moduleId}`}><span>{activeStep.eyebrow}</span><small>{activeStep.mediaLabel}</small></div>}
          <div className="v63-tour-actions">
            <button onClick={advanceTour}><Sparkles size={16}/>{tourStep === null ? 'Conhecer a UNO' : tourStep === presentationTour.length - 1 ? 'Concluir' : 'Continuar'}</button>
            <button onClick={() => onNavigate('conversa')}><MessageCircle size={16}/> Conversar</button>
          </div>
          {tourStep !== null && <small className="v63-tour-progress">{tourStep + 1} de {presentationTour.length} · apresentação informativa</small>}
        </div>
      </div>

      <button className="v6-square-help" type="button" aria-label="Sobre a Praça UNO" title="A Praça UNO apresenta os ambientes públicos e a proposta da plataforma.">
        <span aria-hidden="true">?</span>
      </button>

      <div className="v6-explore-hint" aria-hidden="true"><span /> Explore a praça</div>
    </section>
  );
}
