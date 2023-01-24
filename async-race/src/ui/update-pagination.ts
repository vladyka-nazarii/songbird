import { CountType, Limit, Page, PageType } from '../interface';
import { store } from '../utils/store';

export const updatePagintion = (page: PageType, count: CountType, limit: Limit) => {
  const prevButton = document.querySelector('#prev') as HTMLButtonElement;
  const nextButton = document.querySelector('#next') as HTMLButtonElement;
  const countOfElements = store[count];

  if (store[page] !== Page.First) prevButton.disabled = false;
  else prevButton.disabled = true;
  if (countOfElements) {
    if (store[page] * limit < +countOfElements) nextButton.disabled = false;
    else nextButton.disabled = true;
  }
};
