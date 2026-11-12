import { describe, expect, it } from "vitest";

import { about, contacts, projects, techGroups } from "@/content/portfolio";

describe("Portfolio content rules", () => {
  it("shows exactly three projects with Agentes as the main one", () => {
    expect(projects.map((p) => p.name)).toEqual(["Agentes", "Finance System", "Weather App"]);
  });

  it("never includes Oasis CRM", () => {
    const text = JSON.stringify({ projects, about, techGroups });
    expect(text.toLowerCase()).not.toContain("oasis");
  });

  it("uses the verified demo links", () => {
    expect(projects.map((p) => p.demoUrl)).toEqual([
      "https://felipesilv0607-lab.github.io/agentes/",
      "https://felipesilv0607-lab.github.io/finance-system/",
      "https://felipesilv0607-lab.github.io/weather-app/",
    ]);
  });

  it("uses the verified contact destinations", () => {
    const byLabel = Object.fromEntries(contacts.map((c) => [c.label, c.href]));
    expect(byLabel).toEqual({
      "E-mail": "mailto:felipesilv0607@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/felipeluz-dev",
      GitHub: "https://github.com/felipesilv0607-lab",
      WhatsApp: "https://wa.me/5586995117228",
    });
  });

  it("organizes technologies into the five required categories", () => {
    expect(techGroups.map((g) => g.label)).toEqual([
      "Front-end",
      "Back-end",
      "Banco de dados",
      "Ferramentas",
      "Outros conhecimentos",
    ]);
  });

  it("lists technologies without mastery levels or percentages", () => {
    const items = techGroups.flatMap((g) => g.items);
    for (const item of items) expect(item).not.toMatch(/%|\d+\s*\/\s*\d+|básico|intermediário|avançado/i);
  });
});
