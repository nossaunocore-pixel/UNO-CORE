import React from 'react';
import { Briefcase, CheckCircle2, FileCheck, Home, LockKeyhole, MessageCircle, ShieldCheck, Users, Vote } from 'lucide-react';
import type { NavigateV6 } from '../types';

export function UserSquareV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v62-scene v62-profile">
    <header className="v62-profile-copy"><h1>Olá, Rudson</h1><p>Aqui é o seu espaço na UNO. Sua vida, sua casa e sua participação em um só lugar.</p></header>
    <div className="v62-profile-grid">
      <button><ShieldCheck/><span><b>Minha identidade</b><strong className="v62-ok">Verificada</strong><small>Dados protegidos e sob seu controle.</small></span></button>
      <button><Home/><span><b>Minha Casa e Família</b><strong>1 responsável • 2 vínculos</strong><small>Moradores, responsabilidades e consentimentos.</small></span></button>
      <button><Vote/><span><b>Minha participação</b><strong>1 votação ativa</strong><small>Ideias, debates e decisões da comunidade.</small></span></button>
      <button><FileCheck/><span><b>Minhas solicitações</b><strong>1 em andamento</strong><small>Acompanhe demandas e propostas.</small></span></button>
      <button><Briefcase/><span><b>Serviços disponíveis</b><strong>Cidadania • Trabalho • Educação</strong><small>Apenas serviços já liberados para você.</small></span></button>
      <button><LockKeyhole/><span><b>Documentos e consentimentos</b><strong>Permissões atualizadas</strong><small>Contratos, registros e privacidade.</small></span></button>
      <button><CheckCircle2/><span><b>Adesão</b><strong className="v62-ok">Plano cidadão • ativo</strong><small>Valores e condições sempre transparentes.</small></span></button>
      <button onClick={() => onNavigate('comunidade')}><Users/><span><b>Comunidade UNO</b><strong>Seu perfil social</strong><small>Conexões, grupos e publicações.</small></span></button>
    </div>
    <div className="v62-journey"><span>Pessoa</span><i/><span>Casa</span><i/><span>Família</span><i/><span>Rua</span><i/><span>Bairro</span><i/><span>Cidade</span></div>
    <button className="v62-talk" onClick={() => onNavigate('conversa')}><MessageCircle/> Fale com a UNO…</button>
  </section>;
}
