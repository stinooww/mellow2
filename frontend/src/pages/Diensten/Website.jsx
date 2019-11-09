import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';

import AOS from 'aos';
import 'aos/dist/aos.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

AOS.init({ disable: 'phone' });

const Website = () => (
  <div className="website">
    <MessengerCustomerChat
      pageId="342021876162625"
      appId="342021876162625"
      htmlRef={window.location.pathname}
      loggedInGreeting="Hallo, waar kan ik je mee helpen?"
      themeColor="#efc337"
      language="nl_NL"
      xfbml={true}
    />
    <Grid>
      <Row>
        <Col xs={12} className="waarom-website-txt">
          <h2> Waarom zou je een website nodig hebben voor je onderneming?</h2>
          <p>
            Een website zorgt ervoor dat jij als ondernemer altijd online bent
            vertegenwoordigd.
          </p>
          <p>
            {' '}
            Het geeft je een eigen identiteit, je online visite kaartje zeg
            maar.{' '}
          </p>
          <p>
            Wij proberen hierbij zo goed mogelijk jouw idee of wat je doet te
            visualiseren <br /> en op een boeiende manier aan al je toekomstige
            bezoekers duidelijk te maken wat je doet.
          </p>
          <strong>
            {' '}
            Want in een wereld van verandering is een digtale aanwezigheid
            belangrijk!{' '}
          </strong>
          <p>
            Heb je nog geen website of ben je niet 100% tevreden van je huidige
            website? Dan lossen wij dit graag voor je op.
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
          <h3>Jouw website mobiel beschikbaar!</h3>
          <p>
            In een tijdperk waarin smartphones niet meer weg te denken zijn uit
            ons dagelijks leven, is een mobiele website een absolute must !
          </p>
          <p>
            <strong>
              Wist u dat meer dan 60 procent van de websitebezoekers...
            </strong>{' '}
            jouw website zal bezoeken met een smartphone of Ipad?
          </p>
          <p>
            Mobile beschikbare websites scoren bovendien ook beter bij Google
            dan niet mobiele websites.
          </p>
        </Col>
      </Row>
      <Row>
        {/*  <Col xs={12}>*/}
        {/*    <div className="website__testimonial">*/}
        {/*      <blockquote className="wp-block-quote">*/}
        {/*        <p>*/}
        {/*          Goede communicatie, vernieuwde kijk op zaken gekregen,*/}
        {/*          creatief, verdiepen zich goed in de materie van je bedrijf,{' '}*/}
        {/*          <br /> afspraken nakomen, kortom een goede keuze geweest.*/}
        {/*        </p>*/}
        {/*        <cite>Anja - Body Update</cite>*/}
        {/*      </blockquote>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        <Col xs={12} className="website__besluit">
          <h3 className="text-center">
            Dus als jouw website niet responsief is tegenover die van jouw
            concurrent, dan geeft Google voorrang aan jouw concurrent!
          </h3>
        </Col>
      </Row>
    </Grid>
    <CallToAction />
  </div>
);

export default Website;
