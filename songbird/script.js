import birdsData from './src/birds.js';
import birdsDataEn from './src/birds-en.js';

const audio = new Audio();
const sounds = new Audio();
let currentData = birdsData;
let stage = 0;
let birdToGuess;
let guess = false;
const atempts = [];
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
const volumeSlider = document.querySelector(".volume");
const volumeIcon = document.querySelector(".volume-svg");
let isPlaying = false;

//play pause
function play() {
  const play = document.querySelector(".play-svg");
  const pause = document.querySelector(".pause-svg");
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
  const play = document.querySelector(".play-svg");
  const pause = document.querySelector(".pause-svg");
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
  sounds.volume = newVolume;
  volumeSlider.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audio.volume * 100}%, rgb(115, 115, 115) ${audio.currentTime / audio.duration * 100}%, rgb(115, 115, 115) 100%);`;
  if (audio.muted) {audio.muted = !audio.muted};
  if (audio.volume === 0) {
    audio.muted = true;
    sounds.muted = true;
    audio.volume = 1;
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
    sounds.muted = true;
    fullVolume.classList.add("hide");
    halfVolume.classList.add("hide");
    muteVolume.classList.remove("hide");
    volumeSlider.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);`;
    volumeSlider.value = 0;
  } else if (audio.muted || audio.volume === 0) {
    audio.muted = false;
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

// GUESS BIRD

const birdList = document.querySelectorAll(".answer-item");
birdList.forEach((e, i) => {
  e.addEventListener('click', () => checkGuess(i));
});

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
  selectedBirdImg.src = currentData[stage][id].image;
  selectedBirdName.innerHTML = currentData[stage][id].name;
  selectedBirdSpecies.innerHTML = currentData[stage][id].species;
  selectedBirdDescription.innerHTML = currentData[stage][id].description;
  selectedBird.classList.add("show");
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
};