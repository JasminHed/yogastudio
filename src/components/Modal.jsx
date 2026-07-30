export default function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/40 p-4">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-5 shadow-xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{title}</h3>
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
