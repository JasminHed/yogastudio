export default function Retreat() {
  return (
    <section
      id="retreat"
      aria-labelledby="retreat-heading"
      className="relative isolate flex min-h-[85vh] items-end overflow-hidden bg-ink text-white sm:items-center"
    >
      <img
        src="/images/retreat.jpg"
        alt="Tre personer sitter i skräddarställning på yogamattor utomhus i kvällssol under ett retreat."
        width="1666"
        height="2500"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/10 sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-ink/10" />

      <div className="mx-auto w-full max-w-[1400px] px-[6vw] py-16 sm:py-24">
        <div className="max-w-lg">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accentsoft">Retreat</p>
          <h2 id="retreat-heading" className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Sex dagar på Österlen
          </h2>
          <p className="mb-8 max-w-[46ch] text-white/80">
            En gång om året reser vi bort tillsammans. Nästa retreat går till
            Österlen i maj, sex dagar med yoga, workshops, gemensam brunch
            och middag. Vi håller gruppen liten, max tolv personer, så det
            finns tid för alla.
          </p>
        </div>

        <div className="grid max-w-3xl grid-cols-1 gap-4 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/60">När</p>
            <p className="mt-1 font-semibold">12–17 maj 2027</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/60">Ingår</p>
            <p className="mt-1 font-semibold">
              Yoga, workshop, brunch, middag och del i dubbelrum
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/60">Pris</p>
            <p className="mt-1 font-semibold">9 995 kr, allt inkluderat</p>
          </div>
        </div>

        <p className="mt-8 text-white/80">
          Nyfiken? Skriv till{" "}
          <a href="mailto:info@yogastudio.se" className="font-semibold text-white underline decoration-white/40 underline-offset-4">
            info@yogastudio.se
          </a>{" "}
          så berättar vi mer.
        </p>
      </div>
    </section>
  );
}
