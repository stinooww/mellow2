import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import scrollmagic from 'scrollmagic';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import dicomenuBack from './../../images/frontLAYER.png';
import dicomenuFRONT from './../../images/back_layer.png';
import ober from './../../images/Obervlees-min.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from '../../components/CallToAction/CallToAction';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

// https://scrollmagic.io/
// https://github.com/bitworking/react-scrollmagic/tree/master/example/src/components/ScrollMagicExamples
// https://bitworking.github.io/react-gsap/
AOS.init();

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.controller = new scrollmagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    });
    //  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // init controller

    // create a scene
    new scrollmagic.Scene({ triggerElement: '#paralax' })
      .setTween('#innerParalax', {
        y: '80%',
        ease: 'Linear.easeNone'
      })
      .addIndicators()
      .addTo(this.controller);
  }

  render() {
    return (
      <>
        <div className="portfolio_item-header">
          <div className="header-layers">
            <h1> Dicomenu</h1>
            <h3>Vertalingen & verkopen van culinaire woordenboeken </h3>
          </div>
          <div className="image-layers">
            <Image
              src={dicomenuFRONT}
              alt="mellow webdesign & development"
              id="front"
              className="img front"
            />
            <Image
              src={dicomenuBack}
              alt="mellow webdesign & development"
              id="back"
              className="img back"
            />
          </div>
        </div>
        <Grid className="portfolio_item-grid">
          <Row>
            <Col
              className="dicomenu-website"
              data-aos="fade-up"
              data-aos-mirror="true"
            >
              <p>
                Dicomenu kwam naar ons met de vraag of we heel hun oude website
                inclusief webshop in een nieuw jasje konden steken.
              </p>
              <p>
                Niet alleen wilden ze een vernieuwde huisstijl voor hun webshop,
                ze wensten ook graag dat hun klanten betalingen konden doen via
                PayPal.
              </p>
              <br />
              <p>
                Bovendien verstuurde ze op regelmatige basis e-mails naar al hun
                klanten en wensten ze deze gepersonaliseerd met de huisstijl van
                de website.{' '}
              </p>
              <p>
                Ook dit hebben we tot een goed einde kunnen brengen, en dat
                zelfs in 2 talen !
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="cta-overal">
              <Link to="www.dicomenu.com" className="mellow-btn">
                {' '}
                Bezoek de website
              </Link>
            </Col>
          </Row>
          <Row>
            <Controller>
              <div className="section" />
              <Scene indicators={false} duration="200%" triggerHook="onEnter">
                <Timeline wrapper={<div className="parallax" />}>
                  <Tween
                    position="0"
                    from={{
                      yPercent: -50
                    }}
                    to={{
                      yPercent: 0
                    }}
                  >
                    <img src={ober} alt="mellowwebdesign portfolio " />
                  </Tween>
                </Timeline>
              </Scene>
              <div className="section" />
            </Controller>
          </Row>
          <Row>
            <Col
              className="webhosting"
              data-aos="zoom-in-up"
              data-aos-delay="550"
            >
              <p>
                Enkele maanden na de release contaceerde ze ons opnieuw omdat ze
                toch vonden dat de laadtijd van hun website gehost op een
                goedkope buitenlandse hosting niet zo snel was...
              </p>
              <p>
                We hebben de volledige website vervolgens overgezet naar onze
                webhosting server en dit resulteerde in een laadtijd van bijna{' '}
                <strong>7 seconden</strong> sneller !!!
              </p>
            </Col>
          </Row>
        </Grid>
        <ScrollUpButton />
        <CallToAction />
      </>
    );
  }
}

export default PortfolioItem;
