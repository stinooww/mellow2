import React, {Component} from 'react';
import {Button, Col, Grid, Row} from "react-bootstrap";
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
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                            <Col xs={12} md={4} className="service-tile">
                                <div className="icon-margin">
                                    <Webdev/>
                                </div>
                                <h2>Webdevelopment</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                            <Col xs={12} md={4} className="service-tile">
                                <div className="icon-margin">
                                    <Social/>
                                </div>
                                <h2>Social media</h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                        </Row>
                        <Link to="/contact"/>
                    </Grid>
                </div>
        );
    }
}

export default ServiceAboutHome;