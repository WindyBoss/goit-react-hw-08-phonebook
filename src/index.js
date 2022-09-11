/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import contactApi from './service/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={contactApi}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook/">
            <App />
            <Toaster />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApiProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
