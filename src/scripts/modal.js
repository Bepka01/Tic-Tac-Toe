const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal__text');
const modalClose = document.querySelector('.modal__close');

let closeCallback = null;

export function showModal(message, callback = null) {
  modalText.textContent = message;
  closeCallback = callback;
  modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');

  if (closeCallback) {
    closeCallback();
    closeCallback = null;
  }
});
