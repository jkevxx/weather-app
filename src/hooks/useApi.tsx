import { useEffect, useState } from 'react';
import { UserInterface } from '../interfaces/UserInterface';
import {
  DaysInterface,
  WeatherApiDataInterface,
  WeatherForm,
} from '../interfaces/WeatherInterface';
import { getCurrentDate, getDay5 } from '../utils/getDate';
import useUserActions from './useUserActions';

const apiUrl = 'FEHRD4VQ2RBHX7JSFGZ9PJCNG';

const useApi = ({ id, name, email, city }: WeatherForm) => {
  const { addUser, updateUser } = useUserActions();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!city) {
      return;
    }

    // console.log(id, name, email, city);

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${getCurrentDate()}/${getDay5()}?unitGroup=us&include=events%2Chours%2Cdays%2Ccurrent&key=${apiUrl}&contentType=json`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      const { address, latitude, longitude, currentConditions, days } =
        result as WeatherApiDataInterface;

      const { datetimeEpoch, temp, humidity, windspeed } = currentConditions;

      const dayProperties = days.map((day: DaysInterface) => {
        return {
          datetimeEpoch: day.datetimeEpoch,
          datetime: day.datetime,
          temp: day.temp,
          humidity: day.humidity,
          windspeed: day.windspeed,
          conditions: day.conditions,
        };
      });

      const fullDate = new Date(parseFloat(datetimeEpoch) * 1000);

      const weatherInfo: UserInterface = {
        name,
        email,
        city: address,
        lat: latitude,
        long: longitude,
        date: `${fullDate.getDate()}-${
          fullDate.getMonth() + 1
        }-${fullDate.getFullYear()}`,
        temp,
        humidity,
        windspeed,
        days: dayProperties,
      };

      if (id) {
        // console.log(id, name, city);
        updateUser({ ...weatherInfo, id });
      } else {
        addUser(weatherInfo);
      }
    } catch (err) {
      console.log(err || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city, id]);

  return { isLoading, fetchData };
};

export default useApi;
