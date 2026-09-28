---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope

Single-page sales landing for Develar at `src/pages/index.astro`, plus the components it composes. Visitor mode: **Persuade**.

## Audience and job

Owner, CMO, or performance lead of a Latin-American iGaming operator. They buy Meta media, convert through WhatsApp, and cannot prove which campaign produced a deposit. They arrive skeptical and technically literate, and they leave in under a minute unless the mechanism is legible.

**Action:** start a WhatsApp conversation. No demo form, no public pricing.

## Proof and content

The mechanism is the proof. No testimonials, customer logos, metrics, or prices exist — see `PRODUCT.md` "Evidence on Hand". Product UI is rebuilt in code as live page material with labeled synthetic demo data; nothing is a screenshot.

## Constraints

- Copy in neutral Latin-American Spanish. No regional slang.
- Palette pinned by the user to `develar/dashboard/src/branding/tokens.css` and `dashboard/public/logo.png`: lime `#C7F246` → teal `#2DD4BF` over a green-neutral near-black.
- Must not read as a casino, and must not read as a template SaaS page.

## Direction contract

**THESIS.** Attribution drawn as a transit line. The category ships a headline over a floating dashboard screenshot; this page refuses the floating-mockup hero and instead draws the single route one lead travels — Meta ad → landing → code → WhatsApp → cashier → deposit → Conversions API — as one continuous validated line, with the product's real machinery hanging off its stations.

**OWN-WORLD.** Latin-American metro signage, Lance Wyman lineage: a pictogram per station in one weight, flat fill, 45°/90° geometry, line colour as route identity. Translated to the pinned palette — the roll's Wyman hues are replaced by the brand's, the system survives intact. Closed ink set: lime, teal, the interval between them, and near-black ink; no third accent, no opacity wash standing in for depth. The lime→teal axis is notation, not decoration — it encodes position along the journey. Enamel and punched ticket stock, ink sitting on a surface, never flat vector on a flat plane. Type: **Poppins**, pinned by the user mid-build because it is the face the Develar dashboard is set in; a wide technical mono (Martian Mono) carries codes, timestamps, event rows and label plates. Poppins is static and has no width axis, so weight and tracking carry what the expansion did. Its line box runs 1.37em and its acute rises ~0.95em above the baseline, which sets the display leading at 1.06 — a Spanish headline in caps cannot take the tighter setting an English one can.

**STORY.** The visitor understands that a WhatsApp sale is a journey that currently goes uncounted. They believe Develar counts it, because they watched a single code leave an ad and come back as a validated deposit. They write on WhatsApp — the same path the product sells.

**FIRST VIEWPORT.** Full-bleed near-black. One route line enters top-left at a lime `ANUNCIO` node and exits bottom-right at a teal `CAPI` node, crossing the frame on 45°/90° runs with six pictogram stations. The headline sits inside the diagram's negative space in expanded caps at collision scale, filling its column edge to edge — not a centred hero. A code token (`DV-7K2Q`) rides the line; at the `CAJERO` station it validates with a stamp. The primary WhatsApp action is a punched ticket stub anchored at the line's terminus, visible without scrolling.

**FORM.** Transit fare validation, candidate 7 of the grounded list, assigned by the roll. Seed key `29a9b344`. Raises taken from declined challengers: closed ink set (one-bit desktop), the line IS the grid with no floating cards (elbow console), collision-scale type (fight poster), material weight and real substrate (cloud quarry), one governing geometry ruling every rule and section edge (curved-crease shell).

**SIGNATURE INTERACTION.** *La corrida* — a code token travels the line, each station lighting in sequence with its pictogram while the state vocabulary flips `EMITIDO → EN TRÁNSITO → VALIDADO → REPORTADO`. It runs once on load, then becomes scroll-scrubbed so the visitor drives it. Motion grammar is departure-board and fare-gate: discrete `steps()` timing, hard stops, a stamp — nothing eases like a web page. Honours `prefers-reduced-motion` by rendering the completed run.

**CITED CHANGES.** Two contract promises were deliberately replaced, recorded here rather than dropped:

1. *First viewport composition.* The contract put the headline inside the diagram's negative space with the ticket anchored at the line's terminus. Built instead as a stacked composition — headline at collision scale, ticket directly beneath it, lede to the right, map full-bleed below. Reason, measured: the headline resolves to two full-bleed lines of ~848px, and overlaying that on the map's negative space pushes the primary action past 900px, trading the composition for the thing the composition existed to protect. The raise this drops — "the line IS the grid" in the first viewport — is real and is not claimed as surviving.
2. *Scroll-scrub.* The contract promised the visitor drives the run by scrolling. Replaced by a named control, `Correr el boleto otra vez`. Reason: the map is a horizontally panned diagram, and scrubbing it from vertical page scroll fights both the page's own spine metaphor and the horizontal pan a phone visitor already has. The promise underneath — that the visitor drives the run — is kept with an explicit affordance.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

Deploy target and domain. Pricing and packaging (deliberately absent from the page).
