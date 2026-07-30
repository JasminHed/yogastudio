const treatments = [
  { name: "Klassisk massage, 60 min", price: "750 kr", desc: "Lugna, hela strykningar för allmän avslappning." },
  { name: "Djupvävnadsmassage, 90 min", price: "1 050 kr", desc: "Djupare tryck mot spänd muskulatur och stelhet." },
  { name: "Örtkuddebehandling, 60 min", price: "800 kr", desc: "Varma örtkuddar mot rygg och axlar." },
  { name: "Enskild andningssession, 45 min", price: "650 kr", desc: "Guidad andning, en och en, i eget tempo." },
];

export default function Treatments() {
  return (
    <section id="behandlingar" aria-labelledby="behandlingar-heading" className="bg-accentsoft">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-[6vw] py-24 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <div className="order-first overflow-hidden rounded-xl sm:order-none">
          <img
            src="/images/behandlingar.jpg"
            alt="Närbild på två händer som ger massage på en persons axel och nacke i ett ljust behandlingsrum."
            width="1600"
            height="1600"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Behandlingar</p>
          <h2 id="behandlingar-heading" className="mb-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Enskild tid, utanför schemat
          </h2>
          <p className="mb-6 max-w-[46ch] text-muted">
            Utöver klasserna tar vi emot enskilda bokningar för kroppsarbete.
            Skriv till oss på{" "}
            <a href="mailto:hej@yogastudio.se" className="font-semibold text-ink underline">
              hej@yogastudio.se
            </a>{" "}
            med vilken behandling och tid du önskar.
          </p>

          <ul className="divide-y divide-line rounded-xl border border-line bg-white">
            {treatments.map((t) => (
              <li key={t.name} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.desc}</p>
                </div>
                <span className="whitespace-nowrap font-semibold text-ink">{t.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
