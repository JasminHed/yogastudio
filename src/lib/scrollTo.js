// A slower, custom-eased scroll for in-page navigation links.
// Native `scroll-behavior: smooth` can't control duration, so this animates
// window.scrollTo by hand to get a calmer, more deliberate feel.
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function scrollToId(id, duration = 1100) {
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = 88;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - headerOffset;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const diff = targetY - startY;
  let startTime = null;

  function step(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
