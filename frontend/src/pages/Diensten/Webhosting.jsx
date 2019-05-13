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
                            <h2>Waarom een onderhouds pakket ?</h2>
                            <br/>
                            <Col xs={12}>
                                <p>Een website creëren, stopt niet bij de ontwikkeling ervan. Ook na de lancering is het belangrijk dat je website goed wordt onderhouden. Hiervoor bieden we een
                                    onderhoudspakket aan.
                                    Dit is nodig omdat in de website verschillende plugins steken die zorgen voor allerlei functionaliteit van de website. Deze moeten op regelmatige basis worden
                                    geupdate zodat ze goed kunnne blijven werken.
                                </p>
                                <br/>
                                <p>
                                    Ook houden we je website beschermt tegen hackers om te voorkomen dat cyberaanvallen je webpagina aantasten. We nemen bovendien regelmatig een backup zodat de inhoud
                                    en structuur van je website nooit verloren gaan.
                                </p>
                                <br/>
                                <p> Wat we daarbovenop ook daarbij steken zijn kleine aanpassingen aan de website zelf: wil je graag een afbeelding veranderen, of dat stukje tekst over jezelf
                                    aanpassen. Dit doen we kosteloos!
                                </p>
                            </Col>
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

                    </Grid>
                    <CallToAction/>
                </div>
        );
    }
}

export default Webhosting;