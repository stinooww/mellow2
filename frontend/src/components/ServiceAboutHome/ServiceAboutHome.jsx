import React from 'react';
import { Col, Grid, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Responsive from '../ICONS/Responsive';
import Webdev from '../ICONS/Webdev';
import Emailmarketing from '../../images/marketingEmail.png';
import Seo from '../../images/seo.png';
import LinkComp from '../LinkComp/LinkComp';

const ServiceAboutHome = () => (
  <div className="serviceHome">
    <Grid>
      <Col className="serviceHome__header-wrapper">
        <h2 className="serviceHome__title">Over Mellowwebdesign</h2>
      </Col>
      <Row className="weetjes">
        <Col xs={12} sm={5} className="service-tile">
          <div className="icon-margin1">
            <Responsive />
          </div>
          <h2 className="webdesign">Webdesign</h2>
          <p>
            Jouw website in een stijlvol ontwerp creëren? Dat is onze eerste
            grote liefde.
          </p>
          <Link className="mellow-btn moreInfo-btn" to="/diensten/website">
            Meer info
          </Link>
        </Col>
        <Col xs={12} sm={5} className="service-tile seo-wrapper">
          <div className="seo-image">
            <Image responsive src={Seo} />
          </div>
          <h2 className="seo-title">Online advertising</h2>
          <p>
            Je ideale klant? Die zit voortdurend online. Maar hoe krijg je die
            tot bij jou?
          </p>
          <LinkComp
            classname="mellow-btn moreInfo-btn"
            direction="/diensten/seo"
            text="Meer info"
          />
        </Col>
      </Row>
      <Row className="weetjes">
        <Col xs={12} sm={5} className="service-tile">
          <div className="icon-margin onderhoud-image">
            <Webdev />
          </div>
          <h2 className="webhosting">Webhosting</h2>
          <p>
            Webhosting & onderhoud: <br />
            Twee sleutelelementen voor een website!
          </p>
          <LinkComp
            classname="mellow-btn moreInfo-btn"
            direction="/diensten/webhosting"
            text="Meer info"
          />
        </Col>
        <Col xs={12} sm={5} className="service-tile email-wrapper">
          <div className="icon-margin email-image">
            <Image responsive src={Emailmarketing} />
          </div>
          <h2 className="email-title">Email campagne</h2>
          <p>
            Wil je je klanten gepersonaliseerde mails sturen om een betere band
            te creëren?
          </p>
          <LinkComp
            classname="mellow-btn moreInfo-btn"
            direction="/diensten/grafisch"
            text="Meer info"
          />
        </Col>
      </Row>
      <Link to="/contact" />
    </Grid>
  </div>
);

export default ServiceAboutHome;
