import React from 'react';
import './assets/App.scss';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Content />
      <Switch>
        <Route path='/itseems'>
          <ItSeems />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
