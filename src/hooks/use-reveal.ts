import { useEffect } from "react";

/**
 * Progressive reveal: elements marked with [data-reveal] or [data-rule] that start
 * below the fold are hidden, then shown once when they scroll into view.
 * Elements already visible on load are never hidden (no flash), and nothing
 * happens when the user prefers reduced motion.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-rule]"));
    const viewportH = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.removeAttribute("data-reveal-state");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const el of nodes) {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.92) continue;
      el.setAttribute("data-reveal-state", "pending");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of nodes) el.removeAttribute("data-reveal-state");
    };
  }, []);
}
