# Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Made by Next.js creators
- Zero configuration
- Automatic deployments
- Free SSL
- Global CDN
- Perfect for Next.js apps

**Steps:**
1. Push your code to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Hisukurifu24/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub account
5. Select your portfolio repository
6. Click "Deploy"

**Done!** Your site is live at `https://your-project.vercel.app`

**Custom Domain:**
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

### Option 2: GitHub Pages

**Steps:**

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out"
   }
   ```

3. **Update next.config.js**
   
   Update basePath (replace 'portfolio' with your repo name):
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/portfolio',  // Your repository name
     trailingSlash: true,
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save

**Your site:** `https://Hisukurifu24.github.io/portfolio/`

---

### Option 3: Netlify

**Steps:**

1. Push code to GitHub

2. Go to [netlify.com](https://netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`

6. Click "Deploy site"

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain

---

### Option 4: Self-Hosted (VPS/Server)

**Requirements:**
- Server with Node.js installed
- Web server (Nginx/Apache)

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Copy `out/` folder to your server**
   ```bash
   scp -r out/* user@yourserver.com:/var/www/portfolio
   ```

3. **Configure Nginx**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /var/www/portfolio;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

## 🔧 Pre-Deployment Checklist

### Code Quality
- [ ] No console errors in browser
- [ ] All TypeScript types are correct
- [ ] No ESLint warnings: `npm run lint`
- [ ] Production build succeeds: `npm run build`

### Content
- [ ] All placeholder text replaced
- [ ] Personal information updated
- [ ] Projects added with real data
- [ ] GIFs optimized and loading properly
- [ ] All external links work
- [ ] Social media links updated

### Performance
- [ ] GIFs under 5MB each
- [ ] Images optimized
- [ ] Test on slow 3G connection
- [ ] Lighthouse score > 90

### Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Test project card hover/tap
- [ ] Test responsive breakpoints
- [ ] Test case study expandable sections

### SEO
- [ ] Meta tags updated in `app/layout.tsx`
- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Sitemap.xml (optional but recommended)

---

## 📊 Analytics (Optional)

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Create `app/GoogleAnalytics.tsx`:
   ```typescript
   'use client'
   
   import Script from 'next/script'
   
   export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
     return (
       <>
         <Script
           strategy="afterInteractive"
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_MEASUREMENT_ID}');
           `}
         </Script>
       </>
     )
   }
   ```

3. Add to `app/layout.tsx`:
   ```typescript
   import GoogleAnalytics from './GoogleAnalytics'
   
   // In the body:
   <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
   ```

---

## 🐛 Common Deployment Issues

### Issue: Images not loading on GitHub Pages

**Solution:** Update image paths to include basePath
```typescript
// In Projects.tsx
gifUrl: `${process.env.basePath || ''}/projects/demo.gif`
```

### Issue: 404 on page refresh (GitHub Pages)

**Solution:** Add `.nojekyll` file to `public/` folder:
```bash
touch public/.nojekyll
```

### Issue: Vercel deployment fails

**Solution:** Check build logs
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors
- Verify Next.js config is correct

### Issue: Slow load times

**Solution:**
- Optimize GIFs (use ezgif.com)
- Enable lazy loading (already implemented)
- Use WebP format for images
- Check bundle size: `npm run build` shows size report

---

## 🔒 Environment Variables

If you need environment variables (API keys, etc.):

1. **Create `.env.local`**
   ```
   NEXT_PUBLIC_API_KEY=your_key_here
   ```

2. **Add to Vercel:**
   - Project Settings → Environment Variables
   - Add key-value pairs

3. **Access in code:**
   ```typescript
   const apiKey = process.env.NEXT_PUBLIC_API_KEY
   ```

**Note:** Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

---

## 📈 Post-Deployment

### Monitor Performance
- Use Google Analytics
- Check Vercel Analytics (free on Vercel)
- Monitor Lighthouse scores

### Update Content
1. Add new projects to `components/Projects.tsx`
2. Push to GitHub
3. Auto-deploys on Vercel (or run `npm run deploy` for GitHub Pages)

### Custom Domain Setup
1. **Purchase domain** (Namecheap, GoDaddy, etc.)
2. **Add to Vercel/Netlify**
3. **Configure DNS:**
   - A Record: `@` → Vercel IP
   - CNAME: `www` → your-project.vercel.app

---

## ✅ Success Metrics

Your portfolio is successful if:
- Loads in < 3 seconds
- Mobile-friendly (Google Mobile-Friendly Test)
- Lighthouse score > 90
- Clear call-to-action (Contact button)
- Projects showcase your best work
- Easy to navigate and understand in 30 seconds

---

## 🆘 Need Help?

- **Vercel Docs:** [nextjs.org/learn/basics/deploying-nextjs-app](https://nextjs.org/learn/basics/deploying-nextjs-app)
- **GitHub Pages Guide:** [docs.github.com/en/pages](https://docs.github.com/en/pages)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)

---

**Remember:** A deployed portfolio is better than a perfect one. Ship it, then iterate! 🚀
