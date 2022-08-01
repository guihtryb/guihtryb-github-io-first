export default class SmoothScrolling {
  constructor(
    links,
    options,
  ) {
    this.internalLinks = document.querySelectorAll(links);
    this.scrollOptions = options;
    this.smoothScrolling = this.smoothScrolling.bind(this);
  }

  smoothScrolling(e) {
    e.preventDefault();

    const href = (e.target).getAttribute('href');

    if (href) {
      const goTo = document.querySelector(href);
      goTo?.scrollIntoView(this.scrollOptions);
    }
  }

  addLinkEvent() {
    this.internalLinks.forEach(
      (e) => e.addEventListener('click', this.smoothScrolling),
    );
  }

  init() {
    if (this.internalLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
