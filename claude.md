# MacMate.ch — Apple Support Zürich

## Projektübersicht

MacMate ist ein Apple-Support-Service mit Sitz in Zürich. Die Website ist der zentrale Vertriebskanal und soll Vertrauen aufbauen, Services klar kommunizieren und Termine generieren. Die primäre Sprache ist Deutsch, die Zielgruppe ist in der Schweiz (Kanton Zürich und Umgebung).

**Domain:** macmate.ch
**Hosting:** Cloudflare Pages (Free Tier)
**Budget:** CHF 0 laufende Kosten — alles im Cloudflare Free-Modell

---

## Tech Stack

| Komponente | Technologie | Begründung |
|---|---|---|
| Framework | **Astro** (Static Output) | Schnell, SEO-optimiert, zero JS by default, Markdown-Content |
| Styling | **Tailwind CSS** | Utility-first, konsistent, kleine Bundle-Größe |
| Hosting | **Cloudflare Pages** | Free Tier: unbegrenzte Bandbreite, globales CDN, automatisches HTTPS |
| DNS | **Cloudflare DNS** | Bereits für Domain konfiguriert |
| Formulare | **Cloudflare Pages Functions** (oder Web3Forms Free) | Kein Backend nötig, kostenlos |
| Terminbuchung | **Cal.com** Embed (Free Tier) | Kostenloses Scheduling, Embed-fähig |
| Analytics | **Cloudflare Web Analytics** | Kostenlos, DSGVO/nDSG-konform, kein Cookie-Banner nötig |
| Icons | **Lucide Icons** | Open Source, konsistent, leichtgewichtig |
| Fonts | **Google Fonts** (self-hosted) | Plus Jakarta Sans + JetBrains Mono, DSGVO-konform wenn self-hosted |

### Warum Astro?
- Generiert reines HTML/CSS — kein JavaScript-Overhead
- Markdown/MDX für Blog-Content
- Component Islands für interaktive Elemente (z.B. Terminbuchung)
- Perfekte Lighthouse-Scores out of the box
- Native Cloudflare Pages Integration

### Cloudflare Pages Free Tier — Limits
- 500 Builds/Monat
- 1 Build gleichzeitig
- Unbegrenzte Bandbreite & Requests
- Unbegrenzte statische Assets
- 100k Functions-Aufrufe/Tag (für Kontaktformular)
- Automatisches HTTPS
- Globales CDN (300+ Edge-Locations)

---

## Projektstruktur

```
macmate.ch/
├── claude.md                    # ← Dieses File
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg             # 1200x630 Open Graph Image
│   ├── robots.txt
│   └── fonts/                   # Self-hosted Google Fonts
│       ├── PlusJakartaSans-*.woff2
│       └── JetBrainsMono-*.woff2
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML head, nav, footer, SEO meta
│   ├── components/
│   │   ├── Nav.astro            # Responsive navigation
│   │   ├── Footer.astro         # Footer mit Links, Legal, Kontakt
│   │   ├── Hero.astro           # Reusable hero section
│   │   ├── ServiceCard.astro    # Service-Kachel (Icon, Titel, Text, Link)
│   │   ├── PricingTier.astro    # Preis-Karte
│   │   ├── TestimonialCard.astro
│   │   ├── FaqAccordion.astro   # Accordion ohne JS (details/summary)
│   │   ├── ContactForm.astro    # Formular mit Cloudflare Function
│   │   ├── CalEmbed.astro       # Cal.com Island (client:visible)
│   │   ├── WhatsAppButton.astro # Sticky floating Button
│   │   ├── StepProcess.astro    # 3-Schritte-Prozess
│   │   ├── BlogCard.astro       # Blog-Vorschau-Karte
│   │   └── SeoHead.astro        # Strukturierte Daten, OG tags
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── privatpersonen.astro # Privatkunden
│   │   ├── kmu.astro            # KMU / Managed Services
│   │   ├── workshops.astro      # Workshops & Schulungen
│   │   ├── ueber-uns.astro      # Über uns / Story
│   │   ├── kontakt.astro        # Kontakt
│   │   ├── impressum.astro      # Rechtliches (Impressum)
│   │   ├── datenschutz.astro    # Datenschutz (nDSG)
│   │   └── blog/
│   │       ├── index.astro      # Blog-Übersicht
│   │       └── [...slug].astro  # Dynamische Blog-Posts
│   ├── content/
│   │   ├── config.ts            # Astro Content Collections
│   │   └── blog/
│   │       ├── mac-langsam-tipps.md
│   │       ├── icloud-richtig-nutzen.md
│   │       └── apple-fuer-kmu.md
│   └── styles/
│       └── global.css           # Tailwind imports, custom properties
└── functions/                   # Cloudflare Pages Functions
    └── api/
        └── contact.ts           # POST handler für Kontaktformular
```

