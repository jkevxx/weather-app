import { useEffect } from 'react';
import { UserInterface } from '../interfaces/UserInterface';
import {
  DaysInterface,
  WeatherApiDataInterface,
  WeatherForm,
} from '../interfaces/WeatherInterface';
import { useGetWeatherQuery } from '../redux/api/apiSlice';
import { getCurrentDate, getDay5 } from '../utils/getDate';
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
      // console.log(id, email, city);

      if (data && !isLoading) {
        const { address, latitude, longitude, currentConditions, days } =
          data as WeatherApiDataInterface;

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

  useEffect(() => {
    fetchData();
  }, [city, id, name, email, isLoading, error, data]);

  return { isLoading, fetchData };
};

export default useWeatherApi;
