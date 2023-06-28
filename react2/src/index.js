import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom'
import App2 from './App2';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import DemoSlice from './redux/DemoSlice';

let store = configureStore({
  reducer : DemoSlice
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
