import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { getAdminServices, verifyFirebaseRequest } from '../server/firebaseAdmin';

const UNO_SYSTEM_PROMPT =
  'Você é a UNO, assistente comunitária acolhedora, clara e responsável. Escute antes de propor soluções. Não afirme que um serviço foi executado quando estiver apenas em demonstração. Explique seus limites com transparência. Proteja dados pessoais e não solicite informações sensíveis desnecessárias. Quando conversar com visitantes, limite-se a informações públicas da UNO e nunca revele dados, documentos ou operações internas.';

async function consumeVisitorQuota(uid: string): Promise<boolean> {
  const { firestore } = getAdminServices();
  const ref = firestore.collection('uno_public_chat_limits').doc(uid);
  const now = Date.now();
  const minuteBucket = Math.floor(now / 60_000);
  const dayBucket = Math.floor(now / 86_400_000);

  return firestore.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    const current = snapshot.exists ? snapshot.data() || {} : {};
    const sameMinute = current.minuteBucket === minuteBucket;
    const sameDay = current.dayBucket === dayBucket;
    const minuteCount = sameMinute ? Number(current.minuteCount || 0) : 0;
    const dayCount = sameDay ? Number(current.dayCount || 0) : 0;

    if (minuteCount >= 5 || dayCount >= 30) return false;

    transaction.set(ref, {
      minuteBucket,
      minuteCount: minuteCount + 1,
      dayBucket,
      dayCount: dayCount + 1,
      expiresAt: new Date(now + 7 * 86_400_000),
      updatedAt: new Date(now)
    });
    return true;
  });
}

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
    const isVisitor = typeof decoded.uno_idu !== 'string' || !decoded.uno_idu;

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
    if (message.length > (isVisitor ? 2000 : 4000)) {
      return json({ error: isVisitor ? 'Para visitantes, a mensagem pode ter até 2.000 caracteres.' : 'A mensagem excede o limite máximo de 4.000 caracteres.' }, 400);
    }

    if (isVisitor && !(await consumeVisitorQuota(decoded.uid))) {
      return json({ error: 'O limite de mensagens para visitantes foi atingido. Aguarde um pouco ou entre na sua conta.' }, 429);
    }

    const processedHistory = Array.isArray(history)
      ? history.slice(isVisitor ? -6 : -12).filter((item): item is {
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
        identity: isVisitor ? 'visitor' : 'verified'
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
