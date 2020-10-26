import React from 'react';
import './assets/App.scss';
import { createBrowserHistory } from "history";
import {  Router } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Content from './layout/Content';
import Header from './layout/Header';
import ScrollToTop from './utils/ScrollToTop'

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history = {customHistory}>
        <div className="App">
          <ScrollToTop>
          <Header />         
          <Content />
          <Footer />
          </ScrollToTop>
        </div>
    </Router>
  );
};

export default App;
