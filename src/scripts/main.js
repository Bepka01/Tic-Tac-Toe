import '../scss/main.scss';
import { createCross, createNull } from './ui';
import { board } from './constants';
import { checkWin, checkAllFields, checkField } from './validation';

const fields = document.querySelectorAll('.field');
const btnClear = document.querySelector('.clear__fields');

btnClear.addEventListener('click', clearFields);

let swapPath = true;

fields.forEach((field, index) => {
  field.addEventListener('click', () => {
    if (checkField(field)) {
      if (swapPath) {
        createCross(field);
        board[index] = 'X';
        if (checkWin()) {
          finishGame('Выйграли Крестики');
          return;
        }
      } else {
        createNull(field);
        board[index] = 'O';
        if (checkWin()) {
          finishGame('Выйграли Нолики');
          return;
        }
      }
      swapPath = !swapPath;
    }
    if (checkAllFields()) {
      setTimeout(() => {
        alert('Ничья');
        clearFields();
      }, 100);
    }
  });
});

function clearFields() {
  setTimeout(() => {
    fields.forEach((field) => {
      field.innerHTML = '';
    });
    board.forEach((elem, index) => {
      board[index] = '';
    });
    swapPath = true;
  }, 200);
}

function finishGame(mes) {
  setTimeout(() => {
    alert(mes);
    clearFields();
  }, 100);
}
