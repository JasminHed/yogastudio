# Yogastudio

En sida för en fiktiv yogastudio i Stockholm — Vinyasa, Yin, Hatha, Sound
Healing, schema, inloggning, bokning av pass/behandlingar, betalning och
medlemskap.

Byggd med **React** och **Tailwind CSS** via Vite. Inget annat.

Detta är en demo av hur en bokningsapp skulle kunna fungera — inte en riktig
inloggning, databas eller betalning. Allt sker i webbläsarens minne och
återställs när sidan laddas om.

## Struktur

- `index.html` — Vite-entrypoint, bara `<div id="root">`
- `src/main.jsx` — startar React
- `src/App.jsx` — sätter ihop sidan av sektionerna nedan
- `src/context/BookingContext.jsx` — allt delat tillstånd: inloggad
  användare, bokningar, medlemskap och vilken modal som är öppen
- `src/components/` — en fil per sektion/modal (Header, Hero, About,
  Classes, Schedule, Pricing, Treatments, MyBookings, Footer, AuthModal,
  PaymentModal, Modal)
- `src/index.css` — Tailwinds tre @tailwind-rader, inget mer
- `public/images/` — bilder (fria enligt Unsplash License)

## Hur demot fungerar

1. Klicka **Boka** bredvid ett pass i schemat eller en behandling.
2. Inte inloggad? Ett inloggningsformulär dyker upp — valfritt namn/e-post
   räcker, ingen riktig kontokoll.
3. Sedan öppnas ett betalningssteg (valfria kortsiffror, ingen riktig
   betalning sker).
4. Bokningen dyker upp under **Mitt konto**, med möjlighet att avboka.

## Köra lokalt

```
npm install
npm run dev
```

## Deploy

```
npm run build
```

byggs till `dist/`. På Netlify: build command `npm run build`, publish
directory `dist` (redan satt i `netlify.toml`). Ingen egen domän krävs —
`*.netlify.app`-adressen fungerar direkt.
