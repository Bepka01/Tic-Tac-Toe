export function createCross(field) {
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
  });

  line1.style.transform = 'rotate(45deg)';
  line2.style.transform = 'rotate(-45deg)';

  cross.append(line1, line2);
  field.appendChild(cross);
}

export function createNull(field) {
  const nulik = document.createElement('div');
  nulik.style.width = '50px';
  nulik.style.height = '50px';
  nulik.style.borderRadius = '50%';
  nulik.style.border = '3px solid black';

  field.appendChild(nulik);
}
