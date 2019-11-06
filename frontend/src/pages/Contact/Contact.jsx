import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Reactcontactform from '../../components/Contactform/Reactcontactform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
      <Grid>
        <Row className="contact">
          <Col xs={12} md={12} sm={12}>
            <h2 className="contact-header">Hebt u een vraag?</h2>
            <p>Wij contacteren u binnen de 24 uur!</p>
          </Col>
        </Row>
        <Row className="contact">
          <Col md={6} sm={12} className="contact-section">
            <div>
              <h4> Maatschappelijke zetel </h4>
              <ul>
                <li> Mellow webdesign & Development</li>
                <li>Jan De Sadelerlaan 22</li>
                <li>2650 Edegem</li>
              </ul>
            </div>
            <div>
              <h4>Contact ons</h4>
              <ul>
                <li>Stijn Heynderickx</li>
                <li>
                  Email:{' '}
                  <a href="mailto:stijn@mellowwebdesign.be">
                    stijn@mellowwebdesign.be
                  </a>
                </li>
                <li>Tel: +32 486 79 12 43</li>
              </ul>
              <ul>
                <li>Jonas Van Loey</li>
                <li>
                  Email:{' '}
                  <a href="mailto:jonas@mellowwebdesign.be">
                    jonas@mellowwebdesign.be
                  </a>
                </li>
                <li>Tel: +32 471 47 53 45</li>
              </ul>
            </div>
            <div>
              <h4>Social media</h4>
              <ul className="socialBtn">
                <li>
                  <a href="https://www.facebook.com/mellowwebdesign">
                    <FontAwesomeIcon size="3x" icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/mellow-webdesign">
                    <FontAwesomeIcon size="3x" icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Reactcontactform />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Grid>
);


export default Contact;
