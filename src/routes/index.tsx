import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { PortfolioAssistant } from "@/components/portfolio/assistant/PortfolioAssistant";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Technologies } from "@/components/portfolio/Technologies";
import { personJsonLd, seo, siteUrl } from "@/content/portfolio";
import { useReveal } from "@/hooks/use-reveal";

const shareImage = `${siteUrl}${seo.shareImage.path}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${siteUrl}/` },
      { property: "og:image", content: shareImage },
      { property: "og:image:width", content: String(seo.shareImage.width) },
      { property: "og:image:height", content: String(seo.shareImage.height) },
      { property: "og:image:alt", content: seo.shareImage.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: shareImage },
      { name: "twitter:image:alt", content: seo.shareImage.alt },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personJsonLd()) }],
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
