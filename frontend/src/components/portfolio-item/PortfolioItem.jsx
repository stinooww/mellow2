import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import dicomenuBack from './../../images/frontLAYER.png';
import dicomenuFRONT from './../../images/back_layer.png';
import waterschenken from './../../images/Waterschenken-min.jpg';
import ober from './../../images/Obervlees-min.jpeg';
import koppel from './../../images/Koppelres-min.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from '../../components/CallToAction/CallToAction';

AOS.init();

class PortfolioItem extends Component {
    render() {
        return (
                <div>
                    <div className="portfolio_item-header">
                        <div className="header-layers">
                            <h1> Dicomenu</h1>
                            <h3>Vertalingen & verkopen van culinaire woordenboeken </h3>
                        </div>
                        <div className="image-layers">
                            <Image src={dicomenuFRONT} alt="dicomenu" className="img"/>
                            <Image src={dicomenuBack} alt="dicomenu" className="img"/>
                        </div>
                    </div>
                    <Grid className="portfolio_item-grid">
                        <Row>
                            <Col className="dicomenu-website" data-aos="fade-up" data-aos-mirror="true">
                                <p>Dicomenu kwam naar ons met de vraag of we heel hun oude website inclusief webshop in een nieuw jasje konden steken.</p>
                                <p>Niet alleen wilden ze een vernieuwde huisstijl voor hun webshop, ze wensten ook graag dat hun klanten betalingen konden doen via PayPal.</p>
                                <span className="no-problemo">Geen probleem voor ons!</span>
                                <p>Bovendien verstuurde ze op regelmatige basis e-mails naar al hun klanten en wensten ze deze gepersonaliseerd met de huisstijl van de website. </p>
                                <p>Ook dit hebben we tot een goed einde kunnen brengen, en dat zelfs in 2 talen !</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="cta-overal">
                                <Link to="www.dicomenu.com" className="mellow-btn cta-button"> Bezoek de website</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={12}>
                                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1500"><Image src={ober} alt="dicomenu" rounded responsive className="img"/></div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div data-aos="fade-up" data-aos-easing="ease-in-out"
                                     data-aos-duration="1500"><Image src={koppel} alt="dicomenu" rounded responsive className="img"/></div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1500"><Image src={waterschenken} alt="dicomenu" rounded responsive className="img"/></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="webhosting" data-aos="zoom-in-up" data-aos-delay="550">
                                <p>Enkele maanden na de release contaceerde ze ons opnieuw omdat ze toch vonden dat de laadtijd van hun website gehost
                                    op een goedkope buitenlandse hosting niet zo snel was...</p>
                                <p>We hebben de volledige website vervolgens overgezet naar onze webhosting server en dit resulteerde in een laadtijd van bijna <strong>3,5 seconde</strong> sneller !!!
                                </p>
                            </Col>
                        </Row>
                        <CallToAction/>
                    </Grid>
                </div>
        );
    }
}

export default PortfolioItem;