import { APICallError, convertToModelMessages, validateUIMessages, type UIMessage } from "ai";

import { createResponsesCall } from "./ai/responses.ts";
import { buildAssistantInstructions } from "./portfolio-knowledge.ts";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";

// Public endpoint on a portfolio: keep each request small so nobody can run up AI costs.
export const CHAT_LIMITS = {
  maxMessages: 24,
  maxUserChars: 800,
  maxOutputTokens: 2000,
} as const;

function jsonError(status: number, message: string) {
  return Response.json({ error: message }, { status });
}

function friendlyError(error: unknown): string {
  const status = APICallError.isInstance(error) ? error.statusCode : undefined;
  if (status === 429) return "Muitas perguntas em pouco tempo. Aguarde alguns segundos e tente de novo.";
  if (status === 402 || status === 403) return "O assistente está temporariamente indisponível. Use os contatos do portfólio para falar com o Felipe.";
  return "Não foi possível gerar a resposta agora. Tente novamente em instantes.";
}

function userText(message: UIMessage) {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export async function handlePortfolioChat(request: Request): Promise<Response> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    console.error("[portfolio-chat] LOVABLE_API_KEY is not configured");
    return jsonError(500, "O assistente não está configurado no momento.");
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError(400, "Requisição inválida.");
  }

  const rawMessages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) return jsonError(400, "Envie uma pergunta.");
  if (rawMessages.length > CHAT_LIMITS.maxMessages) {
    return jsonError(400, "Esta conversa ficou longa. Abra uma nova conversa para continuar.");
  }

  let messages: UIMessage[];
  try {
    messages = await validateUIMessages({ messages: rawMessages });
  } catch {
    return jsonError(400, "Mensagens em formato inválido.");
  }

  for (const m of messages) {
    if (m.role === "system") return jsonError(400, "Mensagens em formato inválido.");
    if (m.role === "user" && userText(m).length > CHAT_LIMITS.maxUserChars) {
      return jsonError(400, `Pergunta muito longa. Use até ${CHAT_LIMITS.maxUserChars} caracteres.`);
    }
  }

  const modelMessages = await convertToModelMessages(messages);
  const call = createResponsesCall(
    request,
    {
      baseURL: GATEWAY_URL,
      apiKey,
      model: MODEL,
      reasoningEffort: "low",
      maxOutputTokens: CHAT_LIMITS.maxOutputTokens,
    },
    modelMessages,
    buildAssistantInstructions(),
  );

  return call.withRunId(
    call.result.toUIMessageStreamResponse({
      originalMessages: messages,
      sendReasoning: true,
      onError: (error) => {
        console.error("[portfolio-chat] gateway error", error);
        return friendlyError(error);
      },
    }),
  );
}
