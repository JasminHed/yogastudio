import { useBooking } from "../context/BookingContext.jsx";

export default function MyBookings() {
  const { user, bookings, cancelBooking, membership } = useBooking();

  if (!user) return null;

  return (
    <section id="mina-bokningar" aria-labelledby="mina-bokningar-heading" className="mx-auto max-w-[1400px] px-[6vw] py-24">
      <div className="mb-8 max-w-[60ch]">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Mitt konto</p>
        <h2 id="mina-bokningar-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Hej, {user.name.split(" ")[0] || user.name}
        </h2>
      </div>

      {membership && (
        <p className="mb-6 w-fit rounded bg-accentsoft px-4 py-2 text-sm font-bold text-accent">
          Medlemskap: {membership}
        </p>
      )}

      {bookings.length === 0 ? (
        <p className="text-muted">Inga bokningar än — välj ett pass i schemat eller en behandling ovan.</p>
      ) : (
        <ul className="max-w-[640px] divide-y divide-line rounded-xl border border-line bg-white">
          {bookings.map((b) => (
            <li key={b.id} className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="font-semibold text-ink">{b.label}</p>
                <p className="text-sm text-muted">{b.price}</p>
              </div>
              <button
                type="button"
                onClick={() => cancelBooking(b.id)}
                className="whitespace-nowrap rounded border border-line px-3 py-1.5 text-xs font-bold text-ink hover:bg-accentsoft"
              >
                Avboka
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
