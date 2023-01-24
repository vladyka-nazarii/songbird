import { saveWinner } from '../api/winners';
import { updateWinners } from '../ui/update-winners';
import { store } from './store';

export const setWinner = async (id: number) => {
  const carTime = store.time.find((time) => time.id === id);
  if (carTime) {
    await saveWinner(id, Math.round(carTime.time / 10) / 100);
    updateWinners();
  }
};
