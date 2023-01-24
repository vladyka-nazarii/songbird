import { IWinner } from '../interface';
import { store } from './store';

export const findWinnerData = (winner: IWinner) => {
  return {
    name: store.allCars.find((car) => car.id === winner.id)?.name,
    color: store.allCars.find((car) => car.id === winner.id)?.color,
  };
};
