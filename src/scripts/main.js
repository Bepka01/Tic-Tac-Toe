import '../scss/main.scss';
import { createCross, createNull } from './ui';
import { board, btnClear, fields } from './constants';
import { checkWin, checkAllFields, checkDraw, checkField } from './validation';

btnClear.addEventListener('click', clearFields);

let swapPath = true;

fields.forEach((field, index) => {
  field.addEventListener('click', () => {
    if (checkField(field)) {
      if (swapPath) {
        createCross(field);
        board[index] = 'X';
        console.log(index);
        swapPath = false;
        console.log(board);
        if (checkWin()) {
          setTimeout(() => {
            alert('Выйграли Крестики');
            clearFields();
          }, 100);
          return;
        }
      } else {
        createNull(field);
        board[index] = 'O';
        console.log(index);
        swapPath = true;
        console.log(board);
        if (checkWin()) {
          setTimeout(() => {
            alert('Выйграли Нолики');
            clearFields();
          }, 100);
          return;
        }
      }
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
  fields.forEach((field) => {
    field.innerHTML = '';
  });
  board.forEach((elem, index) => {
    board[index] = '';
  });
  swapPath = true;
}
