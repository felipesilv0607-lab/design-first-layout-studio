import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

import { contacts, profile, sections } from "@/content/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { ArrowUpRight } from "./ArrowUpRight";

const sectionIds = sections.map((s) => s.id);

export function SiteHeader() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-background transition-colors duration-300 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between lg:h-20">
        <a
          href="#inicio"
          className="font-display-wide text-[0.95rem] font-bold tracking-tight text-foreground"
          aria-label={`${profile.name} — voltar ao início`}
        >
          Felipe Luz<span className="text-ember">.</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex items-baseline gap-2 text-sm transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`font-mono text-[0.7rem] transition-colors ${
                        isActive ? "text-ember-bright" : "text-line-strong group-hover:text-muted-foreground"
                      }`}
                    >
                      {s.number}
                    </span>
                    <span className="link-underline">{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="type-label -mr-2 flex h-11 items-center px-2 text-foreground lg:hidden"
              aria-label="Abrir menu"
            >
              Menu
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Content
              className="fixed inset-0 z-50 flex flex-col bg-background data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
              aria-describedby={undefined}
            >
              <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>
              <div className="shell flex h-16 items-center justify-between border-b border-line">
                <span className="font-display-wide text-[0.95rem] font-bold tracking-tight">
                  Felipe Luz<span className="text-ember">.</span>
                </span>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="type-label -mr-2 flex h-11 items-center px-2 text-foreground"
                    aria-label="Fechar menu"
                  >
                    Fechar
                  </button>
                </Dialog.Close>
              </div>

              <nav aria-label="Principal (mobile)" className="shell flex-1 overflow-y-auto py-8">
                <ul className="border-t border-line">
                  {sections.map((s) => (
                    <li key={s.id} className="border-b border-line">
                      <a
                        href={`#${s.id}`}
                        onClick={() => setOpen(false)}
                        aria-current={active === s.id ? "true" : undefined}
                        className="flex items-baseline gap-4 py-5"
                      >
                        <span className="font-mono text-xs text-ember-bright">{s.number}</span>
                        <span className="type-project text-[2rem] text-foreground">{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="shell border-t border-line py-6">
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {contacts.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex min-h-11 items-center gap-1.5 text-sm text-soft hover:text-foreground"
                      >
                        {c.label}
                        <ArrowUpRight />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
