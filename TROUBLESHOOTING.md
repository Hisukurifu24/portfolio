# 🔧 Troubleshooting Guide

Common issues and solutions when working with your portfolio.

---

## 🚨 Installation & Setup Issues

### Issue: `npm install` fails

**Symptoms:**
- Error messages during installation
- Missing dependencies

**Solutions:**

1. **Clear npm cache**
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. **Update npm**
   ```bash
   npm install -g npm@latest
   ```

3. **Use different package manager**
   ```bash
   # Try yarn instead
   npm install -g yarn
   yarn install
   ```

4. **Check Node.js version**
   ```bash
   node --version  # Should be 18+
   ```
   Download latest from [nodejs.org](https://nodejs.org)

---

### Issue: "Port 3000 already in use"

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**

1. **Kill the process on port 3000**
   
   **Windows:**
   ```powershell
   netstat -ano | findstr :3000
   taskkill /PID <PID_NUMBER> /F
   ```
   
   **Mac/Linux:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Use a different port**
   ```bash
   PORT=3001 npm run dev
   ```

---

## 🎨 Styling Issues

### Issue: Tailwind styles not applying

**Symptoms:**
- Classes in code but no styling
- Plain unstyled page

**Solutions:**

1. **Restart dev server**
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

2. **Check Tailwind config**
   Verify `tailwind.config.ts` includes your files:
   ```typescript
   content: [
     './pages/**/*.{js,ts,jsx,tsx,mdx}',
     './components/**/*.{js,ts,jsx,tsx,mdx}',
     './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   ```

3. **Verify globals.css imports**
   Check `app/globals.css` has:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Clear Next.js cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

### Issue: Custom colors not working

**Symptoms:**
- `text-primary` or custom colors show no effect

**Solution:**

Check `tailwind.config.ts` theme extension:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#0ea5e9',  // Your color here
    },
  },
},
```

Restart dev server after changes.

---

## 🖼️ Image/GIF Issues

### Issue: GIFs not loading

**Symptoms:**
- Broken image icon
- 404 errors in console

**Solutions:**

1. **Check file location**
   - Files must be in `public/projects/` folder
   - Example: `public/projects/my-demo.gif`

2. **Check file path in code**
   ```typescript
   gifUrl: '/projects/my-demo.gif'  // Note: starts with /
   ```

3. **Verify file names match exactly**
   - Case-sensitive!
   - `Demo.gif` ≠ `demo.gif`

4. **Check file permissions**
   - Ensure files are readable
   - Not corrupted

---

### Issue: GIF not animating on hover

**Symptoms:**
- Image shows but doesn't play
- No animation on mouse over

**Solutions:**

1. **Verify GIF is actually animated**
   - Open in browser directly
   - Confirm it animates

2. **Check ProjectCard component**
   - `isHovered` state should toggle
   - Image src should change

3. **Test on different browser**
   - Some browsers handle GIFs differently

4. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

---

### Issue: Images too large / slow loading

**Symptoms:**
- Page loads slowly
- Large file sizes

**Solutions:**

1. **Optimize GIFs**
   - Use [ezgif.com](https://ezgif.com/optimize)
   - Target: <5MB per GIF
   - Reduce to 720p, 10-15 fps

2. **Create thumbnails**
   - Use JPG thumbnails for initial load
   - GIF loads only on hover

3. **Check file sizes**
   ```bash
   ls -lh public/projects/
   ```

---

## 📱 Responsive Design Issues

### Issue: Mobile layout broken

**Symptoms:**
- Text too small
- Elements overflow
- Horizontal scrolling

**Solutions:**

1. **Add viewport meta tag**
   (Should already be in `layout.tsx`)
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

2. **Test responsive classes**
   ```typescript
   // Example: Hidden on mobile, shown on desktop
   className="hidden md:block"
   ```

3. **Check for fixed widths**
   - Avoid: `width: 800px`
   - Use: `max-w-6xl` or `w-full`

4. **Test with browser dev tools**
   - F12 → Toggle device toolbar
   - Test different screen sizes

---

### Issue: Mobile menu not working

**Symptoms:**
- Can't open/close menu
- Button doesn't respond

**Solutions:**

1. **Check state in Header.tsx**
   ```typescript
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   ```

2. **Verify button onClick**
   ```typescript
   onClick={() => setIsMenuOpen(!isMenuOpen)}
   ```

3. **Check for JavaScript errors**
   - Open browser console (F12)
   - Look for red error messages

---

## 🔨 Build Issues

### Issue: `npm run build` fails

**Symptoms:**
- Build errors
- TypeScript errors
- Can't create production build

**Solutions:**

1. **Check TypeScript errors**
   ```bash
   npm run lint
   ```
   Fix all errors shown

2. **Common TypeScript fixes**
   
   **Missing type:**
   ```typescript
   // Before
   const handleClick = (e) => { }
   
   // After
   const handleClick = (e: React.MouseEvent) => { }
   ```
   
   **Missing props:**
   ```typescript
   // Define all required props
   interface Props {
     title: string
     description: string
   }
   ```

3. **Check for unused imports**
   ```bash
   # Remove unused imports
   ```

4. **Verify all files exist**
   - Check import paths
   - Case-sensitive file names

---

### Issue: Build succeeds but site doesn't work

**Symptoms:**
- Build completes
- Site loads but broken
- Features don't work

**Solutions:**

1. **Test locally first**
   ```bash
   npm run build
   npx serve out
   ```
   Open http://localhost:3000

2. **Check browser console**
   - Look for 404 errors
   - JavaScript errors

3. **Verify static export**
   Check `next.config.js`:
   ```javascript
   output: 'export',
   images: {
     unoptimized: true,
   },
   ```

---

## 🌐 Deployment Issues

### Issue: Vercel deployment fails

**Symptoms:**
- Build fails on Vercel
- Site doesn't update

**Solutions:**

1. **Check Vercel logs**
   - Go to deployment
   - Click on failed build
   - Read error messages

2. **Verify environment**
   - Framework preset: Next.js
   - Root directory: `./`
   - Build command: (leave default)
   - Output directory: (leave default)

3. **Test build locally first**
   ```bash
   npm run build
   ```
   Must succeed locally before deploying

---

### Issue: GitHub Pages shows 404

**Symptoms:**
- Deployed but shows 404
- Only homepage works

**Solutions:**

1. **Update basePath in next.config.js**
   ```javascript
   basePath: '/your-repo-name',
   ```

2. **Add `.nojekyll` file**
   Create `public/.nojekyll` (empty file)

3. **Check GitHub Pages settings**
   - Repository → Settings → Pages
   - Source: gh-pages branch
   - Folder: / (root)

4. **Wait 5-10 minutes**
   - GitHub Pages can be slow to update

---

### Issue: Custom domain not working

**Symptoms:**
- Domain shows error
- SSL certificate issues

**Solutions:**

1. **Wait for DNS propagation**
   - Can take 24-48 hours
   - Check: [dnschecker.org](https://dnschecker.org)

2. **Verify DNS settings**
   
   **For Vercel:**
   - A Record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

3. **Check SSL certificate**
   - Usually auto-generated
   - Can take a few hours

---

## 💻 Development Issues

### Issue: Changes not showing in browser

**Symptoms:**
- Edit files but no change
- Old content still visible

**Solutions:**

1. **Hard refresh**
   - Windows/Linux: Ctrl+Shift+R
   - Mac: Cmd+Shift+R

2. **Clear browser cache**
   - Settings → Privacy → Clear browsing data

3. **Restart dev server**
   ```bash
   # Ctrl+C to stop
   npm run dev
   ```

4. **Check if file is saved**
   - Some editors don't auto-save

---

### Issue: Hot reload not working

**Symptoms:**
- Have to manually refresh
- Changes require server restart

**Solutions:**

1. **Update Next.js**
   ```bash
   npm install next@latest
   ```

2. **Check file watchers (Linux)**
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

3. **Disable antivirus temporarily**
   - Can interfere with file watching

---

## 🐛 Content Issues

### Issue: Links not working

**Symptoms:**
- Click link, nothing happens
- 404 errors

**Solutions:**

1. **Check URL format**
   ```typescript
   // External links need full URL
   href="https://github.com/username"
   
   // Not just
   href="github.com/username"  // ❌
   ```

2. **Verify target="_blank"**
   ```typescript
   <a href="..." target="_blank" rel="noopener noreferrer">
   ```

3. **Check anchor navigation**
   ```typescript
   // Section ID must match href
   <section id="projects">  // ✓
   <a href="#projects">     // ✓
   ```

---

### Issue: Social icons not showing

**Symptoms:**
- Icons missing
- Boxes instead of icons

**Solutions:**

1. **Verify react-icons installed**
   ```bash
   npm install react-icons
   ```

2. **Check imports**
   ```typescript
   import { FiGithub } from 'react-icons/fi'
   ```

3. **Restart dev server**
   ```bash
   npm run dev
   ```

---

## 🎯 Performance Issues

### Issue: Slow page load

**Symptoms:**
- Takes >5 seconds to load
- Laggy animations

**Solutions:**

1. **Optimize GIFs**
   - Compress to <5MB each
   - Use thumbnails for initial load

2. **Check bundle size**
   ```bash
   npm run build
   # Look at output file sizes
   ```

3. **Use Lighthouse**
   - F12 → Lighthouse tab
   - Run audit
   - Fix flagged issues

4. **Enable lazy loading**
   (Already implemented for GIFs)

---

## 📊 Browser Console Errors

### Common Errors & Fixes

**"Hydration error"**
- Mismatch between server and client
- Check for dynamic content in Server Components
- Solution: Mark component with `'use client'`

**"Cannot read property of undefined"**
- Accessing data that doesn't exist
- Solution: Add optional chaining `?.` or null checks

**"Maximum update depth exceeded"**
- Infinite re-render loop
- Solution: Check useState calls in render

**"Failed to fetch"**
- Network or CORS issue
- Solution: Check API endpoints and CORS settings

---

## 🆘 Getting More Help

### 1. Check Browser Console
```
F12 → Console tab
Look for red error messages
```

### 2. Check Dev Server Output
```
Look at terminal where `npm run dev` is running
Error messages appear here
```

### 3. Search Error Messages
```
Copy exact error message
Search on:
- Google
- Stack Overflow
- Next.js GitHub issues
```

### 4. Verify Setup
```bash
# Check versions
node --version  # Should be 18+
npm --version   # Should be 9+

# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## ✅ Prevention Tips

1. **Commit often** (if using Git)
   - Save working states
   - Easy to roll back

2. **Test before deploying**
   ```bash
   npm run build
   # Must succeed
   ```

3. **Keep dependencies updated**
   ```bash
   npm update
   ```

4. **Use version control**
   - Track all changes
   - Never lose work

5. **Test on multiple browsers**
   - Chrome, Firefox, Safari
   - Mobile browsers

---

**Most issues can be solved by:**
1. Restarting the dev server
2. Clearing browser cache
3. Checking the console for errors
4. Reading error messages carefully

**Still stuck? The error message is your friend! Read it carefully and search for it online.**
