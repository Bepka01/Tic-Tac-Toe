import '../scss/main.scss';
import { createCross, createNull } from './ui';
import { board } from './constants';
import { checkWin, checkAllFields, checkField } from './validation';
import { showModal } from './modal';

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
          showModal('Выиграли Крестики', clearFields);

          return;
        }
      } else {
        createNull(field);
        board[index] = 'O';
        if (checkWin()) {
          showModal('Выиграли Крестики', clearFields);
          return;
        }
      }
      swapPath = !swapPath;
    }
    if (checkAllFields(fields)) {
      showModal('Ничья', clearFields);
      return;
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
