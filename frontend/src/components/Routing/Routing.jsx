import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Strategie from '../../pages/Strategie/Strategie';
import Portfolio from '../../pages/Portfolio/Portfolio';
import PortfolioItem from '../../pages/portfolio-item/PortfolioItem';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Av from '../../pages/AV/Av';
import Website from '../../pages/Diensten/Website';
import SEO from '../../pages/Diensten/SEO';
import Grafisch from '../../pages/Diensten/Grafisch';
import Webhosting from '../../pages/Diensten/Webhosting';
import Page404 from '../../pages/Error/page404';

const Routing = ({activateOfferte}) => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/home">
            <Home/>
        </Route>
        <Route path="/strategie">
            <Strategie/>
        </Route>
        <Route path="/portfolio">
            <Portfolio/>
        </Route>
        <Route path="/portfolioitem/:id">
            <PortfolioItem/>
        </Route>
        <Route path="/diensten/website">
            <Website/>
        </Route>
        <Route path="/diensten/seo">
            <SEO/>
        </Route>
        <Route path="/diensten/grafisch">
            <Grafisch/>
        </Route>
        <Route path="/diensten/webhosting">
            <Webhosting activateOfferte={activateOfferte}/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
        <Route path="/algemenevoorwaarde">
            <Av/>
        </Route>
        <Route path="*">
            <Page404/>
        </Route>
    </Switch>
);

export default Routing;
