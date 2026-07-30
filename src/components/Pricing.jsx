import { useBooking } from "../context/BookingContext.jsx";

const plans = [
  {
    name: "Drop-in",
    price: "220 kr",
    desc: "Ett enskilt pass, ingen bindningstid. Perfekt för att testa studion.",
  },
  {
    name: "Klippkort",
    price: "1 800 kr",
    desc: "10 pass att använda fritt under 4 månader. Delas inte mellan personer.",
  },
  {
    name: "Månadskort",
    price: "650 kr",
    unit: "/mån",
    desc: "Obegränsat antal pass, ingen uppsägningstid. Vår mest valda form.",
    highlight: true,
  },
  {
    name: "Årskort",
    price: "6 200 kr",
    unit: "/år",
    desc: "Motsvarar ca 515 kr/mån. Obegränsat antal pass, bäst pris över tid.",
  },
];

export default function Pricing() {
  const { membership, requestBooking } = useBooking();

  return (
    <section id="medlemskap" aria-labelledby="pricing-heading" className="mx-auto max-w-[1400px] px-[6vw] py-24">
      <div className="mb-12 max-w-[60ch]">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Medlemskap &amp; drop-in</p>
        <h2 id="pricing-heading" className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Välj det som passar din vecka
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => {
          const active = membership === plan.name;
          return (
            <article
              key={plan.name}
              className={`flex flex-col gap-3 rounded border p-9 ${
                plan.highlight ? "border-ink bg-ink text-white" : "border-line"
              }`}
            >
              <h3 className="text-xl font-extrabold">{plan.name}</h3>
              <p className="text-4xl font-extrabold tracking-tight">
                {plan.price}
                {plan.unit && <span className="text-base font-normal">{plan.unit}</span>}
              </p>
              <p className={plan.highlight ? "text-[#b9c6cd]" : "text-muted"}>{plan.desc}</p>

              {active ? (
                <span className="mt-2 w-fit rounded bg-accentsoft px-3 py-1.5 text-xs font-bold text-accent">
                  ✓ Aktivt medlemskap
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => requestBooking({ id: `plan-${plan.name}`, kind: "membership", label: plan.name, price: plan.price })}
                  className={`mt-2 w-fit rounded px-5 py-2 text-sm font-bold ${
                    plan.highlight ? "bg-white text-ink hover:bg-accentsoft" : "bg-ink text-white hover:bg-accent"
                  }`}
                >
                  Köp
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
