export type CarClass = 'A' | 'B' | 'C';

export interface Car {
  brand: string;
  model: string;
  class: CarClass;
}