import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Responsive from '../ICONS/Responsive';
import Webdev from '../ICONS/Webdev';
import Social from '../ICONS/Social';

const ServiceAboutHome = () => (
  <div className="serviceHome">
    <Grid>
      <Col className="serviceHome__header-wrapper">
        <h2 className="serviceHome__title">Over Mellowwebdesign</h2>
      </Col>
      <Row className="weetjes">
        <Col sm={12} lg={4} className="service-tile">
          <div className="icon-margin1">
            <Responsive />
          </div>
          <h2 className="webdesign">Webdesign</h2>
          <p>
            Websites maken is onze eerste grote liefde maar ook een stijlvol
            grafisch ontwerp is bij Mellow in goede handen.
          </p>
        </Col>
        <Col xs={12} lg={4} sm={6} className="service-tile">
          <div className="icon-margin">
            <Webdev />
          </div>
          <h2>Webdevelopment</h2>
          <p>
            {' '}
            Landingspagina's, website, webshops ... Wij kunnen het maken voor u!
          </p>
        </Col>
        <Col xs={12} lg={4} sm={6} className="service-tile">
          <div className="icon-margin">
            <Social />
          </div>
          <h2>Online marketing</h2>
          <p>
            {' '}
            Hebt u eerder nood aan een Facebook & LinkedIn pagina? Of liever
            gepersonaliseerde marketing emails? Dan bent u bij ons aan het
            juiste adres.
          </p>
        </Col>
      </Row>
      <Link to="/contact" />
    </Grid>
  </div>
);

export default ServiceAboutHome;
