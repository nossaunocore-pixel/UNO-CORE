import React, { useCallback, useEffect, useState } from 'react';
import { Copy, FilePlus2, RefreshCw, Save, Send, ShieldCheck } from 'lucide-react';
import { auth } from '../../services/firebase';

type AssetType =
  | 'agent' | 'tool' | 'api' | 'module' | 'automation'
  | 'product' | 'service' | 'integration' | 'panel' | 'volume' | 'workflow' | 'other';

interface WorkshopAssetSummary {
  id: string;
  asset_type: AssetType;
  origin: 'uno' | 'third_party' | null;
  slug: string;
  name: string;
  description: string;
  status: string;
  version: number;
  change_summary: string;
  previous_asset_id: string | null;
  created_at: string;
  updated_at: string;
  requires_human_approval: boolean;
}

interface WorkshopAssetDetail extends WorkshopAssetSummary {
  definition: Record<string, unknown>;
}

const ASSET_TYPES: Array<{ value: AssetType; label: string }> = [
  { value: 'agent', label: 'Agente' },
  { value: 'tool', label: 'Ferramenta' },
  { value: 'api', label: 'API' },
  { value: 'module', label: 'Módulo' },
  { value: 'automation', label: 'Automação' },
  { value: 'product', label: 'Produto' },
  { value: 'service', label: 'Serviço' },
  { value: 'integration', label: 'Integração' },
  { value: 'panel', label: 'Painel' },
  { value: 'volume', label: 'Volume EOU' },
  { value: 'workflow', label: 'Fluxo' },
  { value: 'other', label: 'Outro' }
];

function statusLabel(status: string) {
  const labels: Record<string, string> = {
    draft: 'Rascunho',
    in_review: 'Em revisão',
    approved: 'Aprovado',
    coded: 'Codificado',
    integrated: 'Integrado',
    tested: 'Testado',
    active: 'Ativo',
    suspended: 'Suspenso',
    archived: 'Arquivado'
  };
  return labels[status] || status;
}

