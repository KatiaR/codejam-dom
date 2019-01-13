import './scss/main.scss';

function onLoad() {
  let i = 0;

  const arraySlides = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
  ];

  const modalWindow = document.querySelector('.modal-window');
  const slider = document.querySelector('.text-slides');

  if (localStorage.getItem('stateDisableTips') !== 'true') {
    modalWindow.classList.remove('closed');
  }

  const btnClose = document.querySelector('.close');
  btnClose.addEventListener('click', () => {
    modalWindow.classList.add('closed');
  });

  const stateDisableTips = document.getElementById('tips');
  stateDisableTips.addEventListener('click', () => {
    localStorage.setItem('stateDisableTips', stateDisableTips.checked);
  });

  function setActiveDot() {
    const dots = document.querySelectorAll('.dot');
    [...dots].forEach((item, index) => {
      item.classList.remove('active');
      if (index === i) {
        item.classList.add('active');
      }
    });
  }
  setActiveDot();

  function changeSlide(direction) {
    if (direction === 'left') {
      i -= 1;
      if (i < 0) {
        i = arraySlides.length - 1;
      }
    } else {
      i += 1;
      if (i > arraySlides.length - 1) {
        i = 0;
      }
    }
    slider.innerHTML = arraySlides[i];
    setActiveDot();
  }

  const btnNext = document.querySelector('.next');
  const btnPrev = document.querySelector('.prev');
  btnNext.addEventListener('click', () => changeSlide('right'));
  btnPrev.addEventListener('click', () => changeSlide('left'));

  const dotSlider = document.querySelector('.dots');
  dotSlider.addEventListener('click', (e) => {
    const indexDot = e.target.getAttribute('data-position');
    if (indexDot === null) {
      return;
    }
    i = +e.target.getAttribute('data-position');
    slider.innerHTML = arraySlides[i];
    setActiveDot();
  });

  document.addEventListener('keydown', (event) => {
    const keyName = event.keyCode;
    switch (keyName) {
      case 27: modalWindow.classList.add('closed'); break;
      case 37: changeSlide('left'); break;
      case 39: changeSlide('right'); break;
      default: break;
    }
  });
}
window.onload = setTimeout(onLoad, 5000);
