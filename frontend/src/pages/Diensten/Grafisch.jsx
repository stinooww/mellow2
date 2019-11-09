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
      {/*<Row>*/}
      {/*<Col xs={12}>*/}
      {/*<div className="container">*/}
      {/*<blockquote className="wp-block-quote"><p>Het stralende middelpunt van onze stand waren jullie collega’s, onze proactieve en vriendelijke*/}
      {/*hostessen!&nbsp;We hebben veel complimenten gekregen over de gastvrijheid op onze stand en de inzet van jullie hostesses.&nbsp;Ontzettend*/}
      {/*bedankt!</p><cite>Wereldhave</cite></blockquote>*/}
      {/*</div>*/}
      {/*<div className="container">*/}
      {/*<blockquote className="wp-block-quote"><p>De dames van MME trokken enorm de aandacht! Ze waren proactief: iedereen werd aangesproken en de CHANCE*/}
      {/*‘Lolipops’ werden volop uitgedeeld. Ze zagen er goed uit en waren heel enthousiast. Leuke dames! Zij hebben door hun aanwezig zeker de nieuwe*/}
      {/*versie van Chance Eau Tendre EDP in de belangstelling gezet.*/}
      {/*</p><cite>Chanel</cite></blockquote>*/}
      {/*</div>*/}
      {/*</Col>*/}
      {/*</Row>*/}

      <Row className="marketingEmail">
        <Col xs={12}>
          <h1 className="marketingEmail__title">Marketings emails</h1>
        </Col>
        <Col md={6} xs={12} data-aos="zoom-out-right">
          <Image className="marketingEmail__image" src={emailmarketing} />
        </Col>
        <Col md={6} xs={12} data-aos="zoom-out-left">
          <p>
            Klanten en prospects kan je snel en makkelijk bereiken via e-mail
            marketing. Denk bijvoorbeeld aan een nieuwsletter van je bedrijf, of
            om je producten en of kortingsacties hierop aan te prijzen.
          </p>
          <br />
          <p>
            E-mails versturen kan op heel wat manieren: een klassiek berichtje
            of een een campagnemail met jouw logo en volledig in de stijl van je
            branding. Wij voegen hierbij stukjes code zodat de emails slimmer
            worden en je kan nagaan bijvoorbeeld wie de emails opent, waar en
            wanneer er wordt doorgeklikt.
          </p>
          <br />
          <p>
            Dit is zonder meer interessant om te kijken wat werkt en wat niet.
            Dit om jouw meer business op te leveren.
            <br />
            <br />
            <span className="marketingEmail__cta">
              Zo kan je gericht je doelgroep benaderen en je kansen op succes
              maximaliseren!
            </span>
          </p>
          <br />
        </Col>
      </Row>
    </Grid>
    <CallToAction />
  </div>
);

export default Grafisch;
