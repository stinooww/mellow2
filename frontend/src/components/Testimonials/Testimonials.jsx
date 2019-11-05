import React from 'react';
import { Carousel, CarouselItem, Col, Grid, Row } from 'react-bootstrap';

const Testimonials = () => (
    <div>
        <Grid>
          <Row className="show-grid ">
            <Col xs={12} md={12} className="person-wrapper">
              <div className="testimonial-title">
                <h2>Wat onze klanten van ons zeggen</h2>
                <h3>En waarom ze ook blijven terug komen ...</h3>
              </div>
              <Carousel className="testimonial-carousel" interval={7500}>
                <CarouselItem>
                  <i className="fa fa-quote-right" />
                  <p>
                    Vol nieuwe ideeën, dynamisch, vriendelijk, opbouw met
                    respect voor de mogelijkheden. Steeds vernieuwend. Super
                    toffe jonge mensen waarop je altijd kan rekenen.
                    <br /> Mellow webdesign is een echte aanrader, en wij kunnen
                    het weten want we werken al een hele tijd samen.
                  </p>
                  <i className="fa fa-quote-left" />
                  <strong>Rita - Dicomenu</strong>
                </CarouselItem>
                <CarouselItem>
                  <p>
                    {' '}
                    Goede communicatie, vernieuwde kijk op zaken gekregen,
                    creatief, verdiepen zich goed in de materie van je bedrijf,{' '}
                    <br /> afspraken nakomen, kortom een goede keuze geweest.
                  </p>
                  <strong>Anja - Body Update</strong>
                </CarouselItem>
                <Carousel.Item>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <strong>Third slide label</strong>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </div>
);

export default Testimonials;
