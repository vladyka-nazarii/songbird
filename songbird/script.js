import birdsData from './src/birds.js';
import birdsDataEn from './src/birds-en.js';

const audio = new Audio();
let currentData = birdsData;
let stage = 0;
let isPlaying = false;
let birdToGuess;

function getRandomBird() {
  const duration = document.querySelector(".end");
  birdToGuess = Math.round(Math.random() * 5);
  console.log(birdToGuess);
  audio.src = currentData[stage][birdToGuess].audio;
  console.log(audio.src);
  audio.addEventListener("loadedmetadata", () => {
    duration.innerHTML = getTimeCodeFromNum(audio.duration);
  });
};

getRandomBird();

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

// check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = document.querySelector(".progress");
  const start = document.querySelector(".start");
  progressBar.style = `background: linear-gradient(to right, rgb(0, 188, 140) ${audio.currentTime / audio.duration * 100}%, rgb(61, 133, 140) ${audio.currentTime / audio.duration * 100}%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);`
  progressBar.value = audio.currentTime / audio.duration * 1000;
  start.innerHTML = getTimeCodeFromNum(
    audio.currentTime
  );
}, 100);

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

const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener('click', play)
