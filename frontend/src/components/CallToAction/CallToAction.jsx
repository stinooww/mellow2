import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CallToAction extends Component {
  render() {
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
              <Link className="cta-btn hvr-sweep-to-right" to="/contact">
                Neem contact op
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
