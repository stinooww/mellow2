import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  activateOfferte = () => {
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
    console.log("na geklikt te hebben" + this.state.isToggleOn);
  };
  render() {
    const {isToggleOn} = this.state;
    return (
      <Router>
        <div>
          <Header activateOfferte={this.activateOfferte}/>
          <Routing />
          {isToggleOn ? <ModalOfferteStart isToggleOn={this.state.isToggleOn}/> : null}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
