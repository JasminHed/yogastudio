import { scrollToId } from "../lib/scrollTo.js";

export default function Hero() {
  function handleNavClick(event, id) {
    event.preventDefault();
    scrollToId(id);
  }

  return (
    <section id="top" className="relative">
      <img
        src="/images/featureyoga.jpg"
        alt="Yogamatta, växt och bärbar dator i ett soligt, minimalistiskt rum."
        width="2400"
        height="1500"
        loading="eager"
        className="h-[78vh] min-h-[520px] w-full object-cover object-[30%_center] sm:h-screen"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-[6vw] pb-14 sm:pb-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-white/90">
          Yoga i Stockholm
        </p>
        <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Plats för lugn, yoga och gemenskap.
        </h1>
        <p className="mb-8 max-w-[42ch] text-lg text-white/85">
          Här hittar du en lugn och trygg plats att praktisera yoga på,
          bygga gemenskap och hitta behandlingar som får dig att må bättre.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#medlemskap"
            onClick={(e) => handleNavClick(e, "medlemskap")}
            className="rounded bg-white px-7 py-3 font-bold text-ink hover:bg-accentsoft"
          >
            Boka plats
          </a>
          <a
            href="#schema"
            onClick={(e) => handleNavClick(e, "schema")}
            className="rounded border border-white px-7 py-3 font-bold text-white hover:bg-white hover:text-ink"
          >
            Se schema
          </a>
        </div>
      </div>
    </section>
  );
}
