import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routing />
          <ModalOfferteStart />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
