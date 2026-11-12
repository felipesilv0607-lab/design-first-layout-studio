import { githubUrl, profile } from "@/content/portfolio";
import { ArrowUpRight } from "./ArrowUpRight";
import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="shell flex min-h-[100svh] flex-col pt-24 pb-10 lg:pt-32 lg:pb-12"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionLabel number="01" label="Início" />
        <p className="type-label flex items-center gap-2 text-muted-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-ember" />
          {profile.availability}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center py-12 lg:py-16">
        <h1 id="inicio-title" className="type-name text-foreground">
          <span className="block">{profile.firstName}</span>
          <span className="block">
            {profile.lastName}
            <span className="text-ember">.</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-12 lg:mt-14 lg:pt-10">
          <p className="type-project text-2xl text-foreground md:col-span-5 lg:text-[2rem]">
            {profile.role}
            <span className="block pt-2 font-sans text-sm font-normal tracking-normal text-muted-foreground">
              {profile.location}
            </span>
          </p>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <p className="max-w-xl text-base leading-relaxed text-soft lg:text-lg">{profile.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#projetos"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ember-bright/90"
              >
                Explorar projetos
                <span aria-hidden="true" className="font-mono">↓</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-line-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground sm:border-transparent sm:px-0 sm:hover:border-transparent"
              >
                <span className="link-underline">GitHub</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line pt-5">
        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
          <span className="text-ember-bright">~/felipe-luz</span>
          <span className="text-line-strong"> $ </span>
          <span className="text-soft">stack --principal</span>
          <span className="mt-1 block text-muted-foreground md:mt-0 md:inline md:pl-4">
            {profile.mainStack.join(" · ")}
          </span>
        </p>
      </div>
    </section>
  );
}
