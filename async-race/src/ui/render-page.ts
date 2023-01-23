import { renderGarage } from './render-garage';
import { renderHeader } from './render-header';
import { renderPagination } from './render-pagination';

export const renderPage = (): string => `
  ${renderHeader()}
  ${renderGarage()}
  ${renderPagination()}
  `;
