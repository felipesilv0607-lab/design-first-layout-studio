import { profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="shell">
      <div className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#inicio"
          className="type-label inline-flex min-h-11 items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <span className="link-underline">Voltar ao topo</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
