import { getCars } from '../api/cars';
import { getWinners } from '../api/winners';
import { FIRST_PAGE, Limit, View } from '../enum';
import { IStore } from '../interface';

const { items: allCars } = await getCars();
const { items: cars, count: carsCount } = await getCars(FIRST_PAGE, Limit.Cars);
const { items: winners, count: winnersCount } = await getWinners(FIRST_PAGE, Limit.Winners);

export const store: IStore = {
  allCars,
  carsPage: FIRST_PAGE,
  cars,
  carsCount,
  winnersPage: FIRST_PAGE,
  winners,
  winnersCount,
  view: View.Garage,
  sortBy: null,
  sortOrder: null,
  selectedID: null,
  animationStop: [],
  animationReset: [],
  winner: null,
};
