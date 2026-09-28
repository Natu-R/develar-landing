# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS. Delegated: recommended and offered in chat, user did not object. Rationale: the surface is a static sales page, so a server-rendering framework buys nothing; Astro ships zero JS by default and builds to static files that deploy either behind the existing Caddy on the product VPS or on a static host. Deploy target not yet confirmed.

## Users

**Buyer (the landing's visitor):** owner, CMO, or performance-marketing lead of an online casino / iGaming operator in Latin America. They buy media on Meta, their traffic converts through WhatsApp, and they cannot prove which campaign produced a real deposit. They arrive skeptical, technically literate about pixels and CAPI, and they evaluate fast.

**Product end users (not the landing's audience, but what the buyer is purchasing for):**
- `SUPER_ADMIN` — manages the pool of admin accounts.
- `ADMIN` — manages cashiers, WhatsApp sessions, landing pages, stats, leads, conversions, system settings; oversees cashier chats.
- `CASHIER` — runs work sessions, links and operates a WhatsApp number, converts leads, chats with contacts.
- **WhatsApp contact / lead** — external end user who arrives from a landing page or an inbound WhatsApp message.

## Product Purpose

Develar closes the attribution gap between Meta advertising and WhatsApp-based sales. It captures the lead on the landing page, carries identity into the WhatsApp conversation, matches the conversation back to the originating click, and reports the resulting conversion to the Meta Conversions API — while giving the operator the dashboard their cashiers work in every day.

Success means the operator can answer "which campaign produced this deposit?" with data instead of a guess, and optimize spend against real revenue rather than against clicks.

## Positioning

The mechanism a neighboring product cannot truthfully copy is the **unique-code round trip**:

1. The landing calls `POST /api/leads` with `fbc`, `fbp`, `userAgent`, and `metaPixelId`.
2. The system generates a unique `code` and selects a WhatsApp number through a three-level chain — agent on shift → active agent with a linked WhatsApp → landing fallback phone — guaranteeing a non-empty number.
3. The visitor messages that number with the code.
4. WAHA fires an inbound webhook; the gateway validates and enqueues it; the worker matches the code to the stored lead, marks it `CONTACTED`, and sends `Lead` to the Meta Conversions API.
5. When the cashier converts the lead, the worker sends the `Purchase` (Contact) event.

This is not a chat widget and not a generic CRM. It is an attribution pipeline that happens to include the operations dashboard the business already needs.

## Operating Context

- Traffic originates in Meta ad campaigns and lands on operator landing pages managed inside the product.
- The conversation happens in real WhatsApp, on numbers linked by cashiers via QR through WAHA.
- Cashiers work shifts; lead routing follows shift state.
- Conversion often means a deposit, evidenced by a receipt image the contact sends.
- Attribution results are consumed in Meta Ads Manager, so the product's output has to be trustworthy enough to bid on.

## Capabilities and Constraints

**Confirmed capabilities**
- Lead capture API with Meta click identifiers (`fbc`, `fbp`, `metaPixelId`, `userAgent`).
- Unique-code generation and inbound message matching.
- Three-level WhatsApp number selection with guaranteed non-empty fallback.
- Landing page management, landing-to-agent assignment, and fallback phone configuration.
- WhatsApp session management with QR linking; session status tracked from WAHA `session.status` events.
- Unified chat module shared by admins and cashiers: send message and media, mark as seen, typing presence. Admins can operate over any cashier's session.
- Automatic deposit conversion: a cashier message matching a trigger phrase renders the receipt (PDF→PNG) and uses OpenAI Vision to extract the amount.
- Conversion limit checks enforced before a conversion is created.
- Meta Conversions API reporting for both `Lead` and `Purchase` (Contact) events, with an outbox/poller for delivery.
- Role-based access: `SUPER_ADMIN`, `ADMIN`, `CASHIER`. Auth with login/logout/refresh, first-run setup, self-service account update.
- Stats, lead management, and conversion views.
- Per-tenant dashboard branding tokens.

**Confirmed technical constraints**
- Single-tenant-per-VPS deployment. Postgres, Redis, WAHA, gateway, worker, and the dashboard SPA all run in one `docker-compose.yml` on an internal Docker network; only Caddy is published on `80`/`443`.
- Tenant identity is declared in an Ansible registry (`TENANT_NAME`) and rendered into `.env`. Provisioning follows a fixed runbook; `.env` is never edited on a VPS by hand.
- Observability: Grafana Alloy ships Prometheus metrics and container logs to OpenObserve, labeled by tenant.
- Backups: `pg_dump` on daily and 6-hour tiers plus hot WhatsApp session snapshots, both uploaded to Cloudflare R2.
- Inbound webhooks are authenticated with `x-webhook-token`; BullMQ retries with `attempts=3` and exponential backoff.
- Third-party dependencies the product's value chain rests on: WAHA (WhatsApp HTTP API), Meta Conversions API, OpenAI Vision.

**Explicitly undecided**
- Pricing, packaging, and licensing model.
- Onboarding timeline commitments and SLAs.
- Landing deploy target and domain.
- Whether the product is sold outside iGaming.

## Brand Commitments

- Product name on the landing: **Develar**. `OnlyLemon` is a tenant/domain in the existing infrastructure and is not the commercial name.
- Landing language: **Spanish (Latin America)**, neutral professional register. Not a regional-slang voice. Voseo is specifically excluded.
- Primary call to action: **start a WhatsApp conversation**. This is a deliberate product-consistent choice — the product sells WhatsApp attribution, so the sales path itself runs through WhatsApp. No demo-booking form and no public pricing.
- **Mark:** the user-supplied `LOGO DEVELAR FINAL.png` (3072², kept at `public/brand/`). A glass ring with a speech bubble cut out of it, lit from pine at the top through emerald to pale lime at the bubble's tail, rendered on a blue-black ground. It is a glow on black and is screened onto the page rather than keyed.
- **Palette:** sampled from that mark, not chosen — ring body `#004824`/`#005424`/`#006018`, lit arc `#397f22 → #4ba42a → #79b422 → #96c133 → #e7fc9c`, specular rim `#ffffc4`, ground `rgb(0,1,7)`. A single green ramp. **There is no teal in this brand**; the lime/teal pair belonged to the dashboard's older "Lime Tech" tokens and is retired.
- **Typeface:** Poppins, because that is what the dashboard is set in. Martian Mono is used only for codes, timestamps, event rows and label plates.
- **Surface language:** the landing follows the dashboard's aesthetic, per the user's instruction — rounded corners throughout (the dashboard's `--radius: 0.5rem` scale, up to pill), glass panels with a lit top edge, ambient radial blooms behind the page, glow rather than hard borders for emphasis, and curves rather than mitred corners wherever a line turns. The user's stated reason: the mark is round and the page was too square.

## Evidence on Hand

Real, verifiable material:
- The working system itself, at `/Users/nataliorover/Workspace/develar` — architecture, data flow, and feature set are documented in `README.md`, `USE-CASES.md`, `docs/production-deployment.md`, `docs/provisioning.md`, `docs/agent-selection-levels.md`, and `docs/whatsapp-chat.md`.
- A real dashboard UI that can be screenshotted for authentic product imagery.
- `CloZap-Descripcion-General.pdf` in the product repo (contents not yet reviewed).

**Absent — must not be fabricated:**
- No customer names, logos, or case studies.
- No testimonials or quotes.
- No performance metrics, ROAS figures, conversion-lift numbers, or volume statistics.
- No pricing, plan tiers, or trial terms.
- No security certifications, compliance badges, or gambling-license claims.
- No team photos, founder bios, funding, or company history.
- No integration partner marks beyond the technical dependencies named above.

Any number, logo, or quote on the finished page must come from the user, or the page must be built to be persuasive without it.

## Product Principles

1. **Attribution is the product; the dashboard is the delivery vehicle.** Every message leads with proving which campaign produced the deposit. Operational features are support, not the headline.
2. **Show the mechanism, do not assert the outcome.** With no metrics available, credibility has to come from making the round trip legible — the code, the routing chain, the CAPI event. A buyer who understands the mechanism does not need a statistic to believe it.
3. **Speak the operator's vocabulary.** Cashier, shift, deposit, receipt, pixel, CAPI, fallback number. Generic CRM language signals that the product was not built for this vertical.
4. **The sales path proves the product.** Converting the visitor through WhatsApp is a demonstration, not just a convenience.
5. **Claim nothing that cannot be traced to the running system.** The evidence gap is a design constraint, not a copywriting problem to solve with invention.

## Accessibility & Inclusion

No product-specific requirement established. Standard WCAG 2.1 AA applies as a baseline for the marketing surface.
