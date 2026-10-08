import React, { useState } from 'react';
import { ViewScreen, ComplaintItem, IdeaProposal } from '../types';
import { Home, AlertCircle, Lightbulb, ThumbsUp, PlusCircle, CheckCircle2, Award, Clock, ShieldCheck } from 'lucide-react';

interface UserDashboardScreenProps {
  onNavigate: (screen: ViewScreen) => void;
  onAdherePact: () => void;
  isFounder: boolean;
}

const INITIAL_COMPLAINTS: ComplaintItem[] = [
  {
    id: 'c1',
    title: 'Iluminação deficiente na Praça Central',
    description: 'Três postes estão apagados há duas semanas na travessa norte.',
    category: 'Infraestrutura Urbana',
    status: 'Em andamento',
    date: '24/09/2026'
  },
  {
    id: 'c2',
    title: 'Descarte irregular de resíduos na Rua das Flores',
    description: 'Pontos acumulados de entulho atrapalhando a calçada.',
    category: 'Saneamento / Zeladoria',
    status: 'Em análise',
    date: '25/09/2026'
  }
];

const INITIAL_IDEAS: IdeaProposal[] = [
  {
    id: 'i1',
    title: 'Feira Semanal de Troca de Livros e Sementes',
    author: 'Ana Clara (Fundadora #0012)',
    description: 'Encontro comunitário no parque aos sábados para estimular economia circular.',
    votes: 42,
    userVoted: false,
    status: 'Aprovada',
    date: '20/09/2026'
  },
  {
    id: 'i2',
    title: 'Horta Comunitária Automatizada com Sensores UNO',
    author: 'Carlos Eduardo (Fundador #0089)',
    description: 'Instalação de sensores de umidade com monitoramento público via aplicativo.',
    votes: 28,
    userVoted: false,
    status: 'Pendente',
    date: '22/09/2026'
  }
];

