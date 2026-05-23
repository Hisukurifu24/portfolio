# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at localhost:3000
npm run build      # Production build
npm run lint       # ESLint
npm run deploy     # Build + deploy to GitHub Pages (via gh-pages)
```

There are no tests. No test runner is configured.

## Architecture

This is a **Next.js 15 App Router** portfolio site with static export targeting GitHub Pages. It presents two distinct views — Game Dev and Web Dev — toggled via a modal on first load.

### Section System

The core concept is a dual-section portfolio. `contexts/SectionContext.tsx` holds global state (`selectedSection: 'game' | 'web'`). On load, `SectionChooser` forces the user to pick a section before content renders. Switching sections re-renders all section-aware components with different content and accent colors (sky blue for game, emerald for web).

### Data Layer

All content lives in `data/`:
- `types.ts` — `Project`, `FeatureData`, `Section`, `SectionConfig` interfaces
- `gameProjects.ts` / `webProjects.ts` — arrays of `Project` objects, each containing nested `FeatureData[]`
- `sectionContent.ts` — hero text, about paragraphs, skills categories keyed by section

To add a project: add an entry to the appropriate data file. No other changes needed.

### Component Hierarchy

```
layout.tsx (SectionProvider)
  └── PortfolioWrapper (Header + dynamic scrollbar color)
        └── page.tsx
              ├── SectionChooser (modal, shown when no section selected)
              └── Hero → Projects → Skills → About
                    Projects → Project[] → FeatureCard[]
```

`Project` is an expandable card. `FeatureCard` shows a video preview on hover, tech stack, and a collapsible case study (goals / challenges / solutions).

### Static Export & GitHub Pages

`next.config.js` sets `output: 'export'` and `basePath: '/portfolio'` in production. All asset paths must go through `utils/basePath.ts` (`withBasePath()`) to work correctly when deployed. Images are unoptimized (`images: { unoptimized: true }`).

### Styling

Tailwind CSS with a custom dark palette and custom animations (`fade-in`, `slide-up`) defined in `tailwind.config.ts`. Dynamic accent colors are passed as props and applied via inline styles (not Tailwind classes) for hover states. Safelisted dynamic color classes are declared in `tailwind.config.ts` to prevent purging.

The custom scrollbar color is set via a CSS variable (`--scrollbar-color`) updated by `PortfolioWrapper` when the section changes.
