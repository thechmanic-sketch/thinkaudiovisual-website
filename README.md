# Think Audio Visual — website

New website for **Think Audio Visual**, a sound, AV, staging and lighting hire company in Durban, KwaZulu-Natal.
Replaces the 2017 site at thinkaudiovisual.co.za.

Built with [Astro](https://astro.build) + Tailwind CSS. Static output, so it can be hosted on any web host (cPanel/FTP) or Netlify/Vercel/Cloudflare Pages.

## Folders

| Folder | What's in it |
|---|---|
| `web/` | The website (Astro project) |
| `site/` | Text and images scraped from the old 2017 site (reference only) |
| `SITE-PLAN.md` | Pages, sections, SEO plan, image plan |
| `DESIGN.md` | Design system: colours, fonts, components, motion |
| `HIGGSFIELD-PROMPTS.md` | Prompts used to generate the AI imagery and hero video |
| `assets/` | High-res masters. **Not in Git** (too large); kept locally on the project drive |

## Run it locally

Requires [Node.js](https://nodejs.org) 22 or newer.

```bash
cd web
npm install
npm run dev        # preview at http://localhost:4321
npm run build      # production files in web/dist/
```

## Before launch

- Copy `web/.env.example` to `web/.env` and add the Web3Forms key so the quote form sends email.
- Search the code for `TODO(owner)` — founding year, testimonials, social links, hours, logo SVG, FAQ answers.
- Upload `web/dist/` to the host (includes `.htaccess` with redirects from the old `.html` URLs).
- Submit `https://thinkaudiovisual.co.za/sitemap-index.xml` in Google Search Console.

## Image rules

- **Our Work** gallery = real event photos only (`web/src/assets/images/work/`, named `category--description.jpg`).
- AI-generated images are for heroes, service cards and backgrounds only.
