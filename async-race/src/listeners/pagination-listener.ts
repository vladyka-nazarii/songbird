import { View } from '../interface';
import { store } from '../utils/store';
import { updateGarage } from '../ui/update-garage';
import { updateWinners } from '../ui/update-winners';

export const addPaginationListener = () => {
  const pagination = document.querySelector('.pagination') as HTMLDivElement;
  pagination.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement;
    if (store.view === View.Garage) {
      if (target.id === 'prev') store.carsPage -= 1;
      else store.carsPage += 1;
      await updateGarage();
    } else {
      if (target.id === 'prev') store.winnersPage -= 1;
      else store.winnersPage += 1;
      await updateWinners();
    }
  });
};
