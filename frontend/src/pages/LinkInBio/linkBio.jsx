import React from 'react';
import { Link } from 'react-router-dom';
import StijnJonas from '../../images/stijn-jonas.jpg';
import { Grid, Col, Image } from 'react-bootstrap';

class linkBio extends React.Component {
  render() {
    return (
      <Grid className="instagram">
        <Col xs={8} sm={4} className="instagram__head">
          <div>
            <Image roundedCircle responsive src={StijnJonas} />
          </div>
        </Col>
        <Col xs={12} sm={6} className="instagram__body instagram-body">
          <a
            class="instagram-body__buttons mellow-btn"
            href="https://mailchi.mp/1d9d4f866969/seoguide"
            target="_blank"
          >
            Verkrijg onze GRATIS SEO gids
          </a>
          <Link
            className="instagram-body__buttons mellow-btn"
            to="/diensten/website"
          >
            Meer info over een eigen Website?
          </Link>
          <Link
            className="instagram-body__buttons mellow-btn"
            to="/diensten/seo"
          >
            Ontdek ons SEO / SEA aanbod!
          </Link>
          <Link
            className="instagram-body__buttons mellow-btn"
            to="/diensten/webhosting"
          >
            Wij bieden ook Webhosting & onderhoud aan
          </Link>
          <Link className="instagram-body__buttons mellow-btn" to="/portfolio">
            Bekijk ons Portfolio
          </Link>
        </Col>
      </Grid>
    );
  }
}

export default linkBio;