---

## Design-System

### Farbpalette

Die Farbwelt orientiert sich an Apple-Ästhetik — clean, hell, mit einem markanten Blau-Akzent.

```css
:root {
  /* Primär */
  --color-primary: #0A84FF;        /* Apple Blue — CTA, Links, Akzente */
  --color-primary-dark: #0066CC;   /* Hover-State */
  --color-primary-light: #E8F4FF;  /* Hintergrund-Akzent */

  /* Neutral */
  --color-bg: #FFFFFF;             /* Hintergrund */
  --color-bg-alt: #F5F5F7;        /* Apple-typisches Grau — Sektionen */
  --color-surface: #FFFFFF;        /* Karten */
  --color-border: #D2D2D7;        /* Trennlinien */

  /* Text */
  --color-text: #1D1D1F;          /* Apple-Schwarz */
  --color-text-secondary: #6E6E73; /* Sekundärtext */
  --color-text-muted: #86868B;    /* Hinweise */

  /* Semantisch */
  --color-success: #30D158;        /* Bestätigung */
  --color-warning: #FF9F0A;        /* Hinweis */
  --color-error: #FF453A;          /* Fehler */

  /* Service-Farben (für Kacheln) */
  --color-vor-ort: #0A84FF;       /* Blau */
  --color-remote: #30D158;        /* Grün */
  --color-workshop: #FF9F0A;      /* Orange */
  --color-managed: #BF5AF2;       /* Lila */
}
```

### Typografie

```css
/* Heading: Plus Jakarta Sans — modern, geometrisch, warm */
/* Body: Plus Jakarta Sans — konsistent */
/* Code/Preise: JetBrains Mono — technisch */

h1 { font-size: 3rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; }
h2 { font-size: 2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2; }
h3 { font-size: 1.25rem; font-weight: 700; line-height: 1.3; }
body { font-size: 1rem; font-weight: 400; line-height: 1.6; }
.price { font-family: 'JetBrains Mono'; font-weight: 700; }
```

