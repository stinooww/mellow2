import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import CookiePolicy from '../../pages/cookiePolicy/cookiePolicy';
import linkBio from '../../pages/LinkInBio/linkBio';
import brasschaat from '../../pages/Locatie/brasschaat';
import antwerpen from '../../pages/Locatie/antwerpen';
import wilrijk from '../../pages/Locatie/wilrijk';
import edegem from '../../pages/Locatie/edegem';

const Routing = ({ activateOfferte }) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/index.html" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/strategie" component={Strategie} />
    <Route path="/portfolioitem/:id" component={PortfolioItem} />
    <Route path="/diensten/website" component={Website} />
    <Route path="/diensten/seo" component={SEO} />
    <Route path="/diensten/grafisch" component={Grafisch} />
    <Route
      path="/diensten/webhosting"
      component={Webhosting}
      activateOfferte={activateOfferte}
    />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/algemenevoorwaarden" component={Av} />
    <Route path="/CookiePolicy" component={CookiePolicy} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/instagram" component={linkBio} />
    <Route path="/locatie/website-laten-maken-in-edegem" component={edegem} />
    <Route
      path="/locatie/website-laten-maken-in-brasschaat"
      component={brasschaat}
    />
    <Route
      path="/locatie/website-laten-maken-in-antwerpen"
      component={antwerpen}
    />
    <Route path="/locatie/website-laten-maken-in-wilrijk" component={wilrijk} />
    <Route path="/404" component={Page404} />
    <Route path="/500" component={Page404} />
    <Route path="*" component={Page404} />
  </Switch>
);

export default Routing;
