import React, { FormEvent, useState } from 'react';
import { ArrowLeft, Mic, Send, Volume2 } from 'lucide-react';
import type { NavigateV6, UnoMessage } from '../types';

const initialMessages: UnoMessage[] = [{
  id: 'welcome',
  role: 'assistant',
  content: 'Olá. Eu sou a UNO. Posso conhecer você, ouvir o que importa e explicar com transparência o que já existe e o que ainda está em construção.'
}];

export function ConversationV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [messages, setMessages] = useState<UnoMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const userMessage: UnoMessage = { id: crypto.randomUUID(), role: 'user', content: text };
    const next = [...messages, userMessage];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages.map(({ role, content }) => ({ role, content })) })
      });
      const data = await response.json() as { reply?: string; error?: string };
      const reply = response.ok && data.reply ? data.reply : 'Neste momento eu não consegui completar a resposta. Sua mensagem permanece visível nesta sessão para tentarmos novamente.';
      setMessages([...next, { id: crypto.randomUUID(), role: 'assistant', content: reply }]);
    } catch {
      setMessages([...next, { id: crypto.randomUUID(), role: 'assistant', content: 'A conexão com meu motor de conversa está indisponível agora. Podemos continuar pela demonstração visual.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="v6-conversation">
      <aside className="v6-conversation-avatar">
        <button className="v6-back" onClick={() => onNavigate('praca')}><ArrowLeft size={18} /> Praça UNO</button>
        <img src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="UNO" />
        <h2>Conversa com a UNO</h2>
        <p>Ambiente de escuta, orientação e construção conjunta.</p>
        <span className="v6-online">● UNO disponível</span>
      </aside>
      <div className="v6-chat-panel">
        <header><div><strong>UNO</strong><small>Respostas podem usar o motor cognitivo conectado</small></div><button title="Ouvir respostas"><Volume2 size={19} /></button></header>
        <div className="v6-messages" aria-live="polite">
          {messages.map(message => <div key={message.id} className={`v6-message ${message.role}`}>{message.content}</div>)}
          {loading && <div className="v6-message assistant v6-typing">UNO está organizando a resposta…</div>}
        </div>
        <div className="v6-suggestions">
          {['Quero conhecer a UNO', 'Tenho uma ideia', 'Quero participar das decisões'].map(text => (
            <button key={text} onClick={() => setInput(text)}>{text}</button>
          ))}
        </div>
        <form className="v6-composer" onSubmit={sendMessage}>
          <button type="button" title="Áudio em preparação"><Mic /></button>
          <input value={input} onChange={event => setInput(event.target.value)} placeholder="Digite sua mensagem…" maxLength={4000} />
          <button type="submit" className="send" disabled={!input.trim() || loading}><Send /></button>
        </form>
        <small className="v6-disclaimer">A UNO informa seus limites e não afirma que executou serviços ainda demonstrativos.</small>
      </div>
    </section>
  );
}

