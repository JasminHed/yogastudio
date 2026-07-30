# Studio Lugn

En sida för en fiktiv yogastudio i Stockholm — Vinyasa, Yin, Hatha, Sound Healing,
schema, bokningsformulär, medlemskap/drop-in, behandlingar och söndagsfrukost.

Byggd som ett portfolio-projekt: ren HTML/CSS/JS, inget ramverk, inget bygg-steg.

## Struktur

- `index.html` — hela sidan (en sida, ankarlänkar till varje sektion)
- `style.css` — all styling
- `script.js` — mobilmenyns öppna/stäng
- `tack.html` — bekräftelsesida efter bokning
- `images/` — bilder från Unsplash (fria enligt Unsplash License)

## Bokningsformulär

Formuläret på `#boka` är byggt för [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) —
`data-netlify="true"` gör att Netlify fångar inskick automatiskt vid deploy, utan backend.
Inskick syns under **Forms** i Netlify-adminet, med möjlighet att koppla på
e-postnotiser.

## Köra lokalt

```
python3 -m http.server 8000
```

och öppna `http://localhost:8000`.

## Deploy

Byggd för statisk hosting på Netlify (ingen build command, publish directory = `.`).
Ingen egen domän krävs — `*.netlify.app`-adressen fungerar direkt.
