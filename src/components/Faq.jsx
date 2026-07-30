import { useState } from "react";

const questions = [
  {
    q: "Behöver jag ta med egen yogamatta?",
    a: "Nej, vi har mattor att låna i studion. Vill du hellre använda din egen går det så klart också bra.",
  },
  {
    q: "Passar klasserna för nybörjare?",
    a: "Ja, alla våra klasser går att anpassa efter din nivå. Kom gärna några minuter tidigare så hinner vi säga hej och ge dig tips inför passet.",
  },
  {
    q: "Vad händer om jag missar ett bokat pass?",
    a: "Du kan avboka fram till passets start utan kostnad. Vid utebliven avbokning går krediten eller platsen förlorad för det passet.",
  },
  {
    q: "Hur säger jag upp mitt medlemskap?",
    a: "Månadskortet har ingen uppsägningstid, det gäller till slutet av innevarande period. Hör av dig till info@yogastudio.se så hjälper vi dig.",
  },
  {
    q: "Var ligger studion?",
    a: "Vi finns på Hornsgatan 45 på Södermalm, nära Zinkensdamm.",
  },
  {
    q: "Hur bokar jag plats på retreatet?",
    a: "Skriv till info@yogastudio.se. Platserna är begränsade till tolv personer och fylls i turordning.",
  },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-ink">{q}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`flex-shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
        <p className="min-h-0 max-w-[60ch] text-muted">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto max-w-[900px] px-[6vw] py-24">
      <div className="mb-10 max-w-[60ch]">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Vanliga frågor</p>
        <h2 id="faq-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Bra att veta
        </h2>
      </div>

      <div className="border-t border-line">
        {questions.map((item, index) => (
          <FaqItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
          />
        ))}
      </div>
    </section>
  );
}
