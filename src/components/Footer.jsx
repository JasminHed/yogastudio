export default function Footer() {
  return (
    <footer id="kontakt" className="flex flex-col gap-6 border-t border-line px-[6vw] py-14">
      <div className="flex flex-wrap justify-between gap-6">
        <span className="text-xl font-extrabold tracking-tight text-ink">Yogastudio</span>
        <address className="not-italic leading-relaxed text-muted">
          Hornsgatan 45, 118 49 Stockholm
          <br />
          <a className="hover:text-ink" href="mailto:info@yogastudio.se">info@yogastudio.se</a>
        </address>
      </div>
    </footer>
  );
}
