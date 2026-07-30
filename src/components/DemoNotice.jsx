import { useEffect, useState } from "react";

export default function DemoNotice() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    setTimeout(() => setDismissed(true), 300);
  }

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[150] max-w-sm rounded-xl border border-line bg-white p-5 shadow-xl transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-4">
        <p className="text-sm font-extrabold text-ink">Tips!</p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Stäng"
          className="text-xl leading-none text-muted hover:text-ink"
        >
          ×
        </button>
      </div>
      <p className="text-sm text-muted">
        Som studio kan man välja att bygga sitt eget bokningssystem, som du
        ser här, eller att bygga in ett färdigt bokningssystem, exempelvis
        bokadirekt.se eller liknande, mot en kostnad.
      </p>
    </div>
  );
}
