export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1400px] items-center gap-12 px-[6vw] py-24 sm:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
          Yoga i Stockholm
        </p>
        <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Rum att andas ut i.
        </h1>
        <p className="mb-8 max-w-[42ch] text-lg text-muted">
          Vinyasa, Yin, Hatha och Sound Healing i en ljus studio på Södermalm.
          Drop-in, klass, klippkort, månadskort eller årskort — du väljer takten.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#schema"
            className="rounded bg-ink px-7 py-3 font-bold text-white hover:bg-accent"
          >
            Boka plats
          </a>
          <a
            href="#medlemskap"
            className="rounded border border-ink px-7 py-3 font-bold text-ink hover:bg-ink hover:text-white"
          >
            Se priser
          </a>
        </div>
      </div>

      <div className="order-first rounded-xl bg-accentsoft p-12 sm:order-none">
        <img
          src="/images/hero.jpg"
          alt="Enkel linjeteckning av en person i krigare II-position (Virabhadrasana II)."
          width="1200"
          height="1200"
          loading="eager"
          className="aspect-square w-full object-contain"
        />
      </div>
    </section>
  );
}
