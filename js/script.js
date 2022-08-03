import Modal from "./modules/modal.js";
import SmoothScrolling from "./modules/smoothScrolling.js";

const smoothScrolling = new SmoothScrolling(
  '.page-menu a[href^="#"]',
  { block: 'start', behavior: 'smooth' }
);

const modal = new Modal('[data-modal="show"]', '[data-modal="hide"]', '[data-modal="container"]', 'active');

window.onload = () => {
  smoothScrolling.init();
  modal.init();
};