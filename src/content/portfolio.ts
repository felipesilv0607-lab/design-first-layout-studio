import agentesImg from "@/assets/projects/agentes.webp.asset.json";
import financeImg from "@/assets/projects/finance-system.webp.asset.json";
import weatherImg from "@/assets/projects/weather-app.webp.asset.json";

/**
 * Single source of truth for every fact shown on the portfolio.
 * Only verified information lives here — no invented links, levels or claims.
 */

export const profile = {
  name: "Felipe Luz Cunha",
  firstName: "Felipe",
  lastName: "Luz Cunha",
  role: "Desenvolvedor Full Stack",
  location: "Teresina e região, Piauí",
  intro:
    "Transformo ideias em aplicações web funcionais. Gosto de entender o problema, construir soluções úteis e evoluir cada projeto com atenção à experiência de quem usa.",
  availability: "Disponível para oportunidades de estágio",
  mainStack: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma"],
} as const;

export const about = {
  heading: "Tecnologia com propósito.",
  lead: "Sou estudante de Análise e Desenvolvimento de Sistemas e venho construindo minha experiência por meio de projetos práticos, do front-end ao back-end.",
  body: "Tenho interesse em desenvolver sistemas web, integrar APIs e trabalhar com dados. Também valorizo código organizado, interfaces acessíveis e soluções que resolvam necessidades reais de pessoas e negócios.",
  facts: [
    {
      label: "Formação",
      value: "Análise e Desenvolvimento de Sistemas",
      detail: "Uninassau · EAD · conclusão prevista em dez. 2028",
    },
    {
      label: "Atuação",
      value: "Desenvolvimento Full Stack",
      detail: "Do front-end ao back-end",
    },
    {
      label: "Localização",
      value: "Teresina e região",
      detail: "Piauí, Brasil",
    },
    {
      label: "Interesses",
      value: "Web, APIs e banco de dados",
      detail: "Automação e tecnologia",
    },
  ],
} as const;

export type Project = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  type: string;
  description: string;
  stack: readonly string[];
  demoUrl: string;
  codeUrl: string;
  note: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const projects: readonly Project[] = [
  {
    slug: "agentes",
    index: "P/01",
    name: "Agentes",
    kicker: "Monitoramento de agentes",
    type: "Projeto principal",
    description:
      "Central de operações com escritório virtual 3D para visualizar a equipe de agentes, acompanhar tarefas e consultar a atividade do agente selecionado.",
    stack: ["React", "TypeScript", "Vite", "Three.js"],
    demoUrl: "https://felipesilv0607-lab.github.io/agentes/",
    codeUrl: "https://github.com/felipesilv0607-lab/agentes",
    note: "Captura da demonstração publicada. A interface utiliza dados simulados.",
    image: {
      src: agentesImg.url,
      width: 2160,
      height: 1350,
      alt: "Tela de monitoramento do Agentes com o escritório virtual 3D, os agentes em suas estações e o painel do agente selecionado",
    },
  },
  {
    slug: "finance-system",
    index: "P/02",
    name: "Finance System",
    kicker: "Aplicação Full Stack",
    type: "Projeto pessoal",
    description:
      "Aplicação de gestão financeira com interface React, API em Node.js/Express e persistência de dados com PostgreSQL e Prisma.",
    stack: ["React", "Vite", "Express", "PostgreSQL", "Prisma"],
    demoUrl: "https://felipesilv0607-lab.github.io/finance-system/",
    codeUrl: "https://github.com/felipesilv0607-lab/finance-system",
    note: "Protótipo em evolução. Dados de demonstração, não dados bancários reais.",
    image: {
      src: financeImg.url,
      width: 1200,
      height: 910,
      alt: "Tela de autenticação do Finance System com campos de e-mail e senha",
    },
  },
  {
    slug: "weather-app",
    index: "P/03",
    name: "Weather App",
    kicker: "Integração de API",
    type: "Projeto de estudo",
    description:
      "Aplicação de clima com front-end web e backend Node.js/Express atuando como proxy para a API OpenWeather.",
    stack: ["JavaScript", "Node.js", "Express", "REST API"],
    demoUrl: "https://felipesilv0607-lab.github.io/weather-app/",
    codeUrl: "https://github.com/felipesilv0607-lab/weather-app",
    note: "Projeto de prática de consumo de API e comunicação entre cliente e servidor.",
    image: {
      src: weatherImg.url,
      width: 1125,
      height: 1660,
      alt: "Interface do Aplicativo do Tempo com busca por cidade e cartões de sensação, umidade, vento, máxima e mínima",
    },
  },
];

export const techGroups = [
  { id: "04.1", label: "Front-end", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vite"] },
  { id: "04.2", label: "Back-end", items: ["Node.js", "Express", "APIs REST"] },
  { id: "04.3", label: "Banco de dados", items: ["PostgreSQL", "Prisma ORM"] },
  { id: "04.4", label: "Ferramentas", items: ["Git", "GitHub", "Linux"] },
  { id: "04.5", label: "Outros conhecimentos", items: ["Fundamentos de Cloud"] },
] as const;

export const contacts = [
  {
    label: "E-mail",
    handle: "felipesilv0607@gmail.com",
    href: "mailto:felipesilv0607@gmail.com",
    copy: "felipesilv0607@gmail.com",
  },
  {
    label: "LinkedIn",
    handle: "/in/felipeluz-dev",
    href: "https://www.linkedin.com/in/felipeluz-dev",
  },
  {
    label: "GitHub",
    handle: "/felipesilv0607-lab",
    href: "https://github.com/felipesilv0607-lab",
  },
  {
    label: "WhatsApp",
    handle: "(86) 99511-7228",
    href: "https://wa.me/5586995117228",
  },
] as const;

export const githubUrl = "https://github.com/felipesilv0607-lab";
export const linkedinUrl = "https://www.linkedin.com/in/felipeluz-dev";

/** Published address used for canonical links, share previews and the sitemap. */
export const siteUrl = "https://design-first-layout-studio.lovable.app";

export const seo = {
  siteName: "Felipe Luz",
  title: "Felipe Luz | Desenvolvedor Full Stack",
  description:
    "Portfólio de Felipe Luz Cunha, desenvolvedor Full Stack em Teresina (PI). Projetos com React, TypeScript, Node.js e PostgreSQL. Disponível para estágio.",
  shareImage: { path: "/og-image.jpg", width: 1200, height: 630, alt: "Felipe Luz Cunha — Desenvolvedor Full Stack, Teresina (PI), disponível para estágio" },
} as const;

/** schema.org Person built only from facts already shown on the site. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: "Felipe Luz",
    jobTitle: profile.role,
    url: siteUrl,
    image: `${siteUrl}${seo.shareImage.path}`,
    email: "mailto:felipesilv0607@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Teresina", addressRegion: "PI", addressCountry: "BR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Uninassau" },
    knowsAbout: profile.mainStack,
    sameAs: [githubUrl, linkedinUrl],
  };
}

export const sections = [
  { id: "inicio", number: "01", label: "Início" },
  { id: "sobre", number: "02", label: "Sobre" },
  { id: "projetos", number: "03", label: "Projetos" },
  { id: "tecnologias", number: "04", label: "Tecnologias" },
  { id: "contato", number: "05", label: "Contato" },
] as const;
