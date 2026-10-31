import { getAdminServices, verifyFirebaseRequest } from '../../server/firebaseAdmin';
import { isPanelScope } from '../../server/panelAuthorization';

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Método não permitido.' }, 405);

  try {
    const { decoded, auth } = await verifyFirebaseRequest(request);
    const founderUid = process.env.UNO_FOUNDER_UID;

    if (!founderUid || decoded.uid !== founderUid || decoded.unoFounder !== true) {
      return json({ error: 'Somente o fundador configurado pode atribuir escopos de painel.' }, 403);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Corpo JSON inválido.' }, 400);
    }

    const payload = (body ?? {}) as { targetUid?: unknown; scopes?: unknown };
    const targetUid = typeof payload.targetUid === 'string' ? payload.targetUid.trim() : '';
    if (!targetUid || targetUid.length > 128 || targetUid === founderUid) {
      return json({ error: 'Informe um UID Firebase válido de outra pessoa.' }, 400);
    }

    if (!Array.isArray(payload.scopes) || payload.scopes.length > 6 ||
        !payload.scopes.every((scope) => typeof scope === 'string' && isPanelScope(scope))) {
      return json({ error: 'A lista de escopos contém valores inválidos.' }, 400);
    }

    const scopes = [...new Set(payload.scopes as string[])];
    const { firestore } = getAdminServices();
    const target = await auth.getUser(targetUid);
    const assignmentRef = firestore.collection('uno_panel_assignments').doc(targetUid);
    const now = new Date().toISOString();

    await assignmentRef.set({
      targetUid,
      targetEmail: target.email || null,
      scopes,
      status: 'pending',
      assignedByUid: decoded.uid,
      updatedAt: now,
      schemaVersion: 1
    }, { merge: true });

    const existingClaims = target.customClaims || {};
    const nextClaims: Record<string, unknown> = {
      ...existingClaims,
      uno_scopes: scopes
    };

    if (scopes.includes('uno.panel.master.access')) {
      nextClaims.unoMaster = true;
    } else {
      delete nextClaims.unoMaster;
    }

    await auth.setCustomUserClaims(targetUid, nextClaims);
    await assignmentRef.update({
      status: scopes.length ? 'active' : 'revoked',
      updatedAt: new Date().toISOString()
    });

    return json({
      status: scopes.length ? 'active' : 'revoked',
      targetUid,
      scopes,
      message: scopes.length
        ? 'Escopos atribuídos. A pessoa deverá atualizar a sessão para receber as permissões.'
        : 'Escopos revogados. A pessoa deverá atualizar a sessão para refletir a alteração.'
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    if (message === 'AUTHORIZATION_REQUIRED') return json({ error: 'Autenticação necessária.' }, 401);
    if (message === 'FIREBASE_ADMIN_NOT_CONFIGURED' || message === 'FIREBASE_SERVICE_ACCOUNT_JSON_INVALID') {
      return json({ error: 'O serviço seguro de administração ainda não foi configurado.' }, 503);
    }
    if (message.includes('Firebase ID token') || message.includes('auth/')) {
      return json({ error: 'A sessão não é válida ou expirou.' }, 401);
    }
    console.error('[UNO panel assignment] Request failed:', message);
    return json({ error: 'Não foi possível atualizar os escopos deste usuário.' }, 500);
  }
}
