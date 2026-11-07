// shared by every page: smooth scroll, in-page links, rolling text, mobile menu, reveals
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
document.documentElement.classList.add('gsap');
export const $ = (id) => document.getElementById(id);
// Arabic letters join, so letter-by-letter effects work on whole words there
export const AR = document.documentElement.lang === 'ar';

// smooth scroll: always on (ignores the OS reduce-motion setting).
// Lenis runs on GSAP's ticker so scroll-linked tweens and the page move on the same frame (no jitter).
export const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.on('scroll', ScrollTrigger.update);
// intro loader showing (set by the inline <head> script): hold smooth scroll until the curtain has lifted
if (document.documentElement.classList.contains('loading')) {
  lenis.stop();
  setTimeout(() => lenis.start(), 3400);
}

// in-page links glide through Lenis instead of jumping
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const h = a.getAttribute('href');
  if (h === '#') return lenis.scrollTo(0);
  // the page grows while gliding (lazy images, reveals), so the first target can land short:
  // once the glide ends, settle on where the section is now
  // Pricing lands on the cards, centred in the window (the nav hides on the way down), not the heading above them
  const slider = h === '#pricing' && document.querySelector('.pslider');
  const el = slider || $(h.slice(1));
  if (!el) return;
  const gap = slider ? Math.max(8, (innerHeight - el.offsetHeight) / 2) : 70;
  const go = (left) => lenis.scrollTo(el, { offset: -gap, onComplete: () => {
    const off = el.getBoundingClientRect().top - gap;
    if (left && Math.abs(off) > 2) go(left - 1);
  } });
  go(3);
});

// rolling text: one span per letter, delay index drives the piano stagger
document.querySelectorAll('.roll').forEach((r) => {
  const t = r.textContent.trim();
  r.setAttribute('aria-label', t);
  r.innerHTML = (AR ? [t] : [...t]).map((c, i) => `<span class="ch" aria-hidden="true" style="--i:${i}">${c}</span>`).join('');
});

// back-to-top button glides up through Lenis (each page decides when it shows)
document.querySelector('.to-top').onclick = () => lenis.scrollTo(0);

// mobile menu: burger toggles, Escape or a link closes, focus returns to burger
const menu = $('menu'), burger = document.querySelector('.burger');
const setMenu = (open) => {
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', !open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? burger.dataset.close : burger.dataset.open);
  open ? lenis.stop() : lenis.start();
  if (open) menu.querySelector('a').focus();
};
burger.onclick = () => setMenu(!menu.classList.contains('open'));
menu.onclick = (e) => { if (e.target.tagName === 'A') setMenu(false); };
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); }
});

// fade-up reveal on view
const io =new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  io.unobserve(e.target);
}), { threshold: 0.2 });
document.querySelectorAll('.rv').forEach((n) => io.observe(n));

// clip-path image reveals + scrubbed parallax
gsap.utils.toArray('.reveal').forEach((r) => {
  const st = { trigger: r, start: 'top 85%' };
  gsap.fromTo(r, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.4, ease: 'expo.out', scrollTrigger: st });
  // project cards: zoom the inner image, then hand transform back to the CSS hover
  const img = r.querySelector('.ph');
  if (img) gsap.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.4, ease: 'expo.out', scrollTrigger: st, clearProps: 'transform' });
});

export { gsap, ScrollTrigger };
