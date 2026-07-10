# Project Status

Marketing site for a fiduciary accounting practice: **MacCarley & Sagal Fiduciary Accounting**.

## Stack

Static site. No build step, no framework, no dependencies.

- `index.html` — homepage (hero, services, about, 10-step process, contact)
- `faq.html` — FAQ page (native `<details>` accordion)
- `privacy.html`, `terms.html` — legal pages, linked from the footer on every page
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
- Contact form wired up to Formspree (`https://formspree.io/f/mykqqzzz`). `script.js` now does a real `fetch()` submit with a working success state, a real error state (shows Formspree's returned error message), and a disabled "Sending..." state on the button while in flight. Verified with mocked success/error responses via Playwright since a real submission wasn't sent during testing.
- Privacy Policy and Terms & Conditions pages added, modeled after fasllc.com's structure but rewritten to describe what this site actually does (Formspree-processed contact form, no cookies/analytics, GitHub Pages + Google Fonts hosting). Linked from the footer on all pages, added to `sitemap.xml`.
  - **Not legal advice / not attorney-reviewed** — these are reasonable drafts for a small firm's marketing site, but should get a real legal review before being relied on, especially given the fiduciary/legal-adjacent subject matter.

## To Do

### 1. Real content still needed
- [x] ~~Firm name~~ — now MacCarley & Sagal Fiduciary Accounting
- [ ] Real email / phone number (footer + contact section currently use placeholders)
- [x] ~~Real domain name~~ — macsagal.com connected
- [ ] Confirm the 9-years (Aaron) / 10-years (Boris) / CA+WI / non-CPA facts stay accurate at launch time
- [ ] Decide if/when team photos should replace the initials-circle placeholders in the About team section

### 2. Remaining nice-to-haves
- [ ] Open Graph share image (`og:image`) — skipped for now since there's no logo/name/branding finalized yet to put on one; add once real branding lands
- [ ] Analytics (GA4, Plausible, etc.) — not wired up; add once an account/provider is chosen
- [ ] Multi-size PNG/ICO favicon set + `apple-touch-icon` for older browsers and iOS home-screen icons (current favicon is SVG-only, which modern evergreen browsers render fine)
