import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';
import CallToAction from './components/CallToAction/CallToAction';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Cookie from './components/Cookie/Cookie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      showPopup: true
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
        {this.state.showPopup ? (
          <Cookie
            cookieText="Deze website maakt gebruik van cookies"
            closePopup={this.togglePopup}
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
          shouldShowDialog={true}
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
