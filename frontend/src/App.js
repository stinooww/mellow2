import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing/Routing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ModalOfferteStart from './components/ModalOfferte/ModalOfferteStart';
import CallToAction from './components/CallToAction/CallToAction';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
        <CallToAction activateOfferte={this.activateOfferte} />
        <Footer />
        <MessengerCustomerChat
          pageId="342021876162625"
          appId="515842495670475"
          htmlRef={window.location.pathname}
          loggedInGreeting="Hallo, waar kan ik je mee helpen?"
          greetingDialogDisplay="fade"
          greetingDialogDelay="30"
          themeColor="#efc337"
          language="nl_NL"
          xfbml={true}
        />
      </div>
    );
  }
}

export default App;
