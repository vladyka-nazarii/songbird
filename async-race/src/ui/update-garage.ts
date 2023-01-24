import { getCars } from '../api/cars';
import { CountType, Limit, PageType } from '../interface';
import { renderGarage } from './render-garage';
import { store } from '../utils/store';
import { updatePagintion } from './update-pagination';

export const updateGarage = async () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;

  store.cars = (await getCars(store.carsPage, Limit.Cars)).items;
  store.carsCount = (await getCars(store.carsPage, Limit.Cars)).count;

  if (store.carsCount) {
    if (Math.ceil(+store.carsCount / Limit.Cars) < store.carsPage) {
      store.carsPage -= 1;
      store.cars = (await getCars(store.carsPage, Limit.Cars)).items;
      store.carsCount = (await getCars(store.carsPage, Limit.Cars)).count;
    }
  }

  garageContainer.innerHTML = renderGarage();
  updatePagintion(PageType.CarsPage, CountType.CarsCount, Limit.Cars);
};
