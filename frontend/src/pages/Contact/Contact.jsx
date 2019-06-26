import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Reactcontactform from '../../components/Contactform/Reactcontactform';

import MessengerCustomerChat from 'react-messenger-customer-chat';

class Contact extends Component {

    render() {

        return (
                <Grid>
                    <MessengerCustomerChat
                            pageId="342021876162625"
                            appId="342021876162625"
                            themeColor="#efc337"
                            language="nl_NL"
                            loggedInGreeting="Hallo! Waarmee kunnen wij je helpen?"
                            loggedOutGreeting="Hallo! Waarmee kunnen wij je helpen?"
                            version="v3.2"
                    />,
                    {/*<div id="fb-root" />
                https://github.com/Yoctol/react-messenger-customer-chat
                */}
                    {/*window.fbAsyncInit = function() {*/}
                    {/*FB.init({*/}
                    {/*xfbml            : true,*/}
                    {/*version          : 'v3.2'*/}
                    {/*})*/}
                    {/*};*/}
                    {/*(function(d, s, id) {*/}
                    {/*const js, fjs = d.getElementsByTagName(s)[0];*/}
                    {/*if (d.getElementById(id)) return;*/}
                    {/*js = d.createElement(s); js.id = id;*/}
                    {/*js.src = 'https://connect.facebook.net/nl_NL/sdk/xfbml.customerchat.js';*/}
                    {/*fjs.parentNode.insertBefore(js, fjs);*/}
                    {/*}(document, 'script', 'facebook-jssdk'));*/}
                    {/*<!-- Your customer chat code -->*/}
                    {/*<div class="fb-customerchat"*/}
                    {/*attribution=setup_tool*/}
                    {/*page_id="342021876162625"*/}
                    {/*theme_color="#efc337"*/}
                    {/*logged_in_greeting="Hallo! Waarmee kunnen wij je helpen?"*/}
                    {/*logged_out_npm audit fixgreeting="Hallo! Waarmee kunnen wij je helpen?">*/}
                    {/*</div>*/}
                    <Row className="contact">
                        <Col xs={12} md={12} sm={12}>
                            <h2 className="contact-header">
                                Hebt u een vraag?
                            </h2>
                            <p>
                                Wij contacteren u binnen de 24 uur!
                            </p>
                        </Col>
                    </Row>
                    <Row className="contact">
                        <Col md={6} sm={12} className="contact-section">
                            <div>
                                <h4> Maatschappelijke zetel </h4>
                                <ul>
                                    <li> Mellow webdesign & Development</li>
                                    <li>Jan De Sadelerlaan 22</li>
                                    <li>2650 Edegem</li>
                                </ul>
                            </div>
                            <div>
                            <h4>
                                Contact ons
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
                            </div>
                            <div>
                            <h4>Social media</h4>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/mellowwebdesign">
                                        <i id="social-fb" className="fa fa-facebook-square fa-3x social"/></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/mellow-webdesign">
                                        <i id="social-tw"
                                           className="fa fa-linkedin-square fa-3x social"/></a></li>

                            </ul>
                            </div>

                        </Col>
                        <Col md={6} sm={12}>

                            <Reactcontactform/>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </Grid>

        )
    }
}

export default Contact;