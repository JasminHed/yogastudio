export default function Footer() {
  return (
    <footer id="kontakt" className="flex flex-col gap-6 border-t border-line px-[6vw] py-14">
      <div className="flex flex-wrap justify-between gap-6">
        <span className="text-xl font-extrabold tracking-tight text-ink">Yogastudio</span>
        <address className="not-italic leading-relaxed text-muted">
          Hornsgatan 45, 118 49 Stockholm
          <br />
          <a className="hover:text-ink" href="mailto:hej@yogastudio.se">hej@yogastudio.se</a>
          <br />
          <a className="hover:text-ink" href="tel:+46701234567">070-123 45 67</a>
        </address>
      </div>
      <p className="text-sm text-muted">Öppet alla dagar, se schema för tider. © 2026 Yogastudio.</p>
    </footer>
  );
}
