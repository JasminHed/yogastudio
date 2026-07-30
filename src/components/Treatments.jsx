import { useBooking } from "../context/BookingContext.jsx";

const treatments = [
  { name: "Klassisk massage, 60 min", price: "750 kr" },
  { name: "Djupvävnadsmassage, 90 min", price: "1 050 kr" },
  { name: "Örtkuddebehandling, 60 min", price: "800 kr" },
  { name: "Enskild andningssession, 45 min", price: "650 kr" },
];

function treatmentId(name) {
  return `treatment-${name}`.toLowerCase().replace(/\s+/g, "-").replace(/,/g, "");
}

export default function Treatments() {
  const { isBooked, requestBooking, cancelBooking } = useBooking();

  return (
    <section id="behandlingar" aria-labelledby="behandlingar-heading" className="bg-accentsoft">
      <div className="mx-auto max-w-[1400px] px-[6vw] py-24">
        <div className="mb-8 max-w-[60ch]">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Behandlingar</p>
          <h2 id="behandlingar-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Enskild tid, utanför schemat
          </h2>
          <p className="mt-3 text-muted">
            Utöver klasserna tar vi emot enskilda bokningar för kroppsarbete —
            boka och betala direkt nedan.
          </p>
        </div>

        <ul className="max-w-[900px] rounded-xl border border-line bg-white">
          {treatments.map((t, i) => {
            const id = treatmentId(t.name);
            const booked = isBooked(id);
            return (
              <li
                key={t.name}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${i < treatments.length - 1 ? "border-b border-line" : ""}`}
              >
                <span className="text-muted">{t.name}</span>
                <div className="flex items-center gap-4">
                  <span className="whitespace-nowrap font-semibold text-ink">{t.price}</span>
                  {booked ? (
                    <button
                      type="button"
                      onClick={() => cancelBooking(id)}
                      className="whitespace-nowrap text-xs font-bold text-accent hover:underline"
                    >
                      ✓ Bokad · Avboka
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => requestBooking({ id, kind: "treatment", label: t.name, price: t.price })}
                      className="whitespace-nowrap rounded bg-ink px-3 py-1.5 text-xs font-bold text-white hover:bg-accent"
                    >
                      Boka
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
