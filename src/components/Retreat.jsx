export default function Retreat() {
  return (
    <section id="retreat" aria-labelledby="retreat-heading" className="bg-accentsoft">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-[6vw] py-24 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <div className="order-first overflow-hidden rounded-xl sm:order-none">
          <img
            src="/images/retreat.jpg"
            alt="En träbro leder in i en grön, ljus skog."
            width="1600"
            height="1600"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Retreat</p>
          <h2 id="retreat-heading" className="mb-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Sex dagar på Österlen
          </h2>
          <p className="mb-6 max-w-[46ch] text-muted">
            En gång om året reser vi bort tillsammans. Nästa retreat går till
            Österlen i maj, sex dagar med yoga, workshops, gemensam brunch
            och middag varje kväll, i delat dubbelrum. Vi håller gruppen
            liten, max tolv personer, så det finns tid för alla.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">När</p>
              <p className="mt-1 font-semibold text-ink">12–17 maj 2027</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">Ingår</p>
              <p className="mt-1 font-semibold text-ink">
                Yoga, workshop, brunch, middag och del i dubbelrum
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">Pris</p>
              <p className="mt-1 font-semibold text-ink">9 995 kr, allt inkluderat</p>
            </div>
          </div>

          <p className="mt-6 text-muted">
            Nyfiken? Skriv till{" "}
            <a href="mailto:info@yogastudio.se" className="font-semibold text-ink underline">
              info@yogastudio.se
            </a>{" "}
            så berättar vi mer.
          </p>
        </div>
      </div>
    </section>
  );
}
