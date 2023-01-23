import { renderGarage } from './render-garage';
import { renderGarageView } from './render-garage-view';
import { renderHeader } from './render-header';
import { renderPagination } from './render-pagination';

export const renderPage = (): string => `
  ${renderHeader()}
  ${renderGarageView()}
  ${renderGarage()}
  ${renderPagination()}
  `;
