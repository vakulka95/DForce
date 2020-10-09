import React from 'react';
import './assets/App.scss';
import { createBrowserHistory } from "history";
import {  Router, Switch, Route } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Content from './layout/Content';
import Header from './layout/Header';
import ItSeems from './pages/ItSeems/ItSeems';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history = {customHistory}>
    <div className="App">
      <Header />
     
      <Switch>
        <Route path='/'> 
          <Content />
          </Route>
        <Route component={ItSeems} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