### Tailwind Konfiguration

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0A84FF', dark: '#0066CC', light: '#E8F4FF' },
        surface: '#F5F5F7',
        apple: { black: '#1D1D1F', gray: '#6E6E73', lightgray: '#86868B' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
}
```

### Design-Prinzipien

1. **Apple-clean:** Viel Weißraum, klare Hierarchie, keine visuellen Ablenkungen
2. **Mobile First:** Über 70% mobiler Traffic erwartet — alles zuerst für kleine Screens designen
3. **Barrierefreiheit:** Kontrastverhältnis min. 4.5:1, Focus-States, semantisches HTML
4. **Geschwindigkeit:** Lighthouse Score 95+ in allen Kategorien anstreben
5. **Lokaler Bezug:** Zürich-Referenzen in Bildern und Texten, schweizerdeutsche Formulierungen wo passend

---

## Seitenstruktur & Content

### Navigation

Desktop: Logo links, Links mittig, CTA-Button rechts
Mobile: Logo links, Hamburger rechts, Slide-in Menü

```
Logo | Für Privatpersonen | Für KMU | Workshops | Über uns | Blog | [Termin buchen →]
```

**Sticky Header:** Nach 100px Scroll wird die Nav kompakt mit Backdrop-Blur.

### Footer

```
┌─────────────────────────────────────────────────────┐
│  MacMate                   Services    Rechtliches  │
│  Dein Apple-Experte        Privatpers. Impressum    │
│  in Zürich                 KMU         Datenschutz  │
│                            Workshops                │
│  📞 044 XXX XX XX          Blog                     │
│  📧 hallo@macmate.ch       Kontakt                  │
│  📍 Zürich                                          │
│                                                     │
│  © 2026 MacMate · Zürich                            │
└─────────────────────────────────────────────────────┘
```

---

### Seite 1: Homepage (`/`)

**Ziel:** Vertrauen aufbauen, Services überblicken, zur Aktion bewegen.

#### Section 1 — Hero
- **Headline:** „Dein persönlicher Apple-Experte in Zürich"
- **Subline:** „Ob Mac, iPhone oder iPad — wir lösen dein Problem. Vor Ort, remote oder im Workshop."
- **CTA primär:** „Jetzt Termin buchen" (→ Cal.com)
- **CTA sekundär:** „Unsere Services" (→ Scroll zu Services)
- **Hintergrund:** Subtiler Gradient, Apple-Geräte-Illustration oder Hero-Foto

#### Section 2 — 4 Service-Kacheln
Grid 2x2 (Desktop) / Stack (Mobile):

| Kachel | Icon | Titel | Kurztext |
|---|---|---|---|
| 1 | 🏠 MapPin | Vor-Ort-Support | „Wir kommen zu dir — in ganz Zürich. Persönlich, schnell, unkompliziert." |
| 2 | 💻 Monitor | Remote-Support | „Hilfe per Fernwartung — in Minuten verbunden, sofort gelöst." |
| 3 | 🎓 GraduationCap | Workshops | „Lerne, wie du mehr aus deinem Apple rausholst. Für Einsteiger bis Profis." |
| 4 | 🏢 Building | Managed Services | „Ihre Apple-IT läuft — Sie fokussieren aufs Business. Ab CHF 29/Gerät." |

Jede Kachel verlinkt auf die entsprechende Unterseite.

#### Section 3 — Vertrauensleiste (Social Proof)
Horizontale Leiste mit 3 Kennzahlen:
- ⭐ „4.9 / 5 bei Google" (mit Sternen)
- ⚡ „Ø 2h Reaktionszeit"
- ✅ „500+ gelöste Fälle"

#### Section 4 — So funktioniert's (3 Schritte)
1. **Anfrage** — „Ruf an, schreib per WhatsApp oder buche online."
2. **Diagnose** — „Wir analysieren dein Problem — kostenlos."
3. **Lösung** — „Vor Ort oder remote — schnell und fair."

#### Section 5 — Kundenstimmen
2–3 Testimonial-Karten mit:
- Name (Vorname + Nachname Initial)
- Sterne-Bewertung
- Kurzes Zitat (2–3 Sätze)
- Badge: „Privatperson" oder „KMU"

Platzhalter-Testimonials für den Start (später durch echte ersetzen):
- „MacMate hat mein MacBook gerettet — der Techniker war in 2 Stunden da. Super professionell!" — Sarah M., Zürich
- „Endlich jemand, der Apple und KMU versteht. Das Managed-Service-Abo ist Gold wert." — Thomas K., Startup-Gründer
- „Meine Mutter kann jetzt ihr iPad bedienen — dank dem Workshop. Geduldig und verständlich erklärt." — Lena W., Zürich

#### Section 6 — CTA-Banner
- Hintergrund: Primary Blue
- **Headline:** „Apple-Problem? Wir helfen — kostenlose Erstberatung."
- **Buttons:** Telefon (click-to-call) | WhatsApp | Termin buchen

---

### Seite 2: Privatpersonen (`/privatpersonen`)

**Ziel:** Privatpersonen und Senioren abholen, Vertrauen schaffen, Termin buchen.

#### Section 1 — Hero
- **Headline:** „Persönlicher Apple-Support — bei dir zu Hause"
- **Subline:** „Mac langsam? iPhone spinnt? Wir kommen vorbei oder helfen remote. Verständlich, geduldig, fair."

#### Section 2 — Häufige Probleme (Grid 3x2)
Icon + Titel + 1 Satz:
- 🐌 Mac ist langsam
- ☁️ iCloud / Speicher voll
- 🖨️ Drucker / WLAN funktioniert nicht
- 📦 Daten umziehen (alter → neuer Mac)
- 🔒 Passwort / Account-Probleme
- 💾 Backup einrichten

#### Section 3 — Preise
3 Pakete als Karten:

| Paket | Dauer | Preis | Inhalt |
|---|---|---|---|
| Quick-Fix | 30 Min | CHF 69 | Ein einzelnes Problem lösen |
| Standard | 60 Min | CHF 129 | Diagnose + Lösung + Tipps |
| Deep-Dive | 2 Std | CHF 229 | Umfassende Analyse, Setup, Schulung |

Hinweis: „Anfahrt in der Stadt Zürich inklusive. Ausserhalb: CHF 1/km."

#### Section 4 — Terminbuchung
Cal.com Embed (client:visible Island)

#### Section 5 — FAQ (Accordion)
- „Was kostet ein Einsatz?"
- „Wie schnell könnt ihr kommen?"
- „Bezahlung — Twint, Karte, Rechnung?"
- „Was, wenn das Problem nicht gelöst werden kann?"
- „Repariert ihr auch Hardware?"

---

### Seite 3: KMU (`/kmu`)

**Ziel:** KMUs und Startups als Managed-Service-Kunden gewinnen.

#### Section 1 — Hero
- **Headline:** „Ihre Apple-IT. Unser Job."
- **Subline:** „Managed Apple Services für KMU in Zürich — damit Sie sich aufs Business konzentrieren können."

#### Section 2 — Was wir übernehmen (Feature-Liste)
- ✅ Geräte-Management (MDM via Apple Business Manager)
- ✅ Automatisches Onboarding neuer Mitarbeiter
- ✅ Backup & Recovery
- ✅ Sicherheit & Updates
- ✅ Monitoring & Proaktive Wartung
- ✅ Helpdesk — Anruf oder Chat, wir lösen's

#### Section 3 — Tiered Pricing

| Plan | Starter | Growth | Scale |
|---|---|---|---|
| Geräte | 1–5 | 6–20 | 20+ |
| Preis | CHF 39/Gerät/Mt | CHF 33/Gerät/Mt | CHF 29/Gerät/Mt |
| Reaktionszeit | 8h | 4h | 2h |
| Vor-Ort-Support | nach Bedarf | 1x/Monat inkl. | 2x/Monat inkl. |
| Onboarding | ✅ | ✅ | ✅ |
| MDM | ✅ | ✅ | ✅ |
| Prio-Support | – | ✅ | ✅ |
| Account Manager | – | – | ✅ |

#### Section 4 — Use Cases (3 Karten)
- **Kreativagentur** — „12 Macs, alle auf dem neusten Stand, Backups laufen, Onboarding in 15 Minuten."
- **Startup** — „Von 3 auf 15 Geräte skaliert, ohne IT-Abteilung."
- **Architekturbüro** — „Netzwerk, Drucker, Plotter — alles läuft. Endlich."

#### Section 5 — CTA
- „Kostenloses IT-Audit Ihrer Apple-Umgebung"
- Button: „Audit anfragen"

---

### Seite 4: Workshops (`/workshops`)

**Ziel:** Workshop-Anmeldungen generieren.

#### Section 1 — Hero
- **Headline:** „Mehr aus deinem Apple rausholen"
- **Subline:** „Praxisnahe Workshops für Einsteiger, Umsteiger und Teams."

#### Section 2 — Workshop-Katalog (Grid 2x2)

| Workshop | Zielgruppe | Dauer | Preis |
|---|---|---|---|
| iPhone & iPad Basics | Einsteiger / Senioren | 2h | CHF 89 |
| Mac-Produktivität | Freelancer / Kreative | 3h | CHF 129 |
| Sicherheit & Privacy | Alle | 2h | CHF 89 |
| Apple im Team | KMU-Teams | 4h | CHF 149/Person |

#### Section 3 — Formate
- **1:1 Coaching** — individuell, bei dir oder remote, CHF 129/h
- **Kleingruppe** (max. 6) — im Coworking Space in Zürich
- **Firmen-Workshop** — bei euch vor Ort, massgeschneidert

#### Section 4 — Nächste Termine + Anmeldung
Statische Liste der nächsten 3–5 Termine + CTA „Anmelden" (→ Cal.com oder Kontaktformular)

---

### Seite 5: Über uns (`/ueber-uns`)

**Ziel:** Vertrauen und persönliche Verbindung aufbauen.

#### Section 1 — Story
- Persönliches Foto
- „Warum ich das mache" — kurze Story (3–4 Absätze)
- Apple-Leidenschaft, Zürich-Bezug, Erfahrung

#### Section 2 — Qualifikationen
- Apple Zertifizierungen (falls vorhanden)
- Erfahrung in Jahren
- Anzahl betreuter Kunden/Geräte

#### Section 3 — Standort
- Karte mit Einzugsgebiet (SVG oder statisches Bild — kein Google Maps Embed wegen DSGVO)
- Oder: Textbeschreibung „Wir sind in der ganzen Stadt Zürich und im Kanton unterwegs"

---

### Seite 6: Blog (`/blog`)

**Ziel:** SEO-Traffic, Expertise zeigen, Vertrauen aufbauen.

#### Setup
- Astro Content Collections mit Markdown
- Blog-Posts haben: Titel, Datum, Kategorie, Excerpt, Lesezeit, Thumbnail
- Kategorien: Tipps & Tricks, KMU, Sicherheit, Neuheiten

#### Initiale Posts (3 Stück als Markdown)
1. „Mac langsam? 5 Tipps die sofort helfen"
2. „iCloud richtig nutzen — so sparst du Speicher"
3. „Apple für KMU — warum sich der Umstieg lohnt"

Posts werden als `.md` Files in `src/content/blog/` angelegt.

---

### Seite 7: Kontakt (`/kontakt`)

#### Section 1 — Kontaktformular
Felder:
- Name (required)
- E-Mail (required)
- Telefon (optional)
- Anliegen (Dropdown: Privat-Support / KMU-Anfrage / Workshop / Sonstiges)
- Nachricht (Textarea)
- Submit → Cloudflare Pages Function → E-Mail via Web3Forms oder Resend (Free Tier)

#### Section 2 — Kontaktkanäle (grosse klickbare Karten)
- 📞 Telefon: 044 XXX XX XX (click-to-call)
- 💬 WhatsApp: Direktlink (wa.me/41XXXXXXXXX)
- 📧 E-Mail: hallo@macmate.ch

#### Section 3 — Erreichbarkeit
- Mo–Fr: 08:00 – 18:00
- Sa: 09:00 – 14:00
- Notfall-Nummer: auf Anfrage

---

### Seite 8: Impressum (`/impressum`)

Schweizer Impressum nach OR Art. 3 Abs. 1 lit. s UWG:
- Name / Firma
- Adresse
- E-Mail
- UID-Nummer (falls vorhanden)
- Haftungsausschluss
- Urheberrecht

### Seite 9: Datenschutz (`/datenschutz`)

nDSG-konforme Datenschutzerklärung:
- Verantwortliche Stelle
- Erhobene Daten
- Zweck der Verarbeitung
- Cloudflare Analytics (cookieless)
- Kontaktformular-Daten
- Rechte der Betroffenen
- Keine Cookies → kein Cookie-Banner nötig

---

## Globale Elemente

### Sticky WhatsApp Button
- Position: fixed bottom-right (mobile), bottom-right mit Abstand (desktop)
- Grüner WhatsApp-Button mit Icon
- Öffnet wa.me Link in neuem Tab
- Auf allen Seiten sichtbar

### SEO & Strukturierte Daten

Jede Seite hat:
```html
<title>Seitentitel — MacMate · Apple Support Zürich</title>
<meta name="description" content="Spezifische Meta-Description, max 155 Zeichen">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://macmate.ch/...">
<meta property="og:locale" content="de_CH">
<link rel="canonical" href="https://macmate.ch/...">
```

Schema.org Markup auf Homepage (JSON-LD):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MacMate",
  "description": "Apple Support Service in Zürich",
  "url": "https://macmate.ch",
  "telephone": "+41 44 XXX XX XX",
  "email": "hallo@macmate.ch",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zürich",
    "addressRegion": "ZH",
    "addressCountry": "CH"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 47.3769, "longitude": 8.5417 },
    "geoRadius": "30000"
  },
  "priceRange": "CHF 69–229"
}
```

