const modalTarget = document.querySelector('.page-wrapper');
const modalCloser = document.querySelector('.info-modal');



window.addEventListener('load', (event) => {
    modalTarget.classList.add('page-dim');
  });

window.addEventListener('click', (event)=> {
    modalTarget.classList.remove('page-dim');
});