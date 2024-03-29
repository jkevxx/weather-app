import { UserInterfaceWithId } from '../interfaces/UserInterface';

export const DEFAULT_STATE: UserInterfaceWithId[] = [
  // {
  //   id: '1-dd1fbf7f-601f-4a80-8604-e4e9a42b822f',
  //   name: 'Kevin Paez',
  //   email: 'kevin.paez1010@gmail.com',
  //   city: 'Puebla, Pue, México',
  //   lat: 19.0439,
  //   long: -98.1976,
  //   date: '1-1-2024',
  //   conditions: 'Soleado',
  //   icon: '01d',
  //   temp: 13,
  //   humidity: 47.2,
  //   windspeed: 13,
  //   days: [
  //     {
  //       datetimeEpoch: '1704088800',
  //       datetime: '01-01-2024',
  //       temp: 12,
  //       humidity: 51.6,
  //       windspeed: 15.8,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704175200',
  //       datetime: '02-01-2024',
  //       temp: 11.6,
  //       humidity: 54.7,
  //       windspeed: 23.4,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704261600',
  //       datetime: '03-01-2024',
  //       temp: 12.1,
  //       humidity: 49.3,
  //       windspeed: 21.6,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704348000',
  //       datetime: '04-01-2024',
  //       temp: 12,
  //       humidity: 39.3,
  //       windspeed: 29.9,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704434400',
  //       datetime: '05-01-2024',
  //       temp: 12.2,
  //       humidity: 41.9,
  //       windspeed: 31.3,
  //       conditions: 'Soleado',
  //       icon: '01d',
  //     },
  //     {
  //       datetimeEpoch: '1704520800',
  //       datetime: '06-01-2024',
  //       temp: 11.8,
  //       humidity: 48.2,
  //       windspeed: 31,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //   ],
  // },
  // {
  //   id: '2-6a5b9b8d-2a9f-4f4f-8f4e-6a5b9b8d2a9f',
  //   name: 'Santiago',
  //   email: 'santiago@mail.com',
  //   city: 'Guadalajara, JAL, México',
  //   lat: 20.6876,
  //   long: -103.351,
  //   date: '1-1-2024',
  //   conditions: 'Parcialmente nublado',
  //   icon: '02d',
  //   temp: 17.1,
  //   humidity: 41.5,
  //   windspeed: 6.5,
  //   days: [
  //     {
  //       datetimeEpoch: '1704088800',
  //       datetime: '01-01-2024',
  //       temp: 15.9,
  //       humidity: 44.5,
  //       windspeed: 6.5,
  //       conditions: 'Nublado',
  //       icon: '03d',
  //     },
  //     {
  //       datetimeEpoch: '1704175200',
  //       datetime: '02-01-2024',
  //       temp: 15.8,
  //       humidity: 48.1,
  //       windspeed: 13.7,
  //       conditions: 'Nublado',
  //       icon: '03d',
  //     },
  //     {
  //       datetimeEpoch: '1704261600',
  //       datetime: '03-01-2024',
  //       temp: 15.9,
  //       humidity: 36.8,
  //       windspeed: 12.2,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704348000',
  //       datetime: '04-01-2024',
  //       temp: 15.4,
  //       humidity: 33,
  //       windspeed: 14.4,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704434400',
  //       datetime: '05-01-2024',
  //       temp: 15,
  //       humidity: 41.8,
  //       windspeed: 22.3,
  //       conditions: 'Soleado',
  //       icon: '01d',
  //     },
  //     {
  //       datetimeEpoch: '1704520800',
  //       datetime: '06-01-2024',
  //       temp: 14.3,
  //       humidity: 42,
  //       windspeed: 15.1,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //   ],
  // },
  // {
  //   id: '3-6a5b9b8d-2a9f-4f4f-8f4e-6a5b9b8d2a9f',
  //   name: 'Sofía',
  //   email: 'sofia@mail.com',
  //   city: 'NL, México',
  //   lat: 25.5726,
  //   long: -99.969,
  //   date: '1-1-2024',
  //   conditions: 'Parcialmente nublado',
  //   icon: '02d',
  //   temp: 15.9,
  //   humidity: 78.2,
  //   windspeed: 11.6,
  //   days: [
  //     {
  //       datetimeEpoch: '1704088800',
  //       datetime: '01-01-2024',
  //       temp: 16.5,
  //       humidity: 67.7,
  //       windspeed: 15.8,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704175200',
  //       datetime: '02-01-2024',
  //       temp: 15.8,
  //       humidity: 89.7,
  //       windspeed: 13,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704261600',
  //       datetime: '03-01-2024',
  //       temp: 14.6,
  //       humidity: 77.7,
  //       windspeed: 17.3,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704348000',
  //       datetime: '04-01-2024',
  //       temp: 13,
  //       humidity: 82.2,
  //       windspeed: 15.8,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704434400',
  //       datetime: '05-01-2024',
  //       temp: 15.9,
  //       humidity: 70.8,
  //       windspeed: 17.3,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704520800',
  //       datetime: '06-01-2024',
  //       temp: 14.8,
  //       humidity: 60.1,
  //       windspeed: 15.5,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //   ],
  // },
  // {
  //   id: '4-6a5b9b8d-2a9f-4f4f-8f4e-6a5b9b8d2a9f',
  //   name: 'Victoria',
  //   email: 'victoria@mail.com',
  //   city: 'Nay, México',
  //   lat: 21.8021,
  //   long: -104.855,
  //   date: '1-1-2024',
  //   conditions: 'Parcialmente nublado',
  //   icon: '02d',
  //   temp: 17.5,
  //   humidity: 74.9,
  //   windspeed: 0.8,
  //   days: [
  //     {
  //       datetimeEpoch: '1704092400',
  //       datetime: '01-01-2024',
  //       temp: 19.9,
  //       humidity: 48,
  //       windspeed: 11.2,
  //       conditions: 'Nublado',
  //       icon: '03d',
  //     },
  //     {
  //       datetimeEpoch: '1704178800',
  //       datetime: '02-01-2024',
  //       temp: 19.7,
  //       humidity: 49.6,
  //       windspeed: 6.5,
  //       conditions: 'Nublado',
  //       icon: '03d',
  //     },
  //     {
  //       datetimeEpoch: '1704265200',
  //       datetime: '03-01-2024',
  //       temp: 19,
  //       humidity: 50.2,
  //       windspeed: 6.8,
  //       conditions: 'Soleado',
  //       icon: '01d',
  //     },
  //     {
  //       datetimeEpoch: '1704351600',
  //       datetime: '04-01-2024',
  //       temp: 18.7,
  //       humidity: 55.5,
  //       windspeed: 10.1,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704438000',
  //       datetime: '05-01-2024',
  //       temp: 18.8,
  //       humidity: 70.5,
  //       windspeed: 13.7,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704524400',
  //       datetime: '06-01-2024',
  //       temp: 18.6,
  //       humidity: 67.1,
  //       windspeed: 7.9,
  //       conditions: 'Nublado',
  //       icon: '03d',
  //     },
  //   ],
  // },
  // {
  //   id: '5-6a5b9b8d-2a9f-4f4f-8f4e-6a5b9b8d2a9f',
  //   name: 'Luis Ángel',
  //   email: 'luis.angel@mail.com',
  //   city: 'Veracruz, Ver, México',
  //   lat: 19.1954,
  //   long: -96.1368,
  //   date: '1-1-2024',
  //   conditions: 'Parcialmente nublado',
  //   icon: '02d',
  //   temp: 22.3,
  //   humidity: 83.2,
  //   windspeed: 3.5,
  //   days: [
  //     {
  //       datetimeEpoch: '1704088800',
  //       datetime: '01-01-2024',
  //       temp: 21.4,
  //       humidity: 78.8,
  //       windspeed: 14,
  //       conditions: 'Lluvioso',
  //       icon: '09d',
  //     },
  //     {
  //       datetimeEpoch: '1704175200',
  //       datetime: '02-01-2024',
  //       temp: 22.6,
  //       humidity: 77.1,
  //       windspeed: 17.3,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704261600',
  //       datetime: '03-01-2024',
  //       temp: 22.9,
  //       humidity: 79.2,
  //       windspeed: 29.5,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704348000',
  //       datetime: '04-01-2024',
  //       temp: 22.6,
  //       humidity: 81.6,
  //       windspeed: 18.7,
  //       conditions: 'Parcialmente lluvioso',
  //       icon: '10d',
  //     },
  //     {
  //       datetimeEpoch: '1704434400',
  //       datetime: '05-01-2024',
  //       temp: 22.7,
  //       humidity: 83.8,
  //       windspeed: 16.2,
  //       conditions: 'Parcialmente nublado',
  //       icon: '02d',
  //     },
  //     {
  //       datetimeEpoch: '1704520800',
  //       datetime: '06-01-2024',
  //       temp: 22.4,
  //       humidity: 77.3,
  //       windspeed: 37.8,
  //       conditions: 'Soleado',
  //       icon: '01d',
  //     },
  //   ],
  // },
];
