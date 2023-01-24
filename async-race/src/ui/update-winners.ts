import { getWinners } from '../api/winners';
import { Limit } from '../interface';
import { renderWinners } from '../ui/render-winners';
import { store } from '../utils/store';

export const updateWinners = async () => {
  const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

  store.winners = (await getWinners(store.winnersPage, Limit.Winners)).items;
  store.winnersCount = (await getWinners(store.winnersPage, Limit.Winners)).count;

  winnersContainer.innerHTML = renderWinners();
};
