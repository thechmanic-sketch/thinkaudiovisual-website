# Think Audio Visual — Design System (DESIGN.md)

> **A dark event hall seconds before the show.** The page is a black-box stage, the photography and the flyby video are the lights, and the interface stays as quiet as the crew in black.

**Theme:** dark only
**Built for:** Astro + Tailwind (see SITE-PLAN.md). The tokens below are CSS variables, so they also work in plain CSS.

### Inspiration (Refero Styles, used for principles only, nothing copied)
| Reference | What we took |
|---|---|
| Elektron, "hardware control panel at midnight" | Near-black canvas, square 0px corners, flat UI with no gradients or shadows, and **LCD-style mono labels** for technical specs. That fits an equipment-hire company. |
| SoundCloud, "concert darkroom with neon blue signal" | Photos carry the colour while the chrome stays invisible. **One cool blue accent**. Hairline borders instead of shadows. |
| MasterClass, "black-box stage lit by spotlights" | **Condensed, tightly stacked display headlines** for cinematic presence. A single hot accent for the main button. Cards as dark plates with thin borders. |

Our own twist: the spotlight colour is **Think AV's logo green** (`#2EF906`, sampled from the logo), with **stage blue** taken from the lighting in the photos and flyby video.

---

## 1. Principles
1. **Content is the light.** Video and photos do the emotional work. UI chrome is black, white and grey.
2. **One spotlight.** Signal Green is used only for the main action (Get a Quote, WhatsApp, Submit). It never appears on decoration.
3. **Built like gear.** Square edges, hairlines, mono spec labels. The page should feel like a flight case: solid, functional, reliable. That backs up the tagline "Reliable at all times."
4. **Cinematic headlines, calm body.** Big condensed caps for moments, and a plain readable sans for everything else.
5. **Fast on a phone in Durban.** Every effect must degrade gracefully on mobile data.

---

## 2. Colour tokens

| Name | Value | Token | Role |
|---|---|---|---|
| Stage Black | `#0B0C0E` | `--color-stage` | Page canvas, behind everything |
| Flight Case | `#141518` | `--color-case` | Raised surfaces: cards, header on scroll, footer |
| Rack | `#1E2024` | `--color-rack` | Inputs, nested panels, hover plate |
| Cable | `#2C2F35` | `--color-cable` | Hairline borders and dividers (1px) |
| Haze | `#8C9099` | `--color-haze` | Muted text, captions, placeholders |
| Platinum | `#ECEDF0` | `--color-platinum` | Primary text and icons |
| White | `#FFFFFF` | `--color-white` | Display headlines and active states only |
| **Signal Green** | `#2EF906` | `--color-signal` | **Primary CTA only**: button fill, focus ring, WhatsApp button, active nav underline |
| Signal Green Dim | `#22B805` | `--color-signal-dim` | CTA hover / pressed |
| Stage Blue | `#5B8CFF` | `--color-stageblue` | Secondary accent: links, small icons, glow in hero gradients. Never a button fill. |
| Beam Violet | `#7A5CFF` | `--color-violet` | Gradient partner to Stage Blue in hero/CTA backgrounds only |

**Text on Signal Green is always Stage Black** (`#0B0C0E`); white on bright green fails contrast.
Overlays on photos and video use `linear-gradient(180deg, rgba(11,12,14,.35) 0%, rgba(11,12,14,.85) 100%)`.

---

## 3. Typography

| Role | Font (free, Google Fonts) | Paid upgrade | Weights |
|---|---|---|---|
| Display: hero and section openers | **Bebas Neue** (condensed caps) | Druk Condensed / Söhne Schmal | 400 |
| Headings and UI | **Space Grotesk** | Neue Machina | 500, 600 |
| Body | **Inter** | Neue Montreal | 400, 500 |
| Spec labels (LCD accent) | **JetBrains Mono** | — | 500 |

