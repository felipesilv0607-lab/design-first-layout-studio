import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Reasoning, ReasoningContent, ReasoningTrigger } from "@/components/ai-elements/reasoning";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { AssistantMark } from "./AssistantMark";

export const MAX_QUESTION_CHARS = 800;
// Server accepts up to 24 messages; leave room for the next question + answer.
const MAX_THREAD_MESSAGES = 22;

const SUGGESTIONS = [
  "Qual é o principal projeto do Felipe?",
  "Quais tecnologias foram usadas no Finance System?",
  "Como funciona o Weather App?",
  "Qual é a formação e a disponibilidade dele?",
];

function readableError(error: Error): string {
  try {
    const parsed = JSON.parse(error.message) as { error?: string };
    if (parsed.error) return parsed.error;
  } catch {
    /* not JSON — fall through */
  }
  if (/failed to fetch|network/i.test(error.message)) {
    return "Sem conexão com o assistente. Verifique sua internet e tente novamente.";
  }
  return error.message || "Não foi possível gerar a resposta agora. Tente novamente em instantes.";
}

type AssistantThreadProps = {
  threadId: string;
  initialMessages: UIMessage[];
  onMessagesChange: (threadId: string, messages: UIMessage[]) => void;
};

export function AssistantThread({ threadId, initialMessages, onMessagesChange }: AssistantThreadProps) {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, stop, error } = useChat({
    id: threadId,
    messages: initialMessages,
    transport,
    throttle: 40,
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const busy = status === "submitted" || status === "streaming";
  const threadFull = messages.length >= MAX_THREAD_MESSAGES;

  // Keep the in-memory thread list in sync so switching conversations keeps their history.
  useEffect(() => {
    onMessagesChange(threadId, messages);
  }, [threadId, messages, onMessagesChange]);

  // Keep the composer focused during normal use.
  useEffect(() => {
    if (!busy) textareaRef.current?.focus();
  }, [busy, threadId]);

  const ask = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy || threadFull) return;
    void sendMessage({ text: trimmed.slice(0, MAX_QUESTION_CHARS) });
  };

  const handleSubmit = (message: PromptInputMessage) => ask(message.text);

  const last = messages.at(-1);
  const waitingForText =
    status === "submitted" ||
    (status === "streaming" &&
      last?.role === "assistant" &&
      !last.parts.some((p) => p.type === "text" && p.text.length > 0));

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Conversation className="min-h-0">
        <ConversationContent className="gap-7 px-5 py-6">
          {messages.length === 0 && (
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-start gap-3">
                <AssistantMark />
                <div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Olá! Posso responder perguntas sobre os projetos, as tecnologias, a formação e a
                    disponibilidade do Felipe.
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Respostas geradas por IA usando apenas as informações deste portfólio.
                  </p>
                </div>
              </div>
              <div>
                <p className="type-label mb-3 text-muted-foreground">Sugestões</p>
                <ul className="flex flex-col border-t border-line">
                  {SUGGESTIONS.map((s) => (
                    <li key={s} className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => ask(s)}
                        className="group flex min-h-11 w-full items-center justify-between gap-3 py-3 text-left text-sm text-soft transition-colors hover:text-foreground"
                      >
                        {s}
                        <span aria-hidden="true" className="font-mono text-xs text-line-strong group-hover:text-ember-bright">
                          →
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {messages.map((message, index) => {
            const isLastAssistant = index === messages.length - 1 && message.role === "assistant";
            return (
              <Message from={message.role} key={message.id}>
                <MessageContent className="group-[.is-user]:rounded-sm group-[.is-user]:border group-[.is-user]:border-line-strong group-[.is-user]:bg-surface-raised group-[.is-user]:text-foreground">
                  {message.parts.map((part, i) => {
                    if (part.type === "text") {
                      return message.role === "assistant" ? (
                        <MessageResponse
                          key={i}
                          isAnimating={isLastAssistant && status === "streaming"}
                          className="leading-relaxed text-foreground [&_a]:text-ember-bright [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold"
                        >
                          {part.text}
                        </MessageResponse>
                      ) : (
                        <p key={i} className="whitespace-pre-wrap leading-relaxed">
                          {part.text}
                        </p>
                      );
                    }
                    if (part.type === "reasoning" && part.text.trim()) {
                      return (
                        <Reasoning
                          key={i}
                          isStreaming={isLastAssistant && status === "streaming" && part.state === "streaming"}
                          className="mb-0 text-muted-foreground"
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            );
          })}

          {waitingForText && (
            <div className="flex items-center gap-3" aria-live="polite">
              <Shimmer className="text-sm">Consultando o portfólio…</Shimmer>
            </div>
          )}

          {error && !busy && (
            <p role="alert" className="border-l-2 border-ember pl-3 text-sm leading-relaxed text-soft">
              {readableError(error)}
            </p>
          )}

          {threadFull && (
            <p className="text-xs leading-relaxed text-muted-foreground">
              Esta conversa atingiu o limite de mensagens. Abra uma nova conversa para continuar.
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton className="border-line-strong bg-surface text-foreground hover:bg-surface-raised" />
      </Conversation>

      <div className="border-t border-line px-4 pt-3 pb-4">
        <PromptInput onSubmit={handleSubmit} className="rounded-sm border-line-strong bg-surface">
          <PromptInputTextarea
            ref={textareaRef}
            placeholder="Pergunte sobre os projetos do Felipe…"
            maxLength={MAX_QUESTION_CHARS}
            disabled={threadFull}
            aria-label="Sua pergunta"
            className="min-h-14 text-sm text-foreground placeholder:text-muted-foreground"
          />
          <PromptInputFooter className="justify-between">
            <span className="pl-1 font-mono text-[0.65rem] text-muted-foreground">Enter envia · Shift+Enter quebra linha</span>
            <PromptInputSubmit
              status={status}
              onStop={stop}
              disabled={threadFull}
              aria-label={busy ? "Parar resposta" : "Enviar pergunta"}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}
