import birdsData from './src/birds.js';
import birdsDataEn from './src/birds-en.js';

const audio = new Audio();
const sounds = new Audio();
const selectedAudio = new Audio();
const nextBnt = document.querySelector(".next-bnt");
const tryAgainBtn  = document.querySelector(".try-again-btn");
let currentData = birdsData;
let stage = 0;
let birdToGuess;
let guess = false;
let atempts = [];
let score = 0;

function getRandomBird() {
  const duration = document.querySelector(".end");
  birdToGuess = Math.round(Math.random() * 5);
  audio.src = currentData[stage][birdToGuess].audio;
  audio.addEventListener("loadedmetadata", () => {
    duration.innerHTML = getTimeCodeFromNum(audio.duration);
  });
};

getRandomBird();

// AUDIO PLAYER

const playBtn = document.querySelector(".play-btn");
const selectedPlayBtn = document.querySelector(".selected-play-btn");
const volumeSlider = document.querySelector(".volume");
const volumeIcon = document.querySelector(".volume-svg");
let isPlaying = false;
let selectedIsPlaying = false;

//play pause
function play() {
  const play = document.querySelector(".play-svg");
  const pause = document.querySelector(".pause-svg");
  const selectedPlay = document.querySelector(".selected-play-svg");
  const selectedPause = document.querySelector(".selected-pause-svg");
  if (selectedIsPlaying) {
    selectedIsPlaying = !selectedIsPlaying;
    selectedPause.classList.remove("active");
    selectedPlay.classList.add("active");
    selectedAudio.pause();
  };
  if (isPlaying) {
    isPlaying = !isPlaying;
    pause.classList.remove("active");
    play.classList.add("active");
    audio.pause();
  } else {
    isPlaying = !isPlaying;
    play.classList.remove("active");
    pause.classList.add("active");
    audio.play();
  }
};

//reset player on end of playing
audio.onended = () => {
  stopAudio();
}

function stopAudio() {
  const play = document.querySelector(".play-svg");
  const pause = document.querySelector(".pause-svg");
  audio.pause();
  isPlaying = false;
  audio.currentTime = 0;
  pause.classList.remove("active");
  play.classList.add("active");
}

//click on timeline to skip around
const timeline = document.querySelector(".progress");
timeline.addEventListener('input', () => {
  const timeToSeek = timeline.value / 1000 * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = document.querySelector(".progress");
  const start = document.querySelector(".start");
  progressBar.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audio.currentTime / audio.duration * 100}%, rgb(115, 115, 115) ${audio.currentTime / audio.duration * 100}%, rgb(115, 115, 115) 100%);`;
  progressBar.value = audio.currentTime / audio.duration * 1000;
  start.innerHTML = getTimeCodeFromNum(
    audio.currentTime
  );
}, 100);

//click volume slider to change volume
function changeVolume() {
  const fullVolume = document.querySelector(".full-volume");
  const halfVolume = document.querySelector(".half-volume");
  const muteVolume = document.querySelector(".mute-volume");
  const newVolume = volumeSlider.value / 100;
  audio.volume = newVolume;
  selectedAudio.volume = newVolume;
  sounds.volume = newVolume;
  volumeSlider.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audio.volume * 100}%, rgb(115, 115, 115) ${audio.currentTime / audio.duration * 100}%, rgb(115, 115, 115) 100%);`;
  if (audio.muted) {audio.muted = !audio.muted};
  if (audio.volume === 0) {
    audio.muted = true;
    selectedAudio.muted = true;
    sounds.muted = true;
    audio.volume = 1;
    selectedAudio.volume = 1;
    sounds.volume = 1;
    fullVolume.classList.add("hide");
    halfVolume.classList.add("hide");
    muteVolume.classList.remove("hide");
  } else if (audio.volume <= 0.5) {
    muteVolume.classList.add("hide");
    fullVolume.classList.add("hide");
    halfVolume.classList.remove("hide");
  } else {
    muteVolume.classList.add("hide");
    fullVolume.classList.remove("hide");
    halfVolume.classList.remove("hide");
  }
}

