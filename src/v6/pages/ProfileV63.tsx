import React from 'react';
import { Award, BookOpen, Briefcase, Eye, Heart, Home, LockKeyhole, ShieldCheck, Sparkles, UserRound, Users } from 'lucide-react';
import type { NavigateV6 } from '../types';

const profileAreas = [
  { icon: Sparkles, title: 'Talentos e habilidades', text: 'Ofícios, experiências e capacidades escolhidas por você.', visibility: 'Controle previsto para o titular' },
  { icon: Award, title: 'Virtudes e conhecimentos', text: 'Valores, saberes declarados e conhecimentos verificados.', visibility: 'Privado por padrão · previsto' },
  { icon: BookOpen, title: 'Educação e trajetória', text: 'Formação, cursos, certificados e aprendizagem em andamento.', visibility: 'Você controla' },
  { icon: Users, title: 'Família e vínculos', text: 'Casa, responsáveis, dependentes e círculos autorizados.', visibility: 'Acesso autorizado · previsto' },
  { icon: Briefcase, title: 'Ofícios e renda', text: 'Disponibilidade, oportunidades e rede profissional.', visibility: 'Você controla' },
  { icon: Home, title: 'Bens e recursos', text: 'Informações voluntárias para serviços e planejamento.', visibility: 'Privado · previsto' }
];

export function ProfileV63({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v63-profile" aria-labelledby="profile-title">
    <header className="v63-page-heading">
      <div><span className="v6-kicker">Perfil Vivo · modelo informativo</span><h1 id="profile-title">Seu universo, sob seu controle.</h1><p>Uma identidade viva que reúne capacidades, vínculos e trajetória sem transformar sua vida em exposição.</p></div>
      <span className="v63-privacy"><ShieldCheck size={17}/> Modelo de privacidade previsto</span>
    </header>

    <div className="v63-profile-stage">
      <div className="v63-profile-orbit" aria-label="Dimensões do Perfil Vivo">
        {profileAreas.map(({ icon: Icon, title, text, visibility }, index) => <button key={title} style={{ '--profile-index': index } as React.CSSProperties}>
          <Icon/><span><b>{title}</b><small>{text}</small><em><LockKeyhole size={12}/>{visibility}</em></span>
        </button>)}
      </div>
      <div className="v63-profile-core">
        <div className="v63-avatar-placeholder"><UserRound size={76}/><span>Avatar do usuário</span></div>
        <strong>Seu nome será exibido após a configuração do perfil</strong>
        <small>Perfil em construção</small>
        <button><Eye size={15}/> Ver como meu perfil aparece</button>
      </div>
    </div>

    <div className="v63-profile-actions">
      <article><Heart/><div><b>Participação social</b><p>Propostas, debates, votações e contribuições comunitárias.</p><button onClick={() => onNavigate('participacao')}>Abrir participação</button></div></article>
      <article><Users/><div><b>Perfil social</b><p>Publicações, conexões e depoimentos com visibilidade escolhida.</p><button onClick={() => onNavigate('comunidade')}>Conhecer comunidade</button></div></article>
    </div>
  </section>;
}
