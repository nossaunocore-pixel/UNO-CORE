import React, { useEffect, useState } from 'react';
import { getIdTokenResult, onIdTokenChanged } from 'firebase/auth';
import type { NavigateV6 } from '../types';
import { MasterPanelV6 } from '../pages/MasterPanelV6';
import { auth } from '../../services/firebase';

export function MasterPanelGateV7({ onNavigate }: { onNavigate: NavigateV6 }) {
  const [state, setState] = useState<'checking' | 'granted' | 'denied'>('checking');

  useEffect(() => {
    if (!auth) {
      setState('denied');
      return;
    }
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        setState('denied');
        return;
      }
      try {
        const result = await getIdTokenResult(user);
        setState(result.claims.unoFounder === true || result.claims.unoMaster === true ? 'granted' : 'denied');
      } catch {
        setState('denied');
      }
    });
  }, []);

  if (state === 'granted') return <MasterPanelV6 onNavigate={onNavigate} />;

  return (
    <section style={{ maxWidth: 720, margin: '48px auto', padding: 28, borderRadius: 20, background: '#0f172a', color: '#f8fafc', border: '1px solid #334155' }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Painel Mestre protegido</h1>
      <p style={{ lineHeight: 1.6, color: '#cbd5e1' }}>
        {state === 'checking'
          ? 'Verificando as permissões da sua sessão…'
          : 'Este ambiente exige identidade autenticada e autorização de fundador ou acesso mestre concedido pelo fundador. A interface não concede privilégios.'}
      </p>
    </section>
  );
}
