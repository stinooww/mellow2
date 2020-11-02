import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Timeline from '../../components/Timeline/Timeline';

const Strategie = () => (
  <div>
    <Grid className="StrategiePage">
      <Row>
        <Col xs={12} className="StrategiePage__intro">
          <h1>Onze strategie</h1>
          <p>
            Jouw noden staan bij ons op één. In verschillende fasen doorlopen we
            samen je project. Zo zetten we jouw ideeën om in een geweldig
            eindproduct.
          </p>
          <p>
            Je expertise schittert én je klanten ervaren het grootste
            gebruiksgemak.
          </p>
          <h3> De verschillende fasen? Die lees je hier:</h3>
        </Col>
      </Row>
    </Grid>
    <div>
      <Row className="show-grid">
        <Timeline />
      </Row>
    </div>
  </div>
);

export default Strategie;
