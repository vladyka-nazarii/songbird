import { createCar } from '../api/cars';
import { Color, INewCar } from '../interface';

const generateColor = (): string => {
  const getRandomColor = () => Math.round(Math.random() * Color.Max).toString(16);
  return `#${getRandomColor()}${getRandomColor()}${getRandomColor()}`;
};

const generateName = (brand: string[], model: string[]): string => {
  return (
    brand[Math.round(Math.random() * brand.length - 1)] + ' ' + model[Math.round(Math.random() * model.length - 1)]
  );
};

const cartBrands = [
  'Acura',
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'Buick',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Dodge',
  'Ferrari',
  'Fiat',
  'Ford',
  'Genesis',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Land Rover',
  'Lamborghini',
  'Lexus',
  'Lincoln',
  'Maserati',
  'Mazda',
  'Mercedes-Benz',
  'Nissan',
  'Porsche',
  'Rolls-Royce',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

const carModels = [
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'Q5',
  'Q7',
  'Q8',
  'Model 3',
  'Model X',
  'Model Y',
  'Model S',
  'X1',
  'X2',
  'X3',
  'X4',
  'X5',
  'X6',
  'X7',
  'M3',
  'M5',
  'M8',
  'Mustang',
  'F-150',
  'Fiesta',
  'Focus',
  'Mondeo',
  'Escape',
  'Edge',
  'Explorer',
  '911',
  'Panamera',
  'Macan',
  'Cayen',
];

const generateCars = (count: number): INewCar[] => {
  const ArrayOfCars: INewCar[] = [];
  for (let i = 0; i < count; i++) {
    ArrayOfCars.push({
      name: generateName(cartBrands, carModels),
      color: generateColor(),
    });
  }

  return ArrayOfCars;
};

export const generateNewCars = (count: number) => {
  generateCars(count).forEach(async (car) => createCar(car));
};
