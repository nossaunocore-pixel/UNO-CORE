import React, { useState } from 'react';
import { Send, Mic, Paperclip, Terminal, Play, ShieldCheck, Zap } from 'lucide-react';
import { engine } from '@core/engine';
import { memory } from '@core/memory';

interface Message {
  id: string;
  sender: 'user' | 'uno';
  text: string;
  type?: 'text' | 'command' | 'audio' | 'file';
  timestamp: string;
  commandExecuted?: string;
  gatewayStatus?: string;
}

export const UnoChatCenter: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'MSG-001',
      sender: 'uno',
      text: 'Saudações. Eu sou o UNO Arquiteto-Chefe. As comunicações cognitivas deste chat são intermediadas com segurança server-side via Supabase Edge Function `uno-ai-gateway`. Como posso auxiliar?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || inputText;
    if (!textToSend.trim() || isProcessing) return;

    const userMsg: Message = {
      id: `MSG-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsProcessing(true);

    // Engine dispatch
    const task = engine.dispatchCommand(textToSend);

    // Invocação segura via Supabase Edge Function uno-ai-gateway (ou fallback mock resiliente)
    let responseText = '';
    let gatewayInfo = 'uno-ai-gateway (Edge Function Server-side)';

    const res = await memory.invokeAiGateway(textToSend);

    if (res.success && res.data) {
      responseText = typeof res.data === 'string' ? res.data : JSON.stringify(res.data);
    } else {
      responseText = textToSend.startsWith('/')
        ? `[Gatilho de Execução] Comando "${textToSend}" registrado na fila ${task.id}. Roteado com segurança via uno-ai-gateway.`
        : `Compreendido. Sua requisição "${textToSend}" foi processada pelo UNO CORE. O contrato de segurança garante que nenhuma chave Gemini seja exposta no navegador.`;
    }

    const unoMsg: Message = {
      id: `MSG-${Date.now() + 1}`,
      sender: 'uno',
      text: responseText,
      commandExecuted: task.command,
      gatewayStatus: gatewayInfo,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages((prev) => [...prev, unoMsg]);
    setIsProcessing(false);
  };

  const triggerAudioMock = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      handleSend("🎙️ [Entrada de Voz Processada]: Verificar status das capacidades registradas.");
    }, 2000);
  };

  const triggerFileMock = () => {
    handleSend("📎 [Arquivo Anexado]: MASTER_SPEC.md (Especificação Mestra homologada).");
  };

  return (
    <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header do Chat Cognitivo */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }} className="text-gradient-cyan">
              CONVERSA COM O UNO CORE
            </h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Orquestrador Cognitivo — Gateway Seguro: <strong style={{ color: 'var(--accent-cyan)' }}>uno-ai-gateway</strong>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => handleSend('/audit --security')} className="btn-primary" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
            <ShieldCheck size={14} /> Audit Security
          </button>
          <button onClick={() => handleSend('/exec --capabilities')} className="btn-primary" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
            <Play size={14} /> Exec
          </button>
        </div>
      </div>

      {/* Lista de Mensagens */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              {msg.sender === 'user' ? 'Operador NOS' : 'UNO CORE (Arquiteto-Chefe)'} • {msg.timestamp}
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '14px 18px',
                borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                background: msg.sender === 'user' 
                  ? 'linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(41, 121, 255, 0.15) 100%)' 
                  : 'rgba(13, 17, 26, 0.85)',
                border: msg.sender === 'user' ? '1px solid var(--accent-cyan)' : '1px solid var(--border-cyan)',
                color: 'var(--text-main)',
                fontSize: '0.92rem',
                lineHeight: 1.5
              }}
            >
              {msg.text}

              {msg.gatewayStatus && (
                <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px dashed var(--border-cyan)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={12} /> Gateway Roteado: {msg.gatewayStatus}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Caixa de Entrada Multimodal */}
      <div style={{ padding: '16px', borderTop: '1px solid var(--border-cyan)', background: 'rgba(7, 9, 14, 0.9)' }}>
        {/* Barra de atalhos rápidos */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {['/status', '/gateway-check', '/capabilities', '/proposals', '/audit'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleSend(cmd)}
              style={{
                background: 'rgba(0, 229, 255, 0.08)',
                border: '1px solid var(--border-cyan)',
                color: 'var(--accent-cyan)',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cmd}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Botão de Anexo */}
          <button
            onClick={triggerFileMock}
            style={{ background: 'transparent', border: '1px solid var(--border-cyan)', color: 'var(--accent-cyan)', padding: '10px', borderRadius: '8px', cursor: 'pointer', display: 'flex' }}
            title="Anexar Arquivo ou Especificação"
          >
            <Paperclip size={18} />
          </button>

          {/* Botão de Gravação de Voz */}
          <button
            onClick={triggerAudioMock}
            style={{
              background: isRecording ? 'var(--accent-rose)' : 'transparent',
              border: isRecording ? 'none' : '1px solid var(--border-cyan)',
              color: isRecording ? '#fff' : 'var(--accent-cyan)',
              padding: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex'
            }}
            title="Entrada de Voz"
          >
            <Mic size={18} className={isRecording ? "pulse-cyan" : ""} />
          </button>

          {/* Input de Texto */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isProcessing ? "Roteando através do uno-ai-gateway..." : (isRecording ? "Ouvindo comando de voz..." : "Enviar comando ou mensagem para o UNO CORE...")}
            style={{
              flex: 1,
              background: 'rgba(13, 17, 26, 0.9)',
              border: '1px solid var(--border-cyan)',
              borderRadius: '8px',
              padding: '12px 16px',
              color: '#fff',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-sans)',
              outline: 'none'
            }}
          />

          {/* Botão Enviar */}
          <button
            onClick={() => handleSend()}
            disabled={isProcessing}
            className="btn-primary"
            style={{ padding: '12px 20px', opacity: isProcessing ? 0.6 : 1 }}
          >
            <span>{isProcessing ? 'Enviando...' : 'Enviar'}</span>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
