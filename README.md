# Game Developer Portfolio

A professional, modern portfolio website for game developers built with Next.js, TypeScript, and Tailwind CSS.

## 🎮 Features

- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Project Showcase**: Interactive project cards with GIF previews on hover/tap
- **Case Studies**: Expandable technical details for each project
- **Skills Display**: Organized categorization of engines, languages, and specializations
- **Performance Optimized**: Lazy loading, optimized animations, static export ready
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

## 📝 Customization Guide

### 1. Update Personal Information

**Update your details in:**
- `components/Hero.tsx` - Name, tagline, and introduction
- `components/Header.tsx` - Navigation links
- `components/Footer.tsx` - Social links and copyright
- `app/layout.tsx` - Meta tags and SEO

### 2. Add Your Projects

Edit `components/Projects.tsx` and replace the sample data with your projects:

```typescript
const projectsData: ProjectData[] = [
  {
    id: 'unique-id',
    title: 'Your Project Name',
    description: 'Brief description',
    problem: 'Problem you solved',
    gifUrl: '/projects/your-demo.gif',
    thumbnailUrl: '/projects/your-thumb.jpg',
    techStack: ['Unity', 'C#', 'etc'],
    links: {
      demo: 'https://your-demo-link',
      github: 'https://github.com/your-repo',
      itchio: 'https://your.itch.io/game'
    },
    caseStudy: {
      goals: ['Goal 1', 'Goal 2'],
      challenges: ['Challenge 1'],
      solutions: ['Solution 1']
    }
  }
]
```

### 3. Add Project Assets

Create a `public/projects` folder and add:
- GIF demos (optimized, <5MB each)
- Thumbnail images (JPG/PNG)

```bash
mkdir public/projects
# Add your GIFs and images here
```

**GIF Optimization Tips:**
- Use tools like [ezgif.com](https://ezgif.com/) or [gifsicle](https://www.lcdf.org/gifsicle/)
- Target: 480-720p resolution, 10-15 fps, <5MB
- Show 5-10 seconds of key gameplay

### 4. Update Skills

Edit `components/Skills.tsx`:

```typescript
const skillsData = {
  engines: ['Unity', 'Unreal Engine', 'Your Engine'],
  languages: ['C#', 'C++', 'Your Languages'],
  tools: ['Git', 'Your Tools'],
  specialties: ['Your Specializations'],
}
```

### 5. Customize About Section

Edit `components/About.tsx` with your background and experience.

### 6. Update Social Links

Replace placeholder URLs in:
- `components/Hero.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`

Update:
- GitHub: `https://github.com/Hisukurifu24`
- LinkedIn: `https://linkedin.com/in/francesconaletto`
- Itch.io: `https://hiisukurifu.itch.io`
- Email: `f.naletto@outlook.com`

## 🎨 Theme Customization

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: '#0ea5e9',  // Change primary color
  secondary: '#8b5cf6', // Change secondary color
  dark: {
    900: '#0a0a0f',    // Background colors
    800: '#12121a',
    700: '#1a1a24',
  }
}
```

## 🏗️ Build for Production

```bash
npm run build
```

This generates a static export in the `out/` folder.

## 🌐 Deployment

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Vercel (Recommended)

1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Auto-deploys on every push

### Netlify

1. Push code to GitHub
2. Connect repository at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects grid
│   ├── ProjectCard.tsx  # Individual project
│   ├── Skills.tsx       # Skills section
│   ├── SkillBadge.tsx   # Skill tag
│   ├── About.tsx        # About section
│   └── Footer.tsx       # Footer
├── public/
│   └── projects/        # Your GIFs and images
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## 🎯 Best Practices

### Project GIFs
- **Show, don't tell**: Capture key gameplay moments
- **Keep it short**: 5-10 seconds of looping action
- **Focus**: One feature per GIF
- **Quality**: Clear, smooth, representative of final quality

### Project Descriptions
- Lead with impact: "What does this do?"
- Be specific: Avoid vague terms like "complex" or "advanced"
- Use metrics when possible: "20+ AI agents", "Generated in <100ms"
- Highlight technical decisions, not just features

### Case Studies
- **Goals**: What were you trying to achieve?
- **Challenges**: What made it difficult?
- **Solutions**: How did you solve it? Be technical.

## 🔧 Troubleshooting

**Issue: GIFs not loading**
- Ensure files are in `public/projects/`
- Check file paths match exactly (case-sensitive)

**Issue: Build fails**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`

**Issue: Styling not applied**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For questions or issues, feel free to open an issue on GitHub.

---

**Built with ❤️ for Game Developers**
