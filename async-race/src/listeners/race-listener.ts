import { startEngine } from '../api/engine';
import { animatePosition, findDistance } from '../utils/animation';
import { store } from '../utils/store';

export const addRaceListener = () => {
  const raceButton = document.querySelector('#race') as HTMLButtonElement;
  raceButton.addEventListener('click', async () => {
    const resetButton = document.querySelector('#reset') as HTMLButtonElement;
    const startButtons = document.querySelectorAll('.start-engine-button') as NodeListOf<HTMLButtonElement>;
    const stopButtons = document.querySelectorAll('.stop-engine-button') as NodeListOf<HTMLButtonElement>;
    raceButton.disabled = true;
    store.cars.forEach(async (car) => {
      store.animationReset = store.animationReset.filter((animation) => animation !== car.id);
      const { velocity, distance } = await startEngine(car.id);
      animatePosition(car.id, findDistance(), distance / velocity);
    });
    resetButton.disabled = false;
    startButtons.forEach((button) => (button.disabled = true));
    stopButtons.forEach((button) => (button.disabled = false));
  });
};
