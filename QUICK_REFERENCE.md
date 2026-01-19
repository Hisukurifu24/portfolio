# 🎮 Portfolio Quick Reference Card

**Keep this open while working on your portfolio!**

---

## 🚀 Server Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Test production build
npm run lint         # Check for errors
```

**Stop server:** `Ctrl+C`  
**Hard refresh:** `Ctrl+Shift+R`

---

## 📝 Files to Edit (Priority Order)

### 1️⃣ Personal Info (20 min)
```
app/layout.tsx           → Meta tags, title
components/Hero.tsx      → Name, intro, social links
components/Header.tsx    → GitHub link
components/Footer.tsx    → All social links, email
components/About.tsx     → Your background story
```

**Find & Replace:**
- `Francesco Naletto` → Your name
- `f.naletto@outlook.com` → Your email  
- `Hisukurifu24` → Your username

---

### 2️⃣ Projects (1-2 hours)
```
components/Projects.tsx  → Lines 9-88: projectsData array
```

**Template:**
```typescript
{
  id: '1',
  title: 'Project Name',
  description: 'What it does',
  problem: 'What problem it solves',
  gifUrl: '/projects/demo.gif',
  thumbnailUrl: '/projects/thumb.jpg',
  techStack: ['Unity', 'C#', '...'],
  links: {
    demo: 'url',
    github: 'url',
  },
  caseStudy: {
    goals: ['...'],
    challenges: ['...'],
    solutions: ['...'],
  }
}
```

---

### 3️⃣ Skills (10 min)
```
components/Skills.tsx    → Lines 4-9: skillsData object
```

---

## 📂 GIF Locations

```
public/projects/
├── project1-demo.gif    (<5MB, 720p, 10-15fps)
├── project1-thumb.jpg
├── project2-demo.gif
└── project2-thumb.jpg
```

**Path in code:** `/projects/your-file.gif`

---

## 🎨 Color Customization

```typescript
// File: tailwind.config.ts

colors: {
  primary: '#0ea5e9',     // Main blue
  secondary: '#8b5cf6',   // Purple
  dark: {
    900: '#0a0a0f',       // Darkest
    800: '#12121a',       // Mid-dark
    700: '#1a1a24',       // Lighter
  }
}
```

---

## 🔍 Quick Search Targets

| Find | Replace With |
|------|--------------|
| `Francesco Naletto` | Your actual name |
| `f.naletto@outlook.com` | Your email |
| `Hisukurifu24` | Your GitHub username |
| `https://github.com/Hisukurifu24` | Your GitHub URL |
| `https://linkedin.com/in/francesconaletto` | Your LinkedIn |
| `https://hiisukurifu.itch.io` | Your Itch.io |

---

## 🚨 Common Issues

| Problem | Solution |
|---------|----------|
| Changes not showing | Hard refresh: `Ctrl+Shift+R` |
| Port 3000 in use | Kill process or use `PORT=3001 npm run dev` |
| GIFs not loading | Check `public/projects/` folder, verify path |
| Build fails | Run `npm run lint`, fix errors |
| Styles not applying | Restart dev server |

---

## 📋 Pre-Deploy Checklist

```
□ npm run build → succeeds
□ No console errors
□ All links work
□ GIFs load and animate
□ Mobile responsive
□ All placeholders replaced
```

---

## 🌐 Deploy to Vercel (5 min)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main

# 2. Go to vercel.com
# 3. Import project
# 4. Deploy!
```

---

## 📚 Documentation Map

| File | Purpose |
|------|---------|
| **START_HERE.md** | Complete overview |
| **SETUP.md** | Setup checklist |
| **CUSTOMIZATION_TEMPLATE.md** | Fill-in template |
| **CONTENT_GUIDE.md** | Writing tips |
| **DEPLOYMENT.md** | Deploy guides |
| **TROUBLESHOOTING.md** | Fix issues |

---

## 💡 Writing Tips

**Good Project Title:**
✅ "Procedural Dungeon Generator"  
❌ "My Game Project"

**Good Description:**
✅ "Behavior tree AI supporting 20+ agents at 60 FPS"  
❌ "Made enemies smarter"

**Be Specific:**
- Use metrics: "20+ agents", "<100ms", "40% faster"
- Name tech: "Unity ECS", "A* Pathfinding", not just "Unity"
- Explain decisions: Why you chose that approach

---

## 🎯 Priority Order

1. ✅ Server running (already done!)
2. 📄 Read START_HERE.md
3. ✏️ Fill CUSTOMIZATION_TEMPLATE.md
4. 🔄 Update personal info
5. 🎮 Add 3-5 projects
6. 🛠️ Update skills
7. ✍️ Write about section
8. ✅ Test everything
9. 🚀 Deploy to Vercel

---

## ⌨️ Keyboard Shortcuts

**VS Code:**
- `Ctrl+P` → Quick file open
- `Ctrl+Shift+F` → Search all files
- `Ctrl+/` → Comment line
- `Alt+Up/Down` → Move line

**Browser:**
- `F12` → Dev tools
- `Ctrl+Shift+R` → Hard refresh
- `Ctrl+Shift+I` → Inspect element
- `Ctrl+Shift+M` → Mobile view

---

## 🎨 Component Locations

```
Header      → Top navigation
Hero        → Big intro section
Projects    → Project cards grid
Skills      → Skill badges
About       → Background story
Footer      → Bottom social links
```

---

## 🔗 Useful Links

- Optimize GIFs: [ezgif.com](https://ezgif.com)
- Vercel Deploy: [vercel.com](https://vercel.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind Docs: [tailwindcss.com](https://tailwindcss.com)

---

## ✅ Done When...

- [ ] Your name everywhere
- [ ] 3-5 projects with GIFs
- [ ] Skills match your abilities  
- [ ] About tells your story
- [ ] All links work
- [ ] Builds successfully
- [ ] Deployed live

---

**🎉 You got this! One step at a time.**

**Currently running:** http://localhost:3000

---

**Print this or keep it open in a second window!**
