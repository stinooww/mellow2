import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LinkComp from '../LinkComp/LinkComp';

const Footer = () => (
  <footer className="footer fixed-bottom">
    <Grid>
      <Row>
        <Col xs={12} sm={12} className="footer">
          <span className="text-footer">
            &copy; Mellowwebdesign {new Date().getFullYear()} -{' '}
          </span>
          <LinkComp
            direction="/algemenevoorwaarden"
            text="Algemene voorwaarden"
          />
        </Col>
      </Row>
    </Grid>
  </footer>
);

export default Footer;
