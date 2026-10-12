import React from 'react';
import { ArrowLeft, BookOpen, Building2, FileText, Landmark, LockKeyhole, MessageCircle, Radio, ShieldCheck, Sparkles } from 'lucide-react';
import type { NavigateV6 } from '../types';

export function UnoBuildingV63({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v63-building" aria-labelledby="building-title">
    <div className="v63-building-shade" aria-hidden="true" />
    <header className="v63-building-heading">
      <button className="v63-back" onClick={() => onNavigate('praca')}><ArrowLeft size={17}/> Voltar à Praça</button>
      <span className="v6-kicker">Edifício Central</span>
      <h1 id="building-title">Bem-vindo ao Prédio da UNO.</h1>
      <p>A UNO está disponível para conversar, explicar a plataforma e apresentar tudo o que já foi autorizado para conhecimento público.</p>
    </header>

    <div className="v63-building-map">
      <article className="v63-building-card is-available">
        <span className="v63-building-icon"><MessageCircle/></span>
        <div><small>Disponível</small><h2>Conversar com a UNO</h2><p>Faça perguntas, conheça os ambientes e entenda os limites atuais da plataforma.</p></div>
        <button onClick={() => onNavigate('conversa')}>Iniciar conversa</button>
      </article>

      <article className="v63-building-card">
        <span className="v63-building-icon"><BookOpen/></span>
        <div><small>Conteúdo público</small><h2>Biblioteca UNO</h2><p>Engenharia, trajetória, princípios e explicações em linguagem acessível.</p></div>
        <button onClick={() => onNavigate('biblioteca')}><BookOpen size={14}/> Abrir biblioteca</button>
      </article>

      <article className="v63-building-card">
        <span className="v63-building-icon"><FileText/></span>
        <div><small>Transparência</small><h2>Documentos públicos</h2><p>Minutas, versões, relatórios e documentos aprovados para consulta.</p></div>
        <button disabled><LockKeyhole size={14}/> Catálogo em preparação</button>
      </article>

      <article className="v63-building-card">
        <span className="v63-building-icon"><Radio/></span>
        <div><small>Comunicação</small><h2>Auditório e transmissões</h2><p>Apresentações, assembleias, aulas e transmissões institucionais.</p></div>
        <button disabled><LockKeyhole size={14}/> Modo demonstrativo</button>
      </article>

      <article className="v63-building-card v63-nos-door">
        <div className="v63-nos-seal"><Landmark/><LockKeyhole className="v63-nos-lock"/></div>
        <div><small>Acesso institucional futuro</small><h2>NÓS S.A.</h2><p>A área administrativa e institucional será aberta após a constituição formal, as assembleias e as validações necessárias.</p><span><ShieldCheck size={15}/> A arquitetura já está preparada para o desbloqueio por etapa.</span></div>
        <button onClick={() => onNavigate('nos')}><Building2 size={15}/> Conhecer a Vitrine pública</button>
      </article>
    </div>

    <aside className="v63-building-uno"><Sparkles/><span><b>A UNO permanece acessível.</b><small>A fundação da NÓS S.A. não limita a conversa pública com a UNO.</small></span></aside>
  </section>;
}
