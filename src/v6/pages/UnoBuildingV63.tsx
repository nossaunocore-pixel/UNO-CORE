import React from 'react';
import { ArrowLeft, BookOpen, Building2, FileText, Landmark, LockKeyhole, MessageCircle, Radio, ShieldCheck, Sparkles, Users, Network, HeartHandshake, Scale } from 'lucide-react';
import type { NavigateV6 } from '../types';

export function UnoBuildingV63({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v63-building v7-institution" aria-labelledby="building-title">
    <div className="v63-building-shade" aria-hidden="true" />
    <header className="v63-building-heading">
      <button className="v63-back" onClick={() => onNavigate('praca')}><ArrowLeft size={17}/> Voltar à Praça</button>
      <span className="v6-kicker">Edifício Central · visão institucional</span>
      <h1 id="building-title">Uma estrutura para conectar pessoas, recursos e possibilidades.</h1>
      <p>A UNO está sendo concebida como uma plataforma de organização humana, social e econômica. Seu papel é ajudar pessoas e organizações a se ouvirem, compreenderem necessidades, encontrarem caminhos e coordenarem ações com responsabilidade.</p>
    </header>

    <section className="v7-institution-purpose">
      <span className="v6-kicker">Propósito</span>
      <h2>Ser ouvido. Ser compreendido. Ser direcionado. Ser nutrido.</h2>
      <p>A tecnologia deve aproximar pessoas e recursos, sem substituir a autonomia humana, impor crenças ou transformar decisões importantes em automatismos sem revisão.</p>
    </section>

    <div className="v7-institution-pillars">
      <article><HeartHandshake/><h2>Acolhimento</h2><p>Escuta respeitosa, orientação contextual e encaminhamentos responsáveis.</p></article>
      <article><Users/><h2>Organização social</h2><p>Comunidades, participação, iniciativas locais e cooperação entre pessoas.</p></article>
      <article><Network/><h2>Conexão econômica</h2><p>Comércio, trabalho, serviços e circulação de recursos em ambientes próprios.</p></article>
      <article><Scale/><h2>Governança</h2><p>Papéis, limites, transparência, rastreabilidade e autorização humana.</p></article>
    </div>

    <section className="v7-institution-architecture">
      <div><span className="v6-kicker">Como a UNO se organiza</span><h2>Um universo com ambientes e responsabilidades distintos.</h2><p>A arquitetura prevê espaços para pessoas, famílias, comunidades, profissionais, negócios e instituições. Cada vínculo terá permissões próprias; pertencer a um espaço não dará acesso automático aos demais.</p></div>
      <ol>
        <li><b>Pessoa e família</b><small>Identidade, preferências, vínculos e privacidade.</small></li>
        <li><b>Comunidade e território</b><small>Escuta, participação, projetos e necessidades locais.</small></li>
        <li><b>Trabalho e economia</b><small>Talentos, serviços, comércio, logística e oportunidades.</small></li>
        <li><b>Instituições e governança</b><small>Integrações autorizadas, responsabilidades e prestação de contas.</small></li>
      </ol>
    </section>

    <div className="v7-institution-notice"><ShieldCheck/><span><b>O que é público e o que é reservado?</b><small>Esta página apresenta a proposta institucional. Documentos internos, departamentos em negociação, credenciais, dados pessoais e ferramentas administrativas não são exibidos ao público.</small></span></div>

    <div className="v63-building-map">
      <article className="v63-building-card is-available">
        <span className="v63-building-icon"><MessageCircle/></span>
        <div><small>Aberto a visitantes</small><h2>Converse com a UNO</h2><p>Faça perguntas sobre o propósito, os ambientes e o estágio real da plataforma.</p></div>
        <button onClick={() => onNavigate('conversa')}>Iniciar conversa</button>
      </article>
      <article className="v63-building-card">
        <span className="v63-building-icon"><BookOpen/></span>
        <div><small>Informação pública</small><h2>Biblioteca UNO</h2><p>Apresentações e explicações aprovadas para consulta pública.</p></div>
        <button onClick={() => onNavigate('biblioteca')}><BookOpen size={14}/> Abrir biblioteca</button>
      </article>
      <article className="v63-building-card">
        <span className="v63-building-icon"><Radio/></span>
        <div><small>Futuro ambiente público</small><h2>Auditório e transmissões</h2><p>Apresentações, encontros, assembleias e conteúdos públicos quando o módulo estiver conectado.</p></div>
        <button disabled><LockKeyhole size={14}/> Em preparação</button>
      </article>
      <article className="v63-building-card v63-nos-door">
        <div className="v63-nos-seal"><Landmark/><LockKeyhole className="v63-nos-lock"/></div>
        <div><small>Estrutura jurídica e operacional</small><h2>NÓS S.A.</h2><p>A estrutura societária e institucional será apresentada publicamente conforme sua constituição, validações e aprovações formais. Esta tela não afirma que o processo jurídico esteja concluído.</p><span><ShieldCheck size={15}/> Informações internas permanecem reservadas.</span></div>
        <button onClick={() => onNavigate('nos')}><Building2 size={15}/> Conhecer a Vitrine Comercial</button>
      </article>
    </div>

    <aside className="v63-building-uno"><Sparkles/><span><b>A proposta é pública. Os dados privados não.</b><small>Visitantes podem conhecer a UNO e conversar sem criar uma conta. Recursos pessoais e operações exigirão autenticação e permissões adequadas.</small></span></aside>
  </section>;
}
