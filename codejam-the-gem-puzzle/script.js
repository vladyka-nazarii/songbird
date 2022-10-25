let moves = 0;
let time = 0;
let timerIsActive = false;
let size = 4;
let order = [];
let position = [];
let results = [];
let elements;
const audio = new Audio();
audio.src = "./assets/sounds/bass.mp3";

function makePage() {
  makeHeader();
  makeResultsPage();
  addEventHeader();
  makeField();
  makeFooter();
  addEventFooter();
  setSize();
  showTime();
  loadResults();
}

function startGame() {
  setOrder();
  genPuzzle();
  findMovable();
  addEventTiles();
};

function loadGame() {
  setSize();
  order = localStorage.getItem('position').split(',').map(e => +e);
  genPuzzle();
  order = localStorage.getItem('order').split(',').map(e => +e);
  const elementsTop = localStorage.getItem('elementsTop').split(',');
  const elementsleft = localStorage.getItem('elementsleft').split(',');
  const elements = document.querySelectorAll('.element');
  elements.forEach((e, i) => {
    e.style.top = elementsTop[i];
    e.style.left = elementsleft[i];
  });
  findMovable();
  addEventTiles();
}

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
  elements[order.indexOf(size ** 2)].addEventListener('dragover', dragOver);
  elements[order.indexOf(size ** 2)].addEventListener('drop', dragDrop);
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
    document.querySelector('.top-click').classList.remove('top-click');
  };
  if (document.querySelector('.bottom-click')) {
    document.querySelector('.bottom-click').classList.remove('bottom-click');
  };
  if (document.querySelector('.left-click')) {
    document.querySelector('.left-click').classList.remove('left-click');
  };
  if (document.querySelector('.right-click')) {
    document.querySelector('.right-click').classList.remove('right-click');
  }
};

function dragStart() {
  setTimeout(() => {
    this.classList.add('hiden');
  }, 0);
};

function dragEnd() {
  this.classList.remove('hiden');
};

function dragOver(evt) {
  evt.preventDefault();
};

function dragEnter(evt) {
  evt.preventDefault();
};

function dragLeave(evt) {
  evt.preventDefault();
};

function dragDrop() {
  if (document.querySelector('.hiden').classList.value === 'element top-click hiden') {moveTop()};
  if (document.querySelector('.hiden').classList.value === 'element bottom-click hiden') {moveBottom()};
  if (document.querySelector('.hiden').classList.value === 'element left-click hiden') {moveLeft()};
  if (document.querySelector('.hiden').classList.value === 'element right-click hiden') {moveright()};
};

function addEventTiles() {
  if (document.querySelector('.top-click')) {
    document.querySelector('.top-click').addEventListener('click', moveTop);
    document.querySelector('.top-click').setAttribute('draggable', true);
    document.querySelector('.top-click').addEventListener('dragstart', dragStart);
    document.querySelector('.top-click').addEventListener('dragend', dragEnd);
  };
  if (document.querySelector('.bottom-click')) {
    document.querySelector('.bottom-click').addEventListener('click', moveBottom);
    document.querySelector('.bottom-click').setAttribute('draggable', true);
    document.querySelector('.bottom-click').addEventListener('dragstart', dragStart);
    document.querySelector('.bottom-click').addEventListener('dragend', dragEnd);
  };
  if (document.querySelector('.left-click')) {
    document.querySelector('.left-click').addEventListener('click', moveLeft);
    document.querySelector('.left-click').setAttribute('draggable', true);
    document.querySelector('.left-click').addEventListener('dragstart', dragStart);
    document.querySelector('.left-click').addEventListener('dragend', dragEnd);
  };
  if (document.querySelector('.right-click')) {
    document.querySelector('.right-click').addEventListener('click', moveright);
    document.querySelector('.right-click').setAttribute('draggable', true);
    document.querySelector('.right-click').addEventListener('dragstart', dragStart);
    document.querySelector('.right-click').addEventListener('dragend', dragEnd);
  }
};

