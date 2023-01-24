import { deleteCar } from '../api/cars';
import { startEngine, stopEngine } from '../api/engine';
import { deleteWinner } from '../api/winners';
import { store } from '../utils/store';
import { updateGarage } from '../ui/update-garage';
import { updateWinners } from '../ui/update-winners';
import { animatePosition, findDistance } from '../utils/animation';

const removeCar = async (target: HTMLElement) => {
  const id = +target.id.replace('remove-car-', '');
  await deleteCar(id);
  await deleteWinner(id);
  await updateWinners();
  await updateGarage();
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

const driveCar = async (target: HTMLElement) => {
  const targetButton = target as HTMLButtonElement;
  const id = +targetButton.id.replace('start-engine-car-', '');
  const stopButton = document.querySelector(`#stop-engine-car-${id}`) as HTMLButtonElement;
  targetButton.disabled = true;
  const { velocity, distance } = await startEngine(id);
  animatePosition(id, findDistance(), distance / velocity);
  stopButton.disabled = false;
};

const stopCar = async (target: HTMLElement) => {
  const targetButton = target as HTMLButtonElement;
  const id = +targetButton.id.replace('stop-engine-car-', '');
  const startButton = document.querySelector(`#start-engine-car-${id}`) as HTMLButtonElement;
  targetButton.disabled = true;
  startButton.disabled = false;
  await stopEngine(id);
  store.animationReset.push(id);
};

export const addGarageListeners = () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
  garageContainer.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('remove-button')) removeCar(target);
    if (target.classList.contains('select-button')) selectCar(target);
    if (target.classList.contains('start-engine-button')) driveCar(target);
    if (target.classList.contains('stop-engine-button')) stopCar(target);
  });
};
