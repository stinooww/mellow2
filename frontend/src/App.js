import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Routing from './components/Routing/Routing';
import {Provider} from 'react-redux';
import store from './store';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


class App extends Component {
    render() {
        return (

                <Provider
                        store={store}>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Routing/>
                            <Footer/>
                        </div>
                    </BrowserRouter>
                </Provider>

    )
        ;
    }
}

export default App;
