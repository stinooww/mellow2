import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routing from './components/Routing/Routing';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Routing/>
                        <Footer/>
                    </div>
                </BrowserRouter>
        )
                ;
    }
}

export default App;
