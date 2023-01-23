import store from '../store';
import { renderTrack } from './render-track';

export const renderGarage = (): string => `
<div class="garage-container">
  <h1>Garage (${store.carsCount})</h1>
  <h2>Page #1</h2>
  <ul class="garage">
    <li class="track">${renderTrack(15, 'tesla', 'black', false)}</li>
    <li class="track">${renderTrack(15, 'tesla', 'red', false)}</li>
    <li class="track">${renderTrack(15, 'tesla', 'black', false)}</li>
    <li class="track">${renderTrack(15, 'tesla', 'red', false)}</li>
    <li class="track">${renderTrack(15, 'tesla', 'black', false)}</li>
    <li class="track">${renderTrack(15, 'tesla', 'purple', false)}</li>
    <li class="track">${renderTrack(15, 'tesla', 'black', false)}</li>
  </ul>
</div>
  `;
