import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routing from './components/Routing/Routing';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Helmet} from 'react-helmet';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Helmet>
                            <meta content="ie=edge" http-equiv="X-UA-Compatible"></meta>
                            <meta content="bZrlsX87Je_E-996kJTqa0KdxW_XV4w0Wl0F61Z8U-4" name="google-site-verification"></meta>
                            <title>Mellow webdesign & development ~ Websites webdesign webapplicaties</title>
                            <meta content="#ffffff" name="msapplication-TileColor"></meta>
                            <meta charSet="utf-8"></meta>
                            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"></meta>
                            <meta content="#000000" name="theme-color"></meta>
                            <meta content="./assets/img/ms-icon-144x144.png" name="msapplication-TileImage"></meta>
                            <meta content="Mellow webdesign & development is een jong bedrijf met een passie voor alles wat zich online ontwikkelt. Ontdek wat wij voor kunnen betekenen op onze website!" name="description"></meta>
                            <meta content="website,webdesign,webdevelopment,webshop,seo,sea,logo,webhosting,brochures,flyers,marketingsemails" name="keywords"></meta>
                            <meta content="Stijn Heynderickx" name="author"></meta>
                            <meta content="yes" name="apple-mobile-web-app-capable"></meta>
                            <meta content="Mellowwebdesign" name="apple-mobile-web-app-title"></meta>
                            <meta content="black" name="apple-mobile-web-app-status-bar-style"></meta>
                            <meta content="Mellowwebdesign&development" name="title"></meta>
                            <meta content="en" name="locale"></meta>
                            <meta content="all" name="robots"></meta>
                            <meta content="Mellow webdesign & development websites" property="og:title"></meta>
                            <meta content="Mellowwebdesign" property="og:site_name"></meta>
                            <meta content="Mellow webdesign & development biedt webdesign op maat aan voor een schappelijke prijs" property="og:description"></meta>
                            <meta content="website" property="og:type"></meta>
                            <meta content="./assets/img/logo.png" property="og:image"></meta>
                            <meta content="./assets/img/logo.png" property="og:url"></meta>
                            <meta content="summary" property="twitter:card"></meta>
                            <meta content="Mellowwebdesign websites" property="twitter:title"></meta>
                            <meta content="Mellow webdesign & development biedt webdesign op maat aan voor een schappelijke prijs" property="twitter:description"></meta>
                            <meta content="./assets/img/logo.png" property="twitter:image"></meta>
                            <meta content="./assets/img/logo.png" property="twitter:url"></meta>
                        </Helmet>
                        <Header/>
                        <Routing/>
                        <Footer/>
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;
