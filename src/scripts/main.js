import '../scss/main.scss';
import { createCross, createNull } from './ui';
import { board } from './constants';
import { checkWin, checkAllFields, checkField } from './validation';

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal__text');
const modalClose = document.querySelector('.modal__close');
export const fields = document.querySelectorAll('.field');
const btnClear = document.querySelector('.clear__fields');

btnClear.addEventListener('click', clearFields);

let swapPath = true;

fields.forEach((field, index) => {
  field.addEventListener('click', () => {
    if (checkField(index)) {
      if (swapPath) {
        createCross(field);
        board[index] = 'X';
        if (checkWin()) {
          showModal('Выйграли Крестики');
          return;
        }
      } else {
        createNull(field);
        board[index] = 'O';
        if (checkWin()) {
          showModal('Выйграли Нолики');
          return;
        }
      }
      swapPath = !swapPath;
    }
    if (checkAllFields(fields)) {
      showModal('Ничья');
    }
  });
});

function clearFields() {
  fields.forEach((field) => {
    field.innerHTML = '';
  });
  board.forEach((elem, index) => {
    board[index] = '';
  });
  swapPath = true;
}

function showModal(mes) {
  modalText.textContent = mes;
  modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
  clearFields();
});
