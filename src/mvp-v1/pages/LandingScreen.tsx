import React, { useState } from 'react';
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Home,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  ShoppingBasket,
  Sparkles,
  Users,
  Vote,
  X
} from 'lucide-react';
import { ViewScreen } from '../types';

interface LandingScreenProps {
  onNavigate: (screen: ViewScreen) => void;
  onAdherePact: () => void;
  isFounder: boolean;
}

type CityPoint = {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  status: 'Disponível para conhecer' | 'Em construção';
  icon: React.ElementType;
  className: string;
  action?: ViewScreen;
};

const cityPoints: CityPoint[] = [
  {
    id: 'casa',
    title: 'Minha Casa UNO',
    shortLabel: 'Minha Casa',
    description: 'O espaço pessoal para reunir perfil, residência, necessidades, ideias e participação.',
    status: 'Disponível para conhecer',
    icon: Home,
    className: 'city-point--home',
    action: 'casa'
  },
  {
    id: 'mercado',
    title: 'Economia e mercado local',
    shortLabel: 'Mercado local',
    description: 'Compras coletivas, serviços, profissionais e oportunidades conectados ao território.',
    status: 'Em construção',
    icon: ShoppingBasket,
    className: 'city-point--market'
  },
  {
    id: 'saude',
    title: 'Saúde e cuidado',
    shortLabel: 'Saúde e cuidado',
    description: 'Acolhimento, orientação, prevenção e caminhos seguros para acessar profissionais e atendimento.',
    status: 'Em construção',
    icon: HeartPulse,
    className: 'city-point--health'
  },
  {
    id: 'educacao',
    title: 'Educação e desenvolvimento',
    shortLabel: 'Educação',
    description: 'Formação, conhecimento e oportunidades de desenvolvimento conectados à vida da comunidade.',
    status: 'Em construção',
    icon: GraduationCap,
    className: 'city-point--education'
  },
  {
    id: 'trabalho',
    title: 'Trabalho e produção',
    shortLabel: 'Trabalho e produção',
    description: 'Talentos, profissionais, negócios locais, produção e oportunidades organizados pelo território.',
    status: 'Em construção',
    icon: Briefcase,
    className: 'city-point--work'
  },
  {
    id: 'participacao',
    title: 'Participação comunitária',
    shortLabel: 'Participação',
    description: 'O lugar das propostas, reclamações, votações, resultados e decisões transparentes.',
    status: 'Disponível para conhecer',
    icon: Vote,
    className: 'city-point--participation',
    action: 'casa'
  }
];

const presentation = [
  'Olá, eu sou a UNO. Esta cidade começa com você.',
  'Cada lugar que você vê representa um serviço que poderá nascer das necessidades reais das pessoas.',
  'Antes de pedir cadastro ou adesão, eu quero escutar você e apresentar com transparência o que já existe.',
  'Você pode tocar em mim para conversar ou explorar os pontos luminosos da cidade.'
];

