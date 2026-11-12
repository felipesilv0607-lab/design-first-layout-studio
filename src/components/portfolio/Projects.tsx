import { projects, type Project } from "@/content/portfolio";
import { ArrowUpRight } from "./ArrowUpRight";
import { SectionLabel } from "./SectionLabel";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      <li>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ember-bright"
          aria-label={`Ver demonstração do ${project.name} (abre em nova aba)`}
        >
          <span className="link-underline">Ver demonstração</span>
          <ArrowUpRight />
        </a>
      </li>
      <li>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-soft hover:text-foreground"
          aria-label={`Ver código-fonte do ${project.name} no GitHub (abre em nova aba)`}
        >
          <span className="link-underline">Código-fonte</span>
          <ArrowUpRight />
        </a>
      </li>
    </ul>
  );
}

function StackList({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-soft" aria-label="Tecnologias utilizadas">
      {stack.map((t, i) => (
        <li key={t} className="flex items-center gap-3">
          {t}
          {i < stack.length - 1 && (
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function ProjectFrame({
  project,
  priority = false,
  className = "",
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className={`group block overflow-hidden rounded-sm border border-line bg-surface ${className}`}
    >
      <img
        src={project.image.src}
        alt=""
        width={project.image.width}
        height={project.image.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-contain transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.012]"
      />
    </a>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className="mt-14 lg:mt-20">
      <figure data-reveal>
        <ProjectFrame project={project} className="p-2 sm:p-3" />
        <figcaption className="sr-only">{project.image.alt}</figcaption>
      </figure>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="type-label flex gap-3 text-muted-foreground">
            <span className="text-ember-bright">{project.index}</span>
            {project.type}
          </p>
          <h3 id={`${project.slug}-title`} className="type-project mt-4 text-5xl text-foreground lg:text-7xl">
            {project.name}
          </h3>
        </div>
        <div className="lg:col-span-4">
          <p className="type-label text-muted-foreground">{project.kicker}</p>
          <p className="mt-4 text-base leading-relaxed text-soft">{project.description}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.note}</p>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-3">
          <div>
            <p className="type-label mb-3 text-muted-foreground">Tecnologias</p>
            <StackList stack={project.stack} />
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function SecondaryProject({ project, className = "" }: { project: Project; className?: string }) {
  // Portrait screenshots get a fixed 4:5 frame so the full interface stays visible without dominating the row.
  const isPortrait = project.image.height > project.image.width;
  return (
    <article aria-labelledby={`${project.slug}-title`} data-reveal className={className}>
      <figure>
        <ProjectFrame project={project} className={`p-2 sm:p-3 ${isPortrait ? "aspect-[4/5]" : ""}`} />
        <figcaption className="sr-only">{project.image.alt}</figcaption>
      </figure>
      <div className="mt-6 border-t border-line pt-6">
        <p className="type-label flex gap-3 text-muted-foreground">
          <span className="text-ember-bright">{project.index}</span>
          {project.kicker}
        </p>
        <h3 id={`${project.slug}-title`} className="type-project mt-4 text-3xl text-foreground lg:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-soft">{project.description}</p>
        <div className="mt-5">
          <StackList stack={project.stack} />
        </div>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{project.note}</p>
        <div className="mt-4">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, second, third] = projects;

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="shell py-20 lg:py-28">
      <div data-rule className="hairline mb-10 lg:mb-14" />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel number="03" label={`Projetos (${String(projects.length).padStart(2, "0")})`} />
          <h2 id="projetos-title" data-reveal className="type-section mt-8 text-foreground">
            Trabalhos selecionados.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:pb-2">
          Projetos próprios que aplicam conhecimentos de desenvolvimento e resolvem problemas concretos.
        </p>
      </div>

      {featured && <FeaturedProject project={featured} />}

      <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-8">
        {second && <SecondaryProject project={second} className="lg:col-span-7" />}
        {third && <SecondaryProject project={third} className="lg:col-span-5 lg:mt-32" />}
      </div>
    </section>
  );
}
