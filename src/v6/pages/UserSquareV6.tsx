import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { Briefcase, CheckCircle2, FileCheck, Home, LockKeyhole, MessageCircle, ShieldCheck, Users, Vote, ClipboardCheck, Wrench } from 'lucide-react';
import { auth } from '../../services/firebase';
import type { NavigateV6 } from '../types';

export function UserSquareV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [user, setUser] = useState<User | null>(auth?.currentUser ?? null);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, setUser);
  }, []);

  const displayName = user?.displayName?.trim() || 'pessoa';

  return <section className="v62-scene v62-profile">
    <header className="v62-profile-copy"><h1>Olá, {displayName}</h1><p>Aqui é o seu espaço na UNO. Sua vida, sua casa e sua participação em um só lugar.</p></header>
    <div className="v62-profile-grid">
      <button onClick={() => onNavigate('perfil')}><ShieldCheck/><span><b>Meu Perfil Vivo</b><strong className="v62-ok">Identidade UNO provisionada</strong><small>Revise os dados e as permissões disponíveis.</small></span></button>
      <button onClick={() => onNavigate('casa')}><Home/><span><b>Minha Casa e Família</b><strong>Dados ainda não conectados</strong><small>Moradores, responsabilidades e consentimentos, quando cadastrados.</small></span></button>
      <button onClick={() => onNavigate('participacao')}><Vote/><span><b>Minha participação</b><strong>Conheça o espaço</strong><small>Ideias, debates e decisões da comunidade.</small></span></button>
      <button><FileCheck/><span><b>Minhas solicitações</b><strong>Módulo ainda não conectado</strong><small>O acompanhamento ficará disponível quando a persistência estiver ativa.</small></span></button>
      <button onClick={() => onNavigate('servicos')}><Briefcase/><span><b>Serviços disponíveis</b><strong>Catálogo em preparação</strong><small>Serão exibidos serviços efetivamente liberados para sua região e perfil.</small></span></button>
      <button onClick={() => onNavigate('emprego_renda')}><Wrench/><span><b>Emprego e Renda</b><strong>Perfil profissional em preparação</strong><small>Ofícios, habilidades, oportunidades, serviços e negócios.</small></span></button>
      <button onClick={() => onNavigate('servicos_ativos')}><ClipboardCheck/><span><b>Meus Serviços Ativos</b><strong>Ativações confirmadas</strong><small>Cursos, matrículas e serviços efetivamente habilitados.</small></span></button>
      <button><LockKeyhole/><span><b>Documentos e consentimentos</b><strong>Central de privacidade em preparação</strong><small>Histórico, permissões e solicitações de titulares ainda serão conectados.</small></span></button>
      <button><CheckCircle2/><span><b>Adesão</b><strong>Condição não configurada</strong><small>Não há plano ou cobrança ativa afirmada por esta tela.</small></span></button>
      <button onClick={() => onNavigate('comunidade')}><Users/><span><b>Comunidade UNO</b><strong>Seu perfil social</strong><small>Conexões, grupos e publicações conforme permissões.</small></span></button>
    </div>
    <div className="v62-journey"><span>Pessoa</span><i/><span>Casa</span><i/><span>Família</span><i/><span>Rua</span><i/><span>Bairro</span><i/><span>Cidade</span></div>
    <button className="v62-talk" onClick={() => onNavigate('conversa')}><MessageCircle/> Fale com a UNO…</button>
  </section>;
}
