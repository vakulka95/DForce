import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/index.scss';
// import './assets/fonts/CA Saygon Text/stylesheet.scss';
import './assets/_fonts.scss';
import specItems from './json/specItems';
import App from './App';

ReactDOM.render(
    <App specItems={specItems} />,
  document.getElementById('root')
);
