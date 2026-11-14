import { describe, expect, it } from "vitest";

import { githubUrl, linkedinUrl, personJsonLd, seo, siteUrl } from "@/content/portfolio";

describe("Site identity", () => {
  it("uses the title chosen by the owner", () => {
    expect(seo.title).toBe("Felipe Luz | Desenvolvedor Full Stack");
  });

  it("keeps the description within the ~160 characters search engines show", () => {
    expect(seo.description.length).toBeLessThanOrEqual(160);
  });

  it("uses a 1200x630 share image served from the published address", () => {
    expect(seo.shareImage).toMatchObject({ path: "/og-image.jpg", width: 1200, height: 630 });
    expect(personJsonLd().image).toBe(`${siteUrl}/og-image.jpg`);
  });

  it("links the person profile only to the verified GitHub and LinkedIn", () => {
    expect(personJsonLd().sameAs).toEqual([
      "https://github.com/felipesilv0607-lab",
      "https://www.linkedin.com/in/felipeluz-dev",
    ]);
    expect([githubUrl, linkedinUrl]).toEqual(personJsonLd().sameAs);
  });
});
