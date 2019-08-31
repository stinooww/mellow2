import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import scrollmagic from 'scrollmagic';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import dicomenuBack from './../../images/frontLAYER.png';
import dicomenuFRONT from './../../images/back_layer.png';
import ober from './../../images/Obervlees-min.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from '../../components/CallToAction/CallToAction';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import axios from 'axios';
// https://scrollmagic.io/
// https://github.com/bitworking/react-scrollmagic/tree/master/example/src/components/ScrollMagicExamples
// https://bitworking.github.io/react-gsap/
AOS.init();

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.controller = new scrollmagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    });
    this.state = {
      portfolio: []
    }
    //  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // init controller
    const projectId = this.props.match.params.id;

    axios.get(`https://api.mellowwebdesign.be/api/portfolio/${projectId}`).then(res => {
      this.setState({
        portfolio: res.data.data
      });
    });
    // create a scene
    new scrollmagic.Scene({ triggerElement: '#paralax' })
      .setTween('#innerParalax', {
        y: '80%',
        ease: 'Linear.easeNone'
      })
      .addIndicators()
      .addTo(this.controller);
  }

  render() {
    const {portfolio} = this.state;
    return (
            <React.Fragment>
              {portfolio && portfolio.map((project) =>

                      <div>
                        <div className="portfolio_item-header">
                          <div className="header-layers">
                            <h1>   {project.attributes.clientName}
                            </h1>
                            <h3><p>
                              {project.attributes.title}
                            </p></h3>
                          </div>
                          <div className="image-layers">
                            <Image
                                    src={dicomenuFRONT}
                                    alt="mellow webdesign & development"
                                    id="front"
                                    className="img front"
                            />
                            <Image
                                    src={dicomenuBack}
                                    alt="mellow webdesign & development"
                                    id="back"
                                    className="img back"
                            />
                          </div>
                        </div>
                        <Grid className="portfolio_item-grid">
                          <Row>
                            <Col
                                    className="dicomenu-website"
                                    data-aos="fade-up"
                                    data-aos-mirror="true"
                            >
                              {project.attributes.request}
                              {project.attributes.solution}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12} className="cta-overal">
                              <Link to={project.attributes.solution} className="mellow-btn">
                                {' '}
                                Bezoek de website
                              </Link>
                            </Col>
                          </Row>
                          <Row>
                            <Controller>
                              <div className="section"/>
                              <Scene indicators={false} duration="200%" triggerHook="onEnter">
                                <Timeline wrapper={<div className="parallax"/>}>
                                  <Tween
                                          position="0"
                                          from={{
                                            yPercent: -50
                                          }}
                                          to={{
                                            yPercent: 0
                                          }}
                                  >
                                    <img src={ober} alt="mellowwebdesign portfolio "/>
                                  </Tween>
                                </Timeline>
                              </Scene>
                              <div className="section"/>
                            </Controller>
                          </Row>
                          <Row>
                            <Col
                                    className="webhosting"
                                    data-aos="zoom-in-up"
                                    data-aos-delay="550"
                            >
                              {project.attributes.solution}
                            </Col>
                          </Row>
                        </Grid>
                      </div>
              )}
        <ScrollUpButton />
        <CallToAction />
            </React.Fragment>
    );
  }
}

export default PortfolioItem;
