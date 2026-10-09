import React, { FormEvent, useState } from 'react';
import { Bot, BrainCircuit, FileUp, Mic, Send, Volume2 } from 'lucide-react';
import type { NavigateV6, UnoMessage } from '../types';

const initialMessages: UnoMessage[] = [{
  id: 'welcome', role: 'assistant',
  content: 'Estou aqui. O que você gostaria de construir ou resolver hoje?'
}];

export function ConversationV6({ onNavigate: _onNavigate }: { onNavigate: NavigateV6 }) {
  const [messages, setMessages] = useState<UnoMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [handsFree, setHandsFree] = useState(false);

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const userMessage: UnoMessage = { id: crypto.randomUUID(), role: 'user', content: text };
    const next = [...messages, userMessage];
    setMessages(next); setInput(''); setLoading(true);
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, history: messages.map(({ role, content }) => ({ role, content })) }) });
      const data = await response.json() as { reply?: string };
      setMessages([...next, { id: crypto.randomUUID(), role: 'assistant', content: response.ok && data.reply ? data.reply : 'Não consegui completar a resposta agora. Podemos tentar novamente.' }]);
    } catch {
      setMessages([...next, { id: crypto.randomUUID(), role: 'assistant', content: 'Meu motor de conversa está temporariamente indisponível. Sua mensagem continua nesta sessão.' }]);
    } finally { setLoading(false); }
  }

  return <section className="v62-scene v62-conversation">
    <div className="v62-conversation-presence">
      <div className="v62-uno-portrait"><img src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="Avatar da UNO" /><span>UNO</span></div>
      <div className="v62-agent-portrait"><div><Bot size={72} /></div><strong>Seu agente pessoal</strong><small>Visual configurável na adesão</small></div>
    </div>
    <div className="v62-chat">
      <header><div><span className="v6-kicker">Conversa protegida</span><h1>Converse com a UNO</h1></div><span className="v62-agent-status"><i /> UNO • EVA ouvindo</span></header>
      <div className="v62-message-stream" aria-live="polite">{messages.map(message => <div key={message.id} className={`v62-message ${message.role}`}><span>{message.role === 'assistant' ? 'UNO' : 'Você'}</span>{message.content}</div>)}{loading && <div className="v62-message assistant">UNO está organizando a resposta…</div>}</div>
      <div className="v62-memory-cards"><button><BrainCircuit /> <span><b>O que compreendi</b><small>Resumo autorizado da conversa</small></span></button><button><Send /> <span><b>Próximo passo</b><small>Nenhuma ação sem confirmação</small></span></button><button><Volume2 /> <span><b>Memória autorizada</b><small>Você controla o que permanece</small></span></button></div>
      <form className="v62-composer" onSubmit={sendMessage}><button type="button" title="Anexar"><FileUp /></button><button type="button" title="Falar"><Mic /></button><input value={input} onChange={event => setInput(event.target.value)} placeholder="Digite ou fale com a UNO…" maxLength={4000}/><button className="send" disabled={!input.trim() || loading}><Send /></button><button type="button" className={handsFree ? 'active' : ''} onClick={() => setHandsFree(value => !value)}>Mãos livres</button></form>
      <small className="v6-disclaimer">A UNO informa seus limites. Áudio e memória permanente dependem do consentimento do usuário.</small>
    </div>
  </section>;
}
