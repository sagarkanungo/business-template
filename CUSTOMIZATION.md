# Customization Guide

This template is **configuration-driven**. For a new client you edit files in `src/config/`, replace images in `public/`, and (almost) never touch the components.

## Quick reference

| I want to change…            | Edit this                                                                   |
| ---------------------------- | --------------------------------------------------------------------------- |
| Business name                | `src/config/siteConfig.js` → `businessName` (also `<title>` in `index.html`) |
| Logo                         | Replace `public/logo/logo.svg` (or change `logo` path in `siteConfig.js`)   |
| Favicon                      | Replace `public/favicon.svg`                                                |
| Colours                      | `src/config/siteConfig.js` → `colors`                                       |
| Fonts                        | `src/styles/variables.css` → `--font-body`, `--font-heading`                |
| Phone / email / address      | `src/config/siteConfig.js` → `phone`, `email`, `address`                    |
| WhatsApp number & message    | `src/config/siteConfig.js` → `whatsapp`, `whatsappMessage`                  |
| Business hours               | `src/config/siteConfig.js` → `hours`                                        |
| Social links                 | `src/config/siteConfig.js` → `social`                                       |
| Google Map                   | `src/config/siteConfig.js` → `mapEmbedUrl`                                  |
| Menu items / header button   | `src/config/siteConfig.js` → `navLinks`, `headerCta`                        |
| SEO titles & descriptions    | `src/config/siteConfig.js` → `seo`                                          |
| Home page text, stats, hero  | `src/config/homeConfig.js`                                                  |
| Testimonials                 | `src/config/homeConfig.js` → `testimonials.items`                           |
| About page text              | `src/config/aboutConfig.js`                                                 |
| Services (add/edit/remove)   | `src/config/servicesConfig.js`                                              |
| Gallery items                | `src/config/galleryConfig.js`                                               |
| Contact page text            | `src/config/contactConfig.js`                                               |
| Images                       | `public/images/…`                                                           |

---

## 1. Business name
`src/config/siteConfig.js` → `businessName` and `tagline`. Then update the fallback `<title>` and description in `index.html`, and the page titles under `seo`.

## 2. Logo
Replace `public/logo/logo.svg` with the client logo (SVG or PNG, square or wide, ~40px tall displays best). If the file has a different name, update `logo` in `siteConfig.js`. Set `logo: ""` to show only the business name. Replace `public/favicon.svg` too.

## 3. Colours
```js
colors: { primary: "#1E3A34", secondary: "#3F6B5E", accent: "#A9562A" }
```
- `primary` – headings, header text, dark sections, footer
- `secondary` – gradients
- `accent` – buttons, highlights, icons

Dark/soft shades are derived automatically. You may also add optional keys `text`, `muted`, `light`, `border`.
**Contrast tip:** the accent colour carries white button text — pick a mid-to-dark shade (aim for contrast ≥ 4.5:1 against white).

## 4. Phone
`siteConfig.js` → `phone` (display text). Click-to-call links are generated automatically.

## 5. WhatsApp
`siteConfig.js` → `whatsapp`: digits only with country code, no `+` or spaces (e.g. `919876543210`). `whatsappMessage` is the pre-filled greeting. The floating button, CTA buttons, contact cards and enquiry form all use this value. Set `whatsapp: ""` to hide the floating button.

## 6. Services
Edit the array in `src/config/servicesConfig.js`. Add a new service by copying one object:
```js
{ id: "new-service", icon: "hammer", title: "New Service", description: "…", image: "/images/services/service-7.jpg" }
```
- `id` must be unique, lowercase, no spaces.
- `icon` must exist in `src/utils/icons.js` (see **Adding icons** below).
- The service automatically appears on the Services page, footer, home preview (first N, see `homeConfig.servicesPreview.count`) and the contact-form dropdown.

## 7. Gallery
Edit `src/config/galleryConfig.js`. Each item has `image`, `title`, `category` and `alt`. Filter buttons are generated from the categories you use — add a new category simply by using a new name.

## 8. Testimonials
`src/config/homeConfig.js` → `testimonials.items` (name, role, quote, rating 1–5, avatar image).

## 9. Replacing images
All images live in `public/images/`. Demo images are SVG placeholders labelled with the path to replace.

| Folder                      | Used for              | Recommended size |
| --------------------------- | --------------------- | ---------------- |
| `hero/hero-main`            | Home hero             | 1000 × 1200      |
| `about/about-1`, `about-2`  | About sections        | 1000 × 800       |
| `services/service-N`        | Service cards         | 800 × 600        |
| `gallery/gallery-N`         | Gallery + lightbox    | 900 × 700+       |
| `testimonials/client-N`     | Client avatars        | 200 × 200        |

Two ways to replace an image:
1. Drop in a new file with the **same name and extension**; or
2. Add a new file (e.g. `hero-main.jpg`) and update the path in the matching config file.

Use compressed `.jpg` / `.webp` (under ~200 KB each) for fast loading.

## 10. Run the project
```bash
npm install
npm run dev        # http://localhost:5173
```

## 11. Production build
```bash
npm run build      # outputs the static site to /dist
npm run preview    # test the production build locally
```
Upload the contents of `dist/` to any static host (see README → Deployment).

---

## Adding icons
Icons are referenced by name from config files. To add one, open `src/utils/icons.js`, import it from `@fortawesome/free-solid-svg-icons` (or `free-brands-svg-icons`) and add one line to the `icons` object. Browse names at https://fontawesome.com/icons (free set).

## Contact form behaviour
There is no backend. "Send via WhatsApp" opens WhatsApp with the enquiry pre-written; "Send via Email" opens the visitor's mail app (`mailto:`). Both read the contact details from `siteConfig.js`.

## Changing fonts
The template uses Playfair Display (headings) + Inter (body) from Google Fonts. To change: pick fonts on fonts.google.com, replace the `<link>` in `index.html`, then update `--font-body` / `--font-heading` in `src/styles/variables.css`. Suggestions: gym → Oswald + Inter; salon → Cormorant Garamond + Jost; consultant → DM Serif Display + DM Sans.

## Deploying under a sub-folder
If the site is hosted at `https://example.com/site/`, build with `npx vite build --base=/site/`. Images and routes handle the base path automatically.

## Client change checklist
- *Change phone / address / hours* → `siteConfig.js`
- *Change hero image* → replace `public/images/hero/hero-main.*` (or update `homeConfig.hero.image`)
- *Change colour* → `siteConfig.js` → `colors`
- *Add a service* → add an object in `servicesConfig.js`
- *Change heading or paragraph* → the page's config file (`homeConfig.js`, `aboutConfig.js`, …)

## Animations
- **Scroll reveal:** add `className="reveal"` (optionally `reveal--left`, `reveal--right`, `reveal--zoom`) to any element. Children of a `.grid` stagger automatically. Code: `src/styles/animations.css`, `src/hooks/useScrollReveal.js`.
- **Scrolling text band:** `src/config/homeConfig.js` → `marquee` (remove the `<Marquee>` line in `src/pages/Home.jsx` to hide it).
- **Count-up numbers:** automatic for stats such as `"450+"` or `"98%"`.
- **Turn everything down:** all motion is disabled for visitors with "reduce motion" enabled in their OS. To remove animations for a client, delete the `/* Motion */` blocks in the component CSS files and the `animations.css` import in `main.jsx`.
