import React, { useEffect, useState } from 'react';
import { getIdTokenResult, onIdTokenChanged } from 'firebase/auth';
import { KeyRound, ShieldCheck, UserPlus } from 'lucide-react';
import { UNO_PANELS } from '../../domain/panels';
import { auth } from '../../services/firebase';

export function PanelAssignmentCenterV7() {
  const [isFounder, setIsFounder] = useState(false);
  const [targetUid, setTargetUid] = useState('');
  const [scopes, setScopes] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsFounder(false);
        return;
      }
      try {
        const token = await getIdTokenResult(user);
        setIsFounder(token.claims.unoFounder === true);
      } catch {
        setIsFounder(false);
      }
    });
  }, []);

  function toggleScope(scope: string, checked: boolean) {
    setScopes((current) => checked
      ? [...new Set([...current, scope])]
      : current.filter((item) => item !== scope));
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const currentUser = auth?.currentUser;
    if (!currentUser || !targetUid.trim() || busy || !isFounder) return;

    setBusy(true);
    setMessage('');
    try {
      const token = await currentUser.getIdToken();
      const response = await fetch('/api/admin/panel-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({ targetUid: targetUid.trim(), scopes })
      });
      const data = await response.json().catch(() => ({})) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Não foi possível atualizar os escopos.');
      }

      setMessage(data.message || 'Permissões atualizadas. A pessoa deve entrar novamente para atualizar a sessão.');
      setTargetUid('');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Falha ao atualizar permissões.');
    } finally {
      setBusy(false);
    }
  }

  if (!isFounder) return null;

  return <section className="v7-panel-assignment" aria-labelledby="panel-assignment-title">
    <header><div><span className="v6-kicker">Governança · exclusivo do fundador</span><h2 id="panel-assignment-title">Atribuir escopos de painel</h2><p>Atribua somente os escopos necessários. A pessoa precisa ter entrado com Google e possuir IDU.</p></div><KeyRound/></header>
    <form onSubmit={submit}>
      <label htmlFor="panel-target-uid">UID Firebase da pessoa</label>
      <input id="panel-target-uid" value={targetUid} onChange={(event) => setTargetUid(event.target.value)} placeholder="Cole o UID Firebase confirmado" autoComplete="off"/>
      <div className="v7-panel-scope-list">
        {UNO_PANELS.map((panel) => <label key={panel.id}>
          <input
            type="checkbox"
            checked={scopes.includes(panel.requiredScope)}
            onChange={(event) => toggleScope(panel.requiredScope, event.target.checked)}
          />
          <span><b>{panel.title}</b><small>{panel.requiredScope}</small></span>
        </label>)}
      </div>
      <button type="submit" disabled={busy || !targetUid.trim()}><UserPlus size={16}/>{busy ? 'Salvando…' : 'Salvar atribuições'}</button>
      {message && <p role="status">{message}</p>}
    </form>
    <small><ShieldCheck size={14}/> O servidor valida o fundador, a conta Google, o IDU e registra a atribuição no Firestore. Escopos vazios revogam as permissões atribuídas por este mecanismo.</small>
  </section>;
}
