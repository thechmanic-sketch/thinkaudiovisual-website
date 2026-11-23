# Think Audio Visual — Website Rebuild Plan

Planning document for rebuilding **thinkaudiovisual.co.za** in VS Code.
Source material: the current site, scraped into `site/` (text in `site/content.md`, images in `site/images/`).
Design inspiration: the cinematic, dark, full-screen style of huxleysaga.com (style only — no content or artwork from it).

---

## 1. Goals

1. **Get more quote requests**: phone, WhatsApp and the quote form one tap away on every page.
2. **Rank on Google for "[service] hire Durban"** and nearby KZN areas.
3. **Look premium**: dark cinematic design that shows off lighting and staging work.
4. **Fast on mobile**: most clients will search on their phones.

---

## 2. Brand (taken from the current logo)

> **Superseded by [DESIGN.md](DESIGN.md)**, the full design system. Final brand green is `#2EF906`, sampled from the logo. The table below is kept for history.

| Item | Value |
|---|---|
| Name | Think Audio Visual |
| Tagline | Reliable at all times |
| Sub-line | Sound · AV · Screens · Staging · Lighting |
| Colours | Black `#0B0B0C`, charcoal `#1A1A1D`, **signal green** `#3DDC2F` (check against the logo), white `#FFFFFF`, muted grey `#9A9A9F` |
| Accent idea | Small amounts of stage blue/violet `#5B6CFF` in gradients, matching the uplighting in the photos |
| Fonts (Google Fonts) | Headings: **Sora** or **Space Grotesk** · Body: **Inter** |
| Logo | Current file is only 300×66 px. **Redraw as SVG** (it's simple text plus a green line, so this is easy) |

---

## 3. Tech setup (VS Code on this PC)

**Recommended: [Astro](https://astro.build) + Tailwind CSS**
- Outputs plain, fast HTML, which is the best for SEO, with no heavy JavaScript.
- Built-in image optimisation: one large source image gives you WebP/AVIF at the right size automatically.
- The finished `dist/` folder can be uploaded to the current host (cPanel/FTP), or deployed free to Netlify/Vercel/Cloudflare Pages.

VS Code extensions: *Astro*, *Tailwind CSS IntelliSense*, *Prettier*, *Live Server* (optional).

```
project/
  src/
    pages/          ← one file per page (URLs below)
    components/     ← Header, Footer, Hero, ServiceCard, Gallery, QuoteForm, WhatsAppButton
    layouts/        ← BaseLayout with SEO tags + schema
    assets/images/  ← upscaled / new images (named per §7)
  public/           ← favicon, robots.txt, og-image.jpg, logo.svg
```

The alternative, if you want no build tools, is plain HTML/CSS/JS. It works, but you'd repeat the header and footer on every page and resize images by hand.

---

## 4. Sitemap & URLs

| # | Page | URL | Main keyword target |
|---|---|---|---|
| 1 | Home | `/` | audio visual hire Durban |
| 2 | Services (hub) | `/services/` | event equipment hire Durban |
| 3 | Sound hire | `/services/sound-hire-durban/` | sound hire Durban, PA system hire Durban |
| 4 | AV & screens | `/services/projector-screen-hire-durban/` | projector hire Durban, screen hire Durban |
| 5 | Staging | `/services/stage-hire-durban/` | stage hire Durban, podium hire |
| 6 | Lighting | `/services/event-lighting-hire-durban/` | event lighting hire Durban, uplighting |
| 7 | Conferences & meetings | `/events/conference-av-durban/` | conference AV Durban, conference microphones |
| 8 | Weddings & parties | `/events/wedding-sound-lighting-durban/` | wedding sound and lighting Durban, DJ hire |
| 9 | Churches | `/events/church-sound-hire/` | church sound system hire |
| 10 | Live events & shows | `/events/live-event-production-durban/` | live event production, fashion show stage |
| 11 | Gallery / Our work | `/our-work/` | — (supports all pages) |
| 12 | About | `/about/` | Think Audio Visual, T. Masango |
| 13 | Contact / Get a quote | `/contact/` | — |
| 14 | Privacy policy (POPIA) | `/privacy/` | — (required because the form collects personal data) |

**Phase 1 (launch):** pages 1–6, 11–14. **Phase 2:** event pages 7–10, then FAQ and blog posts.

**Redirects (important):** the old URLs need 301 redirects so existing Google rankings carry over:
`/index.html → /`, `/about.html → /about/`, `/services.html → /services/`, `/contacts.html → /contact/`.

---

## 5. Page-by-page plan

Image codes refer to the files in `site/images/`. ⬆ = upscale this file · ✨ = new image needed (AI-generated or a new photo; see §7).

### Global (every page)
- **Header:** logo SVG · nav (Services ▾, Events ▾, Our Work, About, Contact) · phone number · green **Get a Quote** button. Sticky, and turns solid black on scroll.
- **Floating WhatsApp button** (bottom right) with a pre-filled message: "Hi Think AV, I'd like a quote for an event on…"
- **Footer:** NAP block (Name, Address, Phone, exactly the same everywhere), email, Durban service areas list, quick links, socials, © *current year* (auto), "Privacy".

### 1. Home `/`
| Section | Content | Images |
|---|---|---|
| Hero (full screen) | H1 "Sound, Stage & Lighting Hire in Durban". Sub-line "Reliable at all times — conferences, weddings, churches and live events across KZN." Buttons: Get a Quote · WhatsApp us | Background video loop ✨ **or** slideshow of `slider-img3` ⬆ (light beams), `slider-img2` ⬆ (blue drape stage), `slider-img1` ⬆ (red/blue gala) with a dark gradient overlay |
| Trust bar | "10+ years · 500+ events (confirm) · KZN-wide · Same-team setup & strike" | Icons only |
| Services (4 cards) | Sound · AV & Screens · Staging · Lighting, each with 1 line and a link | Sound `page1-img9` ⬆ (mixer) · AV `page1-img3` ⬆ (Nedbank screens) · Staging `page3-img4` ⬆ (blue stage) · Lighting `page3-img5` ⬆ (light beams) |
| Events we power | 4 tiles: Conferences, Weddings & Parties, Churches, Live Events | `page3-img1` ⬆ (big conference crowd) · ✨ wedding reception · ✨ church/worship · `page3-img12` ⬆ (drum kit stage) |
| Featured work | 6-photo strip leading to "See our work" | `page3-img10`, `page1-img5`, `page1-img8`, `page3-img13`, `page3-img2`, `page1-img7` (all ⬆) |
| Why choose us | 3 core values reworded: Reliable · Fair pricing · On time | `page1-img4` ⬆ (mixer + hall) as side image |
| Testimonials | 3 quotes with name and event type (**collect from clients**) | Client logos strip (only with permission; `page1-img5` shows SABC and `page1-img3` shows Nedbank, so ask if these can be named as clients) |
| Quote CTA band | "Planning an event? Get a quote in 24 hours." Form shortcut + WhatsApp | ✨ wide dark stage-light texture |

### 2. Services hub `/services/`
- Hero: H1 "Event Equipment Hire in Durban": `slider-img1` ⬆
- 4 big alternating rows (image left/right), each with the full equipment list from the old site and a "View sound hire" link
  - **Sound:** PA Systems, Live Performances, Backline (Bands), DJ services, Audio Recording, Conference Mics
  - **AV & Screens:** Fastfold Screens, Daylight Screens, Data Projectors, Laptops, Presentation Aids, Video Recording & Projection
  - **Staging:** Performance Stage, Fashion Show Stage, Podium Raising, Main Table Stage, Podiums
  - **Lighting:** Stage Lights, Uplights, Décor Lights, Disco Lights
- "Packages" teaser: Conference Basic · Wedding · Live Show (contents and "from" prices if the owner agrees)
- Quote CTA

### 3–6. Individual service pages (same template)
1. Hero with H1 = keyword (e.g. "PA System & Sound Hire in Durban") and short intro
2. What's included / equipment list (with photos if available)
3. Ideal for… (event types, linking to event pages)
4. Gallery of 3–6 relevant photos
5. How it works: Enquire → Site check → Setup → Event → Strike
6. FAQ (4–6 questions, with FAQ schema)
7. Quote CTA

| Page | Hero | Gallery |
|---|---|---|
| Sound | `page1-img9` ⬆ | `page1-img4`, `page3-img3`, `page1-img6` (DJ), `page3-img12` (band), `page3-img13` (conference mics) |
| AV & Screens | `page1-img3` ⬆ | `page3-img1`, `page1-img2`, `page3-img2`, `page1-img5`, `page1-img8` |
| Staging | `page3-img4` ⬆ | `page3-img10` (fashion runway), `slider-img2`, ✨ podium close-up, ✨ main table stage |
| Lighting | `page3-img5` ⬆ | `slider-img3`, `slider-img1`, `page3-img12`, ✨ wedding uplighting, ✨ disco/party lights |

### 7–10. Event pages (Phase 2, same template as services)
| Page | Hero | Notes |
|---|---|---|
| Conferences | `page3-img1` ⬆ | `page3-img13` mics, `page1-img8` panel, `page1-img7` hall setup |
| Weddings & Parties | ✨ new | `page1-img6` DJ, ✨ reception uplighting, ✨ dance floor |
| Churches | ✨ new | `page1-img4`, `page3-img3`; mention regular Sunday/conference support |
| Live Events & Shows | `page3-img10` ⬆ | `page3-img12` band, `slider-img3`, `page1-img5` SABC event |

### 11. Our Work `/our-work/`
- Filter buttons: All · Conferences · Weddings · Churches · Live/Shows · Lighting
- Masonry grid with lightbox (full screen on click), and each photo captioned with event type and venue/area
- **Use only real photos here.** Never AI images in the portfolio (see §7).
- Unique real photos available now (15): `page1-img2`, `-img3`, `-img4`, `-img5`, `-img6`, `-img7`, `-img8`, `-img9`, `page3-img1`, `-img2`, `-img3`, `-img4`, `-img5`, `-img10`, `-img12`, `-img13` + 3 slider images
- *Duplicates to skip:* `page3-img6` = `page1-img6`, `page3-img7` = `page1-img3`, `page3-img8` = `page1-img4`, `page3-img9` = `page1-img2`, `page3-img11` = `page1-img7`

### 12. About `/about/`
| Section | Content | Images |
|---|---|---|
| Hero | "10+ years powering Durban's events" | `slider-img2` ⬆ |
| Our story | Timeline: founding year → first big event → growth → today (**get dates from Mr Masango**) | — |
| Meet the director | Mr T. Masango, short bio and quote | ✨ **real portrait photo needed** (don't use AI for a real person) |
| Mission | The 3 mission points (reliable service, right equipment advice, good relationships) | — |
| Core values | Integrity · Cost reduction · Quality · On time (rewritten, typos fixed) | Icons |
| Team / crew at work | Behind-the-scenes setup shots | ✨ real photos of the crew setting up |
| CTA | Get a quote | — |

### 13. Contact / Get a Quote `/contact/`
- Quote form: Name · Phone · Email · Event type (dropdown) · Event date · Venue/area · Guest count · Services needed (checkboxes) · Message · POPIA consent tick
- Form handling: Netlify Forms / Formspree / Web3Forms (free tiers), sending to admin@thinkaudiovisual.co.za
- Contact block: 78 Carnforth Avenue, Bonela, Durban, 4091 · Cell +27 83 418 0085 · Tel +27 31 8111 311 · email · WhatsApp
- Embedded Google Map
- Business hours (**confirm**)
- Replace the old world map `page1-img10` with the real Google Map

---

## 6. SEO plan

### 6.1 Keyword groups (local intent)
Check search volumes in Google Keyword Planner or Ubersuggest before finalising.

| Group | Keywords |
|---|---|
| Core | audio visual hire Durban · AV company Durban · event equipment hire Durban |
| Sound | sound hire Durban · PA system hire Durban · speaker hire Durban · microphone hire Durban · DJ hire Durban |
| AV | projector hire Durban · screen hire Durban · LED/TV screen hire Durban · conference AV Durban |
| Stage | stage hire Durban · podium hire Durban · mobile stage hire KZN |
| Lighting | event lighting hire Durban · uplighting hire Durban · wedding lighting Durban · disco lights hire |
| Events | wedding sound and lighting Durban · church sound system hire · conference equipment hire Durban |
| Areas (use in copy and footer, not spammy pages) | Durban CBD, Umhlanga, Ballito, Pinetown, Westville, Chatsworth, Umlazi, Pietermaritzburg, KZN South Coast |

### 6.2 On-page rules (every page)
- **One H1** containing the main keyword plus "Durban"
- `<title>` 50–60 chars, e.g. `Sound & PA System Hire Durban | Think Audio Visual`
- Meta description 140–160 chars with a call to action, e.g. "Professional PA systems, mics and DJ setups for events in Durban & KZN. 10+ years' experience. Get a free quote today."
- Clean URLs (see §4), internal links between related service and event pages
- Images: descriptive file names + **alt text** (e.g. `alt="Blue-lit stage with podium for a corporate awards evening in Durban"`), WebP, lazy-loaded, width/height set
- Open Graph and Twitter tags + `og-image.jpg` (1200×630) for WhatsApp/Facebook link previews
- Canonical tag on every page

### 6.3 Draft titles & descriptions
| Page | Title | Meta description |
|---|---|---|
| Home | Audio Visual, Sound, Stage & Lighting Hire Durban \| Think AV | Durban's reliable AV partner for conferences, weddings, churches & live events. Sound, screens, staging & lighting. Get a free quote. |
| Services | Event Equipment Hire Durban \| Sound, AV, Stage, Lighting | Hire PA systems, projectors, screens, stages and event lighting in Durban & KZN, with professional setup included. Request a quote today. |
| Sound | Sound & PA System Hire Durban \| Think Audio Visual | PA systems, conference mics, DJ setups and band backline for events in Durban. 10+ years' experience. Get a free quote. |
| AV | Projector & Screen Hire Durban \| Think Audio Visual | Data projectors, fastfold & daylight screens, laptops and video recording for conferences and events in Durban. Book now. |
| Staging | Stage & Podium Hire Durban \| Think Audio Visual | Performance, fashion-show and main-table stages plus podiums for events across Durban & KZN. Professional setup. Get a quote. |
| Lighting | Event Lighting & Uplighting Hire Durban \| Think AV | Stage lights, uplighting, décor and disco lights to transform your event in Durban. See our work and request a quote. |
| Our Work | Our Work: Event AV Setups in Durban \| Think Audio Visual | Photos of our conference, wedding, church and live-event setups across Durban and KZN. |
| About | About Think Audio Visual: Durban AV Company Since 20XX | Led by director T. Masango, Think AV has 10+ years' experience delivering reliable sound, AV, staging and lighting. |
| Contact | Get a Quote \| Think Audio Visual Durban | Call +27 83 418 0085, WhatsApp us, or send your event details for a fast quote. Based in Bonela, Durban. |

### 6.4 Structured data (JSON-LD in the layout)
- `LocalBusiness` (name, logo, address, geo, phone, email, opening hours, `areaServed`: Durban, KZN, `sameAs`: social links)
- `Service` on each service page
- `FAQPage` on pages with FAQs
- `BreadcrumbList` on inner pages

### 6.5 Off-page / local SEO (very important for a Durban service business)
1. **Google Business Profile**: claim or verify it, category "Audio visual equipment rental service", add all photos, services and hours, and post monthly. Ask every client for a Google review (send a short review link by WhatsApp after each event).
2. **NAP consistency**: the same name, address and phone on the site, GBP, Facebook and directories.
3. **Directories:** Yellow Pages SA (yep.co.za), Snupit, Cylex, Brabys, wedding directories (e.g. Wedding Concepts, Confetti), and Durban venue supplier lists.
4. **Venue partnerships**: ask the venues you work at to list you as a preferred supplier and link to the site.

### 6.6 Technical
- `sitemap.xml` (Astro plugin `@astrojs/sitemap`) + `robots.txt`
- 301 redirects from the old `.html` URLs (§4)
- HTTPS, and pick one version (`https://thinkaudiovisual.co.za` with or without www) with the other redirecting
- Google Search Console + Google Analytics 4 (or privacy-friendly Plausible). Submit the sitemap.
- Target Lighthouse **90+** on mobile (compressed images, minimal JS, fonts with `display=swap`)
- Cookie/POPIA notice if analytics are used

### 6.7 Content ideas (blog / FAQ, Phase 2)
- "How much does it cost to hire a sound system in Durban?"
- "Projector vs LED screen: which is right for your conference?"
- "Wedding lighting ideas for Durban venues"
- "Checklist: AV for a church conference"
- Case studies: one post per big event with photos (great for both SEO and trust)

---

## 7. Image plan

### 7.1 What we have
- **Content photos are tiny**: 200×137 px (gallery) and 920×347 px (slider). They look blurry on modern screens.
- Logo: 300×66 px PNG. Recreate as SVG.

### 7.2 Step 1: ask for originals first (best quality)
The 200 px images were almost certainly cut down from phone or camera photos. **Ask Mr Masango for the original files** (WhatsApp/Google Photos/Drive). Originals beat any upscale.

### 7.3 Step 2: upscale what we must keep
- Free tool on Windows: **Upscayl** (Real-ESRGAN), or online: Topaz Gigapixel / Let's Enhance / Higgsfield.
- 200×137 → **4×** = 800×548: fine for cards and gallery thumbnails. **Not** good enough for full-screen heroes.
- 920×347 slider → **3×** ≈ 2760×1041: usable as hero backgrounds under a dark overlay.
- Check faces and logos after upscaling (AI can warp text and faces). Avoid tight crops of people.
- Save originals in `assets/images/originals/`, upscaled in `assets/images/upscaled/`.

**Upscale priority list:** `slider-img1`, `slider-img2`, `slider-img3`, `page3-img5`, `page3-img4`, `page1-img9`, `page1-img3`, `page3-img1`, `page3-img10`, `page3-img12`, `page3-img13`, `page1-img4`, `page1-img6`, `page1-img5`, `page1-img8`, `page3-img2`, `page3-img3`, `page1-img2`, `page1-img7`

### 7.4 Step 3: AI-generated "similar" images (where we have gaps)
**Honesty rule:** use AI images only for **mood, backgrounds and generic service illustrations**, never in "Our Work" or presented as a real past event. Clients book on trust, and fake portfolio shots can backfire (and can mislead under consumer law). Real portrait of the director only.

| ✨ Needed image | Used on | Prompt starting point |
|---|---|---|
| Hero video / still | Home hero | "Cinematic wide shot of a dark event hall, beams of blue and violet stage light cutting through haze, professional line-array speakers on truss, empty stage, moody, 16:9, photorealistic" |
| Wedding reception | Home tiles, Weddings page | "Elegant wedding reception in a South African venue, warm amber uplighting on white draped walls, round tables, small DJ booth at the side, evening, photorealistic" |
| Church / worship | Home tiles, Churches page | "Modern church auditorium during worship, stage with musicians, soft blue and white stage wash, PA speakers either side, audience silhouettes, photorealistic" |
| Dance floor / disco | Lighting, Weddings | "Party dance floor with moving-head disco lights, colourful beams, haze, crowd silhouettes, photorealistic" |
| Podium close-up | Staging | "Black lectern podium with gooseneck microphone on a carpeted stage, blue backdrop, corporate event, shallow depth of field" |
| Main table stage | Staging | "Raised main-table stage with white linen and floral centrepieces, corporate gala dinner, soft uplighting" |
| Equipment flat-lays (4) | Service cards, icons | "Top-down studio shot of [wireless microphones / a digital mixing console / a data projector and clicker / LED par lights] on matte black background, green rim light" |
| Texture backgrounds | CTA bands | "Abstract dark background with soft green and blue light leaks and haze, minimal, 21:9" |
| OG share image | Social previews | Designed in Canva/Figma: logo + tagline over a darkened `slider-img3` |

Tools: Higgsfield, Midjourney, Adobe Firefly (commercially safe), or ChatGPT/GPT-image. Keep **one consistent style**: dark, haze, blue/violet light, with a touch of brand green.

### 7.5 Step 4: new real photos (highest value)
Next 2–3 events: take photos and short videos (phone is fine, landscape, during and after setup):
- Wide shots of the full room with lights on
- Close-ups of gear (mixer, mics, lights)
- Crew setting up (for About)
- 10–15 s vertical clips for Instagram/TikTok and a horizontal clip for the home hero video
- Portrait of Mr Masango

### 7.6 File naming & export
- Name: `stage-hire-durban-blue-drape-podium.webp` (not `page3-img4.jpg`)
- Export: WebP (or AVIF), hero 2400 px wide, cards 1200 px, thumbnails 600 px, quality ~75
- Astro's `<Image>` component will create the sizes automatically if you give it the large file

---

## 8. Content to collect from the owner (checklist)

- [ ] Original high-res photos (and any videos)
- [ ] Logo source file (AI/EPS/PDF), or approval to redraw as SVG
- [ ] Year the business started + key milestones for the timeline
- [ ] Director photo + 2–3 line bio
- [ ] 3–6 client testimonials (name, event type, permission)
- [ ] Permission to show client logos (Nedbank, SABC, others)
- [ ] Notable venues worked at in Durban/KZN
- [ ] Areas served and travel policy
- [ ] Business hours
- [ ] Package contents and "from" prices (optional but converts well)
- [ ] Social media links (Facebook, Instagram, etc.)
- [ ] WhatsApp number (same as cell?)
- [ ] Access to the domain/hosting and Google Business Profile

---

## 9. Build order (phases)

1. **Setup:** install Node.js LTS + VS Code extensions, `npm create astro@latest`, add Tailwind, set up the brand colours and fonts
2. **Assets:** SVG logo, upscale the priority images, rename and export, generate the ✨ images
3. **Layout:** BaseLayout (SEO tags, schema), Header, Footer, WhatsApp button
4. **Pages Phase 1:** Home → Services hub → 4 service pages → Our Work → About → Contact → Privacy
5. **SEO:** titles/meta, alt text, sitemap, robots, redirects, schema check (Google Rich Results Test)
6. **Test:** mobile, Lighthouse, form delivery, links
7. **Launch:** deploy, switch DNS/upload, submit to Search Console, update Google Business Profile with the new site
8. **Phase 2:** event pages, FAQ, blog/case studies, packages page

---

## 10. Fixes vs the old site (for reference)
- All gallery and value links pointed to `#` (dead), so they now link to real pages or a lightbox
- © 2017 is now an auto-updating year
- Typos fixed: "specializes **in**", "**experienced** owner-director", "Our service**s** are", "fill in", "Web Design by by"
- Contact details were only on one page and are now in the header and footer everywhere
- Images had no alt text and are now fully described
- Not mobile-friendly, now mobile-first
- No working form handling and no POPIA notice, both now added
