import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {Helmet} from "react-helmet";
import MessengerCustomerChat from 'react-messenger-customer-chat';


AOS.init();

class Website extends Component {
  //
  // handleClick() {
  //     let container = document.getElementById('root');
  //     let windowHeight = window.innerHeight;
  //     let windowWidth = window.innerWidth;
  //     let scrollArea = 1000 - windowHeight;
  //     // let image1 = document.getElementsByClassName('front');
  //     const image1 = document.getElementById('front');
  //     const image2 = document.getElementsByClassName('back');
  //     console.log(image1, image2);
  //     // update position of image 1 and image 2 when scroll event fires.
  //     window.addEventListener('scroll', function() {
  //         let scrollTop = window.pageYOffset || window.scrollTop;
  //         let scrollPercent = scrollTop / scrollArea || 0;
  //         console.log(scrollPercent, scrollTop);
  //         image1.style.left = scrollPercent * window.innerWidth + 'px';
  //         image2.style.left = 800 - scrollPercent * window.innerWidth * 0.6 + 'px';
  //     });
  // }
    //       <meta name="referrer" content="origin-when-crossorigin" />
    //           <meta http-equiv="Content-Security-Policy" content="default-src" />
    //           <meta name="robots" content="noindex" />
    //           <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />


  render() {
    return (
      <div className="website">
          <Helmet>
              <title>Website - mellow webdesign development</title>
          </Helmet>
          <MessengerCustomerChat
                  pageId="342021876162625"
                  appId="342021876162625"
                  htmlRef={window.location.pathname}
                  loggedInGreeting="Hallo, waar kan ik je mee helpen?"
                  themeColor="#efc337"
                  language="nl_NL"
                  xfbml={true}
          />
        <Grid>
          <Row>
            <Col xs={12} className="waarom-website-txt">
              <h2>
                {' '}
                Waarom zou je een website nodig hebben voor je onderneming?
              </h2>
              <p>
                Een website zorgt ervoor dat jij als ondernemer altijd online
                bent vertegenwoordigd.
              </p>
              <p>
                {' '}
                Het geeft je een eigen identiteit, je online visite kaartje zeg
                maar.{' '}
              </p>
              <p>
                Wij proberen hierbij zo goed mogelijk jouw idee of wat je doet
                te visualiseren <br /> en op een boeiende manier aan al je
                toekomstige bezoekers duidelijk te maken wat je doet.
              </p>
              <strong>
                {' '}
                Want in een wereld van verandering is een digtale aanwezigheid
                belangrijk!{' '}
              </strong>
              <p>
                Heb je nog geen website of ben je niet 100% tevreden van je
                huidige website? Dan lossen wij dit graag voor je op.
              </p>
            </Col>
          </Row>
            <Row>
                <Col xs={12}>
                    <div className="container">
                        <blockquote className="wp-block-quote"><p>
                            Goede communicatie, vernieuwde kijk op zaken gekregen, creatief,
                            verdiepen zich goed in de materie van je bedrijf, <br/> afspraken nakomen,
                            kortom een goede keuze geweest.</p>
                            <cite>Anja - Body Update</cite></blockquote>
                    </div>
                </Col>
            </Row>
          <Row>
              <Col xs={12} sm={12} md={8} className="mobile-responsive">
              <div className="mobile-img" data-aos="fade-up-right" />
            </Col>
            <Col
                    xs={12}
                    sm={12}
                    md={4}
                    className="mobile-responsive"
                    data-aos="fade-up-left"
                    data-aos-mirror="true"
            >
              <h3>Jouw website mobiel beschikbaar!</h3>
              <p>
                In een tijdperk waarin smartphones niet meer weg te denken zijn
                uit ons dagelijks leven, is een mobiele website een absolute
                must !
              </p>
              <p>
                <strong>
                  Wist u dat meer dan 60 procent van de websitebezoekers...
                </strong>{' '}
                jouw website zal bezoeken met een smartphone of Ipad?
              </p>
              <p>
                Mobile beschikbare websites scoren bovendien ook beter bij
                Google dan niet mobiele websites.
              </p>
            </Col>
            <Col xs={12} data-aos="fade-up">
              <h3 className="text-center">
                  Dus als jouw website niet responsief is tegenover die van jouw
                  concurrent, dan geeft Google voorrang aan jouw concurrent!
              </h3>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            {/*<Col md={12} className="overall-container">*/}
            {/*<Controller>*/}
            {/*<Scene duration={400} pin={true}>*/}
            {/*<div className="sticky"><Image src={dicomenuBack} alt="dicomenu" id="back" className="img back"/></div>*/}
            {/*</Scene>*/}
            {/*<Scene duration={10} pin={{pushFollowers: false}}>*/}
            {/*<div className="sticky"><Image src={dicomenuFRONT} alt="dicomenu" id="front" className="img front"/></div>*/}
            {/*</Scene>*/}
            {/*</Controller>*/}
            {/*</Col>*/}
            {/*<Col md={12} className="overall-container">*/}
            {/*<div className="img-container">*/}
            {/*<div>*/}
            {/*<Image src={dicomenuFRONT} alt="dicomenu" id="front" className="img front"/>*/}
            {/*</div>*/}
            {/*<Controller>*/}
            {/*<Scene*/}
            {/*triggerHook="onEnter"*/}
            {/*duration={1000}*/}
            {/*pin*/}
            {/*>*/}
            {/*{(progress) => (*/}
            {/*<div className="sticky">*/}
            {/*<Timeline totalProgress={progress} paused>*/}
            {/*<Tween*/}
            {/*from={{ x: '60%', top: '10%' }}*/}
            {/*to={{ x: '10%', top: '60%' }}*/}
            {/*>*/}
            {/*<div className="animation">*/}
            {/*<Image src={dicomenuBack} alt="dicomenu" id="back" className="img back"/>*/}
            {/*</div>*/}
            {/*</Tween>*/}
            {/*</Timeline>*/}
            {/*</div>*/}
            {/*)}*/}
            {/*</Scene>*/}
            {/*</Controller>*/}
            {/*</div>*/}
            {/*</Col>*/}
          </Row>
        </Grid>
        <CallToAction />
      </div>
    );
  }
}

export default Website;
