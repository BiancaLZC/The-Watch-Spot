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
// watch slider
const watchSlider = document.querySelector('.watch-slider');
const watchImages = document.querySelectorAll('.watch-slider img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const currentSlide = document.getElementById('currentSlide');

let counter = 0;
const totalSlides = watchImages.length;
const size = watchImages[0].clientWidth;
const slideWidth = size;
const slideSize = 428;
const intervalTime = 5000;
let autoSlide = false;

const slideNext = () => {
  counter++;
  if (counter >= totalSlides) {
    counter = 0;
  }
  updateSlider();
};

const slidePrev = () => {
  counter--;
  if (counter < 0) {
    counter = totalSlides - 1;
  }
  updateSlider();
};

const updateSlider = () => {
  watchSlider.style.transition = 'transform 0.4s ease-in-out';
  watchSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  currentSlide.textContent = (counter + 1).toString().padStart(2, '0');
};

prevBtn.addEventListener('click', () => {
  autoSlide = false;
  slidePrev();
});
nextBtn.addEventListener('click', () => {
  autoSlide = false;
  slideNext();
});

watchSlider.addEventListener('transitionend', () => {
  if (counter === totalSlides) {
    watchSlider.style.transition = 'none';
    counter = 0;
    watchSlider.style.transform = 'translateX(0)';
  }
});

updateSlider();
