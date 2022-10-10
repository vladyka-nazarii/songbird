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
// AMOUNT
const radios = document.querySelectorAll('.amount-radio');
const amount = document.querySelector('.amount-input');
radios.forEach(e => e.addEventListener("input", () => amount.value = e.value));
amount.addEventListener("input", () => {
  if (amount.value > 9999) amount.value = +amount.value.toString().slice(0,4);
  radios.forEach(e => {if (e.value == amount.value) e.checked = true});
  radios.forEach(e => {if (e.checked == true && e.value != amount.value) e.checked = false});
  console.log(amount.value)
});
