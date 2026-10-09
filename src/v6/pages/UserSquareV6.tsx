import React from 'react';
import { AlertTriangle, ArrowRight, Building2, Home, Lightbulb, LockKeyhole, MessageCircle, Radio, Vote } from 'lucide-react';
import type { NavigateV6 } from '../types';

const activeModules = [
  { icon: MessageCircle, title: 'Meu agente UNO', text: 'Converse, tire dúvidas e acompanhe sua jornada.' },
  { icon: Lightbulb, title: 'Ideias', text: 'Registre propostas para sua casa e sua comunidade.' },
  { icon: AlertTriangle, title: 'Demandas', text: 'Relate situações e acompanhe cada etapa.' },
  { icon: Vote, title: 'Participação', text: 'Debates, enquetes, votações e resultados.' },
  { icon: Radio, title: 'Vitrine Nós', text: 'Comunicados, transmissões e assuntos públicos.' }
];

export function UserSquareV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  return (
    <section className="v6-user-square">
      <header className="v6-page-heading">
        <div><span className="v6-kicker">Praça do usuário</span><h1>Seu espaço começa por você e pela sua casa.</h1><p>Um painel simples para conversar, participar e acompanhar o que está sendo construído.</p></div>
        <button className="v6-primary" onClick={() => onNavigate('conversa')}>Conversar com a UNO <ArrowRight size={18} /></button>
      </header>

      <div className="v6-home-hero">
        <div className="v6-home-symbol"><Home size={48} /><span>CASA UNO</span></div>
        <div><span className="v6-status">Perfil demonstrativo</span><h2>Minha Casa</h2><p>O núcleo que reúne moradores, vínculos, necessidades, conquistas e participação.</p></div>
        <div className="v6-progress"><span>Jornada inicial</span><strong>40%</strong><div><i /></div></div>
      </div>

      <div className="v6-card-grid">
        {activeModules.map(({ icon: Icon, title, text }) => <button className="v6-user-card" key={title} onClick={() => title === 'Meu agente UNO' && onNavigate('conversa')}><Icon /><strong>{title}</strong><span>{text}</span><ArrowRight size={16} /></button>)}
        <button className="v6-user-card locked"><Building2 /><strong>Prefeitura e órgãos</strong><span>Integrações institucionais futuras.</span><LockKeyhole size={16} /></button>
      </div>

      <section className="v6-adherence">
        <div><span className="v6-kicker">Adesão familiar</span><h2>Conheça antes de decidir.</h2><p>Nenhuma cobrança é realizada nesta demonstração. Valores, serviços e início das mensalidades serão apresentados com transparência.</p></div>
        <div className="v6-price-list"><span><b>R$ 29,90</b> por adulto responsável</span><span><b>R$ 9,90</b> por dependente da mesma residência</span><button>Simular composição familiar</button></div>
      </section>
    </section>
  );
}

