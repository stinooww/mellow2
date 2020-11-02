import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import SeoAnalyse from '../../components/SEOanalyse/SeoAnalyse';
import Google from '../../images/google.png';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
AOS.init();

class SEO extends Component {
  ref = React.createRef();

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    // let tooltip2 = (
    //   <Tooltip>
    //     <strong>De tekst die u krijgt te zien in bij de zoekresultaten.</strong>{' '}
    //     Deze moet m.a.w. goed geschreven zijn, kernwoorden bevatten en ook nog
    //     eens aanzetten tot doorklikken.
    //   </Tooltip>
    // );
    // let tooltip1 = (
    //   <Tooltip>
    //     <strong>
    //       Je titels en tussentitels mogen al eens een zoekwoord bevatten.
    //     </strong>{' '}
    //     Probeer dit wel niet in altijd te doen. Je wilt ook geen
    //     overoptimalisatie krijgen.!
    //   </Tooltip>
    // );
    // let tooltip3 = (
    //   <Tooltip>
    //     <strong>
    //       Dit is de titel die je Google laat lezen als titel van de pagina.{' '}
    //     </strong>{' '}
    //     Geef duidelijk aan waarover je pagina gaat en dit in maximaal 70
    //     karakters.
    //   </Tooltip>
    // );
    // let tooltip4 = (
    //   <Tooltip>
    //     <strong>Geef alle afbeeldingen op je website een alt-tag.</strong> Dit
    //     is de beschrijving die men te zien krijgt als de afbeelding niet moest
    //     inladen.
    //   </Tooltip>
    // );
    return (
      <div className="PortfolioPage seo">
        <Helmet>
          <title>Seo optimalisatie - mellow webdesign development</title>
        </Helmet>
        <Grid>
          <Row className="section--belang">
            <Col xs={12}>
              <h2>Waarom het belangrijk is bovenaan te staan in Google</h2>
              <p>
                Je gebruikt waarschijnlijk zelf vaak zoekmachines zoals Google
                of Bing. Je hebt bijvoorbeeld een specifieke vraag of je wilt
                weten wat de openingsuren van je favoriete restaurant zijn. Naar
                welke zoekresultaten kijk je? Juist: die op de eerste pagina.
                Die op de 2de of 3de pagina? Ehm, not so much.
              </p>
              <p>
                <strong>
                  Waar wil jij dat je klanten terechtkomen als ze iets intypen?
                  Juist: bij jou.
                </strong>
              </p>

              <p>
                Meer als 60% van de mensen die zoeken op Google klikt op een van
                de eerste 5 resultaten. Dus wil je meer leads krijgen ? Dan moet
                je hier tussen staan.
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
                    We starten met een zoekwoordenonderzoek (keywordanalyse). Zo
                    achterhalen we de trefwoorden die jouw potentiële klant in
                    Google intypt.
                  </p>
                  <p>
                    Met die woorden wil je dus zo hoog mogelijk scoren. Want
                    enkel zo vindt je ideale klant sneller de weg naar jouw
                    website.
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
                    We nemen de teksten en titels op je website onder de loep.
                    Zo weten we of de ideale trefwoorden al op je website staan
                    en of we nog wat moeten aanpassen.
                    <br />
                  </p>
                  <br />
                  <p>
                    Is je website volledig beschikbaar? Laden de afbeeldingen
                    snel genoeg in? Laadt je website snel genoeg? Ook dat kijken
                    we in deze stap na.
                  </p>
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
                    Google zet zoekrobots in om de inhoud van je website in
                    kaart te brengen. Om die robots makkelijker door je website
                    te laten navigeren (en je dus hoger in de ranking
                    verschijnt), voegen we verschillende stukjes code aan de
                    website toe.
                    <br />
                  </p>
                  <br />
                  <p>
                    Ten slotte maken we je bedrijf beschikbaar op Google My
                    business. Zo verschijnen jouw gegevens bij een zoekopdracht
                    niet alleen in de zoekresultaten, maar ook meteen op Google
                    Maps.
                  </p>
                </article>
              </aside>
            </Col>
            <Col md={12}>
              <p className="text-center seo__extraCta">
                Hoger scoren in Google = meer bezoeker = meer potentiële
                klanten!
              </p>
            </Col>
          </Row>
        </Grid>
        <div data-aos="zoom-in-down" className="container-fluid">
          <Row className="seo-cta">
            <Col md={6} sm={12}>
              <h2>Wil je graag weten hoe jouw website ervoor staat?</h2>
              <p>
                Vul dan hier je gegevens in. Wij nemen je website onder de loep
                en sturen je een volledige analyse samen met een offerte om je
                website hoger te doen scoren.
              </p>
            </Col>
            <SeoAnalyse />
          </Row>
        </div>

        <Grid>
          <Row className="sea-context" id="sea">
            <Col md={12}>
              <h2> Online adverteren met SEA</h2>
              <p>
                SEA staat voor Search Engine Advertising. Het zijn advertenties
                waarmee jouw boodschap helemaal bovenaan in Google prijkt. Je
                kiest zelf de zoekwoorden die het relevantst zijn voor je
                bedrijf. En wij zorgen ervoor dat je doelpubliek overstag gaat
                dankzij je advertenties. Moet ik voor die advertenties betalen?
                <br />
                <strong>
                  Je betaalt enkel als iemand op je advertentie klikt: pay per
                  click.
                </strong>
              </p>
              <p className="callout">
                Hoe zit dat dan concreet? We maken een advertentie die specifiek
                op jouw doelpubliek focust. We houden rekening met enkele
                parameters zoals locatie en specifieke eigenschappen en termen
                waarmee je gevonden wilt worden. En het resultaat? Dat zie
                dankzij pay per click vrij snel!
              </p>
            </Col>
            <Col md={12}>
              <p className="sea-shoutout">
                SEA is een vlotte, efficiënte manier om meer bezoekers en dus
                meer potentiële klanten naar je website te leiden.
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