export const LandingScreen: React.FC<LandingScreenProps> = ({ onNavigate }) => {
  const [selectedPoint, setSelectedPoint] = useState<CityPoint | null>(null);
  const [presentationStep, setPresentationStep] = useState(0);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isAvatarHintVisible, setIsAvatarHintVisible] = useState(false);

  const greet = () => {
    setSelectedPoint(null);
    setPresentationStep(0);
    setIsGuideOpen(true);
  };

  const selectPoint = (point: CityPoint) => {
    setIsGuideOpen(false);
    setSelectedPoint(point);
  };

  const closePanel = () => {
    setSelectedPoint(null);
    setIsGuideOpen(false);
  };

  return (
    <div className="city-landing city-landing--map">
      <section className="city-map" aria-label="Mapa interativo da Cidade UNO">
        <div className="city-map__ambient" aria-hidden="true" />

        <div className="city-map__identity">
          <span><Sparkles size={14} /> Cidade UNO</span>
          <small>Toque nos pontos luminosos para conhecer</small>
        </div>

        {cityPoints.map((point) => {
          const Icon = point.icon;
          return (
            <button
              key={point.id}
              className={`city-point ${point.className}`}
              onClick={() => selectPoint(point)}
              aria-label={`Conhecer ${point.title}`}
            >
              <span className="city-point__beacon"><Icon size={20} /></span>
              <span className="city-point__label">{point.shortLabel}</span>
            </button>
          );
        })}

        <button
          className={`uno-guide${isAvatarHintVisible ? ' uno-guide--hint-visible' : ''}`}
          onClick={greet}
          onMouseEnter={() => setIsAvatarHintVisible(true)}
          onMouseLeave={() => setIsAvatarHintVisible(false)}
          onFocus={() => setIsAvatarHintVisible(true)}
          onBlur={() => setIsAvatarHintVisible(false)}
          onTouchStart={(event) => {
            if (!isAvatarHintVisible) {
              event.preventDefault();
              setIsAvatarHintVisible(true);
            }
          }}
          aria-label="Conhecer e conversar com a UNO"
          aria-describedby="uno-avatar-hint"
        >
          <img className="uno-guide__avatar" src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="UNO, anfitriã da Cidade UNO" />
          <span className="uno-guide__outline" />
          <span className="uno-guide__presence" />
          <span id="uno-avatar-hint" className="uno-guide__hint"><MessageCircle size={17} /> Toque para conhecer a UNO</span>
        </button>

        <div className="city-map__milestones" aria-label="Marcos da construção da UNO">
          <button onClick={() => setSelectedPoint({
            id: 'mil-1000', title: 'As primeiras 1.000 pessoas', shortLabel: '1.000 pessoas',
            description: 'A primeira comunidade ajudará a validar a adesão voluntária e a custear a mobilização porta a porta.',
            status: 'Em construção', icon: Users, className: ''
          })}><Users size={15} /><b>1.000</b><span>primeira comunidade</span></button>
          <button onClick={() => setSelectedPoint({
            id: 'mil-10000', title: 'O marco de 10.000 cadastros', shortLabel: '10.000 cadastros',
            description: 'Com 10 mil pessoas cadastradas, começa a mobilização nas redes oficiais e o lançamento público da UNO.',
            status: 'Em construção', icon: Sparkles, className: ''
          })}><Sparkles size={15} /><b>10.000</b><span>lançamento público</span></button>
        </div>

        {(isGuideOpen || selectedPoint) && (
          <aside className="city-guide-panel" aria-live="polite">
            <button className="city-guide-panel__close" onClick={closePanel} aria-label="Fechar apresentação"><X size={19} /></button>

            {isGuideOpen ? (
              <>
                <span className="city-guide-panel__speaker">UNO · anfitriã da cidade</span>
                <p className="city-guide-panel__speech">{presentation[presentationStep]}</p>
                <div className="city-guide-panel__progress" aria-label={`Etapa ${presentationStep + 1} de ${presentation.length}`}>
                  {presentation.map((_, index) => <span key={index} className={index === presentationStep ? 'active' : ''} />)}
                </div>
                <div className="city-guide-panel__actions">
                  {presentationStep > 0 && (
                    <button className="city-panel-btn city-panel-btn--quiet" onClick={() => setPresentationStep((step) => step - 1)}>
                      <ChevronLeft size={17} /> Voltar
                    </button>
                  )}
                  {presentationStep < presentation.length - 1 ? (
                    <button className="city-panel-btn" onClick={() => setPresentationStep((step) => step + 1)}>
                      Continuar <ChevronRight size={17} />
                    </button>
                  ) : (
                    <button className="city-panel-btn" onClick={() => onNavigate('conversa')}>
                      Conversar com a UNO <MessageCircle size={17} />
                    </button>
                  )}
                </div>
              </>
            ) : selectedPoint && (
              <>
                <span className="city-guide-panel__speaker">{selectedPoint.status}</span>
                <div className="city-guide-panel__title">
                  <selectedPoint.icon size={24} />
                  <h2>{selectedPoint.title}</h2>
                </div>
                <p>{selectedPoint.description}</p>
                <div className="city-guide-panel__actions">
                  {selectedPoint.action && (
                    <button className="city-panel-btn" onClick={() => onNavigate(selectedPoint.action!)}>
                      Conhecer este espaço <ChevronRight size={17} />
                    </button>
                  )}
                  <button className="city-panel-btn city-panel-btn--quiet" onClick={() => onNavigate('conversa')}>
                    Falar com a UNO <MessageCircle size={17} />
                  </button>
                </div>
              </>
            )}
          </aside>
        )}

        <div className="city-map__demo">Pré-lançamento · ambiente de demonstração</div>
      </section>
    </div>
  );
};
