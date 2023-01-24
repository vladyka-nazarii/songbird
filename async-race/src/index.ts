import { renderPage } from './ui/render-page';
import { addListeners } from './listeners/all-listeners';
import { CountType, Limit, PageType } from './interface';

import './styles.scss';
import { updatePagintion } from './ui/update-pagination';

renderPage();
updatePagintion(PageType.CarsPage, CountType.CarsCount, Limit.Cars);
addListeners();
