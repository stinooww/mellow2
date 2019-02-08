import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Routing from './components/Routing/Routing';
import {Provider} from 'react-redux';
import store from './store';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioItem from "./pages/PortfolioItem/PortfolioItem";
import page404 from "./pages/Error/page404";

class App extends Component {
    render() {
        return (

                < Provider
        store = {store} >

                < BrowserRouter >
                < div >
                < Header / >

                < Routing / >

                < Footer / >
                < /div>
                < /BrowserRouter>

                < /Provider>

    )
        ;
    }
}

export default App;
