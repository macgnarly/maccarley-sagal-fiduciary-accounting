# Project Status

Marketing site for a fiduciary accounting practice: **MacCarley & Sagal Fiduciary Accounting**.

## Stack

Static site. No build step, no framework, no dependencies.

- `index.html` — homepage (hero, services, about, 10-step process, contact)
- `faq.html` — FAQ page (native `<details>` accordion)
- `css/styles.css` — design tokens + all styles
- `js/script.js` — mobile nav toggle, scroll-reveal animations, contact form handler
- Fonts loaded from Google Fonts CDN (Fraunces, Inter Tight, IBM Plex Mono)

Design direction: editorial/trustworthy, blue-led palette (navy/ledger blue/sky/brass/sage/parchment), no purple, no gradients, no glassmorphism. Full rules in `CLAUDEwebdesign.md.txt`.

## Done

- Full homepage: hero, services list, about (with real facts: non-CPA firm, CA + WI, co-founder's 9 years of hands-on experience), team bios (Aaron MacCarley, Boris Sagal), 10-step process timeline, contact section
- Firm is newly founded — copy is careful to attribute the "9 years" / "10 years" experience to the co-founders individually (Aaron since 2017, Boris's decade as a paralegal), not to the firm's operating history
- FAQ page, content adapted from a competitor's FAQ page, linked in header + footer nav
- Responsive at 375 / 768 / 1024 / 1440
- Scroll-triggered fade-in animations throughout (respects `prefers-reduced-motion`)
- Mobile nav menu (working toggle)
- All em dashes removed from copy per user preference
- Pushed to GitHub: `macgnarly/maccarley-sagal-fiduciary-accounting` (public), GitHub Pages enabled, deploying from `main` on every push
- Favicon (`favicon.svg`), theme-color, Open Graph + Twitter Card meta tags on both pages, `robots.txt`, `sitemap.xml`
- Rebranded from placeholder "Fiduciary Accounting Pro" to **MacCarley & Sagal Fiduciary Accounting** (nav, footer, titles, meta tags, copyright)
- Repo renamed from `fiduciary-accounting-pro` to `maccarley-sagal-fiduciary-accounting` to match
- Custom domain connected: **macsagal.com** — `CNAME` file added, GitHub Pages custom domain set, DNS (4 apex A records + `www` CNAME) configured at Porkbun, and all baked-in URLs (`sitemap.xml`, `robots.txt`, OG/Twitter meta tags) updated to `https://macsagal.com/`
  - Live at `https://macsagal.com/` (may take a bit for DNS to fully propagate and for GitHub to issue the HTTPS certificate)

## To Do

### 1. Contact form — needs a form-as-a-service backend
`js/script.js` currently only shows a fake "thank you" message on submit. It does not send the inquiry anywhere. Before launch, wire it up:
- [ ] Pick a provider (Formspree, Getform, Web3Forms, etc. — all have free tiers and work fine on GitHub Pages)
- [ ] Point the `<form id="contactForm">` at the provider's endpoint (`action` + `method`, or their JS snippet)
- [ ] Update the submit handler in `js/script.js` to actually await the request before showing the success message, and show a real error state if it fails
- [ ] Test end-to-end that an inquiry actually lands in an inbox

### 2. Real content still needed
- [x] ~~Firm name~~ — now MacCarley & Sagal Fiduciary Accounting
- [ ] Real email / phone number (footer + contact section currently use placeholders)
- [x] ~~Real domain name~~ — macsagal.com connected
- [ ] Confirm the 9-years (Aaron) / 10-years (Boris) / CA+WI / non-CPA facts stay accurate at launch time
- [ ] Decide if/when team photos should replace the initials-circle placeholders in the About team section

### 3. Remaining nice-to-haves
- [ ] Open Graph share image (`og:image`) — skipped for now since there's no logo/name/branding finalized yet to put on one; add once real branding lands
- [ ] Analytics (GA4, Plausible, etc.) — not wired up; add once an account/provider is chosen
- [ ] Multi-size PNG/ICO favicon set + `apple-touch-icon` for older browsers and iOS home-screen icons (current favicon is SVG-only, which modern evergreen browsers render fine)
