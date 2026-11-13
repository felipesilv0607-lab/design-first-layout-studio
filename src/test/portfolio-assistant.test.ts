import { describe, expect, it } from "vitest";

import { projects } from "@/content/portfolio";
import { buildAssistantInstructions } from "@/lib/portfolio-knowledge";

describe("Portfolio assistant knowledge", () => {
  const instructions = buildAssistantInstructions();

  it("includes every project with its verified demo and code links", () => {
    for (const p of projects) {
      expect(instructions).toContain(p.name);
      expect(instructions).toContain(p.demoUrl);
      expect(instructions).toContain(p.codeUrl);
    }
  });

  it("never mentions Oasis CRM", () => {
    expect(instructions.toLowerCase()).not.toContain("oasis");
  });

  it("tells the model to answer only from the portfolio", () => {
    expect(instructions).toContain("SOMENTE com base nas informações do portfólio");
  });
});
