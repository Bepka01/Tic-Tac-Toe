import '../scss/main.scss';
const fields = document.querySelectorAll('.field');
const btnClear = document.querySelector('.clear__fields');

btnClear.addEventListener('click', clearFields);

const board = ['', '', '', '', '', '', '', '', ''];
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

function createNull(field) {
  const nulik = document.createElement('div');
  nulik.style.width = '50px';
  nulik.style.height = '50px';
  nulik.style.borderRadius = '50%';
  nulik.style.border = '3px solid black';
  field.appendChild(nulik);
}

function checkField(field) {
  if (field.children.length === 0) {
    return true;
  } else {
    alert('Больше в одно поле ставить нельзя');
    return false;
  }
}

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
          });
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
        }
      }
    }
    if (checkAllFields()) {
      setTimeout(() => {
        checkDraw();
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

function checkDraw() {
  return !board.includes('');
}

function checkAllFields() {
  const allFields = Array.from(fields);

  const emptyFields = allFields.filter((field) => {
    return field.children.length === 0;
  });
  return emptyFields.length === 0;
}

function createCross(field) {
  const cross = document.createElement('div');

  cross.style.position = 'relative';
  cross.style.width = '50px';
  cross.style.height = '50px';

  const line1 = document.createElement('div');
  const line2 = document.createElement('div');

  [line1, line2].forEach((line) => {
    line.style.position = 'absolute';
    line.style.width = '100%';
    line.style.height = '4px';
    line.style.background = 'black';
    line.style.top = '50%';
    line.style.left = '0';
  });

  line1.style.transform = 'rotate(45deg)';
  line2.style.transform = 'rotate(-45deg)';

  cross.appendChild(line1);
  cross.appendChild(line2);

  field.appendChild(cross);
}

function checkWin() {
  for (let combo of winCombo) {
    console.log(combo);

    const [a, b, c] = combo;

    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return null;
}
