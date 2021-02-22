import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import websitehead from '/Users/jonasvanloey/Documents/mellow/mellow_backend/site/frontend/src/images/responsive-website-header.jpg';
import responsive from '/Users/jonasvanloey/Documents/mellow/mellow_backend/site/frontend/src/images/mobiel-responsive-website.jpg';
import starter from '/Users/jonasvanloey/Documents/mellow/mellow_backend/site/frontend/src/images/undraw_Designer_by46.png';
import custom from '/Users/jonasvanloey/Documents/mellow/mellow_backend/site/frontend/src/images/undraw_Co_workers_re_1i6i.png';
import customAdvanced from '/Users/jonasvanloey/Documents/mellow/mellow_backend/site/frontend/src/images/undraw_building_websites_i78t.png';
import scrollmagic from 'scrollmagic';
import animateScrollTo from 'animated-scroll-to';

AOS.init({ disable: 'phone' });

class Website extends Component {
  scrollTo = e => {
    animateScrollTo(document.querySelector('#pakketten')).then(
      hasScrolledToPosition => {
        if (hasScrolledToPosition) {
        } else {
        }
      }
    );
  };

  componentDidMount() {
    new scrollmagic.Scene({ triggerElement: '#parallax' })
      .setTween('#innerParalax', {
        y: '80%',
        ease: 'Linear.easeNone'
      })
      .addIndicators()
      .addTo(this.controller);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="website">
        <div className="websiteContainer container-fluid">
          <Grid className="">
            <Row>
              <Col xs={12} md={6} className="leftImage">
                <img
                  src={websitehead}
                  className="imageTag  WebsiteHead"
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress. Mellow webdesign & development"
                />
              </Col>
              <Col xs={12} md={6} className="waarom-website-txt">
                <h1> Websites en Webshops</h1>

                <p>
                  Je ideale klant zit steeds meer online. Dankzij een website of
                  webshop ben je altijd online vertegenwoordigd. Zo kan je
                  ideale klant je veel makkelijker vinden.
                </p>
                <br />
                <p className="">
                  Je website is het uithangbord van je merkidentiteit. Je
                  digitale vistitakaartje als het ware. Maar het is even goed
                  een middel om jouw onderneming en omzet te doen groeien.
                </p>
                <br />
                <a
                  href="#pakketten"
                  onClick={this.scrollTo}
                  className="mellow-btn websiteBtn portbutton"
                >
                  Ontdek onze pakketten
                </a>
              </Col>
              <Col xs={12} md={6} className="rightImage">
                <img
                  src={websitehead}
                  className="imageTag  WebsiteHead"
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress. Mellow webdesign & development"
                />
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="websiteContainer container-fluid">
          <Grid>
            <Row id="pakketten">
              <Col sm={12} className="websiteText">
                <h2>Onze pakketten</h2>
                <p>
                  {' '}
                  In een wereld van verandering is digitale aanwezigheid
                  onmisbaar! Heb je nog geen website of webshop? Of ben je niet
                  helemaal tevreden van je huidige? We maken er graag een zoals
                  jij het wilt. Bekijk onze pakketten en ontdek welk pakket
                  ideaal is voor de verdere uitbouw van jouw onderneming.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="websiteContainer container-fluid">
          <Grid className="">
            <Row>
              <Col xs={12} md={5} className="mobile-responsive packageImage">
                <img
                  src={starter}
                  className="imageTag "
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress. Mellow webdesign & development"
                />
              </Col>
              <Col
                sm={12}
                md={7}
                className="websiteText"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-mirror="true"
              >
                <h4 className="packageLabel">Pakket 1</h4>
                <h3>Starter</h3>
                <p>
                  Het starter pakket is ideaal voor ondernemingen die een eerste
                  website of webshop willen. of wie geen budget heeft voor een
                  volledig zelfontworpen website. Met dit pakket slaan we de
                  ontwerpfase over door gebruik te maken van een template in
                  Wordpress. Deze template,die in samenspraak met jou wordt
                  gekozen, wordt dan ingevuld met de content die jij nodig hebt
                  op jouw website of webshop.
                </p>
                <br />
                <h4 className="websitePros">Voordelen</h4>
                <p className="websitePros">
                  Kortere oplevertermiijn, Lagere kostprijs, Professionele
                  website
                </p>
                <a
                  href={'/contact/'}
                  className="mellow-btn websiteBtn portbutton"
                >
                  Informeer naar dit pakket
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="websiteContainer WebsiteGreyBg container-fluid">
          <Grid className="">
            <Row>
              <Col
                xs={12}
                md={5}
                className="mobile-responsive leftImage packageImage"
              >
                <img
                  src={custom}
                  className="imageTag "
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress. Mellow webdesign & development"
                />
              </Col>
              <Col
                sm={12}
                md={7}
                className="websiteText"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-mirror="true"
              >
                <h4 className="packageLabel">Pakket 2</h4>
                <h3>Custom</h3>
                <p>
                  Het Custom pakket is ideaal voor ondernemingen die een website
                  of webshop nodig hebben die aangepast is aan hun onderneming .
                  Deze website of webshop worden ontworpen in samenspraak met de
                  klant. Deze worden later gebouwd in Wordpress.
                </p>
                <br />
                <h4 className="websitePros">Voordelen</h4>
                <p className="websitePros">
                  Website aangepast aan jouw huisstijl, Meer geavanceerde
                  functionaliteiten, Professionele website
                </p>
                <a
                  href={'/contact/'}
                  className="mellow-btn websiteBtn portbutton"
                >
                  Informeer naar dit pakket
                </a>
              </Col>
              <Col xs={12} md={5} className="WebsiteHead rightImage">
                <img
                  src={custom}
                  className="imageTag "
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress. Mellow webdesign & development"
                />
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="websiteContainer container-fluid">
          <Grid className="">
            <Row>
              <Col xs={12} md={5} className="WebsiteHead packageImage">
                <img
                  src={customAdvanced}
                  className="imageTag "
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress. Mellow webdesign & development"
                />
              </Col>
              <Col
                sm={12}
                md={7}
                className="websiteText"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-mirror="true"
              >
                <h4 className="packageLabel">Pakket 3</h4>
                <h3>Custom advanced</h3>
                <p>
                  Ons Custom advanced pakket is ideaal voor ondernemingen die
                  naast een zelfontworpen website nog een aangepast admin panel
                  nodig hebben. Voor deze ondernemingen ontwerpen en bouwen we
                  een admin panel dat aangepast is aan hun behoeftes. De
                  functionaliteiten in deze website kunnen volledig aansluiten
                  op de manier van werken van de onderneming.
                </p>
                <h4 className="websitePros">Voordelen</h4>
                <p className="websitePros">
                  Website aangepast aan jouw huisstijl, Meer geavanceerde
                  functionaliteiten, Aangepast admin panel, Professionele
                  website
                </p>
                <a
                  href={'/contact/'}
                  className="mellow-btn websiteBtn portbutton"
                >
                  Informeer naar dit pakket
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="websiteContainer WebsiteCTA container-fluid">
          <Grid className="">
            <Row>
              <Col
                className=""
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <h3 className="text-center">Onze missie?</h3>
                <p className="text-center">
                  Jouw identiteit en visie zo goed mogelijk vertalen naar je
                  website. Zodat je klanten op een boeiende en duidelijke manier
                  te weten komen wat jouw bedrijf voor hen kan betekenen.
                </p>
                <a
                  href={'/contact/'}
                  className="mellow-btn websiteBtn centerCtaBtn portbutton"
                >
                  Contacteer ons
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="websiteContainer container-fluid">
          <Grid className="">
            <Row>
              <Col sm={12} md={6} className="mobile-responsive">
                {/*data-aos="fade-up-right"*/}
                <img
                  src={responsive}
                  className="imageTag"
                  alt="Voorbeeld van een webshop of website gemaakt met Wordpress die responsive is. Mellow webdesign & development"
                />
              </Col>
              <Col
                sm={12}
                md={6}
                className="websiteText WebsiteMob"
                // data-aos="fade-up-left"
                // data-aos-mirror="true"
              >
                <h2>Je website mobiel beschikbaar!</h2>
                <p className="websiteQuote">
                  <strong>
                    "Wist je dat meer dan 60% van je bezoekers naar je website
                    surft met een smartphone of tablet?"
                  </strong>
                </p>
                <p>
                  Online vertegenwoordigd zijn is één ding. Ervoor zorgen dat je
                  website ook mobiel goed functioneert is iets anders!
                  Smartphones nemen steeds meer plek in ons dagelijks leven in.
                  Zo gebruiken je klanten ook steeds meer hun telefoon om te
                  surfen. Is je website niet mobielvriendelijk? Jammer, je klant
                  surft genadeloos verder.
                </p>
                <h3
                  className=""
                  data-aos="fade-left"
                  data-aos-offset="-200"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="top-center"
                >
                  En er is nog een voordeel: met een mobielvriendelijke website
                  scoor je hoger in de zoekresultaten van Google! Zo heb je een
                  streepje voor op je concurrenten Een mobiele website is dus
                  een must!
                </h3>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Website;
