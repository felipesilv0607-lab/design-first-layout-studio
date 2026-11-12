import { techGroups } from "@/content/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Technologies() {
  return (
    <section id="tecnologias" aria-labelledby="tecnologias-title" className="shell py-20 lg:py-28">
      <div data-rule className="hairline mb-10 lg:mb-14" />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel number="04" label="Tecnologias" />
          <h2 id="tecnologias-title" data-reveal className="type-section mt-8 text-foreground">
            Tecnologias que utilizo.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:pb-2">
          Stack aplicada nos projetos e em constante aprofundamento.
        </p>
      </div>

      <div className="mt-14 grid lg:mt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-9 lg:col-start-4">
          <ul className="border-t border-line">
            {techGroups.map((group) => (
              <li
                key={group.id}
                data-reveal
                className="group grid gap-3 border-b border-line py-6 transition-colors sm:grid-cols-12 sm:gap-6 lg:py-8"
              >
                <div className="flex items-baseline gap-3 sm:col-span-4">
                  <span className="font-mono text-xs text-line-strong transition-colors group-hover:text-ember-bright">
                    {group.id}
                  </span>
                  <h3 className="type-label text-muted-foreground">{group.label}</h3>
                </div>
                <ul className="flex flex-wrap gap-x-2 gap-y-1 sm:col-span-8">
                  {group.items.map((item, i) => (
                    <li key={item} className="type-project text-xl text-foreground lg:text-2xl">
                      {item}
                      {i < group.items.length - 1 && (
                        <span aria-hidden="true" className="pl-2 font-sans font-light text-line-strong">
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
