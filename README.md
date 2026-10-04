# Business Website Master Template

A reusable, configuration-driven 5-page small-business website built with **React + Vite + React Router + plain CSS** (no backend, no Tailwind, no TypeScript).
Demo business: *Atelier Studio* (interior design). Rebrand it for any salon, gym, restaurant, consultant, contractor, etc. by editing `src/config/*` and `public/images/*`.

## Run
```bash
npm install
npm run dev
```
## Build
```bash
npm run build     # → dist/
npm run preview
```

## Folder structure
```
business-template/
├── public/
│   ├── images/{hero,about,services,gallery,testimonials}/   ← replace client images here
│   ├── logo/logo.svg                                        ← replace client logo
│   ├── favicon.svg
│   ├── _redirects  · .htaccess  (SPA routing for Netlify / Apache)
├── src/
│   ├── config/        siteConfig · homeConfig · aboutConfig · servicesConfig · galleryConfig · contactConfig
│   ├── components/    Header · Footer · Hero · PageHero · SectionTitle · ServiceCard · TestimonialCard ·
│   │                  GalleryCard · Lightbox · CTASection · WhatsAppButton · StatsBar · FeatureCard ·
│   │                  SplitSection · ContactInfo · Button · Icon · Logo · Seo · Layout   (each with its own .css)
│   ├── pages/         Home · About · Services · Gallery · Contact · NotFound
│   ├── styles/        variables.css · global.css · responsive.css
│   ├── utils/         helpers.js (links, asset paths, theme) · icons.js (icon registry)
│   ├── App.jsx        routes
│   └── main.jsx       entry + theme
├── CUSTOMIZATION.md   ← how to rebrand for a client
├── vercel.json
└── package.json
```

## New client workflow
1. Copy the whole folder → rename it (`abc-salon`), delete `node_modules` and `dist` from the copy (or copy via `git clone`).
2. Edit `package.json` → `name`.
3. Follow **CUSTOMIZATION.md** (config files + images).
4. `npm install && npm run build`, then deploy `dist/`.

Tip: keep this master in Git. For each client create a branch or a fresh clone (`git clone master abc-salon`), so fixes to the master can be merged into client projects later.

## Deployment (static hosting)
`npm run build` produces a plain static site in `dist/`. Recommended hosts, in order of simplicity:

- **Netlify / Cloudflare Pages / Vercel** – connect the Git repo, build command `npm run build`, output `dist`. Free tier, HTTPS and CDN included. SPA routing is already handled (`public/_redirects`, `vercel.json`).
- **cPanel / shared hosting** – upload the contents of `dist/` (including `.htaccess`) to `public_html`.

After deploying: connect the client's domain, confirm HTTPS, and update `siteConfig.url` and the SEO text.
