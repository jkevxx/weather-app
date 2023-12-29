interface ConditionsInterface {
  datetimeEpoch: string;
  temp: number;
  humidity: number;
  windspeed: number;
}

export interface WeatherApiDataInterface {
  address: string;
  latitude: number;
  longitude: number;
  currentConditions: ConditionsInterface;
  days: DaysInterface[];
}

export interface WeatherForm {
  name: string;
  email: string;
  city: string;
}

export interface DaysInterface extends ConditionsInterface {
  datetime: string;
  conditions: string;
}
