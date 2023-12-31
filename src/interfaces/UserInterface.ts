import { DaysInterface } from './WeatherInterface';

export type UserId = string;

export interface UserInterface {
  name: string;
  email: string;
  city: string;
  lat: number;
  long: number;
  date: string;
  conditions: string;
  icon: string;
  temp: number;
  humidity: number;
  windspeed: number;
  days: DaysInterface[];
}

export interface UserInterfaceWithId extends UserInterface {
  id: UserId;
}

export interface PropsSelectedUser {
  id: string;
  name: string;
  email: string;
  city: string;
}
