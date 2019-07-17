import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ServiceHomePictures extends Component {
    static propTypes = {
        tileWidth      : PropTypes.string,
        tileImg        : PropTypes.string,
        tileDescription: PropTypes.string
    };

    render() {
        return (
                <div>
                    <div className="home-portfolio" id="home-portfolio">
                        <div className="wrapper-1075">
                            <div className="home-portfolio-text clearfix">
                                <div className="col-md-12">
                                    <h2>Webdesign is wat we doen,
                                        <span> waarbij we mee denken met jou </span>
                                        om de beste oplossing op maat te vinden. </h2>
                                </div>
                                <div className="elementor-divider">
                                    <span className="elementor-divider-separator"/>
                                </div>
                            </div>
                            <div className="portfolio-grid clearfix">
                                <div className="grid-col-50">
                                    <div className="fig-hover-item height-380">
                                        <figure className="fig cover dicomenu">
                                            <img src="../../images/dicomenu1.png" alt="Dicomenu"/>
                                            <figcaption className="caption">Webshop &amp; Marketing emails</figcaption>
                                        </figure>
                                        <Link to="/portfolioitem/dicomenu" className="full-link">Dicomenu</Link>
                                        <div className="overlay">
                                            <div className="overlay-color overlay-color1"/>
                                            <div className="overlay-content">
                                                <h3><Link to="/portfolioitem/dicomenu">Dicomenu
                                                    <small>Culinaire vertalingen </small>
                                                </Link></h3>
                                                <Link to="/portfolioitem/dicomenu">Bekijk project</Link>
                                                <div className="hr"/>
                                                <Link to="/portfolio" className="light">Bekijk portfolio</Link></div>
                                            <Link to="/portfolioitem/dicomenu" className="full-link">Dicomenu</Link>
                                        </div>
                                    </div>

                                    <div className="fig-hover-item height-280">
                                        <figure className="fig cover finnegans">
                                            <img src="../../images/finnegans.png" alt="Marmotta Alpin Hotel"/>
                                            <figcaption className="caption">Webdesign</figcaption>
                                        </figure>
                                        <Link to="/portfolioitem/finnegans" className="full-link">Finnegans</Link>
                                        <div className="overlay">
                                            <div className="overlay-color overlay-color1"/>
                                            <div className="overlay-content">
                                                <h3><Link to="/portfolioitem/finnegans">Finnegans
                                                    <small>B2B en B2C cocktailconcepten op maat </small>
                                                </Link></h3>
                                                <Link to="/portfolioitem/finnegans">Bekijk project</Link>
                                                <div className="hr"/>
                                                <Link to="/portfolio" className="light">Bekijk portfolio</Link></div>
                                            <Link to="/portfolioitem/finnegans" className="full-link">Finnegans</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-col-50">
                                    <div className="grid-col-50">
                                        <div className="fig-hover-item height-280">
                                            <figure className="fig cover bodyupdate">
                                                <img src="../../images/bodyupdate.jpg" alt="Rondreis"/>
                                                <figcaption className="caption">responsive website</figcaption>
                                            </figure>
                                            <Link to="/portfolioitem/bodyupdate" className="full-link">Afslanken</Link>
                                            <div className="overlay">
                                                <div className="overlay-color overlay-color1"/>
                                                <div className="overlay-content">
                                                    <h3><Link to="/portfolioitem/bodyupdate">Body-update
                                                        <small>Afslanken &amp; diëten </small>
                                                    </Link></h3>
                                                    <Link to="/portfolioitem/bodyupdate">Bekijk project</Link>
                                                    <div className="hr"/>
                                                    <Link to="/portfolio" className="light">Bekijk portfolio</Link></div>
                                                <Link to="/portfolioitem/bodyupdate" className="full-link">Body-update</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-col-50">
                                        <div className="fig-hover-item height-280">
                                            <figure className="fig cover sea">
                                                <figcaption className="caption">Webdesign en SEA</figcaption>
                                            </figure>
                                            <Link to="/portfolioitem/askbliksem" className="full-link">SEA</Link>
                                            <div className="overlay">
                                                <div className="overlay-color overlay-color1"/>
                                                <div className="overlay-content">
                                                    <h3><Link to="/portfolioitem/dicomenu">Ask-bliksembeveiliging
                                                        <small>Social media &amp; webdesign </small>
                                                    </Link></h3>
                                                    <Link to="/portfolioitem/askbliksem">Bekijk project</Link>
                                                    <div className="hr"/>
                                                    <Link to="/portfolio" className="light">Bekijk portfolio</Link></div>
                                                <Link to="/portfolioitem/askbliksem" className="full-link">Ask-bliksembeveiliging</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fig-hover-item height-380">
                                        <figure className="fig cover peeraer">
                                            <figcaption className="caption">Webshop</figcaption>
                                        </figure>
                                        <Link to="/portfolioitem/bakkerijpeeraer/" className="full-link">Bakkerij & broodjes</Link>
                                        <div className="overlay">
                                            <div className="overlay-color overlay-color1"/>
                                            <div className="overlay-content">
                                                <h3><Link to="/portfolioitem/bakkerijpeeraer">Bakkerij Peeraer
                                                    <small>Bakkerij & broodjes</small>
                                                </Link></h3>
                                                <Link to="/portfolioitem/bakkerijpeeraer">Bekijk project</Link>
                                                <div className="hr"/>
                                                <Link to="/portfolio" className="light">Bekijk portfolio</Link></div>
                                            <Link to="/portfolioitem/bakkerijpeeraer" className="full-link">Bakkerij Peeraer</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/portfolio" title="Bekijk onze portfolio" className="btn btn-border btn-center track-btn fx fx-opacity" data-label="CTA Home 3"><span>Ontdek meer</span></Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ServiceHomePictures;