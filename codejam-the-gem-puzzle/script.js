let moves = 0;
let time = '00:00';
let size = 3;
let order = [];
let position = [];
let elements;
const audio = new Audio();
audio.src = "./assets/bass.mp3";

function startGame() {
  makeHeader();
  makeField();
  makeFooter();
  addEventSizes();
  setSize();
  setOrder();
  genPuzzle();
  findMovable();
  addEvent();
};

function makeField() {
  const field = document.createElement('div');
  field.classList.add('field');
  document.body.append(field);
};

function setSize() {
  document.querySelector(':root').style.setProperty('--size', `${100 / size}%`);
};

function setOrder() {
  order = [];
  for (let i = 1; i <= size ** 2; i++) {
    order.push(i);
  };
  checkResolvable();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function checkResolvable() {
  let result = 0;
  shuffle(order);
  for (let i = 0; i < order.length; i++) {
    for (let j = i + 1; j < order.length; j++) {
      if (order[i] > order[j] && order[i] !== size ** 2 && order[j] !== size ** 2) {
        result += 1;
      }
    }
  };
  if (size % 2 === 1 && result % 2 === 1) {
    checkResolvable();
  };
  if (size % 2 === 0 && (result % 2 + Math.floor(order.indexOf(size ** 2) / size)) % 2 === 0) {
    checkResolvable();
  }
};

function genPuzzle() {
  const field = document.querySelector('.field');
  field.innerHTML = '';
  position = [];
  for (let i = 0; i < size ** 2; i++) {
    const element = document.createElement('div');
    element.classList.add('element');
    element.innerHTML = `${order[i]}`;
    position.push(order[i]);
    field.append(element);
  };
  elements = document.querySelectorAll('.element');
  elements[order.indexOf(size ** 2)].classList.add('empty');
};

function findMovable() {
  elements = document.querySelectorAll('.element');
  const empty = order.indexOf(size ** 2);
  if (empty - size >= 0) {
    elements[position.indexOf(order[empty - size])].classList.add('top-click');
  };
  if (empty + size < size ** 2) {
    elements[position.indexOf(order[empty + size])].classList.add('bottom-click');
  };
  if (empty % size !== 0) {
    elements[position.indexOf(order[empty - 1])].classList.add('left-click');
  };
  if (empty % size !== size - 1) {
    elements[position.indexOf(order[empty + 1])].classList.add('right-click');
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
  document.querySelector(".moves").innerHTML = `${moves}`;
}

function moveTop() {
  const field = document.querySelector('.field');
  const topElement = document.querySelector('.top-click');
  let top;
  if (topElement.style.top === '') {
    top = 0;
  } else {
    // top = +topElement.style.top.slice(0, -2);
    top = +topElement.style.top.slice(0, -1);
  };
  // topElement.style.top = `${top + field.clientWidth / size}px`;
  topElement.style.top = `${top + 100 / size}%`;
  const i = order.indexOf(size ** 2);
  const j = i - size;
  [order[i], order[j]] = [order[j], order[i]];
  finishMove();
};

function moveBottom() {
  const field = document.querySelector('.field');
  const bottomElement = document.querySelector('.bottom-click');
  let top;
  if (bottomElement.style.top === '') {
    top = 0;
  } else {
    // top = +bottomElement.style.top.slice(0, -2);
    top = +bottomElement.style.top.slice(0, -1);
  };
  // bottomElement.style.top = `${top - field.clientWidth / size}px`;
  bottomElement.style.top = `${top - 100 / size}%`;
  const i = order.indexOf(size ** 2);
  const j = i + size;
  [order[i], order[j]] = [order[j], order[i]];
  finishMove();
};

function moveLeft() {
  const field = document.querySelector('.field');
  const leftElement = document.querySelector('.left-click');
  let left;
  if (leftElement.style.left === '') {
    left = 0;
  } else {
    // left = +leftElement.style.left.slice(0, -2);
    left = +leftElement.style.left.slice(0, -1);
  };
  // leftElement.style.left = `${left + field.clientWidth / size}px`;
  leftElement.style.left = `${left + 100 / size}%`;
  const i = order.indexOf(size ** 2);
  const j = i - 1;
  [order[i], order[j]] = [order[j], order[i]];
  finishMove();
};

function moveright() {
  const field = document.querySelector('.field');
  const rightElement = document.querySelector('.right-click');
  let left;
  if (rightElement.style.left === '') {
    left = 0;
  } else {
    // left = +rightElement.style.left.slice(0, -2);
    left = +rightElement.style.left.slice(0, -1);
  };
  // rightElement.style.left = `${left - field.clientWidth / size}px`;
  rightElement.style.left = `${left - 100 / size}%`;
  const i = order.indexOf(size ** 2);
  const j = i + 1;
  [order[i], order[j]] = [order[j], order[i]];
  finishMove();
};

function makeHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = '<div class="btn-div"><button class="btn">Shuffle and start</button><button class="btn">Stop</button><button class="btn">Save</button><button class="btn">Results</button></div>'
  const movesTime = document.createElement('div');
  movesTime.classList.add('moves-time');
  const move = document.createElement('p');
  move.classList.add('moves-container');
  move.innerHTML = `Moves: <span class="moves">${moves}</span>`;
  movesTime.append(move);
  const timer = document.createElement('p');
  timer.classList.add('time-container');
  timer.innerHTML = `Time: <span class="time">00:00</span>`;
  movesTime.append(timer);
  header.append(movesTime);
  document.body.append(header);
};

function makeFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const frameSize = document.createElement('p');
  frameSize.classList.add('size-text');
  frameSize.innerHTML = `Frame size: ${size}x${size}`;
  footer.append(frameSize);
  const otherSizes = document.createElement('p');
  otherSizes.classList.add('size-text');
  otherSizes.innerHTML = `Other sizes: <span class="size">3x3</span> <span class="size">4x4</span> <span class="size">5x5</span> <span class="size">6x6</span> <span class="size">7x7</span> <span class="size">8x8</span>`;
  footer.append(otherSizes);
  document.body.append(footer);
}

function resize() {
  setSize();
  setOrder();
  genPuzzle();
  findMovable();
  addEvent();
}

function addEventSizes() {
  document.querySelectorAll('.size').forEach((e, i) => {
    e.addEventListener('click', () => {
      if (size !== i + 3) {
        size = i + 3;
        resize();
      }
    })
  });
};

function showTime() {
  let seconds

  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}

window.addEventListener('load', startGame);