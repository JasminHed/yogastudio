import { useBooking } from "../context/BookingContext.jsx";

const week = [
  { day: "Måndag", classes: [{ time: "07.00", name: "Vinyasa" }, { time: "18.00", name: "Hatha" }] },
  { day: "Tisdag", classes: [{ time: "18.00", name: "Yin" }] },
  { day: "Onsdag", classes: [{ time: "07.00", name: "Hatha" }, { time: "19.00", name: "Sound Healing" }] },
  { day: "Torsdag", classes: [{ time: "18.00", name: "Vinyasa" }] },
  { day: "Fredag", classes: [{ time: "09.00", name: "Hatha" }, { time: "17.00", name: "Vinyasa" }] },
  { day: "Lördag", classes: [{ time: "10.00", name: "Sound Healing" }] },
  { day: "Söndag", classes: [{ time: "16.00", name: "Hatha" }] },
];

const dropInPrice = "220 kr";

function slotId(day, cls) {
  return `${day}-${cls.time}-${cls.name}`.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

function DayColumn({ day, classes }) {
  const { isBooked, requestBooking, cancelBooking } = useBooking();

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
      <div className="bg-accentsoft px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-ink">
        {day}
      </div>
      <div className="divide-y divide-line">
        {classes.length === 0 && <p className="px-4 py-5 text-center text-xs text-muted">Inga pass</p>}
        {classes.map((cls) => {
          const id = slotId(day, cls);
          const booked = isBooked(id);
          return (
            <div key={id} className="flex items-center justify-between gap-2 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink">{cls.time}</p>
                <p className="text-xs text-muted">{cls.name}</p>
              </div>
              {booked ? (
                <button
                  type="button"
                  onClick={() => cancelBooking(id)}
                  className="whitespace-nowrap text-xs font-bold text-accent hover:underline"
                >
                  ✓ Bokad
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    requestBooking({ id, kind: "class", label: `${day} ${cls.time} ${cls.name}`, price: dropInPrice })
                  }
                  className="whitespace-nowrap rounded bg-ink px-2.5 py-1 text-xs font-bold text-white hover:bg-accent"
                >
                  Boka
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schema" aria-labelledby="schema-heading" className="mx-auto max-w-[1400px] px-[6vw] py-24">
      <div className="mx-auto mb-12 max-w-[60ch] text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Schema · HT26</p>
        <h2 id="schema-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Höstterminens pass
        </h2>
        <p className="mt-3 text-muted">
          Gäller höstterminen 2026. Vårens schema publiceras i december.
          Klicka Boka på ett pass för att reservera din plats.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {week.map(({ day, classes }) => (
          <DayColumn key={day} day={day} classes={classes} />
        ))}
      </div>
    </section>
  );
}
