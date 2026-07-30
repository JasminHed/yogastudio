import { useBooking } from "../context/BookingContext.jsx";
import Modal from "./Modal.jsx";

export default function PaymentModal() {
  const { paymentOpen, pendingItem, closePayment, confirmPayment } = useBooking();

  if (!paymentOpen || !pendingItem) return null;

  function handleSubmit(event) {
    event.preventDefault();
    confirmPayment();
  }

  return (
    <Modal title="Betala" onClose={closePayment}>
      <div className="mb-6 flex items-center justify-between rounded bg-accentsoft px-4 py-3">
        <span className="font-semibold text-ink">{pendingItem.label}</span>
        <span className="font-bold text-ink">{pendingItem.price}</span>
      </div>

      <p className="mb-6 text-sm text-muted">
        Demo. Ingen riktig betalning sker, fyll bara i valfria siffror.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-muted" htmlFor="card-number">Kortnummer</label>
          <input
            id="card-number"
            type="text"
            inputMode="numeric"
            placeholder="4242 4242 4242 4242"
            required
            className="rounded border border-line px-4 py-3 text-ink focus:border-accent focus:outline-none"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-semibold text-muted" htmlFor="card-expiry">Utgångsdatum</label>
            <input
              id="card-expiry"
              type="text"
              placeholder="MM/ÅÅ"
              required
              className="rounded border border-line px-4 py-3 text-ink focus:border-accent focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-semibold text-muted" htmlFor="card-cvc">CVC</label>
            <input
              id="card-cvc"
              type="text"
              inputMode="numeric"
              placeholder="123"
              required
              className="rounded border border-line px-4 py-3 text-ink focus:border-accent focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-2 rounded bg-ink px-7 py-3 font-bold text-white hover:bg-accent"
        >
          Betala {pendingItem.price}
        </button>
      </form>
    </Modal>
  );
}
