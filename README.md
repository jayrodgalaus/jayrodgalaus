# Jayrod Galaus Portfolio

A modern portfolio for Jayrod Galaus, positioned as a **Business Systems & Automation Developer** focused on practical internal tools, dashboards, automations, Power Platform solutions, AI-assisted development, low-code workflows, and modern web technologies.

## What this site includes

- Redesigned hero with stronger positioning
- Shorter, cleaner visitor-facing copy
- SVG iconography for build categories and contact links
- Interactive expandable project cards
- Scroll reveal animations with reduced-motion support
- Grouped skills section
- Resume-style experience section
- Professional contact section
- SEO and Open Graph metadata
- Responsive mobile navigation

## Tech stack

- Static HTML
- CSS
- TypeScript / JavaScript modules
- Vite build output for deployment
- No backend
- No database

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production-ready static files will be created in the `dist/` folder.

## Deploy to GitHub Pages

1. Run `npm install`.
2. Run `npm run build`.
3. Push the project to GitHub.
4. In the repository, go to **Settings → Pages**.
5. Publish the `dist/` folder using your preferred GitHub Pages workflow.

## Maintenance

Update portfolio content in:

```text
src/data/portfolioData.ts
```

Update section rendering in:

```text
src/modules/
```

Update styling in:

```text
src/styles.css
```
