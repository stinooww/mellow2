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
            We starten vanuit uw visie en kijken samen met u wat de beste
            digitale oplossing is om uw idee te helpen groeien.
          </p>
          <p>
            Onze strategie is opgedeeld in verschillende fases om zo uw ideëen
            om te zetten in een geweldig en professioneel eindproduct dat een
            meerwaarde creëert voor uw zaak.
          </p>
          <h3> We werken als volgt:</h3>
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
