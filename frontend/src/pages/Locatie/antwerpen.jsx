import React, { Component } from 'react';
import { Carousel, CarouselItem, Col, Grid, Row } from 'react-bootstrap';

class antwerpen extends Component {
  render() {
    return (
      <Grid className="locaties">
        <Row>
          <Col md={12} className="locaties__head text-center">
            <h1>Website laten maken in Antwerpen</h1>
            <h2>Wij bouwen uw professionele website in Antwerpen</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="locaties__intro">
            <p>
              Wil je graag een nieuwe website laten maken in Antwerpen of ben je
              op zoek naar een nieuw webdesign bedrijf uit Antwerpen om mee
              samen te werken?
            </p>
            <p>
              Kies dan voor Mellow webdesign development, een web agency uit
              Antwerpen (Edegem) gespecialiseerd in het maken van professionele
              en gebruiksvriendelijke websites.
            </p>
            <h3>Wij ontwerpen gebruiksvriendelijke websites op maat</h3>
            <p>
              Daarbovenop scoren al onze websites goed op Google! Bovendien
              hebben wij een aanbod voor online marketing zoals SEO, SEA en
              andere advertising op social media.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="locaties__center-text">
            <h3>Een website die er goed uitziet op alle toestellen</h3>
            <p>
              Sinds enkele jaren zijn smartphones en tablets niet meer weg te
              denken uit onze moderne maatschappij daarom is het belangrijk dat
              je website op al deze toestellen goed werkt. Wist je dat ongeveer
              70% van de eerste website bezoeken gebeurd via je smartphone?
              Daarom is een mobiel vriendelijkse website een must
            </p>

            <h3> Wil je je website zelf aanpassen?</h3>
            <p>
              Dat kan! Al onze websites worden gemaakt in Wordpress CMS, een
              gebruiksvriendelijk beheersysteem waarin je gemakkelijk pagina's
              kan toevoegen of aanpassen. Zo pas je vlot zelf je openingsuren
              aan, voeg je nieuwe producten toe aan je webshop of verander je de
              foto's op je homepagina.
            </p>
          </Col>
          <Col md={12} className="locaties__end-text">
            <h3>
              Zit je even vast bij een aanpassing dan kan je ons altijd gratis
              contacteren en helpen we je met plezier verder!
            </h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default antwerpen;
