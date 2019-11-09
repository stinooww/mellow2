import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => (
    <footer className="footer fixed-bottom">
        <Grid>
          <Row>
            <Col xs={12} sm={12} className="footer">
              <span className="text-footer">
                &copy; Mellowwebdesign {new Date().getFullYear()} -{' '}
              </span>
                <Link to="/algemenevoorwaarde">Algemene voorwaarden </Link>
            </Col>
          </Row>
        </Grid>
    </footer>
);

export default Footer;