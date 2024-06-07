// mobile menu

(() => {
  const menuContainer = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = isOpen => {
    openMenuBtn.setAttribute('aria-expanded', isOpen);
    menuContainer.classList.toggle('is-open', isOpen);
    if (isOpen) {
      bodyScrollLock.enableBodyScroll(document.body);
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  };
  openMenuBtn.addEventListener('click', () => toggleMenu(false));
  closeMenuBtn.addEventListener('click', () => toggleMenu(true));

  window.matchMedia('(min-width: 428px)').addEventListener('change', e => {
    if (e.matches) toggleMenu(true);
  });

  toggleMenu(true);
})();
//watch slider
const watchSlider = document.querySelector('.watch-slider');
const watchImages = document.querySelectorAll('.watch-slider img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = watchImages[0].clientWidth;
const slideWidth = size;
const intervalTime = 5000;
let autoSlide = false;

const slideNext = () => {
  if (counter >= watchImages.length - 1) {
    counter = 1;
    watchSlider.style.transition = 'none';
    watchSlider.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
    return;
  }
  counter++;
  watchSlider.style.transition = 'transform 0.4s ease-in-out';
  watchSlider.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
};

const slidePrev = () => {
  if (counter <= 0) return;
  counter--;
  watchSlider.style.transition = 'transform 0.4s ease-in-out';
  watchSlider.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
};

watchSlider.addEventListener('transitionend', () => {
  if (watchImages[counter].id === 'lastClone') {
    watchSlider.style.transition = 'none';
    counter = watchImages.length - 2;
    watchSlider.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
  }
  if (watchImages[counter].id === 'firstClone') {
    watchSlider.style.transition = 'none';
    counter = watchImages.length - counter;
    watchSlider.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
  }
});

nextBtn.addEventListener('click', () => {
  autoSlide = false;
  slideNext();
});
prevBtn.addEventListener('click', () => {
  autoSlide = false;
  slidePrev();
});
