import { isPanelScope, requirePanelScope } from '../../server/panelAuthorization';

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'GET') return json({ error: 'Método não permitido.' }, 405);

  const scope = new URL(request.url).searchParams.get('scope') || '';
  if (!isPanelScope(scope)) return json({ error: 'Escopo de painel inválido.' }, 400);

  try {
    const decoded = await requirePanelScope(request, scope);
    return json({
      allowed: true,
      scope,
      founder: decoded.unoFounder === true
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    if (message === 'AUTHORIZATION_REQUIRED') return json({ error: 'Autenticação necessária.' }, 401);
    if (message === 'PANEL_SCOPE_REQUIRED' || message === 'PANEL_ASSIGNMENT_INACTIVE') {
      return json({ allowed: false, error: 'Este escopo não foi atribuído ou está inativo.' }, 403);
    }
    if (message === 'FIREBASE_ADMIN_NOT_CONFIGURED' || message === 'FIREBASE_SERVICE_ACCOUNT_JSON_INVALID') {
      return json({ error: 'A verificação de permissões ainda não foi configurada.' }, 503);
    }
    console.error('[UNO panel access] Verification failed:', message);
    return json({ error: 'Não foi possível verificar o escopo do painel.' }, 500);
  }
}
