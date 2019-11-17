import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';
import CallToAction from './components/CallToAction/CallToAction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  hideModal = () => {
    this.setState({ isToggleOn: false });
  };
  activateOfferte = () => {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  };
  render() {
    const { isToggleOn } = this.state;
    return (
      <Router>
        <div>
          <Header activateOfferte={this.activateOfferte} />
          <Routing activateOfferte={this.activateOfferte} />
          {isToggleOn ? (
            <ModalOfferteStart
              isToggleOn={this.state.isToggleOn}
              hideModal={this.hideModal}
            />
          ) : null}
          <CallToAction activateOfferte={this.activateOfferte} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
