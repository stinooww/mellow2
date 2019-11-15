import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Timeline from '../../components/Timeline/Timeline';

const Strategie = () => (
    <Grid className="StrategiePage">
      <Row>
        <Col xs={12} className="StrategiePage__intro">
          <h2>Onze strategie</h2>
          <p>
            We starten vanuit uw visie en kijken wat de beste digitale oplossing
            is om uw idee te doen groeien.
          </p>
          <p>
            Onze strategie is opgedeeld in verschillende fases om zo uw ideëen
            om te zetten in een geweldig en professioneel eindproduct dat
            meerwaarde creëert voor uw zaak.
          </p>
          <h3> We werken als volgt:</h3>
        </Col>
      </Row>
      <Row className="show-grid">
        <Timeline />
      </Row>
    </Grid>
);

export default Strategie;
