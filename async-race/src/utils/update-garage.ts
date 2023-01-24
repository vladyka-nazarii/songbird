import { getCars } from '../api/cars';
import { renderGarage } from '../ui/render-garage';
import { store } from './store';

export const updateGarage = async () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;

  store.cars = (await getCars(store.carsPage)).items;
  store.carsCount = (await getCars(store.carsPage)).count;

  garageContainer.innerHTML = renderGarage();
};
