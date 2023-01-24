import { updateGarage } from '../ui/update-garage';

export const addResetListener = () => {
  const resetButton = document.querySelector('#reset') as HTMLButtonElement;
  resetButton.addEventListener('click', async () => {
    const raceButton = document.querySelector('#race') as HTMLButtonElement;
    const startButtons = document.querySelectorAll('.start-engine-button') as NodeListOf<HTMLButtonElement>;
    const stopButtons = document.querySelectorAll('.stop-engine-button') as NodeListOf<HTMLButtonElement>;
    resetButton.disabled = true;
    await updateGarage();
    raceButton.disabled = false;
    startButtons.forEach((button) => (button.disabled = false));
    stopButtons.forEach((button) => (button.disabled = true));
  });
};
