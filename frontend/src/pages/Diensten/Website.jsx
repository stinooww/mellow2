import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ disable: 'phone' });

class Website extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="website">
        <Grid>
          <Row>
            <Col xs={12} className="waarom-website-txt">
              <h1> Heb ik een website nodig voor mijn onderneming?</h1>

              <p>
                Ons antwoord: ja! Je ideale klant zit steeds meer online.
                Dankzij een website ben je altijd online vertegenwoordigd. Zo
                kan je ideale klant je veel makkelijker vinden.
              </p>
              <p className="waarom-website-txt__call">
                Je website is het uithangbord van je merkidentiteit. Je digitale
                visitekaartje als het ware.
              </p>
              <p className="callout">
                Onze missie? Jouw identiteit en visie zo goed mogelijk vertalen
                naar je website. Zodat je klanten op een boeiende en duidelijke
                manier te weten komen wat jouw bedrijf voor hen kan betekenen.
              </p>

              <p>
                In een wereld van verandering is digitale aanwezigheid
                onmisbaar! Heb je nog geen website? Of ben je niet helemaal
                tevreden van je huidige? We maken er graag een zoals jij het
                wilt.
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              sm={12}
              md={7}
              className="mobile-responsive mobile-responsive__img"
            >
              {/*data-aos="fade-up-right"*/}
              <div className="mobile-img" />
            </Col>
            <Col
              sm={12}
              md={4}
              className="mobile-responsive mobile-responsive__text img-fluid"
              // data-aos="fade-up-left"
              // data-aos-mirror="true"
            >
              <h3>Je website mobiel beschikbaar!</h3>
              <p>
                Online vertegenwoordigd zijn is één ding. Ervoor zorgen dat je
                website ook mobiel goed functioneert is iets anders! Smartphones
                nemen steeds meer plek in ons dagelijks leven in. Zo gebruiken
                je klanten ook steeds meer hun telefoon om te surfen. Is je
                website niet mobielvriendelijk? Jammer, je klant surft
                genadeloos verder.
              </p>
              <p>
                <strong>
                  Wist je dat meer dan 60% van je bezoekers naar je website
                  surft met een smartphone of tablet?{' '}
                </strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="website__besluit">
              <h3 className="text-center">
                En er is nog een voordeel: met een mobielvriendelijke website
                scoor je hoger in de zoekresultaten van Google! Zo heb je een
                streepje voor op je concurrenten Een mobiele website is dus een
                must!
              </h3>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Website;
