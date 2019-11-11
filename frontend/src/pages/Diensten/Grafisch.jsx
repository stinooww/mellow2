import React from 'react';

import { Grid, Row, Col, Image } from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';
import emailmarketing from '../../images/emailmarketing.png';
import logodesign from '../../images/logodesign.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
AOS.init({ disable: 'mobile' });

const Grafisch = () => (
  <div>
    <Grid className="grafisch-email">
      <Row>
        <Col xs={12}>
          <h1>Grafisch werk</h1>
          <Col xs={12}>
            <h2>Logo design & huisstijl</h2>
            <p>
              Uw huisstijl bepaalt uw imago.
              <br />
              Juist daarom vinden wij het zeer belangrijk dat er voldoende
              aandacht aan wordt geschonken.{' '}
            </p>
            <p>
              Wij denken hierbij na over een sterke look & feel zodat u een
              visuele identiteit krijgt die voor de volle 100% bij u past.
              <br />
              Denk hierbij aan een stijlvol logo of een nieuwe branding.
              <br />
              Wilt u deze verder door trekken? Wij maken ook smaakvolle business
              kaartjes of stickers.
            </p>
          </Col>
          <Col xs={12} data-aos="zoom-in-down">
            <Image className="emailmarketing" responsive src={logodesign} />
          </Col>
        </Col>
      </Row>

      <Row className="marketingEmail">
        <Col xs={12}>
          <h1 className="marketingEmail__title">Marketings emails</h1>
        </Col>
      </Row>
        <Row>
            <Col md={6} xs={12}>
          <Image className="marketingEmail__image" src={emailmarketing} />
        </Col>
            <Col md={5} xs={12}>
          <p>
            Klanten en prospects kan je snel en makkelijk bereiken via e-mail
            marketing. Denk bijvoorbeeld aan een nieuwsletter van je bedrijf, of
            om je producten en of kortingsacties hierop aan te prijzen.
          </p>
          <br />
          <p>
              Deze e-mails als campagnemail met jouw logo en volledig in de stijl van je
              branding. Wij voegen hierbij stukjes code zodat de e-mails slimmer
              worden en je kan nagaan wie de emails opent en waar /
            wanneer er wordt doorgeklikt.
          </p>
          <br />
                <p className="marketingEmail__cta">
              Zo kan je gericht je doelgroep benaderen en je kansen op succes
              maximaliseren!

                </p>
          <br />
        </Col>
      </Row>
    </Grid>
    <CallToAction />
  </div>
);

export default Grafisch;
