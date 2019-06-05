import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';
import emailmarketing from '../../images/emailmarketing.png';

class Grafisch extends Component {

    render() {

        return (
                <div className="grafisch-email">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h1>Grafisch werk</h1>
                                <Col md={6} xs={12}>
                                    <h2>Logo design & huisstijl</h2>
                                    <p>
                                        Uw huisstijl bepaalt uw imago.
                                        Juist daarom vinden wij het zeer belangrijk dat er voldoende aandacht aan wordt geschonken. </p>
                                    <p>Wij denken hierbij na over een sterke look & feel
                                        zodat u een visuele identiteit krijgt die voor de volle 100% bij u past. Denk hierbij aan een stijlvol logo of een nieuwe branding.
                                        <br/>
                                        Wilt u deze verder door trekken? Wij maken ook smaakvolle business kaartjes of stickers.
                                    </p>
                                </Col>
                                <Col md={6} xs={12}>
                                </Col>
                            </Col>
                        </Row>
                        <Row className="marketing-email">
                            <Col xs={12}>
                                <h1>Marketings emails</h1>
                            </Col>
                            <Col md={6} xs={12}>
                                <Image className="emailmarketing-image" src={emailmarketing}/>
                            </Col>
                            <Col md={6} xs={12}>
                                <p>Klanten en prospects kan je snel en makkelijk bereiken via e-mail marketing. Denk bijvoorbeeld aan een nieuwsletter van je bedrijf, of om je producten en of
                                    kortingsacties hierop aan te prijzen.
                                </p>
                                <br/>
                                <p>
                                    E-mails versturen kan op heel wat manieren: een klassiek berichtje of een een campagnemail met jouw logo en volledig in de stijl van je branding.
                                    Wij voegen hierbij stukjes code zodat de emails slimmer worden en je kan nagaan bijvoorbeeld wie de emails opent, waar en wanneer er wordt doorgeklikt.
                                </p>
                                <br/>
                                <p>Dit is zonder meer interessant om te kijken wat werkt en wat niet. Dit om jouw meer business op te leveren.
                                    Zo kan je gericht je doelgroep benaderen en je kansen op succes maximaliseren.
                                </p>
                                <br/>
                            </Col>
                        </Row>
                    </Grid>
                    <CallToAction/>
                </div>
        );
    }
}

export default Grafisch;