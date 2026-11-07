// About page: the shared smooth scroll, menu and reveals, plus the back-to-top button after one screen
import { lenis } from './core.js';

const toTop = document.querySelector('.to-top');
const onScroll = (y) => toTop.classList.toggle('show', y > innerHeight * 0.8);
onScroll(scrollY);
lenis.on('scroll', ({ scroll }) => onScroll(scroll));
