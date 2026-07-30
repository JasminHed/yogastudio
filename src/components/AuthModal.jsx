import { useState } from "react";
import { useBooking } from "../context/BookingContext.jsx";
import Modal from "./Modal.jsx";

export default function AuthModal() {
  const { authOpen, closeAuth, login } = useBooking();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!authOpen) return null;

  function handleSubmit(event) {
    event.preventDefault();
    login(name, email);
  }

  return (
    <Modal title="Skapa konto" onClose={closeAuth}>
      <p className="mb-6 text-sm text-muted">
        Har du redan ett konto? <span className="font-semibold text-ink">Logga in här.</span>{" "}
        Detta är en demo, ingen riktig inloggning krävs, fyll bara i
        valfritt namn och e-post för att fortsätta.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-muted" htmlFor="login-name">Namn</label>
          <input
            id="login-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border border-line px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none sm:px-4 sm:py-3 sm:text-base"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-muted" htmlFor="login-email">E-post</label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded border border-line px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none sm:px-4 sm:py-3 sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded bg-ink px-7 py-3 font-bold text-white hover:bg-accent"
        >
          Logga in
        </button>
      </form>
    </Modal>
  );
}
