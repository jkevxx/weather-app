export type UserId = string;

export interface FutureWeather {
  date: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
}

export interface UserInterface {
  // id?: string;
  name: string;
  email: string;
  city: string;
  lat: number;
  long: number;
  date: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  // future_weather: FutureWeather[];
}

export interface UserInterfaceWithId extends UserInterface {
  id: UserId;
}
