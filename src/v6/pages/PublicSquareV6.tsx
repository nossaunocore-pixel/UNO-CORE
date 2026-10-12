import React, { useEffect, useState } from 'react';
import {
  Briefcase,
  Building2,
  HelpCircle,
  HeartHandshake,
  Home,
  LockKeyhole,
  MessageCircle,
  Network,
  Radio,
  Sparkles,
  UserRound,
  Users
} from 'lucide-react';
import { presentationTour } from '../content/presentationTour';
import { squareModules } from '../content/unoRegistry';
import { ModuleInfoDialogV63 } from '../components/ModuleInfoDialogV63';
import type { NavigateV6, UnoModuleDefinition } from '../types';

export function PublicSquareV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [unoIsPresent, setUnoIsPresent] = useState(false);
  const [tourStep, setTourStep] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<UnoModuleDefinition | null>(null);

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
        <h1 id="square-title">A comunidade começa por você.</h1>
        <p>Toque nos pontos de luz para conhecer o que estamos construindo.</p>
      </header>

      <div className="v6-city-map" aria-label="Ambientes da Praça UNO">
        <button className="v6-place v6-place-building" onClick={() => onNavigate('edificio')} aria-label="Entrar no edifício central da UNO">
          <span className="v6-building-beacon"><Sparkles size={18} /></span>
          <span className="v6-place-card"><strong>Edifício UNO</strong><small>Escuta, orientação e acesso à Nós S.A.</small></span>
        </button>

        <button className={`v6-place place-home${placeClass('home')}`} onClick={() => onNavigate('usuario')}>
          <span className="v6-place-icon"><Home /></span>
          <span className="v6-place-card"><strong>Minha Casa</strong><small>Seu espaço pessoal e familiar.</small></span>
        </button>

        <button className={`v6-place place-services${placeClass('services')}`} onClick={() => onNavigate('usuario')}>
          <span className="v6-place-icon"><HeartHandshake /></span>
          <span className="v6-place-card"><strong>Serviços</strong><small>Recursos para a vida real.</small></span>
        </button>

        <button className={`v6-place place-profile${placeClass('profile')}`} onClick={() => onNavigate('perfil')}>
          <span className="v6-place-icon"><UserRound /></span>
          <span className="v6-place-card"><strong>Perfil Vivo</strong><small>Sua história, vínculos e objetivos.</small></span>
        </button>

        <button className={`v6-place place-live${placeClass('live')}`} type="button" onClick={() => onNavigate('nos')}>
          <span className="v6-place-icon"><Radio /></span>
          <span className="v6-place-card"><strong>Vitrine Nós</strong><small>Transmissões, propostas e comunicados.</small></span>
        </button>

        <button className={`v6-place place-people${placeClass('people')}`} onClick={() => onNavigate('participacao')}>
          <span className="v6-place-icon"><Users /></span>
          <span className="v6-place-card"><strong>Participação</strong><small>Debates, ideias, enquetes e decisões.</small></span>
        </button>

        <button className={`v6-place place-community${placeClass('community')}`} onClick={() => onNavigate('comunidade')}>
          <span className="v6-place-icon"><Network /></span>
          <span className="v6-place-card"><strong>Comunidade UNO</strong><small>Pessoas, grupos, debates e transmissões.</small></span>
        </button>

        <button className={`v6-place place-work is-locked${placeClass('work')}`} type="button" aria-label="Trabalho e renda, em preparação" onClick={() => setOpenModule(squareModules.find(item => item.id === 'oficios-renda') ?? null)}>
          <span className="v6-place-icon"><Briefcase /></span>
          <span className="v6-place-lock"><LockKeyhole size={13} /></span>
          <span className="v6-place-card"><strong>Trabalho e renda</strong><small>Em preparação.</small></span>
        </button>

        <button className="v6-place place-city is-locked" type="button" aria-label="Instituições, aguardando integração" onClick={() => setOpenModule(squareModules.find(item => item.id === 'instituicoes') ?? null)}>
          <span className="v6-place-icon"><Building2 /></span>
          <span className="v6-place-lock"><LockKeyhole size={13} /></span>
          <span className="v6-place-card"><strong>Instituições</strong><small>Aguardando integração.</small></span>
        </button>
      </div>

      <div className={`v6-uno-presence ${unoIsPresent ? 'is-speaking' : ''}`}>
        <button className="v6-uno-avatar" onClick={openUno} aria-expanded={unoIsPresent} aria-label="Chamar a UNO">
          <img src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="UNO, anfitriã da praça" />
          <span className="v6-avatar-aura" aria-hidden="true" />
        </button>

        <div className="v6-speech" role="status" aria-live="polite">
          <span className="v6-speech-presence">UNO está aqui</span>
          <strong>{activeStep?.title ?? 'Olá! Você quer conhecer a UNO?'}</strong>
          <p>{activeStep?.text ?? 'Eu posso apresentar a praça, um ambiente por vez. Você também pode fazer suas próprias perguntas.'}</p>
          {activeStep && <div className={`v63-tour-media v63-tour-media--${activeStep.moduleId}`}><span>{activeStep.eyebrow}</span><small>{activeStep.mediaLabel}</small></div>}
          <div className="v63-tour-actions">
            <button onClick={advanceTour}><Sparkles size={16}/>{tourStep === null ? 'Conhecer a UNO' : tourStep === presentationTour.length - 1 ? 'Concluir' : 'Continuar'}</button>
            <button onClick={() => onNavigate('conversa')}><MessageCircle size={16}/> Perguntar</button>
          </div>
          {tourStep !== null && <small className="v63-tour-progress">{tourStep + 1} de {presentationTour.length} · conteúdo previamente aprovado</small>}
        </div>
      </div>

      <button className="v6-square-help" type="button" aria-label="Sobre a Praça UNO" title="A Praça UNO conecta pessoas e possibilidades sem pertencer a um único lugar.">
        <HelpCircle size={20} />
      </button>

      <div className="v6-explore-hint" aria-hidden="true"><span /> Explore a praça</div>
      {openModule && <ModuleInfoDialogV63 module={openModule} onClose={() => setOpenModule(null)} />}
    </section>
  );
}

