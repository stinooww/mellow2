import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Contactform from '../../components/Contactform/Contactform';

class Contact extends Component{


    render() {


        return (
            <Grid>
                <Row className="contact-intro">
                    <Col xs={12} md={12} sm={12}>
                       <p>
                           Vraag ons gerust om
                           een vrijblijvende offerte op maat.
                           Wij contacteren u binnen de 24 uur!
                       </p>

                    </Col>


                        <Col md={4} className="contact-section">
                            <h4> Maatschappelijke zetel </h4>
                            <ul>
                                <li> Mellow webdesign & Development</li>
                                <li>Jan De Sadelerlaan 22</li>
                                <li>2650 Edegeme</li>
                            </ul>


                            <h4>
                                Contact
                            </h4>

                            <ul>
                                <li>
                                    Stijn Heynderickx

                                </li>
                                <li>
                                    Email: <a href="mailto:stijn@mellowwebdesign.be">stijn@mellowwebdesign.be</a>

                                </li>
                                <li>

                                    Tel: +32 486 79 12 43
                                </li>


                            </ul>
                            <ul>
                                <li>
                                    Jonas Van Loey
                                </li>
                                <li>
                                    Email: <a href="mailto:jonas@mellowwebdesign.be">jonas@mellowwebdesign.be</a>
                                </li>
                                <li>
                                    Tel: +32 471 47 53 45
                                </li>
                            </ul>

                            <h4>Social media</h4>
                            <ul>
                                <li> Facebook</li>
                                <li>Linkedin</li>
                                <li>email</li>
                            </ul>




                        </Col>


                    <Col xs={12} sm={8} md={8}>
                        <h3>Contact formulier</h3>
                        <hr/>
                        <Contactform />
                    </Col>

                </Row>
            </Grid>

        )
    }
}

export default Contact;