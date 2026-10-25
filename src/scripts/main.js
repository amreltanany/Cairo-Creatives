import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
document.documentElement.classList.add('gsap');
const $ = (id) => document.getElementById(id);

// smooth scroll: always on (ignores the OS reduce-motion setting).
// Lenis runs on GSAP's ticker so scroll-linked tweens and the page move on the same frame (no jitter).
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
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
  lenis.scrollTo(h === '#' ? 0 : h, { offset: -70 });
});

// rolling text: one span per letter, delay index drives the piano stagger
document.querySelectorAll('.roll').forEach((r) => {
  const t = r.textContent.trim();
  r.setAttribute('aria-label', t);
  r.innerHTML = [...t].map((c, i) => `<span class="ch" aria-hidden="true" style="--i:${i}">${c}</span>`).join('');
});

// hero scene: Cairo Tower + Qasr el Nil at night (stars, skyline, bridge lamps, reflections)
const NS = 'http://www.w3.org/2000/svg';
const el = (parent, tag, attrs) => {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  $(parent).appendChild(e);
  return e;
};
// seeded random so the scene looks the same on every load
let seed = 7;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
for (let i = 0; i < 160; i++)
  el('stars1', 'circle', { cx: rnd() * 3440 - 1000, cy: rnd() * 960 - 600, r: rnd() * 1.4 + 0.3, fill: '#dbe9ff', class: rnd() > 0.9 ? 'tw' : '', style: `animation-delay:${rnd() * 3}s` });
for (let x = -1000; x < 2440; ) {
  const w = 30 + rnd() * 60, h = 30 + rnd() * 90;
  if (x < 900 || x > 1060) {
    el('city1', 'rect', { x, y: 640 - h, width: w, height: h });
    for (let wy = 640 - h + 8; wy < 634; wy += 12)
      for (let wx = x + 6; wx < x + w - 6; wx += 10)
        if (rnd() > 0.72) el('city1', 'rect', { x: wx, y: wy, width: 4, height: 5, fill: '#7fb2ff', opacity: 0.6 });
  }
  x += w + 2;
}
for (let x = -1060; x < 850; x += 120) el('arches', 'path', { d: `M${x} 662 Q${x + 50} 700 ${x + 100} 662 L${x + 100} 690 L${x} 690Z` });
for (let x = -990; x < 850; x += 60) {
  el('lamps1', 'rect', { x: x - 1, y: 628, width: 2, height: 20, fill: '#000a24' });
  el('lamps1', 'circle', { cx: x, cy: 626, r: 14, fill: 'url(#halo1)', opacity: 0.55 });
  el('lamps1', 'circle', { cx: x, cy: 626, r: 2.6, fill: '#eaf3ff' });
  el('refl1', 'rect', { x: x - 2, y: 700, width: 4, height: 60 + rnd() * 80, fill: '#bcd8ff', opacity: 0.35, class: x % 180 === 0 ? 'shim' : '', style: `transform-origin:${x}px 700px;animation-delay:${rnd() * 2}s` });
}
for (let i = 0; i < 30; i++) {
  const x = rnd() * 3440 - 1000, y = 680 + rnd() * 200;
  el('refl1', 'rect', { x, y, width: 20 + rnd() * 60, height: 1.5, fill: '#5aa0ff', opacity: 0.3, class: i % 4 === 0 ? 'shim' : '', style: `transform-origin:${x}px ${y}px;animation-delay:${rnd() * 2}s` });
}

// hero word swap, letter by letter
const swap = $('swap');
const words = ['Branding', 'Marketing', 'Creative'];
let wi = 0;
swap.innerHTML = words.map((w) => `<span class="w">${[...w].map((c, j) => `<i style="transition-delay:${j * 35}ms">${c}</i>`).join('')}</span>`).join('');
const ws = [...swap.children];
ws[0].classList.add('on');
swap.style.width = Math.max(...ws.map((w) => w.scrollWidth)) + 'px';
setInterval(() => {
  ws[wi].classList.replace('on', 'out');
  const prev = ws[wi];
  wi = (wi + 1) % ws.length;
  ws[wi].classList.remove('out');
  ws[wi].offsetWidth;
  ws[wi].classList.add('on');
  // once the old word has fully left (600ms + letter delays), snap it back below with no transition,
  // otherwise it animates downward through the visible slot behind the new word
  setTimeout(() => {
    prev.classList.add('reset');
    prev.classList.remove('out');
    prev.offsetWidth;
    prev.classList.remove('reset');
  }, 1000);
}, 1600);

// scroll-lit headline
const litText = $('litText');
litText.innerHTML = litText.textContent.split('').map((c) => `<span>${c}</span>`).join('');
const lit = [...litText.children];

