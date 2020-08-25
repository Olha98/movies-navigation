import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App';
import { BrowserRouter } from 'react-router-dom';
import './styles.module.css'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


