# Yogastudio

En sida för en fiktiv yogastudio i Stockholm. Vinyasa, Yin, Hatha, Sound
Healing, Restorative och Ashtanga, schema, inloggning, bokning av pass,
betalning, medlemskap och ett årligt retreat.

Byggd med **React** och **Tailwind CSS** via Vite. Inget annat.

Detta är en demo av hur en bokningsapp skulle kunna fungera, inte en riktig
inloggning, databas eller betalning. Allt sker i webbläsarens minne och
återställs när sidan laddas om.

## Struktur

- `index.html` - Vite-entrypoint, bara `<div id="root">`
- `src/main.jsx` - startar React
- `src/App.jsx` - sätter ihop sidan av sektionerna nedan
- `src/context/BookingContext.jsx` - allt delat tillstånd: inloggad
  användare, bokningar, medlemskap, drop-in-krediter och vilken modal som
  är öppen
- `src/components/` - en fil per sektion/modal (Header, Hero, About,
  Classes, Pricing, Schedule, Retreat, Footer, AuthModal, PaymentModal,
  AccountPanel, DemoNotice, Modal)
- `src/index.css` - Tailwinds tre @tailwind-rader, inget mer
- `public/images/` - bilder (fria enligt Unsplash License)

## Hur demot fungerar

1. Köp Drop-in eller ett kort under Medlemskap. Inte inloggad? Ett
   inloggningsformulär dyker upp först, valfritt namn/e-post räcker.
2. Ett betalningssteg öppnas (valfria kortsiffror, ingen riktig betalning
   sker).
3. Nu går det att klicka **Boka** bredvid ett pass i schemat, det bokar
   direkt och drar en krediter om du inte har ett obegränsat kort.
4. Klicka ditt namn uppe till höger för att se dina bokningar, ditt
   kort/krediter, och för att avboka eller logga ut.

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
directory `dist` (redan satt i `netlify.toml`). Ingen egen domän krävs,
`*.netlify.app`-adressen fungerar direkt.
