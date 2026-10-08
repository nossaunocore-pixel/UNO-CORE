import React, { useState } from 'react';
import { ViewScreen, SystemCommandLog, IdeaProposal } from '../types';
import { Shield, Cpu, Check, X, FileText, Play, History, Archive, Upload, LockKeyhole, GitBranch, Eye, ShieldCheck } from 'lucide-react';

interface MasterPanelScreenProps {
  onNavigate: (screen: ViewScreen) => void;
}

const INITIAL_COMMANDS: SystemCommandLog[] = [
  {
    id: 'cmd-1',
    command: 'Ativar triagem automática de iluminação pública no setor Centro-Norte',
    impactScore: 88,
    riskLevel: 'Baixo',
    recommendation: 'Aprovar',
    specPreview: '{\n  "module": "lighting_triage_v1",\n  "trigger": "sensor_outage",\n  "auto_dispatch": true\n}',
    timestamp: '11:20:05',
    status: 'Aprovado'
  },
  {
    id: 'cmd-2',
    command: 'Realocar 15% do fundo comunitário para projeto de compostagem',
    impactScore: 64,
    riskLevel: 'Médio',
    recommendation: 'Ajustar',
    specPreview: '{\n  "module": "fund_reallocation",\n  "amount_pct": 15,\n  "consensus_threshold": 0.66\n}',
    timestamp: '11:45:12',
    status: 'Pendente'
  }
];

