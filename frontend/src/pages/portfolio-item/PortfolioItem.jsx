import React, { Component } from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap';
import scrollmagic from 'scrollmagic';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import ReactHtmlParser from 'react-html-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import axios from 'axios';
import PortfolioTestimonial from '../../components/PortfolioTestimonial/PortfolioTestimonial';
import animateScrollTo from 'animated-scroll-to';
import LinkComp from '../../components/LinkComp/LinkComp';
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
      portfolio: {},
      links: {}
    };
  }

  scrollTo = e => {
    animateScrollTo(document.querySelector('#intro')).then(
      hasScrolledToPosition => {
        if (hasScrolledToPosition) {
        } else {
        }
      }
    );
  };
  getPortfolioDetail = projectId => {
    const url = 'https://api.mellowwebdesign.be/api/portfolio/' + projectId;

    axios.get(url).then(res => {
      this.setState({
        portfolio: res.data.attributes,
        links: res.data.links
      });
    });
  };
  componentDidMount() {
    const projectId = this.props.match.params.id;
    this.getPortfolioDetail(projectId);
    // create a scene
    new scrollmagic.Scene({ triggerElement: '#parallax' })
      .setTween('#innerParalax', {
        y: '80%',
        ease: 'Linear.easeNone'
      })
      .addIndicators()
      .addTo(this.controller);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.getPortfolioDetail(nextProps.match.params.id);
    }
  }

  render() {
    const { portfolio } = this.state;
    const { links } = this.state;
    const styles = {
      backgroundImage: `url(${portfolio['mainImgUrl']})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
    return (
      <React.Fragment>
        <div className="portfolioItem">
          <div className="portfolioItem__header" style={styles}>
            <div className="header-layers">
              <h1> {portfolio['clientName']}</h1>
            </div>
            <div className="scroll-downs">
              <a href="#intro" onClick={this.scrollTo}>
                <div className="mousey">
                  <div className="scroller" />
                </div>
              </a>
            </div>
          </div>
          <Grid className="portfolioItem__grid">
            <Row id="intro">
              <Col md={12}>
                <h2>{portfolio['title']}</h2>
              </Col>
            </Row>
            <Row>
              <Col md={6} data-aos="" data-aos-mirror="true">
                <div className="portfolio__request">
                  {ReactHtmlParser(portfolio['request'])}
                  <br />
                  {portfolio['websiteUrl'] && (
                    <a
                      href={portfolio['websiteUrl']}
                      className="mellow-btn portbutton"
                    >
                      Bezoek de website
                    </a>
                  )}
                </div>
              </Col>
              <Col md={6} data-aos-mirror="true">
                <Image
                  responsive
                  className="image portfolio__smartphone"
                  src={portfolio['Smartphone']}
                />
              </Col>
            </Row>
          </Grid>
          <Row>
            <Controller>
              <Scene indicators={false} duration="200%" triggerHook="onEnter">
                <Timeline wrapper={<div id="parallax" className="parallax" />}>
                  <Tween
                    position="0"
                    from={{
                      yPercent: -50
                    }}
                    to={{
                      yPercent: 0
                    }}
                  >
                    <img
                      src={portfolio.Carousel}
                      className="img-responsive"
                      alt="mellowwebdesign portfolio "
                    />
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
          </Row>
          <Row className="portfolioItem__wrapper">
            <Col md={6} className=" portfolioItem__BottomImageCol">
              <div className="portfolioItem__GreyBg" />
              <Image
                src={portfolio.Thumbnail}
                className="image-responsive"
                alt="thumbnail mellow websdesign website"
              />
            </Col>
            <Col
              md={6}
              className="portfolioItem__wrapper-solution"
              // data-aos="zoom-in-up"
              // data-aos-delay="550"
            >
              <div className="portfolio__solutionTxt">
                {ReactHtmlParser(portfolio['solution'])}
              </div>
            </Col>
          </Row>
          {portfolio['quote'] && (
            <Row>
              <Col md={12} className="portfolioItem__testimonial">
                <PortfolioTestimonial
                  quote={portfolio['quote']}
                  company={portfolio['clientName']}
                  contact={portfolio['contact']}
                />
              </Col>
            </Row>
          )}
          <Row>
            {links['previous'] && (
              <Col md={6} className="portfolioItem__Link">
                <LinkComp
                  text="Vorige case"
                  direction={`/portfolioitem/${links['previous']}`}
                  classname="previous"
                />
              </Col>
            )}
            {links['next'] && (
              <Col md={6} className="portfolioItem__Link">
                <LinkComp
                  text="Volgende case"
                  direction={`/portfolioitem/${links['next']}`}
                  classname="next"
                />
              </Col>
            )}
          </Row>
        </div>
        <ScrollUpButton />
      </React.Fragment>
    );
  }
}

export default PortfolioItem;
