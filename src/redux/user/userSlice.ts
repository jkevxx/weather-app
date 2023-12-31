import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  UserId,
  UserInterface,
  UserInterfaceWithId,
} from '../../interfaces/UserInterface';
import { DEFAULT_STATE } from '../../utils/preloadedUsers';

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
