import { drive, startEngine } from '../api/engine';
import { animatePosition, findDistance } from '../utils/animation';
import { setWinner } from '../utils/set-winner';
import { showModal } from '../utils/show-modal';
import { store } from '../utils/store';

export const addRaceListener = () => {
  const raceButton = document.querySelector('#race') as HTMLButtonElement;
  raceButton.addEventListener('click', async () => {
    const resetButton = document.querySelector('#reset') as HTMLButtonElement;
    const startButtons = document.querySelectorAll('.start-engine-button') as NodeListOf<HTMLButtonElement>;
    const stopButtons = document.querySelectorAll('.stop-engine-button') as NodeListOf<HTMLButtonElement>;
    raceButton.disabled = true;
    store.animationStop = [];
    store.animationReset = [];
    store.winner = undefined;
    store.cars.forEach(async (car) => {
      const { velocity, distance } = await startEngine(car.id);
      animatePosition(car.id, findDistance(), distance / velocity);
      const error = await drive(car.id);
      if (error.success) {
        if (!store.winner) {
          store.winner = car.id;
          setWinner(car.id);
          showModal(car.id);
        }
      } else if (!error.success) {
        store.animationStop.push(car.id);
      }
    });
    resetButton.disabled = false;
    startButtons.forEach((button) => (button.disabled = true));
    stopButtons.forEach((button) => (button.disabled = false));
  });
};
