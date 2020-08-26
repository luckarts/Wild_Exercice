import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('app')
);
//serviceWorker.register();
