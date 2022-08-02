import debounce from "./debounce.js";

export default class IntroductionHeaderBreaksControl {
  constructor(introduction) {
    this.introduction = document.querySelector(introduction);
    this.introductionBreaks = document.querySelectorAll(`${introduction} br`);

    this.removeIntroductionBreaks = debounce(this.removeIntroductionBreaks.bind(this), 600)
  }

  removeIntroductionBreaks = () => {
    const media = matchMedia('(max-width: 610px)').matches;
    if(media) {
      this.introduction.innerHTML = 'Desenvolvedor Full-Stack  <br/> & UI Designer';
    } else {
      this.introduction.innerHTML = 'Desenvolvedor <br/>Full-Stack & <br/>UI Designer';
    }
  };

  init = () => {
    removeIntroductionBreaks();

    window.addEventListener('resize', removeIntroductionBreaks);
  };
}

const introduction = document.querySelector('.hi-roles h1');

const introductionBreaks = document.querySelectorAll('.hi-roles h1 br');

const removeIntroductionBreaks = () => {
  const media = matchMedia('(max-width: 610px)').matches;
  if(media) {
    introduction.innerHTML = 'Desenvolvedor Full-Stack  <br/> & UI Designer';
  } else {
    introduction.innerHTML = 'Desenvolvedor <br/>Full-Stack & <br/>UI Designer';
  }
};


