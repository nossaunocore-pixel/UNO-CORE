import { getSupabaseAdmin } from '../../server/supabaseAdmin';
import { requirePanelScope } from '../../server/panelAuthorization';

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

function validateDefinition(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const serialized = JSON.stringify(value);
  if (serialized.length > 60000) return false;
  const blockedKey = /(secret|token|password|private.?key|api.?key|service.?role|authorization|credential)/i;
  const forbiddenValue = /(sk_(live|test)_[A-Za-z0-9]{12,}|sk-(live|test|proj)-[A-Za-z0-9_-]{12,}|rk_(live|test)_[A-Za-z0-9]{12,}|whsec_[A-Za-z0-9]{12,}|AIza[0-9A-Za-z_-]{20,}|xox[baprs]-[A-Za-z0-9-]{16,}|gh[pousr]_[A-Za-z0-9]{20,}|-----BEGIN (RSA |EC )?PRIVATE KEY-----)/;
  const inspect = (node: unknown): boolean => {
    if (Array.isArray(node)) return node.every(inspect);
    if (!node || typeof node !== 'object') return typeof node !== 'string' || !forbiddenValue.test(node);
    return Object.entries(node as Record<string, unknown>).every(([key, child]) => {
      if (blockedKey.test(key) && !/ref$/i.test(key)) return false;
      return inspect(child);
    });
  };
  return inspect(value);
}

function mapRpcError(message: string) {
  if (message.includes('WORKSHOP_ASSET_NOT_FOUND')) return json({ error: 'Recurso não encontrado.' }, 404);
  if (message.includes('WORKSHOP_ASSET_NOT_DRAFT')) return json({ error: 'Somente rascunhos podem ser editados; crie uma nova versão.' }, 409);
  if (message.includes('WORKSHOP_ASSET_ORIGIN_REQUIRED')) return json({ error: 'Informe a origem UNO ou terceiro.' }, 400);
  if (message.includes('WORKSHOP_ASSET_ORIGIN_NOT_APPLICABLE')) return json({ error: 'Origem própria/terceiro só se aplica a produto e serviço.' }, 400);
  if (message.includes('WORKSHOP_DEFINITION_INVALID')) return json({ error: 'Definição JSON inválida ou acima do limite.' }, 400);
  if (message.includes('WORKSHOP_ACTOR_IDU_INVALID')) return json({ error: 'Identidade UNO inválida.' }, 403);
  return null;
}

export default async function handler(request: Request): Promise<Response> {
  try {
    const decoded = await requirePanelScope(request, 'uno.panel.master.access');
    const idu = decoded.uno_idu as string;
    const admin = getSupabaseAdmin();
    const url = new URL(request.url);
    const id = url.searchParams.get('id') || '';

    if (!id) return json({ error: 'Informe o ID do recurso.' }, 400);

    if (request.method === 'GET') {
      const [assetResult, versionsResult] = await Promise.all([
        admin.from('workshop_assets').select('*').eq('id', id).maybeSingle(),
        admin.from('workshop_asset_versions')
          .select('id,version,change_summary,changed_by_idu,created_at')
          .eq('asset_id', id)
          .order('version', { ascending: false })
      ]);
      if (assetResult.error) throw assetResult.error;
      if (versionsResult.error) throw versionsResult.error;
      if (!assetResult.data) return json({ error: 'Recurso não encontrado.' }, 404);
      return json({ asset: assetResult.data, versions: versionsResult.data ?? [] });
    }

    if (request.method === 'PATCH') {
      let body: unknown;
      try { body = await request.json(); } catch { return json({ error: 'Corpo JSON inválido.' }, 400); }
      const payload = (body ?? {}) as {
        origin?: unknown;
        name?: unknown;
        description?: unknown;
        definition?: unknown;
        changeSummary?: unknown;
      };
      const name = typeof payload.name === 'string' ? payload.name.trim() : '';
      const description = typeof payload.description === 'string' ? payload.description.trim() : '';
      const changeSummary = typeof payload.changeSummary === 'string' ? payload.changeSummary.trim() : '';
      const origin = payload.origin === 'uno' || payload.origin === 'third_party' ? payload.origin : null;
      if (!name || name.length > 120) return json({ error: 'Informe um nome de até 120 caracteres.' }, 400);
      if (description.length > 4000 || changeSummary.length > 2000) return json({ error: 'Descrição ou resumo de alteração excede o limite.' }, 400);
      if (!validateDefinition(payload.definition)) return json({ error: 'Definição inválida, muito grande ou contendo possíveis segredos.' }, 400);

      const { data, error } = await admin.rpc('update_workshop_asset', {
        p_asset_id: id,
        p_origin: origin,
        p_name: name,
        p_description: description,
        p_definition: payload.definition,
        p_change_summary: changeSummary,
        p_actor_idu: idu
      });
      if (error) {
        const mapped = mapRpcError(error.message);
        if (mapped) return mapped;
        throw error;
      }
      return json({ asset: data });
    }

    if (request.method === 'POST') {
      const action = url.searchParams.get('action') || '';
      if (action !== 'submit' && action !== 'clone') {
        return json({ error: 'Ação indisponível. Aprovação e ativação exigem fluxo de testes e alçada própria.' }, 409);
      }

      const functionName = action === 'submit' ? 'submit_workshop_asset' : 'clone_workshop_asset';
      const { data, error } = await admin.rpc(functionName, {
        p_asset_id: id,
        p_actor_idu: idu
      });
      if (error) {
        const mapped = mapRpcError(error.message);
        if (mapped) return mapped;
        throw error;
      }
      return json({ asset: data }, 200);
    }

    return json({ error: 'Método não permitido.' }, 405);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    if (message === 'AUTHORIZATION_REQUIRED') return json({ error: 'Autenticação necessária.' }, 401);
    if (message === 'VERIFIED_UNO_IDENTITY_REQUIRED' || message === 'PANEL_SCOPE_REQUIRED' || message === 'PANEL_ASSIGNMENT_INACTIVE') {
      return json({ error: 'Acesso negado ao ambiente da Oficina.' }, 403);
    }
    if (message === 'FIREBASE_ADMIN_NOT_CONFIGURED' || message === 'FIREBASE_SERVICE_ACCOUNT_JSON_INVALID' || message === 'SUPABASE_ADMIN_NOT_CONFIGURED') {
      return json({ error: 'Serviços seguros da Oficina ainda não configurados.' }, 503);
    }
    console.error('[UNO workshop asset] Request failed:', message);
    return json({ error: 'Não foi possível processar o recurso da Oficina.' }, 500);
  }
}
