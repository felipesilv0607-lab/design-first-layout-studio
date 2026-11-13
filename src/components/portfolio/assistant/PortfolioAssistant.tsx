import * as Dialog from "@radix-ui/react-dialog";
import type { UIMessage } from "ai";
import { useCallback, useState } from "react";

import { AssistantMark } from "./AssistantMark";
import { AssistantThread } from "./AssistantThread";

type Thread = { id: string; messages: UIMessage[]; createdAt: number };

// Conversations live only in memory: they are intentionally lost on reload.
function newThread(): Thread {
  return { id: crypto.randomUUID(), messages: [], createdAt: Date.now() };
}

function threadTitle(thread: Thread): string {
  const first = thread.messages.find((m) => m.role === "user");
  const text = first?.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join(" ")
    .trim();
  if (!text) return "Nova conversa";
  return text.length > 52 ? `${text.slice(0, 52)}…` : text;
}

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const active = threads.find((t) => t.id === activeId) ?? null;

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next && threads.length === 0) {
      const t = newThread();
      setThreads([t]);
      setActiveId(t.id);
    }
  };

  const startThread = () => {
    // Reuse an untouched empty conversation instead of stacking blank ones.
    const empty = threads.find((t) => t.messages.length === 0);
    if (empty) {
      setActiveId(empty.id);
    } else {
      const t = newThread();
      setThreads((prev) => [t, ...prev]);
      setActiveId(t.id);
    }
    setShowList(false);
  };

  const handleMessagesChange = useCallback((threadId: string, messages: UIMessage[]) => {
    setThreads((prev) => prev.map((t) => (t.id === threadId ? { ...t, messages } : t)));
  }, []);

  const conversationCount = threads.filter((t) => t.messages.length > 0).length;

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="fixed right-4 bottom-4 z-30 flex h-12 items-center gap-3 rounded-sm border border-line-strong bg-surface pr-4 pl-1.5 text-sm font-medium text-foreground shadow-[0_12px_32px_-12px_var(--background)] transition-colors hover:border-ember sm:right-6 sm:bottom-6"
          aria-label="Abrir assistente: pergunte sobre os projetos do Felipe"
        >
          <AssistantMark />
          <span className="hidden sm:inline">Pergunte sobre os projetos</span>
          <span className="sm:hidden">Perguntar</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-full flex-col border-l border-line bg-background sm:w-[440px] data-[state=open]:animate-in data-[state=open]:slide-in-from-right-8 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
          aria-describedby="assistente-descricao"
        >
          <header className="flex items-center gap-3 border-b border-line px-5 py-4">
            <AssistantMark />
            <div className="min-w-0 flex-1">
              <Dialog.Title className="truncate text-sm font-semibold text-foreground">
                Assistente do portfólio
              </Dialog.Title>
              <Dialog.Description id="assistente-descricao" className="truncate text-xs text-muted-foreground">
                Perguntas sobre projetos, tecnologias e formação
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="type-label -mr-2 flex h-11 items-center px-2 text-muted-foreground hover:text-foreground"
                aria-label="Fechar assistente"
              >
                Fechar
              </button>
            </Dialog.Close>
          </header>

          <div className="flex items-center justify-between gap-2 border-b border-line px-5">
            <button
              type="button"
              onClick={() => setShowList((v) => !v)}
              aria-expanded={showList}
              aria-controls="assistente-conversas"
              className="type-label flex h-11 items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              Conversas
              <span className="text-ember-bright">({String(conversationCount).padStart(2, "0")})</span>
              <span aria-hidden="true">{showList ? "↑" : "↓"}</span>
            </button>
            <button
              type="button"
              onClick={startThread}
              className="type-label flex h-11 items-center gap-2 text-foreground hover:text-ember-bright"
            >
              <span aria-hidden="true">+</span> Nova conversa
            </button>
          </div>

          {showList && (
            <nav id="assistente-conversas" aria-label="Conversas" className="max-h-[45%] overflow-y-auto border-b border-line">
              <ul>
                {threads.map((t) => (
                  <li key={t.id} className="border-b border-line last:border-b-0">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveId(t.id);
                        setShowList(false);
                      }}
                      aria-current={t.id === activeId ? "true" : undefined}
                      className={`flex min-h-12 w-full items-center gap-3 px-5 py-3 text-left text-sm transition-colors ${
                        t.id === activeId ? "bg-surface text-foreground" : "text-soft hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`size-1.5 shrink-0 rounded-full ${t.id === activeId ? "bg-ember" : "bg-line-strong"}`}
                      />
                      <span className="truncate">{threadTitle(t)}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="px-5 py-3 text-xs text-muted-foreground">
                As conversas ficam apenas nesta aba e somem ao recarregar a página.
              </p>
            </nav>
          )}

          {active && (
            <AssistantThread
              key={active.id}
              threadId={active.id}
              initialMessages={active.messages}
              onMessagesChange={handleMessagesChange}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
