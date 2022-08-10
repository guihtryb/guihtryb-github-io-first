import projects from "../projects.js";

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

    this.createProjectGrid = this.createProjectGrid.bind(this);
    this.outsideModalClickControl = this.outsideModalClickControl.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  createProjectGallery() {
    const projectGallery = document.createElement('div');
    projectGallery.classList.add('project-gallery');
    return projectGallery;
  }

  createProjectArrows() {
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('left-arrow');

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('right-arrow');

   return [leftArrow, rightArrow];
  }

  createProjectImage(images, index) {
    const projectImage = document.createElement('img');
    projectImage.style.borderRadius = '6px'

    projectImage.src = images[`image${index}`];

    projectImage.classList.add('active');

    return projectImage;
  }

  createAnchor(link, anchorClass, anchorText) {
    const anchor = document.createElement('a');

    anchor.href = link;
    anchor.classList.add(anchorClass);
    anchor.innerText = anchorText;
    anchor.target = "_blank";

    return anchor;
  }

  addLinkListItem(anchorInfos, list) {
    const { hasSite, gitHubLink, siteLink } = anchorInfos;

    const gitHubItem = document.createElement('li');

    const gitHubAnchor = this.createAnchor(gitHubLink, 'github-link', 'Ver no GitHub');

    gitHubItem.appendChild(gitHubAnchor);

    list.appendChild(gitHubItem);

    if (hasSite) {
      const siteItem = document.createElement('li');

      const siteAnchor = this.createAnchor(siteLink, 'site-link', 'Visitar site');

      siteItem.appendChild(siteAnchor);

      list.appendChild(siteItem);
    }
  }

  createProjectGrid(project) {
    const modal = this.modalRefElement.firstElementChild;

    const { images, hasSite, gitHubLink, siteLink } = projects.find((item) => item.name === project);

    const projectGrid = document.createElement('div');
    projectGrid.classList.add('project-grid');

    const projectGallery = this.createProjectGallery();

    const [leftArrow, rightArrow] = this.createProjectArrows();
    projectGrid.appendChild(projectGallery);

    const projectImage = this.createProjectImage(images, 1);

    const anchorInfos = {
      hasSite,
      gitHubLink,
      siteLink,
    };

    const projectLinksList = document.createElement('ul');

    projectGallery.appendChild(leftArrow);

    projectGallery.appendChild(projectImage);

    projectGallery.appendChild(rightArrow);

    this.addLinkListItem(anchorInfos, projectLinksList);

    projectGrid.appendChild(projectLinksList);

    modal.appendChild(projectGrid);

    this.projectGrid = projectGrid;
  }

  toggleModal(project) {
    this.modalRefElement?.classList.toggle(this.activeClass);

    if (this.modalRefElement.classList.contains(this.activeClass)) {
      this.createProjectGrid(project);
    } else {
      this.projectGrid.remove();
    }

  }

  eventToggleModal(e) {
    e.preventDefault();

    const project = e.currentTarget.getAttribute('data-project');

    this.toggleModal(project);
  }

  outsideModalClickControl(e) {
    if (e.target !== this.modalRefElement) return;

    this.eventToggleModal(e);
  }

  addEvent() {
    const showAnchor = document.querySelectorAll(this.openingButton);
    const closeElement = document.querySelector(this.closeButton);

    showAnchor.forEach((anchor) => anchor.addEventListener('click', this.eventToggleModal));

    closeElement?.addEventListener('click', this.eventToggleModal);

    this.modalRefElement?.addEventListener('click', this.outsideModalClickControl);
  }

  init() {
    if (this.modalRefElementClass.length) {
      this.addEvent();
    }
    return this;
  }
}
