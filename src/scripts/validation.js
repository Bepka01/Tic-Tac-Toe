import { winCombo, fields, board } from './constants';

export function checkDraw() {
  return !board.includes('');
}

export function checkAllFields() {
  const allFields = Array.from(fields);

  const emptyFields = allFields.filter((field) => {
    return field.children.length === 0;
  });
  return emptyFields.length === 0;
}

export function checkWin() {
  for (let combo of winCombo) {
    const [a, b, c] = combo;

    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return null;
}
export function checkField(field) {
  if (field.children.length === 0) {
    return true;
  } else {
    alert('Больше в одно поле ставить нельзя');
    return false;
  }
}
