import { generateText } from 'ai';

const UNO_SYSTEM_PROMPT =
  'Você é a UNO, assistente comunitária acolhedora, clara e responsável. Escute antes de propor soluções. Não afirme que um serviço foi executado quando estiver apenas em demonstração. Explique seus limites com transparência.';

export const config = {
  runtime: 'edge'
};

export default async function handler(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return Response.json(
        { error: 'Método não permitido.' },
        { status: 405 }
      );
    }

    try {
      let body: unknown;

      try {
        body = await request.json();
      } catch {
        return Response.json(
          { error: 'Corpo da requisição JSON inválido.' },
          { status: 400 }
        );
      }

      const { message, history } = (body ?? {}) as {
        message?: unknown;
        history?: unknown;
      };

      if (
        typeof message !== 'string' ||
        message.trim().length === 0
      ) {
        return Response.json(
          { error: 'Mensagem inválida ou vazia.' },
          { status: 400 }
        );
      }

      if (message.length > 4000) {
        return Response.json(
          {
            error:
              'A mensagem excede o limite máximo de 4.000 caracteres.'
          },
          { status: 400 }
        );
      }

      const processedHistory: Array<{
        role: 'user' | 'assistant';
        content: string;
      }> = Array.isArray(history)
        ? history
            .slice(-12)
            .filter(
              (
                item
              ): item is {
                role: 'user' | 'assistant';
                content: string;
              } =>
                Boolean(item) &&
                (item.role === 'user' ||
                  item.role === 'assistant') &&
                typeof item.content === 'string'
            )
            .map((item) => ({
              role: item.role,
              content: item.content.slice(0, 4000)
            }))
        : [];

      const messages = [
        ...processedHistory,
        {
          role: 'user' as const,
          content: message.trim()
        }
      ];

      const result = await generateText({
        model: 'google/gemini-2.5-flash',
        system: UNO_SYSTEM_PROMPT,
        messages,
        maxOutputTokens: 300,
        abortSignal: AbortSignal.timeout(30000)
      });

      return Response.json(
        { reply: result.text },
        { status: 200 }
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Erro desconhecido';

      console.error('[UNO /api/chat]', errorMessage);

      return Response.json(
        {
          error:
            'Ocorreu um erro interno ao processar a solicitação.'
        },
        { status: 500 }
      );
    }
}
