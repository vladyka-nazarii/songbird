import birdsData from './src/birds.js';
import birdsDataEn from './src/birds-en.js';

const audio = new Audio();
let currentData = birdsData;
let stage = 0;
let isPlaying = false;
let birdToGuess;

function getRandomBird() {
  birdToGuess = Math.round(Math.random() * 5);
  console.log(birdToGuess);
  audio.src = currentData[stage][birdToGuess].audio;
  console.log(audio.src);
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
}
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener('click', play)