### Type scale (desktop → mobile)
| Role | Font | Size | Line height | Tracking | Token |
|---|---|---|---|---|---|
| display-xl | Bebas Neue | 112px → 64px | 0.88 | 0.01em | `--text-display-xl` |
| display | Bebas Neue | 80px → 48px | 0.90 | 0.01em | `--text-display` |
| h2 | Space Grotesk 600 | 40px → 30px | 1.10 | -0.01em | `--text-h2` |
| h3 | Space Grotesk 500 | 24px → 21px | 1.25 | 0 | `--text-h3` |
| body-lg | Inter 400 | 19px → 17px | 1.55 | 0 | `--text-body-lg` |
| body | Inter 400 | 16px | 1.6 | 0 | `--text-body` |
| small | Inter 400 | 14px | 1.5 | 0.01em | `--text-small` |
| spec | JetBrains Mono 500 | 12px | 1.4 | 0.08em, UPPERCASE | `--text-spec` |

Rules:
- Bebas Neue only in **uppercase** and only for ≤ 6 words ("SOUND. STAGE. LIGHT.", "RELIABLE AT ALL TIMES").
- **Spec labels** are the signature detail: `PA SYSTEMS · 12 CH` or `EST. 20XX · DURBAN`. Use them as eyebrows above headings, on gallery captions and on equipment lists. Don't overuse them, at most 1 per block.
- Body max width 65ch.

---

## 4. Spacing, shape, layout

- **Base unit:** 4px · Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- **Radius:** `0px` everywhere (buttons, cards, images, tags). Exceptions: inputs `4px`, WhatsApp floating button fully round.
- **Borders:** 1px `--color-cable`. **No drop shadows.** Depth comes from surface steps (Stage → Case → Rack) and light in imagery.
- **Max width:** 1280px content, full-bleed for hero, video and gallery bands
- **Section gap:** 96px desktop / 64px mobile
- **Grid:** 12 columns, 24px gutter desktop · 4 columns, 16px gutter mobile (16px side margin)

---

## 5. Components

### Header
- Transparent over the hero, switching to `--color-case` with a bottom hairline after 80px of scroll. 72px tall (64px mobile).
- Left: logo (SVG, white wordmark + green line). Centre: Services · Events · Our Work · About. Right: phone number in `spec` style + **Get a Quote** primary button.
- Mobile: logo + quote button + menu icon. The menu opens a full-screen Stage Black panel with display-size links.

### Buttons
| Type | Style |
|---|---|
| Primary | Fill `--color-signal`, text Stage Black, Space Grotesk 600 15px uppercase, 0.04em tracking, padding 16px 28px, 0 radius. Hover: `--color-signal-dim`. Focus: 2px Signal ring offset 3px. |
| Secondary | Transparent, 1px Platinum border, Platinum text. Hover: Platinum fill, Stage Black text. |
| Text link | Stage Blue, underline on hover, arrow `→` slides 4px |

### Hero: descent flyby
- Full viewport height. Background: `assets/video/hero-flyby-web.mp4` / `.webm`, muted, autoplay, loop, `playsinline`, poster `hero-flyby-poster.jpg`.
- **Scroll mode (desktop):** a sticky 300vh section where scroll position scrubs `hero-flyby-scrub.mp4` from 0 → 10 s. Content reveals in step with the flyby:
  - 0–30%: "SOUND." (truss/speaker)
  - 30–60%: "STAGE." (over the tables and sound desk)
  - 60–100%: "LIGHT." The beams fire and the **logo + headline lock onto the blank screen**, with Get a Quote and WhatsApp buttons below.
- **Mobile / reduced motion / Save-Data:** no scrubbing. Show the poster or a short autoplay loop with the final headline only.
- H1 (visible text for SEO): "Sound, Stage & Lighting Hire in Durban"

### Service card
- Image on top (16:10, 0 radius) with a dark gradient at the bottom, plus a `spec` eyebrow (`01 / SOUND`), an H3 title, a 1-line description and a text link.
- Card: `--color-case` background, 1px Cable border. Hover: border turns Platinum and the image scales 1.03 over 400ms.

### Spec list (equipment)
- Two columns, each row: item name (body) ··· a mono tag on the right (`AVAILABLE`, `12 CH`, `4×3 M`). Rows divided by hairlines, like a rider sheet.

