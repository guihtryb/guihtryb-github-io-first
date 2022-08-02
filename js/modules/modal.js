export default class Modal {
  openingButton;

  closeButton;

  modalRefElement;

  modalRefElementClass;

  activeClass;

  constructor(
    _openingButton,
    _closeButton,
    _modalRefElementClass,
    _activeClass,
  ) {
    this.openingButton = _openingButton;
    this.closeButton = _closeButton;
    this.modalRefElementClass = _modalRefElementClass;
    this.activeClass = _activeClass;
    this.modalRefElement = document.querySelector(this.modalRefElementClass);

    this.outsideModalClickControl = this.outsideModalClickControl.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.modalRefElement?.classList.toggle(this.activeClass);
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  pauseVideo() {
    const video = document.querySelector("video");
    if (video) return video.pause();
  }

  outsideModalClickControl(e) {
    if (e.target !== this.modalRefElement) return;

    this.eventToggleModal(e);
    this.pauseVideo();
  }

  addEvent() {
    const loginAnchor = document.querySelector(this.openingButton);
    const closeElement = document.querySelector(this.closeButton);

    loginAnchor?.addEventListener('click', this.eventToggleModal);
    closeElement?.addEventListener('click', ((e) => { 
      this.eventToggleModal(e);
      this.pauseVideo();
    }));
    this.modalRefElement?.addEventListener('click', this.outsideModalClickControl);
  }

  init() {
    if (this.modalRefElementClass.length) {
      this.addEvent();
    }
    return this;
  }
}