// --- everything that follows the scroll runs in ONE handler, from cached sizes (no layout reads per frame)
const hero = document.querySelector('.hero');
// back-to-top button: shows once the hero is mostly scrolled past, glides up through Lenis
const toTop = document.querySelector('.to-top');
toTop.onclick = () => lenis.scrollTo(0);
const depth = [...hero.querySelectorAll('.layer')].map((l) => [l, +l.dataset.k]);
const towerLayer = hero.querySelector('.tower-layer');
// self-drawing arrows: drawn once when a quarter is on screen, or as soon as the page is scrolled past them.
// A scroll check (not IntersectionObserver): an observer never fires if a jump skips the arrow entirely.
let arrows = [...document.querySelectorAll('.arrow')].map((a) => ({ a, top: 0 }));
let heroH = 0, litTop = 0, litH = 0, vh = 0;
// "Who we are" video: only decode/play while its section is on screen
const introEl = document.querySelector('.intro'), introVid = document.querySelector('.intro-bg');
let introTop = 0, introH = 0, vidOn = null;
// circle reveal: centre on the arrow tip (bottom-left of the arrow SVG), radius big enough to reach every corner
const reveal = document.querySelector('.intro-reveal'), arrowSvg = document.querySelector('.intro .arrow svg');
let tipX = 0, tipY = 0, tipDoc = 0, maxR = 0;
const FEATHER = 260;
const measure = () => {
  heroH = hero.offsetHeight;
  introTop = introEl.offsetTop;
  introH = introEl.offsetHeight;
  const ar = arrowSvg.getBoundingClientRect(), ir = introEl.getBoundingClientRect();
  tipX = ar.left - ir.left + ar.width * (18 / 357);
  tipY = ar.top - ir.top + ar.height * (262 / 268);
  tipDoc = introTop + tipY;
  maxR = Math.hypot(Math.max(tipX, introEl.offsetWidth - tipX), Math.max(tipY, introH - tipY));
  vh = innerHeight;
  for (const x of arrows) x.top = x.a.getBoundingClientRect().top + scrollY + x.a.offsetHeight / 4;
  const r = litText.getBoundingClientRect();
  litTop = r.top + scrollY;
  litH = r.height;
  // tower grows from its base: find where scene point (990,640) lands in the layer's box (xMidYMax meet)
  const w = towerLayer.clientWidth, h = towerLayer.clientHeight, sc = Math.min(w / 1440, h / 900);
  towerLayer.style.transformOrigin = `${(w - 1440 * sc) / 2 + 990 * sc}px ${h - 900 * sc + 640 * sc}px`;
};
let litN = -1;
const onScroll = (y) => {
  if (y <= heroH) {
    // depth parallax: extraY = scrollY * (1 - speed)
    for (const [l, k] of depth) l.style.setProperty('--y', (y * k).toFixed(1) + 'px');
    const p = Math.min(y / heroH, 1);
    towerLayer.style.setProperty('--s', (1 + 0.18 * (1 - (1 - p) ** 2)).toFixed(4)); // ease-out grow to 1.18x
  }
  // pause the scene's animations once the hero has scrolled out of view
  hero.classList.toggle('off', y > heroH);
  toTop.classList.toggle('show', y > heroH * 0.8);
  const inView = y + vh > introTop && y < introTop + introH;
  if (inView) {
    // grows from 0 once the tip is 60% down the screen, fully open after ~0.9 screens of scroll (eased)
    const t = Math.min(1, Math.max(0, (y + vh * 0.6 - tipDoc) / (vh * 0.9)));
    // soft edge: the video dissolves into the navy over FEATHER px, like the fade at the bottom of the section
    const r = (maxR + FEATHER) * t * t * (3 - 2 * t);
    const m = `radial-gradient(circle at ${tipX.toFixed(1)}px ${tipY.toFixed(1)}px, #000 ${Math.max(0, r - FEATHER).toFixed(1)}px, transparent ${r.toFixed(1)}px)`;
    reveal.style.webkitMaskImage = m;
    reveal.style.maskImage = m;
  }
  if (introVid && inView !== vidOn) {
    vidOn = inView;
    inView ? introVid.play().catch(() => {}) : introVid.pause();
  }
  if (arrows.length && arrows.some((x) => y + vh > x.top)) {
    arrows = arrows.filter((x) => (y + vh > x.top ? (x.a.classList.add('is-drawn'), false) : true));
  }
  const p = Math.min(1, Math.max(0, (vh * 0.85 - (litTop - y)) / (litH + vh * 0.35)));
  const n = Math.round(p * lit.length);
  if (n !== litN) {
    lit.forEach((s, i) => s.classList.toggle('lit', i < n));
    litN = n;
  }
};
measure();
onScroll(scrollY);
// keep the sky clean behind the nav logo: drop any star that lands on (or right next to) it
const logoBox = document.querySelector('nav .logo').getBoundingClientRect();
for (const s of document.querySelectorAll('#stars1 circle')) {
  const r = s.getBoundingClientRect();
  if (r.right > logoBox.left - 16 && r.left < logoBox.right + 16 && r.bottom > logoBox.top - 16 && r.top < logoBox.bottom + 16) s.remove();
}
lenis.on('scroll', ({ scroll }) => onScroll(scroll));
addEventListener('resize', () => { measure(); onScroll(scrollY); });

// mobile menu: burger toggles, Escape or a link closes, focus returns to burger
const menu = $('menu'), burger = document.querySelector('.burger');
const setMenu = (open) => {
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', !open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  open ? lenis.stop() : lenis.start();
  if (open) menu.querySelector('a').focus();
};
burger.onclick = () => setMenu(!menu.classList.contains('open'));
menu.onclick = (e) => { if (e.target.tagName === 'A') setMenu(false); };
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); }
});

// contact form: no backend yet, so just show the sending → done states
const form = $('contactForm'), formMsg = $('formMsg');
form.onsubmit = (e) => {
  e.preventDefault();
  const b = form.querySelector('button');
  b.disabled = true;
  b.textContent = 'Sending…';
  setTimeout(() => { b.textContent = 'Sent'; formMsg.textContent = "Thanks, we'll be in touch soon."; form.reset(); }, 800);
};

// fade-up reveal on view
const io = new IntersectionObserver((es) => es.forEach((e) => {
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
gsap.to('.hero-bottom', { y: -120, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
