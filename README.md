# Abdullah Al Mamun Apu – Developer Portfolio

A modern, single-page portfolio built with **Vite + React + TypeScript + Tailwind CSS**. Designed for recruiters and hiring managers: fast, accessible, mobile-first, and content structured for quick scanning.

## 🔍 Features
- Responsive layout with semantic sections (About, Summary, Skills, Projects, Experience, Contact)
- Dark / Light mode (persists via localStorage, respects system preference)
- Centralized content in `src/data.ts` for easy updates
- Technology logos via `@icons-pack/react-simple-icons` with graceful fallback mapping
- Accessible focus states, skip link, aria-live feedback in contact form
- SEO meta tags + JSON-LD Person schema (`index.html`)
- Open Graph + Twitter large image (`/public/og-image.svg`)
- Reusable component primitives (`Section`, `ProjectCard`, `ProjectsGrid` (lazy), `Timeline`, `DarkModeToggle`, `Header`, `Footer`, `ContactForm`)
- Code splitting: projects grid lazy-loaded to trim initial bundle
- CI workflow (`.github/workflows/ci.yml`) – install, lint, build, artifact upload
- Radial background + subtle glass cards + gradient headline
- Radial background + subtle glass cards + gradient headline
- Honeypot + mailto-based contact form (no backend required)

## 🛠 Tech Stack
Frontend: React, TypeScript, Vite, Tailwind CSS
Tooling: ESLint, GitHub Actions CI
Deployment-ready: Static build (Netlify, Vercel, GitHub Pages, Cloudflare Pages)

## 🖼 Icons
Icons dynamically map skill names → Simple Icons. Adjust mapping in `src/components/TechIcon.tsx` (NAME_MAP). Unknown names show a fallback.

## 📁 Structure
```
src/
  components/   # UI building blocks
  data.ts       # Portfolio content (profile, skills, projects, experience)
  App.tsx       # Page composition
  index.css     # Tailwind layers + custom component classes
```

## 🚀 Quick Start
```bash
npm install
npm run dev
```
Then open http://localhost:5173

## 🧱 Build
```bash
npm run build
npm run preview
```

## ✏️ Content Editing
Update data in `src/data.ts`:
- `profile` – name, role, links, summary
- `skills` – grouped categories
- `projects` – title, description, tech, links
- `experience` – timeline entries (reverse chronological)
- `contactCTA` – headline + links

## 🌗 Theming
- Initial theme applied before paint via inline script in `index.html`
- User toggle updates `localStorage.theme`
- Tailwind `dark` class strategy

## 🧪 Future Enhancements (optional)
- Replace mailto form with API (Serverless / Formspree / Resend)
- Real project repo + live demo links & metrics
- Additional schema.org (CreativeWork for projects)
- Analytics (Plausible / Umami – privacy friendly)
- Framer Motion entrance animations (respect reduced motion)
- Lighthouse performance budget & bundle analyzer
- Internationalization (i18n) scaffold
 - Option to toggle decorative background intensity


## ✅ Accessibility & UX Considerations
- Logical heading hierarchy
- Sufficient color contrast (custom primary palette)
- Focus-visible outlines retained (`.focus-ring` utility)
- Skip to content link before root
- aria-live polite region for form status
- Motion kept subtle / minimal by default

## 🖼 Open Graph Image
Edit `/public/og-image.svg` (vector, fast to load). Update meta tags in `index.html` if you change the filename.

## 📄 Resume
Replace `/public/resume.pdf` with your real resume. The Summary section button links to this file.

## 🔁 CI
`ci.yml` runs on pushes & PRs to `main`: checkout → setup node 20 → `npm ci` → optional lint → `npm run build` → upload `dist` artifact.

## ✉️ Contact Form
Progressive enhancement:
1. If you configure an endpoint in `VITE_CONTACT_ENDPOINT`, the form sends a JSON POST: `{ name, email, message, source: 'portfolio' }`.
2. If no endpoint (or the request fails), it gracefully falls back to opening the user's mail client (mailto) so messages are never blocked.

Anti-spam: hidden honeypot field (`bot-field`).

### Configure Direct Submission
Create a `.env` (or set in hosting dashboard):
```
VITE_CONTACT_ENDPOINT=https://your-serverless-endpoint.example.com/contact
```
Restart dev server after adding. The UI will show different status labels ("Sending…" vs. "Opening Mail…"). A small tip text appears when no endpoint is configured.

### Expected Backend Contract
Endpoint should:
- Accept `POST application/json`
- Validate minimal fields (name/email/message)
- Send email (e.g. via Resend, SES, SendGrid) or store message
- Return `2xx` on success (optionally JSON `{ ok: true }`)
- Return non-2xx for validation errors

Example (Express / Serverless style pseudocode):
```js
export async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  // send email via provider...
  return res.status(200).json({ ok: true });
}
```

For zero-config hosted solutions you can point `VITE_CONTACT_ENDPOINT` to a service like Formspree / Basin / GetForm that matches this contract.

## 🗂 Code Splitting Detail
`ProjectsGrid` lazy-loaded: first paint prioritizes hero/profile; project grid JS bundled separately and loaded when scrolled into view (after initial hydration).

## � License
MIT – customize freely. Attribution appreciated but not required.

## 👋 Contact
- Email: almamun.codes@gmail.com
- LinkedIn: https://linkedin.com/in/almamun-in
- Portfolio: https://mamunapu.tech

---
Built to highlight real-world full-stack and frontend capability with clarity and performance.
