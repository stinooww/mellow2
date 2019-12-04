import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function CallToAction({ activateOfferte }) {
  return (
    <div className="section-cta">
      <Grid>
        <Row>
          <Col lg={9} md={8} sm={8} xs={12}>
            <h4 className="cta-text">
              Kunnen wij u helpen met het creëren van uw online identiteit?
            </h4>
          </Col>
          <Col lg={3} md={4} sm={4} xs={12}>
            <button className="cta-btn moreInfo-btn" onClick={activateOfferte}>
              Neem contact op
            </button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default CallToAction;
