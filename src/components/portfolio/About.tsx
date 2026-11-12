import { about } from "@/content/portfolio";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="shell py-20 lg:py-28">
      <div data-rule className="hairline mb-10 lg:mb-14" />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <SectionLabel number="02" label="Sobre mim" />
          </div>
        </div>

        <div className="lg:col-span-9">
          <h2 id="sobre-title" data-reveal className="type-section text-foreground">
            {about.heading}
          </h2>
          <p data-reveal className="type-lead mt-10 max-w-4xl text-foreground lg:mt-14">
            {about.lead}
          </p>
          <p data-reveal className="mt-6 max-w-2xl text-base leading-relaxed text-soft lg:text-lg">
            {about.body}
          </p>

          <dl className="mt-14 grid border-t border-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {about.facts.map((fact, i) => (
              <div
                key={fact.label}
                data-reveal
                className={`border-b border-line py-6 sm:pr-6 lg:border-b-0 lg:py-8 ${
                  i > 0 ? "lg:border-l lg:pl-6" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:pl-6 lg:border-l" : ""}`}
              >
                <dt className="type-label text-muted-foreground">{fact.label}</dt>
                <dd className="mt-4 text-base font-medium leading-snug text-foreground">{fact.value}</dd>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
