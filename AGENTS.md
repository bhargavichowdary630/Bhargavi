# AGENTS.md — Bhargavi Portfolio (Digital Rain Frontend Template)

## Project Overview

This is a **dark, cinematic single-page portfolio website** built for a Risk & Fraud Analyst. It was originally created from a "Digital Rain Frontend Template" designed for AI/deep-tech companies, then customized for personal professional branding.

The site features a scroll-driven cinematic hero with a 3D skeuomorphic card animation, a capabilities section with hover-reveal images, a cinematic video section, a research/tools project grid, capability detail sub-pages, and a footer. Visual effects include GSAP scroll-triggered animations, a canvas-based digital rain animation (mathematical symbols with water physics), and an SVG displacement-map liquid-glass button.

**Key files:**
- `src/config.ts` — **Central configuration file containing all site content.** This is the primary file to edit when changing text, images, navigation, or section data.
- `index.html` — Entry point. Loads Google Fonts (EB Garamond, Inter, Fira Code).
- `src/App.tsx` — Route definitions (`/` home, `/capability/:slug` detail pages).
- `src/main.tsx` — React entry point with `BrowserRouter`.

---

## Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.2 |
| Language | TypeScript | ~5.9 |
| Build Tool | Vite | 7.2 |
| Styling | Tailwind CSS | 3.4 |
| Animation | GSAP + ScrollTrigger | 3.14 |
| Routing | React Router DOM | 7.14 |
| UI Primitives | Radix UI + shadcn/ui | various |
| Icons | Lucide React | 0.562 |
| Fonts | Geist Mono (local), EB Garamond, Inter, Fira Code (Google Fonts) | — |
| 3D/Canvas | Three.js types, native Canvas API | — |

**Notable dev dependencies:** ESLint 9 with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`. The Vite plugin `plugin-inspect-react-code` is enabled.

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build (TypeScript check + Vite build)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

**Output:** Static files are emitted to `dist/`. The Vite config sets `base: './'` for relative asset paths.

---

## Project Structure

```
app/
├── index.html                          # HTML entry point (Google Fonts)
├── vite.config.ts                      # Vite config (base: './', @ alias)
├── tailwind.config.js                  # Tailwind theme (shadcn preset, dark mode)
├── tsconfig.json                       # Root TS config (project references)
├── tsconfig.app.json                   # App TS config (src/, strict, verbatimModuleSyntax)
├── tsconfig.node.json                  # Node TS config (vite.config.ts)
├── eslint.config.js                    # ESLint flat config (TS + React Hooks + Refresh)
├── postcss.config.js                   # PostCSS (tailwindcss + autoprefixer)
├── public/
│   ├── images/                         # Static images (capability-*.jpg, research-*.jpg)
│   └── videos/                         # Static videos (cinematic-vision.mp4)
└── src/
    ├── config.ts                       # ALL site content and copy (see below)
    ├── App.tsx                         # Routes: HomePage + CapabilityDetail
    ├── main.tsx                        # ReactDOM root + BrowserRouter
    ├── index.css                       # Global styles, @font-face, CSS variables, nav-link
    ├── lib/
    │   └── utils.ts                    # cn() helper (clsx + tailwind-merge)
    ├── hooks/
    │   └── use-mobile.ts               # useIsMobile() hook (768px breakpoint)
    ├── components/
    │   ├── LiquidGlassButton.tsx       # SVG displacement-filter glass button
    │   └── ui/                         # shadcn/ui components (60+ files)
    │       ├── cinematic-landing-hero.tsx   # GSAP scroll-driven 3D hero
    │       ├── button.tsx, card.tsx, ...    # Standard shadcn primitives
    │       └── (accordion, alert-dialog, carousel, command, dialog, etc.)
    └── sections/
        ├── Navigation.tsx              # Sticky nav bar with scroll-aware blur
        ├── Hero.tsx                    # Original hero (replaced by CinematicHero)
        ├── AmberCascades.tsx           # Canvas digital rain animation
        ├── Curriculum.tsx              # Capabilities listing with hover images
        ├── CinematicVision.tsx         # Video + text section
        ├── AlumniArchives.tsx          # Research/tools project grid
        ├── CapabilityDetail.tsx        # Article-style detail sub-page
        └── Footer.tsx                  # Footer with link columns
