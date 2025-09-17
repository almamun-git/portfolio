# AI Assistant Instructions (Project: Developer Portfolio)

Purpose: Single-page personal portfolio (React + Vite + TypeScript + Tailwind) optimized for fast, accessible, content-centric presentation. Keep changes lightweight, accessible, and content-driven.

## Architecture & Data Flow
- All human-editable content lives in `src/data.ts` (profile, skills, projects, experience, contactCTA). Components import from there; do NOT hardcode content in multiple places.
- `App.tsx` composes page sections using reusable primitives (`Section`, `ProjectCard`, `ProjectsGrid`, `Timeline`, `ContactForm`, `Header`, `Footer`). Maintain this compositional pattern—avoid monolithic changes inside `App`.
- Projects grid is lazy-loaded (`React.lazy` + `Suspense`) to reduce initial bundle; preserve lazy import when modifying or expanding project display.
- Theming: dark mode controlled by `DarkModeToggle` + a pre-paint script in `index.html` + Tailwind `dark` class on `<html>`. Any theme-dependent additions should rely on utility classes, not inline style toggles.
- Contact form: progressive enhancement. Primary path = POST to `VITE_CONTACT_ENDPOINT` (if defined). Fallback path = `mailto:` navigation. Preserve honeypot (`bot-field`) + status states + aria-live messaging.

## Conventions & Patterns
- Use small, focused functional components with clear prop shapes (see `ProjectCard`, `Section`, `Timeline`). Derive UI from data; keep side effects minimal.
- Icons: `TechIcon` maps human skill names → Simple Icons via `NAME_MAP`. When adding a new skill/project tech, update mapping if a matching icon exists; otherwise fallback stays `SiCoder`.
- Tailwind: Prefer semantic utility clusters on elements; shared styles captured via custom classes like `card`, `tag`, `container-section`, defined in `index.css` / `App.css`. Reuse existing utilities before adding new custom CSS.
- Accessibility: Maintain `aria-live` regions, `sr-only` text, focus styles (`focus-visible`, `.focus-ring`), and logical heading hierarchy (`h1` only in About area, `h2` for section titles, `h3` inside cards/lists).
- Ordering: Experience timeline reverses items (`[...items].reverse()`) for most recent first while numbering descending—preserve this logic if altering timeline.
- Environment variables: Only exposed via `import.meta.env`. New runtime config must be prefixed `VITE_`.

## Workflows
- Dev: `npm run dev` (Vite dev server on :5173). Build: `npm run build` (Type-check + production build). Preview: `npm run preview`.
- Lint: `npm run lint` (ESLint flat config in `eslint.config.js`). Run before committing structural changes.
- CI (GitHub Actions): Expects successful install, lint, and build; avoid introducing Node features beyond Node 20 compatibility.

## Typical Extension Tasks (Examples)
- Add a project: update `projects` array in `src/data.ts`; ensure `title` unique (used as React key); optional `highlight` string shows as a `tag`.
- Add a skill category: append to `skills` array; if new item needs icon, update `NAME_MAP` in `TechIcon.tsx`.
- Add analytics or endpoint config: introduce `VITE_*` variable, document in README, reference with `import.meta.env`.
- Modify contact flow: keep existing fallback; wrap new async logic in try/catch and set `status` appropriately.

## Quality & Constraints
- Avoid adding heavy dependencies—site is static and performance-oriented.
- Keep bundle-splitting minimal but preserve existing lazy boundary around projects.
- Maintain consistent TypeScript interfaces in `data.ts` if extending shapes (update usages & props accordingly).
- Prefer declarative data transformations over imperative loops; follow existing style (e.g., mapping arrays directly in JSX).

## When Unsure
Favor: Extend `data.ts` + small reusable components > large conditional blocks. Keep accessibility + performance (no layout shifts, minimal blocking scripts) in mind.

(End of instructions – update this file if repo conventions evolve.)
