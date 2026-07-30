export default function About() {
  return (
    <section
      id="om"
      aria-labelledby="om-heading"
      className="mx-auto grid max-w-[1400px] items-center gap-12 px-[6vw] py-24 sm:grid-cols-2"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/om-studion.jpg"
          alt="Hoprullade yogamattor i olika färger, förvarade i öppna hyllfack i studion."
          width="1600"
          height="1600"
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
          Om studion
        </p>
        <h2 id="om-heading" className="mb-4 text-4xl font-extrabold tracking-tight text-ink">
          En plats att få landa på.
        </h2>
        <p className="mb-4 max-w-[46ch] text-muted">
          Studion har en sal med plats för tolv personer per pass,
          omklädningsrum för att byta om i lugn och ro, dusch efter passet
          och en reception där vi möter dig när du kommer in.
        </p>
        <p className="max-w-[46ch] text-muted">
          Vi tror på enkla rum: naturligt ljus, golvvärme, egna mattor att
          låna och te efter passet. Ingen musik i lobbyn, inga skärmar. Bara
          ett lugnt rum att öva i.
        </p>
      </div>
    </section>
  );
}
