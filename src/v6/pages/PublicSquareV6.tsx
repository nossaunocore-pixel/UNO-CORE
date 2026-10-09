import React from 'react';
import { Briefcase, Building2, Home, LockKeyhole, MessageCircle, Radio, Sparkles, Users } from 'lucide-react';
import type { NavigateV6 } from '../types';

export function PublicSquareV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  return (
    <section className="v6-square" aria-labelledby="square-title">
      <div className="v6-square-shade" />
      <div className="v6-square-copy">
        <span className="v6-kicker">Bem-vindo à Praça UNO</span>
        <h1 id="square-title">Um ponto de encontro entre pessoas, ideias e possibilidades.</h1>
        <p>A Praça UNO não pertence a um lugar isolado. Ela conecta pessoas, casas, comunidades e instituições com transparência e participação.</p>
        <div className="v6-actions">
          <button className="v6-primary" onClick={() => onNavigate('conversa')}><MessageCircle size={19} /> Conversar com a UNO</button>
          <button className="v6-secondary" onClick={() => onNavigate('usuario')}>Conhecer meu espaço</button>
        </div>
      </div>

      <div className="v6-city-map" aria-label="Módulos da Praça UNO">
        <button className="v6-module module-uno" onClick={() => onNavigate('conversa')}>
          <Sparkles /><strong>UNO</strong><span>Escuta e orientação</span>
        </button>
        <button className="v6-module module-home" onClick={() => onNavigate('usuario')}>
          <Home /><strong>Minha Casa</strong><span>Seu espaço na comunidade</span>
        </button>
        <button className="v6-module module-people" onClick={() => onNavigate('usuario')}>
          <Users /><strong>Participação</strong><span>Ideias, debates e votações</span>
        </button>
        <button className="v6-module module-live">
          <Radio /><strong>Vitrine Nós</strong><span>Transmissões e comunicados</span>
        </button>
        <button className="v6-module module-work locked" title="Módulo futuro">
          <Briefcase /><strong>Trabalho e renda</strong><span><LockKeyhole size={13} /> Em preparação</span>
        </button>
        <button className="v6-module module-city locked" title="Integração futura">
          <Building2 /><strong>Instituições</strong><span><LockKeyhole size={13} /> Aguardando integração</span>
        </button>
      </div>

      <button className="v6-uno-avatar" onClick={() => onNavigate('conversa')} aria-label="Conversar com a UNO">
        <img src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="Avatar da UNO" />
        <span className="v6-speech">Olá! Que bom ter você aqui. Quer conhecer a UNO?</span>
      </button>
    </section>
  );
}

