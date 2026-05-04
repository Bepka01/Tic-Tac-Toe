import { winCombo, board } from './constants';

export function checkAllFields(fields) {
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
export function checkField(index) {
  if (board[index] === '') {
    return true;
  }

  alert('Больше в одно поле ставить нельзя');
  return false;
}
