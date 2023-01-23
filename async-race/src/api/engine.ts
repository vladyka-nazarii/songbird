import { IDrive, IEngine } from '../interface';
import { engine } from './base';

export const startEngine = async (id: number): Promise<IEngine> =>
  (await fetch(`${engine}?id=${id}&status=started`)).json();

export const stopEngine = async (id: number): Promise<IEngine> =>
  (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const drive = async (id: number): Promise<IDrive> => {
  const res = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
