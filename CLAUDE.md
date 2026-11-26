# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing website for **SV OG Heidelberg & Dossenheim** (a German Schäferhund /
dog-sport club). German-language content, one audience: prospective and current members.
No backend, no forms-that-POST — contact is via `mailto:`/`sms:` links.

## Commands

```bash
npm run dev        # next dev, http://localhost:3000
npm run build      # static export to out/
npm run lint       # next lint (eslint)
npm run deploy     # build + firebase deploy --only hosting
```

**Deploy is automatic on push to `main`** — don't run `npm run deploy` or ask to check the
deploy setup unless something is broken. There is no test suite; `lint` and a successful
`build` are the checks.

## Next.js 16 caveat

This is Next.js **16** (App Router) with `output: "export"`. APIs differ from older Next you
may know — `AGENTS.md` points to `node_modules/next/dist/docs/`; read the relevant guide
before using an unfamiliar API. Because of static export:

- No server runtime, no image optimizer (`images.unoptimized: true`). `next/image` works but
  serves images as-is.
- `trailingSlash: true` — **every internal href ends in `/`** (`/trainingsangebote/`,
  `/trainingsangebote/agility/`). Keep this consistent or links 404 on Firebase.
- Dynamic routes need `generateStaticParams`; there is exactly one (`app/trainingsangebote/[slug]`).

## Architecture

**Content lives in `lib/`, not in pages.** Pages are thin presentational shells that import
typed data and map over it. To change what the site says, edit `lib/` — the pages, nav,
sitemap, and JSON-LD all derive from it.

- **`lib/content.ts`** — the main content store: `disciplines[]` (training offerings, each with
  its own detail page), `trainingSchedule[]` (weekly slots by day), `news[]` (Aktuelles), and
  `events[]` (Terminkalender, including the Social Walk series folded in). Exports helpers like
  `getDiscipline`, `getScheduleForDiscipline`, `getDisciplineContactEmail`.
- **`lib/people.ts`** — single registry of every named person (trainers, board, contacts).
  Everything else references people **by id** (`PersonId`); names/contact details exist once
  here. Use `peopleNames(ids)` / `getPeople(ids)` to resolve.
- **`lib/site.ts`** — club identity and contact data (`siteConfig`, `contact`). Brand color
  `#0080c9` originates here and in `globals.css`.
- **`lib/nav.ts`** — header nav; the Trainingsangebote submenu is **generated** from
  `disciplines`, so adding a discipline updates the menu automatically.

**Adding a training discipline:** append to `disciplines[]` in `lib/content.ts` (with a
`slug`, image + intrinsic `imageWidth`/`imageHeight`, `coachIds` into the people registry).
The detail page, nav submenu, sitemap entry, and overview card all appear automatically. If
it has weekly slots, also add them to `trainingSchedule[]` with the matching `slug`. New
people must be added to `lib/people.ts` first.

**Adding an Aktuelles (news) post:** add an entry to `news[]` in `lib/content.ts`. Order in
the array doesn't matter — the page sorts by `date` descending, renders the newest as the
large "lead" card and the rest as a timeline. Required: `slug` (stable anchor), `date`
(`YYYY-MM-DD`), `category` (pill label, free text), `title`, `excerpt`, `body[]` (paragraphs).
Optional `images[]` (first is the hero, rest become a thumbnail row — include `width`/`height`
and an `alt`) and `links[]` (contextual links under the post). The `excerpt` feeds the
landing-page teaser; `slug` is the deep-link target (`/aktuelles/#<slug>`).

**Adding a Terminkalender event:** add to `baseEvents` in `lib/content.ts` (`date`, `title`,
optional `time`/`location`/`note`). The stable `id` is derived automatically by `slugifyEvent`
— don't hand-write it. Social Walks are a separate compact list (`socialWalkDates`, just dates)
that gets expanded into full events with `kind: "walk"` and merged into `events[]` from one
source, so the walk series flows through the same timeline. The calendar's past/"als Nächstes"
distinction and auto-scroll are computed **client-side** in `components/event-timeline.tsx`
(there is no server "today" in a static export) — dates are compared as local `YYYY-MM-DD`
strings, so keep that format. The timeline also supports `?filter=events|walks` and `#<id>`
deep links.

**Promo banner** (`components/event-banner.tsx`) — a thin bar above the nav, present on every
page, that rotates through up to three auto-derived slides: the **next Termin**, the **next
Social Walk**, and the **newest Aktuelles** entry. It reads `events`/`news` directly and each
slide deep-links into the relevant page (`?filter=…#<id>`), so new content flows into the banner
automatically; nothing to wire up. "Today" is resolved client-side (static export), it collapses
on scroll, and both the rotation and collapse respect `prefers-reduced-motion`.

**IDs and anchors:** events and news carry stable `slug`/`id` anchors (events derive theirs via
`slugifyEvent`, folding umlauts) so pages can deep-link to a single Termin or post. Preserve
these when editing — external links and the landing-page teasers depend on them.

## Conventions

- Path alias `@/*` → repo root (e.g. `@/lib/content`, `@/components/...`).
- Styling is **Tailwind CSS 4** (config-less, via `@tailwindcss/postcss`). Semantic utility
  classes (`container-page`, `card`, `btn-primary`, `eyebrow`, `prose-club`, `brand*` colors)
  are defined in `app/globals.css` — reuse them rather than reinventing spacing/color.
- SEO is first-class: per-page `metadata` with `alternates.canonical` (trailing slash),
  OpenGraph/Twitter, and JSON-LD via `components/json-ld.tsx` (`OrganizationJsonLd` in the
  layout, `CourseJsonLd` per discipline). When adding a route, add it to `app/sitemap.ts` and
  give the page its canonical + OG metadata.
- Images go under `public/` (`/training`, `/aktuelles`, `/hundeplatz`, `/video`). Content
  entries carry intrinsic width/height and often an `object-position` crop hint — fill these
  so layout stays stable and OG previews are accurate.
- Comments in this repo explain *why* (layout/crop/SEO reasoning), German where it concerns
  content. Match that density.

## Email signatures

`signatures/*.html` are standalone HTML email signatures (not part of the site build),
generated from `signatures/template.html` using `lib/people.ts` / `lib/site.ts` data.
