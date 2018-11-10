import './scss/main.scss';

function onLoad() {
  const modalWindow = document.querySelector('.modal-window');
  console.log(localStorage.getItem('stateDisableTips'));
  if (!localStorage.getItem('stateDisableTips')) {
    console.log('stateDisableTips');
    modalWindow.classList.remove('closed');
  }
  const btnClose = document.querySelector('.close');
  btnClose.addEventListener('click', () => {
    modalWindow.classList.add('closed');
  });
  const stateDisableTips = document.getElementById('tips');
  stateDisableTips.addEventListener('click', () => {
    console.log(stateDisableTips.checked);
    localStorage.setItem('stateDisableTips', stateDisableTips.checked);
  });
}
window.onload = setTimeout(onLoad, 5000);
