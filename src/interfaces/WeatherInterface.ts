interface ConditionsInterface {
  datetimeEpoch: string;
  conditions: string;
  icon: string;
  temp: number;
  humidity: number;
  windspeed: number;
}

export interface WeatherApiDataInterface {
  resolvedAddress: string;
  latitude: number;
  longitude: number;
  currentConditions: ConditionsInterface;
  days: DaysInterface[];
}

export interface WeatherForm {
  id?: string;
  city: string;
  name: string;
  email: string;
}

export interface DaysInterface extends ConditionsInterface {
  datetime: string;
}
