import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weather.visualcrossing.com',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({
        city,
        initialDate,
        finalDate,
      }: {
        city: string;
        initialDate: string;
        finalDate: string;
      }) => ({
        url: `/VisualCrossingWebServices/rest/services/timeline/${city}/${initialDate}/${finalDate}?unitGroup=metric&include=events%2Chours%2Cdays%2Ccurrent&key=FEHRD4VQ2RBHX7JSFGZ9PJCNG&contentType=json`,
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
