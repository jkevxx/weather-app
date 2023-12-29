import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import { weatherApi } from './redux/api/apiSlice.ts';
import { store } from './redux/store.ts';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={weatherApi}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ApiProvider>
  </React.StrictMode>
);
