import { useEffect, useState } from 'react';

const apiUrl = 'FEHRD4VQ2RBHX7JSFGZ9PJCNG';

interface WeatherData {
  address: string;
  latitude: number;
  longitude: number;
  currentWeatherConditions: {
    date: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
  };
  days: {
    date: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
  }[];
}

const useApi = (city: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!city) {
      return;
    }

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2023-12-28/2024-01-02?unitGroup=us&include=events%2Chours%2Cdays%2Ccurrent&key=${apiUrl}&contentType=json`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      const { address, latitude, longitude, currentConditions, days } = result;
      const { datetimeEpoch, temp, humidity, windspeed } = currentConditions;

      const fullDate = new Date(datetimeEpoch * 1000);

      const currentWeatherConditions = {
        temperature: temp,
        date: `${fullDate.getDate()}-${
          fullDate.getMonth() + 1
        }-${fullDate.getFullYear()}`,
        humidity,
        wind_speed: windspeed,
      };

      const weatherData: WeatherData = {
        address,
        latitude,
        longitude,
        currentWeatherConditions,
        days,
      };
      setWeatherData(weatherData);
      console.log(weatherData);
    } catch (err) {
      console.log(err || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return { weatherData, loading };
};

export default useApi;
