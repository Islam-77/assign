import { User } from './user';
import { Car } from './car';

export interface Interests {
  user: User;
  cars: Car[];
}