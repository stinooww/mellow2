import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import dicomenupic from './../../images/dicomenu2.jpg';
import waterschenken from './../../images/Waterschenken-min.jpg';
import ober from './../../images/Obervlees-min.jpeg';
import koppel from './../../images/Koppelres-min.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

class ServiceDicomenu extends Component {
    render() {
        return (
                <div>
                    <Grid className="dicomenu-service">
                        <Row>
                            <Col>
                                <h1> Dicomenu</h1>
                                <h3>Vertalingen & verkopen van culinaire woordenboeken </h3>
                                <Image src={dicomenupic} alt="dicomenu" rounded responsive className="img"/>
                            </Col>
                        </Row>
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
                            <Col>
                                <Link to="www.dicomenu.com" className="mellow-btn cta-button" bsSize="large"> Bezoek de website</Link>
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
                            <Col className="webhosting" data-aos="zoom-in-up" data-aos-delay="1250">
                                <p>Enkele maanden na de release contaceerde ze ons opnieuw omdat ze toch vonden dat de laadtijd van hun website gehost
                                    op een goedkope buitenlandse hosting niet zo snel was...</p>
                                <p>We hebben de volledige website vervolgens overgezet naar onze webhosting server en dit resulteerde in een laadtijd van bijna <strong>3,5 seconde</strong> sneller !!!
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        );
    }
}

export default ServiceDicomenu;