function removeEvent() {
  if (document.querySelector('.top-click')) {
    document.querySelector('.top-click').removeEventListener('click', moveTop);
    document.querySelector('.top-click').setAttribute('draggable', false);
    document.querySelector('.top-click').removeEventListener('dragstart', dragStart);
    document.querySelector('.top-click').removeEventListener('dragend', dragEnd);
  };
  if (document.querySelector('.bottom-click')) {
    document.querySelector('.bottom-click').removeEventListener('click', moveBottom);
    document.querySelector('.bottom-click').setAttribute('draggable', false);
    document.querySelector('.bottom-click').removeEventListener('dragstart', dragStart);
    document.querySelector('.bottom-click').removeEventListener('dragend', dragEnd);
  };
  if (document.querySelector('.left-click')) {
    document.querySelector('.left-click').removeEventListener('click', moveLeft);
    document.querySelector('.left-click').setAttribute('draggable', false);
    document.querySelector('.left-click').removeEventListener('dragstart', dragStart);
    document.querySelector('.left-click').removeEventListener('dragend', dragEnd);
  };
  if (document.querySelector('.right-click')) {
    document.querySelector('.right-click').removeEventListener('click', moveright);
    document.querySelector('.right-click').setAttribute('draggable', false);
    document.querySelector('.right-click').removeEventListener('dragstart', dragStart);
    document.querySelector('.right-click').removeEventListener('dragend', dragEnd);
  }
};

function finishMove() {
  audio.play();
  removeEvent();
  removeMovable();
  findMovable();
  addEventTiles();
  moves += 1;
  document.querySelector(".moves").innerHTML = `${moves}`;
  timerIsActive = true;
  checkWin();
}

function moveTop() {
  const field = document.querySelector('.field');
  const topElement = document.querySelector('.top-click');
  let top;
  if (topElement.style.top === '') {
    top = 0;
  } else {
    top = +topElement.style.top.slice(0, -1);
  };
  topElement.style.top = `${top + 100 / size}%`;
  const empty = document.querySelector('.empty');
  let topEmpty;
  if (empty.style.top === '') {
    topEmpty = 0;
  } else {
    topEmpty = +empty.style.top.slice(0, -1);
  };
  empty.style.top = `${topEmpty - 100 / size}%`;
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
    top = +bottomElement.style.top.slice(0, -1);
  };
  bottomElement.style.top = `${top - 100 / size}%`;
  const empty = document.querySelector('.empty');
  let topEmpty;
  if (empty.style.top === '') {
    topEmpty = 0;
  } else {
    topEmpty = +empty.style.top.slice(0, -1);
  };
  empty.style.top = `${topEmpty + 100 / size}%`;
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
    left = +leftElement.style.left.slice(0, -1);
  };
  leftElement.style.left = `${left + 100 / size}%`;
  const empty = document.querySelector('.empty');
  let leftEmpty;
  if (empty.style.left === '') {
    leftEmpty = 0;
  } else {
    leftEmpty = +empty.style.left.slice(0, -1);
  };
  empty.style.left = `${leftEmpty - 100 / size}%`;
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
    left = +rightElement.style.left.slice(0, -1);
  };
  rightElement.style.left = `${left - 100 / size}%`;
  const empty = document.querySelector('.empty');
  let leftEmpty;
  if (empty.style.left === '') {
    leftEmpty = 0;
  } else {
    leftEmpty = +empty.style.left.slice(0, -1);
  };
  empty.style.left = `${leftEmpty + 100 / size}%`;
  const i = order.indexOf(size ** 2);
  const j = i + 1;
  [order[i], order[j]] = [order[j], order[i]];
  finishMove();
};

function checkWin() {
  if (order.every((e, i) => e === i + 1)) {
    const field = document.querySelector('.field');
    const layout = document.createElement('div');
    layout.classList.add('layout');
    layout.innerHTML = `Hooray! You solved the puzzle in ${Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:${time % 60 > 9 ? time % 60 : `0${time % 60}`} and ${moves} moves!`
    field.append(layout);
    timerIsActive = false;
    saveResults();
  }
};

function makeHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML =
  `<div class="btn-div">
    <button class="btn">Shuffle and start</button>
    <button class="btn">Stop</button>
    <button class="btn">Save</button>
    <button class="btn">Load</button>
    <button class="btn">Results</button>
    <img class="mute" src="./assets/img/sound_on.svg" alt="mute">
    <img class="mute hide" src="./assets/img/sound_off.svg" alt="mute">
  </div>`
  const movesTime = document.createElement('div');
  movesTime.classList.add('moves-time');
  const move = document.createElement('p');
  move.classList.add('moves-container');
  move.innerHTML = `Moves: <span class="moves">${moves}</span>`;
  movesTime.append(move);
  const timer = document.createElement('p');
  timer.classList.add('time-container');
  timer.innerHTML = `Time: <span class="time">${Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:${time % 60 > 9 ? time % 60 : `0${time % 60}`}</span>`;
  movesTime.append(timer);
  header.append(movesTime);
  document.body.append(header);
};

