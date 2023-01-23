import { ICar, INewCar, IResponse } from '../interface';
import { garage } from './base';

export const getCars = async (page: number, limit = 7): Promise<IResponse<ICar>> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<ICar> => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: INewCar): Promise<ICar> =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCar = async (id: number): Promise<Record<string, never>> =>
  (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, body: INewCar): Promise<ICar> =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
