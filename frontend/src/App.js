import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';
import CallToAction from './components/CallToAction/CallToAction';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Cookie from './components/Cookie/Cookie';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      policy: false
    };
  }

  componentDidMount() {}

  closePopup = () => {
    this.setState((state, props) => ({
      policy: true
    }));
    console.log(this.state.policy);

    // set all values
    let accept = {
      policy: this.state.policy
    };
    console.log(accept);
    let settings = Object.assign({}, accept);
    settings.LocalStorage = true;
    // Store in cookies for anonymous user
    cookies.set('settings', settings);
  };

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
        {!this.state.policy ? (
          <Cookie
            cookieText="Deze website maakt gebruik van cookies"
            closePopup={this.closePopup}
          />
        ) : null}
        {isToggleOn ? (
          <ModalOfferteStart
            isToggleOn={this.state.isToggleOn}
            hideModal={this.hideModal}
          />
        ) : null}
        <CallToAction activateOfferte={this.activateOfferte} />
        <Footer />
        <MessengerCustomerChat
          pageId="342021876162625"
          appId="515842495670475"
          htmlRef={window.location.pathname}
          shouldShowDialog={false}
          loggedInGreeting="Hallo, waar kan ik je mee helpen?"
          logged_out_greeting="Hallo, U moet inloggen met uw Facebook account. Waar kan ik je mee helpen?"
          greetingDialogDisplay="fade"
          greetingDialogDelay="30"
          themeColor="#efc337"
          language="nl_NL"
        />
      </div>
    );
  }
}

export default App;
