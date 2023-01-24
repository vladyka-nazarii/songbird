import { Generate } from '../interface';
import { generateNewCars } from '../utils/generate-cars';
import { updateGarage } from '../utils/update-garage';

export const addGenerateListener = () => {
  const generateButton = document.querySelector('#generate') as HTMLButtonElement;
  generateButton.addEventListener('click', async () => {
    generateNewCars(Generate.Number);
    await updateGarage();
  });
};
