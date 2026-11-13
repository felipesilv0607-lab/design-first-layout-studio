import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { profile, seo } from "../content/portfolio";

function StatusPage({ code, title, text, children }: { code: string; title: string; text: string; children: ReactNode }) {
  return (
    <main className="shell flex min-h-screen flex-col justify-center py-16">
      <p className="type-label flex items-center gap-3 text-muted-foreground">
        <span className="text-ember-bright">{code}</span>
        <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
        <span>Felipe Luz</span>
      </p>
      <h1 className="type-section mt-8 max-w-3xl text-foreground">
        {title}
        <span className="text-ember">.</span>
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-soft">{text}</p>
      <div className="mt-10 flex flex-wrap items-center gap-6">{children}</div>
    </main>
  );
}

const primaryAction =
  "inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ember-bright/90";
const secondaryAction = "inline-flex h-12 items-center text-sm font-medium text-soft hover:text-foreground";

function NotFoundComponent() {
  return (
    <StatusPage code="404" title="Página não encontrada" text="O endereço acessado não existe ou foi movido.">
      <Link to="/" className={primaryAction}>
        Voltar ao início
      </Link>
    </StatusPage>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <StatusPage
      code="Erro"
      title="Não foi possível carregar a página"
      text="Ocorreu um erro inesperado. Tente novamente ou volte ao início."
    >
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className={primaryAction}
      >
        Tentar novamente
      </button>
      <a href="/" className={secondaryAction}>
        <span className="link-underline">Voltar ao início</span>
      </a>
    </StatusPage>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "author", content: profile.name },
      { name: "theme-color", content: "#121110" },
      { name: "color-scheme", content: "dark" },
      { name: "application-name", content: seo.siteName },
      { name: "apple-mobile-web-app-title", content: seo.siteName },
      { property: "og:site_name", content: seo.siteName },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
