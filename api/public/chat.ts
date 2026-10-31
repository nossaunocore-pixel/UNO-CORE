import { createClient } from '@supabase/supabase-js';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

const UNO_SYSTEM_PROMPT =
  'Você é a UNO, assistente comunitária acolhedora, clara e responsável. Escute antes de propor soluções. Não afirme que um serviço foi executado quando estiver apenas em demonstração. Explique seus limites com transparência. Proteja dados pessoais e não solicite informações sensíveis desnecessárias. Esta é uma conversa de visitante: responda somente sobre informações públicas da UNO e nunca revele dados, documentos ou operações internas. Não prometa ações, contratações, reservas ou integrações que não tenham sido confirmadas.';

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

function getBearerToken(request: Request): string | null {
  const header = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(header);
  return match?.[1]?.trim() || null;
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Método não permitido.' }, 405);
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!supabaseUrl || !serviceRoleKey || !googleApiKey) {
    return json({ error: 'O atendimento público ainda não está configurado integralmente.' }, 503);
  }

  const accessToken = getBearerToken(request);
  if (!accessToken) {
    return json({ error: 'Inicie uma sessão de visitante para conversar com a UNO.' }, 401);
  }

  try {
    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    });

    // Verify the Supabase Auth JWT with Auth; do not trust client-supplied IDs.
    const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
    const user = userData.user as (typeof userData.user & { is_anonymous?: boolean }) | null;

    if (userError || !user || user.is_anonymous !== true) {
      return json({ error: 'A sessão de visitante não é válida. Recarregue a página e tente novamente.' }, 401);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Corpo da requisição JSON inválido.' }, 400);
    }

    const { message, history } = (body ?? {}) as {
      message?: unknown;
      history?: unknown;
    };

    if (typeof message !== 'string' || !message.trim()) {
      return json({ error: 'Mensagem inválida ou vazia.' }, 400);
    }
    if (message.length > 2000) {
      return json({ error: 'Para visitantes, a mensagem pode ter até 2.000 caracteres.' }, 400);
    }

    // The quota function lives in a non-exposed schema and is executable only
    // by service_role. It stores counters, not message text or raw IP addresses.
    const { data: allowed, error: quotaError } = await admin
      .schema('uno_private')
      .rpc('consume_public_chat_quota', { p_user_id: user.id });

    if (quotaError) {
      console.error('[UNO /api/public/chat] Quota service unavailable:', quotaError.code || 'UNKNOWN');
      return json({ error: 'O controle de uso do atendimento está temporariamente indisponível.' }, 503);
    }
    if (allowed !== true) {
      return json({ error: 'Você atingiu o limite de mensagens para visitantes. Aguarde um pouco e tente novamente.' }, 429);
    }

    const processedHistory = Array.isArray(history)
      ? history.slice(-6).filter((item): item is {
          role: 'user' | 'assistant';
          content: string;
        } => Boolean(item) &&
          (item.role === 'user' || item.role === 'assistant') &&
          typeof item.content === 'string')
        .map((item) => ({
          role: item.role,
          content: item.content.slice(0, 2000)
        }))
      : [];

    const result = await generateText({
      model: google('gemini-2.5-flash'),
      system: UNO_SYSTEM_PROMPT,
      messages: [
        ...processedHistory,
        { role: 'user' as const, content: message.trim() }
      ],
      maxOutputTokens: 300,
      abortSignal: AbortSignal.timeout(30000)
    });

    return json({
      reply: result.text,
      meta: {
        provider: 'google',
        model: 'gemini-2.5-flash',
        identity: 'supabase-anonymous-visitor'
      }
    });
  } catch (error) {
    const code = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    console.error('[UNO /api/public/chat] Request failed:', code);
    return json({ error: 'O atendimento público está temporariamente indisponível.' }, 500);
  }
}
