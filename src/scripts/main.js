import '../scss/main.scss';
const fields = document.querySelectorAll('.field');

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

fields.forEach((field, index) => {
  console.log(field, index);
  field = index;
  console.log(index === 1);
});

// function checkWin() {
//   fields.forEach((field, index) => {
//     console.log(field, index);
//     field = index;
//     if (createNull) {
//       if (index === 0 && index === 1 && index === 2) {
//         alert('Победили Нолики');
//       }
//     }
//   });
// }

let swapPath = true;

fields.forEach((field) => {
  field.addEventListener('click', () => {
    if (checkField(field)) {
      if (swapPath) {
        createCross(field);
        swapPath = false;
      } else {
        createNull(field);
        swapPath = true;
      }
    }
    if (checkAllFields()) {
      setTimeout(() => {
        alert('Игра окончена, Ничья!!!');
        fields.forEach((field) => (field.innerHTML = ''));
      }, 100);
    }
  });
});

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
  field.appendChild(cross);
}
