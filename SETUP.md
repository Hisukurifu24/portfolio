# Quick Setup Checklist

## ✅ Immediate Actions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

---

## 📝 Customization Checklist

### Replace ALL instances of these placeholders:

#### Personal Information
- [ ] `Francesco Naletto` - Your actual name
- [ ] `f.naletto@outlook.com` - Your email address
- [ ] `Hisukurifu24` - Your GitHub username
- [ ] Update LinkedIn URL
- [ ] Update Itch.io URL

#### Files to Edit:
1. **app/layout.tsx**
   - Meta title and description
   - Keywords

2. **components/Hero.tsx**
   - Introduction text
   - Tagline
   - Social links

3. **components/Header.tsx**
   - GitHub link

4. **components/Footer.tsx**
   - All social links
   - Email
   - Copyright name

5. **components/About.tsx**
   - Personal background
   - Experience details
   - What you bring to teams

---

## 🎮 Add Your Projects

### Step 1: Prepare Assets
Create GIF demos of your projects (optimized, <5MB each):
- Use recording software (OBS, ShareX, etc.)
- Edit with ezgif.com or gifsicle
- Target: 720p, 10-15 fps, 5-10 seconds
- Save to: `public/projects/your-project-demo.gif`
- Create thumbnail: `public/projects/your-project-thumb.jpg`

### Step 2: Update Projects Data
Edit `components/Projects.tsx`, replace the sample projects:

```typescript
{
  id: '1',
  title: 'Your Project Name',
  description: 'What does it do?',
  problem: 'What problem does it solve?',
  gifUrl: '/projects/your-demo.gif',
  thumbnailUrl: '/projects/your-thumb.jpg',
  techStack: ['Unity', 'C#', 'Your Tech'],
  links: {
    demo: 'https://your-demo-url',
    github: 'https://github.com/your-repo',
  },
  caseStudy: {
    goals: ['Goal 1', 'Goal 2'],
    challenges: ['Challenge 1', 'Challenge 2'],
    solutions: ['Solution 1', 'Solution 2'],
  }
}
```

---

## 🛠️ Update Your Skills

Edit `components/Skills.tsx`:

```typescript
const skillsData = {
  engines: ['Unity', 'Unreal Engine', '...'],
  languages: ['C#', 'C++', '...'],
  tools: ['Git', 'Perforce', '...'],
  specialties: ['Gameplay Systems', 'AI', '...'],
}
```

---

## 🎨 Optional: Customize Theme

Edit `tailwind.config.ts` to change colors:
- `primary`: Main accent color (default: sky blue)
- `secondary`: Secondary accent (default: purple)
- `dark.*`: Background shades

---

## 🚀 Build & Deploy

### Test Production Build
```bash
npm run build
```

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy!

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 🎯 Quality Checks Before Launch

- [ ] All placeholder text replaced
- [ ] All social links updated
- [ ] At least 3 projects added with real GIFs
- [ ] Skills section reflects your actual skills
- [ ] About section tells your story
- [ ] Tested on mobile (responsive)
- [ ] All links work
- [ ] No console errors in browser
- [ ] GIFs load and play on hover
- [ ] Production build succeeds

---

## 📱 Testing

### Desktop
- Chrome, Firefox, Safari
- Test hover animations on project cards
- Check all navigation links

### Mobile
- Test responsive layout
- Tap to play GIF animations
- Check mobile menu

---

## 💡 Portfolio Tips

### Project Descriptions
❌ "A complex AI system"
✅ "Behavior tree AI supporting 20+ simultaneous agents with dynamic difficulty scaling"

### Show Impact
- Use metrics: "Generated dungeons in <100ms"
- Be specific: "Reduced memory usage by 40%"
- Highlight decisions: "Chose ECS architecture for scalability"

### GIF Best Practices
- Show ONE feature clearly
- Loop seamlessly
- Capture at consistent framerate
- Show actual gameplay, not menus

---

## 🆘 Need Help?

Check README.md for detailed documentation and troubleshooting.

---

**Remember: Recruiters spend ~30 seconds on your portfolio. Make it count!**
