// const toGarageButton = document.body.querySelector('#garage-menu') as HTMLButtonElement;
// const toWinnersButton = document.body.querySelector('#winners-menu') as HTMLButtonElement;
// const createSubmitButton = document.body.querySelector('#create-submit') as HTMLButtonElement;
// const updateSubmitButton = document.body.querySelector('#update-submit') as HTMLButtonElement;
// const raceButton = document.body.querySelector('#race') as HTMLButtonElement;
// const resetButton = document.body.querySelector('#reset') as HTMLButtonElement;
// const generateButton = document.body.querySelector('#generate') as HTMLButtonElement;
// const prevButton = document.body.querySelector('#prev') as HTMLButtonElement;

// import { getCars } from '../api/cars';
// import { renderPage } from '../ui/render-page';
// import { findElement } from './find-element';

// const nextButton = document.body.querySelector('#next') as HTMLButtonElement;

const addGarageListener = () => {
  const toGarageButton = document.querySelector('#garage-menu') as HTMLButtonElement;
  toGarageButton.addEventListener('click', () => {
    const garageView = document.querySelector('.garage-view') as HTMLDivElement;
    const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

    garageView.classList.remove('hide');
    garageContainer.classList.remove('hide');
    winnersContainer.classList.add('hide');
  });
};

const addWinnersListener = () => {
  const toWinnersButton = document.querySelector('#winners-menu') as HTMLButtonElement;
  toWinnersButton.addEventListener('click', () => {
    const garageView = document.querySelector('.garage-view') as HTMLDivElement;
    const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

    garageView.classList.add('hide');
    garageContainer.classList.add('hide');
    winnersContainer.classList.remove('hide');
  });
};

export const addListeners = () => {
  addGarageListener();
  addWinnersListener();
};
