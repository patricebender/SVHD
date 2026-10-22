# SV OG Heidelberg & Dossenheim — Website

Website des Vereins für Deutsche Schäferhunde, Ortsgruppe Heidelberg & Dossenheim e.V.

## Stack

- **Next.js 16** (App Router) mit statischem Export (`output: "export"`)
- **Tailwind CSS 4** — Farbpalette aus dem Vereinslogo (`#0080c9`) abgeleitet
- Font: **League Spartan** (Google Fonts, self-hosted via `next/font`)
- Hosting: **Firebase Hosting** (statisches `out/`-Verzeichnis)

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # erzeugt statisches out/
```

## Deploy (Firebase)

Einmalig: in `.firebaserc` die Projekt-ID eintragen und anmelden.

```bash
npx firebase-tools login
npm run deploy     # build + firebase deploy --only hosting
```

## Struktur

- `app/` — Seiten (Aktuelles, Trainingsangebote + Unterseiten, Terminkalender, Kontakt, Mitgliedschaft)
- `components/` — Header, Footer, Hero, JSON-LD
- `lib/content.ts` — Inhalte: Disziplinen, Trainingszeiten, News, Termine
- `lib/site.ts` — Vereins- und Kontaktdaten
- `public/logo.svg` — Vereinslogo (auch Favicon via `app/icon.svg`)

## Inhalte pflegen

Die meisten Inhalte liegen in `lib/content.ts`. Trainingsdisziplinen dort
hinzufügen/ändern — Übersichtsseite, Unterseiten, Navigation und Sitemap
aktualisieren sich automatisch.

> Bilder sind aktuell Platzhalter (Unsplash). Für den Livebetrieb durch eigene
> Vereinsfotos ersetzen und idealerweise lokal unter `public/` ablegen.
