import { getCarControls, getCarImage, getGarageControls } from './get-track-components';

export const renderTrack = (id: number, name: string, color: string, isEngineStarted: boolean): string => `
  <div class="garage-controls">
    ${getGarageControls(id, name)}
  </div>
  <div class="road">
    <div class="car-controls">
    ${getCarControls(id, isEngineStarted)}
    </div>
    ${getCarImage(color)}
  </div>
  `;
