import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Responsive from '../ICONS/Responsive';
import Webdev from '../ICONS/Webdev';
import Social from '../ICONS/Social';

class ServiceAboutHome extends Component {
    render() {
        return (
                <div className="service-home">
                    <Grid>
                        <Row className="weetjes">
                            <Col><h1 className="service-home-head">
                                Over Mellowwebdesign
                            </h1></Col>
                            <Col xs={12} md={4} className="service-tile">
                                <div className="icon-margin1">
                                    <Responsive/>
                                </div>
                                <h2>Webdesign</h2>
                                <p>Websites maken is onze eerste grote liefde maar ook een stijlvol grafisch ontwerp van jouw is bij Mellow in goede handen. </p>

                            </Col>
                            <Col xs={12} md={4} className="service-tile">
                                <div className="icon-margin">
                                    <Webdev/>
                                </div>
                                <h2>Webdevelopment</h2>
                                <p> Landingspagina's, website, webshops ... Noem maar op, wij kunnen het maken voor jou!</p>
                            </Col>
                            <Col xs={12} md={4} className="service-tile">
                                <div className="icon-margin">
                                    <Social/>
                                </div>
                                <h2>Online marketing</h2>
                                <p> Facebook & LinkedIn pagina's? Of Liever gepersonaliseerde marketing emails... Wij kunnen het!</p>
                            </Col>
                        </Row>
                        <Link to="/contact"/>
                    </Grid>
                </div>
        );
    }
}

export default ServiceAboutHome;