import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/fonts/CA Saygon Text/stylesheet.css';
import './assets/fonts/Grandis/stylesheet.css';
import specItems from './json/specItems'
import App from './App';

ReactDOM.render(
    <App specItems={specItems} />,
  document.getElementById('root')
);
