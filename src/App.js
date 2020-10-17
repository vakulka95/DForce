import React from 'react';
import './assets/App.scss';
import { createBrowserHistory } from "history";
import {  Router, Switch } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Content from './layout/Content';
import Header from './layout/Header';
import ScrollToTop from 'react-router-scroll-top';

const customHistory = createBrowserHistory();


function App() {

  return (
    <Router history = {customHistory}>
      <ScrollToTop>
        <div className="App">
          <Header />
          <Switch>
            <Content />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
