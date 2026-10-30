import React from 'react';
import { ArrowRight, BookHeart, HandHeart, HeartHandshake, MapPin, MessageCircle, ShieldCheck, Sprout, Users, Vote } from 'lucide-react';
import type { NavigateV6 } from '../types';

const socialPillars = [
  { icon: HeartHandshake, title: 'Escuta e acolhimento', text: 'Um espaço para a pessoa ser ouvida com respeito, organizar o que está vivendo e encontrar caminhos possíveis, sem julgamento ou promessa de solução automática.' },
  { icon: MapPin, title: 'Leitura do território', text: 'Identificar necessidades, recursos, talentos e iniciativas da rua, bairro e cidade, com dados proporcionais à participação real e proteção da privacidade.' },
  { icon: Sprout, title: 'Projetos e ações locais', text: 'Apoiar a organização de mutirões, melhorias, campanhas, projetos comunitários e redes de cooperação com responsáveis e acompanhamento.' },
  { icon: Vote, title: 'Participação e decisões', text: 'Separar ideias, debates, consultas, votações e deliberações formais, deixando claro quem participa e qual é o alcance de cada decisão.' },
  { icon: HandHeart, title: 'Rede de apoio e solidariedade', text: 'Conectar voluntários, iniciativas e causas com destinatário, finalidade, critérios e prestação de contas claros. Apoio não significa adesão à plataforma.' },
  { icon: BookHeart, title: 'Cultura, aprendizagem e convivência', text: 'Dar espaço a educação, cultura, esporte, formação, encontros e atividades que fortaleçam vínculos e capacidades locais.' }
];

export function CommunityV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v62-community v7-community" aria-labelledby="community-title">
    <header>
      <div>
        <span className="v6-kicker">Dimensão social · visão pública</span>
        <h1 id="community-title">Uma comunidade que escuta, organiza e age junto.</h1>
        <p>A UNO pretende ajudar pessoas e territórios a reconhecer desafios, reunir capacidades e transformar boas ideias em iniciativas acompanháveis.</p>
      </div>
      <button className="v6-primary" onClick={() => onNavigate('conversa')}><MessageCircle size={17}/> Conversar com a UNO</button>
    </header>

    <section className="v7-community-purpose">
      <span className="v6-kicker">O ciclo de cuidado</span>
      <div><b>Ser ouvido</b><i/><b>Ser compreendido</b><i/><b>Ser direcionado</b><i/><b>Ser nutrido</b></div>
      <p>O ponto de partida é a pessoa. A organização coletiva só acontece com participação voluntária, contexto, responsabilidade e respeito às diferenças.</p>
    </section>

    <div className="v7-community-grid">
      {socialPillars.map(({ icon: Icon, title, text }) => <article key={title}>
        <span><Icon/></span><div><h2>{title}</h2><p>{text}</p></div>
      </article>)}
    </div>

    <section className="v7-community-territory">
      <div><span className="v6-kicker">Organização progressiva</span><h2>Da pessoa ao território, sem perder o contexto.</h2><p>Os assuntos podem ser organizados por escala, sem expor dados pessoais e sem presumir que uma amostra represente toda a população.</p></div>
      <ol><li>Pessoa</li><li>Casa e família</li><li>Rua</li><li>Bairro</li><li>Cidade</li><li>Rede de territórios</li></ol>
    </section>

    <section className="v7-community-actions">
      <article><Users/><div><h2>Participação social</h2><p>Conheça como ideias, consultas e decisões deverão ser organizadas.</p><button onClick={() => onNavigate('participacao')}>Conhecer participação <ArrowRight size={15}/></button></div></article>
      <article><ShieldCheck/><div><h2>Privacidade e segurança</h2><p>Informações pessoais, relatos sensíveis e vínculos privados não serão expostos por padrão.</p><small>Política de acesso e proteção em implementação</small></div></article>
    </section>

    <p className="v7-community-notice"><ShieldCheck size={17}/> Esta página apresenta a proposta social da UNO. Não representa serviços públicos oficiais, não confirma projetos em execução e não exibe contagens, votações, doações ou resultados comunitários reais. Ações futuras dependerão de adesão voluntária, governança, segurança e validação das responsabilidades.</p>
  </section>;
}
