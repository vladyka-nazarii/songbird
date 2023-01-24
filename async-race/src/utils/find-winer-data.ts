import { store } from './store';

export const findWinnerData = (id: number) => {
  const carTime = store.time.find((time) => time.id === id);
  const winnerData = {
    name: store.allCars.find((car) => car.id === id)?.name,
    color: store.allCars.find((car) => car.id === id)?.color,
    time: 0,
  };

  if (carTime) winnerData.time = Math.round(carTime?.time / 10) / 100;

  return winnerData;
};