//mute volume
function mute() {
  const fullVolume = document.querySelector(".full-volume");
  const halfVolume = document.querySelector(".half-volume");
  const muteVolume = document.querySelector(".mute-volume");
  if (!audio.muted && audio.volume !== 0) {
    audio.muted = true;
    selectedAudio.muted = true;
    sounds.muted = true;
    fullVolume.classList.add("hide");
    halfVolume.classList.add("hide");
    muteVolume.classList.remove("hide");
    volumeSlider.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);`;
    volumeSlider.value = 0;
  } else if (audio.muted || audio.volume === 0) {
    audio.muted = false;
    selectedAudio.muted = false;
    sounds.muted = false;
    muteVolume.classList.add("hide");
    volumeSlider.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audio.volume * 100}%, rgb(115, 115, 115) ${audio.volume * 100}%, rgb(115, 115, 115) 100%);`;
    volumeSlider.value = audio.volume * 100;
    if (audio.volume <= 0.5) {
      fullVolume.classList.add("hide");
      halfVolume.classList.remove("hide");
    } else {
      fullVolume.classList.remove("hide");
      halfVolume.classList.remove("hide");
    }
  }
};

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
};

//events of player
playBtn.addEventListener('click', play)
volumeSlider.addEventListener('input', changeVolume);
volumeIcon.addEventListener("click", mute);

// SECOND AUDIO PLAYER

//play pause
function selectedPlay() {
  const play = document.querySelector(".play-svg");
  const pause = document.querySelector(".pause-svg");
  const selectedPlay = document.querySelector(".selected-play-svg");
  const selectedPause = document.querySelector(".selected-pause-svg");
  if (isPlaying) {
    isPlaying = !isPlaying;
    pause.classList.remove("active");
    play.classList.add("active");
    audio.pause();
  };
  if (selectedIsPlaying) {
    selectedIsPlaying = !selectedIsPlaying;
    selectedPause.classList.remove("active");
    selectedPlay.classList.add("active");
    selectedAudio.pause();
  } else {
    selectedIsPlaying = !selectedIsPlaying;
    selectedPause.classList.add("active");
    selectedPlay.classList.remove("active");
    selectedAudio.play();
  }
};

//reset player on end of playing
selectedAudio.onended = () => {
  selectedStopAudio();
}

function selectedStopAudio() {
  const play = document.querySelector(".selected-play-svg");
  const pause = document.querySelector(".selected-pause-svg");
  selectedAudio.pause();
  selectedIsPlaying = false;
  selectedAudio.currentTime = 0;
  pause.classList.remove("active");
  play.classList.add("active");
};

