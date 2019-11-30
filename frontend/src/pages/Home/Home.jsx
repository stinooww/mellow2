import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Landing from '../../components/landing/Landing';
import ServiceAboutHome from '../../components/ServiceAboutHome/ServiceAboutHome';
import Testimonials from '../../components/Testimonials/Testimonials';
import ServiceHomePictures from '../../components/ServiceHomePictures/ServiceHomePictures';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { Carousel, CarouselItem, Col, Grid, Row } from 'react-bootstrap';

class Home extends Component {
  static propTypes = {
    btnText: PropTypes.string
  };

  render() {
    return (
      <div className="container-fluid">
        <Landing btnText="Bekijk ons portfolio" />
        <ServiceHomePictures />
        <ServiceAboutHome />

        <Grid className="testimonials">
          <Row className="show-grid ">
            <Col xs={12} md={12} className="person-wrapper">
              <div className="testimonial-title">
                <h2>Wat onze klanten van ons zeggen</h2>
                <h3>En waarom ze ook blijven terug komen ...</h3>
              </div>
              <Carousel className="testimonial-carousel" interval={7500}>
                <CarouselItem>
                  <Testimonials
                    naam="Rita - Dicomenu"
                    text="Vol nieuwe ideeën, dynamisch, vriendelijk, opbouw met
                                                respect voor de mogelijkheden. Steeds vernieuwend. Super
                                                toffe jonge mensen waarop je altijd kan rekenen."
                    text2="Mellow webdesign is een echte aanrader, en wij kunnen
                                                het weten want we werken al een hele tijd samen."
                  />
                </CarouselItem>
                <CarouselItem>
                  <Testimonials
                    naam="Anja - Body Update"
                    text=" Goede communicatie, vernieuwde kijk op zaken gekregen,
                                                creatief, verdiepen zich goed in de materie van je bedrijf,"
                    text2="afspraken nakomen, kortom een goede keuze geweest."
                  />
                </CarouselItem>
              </Carousel>
            </Col>
          </Row>
        </Grid>
        <ScrollUpButton />
      </div>
    );
  }
}

export default Home;
