export default function About() {
  return (
    <section
      id="om"
      aria-labelledby="om-heading"
      className="mx-auto grid max-w-[1400px] items-center gap-12 px-[6vw] py-24 sm:grid-cols-2"
    >
      <div className="rounded-xl bg-accentsoft p-12">
        <img
          src="/images/om-studion.jpg"
          alt="Enkel linjeteckning av en person i trädposition (Vrikshasana)."
          width="1200"
          height="1200"
          loading="lazy"
          className="aspect-square w-full object-contain"
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
          Om studion
        </p>
        <h2 id="om-heading" className="mb-4 text-4xl font-extrabold tracking-tight text-ink">
          Litet, personligt och utan brådska.
        </h2>
        <p className="mb-4 max-w-[46ch] text-muted">
          Yogastudio drivs av en lärare, i en och samma lokal, med plats för
          max tolv personer per pass. Det gör att vi kan hålla en hand på
          ryggen när det behövs — och lämna dig ifred när det inte gör det.
        </p>
        <p className="max-w-[46ch] text-muted">
          Vi tror på enkla rum: naturligt ljus, golvvärme, egna mattor att
          låna och te efter passet. Ingen musik i lobbyn, inga skärmar. Bara
          plats att landa.
        </p>
      </div>
    </section>
  );
}
