import { getWinners } from '../api/winners';
import { CountType, Limit, PageType } from '../interface';
import { renderWinners } from '../ui/render-winners';
import { store } from './store';
import { updatePagintion } from './update-pagination';

export const updateWinners = async () => {
  const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

  store.winnersCars = (await getWinners(store.carsPage)).items;
  store.winnersCount = (await getWinners(store.carsPage)).count;

  winnersContainer.innerHTML = renderWinners();
  updatePagintion(PageType.WinnersPage, CountType.WinnersCount, Limit.Winners);
};
