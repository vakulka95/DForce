import React from 'react';
import './assets/App.scss';
import { createBrowserHistory } from "history";
import { Router } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Content from './layout/Content';
import Header from './layout/Header'

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history = {customHistory}>
    <div className="App">
      <Header />
      <h1>Let`s go!!!</h1>
      <p>We must do it</p>
      <Content />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
