import React, { useEffect, useState } from 'react';
import { getIdTokenResult, onIdTokenChanged } from 'firebase/auth';
import { auth } from '../../services/firebase';
import type { V6View } from '../types';

type AccessState =
  | 'checking'
  | 'allowed'
  | 'login_required'
  | 'verification_required'
  | 'provisioning_required'
  | 'forbidden';

// Public visitor navigation is Supabase-backed and does not require Firebase/Google.
const PUBLIC_VIEWS: V6View[] = [
  'praca', 'edificio', 'instituicoes', 'nos', 'lazer', 'servicos', 'comunidade', 'participacao', 'conversa'
];

const MASTER_VIEWS: V6View[] = [
  'mestre', 'oficina', 'conteudos', 'acervo',
  'integracoes', 'agentes', 'auditoria'
];

export function PageAccessGateV7({
  view,
  children
}: {
  view: V6View;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<AccessState>('checking');

  useEffect(() => {
    if (PUBLIC_VIEWS.includes(view)) {
      setState('allowed');
      return;
    }

    if (!auth) {
      setState('login_required');
      return;
    }

    let cancelled = false;
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (!user || user.isAnonymous) {
        if (!cancelled) setState('login_required');
        return;
      }

      const authenticatedWithGoogle = user.providerData.some(
        (provider) => provider.providerId === 'google.com'
      );
      if (!authenticatedWithGoogle) {
        if (!cancelled) setState('login_required');
        return;
      }

      if (!cancelled) setState('checking');

      try {
        let tokenResult = await getIdTokenResult(user);
        if (tokenResult.claims.email_verified !== true) {
          if (!cancelled) setState('verification_required');
          return;
        }

        if (typeof tokenResult.claims.uno_idu !== 'string' ||
            !tokenResult.claims.uno_idu.trim()) {
          const response = await fetch('/api/identity/session', {
            method: 'POST',
            headers: { Authorization: `Bearer ${await user.getIdToken()}` }
          });

          if (!response.ok && response.status !== 202) {
            if (!cancelled) setState('provisioning_required');
            return;
          }

          if (response.status === 202) {
            await user.getIdToken(true);
          }
          tokenResult = await getIdTokenResult(user, true);
        }

        if (typeof tokenResult.claims.uno_idu !== 'string' ||
            !tokenResult.claims.uno_idu.trim()) {
          if (!cancelled) setState('provisioning_required');
          return;
        }

        if (MASTER_VIEWS.includes(view)) {
          const hasMasterAccess = tokenResult.claims.unoFounder === true ||
            tokenResult.claims.unoMaster === true;
          if (!cancelled) setState(hasMasterAccess ? 'allowed' : 'forbidden');
          return;
        }

        if (!cancelled) setState('allowed');
      } catch {
        if (!cancelled) setState('provisioning_required');
      }
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [view]);

  if (PUBLIC_VIEWS.includes(view) || state === 'allowed') return <>{children}</>;

  const messages: Record<Exclude<AccessState, 'allowed'>, string> = {
    checking: 'Verificando sua identidade e as permissões desta área…',
    login_required: 'Para conhecer os ambientes internos, entre com uma conta Google pelo botão Entrar.',
    verification_required: 'A conta Google precisa apresentar um e-mail verificado antes de continuar.',
    provisioning_required: 'Não foi possível validar ou provisionar sua Identidade UNO. O acesso permanece bloqueado até a configuração segura do serviço.',
    forbidden: 'Sua conta não possui autorização para esta área. O acesso mestre depende de concessão explícita e validada.'
  };

  return (
    <section className="v7-access-state" role="status" aria-live="polite">
      <div className="v7-access-state__icon" aria-hidden="true">⌑</div>
      <span className="v6-kicker">Controle de acesso UNO</span>
      <h1>{state === 'checking' ? 'Verificação de acesso' : 'Área protegida'}</h1>
      <p>{messages[state]}</p>
      <small>A navegação visual não concede privilégios. As operações com dados também devem ser autorizadas no servidor e nas regras do banco.</small>
    </section>
  );
}
