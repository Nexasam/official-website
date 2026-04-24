# Nexasam — Technology Solutions Website

Official company website for **Nexasam**, a software development and IT consulting agency. Built with React 18, Vite 6, Tailwind CSS 3, and Framer Motion 11.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Pages & Routes](#pages--routes)
- [Features](#features)
- [Content Management](#content-management)
- [Theming](#theming)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

Nexasam is a full-featured marketing and portfolio website for a software agency. It showcases services, featured projects, client testimonials, team members, and a contact form — wrapped in a polished dark/light theme with smooth scroll-triggered animations throughout.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Routing | React Router DOM 6 |
| Forms | React Hook Form 7 |
| Icons | Lucide React |
| Counters | React CountUp |
| Scroll Detection | React Intersection Observer |
| Utilities | clsx |

---

## Project Structure

```
nexasam/
├── public/
│   ├── favicon.svg
│   ├── nx4.png
│   └── _headers              # Custom HTTP headers for static hosting
├── src/
│   ├── components/
│   │   ├── home/             # Homepage section components
│   │   │   ├── CTABanner.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ServicesPreview.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── TrustedBy.jsx
│   │   │   └── WhyUs.jsx
│   │   ├── layout/           # App-wide layout
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   └── ui/               # Reusable UI primitives
│   │       ├── Accordion.jsx
│   │       ├── AnimatedCounter.jsx
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       └── SectionHeader.jsx
│   ├── data/
│   │   └── index.js          # All static site content
│   ├── hooks/
│   │   ├── useScrollTop.js   # Scroll-to-top behavior
│   │   └── useTheme.js       # Dark/light theme toggle
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx          # Inactive (commented out in routing)
│   │   └── Careers.jsx       # Inactive (commented out in routing)
│   ├── utils/
│   │   └── animations.js     # Shared Framer Motion variants
│   ├── App.jsx               # Root component with routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles + Tailwind directives
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── render.yaml               # Render deployment config
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nexasam.git
cd nexasam

# Install dependencies
npm install

# Start the development server
npm run dev
```

App runs at `http://localhost:5173`.

The dev server is also exposed on your local network (configured via `host: true` in `vite.config.js`), so you can test on other devices using the Network URL printed in the terminal.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR at port 5173 |
| `npm run build` | Build for production — outputs to `dist/` |
| `npm run preview` | Serve the production build locally for testing |

---

## Pages & Routes

| Route | Page | Status |
|---|---|---|
| `/` | Home | Active |
| `/about` | About | Active |
| `/services` | Services | Active |
| `/portfolio` | Portfolio | Active |
| `/contact` | Contact | Active |
| `/blog` | Blog | Inactive |
| `/careers` | Careers | Inactive |

To activate Blog or Careers, uncomment the relevant lines in `src/App.jsx` and `src/data/index.js`.

---

## Features

- **Dark / Light mode** — system-aware theme toggle, persisted in `localStorage`
- **Smooth animations** — page transitions and scroll-triggered animations via Framer Motion
- **Animated counters** — stats section counts up on scroll using React CountUp + Intersection Observer
- **Fully responsive** — mobile-first layout across all screen sizes
- **SPA routing** — client-side navigation with automatic scroll reset on route change
- **Contact form** — built with React Hook Form including field validation
- **Reusable component library** — Button, Badge, Accordion, SectionHeader, AnimatedCounter
- **Accessible** — semantic HTML, keyboard navigable, WCAG-aware design
- **Fast builds** — Vite with code splitting and tree shaking

---

## Content Management

All site content is centralized in **`src/data/index.js`**. No need to touch component files to update displayed content.

| Export | Used In |
|---|---|
| `navLinks` | Navbar, Footer |
| `services` | Services page, ServicesPreview section |
| `stats` | StatsSection |
| `testimonials` | Testimonials section |
| `projects` | Portfolio page, FeaturedProjects section |
| `teamMembers` | About page |
| `values` | About page |
| `processSteps` | About page |
| `trustedBrands` | TrustedBy section |
| `faqItems` | Contact page |
| `blogPosts` | Blog page |
| `openRoles` | Careers page |
| `benefits` | Careers page |

---

## Theming

Dark mode is class-based (`darkMode: 'class'` in Tailwind config) and toggled via the `useTheme` hook, which persists the preference to `localStorage`.

### Brand Colors

A custom `brand` color palette is defined in `tailwind.config.js`:

```
brand-50  → #e6ecff  (lightest)
brand-400 → #3366ff
brand-500 → #0042ff  (primary)
brand-600 → #0035cc
brand-900 → #000d33  (darkest)
```

Use `text-brand-500`, `bg-brand-600`, etc. throughout components.

### Fonts

- **Body:** Inter
- **Display/Headings:** Plus Jakarta Sans

Both are loaded via Google Fonts in `index.html`.

---

## Production Build

```bash
npm run build
```

Output is written to `dist/`. The build includes:

- Minified JS and CSS
- Code splitting per route
- Static assets with content-hashed filenames
- `_headers` file copied from `public/` for HTTP header configuration

To verify the build locally before deploying:

```bash
npm run preview
```

This serves `dist/` at `http://localhost:4173`.

---

## Deployment

This is a **static site** (SPA). Any static hosting provider works. The only requirement is configuring a **SPA fallback** — all routes must rewrite to `index.html` so React Router handles navigation correctly.

### Render

A `render.yaml` is included and pre-configured:

```yaml
services:
  - type: web
    name: nexasam
    runtime: static
    buildCommand: npm install; node node_modules/vite/bin/vite.js build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

Push to GitHub/GitLab, connect the repo on [render.com](https://render.com), and Render will auto-detect the config and deploy.

### Netlify

```bash
npm run build
```

Drag and drop the `dist/` folder at [netlify.com](https://netlify.com), or connect your repo for automatic deployments. Add a `_redirects` file in `public/` if needed:

```
/*  /index.html  200
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Vite and handles SPA routing automatically.

### Manual / VPS (Nginx)

```bash
npm run build
```

Copy `dist/` to your server and configure Nginx to serve it with SPA fallback:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/nexasam/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## License

Private. All rights reserved © Nexasam.
