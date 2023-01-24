import { IWinnerCar } from '../interface';
import { store } from '../utils/store';
import { getCarIcon } from './render-track-components';

export const renderWinners = (): string => `
  <h1>Winners (${store.winnersCount})</h1>
  <h2>Page #${store.winnersPage}</h2>
  <table class="winners-table">
  <tr>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
  </tr>
  ${store.winnersCars
    .map(
      (winnerCar: IWinnerCar, index: number) => `
      <tr>
        <td>${index + 1}</td>
        <td>${getCarIcon(winnerCar.color)}</td>
        <td>${winnerCar.name}</td>
        <td>${winnerCar.wins}</td>
        <td>${winnerCar.time}</td>
      </tr>
    `,
    )
    .join('')}
  </table>
  `;
