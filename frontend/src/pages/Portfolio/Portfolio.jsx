import React, {Component} from 'react';

import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import axios from 'axios';
import {Col, Grid, Row} from 'react-bootstrap';

import {Link} from 'react-router-dom';
// https://mmehospitality.nl/project/
// https://www.youtube.com/watch?v=oQnojIyTXb8  voor axios

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio   : {},
      attributes  : [],
      portfoliosId: []
    }
  }

  componentDidMount() {
    axios.get('https://api.mellowwebdesign.be/api/portfolio', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type'               : 'application/json',
      }
    }).then(res => {
      console.log(res.data.data[0]);

      this.setState({
        portfolios  : res.data.data[0],
        portfoliosId: Object.keys(res.data.data[0]),
        attributes  : Object.values((res.data.data[0].attributes))
      });
      console.log(this.state.portfoliosId);
    });

  }

  render() {

    const {portfolios, attributes, portfoliosId} = this.state;



    return (
            <div className="PortfolioPage">
              <Grid>
                <Row className="show-grid">
                  <Col md={12}>
                    <h1 className="portHead-title">Bekijk hier al onze projecten</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <section className="section section-projects">
                      <div className="document-inset section-content">
                        <ul>
                          {attributes && attributes.map((project) =>
                                  <li key={portfoliosId}
                                  >
                                    <div className="table">
                                      <div className="row">
                                        <div className="cell image-cell">
                                          <div className="image-cell-container">
                                            <Link to={portfoliosId}>
                                              <figure
                                                      className="image"
                                                      style={{
                                                        backgroundImage:
                                                                'url(' + project[5] + ')'
                                                      }}
                                              >
                                                <span className="aspect-ratio"/>
                                              </figure>
                                            </Link>
                                          </div>
                                        </div>
                                        <div className="cell content-cell">
                                          <div className="content-cell-container">
                                            <div>
                                              <h2 className="title">
                                                <Link
                                                        to={`www.beta.mellowwebdesign.be/${portfoliosId}`}
                                                        key={portfoliosId}
                                                >
                                                  {project.clientName}
                                                </Link>
                                              </h2>
                                              {/*<h3 className="client">*/}
                                              {/*<Link to={portfoliosId}>*/}
                                              {/*{project.clientName}*/}
                                              {/*</Link>*/}
                                              {/*</h3>*/}
                                            </div>
                                            <p className="view-project">
                                              <Link to={portfoliosId}>
                                                Bekijk Project
                                              </Link>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                          )
                          }
                        </ul>
                      </div>
                    </section>
                  </Col>
                </Row>
              </Grid>
              <ScrollUpButton/>
            </div>
    );
  }
}

export default Portfolio;
