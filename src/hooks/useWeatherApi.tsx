import { useEffect } from 'react';
import { UserInterface } from '../interfaces/UserInterface';
import {
  DaysInterface,
  WeatherApiDataInterface,
  WeatherForm,
} from '../interfaces/WeatherInterface';
import { useGetWeatherQuery } from '../redux/api/apiSlice';
import { getCurrentDate, getDateDashFormat, getDay5 } from '../utils/getDate';
import { IconsDescription } from '../utils/weatherIcons';
import useUserActions from './useUserActions';

const useWeatherApi = ({ id, name, email, city }: WeatherForm) => {
  const { addUser, updateUser } = useUserActions();

  const { data, isLoading, error } = useGetWeatherQuery(
    {
      city,
      initialDate: getCurrentDate(),
      finalDate: getDay5(),
    },
    { skip: !city }
  );

  const fetchData = async () => {
    try {
      if (!city || isLoading || error) {
        return;
      }
      if (data && !isLoading) {
        const {
          resolvedAddress,
          latitude,
          longitude,
          currentConditions,
          days,
        } = data as WeatherApiDataInterface;

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
          console.log(id, name, city);
          updateUser({ ...weatherInfo, id });
        } else {
          addUser(weatherInfo);
        }
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
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
  }, [city, id, name, email, isLoading, error, data]);

  return { isLoading, fetchData };
};

export default useWeatherApi;
