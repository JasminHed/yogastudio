import { useEffect, useRef } from "react";
import { useBooking } from "../context/BookingContext.jsx";
import { scrollToId } from "../lib/scrollTo.js";

export default function AccountPanel() {
  const {
    user,
    accountOpen,
    setAccountOpen,
    logout,
    bookings,
    cancelBooking,
    membership,
    dropInCredits,
  } = useBooking();
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setAccountOpen(false);
      }
    }
    if (accountOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [accountOpen, setAccountOpen]);

  if (!user || !accountOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute right-[6vw] top-full z-50 mt-2 w-[calc(100vw-12vw)] max-w-sm rounded-xl border border-line bg-white p-6 shadow-xl"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Inloggad som</p>
          <p className="text-lg font-extrabold text-ink">{user.name}</p>
        </div>
        <button
          type="button"
          onClick={() => setAccountOpen(false)}
          aria-label="Stäng"
          className="text-2xl leading-none text-muted hover:text-ink"
        >
          ×
        </button>
      </div>

      {membership ? (
        <p className="mb-4 w-fit rounded bg-accentsoft px-3 py-1.5 text-xs font-bold text-accent">
          Medlemskap: {membership}
        </p>
      ) : dropInCredits > 0 ? (
        <p className="mb-4 w-fit rounded bg-accentsoft px-3 py-1.5 text-xs font-bold text-accent">
          {dropInCredits} drop-in{dropInCredits > 1 ? "-krediter" : "-kredit"} kvar
        </p>
      ) : (
        <button
          type="button"
          onClick={() => {
            setAccountOpen(false);
            scrollToId("medlemskap");
          }}
          className="mb-4 w-fit rounded bg-ink px-3 py-1.5 text-xs font-bold text-white hover:bg-accent"
        >
          Köp drop-in eller medlemskap
        </button>
      )}

      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Mina bokningar</p>
      {bookings.length === 0 ? (
        <p className="mb-4 text-sm text-muted">Inga bokningar än.</p>
      ) : (
        <ul className="mb-4 divide-y divide-line">
          {bookings.map((b) => (
            <li key={b.id} className="flex items-center justify-between gap-3 py-2">
              <span className="text-sm text-ink">{b.label}</span>
              <button
                type="button"
                onClick={() => cancelBooking(b.id)}
                className="whitespace-nowrap text-xs font-bold text-accent hover:underline"
              >
                Avboka
              </button>
            </li>
          ))}
        </ul>
      )}

      <button type="button" onClick={logout} className="text-sm font-semibold text-muted hover:text-ink">
        Logga ut
      </button>
    </div>
  );
}
