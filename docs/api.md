# API Reference

## NPM Scripts

### Development

#### `npm run dev`

Start the Vite development server.

**Usage:**
```bash
npm run dev
```

**Features:**
- Live reload on file changes
- Fast HMR (Hot Module Replacement)
- Local development server

---

### Production

#### `npm run build`

Build the site for production deployment.

**Usage:**
```bash
npm run build
```

**Output:**
- Optimized static files
- Minified CSS and JavaScript
- Processed and compressed assets

---

## Page Structure

### Home Page (`index.html`)

Main landing page with professional summary.

**Sections:**
- Hero section with introduction
- Professional highlights
- Skills overview
- Call-to-action elements

### About Page (`about.html`)

Detailed professional background.

**Sections:**
- Career history
- Professional experience
- Education background
- Technical expertise

### Certifications Page (`certifications.html`)

Professional certifications and credentials.

**Features:**
- Certification badges
- Credential details
- Verification links
- Achievement dates

### Contact Page (`contact.html`)

Contact information and social links.

**Elements:**
- Email contact
- Social media links
- Professional networks
- Contact form (if applicable)

### 404 Page (`404.html`)

Custom error page for GitHub Pages.

**Features:**
- User-friendly error message
- Navigation back to home
- Consistent branding

---

## Component System

### Component Loading

Components are loaded dynamically via JavaScript.

**Location:** `components/`

**Usage:**
- Modular UI elements
- Reusable across pages
- Separation of concerns

---

## Styling APIs

### Bootstrap 5

Responsive framework providing:
- Grid system (`container`, `row`, `col-*`)
- Components (cards, buttons, nav)
- Utilities (spacing, colors, flex)

**Documentation:** https://getbootstrap.com/docs/5.3/

### Tailwind CSS

Utility-first CSS framework:
- Responsive utilities
- Custom configurations
- Extended color palette

**Configuration:** `tailwind.config.js`

### Custom Styles

Location: `styles/`

**Purpose:**
- Theme customizations
- Brand-specific styling
- Override framework defaults

---

## GitHub Pages Deployment

### Automatic Deployment

Pushes to `main` branch trigger automatic deployment.

**Process:**
1. Commit changes to main branch
2. GitHub Pages rebuilds site
3. Site updates at krisarmstrong.github.io

### Manual Deployment

```bash
npm run build
# Commit dist/ contents to main
git add .
git commit -m "Deploy: update site"
git push origin main
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Author: Kris Armstrong
