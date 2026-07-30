import { useState } from "react";
import { useBooking } from "../context/BookingContext.jsx";
import { scrollToId } from "../lib/scrollTo.js";
import AccountPanel from "./AccountPanel.jsx";

const links = [
  { href: "#klasser", label: "Klasser" },
  { href: "#medlemskap", label: "Medlemskap" },
  { href: "#schema", label: "Schema" },
  { href: "#retreat", label: "Retreat" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, accountOpen, setAccountOpen, requestBooking } = useBooking();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-white/90 px-[6vw] py-6 backdrop-blur">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("top");
        }}
        className="text-xl font-extrabold tracking-tight text-ink"
      >
        Yogastudio
      </a>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="primary-nav"
        className="relative block h-5 w-6 sm:hidden"
      >
        <span className="sr-only">Meny</span>
        <span className="absolute left-0 top-0 h-0.5 w-6 bg-ink" />
        <span className="absolute left-0 top-2 h-0.5 w-6 bg-ink" />
        <span className="absolute left-0 top-4 h-0.5 w-6 bg-ink" />
      </button>

      <nav
        id="primary-nav"
        aria-label="Huvudmeny"
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 right-0 top-full flex-col gap-4 border-b border-line bg-white px-[6vw] py-6 sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:border-none sm:p-0`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              scrollToId(link.href.slice(1));
            }}
            className="border-b border-transparent pb-1 text-[0.95rem] text-ink hover:border-ink"
          >
            {link.label}
          </a>
        ))}

        {user ? (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setAccountOpen((v) => !v);
            }}
            aria-expanded={accountOpen}
            className="rounded bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-accent"
          >
            Hej, {user.name.split(" ")[0] || user.name}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              requestBooking(null);
            }}
            className="w-fit rounded bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-accent"
          >
            Logga in
          </button>
        )}
      </nav>

      <AccountPanel />
    </header>
  );
}
