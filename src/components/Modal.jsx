export default function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/40 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-extrabold tracking-tight text-ink">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Stäng"
            className="text-2xl leading-none text-muted hover:text-ink"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
