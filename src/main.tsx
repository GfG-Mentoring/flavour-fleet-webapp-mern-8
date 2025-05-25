import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { configureStore } from '@reduxjs/toolkit';

import '@/styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App.tsx';
import { Provider } from './provider.tsx';
import rootReducer from './reducers';

const reduxStore = configureStore({
  reducer: rootReducer
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ToastContainer
          draggable
          pauseOnFocusLoss
          pauseOnHover
          autoClose={5000}
          closeOnClick={false}
          hideProgressBar={false}
          newestOnTop={false}
          position="top-right"
          rtl={false}
          theme="dark"
        />
        <ReduxProvider store={reduxStore}>
          <App />
        </ReduxProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
