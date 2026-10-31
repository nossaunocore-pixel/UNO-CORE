import { getAdminServices, verifyFirebaseRequest } from './firebaseAdmin';

export const PANEL_SCOPES = [
  'uno.panel.master.access',
  'uno.panel.administrative.access',
  'uno.panel.general_coordination.access',
  'uno.panel.legal.access',
  'uno.panel.accounting_finance.access',
  'uno.panel.support.access'
] as const;

export type PanelScope = typeof PANEL_SCOPES[number];

export function isPanelScope(value: string): value is PanelScope {
  return (PANEL_SCOPES as readonly string[]).includes(value);
}

/** Verifies signed claims and the active Firestore assignment on the server. */
export async function requirePanelScope(request: Request, scope: PanelScope) {
  const { decoded } = await verifyFirebaseRequest(request);

  if (decoded.firebase?.sign_in_provider !== 'google.com' ||
      decoded.email_verified !== true ||
      typeof decoded.uno_idu !== 'string' || !decoded.uno_idu.startsWith('idu_')) {
    throw new Error('VERIFIED_UNO_IDENTITY_REQUIRED');
  }

  const founderUid = process.env.UNO_FOUNDER_UID;
  if (founderUid && decoded.uid === founderUid && decoded.unoFounder === true) return decoded;

  const tokenScopes = Array.isArray(decoded.uno_scopes)
    ? decoded.uno_scopes.filter((value): value is string => typeof value === 'string')
    : [];

  if (!tokenScopes.includes(scope)) {
    throw new Error('PANEL_SCOPE_REQUIRED');
  }

  const { firestore } = getAdminServices();
  const assignment = await firestore
    .collection('uno_panel_assignments')
    .doc(decoded.uid)
    .get();

  const storedScopes = assignment.exists && Array.isArray(assignment.get('scopes'))
    ? (assignment.get('scopes') as unknown[]).filter((value): value is string => typeof value === 'string')
    : [];

  if (!assignment.exists ||
      assignment.get('status') !== 'active' ||
      !storedScopes.includes(scope)) {
    throw new Error('PANEL_ASSIGNMENT_INACTIVE');
  }

  return decoded;
}
