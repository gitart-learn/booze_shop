
// function createElement() {

// }


function createModal(modalContent) {
  const precontent = document.querySelector(modalContent);
  let content;
  if (!precontent) {
    console.warn(`cannot find modal with class ${modalContent}`);
    content = document.createTextNode(`cannot find  modal with class ${modalContent}`);
  } else {

    content = precontent.cloneNode(true)

    content.removeAttribute('hidden');
  }


  const defaultOverlay = document.createElement('div');
  defaultOverlay.className = 'defaultOverlay defaultOverlay--active'

  function removeModal() {
    defaultOverlay.remove();
  }

  const defaultModal = document.createElement('div');
  defaultModal.className = 'defaultModal defaultModal--active';

  const modalClose = document.createElement('div');

  // modalClose.dataset.closeModal = true;
  // modalClose.setAttribute('data-close-modal', 'true')

  modalClose.className = 'modal__close';
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  modalClose.append(span1)
  modalClose.append(span2)

  defaultOverlay.append(defaultModal);
  defaultModal.append(modalClose);
  defaultModal.append(content);



  modalClose.addEventListener('click', removeModal)
  defaultOverlay.addEventListener('click', e => {
    // if (e.target === defaultOverlay || e.target.dataset.closeModal) {
    if (e.target === defaultOverlay) {
      removeModal(defaultOverlay);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape") {
      removeModal(defaultOverlay);
    }
  });



  return defaultOverlay;

}


function openModal(modalClass) {
  // const content = document.querySelector(modalClass).cloneNode(true);
  // const content = document.querySelector(modalClass);

  const defaultModal = createModal(modalClass);

  document.body.appendChild(defaultModal);


}


export default openModal;