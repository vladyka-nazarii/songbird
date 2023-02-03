import { Path } from '../enum';
import { IResponse, IWinner } from '../interface';
import { getCar } from './cars';

const NOT_FOUND = 404;

const getSortOrder = (sort?: string | null, order?: string | null): string => {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
};

const getPageLimit = (page?: number | null, limit?: number | null): string => {
  if (page && limit) return `?_page=${page}&_limit=${limit}`;
  return '';
};

export const getWinners = async (
  page?: number | null,
  limit?: number | null,
  sort?: string | null,
  order?: string | null,
): Promise<IResponse<IWinner>> => {
  const response = await fetch(`${Path.Winners}${getPageLimit(page, limit)}${getSortOrder(sort, order)}`);
  const items = await response.json();

  return {
    items: await Promise.all(items.map(async (winner: IWinner) => ({ ...winner, car: await getCar(winner.id) }))),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getWinner = async (id: number): Promise<IWinner> => (await fetch(`${Path.Winners}/${id}`)).json();

export const getWinnerStatus = async (id: number) => (await fetch(`${Path.Winners}/${id}`)).status;

export const createWinner = async (body: IWinner) => {
  (
    await fetch(Path.Winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const updateWinner = async (id: number, body: IWinner) => {
  (
    await fetch(`${Path.Winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const deleteWinner = async (id: number) => {
  (await fetch(`${Path.Winners}/${id}`, { method: 'DELETE' })).json();
};

export const saveWinner = async (id: number, time: number) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === NOT_FOUND) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};
