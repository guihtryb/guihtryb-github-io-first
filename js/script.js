import IntroductionHeaderBreaksControl from "./modules/IntroductionBreaks.js";
import Modal from "./modules/modal.js";
import SmoothScrolling from "./modules/smoothScrolling.js";

const introductionBreaksControl = new IntroductionHeaderBreaksControl('.hi-roles h1');

const smoothScrolling = new SmoothScrolling(
  '.page-menu a[href^="#"]',
  { block: 'start', behavior: 'smooth' }
);

const modal = new Modal('[data-modal="show"]', '[data-modal="hide"]', '[data-modal="container"]', 'active');

window.onload = () => {
  introductionBreaksControl.init();
  smoothScrolling.init();
  modal.init();
};