# Portfolio Project - AI Coding Instructions

## Project Overview
Next.js 15 portfolio site with **dual-section architecture**: game development and web development portfolios in one codebase. Users select which portfolio to view on entry (game or web), with dynamic theming and content.

## Architecture Patterns

### Section-Based Theming System
- **Context**: `SectionContext` (`contexts/SectionContext.tsx`) manages active section ('game' | 'web')
- **Config**: `sectionConfigs` in `data/sectionContent.ts` defines per-section accent colors, titles, descriptions
- **Color Flow**: Components receive `accentColorHex` prop → applied via inline styles for dynamic theming
- **Tailwind Safelist**: Dynamic color classes (e.g., `text-sky-500`, `text-emerald-500`) must be in `tailwind.config.ts` safelist

Example pattern:
```tsx
const config = sectionConfigs[selectedSection]
<Component accentColorHex={config.accentColorHex} />
```

### Data Structure
- **Types**: All shared types in `data/types.ts` (ProjectData, ProjectCategory, Section)
- **Content Files**: 
  - `data/gameProjects.ts` → game dev portfolio
  - `data/webProjects.ts` → web dev portfolio
  - `data/sectionContent.ts` → hero/about text per section
- **Category Pattern**: Projects organized in nested categories (`ProjectCategory` contains array of `ProjectData`)

### Component Architecture
```
page.tsx (conditional render)
├─ SectionChooser (if no section selected)
└─ or Portfolio Content:
   ├─ Hero (section-specific intro)
   ├─ Projects
   │  └─ ProjectCategory (collapsible)
   │     └─ ProjectCard (video hover, case study expand)
   ├─ Skills
   └─ About
```

## Key Workflows

### Adding New Projects
1. Edit `data/gameProjects.ts` or `data/webProjects.ts`
2. Add `ProjectData` object to appropriate category's `projects` array
3. Place video at `/public/projects/[category]/[name].mp4`
4. Add thumbnail image (optional): `/public/projects/[category]/[name].png`

### Changing Theme Colors
1. Update `sectionConfigs` in `data/sectionContent.ts` (both `accentColor` and `accentColorHex`)
2. Add new color classes to `safelist` in `tailwind.config.ts`
3. Colors flow automatically through `accentColorHex` props

### Development Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run start    # Serve production build
```

## Project-Specific Conventions

### Static Export Configuration
- `next.config.js` set to `output: 'export'` for static hosting
- Images use `unoptimized: true` (no Next.js Image Optimization API)
- Videos: use `<video>` tag with `autoPlay loop muted playsInline`

### Styling Approach
- **Custom colors**: Defined in `tailwind.config.ts` under `extend.colors` (dark-900/800/700, sky, emerald)
- **Dynamic colors**: Pass `accentColorHex` and apply via `style={{ color: accentColorHex }}`
- **Responsive**: Mobile-first, use `md:` prefix for desktop breakpoints

### File Naming & Structure
- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Data files: camelCase (e.g., `gameProjects.ts`)
- Use `'use client'` directive for client components (state, hooks, events)
- Import paths: Use `@/` alias for root-relative imports

## Integration Points

### Video Handling
- ProjectCard: Shows thumbnail by default, plays video on hover/click
- Videos must be in `/public/projects/` subdirectories
- Format: MP4, optimized for web (<5MB recommended per CONTENT_GUIDE.md)

### External Dependencies
- `react-icons`: Use for all icons (FiGithub, FiPlay, FaGamepad, etc.)
- No image optimization library needed (static export)

## Critical Context

### Section Selection Flow
1. User visits → `page.tsx` checks `selectedSection` from context
2. If null → Show `SectionChooser` (modal with game/web options)
3. On selection → Update context → Re-render with section content
4. Section persists during navigation but resets on page refresh (intentional UX choice)

### Case Study Expandable Pattern
- ProjectCard has `showCaseStudy` state toggle
- Case study data optional in `ProjectData.caseStudy` (goals, challenges, solutions)
- Expandable section uses `animate-fade-in` for smooth reveal

### Documentation Files
- `ARCHITECTURE.md`: Component hierarchy and file structure diagram
- `CONTENT_GUIDE.md`: Writing guidelines for project descriptions (problem statements, tech stack examples)
- `START_HERE.md`, `SETUP.md`: Onboarding docs for new contributors

When modifying components, always check if they receive `accentColorHex` prop and use it consistently for theme colors.
