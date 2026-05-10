# Kewei Zhan Portfolio

Personal portfolio for AI application engineering, backend infrastructure, and full-stack systems.

## Overview

This is the source for [Kewei Zhan](https://github.com/keweizhan)'s personal portfolio website. Kewei is a USC M.S. Computer Engineering student focused on AI application engineering, backend infrastructure, LLM agents, ASR evaluation, and full-stack systems. The site showcases featured projects, services, an about section, and a contact form, and is fully bilingual (English / 简体中文 / 繁體中文).

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (`motion/react`, Framer Motion-style), GSAP
- **Scrolling:** Lenis
- **i18n:** next-intl (`en`, `zh-CN`, `zh-TW`)
- **Forms:** react-hook-form
- **Email:** Resend
- **Deployment target:** Vercel

## Featured Projects

### 1. Distributed AI Agent Platform
**Repo:** https://github.com/keweizhan/Distributed-ai-agent-platform

A production-oriented AI agent platform built with FastAPI, Celery, Redis, PostgreSQL, and Docker sandboxing. Includes JWT auth, workspace isolation, optional Qdrant vector memory, Prometheus / Grafana observability, and structured LLM planning and execution flows.

### 2. SwitchNet Bilingual ASR Pipeline
**Repo:** https://github.com/keweizhan/SwitchNet

A bilingual / code-switching ASR evaluation and demo framework using Whisper and WhisperX. Provides manifest-driven experiments, switch-point analysis, subtitle export, and a Streamlit demo for interactive evaluation.

## Features

- Single-page hero / services / works / about / contact layout with scroll-linked animation
- Sticky-stacked services accordion and counter-driven project carousel
- Smooth scrolling (Lenis) and motion choreography
- Bilingual content via `next-intl` (English, Simplified Chinese, Traditional Chinese)
- Contact form posting to a Next.js API route and delivering email via Resend
- Custom inline-SVG favicon and branded tab title

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000). Source files live under `src/`; edits hot-reload during development.

Common scripts:

| Command       | Description                |
| ------------- | -------------------------- |
| `pnpm dev`    | Start the dev server       |
| `pnpm build`  | Production build           |
| `pnpm start`  | Run the production server  |
| `pnpm lint`   | Run ESLint                 |

## Environment Variables

The contact form ([`src/app/api/send/route.ts`](src/app/api/send/route.ts)) uses Resend.

| Variable           | Required | Purpose                                                                 |
| ------------------ | -------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`   | Yes      | Resend API key for sending mail. Get one at <https://resend.com>.       |
| `CONTACT_TO_EMAIL` | No       | Recipient address for contact form submissions. Falls back to a default if unset. |

Set these in a local `.env.local` file for development and in your hosting provider's environment for production. A sample is included as `.env.example`.

**`.env.local` must never be committed** — it is matched by the `.env*` rule in [`.gitignore`](.gitignore), while `.env.example` is explicitly tracked via the `!.env.example` exception.

## Deployment

Designed for [Vercel](https://vercel.com), and can be deployed on any platform that supports Next.js. Make sure `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL`) are configured in the project's environment variables.

- [Next.js — Deploying](https://nextjs.org/docs/app/building-your-application/deploying)

## Credits

This portfolio was customized from an open-source portfolio template originally created by Weihang Li / Hanggesimida. The project has been substantially modified for Kewei Zhan's personal portfolio.

## License

See [LICENSE](LICENSE) for the original MIT license from the template author.
