import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { PortfolioAssistant } from "@/components/portfolio/assistant/PortfolioAssistant";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Technologies } from "@/components/portfolio/Technologies";
import { useReveal } from "@/hooks/use-reveal";

const title = "Felipe Luz Cunha — Desenvolvedor Full Stack";
const description =
  "Portfólio de Felipe Luz Cunha, desenvolvedor Full Stack em Teresina (PI). Projetos com React, TypeScript, Node.js, Express, PostgreSQL e Prisma. Disponível para estágio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <SiteFooter />
      <PortfolioAssistant />
    </>
  );
}
