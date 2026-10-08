import React, { useState, useRef } from 'react';
import { 
  MessageSquare, 
  Send, 
  Bot, 
  Sparkles, 
  User, 
  Compass, 
  ArrowRight, 
  Paperclip,
  X,
  FileText,
  FileSpreadsheet,
  FileCode,
  FileArchive,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { P01ViewId } from '../../components/shell/UNOGlobalShell';

interface EncontroDialogoPageProps {
  onNavigate: (view: P01ViewId) => void;
}

interface FileAttachment {
  name: string;
  size: string;
  type: string;
  extension: string;
}

interface MessageItem {
  id: string;
  sender: 'eva' | 'user';
  text: string;
  timestamp: string;
  file?: FileAttachment;
  agentName?: 'EVA' | 'Gemini Engine' | 'GPT-4o / Code Core';
  details?: {
    read: string;
    action: string;
    result: string;
  };
  showEnvironmentCards?: boolean;
}

export const EncontroDialogoPage: React.FC<EncontroDialogoPageProps> = ({ onNavigate }) => {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState<FileAttachment | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'msg-1',
      sender: 'eva',
      text: 'Olá! Eu sou a EVA. Seja muito bem-vindo à UNO. Escreva sua mensagem ou anexe qualquer arquivo (.pdf, .txt, .csv, .xlsx, .json, .zip, código ou imagem) para processamento imediato.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showEnvironmentCards: true
    }
  ]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const sizeKb = (file.size / 1024).toFixed(1) + ' KB';

    setSelectedFile({
      name: file.name,
      size: sizeKb,
      type: file.type || 'file',
      extension
    });
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() && !selectedFile) return;

    const userMsg: MessageItem = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: inputText.trim(),
      file: selectedFile || undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const currentQuery = inputText;
    const currentFile = selectedFile;

    setInputText('');
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';

    // LÓGICA DE FUNCIONAMENTO AUTOMÁTICO
    setTimeout(() => {
      let agentName: 'EVA' | 'Gemini Engine' | 'GPT-4o / Code Core' = 'EVA';
      let readText = '';
      let actionText = '';
      let resultText = '';
      let mainText = '';

      if (currentFile) {
        const ext = currentFile.extension;
        if (['pdf', 'txt', 'md', 'doc', 'docx'].includes(ext)) {
          agentName = 'EVA';
          readText = `Arquivo textual [${currentFile.name}] (${currentFile.size})`;
          actionText = 'Extração de linguagem natural e compilação conceitual realizada por EVA.';
          resultText = 'Documento validado com sucesso. Informações integradas à sua sessão sovereign.';
          mainText = `Recebi seu documento **${currentFile.name}**. O conteúdo foi lido e estruturado com transparência total.`;
        } else if (['csv', 'xlsx', 'xls', 'json', 'png', 'jpg', 'jpeg', 'svg'].includes(ext)) {
          agentName = 'Gemini Engine';
          readText = `Matriz de Dados / Mídia [${currentFile.name}] (${currentFile.size})`;
          actionText = 'Análise multimodal e estruturação de tabelas via Gemini Engine.';
          resultText = 'Dados processados sem perdas. Visualização e métricas disponíveis no sistema.';
          mainText = `Arquivo de dados/mídia **${currentFile.name}** analisado pela Gemini Engine.`;
        } else {
          agentName = 'GPT-4o / Code Core';
          readText = `Pacote / Código Fonte [${currentFile.name}] (${currentFile.size})`;
          actionText = 'Inspeção de código, parsing de sintaxe e verificação de dependências.';
          resultText = 'Módulo compilado e pronto para integração nos ambientes UNO.';
          mainText = `Código/Pacote **${currentFile.name}** verificado pelo agente de engenharia.`;
        }
      } else {
        readText = `Mensagem de texto do usuário ("${currentQuery}")`;
        actionText = 'Roteamento de intenção e contextualização pelo Acolhimento EVA.';
        resultText = 'Resposta formulada de acordo com as normas da Constituição UNO.';

        if (currentQuery.toLowerCase().includes('casa') || currentQuery.toLowerCase().includes('resid')) {
          mainText = 'Entendido! O Ambiente CASA gerencia lar, energia fotovoltaica e convivência.';
        } else if (currentQuery.toLowerCase().includes('trabalho') || currentQuery.toLowerCase().includes('business')) {
          mainText = 'Perfeito! O Ambiente BUSINESS oferece oficinas eco-tech, CNC 3D e trocas sustentáveis.';
        } else if (currentQuery.toLowerCase().includes('mapa') || currentQuery.toLowerCase().includes('mundo')) {
          mainText = 'Ótimo! O Ambiente MUNDI permite navegar pelo mapa espacial e malha mesh.';
        } else {
          mainText = 'Recebido com sucesso! A UNO garante soberania pessoal, segurança e eficiência em todas as etapas.';
        }
      }

      const evaReply: MessageItem = {
        id: 'eva-' + Date.now(),
        sender: 'eva',
        agentName,
        text: mainText,
        details: {
          read: readText,
          action: actionText,
          result: resultText
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showEnvironmentCards: true
      };

      setMessages(prev => [...prev, evaReply]);
    }, 700);
  };

  const getFileIcon = (ext: string) => {
    if (['pdf', 'txt', 'md'].includes(ext)) return <FileText className="w-4 h-4 text-amber-300" />;
    if (['csv', 'xlsx', 'json'].includes(ext)) return <FileSpreadsheet className="w-4 h-4 text-emerald-300" />;
    if (['zip', 'tar', 'gz'].includes(ext)) return <FileArchive className="w-4 h-4 text-indigo-300" />;
    if (['png', 'jpg', 'jpeg', 'svg'].includes(ext)) return <ImageIcon className="w-4 h-4 text-sky-300" />;
    return <FileCode className="w-4 h-4 text-cyan-300" />;
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] bg-[#020617] text-slate-100 p-4 md:p-8 flex flex-col justify-between overflow-hidden font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 🌌 DEEP SPACE & GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[190px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff06_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 🔹 HEADER */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-cyan-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)] ring-2 ring-amber-300">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              <span>UNO</span>
              <span className="text-amber-400 font-mono text-xl">◎</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 font-mono text-xl tracking-wider text-glow-gold">
                DIÁLOGO & ACOLHIMENTO
              </span>
            </h1>
            <p className="text-xs font-mono text-slate-300 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> EVA • Processamento Inteligente de Mensagens & Arquivos
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('escolha_ambiente')}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-extrabold font-mono text-xs flex items-center justify-center gap-2 hex-btn shadow-[0_0_25px_rgba(0,229,255,0.5)] cursor-pointer"
        >
          <span>ESCOLHA SEU AMBIENTE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 💬 CHAT CONTAINER */}
      <div className="relative z-20 my-4 max-w-4xl mx-auto w-full flex-1 flex flex-col bg-slate-900/80 border-2 border-amber-500/60 rounded-3xl p-4 md:p-6 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-4">
        
        <div className="flex-1 min-h-[340px] max-h-[480px] overflow-y-auto space-y-5 pr-2">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-3">
              <div className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`p-3 rounded-2xl flex-shrink-0 font-bold text-xs shadow-lg ${
                  msg.sender === 'user' 
                    ? 'bg-amber-500 text-slate-950' 
                    : 'bg-gradient-to-tr from-amber-500 via-amber-400 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] ring-2 ring-amber-300'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-lg p-4 rounded-3xl text-xs font-sans leading-relaxed shadow-2xl ${
                  msg.sender === 'user'
                    ? 'bg-amber-950/90 border border-amber-500/60 text-amber-100 rounded-tr-none'
                    : 'speech-bubble-floating text-slate-100 rounded-tl-none border-amber-500/50'
                }`}>
                  <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/90 mb-1.5 font-bold">
                    <span>{msg.sender === 'user' ? 'Você' : (msg.agentName || 'EVA Assistant')}</span>
                    <span className="text-slate-400">{msg.timestamp}</span>
                  </div>

                  {/* Attachment in User Message */}
                  {msg.file && (
                    <div className="mb-2 p-2.5 rounded-xl bg-slate-950/90 border border-amber-500/50 flex items-center gap-2 font-mono text-[11px] text-amber-200">
                      {getFileIcon(msg.file.extension)}
                      <span className="font-bold truncate">{msg.file.name}</span>
                      <span className="text-slate-400 text-[10px]">({msg.file.size})</span>
                    </div>
                  )}

                  {msg.text && <div>{msg.text}</div>}

                  {/* Automated Processing Details */}
                  {msg.details && (
                    <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5 font-mono text-[11px]">
                      <div className="text-amber-300 font-bold flex items-start gap-1">
                        <span>📄 O que leu:</span>
                        <span className="text-slate-200 font-normal">{msg.details.read}</span>
                      </div>
                      <div className="text-cyan-300 font-bold flex items-start gap-1">
                        <span>⚙️ O que fez:</span>
                        <span className="text-slate-200 font-normal">{msg.details.action}</span>
                      </div>
                      <div className="text-emerald-400 font-bold flex items-start gap-1">
                        <span>🎯 Resultado:</span>
                        <span className="text-slate-200 font-normal">{msg.details.result}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Environment Choice Buttons */}
              {msg.showEnvironmentCards && msg.sender === 'eva' && (
                <div className="ml-12 p-4 rounded-3xl bg-slate-950/90 border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(0,229,255,0.25)] space-y-3 max-w-md backdrop-blur-xl animate-float">
                  <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5 text-glow-cyan">
                    <Sparkles className="w-4 h-4 text-cyan-400" /> AMBIENTES OPERACIONAIS DISPONÍVEIS:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      onClick={() => onNavigate('pessoa')}
                      className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/50 text-amber-300 hover:bg-amber-500/20 font-bold flex items-center justify-between cursor-pointer transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                    >
                      <span>👤 PESSOA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate('casa')}
                      className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/20 font-bold flex items-center justify-between cursor-pointer transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                    >
                      <span>🏠 CASA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate('business')}
                      className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/20 font-bold flex items-center justify-between cursor-pointer transition-all shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                    >
                      <span>💼 BUSINESS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate('mundi')}
                      className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 font-bold flex items-center justify-between cursor-pointer transition-all shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                    >
                      <span>🌍 MUNDO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Selected File Preview Pill */}
        {selectedFile && (
          <div className="px-3 py-2 rounded-xl bg-slate-950 border border-cyan-400/60 flex items-center justify-between font-mono text-xs text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <div className="flex items-center gap-2 truncate">
              {getFileIcon(selectedFile.extension)}
              <span className="font-bold truncate">{selectedFile.name}</span>
              <span className="text-slate-400 text-[10px]">({selectedFile.size})</span>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-red-400 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Input Form with File Attachment & Hex Send Button */}
        <form onSubmit={handleSendMessage} className="pt-2 flex items-center gap-2 sm:gap-3">
          
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.txt,.md,.json,.csv,.xlsx,.xls,.zip,.png,.jpg,.jpeg,.svg,.js,.ts,.tsx,.jsx,.py,.html,.css"
            className="hidden"
          />

          {/* Attachment Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Anexar arquivo (.pdf, .txt, .csv, .xlsx, .json, .zip, código ou imagem)"
            className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border-2 border-cyan-500/50 hover:border-cyan-300 text-cyan-300 hover:text-cyan-200 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.3)] backdrop-blur-xl flex-shrink-0"
          >
            <Paperclip className="w-5 h-5" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escreva sua mensagem ou anexe um arquivo..."
            className="flex-1 bg-slate-950 border-2 border-slate-800 rounded-2xl p-3.5 sm:p-4 text-slate-100 font-mono text-xs focus:outline-none focus:border-amber-400 shadow-inner"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black font-mono text-xs uppercase flex items-center gap-2 hex-btn-gold border-2 border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.5)] cursor-pointer flex-shrink-0"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span className="hidden sm:inline">ENVIAR</span>
          </button>
        </form>

      </div>

      {/* FOOTER */}
      <div className="relative z-20 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-2 text-amber-300 font-bold text-glow-gold">
          <Compass className="w-4 h-4" /> UNO — Diálogo & Processamento Inteligente
        </span>
        <span className="text-cyan-400 font-bold text-glow-cyan">Design System v0.10</span>
      </div>

    </div>
  );
};

export default EncontroDialogoPage;
