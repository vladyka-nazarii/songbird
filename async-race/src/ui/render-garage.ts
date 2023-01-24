import { ICar } from '../interface';
import { store } from '../utils/store';
import { renderTrack } from './render-track';

export const renderGarage = (): string => `
  <h1>Garage (${store.carsCount})</h1>
  <h2>Page #${store.carsPage}</h2>
  <ul class="garage">
    ${store.cars
      .map((car: ICar) => `<li class="track">${renderTrack(car.id, car.name, car.color, false)}</li>`)
      .join('')}
  </ul>
  `;
