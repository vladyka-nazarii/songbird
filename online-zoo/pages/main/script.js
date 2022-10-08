// BURGER MENU
const openMenu = () => {
  document.querySelector('.menu').classList.add('active');                                        //open .menu
  document.querySelector('.overlay').classList.add('active');                                     //make .overlay visible
  document.body.classList.add('lock');};                                                          //lock scroll
const closeMenu = () => {
  document.querySelector('.menu').classList.remove('active');                                     //close .menu
  document.querySelector('.overlay').classList.remove('active');                                  //make .overlay unvisible
  document.body.classList.remove('lock');};                                                       //unlock scroll
document.querySelector('.burger').addEventListener("click", ()=>{openMenu()});                    //open .menu by click on .burger
document.querySelector('.burger-close').addEventListener("click", ()=>{closeMenu()});             //close .menu by click on .burger-close
document.querySelector('.nav-list').addEventListener("click", ()=>{closeMenu()});                 //close .menu by click on .nav-list
document.querySelector('.overlay').addEventListener("click", ()=>{closeMenu()});                  //close .menu by click on .overlay
document.addEventListener('keydown', (event)=>{if (event.key === 'Escape') {closeMenu()}});       //close .menu by Escape key
// SLIDER
const cardsContainers = document.querySelectorAll('.container-cards');                            //find cards container
const cards = document.querySelectorAll('.border-card');                                          //find all cards
const prevBtn = document.querySelector('.left');                                                  //find btn prev
const nextBtn = document.querySelector('.right');                                                 //find btn next
const gap = 0;
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function genContainer(count) {
  const cardsCopy = [];
  cardsContainers[count].innerHTML = "";
  cards.forEach((e, i) => cardsCopy[i] = e.cloneNode(true));
  shuffle(cardsCopy);
  cardsCopy.forEach(e => cardsContainers[count].append(e));
};
function setOffset() {
  document.querySelector(':root').style.setProperty('--offset', `${cardsContainers[1].clientWidth + 20}px`);
}
genContainer(0);
genContainer(2);
prevBtn.addEventListener('click', () => {
  cardsContainers.forEach(e => e.classList.add('prev'));
  cardsContainers[0].ontransitionend = (e) => {
    if (e.target.className === "container-cards prev") {
      cardsContainers[2].innerHTML = cardsContainers[1].innerHTML;
      cardsContainers[1].innerHTML = cardsContainers[0].innerHTML;
      genContainer(0);
      cardsContainers.forEach(e => e.classList.remove('prev'))}}
});                                                     //slide prev container by click on prev btn
nextBtn.addEventListener('click', () => {
  cardsContainers.forEach(e => e.classList.add('next'));
  cardsContainers[2].ontransitionend = (e) => {
    if (e.target.className === "container-cards next") {
      cardsContainers[0].innerHTML = cardsContainers[1].innerHTML;
      cardsContainers[1].innerHTML = cardsContainers[2].innerHTML;
      genContainer(2);
      cardsContainers.forEach(e => e.classList.remove('next'))}}
});                                                     //slide next container by click on next btn
window.addEventListener("resize", setOffset);
window.addEventListener('load', setOffset);
// TESTIMONIALS SLIDER
const reviewsContainers = document.querySelector('.testimonials');
const review = document.querySelectorAll('.border-review-div');
const carousel = document.querySelector('.carousel');
const scroller = document.querySelector('.scroll-bg');
function genReviews() {
  const reviewCopy = [];
  review.forEach(e => reviewCopy.push(e.cloneNode(true)));
  review.forEach(e => reviewCopy.push(e.cloneNode(true)));
  reviewCopy.pop();
  reviewCopy.forEach(e => reviewsContainers.append(e));
};
function chngeReviews() {
  const avatar = document.querySelectorAll('.avatar');
  const name = document.querySelectorAll('.user-name');
  avatar[4].src = "../../assets/icons/bay.jpg";
  name[4].innerHTML = "Michael Bay";
  avatar[5].src = "../../assets/icons/nolan.jpg";
  name[5].innerHTML = "Christopher Nolan";
  avatar[6].src = "../../assets/icons/toro.jpg";
  name[6].innerHTML = "Guillermo del Toro";
  avatar[7].src = "../../assets/icons/ritchie.jpg";
  name[7].innerHTML = "Guy Ritchie";
  avatar[8].src = "../../assets/icons/shyamalan.jpg";
  name[8].innerHTML = "M. Night Shyamalan";
  avatar[9].src = "../../assets/icons/eggers.jpg";
  name[9].innerHTML = "Robert Eggers";
  avatar[10].src = "../../assets/icons/tarantino.jpg";
  name[10].innerHTML = "Quentin Tarantino";
};
function setScroller() {
  carousel.scrollBy(width * (scroller.value - value), 0);
  console.log(width * (scroller.value - value));
  value = scroller.value;
};
genReviews();
chngeReviews();
let width = review[3].offsetLeft - review[2].offsetLeft;
let value = scroller.value;
scroller.addEventListener("input", setScroller);
window.addEventListener("resize", () => width = review[3].offsetLeft - review[2].offsetLeft);
console.log(review[3].offsetLeft - review[2].offsetLeft);
console.log(width);