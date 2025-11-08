# Architecture

## Overview

Kris Armstrong GitHub Pages is a professional portfolio website hosted on GitHub Pages. It features a modern, responsive design built with Bootstrap 5, Tailwind CSS, and Vite, showcasing career highlights, certifications, and professional information.

## System Design

### Core Components

1. **Static Pages**
   - `index.html` - Home page with professional summary
   - `about.html` - Detailed about section
   - `certifications.html` - Professional certifications
   - `contact.html` - Contact information
   - `404.html` - Custom error page

2. **Component System** (`components/`)
   - Reusable UI components
   - Dynamic content loading
   - Modular design patterns

3. **Styling System**
   - Bootstrap 5.3 framework
   - Tailwind CSS utilities
   - Custom CSS in `styles/`
   - Dark theme implementation

4. **Build System**
   - Vite 6 for development and production builds
   - PostCSS processing
   - Asset optimization

### Technology Stack

- **HTML5/CSS3/JavaScript**: Core web technologies
- **Bootstrap 5.3**: Responsive framework and components
- **Bootstrap Icons**: Icon library
- **Tailwind CSS 3**: Utility-first CSS framework
- **Vite 6**: Build tool and dev server
- **PostCSS**: CSS processing
- **Google Fonts**: Inter font family

### Page Structure

```
User Request
    ↓
Static HTML Page
    ↓
Component Loading (JavaScript)
    ↓
Bootstrap + Tailwind Styling
    ↓
Responsive Layout
    ↓
Rendered Page
```

## Module Dependencies

### Production Dependencies
- **Bootstrap 5.3**: UI framework
- **Bootstrap Icons**: Icon set
- **Google Fonts**: Typography

### Development Dependencies
- **vite**: Build tool
- **tailwindcss**: Utility CSS framework
- **postcss**: CSS processor
- **autoprefixer**: CSS vendor prefixing

## Build Process

1. **Development**: Vite dev server with live reload
2. **Production**: Optimized build for GitHub Pages
3. **Deployment**: Automatic deployment on push to main

## Design Patterns

### Component Architecture
- Modular, reusable components
- Dynamic content injection
- Separation of concerns

### Responsive Design
- Mobile-first approach
- Bootstrap grid system
- Tailwind responsive utilities

### Performance
- Minified assets
- Optimized images
- Efficient CSS/JS loading

---

Author: Kris Armstrong
