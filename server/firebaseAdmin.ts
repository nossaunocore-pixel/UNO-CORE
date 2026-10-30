import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

function getServiceAccount(): Record<string, unknown> {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error('FIREBASE_ADMIN_NOT_CONFIGURED');
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
      throw new Error('Service account fields are incomplete.');
    }
    return parsed;
  } catch {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON_INVALID');
  }
}

export function getAdminServices() {
  const serviceAccount = getServiceAccount();
  const projectId = process.env.FIREBASE_PROJECT_ID ||
    String(serviceAccount.project_id);

  const app = getApps().find((item) => item.name === 'uno-core-admin') ??
    initializeApp({
      credential: cert(serviceAccount as Parameters<typeof cert>[0]),
      projectId
    }, 'uno-core-admin');

  return {
    auth: getAuth(app),
    firestore: getFirestore(app),
    projectId
  };
}

export async function verifyFirebaseRequest(request: Request) {
  const header = request.headers.get('authorization') || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  if (!match) {
    throw new Error('AUTHORIZATION_REQUIRED');
  }

  const { auth } = getAdminServices();
  const decoded = await auth.verifyIdToken(match[1], true);
  return { decoded, auth };
}
