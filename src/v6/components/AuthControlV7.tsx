import React, { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User
} from 'firebase/auth';
import { auth, firebaseConfigurationReady } from '../../services/firebase';

export function AuthControlV7() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, setUser);
  }, []);

  const accountUser = user?.isAnonymous ? null : user;

  async function signInGoogle() {
    if (!auth || busy || !firebaseConfigurationReady) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
      setNotice('Conta Google autenticada. Estamos validando sua Identidade UNO para liberar os ambientes internos.');
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Não foi possível entrar com Google.');
    } finally {
      setBusy(false);
    }
  }

  async function leaveAccount() {
    if (!auth) return;
    try {
      await signOut(auth);
      setNotice('Você saiu da sua conta.');
      setOpen(false);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Não foi possível encerrar a sessão.');
    }
  }

  return (
    <>
      <button
        type="button"
        className="v6-account-trigger"
        onClick={() => { setOpen(true); setError(''); }}
        aria-label={accountUser ? 'Abrir opções da conta' : 'Entrar com Google'}
      >
        {accountUser ? (accountUser.displayName || accountUser.email || 'Minha conta') : 'Entrar'}
      </button>

      {open && (
        <div
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(2, 6, 23, .82)',
            display: 'grid', placeItems: 'center', padding: 18
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="uno-auth-title"
            style={{
              width: 'min(100%, 430px)', padding: 24, borderRadius: 22,
              background: '#0f172a', border: '1px solid #334155', color: '#f8fafc',
              boxShadow: '0 24px 80px rgba(0,0,0,.45)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <div>
                <small style={{ color: '#67e8f9' }}>IDENTIDADE UNO</small>
                <h2 id="uno-auth-title" style={{ margin: '6px 0 0', fontSize: 22 }}>
                  {accountUser ? 'Sua conta' : 'Conheça o UNO'}
                </h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar" style={{ padding: 8 }}>✕</button>
            </div>

            {!firebaseConfigurationReady && (
              <p role="alert" style={{ color: '#fbbf24', marginTop: 18 }}>
                A configuração pública do Firebase ainda não está completa neste ambiente.
              </p>
            )}

            {accountUser ? (
              <div style={{ marginTop: 20 }}>
                <p>{accountUser.displayName || accountUser.email || 'Conta Google autenticada'}</p>
                <p style={{ color: '#94a3b8', fontSize: 13 }}>
                  {accountUser.emailVerified ? 'E-mail Google verificado' : 'Aguardando verificação da conta'}
                </p>
                <button type="button" onClick={leaveAccount} style={{ marginTop: 12, padding: '10px 14px' }}>
                  Sair da conta
                </button>
              </div>
            ) : (
              <div style={{ marginTop: 20 }}>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                  Entre com sua conta Google para acessar os ambientes internos. A autenticação é gratuita e não representa adesão a um plano.
                </p>
                <button
                  type="button"
                  onClick={signInGoogle}
                  disabled={busy || !firebaseConfigurationReady}
                  style={{ width: '100%', padding: 12, marginTop: 12, borderRadius: 10 }}
                >
                  {busy ? 'Conectando…' : 'Continuar com Google'}
                </button>
              </div>
            )}

            {notice && <p role="status" style={{ color: '#86efac', marginTop: 14 }}>{notice}</p>}
            {error && <p role="alert" style={{ color: '#fca5a5', marginTop: 14 }}>{error}</p>}
            <p style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.5, marginTop: 18 }}>
              A conta permite vincular sua Identidade UNO e suas interações. O uso de capacidades pagas, externas ou restritas depende de adesão, autorização e disponibilidade. Consulte os controles de privacidade da plataforma.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
