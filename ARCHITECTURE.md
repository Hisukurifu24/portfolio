# 📐 Portfolio Structure & Architecture

## 🏗️ Component Hierarchy

```
app/
├── layout.tsx (Root Layout)
│   ├── Header (Fixed Navigation)
│   ├── main (Page Content)
│   │   └── page.tsx (Homepage)
│   │       ├── Hero (Introduction Section)
│   │       ├── Projects (Projects Grid)
│   │       │   └── ProjectCard (Individual Project)
│   │       │       ├── GIF Preview
│   │       │       ├── Project Info
│   │       │       ├── Tech Stack Badges
│   │       │       ├── Action Links
│   │       │       └── Case Study (Expandable)
│   │       ├── Skills (Skills Section)
│   │       │   └── SkillBadge (Individual Skill)
│   │       └── About (About Section)
│   └── Footer (Social Links & Copyright)
```

---

## 📂 File Structure Explained

```
portfolio/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Homepage (combines all sections)
│   └── globals.css              # Global styles
│
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation bar
│   ├── Hero.tsx                 # Hero/intro section
│   ├── Projects.tsx             # Projects grid container
│   ├── ProjectCard.tsx          # Individual project card
│   ├── Skills.tsx               # Skills section
│   ├── SkillBadge.tsx          # Individual skill badge
│   ├── About.tsx                # About section
│   └── Footer.tsx               # Footer
│
├── public/                       # Static assets
│   └── projects/                # Project GIFs and images
│       ├── project1-demo.gif
│       ├── project1-thumb.jpg
│       └── ...
│
├── Configuration Files
│   ├── package.json             # Dependencies
│   ├── tsconfig.json            # TypeScript config
│   ├── tailwind.config.ts       # Tailwind CSS config
│   ├── next.config.js           # Next.js config
│   ├── postcss.config.js        # PostCSS config
│   ├── .eslintrc.json          # ESLint rules
│   └── .gitignore              # Git ignore patterns
│
└── Documentation
    ├── README.md                # Main documentation
    ├── START_HERE.md            # Getting started guide
    ├── SETUP.md                 # Setup checklist
    ├── DEPLOYMENT.md            # Deployment guides
    ├── CONTENT_GUIDE.md         # Content writing examples
    └── CUSTOMIZATION_TEMPLATE.md # Quick customization template
```

---

## 🎨 Page Layout

```
┌─────────────────────────────────────────┐
│  HEADER (Fixed)                         │
│  [Logo]  [Projects] [Skills] [About]   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│           HERO SECTION                  │
│      "Game Programmer"                  │
│   Your intro and social links           │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         PROJECTS SECTION                │
│                                         │
│  ┌─────────┐  ┌─────────┐             │
│  │Project 1│  │Project 2│             │
│  │  [GIF]  │  │  [GIF]  │             │
│  │ Details │  │ Details │             │
│  └─────────┘  └─────────┘             │
│                                         │
│  ┌─────────┐  ┌─────────┐             │
│  │Project 3│  │Project 4│             │
│  └─────────┘  └─────────┘             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         SKILLS SECTION                  │
│  [Engines] [Languages] [Tools]          │
│  [Specializations]                      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│          ABOUT SECTION                  │
│  Your background and experience         │
│  What you bring to teams                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  FOOTER                                 │
│  [Social Icons] © Your Name             │
└─────────────────────────────────────────┘
```

---

## 🔄 Data Flow

### Projects Section

```
Projects.tsx (Container)
│
├── projectsData (array of project objects)
│   │
│   └── map() → ProjectCard (for each project)
│       │
│       ├── Props: project data
│       │
│       ├── State: isHovered, showCaseStudy
│       │
│       └── Renders:
│           ├── GIF Preview (toggles on hover)
│           ├── Project Info
│           ├── Tech Stack (maps over array)
│           ├── Links (conditionally rendered)
│           └── Case Study (conditionally rendered)
```

### Skills Section

```
Skills.tsx (Container)
│
├── skillsData (object with categories)
│   │
│   └── For each category:
│       │
│       └── map() → SkillBadge (for each skill)
│           │
│           ├── Props: name, category
│           │
│           └── Applies category-specific styling
```

---

## 🎯 Component Responsibilities

### Layout Components

**Header**
- Fixed navigation
- Mobile menu toggle
- Smooth scroll to sections
- Social link (GitHub)

