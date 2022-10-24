const audio = new Audio();
let moves = 0;
let size = 3;
let order = [];
let elements;
audio.src = "./assets/bass.mp3";

function startGame() {
  makeField();
  setSize();
  setOrder();
  genPuzzle();
  findMovable();
  addEvent();
  console.log(order.indexOf(size ** 2) + 1);
};

function makeField() {
  const field = document.createElement('div');
  field.classList.add('field');
  document.body.append(field, document.body.childNodes[0]);
};

function setSize() {
  document.querySelector(':root').style.setProperty('--size', `${100 / size}%`);
};

function setOrder() {
  for (let i = 1; i <= size ** 2; i++) {
    order.push(i);
  };
  shuffle(order);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function genPuzzle() {
  const field = document.querySelector('.field');
  for (let i = 0; i < size ** 2; i++) {
    const element = document.createElement('div');
    element.classList.add('element');
    element.innerHTML = `${order[i]}`;
    field.append(element);
  };
  elements = document.querySelectorAll('.element');
  elements[order.indexOf(size ** 2)].classList.add('empty');
};

function findMovable() {
  elements = document.querySelectorAll('.element');
  const empty = order.indexOf(size ** 2) + 1;
  if (empty - size > 0) {
    console.log(empty - size, 'top', order[empty - size - 1]);
    elements[empty - size - 1].classList.add('top-click');
  };
  if (empty + size <= size ** 2) {
    // console.log(empty + size, 'bottom', order[empty + size - 1]);
    elements[empty + size - 1].classList.add('bottom-click');
  };
  if (empty % size !== 1) {
    // console.log(empty - 1, 'left', order[empty - 1 - 1]);
    elements[empty - 1 - 1].classList.add('left-click');
  };
  if (empty % size !== 0) {
    // console.log(empty + 1, 'right', order[empty + 1 - 1]);
    elements[empty + 1 - 1].classList.add('right-click');
  }
};

function removeMovable() {
  if (document.querySelector('.top-click')) {
    document.querySelector('.top-click').classList.remove('top-click')
  };
  if (document.querySelector('.bottom-click')) {
    document.querySelector('.bottom-click').classList.remove('bottom-click')
  };
  if (document.querySelector('.left-click')) {
    document.querySelector('.left-click').classList.remove('left-click')
  };
  if (document.querySelector('.right-click')) {
    document.querySelector('.right-click').classList.remove('right-click')
  }
};

function addEvent() {
  if (document.querySelector('.top-click')) {
    document.querySelector('.top-click').addEventListener('click', moveTop)
  };
  if (document.querySelector('.bottom-click')) {
    document.querySelector('.bottom-click').addEventListener('click', moveBottom)
  };
  if (document.querySelector('.left-click')) {
    document.querySelector('.left-click').addEventListener('click', moveLeft)
  };
  if (document.querySelector('.right-click')) {
    document.querySelector('.right-click').addEventListener('click', moveright)
  }
};

function removeEvent() {
  if (document.querySelector('.top-click')) {
    document.querySelector('.top-click').removeEventListener('click', moveTop)
  };
  if (document.querySelector('.bottom-click')) {
    document.querySelector('.bottom-click').removeEventListener('click', moveBottom)
  };
  if (document.querySelector('.left-click')) {
    document.querySelector('.left-click').removeEventListener('click', moveLeft)
  };
  if (document.querySelector('.right-click')) {
    document.querySelector('.right-click').removeEventListener('click', moveright)
  }
};

function finishMove() {
  audio.play();
  removeEvent();
  removeMovable();
  findMovable();
  addEvent();
  moves += 1;
  console.log(order.indexOf(size ** 2) + 1);
}

function moveTop() {
  const field = document.querySelector('.field');
  const topElement = document.querySelector('.top-click');
  let top;
  if (topElement.style.top === '') {
    top = 0;
  } else {
    top = +topElement.style.top.slice(0, -2);
  };
  topElement.style.top = `${top + field.clientWidth / size}px`;
  order[order.indexOf(size ** 2)];
  [order[order.indexOf(size ** 2)], order[order.indexOf(size ** 2 - size)]] = [order[order.indexOf(size ** 2 - size)], order[order.indexOf(size ** 2)]];
  finishMove();
};
function moveBottom() {};
function moveLeft() {};
function moveright() {};


window.addEventListener('load', startGame);