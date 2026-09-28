# develar-landing

Sales landing page for **Develar** — WhatsApp attribution for iGaming operators.

Static site. Astro 7 + Tailwind 4, no client framework, no server. The build
output in `dist/` is plain files: serve it from the existing Caddy on the
product VPS, or from any static host.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/
```

## Before publishing

Everything the page states about the product is traceable to the running system
in `../develar`. The only invented values are commercial contact details, and
they all live in one file.

Edit **`src/data/site.ts`**:

| Field | What it is |
|---|---|
| `whatsappNumber` | The real WhatsApp number, international format, digits only. Currently a placeholder. |
| `whatsappDisplay` | The same number as the visitor reads it on the ticket stub. |
| `whatsappMessage` | The prefilled first message. |
| `url` | The domain the site will be served from. Also set `site` in `astro.config.mjs`. |

Nothing else on the page needs replacing. There are deliberately no customer
logos, testimonials, metrics, prices, or certifications — none exist yet, and
`PRODUCT.md` records that they must not be fabricated. If real ones appear
later, add them; do not invent them to fill a section.

## What the page claims, and where it comes from

Every station on the page describes a step the product actually performs.
`src/data/line.ts` is the single source, and each entry cites its origin:

- `../develar/README.md` — data flow, production topology, backups
- `../develar/USE-CASES.md` — roles and capabilities
- `../develar/docs/agent-selection-levels.md` — the three-level number chain

Demonstration data — event timestamps, lead codes, amounts, cashier rows — is
synthetic and every block that carries it says so in its caption. Keep that
label if you change the numbers.

## Structure

```
src/
  pages/index.astro        the line: hero, eight stations, two facilities, terminal
  layouts/Base.astro       document head, skip link
  data/line.ts             the eight stations and their verified facts
  data/site.ts             contact details — the placeholders to replace
  styles/global.css        design tokens, base layer, browser surfaces
  components/
    RouteMap.astro         the overview map and la corrida
    Station.astro          a station hung off the page's spine
    Pictogram.astro        the authored pictogram set
    BrandMark.astro        the mark, redrawn as vector from the dashboard logo
    TicketCta.astro        the primary action, issued as a ticket
    ScrollFrame.astro      pan-instead-of-shrink wrapper for wide diagrams
    RouteBranch.astro      station 04 — the three-level number chain
    EventLog.astro         station 06 — the run as the system records it
    Comprobante.astro      station 07 — the receipt read
    SalaBoard.astro        the operations board
    ServiceMap.astro       the plant
```

## Design

`PRODUCT.md` holds product truth. `DESIGN.md` holds the visual system —
palette, type, the line's geometry, and the rules that keep the page coherent.
Read both before changing the look; the palette in particular is pinned to the
product's own logo and is a closed set.