//click on timeline to skip around
const selectedTimeline = document.querySelector(".selected-progress");
selectedTimeline.addEventListener('input', () => {
  const timeToSeek = selectedTimeline.value / 1000 * selectedAudio.duration;
  selectedAudio.currentTime = timeToSeek;
}, false);

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = document.querySelector(".selected-progress");
  const start = document.querySelector(".selected-start");
  progressBar.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${selectedAudio.currentTime / selectedAudio.duration * 100}%, rgb(115, 115, 115) ${selectedAudio.currentTime / selectedAudio.duration * 100}%, rgb(115, 115, 115) 100%);`;
  progressBar.value = selectedAudio.currentTime / selectedAudio.duration * 1000;
  start.innerHTML = getTimeCodeFromNum(
    selectedAudio.currentTime
  );
}, 100);


//events of second player
selectedPlayBtn.addEventListener('click', selectedPlay)

// GUESS BIRD
function setEventOnList() {
  const birdList = document.querySelectorAll(".answer-item");
  birdList.forEach((e, i) => {
    e.addEventListener('click', () => checkGuess(i));
  });
};

setEventOnList();

function checkGuess(index) {
  const btns = document.querySelectorAll(".li-btn");
  if (index === birdToGuess) {
    if (!guess) {
      btns[index].classList.add("green");
      sounds.src = "./assets/audio/win.mp3";
      sounds.play();
      atempts.push(index);
      win();
    }
  } else {
    if (!guess && !atempts.includes(index)) {
      btns[index].classList.add("red");
      sounds.src = "./assets/audio/error.mp3";
      sounds.play();
      atempts.push(index);
    }
  };
  showBird(index);
};

function showBird(id) {
  const selectedBird = document.querySelector(".selected-bird");
  const selectedBirdImg = document.querySelector(".selected-bird-img");
  const selectedBirdName = document.querySelector(".selected-bird-name");
  const selectedBirdSpecies = document.querySelector(".selected-bird-species");
  const selectedBirdDescription = document.querySelector(".description-text");
  const duration = document.querySelector(".selected-end");
  selectedBirdImg.src = currentData[stage][id].image;
  selectedBirdName.innerHTML = currentData[stage][id].name;
  selectedBirdSpecies.innerHTML = currentData[stage][id].species;
  selectedBirdDescription.innerHTML = currentData[stage][id].description;
  selectedAudio.src = currentData[stage][id].audio;
  selectedAudio.addEventListener("loadedmetadata", () => {
    duration.innerHTML = getTimeCodeFromNum(selectedAudio.duration);
  });
  selectedBird.classList.add("show");
  selectedStopAudio();
};

function win() {
  const scoreHtml = document.querySelector(".score");
  const birdImg = document.querySelector(".bird-img");
  const birdName = document.querySelector(".bird-name");
  guess = true;
  score += 6 - atempts.length;
  scoreHtml.innerHTML = score;
  birdImg.src = currentData[stage][birdToGuess].image;
  birdName.innerHTML = currentData[stage][birdToGuess].name;
  nextBnt.classList.add("active");
  stopAudio();
};

function setNewBirds() {
  const birdImg = document.querySelector(".bird-img");
  const birdName = document.querySelector(".bird-name");
  const pageItems = document.querySelectorAll(".page-item");
  const birdList = document.querySelectorAll(".answer-item");
  const selectedBird = document.querySelector(".selected-bird");
  const selectedBirdDescription = document.querySelector(".description-text");
  if (stage - 1 >= 0) {pageItems[stage - 1].classList.remove("active")};
  pageItems[stage].classList.add("active");
  birdImg.src = "./assets/img/bird.jpg";
  birdName.innerHTML = "* * * * * *";
  birdList.forEach((e, i) => {
    e.innerHTML = `<span class="li-btn"></span>${currentData[stage][i].name}`;
  });
  setEventOnList();
  selectedBirdDescription.innerHTML = currentLang.description;
  selectedBird.classList.remove("show");
}

function nextLevel() {
  if (stage === 5) {
    gameOver();
  } else {
    if (guess) {
      stage += 1;
      guess = false;
      atempts = [];
      audio.pause();
      selectedAudio.pause();
      getRandomBird();
      nextBnt.classList.remove("active");
      setNewBirds();
      stopAudio();
      selectedStopAudio();
    }
  }
}

nextBnt.addEventListener('click', nextLevel)

let isGameEnded = false;

function gameOver() {
  const birdContainer = document.querySelector(".random-bird");
  const birdAnswers = document.querySelector(".answers-bird");
  const gameOverContainer = document.querySelector(".game-over");
  const gameOverScore = document.querySelector(".game-score-text");
  const maxScoreText  = document.querySelector(".max-score-text");
  birdContainer.classList.add("hide");
  birdAnswers.classList.add("hide");
  nextBnt.classList.add("hide");
  gameOverScore.innerHTML = currentLang.message1 + score + currentLang.message2;
  if (score === 30) {
    tryAgainBtn.classList.add("hide");
    maxScoreText.classList.add("show");
  }
  gameOverContainer.classList.add("show");
  isGameEnded = true;
}

function tryAgain() {
  const birdContainer = document.querySelector(".random-bird");
  const birdAnswers = document.querySelector(".answers-bird");
  const gameOverContainer = document.querySelector(".game-over");
  const maxScoreText  = document.querySelector(".max-score-text");
  const pageItems = document.querySelectorAll(".page-item");
  const scoreHtml = document.querySelector(".score");
  birdContainer.classList.remove("hide");
  birdAnswers.classList.remove("hide");
  nextBnt.classList.remove("hide");
  tryAgainBtn.classList.remove("hide");
  maxScoreText.classList.remove("show");
  gameOverContainer.classList.remove("show");
  stage = 0;
  score = 0;
  guess = false;
  atempts = [];
  scoreHtml.innerHTML = score;
  pageItems[5].classList.remove("active");
  getRandomBird();
  setNewBirds();
  isGameEnded = false;
}

tryAgainBtn.addEventListener('click', tryAgain);

// CHANGE LANGUAGE

const ruLangBtn = document.querySelector(".ru-lang");
const enLangBtn = document.querySelector(".en-lang");
let language = 'RU';
let ruLang = {
  score: `Очки:
  <span class="score">0</span>`,
  stage0: 'Разминка',
  stage1: 'Воробьиные',
  stage2: 'Лесные птицы',
  stage3: 'Певчие птицы',
  stage4: 'Хищные птицы',
  stage5: 'Морские птицы',
  description: `Послушайте плеер.<br>Выберите птицу из списка`,
  nextBtn: 'Следующий Уровень',
  greet: 'Поздравляем!',
  message1: `Вы прошли викторину и набрали `,
  message2: ` из 30 возможных баллов`,
  gameOver: 'Игра Окончена!',
  tryAgainBtn: 'Попробовать ещё раз!',
  galleryBtn: 'Галерея',
  gameBtn: 'Викторина',
  startGameBtn: 'Начать Игру',
};
let enLang = {
  score: `Score:
  <span class="score">0</span>`,
  stage0: 'Warm up',
  stage1: 'Passerines',
  stage2: 'Forest birds',
  stage3: 'Songbirds',
  stage4: 'Predator birds',
  stage5: 'Sea birds',
  description: `Listen to the player.<br>Select a bird from the list`,
  nextBtn: 'Next Level',
  greet: 'Congratulations!',
  message1: `You completed the quiz and scored `,
  message2: ` out of 30 possible points`,
  gameOver: 'Game Over!',
  tryAgainBtn: 'Try again!',
  galleryBtn: 'Gallery',
  gameBtn: 'Quiz',
  startGameBtn: 'Start Game',
};
let currentLang = ruLang;

function getLocalStorage() {
  if (localStorage.getItem('language')) {
    if (localStorage.getItem('language') === 'EN') {
      language = localStorage.getItem('language');
      changeLang(language);
    }};
};

function setLangElements() {
  const scoreText = document.querySelector(".score-text");
  const pageItems = document.querySelectorAll(".page-item");
  const maxScoreText  = document.querySelector(".max-score-text");
  const gameOverGreet  = document.querySelector(".game-over-title");
  const gameOverScore = document.querySelector(".game-score-text");
  scoreText.innerHTML = currentLang.score;
  const scoreHtml = document.querySelector(".score");
  scoreHtml.innerHTML = score;
  pageItems.forEach((e, i) => e.innerHTML = currentLang[`stage${i}`]);
  nextBnt.innerHTML = currentLang.nextBtn;
  gameOverGreet.innerHTML = currentLang.greet;
  gameOverScore.innerHTML = currentLang.message1 + score + currentLang.message2;
  maxScoreText.innerHTML = currentLang.gameOver;
  tryAgainBtn.innerHTML = currentLang.tryAgainBtn;
  galleryBtn.innerHTML = currentLang.galleryBtn;
  gameBtn.innerHTML = currentLang.gameBtn;
  startGameBtn.innerHTML = currentLang.startGameBtn;
}

function changeLang(lang) {
  language = lang;
  localStorage.setItem('language', lang);
  if (lang === 'EN') {
    currentData = birdsDataEn;
    currentLang = enLang;
  } else {
    currentData = birdsData;
    currentLang = ruLang;
  };
  setLangElements();
  setNewBirds();
  if (galleryIsActive) {
    hideGalleryPage();
    showGalleryPage();
  }
}

ruLangBtn.addEventListener('click', () => changeLang('RU'));
enLangBtn.addEventListener('click', () => changeLang('EN'));
window.addEventListener('load', getLocalStorage);

// GALLERY

function makeGallery(bird) {
  const gallery = document.querySelector(".gallery");
  const description = document.createElement('div');
  description.classList.add("description-div");
  const birdContainer = document.createElement('div');
  birdContainer.classList.add("selected-bird");
  birdContainer.classList.add("show");
  const imgContainer = document.createElement('div');
  imgContainer.classList.add("selected-img-container");
  const birdImg = document.createElement('img');
  birdImg.classList.add("selected-bird-img");
  birdImg.src = bird.image;
  birdImg.alt = 'bird';
  imgContainer.append(birdImg);
  birdContainer.append(imgContainer);
  const birdNamePlayer = document.createElement('div');
  birdNamePlayer.classList.add("selected-bird-name-player");
  const birdName = document.createElement('h4');
  birdName.classList.add("selected-bird-name");
  birdName.innerHTML = bird.name;
  birdNamePlayer.append(birdName);
  const birdSpecies = document.createElement('h5');
  birdSpecies.classList.add("selected-bird-species");
  birdSpecies.innerHTML = bird.species;
  birdNamePlayer.append(birdSpecies);
  const player = document.createElement('div');
  player.classList.add("selected-player");
  const htmlPlayer = document.createElement('audio');
  htmlPlayer.controls = true;
  htmlPlayer.src = bird.audio;
  player.append(htmlPlayer);
  birdNamePlayer.append(player);
  birdContainer.append(birdNamePlayer);
  description.append(birdContainer);
  const descriptionText = document.createElement('p');
  descriptionText.classList.add("description-text");
  descriptionText.innerHTML = bird.description;
  description.append(descriptionText);
  gallery.append(description);
};

const logoBtn = document.querySelector(".logo");
const gameBtn = document.querySelector(".game-btn");
const galleryBtn = document.querySelector(".gallery-btn");
const startGameBtn = document.querySelector(".start-game-btn");
let galleryIsActive = false;

logoBtn.addEventListener('click', () => {
  hideGamePage();
  hideGalleryPage();
  showStartPage();
});

gameBtn.addEventListener('click', () => {
  hideStartPage();
  hideGalleryPage();
  showGamePage();
});

galleryBtn.addEventListener('click', () => {
  hideStartPage();
  hideGamePage();
  showGalleryPage();
});

startGameBtn.addEventListener('click', () => {
  hideStartPage();
  hideGalleryPage();
  showGamePage();
});

function showStartPage() {
  const startPage = document.querySelector(".start-page");
  startPage.classList.remove("hide");
};

function hideStartPage() {
  const startPage = document.querySelector(".start-page");
  startPage.classList.add("hide");
};

function showGamePage() {
  const scoreText = document.querySelector(".score-text");
  const nav = document.querySelector(".nav");
  const birdContainer = document.querySelector(".random-bird");
  const birdAnswers = document.querySelector(".answers-bird");
  const gameOverContainer = document.querySelector(".game-over");
  gameBtn.classList.add("active");
  scoreText.classList.remove("hide");
  nav.classList.remove("hide");
  if (isGameEnded) {
    gameOverContainer.classList.add("show");
  } else {
    birdContainer.classList.remove("hide");
    birdAnswers.classList.remove("hide");
    nextBnt.classList.remove("hide");
  };
};

function hideGamePage() {
  const scoreText = document.querySelector(".score-text");
  const nav = document.querySelector(".nav");
  const birdContainer = document.querySelector(".random-bird");
  const birdAnswers = document.querySelector(".answers-bird");
  const gameOverContainer = document.querySelector(".game-over");
  gameBtn.classList.remove("active");
  scoreText.classList.add("hide");
  nav.classList.add("hide");
  if (isGameEnded) {
    gameOverContainer.classList.remove("show");
  } else {
    birdContainer.classList.add("hide");
    birdAnswers.classList.add("hide");
    nextBnt.classList.add("hide");
  };
  stopAudio();
  selectedStopAudio();
}

function showGalleryPage() {
  galleryIsActive = true;
  galleryBtn.classList.add("active");
  currentData.forEach(stage => 
    stage.forEach(bird => makeGallery(bird)));
};

function hideGalleryPage() {
  galleryIsActive = false;
  const gallery = document.querySelector(".gallery");
  galleryBtn.classList.remove("active");
  gallery.innerHTML = '';
};
