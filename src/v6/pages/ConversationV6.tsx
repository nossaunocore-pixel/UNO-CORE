import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { Bot, BrainCircuit, FileUp, Mic, RotateCcw, Send, Trash2, Volume2, WifiOff } from 'lucide-react';
import type { NavigateV6, UnoMessage } from '../types';
import { auth } from '../../services/firebase';

const initialMessages: UnoMessage[] = [{
  id: 'welcome', role: 'assistant',
  content: 'Olá! Você pode conversar comigo como visitante, sem aderir à UNO. O que gostaria de conhecer ou compreender?'
}];

const SESSION_KEY = 'uno:v6:conversation-session';

function createId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}

function restoreSession(): UnoMessage[] {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (!stored) return initialMessages;
    const parsed = JSON.parse(stored) as unknown;
    if (!Array.isArray(parsed)) return initialMessages;
    const valid = parsed.filter((item): item is UnoMessage => Boolean(item)
      && typeof item.id === 'string'
      && (item.role === 'user' || item.role === 'assistant')
      && typeof item.content === 'string');
    return valid.length ? valid.slice(-30) : initialMessages;
  } catch {
    return initialMessages;
  }
}

export function ConversationV6({ onNavigate: _onNavigate }: { onNavigate: NavigateV6 }) {
  const [messages, setMessages] = useState<UnoMessage[]>(restoreSession);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [handsFree, setHandsFree] = useState(false);
  const [error, setError] = useState('');
  const [lastRequest, setLastRequest] = useState<{ text: string; history: UnoMessage[] } | null>(null);
  const [online, setOnline] = useState(() => navigator.onLine);
  const [visitorReady, setVisitorReady] = useState(Boolean(auth?.currentUser));
  const [visitorStatus, setVisitorStatus] = useState('Preparando acesso de visitante…');
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firebaseAuth = auth;
    if (!firebaseAuth) {
      setVisitorStatus('A conversa de visitantes ainda depende da configuração segura do Firebase.');
      return;
    }
    let cancelled = false;
    let creatingAnonymous = false;
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        if (!cancelled) {
          setVisitorReady(true);
          setVisitorStatus(user.isAnonymous ? 'Acesso de visitante' : 'Conta autenticada');
        }
        return;
      }
      if (creatingAnonymous) return;
      creatingAnonymous = true;
      try {
        await signInAnonymously(firebaseAuth);
      } catch {
        if (!cancelled) {
          setVisitorReady(false);
          setVisitorStatus('Acesso de visitante indisponível. Verifique se o login anônimo está habilitado no Firebase.');
        }
      } finally {
        creatingAnonymous = false;
      }
    });
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages.slice(-30)));
    streamRef.current?.scrollTo({ top: streamRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    const updateConnection = () => setOnline(navigator.onLine);
    window.addEventListener('online', updateConnection);
    window.addEventListener('offline', updateConnection);
    return () => {
      window.removeEventListener('online', updateConnection);
      window.removeEventListener('offline', updateConnection);
    };
  }, []);

  async function requestReply(text: string, history: UnoMessage[]) {
    setLoading(true);
    setError('');
    setLastRequest({ text, history });
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 35000);

    try {
      const user = auth?.currentUser;
      if (!user) {
        throw new Error(visitorStatus || 'Não foi possível iniciar uma sessão de visitante.');
      }

      let idToken = await user.getIdToken();
      const visitorMode = user.isAnonymous || (!user.emailVerified && !user.phoneNumber);
      if (!visitorMode) {
        let identityResponse = await fetch('/api/identity/session', {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + idToken }
        });
        let identityData = await identityResponse.json().catch(() => ({})) as { error?: string; status?: string };

        if (identityResponse.status === 202 && identityData.status === 'claims_refresh_required') {
          idToken = await user.getIdToken(true);
          identityResponse = await fetch('/api/identity/session', {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + idToken }
          });
          identityData = await identityResponse.json().catch(() => ({})) as { error?: string; status?: string };
        }

        if (!identityResponse.ok) {
          throw new Error(identityData.error || 'Não foi possível validar sua identidade UNO.');
        }
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + idToken
        },
        body: JSON.stringify({
          message: text,
          history: history.slice(-12).map(({ role, content }) => ({ role, content }))
        }),
        signal: controller.signal
      });
      const data = await response.json().catch(() => ({})) as { reply?: string; error?: string };
      if (!response.ok || !data.reply?.trim()) {
        throw new Error(data.error || 'A UNO não recebeu uma resposta válida do motor de conversa.');
      }
      setMessages(current => [...current, { id: createId(), role: 'assistant', content: data.reply!.trim() }]);
      setLastRequest(null);
    } catch (caught) {
      const message = caught instanceof DOMException && caught.name === 'AbortError'
        ? 'A resposta demorou mais que o esperado. Você pode tentar novamente.'
        : caught instanceof Error
          ? caught.message
          : 'O motor de conversa está temporariamente indisponível.';
      setError(message);
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  }

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const text = input.trim();
    if (!text || loading || !online || !visitorReady) return;
    const history = messages;
    const userMessage: UnoMessage = { id: createId(), role: 'user', content: text };
    setMessages([...messages, userMessage]);
    setInput('');
    await requestReply(text, history);
  }

  function retryLastMessage() {
    if (!lastRequest || loading || !online || !visitorReady) return;
    void requestReply(lastRequest.text, lastRequest.history);
  }

  function clearSession() {
    setMessages(initialMessages);
    setError('');
    setLastRequest(null);
    sessionStorage.removeItem(SESSION_KEY);
  }

  return <section className="v62-scene v62-conversation v7-visitor-chat">
    <div className="v62-conversation-presence">
      <div className="v62-uno-portrait"><img src="/assets/uno/avatar-uno-corpo-inteiro-v1.png" alt="Avatar da UNO" /><span>UNO</span></div>
      <div className="v62-agent-portrait"><div><Bot size={72} /></div><strong>Assistente de conversa</strong><small>Atendimento informativo a visitantes</small></div>
    </div>
    <div className="v62-chat">
      <header><div><span className="v6-kicker">Conversa pública</span><h1>Converse com a UNO</h1></div><div className="v64-chat-tools"><span className={`v62-agent-status ${online ? '' : 'offline'}`}>{online ? <i /> : <WifiOff size={15} />} {visitorReady ? visitorStatus : 'Preparando visitante'}</span><button type="button" className="v64-clear-chat" onClick={clearSession} title="Limpar conversa desta sessão"><Trash2 size={17} /><span>Limpar</span></button></div></header>
      <div ref={streamRef} className="v62-message-stream" aria-live="polite" aria-busy={loading}>{messages.map(message => <div key={message.id} className={`v62-message ${message.role}`}><span>{message.role === 'assistant' ? 'UNO' : 'Você'}</span>{message.content}</div>)}{loading && <div className="v62-message assistant v64-thinking"><span>UNO</span><b /><b /><b /><small>Organizando a resposta…</small></div>}{error && <div className="v64-chat-error" role="alert"><strong>Não foi possível concluir</strong><span>{error}</span>{lastRequest && <button type="button" onClick={retryLastMessage} disabled={loading || !online || !visitorReady}><RotateCcw size={16} /> Tentar novamente</button>}</div>}</div>
      <div className="v62-memory-cards"><button type="button" disabled><BrainCircuit /> <span><b>O que compreendi</b><small>Resumo desta sessão, ainda não salvo</small></span></button><button type="button" disabled><Send /> <span><b>Próximo passo</b><small>Nenhuma ação sem confirmação</small></span></button><button type="button" disabled><Volume2 /> <span><b>Memória autorizada</b><small>Memória persistente não ativada</small></span></button></div>
      <form className="v62-composer" onSubmit={sendMessage}><button type="button" title="Anexar arquivo — em preparação" aria-label="Anexar arquivo — em preparação" disabled><FileUp /></button><button type="button" title="Falar — em preparação" aria-label="Falar — em preparação" disabled><Mic /></button><input value={input} onChange={event => setInput(event.target.value)} placeholder={visitorReady ? 'Pergunte qualquer coisa sobre a UNO…' : 'Preparando acesso de visitante…'} maxLength={4000} disabled={!online || !visitorReady}/><button className="send" disabled={!input.trim() || loading || !online || !visitorReady} title="Enviar mensagem"><Send /></button><button type="button" className={`v64-hands-free ${handsFree ? 'active' : ''}`} onClick={() => setHandsFree(value => !value)} aria-pressed={handsFree} title="Modo mãos livres — interface preparada">Mãos livres</button>{input.length > 3600 && <small className="v64-char-count">{input.length}/4000</small>}</form>
      <small className="v6-disclaimer">Visitantes podem conversar sem adesão. Para responder, a plataforma cria uma sessão anônima temporária no Firebase e envia a mensagem ao provedor de IA. O histórico fica nesta sessão do navegador; não envie senhas, documentos, dados financeiros ou informações sensíveis. Limpar a conversa remove o histórico local desta sessão.</small>
    </div>
  </section>;
}
