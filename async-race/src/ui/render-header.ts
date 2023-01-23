export const renderHeader = (): string => `
  <div class="menu">
    <button class="button menu" id="garage-menu">To Garage</button>
    <button class="button menu" id="winners-menu">To Winners</button>
  </div>
  <div class="garage-view">
    <div>
      <form class="form" id="create">
        <input type="text" name="name" id="create-name">
        <input type="color" name="color" id="create-color" value="#ffffff">
        <button class="button" id="create-submit" type="submit">Create</button>
      </form>
      <form class="form" id="update">
        <input type="text" name="name" id="update-name" disabled>
        <input type="color" name="color" id="update-color" value="#ffffff" disabled>
        <button class="button" id="update-submit" type="submit" disabled>Update</button>
      </form>
    </div>
    <div class="race-control">
      <button class="button" id="race">Race</button>
      <button class="button" id="reset">Reset</button>
      <button class="button" id="generate">Generate</button>
    </div>
  </div>
  `;
