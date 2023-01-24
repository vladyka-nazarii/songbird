import { startEngine } from '../api/engine';
import { animatePosition, findDistance } from '../utils/animation';
import { store } from '../utils/store';

export const addRaceListener = () => {
  const raceButton = document.querySelector('#race') as HTMLButtonElement;
  raceButton.addEventListener('click', async () => {
    const resetButton = document.querySelector('#reset') as HTMLButtonElement;
    raceButton.disabled = true;
    store.cars.forEach(async (car) => {
      const { velocity, distance } = await startEngine(car.id);
      animatePosition(car.id, findDistance(), distance / velocity);
    });

    resetButton.disabled = false;
  });
};
