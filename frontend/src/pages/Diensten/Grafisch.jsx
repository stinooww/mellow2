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
                Hoe bepaal je jouw imago? Met je huisstijl! Daar schenk je dus
                best voldoende aandacht aan. Een herkenbare huisstijl schept
                vertrouwen. En vertrouwen? Dat doet kopen.
              </p>
              <p>
                We helpen je door een sterke look en feel te ontwerpen. Zo krijg
                je een visuele identiteit die voor de volle 100% bij je past.
                Denk aan een passend, stijlvol logo. Of een nieuwe branding. Heb
                je je huisstijl gekozen? En wil je er verder mee aan de slag?
                Vergroot je zichtbaarheid met onze passende businesskaartjes of
                stickers.
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
                <h2 className="emailMarketing__title">E-mailmarketings</h2>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <Image className="emailMarketing__image" src={emailmarketing} />
              </Col>
              <Col md={5} xs={12}>
                <p>
                  Wil je een betere band opbouwen met je (potentiële) klanten?
                  Vertrouwen scheppen zodat ze van je kopen? E-mailmarketing is
                  daar de perfecte tool voor. Denk maar aan een maandelijkse
                  nieuwsbrief om je producten aan te prijzen. Of zelfs een
                  kortingscode met trouwe klanten te delen.
                </p>
                <br />
                <p>
                  Natuurlijk moeten de mails wel herkenbaar zijn. Wij voegen je
                  logo toe en bouwen ze volledig in de stijl van je branding op.
                  Kers op de taart? We voegen stukjes code toe die je mails
                  slimmer maken. Zo weet jij wie de campagnemails opent en waar
                  en wanneer er wordt doorgeklikt.
                </p>
                <br />
                <br />
              </Col>
              <Col md={12} className="emailMarketing__cta-wrapper">
                <p className="emailMarketing__cta callout">
                  Meten is weten. Vergroot zo je kans op succes bij je
                  doelgroep!
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
