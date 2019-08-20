import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer fixed-bottom">
        <Grid>
          <Row>
            <Col xs={12} sm={12} className="footer">
              <span className="text-footer">
                &copy; Mellowwebdesign {new Date().getFullYear()} -{' '}
              </span>
              <Link to="/algemenevoorwaarde">Algemene voorwaarde </Link>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
