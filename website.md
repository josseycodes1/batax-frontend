# BataX frontend: project map

This guide describes the frontend files present when it was written and helps
locate the right file when investigating a website issue. The tree focuses on
project-owned source, configuration, documentation, and assets. It intentionally
omits `.git/`, `node_modules/`, and `.next/` because those are Git metadata,
installed dependencies, and generated build output rather than application
source. The currently present generated root files `next-env.d.ts` and
`tsconfig.tsbuildinfo` are included for completeness.

## Project tree

```text
batax-frontend/
├── app/
│   ├── browse/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── safety/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── home/
│       ├── CategorySection.tsx
│       ├── ExchangeBanner.tsx
│       ├── FeaturedItems.tsx
│       ├── FinalCTA.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── HowItWorks.tsx
│       ├── Navbar.tsx
│       ├── SearchExchange.tsx
│       ├── Testimonials.tsx
│       └── TrustSection.tsx
├── public/
│   ├── batax-avatar-man.png
│   ├── batax-avatar-woman.png
│   ├── batax-avatar-woman-2.png
│   ├── batax-avatar-woman-3.png
│   ├── batax-books.png
│   ├── batax-camera.png
│   ├── batax-cta.png
│   ├── batax-guitar.png
│   ├── batax-handbag.png
│   ├── batax-hero.png
│   ├── batax-macbook.png
│   ├── batax-sofa.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── next-env.d.ts
├── tsconfig.tsbuildinfo
├── tsconfig.json
└── website.md
```

## How a page is assembled

This is a Next.js App Router frontend. Files named `page.tsx` provide route
content; `app/layout.tsx` wraps every route; shared site sections live in
`components/home/`; global styles live in `app/globals.css`. The homepage is
assembled from separate sections, so a change to a single section usually
belongs in that section's component rather than in the route file.

The current browse page uses local sample item data and client-side filtering.
The contact form currently prevents a normal browser submission but is not
connected to the backend. Look for the relevant component/page before assuming
that a visible control is wired to a live API.

## App routes and shared setup

- `app/page.tsx` — `/` homepage composition. Controls which home sections appear
  and their order; edit this when a home section should be added, removed, or
  rearranged.
- `app/browse/page.tsx` — `/browse` browse experience. Owns the example listing
  records, category selection, text filtering, saved-item UI state, and item
  cards. Change this file for browse behavior or displayed sample listings.
- `app/contact/page.tsx` — `/contact` content, support contact methods, and
  contact form UI. The submit handler is currently a placeholder; connect it to
  the backend here when implementing form submission.
- `app/how-it-works/page.tsx` — `/how-it-works` full explanatory page, including
  its steps, supporting content, and calls to action.
- `app/safety/page.tsx` — `/safety` safety guidance, verification explanations,
  and member checklist.
- `app/layout.tsx` — shared HTML document shell, Geist font setup, and
  site-wide metadata. Update this for browser title/description defaults,
  document language, or global wrappers.
- `app/globals.css` — global CSS variables, baseline element styles, selection,
  scrollbar, and Tailwind CSS import. Use this for site-wide styling changes;
  page-specific layout and most component styling use Tailwind classes in TSX.
- `app/favicon.ico` — browser tab/site icon.

## Homepage section components

- `components/home/Navbar.tsx` — shared site navigation/header. Update nav links,
  branding, and header presentation here; it is used on the homepage and
  informational/browse routes.
- `components/home/HeroSection.tsx` — homepage lead/hero content and visual.
- `components/home/SearchExchange.tsx` — homepage search/exchange prompt and
  category-style search choices. Change its UI here; check separately whether
  any control is connected to a route or API.
- `components/home/CategorySection.tsx` — homepage category exploration cards.
- `components/home/FeaturedItems.tsx` — homepage featured item cards and their
  displayed sample content.
- `components/home/ExchangeBanner.tsx` — mid-page exchange promotional banner
  and its call to action.
