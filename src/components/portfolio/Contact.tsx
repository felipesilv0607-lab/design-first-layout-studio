import { useState } from "react";

import { contacts, profile } from "@/content/portfolio";
import { ArrowUpRight } from "./ArrowUpRight";
import { SectionLabel } from "./SectionLabel";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="type-label min-h-11 shrink-0 px-2 text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Copiar endereço de e-mail"
    >
      <span aria-live="polite">{copied ? "Copiado" : "Copiar"}</span>
    </button>
  );
}

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="shell py-20 lg:py-28">
      <div data-rule className="hairline mb-10 lg:mb-14" />
      <SectionLabel number="05" label="Contato" />

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h2 id="contato-title" data-reveal className="type-section text-foreground lg:col-span-8">
          Vamos conversar sobre uma oportunidade de estágio<span className="text-ember">?</span>
        </h2>
        <div className="lg:col-span-4">
          <p className="type-label flex items-center gap-2 text-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-ember" />
            {profile.availability}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Busco estágio em desenvolvimento de software, especialmente Web e Full Stack. Entre em contato pelo
            canal de sua preferência.
          </p>
        </div>
      </div>

      <ul className="mt-14 border-t border-line lg:mt-20">
        {contacts.map((c) => {
          const external = c.href.startsWith("http");
          return (
            <li key={c.label} data-reveal className="group flex items-center border-b border-line">
              <a
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="grid min-h-16 flex-1 grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 py-5 sm:grid-cols-[10rem_1fr_auto] lg:min-h-20 lg:grid-cols-[14rem_1fr_auto]"
              >
                <span className="type-label col-start-1 row-start-1 text-muted-foreground">{c.label}</span>
                <span className="col-start-1 row-start-2 min-w-0 break-words text-lg text-foreground transition-colors group-hover:text-ember-bright sm:col-start-2 sm:row-start-1 lg:text-2xl">
                  {c.handle}
                </span>
                <ArrowUpRight className="col-start-2 row-span-2 row-start-1 text-muted-foreground sm:col-start-3 sm:row-span-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-bright" />
              </a>
              {"copy" in c && <CopyButton value={c.copy} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
