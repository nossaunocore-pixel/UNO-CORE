import React from 'react';
import { BadgeDollarSign, BarChart3, FileCheck2, Gift, LockKeyhole, MessageSquareText, Radio, Users, Vote } from 'lucide-react';
import type { NavigateV6 } from '../types';

const participationCards = [
  { icon: MessageSquareText, title: 'Debates e propostas', text: 'Apresente uma questão, acrescente contexto ou acompanhe uma solução.', status: 'Disponível para conhecer' },
  { icon: Vote, title: 'Consultas e votações', text: 'Cada participação informa se é consulta, enquete ou deliberação formal.', status: 'Regras em construção' },
  { icon: Radio, title: 'Assembleias e transmissões', text: 'Pautas, pareceres, falas, gravações, atas e resultados no mesmo ambiente.', status: 'Modo demonstrativo' },
  { icon: Users, title: 'Programa Embaixador UNO', text: 'Indicações de um único nível, critérios transparentes e sem promessa de renda.', status: 'Aguardando regulamento' },
  { icon: Gift, title: 'Fundo de Ação Comunitária', text: 'Contribuições voluntárias separadas da adesão e prestação de contas pública.', status: 'Aguardando constituição' },
  { icon: FileCheck2, title: 'Minhas participações', text: 'Histórico de opiniões, propostas, consentimentos e resultados.', status: 'Em construção' }
];

export function ParticipationV63({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v63-participation" aria-labelledby="participation-title">
    <header className="v63-page-heading"><div><span className="v6-kicker">Participação</span><h1 id="participation-title">Sua voz com contexto e continuidade.</h1><p>A UNO diferencia escuta pública, consulta, proposta, parecer e decisão formal.</p></div><button className="v6-secondary" onClick={() => onNavigate('comunidade')}><MessageSquareText size={17}/> Ir para a Comunidade</button></header>
    <div className="v63-participation-grid">{participationCards.map(({ icon: Icon, title, text, status }) => <article key={title}><Icon/><div><b>{title}</b><p>{text}</p><span><LockKeyhole size={13}/>{status}</span></div></article>)}</div>
    <section className="v63-ambassador">
      <div><span className="v6-kicker">Modelo em revisão humana</span><h2>Adesão, indicação e contribuição são coisas diferentes.</h2><p>A página mostrará preço, recompensa, contribuição voluntária e destino dos valores em lançamentos separados.</p></div>
      <div className="v63-progress-demo"><header><BadgeDollarSign/><b>Programa Embaixador</b><span>Demonstração</span></header><div><i/><i/><i/><i/><i/></div><small>0 de 5 contratos confirmados · nenhum valor real movimentado</small></div>
      <div className="v63-fund-demo"><BarChart3/><span><b>Fundo comunitário</b><small>Arrecadado · reservado · utilizado · comprovado</small></span></div>
    </section>
  </section>;
}
