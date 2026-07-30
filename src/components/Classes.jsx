const classes = [
  {
    name: "Vinyasa",
    desc: "Flödande, andningsstyrda sekvenser som byggs upp i tempo. Stärkande och svettigt, med utrymme för egen rytm.",
    meta: "60–75 min · Alla nivåer",
  },
  {
    name: "Yin",
    desc: "Långa, passiva positioner med stöd av kuddar och block. Ett långsamt arbete med bindväv och nervsystem.",
    meta: "75 min · Alla nivåer",
  },
  {
    name: "Hatha",
    desc: "Klassiska positioner, hållna längre, med tydlig andningsteknik. En lugn men tydlig grund att bygga vidare på.",
    meta: "60 min · Nybörjarvänlig",
  },
  {
    name: "Sound Healing",
    desc: "Liggande, guidad avslappning till klangskålar och gonggong. Inget rörelsepass, bara vila, djupt och medvetet.",
    meta: "50 min · Alla nivåer",
  },
];

export default function Classes() {
  return (
    <section id="klasser" aria-labelledby="klasser-heading" className="bg-accentsoft">
      <div className="mx-auto max-w-[1400px] px-[6vw] py-24">
        <div className="mb-12 max-w-[60ch]">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Klasser</p>
          <h2 id="klasser-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Fyra klasser att välja mellan
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((c) => (
            <article key={c.name} className="flex flex-col gap-3 bg-white p-9">
              <h3 className="text-xl font-extrabold text-ink">{c.name}</h3>
              <p className="flex-grow text-muted">{c.desc}</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">{c.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
