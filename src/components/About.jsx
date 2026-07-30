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
          Här hittar du naturligt ljus och högt i tak anpassat för yoga i
          alla dess former.
        </p>
        <ul className="max-w-[46ch] space-y-3">
          <li className="flex items-center gap-3 text-muted">
            <svg className="h-5 w-5 flex-shrink-0 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 19h16" />
              <path d="M6 19a6 6 0 0 1 12 0" />
              <path d="M12 9V7" />
              <circle cx="12" cy="5" r="1" />
            </svg>
            Reception öppen, vi möter dig när du kommer in
          </li>
          <li className="flex items-center gap-3 text-muted">
            <svg className="h-5 w-5 flex-shrink-0 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="5" r="2" />
              <path d="M6 19c0-3 2.5-6 6-6s6 3 6 6" />
              <path d="M9 13l-3 6" />
              <path d="M15 13l3 6" />
            </svg>
            Yogasal med plats för 12 personer
          </li>
          <li className="flex items-center gap-3 text-muted">
            <svg className="h-5 w-5 flex-shrink-0 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="M16 9l5 6M21 9l-5 6" />
            </svg>
            Ingen musik i lobbyn, inga skärmar
          </li>
          <li className="flex items-center gap-3 text-muted">
            <svg className="h-5 w-5 flex-shrink-0 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
              <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
              <path d="M8 3c0 1-1 1-1 2s1 1 1 2M12 3c0 1-1 1-1 2s1 1 1 2" />
            </svg>
            Te efter klass
          </li>
          <li className="flex items-center gap-3 text-muted">
            <svg className="h-5 w-5 flex-shrink-0 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12a8 8 0 0 1 14.5-4.5" />
              <path d="M18 4v4h-4" />
              <path d="M7 15v2M11 15v2M15 15v2M9 19v1M13 19v1" />
            </svg>
            Omklädningsrum och dusch
          </li>
        </ul>
      </div>
    </section>
  );
}
