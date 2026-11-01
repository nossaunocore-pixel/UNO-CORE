import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { verifyFirebaseRequest } from '../server/firebaseAdmin';

const UNO_SYSTEM_PROMPT =
  'Você é a UNO, assistente comunitária acolhedora, clara e responsável. Escute antes de propor soluções. Não afirme que um serviço foi executado quando estiver apenas em demonstração. Explique seus limites com transparência. Proteja dados pessoais e não solicite informações sensíveis desnecessárias. Nunca revele dados, documentos ou operações internas a quem não possui autorização.';

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
    const { decoded } = await verifyFirebaseRequest(request);
    const hasGoogleIdentity = decoded.firebase?.sign_in_provider === 'google.com';
    const hasVerifiedEmail = decoded.email_verified === true;
    const hasUnoIdentity = typeof decoded.uno_idu === 'string' && decoded.uno_idu.startsWith('idu_');

    if (!hasGoogleIdentity || !hasVerifiedEmail || !hasUnoIdentity) {
      return json({ error: 'Esta rota exige uma conta Google verificada e uma Identidade UNO provisionada. Visitantes usam o atendimento público do Supabase.' }, 403);
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

    if (typeof message !== 'string' || message.trim().length === 0) {
      return json({ error: 'Mensagem inválida ou vazia.' }, 400);
    }
    if (message.length > 4000) {
      return json({ error: 'A mensagem excede o limite máximo de 4.000 caracteres.' }, 400);
    }

    const processedHistory = Array.isArray(history)
      ? history.slice(-12).filter((item): item is {
          role: 'user' | 'assistant';
          content: string;
        } => Boolean(item) &&
          (item.role === 'user' || item.role === 'assistant') &&
          typeof item.content === 'string')
        .map((item) => ({
          role: item.role,
          content: item.content.slice(0, 4000)
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
        identity: 'verified-google'
      }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    if (message === 'AUTHORIZATION_REQUIRED') {
      return json({ error: 'É necessário iniciar uma sessão de visitante ou entrar na sua conta.' }, 401);
    }
    if (message === 'FIREBASE_ADMIN_NOT_CONFIGURED' ||
        message === 'FIREBASE_SERVICE_ACCOUNT_JSON_INVALID') {
      return json({ error: 'O serviço seguro de autenticação ainda não foi configurado.' }, 503);
    }
    if (message.includes('Firebase ID token') || message.includes('auth/')) {
      return json({ error: 'Sua sessão expirou ou não é válida. Recarregue a página e tente novamente.' }, 401);
    }

    console.error('[UNO /api/chat] Request failed:', message);
    return json({ error: 'Ocorreu um erro interno ao processar a solicitação.' }, 500);
  }
}
