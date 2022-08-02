import IntroductionHeaderBreaksControl from "./modules/IntroductionBreaks.js";
import SmoothScrolling from "./modules/smoothScrolling.js";

const introductionBreaksControl = new IntroductionHeaderBreaksControl('.hi-roles h1');

const smoothScrolling = new SmoothScrolling(
  '.page-menu a[href^="#"]',
  { block: 'start', behavior: 'smooth' }
);

window.onload = () => {
  introductionBreaksControl.init();
  smoothScrolling.init();
};