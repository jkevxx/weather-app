import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  UserId,
  UserInterface,
  UserInterfaceWithId,
} from '../../interfaces/UserInterface';

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Dave Doe',
    email: 'I4QpO@example.com',
    city: 'New York',
    lat: 40.7128,
    long: -74.006,
    date: '2022-01-01',
    temperature: 25,
    humidity: 50,
    wind_speed: 10,
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'I4QpO@example.com',
    city: 'New York',
    lat: 40.7128,
    long: -74.006,
    date: '2022-01-01',
    temperature: 25,
    humidity: 50,
    wind_speed: 10,
  },
];

// let initialState: UserInterfaceWithId[] = DEFAULT_STATE;
// const persistedState = localStorage.getItem('__redux__state__');
// if (persistedState) {
//   initialState = JSON.parse(persistedState).users;
// }

// const initialState: UserInterfaceWithId[] = (() => {
//   const persistedState = localStorage.getItem('__redux__state__');
//   if (persistedState) {
//     return JSON.parse(persistedState).users;
//   }
//   return DEFAULT_STATE;
// })();

const initialState: UserInterfaceWithId[] = DEFAULT_STATE;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserInterface>) => {
      const id = crypto.randomUUID();
      return [...state, { ...action.payload, id }];
    },

    updateUserById: (state, action: PayloadAction<UserInterfaceWithId>) => {
      const id = action.payload.id;
      return state.map((user) => (user.id === id ? action.payload : user));
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { createUser, updateUserById, deleteUserById } =
  usersSlice.actions;
