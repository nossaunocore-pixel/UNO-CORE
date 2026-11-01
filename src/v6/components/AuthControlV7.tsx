import React, { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User
} from 'firebase/auth';
import { auth, firebaseConfigurationReady } from '../../services/firebase';

type AuthMode = 'options' | 'login_email' | 'register_email' | 'reset_password';

export function AuthControlV7() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>('options');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!auth) return;
    setPersistence(auth, browserLocalPersistence).catch((err) => {
      console.warn('[UNO Auth] Configuração de persistência local:', err);
    });
    return onAuthStateChanged(auth, setUser);
  }, []);

  const accountUser = user?.isAnonymous ? null : user;

  function resetForm() {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setNotice('');
  }

  function handleOpen() {
    resetForm();
    setMode('options');
    setOpen(true);
  }

  function mapAuthError(caught: unknown, fallback: string): string {
    if (!(caught instanceof Error)) return fallback;
    const msg = caught.message;
    if (msg.includes('auth/invalid-credential') || msg.includes('auth/wrong-password')) {
      return 'E-mail ou senha incorretos.';
    }
    if (msg.includes('auth/email-already-in-use')) {
      return 'Este e-mail já está registrado na plataforma.';
    }
    if (msg.includes('auth/weak-password')) {
      return 'A senha deve conter no mínimo 6 caracteres.';
    }
    if (msg.includes('auth/invalid-email')) {
      return 'O formato do e-mail é inválido.';
    }
    if (msg.includes('auth/user-not-found')) {
      return 'Nenhuma conta localizada com este e-mail.';
    }
    if (msg.includes('auth/popup-closed-by-user')) {
      return 'A janela de autenticação foi fechada antes da conclusão.';
    }
    return msg || fallback;
  }

  async function signInGoogle() {
    if (!auth || busy || !firebaseConfigurationReady) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
      setNotice('Conta Google autenticada. Sessão segura iniciada.');
    } catch (caught) {
      setError(mapAuthError(caught, 'Não foi possível entrar com Google.'));
    } finally {
      setBusy(false);
    }
  }

  async function handleEmailLogin(event: React.FormEvent) {
    event.preventDefault();
    if (!auth || busy || !firebaseConfigurationReady) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setNotice('Acesso realizado com sucesso.');
      resetForm();
    } catch (caught) {
      setError(mapAuthError(caught, 'Não foi possível realizar o login por e-mail.'));
    } finally {
      setBusy(false);
    }
  }

  async function handleEmailRegister(event: React.FormEvent) {
    event.preventDefault();
    if (!auth || busy || !firebaseConfigurationReady) return;
    if (password !== confirmPassword) {
      setError('As senhas digitadas não coincidem.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve conter no mínimo 6 caracteres.');
      return;
    }
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      try {
        await sendEmailVerification(cred.user);
        setNotice('Conta criada com sucesso! Enviamos um e-mail de validação para o endereço cadastrado.');
      } catch {
        setNotice('Conta criada com sucesso. Você já pode acessar a plataforma.');
      }
      resetForm();
    } catch (caught) {
      setError(mapAuthError(caught, 'Não foi possível concluir o cadastro por e-mail.'));
    } finally {
      setBusy(false);
    }
  }

  async function handlePasswordReset(event: React.FormEvent) {
    event.preventDefault();
    if (!auth || busy || !firebaseConfigurationReady) return;
    if (!email.trim()) {
      setError('Informe o e-mail cadastrado para redefinir a senha.');
      return;
    }
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setNotice('Link de recuperação enviado com sucesso. Verifique sua caixa de entrada.');
    } catch (caught) {
      setError(mapAuthError(caught, 'Não foi possível enviar o e-mail de recuperação.'));
    } finally {
      setBusy(false);
    }
  }

  async function handleSendVerification() {
    if (!accountUser || busy) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await sendEmailVerification(accountUser);
      setNotice('E-mail de verificação reenviado. Verifique sua caixa de entrada.');
    } catch (caught) {
      setError(mapAuthError(caught, 'Não foi possível enviar o e-mail de validação.'));
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
      setError(mapAuthError(caught, 'Não foi possível encerrar a sessão.'));
    }
  }

  return (
    <>
      <button
        type="button"
        className="v6-account-trigger"
        onClick={handleOpen}
        aria-label={accountUser ? 'Abrir opções da conta' : 'Entrar na conta'}
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
              boxShadow: '0 24px 80px rgba(0,0,0,.45)', maxHeight: '90vh', overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <div>
                <small style={{ color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '.08em' }}>Identidade UNO</small>
                <h2 id="uno-auth-title" style={{ margin: '6px 0 0', fontSize: 22 }}>
                  {accountUser ? 'Sua conta' : mode === 'register_email' ? 'Criar Conta' : mode === 'reset_password' ? 'Recuperar Senha' : 'Acesso ao UNO'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                style={{ padding: '6px 10px', background: 'transparent', border: '1px solid #475569', color: '#94a3b8', borderRadius: 8, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {!firebaseConfigurationReady && (
              <p role="alert" style={{ color: '#fbbf24', marginTop: 16, fontSize: 13, background: 'rgba(251, 191, 36, .1)', padding: '10px 12px', borderRadius: 8 }}>
                A configuração de autenticação do Firebase ainda não foi declarada neste ambiente. Os recursos de visitante continuam disponíveis.
              </p>
            )}

            {accountUser ? (
              <div style={{ marginTop: 20 }}>
                <p style={{ fontWeight: 600, fontSize: 16, margin: 0 }}>
                  {accountUser.displayName || accountUser.email || 'Usuário Autenticado'}
                </p>
                <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 4 }}>
                  {accountUser.email}
                </p>

                <div style={{ marginTop: 12, padding: '10px 12px', borderRadius: 8, background: accountUser.emailVerified ? 'rgba(34, 197, 94, .1)' : 'rgba(251, 191, 36, .1)', border: `1px solid ${accountUser.emailVerified ? '#22c55e' : '#fbbf24'}` }}>
                  <p style={{ color: accountUser.emailVerified ? '#86efac' : '#fbbf24', fontSize: 13, margin: 0 }}>
                    {accountUser.emailVerified ? '✓ E-mail verificado' : '⚠️ E-mail aguardando validação'}
                  </p>
                  {!accountUser.emailVerified && (
                    <button
                      type="button"
                      onClick={handleSendVerification}
                      disabled={busy}
                      style={{ marginTop: 8, fontSize: 12, padding: '6px 10px', background: '#334155', border: 'none', color: '#f8fafc', borderRadius: 6, cursor: 'pointer' }}
                    >
                      {busy ? 'Enviando…' : 'Reenviar validação de e-mail'}
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={leaveAccount}
                  style={{ marginTop: 20, width: '100%', padding: '11px 14px', background: '#e11d48', border: 'none', color: '#fff', borderRadius: 10, cursor: 'pointer', fontWeight: 600 }}
                >
                  Sair da conta
                </button>
              </div>
            ) : (
              <div style={{ marginTop: 18 }}>
                {mode === 'options' && (
                  <div>
                    <p style={{ color: '#cbd5e1', fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>
                      Acesse sua conta para utilizar os ambientes protegidos e governança do UNO. Visitantes navegam livremente pela Praça, Vitrine e Comunidade sem obrigação de cadastro.
                    </p>

                    <button
                      type="button"
                      onClick={signInGoogle}
                      disabled={busy || !firebaseConfigurationReady}
                      style={{
                        width: '100%', padding: '12px 14px', borderRadius: 10, background: '#0284c7',
                        border: 'none', color: '#ffffff', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                      }}
                    >
                      {busy ? 'Conectando…' : 'Continuar com Google'}
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0', color: '#64748b', fontSize: 12 }}>
                      <hr style={{ flex: 1, borderColor: '#334155' }} />
                      <span>ou com e-mail</span>
                      <hr style={{ flex: 1, borderColor: '#334155' }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <button
                        type="button"
                        onClick={() => { setMode('login_email'); setError(''); setNotice(''); }}
                        disabled={!firebaseConfigurationReady}
                        style={{
                          width: '100%', padding: '11px 14px', borderRadius: 10, background: '#1e293b',
                          border: '1px solid #475569', color: '#f8fafc', fontSize: 14, cursor: 'pointer'
                        }}
                      >
                        Entrar com e-mail e senha
                      </button>
                      <button
                        type="button"
                        onClick={() => { setMode('register_email'); setError(''); setNotice(''); }}
                        disabled={!firebaseConfigurationReady}
                        style={{
                          width: '100%', padding: '11px 14px', borderRadius: 10, background: 'transparent',
                          border: '1px solid #475569', color: '#67e8f9', fontSize: 14, cursor: 'pointer'
                        }}
                      >
                        Criar nova conta
                      </button>
                    </div>
                  </div>
                )}

                {mode === 'login_email' && (
                  <form onSubmit={handleEmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label htmlFor="uno-login-email" style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>
                        E-mail
                      </label>
                      <input
                        id="uno-login-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        style={{
                          width: '100%', padding: '10px 12px', borderRadius: 8, background: '#1e293b',
                          border: '1px solid #475569', color: '#fff', fontSize: 14, boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="uno-login-password" style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>
                        Senha
                      </label>
                      <input
                        id="uno-login-password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                          width: '100%', padding: '10px 12px', borderRadius: 8, background: '#1e293b',
                          border: '1px solid #475569', color: '#fff', fontSize: 14, boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={busy || !firebaseConfigurationReady}
                      style={{
                        padding: '12px', borderRadius: 10, background: '#0284c7', border: 'none',
                        color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 4
                      }}
                    >
                      {busy ? 'Entrando…' : 'Entrar'}
                    </button>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 4 }}>
                      <button
                        type="button"
                        onClick={() => { setMode('reset_password'); setError(''); setNotice(''); }}
                        style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
                      >
                        Esqueci a senha
                      </button>
                      <button
                        type="button"
                        onClick={() => { setMode('register_email'); setError(''); setNotice(''); }}
                        style={{ background: 'none', border: 'none', color: '#67e8f9', cursor: 'pointer', padding: 0 }}
                      >
                        Criar conta
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => { setMode('options'); setError(''); setNotice(''); }}
                      style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 12, marginTop: 6 }}
                    >
                      ← Voltar às opções
                    </button>
                  </form>
                )}

                {mode === 'register_email' && (
                  <form onSubmit={handleEmailRegister} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label htmlFor="uno-reg-email" style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>
                        E-mail
                      </label>
                      <input
                        id="uno-reg-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        style={{
                          width: '100%', padding: '10px 12px', borderRadius: 8, background: '#1e293b',
                          border: '1px solid #475569', color: '#fff', fontSize: 14, boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="uno-reg-password" style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>
                        Senha (mínimo 6 caracteres)
                      </label>
                      <input
                        id="uno-reg-password"
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                          width: '100%', padding: '10px 12px', borderRadius: 8, background: '#1e293b',
                          border: '1px solid #475569', color: '#fff', fontSize: 14, boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="uno-reg-confirm" style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>
                        Confirme a Senha
                      </label>
                      <input
                        id="uno-reg-confirm"
                        type="password"
                        required
                        minLength={6}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                          width: '100%', padding: '10px 12px', borderRadius: 8, background: '#1e293b',
                          border: '1px solid #475569', color: '#fff', fontSize: 14, boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={busy || !firebaseConfigurationReady}
                      style={{
                        padding: '12px', borderRadius: 10, background: '#0284c7', border: 'none',
                        color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 4
                      }}
                    >
                      {busy ? 'Criando conta…' : 'Concluir Cadastro'}
                    </button>

                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: 12, marginTop: 4 }}>
                      <button
                        type="button"
                        onClick={() => { setMode('login_email'); setError(''); setNotice(''); }}
                        style={{ background: 'none', border: 'none', color: '#67e8f9', cursor: 'pointer', padding: 0 }}
                      >
                        Já possui conta? Fazer login
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => { setMode('options'); setError(''); setNotice(''); }}
                      style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 12, marginTop: 6 }}
                    >
                      ← Voltar às opções
                    </button>
                  </form>
                )}

                {mode === 'reset_password' && (
                  <form onSubmit={handlePasswordReset} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <p style={{ color: '#cbd5e1', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      Informe seu e-mail para receber as instruções de recuperação de senha.
                    </p>

                    <div>
                      <label htmlFor="uno-reset-email" style={{ display: 'block', fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>
                        E-mail cadastrado
                      </label>
                      <input
                        id="uno-reset-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        style={{
                          width: '100%', padding: '10px 12px', borderRadius: 8, background: '#1e293b',
                          border: '1px solid #475569', color: '#fff', fontSize: 14, boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={busy || !firebaseConfigurationReady}
                      style={{
                        padding: '12px', borderRadius: 10, background: '#0284c7', border: 'none',
                        color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 4
                      }}
                    >
                      {busy ? 'Enviando…' : 'Enviar link de recuperação'}
                    </button>

                    <button
                      type="button"
                      onClick={() => { setMode('login_email'); setError(''); setNotice(''); }}
                      style={{ background: 'none', border: 'none', color: '#67e8f9', cursor: 'pointer', fontSize: 12, marginTop: 6 }}
                    >
                      ← Voltar ao login
                    </button>
                  </form>
                )}
              </div>
            )}

            {notice && <p role="status" style={{ color: '#86efac', fontSize: 13, marginTop: 14, background: 'rgba(34, 197, 94, .1)', padding: '8px 10px', borderRadius: 6 }}>{notice}</p>}
            {error && <p role="alert" style={{ color: '#fca5a5', fontSize: 13, marginTop: 14, background: 'rgba(239, 68, 68, .1)', padding: '8px 10px', borderRadius: 6 }}>{error}</p>}

            <p style={{ color: '#64748b', fontSize: 11, lineHeight: 1.5, marginTop: 18, borderTop: '1px solid #1e293b', paddingTop: 12 }}>
              A identidade autenticada conecta você à governança e aos ambientes internos. Visitantes possuem livre acesso de leitura às áreas públicas sem necessidade de cadastro.
            </p>
          </section>
        </div>
      )}
    </>
  );
}