export const MasterPanelScreen: React.FC<MasterPanelScreenProps> = ({ onNavigate }) => {
  const [commandInput, setCommandInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [commandLogs, setCommandLogs] = useState<SystemCommandLog[]>(INITIAL_COMMANDS);
  const [selectedSpec, setSelectedSpec] = useState<string | null>(null);
  const [archiveCandidate, setArchiveCandidate] = useState<{ name: string; size: string } | null>(null);
  const masterImportAvailable = import.meta.env.PROD && import.meta.env.VITE_MASTER_ZIP_IMPORT_ENABLED === 'true';

  const handleArchiveSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !masterImportAvailable) return;

    if (!file.name.toLowerCase().endsWith('.zip')) {
      event.target.value = '';
      return;
    }

    setArchiveCandidate({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`
    });
  };

  const handleAnalyzeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    setAnalyzing(true);

    setTimeout(() => {
      const inputLower = commandInput.toLowerCase();
      let impact = Math.floor(Math.random() * 30) + 65; // 65-95
      let risk: 'Baixo' | 'Médio' | 'Crítico' = 'Baixo';
      let rec: 'Aprovar' | 'Ajustar' | 'Rejeitar' = 'Aprovar';

      if (inputLower.includes('deletar') || inputLower.includes('excluir') || inputLower.includes('orçamento')) {
        risk = 'Crítico';
        rec = 'Rejeitar';
        impact = 35;
      } else if (inputLower.includes('alterar') || inputLower.includes('regra')) {
        risk = 'Médio';
        rec = 'Ajustar';
        impact = 70;
      }

      const generatedSpec = JSON.stringify({
        module_id: `mod_${Date.now()}`,
        command_parsed: commandInput,
        impact_score: impact,
        risk_tier: risk,
        action_recommended: rec,
        execution_pipeline: [
          'parse_intent',
          'evaluate_community_consensus',
          'generate_contract_spec',
          'deploy_sandbox'
        ],
        created_at: new Date().toISOString()
      }, null, 2);

      const newLog: SystemCommandLog = {
        id: `cmd-${Date.now()}`,
        command: commandInput,
        impactScore: impact,
        riskLevel: risk,
        recommendation: rec,
        specPreview: generatedSpec,
        timestamp: new Date().toLocaleTimeString(),
        status: 'Pendente'
      };

      setCommandLogs([newLog, ...commandLogs]);
      setSelectedSpec(generatedSpec);
      setCommandInput('');
      setAnalyzing(false);
    }, 1000);
  };

  const handleUpdateStatus = (id: string, newStatus: 'Aprovado' | 'Rejeitado') => {
    setCommandLogs(prev => prev.map(log => log.id === id ? { ...log, status: newStatus } : log));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Master Header */}
      <div className="uno-glass-card-amber" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'rgba(245, 158, 11, 0.2)', border: '1.5px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={30} color="#f59e0b" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Painel Mestre — Governança & IA</h2>
              <span className="uno-badge uno-badge-amber">Acesso Nível 0</span>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              Simulação de inspeção de comandos, análise de impacto e especificação técnica de módulos.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Status do Nó</div>
            <div style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 700 }}>100% Operacional</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Command Simulator + System History */}
      <div className="uno-grid-2" style={{ alignItems: 'start' }}>
        
        {/* Left Column: Command Analysis Simulator */}
        <div className="uno-glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#00e5ff' }}>
            <Cpu size={22} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Simulador de Análise de Comando</h3>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
            Digite uma diretriz estratégica ou regra de módulo para que a UNO calcule a pontuação de impacto e o nível de risco.
          </p>

          <form onSubmit={handleAnalyzeCommand} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <textarea
              className="uno-input uno-textarea"
              placeholder="Exemplo: Criar módulo automatizado para coleta seletiva de lixo eletrônico com recompensa em créditos comunitários..."
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              required
            />

            <button type="submit" className="uno-btn-primary" disabled={analyzing}>
              <Play size={16} /> {analyzing ? 'Analisando Impacto...' : 'Analisar Comando'}
            </button>
          </form>

          {/* Generated Spec Preview Modal/Panel */}
          {selectedSpec && (
            <div style={{ marginTop: '1.5rem', background: 'rgba(2, 6, 23, 0.9)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(0, 229, 255, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00e5ff', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <FileText size={14} /> Especificação Gerada (JSON Spec)
                </span>
                <button 
                  onClick={() => setSelectedSpec(null)} 
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.75rem' }}
                >
                  Fechar
                </button>
              </div>

              <pre style={{ fontSize: '0.75rem', color: '#38bdf8', fontFamily: 'monospace', overflowX: 'auto', maxHeight: '180px' }}>
                {selectedSpec}
              </pre>
            </div>
          )}
        </div>

        {/* Right Column: Command Logs & Approvals */}
        <div className="uno-glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>
            <History size={22} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Histórico & Fila de Aprovações</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {commandLogs.map((log) => (
              <div 
                key={log.id} 
                style={{ 
                  background: 'rgba(15, 23, 42, 0.7)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '0.75rem', 
                  padding: '1rem' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className={`uno-badge ${log.riskLevel === 'Crítico' ? 'uno-badge-amber' : 'uno-badge-cyan'}`}>
                    Risco: {log.riskLevel}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Score Impacto: {log.impactScore}/100</span>
                </div>

                <div style={{ fontWeight: 600, fontSize: '0.925rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {log.command}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontSize: '0.8rem', color: log.status === 'Aprovado' ? '#10b981' : log.status === 'Rejeitado' ? '#ef4444' : '#f59e0b' }}>
                    Status: <strong>{log.status}</strong>
                  </div>

                  {log.status === 'Pendente' && (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => handleUpdateStatus(log.id, 'Aprovado')}
                        style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#10b981', borderRadius: '0.4rem', padding: '0.25rem 0.6rem', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                      >
                        <Check size={12} /> Aprovar
                      </button>

                      <button 
                        onClick={() => handleUpdateStatus(log.id, 'Rejeitado')}
                        style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '0.4rem', padding: '0.25rem 0.6rem', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                      >
                        <X size={12} /> Rejeitar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <section className="uno-glass-card master-visual-editor" aria-labelledby="visual-editor-title">
        <div className="master-visual-editor__header">
          <div className="master-visual-editor__title">
            <div className="master-visual-editor__icon"><Archive size={25} /></div>
            <div>
              <span className="uno-badge uno-badge-cyan">Fábrica visual</span>
              <h3 id="visual-editor-title">Editor Visual da Cidade UNO</h3>
              <p>Importe uma atualização completa ou ajuste imagens, avatar, módulos e posições da landing.</p>
            </div>
          </div>
          <span className={`master-editor-status ${masterImportAvailable ? 'master-editor-status--ready' : ''}`}>
            {masterImportAvailable ? <ShieldCheck size={15} /> : <LockKeyhole size={15} />}
            {masterImportAvailable ? 'Disponível em produção segura' : 'Bloqueado até publicação segura'}
          </span>
        </div>

        <div className="master-editor-pipeline" aria-label="Fluxo de atualização visual">
          <article><Upload size={20} /><b>1. Receber</b><span>ZIP ou arquivos visuais</span></article>
          <article><ShieldCheck size={20} /><b>2. Validar</b><span>estrutura, segredos e riscos</span></article>
          <article><Eye size={20} /><b>3. Simular</b><span>prévia sem alterar produção</span></article>
          <article><Check size={20} /><b>4. Aprovar</b><span>autorização expressa do fundador</span></article>
          <article><GitBranch size={20} /><b>5. Versionar</b><span>GitHub, deploy e auditoria</span></article>
        </div>

        <div className={`master-archive-drop ${masterImportAvailable ? '' : 'master-archive-drop--locked'}`}>
          <Archive size={34} />
          <div>
            <strong>{archiveCandidate ? archiveCandidate.name : 'Pacote de atualização da UNO'}</strong>
            <span>
              {archiveCandidate
                ? `${archiveCandidate.size} · aguardando validação do servidor`
                : 'Aceita somente .zip. O conteúdo nunca será executado diretamente no navegador.'}
            </span>
          </div>
          <label className={`city-panel-btn ${masterImportAvailable ? '' : 'master-import-button--disabled'}`}>
            <Upload size={17} /> Selecionar ZIP
            <input type="file" accept=".zip,application/zip" disabled={!masterImportAvailable} onChange={handleArchiveSelection} />
          </label>
        </div>

        {!masterImportAvailable && (
          <p className="master-editor-lock-note">
            <LockKeyhole size={16} /> A interface está preparada, mas a liberação exige autenticação real do fundador,
            serviço servidor de validação, área de simulação, histórico imutável e rollback. Um CPF isolado não libera esta função.
          </p>
        )}
      </section>
    </div>
  );
};
