import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Webhosting extends Component {

    render() {

        return (
                <div className="Diensten">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h1>Onze Onderhouds pakketten</h1>
                                <PricingTable highlightColor='#1976D2'>
                                    <PricingSlot title='Wat zit er in?' priceText='website abonnementen'>
                                        <PricingDetail> Wordpress core updates</PricingDetail>
                                        <PricingDetail> Plugin updates</PricingDetail>
                                        <PricingDetail> Thema updates</PricingDetail>
                                        <PricingDetail> Database optimalisatie</PricingDetail>
                                        <PricingDetail> (Externe) Back-ups</PricingDetail>
                                        <PricingDetail> Opschonen SPAM en Malware</PricingDetail>
                                        <PricingDetail> Beveiliging (SSL certificaat)</PricingDetail>
                                        <PricingDetail> Web-Hosting ( Belgische hosting)</PricingDetail>
                                        <PricingDetail> Webshop (Woocommerce)</PricingDetail>
                                        <PricingDetail> Snelheidsoptimalisatie</PricingDetail>
                                        <PricingDetail> Support</PricingDetail>
                                    </PricingSlot>
                                    <PricingSlot onClick={this.submit} buttonText='Start onderhoud' title='STANDAARD' priceText='35 EUR/maand'>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="red" icon={faTimes}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="red" icon={faTimes}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="red" icon={faTimes}/></PricingDetail>
                                        <PricingDetail> <b>30 min</b> per maand</PricingDetail>
                                        {/*<PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>*/}
                                    </PricingSlot>
                                    <PricingSlot highlighted onClick={this.submit} buttonText='Start onderhoud' title='ADVANCED' priceText='50 EUR/maand'>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="red" icon={faTimes}/></PricingDetail>
                                        <PricingDetail> <b>60 min</b> per maand</PricingDetail>
                                    </PricingSlot>
                                    <PricingSlot onClick={this.submit} buttonText='Start onderhoud' title='PROFESSIONAL' priceText='69/maand'>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <FontAwesomeIcon size="sm" className="green" icon={faCheck}/></PricingDetail>
                                        <PricingDetail> <b>120 min</b> per maand</PricingDetail>
                                    </PricingSlot>
                                </PricingTable>
                                <p>Al onze prijzen zijn exclusief btw</p>
                                <br/>
                            </Col>
                        </Row>
                        <CallToAction/>
                    </Grid>
                </div>
        );
    }
}

export default Webhosting;