// Site-wide motion: reveals, parallax, counters, hero slideshows, progress bar, motion toggle.
const root = document.documentElement;
const motionOff = () => root.classList.contains('motion-off');

/* ── Reveals (with automatic stagger inside [data-stagger]) ── */
const revealSel = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-wipe, .line-mask, .beam-line, [data-reveal-group]';
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
  const step = Number(group.dataset.stagger) || 90;
  group.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-wipe, .line-mask').forEach((el, i) => {
    el.style.transitionDelay = `${i * step}ms`;
    el.querySelectorAll<HTMLElement>(':scope > span').forEach((s) => (s.style.transitionDelay = `${i * step}ms`));
  });
});
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-visible');
    io.unobserve(e.target);
  }),
  { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
);
// Wait for the first-visit loader to lift so reveals play in view, not behind it
const loaderGone = new Promise<void>((resolve) => {
  if (!root.classList.contains('show-loader') || root.classList.contains('loader-done')) return resolve();
  new MutationObserver((_, mo) => { if (root.classList.contains('loader-done')) { mo.disconnect(); setTimeout(resolve, 350); } })
    .observe(root, { attributes: true, attributeFilter: ['class'] });
});
loaderGone.then(() => document.querySelectorAll(revealSel).forEach((el) => io.observe(el)));

/* ── Button press ripple ── */
document.addEventListener('pointerdown', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('.btn');
  if (!btn || motionOff()) return;
  const r = btn.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const dot = document.createElement('span');
  dot.className = 'ripple';
  dot.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  btn.appendChild(dot);
  setTimeout(() => dot.remove(), 650);
});

/* ── Count-up numbers: <span data-count="10" data-suffix="+"> ── */
const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target as HTMLElement;
  countIO.unobserve(el);
  const end = Number(el.dataset.count); const suffix = el.dataset.suffix ?? '';
  if (motionOff()) { el.textContent = end + suffix; return; }
  const t0 = performance.now(); const dur = 1600;
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur); const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}), { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

/* ── Hero slideshows (Ken Burns zoom/pan is CSS; this cross-fades slides) ── */
document.querySelectorAll<HTMLElement>('[data-slideshow]').forEach((show) => {
  const slides = [...show.querySelectorAll<HTMLElement>('.kb-slide')];
  if (slides.length < 2) return;
  let i = 0;
  const interval = Number(show.dataset.slideshow) || 6000;
  setInterval(() => {
    if (motionOff() || document.hidden) return;
    slides[i].classList.remove('is-active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-active');
  }, interval);
});

/* ── Parallax + scroll progress (one rAF loop) ── */
const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
const bar = document.getElementById('scroll-progress');
let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (motionOff()) { parallax.forEach((el) => (el.style.transform = '')); return; }
    for (const el of parallax) {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) continue;
      const speed = Number(el.dataset.parallax) || 0.15;
      const offset = (r.top + r.height / 2 - innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(${1 + speed})`;
    }
  });
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

/* ── Motion toggle (footer) ── */
const toggle = document.getElementById('motion-toggle');
const label = () => { if (toggle) toggle.textContent = motionOff() ? 'Motion: off' : 'Motion: on'; };
label();
toggle?.addEventListener('click', () => {
  const off = !motionOff();
  root.classList.toggle('motion-off', off);
  try { localStorage.setItem('tav-motion', off ? 'off' : 'on'); } catch {}
  document.querySelectorAll<HTMLVideoElement>('video[data-bg]').forEach((v) => (off ? v.pause() : v.play().catch(() => {})));
  label();
  onScroll();
});