**Footer**
- Social media links
- Copyright info
- Consistent spacing

### Content Components

**Hero**
- Personal introduction
- Tagline and bio
- Call-to-action buttons
- Social links

**Projects**
- Grid layout
- Contains ProjectCard instances
- Responsive columns

**ProjectCard**
- GIF hover animation
- Project details
- Tech stack display
- External links
- Expandable case study

**Skills**
- Categorized skill display
- Contains SkillBadge instances
- Color-coded categories

**SkillBadge**
- Individual skill display
- Category-based styling
- Reusable component

**About**
- Personal background
- Core competencies
- Team value proposition
- Contact CTA

---

## 🎨 Styling Architecture

### Tailwind CSS Classes

**Color System**
```
primary: Sky blue (#0ea5e9)
secondary: Purple (#8b5cf6)
dark-900: Darkest background (#0a0a0f)
dark-800: Mid-dark (#12121a)
dark-700: Lighter dark (#1a1a24)
```

**Spacing**
```
Container: max-w-6xl (large screens)
           max-w-4xl (content sections)
Padding: px-6 (responsive)
         py-20 (sections)
```

**Typography**
```
Headings: font-bold, text-4xl/5xl
Body: text-gray-400, text-lg
Labels: text-sm, text-gray-500
```

**Animations**
```
fade-in: Opacity 0 → 1 (0.5s)
slide-up: TranslateY + Opacity (0.5s)
Hover transitions: 300ms
```

---

## 🔌 Key Interactions

### 1. Navigation
```
User clicks nav link
→ Smooth scroll to section
→ URL hash updates (#projects, #skills, #about)
```

### 2. Project Card Hover (Desktop)
```
User hovers over project card
→ setIsHovered(true)
→ GIF starts playing
→ Border color changes
→ Shadow appears
```

### 3. Project Card Tap (Mobile)
```
User taps project card
→ setIsHovered(!isHovered)
→ Toggle GIF playback
→ Visual feedback
```

### 4. Case Study Toggle
```
User clicks "View Technical Details"
→ setShowCaseStudy(!showCaseStudy)
→ Expandable section slides in
→ Button text changes
```

### 5. Mobile Menu
```
User clicks menu icon
→ setIsMenuOpen(!isMenuOpen)
→ Menu slides down
→ Icon changes (menu ↔ close)
```

---

## 📱 Responsive Breakpoints

```
Mobile:   < 768px
  - Single column
  - Hamburger menu
  - Larger touch targets
  - Stacked sections

Tablet:   768px - 1024px
  - 2-column project grid
  - Desktop navigation
  - Balanced spacing

Desktop:  > 1024px
  - 2-column project grid (max)
  - Full navigation visible
  - Optimal line lengths
  - Enhanced hover effects
```

---

## ⚡ Performance Optimizations

### Implemented

1. **Image Optimization**
   - Lazy loading for GIFs
   - Thumbnails for initial load
   - GIF plays only on hover

2. **Code Splitting**
   - Next.js automatic code splitting
   - Component-based splitting
   - Dynamic imports ready

3. **Static Generation**
   - Full static export
   - No server required
   - Fast CDN delivery

4. **Minimal JavaScript**
   - Server components where possible
   - Client components only when needed
   - Small bundle size

### Future Enhancements

- Image optimization with next/image
- WebP format for images
- Service worker for offline support
- Intersection Observer for scroll animations

---

## 🔧 Customization Points

### Easy Changes (No coding)
- Project data in `Projects.tsx`
- Skills data in `Skills.tsx`
- Text content in all components
- Social links throughout

### Moderate Changes (Some coding)
- Add new sections
- Modify color scheme
- Change animations
- Add new components

### Advanced Changes (More coding)
- Add blog functionality
- Implement filtering/search
- Add contact form
- Multi-page routes

---

## 🎯 Design Principles Applied

1. **Mobile-First**
   - Design for small screens first
   - Progressive enhancement
   - Touch-friendly targets

2. **Performance**
   - Lazy load non-critical assets
   - Minimize JavaScript
   - Static generation

3. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Proper contrast ratios

4. **Maintainability**
   - Component reusability
   - Clear file structure
   - Consistent naming
   - Documentation

---

**This architecture supports rapid customization while maintaining professional quality.**
