import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button, OverlayTrigger} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';
import SeoAnalyse from '../../components/SEOanalyse/SeoAnalyse'
import Google from '../../images/google.png';
import Graphic from '../../images/graphic.png';

class SEO extends Component {

    ref = React.createRef();
    metaDescription = () => (
            <OverlayTrigger
                    placement="right-start"
                    delay={{
                        show: 250,
                        hide: 400
                    }}
                    overlay={this.renderTooltip}
                    ref={this.ref}
            >
                <li> Meta description</li>
            </OverlayTrigger>
    );
    renderTooltip = props => (
            <div
                    {...props}
                    ref={this.ref}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        padding        : '2px 10px',
                        color          : 'white',
                        borderRadius   : 3,
                        ...props.style,
                    }}
            >
                de tekst die je krijgt te zien in bij de zoekresultaten.
                Deze moet m.a.w. goed geschreven zijn, kernwoorden bevatten en ook nog eens aanzetten tot doorklikken.
            </div>
    );
    render() {
        return (
                <div className="PortfolioPage seo">
                    <Grid>
                        <Row>
                            <Col md={4} xs={12}>
                                <Image className="img-google" src={Google} responsive/>
                            </Col>
                            <Col md={8} xs={12}>
                                <h2>Het belang van eerste te staan in Google</h2>
                                <p>We gebruiken allemaal regelmatig bekende zoekmachines zoals Bing of Google. Je zit bijvoorbeeld met een vraag of je wilt de openingsuren van een plek te weten
                                    komen.</p>
                                <p>
                                    Daarom is het belangrijk om zo hoog mogelijk te scoren in deze zoekmachines. Want je wilt niet op de 2de of 3de pagina verschijnen in de zoekresultaten want daar
                                    kijkt
                                    niemand op.
                                    Je wil liefst op de eerste plaats verschijnen als men een antwoord zoekt waarop jij een oplossing kan bieden! </p>
                                <p>Omdat het enkele weken duurt voordat SEO begint te werken zal je dit resultaat niet meteen zien. Zoekmachine optimalisatie oftwel SEO is dus een lange termijn
                                    verhaal.
                                    Hoe beter de optimalisatie => hoe beter Google jouw website gaat scoren en dus hoger zal ranken => en hoe meer je wordt gevonden door potentiële klanten die
                                    effectief op zoek zijn en dus interesse tonen.
                                </p>
                                <p>Wil je toch liever op kortere termijn bovenaan de zoekresultaten verschijnen, <br/> <a className="sea-link" href="#sea">kan je inzetten op een SEA-campagne</a>.
                            </p>
                            </Col>
                        </Row>
                        <SeoAnalyse/>
                        <Row>
                            <Col md={12} className="seo-stappen">
                                <aside>
                                    <article>
                                        <h3 className="seo-stappen-head"> 1</h3>
                                        <p>
                                            <strong>Analyse</strong>
                                            <br/>
                                            We starten met een keyword-analyse.
                                            Dit doen we om de trefwoorden te zoeken die je potentiële klanten gebruiken in Google
                                            en welke woorden jijzelf hoog wil scoren.
                                            Zo kunnen we jouw ideale doelgroep op je website laten belanden.
                                        </p>
                                    </article>
                                    <article>
                                        <h3>2</h3>
                                        <p>
                                            <strong>
                                                Content optimalisatie
                                            </strong>
                                            <br/>
                                            We bekijken de content die op je website zich bevind zoals zoekwoorden in titels en teksten en passen dit aan.
                                            we voegen enkele zaken toe aan je website zoals:
                                            <ul>
                                                <metaDescription/>
                                            </ul>
                                            , title tags, alt tags
                                        </p>
                                    </article>
                                    <article>
                                        <h3>3</h3>
                                        <p>
                                            <strong>
                                                Technische optimalisatie
                                            </strong>
                                            Tenslotte voegen we ook verschillende stukjes code toe aan de website,
                                            zodat zoek robots gemakelijker door de site kunnen navigeren.
                                            We dubbel checken of de website volledig mobiel beschikbaar is en kijken of de afbeeldingen snel genoeg inladen
                                            waardoor de laadsnelheid ook merkbaar verbeterd.
                                        </p>
                                    </article>
                                </aside>



                            </Col>
                            <Col md={12}>
                                <p> Op deze manier krijg je meer bezoekers en scoor je hoger in Google,
                                    wat jou ook weer meer bezoekers en dus potentiële klanten oplevert.</p>
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