export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface INewCar {
  name: string;
  color: string;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IDrive {
  success: boolean;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnerCar {
  id: number;
  name?: string;
  color?: string;
  wins: number;
  time: number;
}

export enum Order {
  ByAsc = 'ASC',
  ByDesc = 'DESC',
}

export enum Sort {
  ById = 'id',
  ByWins = 'winners',
  ByTime = 'time',
}

export enum View {
  Garage = 'garage',
  Winners = 'winners',
}

export enum Limit {
  Cars = 7,
  Winners = 10,
}

export enum Page {
  First = 1,
}

export enum PageType {
  CarsPage = 'carsPage',
  WinnersPage = 'winnersPage',
}

export enum CountType {
  CarsCount = 'carsCount',
  WinnersCount = 'winnersCount',
}

export interface IResponse<Type> {
  items: Type[];
  count: string | null;
}

export interface IStore {
  carsPage: number;
  cars: ICar[];
  carsCount: string | null;
  winnersPage: number;
  winnersCars: IWinnerCar[];
  winnersCount: string | null;
  view: View;
  sortBy: Sort | null;
  sortOrder: Order | null;
  selectedID?: number;
}
