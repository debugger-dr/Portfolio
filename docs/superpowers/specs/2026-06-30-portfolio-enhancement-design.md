# Portfolio Enhancement — Design

**Date:** 2026-06-30
**Owner:** Harry Ahmad portfolio (Next.js 16.2.9 · React 19.2.4 · Tailwind 4)

## Goal

Elevate an already-solid single-page portfolio for a Senior ML Engineer: richer UI,
professional motion, stronger project showcase, a real (animated, validated) contact
form, refreshed docs, and a production Docker image.

## Decisions (from brainstorming)

| Topic | Decision |
| --- | --- |
| Contact email | Animated, validated client form that opens the visitor's mail client. **No backend / no secrets.** |
| Animation library | `motion` v12 (`motion/react`) — React 19 compatible. |
| Visual direction | Keep the warm editorial base; add depth + subtle ML/neural motifs. |
| Projects | **Replace all 3** existing with 3 new breadth-spanning projects. |
| `requirements.txt` | **Skipped** — Node-only app; the file has no purpose here. |
| Docker | `output: 'standalone'` + multi-stage Dockerfile + compose. |

## Constraints

- AGENTS.md: this is a modified Next.js 16 — verify against `node_modules/next/dist/docs`
  before writing code. Confirmed: `output: 'standalone'` supported; `motion` peer-deps allow React 19.
- Components importing `motion/react` must be client components. Strategy: small client
  animation primitives wrap content; section components stay server-rendered where possible.
- Honor `prefers-reduced-motion` everywhere (motion `useReducedMotion` + existing CSS guard).

## Architecture

### New animation primitives — `src/components/ui/motion/`
- `Reveal.tsx` — `whileInView` fade + translateY wrapper; `delay`/`stagger` props. Reduced-motion → no transform.
- `Counter.tsx` — animates numeric portion of hero stats on in-view; preserves suffixes (`+`, `%`).
- `MagneticButton.tsx` — subtle cursor-follow wrapper for the primary CTA.
- `NeuralBackground.tsx` — canvas of drifting nodes + connecting lines behind Hero; theme-aware, low opacity; static when reduced-motion.
- `index.ts` — barrel export.

### Section updates (presentation only; data unchanged in shape)
- `Hero` — staggered entrance, `Counter` stats, `NeuralBackground`, `MagneticButton` CTA.
- `About` / `Expertise` / `Experience` / `Projects` — wrapped in `Reveal`; cards get spring hover-lift + staggered children.
- `Contact` — replaced inline mailto button with new `ContactForm`.

### Contact form — `src/components/ui/ContactForm.tsx` (client)
- Fields: name, email, message. Live validation (required + email regex), animated inline errors.
- Submit → compose subject/body, open mail client. Primary `mailto:`, secondary "Open in Gmail".
- Success micro-animation; no network call.
- `src/lib/gmail.ts` extended: `buildMailtoUrl(email, {subject, body})` + body builder; keep `buildGmailComposeUrl`.

### Data
- `src/types/portfolio.ts`: extend `Project` with optional `category` and `metric`.
- `src/data/projects.ts`: three new projects —
  1. **Atlas** — Enterprise RAG Assistant (LLM/GenAI): LangChain, OpenAI, Hugging Face, pgvector, FastAPI, Docker. Metric: +25% contextual accuracy.
  2. **Sentinel** — Real-Time Vision Inspection (CV/Deep Learning): PyTorch, OpenCV, CUDA, TensorRT, Kubernetes. Metric: 95% detection accuracy, <40ms inference.
  3. **Forecast Engine** — Demand Forecasting & Streaming Platform (Data/MLOps): PySpark, TensorFlow, Scikit-learn, Kinesis, SageMaker, Airflow. Metric: +28% forecast accuracy, 50% faster pipelines.

### Styling — `src/app/globals.css`
- Add depth tokens (shadow, gradient-border helpers), reveal keyframes fallback, extend reduced-motion guard to new animation classes.

### Infra
- `next.config.ts`: `output: 'standalone'`.
- `Dockerfile`: multi-stage (deps → build → runner) on `node:22-alpine`, non-root `nextjs` user, `EXPOSE 3000`, run `server.js`. Copies `public` + `.next/static` into standalone.
- `.dockerignore`: exclude `node_modules`, `.next`, `.git`, docs, etc.
- `docker-compose.yml`: single `web` service, build context `.`, port `3000:3000`.

### Docs
- `README.md`: full rewrite — overview, features, stack, getting started, scripts, structure, data-driven customization, Docker usage, accessibility/reduced-motion.

## Out of scope (YAGNI)
Real email backend, CMS, analytics, extra routes, `requirements.txt`, Python service.

## Testing / verification
- `npm run lint` clean.
- `npm run build` succeeds (standalone output present).
- Manual: reduced-motion path, form validation + mail-client open, light/dark, mobile menu.
- `docker build` succeeds; container serves on :3000.
