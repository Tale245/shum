// const buttonOne = document.querySelector('.our-team__button-one');
const headerGallery = document.querySelector('.header__nav-item-gallery');
const headerCallUs = document.querySelector('.header__nav-item-сall');
const linkUp = document.querySelector('.popup__link-up');
// const buttonTwo = document.querySelector('.our-team__button-two');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.popup__overlay');

const openPopup = () => {
  popup.classList.add('popup_active');
}
const closePopup = () => {
  popup.classList.remove('popup_active');
}
overlay.addEventListener('click', closePopup)
linkUp.addEventListener('click', closePopup)
// buttonOne.addEventListener('click', openPopup)
// buttonTwo.addEventListener('click', openPopup)
headerGallery.addEventListener('click', openPopup)
headerCallUs.addEventListener('click', openPopup)