import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import ServiceTile from './ServiceTile/ServiceTile';

class ServiceHomePictures extends Component {
    static propTypes = {
        tileWidth      : PropTypes.string,
        tileImg        : PropTypes.string,
        tileDescription: PropTypes.string
    };

    render() {
        return (
                <div>
                    {/*<div className="serviceHomePictures">*/}
                    {/*<div className="serviceheader text-center">*/}
                    {/*<h2>Onze services</h2>*/}
                    {/*<p>Webdesign is wat we doen, waarbij we mee denken met jou om de beste oplossing op maat te vinden.*/}
                    {/*</p>*/}
                    {/*<p>  <span className="helpen">*/}
                    {/*Wij helpen u uw digitale identiteit te creeëren*/}
                    {/*</span>*/}
                    {/*</p>*/}
                    {/*</div>*/}
                    {/*<div className="service">*/}
                    {/*<div className="serviceTiles">*/}
                    {/*<ServiceTile tileWidth="big" tileImg="dicomenu" tileDescription="Webdesign & webshop"/>*/}
                    {/*<ServiceTile tileWidth="small" tileImg="bodyupdate"/>*/}
                    {/*<ServiceTile tileWidth="small" tileImg="sea"/>*/}
                    {/*</div>*/}
                    {/*<div className="serviceTiles">*/}
                    {/*<ServiceTile tileWidth="medium" tileImg="finnegans"/>*/}
                    {/*<div className="lastTile">*/}
                    {/*<ServiceTile tileWidth="big" tileImg="peeraer"/>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    <div className="home-portfolio" id="home-portfolio">
                        <div className="wrapper-1075">
                            <div className="home-portfolio-text-mobile"><p>Contacteer Weblounge (Brugge) Tel. 050 687 657</p></div>
                            <div className="home-portfolio-text clearfix">
                                <div className="grid-col-50"><h2>Webdesign is wat we doen, <i>waarbij we mee denken met jou </i>om de beste oplossing op maat te vinden. </h2></div>
                                <div className="grid-col-50 wysi"><p>Websites maken is onze eerste grote liefde maar ook een stijlvol grafisch ontwerp van jouw
                                    <a href="/grafisch-ontwerp/logo-ontwerp/" title="Logo ontwerp in Brugge">logo</a> is bij Weblounge in goede
                                    handen. <a href="/over-ons/" title="De diensten van web bureau Weblounge">Lees
                                        ons verhaal en ontdek hoe wij jou kunnen helpen van A tot Z.</a></p></div>
                            </div>
                            <div className="portfolio-grid clearfix">
                                <div className="grid-col-50">
                                    <div className="fig-hover-item height-380">
                                        <figure className="fig cover dicomenu">
                                            <img src="../../images/dicomenu1.png" alt="Kok au Vin"/>
                                            <figcaption className="caption">Huisstijl &amp; Webdesign</figcaption>
                                        </figure>
                                        <a href="" className="full-link">Dicomenu</a>
                                        <div className="overlay">
                                            <div className="overlay-color overlay-color1"/>
                                            <div className="overlay-content">
                                                <h3><a href="">Dicomenu
                                                    <small>Culinaire vertalingen </small>
                                                </a></h3>
                                                <a href="">Bekijk project</a>
                                                <div className="hr"/>
                                                <a href="" className="light">Bekijk portfolio</a></div>
                                            <a href="" className="full-link">Dicomenu</a></div>
                                    </div>
                                    <div className="fig-hover-item height-280">
                                        <figure className="fig cover finnegans">
                                            <img src="../../images/finnegans.png" alt="Marmotta Alpin Hotel"/>
                                            <figcaption className="caption">Logo ontwerp &amp; Webdesign</figcaption>
                                        </figure>
                                        <a href="" className="full-link">Finnegans</a>
                                        <div className="overlay">
                                            <div className="overlay-color overlay-color2"/>
                                            <div className="overlay-content">
                                                <h3><a href="">Finnegans
                                                    <small>De betere cocktails</small>
                                                </a></h3>
                                                <a href="">Bekijk project</a>
                                                <div className="hr"/>
                                                <a href="/grafisch-ontwerp/" className="light">Bekijk portfolio</a></div>
                                            <a href="/webdesign/marmotta-alpin-hotel-oostenrijk/" className="full-link">Finnegans</a></div>
                                    </div>
                                </div>
                                <div className="grid-col-50">
                                    <div className="grid-col-50">
                                        <div className="fig-hover-item height-280">
                                            <figure className="fig cover bodyupdate">
                                                <img src="../../images/bodyupdate.jpg" alt="Rondreis"/>
                                                <figcaption className="caption">responsive website</figcaption>
                                            </figure>
                                            <a href="/webdesign/rondreis/" className="full-link">Rondreis</a>
                                            <div className="overlay">
                                                <div className="overlay-color overlay-color3"/>
                                                <div className="overlay-content">
                                                    <h3><a href="/webdesign/rondreis/">Rondreis
                                                        <small>Responsive website</small>
                                                    </a></h3>
                                                    <a href="/webdesign/rondreis/">Bekijk project</a>
                                                    <div className="hr"></div>
                                                    <a href="/webdesign/" className="light">Bekijk portfolio</a></div>
                                                <a href="/webdesign/rondreis/" className="full-link">Rondreis</a></div>
                                        </div>
                                    </div>
                                    <div className="grid-col-50">
                                        <div className="fig-hover-item height-280">
                                            <figure className="fig cover sea">
                                                <img src="/phpthumb/cache/uploads/homeprojecten/webdesign-maisonbertine/w269h2269zc0q100/webdesign-maisonbertine.jpg" alt="Maison Bertine"/>
                                                <figcaption className="caption">Kant-en-klaar webdesign</figcaption>
                                            </figure>
                                            <a href="/webdesign/bed-and-breakfast-maison-bertine/" className="full-link">Maison Bertine</a>
                                            <div className="overlay">
                                                <div className="overlay-color overlay-color4"/>
                                                <div className="overlay-content">
                                                    <h3><a href="/webdesign/bed-and-breakfast-maison-bertine/">Maison Bertine
                                                        <small>Kant-en-klaar webdesign</small>
                                                    </a></h3>
                                                    <a href="/webdesign/bed-and-breakfast-maison-bertine/">Bekijk project</a>
                                                    <div className="hr"></div>
                                                    <a href="/webdesign/kant-en-klare-sites/" className="light">Bekijk portfolio</a></div>
                                                <a href="/webdesign/bed-and-breakfast-maison-bertine/" className="full-link">Maison Bertine</a></div>
                                        </div>
                                    </div>
                                    <div className="fig-hover-item height-380">
                                        <figure className="fig cover peeraer">
                                            <img src="../../images/peeraer.jpeg" alt="The Shop - Ecommerce webshop"/>
                                            <figcaption className="caption">Webshop &amp; Logo</figcaption>
                                        </figure>
                                        <a href="/webdesign/the-shop/" className="full-link">The Shop Online</a>
                                        <div className="overlay">
                                            <div className="overlay-color overlay-color5"/>
                                            <div className="overlay-content">
                                                <h3><a href="/webdesign/the-shop/">The Shop Online
                                                    <small>Webshop &amp; Logo</small>
                                                </a></h3>
                                                <a href="/webdesign/the-shop/">Bekijk project</a>
                                                <div className="hr"/>
                                                <a href="/webdesign/webshops/" className="light">Bekijk portfolio</a></div>
                                            <a href="/webdesign/the-shop/" className="full-link">The Shop Online</a></div>
                                    </div>
                                </div>
                            </div>
                            <a href="/webdesign/" title="Bekijk onze portfolio" className="btn btn-border btn-center track-btn fx fx-opacity" data-label="CTA Home 3"><span>Bekijk onze portfolio</span></a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ServiceHomePictures;