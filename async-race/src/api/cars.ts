import { Path } from '../enum';
import { ICar, INewCar, IResponse } from '../interface';

export const getCars = async (page?: number, limit?: number): Promise<IResponse<ICar>> => {
  let response: Response;
  if (page && limit) {
    response = await fetch(`${Path.Garage}?_page=${page}&_limit=${limit}`);
  } else {
    response = await fetch(Path.Garage);
  }

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<ICar> => (await fetch(`${Path.Garage}/${id}`)).json();

export const createCar = async (body: INewCar) => {
  (
    await fetch(Path.Garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const deleteCar = async (id: number) => {
  (await fetch(`${Path.Garage}/${id}`, { method: 'DELETE' })).json();
};

export const updateCar = async (id: number, body: INewCar) => {
  (
    await fetch(`${Path.Garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};
