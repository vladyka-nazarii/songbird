const toGarageButton = document.body.querySelector('#garage-menu') as HTMLButtonElement;
const toWinnersButton = document.body.querySelector('#winners-menu') as HTMLButtonElement;
const createSubmitButton = document.body.querySelector('#create-submit') as HTMLButtonElement;
const updateSubmitButton = document.body.querySelector('#update-submit') as HTMLButtonElement;
const raceButton = document.body.querySelector('#race') as HTMLButtonElement;
const resetButton = document.body.querySelector('#reset') as HTMLButtonElement;
const generateButton = document.body.querySelector('#generate') as HTMLButtonElement;
const prevButton = document.body.querySelector('#prev') as HTMLButtonElement;
const nextButton = document.body.querySelector('#next') as HTMLButtonElement;
const garage = document.body.querySelector('garage') as HTMLButtonElement;

export const addCarControlsListaner = () =>
  garage.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('select-button')) console.log('select-button');
  });
