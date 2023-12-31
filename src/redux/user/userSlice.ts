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
    conditions: 'sunny',
    icon: '01d',
    temp: 25,
    humidity: 50,
    windspeed: 10,
    days: [],
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'I4QpO@example.com',
    city: 'New York',
    lat: 40.7128,
    long: -74.006,
    date: '2022-01-01',
    conditions: 'sunny',
    icon: '01d',
    temp: 25,
    humidity: 50,
    windspeed: 10,
    days: [],
  },
];

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
