import { useEffect, useState } from 'react';
import { UserInterface } from '../interfaces/UserInterface';
import {
  DaysInterface,
  WeatherApiDataInterface,
  WeatherForm,
} from '../interfaces/WeatherInterface';
import { getCurrentDate, getDateDashFormat, getDay5 } from '../utils/getDate';
import { IconsDescription } from '../utils/weatherIcons';
import useUserActions from './useUserActions';

const useApi = ({ id, name, email, city }: WeatherForm) => {
  const { addUser, updateUser } = useUserActions();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!city) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_URL
        }/${city}/${getCurrentDate()}/${getDay5()}?unitGroup=metric&include=events%2Chours%2Cdays%2Ccurrent&key=${
          import.meta.env.VITE_REACT_APP_KEY
        }&contentType=json`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      const { resolvedAddress, latitude, longitude, currentConditions, days } =
        result as WeatherApiDataInterface;

      const { datetimeEpoch, temp, humidity, windspeed, conditions } =
        currentConditions;

      const dayProperties = days.map((day: DaysInterface) => {
        return {
          datetimeEpoch: day.datetimeEpoch,
          datetime: getDateDashFormat(day.datetimeEpoch),
          temp: day.temp,
          humidity: day.humidity,
          windspeed: day.windspeed,
          conditions: day.conditions,
          icon: getIconId(day.conditions),
        };
      });

      const weatherInfo: UserInterface = {
        name,
        email,
        city: resolvedAddress,
        lat: latitude,
        long: longitude,
        date: getDateDashFormat(datetimeEpoch),
        conditions,
        icon: getIconId(conditions),
        temp,
        humidity,
        windspeed,
        days: dayProperties,
      };

      if (id) {
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

  const getIconId = (keyword: string) => {
    const matchingIcon = IconsDescription.find((iconObj) =>
      iconObj.keywords.some((kw) => kw.toLowerCase() === keyword.toLowerCase())
    );
    return matchingIcon?.icon || '';
  };

  useEffect(() => {
    fetchData();
  }, [city, id]);

  return { isLoading, fetchData };
};

export default useApi;
