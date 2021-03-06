import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Reactcontactform from '../../components/Contactform/Reactcontactform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stijn from '../../images/stijn.png';
import jonas from '../../images/jonas.png';

import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <Grid>
    <Row className="contact">
      <Col xs={12} md={12} sm={12}>
        <h1 className="contact-header">
          Hebt u een vraag? Of interesse in één van onze diensten?
        </h1>
        <p>
          Stuur ons gerust een bericht met vermelding van jouw vraag en dienst.
          Wij contacteren jou binnen de 24 uur terug om jou verder te helpen.
        </p>
        <br />
        <br />
      </Col>
    </Row>
    <Row className="contact">
      <Col md={6} sm={12} className="contact-section">
        <h4> Maatschappelijke zetel </h4>
        <ul>
          <li> Mellow webdesign & Development</li>
          <li>Jan De Sadelerlaan 22</li>
          <li>2650 Edegem</li>
        </ul>

        <div>
          <h4>Onze gegevens</h4>
          <div className="contact__gegevens">
            <Image responsive src={stijn} className="contact__afbeelding" />
            <ul>
              <li>Stijn Heynderickx</li>
              <li>
                Email: <span> </span>
                <a href="mailto:stijn@mellowwebdesign.be">
                  stijn@mellowwebdesign.be
                </a>
              </li>
              <li>Tel: +32 486 79 12 43</li>
            </ul>
          </div>
          <div className="contact__gegevens">
            <Image responsive src={jonas} className="contact__afbeelding" />
            <ul>
              <li>Jonas Van Loey</li>
              <li>
                Email:
                <span> </span>
                <a href="mailto:jonas@mellowwebdesign.be">
                  jonas@mellowwebdesign.be
                </a>
              </li>
              <li>Tel: +32 471 47 53 45</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Social media</h4>
          <ul className="socialBtn__list">
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
