import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles'; 
import * as constants from './constants';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={constants.THEME}>
    <BrowserRouter>
      <App tab="home"/>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
