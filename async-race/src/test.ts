const img = require('./assets/cart.svg');

export function hello() {
  const imgElement = document.createElement('img');
  imgElement.src = img;
  imgElement.alt = 'cart';
  document.body.appendChild(imgElement);
}