- `components/home/HowItWorks.tsx` — compact homepage summary of exchange steps.
  The longer route content is in `app/how-it-works/page.tsx`.
- `components/home/Testimonials.tsx` — homepage testimonial content and layout.
- `components/home/TrustSection.tsx` — homepage trust/verification feature
  section.
- `components/home/FinalCTA.tsx` — closing promotional call-to-action section.
  It currently exports a component named `ExchangeBanner`; refer to the file
  location when searching for this closing section.
- `components/home/Footer.tsx` — shared footer and its link groups/social links.

## Public assets

Files under `public/` are served from the site root, so code refers to them with
paths such as `/batax-hero.png`.

- `public/batax-hero.png` and `public/batax-cta.png` — hero/CTA artwork used by
  the marketing pages/components.
- `public/batax-books.png`, `public/batax-camera.png`,
  `public/batax-guitar.png`, `public/batax-handbag.png`,
  `public/batax-macbook.png`, and `public/batax-sofa.png` — example item
  imagery used in the marketing and browse content.
- `public/batax-avatar-man.png`, `public/batax-avatar-woman.png`,
  `public/batax-avatar-woman-2.png`, and `public/batax-avatar-woman-3.png` —
  profile/testimonial imagery.
- `public/file.svg`, `public/globe.svg`, `public/next.svg`,
  `public/vercel.svg`, and `public/window.svg` — starter/template SVG assets;
  retain or remove them based on whether application code still uses them.

## Root files and developer configuration

- `package.json` — frontend package identity, dependency declarations, and
  commands (`npm run dev`, `npm run build`, `npm run start`, `npm run lint`).
  Change this when adding/removing a package or a project command.
- `package-lock.json` — npm's exact dependency-resolution lockfile. Normally
  update it through npm when changing dependencies; do not hand-edit it.
- `tsconfig.json` — TypeScript compiler options and module/path resolution.
- `next-env.d.ts` — generated Next.js TypeScript declarations; normally
  maintained by Next.js rather than edited by hand.
- `tsconfig.tsbuildinfo` — generated TypeScript incremental-build cache; not
  application source and normally safe to regenerate.
- `next.config.ts` — Next.js build/runtime configuration. It currently contains
  the default empty configuration object.
- `postcss.config.mjs` — PostCSS plugin setup used by the Tailwind CSS pipeline.
- `eslint.config.mjs` — ESLint rules inherited from the Next.js Core Web Vitals
  and TypeScript configurations, plus generated-file ignores.
- `.gitignore` — files and directories Git should omit, including local build
  and dependency output.
- `README.md` — starter instructions for running and building the Next.js
  application; revise it if the setup workflow changes.
- `AGENTS.md` and `CLAUDE.md` — repository-local guidance for coding agents.
  Update these only when the project workflow or conventions change.

## Where to start when something breaks

| Symptom | First file(s) to inspect |
| --- | --- |
| Homepage section missing, duplicated, or in the wrong order | `app/page.tsx` |
| A homepage section looks wrong | Its matching `components/home/*.tsx` file |
| Browse search/category behavior is wrong | `app/browse/page.tsx` |
| Header/footer links or layout are wrong | `components/home/Navbar.tsx`, `components/home/Footer.tsx` |
| `/contact`, `/safety`, or `/how-it-works` content is wrong | The matching `app/<route>/page.tsx` |
| All pages have a style/font/color issue | `app/globals.css`, then `app/layout.tsx` |
| Browser tab title or metadata is wrong | `app/layout.tsx` |
| An image is missing or incorrect | The referencing TSX file and its matching file in `public/` |
| TypeScript, lint, or build configuration fails | `tsconfig.json`, `eslint.config.mjs`, `next.config.ts`, or `package.json` |
| A form/control appears to do nothing | Inspect its page/component handler; the current contact form is not yet backend-integrated |

For an API-related feature, confirm that a backend endpoint exists and that the
frontend actually calls it. There is currently no shared API client in the
frontend tree; the browse page's records are hard-coded examples.
