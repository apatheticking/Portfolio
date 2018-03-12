import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import MainContainer from './Components/MainContainer/MainContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;