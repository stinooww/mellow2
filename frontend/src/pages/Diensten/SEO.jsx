import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';
import SeoAnalyse from '../../components/SEOanalyse/SeoAnalyse'
import Google from '../../images/google.png';
import Graphic from '../../images/graphic.png';

class SEO extends Component {

    render() {

        return (
                <div className="PortfolioPage seo">
                    <Grid>
                        <Row>
                            <Col md={4} xs={12}>
                                <Image className="img-google" src={Google} responsive/>
                            </Col>
                            <Col md={8} xs={12}>
                                <h2>Wat is SEO en wat doet het ?</h2>
                                <p>We gebruiken allemaal regelmatig bekende zoekmachines zoals Bing of Google. Je zit bijvoorbeeld met een vraag of je wilt de openingsuren van een plek te weten
                                    komen.</p>
                                <p>
                                    Daarom is het belangrijk om zo hoog mogelijk te scoren in deze zoekmachines. Want eerlijk waar je wilt niet op de 2de of 3de pagina verschijnen want daar kijkt
                                    niemand op.
                                    Je wil liefst op de eerste plaats verschijnen als men een antwoord zoekt waarop jij een oplossing kan bieden! </p>
                                <p>Omdat het enkele weken duurt voordat SEO begint te werken zal niet meteen resultaat. SEO optimalisaties is dus een lange termijn verhaal.
                                    Hoe beter de optimalisatie, hoe beter Google jouw website gaat scoren en dus hoger zal ranken.
                                </p> <p>Wil je toch liever op kortere termijn bovenaan de zoekresultaten verschijnen, <br/> <a className="sea-link" href="#sea">kan je inzetten op een SEA-campagne</a>.
                            </p>
                            </Col>
                        </Row>
                        <SeoAnalyse/>
                        <Row>
                            <Col md={6} xs={12}>
                                <h2>Wat we allemaal doen</h2>
                                <p>We gebruiken allemaal regelmatig bekende zoekmachines zoals Bing of Google. Je zit bijvoorbeeld met een vraag of je wilt de openingsuren van een plek te weten
                                    komen.</p>
                                <p>
                                    Daarom is het belangrijk om zo hoog mogelijk te scoren in deze zoekmachines. Want eerlijk waar je wilt niet op de 2de of 3de pagina verschijnen want daar kijkt
                                    niemand op.
                                    Je wil liefst op de eerste plaats verschijnen als men een antwoord zoekt waarop jij een oplossing kan bieden! </p>
                                <p>Omdat het enkele weken duurt voordat SEO begint te werken zal niet meteen resultaat. SEO optimalisaties is dus een lange termijn verhaal.
                                    Hoe beter de optimalisatie, hoe beter Google jouw website gaat scoren en dus hoger zal ranken.
                                </p> <p>Wil je toch liever op kortere termijn bovenaan de zoekresultaten verschijnen, <br/> <a className="sea-link" href="#sea">kan je inzetten op een SEA-campagne</a>.
                            </p>
                            </Col>
                            <Col md={6} xs={12}>
                                <Image className="img-google" src={Graphic} responsive/>
                            </Col>
                        </Row>
                        <CallToAction/>
                    </Grid>
                </div>
        );
    }
}

export default SEO;