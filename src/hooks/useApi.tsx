import { useEffect, useState } from 'react';

// const apiUrl = 'FEHRD4VQ2RBHX7JSFGZ9PJCNG';

const useApi = (city: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!city) {
      return;
    }

    try {
      // const response = await fetch(
      //   `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2023-12-28/2024-01-02?unitGroup=us&include=events%2Chours%2Cdays%2Ccurrent&key=${apiUrl}&contentType=json`
      // );
      // if (!response.ok) {
      //   throw new Error('Failed to fetch data');
      // }
      // const result = await response.json();
      // const { address, latitude, longitude, currentConditions, days } = result;
      // const { datetimeEpoch, temp, humidity, windspeed } = currentConditions;

      // const fullDate = new Date(datetimeEpoch * 1000);

      // const currentWeatherConditions = {
      //   temperature: temp,
      //   date: `${fullDate.getDate()}-${
      //     fullDate.getMonth() + 1
      //   }-${fullDate.getFullYear()}`,
      //   humidity,
      //   wind_speed: windspeed,
      // };

      // const weatherData = {
      //   address,
      //   latitude,
      //   longitude,
      //   currentWeatherConditions,
      //   days,
      // };
      // console.log(weatherData);
      // setData(weatherData);
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c4a780a90f86441e915182657232712&q=${city}&aqi=no`
      );
      if (!response) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      // console.log(city);
      console.log(result);
      setData(result);
    } catch (err) {
      console.log(err || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return { data, loading };
};

export default useApi;
