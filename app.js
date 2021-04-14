const modalTarget = document.querySelector('.page-wrapper');
const modalCloser = document.querySelector('.close');
const modalContent = document.querySelector('.modal')



window.addEventListener('load', (event) => {
    modalTarget.classList.add('page-dim');
    modalContent.classList.add('info-modal-shown');
  });

modalCloser.addEventListener('click', (event)=> {
    modalTarget.classList.remove('page-dim');
    modalContent.classList.remove('info-modal-shown')
});