import { useState } from "react";
import { useBooking } from "../context/BookingContext.jsx";
import Modal from "./Modal.jsx";

function nameFromEmail(email) {
  const local = email.split("@")[0] || "";
  return local.replace(/[._-]+/g, " ").trim() || "Gäst";
}

export default function AuthModal() {
  const { authOpen, closeAuth, login } = useBooking();
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isSignup = mode === "signup";

  if (!authOpen) return null;

  function handleSubmit(event) {
    event.preventDefault();
    login(isSignup ? name : nameFromEmail(email), email);
  }

  return (
    <Modal title={isSignup ? "Skapa konto" : "Logga in"} onClose={closeAuth}>
      <p className="mb-6 text-sm text-muted">
        {isSignup ? (
          <>
            Har du redan ett konto?{" "}
            <button type="button" onClick={() => setMode("signin")} className="italic text-ink underline">
              Logga in här.
            </button>{" "}
          </>
        ) : (
          <>
            Har du inget konto?{" "}
            <button type="button" onClick={() => setMode("signup")} className="italic text-ink underline">
              Skapa ett här.
            </button>{" "}
          </>
        )}
        Detta är en demo, ingen riktig inloggning krävs, fyll bara i
        valfritt namn och e-post för att fortsätta.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {isSignup && (
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
        )}
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
          {isSignup ? "Skapa konto" : "Logga in"}
        </button>
      </form>
    </Modal>
  );
}
