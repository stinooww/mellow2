import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LinkComp from '../LinkComp/LinkComp';

const Footer = () => (
  <footer className="footer fixed-bottom">
    <Grid>
      <Row>
        <Col xs={12} sm={6} className="footer">
          <ul>
            <li>Mellow Webdesign development vof</li>
            <li>Jan de Saderlaan 22</li>
            <li>2650 Edegem</li>
            <li>BE 0713 944 348</li>
          </ul>
          <span className="text-footer">
            &copy; Mellowwebdesign {new Date().getFullYear()}
          </span>
        </Col>
        <Col xs={12} sm={6} className="footer">
          <ul>
            <li>
              <LinkComp
                direction="/algemenevoorwaarden"
                text="Algemene voorwaarden"
              />
            </li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </footer>
);

export default Footer;
