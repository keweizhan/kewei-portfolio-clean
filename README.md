# Kewei Zhan — Portfolio

Personal portfolio website for **Kewei Zhan**, a full-stack and AI application engineer building distributed AI systems, backend platforms, and production-style developer tools.

## Features

- Section-based landing page (hero, what I do, selected works, about, contact, footer)
- Two featured AI/backend projects with scroll-linked interactions and counter animation
- Smooth scrolling (Lenis) and animation (GSAP, Motion / Framer Motion-style)
- Contact form that posts to a server route and sends email via [Resend](https://resend.com)
- Bilingual locale support (English, Simplified Chinese, Traditional Chinese) via next-intl

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** Radix UI primitives, Lucide icons, class-variance-authority / clsx / tailwind-merge
- **Motion:** GSAP, Motion (`motion/react`), `@gsap/react`
- **Scrolling:** Lenis
- **Forms:** react-hook-form
- **Email:** Resend + `@react-email/components`
- **i18n:** next-intl (en, zh-CN, zh-TW)

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit files under `src/`; the app hot-reloads during development.

### Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start dev server          |
| `npm run build`   | Production build          |
| `npm run start`   | Run production server     |
| `npm run lint`    | Run ESLint                |

## TODOs Before Shipping

- [ ] Replace `TODO_EMAIL@example.com` in `src/app/api/send/route.ts` and `src/components/layout/NavOverlay.tsx` with your real email
- [x] Replace `TODO_LINKEDIN_URL` in `src/components/layout/Footer.tsx` and `NavOverlay.tsx` with your LinkedIn URL
- [ ] Add your profile photo at `src/assets/image/cover.jpg` and restore the `<Image>` in `HeroSection.tsx`
- [ ] Add your about photo at `public/images/about/me.webp` and restore the `<Image>` in `AboutSection.tsx`
- [ ] Add project screenshots (see TODO comments in `SelectedWorksSection.tsx`)
- [ ] Place your resume PDF at `public/resume.pdf` if you add a resume link
- [ ] Verify your sending domain in the Resend dashboard and update the `from` address in `route.ts`
- [ ] Set `RESEND_API_KEY` in `.env.local` for local contact form testing

## Environment Variables

The contact form in [`src/app/api/send/route.ts`](src/app/api/send/route.ts) uses Resend.

- **`RESEND_API_KEY`** — required for sending mail. Set locally in `.env.local` and in your hosting environment for production. Do not commit real API keys.

## Deployment

Deploy on [Vercel](https://vercel.com) or any platform that supports Next.js. Configure `RESEND_API_KEY` in the project's environment variables.

- [Next.js — Deploying](https://nextjs.org/docs/app/building-your-application/deploying)

## Credits

This portfolio was customized from an open-source portfolio template originally created by Weihang Li / Hanggesimida. The project has been substantially modified for Kewei Zhan's personal portfolio.

## License

See [LICENSE](LICENSE) for the original MIT license from the template author.
