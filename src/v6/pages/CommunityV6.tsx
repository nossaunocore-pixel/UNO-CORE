import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, Radio, Search, Send, Users, Vote } from 'lucide-react';
import type { NavigateV6 } from '../types';

const posts = [
  { group:'Miguel Badra • Moradores', title:'Qual melhoria deve entrar primeiro na pauta do bairro?', body:'Iluminação, transporte e zeladoria estão abertas para priorização.', tag:'Votação aberta', votes:128 },
  { group:'Vitrine Nós S.A.', title:'Encontro de apresentação da UNO', body:'Acompanhe a construção, envie perguntas e participe da próxima transmissão.', tag:'Transmissão', votes:84 }
];

export function CommunityV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [liked,setLiked]=useState<string[]>([]);
  return <section className="v62-community">
    <header><div><span className="v6-kicker">Rede social interna</span><h1>Comunidade UNO</h1><p>Pessoas, casas e ideias conectadas com contexto, consentimento e propósito.</p></div><div className="v62-community-search"><Search/><input placeholder="Buscar pessoas, grupos e assuntos…"/><Bell/></div></header>
    <div className="v62-community-layout">
      <aside><h2>Meus círculos</h2>{['Minha Casa','Minha Rua','Miguel Badra','Trabalho e Renda','Fazendo a Mudança'].map((item,index)=><button key={item}><Users/><span>{item}<small>{index+3} atualizações</small></span></button>)}<button className="v6-primary" onClick={()=>onNavigate('usuario')}>Ver meu perfil</button></aside>
      <main><div className="v62-publish"><strong>Compartilhe uma ideia com sua comunidade</strong><textarea placeholder="O que você quer propor, perguntar ou construir?"/><div><button>Foto ou arquivo</button><button className="v6-primary"><Send size={16}/> Publicar</button></div></div>{posts.map(post=><article key={post.title}><header><div><b>{post.group}</b><small>Agora • visível para a comunidade</small></div><span>{post.tag}</span></header><h2>{post.title}</h2><p>{post.body}</p><div><button onClick={()=>setLiked(v=>v.includes(post.title)?v.filter(x=>x!==post.title):[...v,post.title])}><Heart fill={liked.includes(post.title)?'currentColor':'none'}/> Apoiar</button><button><MessageCircle/> Comentar</button><button><Vote/> {post.votes} participações</button></div></article>)}</main>
      <aside className="v62-community-live"><h2>Ao vivo e em pauta</h2><button><Radio/><span><b>Pré-lançamento UNO</b><small>Transmissão preparada</small></span></button><h3>Em discussão</h3><button>Mobilidade no bairro</button><button>Banco de talentos</button><button>Valores dos serviços</button></aside>
    </div>
  </section>;
}
