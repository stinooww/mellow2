import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import SeoAnalyse from '../../components/SEOanalyse/SeoAnalyse';
import Google from '../../images/google.png';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
AOS.init();

class SEO extends Component {
  ref = React.createRef();

  render() {
    let tooltip2 = (
      <Tooltip>
        <strong>De tekst die u krijgt te zien in bij de zoekresultaten.</strong>{' '}
        Deze moet m.a.w. goed geschreven zijn, kernwoorden bevatten en ook nog
        eens aanzetten tot doorklikken.
      </Tooltip>
    );
    let tooltip1 = (
      <Tooltip>
        <strong>
          Je titels en tussentitels mogen al eens een zoekwoord bevatten.
        </strong>{' '}
        Probeer dit wel niet in altijd te doen. Je wilt ook geen
        overoptimalisatie krijgen.!
      </Tooltip>
    );
    let tooltip3 = (
      <Tooltip>
        <strong>
          Dit is de titel die je Google laat lezen als titel van de pagina.{' '}
        </strong>{' '}
        Geef duidelijk aan waarover je pagina gaat en dit in maximaal 70
        karakters.
      </Tooltip>
    );
    let tooltip4 = (
      <Tooltip>
        <strong>Geef alle afbeeldingen op je website een alt-tag.</strong> Dit
        is de beschrijving die men te zien krijgt als de afbeelding niet moest
        inladen.
      </Tooltip>
    );
    return (
      <div className="PortfolioPage seo">
        <Helmet>
          <title>Seo optimalisatie - mellow webdesign development</title>
        </Helmet>
        <Grid>
          <Row className="section--belang">
            <Col xs={12}>
              <h2>Het belang van eerste te staan in Google</h2>
              <p>
                We gebruiken allemaal regelmatig bekende zoekmachines zoals Bing
                of Google. Je zit bijvoorbeeld met een vraag of je wilt de
                openingsuren van een plek te weten komen.
              </p>
              <Image className="img-google" src={Google} responsive />

              <p>
                Daarom is het belangrijk om zo hoog mogelijk te scoren in deze
                zoekmachines. Want je wilt niet op de 2de of 3de pagina
                verschijnen in de zoekresultaten ... want laten we eerlijk zijn,
                daar kijkt bijna niemand op. Je wilt liefst op de eerste plaats
                verschijnen als men een antwoord zoekt waarop jij een oplossing
                kan bieden!
              </p>
            </Col>
          </Row>

          <Row className="seo__voordelen">
            <h2>Onze manier van aanpak:</h2>
            <Col md={12} className="seo-stappen">
              <aside>
                <article
                  data-aos="flip-left"
                  data-aos-easing="ease-in"
                  data-aos-delay="140"
                  data-aos-duration="800"
                >
                  <h3 className="seo-stappen-head"> 1</h3>
                  <strong className="seo__subtitle">Analyse</strong>
                  <p>
                    <br />
                    We starten met een keyword-analyse. Dit doen we om de
                    trefwoorden te zoeken die uw potentiële klanten gebruiken in
                    Google en met welke woorden jijzelf hoog wil scoren.
                  </p>
                  <p>
                    <br />
                    Zo kunnen we jouw ideale doelgroep op uw website laten
                    belanden.
                  </p>
                </article>
                <article
                  data-aos="flip-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="140"
                  data-aos-duration="800"
                >
                  <h3>2</h3>
                  <strong className="seo__subtitle">
                    Content optimalisatie
                  </strong>
                  <p>
                    <br />
                    We bekijken de content die zich op uw website bevinden zoals
                    zoekwoorden in titels en teksten en passen dit aan.
                    <br />
                  </p>
                  <br />
                  <p>
                    Ook checken we of de website volledig mobiel beschikbaar is
                    en kijken of de afbeeldingen snel genoeg inladen waardoor de
                    laadsnelheid ook merkbaar verbeterd.
                  </p>
                  {/*<ul className="col-md-6">*/}
                  {/*  <OverlayTrigger placement="right" overlay={tooltip1}>*/}
                  {/*    <li bsstyle="default">titels</li>*/}
                  {/*  </OverlayTrigger>*/}
                  {/*  <OverlayTrigger placement="right" overlay={tooltip2}>*/}
                  {/*    <li bsstyle="default">meta tags</li>*/}
                  {/*  </OverlayTrigger>*/}
                  {/*  <OverlayTrigger placement="right" overlay={tooltip3}>*/}
                  {/*    <li bsstyle="default">alt tags</li>*/}
                  {/*  </OverlayTrigger>*/}
                  {/*  <OverlayTrigger placement="right" overlay={tooltip4}>*/}
                  {/*    <li bsstyle="default">title tags</li>*/}
                  {/*  </OverlayTrigger>*/}
                  {/*</ul>*/}
                </article>
                <article
                  data-aos="flip-right"
                  data-aos-easing="ease-in"
                  data-aos-delay="140"
                  data-aos-duration="800"
                >
                  <h3>3</h3>
                  <strong className="seo__subtitle">
                    Technische optimalisatie
                  </strong>
                  <p>
                    <br />
                    Tenslotte voegen we verschillende stukjes code toe aan de
                    website, zodat de zoek robots van Google gemakelijker door
                    uw website kunnen navigeren.
                    <br />
                  </p>
                </article>
              </aside>
            </Col>
            <Col md={12}>
              <p className="text-center">
                Op deze manier krijgt u meer bezoekers en scoort uw site hoger
                in Google, <br />
                wat uw ook weer meer bezoekers en dus potentiële klanten
                oplevert.
              </p>
            </Col>
          </Row>
          {/*<Row>*/}
          {/*  <Col lg={12}>*/}
          {/*    <Col xs={12} className="seoDescription-wrapper">*/}
          {/*      <Image className="img-seo" src={Graphic} responsive/>*/}
          {/*    </Col>*/}
          {/*    <p>*/}
          {/*      Heb je toch meer interesse in Goolge advertising?*/}
          {/*      <br />{' '}*/}
          {/*      <a className="sea-link" href="#sea">*/}
          {/*        Dan kan je inzetten op een SEA-campagne*/}
          {/*      </a>*/}
          {/*      .*/}
          {/*    </p>*/}

          {/*  </Col>*/}
          {/*</Row>*/}
        </Grid>
        <div data-aos="zoom-in-down" className="container-fluid">
          <Row className="seo-cta">
            <Col md={6} sm={12}>
              <h2>Wilt u graag weten hoe uw website er voor staat?</h2>
              <p>
                Vul dan hier uw gegevens in, wij kijken uw website grondig na en
                sturen een volledig analyse rapport samen met een offerte naar u
                op!
              </p>
            </Col>
            <SeoAnalyse />
          </Row>
        </div>

        <Grid>
          <Row className="sea-context" id="sea">
            <Col md={12}>
              <h2>Snel gezien met SEA</h2>
              <p>
                Dankzij SEA (Search Engine Advertising) verschijnt uw boodschap
                , uw aanwezigheid op Google helemaal bovenaan. U kiest zelf
                welke zoektermen het meest relevant zijn voor uw bedrijf en die
                uw advertentie kan triggeren.
                <br />
                <strong>
                  Voor deze advertenties betaalt u dus alleen als iemand op uw
                  advertentie klikt!{' '}
                </strong>
              </p>
              <p>
                Concreet gaan we een zeer doelgerichte advertensie voor uw
                website maken waarbij we rekening houden met enkele parameters
                zoals locatie, apparaat en de termen waarop u gevonden wil
                worden. U krijgt hier ook zeer snel resultaten van, die een
                groot voordeel zijn van pay-per-clickadvertenties.
              </p>
            </Col>
            <Col md={12}>
              <p className="sea-shoutout">
                Het is dus een vlotte en efficiënte manier om meer bezoekers,
                inclusief nieuwe klanten, naar uw website te leiden!
              </p>
            </Col>
          </Row>
        </Grid>
        <ScrollUpButton />
      </div>
    );
  }
}
export default SEO;
