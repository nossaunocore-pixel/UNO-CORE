import { randomUUID } from 'node:crypto';
import { getSupabaseAdmin } from '../../server/supabaseAdmin';
import { requirePanelScope } from '../../server/panelAuthorization';

const ASSET_TYPES = [
  'agent', 'tool', 'api', 'module', 'automation', 'product', 'service',
  'integration', 'panel', 'volume', 'workflow', 'other'
] as const;

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

function slugify(value: string) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 72);
}

function validateDefinition(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const serialized = JSON.stringify(value);
  if (serialized.length > 60000) return false;

  const blockedKey = /(secret|token|password|private.?key|api.?key|service.?role|authorization|credential)/i;
  const forbiddenValue = /(sk-(live|test|proj)-[A-Za-z0-9_-]{12,}|whsec_[A-Za-z0-9]{12,}|-----BEGIN (RSA |EC )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{20,})/;

  const inspect = (node: unknown): boolean => {
    if (Array.isArray(node)) return node.every(inspect);
    if (!node || typeof node !== 'object') {
      return typeof node !== 'string' || !forbiddenValue.test(node);
    }
    return Object.entries(node as Record<string, unknown>).every(([key, child]) => {
      const isReference = /ref$/i.test(key);
      if (blockedKey.test(key) && !isReference) return false;
      return inspect(child);
    });
  };

  return inspect(value);
}

function errorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
  if (message === 'AUTHORIZATION_REQUIRED') return json({ error: 'Autenticação necessária.' }, 401);
  if (message === 'VERIFIED_UNO_IDENTITY_REQUIRED' || message === 'PANEL_SCOPE_REQUIRED' || message === 'PANEL_ASSIGNMENT_INACTIVE') {
    return json({ error: 'Acesso negado: escopo do Painel Mestre não atribuído.' }, 403);
  }
  if (message === 'FIREBASE_ADMIN_NOT_CONFIGURED' || message === 'FIREBASE_SERVICE_ACCOUNT_JSON_INVALID' || message === 'SUPABASE_ADMIN_NOT_CONFIGURED') {
    return json({ error: 'Serviços seguros ainda não configurados.' }, 503);
  }
  if (message.includes('23505') || message.toLowerCase().includes('duplicate key')) {
    return json({ error: 'Já existe um recurso com esse identificador. Escolha outro nome ou slug.' }, 409);
  }
  console.error('[UNO workshop assets] Request failed:', message);
  return json({ error: 'Não foi possível processar o recurso da Oficina.' }, 500);
}

export default async function handler(request: Request): Promise<Response> {
  try {
    const decoded = await requirePanelScope(request, 'uno.panel.master.access');
    const idu = decoded.uno_idu as string;
    const admin = getSupabaseAdmin();

    if (request.method === 'GET') {
      const { data, error } = await admin
        .from('workshop_assets')
        .select('id,asset_type,origin,slug,name,description,status,version,change_summary,previous_asset_id,created_at,updated_at,requires_human_approval')
        .order('updated_at', { ascending: false })
        .limit(100);
      if (error) throw error;
      return json({ assets: data ?? [] });
    }

    if (request.method !== 'POST') return json({ error: 'Método não permitido.' }, 405);

    let body: unknown;
    try { body = await request.json(); } catch { return json({ error: 'Corpo JSON inválido.' }, 400); }
    const payload = (body ?? {}) as {
      assetType?: unknown;
      origin?: unknown;
      name?: unknown;
      description?: unknown;
      definition?: unknown;
      changeSummary?: unknown;
      slug?: unknown;
    };

    const assetType = typeof payload.assetType === 'string' ? payload.assetType : '';
    const name = typeof payload.name === 'string' ? payload.name.trim() : '';
    const description = typeof payload.description === 'string' ? payload.description.trim() : '';
    const changeSummary = typeof payload.changeSummary === 'string' ? payload.changeSummary.trim() : '';
    const origin = payload.origin === 'uno' || payload.origin === 'third_party' ? payload.origin : null;

    if (!(ASSET_TYPES as readonly string[]).includes(assetType)) return json({ error: 'Tipo de recurso inválido.' }, 400);
    if (!name || name.length > 120) return json({ error: 'Informe um nome de até 120 caracteres.' }, 400);
    if (description.length > 4000 || changeSummary.length > 2000) return json({ error: 'Descrição ou resumo de alteração excede o limite.' }, 400);
    if (!validateDefinition(payload.definition)) return json({ error: 'Definição inválida, muito grande ou contendo possíveis segredos. Use referências a segredos, nunca valores.' }, 400);
    if ((assetType === 'product' || assetType === 'service') && !origin) return json({ error: 'Informe se o produto/serviço é próprio UNO ou de terceiro.' }, 400);
    if (assetType !== 'product' && assetType !== 'service' && payload.origin !== undefined && payload.origin !== null) {
      return json({ error: 'Origem própria/terceiro só se aplica a produtos e serviços.' }, 400);
    }

    const slugInput = typeof payload.slug === 'string' ? slugify(payload.slug) : '';
    const baseSlug = slugify(name) || 'asset';
    const slug = slugInput || (baseSlug + '-' + randomUUID().slice(0, 8));

    const { data, error } = await admin.rpc('create_workshop_asset', {
      p_asset_type: assetType,
      p_origin: origin,
      p_slug: slug,
      p_name: name,
      p_description: description,
      p_definition: payload.definition,
      p_change_summary: changeSummary,
      p_actor_idu: idu
    });

    if (error) throw error;
    return json({ asset: data }, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
