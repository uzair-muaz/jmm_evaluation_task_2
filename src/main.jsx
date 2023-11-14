import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@emotion/react';

import App from './App.jsx';
import './index.css';
import { persistor, store } from './store.js';
import { theme } from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ThemeProvider theme={theme}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <App />
                </PersistGate>
              </Provider>
            </ThemeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
