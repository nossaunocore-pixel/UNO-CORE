import React, { useState, useRef, useEffect } from 'react';
import { ViewScreen, ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, Home, Shield, CornerDownLeft } from 'lucide-react';

interface ConversationScreenProps {
  onNavigate: (screen: ViewScreen) => void;
  onAdherePact: () => void;
  isFounder: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    sender: 'uno',
    text: 'Olá. Eu sou a UNO. Quero conhecer você, compreender suas necessidades e mostrar o que podemos construir juntos. O que mais importa para você hoje?',
    timestamp: '10:00',
    category: 'system'
  },
  {
    id: '2',
    sender: 'uno',
    text: 'Você pode conversar livremente. Se preferir, comece falando sobre sua casa, seu trabalho, seu bairro ou uma ideia que gostaria de ver acontecer.',
    timestamp: '10:01',
    category: 'general'
  }
];

export const ConversationScreen: React.FC<ConversationScreenProps> = ({ onNavigate, onAdherePact, isFounder }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const historyForApi = messages.map((message) => ({
      role: message.sender === 'uno' ? 'assistant' as const : 'user' as const,
      content: message.text
    }));

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history: historyForApi })
      });

      const data = await response.json() as { reply?: string; error?: string };
      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'Resposta indisponível');
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'uno',
        text: data.reply as string,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'uno',
        text: 'Meu motor de conversa não está disponível neste ambiente agora. Sua mensagem não foi registrada como atendimento. Você ainda pode explorar a demonstração da Casa UNO enquanto verificamos a conexão.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        category: 'system'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleChipClick = (prompt: string) => {
    void handleSendMessage(prompt);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
      {/* Header Bar of Chat */}
      <div className="uno-glass-card" style={{ padding: '1rem 1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="uno-logo-hex" style={{ width: '34px', height: '34px' }}>
            <Bot size={18} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>UNO — Núcleo Conversacional</div>
            <div style={{ fontSize: '0.75rem', color: '#00e5ff', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00e5ff', boxShadow: '0 0 8px #00e5ff' }}></span>
              Conversa assistida · fase MVP
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="uno-btn-outline" onClick={() => onNavigate('casa')} style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
            <Home size={14} /> Casa UNO
          </button>
          {isFounder && (
            <button className="uno-btn-outline" onClick={() => onNavigate('mestre')} style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
              <Shield size={14} /> Painel Mestre
            </button>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="uno-glass-card" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', borderRadius: '0.75rem' }}>
        {messages.map((msg) => (
          <div 
            key={msg.id}
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '82%'
            }}
          >
            {msg.sender === 'uno' && (
              <div className="uno-logo-hex" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
                <Bot size={16} />
              </div>
            )}

            <div
              style={{
                background: msg.sender === 'user' 
                  ? 'linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(2, 132, 199, 0.2))' 
                  : 'rgba(15, 23, 42, 0.85)',
                border: msg.sender === 'user'
                  ? '1px solid rgba(0, 229, 255, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: msg.sender === 'user' ? '1rem 1rem 0.2rem 1rem' : '1rem 1rem 1rem 0.2rem',
                padding: '0.9rem 1.15rem',
                color: '#ffffff',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                boxShadow: msg.sender === 'user' ? '0 4px 15px rgba(0, 229, 255, 0.15)' : 'none'
              }}
            >
              <div>{msg.text}</div>

              {/* Action buttons embedded in message responses */}
              {msg.text.includes('Casa UNO agora?') && (
                <button 
                  className="uno-btn-primary" 
                  onClick={() => onNavigate('casa')} 
                  style={{ marginTop: '0.75rem', padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  <Home size={14} /> Ir para a Casa UNO
                </button>
              )}

              {msg.text.includes('adesão simbólica agora?') && !isFounder && (
                <button 
                  className="uno-btn-amber" 
                  onClick={onAdherePact} 
                  style={{ marginTop: '0.75rem', padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  <Sparkles size={14} /> Confirmar Adesão Gratuita
                </button>
              )}

              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.4rem', textAlign: 'right' }}>
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0, 229, 255, 0.2)', border: '1px solid #00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <User size={16} color="#00e5ff" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
            <div className="uno-logo-hex" style={{ width: '28px', height: '28px' }}>
              <Bot size={14} />
            </div>
            UNO está processando...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggested Prompt Chips */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', padding: '0.5rem 0', marginTop: '0.5rem' }}>
        <button className="uno-nav-btn" onClick={() => handleChipClick('Como funciona a Casa UNO?')}>
          💡 Como funciona a Casa UNO?
        </button>
        <button className="uno-nav-btn" onClick={() => handleChipClick('Quero entender como funciona a adesão voluntária')}>
          ⭐ Como funciona a adesão?
        </button>
        <button className="uno-nav-btn" onClick={() => handleChipClick('Como sugerir uma ideia?')}>
          📝 Como sugerir uma ideia?
        </button>
        <button className="uno-nav-btn" onClick={() => handleChipClick('Ver status do sistema')}>
          🛡️ Ver status do sistema
        </button>
      </div>

      {/* Input Box */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
        <input
          type="text"
          className="uno-input"
          placeholder="Digite sua dúvida, mensagem ou comando para a UNO..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && void handleSendMessage()}
        />
        <button className="uno-btn-primary" onClick={() => void handleSendMessage()} disabled={isTyping} style={{ padding: '0.75rem 1.25rem' }}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
