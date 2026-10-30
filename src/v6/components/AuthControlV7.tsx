import React, { FormEvent, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User
} from 'firebase/auth';
import { auth, firebaseConfigurationReady } from '../../services/firebase';

export function AuthControlV7() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, setUser);
  }, []);

  const accountUser = user?.isAnonymous ? null : user;

  async function submitEmail(event: FormEvent) {
    event.preventDefault();
    if (!auth || busy) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      if (mode === 'signup') {
        const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);
        await sendEmailVerification(credential.user);
        await signOut(auth);
        setNotice('Conta criada. Enviamos um link de confirmação para seu e-mail. Confirme-o antes de entrar.');
        setMode('signin');
      } else {
        const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
        if (!credential.user.emailVerified) {
          await sendEmailVerification(credential.user);
          await signOut(auth);
          setNotice('Seu e-mail ainda não foi confirmado. Enviamos um novo link de confirmação.');
        } else {
          setNotice('Sessão autenticada. A identidade UNO será validada ao acessar serviços protegidos.');
          setOpen(false);
        }
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Não foi possível autenticar.');
    } finally {
      setBusy(false);
    }
  }

  async function signInGoogle() {
    if (!auth || busy) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      setOpen(false);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Não foi possível entrar com Google.');
    } finally {
      setBusy(false);
    }
  }

  async function leaveAccount() {
    if (!auth) return;
    await signOut(auth);
    setNotice('Você saiu da sua conta.');
  }

  return (
    <>
      <button
        type="button"
        className="v6-account-trigger"
        onClick={() => setOpen(true)}
        aria-label={accountUser ? 'Abrir opções da conta' : 'Entrar ou criar conta'}
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
                  {accountUser ? 'Sua conta' : mode === 'signin' ? 'Entrar na UNO' : 'Criar conta'}
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
                <p>{accountUser.email || accountUser.phoneNumber || 'Conta autenticada'}</p>
                <p style={{ color: '#94a3b8', fontSize: 13 }}>
                  {accountUser.emailVerified ? 'E-mail confirmado' : 'E-mail aguardando confirmação'}
                </p>
                <button type="button" onClick={leaveAccount} style={{ marginTop: 12, padding: '10px 14px' }}>
                  Sair da conta
                </button>
              </div>
            ) : (
              <>
                <form onSubmit={submitEmail} style={{ display: 'grid', gap: 12, marginTop: 20 }}>
                  <label style={{ display: 'grid', gap: 6 }}>
                    <span style={{ fontSize: 13 }}>E-mail</span>
                    <input
                      type="email" required autoComplete="email" value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      style={{ padding: 12, borderRadius: 10, color: '#0f172a' }}
                    />
                  </label>
                  <label style={{ display: 'grid', gap: 6 }}>
                    <span style={{ fontSize: 13 }}>Senha</span>
                    <input
                      type="password" required minLength={8}
                      autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                      value={password} onChange={(event) => setPassword(event.target.value)}
                      style={{ padding: 12, borderRadius: 10, color: '#0f172a' }}
                    />
                  </label>
                  <button type="submit" disabled={busy || !firebaseConfigurationReady} style={{ padding: 12, borderRadius: 10 }}>
                    {busy ? 'Aguarde…' : mode === 'signin' ? 'Entrar com e-mail' : 'Criar conta'}
                  </button>
                </form>
                <button type="button" onClick={signInGoogle} disabled={busy || !firebaseConfigurationReady}
                  style={{ width: '100%', padding: 12, marginTop: 10, borderRadius: 10 }}>
                  Continuar com Google
                </button>
                <button type="button" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setNotice(''); }}
                  style={{ marginTop: 14, color: '#67e8f9' }}>
                  {mode === 'signin' ? 'Ainda não tem conta? Criar conta' : 'Já tem conta? Entrar'}
                </button>
              </>
            )}

            {notice && <p role="status" style={{ color: '#86efac', marginTop: 14 }}>{notice}</p>}
            {error && <p role="alert" style={{ color: '#fca5a5', marginTop: 14 }}>{error}</p>}
            <p style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.5, marginTop: 18 }}>
              O acesso a dados e funções protegidas depende de validação no servidor. A aparência deste componente é provisória e aguarda a referência visual oficial.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
