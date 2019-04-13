import React, {Component} from 'react';
import {Route, Switch, BrowserRouter, Router} from 'react-router-dom';
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import Portfolio from "../../pages/Portfolio/Portfolio";
import PortfolioItem from "../../pages/PortfolioItem/PortfolioItem";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import page404 from "../../pages/Error/page404";
import ServiceItem from "../../pages/Services/ServiceItem";
import Av from "../../pages/AV/Av";

function Routing() {
    return (

            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/services" component={Services}/>
                <Route path="/service/dicomenu" component={ServiceItem}/>
                {/*<Route path={`${match.url}/:postId`}*/}
                {/*render={ (props) => <Product data= {productsData} {...props} />}/>
                       component={PortfolioItem}
                       */}
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/algemenevoorwaarde" component={Av}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/portfolio/:id" component={PortfolioItem}/>
                <Route path="/404" component={page404}/>
            </div>

    );
}

export default Routing;