import { getCars } from '../api/cars';
import { getWinners } from '../api/winners';
import { IStore, IWinnerCar, Limit, Page, View } from '../interface';

const { items: allCars } = await getCars();
const { items: cars, count: carsCount } = await getCars(Page.First, Limit.Cars);
const { items: winners, count: winnersCount } = await getWinners(Page.First, Limit.Winners);

export const store: IStore = {
  allCars,
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winnersCars: winners.map((winner) => {
    const winnerCar: IWinnerCar = {
      id: winner.id,
      name: allCars.find((car) => car.id === winner.id)?.name,
      color: allCars.find((car) => car.id === winner.id)?.color,
      wins: winner.wins,
      time: winner.time,
    };
    return winnerCar;
  }),
  winnersCount,
  view: View.Garage,
  sortBy: null,
  sortOrder: null,
  selectedID: undefined,
  animationStop: [],
  animationReset: [],
  time: [],
  winner: undefined,
};
