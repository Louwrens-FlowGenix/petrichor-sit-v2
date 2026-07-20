# Petrichor Consulting — website v2

Next.js 16 (App Router) + React 19 + Tailwind CSS. Statically generated pages, two
serverless API routes (contact form via Resend, live Google reviews via the
Places API). Built to deploy on Vercel.

## What changed vs the old Lovable build

- Phone `tel:` link corrected to +27776004989 everywhere (single source of truth in `lib/site.ts`)
- LinkedIn corrected to `linkedin.com/company/petrichor-consult/`; Instagram and Facebook added
- "Hundreds of clients" contradiction removed — 50+ used consistently
- Static testimonials removed, replaced with a live Google reviews carousel (auto-rotating; hides itself until your Google Business Profile is connected)
- "Interactive map coming soon" deleted (a remote-first firm doesn't need a map)
- Terms of Service page created (footer link no longer dead); privacy policy rebuilt for POPIA
- Brand assets use `/images/logo-mark.png` and the mark-plus-text treatment (no more `lovable-uploads`)
- Floating WhatsApp button with pre-filled message
- Real multi-page structure with per-page SEO (6 service pages), sitemap.xml, robots.txt, JSON-LD structured data
- Founder section with photo and credentials
- New design system: wet-stone greys, deep green, single ochre accent; Newsreader / Archivo / Spline Sans Mono type pairing; "rain lines" hero motif

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

## Deploy (replacing the current site)

1. Create a new GitHub repo (e.g. `petrichor-site-v2`) and push this folder,
   or replace the contents of the existing repo on a branch and merge when happy.
2. In Vercel: import the repo (framework auto-detected as Next.js), add the
   environment variables from `.env.example`, and assign the
   `petrichor-consult.com` domain to the new project.
3. **Domain redirect:** in Vercel → Project → Settings → Domains, add both
   `petrichor-consult.com` and `www.petrichor-consult.com`, and set the
   non-www as primary. Vercel then 308-redirects www → apex automatically.

## Assets you must replace (placeholders are in place so the build works)

| File | Replace with (from your Google Drive) |
|---|---|
| `public/images/logo-mark.png` | ✅ Installed — real "P" mark (header home button, footer, schema logo) |
| `public/logos/xero.png` | ✅ Installed — official `xero-logo-hires-RGB.png` |
| `public/logos/xero-l2-badge.png` | ✅ Installed — official L2 Certified Professional badge (founder section; remove if the certification ever lapses) |
| *(optional)* `public/images/logo.png` | Full Petrichor wordmark lockup, if you want it in place of the mark+text pairing — upload and swap in `components/Footer.tsx` |
| `public/logos/simplepay.svg` | Official SimplePay logo (request partner assets) |
| `public/logos/caseware.svg` | Official CaseWare logo (CaseWare Africa partner assets) |

Tip: if the real PNGs have white backgrounds, export/convert to transparent
PNG first so they sit cleanly on the tinted sections.

Trademark note: use the vendors' official files and follow their brand
guidelines; don't redraw or recolour their marks. "We work in" phrasing (used
on the site) states a fact rather than implying endorsement.

## Environment variables

See `.env.example`. Two features degrade gracefully if unconfigured:
- **Contact form** returns a clear "email us directly" error until Resend is set up.
- **Google reviews** section renders nothing until the Places API key + Place ID are set.

### Google reviews setup (one-time, ~30 min)

1. Claim/create your **Google Business Profile** at business.google.com —
   register as a *service-area business* (address hidden, service area =
   Western Cape or South Africa). This is also the single highest-ROI SEO
   action available to you.
2. In **Google Cloud Console**: create a project, enable **Places API (New)**,
   create an API key, restrict the key to that API. Billing must be enabled
   but this usage sits comfortably in the free tier (the site caches the
   response for an hour, so ~720 calls/month worst case).
3. Find your **Place ID** (Google's Place ID Finder) once your profile is live.
4. Add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` in Vercel env vars and redeploy.
5. Ask 3–5 genuine clients for Google reviews. Note: Google's API returns a
   maximum of 5 reviews — the carousel rotates through what Google provides.

## SEO launch checklist (do these the week you deploy)

1. **Google Search Console**: verify the domain (DNS TXT record), submit
   `https://petrichor-consult.com/sitemap.xml`, and request indexing of the
   homepage and the six `/services/*` pages.
2. **Google Business Profile**: complete every field (services, hours,
   description, photos), and start collecting reviews.
3. **Bing Webmaster Tools**: import from Search Console (two minutes, free traffic).
4. **Consistency (NAP)**: make sure name, phone (+27 77 600 4989) and
   Somerset West appear identically on LinkedIn, Instagram, Facebook and any
   directories.
5. **Facebook**: claim a username so the URL becomes
   `facebook.com/petrichorconsulting` instead of `profile.php?id=…`, then
   update `lib/site.ts`.
6. **Content cadence**: one genuinely useful article a month (provisional tax
   deadlines, VAT registration, CIPC annual returns, ETI). Add an `/insights`
   section when you're ready — say the word and it can be scaffolded onto
   this codebase. This is the only lever that moves non-branded rankings.
7. Check Core Web Vitals after deploy: pagespeed.web.dev — this build should
   score green out of the box (static pages, optimised images, no tracking scripts).

## A note on your credentials

The site displays your designations — Professional Accountant (SA), SAIPA;
Registered Tax Practitioner — with a line that registration details are
verifiable on request. Your membership and PR numbers are deliberately **not**
rendered, per your preference. For what it's worth: displaying them is common
practice and both registers are publicly searchable anyway, so the
incremental fraud risk of showing them is low — but "verifiable on request"
costs you nothing in credibility. If you change your mind, add the numbers in
`lib/site.ts` → `founder.credentials`.

## Where things live

```
lib/site.ts          → every contact detail, link, stat (edit once, updates everywhere)
lib/services.ts      → all service page copy, SEO meta, FAQs
app/page.tsx         → homepage sections
app/services/[slug]  → service page template
components/          → header, footer, WhatsApp button, reviews, form
```