### Performance-Ziele
- Lighthouse Performance: ≥ 95
- Lighthouse Accessibility: ≥ 95
- Lighthouse SEO: 100
- First Contentful Paint: < 1.0s
- Cumulative Layout Shift: < 0.05
- Total Page Weight: < 500KB (inkl. Fonts)

### Fonts self-hosting
Lade die Fonts von Google Fonts als `.woff2` herunter und lege sie in `public/fonts/`:
```css
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/PlusJakartaSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
/* + 700, 800 weights */
```

---

## Cloudflare Konfiguration

### Cloudflare Pages Setup

```bash
# Build-Befehl
npm run build

# Build-Output-Verzeichnis
dist

# Root-Verzeichnis
/
```

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://macmate.ch',
  output: 'static',
  integrations: [tailwind()],
  // Kein Adapter nötig für rein statisch
  // Für Pages Functions: adapter: cloudflare() + output: 'hybrid'
});
```

### Kontaktformular — Cloudflare Pages Function

`functions/api/contact.ts`:
```typescript
// POST /api/contact
// Empfängt Formulardaten, validiert, sendet E-Mail via Web3Forms (Free: 250 Mails/Monat)
// Alternativ: Resend Free Tier (100 Mails/Tag)
// Kein Captcha nötig zum Start, Honeypot-Feld reicht

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  _honeypot?: string; // Anti-Spam: muss leer sein
}
```

### DNS-Einträge (Cloudflare)

```
Type  Name             Content                    Proxy
A     macmate.ch       → Cloudflare Pages (auto)  ☁️
CNAME www              macmate.ch                 ☁️
MX    macmate.ch       → E-Mail-Provider          DNS only
TXT   macmate.ch       v=spf1 ...                 DNS only
```

### Redirects (`public/_redirects`)
```
/home        /           301
/services    /           301
/business    /kmu        301
```

### Headers (`public/_headers`)
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cal.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com https://cal.com; frame-src https://cal.com;
```