```

---

## Content Configuration (`src/config.ts`)

**Do not modify component files to change content.** All text, images, and navigation are defined in `src/config.ts`. The file exports typed config objects:

- `siteConfig` — `language`, `brandName`
- `navigationConfig` — `links[]`, `ctaText`
- `heroConfig` — `title`, `subtitleLine1`, `subtitleLine2`, `ctaText`
- `capabilitiesConfig` — `sectionLabel`, `items[]` (title, slug, description, image)
- `capabilityDetailConfig` — `sectionLabel`, `backLinkText`, `prevLabel`, `nextLabel`, `notFoundText`, `capabilities` (Record by slug)
- `architectureConfig` — `sectionLabel`, `videoPath`, `title`, `description`
- `researchConfig` — `sectionLabel`, `projects[]` (title, year, discipline, image)
- `footerConfig` — `heading`, `columns[]`, `copyright`, `bottomLinks[]`

**Constraints:** The design has fixed typographic scales. Exceeding these causes overflow or breakage:
- `brandName`: max ~20 chars
- `heroConfig.title`: max ~20 chars (single line)
- `heroConfig.subtitleLine1`: max ~90 chars
- `heroConfig.subtitleLine2`: max ~60 chars
- `capabilitiesConfig.items`: exactly 4 recommended
- `capabilitiesConfig.items[].title`: max ~25 chars
- `capabilitiesConfig.items[].description`: 100–200 chars
- `architectureConfig.title`: max ~55 chars
- `researchConfig.projects`: multiples of 4 (8 or 12 recommended)
- `footerConfig.heading`: max ~35 chars

**Image assets** go in `public/images/` and are referenced as `images/...` in config. **Video** goes in `public/videos/`.

---

## Routing Architecture

- `/` — HomePage, composed of: `Navigation`, `CinematicHero`, `Curriculum`, `CinematicVision`, `AlumniArchives`, `Footer`
- `/capability/:slug` — `CapabilityDetail`, article-style page with prev/next navigation

The app uses `BrowserRouter`. For static hosting, configure SPA fallback so all routes serve `index.html`.

---

## Styling and Design System

- **Background:** `#0a0a0a` (near-black)
- **Primary text:** `#ffffff`
- **Secondary text:** `#dadada`
- **Accent:** amber tones `rgba(200, 170, 130)` / HSL `34 68% 75%`
- **Font roles:**
  - GeistMono → brand name, nav links, button text, hero title
  - EB Garamond → section headings, capability titles, footer heading, research card titles
  - Inter → body text, descriptions, section labels
  - Fira Code → year labels in research grid

Tailwind CSS is configured with `darkMode: ["class"]` and uses CSS custom properties for theming. The `tailwindcss-animate` plugin is included. Many components use inline `style` props for precise typographic and layout control rather than Tailwind utility classes.

---

## Animation and Effects

1. **Cinematic Hero (`src/components/ui/cinematic-landing-hero.tsx`)**
   - GSAP ScrollTrigger timeline with `pin: true` and `scrub: 1`
   - 3D skeuomorphic card with mouse-tracking sheen effect
   - iPhone mockup with hardware buttons, dynamic island, progress ring, floating glass badges
   - Responsive: flex-column on mobile, 3-column grid on desktop

2. **Curriculum Section (`src/sections/Curriculum.tsx`)**
   - IntersectionObserver + GSAP fade-in with staggered delays
   - Hover reveals image and shifts title to amber; description cross-fades out

3. **Cinematic Vision (`src/sections/CinematicVision.tsx`)**
   - Autoplay muted looping video (21:9 ultrawide)
   - GSAP text reveal on intersection

4. **Alumni Archives (`src/sections/AlumniArchives.tsx`)**
   - 4-column grid (2-column mobile)
   - Grayscale-to-color hover transitions on images
   - IntersectionObserver + GSAP staggered entrance

5. **Amber Cascades / Digital Rain (`src/sections/AmberCascades.tsx`)**
   - Canvas 2D animation: falling math symbols + numbers
   - Simulated water surface with ripple physics
   - Respects `prefers-reduced-motion`
   - Used as background on capability detail pages at 40% opacity

6. **Liquid Glass Button (`src/components/LiquidGlassButton.tsx`)**
   - Generates a per-instance SVG displacement map via Canvas API
   - Simulates glass-lens refraction using `feDisplacementMap`

---

## TypeScript Configuration Notes

- `verbatimModuleSyntax: true` — imports used only for types must use `import type`.
- `noUnusedLocals: true` and `noUnusedParameters: true` — unused variables cause build errors.
- `strict: true` — full strict mode enabled.
- Path alias `@/*` maps to `./src/*`.

---

## Testing Strategy

**No testing framework is currently configured.** There are no unit tests, integration tests, or end-to-end tests in the project. If adding tests, Vitest (bundled with Vite) and React Testing Library would be the natural choices.

---

## Linting and Code Style

- ESLint uses the flat config format (`eslint.config.js`).
- Rules: `@eslint/js/recommended`, `typescript-eslint/recommended`, `react-hooks/recommended`, `react-refresh/vite`.
- `dist/` is ignored.
- No Prettier configuration is present. Follow existing patterns:
  - 2-space indentation
  - Single quotes for strings
  - Semicolons present
  - Inline `style` props are common for exact design values

---

## Security Considerations

- No environment variables or secrets are currently used.
- `.gitignore` excludes `.env`, `.env.local`, `.env.production`.
- No backend or API calls are present; this is a fully static client-side site.
- SVG filters and Canvas image data are generated client-side from scratch (no external SVG loading).

---

## Deployment Notes

- Build output is in `dist/` and can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).
- Because `BrowserRouter` is used, configure the host to redirect all routes to `index.html`.
- `base: './'` in Vite config supports relative-path deployments (e.g., subdirectories).

---

## Agent Guidelines

- **Always edit `src/config.ts` for content changes.** Do not hardcode text into section or component files.
- **Preserve layout constraints** (character limits) when editing config strings.
- **Add images to `public/images/` and videos to `public/videos/`**, then reference them in `src/config.ts`.
- **Do not modify `src/components/ui/` files** unless fixing a bug or intentionally extending the shadcn/ui primitive.
- **Respect `verbatimModuleSyntax`** when adding imports: use `import type { ... }` for type-only imports.
- **Avoid introducing unused variables** — they will fail the TypeScript build (`noUnusedLocals`).
- **Test the build** with `npm run build` after changes to catch TypeScript errors.
