import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LinkComp from '../LinkComp/LinkComp';

const Footer = () => (
  <footer className="footer fixed-bottom">
    <Grid>
      <Row>
        <Col xs={12} sm={4} className="footer">
          <ul>
            <li>Mellow webdesign & development vof</li>
            <li>Jan de Sadelerlaan 22</li>
            <li>2650 Edegem</li>
            <li>BE 0713 944 348</li>
            <li className="text-footer">
              &copy; Mellowwebdesign {new Date().getFullYear()}
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={3} className="footer">
          <ul>
            <li>
              <LinkComp
                direction="/algemenevoorwaarden"
                text="Algemene voorwaarden"
              />
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={4} className="footer">
          <ul>
            <li>
              <LinkComp
                direction="/locatie/website-laten-maken-in-edegem"
                text="Website laten maken in Edegem"
              />
            </li>
            <li>
              <LinkComp
                direction="/locatie/website-laten-maken-in-antwerpen"
                text="Website laten maken in Antwerpen"
              />
            </li>
            <li>
              <LinkComp
                direction="/locatie/website-laten-maken-in-wilrijk"
                text="Website laten maken in Wilrijk"
              />
            </li>
            <li>
              <LinkComp
                direction="/locatie/website-laten-maken-in-brasschaat"
                text="Website laten maken in Brasschaat"
              />
            </li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </footer>
);

export default Footer;