---

## Responsive Breakpoints

```css
/* Mobile First */
sm: 640px    /* Große Phones */
md: 768px    /* Tablets */
lg: 1024px   /* Desktop */
xl: 1280px   /* Große Screens */
```

Alle Layouts sind Mobile-First:
- Service-Grid: 1 Spalte → 2 Spalten (md) → 4 Spalten (lg)
- Hero: Stack → Side-by-side (lg)
- Pricing: Stack → 3-Spalten (lg)
- Nav: Hamburger → Full nav (lg)

---

## Implementierungsreihenfolge

### Phase 1 — Grundgerüst
1. Astro-Projekt initialisieren mit Tailwind
2. `BaseLayout.astro` mit Nav + Footer + SEO Head
3. Tailwind-Config mit Farben und Fonts
4. Self-hosted Fonts einbinden
5. Globale Styles (CSS Custom Properties, Resets)

### Phase 2 — Kernseiten
6. Homepage mit allen 6 Sektionen
7. `/privatpersonen` mit Preisen und FAQ
8. `/kmu` mit Tiered Pricing
9. `/kontakt` mit Formular

### Phase 3 — Ergänzende Seiten
10. `/workshops`
11. `/ueber-uns`
12. `/impressum` und `/datenschutz`
13. Sticky WhatsApp Button

