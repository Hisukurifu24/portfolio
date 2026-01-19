# 🎯 Quick Customization Template

Copy this template and fill it out with your information. Then use it to update the portfolio files.

---

## 👤 Personal Information

```
FULL_NAME: Francesco Naletto
EMAIL: f.naletto@outlook.com
GITHUB_USERNAME: Hisukurifu24
LINKEDIN_USERNAME: Hisukurifu24
ITCHIO_USERNAME: Hisukurifu24

TAGLINE: "Game Programmer specializing in gameplay systems"
SHORT_BIO: "Building engaging gameplay systems and technical solutions"
```

---

## 🎮 Project 1

```typescript
{
  id: '1',
  title: 'Project Name Here',
  
  description: 'One-sentence description of what it does',
  
  problem: 'What problem did this solve?',
  
  gifUrl: '/projects/project1-demo.gif',
  thumbnailUrl: '/projects/project1-thumb.jpg',
  
  techStack: ['Unity', 'C#', 'Tech1', 'Tech2', 'Tech3'],
  
  links: {
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/Hisukurifu24/repo',
    itchio: 'https://hiisukurifu.itch.io/game',
  },
  
  caseStudy: {
    goals: [
      'Goal 1 - What did you want to achieve?',
      'Goal 2 - Performance target?',
      'Goal 3 - Design requirement?',
    ],
    challenges: [
      'Challenge 1 - Technical problem',
      'Challenge 2 - Limitation or constraint',
      'Challenge 3 - Edge case or complexity',
    ],
    solutions: [
      'Solution 1 - How you solved it (be technical)',
      'Solution 2 - Architecture decision',
      'Solution 3 - Optimization technique',
    ],
  },
}
```

---

## 🎮 Project 2

```typescript
{
  id: '2',
  title: '',
  description: '',
  problem: '',
  gifUrl: '/projects/project2-demo.gif',
  thumbnailUrl: '/projects/project2-thumb.jpg',
  techStack: ['', '', ''],
  links: {
    demo: '',
    github: '',
  },
  caseStudy: {
    goals: ['', '', ''],
    challenges: ['', '', ''],
    solutions: ['', '', ''],
  },
}
```

---

## 🎮 Project 3

```typescript
{
  id: '3',
  title: '',
  description: '',
  problem: '',
  gifUrl: '/projects/project3-demo.gif',
  thumbnailUrl: '/projects/project3-thumb.jpg',
  techStack: ['', '', ''],
  links: {
    github: '',
  },
  caseStudy: {
    goals: ['', '', ''],
    challenges: ['', '', ''],
    solutions: ['', '', ''],
  },
}
```

---

## 🛠️ Skills

```typescript
const skillsData = {
  engines: [
    'Unity',
    'Unreal Engine',
    // Add more
  ],
  
  languages: [
    'C#',
    'C++',
    // Add more
  ],
  
  tools: [
    'Git',
    'Perforce',
    // Add more
  ],
  
  specialties: [
    'Gameplay Systems',
    'AI Programming',
    // Add more
  ],
}
```

---

## 📝 About Section Text

```
Paragraph 1: Who you are and what you do
"I'm a [Job Title] with a passion for [what you love]. 
My focus is on [your specialty]."

Paragraph 2: Experience and specializations
"With experience across [engines/languages], I specialize in [area 1], 
[area 2], and [area 3]."

Paragraph 3: Team collaboration and values
"I thrive in [type of environment]. [Your values and approach]."
```

---

## 🎯 Meta Tags (SEO)

```typescript
export const metadata: Metadata = {
  title: 'Game Developer Portfolio | Francesco Naletto',
  description: 'Game Programmer specializing in [your specialties]',
  keywords: [
    'game developer',
    'game programmer',
    '[your engine]',
    '[your specialty]',
    'portfolio'
  ],
}
```

---

## 📋 Files to Update Checklist

Once you've filled out the template above, update these files:

### 1. app/layout.tsx
- [ ] Line 8-11: Meta title, description, keywords
- [ ] Replace Francesco Naletto

### 2. components/Hero.tsx
- [ ] Line 8: Replace "Game Programmer" or keep it
- [ ] Line 9-10: Update tagline
- [ ] Lines 11-13: Update bio text
- [ ] Lines 17-18: Update CTA buttons
- [ ] Lines 24, 31, 38: Social links (GitHub, LinkedIn, Itch.io)

### 3. components/Header.tsx
- [ ] Line 30: GitHub link

### 4. components/Footer.tsx
- [ ] Lines 7-10: All social links
- [ ] Line 24: Copyright name

### 5. components/Projects.tsx
- [ ] Lines 9-88: Replace entire projectsData array with your projects

### 6. components/Skills.tsx
- [ ] Lines 4-9: Update all skill categories

### 7. components/About.tsx
- [ ] Lines 10-18: First paragraph
- [ ] Lines 20-25: Second paragraph  
- [ ] Lines 27-32: Third paragraph
- [ ] Lines 36-55: "What I Bring to Teams" bullets
- [ ] Line 60: Email link

---

## 🔍 Search & Replace Guide

Use your code editor's "Find and Replace" feature:

| Find This | Replace With | Where |
|-----------|--------------|-------|
| `Francesco Naletto` | Your actual name | All files |
| `f.naletto@outlook.com` | Your email | All files |
| `Hisukurifu24` | Your username | All files |
| `https://github.com/Hisukurifu24` | Your GitHub URL | All files |
| `https://linkedin.com/in/francesconaletto` | Your LinkedIn | All files |
| `https://hiisukurifu.itch.io` | Your Itch.io | All files |

---

## ✅ Validation Steps

After updating, verify:

1. **Run the site**
   ```bash
   npm run dev
   ```

2. **Check each section**
   - [ ] Hero section shows your name
   - [ ] Projects show your GIFs
   - [ ] Skills match your abilities
   - [ ] About section is your story
   - [ ] All social links work
   - [ ] Footer has correct info

3. **Test links**
   - Click every link to verify it works
   - Test on both desktop and mobile

4. **Build test**
   ```bash
   npm run build
   ```
   Should complete without errors

---

## 💡 Pro Tips

1. **Start Simple**
   - Update personal info first
   - Add ONE project completely
   - Then add more

2. **Test Frequently**
   - Check browser after each change
   - Refresh to see updates

3. **Commit Often** (if using Git)
   ```bash
   git add .
   git commit -m "Updated personal info"
   ```

4. **Keep This Template**
   - Save for future updates
   - Copy project template when adding new work

---

**Ready? Start filling out this template, then update the files!**
