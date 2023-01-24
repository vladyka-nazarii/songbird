import { deleteCar } from '../api/cars';
import { deleteWinner } from '../api/winners';
import { store } from '../utils/store';
import { updateGarage } from '../utils/update-garage';
import { updateWinners } from '../utils/update-winners';

const removeCar = async (target: HTMLElement) => {
  const id = +target.id.replace('remove-car-', '');
  await deleteCar(id);
  await deleteWinner(id);
  await updateGarage();
  await updateWinners();
};

const selectCar = async (target: HTMLElement) => {
  const nameInput = document.querySelector('#update-name') as HTMLInputElement;
  const colorInput = document.querySelector('#update-color') as HTMLInputElement;
  const submitButton = document.querySelector('#update-submit') as HTMLButtonElement;
  const id = +target.id.replace('select-car-', '');
  const currentCar = store.cars.find((car) => car.id === id);
  nameInput.disabled = false;
  nameInput.value = currentCar ? currentCar.name : '';
  colorInput.disabled = false;
  colorInput.value = currentCar ? currentCar.color : '';
  submitButton.disabled = false;
  submitButton.name = `${id}`;
};

export const addGarageListeners = () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
  garageContainer.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('remove-button')) removeCar(target);
    if (target.classList.contains('select-button')) selectCar(target);
  });
};
