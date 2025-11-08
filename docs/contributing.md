# Contributing Guide

## Quick Start

```bash
git clone https://github.com/krisarmstrong/krisarmstrong.github.io.git
cd krisarmstrong.github.io
npm install
npm run dev
```

## Development Workflow

1. **Branch**: `git checkout -b feature/your-feature`
2. **Code**: Follow HTML5/CSS3/JS best practices
3. **Test**: Verify in multiple browsers, test responsive design
4. **Commit**: `git commit -m "feat: description"`
5. **Push**: `git push origin feature/your-feature`
6. **PR**: Open pull request

## Code Standards

- Valid HTML5 markup
- Semantic HTML elements
- Accessible design (WCAG 2.1)
- Mobile-first responsive design
- Bootstrap 5 conventions
- Tailwind utility classes
- Clean, commented code

## Project Structure

```
krisarmstrong.github.io/
├── index.html           # Home page
├── about.html           # About page
├── certifications.html  # Certifications
├── contact.html         # Contact page
├── 404.html            # Error page
├── components/         # Reusable components
├── src/                # Source files
├── styles/             # Custom CSS
├── docs/               # Documentation
│   ├── architecture.md
│   ├── api.md
│   └── contributing.md
└── CONTRIBUTING.md
```

## HTML Guidelines

### Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Kris Armstrong</title>
    <!-- Bootstrap CSS -->
    <!-- Custom CSS -->
</head>
<body>
    <!-- Navigation -->
    <!-- Main Content -->
    <!-- Footer -->
    <!-- Bootstrap JS -->
    <!-- Custom JS -->
</body>
</html>
```

### Accessibility

- Use semantic HTML5 elements
- Include proper ARIA labels
- Provide alt text for images
- Ensure keyboard navigation
- Maintain color contrast ratios

## Styling Guidelines

### Bootstrap Usage

- Use Bootstrap grid system for layout
- Leverage Bootstrap components
- Follow Bootstrap naming conventions
- Customize via CSS variables when needed

### Tailwind Usage

- Use utility classes for fine-tuning
- Follow mobile-first approach
- Maintain consistent spacing
- Use theme colors

### Custom CSS

- Place in `styles/` directory
- Use meaningful class names
- Comment complex styles
- Avoid !important when possible

## Component Guidelines

### Creating Components

- Keep components modular
- Document component usage
- Test across browsers
- Ensure responsive behavior

## Testing Checklist

- [ ] HTML validation (W3C validator)
- [ ] CSS validation
- [ ] Cross-browser testing
- [ ] Mobile responsive design
- [ ] Accessibility audit
- [ ] Performance check
- [ ] Link validation
- [ ] SEO optimization

## Deployment

Changes to `main` branch automatically deploy to GitHub Pages.

### Pre-deployment Checklist

- [ ] Build succeeds (`npm run build`)
- [ ] All tests pass
- [ ] No console errors
- [ ] Images optimized
- [ ] Links work correctly

---

Author: Kris Armstrong
