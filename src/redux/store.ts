import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

// const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
//   next(action);
//   localStorage.setItem('__redux__state__', JSON.stringify(store.getState()));
// };

export const store = configureStore({
  reducer: {
    users: persistedReducer,
    // users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
