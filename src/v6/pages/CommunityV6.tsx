import React from 'react';
import { Bell, Heart, MessageCircle, Radio, Search, Send, Users, Vote } from 'lucide-react';
import type { NavigateV6 } from '../types';

const posts = [
  {
    group: 'Exemplo de pauta comunitária',
    title: 'Como priorizar melhorias no território?',
    body: 'Exemplo demonstrativo de uma pauta. Nenhuma votação real, publicação ou participação comunitária está sendo registrada nesta tela.',
    tag: 'Conteúdo demonstrativo'
  },
  {
    group: 'Exemplo de comunicado institucional',
    title: 'Encontro de apresentação da UNO',
    body: 'Este cartão ilustra como comunicados poderão aparecer quando a publicação, a moderação e a transmissão estiverem conectadas.',
    tag: 'Conteúdo demonstrativo'
  }
];

export function CommunityV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v62-community">
    <header><div><span className="v6-kicker">Ambiente comunitário · demonstração</span><h1>Comunidade UNO</h1><p>Pessoas, casas e ideias conectadas com contexto, consentimento e propósito.</p></div><div className="v62-community-search"><Search/><input placeholder="Busca será conectada quando o catálogo estiver ativo…" disabled/><Bell/></div></header>
    <div className="v62-community-layout">
      <aside><h2>Espaços previstos</h2>{['Minha Casa','Minha Rua','Meu território','Trabalho e Renda','Grupos de interesse'].map(item=><button key={item} disabled><Users/><span>{item}<small>Dados ainda não conectados</small></span></button>)}<button className="v6-primary" onClick={()=>onNavigate('usuario')}>Ver meu perfil</button></aside>
      <main>
        <div className="v62-publish"><strong>Compartilhe uma ideia com sua comunidade</strong><textarea placeholder="A publicação será habilitada após conectar consentimento, moderação e persistência." disabled/><div><button disabled>Foto ou arquivo · em preparação</button><button className="v6-primary" disabled><Send size={16}/> Publicação indisponível</button></div><small>Esta interface ainda não publica nem armazena conteúdo comunitário.</small></div>
        {posts.map(post=><article key={post.title}><header><div><b>{post.group}</b><small>Exemplo de interface · sem publicação real</small></div><span>{post.tag}</span></header><h2>{post.title}</h2><p>{post.body}</p><div><button disabled><Heart/> Apoiar · indisponível</button><button disabled><MessageCircle/> Comentar · indisponível</button><button disabled><Vote/> Sem contagem real</button></div></article>)}
      </main>
      <aside className="v62-community-live"><h2>Ao vivo e em pauta</h2><button disabled><Radio/><span><b>Transmissões comunitárias</b><small>Integração pendente</small></span></button><h3>Temas que poderão ser organizados</h3><button disabled>Mobilidade no território</button><button disabled>Banco de talentos</button><button disabled>Catálogo de serviços</button></aside>
    </div>
  </section>;
}
