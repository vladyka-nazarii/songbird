import { getCars } from '../api/cars';
import { getWinners } from '../api/winners';
import { IStore, Limit, Page, View } from '../interface';

const { items: allCars } = await getCars();
const { items: cars, count: carsCount } = await getCars(Page.First, Limit.Cars);
const { items: winners, count: winnersCount } = await getWinners(Page.First, Limit.Winners);

export const store: IStore = {
  allCars,
  carsPage: Page.First,
  cars,
  carsCount,
  winnersPage: Page.First,
  winners,
  winnersCount,
  view: View.Garage,
  sortBy: undefined,
  sortOrder: undefined,
  selectedID: undefined,
  animationStop: [],
  animationReset: [],
  time: [],
  winner: undefined,
};
