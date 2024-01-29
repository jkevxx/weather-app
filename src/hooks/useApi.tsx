import { useState } from 'react';
import { UserInterface } from '../interfaces/UserInterface';
import {
  DaysInterface,
  WeatherApiDataInterface,
  WeatherForm,
} from '../interfaces/WeatherInterface';
import {
  getCurrentDate,
  getDateDashFormat,
  getDay5,
  getDayMonthYearFormat,
} from '../utils/getDate';
import { IconsDescription, weatherTranslations } from '../utils/weatherInfo';

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchData = async ({ name, email, city }: WeatherForm) => {
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
        setError(true);
        throw new Error('Failed to fetch data');
      } else {
        setError(false);
        setSuccess(true);
      }

      const result = await response.json();

      const { resolvedAddress, latitude, longitude, currentConditions, days } =
        result as WeatherApiDataInterface;

      const { datetimeEpoch, temp, humidity, windspeed, conditions } =
        currentConditions;

      const dayProperties = days.map((day: DaysInterface) => {
        return {
          datetimeEpoch: day.datetimeEpoch,
          datetime: getDayMonthYearFormat(day.datetime),
          temp: day.temp,
          humidity: day.humidity,
          windspeed: day.windspeed,
          conditions: getWeatherTranslation(day.conditions),
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
        conditions: getWeatherTranslation(conditions),
        icon: getIconId(conditions),
        temp,
        humidity,
        windspeed,
        days: dayProperties,
      };

      return weatherInfo;
    } catch (err) {
      console.log(err);
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

  const getWeatherTranslation = (keyword: string) => {
    const matchingTranslation = weatherTranslations.find((translationObj) =>
      translationObj.keywords.some(
        (kw) => kw.toLowerCase() === keyword.toLowerCase()
      )
    );

    return matchingTranslation?.translation || keyword;
  };

  return { isLoading, success, error, setError, fetchData };
};

export default useApi;