export const UserDashboardScreen: React.FC<UserDashboardScreenProps> = ({ onNavigate, onAdherePact, isFounder }) => {
  const [activeTab, setActiveTab] = useState<'ideias' | 'reclamacoes' | 'fundador'>('ideias');
  
  // Complaints State
  const [complaints, setComplaints] = useState<ComplaintItem[]>(INITIAL_COMPLAINTS);
  const [newComplaintTitle, setNewComplaintTitle] = useState('');
  const [newComplaintCategory, setNewComplaintCategory] = useState('Infraestrutura');
  const [newComplaintDesc, setNewComplaintDesc] = useState('');
  const [showComplaintForm, setShowComplaintForm] = useState(false);

  // Ideas State
  const [ideas, setIdeas] = useState<IdeaProposal[]>(INITIAL_IDEAS);
  const [newIdeaTitle, setNewIdeaTitle] = useState('');
  const [newIdeaDesc, setNewIdeaDesc] = useState('');
  const [showIdeaForm, setShowIdeaForm] = useState(false);

  const handleVote = (id: string) => {
    setIdeas(prev => prev.map(item => {
      if (item.id === id) {
        const delta = item.userVoted ? -1 : 1;
        return { ...item, votes: item.votes + delta, userVoted: !item.userVoted };
      }
      return item;
    }));
  };

  const handleCreateComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComplaintTitle.trim() || !newComplaintDesc.trim()) return;

    const newItem: ComplaintItem = {
      id: 'c' + (Date.now()),
      title: newComplaintTitle,
      category: newComplaintCategory,
      description: newComplaintDesc,
      status: 'Em análise',
      date: new Date().toLocaleDateString('pt-BR')
    };

    setComplaints([newItem, ...complaints]);
    setNewComplaintTitle('');
    setNewComplaintDesc('');
    setShowComplaintForm(false);
  };

  const handleCreateIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdeaTitle.trim() || !newIdeaDesc.trim()) return;

    const newProposal: IdeaProposal = {
      id: 'i' + (Date.now()),
      title: newIdeaTitle,
      author: isFounder ? 'Você (Fundador #0042)' : 'Você (Membro Comum)',
      description: newIdeaDesc,
      votes: 1,
      userVoted: true,
      status: 'Pendente',
      date: new Date().toLocaleDateString('pt-BR')
    };

    setIdeas([newProposal, ...ideas]);
    setNewIdeaTitle('');
    setNewIdeaDesc('');
    setShowIdeaForm(false);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* User Header / Status Panel */}
      <div className="uno-glass-card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(245, 158, 11, 0.2))', border: '1.5px solid #00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Home size={28} color="#00e5ff" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Casa UNO — Painel do Usuário</h2>
              {isFounder && (
                <span className="uno-badge uno-badge-amber">
                  <Award size={12} /> Fundador · demonstração
                </span>
              )}
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Gestão de engajamento local, proposição de ideias e zeladoria comunitária.
            </p>
          </div>
        </div>

        <div>
          {!isFounder ? (
            <button className="uno-btn-amber" onClick={onAdherePact}>
              <Award size={16} /> Simular perfil fundador
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 600, fontSize: '0.9rem', background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <ShieldCheck size={18} /> Reconhecimento Ativo
            </div>
          )}
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
        <button 
          className={`uno-nav-btn ${activeTab === 'ideias' ? 'active' : ''}`}
          onClick={() => setActiveTab('ideias')}
          style={{ fontSize: '0.95rem' }}
        >
          <Lightbulb size={18} /> Propostas & Votações ({ideas.length})
        </button>

        <button 
          className={`uno-nav-btn ${activeTab === 'reclamacoes' ? 'active' : ''}`}
          onClick={() => setActiveTab('reclamacoes')}
          style={{ fontSize: '0.95rem' }}
        >
          <AlertCircle size={18} /> Minhas Reclamações ({complaints.length})
        </button>

        <button 
          className={`uno-nav-btn ${activeTab === 'fundador' ? 'active-master' : ''}`}
          onClick={() => setActiveTab('fundador')}
          style={{ fontSize: '0.95rem' }}
        >
          <Award size={18} /> Demonstração do fundador
        </button>
      </div>

      {/* TAB 1: IDEAS AND VOTES */}
      {activeTab === 'ideias' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Propostas da Comunidade</h3>
            <button className="uno-btn-primary" onClick={() => setShowIdeaForm(!showIdeaForm)}>
              <PlusCircle size={18} /> {showIdeaForm ? 'Cancelar' : 'Nova Ideia'}
            </button>
          </div>

          {/* Form to submit idea */}
          {showIdeaForm && (
            <form onSubmit={handleCreateIdea} className="uno-glass-card" style={{ marginBottom: '1.5rem', border: '1px solid var(--uno-cyan)' }}>
              <h4 style={{ marginBottom: '1rem', color: '#00e5ff', fontWeight: 700 }}>Registrar Nova Proposta / Ideia</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  className="uno-input"
                  placeholder="Título da proposta..."
                  value={newIdeaTitle}
                  onChange={(e) => setNewIdeaTitle(e.target.value)}
                  required
                />
                <textarea
                  className="uno-input uno-textarea"
                  placeholder="Descreva detalhadamente o objetivo e o impacto positivo para a comunidade..."
                  value={newIdeaDesc}
                  onChange={(e) => setNewIdeaDesc(e.target.value)}
                  required
                />
                <button type="submit" className="uno-btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Enviar Proposta para Votação
                </button>
              </div>
            </form>
          )}

          {/* Ideas List */}
          <div className="uno-grid-2">
            {ideas.map((idea) => (
              <div key={idea.id} className="uno-glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span className="uno-badge uno-badge-cyan">{idea.status}</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{idea.date}</span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>{idea.title}</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>{idea.description}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Por {idea.author}</span>
                  
                  <button 
                    onClick={() => handleVote(idea.id)}
                    style={{
                      background: idea.userVoted ? 'rgba(0, 229, 255, 0.25)' : 'rgba(15, 23, 42, 0.8)',
                      border: idea.userVoted ? '1px solid #00e5ff' : '1px solid rgba(255, 255, 255, 0.2)',
                      color: idea.userVoted ? '#00e5ff' : '#ffffff',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}
                  >
                    <ThumbsUp size={14} /> {idea.votes} {idea.userVoted ? 'Votado' : 'Apoiar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: COMPLAINTS */}
      {activeTab === 'reclamacoes' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Registro de Reclamações & Zeladoria</h3>
            <button className="uno-btn-primary" onClick={() => setShowComplaintForm(!showComplaintForm)}>
              <PlusCircle size={18} /> {showComplaintForm ? 'Cancelar' : 'Nova Reclamação'}
            </button>
          </div>

          {/* Form to submit complaint */}
          {showComplaintForm && (
            <form onSubmit={handleCreateComplaint} className="uno-glass-card" style={{ marginBottom: '1.5rem', border: '1px solid var(--uno-cyan)' }}>
              <h4 style={{ marginBottom: '1rem', color: '#00e5ff', fontWeight: 700 }}>Registrar Ocorrência / Reclamação</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  className="uno-input"
                  placeholder="Título do problema..."
                  value={newComplaintTitle}
                  onChange={(e) => setNewComplaintTitle(e.target.value)}
                  required
                />
                <select 
                  className="uno-input"
                  value={newComplaintCategory}
                  onChange={(e) => setNewComplaintCategory(e.target.value)}
                >
                  <option value="Infraestrutura">Infraestrutura Urbana</option>
                  <option value="Saneamento">Saneamento & Limpeza</option>
                  <option value="Segurança">Segurança & Iluminação</option>
                  <option value="Outros">Outros</option>
                </select>
                <textarea
                  className="uno-input uno-textarea"
                  placeholder="Local exato e detalhes do problema..."
                  value={newComplaintDesc}
                  onChange={(e) => setNewComplaintDesc(e.target.value)}
                  required
                />
                <button type="submit" className="uno-btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Registrar no Sistema
                </button>
              </div>
            </form>
          )}

          {/* Complaints List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {complaints.map((item) => (
              <div key={item.id} className="uno-glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '750px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <span className="uno-badge uno-badge-amber">{item.category}</span>
                    <span style={{ fontSize: '0.8rem', color: item.status === 'Resolvido' ? '#10b981' : '#f59e0b', fontWeight: 600 }}>
                      • {item.status}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{item.title}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.25rem' }}>{item.description}</p>
                </div>

                <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#64748b' }}>
                  Registrado em <br />
                  <strong style={{ color: '#cbd5e1' }}>{item.date}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: FOUNDER STATUS */}
      {activeTab === 'fundador' && (
        <div className="uno-glass-card-amber" style={{ padding: '2.5rem', textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.2)', border: '2px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <Award size={36} color="#f59e0b" />
          </div>

          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff' }}>
            {isFounder ? 'Perfil fundador simulado neste dispositivo' : 'Acesso demonstrativo do fundador'}
          </h3>

          <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            {isFounder 
              ? 'Este modo libera o Painel Mestre apenas para testes locais. Não representa autenticação, adesão, pagamento ou concessão de privilégios reais.' 
              : 'Use esta simulação somente para conhecer o Painel Mestre. Na versão real, o acesso dependerá de autenticação segura e autorização registrada.'}
          </p>

          {!isFounder ? (
            <button className="uno-btn-amber" onClick={onAdherePact} style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}>
              Simular reconhecimento como fundador
            </button>
          ) : (
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.7)', padding: '1.25rem 2rem', borderRadius: '1rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: '1.2rem' }}>Modo de demonstração ativo</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Dados locais e temporários • nenhuma cobrança realizada</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
