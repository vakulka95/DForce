import React, {useEffect} from 'react';
import './assets/App.scss';
import { createBrowserHistory } from "history";
import {  Router, Switch } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import Content from './layout/Content';
import Header from './layout/Header';
//import Scroll from 'react-scroll';

const customHistory = createBrowserHistory();
//const scroll = Scroll.animateScroll;

function App() {
  // useEffect(() => {scroll.scrollToTop()
  // console.log('scrolling?')
  // },[])
  return (
    <Router history = {customHistory}>
    <div className="App">
      <Header />
      <Switch>
        <Content />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
