# Harry Ahmad — Portfolio

A single-page portfolio for a Senior Machine Learning Engineer, built with the
Next.js App Router. Warm editorial design, an ambient neural-network signature
motif, scroll-driven motion, and a friction-free contact flow — all driven from
a small typed data layer so the content is easy to keep current.

## Highlights

- **Distinctive ML signature** — an interactive neural-constellation canvas in
  the hero (drifting nodes wired by synapses that light up around the cursor).
- **Professional motion** — orchestrated hero entrance, scroll-reveal sections,
  count-up stats, a magnetic primary CTA, and spring hover states, all built on
  [`motion`](https://motion.dev). Every animation respects
  `prefers-reduced-motion`.
- **Light / dark themes** — system-aware via `next-themes`, with a theme toggle.
- **Animated contact form** — client-side validation with inline errors that
  composes a prefilled message and opens the visitor's mail client (with an
  "Open in Gmail" / copy-address fallback). No backend or secrets required.
- **Data-driven** — profile, experience, skills, projects, and education live in
  typed modules under `src/data`, so updating the site never means touching JSX.
- **Production-ready** — typed end to end, lints clean, and ships as a minimal
  standalone Docker image.

## Tech stack

| Area       | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)                |
| UI runtime | React 19                                          |
| Styling    | Tailwind CSS 4 (CSS-first `@theme`)               |
| Motion     | `motion` (Framer Motion) 12                       |
| Theming    | `next-themes`                                     |
| Fonts      | Syne (display) · Source Serif 4 (body) · IBM Plex Mono (mono) |
| Language   | TypeScript                                        |

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack).            |
| `npm run build` | Production build (emits `.next/standalone`). |
| `npm run start` | Serve the production build.                  |
| `npm run lint`  | Run ESLint.                                  |

## Project structure

```
src/
├── app/                  # App Router entry, layout, global styles
│   ├── globals.css       # Design tokens, theme vars, ambient + motion CSS
│   ├── layout.tsx        # Fonts, metadata, providers, header/footer
│   └── page.tsx          # Section composition
├── components/
│   ├── layout/           # Header, Footer
│   ├── providers/        # ThemeProvider
│   ├── sections/         # Hero, About, Expertise, Experience, Projects, Contact
│   └── ui/
│       ├── motion/       # Reveal, Counter, MagneticButton, NeuralBackground
│       ├── ContactForm.tsx
│       └── …             # Tag, SectionLabel, ContactButton, ThemeToggle
├── data/                 # Typed content (profile, experience, skills, projects…)
├── lib/                  # gmail.ts — mailto / Gmail compose helpers
└── types/                # Shared TypeScript interfaces
```

## Editing content

All copy lives in `src/data` and is typed against `src/types/portfolio.ts`:

- `profile.ts` — name, title, tagline, summary, contact, hero stats.
- `experience.ts` — roles and highlight bullets.
- `skills.ts` — expertise categories and their tags.
- `projects.ts` — featured projects (`category`, `metric`, highlights, tech).
- `education.ts`, `navigation.ts` — schooling and nav links.

Change a value and the UI updates — no component edits needed.

## Docker

The app builds to a self-contained image using Next.js
[`output: "standalone"`](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).

```bash
# Build and run with Docker
docker build -t harry-portfolio .
docker run --rm -p 3000:3000 harry-portfolio

# …or with Compose
docker compose up --build
```

The site is then served at <http://localhost:3000>.

## Accessibility

- Respects `prefers-reduced-motion`: scroll reveals collapse to fades, the
  neural canvas renders a single static frame, and ambient animation is disabled.
- Keyboard-visible focus rings on all interactive elements.
- Semantic landmarks, labelled form fields with `aria-invalid` / `aria-describedby`,
  and `aria-live` status on submit.
