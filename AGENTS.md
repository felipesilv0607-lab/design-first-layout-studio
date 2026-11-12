<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All portfolio facts (profile, projects, links, technologies, contacts) live in `src/content/portfolio.ts`; components only render them, so content edits never touch layout code.
- The site is one long page at `/` with five anchored sections (`#inicio`, `#sobre`, `#projetos`, `#tecnologias`, `#contato`), because the owner explicitly asked for a single scrolling portfolio.
- Scroll reveals use the native IntersectionObserver hook in `src/hooks/use-reveal.ts` plus `[data-reveal]`/`[data-rule]` attributes, not GSAP, to avoid an extra dependency; elements visible on load are never hidden and nothing animates under `prefers-reduced-motion`.
- Project screenshots are real browser captures of the published demos stored as Lovable asset pointers in `src/assets/projects/`; never replace them with illustrations.
- Colors, fonts and type scales are tokens/utilities in `src/styles.css` (e.g. `type-name`, `type-section`, `type-label`, `text-ember-bright`); components must not use raw color values.
- `src/test/portfolio-content.test.ts` locks the content rules (project order, verified URLs, tech categories, no Oasis CRM, no skill levels); update it when those rules change.
