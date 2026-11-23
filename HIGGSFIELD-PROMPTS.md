# Higgsfield Prompt Pack: Think Audio Visual (budget: 200 credits)

Prices checked on 2026-11-23 with Higgsfield's cost estimator.

## Budget

| Item | Model | Each | Qty | Credits |
|---|---|---|---|---|
| Hero start frame | Cinema Studio Image 2.5, 2K, 16:9 | 2 | 3 tries | 6 |
| Hero end frame | Cinema Studio Image 2.5, 2K, 16:9 | 2 | 3 tries | 6 |
| **Hero flyby video** 10 s, 720p, start + end frame, no audio | Cinema Studio Video 3.0 | 50 | 2 tries | 100 |
| New / remade images | Nano Banana Pro, 2K | 2 | 9 images × 2 tries | 36 |
| Upscale best real photos | Bytedance Image Upscale, 4K | 2 | 12 photos | 24 |
| **Total** | | | | **172** (28 spare) |

Rules to stay in budget:
- Pick the best start and end frames **before** making any video. The frames decide 90% of the look.
- Video: try once, and only re-roll if the camera move is broken. Never use 1080p (130 credits).
- 720p is fine for a hero background under a dark overlay. Optionally upscale the final video in a free tool later.

## Style suffix (paste at the end of EVERY prompt)

```
photorealistic, cinematic event photography, dark moody venue, light haze in the air, deep blacks, cool blue and violet stage lighting with small accents of vivid green, professional line-array speakers and truss, high dynamic range, sharp detail, 35mm lens look, no text, no logos, no brand names, no watermarks
```

---

## 1. Hero flyby video ("descent flyby")

The idea: the camera starts high in the roof truss of a dark event hall, then **descends and glides forward** over the audience tables, past the sound desk, and lands at stage level as the light beams fire.

### 1a. Start frame: Cinema Studio Image 2.5 · 2K · 16:9
```
High aerial view from inside the roof truss of a large dark event hall before a show, looking down and forward over rows of round banquet tables with white linen, a glowing mixing desk in the middle of the room, and a wide stage far ahead with a large projection screen and blue drapes, beams of blue light cutting through haze, line-array speakers hanging from black truss in the foreground, quiet anticipation, + STYLE SUFFIX
```

### 1b. End frame: Cinema Studio Image 2.5 · 2K · 16:9
```
Stage-level view at the front of a dark event hall, a wide black stage with glossy floor, blue and violet drapes behind, a large blank glowing projection screen in the centre, intense white and blue light beams fanning out from moving-head lights on the truss, subtle green rim light along the stage edge, haze, energetic show moment, empty stage, + STYLE SUFFIX
```
Keep the screen **blank**. The website places the Think AV logo and headline over it.

### 1c. Video: Cinema Studio Video 3.0 · image-to-video
Settings: **start image = 1a**, **end image = 1b**, duration **10 s**, resolution **720p**, aspect **16:9**, genre **epic**, audio **off**.
```
One continuous smooth drone shot. The camera starts high in the roof truss, slowly descends while gliding forward over the banquet tables, passes just above the glowing mixing desk, and lowers to stage level as it approaches the stage. As the camera arrives, the moving-head lights fire beams of white and blue light through the haze. Steady, slow, cinematic movement, no cuts, no shaking, no people moving suddenly, no text.
```
If the motion is too fast or warps: add `very slow camera speed, stable gimbal motion` and try once more.

---

## 2. New & remade images: Nano Banana Pro · 2K · 16:9 (unless noted)

"Remake" = upload the old small photo as a **reference image** so the layout stays similar but comes out clean and high-res.
These are AI images, so use them for **service cards and backgrounds**, not the "Our Work" gallery (use upscaled real photos there).

| # | Use on site | Reference image | Prompt |
|---|---|---|---|
| 2.1 | Sound card / page | `page1-img9.jpg` | `Close-up of a professional analog mixing console in a flight case at an outdoor event, faders and knobs glowing softly, wireless microphones resting beside it, shallow depth of field, + STYLE SUFFIX` |
| 2.2 | AV & Screens card | `page1-img3.jpg` | `Corporate conference hall with two large projection screens either side of a stage, bright green abstract graphics on the screens, blue and green uplighting on the walls, empty chairs in rows, + STYLE SUFFIX` |
| 2.3 | Staging card | `page3-img4.jpg` | `Low black event stage with carpeted steps, a white lectern podium, tall white floral arrangements, deep blue pleated drapes behind, a projection screen, soft spotlight, + STYLE SUFFIX` |
| 2.4 | Lighting card (21:9) | `slider-img3.jpg` | `Event hall with dramatic fan of white and blue light beams from moving-head lights on truss, cocktail tables below, haze, + STYLE SUFFIX` |
| 2.5 | Conferences tile | `page3-img1.jpg` | `Large conference auditorium full of seated delegates seen from behind, wide stage with a speaker at a lectern, three big screens, green and teal stage lighting, + STYLE SUFFIX` |
| 2.6 | Weddings tile | none | `Elegant wedding reception in a South African venue at night, warm amber and soft blue uplighting on white draped walls, round tables with candles and flowers, small DJ booth to the side, dance floor ready, + STYLE SUFFIX` |
| 2.7 | Churches tile | none | `Modern church auditorium during worship, band on stage under soft blue and white stage wash, PA speakers either side, congregation silhouettes with raised hands, + STYLE SUFFIX` |
| 2.8 | Live events tile | `page3-img12.jpg` | `Drum kit and microphones on a dark concert stage, cool white top lights and violet back light, cymbals catching the light, haze, + STYLE SUFFIX` |
| 2.9 | Quote CTA background (21:9) | none | `Abstract dark background of stage haze with soft blue and violet light leaks and a faint green glow at the bottom edge, minimal, lots of empty space for text, + STYLE SUFFIX` |

Tip: in the remake prompts, the line "no logos, no brand names" removes the Nedbank/SABC branding from the old photos.

---

## 3. Upscale real photos: Bytedance Image Upscale · 4K (2 credits each)

For the "Our Work" gallery, in this order (stop when the budget runs out):

1. `slider-img3.jpg`  2. `slider-img2.jpg`  3. `slider-img1.jpg`  4. `page3-img5.jpg`  5. `page3-img10.jpg`  6. `page3-img12.jpg`
7. `page3-img13.jpg`  8. `page1-img5.jpg`  9. `page1-img8.jpg`  10. `page3-img2.jpg`  11. `page1-img6.jpg`  12. `page1-img7.jpg`

The 200×137 px photos will look soft even after upscaling. Use them as small gallery thumbnails and replace them with original photos when you get them.

---

## Order of work
1. Make 1a and 1b (3 tries each) → choose the best pair
2. Make the hero video (1c)
3. Make images 2.1–2.9
4. Upscale photos with whatever credits are left
5. Download everything into `assets/images/` and `assets/video/` in the VS Code project
