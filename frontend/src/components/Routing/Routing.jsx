import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Strategie from '../../pages/Strategie/Strategie';
import Portfolio from '../../pages/Portfolio/Portfolio';
import PortfolioItem from '../portfolio-item/PortfolioItem';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import page404 from '../../pages/Error/page404';
import Av from '../../pages/AV/Av';
import Website from '../../pages/Diensten/Website';
import SEO from '../../pages/Diensten/SEO';
import Grafisch from '../../pages/Diensten/Grafisch';
import Webhosting from '../../pages/Diensten/Webhosting';

function Routing() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/strategie" component={Strategie} />
      <Route path="/portfolioitem/dicomenu" component={PortfolioItem} />
      {/*<Route path={`${match.url}/:postId`}*/}
      {/*render={ (props) => <Product data= {productsData} {...props} />}/>
                       component={PortfolioItem}
                       */}
      <Route path="/diensten/website" component={Website} />
      <Route path="/diensten/seo" component={SEO} />
      <Route path="/diensten/grafisch" component={Grafisch} />
      <Route path="/diensten/webhosting" component={Webhosting} />

      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/algemenevoorwaarde" component={Av} />
      <Route path="/portfolio" component={Portfolio} />
      {/*<Route path="/portfolioitem/:id" component={PortfolioItem}/>*/}
      <Route path="/404" component={page404} />
    </div>
  );
}

export default Routing;
