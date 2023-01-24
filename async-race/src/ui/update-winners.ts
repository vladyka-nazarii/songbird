import { getWinners } from '../api/winners';
import { IWinnerCar, Limit } from '../interface';
import { renderWinners } from '../ui/render-winners';
import { store } from '../utils/store';

export const updateWinners = async () => {
  const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

  const { items: winners } = await getWinners(store.carsPage, Limit.Winners);

  store.winnersCars = winners.map((winner) => {
    const winnerCar: IWinnerCar = {
      id: winner.id,
      name: store.allCars.find((car) => car.id === winner.id)?.name,
      color: store.allCars.find((car) => car.id === winner.id)?.color,
      wins: winner.wins,
      time: winner.time,
    };
    return winnerCar;
  });

  store.winnersCount = (await getWinners(store.carsPage, Limit.Winners)).count;

  winnersContainer.innerHTML = renderWinners();
};
