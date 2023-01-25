import { getCars } from '../api/cars';
import { CountType, Limit, PageType } from '../interface';
import { renderGarage } from './render-garage';
import { store } from '../utils/store';
import { updatePagintion } from './update-pagination';

export const updateGarage = async () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;

  const { items: allCars } = await getCars();
  const { items: cars, count: carsCount } = await getCars(store.carsPage, Limit.Cars);
  store.allCars = allCars;
  store.cars = cars;
  store.carsCount = carsCount;

  if (store.carsCount) {
    if (Math.ceil(+store.carsCount / Limit.Cars) < store.carsPage && store.carsPage !== 1) {
      store.carsPage -= 1;
      const { items: newAllCars } = await getCars();
      const { items: newCars, count: newCarsCount } = await getCars(store.carsPage, Limit.Cars);
      store.allCars = newAllCars;
      store.cars = newCars;
      store.carsCount = newCarsCount;
    }
  }

  garageContainer.innerHTML = renderGarage();
  updatePagintion(PageType.CarsPage, CountType.CarsCount, Limit.Cars);
};