### Phase 4 — Blog & SEO
14. Blog Content Collection Setup
15. 3 initiale Blog-Posts schreiben
16. Blog-Übersichtsseite + Einzelpost-Layout
17. Schema.org JSON-LD
18. Open Graph Images
19. `robots.txt` und `sitemap.xml` (Astro generiert automatisch)

### Phase 5 — Formulare & Interaktivität
20. Kontaktformular mit Cloudflare Function
21. Cal.com Integration (Embed)
22. FAQ Accordions
23. Smooth Scroll für Anker-Links

### Phase 6 — Optimierung & Launch
24. Lighthouse Audit & Fixes
25. Cross-Browser Testing (Safari, Chrome, Firefox)
26. Mobile Testing (iOS Safari, Android Chrome)
27. Security Headers
28. Cloudflare Pages Deployment konfigurieren
29. DNS umleiten auf Cloudflare Pages
30. Cloudflare Web Analytics aktivieren

---

## Wichtige Hinweise für die Umsetzung

### Do's ✅
- Semantisches HTML (header, main, section, article, nav, footer)
- `loading="lazy"` auf allen Bildern unterhalb des Folds
- Alt-Texte auf allen Bildern (Deutsch)
- Focus-visible Styles für Accessibility
- Prefers-reduced-motion Media Query respektieren
- Alle externen Links mit `rel="noopener noreferrer"`
- Kontaktdaten als Platzhalter markieren mit `<!-- TODO: echte Nummer -->` Kommentaren

### Don'ts ❌
- Kein Google Analytics (nicht nDSG-konform ohne Consent)
- Kein Google Maps Embed (Datenschutz-Problem) — stattdessen statische Karte oder SVG
- Kein Cookie-Banner (nicht nötig wenn keine Cookies gesetzt werden)
- Kein JavaScript wo CSS reicht (Accordions via `<details>/<summary>`)
- Keine Stock-Fotos — lieber Icons und Illustrationen bis eigene Fotos vorhanden
- Kein Apple-Logo oder Apple-Trademark verwenden — immer „Apple-Produkte" oder Gerätenamen
- Keine `localStorage` oder `sessionStorage` Nutzung

### Schweiz-spezifisch 🇨🇭
- Preise immer in CHF mit Punkt als Tausender-Trennzeichen (CHF 1'000)
- Telefonnummern im Format: 044 XXX XX XX
- Rechtliche Texte auf Deutsch
- nDSG (neues Datenschutzgesetz) statt DSGVO — ähnlich, aber nicht identisch
- „Sie"-Form für B2B-Seiten (KMU), „du"-Form für B2C-Seiten (Privat, Workshops)
