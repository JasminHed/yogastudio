import { useBooking } from "../context/BookingContext.jsx";

const rows = [
  { day: "Måndag", morning: { time: "07.00", name: "Vinyasa" }, evening: { time: "18.00", name: "Hatha" } },
  { day: "Tisdag", morning: { time: "12.00", name: "Yin" }, evening: { time: "18.00", name: "Vinyasa" } },
  { day: "Onsdag", morning: { time: "07.00", name: "Hatha" }, evening: { time: "19.00", name: "Sound Healing" } },
  { day: "Torsdag", morning: { time: "12.00", name: "Vinyasa" }, evening: { time: "18.00", name: "Yin" } },
  { day: "Fredag", morning: { time: "09.00", name: "Hatha" }, evening: { time: "17.00", name: "Vinyasa" } },
  { day: "Lördag", morning: { time: "09.00", name: "Vinyasa" }, evening: { time: "13.00", name: "Yin" } },
  { day: "Söndag", morning: { time: "10.00", name: "Sound Healing" }, evening: { time: "16.00", name: "Hatha" } },
];

const dropInPrice = "220 kr";

function slotId(day, slot) {
  return `${day}-${slot.time}-${slot.name}`.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

function Slot({ day, slot }) {
  const { isBooked, requestBooking, cancelBooking } = useBooking();
  const id = slotId(day, slot);
  const booked = isBooked(id);

  return (
    <div className="flex items-center justify-between gap-3">
      <span>
        {slot.time} {slot.name}
      </span>
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
          onClick={() =>
            requestBooking({ id, kind: "class", label: `${day} ${slot.time} ${slot.name}`, price: dropInPrice })
          }
          className="whitespace-nowrap rounded bg-ink px-3 py-1 text-xs font-bold text-white hover:bg-accent"
        >
          Boka
        </button>
      )}
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
          Gäller höstterminen 2026. Vårens schema publiceras i december. Klicka
          Boka bredvid ett pass för att reservera din plats.
        </p>
      </div>

      <div className="mx-auto max-w-[900px] overflow-x-auto rounded-xl border border-line bg-white p-2 shadow-md sm:p-4">
        <table className="w-full min-w-[520px] border-collapse">
          <caption className="sr-only">Veckoschema för yogapass på Yogastudio, höstterminen 2026</caption>
          <thead>
            <tr>
              {["Dag", "Förmiddag", "Kväll"].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-line bg-accentsoft px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-muted first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.day}>
                <th
                  scope="row"
                  className={`px-5 py-4 text-left font-semibold text-ink ${i < rows.length - 1 ? "border-b border-line" : ""}`}
                >
                  {row.day}
                </th>
                <td className={`px-5 py-4 ${i < rows.length - 1 ? "border-b border-line" : ""}`}>
                  <Slot day={row.day} slot={row.morning} />
                </td>
                <td className={`px-5 py-4 ${i < rows.length - 1 ? "border-b border-line" : ""}`}>
                  <Slot day={row.day} slot={row.evening} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
