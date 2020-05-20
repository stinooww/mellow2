import React, { Component } from 'react';

import { Grid, Row, Col, Image } from 'react-bootstrap';
import emailmarketing from '../../images/emailmarketing.png';
import logodesign from '../../images/logodesign.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
AOS.init({ disable: 'mobile' });

class Grafisch extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Grid className="grafisch-email">
          <Row>
            <Col xs={12}>
              <h1>Logo design & huisstijl</h1>
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
                Wilt u deze verder door trekken? Wij maken ook smaakvolle
                business kaartjes of stickers.
              </p>
            </Col>
            <Col xs={12} data-aos="zoom-in-down">
              <Image
                className="grafisch-email__image"
                responsive
                src={logodesign}
              />
            </Col>
          </Row>
        </Grid>

        <section className="emailMarketing">
          <Grid>
            <Row>
              <Col xs={12}>
                <h2 className="emailMarketing__title">Marketings emails</h2>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <Image className="emailMarketing__image" src={emailmarketing} />
              </Col>
              <Col md={5} xs={12}>
                <p>
                  Klanten en prospects kan je snel en makkelijk bereiken via
                  e-mail marketing. Denk bijvoorbeeld aan een nieuwsletter van
                  je bedrijf, of om je producten en of kortingsacties hierop aan
                  te prijzen.
                </p>
                <br />
                <p>
                  Deze e-mails als campagnemail met jouw logo en volledig in de
                  stijl van je branding. Wij voegen hierbij stukjes code zodat
                  de e-mails slimmer worden en je kan nagaan wie de emails opent
                  en waar / wanneer er wordt doorgeklikt.
                </p>
                <br />
                <br />
              </Col>
              <Col md={12} className="emailMarketing__cta-wrapper">
                <p className="emailMarketing__cta callout">
                  Zo kan je gericht je doelgroep benaderen en je kansen op
                  succes maximaliseren!
                </p>
                <br />

                <br />
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Grafisch;
