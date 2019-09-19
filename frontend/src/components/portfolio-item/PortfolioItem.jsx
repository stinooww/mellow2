import React, {Component} from 'react';
import {Col, Grid, Image, Row} from 'react-bootstrap';
import scrollmagic from 'scrollmagic';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from '../../components/CallToAction/CallToAction';
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';
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
        duration   : '200%'
      }
    });
    this.state = {
      portfolio: {}

    }
    //  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const projectId = this.props.match.params.id;
    const url = "https://api.mellowwebdesign.be/api/portfolio/" + projectId;

    axios.get(url).then(res => {
      this.setState({
        portfolio: res.data.attributes
      });
    });
    // create a scene
    new scrollmagic.Scene({triggerElement: '#parallax'})
            .setTween('#innerParalax', {
              y   : '80%',
              ease: 'Linear.easeNone'
            })
            .addIndicators()
            .addTo(this.controller);
  }

  render() {
    const {portfolio} = this.state;

    return (
            <React.Fragment>
              <div>
                <div className="portfolio_item-header">
                  <Image responsive
                         className="image portfolio__head-img"
                         src={portfolio['mainImgUrl']}
                  />
                  <div className="header-layers">
                    <h1>   {portfolio['clientName']}
                    </h1>
                  </div>
                </div>
                <Grid className="portfolio_item-grid">
                  <Row>
                    <Col
                            className="dicomenu-website"
                            data-aos="fade-up"
                            data-aos-mirror="true"
                    >
                      <div className="portfolio__request">{ReactHtmlParser(portfolio['request'])}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="cta-overal">
                      {/*<Link to={portfolio['websiteUrl']} className="mellow-btn">*/}
                      {/*Bezoek de website*/}
                      {/*</Link>*/}
                      <a href={portfolio['websiteUrl']} className="mellow-btn">
                        Bezoek de website
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <Controller>
                      <div className="section"/>
                      <Scene indicators={false} duration="200%" triggerHook="onEnter">
                        <Timeline wrapper={<div id="parallax" className="parallax"/>}>
                          <Tween
                                  position="0"
                                  from={{
                                    yPercent: -50
                                  }}
                                  to={{
                                    yPercent: 0
                                  }}
                          >
                            <img src={portfolio.Carousel} className="img-responsive" alt="mellowwebdesign portfolio "/>
                          </Tween>
                        </Timeline>
                      </Scene>
                      <div className="section"/>
                    </Controller>
                  </Row>
                    <Row className="portfolio__wrapper">
                    <Col
                            className="portfolio__solution"
                            data-aos="zoom-in-up"
                            data-aos-delay="550"
                    >
                      <div className="portfolio__solutionTxt">{ReactHtmlParser(portfolio['solution'])}</div>
                    </Col>

                        <Image responsive
                               className="image portfolio__smartphone"
                               src={portfolio['Smartphone']}
                        />
                  </Row>
                </Grid>
              </div>
              <ScrollUpButton/>
              <CallToAction/>
            </React.Fragment>
    );
  }
}

export default PortfolioItem;
