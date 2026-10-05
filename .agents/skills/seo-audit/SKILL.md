---
name: seo-audit
description: Audit any web-facing GitHub repository for Google search visibility and implement the missing pieces. Use when the user asks to "make a site rank on Google", "do SEO", "audit SEO", "improve search visibility", "add robots.txt/sitemap", "add meta tags/structured data", or prepare a project to be crawled, indexed, and ranked.
---

# SEO / Search-Visibility Audit & Implementation

Apply this skill to any repository that serves web pages. First discover the stack, then
audit, then implement. Never guess — inspect the repo.

## 0. Discover the project (do not guess)

Report a short **Project Profile**:

- Framework / stack (Next.js, Astro, Nuxt, React SPA, Django, Rails, WordPress, plain HTML, docs generator)
- Rendering mode: SSG, SSR, or CSR/SPA
- Where routes/pages are defined; where `<head>`/layout/metadata live
- Build + run commands (from `package.json`, `pyproject.toml`, `Makefile`, CI)
- Deployment target (Vercel, Netlify, GitHub Pages, Cloudflare, VPS)
- Canonical base URL / domain (env, config, README)
- Existing SEO assets: `robots.txt`, `sitemap.xml`, meta tags, structured data, analytics

If a fact is unknown, say so — never invent it.

## 1. Technical foundation (must pass)

- [ ] Correct HTTP status codes: 200 real, 301 moved, 404 gone
- [ ] Crawlable: no accidental `noindex`, no `Disallow` on real content
- [ ] `robots.txt` valid and references the sitemap
- [ ] `sitemap.xml` lists canonical URLs
- [ ] HTTPS everywhere; HTTP→HTTPS redirect; no mixed content
- [ ] Mobile-first: responsive, viewport meta, tap targets, readable text
- [ ] Core Web Vitals: LCP, INP, CLS optimized
- [ ] Canonical tags; consistent `www`/trailing-slash
- [ ] Clean URL structure (slugs)
- [ ] `hreflang` if multilingual
- [ ] SPA/CSR apps flagged for SSR/SSG/prerendering (Google may miss client-rendered content)

## 2. On-page SEO (per page)

- [ ] Unique `<title>` ~50–60 chars, keyword near front
- [ ] Unique meta description ~150–160 chars
- [ ] One H1; logical H2/H3 hierarchy
- [ ] Open Graph + Twitter card tags
- [ ] JSON-LD structured data (Article, Product, FAQ, BreadcrumbList, Organization, WebSite)
- [ ] Descriptive image `alt`; decorative images `alt=""`
- [ ] Internal links with descriptive anchors
- [ ] Compressed images in WebP/AVIF with width/height set
- [ ] Content matches search intent; original and useful

## 3. Content & E-E-A-T

- [ ] About page, contact info, clear ownership/author
- [ ] Author bios / credentials
- [ ] Published + updated dates, cited sources
- [ ] Topical depth; no thin/duplicate/scraped content

## 4. Off-page / authority

- [ ] Recommend backlink strategy (directories, partnerships, PR, link-earning content)
- [ ] Warn against link farms / paid link schemes
- [ ] Brand consistency; consistent NAP for local businesses

## 5. Accounts & measurement

- [ ] Google Search Console: verify, submit sitemap, check coverage
- [ ] Google Analytics (GA4) or equivalent
- [ ] Bing Webmaster Tools
- [ ] Google Business Profile for local businesses

## 6. Deliverables

1. **Audit report** — table `Item | Status | Evidence (file:line) | Fix`
2. **Implementation** — edit the repo directly:
   - Add/generate `robots.txt` and `sitemap.xml` (dynamic where possible)
   - Add reusable metadata/head config (title, description, OG, canonical, JSON-LD)
   - Add viewport + hreflang where missing
   - Optimize images/fonts; remove render-blocking resources
3. **Verification** — run build/lint/tests; curl a built page to confirm tags render
4. **PR** — one focused pull request; never push to `main`/`master` directly

## 7. Rules

- Minimal, idiomatic changes for the stack; no new deps unless justified
- Never invent metrics, rankings, or backlinks
- Don't add data-leaking analytics without explicit approval
- Ask before deploying, changing the production domain, or submitting to search engines
- Cite `file:line` evidence for every finding

## Placeholders

| Placeholder | Meaning | Example |
|---|---|---|
| `<BASE_URL>` | Canonical production domain | `https://example.com` |
| `<STACK>` | Framework to force | `Next.js 14 App Router` |
| `<GOAL>` | Primary business goal | `rank for "invoice software"` |
| `<LOCALE>` | Language/region | `en-US`, `en-US + es-ES` |
