import { getCars } from '../api/cars';
import { getWinners } from '../api/winners';
import { IStore, IWinnerCar, View } from '../interface';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1);

export const store: IStore = {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winnersCars: winners.map((winner) => {
    const winnerCar: IWinnerCar = {
      id: winner.id,
      name: cars.find((car) => car.id === winner.id)?.name,
      color: cars.find((car) => car.id === winner.id)?.color,
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
};