function makeResultsPage() {
  const header = document.querySelector('.header');
  const resultsDiv = document.createElement('div');
  resultsDiv.classList.add('results');
  const title = document.createElement('p');
  title.classList.add('title');
  title.innerHTML = 'Results:';
  resultsDiv.append(title);
  header.append(resultsDiv);
}

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
  time = 0;
  document.querySelector('.time').innerHTML = '00:00';
  moves = 0;
  document.querySelector(".moves").innerHTML = `${moves}`;
  setSize();
  setOrder();
  genPuzzle();
  findMovable();
  addEventTiles();
  timerIsActive = false;
}

function addEventFooter() {
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
  if (timerIsActive) {
    time += 1;
    document.querySelector('.time').innerHTML = `${Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:${time % 60 > 9 ? time % 60 : `0${time % 60}`}`;
  }
  setTimeout(showTime, 1000);
};

function addEventHeader() {
  document.querySelectorAll('.btn')[0].addEventListener('click', () => {
    resize();
    timerIsActive = true;
  });
  document.querySelectorAll('.btn')[1].addEventListener('click', () => {
    timerIsActive = false;
  });
  document.querySelectorAll('.btn')[2].addEventListener('click', () => {
    setLocalStorage();
  });
  document.querySelectorAll('.btn')[3].addEventListener('click', () => {
    getLocalStorage();
    loadGame();
  });
  document.querySelectorAll('.btn')[4].addEventListener('click', () => {
    document.querySelector('.results').classList.toggle('active');
  });
  document.querySelectorAll('.mute')[0].addEventListener('click', () => {
    audio.volume = 0;
    document.querySelectorAll('.mute')[0].classList.add('hide');
    document.querySelectorAll('.mute')[1].classList.remove('hide');
  });
  document.querySelectorAll('.mute')[1].addEventListener('click', () => {
    audio.volume = 1;
    document.querySelectorAll('.mute')[0].classList.remove('hide');
    document.querySelectorAll('.mute')[1].classList.add('hide');
  });
};

function saveResults() {
  results.push({
    size: `${size}x${size}`,
    moves: moves,
    time: time,
  });
  results.sort((a, b) => a.time - b.time);
  if (results.length > 10) {
    results.pop();
  }
  const resultsPage = document.querySelector('.results');
  resultsPage.innerHTML = '<p class="title">Results:</p>';
  results.forEach((e, i) => {
    localStorage.setItem(`result_${i}`, [e.size, e.moves, e.time]);
    const item = document.createElement('p');
    item.classList.add('results-item');
    item.innerHTML = `${i + 1}. Size: ${e.size} Time: ${Math.floor(e.time / 60) > 9 ? Math.floor(e.time / 60) : `0${Math.floor(e.time / 60)}`}:${e.time % 60 > 9 ? e.time % 60 : `0${e.time % 60}`} Moves: ${e.moves}`
    resultsPage.append(item);
  });
}

function loadResults() {
  for (let i = 0; i < 10; i++) {
    if (localStorage.getItem(`result_${i}`)) {
      results.push({
        size: localStorage.getItem(`result_${i}`).split(',')[0],
        moves: localStorage.getItem(`result_${i}`).split(',').map(e => +e)[1],
        time: localStorage.getItem(`result_${i}`).split(',').map(e => +e)[2],
      });
    }
  };
  results.sort((a, b) => a.time - b.time);
  if (results.length > 0) {
    const resultsPage = document.querySelector('.results');
    resultsPage.innerHTML = '<p class="title">Results:</p>';
    results.forEach((e, i) => {
      const item = document.createElement('p');
      item.classList.add('results-item');
      item.innerHTML = `${i + 1}. Size: ${e.size} Time: ${Math.floor(e.time / 60) > 9 ? Math.floor(e.time / 60) : `0${Math.floor(e.time / 60)}`}:${e.time % 60 > 9 ? e.time % 60 : `0${e.time % 60}`} Moves: ${e.moves}`
      resultsPage.append(item);
    });
  }
};

function setLocalStorage() {
  localStorage.setItem('saved', true);
  localStorage.setItem('moves', moves);
  localStorage.setItem('time', time);
  localStorage.setItem('size', size);
  localStorage.setItem('order', order);
  localStorage.setItem('position', position);
  const elements = document.querySelectorAll('.element');
  const elementsTop = [];
  const elementsleft = [];
  elements.forEach(e => {
    elementsTop.push(e.style.top);
    elementsleft.push(e.style.left);
  });
  localStorage.setItem('elementsTop', elementsTop);
  localStorage.setItem('elementsleft', elementsleft);
};

function getLocalStorage() {
  if (localStorage.getItem('moves')) {moves = +localStorage.getItem('moves')};
  if (localStorage.getItem('time')) {time = +localStorage.getItem('time')};
  if (localStorage.getItem('time')) {size = +localStorage.getItem('size')};
};

window.addEventListener('load', () => {
  makePage();
  startGame();
});