import React from 'react';
import './assets/App.scss';
import Footer from './layout/Footer/Footer';
import Specialization from './pages/Specialization/Specialization';
import Header from './layout/Header'

function App(props) {
  return (
    <div className="App">
      <Header />
      <h1>Let`s go!!!</h1>
      <p>We must do it</p>
      <Specialization specItems={props.specItems} />
      <Footer />
    </div>
  );
}

export default App;
