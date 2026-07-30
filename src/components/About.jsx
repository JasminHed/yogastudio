export default function About() {
  return (
    <section
      id="om"
      aria-labelledby="om-heading"
      className="mx-auto grid max-w-[1400px] items-center gap-12 px-[6vw] py-24 sm:grid-cols-2"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/featuremeditation.jpg"
          alt="Närbild på en hand som vilar mot ett knä under en lugn stund av meditation."
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
        <p className="mb-6 max-w-[46ch] text-muted">
          Vi tror på enkla rum: naturligt ljus, golvvärme och egna mattor
          att låna. Bara ett lugnt rum att öva i.
        </p>
        <ul className="max-w-[46ch] space-y-3">
          <li className="flex items-center gap-3 text-muted">
            <span aria-hidden="true">🛎️</span> Reception öppen, vi möter dig när du kommer in
          </li>
          <li className="flex items-center gap-3 text-muted">
            <span aria-hidden="true">🧘</span> Yogasal med plats för 12 personer
          </li>
          <li className="flex items-center gap-3 text-muted">
            <span aria-hidden="true">🤫</span> Ingen musik i lobbyn, inga skärmar
          </li>
          <li className="flex items-center gap-3 text-muted">
            <span aria-hidden="true">🍵</span> Te efter klass
          </li>
          <li className="flex items-center gap-3 text-muted">
            <span aria-hidden="true">🚿</span> Omklädningsrum och dusch
          </li>
        </ul>
      </div>
    </section>
  );
}