export function WorkshopStudioV7() {
  const [assets, setAssets] = useState<WorkshopAssetSummary[]>([]);
  const [selected, setSelected] = useState<WorkshopAssetDetail | null>(null);
  const [assetType, setAssetType] = useState<AssetType>('agent');
  const [origin, setOrigin] = useState<'uno' | 'third_party'>('uno');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [changeSummary, setChangeSummary] = useState('Criação inicial');
  const [definitionText, setDefinitionText] = useState(JSON.stringify({ purpose: '', capabilities: [], permissions: [], dependencies: [], limits: {}, tests: [] }, null, 2));
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('Carregue os rascunhos para começar.');

  const request = useCallback(async (url: string, init?: RequestInit) => {
    const user = auth?.currentUser;
    if (!user) throw new Error('Entre com sua conta Google para usar a Oficina.');
    const token = await user.getIdToken();
    const response = await fetch(url, {
      ...init,
      headers: {
        ...(init?.headers || {}),
        Authorization: 'Bearer ' + token,
        ...(init?.body ? { 'Content-Type': 'application/json' } : {})
      }
    });
    const data = await response.json().catch(() => ({})) as {
      error?: string;
      assets?: WorkshopAssetSummary[];
      asset?: WorkshopAssetDetail;
    };
    if (!response.ok) throw new Error(data.error || 'A operação da Oficina falhou.');
    return data;
  }, []);

  const loadAssets = useCallback(async () => {
    setLoading(true);
    try {
      const data = await request('/api/workshop/assets');
      setAssets(data.assets || []);
      setMessage('Biblioteca de rascunhos atualizada.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Não foi possível carregar a biblioteca.');
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    void loadAssets();
  }, [loadAssets]);

  function resetForm() {
    setSelected(null);
    setAssetType('agent');
    setOrigin('uno');
    setName('');
    setDescription('');
    setChangeSummary('Criação inicial');
    setDefinitionText(JSON.stringify({ purpose: '', capabilities: [], permissions: [], dependencies: [], limits: {}, tests: [] }, null, 2));
    setMessage('Novo rascunho. Preencha a definição e salve.');
  }

  async function selectAsset(id: string) {
    setBusy(true);
    try {
      const data = await request('/api/workshop/asset?id=' + encodeURIComponent(id));
      const asset = data.asset;
      if (!asset) throw new Error('Recurso não encontrado.');
      setSelected(asset);
      setAssetType(asset.asset_type);
      setOrigin(asset.origin || 'uno');
      setName(asset.name);
      setDescription(asset.description);
      setChangeSummary(asset.change_summary || '');
      setDefinitionText(JSON.stringify(asset.definition || {}, null, 2));
      setMessage('Versão ' + asset.version + ' carregada · ' + statusLabel(asset.status));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Não foi possível abrir o recurso.');
    } finally {
      setBusy(false);
    }
  }

  async function saveDraft() {
    setBusy(true);
    try {
      let definition: unknown;
      try { definition = JSON.parse(definitionText); } catch { throw new Error('A definição precisa ser um JSON válido.'); }
      if (!definition || typeof definition !== 'object' || Array.isArray(definition)) {
        throw new Error('A definição precisa ser um objeto JSON.');
      }

      const body = {
        assetType,
        origin: assetType === 'product' || assetType === 'service' ? origin : null,
        name,
        description,
        changeSummary,
        definition
      };

      const data = selected
        ? await request('/api/workshop/asset?id=' + encodeURIComponent(selected.id), {
            method: 'PATCH',
            body: JSON.stringify(body)
          })
        : await request('/api/workshop/assets', {
            method: 'POST',
            body: JSON.stringify(body)
          });

      if (data.asset) {
        setSelected(data.asset);
        setMessage('Rascunho salvo. Versão ' + data.asset.version + '.');
      }
      await loadAssets();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Não foi possível salvar o rascunho.');
    } finally {
      setBusy(false);
    }
  }

  async function runAction(action: 'submit' | 'clone') {
    if (!selected) return;
    setBusy(true);
    try {
      const data = await request(
        '/api/workshop/asset?id=' + encodeURIComponent(selected.id) + '&action=' + action,
        { method: 'POST' }
      );
      if (data.asset) {
        setSelected(data.asset);
        setAssetType(data.asset.asset_type);
        setOrigin(data.asset.origin || 'uno');
        setName(data.asset.name);
        setDescription(data.asset.description);
        setChangeSummary(data.asset.change_summary || '');
        setDefinitionText(JSON.stringify(data.asset.definition || {}, null, 2));
      }
      setMessage(action === 'submit'
        ? 'Rascunho enviado para revisão humana. Nenhuma ativação foi realizada.'
        : 'Nova cópia de trabalho criada. O original foi preservado.');
      await loadAssets();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'A ação não foi concluída.');
    } finally {
      setBusy(false);
    }
  }

  const editable = !selected || selected.status === 'draft';
  const requiresOrigin = assetType === 'product' || assetType === 'service';

  return <section className="v7-workshop-studio" aria-labelledby="workshop-studio-title">
    <header>
      <div><span className="v6-kicker">Oficina · biblioteca governada</span><h2 id="workshop-studio-title">Criar, editar e evoluir recursos UNO</h2><p>Crie agentes, ferramentas, APIs, módulos, automações, produtos e serviços próprios ou de terceiros. Cada alteração gera uma versão e uma trilha de auditoria.</p></div>
      <button type="button" onClick={() => void loadAssets()} disabled={loading}><RefreshCw size={15}/> Atualizar</button>
    </header>
    <div className="v7-workshop-layout">
      <aside>
        <div className="v7-workshop-list-heading"><b>Biblioteca de recursos</b><button type="button" onClick={resetForm}><FilePlus2 size={15}/> Novo</button></div>
        {loading && <p>Carregando…</p>}
        {!loading && assets.length === 0 && <p className="v7-workshop-empty">Nenhum recurso salvo ainda.</p>}
        <div className="v7-workshop-asset-list">{assets.map((asset) => <button type="button" key={asset.id} className={selected?.id === asset.id ? 'selected' : ''} onClick={() => void selectAsset(asset.id)}>
          <b>{asset.name}</b><span>{asset.asset_type} · v{asset.version}</span><small>{statusLabel(asset.status)}</small>
        </button>)}</div>
      </aside>
      <main>
        <div className="v7-workshop-form-grid">
          <label>Tipo de recurso<select value={assetType} disabled={!editable} onChange={(event) => setAssetType(event.target.value as AssetType)}>{ASSET_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
          {requiresOrigin && <label>Origem<select value={origin} disabled={!editable} onChange={(event) => setOrigin(event.target.value as 'uno' | 'third_party')}><option value="uno">Próprio UNO</option><option value="third_party">Terceiro</option></select></label>}
          <label className="wide">Nome<input value={name} disabled={!editable} onChange={(event) => setName(event.target.value)} maxLength={120} placeholder="Nome do agente, ferramenta, serviço…"/></label>
          <label className="wide">Descrição<textarea value={description} disabled={!editable} onChange={(event) => setDescription(event.target.value)} maxLength={4000} rows={3} placeholder="Finalidade, responsabilidade e comportamento esperado…"/></label>
          <label className="wide">Resumo desta alteração<input value={changeSummary} disabled={!editable} onChange={(event) => setChangeSummary(event.target.value)} maxLength={2000} placeholder="O que foi criado ou melhorado?"/></label>
          <label className="wide">Definição estruturada (JSON)<textarea className="v7-workshop-json" value={definitionText} disabled={!editable} onChange={(event) => setDefinitionText(event.target.value)} rows={14} spellCheck={false}/></label>
        </div>
        <div className="v7-workshop-actions">
          <button type="button" onClick={() => void saveDraft()} disabled={busy || !editable || !name.trim()}><Save size={15}/> Salvar rascunho</button>
          {selected?.status === 'draft' && <button type="button" onClick={() => void runAction('submit')} disabled={busy}><Send size={15}/> Enviar para revisão</button>}
          {selected && selected.status !== 'draft' && <button type="button" onClick={() => void runAction('clone')} disabled={busy}><Copy size={15}/> Criar nova versão</button>}
        </div>
        <p className="v7-workshop-message" role="status">{message}</p>
      </main>
    </div>
    <p className="v7-workshop-safety"><ShieldCheck size={16}/> Tudo começa como rascunho. Aprovação, codificação, testes e ativação são estados separados e exigem alçadas próprias. Nunca cole senhas, tokens ou chaves; use apenas referências a segredos guardados no servidor.</p>
  </section>;
}
