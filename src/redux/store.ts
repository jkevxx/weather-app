import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { weatherApi } from './api/apiSlice';
import usersReducer from './user/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['users'],
};

const rootReducer = combineReducers({
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
