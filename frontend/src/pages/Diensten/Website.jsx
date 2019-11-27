import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ disable: 'phone' });

const Website = () => (
  <div className="website">
    <Grid>
      <Row>
        <Col xs={12} className="waarom-website-txt">
          <h2> Waarom zou u een website nodig hebben voor uw onderneming?</h2>
          <p>
            Een website zorgt ervoor dat u als ondernemer altijd online bent
            vertegenwoordigd.
          </p>

          <p>
            Het geeft een eigen identiteit en is een digitaal visitekaartje. Wij
            proberen hierbij zo goed mogelijk uw idee te visualiseren en op een
            boeiende manier aan al uw toekomstige bezoekers duidelijk te maken
            wat uw bedrijf doet.
          </p>
          <strong>
            Want in een wereld van verandering is een digitale aanwezigheid
            belangrijk!
          </strong>
          <p>
            Hebt u nog geen website of bent u niet 100% tevreden van uw huidige
            website? Dan lossen wij dit graag voor u op.
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
          <h3>Uw website mobiel beschikbaar!</h3>
          <p>
            In een tijdperk waarin smartphones niet meer weg te denken zijn uit
            ons dagelijks leven, is een mobiele website een absolute must !
          </p>
          <p>
            <strong>
              Wist u dat meer dan 60 procent van de websitebezoekers...
            </strong>{' '}
            uw website zal bezoeken met een smartphone of Ipad?
          </p>
          <p>
            Mobile beschikbare websites scoren bovendien ook hoger in de
            ranglijst van Google.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="website__besluit">
          <h3 className="text-center">
            Dus als uw website niet responsief is tegenover die van uw
            concurrent, dan geeft Google voorrang aan uw concurrent!
          </h3>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Website;
