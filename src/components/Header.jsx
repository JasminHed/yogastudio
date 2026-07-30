import { useEffect, useState } from "react";
import { useBooking } from "../context/BookingContext.jsx";
import { scrollToId } from "../lib/scrollTo.js";
import AccountPanel from "./AccountPanel.jsx";

const links = [
  { href: "#klasser", label: "Klasser" },
  { href: "#medlemskap", label: "Medlemskap" },
  { href: "#schema", label: "Schema" },
  { href: "#retreat", label: "Retreat" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, accountOpen, setAccountOpen, requestBooking } = useBooking();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[6vw] py-6 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("top");
        }}
        className={`text-xl font-extrabold tracking-tight transition-colors ${
          solid ? "text-ink" : "text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_0.35)]"
        }`}
      >
        Yogastudio
      </a>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="primary-nav"
        className="relative block h-5 w-6 md:hidden"
      >
        <span className="sr-only">Meny</span>
        <span className={`absolute left-0 top-0 h-0.5 w-6 transition-colors ${solid ? "bg-ink" : "bg-white"}`} />
        <span className={`absolute left-0 top-2 h-0.5 w-6 transition-colors ${solid ? "bg-ink" : "bg-white"}`} />
        <span className={`absolute left-0 top-4 h-0.5 w-6 transition-colors ${solid ? "bg-ink" : "bg-white"}`} />
      </button>

      <nav
        id="primary-nav"
        aria-label="Huvudmeny"
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 right-0 top-full flex-col gap-4 border-b border-line bg-white px-[6vw] py-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-none md:bg-transparent md:p-0 lg:gap-8`}
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
            className={`border-b border-transparent pb-1 text-[0.95rem] transition-colors hover:border-current ${
              solid ? "text-ink" : "text-ink md:text-white md:[text-shadow:0_1px_10px_rgb(0_0_0_/_0.35)]"
            }`}
          >
            {link.label}
          </a>
        ))}

        {user ? (
          <button
            type="button"
            data-account-toggle
            onClick={() => {
              setOpen(false);
              setAccountOpen((v) => !v);
            }}
            aria-expanded={accountOpen}
            className="flex items-center gap-2 rounded bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-accent"
          >
            Hej, {user.name.split(" ")[0] || user.name}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className={`transition-transform ${accountOpen ? "rotate-180" : ""}`}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              requestBooking(null);
            }}
            className="w-fit whitespace-nowrap rounded bg-ink px-3 py-2 text-xs font-bold text-white hover:bg-accent sm:px-4 sm:text-sm"
          >
            Skapa konto/Logga in
          </button>
        )}
      </nav>

      <AccountPanel />
    </header>
  );
}