### Gallery ("Our Work")
- Filter tabs as spec labels (`ALL · CONFERENCE · WEDDING · CHURCH · LIVE`). The active one is Platinum text with a 2px Signal underline.
- Masonry grid with 4px gaps and a lightbox on click. Captions use `spec` style: `CONFERENCE · DURBAN ICC` (real events only).

### Testimonial
- Large quote in Space Grotesk 500 28px, name and event in `spec` style, no card. A hairline sits above.

### Quote form
- Inputs: `--color-rack` fill, 1px Cable border, 4px radius, 48px tall, Platinum text, Haze placeholder. Focus: border Signal Green.
- Labels above inputs (Inter 500 14px). Error text `#FF5A5A`.
- Submit is a full-width primary button on mobile.

### WhatsApp floating button
- 56px circle, Signal Green fill, black WhatsApp glyph, 24px from the bottom-right corner. Hidden while the hero CTA is visible, so there aren't two calls to action at once.

### Footer
- `--color-case`. Columns: logo + tagline · Services · Areas served · Contact (NAP). Bottom row: © {current year} · Privacy · `spec` "BUILT IN DURBAN".

---

## 6. Imagery & video
- **Mood:** dark rooms, haze, blue/violet beams, warm practical light on tables. Avoid bright daylight photos as heroes.
- **Treatment:** slight contrast boost and the shared dark gradient overlay so old and new photos match.
- **Real vs AI:** AI images only for heroes, backgrounds and service illustrations. **"Our Work" shows real photos only.**
- **Formats:** WebP/AVIF, with Astro `<Image>` generating sizes. Video in MP4 (H.264) + WebM, no audio track.

---

## 7. Motion
- Easing: `cubic-bezier(.2,.7,.2,1)` · Durations: 200ms (UI), 400ms (cards), 700ms (section reveals)
- Reveals: fade + 16px rise, staggered 60ms. Once only.
- "Beam sweep" accent: a soft blue gradient that slides across section dividers on reveal. Use it at most once per page.
- Respect `prefers-reduced-motion`: no scrub, no parallax, instant reveals.

---

## 8. CSS tokens (copy into `src/styles/tokens.css`)

```css
:root {
  --color-stage: #0B0C0E;
  --color-case: #141518;
  --color-rack: #1E2024;
  --color-cable: #2C2F35;
  --color-haze: #8C9099;
  --color-platinum: #ECEDF0;
  --color-white: #FFFFFF;
  --color-signal: #2EF906;
  --color-signal-dim: #22B805;
  --color-stageblue: #5B8CFF;
  --color-violet: #7A5CFF;
  --color-error: #FF5A5A;

  --font-display: "Bebas Neue", "Oswald", Impact, sans-serif;
  --font-heading: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-spec: "JetBrains Mono", ui-monospace, "Consolas", monospace;

  --radius: 0px;
  --radius-input: 4px;
  --border: 1px solid var(--color-cable);
  --ease: cubic-bezier(.2,.7,.2,1);
  --max-w: 1280px;
  --section-gap: clamp(64px, 8vw, 96px);
}

body { background: var(--color-stage); color: var(--color-platinum); font-family: var(--font-body); }
::selection { background: var(--color-signal); color: var(--color-stage); }
:focus-visible { outline: 2px solid var(--color-signal); outline-offset: 3px; }
```

---

## 9. Do / Don't
**Do**
- Let the flyby video and real event photos lead every page
- Keep Signal Green for actions and Stage Blue for links and accents
- Use spec labels for real facts (channels, sizes, areas, years)
- Check contrast: Platinum on Stage Black ≈ 16:1 ✓ · Haze on Stage Black ≈ 6:1 ✓ · Black on Signal Green ≈ 14:1 ✓

**Don't**
- Rounded "SaaS" cards, drop shadows or glassmorphism
- Green text on large areas, or green and blue side by side as button colours
- More than one Bebas headline visible at once
- AI images captioned as real events
- Autoplaying audio
