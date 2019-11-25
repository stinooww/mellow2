import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';
import CallToAction from './components/CallToAction/CallToAction';
import Page404 from './pages/Error/page404';

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
      <div>
        <Header activateOfferte={this.activateOfferte} />
        <Routing activateOfferte={this.activateOfferte} />

        {isToggleOn ? (
          <ModalOfferteStart
            isToggleOn={this.state.isToggleOn}
            hideModal={this.hideModal}
          />
        ) : null}
        {/*<Switch>*/}
        {/*  <Route path="*">*/}
        {/*    <Page404/>*/}
        {/*  </Route>*/}
        {/*</Switch>*/}
        <CallToAction activateOfferte={this.activateOfferte} />
        <Footer />
      </div>
    );
  }
}

export default App;
