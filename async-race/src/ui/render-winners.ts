import { IWinner } from '../interface';
import { findWinnerData } from '../utils/find-winer-data';
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
    <th class="sorting-button" id="wins">Wins</th>
    <th class="sorting-button" id="time">Best time (seconds)</th>
  </tr>
  ${store.winners
    .map(
      (winner: IWinner, index: number) => `
      <tr>
        <td>${index + 1}</td>
        <td>${getCarIcon(findWinnerData(winner).color)}</td>
        <td>${findWinnerData(winner).name}</td>
        <td>${winner.wins}</td>
        <td>${winner.time}</td>
      </tr>
    `,
    )
    .join('')}
  </table>
  `;
