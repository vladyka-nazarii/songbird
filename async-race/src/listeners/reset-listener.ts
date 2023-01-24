import { updateGarage } from '../ui/update-garage';

export const addResetListener = () => {
  const resetButton = document.querySelector('#reset') as HTMLButtonElement;
  resetButton.addEventListener('click', async () => {
    const raceButton = document.querySelector('#race') as HTMLButtonElement;
    resetButton.disabled = true;
    await updateGarage();
    raceButton.disabled = false;
  });
};
