import { randomUUID } from 'node:crypto';
import { getAdminServices, verifyFirebaseRequest } from '../../server/firebaseAdmin';

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Método não permitido.' }, 405);
  }

  try {
    const { decoded, auth } = await verifyFirebaseRequest(request);
    if (!decoded.email_verified && !decoded.phone_number) {
      return json({
        error: 'Confirme seu e-mail antes de concluir a criação da identidade UNO.'
      }, 403);
    }

    const { firestore } = getAdminServices();
    const identityRef = firestore.collection('uno_identity_links').doc(decoded.uid);
    const userRecord = await auth.getUser(decoded.uid);
    const existingClaims = userRecord.customClaims || {};
    const founderUid = process.env.UNO_FOUNDER_UID;
    const isConfiguredFounder = Boolean(founderUid && founderUid === decoded.uid);

    const identity = await firestore.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(identityRef);
      const claimIdu = typeof existingClaims.unoIdu === 'string'
        ? existingClaims.unoIdu
        : null;

      if (snapshot.exists) {
        const storedIdu = snapshot.get('idu');
        if (typeof storedIdu !== 'string' || !storedIdu) {
          throw new Error('IDENTITY_RECORD_INVALID');
        }
        if (claimIdu && claimIdu !== storedIdu) {
          throw new Error('IDENTITY_LINK_CONFLICT');
        }
        return storedIdu;
      }

      const idu = claimIdu || 'idu_' + randomUUID();
      transaction.create(identityRef, {
        idu,
        firebaseUid: decoded.uid,
        createdAt: new Date().toISOString(),
        schemaVersion: 1
      });
      return idu;
    });

    const nextClaims: Record<string, unknown> = {
      ...existingClaims,
      role: 'authenticated',
      unoIdu: identity
    };
    if (isConfiguredFounder) {
      nextClaims.unoFounder = true;
      nextClaims.unoMaster = true;
    }

    const claimsChanged =
      existingClaims.role !== 'authenticated' ||
      existingClaims.unoIdu !== identity ||
      (isConfiguredFounder &&
        (existingClaims.unoFounder !== true || existingClaims.unoMaster !== true));

    if (claimsChanged) {
      await auth.setCustomUserClaims(decoded.uid, nextClaims);
      return json({
        status: 'claims_refresh_required',
        message: 'Identidade criada. Atualize a sessão para ativar as permissões.',
        idu: identity
      }, 202);
    }

    return json({
      status: 'ready',
      idu: identity,
      permissions: {
        founder: existingClaims.unoFounder === true,
        master: existingClaims.unoFounder === true || existingClaims.unoMaster === true
      }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    if (message === 'AUTHORIZATION_REQUIRED') {
      return json({ error: 'Autenticação necessária.' }, 401);
    }
    if (message === 'FIREBASE_ADMIN_NOT_CONFIGURED' ||
        message === 'FIREBASE_SERVICE_ACCOUNT_JSON_INVALID') {
      return json({ error: 'Provisionamento seguro da identidade ainda não foi configurado.' }, 503);
    }
    if (message === 'IDENTITY_LINK_CONFLICT' || message === 'IDENTITY_RECORD_INVALID') {
      console.error('[UNO identity] Identity integrity check failed:', message);
      return json({ error: 'Não foi possível validar o vínculo da identidade. O acesso foi bloqueado.' }, 409);
    }
    console.error('[UNO identity] Session bootstrap failed:', message);
    return json({ error: 'Não foi possível validar sua identidade neste momento.' }, 500);
  }
}
