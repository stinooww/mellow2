import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';
import SeoAnalyse from '../../components/SEOanalyse/SeoAnalyse'
import Google from '../../images/google.png';
import Graphic from '../../images/graphic.png';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
class SEO extends Component {

    ref = React.createRef();

    render() {

        let tooltip2 = <Tooltip>
            <strong>De tekst die je krijgt te zien in bij de zoekresultaten.
        </strong> Deze moet m.a.w. goed geschreven zijn, kernwoorden bevatten en ook nog eens aanzetten tot doorklikken.</Tooltip>;
        let tooltip1 = <Tooltip><strong>Je titels en tussentitels mogen al eens een zoekwoord bevatten.</strong> Probeer dit wel niet in altijd te doen. Je wilt ook geen overoptimalisatie
            krijgen.!</Tooltip>;
        let tooltip3 = <Tooltip><strong>Dit is de titel die je Google laat lezen als titel van de pagina. </strong> Geef duidelijk aan waarover je pagina gaat en dit in maximaal 70
            karakters.</Tooltip>;
        let tooltip4 = <Tooltip>
            <strong>Geef alle afbeeldingen op je website een alt-tag.</strong> Dit is de beschrijving die men te zien krijgt als de afbeelding niet moest inladen.</Tooltip>;

        return (
                <div className="PortfolioPage seo">
                    <Grid>
                        <Row className="section--belang">
                            <Col md={4} xs={12}>
                                <Image className="img-google" src={Google} responsive/>
                            </Col>
                            <Col md={8} xs={12}>
                                <h2>Het belang van eerste te staan in Google</h2>
                                <p>We gebruiken allemaal regelmatig bekende zoekmachines zoals Bing of Google. Je zit bijvoorbeeld met een vraag of je wilt de openingsuren van een plek te weten
                                    komen.</p>
                                <p>
                                    Daarom is het belangrijk om zo hoog mogelijk te scoren in deze zoekmachines. Want je wilt niet op de 2de of 3de pagina verschijnen in de zoekresultaten ... want
                                    laten we eerlijk zijn, daar
                                    kijkt bijna niemand op.
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
                    </Grid>
                    <div data-aos="zoom-in-down" className="mt-4 mb-4 d-flex">
                        <SeoAnalyse/>
                    </div>
                    <Grid>
                        <Row className="seo__voordelen">
                            <Col xs={12}>
                                <Image className="img-seo" src={Graphic} responsive/>
                            </Col>
                            <Col md={12} className="seo-stappen">
                                <aside>
                                    <article data-aos="flip-left" data-aos-easing="ease-in-back"
                                             data-aos-delay="300"
                                             data-aos-duration="1000">
                                        <h3 className="seo-stappen-head"> 1</h3>
                                        <strong className="seo__subtitle">Analyse</strong>
                                        <p>
                                            <br/>
                                            We starten met een keyword-analyse.
                                            Dit doen we om de trefwoorden te zoeken die je potentiële klanten gebruiken in Google
                                            en welke woorden jijzelf hoog wil scoren.
                                            <br/>
                                            Zo kunnen we jouw ideale doelgroep op je website laten belanden.
                                        </p>
                                    </article>
                                    <article data-aos="flip-up" data-aos-easing="ease-in-back"
                                             data-aos-delay="300"
                                             data-aos-duration="1000">
                                        <h3>2</h3>
                                        <strong className="seo__subtitle">
                                            Content optimalisatie
                                        </strong>
                                        <p>
                                            <br/>
                                            We bekijken de content die op je website zich bevind zoals zoekwoorden in titels en teksten en passen dit aan.
                                            <br/>
                                            We voegen enkele zaken toe aan je website zoals:
                                            <br/>
                                            <ul className="col-md-6">
                                                <OverlayTrigger placement="right" overlay={tooltip1}>
                                                    <li bsStyle="default">titels</li>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="right" overlay={tooltip2}>
                                                    <li bsStyle="default">meta tags</li>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="right" overlay={tooltip3}>
                                                    <li bsStyle="default">alt tags</li>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="right" overlay={tooltip4}>
                                                    <li bsStyle="default">title tags</li>
                                                </OverlayTrigger>


                                            </ul>

                                        </p>
                                    </article>
                                    <article data-aos="flip-right" data-aos-easing="ease-in-back"
                                             data-aos-delay="300"
                                             data-aos-duration="1000">
                                        <h3>3</h3>
                                        <strong className="seo__subtitle">
                                            Technische optimalisatie
                                        </strong>
                                        <p>
                                            <br/>
                                            Tenslotte voegen we ook verschillende stukjes code toe aan de website,
                                            zodat zoek robots gemakelijker door de site kunnen navigeren.
                                            <br/>
                                            We dubbel checken of de website volledig mobiel beschikbaar is
                                            <br/>
                                            en kijken of de afbeeldingen snel genoeg inladen
                                            waardoor de laadsnelheid ook merkbaar verbeterd.
                                        </p>
                                    </article>
                                </aside>



                            </Col>
                            <Col md={12}>
                                <p className="text-center"> Op deze manier krijg je meer bezoekers en scoor je hoger in Google, <br/>
                                    wat jou ook weer meer bezoekers en dus potentiële klanten oplevert.</p>
                            </Col>
                        </Row>
                        <Row className="sea-context" id="sea">
                            <Col md={12}>
                                <h2>Snel gezien met SEA</h2>
                                <p>
                                    Dankzij SEA (Search Engine Advertising) verschijnt jouw boodschap , jouw aanwezigheid op Google helemaal bovenaan.
                                    Je kiest zelf welke zoektermen het meest relevant zijn voor je bedrijf en die je advertentie kan triggeren.
                                    <strong> Voor deze advertenties betaal je
                                        alleen als iemand op jouw advertentie klikt. </strong>
                                </p>
                                <p>Concreet gaan we een zeer doelgerichte advertensie voor je website maken waarbij we rekening houden met enkele parameters zoals locatie, apparaat en de termen waar
                                    je
                                    op gevonden wil worden.
                                    Je krijgt hier ook zeer snel resultaten van, die een groot voordeel zijn van pay-per-clickadvertenties.
                                </p>
                            </Col>
                            <Col md={12}>
                                <p className="text-center sea-shoutout"> Het is dus een vlotte en efficiënte manier om meer bezoekers, inclusief nieuwe klanten, naar jouw website te leiden!</p>
                            </Col>
                        </Row>
                    </Grid>
                    <ScrollUpButton/>
                    <CallToAction/>
                </div>
        );
    }
}

export default SEO;