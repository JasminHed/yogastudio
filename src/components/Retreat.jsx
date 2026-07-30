export default function Retreat() {
  return (
    <section id="retreat" aria-labelledby="retreat-heading" className="bg-accentsoft">
      <div className="mx-auto max-w-[1400px] px-[6vw] py-24">
        <div className="mb-8 max-w-[60ch]">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Retreat</p>
          <h2 id="retreat-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Sex dagar på Österlen
          </h2>
          <p className="mt-3 text-muted">
            En gång om året reser vi bort tillsammans. Nästa retreat går till
            Österlen i maj, sex dagar med yoga, workshops, gemensam brunch
            och middag varje kväll, i delat dubbelrum. Vi håller gruppen
            liten, max tolv personer, så det finns tid för alla.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-muted">När</p>
            <p className="mt-1 text-lg font-semibold text-ink">12–17 maj 2027</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-muted">Ingår</p>
            <p className="mt-1 text-lg font-semibold text-ink">
              Yoga och workshop varje dag, brunch, middag och del i dubbelrum
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-muted">Pris</p>
            <p className="mt-1 text-lg font-semibold text-ink">9 995 kr, allt inkluderat</p>
          </div>
        </div>

        <p className="mt-8 text-muted">
          Nyfiken? Skriv till{" "}
          <a href="mailto:info@yogastudio.se" className="font-semibold text-ink underline">
            info@yogastudio.se
          </a>{" "}
          så berättar vi mer.
        </p>
      </div>
    </section>
  );
}
