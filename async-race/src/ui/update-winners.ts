import { getWinners } from '../api/winners';
import { renderWinners } from '../ui/render-winners';
import { store } from '../utils/store';

export const updateWinners = async () => {
  const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

  store.winnersCars = (await getWinners(store.carsPage)).items;
  store.winnersCount = (await getWinners(store.carsPage)).count;

  winnersContainer.innerHTML = renderWinners();
};
